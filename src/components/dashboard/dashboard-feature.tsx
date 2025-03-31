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
    "3FmcNvmNW5jVHWWEXAHdjjXQWwC4GUGCourFN6opixuhHgm54gw3urgKnXucK5rXmJahnt5Dsf1Ngh2Lkza9DZcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tr8jz2vZMuMXBoCqTFwXrkUh9w2LyJCUVUe2ybDp4pMrHtT1As9p5LAzCJ9RUpxdQutXcJVtq6hSdpZGK215XD9",
  "key1": "3Zz6iGZGoVnxh64Ka1GJP1KrdfWfNXuXzrgU2Qb7BzA39XXEnKbbEfNEHeq6Z4mzCmN986qyP6kcxZo68PDMbBRL",
  "key2": "KbpDqyNiLUK9npnA5eTTcDzPoNytsj51ye9YYutCURmEGQ5mp8NpF3MD5pURerwNbboen2okuMp68gBrgNDjz7Y",
  "key3": "29a8jkkJVkTetw6XXdqM8j8VYK3ydHTQFgBY7LtKLVZ54kkoQcnvrEwkxEJjym3wXyrN6HTdU1m9h62S5Z6Zozcc",
  "key4": "5huHxTpmSbWxb1BpfsfyoF8kM2mo6FWvyxLy7BiEqn5uPiovn49FUiet8w6V1vrBPJYUBcXHDACzXXJriSTuVQSq",
  "key5": "vSRjYyghXLB5bmo5ZyfhRrqAVZ9BTECmJ7nCWqnYzViZyQv62VoCPXH5kaLTuBJSNW5xKRHQBGDfkXZGN8P1Ruq",
  "key6": "4sgUaTPQMWm9HWFr4Du4xvqXSfrQpwuPkyFVA6kZFfS5GqgdTv3h3FQ61MUbQPUoaqi4Y4k5zCxE9s2uXfiGq7qn",
  "key7": "21krLXrVq4w2DSwQ3oSN5Ybt1ba47658h7XKz6Fyf7q18Q7V5rZ5Bn4UXPYXANw6wMwMitrbxThsbxtc6zkCfUg9",
  "key8": "2DXP572a9aWNXBKW71nQHEjGqepQdKr7qC5hNqYE9RcquwECPaVtpNH8oAY1GWTGBHUWprCdtWZG1YgP3ayPNETW",
  "key9": "49qQVxSVJxYT995SVjvsh9wZRfqpZs5ZmWQ7RET39isSyzYHsX6TebgfpBDimvh8R35ywn6YRhABHJkjHkUkxbU7",
  "key10": "4JQkwEXMfga7QCALhki31nisEYnaEZuQ1UvwUQ5iaZsdpQQBKNP4fJfKmnrFXwf8WejKC3FZj8dcWXBuWFpgBdCa",
  "key11": "GWnM3sLEb1w6TNPNympqZQvs2DZnPgZo2fGpmXvdxG8UjRnhn1exxX96DCd3MxSyAj8Ee1N4gDtSoZS8YMSNbLK",
  "key12": "49paSQTpRoRU1PigLAoCghSQDfWrgNsa18ggCwitVQpYjxAfsoCXRT16uJDKcoAGspcaq6ifErHjfiPmsvJfkKVp",
  "key13": "4NVe6wVomPhkHhNn6QuFZ4gznyTREji6D7xn6u5g75wk3nt1CYv9Q3gmdUJTytg4MvfuxjMv8cL5AnLqMmF59Lz1",
  "key14": "UFUh5HiJV3Sb2HxgfPmdgk3vBRjtedEogNJBdGC5A9q4jtT2XQdobGSwLy3eM7xGHZEoaxJZs51B7qkzgcxaK4J",
  "key15": "5PzBDtnNnSAnDBTbXh7cgtAsqNaM7Zt52DKRgw8iHBrL1V895zbLAuDFRbA1v46SH5ZSZuyCaxbQdZKuwWYtjVQw",
  "key16": "5quB98EGA46PdCf7hpsPbxmzqREykYHAon97HL98T4Agw47n6FQBNuwc6Ld28t9X9EbFQjnH7CMdJvEqV5CRGuoA",
  "key17": "2GXA2Vr91suNxj5Qh49yrhm1EaFswvqj1axPb3RJLQpn5qJQd9QcKd8xTCETBCEBnHuu5EHJD56epCjGKsyjDJGj",
  "key18": "2hJ8eSkMLLNp6CeuhF5hGKbS9hM3n5XPGRbTwJjz3Z7CiLbFYDmdqn82crn4W37QdAibhs4WJGmEZn7ke48esGRp",
  "key19": "5G5WwXJSJnRqRj8zzYKVPsb49kTefKSYgFhPCni6Ffowqc2pK4Md44fG7YeWCxTkTzEzqwi2P9fye2GCg22yGsGw",
  "key20": "5Lc5qSRdeMjyVSU2zb8iKtkZBt1k8L1HEw7BUxnsS8TMXTeWmj9EKRFPoL78946Z8xmW5e9S439C26eHA79kcEBD",
  "key21": "5DQz42GBPqT55T2Nex5nUUKx38KqdVKo7b6taeH9dX1VrYtDigrcAGcibTSPC8rYwwnQK89i3f2PCXYYtv57ya5r",
  "key22": "4FNsubS5AzMmGDqAxGR9fPnZohHxVftbqU56TwsKdDX6F44Ss6v3k9YjpdDEarFGWu2fE7CgxAVRw5Vsthxo4jz1",
  "key23": "4o1WNi7dvdSNbPNbbnE3maCgrZMrTSyjX4WmgBD5VEF1zUjYGPGArbUSNUnq8n5FdzsCfgAd3dZn2PTd3XkeTF8W",
  "key24": "2JJJb8ejrS1qe82EYhnJugCZxBVfh7WxGp43z8BJRonvVEVb4s7mVoGRQQcPQi8NixaiHnKwUzhtVXDLquBjWy63",
  "key25": "3nWK1RYohVfhM2ks8wcbKmXHEjgC6JFR9iLWv1rnXMrCsjTur6B4N3a28KAbmScA6YcR6wyqsHQNsJgpw4yp9dz8",
  "key26": "4nATjy5NSFb1HzYqmVcKUcsaifHxnhsTgZ75fZUeqCQHCVf548ytcCqzc6zjGu6zNAtqoXRPib547szfQRq3CiM8",
  "key27": "5ewbytb6FbcnLkW3VhQB7fNgD66mMc2Py9aYBXrJvh691CcgFgoj53BrFhee3gFmsbcrRymSNxhdxHXtyJoAmabd",
  "key28": "4bYd1aFDpShsxZnqFb1cx6XKQp1eK2HLHqnTGb1z7FHmZkVXrSF8jzGSitXcmu1gXPv1HjyVog7q4HeYjFGSJYrj",
  "key29": "5mSLxR7K3kSnkNMRUS7pUa6tRM8Esy411kAsfH9CPBZgJ9BqtekWE49JdusPU8DGB1adXCJEbT1Yj4QcYzxdK1V1",
  "key30": "42VNy5M4xm9usnZY98D2MoMFwLppFH7sBEopQ3QfY87gLgtoPNvE5NKP6PnYJwya52gE7eJ5msjKoYorKVWHbgsL",
  "key31": "4wy8X9TgGkUn3GML8jGhwzY3sQgQQRfnDmN8PS63TPh4UN8vfwyoA3iTaSpvYoMSyFEJBAfTnxomMKgsHqrHytvi",
  "key32": "52LG1pZnWbqLa4qpXj6xH3pQiwfq2Hw9eFBEEFPX9mMNTVvdddnqxJta2TXYCqHE5gpe3YuwRuG8rYPYbqjCPeSW",
  "key33": "24NMUMDncZQdANxBJuipNjHgoXoCVbmVSbAypthud9nCLck6Sabftrv1LvVwuKu552MMxs9XjpDULh3H5zoeZX8y",
  "key34": "3gnqwVyqDMCXg5WoWHSzbLM1ZeD9cR7b87yxBbq8ZJNaF2EKtsngNGE2s1TpgWSmAjHio5XT3jjeKETxyr2Y7amg",
  "key35": "ar74eYGhevhWTspo6YuAjd4Ek9nf6FuH4mYxLuN4o1evwoTFENdJ9UK8JUHHsS5xubqGhJRFo8xTA3arKAFpdVP",
  "key36": "3to3LByG59zsJthFzdW95gS7P3sgNnfJfmwwAf8cdNP5MC2s6D215V5CkJtj3mbyvye8tpxSwB9wbNjwP6tKRwG2",
  "key37": "4q1YLWkYfmtLCqwPpZoWc7f1NPTGwFLMvZ5HXrqgJHd3HLn1koMFAdt18sngdJqRFQ8rHGAb9KmjbDuHe1n7SZEj",
  "key38": "n135zuyuixEefP37RaQCrCVwW4tGBCDh5NyngNPwyYPC1SoTjPHq27yvkUAbvriukyMnKK3Bo1WFnKLERqmEYaz",
  "key39": "22HQyPm49rc5z9KRGiZSXiqhmnxfe6DpfyiSp1Tk73oVccrZ1GPQrPMW3Fj8xGvf6LKRTQhedQEAgya1WXMgk1Hv",
  "key40": "376eU7Ur7YwTuDZT2Nix5isGSB55z3AfWXNAEJ3apZTk3xKR4W12gFpYNxgw5jzNghHSLpbFKDmeXMgakFc68KFV",
  "key41": "21LY861Nq7ufb54b9Y95FAPXE4Kyjae35QeVL8i4PRJqTqbnkQoyggpsmucr3s3M6vi5xBzTcpfnzfafPsL7tPZ7",
  "key42": "Uu873togFZQRYDoaY5MAvL7u2HVuQmeMvQsnzpAZVjobr1mxJ3NppRUU8SXTiBuqX9E4zWZkQ5VR5cE46uotTBn"
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
