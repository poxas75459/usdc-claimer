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
    "3BnuB73o46DHmnD7YLuqPKn7Ay5r1eVFjd1gFHfQd3xauAMFaEmm7LEfj1RnS5B96wGaf4w6zt1j9F8LM5sotEJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SfJZmCRGcUdLhCkLGDQCybo4mGqr2PtSVZHgVXSfzB7JhjqeHUAk3V4RFhW7GxBEbpoB4Gvb4V5RHmX4Du9D18Y",
  "key1": "2wCbH1MpU9oaTCKsuC6zz4V4eRtVrY2m3w71cPq7AwToiXLhVwP4gUy9ftRmWaS9KAsLRG6j2TKJYE5zir3K5Xb3",
  "key2": "JNy4md7r9m8HnHf8Ay4wC36M4cYSQTnTMi6BKY6Wa7xS1EDtMjgGmEL4itykXUGipozqttHZF44zJxoBaBUyDPS",
  "key3": "29Jh1WTWSauAwsgyqBqUYypqP37tDnt41WdX1YwVhYofyciadgYKgodopTcTCukmToT9HDF1sScsVuipHrFfap5e",
  "key4": "4Tpmfy9TzPQU2ysAracLE63qGYy6fD5pFQEgc3jvNmxV2jkPPRMyy4UPD5ouDM2AZiVVKzxkHkr4XFnGzyxgzmMf",
  "key5": "2y153mMnwv4RMEV3J8rCS9hkAXyScAtY1ZEj6QENLLKiwHG8bM9dE7MMjzbxxDA7cevFtUTfTuFvFxD3YsuqaJJe",
  "key6": "zf5SAEpqDSUzz9gFFsTb5iZfccqh7bxn9sDdT81VaMBPcE4mGRbnnizMxpn47MAZK7vFhUR2jRrNRk2BvC2G67x",
  "key7": "Cw6oXAfAtzSH4VbLnuhcBJnKdUG6sMBDwDwVykPv8Mh4oQCTVwzreixEQwd4gQKjzV2LeheNuMFbjUfd9A2MBhV",
  "key8": "4QgtHRnHKHDMiH45KSyEZq72GWLGRejBGgSfrNCeGSXwm2RpzgBVUK6pKmn8ZTmP3FYdVS2qQ6aZ9u8x3dJttswi",
  "key9": "3JGZt2fj5WPJ46AUVphMjApBgxeZtgKotCdJtTLRPnDySHukdZS4bpWx6ttEy9U37fULrGgPCAiwSWzmSzJp4mUc",
  "key10": "43jKu5u6zP69gQDZnENfnCJGxAks7LXxsgksvLmBLh67cAfWikj29YUCnYSkgKyhZoXRBAmRv1vetnEzt4kh4LAt",
  "key11": "54zyyvhYWUFYFTKLC1fr2E3x8pc3mRNpLs3JUZBuN4fEnbwDcAbxF1Q2MkkTzkabZQ2Uimetj5zSZEorantxfpdz",
  "key12": "2whs2osMZ3P1G388UHu7q5bHDeJGgfFipLPX5Qz4vrWB6geyMqGTDSENBYHnbALM6EUA3xBUAzZgAEBZhz9hVudC",
  "key13": "59enky715BMNbGZE8dYQ2z6JgLsLEP3sSAjvx4JfeAkkze9hwTxENYuqCJJmqrw5TXY4eaDWV1NUG2im3MGUEoCa",
  "key14": "2iH6jRmWYo7FetAe3SWv1KXF39BEDdG1ZUro11pNpBBhxcq8u2wM5jTai7dj5zbCMeY4mnbFY5oJpvGNLFUcybXp",
  "key15": "36LH7ZgngQ7x6X2k7xMuDQeNw4EfAMEZyGzNuiBFyesZnGibLeKQfu1nvaVi1Wk7EA88eycEfW2fxqh57Pp5Kaj3",
  "key16": "4ZzfjW54xPtTxCM6n71qpn9Y2WuVpLgGqxsNroKxYBArvLvwghp8q5mBz49yBw64RtifYHjgmayizxaB9ajC6yv7",
  "key17": "2BpUGCx4PMs2NkbRk84jbYusXNVmf67Zi4gxASK3RDtkDNpi2igWtce3u7v2wo42tVNGCErnZWVCVnM2RhFEQrZf",
  "key18": "4bhW5PzEYcWkRYCwnqJnz7RfkSYoQSmZbSdhmAPV7ZFnMXQQCtfvkJuRcwoR2doybxFYJu3zgX562vvsMw4hdMA6",
  "key19": "4QhM4xx27THBZVKutVceYwotVF3yQxbcsqXcVk9VKjzSMnF49eVz7ahbiqrDnaEhaSLYChg3zdZmBni9jQvHpC3E",
  "key20": "2R7eXk1UXph2huHqLQ9WhhVib7a1V67nWN5Gy5prrr9nBJnZHmVBmurR162u9VRVnnswgXjdKM7kjNLwqkMV7UTk",
  "key21": "RUU3UZyE65Bi9D3R2mrxpi3JpXme9wTfhdDeGNHHS32XCnDHjDdoNwgAUXjR2keHv8NcHgTzLa7onGrcfwg6EuB",
  "key22": "3qAMd6aAuzG5jj2Hg1KW4wFFki277HYLqf5mFjpnSC7VjhHR7cuxM7c3DLZWdXPfdS1tsqVxaQBpcG7yqYr8PU7D",
  "key23": "4N5rAfUycbVqCArDPEjQZzYJtNH9XPGTRTjXXQK3stVsJuE7zKr9jBEXhZEkZksHZcR1CEAFpxfeWPe4gRy5iXrP",
  "key24": "JVAG8zbkgvcvsmiuidqVwT2ePaUohqGKPuk6qkLYSSYyHHE2M3d7QAtkSJ7T8fnxmkf9jVaxHXa1XM86oTM1W45",
  "key25": "3mDVnu5DWcdMdUYbgXCR3m1RRFo1uy7WfHrBpM4N4ePMJEoBEZ5NxRFyP5dNLhfDjhfD4RMe23tzzJQdXq4BAiYM",
  "key26": "5MW8gQ81p1Mrex2sQprwVvZMmLbeSGoE8VJGgjZBmy4ubGyTs4JuXMhRuLtzgbPQ9fdDL8NsiC3D5nCSCqhqwCbS",
  "key27": "3ieK3rQYmcmwP8vmybEB7ZLmZmfL7XXGRy4B1Y4w2rL4UT4TZJ4wE1YQBtUHDWRXHGDiz3Xs4i1uJF4yEhvwHt8X",
  "key28": "4FPN34TeayRYhDq2h9uTPs24agHAMuwewjyRX1YoJmjgThTxgW7Sao5F168HnwFKbqzpDXtcGgU9e3u648DoRSK"
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
