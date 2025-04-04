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
    "4Ft7PZjYC8vpudttrL14cG5XikzPmHLLVENVNuAKHTg3hs2Jma7TWBkrcM9J9B4YuBaiXM2WLX6LcVqBekXLzusD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ugRW5ojBRmgUdgPHqEKYZP1kVVnZRHy3FeTRXArcwJ3SRjH4wUaRyoTS9XVAKCUAvGmLfuqW2Ggj4C3zkgQZYpf",
  "key1": "46jvch1t3rMModYgqKMwz9aHezprMW2rWixz4bXoAwKdAR17C6vqu8rdTr8YvrM9VAEsduGSMpLqTUHTV7LwfjiX",
  "key2": "3Eid5bLXMEzWn4WdGXcxi27xKBHP1mnghrep2W2GsCnENhHT3BJU4H7GKFkn1xf7rXdsFYkVxn2e8tc5nNpZJeGD",
  "key3": "4hSuqRtGVQQGMW9d8qTdmXvQfRjhTYdSS8vUVzwCYwx3A2tcnzbJDmKbhYwFz9rk9fkJf9HHf2mypj6ymZ3Cif2J",
  "key4": "2wVs6vYVCUmdRvqcFTuEjoLGypfbp672TSxg1ypus92j8EFFs3UCZY9Jph2AsF6jWvrm8tLUtBviprX9jf2fQpWB",
  "key5": "WbM8uJuALBErDonC8Jz9ZwwnNvTRCrk3G2pomZWV5EG4VuqaAciUbosKkdbeRYsw3JBu9jsAMAgU3FhxmUbKozR",
  "key6": "6XQXGfCY57ppxM5LwbFE43sut4xYEzhvxQq3dMARJHG61A9X9iuzRdpZ375F719faTfbwr4ucMNWkoEdPxaLHMP",
  "key7": "21EcaWN5BYZGJBVoQhV7ccMxtkJqoyyBtqMetcdFjYgdpUpxZjr4D27MY5srsdf7qDkYadG6iPoh2nJ5fgCDBzuY",
  "key8": "4SRsT34GEZZK7UZdhfxiiYhwJxQYZvaUfpTmy3gBVtMiudkT7iXZGDbGiTMthvErGEG6BPQrNyRcJXLhftkyrJbd",
  "key9": "2zjQZm4GAdGNuyhKjea43pffWockus4XxtE9y7NcQbg1JMDARGCWfArYLDhNAVzR4v3S4zCb59Q85rRKHG6kWn91",
  "key10": "45buQW1B1fGWoJk829uzxwLG4sg37nT9qm7pnimQzSKE719pYnS2AE187iGULcrJEcW4ohoxyh2zyDbBSVBFwcRU",
  "key11": "2ZXswy1CMWLfD4HGDESfqRg2LqqbC57gxvJoW7HKyqipvcpYAGcAKhvoSbTdUozNEfAt7FFnGDNDkqTiBAdSxBBt",
  "key12": "4EKdDNNfadKt48n5KddxsZS6B7Ecc6QeKc6fX36NRzuvA7u2ZG7ECTDYidzSJ4FghqnkrcHD3q8eyRwgN46Bq88Q",
  "key13": "3RxKB2hkmhkn2mmyPuNCsWe1VKCu6rRNZNPgN3PWGNt5CGHFUdprkinVZehWNRayJaUGoSww9nShAsjT8KbzVpne",
  "key14": "5UHPBapp7NQGag1vuai9QqwMEdSndMdn82s5RFfSLKnUNPc5FRszNApWaxQGdDSeV7ea8d4DRBgStLUCTGPJEhjR",
  "key15": "3Si65Paz5JgWaLNTXhYCQqnVuLpvi3WWo4iZPSeQe8aihcLL8BpTADeTH8PCSZsiY6iQHxwnxnj8XFWJQUMbA2gB",
  "key16": "tSWY2zBT9ViYkmENAJ72w9u6Vc5zUcuZjqfUSnoQJRKHDq1reGmsp5AFR1ojLnr9nxjLPmQLm2wFiDPeByv5rBk",
  "key17": "3w5KkDrpYZRTdRvB51vyfBaLNjHfjbXSRkwJvkbFFd5SNudMtCfHfrrxG9mBpuZdBbLTMzyJvnfekquDWBYYo7kd",
  "key18": "4JjVwGSv3EC7uDFZHMcNycq8LTatfC9KFQniuF3rN7MCN5CdaAkPcCPdG9R5fTFtaf6eo19HzxsyEm8ScCkC4zSS",
  "key19": "3uY1XsgczBqeAGHndFMkvHp67WqfocCe7Dy2babjMmiP6rXgJdZfJnL8QDDB8m8NMrP7U5zShZV2476JxR6Pwf1p",
  "key20": "4JogUsCT754EBTRbUvy7KHxpakQSF9EEBdUEW5Pum6rDVG5kufFufXdsz7A3MD4CchLnus7eJtJ7GtyyhivS81oC",
  "key21": "4ykeU2qjJ4hhuvAfR5qJRCy67Zw8qHqpSMkkqWQgoxK17myCNVksJebz1Qos8JwnJYUtWVaq7wBnFQkkws95pWh5",
  "key22": "5kvtAiZF5hzBJndVEK7ax6REW99nXRHAf5nqHkPQr7fhKepW1RtCewuj8r2yiNUs3ENC7Y8WQ4JR2Rwd7FNpKq3y",
  "key23": "5qwpC85eyM9NCfrsp7bGJeDdKrmQ2gpnTRigr7LCUmc4Hm7HhqTB3W5YK8dXRrmgjXZKCUHmQS3D9JsZAnDjXwgQ",
  "key24": "3TfEMJHYRpCQnM7jBGhJVYQUe3L8K7yMNd7qo9on1xDfpyyT4mpbg5SUcvMNkwkWN6PL8zEdJeDqe3SAQBmm8BMS",
  "key25": "24CyWwo2L1AqcqqM87BgySCYEj8JMPnT3CMwibJ6soRumDod1A8Me2uYXTBS2YEXCQCpoTEKz1xaBEiXSd3oNXFY",
  "key26": "2paFsSRLKv5zCtEKo8ZV6rwXHJJusFtn4Z1na3rJXHRXTDY6NtGZN8kfsFQy9DBx6QLJ4hCLXxJYkXzkf8NXV8nA",
  "key27": "5e7SjBUbGHxtP7eZjVpeEjcAbn8JkEPGyJtiLFtDgFs1a9xMLhzKowXTPJ1JpqtVFniku5AqtY9KfYPSxVG3at9q",
  "key28": "2RzHHNT8ao93zZTj6RtbaqtnF141hzK3o3xqnVq84tuJkNrRAbC3UXao5XE7uxDvAduPKQo5eymMb3Dy2UPL2LAw",
  "key29": "3k73E9Yw9noUEq1NRJypWEakgucbpCkTixXYoQZtaY3kcTpv3oW16GWr2j43d1xZu3B3jetvC6eyKDh4rzEJUpM2",
  "key30": "2SSziRhuB5TeX4KhjgDx9JFnJpVEuu4sWuyuDcxhW9byGdnwFm1dGdKiekky18afUwWbdCkuTtb9wspHmPtRXTBf",
  "key31": "5M5KioxCLdAgXTxj1tq4PdkVNs9RLK12SDWsvfxYpAM8fhiebwgoEXFYnvndKv8A6h2W8Uw1voRziqMstH1qVArG",
  "key32": "3UcWvRXeNqGcb9nQeH9B8bf3nDZhHcXX3UWwDWwif5oSuiM9KAS1H3Kaq5BLJdwkws37oWdoCDoXgxMHvi8UWSR5",
  "key33": "3m7vEasuxnLGHrELTNLFCicNbHeKGPbP67jqgALinW8qczv5jb8S8KfxvCeksV985mKXeAX3nieMWSKFdPDAmsKx",
  "key34": "2GsH9AF739o7i2xiEvEKhuaiJFcn4znmCWGMQbDxakeAh8c7SXowrtvkdCetrx845FGbzaZj7YeRMRVK3SfKm2ji",
  "key35": "2XRASffsEuh44pZ7vth5NNf4T9Wt266ZebyStDZXGxJ68GVtNFBv1crzeZHFmwcQUWnkTAHGaspT3BZ2B7y9kCMd",
  "key36": "PJVbJLhM16NX2T4SoMtqr9GDYwA5WvbbpSihZovHNc1pNZqJu7xwrTkV97r2bKBWrvBA7drxYPMTTQrZoXhtnjB",
  "key37": "3xNMDMhGa6tcDM26sQTwWM5da58rXkvsuc88cCS2SBRZbe3uw68rw5kekJ9Xz8t5VaSWXacRP22H7VyLUA1fD8Ds",
  "key38": "6ADvSJVrovbLnAYwwYefi1qS5F4XYYg4AHzY1QBBBPZELuc6ErBS4ccxjQyeFASv7QbgYxfruRZQaX9Ck6bu9ZU",
  "key39": "5FRSSPwUm8J1xi96AtjogYZVRFQLTrjK9qhnQoyanpZNexWTLaUwgViAgsXr1nAfNMSzg39yEokiUpvhqyyDbMaD",
  "key40": "5oCUYk471FeESZkxDZBBKz1zTiANccMxGhUb2HM19rsYrw4npJFDwPnsYQqHa5ayDcQJyboPGqGVjs11WcYVsNoB",
  "key41": "2L1wSHTiB4X6NqXkJW3z8bL8Mhqdc5MQe9ti9etXSdhbW5UQfVGo8e7QunwjzD3VNJ5GBJiK83CFt397gPox3xzB",
  "key42": "3fPwUUXuhg3Dw28Fv5CqzbV3yTKXYaPvZzcL2GoPVjr3W5MigLmUxsZQEZx4CLobf8TFDxUqvDEQ2dwqncCSHDi1",
  "key43": "3NJLyBrDjSoPapD76PjJhYK1cHCEJpj6BbnMabtgRZ8EGg8smB9ZYR7hikWv8MErZc55kRDo3vseiWfaxdULv3uK",
  "key44": "4gA6ZKmpihuH4WsjiJ5TGejT7JenV12Kbd2JvwkZqx7fitQ6GdEBaqgjDQGMPMUK33cL3rEB4DTVaiSPAW7U54hA"
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
