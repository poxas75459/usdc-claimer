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
    "4Y4bUAR2weKaUmuK3G3Gk3Tq65xVxhbc9QZjJrAqTkWwqFfE9wSmxMrS6UTgMBpvBwL529eeoyEH2JoH8XJJemfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "icN5mFJzL7DDfmkHqoupzSHWdMWZuCECcXmVDTHW1jg9xFB96JgcHuoNyqaES8uTWVBXz3M4sGF3r82on5ow1oZ",
  "key1": "3PENZeYrSjQR95M2nVcMUk79kd2tSKw1BnMu9pBKG1HwBp8yR1rTVdgmbcYcm4FxFGZeR9KwoPtmno8iD4T2dbKd",
  "key2": "4j3d8Ebt2p6LuQLbVxaZC9346sZsCerxoQ5sC71oTA5nnbSHgFjuGfGTfiT99U2zCG6CUGcNK9MYj2P4bVfKo1PL",
  "key3": "3sjPP18QwkU1X4vUwvNmULbHhHkjDH13z2zRUQJp5bujk7FiYTka7s5VAk2q4v69cKSYcXjQ5ssBr6zGdddueCEq",
  "key4": "2Y64wyDug7mWR8g3VJuwam86qRZU6k9aFFT1Fd8CTF7rdoPZUkjEYebdXyNjGBFn14kxZoNYRP8CEM9krUPqMtwv",
  "key5": "4V4KeyiSKyaxXaex83tHZ43gJiq9uSMzk5vKHWTzNRsV9w8qww4acceBGKnUxsn1xvi3RQgPTJ5ixqvXKxFJpoT7",
  "key6": "2ThNpPzLudpauAnzVvW3u7oGG9N2Fb32EUyRqsPnrh2Q7X5FQ6DFx4M5tmCiUbbqNR7LP7RA1nCYarxNHv6vHT63",
  "key7": "5LUqMFAAg1RQnd4UFgUQZVXTBrTFwfSHJLpBCWRBxXXN5UAJUyXUYMx5C7uJP29DezU74NUHxN9STFLyUQ5ybVkL",
  "key8": "3UJUxvaZCJWFf1Tf8mEqyDsc3YNaYrSeVDGhzcnPkg4EvnLcK4sskDV3qVRwUz6QoqALxdAMQHVqMw4tK2xg4cFB",
  "key9": "2orYdMtUtm6XEnAaGiwkzqTdv2sVu1mZvEWZ7dMPoQhFDfwwSuwrtBNYSAkEsYwVLiTuRLYx9sWyeLXqeMcyZCmj",
  "key10": "5AuyM6jWgJDBAK29xJoJoxkVB1w8zpuyBF8G9NnFXLPBmMhhHsGyZXX7hqT9zugqCwJcYfPQPENJvM5RPbjwuDHi",
  "key11": "4nr5x5UD8m47unDJjynDcaqpcWu2oJnFiz1ytfWK1HMz2Fd3SPp1rQ8JpuGbLDpaQ3T9Ptxsoe8qdeTQ6A4imND7",
  "key12": "35JNJcDWwHgbLPvxq4PdtcnX193osjBVJJ7bCn21WmVdZaFdYD5VPkTXJsrpAtNrpSFBtXr86j5SgELYyiGGzzQg",
  "key13": "4Wy45amHwsYom7Y89kC9AwvRQnTJf7ShL3ZHGDvG5DAuUokFjfuamKwTFYEY9pPXw7Va8C4v9EytuwWACRZc3Sj2",
  "key14": "4Pjxuz8B8eweycfEeq3i2HvaTkmj3Jbjs63GAT2P8uqjD6eTMxrNrpzEcaEfKWgZy42LG5YGpP4HjmwCAvXmTs65",
  "key15": "2JLkg5NdWVkEEGJEvtvmwesUKL2gvtk5wLrHkMU93r8Fj3jou7pTdu36Gvv9SLpPKbCRV8QRk5mGvfsbPfRTqSbx",
  "key16": "22t2CCkD6yU2qoqQxKzT39U1kFRcA7CySZiARfdpdyPqG33pSbWPjtasyA5hz1M4hwz5S8xRT6XNc7krRnpEWQ8r",
  "key17": "dxqnMUHKzKqR4c5XLVMLoa97oLYc9oSsFfpo7pLMyKEwtgyXxCMVig8E9MQHP82ReRCg8inwyKRSsooCwXcbVdS",
  "key18": "adhFf5RGE8jKDfyB4Pb5zbV7ErbSMVaZHiGxEQmLomMK7JvnueE5eiGpJFE1UqSZeC5XSXYXmb2f35qzUmciuU7",
  "key19": "a8GmAnHvzV565AqTravLxiKmWmtyb2uAtAzwuq1WiMFWvkAfh3enGZZbpqqarPpEmRFR1ZuxW5FAWFrCt5DJXnZ",
  "key20": "2kEzUVSAqjeYrX89bq958VRBPpkHWLHkn2dfGKFTXV6mRm9P52wUZK18wAEBY93r3rf99vJ4FvgdNzzrRwYbwYsC",
  "key21": "4nZztJ1DTJfVPzLkuVprwpuu9ii8Kpq91kJeKi5dgQoTfHD2BTzvdTVM48YAQAom2ucLr7Taxbx62f3H9LCUDM9r",
  "key22": "3EbqiFAbdjfWuanyhs7Vtbbm86qRhuL2xRtTdkc7ECzy5FsCMq5K1S2GN4fkFgXCcPAQiDUgPEbJ8N3muGj3gCft",
  "key23": "8EYQHqCe3LC57Y6qxVrGV4Yuxfj2CoSW7HjAP8We8nz5pczpajW7w9EDfzMFPQbLBTmLU2degDs9tZkbX6f1DiL",
  "key24": "2myNzwPtaHqR5SJTJCWtR4uzQfcunRUBT5pB9vw1c7sC9sdgBUq3fpeZDCHpWVPQpy3erQCbFERRNcscwzvsdKEm",
  "key25": "5N58a1TogUxYZLDWWdCUpsWXgpe8YHQEAGWn2rfUwWDQVRc6A3gKWfrQ4KLAhgSJy6QXdqehqH9HobjX4A8SUMJM",
  "key26": "3rwwNNQP1zJrSf2kfLDCjqTZWfeK5HdRwGsxxvbbm4EzpFNzRvwjUEHJ4TCCRb7ZQhFi9TTHRVLzTxGZHaDF5Kz1",
  "key27": "591Jc5YbBPHtt1bKNCkpcaEvtbBAARvMrweDsUmkQvGmhHi6UHoJeCaQ7E9F2ttfiXhcHuMBW4KeFRbCbMXrM7Mw",
  "key28": "5UhYn3U9qriX8fBZNA4xiaQk93kfkUay33zHdLXzFjiAUzFdXzPUbKEu1rPY3PX45kRMuj6dWHESMeuPHdvQj8EM",
  "key29": "5H3FTeCp7EwfE2V2xGPXSqk4LaoAfQmdtpw7Y1JzzRNiUiSBdaMo6qVs7sfJsr9HuoQSDXMsmWp4gThXHGxCGknR",
  "key30": "2M1Agm45HR7z78RhguZSrt4eAX7ttdjBKAJywVsv4qjr8gSgy1E3BjNhGgeTtsSiLZpZcHc79jmJtATRYM9r13uf",
  "key31": "62hDaXCQW4mZ6B9TC8PWMU7QM8FXkPFiDbhQ689uK3iGHkR2qH26sWDhETQs81J436Has9cYdmuvc3MiWpNYQeRS",
  "key32": "jBEUuA7qpsXXEk5wF5UQ3iweuiXyABqByY2SKiGpTQ6aXTDND6thNkSSPUarFjCycpqzyqDbDiuaP8jgJHiSZjm"
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
