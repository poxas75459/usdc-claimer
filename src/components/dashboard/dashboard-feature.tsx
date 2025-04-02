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
    "5Ny65nUsgQPzLL2Ro4aNr3xYPXGgJXvTpe8aeDF1jXto7hYuy9FJ88kLPmK2rnpjnGccp7DapPdQs5h1Z22Kqg7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Eoa5hFQa2UdNCyfftHXi8k8J2RR9eC7ELJtT2GwTFUM5Bp5TJRRRbTWKf9Ea7jLydppsJ5buZ3XmnKeKe2oyru",
  "key1": "4r1K2xXV1mk7pCQDXysJzREC18T1mbbD88Mrcc5BxuekNBjXACFNc5iT64YgTggE1co6b7AzcAvZ2u66Bhvei1UW",
  "key2": "5aXGYBmE6ckykjspUPSvwGD6UKoFbEywWUrzw37Vhg4UanY4Zm6KdYs5jiAjcRi76yAcog8WQ7AQRviAzbSHNYJw",
  "key3": "2WcwiAUwccqz9DUJCRr8wbL62HNQZo7vPqDpiqfKGsXnVQjsxHmjRS4GyFssrFgs2EMCtpXHLckoET78WvJP35Rd",
  "key4": "5Jhnr3jCQuKccSpN23XpST9ga8CxoRcLj4WBMn9cjR4xcsF8ZdsAePnzTyLZGSmn3vpoydNTdm7jhQtaxT2qkP7",
  "key5": "2VMo3aJEA8MBMEwoKoBTPWYkHzApe1hdjraABpukgcpekXACL145r3EbJoLdat3nbfq5eGfXiQhXsdPHxqw2h1fU",
  "key6": "4wunQUceUvKEqj3Q84TEjsGumSL2hsoCpZz8A9UNVXDfwTRaphoaSKmzMXJ6B5hs5YQzmczVN5Xc2mvXsDFLienH",
  "key7": "2PztjpNcztdUtZBGxAVYCpMvas3vChDHHhyZ67Xu9LDSweipNKTVxLHz5VFYcYXxyhta6fUccJJ1VrBatpwprZhD",
  "key8": "4QbVeN39Aqm6LaegUgJLe6kabtK3d6NqpxUWbB5D3ueyUEx1bMCeUABRcxKoRayXVTduzfJWHrPHpdZoUg6dKCXn",
  "key9": "4xEsLu2gUCqFtzoMCBafzZzADMtz1CpDjvTvDy6AirKGHZBTSZ1biQrkH7aWMEf5trqA4LMatXUmhWCAiDp1tM1P",
  "key10": "22UeBZ5RQ3dfrGXajJmDwEakMYkQ7gWvAzfwKA9TT8zUAD1sMKn6WZXb2Vt1G9ELorAtk5ALqyEioK8hPSjTe7k3",
  "key11": "5tzC1CqWW6eBTKqubGSoxmNAXv46x1WaoPjmJJVQRip9zUBJz7uMk1pTFL5TKZvmZNjfGfvmho8ALbmCLqaifNNW",
  "key12": "RKncfCCWM8YFiQnwqwFsqBBMi9ojgzXKirzmCKgJ5nqCsGeWJNdW7p9nrzptrbVkLjR9i2CfjiDMKrvDikketEn",
  "key13": "4Smpgo8zp1pneEEUqUiT1dDyKbtLubr4sqmygH9e7uLPLaJSaqcedks33mWHpDCA7BGdBixArao36pA7hoWVUkgg",
  "key14": "2My39DqLvvAtAcAJA8mbP6uFdFZmEBeCpDZ1bNkHkEdi48FcwbGXEMu5zJVMqLPB6PfXtLDAaUJhhz5XZynTk3aM",
  "key15": "LK2KCgZ9kTBi1q4RYpQazsyHd9wdZzjb1jRmaP95fzi2WUf1rsHBPvutzPgdmjnutUfXj3Q4VrQqjDLavkYptex",
  "key16": "5MwzkbERtqHcAdZRmkgaSxEkUaga8tf41aBXXCZ24PGWN4JxpjLFyEoVLWeX8gJTaKZngA9inrBytADkAAuveCuE",
  "key17": "4QWfVNP2ZjtkMuhyrHYGBY6xxvG1afMqQWzEodne6Jss8sqzBPrj6icuNUJqLmbJvmPaWfde6QErAoYzPcjNp5ho",
  "key18": "4STiBDrdGPMmMEUuCHYaB1RTbMV1oFt6MBKj78a4pyamSHC7xiKfLGipjzMG6NqK1PgU5dPJzfotR1HELrn8tisL",
  "key19": "5ovF3LWmP1gvvFVULapkr3Kd6WfRwyAuRngG4SSKyBNLDYxQhMvTqkDwXD7fixCEVLZDUQg6rHRq7YrHFQvcaehU",
  "key20": "4vZbN4Evk5JWfbYXTT5fZeZvuGieHcsSFVjrEGxRvZYd55aWKGEYV3fyAyPu3PkSC36k5cHEShGnNURX9wnkf9ye",
  "key21": "5KxvJmT6GuaVHbreVZnKBCfMhRHEngCpE2VqnFvUiTUtJX2tDYciHw3HVuxGYFwRwRPDrChhxQ87k68FPgSVCaJP",
  "key22": "2Um4uWCFJYLw1Pgba5639cTdMTy4aWbJss7ezxK4yCfYJsTDYF63UQXf4MYJh8htH184ADbg38R3rfhbn9sB2Qma",
  "key23": "54XVi9dmMEzkvAsA892MCJ7S7JFR1fMpBQN6s7sqkcPzwbVuLbHMYumreATvCfuAzSKwFs4aYgqR5Xymi587e3M9",
  "key24": "4ZdqodXnABiuj21tcMVV74APSF4fEgPuRzih9RJBUPKwtXGktdErYnczLz6sSh2CcHzoHg8A6w5bXMZzmbWx4GVy",
  "key25": "43d5irypm1nRxADPumoonL7gBJnpy8m4SByKJuLvLtJipu8KiM6Rr8ryTAAiATxiMJaXAN1GknXr85CaaeMZJdUB",
  "key26": "kih2LPSRTMqquSDXEZQ79yb48coraiABnuNVtsfJyxfxESbq7cKg771YktzLKHHdqqAFSV8qjvEbVUvpQVrwyeT"
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
