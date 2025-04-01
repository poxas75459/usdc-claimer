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
    "3aJkvmJGZCWGJDgyDUBHKEGf5vJMfS3CwNe5vCYwSAgwV1se2x7zQpjCGmCy3oW9HZtY9L5fpX2e32uLv2fXvgMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43X8HUzyXRdmAQWaFneHTYUELkDnFwdzDUytkuhFWDvER6wLgPtDfWeQEkycXYRZtw9eu9F8dgsoDNMY36xnLheX",
  "key1": "4SaiBYF7QRi5hDt8p7iCzp3NPReJG3GWhWt7rRKN8yhito2K3xsNPUUawTNDH6pdDgxg1xpeq64dLyTB7LFTbQ7u",
  "key2": "PETGpB5kiyj3tjYYE8sEtDsW6PwRX9djGePANN7pDBcxWvA77Yv74h2KczBQNfsA62NdM3i8Dc4kgr2dWEYL6sX",
  "key3": "EbnNi7sFgLgqs9Yj4nSZuopaGLifQZYFj9mMKGox2Tw9w5uLevPefwCdx3sM5erY3Vz8BgDn9uGJiJfHPfozkcp",
  "key4": "3XZjA4nsho3suDruDZypDZbqsdLHCBmGLEfXgMpgfTxyeLSkvRdWC9k4nAUGzpEC6PGKoWFU4vmcC5pATGpoJsJn",
  "key5": "37yDZTR6nsif7wHSQVv6d2qSvSM3VJEJ9KSoYjKEAmH1utSBwKc6REVCJuGaAgpHqdx79eJWMxvK2ZWXwVWhKTsa",
  "key6": "4NvFt1SSPB3cwznyzGDaHDp2HMH7jczFsK2sYG1Vwq15hRrRry2HCVSyx7fFieNupDEkKNKB3FEXFyCfo5k55RCW",
  "key7": "2CaGQCH9WKdTi1gt3UvVpVBEUhcrRC6LkWWZNzKFmF7Ya3Bz6LzMGaGAm9xknQCSzbPsuUHkJedTdGLDRzKJPPFS",
  "key8": "2jKzaw7w7PkUJ8NJtXf7dmczyx7K588EyWN6ntn4QMH1w6LWvhJdxLyeVJUV7DXg1zEEYs9HECbQBpGvVPk51Ppn",
  "key9": "bPhBf6bMkFvykGcBYzeiHfuqHVFk8uyexg92aYJZiix6NvyizquqTJpYaTDKmmNWjM8qrdHjRQaTcB5BYK6pRQY",
  "key10": "4MQSCqMzkHqrcR3E7tywFsiXzmyNbFx59rZViPKU6Ws9AKafU6pT6P3dHE1NcaxauqpzacDgG5HyBp2aw4MMD84F",
  "key11": "4vyeUqDFQtTrBNgBjYbEajo3RyCmo5kU1SxJERYarkNdYgx2L2TdRDz2LZsQGGwqqLmiYDJ893XZCXmVmCHUYgWi",
  "key12": "2bYZ7HeREtzvgBBbCZ7MV2fQuawsTiXuc3o9scujnRW9rzeQ31SfuSKg6ytoJcHUPn6PEzgJBoTWhKEuSSS7Pk3D",
  "key13": "5fe2y9xARuBSxkEunrSoxi9qJC8CYzv5Hjm53gGZaeTYw89UHD6mB4jfUheETN3XxzjkSRUJMKYwaf2zdsAN92Ax",
  "key14": "2ydhvmzfpmzDW3ixCV6jcgSWwbqei32KPfKzyVsB5SbPvQKUQfCVjjHDFJNuiZzcdqhgJZHxQgmMf71MhgxHS2Xd",
  "key15": "2fdFcRUti6ym5WRMwgXpNnPW8UoWW8BjFm6wEN87k2QLxm17FREjpmu8fHGSsVkVUDmoFL3yNdxTDQYhkSprSU6a",
  "key16": "58DNtqXB4mhFDPaerDoy4AHtoJPZTMdgXPiEdEi9RCrSvEkn9B9HyqK1MpsG81zbzDHE2GD8tRuZaGEV1N7Ukafq",
  "key17": "233Gd2LFQsMLVUYaSHCD9fdNy14FcUuA8rAegyXCxai94K33hpw2CJP96ABivnGqjjD9FXxaz2NkctPCsLpj3RF1",
  "key18": "1mKL9NXPzynP9yHPwuRp8EenCmucW7tCy1NRvi411rbfh1k6AStnhYn8J3nxy57dUNnfTTXhF2EPHz42svSkDui",
  "key19": "3mBvkd64mR5R2vxKV52LZAxTwi7Auey6hKBVFx4qoMaFrZ7uEBViEztz9uqnNZCGWQV3ie4ZFJrgt4MBquRRKVHo",
  "key20": "4zPzMZArM5WpCUPvvs7AE3D6Wk2F8GjwLBkf4JbAUFyFzfwSai81T5eneuUqRqNFJU16hQfBz5jv6pD4qfFGhRG",
  "key21": "4hvgMQwzRwmaoezkbUG6bLGTwYPUFzrzm8su3SQfNyj59qy1R2Qy9NqUYj3TkmnCqDCMsYkzAumNkvWTY952PnYu",
  "key22": "4jAZKMo8F2wL8BFLATZ4FqJrG3c59dfxbRBdJb7FxiwBw3tWF2uMUWVURE4jveF5n3c1q2psTVgC7dPmrXNfgjQc",
  "key23": "2uNCLp8tcBn1HpSzKMLa3arCQY1hHheArhgKZznQoPnPRrjU8XhaxEdDSGbgwBvHRvYYVpbm54nQXenfnqgp1twD",
  "key24": "3wgtucMPTu5fdnupTo3GXPmArjBLwJtTBvNCQG5oZZ88UC3cTe7q82UgsPT4aJ4PpKBABmUDguzPUgmngLbKCzDf",
  "key25": "tJuDWgdjyfSS7gDUUG49hFS5K19vWeA6XX2RmKWfNFwS7C5Z8mNoBsC3kDNKFjuBh1hrDKf6CPDcMc2QCcbknXW",
  "key26": "5DukBqBRGCceYckV7SMhyyVe8JCY9RoRDY8Z9YpLoiqhViqNJgcSZfACnm3TYSKaqQFdj9vYFntHQVnVzB1sSfTG",
  "key27": "4TJ3zZe9rH2DHxdCp8W8ZsPatoXWtVEcP2fuZyVvWfM5u1sM7yZJH8iWvAqDhAsBvWRgqwSsjQXfCAHKHABZTVc",
  "key28": "2MMiT8FDHMSLtDNjU5mNVL3fXCBhWute7SjBU9cp3u1RgCrsocVPaNN2cDtaJsgyh8VEpngKrwBKFPxzkCKjaSxX",
  "key29": "5wye14CuvLBem6my4VP1CjtTv1vVDvSE3GgyLqBnwDvEC2Wc4qXnysZXSbxidEscvsxDBaRb1DviN6XLcSYRTXha",
  "key30": "5GSNpxWERTBmLZzob31kNVsPF97KCwrvxD6ewdhF3Dn7HiupfbMjf3XpvK38LgfKghnc1gUWEuh1qeiP85YeY9jK",
  "key31": "4uDCX8GXvBxnHszctqewQsbsJ1vjMUksp4JddRrvbkXJsAegiRapA5f9XucZSM7ScYhf6NBQ1ronwGmv3YW1ptBe",
  "key32": "3LmVWKWtQQzbRTeyZBwSac2vaoiVuryZt3M5jWx3RQZ8wuo1kfWMtbFGgRo7sJ5qAtSDXutHWwt5Q9jqajyiU5Wt",
  "key33": "6pTNouSfnFbaQsCMMrj2Qid8afv9hF1En2ygimnMqhzZ8Y5Nsmmf1sie4esysrFeTScbXcWQPLrCcvZzvXsBbdT",
  "key34": "3Ro7CdAKkvG2XJGtCxeeRpR8SwFnqfNuC8zEbByRSPRBirTn9WnHejVT6Vix5DYhdapz2U1mvkZpYTRswpEt5bRr",
  "key35": "4Zt7cdkogY7uT8WGFurA3C499mk1rmHjEg2vCqnqdHxNEbPGTXFiBi6uccgManJ6ajYVji8ivduK9XA1pg7fHEX8",
  "key36": "5iGTRNW1m2oTBuzrGFfKyNJsk8ry5rPBVJTNNBj7PiMgmTfKyZ8gpHxjVCMAiZjKzThdAAtcWcBWzPSpzhJyKa17",
  "key37": "55Hj4UgfFoMguGLA7MCueiRTdLRZ4hZKGrZibKhqgArZYSDKYGwuCD4WjJMGFQrrAuF98vm1HWDK4eF3s9QYPGBM",
  "key38": "2rx7Y9StUBbK7qk4BrRMEsvuEfE4ow8xfqSMT8DSrpbCCFB12JUgQZqXRLngCLV7MHv1C6QYM3VS2cWauz4uV48J",
  "key39": "4kCXuJtbnNRYvA9m89o37UYZLcNKbsP1CR6jhiUmchHMFrEAq9Wb5aaxnsmxtRZduEjvbWXo7LqGX2PwriMudZHZ",
  "key40": "zj9DvyCetxEPfspD4ijAn2VA3J9qvSWP8we5j8UABMvqeVSBoSaTDnczu7QW5cjyfVaCeswzsPY4NwfwxDByFeh",
  "key41": "2UF9fNuzB4FyMmVfkVX524myoUv4FHv4pGzzxpkmFffjcJzcTx41f2PS48Z8TeSDqUDWhWhbJDoLk6KkK3evk1EK",
  "key42": "7dBQaHZjSNKsTZtS6xaUYHeeuhD4oAp7VmtbqdyNbidXbFnPE91M24YxKDjsMtYRLcXRk2VhtGFG1cFm3wcJFU5",
  "key43": "c4XPPFCHYn1RnSgNZBAqckAPSkDiReqbXJ6Mrze6DBeFsdjXLFnrdZSW8YdtFYwH1Bmdo5zpCNwfHmMfkHS85bJ",
  "key44": "2F2V6XEDtFs8jkHe8FZC2vF4iFumQheZaGEYpn214cmxiveqDh7eMggQVBa1hdBrmLPnjaPFhE3kxffuoDhWkFRo",
  "key45": "5FSAiGepFxvtSmkB1dhKpCvb1cvZVdBjA9pWakhRKwqiUTDEoWT9rZJLkhv424nh7d4H5ZYBRgGoTPF76DcKzT2J",
  "key46": "45hMacP4JWGdX8pKExixrMyyvbd5fFDmWDhb6zKjneKxSwfHoxvJCq2cY6YcpMhETPnHJ21DRonLnYCntqVQ3GKZ",
  "key47": "4exJ75eLgDyu8LdTbcbJXVtfD1abSFnWAqvUzvX3qzdajTWv4jvgEjGeSo84hextq3AdBBsdfLCQSsgjg8Su8dPr"
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
