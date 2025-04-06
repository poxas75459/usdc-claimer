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
    "2G2df6gGT3ogpPt4SGhkNWcr6ft3PtNTHrwh4oHqaUCRZdfzWRPodjp3tF3r9G9BwEMXk7Hn5dDKtSL1G2itGa45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56yEYwsPJ4zQ7fV7Ga2wQMK69EKREftj8XJdw9DsDdjmMfQMye3W9PJX5Nt2xmmLbHYhfBfSgjYxh2boJS1X4fjC",
  "key1": "3AQR74Lrxwww4JL2nLgdFhgS84EjsEhBfgueKBU9nd4WQPigJzbZ4sTKvPmkPpggWtekseRvkEYHJ4SkJ7Y1cPrU",
  "key2": "g9LZv3LeHA5Uj7jJc3tqWwjDxbSS3y71M8Gath9hBLxeK3VY4yobktDrWXSMNMMdr8sXHGcNcdvJCAd9Zm9NFVS",
  "key3": "rVCzugjpSbxAb6GWzPKQeNnZ3QeW7eeWQwJT65Sj6rxbUHsoPcxwHsKYU59p6oKBQJf9PYyRkuTzsdqCmY2FgH6",
  "key4": "5UJ81ooimjwfMoVKcdXMM95igcgS6c4GpsAMjSmWxoqYtmiRjMM4yudCE1gCbufgkXXXcc2ixdsBY4unrR1r6yS6",
  "key5": "5myu9fxgsXKwDAcAJwuc7VnmKy7c7w1y42C9jcAdjcYPqGPv98TMMhniFwbr6MGusRex8TK9AJuSszfzMzmND9xT",
  "key6": "2x8zBf4CZWaayTzoHEX5zkTMa1HXnrgkgzMCEnLv69o7EVDWKP5cxAtS7J3h6iTWsCRxDCLTrcHJXt8S1oeavtEd",
  "key7": "2WWfMtTjkbuRVa6rsFitsq7i4teztDYqDh428wzzzWG57os251eA8BRqAB3ajb5pp1ng6bzuaRfAy2FP956Z697b",
  "key8": "5SXPVhC1mR4JPj7uyCGHp5hcvCMtLyT5EprV9sbTJmoZJiqwVybL8qPZppbMea1vEV23qYGZ7DHJ2kWmZ9UUp575",
  "key9": "2K3kq3xfh7xJpjEFsELjNxc3RpXBqHaJQSwXtZU3jYH1f8gNVc8QZCCUYXKWsja4T7UjzeFoDkUixCeukJse1C79",
  "key10": "5z3JpvdRn9ZQ1q4TobbAzWdn8XsuqpywVVHxkVXwSxDU9kTUz95AZfEmQmNHmTj9RnfCpkBNGEQb7ZsbPTsFmP3e",
  "key11": "LJx6hQkWBPSB8xSs2M5mSSebRNwBvjRZwhRsJMHWixr8WhGguYAp81VJpoDoBft8843L3E23JfBoixkwZMJcqSY",
  "key12": "424H3j2RhzDk6m7KMCmWKWEMLxVfYiru3wMdyQYTSH2aHcVXvmEvY7sULFpPGaKgngPULKfpBUX9dJzPUrhQAqRh",
  "key13": "5LLGfLAf2QuZbUohZA8A4eNW1yCHqzUgZPVm6Svu6VCaEffwpgkLP9JmHCtSQHTgiyJphCvfJ6xBQrf7dvxGvW19",
  "key14": "tpt5a9jRJvgyEhbkeycVzgSAtjMB7r41wXJMwiifaazruieQzuYu4TDKunrRuuHym1NrqdfUNv4eCwdjE7APxdj",
  "key15": "22DKrvtZtBC7oFBUmc4XN3yVtDUWHGCTmHWMysVxrZWR8t4gA6NRu1AxHxsTXTr3YDJQP5QG9v9tdy88gxFmso4h",
  "key16": "5dLJuvx51C4hzqxrC4EcexT39uighNkisTB7MohNS4zqAyLXmoRFzeY259r2Sb2mhx1ifcuUuaBa4UL3QFNKbTG5",
  "key17": "5cMtesg2rkk26qrowVg9aae32nWT7KBvNRFeMDkb4DFDHRhAkNeBgEUm1jcxR5ZUAsXHXw9q6kAdsvCpkhPXMrm9",
  "key18": "2bvzezUxBNDhvnA6NwFEuUD5oJcLuUoJS1i6TcwP6nnjr9c83AaDDn8aypdoefuEz8TYJ3RR5cnaaEzHNqjjQHMa",
  "key19": "5GR5enq1t6idetZJ9qUWzCq5VCUfKdHwcmgSEAf982V4an4ULSdZHMjXs4LdBGG2T98AForGxjMuE3zYRCdcvFS8",
  "key20": "62wFaEXohkYK1FQ3zZS35weJ19itjeBEd9cRaQ9dX7reFjBJ8EaJTQwAdC5vfeGon1EKsGVjMfgxyGKoiBHx2VW6",
  "key21": "3B3cy3LDf3AsX3wvJ995jWPqXdARiRZeTR1hKgi7s2YqTSKPPQQsS9o1bP1cnkFUtpabtbM3PFxeXkSyBbAkZZ2w",
  "key22": "38d2DzisuYLovGwZNkHG3etazyi4wdYrpkXcVZm8jse8DnABQkzbr6Z7tunQ23KQdH6UeJD45jot1arxT4yG28Q4",
  "key23": "c4cSjKWC3rrnxyKxNT67Goy8KkqgVnAaFaScjQKzAx1XdiptCkzf2oyNAgsPTaAkBo3K1QZRjRMG8Zj6TdK7cMq",
  "key24": "MSxvSaEhCMszQfmPxV1jEiTx7Eim5AZwoR8crmPjMj6dPZfYqkihTq9VwwWZFvHJusz3YhBiATvp1xSBGfQMuwe",
  "key25": "5UeEXm2DuV4MfantNCE9y6VFHVQuoRCbxDeVyEp684VVuBtrSY28nNXZytopTJSJp7bUfcfQA6ZLAE8xgdu7d44u",
  "key26": "41Fr5rnXB9pXF88GPs4eZqQLUSCPr8tpXpGwoFJARxGt4bZAkdfpPutoZeCXTJW61y7NZJFKUmwsNDMEhFzURUEw",
  "key27": "4kXp3vkturyZkyraPScgyDUQoqKGLUVYUScZdAg4mg9dUJaPcrhCLdFwSVNzScX8JDvSEnHhrJ2kR9eySSbMacHa",
  "key28": "5a8StjUQrWFLSXjsmmcmqryFCSsZX15yENHuDuoAdJTf4SJHt8vpcHQX6QTmVGTw9bVd8ub6Ja9gnSDNLWCtkNVK",
  "key29": "4xpQLPN4h2nc2CicGpQeR5YV4AGAfrZwkddC38bE2gKkeeWNd4dFE6BTRWXJHRgrA8aEsE7nsctQDcEsSwsCUZr4",
  "key30": "4ukw66SbDSfUhwF46ur7QrAu9G4kohGs3o5sncjuFLtebRKN6mhwbvBsPP362Qr9FFJF7KLnpsUgrsgLcyyYC8HH",
  "key31": "2SBpUfNTuARV6w6FeTUBFYLhuJ7nLaMv35fZDDh9MUD6adSoYrqyJGV1fWLwCoYHUdR76Z4kZZ632J5U3R7z4Zg7"
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
