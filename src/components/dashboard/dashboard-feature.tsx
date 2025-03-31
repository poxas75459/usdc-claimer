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
    "dfG9188DqcCsiW2ypBAKNrwH2s5nQVd4FQyLrt5rtzus7r3eR31vPR3zUZvnZvyRGgoJxLoaDgVutB1EMjdxjeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NgNYZZgLtXed1rJwV6nhjeyYRRjycshQB2Zb2AcVb1ef2kzxwNsKy55jngbHwBWub2ZiQDLGD8QUJBkbRDJuzE",
  "key1": "3m6pU9XaZvBB2A4jTU5w8M37ozvj1Wc48mNnZfBpErLh4BMLj4rVG6FgVJqZddeJKqpPcVjB2VrW2QDSnrWVrcCe",
  "key2": "43CdyuMPNrGZY3jNBdxG3fCEk6sudCf3uaGPzM4Hp6e1qSFq7DR1YMzNo7ddh5y65w1HjUZGuJJ4eDYBUtUb6CnD",
  "key3": "55ZwNWrP8B2bTb6PfRaS4AkyH91SoYHrtD33hBXzwd4KizaH5vpoEog8fjmSG1mdMc6BQDcqwfdckUSwM4nkrP9z",
  "key4": "zAaCooNpURHfqZodYBxvU2KGrtMnZxD6XWCTPoNkFZMuj1DGggP9tCaz8dQmspFe4iscPYz2aRXJcR7YzjM37xt",
  "key5": "24Ab17tN721fx6N263xK3jB1GzUqNHauVYuau2DpwK7aWizxWPxSjCLWxKa1wZqkPuQSryEc75GEHkgnKTbipJwK",
  "key6": "4GR39P1b6txQ3v3ecegX76nbtAvLgK7JZF91drHXJ7AyAE7J45tJQi85aVVYpUtwrmfSz8h7B3pDzptYBk9bFewV",
  "key7": "3y7KKSg8K1sS37rEXrWDDk5s3vbpTk13HvqYjAvCgZnmytcuVbghs9bXeLe34v34UMhZzE8gggPfRoS7kWDe8aB6",
  "key8": "2sPq8CXb9e8hs8DYRvZ78LBs6wTbn8GnmHKNTZjgk7ubFGzSHUyBDhpaigcWNnQ69aCKFhXA7PH16wfCxe9rqkLD",
  "key9": "2ygrHuhxBeRVQQ9rZiMfY14P5xkQs6DrDvW5AkwGjrMzPmqECJQc31CKFSrzPARfzbFqBFQJYh4CU8S7PemLRu6G",
  "key10": "21Acjdi5mX2zSvVw8gUWLzucd3BdgCZvPJmu1g6ZcTxzVX5kidFPr9txqdtBZLHAF7KtJtn3291h71pEG3UTcq9h",
  "key11": "b5tbDfhiyhYtyFMjuKvGsZGw3GW2PU7Hjy31LsDsKs5tbhJBiDHuD6grpPUmKqtadnnQZpodxJnHkfvuCkfGccj",
  "key12": "2JDk3q5vwPMSDurMKj6YRVqgqgM6K29iUWGxeZCD8wNveUbGmxgRrNdJcXECtNu1XVd6oXcUGV9DiJiMeJLuJJ4k",
  "key13": "CxiQRsrHkgqydYyp4wcGFZeHf3N8Lqpximb2TEKy7cyNrS66sDiQTjbW2P1LnTFaks5nQfPvCBWLN4tYJiSzYDu",
  "key14": "2S2hg9kXYL8hVqGYEKuXjWhPTHBJWUdt1h67CPYuem6Twd87hpr8s3aFLiDZBWd7sZ7siXmTN91Bnvay9mJfWUpL",
  "key15": "3YQPUga6srNQwXGmsL5384ZLcDRfRXmhFef2afMpUeGUi2oMXnmiquS9xog9kjDyRKJ2J7KA3RHgPAi65jBMSxbA",
  "key16": "6261d5NtqTe1yQkYgvDgxCcHjAMb5mNKy6TGqy1i5tk3UDzKha8pMnNSvzisJdcZEvgt4SNeftREbeBnVeHucMKX",
  "key17": "9u2o5BqcSJWRtboFgezH42tyP6QWX2dcGyLTLNsK4MFVNXvKrtrQkZsNjAuRpMU3JCxUrQs5xtJvSUPXTk8BYvC",
  "key18": "GpLDvCXkPusgBECWWLRwn93peytB8rmsxBDQLu1BxiTedFV4YRRnDK7FexQ6CY8hg2r7CX6V5gacMU9gN8r8idV",
  "key19": "22h8jpzftWWAE2e3uz1RJSwL59DwWQ3SgpDdk9DBZ4f6iUcWZvQATmXVhiKpEuDjA6JuE9umRu9hbXjx4abgv2cY",
  "key20": "581GJ8nPMLWJVoRVZMEWjDeaUCmzzNnAMndhUtRT34KAgz6LHiZkrX7eRiqKQFknKs2nBoD2Z9E49hSq1MFo4Y1A",
  "key21": "57q7XixTC8uYp9EDi3HunmFHCLb5ExWKsDGkEw6qYJRL6tgaK4QKDgZjvrk7smHqhtsS2uhS5knwJeLnK6UB9ThR",
  "key22": "52Pn22fjETTGRAEUie68zrqpTLs5woS1QuLgmavUHM1NndH4uL2iCGxB4n2NdFK4bangHXQG8Ls79g5m2cb6aMHX",
  "key23": "5Rcc2UpYiu73sbzoYJzEJf3Q8ZZ3sZfqTeDyuhuKV44MNNxRbKdmLHrsBydKM5dpvPqrwQxuwnWer616vE321RaE",
  "key24": "ugcQbj4RuAdFuoeQT3vYAMSm5NyrHVsZJizU5wRvanj8pcpFecryN5BDQcMKNjF62HmY5aUnng1HJkFEgRfDdvv",
  "key25": "3BLsBkUfFQeCvEvqYgRiswJ2UHKdWo6xcKem6uEuJE7CZ1R6qG3VXUDF73f5ejxtVNkCGvtmW8qaiUCaJpC3u2Xi",
  "key26": "XnEHVwv36zDZJSYiSFv35X8kp6nsKwkS55okxH7xwofbdpxF8bgVt21nEs59BjmoC8bU7mFGJxZATxeT9HcPFnX",
  "key27": "2Dq8pquti78y16YMLxSqyqQytQBfhkTTX8fzPqJpR9SZBCUuBuPz7PSyruSEQL3kxt6BwPQpP8AvWjE3A5GDitm8",
  "key28": "ycm8JqcNETZ3C5W4xDpSPYbeRAikBWCXECRaECaYkiNzpNMxmPBZXQkiinH43rcBw7KRoDNNdQmyDwX7aPcTDxe",
  "key29": "aFpfSVXbjifbH3cVAH1pz7RscLKo3Pd6JEZjLRtfVHNVfSpkvN1k4aK5nWcnSNXk9QRuSWRw8xPE8TPgN4s1XTp",
  "key30": "3YTjSNmcPoo7pKy2h6mAsfJnPTK6UbePVQr7AmsZCmWZLzB4sTmRviHqdDrfEpwzzF13fsa4AQC2v5wf5DutCeZ6",
  "key31": "5fFSSyCpbHt4AMCGFPytub1wpSWbsNTc22yKMvzXf81UeXejLDrQE5Lz1BHdSLuD4KN1CnBgxNfDk6H1m2TBPHqN",
  "key32": "2VGoBfoE3TEaWz9Fx2CYeVsPcQ5Ms1XCwRtRxuDintmaA6xTHwxZQvz92LFngYZHj4AsmMeS6dm5frjNASCEd5Ny",
  "key33": "5zNuxGiQPFG2pBBxUioB1VaZcGJFb3XEYUJc4VzdhEDGvdgze7TjmP3cNPVUtNzLfbQcrWj8GnJKS1JHa3kbqPoG",
  "key34": "5YVMrcicvo4YXgvbhbs13UeYyUvCnBTD1ntCERqS79NvUnH2QVdmDHFyQNuBVZsXGeNRyU8ENNdjkdnjZZzKBDJ8",
  "key35": "63yBB9kyGkQPmXCfVuXWS9hkCz9RUpoAjqcZQ8KpFEwQUt8PvUv9i7BvdxArEtoDfdFrVPGZYNwxCDAGn5rk5od9",
  "key36": "3kxy2gSZoapPnNHSvfoEMkfQHg9gvp9hMcwhs4YjhqNfNU9FVF9ku3TwX585LhzqSSM7GKeQoKe25s1K6sjwBAFg",
  "key37": "tiSdUbHsa6bNvqwnduLHcUXPx4UCLKQ2qXg9G3PUbLzBJ4kvGcKdDfuzW4LRAxWXJt86mG8oqcsec63brx42XFN",
  "key38": "FcbQPy9z5Mo78jrq9LyY7UdaveUJpHJ714LVpu5BHtGGjLb7JAeA7QFBXKUrm8ehuBiemciL7ZFjZHVfJPHf8bQ",
  "key39": "5AJZDyesRJa9CMeiQTycfy5U1rFVCLBtpEL86wyYxMyuNhPuezSDc6JnVv4HrQL1MaRxbkrWtRUxr3YagcNAEkFV",
  "key40": "2zJ6zs14XNHnJmfKntWDwfSZk3SpXuLSyiC8pZZF2JPHtrzRwpP56rgoSmV12SrE6fCHWEWJcmWCBoCWuFhJpEq4",
  "key41": "3arvU3VXk579MfyF1fJT865KzFgEMJRARBLN8JKnXnW7GfAA9s27qp1eb9NBwAdmcZQ57mFFwfj8VkUHF59Z3T4B",
  "key42": "5sxsdza4dY7AEhL5mvAtrLdGheYuByhR3RWCfYmaRhgGyJu8KcLeGQhciX89gRBrmBTH9C8bqVGa9t5gWU36R3Lq",
  "key43": "3ucPbmhSE2jAaMNXoXNdYRgKF8Vu3TjY5gxsZh8de1r5cp9Ln7JH9UoPkcpRGnvgTk1BHzDiF9D8MapQ49222RG3",
  "key44": "37tqDXXNqU2Y7rdRzZAT4Z493Ba8RknvHHFGacX3oHYhxFvyngiG5joztbCjjBXTrx9VwqCDW37RbD6fFw3NTqpx"
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
