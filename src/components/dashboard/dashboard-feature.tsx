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
    "2tHBjfCX5nsRn3rnVaNNbT947CumcSWbN848HwLFhiqfKEAurT1NPWtsZmvGygFNPh3evy3sPpppSwkcrujQy2FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43wztw1HoWURi8pKp83sVBCKoHjqt8WMNLDZHzpYdKhdzYFUh1fSMe56TjkEUk89G9ffGFihJbkH8aG2LKA4FjJk",
  "key1": "M3Ed9cusikDtLCKF4ZSQfqx7mdG47Ty7EFKrT8BYVf9nbNP78qDYA2XfJ7cLkaNEWYZvoRJThJUkiNjdSEB2A1b",
  "key2": "5HCKkHgQiVQR5jiDbwJVpSeBos8TYGUJfSGsaN666pLvS7zTRJnXxffDUz3bxLCM9pUPusc8vLgoneHjHjoyqqT9",
  "key3": "61eTpMZSBKdaPjnTtGaXTsBSuygFWv6nGn6go7diruvpkoHE99yR8GaajB8SqX4RLCyZMe1nSAbV1omH6Hnm6t8X",
  "key4": "2LfBkaWLZzHujfUFtMLJ66StYMFcjKAQPWDvW2izoJCfZvKc5d9g735f9TSbMiFvhUAN8iqYcVPBBgeE28XvzREY",
  "key5": "46UfuQxFaXfXNhJ8pEoWd3xZ4CAZ5raHCWhBxJzi5FgQqqV9mKLPArXHwutAmoJbgAnsKk1uGfHXB2BggEr4E2C2",
  "key6": "668is3hufnoiVDQEKKfUzsbGiVRW85VXs6SiLmzUynFzh8gn3jDdQFKQmYGFRCC5SJMZg4U5EEgme5JokkpK1Luo",
  "key7": "4JX71kVSZ9s8koDeD6QbfajaQ58Mr5eWKgFWqFsYAKUw33AiWPxQDQVtnv95gfNeYsH14Q9aZfdaHHWeuexXfoEn",
  "key8": "2j9YZwjoSbLd9RXR1UXKJbrVcqdzfoPn65VTgivd8tsg8aUouEwGKgD79a5HRnqHM82ZeEaZVKhiXRyde8B3TxdV",
  "key9": "63968pVJh6BWB4RVdwTR6BdyH6Jbbh644ok3DneLrYewDDztjr8m8Hr9KSZaPTrYB8Hq7LVMReKotKrmxiqnkbPN",
  "key10": "9m2C7WvApnbjbFiukTFr1P9sHUj9Ju4RUnxeojKACxxWnd3hp4fjN3GqA1yuHqSRyZKuXBRXk6zMmQ6wRzbuP4K",
  "key11": "33VkpF7YCfCFNCpzpANp77y2cNcYECuPeVup7S7ApQaaq4pxJtjGkbtoLGBPeT3ZU87dD3dGhxxm9YWj113ToCuh",
  "key12": "65PRM8d3Q8jaWkyJ3KZXRrs7mYNhGw28UKa1N3b7uWEiLrRtKDJxMoYmNEiYzgnkhkNRQo8ThkwzmWqqSkYpdw9L",
  "key13": "5JFry62YRMZaWQoz129bFQKiX3h8Yo3FVRbvoNFcA2MfU8h8yQp5k53tvw7fjjkhxVjRN9aQXiM6mJHwhx16Fuo7",
  "key14": "29QeosqvUtSrUETvrAx1Wvhv1y3FqazeL2vqVdrTGPYshywp8sUQRkn4tiE4DWFX6xmyHNEYL5A4ZHCcaKftn7FG",
  "key15": "VdYsX9ELm1fZ6cBpwyZYof8XBkjVSR293whk7m6HeCmNSGmR3Mhb1RyibvQspCEFwfKbLq7yQzVfU4QDbFG3oEp",
  "key16": "5sfrQ6sB7ejyXGueu5W1aHeLqzJ9YmayhoQVv356FjFM33KG2om1jPFL6fg3PAWrA37y4ii67SgWeQaMz8mURcK2",
  "key17": "8GKoRfAispcsXUAS4NMtpiQcTD1zvHHy791YFpqE3WaaQqmqQsVD6MN6mSYi9kyAhsnA9QxJ1rj2t7dJwH3nrsm",
  "key18": "24YWvr7GiqTapvjBCEAvRoqZHBQjxGy6RpLZC2pbutE5cNeY6zWm8ks44g4K26HNdyHDkAtnZFwhZVzj9mkMAkG6",
  "key19": "377R4jAeS8FzEe5Ybb52W31CsWycaBy35qW9MKTrgjQSSkLN5mf1GUewXYmjwFhLJLJnURAe7er7PET9cn1c925E",
  "key20": "nd9xPTrT1TLHuCVsMfn4rN2aGBsjEqUzaXSeQ3AxF7QzexJHpRxsEBo2HD4HDAkwDjfXuitPcfrSFZdjVghmCSD",
  "key21": "2bwUwYDPDd7JgYA4PxhaEci9SzYpP7Kh5cLWJAR3xVdm62wzgqEwPtQyuFsZNVwGapnf5qrZPvHmpViTaDZ8tK8d",
  "key22": "4Q7AiDF11L3d5cSa45vCkjSo6PcGPWcJKsqRgQfMfHq4H1RdAJL272eFE5tzSmVCUfW7feQyeiKxtSKgUyftP7gh",
  "key23": "3AT9ihcBFJ2mWKsPL5HK8RP8FG1aorE6h2qwcwfEkzmfV2UDd1TFfEqUq8fAXmBuLrZPvKDinRNur8DT492UNexF",
  "key24": "5kKHVXvtJhTmhozx83FjVgeuoeah7mZRmrASRyBVPUWWQYSe5sHJhnpDELKQnkFzFWfohCFZnUd7wpZNWr3o2ggT",
  "key25": "5KbLSNxCmCpGreekKCLap4J6te7McqV487xdqzC4LH8pqSQqiWhA7q7jseUXENRfngtAwG3qVF1TQ4By2wCSv2Ve",
  "key26": "2YRgokPPj3UNL2HwtWNoWGUPeqcoWaEpaWdFxMnbFvR9PqPPS8jbEgBNGxTLZYyxrJo9dEcFmn2nL34ZKJsoqgYN",
  "key27": "3Rzr5CJGiRsjAjdNTaiTmCBioEaqjzFqPR17jHo1uJ5TNnXZpPgyexpWrYKv82cJB5PUazJdY4pBVjvZqFqLVYH9",
  "key28": "61pK29D4sbfjMyWNQJBBnTPjvQ4yTSerg2VwcEqykrU2Vo5FM5AoWTsyMYaT8sziHuyk5t8xucd1uEA4YsN2cnGK",
  "key29": "5WCbJg1AACS9vnYQwSdfZzGFomdLwYzG6nKQwCSdJSQcceQZTSafJjCrDfW5Nxdx6vxC8VZooMZnHV2gG6r35zzd",
  "key30": "3sxdu9yLdJXY8jCwHwWJKTTSab1q49ZwsX7RmDuaf27YSy5jfdsDnJbiPmDpGdPU9tkGghzwhUZu8F6VXuDvH6zV",
  "key31": "3iaotfV3spt6NdSUyEPe1xpGtNotYJba9JjeDRdsDRe3YhXj7PD56obiDbQSvWJqHKW5b295KHG6yRN689fMaCZX",
  "key32": "5Ek8UncZAWVT46cWoB5Yue61v7geZV4gRNfdcS9sccMGewVfNMo2RPAp9QLMnjwgoYRPGdJ5aie14PtzKmQ3XSne",
  "key33": "5wy9NpnmzFcHg2MYj9RFMNQCrK7aNWARbGvQSfj23bRFY4GSyGHNTsdhEKdN4CKS9jN87vZPR5AcFR85BjD2F38B",
  "key34": "3txtNBKUbprRFEpNLHtJPjQZGZnjUmcmSVc88WTru6cYrHkZNr1xTnCzwvfK3PhKTNddj21cZdNeR1ywvGSsQbCB"
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
