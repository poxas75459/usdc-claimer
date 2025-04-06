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
    "2QN52fLPCN6G8iFCgqZ8yfove7CvpKYhonzbA3yuHk9wq77rB49nnBH1JtiDvHiM7QfeJZXJvJvC6Y7DeaV1PF5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cy4VwAYXeUqNqk8NjB2NeUdLoPyr8fqEEkJE3wiuQKqzENntkbzWPnz1tCMjVfd4nRnWQwdkh8xKegitrWPJ1jW",
  "key1": "4YwTu5poVZVgvMGaK74LYcyG3Vd9UC6aCbwELJn8mGMQKeR5BmKJ6Z85yVfeJKqNXxN8pGNhoLB2dB3jc2obe1P6",
  "key2": "2EAtF9rGVNyPGkuX1vX5VZipv85Twrz6wyJDfvCRN3ux8gREoKNXgr2NnyUzxtJbLo8MGDv6eHJZCkmdiyHtbPNH",
  "key3": "3dMmkuvZLWY38FDaCcSaG9jJtRm77Mf3TsSytfPkSxKEzaJv9vEFfNzmFQcJpjS8cAKLjfniMDfhZZ1g7JAMQUou",
  "key4": "4RpkKLWk7mPqWjmHsMWH4FBSMCRzzDhdHkEmzZcW5LmmZKcQfdRbNq8h1AnUAJwRWYf7s1fSFCJLFEigtcMvBRtR",
  "key5": "4rWWyzg1c9ZkzSg7p2e7M3KXektHHbSKptoprNBdMuMp6gvezLUGMcjfNmg3nUUXx6cYSF61BKHD2s3zNDtuJwCf",
  "key6": "2kMSwUGRo6DwkqQg3ohRGc6Mq923ZKuxkWnmRUmfaYpiYk2TeeQHy8qVZgW3bzbV6TeBF6dqfESKbY8mn2EH1Pww",
  "key7": "2Wy85hXo9Eh6Eh1nFCzoUpfobgqoz79pbjf5Xj7jc82AGEgx2n1JxBWB56qcHe7zrmYfVKNz75L3jEXRyRnNSJsr",
  "key8": "2mBiWeAToAP6S3jMhYxPiMusRTmomPqArnybFDmisTxrbpaGH8E5vBot5geFChXQvzfcYD5sKDWjriAaSK1tTWSd",
  "key9": "3BnCtNcW1QbNcaUU2TgDTr1zYcAVDtdKR3G4bR73ti3SGb6W9utGCANPfPCBCykeLdTowcDPtfZdzNMhZYZu3yDz",
  "key10": "5WG2F7KYJdh4aHNaVeA6j8dVXGDyXJw2cRfXwQD1XWjFbSspABRrQ84g5HDwWDHGDUu4aW6Fng1Uiq5WZoVZCmp9",
  "key11": "ahBxnLNbVKMpCo9oT7CtsUMKKTq9vGKENx82qommWhyTVifxYyn3mp9s4fpbFmoKKoNd7UrxaowWXxdt1wY4fxb",
  "key12": "QXhBDKP9J7fzQjvjwBvg3uzx1WC2b9hs1nRf3h8fGeDnA7Q8ovMjMen5zRFk9vrHMszxVkE47UeHP3zHsP7QnwZ",
  "key13": "2yDSeUXCLnMVBGwhHbB8wa3XnbdgM9MJdJLLAckusBBvfSGuCVBTYobCPATvB996aDj3xi7rYeixFsproKbRZPLY",
  "key14": "uDQjn6NkzyUJuE5ehvYGvxgVqi2oGkrPiPfjbSzfhrzWh7RzdDWgByDQMYBgxjpVG7cNcYhmNRByg2LoFzYYM75",
  "key15": "62bmf9c3DZat53zvUxdSLG7M4HNBnFyyZPn3unUkrDphNysPyoYFaN7B6HBWqjcqE2HMq2YTxwsSDbnN4GppecXm",
  "key16": "4gSCadZQaSDorYF2iWSS7hn2xBBT62EdyLeMjXeeDmiATTwBqAR6oKwMvbAMFbqQhbqsiabTh9VSPYsZpiAEia8t",
  "key17": "3tb93X6vqeW63eVsfL41PRqTBKGhLdVJBPtwnb9oxXHaBtZAo18Wfe9jan3ismz5wXtvnVXe8bWRRHAF3uiGeW8r",
  "key18": "375Y3BRNxEZBB3goVfdoEm3WQJQEMKBzQzbmeHATfmk8wLBGc1R4YqWLCnjSxzyXfsxouC7vKZFQTPhsYhn51kf5",
  "key19": "2FgzahWgGUBG3qsSXcLS2BYysqTn5fnGucYUEM2KGxnQ6MbR7VFht8ivywuUuatrsDWHGBEAwq5NZjsooaFngxHA",
  "key20": "3tQefi2aTi7tcqVYUSGSQXkoKksvvFM7Ty16MznJ3wexxMcXbbovueRQDyC1Unrd7B1u3nr27Nof81wzABen4kwW",
  "key21": "2MHDsNA4vQpHWbwEHsehe5JzWxbtT81FQbDNjdHjY8uovBJtQyxMT3cepbRyNGst8ZpJdf8MwyuEGMXTACUhaoTF",
  "key22": "Wp4xCWEC4CHsAz57p6b12zqN3iBf9KXEnd8StMH5hx1xHYoqMicWkEvTifvjkvWhCDsHeyfk1mfu1D9TfbFnxJQ",
  "key23": "2oG9PTBRiVxKDCQYVbW3ASJ5RroU7gvMnJrCYWxhDF9VTdzdkDveDoj7n7eywHase9HMVqNqx93KLQxYXNjtNPdU",
  "key24": "4FEU8FH3pLmiGt4fzEtNkKQdqcRD74PMFKmfWFLwP3iJYqoRP26bHxGW9hFvv5k8PbqTUxzCGz8JDBu4zwu31UQa"
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
