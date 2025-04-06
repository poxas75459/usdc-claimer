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
    "3Zc5geHQfndxXMQzJJ9v8vjmBdouTR8okS4UywGN5uCHfiJ9iu58VTPyBUdmHCNK4wxL1zZBEyievhdmrVcx2WxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyKZwUipf4uwf1VWfFUFPB7Qv8Rvw9k6FUX1ZeGnaZqeSTZZEdyLNrKNd9Q2jLUALpBebKQ86nopWVLyRETUcmT",
  "key1": "5S8iuRCbKKvbPESmwA3QaxbkPxZsbmJJyCkgiaVKRxUcdUNG5WhszSWYCP16KkyBpJCnk5Sk297kzr9FPHzGc6qQ",
  "key2": "4AAnzi4vNn9f4RTQXKbBKzBNdoKDKHx36tMJq1NiQ6NGKJbiCkcX2HrDsgofkq96jGrnBKGeHP4dapVGab7vipCM",
  "key3": "56R2ckwgmYvYg1qANgYVr8iEtTtkvce8NHfGCeCzgA2q4i1JrmhaP3B1RfvPEWghZtfqNKsiE4R1TGRJuwzrTvaa",
  "key4": "2dW92ojALdxGYPd6Qghq445HTpXhYAWhSFuxq81uegsD8jfP6cPfYg7bQyYim1NNE9JHE2CCJjpDpBZcfnh5oFcs",
  "key5": "iDpLPeG6k9FEEG5wCYMH5SkNnC8oDDjSUyfyDBQo4UromZVazvzpheZbXyAjEKDBKq9UrirS5DVwcovEejDBbws",
  "key6": "4SjEPM7yuNeGfpBR8GYjiJfKNENkuXNKGwiFVGh1ct87AraftKDsoz1o8deizoJBHBbSL62brygWauaD9MCQtJPz",
  "key7": "5kzqwvwL4icZTV8WA3AdZUpzJjNaFNS11p75s7Z48uhFv3SW4VvDi1Rjhu8z3Hc5LqrD4beyQRThusVGfFJBE9yQ",
  "key8": "2PjQgtQv3iotiHzwHfHd9hnpqHaLBfqfuFrBPDzfijQcSo3vwiGrZyFfr7nnkJmNJ9ZX44syCD2E77ciGKoGzgY3",
  "key9": "3Rb6Yf9CmmfH9DHrARN76vK6vFovnLn43yeWDxT76eDHUSTCLKmuV3yomatGiBscRBjcQpkAiJ9BXZJ6fqCHqe9i",
  "key10": "oUrnvXUW8UbyuEw7azZ8yHJKe1NSdTe2yMh7fB6NwbCRgtBbRhyimFyYyJRegMe2xoLwgE5F4K58bZ1XkDfFCWm",
  "key11": "3184n3ytTZ5h9BfsYC2qKx7K6t3McRW1ZQbkoex9La1Ui4itygGnCpkjjabJwJXcWe823YscaMzK7GTGRvoqEppn",
  "key12": "4gw6CzpaJbawPJdbQkrbo7D6Wo1iwmfV3ESGURX2hymNuz6aPfNeGfB3Z3v5wdnZ1f9zeTA5ug1SgaZ4P6hHjUA3",
  "key13": "5ChkzznoYGsLdc66dLvrisuLfc1TN7tnRtSykbf8989CoSauH5CBM4eUPY21PKwoGCsuZAuxKrTbATmdn9Cs4K4G",
  "key14": "4GfE2KvJy68jJ2iWZm7CdTGHkTNRrPjnUwM72PGwifTJkBPfWpBb8Xgeo4Lw4qS9yUHwYN9iRqmt3kLUQ76MF5nw",
  "key15": "3UgiMSseXzqXYHVnSR1xzQm2mQpHg1PP1bVibvYmEtKPkB28db1JGhp3d8Bz5LPgzm6aFUKXq6AVnV6xbbfKZmZ4",
  "key16": "A8gMHj9ZyG2fs3nXJz12tdR6Pjg1HuvhxbugVkobgQjKQyEn1Nb88r2jNvyguxUgNmLaF4mU5obHooqMuR8DmoU",
  "key17": "Zt98rrsNEGutY7SFHf3uhSiEeQWzizB4CdBg4YdjDLkgLewrxcFpE34uXGDTfZyqvGetgL6aim9cYYauysrK5Yr",
  "key18": "2hwZVw3ohypwj7s3naVZhvz7te3pt1Ray7DVXo4sdXLxDyWNUYR8HfeUArGFRqagJSwwZWYLQYpYe4C2TsupxT2a",
  "key19": "4iA144BB86P5EaBFz3FMHDuzdHxRvy9M3RmGPuytSeSYErJh86ozdarYWfn1MoezRSw9oqcLo2XGvBfdYzWRo94L",
  "key20": "5221gEGbo6g9xBfjwii69AvBkZ1ycZyGY12MRCkTY8PVo5UmgABVxrB7jpJdgsUQMy4TTR3jqYpnNuM2AgJVstYu",
  "key21": "5S3zzNQhm7eKrdbnApghnDpAftr5ru3Nmy1c2GWJswCh2iJA32KHaafBE1NrWL2Jfk2nZGW3mLoY5tfmSuYBE48w",
  "key22": "26B6UXbAzBKFkCTdPErH3x8XQSJsj8KNF6Ln6Wx9q92rqTjpyoQu1jUT2vrRPaQk1rYQMQdcY2GSmu1VSZdPb46P",
  "key23": "3HQEZ7jt1zxda7GSe5ShWJ1FiW8ZmAauQP9N7DUUuSZ6A2WQfPBLMLpwtYRfC4tsRBieiKqte6ZtCu5RBoD2TMkk",
  "key24": "27adoh7mVvMBpWr2JvwDZNvd7k6vShf7AkBm7YUv98D1DdfdjDGbXRkHSGWPg2gWzUB3MZ9YHXpQrvZB1KD7BNtM",
  "key25": "3keYEAdJe34ZQ4J9P7aMpmZGkfKtHcps7ZoVQSfYbz6dVfuY5aSnGgjFXeQyx1ekAta8qPjn1nKvZVVyrPjuZx4S",
  "key26": "32N7AiJWuWEoZ1Sy77DXJAvHUUtik8ypHd98CtKdRMUQAnwSNFRrhxgWPuhMewxyH8c3yzjSYDYcFfTfzpxnBrzz",
  "key27": "2BPZYTsbm1PZm242gA3r7xJAmw9T8HjRCc2Vw2aEMTxFzQGw4tMfAN9FDupxnJ3HdtqKN58Gq1rnA99Ve9j7iCmV",
  "key28": "8x9qPEZySErv93CYG1AZf7imMRzd9UmWZfbUxemEv7n2sxJVndXygFSuYNSdgZkkXvw3pCegjKebgyPvfvuFeJo",
  "key29": "5Eo1gt9hqqG2cUXLbyDxwbKHqh7a7r5LjV6F6CP1YXAucGLZ35y5CjEVrUwiNXkKCr8cp22WYMAcFdvrmHoetFTU",
  "key30": "3RymhfDC7a96ruEhKyFjdV5WXZBkZLnJbRgsynRvyK1qHF74aREeEktiUmtWTuhGR7WkAC868jDuhYsAGbZiFNYo",
  "key31": "2AcEZwZPLiYg18UnuQyY6XBi29SxuX48vLjxdPNgoUfro1iK7F1cf7L5K89JKJLmwbDwXrr3jx2sWjPPjXHKWDJ1",
  "key32": "4wpAL4SaTHK5GEhBLc2RhzM3vnmDQS8QZ6MsSJW3gEMrkwTjLnYmubUggsgMkA8LULWt8Nj43xD32A3f9VbKJWzf",
  "key33": "wUgPV37AtGyg8qXG1cEfgr4NifApsVqChMpPYVXNNY5rEBwmivU5HaTDxi7gbdZW6bJ41T9eTDryjhSD7H6FunC",
  "key34": "59YKwq52vztYtkK1hVbp8amaHy9uXyaUJz6cuRv5N4b37yuXXPieDuS4VydSMMBxk9pXDzXmRJFzC9tKMnV5P6rs",
  "key35": "4Eg5xervJrFmDD7MDk2yMnqC8AowgGNZm9hXCm8nFkYWvA6ZGM4hoa2uUBupopTYL4QZRPW2TRRDQ7JUxfy3cXnS",
  "key36": "2zZmrvBDADWTyC6NSV27kB7jfoLkPaw9UeS9BGauKyGWXFVNxU8hJPS7h6PUUokahiNdYRE8cGHiCpFrdAteQLT",
  "key37": "4snVazuavSTHrEWiNVHz77MTvgrBwGZctLS1G6f47L4DD5f94CeuvuZ95YzE3MP2aHoJwo9Xco6g3TuQVg8Ym53Z",
  "key38": "9gcn1VpyXhkYovGKz5Ra1mSQmZ8jyivLJTwTNS3K6fQjDMEosnbfe7ynDHLAeTGVkHc4ES3uT4vzhMdcT59oB7C",
  "key39": "5Av19BDiyQyxwV11hKGN4cqCFbSQ3Gsbn8CjVsyvA9eHPk7WRLWhnxJDPvqGhv2WFPYbXTKx7AvevueNdvyy84jv",
  "key40": "2ofFXdUy27666jtix9Ey9t3q8WkqDyP1Rt2tP6446X85XEvAdbf7HKu2zKMksJcZPnPqNJmYjCVBghWjQeM8RWy1",
  "key41": "sEBtvKYykv1GGfLSvN4SjZNVnxPa4rqSmMtAQ9nBbvU1gFmSC1ru9nj3GBzvmBdwZzN3f2Zs9sUtk2c3ype66Us",
  "key42": "3UX8VwJSF95f3h6hBKrnJFmd7VGitJN6uteLUYv7tBBp317HqBQeB9bivrFyh8g8QZHQdeyabazxFrz1a7PHhuBv",
  "key43": "5571uLxYHrPCAWk8uWSRWo2nbGmyuxrSwZo2sheu4XhGZytn9wU2g3XNF8DZHKvSAfeGi7qy4uVGJWzWs3ivexcZ",
  "key44": "3718LCw6L2DLDsr6eNnb58Ftmc13rZuShg2bzvLaNEjXyJbgcbrQNZugZR7R94cqMbzH71B7mqwUvqSs6JsF6wbS"
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
