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
    "2RoDnfykx5ecyF44SGpb2qknaSeHQHPXGcTCv45PrHsxEv2eiXeisgfaQDVyAUJNevetoZXXkzgqRsXAnxtFZMpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPzwCoa7YhaP25tb52FiWD36f3d6kKMF5fJ69zYPSjcxBXfsYKhBr87G6ursL5Pi3mVfBBN4t4YLC32KTLrFAA7",
  "key1": "q9NLg4hNi9ewKGc2HzF6sKvVbZHx6oirmyn6TVJMGLZ73brRRuVDaXKE1yFtWrdvXpZg2pdDeeFFLB4FqEXwSK8",
  "key2": "2wnMexr5uta4cbxt5wVCcnghu8t7WuJj77ejpLEdnyH6fJo3M8nMahrpAJj6zNg7sbExGK24eELnRUJH3s3HBAGa",
  "key3": "2oJMVeJ2n3zMKMTJ3M9jizM16ErwXSGPEe6qTLU7Cy1cAcyp1wYhWD3XmzjRBALdw71LsBgsBwvU6BF1b9LTet5p",
  "key4": "MxmAUgTw2mkDtGfpevcKX2yKojwQwJFgxCGg8NhRkbciZjESCzHZZhHC4EVdy5tm4fLZNtTV1jpVs8wQEmnzNJN",
  "key5": "VU9PvNUB3xHkdGqwgAHdaQC8dw9gE9wQAAvbQTKNjA6ogyMKBjGAEih4RcF7LQyT7g8TJaV9HMRbmadCr6ECGmt",
  "key6": "2auLjV9Ka1Akn4Rvk871hHipighLve1tYsHEZ3a75za5zHBKUhtyz88pxq3kEArReL79npFN5bM5jjAF6rJcmVjv",
  "key7": "54kW81kMvsxZKKKipAnhAV4UQaQCx8ymr8TGxMJKC5LfUVaLSXVEr245hPWfnHpTUiJLHjVzXTJDrAWXraCuoceH",
  "key8": "5Jq8ZXMsAjaZQZfuoHVHJ9yqkupMXmCsEU4JMUHYvNznnYC7ux5WtHTN6ohmNAyeU8jb9DWzzcogAD8L8xSZqVxb",
  "key9": "5K3EbAm2YZVEXgPrJqYGtdsgLZsLteKqSo5miz7gPwRpCgipNpVhdMuZSYmHFSSHTW9BL14k14ZHpQFPrSAdWjG3",
  "key10": "5hajXsed7KhAsqnKwUKGhP7y1fLoRQQHzXM23zHdMgdkYK47CS6rKs6zanY3PnFJihEmCgSmAzWtFNGytfGDHsX8",
  "key11": "4FgN8AggCSEFeL2DzpCvvpt9vGH8aDuYjHD44WQfrtxs38B8u2qtzzFeuyevsUuLAkXPrKCvKMkRPqUobWTm73Cx",
  "key12": "2xZNPQuBYZMXoaD1VQ1gWnjSXgm2PodzXZkWHwfprU9Z7kZGngDdi5g3qsRfuRcLcdEg99cPUB7sCzZrvZ8BWFXE",
  "key13": "5uMuX17ej7VfHdnkaRoKiWdbd9HEVy8PrZFWGEkFmNFvks47ahUMx1Y46SS8vBkLd6Ub2gw2QE6WGwyptGLeGJCJ",
  "key14": "33H7GfLPzBFzbbyP9WrrBcLJPMfriuf21MBYN83Pqto85xxy9gsuY9MN7ZTbPc1hjB2QfskqS1R1TBB6HNu4J1GX",
  "key15": "5an5xJS5tcE4TBwQh2t95PqGSDjHxjZJxFQxeYzVnBVUfopyQSkhDvPJ8sVdp2JzB29EnzbsmLDvdUfH7rs1vYSW",
  "key16": "4HuLiMipQKpRAnx1HrWokNGrwwAjSaonHshvRwpDq4wMvYwDTobaP9i4ats8SR8cZqG532vtgNmpw5iSw6W3wtbR",
  "key17": "2CzCYx6dmQa6EQ1jRCEvvHXFH7ufXHc4LtUgeQqjtdMq2MXJ38xwFPCsTzoAxzmeNWQKwq6FXGny5c9NR5arEjV6",
  "key18": "MkKD169o6fKYAG9Etrso3wPjLBkZAdyRyrysnmjk1xVNLKdykBoYrCX1KcVPBovk59FvWDSkwtfQ3YBYXEccLdM",
  "key19": "4PFRtZPDUySDq5WGHLGtWEPfbm7jRifEJq1RXkvML6gu1Jr3UDvLQUsJX5Bx5aYWh8JEdrBUMBBtVLqtiQtJPrhk",
  "key20": "54aQSeJGk2SUNwhHDQGvdvkKKKKcKCgpizY6oz8xBHgjjdL6BLMCRf2vgpUKUF1Avy16CaG2cSaKbfxm3VN7fPJh",
  "key21": "3jFKmSGBM3kCVLDSU9SFqGjmBb1kZw2czNr8Naov4aQFf4KdzybjQbYMjWa9136Qh3RNrBMNgyc1Noz6GCATc9bF",
  "key22": "4LhWeRGY7rRTKCATmc8DXt6LUFUBvNt5w8AaNjCjdBTPVfQVX3fut7nbwZRXQ62u6GN7WkMiEm9ikgSWqcJsGEmz",
  "key23": "kaXpGY7ptbktqXd8jneEUVuKycE3MNrVUgGa5gE2GpPtyDtmj3DKRfVj6sCVaW8oNXvQQGC1ygWeG9cX8dj7A2H",
  "key24": "54EvD4naAsrf4VHLdqVuJXyLQkZPZ4hKm1QCTw8JccfZ7wQvFaZFP7zdk9RnSVcZPk43sH1Vo7mxij2BPheMLJ6P",
  "key25": "ENZoiswoNXxbdSLXn5MnpyCAehHmiWwk3AjMj1yPwAKPEuoeJqeHuDX9BR2m7DN1W9suwsmnjA3kmqAAba8LY6v",
  "key26": "44G7vNh7SgAqsqMqNdsdRt9qiGfubijjtKKqYyR5vdLiwkHoFUC4AbaHzbjCCaQKLurcLxd62CJxkKpQYH6ugW2H",
  "key27": "3hHnAf8815GVE1xCHwKsv3qJhZCeWTadyU17NjYzZQfYf9tK2f2NMbmqSJqGnPv4smKrGm3M8r1qAt7KezKGTW2T",
  "key28": "3SqFYG6cSumM6V2ximWLABmh2fMZqM5yTngU1gUUt9o9qgCTMBYB4ZhNVfvzFUXX7XCiTrnbwDKcvPYZUgwReDuw",
  "key29": "5CFr37Hf3q7byfMUdWcSZhLHpJ4spWfHQKt3pccS67J1CtGHeAir8mmf4ZMMVnZYeeS65XK8jUb8WF35UBC4d618",
  "key30": "3yLdvWoknwp71EEVFjdnRRcfMd4PQt89nMTqwKZHHWZXLJx1C38qqDxhVjmRskir4C49FfVQmat2dD6nBgvRiHhh",
  "key31": "5MMNqdrdVc6JFnmuUUjEWqfwC7kMht5q8RcfTHmDZp58Xvdpwi41UHAwpJFJ4GTiuJFfJemjpYhzPtaSNWYyhJnp",
  "key32": "5UGtSMcWEfXYE6MsspJmLA9ZfLw5idfRYqgdqEYQxiA2zsfZ9njew5Y4V6NkmFvtvNE77sXBWrPLoSRdHZSL89kP",
  "key33": "4ALtYLGd1hnSA97jHkMM5gjC6LqfetX6AtTEsqiGPjuosZ11B6KNXJTBPVGjvZaEW9QSXLmwpjRVRRuoPDyVbptu",
  "key34": "539y6xrg4kGmHXpCMT8oRz5eoKbCqyybjiQuChsULjCvShHqTeSvqS6NBnK3Fbmmm5WxrppQbHDFPY4UY8FfLhWy",
  "key35": "38GVYdmaFD5ykPbTt2WWTM1KWmMXZUnqJqKrop6YrwPxGY3nC7ynWuykqvBJhpNSmzfk9abD3VKdVN742C5j6AyY",
  "key36": "5gK3sHVtLYw6M3VeyakoQNkZ3XwYwBZirbNepuGheXBjnNnE6MyS8UeRL9RFDmnZDZVbbpCrap6Hz2enMousf6hv",
  "key37": "2aVQGyRJf2sGdcZJJrNTXMRoQvcePB1y3jMNEJ93hnNTEVPCbW1Qeyn633aAk1NBXrbH7FgtnArh5gP8a72KVqWt",
  "key38": "52eKGGfB2S2Jgc1YkXePkiosTmzKvrM8QBdZWMMuHr5UNzYDNh6SQjLBaxt3mwYYXkLRcJiPUCaQA6PhL9FAz4pZ"
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
