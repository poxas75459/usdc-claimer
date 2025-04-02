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
    "2ZyvRtEx9V7BjMjGwaNs4t1nVmDbvrqPUrZzADEi1DhNkvCgNDGvD5hdtQ7wMA5ZRfz6irkTG2xDbwQP8sD7KoFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEAgdfBjPeMpaDT5P1JQhrCdQbFTR3p425aCzZf78CyFVE4LCnEK3j8LPHZjHCgoCZKhEApjJA1JTpd3whc53ZW",
  "key1": "3VQnWN1W6mwtjnZ8jbkjs1nx2eSgFRAFJ3d8CndSMCzT1pKFYqsZ5JDWVms7Tqg3JsaR3unZjrEKRimoH2wPhH6o",
  "key2": "gW7WtWaDD5kYfUtbbY1B23pink3XbZfm2zRKruWQKkgzmudJJQZ9t34AfyzWdfDLjxdXWbM8JuW3dS59fx9HzYo",
  "key3": "4RL1KWhonpTfUnFoAVeiGuaVNwn2cpkNJG1KeUGA2nt9H7oPA7oFev7VHp6RKDG6QpAEJtF7Jcvyqyz59ubcELTA",
  "key4": "nS7NbRRwi5rAnCYJJmAxXbyxwuw9ucUxa6pi45w6VNu3LcCEaKpcyRQBUkD9isENjcvZwKZoWYWRci68sMMf2Dm",
  "key5": "2efdtnqon3iSn3h19kDv1SJTE85XxWsuCYt6PfFJFScfnsrVemsfVAfKWHMrrLsu9WVs4Con1fYi446g9yydT6pS",
  "key6": "5WaFMSvBBhjuFbyDkzdj7NxC5kqL5t46i2hPcYxqc3AjQox7ZDALmvPQcdEhjo2VXMMiygsXmYaVBHEcCjWLu7wG",
  "key7": "4Bosw75QD4oV5Eg7NtZzwfY1LBSvB4cydwqmdoHYUmgmZjtKaqdc78nqUENn5YJTpovY6ypPNWTh4iKGrxFXUMqM",
  "key8": "5b3cAC7t4QBJQh5CPB7FaZzF9Hyh44p9YR4SdaFW7Wj4VAqVcRvkPsUvtV8rdr4BYGkhVuhGDNMPQcdjzRH8XupE",
  "key9": "ivx8vowd5DsbUiJVnke2VhbxcoAyjTJQUTXD1vrQjxqYKYYWgD5JuvM4CExYomVDa4XqBheHFcRnvSkaryvw5P7",
  "key10": "3zK3pVuzx8mvamnHEZ7NgLr4b3bV9jdUg9tvuXqmSLjR8qzUdcqTbBNjao8f7Jk29SkLcxTFxaYTrmqryaJatYsa",
  "key11": "3tUKDVEDywmQeMW4HXQjD7XPbrXJnY53keFazVp14VBKVD77J7HaMij3ZUH2UGdtJJK2Nxb3WsXC6RMq2jBYecLQ",
  "key12": "4ZGecShfd2MRdhbM18dPomqF652thqAFCj5NVhSaKYqtgHPZv8yjiRdA7Sfr6bSWmon7a83qdWm397gnkQreSWKP",
  "key13": "5UMX9rNAdq95HH4fyRpLWyWb5XWoYiRXNc3etJeQSY9yX1cghYYHuv537vXJQysvhvLT56pqgVzJX8yFBRrkJCQh",
  "key14": "3tvsGideofAtkWbLAMUMZxHvJCtF6o9oJDu5T6ibqXAioMShHK19zG3QqfnpQ32Wuhu8Rjw6QNQmbfRHAFnXumy3",
  "key15": "5pryABCUWZj2YyL97azuMNv8E2GVYXqJNikyghZznnpmkhQTMymPM3pV1q2A8tvduje7bQRpjXAqLykihP7X7gRP",
  "key16": "MSjTsvRZdetB1cvmWnhiesXM62ywT7MHmW7LnG2nUYPLxXpcKMw6Hi77kRwLDUVBxwLS8o1k2CKdrsctZd8F3tj",
  "key17": "23Mmegev86s9mZiHT44QzVFG1TqNzhbuuN5UcEM5CK8dPXrpCqpJ9A8PLW7svZvix694wQVX9uHi3ATSyu157okn",
  "key18": "5vhKRDmMX3MjN82aQgu1icP7NvdB1NMrAZsv1haZizN6HJF1GNd3MMttiYVvast57rgKvVsYxt5wc8g13XLqFM9g",
  "key19": "86kdcTPVqUkv1gnRdWgHUtPGYcLjRiXoNKLqcwSSPy6HsieXnAYwGGPjsL1aGQ6TPM37bdoAgFL65mTUMP9soJG",
  "key20": "36Yq7RRZkZjsptGdRz993ns4wJfesBtpBW81YDZyHvhSVFs2PnqsVerFAAw3hPaEjUfxdjoytebos9WeBijCniMf",
  "key21": "4WsL3BUY9nyxBq9cyhtuk3yFEvMpoLfkpc55XBFhdhRjKcPAPH6KQjnSto1bpmu18GwP9BAEA71bECLCec2yByz2",
  "key22": "4RwBFH9hy4QpEJr4vqAprgp52frr81UkWdLydkwAz7cR2MDwdN9DBB8kvx3j5eRFEWNeuQRyADarG9ZdWCnN3NMN",
  "key23": "2VGJ1JL9wDws7tHZqy1p2fKp985ARFMGzEyPSKAVhUucitqgHFdfehMJrvSdzoqnHwJfj5YNF3RPwHTHzRujKUR6",
  "key24": "3KYXueQc4TDkhxJQs2naegB1PAYHcFS5xgzLMqhsNv7j9LBs6356byP4Bkw6fmiXE1jabAUxRcnmfJ4T436A3L8j",
  "key25": "2Ubs6vkHDDxRu8nrmshFqCGBxL6BpnVa1MZbwPKXup5m4VJhNcgeetUed9gJ39SbeEckGr3UTztvzbNgLaduC1iQ",
  "key26": "QUYcfTfFHgyZdvzd9wDo97Ufsxw4MqB8hBHYdhH3NJgkHS57NsQQHeJrXR2vdjzgaRsDvwZXyTsMvbgYzzp6q5S",
  "key27": "3osJAfnpkr1YSAPKGDXADVpkK9rVjuCCcAvKw341SS6BHeriTGG8K1vSuekYadJr7bNy3542tP8hd7QfdRzu72xy",
  "key28": "2W4Ed7PCRYNuxAC16Dd7ygXiKAK6h9PRvAvospXxT4m49W1XHF59aD622yH8CJwWQeoBN6g3iPBJjybGB2ZRTA4C"
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
