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
    "RFo5gc9pTy2AXGu4uNFErrkUVfyweDAj9kGq8SMXDfqafvSHraAD1w3MHSYWQ3WjXajWFU2T7BcYrwsNWEVyxGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2JJADWVLg6k8wEJRcepvR7wHdAjhfYa3ToZHpuvJUst4R7qWicyaLNnxCAzbCnR2pYsARCFWAKnHqcAC6tUTYs",
  "key1": "uLwfPmLwmS7qGRL54GSfjDDcdcS7ZXYwXwGZXUwDaapmq7hxYHmTnt6fXMM9Mfh5viek6ES3MXAPjDTDisUSgRe",
  "key2": "fi1JArP7Av7YtDqvUFs6FXDpKL5DGJbmxCE7xe1gjnBeGuStxd1zKFDD1tbdDWMiLfwqaMEj2XBUFrfyiSvK13Y",
  "key3": "4P3fX2THuDyBzcHT98cGFoHSRYNGPqWDAgHHrGDM3Ej8RNjZr7ifSjVtNwpQCKczVV3Yze5EgtH64b57GFBLTUEP",
  "key4": "64sVrpgBhg8BsihSe3nbDZHa7fGBQmqrYr6bKdJkBZCyC9gvn9p6di1XWvuKcGMxoX2VtJaHZk4UJkqMsnSnJT3W",
  "key5": "KCzqxBePtW21LbsvUCwQcHPYtcvhxjmM7snkrnKUj2TiWrxLHoRWuM5KUvLJ7hWJfnfuBtgJKnK6oyFZp5sVM7P",
  "key6": "2g2uXZBZVR6mEMMkYQnZrwcxdgBNS6am42zGdkUatnjfCCNPkYH3zZEzq7g23QUCUzZcccok6ArkMBw5CdSYCUjj",
  "key7": "4JKkxHaVXNNWQJPmQFdW32N1vSiNQXM6mdLwi9g6Vz7wqnCy8DY8bwc5ySPX3GdNLpFPE3r3v7wNtDikf4UrNJcM",
  "key8": "nH7o5MQ4VjVMP4LdkSzkhbxVtPQstuWmLdzi96pnopxXMm22rTB7PjjthV2qHfEbn5GpvpUfSbd1i4PhUKktrBc",
  "key9": "4MBsoCPbv53QGmsxgCjPsa85XF4mYwtBao1Puet1gXXso7ig9ZiYUMXyZME1174jKBh4ACGJUAw3mm1v9xL1aE2d",
  "key10": "3pt8twDM9vHDAU3A1ShP1qqtriKidxZhdCMT329XhmfBk45bW8JeG2VD9YNjEiB7vmGHb9WxCxDhnu7UDxZM6Tt4",
  "key11": "hVjQSaEdJoMmd7ur7iqLh4RqZSPbEypsQgmCDmD3DSaQY9xi9mm5oKrSQnEprYhZGpRaJXrxefUS4ffxLgzHN5w",
  "key12": "2b1gu4NgTVjcEcQ2swUg1HpH1RwEd1Yq218qNgPapQw3PUxhyUQnoXgWasQ5jW3XBxd8g311MC5fkTjpxzNTcokZ",
  "key13": "3z5B5FivA39KfcFxwVpFiC2nDNpZm3kr8a9dWGNz9uUX5bmNrzm3ivwSwWtNgwVQrWxzCoKep8sbSHgQUQNCZJAh",
  "key14": "66vUKc38tbyCHqc8JfRnNLooG6FTGAJssHbixh1kHo9PZaEtvAoWtGidjAcoZfmP57Wr78MDZmWky5GRywsXKKqc",
  "key15": "2fVvGR2LByhVtG8mxQzzE8xvkQH8DybxiiwTR9mxo4R9vZCVuzxwKgoM2JVxbi6uvTpNJYcRCPeSg2LrMaphSiqd",
  "key16": "268cuEWxW3TcBnNNpgxq4qNxKnRnjVFTaofV8v3FvV9GivA7m3B1cYDgAcx3R3RAQ84SJZCfhWpw4i9CLZWLqMDN",
  "key17": "3wdzN1aoFwodpqRjSymFjAekX6tsfWrXESnV3Gf5MRTXmuCfuacK9XRrsgAYVMsThc348RQ2grJkyfxLYfVfwQdh",
  "key18": "3wJENpXMbt9HeAJz87jg2DqSvHDHCSGyTnm57Q2eNVhQvMb8zV7kwEKjYp8tnYAYfYypsG5jvoqZ7QJQWusz7xXk",
  "key19": "3egFFKTHHAdm6JLB74ScpZqjdzHs9j1KwSZscb7WHvtHX6AD57oiPAKKj6YK4wgKDeRgbKENNMF2pzVCQ1SzVjJN",
  "key20": "2bTKQicwuEeR3PWHwy9vxSAuHoa9tMZW4BeitKP81c2DNkhzwyPsVJXPg3u5yWcpUtEywezWdHEYEXpP9KvSzjKb",
  "key21": "2sArWLrWTaCmGfQh2Zykc8GFEc8nYRDMQ4GURWiGve23K1GfkHKjd6wk2qt4QPMA9FuYbrLckJSrhWTKaQrMVmFu",
  "key22": "659E1b2hygqXWgcLeCJn6Po8CQ4cmd3w6DpBZUvrEXEcWEZmPuQAJwidB8omEdvYeLYbtHBDU26652veQ4BuVxvU",
  "key23": "4GEVENYBL1JhLHLPhwnpoV8eoZkdnJhwBppg4X7kZmVBSXumCic5ongK2sbj4fLnsyf4kSBpJGrqrWtq3kLsn92q",
  "key24": "3DEZifJSVrPppyEP9WGcuWNhrw9ib5M7pCH9o8s5a1c5KreJGaQW9bZXpBge63g9NVoQyLFieYcYUiCcxSps6FLB",
  "key25": "2SqUmTQKNcF9EuTtyCdqm4ZHxjSkFM2af98uKXBYhNTtudrHjStF8dgUAjAbziA41EYw2HW9kp6GF4E51jJfq9Fr",
  "key26": "2PxwMhzXezXjwak3yYRFwHvXfaAYP5DbP78mgGQSSJKYwsifg4Gnisy3GNb1qMhYp6661yBqJAHQi8TR4hZ42Ayy",
  "key27": "3LQ77mEGH5stk63v5CpNw7msK7JCan2sWphwM3WuP3B9SBk25cvpsPTadwe5mrQHh2QrcyR589KCtSJwHd8JmkMS",
  "key28": "2w1ShkxsJvGz9F19EDLJZpqPbgyTv5ydq1XFjD8NxunrMjQv6oiht6bYbcfGHU4L8ocjxzQEEpLUaEGKkWR4qvac",
  "key29": "BzcDnqQuXjwpvkL9dMYU3Guwyz1o7JBv2Wg1UTkgnRcG4bJJLjN2miQuumg9Z3e379DSZpR1Fig3U2vLdEHDTZJ",
  "key30": "53HYQwG5y3imsE4FZSm3R5JC5Xr7skUBDms3dUmfnZosWeJnKhZKGbwxyJnG5dofTAQtyUMj9GhmV1gdczjdNBym",
  "key31": "4pag8iGtVX2CBZQH65ciYZXzNuimm4Zaw7x8yVqckqKMo5qRvhocGV4CbDFZ5hoJ3mLNmYHCmvpJjEgYjF8do46B",
  "key32": "4WyffMdQRC1QMq99Hz9GVckqzshoXKmshPB5evh1n825TdQbjpgrRuJuyFv5pAuvUdZW6xh9MBaQCg6HxE1ExkTw",
  "key33": "2AXiw84cJLgQAAeJn6xZDFACohBYvUaD4PoztSaU78AreLe7t1vmayBGxM2QwhH33JLwi6defyBSX4VpVgprvHRE",
  "key34": "5hrDJDWvNbSDqEJtDirAFdjzahj9ZWKAD5Qr5zC7dMz6nAhFTPt1Gz7D5QhkPsWPYr3rwCcF2CizrjJHh2vr1tRW",
  "key35": "5WMpAadrtNPxATBn6miBJQKiJjPSVDJs2LsJM18F9TgvV2262dBAdnirvUSK4Crc59sa82wb66NACondz5QRucTt",
  "key36": "2cm86WVXNKyNWgRDvVCoka8VdkVenExmpgWatGi5saNViCmcbK7hsm1VC3hezH7w76gDMwJ19GJrC8BPL4UiZrxL",
  "key37": "4nAd4KwHMChHnLFPdq9mu3vTyW129jdDzs9bM9t47XTSEXLdkHghtxHNQwLgB2mcDWAHVpBNfP1fHFtL7cUUpD98",
  "key38": "28TxZrFfuqv6sRVPt8hHiTXMftsd9xgQd4gM9MawNAqXs634hrhL37WGbmaiNS5LbRbb5Ua4HVrTzjNfrZNTLFrz",
  "key39": "4u9X7h7fJPenKQcbmJ1tzkXKXuXeLVX7BXWjrR9Ga8F13d7toc47BSir8jZPLyYo7SKG8iT8HnSERgC5WbgJLUfc",
  "key40": "bUFhiCrv2Av1fNrjRCmNGjGFt3ChyfyBNxL9snEYb7gACtNeLsTK36FmC13LzANmL9MZk951shbRShKZubMLRWp",
  "key41": "5SAenGdoM9RxZwDGPEE1vzghcNng4bb7PMsAuwXi4FPPhSktBaqWvkur84bZYYgai1Gx8zNBeXRT3ttfi9WmY2SL"
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
