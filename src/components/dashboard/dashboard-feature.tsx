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
    "2joFYQpUkqtfsuL2KCdDkpCRwwkV8wKAM26yncJS5yh5Ywt9F6SBbpZv5XHBsSbTssAjjmuLZDEjBVd2bieeQury"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65iH9CtiQq5fjZrhsy71z6n6rytWAguJJFk3RwKrZeqbuJKDHxnHfm6xF8x18ntnQgMzTRTX3KD7sVQkv9DobFKy",
  "key1": "4JfsGckJqK44uRaiyywwVENQe4FSsGxdZ6PnJUSeZZnQHBeijXYCh2Lm6XwZhzVtAoUWhX7K3DwiJsopRzcAuvvR",
  "key2": "61o2Nd41VAzqHJhqFTYSzAXyUFT2aLPe94CaWdp24iRTVEh922Rkwk6WoMJZvgae1pRR8vb9dBpTko7hrv1K7hov",
  "key3": "3P9zDTmeGBDMttF6goUduPAXAETMxKVdhN8fwGvj5pvxnHD7Coq49osaEjsdByJCgMxbhHzqaZUbcgcAGDhgfMix",
  "key4": "3WYjDSWwQV91dp679nyPxBzHrU9NN1dHMbtjKBerQi5TvmhE9rnHHRdVPZgqUwg2pU2XYCHzT2TUCkCbkcAA4wtd",
  "key5": "4RNrWf9WXv2Y968861eSjLmYzBjgLmT8v5v6ppKVygHvhKwzuuDUVjggGBS2Tcy4QRrNJHXSHVMX5Mg5cWJvvg6W",
  "key6": "4B7YbVEAjQ3uN3EFYTxb9U56G466o4gVMKJBeVHCqdmhuUarCtba1MsjSZEcLyAqeEdiGKonJnbEfyZ9ySopAnMU",
  "key7": "3PrfzpDcHVxgq5xHrycA2nucF7e2PubQUDnktBZibVH8acsWrQVE5frDUox5vXK9Yow7H1oPRgBdPYE3h5TN9Q25",
  "key8": "Y5EJtY8w1pvQtHAQxFZiJGnw6HKH81qYZPWKR7AcfpWfLdaQxAx4eLWpqXqDQBss4Qgj4muAHXauBTFpsGMQj9x",
  "key9": "nFqf3pFpqfPAsCKTjqYN84ERybVdq5iJEMa6UJFnCJGLM9NRPyXW9UUvUCUGgSnJ4j16Yu9rqWPPY6E5gSVmZee",
  "key10": "RVJY9kJTrdhtJdzFmGTPH6xBEugLbsbsMBKmAMJG1Sz2jpwsoGpSdCcSJmkA7fxbVV5GQ7zWCB5mdUHqZGc9m8B",
  "key11": "48mTvU9yXAtxzD4JFJixNVKo8XDAAhKfFeNoJ6dYUSK5x5D1tkwaD1rGNrmuavWiACi7jcpc46DhAbKGYcqWTAMS",
  "key12": "5EWLYM95BA4rXJm3b5rvPA4CtBnmS19gRyz1RPcVzf5o8gCSMtdVJ1sria2ZLVjDHhsnRspWKi6dEhEa32dZhxnE",
  "key13": "3EMukG2d9o54VrxDTTwSx28PvXstn4Pp6RvFeti17noeEHcghZ4Wfb4zvZaVo3Q9yPGAy8451oaMtkpWizsjL9Pu",
  "key14": "5Mb9aWAs4pU5ViF3vy93efBciHTcR2DeJRY93YbQz3vEz1BsHaVukbg68Cc1sEjeM6gC6AeYcAEc4kPnr2SJ3zWe",
  "key15": "2W4zToxPvumoTDsK165mVdgHLMgkMXKYvWCFAcN2XC8TK983C18RoiARnLFzeggbdT7v77nYoyNXCkvrmHpt56Vq",
  "key16": "3kQsRTaMjkaWW4o1aYqpBgYBEx8UN2wtsRt9TEypWQ2w5uHS3B1Ts51ZVsNK6ZY2FEjGdWaCeZZxhYMJpn5UAH9N",
  "key17": "38SQaW9vSFFv4UDi4nt8BzhqUppjyRZzU9Q1r6Ph9S8HEghrBR2UT7Xc6Z4tZoTbTQSHRzMU8SjyiRLErm9qpyH9",
  "key18": "3UMK1JY6ojcNNAwPGffPU1q4SwbHsnieheRUyWdZLB4THsy84kPrhWBY86MnXfLeGLbrvaMNK8sFdTTFwSRJPns",
  "key19": "26RfoEMbZ66m3t94mJvASYNHn8bprLxscqBPfvNU2kipXPWUYUZFEaT8ab3pVT9kBrvXPrwovR8FtdEse5FDwXNg",
  "key20": "3gLNczTdEGTfWQrcp8LD7s4bq7S1fGCrZdRzRAousEzP7ysAKPh8PoDKtaPNnVgZy6VMH4XVNrC9uGRtZo55mBNt",
  "key21": "66h7KEfKw1JCtZd8E6b6hgVd7Y9j5rKq1bpZAn9XiCoEoVEknhPkXYjjV2CnhWX17VYa5WmjZY9QZAFoDahvZta5",
  "key22": "64GeD7xnXypULC59A9Up6ZbKqVwNPyojZYpqKFHDhKmdQitYL1BRHrDmSc2wGwWaJ5sgThE9XfYGP8D67VELZH7G",
  "key23": "zo85ibjzqAZZBCSFiAQgyDRCtFm8dVLGH4ZVfgTt6jAEo4eo1SThnN7JR38qEemd4c3PV7VXzmikprUqA7ELn2J",
  "key24": "5BGhmTGdJ8EEymXEKzSizu7E48tttMSMbJCDssAQPUbMqXpExM1yPPtDeFebJyxY2MUn7rPVrJwrRMv5Fn9oTBGq",
  "key25": "HZcFag1zG4CrbynfvocTKFU1uQnSdqN5WB7uNFm9vNWMysKMvSj5ZrF4na99UTSgwtmVi9udT8qJGBQsyXNCC6u",
  "key26": "5yyi8NLqsDyk1DhPYeiGxJcvhoeskoxBRdpkWShzrFo88CCAXMkCPpELcNUL2KzyxnUi8UJTmVjWCSVTC7mgzbDk",
  "key27": "2Sfo4LpZGCumATHDx1rNjMgtF2VyYZNrBDosUY5suAMsUedWhdWKHKU21qgjbL5boAY8TBu2ZMf7VqtntDNnGkH",
  "key28": "5hGmvnqwndNoCjv3F6FdHdrb4ritPQA2bq5TPUHtNAw9SjnxyMU2Q11qhsoe9fy1K2PgHjiykMyHWgauGdcbhMkw",
  "key29": "4fCQRPkQwomG8Taq2KbNHRjKBheqP2G3uEBkUTYvjG26zRvyKyHKLJqB7i6xM2zw16xDdz92vQbrr9eeQJcRfvrW",
  "key30": "3KEAtEHtn3MigDx7spTFybtr5cdBMb7gZgDLSkqKp8ZyAVrH417inWy5gBjgvAH92N98k3hGtQHDwGsTXHFinpNc",
  "key31": "rKBxse4rhbrKhFRHuhijo4bS1d6HA37xhqdXa6iEGK9wPPBjUN9F7brJQVsPwxUCeVPVCXt37KzueCQiEHQgdYE"
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
