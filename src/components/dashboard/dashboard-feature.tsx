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
    "58gaMC4ViPkf4LLqH1WzCBGjK6pAbupndLNTmSHc3sgPJRZqaoVRbyk1ztAgYugRNAcSU8qvSCE8rZwhHmSaRb49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49KDpYtSv1AYRu6PB3FrJyCrQbC4dKfgvbi4VZZX8V4sNz8JK1dtq19ZtX5mRjLDqcgins4f14rug8WVbxeoefN1",
  "key1": "KbCcPvM3bqrFPq1YeP6GpuoMGt4384h6DQ9JGMhDLzpFfENEhueNvMLtu6dNiioZ6jzJnfev75L9hhMpankmfvz",
  "key2": "BEscUXfvwCSjuP4EtKJzTDww4UsNCex2e6ejJwmZQNnK8sNX6TwPFyfhEFUWcK2a1zDoRHWbP8R6UTsfg6izWPv",
  "key3": "4B8DG3PH6fsN2WiXrYTs7zCdxxhLYbcerC1aX9fEnyFyNBhbr2gr1U5Z3R6AtAivQEPW49TYNEgMt4TY6nTv9MyW",
  "key4": "2zWQZRUprGKXiMQo2H8VckHwLHD1pB5qxmNSDr5s1Bgq7fWya3riDTTLeaYELRSq23E8PGqdXSppDP72rgvcekL7",
  "key5": "E3k39c5k5g8JDb9HgTnHFQRxDpQxKjZJf5XKUY2NiT7GcMijuYicJeqceWJZ1g7Fuy7HUgfwFNBgb8czAy6zjDd",
  "key6": "3fFRciFtMQanefNaJboBTgF2qmnbyD33JzDxCEcg1GD4hHy8suz7GGwirsJaRcE8og5UbmRo4LdXMpa6Trp4az3U",
  "key7": "2Vk9gNExhdPtmfqiqoRtS6S2RyChUZuMYNRJg1oRwXHhxPkHGcJD27DkijPjj82eDSot1Q3SSVgZ2MB3PaYq8Y5a",
  "key8": "5dmMYcKLoJycCZxfbU1ByckVVJBhBib1MeYCasENTKGSniN4dW7AMvMUt2H5RqPjqE5zJHpxcyaL3jdbpF8rQc5s",
  "key9": "3QP4xnXXRDAhawcysd7T4LWHnf89s8RiGAN5ngqmjD3XCHqjzF8jcg47wBEg9Xj2ctXMUs5Pfjd1E4jA3Mxnr4mV",
  "key10": "27kDNodWGKWRsMZT61E8om72rT5B1wCiwZrqwYrH3rtxHiuPps7YMEvUPmLmEB95k4SwLV934LjqMGEykqsJHVvQ",
  "key11": "Ycv62bLYKVcBsDdQ5ZtMLebj51qJH223PdE8XLjSQtW1Cjof7iqZmSGGTcWpZ1EURLhT1N3GnAhYDEbWU4tHLgr",
  "key12": "3ZGwKgtf7x9bqPrnDFdBwFAUe5yG8ZzTL5fC2k2dM4jWk8DN6davuAun5jBpPBnA7cSrW77jAyfhHuBpmrN5pnj",
  "key13": "4NTbnEUy7phvdh9aRyDjXBCcLKANXaYe5uQtKkCP77cvNvB8aQvZU3yRVy9EuxT2RJVKF84Kp9s3zWJXVwUrWD17",
  "key14": "2mvgCdZu1MeBzKTuFLobAYjxXaB6q5EaBFLifS8n2Dcm42H38in7t82YdrSkaH899RdWu2287Jg9Kr2iCeKoXDag",
  "key15": "3Ku25AP6jB55CS8tbmauhNgDo34mc8uBDsEv9pcYXtpWsNfANdyPEhz7v9sPJ8N19yXNczethX3FWrfAWmcqwcWs",
  "key16": "5WrcK3BjXcu3g6fSveqTAXBYfRVZzNZxTcfKdGjVpgNDDjbB5NTKPjbNenKRkFEfVMwFUwteQaJFaV9Uy37b2wJu",
  "key17": "5sm7aFNTYvkZoRBhmcUFSHZPXoEDN31RacRya4cdFfFb8rcZyBKP63F9zocFZ8ciQX1MRi7FAPYLjsgtRhmyhzau",
  "key18": "3yfaDDHioHoMiHy9WreeZSU6PSqMscgmTxH2GRWEzQpM9ojzCexdZi6W3EGwQMvVpFSXZe5dEcG9ufrmEZaTNUCf",
  "key19": "2izUFmktG4MdrY7btYeQCpdLSTSWVmZFABVoAM8s9Q3Rxyrr94pueuExw3unuJ7TALpoedxgfHnbUuE2F8Enpbgz",
  "key20": "3G6KFJWu2ngGpgUTPKPFWHP9ubvGsGnp4qajTELtbJfr3seGf34KkBnkUTvLzw6HCGorWpwtLHofpfM9XCeQYxgU",
  "key21": "4vsqSS89mS8vntdCiX2VniB5JziAXNGpnQaEesVNH4enNpM9bnExwZRS1ZRQh4ajvJf2nXykDvLgxdzKz9XWqBaL",
  "key22": "pqt3Baqtb37o2BjbkX4kT38KbWSLdUxjKSHtC1kJpxSwyeEb3k9DZeukYYhRtJCLUf7cvgDUSePwbK4LwTDcMKr",
  "key23": "65n93obMGvRc5ZfYb66pMoUjKEN3bsYqfmUNJWTKaffJ7QgDBcC5YRUShd4W9NPT9Ei6afgrab8bMKzbaHTyXKRV",
  "key24": "2D9M9XWLw4P3agaPA4RvmWZwZDemeERvWcDTGjiwKFFe3iNbrBxzZTAHx71bsfffCACJYh6BEcM6CZpXF6xJM42Z",
  "key25": "4BProugvj9KyAQQLyRaRZ7mT43otQQBpoH1gCtAYiSm3sNb9xYfAuZaWrGkSx1M7kgDZcMNvKPGmnYn7HiudJ3LR",
  "key26": "26amnk67hCU7T2oCZfozisSDNiBYQxnKdE8WzBmxf7pVHiRNfkfC5VJcWKmMSn8jQ7zQDstYbgdkoShJCPKLqmwZ",
  "key27": "46aJgNBaTTsD7r7LdMZJTWUmkfBe2hx5wemSKhAFyhj7sHZzJtbZzD1qu2pPDXPREQxNrSc1d3W6hJyDCBrpbEsP",
  "key28": "42AzZB8PiGxU1zYME3JrD18NdQvza1CxSx1MEq6wyg5hrWGtvGeME1EyVXK44YKaqw9voiApbsWnQsKbobAjQ4fF",
  "key29": "2vyw3qyLbvJoSV8HfquQbaPeiR6J1tuXP7fbkDCi1f946rXnRWYgfkKdzTtQNc1b3Ug58NKgGxkt8fTBvA14m35p",
  "key30": "2wRrNSYiTN1WzqZBVeRSdcYJNCTCjBqnrXY1PRwsn9tp9PbsNeBY999gChgt2nTagYD3wovRNqV62wVzC3goB5th",
  "key31": "24kTgYdDPK4s9LsC7VZJvXUremgs7NjgxTQPCqFhHHJoMwxMorrB3D7jc7CnN9tRwMSXtd34Hca4AQQuSvk5r1uR",
  "key32": "3vBYxoa7uAgqyGDsgzHVrm4HUdeSGFbLHgEWjsYptrpN3hJYAjucMH3csFaM4TBzE9HyqakCCWJz9c3j8XEAyN7D",
  "key33": "2BtNdfQtWDM3if4YAV8VRXCskk8KGLakDsA5XG4u6u1Neg6ZqkkLHrFvEXeihhBpg5sXw2Q4NCBouFkMJML6b3Fe",
  "key34": "41RoRSNCEUKnDiRG1j9qj8wLojZppvPgzaVZEkLQpWaAByXD62bugajsfkS8D9kqiHdmiT4X1YuTTzw8mj7m9jGh",
  "key35": "5ox9jyFL1mr2Q4MLFRJPNJG1Syp2ivTr6TcL7LKw9MSFrqkzebyPpiB2KyqJR1EkySKehdcN8k3SjoC2Bkwa2ocu"
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
