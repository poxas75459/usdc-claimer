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
    "YajbZoev1z13crLNcJAGK9mTeskrKum6UbXwD555nHAekq6SSz23Xtvx1QmHbjyWVPhKpeZbKyaDxbZNcowYAFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwLG3G56pYCenWGKfPGbeX6GqY1ELU2iZedhPweyiDYQtjDNTgTN3ywbmt8uQj775yqp8Y7k8yeeDpkBJ11fbfx",
  "key1": "2jxnY38bW3jDqLiUNksCWmquc2DfbVmPCsQdCTNKmN5Vbux2dpGV9er6Sx2Rs8YKpLpJFwbYTxzH5Aj3yeaeGj8m",
  "key2": "3jtnza9a5WPMFpUWfzDqzD5tdmhY1gJ6CMrGHhBg3oyzX1W7ahnF6pKB3LcbzXs1LUv4ZyB4LWJgyFuV6wRPbco8",
  "key3": "3oCJBBvAZrtvbQALAGum7rwkyymRpgFNd94yDbg7NtGVZCvS5KpYYFYNAQftivAPJ9iyVdET5ZJUzHTbMZoP626A",
  "key4": "4G2EZP4RjT1Gf7rdBseU9dP5BFi6KArCLD171yLXCk7y6o8ufGuRA74y9bfSGHFfPhUqQtyk1eCsWj2eXnLMKdEe",
  "key5": "2orfS8su4wocLKAgoXU54CKSXgJGtczNjb3R2BSDik8ZMEgXhLTx2Fj1DUjaZrtH3L2J29dXZwBprGMzWHNAuXEi",
  "key6": "TsKz1K2AxnntbbwrVkCNgxUbZsaS8pZbrKaXjZNxnURnkNCjWJyUZ5RGaj1adcYLoVvq9jdBYvLEdQUywGYazWU",
  "key7": "2ETvrw3kjjRgAFYmhjvyxxHwLb4dMnyYhncdNLhesdoE64TcMZ14CxYtEeRTin9JTqshYnxDAxh8jQ75vCFxUwg5",
  "key8": "JVFwvNAEbaZedRkTEB5eH2Z49KrJ3o1ZPFfqx1FaKTnn3BVKoHZwDJGkEz4NNXtCiFJugm7Tn7p14hovGx8Duyt",
  "key9": "4A5buJxbTpcMbKMnGmAizPbPG4YSutyVQ6PJGRZDhyG2YSBmCHsJrtQfEsnz4Dm5TRaXx46ZWB6DtazpLjNTn8us",
  "key10": "4PzzLqsL9duZah6JKv7qQDn9RyRemfChfXSsf9jZPkTAmJkaxYLxjZmqdNgnkNHbr6BUXYRPPQNvSQfYB1kF2KeY",
  "key11": "2jeVWKVDWQxuySan84nj3CWSDZmmaoMjoJDiNfRoy7PsRHcMAp3y2FJHyZP9kKAUMN8aQUKvjrVPffWJvMAtqgB2",
  "key12": "4sN1wsaHa2WH55Ri3pQvTk2YrnKVCsKCMRevtEHSPSHXyrxvrzpyGPLW5PzQVJriYJFy7kjGeDsAFwBqCKumZhpq",
  "key13": "3jJc3dToi2YnGCe79wvfbS33QGSvMjL54agRSecSa6nnjN7Dr1RtGJUces47LuUFvBpboSFXmbV2GaifCNtKpCuz",
  "key14": "77NjiTHGA1KMXXwEWzQUK3DDFvaEou7t8df8beWhrT59tFBAnD1uVCPQEEfjmjdNqTPegi2EZYx55KW1CCSbEWh",
  "key15": "4QSwrTnszzG2rRpqaYb8Hd4PGviZjiikCtNMgxaC7NfMD7vreF1qCoWrKAdAecw8B2wbQG8d8LfrekbSSLDGTpCU",
  "key16": "2etBqP2hz1UBqf5foLhetDZMRzxeoqKw913YPAHmq58z8NXQSCJoWe9ARR5DggNNhJKLQnL8MaiJsbUj1aHX4fGs",
  "key17": "5URJH4EpER1GybgvwzpaD7m4dY89ghudzv2j1FCL5Me6uFQFkvZv6sc6Sx54csAAy9Hdcqyn5iwCUxNfT4PEkbH3",
  "key18": "2ZeSjRtKc6LQhNq6bFYEaHy8AuQ59VkwXFsTzkJPtGTE34z28TaXkc2of2Ph7zXgetJiq1LVMF8pMjNitwjzXHTt",
  "key19": "2ZUWtZsqPk8CgMgFxrMJBzMHyYKFNwZhYa52uJjcfgxwLy4MwnQpphMugn9b8qLYJ23bwQUSEsAW9ViAMYbBcDtC",
  "key20": "44nTBgs4VZRzJmnVd2N5kf1hp8XkKLYANgjJEuBrQ8JmPaVDzwqNrER6HaoivhMa1EjFUH6BM2AeNeiEPYH8oXYe",
  "key21": "3PxUBbCQrCxL1uZgVfQfRiBPunXQRgF3JMxPAmqXuKxXgWfWWXHTHKiXiBqZ4uiov13RDRNpNBHdzPiKXk472Mvu",
  "key22": "3Zxv36cr9VYBvxgT6gLFcVvfuK4zFTTTYpGZtaKfduvqvmLNw8NUkCHi3eyBRWdh3Yf3pJz7m5hWTs2C18YSBHTs",
  "key23": "3JouoxgTusXYLbV5P7X7TegxZaM9KQHNcUn5maTcvZeeQEGBxNrabKxTymzcSkcVfv2fLuDxdrcHeuX3xgNNAgnX",
  "key24": "26jnR1xYDjGHPwCEY9CmTn73hoa4T3ULQJXfYJCVVxrmmRimQkZ4LgZ1Bub98W9jN31cMEiLw5zpZv3sPSzPXC7Q",
  "key25": "jYJU9ccLbr2d9h15iYDUg6JX7JWRzSndivpkpW6eQUUZVvuz6jmAPTXm68a9ZoXSXBLxVbNiDBuV55v6UJZmuxF",
  "key26": "44Uh7PGC9aEtEiXZCF9CNJLrvQubipxgetTFcjVmPu34V3mzaMm1mHFRTgU2CMvtuRitsUvYsWBgGXzbdtXMp3t9",
  "key27": "4yLRxGmRun4g5n3S3Ng7LU8iCS2w3dXAGF9fJ8XcNqxc8WSRFZE9ENHUdhgxJjzMnDM9VSd6gMKWbUnBhDeZHpDM",
  "key28": "Q7Hk7DA2BfXH8K6LyjYQm1KxE9KvBJFKzqF272PCfbvv9mP7L7vf4EEEBXRyCoxEZ4kCW1V8pkXYbn8ugVnTVgp",
  "key29": "5cq6ds2TDDobSNEMJxeLHjwwi8RunH5aLN8xoHGbtXShyADZRQbdhHHNUy47VSFP6yLDMt6Qs3NKSFuRQbTXQoQG",
  "key30": "4GKntzfRUXjKQgontvdBcnfxfnbRjH1sXYzuc44n1mvsyAm3vn3VuvoCG3gEoAenMoAYre3YG3545SfWQ2fzkg3r",
  "key31": "45A8jCKTQ6Kd4btfUm2Rjrt7pH4BEmVWJML23RGSkY9TyHdudWmyrHCemuZ2PWzEShnq1zvZM5om4fRhcRBC8cEg",
  "key32": "yKtb8h1DMMBucnB957MxNhvjaeme2Hh1K2ztryMSWPJ5wP1JzeLHbb3UFbZosm36KZA9wZkrnTK1LajKUVPbu9U",
  "key33": "2TmRSKPzq2Sb8uYJm41W5E45S1QhYVeJUfPGQ6GsTDAfXS9meXTRmuQ2DuNxumzxcoaFD13y7w2Qu1Kr5qUeWcC2",
  "key34": "55qyNUdFEwntMd2ehvmmr5gLibiEyeiMeM8xDxg2qMLyccYhg2co66MTtyD1dGTxWcpQV4zGUwDgv8QpDK3MRyec",
  "key35": "3cUSALyRsYrMTDgFLX5Bu3Ft2Zh253Bn9sNxcNmNQJVhn2ozRR17CUX8UQyBEbAMSGoRAbtYSvxZBmymMAhCLven",
  "key36": "29MbbS75Vkg492CVXTKeRFmi9qZP7jeBoZ7N7oUoHs95RXG5kFGbxepjkhyhJG4oMJwvSam9GZRAC6AcJZCGTy4q",
  "key37": "5WCg4D9KbQMHrt4t9zwgd3KrzoU6VKvFcFf3caSTmiBERQDkKEUKpKMGn4sKHDCQ9d9SYeLZCdyPryQ9WABXMwFH",
  "key38": "4vWHAjrBFp3yWYRyfr83NFpq1BH5KQTRfmSmp7vPVYdVGC453tiUgc6Hm5dUcZJw8CT4JEgijown8BdcPESXCLgw",
  "key39": "3BpK8U2FcaPC3erisUadxYjPKtRArK2WYgCgq57xXAQMDHKG6vM9rb7KzjvS639L95KRBMBk4UYtfmYL3bky9WXV",
  "key40": "2ZE3SZYLZJQjTmGkqgzZtJhs4HoQRkjrYngMkocCBoESkqCAreoXFaYrLfdp7ayn3WS8ry3ViQQxZS8eMTQXpmo5",
  "key41": "3P5G7k1MXvxEBDpxHXuBgVf2ynoXUdMXLfNa15AEY7hJuHMarz4BdHQoKRFqNhu45QtqR2kncYD4akZ2zGMQBADo"
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
