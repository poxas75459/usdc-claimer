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
    "8F7MoaqsskaEHgSi277cvwkcfkKosnydLma4P9aui8WnDseAxxDvd9gFPF4gjnLxaVUwypLpiwimj2Mre1L9Y5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkL3SmAtFrDgBiqF2fRLQrkixJYPFSv34FkxS3iLb9izuc8UHSwrdR5GCCkNHuUjNpkCsExkUEwqWDtwqDtpE1v",
  "key1": "HTEhqTmCptuQhU1own5NwdpV5NCXWWRKRcSVF8xASVnGNdek41EssjFh3PeddtvHUPrJvuEJRDXWvKg1ScbZPXB",
  "key2": "5i48bys8p8DgMNSH7j786fxxJ3y2p7bdLKeQ5ujY9QiVTaycRuHBG3Nx79mKyT7ytzKTDKwjwq8m1jX3m6aPaYLm",
  "key3": "3CxAAivy2o44ewC7FTbuz1zKZfF51NX1JxwgEJ5nJrXz7H14Zoa9NezYrHejevjYLTf8hmMNcxNzim8q2ZreZEr2",
  "key4": "3Mc8MysHc8KHdBqiLZa8HkWvNmGhrffZjzQ4rjHgK7DgD7AoM3aXbcCDrw2xbtcDohB7VCSoko3P1YiYpTw2DZ6N",
  "key5": "2pXrbRiLMqwLwBqi5pxMnfpNigBMwdrty2utUFQxWyg162g12EP1CTnNY9JmKLFGssN6173jdtwFSEL8rtkyfnMd",
  "key6": "2DGVL1m2bsAzbucSqjcYP1Rp2fpstMqdRGTTkdXe49qCiEbgCQ2oV9bE5Camos1yD8hCEv84x6xhSWww3EM1bbwF",
  "key7": "4XWuZNBCiFrMGh5vUkfRF4NBzdAKKrU5d3MFAS6n8fQSN6SAbtBwQyXbpw5Ziat3cjjmvrFD33kfFGKFgXLPGRam",
  "key8": "3qNuV1eq9Rasahb6hSA2xQq449UUxHeLyGgGzDrMNxtf58cmJY5esqwf8j4SwqevZGRoz4YpnQdFtGWDEWKtUu2Y",
  "key9": "4uXFvF7tcFkb5AcGrGKzepFGVt1kojyha4QkWBjrEBnHs3CGfSARs1db8fy5Nrb3mH8R7AVCRR6R4cfGjQik8DWd",
  "key10": "53DH7sT2weEZXKKYFzhZUZKS3Yq64P8E5SWpbeQjz7SPG9aqq5fsYxJHrcZ7xAE4DihWKb8FD1QKfKkqT21ggdeZ",
  "key11": "2fN2pBkZJc54XjjrxngbA189TH5cwzx5YRZadt2ToFP5eK5nsmQ9Vi8YSzgfcHMrigV9DVnSrfzeeHN2exWD8vjC",
  "key12": "5QdUubr9XYuYZiNNAvwbG5RAj35Dh5fR9TbznmtVEeWZDAaBcQ6vHtp9k69RXiqQzCfpUbGmaA3pRG7qcyTpC52N",
  "key13": "6u9mwaEiPGyATB4N1arzCaprWaG767S4V1pTeANhJoQnfVDDBvMZs2HTT4hWC1mZ1xe11u9B57wzymtVQisvFmL",
  "key14": "5uoWwHrJbJpNq3afV9Z2xX8bN5Bt8xh4rFLUdPCE2vMCLd7wnvMBvheTXN9SQgWxXWRKdFW4LucYCZ4bsfAVZ6Nw",
  "key15": "3mfQhNHc7ysQTrU59pLM6WzKwQRWYxDqQGjR8ST7wagMCRueaZuxWA8R8y2rYnvrWr3DweE9DcCj4MBm1gT6TjCm",
  "key16": "5fe6fUppWjz9qa2JCoLnPGXyEGf2r3uuxmAB7bGFfrbFosxAmFaLNJwZLbUnYMeD7HXmJjD5bXC1LB4n1iRYyona",
  "key17": "47xgBLUWJkDAWb5hKgMTKUiCFhFLe62apdjCHgoV9VXdBheZtynaLhqoApoBntq3dHrCxhTByYfKw1zn1u52EUC2",
  "key18": "3VZFV4rAQeJyq19mKnBuCcRMFj6wwtzTK3eMwa2ucX9umJBHtsUEeHcgX3Jz7mxVrot3ufCuMGo79xBhPV9XXVHG",
  "key19": "4ezqba9HF9SLjEXA4ATjXvtRsKSrA4C8WpLieHyAyfAPBJLjvCdnxL5B9juM2t5dNj1Ec1mGoSyP8mwSpGJiDLN",
  "key20": "24dcJ9mhxk4RyEzTq5p2zr9Y7yf55qpS84nj9YXmEuk5qykuYohwjAQvL7bxQ2wiorX3VEmbt194gn6bLquY8J5f",
  "key21": "dtLN8UduvNdUxBa1yDU4PMPAdABHNDuVn5bbqoqTys4AbhTzkeNxEuR5tQz5exzRNvAqT8sWgi87M4yw9ZR5JMz",
  "key22": "5u3miQwVewHtdhciDkgpGp8afS3Y4pftVSVri3np9qDJYfifZrZx2VZ5wKpDqN4QrcXFWebuSnXtKgo448aRjt2v",
  "key23": "33pSB6XN92uG9ZFTabec6X2NwCyBAyTXT7RNrqQxg6cuzefVJ4qxVLaveZxNFna5rBeuk16BSKHk1TrDKBm8wwge",
  "key24": "493ZkR6dS1GWtJsj8k5hbHCbjZrNwirfdKUH57L3WQe4mVkaAqY2FjJNwf2MVWLAprhPToigRan6FgchehfN6WSV",
  "key25": "nz8z1xsRzovfUddSuXvLJLYdraBH7qhtsYNvFzRSkLc7Y5WQ2ACsy9Efz44YxGxrHaE1SW75gDKUw4egE2L5A1v",
  "key26": "4rn82V6QAkczwphmtMEkirx4CD8PwQwBufP1jAjLdXts89uEk7ouvXPVBXhMptSawK8Yf9PtCf8T34TeNEBUuVBK",
  "key27": "4Mp9RNbnZWoTi6iL4bmbjemTLfNwNpQZh4V3DcnrQV5CWhjcDwUDVCZT2cshHk7Ei38jKZgHGot8b24PS8yu4tzP",
  "key28": "66C1oLpVBAAPf6FLv3RRp57hEKYhXaFg5F8dTA1njbRuEGpoDBajgK3QBwwwzqAPSHqEuf1vJtNB9PMiQnHYd8dH",
  "key29": "3xcE9t8haQm6tNRHzoBSEEmYRdDitdhdhaBcmTKqAKL6dLnzdf474VqLrEKbFmDcE3dDEHEc66o7RLrxMPU9oNuR",
  "key30": "3EYLAL6wbB9ThQs9b8xU9vQGcn6LHH9ayjDnbGMDsJQx9nRewdZQQ2M76BkbxUy1P78o4m2EBZZMiEMu4a2AXjV8",
  "key31": "4Sk6r5cqJB9VQkKJpFrmTyJzz9cnMcCfn52ExNLiiZiB71jqy7Nnwa6kGSKZKxKyBLD8rrHv9tZTK49xKccbVehb",
  "key32": "5C15k19CqbHNCQRfzfuAabcCHeCySDvmx7M9vBnJE9bLSMWU7w4WhoDD9Yf3i5tmCq2Dd9Jvv4D8riPZXWDyyrKg",
  "key33": "uA6NBFjEGyxUHMSUH5hU1rGFLHE5kksaZBtVJ1nRDh9DbwDy18SQsraigctneoQ5drYD5M1ywBEkYWgMtg5gTUr"
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
