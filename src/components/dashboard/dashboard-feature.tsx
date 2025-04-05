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
    "5AGcu9854GKJHyNJ4DtJUB5k4WjPbegcUHAmTHymmyb4vuqzdmK65QPw3GzzQnFKhRE2nLetyETQPeUyySQyonLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzfz9xWvo1yxeZEk9NBKR3PRb3BNcfhAgDcDwF46eRawLEnYqQ2MUTXzi9FPD8S698bxntziWCyamLnP1CNikL8",
  "key1": "5BdaYuzM9MPaY5MMBvobESpd6FTFcN1Sd58ZwRmZATC9mkiJWJMG3dSdJ7d4oLU1u6sNgMhUZm7YipuT2HHTLkvq",
  "key2": "3Ce2FQYnWiVSGSU8X14uyufWMwhbpq9REiFZ3j11gVrVWsa4MYUUuwxaYvaEoFezuBZDtALTX83LKMiYnCo3pPTG",
  "key3": "4DK7SA7QwBGmVvJUHyN9YvStjHzkkNESS43WpmHbZ8YaaRAPc7UU3m9BQXYbg5S2iU1PQWaJbhSRGjYibrXAKdvv",
  "key4": "5zCY5vvR8MRAWHaCVTj1McfRMm5iQ2GEAB6N5eaRuMrJaZxrL1CSpmyPzjVMP1eteeAnuHM2Jwd4weqkfSjo8egA",
  "key5": "fLX9x2oH794Y6v5aReAyvpw41VqpcXogL5tPLFLkat9Hp3jYKHUHAXTuD9FhxXycesT8Q3HbYnGSf1P1EpbFc6x",
  "key6": "2aKAmZTtGySLCPBqPBz8mAQCf2EGKexEM3awXjmQXfkDktthbFEu7rAWpoLGkEWgfLLaLWyF9RyZkfaLiiJyReF3",
  "key7": "4MbUvTRDQX7RBkjjx2nVfqjSLrpUAnmWiMAXdgc9bAJk2TVcAXcnSgegzhtpArrxgPd9aXasVsTYKjRoJwosvzLE",
  "key8": "52fXfR3bgmx2gyzJgFz4JvGD7qmc5tjQc6nPy3k87YiJ5FumfMsNmCR3u9oMLyq6jjTjBvMUEzKBypuYFgS3hgRF",
  "key9": "RDJ7Q1bGkvcsU1Sw1SSNT5aPt234UgptJHiSB1bW86TdvdWdpvzLvJwPc5qYpmXCSLpxJauwo8Y9yNeFACxjWW6",
  "key10": "128RoDiy1w7ihxLBZADZ3Bc9mafAoEh1fhDNXcGaX5HTcmZdDeqLHjsJMT5oYbugQmVdZtL3NnVDQhU1bBCyjeJx",
  "key11": "QLDF8gX2csog1BT2JbxobPAX1QuYCx8EAiFrowMsSsN1nFoPvzXiaEK6G22NH4zprfdckc9x7nnMwjK3pQCAzV1",
  "key12": "5PJHdma72LdttDt8VdcRsKeXWZSJfP6aEjh98rEX4BqD2dtKJDFFSXAL957FfLPcTMYG55uPQrLHKgLGQK8UEusS",
  "key13": "5u4mqiZS2jN4eP5bChgM3HhtY3Ro5dCgPtm1HzReC9tBWrkSwACnP6iTnyvwX7VKeaqvd1cfzLC8zZmJgshQ2WTe",
  "key14": "3THLzxwQg4oAUTmgfozxCZXNWPWLyX3CJqS4nsQj7h5wAZjiGLB8Bop8Y9w5CAJ2FzoU3UzHGmJj8mq4wXtdGx46",
  "key15": "53kuwDCCUvpHwGK8KLSHcztVBzvMTGSeeGE97prPy1BqBkmzdzA271diSX7xYstjaBJhgyZZBKyoWEFxFAyvuPCR",
  "key16": "5EyecMTdG4NKsR7PahH62hFf2tuqL5UDmwbyyFU9s7hgofEFNgN5iYS6iA6zNzQyB6w2dExBZHCfYKpQEan5QqQp",
  "key17": "549Xv4HPBEAozkwRqNhq5TWnrzDJCky7Vx2AqwdMimD3PH8AXrZZbdQamMMPKDQNtBgdaQxHnjjhbEHTGWCKSx3f",
  "key18": "2GC6w1rbMvc4NpYuaD1ifgoPVbJWbipV9eGy6FDPwGkpu7aiihpPVPUSuWpcCnGLGAZ8tenWS77C1PEdiqjrEgcf",
  "key19": "5yRJstaTq6C1bqh5e9eUrYmrWuvk5orknbhNbQiRLQwQsoTT78ot2ubg3svxy6ZBB4Y8Gj4YXrdJg7ipt6nzJtz6",
  "key20": "3538w5AoaX1Gp144bCYSJApMpZCKFmyu1tVoA93PvDuDZBkgDFuHEFm466CdGUW4hAtECgQvDNHtkpziZi6gzsH3",
  "key21": "5VvbxbNCkjRxcfbDYmk8PS4SjbEh26vAeobt3iMcwZa8MxVw3hVUqjB3hTdTNdojbMRb9VozWPQZNyqpaX6u61tX",
  "key22": "2mpkcjDbZj73cVqeM6fkkTGfyFLpK7W46gauSBKvxBCytj9mfrNykrrD7vPZQQchazCSpCprX6T3sFXsFEjUhs4j",
  "key23": "3LdGFtxzjR2UtXeyF5g5thq9w7WUtp3cXvXqg5DzUvMjzwP9Z72xshAY22raY7osBM5qtvcWTx7AR4Zhsiqiw2YK",
  "key24": "5JWfuth6EBn1s2nLpCYELhZ8rf54XeMzvy7mtiCzcVLjbdt26a4xA48RjkkYpMD81mkVk8Uo1ufiBGr7AbmwMaKv",
  "key25": "3rNPgX3zi7WTc2RyiEU6oMWRhDb3UcAPspJLbKmmUzfGaqTXCwqfkApzHdWzaSy48s66kLSg8Dwjj4xBaLwfFg2X",
  "key26": "4nH5t31Gjj9npdcqb32kWdRkgwYXBqTgZd5UUT5xkroF8QP9vGPoEFS4sTPktGuEXfKRLaQhUCGHCvvdcWkigqeH",
  "key27": "5nSagRUE7hLmgrnR8gMtRYX69ZGkive9imSomT2wrd4qjd45KshXmunnnTpmuZipRx5fQeWt67HZ9kYkdnasfrQB",
  "key28": "3aZQHMoNbCPtsJ4RSHaXCq7efwrouCPYaLoiPmTLikmS4yQ4uoixb8dRD6N4XVXC38aN42GtRy9nPQ6nTHfN6LPm",
  "key29": "5LWKJZuspvZprZeeAwqvBoVgcAvSGeGJGsc4owThqFVSDGdkUwFnuPPfH4RqGNpx41SqK9RyAoXsNXRDVnAMjgLB",
  "key30": "3vXHCJVLbfeC6aP3o7P3sYQLyWcA4R4KC28zgKyB9kXuyhzBx6WwPfD124spQqZJzUp9FeT2a9C6SEK1zzCXsiiV",
  "key31": "2ydLfimQeHt1VfLpMutz66YaDWDa8ozwhJKQMhbZYCAkb8hxU9JyUwy1HbykfqGuywaB24Kqeso9sdMBXefo4hhP",
  "key32": "3BcK92tNhv6EEqf4kmBu6eV9syLvDLUkBJ55HDq2mdJLacL6GP7o4wDgJiMZgH8yzzLWDsTHYXs7We9XS6JUTuGf",
  "key33": "NnitLQcoVetn6k7iTdbNK8gCuv9mnkk4e8Lmy9WUBy1PYG5MzsefZ3a4eEcJPgz2tAKQSs3f6p19MU2LQiEt67g",
  "key34": "FYT1LxC43iiVoHQkMhka17reGKx8q1hViJ15RRvMnkhNM2tstaAdvLF94yvCNRqdwXc93QgyMrT4vregSpj6pM5"
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
