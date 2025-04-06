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
    "23QFE4MURP3yu1c7zRDZta6BXqZcBobGr3DoxDjiWXUUkeGyoyjxNp6C62NQBp2HSLtyxwwT256JXBv2mK8BzQah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcq8XSekouKDw3cDiLkMwpHU7Qe6kggRcobXsLq453ECM6EZWsKDdrCKcgia9f4PJxckzQcAEDw9BtVBjst79Ju",
  "key1": "4Xb3wXa28D1UVG7JcSWaQDJALesxTTJXnc3bCzL4iGioMpfPuCLJZGguAbXAKBa2acM1cSYAz1YsRsQyUVM8Hxpy",
  "key2": "4tjZmCE1HVcKBg4fs69XniGPsNoQvaPKsYTnwdoDs5611MZNY3wrEcuVBMhMfbTH1JgwwHavpZt9MKBdJh4apMnU",
  "key3": "P4kHYB1UJx3FsHerugUdNiYsfMTmBWvVsoRd2LJCqADkUkVfskrGZtfrHJUV1jBpiRnfzuXEtJhp7UokBWpbmPa",
  "key4": "3ieDo8AMLpvMGofi1quoTciAGf3mFWpMEvjsepZDTNEsUHsF6y48xs3ZbwtAp8KRCKaxeMF3cDbGynZQ4CTEoMHJ",
  "key5": "3RF6fz1XKZQRFtHEGJvjKF9prFt6SCxnEAxzqmTbNEPiskzUn2MsoCeZE78qpc8EDicXnCfEDstgP2dsnpYJ4cBy",
  "key6": "4PU8jVrmGRAVZXQbGNydedLZPn3nTwkyhrDmidr9EjhWkFEN5exghmvmA3bFHodmWgrU3UfWJUfx2R1wcqEYb9qv",
  "key7": "4QrwnXcWA9MHakTeEaWkJcWveTvgxdks1wmvFnBUUrvwmm8T1B98iGQg6VxgG7GPhhDLLmTTYn1j6LendRgRbDuf",
  "key8": "3ZP7L2jLqu515xkmZhxdYz5rrmbEHovRthYem5haPKaGW8F1MwwZ5idLRL1MoCGu8PNzRMPapyt8BgnLnawfPgyo",
  "key9": "2qoXKqxHjHSADfxcxyDoF1HNeCtm91BzMtvqvHqnUP1VYDwwRE9SAwYJGncuHfMpKPhM1Q6PUnqUC3heJqsFth72",
  "key10": "2cKGsjcUCD3rgbbgGouC6AZY2jTpWDZFRs2DaSocPwQwtFMbLpyccx5EkjJBAvmnPSRL3jDg2Xsdgu1tSgTsZ9xq",
  "key11": "t7SDZYqw81oF2N5mkJxiS1mQX8p72mquHFYHbb1H5W5Gg5o4MK3BV123LtWfHst2okAcesntDSDv388bMEvX7h1",
  "key12": "59BDEpfJxpm8z6nKWRqVuMcvJpUu5Sz87xcwWzBu5LWo7HT7u5qc8RyBuEffm5o5yQhs8woPsGdHxd7K7umUFLoA",
  "key13": "Gvd8hmDARBbfHGAjPwCCvLDe8YD9scdwFHjTpGYQgbFgRB2j9PnYefvXF9idHqG2UoV9Ttun7g4PQhjhKJPi7yL",
  "key14": "VPocFwp6SYeBHaXKcq2gmp5kvRPGn3QSek9AHau5K3P6MU1cbwJoXfgBWLQ7f3jiJcR6LyYA2NshxSsRmxmcKk7",
  "key15": "44QdkVdHoPrsz2G9BYeEVELAr1SNe1si8AxMXjDiLhxkUHsFJBZQqmtcvXnhpJwpdVFYEnhrKcaSQpxbxLNcXJid",
  "key16": "2Tdyzhc3x9tqJSxbi2AUERB7hb1JReXEYGsA2RnEVsttWjxFfjKDT174N2fy7hM8agTEVAeydwx413jWmkuYXcme",
  "key17": "2xzSHZNCyz1dpM9eHq7SsWsw4dzm6ETDEGyaFzkC91MBvJnMKXTbyXTMyVCFvKNtFyAckjfDkMyLegqxkJd1w3om",
  "key18": "4PpD53n1TWTiaw7apWWNm37VRqpcpRzoBbxMf81NcMjhJJB337rB5wmzZbi7fJrEdvEp5w4zcCi8GKaptC8Dd11i",
  "key19": "2PCWvTQC9KpALq4udtgAgiBLPWHEzHB4WMX6C2nugzdekQYKH1T86MAFgtZaZjBSBozPKbxm6KWGZeY6maXGMCnv",
  "key20": "2kkXqv2a8KYco9X9Mhw427sDY7t8EQrk9gQzNRihASaskEykGw9kwoNQDnFF7L1Fh5LRUx1EMferKFZhD6niDkWD",
  "key21": "KuStUZLNW2UixF8MRPpRd2kcRpgrgfmAcw17itNtYJeZeeY2TQvjobfH8Ei4XNGzfTrMq68549s66nufKVARYja",
  "key22": "2UZp1i3BaMn7D5aGtxRzz2TYZet2LtZKxV3S7Dj2yp7q31wsGWTTnGQAxm1vczEujfuPqpeETFs3rjLxc4FWgU4H",
  "key23": "5SH5TXeQvKe45tsQ3eXvnaQXKd81XT6pk17QVQJmYRZZDXvvpBFBgxQ4dNrjKyEwGKGn3TYhkiKCjq6qnoN9Cmq4",
  "key24": "4nfuoED7b3fnEquqPmp9nME2H7HN1pB1RAmN3ofE5gyWf9Jp3kcCzzPEEzSeWGavbSETzgMQbURt426nSkdoijnD",
  "key25": "4WP8QhC1av7SjZgqTgzU41gn2Sazs2W9ko1PWnHXFmdGZu5cMZpntP5vm116vPD1Ur3VXoVFTFiyfsD2o8BobnoF",
  "key26": "gBVyir9eJkTHVkogyfr9vCrgCubksAXHVkMJ4K45u24Acosb5pACb3g2Gv9Ld38AY7TPuEgnybfdToxX5Ht8QFz",
  "key27": "4fRZVJ4KkrBYUweqeRfY5RqVuhfSb9iv7MdY6b7S3Vh5fQe2Agscu64Sa6SsCLWi9LM8HGFHWcAE9PKKPQvzMxqK",
  "key28": "2CHsgrD31iytKB2DmJe7fKT7Mqy8rCBEnT3WYNZpkn3SjB7toAYmH95DA8yw8rAa14HRAbPf563CsLvnRS32Xzbs",
  "key29": "5J2Tb2zrgiS9XTSZ3Hx7iaW9YJYW3Y44YfMxJ5k6wbvsoznQMH7yhPd9q3g5dS5kUzC2fbbHZo3BcRBGhY3QtvJc",
  "key30": "2emejWqPd2wAZr69aVjd5VMCZmbEv7pMnEY1JcaKcHM2mK7nEEWYiZN7A9FUniGXhiPdJd8sm1DoksEW1FRszshY",
  "key31": "5WpzJgbGKDcRhjmCnVBhxWBQF7xg2ZBvCrzpEt18RBYXHGjroqFyxoGwsx3ZyzoqSwV5QTvaRdasK6dpfeFnM2PH",
  "key32": "3juVGuwFApvTEe3HYj1o8tiZTJpt4skNR7jLuJViD7tkHVcvQwJKBzM1sdPYubJR9hsUpbqDWubUk8PzHcjpQn3Z"
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
