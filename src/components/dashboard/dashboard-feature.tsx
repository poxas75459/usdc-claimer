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
    "4Zugfu86BwKoKMhhzfYXrMQk1CpNNmKAngVPFj6ZQ7FxV61oFH43mgrh8c75Soa8moDtBmPbQsH8vG3Rr9qFwLSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPqm55XEfWmqCjDYMn7t9T5fqZbxqe9f9btW7iRK6DDgZCqCqwTZiCc7vmCzcimLPo7LPjQpbeEaB5MK7WTVrp7",
  "key1": "5Ls6dYzA66u5vE9KryPfUFfU9RPCw5UfmRe6t9DcYYYWnUnfF4nbPKqkAxEACvuBTxcPZEoTkAr5YufUsa3y4Wzd",
  "key2": "5Z9MCqNo5ytQRveLkarP27TLiiYeowzbBSVcr3tEEdx6rwmHdSvwhk98WbqErqSWMfgqwuS22fxJwGTB4AVF9daN",
  "key3": "44h5Tvf7DhbfK8nYsFQeY6i8FtNvqR54WTAjzkGgHp39X2JYf2sUWbE26Tc4oWh6sW8pZXvHXpJPAfDE4hq9g9J3",
  "key4": "zqSPLv4JkygmWsuKsphUnzvpKXaVBaov5XgVjXr1Fn81rWunedZJSkG8Msdhycsqy6nL5RkXpahXat8rtFrYwtx",
  "key5": "3NeYEQxQ9auFtMUNNTeyqH1yLu6MknzeVJJiZKL3FaggDGNHetuGNCrjEGm7gqzjdCXnAniEE7ogmp4KUCMGCUd4",
  "key6": "Y5DBchGVXTbVMjRpNxkFGfd6jhg3oVA91CD6rpU1HVpGfV7bx7hcuxXT5dmUf6UeXLYDBCkUx1eehjSKyf38xsv",
  "key7": "3EYiy5RrjMVN7Sx2ULwiUhhnxqPk9GV4paC1snkgq9jjvrA5gGWxV9nscToNPqY1RvPk8vskEcNvf5nej7KFgF8g",
  "key8": "R8EqR8mG2KvtuFeaxPiVHZShvq5netEWo1NxuG2T4nSvX34FmseuXtmy1imUgTSNxuJwukGZCvKUzQ4PMqgVB1S",
  "key9": "2xpJCTpxY3JrV6V7oLu48sVXUUeQWFHs5FNr75qe84cR7BdBsqrw2RZ7aHh8FTMXsFJ8zK63SPtKhQq7X6xNEVBu",
  "key10": "4V5aGzmCkfUxofHd8WDR3kSsukUBCe99kWP9238PqJVbfvaDP4FG6ELSjfspYyzzKYQCNbPf169XNDQgP4XD1FqY",
  "key11": "3hwA4DdE5uYse1bZ5Rc5aWX8ZdfJ1cciZQ5eFh6AczZWnfq2dff4Kms1xC9qyun723wnvjsv4SB249PVYnUYRyuT",
  "key12": "35wbdoWXYQbUViiKnjMeK69P2fSy2fZJiKfhLZJxod4ibn1kUiunrdpRj5Zd19vKQ1HgKWDbYZmcGrzL4DsTFtAy",
  "key13": "2B2vbW7q2Ht3hkGU3Paj4ENpyGNNtPqz1LjQbcsKMDqHqL3E2ZkdNi288bbDmiYp6tPL3LLUM6gU7guGqyUFRg4N",
  "key14": "58CZRMAXKCrnRf2RUzMz12Bj6UrFZtFGQB1oZxwHwu4eJJMrPQoHBme1PXDZYRbXa4Wmw7bK2EfimER7HqKEbozi",
  "key15": "4kJCtVNe7z7ygd8YQW9N4cxae1ZPjnE1B8TF3W66ow243uaZcN89xT13VZD9iTwVyBnUDpuHNUqD9QrckBDveq8Q",
  "key16": "54dPJMgCuEfQxa38qx9RPXkxh3mahSdVjcdQE7Fxpw8P8FK7HQR3CDjz499K8AEwhm57Ub3FRKuX22BCSGs2wAE5",
  "key17": "31axkhcps4ovpzBbnxat3iYw1kp2Y4A2d5uvkQmZuB3ovJY8B2waUAmmSVxYFbJAzbLygju1YRvUKLzuYXTkqDuY",
  "key18": "VrihqsjJvU7GnpxLB8RwurygZwACxScu6m98rkPr6RgjG9tmU8kH33G5KkQ5uLGJBHNF9CYjGMbXLky7DtwK9UM",
  "key19": "qxXGe5A8KR31JKEZZVGofC8rFBvjpYF4TscxbrHvNXsPP4hLsxo4HYUT4bt2niEduinUAmpnfYWpgmq4Ru215VN",
  "key20": "4aTrcN6niM3a4fxYsHFngUEAK6d1XNCXAqBnE1pvBYHru1g5N1Rr5SAy29RYP3suUPxADRLStbYtx6wgXvF6vcaY",
  "key21": "5WeUpKRbJxYG8kA9aZSSrpi7E6oazfuY3x5AcDVUaCAK2piXfPgw8h38WLguz2XXyJn2L3bLVWAQ7hBFZyVXJSdk",
  "key22": "54hSz7YnYsXzA6gen5KB7m6bzjAQEk76PMSwEuvZahKtUxpbYEEuSjb9PRKSw7Fq16C4x5fQeW3NvETrXMBom1eZ",
  "key23": "3bc9b16zeEtWDeN6vgMgTFMBULT2bYhZLHFsHcoF2JR9BS7iVKLZahkCiqLqbsaHddziQPnJEEYhmMi283EKUsPA",
  "key24": "PoVePqRkvcyu6aiT2KKQSwfEJqYaCV3G1xSWxrzesZGVAvoXfHhgikJNppaaereXchD1UK8mnca5xYmVx6FgXyU",
  "key25": "3gYFCgxXNi52VYVkuFYXv5iXB2c34iDZyGJZg1q9BM4Ycu28h2jZFmKdszLcywRjwu5zpQ41S6hUxtNavGbuHoNB",
  "key26": "3ucwepGL9CmN5EVr5zs1uzTJbdV7upiVkEbZLTkWnr9buGJmMu6TadMndD2YYcHojQ2WnUdeTgeoPujrv5XEQSVW",
  "key27": "3PR7xF24HRFL6vX2drhcw3Ey77SgLjCM9yJjV1fXATk6YbTSTUy4v86VpGMHiykU7U9E8qqgg9VztDr8HkSgK2GZ",
  "key28": "5itLiEpgjR7nfReiFGVMbpsWquCqism62e88eh8fTVpJdkyTwbC5sEzhRfEMJE2Msd924o4nymbAKfBos7QezvDs",
  "key29": "2j5dhNWh1pf1DhQS41HBdB3Mb5U5FVFbtFx4Tz3YEdx1p2tyfEayWNMCPg7Pq5gCLRon3zSVkcvqVD76ZEaWW3yn",
  "key30": "228icv55TGt8WT6ZXtJc2Nw37zdHVqcJ29xrMhLNPKmkNB2JrnMzayM77GXtRZY6xA5NgKrsGUQob5h9FfXidL66",
  "key31": "HiovuVRvEP2yBoXY1zwZ5yBYsMXrKg9jfYjqDRKDDGRRQ1dkoFwarth9ezPXcVBqsbYQA7dXbsutdc8X1bMo8LG",
  "key32": "3GYk2y6tgeJVgD3UW7cV2bP5KBvTbreaw6XaezWwdxXjbPPj75Cj8PygSTGPwfwSqxwomt2nHrhSgU8xutwYW9Ag",
  "key33": "CTQwr11X1xa8n9PBFy8YJnihRe42viX3rsMwys9xDZ8ankgf1mwgXxLfYddce4QMSRW2uydTQFtxdcaqgpfkPgF",
  "key34": "5AhYVuJhe6vnf1MfMeDZm1ngKt1WGdkZqhY5rK5WgDMHbGFoXiPJFXnE5niBUAt7nXvgynppty292isFfKeUKSyS",
  "key35": "3FxiELGzRh6oyuDYAzRBAg2ChH4N7upFqWUZtjwLYE9RJzFWwpc7Wk7QWWcALp5gqZuDZuZKpq4Q2XyoqrFm8YNo",
  "key36": "53SgNQkCvaWpkqXLWJFGc6HrT5vS6hk2z648B2TPfwzY8dts9NBaLpkZYacrZXVPNvLjtEvgK49vQXiuzPHK5DDe",
  "key37": "52gy1HxCNCMctwhDSTYxb8WMmEuiYX2XRaE2K1AkAvYDg946kaFghCEA93i7LiiTE3STzNaxGGmgTvbACuao35VV",
  "key38": "2L1QwzQBTy68RVbR4fWHMscDDdsgYYFwUkaACJAQG5TZ34WuAAj2VNKqJDMMyJ73rb9H4grmmJ6jJvPdceTvWXFs",
  "key39": "45RZXJ7dDUH4WESR13Lw3nvdM13JorJyTGR5MdXYVAbs7qydebNeUnnvijGjEF7eAjGyD98dbXtQGB5THQJ63nxm",
  "key40": "3tH5TC3P1HD9rRJ7KjVduPGwe7or6f6DwfwSFfLHumkQw4dHPHMk5mtcYHgKU9wBnrSgKgEvsC3fwkxaeKB217FZ",
  "key41": "rsHzEuhrdTjaqvDpyFgHisjyfNqd2oBkReUrvEnvQeAZMdQ9PnUuQLrxKcfYCo6fvCXLgN4wvzh9BMGnHRCoLi3"
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
