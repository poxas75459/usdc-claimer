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
    "DpcVDP47nVD8tysJ9GbeWrggbkGgZuBovEfBt3mXmTbaJ97YNpGTpU5mzekaWdSMLctM1TTMXn1qatL2ZSMa7bL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xe9H3bfHb6TzM33dywtGRm3ij1nvhMheV31ULkqwRYWYrfwAY5QDccVyu6KXHcz5F67TmMd3oHb5geSBsJjcSpm",
  "key1": "5qhTcVvFSvPWWhXv9Y5b4hBcwbbGPvYbsp2QXMMjvBdcJbrqnAK8PPXNtjDucVprdDxae4V5hFdYmHjn3jkRG1H6",
  "key2": "5cJEXQnj4cvVo5B7AP5jbrdWP3Za3icp6pqVo2wS1MZRtyTqLCa2ATTRF4uppXrLfmDMtjwu78rZtNvwHfwBQe9D",
  "key3": "4Xz9Tutzg1hUbddgrS2k9RPuxexokfvEaAr5wMza5oewNpPcU7bzqTKJJPPJ9thNY3zctcf1MCMMKch56Exs7rpk",
  "key4": "27s2N6KURFh6c5Fvv2yfmfkWCjJRHBcYPBhTa39bnTpP87bhxR2FuDbRe5pzkcCeNcoL5X6nAjZRtEFCsHDv4vbR",
  "key5": "61h3pGnZbWYFyE2NnTsokCjJL79QsCjSzzaB1r9ybS6RdEuyXeegBU71YaxnrsYNQSDs5gV4pEgo6AguVAKAaKXJ",
  "key6": "4Cs8vyJzMdKG4QHKx4r51vkMkd377ma5DicDs64QmvXuN3jK44oVdnC27Djze9XetADdC6LHYwETcH7ZTqV3dURF",
  "key7": "5g5pZLrHutLciScQL1CnmSpyq77dKcnb6SdUiGSdkKU62qsfPUy6t3MAzPwTskghP1k4cFbmyD7YxeCvHqyKR2pZ",
  "key8": "5auw22ZQReX8DnpHtFZApscpy7Xi4WjaRggphS5HxuTpWVTLRknuQZMjf2w4JyPZWeHyp1xFzi8Lv5VVae4PUDvA",
  "key9": "3bTbZNkdAQsmLKb2iKnBcYJb2NumivwsV5HMbaWgu7VorihmTgjN7SRfk6xMuwVPYRXMYXD58unP4J6uGX1KNNkF",
  "key10": "4nxZuWaKznw9ouZmM7Kq3GjeK2jHMwvynxPJaycd4d382EN9Ea4J9noWVt7RUyanKbHWrvB3yLwHv175b1bXPioE",
  "key11": "4nBaW8MTGAGd2YnL5ioej7ftFR9KNgSnukWj8jvGRs7T55Mj2FqUvXKaLZfjxRUNqgh2x7v6wz4pLPxjXaAjiY3P",
  "key12": "ktAAsRa4E6tRTuEBVhNmhQUeH2vG2Ca15wVGgsD54Z1j3ishBnb89jYFXTC9vRVXCAoZenSSoUqcL1jTC1QTjok",
  "key13": "3hJxn9AW8hwr72P6nK5CMkt8EZHLqAGUddWDndac9JkXp9ExCtXziW1vBYNbS33rZf1AKSQjcZUYmV27d9wAiU1F",
  "key14": "5ayZKEbzHo7vCf3oU63ernd6pSkCTHWmMJ3gUNxWS59fVcehHJKqc4RrH9AJxjxj63v8wD9MmZ8TKaq9uFD6R2Ga",
  "key15": "2JfLEy3rMmHMxcC1tfnFbp9U5HdLJy6exBkHH5cwd1TH6Mc31CXE5kYH7NSsDbFA2HD8sDRZfQEiiTzs13mz7qwR",
  "key16": "4evk5wBkfz3p1xm1c8w2u76bJbkUWgrh4GiaekyGRqXC43RWpmcnx4u9NmhgYps31CKtikN5amieajnqytXiUHMe",
  "key17": "5KM8kANNszmhYxLFQtMpZe1MGpywY2ewFXSyDKLRioSNB2D7yhbZJB17Cia8MFnDboCc1piee7DK7vpY3KjX65z8",
  "key18": "5WC7J7e2aixmF9tYxCBD2KNJqUdSeZ2uRGTiM5QSPEben2NSksT2m8h1PCtHhmZnZpnZP8rJwuogcoRzo7MKwvh4",
  "key19": "3xr78A3pRCVC4XuxvNjmsfNvsNYRT1pCA22Z9rNTNvhfAgEiev36wkFBay4ojihSGveFeG5ipviPt4MAnLydJvNW",
  "key20": "5EdKU1E1eFKuVm5tSwAdgFLF8X7EsyfUraUSyVsyBX3N3hAa2LVqcpAu3LgFnr3BqYQErGD1eK81xLw4P7ygFvjV",
  "key21": "2ueB9mHQwF3M14QPXbHP4Fe5QSX2DPhGAeCDTFpMGbNkZttwmZzGw2XMFaBuGtFJE36yzypJyxt2YzLWVt1xSP9A",
  "key22": "5mxSnpp69FWgvqg6CJoAGS6tGtFVhLk1UrUhhexPzZZ8eRAcRQL3tSNDbYJoYaJqnegBULF3SskRrE4dPX9YAvRY",
  "key23": "DYq4TngDwtfWW345nr98g8CkPhKcXGEwHajK4UrePZrg7PqozVLz6kC9VdTAPhf7xB4BqRams1DWFSW6m23ALXf",
  "key24": "S1Zp5QzP5dnqhzkEtLYp66Cd8ygX4k6gEjvumUiiuSuVLavmAqKf3VnZywWK8cn3MQTMJf6uJvDBgzkztLF3L4J",
  "key25": "4FUDuENM6h83BqCudmT7qkTJQeemfb7QbP5sohm2wfaaEkFLYtmaRiXJ7snTaFVrbiauDTQAcPFDcNtKe6HW4veE",
  "key26": "2Bi2pJqj6JGKdEgvY5614aLmTDzT55LvB7MCYZspx5iAdfXUHPNzcAJLpSc9X2BmUEy9bmoy8CfmQRPpLESU8PKd",
  "key27": "8xTxNo3U8iuiUDsBmKW628bt8y2arr5sKUB8aDknyRYX5q9Cs34A9UTcV4GeX5X3CSgDbYqWFihsthay1p69Vir",
  "key28": "2EPgpBwjdD85KyvxhgJQabMvXnYTA1BZ9onoQS7kAs8VGaZunPaRYP7NAGR9Ug524RFAiznEQ3qnhBY4o7nJDfq7",
  "key29": "4HxLzhe1hoMY9SWytA6aaPorfQzuUs9njZgyPc1csS3TJF576aJzSUmXWicV5Ap1RGtraypTDYDaAih4SbDXVqwe",
  "key30": "3W6EzaZMWJQ2HzwAqS78H41uM834g7FCBXyWKUNiK4Y8RJJ36ne1SjHaJqWhJi3fZAH28P5rQ4Fk2N1Rjiq48Rut",
  "key31": "3NUv96GYcZiAtpZkhKzSbs26i4yKWwpDjstFMqj54KGHjiEGQE1Amt45kp6WTwrYKaejwAF37yMnJvbY6yhsSRh8",
  "key32": "5UYKkczSMVZkMkCPwYifoemASg1vqcmbWg6pyZQj69iqVsVSamYtPapWqWNeUcZxw53LQ75u6ndoC6m38iTr62TL",
  "key33": "2QPwVR12uMvQcPQdfvyXbuGdi3gJCFZ7D378gn1hQPejm7yTmjCMYAhK2w6jk5H7WyHiUnVQEybhixrZvhi7ECsD",
  "key34": "3n1XMUMcygdZ2k66Jpg1TpUfSp1vSjGMBY2MfvSjEG83K4X4TPQ7PE7j3k3zXicDxj8b2wBBujU6623u5iYHm25u",
  "key35": "4zyNWNgZLkJb7JC9H6HE91E3gJWV1ax7ub9dsJq9vtx3yrpWgZqjERceNrgnZRxzUwkBmd64CBDvWHasG4x9m9j3",
  "key36": "2cwoiTiqrA9GJAfAwxDtg8sW7WLq5uTNK8iZe3Mdrz6fq4W1Tn6v5DnXmpkz8H9iy9XH9Makdifn6XAcmLFH9zyE",
  "key37": "3Qj3nteECQ5caAUURbdFCW9LncSZFmBpQCyvEg2CwqCLhceec6Ukep3NXW7z1bgpzJFUDrkS5HXzYEcvoz1aRpPN",
  "key38": "GgKnr4xNFAdh43ynCeFXAYKESvQuKRuwpDrQ3X8CCesspZDJh5brPCqy5x2C3v7tAAbJD6hPWNSCSonrQsmQs8s",
  "key39": "5aeQqdVwbKvHk7RNBgqwMo4ME5tRq5ZMwWQYhLnkfAWRQhhMwCodqRw7knMWsMEXwbkHMUwgREwPgQDKByoZePix",
  "key40": "2shXFcggXBGca6btTkSY7Uo23MZXpGKntNZE2FEY1Nq4wG5LqgTWBnFnoe1bftWpSTViNMjKPEQ2YEcdKg5mK3H4",
  "key41": "4mANkXqxtqGsngf2vFo189tEHUYFF6bSLCNLYwVaLftZQVdQ3TopeNHrb96gBw6FNGeizRHd7zSKrMeZnTXYS6QP",
  "key42": "2vkUgv9CyB1VTuSMJW5UMomwu2r85hQysehoTqgbksC3EcQzjjpTfX2mPeJJBSeE6MCSxWcBBU6zRbtpK71XsjKE",
  "key43": "5MY6M7D97PYeCjwXkosNoTALPBogueYcm5Qh1fjv1cZUzsaEwpXs8KANvvyi6j4ZZBg2eXBqraWnYbqWEbzxPdFd"
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
