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
    "5s2ttn1xRSbs4yW1UFGewieRqTv69rxK1vEJiZpXmb8Saj6HiKg3V9Y5R97J9KGUPEr8udAQLRDkr529aorcStGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUxWmVuAdd3UethzmQvcV5awEAYz2nCGpjoFRZoc6nkkeQNgHc4DVrXtXZoVZhtjzfKF5qkN76vmPJzXu7oEskD",
  "key1": "5swhXW4gvcmfXaDUB5bbctUcgrcrpk7w8fGzRKE38QFPrZVGxCGDf5nzFJu2SL2b8pL4MZfCvEpekQW6UJVeS58L",
  "key2": "4bJyAHZmQbtu4oqUwqV2q3yLKYwwrmCpYATMaFx3B7cnbECwWHjbLcBNrCidyajdUuCfn2NaS9zVEnJ2S1pipd7K",
  "key3": "485V1Kf2Yq5TmuMiCM4Jmd8HuyqWTEw53YhSEB4HTAzAjnAVPVon9trqPWqB2fMjuWFeyv3PGv5VwDEfJ2wUfEia",
  "key4": "3ib41qAPu9f7b6PrRjvc3Wz7pQzMDKPvrpfqMXqJSbqBcjeSnxtwcvALanvBhHEspG6iJHwWzidJc4UuCQxKLe66",
  "key5": "4x4RmTP34kJ1Y2MrF133xKBvgSjosSuknjA5SQxN99njfNtR5YBNDYQwAwPUk5ssRdQKaDtB2ofehgdyfuWDFbLH",
  "key6": "2Fu3dhumeW1waLvpJSeKNymKokzH9hVBWhxeo5zYtn9XWzF6qtFMjoyJAyaRedikjNJKdDsvo89FBhZZGSiZzy4a",
  "key7": "5dU6cyyAv1w5zREtLQeKdLF7TC2t51qiDdiY1tane7FuhR9AGzWRbsaW8tfwC7gaq4kmc7GqpJddUi1iY5877w3H",
  "key8": "3HhpinXjuMnE8zQeuQepqzVNpA5WvR6pKuri1e5T76pTG1TFjMsNVEP72bawwaFLHhQ6o6Cw3Xe2iuPspQpYwka9",
  "key9": "GbBzy3Jzq35K9fmLjFiZNiS21C81NTPUY76EfKzz99LiXyxhszqevDkjy1zKbbcA2RGj6o3Wc8jiXDMeEVbmMgB",
  "key10": "3cp1PFoz7Y6se9vZhTmxAQ3usM9bJRSHi9aZU5rhsBo2rutteYzi6anAF64qiJMUfdZezJPTM7Tgwui71xaUxWC7",
  "key11": "24huYhc8kksuo8SDwX5QifuSNF6nQRLd4yQKgkB8xSbhFsECv3t7qGZmVT9oboimFBrJGzSDLvfmJXJQfRahs57Y",
  "key12": "3aAbZWrVqpQsVtQLP1zh4GggU94ERZ4rSoHrYPAAEF4mgcMmE3GveEjXUtFg2CmAgJ6HGPNfDRJFY62nUFR8YJX2",
  "key13": "5BTxBER9Xpn6GALdabP5kASBLkAYz7sFJEazqMgvTLJPXDrW2r3CH4yWQTqTtvfZ6KRGsXt6NkiG6dHQAQ5xGbZ6",
  "key14": "2FF7S83S7k4raDx3EwCVWqY42dKa5DKgCa7vPSp1xweDBVoXQ5xizrhy1AQ3faMEtCWKd3nD7uVhFy81eFmFFS1S",
  "key15": "3JUaThENaezm3oNAQ3Sh4NoQN65UqRkEBiEsGS37dXtn2v9f2FSKA4V1B3YfHhbHfL5psh6HVCwo5ojHfC33A7nv",
  "key16": "5bLMVx6PjhbyDz4zX5oCvzkpMnHvyAwBedqBeb2UaRxYwNHbNtLUbKh7zScqCbUkVagy2qnkKMGKWnXSaxRgjkXD",
  "key17": "3jm1c3LkmyzesPpZ8auuaq7FtPPvEAHAqzxoRLM35HET6H9FR8XamYviwGZdNxjK3MBkgvE7g65BG1Gqc7vgUjwe",
  "key18": "3Tp2SVRswmmYztbS2mHjus2wSnac7PYq7tKdQjmWEKXfF7Jpka5nQ56cYbhc6oGDWZuFGawsXpiDergaN8zcAinY",
  "key19": "5iDRt8259BGH1ACYwQrFNn1XMVZGBcKh4R3WL2DGGM9K8HhQYj2AcVmZpVPW8m8QXsjjTJnQ7AoYkovycVasonNR",
  "key20": "3zpLuPbw1NvFqKv5wDEw2N6zHoRmee2EfBXpLTzEB68UPg2eau7Hz7GMqnddecrU7tyuwaLqifcC9EaPYT38vJHY",
  "key21": "3f5cr4Vr3Vs2t4kyRawcagS2FV7kC1RtswE8a4hVuMpHhnFsBj48Fu8YykrZtAGeJBG3oazDrSUkhQm5ekbRzZZY",
  "key22": "5x2Kb64EXDEvfTuYkuY545jfVXok44TuigwVG1Grgp5Htb3pEpQkuhztdr9MWYnwaPPuibX6z2cGQ9E5WRrppHnS",
  "key23": "3MveFZWXkbpXTEp12ZChrCm9h1dGKUqytV55LMYqaMz2C3EGL4cGgN1F8eeywYqDQy1WB3Nz6Tm5rfUEziSC3FA7",
  "key24": "2pgePoBvZhoDo8o1vmmcFzq8GXYir9jjgcRcRfMdFem9w6vxvn6tqM1yjrNPJGXvVRW8qzb94Eh1jYHMfqVRtYcG",
  "key25": "5atjADay9ihKbbXH8jTqwG7toZDykPhybArjbfodSFV5SncCe3xXdzybxUgmNmcLNhPAsmEK47CVAJYWwj9e1wJy",
  "key26": "4XVwBVTz1tGh8evzfNbuPQSEUktLifSeYsxBLpdfi9i6xvNmmKhpvvs8tLNgpcdtUArKhgb5ssT5iYrBEBBxN7rN",
  "key27": "5BdSC2kTWjkdUCeYFuH4Wm1ZFvVQ4zzuZHq98uzfW8rX9KrrMdZ89vrsZRvto59SofvewbatMip78hsHKnyfhq49"
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
