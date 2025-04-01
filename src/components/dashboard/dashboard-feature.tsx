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
    "2hhVETQXMnGsV6ZJXErNic3SH4ZMAwMaxX5kcSvDQYaFrZuqT9BTF4dfdpK2QtJfX6juHhEXu8QWc7UQR32x57yV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9uv1Fv2uawVxjaBhyqp4ydC4bwAyYBEhyy5UavNRCQZZSdBvenEkrr9KXDZR17d4845jar8kXrDFKp4LnKF2j1",
  "key1": "36iqsezu7yYhDAiR1VV4qn6AzWcgG9Uos4sgibKzvDb1xNZyhvUjFbfWsTcJXbMQeTWb2anb14BbGanJpEEqYdg4",
  "key2": "5FEHFxsRW9y4FGpHhRctpn4XntS1193V1MuT2jyMqP55ho5Yn3DnnBnUH984HmoYas6ekkFo3nhXqEocFnMJuFjs",
  "key3": "4GPsP8omWZgkE34RQAZXnEEn7L1EuqLp4Js49zKFtEYeGj8vMZhVVpnTe1JYXdqTp5cRQRdK51qfVfbzzfNMjNWQ",
  "key4": "2egW1e3sx1sJeYHbtdtLXWyxgPC4YVMtpp29VMmcBNSM4ccNrSEwNMF2gfGXo9exZZ2P3ojHTQEaXfoXuKpAshUe",
  "key5": "5Af61REa47Nm3AvaNW2TxarXi91SZLxCtfX4UvcAMXKnu9mb2Q8cgG7M2fHPUYfZcvv8xLg7NG4BSdyjAV8qD9uf",
  "key6": "3ZRwNdmxmvjy8r8Q4KTWkua21Bywq6L1kzpawqiJTabyAtt8LCKFjo99kgN3BiXt9UtdinVVos3dicYR4PjksimH",
  "key7": "v4tKAqHyo4jqE9NxCqcWgHBkwhmnqo7oRCUi6wTz5c4gUjVjzKsAu4kfNpnvMqxdsuqXFWX5tBNY868PDwiCFwF",
  "key8": "4RNtYG843BjzRogBhqaGXhi1KDYdZAVD2c2Mo1yEdpyYK77p2mKdY6d21y9DVtLr1ZmpZrk1HoRPsdoUZykCcrj9",
  "key9": "2CAoioenKdEo4iSkQEJtMQh2Bwbr7KnCWbDxt7WGZj95Bnk15ngkSgAqfFPBYPJFnxBAC91XsLvcegadsndYF6XK",
  "key10": "5P83cpDrJcjmn8Kmm5k5MYq677VVFwBVYdNyx7omoBscguGYFdvbmfSkRxhXH149RzNUycE6htFHpqdLGWjmxEem",
  "key11": "jawtE5szZUYoqXkBRqukXQMXPbE1jgEAzeULitdFSys6v2HHjCX1abfoRjS4aAWQyzBDpPGQF3ETrXdNzG8uAti",
  "key12": "4trCPG4Qj4NfZ4XFyFXWouZNChV4uM8CtDhhC5Rhz3n6RzaTAFs69ECu7NsxM4pbeLZoQePzsCvfq3PuqQninWGU",
  "key13": "3RK5K3XgSpCtjWZRp25euvG8jPSXXAKgmtzJQ6t1GcHuS17rDRzCrJiqFfaEucMyPn47tJ9wLfdYqdUc6yug4rXE",
  "key14": "5yH1JCTNKmZBDHd6mFr9KZ9LsHhzkfq14TA4tHcnwi4U6E5B7bgEaFr2G5T1TctGvq1DxDh7pB9MSE5zUvhaRGNJ",
  "key15": "3dNH9qhzRYhJxwRGFr9mHNrzUcFhhYkq1V85EgvdezUdYBmX4Huz2N72pnqCfEACQxk5USeDSYJC8TtRXE6AjZyk",
  "key16": "2UTS3hQ49PL2QW8nStVNssQhDqMnfDK6QiCVhuBAjfqhYhaVhNX2DGhAs6xwgSRsekBtJk1y935DhdstgVewWtFF",
  "key17": "5Aq3YoEAYbcZtsvqsYgaQePapRr9YAB4xfXaH1e6FgCkr6nok1NFVzaBxxeKQDuBaKEa2QL1ts7RJrhKkaZs6m3z",
  "key18": "4tFf2xZfznDX8XovQafP6uJTsu2wu1LgixXeSwPQ4k7vQ5XaBEHofaqbXzTtfV6DdnDbEXPeZJ7RsEpwPxZHCDwQ",
  "key19": "aawbPUE4yCWvhRbWoEdar6hwvXqnvGoKiumSRrfbtK1BwKNpphCTLu784if9hh4gScC6LBjoTNFA8jQSLQu1Ddy",
  "key20": "5JHCLZsnUHc9BAMZAQNsN4gPy2RomWGWUGDyii3zcpzggNjpYoufR5hHVgZSdnqesUqR8FR3Jbvbp9RzQWKPRhLA",
  "key21": "46QZT9r4q26Ew6uGVTSauzMNzNuswumSwzkqHmomxXYWhxTfkF95pk623crow9RvG1xTbmkp276qhGAW1bVVPBVW",
  "key22": "2T6a3KFSb1VuiPmisemQyYkmxqATeSjgTMnPs8JAeg1hVRbpT4vf1aLfytT4ZvU3CHjeAXjeuz3Ux4rkuJt1dd9Y",
  "key23": "5zaeJ2PATHkqpJ2rQQcPrBz6zhZy8ZqbkzZ4iDckYxhRyCKdzp1Y6dsTUcN61sj6vRbqTNQMiKLqb5YiujdrAqWK",
  "key24": "Q6twpQnuykrbc5YLiq16t7kPmSo7878W1tNNKMv5bu8PRvxCQz26EpXGpDJBhKwvphXyVp7CmWDBjNPf4h2tBwy",
  "key25": "1dLqh6p7GiB1GWmACEkk7Hj2e8ZQTuTaiybAsEaKw9yE4GruFM3f3QMw8Qp8ex2te1ZRymeSsbcANMTqvgnLTMa",
  "key26": "3FBuajywk6RvcU1JFqPYFac7AyEc7eqTdDjpu8dTAB4T76NSiX6xX3GHZKy8eFRHGNURhBZaDKjbStBRk5QQPwNE",
  "key27": "25vQ1ghYrxdQaMxYvKBySftr7AxgAbYetWMxZvqtK3RocinLHw1SyyZekj5eCcC6Qyz4MZJZ4L8T8A8mW3xhgbTU",
  "key28": "4vRcippLj6WiJ12haF9yxjrn1FFFFdTPWWmtvyxWUZN7JFukFZLbEEyZbfHgE7pGZnJirsfVdHWpwfyvG97fJSz1",
  "key29": "45M52Qv1KRVjbVcEyg4BMEbwhn3333iHUroriDV9L13N6LayRLwqF28eAY3r9pQDQtzpvY1kMdQ26ASZvbnXGpXj",
  "key30": "1pz6vKocWfWcJeQYT7q4Wr7x5y7AbieuD3hkBqkYXZ18oG9XQQbMdxNaXnphhUtAFMqzPUTbjswGu9JKLWm1kg4",
  "key31": "2xfx6wVFQFjXBEM5sbbLp44M1oMCD83tPG8pvQK3QSNwTuShptwmSno9bdHdyzgDN8kGx9LWdVT6FcicTfZyqqYB",
  "key32": "5zVJNBc1htQhbkiG68Nw5aJa3yNqFJuMeyvwUVf3REWRTnfwk1Qn3fdRVD6z23ghFtBRDpuf1GDzQ6hJeathjRok",
  "key33": "CgQdXm19KLd8p2wrGGoq5g9uK2e8PmLEAuTGxYEgbxmQCo9oF2V3WXftiDFC1GAS1GnN27EdNwbyMRycVZR6xHJ",
  "key34": "4EDYuFobz3RfpVKfcy1NHrNMii8zpRximgGUq6SkPEounSjVWwxTLG4BL3KEteUvYf2DVLM4hmujQDFrFfAK55o5",
  "key35": "3LA12CoSHfTA7RDTw5bjvjKaR1TsRn69YZZ9uy84WikXXTTW4HW4bh5DmsTsFsJ92qiVvCjpnUwX58Pp8UPzUBUM",
  "key36": "3WZvan44qRazAyoSYZq4RqjgLPUp574S2HfnoMFHuRCkaxrWCZnyiLNLyqRnqjHvLgfJbrwV4SkQU8ArB7xcGrPv",
  "key37": "2jj7wdLyEnh5nhf48U6PVhFEphkc1siAeb9Zem15AY3e7h2ncqtxNgESMYgxvZ9wCUNR4an2Yt5juYu3ZRFULQbq",
  "key38": "aZbG8pojFU2BYSa5GH5AWKamSQbAV8PUC3Jxdpf3LcGQVBPh6e5avkwdacFsR5v9KLb8GcJxSftJdjYkXUdcTWR",
  "key39": "5JxmJw9s1aPs5Gff9h9Hq1jNhHH8UWLiRS4WxRq1FoNvwES7mzcWJQWpNmGyVcB6reyKoHffBe1AknkFGuyzWvMo",
  "key40": "34JHoA7Vkj9nVPanQyACY9kP7wkWo8mJ3LduSbc6NVd6cNoDZM2pnBw9dLTGEA1y9Li4Go3wE7CBkz5pyoWcBz8D",
  "key41": "hR3vKXEhXNyiXz5TofmgGdmTWquiu3Cuuu9J4LazSQuhrcP2gGHw6HzDAGU6dyuwReixgEmwdsgwQARupcEi4aq",
  "key42": "Lt6qhLTKUM2GvHvLBuhEtbCLwumc474ZN6qWkzbcs4VgVERsimTNyPha51URqcPLvCjRD4xJabsSevdeptGAXz9",
  "key43": "jCPaDHScW9GxQbzBQMzWhKzUbsfFtvbZXZRF17urmFTx7EMxrSLMXhRN3VrMbAKTnp2h9uudvJWiSxcWUX5dPmn",
  "key44": "jgyjitiCHw7y2KGmcfWyeUC7U8BTBLZ6KyoDrdjkw63vPh39AMQjn7t65jGhMNnBsm3xp236K418sKKFYt7dFSj",
  "key45": "34AH1Vcz8MbRvSN1vJfxwps82q1GWqFRWSDbLgP7BYt8qVtqwenH7WheBRZUJuLR2feN5TQ7CfRdvbKjLBgHTGT1",
  "key46": "29L139fPm6Zgqtr5soEstiSC6dY37SpFwZcBykwUKzabzmJwwAovYSCT42hfJs8DgYA6gffGxNTmzhHsWy6q1uuk",
  "key47": "L98VRy4QZBHGvmzoU8UiiHj4h2Xqqcr365o8cXcyEubzXDkNL2mXBG3L9Es3ZwpAuqWaJkCWA7eEpX6fFHCK7E1"
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
