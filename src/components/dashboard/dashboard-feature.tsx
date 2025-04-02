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
    "57UjwP2ADDL4Gho2ASW1917mo3E66s7L7u3C5wzRt1yv1wScWpmNJpW3D8d9zFnftMLtWzJyjNaVbZYyPrXyosj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kzSdAYm5gXgmAteMVVxmf3VVEngPgoZb62pi9Aw73c4SsdNfjV3ce2wdwdutViVrvKXyRhmMU2uC51hD2626WVJ",
  "key1": "2PitijfmisErszhLXxzfcwEe3GncZh5rH6wiT3mCoFGFQji2Dk2SGv3PeydMFd3dprbmVv8biLNEUYNWdU8VvGL",
  "key2": "51mcGBLXhw86YdMeBdRU7pMjHj1hs9G92cDGoP9DdQTVu7QZYcjGHW9ahCxXFDkeiX6rxrcZgGnhCgrB7dt9pi41",
  "key3": "B9S98TzFQKhPSyMkWhRxFRYbc3E6iTvd7LTRavwXYzsnMW6RpX2pYoELnqFQHSmz3SNXe91Jzxtd2mAzMu6GfmB",
  "key4": "4hscd59SZQHEXqiTpHMrcXmQhhGRcaiQem4cmu26Y9wn6RtaZs2VzxhoPGvMDjttujTSbMUEDy3fQtKseDCPLzhB",
  "key5": "5zgvydGbc79YJsKMPrK934db545PC6VnZHzwWWpa6aQxM5WpsnaARwNChkNz5tMTtkArsNV7kNxbHJ5HgSfa5mve",
  "key6": "62nydxMRyGJQaPzEZpCU4p2dct6ZWBaGGD5qX99iExDE493iQY8krgv52mm1xMJtKH44UdMgTCEXu7u7NdRRGqbw",
  "key7": "262cinqfGmT1j5jw9boeNQAKf3oHcgXJXkEZng2prgZPunSdnRuKENyyn7aUzwtXi2x9P5hoET5HH1sSrqZskiHc",
  "key8": "56CPppx6bVxTo8dk3RJJYc8cLse73bUjKZih98bQF1p7bczVXgYHkwp2XuYH5LU1zjj9d29R6JyTaBzSqjPG9pwh",
  "key9": "56J97aJLg2PEkDHz7LVBZJoBo1NqAYY4Ty31irVHyiWjYJ8yyqpa1X8SyxuLhuTrVgfNr6jRHdDQbznAozAyL1Wh",
  "key10": "GqSkSEuYaNDbawox3a9wo6oeksZCkcTZpZTNyRYk3sGoEtQX5rNwpz4WjtVm7FtAsRFWvWmQhbcDpfmsTryWP7k",
  "key11": "2VygQt4rscgSnmcKS3FmEFJGUMtvwqfExzpAV4uXP4ybHUKgi9e8VD1Y9RnWxc3J9gdBY8o8CwteytTm7j8EFggJ",
  "key12": "5WXjQiak7Bxd1N8UedwVRNoxXcRsfCyrjCK8vAnKpJDbqwuYJJSfbr7LJpV1naKRFvLzsA2sVAJ6m473KVDEZUvk",
  "key13": "2E2QgxMZAjacSi2rWuoDFSYvvfABfXdDKu9dpVxyekQTBGrRwCZHWyJwwB5Wgnat9k8qzi1oLfmjdmCSE8auZ3QQ",
  "key14": "4BGc3ihRjVgqZcfZMK83MuAQ8FxjK7iRZBVoN6Ub19F2qq8tBYwZecRRuGoAYSvRPhp3oY81UqbEhh3mdUMhginG",
  "key15": "63rMUCjdyxFcboPnP88FeraRxwLQxfpWFkYqYkfbdnBs4iP67Bc1zyRbTc9xjFpHXmA87MsjFFWuRmYDdgcQECXx",
  "key16": "3aLtTdWbwqzwopvj85ic2bQ69acUZEBBLLKwfFGf5psVeQhnQuJP9ZXpLAAe3kfoCKtY2Ws94EQDPeVcgeZVZEuX",
  "key17": "4AYgxf8uPfVBVnYzrtW6WyBPhGkKhG5yMqU5Ey9Wa16aTzocaRSsNGJdLAf1DL4mvvH3k1UAo322rBLkiNRcufet",
  "key18": "4vxcc6bemDV1Cb4HPRRYZXb9PRi3FP11zmnUitFFBSHwbQHrbYDwu7vJ6rU1uiKnn3418ct4wDZ8q2oGGuuXGTZq",
  "key19": "3TquPbhmAkFsDJ6T4jktXvUsDJ45V8Cxk1dBaHLpSVwYqT8XZw4edmH1mJ3E8kenV9FnMsQvnWjkywkA18aKzBwp",
  "key20": "pWfe9A5VNEt5a1S4yNJsvtAkRBTCV1w5n1dgzmajd2jBDu7kssjg7PAyzRmxriRJY6N3rdPVGsZJnbfoXh7Nk1A",
  "key21": "252CAtvTKJQq8nxk9zGj6VgB8n2vYo5Cj1xx4FBpon1R8VeU3858WPu5EXeBeAL63nXcqfkpZ5z6A1iES5HoTwJq",
  "key22": "5ZrYSG4VF5rvHMJ25caMpxNpnH1xn1xzi4EFbS8CvwxyEvP9zbuHiZbQnp1Q1Rew3nDhRJe9aAsYhiU1LeCfnfkP",
  "key23": "4uZcVFzFPqsRgsn9UqCJgE7D767pjE4LkunBEhuSXF2L7C8cJmvrX6BrwYPaBDBZA1BWySrC2FdUbVXVrXej7LNJ",
  "key24": "CqxTd9w5Va9iucuUQi5AzvwmGhCpARB1U5mYXBBYMTkhuFxiCB8mYVo14rWvGJWn2VvRp7wdprjk7Y9iRAFfKCV",
  "key25": "3Q8LwjU3nZyEDtk8mpaq2q7uZgqaz1QogtfCZUSp2yQCfcJX3o5DhdpEheZ8UjMesTt8sp14LzGZ4p177mxGm8Ft",
  "key26": "5LmT7DW8EwBiawMH3WapkEACQY5viTnEdQLtjdkJwx6cv4Xy6Fj6ings232GymehJG9LfwDVqwERNE6anzU7fW7E",
  "key27": "4tgeQL1GrRRhomxKpGyJj6qep6GuD1LryAKV4tCqRv6ZFZQk3sZExwMiFD1HvSfBsGuvGybHELxwbdm6snsoANcc",
  "key28": "2cuGujZ3HEFhqtBCkRkBMGnwwEEiod6ER9yRae8wqttSVS4vrgBHiU5Gka9i6Jan45Hsovz762447Uw6vRqEjd5r",
  "key29": "4NGHcvXqNqT2DNAfgvSfeRELs48a7z6PCV9Jjcw7wj1VtEzdUtxZBaGfiSHYFoBJv5wfQBCGFcAwutpSUHAoiHsQ",
  "key30": "4otGeGknvsXpV3hSPDtcjUFwGMm5AGUG25JpVTdcvDaRgWM6Fpv3iympcxDJUoEnU4VNFjZFdP3nFT3VFfqcaQ8Y",
  "key31": "APapcyjRaZyvGmK6eK5Ke4ewTZdifCcRq7tKR4aaJKFNcscRJu2y5sBfJFRfdYpeMe8hG9a7dSkokk8XCrUdd2F",
  "key32": "2WsgqBm8SNr65zvhfar3HYJYoPymcdb4K5EViYHiKUvpcrKC35qMrmBg6xtw8yzqk7rXL3zEWVUCb71dvhBLo9A4",
  "key33": "3WCDY7PUKmNYW5LCkhYh4ePXdY4tY9uXhgFZdv5JDSrC7Bmb9auAmrDka184HX2ED5YbYpEuxbBf1qY3wCP6eZmA",
  "key34": "35HNYKx8nUriNhnRzEusxDnYFP3Mb3NQU54nwKkTVq7BKx3puruDCorrmYR6dPdeZG7ycHWTuoVrjdDQyDQFWreq",
  "key35": "4y2fuoYtRjKgYaTKDePBLgtMJLU199Vo9MuDajvRN2kf4UC5BtwecANzKpN2v8avvjp6HvPRJNnYpjpgjHbH43wW",
  "key36": "5ggprbEJtgN6KrvRuhaNd9DbKG9HvApNCbq2A7UrTr7XKwYGyHVwqVUPKZ1T4CkC5TFmMBhC5CL5FKc4E2sqkLLE"
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
