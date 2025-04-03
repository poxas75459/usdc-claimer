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
    "5onUsxCPQ1NgK61bVFbe1SjjB3vZxCGj6zR5rN1Se6RVC3LrR78ANgFqvtU9ZpYzwCVLbnPdv2mDjHPKyHNVaUcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mzvr9S1n4JxYpbqM9KADpegv4UVsiqrYtE5k3NiGFRDcepN1JhUeytbjnReB6hj5E8oCzk7T4DHqQHU754TtYF",
  "key1": "3BdXCQqW542wNoqr3NLxaHPPHEexSEkCrWhRTWCSS7zj2i9GHJr5qmRsXgpTjxpPGU3y18x2f4zHdJJzEGFShkc2",
  "key2": "4rZfR2xPuS7mKpNc6sbU1GV92VURPtDPi7rGdg9Q7ySFwCCoMDhG45JEVznAAHrSQiSieqQhPUD4MpB4fp6Mohrt",
  "key3": "52T3hVVDA4EjZm8XRJpgLZ5MNSbEjGsFZPGsLVooBZwSbox3s2Vsr17pewGBzcQGp99La2F2otyzLbsMKVG7QzUj",
  "key4": "G2P9y7kyedQvtmPSfWeCpX2A5eJL1Fn2yiaFzKFjby8g37VQVCoXGcUxnqSQUf5FP6hcBRdyDsq2PmedaC4wMSP",
  "key5": "4a6keMML5nzf3Byo4fssd4L4TodkvfCw57dhRJiqdZsGZmmrNuSZLLai8SzkJfuKcrciGjYVLKm9D39JzGyhjRxZ",
  "key6": "3yFa2j5jTQubpsGb4teCytAVXD1Dnj8XozhSnhWxUpiuZhPgWdAnz6HpKz3JyE1WDaM7JBxe6NCUwAGz3bFHzxhL",
  "key7": "2WnnjdcmpgMU8PKRcVEp2pndfrPGwqhyAQZDwDxE1y5axmjPn3jZJRWcab37DK1CZLVWfzCabQhfarK8P2oij4yD",
  "key8": "3x7Q34dSL5cENKyCWZAYdPjrZjQR8jNVEykLt5HB6QL9CnSkukpB9ead3d6iKLA7yRwVWM8gBVhtkxriWShb94r1",
  "key9": "XzndpUxcvDVjseGZC5Q1fpDoFH8icVUgSAmWkEL4Vuzj8sFHd3QN3fXRYCxoBRtBBEFX4rM8we4vFnJQBMSWjUr",
  "key10": "2hBUDQZGtf7FpACRkALrG4gAkdo3YmbCRHwL3DehX6EVsTJ3xkfucVY2TV6ByqXkMpqDXVu3AGV7Hkp5PuTxefj2",
  "key11": "2PThKoTyVmsLP8kRytM9YqcVHVYn6ftQzoqtcZDZ4Wcte7vwBk6YcYmM8GnCWUNbWn2x5bqdeZdDEi3wGzHKtmej",
  "key12": "2shjoDgJhdiChsbRXsU23H78qm4T4QfWWUNKRe2uj5UZ8WW6kB5jnDGTbYvjp9AUsjFZY229Zw1CHqXD4GeikEjk",
  "key13": "37SwgE1RBAqcUMrB8CbbJ9HyH1TNYBdNcm2d5T2ndvvTPfSaqoCdbVYUPggC76JuiCvuWaoy2VrxiCq3BqCYjGaD",
  "key14": "2yvQgV4rDjhdE3wG1hmJNK8FuzHPqMkAHxsyQkcfB5JL6tAuHjNir4wW2K53taHGr3jAWGfFRQm3JnbLkn4Q4ZET",
  "key15": "65MgFYXr7DHK6tV6R5EQ5hLhauZ197R3wDFQc2jzPV5Z5cPu3rQE8XmiqKLCHY6sD5PnA4cYnZ1wUj9s8mtNzw3F",
  "key16": "s7PrEWGnXiUJRtAdtcDJrTL69J8xsybmF7334pnv8wwymdjWZ8MDJDhKfhpYvncK2aNKuNG4YnJS81AZpdiPPhf",
  "key17": "56jgB78zyUQn5eNq6WTVoct4drZJPrvJgbbSGpKUAka5P3Z62Z5gsmfc9e5FDsCgneMmd2RXcMKHUPhjz1UXacxU",
  "key18": "3Rhxd7B1YY1VtozMnyXD4Vwd3CzNaGaLt294ouRymrvyFps7Z98NKt4SU7nedPVUFFqRcfA82675Kh87Qi3mj6Su",
  "key19": "3pbvsvJNxLu7hvF352Y95Jbh5WW9bCdwC8BTiNwVHMKCzCMGxGsDLdoJWAEm8cSWwGv3G4nq1ZjYVHEuufWX45Vj",
  "key20": "2WXofm8o9FPK7jetDCoc2s1Ke6dDtgYgS73ecPqbqQQqPG26jcdj9ymRyhQMNxoGxU3W5nLhmY6HeRs7iu4wPswx",
  "key21": "5oev9yztkJP8sQL44u3j8wKH7qGiK16eS4YdmFVDp4ZXQ8e8dvXS6MfeFTWkxJUsM8qqAgKuJiG6b9vdsxdW8TXC",
  "key22": "63JPMHZCcNTbm9KcUr2X2V3xTB9QTDZQEibP2q3PLekto8dYfpkzyC6vhv6twjPRzPZJiWWx9JBSSxueUdwopcVs",
  "key23": "3soEuwbibaTNPpGyBSXzM1evuYYVbpg4e5Y2Vu8Fz8zvQjDgfeziSkrPbhkbh3PqQyabmyHx5xaDnyCixeAUw6GS",
  "key24": "2ifxd66h4xwY57MgLmenHa6shFpSBCK4kg27hQS2xMv6PLsNEBmLMZAajx1yeKr35SBA7fDtXT8wDgZCZdewjfYH",
  "key25": "3niBxgKxg7nb27dz4fPbLAdYeDEVYmADhMCk7PgN139CG1Pw9EQJjWCpgRLgPk1LaRAXcb3ZnDMk4VWKmPq6ZiLs",
  "key26": "E5WGT3NMdPtJwriqYdjeHoLYhgXthDf8QYme4oofLE7PwjssAWauoNt94UzZ3219FXPuMUVfFc7Anba1nJA4T4X",
  "key27": "5rPZA4juKTRtQFnvNRXmeXFJqJwkjk6nEBKXACmdubGGYWsMbnP9XXswKPeXY8kYf3v3Sp24e8terzBrwmeBKmse",
  "key28": "3tRmXM8Hq6ju97wug747QPf3By6XRVT9BvVrqhfAu4F6E8c3ESfY7n6AtSyKyZyGHCpk5UfsZ8HoMkCqDWZhRG42",
  "key29": "hw7kacjUPzmgWSRsEQDaUsySgWnUUtrebWq4oBQAk24SWTZ4uM18nc5yaNk6pVx9E1reK8ieZwjPfSzncxAq5TQ",
  "key30": "RoiGYLygmaSEybedJiAQ1fgudXhCYx9gJLytFRtjkVXnuUEWCDhocSNcsrKZgzwory52PV4CxU1TVqfEUSBiwKQ",
  "key31": "5rgHL5yvk4bBgPAn1h8ukaUSapu56tfDFnbSBMZj6QFYsCHnRw8ShZV8DYu23wTeyV5spnvTisuQGspaE2m2djnm",
  "key32": "3wNTLFfgEf4nb2KnAbh4VrrNggoiJJRr43tT2wQVDaQGsExEqzdUb2xPfn85daFbdnbyxeaUcahmWpg3GQEuBFFc",
  "key33": "WMb9iaPKxheW7ETLkDvvwqMj6yauUx3Ep9JbbtGDGGnP7CF1iZUCxvzr3HbsVkiFH4MWt3KfiQJd8QdHNSk2XLS",
  "key34": "aqjgWv9dS5bdj6cAXekbh9ewqE4RbEKKmM3Z5ss5cJvYMn9imkMQxPviD3i75wDwAgqziDRYL9cXHQ9ahKGMdFt",
  "key35": "4a44wm2FAwsW2bN2rGgfc6qdukX3iD9taCFMUpLyws3SB32dN2rnb7euqRViSfQouRP9J1oPgtqWWP6AWTveSUZh",
  "key36": "3VcKGsEusMYtLYyteZYCAKvYMXNaJcwg3uLJek87yTHLTRXqJp2WM9xqmhpmX2UArgCDw64H7WcoFV5ierFZmeUc",
  "key37": "2xqxd8knnaV4BQKwCprT7FyKScXkDa5WaJzUu95Jai5aUFdrAVdVqhUtJwzYnZiUAab8R1G2VNssntakMVQFVJ2p",
  "key38": "39L1VynhKW9uWfKBtdQrUgPG8znaG7TrPmCpUY9oL49r5MX2W29LG7pmSn8Z6jVXgn3TVqKW23T8QtEZTMnU4eUe",
  "key39": "3gGqJMNYXXtXbKb9KZE7Up7d6TTyrNdfngeMBQgff7iQjTNHiWsUi14Cf2bY6Y5FiBbGSthwjo4Uk6dyjF6KYKq5",
  "key40": "4Lk8DNVRpyh91HHdHiT35Msjt6q5TZArRhaSR4z6LjS5FfyNDJFGsdSLAZzWDPUgr7RiuVZGLCQJymkFynAxk1qk",
  "key41": "3S11j64X9gfwXS1ZqR6A1w94iTkNuAMSbpgjf3kj6GvRF9qzEpNsAxsyf1mhVbKLQ3WuQYYTNwZcFh3KcSRZw6xf",
  "key42": "3wbqBZcSSJRodehWfQxriJHdpEtLoPrCFFkow7skX22vx5VLJtAAyBsetgusZjJx2WKvGbm9dke8pS7tYHt9HxFn",
  "key43": "37Nun7g89sseVW9d1yVDm11iLZydre15z5i6KNYyMwJtbxHTE3xMeMgHzdinrrGVvZMiMeg7xfT3UjmZMdJVneLZ",
  "key44": "yvVwBmeiTCdGu7ofRAkMQT613WKKBdc124D51PDwGEv4H4DHv7V2GQqyuYsefJvvP88BHMkKc8p4ttAfSZySEJc",
  "key45": "5HFSgaogSDZh4rAQ3LD6bKxqVvN47k8Psd6tAEsSq1t6dFpBnB7NQWy9P1n2JonEn5h7N5KdQC5LJBKc2AWUSkG4",
  "key46": "2RLra8y3Z9cYr11sPSSSLuSDsgUm9RykUUAw636ehXLNBKyse8ZvpJajA7Zc14vnDZB56XCWZV7HEuGdyLkKaSx5"
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
