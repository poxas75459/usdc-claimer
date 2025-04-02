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
    "26skEdCUeQmciE7Do1Nf6vpTFQVEsk1tM4ZsW7GyyRj874eKU6NbHxTSe1s8j3LvFi5ba3V9jFwjSMvHQ1uzQsvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdYaPYZP9i5PNTFE2vzXnHmA5hbyLR4m94PXTyvyE8LptJ4X8PjNth98UBG2GP3ceWumGEpKpvi8YCJ8KYP71b2",
  "key1": "4TF35B2xKcFMvinGLBaKT3bHjmaQXNxoj6hqWe6va93SRLKDfeAQWv4vm9MuZnxXa9wVqBjHt5D3hNbF8E83nwrc",
  "key2": "5M3ywDkWj4Uw1EFNynd1KRNxDrNZqqFo2tBfcpT46VHJ4dqYDo9RKWVk89esm4fttpLEQtvwz6oRSdXqiM3asEUT",
  "key3": "3aXRYWntrq9Ck1M6tP16sCniijWFXDZKY1cxovPtcJmiutr1DXBDJS6qPtfWccoDK6JhvvooegCqGL8yLmWy4N7B",
  "key4": "3ZVyvsxNujLnZsT4jvbSLWSeZ19hq3hJW4aFqE4rC4kbduQGzqjU1XpKBjQSKPHbHu9eSAKLtTAVzVx4UJ9mFaj3",
  "key5": "3jWpN8ujSKDDMbjtcjrFhZ3DuioYcZxmr3yKrHySDq9piCYmN6WDk9vhMn6zwUnnqrAPfQfyDFiYLczz3WhxFMPT",
  "key6": "4ypY8fHNkKkg5Q5c1U1w59AeTU445x6t3F2WAo5FwfSKqeFRr8pQQknFTPFk7Uptm1Tu9x4gau9nZo3rUJqTpfWT",
  "key7": "2FRWPLz5YJFY6qUA3fFcJsqXFX8CRzdiZGDM9TygfgFnuXuAM9U11Sr5PWcMAEy5cv1CneFaFtPohHLixjLqZzfg",
  "key8": "2URXAGKWCyb1GuBuFqASUwnDRan9SrMncSMu11adsmKDhvNCkbYGBPK1Zqpw1GNqRj2oYR3YWaivy4BY55hMXkB3",
  "key9": "2CmYZnvfeBo5mN7V8aZPrN21LUJBwe5pn1sP7M9T8tMAYkmmtGKXHw1PHTWkCoNkCF31zvgGX5BsdqCfE2XV8cnP",
  "key10": "5a7noBdJzJkUqVXqkwog4PcE7eg7rVGshUJN6PzwSSG8r4nrpUmCzgRWNWXMB9Wk57cVkKECusK42nNuWfSAG59w",
  "key11": "4j13MQgARkHk2653Yieq92Mbst2iFhc3PT8tg4FKhr5Xy8z8bU88S2ZLGeF54cYzDnaWfX8joEZZ89V23HVJVrXi",
  "key12": "5T25tPsCXkquGqmNR6CuAUN8hGrt2VBtLu7dG4fejHnQT6v8wcKoAtiJTpQayipQPT4Uek71Ku2LUVsKhVA6DQMd",
  "key13": "3RaspUi8kPRZ6Z1Z9EehJ3w91jUYXU9B89UoV4dgpSbrYUWyPf5Teys4LkYnmwozUGoa3AupKSc1Hoc7YYnftLXD",
  "key14": "3aDXnVFWvXpm9ENShwPWxbDdv1E7iNbESLT8x72JA5s7juUmLq2Fry9R5SKvvbjvE2ehReZV8JQsinfWikYFiyJc",
  "key15": "33kGskVpkgJmsWDdwckUmFLERUD9HacVvbrN1auaEu2qz8gUpiMJYpM5FAMKWspa3qcCrZt7D4Aq3tM8tzAw3HwV",
  "key16": "2tDFPWadnyjCo7ZNaNpbAq9udMzKAGZyZxMZhk7NafMUvSaj8CyKdWd4Ljx1QQwaJXjhEHWhaFJcJneWQmTg63aH",
  "key17": "3HFx6ZCFdusvUNj8GUsJnLmis7Qxv6z4RtgHFGD6VQHzmv1tDJN9cPtdZ7Vf2mgTkUauFjgJ9eaD5xCERng2RzD1",
  "key18": "31FGmCNxDmM8oyNqq4DJ6UYA9wpsSeVDSunNyCT13bMwumHbEkeXTT55gsvWXwJ1j864x6776q6apaRwGNXMkRjG",
  "key19": "48yQm9eaBneqDa28qxKRGka3UefydL1cZPf5yzZH4v388KnnXEmLoy87nBs6vhkJkUMMt1nzb2ZTjz7FiQXUkbnP",
  "key20": "Rr9YUDaBsMshPdhi5Zgy9yohzP1CKN3DdHgpZz53hb7nULS8MnYpKMxFmpzvM7X63UuhoJBjqQUDuYEGMSVS6EW",
  "key21": "5qY1u4V2DRL9QefLGeAUCtPYyMgkDBW6RAXgBFufQBCF8hNtMKY45CXJGEtqKKebe5bsm84G3KAuVy8bXLHnFYE3",
  "key22": "61pssJoYrpQWd6QacWoaFFF4eajg3Wj9CUVkmyBWEzEhcFF2uZTyZoxn8PPyRgzYVaf44zqFhXNA7JwP5sNKzmMm",
  "key23": "5EENHhE5zbTmK2NcpwCfsQyPpAf3xpKWccraGBzB5Q2gURPMdfoAKHnuPmujWgbjr65my2ZnYkYejgx4TvGf4xNq",
  "key24": "4AcGz2ameruLogd7m5NdYcudSnqpcF9pkpBadNzrBHq7y351KVMyCEKN6PYs5F8J44iDv8KzPnxh6UN6R5CyGmqk",
  "key25": "3Mkpxh6MMxeEQ7f6RVP7rQpLHAJHneDEGeCPY1e1knUxS1N1NJp6C8yfH53SXDVHTdq66ACvbxPAFiB7qxxbwuQA",
  "key26": "3EpCpY7AoyuLLkGXPZJEza15c64qMhcJxCiyJCRqvpqyTkuwRG6PAEoo1ryK4cDLLbwxddaXaK2EF4C652p9cUjC",
  "key27": "5XuK5yNBuPWozVxFtXWUKTxCoLKyFsLSaBvwTboHuMzbC1SirP5FkDaopUZaZLRhfi8gAYdbJGDLDfqDq6GFrPq5",
  "key28": "4EzFVFoF8YFJqHGqvtpDgDKbht8ZgmMhY6MDBK1x4oco3m9ERExChxgZZf5ax31h2p2kaFRJ9sCtjjkDVriigCqE",
  "key29": "4YdsjJ7M8j2xfuoVbVqMgtHJWqWhAyKCA6NJrUZwL75AY5E2oSFtPtTFhaAnuRvX36Pg7MMbCc82gdw2LFHJ9wTC",
  "key30": "6593yy9ejxzytYJByEcndH9S1w2jFHHojfR7HcaY8hM7uGpDkJL6TeRufWNBsrDPdTCEtrXnS6rTkvrQTAtgnfGG",
  "key31": "4aLK6iMcVX4v37n5nBmYAJfEfaox4KnLyKPp5iBxsrCFG3WYWAebo7JzKwJ6HcpjdyK3aqt2nsEcCJ7498k53k7h",
  "key32": "4uArrpMW46K7BgBgQqaSDDua8duovc5NfUYzpD7vSRytcE1BaRhNFv5nkDE1Whpe8TkRSx3EWLrqJ31vjb1xZR8D",
  "key33": "2E6XqdQUAwUaPRaR3Xm9QB4kWN7WhujETWmJGp6soJgLV5YakbzG6LJemYoMVC6HVDH4A29SdXhLSpY1VGZWuVeT",
  "key34": "4z4ddN7QaYL2KoHCYL7FMYLMZREr52YSkQUxmFuVR6QciV9HkTT79M7HpH7XqyV18WiqGLejGrE7jhrvjfvmKxP8",
  "key35": "4cu8AcRLFaeeqMfNwFBEP9SYgn6Uee8j5sE3ja1vRY4Lgz4qywttapKLf7dsQtqnyeKyLXqeq1ntZnvfXVn1UxK7",
  "key36": "3yeBjts2uasnEUTPbpfomR25MNNihYBTvFcFoCArqpQTxoMzay793y73KMNNqfGPt59m5BP8RtjLYLx6ckmZnf6Q",
  "key37": "65hZbvCeZMBAUZTNSDM5XjtCsogQ1ByrjHgsvknbHoYFibfq9isjEtjtXzGGCdmRXqA6zDkf3YWBSuzsoNzxEUfA",
  "key38": "4k43fbJLAoN5FPDookkdThxLKintwiKFPjD2Y8iGJ4xjRKFF1foxdLNPpbPm7ZeBskWz7uqx4UjUi25zycXb2mx2",
  "key39": "2tbQLRfKdRJtAGDCPnkNQqvD436m8jVBAT1KK9tQBv2er6dg8E8dP2U7rGVXvDsxTxrHBJCmFzfktHvvYct2RXwT",
  "key40": "4EVA6Qn7wreWDByfSSxK78MinMR9eqZLwG72nSS7DrnLsnzjGquTiWeYBgN8iX3CemRjD8F5oxRKhGBn5cJXqC84",
  "key41": "4DMdqEHTx5WSjth5v4mbExFXofZQKVzwPgLWpdHYxAP5CLCg1TrgGWVxxfVhYHWEBDA1FyVE4ShS7ZbVUqijqd9m",
  "key42": "3WNxDT1xCgwDbgzDQzGMvvvtmhzn7rRJjYYE5bJymoaknza1b1TgQtkmBDYzikCkpRFuYbNxamSXorTmbnPyoXCk",
  "key43": "4X3pp9Wab9syfWdwj9XVeLbRVxFeF3dSExRc1Vi3TQGDgpRdXdy5oYDCf6ZHuTETZVMaSS3LAdotB8gxgD7oQcZy",
  "key44": "5VrpMWndLJHe3KkiptyTHeuBDMsCnCygtMzWkZDyGPZkkqUEiyWGtyXxbMaPqZc9CtyVy2tacttsR3YQQY4i1GNv",
  "key45": "4sxQ9X8okeLhYTkVoCvBdWvjFXgbeTLBdBDmqXz4SrKBejMUbizqsWB5tXgdtNw2u7mpv1MUK9dWrYMSRbVrekzD",
  "key46": "4raU3cN5GvBAxzmssD9C1Wb8R9SxCWhRPddvCZVtC1hVuSbwYRHLRytj8NW44UimwZ8qFDot3dtbeWTvgR22KWcH"
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
