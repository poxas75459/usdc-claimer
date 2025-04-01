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
    "4SJ8JRjHWM762UCTxDn2AYBmsWk1hueDCn6nZ7N9Nf5sMtKJeEo3Efo8H6AhXw1S5GCCNwTab2aevUE72uiGTYKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ag5SusExVbgJrxsEp9Q7ZkqqDV4XsQJh1EEQeYpSCYxVa2f71NhBbMpy5V1f8pkF3hxCPpV5EXPX2mF2CpGbhH8",
  "key1": "LLQG4qrGmmpbnrUgFfh7bxSkiLWieFdcTpJqjRHLM4hBg5dnMgopvPJtXF2zP4j1AVUBsJacBR9AgjrWq5Vz63o",
  "key2": "3PwDgy8RY5BtmcFArng6oePj1scqZ6jwJdk8VxGrc3dwqMepK5AvVZ7QJLCPKKP3MdWDk8MdN7RPDFnMUkkNgdyN",
  "key3": "5j1E8ihTvDyhG4StUYG2tkqetrEb3DKNjtzmgZPY1btmjS9wcY9PasPehZWx5dyWfZXbjWvXqqpwuDPx8XpAXDse",
  "key4": "WCnkc6djCB4ZVaSW5fF5vvb1zsHmvGvsrKQi1Rbc1tbycymHn1SEoqARb5UsomLtT1zaLggo9XWCUFDpWbb1foW",
  "key5": "5BS8kM4AYAGVyZ4xAzpuEnXSFZFGW7gbZ5dNg2sDuuBsRM379sn8iA4YoENKVcXEWzz62dqUS5rCGvv6KqpkkMVS",
  "key6": "G7wwEpkmXqSQTmVANuuyRw5WLpHDG7ovz8oDrKSiAHEEcpwSrsCsHeoCE2LVjF66NtC7cRRQh8kFae5yXVw6fvT",
  "key7": "3iRFwjbzMAm4t3Q3uaNzYvGstK1NSEhRSbnvuUBB5HvWGo16Yt8aCAZzRThfcuuK4Xm6CqkgzouzZy7iosToD9ch",
  "key8": "3wpBv9PbgD3gsDNea7SvJoRPss42VBPvhJBsLYAdmRkM8U2DUfDkkTquuUJ9vQwQyPZYc7tBB1zXZRTgBH4VMLEs",
  "key9": "73tZg5uJoENc8GpPRCSvSpk8vDAFjDzwx8vGAMuNX22Tto4m4RruwwYxL14Y7Qh3PtuVGVQg5wQbtLWtJo7dnv4",
  "key10": "2UTvxFX33zzj4aeX3KcVdkd5pmgVxTMAEAqgoSS6PpBxjj5jw7eaLCvKvYXPkHnn8p5pdAj7aN4MwpjqBT9u717o",
  "key11": "5B1Kk3ak9vBJLdgpjSu7WBx13NSKvreEpZ841FACtZrJkk4Cvvk9QQ72mmLkJx6ADCRmsQarv6FPALVeipmJVRdT",
  "key12": "5jHcJoczsngW4vMNgpqvwrz3yxju3XHRGwng5VKynHnuHnrLCfP1tNyGNjodwR6YksAcrWJyL6TbEp8ovDFJdeCY",
  "key13": "4hwBjaMoMRMNqjfyVMupnNTDZA9NNfZdryAHEypR6cqh9yg9pLZ3SNtrbuWp7SWAXCQvkPMmnQwKsjmqLq7b7S28",
  "key14": "2FSvp258i4s1Lnt1VUXsp8iiXJ3Agc15qKqbEuxNykjD9v5BW2Qzmatgi3V6DtFMF5Ao3VqRhaxDnNvi8cSvmKUs",
  "key15": "3NevFv2YAvzCWpmXfpkLyCFXaNCZNtVRSmbHhnN2EpDmUz71pfd4rkuSwdp4LfR7Hbm22P29MShPkCZL2UjaVfd8",
  "key16": "671EZZbqk26pvLDwwgTZngC5nX2StoQR5T8ycyc6cGmCsh7ZwJTdAgwSL9sWYAwHoF4Gny6SUaDMoEg2tSokTdTT",
  "key17": "3UFdPbNquAYruk2YMY86NxzknWcgRJhiCxVw3jvqGKWc2B7FcBiwwv5DMREThDz9zudCDpsxUvB8t2xU4f5uk765",
  "key18": "GbiWu4C72C2v1rcPafZHhwhwXppi83p3kyNrcDJ6KMaYx8S8YKUHpX6iUyHcnfUtE2nAH3ovcUD4CsozzWpcPTb",
  "key19": "4KKMcpWeG3SeGFDLbKZz2jFFwxrCACtqBiNL1jLoPFRHBNrLR5MDgP5Zyc7Sg7QiZLoEgqkqj5ZjFGs5z37vGvof",
  "key20": "3eMu7fQnsxaDN39aseZ75j3K18TXaxHFnDqQGpQea1mezpDRBbJp3hkqwNCfvjTmRxiun2aQaxfc37Rem5ofmp7M",
  "key21": "2zEfCXsgUzhPfH4HAcDtJ52k2NQ86bQRQwFXSS6JUp7qSry3b8FecXDiUcQWFWBU6J5tgEgVyC8yKbNrE2q1EDW5",
  "key22": "4X3bDvcv82BTVcm4yAGJr1bBVhSso2ZDgFR7DZMjpuNhBvboNwR2kTTFCxYKJZP6npQhrVF34DdTT8Ta5zcaZmUZ",
  "key23": "3zEaruQPaWmhHCgyG5TV8qNRx7jXPy8HcU6UMG9BXqPG8BRopeJpsygeJz3DUKr8rcAFmMouTJw9rsjnvFqVnTG5",
  "key24": "3e5qHBNNf9kMrt8mDZmDVLf1bZvE9WCey59T9VJUoHcvMwhe5dSgZieH5BdeSer8qNEkoex2QjCWCRyZUBhhPMiR",
  "key25": "3bJHVXQ2YJxgDt3df82oehmj8qRd1U8K1Y9am3JkBs1oFSYeXc44h6Ff81ncvXDxHxPg9ofQ5sVCKrZMAySsip5T",
  "key26": "qcNsidvk1Qeqk8Sgkdi38QqA8xrsN47NFawgfGxTA8DqVnaGPvNNMxc8GMQpPo8UvrP29SWXxsyDj1HxRG9ZiT3",
  "key27": "2qNJWeFjsyawwnvpKyqsGsJCEB8UsoPh6VdNshJLk2z4djzKbPU8mQUd1o4UMnhdMcXnW2YWWEmkzEyU52VYBcUA",
  "key28": "wfnY3buHvG8VKMn9TiCDPfrcdZSfXeYjxh4QxkQjMU4VYiv4UF2ec65ER15mbbQhfxBeVqs8bodXRox9B9apXVB",
  "key29": "4j8L8fgQ6xJ5VtpArcLCHEC76opMNsB9iCpRpp7LWABKXagsPTi2bDdjH5z93HNuVzmdhvamZgipaLCgwhvvPePx",
  "key30": "2C7zbhnq2kjoeeQHzUa2Newdb4KXXvUGdDmzNGmbYi2oP43ePooC8rG4NZWZ4GYw4VR6j4AqdMKorVW5xa9mX5Kz",
  "key31": "3NyZhDzVhZiG2rrQkEZoMdCvs9yJ7ytD3G948b5JGskvTz5fWTvaZWXKX7t4s2VmL9AbK7W9QZFjz728o7ZAXaBq",
  "key32": "nX51Pk7sYcmUr14DUTgDJsvX1oKsXrTzqXpQPRQa7EyzybTWtkAShVxUmNvwdVhmSuSG1zqX88T6mxq3FZ5EpBb"
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
