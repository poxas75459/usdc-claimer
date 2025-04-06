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
    "5sixHDpX7Fj8qthAs786MLhtau72qye59G26mDufkktDzpjuQ71t1Nyk28c9gUoFYpXNetPFtRkTncYsyXaUyZzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wruiqotU4chNaVMkjAVVHFqyu91Q78ZNGZBMqgonrTymFsvvPLgJ77d6g4SLhdbD1ZUTNEpp9epqxuT8ry92JNq",
  "key1": "3MHkcmtuZ3k2hPTcnMBhCoWf9kGhUMDUUHF7oVvCNyvZzShSWac2c3GCnE5ysB1WgD7obaiZBzByf8mQN1KxPMBa",
  "key2": "3J3bAJMkuzsE2MiBa1SAn9m4ky49WQT8DNmUXctcGRRaxs6YoiRJHi9NmFWqGnMkGV1CPMYeM2hgpUPiSpR9XYy9",
  "key3": "381o1ofTkat5gFgR4RcVJtNtFnjcaHq7LZjgJ2RzZ9YW99YNokk3sBL8AWKw2zk8PkGo6ZbrrfwEqdi5PG2dN8hX",
  "key4": "2nNm6Z7eTDwAS1umbueHB56bGUkkjimJ1HXcQxYM8bSzp2AfsDeauDuCA6Cuvgk4VjkXsJ8g92KmfbUMAs2U7Kum",
  "key5": "4uPJUKK93jHNtj46nEkC32pBfQnxAZXRYdRqcZEigYiAXUjXYo5X9pTRD6tg6bVmjPvBFQeDKBtpgJ2UzsXFw13G",
  "key6": "TtFQqWxdp5ni2MMijJZiDP3wR75K89PsiDUdyqJMDVzhuTjG1S57uhmZMYrm2h835BrKYuULH61WCTXRrkyBp2w",
  "key7": "4vg5u56ySSWqoHNU4zLtDoaKQD9d7k5Nx1wtnR5W7vSpEQWygJAHjD9qqQLd86yRxm7M1PGJ2ZWW8i1D4MM8rdeQ",
  "key8": "2a3M9VWdEc2yPwFuDgCH2Duyh6DwZkJbzBf9rXGCgvCfWLnJCZC6CH5BAwbtKUaFr1NnvKWCzCwB8XSxyAu9mpjT",
  "key9": "56s4CAnJA6snUVzurfvo6ENK8LtZGMdKEbPJNNR4yzFxt72DCp1Pw1p3oCG8ba4mBubZjNSQG71H2Ly6dEYqH2uv",
  "key10": "64h8GS2GzQiD98PZY9PURC2nGXX7zsgnxc19oAkiT5xXftSKTYUPhsUbcjZCh1qsaaBPPutM1EQQyt6fpLdvhfyG",
  "key11": "4q1nG4iFtALMxaoX3BMXhBDQtV29QyUKyz2oNnuBpDgJ6mfXeQjGMLKXyx3QrUddWdLQ7pFFa2etAa1pzFyQaAVa",
  "key12": "3SB4Kj2dCwU2QA237c8TMN8BDDRwhkVQWGxdp8uu73oZ4hZHg3wP9L4ooffiYdVgt1noDnjUqHAfTsRiZJMRia2x",
  "key13": "3bcf134ATKw3iZHJrUSqWwrNBt7VJ7Z2BciYnofjr1n2y6XxiRN6m93pDxTshhjDYiBGaBKkzRQQGaehkwbeNQBX",
  "key14": "3M7heQLLzVNAxyjyr2B9TMR3HJVHesYw7zN1BpBjZbU85WVW4jkQhpwyU6Mq7YyD8d8Zeka22tT3ez7LdyX7dS1C",
  "key15": "2TUEkg7i7TFXUXKYjJ27CfvpYoegprdonh4UbLrcjaKf7udMUBrHB49m3DU1XSYD2h1FNjTAaC64oAEdRxrjxE4v",
  "key16": "5iibb14U8YKJh5rTcedf7TkmcGjTv7cvNemmGXhowT6fS8GdiHhQUxK579gYkjTWzuD5oCFPJ6LcXR7rjdYgNgrL",
  "key17": "3bFTcSygDW5oNr9LzukQraDH1Sd28U9vjfzycwXCmVegwxBDm5qSUxoBcBH8SAVdiDWYN8ayujHg19CVd1sgv57o",
  "key18": "38QfYkWRufuz8R9pi6owndGsn6MZmGTMf6ZsGtUpQYYgWDK3seQnm799zBPinJK6qivxLzc5z5Bb8mJWMFP7Q1fx",
  "key19": "5LsWUrw6xqdg7RVw8SzTEEf9PBiazZokHiQcRfcZBBw1ymiVVMWguqzCHLmgevfnqijcW82Gu1Butn43XXjG1JLy",
  "key20": "4rr4qsaY18TAxzSz5biCt6wfDV7deTEiC13MiyKFdZozSC5ySTppRMS1acNXQz6YY21aiszryQk9AhLXyqhRefrA",
  "key21": "5aSkhj8PvcN7wUNVWhf2K2qs4g8AcEuFpKR8P7Qo885BsMVZSkYNzry2jg2jSvtnfVkkzkxDRSuTqvUUBnP8vTsL",
  "key22": "4sSrDr1BEfw591qcnUqcWYQCqSP49rTscaDXNS6ZyfBYbZvu72R3uz3vGks2B7VkvVciWFHDDp2Vts4Nmecnx5eT",
  "key23": "639reZFHu2jr3oWM8Y2MgUqGBozFJJ4G6zfjTz8DxCptdCw1dgqXpohdXuMzqF1xWpM69aaCKQiKddQ7sppgPqK2",
  "key24": "5YdaEmsUx7N5fQ2YhX2zFf5F8D9rSvUbkwXytnjRFwwYDNNtyUhJA4oSyZXQwyd8uShaGRtN6dwrFeZtKLdD1qGa",
  "key25": "4RhjbVELTmiYm7orLWtPtMEye1SKYzNQWFAMGHDNugQZ8eXH6naVXPxJ8aApZupUxkCG2fWh6BADY3iTpGHo8kAA",
  "key26": "325AjVn8ThPbad4hhDQT4TMia4NDY2S6MnkC2MmgpqWwhV1ES73SLcJwF2YHdd6RuWoBmn5ap1pP25nx8pZxTBgC",
  "key27": "2ENkNJJTRCe592cPL6YHTd2kkivKUwtE3YSDZvfpJXJP82f4kzwZJSsZP26MomD8zGp4xgqpt3ZEGbVhJbTG5ac4",
  "key28": "5euqNRRYV7mQyGQALNTZ5dW1pJVGu4KvPB418bVWQLFKg6EvquJxHStiByAPMehupERXRXYKtoVNCqDjMgPLRprV",
  "key29": "f3Zo6bm9aUz7zFQq4vrY4MsGgubSDbagn6KnVfQMWGQxHJAaXBTohf4E5H828nXAYMSEaL2xDWv9cxsRDVxeHDm",
  "key30": "4FVrfUVQLPrYbB7uRGgJ6o2A6xphdx21W9WCzmMcPa8xseJZrJEiDBRMRvy1pMxkHMW56Z7cyjy9X1gn4gQbhCXN",
  "key31": "66kF9sFRGPNTQP2f3ji94i4d8fLTiB1Ec6nuc78WKWLTdxwdnttVUTJC6T3hKvhBPgvcQNcrerS3aLTUBLLMBobG",
  "key32": "5KersC8QDuwu86hEDfjvDg1eDcvdAi8Ueh4Cj6qn5uJ9UvijuwnMnfEQCA92xqz7At8soe3G6LSRK78MRhfdnpNv",
  "key33": "2eC1wCx7Ky6NvM212ejDGs1d5fTcA9ezXHx4caQoDWcn8qBgyjE6kSsMiRmTU5MoqFg7Z3VsucwYeVSaeFCS7A8t",
  "key34": "3rfY8VkbrVG7sjiX5yXnNWiGehHim7EPax8S5HAi9yGyVyqdujbEbxRTXZ7qMfj1q9A5Dv2VJKmZzBDJTTQpaRZa",
  "key35": "4Q1DYwMQqWDPvSR6XjRMsZDgUqbiVtKq7eATJXMbubxcvEwvSHHD6LUdHZyVA6QWnNJeYgM1xrnvPwyjd2nJvtwe",
  "key36": "62STvPL1SJHLD16merwKshH7hnCzXCqYGdaR56Ki7mzg5AcprfvkoB9Hb9fpWVPnRuEFZM3gXagsPFCKDCr45PUf"
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
