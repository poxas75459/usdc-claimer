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
    "2s93KdW7ueSYBSwYjZD9nbFAAdr43sc2qD7i5kzJzum1e1BD38o31vNc5gLQZVcqwfHBSKxFTP143UupnT47manU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAmbABXjBfmvWXJ9B3f2MWFoXsWMuND6S79v61w33h5DWriHvwEVtLaxYPsGxiedLFN7eEiS57PuMprkPEyyqkJ",
  "key1": "3q1bWa688LAssPx3XGySVZ3NUxs4N5oNraRb84E2iwt9dzz2vxvYEZZnnf2fRTk1pD3412YA3MGYNarQx3UnMmBH",
  "key2": "34xi8Ui5VhW8cP8UhDXcQgVNvTRF6WoDBcX3mdiSyt2sXSDsfNr9A68LAQczBUAsbUc1GSxcAMfAqP4f9MBuU8H5",
  "key3": "3Qq8XwpCd2383k3mSW8sQvkAtgzVaWKzwDpdLeKggxvkvBmeZe3MXMwHZ5d17xEtCje7vYqEnRawdjurASgdeRGN",
  "key4": "4xktRg3Gomhsjbakj5Wmj2VAPYqMaizt1ZRtucMHtPRQ5YQePgZsHafBNFSXb1P3137d4QPwqVRPaHjLPedJZnwW",
  "key5": "2xWzMMuoTShvqcLXV1YWa7tcVZLiZGzHufEreLxPxh9PpykSHMRxGZbnWSPTjxcraRywYWpbtip96auoQuP3F1Wa",
  "key6": "p6cTVF6ocZL52M3cvCyWoFLaQ4g9eos2cmR4b4ivzJn7Zf385xf2AR68MJHTVpHQGqLndmy1jHzXt6MWjJNqfWP",
  "key7": "3zikPm6FSxwqpf9dZAwAVdydXchBupNHWVj6MB1vmZmMVhZV6TWDadrzXgjeWcubf7dxxUFcHbez9PFp3eRCUWqq",
  "key8": "46B31NXmAU8preis4jaQ3figXqgSt7QJKnGWcwCpyEa5r5wa4rWXVUUHzWPtCnmYzHPCgdc6ET4sJ2ANcjFhRHjX",
  "key9": "2sxKWbB1ZPTi8Uf6Tq9g5qfA3Bxx443NLQ1NDVNBBtesExjwoE42ayRQio8xvtT4zk8zV6h26UUmiH7gyFFG8YjQ",
  "key10": "T7Moo8ddpgF5ygdM1EF1joWEkTC5Xvxek6Yfh9wzNADhKdASpNcRCgyNZj4EzMyY6B7rjrwQvzCNaWWnMFy9m26",
  "key11": "2Jj5YojArKXP4xREXaDtNvfptyYUN56wzv5N8VdjVS9fTgPycQjMGV51S6SBfX4Ry28cH9YcVZbf6hf1mmBTd3F",
  "key12": "26M7zkYA5o1F1zi3rSNR89zCvdiDbQr3EW5brGdkp7EFWyoeZxSyo4s6t2UBuG3rpvvo3z2v8Rcp9KqHrzsxo2gR",
  "key13": "2dGbbvGacuGHGg3HC2LKvRJgFcg3ViBQjD4zCMcGqS8AfRAvzSQuA51nwHCVhkH2ReRpSbMZtJKSR7n8VKsCY9PH",
  "key14": "46zKmB4fUiAZwvPaHUb4UTe3foGyf3FfWgekZERce1QMipk9h4GwGHYgKMXgyDhVvQniUiffoi6dDojiBhAUt1iK",
  "key15": "2e3x4VP6KQUbFeo2nNurRz7JyUDF4XqLv5Zij3PiGwPPWexDDDbXVonXAhayBhBBXjqs368z14eY8JQahSvvYsFT",
  "key16": "5pUmaDmDPF9tp9ss3rndH8UMTn34YJxEmbUNe3nctgvrm3WueRoRHwqT87mqpG4JbrY9ks6gb79XBZ5vdhnwSRrr",
  "key17": "t8UJdhaBf68C9PQNJKgTvmdNozHUFEQEh3cRBoF2PwpCHPb2YPhiThChqU3rj914avwFtVG5RptN9QYcqXWSL1F",
  "key18": "YJmpP6Fq9wjNaCeD9FS7zJMJjF5P3BztiR2zrsF4t8GtL5BoxaPCEN3UsAvdRVAMG4FDEsk98isroKVUj7Fdj8o",
  "key19": "Kmx3iTDqJtTbBT8UiGAKPWZTbi4qtu6ksbooQQhmG8oUzH6ZcRTx6nYzY8rCSYWk23gGosAxAz6GvBZ3nRZyhhT",
  "key20": "3uSNZmsM1UeeVyHGQvy9e4pbVyu571mmy9cwmDtkBEBMYqCjjCoGLfoUXJ1RsVB9XbATvy6HeYeovnKqKcJFNVCt",
  "key21": "4uJYdEbe75ddrj42BjwHpuvugAZfYcESzN4QHMT9mpF6qKCtsZ3G9jFb4yPxuppisFB2tkD2KrRyqvfVezD4BDVr",
  "key22": "59ADqbsTS71HekZwd3sbz92VPbCKTXAPeDGkodKXXqSuXF5wWmWiC77MoemRcd3AtAVCV76Q5UeL8DnXGXVbmuKG",
  "key23": "4CPdYtTtQHB9rdippRBLBThukyMcKeZ8xmS7w7CSFhtJqu85vxXhRo8n1x9GATqeA7z8kP1K2qAsXMKFYsZ8u7Md",
  "key24": "4QN5XJEwDVV9jJsV1oiUDkFAxJ4c1VWVDyoDbEZVm2bzvVvLaPAJiRpWPEGDnjfcbed8qCreEeYFTCUeh7ESF22E",
  "key25": "5LetjJY2fiCPTWVafZ7kHZRSXaLytS4p711qqg5mphVg8oSb14coWKnoRFw95SNGWq5ADamJm4tCjxEJeuZ1org9",
  "key26": "3wZMjUdkiH1pewxk2mAju4y6d3nWJVCZ4FVE5HrVJGCYJHFqtms7DmS3C1idwWyYWmZ2y3iH2nNwVR11Uip3udXP",
  "key27": "eyMDWogMEXezfdsH3H4ASRwYmif616CwAt5yg6jBhQqPjs4fudGsWpPLzAfZN9KsBBkGEfc4X8JwXxvQ6U1ZkmM",
  "key28": "o8mv5RxsAwxaVaMq7jhXGFY4BnyF7SaA33MC4fZadgNDSjWWwXEbrDSuVxBhZExYA19YUUn21t95dHuv9N9UghX",
  "key29": "3SwJxjAzeKB34N885XRbGpmKUhaugGTh4D9nFduE1f8e3JzH22H1ZRyKT6L5XncZGE4sndKQs5KpLNZDDATPUDd6",
  "key30": "3fLPrhFt3qf7DjUwmhhLWgbmweCTZa1oQ8sSmMFP346Vdfs1rAXwQyoePt3fndSPGHyr1EZCfeP5RLfDMcwoe563",
  "key31": "4kjQyrVYAUuNzAZ2PGcyvwGXdCCoqzymsQXqFYi8uDMMxY23YCRo1PQ2mL3LkyAZL8WWXdse3dc4rBXitMsrB5cB"
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
