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
    "53E3dnXxZ7X2jFixGmVRwnDoyST35w4vfypXDyu9YoJmtT9c4FQpkam7Gy47YoKzpLquN9dD6pBdGKkyazniwvoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDBnJv8HCUCqZe89xH9H76ttuswv95nHtoMZwaN4jVWX6bQ86j3SFDaPaud3fd1G5uX1Mw4PsCsqjVQgUNArVVp",
  "key1": "5WK1pPGVjnkVyEBrgoi65fWpQ2aa19Bypfj1LtEDWnMC3hqzzARcbfU1kLFS1H8EZf5egbbbRm1iGYZJUQjUhY1N",
  "key2": "3vL7VEXmRUq6EXnpGSC8pVCFhs4tkMQv2U4F8qBqiuZJbMgKrHcV2AD851p8D4UTp1WvzLJJFiENh5Zg7uSs6TGQ",
  "key3": "3zPxiWAvDo5Ui7xQSuTxt8Br9nYnCBhzb7cHh6tWXPSNEPAfspLjSPj6mrR9j44V7ovGAGfF8KFYTdd2yk6gZ1Qd",
  "key4": "3wUae8geoJ4TQ2Yky1zbwLQBVN5u4wC8LSTmpNXjrTztF8qayjTe9sSCqyJxvwkoP524UkSt1R7FCTecPi6TqkhZ",
  "key5": "5Qi6ykjiNLD2MHTuuaFF4C1dsSBWWBcLuR7a5UhaFSZEDj3nj8ZQ6mCWmuEam3vhJDojohgNJFJN7esn89s6gFjf",
  "key6": "2kYtZ1VWVaEMEFg12r3uZzyAps1LoHGQA3hZY4DKnb1YoTppBj8V2PuVjLUn6fUeb8X3gmQfdHcNeYz9fJqbR54K",
  "key7": "67R1xuMnDiPFW2xF33Q89Mzcv1uFjYybtJaLzeWwzz4pbuyjbhnSuCqryrS1ebXSvmFUVtnm97GPonbaJ8uarfjC",
  "key8": "3Jvfoz6p7CdicsSDSXY1poT3dfVQZ1bsQxruMAn1HuGYKCLuS3WUkfmvTxcdVauQvCVoXvc2qg92Tda4GMoBdjmU",
  "key9": "44DTjZvd4M5hoA4HmRUUpvfRtVgAsKqmusnVjQj8JBYVP1qsnQGMmFmF9QtT8LN3QB4JEdybeMKgxptn96ENcNAN",
  "key10": "64RAktAQ5oGFzaJ6fRbFPwycDMXpDcoVtrkqX9YqfoK8NXY6BcTbeH86LJE41aFSBCqck81SR1USPfGJHsggvHaX",
  "key11": "5phdj7fTXSf3C1V9Y2hVVNjxiSmE52jjjX5rxL1xZ93QzXHp3ybAY8SV5Ex2VUoXkWLBFThmKxBiuPDF3d9fNJYG",
  "key12": "3KcwBD9tqTfLejPyWFHucoR2UjZH1MAeAL39QzJSsdumj5S5GRSS9GxbZZtTcunE7KigxHYTw7fNhCa1oZDkDyej",
  "key13": "3qVVMPe73JW8ChcJnaR7zoSsKy1r6vV36ce9Z9iTLNyKwUaa9QTgpZxo6ThhMgLqHvyMhDVh4KpbeFuHukhHhRoE",
  "key14": "4eHzZQ8HnTHqHsWBWC9ZBB2gQWfTHxx1vrmpdh3JBPXv3FK5NXrkARZd9EffMVJffANRnU8X73tM7SPmooMY5tWi",
  "key15": "2j8dvXmMxzyaLBUgpikWZ9qByC9sXit7UysY38dy9v41B6FVKG2tUBJZ6R3Qtnek66ycBHEwPJNTSkmzRsnC2Pyw",
  "key16": "2bp35iZoWSJuFmZ4X7bcPS1rgScn4cojAUo9vxB6SjFZsqWsmc2VQK8qpHqrfnJ8bPYhQmFsh9yWBZYyWq7o8iS3",
  "key17": "3xnSQkPHxmmUcvAd5PT8B86o53XCEb53yf4FoyFbUDtp3FmsDo3YcqZ31MXHxSpDXVaPJwwKmXAbxNsmjhdT7pcD",
  "key18": "269koaVcgfvBhh8QGRdrfvy7xrZuFNN5Qrnzc9vdU6pJQ3TGMo8H18dDzrmAztmcuQEudNFhaQ9FJzMbgzVmZcN9",
  "key19": "5sjsGxJwZEw2m3MrbDGjXjwv8Ar7c1cToDiZsSTGbvu9KYjgoN5ttoCs3tACh7vgkD3hQhEMo8Vv6rRjwJViY5aM",
  "key20": "4tx29VoCr7B5hx5GcXfJx4N1GreHZCMcMsjWREjR89VhBG93bNdge3yLjGoauNehFgShcLKbdBvqnCk12YtdC7Nw",
  "key21": "3h7rovU5Vo4rL1maQoxo5zg986YG7jvZxy2fFAQLRVZiwLUxGWQ452RnezzVdTW1ZnWK7HurST4Z2AYgFJpbQoWs",
  "key22": "49CGy8qx9J2aSEvs99rG2E8TBixCs7twMFFyCJQZjLbVZJJCwwfnHVj7eSTFF8sUDsu5QC5dQh1JN2skNqCToerv",
  "key23": "497xNgg11jY76DpAtobPm9ScZYAHeZyF99Lai6JrS6AhdeHFRDzQSzveh742x3tXBfgciUPVQEqTNv11qh2u5Ve5",
  "key24": "5K86tpLycVdzqqnw36o4izancabsyq2zAiyTcQe9GNiq2mHbsQ6owMWQFFDbTmim6JEpZATEozEt6PbbRWipBQbE",
  "key25": "SzWMR8cxF6G4NeUsXwymDyu5jqz8iQpVMhRjsNfU17kkUxhkyioe8NyXEfw62BoLWpA5AknxXyFLBEhMs7QPefB",
  "key26": "5cani82kXwVGnTfgQBWSUeHnZn6RoP3CAdmfSoguEjmFZaM7CD2757aNGdEs85TnCb6ZRsFpjUAiq4e3re3LcP94",
  "key27": "N7ZEvDDgRUEUDBRG7U97v7EFQdTjP1njTm9fSaBKFaSRGfq9MaaLyafFfzVUSczHW94NwMcBza13TYMhtW2EssD",
  "key28": "5QrQH67Q178t3JuAsieXr3Syon5Bs19yo3Y6vQtKNf1bqBCbGcwgSfc7dckfHU5rZ2LnuJWtjDyvvDS3Dyvssqrr",
  "key29": "5MKXKaFnV9uhkr5Pz45m7rpiAnz6w5cB6CPUJLYgS288nhSUTTHhwUQ9AspeazEBPvCAQ4MmCy67iyGVLe5nWAV1",
  "key30": "2dHLHCuc84ogu4zmXaKHZZ5baskYHGkadEvAfz7LtX8Esi35FqFGScgvoKnt1gsu7sJHwGGZMxWY13QfJvemkepY",
  "key31": "N6F8qEtF4HXtJUH6HfjKRhAsS13AVR5EWfzWAAUBHTrgx2hTRjbJhux6buzJyLhJC945PgFLNqUZyeZwUdE5ThD",
  "key32": "3E8c9KqBt2nHjQmFZbenJjsdkiG9cZTQWSRqivqCtFpTMKpvXQFW19MMWYX2Km5WA55fPfRdUceWWk6unBsJpaAp",
  "key33": "4MATdUCQKzpkkCTXMCYM3BtLwbnY1va8hqiDFEt92DjMyaQ4BSxXKUDcGcLzT8LwaNkekHGiAuw453JymByBzAou"
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
