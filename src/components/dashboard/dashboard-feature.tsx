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
    "5ptE4BnZRirBAxa8X8TFA8c7J8tCH9AXDfd1oW4aABAwihmHC1UXWTFCQxLXyoR5AQ2azk8jcwEHAQf8QD4PPr5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEJmYRGa7XedXjHspqJLKWE9FEGAPRV2uZ18pfgWCtUDhdEThMzjUfJZuRw99SRnPR8YF118evor6ib8siho13f",
  "key1": "2zwNHGzUnzfQrSBsUDxTWpkM296sE1EvmbM8RnYZmR8SgHptarc9bH1m2oZtwELSEEZL8KhUfhcSZeC2YcoU6TxS",
  "key2": "4j7NY8x2RYHZwRiFh7DM21FkoYKTs6RfBGpYBgQaZu9ApQNn2Y56ZSv1yM8krMGHMXUuHx1tNundL7DmH4MDXcfT",
  "key3": "4qTKqGaiYYjnhLXQdZe5hc7bX3uvNp54whF8hWPCZMhMkzYiJZYtip8Cxu5igKRBou3S89N5ZzPwX2kEvWCpGPnJ",
  "key4": "4jB4U7AUbMnXt8rGZuXVeRdZvzCd4htHKLWANLCY6KBARBfei5kxhXyGRw6nuQEnvHmjUDDpYSF6JAgXZwBz2BgH",
  "key5": "2QJbFdvLfYoaUbdotwXTxk3vBk1DR5hRHWuT9MegsHEeTTPHtGbAZt7iGkPKWf5uzttEoPDaHjuPFSmeSeU2qB5Q",
  "key6": "62uTumadZD9GDnHpGr3twqzexGfJgNWAdGf6aSLoVeYJfhw4k2yHp64Ecekz5vdHdTLLuhKKa2u7Uk5PrwtZer5w",
  "key7": "zeEai2ciRstRWjsPuBwnnka8LcVmDN8BTBhEmzVWZNXGcj1jzqgp6JnaaQu2ncmad6mNLYALdvG3u8HBPM2EMAA",
  "key8": "3QPgDsmacwNu1HbpUf3SUFMjqf6XC2hmiZqfihfzDEWtzo1TtavCdyeee1Tf9FwDVpzsBU3CG6XZif3JHkxqeZZm",
  "key9": "48aVxKvq7RJJL7nCF8hMiWmA2QfaJoL1g3C1iTzshmW629uK7uWNGKbSpYzigq7QkTnn6tgqX72d7UXe7Rypes7",
  "key10": "bZfZbiwYiGq9N3WRyzQFMUFR7AKpcPcvGcDP9Kbfjmi4QHk5RxQpS9eP7PK3HHwwhtvwiB6Zi7suzTPSwjinDnx",
  "key11": "4PcdKJwtNxmtmS9rPZ9skUbWjQpuAkLJrvrpQ1oTSsAUA1WxdHZoCxLSYEf1e4haxY3VoLsg1SbQmRfvjXCjCjuo",
  "key12": "hZ4C8bdHSjdgDicJPUCfdfV77qjz1JJeHij1aNMDHndP8VaXqQVsdWSwjbNCLjWaLBKNxk8ACCMg3MatTX5rAxQ",
  "key13": "4A1oBuLqKfvnpqqrfTuF5kSxURLeMy56sUAJD6xZCwi6E5nTDn23HGoJLfppoRQEAF3aNncVXRkeJQz2kEa5em38",
  "key14": "LNWcoKg7qiEoVGMinpNvfp5SWkyKb3hRvBQeR5w6K27v2qmkfmsVZ1fyWweRjLTk12m2PMMrDfBB2ibkHRUncLr",
  "key15": "4dCfHMrjMG3GArEQ4HruCqj4WL9fanRuWJgVQ7ySnK9Q47qjthDAZ5AGcKbniLKtmyvHumuXesxpC7gtSX2NtSYr",
  "key16": "5ATE9vT8C7F418XcCZy3nUmQjbMvMQdtgmz48q2oZiBJebjWbMuANY9p9DYmpDkWHPbBk1ifoGsVUiVhuXcqY24M",
  "key17": "2oPxNfHtREToqwob5gdeU1xaBvtD9aL8DJpDoSsSxEZcigmGv6VpCXPNNYcaWjmqKExbQpcugz1JkAadN6MTFrTd",
  "key18": "4z25pQC129sDULZJLLvb7LquUXy9KxL1XXavgyQNJg2BwXH9b9bV4sh1vNhffWbseX5GdToKo2GzNu6rzSBxovvz",
  "key19": "4TMSTEdibsnpWznQm4jqJR4q6kjwmzXMCYnffHUPB8k8BX6BurDD91xaARYt37qTxhYgLcDh5RmyNmoYPHjMXwNn",
  "key20": "49aNDL2MsLJji6vxNGYgL8YNXpmKBSSxVr3rbXP998TbuXoSr1cHfUSxpLE6Lr8HEfJPFihBzdQKM8tqb4mHryvF",
  "key21": "mSZi4d6pUGkYFQE3n5qdTz1obWwzUJfut5Aoy5nq929oPW3uPmbQvL4JaqVxGFRGGzwkD5cPpFbJtPBqRkBqZFT",
  "key22": "4jZi1pJWR9kMtrhuP7BZYyHW5MBid1kSrSWpqLvLYYjxKtZ45a8iF3xsnuNxaBJZJPtduWn8fW4YWCCt5WMxDyY3",
  "key23": "5JrPUaNZAdxPvaegV9QSDZuiRHNQdQtpQXdyXZhPjCi2j21Eoi6PqLoyuftjCRmAGVXJM4RuebHA2DbJGk4P9buC",
  "key24": "2zxiBR1DMLf463CdZMkNs219t4JsVr5hufVfc1PAv7SvhQFbcfZstzDSzdYFW4a5UhkWrCkMSV8yEBEqRsSwxTwo",
  "key25": "3gupEjdWy6qpYKjVC1xmuEzEVE8rMpSPGxduen71Rfr1nKV9eFtVoZyGy658PS4sjherysuUXbxbcSbXND7W6b2E"
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
