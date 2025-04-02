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
    "5YyKdQ8d8FeKV9ka6CS4NRTANrFqYfjjdg89otUFkZVps7L32ArwjqWZN2zQQorDgwKvkdx8kfPE1kpz16foFFzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46pxjhQoKzjpSQTDcNzXL91AFbpY5Tov6g6ozkK2SoYAfDuJDoWWCRXpFwZ5Wcqw1CXWepRTC1PMz97xJCoFkNi2",
  "key1": "tTwiySns87iqpsikfFWqoGUF58LDFRn7AGfAtKzeuK5fYDN2QfqkG7qagJgnfjzAVc5dXMhMFT3Hb9Eqesvf8xd",
  "key2": "PD5bkVH3JXgcVJyrxFvhrPJeWK5gApgQptE7CjoEVXxvbKgnNUnovPfsMyfE4KXPBSsVxtihjqLgrSpmy68kaYJ",
  "key3": "2frrwq8YBNVoGWLrkWvsJhmXxUWLhEzQbksHdex7MppGSfn8G8ZweP1gVujyJxMS8eH9FrYbrTZgn8sJRtRFrk8a",
  "key4": "2iZVgJCqqiZTVvrBpJeEizR4WbuFpumaKvFmqHBdYL2MKtGqn9QQ6YWBdv8n55P4b16v4KozK5DTzhA2T5e9fxr1",
  "key5": "48FbeqQ93qhRYrV52Rz9E6dFTUEaUXU4Ci81TGMZfhgtrjdjyYFfK7DJa45QhLBejvPKDpM8JiodUY48fNag9Ksw",
  "key6": "BMwqsppGz8a5iurVBfqZdBJZKvuenRhxABn4QT8vpv76GK9qngzDDPdoV5Au3HjkyiBwYX8iBME1EgFfWJh9P6Y",
  "key7": "4ANsLHEhEzQ844ayqKZ3by5yjz5sPwFCLZxM25Gp83j4tsuWw9x1oA1kGe4ME3hFDa7Y7VCiDAnaQDJmDST3xtqF",
  "key8": "5mLi2PwNqryihwnFbpyRpNsJpSa1XExiNJXgqWbreHd71jQwdkJDUoWYWPkKaNqaPGXNiYbGSqryKA4zBwq2PKzT",
  "key9": "2CV8fThKGYZSNFcj6zm9M7j3tSz55bqAErz28tyPg3zDF9LyyKuh18j1acJiCPDDy1aJUFCwAaTCUBVMeZ265uaL",
  "key10": "5s16Y66vH3Qgn1dbHRLkTNxohtvbRGKmt4HXpNcGNCdsWsJ1DsrXEphjZSqustgjrnfycvmotqFg6Vam4PNjKqDN",
  "key11": "ejGKyq34W3bST2EoEydu4P9sxkWSjE5YfjYzEDBxMTE1brkoiencA1KHkRQNS2VhUG9wmo9b1zRSutwP8hQrDzR",
  "key12": "5SkXpSP3u8ZZZXcxdZLJREjjpfJAJ2me6LEnK3bQKPPAcMT571UeU98CYZgrUcBbhGNvpQv6HNxy3zedsy9xALXg",
  "key13": "4APYkdDi1jHEakeiavrJnufC4mwn9q39efMgJbkHc1an7K8zeENZvLvJ3mLP1JSdZeJxVbLkudCJ1tYmJzoonuee",
  "key14": "X8ab2zWY2dKPR8DPALvY1ciBmLkyrh6Fs85mxLR1Quyn4ANhugPSJwXUBVx97NAdBJGzNdZKhvGjU2SHfiC3VgM",
  "key15": "5iQQpMg8BhP16dXZsiR5jyxkf6FW2fJKcYr8VCVgNzHzjoUvRohfgzDVnLXJ6fB3f2MJBwc8oPAQY9b2omHmQYbM",
  "key16": "31QYjaDKX5C6kKPosPpZhqnocTocsRpf9cxsrnSG7Ua9Amj5wwmwbvEKcKvtWuWbfKWeWJUK5Q5wNUWHEoNo2RoS",
  "key17": "5vEUwZcZFFSXo8pqbSc3rZAt27SKQdkPNzwYsU7TQ1Feqe3yd5TAvK4RWQ36F7L1oJB1g77WVehWTpw5fqKSrF6Q",
  "key18": "5zBZCeLs4hmQwanyw8ZSTTeSLFmTYThJt2EsKg2kxCgezFZkZjrpWuhXkyk8n8ggFm8Uub5ZvWtM68G8LYBPtHoa",
  "key19": "E2fa7KD7y153Ap1JWvkaM7iQvajkVoYkXd8ruyYen1BRRgXbY1jL3BAofVtUHx76d2gbTkiwF6xNaCxKrgyhBL1",
  "key20": "5c6RpFE9Mi3AyTMxwLs39qU8RXadh5MKQUPHKBrk2mZ5ZvTa1AuuyDqX7eDw4eboV2UCfJNw422JSSVCaw2pFHM7",
  "key21": "SjuxqiAh465aNKqp6MCvJR5Whno7XF1DFk5eJ6xJZmweNQqw6gkAefHc4rsRAbfWFbuXxppcodBSnMqBgyFe7Lq",
  "key22": "JvYfFV63QvgGz8wciToM2sNFtB4APKQ4mY8Y6xgq6s2YrFWmWBXNeiV2xXVoU9J8AxecF1X7cPHg8A5gDsjT9NU",
  "key23": "2KX4De4HrAbVMd5sFBcPhHTpJ2djimgp5Xz9bvfzw8BsVUD2ASiqGmYr5cw7mz9kPgRquBHDrt65QG9MZ3MQs6TS",
  "key24": "dtmGBXY7y8odxLAU5eXe4MWLpKnPshdeaGU86hPDHF5iZvQwQuu9riNCC8NvT5ThUpGMHKbRgPfQmHeHJg1kxCb",
  "key25": "ec8qaXx8upKBqvXCkUze9Uy7fHDWQKmLaenAKhm1hjGaoxM7DNXQZ7rFB7wPrc6mbsxdQeQyqr27jYY5qVcZjRs",
  "key26": "5UWLZGjSQHXBvvpp7SUQSKJUKzuHJeFaMsCVU9Cp6ZCQYQ5kdgyeZqQHsSTJpw3WpihESujgxqAMLBi8ESFqke8U",
  "key27": "rDUQ8uEyAeeC95HB8TJnGFD1byF143uS4wMBkmskeCzdGpJ7vbawxWc8i2EL9f2GNqwecNGVikweUHtGLTZSG4S",
  "key28": "47TFv887fBpf2fe7xwnKEwkaB1AuwnEoMS9h8rQHxiA1NdU95yubehBTgRhAxXi5CRZVydxxxBL9fXTGsJTwvczJ"
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
