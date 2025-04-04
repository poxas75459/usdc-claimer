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
    "HFF7BLCsggQy3BzfU9gnsCbRwDKVK2b6jemnJ4H9ccw8K51pnfkfmpyD8X3rnfq8jMs1geC4CMRRoMHKc2tBpEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAmYxrgrDSCzd5AdTD9CzUsB2NPPCjxHPTvuTPrA8i26bVPdB7XTQ3yKKks7vjNHvs7dgjLKm3Dy5FBnNqsFphr",
  "key1": "4HJxkyazxDoujH8FHeAQ2DnqPjZHvikQh1Nked2a2ifaooXfEYQUAUkw39TTCfL6iNpiWzVRughSAB1vmB66oQCG",
  "key2": "2kLRccWfQanTp7SgR8tjJqRBkYF8eJYLtVsVCk3x6tTHXDkbKrLwvzsdKvHa2DaRMbVWgKqGtaHZM7h7uFWtWgCs",
  "key3": "2CFrCPUbwWepTzrpxXBFwBQs7SajUG1kSYfJ2FpeES5ooFq8uRvZge164vq4VZiAcxsgHgeL3wfvPgb3C4JKZpUB",
  "key4": "3Wazj7HgMrvtahyQeVCMzLSEcU8NUWuF7qszP7u5srCpfqEw33bfoteP1WPSFvQ2sEx4RYmGuCDpUskr355F6rvX",
  "key5": "2VsNkJ8LZXnLRAL8doKyH5qR9eWTqf7LXc2k2uAXkgzT5yF4Dxd2zfRvD84fo3TJSFpEUhZvxM5VwDc34aCc4Mo4",
  "key6": "636V9b42kbbydJvzZf9fJ8NMAuvieL51FeQ9LXdEHzxYrsdLGTKSS7YymQ1dWBssD2B7DfsGqZq3DgyoQUhmx1cW",
  "key7": "2xBv1Jx83kRnxHybVvcjdP9YZ7aeHdKXxDFUDF18eNxtjDWdmgMgPNBB9UMN5MvcGY4rPLWRVBL829emABaNz64p",
  "key8": "4KJmMBKjbr9Ze9RtG9kvrJGaWdMUptVRH3QLF9BAyvCZkdramiUQPzPu6Z5zkR2DkPvCQX6ZFbsJPoGJKLgkYd68",
  "key9": "4ddjd99UpoYd2dRToAcevfpYJZ4udbfxAK36NYYERXkYe2ZpvEkb1q6BBr9qTvCicnMfUFXerk7Q2nPPGfUBWLqW",
  "key10": "2apZ3S4qAtQuHigXEpW47i1wB3UQRHaEpgFwL5WvQbRiyCheGEEP5bstDdsScUuDqtiZSdXCxYXxxvTwMdNoVDUr",
  "key11": "jFMsKSdneewfNEB9deqXwKL4vySsBTa1a4ksB22UtjMumFJewfDMWEwD3y7MtMqSfyEhcK87HvK8xNBehLMWCdy",
  "key12": "4migjBjBYKGMuqQ7MpVqHqDSqFjitoaUgTL7q1jx1P2nDfKgoHKhjBGgkTMoEBoj97HTeGb5quPmgTDVRt8G8vPy",
  "key13": "4x69fyWeRujQKQLZQEzyULeQbTsgVur9R88VgPnbLHgxFV6YrdpEytzNuzvwtnCWcthBTBfW3KvYsDyqV6oWhJ7R",
  "key14": "2nYiYXkm5mje43a6oEmi63CJ83tjgu5HGKM53XgRy14Qde7kLTnju2YE8dxC7Nck9MRiMmQJEWuKVjWN284RTA8K",
  "key15": "66U2ZLVGPLdBUaE5yhfXawoSxMAYighhoqtgJkuACkP3xjzGqURtrpEprAqqDe3tGGGHbU8Qc3YyLqK6jHjDTQEF",
  "key16": "2obuaWos6NtRXvQsM1zE369WeYfYBVv44YoC3CKkhspkKnJVvzdveSpaP4i3UcS7BNxq9U8Bgqhkz6xJeEUH8GHx",
  "key17": "312aUawZudihYo3Ha7ee8eiMictYWxEvpbcpxSEkfPn9XXdAsvahazN4sDxxz1kNVCNd4ycXt15sfmiCxPGyrxhS",
  "key18": "4mgCDZPsmLQ8DSJHPziTCifKhipaJQpkGiYPUcXbXDqeztneMap3Jj2QH47Dfe5jAUqfjAGZFKecf8tVuK2iPKoi",
  "key19": "5f15xKKvd19Sq9cSKFZLAWU6zSABSGQEnwQ7q7rBgcmht9TW3RcEYcjWbNc1g3y5NbWS3obE8zPDksQnDEDYMxRg",
  "key20": "gvUYLiyZoGQc5QoDU6fPfGEhabq55geJrr4gcpjSDKjsygrc2Qr3yEV7HuLTVEPNMdVaKFXaepX57ecr3pWLYWu",
  "key21": "5T99Yzfmm6LNMWCM6rg7GxHzF8MSuAVybh3gXSGSA8S4S65Eqb9o6fYgMh5gyigSUBZncRNuxfAQNLvRXproRfSg",
  "key22": "Mmawg8q8LtWoqKUn6JrigeftcpzNPCKNo8rh3FJmCZdui71oBRc6RVt8grw4qiUGxwSu15oHX8zuXtbWWk3w2JH",
  "key23": "4BxSQJi7XzTyPKEPoeVGm7yaEBWgXnjDjARjCsb1tSboZMSdug9jXUqaN7rS6vBXTJzgt4GWqfbtobyoFC5ELcgG",
  "key24": "4MUJjsjfktbSojJcJf8Vefhp1uJMVUuLRMSHjVMFfq9osGR1eiXcH3XM8CBkFbnvhWyqCTmeJHidjHG44NjuvE8J",
  "key25": "ignx45HvQgQQxn6TcuvUMfvxBQ4P9q79VCsXX5hbrU4gsMznKbsrByzhjNzpQApTGgqLLL2da3xk98hTjYScynh",
  "key26": "mmPZrEctM1m7zRZvUs95KKXcgJcpgiZLybAXiA9FGGmRbvfRueJCGE4mmhsg2UA4DU1gjidbN5jqL77Ezrta9zP",
  "key27": "4CtXKyPbfYTGs7TNWsWPMQ9u2iurQdmde9Si38cETz7BNAZw8Y2iCZL5JDzjzRmozHCyHpuEixKBFk2faKcJtARn",
  "key28": "2jkL9rvkpU6AzBeDJnw8AZLFsSsUzVNjMpzHcSkQgXg5UA4rcu4bvaJjHP1UjJdwb8Re1sFZAKaP58z8hDqnyZLU",
  "key29": "38cTyKbKuqzHwM4massYoft6AfGAA5vmqCNv773qQnBgqMMq7kE13nvoskhHfxJgoB5uzBmbKkWY7KYLpBMr6tAu",
  "key30": "5sFgkkzy8EkJ2WeVNbDVkdcc7kwRS69yLXTbN1fqksCpDk7iLxZxHGWETUt1H8Ghzh5eSkvKTpU113CMSRT51Xxd",
  "key31": "3f9oZgTsBBiQn1HWwGEDBBhMmZH4tSMvHZqtExtXvFmCnonFpYECi14vkA99d8swvDPijeELJkg8Atuy3pmHV9go",
  "key32": "2KwDje85jctYXo23b4UsBhSaHR8JcyS7HEKxTwMzpeX3RX6KVo1UZtgvVYa63frtZ9sqGNMCoyU1jLnJhSmNpooQ",
  "key33": "3rCdpabMhmhhpcXcqSHgene5H9hzbExQjMCo8JPoRJjsi3stApaQ4GfLEQrK7xMX4DVnVHpXo9GRSVPVjmQwDUDi",
  "key34": "3w6rdtec2Lhs4dXFjpozU9CntPgGoZrMHEJtSW9Jf91yWdJhRb5Fr7cE4uEPf1Xq8tM9i721Ah42Rg7aoEaQCWJ7",
  "key35": "58hsk2duS9hVZm2RLmmnWkpBcPQwury595xPS7BwujJYnN29bGC8w64HCnwoEmBMyKmAPczu4W1jJHhadCszpuEL",
  "key36": "21hYJDjcYJV6afFibUMjD3kySKScpag9CDcr7Rz6AR1WhAFSD3aWLe5Dz6ZhvcuYdAc6dqVRU3VEyFK6Fm5GEKj5",
  "key37": "28AikvT6wh9FMHdYXMqxYEqLVGZvfYKECkTMFqHsWT6E4xAziw7abnBC4FKr2rDCKjEminwRApH71v25R7WtWAXL",
  "key38": "4VXZSSactPFqkmSgFGGoEquAcvsE1ZPRKHGzTNBDYr4CAX8W2q1tfmYvdhNWH5HcwrkdLjLZTgoSqgno3PrNDxgL",
  "key39": "SxGohDZnA4QA4pVjVa3ZdtSd38c74nTiXxZbfZpavmLXgLu8TjdYy6nfTYd7EtD8hVArx8vbFQsVgmGTHoyEfj4",
  "key40": "2JRtzRrXvVN8DRoAYgMnEARfN6pWkTSePgkX9v72SyYogbTmsCYcqytvAUWgovfExznzbFzKj5FPkvJSVKdQSZJ4"
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
