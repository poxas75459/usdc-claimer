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
    "bnNhgtgPzUEcGxfdcm4DBqsTJ9WBE9K9uctuYrwX7vgaALoVEsRE5P7GdepSJPhdSvkgkiyuP4UNwvji41Pdw3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzgMD4Jy8PQr4Kbvh4B5LL7xCAzzncPmaCNpBAWU2K6bUnL5T7jCSJLkyATxk66mxp56eWeVh59YvgBz4cBvJbF",
  "key1": "4sFuKGQM9UHD29GpWjQ83MXjKpxMVZ57cEZWVFNKu7uKkuoLzKQqoFNbZ9zTgAZBcsUtzEyJae36dn1aub1qrgvt",
  "key2": "DVCwqeUv4AHya3FsAxzmdBup3V3mZVEo1gB8i92Na2kZ6cZd3yL5MDGuKUrNtQ5JWCXtXXoV3szfC1NJkPS51o8",
  "key3": "2QE9F5v8mR534xtjnWYGBdD5wrztnFZUAbccaMhjwhUcM7eByU33cj5qtccwhQZmdzkEnJwZpZCJPopgK2k9j6b",
  "key4": "2XVHFgx9rGs6bPBAxUPTtq9vLBLgF852kq78sBvYfPjg8h1XWRYcFXWJGx5ckCWDTveRQBg1y7L6ZUDSJAd8CN4U",
  "key5": "61NDqwFiZqb8F1nPjC3sSQoK5FUS7rc5qs5pxhVxanqhnZX9SMetufKCBQGzEEE2t6viZuPVBrwpnZfsLrf3fjSW",
  "key6": "54PuVH1aeYYr3mP4NGewX5aBYB1zFy6rVEnqsZLrynQCSqemBATthY18Ee6KcXFLzqD5kWq3W7qAAmeh8jTyevTP",
  "key7": "2MnsfmEx6M7qb9Zs4kG2nQNjd5pVtFMvvmQ7TbaxDqqrGUpK7uVyG8B8srjQYrEe3x4YiMfHN94aLjjv2bfnrUSU",
  "key8": "btLZhrSr3dTvTNn3vtfDc8RqyRjXEp4g2Xnp338Qgw7xgg4zug3yg3tyx9AuGJw1JJjwZcRLEuXoNvkohqUptPR",
  "key9": "3j8MFxcDZKG4Q8jrJX4J3LsW44TJ1GPVacoByktdaRVWfm6nxPEjGmWDcX7oL7yWpNetKZWKj5rNXfgPQ9RNrPXR",
  "key10": "5zJAEtmfdJJAXwCb2B3mNDqfNCjEiGaLcKpKCUidwJz7oemj6shSgFLyRXCtpNwdAhy6pJGtw9zYpPfJHxCDHVuf",
  "key11": "2nPy9c1fSSfWgM7CsQEstp8RmHfSe8UzK92GzPp79ySRyM7EVmbXKdcXGrue5xyNh73Je3KnyRR8Gmab1t6F25o3",
  "key12": "5Xk79NHbksv6c29eEioaxzMxhf89sLkyPyt42b2QYr7hdyM8hbpyxQVddgkJxeU4ChVTC8esCzB68aiBQCyLQySd",
  "key13": "35uoJBuDoKKoeiMH9kuhZf5ntFsi2CCMUBovoiBFnU5trNV4bxJ8dP21ks3Zgq7T9WLRe9Yd8VyPPPXg4SXDX6Lr",
  "key14": "44E8V12gHLkxktMYz9JanfTTndDYtfgsHdj4YSLRj7Mw4xzh6gWSu9ccmeMQcpWpET2DbMMiBdxGA8bhYoPDqEEo",
  "key15": "5SD6x9rcP6BX4qdYuDXTRZ8KaHiuujF2mccjBofvHvC9XQYXVRwmRFZarF6w58wV2GjXRoK64GBxEqXsmZg7Kxo2",
  "key16": "25DKFF6xTeZ4uHHcTWhdBCQXQ9JSPqMfxUv4joug6VWwQECsm4quhyWhza2Xchpu1axCSy3TARRHEtsayfdnKddN",
  "key17": "33AiKFEgVPJQQaV2WCAY5TGaA8RBkL624Pi1yU3BWfGkB7m3LPZVMKu8QgTvb7Tf2a1vUKsgWGN5sbxkEGjxDfh4",
  "key18": "4yBTb4tdVbNRk1JE4RG4JmUcRK6RfBh7naJLgV56aVG3GDvucA6xGueG45qHDjoC9UuAPGzCwFH8tpQ6mTpdBaTe",
  "key19": "5m7kGoMBb2tUzVQb3pmragstcc6BnDQcTF9jJgEhsAfxEEYkw9xATaLdP6MMSyUA72EZhjWg2WqrtMxSquhpseDy",
  "key20": "5o433iAsHbLywVTKVJfaEZaSTE3MyaB8Gt3qmui6yrBrAwvrQtZxiQrK15CYPWzqDVaFss8xBD6sGegQJB4GrbbF",
  "key21": "2xHzPAkxijeNB9NCy7XNxAXZkUfJfeiDhYQ5NNCidgUJYRm4PMEMeKUJH6wRxfr81FxVnpbUob5uaQx6UGfX6VKc",
  "key22": "61mJbx1CxubvvPT9o2ed6vELfGearhhdiaYc7eEkHvViRSxZzoV1ZGJPt6NFUnd8ta9cdhvoFymRLwVcMDshiwZQ",
  "key23": "SwxQpJ1rbsoNEwuiV5as5qWAsZw7htP8RzEAPiLw7pZkwkJVYddB68QXeretM5YXZFnSvoQns9mg7F2HH5wbra6",
  "key24": "5AhDyBCZsyoeFYwTD2v95Xt6dbZ5m3opy4F4g8YgeqAi7FxLYiuM4tRuhhgKX3BLb1LjSTrb96HeZJ4bfrPe1JSu",
  "key25": "3C8oGGqCjzBPnTLYeHBSXcUrFTmwGtxynfaGzYJE7ga2uarQ9ttgyFJ2954cTtrJUQZcTWTASKaggBQkcTB8VJ8Q",
  "key26": "3JpK1893uZR7ojw55LxoJgnMPAGSBcaCXCfTgvAZKYcnuJAhVfUKauH9dzVDVBSYX9X2bhoeQ1Cp8Tn9oPXPCDW5",
  "key27": "28sdY1EEgipeC6mXMLyYNVb8kQZePifaYZ5zzWsW7xjVHaowrwd9NxosJKxJWNWXXVA7cTo9sJLafGzQ3UXmiQcN",
  "key28": "4awJmAXgwGvUDYaPzb8aKGsLmJZejKtsw3uJkcTh3v7iWChH1N5DPm6rGvMAHCXHRZaP7H7tgdsUs6pgxasAPUT3"
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
