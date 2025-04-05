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
    "36P1ZWkVhy1TWNsHpmvtM9kWWjxayq8STFkKAEFCDCPgmWQUdhHgQgUEDY62ckcfwNyGB1rCBDkL3Dy4uCFJ1dXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swYZPDVZFnpmaK5KRt2rkcbG28cw5uVg3VDSN7JK3r8yvvzErRCmPRvxFzQepUeT27FNowEotzZU5VkER9EyFmj",
  "key1": "2akuGWTUm9wGETG6FQ5TyXduSraC3RnmkVMu4eNfqeUfCkRpv1maH3yCwihvjUgMkEMYtV3zQuGaHQddyrw4p3bZ",
  "key2": "4wu8S6tbDWxhcYCB338zrdW4xW3absAFzADeBaUxVaCRrcAv5VRFq3c8VhycPVqvMGUdEx76AVyip85FimF8wBFu",
  "key3": "4RvWmLAqnFnAKeF1wAS9HrHCnxtTEweCDsAEndzWKXitHHxpEZDs7VdbzSd24KsBXYWiCjMKvBvmcd7mm2yW9y9G",
  "key4": "7vy9tkKPRJiEGS5u6bEEsE9tb8BncmWkHpo5jj91XSRq1SfAEBBTQbuhAifKrPUXBrvM9UveBjqDuxzBsPPGybU",
  "key5": "Hi1QSPkgK14V96Jn55D11uwjUp8fhi8ZxX6K1b3XX4DUzFzTRoPnCy4uSsxTXAxv5Sx4fpsMbJxDKgbWdTkugVr",
  "key6": "3iLzXPZX2zpMg1q6D5PEsS4LJEiAe4AKxvPa5mAzVDkCTaWQfreANwnxxnZTz13CUJacH3AFWY1NK5Efbcmkucne",
  "key7": "8P8XdYGXhk3x71eAPwHMyXkiPxA6MZU53TwxWKRdkqh38NSayxCvcnqxFnTC1QjzxHWZa3gAoSKVsbu8khLrRDB",
  "key8": "3J5QfpLYZ8K9uF687K1i1fJ5wVKZEhQ9ogKi4wopU5H8AsCTxMux2brmZUxfTd8WR3SPN2BqgRRavJgpSjPWAuWs",
  "key9": "5nVXFkyVwFXNzq7rwcZwhnfi1GNSya2k6TDu5PKr4gLkMvQxPmeWZ6MkQRxge7e7JwPcsLLdgeEcGMgMuqWWPseF",
  "key10": "4JSnKkR8aCufXAk9eBnCNiuBbmmCCqiBSiG94QPHKrPoatfPw2Jbafz8EZFDfHzGQva2VpFunkfUr5CuPcK3pNfo",
  "key11": "3Li6fqeDfwCT7whYANVthLH7XTggsn4RBEHyGDJukBTh9K4xEzhKd2huLZ2gobHdaiJTcW3S3UZrCZF9Dv4PqRhy",
  "key12": "2mgvQF8GBXkRXLXiTybJW8s2sfrk5DADBAK6EzmkPq14zJCwGP91ASQSZ1HGg3xspx8qC4FptCeLHQcoZ2YFV14k",
  "key13": "4vrpGVmAaV2MXZzQuGtUAK2hDd1JB68idgnJSKgBNWvXoWuaQUdxtxt9jMWjaWDHvLSiQBCMbTxiC87n2BQAkeQ",
  "key14": "3jmQ2tKtcxU2qs3SbqYH4SxvccowNoqZebiq712MVr97DCcUpDpeH9kQhp8ieQWiChoa5LNTQfe7yJZRtrPxCd2M",
  "key15": "2GT5WHkHfBYYKXubf3SCpPcMLoMziKkkZoFbomnWvxxGxXt2ZoKKqL9i33vozL7zSmYLhPWE8fUXSz9EJ35HDPd3",
  "key16": "4zrmkkUcqHKcUARZu1YjmVaCV3HpCRigC4qQmBDzjoqxwiuW1617oBCWUT1SmkuN1oX38fJr4TgDU34TscNKgoKG",
  "key17": "mYRWWREuuFfprBByjCQ4oUDP6KQ1AQxYBpmxyySVuePwk7mMuRPBdj97W6CviSX2ejbWQMfs4VCBF1tUGo3T5RG",
  "key18": "63ZuaJydvE1b8GVkemY8pZQNQbxSVgayUaUE5CJiHQGumjSA797joKtN5EfcQgjm6D73uqZbV8RFt9CgYfsXJVuz",
  "key19": "Gjer9T6MTTcHqX8t5A1mQdysw1CLw9bc693xJqY61RMaGqe3h94Bhh61qpimKZVecPr5MXQHg4gbkPoEry6VM2g",
  "key20": "2GTBZm3mC2CHzeQ7qFqgFovGe7ZipwHyUurbJokAFc6Zhee8BJ8bGfZ15ZR2GuVyzQ9pyGEki5ESJ7nd6CtsDjte",
  "key21": "GQ8r4TMc5nPZC6URNyuDi4NrBf3n6jNcxgnBhQgCX6mCWN3McvoWmZHK6y8N7YhAwbLdNhewvTz2WL4jg78695R",
  "key22": "Fg1HtGnDRHgRAh3bAGBEjwPNkHHc1BkHdx5ZEKWPLVqigER6BwcyUf9MygYUxWybBLB3Fy2nMLzGwcgb3fKuH6e",
  "key23": "4d46iEYrNTYmwAVNEPfTfSHPHKoh7sSAu1V2wdkphwzRQbUSGWTMfY2qjkKe8n7PiHXG1eAUXpaxCYCqwr3QatYQ",
  "key24": "2er3hAFeH76CPgQYKHdoFq2L5RhbFmWzcVtiMXiYdWQju6H2DpE8NxnrsjxZejhh9kdvH1rbw6SXPxyHLx8KdKrk",
  "key25": "4tCogFGRQV45vqy3LQ7qhPvFwRuvNTMh3cEJAXAeZ7hRTrRxGAdeRzb4J7KpD6oznD2jaBfD7JadBUA4CGxtGaw5",
  "key26": "4EULPpLfDhducX1i1eYECQ4JcU4SaGfqL883v7q2k7pXu1jqwVvoWCofyn4nRFunuJsYBUni3fAM4rNck8WZuorh",
  "key27": "5CyockYXctXHdhF4Z2sBuiFd7VToCRN162HRqWhsSGzLVNqxKgmRRvyaV4siuGNE5Vsqn4n2LUrSan336dgKsWkD",
  "key28": "5amotGEU1wN6NxWp1HdoTjpWewCqD4Zz7JjuWn5XirEzN6GF3LQxAHANdHNebfJZYU2WquNF62JDPcrTfa8Gvibn",
  "key29": "432tW4YqNuvguWTgj6JWwpt9RnVwUYpJ22vvo2xbMA4hjH7PMzayPHwRA6xK9me25JYo1nkX7fMWA6qhFnsZgDAM",
  "key30": "5Geiffu5LwJsPvUpEL9zw7QyPgRUQrVEAUzk313MbjLXGgZHLFrPWJJHPio6BRqsAHFTy9Gw8bGandRaXNeEGTDQ",
  "key31": "2CL1wE5bwJgyv7LacvnJZGtFCDRyD2kjb9zEc4bvHm28mkWApCJAP6MnYw2hmhLVAdV74iBwumSQZWi136Qeyadh",
  "key32": "hH6UTSZGHAmZMhsSU1JMCPx7ubVsCg7W4bEu8auRYbnSEsfkMqxk2LJgUPSXJEqrZ9WUbrTwDdpvMM6md7TarV4",
  "key33": "4xnLuUbsXtGTuAMZxauwcUaPMsScNsbddxy1uB6Lnij4Gsf49N8zemxHvhLYs63viwGvWTHgG2F5ZGaM92BPGvnK",
  "key34": "333NZVnaJHkLcK4Y4EiAyZwZGyvut2VYiytPiFcjPgJzgzDMMCjaB6oDQDrCoBmvxxrYMqj6fjer3muX5Pxeuy8d",
  "key35": "3gxVgQj2WaHsvAc4QRFQSwtTdqbhBxzRf9Trto6SXvKC7qaKRbs6sa4HAbN3Rfu9YHPCQ7Rmb333RQQjo66W1jvM",
  "key36": "3AeRXi6Gu9BHR5TgW39vJpMKCyZmifmn27PiPA5CdjFHJJg9zbRZCMhhTCRXQUVz4dhf3kZNANuPzeiEQcZbzgBf",
  "key37": "2FqpbhyjSse5PPAQrxJKBiJ8qQgyaHZu1o7bM6QZCbVHjKrPNXQ3ah1DB3NwC9HDZbGLFytJC4yd7MoFCBxpeaxh",
  "key38": "45wmC71UQDB2giU44QyE6Nb7rgE3UDqhTZzt7GnJDFZVnzYVTKu6JbzjCuXidYNvdoFgnr2RfjMC56foYVb9mFHx",
  "key39": "3F9ZkfQ5bab4KMBnF4SvphE2wGcGq75YjM1pKrQHpca8jJBiH2SbhE11vbzTUg68GuptWpzunBVe7MHfLB4NZ61F",
  "key40": "65phKywKiHVeW4qR4Y2NbuDmSRTEecsCKYqtW66tc6n41RvBUJ6r6FZ7Jm8VEvSwJ29EDUE2unNZT6VqdJHkYyrT",
  "key41": "32d5m5E49Nz5fbcwJvjchjQcyEie5rwSdGd9a1nDJss9UFRBwzDnTZJVM5491cBhFQMCTG3s2htvjLcKnSqsFHJ4",
  "key42": "MavFuhtjNUDzdbGtfFrDRPexxVf3V8XTYyL4QrFULMFCe9zwfJUnbh8hdxgi96xMeKihAeDWrsyDBYmTsjCDVr8",
  "key43": "4ViizemeWNtnaf8tZTeH3sjVJS17W7Y3TTemftHuFx75kPodUiozT4BjhzKDU3YSq8qpr68sHQ6cWrkYWbwUE15e",
  "key44": "25LvMeGFMUXKBxudaHkVN4NgRWXCBptc4fexKXB8jmcnuX1aVNgZ5R6S26BtAt8UBgcYqzRV26QQUkggtvaCUkb8",
  "key45": "5Z8htCDRHjFUgJen8deUkT9wyhDL2JWxVvY9xssK58ZyiVhpA4y9KaZuWdExkPSLkSa8a9j77RueEPmtgBqvkXrG"
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
