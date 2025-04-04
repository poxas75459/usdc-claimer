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
    "2fjhTLgCUrYFdqzpvxNNcgAhuZAa4gg3USCypLd4MrU72ghxqJqf9eNDeBkrSS6jSUGodzQNQP5h3jRjHPutaEUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXQ7qAbuKo65Pa7Q9B9VDsh63wdskopaxAjHu7WeSYvMkT4UgFQrJNEFvW4kV3AScbSdPHTGoq7P9HxJGdQxRVD",
  "key1": "64JcreysijSVGupyVbAHg97v7gLRd5jy87juiWrhgz7nYSaSeNj5HA81tPvruE5Zc8rFnBJndysd8sxHkWtrYVhv",
  "key2": "B6RQpG2byb4cCqSQaRkbKygRwPGomcsMGvuLjpMVhsrm5rKBvMFvZHqAXY14WjfM4jBhPXzkKACKi7LWvWRgQ3V",
  "key3": "4v4A1GyfmnQFQfY6SkGp8a8FKn8sYed9rX6jrB3yp7wccTjkrPLqFd4frQNwuCVhMjkVNYjeTF97QswiQSuaZ1EV",
  "key4": "bWfctBZoaLFxzu7asJi7dhTDY36tL1BA2N9q5ikz9CSA8j1tJFuzn2CVgFeyxWXaaip8am7ffJ3efsbfpvVs7Wh",
  "key5": "4R7eMUvoc5NyhLEMFEFzsyBRXmTwub2bxQF42NmXuehGRuoQnjFRbFPCL6kkM9w69yP644edtNPeRtURJQtDUeSU",
  "key6": "XPg1RxhumAGgHVxddW7DSjjqt4hsiyvFpX3s1KG5ayQqNsXRHkb4f4sEixayzmGJR4vfi1DNm1rbRC8ps2PHwZ4",
  "key7": "Skj644Mz4WFQ53Sx6ZTziwb2wDzHuLy21taXUnwSLxdsFFh4w56XxRs3h4oM2BQyfnadb1x16qZctrvU6YaSDF6",
  "key8": "MFynvD7hnUqGyHuAhpAeSXhXMxC6ZQTTDKDWmToheAWDbusUuyb92f6DKnZRNF9ZhFyx476vNyQanBypptsNYmH",
  "key9": "3hBRZTDnJVPQT1oFew56w48RF93EXjU3nz1oj6oWXnUuKLHdJSPrs17XjoUx3xWiFs2SLECJVKtjLSwV28cDP4rA",
  "key10": "Bs74ezxncjaKGMVUrxwu6hw5aFTtt2woj8SaRcWMfmv4qnWnW1XhU5WpzgJmkwf67iyVgWa4eYcbwppRTmpjhc5",
  "key11": "5e9cvfmi3JAmgdtci8hpK6MGkeSqLYRtGHzQP6xacPALQtH5MauZY6mBhQSXguTHckSb4c15vXsawiqoxfeZnS39",
  "key12": "63M9M8KQAoJEvdxarGTcGFWLNdgEyg8uV41uhEbVqTc2PxDCkezz9yhcD1EUuu1C4p5KDuqijWYrk8TaibL6sWod",
  "key13": "2QqVed3SYTm9gGbBP2acFH4SUCE8yt2FP7fiyLb73K4ZrJx3mUEqPxpsZpRTkeEUktw4JaugDt1iwGAG144ztRXM",
  "key14": "3TK2AuDv5m7eDnvmuLAJMmUUtVT78aHZg3p9dXGCmSQWAZsNkpf6as46nYDYNLNcFnuDuQkUtS4RhUy7TbdvDZb1",
  "key15": "5YWQdQQb8g7LorfMBRD5khZYzZEtKzRioSir34Af6a1T2uw3PmcHv3KGDRnp2GMUNf1vYW4zQ5rdeRciTZq3g1m4",
  "key16": "zu8UQerPUAU6v4H62KeKMFnzmdSLwrfNaHCLjfLagLinPFT2JUctpKHBHAdByXsBk3uGtAiF6wT3YJfRroWTYq4",
  "key17": "sLPPM4nM2Hx7ZeXNZvgNVKoP6194HB41ihmYkppYnCjLfd1XBM3e4SBz97MMAbguFqdK2fXQPuZGDCdB7HRDWAc",
  "key18": "2PkvEg3YNsigVaHXaPFG642se2pw7dGXF4hPSDoGGRbzmJEAsAzs5NAs3zTXAZ4qkJDFYKrnTsPckGbwYwkTYFSe",
  "key19": "3kgcALm9b1Dt7q6cENtQ1dks5tQ6WQcADV6TNehz2b7ErddEGKZi3bCtPtU9cRQQ2PvitYK3Q5XuWx4a5RfAXfSZ",
  "key20": "3MYNEfRDXmjwNRsDQ8EvWxvbnEYpp7fttbRkLqg2JFmGk7TBTFaLvbjTMZ7TkVFCYUXAeeyJDoLHLLoKZzHa1b4P",
  "key21": "22bBRxcYxZ6wFh56dotp2HWG8QLLxUh9C193qCspCPEzKGUxTwx6Nqxi1NHfKBGFk1FyNhoWmu9yRKA6y5R8ebrQ",
  "key22": "3MxmcYuSgNqvhUEhxLK9gQvhfYTdp3TBuzELwShusBEDa1mvQwMhsoQoEMi8fe2yjYHwHU1CfHmQTEL5VEyd7JHr",
  "key23": "4bxDjBrCdYUvCv2K1tMnEdjyTw42AcgqAHoE65ZmKwUhiCZ5tjUMvPXJCb7orQRHKw2UwhKNtgz8wRQ6FqxiB5Sh",
  "key24": "55oCSfyVcyGnmdVPjpGEDGgLTd6YWDwKGZtUPPT29aGy19pdPFZGdEvwbX7BHtE2wzzgJ2KFCgn7fgsmWbZeP1FL",
  "key25": "24xX82gavV6Rwgwr8R7RRMq3d3jCt8mWVewJuMRNWLVMYeVnzJJwmQjsPKF9uwEWMsMLajWLxsw5nAcj1uUaQrA3",
  "key26": "368bWieqSsWVEqh96VzaquL6fDHCWwhfMhpaHvpxjSv31E6peiXWqfkQwKcG7gwrEvz8qmjuQeEUNrQr3jWZ4vDZ",
  "key27": "3QqAGkQnXUXv8FoXWABMiAxubRstU1FzhcHf93ryeeLF8VESfwWstdgthcZATkMWDa25cKqbQQHkDZMDEVXT66VK",
  "key28": "2hxiZUqfELnDCCC3ECJijBfwqJZXgfhaDq7HPdCvxXYnFaQ1oNkmdsjkgyr3pWAByZmEfWvzBQRhFbtzTQhizE8J",
  "key29": "3JDARQTvwzrbuXZ1hgME2YmFA54R5Mfe2vCLHGQvXMGfHFiHLNA8CDQvFHJ4VVFRsfXPw964YrKW3isNo63GENZX",
  "key30": "2VvEhzm2beHBPhNSaWbRJbF8FgkLcLogeFt54Rex8PNQJszMq3Jixi2qWtWhPcEfFpKriNH5bJ6aU7aivm1AyLnY",
  "key31": "3D8iMptBeqtVgtckk1PCxUUCsfUCtkQoh1ywqAwJ98mJxVDvNpvNtTrh45VS3FwdUwCs8WD1xQpSFAfjNscwcPwh",
  "key32": "5Lgu2bR7omdU5BRWasZQsCVpXVboEthnZGEfvbStTEMVhYjP3THkh4bpNGdREQoYSxpFbttGypx1cMrPVJSokrrj",
  "key33": "61GfCpZtdXQFUBZK9hSRvqeXH3GKrtUK6yGw9TbzGAfN8yLNVK8LGQ9V6aovgAcnKZjc8Qvq8em7hdpbBtj9W9Yb",
  "key34": "5fMZdo2b1Nu17d1a6d3h8f72iarutWs5dmG5hnu68XCWNi8suvRUMqnA9e88Nfo5UYGQpSM9TPiAGhQBMGZwB7HU",
  "key35": "4gmN8stCLxPcAuRpTXdj7LnzC1mDztbe1ySH4yP7yjjrudxEbowPx2vrNkiihd7aUD8m5xJTkECfvawBpAj6MrBd",
  "key36": "2wcsD2bEKq4xBQnw3eed161rhDuushZNwtgYNfn47e6v51uWSxAYj6LmKNT5V8MWnkjf2poqqZf8NiDg1texKwf2",
  "key37": "2yKKtKYaKxjjG1FVL56pqqGoAXn58kBN1Te5FFPjnUak1bvVviwPpRomSjsQV4zQLMkjL5XHoJGTsoCv1HyoauZr",
  "key38": "5L4jiviXcqnGdUiajYUxez6tTWem78ojyevMnL3fhV8D8mcoFuY3Sb6nhzXqw8tzAk5F1QY1dFLcd259mkqyJsyt",
  "key39": "5kHLpdNoargnDcC1SuZ436RCDagE5r9jNkvFUvoNTD6qx8YSRSHunM8JqrEdX5Gay9ddYQykYiPiJ1uEnQmFNjVS",
  "key40": "4iEPSYQVhhLWFRnW3miC3F4XBy81BTYR9gZkuZwtyfTAT5qwZFCnwwFnfAE2xsfk9BfQVaRkQa4kujT6VTvvr9Ko",
  "key41": "2cCSnP65PHyDuzsJs79padoFK1qykuWDZvLPU3uaVtwJXnNQ6bLGmnJMQ6bQPRXpuyUFioLhtKeyTrA7QUymNJih",
  "key42": "4UwY2317Eq74u43E4Fdk3zXnNG5RpXcevkWQJQq7UpT6jqZooQbQxNakFadLoZBbbsGvzSgxGKLJETxnN1sEjdwq",
  "key43": "2xwDY2C8DczvnwB14RzmB587WLWmcsmCNkLoxggeQ27pEWMskMXvABnyJ6gyEHw6xVLq8PMP3L3V13KYsZqhWkfn",
  "key44": "53hTS3KNQFLaXcJUh3fW3v8N9EQtvWJXdU6MN21k7qiwYxWqcR6WsQYNMBBtgin3QiPZjhxBH4zcvMHzsNco5XDm",
  "key45": "55d3STJHg3ac9YxPoSxoySUzww3HKMgvAH3vBgRbhewTm2sttAnXuKCazJzAmmMrnjwocRq7M9RDngMy19L7qeSh"
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
