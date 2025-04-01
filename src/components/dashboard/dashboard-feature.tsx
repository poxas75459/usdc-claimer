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
    "4qP3QrVNTsFdVYYAeN1nZknjcWeEUtKiax3kaUqni5Wwqd3bwKWNcVNYXf6ymDsH97i5MKQT2zWpLGWte5BYjynR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396UaHWcBSTLVe6u2wzXybrQhLgDTKbgRKv1x1NSSVh8ugqjBU48rNyUwK9DF6wNbqF5e9ewboEcjtfTg5giJwXZ",
  "key1": "3YrhZkfjH3PPtocrQ4kSjGLX4jMmNfb8YeSxwhgaHQ13jxCVPunjD1QYctBFjNseZce133xtH715G1R4S9KQbZJo",
  "key2": "4XXPVe7GmveFPdFxZfmGid1d3AqPutHy9B9BaaKa2pArABA1T5yifJMyAiWyU9AYTsG6rytHZDKkBzuHLGGLvYZh",
  "key3": "2sQeLDyo3dHtRKJ3HBrScXh4Rnx2dSbzFFWANGW42hTSXJedC9UAfYnLR1cchD5PBkLnbGaHAcc5FTwSH2QULab4",
  "key4": "23Evw9Rmcr1TAL2BzkhJu3ymgaLM6z36rE2oNSfb8SFoLHJc1vB8hPtqxHkiVtGG6Cnu7MJwe6Kzg7MWDtdFaD8p",
  "key5": "2eKCgJeekxyqBLgNcDAGPWGQciGdjXixBSLJ7DmQt7hQNa46Rur26vX3mJh8Kc4yYyBia6JTyhvEyFkmzRqvUxmQ",
  "key6": "5ihit2J2rM4oMEKKfHqvB6yXcapmUkvn3qRBTLS9CLiHLHLrt9sYxq4vNGfbFR4xka1ngU6vqNu8wnv1HPu3jwco",
  "key7": "2izMfWsrzpV6cXk1rjPLNbFyzH2giDo9iXGkm3cWrbBXQBDNtn44RxxCDdvKFovQfNZe6EF2bDyVW1xnS4JxhSC9",
  "key8": "3ApoFtWnFom5aaJToxpyxKWto6nYhVMbknuEJVgFpJ8fbzZ3SbY9wvgvpBhHoJ1f2U98xVSzyKZZ3Z1HQaKKPwsH",
  "key9": "5LEkdEwp3jCo8iSfY934mnMToSyqfpHz3SvGJtpGH3jQZGGKT1hVcgQgNK9Bu5T279jL58BCB2TPkLMUEub4yHuW",
  "key10": "3mRu5YBeLHgRMk6amYbBbwsjNkCyWzRy5BX6pzYjJuUjMHogB7EvPX81cD6nx1ALve1j5iKzq8RkbSDYmeHc1yZf",
  "key11": "2VNwh1Ze2iVs5gmPPYRU6KKAxEUQAo2fCGCXaQUJB7ZTNuWcfFiVHirrxWRdvttusb2sDVmp7YrJgZYChNc7btBS",
  "key12": "2jEuRbvLtQAr3V3jwFBWtjNbFPAy15D3eaYVRmJTRVRFoJk7DN2Aw7BuzdmRESTebRrSKVwZEFDR1H9fiQ4vqMo7",
  "key13": "d2ND5ytoGHJdke9NYWQ89Ly4vAUvPzDoDfMYSBHBYifVqGRbP94zQqq9yeTJERVbKdFEy8hFbKoUYpJcGf99Sao",
  "key14": "3WReFzeimLqY7QDgW5i6qoKdQR58n1bBvRnKhH1L6RfQRP42thBo1tbHK9YRz7YvdqYLwUhPyDJj8nUHHTRuGVrf",
  "key15": "EEVCtRZo76nKhBgCiGmN84DhwdoNZur3hKXhVQ76nqGEayMXBULsrQd1eo25XhNv38GCostaaG5dtpCwT7FuhZD",
  "key16": "2PGYRRto444kEn7KTRRZLBUPH48xkAF6AvBBiBmveDDRPYHBSxzMFcA1pZCa38RC6SChE3FAZQwhPg8kdfSRcjMc",
  "key17": "3sojuxU8NXfVg4Br4PKvyu1uyu8CjecA6g37aT4cFJjmXkZjNhczZYDSGafhmFtp15Gep3cciWKuEi5HxuPGYZHK",
  "key18": "3AJhzekffLANwooEZAE5946YCYTHRZaX6HqSAAtXTkPSPBQSNiHpxbqjV36SgKkUnGjf4j6tE4avWhSiPgvGQZKu",
  "key19": "22FYuMx99zVHEx2ybTZfNjmkRrbLny5nfgqzY2FYmUCYsPY59xe6X7aXoAyJYwXJnMmU4hcsjPdQmrhTNsZxGAZW",
  "key20": "4YM9W86TahJJWuozfLR2D5MGcDQRgErhCM7qzKokhHmyAVcgnq3Sq82eDXCmMZegwKaNvKaKAWEbXYjS8oF3mpcb",
  "key21": "62yoWfLsPdEwQAuAYdVeZCEAHYwaQpjfWTzFDGryhvtPthT2REX6LF9oW4HQJzvWpDyqzv8jEDBTxiAiaHBJCt2",
  "key22": "25ddj2qpA5S2DpeyZQYS8cr2xQJEWMgTs2z7wikUR1u6FsEucQJ4fY7CAJuKVmiMGcWh1uLRcJqLzdnRkfFANzXy",
  "key23": "4rkc4bMjHQntpkZQ2on9PyWGRT84Cg44GdSaQEfLraJj5YcmKxyRZGtWAcNHrZBV3XLGbvHxf13HbuLgbEZUPFZv",
  "key24": "2Z8zhTwRNC1Kgdi8unLR7XBpRoFhRhGmep1257bmKPBkkXvqdvM2zbyzyT7YguyvmYt55F1DkJzHttMa5piZz6B",
  "key25": "YyE2yxTguqc5RDGSeARzoCkQfspWi5LxvoSJJGHuc5N9wLeShtL8iCVkbkzRVseK65Kj9UfPBuaG7WWee3rrNKQ",
  "key26": "4xSfqX1XRNXReWe1ckRumbp51h8GiHHJyQ4Y3bzjU2fdnt4huj7bzizPQcRzJRpuKGFc9yFdpkzeAzFepBTmGSW",
  "key27": "3HwNeBqRk6R2v2sBWrjytjogf85vovzjwhjhV1w6jRhTVVko3onxgwZfL6DY4MtwMK8sgJudGkcueLJdp1RDrjPg",
  "key28": "kBhaa2rsCTghRbSqGc2tcbjFp4RXiG2j1X7Hhvu8jgSbgymowJfpdhzN464oT9cuGosoTcpqXBY2F4cEBgwEQFi",
  "key29": "hXYQxpbiRzC8arwqRZG9oNRYfpvXEPN2kdpnZfDZuh6LVQ7GCNAifZfNeXZQDTn9xRbtZvoKaScersHPA4KPgoq",
  "key30": "3xpTRRfsonEGGUSDsD9KSYZg5JHCJJF2jPnQwzg3ub5SnRDpFKZRLyqU8m4hQhRkJx21cqQ9DzgR2yFt8pu97HZs",
  "key31": "5idJQbfLCxcPhkWqh8y12cEiXzabWTAefY4UU1BLQckAQwZEcky8ThJNkwoNJpPzuLdyWWtnTu3xugKzs3fd3Y4b",
  "key32": "4Y7chBZCKegx5YQJaCBjMUrxmqAisks3aKC1XRFxKi1N5DaJGABbxeVFns3XPn39bSdf2hZVQqmTYUUa19gH483j",
  "key33": "51aFxnhjinnnnmEjNqcRgyF5srjHShDMmY1H64gag5MoV3Eb9kkS9eSrZQNGzJC7iv2ERxbJJF2dzfxy7YkijtFP",
  "key34": "4o4vvWtmp5KbhQTUpjvR4eGBkYacnw6RqKb5fVPSSWFPUNK5YoKQHjCWaaDuW4ESLX8MtyvFkWZR9c88twvHmBi5",
  "key35": "2wkSrZp22nEmo1LuDuiyciJtpD9n5wnNBqefZ9SjQ7ac1wbaneGNcvztzHx1LGW4eQV8QtfpbemgHUDRiokgeeuB",
  "key36": "UGdiuGCzVPVTgQMpy7raqrn6yTszZjLEzP3hSM9SuzqPQFKLP6AWxjXgUNCz4Cy4oooWfTrU9FwRVTtX6wqiMCg",
  "key37": "Fthib2shqCDJ1B7aUGVEqSqTf9RxbfT2sinGhxnk9GR2wwMgAeuBo7Y7NYQVAqLaMCyvR7GKoxju1MnwnKv2scB",
  "key38": "ohrP3Ek6p5uW7ktqh1Go49bFHJCij7ZfQM2oyAsXEZLtqdhr4fNvi7taY4W9uHWqjLS5ZYgyBCTMKRFWoUfSQ8R",
  "key39": "25A8Z7R6SXsvn7zGHno8LNBRL3oZiQtd474uwGW5QcpWEvtYLQKWex2SpbQCVcZFWvkVMh9RybEbEsazYa93CTpk"
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
