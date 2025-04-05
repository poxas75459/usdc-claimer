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
    "5eHAeAm8RbViwXXUU2AWViYhRGNegCT8cdE3AZyACmLjjwCvJiqB296Sef8cZDrbtdNgu6V3TJvsyznWPUxKwZXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3imUg7BWdPunFnVDzCZFBQoaMVSYjwawdaMnc1StgzFiJJoPAs87XqVEQn5b9b47P7wMgvt8njbKkamGVbDJC6UG",
  "key1": "2mwfT6CWxNkarBtkrA6YyAMESuUvC1ik84JGTej5RfrL4Wy32U51knBHXLapMDS2BqWnTgsxLfQodVdt9tV4TVaX",
  "key2": "2bQucgUBQYjEAkstzZLhpqpFS6sdnAV4sCvcf9V5TdPt8CA59tqx4ZqiTQkgLGEL3c5NBM2U5RFZNCCGqpXbx3sk",
  "key3": "eB1gti4eaGZyyJrePPTxnLEUCPswKmTWUuhtTRW9G6BupebxUwfm1BERnvMGWgGYyps5tPRq5b5EWn9mEBXSg9Q",
  "key4": "4CrFo7ERHWJrbw9FPuHA5FvgnEV1YZCnAD5JLTdiimTQ684M8ts3oA87Mdbmv8h3S9vMZhnUX98qzf1WRaND9FgA",
  "key5": "4nLy5wWvPx8mPcm3u1MMbVr9XNjTa3PYE1QdQm2bQ8wG63fJFTCBsaLveeZxy5TJramfpmh5esruPrz1qGZUyQ7d",
  "key6": "5Q6CJLQtWebQiGVMF3dWNvPHx8Aq6scBiThpCqcgX55ggD3dhMDL1vafVJqyqx67Wmuimbbf7fh5VsWdL2JGiEbD",
  "key7": "sqaj4aUShKujS8D8hFcyFNLSnv68s2dFx8eZRcjExujr9T774oMucFKry3kgFFgasj3p9v1YZVSrQysk4LowK2U",
  "key8": "2ffFyXNvacaifoj3WiH1h9SUJBwXzwBJVk15KtBM6scr8WPzNxLo6asnYobh1VbbrB8bWnTYiPKswM1ywZxNroL3",
  "key9": "9YcPv8UBUn7L4MdThSTKhZSa3xMbbtB6J8LXmkNqgtHW32psmFB8AAixNTUcYiG7VYMTquWhSQT6iYtuJSSsg3H",
  "key10": "N6BPuybDtJjcTxDjRvHTc77ZVT9LWxM7B9JdUKtWrj5BQN1oMs2Ad2Sc6jfdL1vkc2xya1sdF2L7csfj4ykBJgb",
  "key11": "3m2yd6F9hXcoR3EX4ar2TCWirU8rV8wMNyE8eWWVPC5eghjoNbjPnEzoQVUmuw2Snt3JM4vK4L1GUAawPyznbdaf",
  "key12": "5sy6gCgZi2bqs4zaxvL26DdqJHZSMdtBGCYDXQhHMcXLdtTBdZHz3ubyke8eRyQsUjdfgnGmhvPbFEXyPe3JVabb",
  "key13": "42knijwZekGzj7VQeNLN523oWev9vqk2cPMVv1eM4G1oo1nK7mzqezzh1uzUegSHoB9RjdoLfAu39gWNY1Es1tkJ",
  "key14": "5P5SEp2jfaSTwBgMQdgnmD3hqeuE3WgyrT5dUMJC9V8wU26Jz5x2YAodDhvEhWsqyhPw1K9UrL9iUsRNvGtDnPy8",
  "key15": "5amWitTz6GZSF2DBTwVWuhVVbCAg3n4tmBStN95YDxUu9KncLsCJ9drknQxJLY5ggJfpWjax8rNr2CsiLJ31qjLo",
  "key16": "5vVQ6ha9H74k6H6Dh1T1vYuHi2AVGYh2kvFrsPmLWR2gWSR6CFe3AgZri3V6SDiVUj2WQRjhus8tCzSrijSxcaKr",
  "key17": "5SxpurPFEXtN7Bu45trJXRJMDpH3Qd1cS81usFgNYmD9jzsQDgd7GjEinx636HNDnw35D98xKssRLaSumzT7gryr",
  "key18": "CU2YbVNXnRPdAKdR18cACrey8KWx2MQQicG2B2cdhroSPUy2DFcbmepAsBT2BwpvngXu9Scpe9wDgLwbfRsmEi2",
  "key19": "4CthVyuDGNMq2mn45JVnRsSe7LY8q486Xax63xvN3sV1Nkn13TYPnQRPkGJp799cg5hHwi4fjyJYtkfaG9zwATQH",
  "key20": "2rD974rJ4X6JbHXKzsrzkzmeoM7uD5b9dfWmHUNkEg2uPqcQbeD9Ukbv6Up6DwLuAMyPPDkBk1ykoGvobWGvWiqU",
  "key21": "2Fr23SCfsowf9CmoKHDaSTYPRATbXkeNNdfCZPiZQwYzefb29hiYr2J5HpNbZGeaJJ7pnJ22NZtn24Jf2avpXnCX",
  "key22": "v96rXntDWD5DPv8w6NpBHKs911gGAukF1wgDp7KCTsm1jLLiB3Te5hB8ZfB6Rq294pqWVJLxuusocbnD39jqEHM",
  "key23": "ETcKV1mabmQejWDmofVR9NZy6yYNMg766HCkC5876utu2dUPQhvpjDCs9noxpAQ24SjHHvwo68moSRM4MhV8MNd",
  "key24": "fB994hxouJP8n4nPLoxvHzueTtYRvzsBJYmmETqU2SeD7ZHvQoZiy1WMo6k596DadYXCUTZBKcukjvLEr83HuYp",
  "key25": "ad4HBiupJu1Pgz6iagxJkbYQAmg9g9MikVveFFutd2XdCq6HWM9uysJViwbtWxmTGeopUJgg1sqwkhVARTFMkTz",
  "key26": "3uWvjirRWDtqubwvAzzGy7HjBWSmELaPDNxCeYuoAiauWR4FXmzKtKtnSwqBQKoBALi4K1B9XctU5kd9wZmi4eeK",
  "key27": "625sSpGTcuwZMC6Sr7NywpvZckHTQkk7Bx7awLNMqdkDJHDBXQDUWE1ZXeB6uXb2DvXZR4E7WMf9ivYey5GuftbU",
  "key28": "3aFPGfnREXRbqQupeXkAaS17oDuEgUS3aip62FaPinAncnABwMfB8RDD293z8z6g775P4cFN84Z3wyjkV3REdTNS",
  "key29": "5ryqoQJPm4HGuYxvhDeAjbCLvpTMtaawGJhwvEuKJ4MK79WyA9zP2Ge3rzkSjKHFJjscUWWK6FX8AucbCKoCjoA1",
  "key30": "3C3JR1oGqRBCNoUvZRHWdkHZReGXK1TTUSt8CPUYCYv1neSWBERqSQh5jEM6bWWnBbTHF9HqHZ2XRJ8e6io9MFvU",
  "key31": "EGWjcrkS24jwh8VjjcibV43dxUg5AuYyxvUCt9jFq56S2qA5JdXH6mY32zRVoA8q2FNhH6ymoLwMFjJ1825jqMp",
  "key32": "5GZp62ypCMYEeB4xGA172vnELpr8rxydCMKuNNyVqMwJKduMVZK1RBjVe5A8G5fd1iDqpkAmDA2LesmqsedAm93D",
  "key33": "4tABvv9BdeBXZyFmvHPCpNw4AU9oybSzNEgxUohVFjjCknfkhuGwinm1oghz6NYLLn9L5PxQwSJnJcnRNUXyRLMw",
  "key34": "2g2jknE18psbkG5zoWsjKTVypfrTMossw5sZQxdjU1DLQsyjREa7uM6xX1GtSYCqYHNZD5nfchhtCF8WrAxiqqwC",
  "key35": "3Y24NqqLPyMMycZuVEQZJuxgBnQnw29iE1c4sLxhu4ZTLuDBEr9yGvna3cRbZ5FNsUVH7HMnUXkiG6cZGrEJnzaV",
  "key36": "4u6St6ckqtWyUf69AJHmDMW5Vu3jQ8WobRLmVCUVcAFjoVxtzEXA7GvytND2GbMJfq9rY2PteQPkURPqXCeAQeM4",
  "key37": "2EoCPsbszDzxjHFW4SWtBmnt9U3uYu1ZUS9ax28Cm9SrokxWedTmLFFFoD2fpYcWptNJnPB8wkbXeD7poaEZjbE2",
  "key38": "FdWbzoRjkUutjuiUzPJubq1UQrLa8waxVH7yXLNLSmY1NacsnEBHEktK14SzhBGE247Scy1yRVjRyUBQuTLaok7",
  "key39": "3HqGCPsaFVdJyjSkMCXiy6CRTtUTadg3gn3Qz63ty8kQzrzb8dYtfk2bdvD7onqUp2mFK9wci1z52Yzh6ax2H4tq",
  "key40": "22apLS72APpno7dTSXB7ySrCJLDgrRddfTHHcM6c9nBHsBHgEVdbBhgckCYAfvjj5ohdNZdhN8qgoqiPLLoEBaUx",
  "key41": "5FaVcA9bhkYhUeUWqcwXvbYDTsqRtTJELTyap7av2MGsri2gPN5rH2nTETrpx623oyCFF5NDtkK41vxHDsSvFMTF",
  "key42": "3JwMkPZEHQxC8CJdS5UEvaT6MzT4c1tcfLsvdyWdGEpaHKPeMNZt2LbJLYzmuyzF4WoBAEg4ubdmD3DhroyuZUXk"
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
