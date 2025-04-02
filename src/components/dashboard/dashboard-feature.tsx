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
    "44TLUUdvLxjr5m1fmH5JjtJaeDk9LN6rooenNv9s2jHVJrqoPM9qsJHfzZXm4V9Lq5JpqzNCCTiYkvSx9x2wWNvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBECQ3YhQWfpgAfqr7qkjdG853jmEuvAPhEfZ6ZGzpFUCineXbhbURjMPmSXqj4NtddRz5cRibv1ag3qET1dPY5",
  "key1": "5rDPepQnpxQtZLys6Xww1TLiuuaRjWipoezdHwLapPQUnPy7eeJhL63yFJMBrvovD87hujqtGzbUe5WupSRERZJS",
  "key2": "a1HNQApAjst7iphHLyy6g4exXhmLNoeixrkYvn4ANgKpc1c6TsKfC8p7N5qT4wwVnPkoQd86bnyf1KLYANnVaxk",
  "key3": "3Q46yZ54BArGqTDBwwFNBZgg64twjgjYCASjj7VxgNe2rTfq6UtERjQytX94L7nAffkJ2jW6vZJBLrekmK95WGks",
  "key4": "jAcbkWQW4K6ucWZyDqKYFRt3BpUprGje6chMCCPpPneURbYy6efk4EwaPyfozu1s3SZKFabDZNNguMwtbunAxBQ",
  "key5": "v8MkwkzbSfJunPpL9wZXQVYMWUFDJ6AxGC3bbu8Y1EsB7V2kbYXZQRz9s6BxqMAPuQMzKiqAu6EdCtMXCHXps6f",
  "key6": "3UVhtz2AfuN5SPSKNqsAyFkHQ2wxzJhDhaFqRpZ81rfzh8HRPdUVa6SrnmD5kEsi3w3CaEWu8A8juBgmkEK6dpo6",
  "key7": "4JNMWtxb9pfE8rnPezpGG5GQsFVAkmTjfqm9JDasqxdwVbgF53886DnFZdYjTWprztugBdcokFbEkmLDqiMsSpdp",
  "key8": "4swevmTNopqsdSQmQajfEYJa48HQkHvDtpTtCQkJVEt9WqeNEieXDKhxf7Wk1Ru8C7d3PWp3ieX9wvdLH4YcNTQW",
  "key9": "3THoVNMuGSCf3iRA4Mz9KQUiAG3rfDefPV9r5CH7cp1RKpHnP7rjLwutU5mfLuQuVvHhZWCVXFyHyMngjPvxAStd",
  "key10": "66R7sar6FLRdMRznRVPP5PUtwVwEaturzTMPBUZp7zkrb43NJ8syiS27Kd4mkX2yRMdmLCRDu1o8th3kwHf64GsA",
  "key11": "21d1wv2WoQ1TGeP6kfBtCT3KPxFN3dS8N4mj2Dj1gykFvqGkC4oXFnWiuNkyqPA77wEp1ocAGNW4jyPEz2g1gWQW",
  "key12": "3oMh16LsT2H7utEdJjqzbQvCjr4iKDV6YtvzDVVRYnwDCPVuiDqpc3oQsDgBCfEsfBDZ7vjqtkfZCPcMpJZsV5oX",
  "key13": "4fsaY8bDzQhgGsovfaPLYwC1FaHjBV4LDd7UdeH9khWxHWCmYBW4zePADHDWuRT7uNScTSdH1xhbBK75eKpNNEfx",
  "key14": "KybhPTj7Rrt2WxhG23Q1Zqk2qYyhaHP1ErVmD43GDCvAtS3EWXink3gxtaxxQ2RqMey4zWS2iPaq1tkABaUHo4e",
  "key15": "2AZRkTftAVRZQZ1MmK24uNz9DrQQL6ADrSdupasKBoeXJQ5Wye2uszJ8Mu5JPAgx79vYXc7QQPjXbqoCc677APBU",
  "key16": "3S41uhVx8DKZBvSJdipuVKVCKQuCZ9KQCEnMnAvLg2bp2eBDqxZZLGYCCauVNNgVWMRNEvW6PVdyGj42c9AHrSmL",
  "key17": "2LWfjZTiqcgwoZToUjCPbTmPiug8shuqNr62w9LzyYvav4LNwNfsqgvbLGtcEojiW2LKBdbbEwJ9pXhZcKsZfYXY",
  "key18": "2hb42QTZeNpkz5XjMZVMAeUko5PZ4BXzp23u27xCfefCTJeqesbHxgBqGf7o9waF23yQBs1MB74dwmRet66FozMR",
  "key19": "4y5MnKVA69XEWXbza6LJhaGGh5vrZpep7hTj6RJ22fkAfjUEbLriyYMeVagDtVpAUc13QxSubUp2ZoRsJQU6EDCj",
  "key20": "41qJ4fpymDkBfkBZg65swybQdYPZ49Vsit7t18JFdhAK8PfaiQ3RtHVXpwgD4nezJUvWdhZaNJhNCSYdAF3CvJZ8",
  "key21": "4c5ttEo2exo7oZj8WKXAria1cXQjvwDJEs9hvandXdeWAxvD4W3qmT4hwedUe91recmkWr3JwA7V2JDNV3rnT7xe",
  "key22": "31vtV4U4YQzyxrGXHDLE2SW3Ue3oboYRn8D39bt3uwvjyD2giPSMUBBAsV7qcHxydy8MVHCqsEFFgeexyVSbLrfE",
  "key23": "5FGDVN4JcYaWztaEzcKQQwZ3RiMJvqgC9wzKwvT8UAnJLuLB9Sr4ceLRHSZF5Z7ULd5c8U6mBM8QPsi1VnrcrQpP",
  "key24": "2cDLn3gYUeuLdMwfG7Pz7sPfa6npadKpaaGDjmDoq8zrTQk87zDwSrEntSNC6by5vVptdUy9WVjtew5yxEkf4m3T",
  "key25": "jQpSg65TGj7Sy948gMMXimDsAoYEhL6Sny3Bfn4G79zDztpYJWqcYX7DoA83EETx7FMZvZiUmXkJ3mfr79NHpyJ",
  "key26": "2kzatbJDqEabPsfrmCVKsKTGu5TkG2bKFefCDr4Zera181oWSzs8fqF6wnwrSrQN7RBgx29J6kvFedf7v8aJP5dL",
  "key27": "476nHNxaHjZ7oPxXBBSaeeWhRAdjecq9cY7PWpdzhZ97oFGTD87SMXuEyV3mj5sMknq3rygHxPq1asSbiavPDFNY",
  "key28": "PaB1BVqgmZF9D9prN5tM4jGCf8JWbZpyv1RcuLgMEotz5PShdJAhNxWHCkYhwjGA7sMRnQtBnsvJEuLEZFyZQVv",
  "key29": "2nNWrKKewvqUutHgRrjAZqgd8tFQnbYfSYuCbEVKKK7yAcaFcbNV2oUium169YDBeMuVw3qB5M96EycnKkCmtJDX",
  "key30": "4buSMkdwGy98hyJ9MgPkVARj6cwiUivCsWC5shvahYNKZqvVbjqP4oYeLyJPiq8rt3G7u56f61UKgB2HJ5iE8c4D",
  "key31": "4gRGF1gosZfcu3HtyLh5kEUUkJP8ZafLKLEJE7qcv6QdcLuufRbBQP11tmWXbgPYtMWjsyDKLQyUdE8SzFXJuZ8B",
  "key32": "9Nhr18eRw6LbjR9Kf76zmnWCabMAyEcx9bS4BhDbPegZq1thzWPxq5hmkP34TJwQegbgoFoZg5hNknMyFZpQUwd",
  "key33": "4C2Vn4sMz2xeKcwvphqk3D6dNi4UXU3TPgd5zLeZvezVZiewxZuurzFFpooZ3NANPumysBBb28j67z5ruvzPCeun",
  "key34": "5TqMk1Rm5TUXwnXHw1A2gifo3YYQBehb7owUcvhru8xvE9cfQkDgMmuwgadRr9qpabyQ5Rd5WhUsB4So1vCLDmLZ",
  "key35": "5SmqfSinBKpxt9HVUGCSMc9WGecYLR2YWmA4gwdYXuForgi7TcMiSLW1vQyCky1bhDBENnrRQh9VSmbYpnpz38cw",
  "key36": "57quQtj1wzWbZJ3zhJWvryMmFePxC1qUWYczA1mPT7347jb12NAKrSg47juCmZbZGcd4yxjMbyzNgxezJnG3Dzff",
  "key37": "VLKxC2w9gKXW3yNmLNHX4ZZiCscwLXXNyFakrsWWqBs2cfLXkkXo9wU72ivHerr2b7BypkAjqoCgk18uDifYSPm",
  "key38": "4iU77x3wwCXQJmUWUCsAMhGAAbN27WrRDtMDZqzyqmsQQTBDUSR117svAUbsKJCYFGNnDBw2n4RXNED9M54MAWRg",
  "key39": "3avqH9gbN3F73HZ4Rdju5oJVmLYU9SW59Xp9GyNB5UTjVUMrqwJuvHDFFCY4S6ikNosem6RPC53jAmMTJyWe2i5G",
  "key40": "2bS2gQq7t25KZoWWEAPaczuqFJRLxddF52SH9v42gaqpCnDjZ3uTjyQUBEDVAHtwaD8Vaj8kKdBFhKBqo7oLhMLC",
  "key41": "4YtUZG5vJCmKovXqRUE4rxGC7g3h6cdKzZwMutFUmTvc3oVLZuf6j6MM3zcBNw8JB9n85qzSrCDeEAgpwFsZYpEQ",
  "key42": "2WbJx2b4AHfpTP2ME6wRJhazWqrAebr9KYLV3MTbeaNQiQKeLwvZVbsPb9BZi9Qex39CKFkqaB6FMbCvX3bUZmVs",
  "key43": "4pPLaUUdxkqkPpvk44EShZY1cDmuyLBpH7qQZ4wyuFw2JuPr7a3KpoGBwk4iUyuBtM7NTeuGVncGe2yCrcqpJNqc",
  "key44": "5dVFgppS9yttcbgzfceTPdmWE8PyVpgNeVHtcje2QLQgCLKwQ76JWDkb3uBoBDm3AWKS7AZzgLQtS32TXeVmHxtF",
  "key45": "ensZ8mwGMaqBPvargYekUEHFwp1tEeXV4i5dPRwYwbZd421dqDUGjDXv8G2ghJgWM7zpYwp3X2SgUtB1JQTRQbz",
  "key46": "j7Y9xsb9P6bVZVbUUpzkD8DUjxsfHEt7k4mW3Q6e3jhgcEqeiSFo32K3t4zGtvBxQvfse77z2oK58RxxXW9LuFG",
  "key47": "8g8bkn6cjUDAqTdz6LPgNN2PSZu6oWzsKPVbgCCFXAUUrPdvC4SzzRZepiMSeeS8EBjq38bxpHo1AhqV3wpWEJ5",
  "key48": "4BRnhcSk5egD7CLEaVZudm1hE3NefZcfYsv9WGRAgVC579CF5uovGAUpiYyiB6mCpz1KDzS2DQkzxB7LV77qG67F"
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
