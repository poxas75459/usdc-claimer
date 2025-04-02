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
    "5KuVD5nbGUhpBtR6vYeyBV2haUPeVDuVmDxT6fM9tZNVWhUQehcdNDBKMYfHAZXNmUevaDg3uUAuPczC4THhxtw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RSy64e5rR4HPZbKaiuYZDZevsfDKTJ3qTcWGXufGrmBxvCAJr8ukZA6qjB3hKgopYAYx3EHxAB1DHqHHoS9tBSU",
  "key1": "kGZU3ybQ5voSWWFzQ5tUgCFbaX4qtiJzNVosLBMYfy2kqLTgsiYgtp5NULNQZKpKXiZwaCdgVgD2wM3B6tVSyfr",
  "key2": "4H4KAZU142426D8s72bq6VgW2nd4iVoDhvvW7QrZxHmvqvGNLtuFC7n4btKpGMmWGAkhP46dMxKUty7dXZMvJ62y",
  "key3": "2tW42uF8C3oxsHuLJ4NDUM4hvcqu5H52X214xypjacBtFxNpTePdRZHJfGcVmDiK7R69G93cR4GhGe71K3nQuzWr",
  "key4": "xqQKFk3cvgRKSYRXS8jiYj2pkX7eYpTjQYVzZK723imnUkou6T3CdsXVSHq9Re5KSaLirscALdTTrJ9mGS5q8ud",
  "key5": "Dc5bAQiCfjpQejipiUXgbstEYq4TAB37k8kgTUvjzUPFpdLaeRjoTgHvUBNAXhEQmKJj7iaCqbRJZdSdLhVKgNt",
  "key6": "5dg7mLBugxgMqps9mWg254bp6oVfNhzGDoMb4d5futhXBzHqSeXY7RZ4zyREBkMZGXD4yiho9TxryUk3FSEubNJf",
  "key7": "2DiPWLaqJ1rubCktuQgUKFtkTauQRyMmAhkWjmsWfpWMiJgMoaa4Ju6XgKz6yabPLeMbrnuAmzgiy4dUXYPy6XDG",
  "key8": "3XaYdNZuroqJbAGqCoKj5M6zt3xKiYfZLWjTJrmoAQ7W5SvHL8oMjXbhfaJksJS1qGzFEN6w5Z89xGcruG1MnDnn",
  "key9": "66U3Lnm3z43ALFHbMon1ypjEaK7ooRagypdbmyoJzpMRfbVJwAr4DAhrDuA7ofMqSXS35pEzBo48MjXGEC8bLFz8",
  "key10": "2Y3tAqctyBNBmzbXJooziNMcYCBqTjNAWSEjCchh9Mfnkb8pLEK9xpwPoH4vhVSmtqDmiq4NG6NHtEZWx7Urf6ov",
  "key11": "3stb9sP1h7V7CthMt3G4sKavVKAj5z6RsGh4Mu53PWEqrkKnVh93pMbfidvyHb9epXJZ6hZQQp1z1v9FEKkihGPW",
  "key12": "4zM5eFmNx6B8m8R3RqDYg9YZV2T4hPMdrixwaP7s1tNpiWQydG5GSjjjQxNRToJ3jkUV86ofg2qdC4yCXoed9qaB",
  "key13": "4uj3qdSLKY1L8iDhZJCYxC4kgx14Yhn73deckhQ1LvN4mPpqn6oT44MWUUanxVCR1CJ2FmvBVAPEFRzX28r3A7GX",
  "key14": "9iXd6q8Vookvb2dpBebvBV331LuHZVF2E9fcrf1nwXLwwdTqtZjLwbhvEM1xhREZUqainYEqSNbbQiL6F6SrLDr",
  "key15": "Cp8gkZ1L5T1RaGt4iBZDqzr17c4udbZEvMwbFgCpLHdVpYgAgqrzqgoAR499vrinLLwGbF7uHgnu9U1qdKEcXcP",
  "key16": "5DJdoNBSMUKPiM6f3fud66V1M5UgqnpHBf8PZUygh2SZVZjRnWZ4HjBVc3eCNVHiL9J4Thk9VaJhWgkktXn4ns4g",
  "key17": "3dGPaULw4t9aZs6ESwSj7Jj2X7MeqEhEB7exLyFVFEXNJqWUDvm4G4BA69hT57anLd2FgZNYwGyG8oeqwDxnW7WB",
  "key18": "52UmAEsujHCquk1s4SiJfJjzTFaRALtYnrQgVGgWLz8VqcG5VouZhAMwSaEpxUvGCzzYyLn73wxJV3p1q1Eke69Y",
  "key19": "3rdUyUWh3stfhLV4dUmsY1qa9jRmEhnnJyJHsEkvRLXHuJwR6FxtHELEUQVM8ZYep9Z4qqy8fHEWXYbxpwEJHzic",
  "key20": "WasupQUSHoPDsqegLnxRjRAiHDgPTbfGW2yDqx9KDiBwSqaYaMXcVsM4FaFSAWuPLVD5kenYvFPxit8Mq2oKNew",
  "key21": "25pJPVVoMQhXfN8W7eQXvkCjrpiuNxM7agMthpX9YVLe67f84phgB1fjSU64CYG63CCdd2ZPACa9X7HoYMuwQvhH",
  "key22": "FjKbvdpbAsCHPpxs78pWEV7awZ4nMwxRqCoyFmra66ahJuQkeeL22QfYw4Nshz2gyaLH4rzxhuxo2RCu6voFkMj",
  "key23": "29zU1G3QbdFPtQzHqtka885SB2q2u37du6Hqj8safmeRuTCySJfcTM1NFKwziyBbNUf6fwNVG7iAvvcN7tV4GVrt",
  "key24": "5RYdMuwsDLYLiyEt1nMiRwFtsocbqWvcYuy8DrbsTCdMwBnDLQU294KkzNWhGzwfKUNmCs4uxefiRDCSzczap35W",
  "key25": "3GMchq2moWXxn33JtzZeL439xe6kb7SWAm5qypzRJJXhJqNiNjb3kokcr8oshTkEj8pBPpSm8pa7drHgsdVSXjkt",
  "key26": "3cnzfVDPaJuE6GkqzipNKxr2WwPTQv771uCBYajHG1vts37R4z2qTVVkfdMZ7otuEU619Yd4BsgsfFL2gd56W1HD",
  "key27": "28WP9S39r61AFrT4st9vnzicKirBauKGiHZGfVyozvAFZPmWHiHkttDPGQfw3oYZZk6UWGpSziTG4shmmartZicG"
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
