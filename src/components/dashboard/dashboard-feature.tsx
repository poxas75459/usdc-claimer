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
    "4598d7AfRqYiDBagqsjzNW2cNofKsQFNW9Ec2iMa1Nd1aD7NpKEHxbfcCWx1WfzoqEmqJkLYGd9kZtv36ReWyoeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWNAupTjtr55X6TkJHXRLs2do5gocbQDoXUMpwHNwYgZExGyiEVvNfZuGy7KodS8rpeJ4yTpjWLS2XAkpG4ybfw",
  "key1": "BwTxfvRZTAzYkdDPRrASvNmnQNTRQXdgVVydQZUXBpff3eAM7xU4qZpmThaGeEpiH73Mkqud9tSJK5yqBn4RWZy",
  "key2": "623rz8Hez6j7mov8YuCRgdPzuvZE6SYaZ8yCxHbFWV1Q8FfvhNdTJJeovpPUQ8QTRTEL6QBQAYyJnqkc8AAwFm6R",
  "key3": "3JusHDvhiM1zE2q6QXtWVYc2PBGRsnU4Skqyk8XAHZgSG3atZ2erir4PRE5jtWWDLjqQAHoj2r2BACQfZccVom42",
  "key4": "3MBdeWueDPtL6D7QCex2EAjP33j6ZZPfwnJTtwx9AUyrCcwoQCCo7JKmU3JDPYTm7tzvGsuSZtZY8wiCCYkPywso",
  "key5": "W7WwE6WxcSxLaLFEeBhtvoQSqd9SUv4NS8BHkWb6y8Jse91y7JbNxFng9fsucx1aPrtqQYeJHpMfqRKsLv8EvRV",
  "key6": "4y67mTC8FthLtWdFQe3UybtPSapM8ZvGp9jNCkPWMX1yfHRo2Vg8LxVYA1AipFCvbNVuksxQmRnZuW9uetJvksRQ",
  "key7": "5p5cxbUQHkKZGJ2Spp8Lwhtrn77o1byLahmepoJchenfnyMk7ezy3MAtn35EhGfpMR4BNn1USKySMY5XuDMLwxMh",
  "key8": "kCyy2pWw9jzvuzAtQr1Fh7sHV1o5seavP59pNoyKwfp363HqNMsGP3mnB9rppJgMq4GLZQuMgbR7aoN5W3ZCePx",
  "key9": "5wnzJPPy9f4Fg2ZQSTzqASo2CiNo2C5CAJARYbCPQRSwaJ9Wi7jQYNwPukEcr2Sks3zLndQQQ5TyTqx1MiTHu8SB",
  "key10": "pBm9TzFrW4peXC9YhWTVax2XjZ1BsGCJRovx32V9SM997P4Gzf5ChERgi1zVSSk9xmizeZkva68ygoJKdcknyXV",
  "key11": "4Bag82ivfjr7qqeiaoB5zzY1t3fLiUd7QoCYHEahFdJxJgtxK6JVgrFrnehJsSnshGVH5tBMeXNTernmvHW9sCTw",
  "key12": "59PYWqa3BrQ4KiBzb41ZnzrihJi39QqmDMnHYiD29dSrdcHDc7wyiduppzop6WtT1UsKFVacwzf48qhH5xKpamZN",
  "key13": "4eBG5YTYw8ebcJo3s4Dp1wE7zmdonPDdsvVbJhw7BC1wd7QSBggpLq5i59TWXgWh3pawVC7Rrb9vDWc2mNinCWPs",
  "key14": "eu7fH3rhyMep6Aw91qpKVyrKtocnrEgURskSsskjaemB5EXcGArCPgy8kisNeRrpqQpznXi8R6wRgufJq3FhVCg",
  "key15": "3jdRcYFNxFbir6v1NtrPX14dKcWX9mEe4WJJCioPSgZEmyWTP93Eqy8kiRzrmBK9SCxvJqKQuw1q6GR4zS8VARjr",
  "key16": "5GstV1NhvvTYbH3QvF2NBcLzNBSRQAN9xd16fHHiZBHLsCvTL58JAYrFwJjsicbcZ2f8bjVHvFxPhsAkRxQkB4U6",
  "key17": "4rSz36XtrRMLLqu6qXxMwEJATMnThzWvBH9Uhwx8UVYA1xSNgEqHMt1WApqmh2K8AUaVaoEMfsZpSZmyNYpgVEdN",
  "key18": "5jDcCehyLbWrimoNxNZYdxHXyiuh1bCMnWbNzGQfJBkxCCMwPnBLJ7ND3T9yHT5dRhDVNFvYhb2kfuCScLP9fnSB",
  "key19": "3ioo65F3ybGBJHLRDLD8iPo4xmfgiji2ekxyCZgXmMDXzcSDVGAKYWUx9W8LRPsqX4SB3x6iiMcAzp9dFvB5jSXW",
  "key20": "4b7qrJq7kyZs6mub66YVN4RGafDnvgDyihD7hzBSohUKxdvcNRRxTTuNimW4HD65nbQFZy8fdvvi4yhPqQ2nVq8G",
  "key21": "bH5fKoBfhnXiYfeKWE22woNNJpNwDqyThi9pk7bbqBToac1DXKn4SNoEvKUbVgEiqJ4MbgGyVzd8GrqUvVbJwAq",
  "key22": "561hqETYobYL7z48w3ntkKnv7pWsapqpfz8V4tiGGzjMJJK2jTRxpXCtpmTg9qXcfSBF3APXzsRaZZvKB5oYJF6j",
  "key23": "28kLnoxt2z7umZFxT3NXFjPaxkDSgiRQ9z5qfyN1CVJuPKTo8AWsimme671vpKNmP2jtojDSvJUM99Yju2DwKXQH",
  "key24": "C5xyYLccRX9KLmUxqzcg7RN2cY2R7hpCbfniCccvjciTQxpeHqJUXD7Yy7EZEX1Qhe4LjckVbw7JCEEmnUD1HpL",
  "key25": "32qBckvDT9NwWQjnPyGYKPCXpKxyYZQUYDTuWJLS7LmYpi4UWkvo1gQWsdx44PbyrQhDKrsg9wL1ygdo51BquD3P",
  "key26": "4bgjgHEHDFSArmyiPYB3xqrLvBy84Yt76vPUa8ZstyWPJEJp3SowbmEuFetwEWZXyCt5tXwePPQEbWn9SxTpnkCa",
  "key27": "bxCHdJZG2Rm92JSDHqJYYKknN98fCQRnug183RKGk64kVYyVEUUk5dv3GB9XokfxehaR4SMHJnekvgHBTjJAeHy",
  "key28": "3DbszBaA6btkokHbwoSFd3ta1zaew2FR98c7eM2k1cts533FitCTetdEZNRUMx9rcXRzoJis9payJWKFnBCqYP6c",
  "key29": "3jUtDwFkdWkbTtU5eT8QXhcjfeXW8bvZRvLNdFutWSrazpTW8py37YdZ1wvE6NReXRH2kxGaQi6yChJmGedovkpe",
  "key30": "5pEi4nxCUE5pEecyqEufM8b4dxRMJU62L8dUvXaLWwd6xNKAH8w12BjQwU2QQyYEkSgWCBdAnDMtuJtUTevpNp3b",
  "key31": "5w5sGdjGnCWszvQLe19VVN8DuB96vxJ3BnxyzNeAGo6UJFtA6JvubRLrTzdKRra2hKVbMgWt22vvKsGDTuGFmz6x",
  "key32": "4zspX9YAvRitPULvSKswNXBLGunopihn1UcLDtAQAdsnLNokqPp5PLeP2fWq1PiLuYewvb7UQ5Ka73XhZbMY99Zq",
  "key33": "5PrNArd7RiW2DBsPLT6d1he6ErT5TdJKVGBkkp7qhQ4KC83FHiyxCZbt1FMnswDtCPP77uSQHHtAzcRKAD8TYCHP",
  "key34": "2d7B83P4CaoNmTHmYNLoEnK8JgV5ZS3AVde3hWWDLmjeMX9UfndHfRTauwNgdkUYYUxCrYzhMiZGdc7dP8NGzs6y",
  "key35": "2sjPX5hEhVkwjjBfyxFCnTJQzXAxfjm1twWX7Uxq81ni9ExtyASeNqXT8rKVLkLZGesB6HUfnyu3i8h2cTk4MwjS",
  "key36": "3SnD71ok2WeCG4sx6NK9Xde7quq5RVFkvMDDxcJiLKV7FC8BJn8W4W1PzQVkWhvg6H5VrJJWqyWQKL7AtUj8z2o4",
  "key37": "3bkGyZL7VXr1qp94TxHsSktJuWdjZVjAdhWC2gXAtyZY9MJybqawPPxmY5ZCPzujBd5Cjp1gAuAogEKhUyVdtcKC",
  "key38": "454ffh4cGuFuTgU9JvJZEZweaNJaFjiT5egXZwXCnoZP8NynKqM8TX4XrHhmyW6vqEcFX9KwgUUYpknQq8wUX4tY",
  "key39": "2xp4Tzke6yzFvHVr2NvhFpsMGDnuEdj9MB2tk3TRA6AZLDnQZGfy84SWxPHCZyHtK1GSP1iLXGkJbWLhtLX32xXD",
  "key40": "3RukWWasvBqJASk7Hf6bMCz1uagmyz9phE8a8zhj1dnEh3EkhnvLGg848S4coCoHen6K8zuBJw6MzK8sFufhB8xY"
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
