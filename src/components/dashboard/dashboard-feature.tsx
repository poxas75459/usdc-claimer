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
    "vsQfVqZMYj7zjiqhfWYCxweWBX2hd9waexF5CYQ7cBx1YdfSx4SBRZSN2s4vAWgxQbsjwMDfPSZrwBTQesGEY3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXGtbvi2NUfCF4ectP3RYM2wfSf3vT5g6Toux3dFRjmdJ5M9vn7i84QRYUunnWK3SyHG9DB4nopPuCsQxTVLLKD",
  "key1": "5XDXQ777EssYwGkajHmkD5GaSCjS4Ee4EgfrRcYSd3uufDdYRXZcE7ETJRsawwcdc3T4YmS7cLSeK8bEPs9b1wmw",
  "key2": "xEQgcEt7qLJqv3Mf4ZQNempCKiAhsFTvdZavj9pPTL99hx3ZXNas7hkT9oEfr6C2GqAjXPEuZK7hGCtQQ3Aiors",
  "key3": "22umshCsQ9Dd6STGKghx7iQxMMAvwr8uU6W6JdUWtbNDyAteaY4jyvvfmqfLw3fjhB4PHGubxhKBjP697q7BFWzy",
  "key4": "5DrcUVZhjoUXomNiWFVbi98LW4bFfsbN515rfmPhhRY9c4UXtSgWx392Bfmnhuxj49gHBy9zysTGEKXv45EaZEue",
  "key5": "49PB8KCKn2YE6wVMDzBZ5EZNGm5LaSRCrdTQr4yhqVVJ414MkTFm4f1zEiQbZa6QyfJxVjeTBE8u9kSeNmgnvWka",
  "key6": "3YMxhqBctAY6vEbyMcbyo8g3WeMtdixNNU45kWYvTTaTjcioeUHBY6xKg2vxhbV5XUCSrUCvKEzGRb9XVdiyKnZ8",
  "key7": "3qvB4mPB3yJAuTpfSWbBaayWbtsfa1sD6BYxkf2YFbnvdUBKSNHWmiPuAQt7cHFtKHQqGC5tWwGogcpYNtWowLqp",
  "key8": "2pcEWts9k9mcHJUEDHM69Kp8pj73Y9N7gbpEdbwdKzRfwefYgVYmN4YVCUsDQeoUDNnKAPtguTsMTgGcP7zuvP73",
  "key9": "3YgMUcww2vd1XD11FrUaYNoETn8GLQ5Ku3XFp5cF7STS9meG4B8m8cBYAFjQdbCwZL822MtRFy9B2Pv5A15rrBCf",
  "key10": "7JV1TA13poLL8Gdz4QiwiLoSGTg9QQ6GvCPdeGUVMgfpBHhDjW1KFNFPmLDd7WX1YRXUFgphrVvxJSiFWeGiQci",
  "key11": "3w8UnzA9DHAaYJ7M3K6h3VX45v9xVYQ6YsEcDTnxGYhCFY6n3c2u2oaquHbqapwwBEVgteYNjeia8T7SApGivZ78",
  "key12": "4PYWRjysT5Pr1WgixrR8FbCu8DWcrETRHhd7DRxvLVVf2EyugFEzfD3w6Cmw2vqM5FJhqb7bckLc1KSPFMQZj3fn",
  "key13": "51DPKvUWDvP41jJCMPr1X6RQUQ3unSF4eMbdaTyAAsxCwt7MS9ZxdpqfDRZ8gPDUGWXoxf4tXhafCRsZ9ZjDXMTe",
  "key14": "5Z7PpEDzizRQn3qmvoRM5eSSaHjFiH5zn94mSamtcbq8tECa6utGRs273oVekU2cKkVAuNqtv96EVk62zULjtYdc",
  "key15": "2EyNgdMyKjQphk2FU8EMHGqpq54enbgDNSN9ELVeHzZadMNd84wUMF4eAGGXyUcXAco5CH963XGaWzdTdkBxUnrg",
  "key16": "4oWjsqCqqa3W5g91Zy9VxRXsbsfRzmNTJUQCKhgsSBzve1GM3QZsFaaAFErqUJ7VvW9MFATvEdAYFhS4Zt3QSYLX",
  "key17": "4WeKYSTSH8BW7u7Bmu9sDpg5FgS9TKQsxuMz5rNKnCT263rUzhhzeU6sqQFLVD1Ustxm4gu9YQbfrrTmw1wDmTB6",
  "key18": "L1ZFeVK5DKcDBDo2xSfpWoRTseM3YPMELta1HjYmJ5jLNNASQNdVtMiMSawVajiZREbiCszAkAyvEFdk7LeFRKe",
  "key19": "TRvu3BgErfUZC8VAs34rRAcMCgMFJdBhebcgqF4WVTF56D4mh2mKi84j7ZmEDFunDUj6ioKWwrzApZUUrCyKsJR",
  "key20": "2J7kiVyvk3GS5LjK5K5Xv6fuPUcwrqTc5Eetj6gmjEGPKa5rqHA9LK3JtpkkDguW5HwVCDbCEtnjLERAu1hajocD",
  "key21": "3CPqrDJqF2gLk8n7RCZeQmXb8YgfLrYJTEUivj86MuJL6CdKdzW9iQCtzAfrsX48TdtaBP3AEMecZfWMXPXKnUBg",
  "key22": "5T5U2cP3MvdXwmoCgkWPiF82RBmQGPrV9pgTtP2NVuhUVcc63D73pahUVfaACK3G8zo3a9jonGfaj2AdveiygTsL",
  "key23": "5poXiga881odjSutVWnTeuKN2o87imKM6oEEMsLLooNXyJSqF5dJFLgV4hc9eq4nUe5yuELCtBB6tuCuRo9QpxNL",
  "key24": "FJAMYkygWtAaayfKsARu1A6zsHSd54LHcyhK4M71SJ5ad7MReY9CgV5ZisDz7LBRJfevPg3N1s5HdAJcrnHGUHp",
  "key25": "5dfHso4HeRTJKtigy3QVXtErVzZ59vN7Fk38yjMSGz3d4mFQ6Gx91UhHVV3GqTp92nTTqzCuRapVqCpbqz8cch3D",
  "key26": "4bih9zFqohdxJ2uZ1TvFLSiKumZKRPxdRCNLmgRSM6if6QBKhJhxWpuJeiRRA4dZkauvD4TuS2CVgmW8oqGp9QnS",
  "key27": "3LErG7NBKYEsPJtKxSRuxnZcyugaSbntMhfPghq2Ppp3WiLYdtq7XQbFAgcu1Uq6o5VwCo1z2jFnh4aH3FDrzFy",
  "key28": "4ea7NaaxGiHV8hzvRHaVWvBEu6HzKAsRhkzHyBq4xX32V2uUjXtS9vaBBB4SGcVFLbwxGQfW3Gt1pqpQA8X4N76i",
  "key29": "3MVuVNw8dTrhEAg1vjqwBBrfoUtUjDmAZ5TTWbKt4iLnRfpHnMRhcwopMsoX86Roy3R7iVtwJfgfenuvaj9aawHg",
  "key30": "61v1PmFDsseQcFi7ZxaG3vJdqAz3rMocsowvT9xEjk5ShqJ9h8BReDvxPvAYYLj8TP2QoJor12R9nSQcpYTcmBcG",
  "key31": "2Ae9ThvXKZ4k38FwLV8XjbAkyta1kSKmEXyjx3XFUDnwXKT7NMNEnTPPq3SBtNhaWJ3Qas1GfkkFoGnaGLbqYJSX",
  "key32": "3KP3eiALkjU3qyisEmnnALLu9x3tamSdb3ZaghyWYztYu6HaRH1p3L1gCDQBc89uzzkDopMeZ2fNGpkNFqKcPY6z",
  "key33": "47no7xDzU1ZxaEzQqBJyUmJSbQ3PcKFoQYEsUJiLaXyf6e9emkWsb5oCz7t2trMfNvyW1pgFjofLLyG3tDfEeN3Q",
  "key34": "4X7bTBvehi6Zp7dQ7D37HHzAJpS9BeN5z6NnfiH8LCzmBKQ3QURSxJWcRZwxrTQ8vuEH8kFfgTY8tYRgrnbJDkAE",
  "key35": "5FAZ1ipkiePxWsY27HyFfaxcdcNj7Ka2WZPRhnUmrjBtTp2T84EiGFMu4KU2j5r1pToNJjWJ54eDJQG6as9nPr8S",
  "key36": "4zEbPD5kMAzXdtm9VCB1ejZY5HD9kWmeQt6v8ZBp59K4KQSRY7rUkCnP68fH63WS5s8Pu2dFGau7zo2bAP2yqhhN",
  "key37": "5UydpqPuvr6SvEWmisZ9ZjhsD7MJ1wGfwYPsVAvZHkWspjZUYZUByTCdHBdnrkckm26v5N4avVu9pXPiCKhvBX63",
  "key38": "KgN96Q4GgoeQdnDwpCNG9PRM1rCEoAGt1zcg7aeWAqKUGtXduFq96oBr2C7nkaHXExM376kBXauMbna5JpDDvzQ",
  "key39": "4f4QqNdT6z6UJBabnUaDaXpGuAbFPyg8GPnMdmVC6Cak7nkW1MWmr5gsrcXZiMs6sCrESKyk4m1fYEHkMg4ZzBD1",
  "key40": "3FWjpeAooUmxVLTnL5FJehcq4KirootMWFQVVj9PubyrjyzYnYfD52hbbVDJ4hVykv7UxgagAWdXo1g8ULkg4XNn",
  "key41": "5kKMRtKmWZ72vjVgQJsHr2gziDxmnTTBK1hq7HirvroeuvV9RxsgxXnZ9mmMi8kqttnTtW9PaGtU21J6R8G6Ccpr",
  "key42": "2i468RJLAtzSnccK87FYUCZU7bNwiNgSfSpzFEGGK3wTNwCwPU5Vrt5dva6TdmWobMeVG5pTfMN35aNj5wosk92n",
  "key43": "Gg9H9icdgmUdQs2gBUy69Zwr3549eBXytcqCK33cScqguvA6J7noaRJ1WuY7iAE9M8JYMk1y9HjgeSdSYpjh2qw",
  "key44": "5L7x368yQgnjHAWBJR8FjaWJiBJMhvq4nybJkerwcCixrSetKMsPNYCyg6qD7Q6nnjzG6BL1bMWYivusPMJjcHCe",
  "key45": "4FRreA6jN4M1W7FEajBbfKmza9gMVmhEedmpq6GuC8gXL1NmdweaqLhDRQWDTAfJo5QNt2LFxr86EvPh8Jsj9uiu"
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
