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
    "3iAGedZ3M5YRA2NRaXS9CpUb7fWphMm2KZMDVKrRsxzd7bPkiAjhg3cUA42Eo8eFqNSJM6xfUCSjQFov9dN9ksja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mdj5qDRcFnqERw7dW4giBgu7tLQKmukHXPbdR9kvC8be6E7KWqukiE8Mru7pSA18xysR26X1CdxPBod6epYM8PW",
  "key1": "5UCbiPyFBQ22KhEteVryJm7rYiRvtGvmL8suYjMr52bugCHHm5WZCvyZJ6sKrC6hZgiDzzNT5SQ4LKXFg4rswPw9",
  "key2": "2D7afdmq4jaFYHvmEHLBFXbrX7Cxc75U3migQYBxAzViG828wbjERnoGXovQAJ4xibnguptJTPqdLx5iHb1WeTF7",
  "key3": "4nPHuHwpNmRrduNoc2PgajNJxBDRREZaKa7Gp7Riug3JRtaXcb9ZW3ciRwHqS6AYpQUt2BScJm8vX8jmDV9BKCcN",
  "key4": "4t4MvxxfpNHx6UX6tuwtPKrg1V4QaXJRG9hAiC9mSSz9a1TnmejMZdBiJGgn1XoikukRdAS8pbxsnwBdDS1zJGea",
  "key5": "3x3A2ejADWEgMrpDxzUX7CgPrskKULoY14CsmZLVS2VUa8arH4UUjH5Sj5RiCyQ2ifYLAkiSKUayjwAeVxzVRZ98",
  "key6": "45CFtUybgT1Y2ksLHDwZoUwTZqx896n2QSbUwqbWuZ3cWJws3Mg8QzqK5XTfT6UhKMoaRmdNjGATqrcpVnCGzXrM",
  "key7": "4nNUx4zVDfLwyPaxT5AGKVLijL2UW5W1FUhBQ2iVVCCy42E2DyMwe4DQad96nqBRbBcVxUmVtv8WRubgsfAPHbFy",
  "key8": "4xYoitTdhnyahZ7gNWaP8khdFG2idgWoJac9CVcnUZSj3jzzinRSmQTSw3A1SzSjUG9kXhqbLprtYwvUNabVeiiq",
  "key9": "uwsmdcXvQPQhhPcee7qJshyzLJ2yda36SubgXS3U9iLHjCGzGrq1eFbAaPC8DWbXg8vREUNH6p1AyzDGMMNuwrW",
  "key10": "2tU5UhUXEiksC2ra8AVpmZpCUgP8LM3ooaUZYUgsoEj2QVXpp9tRCB9ZNArZfrXHv3F85LCgqow1HwmkSHHmKfQy",
  "key11": "4axN5pVXvSGZpQFHXeGUW7Cd47Sp5UzD4Ef9GrJCyhSYaWaRTiP1QnEJ25FyusWqiUV7GceJCwnFkPzt8Y8859mH",
  "key12": "3nX6E4R3eythkvxdBHuL7BEZq8QUhpMoAczeJz4Kq9TKbtZjvqA5E4KLjMXJWRUMTMECuy1pDt6FGf6DquthFiaB",
  "key13": "4AKtid2JjwUrKWmmHSoyoad8f9KB2D6AFiY9hHJZN1ru5EDAUx2FYJKf3RFoDhJwwBwjkgJNYNs8Ch2JK5RJGHxL",
  "key14": "xYgR7oHFYst3kB29Sp2UJiLBWAhbJmXTCrfBMK7NHzLdaJP4uMck1L8Y7BYysYqDB47RSwz4S1sHCTdKvZ2zi9Z",
  "key15": "BhQ4dAz95yohbCmdfzHXCBNxr2KnWQk77sKR9kGgdurNMd8DiNgPEu6FEEcSx9L16cv13xs9CuEoPAAYWyPcWQD",
  "key16": "61q86dssZ1Dfk8c7e2vPnsbkwT8SKuTZTVP2AJXHpdP5zvBWFcBQRvCjkfe3wSHY4SjoQtG14whQgqTogh8DjZup",
  "key17": "5FwBrDt7BjEZRL8RADxWTFL3eMdKh1BNJQrEhaWc3fTm1JxjKvFt3FMwJ97eXLJXDHFDUnjE26ZByCHQ1Xk57QR9",
  "key18": "4vpqpppQdvfrHZ3sVWZ22hz1dm4jQT3DYn5WEE55kJW3VrTu2QU3NfS1ijQsb5vNNoajmwSFmCJ7iHTopyZtXbZi",
  "key19": "4r7QsTYQDiUsraYAuPGRJiXmsTufNuLrT5tfga4meLoe3kdMqk3A9HvvBo95y8H29GzpQ98k6E7ePao4KwgBBU8b",
  "key20": "5JWPxbGpq4sokLwYii353wM44FH9fYCXGcAQNczeC4th1hoon8fXdsNSxvuKsQrxzx1qS63j1mYwNQ3n6nGH49Wt",
  "key21": "Mak3CgSr3bsYK2VaDPCFK3AuP4yyWXEDaquJr8XnTZFYp3wR9eo9HgQ1LWxexb1Na3HYT5USSHX4H6dA8f2t3it",
  "key22": "3CorUXtuEHAVaurf6kfNBRp7yULGPkjH37pr2gP3XuSvAYoAjYTfW8qeGdH3uyd2V9Z8B9KMJuaRC7STwYWZDnQg",
  "key23": "2JVtKhyN1DEZv3YXNTbnFEAeqnQEuXH25X16YeaeAQmPTdbv1UGYvJnCzCgGW5bMBwR4UDhBqB62bgthPhLV3WSj",
  "key24": "3RYAw1oUgdkrpK7z7NNYKTpgmXExVjL1qdwSyqYxUcWtZKhYo9m4iMjSa9M7d28tdbvaZwKWKruEDoufBdAD1X8o",
  "key25": "23WQryJFrWCaD44vHA1Cx9VGQ9j9nfWreCM3Mwkrsuk9CUyZPAysybQv3veJHeQPbEFAzf2G9yhjfo9FiTUsS6Ah",
  "key26": "5fvGHY64FVoWCanYuELsVTbZAPjBc4AvB8zwUyfLq3hag4R48Eu7JhAtar2iykEDfyfWpdNRniCKVgCtZLKQ91v4"
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
