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
    "YVysNpkpnycJqqbqa5QZ2yJsEqPRjKHAUqEZs7tuPe4xjBiAuTgDtowTHJocpDJW5x1Suh81UuJEtUQYAit1fzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W2BJ854EmKPYkkYXKfjnvYPdwhe76LM8rxFLtUvuEqYABenhrps6gCjZ9ntfXDsRcDYrygPDcEgAHF3e6mp2UbM",
  "key1": "4YPkrJp5keiazafFt4LdjGeHUjyLqizjqxgL5fKvkHdUkWLq9SXf7ePS4Byeu53ebp7DG9r7pQXeSJHR2wRhVBoK",
  "key2": "2nvGoasa1afNGDDA5m6amXH7aEPgniAXUJyoKRbUmwXFtdS6xhx84z5sJxx3kmCsvWKozZVgVfTxNrezKUFEzjUA",
  "key3": "2HJgHgnQdneRXT7AtKabsFM4uyMDdA1XoNCM9XZPesqtFkTPePbQyChMCVdaRYnAHRjD94paesZkmneMdiSJVqg4",
  "key4": "3NXVcuiaZKYRJcG5uxc35eRc99bGRbepwncCF68Bp6MvqM1koD5M3ew4VgeLarWBwac2zkqDD2fyCK4zBUSjBmQX",
  "key5": "2yap4r1o9VNwRiEjj6xx2EaCS3pGmDNuVqPFsASYjEEX9h7J1BWkmp2GDw9FoxErRDyPqFRR1mH9X5Kxw8pZLagG",
  "key6": "5kqJwxDwXbBz8fqUULU735tzmQ3Y7QrKiemgnLYXMRHX735wo1E4XtWgxusP2ZJxQZSpPD2d1anU2dfgKCjSG8GQ",
  "key7": "4273QgtH4gwyi2cKbDL2e8VvXbCjm4HQ2NDCrUcYkMFpsEwFq9F6k5VJ9Wz6Cgx2Bx2iVxdaZgw9xuh2pNETqCgY",
  "key8": "4RZ8ieeGAV7auLyyChckbyaSjwSvdRxVsUQeumuFAERn7gMzDA7Cmw9pwjHZQnJ2ofrDR46x6xMyi9YEpWR8G6EQ",
  "key9": "2gBxtbkaWMxygdRZNsqrkK58cCd9z1P6WEKLpcKwFdaEMTQt5y2pWUnTHZFr1fP4AQLDZJgboouncdxVHfAatJH7",
  "key10": "2uATrWzSFCgk89MUWSjsJ4ENE51awiFdCAhvz4DaxhftwSXxpq2siSfW14rL9CCGmDKmdybxqXPQL9iHkBXKErMu",
  "key11": "TUZtWB4bubfGzWqJ2HtfLrCZKqqBjWwnaT6nGYVG2R19ZgayBMBCmhT64yySjRuQeq8XYfdqu2rHBM8sxhu2rjL",
  "key12": "5qUSaoMZmJcTK2uF6vZXXie3CF28Cz81EFCifNYKqLqxKHysLM16chLrvqu9ESmi1WVAMA28E6r39kSxHcVeZ5QB",
  "key13": "3Q2ZnRYScabDoA488yte8ojp74n8u9TwLxBjJ8dgAGHfBPycs4KiPCR7e6ofhV4kEeGahA9rimXvGvJToDC6kEPa",
  "key14": "4K9iRsXs2QcFxpMXNWsz7Tm2qbVfjwUQnd1mow2dL79amNzbbZkBkWNgv8QCTjCyK2Hohn3QPSWXc2RgPaMaGD9x",
  "key15": "2cNAQtCjVLso1E51LzXbkTVeP7QmMQ3Dsi4WtGtJ9KJe5SXAdSaMEAVQWstaB43ExQCuWGmA4Sd9AEU9QaD7VVaZ",
  "key16": "3MsTEGj4jjb3F8G2ToKoS66pHmV7yjwHGVSBd76FXF48B6t8y3HdpjXFD6XQZP82agm7PpJ896esFJ4bggXRVbsL",
  "key17": "426PZVbKs8R9AHrH7Dnc3WT7wvPYt4CZhbQZDg3QxHvX5tzRTpczXas1NAzNzUvt4SswsLoF4VvKRT5FVJNSuCYP",
  "key18": "5WJhHGjv3piL4Pf8rw2bFWuM3p66mMBRgZwkEzsxM8WsZuQ6Hz8QJi3JVTr7TsG4ocZPH5QS4XgrsVGufmfJmeKx",
  "key19": "5NVw2rEQQPTTB73WsbAdGqEZyJSUbnfL1qUsR4xfpmC99P1k3JsMgfzdvpW3Bt3LXAh8r2UpTSb24Y7YgwDC2tQk",
  "key20": "3jvqPJtv4ssXrFLV8LxxFcWXtZe9ziNfoSm8wLX9R47DP1AqT77NnAiyCLGace4QE8ZmGX43nXB2HVcHEX2RTXKu",
  "key21": "2DLDywWDkkWGGkmHhUYiBdaFNbv3xKAZdaENpVsTdNqsyBhhgE6dgEbizeHgXg9tidtXA6M7GuTdAvum1JYK9JvH",
  "key22": "3mFQrHdmqNAB9Uj828kap1bEsXA69dDvuGApfVNEFxryX6rGEswXVNWUgUrLgibC7pPzVbsdsNhH6co2CeTV2xC4",
  "key23": "5CmmMfaVd1nsMdB21ykRWHXwuApmZddPjYvaudeRpqaxvJsJLcutgiew5ZTuBSZL3GhUGtNFjZgkNhVADvpsqxFy",
  "key24": "4wW4W9A1ETtCa58K5v6rozQgs8UbV4YgyU9tH4jYdmvew9zwwgafD8TYWff9wnEVQnjEZHrab7Viwb7Wpbwauosy",
  "key25": "5dEdqp5ohfjAjcusAj4gxibwrTRrCqEkt1kc65g2rSp8uS8F5gBUgDwt3w8brbWNNRdoQtamAJFXSbezvA5FV4k2",
  "key26": "4swqgK91MKcMP7JCpe9djg5LqXv2M7EsUsG19a9CkKCpnf4bsbebQX7crQMg2yqUgFK2dmkLjaCMRdP1of7RBnRw",
  "key27": "53FxxXBe3dC8Br4neHcV7gnVYih2gfkEPJSFy7B2mvNLYJPhsB7Lt5Ghq4giomZfSvyBN3ppyJJrKq2jWfxgArvX",
  "key28": "41XqrsJbh9vbU8C8BtrYTULjAWAJpneUc7aVjJSAwtVdbUnoWMy7zMqDtuEWkk5GVKu7X3k1uqoQr1UDgbgQ3mk8",
  "key29": "4TgKVJ7ogzq5WAqWNaUp3askZETTboxBLqHufkTt4DkabUDjxJb6zEZrRh2GsTzqcUXGRtTUCBL7WrHzSCof1yBe",
  "key30": "3AECvU93kwMuR27da9hhefu6iH5fTjki4kJs3UnKn6D9p1C5849P4L283tUwGXnoWiZnAoXuVNN1cW7ptju3QX2D"
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
