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
    "KHD8B59AcrtjEPMK8SqjH5xmAxynBuDBF7SyvvetS4fh9Vw5QCqqQtrYUbQo4jG9JhGjYzWEqmTc4k8ZoDdwUdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nAqS4yh3nP5SDzGVhdBGw5EAS6VYb5G1MqFsH88wYzyBqHDS6VYumucucdbHRghpxcU3szFKUSgEGMECefxUnVZ",
  "key1": "4pc6hxMfgrjjVXR7tVCYKGXvBzYEq9u9CeLTnATb4NubTZf3opYR6L42t2UZCMxnyS7VXrweh6aHqwXiBt1UcRvo",
  "key2": "5q5iXF5tauDHm7GpLZ2Z1ivc68R1iYQxeb4Jk3T8RwVx8UGTRERDAPKGrzUDfxA1eLEtHPUTjNdaSQkiaJf1hmVs",
  "key3": "5zj4o6d12EaNA4JBLPfZnHBEb3n47Hc3DYCxhiZ8E1JqNPitqkYttGsTsVSo4aQpAEHAsx8L3faiNXwxFBMwfaRs",
  "key4": "4cbAt4tRxhxWGemXp8rzWK5Gide88RiqbnU293CAWxs6T525a76uqDhrQymEbVC6PMfYrCZbYXmgFxXqUT9osHZT",
  "key5": "58LVGWRFLjR7b7Rjj51SqLzEZoPYdQMTAnTFuE9VY2Uzgc3eqCUQnXHGPjyVBouFU8ULqE1MsETu6Bhxp1LUfQT5",
  "key6": "2nJrK6FZ3P5YtwP82etPvVwh745cKbUpGHrFGWFbjJAHLcgBnZCDAuokrchezREFBdM2xZx55TToDqMU5WQ9rfJD",
  "key7": "MzTuqiVMoJFTZmhEvUoMxZ4hsobRWuzQTAMSXj2uS7rnmNTbXBPhadv3ZQX5GiVtDhx7A6kJGuL6c4Rd8J2rqoj",
  "key8": "2ZG1Ei8QN4egVYHZXw3Emy83soDpVK9xRDMU4EvdG5o5zYZk12kThnUYY49nkXmCAXBeaUwo8Zug5jpVaRJi8d2d",
  "key9": "4xyJgV6Fw1tHv5uAHauJ7EveVz8WPu8WJgWmUYgicPjUQ6pxTvdL4DZxHq1J2Wxc5uGLLD7swACpqYXt1JcWxh3P",
  "key10": "2F2otLS5JYmCfFCftTQru2iTEbZxxCuFePZZt2Q3tjggBjaC3WDrFDrfu3KZfk8Fn5qa792wYS7jWKEdBqXamvxV",
  "key11": "25ct2LZ8iA8wqiFATRGubDfQPJK4coSk2hfH5jcPQSWmUEWiTPbaR3EaopkBRRnuFbbT9M9yhMT5CvSh9t6gERWi",
  "key12": "S4s18jo9mgJDeKT395YKT9xwiPvd9q2cPLwSowbxvCD9KM9yA34EzWesY4sfbqkwS4uf4KqZXRGFKTg6QJ8tVUY",
  "key13": "3RxJaQEieRM1Ei6CarBdt1ARZpqvjZunXhw8vsnaxQxy84yXHRoEFrbVu45mvMPrU9aVH4GSP3YYYFUKJ6nXN4zA",
  "key14": "5AgUYMRYqx8tNSWm5FbWEAkGMKAxU5NDBnSGBV1WP5xWrfZ2UMiNbKAFetEMrY995qg9X8MgbzhM6UN1KGFG16vZ",
  "key15": "4z2oyP1EAZMzsJLMY5Z6o9Z1fzaLBN1KDdkiQyKmbWJLz2vfVrA8dXj3yrhSP6tBoofMkyhsJACMyRSX8gVveQFf",
  "key16": "24n9BEsPHJuq54anmErqpTGghhwGMwrYuMGphDEQyPVTW7Wkd5ktWYYjJQj3GyNx1pq9rrfhptecDrsgxPDm9o1y",
  "key17": "2i9YfvopVWfqfozPDMB28xhfhX8r1EZ9fA6FiygWjrWrx944AbjsCvUXvVeRY4X3h5xYRj5LP8bejGaVHfMdwVmn",
  "key18": "3Ged1YziNuJRskDAe8ma3GnaK4cRFdiK23M6T8TDUGHxW4tp1tAW5eRuURrwxfgj3zfrur26f6swXbhdKw9mQr9w",
  "key19": "3uEwiN8LRKEVDgLytHYxp3UA2mZHrLcYXmuQh4B9dzV5oorySCxiFW6eSDiWM4FNKzzksZ9MVrQ7revsW3768tjb",
  "key20": "A2e2X8cVSAqv1YLeuP795UtrEZLJzDqLkSZowzzo6soLUqBFtn9shYmMHfNA6D6XCRWyebz35jhtTPyj4R6ckEs",
  "key21": "4pJ12eFKDB2nyLPJN91oKwzS9V8v6Z95zHueHQP4ty2AukXxXYqvxRyeee2XEZtXztqkMJvkjq4wypqQKD2bi2f5",
  "key22": "2CdGv51wG3kXNnw53XhJcnzky3XMq36nGYrUe3ni4ksP35Rwvirr46hg8XoPArUc3TcqNHYidnx3DYfaEwS8Vtjb",
  "key23": "oxUNz89HqFSS38Mc3KWRkjRrsixM6ecBpgLPwcJLApszr1fBdAV7JwUiFXxi7x4qP8YF6f1YVsgFJ8HaoFkH5zD",
  "key24": "2wooAM2UWMX4n7HokVDVmaGUn1uKhhoAeXt8d9jHn6xvzCKYx9LgqwVCpgMSNFLrLbcKvsttWQpzBtotQXDgsC9s",
  "key25": "2ZHUzjZ1FD3ZKWuVZUWR2QvS7kzj5yyhUbjno2omQug1oN236iPkjq7FuHy5gRuW4t36uWVM97JwQdWQuTpHEkSM",
  "key26": "pHPCiwK45smzse9JNn7PbGutd5YTaWg2XxuNiAoznXj4vgHDhkxM3GvKEqYzvr7nvPDkejyt2SWApAswAtKnQJJ",
  "key27": "bq2dAbL6tdXu2PbsQu8S2YimQmGPtkRcWXTZZH58jCdNVPuXSGMPCvtHU6PYKycc68JhRrUTv3KfXRQgWCdS4k7",
  "key28": "3vSjBxRpTcnHMmEkXTPbwDxXznew7J7TjWzDJLG2db8YgQK3VTkvEDZ1UCJ4Kwtfi35YspCkuGRSFxfFTukAKRBn"
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
