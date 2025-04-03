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
    "5dobwDzGg2uAyS8nnaHxXavS96wir8SCakTcdpxdcNn38LvfefFhN8cY8GmfsafkTBWY935LQ51hn4mz2AiChkxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7fo7pAXocgiaL4nFucbf7WcP2tTd5HPn7w7WEa54LmjySLrE9JSZYJC7YJ7FJMLfzSu4ziehvsR5PVJ5i8h1Ei",
  "key1": "3j4gmLL828BpSSv7WhpBw7yeiHef8NceS6vSspgANjsKmcVyDF8i9VHvawEqAPcbXitv12w6XU64zdJ8onMhbS65",
  "key2": "5GtMBxP5bNxEjizerJ9xdM6pNQfycGKvvS9faMagsZXX4aZWBu7JL7TBVgtGEtN7K6shqd7z1oRfQmqihjGUqFtC",
  "key3": "gCLsYAViDfqrcWNw3teCKYAnQc5Pq1b6DxTYEm8C1MSgsJfjufFettFB8uyfSXCayiuyHxW2VcRbS71RT2pM2yt",
  "key4": "3hE9BZKK9LqGq1HXJuLt9zf6cpz2MzJRKuvwanTvhxXNo4gnwdckvfVgWQe8Mug1fx2ywJZmBmyMQHSewM6rYnLT",
  "key5": "21quTX8FuJyBr5GNTEvCabMV8ZYrB6sQN7iy7tNRXkVAgsKPjBLoNUtMYrFHhaGktEdBcqFcFvMSQQ7eHYo4ivx7",
  "key6": "4MQCp3L6PvGYon63BMkHWo7bFX5DBFxCWGnt2FPvE7JnavbMCAWNPWnFkGwD7n6emao6tNkJm4CE9bPCpubeTkMp",
  "key7": "2MWF9uX3BbnWjeN2W1tpMeTzm61qUXRMovsYgkpx2Pdc2D8Uo4ih9oBscK3dvu3EGhMGx3LoQvNPgNbsapVV71iQ",
  "key8": "59qkNeniPUGkywEvbXxsYruAEw3RZeQRNCw4QkDTFppQBB4DT8taTnKADGr4HfksJBhgM9FCF79xLs5K7aVaXtUJ",
  "key9": "2hFpCLpPuRMvYDThnQTQ2kHsHP3Tvvx9QG2UJu2QEa7Z8f6W6G2pq4sNEvSYyJYG9agmyPMHZxL4Qa61fZXk9GZZ",
  "key10": "2dWTTLC29Mp5M2CXwWxJVdGqMyJtoN7SnoQkhdFKoAegySup3kxWndPEUcGBztqthkgQj4YBf1DTYy7A6GfsHb1U",
  "key11": "4jgC1ZBV9HH9Xyq7jnEijtSv1bYW7MKQTS2p6gWijbXEbvAk3indq4WST5AFxFPffrfExG2eMxVhuWQALFr3DxkF",
  "key12": "2jqjhHqAnkn4VQnuZwGyZZJhPqY5p6HFqhd4Tv6Ak73ntRJBggHGy7oVbTkCirE4saAYzgjM6WKgBizRJJzvNMpi",
  "key13": "NkKo8uuTsXM1Stu19te4cUdsnsMEXtLYS7baCxYyiWjLGku3T6sAXydRBVBru7pgaCvSzmMD53AHWFnCi4K1ZMW",
  "key14": "4AjnWrKr3ptrKkDSj4PS8KJRTE7pX93QafdHALPM1ZjioqnS5VioJSoBDEzSWGFbd99NjydaD3CNBGkvUQeU44mU",
  "key15": "23tKqs8ivQu4WdCfZ3S5RBefWnzu1EixmUPEQxnSTRfQRYA3DXi8QfzuTj3RZqsrzuuArpA6GGdcbK5GCHD5Fi12",
  "key16": "Gq1aTZrj3Va2M2dqpsQvT3hgBuj1ojr8vxQ4wwBmr3V7khqr4a6Z9bRND4mrQJZDprh8d8HU8TX2G8RUwoyfRE4",
  "key17": "2TDLNAwLDpVyapspuhFy3jwiMqBYriK6KY9zuwmw5iwMorTPCwamrtKnQYwkxv1JQNv5x8okodsHLhSiem2xqNJT",
  "key18": "2ig3Z27pYPPcE17i3qWdPC3Hc9VNc5zgAqphJHfUJrZ5ovMt8pq9Q4V5MVLghcN4nxv97XR7f5Apw9KHMJRxYrMC",
  "key19": "4pMzhXhgUmNf2kHbA6LL7XGCbyWoHc1Lmaobpubij3v5TQb6zeqQJPUDVGUVELB5KHNzFgZbMhAtevrHQDjzgvwU",
  "key20": "2f7pecZEgHgi1bqbUpnEueypNqxQLPNxcKnsnNbcZSGzqVQ3uL4RvJfyt7CxboYtB3cCVTmN9Xz93bcAxxeoBsDt",
  "key21": "63gBxoQCgtKin4PzNJwjxJj8h9tXTBpzWU37KZ4EvT9M3ghBJKivbBoEDfcYht7WMDY1e6wq44jeKAnFT48hZ2j7",
  "key22": "3aV3cKw2TwnuNk6v4EijweUx9rrcnPCLDPVjWokkuCgvzKDyRg47LR6i3yJMMUxZxnpuuppWJ3sXdLJZmu9jmy6W",
  "key23": "4tThDx9XS4jc5d3JGAyQjqv36fWoBQbHjUsGCHCs3NWreWLhn5xV7hrbTbuXk4gz97qCFKMrDj4wrMgVF1ZpcCCP",
  "key24": "5VqarqmKEpacmgRmd4x6E4TCEj7Ex3neVFnBuqwiTCWuAnZ1z17NYuHGWnJ4afx7y7rB3pZ8Bhs3KaKoHbceA6AD",
  "key25": "4SSGdjfEDgyzT5RTc6i3DssSMbb5K3kQLXzwzgJzqoPLJHogYhGq2kRRKtHL9YiWyteyGdSk1N39DgFmdyB6R8ut",
  "key26": "4fLTzQFF3yPVW2ppJspKje9vF9oGx3zvPKjcH3EwqB5PM373neUxyBJttCSMrsnPZ1pbQ9DwCCd2kd4BErEqbAuh",
  "key27": "4KxNXFrAEuCdAn936B4dPMp9eRtzfVoUM54dEf56enKqQjF9nRCJU5mrR9PmHEzqtPAUVoLSgLD8Qbke3YgFJcuP",
  "key28": "3AzdFtybNxvJVZooYNNhtWCtQg9it4hxn7ccd5kseL2nhx3L3HSFAuiYGW3K9P7ZuqdX552CPuKAPU6aPnhjnbFo",
  "key29": "38DVvpVXrDJpxSBY5piEduNxLVGCqHskgC7KXZC9n4oHvRTbUPVZMyquzojnuK6PJpx2KVAwdZJn1yszmMDS5kEo",
  "key30": "366P1Fg545uuuFFE5PgyNSz6fqpnSnLyHwMVHBL6WwQARdVs3HXaMCeDbCi38i7zQHKxzjZ3fMxXwSuBRLYCqiiH",
  "key31": "5N9jWnn3GyrmvjVqMUGhNaqPxx19evkYTmRsy2ADHHibuuvnymxdAJNhARbsiyDfnrrVakHU5hNoS2KiHNyRbvJ5",
  "key32": "Ys7KWyfeuV6baTcqfje65RYAQAX2w4GMyXxYSCaYpUgfw8Thok7j7kXmZYhrCfTkMjJHxgLE6GwCfM4SMTKASDf",
  "key33": "miX5txHeRXVpvzGGcieTvqmgaRm9urf5Q5UkKUq4h3RZoQVU5uefRTrZDJgDHtzimMb1aQFhQKEkB3HzKq98MdC",
  "key34": "4zXj22jSo5Ch8kFYvZhe68KG6LRhrDtrXXR9HNnbXeao8EwuWha7FrhjVc2HghYhHzoLyUdNYkNZ5pseSa8mr5DC",
  "key35": "5uViNEy6LsqP8YaBgh485ryfwoVKFXp5th9oTcL7NX5zjUJsiUcX1wc5MZkH4Ej2rFKAdCbMsJvmUbu6vXgKcRH3",
  "key36": "4Rj5Y7wxE9eKLjgqA2bGamoAjcT4inyxT4outdyhh7rhBmLGm7qoGE3Gh8F2cgmHpsYqwA5T48hMiiaNMgVwgqed",
  "key37": "3kvFUQJ8ChivwXqKXJrrPWUTdczzcjTSC9ZqCSFKNpawgR8CchJwfXdXnSCu9aVu3osWfprtvgtYW6rkGJzMfyJt",
  "key38": "2Ryfb4pK2SPrSHmXfp3g6A4fJ6uYZU5dVwyFEtRjk4duHuqiii56aEuVHsCNnSyLs1GnQbnfkxDqjc4AdJUzUab1",
  "key39": "4L5cEZFvyxK4SYqDTsnqRrCEDPgF6ewdBTwU5ryK9CnvYwLYtG2YrocnbR85hjnLCUk5pFPSk6QnpuuRA3oCtjGT",
  "key40": "3qSChot8uxjfTCpuaGWBY2xVUdLcVxwHEFGfH1bWCi9ZVEFFg8Cj4Hj8vprUX685VLHzMDdASvR4fAkzw6dFc9dw",
  "key41": "34stAokXtTsB3AnVxGYdFvex8Q59iem4soX2E21A4xeY5mYw1oZgy2852qppCR41jy8Kz1Enix16f4DQK4bHSMmQ",
  "key42": "2YuSHWXpdQxgZXgFydAw6cw1aW9FJiWtPfqfyEzui9Fm6jMwgtvx8cCmeAZdnJMTGuLsmvYFjETFtXXjgrN52T6w",
  "key43": "2n97fUAuLGHS3uxRXfHK7eezPDMxoA7AmurCPoQSoNYCECRPXpXLiawinqZ91mi3b4GJkmFtLx9KqGTQn9ieK8pW",
  "key44": "5hG7vdo9A1kJVCkZTVxmEWGMDmEqkKXdzNh592yEfC5q5DP4TfQA5JrWKYgZNSvhYh4NiqWmjFBqwk184UXmgjxy"
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
