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
    "5WT6cK2BesTns92shHok17QkRUCyQ1PsGXx7WdCw793n4R9KfDeeH2NZoTciW2aMSPgM7UgQq7pjbQh3DU1Qh8af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLyb2dnwqogUiJTUktMk2KGYsyh8omekPTJAg8dT26mdTh1kVKo39xfBkzx7Kdo4CBazgTxrnknsX1bSB7EAtW5",
  "key1": "2Gi6DJiMqcwKLsZNRDZLfEdGEzyKooAdrEPoDPnKpCvbsN8LdJLpfYYELqoQVwA26wAJ6LKWCx1gRXMWzQzV4Ssg",
  "key2": "42PZaPoozQ6rWwe31CuDxPZGp7ZSxQpe3ntt2DipbfJxN3H6iEJYS63m37ghikRfJnnHqDa7Wpx2ePBACo3cXs27",
  "key3": "NpaDk4dXYjXjTVsgDUvBsu46QRX3oTSCWLkHwpt3tqZn4SgB6r6wn8UApPwU6xLJrnQT6XgBBqKS5zh7g8EuSZX",
  "key4": "2bWnuwjna6g2pck1DHVPqJEB2VCgp94eV8Mt1dhnaxevcTZhQS2Q9NneQ9E2N1SfsXeowmURUxi9hFHQdu2BAvn7",
  "key5": "129yd8XjV931AkfmVnHVpH6ioxSurPsuRdteqsAvWjkkBfSxWFoXdYXEwoEdRWe3Wh88N9Tp6etZwKGJJWwBHHgp",
  "key6": "KFpEb9YGnZCy9xgjSBdK4nbXpsGW4JmbAV7Aim97pvsjcpcUjxG8HjWK9h1TFaW975WUZtxpPkADCz8BePvmiQg",
  "key7": "2nzWK5n29z8Mj5gRQSugQg5bzpj98sAnSYNeVjx8TiYQhxxo5MMMCg4MUt6GYU5DafE331nFacu73juotZp9j3uu",
  "key8": "3kQG7pJ1gHjvfH9zDH4zLEsMxrkJeQRsN7ZCrzg6dB83RcrHi8WL86RrdPHcAhdG2xcwz9s4jrfx3UoEBQYPoYjt",
  "key9": "3JXqqzEJBSmKBSJCsjk5QwATGhtbULNjffC4xPmcabndJ17bUbDZjJWYmmLFNRRfZQ179BosZ5WDrcKQfAPZJt5F",
  "key10": "4H8XRU57Vc1i9xQAJ6JeBQRKMwQBvj6Ph4JTi8K6BGcgjJMtdopwU3PJtZQgpRwBfzcVLTLpPeKdFZFiZNg6d3Td",
  "key11": "3roWZG9xgvqCGyLFABFavRowx5ZsZrUcgJr8PcowoCR57Z47dVToKek9m4dC9rfScAHGdR9JSN9rQ6q9FEHyZyKH",
  "key12": "5gA1iYHJcx2JSFezMoWucGrLG5Gw5hzXUZHL1Vjf6KRv8RvvYv4Z7JUsLHY7ChVrGduD5axcuDcdXJZk8mVSPA88",
  "key13": "QAbT58UtPRAnhkhZatKUMQ1Qrut95zprjJVCZrRucdoZ6RTzzqR3KnWxqVYR9QU3FR1jLWaL9sMbkuKNgT3ChCs",
  "key14": "5dxS14Eiy5s4TW9jvmEiUnFTuRL9xH5mmxq5Gr9mG8hMUeZ7sDysVAxfJ99USHn8zSGBtMeMJRLQK2rixqMhwmue",
  "key15": "3HuZ4fjyFLtKD5CFFBcZZHZmtqCR8JE77LADe1gXDqivAhcvaq77HgW2zc6grzL5qGUQ19hMpTy2vojYEzTMPryr",
  "key16": "4KgHGYHuriswUkDjtRU64oUxct7u4pETkcrYumdbF7fvLh6aWxLEAvHAnc8hjUmDFBxe6ocSjUmR2vFXCKxFSNdW",
  "key17": "4AMGvWnodm6w8jNgpge86H5eF6aKJxPYJ9YG1bNnwzVezFJBe3hJYfo6uSFs5A3TFueAj79wmkPugN1wcimxXcZC",
  "key18": "TURa9TqzsrPq5sFnRU8GQgDwuJCPHifA4p3UGUJsm2ywjhDq3eLGqePGDfohsVUf9T1Q64ZvuZUzgHtXuM64RdW",
  "key19": "5NUQH143WxPdHj42UkBTAi3XkQkgb27FKWqu4QDmPbRsztepzKhnMZJJbvKLj1T4gj6NqAy7vex6Ko32mWWpYeCP",
  "key20": "2me7aRpfDg98yLnQpJRVMPWPE1fQSkGFSYMBFjXezp7rBWLD45AZa8DUAWDRqBMQRxhtKRe5mS25fo3jhHaCAV9P",
  "key21": "4YSSmDKUyamPgQzFf8iPPKgWPf1DHzU664EWMGidgww6uhRezHZzzKmA4Dk3rHE8aneAPSGkmjWx185fb75k92Zn",
  "key22": "38ZoxBbS3drqvB5MSUx4wjzvgBFYLvu4jzt5ZSbmh1kdygp5rdaAy1irQyPvuepPBED4oWXyaNk93QAhRyDEPG8g",
  "key23": "5NT4wTgS9zWdkajzFx3GKgdsE8fj2y9wd65JzJXKTLE3X1ZMMctqJ94KWnrz43WsjiBPtzMh8rgNArASExd8Nx9F",
  "key24": "2BYFUgXv4cz9G4eA1zksenNZXBnaLxmDLDJSqg2qKvR4gxQGtfdekkEexLQsHtNnFTQsGQTS5wn5KULYqdcHCL1d",
  "key25": "2U3U5tXCeXCUAARfXFVEh34WYnN1gFS6PDPe6f8VXzyteDQvgTgtUUrwim9sg7GmbwZ1xnKrfEZQyW2CXbagFVeb",
  "key26": "WVQ6BwjJ8sxZuZgomg27dYFzR5aJZT4YJTUqzXu2rmSXeaYax6zKPu5ubKyZzRSXtfZGp1MFTQgZbKQhaqcgrJZ",
  "key27": "4hJDVnyeZYkhRfqUx4um79bVBi6CvrpdsYE9VhAZTDi2f3cE5n726hVq9VMeoaUNyDtf5oYffEYxFP3eXLiGawS3",
  "key28": "2YmsET7o6erq5MGXtxDiWUh5pMPddzmpGWmCUhhudkVJUVWnTsSr9GKLYCVJkDNKLMNZzH1D6xTDkzrzWM4VvhzB"
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
