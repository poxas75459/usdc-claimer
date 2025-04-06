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
    "4xr6x4oAE2R767zRu3GE89okeUkPcM1jJsaamxjV869HuQYmz4n3or3HcPUEp9jxCzRrP55nRMFeQHG9NeCPR2Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZeFjr4pdkmkAvq1Wk3uWyqfBAh7NrfanSyWSr89DJZAY6K432MKyG5gCSZemEUVvn2aj9mgDiyn5pQcGYw3CXg",
  "key1": "2vhsXLyq6gbm2p1eZd3DVw8qNLhGc9WZMX4rE47xFuC2tqrptpVxUSv2MPhNDXqwJ3Amq26p3gxPhxcRUpiPjyez",
  "key2": "cy32RG9aDPN7n3nV9SxGTZ8rJjGb7oWxwRDEHA9bPZBipnFmCHErshraHVgD6RptEFrArDEDPuiErvNFtFx51t8",
  "key3": "5h5w7dMfdYHkqsfoEvS49r8SR55umqD1MiZP1pDtN9zyuYjTpzhmhEii1iAUp2vhJ5UvBgLBuaPYdtFNR6iaRmPF",
  "key4": "3X79RWB5GYt9acjnUeWHokZWov7z3rowv7WkbXBp4Py1SJ7YWF8pK7s7cNB6F7evGJ2FDXYbNVjvF4F5D9SEX5tq",
  "key5": "1wyqYR172QnW2Fbozp265WGtZ44AsJQ2qNoXKPEhRMCzpq5REGFX3A7cJbP1kvMdefuBvZFzHw9s8gxj7sHZomB",
  "key6": "3Lq8LC2HYpVp3j7CferUGuNgrhkmYBymNT2Wma2RtNcf6y5Vvtc3SvaZeXrXMpyuLAqyQhKWMS3Ub1A5TtVS7A2M",
  "key7": "vjGE469P2ui485fezdj5Kra14unrVUfJ8GyP8J8VyveX3TuUpK58PzPu9UQbszprwgL8GwGhZg9bJfuWjrbVHwn",
  "key8": "5mqENS24RDbDnXekmmiLa3H4EGnjQoLG4UQsiZidSSoiTPcmyCYDedyRTCqv1W9mhPFdFXzgymU1ZG1zQt8CXr6o",
  "key9": "4YfERh2uycE3Hx5SyrFNj8RtQUaLd8sCvQVShSDx3w6JuoCSThsPMftJ8KF4WmhyAwoHp7b554d1UYn46Zm9Ju9f",
  "key10": "66ZefXGeuCZNu5DY9yWiPDeCXVjGMvXbtwZ3wzDcrbCzRebFdRMhATYe7BLQhk6f92U67B4b6V6dypP9F8v3K5Nz",
  "key11": "4moVqt7CGLKG49Gc6tEtyR3MAusYhpRab4Fthc8ne8zo4Hg9KmaoJf1yUjDkwV9C7ZJaitrNKF4pWFcGM1kaaPdC",
  "key12": "3mwJhkaNs1PWV2J8vdQE6MWfaB4k72e4XcGGSS2PB97eWHtJs9aF3kUhA1n8aBTT4zVviYRCup9ca8xi34oDBGQn",
  "key13": "66sMkY6ndQysA6xARqqxx8kfkYxTDFBREqJL28GMnVrBJ6Kc1pJvV5vsTKtvJpvSFkDtfiAnrb6dAmtDNZkXMNY4",
  "key14": "wDqafZahyfV6DJe59srKaU5wT67joEoEAtS7vbxWcky7FAsoeYeSwW9PzDhVAYWifxqLTgfdi7ZmmBh1fDdXBzt",
  "key15": "3L4CQkNioqG2c4uCdSFkwt7zjUm4FPaAdgrcAQhtZ3XCdVEQYKsCwvGHepmVeV5j3qDRRU2kzRzh7HD2Kqk3fci2",
  "key16": "4gAe4GW7Y8AcVEMJ4Pm7UTSzQx1NFhHzpo5MnvD82vmucefzWFt5j6r75bwSrPnYgpKDZGiSh97EudB1HUM5wyCK",
  "key17": "67iyp6265c6xTo9GC78uJnwaSoPZMWfTkCLuNJesdbPUfGVFwLVejHsFNB8BAoZF2tT67k8bWDgu3NVcKei32Jhn",
  "key18": "2mQV5pthXeWnX6dsTkRQ6v3wQRrPZ5VaFvHAp49ivoj1zHQiuGLTTm55ZWL4GD7mXvH3do7zcoMtsbYTLg26xzY4",
  "key19": "ubSSbvgsiiqMTFEwTJyHUWgQZQgFBoPY5zgn6cQR4GFfwUEt2tJsAveLzeaPVMbb5n8ZcfgxBqToRV1QkNGQgiF",
  "key20": "2ir3MzHFr61GheZyub5k84vGJS8ZfVDUex4iGstrAdYjkYsabPqpL5J9MS92nQzdwkDNd9F1sKYqkqbuztM3G3nW",
  "key21": "4zwtCkfRXNqWh9TFVi5PeSAaP2nK6qMuaXY8JXBNSFDMPhuB4EuW2SvXEJw1VPer2eJocHhTBEY1tQfs8i3rwjAo",
  "key22": "5shw3PzAJTzfm29DMWp1MtihyFZjUgmuvaFFrTJveoDULu3rKT3AoHWWvoDNjYbvUn4L4QMvu98YN6isx7ubZ5ix",
  "key23": "27p78NNrmnDCUy4P4AFhYu3n6RLWhC4Y5s2C5KRnbxrrNB3qRfW5WTYewzJbBXf2PbzHNogEL9FMEBomDzLb3Vh9",
  "key24": "4Fi4FyWPKnQvWHw4UymKGhw7bKHKy93iQBJbSb5v9QCERDUmcNVBhms1CQRdeUGLtbE6eMZamvVXjyf4GNdmJqcz",
  "key25": "2hi44XhzqEw6pnkZ4TGMh5WtD177ox4s2D3PghUmmKF3ZkgF9iFgGusb6sjwHw9Fm6PRhr4kzNeLyPPx3iNfDu1Y",
  "key26": "2wFu1rgNSud2ygc3DhCHcWktKkSnvTZP4a3TzBpAPbUCXwa8FY4wsa56CkLxbqCMMeQqSg1JVpWX3qDVESEXQ43U",
  "key27": "iekLWAgwMokuJ9DXcodPBSJh4zYZdz2y7qXnvcmtcbqRX4TS9He2CM7ZYDfabKCbnJhMQY6dC1dfYYHzmFimUkq",
  "key28": "5jjqpK1QmqBF3xhS1fQoZPsJLdnD4etZUUTxDKiW9AVhqZGhW4o2ZGXEcGZtcrg7XCGpmx9gwncDKowQwL5PFSDr",
  "key29": "39grknw6bVYq96McKrDFmzuWCdPWwKYRMtNm9Mmb4fYBKYrFFEqEpo2ox9YUMhVjjqcQRGT9J3fJ4Jdb844igpi3",
  "key30": "2xmnRoasc7hjCfj9qgZYbEu7NX5dP8oRYQeVy4dptQ9N6fnHoaCtem4YEWhfj6akjhzBiBmgqDfu7S6WSiiuaEsB",
  "key31": "3RUaf3EJpCfbRoHTCJEmK9Vk3dKDn29Aa9c2RisqbHGURbR1tdpb86r3VbByLYUjp4in6efSeCoEHUkd6Q4uUVwg",
  "key32": "2hmEEjePVtH86UAGUpr39nSsA1U4W1SjAktu1yY2TesDna2EmTnNWbaqqJNyoSenNXsfLxWfBq8Sa8Z6ZRKDDCEk",
  "key33": "QX7sAT8q6yKqDTqDSZk55X99AnLJtmmZb6y4FTycbAJzBGUuQwEnCwMac58LqsHGKWuVkSYoYwtCaJeCaqUdRsP",
  "key34": "4BECyEk8dXs6S1VjVAszDWRnjR7aVzQvWYnuqvmfaMkTza51MjcUdmSLob8ZMTpGcJqyyAJyUbspzSuFsyMkeoHi",
  "key35": "5CqvHgZtyyTxuycaALVjRbn2qkaJBnVKvEyHmFwGcs6hQHrFyENNNDSyTGBJcgExavkai3CPwhzcwXvhTATM5w9J",
  "key36": "4SB7bdPMXtYfs5qkYGfZZCdYpHcGDQxtwA6Zu3JdiSMvtVQhFYzRb9VCUXfshCpFNJfsg5seMEZZRsLsNH1RmCcv",
  "key37": "EgsfkkQh37oaVk5sAD8n2A1tCvP79UAx1G2aGFnS9bcA4ohku7vp5nEnowFXEGA46uMCxwJNxE9JeokQJRjEuSE",
  "key38": "3Xi5mSQPPFVpXRwzWrPP8m7KKtMAn7t6N6YfkNYASpQWbhZ2kL7sgTgNBRSgojgXr7LkbpBSmZZ3TXTu4TBPgV9c",
  "key39": "kfEut1tVH6U17Z2Sy71iyqRAubCoffJBpNhKxb3seBNKVPQYUfEPPHkuW5GwjnxvMaNUYEKm2AZg9Rjtcu6AjpG",
  "key40": "4nMqhMLiSSdqcDH8DTyiT627oFvy4nZVo5rskS6UWb1cxai646ErASPMXQ5sYHFJtnXQQSnYS9JyARdAmwJe8Dp4",
  "key41": "3trcrY5QW1d6mc2hC58DJupDdsjz89GbtBifC2uhN2V6VRo2U6LZaKC3zahqALa18LzA6mHnu6jyvw2KDswJ3TWo",
  "key42": "8PK6vT95MDEJUrnk4rJwPz4H4ne18UnW4YonpeAYWcpbFgTi4VULGdfwjs3haegv19TTyvB4i2E4Sa4vuJahvbA",
  "key43": "vh2KDQ6mY4xnajv8PTiqonSdJ6aBBzedPBF8Wm8re6bmfhHY2yYDpUDRsbLKQ6NuwiSySmGWmACdVx94xLw34yR",
  "key44": "JJ9VrgqRZsFfPAwXF3ib5ypftBpT1YbrdcmhHnqL3pJVe35HJZFkm2k3by7iazK3sALathSMCmAaaJticyTRpZy",
  "key45": "4ovjAwBxjDcgfp4v6ZkVgNinAPzeBwXQCnLjZW9vyL3tTdevk7qpzWzjp1e8K1ydadBEWZgsNYsdpRcek8V5r1tW",
  "key46": "43U5bB2pEf2Dw5sYWjGxDmWzG5b9ARny9yo6PTdxaaLc8PvS2sTE1fjVBPXJTRkzfZmkPqbA3R9qheGE8uu55uyf"
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
