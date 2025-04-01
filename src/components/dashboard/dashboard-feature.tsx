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
    "42vSep91skWzCbqD7Fn5HRiTN4rUpgAdbjAAnnJMrSnr4r37QaKV2KWtemmaAqu6eeAkmEt9CSXEYKSabdgRi1fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUmsGemVvTtLVF8AV6qEwPkAr6XTR3MDazYVhpoCCXuwkfSJhC8ddY3qUK6XLTjTynPmL3wqA8a9nGt4sMuRjcJ",
  "key1": "613FitwTbFhPgwZCojnkzDz28hPWYax4c6JbA5ojw3Z1WZMPMFdXtWM9fWBBFJuDbZGddgs6V6syAXGGQUWssG7E",
  "key2": "3Rd9yZPuBuy3H2pKLJx7kFHcEzR2EoCerZxDzBdxczyAD9en9MXdbLSDv4DsHZrPD5GVevnzZ5ERqJYykfoFZGbm",
  "key3": "4348q7gaDXhLQXUm8UfJ3iZwzC6TdDhfhDGGAaVo79jW346sJCFXXpGAWcTeMhmQgyHqXtaQcmPy3ig941eV1nm8",
  "key4": "4PmZJAUn22LWX836zwy3BgUP2PtRjW1VhFSfAJVfjcUfN8q58jVjBKgeWgAdxmQygneAdrmVYDctAxUtGurqtDTm",
  "key5": "4UTkqtSakhTNJm1Piidc6oAriiV2Ynpq3L2Mxkfz3vZFGkz3KbRN9qQjN2Y75b9nzkdaBnyofiYbyKMmoYknEHwW",
  "key6": "5ZURzydpinbz5modNVjKrdyD4BpPpKirAJFdTPJCqfU2MaZrDuihQbVf5RsxN1VCYrGSWnnc2uNpCFJqgv6HWKew",
  "key7": "2Z49QpQRRZuJJpBzn8kzb9AhcQJNHf4EnsXoNmWM3d8F2nEUudkiy7AZB3s4gbAdwCHEYLVev7Avrv1WagTTBkct",
  "key8": "3R6HhdvruXx6h6UE1k3qghowmbxzHcUvcdSQDPZVKxySJxu62tFNXxa2uHZR19HxtW89cGhm5jw7gPLse5PHSDhW",
  "key9": "2DEUUyWvqyVEHh9tRLHocTTPqcH2YqQa9vXqYoKJo8UnaftcJh3gssFo6Tod7mWpJvGTKAEmhujMFvYMCpJcMXS1",
  "key10": "5uoegbrReTXzScv9xhs9uwDhVpNWZXXVq3GsTixTs8qAyDs7XgzWhXcL6cPB2SriCum3PfNCuLG8UzDdmKWhZCTm",
  "key11": "4v7CxE7anGpdLJnHKT571gmjYnZM39TZ898Uh4DgH8h2AzEunpYZNuUg2mgqyZdKkkKvUX1msrmzmC49n4VGkYpe",
  "key12": "3Qr9eC3VA3hCmvhvbW8hDaTGx46NyNnEKfjsvXBeQXW8TpxAwSCAiNqnZ27u285Qe7k7Akjb4TAdKpnKQu1uW5fv",
  "key13": "4NC548eV7Ab9sJcoFQ3NtSoREt291GJkJQ1ZxJFUdCBvBNrHPfmPA2JsGdRZpXznpSBuc7t3SdS8jpZCbwokmRbd",
  "key14": "MpcyH14YTDFxATZiV64C2PiH6XjM7wLspfyNMKZ6jYs9fmtur5UULNP7eGij4UoZAMtfCEGr1Cmm1YAZ7BGn1ZH",
  "key15": "5DM5FUv7e2aDzn246XYnmRURE2xjnbybTPEpMNrwkBXpAPN97ixGDfk9oJ26LVcDxbpjteB8n99Up1nR7doV8hFq",
  "key16": "2gEyZDfVgGYyNL7jhEcFxK8UbD3PtakwqFFFdv4movwyohWWBqtAaPQ53wBsU4FesKJxeqxWrPbY1i7gC7TbXg1",
  "key17": "3hQ9FXNpniRxmQS8XhSDdkpM7cU1G2i7uksSGFnt1MHfqQMrTtdZt5spwGA9x75ZXVaJ5uU2RV5XzhWWeRaU87WD",
  "key18": "5W4xujZ4rAKebUiZeXFma5dAnjsFp8wTYjrqRuWwiKt1HUDTSTaqqa6pe9WChD3oX1cM7fraDZgAqzdt36QAJmaM",
  "key19": "63JwPtULWmZcjc6pXkzPnUvRYqLqJFwbjJvTxViUMdPqpSfLvprfTuGF1T16vxkDFFnY4tgaV6MHLq8PzjsLjUxw",
  "key20": "3ztYFbeXZ2zzzq55ei5AVQNvVr8JW1yr4dzFwCyWCThJefNboLaFMyQz63PtUMPWrkjDhYbgSRuG5FJNd1Bp8zsa",
  "key21": "5Ytoasuu1RLwgFQnGsdVTzTvpqfJ5cur4A7xYoTUarX3vKc3c5pBcAdw5ArjtWfjF4SzktQRzkqsmkkGK5EBxYpd",
  "key22": "4a1ycZvBYPYP2kucJV6LYNfMrkEyr4CNveBAC21PXL1k7mFHwVc9SnxAcH9uAhg7kHf8sPkDvmprZaL65h51UwXE",
  "key23": "66FLZPFEwMo8f4hz3XnuqAZeDK5A2SiX28m8YT3GAQYyDkSMfc6pHEGgPLCYg5dyJH1yD9MpxjV6fgUNmXp7oVKB",
  "key24": "4YLPLhYShnnf6Zt2AAiVLiw8MgS4DoZgkVnSa61aWGq6AWUkEeA8wjrQ1XFh8oS4c7aNDaeJVBhaZDbaAtRuKu6Y",
  "key25": "YMvQ1BDG6VmsSzB6uXtKVqq1cTX4t3aTv1p6FqcidAAJ8r1dsbYzhDtU6CnXnaH78XJLgMPs8G1qNaWzWiMWfaV",
  "key26": "66kNTPhfNHzXBJmng8ogzpfm4uiJ8mUdzfvHHtf1FLqALPiRihxvVCWtUAYRDwAG8h4tQDSUwADMbpqszp6FAY9J",
  "key27": "21Dn3vs2jYZqRifyWAMwMNyTgKeYYY9ThRVMHJfPqYhVgNxQxQ3UkJX2qrvSUWHbkn7ys3xRdRzRmgB2cjyb4vNT"
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
