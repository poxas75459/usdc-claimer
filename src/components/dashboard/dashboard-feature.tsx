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
    "3ZkJxHCTcJCEK4YVnuoQH6oeG6xoXe2MeskmBvjzGEY4hzYKDZXsJZh6q7jmv6upjAtXX4JRes5xnb1x8Rje5NvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzgT4QzkApYrp8wtw3iESYg5wWwXR2YCzYqdea51tAStPqd8WGSar53bnDHFkA2MMW4nx1P9PDP56ZbFQuU9Y6g",
  "key1": "26ASkm3QxqxrsyoRCQA2tkKtknWAUT216e12GRPg96iEvC3xnnomzpG8dcqzwBjo9N94RhAcK9hUhuBeUsA6uUL4",
  "key2": "4tNzLXy6F71VRaQi36VLQAUCqDQyWKys6tPwh3istftZ4WE9YyVvoVMf7c81LKeLHtySsjtMRgmr81sxm7udLA6K",
  "key3": "5BisCPE82bgjAbuFp6Cm9dyAzwyyitoj3ueRHRRyjUKhoHqRaCE1D8H6xk7gYx1cQ8AQPbTwXm6cZvL6Df4HdyZp",
  "key4": "2ASzF3nB5eccq4ZP79rsBvrGxrPgDH1XFRJyWnJbMguoDsP19ksEP3peq43XQwAfDVVERfYzPwwquohcn8unhtaj",
  "key5": "5mzFbMW8p5HCgN9SRLpCoG4pqC1qCwxaR2iaMwnjwwM2dAUCMXCqsx3v83oBhEeJtA7AnZgs5Whe4RWH5a9gUPGP",
  "key6": "2TL78HmrXTFkHTdg7hAdHohWtnaC9bB2tADgXYvfMF83K8VcdfY2FCMfxbdVH9hLTraMhxLF5q5g4Ca2AHA4YGX3",
  "key7": "2ShAPeBDPyQSPmsUcYvgSTuVxLPCUxUdJ3ym5jt5odZxtG7JLxzUWXoberqqQVNMAtmDiKWLLArfUQHMRVfL7Wyn",
  "key8": "3NBjroAZRyo5vi9tgQNehUkyEcK3iKaU3EiUyuLN3X4yLe41BLSZPjbk5FQdaUs4kyFiFUjfvJubxu2yxCcJmJxq",
  "key9": "pEPojgeTeni9dDNnZ3gW22DckKCpRepzs3jLoYHBz1T87yNgNjm4CndSbeRGRtCQkxz6gefHszFyPDmzo5NS7X2",
  "key10": "nAXQ2x3LnkBGVJxsG6BmKNEjMYFCoyXB6Ux8jy5QF2PqgSF5v1eVnJN9cM63gRBecEmYa5GkhUkob8Dzjvd2T7m",
  "key11": "3meW7eNpkYDGmH9WoQfkwb5s6yoVmLtVKKDHiPsHGb6FjS7cahT8qPdEX2JiLR6RgJTiHzczi8mFxXRT4aDGtgfm",
  "key12": "2MYZCRkKeQMEzKEDZw5MXdRVbJYZQqmh6G2NqKetdkrQybAD3PFfWqKpD4kjb3MfPMgoYYuyH5AsNhZFnpqK7PM5",
  "key13": "njME9tCRhn7KRMMxArhtwNp7zMa2Wwyq1rSvGoDCYp2Nic5QSS1xbJxHmDASFuBWqLDK7yijn9EoQVtFzrXNXC3",
  "key14": "4CYMF5n2qvbX8Hu7omquYBZyiGdL8hSDBC564VkrSJ8e8xDPeVGdkzyuKTk6dB6w8ShUouHffBSFChkcw2RZSkYi",
  "key15": "5j3JY8AnxRGvwMCanJJgW4MBizAGtAKDsV6ERWeD9Hn3d3R7En2CQKY4fHYrE3eeavDC9Mp2MELz2sih3aSQEYQQ",
  "key16": "2i1B3o7ChqbYZpcgAzALRMuSAZRweTxgZF3cEu3wJW4vxsBVMHvRvxJc3ryVyFZ2oC5GX7NLT1E4KQJe76icCH2v",
  "key17": "5vQ4MVknSW1rxVt9iUiLm3S71Awob6uh1M3EMKfk2iLGeYwRsxifLqYz8vAWYQCatdsCMVvdnRyUUjKHykddP21f",
  "key18": "2yVLJCQKXiZFaTuEDn1X6hvmpWCUzgTc7aWgDmH6dt2ojrMf28L4iwc7PQkeTypdzx8ue5ve91nB8s7QMgAMoVjL",
  "key19": "52nbkzbCmLprsbixLywDAK84JpUDMgSWVG8hEUaGyxqrZaQxc5qunvHvYteu9kqnz9EhD35XVDvPX6xm6VjP4h4Z",
  "key20": "5QPS1N2yauC5npMMzBPZdtYeHF6cuqA4kj4pSZPe4GAnR3zKYYEDQytZTyu89NdQAs26hrmt6BrDEJK5xFCGkTQ5",
  "key21": "2pCEqCAzWMhcu7TVHYnjQLoMnuHm8tnJQPGm5HcsbJGC6fTYVFWUVExqcu91YGANbgRfydErNB5mPvUHLKtJ4UWJ",
  "key22": "4EJsMs1B62DNsQZfZzM1dyoq4e6xxCm8Dh8NJ9hbX8fSQRvuWkS1wR7ERwyfJHDGMCVv6PK4yzDAuM8Aiy3VZ8W9",
  "key23": "5DzGqeYG9CxLiBjtmCSAJjc1EhFaQSkvEsFyKum9KMo16fiwJSBsfje7SgFwyfSH8reNTWVZ1iTv1Hhd2HX38p5R",
  "key24": "48CMh3xkrSP1VihLBEZW1hk6EwhwhvMscxVQCJNX75vr5TLVTCvVqWvh7WHNKT1h4NePvwGpuPdGdSPq4VD4NSo5",
  "key25": "5aNrhPpgSawCMA8hSTyJjYmgPpXypTGtt3bzJzdxJmk9asMCNqX8HhwqdzJZuQDPW8zBzG7gMYA5VnKHjw1W8Zht",
  "key26": "5PAN9JAaHYsk4x331zxrZVLP3McuX6HekVCrcLVkugRZAWDhnG1KicAdHz4HnH7i1MWpuHMA3Z9UcRGBVxFUrhsS",
  "key27": "z4YeejmRWH2ghEPQzSvtsXBBn1mD1gXfmKm7Xqx4EvWhhokVVxBfzHTzoajozGjYtgaAzjjKvhdsSesHbKYd1RX",
  "key28": "2NAED8JSLbAEkdvPkUn2cV875jxvexkYnnfsh45CufdJrgVm6ECsy2yeQtCgG34GAqwuvyfBdik2vCxq5KYvQwRZ",
  "key29": "3ZiSDcvvDPD1pDUopVhELuSGxXHZDPaTLZEZ2UkuUgYpgaT5pinG9vdKSEYy1Tkd2WBqLaLQGbUx4FoVk3sP6SJp",
  "key30": "2X5hCK2SPpjJJg8XmAcMfrWZHup1oh8NXfGB7jRQbQQpC8wpQK5wjEWPpVJN17sYgjKJCjyJ2Ghs7CxJFmJCjcK9",
  "key31": "5j1YdGp92Ai8cm2iPb1sYXxu3E4yXGZ3JQ39s4JzhiYi8Fgz1EDZafzN8ZX5pJkvBiKyJbodtyTFaJpsR8L6hkdd",
  "key32": "5Y8J96XeRqZepBvN2EQ16zpiPfyuy4u9q6AHeXXCkiQUNa29i3gRznZ9rv9BfPXrcm5Tn1ZSmuewStfAgtGTVcnH",
  "key33": "33Ffa1mjknqENkBqm9AqyWmjk5JqLWAZ5XqLpGpJAjcAUyfoPgEdRcdxZfbEnhUHoaWjzC1UGxJwRptMwtu1y4Vh",
  "key34": "2zzZczHHnb3KhwDjFULdJzpCTksg5FjkWf6sGho4DCmogfd7aWyzLq6bRM46hD1gds9NMh5FYdeGsx8itkJJPXdR",
  "key35": "2BaaXUR5LueJCpVTT8qy9xFx4s6K3acfimJLXar7DdQvch7CsRHX5cgAy2nKTVBiSTtaWtBxDomDL4aQLQiLJzPE",
  "key36": "2HnUWJ1nqknZ78pPNv7KZyF9pTit3ihEE9XPQL5qJXX1SjkZWp9mKogbxf4Ew5vD9Lf4gAdaUdgQvE2w8zkYs8bQ"
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
