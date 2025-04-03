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
    "3vkdc8oB2hoc2j4kmsvz5DYUM6YWgx7Uuqy1QJXuUzifJaGuPtradJNboAgG9F7vW8XE6i1jeYGaUovTCu1gRaFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQdnvZEf7MSrCMaJEB8gbgQEi1cbSPAGT6qmfGGspAozGsgpQ8PsAXGkwqbHgU4Jqb3xujUJAgcVuwaZzAMKppo",
  "key1": "2xrKJoHkmrbh6BsReJt5nQSm3Cb2iE1wUwVxCeiNw9QB83HcV7rRnjFjAx3JGbbBySG7u5GAJEthqnfkFKhgymYQ",
  "key2": "2muMZoiUy5ZrtWj8v1b4VwdETtGg3WUQSpic8SmSgchDJB3Qd3TbVVTCogW6EysjGTibP6tAh4r7r7rhDvZjzdba",
  "key3": "5grDHoq4KHJ5Nq5rkiwjZfv8qjkjtwJhWcGtmCHaCrHE9JArS4EzrX98acfTnezbVrh9YGPNHGH5Qx69DfzviZNq",
  "key4": "3SD1dATpoZEap4MADE3CoG3zMBBXYorQkL7YJAk8wJcBzjtj9aoGdT9TYpqZzFhNacrscnhGoYCM54wUHsT25mWE",
  "key5": "4pBkaFyscnu4D29ymkWr6VYbi2u92g1DLe99yVoenyNXRpDLhmZyNHSSz9VgJGN6xDKZz286QF2jjM51jLtEpzpn",
  "key6": "5X3JvzYqQu6goCLbvCSpqwFyg2Tjzb89MYavRv1YxfbtpyXnbiBLuB4pAP3FmtbeXC3gozKSETMYzF18m737i5fb",
  "key7": "3AWgiUaXn7k6HXgkhTf3Jju9kpvUg8x4mceGVsHCgwWEobFj81j3rdkWF3ZNy6JKsPJtptJrMtdf4WBNa2ysQjUc",
  "key8": "5PgbTZjeC6RzkkvGJXqvHL15ji2PN3daD4Xsz3Bd4mfumBnJUSJBdboV4WT4cjLxC1MGK5PxE39VtTkKyRZDtHCn",
  "key9": "566FemGKR4kGs9RLTeLEBE3NxzxmX5aCWFgjs1dkNKGdv2mpeAYxATH35NZG5t39YrKeHHh15NYbY1gzzvbHiLra",
  "key10": "2rJRW33GH6wa3kA6wfBgn3WatSHEXsUXBPZT82n1gtVoxXTNfAxdPaaY5iLisanAEznDDCaro2EERufnfPjMFTKT",
  "key11": "3Swaay2PfqCPQbiBPsRrEy7q8Lyf3hBxp7UsJH27pBdL87k63fLiQoRhC85LrjhDkAGLAvWjgFXCJ9yf4uuKU6Gi",
  "key12": "3RYMFEcQgEULqQSTT1ZbNg5nE9EYf75ANYV3pXSEpSW2ft4Sc3h81dBWZDMd3vrQrHYLnHAg52uEtdP3gxhWYX3g",
  "key13": "2dvWFTgVYnueSEYUpVrGrXbLDrXxzjiJ2iCBdRkuyDJL65sxoxujFqxELUDnVn6z4F2b3Ewgfyjk1LA8XGuGXWE6",
  "key14": "z4K7YTqNZmP57vyoUv8TnH83wzBqRQJP5CJRkoMBH365ffBgvbBKBumJ1d53vqqMkAg2Lei2r9Y8V9fvKisdLTQ",
  "key15": "5PRb5cd5Datvman5KEroUhSWWh7crY6vNzD8GxYxQJM28H9EN9wA115dE4Hk28y65btpDBZgg7z1ytfNnqa5wj34",
  "key16": "2NJruGSkcuS9pxtKS8EGTrr66c9X5bq9ntvH4tE6BEPHDNVPmgBZrCJKJrPH3BaT76AZw7RbcC7JMuRDo84CyoTX",
  "key17": "2tfCJS8Wrwmm2WQUXX4UkphUEheKLsHmaZ68vMJDPZgksnDJnEkHck4C1DgYtoMBDczEyjD1z2Lr7V2jthGCLy9y",
  "key18": "5pdxeKSyMFgZbYTuNrqTQfU6gsW77EG4R4zQbcDV2HYnci3rc9TCy3KWDALDC9yp33yGutMZvcwatcNDK4aT3fjq",
  "key19": "64UD4Pimvvr5U9McMN4vRwYuDxNhj7RuPf5KcLiJwc1PaFgsWUfD3CVo28yMXtoBWykvwna73Ppo1Dd2vqX6oLMS",
  "key20": "62M1vkhfZBzvE9CXPFKLMwNshej93PuYVqxsNxgQ18sM9DBnVveZhrjTna4T7frhTbRfQLgcfg6KHdBX8qJvsjz2",
  "key21": "59xfcmxPSQEjYgCB2CoGS3nqFk41Xejr19i3ghA22G7pRavMovExr8iBRNswAihMoNU2bAqsFBtzMTwbcUMQMdfk",
  "key22": "3xVR4w57kH66wsC547QLHeYc664ZAswoCvA1W2eAALeJ6W86p6nJoWS3LSqpJjHBNfL2LWHjE2D1QrxQRFaaKBEr",
  "key23": "2D1XVRoBzywMfNFA9C6xkpP9GMfyjZMoQVZ3gU1uHV1zayuNxBbEYHz8WjNaf2ap8qTzbzDnHeqATahZP4a2Qum3",
  "key24": "2Rbpz5yq4oL8LDpczeyKkHxDQE5URJWwr7cfg516Ev5bmaxqqVNMdKGyHbjDyi3yPpgNgwNE27t4A7b1UrLCMTHu",
  "key25": "2LrVja9kDLPbbySEyhY1mChxq4TH9TBrcdQEU5aFAujLPtF9eLX9toAsnhppdkG5fZM9hhiMcXmHj25qwrCa3Zkb",
  "key26": "5LL8pDUC1xp151G6YcfqpncGmQxGtp8YdmXmRggAWaidXkhg92YqvAqEmxPYc2xvnUC7P2CbLX9cnwFD514V5Vu7",
  "key27": "26A4AXh7LjEGHqT8YebkEjDxQT4FofNkJ2KvPKxv9wfYocDPLdxW1P2d8Wj5m1ivEGpGHzbr5bFTZVJyfPVUWEe4",
  "key28": "2qSQN9TyBzyTm1cN4L9ZHYnBo7C5L7oM5meVqaqGbgnM8Han3zbNDqFyPgy3CAJH7UNqf4ahPSf1nzFeGvaiWEVt",
  "key29": "45CZQzqNmj4KsJ6TsDxVZGWXgY8zxaUGdqNav678ARrjoQ3jN47biCHCgSwEoRr1hNPn3bTkdxhgasVxLoHFGpmX",
  "key30": "UZG7JAHwjWeFzte7TE5Kso99K6qexFowDgEaZ1BdfYBxunhptNkhvLnBU3P67wpQ8fk9emLCJqwuFipqag8JYKC",
  "key31": "4L3M3eAMFkA3gQNbxjding5Tfe5XiTZz55vhWjLTrY73QPQ5bpY4W6EHGqxUsgbh4JBFK1Jzf56xModU6uWvWsjz",
  "key32": "TmYawppMzYmyZThGyX4vLBsC2BZP9ELzptm6HDHW36PYKHKHDxvRe9T1xnZ8bHCtUV79fGt25mG739gnWAGi4q5",
  "key33": "3T9DazdU9UdLztQ81AbiKBccGGFWPEgpVojddy8KyXpfs3YmnPSS5eMm7G5XHB6wd8aDrHTic1mjr8h9v7kxqKX6",
  "key34": "XyNBDYqbAt7MVrSuxXmRmKWKjYvKmHwBBGt4LBcYxB74Kyyv4EqJN7sZtKVMW8J8dpq7NQkpyUX7KVgjPqv666j",
  "key35": "36aVTbU9eutK74mMDskgFArCh25g1bFFUcwt6tVf1Jkqwhx4hPUdbDqJ6QR3zyFmdzDpoqR5muqoRqLeuaGUE41p",
  "key36": "4sg1oRXyYvmaKdzEgf59Zf9GsSpsdeuF2SAir5fZh9xP2fPadb2bFrWAtxiTmxEHjd8tKxDn6LRyHgLVJFKAJq9K",
  "key37": "2w6byftzwDQnEFa5T8E9Zhq1epDMQKbYCNxDUD5UFTsBQ9a1vh96cFSCE52xyMVpGQUgwbQyqRpGQK8KQrAF27aS",
  "key38": "5GVXcf4HbFXAnpyyiNJYuQ658ykfPgAhjo17dEt5D25rv9sJd3H1cvTcTzf9Xm9JqQ8ESrJpruYDsMG8CguBgmND",
  "key39": "WsHXNmxaDqRMT5TZqkNF2xsjfJV4TzmQicqNCa63VXnP8qpxAMCJqDXHswcQagGvx4nXNSyps8x89Fp7AjhG42d",
  "key40": "52TztbtZkvcq9H7eDEmShK3kvEzbVXLvjtxh6ZXHxTzF4CqPeCwWraoFMKws1pXvNdVju4xgQNmd3TYtjk5TmnjD",
  "key41": "4tsnEWZvV2gzA3HBqtXGw1jPXpWwBLddo1Eg8RgaKszBsexftd31UgK2rvjeb2xX3wpnLAXNUQE8cpse2WXbyjVS",
  "key42": "pHgVNR3GsP9sHmCgPRvLRdUrJE7g2UdUdNc4XUbDGuEPHEp64dVPVQNx8qefMVSv31peivrjYbAaZs1Rd88fuqc",
  "key43": "4MRxPyJj1uB9R7K7N8EXkmyys9bQFUChJHBAWjPwVGR52Gk7VDwKCCStcGxBCSU92XSKJC7egkFBfhukXvVh2iPk",
  "key44": "2VxAnKE1jn3yyp3siePx9SL2ELjcAzBDB42a8aRNeK3Hn8bab3sppvpEC6QB8LUg5DsbbDu4R6U6UXVXRpkspxgy",
  "key45": "xj89SReyQkuxuBSCTnVGKVj6pMKtZT62v4xrYB8ctNbFa8LQxaiCbkMQU4s3XcFJKm8ikeY7H1tdw6WkEj3X8Fb",
  "key46": "Y5AxhKEw7B89PJn4Hud8Po8rctLSResAuWvxuHgVve5jjKB75pkZDs2hP5sU6SSDJbxMgk7Zy8a9uf8uAj2b5Ci",
  "key47": "5ykvCtJD7ZQTzQDNQQW3hvrVf9NzM7MPiPbb4dRQR9vZbwSeRP5hwCnYt9qEXesS2hQiP9gwwLBZ1vqegqQx8Ax8",
  "key48": "45r6nQwRmGpE7eMhE1i9vKiutD3FPRvqoJMDf4Cn4hCwwi6gTMpt2HZdhnZccGPMpPb3gpLTQKHtBbVTLsnNW6Ev"
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
