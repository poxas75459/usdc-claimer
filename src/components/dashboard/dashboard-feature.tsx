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
    "2gJYahfni7C6EW81CLtJCcjf4kafEskmKexTLBcrrCVx6a76KfnvBFCu2nDcjMziqbsQAkDycoEWgzTWHvYYLvYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gy5XerNgAtyhwLQAJSZ9u6XUz9rpLmUs2Thu1LaaeYHzjJKRSCpGSyC9ngi7JPwqM4SRAuQfuAYYhbHcNpXW6Pe",
  "key1": "4LSCnfX4TJkSftS9funrrzRRximpE3hiuAhmCKrpZYPJ55hUjPNUFm1JvQrafYR4he5kCqnKifzH85iYww7ndXjY",
  "key2": "G5Sg7LK36s1jf8HoQzZsWiptiZTCLfeNmr9v5zXNmQqoeVWsSutEKDwo1s2zphd4Y1TRba1gs97AjanHf6Lc6ot",
  "key3": "4qjvYyNV8on6rggM3MVWWQeX4Yu4NnnPhEnWSWDg13aUbBUuAkUhSbiiNgeajCDoQk8mXUSdQkbrxd5Y4jTmpjTC",
  "key4": "EwD8auCbFELWpqpzWyYhJWDEHXdPK4NdgjKf2NCruVaZgNzJzSJ5ojZjxSijxZnBAfDAG2hFBpstVcc1NuhUcqL",
  "key5": "57tDGA7qnS9aDfgNoG9oYqNUA1wjprCRg38Doekos7JAEb3Fyugz1aLzAWQyJpbY1QqNsL5Fvw9NVNYiEid2FskJ",
  "key6": "yZYS54iUwXdQSAJKLoh9yv5pJmpkMZ2kypb7vqgMkU7WeFEw2sL51EBFd99LyJ8QKcjra6XeQ2yWKYPVFHxWvAj",
  "key7": "3epp8f3zQqcm49z9jyPraRd4rMLezJKu4uLKbLrN3z5zfcitxUsCidgLmcRJjpNHrnpo1hnvNWjuDzh2QqbsSrUe",
  "key8": "5QtgdbFDpQastN6dwSocGDDXZtZLMJFLZA1Sz7QoVAGQY4fZPomTfCKnK7ARQVwj7HaMmKDdgHr6kgnL24DbkLov",
  "key9": "5feJZ2sSfMJuwniznWdgH9eGTFqn1o9jzxR48pWW6jguntqiMmqNuu4qj2EbCpokeGHEuoAFiRSYGEP9PLC9BCV7",
  "key10": "4ruaYUKKrC6JcEJpe8KvqRwTmJ7ybRBsBphYnTC8oCN426pbbquhEbtmqjVNWUQcMFeszmhpLCt6wK58EyVADPKu",
  "key11": "2aygA3WgiDpbeLPwhx7TCDYWs96mjUJwtnN9gU5ArPPCHeeNhfzzCT4zeboiWjXY38mQfiikiHXqMNdYCEDJQqSe",
  "key12": "2Zs7Z3UamsEyL8iDdwY8v52QEB1ofBuBNzV6enEXpSFsugfSUmnsKFS2Qyf8RU6WqoF8SGQhSkhkghXs1KvMByTj",
  "key13": "2DMyfgpzbzc5E46yrfiR442bUbBsp5hPobfLfkYAfwviVut7r7Fvvzd9y5YYiYndyMSWroSKeQSw1kSvD19TDfQ9",
  "key14": "Pn8ZC4Bts74Poo1fAMw8stw8FGBGmZqEdEXN5XEx2CZ4wr36Hs1aYrrTinjBfptepxnVWmsevtjuMFWasCcT1kw",
  "key15": "5rS2MA6kyaaZdHLiabGMQPvnibby7jAXhZ7EKD5cPcoPKDRsuHp8GmWRn9CcnPYMrA8yWaNnpMjxWiV1LSyjc3Kb",
  "key16": "2dCyd6Pnh68RK7Whk5QmtGNfa2W333GEbeq3NdHfTARDZG22m5y5MVM7Y3ceTX8AXfdECQALbt2dJjyukdsZnSZw",
  "key17": "4B73xLiRXz4nw5Td8YVq9SjgpgNJMWxUWuryMvmvXRRFvpq8ehwsgLDu7iZvp8wXDQ5WQyzLJ4xnjbuZehxJUfpv",
  "key18": "2EXhHyXYzKSyuiLgZFvxAPX74VRzfiKynisRVUrThMvaWP2vLLbhZVokorzqvSUYrq6LokUKDUzoqxmmm4oL5oFV",
  "key19": "21xSyWYWecMeGHkgT18AmDZ4aXe3RiMY8YB4oyhwjhFabHsqG1YCgUGC2Lky5Tyy9UCYHYjV9nSENFntUpPdCEPc",
  "key20": "4cXiPSx8mky9sjGfizh86PzxwGgJELj7KNHHsJQexjRN82cEQLuWahoMn1mkK2C3VMk9BxMzu4ZC8FqaZhducsYk",
  "key21": "a3w7cBr1duZTSRLZMQ49rmvU1Cf7tKkd3izC55c28dDafTHmsLEp3qsnXbwABzPfkR53WowYhSBSfRdMWeCqgPE",
  "key22": "4eubaUJ5GQgVxj6jfEnioUuRnqMskJ3xybpvfKr3fMVru2TCkbj94kXnXF377nVzHPhNVfEG1FGFhKKFyacgYQ5w",
  "key23": "3p3AAHepAUxRA2LwTu3hVyAp23ft2Fi4fLBcyS9V2q86DzUecMPHCTv9b3pJnoFgqT45FLF5o2qGsMqxk9B8sCB5",
  "key24": "5TQz66KdcsRj9L7HDF4EisaMTsEUJbfnSj4aabgQb5CkzkVN1W42RrXGC6vBrMGqLJw5N5PQ7guzMdMCSny71paZ",
  "key25": "4QzsxV34bNXwUX5mgAhRQqWVGtW2ysg4uHEyQHLJjNTqo72EEgNuj82wKb6p6RsMpkEeAror4WCCobYUDcWXavpZ",
  "key26": "36kboR3xUtpCB168FgyjWhrUQhnZQzgM8ymgLqtegD1C6GRcsXahpVYeUUpTHJtj6hscigoX2GKWVghq26BezT4i",
  "key27": "679dBnZDe6QyHvar38VSWH8Uf7oAMJsWBcBPHNiDHq9TsaLhVRKEAy3MVvVsmp5B82ubT2uoEkw7z6uts2rWd1dH",
  "key28": "5sShpvipt3yGkBehQBHgFkpxf183Ng1dnoLv1wfdedaJMWgHU3DCmA7YHM7b1jMq57wx6jk4jBg56RqQUBEoH7ii",
  "key29": "3Vm4KA2YPyR2NMeds6Dpgd99aggFHvox2912azsirjYuevskW6QPAcGghfyUpd2KQ4zs3GVueNUo8eVgCf5ZS2JM",
  "key30": "54envsNrsaACyZQVSAnVZUDS4p7uqyeVNcC8fDSf2eg4eQPXhjg4MmUYsAf61s32cZhExeqGRxLf5GgG9kbsosbg",
  "key31": "31xJFHVLk8Hq5okiFrbzuapVBkiAF13rv53Leg5zRKnAXz6qrDyXrz2Sr7aEH9AhQZd9HRvVTGmqy5SJ9NDNVbNw",
  "key32": "38a8RRm75QzxBKdePBPbEjtHLXazAfGWoxnugaAcao3jbVRiorprYjaVUCo5UpY4teadH2NukRxwjtSJeBcjzYuW",
  "key33": "3M1vEyq66fhQxAraE1PgiRfV6pZa11PLALF9nhQH7k13RPoQ7sPG75kUCLkGPyDMU5MdwpgGmJi1mbtWu1tfo2aR",
  "key34": "3PsEXEQ266gFog4B8LFziHxDbmtvjHahrjf7pwcGoyZ8VuGaAXeyDmDbP1NQa71U3Nx2tYuWVA1BGRAQZg3rxPFK",
  "key35": "4233E91gSEyj3ApE4TG4YfFvX6NuTQb9XPXk65D4Tuzdj1Qa1DxQf91ADcHDYLuYms1VRjBoesKL2Jni7CNo6YcT",
  "key36": "gozdfLUP9t8JZ2Z4CKTY1pAZVXKVm8dUK7HyoMKpA9td6xXkNMQbbwWgiyH4APpJzZVvR2G5zmDuTbL7X1JmS8u"
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
