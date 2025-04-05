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
    "p2YqYKcx2A4qLUqVX95VWuUJg3GD5Ge8LXp4Q5MU4bprHAt5nt7S187BK2TzR6mDZvVk9LeCP8NTQHR4xrajnp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B2QbhXT89AbB8WQHVzpJowaJ5NPhAXzxKX3RF5RvMGZqSwixrEJDBXqANk1fA1LfNT6pkzJQnfrxaky513zpy5y",
  "key1": "kkHSVLFbcQZFVJF2oRU8b8TEfCud2DagFoUCPLWXUcUPSekoiFiAYdzi2M9YBYJksyAHy1uWAJ2AU81ZUpbK5e6",
  "key2": "3grubtADTrFVzyaVCvta35rP1jReHSf1BMXSBzBKnZEBn3KTXWkf5FjSvjXawrNLwgDQnaefbgDGhFuQatwNmxeA",
  "key3": "8RAUGwfWnDVpcCtmUAXPU7kHJEfK95R1jxNdgVXdKqFoEYpWE1QjVtk58WZG7xPp9sQCRBJJDqYr1vbVVmEp3tK",
  "key4": "5KRYWDgVy3pMMawqXP6tNWJRzKwpsHqXg1Nmdzzw5rNqcWaEVcaeLSupqSDsqg2jLQRdqaJyL6QivohaP7oXASsF",
  "key5": "3poXKx44R18hfdoc6UihNgqGXfP1Rb1mSaCVw8DPwzXUsgCS5Cn3vt1U23SZ5nxFdMJ7gUZGSdG18p6ceoojgATH",
  "key6": "3adp1926EfGJ4N9BpvBNR7RTnC8o8bJLRzjvVxWz6YAbDz8inUNkkiDAoicYEC6UZtbf5wQJXPtjkq3CvBo1i2e6",
  "key7": "4gqEqiRswihhCrfbjTg514rxYSeqYEL5x6KRVkVEJP4WBtGvQvZDEWduGpsPVDK8bsqXmypAZepPB3jGmoCtaHVF",
  "key8": "2voDH4yZZm3Fzi2rL8HCY8thmVJsvgN1VtoLdKDe4EcWSgFTAC6JhDeamgp5dGwLxupQb5XHpE8sJfJ5B8V24wC1",
  "key9": "yNX7v24JKV9gvcqGFsr5mDvx1eGjMN9RSiDSZ3epH3Y668ZM6Dyh4UWodQyb9z61xwtRRD97Hwz7tvmdS4HDjPA",
  "key10": "5ozRfiTtxT457t1s1TJVFApGZsTEw1jYbyAczzjPmdGcWzVMLEGhciRwoo4h1X6aS4DoP4ZvAiJjBhf9jQJoVZhZ",
  "key11": "29SEtrxumbQTRGjJgPueDyFFFvmiFEXZBX6kVRWCmQzuQbYinqq8BQdgnae89WhEiGNCgdsCgDy37THW4aXyZngg",
  "key12": "2zogGCtFMumbwag9nJxQ9r66zfjypP5XRQob7t7toKM4bdxMJFfJeK2UYxNyQ5fhsP2y1pxYP1MN4SEUREABZfP6",
  "key13": "5Nu3Vj937DscWEJBnVPhBackF5zCDFAoBM1v2tC2xqQ2pfyyZkZyyywZf8XzNUHqC9aPUzAS5SvppaCdchBPivwF",
  "key14": "ULPEme3eW2jNozoySgYWjrpq3dTmE6kDirVjPYcYqxgv9z8NoX4YhhddXCtfhjVcWnFsNRBEghSB5ifajugaQQR",
  "key15": "5NW4VkyrknsQVXqDWHQ3htgRuyTo8ekG2RTxynQbk8jM3Po93irJyRjPafRLmhbSkWANWzPyfv8gautUBQ2P7ToJ",
  "key16": "Vz2RUueZSaMdbrjywY6tQzHuDyunC2HzWAHnguuPDGF1G3oSTDRZDjZNYP9pp618rUXQX2tLCDkTqS8E1Whzc6q",
  "key17": "2nLFg3RQJTawq2j8jYnaubAqcyWo1P4d6iTzqgKaG7nXyYsazvkL56bM6JkhiDMuuYHGTcVEMzHLb24afpJimukA",
  "key18": "3aaxShmjoWN2wp1VpYUHbnVNy9zHMP1MuASjoLFnGbLUxdJfkthsE7xt5a97j1DjBAHAM6n5Kt7RCHdf3ygBEgUX",
  "key19": "4xq2yupaZbaMSK7JaVT3UbxrFwmuiSHCmko6dghJ77ReKzP9ZFVZSiE6phEa6mhxRJqed4McZUKQSfmXoEyeLLob",
  "key20": "3CibL9MnzQEyFvkVbceTZUk7pL4GwietMEgh8QWAgFsPVQuwz1MA6BKMAVA3VLyYZiGjVegBKwCf86Ps2vZDyrGS",
  "key21": "5Smq89a4652j3hwMxELr4AvB2amCrjWkHvom3tXePZ7U7xidomJiNKsP9yx5QT3Kc5DZ9rtbTiaHHtjxuD52Th5Q",
  "key22": "4dc1vxymHCsNJkmqBx4mHrUnGi7NvAbbFEPT17gMMkpLvQj2otWZaTN8hNTkjvg7reFRNCZ4GPi2WajoamiXZQcy",
  "key23": "rw6C4KDr4ihx8fqQWjZi1pxWhCXEbjoprcvydotMQHrHBN6cyfHnigD838fSmEFC7Ek1uBKXJNCECoC8iGwuNnB",
  "key24": "ttjXiEz7vqnvty67yw683zr6wNWW2zoRrBfyggBmMDg6e8BcP1oJ7UpBDj9RRQZjqeWHAeYzAgexs7AiKwqRkZM",
  "key25": "4A36dAfZmp6FqWxe24LwaBuRd3CfUHcQtv5o3pk2BLNBnTC3s6iXpvrq5wE1XbPPQgRWwZPgnirg9DZoiB2V2bpM",
  "key26": "ncrjS97UQvhcx3PbabVAzsqQyXpMg4zKdwSBjwehvJTptPSj7hGsbsBkodhwNcYc6CvKvZzpN6DeGafTKGxK9Vz",
  "key27": "4mboNgMsjJZ4wT1j2wa8fDLnw6nCGZxJJxKMLuVnAT8kZ9P6RgRDA7iHdA7KPeoGTjU7gYtj8YjzyhkCu7KUMyhp",
  "key28": "wCz24dfPvZr6yroXHtLqwMKzZ6VW2N9tUiUtQfpXnR8MtJ3xmFheM6WogcpoXvyDtPWacZQc3yLZHhkdvFU98MB",
  "key29": "ewDno2fJG9HMwnRq1A3o5NanUdDkZCY5T5Kjy7k57mvc7B792WMjEGeirhnQAq2ctFwZvbcTGNLVXiryJHzQdqS",
  "key30": "5wB5EtAaSrZnVCjuRPfhfGyQPN2ViDv2HEikLUz683s485Wsaqt71vjWFkgZ9vYuKY4fRiiSmipAEgehhSRVodrC",
  "key31": "4V5m59AkK7rwd5J841JJrbiLBMmtzXeqTaUSHXX9CT7CU7GWfEqX6VVN47PxqX88rXhJgdiAiQ625ycUd98zwKKS",
  "key32": "5wG6Y6p14UFJ2QuNoZPyXCHzgx2Bp6fTzqncdXgLcmGyZFotSPkkPWkpTSeLeS7HJNAYkKkQdqbM4DZKK5cWPWC1",
  "key33": "2grrUxZ4s3sx42P4pNjVRg42i6TsSdxsDvFGWLkTvUbL6HYDPbj5N4SZ8GfkD33BsHejJ7q6DRUwzRTgy1j86xFa",
  "key34": "2ZUjYcnVDu87PWHRwMB1tK8wDfCTCWxM8UbLemSfhvZcvN9XAMMgsHv682obNZVvLK7uEdhKH71Y9u2iE8xpY2ji",
  "key35": "5pf2gJ1KzPqMZP4Zp9z4V18qMbPYWnKvYhiGg6eyc9DAWf86SM6Din46ijNE23Vix2uyvMCs3gDoK1s4eYkt4Am5",
  "key36": "5xgAQ2bsmmJk3VzypdCKAJ5iQqoPTbvi6PdaXqxYErn3resKU9qrNGgmuu9Vd4tk5pK26b7a45DBSybXfSHE3niN",
  "key37": "uuXh8p6dENbbxULWtpgZXiDBhTCfaCgX6naw6EXfHwemvGqzqE6dS7TFrMwSYddhiztKGiTW6syZtDw5sqwBBni",
  "key38": "3d2xxxrs7fFaeC3VQhvMNFbs8y36ytTBXP6D9D68fG3yN5bNwijBevTc6DYqiQ4ASWkWzeHrXRyRKcqbpFEWVK2b",
  "key39": "37wCAjMuCBGd7kA68DqvNDKgTteEBdxzpPXPvXoUm5VcrdZ7BMnmYxDLNn1LWpBHYfj1XTFF9JCzVsRrMRnmErtY",
  "key40": "4yoo6fU6maqMTVNbJaWDaNhT5owjj2DHSnPAJuQThgkKzK2eDTeiL2dFiXyFF2PakRGbEuBhhDEPRKUNkoabVKVr",
  "key41": "4pkKq3AMAsnMt2TCoWCa6RjiFSkFTDHkMV7QUQKg1NV2TH7Zwd2apWMqzTYpCky9KB9nT1G27m5qvd4GRM2tAdgX"
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
