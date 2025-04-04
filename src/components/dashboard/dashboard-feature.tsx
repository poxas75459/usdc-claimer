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
    "LBe512hsd7nyBV4VqqU2FAuvV3rRPyfWAXQDyww8zY6PV62uZu3sHhWW7kMZBCk2oXDaPkkhSJ7rZDG6nPFummr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d8xtZjnaypyi9FAKJbo9sSSUZhqoT2zBh2VNg3wde3aca8B5DWzq4cLZxtLmDtHLgsiXjQsPv9qRo26Q6aEmBgx",
  "key1": "2zLFRCWLtJskgSadQ93e9hvLfkvnfn5X2c2ommJqm8tX7SNdUncUXSLSenEY6HBQXaEsQgDybC8Npp64LNT3PAdW",
  "key2": "22cDacc1eWonAqqkAQaVu34zkntRv33j5eSWXNyy8NcCAd2c1RRy33f7wES4R78etXqreKa3qEWzRVPUjr76Rf1T",
  "key3": "4z1V2ua3UyVHyjRyKrJwv3MA8h4iEWvES1fuh8S8ktxZd1aqGmrv6fdLReUh58qcNWcQpTRiYszWzBrifgyYc92s",
  "key4": "591T4duPTPjC8Y3iNwrNkd4VhivVdSNi7WdQm1nAqgWFgVevzzm9ZDccRi9cmNyAMFpMfZrLbAi6JiYBgGDCwLST",
  "key5": "2GTHtSJCeyCHXwuGTHds7p9qjWvwqiaKJeBvu6NMYkY8nR21KJPYAsLgybU3igUktBN2gefKzK7QScpDiDP7wM2B",
  "key6": "2buy2GQxYPYGHpomeGPe7hxeJmxmoWHSrY9HD3WABV7pU9S9vfjmCAmbBJGoCozmvyPGfdjRBEk8i7bux4YZPC8Q",
  "key7": "3v1a5WiDAWq9a5DhEdbW9CnpfLf3asmH21p7k6cEpK7HNbucE72b7exoEpMYeYR9aQziiNdkK81FnvHyG1oD92PU",
  "key8": "4i7gDxjrTPzJkEUf88mv3sEXPKEsoZtCHNmbueJ1CkyA9Pr9M4EV1ciFBovZofb89zFyapQQpNxotbtfqPALq3SZ",
  "key9": "3dNqie1amyktCvuKgcsfHcn8szxrQSXmd4cnHkjUtrEYm89bvpxvc4wNNSuWyu79tYKQoBtvKn3S2zVcY7RNKtGp",
  "key10": "3qC3bLYmNp5mUMPM5b9GwZk163iXEynx6pDmDWoUJrVaJezLxQBcUBTyUmhr9GcaCeEqXDqjDiiM7GA39tNYeqW3",
  "key11": "4VZpagUrWFbPKdd8Y5zGKGZ4xtd8ECTf7KxmKj3YiAmCVNGdn9mKN1csRYsVBFUsWbhSTsUHdTGWg5erY94He3Rc",
  "key12": "oRXB4MY5aaQySviUuHRDtZTtAeRSaHnWgtmRBFeBchkye49T9LQr3Yv3jNMJ4avVnbmsoL5ne688HeJz5nXsqPd",
  "key13": "41boejiKyTguRUH2X8hxqyMCuTxqyv6jKKGge5TkPXnmrXDC6vvJqX99DJiRrEaNXd7R4ybhmT8TR7wQCHLkjhxg",
  "key14": "5TdoZqp6xQcU9xFNJyQzepe17w1UDh2km66VWdHLUHbZVqe6ubS8Ka6md97bzMVkA4BP9YmPHXAnEyBbw9ebtsXA",
  "key15": "S3CuxRBXV7DQHwJNE2PUp1FoecpHB6f6UeHxRCakM16iAskdDCWh1MKwYKV7s8Czua9xea1GS2EsRtFx72MbyMe",
  "key16": "ZLN26V7X2efZQTJ4hjPPqodp7S1bSiksiugUnExpLvNccfrHd1b64aQwM9VmYjgNAhasqdbTzBNZ5KdPTkh1NSx",
  "key17": "4U5yb1r5LV4hL5iwovHM4KcAwmCuUrrSMFTay9ZTBZp63NH38ENzqSq8YgC36xpB8xoT988bz9oMszFComi8Vhis",
  "key18": "4nBcUv3D3A4Q5pQcEbrxvb2uKYmb6wBr1ZWBXSxVNYLiJcpL7ZzDbzvhEFpRUn1rJWe9kqFtEzLs6xZrnDZH3fUE",
  "key19": "yuQWBh4QvAP4egXKXt5BoYt9PD75QUR2xCfVozz6TSinYNuu8RewVWXJHSF81Cc98oGR4rXf4e84r2JCvnCLESF",
  "key20": "2whyw3wG2Tsk7G63ZzbNLuVuJkX5xprTUHcJCwGV5ZfFmjr3SAmqMdi37L1ARt2rFhXg63ZReCLZ2aha9iRo6RTH",
  "key21": "3zjYaimm7LjUgqCrcjrgaqUDrvCUDNNG4cBZATDEsxjDvMNuqTzxg8cap4hyhUnMsxJqpGgiKNNjdNfyhEDpPjTE",
  "key22": "5FaDsCRngCGKbCeJjdJ6zyg1YjiSgeMA5kgtN7hxZFW9Vik1ZtiaL1AKHh2fdaTDm8nxKsHEcmFKKpk8NN64Q8xj",
  "key23": "cesuLZBuLXR5AtCXvR33LKp2TjWHJ891ibc9t8B62hqNMnZYLDLJoqjskwCEPSvuSvovqDwakNoRnzNkbc49Qnu",
  "key24": "vdZqkCKHmUSTsUphoM28UUnpTPaieyXjAQFR4f4p1aKNThT4LaDpRcYsXQUzPRBSnb8siUMEGZhPBwqCKASK9to",
  "key25": "JCbJRbVTAnDaDEkk6mWyKkBrW3ri1aJLmBcqgS8JaSVWc6SZAqrSPYaJgyYGMbWmzT5CTumK1nqNyNQcEEfqqn6"
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
