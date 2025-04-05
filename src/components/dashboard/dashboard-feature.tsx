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
    "ERUJMsQRaoT1fUdbwF9nV772AojwudxVn6f119xepVv9zsKRvuHKGoMByJ6oei2SKv4etyzEiUvctmQX7zU4JfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtCgtq9oddq8C5F7o5Cwc3QFVRQ5rtCEAbW5xnBFumVzNMs5dbnZkrjhriNvwUAF4GhqgZcmejGtR4Ww1qkf2oL",
  "key1": "5WvD2dSz1gCPgmQuZ3BqaByjYCf5xK4TJYxVgkdRDwakps2Twq5opPPUwdHzZ3qoEeor4VESFvECLxfwZrP8VhbW",
  "key2": "5za1CPg2E4RUBj9DLB61fXggZzGNRyFo9bjSN7yzPzwQxo1FAnEQeQqhq2cWHXHNRaKah4dFw3ELTv4gxBN6DZUT",
  "key3": "49BDG9ro4DSzmAGvJkv38eb5Bn17VFmCRHnugyNaDvko3B5oARQfZwSxyWuQ9NU6auCgRppP6kuqx3ENPAG9s6Kx",
  "key4": "5qywTqkVfRwPX3nxRZA9wxv26HN4rrcL6ensvd6KDRhj7xm8PqDFAt8qM5VhqLUYdAy7k8Jcv4oTapXnP26piTAm",
  "key5": "2CjCFB48BGgub6W5P66juUq1V8Ct5rWGLfAWKQhtAjuBf3pwU5cZ2bPjhmHohZXxSLqVkF7YRfCysPeu8PusGyPz",
  "key6": "2w1FUMpoay9vyQDTPRMYfyspWXz5hasALdSKy7HyN4zjzR14CUZFJfC1bGwLH4BkKU4zi2dTLzZVz7mW9hUPiFH8",
  "key7": "3v59iPJJrdMYRW83v1BwdBADD4dx6jm7GA9PWF6XzV2oCLzxJQjn1V9AoPsaujTnNZdyn4XGPhWdbDo6Gc945Ano",
  "key8": "vdAbwZXmMHsFxUUnCVbR2zvdPaU1vhiFnb58AWD32mAGz7yZWcTrF6picG15PXcWLcXSKorKNMNKQUZTuJgyaAs",
  "key9": "4X1Fe2sdxYHBKpPkEXC6GwRSodo97Xm8HHd1qdGqpJsGKQohovSWEKgr7q8vZGzaDPFLJ7nc2iuT8a83dyxRpJVF",
  "key10": "36fpqjvwpDGwe9vwgDUA8tuaFJxnCRyXUVHATj3Htd63jntbbKLKfTfvvs1WCppd8yx2hDLW6yGeLwKFssZBkXD9",
  "key11": "2dgkqfjjXpB9mTGeFZGk8P1dNywUPKGdz3yJS1N3obrgcCufVEdaxuw3wM69W9ChmN67kYXfzi6CqCVKeUw3XiP5",
  "key12": "2BQUDSR2f5tWBZmgMDSqMa66kdV9bFLJH5aXvporbFR9z1TJotyF6nPRgmzuFd73tWrucbe5KAMhn5wf4VYWEivw",
  "key13": "4XDuBoBFeEbt1snYBunC1TPLmTVPyjVj8aDuc6X5TJHhRmgiTBftT1dVdgz4io9cWLdUdCXANMRps3VvX724uqdv",
  "key14": "2Mxiqcv11pYoN94wV1468sfkicpULPwi1CMSixkghKMfgo4uEEXq8iAUpHRPMJsa7n1SaAo7d4JKqzqzGQPaso2r",
  "key15": "7aTifFdV7avJMGsQBg2tMEoriTW7K3ZHLuakuYvb32VjTMBf2vaAMS4fBWCQ5Ey3Ld5d1jY6w2qJ2zkYmr2SwbL",
  "key16": "5oZJw3c9bq6ovwuQjKwiibKAZ94jBAHfHc8uRHuUSDR3ZYL2wuaixqEJcThRyuhVzPemMXygmMSVoeZFU81ydX9v",
  "key17": "62YFkpfXhUKGXhiqofCTLT4khgHziQs9QuvbTBRtimuueEavpctLMqhRbbgbSQrynq2dbJWrRTsny6sBj2QjjCBS",
  "key18": "4GcTAT2udfiwsQC8mkmLmj6huWAijAjHt8MDmE2pTJGWQCCx2azJS24VZBekMX5GhGdeDTeamowMYpPGW5kM5RKE",
  "key19": "twDagGsmu7AV6N4DdCgawkYGZsmjEQ5r5dQ7dfHxQmJCMxejydoNN5BELnBWQuxeNiV6JTa7QNKE7xhpZPQDqm4",
  "key20": "N2uC9iADQQQrqz2nVzdtZca6s92mAGTHqn3E1xh962Se1YrVeupZRFqEzwQq6k6GtuXHErP4D5F5nuVsdqiyunN",
  "key21": "57kPVbBPEMXYdk18v6bYikrDcCry7a5c64zsDktgsh52o4MsCTnc1aDXsL5H3ZKHDKyrkYqjYuJeHwXhDifP5hwF",
  "key22": "3QW9AhriBTEDGEANFK76rmanYemydb96aZVQ5E5c2HBC8gZaPPhok9d78eQYJSLvredtiB8AiDyztkFT5bobghGh",
  "key23": "4UhWZmcNEaHB4Nhwh6EVFDm5tCrZCLXYRtCTWd4gvigNNiGUaV9y6sxmYb8eCo6JayXbu5JhWDyPULpigYJZ6jNn",
  "key24": "4N5MDAbEges5pSNfBsgziCXYyBqu8NZKhRcGSUZc3eYxrehLS6Pf9MCts8pq4j3cbhq85JAnZnqgjWw8xbpufn5S",
  "key25": "2qzy5ZjZTnyqGFyDqSnUUsJhZnyk7h5ThKrwXFEYkZUsK5THFzR8ARYNccfteSNBeW26NC1FEyXYcL2MnwSkEbiF",
  "key26": "3n93HqawF5Dp3rAEsXtX4tnf97seMVuxbjC6inUhnsg7CKKRWBGM3BoBJ1cM1ujssEuX75mLAvUj4siQqb53nFNM",
  "key27": "5jUGVhaMAjNdrQTN4sXKxZtJdnKzEGG1Vhf62vExNDW86fbs4bqhQMAVVfr29PLLRGo1M48JCdDDnZ8dduJC39Uo",
  "key28": "2s8K8eWihh1AVmVLD1uajNFAiji3oX4C4Nq9TT9yH7JpgePpW3T23r4cB3n8MgqhLNWN9PXaSnaSduiipB6NU7Su",
  "key29": "2Q8WpJwnhrCXv3FwZeZT1K7vg7cH5ZfEw5hMc2rZbmbCCuu2gFhTBbv8B2TfzKm2Vxy2BThPRarqe1PXqrznJPXp",
  "key30": "2Avbqf7wyzXmSb7DA9Xf9M8rbSTt6K5tgskb25NhjSLqFN3KsZCJ7SzFyByURmUGmjKL2QC8e4qofRe8kr8cApZa",
  "key31": "2jT25SkKbfkfQau2joNxDcePqyEV2iRmA6cxtWA5nyhihNVk7GcD9djBDEs8uaNYh5fmdnmhfVvbfPUtPVxL4c9s",
  "key32": "2a5QPVm2vJChT1nKLMvpuhDfiRZfxSsgeN3rFFJutATREz5YCN8apSm3WNndJu1pbGoQQDJ7rfWqsGsVmwsREfQY",
  "key33": "4bdDTPH6LMt1gGv8y78rRT19UsCP6Jqn9xhHHqwWhmvGPX6o65Sh4mJCNefStbJEeYHXBh3WcGkvNRqtaXQEkLhT",
  "key34": "5BFxTbTV9c9UBg3pWbMaeYDooLFgXo3354DB131ZnxRcfpRjLFWSxZrrmg6Cjds5EpBEMoFdqb2ZnK1iewReFUJS",
  "key35": "34LZRGcBacwSLrbmv6cGCDkLZ1vdab4iTuYYJJaCZVDQ1raEoC56PdGhP5ZGUKQYGS5ja2pYQREfEc2czdjnc3Gf",
  "key36": "5rwMV97LCJ72CFPmRPXJW7MHZ72YNAcXq7PzB49hezHSoRTLTeP1mfqKzf4U9UtSqe4BiBEF569ncqUYPGX16jW",
  "key37": "8a9yrpF1wjTxR8kEa42yHLsAu1CNbJaskh6qGEG7eKAFQo23rivoccB7GLcZJHMJBNtauuNTphxPrEX4Q1NQAZP",
  "key38": "5Cs7hMB8iYhwz6V8R33gnrVVmtL1JM7YMB3GytprAZSCWjDzTAP9DCuNdcsC55RjozRSyVPbC39d1ELgz9DkDUig",
  "key39": "2hH4ey4fFcEN33CykV8TZRNGfUhJr7MZVY5vHXaMvmhXPrpTqp41eUM6DzoA9y2zmLCTkreiVhioJ7XM9C9y42ZH",
  "key40": "h1qifT6prkp4HxGYPmvVqCuaERt3tM87RYKXR9q7sWpgrYFVR6iuo55oFmsg2BSPAticVbTBKDGuCrngeQoQ22x",
  "key41": "3hfm8Lk1nwTKsLpRRKCgJQfPHEyY6jf6dRUULcncwcUiBqFEsTvfrFceWsHKmuST1dxWbgaX56s35bwBnzgVUfrM",
  "key42": "29UJLfGaFH8ihFA55PTx5v3K6mqfZq3HoKLYeU6mf8zLU9WP4ByYc91mk9DteSHGeeo5tyoKpdaKHaBXAQMQM4BQ",
  "key43": "5EYGVCS8bYa3hNhsZJJmh5gsjtQHcsJGZLBihbojoy6j6aUrNY99JDLZWHdoxsgUFL8Ccbzdmv1P1UwzQA6Pk22a",
  "key44": "49Xct2xeC1kqnVeRC2XyNHNBBJETtGSZbkXq3ScUmhM7ncS9zbSMuvSjyRRSTWW8YjPDBdnPiQSLJBAwajdswCQ5"
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
