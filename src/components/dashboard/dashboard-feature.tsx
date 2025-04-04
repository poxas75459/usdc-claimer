/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2Rx47gARLNYhKwh9iXCai4Hk7wXKpbWrjK4YkNAc2ccrvirzyF8DDCSqmo65LtN3bhetsWRu3ETieg8Xjw7ABYRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1qPXA9WvghRjAj7dabLFq8VBCJePr9LANEiWCE4egcTgiKehspxXcxryenWbifK4nVJgPLp5LNSt8odmWd9xGF",
  "key1": "pVCV6r8NXeqK81SXtWk2KDa44Xh8S8Pr91JBCH9vTD5VEPxawhZQEQrrhBabbMRZcdsHV9734QGRBbuX6euswQD",
  "key2": "3HQEVuWfb9LP9zwTjr8CuQ9r19UQQKqhd56MXCr5HGd9QSBDo93UcJCkssN5J6vr1ceMHBL7yaHhGopc1tp6KGBH",
  "key3": "5RYkVDkLfyytqQQKCwC63mAhXDWxBXusWiukiXRLDYry7DMgFHcojzVcZs9Ss3ASGLNs1yUREpfQNTzSChFZUjbR",
  "key4": "67RRbWHwkW7NeiQjK9zm3ecxJyjc6gJKi5rosGmVxG38SmMC2An8x7ogNzx5BocxJdAExnoaJopx79ZMVC8eNj9c",
  "key5": "2QHyNxD9bpWnDtVrE2bMoXinVBh9zMWZhP6Rh2HcUCE3pv1h8f95qWJw7PJYDKtAPR6HABQv87RELydvaCaTpmEX",
  "key6": "5T7fAGYQ8jjNxuYnJDhmytgfZQbUeEjCwGLvojgjEggVdYEYGif4Ze4raLcM1trvDfYic4ZmXtRA8oKXcEDrYRQb",
  "key7": "5oAB4UTZ8MfaMxjTQpuSB7kQhdpX954FRUSAuPtNH169wm5gk66y13y3idbf2EeqpPMCd3HT22JfkbB9tRn8wdCV",
  "key8": "4FUHi9J3VbmKmqsTzXcviaHrxZEf3aCqSuQ6WPHj2RvZtX4tWXndaoWt9wjaV27VcxyXHjtsYRfQ6vXfT2wnPFcF",
  "key9": "2DF1KHJoNteB1jKgaGBtV3MGtaB55SQcuWcDRJZPWMqYGsPsGzazYXMGGSsmo8Pj4Fs6ado62Jco1YqTwJkzLYgk",
  "key10": "hkKuEDin2UcgdS1y21KpLocyZao7mS5MYtmaC5GLE7hgADRQtuwd5whYerw21GBGSKC6WHNguG2vuXA3Lo97L5G",
  "key11": "MMPFgvzTeBVbx18eSzLWqX4FysPj9s18N9pnoHMTkYHZ2vfYEtNTLd1x4TCkrVYkfsLJnsVYxQfXfeN8q5A8peL",
  "key12": "zmG36Fm5y3qoyDDbFofy2GV8AdgE5WPpkvPDsccfLuzAowU27iSpvtetWn2AZYzkHnkdgbRyrujYjejBT98YaYt",
  "key13": "4oENNp1qNdzN1J2bycVNLFpUPrjLtDSfhmmJtNNbSXH5EyLHoeMuTZQVfKd7GEzr2KY3KAoGkF3fZ8gh11btB8Sj",
  "key14": "4i9cDEuUbThLJUmLmachkEA1ZJvuXFPJtXsVCoZxLBVSehGgCRSsyjy4YtPqwKPHPZXWCf1utABkQL8hfayU7Wbj",
  "key15": "BMupVxKCJcDjYWSjyyPv28yrpxfPmqmmjhKijA3nrR3q2RsTc8KPJKMQ4AXfBj8botoHK7BX1q83we28fgbqnKV",
  "key16": "3BMG3X4JRgqzr5hCFVGSoQFmFAtEY3yS4oJHv3hs8wAZbSPXAGvSQ5PcFqe9bS8SJHEyaziZprWspicMezvuhqMj",
  "key17": "hZkyvferYX5PgsNRxyLWruMYTBaq8iv164wy5KV9ikQqdnaP4xJs2c3Aw6cioeHChkbDNqorzQfssQi9tSWaKVE",
  "key18": "21K4XkTirun6QjdEwsj5wMhn5PZY2MZBxG8mYZ3YGShduVMxLYxNejC48fWwsapUQzSSER1SGgQRMZNBen7Lhfke",
  "key19": "2qYcyEtGs7x4WPxaTF3JMxoMBasFwxZsgDsLpgHKfYzyLuFpUBR2mtzdTVx3u8xSqkA3kNSwYAMLjKVh1QGsWhq",
  "key20": "49V3hpp83rKy78sthAxqPGatvuzSiBemZ4HYVv3gHJBbKy4G5yutYTRDMpbxsA8gkFfzYcmrKNA45GBqw3p1pFQ1",
  "key21": "3A4wm2qkp1oMeqQzcYKtUMUNVA2Ne56PhkTXJGWvCUqWJjvPxEBkikcNz1iTYyABxk78gbSAgwZXC2oVpWKoeqGP",
  "key22": "5mZ7gY2s9xEDPwkePuAkc8dJSzjNnBRV8zeGGVJJFD5HEZYVFoReL8jgp3Th4iNmTVHM5vQduceZWMy5L6HJznv2",
  "key23": "2SsVTCmCrjeV7iGd4H6tfQBHsrkNCi7bCuuszC7jE8guUQg9eEFPw488XS54TsPXHnYkg41ncyv8XsjpAmfw22p3",
  "key24": "4tYi2wfhyg4hSZyZK2H4K28pnqAXwkF3RajM3QuySs36chUwFGptT7rxK4t7JjKdY3WYVaG9AYdE89NwKhd3xZPi",
  "key25": "378McUZJd9JsQUuWdvhiipZj6bKGwB1d2B3L8o3Q1uBtR9gVQh2CQJjek5NvcAjMAVeeCYkWF5Hfp7m3BChXqZsm",
  "key26": "G98e7keNTXYC1ZXG7BpYWmVTDoaDFYgMeWWENH3AGDevpNy5RUk6dqGvXbhH5fyeup6gmosACMiAq8vucd1tYP3",
  "key27": "5HeEZeRVAxmHE7XxihkqLBD3ysnPsycqnZicXevcm5L8tZzCWwxp961dfNqMCSeD5FUtzxu9uGTLWkPNfTpfZHNB",
  "key28": "619dHSHJJKEPXP2pz3WeAwgcJxuqVLrart6gp4Eq7zZtaQPDEP2ePs1bEVBFFkWZydyZaEhtH1MorNqfbQxje9of",
  "key29": "2NB4eZPRY4oRkyf1QksjaFx7TfJwU4X8ZDv5ADjVcy8JQaeZEzijSJY11Tp5wYqksykrSupyE6s2nZNQ4j6ssNK1",
  "key30": "4fjWXKV44g4Z69uCDH1szJhpzXTyUWvFNw7CmhQJVUrjxE9xEytBvWhmKwTwqYUDGaoh7oEdtvugMpN39AqTM4dB",
  "key31": "6427UtZ7v47GYhyuRAqWwvvjiMqXfkzbJ2u8fHqHEfYQ7J4SNKjVBH6WZ9kB7nYaCDnEBNkXY4S1URbix7Qsjxhy",
  "key32": "5wfir7dwAx8JK6a6h4YLtUr4wo8S8yWxGw62SiaX5GeYJeRFg4vWcys7NTnezkbHnpSVCshivz7J4NXKGA7KSvEX",
  "key33": "AF478ktTB2kwXMqHr8xNde8hQs5gUn1HjEZjFrxE7kP8z8NTFFv8ZBGEwNoTeFwm9wEvjVTsyQgqqpuh8iX5G4T",
  "key34": "37GsEMDqRouTWrmZ4PyzBecKwpHYZKhEJavdStjpgkmmEd5UGduKjo6gmcbyQzAtxwGDaRa4jYS8b4BMf1dRKaF4",
  "key35": "5QtTJZikSodfn9oL5fLiEPDFrbtqTHGnh7xKwK4PLNuigMbrZh5FA7K81wH3Ju77GkGLCyHXDZaMD9mg7p31cftv",
  "key36": "3vnd7tHaMK1rQAGnCnkytgNaJQCzhGVxPK6xYt75JEj9VGhyBggHZ8pDPn7WNoye2JKaVTvaY66GZaUKrwridiwL",
  "key37": "3xuHznam4UAGGcJtJKisPBfykAaKfkxTwmQfkNMy81JBjzYV7HML3qCM4m7b4cfLjuwwSgvspQy2DALm5drJxxJ6",
  "key38": "4LecgVugEYWooCT6D5vjfDmW1Bm7U5XFaPR6H3fLckiFuaf6pz9mgJbT5ypnXgu9eskwcGZJz6ja3GDQGxSizEZJ",
  "key39": "5HvXMj5rjns3tkG6B83McrZz94miXHV3wddJnUKppTKHkWQHVLrCKYu83XutGuSgQxKdush8N3JtHEsAdM5YPgUw",
  "key40": "3VM3pN1nC5eDxbMjScxAsq3TLuYPWu4uRxBmdUKERQN2G3WQjGiVuqYWzuuGhpDaJL9GuoQJ3xCzB1nbF9qCs2T5",
  "key41": "msExtp7iaeyzcT8vzX5Syozj4Mxz9YHgmEdpoDpqJZdvCWFRjEANMWatnR4ZBGjfdZpAh2NMYTh2Zdi4UXgEaiQ",
  "key42": "635awKJday31yVS8uezeGt4NY2MdXkE2KTuRJh9Z6VdKMMZXrR93pfE5kp6X91bphJwvkQTxurpK6rSdaqytGo6u",
  "key43": "3TKypwAJbdkPo2TqF1idtANZga8eZhFJzVCt7981p1sBzzKhRvtwjwXEuaG4uoBoSz5PpwCW5jTTA1FAvveLRQC2",
  "key44": "5XzU71uLEECGjsNfNiZvdhAhWi8Yk2rcvswwsa61aZoJo7zCiRMbkruTdejECVwH9bT9KQ4SxFQHeXYnyDd6HEkh",
  "key45": "3b45AoSUVboi8htMrsVY91mckVpJgjsMUc4XnSU7SeK52dHWob7PGSCBW7GKuiYM52GvPj4GMtUBCPeEWBXxrSFC",
  "key46": "3ipzd954HXSkL8w38rM5NsScvXmegM4pYqcwSuLyj8AZ4jiVnGtqQr9HKCAEwnopqjxFH8EfuAX7ddKoqVn7qTNB"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
