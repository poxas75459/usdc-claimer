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
    "9WMpQ8o6cGVudtXiHzxBxKN6agaAQM94PzQM23URpMXpGBhbwW4xbhKBkqwCJjzuNC3iihmUCWzhQVesUY5rfgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaTCg27geBZpzraaRDmS7bsy1wFwB4SZfYUaTQ9WjABcciKEGRavRdqur4UcCoKhZwAPPLoJ4EvPBxv334NnFgT",
  "key1": "2UkecGkBNdTnHkg9JgiwSZJbUdjXy3BkqvR5yzmrkMnNeoxN9t4ENwxTWGeH6oSjnHpJQcyYzGqNbEXuF54fmbdx",
  "key2": "39Pop98cAW7FYnd4QCT1EcZ9YmXv1zYaX1JXJWNteFoZLsTeLr9SxYHSjFutpLYK4URRaPHBHuxezvyHWVnjiK4R",
  "key3": "5M6Ujfwv8CkVTtiFjivPTkoNyzb24R2CWzLnaAL1vJPhdUnxSR5jbBCD5NZ1waPCKLcPdT7iM24jARzGTwCJGJTM",
  "key4": "2WHr9TfTQJwnafmYHSmeVALxwyVVVLNsps3qwqk1K2Abe9q2sX17EYGQ29NfuVWDa5V84kzNBMkXpezbmFSo1A1R",
  "key5": "26jdzMWF6hotZrBFikNUVXYDy1qj6t2i2WHaurmqqMSU3h2uCm7uBqpRGt8bPuV6LmFy5C49kTUGvZWePnuRRqJo",
  "key6": "5vUt4A8JMdmos1XsToeu3qtRCEJ2bDqHhbR98s2UGH72EuyFuztE7wpCRxEyosAEJ3d8LfYX2QvoKdiQ6ZL4CDqK",
  "key7": "5wK3mGJSgSJZFLhKHXnJ8J22yXZ6FsaFg5aNanehMuwLXK69AZGdP1FKjcoD2Gj17QGaUvPyRZL3eugLcRWpo7TW",
  "key8": "3dwSXr27j9hHGQBv5rjur7cQaQmzgEMkmf23EYfU4xYBKWZVr32BoEvFqjDmWRnxGHcfMj4naASDNDB4mARjfgAk",
  "key9": "4b8GKFenJW9CDrbJQL8Q7qkniCF1yaDK7SD8s1hjbdMN6C7aAQpSwjRnyDKtVE8cVcxYe8nJjWzbLSMoPt8UVAih",
  "key10": "2RYEx62ovLKjRf68fLzgcWEggUexAYzS3UWJpLFFp7kDUwUKsJM7Jnq3fGMyHbF6SnivF2wq1Fkg1toLLfnWWNca",
  "key11": "3Atpz3NGH3L8deEyorsLQ5xg3fg5fXQXgSzu9Bi6sh6FLeGizTUt5Ad2EmraBUYitJh5TBSpFVHY3aG7k5NESQDj",
  "key12": "2T56SDP3fdFJzgrPWzK92XHqDcaZgbV2U6bzyAZLtcBDC4sqynTAqiu1chKcbRe7WNiJwKp2LQhvkrhfNCPoARQx",
  "key13": "3soF5tEjK91JfzeUWmmWeS5DCeKzrEVfYrqSvhYsENBupjGyeRxk35dub45gTeD416s6DeR5yg7SvDSK7XsYcbau",
  "key14": "5z42VZS8Zn1tCnPKMpYGF5upxAMu78TyFg1PK69k5tMgLfd7EXhYPgjd1gYdSDc5y4SXYZrKF8KcSBn6GSdL4u1N",
  "key15": "3ygA1Ps5orGWVafCeGVxQEVMoUxUnqXz6fkhxz5cDMcJ5JsNFJZHWTjVijL821BDeDvSpX3oYmm1SaR1xWiQjX9u",
  "key16": "2VncQLREN7z3eJNiPz4BMhXu9iJmof5ArZM1eUZgXT7jh3g9Eh5ZALBf8kmdjcC98yapphjtw5vN5DVMfdFVY1ZC",
  "key17": "xwttmxvoxQQmVJ2BcayZVaphPbwxW9EivFutW5dcvS2D2qwr7rn71WRNPW4qbnYHAwZjr2kH1TtA7Y3MKLWsmJB",
  "key18": "4zrJpMPoBVLYHZCXWp6QvTq1RntYznfyZt1iQtqQfRbQdabhJpYqYoiMVegcXXxLEeHR9foxWX4scCGPfKWBp1rZ",
  "key19": "4VZkw3J7kqLVRXYKNUm9WrYTRqLtwopYH7CKKNyRL4uaj5oLhTr2Bh8R9dzvoG4cCUySxgRGViNXsJkgpddC43fg",
  "key20": "g7FtETQq7x6q5vz2gcZ7sXH3QCmsjmQBvjTLrSUwYZqw38SAYRRPdTddUwwphvkEsRiRDrubQXsLEN6zEq4mZU2",
  "key21": "2pxB2w1ivHY7GNemKx1oUfy86SD7N2Mg13JqyefJogg54C73KqakYgtLNrdik9ehjgTkpwa1Ybe1AMSDK82zqZ7G",
  "key22": "22TB6b9Ke5dgYHVyW7Luw1zyjgU8jqQ5FwJA9jueCTMKeCsPJVFDYrhQbZigPfGr8ESKLJJZwQz3BJJQavyAx6ac",
  "key23": "5GJ2RACytu1K3SWEdE7Q6G8wUV6JS1FkdyVmScFdAR5EXSgQQptmsvwVFbmfwGiGTaHCazgMeSzEU6wVNkDjq94F",
  "key24": "3go6LFgFYt8SPKXayEaoNy9kR7XgYVb5dyXuKJymr41Zoi3mZQ8HdVwZnfGLYkGAEHozyvCRy2UptYEtCBYuzJ3W",
  "key25": "4UmMrRxLh23w2czUK1UuvK4dZzBYa69ipGorYUMhDRHgCC6FT8qGi4yMkdZ7VBpdc4Q8H2FTSm5nChSrfQo5Js4j",
  "key26": "kWdwL522gE3pRgzdcre5S1xUkeNNd3Bx3GxFY8jipD5a52o8t4BjBZ2bCebHYj9LvwVo9WPjNHBwjCzWBa6dfAJ",
  "key27": "3SqSRrBWd9Vn6RVEMqsiwGNU6hRzbxWBqTfzMSpq4vkxdGcoSAmLVVerEgJtDUF9ygRr9xcVRS7uMiMDupLTJF2V",
  "key28": "2xvK1S3PwgQFNJoLeS3xzv5ZQkENg1R2erzNp639KiUz2QZQWojxVc4EBYe52Hc2mSP9F5wgix7iEF65VXbwZKSw",
  "key29": "2FPzancNskL85a87kh7wfzUr98om7dzc7ATy1PqWZk4gHFU4X3B4UG9VWMXfdhvEV1XxAeTEh4zfG8sRGujHZ4FC",
  "key30": "4j23879RKEoa1qrBGjBxoMQi7A7GMiqDpXZFPWHVw2LCppFCcEb8TDr8wFa7M561QHz4vMga3o3BMJxrxKwNg58p"
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
