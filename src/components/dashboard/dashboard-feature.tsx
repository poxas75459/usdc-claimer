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
    "3A9GdZ2LL8jbxcT89zGuJnmVpg32f972jre76uWapyrMAoqeJU8hTZWjK7p6cMTeJ2VqBR3S2WEMeZXLogW5NV1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jRCYM5mFQ5EgBic4GADmXpwLKXGpjGMTGP6QhM8ZHR8tMBrzYowiLSRo7zHjmzo57ZmU5qycq76eguDJqtpQMax",
  "key1": "q7crgy5oA6JPyBB5HjacVAVW9Jvf1th5yQeLP5jZGJi5gPkDLHpbwKvKQZDNQy454R7rp6dHjrWdxWE3iXEUNqc",
  "key2": "4FVHPWtHXhhidA1owZEnjF8Sd13Ariz8vjBRTeS3PPDYXigu76LmWcn2iZVEUC2uWx1sexhHjCa9WfDGcr7di21M",
  "key3": "rnA7wo3yyYPhv8FRQwTnwrAWFbo4zbuBx1wY6qN4wFHYvCWgkoQmGNK1JMmFc6MoigM2JZEVsXAkXU2kZDhq3BY",
  "key4": "4wdEKg1FLntnK2Dqu9DVWZEdwzVvxZLMEu3r47Zgr9yQ47z8NxaRzLsbNVaNh8t8bfJMqXhJznwL25FucRDeHKL3",
  "key5": "4f2AbbA83uPCAfcHVU9e3cbXU6pr1SP2qCHx6zH5481mwk6yDgens1tqHgN4Skj1rHauVdV1udacbA6PoEuXWm49",
  "key6": "3W1StvsKu7BAuY454rpNc9C2SjAf2LwAuuMY53Zks2bFoYLtpnsBVhYb85mviyMMWmAS7YHkMw9ZhckRSJLJthCz",
  "key7": "4i6jdbt1RAkDQyCPsS1Nioe9XtMbVjTFCM18CyZWv7zV2mayyv31s8dhNyqhWznGct8Ca5jefEztKUFYuAzTT8Gc",
  "key8": "25vyVWeHrk2zZJ4a6E49Puo1NffLYDkf7Es388ofwZ5rVHmJ6PQsB3YaZBxtMg6JLmx9LMyUZYHZagHvRFZhqe23",
  "key9": "5RhBnWbyEp11D8iYGMHXBUwbLPRAiLhCixcuKrcV2kosohbEYQcwF3dXbSZ39ciQ8jQNsEYwBrb1uup6K8hzS4aL",
  "key10": "5JpZy5NJ8NQvVcLHh3PkYpVLHkuDQtF5Vy8zZDVCG9MSvPP8VqnWYMW7PrUddZaHp5rYieUNFuHVWTTft16FNjFt",
  "key11": "3ECKa9ewyvMhEfBYYnXQCyTsCtcBk1wPmhRTSixXGECm9bdVsWtcWZnQw6AAEAB4i3TsKmaMsoD7yh7NfYBRe6YB",
  "key12": "5UD1eKWnpyMKEYou64hFtiRugrFk3apUmQnb6SynduyBCtJeYL7M6Y2AKtS7TTvFxzWphZgnE1vx2bXhLN2sRdUt",
  "key13": "28NtmK8fWMDLfE1iCKy6FJUYoVHDdmhPUT8AHhdL376HwSJHXxHcD3o92eVvAxnX2YNtb9ZPpUQahN8Y6R1e9E1T",
  "key14": "59teLXNJJijhUcPCbbJnwdewS4aE1p94crBtPQ1sS4RRnVgyBfbifzEoWeZudi9WZVHhJcK1BBWbVieH4Up3UmZH",
  "key15": "4yyeSr1ayaP41AjXA3brLfEejcmEvwmJnbXsfvtgdZY72o7HRMr6SZBBCxDikp2aBq7Q1EZmRFGizHz1xAXevM6P",
  "key16": "5i9hDPuNQmQgHNnBXnGoxpez1xuT169JVBa6EnfVu5T9rjznbsGaToHEkg5CnKr8KWKDRSwzVNWyZFj3JNEK5Y7L",
  "key17": "5NX618xU2A8xgt3STJdknTZuUEX6uaFNRbhSu8VSzSzhUJuWSuuWAWdvYi3iDLjKaSewYdUUGzxHgSwNUgev1sGE",
  "key18": "5sZngjTaRasMBrRFvqqqkSoZPVXbYGeV4QXHoumsxdJDkm74maKWXvnDgLk2JoEqko4MfVMowZciNjgLuCNuJ5Yz",
  "key19": "4v7vbc78JNPt6V4RQoyCiQ7kyFWLcWfauG5DRWrHbXNjonLgRbuW7DvCMsHh5AxvhFgxY5JWpNv5MTmmyx3XWxQQ",
  "key20": "595Wtbs2ApAFHJ4AJGTeXZf6zEjTmiXeEbEmCzSZaUobYykDZUhTwXYLHfjqnwLpZ3unYN2i8vT87Q3L3VAiWYHk",
  "key21": "3osDoxUzbnQCnRS3A7g4ox7HUBfVH8wKmTBgpyVuoxQ5P1jfNckkYvGuR5y9VS4t7NpR8QSDfQR1XB3PnLLsSPNi",
  "key22": "4UMvxuSjY7uxuX2Ko6VkxXNumsuU8n3rPAWJMTMC5Tvh5EVChi9Zg9L41SrUSSS4NfKWKrzgBP8kkmyCrmSiy92",
  "key23": "5ZtRV1gfu7im14TSNP8FHkA5NXsLLrk8nPqaW7Yum3d5GcXLJuvcdLVMNYow6NkkEbLmtdJgBv8G5q4DMFhgtxU",
  "key24": "27RKHCjLC4ogFW5mWx7S7h6YHGRciR9merM8ueM8NEpBYAbYCJX9GD24mtSVjwEjHnC8kSNfJj8CreVZNY56nDni",
  "key25": "5VA1QiVSzhMNJpeM8D7Cbjob285eQxRF3uXQSKrFuJEF9KM14sWup9nMn97CDCk6swyZAJGVnZJCfdxEs9qjLEbD",
  "key26": "52H9iRxDZxqktwkEuZwLqkJpaZToLuxp8eqrdAEuKDGAbNojLVVDXFedqwmqD7FV9XqvU6xobo6CoCSmprV4KkMk",
  "key27": "2MDodU54bGZDMRwa4VUNGJDxYts4bfkHq7PYT8Z7EiG157MiqjrVPvZB95WUGD4pEuxnRP4SF3fxGda7wPqYV8qR",
  "key28": "4AebVEKoBhQ4RHLFaVQnT6xf7o9axWFqfCdCGNxo7Fk11BhwMLJztfcyCkQU3Knwkz5nJH3sxEjVewD9b25Svqeg",
  "key29": "3w8ZqTFAEJkr3SGLwEqUJHPLJKfFe3rHr1392qHfpbDnZ2qnHq44UwwtuxfMbTauaqP3WMSdcxHZx5CSim6LA1AL",
  "key30": "67fuSzs1hgkBQECfPBMyB2gx1X24sopnSxZvHPZ6qt9fD1w6it53pcyLYLC8MRsCVRhwjKMFRBej5V2B3vXUQMZF",
  "key31": "4v9Yhrr7V1YZbAJkGtF2dRYsZFzoq965314Yh2FSyZkNiwvUEfJQkRcGbwu8EtWSMR9rLVG5kwXMKSRpB7C4RrbL",
  "key32": "2XywXwNM9SWegKKJUURZEe7oyKok8SZ96esCaH68S3nv1TcqbdLAqMaUzkgnhuABmxdHLjY2mqvp1KNcijfFHTht",
  "key33": "3AiL8iZo1sfR3GZwwriu3GBLDTxcY6oMoRBQMcz6zxABKsGtZuuTrPYtH8rGsGna7ofPzrJzsgg56eyqudHoYbNb",
  "key34": "3qCBJMDFDHdBmcSdZUgtBag1ShPmoMekYFJmtkP1y22PdX311m8TBJRH4xq9iN21Sf5C4bvy7z8af8PKAhuYJZVp",
  "key35": "Tb73ooX7CKh8qkx9qEgCXaHqHtUYKjxXMaDA9FgCVNi6b4yvTLrRTtWF3RrUMqdME6AJixWr1Lf649YP3Djhof3",
  "key36": "27K17RUWcR7Vb9PwdFTXtagwAoE4HgPp4wrYCm3vEqbkGrAVp2TjSF5oUkqN1Ln34TPnWxEg8Y3HGFjZaM5Z9cEJ",
  "key37": "FmBfekFULsmCXWodBm7PimrfyKt8AE3NsaHsbXx29aF4ccsH22sEgN9KVbZtQJZFnZAUn1ES3gk2NQ3mZWSNsHn",
  "key38": "4KEj5JcjpLKbYsF6gzP9MoPWABVqGqSJnMQnV1Bcu3CJx598SsWD9ykgQMMEGSH1ZvaGMKS2mR6oJ2EzuhhCST7N",
  "key39": "YbfUyDGtuZecXViY6msAPuFjACZfnFhd1vifRvPEuHr9HSQMHqj7VZzUM9x4K3kwAznR3tvsXsh24zSqnDbAzqC"
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
