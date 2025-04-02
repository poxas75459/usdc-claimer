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
    "4PduUf9QmvJySXP6AP3NtTJTP4DqE8bL9uUmhuA4jxzVk6ArHMjc55TjRcz3Hy4bvDNbq11tb3dtYJiVWMRqnLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4738jFJyDDWjQYLpF7Uo1EuR23mJW9BS7CYiKxa3pFUwvQdnsqqv9r7HHBaV43LtFkFNUmFyoaKH9mDVec5DKRN5",
  "key1": "3gsjb1RWb86gVHK1941NrgxaiLhDpo1tRHUGXqs5dTxbvcXpEauUVxccAb7RQBWvktD5d4dAAuY1PiQ2FVpwwB3x",
  "key2": "2V9tUDRKwXa2DdRfzwTvakrSiuypBasWZyRkTd2uYTbv6iAsqNRqjucCY23EdFXYjXJ1zBamDbHe2339o5B9vo28",
  "key3": "2MekyFz5GHzB9braWbXMEXSk8KJkH2cxx5dfCzVdkZUm51hCJJy4Fe7cyPN5D71V3WUbYMRSJj48cLi8taK98YJV",
  "key4": "2RTxGXsVAz3DGZLsasnvq1UKXp2YZoC8mbziTaRNrLN5QavjEjoss12JcTt24Zuq4cSNGhg66gnrBDJCq46eECfE",
  "key5": "Z6vUDF13spB2m81Vm4mnNWZXeVQGMkrRqmUHm6Up57KQMp4KwY4XhJCmN6iT9wgLqostRTAhEgA2GZYaRccWYZr",
  "key6": "3rJsURrh7Mn3mWF2dj8LfQ1CWoa6V5ovH1KBNCmvt4MZHVkCfeNGdeaucDkMmGSHK5nmXdUMfEj3DijWePiE1h2q",
  "key7": "5cyEim1G8X46mrV4v9p89ZCNFiuuSXPZY9LfPuGv2hkndumu5ByL8rnrjCWtAmVJfxBcrYQq6T1wypJas5FY4hs7",
  "key8": "4eDYJyhd2zJRvzEoXENbmVFke1gedpvhK4S24T3wP7vxssqk2d9Kiwb4MFVwmTW7FMS4mrKSTbJAR6FJjGN6q23r",
  "key9": "3zwEWPtYVxoxMzSBxVM9FY4pa33qcF615jPmQCMfXhnRERuYnUJPr8eoVrLscB53NvQj3L2DcVfp3FYkuPJL1kNh",
  "key10": "4KCHVkrdWmMZ5VDxJNGUHiNP3RXhAGwuwnNLwTKt5vGyMR2tPgQTnrVNDW5rmLqRjrzrAMSBQHu9E9HumrbAP9T5",
  "key11": "5q1qe1e8RXhJyDuDtPUpbr1anvHDvCLLM1dJpwENnyBc2EJGeD8JjBXZjhXoqkkfukzJCwzQ7DYB3bb3ZGoBUPH7",
  "key12": "2AWA49gnZcH1yHdnFPfHUR8RUkT8V8vDdKwZV7qUL5aaoWJ3PqWESVnzfHQyJeAeHqpwpkUVz4rjgK2wXVfh5PB5",
  "key13": "4QcJDPDzdxpVKgGPkf4Y9KXJWErqChAQm9Uo2eyiwd1xvcWPSvGzNwkpJ5R42mMPkEczWbG5obV8RyL2g2rF2aLk",
  "key14": "hDbuBcPa3rBzKM6J63ZUg2eWFwS39xBaTqYtFUcZxvHtmzQzLDYAyaeFE63ku1ep4zoifaVx3MNXjpcN9K4c8Mm",
  "key15": "2U5mzvwGw6c1TNvKZ6S11bpMhusk32Zn2SWYhNvMUwXJr43gKfJsDN8NihmUhwW2SzELmqfVPNgsU6Kc47uU1BAL",
  "key16": "2ctgs216ogVgJQMU4fn2XEtt3ngmdXypScUX1XEwYzgsYFQSPw84Yo63mepsu3p35TwvJFtq2JDnrGzaRXQ3xqVd",
  "key17": "29KtnJPfTBaZmyu5LHC9F3P1D5S9tPAn8eoUi2TwNwy3pg1nAHGTv5qhHk6e3KEMJpPqp3C7KnmKNENgyLEM6VUi",
  "key18": "5Z1xTQJA3AebTFD2LDsWKWPsBV86gkgHktCcEDdZ9eU8Wug1KuyiJ8ABSVojqL49VE84oP9dsdiCt954by4YJii1",
  "key19": "21x3dGbPmFW4hBLZsETkySzbZpo3uEmW9KwRT63268VV8Y35WMyo753Fe9bjcHvRXyT6B18mGdib3rf1sAauKyff",
  "key20": "3MPxq6NJyMDuFABx1J9hpQapzXmGnZtovKi2JA6SpvFc4xs2NQGwnVvruzy4tsB3VgoqhegCVB77D8qgj3FxkYCJ",
  "key21": "3bkCDiRFZdqTsTWzwCtTQdAPFJcoHxcDCW4DAaf191KR9bQwfRrymxcz9hZvzbqz2jytMsVCaKJTkDkHSDTfWUuF",
  "key22": "PQ2678iH4k5SSdATTZ4ViaGzmsyQVyp9HNw2jpL2FwH8vQpQSK3f3UVJf4FbY6wHt9aMEeE1r2KL1RqT3tbW2fW",
  "key23": "5yZHuqbYmr2SsXqBKmCxKR9GizxLPnCjpW2ckFhUw4KRv4LFAZLPB7Xj7rEnVPS1rERCzJEqfCkUWTAhJhYcKtFD",
  "key24": "2oqe2JrGmr7whwrxPbL6rGtDjhXqPR2etiKo9oZzPFjAe17EMpsQPzLGkfeaTDqkNdwy65JpM3EKDLFkvskzitcG",
  "key25": "3PL9AfZfm67Rg51yY6m83MLikEuPtNfF1Ebq3Ysxvuz8pjEbm3LoNTg6XaXkSkcLB6o4LKENy5XX4wLmQXm4dRqs",
  "key26": "2yFuYVRGfGgmTLSPEqMJNQshtANmo6AWTficyEahEQa22iwBkheq8WnmFmVfUoFK7eKrEu9Y9qnD449EVUFb9g8E",
  "key27": "UyykWQY36VD1ZtiVDgyHL3WFHiSHZHdQArP86dp8xqqQDgCoCaurxwkc5s4U9GBhBnfi4YxSfwWXTJQEod7Ut8o",
  "key28": "5yNYq9pudms2ZQWcV3tVTiTNczhBUy3sfYkZmBqxZ6xtd17RPyQDAqhTBoCtN25uHSppHXUsYqWF7iksjCuookSX",
  "key29": "51UioUF5qzbgLmSJQjMHHcDevUK2HYj1jCqUbJFiFm58FxKzLutfwSbNy3AmRuPycEAf4sooF1z1jmd1mCzUQqNr",
  "key30": "5KvwVNfzXGJNKt2NVSPRDTWizd6tX1m3L7Y1V1PKxM7o2ktfmnRusGzBVrhXhKxYuKFsKR3HFFi7PF31rcuv3kxK",
  "key31": "3A9qAF2TFJ7uyMHdwJbs8Cw6rpgBvrTx5AXazLeSfv49XMjguBWRJd5M4fYQpY2yGfKWuKHqWrBsNea4N4eBzbpg",
  "key32": "4CA5iJmaYhRfaqDUwMvG2AKGhqL1MrCkiy4VFLEwJVRZdkBk2fpKg5GPA8wjN5m6v1uBxrEFbFRPEsynhSj1VEUW",
  "key33": "4fVyvieSsSd5u5PVkV3c99jCAL6DXQNA9d5jxeMDCLqN2e3FPpPQxgtQpXBFcNZqPSj7zCMhg16KUbBQncY5GVUL",
  "key34": "3wFJrQ3sHN1PpNrPSCNkvcn6g9aMBKMGos6xrkrjVfst6zHat8scNjYh4EuMVpv7No3W6DLzPzHquYjZ2XyYTr42"
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
