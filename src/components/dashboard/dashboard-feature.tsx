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
    "4qNW5fFEaQbMH3PGVf9o2ioaCwaBDDzab7azBGebsKZckrwsdpC4yJK2srvt3GnmKBEr6cFvs8o2WkRwnEwrXdsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fPqmnu4NbNwnmwHqhxfrLHW3bFy8ETmh3FB7HEu8uaZ1wLCreDFebTND3sMNJarwKiqykweCc2fza4wWY5m6Hk",
  "key1": "5VLBaJV8tpfmgDduvW3AvU1gC2RQJQXnFN11evEwZQjova2baYxZxMH3WGUy48xpkJyMnpZezSiHFKvxmS9pbrkU",
  "key2": "2AW5YLVyh9JnZ69Acc3qqPP7RYNQtW5Qm9Qtyyff8BupfA4Dy3jbvYhJgRkuobELc6RRKzAjLPKCdnrhpwUADwwX",
  "key3": "4RBMCX3FfknV1d1jP3MESHjEqAExre2sZuKgg3GaYzhmznoRCYU217zD3vDn9vVyLe2uC34kMWct8mpQJqjySN2T",
  "key4": "45HYHGNDjatTFVqQQDimhgwUxuuhcP8kRhEsPUUtRFdrbY9yDHyUUS3fRhvSeJT38UjaCBmuBgZ5D1WoAWfPfsrV",
  "key5": "3XhLkVcGZQuZVjaUDJcMtUSTS6FLVjvuk3nFH7XAFBuNkwUUwsKmiNU4JRdbmMextQnPfZso8RBzdwwNfo6pudEy",
  "key6": "3BKT1441oYnmjTBag2D4xERrn3z36Rb1k4gzeAVL1zCCgxqqWFnfzbQxY8KwHy3pfWsKbudMLnTFhL8Zx4KisGxM",
  "key7": "VDau6YWYH6ZHMQbo8AJHh759Kq3GnyHPrnFW7oWC7JzGCV8njZ29dfav9GRzmsKQUzLV2E52zoJqX4ypxjXE3z3",
  "key8": "4h7ob2hbKhYBjFX4UHSSRYLPiiSkXhBEu1GgEFXLm3uppriwYEZJskr4F3CfaT9e5ujZH5DhyKePaUP1wbzhmkak",
  "key9": "4gzCxVU4UFjjudP894m2mS2NjceK6YK8z8P8zZdoZJrorLnsVA3TrqqC4sREnP55UT7JTYsLFN4Wtga3zvbcFAEw",
  "key10": "3iTKmXkyqbexUYtvLe31dvgW8QrNCa5xwH1cakJAFpxg3qLvgwGqcQwd2LXVTfXFHcqc64aZbTnP3ktRjVhoRXDB",
  "key11": "4vJzWzV1fqWgnK2BsHDLniz2E6Gj8DftBjyPwnECmjrnuJqVCCYCYJu4yexwUoxdWwg7oo2pbiuhFxhE32K8k2Ft",
  "key12": "2cNGbGcieMv6hr5KwfY1sSdmRHB3HoQxvH4maRLk7i4WhPnFfJ6EzniWayMbwSQGzKjnNTeiiH3MUMev6rLTQsaJ",
  "key13": "55edmzFCjkCrRJRnYAct9SCBXvh2cdXdjCbe2GGviFS8V3vSEZ1eNo1XDnuB9V6jEgGaELtiPm2rYWEaDdtoBWpJ",
  "key14": "3p93DsZgk3F722t9WsfMqfKEyGEHfFSQVSM6PFD5MrdQpWwM44eHmdXN9D8H2fzxdDHZubKNS4vHh2daZZNJEZiV",
  "key15": "2jafbhRwNoaahPjfTpRhUHq3Qzgh9vFYDncHjvUSMChFHNgSsTHENhR1cCryt6EVaQ8UxdYDTJdeHDJQyuArYecx",
  "key16": "24N1erg4oW9ctCwjFmzY53koXodVC8u7SX7s14488fWZ9cpNqDwkDYPS6ND7sFXs1gePY6TyHMXg6GNiFZLKPudJ",
  "key17": "2gnoHJN365GohicRwuY2FtJyRGywAvn7sv4aKfqnHUMaJorhj46dZcsJSLCy8iLJBaE39HagKDr34VaHoYnxodoB",
  "key18": "5zwTm3uj5QA9e4nKX4MCS4rCJdfXcUY1b1tk6C7ZGYxwYzMFRwJSJk4bUNKbmghHhmTQPjvLi78c3XWi7XJ3MJTN",
  "key19": "3maj2JW7iC2n3cqKEJjAgj5fev3ELjFLWbaYeS6AZMovoEG7Cf45KFXw2j4Z8oXMgZ5Ua9cBwSpaT5X7ZfrbAW3v",
  "key20": "4xpaUk6gH9xo1My7KXEVWbCqFnE5Xb1Gwj9VvLpYLnRJuk4nF5VDtiscMgFYDz2Rjv89QJPYStFxHaT8eSrQCJQQ",
  "key21": "5JuWWYnC9AoVq1ZFje5pqvvA63sWhH7WLMJ7yVgXCF7C5wtoyhAApJyzck3ouoVRNAmsH4qa37cK2W2bGoP9yoyx",
  "key22": "V94wGcdgKYsrCEahuuFbB49BzpgimPWSdggirpVoCidTzkUKZzvxN77LtyDKdRHCqoKzmyZmqMYHpZ4R9CD54qz",
  "key23": "b1e2c96jnUYbnt2m2uzUCZzBqtAaiDhHumwnKrtVmyHxwWchG82oPQfbqMWjpkka8m8bdLvuXduxEHCdsAmX2QM",
  "key24": "4xtAeWGpKE5QQms8ChAWzidKTuFE6FEMM3hsgDBLbBieFsJYVbTpUAbPE8TAQiyrrS8JngJh1yFohCEw866bSnuq",
  "key25": "3uN3c1k5LDhFKSiAsBw742h2fuM882NV2CKxNgeXT4hUAxU6hYZjUgymEvxhFa4XafsPbQVQSfvzJbHixWjdbkAf",
  "key26": "tgTwzwuFzutM18CUquRRKe7HAPq7ympDtAQpS2z7xx8J8Us5bRVyQEpuuiM2uLCgn6fQX9gamfE2Bhpo26R9Bw8",
  "key27": "ewpzA3GGiJyyfcN3FDi2zfScoCezFoQKN9onQVYeu6vHVho26qzqhQCFpV7fQKMg22n3o55xFcm3tUibTx2FYVF",
  "key28": "21t2ExTYhrjrPMrUZnTCmSxzMrEMmci4HGzt41UCG6yh47aL1yJDvbf9ej14rYyKELZ1jw1M5tVs7pHMaBwpYkV2",
  "key29": "5z6f2weayAa3jMAvXnBhjUyuavvEsbxv3daTM3P1rSNbTXfAhFpKokPf69j9w4VUj1qsuUUXjzzhvrCY15GWoWFy",
  "key30": "3z5z5uYogCN29ns9ffjGqp4EKKM217DjRA5hcRkovnMX7uGK9ALUevKc3DL3VhvgerNC8UNKAaDHvrB78LF1u9aH",
  "key31": "S8WJ7Mft9mFpXbUenPfx3JnhQpodENjBQiVwqd7TKyzomeyuLrLFCSw1nCMAFCipavW9izvH9P6vQCjvtFmADH4",
  "key32": "2dKyN2fNcutW3H9158bRQXFwy7VmuRz1CvXxTTD6Q62PsUwdvS6en397vA4rvSucrKc2Jp7EDdC9K1YDErSSU3TT",
  "key33": "D9EqAinhXu8tW2C4xAnMG7AHbcLT3UcYzdHQy64zT7YzgFTUEwBH8YoHWNv2LAvJPK31ddVmyH8pSEgKjwRrcu6",
  "key34": "2sNJKTC2vYBAJMzSyuBoo4vj7a7njpVQqamVJQCty9YMuHsyhkyRvBwEVQ3oxPmZtgMwpd3pAnqWP8epSFvqtT66",
  "key35": "2MXvHhTsizKEYg3oNsTr2oMkGdNUVUW8SEbYrsqeWUESTYL8yPMaX4ETFTk37ywXmuDswdLWHQnH6BrcZrGoTPVu",
  "key36": "39FCyg3CMSxGkquha2zdTDrXuDA7UGfd3JnG1SeQMmiFNXjoHacPRbmzE59ZRKdY5TFFrRENJm2qemdiPoaAhQXR",
  "key37": "5NRCtYY6UZz4LjM4h278t518egfmbeQTE2eqoF5p6GHdrxDr5KNzFcfycZuwNiytPW3KEt39W7ooCT95CB3udqrC",
  "key38": "29QHmBVZKWS6KgZxCzr9w84zuE2utsYf26YvJgK5etvreFyWcm2B2bSigVsByrUUAwnY7tG3KbxndbRLPDwuZxv7",
  "key39": "3US5f34pjHvotry2WtQcqZ6PiL76SkXRG2gMGDUwkkM6uNdMnr26ax2V69eFLUkYzNyBosEhJ5CgYg3hE6fWNdtX",
  "key40": "su9wSYCp77dL6ZpSaGjstVRjx9iNxMTQ2uPNjthJqMjmCWReNcn6JqKqkb7QEx9WHJn4jW4rh41Ky4caom6jXvS",
  "key41": "3xLwzCParihA2VVRwDEXSP5UTpdihDtdhoNr5PUNhsxkFfPdFjiWdwWFxseNnxXVzrfYQxLb1AicgZTzb5bY3EPU",
  "key42": "cXCLELfuvmR2iNdoARSn3qtLkDdczvotCGPagNatG1YLnvssF6qW9kcP3aTt5EkVCwouwem5Q88SuYizz9RunqK",
  "key43": "3oT3eiCRdufU1uozqXhYYoJxjKiDezX4bPLhV2YKYEMCzwP4jGQFN5PmzQaNBMr7dRXhG5L9YtW3D4S6iNouGvxC",
  "key44": "5Fmx3hHKbUoXj1eBQeR9ei7satp7j17eDQe1HLu7ktkjfvLpWGoTfuSQ3KrkE3JN2uXzNRAFnh8PaghuiFRqBDFe",
  "key45": "W5FfNNfqKUMhfCxD1Lq8BGjCNhhPNhVo3BkDjxQbSpEZoAwAaoD8bV4CEAtNM2Ckp3Zu8MDnWqXuWJa59Nwmmj5",
  "key46": "4jKVUSkh3C7dYsMXa9A7xutV5TZwhTqiVxGW2tVYadzS98arUianfENfraQZKenkRhNmHBReMdchci1ZZGFMFC94",
  "key47": "3HmTwUWBs4MKrJqVZBeF9Lw6r7h9CE4Rf8zhb6Ty6q3JiKGqF3oNu5KCPTswRBUrQhyosGYES1k7gwg119cDuncz",
  "key48": "5BJ7iHrQgAdQcxYDmcVtrBesE5jwSnpHLLF5VAWtiotdzJvzct4xyFSDH2nAt5p3vXA3n2wGjZA9fctZ9cywaphZ"
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
