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
    "28WGB5eRk9BXeb3HUt8kmco75xTw3rQMyn3vn7YQ6sCiYW1ENxVTrXCT6Dw2t1LvnbUtjcH9TJKqJDM7HwxmpUpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FbRX1wrXaU7xj1SDH9BLDj2msdioHN22y82yrMjG5rMRmdbFfUWQveSoHxP8sgfAErQuJKsgALLHHVSZm1bYPkK",
  "key1": "467Av6gU83pCWTs694yXKKy5hU1ZN2CWhCqjeJpi3j7orbG1aunNx82b4JXcUcF5o9YLuv9BpzjuvFBUNHPZPDr",
  "key2": "5hJAjGfxfcjNzdpvfJZc1Z3t61JvHR7mV8sxbRrxVupq8v4zwW3kdA3kCHSTwe6ssSdvLE2jfvs4w8EepYBxc548",
  "key3": "2iapN6V4rmnbXZ1TQLR2mWUHrst3Pr9jJaap541QunJfFUqnPNKAgEg8qUVsK7Mi9a53fa6uG1vRi1SGvfnXtV8K",
  "key4": "39o8anKm5AGuhWsjNDYkE8wrNrwCueUrTQBfEk2MX4qextvjTtZk5ZkEnKwkBkiPQAFFZk9At4T2r6hWAHKmJtrJ",
  "key5": "59X5kUisBJAKRrkYp7okjJzHTus3bgbqbpUxoaV8CcPbWChZUWJa8Uy1dATxZHwLCFjuKqA9zQWbgzQh2UAra5k1",
  "key6": "5vQkNfpoPFwvjGacLaQASJRDZBUdncMMs5aCoy1hamsexsu4nYZse1yqmE4DWdaHWLaGuLjquKBCfME65umxR8VL",
  "key7": "4DJfcwaF4koru46No2DdYEe7wqZRWQuMCAqNjBZ9nF9xmX1ziaAYcuzYb7BJYfD6DyKmJMG8EqYqKDEfL1hfaY7q",
  "key8": "3YdLsffa96WzG2RhKB27LdAsWMckuk46du2QGKz3BoyLSTXsJPTAWHfhWVsCXW4NcjH5xxd2Md9VhJQS4UZ27SFT",
  "key9": "XHVhwwTbdFWUz2v3i2mrB6PAPeaZAfQDzGaTKkza2ejqTQe8XHZSXzqkGcHzi1n5BUEGrLwCTAfqdj8i6MzfbSX",
  "key10": "59Q6PaZZXEQVEQT9pno4tdCDGGUtuqzmgDQDis8cF6kWBFEypmBPRQARZaNNwDWoTU9LSwajY5TBHKFDC6i2co74",
  "key11": "ugUn5UndJsPh87FavjS8XsgbBWk7u45PsH5G9FnuzGn21TeFrBNJKss8UpS1YXrUYoY742UAXVPJNMCiA3A4VKb",
  "key12": "4imrvfcShe6MFUu41PByw5toZYP7RbBJHGFp2EQcbnyzzm88SAi8UH41TooYqD7ePcJDk6L9aWveJbadUjRypoqc",
  "key13": "3stTKqB4Z8kLDeNFQ24X5vQavMAStjzcRKSYZWiN2c4hPXGmeoiVbyXhcutcbDY7P2qbn6YfRcXBEQ8zfamKTXMo",
  "key14": "2qrDJGbxXdt5NL1BUJvH3fQNmu8EW5vyf1RqGQuFqY3B1HuDXBmCDpG8HBszQPPjAmWyHdnRjxdnezTPsBhBxJXT",
  "key15": "5R9RpXyck8JyxdLWFDRVEN9LgfpCppD7X3V2E1JVZZBiShsubG34quK8ua4nA4EvGGKJQNYT7cVcy3ev1WowxbQa",
  "key16": "5D1LGpXoztadK9UioK22mnGJ1Xk2pAPyUABkRx3fVVZBkyNuivwe8h5QRLRhJeDP6HwtmtR2rqMJrq8AZtERWToc",
  "key17": "678qtwh3Y3WMkqG7Zs7DYmUTmXJWpmCAv2vvo46RvLMKqPYXQLj4bgxJjjuv4ZF5pBMHYxUzJixWWp2QvNiPQV4Q",
  "key18": "3j8hxmrbDLRKV2E6r2ZeguvSwqDd3cYtttRCWo6evy7q1VCDNVzxgJeEqnvRG3Z2h6hpRkU3TEwLGt22jcvGqVH5",
  "key19": "26jg1QETnCNnksHkeyEq6EEpyTrq1JEf4x68bHZQFZzcAPF3vT3RLU8WEr1RCz1D69SETCeeMwL2fmsNxJLWiZWD",
  "key20": "Sw3JCh7J2ZuM1eHee2q6gdqAVVWBX6rTuF7y1CPbzJPuLvfpvZQzDGNKSyY7o6Y6LthYDKSJPF6AKdeKPWn6V93",
  "key21": "5Yvsxe94W84KkbHV93pzAZXuhrXBmVry98MiqAjT8JXVGmzD1Wv35MtTkGEy3VfmUS5Edc6fhY4KdREGQoJCDRMu",
  "key22": "aDz9zixJkhLbQ61xxbucJYJTDpBvL16bW5iTzpjFNJf1cZeromiUG7VAE56PCv5NfTvuFqQGq3gfcGWAe7z296f",
  "key23": "2B3PzW6VqD8GY1xHewSzKYoaVhcahY1MvcWVzaT5cKS2MuPS4HXY4JGKcpPBxGs4MZFhzdtuw7S782GwyJ6Qy8GN",
  "key24": "4NcS5fhDzwjAQupdLDejj9DEcyd1xNKd4vp529goQsAVrZpTcnYBUKbBybbDG5ibs7QKHwhcVvr4rDL9WSnjW61D",
  "key25": "4dPoqKWX6WH4FQgtKshmR2xAnNsK6MsrKHpw5NVFncpqLhBXA8EsEAzFqGCDCSKvFyX1MgtiDei1Br5c3DuzPPtD",
  "key26": "3L76VT2JprF9m8aN9rdZCJcx6Pkqxd2gBU6urgXCMJZ6PXLwefKZ9p73ZhJwFnTFfSd8CNPkU8TNrA4GTWaGVh13",
  "key27": "3RZipLebLdipesFYp6GUhKHBbmVKjkYewH6bXuxSiCyBmkT4txmQyWnpEaA2D6ETU7WX9qLiBqJtdC73HgSvZwhi"
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
