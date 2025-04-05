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
    "5CDErxi2c3USXZ6xmzn36Xa6QfSx69nn9fuudKSJJhqKwpzZWFmbhK6YjLczby2zaURLft52HpyrKDtnp6C5aRtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdTNMZVZPDH4ht8Lgj8GWf268SCtV6iucChMtT9Cmz8wYkjdrgmuiXkwazk65vCKxKvNeYM9XEGjeec4HcURH7B",
  "key1": "5cPjc5aBR6M9madRHg3M91YvPgseQY7bWaEy97oVmdQXXFeYsoYgnjeAgUNiDv7Rr9d91AYWyqGfQed95wjUP8Jr",
  "key2": "4ds1fcKuqj3ho82pA6YxbBoiHwNRo3RZ7WUR8iNDTGJ695macuwdSMRwE2VQRjaBZjAA1GQ8Fxu1kGidLeKmsCBy",
  "key3": "414Mux9SGmEUtjWYQEgcnVSqkiZZf1YufjHFWEwJ1gP1HJ9WFBvuQmx63wzFy31emTuq7GKML5YuTK8DUtdfepaP",
  "key4": "3PUNCwEchGXRRyoinjEAh2tFLm5BzUZhU4qYtasGajNVG9FsSFBPdWCUEo8f7dMfQHy4QnRRYSdsoN9pesDxj3Jh",
  "key5": "4GBmcdGyM5kkocdC4yZYfo1EsSkxJZ6qm2SeUAKjTXrSqNd767wVGuuNpqxwKUNTsscAkQx1tMpmW35ctdRV8XKr",
  "key6": "2cGFiJsv3Evg9xZ5WLP62r248ADRodGBG3xpwJyDpMqr8AFhsWeqXg88wNkn59nZbd7QZ4nXFiuTWsYDQfZ5ESHQ",
  "key7": "5Tu5PAAbk8b2sBhK6XV7yc3GXeMuFf2EcppcdaRX5a1UgdwhF23scHBuRyM8PZaTzdFft2JuhMigcNkS9ZpV9LMj",
  "key8": "121HCFZLJ4wpgtJoHWcBRTM24RRdFZJQKC8xY7cvqQKfUXS2BN3JLsBrPGCRC8g5Lvr4P1uM4XZD2TvkSvWjjRKx",
  "key9": "4FrdxpaRR367DjnysYGKBrVuE2UiG28Kwpa5FoHZeeUJZC9Qx1fat7trtCcwP3sCMeqy5WrZsvHWh6uD7gkgC8At",
  "key10": "49k4rZjk7eunAY5MSzSY9U1xFkWJ98QcPGtqSpX7vXhX9cZzBLrnKaZwL28XZ9JeWhDqVRjmgNyQLt3vHFTthKux",
  "key11": "5656bKGX66VWzXFjBgtfFKTJ86Ch21c8ZtvPeJnTfbEqaHjBg75eGdZ3iryMDNWWBvHweNsP1TrUAmRSP2E2kE7V",
  "key12": "2j8BqBfqf4FrDbLZ1qNyS2BvCwaJ91dFx676EjGK32YsK3zQrTutq1qbF174T15hD98aK3C71HMKPP22peEYZbTh",
  "key13": "2AhVxo1QR4WCmveWWdYxJvJ4xPPT42tfvFc6wPAFUmR66KeNsemTZEyV2pGt4FP2nZioZE4sZfg8VNZpMDC14Gou",
  "key14": "2Eqb8iQEkkePdyaSvC35dRCSR1Ky77Y9HR7mPx23bkK1AMKku52412TtsFUeuXrf5Uhinz3cQSFGBTjEy88SbLBJ",
  "key15": "36Mia3GdEZDRbJUX3YsbgMrkxM4di61naFAEaSMpRA71ZLBKjKKmJ75hJAaRRc9xxh7i7uNwZAGRoiGhwmVRq5AS",
  "key16": "5hAH6jGGBcEe1MSTZRD2yc2AZRRp4zBHMbhwaUTPpvcWAeAA5aDW2p5urcfJNvBAqzY8rDPw1J8DKpe3XL5kykK",
  "key17": "4a1A2CWxGC9sPVc1DzWKF5pi8xbj6u7JcSJZvUxaURm6kzxdhJ7377QVikGVSXpJidbfkEqz8edTCGLfKPGkE1B6",
  "key18": "2HuEwGEvx6G7hss7QWUGgMpEDh4bgPsvh8ieKcvieWb5vZiRRxZHXXJt5tiPQpPbjQJiCcYrrhkHnPcW5LTYMpxv",
  "key19": "4gN89sNqTuwjvP8s7bXxfBA4SVio1udynusiip7dVadpihEkZNMVbBh1bUYijvoEBJB6MiC6NNfCyS1iGpWiw8t2",
  "key20": "3RevJTrkSHCbdTpKAdB48XD2UcVEy56qwC9WMPk2FpFLHaA4BCkbDVrNMYPWRsPnjuYr3QHKctjWrnQTPuU2P75p",
  "key21": "Qx9a95SujZSN4DHLFKYkC28MLDR4XGFFYQEh6q7VqmyAwKcTxqcVe6rVByigFUCScUgqhTAjDGYdCJbTWAncvhp",
  "key22": "5SeRu54wQRHb6nEC7JzBdFRze5eALuozMyo11yCxUBfFgpZvH1DjWviKHSLQA6oEoioFdEazAx6qq71FZd8hHbzR",
  "key23": "5eF4f3h5peq5FJmfE5ACmPoR6zVhfLicZhRBzGaobGP6giSG3CZQj1j5TNapzroDunqEuawypDYGT524DWcftsST",
  "key24": "2p7x7gZbaGGUtHUrJS27rzNVkAZZ8MiaHorZmED9Z2jRQMzDQK7s5TMVEbwNmFRRqxzxyCXBwghsGjhuzz3nhWEE",
  "key25": "4ibwozvvR98cg5mJygAHR3R6bhZbRMYzGTkdWQGDoZrjfSfoWB4hGREA8Uki9itKQWqNfL2Dm6yKebNAT9e2EFv8"
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
