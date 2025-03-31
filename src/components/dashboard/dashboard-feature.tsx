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
    "55TDq9b597HZCQScqjwZ9Sxt1JQKALE16JVvR7yRmyJtYQTsLdwhG4T7fCLbc5pM6b3MAmYFXq9eerQHJRqWNwei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4e5yseNa2Pobk556vdA1yHnhkKjy3KvLsq76FVHfyJGi4kRSPEXs1cWtZ5mLgbP4HCNjjFbRCNHCZgUTHvdoFM",
  "key1": "33QYABqVPESNcZGK88YGjVzdP6HoxYiETh36DQCQBYCf9PFEbkFejJRjkxr75CqpdojVPPQKiimXLy2zJw3cJAzF",
  "key2": "36UsFpHwSm6gBGz1fH3TM2npXokGCvLgHY3C4L5hcabdoAL1q84aGBFLGEbRkmmBUtqWXqdkkNDTGAVU8Ky1Zzkp",
  "key3": "3GNBJopDaT39TCy2MTfNynzkXJ44BN8m4hB62jDSu9AcMvxmhoSSzKVASs2q8w6626aKzfrt2DKoeaTCFQ16vhmJ",
  "key4": "5cByBDWpf9fEEqS1RsVWLmE9S8CsBLQkfv8Tz8PnzqnNKWuncGUgsK4bJQqsXD8jW3gmK73Az1oKULbcABucqwzc",
  "key5": "2mtT99BLq2hhZnWWknWfnjmPQoXtzDTfnin3saR4tZJHfLA3ppaXhuNkQvPj9Gz1xcr3en5nByprBsUUcV14ropS",
  "key6": "5su7fdNhqfxppUdBem2FAM22uvTnjA6G9jCeKe2GRXgfXJcyAkbKGHQHd2A6SdwQZjKZJpWCA5RCXSP7qP6gN2tq",
  "key7": "43pwJWHW2eBhwCo8gD7KFXEibPN9BhGbvBtTTN4RPiEfrg8kMFt7fWv6hc1Krct6WaTcbPZRG7ASFUvMsZPzc9TV",
  "key8": "4eZWPWQiB1PEKXQQfBsEgsEfFq1Wv6SZtfrxh7WaEi1YCkb31xmxVLv46DyVWv8dvMpJjdh2hczbCFrX2Q3GgT6U",
  "key9": "2J8WhoUHAAEZSX6UssUPGo3x2DBscSMMSJuwbr3WEGYjUJ1ASGVVng7j4akq1HN5aPicQdqxV4GtSFENMjGRtQN3",
  "key10": "3VpYHzVWuYph1NDMxpYMCXhzfKHMLRzq2zfGPem5pxhCByhi8XvnRHXkjsAwXmc6s3mPBn6yeEUDgbJtA59TYC7v",
  "key11": "EtaMhrWNqhcCDW4ra8GuPvbapLU7z3qryS2qz34H2oLrjGXWzBnVHL9E2PrcLfCWUmeh4ipAQCNTGJtNrACVktK",
  "key12": "5PmMaJeE4XLHSovYnD3WdfHAN2VDEk22RH4fBGmTTkFUiwLNk2tY787DDobHpvwwW1P4GCvsetE1xEp8srABDW23",
  "key13": "2LMTUNcCiXc6WJP86eov7atXuz8CUk2VnLMkHGtNKpYzojHtXwSrN3EXU8JsopSVJcPoKQ3Vx92AubfrC8rLoHzU",
  "key14": "6ULZsfnbbbZSpwowFy9um4c3Drg55c2MeEdaUvwZB6ZXcNjuPDYYjTXk7gXSJFDHu9xs3c4zRGKyLGVYQX9vpPx",
  "key15": "3WQcggjqu6n16PZUHUD5J5VP2vHBV7Suu2ZKRdiVFwqx86MRysgGXUgkbh74YqwGh8yfgjkr8xB5ccvDEFEhGW5N",
  "key16": "4jZ5ntbYbqxR3YzcurBfzf5hsp9eK7bhSeLkck9rYyZeay9dyJDnfiS3JXeRNAJ1AEAHx7VwaCn7e4G5skDKa4gu",
  "key17": "5aegW79DCt2469XMWuRghc9oMk9sUrqfxEhZTBPfpGyKLKfwuUdKSWvCrvHZRjZEbHpEZnuED5vGW4XAZ7gZJCNi",
  "key18": "QvASJoybqV9snG87n677rjeZKsYtLagW5kL2qYrNVNxtcXKz1qzx4ayTcpEgCGVt2VkYLpC9AgVcVZK1q2KtcPx",
  "key19": "4HJqHw7ijTySz8bWcmmTgyqC2crXJkdYYR9KTyoT8BBmaVJih2RJM3BzWrjbfySid2UVfDGSTEJhyCat3H2qs2T9",
  "key20": "4Uw7TocXJm8rhQx496uq6qoJsw3K5phVh5sbQ5U3kXCSUZ2uZCpHN5amgjr7b61pGfDQRKRYp5XpYZmNz5oXppHp",
  "key21": "2Z4F55BkP756AiJJw6zv9xQAaxJiDnBmnBJ4XJYB2BvcKaeGLnU5K5NBFGX1GjRLJ2z1Y7qagkF5iz3cFwJodChP",
  "key22": "41wnHx7K7NvzfaKYiJdzaUu7BcZwNH7WyyxdEhc3sUfmmn6PNNzp7Dwc5N2FXwBaLDSmrD36NgKSYzdNyt5gAgzT",
  "key23": "2hZM9LX3ddFcDfgLwVEhFd8vcdD1vxUfaj17PXKgVH4VKF6FBjq619tJmT2tdvetEn4F124C1qZs1gBxD9zJHNyY",
  "key24": "5wBXSuF1gePsbqdWbHJdQS2grX2bEWzykv7se8dLLAMxzoteQvbBdX1v6XQJmgShSKFPqW9aJGfqvqe9wTDDS2UH",
  "key25": "tH6s5r2sTCzvZoxUbU14tY8nQf9qvZ4Q9gAWb2E4kdGqLgDzC5es7UWSUpTzWcZZccAaNzYVEAzRZNJDzVrgxpU",
  "key26": "51r8bzg5D4MbNSYuXtQwUpJsaKkQzUjR3C8hPN1vPP7peudzBi5S8WE8BFvG26tLXvWwubi5MDUmnGPCMw6QoVTo",
  "key27": "4Pz6vaJ2NeKzLdrpjDLwLiYHxSincGjDwgkr1FhTqb2MxzZi28Y3TUxGzBDFmLJvpZ82SkAEw4SNfo6F6vKgERYb",
  "key28": "4m6Kimif49dKVG9UiFugSA228B2bKyhQxkbkUV5ZjtGe1HVnCq1rP56f89xpEUy3TyUJN7WpkkWuykeJe28oJ5t3",
  "key29": "2rryLvpTR9DJTByQLWrH8vEJrvH6oR7UaCgTLaAPk3UJmeSz7BqSM3KQEBGNSCAePA4Ee9nnh3GVZ1xu4ZfDjLRa",
  "key30": "3fVf1qPWY9koPFcJToCsmHVxGK1C7AsYgge9TCsS8numBqGn88PbFKH53CCVTJh4bbGYkucM2eUEoEX2vLkGtMsh",
  "key31": "2M3kG5HkKCAEVPMVZi7oy4TSy1Q3YqwKp3RvRUwprEiSSuRaLTPkcwQufp98NEqC6mL1eCBvS6sWkatrZYmcybUK",
  "key32": "5RZ7Vc2xLhKBFN6vQHFGzcPe4GAPJGDzvVg5qUcDk8gZ47dp5aSMb5VMSqFpzPwKYvEP5fWBDwwCSqRrM3e5JFwE",
  "key33": "35EroeWPi2787FQ4TMVHBPLTthhJAmAihTryXaei9JHNZUM8oUaeC1dpkSwHNSjALKuzqTZNKDeWu87pSLugs8XS",
  "key34": "498w8UeUd3TcmQnJpC6c4wmV25HKTN2c5jbQb9cHJ4xUzUJxbWmcBRdfvehiK3sNA41SGXZrKSWKWnbFi1Gk3vMH",
  "key35": "3JdzMzRDsUEK9ULdvFbeG1ZxxWbkiiFrU7gWFPZjtSrt4JwBPv2N1T6NcxNcyN5bmaqXaCMXUfc8u4mdXjEwQpbs",
  "key36": "3zdJTvwqnW8ZSQq7caCTb7zZxt9TNBHKVFfPHbvY4tSifmYVUdyvGb3QkDvRFP43c3JSXRWH5JFj7z1fytPRjx8z",
  "key37": "t2TEtQB3JQm1cF6EFQmUGwiufetGM1k97uwiHu78izR5TDkfewgxxCexRtJ2R8UsEah1pFZg9U6k316R31oCZaK",
  "key38": "5tkqXux2FcvyfGQhKavMiRdUa1DXjDBeVgDHSep29NqpW3SyKyZY8ikVxXsAnbuHcGrhQx7YHM5mF84G6poZZphk",
  "key39": "HYXY3thLt1npa8C37BVyKbqEmwBasM5cpdU5bDKYypdfr5yGFi6sY9qWWPWBsaEDu6TxFJkGumTBDFjPiiLQXoy",
  "key40": "2oDDRHV3FhPQbgr6HpFfrXhHtocK7DXoAEs7kPxMTk1M9GSq91zWYqX18qiEPhmMD9g79iLSTfQnC2k7GXaCUjZM",
  "key41": "5XRJBbThX2bgZ31h2pB5rfDYWxMJp6jgeQnaRvH247BuLoJDFXgcLp8vTCAabbsGAEs1z8hyp4W9CoeShZUsStLe",
  "key42": "5ijZmfWu3dXF8a9ADF4FSHb8HGCrbk46n5R5RQExa7DR6yuubynQbRR2snzvrBJa3HQQpRcM4WDi7gMPtqjKYWiK",
  "key43": "3sP8ivD4wJ5VTgYN28RCxHDLVyHSpVpaD1kX91Jz8QiQKmrooKB7Jexzba1NGY589DWdH7t2GjAnq3s4Hiaw6HWP"
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
