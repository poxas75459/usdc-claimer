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
    "2T9SKFcmANVY1sLPBPddC3TtXNEyyFHXRf2uh8N66seMjsFfgtaZt5NJXNTphEvUga8QNQHBxKBgCkoicRRtKqkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NSuNCbGyy6Tn7LnRSitdhHuVwWsD9rhvPKj65rMPmriZ5VGzGdFaMSoNspdiKHB5bS2P7DFQKe8UYwxrGx4C4pr",
  "key1": "5aiNuSE4bYNrtBJc5TFPqPWvVmAm1AKgbusYXcSMMg8bJugAR3coN3esURmVCFbvwp19sS3deaXj1jpLnv4zxkJJ",
  "key2": "56CRP8UrGkKD9oFSd2kMngJXAmasTViecu2J19j6hL1jB8Cw35bmnJpA9UbztqCpXU7u59GZER16DnA5y6WYMiPK",
  "key3": "2xjRStz88mNXLRbDRNtYxUReAhhifBmk2T7QAQm3bfmQ2Hdv6yZyQXXtzVt8bLgeaK5Gzc3CqNBJexKcyM7VvWT2",
  "key4": "2J4gPpr3HuaYKSJ6HafmCeba4DZtQhGPuEkhkKLFzEUTS2uKzT9uY7k6TBtCuZeTNpJGA6cPHP6iH98N6A5a1pCq",
  "key5": "5fkEKbqFGFGtcQyESkU7ZYEajybFSWKrUJXwP6ZJoWgwz6Mqgk7KygGUxnDFeL1BP2H17o26Y7hCEZssSWG4xz8",
  "key6": "4Ln2nMdJwv53FZs6HokyZiU6h7zQwBjcoVM1YhJ9aPSMqFKbXKfp3yCqQGhWpPKouJweaeXfncQJ9Yi8Q6nR7cpr",
  "key7": "4NAgPQKtFw58G1CH9i6xBrVBjqNCkTV8YWAtxR9txNAJscUotDEtWn6viPCReLQrFJksYRiiLMVrJGzmkSbgebCS",
  "key8": "m1sUyaJ6YN7PxSZstymBeF7bWoA7EVQ3SLiMCRnEgviGdmWZqZZXNXBBCQawWGe36sS7hH8uk3XJa8sEZnW2iSG",
  "key9": "5WDNjjCgRKEJfzYii2eseR2QNCY3GLhYWf7pvRGhwhddiHi9pLZNjq5wM4JWUiVXYW8B4cVKWza5ztC8bp4XzCXW",
  "key10": "5AeF7YfDKXxN6qau7wGt79TRe1qU3wA2jJUVM4ekLGV9o1wunxDfXNCott7WFqsoG4QftLx7wmBkm5EkzViWTPb3",
  "key11": "3JTYHqo8KfXJUT15KQKqMmVBJUNvUXF95ubVtvfZiMCR6kTxnEmW6pZfcVHrs2dK3qyCibPNAgxnJJ97cQWj5XdG",
  "key12": "3YzTqacV31Cwzd9K8fKm7ei9GCMHA21QDLSHuyViJLzXAMr3aBc4eXe9LBT84GUVdLN3RsajP7fGkkHd6rSARMEF",
  "key13": "27u6CGJ1GsJbQkzMN5fdSN4UCXGbEutNF9x5o9TTkQbT82JePyYjt4Mrt59ZUAJgGwrHkTNmnGuetFwDX5yRc2WQ",
  "key14": "4xZARLJU9dmJR5ZwwZ1XwPbLSfzMetm7qL8J8BzPDMspfCnxHpzSVWF4Dg5kYjrgi47nw62YBGUc6aTCuGbf44om",
  "key15": "23sc9CPZ8CBF5PVphnncadUWN2rDKTZ5vTmyfFwd6b7NFXZzUtWsSRQg6QyjaagtmU1ZdakMHyMJqvzXD8Jf2vGa",
  "key16": "561E5jcrBatpWQtYqixCWP2dxeqcBKdU8cheuxMFnmbCBmjfNDgJzDXDLazZdZTFS1Fj7TDs4kr4eJFnC8bNxKVy",
  "key17": "2CyYca34wAEmccbi3nyqQqXW77hY5yDT7JhE62ALoyeh3HbkDfM5Vvi4zy9EYtp9xLVBei9G498ee7wGvEwyZqFR",
  "key18": "49wfAoWMWNQ3GZv5PScpzfDwbUzMr5wQQW8C37tEJcTgP6rEACPfHQm3SMezc9KPCAmUnc9L2YfFHjLx1zRrbQ3L",
  "key19": "nYFFugPFJx5dSLAK1rByk1av7JioqFBWt82VkPJo98YUdfUgr8UJoZ4ApD6eKnoMycfuK5FDyNQSSxWxAHGBKTr",
  "key20": "5SuXTEYVuJcUg9Y6RyWWaxcUVjyUxGW33nkKGeiAtTBQU3U8wXyYs6mM5n8NwR5m8b48oXcP9699WMAubjW5jp3M",
  "key21": "3gHCa49RoBg92FRBkawvwhtwUzB2oyuK3bJyYmQA5irHDRwtTFgiaCLLos76HqtrMCUrPHFpXWmPV3xv1c3z3M7w",
  "key22": "3TzTq3GKJQeVhg7p7xSbstoYAXDusvEzoGbPPVzQPkiFypTabCAZFSs92nuUBiXwFEqcppFYqbArgnGkrrvaj7Ns",
  "key23": "2Zg5Eh9v3kQHd4bQe7cufQZmngPeXmDmFySR4S4i9cezNyvFSFXFiVAUZpJGs6MxhMxM9csZ2n2f2LPjw4BYDh6s",
  "key24": "5roWuHxVjbGuSqGMgiaPBsWby2waNR2R1rc9daHupNKB9Gwhzjrkm9s4KqE7H6B66q8vnGNbKCwn1ZWPT8vCW8rD",
  "key25": "5LYkGg46ndPLU9VpUGo7NZ41tCeYkwb3L93LzfcNaPRtcMGok5pkHdrzySG43CYmR7aSSd6HyTccUsryiTk6gyiz",
  "key26": "vUzu5APxHFiiShnkMi7DjV2yL5PghzgxwuEaJf2sNpGWYbksXE4g2GE9a2L6LVU68X7PAT7T1XVoyED9v1Mvj2g",
  "key27": "53kn3PVCd38wzSdiTjbkQuSioP9HwCohFMcFHkSVzBGroeYX5dbCWGXHVZJRFrTEATAphG3ng34wNFkhyDfqvMVZ",
  "key28": "3M3vgFMgv6Hznw65dT7CxLrVAZC2pMdD4RYkZiZHXDV6SJ2B9StTttgup3YNLrjmr3RCCBtbRQqsXS5AHRnsVNs2",
  "key29": "4pTCNDf8GthiLcFC98Yfw7FveFufRVuVHe8gv1bqy5kVGwkCkBfeHjH1FsYmpexPnXQSG3c6HuUhN7L4z3ugEzSs",
  "key30": "4SdYwVxf24gdV1Hc5w3uyMTDgwCwyvWofRw8UjswZTAhpfZs2YFG1UybDxL54CfTsh7qEgHeM6WJom8uiUur5Xij",
  "key31": "9mLHaMk51VQ5vxnCq8MHEaeft9aR7uf3grkH61NHRAgWF6piBpwsLbtQNsLabzHYWXzUGKJz8UkXtQHWusuYQoe"
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
