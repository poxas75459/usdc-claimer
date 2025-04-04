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
    "3cm8LZE6GaVWqp2e9LauuvFFimCWyXuZYRqhSbE4DUeH52jNK1gtUPyqG6yRF61omdhVRJwimdmmvA7TT2SbHg2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qyxh2X1qEg7b1cTFK2VGp4pH5Z2qiHNDMwM7BuKYgy7eHxQVo81V161wYd81PHKL6rkZaGKmGz4HCuYMVLDuj3R",
  "key1": "4SRSqoZL1prMC7oC511FMXaBBMmW8H7NHc4kkWSJ4UerAjdbLnHRpG9qPHnjYLHahMRK8fpHDBxsTcEVtDNpiC4Y",
  "key2": "47wYk5j3U8yxwgkTzUumzMokoZzQqSbnepLY6qNyMhzREor776gobUNLvuHYr6RkEbCJd4JTqCMGvNiUwH7uYPXz",
  "key3": "35fyyLx4PsaxKU5WFXfuT8duuywqSZnxnUvxpAsF2NJJrrGENu1FrGVx1nFEbJvsdMSUTrUsAvq2VNwcbXvRzMwe",
  "key4": "3L3j7ZzCkuNWqetHfKwik3CZJEE46RUYKyinh7VokSrmMJ4gqzYYHHKH7YwrBfiwAoQp3QHW42C1jk4EX61Rf6rb",
  "key5": "GZHUP67nU2vEr9cohCtnwomj7mxVCYCni613QyCkJjaPCbg6xFcfAqW6QSEnpS4bDzvF2NmVvCrqDw7HuxQjzKF",
  "key6": "2o8yTNMdEKr3Py1ty71asiqYFqZnykA3H77LNhKVpPxFMAX6eoV9AFvHpc7dphsv1ezMnTMvHvjizBve5GyB2wRp",
  "key7": "TtQ6jw3CopjLMGTDdnagLsoYRpAmP51pbVusAV2dbnJEQmrFkWZdi5jgttbFt9HYAzD1J4iGmmyKuMHP1FhjvHN",
  "key8": "cr3mWJneWBAB5ES8STBMPwEL3BQ9cqt4EPcyBxBvvhXMj4pR9wVrYPUH9RRSug59rJzZvvHRfAkaj17CGSAYS6x",
  "key9": "542NkjB23CFRrcwu62vpdQgHKMjw4FkwQ1PNP34tUvgsQryhCEj73hE4pJwKaZAzkhiUt9bUsUu4zPNrLfR2m35W",
  "key10": "2cFvZ1CSSRWxypZr2Y8Q3834CxPTP9iCtyp8wDMguA9QEq3JGEXvx85NW6CgnxZYFvidup1rWd6m8sExCVRRkGzX",
  "key11": "661tHBhxiQBMowASb7A5kRAZkqKt2FCJTgd8pSjm1khiHxiWy35QADaMe1Mm51tznLVfvoNqKUKBss96rE4xcL78",
  "key12": "LPQKgaMeth9QLPcnC12pFZpqDfqNBvgGkJ4NUcP5EYTo2Dak6KWZobkG48Z81ZHeMNuSv1eBrPBEGg6Sve6ktL3",
  "key13": "2s8LmfpVhdBTEjcb17Wxyf2EjY9Jisqqq9KyPEHAqxftUKbjQggkzXM9cwg1Lf6damRRYyVFvkg4C8BHgCXQ3kk5",
  "key14": "2vwDeNTkYeV7A5uzSTrUf3rPKWdtcLNJ33mKzUdZm8QyKeYTcy5g2DizU1ZJdsXT4q1ZULK1TqyyFxK8CG8acnw7",
  "key15": "5P33fEnm6hig6pk6V9povg4JJ7TMndnfUVrQTLCK6rad7pi8bGEpBXN6anuYXLK1EpWtdnXw8zhafNawGFwfBewp",
  "key16": "2endUZ1zKFjuCYiivEff7jpqqqewaCRGP4HPrv8KQBxzXaSqjRkg52twV8eWGXUYQZRFCLLjfDUWEjpt2rnY1UxJ",
  "key17": "FCDkm6ot5qt4maZVYf48KCuUx2Jsvt6Kza6hwcNttgB2HfYF4nMEzMzBgyoVZbXZoFZkSjYVkgq9MWYcH4WYgnq",
  "key18": "2nMjovEurrXNA9GDEtnPrByuwdAhmsCTytGpfb4zuJqHd2CqeX7sYW9ynyYUMTADJJw2WUh6bpMqEPVHgZLqTYZi",
  "key19": "26VXN4SjEoNs7XFmU3GLknHCXVtVDuGsfVf2DfoS7hpUUiFH3XBxv2W15jf5vk1y1sLPVyGYjsqRBDfVY6tQN9UD",
  "key20": "2g3HEuQgAVtHk7oTaAVY1MTJ8K5n6GaH4yt3JuF75sVMhj1VMLX7qBY6eTHMpRnEFfQh8jLJp1VfAf1nLkQ3R1RF",
  "key21": "46KyuDhZQvji3JbU6MqPLkerZeyCT6SgxohwjphLF2x7UMTYaFzoPsfaQDVq2z6tMRRn9HtTfiP4jgWwdw7bu3Dx",
  "key22": "aQ8G7sEnJa5L5dBArtjApjueWuCNjQ8n1jPn6tn7tH5rJhLR8nbq5uRWsResX4VRaa3gFQbZ2KVX64r7UZqyw3H",
  "key23": "4J1ijHVCxvjQU6opzM4QVuVL6T2c8PQ9cY8fUtm5JMP4fRR1pN1BrPUFsikFCfJs5nunpc2gihKKfdZvtRUbLN8s",
  "key24": "261W5WPtR7b9V6isU35Nk2XehTiavQYZAZzGBgJ9skLRPcrDXbpzM2cSM1XD39ExAkUUsuZdWi4s6bz5BnabibrZ",
  "key25": "mEfkGuDk9GE2WJPE21FGFi6NLXVmQbzteMSMqjM7EewaMaFPWFHY8caBg4xUCDe7PAZQZNwhhmuxXHwLxFdUU5r",
  "key26": "4wFeaydFZ41HGvP42RPeCFBPeGTHuNN4ChFgKh74Xk3GKM3enRUeskpdS8jcKSYCgNbdbTwh5e1vrPKDorWtFvvt",
  "key27": "2vWEKhbqBnvtKqkQ1Gn7ZmibNyyqbpHT2dK7yFzWwAApVHfrnips9N9PjxKbddV3zvboUr8NzwYbcHFVh9v45mgN"
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
