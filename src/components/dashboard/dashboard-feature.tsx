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
    "237yuZ9gFtMMQHLCLZyeiVtSB1wp7PkU31MTVMDsu6etb9biYWaaRSy4CcGBpMQh92WMqpxDSEGXJCknakpwifbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ew3A2CoA3zpmN42nzk8qndU1GJRwkzJZV7zyuZn1nBsqaWUg3ym7iJ6FpT6FowuauvoD2CyBf8tV2thpY8bn6N",
  "key1": "5xv7bBYeT86e7cvj5ohGXaNoEoz1sfXVFQKtqPa4iJnaCvN82yoqDVc2hjiQZPLU3oPueV7KDgJEgxdreJkTsxmA",
  "key2": "339yaayKD3Hb39ccJjgG1rYzTVC32FYkGbeKYDSPpDgyr69LN2RdAgqGvqS1LuzZqxdxd5EQzRxTVCyjXhmtLbfU",
  "key3": "2zQmWpzKR8vep4CG85p2a6EHXwAGBx7uVHxU989rUH712k5Cv2BiXxfm3z2dCyvUQj9e8Y5dPTCpmpZKHV3DcN2D",
  "key4": "47w39EmQWCHwPXkc7Yy4wz7uXdNddAsXk5iee8WGyBo727on1KnhR7LmHhHcoc77PojGmW8ZxC97kkmfyGWriaXU",
  "key5": "3bceqzC8fk1d2ZnS5vcuLoVmkVTm6aoNzZ3Qo9UToHFJ1kwneNyNPkjZNMfTpu9mAa2sSLCvH9TiZjhBMGXAKRSJ",
  "key6": "4rbqCjr1M7umgct3FWowiAAZjwu8wgmDXoh12ati4SdbX44mqBGnEHjpdLpzAZGfmgXMVhoPjnqXPPNXsnZJZDQg",
  "key7": "pm3CJHZeqZqdqL8rmqnMdQx7x1J45BqpN5qFKLhbKv2wsULwm8R3nUzYJpB4cHRh3KVmzY3U2ZmDUVKMjHKq8oQ",
  "key8": "WyNXRpiE7vLf6hhe7TT6HPUfCu2BBAFmtu495JjsctDgfrrV4Sj5S6cPniC7W9nofETtPckngLJVo2gy8ej1Lvh",
  "key9": "3yKRkzVwZUHHT1Z9azkctA96nhvAEjDBayULkBzkVCjexPPh47a6F8ofhysp6kqqJvRbTzyvZYNaAoH8mVzpxtaa",
  "key10": "4D9VFMgYCjBzZuVxn2CjKaMR3r4E3WRYYrfQCDDxMt8STz2L6FwdDanTT7PeWjogJF9C7WtjPrUeSJL3RMsvAT8d",
  "key11": "5McKknrgjaawahcSG58iEnkcE6aTrxQVys1aQTYgj83CJyq1mhBnNXSdpbvmgsQtT4NWxuFmMB9hS1n5kJ4PL2dU",
  "key12": "65RC7QwCHKZBneNCEnHAqKrY8WRPgcSFnMsXT2mvbUzvtgz4Ae1ysVoWBXfDtXNxnmE12ihKHq3md26wRiwKZUjn",
  "key13": "3YkmojPu4depPuoFhsMSoRBx26CrjjUd4znTnFHBHjAbXNK5Yt2FcqiPAX761kF7p5ud7gVGhS2vHNYrBAtc5t2F",
  "key14": "5MMdwswtbFu9AryY4HvsXZkYWowWiGUCAzmVEDU1QR2CErkPp5LfJas6ysyDqwN4dFx2GcUUTMGYYgeTge8uDSry",
  "key15": "2B8W5vThWkkyp5MbfnUbSQM6yCe1HwPjhrZqTmKVGocGKJcnRzh1WzB9XgnL7cCar5ViEYymnG7QTGCX39V1ihtp",
  "key16": "5enoQRP3uwYdG8Vz3wuzJ6hmDD36pAqfmiEBx4TS1e3jAJejU26F3wErYPWEtj4tcmDwjd4PcNkyJGFUgb1rEefp",
  "key17": "2oCtcyjs5gBYSU5uQ5mMPanW566cmz9WY4SdRbNqf2qtYeU5Tva2QR9QaMzsLPGUDmkjAC7DHhxx8qnQAVQjiqyy",
  "key18": "2iANvqH8t1U21fsnGEu6rCX3s3v3k47bcT3FoweeSWDWkoVgMXEVaBQMVmnRQqjG98ZTkE3U9LxjDbgkhB8i9b1u",
  "key19": "2HHgBhTviBqjJjtuRQLwL6mwXFmxU9RJ2QfRdTWkbF2k4hNGWwHarAtDjrYfxhbGAS1Qp52aJQsmmAzuhtyp4SP4",
  "key20": "4XhjMzEPUxVmSrNfgeBEcU2FPmF2rxeGcmzJqeqkkrJh8ZRGAEakpFJuBkKLuWdG7SFkzeKbY3Z9EoR2HcPiNt77",
  "key21": "3jC68DJ2gM1SzbBs1kibbMj66ySGDETfkRsnTLVYnAPFQoXcBZJhZLtXjZXmSeh911JByWHvanHrvxS5KivR8vzY",
  "key22": "EAyGgtBzmjEGdZkbQxPnZiUDakFFuRGbqFjar7u1tq9Uox1xmWNuTCZhsEmiDgocF4pVKJznXJoBzdCQYTpon7u",
  "key23": "n62mgDHYMdVx1CrguEtaTxjCvoR8Yrwx5LgnwZiueZVJ5smW8Ya2VswXHRHvw7wZKwUkNFRhGexLgmuv5TpQe5z",
  "key24": "HS8JLwU8RTNr6VBkTcVVuwMA9SeGCMmTe3mgvA2bi1qLqyiBz1dTtxfKrSToKyH6Uo6Kb373S33AySdMgqJ8Fag",
  "key25": "2w1iyNQuHFtRAJwizkEvxfXiYb8g2cJJHw4vbQFj9Cdc8yK6jdF4trD18J4Z1RztKPinpnbb2wz1NnyMgpcbFe8S",
  "key26": "2fY9gDumtTvjfPNPVmVQmt4RdjkTmPSYmySvuS1m3AQcNDgwvhZ94SgqwG4d9eBCeie5iy92KQoYigpTnNVAUcpX",
  "key27": "5kDkE8PADNEBFn6mSghPL5qeJGXPjMobLMXhx4aR2tMyyhMHcMp3VoiNPyGhV76gEzMhfJWcYbxpUh3kKpvRYxfd",
  "key28": "2jDUARgcWNXB4JcsW5K17JyBoTBmAXe61wg6maXfijTKicrHJKv96LZTAKgyB4HYkzPraPGb5uYRF5XNdm2fRfCc",
  "key29": "57rRLhX1UBvHX6BGN9tnW3B3JtHBXVG6ueeQt2X4m1zJ3Ry1Nw99FrHksMMModBQdUsGF1wbL8JeXqYYoBK8e6C9",
  "key30": "2mszWMLX8UCgfRAQmWEdNahGNFSFfTXa6DbbqnjYtJJjN9kq4xTBiLePMrBYhob5FRYYir1jt4mMv6qS3q2njSRT",
  "key31": "5yM6jVVxwBLGhUoknnkN4id8cR6pbc7r4QbbAyGosK8m6gpb8GtfXtZ5s7Pk79se5vaDbxjLUrhKenLf8fF9tzG2",
  "key32": "2AbSZvAMLSDit6cR9AuquzjmpTBVh7iTzxu1e7D6wPPzE8QYvsG9zeYtMmam9vbCCYt6kLsYMvyp7ZRfWquKn6Bs",
  "key33": "4bVRcCuH48JEkNq6mi5DMCELpK8qsRbH8hee4Yxoeoo5FYQdeuSou27d21ELwKkRpfz7A9xxFBSRXuPVS7kRYxk8",
  "key34": "3B2hTiRy2nEhZjLpRDMHRruCPU8pMKqgnBp8LAy64YFHk6PvoauuvkPZtoxdPeqrvF8xNCBvfw7H77L5jXbhY2Bd",
  "key35": "eDbkcVoa6FJkc5Am2kWMhyz3V3ib9EXt6jzPDRb4wgg18bBX72jTYnsj57jAP15rfSZESZdHeDPTxaqs3pvFjnP",
  "key36": "2SAbmVdoU2twYUixRQoeJZ3vu8NGLtfcn7dMXpatumHdEKuJttig4Vekk8hsn1R6JMkcX2fKZs8fcTY5QakPWXEH",
  "key37": "3njg3Bo1PDNiLgu8j56uq6tEHJohA7S9xznBMMV3yD5SP9hkCG6pNkKzpz7WEyt4YFGk51X6WV6WS89gVU3AbHoc",
  "key38": "4hedmFezqrFkuX6PybuQ8hxBc8wGKNzjeZXesGF6utrGSVoCW8DhikUjWirPCKfKqSpCLmdSMgYnR5Fw4PNuAoJj",
  "key39": "2qx78c8xq2osyK8DHpGn7KHYpsE18f1JY4Z6r3N8zKiKqsVv4RahbQyjj8iyVrEw88KZfremoD5zxQPbgHkYEjqV",
  "key40": "5WaWnjHCfZt6xqkEQWq2vv673pQsMA1AbtQ4BSqx1owzcXcL4H4vYV5oo1ubi5x9MbWsfBn31M23H9Cu7Kfz4ywq",
  "key41": "5JuerFyV2o7zU17P74ySfp3jcMEJd4sT1BRor362Ai54B7WeUQcmqJxSVCmh2WejqMZ7QdxN1g5voYqj91Nk9Kn3",
  "key42": "3knMSgLUWmhBqCHGsAGMeYrnrF7BKdocbRMRubNvRCiFZVaXsKiW6W2KiB4sjJgwuRqM2oCZPzvjyQFU1TQa9SFd",
  "key43": "2qMiN1Y87ZiGXHSYZei4UfNHgBBGcpTojycBZFyAiWYFwYsf3723zRvkYg3yFA3Vns7tpyiKqtckgAYDbjvauQzv",
  "key44": "5uAYGMxHkmCYfVn6vwcXqdMbpL1zNANHYygG19hJ5ixoNzn9Dc4LrMtZau9mU23Ra3Zk2pzZDKgT4uzKqesajUZ7",
  "key45": "4r632n6UGs1KvzqD6s6rK1vLpT44baLzp8wqEMRsDcsiTsQxcCBQJMhpJxY4n2hFPaPtfp75wm4SovDAj4p2ehy3",
  "key46": "4FxpptsW5NUpyiTfEpBhoJziJgwJHRF9sMVDR8ZCQDF4fLz9R1DT1BBR4YZctyr1TfkpnAXWd9uDVGREvEFZeqZs"
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
