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
    "2ogj1Rpcfq6JsEMHzbee3kh9mLvvf2xGCjUTgydA9RGQG84GVjPrXe5ktQoZKd3FhdaG2yoyH2imRKBza44Gpu6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9x8QFWBUaYmVMmReeDAG8TzaQNT95W4Ru43rvowhG4JRis12NjvqVuUBm7KE7T6ta3B242VeG7GQ43Fr6unGB9",
  "key1": "5gXp7Xuu3CKzaTDEkfnZHih9rJ7WgcSn954dSMvbj4U2RssgWVBArNaVfSPNDbf2TdAtkDYuGEQiiTkghVf7wsDm",
  "key2": "399joMFRxN5Gxe3hfdJDAXZdRgAGdzyPTKsvnEXYD2wNG3QmHnYnMydw59pjBSZjbFL8vgL65U1RWevksBrr5CZN",
  "key3": "zCoxsnW9mwQt6WShQttk5TfiP6h1hog3cXA8RAD7Riioba1wKbGwKEmsAvcgU57oNKYkXgg5vt6MU8AKSTNHjxh",
  "key4": "4vmNsjNdcrs9aKuPuK5MU8Ve1GrWB21f5MYi5wt7fv1BzaDZS165jimZNZ4HzTTuf5G3XK75amjdHHhuFb4Eihky",
  "key5": "N3vteS8FBXoRdP2pvrUBUpkN1QU8DNBxcFrX9XyRaN2yZELBetrP19xJXnsTF5PT2pT6mB8J2maL8vcnkuFW2AC",
  "key6": "3Qfgj8FRgVgYargtq7vZQayjU329viCcQfLkzaH6fUNQEUSSdgmj1XZjRvBMfwZBPfspvsP3Vm6XWRKyKtPF1euM",
  "key7": "2qcZj9StRTYizQGki7waH6LqQWNzqDarFx9wQWQ3XDaxbHzPFQ64WXt9mbsDtP6ihh4JZU4BJR68cWbJ8uqsE3ZD",
  "key8": "3L2VR2EwMnQ7fXamKk1Jj4fzPxExa6aTs4yVsqv6TyWiq4XRDPYdP1rU1fTgUjwzpp7CHF9CAuuiDuHe4BRx5s1Y",
  "key9": "3Q7EB3zvgujowY1sLX2QV15SNujvEMVA6jRcqdtzgssYNkVz5JpVkkN1wnHDJphnFrvjDu3abaf7T2dhM9MX1tP",
  "key10": "9rocBNsdAGjxFUYu4LJRJkNCugG8fW2eiAEfh7FN26jEfhE1b4Pa9mWvfZJFC3x8UZzTMwSTsmAW5GeKEDpfoaA",
  "key11": "3cEHEs9FS5yVX6wEPoxucPtMPzCMWbk2JnDcr2a4syiLp9fLtKqkci3UDNKqMudGLPMgTsYVb7hvUMcXMa4Y3rT2",
  "key12": "2dxTyQF7B56xH7FaKfFQ2QktFfqttt8gBPgpGE68wD8FNmadstnzZxxyCkRowHeXmmETAHWSjAokjDNBncrV8dGy",
  "key13": "2QtTMPy8xwE1HGkvH4Xm4DcTLowGoHztn9HKRpDAUDjUGgddJUBnrEpGLHpwz4mffs963JtMbukCRq7Z9Vkgegrr",
  "key14": "5Jm9iRCtdHcYjeimm4Bnk1YfSQGZ6VuCEL5WDsy2RSydD8UuBjBG2nqnymsyuHkzV7Er45M9hBb4y5QcjYjLRER4",
  "key15": "4kgNUzsxwbDoRnnuHdD4DkHgNCHfJGJJUZWbwinLnbZoqemwEwjMfuhpZWuHe88Kvyg2JqvG8rEMFXJ9jbTmhTX8",
  "key16": "hqcGfyRnRL9LXJo8x8Aj6oG3YT6GRAmsod1YSZWQdvgqPXEvFfh9BbynQZqEjLjapAePi8afNsNiLUUTTJSUfSb",
  "key17": "2wMLvy6KDfyUmcfdA6tDqWUJVpeoYYqrybbEdJDWkosS4haASrhFYrQeXtA3hYGaRv5Ymp1YMzpFmRTHa25WGoEE",
  "key18": "3pf87ynLyK6SqY3ryS2S3kep2kinHsfQSc35nyKL6wbMB5KE6idtGstaMQbkmcDt91HrDz7qYCjpRe8SxgqoJH82",
  "key19": "52j6TabzmWqCJ3T7MPPKJAVp6ZUAJgkjJAZACZDE1xfk2uy9P9zgiwEZD1x6ct6m2QcHDDtPnazVeo9L9dZAPNsX",
  "key20": "3BPBCmPbBPsUA1AbHy6zJ7cdgB673PasknfA1Y3gjNMFtTfQcRk9YZRNs8R76dyMkQh8iRD6h9FTSoDQNAMapdqr",
  "key21": "4mkuEHwGJsfpStcmoNssCjKGqg5yPaT9WrxxZ1kULVN2VYVbXaWQNLDg3hApeGRiNeyFpzRSKGFiv3uwTrnrbMXK",
  "key22": "5UEfYVp7W3R8mqF97BqT1EdEuYg6PAvxjnXD7W1gXzaReW6UDQGwizdpu2CQVczXEDP1Dud5jMyJz2ev9rqTDuhv",
  "key23": "3VcdUAm4u1iyXktfRji1H8c3opm1qAMJkjm7R5TzA874MD3R4XY1eAsZSSwx3wRgjVbYUQvAPsXt47a9uAxCpKAg",
  "key24": "2DbKHa4iBpFjZrL91j9nRCsb4GHXZU8VFKmRrqKMLo57kkHTFW3JoVJuVCa1uzYAQGdhBYZr7tc2nnj34bFJPbos",
  "key25": "4jxQF8HV7mWyhjjgGTCUjqeaYkgv3JXfZXTPPZu2f7q7moLDxQqsEaaE55HpkjZSWM4CuAMkzLcEbDM7ge3gDKUc",
  "key26": "cM1EB7gC7Ex1N5VTAGpJVVk2TjZazNtSiehj8pRYdmT9oSbBJV5NcUpVLKsopvjYcjoFkd7zQ3fiAza7PYnyodY",
  "key27": "5yVgL9QZSuPcnz7fjFoZQid3pW45z96YMiCs2ngo34kG26cc6KPfRZMaRdEu9cuvuyocVftpSs2wV3EQks4TsWee",
  "key28": "3ApBxbtxhmEVtL5iD8KTMNVgPN78nTy69xonjnc4XmTsCvYxmbBfiQ5tseek5TBbbKxq4B9X9vg8xuaQ1UNd3nNr",
  "key29": "3x4pX1iKdptHERTDMkMFpi1UFoiwZoi6oBqAvnJJLWkDXJFxQou3nVELjohQQNb5fPwTpVbvnwQLEhibs4aLmrHA",
  "key30": "66QHG2kvGjPc8ev9GFnRr94B66ugQJUXehmJvmHDWNaZ5K5j7r2UbWW5YXLu7hdfBTjk5wHPncWgQEH92zQAx4ky",
  "key31": "2F6adxzy5mP3zXZJjD97PQyoZCwoLPattLy95vMm9grYqAhrrpdByPzTcbL4Mw5fXPBVzjBstUsXz2MvmWg9QAPJ",
  "key32": "2fQQSxQ1gQYUEChT9PGbyRq3vRj7YJcqtkEncnhX3eptNAA8JqcTm1WnuRE6enNJqa6rEyead7FdRubCPqF9ijVG",
  "key33": "ugLkb2mVgLXbgC3vXUypPMSh99UYpgRSVepWPoZzJTkiwwNTr19NXtidJLrU1LmsPM68Y7djrBkRm73DDWK3mJv",
  "key34": "2S8HS86sUdn33sM6R1tA6d7kowBLp97HgxhgLi6Q7Pz4JXFeDMUrz9ABiriJTnepoAYHLmYFTbqLJVEYG1oLEXeC",
  "key35": "5pq3gkCcUXJioFCWAHk3qQemqhF8mwrvAoh1KZPfPC8jRF521gY4xogkapPpZAGKBnpwbHFBXj2DnQw4SBrqBd17",
  "key36": "3biZNySBwPnUzakrtwTubak8U4FAPiDNzzNjS2sAAfMzXE53SoDy7PB4i3QMsrMrcWma1t6aqPSxhQMYaKfnmc37",
  "key37": "2mZYwNch7b7USVapuUNJWkfVH4cFXnCWXxjjXh2nbTiKw7WNhmDRJw8AQ88PDp3eSYtmkxHefaiBxkoyHXcZgQ5g",
  "key38": "2P4su88WauS9R4RXbgzkUoRNeYDJjnCZedx13yGmnFfQ8yCXCmgTNXw9avz8FRZh8psiFHLgwPGxsiVcCCDRYARS",
  "key39": "5wAAdYbSVdiKV7X2yp9VZzNoz9AVGe3PBJJyNUoArjj3gPAmKxU6yQ55J5G6S5mrmJH5LXD6Dv9mAVY5PkAudJJD",
  "key40": "3QdvFH8ERD2ed26RaDwYG4xfQRP8EjW6hRKqGLeGYAzBvqDJhsr4SSTMunrDJw91Z3D6RFkNztuXqHfU3qFeExJ9",
  "key41": "53By4QX4twpRRAEV4q9tZTyNwQ2JEbPDoVcqTuuHTYU9pxMNigBZ7miA2BpqhtzRQxnPuzbtsEitcPFAiYZH6j9"
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
