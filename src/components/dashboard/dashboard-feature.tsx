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
    "5qoCqG2EzAgNfbnLHsjQ9PWEzvTUHJB6cu1PeKTMqvofS8CBa5JqN92w5qczNoQoqSospaKy2Ed96WeMAU1T5dXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FKHE9sPzyVDbNExSLjaBGbcdgsavWmkWzUnxs5aEfug9LXJaKUMpkUYfcuqCfWM33YPRrCDp3nnTebkMxRX35Kb",
  "key1": "2ynfia3hYfrZ5XFbhRxE2ZxeYjMkhK8WiFc2uwBmvCutrHi8efLcQTiwTc9Dwu59keQNnq6STkKKACiSksCsVpgy",
  "key2": "2EZXQRTk4Rqb1vFU238KA4nDHK4gSm8WtzR7WinEQixn32jZDYxyi3HxNyFTqqgjbzoAeFaVceYQ2aiF2nfgwfkF",
  "key3": "2xeY2VcRysWrqbdrQBnUinPynegbaLL7K9bXrsx7LX5BWb3pR9UshgJsLYoi3wsgytG1Hu6Bdq2KkH4SEiThzRpQ",
  "key4": "62QcZeTgR4uyxZr7p4p74wR245nwTisF9npi6bGULYQoZjTjtdxCHRvRUdzNVBK9YtntXucWPYprNfY3fFF4rmby",
  "key5": "3LQx7DfkKVfA9miu2VRc7uuVJgM7EagbakM1ewTMrDtrFGGJy8htjqoWnu7spArcQ47DYLy7evxnjRJJLozbbhgA",
  "key6": "28kk7r5WzyX2EoKaug77tUinDCQi6VbsmThAV12nkYUqCmkBG1SKvRPXAVpiMw6UA9BYLzZAeswsk6rStL18YMHW",
  "key7": "4oJLEZJujovRs4irNUiPG1X51EToigsVdbg4KNhbcVemUp1ukhdfRpx4DwvkuKU9UaEh8ELZuwJtrhQFte8p45cQ",
  "key8": "4sdfVn8gzTX9MvBTTPxw1nZ6k7yhJSzrygp8Lai5VwVNeSdyqPKCbMf9SRqXzwk92o6iUVNrKpCs6PXgZihoosfV",
  "key9": "xbKrJueEnV9uvYDiiwb5n35TfSpoq2PCwcemmMR8KsiZ3z4SBEYNUzqPuLdGC2AusBwMoFDQjA5y6rBJMF3FWS8",
  "key10": "4qjjbytK72xeMceD2qdN55xDg2RGFNpqp86QUBBRJQWB76KcvdoFR1srrpf18m5GQwMKExGayWM8Jvmz13nrKvs6",
  "key11": "gWCRwyAHeSuwxuSnEieGG4JvAgNPKJyZRxwAYE8T9tFxtRU8n79SyRQBJcj5DsxdTWxGzoQGPjmE8zaF5crWb3i",
  "key12": "2E1TDyrsdYxEhcg2wzz54AZz7mxh3z11tSFryLvXUrT6ejaUhdP4H7kXkuWwVcV5Kz9YnvtjMoL8AkpMEajBKLgm",
  "key13": "67M6bNKAb4pnS7jH7f9qx6QuAyh6TSRWKZdh44zGA3Y7FoLwA2aKndm4rtieHEMNzFBMBHte1XEjSL3rABxSXVoa",
  "key14": "4ZyTqfjfdsY3UXzfWUKoqTbHFSRUpQj3jKktdeXw6C2LVZCd4sihswouUCh6ecNwqcqGQQ7KXL1pM92aZFr7smtp",
  "key15": "3HdCZa6zaDMNAarRoFqvMQccWxpqojpfGfz2wixTtyQGD8uaQoLd39Re3xJo4HtZZLeuxRvb15xhX2r28p5czNRG",
  "key16": "5RcJDNa2PgSfMa7RNGrRpwtXL2f8xjUaGUxci2qViV8DqpJPNXaC9xjKVpMvY1C3ACS8wWbRLRSDTWvrb2QETb4n",
  "key17": "m63YaPhUYwMEQ7gEcHcarLuWaG5BrpKThkP7XxYirsXYguA5b7pszBuRRuBAXHMwuf9pW6GbXZY65oRwCMmpFPd",
  "key18": "3NPTEubbckP3AUsHQCygGPC8iG11U6GdFSmnAcNqVnKzLsJBKoYhadNftJFEJp2pCrAsqK5X5kVpQ9kWxtjhcAer",
  "key19": "5PcaBCMSuP7fLptJNtAVVHVJiK9EnRjQuWAps553grMQWa2BvBmzSmeJXRZRKPSRz1CAJWLzh1ZUfbwbmjr4BFti",
  "key20": "284NSCyj95ArcKRTqNtR2oJKJca5AUeQmwuvScf4iht422deDpa4EB8QaVM9MN6RxzzzrPZ8HjjNq2F7CD3MzNmA",
  "key21": "3eFkDzeignQr3QYZMyiumK9mBx947scjgkBYcPMeSUVvw9KtopG1kDcaXecprg4ETxZdi3SX5xWmh4EYz6GRjUGE",
  "key22": "3igVZEp7WwtJGcyaVGM3AdvZauMSr9kAs5x2Y2tNaHRk1gWz69FLdrvoqx5jLesgoMzj66iaTS9XSf85ZopkY1oP",
  "key23": "5F3HCZm99wFPS8m35WV6TBaMVMEsGSWMTD6cpPaxdRsZK8smNdedgfVY2ykzpqvVWRLZvjGNVEV4fQUA9yP2gQeh",
  "key24": "2E26iZcX7xdUSQgfUgUPoFmXWoeRLHhgTtceNHKD4wnAVxgGmHJTuFwhpsVFpRLwraeAm5SpctZM3UpgYMEpJNru",
  "key25": "4EjeMZvdzu3tdWCqejoqWNDt65QCpG8qE6xyXiZTf4LzPZQQivsTunEqxG4AnM5UMfUw6EXULs8qesdbPcs2fi3y",
  "key26": "2m1uPZndtTMvL8VZ8gk4iNADSgyCMvDhSpaF6F8xon3ZvQYZ77HTCrSwvz7DbBLNZWjd7Bpw5rKPpAmqos4wvgaA",
  "key27": "3sUpBNi7h2ZHwKPFrFCiTUF4gzoimcvfQ55cg6GfdxyMxbJyYs2ZoiZs39bB9YWgjgaSUVwAQnkfJoJdExCF98Xf",
  "key28": "5F2H7wpgfD2ruW2vaaWLJDPESao2Pa75nVQ7zW7i8jEoLKYFBFGunqRKXTvZSn1VCAFu9qD7D9jvNCAQZNe96WHz",
  "key29": "WRhRMFM4Pb8nhjPASQhePbYeXXyaDopggLvonRQHki8gWRqV8ekkVpWJWhqgvvSX76X11dVuPJmBsaCGiWAn5c9",
  "key30": "5hEG7AvAATLd7GYm8m8wx6CxLMsyAcDtMCT2Ws9JmUryYid4VXbsBP7WpUJJTtZ5JUfuSmQqa2j9GcZ6HHXiqXYv",
  "key31": "2hwRtnvbgispKNFLsYvJL6EhUe2JoiQFYG7SLWKDNAQg7TYmgDXi2774mTS98pBPeP1svL3GWRTZuFrcrdLZAuD3",
  "key32": "BGNsZCPYYjKJrka388L4gWcBmNTuH5WpiuF3FUEXEhcPxSoyH9dE8CRKmJza4ndzQ3zM9Tua98h8xgfBQvSKyzt",
  "key33": "41NRSoaWbfqxw348s3jPzPgRDfvp5cTFJW32NjdZ6nDcNchg6WfeLtcPFmhixxUBqBTcpvuVq1ZXcpLHfqSwNKzq",
  "key34": "5bF5cTeQMi38JrjsX2K64ZE3mGz4QjfiApoMrmgTpKCoedEwyfpM6ciKE7BUz5kxNif9TFwRtFyKqTQ88wn8xPXM",
  "key35": "3Bf7ruZhGoS4QQLESVT2jNAuwihLPz6VjDeWNWBSxPRDorcfr1ajQJ2Si2ybQq6kdToGfhxtFrdZiFqdV1wyHyKb",
  "key36": "2roytaQ2op3kaC9koDDwsPGzfxBZgw7SaGGq5BBFriVP3Dqy3oWdoirMATAWt7ij4sPugmZdc6iTPgB1sjD1r46j",
  "key37": "2bwDVarfodnJ4K8EYz66c5GRzsskpVRGCQJnNKT16mLWeV7B7ZdTEGXHBCdYRLD7Mjado1UUje9c5z8WjXEB1kNm",
  "key38": "5dtguK2CSjpD61bDpKQcQga8KdGbxaxW2Sf2uEAZRaCcGmVzkuHQjduRgib4wKLxYjJbUW1k2e1wZv7acwM8sZYR",
  "key39": "Xgw5s3gYN3xmZbkUHg1MuKHF3KNGddRcXqZvmjGwsYBHpWZWuGL3KdaCijgJjBzJ6KDFngzYGJBrScJTXv3YQvY",
  "key40": "5APNM7qCh6Myx4iDX5PjKxV4BmLFn4zegcr8PdaKip8yXAmQ3jqty7jijPTJvE8pjaj1virNShFg9khDtBWpebe7",
  "key41": "2237D2T5qEE3t2o2fTv8QWKVNUJSpu2LSKyKJRP7vcSvJqRThhhBbUi26p8JFHHBUcSUa2wLD1qPCa6oxQ1pxHdf",
  "key42": "56TgmZZ6LvJzB2yh68hP9fPSeuDvmjo7uhmWQZHVoYTLiKX3awTbtvDpNrH1Kk8goETGkWq3WRLe2BJTiidQ4QZu"
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
