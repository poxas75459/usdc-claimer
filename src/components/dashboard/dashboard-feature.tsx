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
    "TMfyBjravT3cRfgedezr58zKyKiHRq5Bpiv6ftKWhqUdEYde6jLNJ1jqyvkrST84hyCmUnHPrhPXhNg4LaTCcL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Pzj24EKgkiKJyhBw7a4xaKHVXaBaNwNZKYRHHqjY3YFDSzy4F3i8NWosZegosKt1M3QiEShfgnydkho1shNXvQ",
  "key1": "42rKyCYtg6qp4HdhXnqPi93WoXNxQKUSf37cRAmwP6ugj8LRYJvcYa5Beq4H1S1L1h4ikpSqbirD3uBMxp166mpz",
  "key2": "4heXKQuApcTq2bxzYMvcg2vG7ZYvbepmkpmzhB3UTWdFgdpSVzoF2jAsVUUMQamBp3qxswH9KKDJELdwq9EBKWrJ",
  "key3": "5VpxUcYyfZHomcYW4SUwdjjFvPToXFGVwZrTxv1x6awAPUV4UyqPvcLSUtC2PAUSvJB3co4PSjSq1kKCuLY7ou6z",
  "key4": "5tnHsd7JP4rhHkCHJqTnFR4EaxwMdhNHcsFFU3tQJSG8b9jiSpqWdmZtLrNWqu9KWm1mQVu7iLQz3B59Q7jTeNRh",
  "key5": "2GPy4TLTJhgNL4mMKvJLPYocZmDqpkufd7Y34CAEwJ7RrhuAGV6dtNMAGjFkFNRAPyeUrB7dfchmbBf9WShMkWaa",
  "key6": "5LGVHp6X5Ah8VvcfjvkNutXkJWREWanrrbfbKyceo6NcSQse4SJD6R8bbShMx1UfBGvPeWbQNJ5TF3Mbdq5ebk7C",
  "key7": "58wxBEpZyZrZy4iuf9eUr5D5uXrYGyTaceuXZb3QypkYvADysH7DREApinnT6SEhkseiSzww4MX2MfozvxYPix22",
  "key8": "4kXbYoXDvGVnGHf1W9m7inajPRUsG7Fbzciisyi4R4X4V7eQiUtjtNdMFdbPUVDK3n7bCZxLX6LL7M69Law9uKqk",
  "key9": "2XkKTJ6YngbkmwTryoxHembPn71bPNgUnsRBp8QmbYVeoCF7knwSc3Wn7ENHAhSmM5uy7jghMeJXWiT5NBKhhVXn",
  "key10": "oCDuUoAfby6HK5QuTenTwND4mmY4Gx97wkBBJkUNy7oHUTu5imNBVb43dESwtVUi8uBduXCmtwHPmc9s6Pit95V",
  "key11": "2gppBpyJJ4j7ugFF9E55xCniJMa84DqyGhNkyGt8GF2yGE9s7oH694CxH3VL8nViQWvg3QtxNhciNJx8DvGuMf8h",
  "key12": "59Vx4UGUNQ4wzj9TvpXfHBUeowoWy3T54HVySgMDa1wxR46ZoS97aBketaL9viUJgaAmeRs8TNZ1sFx9JzhgdZWL",
  "key13": "4jENVtnJtmCj62eFoENvsJMEBjk7JR5wZ2iB7XZD4nmsN2emEnAZAWrMrFQh9fWVN3V79KTjoJQUv9AgXnedd8ii",
  "key14": "5AeunXLCPd5rprbhagkyAXBpEHK1tCHauLHMaBDdJbKgGLiBLLRMyCirtw1Zf2WkV5DzB4hyX6SbGs8qpBoEBNgY",
  "key15": "PJNhkaRJoLBn617FVHNSa1SJQ4MftHvs9cKFrtqyGAQGCpQYnSmSjQhGa676Pjm91tQS1c6JmHYNocGHJpKEJfB",
  "key16": "4WimTjLfM6jkXAyLhaP9XML3dsnZhtLc7bp6tNC6pwKJXe5ggxW2uiCDBFmTZKUwkoDManTxbHmrGdTXHJH695Je",
  "key17": "4SDFwWsoSuijKbKEpmdwfHMn8iv9xMrYc42tRCQsxFEdqDg45B1qUvaAZihxXdrarNnD2f6hR7aMLdkaS9h8MLVC",
  "key18": "2vCenQXmUmQ3nTnPNbAbh5QJvbktHZCy3HxY7RpMEww26g981K1mLUFj5tEY6sgAB91ykBiivhRpase3ZvaHB52X",
  "key19": "9qBBTrS9jc4GJ27Je8rtXwNQjqvQyYqNSUL9fFkfkojN99SLbVsVJjGgg1WRGtnJ6snnTReagXCAjYSDXrX7UJq",
  "key20": "2MM6x455h53CrhmwUXbScPXUsddsNGxwgyXy5G2cEE8LZwQktEJF7e4kzHHFc7AHjJyEteYQfVWzP9mVVYQVxQXg",
  "key21": "2h9zXp1DTYT4iaesBR2uFnVpmrEsmg5GwDsfay81GHg7ak48W8bPygNA1J6rjHsgqnL1yXnmJRUAFTrooxcnbLKh",
  "key22": "5bMUf3wu3D1Uohmdb7oV8t1Zw3u29BBYcrWA2HWzQ5e1nyiUUMnUxWG9Qtd9e3fSyNUpDNFLzAsp8nD9mewVwGMA",
  "key23": "3zbbPNqyKs8hUdXpa9vUoGi4F6AcFJaphrbKVGCn4F7vdCtWaHMZzsbaBffAcqumWrEpUSN8vqzEfggwMSzTwvF5",
  "key24": "2Fn8fRCsaHrx44e8kWsBg1LznGJZKTpWvLN95Hv6TzgFhavDJXubv3N8RsNQTazQhA4KKzsA9BLQqr39Ezu8GADL",
  "key25": "5UuAnUtTPnCnpUXUBnQqvwSNciYF532mmsQ2CHFFSbCtFBv2f6fShFQnW1jGsnemZqFVvLUakrXdqYZGRpAgqZja",
  "key26": "yTqQ6fcZVTxbrVMKQm5GfDRRzymD89iox4C9gurmuSgY93nUy89LafRKsMfs9nnvK5WMQiYxGaHbU4hzNP4kDwW",
  "key27": "2dDf1yktcXQ1iwpSwNniPCJHpTYfzzTfptQPcENQ5ZVCRjRFt2iEfY99Px24npBCkz1oCsJaq7TezFqMc6bpTnCU",
  "key28": "5u5SBE1y5NYPadRkyoaHfY5xT9VKhCxD3J35sUwLz21eBmMkutf9ZQZUerJHMYJFywN239CSTtbqWejm28dKskx8",
  "key29": "3FMBcnQrnJDVRdRc1xef8TEqmuCK5pvzWxihEFfqXVTs6dxQtbAoR6KJ2wXo51zhVqwTFRfKewDiU6SRefyXy7FQ",
  "key30": "38zAMCseoRURgbFVKoBr6E4M1M7oxAe6TGwQ1WeG9WEhroCqoqcipgX3bL6RdeBjpkeLTRN6rjmjswoQHLWHEhTK",
  "key31": "5pTe8Qsmczk1htPeXewTn2apnJb2WzZSpM11qshPzabre3E47Hji3AViu2aj8ppGVJ2so5zW9XMUyUpvWfQrQwtw",
  "key32": "27onVePGBYPo3bVCztKxz6dZ1riGjYvS9cFqfVGTDAFkycSxH7xemdT3s8tTdLhd3SmcubEj1XYUko6jstNYuhXi",
  "key33": "32ZvZGWYkaaYeBpKGGX8KYTd6yXu211agyHbDSA49LxKCh9pfhVrJ1W9AxzWPRRfmegNJ4ya2XmMzF6dfhYr4uK8",
  "key34": "U234w15u7tx72wwPT5uWE93rBhZU2MyUYAgTrHwq7osG9MDF9VuznmqDSaMpxJRQkskdTSNWCiDUmj1C8Tii4wD",
  "key35": "3WFSFqzbE2L5vhvxXGqtdUCBhP499Agg2Dm1MHsfX7fWVp9qrqT75YXRUGjHrxJoTNpprVG6BjyjCTAaWagZLDDH",
  "key36": "5uuSHVZjV8UdxiGRyvXCvCWCfSPByYR2YGJ9U3pXkZxbStp9U19CAjNPmPAFSj2ZuV7hsmvrbMWMEDz8UhCcXDRk",
  "key37": "5ijSPFoFnFga3aKU9a2uLjtUwiWkNaUFypJo17omR3GApEEMBv71GwC42FqiB5KyMAT7xtZcqbAFvTKVuv5dWM17",
  "key38": "4H1SnAeeghWCnFsJcxLNdKHqmbhQ43Lby4LWzi9eytUETPoLq7cnL9CrRRWag4grkPJAUFcss3bKHwF5zayuhemc"
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
