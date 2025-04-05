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
    "31LURPYXPLLYqk4xftivmSit1jukEbfkg5BLuHihWoFwuXGn956hgMd1QqWSJqivtS3zNuf9aCmEf1w5f3HmAVnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7Prt2mLNWVLJh9m9XouhYhZpJs77WijXFoCrpK8QT4EJkXBXxwL51iqYyWrYKX48H5jgMBEt3bMpghfH2Xhg19",
  "key1": "5LVB8Lx3LLKggnPqpz8n2SAZ5JGZ64SpR55QeDBJjrz76yDaxmsXTyUrwKF2mMnLQ73etWdcrzVgAhdwoiz4qZoM",
  "key2": "29pKQiTuASD87Jmd5aHFaPsjGKCttkwBpRL8pRxnBWP96kVLU92aRHVRoA5FRUb2khx6quGszYvmsSomfYQmvq9q",
  "key3": "3UKaDyfsSnF5ZaBcZ5d8EPW6aWqfQqsLL5txhuLL2Vi7d5r9enNnhEutLF63LYNUGPq288S3kGC5wFBkieyecmCf",
  "key4": "2yKpKhuptUvZ6Wqw4vpxDmw1tshA55kAcNmGbKr7ntBwYCu77isA9pXfXVMrbnx5wdV1wbqHEnnRD8WyMD9j48yj",
  "key5": "4qva2XnmF5MxhGp3rweVcrATEqXEgZSLK2xiKURTkwpPpfsNqVTpfhtw6NrTGCmuh5tNouE39G1969Zj8QkjzbsS",
  "key6": "2hdUxqeTstAf7garqL9z3hS1HKo4pnHVDGcrsGBNrc6EXvW6SpWDGBeL9D2zpXK6cvCxQP49P1rMi1qCFbXayjVB",
  "key7": "2KZmsyjAHgoLzPP7vQZrymPkWjqm9iabPY1ZJqRxeSEs1HQQ39w2DCnQGTWXmnYp7pcCiHK3ZW557JERUoPx5HMz",
  "key8": "3qx3GhKgRAdm3vmJtyg61Ekb3Uvp8yw7piUHyS9BfXrnXRB94zqKNUaAnKzKcTia13zJMm2vch7ZdjVh4hBVGEu1",
  "key9": "7yswMeXuYKxPf8zvbFpKpZRGahU5gLh1TGK7uqXAbDQWWADavgb3R5UNQJhtmSBmHU2ihW5VpqpPY3pWN41bpVq",
  "key10": "2GcMMSRpYjYqQ34M4RyLmwvek9wBejVVALv7EuCB8iKqP5yyEcK8Ynjh9VmXtFy9QWysRbyKmtbhHESX32XwEP1S",
  "key11": "58tvypw7kqQR6V3r6pT6Gz954aQoWhAEMivc2r4SyS5QmWMxdCEAfnT6phvm14pq2KZ3YF3bqVf9G4gAXfJJGcNE",
  "key12": "586FF3n86gPDQxhBNyfDhiafUsm2kVw7vvcF8K8KUoSa3iMu4h61qPgi58DjVCHJCSw87q3e8kdubGxsJr3NVCGy",
  "key13": "3HA8NbS2azC4F9uzoLX4yHKthwo9agDNx2y5EAKk6tGSGK4jzmQgHiuur3DeWsCB3iMQtrMw1MbkvgbDAWTRtcXG",
  "key14": "2WAEnwofi9nMmJM2qDtPim3P7tFCKHCbjnLTrBjH4zXw7fokGPHVs2HSwm578YpRAMrpBVM8qFR5a1CawehRawZH",
  "key15": "xko1Foa5BHKp6Dui7iEgQBNPzukrtnqiyvFR3PZCYYvDdDAc9adAhQ3cYLZSEQmiqutX8K5AyorHVHuB7WfiJLp",
  "key16": "f33w5PssszLk6U2zQ8FLH1cc1f37oEXs5F8QpJMbJ7N3sjxdDUw9cZJ9DvGjZZN9iSteac2bSHiab6VstyMkXv7",
  "key17": "Zc2FcRB8WaecjmQdLWtFCbXbZ26MaC7fs9xakz244Fif6foBjCznrrCdWTkUnmsZSVHwLa71w2iZd9Mgd66WFc9",
  "key18": "rshyMHZM3kezpUVMEsWfJi78whrfSjm62gAD7pV5jJuPhFH587Z2k5AMQbGoUeQnKuA8bCNEi643SqyjtheqvGE",
  "key19": "41JcjjSBNWU64mXNAXys9tqvw4APrYRBE2sMnfnsMvPnVJfybCpzRU2ad9Ca57R8JVK9iTHsXdBrG9w7v48FLFh2",
  "key20": "3aPresJhDnfq6Z8ZFQD3ZsAvC9SZygmtbRhc4mPjHHC4Qimc43wU3N3TJLAbn4jJPJM6PAyzzcdDmbLRNPQ3ETpF",
  "key21": "3HBnUHweQAAUXwWM7dRefDVR3WcWScXTa8kbpr6Cq2Q7ADbdqAYXssKmy3FZohE2X97zmqzfH5A3dzhryXEaYg9d",
  "key22": "HjiKXDfFACQ1P2uJSJLhDZG1ZyV8XA6yHHGc4twKyasHpXY6AmiPjSCiEMUq6258nKBZF9S5AtfSC7PtmiqCPpN",
  "key23": "4sgsJwijBJ35fAihqHMKzsfnMtWXnynADo4EqZKnkM6itdCVKJydLve7XcWEVFM6iT9Q4af9hfa8yc9tWJQMq3Fm",
  "key24": "2jWJbxWTfzqRxbUsc8GDzNuKum6tB9YVtF4teFgtRuNEnkEhaPYZg9px1yRUXjSjL3b97yDZ19ZYg8U97ZSzuBoD",
  "key25": "6YfwnW9Ga2Gq7B5jH74RKwzi8TBBGyzKqCFNgw9FrMtFYwNWd6JxNPi3cdsYZDz3drHc7kuCUMRdMQHL92KPk4Y",
  "key26": "ipsrqyTvdd3cKnNfrJzG6ERBXm8eHtsE8Q5N8H7opokhW2umT6Sm2GpnDDRAVtUS3aoKTFT5ZrwwexN1UMHANPu",
  "key27": "5KGtiYfLCutvho52v7EBsDsL5JP9EdyrXjwx13bpLumnQ1pNYi9UoPnMtnS69Ao8NLrNpWkcEydp7kCWcmPDomn7",
  "key28": "5tsTJJBLeT8pfbfVepDLaxjdrwbtMLD8ds4ArekYfvDU2ULDXRk1fy7Dm24m3mxqtRTDn4o79TMUQDgXJXUgmXVy",
  "key29": "5LDuzz9xsqQKYypTkuZVhJ5mbnsV6bpaDTYWpwNEvBjPKzxFj3Z4fdeDU3GjfMsTAgRFLMtqio3rXuvkkB2pyk6U",
  "key30": "2DRPS4cG5UuT8XjM3mRiL7HSemWMVYn2A9NpNHDMg3jaFnvA3YrueyqfTqanpyUkNc3abegcRDvy9RZseCWWtzpR",
  "key31": "2hSAEyVHEnSRUfHPw5Dcj2nWcyWR9i2YG7zd92N4su4uYPF7UzMM2RNYMRSYrcEYnxQoktMiYF1DocYRsa3A5Cn1",
  "key32": "5cVWfSk4gLqcnH1HbXRVT9LmXmD59Yk5oXheFXuMuJqqczizFhTzCGu9pSbLSDLyYXc5jGxfVCUMq8RRGuPLrtgK",
  "key33": "2qbkN5SifDz5PhJSEepkdx2aoJSJb1HttqTSUF4qaQuziyfuVs6skmYfv7DgTZfgMvndUjafUNZNTKDUtFeC95X4",
  "key34": "3r5hSuJadUNfuzfQH6yn3GiHjr8bWF7G1hJTuCE9eQoW2ibG5F8Q6ABFhTNzXvNju1LREnrtDurXnzpyUsSQfH8N"
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
