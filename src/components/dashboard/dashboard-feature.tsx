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
    "dqUiDk9Re6o3BwSMtizTuBD29n5nXHvXhYC1PPLCRGoagXK9TFZZtBpAqfhMKdrAFucR5JE4jMBqShi67dYw88E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cicfak8oAxUgHZAcuTgFzuH6unPEVHxijnhbt6bVYS6N1MFTwmC956bpxL9qPfMdQdbe9rXyAWaYXRmcqwCYiMc",
  "key1": "3rFbTpFE6z3AeVcxkUDsikZVDHmuY9mFvUjL2e9218g1RLHsWVB34ffuMxfzfmiU3pTqmkzjH4YNydsEvqEBo8y1",
  "key2": "4cSTWNhfTmT32PgZytA28hgHmxsmrTfGBt5Vud3rBBeiSYQYWQVu6K8Z2hF32rF4v8JnLhR7pGhnUKCqXEMDbSQt",
  "key3": "4Q3WutoPmx4twuJL1Dj8fisbKxpX5Vdj8xaGat5zGGjKV2CooffrxHtSYzCFcK7YJPmSLrNkBbgK4hxJfmb45LcB",
  "key4": "5w78f4i1YVe1gKoz74vHpZAxbGcd7TicA75CUQSV3uJwaC23GYWEck51gF3m269gafMV9TqJEPb6taULvXzgRxFp",
  "key5": "63bXtYcafNT8RVmCowP3Pa6GwmxaYLXzg3LrXWF8T2PUPm3hXyAT9mWR7KhvXrWUy1BcGgr11Zc19hQQEmx3JemZ",
  "key6": "43jrQ72w7LUP9qTsU7NFcB1ueLYKRAhmmAWCh4rxNAg2Vz3rRYVb8BHQcExuNW5ZAMzPNh2r2rK7y8GRCXs2GFS5",
  "key7": "gRPzHo5GGUydVDHwkyBRkVdwtdtbRmN3RvgZKrfGQ2XuNsVUbtkzDbuJSnyxALLLBKrCFhRew4GGQPmzn8obTMX",
  "key8": "WjR5WdJeE2VA4sKimbSR4reRNLD5ibTRcpemgTK6mE2GUJ9dFH7uzn6fW9mHbRMGpb8gMAJLQ8xXUFj2RmPBJnv",
  "key9": "64NpaU4CQs5vwki2nu7EUzaW2Fb1BESQykguf5pcLe4XCsGKE6sWuo99PUBAGRxMH9bKzJA8k2RxGAGywR3Ab4v2",
  "key10": "2EkfhjuAfdLxSdLxBpbqBHcRGbwJuhpTaRytFXAqRHo3n6dzZAqFigan2DgjYMX7KFCkzoC859D31F8dQM5PYY5H",
  "key11": "4UCQkbuZBKSjjx2sRwB97GBiTRsbmzfjsxGkwnDtwLHSS4Y7dv5ESDXZXwSkPiUAe238o2iVM9WurG2W5UJJpa7E",
  "key12": "hgSfu1Wdp7Kn5BaueMQDZFZrCuqRkuZgrRVQE9Nqn5bPWimyH5Y1tJftAcJYgHN8aSGxmuqaN5rfAa7khVrHHkA",
  "key13": "4cDzdKYm3Mf3XvvG3tN4Q7D934b6xvvLJiKenENuCCZGYj8zPMhBNko3mgWgqEp89XXXu6BEqRZc4Nvd8zGNwHKm",
  "key14": "5sf9LVtLZ2xqpWCyKsomXrvy4qiUL4XNdsZaRUSEnofbf5vVgkTdRaDBbvsptm1uVRvy5PgQaZ86oUxkLL6Kudb3",
  "key15": "3PfzBRvYoRMEatHyRXejkZpCtM4Ahk8WqtmjodsU6EaPhbEPLRzYvzSgaWFA6Ggnq7PBvZ7yZovaPivJEWVPtxnq",
  "key16": "5fYRmQZFEqa5psDJrE8Grb43zrbWaf65Fqxzjt62MsEGZucH5psJvgtC81WkTS2GuJZoPUKPG1uuCs9Z9acvTsT",
  "key17": "hvw13gi1onaFk8uJ7g7ATDqdsXaynSeTViTmrpx5z58afeou4VSg9HVSGD4BvZKKq5mfKTdVhKnMxSgzvSkEXhZ",
  "key18": "5qtwu9mTFVBdLMaxWgVNqKwdJ3bpLPMMd2ZdpozDZDFH6edvFTUBFV9c9zS1twddaqq1XzEiX7VSU9Gvs5a447Jv",
  "key19": "2m4JKduePLhNeYthXG3crhbCNKCPnwe9TXVCxLQ3DUAqL9i3bD8zZKL7VHVozvnrBQ5XrbBRpW6376MVZnk3Yxro",
  "key20": "CHiBPNaFdJ8PcfF7KgxdkiA79CRpAZjYF5cL7ReuhogjcrhrAc8MNDpZuNEop1uBw9817cWbu9e6ZsBjWSiHf3L",
  "key21": "g837gn8vYo97zHbe5SGuUYWhc9kDuM6wtm1AtsuB4HD6z2qKM2E7C6MCjXdMEbbBDXJ51oo85L1R7VwdLsoBNWg",
  "key22": "4aud5tMmjy4sSriJQG2XgUSZWv9L28cKuqbbckqJw5Fsce7SjS4s4ZiKUobofoE69vwDXTJXoouJR77NVRpX1rDf",
  "key23": "2VDQGi6tyb39cgAGtJ4SpNPtGVpf6uG2LhmzHAahPAc7BxR9edWmwvfxGrCwMPovHNamniNy6KdnS94Fw9QGA4yJ",
  "key24": "avBF9kYPw5kFyGphfm5d4C9oSYXJh1y8U4vhnYx6A8mgd5QTUhAffhvkEUQzuYxrXzJtkyAYoqY2g9e8qjvEMBx",
  "key25": "299dvnBUHaacSr86goGjUxWep9WyD9rwLax82jSzttgot8XpfEgZRq6NNf5Tu6jp9CvPcWcK2WoCnQi5ewzfxcFS",
  "key26": "2bL4WBZddNkWuPaKt9Hy18WqGFH277Ac4EqWYNc5dDxE56y1VhLJbUrZHkKnv6MPrEqKm7Ksr5CCaX6UmDtH8UH6",
  "key27": "3yjABd7FRf5HMky1tvsVAQmoma2ac2AD62v7zpnCtbp2xM7xzdhdLtnVDWoCqFBqSf5xgydxpnqPDJgiQFQofs3D",
  "key28": "5BTVkrjyyzwgtMcMpUEq2b7u3eQSocDE7kGkczTXjDdr3NZxjNk9QAWuAESEebRaMwHouPAJ5XCpMmzP9iQKxRGL",
  "key29": "41dEGo2faZu9RAq6qYRoxkziRmcSsWojV9PPdpAYAGYtDiNDEVE3P2Tym2EhhLhZZd3Ho3efyKHhZ2yCHFXiDfSu",
  "key30": "3se67q4A8gqFdfctXmRZKdipqmEQpFRwZv83zF8uLyiaz7GSRLGAngWKNP1oUgzzniPdwmNubWayqqu84upSwTF6",
  "key31": "65fPtAvqJHgDgGWf8QZGqxghtNKUBjtRzMiYyArUS9pLzBYHCyNGffhd69UsRCN9ghMW68VaVnghqvpmgXe6iU1j",
  "key32": "7iCnKFebhtW9timADkUCcYq539y2rdYEtRqQuAY1CUGrBNPG3PdNEHJuFdvrVUzpYdy4Dr83wYBovFZUbVLzHkr",
  "key33": "3XEY8qUiieKSNaEGMaGK64QmkELNqPCwBkP8gimjYvsbYkcgSFqKWS6RnDFaBCoTHHfewTPLtcW5r9rQYnQiVY2g",
  "key34": "5VYqmKVdwC3vPeBG1kx1sh4g1iN8fE7esBnT8SvZj3ATqBtoWv9bijXXj9BemyuuBuaZEKwmUmQztYqQS9mW65s6",
  "key35": "2xygKFR1Yv5P8ff83mZD99NLJ2BBRpKApdofvUgHh5iZhwjGjj4jkKFGTdoktcumvXMYQFg1JUHqsCNtrCR3ytPL",
  "key36": "2X7hv729Da6A6P4eFKaa6RRafAjfMvwFdKXLvYHKWbqsgzexGMWF8p7HqX8sxxQuC4HKw4r3isVCzcbKZKMtnoem",
  "key37": "4JUwT2BYgBwKzNKyVgVVBY8CVgks6UgBC7JMCwZp7Q2quwae5JeYj2BukBess4RtJH61MYz3i1Ab7fxNWDM3aNSC",
  "key38": "3KwYkjfVCF4CnErhU4cEX26dodhZfpq6Hd6YtVwVJedi8hrFx4a8QxcBjkjkvcYqxFk6NRBQ4StqFJavbCzutdPF",
  "key39": "61scwvZNtv7UvEbQ8ocbSoywsYLakR4h65ZkmtcAb4cbDYZJSH1BpFsJqa3RMGHXQ3YyVbtWHcGb4R9AMbrTyPZp",
  "key40": "5PcSb5bUBtCHLZioVbUsZz8HdZX1HnLwYkpQ7UThdrvpQuTvmBfB1sExp4LkmXvNx4MUuQonp4cSutE5ypFL8AAe",
  "key41": "5rTrC4PNLSXi25LskHbriVBBzwQukNd4yGEgpZJBMomY6nuaTGkxsCeH7XpNNNfJTRGJo8ZNzZL8tbscj2pxkfYW"
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
