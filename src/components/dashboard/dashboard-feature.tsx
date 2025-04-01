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
    "2yJhzetZS2G6U7zrhhaby5Lxpw6ot8HZAV5xztpfqVJDAm1byTCkwg6SXiNtZZrxvGLeHHX6fonAizf2td5PNDXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5wq36Jae8N1N2uKA1UiGDZhwR6q6z6yrTJ1iuRhE74U5tZ5wWbxy6oS1nM7a9UKKngFLRgs6JkJNq7XMB1Fgw7",
  "key1": "4oKDH3NFirBW9NuMRuULpcNT77fYUfkSZCRBmMe3vew3GbUsjugWy3SG6QY3xn8DRFP33za53RZWG5snBewXVBXZ",
  "key2": "42HzipLcm1ieQBKqRNszR5Kv9S7MijjbEN3Y89Vq7afN6xazubruXiRudiLeTqrrfL4WQx4fNhuEF3HnpjMiVvH2",
  "key3": "5HGyuY7XZbEGDH68EThRagMBpRENHUmyE2RFrgPFnVZjU5uCaxbUURwCDNBooEwwNL6XJPvBqcWusmxmxQbBUK8n",
  "key4": "2Uk5Fq3ejFvguk64Yh6pjdwP3NqDHpDt8zrJuByUGmfvb1DYzD18u7rjKbuNhsDroNnre85tKr68SkPmVx1ycWNu",
  "key5": "2Ugznhekq1M1TGyeQyWbjc1MAJ5PQty8HdALHB8r4mXKinZQWKRaq2sWtxZrUSQb3SEeobzFqEinonAcX5zvRYht",
  "key6": "4zZp19WCtBmRvKUMoHHwmTR7xU5xf7SMUd2LdVzujmYRsB2wha1Cw48424A4T9Nu5eJgeK9RhPnqZPz3d6En997y",
  "key7": "4azTAFe4qAWGRwmSokuNgKwcNmZYyaqaaxhWmwT3y9ZHaRcJXf7njNNL6kBCo1yS3J4PTbpAjxzRwzHE38zqNgHn",
  "key8": "5o5fbqLWwDntVyvJHsWFjzPguq68wmnxLAW98bHGrxtPwaAXVVwqZnS1S8N8zZXx3kbTH9crsZi3gKPwHpKWmE2A",
  "key9": "D4QuXxYpUiYdWz3kYTTLKWWP1jDcsvtM7G2dYrTe2wvCFUnRFJ6ndAHJHaH6a5hTJWGfFMZNJRjWnY94Rj6fGFC",
  "key10": "4hB2cBF49S18eTHbTxjz7nGQHzaiZj4vUAaMWoqvscQY2EmK2hzskTiNBEjCjEowDn1H7z9mdaobYSa6X2S55H19",
  "key11": "5HpkkPwj1X2i8suHMyfPy157rPcAUzYK8oc1rf5KiA8mTCUi4PcKodfUEmXM54YNP93S3FvCA2mCtUG5dU2wSsQt",
  "key12": "3uwHNPDf7H2xn1W3A2NkfirsyE7mSaPNQHia8yVsV5AhWnga4FfyVZ39z2vdrggFL33Dz3HkpzuaPHb5aPyxmgfV",
  "key13": "4qCTBJvsLznooEk2aKbZKQFhs2sP38WsPfA4QT8avFrV7TxXrXSUjK7oFRXCvHKeTEvvK2LMks5MbWxfifwjbro8",
  "key14": "21BFJA4C5fTEXVvC1FgXvNnzZx3Z1ze2ghe1HzktUkhb2Q4YWd6byzDJX4PDLFRUW9yGef3Jb8yRzebFsUpd4uwW",
  "key15": "4N7JFWKsJN9nyamqo5rVyV2adUhDWA5jLJeQbVFxPDne3ECD9CjLtmyKVv9RodTRbbCkLA3oRqgYpGWh4QJMbqbV",
  "key16": "4fVW1PnB5jKLX3UEYseDV7r3DZi63LtV7egjfwvKjCBX2hQk7Q2FDg5tuJEVD2p3x4FyHVBG2NF8Get8WjTxWHso",
  "key17": "BqUD7Bi8AvXUs5an8PtvQrzv8vMz58EDxJYVTdBj2o6TofAMbAJ9eK9nDvJfQ2gT4BfgavRf8WQfAhrb2wErsjn",
  "key18": "YTFU7kkYfRtscd3zMPkpSRtueumcf77FtiKVKpGvtW641QtCkHNHeF4cgXCBEVA7xkr8QLvsJYJECwVLBjKmcVd",
  "key19": "HqZf4sWQnZ7FkfK3JYdeJNoy5rdCWY3Af36iCHjDezyinpFhGDgwwcb1MK9B7GimbQT5tv6MvHVA49prSdMWzgi",
  "key20": "5hJZ7D8ccgKXbT7nBCAbTRXBgMQ1BHj49mG2AKFevGwXTAqXwes7vHCS1PXtD81koECcuzDDRrbZq75cLHPcPoj",
  "key21": "2fmoB41gd7tJxkRF1LUX88ZsQhvU5j3w7e68c7zHqj1wL4Q4zBDGRkL7m4zPFLuakfP3X5Z7NmXp3LVVk9B7YunR",
  "key22": "46f3xTnwjih8U3LU6Hrog9AzHqP6MxkQK7fnTUNB8QGKGt9aM8Cs6CTsnz3yQ6kpyYAq9juRTbzMZ6xyHSaBJ5ui",
  "key23": "wTU2hXdNsByi82cvPimVQHsJv8XhnooYxuJC2PPzyArfjBHoHpsowSTvbuLALQcytZcH2hsgDNvCCXhbLEWXt3q",
  "key24": "5owY12e2FzM4cCV54MzdW5zrBiHF2mgD4pwXwrXvBWujzYdUcbYsdaEkjehKSJsZcp6MYPXvfzeGBPqqFRqDJyWD",
  "key25": "AMnn8J9fUfTePi2kFe43BQG7hmuGqTqoN5RmiiGrgFNrSu8dsTBx6GLSFq7uRMxANHjLA2rQjp78YuG3nouKJ2f",
  "key26": "2ow1dX6RZrQ4y9CsoKHRdB4PLV8ZYAv837WEaVazUK6XyK4NnaKyaX2oNmYdUwojtxWmNEKUxAK1AKXzsT9Yj1nh",
  "key27": "5pSgyQJC9XzY2xFq2euRHe6GGrtA4m4JcuzBcUjc8qsWjUPHNVdtyz8QjxKyMJVi2dFKMv5eDGmnmU2tAJquEKA3",
  "key28": "5YJ34KwGTVzACBFQ86oKWBM2iFM6DxLWR3f2cihvVZ7dnxkWZBi3ABBmfYUgiJCm6b1hcRvE3GSLWbjPng2b7vdj",
  "key29": "4FFKWSqkh7mZ893ksP9CCoA3e8rU4Lvn6Vx7kH52c7rZRvpuquXTotsa6DHgxyKqbrCoCfqPWVzAWxDoWM49iuRX",
  "key30": "3w8aF2rn7SkkD3i23F6h27P8ekfhKutWYLQnZ8xq3Jpzs1HqVZ4JLcCBs99juZFM2UVKBvZst42etb1uiRkGKHbt",
  "key31": "5P4GjcXR4FfnBS7xxoMJLmeA1BvrWuheZhGDJWvjQjcexTUafnXf2Vv8KqkcSyLRqzTco6aHxEv7pARizwmqHZrQ",
  "key32": "5j68xGfrtMJW7iymcc9J9sAPwML6C1YGKMFy4Ziry7HYCYrKfy679RNSXaQLgqoScKAqdhxnNGL9ido2yysPPXhX",
  "key33": "3xS66cCpoXiFmK8khwV92EwPaGpHxKniVeamu1Wg6aCJnpWATBjsydMU5U9VQwJ55ZoFCEHP2KRVGzFf1SDWUAdG",
  "key34": "3iKifbHmbNQcv4r524VDbZsBmjWSe36AtQ23Qsn9F3WLuC3iQshFFmmwm766JxFB3rsMb77Rs8vrEowb6wNsMay7",
  "key35": "2zidHxh2GRTLm7FsKGBExCjt9QU4wtMWBAQuj2fHViA9Y8uQMptsxUUbhKX1NyA3BdhvVFthYRKq74XxwJypm5dE",
  "key36": "2e5rHDbXGG1MsuNqDwuiZCwHjn2TMefYWbvofv6ja4vbo1cDYWmGA68FZbGtM31Rs1WXpow2tnKtei3K9GeNKomD",
  "key37": "4LP7km5uJnkGwVQT5bM699nmUgsaQFYNwuYf73rHJHZusKtMX94jY63PNT9gpxr7fFqNuhfvmQyRUoJQWTBGikX8"
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
