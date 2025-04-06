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
    "3Em9RsThpWx3C9pg8uStL2R9AguLAJNDrFXmCihskzq5AZoVxvqTjjZA2RSfDKLyXiXMH7dJaYoPVGjHhv92fjaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XooC8n4pN1Yv2DnNE3nVciDDNJ8zhPD4Yi9q5st5FriUm261SpznMbqJPibrA6NtvZhApRVQyuLcw4hrUtsm8TG",
  "key1": "taxp9djHaEMfKvhxFDZwLSbzoKsaR1DmMQ17fLik5kVn7oUPzqkDjVk1HFzXPhFHNKtBmdP6bXED28b8j1nqnsn",
  "key2": "3JQfxAe67xsfdooJTRv74AfECZJ2NZdDXMg6rvUwLY2i5gyRx7gMPDBhVufEdncc2rj2LUYYSqh2hPqHjEoHCEP",
  "key3": "4Rhbpd62ePyb9d32DqWFqHWZvytkg9YGZW8ADCK52WVRbHzBghScmzTm3oSTycokFfvHXY9FYCrxvy9N8sPuh1PK",
  "key4": "5tq9deqXqaLYHmUjoS7W5CgXxZbzPKU2LahNWW3jVKySVhHH5iMbrndfdBP3GZN947aH1HYF3MmQnJsYxdTPwNTD",
  "key5": "SyTxEJ3G3JtKVwAxnaQsdZSygkwBiXnUhhyFMk28JJckCz4xHEYfYT4YvKbtHfidUMgpaAZP9QX7vwMTJEfsUx6",
  "key6": "42DUgwSBiTWxfL5KckWJRvcZnajjo1voNjeDDfUi3BFyK5PCv1xdYup7nUh4e5Ve7Pa9XXizh4PYndGGXGqwJRcd",
  "key7": "3G4LfYiiXYcLTjCkpUbdikBDQwMcztKJvnKSpNiRbuzReJB6VdMUX7YBxkd3XtmuFnvi4eGgGrPEHXbmMkALrtJy",
  "key8": "Pzn1a2eUWSPezXN55HDUWHo3Wo1BQtCQYLeY7Gj9AeN6rX9YwBy265GV8rCobczAwM6QqNxJ13kUHzBzfVVS5XP",
  "key9": "5DVBm48bw68c3Frd1tioyB1n99em4WC2QYuHCvhpRf1ies4N9RkDheqKLj8MjPtpW9oaEmMjZf3XP3uVbRguKD5u",
  "key10": "2pfSW9RdTeVxb2VqDcnpAQZ1q5sj34jmnBy8JrJ5cDrQL53VU1KorPMYExkdwaRH8WbEBPwy2KaZh8maJk7V9zS6",
  "key11": "3nYnfXibs37AhtxEBT5HYaYfzP8sgTDYbxTGAsrd2EuXJW38NMhhaMxu1UHjaCSZ6qus1MXL27j6vjJsgqMAR4Yh",
  "key12": "tCBFhPkgaroCDFyA2zMAywtCumFQ8srqBuv9EpKGWibr5FkAgeB948jJKksQbrjYQJ58QT8fKtmuW7ebeanu1CZ",
  "key13": "49fVEFBASURK6DChSDnXPQTVYeDm3Rz1WCCbboF4SPmJFj7PgZx4Z5dme96K7Yo9nDMwDGQDPTPCQfhaowk8uLNs",
  "key14": "2H4ehVceJNocwWWNjJKhanvFMqR3jqNhKwZA7ocvprxNZkzuxpMJJLRe7izZaoDt2D5nX1Dm33yBWocNNC1fje1Z",
  "key15": "31UGfC7kNw9cDhizuQNT13zqexrdUqafV5F8SK2e4bphHfcPRQzKqkrtKeX8anqj5X7E1bDV5m5iyMzdjrXp3Avm",
  "key16": "5Nf6dupzJHhaoayN5vijNex65Ze7y1Dyy3XB4VfcbjQW2nhtTWXTFSXVdRsXyh2ZTQv7JcNFJvqvYbGJ9cFbSWBW",
  "key17": "5KJfDpuBb1kAhCUpZTeyE5CSMpScTLki56cFqcz5hfpLVpq7xcrSJnuAjYNFmgq8dVc4VVqGiCVvtGT9jprGH61p",
  "key18": "4qx1112jR2PjovmbDUkSp1MW8XxRtgnvhbYJsdeh1PXgxNvCtbJnRhh3nqD1KYbVC7dq9DWkybYMnKbJioS6JmBM",
  "key19": "63x6m5ph95G68ZHg1TAc3B8b4VEjty22dGiq3LsQFdw7xozh5SCcUBpDVgJNgYLKeA9QWNQ4RwY6hjGgfdzgBREN",
  "key20": "4qXMgfGRJd2DCDoBNNCQGDn8wL3G6BLvEEpedzCHetqSkU8MHXrdUo4LNgcJu7aBJ6eyRtGf2e8BtxPxMc6cDguk",
  "key21": "5gf4eHd4B7rELSnuTUmvfmLD75kDiwiQRFFUW33FVVqpSx2QZnqvmMTUQTsC1HH35uZNSLEYMv4V6397YNMCouWB",
  "key22": "5y5pWHGNRj76oL9A1JK1JgeGJgLqP6dpc8FK83JFsqZkJL8dyYtFazyzhAKFmpmvyn3iH4t6iWdYPq9nYuCrMnmX",
  "key23": "4Aj47rkQYHqGSfUDNoFmMTZaBE4pz74E1jBnh2XxFrVHuX8cm3hTy7bt72MZXHBRA88bZPsAUmvwEwcW2xKNe63R",
  "key24": "4UQocc37DkFrjyBuH9fwkZcyXBpkoy7DnZD4VFe4koX2JbXsa9LYvwMz9WS9YbjjhkdcSeJgZrWpvEcRXimScM97",
  "key25": "5fMYKqfVi7VdCzZ55rud9nYj6X7WgUB5n1GzrQkiS7e881p3kMvfwo9FhNtRuTrPTFvr933Ys9gkFd3hT3QHSiZB",
  "key26": "3HYdyWedaafJ8YL9yqwsS2kDsZrpWKtkrcqNYdKAH1ZmzCKc5ALcphsJaK4ks15XHLncQbcdqthWJg6aozNrNFmb",
  "key27": "2Fkf8H3HPmppAdfeb5UosVUYTuijGF1pq74TBFf9EvTjbpxNTWnJXHJGmcwFP2snoLGXxn7UwaksuRZn1iwFcRm5",
  "key28": "84NTh3Bq93SeHyA4QwFFHZ5MBXWQgvYRbQstFuGtMiP1hFdqNwWKJNsXo6QfQphwxo9piLQmCMaueshpYvuk5Bt",
  "key29": "3qHYTNWAmAURaxnUywz6CLsDY1yhQgVJFdtnt5X4cbp5VdPTWy1Rs2mBMXSp7khok4AXmkge3KG3QEJjYYe6DEPS",
  "key30": "3pT6YRTyAFTvpNHBJz1XEKDxoMwged4mgXu5c4CE8KZwpD5QkDa4PfJkaR5mAqhRuyqZTD7wZCrGyFzbyuimcNNo",
  "key31": "3KZs9eShhBzpxME8f3pA95jJfecD29exeBbVnDPqWqinksoFqhaKrs8dZvzZHskym5JLXarJGYUDMpdR4Qidk9cf"
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
