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
    "52cT1tY8uJCwdnHBBtgcEDRw9Hjp29tnCiZiMEGbUmjuZP4RdzSaFhFAfgwD1pVGzGZTP6BHzjhA4ZEAd59TK1QC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gX31aEYvwkcpdzQZdusvUb6BUA4H62PwvQYCPCwTFFF6QiFYyEbHH2mTpdUqV9DFCRxqd1UNRhtXHdd4u1yAtJx",
  "key1": "yXcbV16TAsZEz7qoyQN7xWW1QDsnf7ezScEAbRLVWy5vF4x5fsfXHWeNyHyoKHKdVTj69f8pSJF3NZFg3VBzGYH",
  "key2": "2ZR1U657NQGUupEXbL14agWjy8FqsGmDcNGD5tMdWqdyXv5fwLikYBRAKVCsNavpXNHw8frHEG8TRnWmsVF8mjBa",
  "key3": "2ck4Gg7yKr5DHznRsAYF8f62wfPKZ9BL9jF2bjvx4e1DLmtfuB5sSF5TP9C29bYVdDqwcFbLekuco1RmUaG8X1Z1",
  "key4": "STwVExp1Hwm7DhHGiJCxj2Fmxg5eNtx72dDZVoCDWdEhRJaDfNdodHLdPQZx4VSSshZX7aq14Z1CyKoTcQ9xkge",
  "key5": "2djefMAv3orgAjjFMuUEsiFbRMZ61bESJ4HkS2BwHPRZjT7ddLBiUoWoMyntqT4FiFUxoAa8aEnRhRZgDT2aiicC",
  "key6": "2xyttfCYnXoQo6a6fnsTxNVJMmdmSoBZdABtGQKJDJHTTxYYriCexJXRcZYn4PZ4N6x4xXQng92uypwwPf3ZABih",
  "key7": "59hVUmdipdhsC6hwZUM3JWYWFkTuodAjfQGUe3G6py7QWUcuEH1gVyaWeonpJ1SPHKWdTZga861X7ccK3CEMHim3",
  "key8": "4zJyy91w22wYqTyCKjq3thYqBnVNdmKGY8DhXSvvJmV6ngZXvyYm2RAJ6SV6tquBkdjduRB5w2WTjWB4NpVWXmkh",
  "key9": "UcUG7azjL5KefCV8geVqrYMJs72Ge3qjtcLKoYwqmsyejJTNtyykEvf8E5JunH6Q3yoreixjryTJuN6XKJoaAJy",
  "key10": "3sLLpbioLyqVG8Qqh8GiJ11f29MkYtcD9ehcjkAHskzPcU5NXr6qqPipagYnWrpDKTV5jE7TBQ8xJvTzRYYYDM1X",
  "key11": "NWW7AoBftPzbBMY7upQdGYd3b1CAHLRC9jUEn8P94yPJADR9uph1qrYpZzpM6CzgQcQ4WDgwxCjoFXkhn3sH1m8",
  "key12": "3YnRER2BbFrXqJHaFzYHA9DuEcJ8FXQ1V1zEcg3ZUFqwg9RXPNnLTUCL2213jZ9pHLShg1AmSYawMtdHJFQkgaR2",
  "key13": "2HpC1S3fSACvfzss4vGrBCbAyqhf6TGkJ71ZEpT9CXJaNQDcRzC9pV7zDnjmK838NaJM8rvmvVmA2gU3Tb4ziMpQ",
  "key14": "2wxMJck1LAFj3Gws2zUuoAg5b2Mi4CjwNpgVQfkG1MmXTAGgfDz8k7qBxoiFuF2VwmpW55vNQWjJ4yqLkNSPnpKs",
  "key15": "5YGmPdLM9NvfPeNnLZKMERQuPBSTrmM7LAcwFDf2NxQ3XpMtxs2AZFrTAdf6oKpCbJ9yxqwZ9Uqp3c3XSxUjkfTq",
  "key16": "3DaRQhEmMxzYhEAaypMvbNTqmvnoNJGL4vV93UY1G9Y3LWfPHNdsEvuQNdo3KL4sXfQH5NYS9NMQhPB2rgsyySPa",
  "key17": "4SQsywh8ausZqF8SeQMmVU45WJPAwL7sZviToUTdd5Rqxgsy3B9CCRPf7xctp12PAkyTBn2L5D8xnP4Q5Yrqtbqv",
  "key18": "5hyRjmTVc3eUwApiBBCJNWQcpaVqisUF4DEcpfAjyNeQP3ET3zjs6QapTaQ4SqxeivYgb112Qo6dXzQ8rQMNyqkZ",
  "key19": "3Af49kgoYVMdGicdFjoY27GGVuy4fzXMUtzezxj9hEptpjDFbCzcsiKMPnWyHiAZbPHzyArawznu3MnRHT8YkBPy",
  "key20": "3gRgZkmN5vgiT1AVa1x3xqXkRqz5TemxWAyfjEH3GcXrxNebX1QQPV9Xi3YA8SJvrXnMMfLJC5VKP59p26T9K9Aj",
  "key21": "6BM8FsHqM3dSDt6a9xkBQCn7hRQdUH1Ugo62vCA9niV82f5zmLxz8dHd2SPRsQMF7K1F2TeE9Vg9UQe7tRwzCyp",
  "key22": "3CrzCvabBa7QTatTKWreN3xq7LNyH1cC5Wtb4DSswHzs5mUfQVZhvtmwjGjm732T2Zvn2zWKAuRMDAknS3Aq7cRG",
  "key23": "4qFXvSPtwFzDwqgeQsHY94rrKFBreo7hkTLpKKzC6YKqGCnNb6N3WJw7pdKRR3yv6F66aCAymeJ4CV3erpBfDqnE",
  "key24": "4r4J6UrDmTdpSCki3DoEw3zobVB7ufKeXyBKZxjtaEGymv9rVCL4eXSc7TDu9a8Fy3yKPZTEutKU362zDYTsHnbK",
  "key25": "2pP6sJaL3vPdxbduhckNQKaFQQkdKxrWraTX3M2RM5dBKrVxkK6J9vxWG7n8B9eFVHqWegrj1PWFeDfRb7rv17RB",
  "key26": "32VSP6NERaya14vXcukwFQ2CEvc1B4HAphAa13m2MxP4gicoA3hxcWWAsu3RZuuqkmpH6WsqFVTq59NP8yCsi2ci",
  "key27": "5L2nj1fru3jkxSdnCrFTYE6Kmt65ncQGJFL8pD611ABSFRWkgMJkc5WJTSGzUz1hRgfp9j4gex5M5YNVfbKFEDjt",
  "key28": "2JeGy395sEVaxWAtqdYo8Ti9TJbRWCMkt8WMFhKPoPhWCyhjba8gnWgjX2NW28yGcrt1ULsaP4ubBEVYjef8KfgV",
  "key29": "5H1RvJR1Q3yAFPNztNDj2MfYWoMN2FP9ZtRr9t64hN7ho7WPhUUPuXu3Qo2pt8Kqg4v4oqwUnPBhbyMb9Se72tBn",
  "key30": "5chxhLnitGZo2fHhE6n49tuDiadRVDbsVAYT59qAC792oxJDMwsK4jYpQKHN6Pa7bTpSghiP7amuDactqGYznQHv",
  "key31": "4VVA7YCGTZnFN3jCb3gDTQDHyhSpKnGyoXqCwzisiHXhPzgoYcXA3L36R7AdF6DLGe7MaSoBuVTDGhq2HKR5ANM8",
  "key32": "51jocvJjfDH8qxF6tt9amGAUzgMqUYkP83tqAx7MZKCKayxjWXfZXtMmpPAeYEX7Nb9MsuN1wDNeAhri9RMUcJj",
  "key33": "5JzsknPEV4B7Hgs992GdQjM52JD4L5qH2rhDKnjCAtU91191punXnY1MqgrvVtDptemX1gMs8JEBZ9PH4fvjJZ6x",
  "key34": "2ALLVtT3tiPmkxh8B8gryoKxGHR5DNzchqAnV39qP9DiMoDNrsKp9Skc9frWSmQwwRpiuja1MT9kncRzNKCANiNB",
  "key35": "491wdTHwFPBXDxhzRqZx5MwDYmSn6jyTguBtezdaKB6Cjq9NjNdQtTdQ1eqqbeCLcaWR6o9ABo3TLtaomLNT3HxM",
  "key36": "MchS8zeqZtSy4r99DwohxPbVjErWo4TLb7nD7giQHpfxjASmjfSuvnm3y1TPUPMrLBq8pUDTFPKDoScmtZTvxc9",
  "key37": "66NZtcThGDrxCeefu4chfDu1gHWXvjE5xv6Pe1zFpSz2oit2mJAqGwBZpeoRZwSTMdQ8BmEpdzoqv3W7AHfpZEVV"
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
