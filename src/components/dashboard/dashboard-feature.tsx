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
    "5GWeD2Tny6xmGAWTxR3dUw9ynPCS8mLkC4iq7Rnhut6L224is1ApbYiPEgj77ubufASjDwVLfpHEAxK1z9XsUbEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLDzEiSZR2bm3CtEWQEFkGx9t6ur37UTCkgZennxzWQ9v4YD89nN9LN2Neuva8zDDCCERNgKSPSQ5EmmK1nqzW6",
  "key1": "3uKb9tVLoNtMN3MVWCt4MqEqUSUuMVNZFAjsxjaYv9AyXK6atX3hUof8GVZSGLAnwKRjH73JsrGcdGBQoBadQW4",
  "key2": "42gbNVJxyQPJPwa8ba2QjZdugnpakQD9UjLhw9JkRbCb2y6Hv15GoYi5zFWqvCErgdDTRiquNrWfsJjX8XGc6MLZ",
  "key3": "3NpQRHytnTsMqCJWrfhCNNxQxvMemjjyXkY4GJ1jy7okDRpCTZuX6LVHJfJHwTi26ihXcKhTmrkbJwZcqojcCkEH",
  "key4": "DShdzxxAdrjMoNbPJAozJDbShtmaW21enfj5qJffhRDcFkKFTBUqauq2Wxv2ip5xevmrV8UGnnaZhMUZtZ2eLHX",
  "key5": "4L71M5KKV4kCBmJ8oLqTjsHKp421jxdy4Qh4SBJGboMjHjRcTgebhQUrRUnYZ6GYVYvCS8XxHLcn9uK2biGPWD7h",
  "key6": "3znFsXcuayg7VVhAFv6erCnTP326Ee6vpFCztcpFcyDWqSr4izTsi5jdhHw2eKnSVDru2xJA3Szn2RSNbad5N4Lq",
  "key7": "5BKx1tUbMzdsD11EwWoJ8MfvuKRXRtn9GMC1yGir3Pu4kHJE6175HZ8jEzWy7JcCKQew7Z6CLFo1u6xjS8pSDE7X",
  "key8": "5mZMn5JdSFXB6q2v2FNoH12tKRbT45JscZ9SfRprf4Qqh3SGfeURCx7GwLG5YwMBAd99ozpuDxqddkCoS3rRCL17",
  "key9": "63D69bFZn2zJwvfXCwr6zi7PZXSxv3LNci1jnH3u53dRAcNbg5z1qaFVbqp14rv1gePdideQNix9bXre7r77FUnZ",
  "key10": "2GThnyzACstvycTLdztefPE88iEwDQzTre7292hnfdQ7cd8Rsg82QB2Wam2HXFFpn3zUFiE42XZqKr9xt5qLzkEm",
  "key11": "2g2dQHdfXZpm2CWzQgDX5m3RYBzk19nqUTL1bqCxQr4CBxJxzG7EwBevyQodCFua47Wq4m6SptLZDrYGjeiJrLnC",
  "key12": "43Qvd2UMU9pJWprM4wPseLHjRtXdCvKaiwk5PS8ZviCUQWCjFWmeNyvmXae2jmoSR8oQkWP2q5gQMoGw8J4PWBWc",
  "key13": "4GBFiF5CDwxRdpVc6pVXCaYAnS61GZF2ePfU9KLbQ6v3pyS9GpBHhfGy9whM6ZvqCpT2RkWspZCBG7zLfsq6ZWuk",
  "key14": "3gUs5jNLaHDQQf57RW6cw26MpNtuqjcEZmDNn6hsktDiwdfdw6DXCLoLN7omvcx2dM64GjYLmCB2hBGo5fpRKfEJ",
  "key15": "3hjQnmpLZtAZTThr8cmAy2Qjy2qJdL7HM7GsC1vUXt93bNB4Bz9zxRy4XehfNGrfbpcPFUMedYcJzPmyG1joh9U6",
  "key16": "3g2DtrDTn2B9EUef5mLFUTmkUxMVCSn15saTcTWXR7x1RUzyebbRCmNW32pzdatp9Xsj63DEdMEerDvicMjPaSUh",
  "key17": "2Vrm4ZhPJUSsQEwBLyHhSYtEqpNUhPKpc4vqifT5wpv75ixD4ALALPWqcymdNiFpZ7igMAqrPnsyXip6u3sq284",
  "key18": "2iRHKoUhHUxkhD7CVnYPBwuFVZWXLWLXVuaPMk1sdQYyFJd87Q3jpwJHhS45RccvJu4km3JabbS1SbG76zbgdfoQ",
  "key19": "2u6UDxVfbbAnUioEB6J6JZVnuJzTV9ub2FVCtcugueCMYhY4E6JmYF4LTFrEt6wyGH7BmLv8Za4oH9PGyR8MfLbC",
  "key20": "rGQQhxXaWgj1g1zt3BWgWcsEU39NQfrNNLDXSTxR4RAFtY1C2yAD52LR5T5Lf3kr14NkHj3e3JQrPe4uKhEiZtq",
  "key21": "3psXYdenziBxf9gSmm2hyFKbhEnEkV4qSSLC7ChBfZXE2VFpFLBN2wQM3pFku29SH8F3edTbuhTmw6BfNb8FeYVc",
  "key22": "3Q5TvV5f52uPcZsdewsMTtwfQLxzwjUc5oWLg6gUh3nBLmuHHat1cft8qQnAakGGRfACzc5rH24zBZftPV2swZAw",
  "key23": "4MdAhAT5vkyGB784uXwYLQjaG8na3H6mmevfkkN5Rju21xmSx67kWfs9KMqrTJdSGjTnLUSAu15udzmfGy5wTwRa",
  "key24": "2RGowjuHQheWvrVzHS2eNDuSS8BBMwd5rhL1do6CTbMUDqAobGJRwPvqyqJxTPoMZsRcKXTS5cfBxyVi3cTPCJzt",
  "key25": "4vpwsFyBE87rFtXBZRcc5eDF8PQ9xEyGRnBiZykJaHNGtoNQzvuVstAjX42oayGhcBuPmDXnhmCVVmCdkS9oUv8n",
  "key26": "2Ak3rNyWYj8xyeUxSjR9uECuRRDREf1z5MXvt86Dd3skdFXRJ5udkMMkUjPxzcKBoyQGkzZNwdgJQuqe1naPtoJ9",
  "key27": "XMyBP2Y7KssRfxshDRJpjLq3JXwumFJqaEKLXXjb2jF8xxyEn9K2jf1DzWnsuNq5maSKjSQNucKyLi9J5uZsgYv",
  "key28": "2CmG6YHLp8pVjRh6eS4gEDhott555Xo5eMCaRN37r4rjb78r7Z9vjdeMecW9vcxXDU4ojbMhx1FvrdB6xwAB6axX",
  "key29": "Uv3cfp1MTNVroay7Sz5mrurGkc21b7yHDtzJSyPnXvB3KKYh4AePb8yMtdEmAToVxv5PVd7HsGsUKjw3wcTHjzt",
  "key30": "TFAszi7UoMs2eGvX7xHHHEEpeci9XkapS4GZHDWqPs3a9MyH2Ehnmn9vhTfgAuxLC5odEBstFNahSDA8Gm45oJD",
  "key31": "2PtXTzAXsjvs767tzvr4PYk8gqxq3g1Kqqgdf73rpuUn4FZBVFKniEka5US4WURvAAuSGDUk5vJi9WtBR2eDDLEe",
  "key32": "55hh3k87zcJjJy35ggibGj1soGCwT77brxweFVh9AsSULdDXGLBw5GzpsN5eXWAdmHE6XXbdcp5UQp4MC3k4pLq2",
  "key33": "21oCensTViggcbwyvQL5Qz3uJq6fAnbBRtadTXR1e9xvhiztGq4kH7Mw9SA7xXNTVfyo3PTmvhQ8hKHLMvZJSQa5",
  "key34": "2hSD81CvLAKqNnJ13K78tJ748KydZbxZhHWY9mwYQdzB9ajxFpFKcHFk6RkhNcRXbCANPLwuEyHaTf2fPCm3V632"
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
