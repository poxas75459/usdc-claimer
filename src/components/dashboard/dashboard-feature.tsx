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
    "5k2PH3Pz4Q38pc3fqLetoMCNKXFnXPxW3QckwoSD4SSj9EN4mst36d9ohQbkpbt2G9dvazopFEn96dFuRXNs6PGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vwe8WnAbXSr8isPPmbMcSJLf9jBZ1TMGr1gswR5yPQrrG5g6XiGCBKNnfZ2uSnrioDNDmgk6gwk7RCdFsoRRe26",
  "key1": "5i4u9GYM9yLG5wVCBRjrtu4rW84UY8EUNeYRtiHr2G1L5RHAkcHYY1crFngx4TyPqgPA9Xv71Y2gokepj4tCbVUm",
  "key2": "642T7XjiEKAXUcxakSxHDCarmjv1wrsJJDFghJNdtJQQg4tdywQK5dziV23uV5Y9w8ar9jbdy9QgbUY9qXLYyURA",
  "key3": "3XdPXCu7zTXEzJ6TjsJZqBaiVxiFcgb43m1x1xFCtqR6xWz1JhkSGQYB6g1PZPxSrJeYxwbi4Rg4wLGy6mVrnvZh",
  "key4": "KjD36zd2bBobqVgLteuPqm7XAVjZso5d3HkWUSbPLNDfkV5n7G3RbTJXmRT1yqQeP5SaEYfg2nbnATKwwjxvJd5",
  "key5": "vATfGrwNQAZa6yGhsP2dui2va6ktk5xVzhjGta8DsMDmpEuqey6GhmGbzQ7UjdzwjJFw5DiGoTfDPq3GuVdbWiM",
  "key6": "3yi1piTSspeDygtZoEFTb9gRAoxrE2hKqaSfmo3hbGTa7nFci1anXyhh2veMmF9fCGbcYq69cwBtbgQTiUZDxnQb",
  "key7": "5ew7wPzueHH7EcH3V3SK4vvsAbi4Y5TMV6b7AdvQGAGbHpQeuV3CE2EaP8AGHGTnrZMhg8M1GgXmEhyyfxujLq1G",
  "key8": "5cxjHTzdeKCzviujQB2PfwKmWpiBJu334uUdrcfdDaFRC4z4dJn5E52J7N5npURMWQnxGmbS1iXTCjZPNzLkngBr",
  "key9": "4KvksjNXA25JaSswkxXM5tpQsU3rKy1Jr2ywn7wGg8yvt6nBZUejyaMhzidHMrd4nmwqSKcKrSBVxj6e2w2p5azK",
  "key10": "4CV5CqahSwEhUnyjDErkWKcjhDmhey4rGPCbGsdbgyLhyFi6UeE2ztbQ9zYnnRghasbjxxyMc9x15KVeqEBQTWSY",
  "key11": "5USzPUK2tgdBAfgrVuFgbtac1i5HMGrSFLbdYCVqupPWwi2BKmZdpfEQJZwXSUxn4Fz3o5nKUJcbofokKhaS1g28",
  "key12": "4iQWxwfVkoHBs4dhGo13hfzuvowa2R91Bk4aADvB1V5DgwvVPaVPcGXjnXGk81HBsaPJ7TVURJxPWS8chR59PPcf",
  "key13": "bTLCWrxxfMMSUDmUoYMA3wR5aL4zuSsV41YePoGuhjRZQBykbg2NehhD8cc9xmYw2sxWxt1ttqfoRRXnv7HDExv",
  "key14": "2W9tJ7N1yjhJARvSKkmUjVJRN2hK5qy6yVHiNy59Eq6tdxXwNmbG35mS2NsCmp6tXmVcyfZAQkZJhyUgFJqgkQZq",
  "key15": "38C2nSQpRdKwc9YVhpj2mvbZ6Y5zu1kVA5S1t5Cr9rx1an7npkB8mZxjKJVodrhyjRdUt4JtzeDBHwShNmyNqQsX",
  "key16": "5xkKva5aPE8gZkR6Yav262pkheTeGGBjsgXtohThQk1puobPvsJXQh6cGMmRxtmLDujQMHR8MttDtHExxVxiZsuZ",
  "key17": "31sSWFbw9sSbhKMg7mFU3WveChTTCQvFAbCSJ46feJcnd2p3A3DwwfMML8v3BcaCioNSMGBR4iZXFTyC5JgbsXiq",
  "key18": "2WaPdnqZn9UvEfNZoQsdrxVfWdt9C9pm16dkvewce7re2ToDgyKHd2zaiqv3YakJhEKHxKP48k3So4sq5Az8cdKe",
  "key19": "4UA7FBGKNDaTH8xky4JUBT7P7teJUHQVzF8XgRfRtVXi8C1J2iEsYHR1v1FnKsSiMrQmFaEKXrsFN34NVc8UBjgE",
  "key20": "4iuKMubUTicZDpHNgQpMGr66nLn6s9o882PjTkrqJHDxoGGhAgGZb4dsd6SPLNGaHBX2bmp8dQ4s18nXeTS27TRb",
  "key21": "4Ce8f1dm5xKty89b28iNqMypY158JsTh8NMTitxKLFj8PgqD9xoJJJRe8AQFu424V9PXEFdQ68ryLXj2wkMNkGqE",
  "key22": "5wfwijTSUp1KbD7McSYKgEkpCYXWTePNZB6TC9tVYwYtgP6jvGtVgD8kLdiB9fhQPAv98JpjJWE4zDk6A7imMicb",
  "key23": "3aMSoZsa1nfCNBQDBz3sowLcSvXFcKherpHXDAm3Gfums6ZhyGKHMJREcHxKbyWbLDDTVUrGZnhR3uFxD2QezSNj",
  "key24": "33RM9NL2Vaxv7x9EphZPb7w4Fh79dQh134MpDwHtCBpVWTL27FRwaVcqtjV3RypoNrbeCUHGpQBBL5G8AnNjchJZ",
  "key25": "3phFBRX53mBFoCasTXTqq893z2YdS4igqmgGrmrfqNvb9rteEYoSTTc8swxdZNzuojW4YtMHEuLhmr14zURc72Uk",
  "key26": "3VDUvScwLZBkacQSfUanL4PqNM5Xk17pYU2WRQhh9z8bAXYdTKrGv5eAwha4C52kVjUYkSbXnYq8NCby35vwrFEf",
  "key27": "4ZNvmhiDE2mt4LBhWMWfcfRdjak3iYqzthGKbnCBmxqm5YyraGV4eA9QC5q3qr16qqGRUfJWt3GML8J8C4fd4Cxb",
  "key28": "2RptmJ4T1rRezuJxAWhEA9Yirw86Syp2tjtzRpajcD4QwSWn5go6Q8KX9ojQVNDSQG4UiWdKNjN9xMqSaaav7n8K",
  "key29": "Qw8dwdajMpsC6bqaSvYwmPMMKdZvEvcwbcaYEpr4FJCgu1wF9HVZSCHWGWQEyHjgLJ2GSC5rU3HztAU4BrNEUfa"
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
