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
    "3ouAaK6ZkP53Mp2es88QYXijgxxwjZsCwGPCU3wwms2avp3jAoVcjc1aPsPhW8m4JopQhLKMsBPTm8LSFg1rTJMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MgwRLE7kcgDadkoW6bPWZYbZLpaXEMZXB3FUmAcGXmPqWdAEXYpFk2FtsijXXLhrcCPcwjZ4YdfinuUhqjQhkLH",
  "key1": "5xp5WkdJcr5gFPFUtdy7UK7StvrKfFCgspRs7A8CQn8PLNxWUZAwU45UKpnb29gKb6xHBb1XrCWxzYyn3sMstnrc",
  "key2": "3p1cjSH5JCEzxtHfKZzmjaK7nMm9p8wVKvNSR3e7Qa1ocYFr3GUudP4X276i2TYJ3nLzgkunm1TY5rrrrSGDpiT4",
  "key3": "4iY1dY7TUf7YKgBaeKBnRbaqhto2V75u2zAj9UK5hQdRoKkbJiFj3FVqLLMkGBhPWyb2beFvnTveLJ6XyZuiLgFi",
  "key4": "7SDcuAyrfAkLjNeCAb7k3dZNbquDUTSViWmJwNz53LJcVAR8bqroxG5SQJv8dUfSLU7Jx4WjufVngVdxGvTqQma",
  "key5": "3rH5irWMDkHSPVNW2rQVq64ptSYCnyYurPGEqDsCokQFE4nnBS6qqLdFAsqK1Aj1Kh5Lu6Eq5LWVUZA2oBv5tQGo",
  "key6": "2nNwrRMDZBjk9hsXqzC4cmGzZKAk61uBmTzH6NSsRpZ5o4G1wgZz5c5qJ3GtxaZ6f3gEVDqAGMSpqV7mRDRz2CP6",
  "key7": "Tp22jJ9TMRTTKybrjUx52UcaS7RUtoNU18Gof3rYNpUrxESDiHaB3PrG8n7xZmtwyRBVkscySYWyuX7KAQKpyK7",
  "key8": "5wazaGAdbmhfpsKBih3QxARfvkzuYonL54TJMTy3YmGaxJDwrJ4vZAsEimW4xzUMxXgzn8KcL4Tr8hjKLtUi7NkD",
  "key9": "DMRT6LeLorWZ13tocuTQ3T1E1pjYQf3LASqYBaduLSdmSwdkhXz3R6eKvAkR8YfHa6CKu9cgPxef2u5XCtGuGAV",
  "key10": "5d62ypAjtc7JkzmbRPiDpAULrapZzrS2FTUDcMQo7VFvaDA51BmZfsj4jLr6Zzd25AnZxuE4XN6W75rvwGYbp4FY",
  "key11": "49hn6mjqqP2PUtW6SPRokTt8Hyqzkf6o8RWmzjVDvZjKNEVhW7ZQbqET3monfApGEXnD5wh3k6qxgn7uzcmuEApp",
  "key12": "5iSuCheRD14jri9RP1sDb6DeG9MD4QB58VFQ7XewifC4F8gzvwmGpBANKEzhKCVa9k5tDFZqfF95MFyCiJEuJ548",
  "key13": "KUwf2YRZmS74w425i3kJdmS29HrGXn2BeYmmWgnnRCTihXS3XPg6iHxzx64Tgauy4p8Srqa8Bc4ZMnPFRU1GVtS",
  "key14": "4mDduCpkFEoSyus9YFtpBYXDnELiByUVZKJKt6uUHGA83AEjfRkVyWbdu7xPSyBgcCQRd2CKpi5KNRKR6g18ZUUK",
  "key15": "2punG3rJXJoun7qE7GhqMaEit9LwtPLYh64bPW4ESMzt4noDYrN4qCgHr7hQbgoKsmj8v9fvnGyGrRbZ2GLjefMr",
  "key16": "4ttu1PF3uhwaLUQnZL6vf7Q3ondz51mvkmJ6i8ti1vSq2FQQ2hcjniTyb5ELdwssAFJHg8XNULvkq5td3VXCFUAu",
  "key17": "37f3s985PJQyniZztdkBbXu2Lp9EePYcR4UfDgf64VkTjgvjSBg7mCz6PqWBTXcrfWra4e6EQmGDL7fzgNu8mgSQ",
  "key18": "4HRo1nWTp8WtPqktK3A81ZstEK8Gw3Jcbt3z6dTo69SsVXjuoEf1rNnX2Nq4FYcusfPrnPbCsVdwUG1GD3jopTeM",
  "key19": "47xYSd3gxzdgzTubfGArFK36xYGJSFUWS5X141MufDCpfXsauJnpEbF5Ke1b9QSmq8XAjiH2Lz8KKkX7V5TMMzfC",
  "key20": "5AvEbFQPUD3CzURiMUhn8Z84epkwryREuz1LZSrPdY2tL5B5Pwwt6DjWKQjCgD8FcfHmEnbTpztAmhf2d9ZtpCWz",
  "key21": "4zNSHxMctWxAw7F1b6iCvAjR5BukiY68Q7Ubtz3xPV9VR4WBCdrnkFoA7ir4xM2nqxhdR965hwEYnceWhvpPdPaY",
  "key22": "5K1Beyov6FVSpk19JRpFu8YDc4Hr8f6cS87PGWQtbNHihHQpeNqDe89hz7MkkbwekBMWnkCWiDwo1JxnCmrCCENx",
  "key23": "2aKpphHDpJaX7RsX19mdgtTiSZx4ek9eGRSXYQfQDyx9gNjGzQSxXhTUKwsdkjcC7s5QgLX1YHBtLe8Ua7v5BSwz",
  "key24": "2Qy9WHzGeon6hYKBPRDUaeu8iV9ExSwhN8tiLVtjDyWA5cq9Lz92tZmdDRLFaNpg7gVEKdNmNtpyEY1yy8F4Kit4",
  "key25": "5o4ruwxVN2giKMYtsLBYoFDKLr1RtZEyFQH9jN7y6gRDFx5LqKRbierc9upous49u7YM17muxMp8NuL2T7aJEwxD",
  "key26": "4qjYFKxaHNd5j97T64MqY59i3w446YDgkEEDNGeW5nbuwUztAR3uBT54k1auHZqi4LCYdPqdUxaHmfTHxVby817i",
  "key27": "5Pjo7qqjWZLmikw64w9wZKZrkBwtZF9LQE2fsz8Srf5YLdusYtiVUV2anwgUbPyrSJra46Y87MtkpiWZoR1sKFWH"
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
