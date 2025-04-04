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
    "4WvFBAjsrS2kSC3RBYcgos1RwoqKWZxx9YtMDXvh1Q4quFU3BbSFhyZ489g1jRZzE934YbXXmkJSnQ5MuFqx9eZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45b7o1rEgjDGLh76mMXDXYw6CyyYF3S6WLrNPDMK9r2aqgHsyJrQAA58TL4vpTWnZmBTS8R5bR8tbfzAiyuDZ5Ci",
  "key1": "3whBoF1mGK879vTBE7xnXu8QgpdbtyTKn7ntbH8Gq2fCfGnG6JdFLAQ35g3R6NEgWBeBYcpLB5h1qPd38xz23UG3",
  "key2": "KYhGqSXaoHhvM6LPnWSH7nxN7afqfbzCa9V9xZsZun3b36Rj4ypjWUPMGQ56g8bTv4TrM1FpdHooTT2MkdLax5o",
  "key3": "3VhUwuKsfaZJxnZfQo8MtyVLFXTX7UNRC41zr5eszgm4KWhBm6EAaei7hFpAuQEHy7JLe3hCUEuyBuHo4WudKR2X",
  "key4": "3dqcGoFRbB7DRErV3yn3aMMcAujWcACEGPuJ9A2hSCtwtM12DNY9RtrDPgQTj53aRugPuMVU6pH36NT6FjULUW24",
  "key5": "4qrqTxi6PGRLbYt2pbFgSHRDTaMxbn8dK6cnhTrsWPeWA4Dxt9LDMC4nrKYxfqYhAatm68EJv13h6HabqSZHowea",
  "key6": "4yPZSJNYyHqXYNeCm2cXTqyGfTnT9fLd1BkMxMekYdhibF6MZGkSW2ZxJVygw1LgRMueb6jodZhYp3bgYxcCeHZj",
  "key7": "4EbcvMt53JcLRoQARi5s1sm1rgDXXV5sateWoHE1RRMbwAcPJ38kzVJM5xsYzqWHbqXJpBETGo6CxGrviqbSZE2j",
  "key8": "oehQMgWJvr5zJZcXK9nnvd7n66h9r7wJ9FuXGRSvVEijAqpnvQGPDeSei78x8VQ1YLhS6tirqRofz4dHvz1Ufa1",
  "key9": "49eaDejuP5XZEcAgCDxXGK1uDb86yorZRfJP8PZPhisK8qRE6VCbJpU9YFTFXzkaFvXGXBeWiZk7WSWVZ4ZoLUqU",
  "key10": "3rRLGJoBXksC9Paf1SCUfj542RvK5TGVmTY7B9mgZUC7GSB9Rce18ojjEhGhVUNejYrNvDpqBFbZGNcKYbRGjEBX",
  "key11": "4fRvjpSU9FzT4ftDJrcUq2mhqP8WZ7mYFdsJc9XxCiYquzeJPiY23uWc54zJEWFFLxFxMXucwCej1TyRCSQWQAxU",
  "key12": "5VsCS76ykjcCgtvSvACTBWQLz8izNFkTUCS6SE9qjGdFZYfAcAn1e2CxoAJKnYxnuKXBPLbD9MmQPUpdEtpiTvMe",
  "key13": "3HBLJwhG6uCwQQC1u4zsJp7TUyxH7eb8tDE6SKvseg52Er2iJqC66MPQEom3aeCaYd3MnemTq7dwurM2qDs2AbZq",
  "key14": "XjkGENyYxp4b38kvishAEyCV3xQJvVo3ubRz3SPNFB2pMyd26Cfd4rtmLx92qvVaRGsNrEcBjeRbnwmzsbP4mVr",
  "key15": "5HMsi2X5wgfgvpbsdpkVbfX5iaQV1kd7Fr1JV56YdFQFkkFtYnbtYudSkp7eNgywDKvUqUajfbnNoCUJxZWcvE97",
  "key16": "4XBam3aHaAP36A2H5m1g9T1GRjA7yvfQCCMd7ztk6hJ8LF4rwZBThrje6ZVQzA5U5BuC4ew9THfAaR9K4CqbVae4",
  "key17": "j9pFK5zQwJPjzD46HCXYeEd5p6K5BBRhzhb2nW1Ucat4hZNEu4v6yD1AjLgfxgt5h9h94oMrqsW8NfpSH2G6PMZ",
  "key18": "pNE8auJ5C2zDTwLZSiQLz8jMn1cYEGeDWZhr3EHi8ydEeghbVm53qBLqMXwxTqsuj448k1M6KUP6Sx5qs3YajCX",
  "key19": "yWFK1pN4UZQnq8nFuiMDE5Gg8UDCRXRmgjLDWPWa99kj97ZZAEPvdNNFFnygMw1PFuGrEeF9bPeUyhM1FpZbKgn",
  "key20": "Xkv7iQGYEDz4Vf1FKEgh5gaiqowZmasVv2vfx9wUuUHZ8EqsYyJnMtrhntYAMv2RTyxDosfzXcWXQe7LgTk695K",
  "key21": "rNBzrf2AzV4Xqhbi9W9rfhsaz1uVBEcFXV9U8w8hsRTqyN3GMzhSqZQxiwZu4a2dfEH1Teg7CApxVQepv59avKd",
  "key22": "5yok6ZQW6yRUXjjJKxQCr2cojZbztNTsJ75UAGFFcnMTBTFLNeH83z18YyTmEAupszTuf3SH2xo5jaGitmiDZ6Em",
  "key23": "1CbZZqXWmgxChkYFcK89mCktMgPcBRS2poxf1VAMjvCHyg4vMr8PmExX97HkhBwjmZYwrsQVLqkH9v2C9qUQFdr",
  "key24": "4BrX27ABXsGa6TkHeuhADYSdZJQTzuFdwQRSDYLFQt6PSRha8WjynKLqQGZ3CZN7uy8kLEsdcAncjLKtF7Zs6KWQ",
  "key25": "22CQT2KcqjuqRC7oGJazWaCeVgPLtCZwVSh2RmW63jJCKYXQbBKufDb2HePL6665qrfphBgtio8H5FA3Zpy7XdPr",
  "key26": "4Li3eRi3EWyFLo5GHkFaLrqJAEqSWFcorbYtFFksvULQpTiNwyrwaiVG91nZxzpCXQ2yhiN6roub2hKMesZEKCmt",
  "key27": "3NYYAUW6fBfrk97w99DvhdyC5MvjGTqV5Y9mwWd7mtCVNz1NEjucaLNsuYRrmTwBEgdJZnKwHenVKg56PinjA829",
  "key28": "3ejxwcJ8asaaNedw4gudBKz6LKSozyFVCTZ9zix2Fv565SK2XFZ98p5PkP9PDuayRkjCNtjYouiPr1XNN7D9FUyp",
  "key29": "vB4jCnN4JFqzRvxQ1ffZCMms7pLmJmtTWo1taspMersLfG4zCvNUEWiFfsxeEY3dNCrZQCfXPWikXZ2vNYwiLAa",
  "key30": "2euuLFFZop1fkuhYcqU9G7QPTsR4S4WL5Mo63HjSyeU5yggLByEr2p5JmHJtMRDLGtSd8xnjB3Zufa5GmVjsSWjC",
  "key31": "XoynWSJJsLL7TwY3TeKifUjFgbQ7TTndQE9J5in5opbqFUQZwmvDjTqRWiWCD9p81G2fXDSA5kjWDxFpk2TULSj",
  "key32": "3zqXWfTd3YjPMuRy3upB6baEeNBhfktWpMezpNMBTepH4MAA8r4U2GPdryyVXPjzmnfd8zwrceR54PvB4eUYEzZg",
  "key33": "27oivGsi2qBD5P3jgDNWNc3zFwFNjjCL4bLziuGYioJDpE5U8F2uoV1bZjseCCWeMK7f1WLT5KcnL9gs4Z6qe4wn",
  "key34": "5iZTbYmZNmfgnnjApJnuVC3punDkt1pmwaAzRsBYcozZzZkShwVvvaH6DmFfQxg4Ww4hPBRpzgmwY311SZSsvcrE",
  "key35": "33mC2Rvm5uQosGZCG63geGZHFf6TA3j6L9mgiCRbbtTRDc1fBw1hAeTy4cKGmvxduQKhrDYBr1y1TwUb3pnF7dEv",
  "key36": "2Dvekde5CjsZKKUTvGZ5RbguQQhs6BGd2sCYodK2SnDYbT7eBhZ4LrTUKk2H3YJFjPGFUCNJ2WYBJVyQyzFAZ8LS",
  "key37": "56kgS5hpqa7YphVBuWbRzRwvcEf5vPEtpQGNUkXS3B9aqn68d9REooUbFUGKipT8WAjAuHH6ifSX5gELVgDKocRW",
  "key38": "35zg3xU5ALBzTbwCs29th79y3mZrsthkt7W2AG3QW7znGh5BQQJPyABZakjND6UtbQN8BMzMXX8oGw1BeZF5LXSe",
  "key39": "avzA7HJmABfvbZGTeyW8MGZtrhFi7mpWN7hc7uGAPYFTWJQutducJcrnc5stDf512Rbgay4EHFQ8f46g2qydMhA",
  "key40": "4r21FZgR9Ke8UTSnpQ3VsFHKFJjMSt832PgR97VhwgBQEPkLfhsxfUWjM5nPrcT7nEYDCwE67ovXwEhEpWgT9oT6",
  "key41": "4GnV6c6ZMrJiBKPNUMAg7VRkET8pLFQ8aQp5UffDi5xhagwP5ZgDATBx6C27kC9kxiqcrcx8odxRsqoHfX1rsCzo",
  "key42": "4X3njBXwuQP7m6vodmWK5Fyv8pGuBXbj9PvxrvPX5CUSoFhRYtvLQPMZ3wMhd2EL2B9B9eTLBEznrWmd4jbdQ9RW",
  "key43": "Gwecs8aQSTh8AF3XrVXhpvmUZP49nvNwm7NxZt6KiuFHjn9aHgKmmKBQ3DPvm2NGcCCDCQk8WPAsN43Qdt4vtoU",
  "key44": "5YpsPpqhxfUaFdbXdcNFVCvG2K5FArn8J8ZtTTASPuG6PKduhjRehcQ112QpweFqZ8dqoarvJCumb8AfYdgMNViV",
  "key45": "5W1GJRiFev52Y54D8Xc8dpre6WvaSCJVM4W7XhLzoBxr17ybViUdHQyxWWmkycnChZmu9S3JGhproFczGkDELNyn",
  "key46": "5vF7tB7MDEWgNuD2d4y4hJrzWsDQYsmu3LvVJqzZttTtZpGhCQ88rLE678bmwRgG5LsyAn9mPX3zq9KHQvWS28B",
  "key47": "2QYA7WU7fAPuRsbHGGnvRHXs3gGCu9Af8uJ1HiqjQESRBhwbsgzQ6G5RbpZHCFpBjLpAnW8aALaryh6dm4xP5aXR",
  "key48": "2m1DBGRWVA25m1WxGgG4Tod8ph158Tw4m1evHenFWo9kkSnTdbujWMxu14fhMFH2P9J5SJaUSSqdSsV1T7WWSnNv"
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
