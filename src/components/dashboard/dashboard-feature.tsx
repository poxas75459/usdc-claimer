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
    "4nLHR4B2XUt7PwcsDworYveE5FE9tTAE1f32SpocTJqZ23QsxmGUsEFSwPm97GxCNPiHyJa6zzykmqXqU1b5BEtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PM7UwK2MRdcqbXwEiCNZ1MkhYNXVv4Z2GWxJhMGGSKMkU5Kov73xL6zb4b9kaE73WheYR2aDZuLP4C84tgTiKx",
  "key1": "41XGQuRZeRqyydULjZcdULsaG57KZsr7nTEYGXVXUAeqpXquF4e2oUaoM27jMXCYsNTkMc632tn3F9ssp2HUB6ZL",
  "key2": "GpGGdSrcrkfW3DsdPfHhnGytp9TnuaJzVmU8utfSMuKz9L7tW9Z3YrbJuUgoLnEDWkfzhRcpumzbWF5Hu2YxvTQ",
  "key3": "2aGYkNLrBDzuVSAaPJCtRYGYjEt7Lv8ApCfqwS2t2YwTbrWayFhV6TcSosHzHd3n7ZKYJ3L5m1DQhc6wosPsLxzf",
  "key4": "4hVbcdcQGC4XZfXJQnnwfyArZZrsaZSbXRDQ7E88Mbdi2qMoLq3WDGDGBvw759mNQGFUzVzLjj1ezMFyZf3CcLRX",
  "key5": "3nsC4nzenN3bUFdWbsaDNcBTSGx1B28DRGBargaLdvm3KArZvACVYNCetCRiYSJd7uyozTpbzSURMeVD4Njuwd8Y",
  "key6": "2CEqB7noQwKTT1BRGxy7cgdecvPDJp4WdwT2HrKYmvg2hi8AH5zXyvL5Xy2zD97Jvpr3vuxmSpgoqPmuTh8t7SRu",
  "key7": "3w3CUXZdpFC3K5aX3Ye6sxzLZEUkKR5aUZmU8voTmREpN7kHBwT5yirxhbnjwc4RyxcrsBbxMDMvHC4jhfQbtppU",
  "key8": "3AoJccyBXNcqqkhTLNrzXRgdr9p7PM5WjDbKZ9zE2j8nU39ewaffHd1mxy5ZECCMY5rAcM7fXiWm9RhVAD33rp1b",
  "key9": "4PdqnnpCk81wS9eybZKYLZK4PndybNjfgxwxXKRqoYNeTpKT1Vbv8bH4W73eCmia7vx6wrDKWwjcga9V5fuPsKzv",
  "key10": "2YgyRadSsAuRyok8hh1a2dXJGVLM6yHpuDqp2wU2TepGhS5AEuUr9zT1ZHwWJruRQu1uzVBiSi3F5XvBzLojs6vn",
  "key11": "3EB4aj6gKLim2Hi7ob7ahbARSb125hYvbVAk972mGC6VdNPdZLhi2nsA9qH2Y8MgF7aaLMkPTvwwBcgoqK4ZzX6B",
  "key12": "5XwcKQxSsmec96tcmDJJpdRYjQ6D3A59q4rwj9WZYPEqCXFFDzmu9wBmRc6QpHLwDB9pMEobaF3AHCQRqWUJm4VC",
  "key13": "65SL85YMjJFxLK5NJ72s5wAhgSc3vDLDaBFxgfNybBomC4qSTJCLeRo9BqFAYWxDDukH27wS6T2G4W5mMnPv65nf",
  "key14": "wML2Muanix3Tr9n23kzGsqudGLqGtxzoAnNUBBbtg2hMqU3afqQow62w5rR8FD7uofazZ8RXCExB7ezD2djknGQ",
  "key15": "2P65BFZaLPX9j5trLMP9xj4xF7ufhz8cryKTGuntQP41sz2iXNG5Pqbv3YSZ2SMtZkCBLe5a3MGcVmKwxW4SSdb4",
  "key16": "2acGNqq2aPrsHawCFX3gBNpRiBGeFgNU4N6p4Kmric5XiEy2egzHE8omVopyU8Hm5rBxJJNDrLdcJtoBhwqAdW2N",
  "key17": "Cy3ZJmfXsmXwTtuzvqwo8ZyPA7FSRcSp1gxut1M8BVLScpgurxjRnAbwfwigTGKzxcsmQGxbGNw5QjdFqe1y8LE",
  "key18": "2BLiNJgNWt2CK6PA6Z4rgW5Ei9T9b4NhogYqAmtBPqPhi5qS2nm9h86ziNtV2DkwMPFANPTBCmgCiGzSXnFLUAaT",
  "key19": "4MdAmkpVNWYZpYeQ4knLb5tGiPVjGBE61kSJqECCrjkpPxKxHwZngkmagGj8iCgpb2HDBgbYmbXYKbYvPHisiawP",
  "key20": "4j4ozqN3uKHnuMCW4dUHmcxGypTALyr6kLK4ZasyMnM9WY8NtKPaCbzeyphLqUvUL2htqcPivhrJcJpPm4cqr43a",
  "key21": "5Euh56MKhF8svayJQJF1C3BtSDtwyFdc2eCNEAhLQ7oyAXEy4KjYCFcMyB7rJsmjiosG2WsmN2bGPaJBVbAwfB4z",
  "key22": "4AxsENNQCUXhHSJtABhQZ1xrdtpFjBz68QwuFBfz1GS9owcYd5r76gQwkdiE2NDJ6tE7papg4sErkGZXHDzyzpDa",
  "key23": "5xo4fFCDzSXQzHE36ZCD5utHwA6xzjmQstzYQpJWf6guZhWfkMLHpWuYxaVFBaoBsoGx5ZTT7dkgckX4piWRmz3b",
  "key24": "2dv7JDZfHpwq5q8r9Va86WqwWPqn4nc5YSrSpEMzR3RTyvSXp4ZoXQvFDfMf6h6Ly6R9JhfSeQEuLX7J4jMTHdnD",
  "key25": "RcMQt5mh5AEqqvNW4p76dkBJpzZgzDNUW7hUz5Nkb6W3zvTPouutXeUTUZWCBHUCxcgetxNPo4KzjN8FmsmwwTF",
  "key26": "iU7LPUo7bMSQMCiC72aKNZ3wFYFh5GEQqubiJiMzXk9SZfjZPsPsg26d5GUsikMt3JrdiEhdvdyb6WK6xDVt7NZ",
  "key27": "5EC94GLgMui6imdSvg8HERSpmeAQUH3EkqefKPftvGeJmk7V8TyWm3n4iic6jT6E3c9RFAZCQBYHFZySgDpximwE",
  "key28": "2ksoSps6M2R3XwqNhGKUqZ1e3FEPuTNqCojGxr4HLSrYTjsUVWCT4LgH849qcw1hMyqwFHLwwpcGJjXsjkuiQmyr",
  "key29": "36zxoxqXgKxni8vfpRnU9GGbzu7QGisg6167TCvAeniQdTgH6KmZ1T1be6iyEo12k7hFKubNbeaip1DeDtKaBZuU",
  "key30": "397iCWtynQS41tDrhPn5wyAFKsBu9xVqUsJxATN7ErwU1VTbavNB7Ms6LmW96nLYZJyDFUkGGAprvXFrGi69HEVC",
  "key31": "2kJzWUGMHm5JwqdRCKRUeN5eWftipc6xj8xM78bahRnd8KcQdmS5M53kdSsbTM3o7PNYsSXrJhGLqGBWo6a6WrHw",
  "key32": "2ry1WAGBkUGUsiMXqL1szz9wcPNwCLw7sZjPVuSgugyDqC6M4qUAzXksBJiq3uUw7LMi8BnpRCBcsieoEjod3kq3",
  "key33": "3qCZMSCFGtrxTB9ivRekGkXV3s2VZBAuE7jSVkfLGKFxF3em55oDmJzv3CfkBXhZbmWdbyasEgQNCnfmyt3qVJVV",
  "key34": "2Nf5Q9oUoTxkiGoiHKf8DjM3T2cuxGY3VSpgYf57pttPnqQV3arGNNEZFL8MkCb2TgEL7ewFx6185ZKthGteih7W",
  "key35": "4JCBvjDfXT7CQq5TgfgxoD9MAxc7m5JMU2tfKToShTHsGZzxPxRdeZijMzwHW8QhVTzd53przTV41djvwUtJgGBZ",
  "key36": "2NEsFoGEUsmnB1CndpL9uuioWrkyuXWTG5fncyGdCrDUYFR4kHjRv33aKiEL8myzs29qD84wfZxx7JdjTiPj5ow2",
  "key37": "4CrdNzMztnuL8eVYpwJZ9kUdYeMHy9HrCHZ5rsf7BUDUV9guDANBJCfGcbp3PXB5KYnAqUV2UBbXZnR2g2BsBFfj",
  "key38": "2HhofVibFvXzm1TrnPqmcSfKXJXdBVpGuqCRatY7ADCiSo4PB9bUFNhKRBkY6PmDU3iKNTqifT8S3DtPvFJngzmr",
  "key39": "5hnsttjPQ913YqaED55j7SD13wY3NjpKbWWZ4NJ4WKfTjc1VkJw1WEtb2Bu88Sa9C25ts6oRkYpCFjF7uc75bXn8"
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
