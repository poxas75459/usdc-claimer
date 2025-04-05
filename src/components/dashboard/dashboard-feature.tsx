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
    "3GmiwNPrpRe1J8cyX5GQEMwJv7um8wq4szJrMXjxTdFLZ33pVGZbNet97zHc4vFJkGERkNkV4B13UXuKJAStrzQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdDZiipdGqzvaK9BbcWjLfVZDw5C3hW1Rfb3SV99fzkfbKomdK1yQNB5W9w5JChi7xMa1Cc9F6pvdqDGioiuht7",
  "key1": "2DJ1FhYF1JCj5H4EjZYMnpCD3guM2uGcTiGxss3C7yJqeRQs98bHaGyQJMPwMrGP9VzghTrVnmiJ6yxx5vrDzyxp",
  "key2": "65YmqxsxRVBviQhQ83NDhVGrr6Gma3uiwoxigkvnvMCh7rbwQjTBmM924xDFhkXnKeXqjTcHqwaM72KrzNSNU5sD",
  "key3": "3jH7xaFVZMMWKoY5eCkPhG2gn3MsXFJaUKd5DLn6ZAj4aMCUwAeL2YCjBXNLHsZDNs3GV63vAb2dobfwDkCDnEk8",
  "key4": "9DcPnRav7L1JyToYkiAUFTvKd1jTcjtC5E65oT9pSfip5e7kzyx35NxHjJFWLqsS5nxNb5gixDpMkbEwmMsKjgA",
  "key5": "27uMib77TJu67jXL6cfhfmPRK1N2nDurt4ueYH4T1EGxAubTrnbyEiMBH3sTxEisMYgZieJ11QxBMpqieSpgLxPv",
  "key6": "2JgqhYE2jX7j5ijUjRYxvSogseyKiQ5HaADbbyUb2cMRaLPp9cePsEguBFi7L1348zyyA66MFtS9Foj8cvdoGpBt",
  "key7": "4CiQPCgsEt9tKTJ5p2t5aNWpugnr6ckyzdNp2bHfZ4HUVUp87VKs7ovh8byVvmJcwcpD22MhWgM2fezmJMfhFVv9",
  "key8": "3QhmHwcwmfsgGRgKGmAh61AnXiBGwebwx122zemNh6FJLK6eUCZ15DPE6pvdkfXtn4Ui2BdCk4Bx6k4SuL1Ank4T",
  "key9": "3xGdrQqTUhZAc4sAKB2Q1W8XV9vyxuHNG5PxRqafVm6qHtdG4NUFK6ftNu7NiMydmvBjsvyzErmN45SYjzNUCLfD",
  "key10": "4Hbv6C8wAUBVfHYyhN7LjYGERK5YiUfZTTpG7aR2nFNhNtQoirufhhhzuVpMuDo4uV3Bf8c83xqXEkhti8EzDf1U",
  "key11": "r6byTpV7mjZW51JS9gWUWVbBngWRvaWpTJk55Twz1b4xFt1QzVyL6KdyjM7YH7BPZpgdjCQwUALvEAwrRDjR9q9",
  "key12": "rhKxP3UA7BLPSbhteFRmS7J2aaSVFTbWyPNphRzyPhQb5CRpWGfkkB1qMnSRQM2yS9byR219hyL3xRDpbbgPENd",
  "key13": "1ZJg2Jbx97kzQs9NgaLLde6srjNW5LGBLY8cxKScU7FnN5R7YeaHZQ4VY99yCXZZ8VMwFbnqmJbVZjPfRK4rab1",
  "key14": "d1t22krxXzygRcARbk3EqR2RzR7rhtcZmZBuFKR24SLF2NUWa7fB1b2mwdqyGh1inRYjtXDAAyxmiwBkYNXRcAw",
  "key15": "2xiw4vUKFECcAYRYoHHUCoZekmpaSBPPEx5csQBRFQfHoLhTsaQJyUeWCTBtjrA9NhpkRqAEk1i5Mc6dzt2YZbaR",
  "key16": "v33oQXNBh9GmbysqhGVjPZuBQCj7ooAPMEfRohNu6JeDCYTUWt5g29PDPz6Wjpxyiz9b7VZjV6ts2L2k3q4WtWs",
  "key17": "2Ymu7LXijs3J9t3nuSXapTjccsV1btpHVPPabnrzySzoWT89ZSorknuHiNTVgVcC9UM4f8SLsGjLAdb3zXF4pgbR",
  "key18": "5p2cjJoCaPikVdGa3CkMPctX2ZPHEQTVxcb5TP2kNjiQPpunmDGepBiXEekB6Cj4ZoPx99wrYg4ZZnQTfniupB5R",
  "key19": "1K8t81USv9E6tGXLAREXNgLbaCSpqwEXCuXPXe3DHectk7WUKkC1D8gEgN8DoccyidxQ3L51wLVkCbTrva8G7h6",
  "key20": "5fMqyuTQcAqtXF6w4DD9EtS6QUhf1sfvAC6J5L1jhqFwfD1EAheJc5BnqSNbhGPfQqP5X6Da2wBuNwbgi1d334Qo",
  "key21": "2SL5ftT1BT9Rm52uW3pYjvdNprffRWmQThT43MUjvMrsaeRE6QUhBHUnc52H4CcoiFLxPjoLJ5kpy8Yk24t98UEF",
  "key22": "5DUsuX4k4DtiGLkBYBmwYmBVt2nGWY6zD5kgptzifQmM9aNAQnQTWb3yjJ76fE2CZAm5ouAeuYCV274N75qyUipF",
  "key23": "2vFXdVc4KA6UrpH2ZasvCSBbsvkP1i4nsfZGNtTEFrDv8jDxudQwCvRWJkQATTLLxGSEZNhirjGvYSriAekhfYBC",
  "key24": "2Yi1GBhqDQXzedyT4Tn65GPftrCTweJR5rhbufAnFCRvYMwePRavfQMMTbV8DyysbZm3yPpophdpsthmJQBLCgV9",
  "key25": "4jHt5ReH6m5SxEBu3FZ4bzA4JekMaoZhyAnkAWZYiM83QtiPyVaWHnggxSZideoxLY3Dqhtidn7HAvbUtdrMmjhy",
  "key26": "44QyzA8TXPeqTp5KiyJNS8vAppkVMpt4XWC7YXGW9Us44JArXiWYiDzb2Wj1R15KKEsLDvSdks5XsMCuruj5Eir9",
  "key27": "5s8XGcgysX5aeiekXAFk8nVZTEpFSjfFMcELfY7ZL9zbem8nqjSw8W6MFFRE9mT4Pdat8ajT12pyouzqDaxC9RJJ"
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
