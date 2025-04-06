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
    "fymgFmTAYszEt5ZaHbq6nZuFyHt3p646WowbkjuxELZRgLwuqVG7gR4jfry6wP4z9wnT5fmMWy2zcYAJxwyyQp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9qtcsm57VGUTtNMqiA34HLfDRVZZg2zj7u7A18yRfGbB38TqJQ2d97oCLtDEMeqTdLRycSRyEicfN1EaDPxkak",
  "key1": "25edFzbBpPGtf3aRrzdn7emU7LXC79zDWYuZSFpXrwquLggXBcvE8breKtSDanfwBGgs9rUww6YMPdRFiNaydZNM",
  "key2": "2FA3ghGBt1H5rjp3xfuheFsGta1Ds6esuNYXekYKF7YGH3QpX1PhcALNZ2Gu6tx74Wtpv4rH7cAaavJwxmRqDXxH",
  "key3": "4yQGi8zrU14TN4iK4UaVYEPB8JAUnw8sXcXg6ubYkbx8QrwGbAwySswxmQVkStaRA7JKLQDVqcfirZAP3U4foUnQ",
  "key4": "3wL7jZscweuwRPbaGTXNu8A41CKc8UGPX8ch9uE5WQMsSDkMwcX1zWk4UdtnjvSEP2QwKZyQemSkex8Jm1rGTTcb",
  "key5": "4ibH91DkFjjibycBtKX6f7pwZwpu9rvZUEhCHnZq1JQS6GHVngHu7MGEfmGafi4HLAHnjhs3bnHqvwC5nmyigiTK",
  "key6": "4QRR2hEqJmGscxkvQcHbvNzb8xB33LSjfL9F9zM6dNcjiGG5t6xZT7qALTwPziLmnuCxu8DcWpCn8ehvAuQFN9Ji",
  "key7": "2mA1isgvwiLnePrCxRLd5HrWroRHNpevJBknnqDFxcSVEfJAVBNk8nV3dN3o7GnRkEiwcxYY772uVfYr29JYKpGi",
  "key8": "3ESGC5WZfyJ4QxvjjsqJy2zGKrk6hmStoDhR5G27S1j4YJjr2SdVmgn5rSNFdjzTEJp6LLP4DcVakXMjE4pUa2JX",
  "key9": "5QYKqJXQGuuZPsv2eZg6mphtBkXf6mzX3rDzxTVnG9h5BBSn6FZHE5frkZUne6yMh2KTkX9F919Ka8X62a3rnRm4",
  "key10": "2uS2M5VN5j8qKQHaYgNbvPFHcD1fmCSTcnrtWGvtR6Pb55dcAu6p1B7u4k3v5vgbsGDYVe6frPZ91dME9f6ot8o4",
  "key11": "38Zux6hrTj3o2zPtpJLdbPBwYoHTZ4qMCgtW4aWS6rsBLDMNDpAC8YDgEscdRFBXng9mfoe13Kxm9SsLTiKL6hZT",
  "key12": "54JRjZswzqAQ9a21REnoLb5NKRxfUMWw9M3ywFghzBnVuNFDxAH4pTgEoi63uR3d5sSNPHVTcyMjric4BhKouFT",
  "key13": "3g1tbDa37r6zHdLmAqyd3PbwBQCUrfktPpiKaSE6mo6c7zb7AoGpG1RAtF6FBSBKar7YPUZCSr1vjSenVTLVTTpZ",
  "key14": "fMFbhadX6savJH6uxa1eVUDWQPWjb1eQYdvhWrn1Hc37XF1PcXkYWm81R53VsHJVkRq2RpB8o41hVPXNMPJd6fW",
  "key15": "2myfdXtB4eVLyDyb1i95oPwjYy4RGStwem86G6rfXf9p8CCVoTV4cEvzWosyMU1StncHo8v6JqoKud6Cpo7oFxYF",
  "key16": "tLmWRFTeN9yr7ZmVT7ARLd7nmzTqrWHh5dvNndeMHTbW13hStjp3UCooGhVWWWsiaQJYFUyt2T1oY7pUMhXgaoL",
  "key17": "2mo6gGTYcYRSEURNW2G9TFmzD5WEWHPkFKhbMVF7EoJ8LYK95DRE425sk6PTR2GU8RfJaMjvCfkqriCywDEkHVtU",
  "key18": "4RFx7PArgexQTKboT596sfYodmnNqF3ehf3vaZGTt3BtSDibh8yywnu6KsVtrDuQovP5GBFHGmYtZ5cKhLrhkYMn",
  "key19": "2rbftPSB4Q8BAZgpoAukeg3wyxyGxDr7QzRW1SgNyydE76hxgyy7vqfvqs4isKeiKkHztrdpjixFMvw1CNZJuER",
  "key20": "5exd7fXr9nhEK11yPouT6PMsx11QZmLNAJWnHMfY5E1eLx9Y5nthQ8VsRt2RismbRotmLA6vRUxyUmPhYnR8AQVx",
  "key21": "67qtsZpiWV5FV5fFRD71RwcdyL55xCecFfVHHTFYQFTVYakjjHuDpveVtpXC4djyi95uRvfAo7caTbnQtCNhCpjm",
  "key22": "3QH3B7DxKNnFTNkhKF8YcMk67o2MBDeaPia8aPXdDeG8b1at1Ro5gAPdg5jozrmvWZVCMmCN6JjkKz3q6g267X2h",
  "key23": "4Lkh8i8fUcU1sP5tqLAzq4TpUSgvWw9Noy2uAdhAq1NqJpm5SaTXtk4GsCJSprzY2wP9n9rrpWw2n197z6F3DnhJ",
  "key24": "3B8HaXZBYtrtUQqKgVZVd7r23TCHRFpiPkruppm8qgbT2GWibZGfVvZsU5icyRQmSChDo7hBrgbLGFCbt66aoECB",
  "key25": "31D7roKsA2H9R82EcoLzrpngwF3gYYZMmCmxAbLKnebeq8JxfCBFSSYRsPy2ysiPA93kMNumQ2kVfGBSQauatcfT",
  "key26": "65hKWPm8uK8ppxDFfM6tGk18MUuvgyhnMX7Qn5hUQ9ohRfoy6ssQvw3jb9F8teskpPQE4qFtn4DC1YmAktGFS4ZW",
  "key27": "2Ezh37R2r3m8kHDsGBvfLyVzTTPtK2zMhPLBMnw8ATZKAXVziV4gSqdcucn5apmuyjVktohWQtXmhcjARD2jNRDT",
  "key28": "5j5CpBMv1z6ypfKNhvXwXZegyN9vH22eowBs8HGnqvESXGNu3m2Zn2ExTZfy5yTdAXhg6awLJztqdPWGHgDmozaa",
  "key29": "2aejEYfc1NKL6LGMYkYCs3VcNCyHmyEmCe1YfkhBxR1qCwRe4JoQanJUTfavqYX6tPmyRP5p79kjq6c1T3W9uufH"
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
