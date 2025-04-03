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
    "2xFvQJUvPfiaAUr8KokN4cz8QCMggYB8zAnNUitxw5bWC3kF6PH3pkY5YGmvRVRpfGtWFmzD5465cHfs5nExf7Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TufDyF2Uh8WXagoyiXuinPP6P89be5wDDZC5NZ1hGvHf8rYVR5sNcvnivLapLiDucCSvwiVtfB8PBQmSJMYi6Vn",
  "key1": "3hkNwHtLety5mPr7sUjX2f5bkzKJE7Z2bLHF9xs4Jf1e8YqCGKUUqDmR9ZVZ1v6WbeurmLQHYg78XyNTnGwQkqCD",
  "key2": "3DX1BU9T8gYNrULsYaK6xNAAv7RBjB74jDFVjCuoXyBaqPcyjEftDNMkqSUwQAhdeVpCaqPcemN2EvZjrfgFWJf4",
  "key3": "5ZQM1uXmAiE9F8PzCG4aar1LpfodCSRVLZsqtYgdnMAmJXe6ZgUB9V2J3ryTsQNVbtBZu9Q56rJpDHbNxzLxyaTe",
  "key4": "2XibZoDZvHxTWXMJ4vYK8jBSeYCjjvsXa6A2KVYoYvX285A41v1cHqtz4oAmCWxcTfadsYbbwfq8Abt8nXKYegw5",
  "key5": "gAARYWNMRF81Yxmaox2H4sm5uALR7jNQrPYwbF7cp2z4kyqco4GrPqCSPuQSjwma8xmjQM7np791FbFjcofh26y",
  "key6": "4etf3CyKgPDkVEy9dTCFdVHdsDVqgfVmRjcCnsRV2eZhSCGx1kEC5rNFcSdfEZA3XNrq9UeHftyDn4PbXNS2824x",
  "key7": "25MYkTkbHFgJRZs5vBJ2mFeE58WdssVYhCgQWYMSUNJEGP6TRDc3vCLSmN9pYWreSGibEd79LszEs2U3XkoWrAtr",
  "key8": "VBr4acd6emocNWCZExoDhrnNtf4kWWuenz8uRy6aHtfGHg8ouVK3ATodebvp4Bt5Hec4ZuwpzubfCWjgvksBvBg",
  "key9": "2v7ivdVN3XsGMX7jp5zm3jd25rNyHZ8qYZjUMufeWJLRMqc57MK9NHcHZHqKU2SS5tTeTyF51WNwZEXZ7jY3o9uE",
  "key10": "3EvXorDfQvq9KT9yonwbVyJrX8y2o1P5553k6uY2ELBxrPQQD3HXxAPPo3yNTvSCYJG4TLoCt86QPSL6Tm7sfU8i",
  "key11": "5LZCeqUpAehx6Rpe1dVmDQMqvJf3i9AwPrGTAC1cQ76WTn6ghQdMbmzSb6Dj8xANZVBBKfUcMXNNseyv2gTDPpDq",
  "key12": "5F3WCeZFGAW6335Z9k1irz22gTZ3HegZffWuBQykNbQZkCJzyWYNCwsfLEqELbRSMJSWfgDnG4ryvgSypSBuuYra",
  "key13": "2dgb3R5R9vrdE846AiFJWQKAxi9CD9JWuHnhgaer2kJSuNTSeYUELEiHqbgVBFEptj79mxoBqzuGShHY4HFb5o8K",
  "key14": "cNF7PXgPwBmTAz52TPkEq1eAtcQcsTDZcdJLwNVmvr1Zc5S8hxQELncXGs9B42vp7vi56EqmTT7gpMZJRtivixU",
  "key15": "3SXBoXt5hCBAVXrayJF6hQzudrmpFA9soTtH1t8ikuC8c84xPDUFKKPzwDZN1aEQqpxmUxCDadBfjYhNkokxjyeC",
  "key16": "2HkKp2vEPVRnjncnwH9QySqBLuikfm5Wyk89efpZR22tEqHViMuGbvPoyYaP2kYUb2S4bD9bDpTysCZ8TpWEAFeq",
  "key17": "27CK95uRvby7MZ1G8SBnWqbma2XdcBXmWA3mCchcLPYjZdd5VnB3XeYFfUpGycswZPBWhTZtJRVimC3kS8uWMEBD",
  "key18": "gEfxJ4Jkvnz8tcyLQX1vKq1HyKahD6mvH5dgbCBSgThgBmrouGDF83CV9544Lrhs95DWGfArCmt8J1TkRAyWDHt",
  "key19": "2fNi282fv2C6DdWLbcSojPqsKRHsqWEkGTHZ3dBh8dPQRtNy2eoEdAxyJTs1Y1QNfky5KFhUgjgAQ1wuyJCueVAs",
  "key20": "3GWvqvaczrAfaJcqpjpfGT8V5KgKbPf2f2eaWWn56qNTdt2NaTknZeX6sbXv1FKzUB7CD96aGbSpy7XHMoB1caVq",
  "key21": "2BY4CExqWyeyTXbsQEgVpQLvzggTXZWwNcd1kSveHqRdfafKV5gsYdPwLjoGWTCZYygPvoSJdV5zPHcDgDqSqxRn",
  "key22": "2tBhrBhasZQg9VmTbydzSMmMhqpcjFewqHnvtPXDC7bdRzhojM22qGKgR1qygCqhRFP2DodtyyDX7E1z5DATm4Uh",
  "key23": "5HdMtPAxu5FnCh8LeBFmNAGmedt798N5PkuxmbjvExJjZbcfqKwasq3p8k2AFcjFhtbYozmETXDHQoHP1GPWgjtH",
  "key24": "3ycwpgvmeNvoDdTSDxaDXib8azGYcEoA4dPRb7c8sBLnAbxMm8j86f8UUZjRs8YEXa13C1BvBfcZzvF9vUXJo2Gk",
  "key25": "4xCphRqkTmNK2wJf7ttQpXuTC4WMMao1ML6tWSzEX9XUmeyobN7N2YhYzsqNZVF5RE3PtpVVBwdn7Yu4Ny6TpSxr",
  "key26": "4ybc67DPLcYKUsVawLGLTrq1mqtp2zR9hoEho2VrE2aFK2Skqt9XDqVwyCHUUi728xh8B47JbyFyZxir5tbvrNnn",
  "key27": "38ftVpjs86nk1DWUwn9o4ECo7gh9pXgsuHxJMdpFoPD4Vb7AUc8rPNMSzNQxwxMaVzJD5ZrwpybvmLB4ri5ocYys",
  "key28": "5ZJqu2pmEEmDfA4mtDX8TgAVbNFgj6DqP4eutyC9P3nqJQYeYZQK59iVqUJvpUANp3U8MhXiP34ZMHVcnGru2gdz",
  "key29": "vEEQwh4dC9RFwPnPX3THnjjsU4vjy3rQfP2Tom99ch2iuDRnxY5vXWpvurCBd3N8Z28or6YypGFw8kJnESJEQsT",
  "key30": "5Ce9znPWoq7HDWYdBcxQejVmDjhyHV58ym5aHLvnKzDs7SsPvXw9XxedUZvZfNQJ3hh8D717KoDU62Xpw7oqnk7A",
  "key31": "3VeNR9muuNX4tX1QBXts1EKsqhYpvuDKboby7kcz5wYpbwgNTJWvQJzb7TcYzthB9NNPD3mTQyw5Bcv5NG5StRA4"
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
