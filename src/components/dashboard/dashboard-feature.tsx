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
    "2YWJGrVg3ZEsi9kpPnbv6pyw33aJxGyU3rvE5op4FBKRrwf9FKXVFZmTkmnnLZPVqCVMntPg4VqsVwMQtHM71AZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2auDtsNu7UXb6LpEigYBqRT2W2kMCHYQGeGgjpn5rL6Ay7Kh4CWZk2pdS4uRWv8CPP5CrsrcRUGiMEPqGvExNCb5",
  "key1": "2nAazPxTp1UXvhRfov8GH7Rbvwu3jiZT8ipaKruFYDVuonB15QNfeN68Y6FbkKRSFxnH5wmBm7wN8jVqVaJszD5e",
  "key2": "3nY5JtGVmc61xFRZH7gpPiMf7tPFzfnLVMPsXfBzbmzwvNizCvdtVc6yedzxBCYeBxmLqAGojFJgsP5N6Wg85puJ",
  "key3": "wZ9k3kKzPkMUJYMdYUNDjJmfFSsmSJdESSCsspNexMpgvpRf7BFbWoqXzhtgjzDZW7ttpppCWjkFL8dJ9F5T8HA",
  "key4": "32csBH3rRopjq33i7yfZNLpUSjGKfxaFdQEjXW23nngtEPnYisDYZywe6Vk6mMWNEyPp29tDa5ovGZxyKa3g3RGm",
  "key5": "4CsqBvH4zzEJzjmzn4gzrPk74nboA1PqsnxDrBFK8Ex8Gn3YVn1ebkCCGRtYJYW4Q2ixnBLS52soW3AvWTdA26ry",
  "key6": "hFXUW5ZfdoG4rx13kJt7ZaYtZgCHUfj3r3w2fe51EYhULRt46sEpauQqAKaEPU1zywcH3yEpioAQ2TtaiPyouLE",
  "key7": "258CwHj1pGJDc9WimkTqyE324YC66Fi74yZjvpsuwFzpf7SfpuGy4LdGGXYEfRwTjgd2UWL7h4RtDLc2qQk6Sbaq",
  "key8": "54mE7ds8VpxBFSNDVH4sHEHzUcSoxXwzPidMtcMiKBBLxQNZQ71jsVYGF3JenXQWTMkXmTJokeyGnzStMkfj9sPc",
  "key9": "1ippKWEGJaa9uZ31DZJo7E8sCPRaPG1oZDzWLpxDBr3yeTKDVpwZ8qstzL5SEeLsBkahxrov4UThEofPRDewv4M",
  "key10": "2nmxxoqkvSm2pako2JUhPuhuFC9qGq1gmRdZUNZH5cVEMpiT7M6CBG8NV4biDeDe6nJqNQ4Z8ShrXrA8KyASNQh",
  "key11": "3JdNSvAHDpQQff3sCgNuzbTkiNpduU766i4XUSwYqpjCZurUunNWkzdRMvVZkout6VxzFoL3kKLvMEqL71mfysUe",
  "key12": "2KVzCgWVkA4GZTKeNV4inJ3B3mzQFJP5EwS8f45CTK8HeUepsL4VHXt9RjoSRsmFYebb4UfFd3TEBBs88gcSwUDg",
  "key13": "3zeUHEC3nM5ocz5orSRUw7DsKg2jV5cn8k9Y7SbJGQCRpiDsigR9D4YZqbaMFtGnKp6SoqZJDQ52rmA9ktyWCEX6",
  "key14": "9axLjv5C833MfNPXjRSrm8jkEePucsr6vDfxcA2N9yN9sA6evLmLfUx4bv7h4BtUzFbgXjk6Cog7U5oYAVpgQ4w",
  "key15": "5cWAKQcTbph16QEzVBrHounNHcvodiNNq9Gs3GJz4BZWqDsB8nctH4DbpcCSu9kQeBRZXoJMYJJTsAuHHcvgxXds",
  "key16": "Dz8moahBaj2hQFKQMZWpP6EGiHWxhRE5T4VqWS6ANCyYDSJ56qHMx5CSxWmayr5rzDeDkZYKwcJZSb8sY7Xk7x8",
  "key17": "kdvGQuqwS4JSFXCe5sUe8L2L8XToG3UmhqBmibs6hbiZwybmcQSkbCMdZk9WGssh4DzJSfMcG3km2cNpqshMge6",
  "key18": "3UQGjNFLCD3mQ9mSDNSR2ELnEaFuge6zUuhUZXAXBM2XrfN8oEapUd39amNGFfxEedSzDvHGUJ6mfv9foqNYioAx",
  "key19": "4w9V6NAVyoyCef8rQTB44BgpWW5emqpX5Z5YY8Qj4CdshiDteXvVdxzA3fzRosEqL6ojjRDS1owJ9PrkQh71udyt",
  "key20": "5RmD8ZXU26jNjtFbaewpuyv6731s2kFDJ6oPSxuRU18psW3y9ahKChbUogu91zTsrXc7jqkmJ7FpuNeiiSNUBx2u",
  "key21": "7vehL3vy8q1qco9MKLLAijBQsgzEnyDFZvJLEYT4AcaRCtTCZmcgqSwxibEzAbPhFCpno832qe9wLA3Y9t3n3hT",
  "key22": "4jtuAUYTwfEnSG93etUigNw1aJAkQq8MyiWDJhXRDRkeM1Dqq2ufjAdajtNRDv8mMA8xG5Rwfq2khFgeVzmLSWFd",
  "key23": "e45ReQEvVEPJasFWcNDhCEraV8rvZb3ZCwbxbRtogdePQPxTuC4m1NsbWauSP1LGygni1X7oNmNwnRH4EwgELEo",
  "key24": "3o4QrZ4VStqdZvEnuTDoQGPKFadmYPRzYVoFGfrWkJVFHKf9Tz2VbvFpaYPLrsDbKgcuaAfUkx7ph4p2SWdd2A2L",
  "key25": "4nhjzEPSTEbdGjQq2bswzZZaXarAfr6kKpPkmcJw25XyT9gAkbBwdTUu9FVoJs5n2p2ns8yUuRe4rf3xErWZ6TF3",
  "key26": "4SP2kfoq64jzjoiLaeFti48KLjVJn7JcEJNn8A6E8ns8Nhccy6ERrkk8yxa1YX2dAcdgzoNjzS2z3qC6qQdkdqss",
  "key27": "5qzv9JmHJK4u9McRkAMedzde8KaUjRGLkgsEVqb3TsvHykLyqZcbN59TNzaLCAzjki7wYwSQ6y1yRZJHh9CYQFg9",
  "key28": "2AHBKH8Hd9E3i2GD8paXjRkz1vWSgCRQmDBj2UehCpkFGwYkE5oQRPAeYDuiicBdJZRQDEmMaN77niW1Z3gJ2NSj",
  "key29": "4tZP2M5Vs6pwHUuoNcCRAM774CUAS8fFKC859z2EG8Kc2GR3TnYTSAmYDJGrh5Jx8GP2vx1fmrSUCPyLAxmWbPVw",
  "key30": "5kj4zjQeAPrRs11huKbv7XvbGEHG2kmU4MU2Q4UkZnPyKnSjTPZVD9g4P7XzNoqedWUyr1QqxvtKDYAr9vS9k5v9",
  "key31": "3kEsxyDRSysaeBgMg3KYzaJQUGSnXYmSCEjhueeZ3MbBFyc4cjrnaHWC5CYmL6hbizBbpKJkYwsRQJVCqYds8oFf",
  "key32": "VvyKUoSeExr4fdZR7wByqqDPyERESi1qUJWw1YgNTPXAMhy21iUC5jg4L43ZXgStKQp6TYNLBKNSN6Pz96x2mH2",
  "key33": "3RPqgiPUEkaAFixPdgK34DkmUar1WK31C7TpXK9AW3D2tJvA87Bc7rzT7L6vTNkJBN5R1duh5fANCtqjMCENv6GE",
  "key34": "4rXcPVf54HJe8NR2PMsdAgiLMyupKVbdMsNyY9Z4pP1ZcVibDk6RFkQWh2pYnXEdZ6BzgLzFQAsqgcNximbKytFv",
  "key35": "2UHVmdWZ5iigrzrQAZWZvp58pLUgK8NedzLDN5RRXrJ6nathTDw7gGBhuhy9xBdK1SuHwwJ2FLHiXU48SQxE6Ahg",
  "key36": "RsBs4zGig1wTnrLNA3X6aFViGtHUPHzze8LRCyJgHDwxrP1ouV3gn8TCVPadDN63RGGsnfPoE6tRVtdZCouCrWe",
  "key37": "4XGutQn4LoFFXdq2Sj7V3T4kXsNczqq3kuhgE16Bv4g6aCrxPFhmvvKpeX8f11A7y8mEeFbSVVWwesZYvRgFZDC6",
  "key38": "5FuJg65GAGikwWGUT7V8BP7c1GE3AAuzHA4BsuxCXoua4K2t4RRx4FBnnhPcumBh6SsGW8qpU2yr7e4bzfv3TirW",
  "key39": "2rHTrncJ5QSxxDkAw6TbHihAkjsw9ZuuW3984nxndTYARUs2AWWKH2r63PrFXqcE2hTpPHGgU1oYirEbQ6iHp4uA",
  "key40": "4TjRCKi5wgvx3fnHvAFoXCTBvyApNYLUHWkvmtWEB2vwiAiiTNPTzaGCw1y5iJyhCsXFuVDfiqXk2hvbg9TX23Bi",
  "key41": "3rArHSygTiZphBvTSJZifTt8PfkGQtsk6Qrdas2rJ3k3tzDNHPHCpWe4C5TWwWvVUDEQD9Dz1ssTEr3MK1d1XCRX",
  "key42": "4eSiFo81YETBM4vUntGH6rZn1d3y7WFrKZts4cwAYm2yfQ4cFAKXAg7NZQ7Upk22fi2cva1boucryziuZ7MdNGun",
  "key43": "5NYvCYAoMRmhM6UhNaNpstnQX7tsN5bSQXjSesjmv7We2cWc6jfaT8uJDjBoYfWG2t8SiqiP73QpcrrQUPtHvEBZ",
  "key44": "FsKPifhSBH6fcyPyeT6YtGah9TSzAz8UeL93KhMW3Uv2EWLKB6JVH6RGPWGmwqg8J5i2VZcJWse6avyCLHpajFF",
  "key45": "3ef3LCLZ8K7oBZqEawR6rQCb5e6WJufApLQ5rSXpnFxBF3xv8PkNMP6B4kAzo92zdD5qjb25XvtSZPQi8RTpP2Z5",
  "key46": "5FkyyTT4swSsrpA3pDhUF5gLQjPVnZJrgjByvKWkEUqM27KeQmmtC4xwhaw9L5jHcAB6GzDasynqvoG3Zzikq9fd",
  "key47": "wAmy4E3uonXAHpc2G3J8jXipsdUiMXdnLZdwiaU2oLpq677mKxEfGdCRzEtyt6rc3GyFyLbVQrqgXCx3hRjk6vL",
  "key48": "4ydLD2Nt6wkCnZdn2Dy5RG9Cq5nxWN3LzGzsAi9wxi2h9ydKNGZVjEVEXsVsGJVPCNV3L9yZBerszkXA734DH1w3"
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
