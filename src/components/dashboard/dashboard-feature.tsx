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
    "2qPQ6CxerM7ZHNPSSDi12vddoDmSVapS53YAfQn1xi2RQB21HYF82TKfygnLotAEsfJr9UFhU8dNAtsuaJxbE8HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G7UtYch5aUbjDjKHUh9f6kmBUKSHvkZc7b95ewFGPxJ3JW6G9D9U3phGoG4g2wpvKi4n462LJn2qG3MigA2t8Zt",
  "key1": "4PZrgQUBUstLgJj4kVWY2B1NTB69Jfgg798ngeb2unxgxYWPyu6bVjfFdKwM2wPwTiF1fXLx1w7GpHAxJbwHrakP",
  "key2": "2dhUrTMxtyEN8n3LtvZk4NKqT3XJqbKxUEnjVRdNxSboxMVDmwPvFYCZcqdVde1unec827xewDD4CQ1fH3kbBNHr",
  "key3": "2RxeBP3hDXCPhkwSP6KtdSWpLgmdstT6jUJapQXzU8nBCy5QdX6komUTYXdfjkF8ZQQMoJXPBRDkxpq9bLLV4Sti",
  "key4": "zjNxVvyDtfRXj1tbJK2i1M3j4nN5Md7CKVAoRbDBQ7vEyJP75TfpFswRApwMUEU1u3jNLzaaBJraFuVeTCpxLsp",
  "key5": "5gq73hMcLW3zBnTwe5JTWiaQbyQKmZc3Zwq4YN1efaVCCj2mS1M1uZe1jxzx8HJYL9jdChHXGnG2GGLVV5qPKaK4",
  "key6": "6T6DqkkWNCLJjtCa8atYT9c8RYRi5Q5sQ1k19CbFr9Vnh6crFrLBwNUMieLb83TDmavpa9K5ud9QnXhCfhBKm5B",
  "key7": "2M9vLtAjbN18W4RX2gjahUjTgVfdfqTfZznNTHkmXFLaePHtwsXP2F7NZDf2hBTRZohnSLEhwhorcyqP4k7B2ASq",
  "key8": "38JEKUnD9B5kVqMMtd6WSUSKpgiffZmXeJHvUouJh1GsxXDAe6RrnM42BczhqqLtmFsQkApFRFRvJnqS7KNAupNN",
  "key9": "2bkNQg1bAPdK3VxFd2mvXtkshhT9pJ4bcibFqtXPJnXkYi8AuGa5Lz8KyeApXvV6NNEoDWKp5eamYAZuxqndVZmf",
  "key10": "4Dqut63J1CrrjR86hoQRbBrUs9ayQ8R7HRzc5S3bd1kuEuynrtd31pj5waUbq9F9F7ZajJcCxPJ1EMcXqWq3fViV",
  "key11": "B4wUm9MKf2j8kinMiq4SnUJS3i8xJ3sACYYMY3cEvbMKUAbGTfGGJueDx7vTjvxEcHdTmYv6WLbXFUCf5c17DJU",
  "key12": "WKGoCPcfN7SsZcsDt7DMRJZ4BMJNhz6JKtjjGC1LdTYw7kjjpUHc4GgS58r5pvXR1sdmj1eHMKteePh459ZJQbt",
  "key13": "manu4FsDJsBNDVDakMJYDHQSQfYqX1mzd3JP21G3A8bLnMKyayrPDwW3ujBDqwsfYUG3EESzMQ127bU21sWnT1y",
  "key14": "3wuP1DQa8A8VbVjqB4Gij5dPmnW8KF87j3TC6E7SBV6vQ1xk6mNUympXznRzREGAJR7qzA2myHhXnnPf4XRk3Vix",
  "key15": "L4fcmBHN7uHS42h42oi54QtAJoE6V6rGF5GaLAFYBUJqH3JKbrwDzHfreNv1JkkNCvBztUNS3BAM1mNeFjCPBnY",
  "key16": "5e9nGTnb9ctpsFeoFvuvyed9xuhNNWHFrs2sbKULE5vvtDc1dVW4bLDk1JGCSWGWQixzqgxSqkcRLB6hxFy6Z1KS",
  "key17": "5EE7XFsrRkhNpHjfWJF8FEoFFChodypxR99MARdEK91PfnxKLgffBFY41W15ud7tCcotKmSBStRVF4rpDL4PH4C",
  "key18": "4u3W1YYEYbojMKZbC6GTkUjVMakaSbV5iCtR8fMXN3GjEYYrQGUcwnC6hTBEET7HqWmpU3Qis5xNDBCiymgMLiiB",
  "key19": "5dZ5hpbCjjqsBy7BgHguNoJQj6CmzV1tWMbjp4SdqMKe1DRsoLatu151KWTpia5i6r1UFy5Qgu5kWdDchoWhLBhU",
  "key20": "2JFpdzmcaia79Y5xFRJWqKXXf4c6m6k9fpBDiE2UkZoax6eqjEzihHSxx2xcUtvJ1zA2wG7i9YsSahqqdMM5zgkF",
  "key21": "243NqkALo4E1TtwRDS6umgVRCHmVDGWPKXSFHNrdMDnUfDFnKR9n94QF73bfgNvzRbDwhyuNZySgrKmsVTp3A4Qv",
  "key22": "2JWEyNDrZzLrGwLHGXfhe2cGZAb44K9ZqbVCpRuP8zzPDQCqyi6NmXYYu8SKANzYBQ1KrYmTtLEc3YU748ffF1XK",
  "key23": "7HWWSMdTRJKWUCzrbo4cs5bztg6eCbAFzkZPaW2adNxepkLqMRD1CGjjENmqgTq9pbPVBV4UBdmFmBN7mCcoPgC",
  "key24": "ZPLPPNtc7nKnExS4XmXhDjgA8sdYX7L39m7in8rCg1wccPuCHetHisH8fLvYksN3iwZYgvxfmdkAQZmnBNHbHiE",
  "key25": "5pLTYAzMw8KUka9YdpuRQ1FPWiCpC17BgYHytwpgcrygSWJgXJDwGtmRZWvSEE2KRWgZ8hqywe42f7j9wj96TxC3",
  "key26": "3DcfA1afdde9jQPrBtZdVQ6am5Yd4KEWB5XiwiErsYsWHQTGmuAuLYjtrcvsavfbmTvqTqAGdon8wEznksnj1DmK",
  "key27": "3rcBzMcixeihqEb9zkTB9teV2huNKkLCgBMF5iwenr5SHEZS7Yj66dk3dsNb1SzXGCiNYtMfNMYtqSjqaELCyVL",
  "key28": "2eD4nxrrWA3DdhEPCii2Az8p8kka9hwDDQi4nNWD57gngFiGUjToJuz1kCfNxuouuC9CqmkZQ59mZYZiMARC2Mp2",
  "key29": "5HRN7QMoH4NZxQbS8QP1W5qjX4QMbnoLcM7iPJw78h4qxCqph5PVnuAFoAFeH2d3p29QbQyPvc1ekk5iML84G2Ae"
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
