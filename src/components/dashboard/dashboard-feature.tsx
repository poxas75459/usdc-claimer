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
    "4yXT2ZnbwkQP9QiptWBLPb2aJQEttmmV2C97kmW3HhWMbXhkvWU8jnkTCWebFA8AL6Z74cvRY421P149LkRX2FrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kL7PzgP4PLPmHABvDGy4RpzALEZo8yTDr7XRanYyKo3hahmxk6KZwLJg8KpNB2waU8WNNJWqZ3ebh7BKMXP27do",
  "key1": "3RTNvWk4YVVaRKbiJpomHFTJaaeJ7iNwbLbipBL3nd1aFNHNpkk8h2av6vqpf9TnMh8VTJUAgtfuYkycH4ja9DJN",
  "key2": "4Cj7QksvRLVHa3F38WcjjWdMaiiM3K94SMSxgV6o9qGdDk1aFkmhpvHbe7svjJUv1S3B4iMtc7p1QA5mnDtJA96c",
  "key3": "4i4jqWGBEbboc4mUbWXWC7bj8M53uUctKmbyPcAYvSABUsxzQ3i9CG2qcEJ2iVFNc62nGFzjFB5fYbMJXkWaru4c",
  "key4": "jbWf1mvecPSUXfRmUSVdmUi7L2F4zAYhMxTurkbJDytHb5Wa436uEwMWEqAgQy6rBYA9ZF5ZKVFyBB1KdTqMmxe",
  "key5": "3qHV3mes78hUak1K6nhJNv8ZcFRZoU5Dtc4rtGqRmzdu1CmM8A9wMtzQAUWmgQmFuLhsg8YDRTWfSDGvkx3szs8V",
  "key6": "3E3qvWcJr276AMQCpmscsL9ocTgzvFbE1s5PLQJK8a2kD4DQUGZKF4K6ECzi6gNQoZanK87PjY8bUXdKeaijGJip",
  "key7": "2Hq4FeMtpGb7KLXDr66cTq63Xg4vFwUZCebTKNLUbPSieiz11w8F9pgHsCnSo1ZrKu8m6RLMbDQdkxSzKDtzWGD5",
  "key8": "2Csj1LjKvH8pKqzr6kz4RZx5Dgg3yAbjMjpmsiyDLwKUNJwuPMGN1kFeqRBTUGB3wWuQ8gK8bqbydaNSuhbAP6qs",
  "key9": "AyBhxxti3uXdXNurNgtTdDZiXT7Cfc2aTsNo31sF7imaUQVBZm4QSz1ivgGTvTcBXbpEDHKX1kHRpUJ9hMFWsm3",
  "key10": "4AFiZ5fQ4bYrPn2F1AR7rXyXEnft69XBJz92bxTdf2u1ScJWvvSZcnom8AE4uRSPb8Jd1nh8mM1H9g23CVowc9jj",
  "key11": "4uMygg1WYPzdqXSBEZWEa94UWVqTpuX3B4JWy2zgoPSpHjQxJBL3CvMX2DEEatbg3juMxSqzH5pxkuY885vY2Dhf",
  "key12": "3F1KkZZT74JoFtLiZcrRPPQUKwqm5qYv2krCAiadK9YiGatzoiXsVrrgS4iNjtyZgZh5kmQaJANB74c1Y1H5HCAc",
  "key13": "3QwRJWU8HyHqQ6Mbr7DNzYwiaHtoV679f2pE8U6vQB1kRyzw16D4Dfcoh7aDfV4c4aFVGv2bx4VpBRXVkw4HAhzR",
  "key14": "2QbunufJAwcbC4Bk1LjppT94fSHu5svhEBnV3zr2YxGAh44Rzoro8CxpQHG5jQumQ1nctnpZYMsZmmAEQYo23nqu",
  "key15": "2wjpCy1Wan1w7McyD6gYARdb8qjDDo8MxAjvUNJcBgFABxWZ1akDiKrohC7JtPP8KNUBmVph77AXn5LCieEHofFZ",
  "key16": "uk1np66WdniAxdJsig2RvDmwnjxC5X7M6M1kKUtxhQEwDVM3fL45j78c1mKT8TkNGjfvsbHDYUUQXuHKNxUDVWw",
  "key17": "3BZUXdBThMmsqDJMFKsYBhZPesmUSFa7dkzXH7QkhuJUnvrcHChwojmbJ86VmK5FBC1AQBxSyMEvkmRH87iC3hS7",
  "key18": "54QFV5cicgiDBgZpu6CCg6EFHH3RqfMkU9ySdKnUWv7vp5WhpavkFnrvC6wJesKGPnRAwd6hsRuF9Pog3u6ENqmm",
  "key19": "5dzKZGbeqpvkxLwTocgkDJckCfibtq79qkEuMEditoGk3ZhU4bh1F9zB3c5GFW1ETGQZnHSBezbBDKrm1MVSJsdc",
  "key20": "3AjDr4piQPTfHrUyVtr92TUNBiSx8iXqx4fP3ZMWCBGTLhmEPrVbQrb2egCufQwsGQBPsday9WxTPja4zf19gTEt",
  "key21": "gzcpiWJkkoMc1bB65YEt9r7niFaUDqBNPzGwBdaqRvL5QdkHyUuMfxSV8YyQdWe6iCdvTF2hPGicTYTn1ivpZ4X",
  "key22": "PjowtyNsokxmtKeLntrnugcwdJNPu5qRoFVAcV9o8yq7zdC4tUqhUMMv1cWamaxziXdyJwAVztS3k86BzMfGg85",
  "key23": "CAs7uHr22MSAmmAtCciTP8mzskt5rtcNWBUi7BhT2oPGMBfhavFZhgFC99so5E2zwS3wDikxTgDPSgBysBGjZbU",
  "key24": "3MeTEQvVEmyusHDj8ZhxoBbVyF7rDvpzGJh7a8jYeJon8AgFVMgsdJnt1EJsU5WSGxkqD1c2DuPjfqdKLayciEX7"
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
