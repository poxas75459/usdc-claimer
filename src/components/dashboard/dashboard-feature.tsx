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
    "594RaQUxzVVXrB6y9JthivzwJxTZrQJpenddxrqZpD7VAGrfiyc5PPsTPMX6nBihfomVSSa2n59F2yA9yp77HF7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2364xVh69aT1abckPRuS7XnXixUkCmJbaNovrYXegrb9L6kt9HU4CGxrL7qgDVWdP1rBve99ASxLdccCu7B31pd6",
  "key1": "5rJ3k4euG6MjyAiLJtgYXdArRssaLH9wqUzHNRq9GUktDYEMYe1Rymz3wXC2s1QDrLzp4xRA8z7wp9FZ4DxHw6Bi",
  "key2": "4aQ7fBxt4sNHa6YcXFpdiKTX9xLy9DBHCazuu5XYXYmonHGCSMQSd1VYMxfJMnbkQtad3aBADS1CZHaVkPbqtXic",
  "key3": "3RGgFWf9yaL9xtm5XPpnQ2RN5Yk8CuNHS25TCTNfCPs4LEq8iga8pgpwh4rEvwcvtTwiercbwMd4YiWUL4noky5V",
  "key4": "3tdnPLioc2REmq76PFa75tPw9gg76mxpJyoHU45AVJTGTn7uzWfRHTsdWHJbr4QfFyaTunZqaPe2JqXYD9pEg578",
  "key5": "5vcPv677r3ZissCm1NHwCzTcQhS1aP7EQrxwFJkUjL5p1o1ZABACn7KjC8yJJSiEMDZXskhA51C8NVE7CSL8d1re",
  "key6": "26jM2P8CrGC3diApa5nPeYKNN1GxqTvgjd2WE9rHbuiXaQ6FNX1hVuHfp6Zy4qqfN8JN4vSD1F9MH6yAGw83bwNo",
  "key7": "iTtSUPCBUekdkDjBo3VgZ7QwsUDYjSDydPA9CzjE3R1RtXmRQYFmhhYJvfGjg6Ru2vqyewuQnM4kZqrQytGS8gd",
  "key8": "4ixRBEbiUPPJEHviD4hCg79zawUMbzYUAXZgSNg79DuqpMu4UPUQ9J1isJ8KNrJu15JWBQzxUAiaemwN4zUDbzdm",
  "key9": "35v7tHGNtzxywx7NgjkRT6tdPuds1pfQMsis9C7ErdyW4p1AQW2csu9fhzR4nktVdNZTjX86QZiqxmVz3TRJuLdE",
  "key10": "2qiFQRDnd9ovcjzxEon2zK67ugt9fG16JSnhuoix81Hu2UWfwbbJPnFouydq2e2BWhWCqQdfAhh8oasZBRW4XW8S",
  "key11": "3f8BMsVvkEjiKYe3H7DnB22rGcP3wHXP7zmA9VQuJp7EGr2eCTMbgv1zRR6vVAs3NHke3vKq4siryTz4FoiZhwtn",
  "key12": "23EHawGW8bArFVG8YEL8A77oCFpFxuQFMPhmT6xZyx2onpYgbKot2Dqgm1VsvZwqkGtphJdKStcFAFar1fGkdWCr",
  "key13": "43qyawLMoj4u5dAXJQphpG7GbW6C4r7ZgeNRiTLGqLzu7kuAzLGWxHyJZAgUQNCYiHL88gZBjNtyuvZdeQKeTHaU",
  "key14": "3NPFvmiQRYvEmAMa8C1YG3HrCvMowtCJFLiVGCZWCGryLDpKQVzKF34bEKzMW5Uwd5WtwJ5QqDF5ryy5HzKK9Ar6",
  "key15": "63eTiCbYKDKVpSHyG6pD4LdGAxhVW8pWGAdgQg1xaWea1VzL1xGBP95i1codsn3nJDpAuX6o5LaVV23HeP1Nquv",
  "key16": "rUSsah2wmXY95ED95CmQkNmQ1K4bY4Uc6HoLg9L2h2Cv1cUoRbCFxzWBGHzgqjQhP6DBU9oRJMfhAjbxGsD519u",
  "key17": "5pj11cugZeVvuhjXfo1uBYXNC6qR5jnbVxXoSXvgnCPmpAC7kNv97BeUJFb18eme1vJ39RbDgUmCL9bbKPDdAhEX",
  "key18": "xR8EtuhfEjPEo1K3p5upEGZCUkM3ofEHsmTS7qEheBi6A6Ncc3Zpe5Xb5WNp8U6dZUR3yniQPcudZJH5q9CgoAN",
  "key19": "3JPmQhPKwk4PNBiqLMfahiyVdD5xUkb98LiQAkVfQAJeYmGBQwpioxCzSRinbP3ihxgHUFhd4fQQkXE7CXibQKnv",
  "key20": "678Yy8bt58uNa3yXnrpSykebBQYV34AKNGo4xTrTgGaEgTBsgLJbJdGt1pvojX6QCWeuf39E4qHq1t9XMzz65aNA",
  "key21": "5m7Ha8RcyBJ7qgFFRU7zH7UMhvxY25cPRXPb5RwD9TzBkcjT4ayZ8kAroeTSRbAv3sbdd8RFxMk6ANk1DY3t4kh9",
  "key22": "4QadYDPx2ZPecPPfSwfEdW69AWXGMkvBdUigwGyXkpuFC8LEQkvJRRHWqzZrMFBgUy36wiDfg6N2GuN4PgRqMTVG",
  "key23": "5cKGt7FK7vDqaLwAxSLBmsv6eXxts2XpUu62ikTEn6n2zSPtvkKsykK6b8eLnrnFEWBpM8D2o5e7LEQWCDYerLHU",
  "key24": "MRZnNhvuYpfqTQTfK6F29Xe9kRMT9Ltr8ju43Q63jDUsoXoj4zQfSBqaJLEyZGFX5Lv54CfAobrLqFti39GUa5x",
  "key25": "51nWVryKvM1aos8MmDk1RfsK8K6L5zW62KjUGfd7f9GHjpfAKytmvd4bzKVHzsz9NtE63j8u56Ui4kmM5vxzLn1m"
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
