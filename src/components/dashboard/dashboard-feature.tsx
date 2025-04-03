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
    "4W9G4J1kqJzJCG5yRHg3cHfwCBcEc8KU2SkrH8nwsjAhvRuYygdcPNUHFfp49yGRtoJZsLvgcEFAkSegUeSizzSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FjC2LpwBcnoQWoh9xtZF9yZAtFKZNpsyfoKdro523r1Hdafmr8xNewQe89edNh49JdtKr1L1XfvhPYBDmvcb5u",
  "key1": "4DWVxTo9zqjcV8xpYWQhJLcN1PJYpEzvyZiZAhx7dk4MyCr2MK3jUkAAAwEavgnZSMeDXhdZdXJj9HJTQRKi4iCU",
  "key2": "48zXvE99qqAZYr7R1PSNTVVrf32y3aEMYzjZaLtK3yVnQqvC2daCZVpPzN6qMaWhvbcNgtRKVcauWZ49EtuJxXMi",
  "key3": "5J8bj2wd6brBdRpMBnDGk6wXL1Z7SrtFNvskM49Pk7zE8ibAXxVTGjsRjC9hG4JkAxqGs2oZ7vbMNGuHQeXkxvtB",
  "key4": "37GHyjQPZfkjrUubvMyS8bTcco9bY7EbejExbv4x4GsETsAnoWuB8VDH2rKn4s9GZBurysUV5A7YrZyybL12SG5M",
  "key5": "5gPAsuQaRzaP4gMRjAFwZeHYnAanaapf8qbCadFajW1gCc8GHwZFDbsRZGeBNLyJ9veWmAdQgWUCH5B7zRmZA54J",
  "key6": "5tRKvyY7ax5hXW3jNWUyHjMRL2Nr2cFMXzNxxV7rt6c2bQvHtmU1AYg9wzwizLAk2Mc5zT5X82KjB9oGTbontEFS",
  "key7": "4HdKqR4zmVuZ4m9VnshNceYQTxuy5pdNJpSTcNKsLW5MveQhCezarmngPfaC5HtYNWrhw3NLMcj5TLBrek7UdKBi",
  "key8": "kdBfGqH9MJYrZFnY1nbMAFRTMdQzN4KCZk1WzTPdPdiJdgbcvJvaGnmaMyuftSCU3hvKgma1CTzFxRghtoLwhH4",
  "key9": "2vHiBfDjANSDnnHVt7BXf2fFyLTSFuLRaDcfvY78Mzo78aWkz43VYBYeQCXVWKMtb6osfZvZHLM24C68EtMZLPzu",
  "key10": "48C3NfoG6pm4uSYuG5cDcVTKmtzfPhZhDC6jsjN1yku8RhW5e771pE93he4eHSGn8dAKAP13iRvxBPqyKTiKXJfB",
  "key11": "3mXvJ7mMMniwen23bEmyc38WqP636Yi4hjf7QBxiYrMGu9rW3D88QwNMzeMda5V5Zg11uC2YQY5XJ7Fm3RvHbcUe",
  "key12": "2k7wisAEaYKp6xvwANEfLJubFRod9o1uj84nfZRT7XbZq5u78LLqEQ6VVYkVyhuGpuFFxVAzihGxELuqBGbPzrUw",
  "key13": "V1ww6iDkGjwG4Kw1mLppQbTnejXxn9kGewVRtbb7DKVRQEkbi8gScsjLu5uH9o5P7UUTjUYpwLiQFif4d7T3m4d",
  "key14": "5pdKkcWTo6PfqyasVB7KuzDweSwUohMpcRo97Bj4LrU7qzxd8jFpH4eq8zjFMtqPXcARh9HT8S7SuKc62ycP87cM",
  "key15": "4zD9vFUQYUp82HgvhMDWzJyezeifyUusYeFw8K7eiEHwQV7xKquMgyWC9nu6qApgS9ei2sZFHiBYqdTN8qvjMWco",
  "key16": "xSHmpoy9w9BSNZTMUPgm9RC8U6sM3UTfkwDdMPLcPPeTZXKjmL25HNrcHp4d6K6i9mjFmNmTV8LVXteu1HW6T4g",
  "key17": "41FGUYxYeMg8GrhdrKWB39djhSGP4uFck6EYpUYFkyEk62o4VugPpoQ6qg5asucLCvamNBDMYvTJAKg5gR4myHKr",
  "key18": "3NuWKh9KkqCpgUTcVWpSE9k7AwxVp683yp68UmE4xMmGiGUTng7axpVLrVN4cEvty1aAoiEEPHfsFfBUaHdQR3tE",
  "key19": "4LkBU1hawtThc1pXdmAi2A2kF9iE1zC5x5gw1x8XpXqKLxeKfxB6YCaxo2uieXXq8syvNCHfWg8wtrg9UFa7Sm7o",
  "key20": "62Svgp3ANirYyfZmFS4sHVEm6xqKqt5o71Y7LJpBPKiZ87uNnxQxm4fZbm9SLJEbecE78tRt1V7bcHdo9FkS1E1T",
  "key21": "47LDxpJGhg1Wi2ZMdvTNcfNjES745UTyQxECJM8eYaVmrDCyMcJzJtuK7v5n5yB58SwmWqpM8fiWp3yGtwwvhTiM",
  "key22": "3fJB6UVLkPC23SXc5FvDBDw8PxyjTK1ymXcvDyBQYwgsaU92vrNon6BWdJhvfnSaRChpKDKcLCTAgFeYUPHoTq8C",
  "key23": "5NBXpLVXVDS6s5aS7JLqVFVwW9iGj26Gs4kLgKWjpUPwJW86D99fbfgQuEU6YGhNQmE1dx84S9nPnvAqCiCzo8CF",
  "key24": "3BzLevSDsgC4ikqedJRCirr4S2q8hUM4W2QwUHQWwGgnAYmNoue8LstGyxa47iQ8SsmBEfYLxJpVQXr1T326puti",
  "key25": "3fo3DbQ53HpAMx1JzNfJNAPkdxX318qcJyFHqmEKV8gcm833uHJv6Tp85dMkdRPZPoTQxp4RGr31HNiQcUdVa28F",
  "key26": "2s8znR8H7syoDHgxLbL1C1PdJKjKa1jzH962AVV9tMk214BDvKKEBHnQgBWP4Me4gR3ZcfxTZ4CKLzgkDnKrNALC"
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
