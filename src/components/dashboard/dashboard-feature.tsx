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
    "4ULSKuZEN2V6YAaLxuPSxDEwDMoc8GTbBwE8LLu4GfyzS8eT7mL8TEWgQwyxG6fmT2Czw3cYSTALbPgXXW6JXZkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6GSMyavWNyGfCgUgTq83H1ocZ25fGEi6XiECyBoD2Uxdna9xohaDLzUGQ4HYXdUbs5hSsLxr14iDJo2aJoBbyX",
  "key1": "4VwkB5XU8z2Fx6yg5puFUXsZs91QKxbkPo2QgAvArB2ZHsBdH1qS2b2sfetSj6spoQKPvrtoAXaQui4giAMhAtRh",
  "key2": "5uCt7XyDx2ZjcfP4tRrKC8F5BFbkzXx6N7YNJwZ6nGeBoEyMeG3x5uWsBQEYXZup9kgQ2pm79aPqWvM1TzWippRr",
  "key3": "C3xwYygX46HEvaJN5586Su6wEEMACnPZZLiPz4RjDUaxri2RQEdKsUGbiLuENxrcfSguzMfJvQ6vGD5Ux8mfNeq",
  "key4": "63dhU8vDe21TsLyJvZPPN62bpW4uVc78w17u7Yg41XP8T8HmWsXDfKJr1cqgPtqnWRsE8SMvKW1Q163dqhNEzmKk",
  "key5": "xiZx2fWR78jBZ2WD8gKcNUZemCTzU4XgctXf3chYzYf6G6nNdxwgzvqchmsToBct8aYMUxi2XSuh1fNp7eSjKPB",
  "key6": "VajuhPk2dXbUQkErjTGLSJFwGitfs7KDc7y1zu5FgC9WorFQ3Nckwa3p5hh9p7TvZMybkEfdBXjkjYqqfrkSiKV",
  "key7": "3krsBMWfmeJJnBNyDEwud54G13sApxdm7dnb6trmGfQedvDxmoqhvqi8PXrPfQWF3ra2cUEBPFdUPmondwXogTKG",
  "key8": "66Q3vwvvHGg6vAT2Cv2NPsJbCxuzoJS4H3gFcJn3k7c1iUzyeDhLMWBtNSE7tKzGR6FZkSLqekcpwviWszW5q19d",
  "key9": "5vUYeBX6dB7jRvdvfy4bsHtWaCWxKqC7nTG7sQBmRiTuc3J8NTCtVZUVuUbx6c7CxsdHsQsuD3h4Yo5mzV9QWQ6J",
  "key10": "5Tj7kWQJtejDX6teDozkbMTf628NdNdv2XzBPCCqotxv52jG7mRBYms1RXXodNyBL786ZsURPfqryvfgBXypLLCo",
  "key11": "KWLB2dYyag1g4zyB7998RcCJC6UWE2cTMnJdPHwZruSTC78sjMgdVwVRxtBvzd9QDp7xd7YJkNTrvm4dxL4EGwK",
  "key12": "5zfEBBkxLwPbGgivZLBYMJbyN7aYUueVUXoR1iHjr2jyouR6Ch2V1kXFmgrgjtGfeNA2BuxjFDnJSg14ZH3Mp8pw",
  "key13": "61DurBevujMWkFopThyRAdAhUS8fweEgKbtwXAp3LPvxeRx94fTd29Hxw8CEMzQCpFM7m2BTdnsFPwn2QoH4347D",
  "key14": "2amR6kosha7kFmqt9qJYUCrLcZzjPt8b7u3w5EjEf5E5kUQPWwfe16ZBr5w7kUmuhrBsumE13bV42UPN89Xx7VrS",
  "key15": "3ByBn1JtaaTbwSqXxrkna6F75upyMop2eTsihqpgTLt27uUeU7KnfTNFn5Hv3NCmaDBnrRCvWsVPZYiPWmEpuNP9",
  "key16": "59B96BqpUf2DThimrezauo4wMCRpnZq9JnTk56bNuHY8kshpiw1Xwo5WhyVE6GZvRN3PVd3SsieEj4GnbtRoD9LX",
  "key17": "2cHwWpRb8heBL4iqKBcJ8PNpUCo4Cp6g7rJ1B4XrXYmrPK4bYbVGPwLpFaxLDbZ2RSaZrb4GxtfV3JqXDKyjHfYV",
  "key18": "3DFo2CF2AfkCD17WzpqWqXM1ienzohvdPn2pbBLYoYkAGuTrvmW4qtwNi5Xh9UX4miJjsZnLsKWsur9qoF5ZPaHV",
  "key19": "3CLEpHinV8osnSetXEmvtGQcZEf8pMvG7R5BV16F2uuPJ3cnyKTFUEpwmtUfDnFx3Erec7v2q9cSL7oXMd6iQm8n",
  "key20": "MbfZgankpEFZGbNz3rEpWmcQcL3syeHcTFbfr9kthhjnh2tXfu46K8Pdqkv2sQp1ud5bk3WocT7sP3eZoK2iw9T",
  "key21": "2n4n1T9AqLT2M14jyvhT1kAGQq1gdf3vvJTbqr1E57haLBkxL5VFF7GS1bHvQ5t4ZDbRrxno4bQKozmFWWKxaxRQ",
  "key22": "pASE9pnmWKKb1Z2CVvHUPB2CDtJPMKjqzxUwhbvWdiVWWSFwPhN2w1vaXvrUPKo5ECCjiMnLSh9nYDwHhZjpa6W",
  "key23": "5cBzV4CgoCqxc4EaBqVHLoRmk3Uw6i2MgAtgCA5w2vC9aCQ5tfFTv2gkFwpYGwkeFyn93M9biaCT3wxpk96HBYzU",
  "key24": "4Ye4EAzM2MEqTaiFqNCJ5Fa4bp9Ho9vZjZLQagH9SYVzZ4KVctc66WKu57fmEYqQSybVhcnmkuYTm216NdiHsA5q",
  "key25": "4qQRT3h4w1vhdohq5U3qRsMm3jmJ5FUgJENQpL7XigKfte45nvt7hx6EBTVcDaK2UEw3JuJ8EQ3exdBoiLkup8bK",
  "key26": "2BerEZ5BD4Ht42ydUSmYG88dUZWrs36FNUx6Zrj2YpEtqsLpRGwqCSzsrpy4jhmfzcNu4SXkeTeAyppf6xuRaXKV",
  "key27": "f4HctuUWm9toMnGvBT9DopTPA1ZqMWW8fpWwVC2gzrbksa81hBBeV91pA5z7AL5vpKT9XQMAdxFJ12Vp44YfviC",
  "key28": "J2WzjQxRMeH6pikGvKtbKjqck3kpVYcAvtsmF9s9cgk8A76RMfYq1Vmpf28wn15jqy6oxfnWMGwQF8MyGcesj4A",
  "key29": "2TcdhTWNGHjAprYiXZzXTPS6YmP24ekSFWjik7F3CrSq7SnxuKMkLEAMLvCTxcepPR44q6AUn2Rcw9guPQReDhvC",
  "key30": "38vBEHukEhxNLPtpLCoo3CJLE7V9j6zG4bcA79RhpeMXYp19AFn6fJWnrfGEGzLn6UgKRBGiBgCoD2TaFWQy8DXq",
  "key31": "3XhUYjuv1FnvfNs9rs5qADkrEfwqPjEHcw6JuiHXBeNWSc5rnYmLxre9vmC8uxJgTnqF9CpuhpfyCqH5FTJqaNUY",
  "key32": "67JCvvgPB2pQ5B7zsQdHUkdd7D8FXhXYvtL4XnmfzdN3kJNcHSMye4EN5F9nWkSi6mMuK5H2cuHXcrKzyC4t3c4M",
  "key33": "4HgUbnLhpP7T8Ff5nvKBUM1WWWdjt37EvYPAEdeFnKjqoaGLVLn9dSYBjaf7pk8WS14cchL95rz7X64bHx5Yr4d7",
  "key34": "cFyVYeR4wzTGpnwSMtqqVuPErW7m7gCCVXYKuZ7ZA5qqAx8BUbg2hU8nETtvaMcuey3DkTgmtEXbko8M9ngDETp",
  "key35": "2LvvgjgZVk3g4Z4taeg7APzW5cQ66fvPDhfEA7jidb8j72A6jGwax2FXiWrQ6D9fiiJuGsbVSasyzJJK8S4GmFYw",
  "key36": "28QWZQDTwDZCusB4VwRtLdv59E51KkH7NMzvdTrk9A2s7tTrDeGdPg3RnjGSZpVpmvZDfKJzHWUyEA8cSMEktkNS",
  "key37": "34xwBDZjvd4pzi8PvkxB6Jc7G82RqBjx79jd4iScStEGbfUsSVxBdDpjggRXWeeRKbtcGR9vVCwKbq56ptgnmjdX",
  "key38": "5jeiGD9ruJFTd2HNWoDQYickJUxYFi14xVSvKvzQuwepSAKRSfwZJUQ2tDw1CLvHLaxF5KC88sjrMdy1nMrVuGfz",
  "key39": "3v5sjGjhRHdXM934ceABsXZhDWstjPLF9we2PPHMcehytcWkJy5UrNj57qnCYbVyr6W1TcFDjmWTes1ev2kJXuzW",
  "key40": "4GQmUDLUn2B5AvDeS1ZjTgv2WL7d51q86dvy4u5BNJ7UHUPYs2y48tZwEEKw11Nkrba1BuhX8NKwroLg2sN6edvH",
  "key41": "38RJG8znqfvyGcFizMFxMLek3uwjwFx8wFieWeo2AfkXiBr1XM5FZRjpj4g1JnVq1bwuGJrSKLh7xD2P5KBebLaP",
  "key42": "ES3KEUMvHudBuez9KE6YwKuMZZmSoapYXwZ19faudfPXFNX1Hbnqo1Mkq6kp9n7kkxeKZQLnXkztoB3JWsHZaWK",
  "key43": "4bWMp2R3rKjg8cJvhQyD9BYgxeAYgUrFxzrxfKYPqMjurAodpFa8TXQUXd3EpceRa5syvYXTJoBffwn3Er9ZuQRZ",
  "key44": "2n9h6q5sWwy7gmjBxA3yyaz5bjap5rsRB5GSmiRQ2hVVsoHQLqbJCKMUqtHe3KFjP851sqFajw1vzuNJLMwVKbnj",
  "key45": "4iQsHFFSU4TLuKRDtEWfsAdGHraryqhfYTxFTGvFWYGZodCxTp6Dnyxi1kFxJx63uxC7BNd299w69NVwLwWQ5f6x",
  "key46": "5x8j3ozai4kAWPVuCfYS7PRsdLaMCzB1QXp1TFZPfkyy1DYjz8ekg9HxAqWwaCxyciqQbUFBRg9uajBxi9S9WG9Y",
  "key47": "5m3UHWKBmraryDfTYu8vkzg7FRthkiHSmjZiLizz6UxbjQGo3f8ZzqWowdyrSwhneNRsakunRurAY7dzCoaM3tJ9"
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
