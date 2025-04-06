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
    "2pd3WMTFddMz8JTVw2A742gVjKeXx6LgMiudXEdVBkYdtwyzzFcc7q44x6g3feZmFxvYi7gm3sP8nDwz1Yv1y2HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BraXreppxobF5jWyk6r9UmtC8v3DUbsZgBX2Jq1SWQAz5jnEsveEn5FzcxqgTg4KYAhafWC7izvrff7YLxpTFHU",
  "key1": "4kQ9gKvrQuC3iVMNgRsMk5xVc39A5KWob8CZ1SMzpipiafEPZ2Z2CgWHL6oayirME8HK4xxSLg95ATvZt8GqeG43",
  "key2": "3yRzsM7pjBnBfgSfNg6x6br1Jjb3X3z9McRRLjcz4Xvn9tk5zqLR8XUC4hNYhUfCgfiYNBeaqWxqK4QSemAuqNSm",
  "key3": "61T8RApyqs1iNBEbavQQ5xkUqBnrRFMp8mJpUKAnYmfnpXyhs2Q7Ksur8HbEuortvvUVJQxFBGYbSboFaXfJUQab",
  "key4": "PHLpP3vsP4v158mGRK1mZmiH4GVLjvpZZ4g5zpwpjDCP4DeLWaz5sFaSbnN8muMogEgKoaFWCBFcm57FymKWoYo",
  "key5": "oETSCQqwg8VgWTcotWGDhHRU5NAtjXYQaBxQsrWMNnXx1WVr5PdUQpTMaR4G2jfEb2Fuu4L1gHo34fxpYz3nnRk",
  "key6": "42ffDqhEzcFdNUc4U4vsEFayG7vTDk2rDmwc1dgyS9jSQqxmuQcHTqWJQWE4mULL8zNcVaBPLwQTdCaD8UaBPDYZ",
  "key7": "57Gdcdc3FxwTGEJnkTKkGdsh1vTbcR7KKdoiMMTJ1DdJNPBZwawj1KNHywQHfGpm1hNARe8Uowo7M7VGgvfdHH8M",
  "key8": "P45JP9bCP59dMFiJCoiiSZ75B5jChcpTxj2g35gVNrShqYUmw7kj36Q5Zyz4XuqEUH9LvVMgpKJgyuTBRXZoQ4w",
  "key9": "2sKVCvuaM71oMC9ePoxCy4f15XXBYNivXBmMV6pxbU2DQ3twZSThTYvG6Y6K2C8aqK8a3ydNiPmeJ5kWxhQ2E73b",
  "key10": "LAMKbsZGRc6UGtdtFA4Sk4iVc5gWS6uCyNPWBSQWBcSoNZ6PSzios9nMcbcZSBuwEKAsLqxHGt3TV9wHByQKcby",
  "key11": "2UNpe1DcMAQi8Z4yiGGf6aJ6EZ3CFL9ka5G9nUeAH9djTKMz3Su9mDou3k2JeGWyN6Uf41r9x46FpAKjiwacFKF1",
  "key12": "4LEEk1Kgg8kXgMqoLuKZSkQLsTzvmDMwQxQY4k3VK2BeKvjUa4X4REPNmpF6itRGR7KWYv16TvNJJG8cDH24fN9b",
  "key13": "2NExjo7CgY7F2sXP1bncrqwgWy7dzXAkCVzMNnftYDmZJie1PqpVGbwMrqdneZ4PRZvXvhxVByoe2T3X7s3uaZgz",
  "key14": "2UP3FB5Snyzm5DNYQmqXqm95WwfQJb8nDuBG9Q1LPmsiumq9zzTGF3dY58vMy1hJVaWRL5cvkyohxpkqstZ2Mf4R",
  "key15": "2tmUmu5mbqMkaoTC7aBcgY9GVofJTm6ESaKThUCZcsY7k66DGR9Rir1hzMHcUYj5ayMGtV1nE2w3TpAhm2gR3ng6",
  "key16": "5c6sHWjNar4KqsnmHz3bfryWtCSmnEEfp8q6LZawSDwC19rcAaacTDf1o1aKg6fc6SD8Sh5qCW16ZotyDNZ96Wrk",
  "key17": "sFjr7tyyyR8uJg68t2Wv2G6Fchg6RL6ZB1pVVLeBcNZMg3qkKcWTeVdugvVdYgFxgbifHNEBUp7UhpErHRjYHx2",
  "key18": "36cVuPfqygrSjEzi2U8KHa1JsXSaXzqaGhzS7mCPSx9HHoYyZ4wrUijLJnernBgM7mPSyqXFcHo9zkTQuscAFQQQ",
  "key19": "3E9z1Ffy7kCGikC4PY7ecPbPeXCknmRPGdo4uGMfwnHa2g2PAQHg9w8heffovQa76Qvkhn7Sfew3U9bQFPKCRMud",
  "key20": "3GJ94n6BSXs83ga2BWcGWsTCkL4LtLTts1pxjurr2UzmhMZF3T7wHttmMBoZSuWEEoJGBb84iVvv7XPGqqHDYZyX",
  "key21": "5kJdYddnCd9fDTcfMswtpwYb4YYEAeY9MRwLoPG7mWPWctc1EobVoRvqySdVAWdYjF8kqnR7rLSgdCVfdS7KX6Yh",
  "key22": "QBMnebg6UTWcGUbhXrN3aCJveJNk885PsDFMr8k6j8BuHDVXopgwggxixgC9VTcQrCBAcrCV9uWhpEng7su6tgn",
  "key23": "5DHio7wyjm9iGRHmQdwADf7pmfg7qQce3cFFjM1PjnfpNzz2Cf56pRXsJq7jv51k8sfh8ZYN2vXKCzMWWWBzt8qW",
  "key24": "3iqYv7zL1Dgevi5fJDADWThbL5QoPYr3FrqgAUZLAGXZNm7o7BQAGGY8Jm6XfGDjNgomSKQ5pFsXVU5oH6ShkTeh",
  "key25": "3DRtUdF558FenG8aNjc3tUEDExvDcGD6S1ejqvEVeUFFjAXSW48EQc7SzEwe3Qe8x1q8b5oNqeNrAxtCa8mw4tSH",
  "key26": "2EFAq3Bcd1FgoxA4mHdboxzR6Qd8TvjXRvtmWrqbbMtYwNznEiYDQQ1wG4fd5zZigTmiFTuZ1JQ8AMas6rXBoRan",
  "key27": "VTTuNMy9fonxX5jpzE7BNZDBJMuoHdfKmDQH3aWK8MHd1CS7wnWFSUBBQH2xNVRyLmmfYiFYAtHkwCsfm82bJdU",
  "key28": "5VUjEpfks5EsuKYWDkhz3NTbeoW3zCGcJGGfM7JurCehmV7JbVKPmj927MMyJfdVsbYzJWfzGE1qEnafaFqD7Wu",
  "key29": "97TKXjLBLqddG6F6SxFSDKQWEe7vqdKRsbqDxgRAxYwseVpQVc4tY79cbgUxJ8CZVb5DCdwQ125NoGGtDmmJDwn",
  "key30": "3JhoHK5vGs2pQLZHjTDfZdGGhJJ6e3nEtZDCVM85JweGyYt2DzpyTTtfiHNCfnE95YGTNLGXoGQrsykkNXsna4DN",
  "key31": "2UAxzpdw19sciZqRp9URNmX4usqYRccRF4jPL17drefYfrHd5eaGyCxzytAXVwpY38GPKAAGBPjoiLFjdtppS1SX",
  "key32": "3ZfYGAaG79G2SAELcCH61SbZ48iQ5GxFjjFiM7D8f2LvRfaTcwUgWZdhppA7UEpoeeDMEAbVMe1rBqtxsFvDpJGu",
  "key33": "2wjxjacL8oXtuPTDhRSSZSMyxkAtTfksUEEUHHevSwDRQxGT8s9DAStvZJ8PR8eEr6et33v5iwQZiDVJfoDf55Si",
  "key34": "2KEf83imbgWwt6vHgcrEzqXeiwTNVLC6GioYjXpRs63fvxogj1hLZ1w2uJKu1FQQ7rA44FP7eBUnBa4z7Lfvsh1k",
  "key35": "2LCKNJ5CPEWrDpAWoj9DuJRjEhK2XK8MVddd8G5QX5hEBnrKgx5GfBahYfEQmZCjJGEHSge6ByRXUfgoUwMRShkB",
  "key36": "5xqAe3ssDpqNu1Mb87D5du2FQhwcgMDAQaViDZGYEmZBHixUDXR8X85XieNWG6UpBMvC6MJ94gBgfASJzKh9zrrz",
  "key37": "4kVumwDyTBNJdKrGDHygvPMJj4CZ13o5UZu3GVuka3crCTRnAgQzgEyRFGX5VKWyFsnA99rpyfMijgcVQHK3jjTi",
  "key38": "5UpGFp34bdbe37kUE88VYBmMqqFsyiPG2Vv3TnZeKJdnUQcLGaPjYUuodvTvagbFF7whyknt5rakVppvVLY2KPXp",
  "key39": "3uY9DamY9a73A5ur2oYiotV5kF919aXD6YJwByQxGyMSeCx43ZtUxGx4GmPWjSSMtR4sjwzNUV3TYm53Y5XMoMrv",
  "key40": "5sEvws9TXcZRiktAt99ArXCYWY9fJytNv8GQRZjYdLHxiqQRMDFVvrd4piLNa9tffv1tLCgS5hHYLDcN1vgRuTyH",
  "key41": "2FHXnu9eAEyTRCNBnSSkwnGQxUgtGQtY8LMdApAuc27Jppyt4YjsM6VPf49w3C6NcAot5ZW2f2ZX6Zo6MxeiWkZ8",
  "key42": "3NsszLQoq18M1qVTgJDB2jNwq9qybUmcfammvPU7jX5bDTPXjT9w9xMmTu6ocTBY4NQ8T9arKYw4GrR3r1mbjFCE",
  "key43": "RFNYDwT9TkftQuHtfqQVMYvsDXCEwREurDoiqSX88X5j2uD3Z8gVgZRWEhYpyeRoRgxezkFjEQBJkje5amY9BrG",
  "key44": "5AoKeY5HX6ijajAaSi8ptPVuVyDwuUvv3dyZrc7hzXNw5C8L9NkXbg87psPQND3dvm15qBtvnsoxYVotPYgB4xZ2",
  "key45": "2Npmamwn46nUfjfcecNdjtvji7KvRNxbzVnPTsHGMqtSqTMcKUqp4gwqXVwpCU23v72okwHebewBZ8Q7YrMkgBAq"
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
