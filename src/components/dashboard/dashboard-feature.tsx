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
    "3pBahoYCW7tT6WncEBJJmx9cRGfyf4LtMMMSgyP91trEP5F9YmT821qdFnC2d6apGYuUzw4yV4uEH8jr5GRm8PnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WhRnw641WhR2KPLc7TfgGUhkQHNoktkytg8RuLAYuPQS5aNNiwvvAyy81bFzfFsE14Hdofvqvj8xa3WiR1Kp26X",
  "key1": "3btWjJwG2RyGjQhY8s6Wy8SpZ7Szrq3RVwWiqtaL6XEb6DoefxgmoAKqwWV5y7ZTaF76WuuyiXppvwa1cfyEPz2J",
  "key2": "32BHvR76RzBvuBf6eK3HgUy4pG5hRqJAq1LUJvFz8DA6iHjXMkENyvpGRr1unRB6zeGhGWhG9BzMzUiM8dTjgVY2",
  "key3": "4dXctEDkFsHtVVRCX8sdeo4N4PW1aZvV9N1KKWurvK78eFEZ9vB6MoJp7uetyWJjKRwe3cuxZzrCte5t2vtmsWvW",
  "key4": "4C7SPH4YmXY6knYTySLvaCobyv6dVnG5Sh5gfZkca5PVZd4UVCuzu1SJom7pSjuFKPcmXk1PvxfJ8WzFesVmawvH",
  "key5": "3kyg7uJNxyNPuYcF2KyrEXmUwrxLP8vjT9bRFvK5jFm7uo3SS88cHz7C4FjUPyRWfGrq2X7S4dC27LgqNZ17C6pE",
  "key6": "3pZtjTMpcSgfU3cT86Zjo9vmCDGgGWxkxzNPE16QfJwTCxfsw26uFypThRtcmXtn2WH81xXYeD8Kawb362LJbZx3",
  "key7": "4gsvTTJ2H6EqqdpLvNQmXHLMgPUpC1gXwj4cDfnjLsVVF9n6NXxuMXjEPRo1Hum9td2cg13Pe2itrPAcFckCaGSC",
  "key8": "3sBrmpj6hhm8LBA8hoqY6H8V7hMWCUUn2hGAXmwUfTCrUzdr3M8PQpQbuKJqinuRhwtAosh8F4G6vLww9sRetACL",
  "key9": "7GZeWH7atnBG2Ciyik7yYCWuZ6UrCcAQuGPYbqXGZBdyrk4Jpq7HUzQS3ZC1JaYmpQcQJfKNkHGFcGkLPqqm5WU",
  "key10": "7MxdCA8aq4gfzZ6e8zZ5QGVh2DvTm7fWNsp4VLMDPxWFDYDVVLr3teQJ3WdUy2pPrg7oXX7Socr8wbEZttaibGn",
  "key11": "f7qRrWz2JS478esExLcWeTqGu2pPv38m2kRRDSEGftAFdbKy79XzTT5fkJ4kMukpLERbWWJiNxbXLDnpiPuezvx",
  "key12": "3n453i7Dj7aGpGFMkHTFkCrgB5MwidsuMzyP9cyZLRqmRb979YzB7r3SjtEP636mtq5BcbWPMRhwyj46skSAr19K",
  "key13": "5gmy37dLwUdMZ6TnHTyzFYkTuGcLKYh3LoanSP5hE1h5snmPKtnb3mHBw8Z8QN7npU6WLvZ2u2d5iw34R86fKnmb",
  "key14": "2zm6LVo1zvTS5C7Mq7p4Cf6pm6Fj9ebKKsNjWRK83dQGqkbkNz3Pcmc8STQAeyfF1m1TGCeRnrpywNca3Su3Yemf",
  "key15": "5ZogfABjWJW9G5Anti2YDwJ2QSwuUMsmiaN9iMwthjyhs8sRCLX7BN2MdZBV9gaF6eWVf12NvZjdA8X3KX5H3zxz",
  "key16": "61dkZZ9XYh9ua1D1n8bnMtzPmfwgkEAJ7nqyCDyWCHyw945WVcUHtm33BJvcfMAeDWxpP3kDxYUYyCCB8c4aGJij",
  "key17": "27tonNvG7AD3F4fKi6LZb8o62Lhu25WRKZ81rZXexmLeyNeXKZ1JXttfhTgbWkdvBUZsxoo3TwcNajyfhL36sSeZ",
  "key18": "4odnfSZjZBqH4eYv1PweY5TzBjZRisrZVBmtE6qcJWo2MDWkcVLhP8A5u3GYCrefvbkTADCp5FNQydsPeJzmPwiF",
  "key19": "34ebNW5U7dqXmm3tMotbWxjVF8iYs2ZYq7NQ6R49ZNSSQhFmfk1D2wpiigYjm2kHP8SL3M1y6NEJmxx2GFy9W1Wp",
  "key20": "Q43wqmGr92GAPHtmZTM2AZT9HGdYynFt62kfhgeKEbAouiyakusnSeweEnZrCMgyXw4q6mK3edAmgZY4sp6Qdim",
  "key21": "5WU7Y9uMh5jfqNCBrw49wpYzWpYztHyfHDHWq6t4banPouGapKUy6QBwvG9S1RbyQs9Za4PcNeKNJHxunjdWpQ7m",
  "key22": "3kbURAk8Co2raZKtG2xwfYM1T3YJzSmEGJ2gYayc1fdXm3ChrUiDi8uboFgiyNeNPvkkB4tzsRakcQoX6Cq4aeNS",
  "key23": "3iLzF63EW3UDSPDCaxLcCd37dyYX2UKb3zqDUXxFxeH6hjjyMmwv5hxCFPEGPkqLxMbKKRTqvH6eubiYrpY3mCEp",
  "key24": "22gpm32EjPKj1dcffsDZVjyxm669Vy65uygpmi4EmvGRKnb38PwnGvnScxibk5pvJegBNETsWNG4oBiRsWDk26ki",
  "key25": "2jCDukiTytwEySTyea1uwZTVbms5FYmuA4A4rw44AZuqS8Dt77x9bSiZ35fjTWpBmdW7GfNRus4kFavCpVPeTvUu",
  "key26": "5UJugSiapdTrcA5exx6QE6zJiE6zhskLNU21kkh4YXkAyTp3gFtqfCQJxvwsgzT6EV8MQsFRZHW5GMPday1HCkER",
  "key27": "ub8z5YGFk4DD9HdBY5ncLqwKikgV6RYcYXnig8EnCtwQtctH5BU5xz4Nyix4zPQmLJsVDZuqUgbdjgNjE7o195R",
  "key28": "2zVXaEhxefMGpfK52qbcVbfeji9nDTffPenjPu31zcFZzX6S72RENU9PkTQa7kdo8FFGApK3BH6esJsJdc6HuJ3A",
  "key29": "41ZJJNzqXhEHW5bnCwPaEKR6HHojYuJgzvmsj4zzQ11Jbc8EJ2kAvW8TNNCYKDoUyZ8Q5BUjD1Sc2KQ5eXFpXKWp",
  "key30": "5eb2GKipAFt2aPAtaSrFLjdntj582CaaxexVeryLKizTuYcCk1StWe8orUD2NL6UdGEn7MkTFAy3r2yn3uwdWaPt",
  "key31": "3d5iGfi7jzBH1TDHmEvwNdUb4f7vcPk1banf99AH4DowjHm4LP7ca9hdJJQQkf4BesvXrJJvNyfjhHNETEVmpYwr",
  "key32": "Djq1Dow5Ph7V82CN6rN9D7iNkvpLWGrcmRwz16nkR3xAxjGZyKmkUU6nBXGpZUCKXFg7tQQp8eo2gi99QvWZ4YU",
  "key33": "2GnYDiEecbb8nrotKTAuBsFeSF8c7sgXcZSvVCZKq8dGyBiAYZnXEwJx4bWR4k2TsQDxCdEEBE2wycXHiawkXYSw",
  "key34": "4jbxu3CpV6EaCUYPo6cLaKgDMbPBhFuZUDueQmrX87K89xtobDFiiThw3o4amhwfkMF5hU8siaajyTqEgdyQmVob",
  "key35": "3LqhS7QvzTKna1huNodTVZsmDtSd7nGzaNyYfEkhDCorQijHe2wk9Z9tSu4M533Av5nR8PVHVRwfoC6Q5AcxS3yY",
  "key36": "3g7ZYHVgB3EdyuCkbFVnod3covzs7YaTvikxfaEcrQhg8E4RTPkPjXTfTN7HLewEbB7mx2LCbWoMi3g8SGoMUbbU",
  "key37": "NHUuBMQSvrqX3D319jJJZ2hLnG554JdSNy4wdzjDUb5s2TdX5hmkfNsHb25FQwEYfiVNhJEqupsVW6BedcTDVUy",
  "key38": "5c8pvZEWjAku96cgZSkXWkmC81oCKqDYg1VAS6rDNUeuLu8qeBw9TpFbB38diVxir8Ne5sydsFFo1umCWtRdJxaQ",
  "key39": "4rHoqK9ML1F9YDQNvyhwQJ1ZgJusbVSxjFYyv2hRapF42TUJVPwAb3wXo3685jZqCwxAJEAzTcbd8i4wi82JGaDn",
  "key40": "5CncSLXcAr4ERGKbLMXo2Mp4sKBUbbhC3HN3Nq2cecfqG3nAJ2Uht5uwd2cECC8YSiqdM7ytowZ6eVKgFytvhQq6",
  "key41": "2beH4AkzjmGJcoUaRKBq3K7xqUYsnCCEaX9kJVUFXVDsh8DeHRpSt5spxvAmAGsN8hkyTew9CVHDyaLeRUmDspqS",
  "key42": "3C3eLunKyYgUCPD8QAD4hj3RwPwh9s6HqHWvKCU21VWgc1mqSPRB9JaqpBQuZfpqP4THsKeXhGbGMNDsMoNuX75w",
  "key43": "3i9kjk9uFNbzM2rfmq8fHE4ehEHG1u9rnHkojL1EbLzn3zUrzfLtjypwNLd7jLLLoDgPT8weouPnDkPb9QrUbXv1"
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
