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
    "3qGfP54EjxGk526NTTQTtRE9TsnSyDN4Z1zstCoqFD16TEFbKyV4cd55SxsnpmAvs9SPaMPFWeuVsLveVcLsB8Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9pvE9AUYxtfsFNr7hmZEzMb3gERrEHCAkgpQGvozNBHjBQszDYs8yLPftApSCP89r7NrM7BR4ag1G6GcaFrzkp1",
  "key1": "oxx2zXK46t48Mx3CnATumBgJzi5E2VRhQGoNX4LrVqk7KZKX2n7wqFCUxv7iBdWqBSs7xcBL2hjSNV6j2bTmVwb",
  "key2": "5CxyDtzahxVEu3X4kw8JJdq4dKNqoMgTBgaJXifUFH7f9tqLHe3euDWnNLcE2S27jkiFNgaStKKsuwyMA5uigeJR",
  "key3": "4BxsWsWSfM2TzJ81xanqMucq7tdtMapVVMk4Jcnw79A6GDc1BKzD6BUmTZhJBEh8BDanDedixboKWLtVmrVQNN2X",
  "key4": "4XMM62HPvRhDDe4ocz7hQQ4qWQSQZvopHrW6gyqZ9AvX8pXmZSsLqLvG4X6GUd9BNoZ4QpNnRhmYnHiEcrpJPWnu",
  "key5": "594u9GLjonLwU7iSFwRUPP6ZAuNou4qY2t6Uum59U8HQ9pebdjvv3j4o6RsD9PF3hwEp7bbHRxvc1dAQwUUfNDr4",
  "key6": "38GEsTYGhpBgCPsXL8fupeZ3eaSU5WK9o8kiAba94GS3U6aLLa9agA4DYKebVRUzEwsFMqipSUEuCnBgeU1nYYdo",
  "key7": "uWM7xebUzyaD7UVEVMFquok5xgpDaj59e4tU5hN5X2QdQ5niqo7KhwmRs1NxArG57EuM2cHQuaa2WD6JW7kHrHz",
  "key8": "VaWAFEsQDvmLJiTWeJ1ZmsALJUR5KX4acZSKhbBGtuHDhMRNxPUBfx4yj488tuRBRNUFDBvCDKizLub2uMgWJjc",
  "key9": "2xhxhp9Ki5stvxkJRKZ1zARZWjwYtEaZJPqkrwFeEck4ADoQvT3Xxfh4KFH1FvLU1cEap974HJPc4SLGxwFbf6wJ",
  "key10": "3T9w5iyxsQ54Ex65ePwByjzL6Ci9RMKD4s8SkrW38u6ACATF4y39aXuaejvh5HcBw6TJAbqW4idiqaPFfU13eZJn",
  "key11": "5P8NkgWoChrLGTX46v6MLKTsZ9nf1AR12zryeyFsPg7niQpJwBJYUYQPG9Uq6cNh7aN9XFWDVmBqi3raMMrNtTXc",
  "key12": "4RxN9YdRcx9TgsqrSQu5vBoeUE1pNEjtJN1wrFC7kp5Y98T1723dYYt4jFNvphDHgrfMLmpa8ndSEAYkEPZ2y27q",
  "key13": "4rqpDTXXrfe1RAb5goPaFbxGxbLNPsaGuMXEBPyBY5NWouoCWs6ke3HgsJLNwCjqXZTSaF6WCBCzzsKbfjM9cmLg",
  "key14": "4oBZNbT6EfDZVmu9w8N6aTkswVvuHUtnz2xQMkwNNzBMDkVMB3nWz5Mo9Wt1d1JGu2RAFFpHhCXw8fJkBZ2Da2EH",
  "key15": "4LCPq7ZfVBhuAXqrWiJQAaZ1XJiiBHvaNUgXGSUyycg4r7yX9iHZbCGV89MzCkcG9KEicWrL8YMJnZ8kV4Tq9pnk",
  "key16": "2v6GP1rzeVU4V8hcSDwpVdgXrjocQquDNsL2pcuoji68t4VZXUw3NN3QTNkgqeL8j9pv14AtWC5jgroHH9rHQuG5",
  "key17": "3oqrnV3SJMW6tygtLt1vyTuo4LYgqAZYWpE295cja2veKWmJxGmP7PTw4eNPF9627gGUCCukVu5tyv6MUph9am5r",
  "key18": "61FdYKZaEgmdXQcGxcdrrhWryCHpXSPZuLTSGSomaFiuJzVvMtaCNnsnvzHE6jtBapsqX4DaFnhpQ9tKegEguuD4",
  "key19": "W9bmgFPncX9kQCt39FjGa1iTNkN7iCNc97ezhQ1VBX5dVe6VfGmGV5uToE25G6rWWu42XLxjDChDUcKvTEAshpu",
  "key20": "22o5rWwkmXkFG13whSceDANexQmGMbzN7SLPHerZgHPnhvGb8QJ68dtfLP5q1u7ussNv1WkJrADVm4vTzvSxCAGy",
  "key21": "7V5qtWWcxngiTijuJUDWLKE6eYJgjmDx1TgEeRj6cTHU5L1sg9C75gvfCpz8mmUhuyPjE4NiamExDVdy64y1BiW",
  "key22": "4VpWCBSLxrgZbmrDReMx3vHS4nB9LQaFVLqgUmZtGGXgmCE1SWksmZDzppfF8VtH3QFPcozqC34kpSL38Nw2ebou",
  "key23": "3saNX3BV5LF7mjcoLzS6trtDbF6sutMxwzBzRrtJNCz3BUv9pLF1ERPo7gperUdUp2KNfC6tuGwRigCpZAWJMgem",
  "key24": "4CfaVJhQaeRGJitAX4EpMaw44GFKkRAnwE8PnCRHms4YKyvvuituv9Erk7YnLKQnS6yTbVC6zXDNK1Fi1Hsx4MQb",
  "key25": "AXX9eSeAn7HoMPQKmAbRKuqvd6JMsEqCQ2qFbCTMLZVEtnHXw8mFNbkDkVa6ESouUaquNZnmcbi6586pGDMZ5W3",
  "key26": "2mj8iEETP11gF2qmvgpLDmFg2Rxvtux67TQBwmQoNvrToamz5fHdeX7Sp9UMh94UaoUqdHD1T9thrfeD1CqU6WQG",
  "key27": "2xn3QtuKmtajWMMDxcixpNAq1k1Zw7uuyksRGXRiCwPxKXKwhrrsjBXkKfYzyf4J518MiHnXgaXugtyedZiQcWJu",
  "key28": "3nELy9qjk4SEfzjzoNGtisNVznkdtdaaM9PpguKe2p72hFSrHAbFzfo3Fa9kdqC5pexLTT6USFLAZxKtgCvBwU3U",
  "key29": "dFqoYwNif3kQkxuWw7bqQ3UzZQ8GiPyLe5jFmS9iaua7jEieJRqX9NSHy7YbMj1MWBnxZfaPni19p5zc29ZKa5x",
  "key30": "quSwzxtmCR4Nu98iqWGM27qXH6Nt4utuYuA7tG3aecx6SjByQYQNen4oxPLQ2rYav9Wq1LhgKD2e2bC5GeaEJAv",
  "key31": "zGc9CkWEtrpyuc9oHy3M6kx9hZiaDpF7R5RY1uPapjzv363mZ3LKcQFJXfAahqTDwjQehsym7Kr8CjtKHaPTY48",
  "key32": "3mBsTFDTHC43izYYbe6VdSUhqqGrypA27UGNyNFj94UAtNTbMNWuiLy3ydNeJbs8a4s1mmkQwnErK5cuNXZYUg4M",
  "key33": "4Y7y2LpTtKTxETKKTddMbrc3edC6niv9JZKh8DVnPyFMYoCrB4BYAfcL8PW1aRcz8LUmE1FfBiiigz7dEXMCmqjJ",
  "key34": "2eLMrNYkphRpNRKMkm3WD78ut9tVmtguddjJr5jxmYGkZoKDSnNNuu7rUPdCA3ABtZRj1Zk1h9qhCL5rMRjUxXij",
  "key35": "24t2QC3S779q5CBchaYfUeESd3rVy8mS66sayxcjCz62RXLFn9SdfFepT51LzoBkmGV3XqRXz58TkGKdb3FVLy7h",
  "key36": "25JLCnjYQ9a6YNFw7gRTNBupijkJgwmfdMdm7GEfEMpUaCk3nNw5Lb7vsdwFAzS7u7zrpqbav69j5KHWjH6t5o3d",
  "key37": "2aLfxJKXR26b38nPcmSp9L9cZjWG3ZWBYfRVP7cxUikjJZJCG3t9wzdhwPHJbGGUm1dRVyYc7BS7pb3qjS9aTJYE",
  "key38": "3X7jCVwni9enfu4oDfUkJQN8C6kFMHBRHNibLnTMzLB2uAB62YU4i2DSp5Xe1mgKPQYQmC6GqL1hHdCzTet1BnSS",
  "key39": "2BefYtCwfheMKN4DQeEQEFuK139p5dUG2VpFNV42kEsJTRzJoe2miaqzN73xUyMSo2mtDZWW7MZnmU6AZLUuP9hK",
  "key40": "No9Y6BsVybSVK2xrPEj9BNd9n54xXxPozYgAspJJjEYgMsa5ErMPTwMrxJBBMMP7WSFGy6thha96eFWjCdhCTGp",
  "key41": "4BhqsTNH6FJnCMVo4roY9YBgbinWdJ3mqZh35mffcn434BaFn6ojmWnpQv5KECiPTJtbWFJ1FqhBCpha5iowvuJL"
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
