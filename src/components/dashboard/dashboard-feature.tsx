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
    "bDcGK89rAHwYSbba9RNtr2ZtkaRMBMryPSGV3ZwyquaLFwDgaW6xRC6GMND47Hj3zExmNbjr4R97fy7hzV12v1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYz7VMRnANzUTKVCTQc6kxYHcmNtH3LemyEbNkrP1QMGvxNSXbVe4iH6WB2kG8kKCjYtVbTZXAgng2CaAoCCf1x",
  "key1": "5bfrYF8WTTxshdC2kdcbVkLsSASXDe2QFCJgQkcdEHmUszFvrUtTn7URUpTXzoHjDS6PYdLef2yu8mfSqRftQ7hW",
  "key2": "3bdyJdfMhammwvzF7Uas4g7YbmrdL5J4otSaKr6SANj4eWFqBPYggXRqS8fRUhLQtVvDHugBefgh8UJuuUCkpX4W",
  "key3": "2LEKzknbQKGYCGjVwGFp51L6QgZTwnohXAnPpEg86qzCB4Apa8ge81xp7WeGAbmmKWi5k15nj99rJCicComfnhxZ",
  "key4": "39vgFMGytjS3DdLiMm12G2F2hQRyndCG7J9D5GNV847k6LE7YaoKWnz1DkEauhCDBX6Bdkm3HVkfsLwt6WJgX3ux",
  "key5": "3ejtTMneRypvWu2hdbdyrgYLystBVcmNV7XKvy2p2i9PdoLbS5TniMm9Ts5B3A77RErvv9CZEnrdkMxuxEJ4usWn",
  "key6": "52GBESK6KqfWgH1tgBj5wjNMuRUbDtE9QqGFKcejp7R9kMMB61Lsh25aimKHFfYEA94VKennZzDvQnQe8JuYDkdh",
  "key7": "35sD3JovytEKCUYLCfAkX5RV1r7d9bizLxdUbG1uV922nFbt6W13RjpykfXK9HfSnv2JC6bX1vDPJdHu1J6qa4iA",
  "key8": "43Xe4NXGJ12QcpZerDFSMPPXoTrZFK18sxWxWXVHt2AwEvXZURMFhrSU4t9vMLgCUiQVssDWSYQdKjdB7BCPDvWX",
  "key9": "epQrwa7iaG1EwYWAcpuFK1Tk3pjjYvzeYbmeNDac2KPG9ATr218HXZXbuDwA71bwxrAUW6vJeiR8gSZ9Pa9ex34",
  "key10": "5HUSsP8VWfAXdHHATCsDdLRCnfPCG4MVcEpaQcdg8zu6KxN4LpRf21yndRxYLC5mUtLJz7WXLkLvDjvMmgsqrxk6",
  "key11": "3H9LXNWiy6wm5CEtBD63JAAmpDvH5ZFoTdx8N9GZiVwGhNcKJA9MaYS4fTqNuHK5NoiTPGFFKg6kRJnJATUcgpR8",
  "key12": "5HRoyWYPyNE57RjkhQdoU8TCr52BPprhLH1i8PWjF8Php2XRagw2cueDWFNP1LxBpXswVyh1JPkYByUrtj63Sx4p",
  "key13": "54THw3XfUyxEwmEGa87xFcDpuWdTGY95ectBKzhSXM4wfFYxqS9efwKbUQAni83j57wUW64NiPNhZ8t8YZ7QVY8P",
  "key14": "64zaEF6kcXm2qtuQ2vxJ3Zo1PSxVyxXnUeCWJ7U9pfr8QScvR1Mkfj2XJpmG7NxCm2AKAYVDCnNB4kSQS1GYMnKD",
  "key15": "3Fz4jy12ssCbF3oL314jBEG3sXYSTsxnLFFK6346gticczDo6q7HeSTGGGQ6HzRjfK9uji844wEwd9dRKdMU7Btj",
  "key16": "3Dq8VXiJWwU8rxPBB3seAvB8gQbSZcVguY6XNUZULkpLzwnoBDYWxeZhBdoJr6G2D5PQc8EPsgTPP85yp7MMHWNk",
  "key17": "5AQuj2VEmE2SRe7azd58uJCWSnqdRDsicZWCZu83eqeF8TRermkbmuRFyyCrTS3uuhv8qkt4XMLGoo3vaTcV6mxP",
  "key18": "2dkMLPB6MDvunBpgU8DCAyW9BaumU9Rt9ECGA2L81CfW3p9JP7kVHz9MAUSfM93RcKWPKiKDiBi7uERu7Epv6L45",
  "key19": "5Stu6GrKc2KaBR28qZFiEXUkCUUpEWZmDYbpqihr7yovzj13aUPaWwWN3vU4pqYMBSv1uKmm5dJE4ZA4941te51y",
  "key20": "XdtaLEWVZZXeqRhYwkkJCiB3twGPSaw4L9Bd1vbdgYxuushCgYGqTrL21jYzmrrE1vNLxVnkjq1cV3aMQ4Cr2YU",
  "key21": "5veH1KAFZNjfabzW4PSSC3iAQrBsP7yMqVjsCFw6mWxK3KqruQMCw8f9w7xB3Agqr2FYbmSWCVSrnZNtpwtKWbtv",
  "key22": "5S3grBXxKkDUbpv4tbd4qBppj5HWzrqz5GRWkCsQZZGAEi5ykiAhMJu9V1rQffSJ1X2cz2ogvRCYhByu4WNNtvXj",
  "key23": "4k2wwY7bi7i8gUnQ2QPWz7DJHUnt4KYEyD1DXYKQckRcZw8hmWvMJ1PRWtr2RofTcqQguG4EBXY93EtP5j8RMWfD",
  "key24": "25BnUbjazTEBZLJ1MitZPoFfjHmshbZh1Vm3UykVdPHf7RpbekQ9CPwT1DJ4jUJrHEgqg3BrA8N54hbgR38x8BXr",
  "key25": "28CfK1muwKDLt5Q6YiTfATXBCMUBZf8T2HT1yFUfFMyET5UsYhYg7Yktz2bBWNqoS6SzwQQEWErfp2Gh7hAudL19",
  "key26": "4CgrxyWjU6o6nJpppGc1iojEFkYGW4zBrEZ1SERUSiKLhfa6x7usoNYN6RDQ59rd5bD48D91G2558jQTdS8k3eRa",
  "key27": "3zh4qkWsw7kdFJGWXEKkZ6zDvqgQg1fcJZUV5KAZKXEF2bgz8YvoSPnjFD2iZbuNCPx5fipKVjcBUdRSWzKU6T9R",
  "key28": "41bFwDeXw9XChdHpCaq1r2V9swcYkQ173X5j5L2QQytKq9rkcxVV7PivPH46JUkYD5wfeqcLTNgtC4Y7xFiw8aqK",
  "key29": "2JiiFSEEDz7oH4gCuzdyB1WjPZZhrrMxpH5FmaD3N7A8UPTFJCwtj2DX9wsskAg4zLrbuGmBp5zTUGiUd5VEJgDe",
  "key30": "3PZZQoYjnU7s5Ks5dhBh74YGZpy8jppGwRQ8cSLPT7stwjKjuC5noQd597o9wzzuJaRyTtj62gDZa8yYvprkf4Vf",
  "key31": "3HDLYn5KHJhMuUXQKbPwYLHvy3Yh2V7FyDymWespgJDhFMyff5Emtc6tqYmmcsBLoxMcBys4AbwkCCTVrUdyzYgo",
  "key32": "4WqWq2ZtSj9R4xPJqiEJkbdCdocs4oQyjjzKmevLUmzFQAsMd9pf81eizDmTxgD2a5HakLXagxde7KQBb1YS6vxV",
  "key33": "52ArhP9PuxiYjWAQBhP3XEUtoCoohiSao9z9jW4715YQC3wcNBHEXtvzjjhd5PmtnNgxRMSvnyedkNgELt1wm91U",
  "key34": "295UrGbUDm234VFjvqw7vasFWEwRnXxPV1zN3cNyjbz1C4BxGRFi15SgosqQu8SvrWTga6y4Jn1JFUe6wGU1yBHn",
  "key35": "4X9uF9GGLmgcevE9ynWp4ApLDBHojc11o2GKjhZbbNubtMg6nZVpv7YmUWmrh2W5Vsnu3ZM2ujUqCFBejJpci6fF",
  "key36": "4VoCqYgANqZjB9ARaRwya4UJboLYHAgYJL5knrVpUreuAnxP2ipL53SUNRK7hJACU8darLsjs7jeh1oBty3L1U8a",
  "key37": "G3Put8b9fnZkEbGjHhyCxCWeFtyPtwCCa7RRRQbxNRvUkSL3c2k3M2waYJbJQbej4gEoTFRAD5aUPadEcUZPmjU",
  "key38": "3rBmCdejz96iHusVTgHyEaMAthmio1GuyF2S4BfEo6RchLn9QQYMYcay2N55fH4fMUhfkKReTTXwth5r4a3P9Vxa",
  "key39": "363bqMaz1bAoD2vrWieeqK74iXJyQjzMJ4kQj6tSJExzPSaM3DSwxTRVLBFfeBVU3jownvVaEWLR4Frr1xTVeB1a",
  "key40": "XHzxTCmg8bRy72zvMgyHedYU9rqhNNZ1CcfDJQhpQd9tvRpxDs839dfgJmNJp7atN9HxpPuxLvzp9Ydr2pcNx9K"
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
