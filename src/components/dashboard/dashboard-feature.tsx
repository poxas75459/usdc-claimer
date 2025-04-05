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
    "2PmdN2Nnjjndrwg1vDoxsbBEFcPsiGUZm64pxZSZq4aPLoZpKKt3K1Kq9puxVfGUU6k198Popw4Mc7DpYN7xy8xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WcDtTRAXNy9yBDTZjcBpqYdavVfq5ZbT8iFYmn8rtzKb6hNSXiG9QNXCnYk6GfmuBAeRcdKdS6enqoMtj46KjK5",
  "key1": "2FmakB3FZyTyWTjHC8wW3zEBkAoy2ajYUoyiD8auWFEDvmh3gefw6KfJKiohj8eb45ehiUS5FdYYghSkXgBkbQir",
  "key2": "rdSiA4bKvjsmNe78NvfWGH9f2fvHzvzHnsVCnMA5Dbynx4jVgwmp2hVEtw5nsZB5fsV9HTja524nJVj3EcHZUtq",
  "key3": "2aUuyE69tp1JERNdhd9HxoVyzCZHiKbpE6yo9V1neXE1y9vEhvuDEAJBvxu6Yh6K3FzDQGfQPpKw12RbLEKfcFxe",
  "key4": "4U4uyJuy5vGa6ZQ3hVJ51mhqRAWhckXG2eQXbzv9WQ6J8JhDTthda79iCVmEhEPDhRU88hE1XvpqXrKuxCwCYWMb",
  "key5": "LbKbkP4tAF6Fj8q236FkxmaTnW1je8nuPzCKCVGdbuuWHGq9fwpMCuk9KiGWywgHBewxwPw7A4etSiaJbRoT1Kt",
  "key6": "3Dot26vgmRJvN158wLGk4Z1byGnfvPvJYmonX3zn8v3pV9RdKteBgBXChwPrFoHe2p9aHpy2us6jKfA4Bf8JT2XX",
  "key7": "4ADnW6Q9hecuVaVpq6CQ3tAziCRmxbinBL2HVPnGujUqBxbfwkVMHmMn2E6uNCik5y6qexJqthVJkHCRnjDdDcXy",
  "key8": "ZNemnNaXSmje9iY8WzySe7iniyqaGr77Yh6V1zSEsCUXLjNzgmTsVc3ijdzk1T8mzq5Mi1my5dhj46aCQjJ5oen",
  "key9": "2GezdwTf6bVXQBTU3R58iT8eJrQuwc4eEPK8v9S6YZ8oWz3MkjpYiRmaSusshJBLPNu71JxEECJEX9wZBhVVA7ap",
  "key10": "3guDJT7J48JzDzGwd4nw6bstrELKFZhJCFeUm9Vuw6iDuQ5fwo8Dbtkb8cb6N71J8N5LX6Z2Y5yxJJYyYRQ78J8S",
  "key11": "2WjwvJ8m89ZjSMD64aHvbHPH2aJfXXQP1mubffYkEzYLZFdhnL7ubbXZPs97DDPj2ciGrxcLSrFVQVxK1Y5pfTKF",
  "key12": "65xWvALHQ8FSWmSH989SBLi1jAyt3KA4AQmCcaePeay7V7MLKYaVXrGmxAaDCo9HmoFqh7wD8uSMDinv3PhmZBDN",
  "key13": "3AMNi4ZEY9sZHeVvYLPswzBg9YisdKe1mYzoJpj2UK7w8TWRvuP2KXx8RodKHiNyfUeGSSEy4TV2vtGfaTLJ2eFY",
  "key14": "5YnY7oTLy284HcrF9SVKGM8tQe8Vu7zBJDbK3y2sv9sU1kepn6abf4wFy8TnR6LEQTy5W54TgKAJVUuW5GqRF861",
  "key15": "4nJJNgiSt9tCAhNvvGDDHqqWPYK41G9qdoRLM3F3NSmGxwMLQbM4k1JkvZQwWUGToY72UYV3KzRiDG5JXB3pmyuq",
  "key16": "53V91pSkjFDfaXAoYZBPXSkYhzVh3vg8ED79SCyDsQbv1BFdk6iKAc5yrNFsb9WyqrTFwnwvbJ4VjPDZZTreUSB4",
  "key17": "35hLeReaELh3V931mHNYabqxgnMWw3JQVP7zaWqZZH4uuykGWyWFs6SQ23gJ9BTkJTgXChYTiT3gWKhUVp5PD5zj",
  "key18": "v7KvXmUKjg5v6YR3GF95uwtdDB1i1GKKGtqjcQe8p9VwLW29p9uLUGMYAzUnycnvavnULnXhDvCoM6pjsSLeYzr",
  "key19": "58HnfQDxCLgYmuuafW5E6XXihqHbmtNGwm6CPTi1LzZPrY8ArS2PehByhb5AUVp9vhPPugRvEj7LWseFaL97FeDP",
  "key20": "3h7KNyi4ncW25HNNeTj5HthxJF4e5YW3a1cCqpdCBkYSqZ31iw9jNprPsBwRYcUxttwwPBQxeW9sNx62tkZEwdqK",
  "key21": "4eRfhj5MFPaTqwDyNxGvSsTa8jekLJymwgCa6Ci1dk6jM9Lsh3j36z1Xy9VMyQ7R8d4Tu4ho6DaiBCpL3HXgeKdD",
  "key22": "3zcoyr7uLXWVG7YhiCLAN7oanBbtVkXKsLdzjtuMepgFqqiagjdcXxUcFLvjmZjnJ8H1eGgyUwXPiLo2VqdAWnXK",
  "key23": "3KMpxJ6WCaNqEGwqKvCsZjnfQRApHCdBn3ZFb6otAsCKgEWZ9uej8Kao1ddRkmH6nknU1RX2DBWgoPY44cidCt9K",
  "key24": "2T6hRQTp7CZJ38RNwbG9CzKavY41ugyU1bztySpWCoctAm1LfyNhtiRQVMohbr9iGdJfsKo1gJ83UcuMyxAjkdt9",
  "key25": "2iJPE6jRiAJok8mWFZYnv3sUmibbbCGwsJrsyY9PnbuSZEDSSCBQYFssAouF5iymrXhXKFXbqGhVfAVrhkKAbZvA",
  "key26": "2XWBern14BERzs2KL5LTwsNy4A5yjfPPQcGgbvBAPccf9omj6T8HR9DQvgLGYUWJ4P85DLw8HX3YwfR29o4Agat9",
  "key27": "5FtFnhwbE8QyBwQtkiUanjDaNbB216QMVTx1qygXGpLpfHcq1TTXRstrRsA3jWH9VMiWiEXQwje7MqUAAkuGp6em"
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
