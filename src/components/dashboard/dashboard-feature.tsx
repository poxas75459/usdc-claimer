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
    "4MmDvL4EWXUHRxdzm9y3EB8PzMjgcwSRrYv64zZSbY2UbTPSGLxELkHmyGpJ3ESZCYKvdMZHeLi3uCzRhHsGn5nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556MoyjPU7krVQFBUH3wE9derawvZ6o215ZxxiLDm4ivJpPN5ya5u9dFbM7Wyt2Y8HNbZ6Fd4PjWMGozVPuVVDiV",
  "key1": "5wRgnRDfu4SaDtByfgJi9rzk1o7KB3h21KnjNLexBjkJhkWudWZGReHzbQ78yCYczNHuaXM3HSh3uFhNjvoVEDFj",
  "key2": "4d5LQL4wVqEkirAjaAoe6XU1VyfA2o4WfNtYBGzAUaEjc3fo1stvxosy8hx81WkXtZnYg6W4v4Sc2CLazkZnnnZ",
  "key3": "i9pTZQaQLzWVxq4avCzJVN3Er1JZ8EDUkj6rE9URXxjGnnzsK7WD257eBVu7BhWaHGzvnARcg4sDExvsa1ZQHBp",
  "key4": "2SG8S5iB6maBZppWMqQ4SrixAc3owjMF6jDaeBEFTbBhFR2dJiWYiqND1JkENT6Kdz4thXqJd2T3gKYrUTTWm3pV",
  "key5": "Awb2c5py5Vto7Qc6HqfCSkbBugYTme7pqj2MuRty7GUo5HfpJP7gF4y6kCzUjJCmAv5DjZYWpS7mddbWJ23XiH7",
  "key6": "63sqktw6XuVsiY5EMZRvuMWB2Az1rPVNZR1kizRqLoatz2jxhoqYbcyRhnLVA4kb4CsSm6qoU3iAHyMXmZfLA4Q1",
  "key7": "4UczseqVTq7hebkdYUpmtKPLSdhZDj8cPk1EDRG1wj1RmxuLmyuidY1XzzSKyiAeK9mYGvpvj7JBLnoVWH97nKwe",
  "key8": "51wQGyexFXy3FMRCKJ2kUAzcAi1VnEjsaBFpaNGn3jPwsEqpCKt6ZcFpVWF4Dt6kXYuh6qmNDKbDGAycteC9Zz29",
  "key9": "eEFN8jGukzgcYZ7zSatz81u8mxwL1fQj93yKTEktjxewS7TzCtry8xurvdrDemBc5uykAcydf9suFCZSJH6TG53",
  "key10": "3ny32eBb4924CZZBHwwNWdJz8xmajvALmyvq5PYWDwpA61ZmhyFnoAWKb3aWVv22MMLxhLgAFvygukJ8GLSwYHQU",
  "key11": "4md1BRJRyxpnxVsdAwVWGAmkNnk3fAirGE7BjukmZVrXYNt3EUPQmMhNZy9W41wcK8wPHagT2EpVJaU9f1dBSdTy",
  "key12": "2rLdQrj1WUc5YzG34eZm4Ga3BKAAqLStECePwyA7LRRauWuFjwYFSTeUb4PhxA6PmTp7iUZp41BRPrwtw1A6mzEz",
  "key13": "59V36v5gtHFu3z7cCQmkbQcoHo1QxQ48EML5UETov6HVLz1wTw6G3kxDEwgw62Dm4LXx1A86BaHFLhhJzyiPpqun",
  "key14": "4s4FDERoTnfEVyTcJAjMdRPz8Zk52YzvRzw98RkwTiVJsLxdJpEK2S9tV57SiMMcdkT4rNG3UrfrFnLsgdAUTvd1",
  "key15": "3NdvUZyFLzMYmr4ruRV2Y7SC3RXZKsb1WNGXSnt9WDznpDvYXyR1Bb9qGEaz1JLXTUdMns9bUX8zsxwFiXA9dtTH",
  "key16": "3b4zAACZq9dML34BHduAunUiXU66eM9zy5qgrDzzmtWH9egF1KWFKxtnRysTywqhkfXMfaG9NXDHbBPmi6pPocEV",
  "key17": "4mrBpAXw3PhEmaDBb5cDJft5qRkPH7gx4Jyjv2pJgoqCD6CMvbfk4g5YGgaCFSWitTfVLE9Kn9TcujSfiRqvHhio",
  "key18": "g4g7T7qk3sxj3FfpaGkNfSxYN35EqVHH8eivdeh92mP4Rb9Vu1qBuPdvyEeg8N7txaF8Pd64GB7CYyEFFvVZ9T9",
  "key19": "6UCurzYKYdxfwaCKzdJhY11pt91n92b9iuSWnpK7CYHeaHt5khfVpL44hQ4VKFdSCUPu42kv6s9QvCbdWTHAMEQ",
  "key20": "23PuznJ7gVgYzRf8q9yNqaqsShYajLPj4WqkPUQVn7Cnm1BYPNwEWccQpBTxQ1FSuoQqtujUb4tFsqpsH564Psew",
  "key21": "5Uiv2mjVV4ifjyKeq2QG2Kts5oak4H4QecrxibaMsaJ75Wmynou5NBSSqSaPpFfPSUHRUZvmf1nkQZ75wt8MKUD",
  "key22": "3DVZCpZsZToL8cDXk1HrfckpAn4eVSD3b5xUbyNqqoffLHJRebVE23iG3BWmvkg5GGe7waJ83afn1zKcEVgUJBNh",
  "key23": "31pDLchqi88k61i1h1uUtD5r3c5Xg9XqVtQKx3SXShsxAiKMi5GSSSk9i5vbTVhMRwiVPfqiCVGVFyvMrLqyQwn4",
  "key24": "2Pr25FEubcvdjCB1FDzUDVodqGMWsiPap7bsn9AewkJfurp5CrwTfTs7JnX9GYXeAWxV7S37oa4yGWQssozQqnyD",
  "key25": "2Aubz2bCvgfbBbEsf3DHiCMDrmZQiLHhpEtLVgHKnZU12eFJDL83YQJthJx9L27L2xpxjEMg4JB1rYsu61sCDV1T",
  "key26": "i6jkWDdzt4zyFaTH1dM4tQGQSqj8x3HjsrLaicfzPD3FqTNgry3sFXV6zw3sU4NNk6HFiNZ6FvLCPDLtorXtRWX",
  "key27": "zUPGpptxer247GuTooQmhePFZD4qRNFXuTPQsoMwhXZmESvp3q3rtwkbBgL3sybxYvyNrvWGyqpviyCcVgBffFR",
  "key28": "2nyVgm1kmpsT8JwShkSzch1qecgQaaHb7YeMjAr5R2ZtkWd4SRtygW5QWHCs3cahbBnH336N8H2qU6ndF8Yts4s6",
  "key29": "3LG4hmrX9xGRyjC72XcRVogWB4PLaX7iafm225KEXs62pCgAr3Yw8fUBBrzV9kEVffwmmFYQVTEfga4TScxpyeBj",
  "key30": "2BQ9sM4PidMvaPZNpzynR9eageq855wqFLyywk2RcnWBu4LsjtMyYJobS7VFN1EnrFpogRobm1qLBxaWcQRLfk2N",
  "key31": "5TCt83Cdfhb7UaHttZXktV88utb2Vow96zasT6VxdU54sqhRvvz9uUqDSzGwQ6S7rhdFEFNmPjhkQ5iP7ciZhV7t",
  "key32": "cHDUkMWLAuwR9irar4R69gGAJyiT1cAEPJGkQqRy2WmSic5LKVfZ1RRxdZfLxkT5ddZz4vD24XYR6Z4kmu1wf2e",
  "key33": "rAU664c2jUHyJbxynF3whUAGvJQ329kwsydG4Y2VDHkgSErbbdppneS1qzGz8T5vxVCf2gYugxzmfa1w8Z1x6K1",
  "key34": "4sSqR2WKYPAZMkMzeua4Pi3NnM17KV6B27EdS8AZ1dLQU9KwFkhKL4peF3YZffEf3wSER6AYujL9cKcMVg4FKLgt"
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
