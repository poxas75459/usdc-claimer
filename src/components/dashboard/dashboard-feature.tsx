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
    "Vn8cmPmNG5de31eqrTsmZnq6xzf8ArX9Z6a9i4bgKVby7di1db3HDKovebptLaXhzwnQ5E5LJxptTMn1yJ8ASef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PjqCVCv3Q99C8nuTVdkGGzDFgu6cYFYcjsjgK6Pzu3nKLNgaMJQXPKXzr23Tm8KNXE7rY2dKj35jAafjMhgw3k",
  "key1": "2S5grJspP6HdmXXeLNnCRUoY3ydvNgQyGo5URDLxy5LezuVA2qcqqNeVnsd1ff29TEayjScvYw3aBpuUwPHHMcoN",
  "key2": "4KVJUBBfihwgmvfAC2GcGzLeKZ9dyBVXHeCrvCWZzri7d7Do7KyXpiXdPtyzHv4wjQYFXczGaJf8yp55SVKU82hc",
  "key3": "4wCzVN2xcFTK14XKNycR1PFYjc4aPXHScNExKEbyXWPiLLKWYSEvN2qCLzTikzLoEjjaqfFpZk31eq1125yrd3LU",
  "key4": "5sFqio32DRzjvVFn49dww2RcmA9dmoYqdsy2CobQJZNoNshm2G56S3hXs3Y9oBKYHKu6cwCPVZoGmaVhxjhdFjq1",
  "key5": "5hSKz7PpCDE4TDo8xBpDR6SJaDB1aQvTohApAYfRzuMFXTHsPQqEVg4XMz2CgK96bJYv2dmwbGscTqdZoVn4GJ6a",
  "key6": "2TUhpFjjyutGaE8TEGxqkHQYyz1rgyTxGi9ZXeokaVcYo4yTfRbSLQpnrEMbuj3wkb8XF1pG3H65djqjJ2k7Xo9E",
  "key7": "KNMCGCvb2C9J4HdAH8L1qDhwJHUUfJzQeKZFdKeMjkExtDnxhN6aWm64Wcpo31TgB77xhaKxFZokQY6e3p6bT4e",
  "key8": "5GXrLGcQzGNTakeitctsUZdspUg5J5AbMfdRSLfNgLdvuw5zQrtUqVfktLbfwx8idoGbua4d1nCJtbfq8FZPMvdz",
  "key9": "2ddU3iPViWknYt2nQHJavP7Ujjw9bpbH8VNWnmAgfvjwinBmRUED1GXg1FZU1jXFkSByhoyWgAzHfxypHjZC53tU",
  "key10": "3rb8bbNDc1Uqxz5Gw7BkFB6TFTFMBUzNiEmCLrX3TPE164wLaE7StBEWBeNc2c91LRwpkc5o8xZH7ACDyahy6tCD",
  "key11": "637Si2oWjbgaw21RppFbb86bPJDzu4MkQo5JWWeFVJLPzZGtYg9Pi3cDX3myzbDtCU4UfNjSTSZaTmg8akD515oS",
  "key12": "CimVyFa7xc7hPYQw9iGQKgymGK1fD1ydy9zYCiq94J2ZwmHrDhcKRjvnEDGdPAuXwNs2Ww3Rjt7EsX54qEnVpT5",
  "key13": "2kjUhSHfMYPSyHQUnzD9mkKA8KHchK7ULTjwMvQz7vPLipXybMs9WLMFNFmsTD6X2NkJd5Ezoe2QNWbkQobyQ8kQ",
  "key14": "2FV5azAQCCJNcqZNuH2xqz1af5mYChp812xfg2cy7uLS65mPu6Y84vnCaeLHidvxkjWEKHCygF9wM5cpDnGwxans",
  "key15": "4WnCH2sTW59sbLqxmKsMSSUVSn9p7dgUNMQWMiryzi9z8bb4F3czw8NoQ7Dwxe3SAMSUWzXFB53RTiw3kbj6EmNk",
  "key16": "4y3DGaFCbvnrPbCLDLHTxhH5SUsU358z7TZtv9pQ4XafAPiCboVBYeXzUC3jciAHYvCM4KCpv4MB1H3jFhLvWbrQ",
  "key17": "3F5uspd1qttN2LzLA8VoicAZu8FKxwZohBacmgp7HyyoTeLudthLEZ2QVMx6zuJGGNnsjhifX2YLc8m7bVRutiFQ",
  "key18": "4odN83F1VhYwx7ANp1aTrk295YdWZwqFFWTDe4n4SRj6sc474TEAUFUBFugSuJDnZtfCtYhpVic6skvrxvSHfVfH",
  "key19": "mvHctf1SXNPSYK7SETmBUjWQV5XumKMUNVZHe3GfRiVQZvQoPEByvbSWA8y93v9adzHW5MYuNj7zsQTzsnvExuB",
  "key20": "9SzYP3VidvDmRziNYFf4zFHJgktKRZ2qJFavh3tBKm1cu7Xn2gHLuEPLFcMyddZQmXwnNFcwG58Vz7aFRZrsFsf",
  "key21": "5h4RCqLa5JMxXWBV1UGSvZJYBeWfx9f3nEnuUMuEEMHqyhZkLikpjAt42N6MEhax9JnhtTjs3DvixSugpSG9MC4y",
  "key22": "3U9TwmFV6wRozivQX5czekHWqT4PR1wg7fyhZhAk79YC4RdWnvuu8ohMcr6Lx9eQEUhvq59rC15bC2oNdjEjmJGt",
  "key23": "56WKQ2PGUR7QyuRmkhkA3yyBHWkUHThB7i2iWqEPSdxYT33UAhbYSJE2PMXobzMmfRoNMEtqmwDmWzBCmCZELDVE",
  "key24": "2VBi6B8Y3k1DPcqz1K4RXmc3q8XA8CEWN8t4C2GDhdNGhzNXAEedzFanNCLqG28S2RpMb91ZZ3QWfZhqP1f48t7w",
  "key25": "4MJ11oCSSNaZzUjGbyy3g57VVSJdgw9HxAmUzknSRE9t1kU5iQKafpUtSwjrjCiGfshqYb2GzP25X5XCaHuHiuww",
  "key26": "4VGsnxQwVf4KJqQi3FzHmrhonDR2yfh6KAsDCek6BAKjFxDzGCytFtBFcf1CRbjYuD94ZZ5STaYhoYCJ9N7cZ5Gy",
  "key27": "5sPdoQ5Jip5SEMZibgxUE6U3zu1K34KauoSeFrEpjTVLtoPaKD4g9E2Ri69CzoNVeceFMUQwCXRij2WZpeo9prDf",
  "key28": "2Z4gYTobNveCwXbnsUbEy2Qibmxs49aTZY8jVxhgMbnt9whFAjqwmoBrBzwSTPPNhm5SPX7EcC29gStVvWo8cq8N",
  "key29": "rU3CSYhBWqary28EZTcUeUwizxi5E4T4t3ekaq7YuLtdqB5ECJbErZsvJbn8mvotYvD2zKHJ91z3RQuwwqK2Xee",
  "key30": "5tt27ofw4E3H6t6CkkPWbB5SS7hZFtjwCHyz2WVdS5Rz8AJmEfE9QYaJ6sWCaj1DJhaxnr5iSLP2ZBSvB8ZRywa3",
  "key31": "3Cp2VUHyg9X9H9u7Scz957qWQxKpeGfiQrupaGsYRtR24Hcr6esKhogoxLyBBbx1XZNV9QQdo12Cz3MAXPXi11f6",
  "key32": "5rJT23NBXqHGNb6grXDb3iHUm3JTiKHvm4k3z1hbZ1TQvM5nysHMLghGv6SaG6gimErQctasguhQmgne6Csp5PYo",
  "key33": "5pAmqEDZmMveuPPypGHqx2qvxSYLsTDWB4ThbS5tAeUXRg9gSRcfj2ZqKjnK9F6ty226Z9P6jrWLPBuSRMCqFrky",
  "key34": "gqDBD3SSNqmXkftHTQgq5QXHPFcvMHnvsXRpxX8EgdPa4B6VimfRxJ92YUnXCiJQbDbPod5VJX4ukaCEMvpnsPS"
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
