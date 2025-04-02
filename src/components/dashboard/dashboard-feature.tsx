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
    "5oiWgLdtVEP6CBjZATyUDY4cbgNc8qiJmeHCcd7puec9e9Yi7eixQLkgahHAk1Se81ts97C2Au1f5SsCMJhgSQkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgbU8hWNXDJRAXgxnorGRyjgnANGS6A31SAGJds2fWLeD3oMVhGSxoUR2PgwhRgZh5vx3zQGoV8gQYwN6hdT1c5",
  "key1": "3j4JaiE3ip29LoMbUdXGREdYZSL2AxVSa72ngePm1NL7WAYqzpQ88Fx8SP9dC9t7buE9JNTcdXCde419mTzE8Pq4",
  "key2": "3uTgx3Zaf37gsFNvT4ANT2uj8L9HbfNPUtAAmKRSjVH5mRPXE7dhW9PMT5jogxbHiwdHzuGnvKhd4o3qrzdktE6z",
  "key3": "5vCR5nFzNupKuQV4EcJFxYJXWcJLYyKTYQSdtfmALUzj9wX1gcu6saj5i4tQ6r7jrTDzwwVnEvtgvjDLxzei8pwR",
  "key4": "4f61hTARvY9GMBhhPS6ey62C25atc2yxzwWj4h5qHmB1bK5cP6JPitumdL24QRqDhsFR39TtsUvb8F6c8zYuKkqp",
  "key5": "3iJgeeZAXV4FLwL9APXsRt3yiJqX4Eq4dfm8AKouAHDY91jXZJ5yXQAX2K6G2La4ZoiTgwmNL7orp8yRttKcVeBz",
  "key6": "2sU3foL9zyC9yiBf3p5vg7ukcsBqpPMmZLDxnKFuwXpAwnwXjYdw6EbaUTxvwtw8BUu6aG41Tf3may8Er5CSq38R",
  "key7": "2fXbycPTwrbak1rxQ93mCZueotWHaWB9QofS7N18qQjLd5u7pWDXDTS2qvRDZvXdNHQoiFqZR2twC8QChJKVJqnE",
  "key8": "3NEtdkfMyp3BPf6KUgqYNh2rAgf8oDAoEAcNbixfYg2VsEPmQ7T1e1Du7cXWhgLMBTsSu6huP9L6k2QkReKE4Lhi",
  "key9": "3CgCRghtSyZxu711C7ocLFUX9pBXYfxGaNxrBG9CMixHr9GEq7Ehnfv5uoqYxNPmSSnuRD6McHT1P3tNCVLEvF1q",
  "key10": "5R21rzgS51SctLuowEYPzJwiUzXCyqfQivriWgD1dEu4eVjZzhDkEtvJ9x1h6A9gmGAuDk9mUjSyP189ZrDbpWhX",
  "key11": "4euie2TJwspTkPboziDTwFuqNdBPS8Yzdjf5EB4ffvYuv5mGTWGzQKQirbMqddUv6uVxxSrfjMnmSKzmTC7Lz7Ny",
  "key12": "Qawu7WKBG47hyP4XYQaWcpWaMUyV6HBJVfpohawWnWEdRFxRUa7BBK9SmNjFwZ2MG5DHLENaMBDoeuRpRb2nBHW",
  "key13": "3oGzPgXdQxBMWuzCrQ44xc8nzb3s2BQ1tox4FXsWKk4q2QsMVDQXH8aELV6BYJidWxtLhnWwqYCzeaPMJLFM7hdH",
  "key14": "3puDhdRR3GUMGektWcZS6GbKs7B6iAvaX3KzGXTXFcgQ9SbKfxq9s4pr4vUGxLxqQjFAyaDxjfoDeYW6zKe82XL9",
  "key15": "3icRBdRdAJjhxRj6Vx3bW9nGB8d26t8zPtLgFkF8buP7rpc6BQPrboJEq6MEkn9THdiVjSnVoxm97oHjj4ZhSQHX",
  "key16": "5H9DdPZfV2kQDpA6uHmGVBKampcjvUvBbbieTMCx8avWKVUPXc8vXLnEjZ7bkTbAkfxDiuz5CFJ9ymeYegxE5fKH",
  "key17": "3RvKjzC1x1vuSVKp3NSVi3VQuRsxyvAcR2sAMqxBGHPz9RK1Nd8h9znHUEgLvdbAWtzR7j7v3rLhnBWAeSidVsyt",
  "key18": "4CWNrhBeiW1R3soRJ8VaXZj8pK3z4cipEtnujLmwUmLtWcVwxdvLx1HGjNTnhgHU2ADvaQRQ5gWYKJUCq2TLaWQ",
  "key19": "4k8zi1VnGEhvsWPBvaPrgfRMwjzC2VDw25bksCsPBXv4eq7354w3ZYTM5ZtdsD4KSKqQ4xu6Qfo1doHfwjdC9Kj9",
  "key20": "2ZZoZwwzWVKgDxAEtRvrnefdJ73L2hnTRE58WPeCcbtAzQE4jXX6tk3YRXDk7MgAixaemc1Mb8B6bMJchA5i68Au",
  "key21": "8ijiRFNtmgzjxHzj7kNona8mHaq5aMiWW4wqjCSXZPyYoY4RDwUhyo7YrR5KZq1E3hfooM7TvU1F9ig81FeS5oy",
  "key22": "YNKDDGtzBjg9uN2U2f4zwr35iaAScUidibTqPKmV5qv6vpUs7ABrqoVs9dDr2jfDFkvnvebWUMu3NuhLhQbUaNY",
  "key23": "4DqTeNJVBnCivGB3eUPqsHogPzgixoYo5zNLiNhwCa1L3E2Jgvk2KB4Jurp3D7L1cCDLKeZjC674S3fFUU83g5Bo",
  "key24": "4H4ZZWWSdYigL6BFbyt4A5kVLvVYgMihBVbPjmaiNbcgiMmzE5UfFwWdP8V5RDGrvcxAedxebA4EW8hBxHGtTeaW",
  "key25": "2fPP3W8FD74rUWirZHsy19rAdGYa7rdYqMyV9psTTExFtoR8eZ67U7BMZrGx1N75m2uTXEqx9SyZxvHGHExcasW2",
  "key26": "4N1dBpbguTJmPBKEcUV5vpByXAb6XVokmxzkDrn8vCCJubbxxzhvpdsjkdsX8DPJhWfG8WVwwbZTmZwjN4UwG2WJ",
  "key27": "5Ewd9m1E1n2FGPjaNgtgoXMESZBSCwwowLs1niFkQY57xTFASSrZEdKnjQNm1a6uFG1335UnJxDCDyP5pQsBMUfT",
  "key28": "3FsYyPpHSpAQfoib81F8tXw7zLBJ7P8mZxvwhYhuM7XzmMVUaQdHqmqMjvFguFF9z2NKkVHC3zVW2ye4ZguE8THd",
  "key29": "XymSqE2Xpd825bVBGjmpESNw5cEFJ4ucBSQzSe36DAtJbUrtReDCPAoyoedQL7wU8tvx7AU3vAe9ZtHc9PpZFxN",
  "key30": "g7xkvp861AJhMfMwyecHhPAsMw4HmTVPNjtnushoqvKXfyFZnVEgTcRvTkwD1g7F9c2jKKo79tMMRMTA9Uu4Tzg",
  "key31": "KvvigqrgnucUBH2D3TohowbwZfTi7cujEK2dN2eq1xLHzTvGkg62Vu4kHcRgLUzvKKMnC9q1a4VDZckGqpZSNCX",
  "key32": "iaL6BA9bMbdixX5Q7khYNFWLZ4zFt4h5fpjsGz1PYDaJJeVF8wwu2432m9S4b24wKWKpu7MFvsU9XbW7c2rNgkc"
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
