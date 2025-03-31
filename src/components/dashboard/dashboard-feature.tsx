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
    "5cUdGjvmGozBKvzafvymezwMH75fwmQpKgFv6WUDxt8zCg7M1hMbqJau3sxWv4em1UDXigqUsDYFbW9yHi1GuFYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrrjJWG49rcewkWCqmFT3jt4CsUuFfuoYKu5UB3c3Anbv6ZTwZ5Bf7UmhUkTxvBzvXSEY6sAe22gAW4gKui7rBF",
  "key1": "5vNrQANBAQweEEkvq4pMtHvt8U8yQtMMpR1wZpre38XafPfPQ3JruMx1pXk3WdgUsiNqAv1vfk5pHGK5Sou8zD1U",
  "key2": "5tzjZuWhmsksqccsgetQNMWPKxp1wCXrjMDcPaGVX8Ads4vdwDRn1uc3xwjJTpr6TWZ9REaipYSNYd527caihxgF",
  "key3": "hQzKRnZTDnSK5pZYXVwUi1UKnGjYBKKYF9DjRTgk9hqnPKQwKFZ9zPkzuHXuDfZzghB6rK8BhwYiV2mLsBqseyQ",
  "key4": "5avY3ZGWF5hTkzcfDEY1fqCM5jGHsxCi3NRNeMpK9oTRADa1atfyy3vLeDfAxfFPuvN4ZGU8z1FV97UEy2tJquuR",
  "key5": "2myZkhFzWfENNkqzsBu3SRA7CSqnZmW1q1Vo6bt1zBqxvYMUFzviserAEbKeFmSYfk3cD5xvunzGcStmGsUxqBAy",
  "key6": "389eDgDqDWWMimgrJTitARQqcmyA5KYC7CZZUmKfUQhFBWa3HnUeuSFpqGjb46bMV9bWwA8Y8AD5CHu6c76AGGdV",
  "key7": "Qis26YZ5pTBJ9VRPG5V6i8wWNsxKdVF9LrARhEZLBenVqW8mvE4BrawHKFYSSgUVvwmUhc3jm8og9vAK39rr8Gn",
  "key8": "3tY19Bu8oBFrhvNtNXGd1chtdoT9McjU41GntrFF9rmcqEAzT88jwmqGdQtzTHGQaUPgw61Ns9ZuFBQdsiLpajwP",
  "key9": "65nyfJ65BnzQQq34qUDwNrP8NXZATyXVjqbkCWcJMnArAvj2iFAJb7UQfFJqFwyHKvSGyAf2eQPKorUVEyjyyggC",
  "key10": "msE5tkGj2Rqezuqaz2RznuSqC4AkFK4mGwwGQyUdwmscBy6e8BvcDXgsfYHouLjBganij9CZqad5WtV5PxUki8e",
  "key11": "36Lj1nKkEKhLRKcpbLSzpfDyyY86RRFmD6mZgDDBAU1QMi6b9XCizSXYc2JGjzZ8scLGpMEpUKRXdMNydDXhyUhU",
  "key12": "5THPRbeAhAq4urD5VWGXnpHj1VvLsWsdFqdvwBhA7MedL1hFpkqv4bVQP1pRUdCej5BNYA96bi5nT2sv1CTgVkUh",
  "key13": "UajPBVg2HfA4bQPaKMvrXjNNjag8JaWMoAhRMKJwU2SKm7c5dGzhgnwNXDpuZ1xKMnMwaHigqCRYqN2JYVCZ3sr",
  "key14": "5TXnHXJzKN9JEQDSZHeZfBk9bxZhGAwGPRWWYB22fiQqv3iQ2NgjJkqMWyhF6LhSBnb41GEnJPy9EyDta3xjDwYS",
  "key15": "3HjxfFNP9ZQyPw86qqrLBj62zrSToKLn5Q5P7JCTgYNGpsNKGY4M3bKdTknJPiMbFfjyfPnrekCpBfzra9r2diFH",
  "key16": "2GMkTUFGD1XRpXdPb6RuiUAQiopzg7Xx2JVGpoye7Hk6B26TAABKeJu3QhUVFuHR93zWw8XUpQzYYrtYdGZTUdza",
  "key17": "CZy2e8ENBrvfUyD4KRnXP2F1ZqEp2y8X3Q4ukFoFCtxwfw2FroEVkiyDNqQLMyhvHr5SuShyDaVzDXFeNBRp4Y8",
  "key18": "4xeeRuhqrUNhHScjha5Rqq7F2N9AS7bKeBn3Auvu3jg5RR9Dztvq6FY1C139GEvmJKFFaDaC5HzRywU9EZVkEQL3",
  "key19": "5gc6nad5UCYEXwXboAFfkoGWMiKJgEmAbgwmhivQooySwyufkpS9p6vkkWnYfHL6CgnUYDGuR7VQdKsDLuJQabw4",
  "key20": "5dNRusnaaP9q4kedttvshuB6NoijRrPPrGyGEnKmM9C7QQtMJwxz5vaJfm958x4cBBWdm69puFTLC26FcRusEK7A",
  "key21": "2t34WA1vud7vGu5cUmRJAhQpxktrLbuaewN3rM37TsZL1ug97asaFLFqbeusCUpM9oDHGvsnLvzVjyAPAvSj5bCC",
  "key22": "4BZSV34Fbmk1cSW3c6QEr8TLqwVsNTLjgbEz5ZykPtKVviCiQ5FH1FaaPg4LssbHPPZVcoUiAVv9WuntKHakhmMm",
  "key23": "Y9rjxN9bZGJwNKypmaWJJ7L1ceTCxV8fZZradFdTtHCHnqFPgfrgockX88kg7eSAczpd9amRwWz8oe77QAV8PrC",
  "key24": "jR4KVc2kJBkAvBEF83TcM8brQ8Q3bV7hUE588Ktba22SSFzTv6ncB8gfDhBLoeUnWJsdwgn7Q9PqG866e9fVSbW",
  "key25": "3YZfMow2U29sjgfKR5DmwpJ8df2AxRuY4KhY4VuNWHLh3TCbaK2TaU7pDMUcksqr1umHe6zUhvuoiiPMvGYCVf5q"
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
