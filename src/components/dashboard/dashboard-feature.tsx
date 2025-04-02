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
    "63xKvZKQC8bJTzh1KiVTMztmvNEwPJr4Abq6G3nAbJKcD58sboVfmbsR3hHF4qSAMdPoVzwWztacD6Wfkf2RUdi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iifyo2AEN535MCUUH2WsEk8CqEYSHbL48ZRi4qTUpV9BjBSv2kf1NRWph1Eftan8LsZUTLAmwY89fA6vQzLe8Jx",
  "key1": "2gzBhqGcNFaRYhey4ZDyVYFVEdBjmuEuNXiW4RnNhHExuE2R3oZuyFr333VqXK9SMfpJJUmeedY6AnPjQsCjvSGq",
  "key2": "2hFdJ5zxch4W8bfQaffqYKzYcLLiv9TDrJntKoFeE4sJwsBAN5VSh7uzcAAXmvKyM6vtydH5Xvv6sfqnuXzhQbux",
  "key3": "k9orUkitrSVV6sKC68SX5sTe5g2M87sf5tqPxjYZq3Uw7zfFKrFuJxKU9DCcstKTZ7Y6tRbzf8hrVSFwRF17xeE",
  "key4": "49DUKfUa56AAFeYxCHtnfHSHvRuFeEmYWaAyVB1nFhu6NnvXtEMFC7FJ7WQfNALzBrg8HKiBpGpHvEvqWgNQe13z",
  "key5": "4VctR3MqWz7nXnKHuPEu3RY8eRZp3VfsK8rqUcLCKWR5FS1hcJridrhjMi6dKMu3Eo2JULcDt9YazHr4rcrZC4pr",
  "key6": "23Ppn6BTVqpLKMmpCWWd5FZvWpsF3bqTQnwKDKhf135gzj4ABiwFq5HpnAQD7PL4eReBeSBz9LBifdB2gfNFHpoK",
  "key7": "2LYtbww6ZY99kRwmzkHGmPhB1T87pGzVibKU8wDUajuvVh732rNDN9duVQ84vXY22L11EbKfxi83EaVMQtVat6nT",
  "key8": "2Bp8Grvz4iCaJPFyvti2MDbqMsPMUMbHScXkDWvYv3nAHi3qWRDxcVv7MYTjSjdoNpaNMo8PCTAG8z4iX2yNCpTi",
  "key9": "5tY6avQXzcr5AxUz99yRo15URio64Q1EQvCeoFPgermAESp3cC6ZodsMVG8ijiJ5TF894tzekBdXYNBbvxqhAa8g",
  "key10": "M6fJcub6hgUWyoQshsqXpfuzrTG3J7FZ1DnXUDVWzaMispQVgfqxzxkydpojPDECmJL3UXQAKKgiWMFFEgM7UtB",
  "key11": "3j2i7uGwo7f8HzUKFcMwhV8chSPgfZDJBpzRJfg5sQquQi3JLnsp9LFdkNQtaxT6N846Lz6j6xVenDtsdJaTiXJq",
  "key12": "5jPqosfv5RPjocWhNx5ZyH2HT5AN1EBwxRUPMqwXWRSgLojmvqa8WNhjvB7A6RWjV5CACwwnYHBf3yzcZ8Km9kNa",
  "key13": "5WEwp6pbBx4VpLTJG4TUN5qVrtJcssmJWJwm8eApQLEFHcHDEUXNAN2n3QhWK494eAzL29kMZQDvneNwZD3U8aai",
  "key14": "2ygqm88hS1CdvZVJy2JYebFnKKecc5gyWRVynk91iYixNpt46tbVhnoJ2AgtnCfSMERvY2dC7enuppf1EbvDjVEt",
  "key15": "Jj1e8VqKxZyKdoCfNrDrhdBNxEYSQJrdRdGR4NiLW8LK7wU1AGTWnFS4Bc4a29DtirVmnuZYJZd8McnCZEfrdZ7",
  "key16": "4CWvR7CLBcJU6qg1GATxUp3qcP5wTWMXL1vaYthr8DV42Ta3V6aDoxsQaVUvMvnneF1FUwvkcYHMzZrHnGSoJWFX",
  "key17": "S6JV9pS4UppiKk9XSjXb7oLjuTkuv7p88SjTznN8b83UPBwqCy36HnWXLJoY861uZh54ngN36k1xMHq3HvnQDXg",
  "key18": "2HY8GWmq8iLrwtR86qVFuWrCv62UWB8w95dCYTgi385PTMAPs7WrimbUzbsCHf1tPWSbenwNYbStZJgpB91khSYd",
  "key19": "4XGAAxAfzvrue6Q9PZtZhE3geyBinWCXrmsfSHb8jNwd8tkCgj9b37K4yFHEpwHNxwLksjmU7uPUmdgqnz2ZBQue",
  "key20": "4hojVNvebB7Qz6ee5AJRJa5CDEngkfnb7VBMhY3on7QDhhXUeaeLrwdVvRyRS8xCKc62wosMsPJHmTTn9PnZKE7S",
  "key21": "2TReK1PxhT96oDkZLhKTQrdSfDPy1yCPUJF9euF78LneUJnrf2QvMVVCVGG7vpwu29gyscLerUUtLncHqxoaEfhN",
  "key22": "3HWFTq8MuaGuT8rT277sFEtqL9XUwnshhF2qdBkFDwuLfL6i4Q5EcrKSaxbPqZ2ePc2CcdJJEhc28XBbhXTtad13",
  "key23": "64bzSY9cKaNXtxe4AjSR2NozbqaqFsdaVXGEAVqnS3D8EM7RA1TZbG3KE4xqk1STu7njCDuNA28bNJeQ74KLthog",
  "key24": "582BiMnMBEUJpzyPzevdpvgqrN927THu6AnxiHXHqRcLLngketRiP2j4yvavbcRXJAssWpjwgNhBSYr4LJzK9fBV",
  "key25": "2JfcEzmG9Z1LMUNhBiErzjcsBTRhCarv9nSEnR7uAYBpwzfazXmvyvgGcmgmqcCb2QYh5ApwH8j9fAFphZB71ikP"
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
