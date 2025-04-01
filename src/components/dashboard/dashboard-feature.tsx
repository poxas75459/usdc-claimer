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
    "3Bop3hhF5UuaAa1rYBEC3BnrrQFqfKnTvFK6E7XkrcJ5n4SnXiu2bwJFS3h3xATJ146Rmg9DQBfHR6jsaZMeSKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ADTDFvgRV6eKuL99sUnFjdDboxdyS8aKxAimrJp5X6wsGmNoRKgq9wQE5En89XB28uwFDb2rSZYiuaVcizZ699",
  "key1": "2BeP77FYzYf2ePDZ5j9rPr3N9rEaBHaAvYs3uVQTLsos34WRC4rzP4uNx8L6LVW6CsNkwgTcF3sDN3mVD5LhCyTn",
  "key2": "ZXWvRHGYqedyScJZZRTVQEydUeXJetnWE2jk9fBvQLAAPpPtHqn9sN1Qx2G4uHwxUzfDd4r4gCQN1dsMjAGgiXJ",
  "key3": "3ofe2RcBk2L9d6Ad1TPihLzqNdwnfBW9b9q6icoemhY3z4vMmRVgdeFMCn3AmveL5SNpTme5PZXDFQQH2FjtveRU",
  "key4": "o7jggyVTrstCTaRASpLeDKgGyMRDYkkywVe4TGECsMRP9Bfi37uMLNag8XuP8Fo9jNwX8ofd8LeGWT5M4rv5eRv",
  "key5": "4Vz6f1zHVvrz1UKZdHXGMeZujG1a9Bixz51k8NNr8s4hvitb6hF4ZhtPuiAEqsjMSFgaKqawSA9UXoh5tq6oVQK2",
  "key6": "2UDScMP77PaeYTigtkmwJJPcEbqr4J8Yoe1b8CGtRQPUPz1jTwqvEgSDg1P9TpVm3GRJ4NPqECFWvoPyUZYumRgH",
  "key7": "icZf6UF3YY1eGccMk7zF6rQYLoHNZwGmDY4Y4PvM4nFm4NRN2cbGpvrqSDpoEzjSyvRbinPYd2kokU7pFP8FNxs",
  "key8": "5VB7wnGchYa6xzDopQxErRRrA1pyFK7KbVjgoCNLrfTKKbuAUf8ZP1a9S3BAYpHHwPkxjr9RqNxpKRN4CyUQjcAZ",
  "key9": "2uimZ2NYfZV3fanBkyUo9GLgqPmYmkBUMRXwukYfc3ccSxi4EqD71DdUextmNNkTgQagRSbbdU4CZj7L3LXGjsWV",
  "key10": "K1YsS42fXfDMcb9c3ffRL7BSoEsytZtKfWffJmtVBZxZZkSenhBmx28oZqf9rFoV1VKMrTHUsHBri2yLLnBf4xu",
  "key11": "xVrF92DM39iZKG1bDFmADYFdanZce9kc39r18hJ2sp3aea7M1hkQnDWLH8c8yAgbm64rhhcZ3JiNvLokBYJXf5k",
  "key12": "2yQ6spB5iTtDfGoj3BPjb6m333rF9xMmb2R4EAe5J2b5ZqXCbf8bUouaRUfHapzn4tsaj5ebdUchg6hWZzprQ4CB",
  "key13": "2oYzBX2BNGeJRdVo1vhcVwpsjDhFn43dafKj6uh2iKwT38kK4jzCkzyqs5vMmfVeNS2uRs5ieFGX3pkTiAXhgh4L",
  "key14": "5PKGtLSCF52J1BZ11siJAYe7Ni6SwNDVa2etS2fQk4ya8k7QAjmABcjt2dJKnFiY1VnDvo4Cj95qrXr1sdMrPSfX",
  "key15": "4G5Qi19hecyGnaGyK74CKYADcD8vf1ZvZHNzcfaCXodMUfC8Zq8TpG9dM5PUYCZjNxrZGxh3sY2p5m5aD7shGkUC",
  "key16": "3iWHcEKMxV2R6UiajeBK4aYsosjVUThdnerPqeZNJ4HaPmKhjcTGmbWdsc4VWiYgjERgCLqdfPZuF1q4SnbREh43",
  "key17": "55WB9UpfH7bVkQHi7Hvo3Dq43bUdyMWRVLKTAALKV5bykGJqdwau2qksBDF5s71SJ4FHqEYhv8gD3vyfnfuAbzTM",
  "key18": "5Qpf57rYVoY8KAZzgBpZPefd8gJLdSqcws2HMYbNoKUWfHG3vvHHBmfPjqyTPn7mBCvpMUsQSx4hsyD4eiMxo9kT",
  "key19": "3XcAgniEQKc5Uh5D2bMLQnoeyfjJa1kU3jemphvJxVwbbr71Lgj21yPqnXnKdMiw5s7bcxqh421fDk6dRJ8TSyXW",
  "key20": "46LGorjaT439C6nf5HYaWNwP3chEXgq6CGHtUCFoDBrDnXKRdgMTLo9dJyGppRG1fdresMm11niNVkFzhQnnmya2",
  "key21": "f28C5TyeWRTDL6uBVz6hGhdiJQrtb2a5wyhVUq41U9Y4jR3CMuB9mNZMcaZcjuzWBpQkaMBQMWSVLmdGQ8zsTiZ",
  "key22": "3DGYdQdfGW2YgXewywLNFuJJ9oF8QiTBVxGpEYdD71RP4t1CVnrBE4hy7kuZxce9qY6hzRJxKA9ARVYmuvHV1sVZ",
  "key23": "5mfmJb2X69ZDFbyLjDAeec6R9A7r36cqBbVDb8xqMxDEKA2x8vrYdB5iV1huSYicMxs7H9sPRTkHT7RxNvX6Hr1o",
  "key24": "4azHfuz8WabvcyLmHP9LjiSsjcc48J3fiDLEu46vK6kiNsPATtqdBhWdSbDuesCPkRYfmMsj9ChzxCxu2n1mNMi",
  "key25": "4QoZwgasWF2kkZFxtRQujGJ8PwGUEURMvU8dvdiCXZYXxkzFHahgfYRYE1vgM7fbxH2kBoi6xBoix2AmKZ2DwLYr",
  "key26": "CmetsFGD2ffCsZLULQjR6bUU3UKDErqnALP3mhDqhgyEcuJhtqmpz581TjhjuVeh36Z6wok2qYiNbKDY8jrG8yZ",
  "key27": "42YqJe8PxsLbxWcNqy8EwW6d57cdbJDS4bZ24Sz5Tp5JbnV3Ewk4pBi2GwHdy12C779AfXEZDw381zaDw63PHpsr",
  "key28": "31M6KD1ngm8x72mowud3U8gyRvrfTbjVuYNHW79Jf42CoYJ9wV6fmJHtZxgF6KmL1aMMsixE1Wtfkh6wphowvuRh",
  "key29": "5UubGr8QZsu1TatnGvny6pMwZacrfzPHb1X2m8dP6wHcMhVmChE9RsUdonjEXUaVBVgTK1BzxpGmiQiN3jhu689G",
  "key30": "5xAMVZ3CPCJb8Ao8oKd7iVDJNZHRGrw18umdbXFcN6MdbTBaZNz39SAhWDWqdsRzic64pq7fNMAhRdquVgQVi4qf",
  "key31": "65nyQBQsbuSYYb4JgM1TspestB6pzCSP9y8ntPazSVnXvVh68UfghwZtpSszRq4KPgw3vi8w2kKr3aXYGWEBegFG",
  "key32": "2eFLhnaenYnmqKFsMvRm5ZMqkHkRbdYCkP8T3Cq2Kce22SXeKnxs22g6viebvRQUoNXCR8vnUkL2ci7zLyDCEVDP"
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
