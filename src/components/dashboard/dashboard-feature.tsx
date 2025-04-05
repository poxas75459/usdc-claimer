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
    "3T593QnQ5pAQ7ZDoamcG9JCBHLK8qoaE16k1KYqNEf1qGu3dcWxrbJFrLTfeLewumL2k9tBuTZ8evRPGaASBQYTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CjvjSfyLNWAkoFXowF3ba54YAWFWeX9TVsBFrwb8CMaGMZvQPRCg1qVbns9Z3yh8BN6RD6ALzzYNncQKreop4A5",
  "key1": "4bAp61cGiWGF8q2qpqhUSGM8GrQUGTu7HV26G1qVKHf7b6nFw12TnZYtEwg9GozDaFqBgHA5z5NvyqMMNMxvfP6y",
  "key2": "3XXahVGsCEu6KwowkYJMLziBv8Uw2GwenCnZvEPHA6u87iwaNngBXxDK8ASjZeVv4TkniF3HQj1iZvqe2MjbZuna",
  "key3": "5fRC4sXuPoAtsVa2gg1CMJ2H4795thRyud4W9Y7gTmr3J3LNH5W2VBocsDrrKyfqX38myB3vU3dre5Vjt2GmiFKR",
  "key4": "2z3t2dE3K8277rWUFELCdJmLJRKQKAXpx6ktWKDpnKfUgpoSdKTe3d6nSP9d2j2qsjzsML4x1htvKDNoKv7k5R3a",
  "key5": "2xvd5G3S49pyohWKUQ1QoEahfNgeEgbxiSsMi6CLJuixYNfV7ia7NUHpXcULbmCGXLdhSDNiJDB3QvxzD49GhVuG",
  "key6": "2R66uwQ4RASGktxh3Y7sYkR1VYMb1jyV7Wy9zEKBKe3GheSSdJ3jm1Z8Bq6R8XizXkrRMjfiiHZ5KegZrxW77but",
  "key7": "3qZojNUrXZaoDWeANGFiD6uX4qqf8u6Z9waJDg2XEa9SFtuuNS5hi61akB8r4S5V8HwRtRU5zixYWg5QTikL5muS",
  "key8": "5yd1Qg1Z5o2vLrWSE94kd4ACyB8VYaj6i1upFddYxNd2GJ6uj5pT33ez1ok8kfx3bFKyPQDhSRC9vnSgcs9vhfJ4",
  "key9": "2fpD6xqcjxBCUnNDTg2i4GZDPMD8KsSyctwwVcEPjGzdX4NsjFzr5Yj6PmX7T4g6MRf9RHzAU6gimbSqEtR3RWTd",
  "key10": "59XwLf1RjAiMR8gSm8Q9sc1MjnHhCBNA2dJkcJio6MbvmH1kAGJKVYi9xxAhYjX7FmrBPBVtsFSEhwEA57aHds2w",
  "key11": "3uje1iy1zQ5zjUwspwiJoP67Di3oJrH6PaifG2yAuKvRYRE8JPSwcTq94kEX98svR6jnXtdCJgJJphHfpctU5zzJ",
  "key12": "QzBuVyYfyEPU7F4TbLG9C6pQouoW2TRCz11R5izoNDnmJ2VkvUP4qyq4t73DXKVYQQBCRqWLLuPf7cZUoXMXdJN",
  "key13": "26ttzTPFj1vVh5xDY293qzAaLFpAciKnYFJ6qUN4Yhfu6D9aKQJQ2E5JGJbn3s7CWnXje2HMYRKiEaN2shqv1waB",
  "key14": "64EL7uJJs1Vv3wQstib6ynF78nKYDgryXGZ31SGKWVpDrPwukfX1QzAwe7Ru38dZuPEmxXpw3nL1SeiM9uKyoUAb",
  "key15": "5wRBrsU3uAjhtnL4XTmM8t9dWJwaLL2YjosS3ZSAzFtnPhca8hw3GniKKmixumXYu8V4qU55Ar7vHdE5rBFgZ99F",
  "key16": "5ECKPXswXPBMZcubXXndVUmKQJTdMv3oi6Hyx3TXCzj1dXUrXp9B9ANWPX1ZShrvbkWb4Za3zuzskNHJBGsYnpqo",
  "key17": "2iXsZDfNb1HF9QGSkteYxFHqaysnETfFSYHLXQNY1Gc8PbDFjMvokzvfidzWuZra4E3SREUenjdBE1QWRpFsuP3K",
  "key18": "3kvr9c6Qt8vrhGdtHr9cbVJjamCARbCq35PdkjYfqHzTJPXfVbJU1JwzXEuwEHkcTwpQMfnEPQVJoUt3ThSi3zz3",
  "key19": "3wYajndn4NEdaoZXZ8vPrHWpPCuri2drB1VwmQDw7guqrNUGkk8LyMMmHBEFFAD2BBmpS1udYXdYLR1bBqFTqPk5",
  "key20": "57CLKARaMm538sj5hy28UyG1RfWSfUKKxZTxqCLPrQv69Ts5zZorUT67NbaKx8dX6H8W5UhJMB3ZpvzBTEtehz13",
  "key21": "4EdGawTrqSWvMBWscy6REHFPcWoS1GovwEoFQy2X3uyHKtnUAY7RR8JaKe4mXb1CHqDYRNAKseozJ3LzKAejNnoz",
  "key22": "3i4Pn72HQLh6sJb1R9ep47UCKECVZZcjkcHRU5mvCFyFsWAvyuZnqfwaLJxDHuUQxH445DCokzhULRZCbVGuZWLG",
  "key23": "3c2P41ZETTe9648iQthZEW3cVK4bbtGyjZSJWKVkLPzJZMYndt4gget4drTbht24z6a7MEBRD1XWTfrierKBMzYN",
  "key24": "y8L2QQbLx2E91HKN3K2pN1DbaDZy7DmM7mTTUY2b33RfSj5w6fx7Cb2fqRcURDFzRaELk28AZtjtTqXAAMzwfUB",
  "key25": "4N7SeW4HBEXgrbRtkPpKirSwtoGNyveJogr56DtVwW29NKnLeprGjZvSDBfen6wMxa6toZALD4SnMUfhqABN5tmP"
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
