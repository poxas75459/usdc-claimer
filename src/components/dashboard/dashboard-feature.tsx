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
    "4Tb6DNN7BkviLRWdsrjRwKmkFwSmRSQo7iZToofoDQyqU4L3KfGYZqam25jnguZZXJKNEWf3RDJceDP8Y1VfVwzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVSzb4FfXLLKdA1ahhYZjLsxnRaXk1xqSMJUF3W9MBLgx7RrwvMemw9HjSojeP6ZDbxmFMtJKU4BfHp1hAn4soe",
  "key1": "3b8vaBjQ1XUr96z5ogpdNszaU5A4xuJf7igeKEno3kjqWAzSJQPRtcCLbXN1MFbfpsfJj15DE8CMN6PBYirPxoex",
  "key2": "49WGxXWUJXjDunnDiDBrD5LECZLzhGHGuG7vcsQSUtwhvavuKSTJLjdnggEXxVbH7jbMLxh3MBeeWWivL9qFBRux",
  "key3": "4iQamo9tzBSgiH8qy7sr3FcG9K56Lz4XgrfYHRfPiry9TeQP1BcHsko6w4apMcG3Yxrw4GuudbK3xGzt8nhaJfyK",
  "key4": "5BNNsfSvZ2AAbCQHJnZcX3CmRh9E6iufEP6xaQy43mn9FUi3TFVpyL3B4f5gpt8agrE4AGNXUwA8afgbVXxG6YqQ",
  "key5": "4ArDM7KUmw2yeWUEKCs5KSM8kX6nuu4i8HetVSnmfxRUkAbKRV9MYqy5yjwBRUARgZvdsMqoN9gSexwfEHrSoEF8",
  "key6": "4BAMRVbiU8mVpcRWioKDS38sHm8gG1vMgJrxNRRLt6KWBwTuuVj41z8UJL8T4bNLbppcbHuH7NhxmRkuasvWuuhW",
  "key7": "4v1ntDiZspnwb8iDNiq5NUigE6izhoEVoNttivxzBW4xjGK8Eke7fXZPtGKmBB3ruoFaPGPBzdiQS2SYnScm9iAX",
  "key8": "52N1p41gkbjoEU6k638BBbG3Mw3AfR8z3QfRr2wo8hUKrMtbb9A9MmqLBok2G9wt43yDpGAed4GyAZ9LpxdpSDaP",
  "key9": "4vx2KKhQWs531aAr8bBeyFNzqZWFsXm2NpV92oUoVCx3fnrbWUZ8trUvSBnZu7GPD5cP7vXfMyrKmGxg6iVBz5Vx",
  "key10": "31cZq5MHpp1hfovY1MVQ7TLqWRzxVchAX35P1iN9XAKLR7WG5Yb4mRkS2UKpn8N2BPguP8ojZpDvWyEZ4kV5QFm2",
  "key11": "2WgF6tBzYEPknmXD18AdPNiSxQkDG5qgbkc1ZZPqw12yzYVd3ffpMSgjwWgfefFv815KNp3wrvso7Wpo3b1EfgiV",
  "key12": "2TE4vDAqThcJcjhJSBTTAyo4cPByakV76hLm7Li1UGtdDuUR9nuTzjS813Tqu9v2JpSq615xxja4JA6CChWiT4th",
  "key13": "GQjsFkJuzZop8iHLUTic9etz69UMwAwcdrs1hpcfABBVYTBgEYZgyPbN4ruRALJpVT6rKSEu8diBBGiaMsAy1CQ",
  "key14": "4wXaFuVFsxUUzTGsGsgWHTzJaJYKQ5bpFbnJ5z9oYS8pYFgJUXtJ7sNyf5eoyQH2KL7Tn6gBVadqRD1PN7a5ogvx",
  "key15": "5QYpFXsZ7hTVgha6CVtAyNK4nvP6gGXmMi5m24V9TdgdFczaHVj1DaqoVq2JZ4NC24xov1mVQSdUBXR2yr4es8av",
  "key16": "2JZHtHC5tgDgrqEVeH27m2wAWQ8nopRbmKiwaBtnYGzNxEiPmBcV9UkjjHmvXHw7FMf2c8BCGPXVpz2oqtGdZfVr",
  "key17": "47oij5sEN8nQW1Xih65XNbZm47j4RpBJQdhh5Mf1Grmg28EDBawH2jnKeejg25mg7HxNm9tvJWsNmQ3cua6Q1Gru",
  "key18": "4dmhg1vTQ3xidUGwL3ZwH3iGow2yVGvkk4TMivPqYy9VVbBHuWQcXenqPRpBkzsqTuyPWP45mGXes66zsbnKY6Mv",
  "key19": "3Et7knJhgSMtkDGHnvC3RuXS6jqS1sXHBXcEYKcJgL6s4kSEqkk24oKZXFh6gzfMgpn2WaUP5QthfJiUAqZWfNr1",
  "key20": "SaG8XXAgo1Y5ExZXKPjaaHJMDQdLWT9TM89unQyeFD6Bs5WxePgmPEkJYD6gFN1yLpjnmi8p7RXdJzuJmGbHfMv",
  "key21": "3yU7AECqvWyQ5ShcAkhKKhek7iYgmrk7LHnyhRkEjPtQ19kcTBMnFpwRHdm9ejdaXDtkKJbCiF41uAunTVWYU8b",
  "key22": "59ZvP28GqwSnjcamhP5J4hXQS6iWag87fK9PNu8GTh7gQBN3kRZzBFJDLxHFGnCqLnHFn8c1Hqo5xppa2ZctxsE4",
  "key23": "4m9iH7zKrLyY3pYbCgGLC8jt2K1mpSykpPKCCw4yoBQcpK8FtcmhpQqwPKBPaFo269GzYW19hdL1eSycz5EdsYwK",
  "key24": "9DtMQvMoPSVJXQDjLS46EA9S97hvz9bWGTAnwwSYK3JALRzGuSyDVaCTsrGBPFSny4QcvDkMJTUbH67TzyPozzn",
  "key25": "5cJTcmTKMNN5YRNpVpdwgczz9vFUv5vwE33oRYbPSfDAFsUZE3AqcTmKacJcELbzSGepRzThCADj1dotvdPRWrxB",
  "key26": "5ar1uSpDNjVd9S5z4EEG4s2rc2M7ee5fZ3ZZCbuyS16wJ8tKJqFYR6qNYdiFyD3hb3faTrEKemAmHK5KvFZCtn6v",
  "key27": "cu7LSgBxsZAXmpjJ6j1kvULhsEnH9FCXstpLiDSH5vfaj1UpFrxqqNt3pqM797ScdWEdogBWUUKw4GQPxtb3mfd",
  "key28": "3B6gQ4JezF8U8NL8Mx56FBxF2gC1R7tszBpnFYHN6avEjWNDHDBFQyWFDaxMBoePCf3yjKdzSaLYLXVKh4GnvvEP",
  "key29": "4smYPup1pEu6MKYXo25q5ZD3aZd3YiuoHmgrw3T31V9ACut8z7XTspcT3fjW1LuFPhPZXAUJUGHQRKxVbYeeyXq",
  "key30": "3MhsBxLw7TTD7wru7ghZNpNPM2FBjN9S8EFkRn5hS12vU7fxZeE4cJ3gQtPMFVgZqjQZXBtKX1PpYDBEL3V1RxWs"
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
