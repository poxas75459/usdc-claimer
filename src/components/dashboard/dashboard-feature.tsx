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
    "2Y2xmHFL5WG8KsngQfNNWF9ixHohZXsYEdRm8yrQfUXp56XQNyL93NRBw2zZaiQhE4W6jWXX7HDMSWPbc3EHpoiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VztfTmioJ4m96nwVgYZTSYdBMgFoRdT8jP6PChjxZqaMPy4JVcaGxepv6rLXLa2wNFsd8zFUuykMHHtL9mDKf4a",
  "key1": "3XYurPzmb2JSPVcghScXAoz3FgQ3GqZeS5vsd3pDgTLXv83rB4ntxMikAz8MB1wirXyJPg2BiSpXF3ahtE56uXK",
  "key2": "42gr1NLEf2KQDb7rQ7zTPWuqd8iEjybdWMMGqzBiuPDquaQZ74T5fW9uGYJiN5FbiB91pTi157mWyi8mEwumiHxk",
  "key3": "MjaRAvfFNU5dNH2FgK73zeF34tYokeSkbFdnx4YwtGt5MDzEpe4Ny3wseebARgFD6N2HqVZYSfPDcLJdQMZgv2Q",
  "key4": "3fYfgy77HULHCPQkqZqTdfoVSbcF491TnPu6w9nzs2djrRvGXtTRQXUr8Wk721zHFsGP5BtQBcDEExoQq2rZnvA",
  "key5": "5yrevcfJ4kZenJiRzUdyMtMwJfGe2xPWUH5Bo48pfm1Bv5qK8fWhfnBySGeYujg4EdSnk32SuPmbMwnj2BkfCvkN",
  "key6": "41hPoGkGhfzv57HFgGWCUisc3btwxwKGL56Fd4XRESahN3U55sc4k6Mvb9gzgDYBnsCXkwaAk5Y5JL1RGeD6sWaK",
  "key7": "3DWUxJBPJBqhDT2FN8bYo7G6gKq3oB46rBFuzpxduNARAWnoPh221vFxDayJzgKU361Kc4WK8QBxLyNhhHJUZKqJ",
  "key8": "AnEvv6fTVF4rR3HnTBGc3FpgLvDeuryZkSCUcxqyLhNyhmoL7UsiLdBoM58dqvkXdWRkDcYnfZmZZsuqxJu5KkT",
  "key9": "2vJidabLb35fzu6F4rQU45pHeZi5yECegN21a9ZtSkhrZta14NHNE5giDq2jECLE3CMrRrecdVD7WktcWNVX3Cjr",
  "key10": "3wEASDyUnQNStKJvjBo8s3K5qHxKEv6a9Loy8jmzUABaYp2c1Uz8mcmqqDQuaWmWNQYxcdGQpML9niNm4Dm2kqZT",
  "key11": "57xWyJhUmNYKgwpiRbWc8q4AMbRdkjjHjnAXTJwSgSbD3YjVx4MCvEvFdr9vdJQmw9yfpeAhXD2cAh4csywsUrki",
  "key12": "4vNwaEr2YAnHXEFkzJtijwL3Z5DrmV3wLJ2SzNYnrpJ9W753ZNPmfzQqpuofy32zNJJmMsh35heR73Zq5oCTpc86",
  "key13": "4hi1SKiE88VmNQk27wYwYf1w193QL19VgeFeL48rpdQsKzkqVuUDTVnPpfsAXhpxwiQ2vfS5r1FJ5uxXEyt5anwV",
  "key14": "3HWEDKkwD6GRuys8vPBH6CnTiBZy7ecvPELzPdETzPZGnK4pTwe1BPnUobjePiqaDYBKq4ufA3UGLzAL5yDiUca3",
  "key15": "27dMqjpoP3DsZHx7473vmmLuTrNQTKYyVcw2vYeLotXxjR24XBZ7UJhbzyfNu1S9EgXMMhbam53eavTGN7mcexvz",
  "key16": "xALo6xQqhvUAdkcHLDhAsnEaGkeTQGYfjzv2oFqXw8uJmaW4XW3KXr4q8YQSmdDU2SLqqWW5Z7DDgSFbxoEXfG3",
  "key17": "2vX3GdSJWD6eU4EoAx751TF1cSMfCfLjwzGmCYAR6b58hgU2mrDazg7VeX4f6fYy51EiDpfJbjrLkSDgAXvCvyLf",
  "key18": "5m83tcJF8rgyyasJqNyVuuKJsXMcceoS8teEsfSK5BJz9AZvgtUzRzaJ5j9TiEYNoQsNsfSJXqP9WqMuCgr5xLKs",
  "key19": "4aibfA81CGV7CGT2Khjqh6rSZKhSvNsr3nLp7E2EzR8GGkrkyg6FD3PhAeW4T2YxyMacU7BwtxzEsZFJtqinwoH4",
  "key20": "31ii6nw9tAHhgEfqAC1ETj1Pjude9qB6gRDqRP2WhTHKA3cp4KfcGBYcFbz4GZJry7R9UhNBnEAQADc4gtbbSZVj",
  "key21": "5CtEEuvWzmewsVMhZvVmsJ5f2hticjw9FvDBZVyu8ukEshRg6FEVQLiAyGkq7RkRsxH541aDEJmmdFCyXLe5YXvj",
  "key22": "3fHEPJAS3n5d95fs2AM1XgTtAnutxQV7rxEu7eYbPUtXHLFVtCxvmyjzb25uZ9xyz17deczAN7nHQeJmeaj9J5VB",
  "key23": "Po5wBffwsMJsJ2ZoF15xkVBV2d3aEhYshqeBvPnhMGQ6YaHB1YdArYCrP1TEm76kC9CkDAUvpHiuRxEn1LxmSph",
  "key24": "EY8TBDEKaFpQMhxvrZsmEFuBsdeMmP8EewkWC1m8rgtr4daLt5XeoK73uRuYjwu4H5Wf4n8ncVk6ve18HJSVMGC",
  "key25": "3uJTjrez2tAik5GrBn8UbPHAs3QdpZuHQ8QhWRJ5Z2JCThBY6hKYwpeqr4odqHVYVMuYSuEvETBqQSZfGncDy5Lp",
  "key26": "5JuXTWKhfywr6DtF2LDJEdd2LriVHfuKWjF2vVpCLFitmtPX9JLgZBgfsogKCB5aSi7C3cMXj9NGHc4tBS1dzBAy",
  "key27": "5xnsqSzw75qAqkqQngEdugw1Sd2QTWercDoTHu3qbioJck4MmJ9fnyTJxD5XteQCcMyxLRT6Zw5GipNsMtN5hyZy",
  "key28": "4rbWxxnmubxPHRHsuGsmXNL9tN2fEQXujMfFAJneww8Pm4qiCVbTQGK7oxUz5vWtzbFyqAdRTDDHbyuvKVhoBDqR",
  "key29": "3yyeyYb7AzC1ZKjknTXEHsFQjrTCc2QpvyLhCmuUAyK6yMzVEDccAdxAszMWBS556TWQtPFyQsrMwftxehghqBuc",
  "key30": "2QNchQixMW4tRtehuAXbHnm9t7AuWpKsP2yN2Yhha9HgowrDZnzhypdVb4JVsukrypoyu6zv7aBm5V6TfVmPjXW2",
  "key31": "2rSR3ZyNALM4e2B71zTNRvhkarrWHyctewghKshjvcbWfvr2zfjJ7vfj44ic8rjbydkBb76wm8RvBEeiuRJ9gjW",
  "key32": "2cpYqwG7nQTd3YTyvHmhoYmVGjTgYYNRDtJ9rCRbSrDbcNYRTqPXAPjPWE4UAQyCScAV62xorLqNbQfLCqXqtosH",
  "key33": "2d9Z891LpR6qWBB2msN3xgc72hQDT3LywXJUKX95jH1WUFmViHcJq7VH3hfBA52WKrk2wfxGWJUCZkArrfzFbUz4"
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
