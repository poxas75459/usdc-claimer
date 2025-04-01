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
    "29t8S61LhjWkSQXwvrxgcDdQ6pXbCbcuYkYGfCkHv6aNGdbU2aKE4sciuvVyZuvLkyYTbsijzvLFFywRL6qsMhuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiN8CpoLeQdBPf6q72dnrxbSRXSWEkTB4g5dM65x5oPtdt9Y6mJtT1yd5Ai3awUeDUgVs9aQWF96nRPGoL4RQAt",
  "key1": "3jzkyeCe4v1sdpE5aARep328Bmoiw3Gutg4qren3vJP1U6mXT6GajXmMkTy1XUMJJdLdTNhM9KcwQe96v6iAor3M",
  "key2": "5R21KpnMdwcUejDrDM3t19KJBm6qaT7trVfC7yEciScfBXMbr5t1fdVRjQe7ZTZZCH7S8EQPqVULxRZvUXbvKtXs",
  "key3": "AyqgbazYGcgdtMtycbP43q7TTELKRrbVJJJvzXHRDDGRg5H5dUFhKtNqzep8RZYDkQ5sdWHtHnzw1mQaP7SEriX",
  "key4": "4AVjus4T3U3uJwEy7iCWNdZNch6gf8kiK7ghnWpcSHyJUG3m9Ge9wspNoXQctc4cWWc1qQZFn186VjxigpamWEC5",
  "key5": "2AZoMm7hmEXL2eSMS8bcqAcRuhGdpiD5zrrdqBXDx3MEmFSLVWaYr4XwboThsWqYvHQ76sZmWNWQuKRHCbuAhp5j",
  "key6": "4KA5PwFVk4sJ1ZNHynFAGR8axMSLYvmXDLSyzywjU11SCoQMREvL7jQfL4i358yATU1hYFfHc5EQ76aTGDtcaJ9e",
  "key7": "5McWDiY62KDwkaJEh3B8X6UZTb5y3x81zCEJKc2XTHyrjQABJpJDteZcrrrBNKjhQLUgtxzoNAwgBWSChfRwtak5",
  "key8": "4tTqP6gN4koTLY4YJ9ViFPqdytcW16M5P3DTVnn4efiY2csnwva69zB13aAePLxJ8AqwK1GgkmcMmbq2mLbWBMek",
  "key9": "5vVAM2hcDrJSCVRTgMyRDoewgsmhVY2uLS86bCZqBnKhzHQn99AzrzsjAxy2Qq8fnH6Ae2qY8EXi38W3DWaiPM2F",
  "key10": "4WK7YWAm452omMpYcNtyLfFYy7iSn5QQCmC5qSNiD7EoJvR8Ht8TXcvqGpvwnU84ZSXJ6XWDM6NcWsZWRQhHJH99",
  "key11": "4E9pnyX2fiY7fZu23DzMGSStDUTUDGeAe4hWVU7cM7BZPkMttQ5YV1tfxZhyJp9pPFMZjqLpkgSttaLgw2NEAapn",
  "key12": "3vnTP4P8oVuv2ibSNyh2HqytcKgg6Hb1mgVt7aRW9UfdTYPHeJZu14Thoxsuhy9DkRC8j5Vww9MZ2YtmEsdTKiXR",
  "key13": "3v1nMFafRJ8uYeJdzDpKEezmAZ9hsL11KteweiTM48o329maoSagNm8SQkS8DCTBg2Uri9mdGufwYZHAUt244QuW",
  "key14": "UnaKaRoDpyqAkrRXiM3wzDFrupdpyAFCAX3sPH3x3ZD5y8PJeiNyLpohBVNwCukScVnL32mmHdvDDJyQhB98ydW",
  "key15": "2tKSfs1yKvdQEMJhnb1EYne6VBjtBdbCaHwbL5waVxx7LgyuVTbimFF5w17yTEQHTGDj9neAdPcew6CkZPQnRm2C",
  "key16": "aCaoVy6rBnMmzv8oCZu2rAn5ZLGH7haEE7oSQWczBPzs7QjQN5R6EqxL7sW2r8YeFVSmQmQ6XbTUHy7EzsfAXKB",
  "key17": "Zjx2c9hUwZXbfh8LSe22voeqP5DZmsy3VGYNY3HLJfNbRW8dZvqPXpszQmwAe71gMQVTHyvpsEWQGpDExxhKCa2",
  "key18": "3s85HwP53bRKCoyEAegSGnXKHxiG2gSsX384vEoNkG9f4w1fSkRzeZ4i68fwx8R9pKJvtXetpd3xFDgcH7MZReQN",
  "key19": "64BAvMLMXQYQVtTnfUFhsCCMmX6o6mXVJfv5PwTXfvkn4HjP7X9MffPvezCPXcAnMLtm8Kfu8cgCVSSkdawg4xks",
  "key20": "22ng3Z4NvRcD39JLaf74BC1HKX4VCmyLB4FKdwnxF4gnqe6CjLEqY6C5W882kCPbwQmwukzZrhhef3A2e4fYJdtD",
  "key21": "5pbQsPTxm88dtRmsqvupNPZg7sQNwsMc6zXekpX3ELRhBoRk2VmamdYvT3tK3dZS99oDWVd1s61RGW1H1XUfnSp",
  "key22": "5QZSHz3WEGTygQL4mk6TFca7Y3sn9Cbxpn8jCQkqF2TgUyhKjpMVyqzsU2ZCTnYh8vcWybrY1mKt97gJZQy8epKy",
  "key23": "51p742Hrf4kDS7UyHAfSE5YCUgN72Xb1mcwn3kY8wBX7FH4r85q11tXa1XADdNtYWorPv51Gon63UyUW4aDG6RvZ",
  "key24": "2hD7HPM5RueKn8Jdp6x2UBXEYqLbCJAJ3vSrNugbkpJu6aQEXJ8Z2JddzHMgUkatQHej97pnVHgGNx2wvWUtZtHT",
  "key25": "4SYmhG2sxdXCu5PrFbAwfERSadT6sYmSZCQdvsBsu2P7AhH69uS8aQJsdoyGDBfKJPThxdM2zyJzXzyfzrVrrXEP",
  "key26": "YbwAF9qjAbabRkEeAbmv4cLsmXBJi4942xDrUBPHYdjUcgWQ1HTxEEjxGACcYvSaDrgd2idYMPKXLo4hMArTyVF",
  "key27": "2MDAq8Sw4wKA6XeFWeGucLWA2DuTZDPx3syN5B7FxJWYSyiLvNDJoUZJv33mvA97DeiNknnxmXWnQGRkEKVcjc1t",
  "key28": "1xB84bPdC3iW4UKvk7X4aorgk6hw99Tz5cvotu6GeuTqnNHv327fJzrpp4yeJng39X4p3ZytgPHZmsjHJWwAWnJ",
  "key29": "4vVZGXzvX27LeS8Mg1m9wM5vzE81bNXPfi3mj52eiWkAgrJgvYvGtVQx3oikiwz2DwsLybsutFY7QpofWmMXyqbD",
  "key30": "3zmsWGBUkv4UXt6JsxUc8JfCeX21FSyZ4j5XxJ9o8w2RotukaYQKx6PVjWUC43G3XH6UaZBVVzunfTtmHEqpkXj",
  "key31": "2VxtfGLDg5XnLTastyB4MZ43SySpdr3VQZEJY6TFq3xSThHRjUa8wnSDCxi8d3T4CppLwyTzTYo9MMxNU6y4X2pA",
  "key32": "4woZioFL7CBMPkPMuf4AxPMACVsUSwYB7w5DR9Xr2Jsmcq7L7rFnAaECcDmdn2aW6aYJHggZ5KHAUWYyGTquiB72",
  "key33": "5q5ubwoSET9xFij3QXbFGEewLu23hS2tYxvv8BJqe35nWVzZBBJKKdtUA4rkyHPYjaev6ibVfbShMn9DaaFGp86s",
  "key34": "3ZorCax3nES2Jj9PABniiCyxoQvhbRdKjjHKJCkPYJckUTKbmy8AURASfd7Ww3J2YrX1CqubhDYPWw4D2xnZTpVP",
  "key35": "4Vziw89C2rhYjBkRRTizrBLJa75JfN1hJc2t2N86vRr4e9RaQg5d9iD78wZUMq6B2Bf6Ks1jg3M1z6fHA8EzZJpP",
  "key36": "5cPARzEcYXAqixYgGA5RmnWWMEjzqmYt6KwjRLNuvmfWMUnHftGhqLERDb9wknNKfhCBbvGnEbQGRBoDNcCXp1Q8",
  "key37": "42AEyfPFhoj6aZ4d7Yc9CJJ8YodzYMm3vuZ8M25ay8niSXwkEeLLyMDQEscj8EZssXB1qKzF2sa4mpPDvvRWJ6fC"
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
