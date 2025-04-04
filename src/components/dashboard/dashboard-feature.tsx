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
    "5yec8cbsbTmEmF45vmQup2tWmfakRwFqBhHiecjcnYpQsUd7i1rRoU6tFPYystPuT1v61NENhKKjvwPBBXyQjQKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DSfnkPVdpSQmdycxHNWmVJm84jzFbbfj77HCjvpVAxTYdSKpioaiBf1cUdKaff2nudYir9suw2LfLBfuKa4zvXa",
  "key1": "5koLLwFK3Wp4mieRSf5zfSvWZxbwvMcsAVoUPKn8fuEfzXjFGyCG5dzqwoKrWsL7AhRea6Np6k2ecc5GCw8cnSnx",
  "key2": "5vurV4sDbTx6tM1918j8BpepBSMQJ3kgCcpuSHxVt39aYX98Chern5ukSqYVUcxi1BBXNhZuzaQcUMbBvQapQHod",
  "key3": "27F3Tfy72CJLSWdvVE1aAzyhEc6YRsHiCY7re2jKomrHyL6R8ze2oHefQARw49SvRYNssJiibptW73x8UNxfzsqi",
  "key4": "2goLE3YsXaj9ga1zEC5CTdFcWG9dvu8ecBuvzJqdvpMoHuTBS8M36udzbLVWPbfeb1bRwPnsxT6rbLdcnFQ9hbJA",
  "key5": "6k86oKqjq5ZyvDtt3QoBj22esoR5L7aS4sMdiTFdPdnyho6h1iXdojEhNBaWY78mrdZpuM8cbF7bEzV7Wy3Q7vb",
  "key6": "4566KVm5xyQRrkXF8qosCrWEAZ4c9wfJMv4cZnbrH3qcVjRcPHpRwquxEGk6h1x9nSEmjFyaCWq131C78GDx2Tpi",
  "key7": "52QLw96BXjzCbqCQHTzK7wXqUfXjJ6FxSYjq6NNBoscRtLekJqhPfsk3BX3BfsRc3EjAjZhG2PJ4cf6TtGCasvE2",
  "key8": "5Ux2veHK4eKQyWJ3T9Lj8GLHhYnAqUEeQncGH9ormWFZXmnbrntRmxvVg1J2CqbpirRvcTXgrTgEWZMBqcJSxWfE",
  "key9": "4XeHGfePzKcRruD4A4snhpFe6QE4PeUMUGXB2gRCxpHGXkerMjbZtaoFVFw916qsyQ7e7g4qKjY2HkniQxAQVRZq",
  "key10": "4mSaBgTfqpADEzaSTWSBm4z1N4VWH2riE7SdEC6ipbxZa1dN3Uqj64PK7RGCtCCu1syGQAVdAZQkWzY53fL5496g",
  "key11": "5xKvBis5oPMtG9tGp8RYic5ARt4nYvjVurTvWitpT4qUCpVXtS1HwnbBBtKgTL2B9PHpSqVp1TzdBuFWXazAR2Wa",
  "key12": "2QZivHyUQ3CMQoBiQAJpiCcUKGhLFaBNLUgixmZ1Mi6WGjWg3CFohqfRzuZJv3quLWmyzPJvf1eCP5v5KDuQQ6Uq",
  "key13": "3auCtgUZpQ8pn5vF4CTUi441SGNAJtzzhRkhiD2yR6sDhdXgAgW1ghF8QxE9kwFUq1Rhhmb7WqUUtJ6WWmLNBYrw",
  "key14": "3VXuBVeW5Af8ckPxxMsPna5rhoEaiKAmmorTKShKormhGiAcqVeQ4bkZYJsaAuHjELbiiSZEnWLqnNpaGnJGxUD5",
  "key15": "2dwHCiYyndWmYaPGebHxt9apdvbFfcai16tWRQ5uUbAdL8Gcsrc5Rv7Cu59gLQ4MbpikJmKkAYot3LbQb41N6djc",
  "key16": "5TR7NCPFdFBBVBMtsGs3yA5iXdgJinzUZnoNZtA1ePWyQa2BjtKPYEeRbWNQeDvwXMqmX1CqSCEfkpN9x7M6faAx",
  "key17": "2vhYsMqcdpu5rnfPCoKbHPHN9N9dfAQdC5zzcKk7QvvWHsHjt7gavGF6rvYQftrF9ibjq57mUHp1V1VAUbPkSeRL",
  "key18": "468xSsiojjx2giTdJKe4iGjbCESY3Bu7xLpoFrDoZwqFwh4j9M2UNgCsr475qJ41VLQsK8Kp1FKQyP6frFw7qB9e",
  "key19": "54vRXoKVDgGCrXjDM3BYYkJpngUJcnXSJwgmGdz4wHiGq46xyJAQ724EkF5GVowww6NCS7QkxizVytrNFZi9GjJp",
  "key20": "4Xs85o21rxTBsMgjS1LCmf2gFAXSUDNjuAHSgXuFP6zkfWvq4MdzsQiRhed1xPEDhQvgPFbiwupwH9pDr1LFoiB5",
  "key21": "3218s7kWHgnLoWAB8137XhdvxcGGnzZF9gjEnMZ7bM1hSpCQogaeWD3uRzRH6Jx3cBKGYrmZN1tdwXrUsnyBTatH",
  "key22": "63eaKPFPGiLrAfNsXHnfqdV3Bkmk4tGD8jkfxuEUpP9RMMA8ZtFh6X98hG7g5BvhJ9Y69RT5ynyEbx38M8K8do8n",
  "key23": "3XsHJeoz93KsgJVsqESrHaGUuAapDAffN5oqaGGUsd2cnu6nDhvijwXFa1U3DhXQL8jyRGrVkCWLNwYwn1V7hzAM",
  "key24": "JAxrpNw89tp8Ct6v6sVXPXMfh7vRZv2WpMHLRcLC3W9n42xwFdGmZxD7DxMPmP5N591xHxn4ssnU6sLBMw566Kx",
  "key25": "rbKYSFWUttEZrtwDMjaRASuui8Sk3vr1GJ6A5tn6ArYx9PwMCvVsxDXfgYAumHaw5dKgqFQs1GFgzMWh7jYrNGY"
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
