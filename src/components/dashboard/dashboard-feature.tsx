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
    "T1Z8PVJRLPsWwNfssf72UZqY1Jz6AvuiGvUPXQUJ3cxtUFwev1TdtoZ6V51FCmzFVLKuuW5vaAJReeAvdGBKyDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKrmavU94BZbxLN5oar5nVp8qtg7epi9gQzfHW9ZgAsGAYKhzG7QFPsdwswoRKVPoVuF4EZVjXH5DSWoNvNBMWi",
  "key1": "cA32jHjr3VqGFCjoywjMCD4mXUnp8ZkKMd4qguHmKoXYAxS1fZTe5tLRUzRhXY2vH4xKD1Yx6YXQv3M7rvkEnba",
  "key2": "m8eCrvChaBFScMGxN12zhEuEuMZe2AbLHzEy2e5KARzaPFTvaoU5shKqY8gDrmG4pxxCHQDfvDp6MnunuGbqhMy",
  "key3": "278NpSUFkzqwieC9KCRbr7jFysQPJDqrUz4bV5Evhuu1LzAMt3fZNnoqkiH9w7WSc3dDYmq797rrsZ16qktfL3bG",
  "key4": "2R8zLCrSsVV5JPuMBCiHiiX1b2hATmei5zA1yzdowev7qPeGD3RAFfUkG3nQ3pA7kr7c2BNFtSm7kbdCVtRaG5oQ",
  "key5": "4nQPxPRhNC9jfNrbdxHB8NqzwKRSFwbwycV8PqnJ5s9MXwJ3VZMFWBnLFdojzboWtVVa7rXtTSEGk225YhhaMt3f",
  "key6": "3wuSBqMLe3ZqjriRnzSuDrrA4SZ5d3SkNZSPgeKqZZCrF6Wut5gVTKykU4JhnYkBbLMB3QEhCGYJDmH6ssxo9zxy",
  "key7": "5TmEv9EJwoDoU9zqZbZu5xwBYo2iupFwnvQixK9vyD5GkykVeGPRnHLFSXnWynoiL8Ex89oq8b5Z92w3zn52PGHq",
  "key8": "4L4CZvbNBcwrMjFYRzttv5S3Lv2r2ZSBDc3nwr6yZpNZ1ZqPs4iWi5kQVEbxwXYpwuCCZHXS5i8BK5AqSRzPPF7y",
  "key9": "zyL8a6T6MrBJ3Jw5E7UFsy78Upe9mNAhXxAXf1TnaeZXipfH4arp2uiw9H1Szd1anCVbzSsCLBfVX41Gt2aATkm",
  "key10": "FKxcjapCz1BxkpQ3y7WdoD9E4pdNVmwnxT8jkxxnfwJVpxujM3r2pDxcQ9Fn4d6xECBaYCnvsPkP6LD8JfyDuBY",
  "key11": "26cmrQHfSqAdT1tGza9dWi3HcqNoD6xxxBHoYMNqdQ6sF4KGFnWupQHaWkMY68SENv59ZM48EqPxGDproYz3aH2B",
  "key12": "3zp5Vi4AV8CPi2T3RXDqQVTjBGy2meYJGRRqpzgbdSPhtqSNQApcqXTZuY2sBJpmA1y8FVTTpZ9LhM4Xzs3GhW42",
  "key13": "5ehJY5umVdZKzipcBVpk2P2SMUScTvw4Vs7cW8Z9nmSgSFVxedUnbafgDuqdHG96Z787duwLj5qoFBZXjRm9wsA7",
  "key14": "7eJChZtL3fccW4mFEc1hyPrNUf2p9yUBpsyxgFMBUhgv9yAagrm8heCUg35bF21w9TyTzsgBxEPNsYzJ7MgoZoe",
  "key15": "4xU7ZyjqL7jXom5C36Bct77tkkdZggJsVGrHhooTUsVYoNFDkfZkgJHQ9GXherzsJuvcSiPQgrHqzorq9NFCkeQx",
  "key16": "54GncHiE4QBjZCQbncz5ZiBXme6gQ7DFaWHKFWSYay8SMxWNhXKf7yNN74gW6biDQGmMN3Um15ZYCtTeEuhUzCgZ",
  "key17": "4RCvF2XoN6QfXtqyAWzEUGUUuHDAfBkyMD3B1zjVcjUY3NPDA3tbPQriAEzZRojyywJDPzUHcAEhppCcHQZ94Wk4",
  "key18": "3zXGRU6yTE9qBhduMcZbvaZfaokwtugSq3mRDKDGqydzc6YQNCveKBACEp7zMRVCmU2exm86UQrPkot2cqV3cMUM",
  "key19": "jRNAyDXHhSaus2hPqTKnqg5UNFtMUDrLG3iKgf4AqRoDjU8TZVJXpQv9U7Y1hWBy2GbYYwCpoxw1uPnzAGrR8wr",
  "key20": "4MrxQhq4CwSJrVf2WF95xShjQUHvBs4pW1Ei8bAA1KtsA9i2CZ5zFhiyvxdwMFEaYsB4eaARRCk86szyquPF7d5J",
  "key21": "2Hn5e4tnDbysMfWGYjwF2715TkcCSYnpbaxnEYMzoRjop1h62m87yNwkiMYH2YmHYXheYtwfRCt6r7g1JwLEgbFm",
  "key22": "2fUyaej2hrMPDjQYrgiu4DfZceQ6wTYzQ9YfgArKQr7vqEu6SyETAAmNAfkUfYsryk9PZWc8zSUMEe48rebA9kRh",
  "key23": "2eS3VRSYtSNWv5rJzdeTeMCq8sNNBsoKw3uqPk422XhvP4W6kBURmKRdqgbDKkEpjguJsPr15iTgiG1U6ScseC1p",
  "key24": "2KCLKvdRQuzqNnev773aZTDGLMBJrZBauCZt1PJbiF9pz31RZnp3cbh98969gRZuqQW1mDck8V3u7ADbKQZuLijv",
  "key25": "4MgW3awoZSd7vuFCTeDJZ92pNR95Lh9hCQgBsJ2eD76thHTSH2fhNLdmyGPfb8K6bt7CnYDAFukbaaYv1g4FEhH6",
  "key26": "5i4GxHUT4NZxSwPp36obtUwn4A4Yu4RADJKHoPMCzdJpxkSWJXitejzHyq2c9K4QUFvqoRNrnx5bmCew58KjVD9G",
  "key27": "57FbBqHmeggK1PGiaw3miUtft25qzS68gspuTQ8iM5ui7LSHeVyY6xdJZiyaGUuUF2EtsboRAwEbfcx1pUzFR61v",
  "key28": "VRQtxH3Gvk2o7QSQeSHzNaaEJkwd7Y7mjhetyUjnvhfNMePRmRnK7yQejrDSyuFesqa3FeE7VxabHaiAnHG6GYs",
  "key29": "3PvGjwnviT1Zgskjw6tUPrb2nRauLTZ76BjRqMqbYQX5FKtDK23Bhp1cJTKCXVydTdNG2QPAT1Yw5CRa8kmjHgCc",
  "key30": "5VCPs7QFB513UXZ7juUDEJXx4sy26EGwcdAERfLG5dU3ken3D2CL7jTrmvpyZGF4yTGqaeKbdkBpJNnB1ffBzKu8",
  "key31": "HAg6BV71hMBzmFPbe9H8ovdzrVjjpdpuB4AkhNPEMFC6NCNwArT5RA52sd8dFyinnfvAPyZFi9T5ZKWrgZLPaaM",
  "key32": "57JxdcNJDQaZiYBtsdQEACSijrmfNB35uhQxm7U8zboDAZycNV6yeJzNL4x9iYqEm49wAbxhF9SYTCYRbbHCYaTG",
  "key33": "4sLJWVhB1V2HpWZN2xrJaBUwdk1kV471YPjH8BHPSXRPni2HBxWzXWU4Jiphy5ybuaGRzn8Ax9SX9aWauCpNZgdn",
  "key34": "4wcV7NKwNDhZDqZ44SioRPrD5hyxxHxW2jRzC8YmB5r6JXJszTmLkRYXcuPuPjgMEPUEXC18mT85CqDe9jH8g6xW"
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
