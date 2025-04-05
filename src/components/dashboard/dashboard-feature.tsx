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
    "4NwUTG4LbTvxocp3vsUUoaZebTzvnwbvhUTNiZeHApo1enWQgX8PoN1MXft27LhdNusf36SWKsF4uKFzjt1rHFAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKoLo8S71QYhyp3i9E8syZmphXhduQZ8QSZiy4NQujJUv3kgHa5G2xvXWBFCGvaG2UxjjsJkp4zxY2h1wBbKZ6h",
  "key1": "2Z1ZrvwMg4yHDy1sBLfgR7jq93C2ut2SCFbHUAwi1U9osJ9bDSpgdHB38YdcNoyuSPrmMp5Mc9T7t5PFC6uBMW7J",
  "key2": "CRBWVqtRs7fxV2AzU326itiZsMpVNSHmMgoT3rQ4zEVKXVgftjKWwhq1kNPiyyFNWwoXGS8CsQtf5XWBubyDAGy",
  "key3": "5Z95Z3ZJTk9TRSxRKngdr7ZqjSZCscz1yk1z3mtPxL18bWAxeP5f7dSkn6FqxxyBXVD1treh7b6qiVCvzfKP6zF",
  "key4": "5L9QrquearqrBf1mijEfYy7KHU1uMoW7WnEtEqfSV1qd5uJ8yJu2jn1oB4RJ4smBzZNa6BqZYcVQ9QcdKeYtYsMc",
  "key5": "4eFCDiV94uqxhstzf6uJcyTgQWJUTUxHvqZLFYHkvJhBtkgiyTb24UT6vPZ5j88QBfMGEe3oE2iJyfye1e4i4YyA",
  "key6": "4KTWrF5x5F22EY5XK647jyvd1KprTKfnJyZN8Mw11GRL7nrMRnJBEgyX7BLWhEJNGjaAVAPtceDLjaBZcrKR5Lft",
  "key7": "HzmNXLr7eRQNqCUJRzMCF7QtpxXK29gPPUP6oz8JB39unJsZxfeDmGyhnNShBiT1QL1D9eYUVocdXyiPYk6DzYM",
  "key8": "2NNT3E1r3pb15C55wh5CPBdVscMaE1xSGkxa9yk4FubqL3yCLs3TX6cqecxdEpoTvKTn47WzmPXF9KJwqPAEHC5x",
  "key9": "5wi8n5W1HAPQGpo7SQTvYzmDehigPR867wJoBXZqVED1etJ8h6hvzxAXEa4mPRKjNd1QtkmoqfG7q1K149KDDFex",
  "key10": "2DYjw2DxS3f27E6xyUhTQSRWid5krRy9AkrERhxEXCUkrDNqyrpTkqL2qNevKRHya7pZw2DT6BJhWCwn278kaKba",
  "key11": "2cmXdc9dDNFuHH3PQHLzbbVheEeGrDuMwfX1n1fTxkQ638KkRfVY93H91Xd5BL6QtnHtfLnrkvLLk2efw1ng2uMB",
  "key12": "34eVcasoWHkgPXtYdnaFu7nRBV4vuVA2YUfz72e2xH5tQ4NyJUcmSK5uneutQ4VwgZhZDejUwJ6UaHjfjn9Ng27w",
  "key13": "3t71JuMV9cc3CPFyPAGHJNRQ154PXpqk7ZGTbHuLSVQELwrpKwUtRRbcRA2nZuDfnvJFpV34zvED1gZWA8AAzpuY",
  "key14": "HLhwqSN8AxqvUm2fPfH1BjUGwHyJzCk8LLiUjWPaVj7pqfCWTMhw3PkSFpRV1CcDyuJyou5fG8pS7DzDPaPavDe",
  "key15": "3dmFV1WAc3ePrLxVrL52XTb2T9iZrqhydXwAdDpmNaKsWzUv24qJuL8zSpKiRAQUEU9wFxLErVpA7u3t2ujLY7wA",
  "key16": "2s5nKpVzc85wg2Cj4CebHjZcYE1oJpXuapDDXrphFNrgSuR5zrD5q4uyMggGkvu1xQG39mb5AgYHxcRhDjuYcxk5",
  "key17": "rggjJNoc4UK7ynkmwVhH3BvhxYjAG7CpnLi7oDHhRxKnq3SHejUibbHsVbSwtTcqnoRJcKnYTTsqp1ZcyJZDXHM",
  "key18": "5huS7P6eEZpw6zJiWrLv3daGvrmWvY5EWumjC9fanS8UVMkX3VfjtPmfGZKM6pG1S38namKxzTfZoqyYdRaHgFNL",
  "key19": "4b5cQeqWW3w5HJXefWoPsGXUhyd9xEF9GpUSQfQcQLtFaZ7tja3wRLtzqoJAZ9sN1rd9AHHqf38jG9ErCfYkgjxk",
  "key20": "5Bt49Rf1LBbeJrqiXriBWyruKcZJyQ9SUDLA8jhpCae4Pw2Axfu7K4xtUxqDQb3zusBLhP8WQWo2QkGeF7jgxxL5",
  "key21": "2zZbJ96DzZhY63wy3PA79CQKERSYBcdiSmVdnX4D2MUb6CSdtn8Tx1knKYKUvEHXsFFR8upoSs67ksGsJP2eyDTP",
  "key22": "2T22eDs7hD25kvpHvo28r388Gjfh99yu7YjmqRXqxWuWna5ramMbeDwqFMhptsDDh2ngquW3GTNyARDuKc8AKdi8",
  "key23": "egxkbtRRrRDr2cWRn8kMpkk6g6MDfA4WU1vnhUFErZ8UkXEG2Uevx5Fj8ynTXVyJ2g3kfKjQDga6epbrydMaXSV",
  "key24": "5UVH5swTa8czvwNZRLAVwJwDN48taj4Qn7epdbUrCYKeD6WUboct9q97wJHdsHsEEMqRNr7GYUJugHGpnjJfhpb6",
  "key25": "3bgF9EotUbNLbFx3MS1Z1eAhaLKXdTchZGXjzTnqrSyTpKwTU57ms1iDBvyrJSDTvYhCQT7FB9dz1woLCFnamT9x",
  "key26": "ERBxwJNu6Mn4rY5WGapEr7YjnUY1o857CL3m7o6xe4wvmekXN7QhoeuoTCDoYmzZbKfJUR8vrYkiLvTsjFR9rf6",
  "key27": "2BgyUQ2Vtm4VYwjNkmNJpUnDRsdGqdNgzHND91rfJQ87gUmWZsG9Z5R9x2Nxw3ArYu29iVptmsnMnjuZWUvabteJ",
  "key28": "4uBGV1mQsmJW9intCqwqE8ZpQJcY7vBmHb4y5RdDxFpxh6dZip9dPWSz6uNtUUJS5W73p6C8y23SAxEurpmbA87",
  "key29": "3TaC7RHNVVaFQts6rwT8Mj9172ZQ4k98KwYgdv1ANp8HFxmXpPVaTacefWibiUw1cXMUCokB9n2p2ryE9nwDFVQp",
  "key30": "3pocNbV1rWaTDdJQvQs5KLMXDmSTFGiHtsE78iG8TdibQbRoYxV3PyFDD42nqMzS2r7qvfbTX9kiD7nqjFgbDZgj",
  "key31": "5M5cRJxTM9V3DA6UKii2sEQXrdi2ocVkmAU7ZKSyHJoYudoFDiZtq4HYG1C3hvt57sawXRBGu7emb8o97VVvAYR1",
  "key32": "3MKqEnFyV2mcDj3nYfx4UZCEU4buP4jvDzrezz9y3qtP5WfXwHHx9pcreKa6cd1PJ24cFrNUHKRFaRGm3RgPR4th",
  "key33": "5uW2UokzU5XdYAXF73zY5u2RLEmpiF6R1aaivTpkx2DuzjbQWdV4mVvt2zfZn8fKVHivtDfRemcTyf8uCdJmTVZQ",
  "key34": "2qkcGxCF3XAqAfU8sUKbymnxzD2hNsgjJaSTBFUwT4tQA4TF7bqDfS1kFUgTpM7t4LrDqfsGHxvmvJPC3GQErtbp",
  "key35": "3ykHL6aZJPLZw7SjJssTJHh768rYS1eArF5Nb9qbNwpxtJiiHhoeB1kXT6X33L5jw61Q84fw5idsqEGebKhsi1RW",
  "key36": "4xmzhzW1gUPjxnHtwAyqxRSdHrrD1JJiGMJXsTh2JHhzKGfVLwyTmmzfH5Mqg2rxyMHWkohHePpARGPbUKeA42PM",
  "key37": "5HVachF1gZHSBeyA4AW7FUvD1paRWzP6bfh363k2s8F7SBcGptBAqPXwXoMhcsLsG8xeRi77i9t73Tbv68apk8qd",
  "key38": "h5qMmGqeqTXMugfHGktowZgcspyujzsEP4ngDY2AbDWBN17swhLBXMj19A6KFoMYnrctct7grAXrd5aRDGHHWWN",
  "key39": "5WvnPG9PWoFZvyhUDwNw6Q6LqXbcZJySU9y18yzWScdvyBfgCQfDsZdj6airp478sCccQFrA7VBPabMkgzeSayUc",
  "key40": "3GZZJUsQ7nQBxjdhfMiKmGqH4en2Z2aLdr4F9M6v1TvdQXMbdLAq2NtfJBKd96Y1UqcfUbNcKgbKZp1fq71MGSec",
  "key41": "2a3XjSNojRcXqQY9ApRw15RSD94ryyWeceFsjNzJ5n83jbZ6cSWYFw6SG4ybJiSuGRUQTG9QVZyvVQ1can6hatjp",
  "key42": "8DSPMJd2fCTQk1YKLDPJy3Qjs45T6pNq6yATUABNJkYZQ1hKF5RBcUGprXeBpWsgmxQyTFgCdFX48RMKaCtijXU",
  "key43": "2pagPX9aN6N4ZbKzhLcJB7tASB2zTVmB5BXFY1B1haMSZx6xsMiVR5iEfipnyvnyhrZmS62KNmVG62HtjfmorAQU",
  "key44": "62kC9388zMp3axVpiV5RXYZ8gUYMaSfbhurQczpRkUpp6dVvEBf3y3T9L1ooLzpUyYnJHzdNDCRvYsU6gzb2bvHW",
  "key45": "5caLqToRigk1RWSu6so3A3qw4GzKhaHV5AhwztzFDqBQy23xXxeGTgqmv5YUP5QhzKY9mpkBj5E7TELLSLeApDyx",
  "key46": "huQQtWnGAvGGV2Fuxxj9idzNj9ZAWUkmDF7qvJ5CfNPD15cqGocDevZFNazbDPWWGh3ZDVRmdZgc6Js1DGsSy1b",
  "key47": "4p8fcrjLtUtLYp7rnZGuFAqw5Kh32VjPZcRnFG8jALcAMH14TSgTwycWQ2CK3TxcrsfAXV9RYzbXMKYL1VzYf1JG"
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
