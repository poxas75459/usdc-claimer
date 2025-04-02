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
    "3bSLDMs24tZiAmUefQQCdBhP65yuuoDsErd1tQbuW4dkWtMnGzTJqCZzgGf54sFF7EbQezfhptWMNqv6ayWTSAJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mcSexWtVr3GCUc2tnvi9LJfMjWAT8nsSqTtcnCQuYq7CwB5QeoRNv6jtU5DGgxzouB2HfJR68mG9PGt1qMhbMbT",
  "key1": "27NWRAaiU9NKjfBZhZeFgDYPQrid9Tuv169Q1eu8rY8VauM6crpuc59vTuQ4mDg8rWJzXPErrETRaBs7khcQDfvG",
  "key2": "31Dhto4827TYTbVbxJadFNdbxPR8EmJhsrBpYQM9psD3DbMcnaD4qLm6mJ1rH27pvgEF7R3kD1wZZKygDKbKdk1v",
  "key3": "3uLu1XKzDYXWW5Z26XikyvK5dG7MMVxwFFeUQMiXUekoEAW5dF775jbcY1GdB5y8FZR7SrggMirYcKTyoNbFyfwR",
  "key4": "5hMjSq2UpEhuv5f9sAjz1b51kNwbTxhhKYxsuP7TabrC9KaVpZYzNe9TP4kvAcJf4v6DUQCibdfRf7p6P9vYbJc8",
  "key5": "5PaingKT8uGiZHVhTmiNY3b7M8Z3NytY7ad3D3jyPD2KhcerxTD7tsiDboA1m4RRTyQypoFx2TUTR2C83gvSbAAf",
  "key6": "2kFeHJ6hm5nMqHgViz2BPo5SV3TujKYsFLZY223dAEug6F2oNN1szpTUrcYw1GZpLoMvquze7UMwi3rm3A9mE4P5",
  "key7": "56GzdLCXacPw2iQpQnYQd9vuioJxoJfgoavdzLYmazvAQ6yGohKj2cwAQ3X6s2ydvbvZ2b5MoptCE6xkTJrVQW5k",
  "key8": "2UoQMeb8EgNDTXJcYz1y6seAPwzBUHvVGMdq2t6BBrYh3sP5jeYN3h4rVv6bfF7CERRsNgtYq2DwFHTxkZs9T935",
  "key9": "2UWSBEZGYBJTZR8oBwsw12GKCzho3M6NdLpd979pXx641F5rKPxp5fJC448gEPUasQGLvNwM7qA5GVkX5SbhoRt3",
  "key10": "4GrDZGmE4fHAfsCuG9JgBbWuLwaq3bjZdmog8FobC28tGRQXUn6S85YZ8rJrFGuA1FL5NK7MjGvedZa6SYdaDHa5",
  "key11": "47vRR62zacjcmzuUV3bzDnvp8iW9vxmSSGvniBJhZj6fZQWbSipZbiMiU3h3KkJXRNkpxGVC8SHRJxeqZcozpd1J",
  "key12": "2stCfxfKXx9zeV8i3Din6TZu95nWzbwrAkeiRhBuzBSGpWE87oWxNgwYRsDEusZRYzbDzwHi8jzJJkkfLDp3YZQg",
  "key13": "3bM6JYs1GFvTAkwLd67n6uVa6apieeiSifVZG6NFkmq8ttPBwvn89nVm7w362bEVSFcv8KDnp4UntP2nP45WzffE",
  "key14": "49FfejRJ2mmKtY512DME1H52DhG9iCDFqbtcifbcPzY39FeFRXDcrx62Q6jdP468jxS4R2bH9qfeyM345kGmz68c",
  "key15": "3SgVa3Am7sa9YbHrE3U46qpE6Bcd4UHZFFTtDdochsUr9nQ3AHPdpzUrj78DYPjcN6CDFVUwZcEcADes4CuTjy2R",
  "key16": "4XJ7PSsctyB3uGVcdrZmAM8UXbDf62jU5Q4aimktjs1rXf8zFkAgnpDeYdYx5kJ8HEfDi9NZaN6BWUz29AeVeiwx",
  "key17": "3Eou8CbVerKcCC9UiyaVMnQyhfn4PbvdL1Sq2fVvCdNPu1TxfXD1cdhDmMwiK1wVmvjm3GiKct3j85rWZbdxv97j",
  "key18": "3rb4yyH6KgGa5QEudnmCLiKQpQb49xQ9ZUt2L9DojpvpzSfNVpBVVmfU8enhsXzWxx8CT35wYgzjmrhgpGrKyh3r",
  "key19": "3f8pZeek8jfTfFqP617vSoZL3SW46ivcwJsp6jRrLizAQnrTk7j5yC7CFxyqEJRa148iVrXN88je8J5FDd9yAaHq",
  "key20": "3ioQdGrij97AdRP3K4yNoQVD89TPq8K1naQ99aM55JfUZFbQoontF2fNwDUgT8uQKMPKCXWzokq9DTu4cTx658Xt",
  "key21": "wZ2EFquSQF1qfHctGgKnUerzyHoiSJhBhPzwR7mWm1t3zzBuHM5eagz22ZGDb522fwK7kJz4tosZjgrhQovFEsN",
  "key22": "Ak3r95oyTi6CHrxLmo6Sz9EL3SvgmYojQC1gDccWgSBSYF8QJrMAqvGbQRnhW3yAbcugUJh6L2NRo5ZVk5BTeTr",
  "key23": "2gqzRq5Z1Pk1mNBqWAYkwAt27qKToLucAQKYPpdT51k6w2dbJQCZN4m6YnyStL8rARQT3ZZmn4t3a4dgYyoVTwn8",
  "key24": "5w2h871fo34DWoJQsAPgBDe8VtSwUQo5rA7EjL3p6KgYNEB9o7xCNP9m9pwbDbJkMCxVR8sRun7rz5roCPrWV7go",
  "key25": "szZHgpFWN9sTT4s5cD3GrwZSN2qvtT7iHqCgayYZXeNhX3aBJvTnEuNnShHdwz4FNLdH5n5RF6DSV7DnE1pv1Rd",
  "key26": "svUmgj4PDy15yQ1wGP4coVjGJwg18cAWKZdmmjTxrhqoWGiC3UviJXx2nKFovyLpJKG6nQSF5GTsWHH86itmgSW",
  "key27": "DczVv8kUbmXvczKbQPUjk89defagFFoDjASgcfQbseuJKtKq7eBqCkta7pTogd34QHzwskcFcRniMjKAtgtfHgY",
  "key28": "x78vPg9qRZby262MPkxLfqzaaZ9DjuNJ7eVGcrvbswVmqbrQNuS79sNbNcjrSXcVLoGXePdvymhF26SAnMNDAJ7",
  "key29": "3bGFyLJoxo3sF4Cb6LJR6EtjPGJ44tgwTrurtXqJWjfwsLxFsCT5VU97yFxq7JZeGiRG59P6nMNeTsJKQPevHpaK",
  "key30": "2uhwrZQVxFNuzPmd4teSznXpVWhhUfJoPbiqBCu5y9GjvsU9eCHg97LaVPQDk9P7oqH6TJt98VeAVEiRLhUuEPdb",
  "key31": "5e5GvRfY7tS4JsikjsUBgAvEn5KzStC7K4cq9T1pNZ29nJ6xJBB2YVesmTp8CQraMN9dk4eD2xDCUZ86tqupansq",
  "key32": "2oPVHgZugpyodDt1m252RxghnzKjVhcdy1S7rCRVckiSEy2dd93frVCb7VUHGvdTi1P37nEDVeoNGhv11HR8HYvU",
  "key33": "4G69iUaBLX7iDwEqsj8VD6nhZmpamm41Z9Sn7bmQLKcMnduB2hi5bq4UpuMrRM65dsztyQWkUJzMDkNg7LWgKgwC",
  "key34": "66bKo4jTvXBrEKyPBMcrnQPTDzWyzk5uWJq4mT5L25wjfqKGjs65FrkKYt8XhfpWZYzkmspZyGvQ1GbtnukSDkuN",
  "key35": "3xK1YtMnjSq9onTv6JmayXoED8eeycTXQtTqyaQYMxPHNbHSjpvaGtMKJc53Va15bCDn6sh3zc2wnXjMiauneBiE",
  "key36": "hPPBdSaGiVxzvXH5sSs2m5LY4qi66Y65eur4SmNDJqpRJEi5795caU8oYRxmABJznBBK2qZ3uHc1p7PoJ5Q91Cu",
  "key37": "3jBPvwmzxn4uKtucJ8ECnWKA5d9Hv5qkBUjtkgpKex5z4cFikXfyaAfgbU5dTZUBodmZzQLw3ztdgBp48BdjeVV6",
  "key38": "5PpL6X6WDqzkF6Y2Bj1NThpuZVSfKKdzZNKrs2UFLc5c8pk6R3QeLoZekBBgGUz762JMfaGoKCR5vvR7dN2cgYHr",
  "key39": "238P9iYiwrPzXZktmu58SxroQyRFuTU9QvWf6yXF5LsEhSogJithNKLuNe5wcNmTaUFemALujPnMnxFdmgYQJEyp",
  "key40": "Fgdk4ADAvP1bq4ncqqxx5s9DZ4MEVT2KTBzrUNQLGH2Ybhv7AT9zp7vFQWDn57CMGWZvnU8AXjNN7rEvzm3GEKn",
  "key41": "3x9fLgny7xMpXnhpMUGsJMQu7x5KE2zQTJX1npvQkqXAWdAmTYNKRXRYV6jMHWcz9LwTmB7ztMHrRpzmqUNtkq8U",
  "key42": "4S8augpS9npu3yVAZq6mN37bjMz3AxrJG92dQ2uqtP4GtKaP7bvvZH9yd44BKavneEan66ZD16w3UqEfYf5mWcY9"
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
