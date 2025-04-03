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
    "5DH9NaEJ7ScihvTjfhj3STvsDDoRyZQcrvK58Wz3tECVVcM38pwCWHkuYp7XJFvdfF4QNRPrax4ZyGvSPXQE2riX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPbTb6Y32B57tUc7adw4Zh2YoU21kBxzsWEFmUTPYwnAQqMYhthqF9kkLkNorhoVfbeUumoV3i5DCT2gygrnRE1",
  "key1": "3dhiAwdLkUB4rXCebvVETdP8PymMLfmts9Ze1qnH64nrKVmoAKjdx98b5hrF9pxE3o5gnMHbcw6TXMZTzMK8Hxqj",
  "key2": "3sv5teD7bFDx6ZegYJFagDwd7iUE9143ukWLmYxea2caWNGRJq5xJhTAUfmpKwMGMd3uAMRwxeEuZVUH6hqfWhTQ",
  "key3": "3qgzp8GMz976k9QwVxiAzr6FEzzcJgVDZkQfGiDEaCnrwodWevCL5ctFP9yYHR6AjG5YAJtQyoVdxuihF9iLEQwe",
  "key4": "4HFxPrBk4eg3kpa5gjCHcQuWaPUMm854kWEdNJvZRCU6ZvxjKmUekQwdHYieZnJbqz5ryyDLJdpnPgn1YhWHWkoq",
  "key5": "51wep3W8J54ENBs9oaduBBvCn4YErN1S8qwzRz2QL6iGEmneRj1BhQt16daQYY1Kt8MpAJ9cqLRdHDoCyyq9tWiR",
  "key6": "4FmqQtMaMBq1o2wd7KezxicsXwNX9EzuF3rzU1sz4sqMTRTqcn5817gYPR54gitm27EkY9Vp1CVcJ57gneyBuRB2",
  "key7": "4Jmy3BbQ1kb2EderjhJgePRArZV5AZn4p4iSzvHugzZ2phy4rSeBXVFuvdzYca4A5LyaGcaYCLmVbd9ZfmpJ2LBk",
  "key8": "5TzxgkpuVVrwvwUKnHXuKQmQa73GCwpJobHd5G1FVphoxSHZqPRM4fJrVKas5xJHFUSMcqt8SSuF7LzCeyFtkwFZ",
  "key9": "4ueWt92QZRTtjviMRSwZiyeB1e3gHge9mP68QPwVbUgURRgMLmr9unDhLgnMMJPfifyrJtGprygspXkCkGBPieXG",
  "key10": "21JF16U4RARMTEG1ZZRFjezXtAMg8hSw2yw34yqJLL1TSE3LyuVh2cbdXPSAqeb2cV65Hd9398zYGGDcryhkTJ52",
  "key11": "5gRhwm6sTfVByENMYX6WXZjM1VQT99XCpMsvj8JR4oMCKVfv6CYqGwaUYoST58a1ARazhasPFnSP4CiYhVtAgNak",
  "key12": "3oBPpjeBBRYfEtrGm2UXTUQYRVnWpAEKUMmH38iGP7g3fgATka7SKkXoQTHCJ3oCGbPimvGcczCZbppxvgPakdoF",
  "key13": "2hg8GnhejgC9WncJWi28yC3MGMRvBR2VYeDdJayU4dGtxFQdtFNL8iFBkPxuiRMLYfLNJ5FUhWJsawtNkYmHQ53b",
  "key14": "4mCgBqaf3CKh3RkBZXNTBZcSqhVLsx98EwMd92jJ71HY3tG6qi7wT8qhNbtehB2vHZ4rQnDMm489T3r4584KNhTv",
  "key15": "4xTBLbAwqDKQ5md2YANMqhq5XodtYbf9McHiDCQM79a7QjS1713MXNW9nQp7LfCXhdRnyqDkzmR4ptx9P1yx8S2G",
  "key16": "2nsQJiu3wyNcLzv8T9DMyLsHpFCMDsUscHqLrfpmFPYNmVPQVZXkWCucdLjmqaG7qVpuvUGKdNTLd7AWPFWNzku3",
  "key17": "5hNySt2bN8y5P62i74RfVTw11mGBHgufsCozHiHg76R8utGuwVT1VrsEWxKDgnHq5qyDtEe2gFcjLpafeN2qGtqQ",
  "key18": "5sLTLGLCgV6M9LSXmPV2ixZhZZQ2Fz4UZApFnWnGZJQd5CHT3DrjU9fbfdwqkV1g5pP2zTsHAEqKQki3rXLXgY8r",
  "key19": "5m7usqq5cGUD3z7cFp9HoTvNqwC1namUiRuAJ1tyQF2awCY7WYBPb66Xzt9vpoqMDjE84gkYtCV7YxQECPgfqNjH",
  "key20": "4s9csD38rhgUhFfhMb9jb9MCrDcjiJ1yHQxjoEDd7SPxpZBiuCD3DHcapsk6vZP34XDK1igFYYs1NRmgsqbt5hbX",
  "key21": "3XJHtazNikMro6j5X3LaZgVxR6tZd1qopmfLrMTeFm7atVsDY41qBL49vDayicpX3piNo5duCdrai4xP5eNGhSrA",
  "key22": "42sxP3aNXsH4gVM8BD3ErFJ4MG4tFMKPuoUoiri2NVdmdeMm6x3Eebzb86wQZC9TE1Ln7SMXspcSR8Sg2XqCQRcA",
  "key23": "2Qi6MWq2utmmAFTK8iY4kFh5FmxVzqmFLoxZ11VQ4NHpeHgViwfznxg7EPNPs3Cryfe2tWwB24Jgq1p74BXJvdaZ",
  "key24": "3B6kf5PyfnErkb5qQLfM5tEHaW2uCjum8dBx18cjxAjaCepFGyU5crrXSF2W3rEStZW2f7v2emFjfk2tA3kHuoM9",
  "key25": "2Fd8g8p5TJwRNqXGjyHCA1KeC8BJwDNvtdnuMkniGK87zrKNiYZZCnQMPaHd1iJynY1tBCxgjdp6CgZn8Cfzzr6Z",
  "key26": "5b3EG1qhHvbnqYYBEYJUkzw5VbgvyQSxLk3rcy1dpvYkHhqpxQrLQ8craMRckVPrANYpM1jonXF4rwXYn21h6Q1a",
  "key27": "5zj3uGKAHdoqrAf8RCRcaS8Rd4Poc4cWeuSzZKXxfWcjKYhHybrLJByBNP8uGFfq2eHT5SBHwJAC9Hww41UrnZjM",
  "key28": "spro9D51UzEuYcVaRcg1efW8bVY6MHzYagyn3oSs1ryLrPiLrMwzkRrcYKLVHGsoc3NVCeRmuztjmE3Ae4j1Suq",
  "key29": "Y7bd5gri5sLoFTsG2M7oEgVASqWiUhDpRMwTJpivCqc86EXvg8DcNLHUuxkgZWd8QkKpYhirbohp38kCnMJYWLi",
  "key30": "3HzDDxXKmG78YQbCL9qPBW6nESbEyTeghfaRKwWVkccLyyJUQrCSzQwCdFZJfZ5UVRHJDtRheLD6oLhaAP88Bby8",
  "key31": "4E9JV25LmBZXRAvxjoJXx8v5yJPSXyrkdUvRc7sD2yRcWHbpuoyMUcDsDZog9c7ccu8P9cPrxWNQNjY3u147TvRg",
  "key32": "z7hgX189H693wrs9VzEXrUyja9Lg16FwMWizXx8HBdaqPhjhyatu8Wm1bMSbyyq5tdnD2pYnDQPoJS7mVpyQm7y",
  "key33": "2sDCyRjJpKfpVfRvm51KMK8tCNpaMi72y8F2mLpLoc3iUxhPEpDnb2fjcJyiwaUrq68Z53BM2cWihAi52ZGoi7fJ"
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
