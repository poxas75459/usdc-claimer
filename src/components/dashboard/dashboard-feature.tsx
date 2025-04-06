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
    "56rjP8AvFGRTHLzUG7s51xNYjZ5jJTnNxBXWaDwZSjRcDu4drUD8xswBP7hPbVvxiHvfVktPsnhq3eGvAgA28UmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWTY85KauX3fjGW2extLkjEoCkmcj9rNj1d4po7rWqSV2mzJLTvYEh374ypf72GHtKBg17rRExbNVejnkd8NC4E",
  "key1": "62wwTPsqtSLV1DF8kvnmnYq7byiCvt5uAJESgEPXbQsgtxvKv6fXMKh7dB9iHxp4sGGuivMkoezt2uE1J6mu7L6c",
  "key2": "2r6SG1Lp6Xh2mWuGgtUCWefAwq23R97xLUE9LbaetTSxJkzcN3Ax1RkG8YZBk6QfwQGf2efsLXt1szvowD6gS23p",
  "key3": "5xn1HZTytPDk9cEypR1AK9jm6QntWgCEwFW73quxJF2XEBEGxwJqcFjAyUW7CX3jTLquidTZH1REhFSCKYVKJQD5",
  "key4": "3S2WdhMocnAwPbBrnjQyR9vJFhh1FWmkGM6GsgHRZaRGvrfBwtqmQHsXZNjwhNfGiaW7GNYjobr2ci6BbajWT58G",
  "key5": "2tce9nt8hhjcf9N4dp5VEQqnqnb5KYf4MSpG6qgevMuikcvCK88mYeE1ht1Jaw3CVRU1PadLFmDMAfuDVyLbi5rH",
  "key6": "2rq87hgRWuz98Ev6D5oY7GR6Cr7pdZyEPXsissPtyLgon41VseYnPwWUk79xK9epeYQXxsSxqzL1NA6Qe1cNYhr4",
  "key7": "285my1Sj15dzPXDctgLRkwCBN41YwbvcMw2YYwAKNWircTLBBa88fAooiLYTcam55euEzE1uoZbRU2fWQ6hMPGFY",
  "key8": "2hqtharPH6M889C8pRwxgAi9zwMcqV1VNq8xX5yqpqtGgRgSC2bcnGnP219oGdxh5wsGwkgXBns1tssb26o85Jhp",
  "key9": "2138LrU4xXDF9iZdAYVEqBsGZ3Q4S6oQ4Py5DxPLgvvewaQBtXX7X7DEYMMRreNgyPgKisWUTQXxAjozaae98SHJ",
  "key10": "4j4bFXRCrHyDCUV1v3fQc8BwpXVmz2zFWbXTCLyDncw23WjnQRVxsuko8tSW2T2Uo1UCKpkhsHAD3UwKCmyfefPU",
  "key11": "2GEPneXjhaFKxtyUQxFg2CojPVXTGnfvstxXHWAjngYphEsjSSKeG33PebUTECZXnQnoaRFnihZ5JrNh8yjgwevU",
  "key12": "2dnepowuqeRvz6TEeGsfZHott13G6fHCqF4du3mnLoGdXxEKi7V3RwSJE45EUsnvmawKU5zN7z2Z1Tn5M76fwJv3",
  "key13": "2sY8oHhRYJ4kn3hFsMpQEe5BJUyJ7ctXACNdB6VyopE1rKnD8PAc8NudUcg4uKJPmRRRt6TWQXSVt2eHiQhHoyjp",
  "key14": "617ePkR4zMx8TtUE2NC8UyTdiMBTiq3LtYActzPQ7h18DQJvh5mnu5jUWW8Trks2kroBekAvEajxXnTKVbzgLBR4",
  "key15": "3C6J5kHG8cvbyYjPXGnF5TN8Mgukn1fNXJkGLHLWkDo461guGdoymmuxgGeZdPwWCaTSn3oicMYB9dnjCLGsFtp",
  "key16": "4YHcii418ibyFMHjV7zNAPBpHhpqkMwaxUUa1M9D6fUFB4BdEcuJmAn4NUug2MF1HnatuW11g4hm7rxsAAX4g7n1",
  "key17": "33tDRYrMNTGd9skf7Mufef9fyVNvksMpS72end39YCXKF31259BUPcXADgv4rFGFaHyxkJ4cynzXPjA9JGWeEDrH",
  "key18": "46HsC3qfqZFYrMQZfdmLfpaTAjNMpMn2hW7VqedC9pbWBfjvByNnZ8n7Fqquza2kvkAzumuTNkmT41qMPvnQAgNW",
  "key19": "5gZSSbjAcYxMMELSrjzoubJ7xTf6VcLa68MEsi2fw35bWHkCbWfUuUPBRQttt7uQ1qYR8BZkcW7rvqRikqCzwRum",
  "key20": "4D6sxVWYrwWPcUrjfhmzzGxASdefFioxQ7B7yVZsRgbEkmvBqnQ84TP9pgNNGzdrCh6vM6N9jkpG7dPTvjDKuvhd",
  "key21": "4JB2GBHJ5zF7XWK4Gu9gUtxQyJKCSJKRbi3ZTyp16YEYZewcwHMbWYuTSNfpmBzw65d4swfgXqL7BotVQE63rWBP",
  "key22": "32vAquLv42y9nNNdQKxzov1HkKB8D5c6ZNBs45b9Jqr79L4uifLQ4CagPXPVXctjjuyE3fqrP4hWMbP2dmAzpBHY",
  "key23": "3BDyBiwpUwrPc6idGhK6TrCwXMAHmLxGe7mcdrnTUdE7CDA6zscv3eKHHYGSoEQNcfjQHpRXZmNxNmDcmqvevX48",
  "key24": "3HAeeisWxaFtxo6hYe1sxdByZ33EN8y1qcvifSMvjn3dewT7Wcn2Lf6UyF17d6pKxNic3w7K6VPnSBaoQY8sg8VZ",
  "key25": "557xv52TUGUZyxtRh9gPsqPb9cPngwsynsaGY6spN38i8rgjGPbtnrZoh1KmYxp4hBfZbgx1udGcREJvVA9EDroy",
  "key26": "3ceqT8SEXCDfP6R1bBrEJtrNprBjmMbBU53G1Eb2Dq85onSZXjHsuUybFQTttwsywDWFid2Y7XnX4NpQZ1abYuhy",
  "key27": "sForPEdKi8SGCKH41TffhNtMDKUBrjbYXcMNsPCStpCWmLSNa2Wx8Hg9c6d1N6zKQ4rwECxxnq3odxFDaYcHXVu",
  "key28": "PyE7QU3j3mQA1V43M2t278kgmjf5Minivu5Bt1WiMGrQqmkASBzKp8vggJVtVaoSxocoVzaqSzqRUnghbSEjAgM",
  "key29": "4XGR11Bp8tPfLfvw1FzTDMHQQ7cbHJ1Fw6Qwm3zeZQmWhXtTojQdtRBwtw7JSLrt1W9F4duJqf5oaqcmVKpXQUDu",
  "key30": "hbcy7PeXmwMKadwJbSkTrnhtwcqe9eM6uw9s12fPE8b5jXMUGCM25Jp6yfBLe47dBnq9GirQCz7N1hBaM3TvsWY",
  "key31": "yAJoXUtb4LT5w2vdoswXYvqo2TdAcr3bPwb2egnz4cYwUYVGQ6tZEWXPAoKmWht99A2VsiLEaoWLDxJGE9zMH2j",
  "key32": "3ywFuwGtQZZiggnoRyp9VLtFhDpHLtpZY7akTbHWVAjVJEjNz3NRuczs3e1Tf3hHrwHKecJQXEyV2JCXjp8h3M7Z",
  "key33": "2j7sxmZB4E2p7ebk4aBmbJ4JByWknkJG1pvobGzMzq7uCZ85jDwnu2jM9RT6DyHo1PaCLkRajt8aMTZWTqGn7epH",
  "key34": "5XAM3mDbFtTaPYNvGsEYkNMizFit2FdZ6MDDGT44qmYFKENJ2fMZRrZYf1uw4bbTWjgMFV5NBbvZzrRwyVrFDLHy",
  "key35": "3DfuqBE8mH1JUwp6mLdz4nSxc1MXbBJEt3BNy9MRiuVLeSk1WbDL5Y1esDNFVQrEV1hCkEjnBeiu2d1q5vFy8TqG",
  "key36": "2sxqDM9QFsyVMrc3osNrXr1jw74ucPdrR2G7MLyTD282fMuEAAXnixadfwZo7dNDVDe58Ft7nh8TaXjhrNKS5JaK",
  "key37": "5MypBn3T3SuWPhxdvMfpCscKQzrFq9vgERAcJGrqTNTJRY8A6SXzkneYDPJg2rGdFZLJmQHQCSJDKrpZ1BRuZbYF",
  "key38": "4gaiJrUiy2CqzDAzyWvjRphBGTWRxGQw1mwyCnFuDesym4vrqDF4PeBEGDBMMxhMTKobHbjDKXUHweDdUPkLKfAH",
  "key39": "45jp1GtKSGybDHVcwHZnhJ8SPr8Un5yAMCXQz6Du7QUKPNeL9CgUUz5K1gKZF5SZgxQup49WnsL6XZ4aHwhkMepg",
  "key40": "buu1m6SvpTfaJorva5b1BodkubmfZ9Mvu5w66wyUjVEZLkAWBVHvHeGNsDLu3gxtmEXUb5eVPTiBCZiJEv3euuD",
  "key41": "D7LCmjF5GdndfnwNrmn19iPBttfjJX7YadWh1RSpcGryLAwp1egCy14BciUApd8VS9m3u3rCZMDw4chx3H5vJgN",
  "key42": "3Z8dGWiSf29nDhuxXdoS5NeSHF4pZvGbw7K5n9RZkcPiXvWQ3HpT2RT9ReLnJWWDb8FrTXGUEBuWU6eUHxBnn5vD"
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
