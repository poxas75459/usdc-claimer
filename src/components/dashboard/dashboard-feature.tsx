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
    "48h68umW1vRfuP8UnHqd7vC8EKvBAXnd42MWXz7QYhoaXJ3d6Mh4b4DZnrFQhnCpCL9Q2X3QVxRAmfyGMTiyHRxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "csHHMRDzngwRuM4CM6r39YVefkCgXABN6F1qXgmVywsdZeCtpwUEW5aWKE4id3KL44iQqKq7XL5cfHdk1kbH2HE",
  "key1": "4fRfhkosGRxEttY9ENvvsxkh1mMM7mWAeaKecjMgyCrEaqHqVyYJGBkiV8KLSSeKZDFWtW2GrPV4dzxcbn7yDF1q",
  "key2": "4pGzCr2LihYYr47b34CAMq61gVUq96uqJoHP3ZiXCJ9bh5hjWvugWq4iartncQV95o8Dfs9khMmMbCKtSsV2PMYp",
  "key3": "3yoLrme4EZ7bhy3jpkwUdCEa8dArwwsAAxznANameSiphqbLjRkvaao2ATdEA6322kinZ1CCrebPVwsqb6gXgRdk",
  "key4": "Pa5uLUJDaiN9CpTSkT5b7qBn1BEsLZkyFW7dkpi2q4g9bSgfAYzsfD7Grv5iyzp4QbYDQ8eq5ivh6fxPk9mrfJh",
  "key5": "3ts6HnYDM1gPguZKdgZXw4abaCS5hcmpDb6QxtVCEDDkxkqTdw8SYLWuAmrcYi2or8XJaZs6GnPZpRjTTpBbf8RP",
  "key6": "3z7b4mKFsBi7zYzLK2TrpRtim6XMDvZU99Ty5zNzgYYrH47GCM9DuzMtG8MNHvXwJVxnS55fUJ9d2py9SPKeUjnv",
  "key7": "2j4JdmJV46cZZ4omosjCVWocudC4npcW9LUVVaFaWY3XbMGbmFu3xRBoNRPY3LmpK5cHB5CCdqazMXSHXrn5adP1",
  "key8": "1AiYWmm1ckncsnL8fknEdae916rfPZg4mJmpFUuU9BVo9t99dQD7iyNSC3muhADaqDEuzirgP7VmDPqwq78UBtS",
  "key9": "36A787VqtGxwskLSFHGwb5KdZB1Ef6wk6mQaH7WMFTK9Ti2pQKFpt6NiiLz9qCg4VY5yeWcmwGDaeuXY17MFeWD8",
  "key10": "4NyhLjK6nXNSx2S4fKeKfw1Rmz23KG6tFU2FzsQ7ta7TRLmt5jSaDvwjRn5QAs26DcadYUjpVzdNh4pkMzLDyvgN",
  "key11": "2ChwVMh7vR9bzyHHnHceCMz6BCEwKVLktBLLGmaXrqEZCDEm3XdKv4Bw9zzdet9hdBbScg56ujdUqbiYDvf3YRvm",
  "key12": "fjZn3MhWP3eWGasZqrhXqf6GfCAaC1SPGEdASBVc8BUmrXR1WaAT3hWqaiGkcSUS5Qtv8vRsvocLt6jLDWSihVy",
  "key13": "4RbRURH3vcDZBBPp9VkCDwYzdtBcHJ3dDxix9Lf9Kiw8woJZ438of9oxdMYr38yTQMJiYGi7AUwmqvV4qDM3Hyr4",
  "key14": "55v8vrCFuGKuqzQjE8zwjvptdquea6vfiDQRVPZ1U14FzUzgwFKejTTkyQMk1ob1YvefyTPLA6vfVPo5R7pukNxp",
  "key15": "P1t7iKsXYVn8BLh7sFYftsdYCGxp29tsquggqjLDnhWaKZXk1LhyocBMLj2YKsXYVLMtxrzvZo3d9b2wdpToNMj",
  "key16": "4TwjpHqPwomHci8MMtahdDP93qYYHfdKDqYacBFSgHArJaaTeEQcWad7E9N197oPe18ypmwoMBVhiAp1xU3GVS4S",
  "key17": "66FXJz2sj9ZYhnN3HMKwNrxAhMTUtT4L6AuanBsCzs8GiSj9kg9UY6AoZ44VkFgGiCz6GzyW3H6h8FLaTVYirLM5",
  "key18": "22UUMKfnE22KthabCfQPC3d5sCARn2jHKQJ2Y7VkzvkWtEBEtqUaSoWRZM5gPTVNgMuDVR6y36r7AksjhqoXfSft",
  "key19": "4Uapx2PaxqpZ8RAuZgfCNojxHp7rz3Xa9WzcjEBE9ATLarbSLUyRfVmqpwQsfibRdwEe4xKMV8NyKaLvH8aPc6ip",
  "key20": "41hW3qPEkhjhprqBiWEUMrUXfiMaomsHfWyqJuQZPgdLRv1gq5wmSCdB5N2zpNoPTcuWNqcjLpcwDK4Pz1utmMtN",
  "key21": "3ssxYNcsqRVXdVpKFVM9t8d7FQXEE6sXoHHWpD8b7ps1ncfg6HPmNE7H3MAGmppvEBz5RPgY1CgN25bNSKHY9A1Y",
  "key22": "3xyMgJy58UKvJGd1Mmr34xKTFWPZf2t8xYxuCSZakm8ufHxu9hafbbhQgN4Pnbo3MhFuV9jWH24HGtTapRRg1vnM",
  "key23": "21r4nYpYMw9n8Ndn89stwoGsruc9ViM9GZeWsh37eLzyjerrUG1DZKTmYaxYcZncRq3yHRTimkB4iwskTULHdUav",
  "key24": "4UzXpgyPfcHj1zpcEpJx11XvtibmkHSP5KmjAZ81T7tveJZvsivtVCeAwz5GrmFhYTxKkYk1RC25yPLd1eD8VqYT",
  "key25": "2a9otbtQdaXwVsn8P5Qy1sqjCNf3jFMJ64VAqm3m6R8tVLcNwkLtXKM8Jyd7YbZ5qGm4KS8t7Gub5XZoe6d73iPC",
  "key26": "5ZwBDJPJJTicaTPYbgzJxcjvopDmoCtuMXmk9fCdDy2c6xn6r5h882AKkp91u6kcHodZpindaNiiCnaJ7HCSQsQt",
  "key27": "4618fh3VoMhAQS7gJRiN3qBSv8t7f94h6x6tkTsCEdsJkQcZPvneTMB1A7J27yL9UJzbYTa9p4ZKoGEc44HBH8Np",
  "key28": "541n2UbpqR9T8CdhVbsuZ7cxkcpHzfsZ6uuoo8ZhQYrfFJsEzukMPcu7HV8qXfLDes6VPjxGHVVL78M9aUFJzS4U",
  "key29": "2hCtLbsekZo7qXZFpDDQRMEDJdqG8vEBfbormiMQrPfWnDeFCT2YDzD7o1GrazWu1jqLT8oXR5G69nSkYrpt6GV5",
  "key30": "EWJLYvSE6BceK7EghbW84KVyRvtCHdTPCiqTbt8vtvVZZLujCAHfPMcjhoAGnEqH3gfdFsy9VAdEDpADwBnD62E",
  "key31": "izdNeFTvef1ceccYsVGsRQ1uBm5V4BgyeoY4k62sbJUL5PEvnKBupewXkdWAK54WnaNYiHSG4XSwo3FSxHjwn71",
  "key32": "3Jof8cj5kSuGAfNjhqahF6gX9SVSMCJuMnpu6WTNoMhpnfCTsyPSmZJDtuLYufWGt5xQmk8bUTd6wBiM3kSxJR6Y",
  "key33": "4fot7uW9jWuvLPhvmpM7vJL6sQ58U64V2PM5X2TQYensP2bHEhchVbT72uGTR2LWVZ2qFStxm4VLnmn2t3NxaWwa",
  "key34": "3BmrQLa9tgH3TotcMcmd75STFA4hjniMZBq4dZpAZhPXirFiq3n7QT5PVjrLXBPfLw3BGqaA2n3cNcVLBANZeaU1"
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
