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
    "5SDgNHnposwQdm6x6d7dt1CCN5QdqhPGji67K9tHkqQDQi9HDAFfetkLVsyKNPm1JsSYzDKRax2n67HhkdDyNKjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DB9oxYDe6Wr17rDpHiigAGKy5ozVYeA1DkuTsTqbzeiQqRUNcvdsBojJBSY6AjigvEtDyUN48abCV3F25axvRRv",
  "key1": "54NXD4hJUGMaGCf1cbvRsVdBSuoPKSWZfGHmZRGJ2WxbqahX7m1aGQh6WnZh9NB4vFeLmYPxamncHFmHSY9TqTCe",
  "key2": "3Kmib6Qz3LvsX6eit4KSMPuShjCo2V9tT63KXc8hKa7SGzTDYdaVu1g5RhEXjG3CiLfWecL8WhiqgKSoReJGqRoo",
  "key3": "4BPu5hSw7sw2ei2UgGJrMaGY9jaiFxwk9LHNxQHhowHkACcd9Btsz6VAcJcMZTCN6ABHr71mFCZT1wE2qEgjVT3s",
  "key4": "4qB2Lrgne6Q78Rtw6n3t9unXmFs4xfiDYALnkyo3ARaDmrS8cgMJnBqgsnRdGH1xYgAM5iF7bYCa2T6P6Sesx58o",
  "key5": "4C3hqHmMBbz2oF1QWsucAEBCQJR84rvbgpV9DdAedczPqKQNpPGTKUT6NPB9xQD96fSGmfYSAWx36XJVJDcok1Dx",
  "key6": "2yPhrnomTdg1Be6RXmaS4EeJbhdM1jwcYBDBY5HWrh6jxDXVzYKFUXqSV8SmCWTmzvzVtWDsuGBaWKt9wsLEg73m",
  "key7": "2B5usse9UjMyrNb2UUqyZM9QUMAsBYwVGb7XKrT44eUCWrFWXPwAgroHHhQqHKhLTbA1GVDxfy6vwcpj5Qu4AEoY",
  "key8": "3wNc2at8aEyxoHyAY8EgnHq121ughynHZ9vHpWidpHKSbVp9Cmp2ufTj2AdzJRkY7NpvQBRfuGZVrDTnuHQqHfoQ",
  "key9": "4r9utmouiApWiLsLwpRoVQNfGHWaRVz2FLBPjvWajDzya4pa42uPENT7V5up5RqBeWQ2XuCbzCWW8zb7kcKMNvuD",
  "key10": "5Mn4pG839wgh9QRJvUdG1Ns1UEr5vgKRPDSBK4VaD66ZuHeLBmUkDUkcZxFDsqKJRCptoaSRpbUA73BCHg5MPs53",
  "key11": "xLz5dh1TeGdrdeoFkY6eMB6sYZdJV4SvcrUH1GH6M3eDsno5ZkgRLT7u6ia2cvkwykQpzRW8eMW1sLrscHfjiT6",
  "key12": "5iL9UpXD7MwJpsTWuUyuGHrHavzGFm3TV65CwwdQ7aiaMASzbhAByU1rhovWG4qrvNqxE3QsQqeG82qPS5REVPnZ",
  "key13": "2WJzXz81egv7Mz5ogxzxNYrSCJssRUTFxipbwE4rGSE42fbrvM9sSy15AytN1M7gbJz6Dzq2k4Zki5Fxx5M6Acnx",
  "key14": "5P7rCyjtgUVrVPp5k67K6WJSuW9Eh53BzKhXN2ZGFAPPzURr6FRnbW2wSh1VtvLWUacRi9WsX3rxxQkynWXLRg8b",
  "key15": "3gVPtRtyqq186fLbE2egBuREkKXu7f7nfQsujyUUxT3iLFtgGSfKet3KwAgiqwhGcUJCN5p9FGbvnutK8kvWiRTi",
  "key16": "4jXYuM72SmhDkZwkpxdWKzR77rmHge4zaAWgC53JSXvZCiqALJhi4G1g9PUCPrHikiLX2DKxjS98u46uAAzsgY15",
  "key17": "2GR4ETLjFCmsRibDkJNMqxomgLfaxaPTZGjNzd7JB4h9yZ1vkBqwrsQFWy3kDPJSZ7LTv778NTZT7GCuoKjV1DT6",
  "key18": "28qV69xzwDH36SNjPm7ecvXxQqYELPo7zQKTDzy6RccyyGSPcrBCTp7FCmLcS5ao9XPekYMkAmELRX3JgX9tDehd",
  "key19": "4FzAG6LnCqsDZHMSGTExcBxDnrULWJ2b15uqXpQXpnJaawKXTThzP4wreH6myEeXuFb6fKn7iFDQpK3BucVfJX1q",
  "key20": "2FDZZcxERBPUeABxRgkM54L7sKw1X1NRsqU5R6a4S7E6PndGsWn8J2MPMRjTyMi3koTVqNTg54zV24s1dwaJTyi3",
  "key21": "urp4JxcfSzdKqSxgXnwVApVruT6bLDEGVWe3gMFzCjiQyYNqsQPeswrfxMGXvRCe2zzJraFArSQdMCxtkLHesHi",
  "key22": "rAEWUUueteESw7ANUEmodrMHM3h8Rgs62RQLnWocu3emVA5dYWxnznbY4HDAcm8eND4CVp2mURoVMEF9fhwztjg",
  "key23": "4iSW9rL2vtCBs4SWtMabaRdJrKVu7osYRV14tFfUJgbBN14biKwTQDeUrQeA2VnNp3QDoVMBXvwkz7THhH2EEXSY",
  "key24": "2LTocPAitdMX1QyghuNmAwjjhgFKecVXAVSDDDU6sb5NseXP79ksE6cRB1VXEkvAE8GnA7hHpSXT3SFE9tLK57Ay",
  "key25": "5jA9kR2bBcPJJPeMYrPmju4uVi6YaSZ4frTC7Y9m224q1eFBWMT1cDASJvo1AQ7H8q38nRLd898vxXEruwGjn8fS",
  "key26": "3x15urjrjShqxCXJv8QimnyqgusRmKji9MYnTnKBMmUpubdhJT546E7X5QhyoGf8NkHwpj5Ls4WrQgU9CNjmkF5T",
  "key27": "41gXy4bbVySEyj7KDR9iuVdWQRuzSMUEHj9C1neKCdkjQ2UHEhhjRKRPRShQ7HjSJZK5mAwnDdc2i1SMnugx15m6"
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
