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
    "4fQXPMihWxdKSuVrs4jTzvHJfoGtUPLWsm3Z7smwVmSMGNYMWXd53cmu6uKM3ztXsR17MT3RoP5w3jXbChsMY1Wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsgMcDCoEd3JYBoJ67RRJxkmN8Np2uqPK7DfvH7d3tKksQ6W8YHqNZfq8Adt7Qs8mXxETGnnQr6AbotXAZs1hie",
  "key1": "5XUZKHLugTUd5EEfdhZ77CopoYdhLtsS5zDBXoLX66At2552E89xhwaey8q7i9ATieXkeVKYQ7QRpj7aKp2Zgenx",
  "key2": "37BNzNkDuWzhkDSWGSNCKh7BPjD6qMtknKbyEMAJFBKLv3g56YGwF7shyHrjeC66fu5Cv275LwFNNFjy8RY519AM",
  "key3": "5RPPSZbhysEqZ4Me7s6KkeJj33qRZWbJhwjzWEM5391ZKE3eMi3QaiDEdkxPtNYqm7C8Y72NHkLMjh1aYiDaAexh",
  "key4": "2BuzKwFToFhB5xHX4NF9XcykJegj1eVUFQS7NQNLw4gmjXGiL6VwRYPw4XGFNb4BtEpATtK4ZGRjJqS8iCy4Bqq3",
  "key5": "4G6xGLoPTXdk4ydsMwwLhy6kE8tMsUGssGZ5tuwVGXXHXaD5aWtJhAX3ge6aRAzmADLX8z8191Rki1mhrA9SmiHL",
  "key6": "3x2arv92aK7d6h6dDLSE3CCwXUEnYKgzu6Qx9JtiFB7wbtnYkctfxRdUDitdynhHZVha5VErVKVZJ1WVCPQBs1L9",
  "key7": "4CW8ZqGjXkvwobqMBffq2C3yuYy3z9FL43ArCtbUQgytAkEgECRbLd8yoysq7jNTNbityWFMUzXUwhsdD256wZbZ",
  "key8": "5rDXsKvRgxoaJ6ihdzBWcEtnDLrDYKvjd5heGbtfT7RfMKDs5atzonDZi6qJUnaFZquQmDimJvwmgELiqownFMn5",
  "key9": "5Z7ZNRaDcfp4QyVrGcwx5DFWgiwkwrouuX2QkzCS1oBBWEkNQjFRiF2aMLtpjhagkuJiGs3zQah7stc1rwz7h2Ae",
  "key10": "2ezGRHYrAwXLGCYLcqanhdJWLSo6Jf7NroVuhhhzptdDtcpnb1EuY8CPkFScxrDokhF8ugQcjzKNn69T5isznZRK",
  "key11": "2YkiUC2HRgtbP6RJWrCuKM2ow5d4EybBHfXfqRaLEfuFkBaT7gmGDcyMkKM9wPnvaRaTebW5p7aP2KXHZ2t2yVfE",
  "key12": "he3fyP4qerFSmkrJb92HDNZ72bSbnkcJAcShCvBPff78t8jnDD65Lerc8uwQagn9U624ZZXEjDSSM5DShXVuavC",
  "key13": "4VohBoPnAjnaT7G2EBnx1ViWogeeooUXPAb4bLAojB6FBe7NmkzGmm3g8S9FLoK8TRpS1fVKp2LBsDZZ12Qc9Kj6",
  "key14": "26hu6xtH4j7btjRxHsyRu1zfaDAxxhpqPhG7ZRS2rJkm3Du685sgideWercyuovDJF8uUoQhWjJBY58Dpyj9oghC",
  "key15": "4DRqNgMSpmPVMT4AoJXx3VgubmjLLwYPgcLuaubCM3WgdmWrSwCbMvZH3BaMMPZh5tySq65ayHLE7eX4t2Sjhk1N",
  "key16": "23eeG8xaMQ9KVJ2VKmi62JjybPYWKGsqVU4TVFAGAAeURaSjuTwqF2W9DEYmqAED2HrPTJt5LgF8fXxPKaw2y3um",
  "key17": "5HrW9eHUHWRKhYuKbHrXKUVHoxBRHKzAeEERsdMUnF9VwCH6KR7sCnJk41cSQweUE528dZrnmFfL3U5s3caHgWXa",
  "key18": "KAvFkNymwoiGhYDE9vjNuY62Ha7aR1B23wiujBzoxAZdZputN5hoX15osKpRQp8GZTCGYCWjRSkkAZJH8aznej4",
  "key19": "5BevDoPQvqq13nnPDpBJJW1aNYDhBFssYbtXjwB4MohvJrujUjEbYjvtejteSUsqhw9NdmbefK7W7xsBtWxAwf4R",
  "key20": "5yEDNn82BF6vML4RBf4d6rzwEnTaAWs7h2ry7B9o2iJaDGwWDuvB7GFFdNaBhR3HEzow2iseWkg8bKBWYgiMhzfK",
  "key21": "3RUNejpgqkt379vRaQkzCsEYBU6xavTAyoUuSbi5r8q9zUnnYJpJm4Gd5LC5Hjd52rfKASPrEXTDQtTE3EJjJSHy",
  "key22": "Qvi276vFyq6sGfZTkCbwNa3titshWf5orUicAkqtMyH46wenWDFcpv7rtnkJysatWMpmAoUEY7ChHEZBdtBut2U",
  "key23": "XZok8SPXKJuwqSqegBvopbe8jTcwixMFNHc9TJuggkyBZfsg6AYsnbFMRzUVQT7mz2udPzgsDFWL8f5JhuxPMbx",
  "key24": "4mk6piZLkVpPYt4a4xm5zmSZShHySnLvMeb8T2LDYqARUD7KJmjxN9dBYRA6kfPVSeyG8aSADCr1KHTYGFq41chz"
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
