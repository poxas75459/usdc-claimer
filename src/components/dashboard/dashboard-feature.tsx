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
    "4Djm9HZTLDCiBcUq8A69KrmoG9fxTj6EsQKvPJZKfZ9YEgMNw8j7FFzD8qCNRpG42eJFy1hG8SAVRmMpoUdEk6d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oS7Wvp2cdiNdBAPHWr1nqLNy7DNEJZDb896QNZkdcfhWdSdto1mWQuRNqimg2cVHGPZYj7iuYJijMyZkQnwSNFz",
  "key1": "hDRPPLg5xerXfrWPBRojSGiaK8dEavhhG8sGTUa1qnhFKQDzB3AnKtXeDPEHpKF1gVYbpdMRs77AtetCXfeYcvh",
  "key2": "4bBLUgoTFE7ZKLnt8M6aDiJzAsmWUoxzBp6yy3ypr4QMK8bgLUFT5hEy3vMNz8EzQrP7ecm1RwEWdZMskXaML6Lf",
  "key3": "4DT9z58dfFqUjnc1QKgME5vYiKzAewq1k6R4uZt4ur7QbQhWG3UNgRFbSToERY27Qc5f2fdSxBjBy1WZdrpnLfQW",
  "key4": "4m5hZmeEdQjVgh6RbGNGNqhvwmnkB9JkC79T3a4mkVgxDhAec6seBnZXZbTH3mKWT1xC7Q34DNZGLfr4J26Ns2NG",
  "key5": "4qh7q4SDjf5LGD1FE6LJh2GcQMMCivbVUukCFB58zms3UvmM23FGkuoAeykDhwLtgLVjtpix3i7XF9CiCdtj6v3x",
  "key6": "4zLQXVckJ1BULHzC7CkTZZZqwFEqJoWRN5xk7x9gEXLkDvLu1zuuErTRNY6B6q7xAe3MaEyw6RF2vspXTD1bhqmS",
  "key7": "3hSoq9QSfiJfuUKoPQLsfz6jzwXqdUB3xvmRVoUmcWx4XsWKKFMWmAmRXhCwGhyi4cn6KueygUsA8S6cC3sa8ANz",
  "key8": "3d2fg1MMsCxiWGPZ1YhXBQ6X1vW9upXRvsdWJWH2vNMKzfKPzKYV41pvVSLeTMeW7NRfcwZxCUFHZUmHN1jjVRBi",
  "key9": "4JUCYVKERpHJgpiftDapNqXwJKd9mRPo5Pqn87NioqN2FBAxhH6CmNtznfV4Zo2zTrUUV81DGGzznCgeXc8Jqe9C",
  "key10": "3m2Sx71mXS42rBon1t1CxeqUyy7g3sos6D5kMB5wQBj3Z2AdBsZ2nBtFN4rXDgzuTRJG4jjzUKGLaRx6vJeHs6Yv",
  "key11": "3y8SKVDScaJPZP8MyuiRUvvQfupzEmjByvR1zgYapdzPb4hVWDE1Yq5D6mGJLehUeXBwfDDkyP5sMGKXudiyuzDu",
  "key12": "qq4oG85kUKo6ppvQA534KZFMTUt4b5r3iNeEJEvrySbRQLnFLtEiVQwFVyywMrGoQYZ3z4cHTBe8jKr7DC7DDaF",
  "key13": "1PpCDkBzoLzdkDJ6JK35FEDsGzJdREWGEer96PCGsHoaqMD1RjbRZVMZ6FZjuArScx4q9rc6MAzsJHNposPYFT4",
  "key14": "4poRZdeGL4MVqE5W2cxSpxmwKvjXZGQmmfcgiBZbamEQFqxfo1yeui9DnUj8cDr3mmpN7RT85XQUweoGcrHCQGz8",
  "key15": "5vyT6WXaNfPGRdGDGo7kfrGeXWEyvMivMD92s9PR2Qyi2GtJJm4bdYnA2G1h8osKXTWXW9kAVsMPj1HhUjheCfuz",
  "key16": "51366cStUKu3N9QD8BCiREmw2oJWyboZeYmZwieqJ9fGAP6rRyT8cvjVLJRi6sg3WvtVHFTK5tt2epeFvkZ8FYn4",
  "key17": "63cyU6FEzQpMJBA8tPQSCQzdHCbZZAx73YXQfJuMH1HGTH2M1RisVAmk2HGCvhz1k5a7kCRqfW85KzSQuEDAusi1",
  "key18": "3AHKddr4SfBWEh6ghkxMbGFpN8qjfkYtbVdukUZXZKMC7q1r65UMUw2xKMXwWSxK3DbHVr8SEjc4Y47e5iohFhzu",
  "key19": "3FSSaSSiizWeyxKtoQrNDRGJ8UoPWixa9sYwckBVk48FbMkQhMfQbDqvVi5FZsat3vcHhnNd57fdW8oYhuaKNG4s",
  "key20": "3h9uzPVHFgBp68BectqZUCfSVFtqJAQquiTAtW9XL6yK8LBWkWvYaufLASggLfZCYq26DDNtYJiarz6YCv9tNz8x",
  "key21": "5osZvg5TUmSAFkkmYdqUJS3kWPs2rmDVDzXujV4vmS5d6JShnfx3U6cpKSoFjryXzPPiKNwGcJqmu7JYu3nPYhs2",
  "key22": "4TZV9mx5RMBKP3Wixv4FZw6G5FbcxGTHdVnFssDBU4vzVZvhD5eZH4H2dzAX7yfmHqiY5VFJVH62ZgRGEgKVfPcr",
  "key23": "4WPY5s1k1yuuHedoQL2S4teh9fG9tX2bLpAFg1ERWnw8fv1PBfefo61QSRS6dvpTE1NSjwuGXt7zhPi18Sf66r7o",
  "key24": "2CS6udXFSPyizdZaYdpuGJrrzi67YvJdk3j9JQauajG7jssNkZqeyhKepLNCvW2b1r42HtxEgywAsZ2V1NEwS7to"
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
