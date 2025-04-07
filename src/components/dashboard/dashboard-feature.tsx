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
    "3tor2YWDAFKQ5PjcgZV9b3ZaM6kJuKz7MwYNqcqUrVkf7mg9tja7bL8smRZBWcY1WGTa1qgWJHER7UVBHkS1KhPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tnxa9qJQ13evA2pSpRxCBrevxnDD4231JEtyCWLAiEQ5hQDciaR9fimmn3ThGsFNV5t8S3jcBSym6npUbnvX7z",
  "key1": "owqxwDkLb9Rxrt3GZHW5AVev8nUVU1NapX7KCnwDk2a5f2zZVkHoBkRt8WA8xvuu5bXWLq4gd6CQq7wV5dtiLZn",
  "key2": "56VgX6Sq1fL8ixCKQCkZzcp7jTyF3xzJRNHFumbTHr4FNb8NpohF4zEMVomYx76qPnHLMyjFB2hVR5siH8YgUqdc",
  "key3": "oCS5B4JWCRnPcvFs7tF2rvZHFWWeT5PQDfrrxJrgpZ959ZJJD4TYAhqbzRtgvmePb8J89EAe2cdDgrC6fzB7sKy",
  "key4": "5ygZSCenZggDV63fv4tv9Dgz9VVc7XrEeiU1oN59fKcNLEXgCio5q6YJVjDQZ1xPGhDkSCMqkQaoNsqW21acXTrQ",
  "key5": "2oCnMJzbhQwvT9U8GraL5xkYmWsbnbbNJwGkurtAqGBgJ2V2YqArCteNTAXyHPM3apgngbq44QWUcgmjKnHHxtAk",
  "key6": "22Fpj3AKZidNEaeCvNG5H6LqsQRcDaGtpjxZfaDUYU23gPhbgnuzXg7PJwEXBBrCMMhQsc7q8TQmjpt3yQKr7M1Z",
  "key7": "2CksRx7oJNLGzoA9Z1Wk6iKNHf6DkJ3ByDqQeckv6zMzsz2piiWUsh3ixpSHUDBNCBKuW9QSMJRXibDmXRscV844",
  "key8": "4U8XTcasMVsxNiS4A5mMi1xub4kzXEC1UXQMYBV23ZBftUAMqrs84PhsNR26GDpKuDum85YT4qa5yQt9sQCahizX",
  "key9": "2aLkXn5YeF9iAeK7DVt5rCixPdQgBB7Srd5d49kMjQgRzmhUgcp9n5EwmBwvd6FsheNQpgmPGqWK43dNm24SPtSG",
  "key10": "24y8qWgjR9VR92kzeHjRoFUcdADBMh6sH7k7eymanWeX4dEeQPMvuk8Yc1zcJoyH4RMsfgDpjCiy9B1p4WmCKVgc",
  "key11": "499eZNSQTNdeYsnyMBB2zqymKEg6D8UUCGhdMvbDRmzktT1XqNBPq6mUVghQEqUz4RWvt6ZiA98FXnMkoF3e8XRi",
  "key12": "2bAw7Zht9iqLhxyFGrRkQkAbKfaG1cewmmkJmn6n6DPwEagakKhbThTEhBvk8tDJ82CpWzK3WkLfJwRFABaYZEDD",
  "key13": "3RWYwR5sm12GxoDPSNGQtqhvb5SqnJTA2bbL6GiqZVoT1kPXL7tcE4UwAjZJ4hDkcWKWpcH8aGm6esC4HgsawqdE",
  "key14": "3zAVy8Fsekb6443VNtDbgC1HU8nMxSoGvncr12FzFw7fZLELNFG3kPzjHrdsZx1mbUMaw8mzYht2RaV9GAADZKis",
  "key15": "5vc62A6imHnZmtNVkVJFnirpRPUvMAtUEuaf8BHrDdTVGSX5JzFWJyGrboajeCCk697kwoKDw6HmVja3QsNjjrgv",
  "key16": "2ahZkn2M2cG6xYfJUhnyr8EWWBcLWGnSuNT7faLSTtAEYGfKAFf3FGuxPdaV3bAh2fnC7kfqtcp88zdK6oNmPjzB",
  "key17": "h2FEnJzDrsGHvUp4kpmouiwV76JpH8ieSuynAyi4MeDjTMjF3wp7WxPMrvvAUp1SGaPJ8Htgr4qr5NxuNxQUPsb",
  "key18": "oBNdyLdoWgEiTbfCcWiTeanY6UasXjeYjdQGrBxPKwemuJcDC7urdMYqH3VPsjoYWALY4UDcfMZRThRSKNRFu3U",
  "key19": "B8VnaGQ9YWvS8gf7wTmZuT9tHScrz5UpvVezw4KST8AwGdqp1DpksgmbNkG8St5DTsXMdFQ8c5Lk5qnXLZoPia9",
  "key20": "5QQdHDeaUdvKMwEV19Frik5Fwh4pVCZKLVnG843F6i9RFmAbUQTQkvhCRhEFNCfkYMAV9MPCjguaUMexXDy7ru68",
  "key21": "5E6B7PZq2HiEL7tNLRx1gqRj6oRMWaLm7xZ3tupb7oC3R6bdgBKukhhgEruRmf6918w8WADLVFKyxrpsSKwFYUAP",
  "key22": "Df7DKWTWmXauf3XUwmwnaN1et4Wj7TYZWZWpH7GGcnnxm1QN61YGw6oQabF6ciBvUv3JvK25jJkDyKdKVUxmgQ5",
  "key23": "4f7x9vCQtwWMBJ9iGzEC8sBWai1tHzkgoTA2j6S67WYwBQ7zgzVAyrB7dSUg9qQnAcAnHkwNH9hD8AGQu4K8rkt1",
  "key24": "5ikGB6SWroaobtBeiCBZDemQNMW4j14Uh66qiaNr9QY5YyJdjznd183t7h4asaTE3QVSwygs4HYLreoKtN9LNf7q",
  "key25": "3gT2WGzLAARAHTg4zpfZNMnxoaD1rurTREzLqWjmCpswMc9qabUJ7joL8i642fnWtxuvuiJeSjGdD6V93RjwEhUx"
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
