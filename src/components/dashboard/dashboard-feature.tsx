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
    "4xTjfqNZxAieSr78ZmhDkh15MmwwHARn3GskcM1NAupyQUq9UwGKKcZQepZn889iek7tFEpnxpucvWDZpVMdPxqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GRmvMHBe6knGzLfV1vHZmth4rENppas37awQHoMjgekd1vTbZ3ydKvp2xPHfGV3NT8DF7Dtc5qwB2oAR8sTsYvb",
  "key1": "4dczeYVT2QNnQMCTe6bbvHYCuwd9wBAB5vSZMbxTRcStXuPNZT8fEqqWKFNxR762drZCxvShpEW6rBHHjB7qYyM",
  "key2": "39vKPKNNuPBN46M5NZHt8nKnw6qQER3YkDjESKgYMxYSdehV7ZRrjZQwBKHEmRzAKTBuFDSipi9gMXTMn2wh7BUA",
  "key3": "27rLPfSzVZhcXnqY1Cd92KpWYEKetpBfL989fbQpJqp9FjF7xJL5cDcPguYXV3oaPy2xZcooX7MRRz6faWMc5Qg7",
  "key4": "3C7igBDViesuxM7s4pThWpgtGtwEWKRUvfpNERejxxBJRWLZbwoCVHQo6d8BK4466tcbnz9uoDnnN3ivLjDMzFue",
  "key5": "5fjRafd5gx4Tdi14VcqFR2UhsM9YeeAhLYUTAR4HPPXAELA6q9guXXb2Pdeze72yGxkiBUWSiGYnhSER264Pt8EU",
  "key6": "iGWQgBWyD78XMFodUhxaYD9s1QPU2tef9kziQPUUtAzc5rS1D14qeyg3ZVLpF3UCVhj4jrbjtpoDcBo1ifdZpCz",
  "key7": "2wfnrzJPSRDkB7KfRjkE7ztHXbkpa7nu3gtEFtPpJ1LxRYL31jn5xrA1yCZgw8WxSwdBfyqs9V6UU1PDDWnEw29Z",
  "key8": "5nmv8dBnbEVQiaXF8PW8cmawnhjTcKGEfmXMdnrSBUgLVHwLpAdBT2aefpxcXwNpmhBJajJfGsUEqEqF3RGNDqc4",
  "key9": "3iXLHrTjzETfdRLM3SyiG3SaZjJZRA9PE3aRstBbLYAC4rRiq54v1vRorWC7BXFtyBUW4HiNHYkq1vurmWnRj1bM",
  "key10": "4snqva6WeBK2786vjoUmF4ouU4JxEwk7XRFsGQvRxRgLwBb36qimancDivxU7ZEh3ChFpG5tMnc7xrEzDc3mhYy7",
  "key11": "463rGu31skvWK3dD2AnmBzAWxEwbcdZTwBAFausjVqqQMxUBGMhihTA7VEdt3fDCjnmUeEZuHhKWW2rZegcUMoFB",
  "key12": "p6Hp87sBcPvFjVFMCHzkXVTcZpgsiLjJWxcFcjrrAqi1iPh6WBTDje1kQ5Y3tvYv8QRjEMRkkchxdCk2hnoMtPx",
  "key13": "56eNwtgfQMwX3ESSyjecv5o3oUBqdajGRtQMD4M7nxVjiA3Qs38sTkGF29PoeqJVffgEZoos34UW5pQDp2hdmLdN",
  "key14": "4U7BvJEke3yGVUexHfhfWDSgLGMFVSmiLGoUVBhZfspUbusiWhrStVZDE5mAnyVxc1MJn9uFWD4BV6dmQzeUDjZP",
  "key15": "Rkh85VJ9aXepjXZjAXHqFkf5r5HzxqfSs5JqqXaK2it5RMgGXZnfM7Y4aDYSBZpof4ac42sbuwmvxfbDHnhuf7T",
  "key16": "2GcMUtKVppZfMNBTqndNkY9JGZFjXEEdLZPZHkLWmnxv1C57gK5E1ivpNDAsuzsMBUZ9h3s7nErd7ywb3ztPa8iM",
  "key17": "34XVBAcUEs4JQS1ek2iH9LVv5ojsGvN54E2dyo9aMsoGftzM7LrxAzgTYkQ9sorCXoBYQFGLcXRAQzW7Ej8CUyoy",
  "key18": "2a3eRJS5Zefstb4pJ7Vv5B2YDg2fqsqYfss8fQWcUSWSx7JfK4qCzZnfFx2XDhVR3eHfyHvzUNoH4HEr6CsEvoVd",
  "key19": "2357MgjjFYsqBsj7xTSxXt6v3srPVBEMDssEBqibKijNvnJBZvRwdSeE7Bze4DXcy9N9TwALxzstnzYmejeiAUsv",
  "key20": "1d5VzsNVQaUdrmSgHyKHpiriZjBQDd1JTHY8nqwHQ2Mfu16mmoVv27xFbqG3X9wnUkdGnh93XdDSLMnt4C8zFeB",
  "key21": "5Kyf75jx3ZTiE24R4aqvZNMrSmXvXwkskpicJuCZ14WHJn7es2pQ3LWrNECJ497kN9SJ3UsbsmT68MgtXLr2724R",
  "key22": "67dpa3F54xKSrFPtA7FDgj2x7HCTE5AnsnVUCW6ifktBLivU2v8S7ZAR4nDJes5NVDcvyPwtWqmZtwySx28sXkoN",
  "key23": "RRedrdpHYckbVd8fmGLKYw9QYxiLnCtDz6V7RrYTD6LS2qRey671jsUE2MBHU6nUhiKoPu8gJaTtfXqbwGL4D4h",
  "key24": "2mBRe5zyap8TfmdniY7C26yddnX3gWgzQ7EtcKFsPcTGbYUVmCG8yR7j5eJj3z4tU3FXXzQD3PqQ1wcykdnyz9w",
  "key25": "ZS6SxBgyQXLm7eHYmXzSHVg6hxU4JRTno3wFZqqCPQTKrrmGhVm9DYisNF41AacEhDEoN2F9vzNEzck7w77YHB8",
  "key26": "q9c8FBRe1kpdwKbhF239P48cWpKTBTzWv9AHrseGAQRSEj4ZTKYrCv7SMpc7rT5HCuqZGidfk59LneYupNVqWTo",
  "key27": "5UfT5rjqb6hed8jHBXGGSmkM7vqX6UcwjXDQiiHhhV1NnvgN5oNYh9sLuHGCcwsDrxLGjECXHnQPTwxubNJMwK5a",
  "key28": "EW9Cr9VsQGNK3KMkhSK8mGxm1iL1N5s855TrpzESjVjCsLNmLd43VLsyoqtTRD8egdHKj3GbvaQWwiADQxZPYjf",
  "key29": "2j3S8G4cAebtDgyGnpsi2MaeDEgAS13w5txuvF8xtFCwnmYeyRkVc55FdtkcoTYCAP13vseJt1EyvF4C6XtSxJnW",
  "key30": "2X9rYkrnUWLvTeZHCWBRXpBZH14Hpb7JPpqCuky8iZmJ2aX3qntri8bXZnb5cY1nekSA4EnGMasPdz6vwKhpAmzW",
  "key31": "4uuPGp3BrHuW1xH4ES9V8XbPNkTanTZUmVYtPE1S56NZVJfavCiF8WgdSY1pseY2bfWxd3X364CaDUVg9xTEYcPc",
  "key32": "ebMY68NhdMvWNoZej6Dzsqpy9g8BztnD2Duryn6P3zse1yRq78nLdjJSg5tDseYjwnvjKnVhy6RZuGYQ4J4LhhK",
  "key33": "N721hnShp1u2SawUHAruLMwbyRnk22659n3hCHB4bB35TaWxnT4iNBWoZc917ennAvod6NkqZJKs2P8QdhATGVL",
  "key34": "U5GUmyMfgMiFELYReuW7uS81PTijSFUS345b3FVBTXqfneynWg6s2FNcDfTz1MCBCvDocAZg9Pu8wPHqAfaaTEy",
  "key35": "ukYYHPUt9zA7Rf8GQLzQvK2PwrNrVF7tcEUVSnGJtoW7Rr1R9RdWvjG8kvBrwd3hYTA2oqeNnLc2uyPk2vEn2QE",
  "key36": "5sNLx7CKeWmcEjGFKKM5PFpgtpTjUkufy2GyAePHcU7STHy55w5XHBJAuATXYejxfN7retEq1e9kGdsfRDJnacNF",
  "key37": "2SZY5aE3qoJiv137QViZDb8p81BgWQcqLvmMvaaoQVVDp6tc8cNNg2gvHwWTG6V2pfBu9WKMCNySaRjvVaXdmdTX",
  "key38": "4HofY4tCyAkPaHLmyDRZBQLJ5ZS2AhHSRLQV7Tn1KoNyPw3LzmWjCHWAdaKzx6PUT9qU3WG4tw3E8pGqiBjiKd48",
  "key39": "511gw4AZ91ckPihhy7oNkWNg7FrPmSd1Yu2oDBujkYbsqv73wxVgCsNhgRMsr5mkrwNzUR795AqWZpx5Q7wLs8Dh",
  "key40": "m4P5orJdJ9FHYcJnQ7FCYsCKJMKui8CLV3Jq58BGEF1oiQCNRqdGJARF5CzjVujMyJnequ9CjZmTzU2Gq7wjjWc",
  "key41": "4s44w5Yh6Ve3RboywAaG8t2DHVqQqqf7WXi2Ca3vWPQRhJnjUpBNHUYQiqrJVYnaV5msDhuGxsUXX26STuyptpE2",
  "key42": "3QXzA7zei79zRaXxkwCFpT8ysq2TUPESnMd4R2mhKbrbaqbTkJjqiRB4qmQKmtcw3ugPQK4aCY8tFKfvoxBWcKx5",
  "key43": "66rSCRPQSBf5A64uWr3WYLSsukc26gkT6uKaSz4dak3A4SDbj2zLpVNgVCr62PzE7vfyXD94Pd32c7St7qnXwbP8",
  "key44": "4VZTarAiWJSeF4CxaC8bfpBfH5KvSjPF6VBaZHFDnAHCxVhD2JUDEj3NoSS7Lnp5DwhpWkNjovGC2Uz9315f2vrf"
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
