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
    "53ixo9n712QDynthnSR43SSJWtqSTFzTdRRXAhXbxDUWYSbakG3sHLqhwh1nUVg85VLKAEatp9E7Ha2zyhFPkAYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5148d9BK9r5YNAN8AF6ur9MewskAoKNQZqDhRKFtpwPpUshYxqoAY4QrxqJayZEKoRWrn2oeWdrnXWf8dQcSk1pF",
  "key1": "2ZDhUBN33nxyFA2Q6HSGSTHrEshWddCzYbdb5R3Qu8QVL84gVkFQkkGsc5TvBeJwaZuSc9v6dRkU4Gx2fFxLguvs",
  "key2": "3i3gxsdTGbxRfsb73mHmdW71Tt7AgCG1rH5Uxcimjc555KAnStQz6jKgBNq5GdDYu1s11RLRtCc436dQqsqvj6tA",
  "key3": "25WaJeVxHUrDQDm1aus7GbA8GrWsPDJoiqLKemXNVTAJesLcm8a1J9yAJuWwLYDvMnZcxeFSLaWBiJkruQmvCU7V",
  "key4": "3wgrQ2L1fFhr9SDwUyeDG1nWnTSGZgYtGRyK1rYU8CTzza8mi7Fu25jDog8uuQUWtk3yCi27hPBvaaC9CFQk25mf",
  "key5": "2TxT5UAZQZu8DkHrhpEgDAxiZBHbzspHJU8XtAgjQgTxqUpfWhBBHaf5cfbAxgVLbdGJiThhXBoayon3xZrsaoEE",
  "key6": "4mcnUbrJdaXsemB88cLZo4ezGf3ysECuWP1Qgqmfgo2GVe3uPPDJ5P6DzDi6sLHqRfbLQycuDzTpjdzbtF4a1jiZ",
  "key7": "4CvuyGTDgxTkPSqJ6E461WycrBGNk2gyPcRiKZPhVBf2KjEVtjfHdRLH1Qgws1qjkfE4kRGgyMgJW1b2aKUFjuRE",
  "key8": "2NNn6Awp6rwPcT9aFWGfduSHzVdUrvN6oUrdFuwyDEh81eurJ6FdQVC67GMRrHEaYkZQ2hLzRRg8TG6ayKYWfrnC",
  "key9": "223h5uXS5DqAVcdyfbU1i2KLdezh92kM4X6DAvaQUPTD4miHPPgAyixbgKdT5E2VDzckkdxwRsMx2F6wt1zEqnLU",
  "key10": "8zJa4MSGNr7zyttiDTKHBpTNUfg6cN2hh5PCW25dav1Afg1g6sPKvJ2hDc6m49qZkD3jrZ1akVPBkTZLHZia278",
  "key11": "24o13Zw42BjJS2X3fLzAQu8S8ZfuoMWwuDVxn5fLf8t2G5t6b8tmgiRZ1NyRywW8Z1dkmhMULvdhnm5oVo2WsGhh",
  "key12": "3RrvSV2wKQF5i9jXRf7b6sYvWUggGsVda2yrkmTPnFzdmy82T2o11mp2ibxnsFYuy57jRWg61fn7hg7qV6RE8kSU",
  "key13": "7nsmGzr2YAcArpYAT2sSBjwTvJkVkUkbRrXGmHynbSLDCPhANabA4a8dNfUCBpn2gf9rF3wNojLRPSVu8AFvdeB",
  "key14": "3YBBLdmuBf3Uc98CNCeBh9Ajsp3mCGpB3HFQsR8BeryAD1C1Gmu9PZpBwvbiG6nSUxwpEvQ5M19AoGZ1cZTQeuLH",
  "key15": "4okZsd5LyEgED71xSa7cuzm4afw9E3DP59tpcW3WA9zmh5pJyTPKjzLYbYtpmLKNaegV2grMuX98VYWGn8AjTnnS",
  "key16": "2RxS9jKPGufTpH5999vfAuYPGXxGEfT5J1RoYN1BzRb5N7L58Bm8ezd9EDZ19wuJ2FKCPrd7eVihHvbLCTthp3TG",
  "key17": "3nLov7GVGfJf1KqTtgM3svfcV7zAwDf5HnodayVHu3FMzmSfn8128Rp6DKHv6xwdkhruBtbVNTzPPQa2d6Mv3P9x",
  "key18": "EuMxA8phQ5gRQ1g9dAJQsDzgKAijX5HvpcWPHj8JZGWzgsqvJzPqNR9Gbdx54mzsgJdEBN9yaRnwJcTqcgYqwg5",
  "key19": "2aJDKhCUj4wREocpqHv9UZLGvLisFTH3Jc6P2N9M7Xba8u8zhDXQdAot6dZGhEPWiZTYTE2SXqNvrBQQj4ew4LNC",
  "key20": "4eiDtSyNjKUyASjnWSgpJPSseR6E4uGtAGZZjWa6CEj2xZAqGtitqSEzvyfzfHqL7eUvVSixk5j2oJCYK13WF9ZD",
  "key21": "5Y8GPc1jrYUmMFxPon2KNrd5QS1stGDDLu7XyKivmyTczrWEVRfXL6B7Zh2Sw54ZSyp6bP9N2aK7sZC8DkeBMLqk",
  "key22": "5vFS8g2UGC3DtVAdehTwTRLvPjUMUubevNHbPgsg3dy4taAcX756rT69N6LWMiSUr38EASyBN4FZy8CDFATdiNpv",
  "key23": "4t5F2HnFnSfxWQvEBVqeuJ9E5YVr9YrAXVRwRFPZ3R4PvrWmyZ9JyBCJa7rvKU5ByN8P4VHs7qSG5rXtgfWAsWRs",
  "key24": "2hSVKQ9WrRNGJVGLB1wTKJYLs2wJ1nCo2wNoaXAirEtbLbtXZuXsyToLK7mnu6GGpmGiJAiqtVq2oeisbHoAgdGf",
  "key25": "3Cy1618ATzEsMJ5MDhpoZwMs7wTEBt9usJ8nL2zgNrQdx4LDUMPAQH9jQ5pahxWZoJx4xKE6jA9J7ZThN7nKsbK4",
  "key26": "3jve5SuWRnn7WkPrERtRimiCh3JLwY9q3DggLEhLbq3ibby6FwkHJBVHgh8f3zgwma5bgnBRVHFiqeEN8Scy6CUR"
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
