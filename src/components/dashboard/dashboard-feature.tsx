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
    "2ELFAkDSGZVxK95bcJkBYP5Gno58kyG3mQB96X9mtxKvrtnw4qyL771H4wvBNxzXdjV1zfVwnSc2sWyNEwyArPoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xaBtimP6qptve5iSApZfSRgyfC1YUcf1WTTcUN8yJ6Py9eg8pupcBqB2zsiDcqjsadvaNZWpwiAyP7GJaj73ywQ",
  "key1": "3S6xUfDNYxNrfuucqTvp2oPbRXRBPX9RhWHg7b6oyriGp98YafKiBYhrJTrSaDW9NKpsVg4kiYASdhRJ3BDiBj4f",
  "key2": "2J1VDkfUz7nCbffzuixWrrzy4bqWzb4XHPxKrEqwS73nMv4yqgpiW9cbgBFLDGAHvmpgGjoWVvU4bYFD7SkMFyrk",
  "key3": "5R5qn722WMRsYur4KG1NFHMBicFJKQUmtsiro62dW4kdSzANyQ4nJmBfcbKVSp4pEPbcdAoyG8WSRAmRv1jsTqZr",
  "key4": "3uHip9dqUywKdfm3j16qbU9ixsJQ2bKJ3WoJJm64C2tCrhgYQXNVhgjh2r1t7YMc4qMbz8RYKFFNLxvaWgUMkX8f",
  "key5": "3j4zZ16Jnx8yAaHTh2thU5i3rcsgXaUDtFRAc3YzJJrH9No3a1ojzSvwUq3a1uArYJexJr4jBsVfNc4ACL5PV5VK",
  "key6": "2nEF9geGwn2PdTnw6zwg4G1yDuazVPnP89oweSBNjTSHqMw7bWwtmazrkRkCYgS9ZQb1FF79PMu39PzzEY1RjZDv",
  "key7": "2nrNhviKAHPGL7VdNDWn4TfNiq6gh9eWGHQkWDMn69kSDmNajzWzz9Qe5zmQ8RHRGpA2tDKfZj93BSMYKvRehM6K",
  "key8": "7eAso9pvZc2cKgkEKLrDV4h4kG6DZaF9syEHkYBgjV8xGpMVqSWk4ZrP8j75skdpW6G5F2gMccBuLjvL4NqaUCs",
  "key9": "92eh82USixhj75n9UUPRx3ceEEHdjd3daWH7kucBmALMgYW3Dsn6ZNQsqEfdVxYfiCLgVXNMtypwH3TW8dokQYu",
  "key10": "4WjqKXM6EFg2t6f4S4CWhzrhTHidEfqkNbb8nyQjTCqnQRbgRS4aauXMTmgnu9TZ9sBqjix9DQA52CPeNEGBbjoo",
  "key11": "2nzfaLt9gWcKeuKUkpLHdD7AeANtUGCG4g1z1CHSzVkUjUvSa7djgCgWCrvt41GUR38Bx6HgyYJN3R81K1kh6Jsq",
  "key12": "52K5cJgaShKvwZEhU2MR6Vdo5KvNZ55bBd9FLbzYQoti1DRGMg9MvbVDe3jmVfhvb4cHqpcak35XrRju4WZ9JJXG",
  "key13": "aLEgMZYeWPbZTLvFUTFfqjwb18nEAY2gwHc4xCBMBbeA4NEMVtR4g17FjLo5GRDzaN3MsGRybNKtJ4M5Puezs7W",
  "key14": "4YxhVgKRMZtzNG9uzNrBcAWJcCh3WX7d2csd9t1AcT3fpQND5H3mgUWPQPSTsu6MojYL6ukvVpCme8UKMn9gVm1v",
  "key15": "4kS8vP8wesCjrwKbfJQQLyfVCuphvkKSiRntKn9CLE5x4K2c8NSkU6fx1CQ3JQKc9kyfdrzJ1QmRJnhqj6PAwRCL",
  "key16": "2VLFJKefTSEpVT6eVytM4spmtjYLwf3LP51XAEitCANuoKLMemP5eTAbZZkMJFtnHrER67QRfdgth5vvFayPSgf",
  "key17": "3MSy51qCpf9erVfRhLxXn7Frb1CDcfEf1kaeXD6V2QCwAe75J8ZPLrjNfp4FUQpt3eVaa7fBpk8PFYE1aEU9P3Vt",
  "key18": "5yN98cB4k7R3ZVMA7AtFo7CNbtHCd72JnTwZYPd7iuCmokhskw5fJMMNbN2nSEaMtE2pQ7aSwZdSCFLxomzfQ9My",
  "key19": "5QNg945neM7HzXFqxs1SxaermRJBME3ejXsbCLJ2LZE1rBy4oBxNdhBkBnNNPYogEK5f4sZdAuxFw7t65dDpBdr2",
  "key20": "2yxPdZu7BUULeXemCuc33TcLm1Q1T5ZJBurm1nEkUFA38wHc4gwJUQY7CayFKRQ7F4FFizm5Ppi1cfaYbyZac5mT",
  "key21": "4AA8RxZo4NYTaimwAxr92B3NDFXyV368M3dcKKdgFCkzkC6cxwF9Mm3buJBc9bjjDpKqL9FPY6E1sFNy5PBgWbVX",
  "key22": "5iLeDSZvgMNHNFt2aWeq2T9M3QD8ELaZxK7u6mCGUuK9mJbLurLYQii1Xb6PAsLJjDHBdRiHVcb7QDLthECwTxPE",
  "key23": "3k8d64C4wjn1ETS2H8Bj5PFpzmEo8Ad82iLnYrmQvyx5CcdjbyDV2XEmep5mKiBMkRWpKSKWRsrLnv7nTaMj4G2J",
  "key24": "RM3Nuh21QYszaSVx3cm4uZjtrqKNZ4DauFh2AwFMVHUaZBVgtuPSDQZ5GDFfBMRLdDss9iJZDohv9iBrj85Xj1e",
  "key25": "CbAmiKyQmzB4R76cuaCbPVKMYdC3nM5rcT7A8TySUxJinGxH4cFE1RZ4iEe34uUvBRAoh1ftD9G65GMzVaTkA2k",
  "key26": "4q94ckCbnCUTqyYAafqzCoUwdooMTx33PpHoNGbFxpcmKygYn91N2a4GK4gRJMEuncQaNYNWCAJAYSYdKPYYcEsa",
  "key27": "45FELjWD1bC9ki24rMp86mWEgsXc76rfj83Gxov651nj3xG5dHjaGq5o7LEPzpFC92rU3H5KLKn5PA6Bx1GPh4bF",
  "key28": "657fFPv8JbvPaBzJ13NtB5RodfLRYHp4CA3Q61hpXDtxJacmb8YhgHN7uQjTpHjFgTNhQ54ViwAFLv4yZ5fCShoa",
  "key29": "5mNXSRqBVZSJu1hhpXThABkt7PUPuiB2kvS7NP4GoeccMRzbjfFvTsJv5BRANGw62Z4oiUzUSqWnUwZejZkQmAJt",
  "key30": "2go8TUHksk2rteZMdmi68KXMoN1sT4wvKdM7UXJS2pg27Rwokzm9eUmpcuvyJBjF4iXxPi5sDRjr1ztgksbyNKwW",
  "key31": "3WysHxDzQ3nAP3BviHVYK8LXVxBekMQ5HwdqRREDTdRwMhCDSQvtTVsLegJb1eZisjRCJSEp9Tzi6uRVbGVAhM16",
  "key32": "3M1utw4Le9rk485s1rJt6BhsPxdacBhaVVGNgaFB8Zd2X6Un1ZodqGpk8iEpLKJGu8r9aGp4YBrUC3bUwhCvPDxb",
  "key33": "Xn8Bw1cf3b8guxSjGG7rDtXdDnmc9jLZDVZW5GjL42u7mHa8u9rcJuibPKvKZJLwU7HkqHHfaoSCP7btU2nxUgV",
  "key34": "4rnDNAtYnVGu4hZ95DDSbfSkR1B798g4qi6MQ7mZ8rRD7wXtnYoNbxjArkJpUUqqd6jXbY3xCmJwMAGcksjFCQwe",
  "key35": "3jYYyXVYhb9baJp1RLCdJ3v5FmQ47Z34Y8obet7UG7KZzyTHGBdstjiWQYnBzTVYTPiuqrfmLX3niVi6rMiStsPK",
  "key36": "2FK59f5zntWYFPZSjKuLYrsVoXP4oN2iNjt9rBmGd9fV9QFCLGqhp5inh9n3N9QHNShzaoC7kqJEjKntDge6snkg",
  "key37": "3WDuJfhLWTVFDFtJiDiWK6wrFWwmZSw1GdRKxiMu1MYiamQGWRefGtZY8ebWQXHctzMbupnvFyJvssYWWZp5rXnC",
  "key38": "3kzDvv6bf6WNHrtD6YPNne8m9HX1EHn2XoQgHs7E9MKmaQKct1JVdP2ZN6f1NjEKvpPGqH4G2EYcr4efoXwH88C8",
  "key39": "3dc81Xtt5ubVs1XaBwGuKzjis5fAibrXhtMKAQ7qdMYXC5kU6rnh9XijUYBmV3BKTA3fNaSaFDi6DSUiLVMPQj9f",
  "key40": "2rBvC5SY1epgFoaBMMVP3FZRjmTkQCnLpSHxizAD9B68QVtHDKRUMooy7wPcyBkrA5H4xVA9YETnvUct9ZAp8CoH",
  "key41": "5oeTitTmnPip5wTsGKaGrrt6J5WDoDKfHUAFat7AXEmw8ANw9WsvSeZyUzmwscaVK1iizLvDPiSvkyxrYcscnSds",
  "key42": "4HuToVPD1E37AXzh2a35fiQXoPmonzGVJbyGdGKsg7NVTZahgQSozVo79tqKYHcWEVLhuZ3w8fURgopaQsZhKmpN"
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
