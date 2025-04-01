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
    "4Q12C9V6omvn8yFj3kVRiX1Rqx93rpHGiXDzdfGWyAL2hVV75udbbLQPPczqWKQfuoAPNxAcBMmofdjRG3Ng6gZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R1RX8YvAGaSqcPBeBTM7EwYUNUQMPhMQeXfkABYVKYKBhK8wyGzM8ksEkBNh44oD3Pkynb4GbBXqfoX6gKBhrZC",
  "key1": "4meZLPgorsLNmbsxrFpx2yQnQTqvHVDLEd8t7MFNJh9KCSbB2ahC4m31SxzN2HNsCM6BKKYMomW8kgRscAZ6V1mG",
  "key2": "2hy2nRQDBead8yGYv1Mk2AZuTDZ6uDwchWc32cny4t3CZLL2owgqSVfLBRs2vSPMWw5XySN9bJxv7amuYZPfaQ22",
  "key3": "5KLQx9uvQuw4o5vaHDD2n5v1L2tFvNvCKTzxaGnFWE2mBJnwcRfoepdeiJ94hDPYf5Cp7XBQ1XPDNc9sdw3bwmf3",
  "key4": "4mNQjdvwy4dpsRz9gvw3AZGXUN5bsGtNTW5Z72jhGKX8yzvhbMP7NJ91GedpQytfe1MNqxwEshtREvWj2Ab7R7jM",
  "key5": "2emVP3x9pLzdAnks5igtkgb3BMsKxqFVKV9otRvKWxqvGpXAgsjuTyTXktocPUV3oV99k2QHmUbKkUW1po1BcFeP",
  "key6": "46yndxZkKmLw8ZoPEwtuzxJ6aSqP17mxbGLxNLrir68PihTaWFqFVbbKn93fPVcS1TfrtDY5WiLDnDMqYwuAE17n",
  "key7": "3ifm9rJoeV4ggmrEHftaTm7SPs3oZnbgNNnwPwhf3dBtxH47MGZyDbVUJJHxS8ZNLzyBtWHwHfKBzdcy9Ldco7Lh",
  "key8": "3gTfHRxBtqozFpy48rxA4XoHY9M663rSak6sM4tqGSqM74d5DCB7dAws9g7MkiV7Rqf4GZLRjaWFaU1sbbL5wFdu",
  "key9": "7YMZGEmwo6SRpCajgCcsXHVi566c3nZQosdRdvbuGLgSRfDWwHrVDbj66suuX5gxkbyCDnMd9zAWwqUSXcFUeXj",
  "key10": "2YcBanGFCcWabCUkwjDPA9BXXT3otB1kMKRYnwxoz74AreNcjDpohz8vafHQLPU6B9CkMX1PtLTqMDRWNduvfpeq",
  "key11": "5FewJSuuM5mwrmpDPfuDyNB7D8sPrBJh7iHm6uw8xVRHf744g6ZidKzXNTYLYcuXTzW4QzB2q7XNnSZWBrd5cnDH",
  "key12": "BwwFHfr5VbLqd1pXDJTSGR2hHPFjZAkDms31phU9Ngbn4Zz4XyTPWf8kPMeTGFPBa8qu5GAtDknrNRXpw2XELXT",
  "key13": "5PEd4SMKZEpHJdXgQTYjpMRm4KKbrtPca454Qeb1Ha1tZ8MZfiD9wTShis39esR8cHoATwSgfGkRWjYESmgTqrDP",
  "key14": "LwYbqSypMyWmtLiKKdtCcwuDtj672taDPtMw4HqR4mHbp8hHaAFmLUKCUMcDxt3ndpP6fzWJzXaHqb35zj92PgM",
  "key15": "Lio9VKfz7Bx9Zjik8fnrqhSJiLCWgLhwXBFRWRpuhENym5BCsa5u13yDPLGVvyzKECHhfEWK4eK4wG49sXz8Y5G",
  "key16": "3DTXSv6nBRRjgdQWChyMtHPqMN3k2Wa5yQR3WnsGgaePi7BvLWDoanmsCTk1mcb4ELRqef7BnAbVbJomyBmMF1Zs",
  "key17": "2iL66KY17RPRZSG42zULD6deJt77nsvmRuo2bZz6CfkL12qQECi3xU18rTDyf7ap88ViyDcHuK5B48wXWAioZuqy",
  "key18": "j181x3PRbzb1LH7of5DCGwALEQSJpE6x2J3AGcfXTs38gmv2msRCjPvpUcShKTfjt7eo7CJchTSpiF1LRjozW37",
  "key19": "65SPqdeYzJc4okK7uRjB8MK1SQcPXVw6ZRVMHo7vBDhpoEQi2tss1N3vcZKgSSAZzQ8va2wGZMSqgW5c5Lgu2Mak",
  "key20": "2WdYijdEgZQLfytq8erQJZac6CKqua3SVcfnPa42NBYJnaA5uANb3C7zRVciZfV34i3Jmkx2KiWMwcuBJGQX9PfQ",
  "key21": "3UPFpn6SWP9A5ZY8Evz6YvGa85K73NzZbZCkAbbSu4gzK7RmxiJPM3p1fnEy5gBGaH12N9UyjRqomgJA1NkGFy4Y",
  "key22": "3E6VHYV6PwGfbS3hsxvupY7YMfXqPM1WcVPa8kzG9SsDszwFCz7EBQxBPcyKAzLFMzjNCyDo9CQ7q1J6YbY6rQuY",
  "key23": "127bsUCzhP9nbha9ntXMnw3EK3frjdZbyHD5m1tLHHLckWzxVTGmnTEGDy2SpLR1zmNMnPBg7TGxmbyoNKX3TYKm",
  "key24": "2AB1AcKCJMnriER9LXDVT8Qxnia8S3nzn9wJTbRU41sAJKjm2yTJk5tpQ5aAmUACoN7yPWtACtwJNKWRDjtuHTGR",
  "key25": "3BnBr29rkULniPmVCnUbYuFjYWJ77EEpkSFNQ8CbBGcsVShpUQaSkdMrKKtYMvHrX4LqPsQB7jzVVsefXKhhfSCk",
  "key26": "5rMwyrf2cvKk329qoK1RUwm4RjMdQpaoc2z7dJB7LAYZ6F4XxXou2VNXYHsoeaySjXTqht4rBRTbwd5C1azL1XFW",
  "key27": "5F3LZtEkBYsyKaEXdic4nxA2ViQMkPG2fG6FtAo4evdj6SorXC2KUUPWTE9HvBFhpSaubW5V9Gt8PpvrkD1CKhKu",
  "key28": "4ZeUX8vSa5nYkmzfrLcu635TnUFksZxyhiAB1BYUvAr2v5B6YvXcG9S9T3Y5ad3JcEePD4XiLuLq8PWWVfzQcuZs",
  "key29": "3g5sPn2EmdEL4NmUgekA3EtQJFV4mH8C3AbYAQ3UnLi3a8wdCqBDXEZ75dofiSZiJZyj1hLfVJceax9rg48ZN4r2",
  "key30": "2XYNmMreFDzVG24fxaUGjHyyCkY5U6zC3Ngp1BY1ak9FBeieJQC7g2c8BdCQZiHwqgmY8Dq3d374ktm66Arwn7Wt",
  "key31": "vnQkpXBLS53CTE4aaRU8TwCNuB6PcVVRWpKxAkMT6HMPK1xyfwtmk9Fm5u12NHkaqbhQdkJc5tghiacE4y542kC",
  "key32": "54q9hC5kH4oMAmt8Bz5PvGGLduBSmAYZJc9wXjzLt8ZniWknXU6H2e1DihcesE5JUcPPYjKeeR2BQKeJRcsMSxv3"
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
