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
    "279R4CnQTUWkR8dEn16ZNkfjCdTT8aKAV4WHfbwrx75Su2k8b1ZHat5LruGeRyeqwfZdATMHYmY2dREGnMC5fKaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbjRqDUqUJ6AU5iKCFtF88WFeVypGCHANrdc5TwcDwn6yiv1bZHdmYAXDPuQ6WzWugpLKhnDDQXNzGXqmRppmQf",
  "key1": "2EXbFa5ytTN2f98dwFNTESkabfvSP3YW5GTQhhxyPHakALxa21fhTnRC9uvG2pRPNbsPuFpCkAsRZQ1pFkwS9vT9",
  "key2": "5vhnXEpUcgfccpZmxjYMKRXArVeJSL9b3u6HAGP6obYeqjQDJvEKkXeguZQwfE8GPjNePjsa2K2GvxCAm7qWXD3a",
  "key3": "27dvxFp5T4ndMJMgMrEERC5Kt2fnPAB8HuDucMwRYTDdSdWhZL4XvEwnBvcKCM44Cp5G1nKvLN6qEYfGTV1GATZy",
  "key4": "4d2zKDwENmdca4mUhCw6qqHoHrDcoGh1p2cYZwjeaDgzkHEcFz7pGeCRKZxF4Y3kLxy9hk5kthtdd128SoXmtssn",
  "key5": "3G6p8aRDQ1ejetnMWsobmqCUJDHyyxXKunUYXiEF9Fw3AFzbiCecU51PxDX2AwX9FhyQjKsHLk6rcrz3RpiNFnuJ",
  "key6": "5R1s3JiwbURw7JjbtWsa2Ber4AuNv4ssufUcG2dXm4Z1AbxzZr38EsFsi4KrfyLc2wWJBLeCMCHXLyuia8xUqyCG",
  "key7": "4841Bb2yvSc9HyfepQQk65tgZCqQqyF6qcFmpDPV9KHv87JNWze5UfZH9McWdYCUA1JWhfXRkdvfcaqqLgwjBmK8",
  "key8": "3GC3tMbVz7ySmqTZndaZ5Vev4C4L62UNXvdVdmNKFug8uR7GzSBkBHjZrdNL7yK8dNCoMaBAUXMeK3oHvULoATx3",
  "key9": "5aoGG57Q374x9GgaahWP7pVpzVnSyNoXnsdZVb8Qi8y5byNWpnTEDru338Mb94pWuUEeh91LGXUwWfUPGTR4koBA",
  "key10": "5cwEGjmBpqqCT5Whyk2iwspTV6JVLy3kTNN4vqsme3LrNZnaCs69aRAtidvhUC4tg6DMoZCvH8tHBouuvVi1M7Sg",
  "key11": "2phLumrxpQ11PbXrjjVL374HJdFeDf8FK1fW74et33o1wguhu54Z3SqFj8hk5rwjTfFncqgVgXwCLLtCMrd6YatQ",
  "key12": "omY9ap6XH2aoY4K1a5KGkrzKKy8VLEmco45tg1Y8sJ3DTmKeCRBUC1VqNHvFF3WMpH9WC5Tr5iRPjzLjjTUAkrs",
  "key13": "32XLuCYLzg8iUncELb9yzh3xx2KChZ9UNZD3FiNaxSYf4M7mwdGXtiUx1M14AeBfXGyPPLgbpXGzt7t7YkFDzN1t",
  "key14": "5AdRsnX6jSF3DNq1QLewHvcx6jMTciJpBb2z7cf6kqEH4spUk6q76a7ykNcS8xZyY6bDEA8mVknjSDpFNSGHozgu",
  "key15": "2kaYZCXrPj9U6Hm151WB4qWH5K41yR19XyY6mUX18MvWuDPCv1QkEbWY8s3HW3EvEy9AotVc2n4HDpcczKzQ8TpD",
  "key16": "4EjKuSun2L9pQLpVvto8ZqgZNaHwQGiX1Z7DBBHPnjGTSFeeW8fhN2YztB4TUJ3mhntC38EgLGepCauYgBHFN349",
  "key17": "2BZDxMxKwJnu5eV8btCvAB75Ea8dgu4gpHgB31tyHHPTYy11aTNwGrJ6LK5vxheTPiX8R2MPcGbMGxeYfB5FwDFj",
  "key18": "34yainGJ2j9wQqFr7GAaZJJya5BixTPV5Ga1hqfw9ZfQ5WWvfcEYeM5Q5UyniNif38AdyuBb5sPaRkWZ8hHAoEZX",
  "key19": "2xdTTDSmp1jpudBitB7PYnkgn8Dz9nwwUPVUFJuAA6PTY5edDbcUthZXqN3qybs8WV7ZpdWWf2P94u3SgzE47mfJ",
  "key20": "2ntDPj1WkcrktRbx9aGzWqjNsKmkXLU7oYYg6bGgLLivz98X8ACWZNns43qX2hZJzzQKdGmnSq6KBWsohoHoShoN",
  "key21": "4zdZ6Nm4vaxM6UYrZPjZEjdoxWRk1gdags1w8XuXAWeG6MqafEvNqD5isiQM6K6Td5nHmvdBD4wtFgRF46zrXVjf",
  "key22": "389adKfdY3j7xhokvZi7zv6VBbwhyGgp5wfw9LveRfCcFJb6sbPZZQ8vPDUhr28NDvvBTaY9HNwX3cMDRyU1QKTA",
  "key23": "y7k4o8zZHNdw7YkfxYM4qsJKjWirnevH4G3WqZLCjh4YRJ7kYov6cdhKHnQSQoJNm9wKYwoz1Bak55rWvaaH8MV",
  "key24": "t7W47AYuV7STjzgKHdskBpgLjNVan3vRVbCgsaGJKzsT3o1nX6yZuj5nsvXLtYGtAdbyfaWnvTxMNbyB8WLtiEB",
  "key25": "2BqqXMBcqWPKRwMDFYnG3tr5g4oMKsZG9vFjAfjzyJ3mSxKDhnFfykk47Q9uE6gYAKiCAVs7N4D1QfP3EZjahmTM",
  "key26": "2AvcF5BRBBXm4K3F8r8sFen1PXi84Dmb7dnyBtELQ8oYgGMjDVNqhnmdUanoN3THzYwoytrfdEWuc2x6RJQRjLG"
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
