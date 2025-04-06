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
    "5BrNyiMvntQzoVGrrW7xXDMWxiNEg5pBAdZvF5T2a4SUtTa9DabyWeFrNTnYNr7yYxziayFaxPpvvtvX5T3bWz9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoY6xUQQrpYyrh9hgAuRndWRtRJmuAzSVqXw2Mk5Gyk86VUSLG6kfbUPEeHE4JwMNNStSr7hSsjE6wVDYAmpDQZ",
  "key1": "3gFMVYDDL1mncKmzXdHrtek8Ap8DSC189PnKFzSWU9CqzRUUwQ8Bts5pe6JaPTjtsvCMCbbAcmDCLHmwMco9xtaS",
  "key2": "TN2mdwb5zaQGwGp7owE8BaPzeE4iLLhPkpxB9T2anzy5eBUiGDWYtFCcPmuM4RzmANe6TkUhrnWaJuzGAdQbj7Q",
  "key3": "4rL3XEXs3wYduCQ3AvJFPSYHJDnxvRFXcQMvwPG5HjgFRSjkkWgx5kVemPwBFXrtekDBfzWzGSk9sHfa3EdpiEoU",
  "key4": "huoVKXXuhNWy6afNLW6Zc6t9KamKesb5ts23mkuENyZF5mM521Hf1F6geSZ6BeXDsmUxRXCNoexDepX52pDyAJD",
  "key5": "5UrrCPNqF9YkKCxpG2CRHAeEsSxCWHbYwrqEHw7EJwc9gH2TJ8ZCqWywsC6gTyGL4JY6jJQJV1FsZ3ZeuUooy7j8",
  "key6": "2JiYwk6zFR25iW3hUzfgQjmEWUsPqQxA8oLLQeMrjtVMnzpv6GWvgfpuZXMkTQM5DVtNwDH6rhC9X2HBmkRSstoH",
  "key7": "2TGGTf5bz8VqPs7o9qhixu1nZH4DWSnfh8C74gzsrCxREo2pRpn9Ww3KUbt6X8aZZMFxDchUUJWo56wnyH5PNDDH",
  "key8": "xMvkgH5gYJLtotdLWBmqo9G8QsQ5HBSXGh2v7aUo1MFta8P5ciWxXvZ5vxU1Xb9ZnpnAAenBpZkUznJhkRSYqZ3",
  "key9": "88U74b1qsaRXtY8r8e2TpSn6DxMzgAv86JLVh33mFRXxgWBqMpgYdS49GnwvFNq25EP5Qh2YexaCKg8n3Q2Pcfz",
  "key10": "64WM1xvEb755iqKjyJET3cBTHRKwmvP99g1cHm7fCDgJZC91hDmvuVx8vpQhpM3qwFWizFxg1NZi8iRopsF3nz2S",
  "key11": "2BZHJSogDNndXhbp1U6NshhgfBfFjziHNXzww9odD1u1pNwgfmUZmNNw5bYm4EpBk2cZgs4k3JD2VRpVgJnM3jDs",
  "key12": "4HAk7DTEyeRE7A1eQ8SBKb7x7EsQcAWo3eJvSCaqumJGcUtbg25xpATfa8M6N8PFj5VWFtydbFBGBn3dmR5uGf7o",
  "key13": "56vkkSxmD3AMXtnccg9UbhYzwX7bWwyvyv1uy8uFZax8YHS2RJK7Y1hVXwPDUiJzcgiqm22MiVWH2Ro5qYjC45pq",
  "key14": "3SybrsD9nUuLqvefH2s4jmBL1dnF8BgCFNBUnmVpuXn4qSiS25TbRKBGPCfs99xpQ1qQbvgPGzjHRWYAFxsmR2vJ",
  "key15": "3Q5thFWW4z9K929vyCJsD5dhgV8yxsUdFRjiJL31X8n3Zuou9U55YogW8CXztYjfzWww1bjWak9GyGwCjxLX8yta",
  "key16": "67o2Q7Hj8JdMpDuU6hnyuJsZuLYDPnzoCpi14d5rTTZNGJ6mcXV9GQeyuxntsxa734xJuWNvpAxHw3qkZ3y1hjCU",
  "key17": "2SiMLZPq3uTHbZcxHfzE1FquqELMVgFy4coGi1X9fqb4vEVWeAxQZjE4VNJL43uTbBomfwQmbauivi6dtB1x9HZu",
  "key18": "2wC9rjfPecBSqt5jGzmcbV4ko9bR2zcuTi4Yu5fQ7oiDfBN98mmm8jnZ55jKrnQFMGYTYSuBba9CE7Nc8B3i2MDi",
  "key19": "28NmHAt7iFktKWj3FqbXCFSYmgjYBvmtE4YVzPXq2YNuKqjFtoKrxGsM3cT99YJmaZE4dWrkRdVp85pLZbDz9xyp",
  "key20": "4sJGmTwy7sMwdJ6mcYoPfwAMxHTzEEWPws5mQbr7a4qk1mVpnUAFMaTYsKbApqnVoPVDjhCKT6dzrhT6KUyf6swU",
  "key21": "2H7YXDJRM9AGv6QYtTCZQe3u95MqQzkcSL4CBRYqakvMoyh5vimGo696CbFn7tPztau85EWU1fXKtvwYgLEE2QPE",
  "key22": "3RWJLXsoG9BzYb2z7ucf9Z8KWjvcMbyYffMHz5EQaxx2fMGbVppzpTZ3CW4fuK6XW1T5XRgFERx3iTxveAZN6b3e",
  "key23": "4vzQQ3A4G99QfLWM3GZB69RDuJbKnmxYga5KPiRVrtiYva7NQK68EA34orMpanBH1qbTXgaMs9geq3Ukm1nsocEW",
  "key24": "34Dr6utLaUkaT8Wg9pqgEMCRwHmgJgMsVvkwZCrNgdMb7sxtYRN4zThCxhkoSiX6nSszs2QXrGZmiGfMYf4KEY99",
  "key25": "3RaCwsnsPmcYYDxbMCV3aRvKbnRLnXUXJzngxtKVRm3Asca1ScrEL4FWU7zr8nCzrK2yLY9dgbTrqx2Xx29t3vB2",
  "key26": "666HX2Z695rQdcnSmrQSyW3LRWSssjkY7h8DZrLwRiiR8nuZaGcB5Fi3JJtcdtXSiSj2DXuUhR9YsGFXUFQ811RF",
  "key27": "WoxpPE3S7zrhC4duo4eSJhSyqKiGVLeECBE3LKYv1QFs2vo15xSgsWyqU3QndGDTQhmdFEuswhPA1QwSWvcGtVM",
  "key28": "4FV4qfxtnmgwz26y9Pzr5woF63QVxQ3u5NBty2GXmasNKNWKL9rDLDu9JBRWAXxgwXNDoTDFSFCK7zLm58QYJ17r",
  "key29": "3p3nwpcQL9VvBzvWbNLDvEKXPDxQicJUHo5LUneLVvm4T6qHiNFDrMWkeS38Grxrm1XgL1NFGWAQJKPc4H7kD5GA",
  "key30": "4sVnRAEHXtgWavCujhu1Cce8rXVYCgeJkNVaL6twDtsdhLzeN3k8favXQFLLwiuNijtKk5JzuLAHFCrtRnQFDvNL",
  "key31": "5MCuWHuijyQbxYu4GRVRCVFz4ivXvMevnK2J14GZbcgLMLjVFkx3UUqQchLTAJW6mkanE9F21iMMRLo96wQe8z2W",
  "key32": "56kjeJLrD1f3RPk4Z7HU3kJt69MvAiMkQydACdhVSoAGxXTAPeGCsHwvt2GroVvsoUpvYnwSvUAgNoGHGd5yXiqy",
  "key33": "5f4Hxd7CmMn4tipAhsZT7zXMVBDuPuxHnFSxkGK39t8gbJ5S9KaaoMT8MW7soYX1nRULAcAxEtscUhD7jRYayMEr",
  "key34": "xGK9Tqb2qyW4Ntentx4WScJSVWzJ62w3t6H7WuEBEmuqDUssX4pxUMDEfYuLK2bsdZJAjXhv3w4VedMswPyxSZh",
  "key35": "5mXy5LxRcgymVSkTspzZ1FiKzLBdXnyKaC7JU195reaJxzU3wagrXrMADNjaUZVKwe5sydsjxGRTTnDyLZr62Chv",
  "key36": "3bmNXm8FetkgWZitPQL2ccSvUKujpvuiQCTDDuiQ4qA7NLGYi6Yd9JoC4TZ7kzmJMjkCFnARLRZr1anYrEAfQbHq",
  "key37": "5MG7XVEys9JShYxzHFjLjzd28hXXVsZpDu9QNDs6o9RCnCUvvcYZtGitqgxTQ4gqVBMMvQuUBX8LfxzhFDsigAhM",
  "key38": "2bERNqsJvnsNwbukJKdtJfu4aupz7xBfENGSZ96QGreuwqrh3EjynMFzDjU1CRdg7W5QFTHBkihKuqHhLEQPkZQT",
  "key39": "5NcjUP9MMMYg4Q8PPqmhCggzYmHM369QmBNCD2uERum6XPqwk6Q4ZrmzFrJ4QzsH6L5wrSGmqZQZ2qBExAYN5i1H",
  "key40": "4gRRBHXFEmMC4khcNznKL9F3WyyqxqPc6qWp2EAgCtSipBv7REhN9kz4WW3n1bHhf8XDQSAzJhuz9x4T8KZxrxrq",
  "key41": "5qniVPcRcr3xGXidvRM2zfVTeegfEF2Qh43FeCQsZQJtJWxkF31JsEogov86CMGNmMaqV8PYqFaELJcgdurqQCSc",
  "key42": "3iyQt4HuM9DdTPht8VVpoJerzXEzYkFprD92F5ZtDmr6gdPHxamwb6BTJ75gCgCj7kCbLLUghGpd9dZnJd7vwM9d",
  "key43": "SQ91aA3Fqg1PpXiXzv6k7XYK9mtnBndeZ7G9yw2irXhUUJFR59env23et5c7uoCp157b1r9UxJrZTYudXXizwxF",
  "key44": "tZt241KTZ6mLiM6C2WBRHJH4UyoMKEfzhDfHLYKrzKzN4Ae61754nhhNA7vXaKUMGBuU5XZo5ckmVwUZajFPqmZ",
  "key45": "4pt9LfsrVKFgeSfJDSkfVFxWDJ1M6iwnwSpxjyp13WQhiwVNLBwxHPiVHvX2WCqYuzwBpHRdjzruSS5coq89gNFG",
  "key46": "4Ti2dUCqAtmC67VNzoZirKSUrgstgUzjzQvTyLvpDXR7qwSrgfRumj3aYsP4Dbvub7YfLi6gNxHt3NRyJ8fZGxQX",
  "key47": "4pusHMHYcLHEpcMYiXw5UfNWy8LRJKsypa3QGvaRpkbtTAAf5DSqSpDs9wBpuRPakDtjd2Y2K9REyvdMJPr7CKFc",
  "key48": "Cw3R3E6RuVtkb62DfUeBefFnAErVdQUpLgeDE3hB6Ke9C9GADWC22KJnshLemGKTY4zAEbGbDxCc9fYpLmyGwM8"
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
