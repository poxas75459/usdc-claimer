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
    "cQ5XBnGzmU6Q1G9DztxfTezWAuSUzomkkhpJ6WMHkndwyRStqtNQ8oT2rJBxrFFDsQRcVtm1fEyCJoojJqoiZVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkrQoSFbX9CqEXCpzkoGtfvQqkSSgCyBQb5kfXDEy6iD2nREHjLTLscQfDHC9uM7HnjU6a7x8Dime24jfSbsnA5",
  "key1": "5BtNAJq6SspvBbVmBdfAR58HgKw4rdfZr8KXSy6eGTaHERBkKSqm445m7riW143KS8Ade7gQrDK7QipCXMaNMS2V",
  "key2": "3U6KUoKsrSqnTpqwD25ZDagseu1pTDAAMgKkQQBHsSCVPUfHBABzhRTicTL6hQPkCdPP9G44y3gtc9xDyuqMShGK",
  "key3": "59m1NhT1mia8QbPJUNvafjAu5UmjDZS9JCP56cgViFAGLsfTNoNZnd5dNwDi8DmvMr9gBVWbFNu41AuG4E3tdiT",
  "key4": "dW2taLVKx5bbemXcJ87XoWteL5yzxEEieXYjxK2tk24BRDvGwoV2ADzjhmNX4aJgj8ntp8RCTCMrdgw2c6WxMEp",
  "key5": "5CXPatN6RcSoVexfahMPsNvm4h2MZ1oCuEvn5WKrVk7UmERmqXeFDZVc2qBNZtwfPchbHSmMWZmBnc3Fi5ZM2LgM",
  "key6": "3p7e7ErqePUsf7vFETTQeRyHKuinXCL1obFNrSfmPx75rYK66a5baDGugcm2qw1Ta226DYKb5VLSnc8BK6vJfUum",
  "key7": "sZhaVJbRaWfq16xZCrJ84CeBAULDkbPP3nUDegVZW27Mzs4qZcbgULte3nvqvhY2EQ1jbT9sXZe2yyYx7zg4gp9",
  "key8": "2ZAQ7DfAW9ZGLL1Nx5ESCgMqkH7WZ7Whc9xuJUHEdfdbhGMGqhmvqZNumkUJc6x3wQi93ujHjSy7qpFWGmJ6riDk",
  "key9": "oLrZV12VWqFQYRbUJk6qwEWUDQUZ3bp9ctBwyBdpmjc2691bPtkD3us5mKCpnTbihT1BR9e237jFHR9vUV6vX79",
  "key10": "2xA4UepmgeNHtaE5kKnSNyhRjqB9T8TuU4rqUkKow4Mc3GgeenHJHEgDFYq7RgfVF8sAYd7pLQuzczyVmJmZuUzo",
  "key11": "5d8TyNHFthXwh83vdP4h9TrnsCDWPpH3hqoNiiJMNBqBDvHqahbVDY8GadeMBfcxxKS6NdeSjtg8NzTrmFTtHrEM",
  "key12": "fm7vp3TdoFxYmSdbdtTWcwzjhoYPeFdWeLQ7Hc4xi3B8YSNDJA86rAQvwdnXRiV4QN3svRDWxJg54w4wRp3Ea3b",
  "key13": "2HN9NojrkViPKVpc7a44yuCidS66drYgpsQ72cbY74rzeYstaBoc4Qd5azznDaWjVj28esQ5TJQ1apJu6hcF8Bd7",
  "key14": "4YTPY8cMSbQski2tHQUaSkg6hnEHQn7eBFGSHJACV73NueDKbJ4dXCzK5FbUkeJED8PCHMKafqAYjZS5SioVjtz8",
  "key15": "RY26cJaWdKQv6gCQQb4ibHCi2CPodNTnTJ7hsZjp8Pny1ubeLZpSQvefSf1WudRW61GoewzyUG73jZDUkLaWHCQ",
  "key16": "2yL2NTHB54nUGJat9U7brMqfs7ZXUdwA37xjMKg2GJpdhMstbeAfB6aQrKZB9pmrTCx5sie8s3vjbJDA6TeudQmH",
  "key17": "9dfmPQpPpE77CmLSFatWHVSSHzvzqKGgNNgKSkp3qiRAJsmbhiaiSsejVtNfqnsxHbmjDBhcc5tWk6gLAufk1wV",
  "key18": "5RgZRxyEQeF3ME6agp4a8VQaR7eitWftexD6o3Ldd7xiAaR5V6ntLfhutMBGHVFR6xEF7x9Zbv2yprh88udfqtJB",
  "key19": "2pf6ZMHt4HAuZU2XkUburmDtwPQ5p9ZFaikPm9tHGySZomJCYojqBtcGaYsLJWpTHK19bv1w5vEhz59mu83n2n7f",
  "key20": "46JSXJbALXXLxqaQFoLx5PkcK1aydxtw4xmPH9agrpoKYExSeoGT3Xf2GxLVh9anamUtvWThiyexm99h1bD87kCQ",
  "key21": "3TYdHwJH2UkEEPA32diPT3fum5jqvxyMqnanmhR9SRzsdbJLRxnEgnaNZ83U6X1JESkAfMcSFBjxgFtUKiwoXT9i",
  "key22": "2wDnusU8TvFyWDGyqrQZAZpC8moXr5gTKajfKm7DEqKGvBUES3Fm16y8YZbFzaa2REHP6K2CuyKk9kXxfKGtzrUs",
  "key23": "36poQi8GY2MKb72Rnim8U2vdXbh2v5PoPsH95Vxw6QMXEDw1rRGxzui8Hhn1D7JpK2woZo5y6yrh6NGpFxQ9dvEW",
  "key24": "dCBhKQnKFh4AdS3fbGnhhQ1rVKaMeEWU4H2ygWaz3bcgSBagnxpviQcUhZj3J4LRwLeXdjatBCcQoWN7Yr3JuBv",
  "key25": "kNrw7qyP2L5SbZhGyN75rT2YrMofmgEfG6Dmo6WA5KEmnBoFdAokQgc4a4xEwrUjvpHAbvAiRi9SW6yzx45fexx",
  "key26": "2VZpJs1pre9fkPMcfLH1GUAMXwxH1HrTbRQVjEfyf1Je6LyzbZyTjB7CswAivvhbF5SXVMHPzBRLQRmgATev9Xjm",
  "key27": "51t2yhTxEBaTJ2nQW7e16wgHPXXzk4PvvUKuMoum2DEjD8MDQokSzjQse9eruvVU5qcnpuYXXK67WAwsPMBK4p6W",
  "key28": "52Po1FQbULC14zoHXoUw9uib5hep97kD5E9oqAvSpkw3oeMWuutVPaJ9GdLSntehHfGcDk2iBjteK2j3ztJMVxvP",
  "key29": "2D2fp849A37RTWGtEyZhkxBTxEcEo2ByzoPx3Yair8wkJyVHAfxr4yxnNnFRri2K8cutwyH7LromJKDKqdWBDj5L",
  "key30": "HniPotenAnLYwDq8ZJMPLHmDggZTX85YYRRXpXX2v6uDqc8SD2ePasthRvRG2E2fxJA23wJ5pCCLsKPYAyyAXis",
  "key31": "5oRUbmsBbL2SvetBG72Vd6cPurmLVn44UCMa7wJzumy4y9UQt4tJYcqWwkw9aGPjw2iSsyJNRCqmWM5AGvzWN5qS",
  "key32": "2HuhtUkY9ceEeFZCVF2WEsjJPstD4Pa6qVGBTqXjE7LEQpLScNPehz1pkKZANgTNdQHigPzhJDXSKkpzj99qnZRg",
  "key33": "2byqeMgYn3Ft9sMTwQaJuWrUdzen3LUGqBmk8WCnZCULdQ7FzUNGRTnBvZgLMgJdQWqj2xZ3KqWK8VYAkRa9D2oq",
  "key34": "4yC2s458enjVVf9KpnjNW3KKsr4dWj1adfKDqJviTympc3hEH8s8Dm1Yio9NgL29hoRpA5hYL7hzCkkhaABZDAr",
  "key35": "3RdDRgHbqvp7hN37njo2b81yvKjqZxm6GEVVLix1ExtcuVfsxwoQzETS3XqGqz3gMkKk48FyjKTC1iU7HG2Lmq11"
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
