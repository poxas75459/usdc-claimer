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
    "5u3qqCsUgxiRYdSyofkmds7V5zaKcqamMP1zN3ipjxgxUz3fZimeJ3jitxtTtmtvg8khBYweraZhTzKXv9twYSWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zM6Pe7AQjToVfFb4DiwU2Vb4fa5xPSw8ca2Hbv3ZAB3tRKkAkKqLySo3mPcMzyiy7SXpANjmoaZo7m5aG9Dhrn6",
  "key1": "4Banitpr3EwBYQS9VMJZibfnsse2wbZyJMRPdZeuj6ZJjoWgZXrM1E7JQP6tLFzY7FsxmxzBxhWV8sQLQphFuD1h",
  "key2": "5Lm9Z8QdsA5PsiBBN9AmuuciiTYteG4YHZGZNRmr6nFZyuALa3YyNGfzBqCyAye4y74Cx1YuCXuEot28So127mej",
  "key3": "2eqSnyNU7NE2eXHE5of22mCoChJAJHjMtugUh8jfVKcybGP3FWCsLtusQuQtCB2p6GUBCuoSH4AqWZUoGhnPmko7",
  "key4": "5Zv277H26EC9ri87hdapP9M5ZgLeq2NkBXEFzRx9qhmGJSKEF4Hyn6yuQNBfBoAuD9YJjYBVSAJK8mvLbbkqSjmr",
  "key5": "hmYtez8u1VNVEfteF2za5F481EjC4vGBcujzcDNGkfMRajZ4989Caurv5mYNy97FwTTys9s2ZcN8sdJPMcdf7Sr",
  "key6": "2R1m9eeircoiyUGsFBRwGjTUUGcy5BsZ1geTPb18J4rQHm2wPGagmUZqV6oRiZ8uGCRAf22cW38jUKKkYpty8sas",
  "key7": "5htChVf9AbdFvrAL6enJCFpWhQCFnF9nQo8qnCfKtgnSEYAQD6JEzVQE9YJSFchEdtfkAJ2DZC9cM6ERkh8ttrHY",
  "key8": "3FUAFRD4jTmMbT69cnR9ofA6meHoK96Cex93GThw71PcAPbmp4pfoD3hf2qWH9XNCa1eRbQ7o9jVVsJdLtwCtvnw",
  "key9": "3JdxzR2cNeKdh6sisUrQymNPx4rqUxe4X6WPaeHUWGJ7o9ZwbQf6mZDV88J2fNcfyxd4ipyQpK46MWNWgS2CWqh5",
  "key10": "4Nq4GK9LPgNZC4aKAjTDJyfHDfVjEjpWYa9KY7phJmNFT2cCN5fuqSG3tbXz2RZhanHLUNEHqfGFbsUrCy5Aecym",
  "key11": "2tgiF8YwSCaQMLV2tZ1hhDYmKgcaV7ka7dwWTVh3wheyEm1T8dbvVj79CahPhzGzMzVefN9tTpsLoCs7dLT9KSrH",
  "key12": "4q9mX51hEESfYBnSnxmNUtXdxaqASWYCLiVksqq97QB1nBkNtwTXC5VYivpnQ6vFqtGtV3KtsTM1FRAWmif1qFYA",
  "key13": "4GM6Vv8BFMfKEshB1KR4cCfPdMJ6mvKFvLixHxTZWVYBpcPGdhNzvUxBRJJxC8j2G2TYB5m739P8pumJ2NcLv2kH",
  "key14": "rNGny7GQbggGLz82JyKWWYC9ZXQJh3Li45RkawYf5wueP8MzKy1LZXudQMw8HRTMPXZ5cNBP5AvBPPtjRkyCYSi",
  "key15": "1oJ1WLoU8bkby7uvj2TuSq3aQtvGH1TiuRi5cZ7yQwgBG4CRBhrjeNcpsqMTKboB4ujcFsu93qpZJBnAfeF11tS",
  "key16": "4yKQdZ1cYhH41tsAGC9jCSm47qV5UJA8WkkWD93oBfwPeTEFFaCzutrLUKCLHmaTRKrv2BkMhH8xHgaSkXWoeNch",
  "key17": "561JUSLaGRrVR753RL7vP3CGq7YMPuCfJo9So4FXK4hRedUwfL3hnSsMGJoMZ2dth7AGJJ9CffNHAhsNqz5tVC9",
  "key18": "KPyxqDKzT7aVEqQqYQ42ViyukgTbc9LFvdAyJyJXUouQMonaA1oxeDp4BwmyuDgjx4aQc5xMwAF8NSDBQ386UMD",
  "key19": "5mk3eyB3dkG1GBb45LwGZ6Y7KXM8vuH5URBCQUuVNnQhhdaMJ5RK1VWwksabLiFdfCxjzpC2RojEpYgiLDuxED9G",
  "key20": "5sbV3qFQksAiCXWoq8JVg8vcMsvHU2UmZ9axe3HGvPbwCu85SVpTvxX3gBHiL5YXZk49WWw4kNrckKRpbG4b6aW9",
  "key21": "3bcJdC9WnvHyN3KYUwyz4Z5gSSuvZo3naxAydu7JnqJg961oVKP6NLnEjh4tVHHycAmMdYzt8ZiAnyEwd2KmdWEA",
  "key22": "5dKn9k2sGp8rN4ZBPkPWXDKD4iV1XeiAtaCgKX2xpfuqRUrYufEQiD9i5KKw83HbEoWjQkZASqkN787BYCcyGgfM",
  "key23": "3opEtz7Do4tzhntRtQS8vcxdTpV4emfqjJqQ5UixXjt5sRd1aExXBrau4XgKAHhAjPohfwWi6qUWKXtDgx7hXgYz",
  "key24": "4D81HCQ3rEDQvksY7yyw9fhB7PQP6Njehq1Jmbnf1Q5vEvKdtFQiurkyJngGaiwh3j6b3nwPLNg9H3iaib6zLWHJ",
  "key25": "5zEUcghPjTdx27RBECECvadfSKiWCJQAfqDUkhJbRVBqmLxhhmmEeEhjmXSr3Yog2gnhiCGu3vTdnKhFKoaAczbf",
  "key26": "5xqHJEya3hGhgqXb5ohZpBtuYtQ3FhHgBEQWCqjU14BpmYxLgkB6wQVvsmg4FUUf4Aed7VVGeJwyvKV58RW2ZtcD",
  "key27": "2ZKL2GbBJDupDK294zqkcqZ3ruRHJEvdnYtXRSmQiffrRGjxrHHsFTgQFpKAajiryiZ4rWTMtSviTrS5Q4odMJ18",
  "key28": "4H7h2RYoGqKmmRLh9j2QH3VA5WpyKjhpoFHv46u24hSzC8C2N5e8oybFetHHf82p5sHJW9jM8hRg8Gh7XoaQkA5r"
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
