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
    "Hx4oixzCeCtAqgnRnL4nkaqpPHqfeCdSz8EZPjcydfuHvvCeD2BaiqFLX45AURuPDRuseWX7sukAqRg6N46VLzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WSXv7T7PcNa5gdAR78kphPEBggtbKcFzvVgeQUWxPnovoWW5B7RiqvoqwdvT8kXCFz3cY8hZqSbTuc4BXJZGDC",
  "key1": "5KmHWvugXk7XC1T3Ty6mCGE3WRDFJkHiTvGtriSKmetaLtMSHST2jgVcsFVvYvHoqYcy1Ru84odwypCyLAqxCYyF",
  "key2": "QAYFSUuU8wyK7jGSWqWnrypUgUvxLnxmxDnP6RaLFR2LDj4v4fEHeV3DPTH5u9mjq8uZBijDYr8vPMPNFntPYME",
  "key3": "2w3DtkNV8tUHM8hNBAksgRiFYz8vbGDYfDXBbM8nycf3FPrErzeKAMMoJ2eNjo4fts4VeWvQ1kfKudRDp4HLeMhM",
  "key4": "4DKcf2dRWtMRq657VRivHXKqmLWdFNCQbXPFqWdLbskNpqSYWnea2awxwYsXyxE1WHW1xxbBToDpRcXXbS57kVw7",
  "key5": "RCfujpbTf2vTn45t1SSb7FuqMSXTnazRHYkzTnsvzuKGJebDPudXbkXUEP823yK1XSqRSfgkJotzAiWCRM1L17Z",
  "key6": "3aZ4MBmwLd8K69bRTvaCJYSTHJ9y3Bu55NMipdrdN7fTbV7ThNAtsuEw9JouzWEnPLHstBuwJURcZXCMqe1KhK74",
  "key7": "2LRm8hFggP6qYztqemduMzS1JNRicM6UvAEsz5KZnKJvB9CnWCh8qeb8UU6v8W84wMMRcJ4jJy7JGHM6pRGgosHQ",
  "key8": "2Qbb52z7zHrGhC5pBRV9XnqZv6ef1P41G6Wed3z2wrpZMDZzV4k83N1NLFXjcdQkiSkWRnSH3Bg4HJ9zEyrycQo4",
  "key9": "3Uz1kKQEmgZmC7Kt2WEoMAMhqQAMqB82v9knuDnT9JXSmv5rJ3FSSYedpzWJt1LhzFuEctr65sVGj38WcV3wdx1J",
  "key10": "2LDApsWWmAokxUfPhuot7BghzrVUKVsyddCtr7nVuaZgQ69FvW2iviELbn8fVBW816cZsLU1ismPjEa1DUGgREHR",
  "key11": "3tk1UNGAKd3w2Psu25i33z2SehquuvZcTGrR97G11GzR8ytcSbJzTXhA5sZmZFYMTe7V8YW3T3JwAurBFDkgTQ8C",
  "key12": "2gADtzzWkpJADvVMEmoVACJpeXoNq58LgNzzc5N2uVQmBoPL3tgEJAFRta1BtDBPJWkRP3KZRqTitQ4oyUsEM4jq",
  "key13": "VTGzjkEArHCPvVqe3X8hKkXS7vFLQ5ZFpQSeym69j1mdTyh7XtFLzRtzg7vkWrb1DFUdua8wNoupddd4P9XLfCy",
  "key14": "2RifDdWSrQPmK2qd7dWkdxBxLfkA9M6czUXwLqxraQf22dHMM3fu7SxJzdwUJXjUbA4PYyyaHgJah9abh7QnTUPc",
  "key15": "5t7vpuHtnCUX5dfFMa7EvbgT9pgnpTdBtNFkioLkF2mvhx15KKCN2rdcsDJnG7Z5py1kdwC6qbTUNBugD7CowWX5",
  "key16": "5sFnh7Qpi5gv3XvAxN8tSgyCgF98FVwPckk9msv7y1tD8yhpQYV6LuRi9tLcyWDtxnixcnSLXiJE7MEyM4aWhwEz",
  "key17": "5241K1md9qRo7h6NZtLraMmg2veYFpMvwgY4nAouqkTZinMpEJc5J6RNoU5UPxgosVv4jD94WvwfcJtCcQtsr4A7",
  "key18": "3f7Se4emrEbcnLTrqAeKWdHDB7qgDkVpY4rvQXiojujy5kkXQ7sJTty2JqEJwochFnxgGCBszSvZaDxvhKHdCxp3",
  "key19": "5m7raVq78nJV5HV55JoRq5J888aNLxq6kig9Pn5unZTDhdA6evXtSQmXUadpJsZ217QvVtwR74yAk24jTLe7bdZ8",
  "key20": "2HG8mKtEyj7BHMjbM8tY6uJxHsdbkQTpp4r9JXHUNe3qNiydRyZmZX1ccjnxo2ub1fxx3TtTqCSkECQD52uApUcc",
  "key21": "51Wrk1jQs3mCG7rCFc7mNePjvNP4bwQUk1aRiNFKKNUqJ7y1wpR1xTJo2JNvU1iVSgfupLA5jUKxz1gNnCCsmH8f",
  "key22": "2KXu1k5BPPpMpwKzJhacXejRnEyjni8xMBR6YYuupaaCUpd9KAoikhyeZwb5cVgzfhXDbh7psjkopxDTrBcC9s77",
  "key23": "4r2Z6YJVMoHWfaN29vzp4G536caNUXg1HCQwJN5FdEMXk6rRwx5eBGDonpwvzQi46zHTErnNb4PXn69Dyjpeapqk",
  "key24": "4odDkH3W54DK144aaDBZiShrFQPMua6rYqYHqMt8j3GXcqjWUaM7pjB1aq8SacrDgemDF8WSr1PyAtdtrLCymqob",
  "key25": "2BSjvs2CW7jutFx3NzYyLrXLMzNWMNrEhLjQYqqTHQvKQrwkR7DNxkBZn2ay3cfafDRsYD5GwuVXyVDQEmVmMXey",
  "key26": "BHEN4rZB9sTk43VtdxA7fXqiQvxHvvRT3FrFGbmew7fcark7ufairqqjfs9cz2ZDNr1CGA3HDTtruYdi9GLV5Sz",
  "key27": "3dhSZTeAGPufrwwUVb2nUTW6vFfEfSUmae72YbfRrDm7oU99jcwMRezrZzCNG192mhtD6roZ6K65gEz8qmwhkjLH",
  "key28": "4ufRYZWkiaurvcHwaNsSAgaxS1UL3kSh5tksY7httNgAnKq6VG1AaAZZjvz2AbwZvV3255ZDmKPQUrh59jJBepHg",
  "key29": "3tCMDmkbYEvcuWMocJsHoHZsutVhUwy8yCkAAueTurhvGqMuxurFoMq2GXKSWHLPWvi2nfTs5edtikB88D2MXA6y",
  "key30": "3fQ4J6BTsbgtBSqAhtD5MgnrzxU1W4kg168hoELnsrC6K6hW58479kY541Pt5MohoRzBdxMi5Mkas2zd85d6xv6q",
  "key31": "3JW1uYucoFCYvg4YkXnorikNa4P5YMaVZxEKRs8oRNXgKCrhoPV6KJaUHkJffM6ZRyXZyQoAD8wRxXrYp1Ww1KUS",
  "key32": "2bSjbUbDbXmSCXcwyNEcjFE1iGxRaWZG3kB2Ehik9wmXwPt65EDMuNhjrtxDUpdYuARVcs4G2mR8CwiQeUnEMj11",
  "key33": "38SpYbqMCfARZBbKgFFnUGmYTe8gwtw4xBBszVFUujxacsr9nHsZTNYkwTZBL3pDh8QJNnnPjCSkxeqEGpzYGCuL",
  "key34": "4cKVyFVrKsebuETx9cdNbR2ydFtpKzvM1ietAwtuMtTVU8uCYyzhgfNuyh7Epm4ywWhLAMThuq2Ro1Zfh2HXoSLn"
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
