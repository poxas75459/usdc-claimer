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
    "c6ocQBv298dtPVCqWUouTD9Khugsaa6gHFtzypTmNBezMas8GmRZcpubwaCuaCdSN1SkuYjdhNSBYCLWhgHHygs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pK7Fpmd3eTxeYLRKwUvbbKGUkXNKi6ZuRze398suQPbpFxwkuhcmQghe9HenbVoNp5dRAB3WarW4BEWvwK1KFa",
  "key1": "59xigNJeHmMnzvwhywPJ1x9T4kWzHbokuiXPgXkEeECoYQmcbsDnknVyL3ZSDBb9PywktxoqgN6VQ9pNgDZ8XPqg",
  "key2": "5PdrS5fevv78apu6rMPWD2mPtq77A14rDu5Eq7fa3Y4sxBuKQEYaVgyRvzRbuqpXkum5vx6p6QNrk4s68Zmamc94",
  "key3": "3PhitfpBfWS1BLw6FDdJBK4eCx5cKtQUdbEb8yv6kNeicqhBF2oceCgGYQpayFuw1FDcRMZ4rWgzEaF2ZvQFmaw8",
  "key4": "5rgZtL4x6bL6QzPLgPJpMYKuPiynaraq3xk3VZBzYryihGoy3AKRunUknw8uf5aHkRsuMPPWoR53EfDvZtjrYKvL",
  "key5": "3SYeZo2RBycntjN6oYvx4LSdo8ro8q8C8noYtKFrskKsPboYcxjuXa8WUmBhtDabXR9BVFYNETvg3tM9BQmRXsS2",
  "key6": "2oKQaKNX9vuXX48SMAPE79hbbRvq3w4GEZHgPHfkoMFXH8FGgyAsbh9KebUvfsVv5uZpiDiUzrtG5BQY8VwbsmFB",
  "key7": "3aqp6sqX9SxkoUASRzJpK9jwEeMPzFqkQBUkoa4mQV8j8XrrEadqomPhBUkVSwKJp9vsF4mG6kP6VY93sNibebay",
  "key8": "F2FNTfFDBjGtMHjZXBMd9YF1R1WSe887DQxgbgFQYgNPYN5CpWf7NUuRSEaFBhZaYtk2N7DumfhCqq3HZH812fh",
  "key9": "2qi3E6PF3GAwQjtP4mQdhP5h5rV78nf53xNjfjqp7vQsPowjRnhqudarcXkdhzwJmue5BvPBmq9qdRbMuW24MCsJ",
  "key10": "fsQHmGEdVReT11D9nKyN9wgsgVYxiUJefrqbxm4AzZ9U7iU14h2PceWyGm6dz48xyfdZkseFggdZYTU91WaHTtS",
  "key11": "Zx52PKneyDK1ZDng6UhSuybZZ3So1WBS41NFDi4yg41epCjVRtnncanNNoms8z4pV1KdBAD5qwYtbvGyfmLE7as",
  "key12": "SGYTPHfKChiMa29sTRjCi9sy4nbmjze7d9EysHjvcGSk7vV2kEypggTjbFoUQdNdLSQ3tUDNYxfR6Zoa8iQyEoY",
  "key13": "aZ2ccn9uHbv2mTQsCzRiN3wrGhWivpxKoJJi9yTtENGaKvFbT9dhcMJti9uSKciRXETmWr9s5qAew3bHrRp2fx5",
  "key14": "4nL3uV7UThwHzqjSnb6XWudXhiHepL6XFtBwfw5hdQ8K6po732RbxLgoJDwHanM8ZqLYrhUpTCkwnKundJtpCqen",
  "key15": "g1UJ5MtyVhABieJ1ifU5RTmJgVaUwExrkQCJPcmDPtKAcUuYrqsvnTW4DWADMWuj6fH1oBvHQdZ8aTnEe14Wq1y",
  "key16": "oVFNAo2KUVStaDzNxhdhvDUxj4T8g6ZLoMVQBbLBzogKqTXHR73BAoQsVouxtcm5JRkpmdYPA59rdYpGNejecPC",
  "key17": "4SgSKMMkTpDHjBHFf66LmEqp9JLURDBs7KoNAasvcQupXjJW9E27d2GRQGtDABrRNdvsKB34zLT9ofnvmZyvSmET",
  "key18": "39BfF26sCNTFbXu2pmx7TnqxzbKc9mPdztZnEC5xziozMdCft5SewZUqZKSPNkRPrRqLEuWrAQWrdQCqf1v2Avwx",
  "key19": "4X9tVcNiv333xPsUrLkXuy5Fyu2aZLiAA6c6HXicZpGRQoaDrovnkxuAuDQEYmemmCNQ3Kc1hKHv4U4TrZtLihu",
  "key20": "4qzu6sAJWiVmqhjgxcihAECoR4ANhRQfrybY4L1qDMgfvJbAysubhFvbMm8ReKex8NEJKxJgzvFGmzG4wJiGEw7M",
  "key21": "2N5FRSW1ibcCYiyhsqrtoYKsaz9wjYH8qPxrnLPr7r9TBVQzthbnDXR5vnGvL5sEJVdbGTCLmSJB1DJCZcoxqZcT",
  "key22": "2Q5GR2ZqFaEVmUdc5YrqqtnuuhHqzDxazkqcY5dTA1fD7wQ9JoxbBzAgTgagLFUJwva1T2sFFhZfD5LaEr5pqXiT",
  "key23": "2KHYb9kbZppabRa3C8jyrVFSfew97jeBBzwUnbRo8CkToteK78yq5jeqYWihifsyuTYA7e9Tzt8FFUrC6n1mpv7y",
  "key24": "4ZzzHCSCKt83ZDXX6sYEnnL1GHUfo9hHCNo2iJpAEDJUGypFTBdzz8zQJ4WxVEtywRUbs8tE4Eadb3eEY73gmi1Q",
  "key25": "2T6fQE2YNcmETaDnovvX1Jb7otLdahnz9dyzz4zXTNv8ByZ4daV96pnePuP4bgdncDv74do9gXudQQyPhNwuxAFX",
  "key26": "2Y8TGVURfGFdP5gyPzT6nqYxTtNAwE9MQzZ4q6e1SxFNtZkskja7KvLzAnDuWPXa87o4KAwqLTE2X5qmoeTpMME4",
  "key27": "2UZ65GKHnKhGRfpePegBJsWsxss4N48Pz7m1tKhpNWrZHhAh919oab2rnczPyQickkCxNrFHe2UVekwsNHBS9H2p",
  "key28": "3RPq8Qqe9vhdNKWkHVYg6GSw5z8iQU4wwYLNQt3jqKZ8G8jye1Rgkicv5qspGDv9N6mLvDDnfttPsUGtXiwzt9hQ",
  "key29": "4Dfge8oVc1GuHbAxQMRUALFuYtY6o62TvMgG4rgtfKm4fBhY5CuBgx9UYsb5XLYyaCA3mcvnWCqcdgxjNqXfcwne",
  "key30": "67dH1MjaPSFR3hn1ApQhKiKXr2aazxatVtgqfz94MTZCvAg57dzAvqAZ85Wyd8YSTDqW7GznKDxbEYehvQ4DCo3e",
  "key31": "67bJap5FxJsxLNsZo7AcwbUXvDuZojauY1jojh29VALpG6JPCzphvmpryxCJznB9kKsdff1dRuju41miB4E9BgkT",
  "key32": "2MbcFVxZsowxAYcnaHVpfpdcG4TALHgtQtsRQarGdN3xY7eVPUpUFBZYpLsnDfC2g6mZZQwCPULUTe1hkE7zFoXD",
  "key33": "3FwdEDZ39cpGRW158pvdgx3KnaXmTgDBgrGEpo419VbyvVrKr6Z8jibEbomZpc3759VgNibDzmLqipfLxmNVYtME",
  "key34": "3viGDyUaV1s8KXUZZZRUgPeNQ9TM5hB8j95N1h6M7PeubUej5ipxHR3dY8EBYMhifYcnjzXmCazTatWr3dHbHFBZ",
  "key35": "4hCQdCKKwijDYLBpYyhFD3QNwtWkkirLDhnzwFkC6t57WB9S1Vw1T9r34ZoHGT8i5QEVYswk5i3Nqsa65fEQQQ1R",
  "key36": "3qLKZd5ufEcT9UNH8een7TweL8Ym7aEE1QuCRvNheSeHBnAxhV5fTrnspyXBKyoyQQFjyGhiB9thbJctnAMapLPy",
  "key37": "5xWvJCpMYQ7xpZsehqT2iDxd93xBrSgqJBbz89Gkqad515qqP6zCj2ekgxo46vwCq5z4yFdRDrarvfthoKGTQV9E",
  "key38": "35X7YtYvsxdxj6oSBijmUNZKWWyqTs5T7PeC3BXxRuuK3JvvDYMmuxMLcVR7PThVXZqe1W79ZCatgZ5xjMktMmNX",
  "key39": "5HpHxA3U8RcAdyF1xtb2W8QUGnrsfwRGVkXQ4aWqt7AYDZU7pjM12PtSy3jJT4WYU5hotwPA4We6LpwDu7kF5Xsy",
  "key40": "5KqXLyXC6anoNmK9Z3mmjby7t4AivnRkHzbd4k961JSQviPkZApwcoUJZRJLjU8guBpag7b75h1QSv4GNfzQCbSW",
  "key41": "4XVLHjidGLTXByuD8KuFiQtU5Dpmow33iKVZbFHZnhdwxopEaY9Uww7NNRewtxxMwRjzM6C34ky2cSChEtEuvueR",
  "key42": "3HpdAV8f32fLb8Li4bP7XRmFtKXZY6pRC2PYQdxQjPa2g7dQee9hNZr98vWc4Ws3gZuT9LfH26778bYheSwRcMYK",
  "key43": "7cj1SoGTGCrmr2RfSmJFs6yzrC1b2rpBmMRJrq1WnTqmrhRVaHty82HM79gpBJAvFyTr4fzDdDw32BKN14JhXzu"
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
