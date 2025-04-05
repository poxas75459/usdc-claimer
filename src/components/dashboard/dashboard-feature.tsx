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
    "CLfBbgsn4mgdrEJBmGaemV9W8dzf3BZsXFLES2wY7L1iE2cDGqaaHAa4CqKB3kYybkKqud5juWsKRp9NHk965Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sq5oRU2uMVaFmJFqfNRvCnr8pSqhnfDRrz82DoJnYrTWV6G5kYi8y5JiSZWyGHUAxzUrWN63adgYXL5qJTQYWsP",
  "key1": "2zLPpXpYcd23Vb7G2pJifr6TJaPkPg4Cyb52C4sFHcvtsLEXjVYjE79PyWaoWhHH4ikj2utTPxSBaYFNhzHMTbV8",
  "key2": "4TW6dFGfNACpa24cG8bf7zGgeUMtfRegjmBxuZJDX4L9hVoFcYzfZN2RUhQ4SoEmn46QyAg8AadS3GhCU4u3X9L",
  "key3": "5jt1Zg23fem4MEEfbTU7vF7EWknohydKVcGYE8aeyZQ8CXuprP8dmJ1ikBTRfnsvyfJZB4fNLYXuQrYmjCrZpB4N",
  "key4": "2eGt41AEHsHFhGwvud9gYUhibVJuUiFKykK8MtdBZLVsVknkLfLZqxELRfPiKHNfrA3nn5ZPDv1p8gYasipm61ka",
  "key5": "4fbtDA34aNSkN5ZKcwJmqt9zKB3sG7w2agXVfJiM3v87bzhjqeyMtXU1MFfSoderKZAMNTHcspxKCNHvvQUWKG2o",
  "key6": "2E3sbMDj8gxrDW4G4sP8XgMA5DxpN4CvkaupM4ji7h8wfhCNHvhbkXGJjG9U3TM4Fy5DX44wn6dqcPtZTPR87Q8J",
  "key7": "AxTThBMqbiFFnCpReZpsTXaAbg6mVt1GC7m6ZBRsZuofLqKUoYBmwCR4eANjAR22rSVyjRxqb75FR643yDsPwKb",
  "key8": "DSAGMgJQL3KBseZWuTMfuphfrkb5a66Uoy2JABaAmrYYTDQfLFujraFWD4FnNoNpqQWU55D6hzvYrCRcgNZ9nMD",
  "key9": "7qJnZwwWriCZ6bnEFie9hUcTcjDhgVpUpHnJxpJQNgQJwwpbUoZQ1BySCs3oekvQRLPRcvC7rqzRKFBFSFu1kh4",
  "key10": "4Um67sokgPimPnpAoZBuQp2SkMW3rvcNR1DZjSwbDbo3zbA7CXxzuK7ArBbBhSicdSKHQeGP33xzwKUdwUZMWs1n",
  "key11": "4VfnNCTJsBjotTV71nqwoiupTEE8quDGvy48C9dbn2Tguc7r8c8XKQHcSBjUbQYxpddg4QBDfegVtmsiBquWdVuK",
  "key12": "nyy1dHqXbcxrKq57BnwHnWKXWcPPNgFB9brgCYsjnNNM8NxodYWwv2dUkznDe7zbrM2pwZXKCsiLrTNwm9opBJQ",
  "key13": "5ouryBy9ucpUdEGrHG9JvGram5sWbSSNZD9UdqBHTAux9GLQUx1sLUzRUj7q39JVeJfp5zFWhsxdadQJgbQczWsP",
  "key14": "2qmebcpx8r9foUQfCgnp5i1WPLMQSHmn4x3zzYVSje1jmS2mmnw12DpksQXJgcKLjozU6MU5GfP6iSSxEZR1SUbV",
  "key15": "KAi1hfRFmYM38dhR7gSyD42QfnWjzUiJZvVvvw5KHyE3LJ26SedawDQggYuC9Ha2sniUetF5rjVhVyFo6fr32gn",
  "key16": "3NLwEcayErUXmczgamHWDzwwnxjF78APTYdYbcbaw1rj3Rx4wi5fq9cnyNVhupsHKC6hUs6yCsqXthFkHhGBW45v",
  "key17": "52CWy3gmn9PSqFXo8o9Ws7Bm71AKbSBHVqDVp6jHSCEt1WzioYKSk4xDNDFaxeiaKPs3BVXmUoEZvD6Hk6kmtFFc",
  "key18": "4uGNFWcqz9QUARAWAWZ6CEVgqJ1PoAUkSyTFDSd6k7AT7V59QVWjaimbcwKaihMRvi9P3qVbT81aACKNhfFFhCsm",
  "key19": "5oMRFjd4YGWLT7kkTXUNFjPbJkFJBvpjwou3ouKh38waJVJ1iKPuh41MAWZMuayVYdJWExLGKarNqtj9wFb6e4Hb",
  "key20": "WbiSkVFgX38sdgkNRbJQWe46E4DVSWmiggWpkMG6KBCNqSFA4QpNnFc1H18oRzpvgSeL7hMbwpMkJ2A5TshxhZR",
  "key21": "3y4nUYL4xHY6vLdXEfqN2tihfrdb7yGKJf2N2UbtoNntekt9ERKPPoLoidoE4YLw2FZvRzxRJLRxKg9FaSQwqmMH",
  "key22": "263wJrUVMRxEWDcT7ztzFCYvfQ6bXwP9NnfvEvtrKq21isXapRjTdNZTzugH6J4zyGAUKG1WXKGyUGqhQtWgjCz4",
  "key23": "4rhqzBsk95xYiTpexA9tpb2TvtHXAR98jAW7wFXond5q2qNV8BFL76sKCnobFXW84Kzj4mqiJVUwZQBVywyZDeK6",
  "key24": "htVcp7QyAivsSZYsrH6Xuww1oLsRyTYMviVrLJ3fps7RVmpgfsaPQXYuKB785iFBTpFz8PtDgLCaAyeR1XHtDSM",
  "key25": "2Qwiin6PyE46eSACdr7gaDJa3Qi8yeBrVEBuvcjGej2cPa88vKVb3Gv7BSzPTaYwwjJvzLqxeHyrYPhfMu4RCU7L",
  "key26": "2DbbJEc7p8nAEPekEkMpxES3NXNqFeoC8WXYP4jottwMbF7qqTQksvs2PjAxUdDqiSQvEzC5EsFNBbrsR4E114as",
  "key27": "4YB4cEhLjkLTqDvq5WiHfjQmJYor7ThVcHGiGcor1QeNedVNTCKxVymXai4ZwSQfUsBnPeBZEbv3fqLzEVeevHiJ",
  "key28": "59K8UZmziMdbJs8fHVYkQ322bc2gTUsHMCt2dbnZpGYHR6h2etpSJszqR39akskUEnVZ6mYHRwFUKE1Tt4axMK9j"
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
