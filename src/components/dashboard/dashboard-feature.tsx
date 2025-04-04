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
    "67ate1foAMg5ULzj5jJBwX2P4msVCc2mJLE5eWPMNBZCQDRoY71wZWy4eYePjUAniuxDCviDFSd4HYQE3LXfBPsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAxdmpEK8M2QTWvPfMzsaAX4HLZY6f55LMMurwg4UTyo7YLQUijMvE8GYmui3AS8pakPSQhCk6vnBa3U9TjnRN9",
  "key1": "2jpwUBMLMQ3yfZv9hbqU78M817oJtLj5u94njRKUZNGXZTwAJ9WcTCwgshreVSDCdRZMituejwQZsrtH6dsghuRv",
  "key2": "49RKFrx6BpmRjG9wNF9YpNaqWS69C4563F5Ku5PD2U8iEZbBuEM3Wcob892QhN73zcyJQu73yfWEETYtC6aaygaL",
  "key3": "44ECpKva5Wr4LvUbztS1nJ7uKuAGcDLawQC46tLoRn93iyhh5utyyhoJ834fuKoMV6NjU55yPDDjtkQ9Ge9mGzt1",
  "key4": "vYwK6HFUY8CygkzMa1EWmaxCuoykK54tfudwya4gWwtLrroYFtWNHNaDqgYCAZLeDSbCMT3DkLwz7mhHLUnNyb7",
  "key5": "L9874MVnp4ejQHFU8JH5Wybk1XrQnniBBUrUE1XnqRUHo7uj54zXuJH7EAfqNTa4dLZWx5FGEF7tnAv3fFr9oes",
  "key6": "4MwaZ6Cre5Dxti5SvE4iBj4pQ18DS796QPzuYHH4wFsFoUuaYPawyK2cFHBE8qDoQD4C6H56zA7sBxCHU13sFqbA",
  "key7": "2qEvPLoaqM8QZonrDRLshqGPZBs5zU1jzczQxn5bcb1q9zj74w3Yc54BXM1YnsPghaPyjk2gREfNaoeKcgnWJxmg",
  "key8": "xy5KzEYyyN1TkKDha6au3TPQdks3bGsfiXoEgLijuk1rwq1EZEcZ9jThgB7xh7h9RwaZU9g6cDWGwbZ8dSKNxXa",
  "key9": "RnuQvmDnqQJ73iWPEr9wMcQHeH9QFCncM3F8wWSA6apjFuEEB3m6qi4TKuP53kZH3WoGhEZDiwseYYjb5EQ8Yg4",
  "key10": "2bcMiJFnjmxmBP2E4ijo6BLzrnLmrxW3okyuTT8n5GDB9z3tSgtz46AWS2R8CPhBVrew5b2sRjp342H67YTuYKvf",
  "key11": "3nQUbMxdLoA4cjA5PWcjR7XFDtjKymP8TKKLwma9YMNat1yMVzzPzzZKPUn3oH13RKF9Ap8ogTb4jHUzXh55bpgf",
  "key12": "4j4TPLZTTgiJxcXHTvGFJv7RVWbBmYHZFELyqU9rpoXu8tyvi9J24U5bHpi5SYvnRH93eRpSLnWZYJXVJXPjdwsF",
  "key13": "551ki4oG2URyxrYB2QyGaveZ87ZAFJw7w1Z6hKLwWMZHd1aXLtW9cihUVwZiES7mBVFuJQULZNaNNhvQxtmRq6Cn",
  "key14": "613KycnPvbVLtjobQM5Bp6hB9X8bfa6eAH3UJL5DiiYjdzS5sEiU8tU1gjnrcLLbjjR39D7oc56iopRS2qjSMxKT",
  "key15": "4D45ojTwR3uUzdGEXxCineAYzg1eHPyDaZRz8AB1kJpwmr81F7EgEG7yU87igNEvpdb614y8fcZzUkLy6fFMprkL",
  "key16": "22RWkBz6vusn3J55T5R1UDsJhZ26LtPMtFdLf4DQqqC4WScacqrSA7vDGKgxPgVcwyEeYvToAtxuQSCG6uo3M1L3",
  "key17": "3s3dRoNsacFNz4TYhDpNV59UtUu7Fix5JaKnDCCuLMWRaV5CqNMbXYiANaD3T6DsCopLWUBR6epYY3RACA9E1Tj8",
  "key18": "4vLcLREKjMz3ScA1cLF5S3wkWXCy45eSmq2GUBWwRJgyLaBq9VygBmGrKJ7HGZkUmQRdLMRjzjgxpKyPXTLgcS3L",
  "key19": "5Umxduuk6ijvDr4BijgpA5Ex39gerRktCmfKUL3siS7m9yHtpYGgPAPv4vcsemx5SjKz5fY8uXduxzPfZGzWvbWT",
  "key20": "4DJLjrUzuX4rMGNUKtzKBDGmwXisHaFxZhqG6pjrwf7Rn6pBJU9vksDjNtsg7pJWfdBoNBagszVkgcKA35jLkzFV",
  "key21": "5R6D5GehAAsjzF87PLFDQbQfiLAq2zSAECzJQ2YCe9StRzBUvrW9QTEiEVotAQSw7wzoRXDf19xqC2wTHdMTDoSC",
  "key22": "3P8ezQN1bt1EBDQb91W8oV2KmrY19ZvnzS3BRYqSibTDdAioTruk6CXtgJUZv7XBN8utnjyKsPVJGWhhQ4Q7u5x8",
  "key23": "31txDdNDLyNheqjJGkHWD9Vv85yCHSs6YfrhrREt2iDPxTECdZB92qzyqNXCSMWsP68RziD1TdMF6p2s4oT6quwF",
  "key24": "2BpySqo7toV7sEApBVmBtHFhgqSfuN5FbMRCSDADHD6tVkYaNQr4pWdA2s1csJh3nHYbsKR7ZAfgFnKSV7Z3uVtn",
  "key25": "5vYjEq7bq5ZWNMqL1xcJta8dA13fnnnYN9Bpv39m594CbAkyQCGWmJftTs5zXbwoU91MbK2JQGJQF1f7JZ6wxndA",
  "key26": "2HDxbRbSDKD843MXBWCcNLrg5yQs2TixVbbnAzoM7syiGsxZqr8nhCNhtMParTsxPfX4QeKou2tP9DS2gX13PcdM",
  "key27": "2Q8gthzE5M6EC79TXp7sNYJLCavZhffC5vj6kc15fcLzqUuENhdG7dGTfCAhPUKshib6Z5be2nbL8oieBheKLyYc",
  "key28": "5JQQPZvNMfkWb59FSUsbUZssmonE4LnSCkd2qgEkdQ1XNpommug3Pf7J6be87rxg52YL5JXrbBaXjodNV2HWxAUW",
  "key29": "5x4kUwkx8Ft2fmxAcFVTHUhD8wGcAnPH9MKfnU97SXZLvoWpZdR7rWjXUkepSMTXGkoW1A4sh1Lzj9ztHWURT4ip",
  "key30": "2fzSqBbkroAxHvs9uMxEeXGXgaM7YRDi7FFaTWqkLStyWoq77tRP1wqvsaAm8nNYStqWxPnAkcVMc2xrHHKgV4nV",
  "key31": "TieXNcnz2ozjLz9YktxCeS3L2J5GsJu4oGU1JP3LmvNoNpgwdQew9v6gsbh1ykmGPhntAjYJw5HPCAV4xpi9jDE",
  "key32": "2ADiUkfnvEJYdieX13st8oxvawMueFLBsxh8bCwaxmLhkX92v6tywE4PSKKju7XbHShSEwK6xi74YA4J4YuLx4dF",
  "key33": "2E82FLuUAJnbJ4Vpeut32YwPcmLVRQPeTjSAfXe2AUz9MEfPx2oXVdY6L8rF4vCkZSrGgvBCw1qCeH4NarVuHxCg",
  "key34": "fKpxYSjb8Mpo9D6yPFQBfUJr9HGUk4WuuCxJBcDR8ZFvcZDQbdUTi76Zidk4pkBhKDW4XzfrTCU3GAX6VEVoqRp",
  "key35": "58VCZE6pDHegKtJPDScWhUD1vAEpZwmKBtaa3PGvh4ViMDjyseTEY1ozWAWVme8NFxkPEqFbfpV9oDkzBodSS71L",
  "key36": "4YveUYmE4yM2JKxWB9zntvedE9PoQCgEBuKA1eFzttdw3jG9wpK9VZQzPcWp6rAR5wsQFQF1T2G5LFvKs6iTLCAE",
  "key37": "2FBLQAUoLE5KU1bAHEu1mN8yAadQVByFVXg4wV6ynfumt2UmEwmag2WY8vDbegAHhttyHY3wZFtJCA2NRWzmSLwC"
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
