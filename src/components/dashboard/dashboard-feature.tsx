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
    "52JFyx6mSn9jPdQFKzwvRFP7UNj3xsHQtcunkGrNr8E8tH9ijEZJbWDRhue41XZVESQCF4owgzy261aKKUeiWCEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63br8pKgTdrfiF231JgNkDpMXCu7SyjK9c8GyDB6MgaaYdf5AdMMoT3fG9xsb2qf5mxZG3nfs8Pcu7iZPphf3Fpk",
  "key1": "59jfiovvc54kX3nc4kRRXqKEmvG43cCz8KQ9MDNioBMcjC9x3DLtAzwyYbkTBixNXpF1eE9LbC4u8HojB2EHN3ip",
  "key2": "tP5PV7Ryim41weEFNNz5XWbnNrPCEu7q3VtjRUc5pECWY4juVM26bB6gxNq2s51PdDsxkgHaATuAa5R1nk4QRwd",
  "key3": "4XxALuZUXwA5o11Ptn4Du44E3sXo56tnux1fUn1GmdxpiH5MFRTtUVV6DXRBbPYUURk1aiQ4RpvCNT4Mts14RQk7",
  "key4": "enTLHg8yKpxWL3jYFYQhdL3rsS1rWRVsJvTHWNcinpe6ZcwkYG2Z7SbHo7CgTYLfzqebAJ8EJqTTDVyaz8DoMGB",
  "key5": "eTpQbFAB3yTkqU8j6KWUPsf3YC92brY8UprtT4uPCqG8MiCN6az3QrzbkmAspKzYrSsNhyMtwbAKUVmpxdxD69c",
  "key6": "2w7bz2SSAs8y2gnjuogan4rzCEtYwNWx4xva2ioqTn1f8m6huzX35HB15hMo1UT8TnqJykihtrqYxvequMj8MbWu",
  "key7": "4HgXBYyTLrLAv6dhkA6yDZfxzvgRsdYkDUGatJiZDaX1uVicZVYAxL2GZPcZqv4VcqUYEYksaa6z3SKHSQwwuEwv",
  "key8": "4fCsdSiqYdMzQWM6ExF1BAuurwJw5ZioLJoFQJaQjU7Y6DQDc6vSLduXwJfDXbx8mqokB1dBEbxhZXjjb6bYgrzz",
  "key9": "4DfTSNgafGzDzxwENrnc7W7yuuVcbTnfvAUbg4Sm8NZHqAwHUVTuAsgS2oF9sz6TNVMLuctffBJ7yw9UBdTKFDf4",
  "key10": "ubjdwz9AWo3J5NenpFJJDm1AjSwKw2HC9atXUvNTrfCcDGJfHz8mcSRiNYcebUDiUhVoTVQ4PKZQSjekxXkj2o7",
  "key11": "4ocEYHH1ZB9CoqdWy4GwsrjV6qPJNjYk6Ayumxa1HApyp4woALMHBiCpumTdcpkMxGkCwEPnuQhQBz4HUP6Lyto7",
  "key12": "2X28RcEfukUHYqfh7w1rv5HQpnS9MKeVYG7YLjQGojakq9isS9r6UarvxGGXx7T6vS9DKqKqFDa4meZYyBi4ehtv",
  "key13": "65W3zVwJnHeT49jRMyntbRvDQWaHAPeQumvn5CjpihFq3tbEgMrGtdhy9hMKpSFrit56DrQrzFKdXSdoCCuqJF9K",
  "key14": "KwBrYvvaSiX5bActJhfeUL94y5feSUa7EaFuctWXmmLbRiQbyCp3NHd8PGwCqJy8CqHqXpkxANYinicD1kyuhp3",
  "key15": "2zDzrnwusRB7gjoHLS9JWosj9AdCQBLxn1UA8x14myue8NSBNh3zX6y2foF1SNY4vN1GWFGEfpL1mFoKFQ8zStDX",
  "key16": "2m3TfwQhs4kbaox6sq1y9z32BoMgqDbG9HejNsoE2heh1w88eAhVqePVtgYdq2znoXUjyGcDW4QoKUYnPVqz1sPa",
  "key17": "4iFFA47NEXVpQqF5omTu5bJygm6BPkuG3bneaHTbuzvPvJ8cx7bqnmrnXmtZTVhHahTmP4J7u9RTVtFPzpHpE99x",
  "key18": "E27cnPpbD1oAngTjxxY7TcUBcV9BQFGUVFsuGquNwGan1t441gAZhYCwLkhTFPkxi2LAt8UrmqDxzXXuTXejkhV",
  "key19": "36ZyyPH8NxmXVR6gsUfAtTWCk52RYcuBqSs6qxNiifV52vR1X5cjA4y9ph67sqAuzG9DGWEYFGr1FKeMf2bLxN3c",
  "key20": "4HfvjxdwaoJ6DjhFufjDYm7akiuoa9WLtcwSMFRaNN1UFCMwoVPyg6vKBxvjDDsmxqJYFGtA3TjJXzzE2uEnrQMm",
  "key21": "3BMs6MSSWa8FYVcSzgWVJgxp4LRCK1Qv2hEZkd8SaguHfL9cS3DN37KZRGu5bpzYzJhykQ496yBfNFdc6MUskWxp",
  "key22": "48ebkSSCNACwB2W5KYm1ZK3VxnspWWtKe2R5tJtFqJu8KDuf1JswA5weUjYHRS14ybN6s7SVwFfqsKbQdmxnD3TP",
  "key23": "5dPS8yayeJDnjFmUbW7rkDPxs2USnoW29WbtVnMuoPP3995z8UW8d3wH3nEKQV6TzQUzavvXe1BvNepk6VfJ6KCp",
  "key24": "3yfsZoQQtpPc2gdyrPWjwJpd84h5WWEEh6phkfg7HZYDxEpW3Je9TFKjvaSk83t15rxk2WnfA7zbAWRMfvivTdoh",
  "key25": "3Geow36JCm1HSDq1JzjH46Jz3adQR4MeVin5ir7fywAu5jXGrZmtW8kxQJBP27yETK1sBsKQi678dtvV6MjycZi8",
  "key26": "2dCUjcYVRi5XExLiqbDwR6q3bkSDU4YcwZ7b9orsBjjrXLgq3or4BfmDBkBWM7gFZqN2QCeLdHietcPrNjNnLymQ",
  "key27": "ms7VaTahKdNc3q5LZxuWqKogb8kz9XzGRohoaE9ffES3ytB3wS1Cs8uBk9TaUo9fD1kF7LmmRgxVmuQ1MpCJH8q",
  "key28": "2AEBrm8tN8Asvqa7LRgfVqK2XefMsSwJUp1CkFCyjDFmstktcCP36PEXW5jSR1SXgVvUubhiGTng2ob6CngSUjxR",
  "key29": "4gbvxXSicz7Z17TMNCzRd6BzF4QFfnWfrGR6ad1doYErQxeFuCEmcHcfpm4L5LhoCEfwfKKyjkK2rrApQdrFikdj",
  "key30": "2YdtYTiv4qyfzDhZmyJPMgHWprppkW28YT13nae6kXFHZ75UmXxJg5WxbnyK7DLseai7WA6QPF4pGzkYfrfEUUqS",
  "key31": "3D5nz5YnUin2WW4SigpR4v3BZ1LHXtJK2LVXe7RmU2xXbzVMNjk7J52Rxa28uGv6x4i6BBzFARPSeqeuanVcJUUo",
  "key32": "4r7tAFKR1H7ZeRkemLEdNfHibdEzocviZ4TChdg5Etbw2jTbTtCE9BqmQrP48Vsi3euN2LNfphUSAmiEC2EsFikC",
  "key33": "5jmhJn7KaajfcPbL4YMGUsZAbEEHQaV87F1V4vgWdtPNVqMBdtcf6WP2jai72mcFStf1ZWEiX2Hxa8iGyZwRhWxF",
  "key34": "k6VbuvuASWZw5EKshN1Qp9fzuB1bmvki7fSu6MeNuDZLfGjWQJC9CuaB1y1QisNbXrkC36r8Ns2PdRLPAEFVe42",
  "key35": "55UJvuSrsHLgbSUCmUnXccpNTJXuNBSuBV8t62VnpdEWxKYSXpCw4ZMv2fc8FacvWgqeqAM5hf1gGF1PW4Se6tJ2",
  "key36": "3rSd2oVQfHGEua48XJV5D9XtHxRKfM5rZqygjdWvBot7PXcqdwiSdAEYgHHv9AxypqUk4yvxsiMMjwgzhUnv4zzT",
  "key37": "2yBUURr6YeYD79CTesSVvvkusF2GvBVonvmby38ZoDq5Y9kpDsUxeRjQoZQt3Q8ZFctn22BmLUqmPmGVmoB4LdeA",
  "key38": "UC47UMGbvNB7xP3vs3XX74h88Qssc1QMTHbo9LdbvrKHscw8ZaU56uKwJUUf3AU1dHy3yZvQsWf7Y1Xd4R8ABVt",
  "key39": "2UJ16rHbWk671uNFHWozXH3B9fzJHVQMu9StmJXLsGJ1GmquPHixqtFnimWnG1KCF25hPifhYQz5crQvwnqaqxe3",
  "key40": "368XG9jTQpzUMv53dytcbsiG6Gc6DcWiuc3Cvgh8ht8qjXp85oXWYj35izzAzBNVKkjk3eKNcbzh7o2FbKUKWzWW",
  "key41": "2RUvbQmuhM4v2B1vTU2gEmEMCqranhR6rfy1YskXkomMM8FrSpqMdz2gUsoALhav9MHUG5xNiCShMudq9Uz8AKLQ",
  "key42": "2UL7QGsrGzPHeviMRDSTrLn7Sr4darUXLnrPEWrMMH2X8XhqmupbCRFk8k7K4ZhuR1NikaTr3ZArm6wwisLL1JGh",
  "key43": "5CVwfbrP5LmsVJiNcUECcwsYy6zXq73a2gDK5yXsDaUNBzFek9QWX36uBNLRx3d8RTHB4m9omyg1ZyvxGBAx9Q96",
  "key44": "QYbom6v588AA6vjf9jHLus7zLLnx7JUUPEtiMQvtcRLQhXZd6KSdEQcMma2FHGfpDCK4YMzffsqiKJfXoqqGSaW",
  "key45": "mApyTwaRiiSja6yEEjD3CLrs44HpH9PT3a3TmyZVa3BvL9pGQkv5t3qy77GshhtiteQdaHhKDfHsJPU5U34PZgZ",
  "key46": "5Yj9frqDR2Tq4YYN8eXJJBG5Qp8YB4DWobuWZ1PZYzBhKm6ktrnMyAvU5NPoGiHAi6hLujTJou2ByD5WnSvTxss2",
  "key47": "2wu1EEhrwVkR5FzCY6y3bUWzpFvSXzMnnJ9hb2hYspDGsgZHm4f2j86mhdKGrLjeSag2i4jogBHSJzuKBs1wd3EY",
  "key48": "4bKZXpHkUKD9PoYALUEMTb6C2XjxWvyY633jYSuKUpzhviowNQSsfW7BQv5b1fkJx8hDnZn1EETLP4E5aXhZxX4N"
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
