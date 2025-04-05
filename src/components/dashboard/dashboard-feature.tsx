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
    "4ADEGHL82JFT9DmGRxgphnnxKu4Eb2K9EqdyJRtA74nPvmrg9h6SwyeBMwefgmFn7EZcTk7zMy9VKTWtbuuWGM1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkxtR7kDLmKNPWaJq3F9E3Nrr2gCVDsEA3u37S2EadVXf1jZGHaa9FUqPm7E4VFs25ptf9Bco4SZSjQwCugTKwa",
  "key1": "452UQV6XiQrUyVvgxdGuhouYTNrTPTZ5CAT4JavMMME3C7jRJuBUUR9gFh1tFp3WnPZxeBc6P111CyttXqk5Tcys",
  "key2": "4vCxGum2WiGSUvzCa11GUAnoADK1MSH8sSnEt9nUoGFwgnhH1a2gR86MQtQavjwdocAaKgA4E5XwP9jCFQb2d286",
  "key3": "2rBUoC6iWjDGgwDL7z9ADNxL18d2iybj5RjuWGwuoWv7CQDWrqqKzKwBauLuzx7o7s12Jn3DJ4gqsr9tSFXX35tR",
  "key4": "g7yB6jWq8AubPfMvqQjTjzgLRjgYKr4By6TPRkEg23C6KENpN2A42FShWT3RxbQiQenbWqUzwP1J8VXVMMfTJqg",
  "key5": "3oVzykzupSoaEU2pVBUuK7hv5UJU7Pjj1BoY95SKQSpKzYCaFENNt3bFQq8bS2e8eA8MZJASdXZPJpPB42n7Czwv",
  "key6": "3tZfHNBW7JatVHQqqoCW6VyddVfcR6XaCXAZSEz1B9kqAmnuAXkSbrHksgqkSNdVZ4kXYuj9qg5ean3bWesoGenE",
  "key7": "3aHb8BUAu8no76mzqYuWkN6aTLH5GyRtbGYzWnbKd1ifrjb8N5itu4s2hc6qgYNxgfRLczZEZcoyvF2dtD5vz2E4",
  "key8": "4518FfxdXmKgqjhV3GgU5QyvSBMfCoTKYvADMPC9RyVKZBvcfSuDiKmS9L65BM1AzmbZogMVj4apagqw2iNMheEa",
  "key9": "33LfSeNGHnocpxip6mKUYLpQg8Jq9E7kMzKZGim9BnkSuKbrA1N4b1YJFHZo8YXJzJk9nMFYroniya1aj8f6HJbS",
  "key10": "5UbbSxCdDiWdAqc85fgbYKVLp48dMQD6AMgfjwAHyrHwgpVnQga5yAm2T1RnNNsHa2yTJcRdhpdtgMduZo3HbgZx",
  "key11": "4KSqZS1tkWHc3BCHkCuCq5sdJASp1NdxAFfdHUiokeQNKWqrnNZKqhgsTCf44eKEoY79CxRnqJzkqBH85wUfQyJr",
  "key12": "3C8k1U5BG1JC5Tmuo2mMyKF6rUbX26W3Tsn3ix65bFJfq3UNcTwNru2X7DiTa2fTEQn61dBnzYUuA9cmi2U1xoBp",
  "key13": "3PzvNnkn1g2NkvgQR1bFo1ZfkCnENLkva4iQpy6dpYYkTgiczWR5PAvC2LH9XUrF1YXdaeSzRZy46oBjWCsNfnRY",
  "key14": "hPkmR5CGnq2NMGDBmnfwqZR56jjoyd556TmDnwEZ1uGYqMcha8cnsPfTgYjFDHDWxF4rq7dFTX5zqD2ehpFiqcE",
  "key15": "2fpZN9Bh6yKgMLA3kUamnHbDnCAEzhQi6WEQfAWAtjbavXBC59JDaC1yUou7GKaCYRmz7RRekRud3XCEBPSah53p",
  "key16": "8rMYKk9AMnjF9AhzBySyWmGwvz9EAAeuJp6WZuy3m1eBqMk5wyXML6akBWV8DUv9z488EfFJj3TPqLieZzaNqcY",
  "key17": "cxqEdnrT5mPULWFiU4V1PJDa3LouQ7CzXGRADWbLiXQx1z8meMgYafJXsokyJWsVWfuXC99FjorjyemheAjiGwB",
  "key18": "5pCbXiVUoFhFdKnu3JWYa98MRgb5G8Gfk97qbt3cRbK6LYgZfXcPV7SEo8cdxbNUTkABt3n3qYZ3rs6URDnJAFFm",
  "key19": "4dhWgtBohXMyzXJwbrwzWfHfjUMVKLdgF9nJWTYTbnW8pNYKg1R7E6RLVHp6G2qQmbiMeDHrsg62jfMbuAvNhY9U",
  "key20": "4TtTXgnEybUaWC9AEta7GoZcpYsxduyp5yi4qB69MN8txTmKTauKRv8LUsmsWQQwXHGteUEmTBx3TqGVufcjDPvM",
  "key21": "5agDCyx1nmzwc61jnzDrAWf7TkVPfUJvxQHJamHe83VGL1fmJdGFQBvVzEq3PHvNoiuWA57nYzjP2yTvzzmMBMam",
  "key22": "5UDDhqGodrX7AdK3pmE65dhuxTZSqMwZi3gJHhTbhkRanDidRaBwAzhz1ngDzRuxLN539hrMMskgzqJ1ghTa81dB",
  "key23": "Ki3RYTBH2ai3QGB9BozbAfMTmM2S6URSom87aCEAZvRhpXKQUqZga5zFTzpBbxacqddgo6jCoqVUkcq1beWSsSr",
  "key24": "CKRe2ioispLRJxz1KyttK6LA4ZV5p4PENw237jM6eAmyeK2jeUnmHhKMMc1T3m1T3NVczeT5BqmksaCYwa9sPhm",
  "key25": "3iTXz9D64bFsspq17vtJbMwvrHEdqjm9V6RToSuu3i77PUM6Dps3EKBAiFDyUQp6xrqkonaogExaCjPpKqX1177g"
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
