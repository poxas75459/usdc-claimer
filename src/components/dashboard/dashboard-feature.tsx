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
    "5eSv7v6Ua3eeGNGsENbB4syiokXDmTwACjWB7zonucoiyDi98qHsWHQSJzNeM8y2ZhsawPk4NNKkg87kJJsscavu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c5iKHbGw7wKFNjJEJq6BYmx34Y2pn1wYBJFrhJd7jMCgLwXwawSvtxCao57EhMnrDQwjQ6z712Siode726f9dpP",
  "key1": "395WE4Lxf591whoFKUBdU6gztkUUquUj86MNhsd4andR7WGrN4unmz9VvZFovKMvSGo8kBZP8ejee4fEgSNunXYa",
  "key2": "354CReDNwbYGcTSqKihmwFTjB68tcNGfrZbA91v3QFNp7mJrroNgXdqNicoR55KMqSWh6Yn2mHaZcfahqYDwrRZK",
  "key3": "2REHLps7iC7esiJNd9rWoDjxzTjpD75Ugz7PPXXduoefuRbABi9gdgsNp9oeYNXFkjYK5h6DyBCNLrXCdaDuXNvu",
  "key4": "538mfYGiiCJ5Hz8ZrFN3U7XBgD1NdSuziq5ZsDeGhdehG47R5GTtkoycPsczDxyaG2gUxmskeYzzeNb9GU9HhMw8",
  "key5": "2K7crpqye36ouRF3p7KBKcYePGx2AkgQQLVu3S1gDPEr2pnJVCr1XCW1qCn8eWkU6ri4uzyjKK3CE4HjwBmWwMdY",
  "key6": "3V315qBGcUkbcTwYG6wTZ7PV7aQQDZGj5zy1CHQvNrVkXrk8Rm9zbobUh7eHwGHqH47yh3nPBop1F3EwvRUZjUu8",
  "key7": "2ZasZZPwydL2ym8aVFR8mTjcruwp9oboRmUkBRKLEMesHzRSbp3RLArYEaL8kRyPyYf3JcQgiMma7iyv9ZyCvMRQ",
  "key8": "35SnKvjbkeGcBDUGzjEjGUBSKnb854uwR1NziCEqUnwQy25oRpr3NTFTNPvPPqGqZwBwayR9Mc9Xc3TZunqK2aTn",
  "key9": "4frmkHeEw1qgWWYUdHLzo6ExSrEqM92UuuufFiyvRA4kmXGPcaB6BziNeaH6h9gW2UvECn6akPDnM9nnminMoPpQ",
  "key10": "5PA9kiDe5hCs3deUu3q6sH4EQ647M7ZCmHCqT5XsBspt4mgWxVTrGaicGPPMFvXdsn3V1RjhMTdWixwq9P4VPryQ",
  "key11": "3bxu18XayLQWNi2mM62WSj7b4AnuJc4uvmNivxCvavnJvQSmcAnVPe8ejXDaR7TTe2zXG2AWCijMDzvmSd5A61Qn",
  "key12": "3dq6PpyghVUVkEzPiWF3fxSBcoPzQuTHE1CLarqVodNZa1XcJ5gKv33wKDRkaBnPCcdAnLv7v3XE5fJL2Dzjo6ir",
  "key13": "2wXuZVtECwuCSS3LCr38mCyRBULgXcboumVdJGGMRtFfFr6U4DVuzeop4aeW8PzFtjJFQQoH7Q5nZibiHR7xVZRD",
  "key14": "2mjK5tUwAHSoU4rr7SMvFTPPunr5ZjVJDaobi9RkY5eBZak8nxsNEbupKb1R8utzNqgqQ6G4gMAs4vTKZupb2Hr4",
  "key15": "32t9JEqc4GQ81fwNX54RUTa1yS6UK9DFZtxRGzstVyh5FWFvzPXhnMt1M3kTYTZG26LPgPQvGBwgmnEfnUSiokbZ",
  "key16": "4mRW54bkVx5WJxw8Z4CtU2bwGRoRsAhMwZfjE7Msdxv8cnoqB8m9euJwra86VpkMu3VMmXfBfFfNxGLMFYiVJV93",
  "key17": "uYMDN6izhSGxHhstPu5ufBncVd3RJEXyVGhCMdNff7HfDCSy3q7KD6kK52Xm7gEfRh4p47NrW522byS8d9TaFcV",
  "key18": "5fZU33Dxj5ZDCQ2Ss2PeSdVVyaJ7mswm6bX2nLGjyj3ThrtAW7LnZt81u4JAxjNjTMusThPoe5JURqWe6LmmaHTP",
  "key19": "5Q27fUNiNREF6YyFKMVbAJXrdgikJDVGCEizqERKtDzKP8eRTSpyoXKxfmegGvh3cuz68sgo9bKf1gWgFR47hvvv",
  "key20": "WBCzz67917aLy1p6nFf8ixaz37VwYCRHMPuaApuc8UjmaCwFbPRaW8FQPGDxA3FnoJzm36buB7XNpPQQ8PKaiBQ",
  "key21": "JfS1qyk6GVy2G4aCkWBf5u3WzbnGKucUiMn8VRVw9vzfmugDYE3Qi8ira7n9JQMCgVsfq3Jmt7TX6LujjBPyN9N",
  "key22": "4eUm4QsfG4caBb9HWdAu3xrd7dCvanYBw7w7eCdgkXGwS85CPbKd4KKcWLhnKmqS2R2tsVdJxaD9vUPvGBowvCBK",
  "key23": "33cqmvocsquMXP5kwjAMHC438GueqZDuMHC3z2CzQUbim18GMmFixQcPZETVe2uuyDwfAfv8c6sxaEHXGgYRuTTF",
  "key24": "33kXUkerFbxYtcdB3n6f76xkrqoF5VBW2qwjDnkXQfF93MvMfX5Sk5DHnftwHf5Z2HwrZvjuypSpJadvTHv2vbRK",
  "key25": "BwDbGjo58vE7SqAuwsrPcyr6zBEg6eQcyVfVAvGX41bPtQomjRdGGkUx9YnG1qT3XyG8V3DGKKGTU1DwoqK65QY",
  "key26": "31sPRTPv8qfQdTzmd68D3HuWj25z5jxZm2v41jcRGanrnVevhWBQVuAicjQjYwTtVhFwunrStkHV8uaVSMan42FS",
  "key27": "2rpvG1aTnUYx2oZYuxRWD9h49CWSitRPqxx4DN4iiqCXB7CYygeETVRyrVieRD8WMdo2VuWFvS2aC67FpGPRZ6wB",
  "key28": "5Pd3pwUqMj2YgJ7oCeYXtfqmswTUp8L3uEM8piTCY7Jd4J2K6FGB9EL7PtTAZGdFbuEKPb8qPiwVZ2v1DUU86JHD",
  "key29": "4dT6ALToch2SMYg84JY6TCJXAoaMZkF2UzR7n6VFZCQYDuyqWoHxX79HrpyAUVqfUcEkW1A1QdQ24KS5518WxpJ1",
  "key30": "YNP2D5yUw8khQbQZ74BFPGCEYTWUN8FD86pTx3WQwp3gt3VJQjyXzqJVRcqEr1ayAoqRqB8rKGosQviM5orRd79",
  "key31": "2n9FD3Usr9gX7JCu2t2VA3P3xV7DUz4eb2qVcdjck613MpGbWB3qPrGPz6KcbVB1PB2fYo3JfZmNimwDADPugVxs",
  "key32": "2zev7ebwwkcdD9yqruiZ1Nujaiu1pfDqgbQ5ya2Ts3iij6HuzLbjKPoExLcyWJWKNUBUcevoNSmZxA9Jvymtjmj7",
  "key33": "2eAPnZcy51Kz5Ep3hEdgLYeoQ1nUr8EDRP66Fh9G9uxB1RtpHHWS5six15fTpAedfqptjKsZNPjm18vuqkUPC5V5",
  "key34": "288VMiy1xz2PJEUCKdX7o1ai11R89SKdNatZiPPTs3g8xfhHWSDVqTwe7YeATuPAzHzJnPwb7984uHA6UdcTXMBn",
  "key35": "3LZQZPkDs4xwneMMS4qvf7gouu95cgcRxte6w8ycvmmECVH3W3167UtdvBLZSx1e5nSodhsNcHqfLQ33i7ZzUrV2",
  "key36": "42833ZYUtBV3mwM5FBzkg2HCtgjZ2ERGAwFbpJJFopf4HwwgnxshDM5oCgvtyvDyZs3i1wwho84LdMkWWbr7MdgA",
  "key37": "3Hq8G9cNxiHTxPjqPh5xVadztoVRHKa7KMAf5uDTC8APmoFoe8GfyS9ocAi2KdMJexoQjN595hw3ZgXTj8vjL8md"
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
