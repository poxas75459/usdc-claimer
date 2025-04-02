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
    "5n9GSVaiMsx6Vn8hXdFP1NjUmaLdwMNVt5tLmimsE3V4QbrDS6jvHKxnFNnpwqGnhaMt9QqqcJGAgjsx8mkCwZQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fktmiF9FcZo1qVBUCxUwopA6rfEjSoozyAWDa1Zb5aEX3LmGBytYSHv8QmE4FXuBVupnyJCFBGvVyeyukjqCmj5",
  "key1": "67mNLGBoeXKkUGndXmm18UzBYpyFtD9cHa8pXpaZXVf9A3aPQBw1bPsxLn6iQcEPHYrNbnB36c3vdncFTH6RtBYc",
  "key2": "56aKY4NRqXD8SsV4z4Lr6bJ48ZrQmpwsW4Bj3uDSAxEtYM3jAy58Sqy22t5B6JjK3fg936KXquNuK8sHN4w5VBme",
  "key3": "5C9UhyEDXkuJVkQcGvPFvP3PiFmdGFjkTmnxe8V5Rbq4EoFYyvkozY1y7ABofvs4iocXqTaos9Qi8hwv895Evkyu",
  "key4": "4A41777syVC3iJqdQBQau59tmRdJ3xjnz7qr9DPKuudVw5Bqs3YqvQ4yLsg5efb5Cw6gjYQ71jamFJybp59H6U2S",
  "key5": "31qZbwgyU6tTjgdyF8Th7Ybg9mgL9r3GgsEJtMYFTSfejCVJPoMnaVgtWwXFkQThiUdPgPJqHj8jgA31kw1ngiQL",
  "key6": "8jUtTY8yxeSQ4dpx92gDM6RssQV5PmJpFJAdKvFai951AHbsVe3tsbs9FD9U26yDYLguD6UybhBAQAs5GaG3THD",
  "key7": "2gu3x2fEd3Jm6d4Lc3WP2MCYbJQsvtMMt4VzSNDAwW8kys1caJcZfQf1mkKWL1nt8jqydMUQ1Vsd8fvQHuYQmKZe",
  "key8": "5gwUiyK22kjo6mhkbEybkHTX1tG2cfHmJiRtTUjSLxmhRy4xDEFE97xTNRdoPrAVtjAvBugtmHKSUCzhAuFWAAKV",
  "key9": "bTfWeBrysSvcpeVCLeE2xPjhuqMBqTjyst6ftG69LZsDoUATtW5c4qFkCcZtQQf9Jxq8f5VPRu8XvtxWzsnfWKE",
  "key10": "N9JpzXFuMkJuzoNoo2YYUqdDsh87LnwUmtVaQDNB5xYB1jidNNSqQ8vpJSMj6ZN1xUD9tzMzpF9XjPL1eVAskQc",
  "key11": "5annD5spyCYRzyeHobdubqtwkfACKn9gVdTMBCGvD6ZcoNFCkLhJGS3NPj8Np5xPSZG6PhQCZH7ZVVZPuz7vV7UB",
  "key12": "5N7zYRmCHrn6uXd9GJBvV1Y15LXEfeHtKFUZ3kvKUL6arN3LBh4BGdkHuaLo55Y1qjMw6urfwxQb8jcZ9DPtHo7E",
  "key13": "64XNSkAtRwm3azCkEeEZWDwKJnzcConRUya2nuzzAyRkfMFDjG2G8MhCvmQ937hLp8ot8zSypvbVV4yFW5c8idML",
  "key14": "273TFVQDs5rofYPPAwfiyvatLk7pnQydYBvp3zKmH8wicZAwofMKUMavWQ6GbNgeqxoJ4zWPEQQMdfVhxDCWSA6b",
  "key15": "3LkWQz8sTz741TzcqGdHgZp5WuWWnYsW1LBBvpDmaFvcp2L1jLpDoRcBVpGGh7aWvuracARjT2HD8d9Poqc9jKEp",
  "key16": "4Jc7qNeyAwqByy7f6R7DadWGPGVtcYywKtvyWJc2pacmswie2wVscQWbZg5rvcgDvxQeKaP9ACwEnm1rkih1etXB",
  "key17": "4simfogACrNY4k9yZCzdcVdbh7NzCfL9VFZAaja114gRNzuX6ZrpvMCUSGc4sBTwVaRFyWf4MGNiqgn5BFyvUefG",
  "key18": "4v1V4bKVPJwt6oUtRdmf8aQT3o94A5xSMW9VtLbptVZFvNKjza7XoXcVJpzcECLjvndfbPLqodFotUfcBT1GHKzr",
  "key19": "3tQ29Gj65N2Awvjioo15ADp6zt2t8vzsPQTt5gS55JEtuwqastLckfvaYgAf1XbSoFpT1FfMzZtDKeju5QwNVDmn",
  "key20": "4WL2bdxs7f64wBbXuZRXatEsmyzKmorwvmkTwaobaETqqStrBSHz1BiLiwRpd6iu6RB8ZFkAXUUMdQkAP9vKhm8J",
  "key21": "5rztZDQpbMQiEzEq438kUAM4ZdLHD4N6PmJ2FagSGsm6pou5ns7VYhXX4J2Nrv7ToQszsi6j7HmjTTiySCseg7hS",
  "key22": "5rBRCAQNuwJ8Ej2kTA26HnQwiWCW6wUfX1H3hmFJKLZetw3pQrfL38FvEXRFfrPopqLciGSGSK7fXodStckGfkMS",
  "key23": "47jDmctDGsbmyrUcFjyx3BsAKigCXgvwouYatZuZApSuvWxQMBAVVsmyGz1iCT3tb8SkWZ7duutWFN59aWs1xwcb",
  "key24": "qGiMQgUayT8VCAuj11oSTAj9GUAVhYChW2j4red2PMhSpn1nXTRfCoM7XbCkpLLSGGgEqJvG795yKWhf7hreVib",
  "key25": "5XkWNx6dE4LL1DDCB3LMsgdGxL7fzqUjUKQGrCuKwRq3R6989LurB1GCGDpbWqLBHV2GHJg7dPHP9kV2Zmf19Gyr",
  "key26": "3jGVhg1z4WFfwFn5vDb96q6o4VHEYpfTLEpN2Ck91LvseFWdymhXZ4tKSWC1fC5Mssrf2TfL195Rzb5bTS3NwyBQ",
  "key27": "56MjMQRSGLtFio4BvRjLo5xQ2vXGnpdwvkqLJnWtgkQvP5tW9oDTxvFqGQCXs7MAh7AAckB9nS2cGeSpht6GA3eX",
  "key28": "2SNvZ75PqCL8QBvLvs6UvqKPy2SihUwVapideJhLqjzyhxiJFdrUZHXy3zFqzk9AvshiSjyxLs8s2EHr5VkbQavY",
  "key29": "5NpGMWVKnC655peTqcdZTE1AARC41Hj8YzeE8DhLc6MNw1M1vfWxJgPaNWRVTrdVGN1z9LHWuneDmw4YJkh3tsJg",
  "key30": "3dSWLSWsUqEkD3RjaJ8B8a3oZLQ8uPWTcsxY88ZGhLNzLmnKY2PH6cm2VpzEmPPxb64FdB6qDfTQibKrRHpTPUqd",
  "key31": "33qVCwXxsAk88xCxSRwv7SSjk1H6eaCnRD4HHLhvJecn4c7bsJpwu7FgRWtLJYW6ZqUPZktDadAzeZJLzTHqyoDx",
  "key32": "5uM7RvDE7MXabEKh3HrBn1jR2ArdEx3CAvGwaNvhocYEw44W27z8q9UibZA29Yh773Dea7hDQBqSXECCEQ1RDBm",
  "key33": "27EKR9DkVRkKDzjSyPzGweyX7SUTsYqdBVUxi7HD4oCX8qcBQKetoDHAoxGKR1Xoua6L2BKD4QMDBsDjA6rRSJEq",
  "key34": "5zGdQ53W1N3YJ9jUVZTDAMEY5ATPwvuynuqW46aBjjdDiCqutwTDUJN6VGhLtkGdYwpvrTyvtsMW8BHfXREZ95Mp",
  "key35": "51KiZKx8iQeyxwDY7EWwCCobUo6xeQgVKCnTiPN19m1m9HPTdLdTh5KwJNSw2K3aYJFULRjh8z7nTCXniUGQJZmo"
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
