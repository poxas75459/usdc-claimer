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
    "3t9wRqaiXfxYvXvCyQHdrv4nf8gntCzFwdQ1NLgHsY9KhaWn5irTT7qCh5uLdPm3XhtJAZHcrsYomeQ7fumdY4v9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmneheuC6sjwG7qkrDjSw1W5Wsw15Xx7jbA9mJPnR4j6Sp6fgQBCNdKf72w2An4MoZeU1xMf1kYtJ5LviAyePzZ",
  "key1": "2SbGzFJLBXXhvSdwBTyEZ3cUE5sRw4Qj4YAPaPZhUS8kgzL8hhyRqrBLTVC5RuAHtx6Kk6HRe1RCRhDvmAtGe15R",
  "key2": "558YwWzKaqNxvWeEPdtmKqEBSaBkTcvkgamCyPvPitkimmuFeSbbjUg14NieJ9ymxyn8zK7w5bp2M7Ra9UQTArkL",
  "key3": "5bbyUjq4XBGCnJgmrYn6HDJC3jd22hxW5GKJgYZd8vQK99fJi5c3MGUvBc8br7sMvTMVPxr8iCbo9YyNnY2By7QT",
  "key4": "66hChVPe7Aeff5i7gXGY43XQPmzN5zTpKDA61qnHvXD82beVSgMHANvY74R7Yc81xDQtjyNV25ruqxVUsiRBBSBz",
  "key5": "2V268MxfSpcjU3nS5i43yczcgr6nMxoBcNHXB2QVuNfCaGcM5cLakruaCLtyt19jZSZ5dFUNKdjDHq8wNwSoMA3M",
  "key6": "akmXnSBNXqAnUo4N7RiMDYSTmDjpBEvfmvQczzSAhJ4c9oyUFp7nHnEWXY7TfVYQtgAXkFQYKHEEqQW6PuqUmtV",
  "key7": "3Ws41JL7xkdhKcL2ApSP8XVnDedMGnhaXiayUcHEo86Xmnxug8qyFXQLswRfr6wM2maKLmWmAVtdPnWfLzo6mQGY",
  "key8": "32BYHK8bZLWf1gM75pCh1VQ59JL6aKGCTARyizcj55VmH2Nd8EhodsVZgzGG2DxBEhtVXrkZUmNZEmLQeVDduTfE",
  "key9": "4QNNtpyjMvPPFcVRWjmrKF2LVKaTKRJkmtLw4gFJdrgQRtegi9w4PMnKMrS2KY2kWdfMJGDHyGrdePK6DpLFbyfz",
  "key10": "VwuZMkgixEaLdF5MHuSZGUhYYUWVvfCAPmVApmuH4mcXarFwEaRZNELXqgTzYPL84BjKVNqnVg4wrcvUcuAz61n",
  "key11": "utiEzsjXEKv2vKvPEXfKBHsZPmr8zPuNzsihEUgZ9gGQZMhhpLDQivqipoTt6bc6s81gPP1m8GhDei54oBUynkQ",
  "key12": "3V9FYhU12dg4veBTxMzGF9S9JSzZ2XLHWTo1z5veFKt1FE9iyBZHo52uFP43zCK19yeBz4TTUxi9jYK9tcfZLMVD",
  "key13": "3S33pWHKfGVRDdgwWCPKuxvaUvMeywgLG7mqaUKeaFmevK77JFuHguhPwRVAGAVXviy7STu1p6b8ZngzQVsTYD3b",
  "key14": "58yqnWvV7r2GcJvD6Eh3j7oaMasjDDAEKenf3fYyU87bd1kS2tKZ6BPgLEWxUSP2FdDZFaLdBSVukxW4Nh9PkC6R",
  "key15": "3V1ifyv9uHYgziyVyznww2dG3HYPqxHa4sk79qauSmfpfsceANfRYN53D9vJrhk3ypdD4dr6PMtidRm2euee7BNN",
  "key16": "64SCYc6x7gWHLrUe3wXnJrksSvFQx4JohgsRhVVndWWBkXPvTNiJFb4PNtrg5RZn9j1QAJ2QaHmRWdpgpkLpzDkk",
  "key17": "3NZpKs1GbrA4r1D61gUbpwmEZdHKPKkQGt3YgdWnXcM5F8TXzLq7aeaAQJRrMuqutjwKBH5f1hDrQqabEcjkJBR9",
  "key18": "5eABTbncdH9viZpE4Qe5SjMw7hoTUVUs89DZyfG454gLBzoRLGbEVFnutRvcUu8T3JUVeyT1ayFA3PMFLbpJrFh",
  "key19": "2JpmwZ427FjBmS3kPsF5bZZ7LFU6yhDPjGQZ5vozLvBXsg32WrUpBvLGbUtqz1HRH25ygZZufLGFKZfxXM1efsYw",
  "key20": "5AJT7XbeXSVj4LWTPvu3rBpQsQ6KKFqSRCof87zYiazPpnZsWw3zbq4aGY6EvVaCrzyWQjxNwC37xcsZjBdQDW4N",
  "key21": "4vMEZXh5hXj1PEE1zwjb5PYVZBc35uchGHtRhr4q9kjVXb44ojLzxyJKGfqx1CvdJhMTrVxN1f2fmAw53pFXm9e2",
  "key22": "3chBvAJUnmR1VoK4EYQqm37DjvfDPPX6bfkwF78WoWvKW1ja6rE9Qayr8geamiq7JEXtdVfC3oGUhZE6oBQvQFQb",
  "key23": "4NQvRDpHGDUVn7HPcrzvf3gdSFwUTcgoDgntptM2755bSU8L3JJnHbqybfQidkxQQFuqxQazW2H6cSrNtqig1AmD",
  "key24": "4u2K6YQRBAXeJppUKnh9hLVmCUjXMHrd4cx9Pcj1VHFLfrRWTMpg1bmo9wnKKfnpfKqMrkaqabG8kDVQhNv8pMGH",
  "key25": "23UYvoipoR95PgvrWeiP9ZaGHRYo6gq8GQeepUqRRM8X3D1L5XTEMccGhYqopKkpfXUtcboJe7MY6dH9SMR9XARq",
  "key26": "3ozQnLNZwQUm6DqV42rNUThDVvsBszbJAxyVyq66ZuzQNdSGHj6Rp9kNTLKszqYa5Eh9ZRyGq7P42sZXy2VEUR2R",
  "key27": "5u9QeAPuoCaU6C9SjRX3E6hzokTuZZkBc61C4dwm5bwAoyezfhwXHLN5NwTth9vMZFdZBHAouoEJLyswz6QuEube",
  "key28": "2TgfKNrjRKmjyHPwgMvFWsiKNpspqhK7zmFpVp3xxRTWd9xERaDNsTMvZAxChXVr6oHcmb6S2WLfG3uMTNfdL6dp",
  "key29": "5bkCFsc4RRpjYvfioq8jKG1Cw25qurwbEyWGQxbPa4sK4tkWyKdSeY5amBVsBSF8TCc42CSmt46is8gxpqPpjHjV",
  "key30": "4PhMdvuMyqcHwhVPo8a5sC2Wm6Q9uyCyXhVCDozWFT2G6JL8QAPHcxfKqadszc8jSyRpFbeCNY9sAjmGuPrDW1wK",
  "key31": "4aXV8fQrLetxeSKXjaqYaVEv2MbC3FifHoh59UBtrTWjcYKWpvme9jckpuvy6R1hBdrMeDhdj4RvE8Ax2sRZpymJ",
  "key32": "3U2csfTUtBqKohPwD99L5LVKa4kyintqQhqhixJtqtg5JuLKN5GyK3HMdP4s7ouF1NSteju4KtiuUkzr2LSwCxEC",
  "key33": "3HwQja6z6buhT6xGiKqUMhdDpJcm2o8eUXabCZYtan7EZ5vkhh9u2kdHZi94NMuRPcmoTXy28hRnuLbjaaei864k",
  "key34": "5HgFXabDvPbbsnXrGoTueKmGwNsEu4jRrADR7xLaopfK6k3r3WcySLVZPVUHGe4uPJ7JA2V2T83b6ckqGYD5kQ2C"
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
