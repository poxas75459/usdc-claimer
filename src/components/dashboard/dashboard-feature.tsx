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
    "meR1sGt13girgTygf68k2UJYA9JqRYoYGuUdfJk5TKQAACmPp6jfBaAP7aKmP2A7FZgf2z9AxM9E6NdAr1BJy5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAcCtgBjiTUDgSKpaB6x3mKpeva2irfj1bCmA5ohqwbChL5WcmN91yD4QdkNAZ9wfoYC69EwFR5DYsbJXoymEUU",
  "key1": "3ainKfWigCrrnKjYGFMS6wxk3W81SEQ1wL1hdyS4WQJjcbaVdJV2B1L6CWXVJZojSNqzhjHkGkiWWNCS9MorSNG1",
  "key2": "4oH2bSjjM9TQNTNm3uvD3Xe3PcUNJVQ64vcazw37E1oHfPuAVAc3bsxSSp6Co3pR62mdiA3L5wvXYv5tfF7J4WFN",
  "key3": "3SH1M9S2FGZ3sQrECoGvzT9zThAR2VjhqAPexrqpuyLU72qz4FMzLh8YqCY7LJfW17QQ1VrPpUR9yodfu6mg3GLR",
  "key4": "3MbBHUyLGRPNpQXeBFRdJ3ijFDVL9BztvyDLjShweG1Bqw5qLCSH14B7F5WjHvUi91W9wcqS9gLkUxNTyMVrLjNL",
  "key5": "GprvvxDVNig3EL9DTBi5i3ksFSheSocnWEerBKfVA2fD6LTU2vXEo5318PXSXrLtLjmaR5QjUYt8DsAsJEpfBYZ",
  "key6": "4XpKcqsJnMNbxNZZS5SWbJisbtYPMRXDd6HxWvLcFnq7bXixBS2Bq2vdghrCmdS3CPs8Be9dVeyN5kM79DhReaST",
  "key7": "32vsPe943a29zpe8PMeGtZhqCuefZvUBd3qTe2S5DheZLL74xHjq69vKn6kVoFBGSUopwyByeb5hfDeD6tq9shLq",
  "key8": "23dEpsvmXdnyDERYc1CT1XkQpG7d6wSYL7EfFm2eWFhuAQ8SGLHnJhoXNwMf8kHtBMzeWnheYdAFoqyRLWqqB68p",
  "key9": "2uqT6GWBRyZ4s23fA5SiGsSqHKP4dnL82mWkxDVmwc9wzx1i1JTGR67LTnQ3BHGoEDtwcjqVzeRm96yrkoVtzviz",
  "key10": "6471wXgzYHkgdtc7CpNxQ95vppwzCKs4ddbwGWkBcWeAoBjwk7TRFozq4CmkUJqsY3S5bFpG3bc94Mu34XmT7PEw",
  "key11": "123p4p2uL1p3KEkpnYN56PD2wNqzJU9zTcUDqAgvctyAGRUjyqakgCS1FwCtQAhJhEzzNfRSZAPjuuLXYUnHR3sr",
  "key12": "5fa5ZxYXZatSMzPcx9mSVGRNCBHPz4dkkAPPsT5os6TGHR44dBFF3BCxi1TTC1L5ewBCsoTsVd3PC5jVFvxPjLe8",
  "key13": "bKADEZ1n1bzcB1Vu8a8riRgwSXNJbp7n89c7xW9jbjPZLrhK7jhuWfLGU84ydQJ7MvoPW4F6VQtQ2tZbBY7nps1",
  "key14": "CoTuKhqMLBy5tGadcdhYqHUSzGCyRfKg221uQsLTHaCod53eUCt47ZgoYCpKVUws2XwBfTBtEMP5C3CiC7uDG1x",
  "key15": "2USiV9STScCfCASVm15qYjaiEV4XuamasLu6vJbGPoH39oUuS73cwb23i8Zhh2xWF84qST5tzWs7EtqRFfNPMP9r",
  "key16": "fAvmyYa45He2NHSSwYmZgfpeGnJqHiXQpDjsMCZb6PCHpjRFMrrEtJudofzbUUfXt8UCEJsU2FXMiz3ERs5C1Lf",
  "key17": "5EH9T7M3PMhuUq2Qd2snRdpDXZPVy2ncjCzUPR9sKZoufaDcdse3StqY88A8TSfEYPCGqW3uWhredZboHb3o8qLH",
  "key18": "2n1xMNMGyJsKQbDmKcdNTiS7FEi3iBBMhe4VC1wXyTfuHUVJFX6yYiT5qvyE7bnWNX5GgL7Y5jvf8xrUoaKXWUJq",
  "key19": "2K25PsaXPp32Gq3mpjpinSNMN8sVYCWTPbbqgULbqHmfPDgnc2VQtZ7TgR21pUEU3KMRQaKLyAy5ZTxPF5WUnELx",
  "key20": "2NVGnK99eXABrWLR4icRt2ZMyUgoznSdoTkWyu2gK7J8fWVjSGiBCyRvnxjHT87A4oESU4xZfDbZ3EczxzMUsrJq",
  "key21": "ELThwEgVQDVCJ4Ldetyx81oxebb1fzNRtTNWKrBLDgYuYKVBoSpBTH5HHcoH1aTFGPXWq3PLqgd9KhRxJqVQEhe",
  "key22": "5GSUDEpbgPnbUUHoA5cSZRybjV2u2vDoA1sjRkj9v4JDvpw7sh1cZcChG1ACzHRu7SCW6as4SqHUKKvfDrD9jiee",
  "key23": "2sJdu119rqpHE4cpKaTCfRu5JMGABPSJc1ppsFVD8AQ1E127DohbR6aExKYMi5Joo4FtUHd6XG6fCajfhHgcM9zv",
  "key24": "29t1ugxkBceyG6Nf8N9Je1fquXdf3F6ExXgaVgSCjWd93DWJ3B6RxaYfsbM6yyfGsMMtSX7fo2rPr1MAz1ynN1ru",
  "key25": "SrmanCLtvpZfnrCcfu1pM7uRknozDJsFN9EEtkcYfiLTdceJvtPrfgCH6YDsYNAfp9z1fiKrb3qQoJF3Xf1cEzv",
  "key26": "3j16ouNHLXgfUNMG6EerwxSwVR3NFmQWxpUhDg2Vzk9Q1Xf7emWf27rzRLN1jgvjKrvYeC7pXc7kVFKEgFV8WjDc",
  "key27": "4fGxW5Zs9JLF4EjJW9qSjv4w9HX7VERpdmB2zEHHAGqUruAaxMCAo8zksckyzQoQSETunpwBPmtP83Rm984kvBVj",
  "key28": "QzuswS3k9V5tyNZWnqK4MdkhqxjxiuPJukSGNV4mDcrqRHZyUYAo9Hn6Skk1YpT8FwtM2K8ck5ZHhuNwxeUzCXy",
  "key29": "8BpnWY1mnuiEkF5Tg6TX9W1wuKo1Lk4gNPtYFspH7M8JzwBaVffnavmKtYpFLsQ5ngBoVMEou452hf1YasJLdKc",
  "key30": "2gWhz1mVtaGWeEPtNVBiskeB8VEGZxhKzcXy6HCWkc5HU2BFZJ6NbEREj94HERkxDPvei5akiv17qVfZSKjZm6Cy",
  "key31": "4uXSJ2jiHmRkYhhzg7TkhASvTH3ajmXzcFToxBetNJHMSiVkDXiUFSwzHQrRzPEzbb8sZLXStX8r1B6gUG5tthuV",
  "key32": "2JNNihaaHxReR2tTQwT8irpzppqq48bupYqkAXgXyWErMfVwnqZoLojSZu3ELApRR1nQc6aVhHBN7f4fT7LRgrwz",
  "key33": "2HXofSJb9RThHG9Z84CHsnWhBmsjZsU86B6tKxACN6BRnfiLHqS5qXDv2ynh3KBkiEr7UHKUdtaj1oaHTrHMJYGC",
  "key34": "3QD3DeUHhpmZgAyXoNQaUEiNpR4toJndyqNm1T1MdEQ6Z68iChmhqCsBa6yZiLJkUnn6DERAZhkv8TtSgvZ3Cj3s"
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
