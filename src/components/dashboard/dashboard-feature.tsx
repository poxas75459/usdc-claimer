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
    "48cinDToFjj43P91ZYmRgD7yUNR7n7E4yk1Yf7foxkbCG6hAyKgUACfTufyfvuZKa4WRprVrBRso6iSPcfEDzbLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ER6f3ShQpJ8e7vR3bjumoXYdD7skJULeGUmh5MVsoUCFL3U3Jd5PcE9DHhki5CA2JHiLmfN61DjRs13mwSJa3F",
  "key1": "4HaTSUpS8VQQQ6sKxWdWdLbxQNgPA5bjgPjhyTBXqFynP5876BXofZrCSkvALNPKsR3QjuqFgiax9uDeJ3JRSzio",
  "key2": "5KyVoQ7FJi5bjmtJJs6CCensCQPjPoq4vBFN8Fz5qFWD415Gs2FWBgRUnCyST5aRLGyGnCTfm9jJDjU6XvSDGYLh",
  "key3": "5NvPDS62wuCJU5eW7LuVq5Q75qJc9mDfw6qMJQFajLH9ZgpChz4MQsj1yVzpiEoHMjBkj1jevKuHNFaCGWLjpN6f",
  "key4": "3HdU8kYVAyjZFQPfEA1BfE3uz5KHZT2WdTSRS38ZJd7Fvzdt26HxjeXMW1MopmDtctJcsbGhXQ6gpfqRrcGJ4Cjn",
  "key5": "UxcmjU6edLY41nqc1U4gmyrZa8BRyAR31bevufqANWkSraAyg7Z5XijJgGTm8W63ptZBQ4YxAhkiys7Q6ayipn7",
  "key6": "53Q5uHwS9rRb9weUDgLvDgwJ9YUqC3e2jN2fRt9rjBhfAB9LWYkX8fwS4xg5xKghRLJ5GsZH7UrSU6MWYgLA4iYb",
  "key7": "W59SKCRVtAJhvoiocirgJ86srN221U1XMFoCouXzsoCWXhYaP7rPDsroyXT6baCMmktZnMCrmCr9qJ1A79AS16t",
  "key8": "3wRwd5PJcp5TtrUUfAHNQS7AM7v7WzrCavr2s83VzjdQpT1MYETFQhe88UsGYuunpbBW9Wa1pWcz4pksaYqdFQew",
  "key9": "289gfcQvBtaYsXhPF8MicDNCuw5RSkawpPSwL3N5kxfGnNo3reaAFZ7oLF88U7gxN1ixaLXCnJ4BqpM2WVjwvHFY",
  "key10": "5HqomgDdarsi2ZjJHm4aVX4eb7eG8vHDB9TqbJ5RF1aBAyUZWwAY5f5TpQFDtTRLB91spgeWEW56LFHNq7mL1GX1",
  "key11": "3b8J4iFJaBAB43pgdQJCthHLwgWshG6kQjnwxE7Qc8RJWXgH2iiYVxwuB46Cu9VJLqGGKEtkQxTowSYWhDL3vVsE",
  "key12": "23ZPf2RSEMj9QdoUVaM8XJuBZdBGFLaG8YmYy9u3eWatSKBGHDmNNEghRWFwjF7HHAf9MSttpzYNDJgVPsncqQjg",
  "key13": "3gxWsgRam5EHgMdB2K5e8ZF5q9gHoq1PvZg6MwkHc3wHzkUDwWBVfzH4n5x9eS1tfYtU4Mr7Q1kQnTufSXrcajWH",
  "key14": "5ojZXQs3yXxjeLAC9cD7zfkjBfBjqBu2TjvXhCHvJoCYVTiLpduw7Zv1Tpix19KQvcdYi4ow1WRHj56CZZ7BNJfk",
  "key15": "3AZYhKmqAu9hnggC54fbvzq7bCVrST4y7pEfknsjXvkH97ZFGs8a7REb6TuEzEBt34Wcrdium1CSJ21eh8bckZWx",
  "key16": "2p2p61wuWqyXauvBzQ3t5atWYNwnC76t5B8WGAvjneasUGwusKfKSR4DNpt6MGcPLiU2gaTvz11hmGfgVR1aCQq9",
  "key17": "3B41FQuV5CGMEQCnbnKwZfAuTvsYLbKH6MC1u5wfA89gENmMARPHDpdnznuocitoZbpLTqTSJKsWB6gDN82mRYRG",
  "key18": "3p2VpFZh2tYj7KWtpTfdqrPTvoxjFXHcoFZUTphvCdfWfnNM87BmykjRNf7MQqXJmGzTE1KdqzZn8ypDRrrywA7q",
  "key19": "54RgcmNKUT5r3hDKZXApRwHBvyYWpXU14CcdeS7pJQMK6NBWPteNDrUq3vR3rrWFDjPCudyQxoJoTxHrXT6wiKJZ",
  "key20": "2SA1sgnv45f5sZ4bmvWYjszWhP8bZkhvk8umuvvYnvBNYTWWHc5x3vrFJPR7tFj72kGAC83XQa1ASJADgiCNoswq",
  "key21": "5zyytZdq5rjV7RZwTJr581a2oqnPYG1FCMPfHFBEJxSxAqzBDUcbghMK2kr9gEUEiTZpnxUeYwqYNSznBmCskx6s",
  "key22": "3yHt54PMCURrhoeHvAWKRxmLNvs3wv7J3CDdV4eABXkZ4TZNf4uuhw1mH4TtxSy91MQ3EZmhzFkd2Wv2nZeZmkPh",
  "key23": "27pt13mwLFv4Zm1eJvLRxNUD5uSuG34Fba9iYQUT6WNLVwxWEv2PaLkBpt9aLcCM6tsZUoLpwQNMjYVXa7jx3PvZ",
  "key24": "fRX7KypwtzmyYYRvNcc9gprLDQwCYPHJm1ba1M4th2G1y3smwtuSDAetQLFwX23kbaBf23i8QX66tgAKJGFyk4X",
  "key25": "scrQkTjtxd1Z4tJ7WezsvusFU5VoD6ymzDe4EPRHDdhVErw2NXcvPvRrpfjBYWAba5zdPP2dkvsKFQ3CaL2B1Un",
  "key26": "2WbjLN1PHkjeyAGfFct6Cpkwztm5tVPhGa5N1Jo7SqaVzRZhVcAVHgj8L4kYW3E1BXSvVafu1xV14XtiWnSN3QA8",
  "key27": "34PpdEwwgnC6mqqvxgKauweS83P37gSJpy45rTUJzkm7QKYk2LUvVcAjwCmysddBNac7ZUbZjQQHXJDXFtGRrCg6",
  "key28": "4weefLQNX4AWwVY6h5nX7xRT9bzREmbzjiYK1anHDHqVVSPr9CHfvNGgnsmQEwx11WRjPeuU7wa1sZLcaViv2a37",
  "key29": "2GWDDyKMCyAE5TDSHpEmyFFSy2hWP1nvHKUe1irJm91DZZzKDr3VN84ftTTXMb3x3j5CyG9yPDsj4avpqzN6Rb62"
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
