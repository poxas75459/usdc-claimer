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
    "4Dv8GX6GNNuMPX2RTYVyCqYZVdEf7yRgAHDPdAdcZqEKi4CTX8qp74NHZKGt5eZyzbfKNLpW1UtPDj4sQJdTyw5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Ha9KPcpdRGHW82yodqV4rYu1oGimDqe7bhJ2gUM8wvW6DZa5xB5zbaDtC5Xvwdo5DxnexRJkbMw4D2tBLYmmwF",
  "key1": "5aqvtBrpxgd8NFt8WfoTjGWoWunHKgy9MXLU3bU1yYzLpgvfiDL7abx8EdDaaBeUbQEvT2Z7PRpYBeMjKEUG3m9G",
  "key2": "fGwdQUqoFyzTPNejvM9nejhZNEcbWp5HtuhV2MTrNGdQqh3MtzrbtxLcvhbL93ZKbKMbiRdjLnf11PGtu6V5ybu",
  "key3": "3DPPzRjGP3ciiQgFyJQv6QeVHxn6Ef3AedwSgrdVpTEtcprEEsujL1pP97jGK1EHkTMCK55koaNNszWvdkEvZMvN",
  "key4": "5FTKYQw94Exv69V4KwyZCq8u4BZgTbAre4CEMFrUk3GgERtjWMegG8zmsM25fkDnqxoz5FxxqD7gRATGhoTtU8db",
  "key5": "5of7fspyFe1skrprEPJPfN2mFSxiXg1QdKiwPRFvNPcri3vsxvbuCvMGsRzygfRGgK3udSRtCn4zWHUy8vXUKJFv",
  "key6": "4F9M6rDjrUhNueLFts5SBR9Q4LxFNawA4Y4XQjEB5i9ZKtWzMWD2g8N6WS9oRctwkGSrVDuCnRni86ycMB11MCuX",
  "key7": "wkQstpnRxirgkXiZ3YDqq3U4hs7Ab1negZTfYeR3PWuHLWcNwYwmMeXMmnSKA77WW9b3npVhTcjyqLNRpgSygeW",
  "key8": "4XCW6ttFNhtakUDsaHHggynj29ib54ZUsJHAakx5vjP7BZhm4usuDAPFnsbecsFikC98p7JKAZZXGMhMFamoea29",
  "key9": "2Lui9VDGvUPxQRNtaPpP8Ezt34ZmUQfHVpYt7wVeRR6CoDEoo5Ye4N7tNukw7MzvWeg8Cj8xAMDtEZaBYmaZihCj",
  "key10": "3iFxhDjkdo3cFjmku9TN9W5ffeksB3BCxLu3QGH27YN3puCxB1SzYRHDrdxif37936J64V74h7sm42J6EosDXmHB",
  "key11": "4yrtrDJn3ehrrXnCghcSN2YKEokDuLwGjzrLnX2kwZ169QjJtbJYwHCYDNukfkaBn84inahAH5SsYJi6Twc5izW3",
  "key12": "5aA3k9FeBApcRLu4wQJtUC2RtGLKifWBwWHjzpqL3ggNeTMwDNFP1Gxaq7zd6TqukV3TkXgEhtAWH7JLSEscv4EZ",
  "key13": "msFZ9BGW5ytthbQx5Y94qx1EbFqvKn5QFzSBMhVK13cP5ShgisgtaotS4jQjEp2NqzNBnFrZBJaD8mh2bhSuXja",
  "key14": "4ErzoxPEg51PDHPryHY2PcoU6hL6M1wiFie71LTPz37E7gzg95RQaBPogYKwSDhUcTg7EHuUz9iymV1k1ybxvaXo",
  "key15": "3rxhh1WbtC36WShPa1gyxU1hQEzQsRntA8YCLXbNMSudzp1vJnH3GuxxZSmcmBQH5hhSB8n1cZipwRzxD8z25DUM",
  "key16": "2hULhHHS22Kvrr6NHPKF7C62Jx8ZqKeYB6B9gzF7zwVQxruEedg3rM2PrQU9k7mcy3P6bf4nhVLicxkQXztdL1uL",
  "key17": "4xhuGwBdx2JdSoCQu8tBNau7XiGuToPbAYidvisa6BUobj5svGe3gWfd8BoFsRwS9nBfgwuGbSU73oniWpoNZKS2",
  "key18": "fMNoXC9zJJMVrfk3FZbAxHL6RyBaCif45Q5J7UvCaJiENJAsJtYNCjxYkxc91eSKy4yVq94tYEZLCQthwQx5ryx",
  "key19": "2gfLezVmksuqJdVnHJjN6LswRMmvKm1FzdKfy5yULifAVQvrNFcPFYBPdcCLBKacNZHLBz1zsgVHP6B5NWM9Xh6L",
  "key20": "5xxwbBRHJF5UZbyW3pV3EosC8Beqdtyac4BLm6DyKfDJn3urjGoz5vBBhBfYaGdU8krkzTacGL5kw9rqZ9GH8Tt1",
  "key21": "3Q7os9CV4VQ3GkuDChbQYzfK1uRy93noNEFxwF9na9rkeG6vsaUTM9n6ponK5tvJfXbBc5REkDSwi9fR2x2mPode",
  "key22": "3jkmAwM7X9GQncYw8ZGKLK1ogctEg3aDa4CT678rus9vtvJRR2dNCyVDcMtAvXzkJmPJ6rY6o7Ag97rM4Ew4az1G",
  "key23": "2sQ32Yeqb6p8NaynfjA91A1f9TwwqUaXJVYQMQazUHfSJCWYCTqJ2r9YoY2NWt61DbLQPXTGK1aLjZaiAwF5cjuo",
  "key24": "466kHRoJ69ugVXBHitbqoCjgnBYAZDrLN34xBNnFCnM2hKbhKShx82UTNiydBvaXLgj6hQKyGG2iASGcNjD46wSE",
  "key25": "52QKayaGTzc8YfTRVsQMyykckP6mFEdMHQkTKPMCAVQXmyVETBz3rE7dqisUU9H8TwXkYwTxXuXWzz5dBCKcyYxe",
  "key26": "24H4KTS7PYWq8rBF3VxbBrc8i7yyHfPN5NfJkxZ7ZqKFQZCDx6Dq9RJeSjFuEoJp692iqUCqXW7vEqixCqTScK2S",
  "key27": "4ttDHzaEpmrHDshv5YmnM7u7LjR6SAUvYd3651Z4Bdn75a7zwxYr85uakJ3nYD8SdWNVEixsfonjAH2vQyYTNbb3",
  "key28": "2sgawqxVcqAwxh9k7Kx5ZHLoNHqrKZk2wf22HUVR95d4WzupJu4HPUFPELt6GcPjgUhBt6Aekj3z4VvBis8oDeph",
  "key29": "4v6WrUwekoa8ENA6YatGfvni5jN56aaxgApZ6Ysn6XFoah4tCVHELCGAsd9jiPLTUskdCYvk15ToKR5AksVgN8P5",
  "key30": "5NvYHxQSKfynCbUzjKERKHWDcBSnZYsB5RQPFTd7rXf3mvRNqJ6eRD85nwrHZmeC4BLfDFyPvUVzhd7jkR4YfywD",
  "key31": "GNb3zXfKM6DdUT3uRNVKKvqQremiECqcv6jADQpSwQkaM69oSbyXkK17HGBNZHaV9cGqr7TkaU99AR6S9JrMFPR",
  "key32": "3ZPzbmSXcXYLzBv1hrc98Lv76ghBjHdtLjD9QPkAPqXBbfhk8CXMaT1AaTishXrS7UAn1wQmCNDu4Rvj9wYkEQc9",
  "key33": "3mBiG2hRgd5UJGkSdP1K4fvcf7odyeAHdCYaMjmJVoNnC7vEUQC9uhXgcMosufF2BLJ7vALmEqF9EztQs2SNg7v4",
  "key34": "2hL8FQfF4TUJKmUd9dVMB26b2qJYzMhciLRNwjvWKCVZU8JPUjrYpNSRa6CbW4CE4QQVG48CFa3NcQkRWPUunXfP",
  "key35": "2jCGcZZ5ek9ttHP55KXhYLJycgSwD624adGAFHNjSdkNTp7zU6mskkEfZaGkER9SEu5ULFbDpmogw3dsVu6KWPH3"
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
