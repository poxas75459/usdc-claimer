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
    "i36x9prCcxsnvNDLhEmHvSoQ6oyGexxvp47aY7E1Ahhibch176wik3X2tuVRrtZ939nMeCns1S48DpFHp85FEpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXsPtWvcRgerZW9DZa3sEedHfg2ihktuFQgfkc4gksYYRifAiWadbCu5WusXo3dTRwvAo77KzeSkoHAcso5vSkz",
  "key1": "3ieZJMQv4U5xdNNSX7ys7Ld3qGTy67smWb2WgyKK9m22hMbHo7yhKfo4BPZbJS2nR7cCjJKvEN8EZ7vyBZSoL4q2",
  "key2": "4Q4pEcHbPKDyUyLQDpFVZsZCJtdLk6uy91bFAPyekte4fe8GWGpRFTF1tq1gXnbbaCSg2teuRpJVwXoAkGe6zKGU",
  "key3": "4tyUbwYgwz7JzaanTtBixXWRwGf2SW9EfVZy2MoztCczb7EbRhiaBWEex7ZRFdLDWMdHr9J9nfpPk3RtxC2wkJV3",
  "key4": "27YEUQyPXYhpm2GYqP5HYsGc7BUsHNLe7raCCrcy3JJkuS8AKsabzEm59MbmdW4wH4RM5hWyuDECtsaKSYfKBVDw",
  "key5": "3AnFbp7vTfY4ibHZJUmTLeWiVSC3AqkF8bknaP9Q6uJm993waVRHMERoz8GniVNjkf7fTVYend48iZWvRgqLpCcP",
  "key6": "5xC14faw3Lh6pDNxtHtM8Dy9CRwWWjfbVYaMDPot3vWRTqPqZ9UQAhHVosXq4n1YwkeZSRdXxACJx75BtZezauYY",
  "key7": "4Jmasn7SPQo8Ev1ELsADvpAjhkKEgYWvPrTYyW1RMsNoqBRibJAcjTFqjkpEz1zxudEcQZSQuzVoafFofuyehT9p",
  "key8": "Vh2LWURr9xgbVioLxZYZaE9tmt4H9LceruwQRF9DknMkcDVWDYBqJQno3WKv8UxyeUMBXoQ4KQNMLTrg9Kqbjdw",
  "key9": "5gCZbcBdN37Gems86EkLxRgC3YwJ1HVGvW2GXAS2DVkuLT4tYMLLgDSD9CoUz5paA4ifnFcnJmvjYkaA9DAfuwn6",
  "key10": "3moCwDv9CqoUf5QW8pvMWVGAZaVBukwHdnAytHtfBsDWGdW2VpFYZEqePt3o6AjHtdAqp1n89Yop3U93NZpkQH7X",
  "key11": "4QjAEG9ikeztP4LQsnHToEoBE2mFVZsC5C6ArFTh9fHWzGtuZJUJAENcuLerw8ddvbs45TdQ5whput47JQgQHTWW",
  "key12": "8wCXMBAFy6CrM8UBUoqUi4jZQHMi5X2L5BM4E1jtjYW475HR2cmRsLzp8U7uFwwPAqYZDMcXaaHrrus42NVVswd",
  "key13": "4TYxecUDM2w4ThmqY9czhjbMM8wVsMu2hzQXCw8p4tGoF9iZ88AAqhuqioDpCuGRdxbnXnqpGRxb1ykr4cCftRWL",
  "key14": "4jVZFAzuPW98k7shNH1k7tqjDw2sssDMuBdJKi5ikPkbLL8boQfqWfmpdrB2RA3Y1HjfzRNXvnFwxRYEbvqnzCSb",
  "key15": "4ejqRfHchiTNps6Z5BRTVqds51c3x5aH8Ydv6ScByPkZoL7utFiVPsXHXmpzjL32F8Q2DCT9ZisPrwovou2nv1X2",
  "key16": "UfqaFWAmZnHoYtZxQN9DgC2K7J3N1fNC7w1WuhPH899Q6QQ9Spp7pzG3R5ycaeEAyXqdZopysMyPs1B5XgZ5why",
  "key17": "CFR8QX5fgt5mmXCmXRGzxxLdmLEmKkCjARfnoe2g16rDhQJTBykFGJiZD1wQXjh2vwdafChPisvgzfbyc9erNPB",
  "key18": "2xSATfMtyQz7vu7SitaPxWXMoaYEtESCGsWgTTByTKPmBM4qDogCFZnADbsnbsuLutDGDChRHweqfox6jwhPoKSe",
  "key19": "3ueqgHVefd8pUvK1VxfNcYahUrcwTdq9dRabwzRQ962QYSPHCydieFwUuiGgxyyVezeN4epcpnZP6HFHVUCgtMBL",
  "key20": "2wmKZWa3HswaaRsnEBgnNiN4u3Gh1hr1kG61E9w1v9mVNkZpMZNXLothGba5Ne8v6isZ5gHAowTp81DbhhWMQEc",
  "key21": "4hxn6FkZ2t6g5bb3NTqHbqHFYmLXJVbj4pqfwykFmwnJNVR5DBn9ub6k5RCBbVuQoDYyi18NufRvRZjBMVq6LRZQ",
  "key22": "2v4t6GzWraV5d41dbs5CLPAXtXsvBqxKxZDDtCvT1ufxpjMWU86aQehTJoVZ5pqiehUC45W5nnaFdUHgjTXPJ6kZ",
  "key23": "3fzpcrQ765Uo2pn8v2d6RnGGmMQnZ5G2AdEwcGANojMK6cgpe24maFvcHWXcG57K5cgViV3GM3BLaPWC1E52ESoA",
  "key24": "4oxq6qJr2LzNtvs5rNBPwE7yMAwXeHmPKn7QwQVqCX1fBQ9jH79cRxUQ7P3Y4yhsp5uQYix6NxKy1SV8PFqDLmVq",
  "key25": "4bhrSdx4dfYYUGoxa4wmrPQorr7Wwth19PJnHXKCXbmBDXYXozCa7hh3ivK7FNTCcPEatCQVYKhyo5Qrj48CHegr",
  "key26": "ozZgcXUuVUtM65JxmTpzqn5d7AGWsm8zknWe33d29DQAcSii2DoaBu9aypKtPeKqSUGLDm7G95gYG4uBuYJwYKK",
  "key27": "5yS619GuC4YmHHfbfxJbgk42y1NbQJbiTEEGqzC1cMr31whA5v8d1fVCPvTTRB8J85662tbnJPu9NzMepbqZCQAw",
  "key28": "2cShtnyDo8ttYZBDjWbQL7EcczKdhn9Cwm3t2jKusJdxHcqqRbaxQSSkhHhBQTeNWp1XDpFp2CDpebkrWzws7MEd",
  "key29": "3NpSpqQVRrnfqSEkBjNw3NFHzEddRyjX7CGD8xXQfPjyETVvUvi8RLP9MoLydTJ3JxdVJfBvMtChEMWt43ZaLF4K",
  "key30": "dn9hM9FxH7YBhy6NcpKRiP6rk1sbWLzJHwNoXjJyFdk9J9sFC2w3KCmJAmZDETR7BbA1RphCY2LT5wMySTYnon8",
  "key31": "kvfZTVfit75W8KnBshZiXLeUyp1iEk6rFQbw9ySwMchEQGG69Uv9dggGk3ygDhyXYNWwUrWELovDpj73BX32YQX",
  "key32": "iVZ2q1u9Fij1sddPr68TuNTr6MjKZAK3gtp1coZ8muYNEwaswuEVcazrzrF1YcdmWn9cMT8ffeHufqUnmPhjfYC",
  "key33": "3mQBETARrJY87hHJVvM1WHuHW6vMwJFsscxEtu8ry2C4GTbkVVLXW98KQRDnwUrALuXtr5QsfCSD39xAgkFvriY4",
  "key34": "5SbkZf7Azd1NpgdTrnVhL91gG2WSjs55DzVHZcuyL6aPvZZVKVTr5DTwNeXG4j14SX7vcyhwKj2BdSvq5PQZxgLi",
  "key35": "49vi3tosTx3Z1utn7xvm53uuhRLCHskJxgBJk7S9DPYx7qer5z3Gg5xqbYb8qBmbGN27QyXZbsgHMEhhGMQWxwkb",
  "key36": "2cStbLEtiVxeazb2hSehnEeEEpHV52798cLT33FZwbKhSMX462d5ke4FThch6dBnddasNhLdM9qvMfqgBuwkj5Wo",
  "key37": "4zFTRM6ytvLrkVma6dxhZeLCWwWdbQyWvY2WAN8ztRUbwdmPapTiFzxq66GXS5jbo2LRnYUtyYfxG3CGXuruSzUx",
  "key38": "5curKbLXVzJ55NY9zSkvnmqrsgkwfteGQimam4fK4TRQrHbwiV3FbfiYVFtZZD7fCY53YfSfwP6FNYLbtKUsZ8ac",
  "key39": "3aF8qm3RL4parke1gHDKBQjynDrhhyb2xU3csFNSQifVa7pocMGUH6MEGTkxi5vWud71Q2M1PsMNVPRS9JZZCjUQ",
  "key40": "64D4zEunNwiJJccdqXuZ9MC8p2xGhZ4wFXVBYPwWCEw7CAQ2EUEhi5zjXbUtDaQAjPGgfpRANY7ohfrhURBaEdLG",
  "key41": "4Ru7G2MgbQXQbBQgL7KxBDoXokegRuHSeBfpWevfjVFZZsxp6xu7oRjkafGf5X7st6fEVanNbr7DwdfdsLXv2EHj",
  "key42": "BMosy3dYhrgKNGw9KhfFQbkeFFDaDb7r5G6sUFRtgbeo3AdRJABXbBckQjmBRqSB3r6QAZELVSEHNz3TTn1ALh4",
  "key43": "2WPsnTVAF6tLhnzGuyJBq4yrM47NGCgTqNzjeyjZBmmRPC8BUQKY2xTFPkqSXsZUQuPRWQRgFwef55SeJ264fCQP"
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
