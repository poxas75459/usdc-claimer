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
    "48287CmLeD3DcThC33TttmkJk3HzSZxATYhbzGTXod47jNpJQW5oeruhiPCCuKLKcSuwVKk52m3WMLUdR5CjDN5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t9cWz6mtb1niPbDVoFRHupUAVTqwwq3QLuCtDMgSVQctVYF42H6cmrRWD6PAMjPKuFRA2pdikxNd6S1Fxw2yKYF",
  "key1": "4J4hM6jCDQizDufF7ixB48souZtLEucAjnmdXeuzi8VbffxnMKBbyK8bN9nmQTsQ8F7xWChtwJL9jXM81Mr89zjk",
  "key2": "2hKCxXrYC2RW2wZfXY3VLhr3HZyGMYDvNEhkKpR3oUBBQUg2vCzMfxoPh3vNVLrPxDvLJ6bnvhA8QP2wZxfSV3uu",
  "key3": "dhACqweJa6hxrs9hcScg4xw5pPGGi3CVyHXYXuDKSGwUSWsGyMta2cvr462S47bcurCPCBp4E6RGYetuyYtnodZ",
  "key4": "4y3ZYmhvGGCqKsjb9hNzCY7Q3ghxT3AUmnZg3P2H15t3H1nam5WV2nfDagYh48Ebyd2YgXQfHx31JgMywGYFS3Fe",
  "key5": "4DsgCMtvvXPTQyRN2LQuYhY6JXamF7hdCK9tsxwbwySRHpRkvaV67nM1dW71oBsqSK5AP35zwEBxMcfn7NJRTbn4",
  "key6": "z7ZuXJmxGCUzJsnfQwiagiynbpmKABC8DMnJXwu1WbwKquRrydJiRgMskzY4qbq9mozvdJ8XueQHeUWUHECgL4J",
  "key7": "2t28JSjM2C9EgJmaVg9QPr2C2nFDdgCmxTH2ajPwMvJvyy8krpvkikLdo59HWi9CVyF8AiT9ofhL132DMuxQ9GNc",
  "key8": "a9r7MLs2JLvfjL76saXu23nxw8aNV51mrCo5v1xwpZVJUcFZLxX6tZeZ8PG2gdR6H26e7rxdwuP1vi8z4JJX4Cg",
  "key9": "3TJRjjSRTS5GPAPLjzU7ANFFsK31s8k5DSyVd5uWo5n7eipxgwmFvhczi9zuXJGRDjgFpaqeQiqThnmLWth5eRVU",
  "key10": "4pbuRT8S83TtyCquoYqb9odUXQiTuHmDsB6nwRprK9h7wSg7qvh7jfMfE754fS4vFCiwx2YdzCMonvGhSVNZcTiq",
  "key11": "3URpgJMecwFMjGVNpM8p7358ijgT12ALXkmbACN1puEtDiCw7U4iM45ppiLXJ9xcc4xoWqemm9pCKkSQh8GJDDs1",
  "key12": "4DSQRj493BS3pVgLEeGRZDHa2Dr54bgLJ6A19HotfSX81hPQdxj73A9oeVHofSsEfuyaKUMUM8hd8DMg7QdQsTXm",
  "key13": "5i1VSzoqfck9PzrhqzGdU981vgLT7pqT5ZHhhD5AThWTLgKooxHYo2Gx6w5BFBEqXJejBz6z4hyH6hVn3S4viVpg",
  "key14": "2U6UnvEj4x3FPFfNuE15B2ewNYN5RCdbwEUvM6eh4XBj5ZGNFp8FML1e3jL75WgxRbCahLSFiRiJBtNu4TpLHn9q",
  "key15": "7BhzEd5uA8iqLDRiBeUnkuffvXzPD2DC1cKkFH4F9aqSrYdKJwo9LRagwXJ4V9RsRob37DgQkLVQvUNybLsUcyQ",
  "key16": "2sLY81sfQWL9Ps43vwMULT1yt7NccpTSggQhCmKWMKjUDJLEGkoEkAyS9FdNffyvNcyPHTyLkDMoSTb5GeKsCzHq",
  "key17": "29aiXLpWnhEL7Ru9hqySixbSa6oJocvLSR6r9GPBdTjJjhVKZJZSUi1gGHraDed8ka9nUY77UnN7ZzxTpRMiHWfF",
  "key18": "48ifbTKzKKkrFUTYhKM2giyo1BYj3UDVsQGtC3fvShnfMeo5zxaEN43LUZLM9TKZwLyPiBxC6mdzcpqPcqNR18fb",
  "key19": "3zD7uN4kDkFpwQNKz9hnKiznVjADtMtGSBhuK4D9cPgn8ZyyPJAsP8zWbUgSnnJdBbnLHhFNYER2QHuqif2f7hS2",
  "key20": "3RFSbhQKrYQDYhYewU2XG3FQCSCA8svNE1n1cPAM6rwLDFMnYyU3isxJ4P62tx6BvPKTB1Voi8vQZHejCtY3QnBd",
  "key21": "PdeLCcT6eeeZ2iGej3uvJqz8GqV7dvUcAs1q3SLQKV7bhnk9HnHyX1WkCFgAujrAg5bqL6u8pjVmTYd1dcNKe9H",
  "key22": "4x8z9CwLTmFJHunZbEakmHXcXbRjXKED98ehJUBL2dAbFY3iDzeUQvgMkfuztBdgbisWJFVEsB68Lyzfz1jdDADr",
  "key23": "52RjW9MPunkEUorqdjTVPYgMHXTPtubFNwGKTJboS46DT4ypgepgviPMx9rjBvTmyCnM1LeczqYnF7pGQjnD22MH",
  "key24": "51YpqPPiHytZRRHKydaGb3RLKTFG9whZv7JGMiEftSQwYU8HuR54nsVdg2ij4AirTh5ZZr8NLM8etFaEaga3ofpv",
  "key25": "5KWxacmYn7MX18GSeJbiy6zNg99jKjSvWiacoaHBduw3CTaH4XEPyvBUvttUpdrrG4XYzAh9ipy8iT33ggY7TPGE",
  "key26": "59FQnVFNRFcFrKooNWL8ifkzoUtcevQnppKzCGcDpb8PCU2yfxSSZkaExw5cKJBK77uPhvTbqAeuXjU7BhHuNCE7",
  "key27": "2SqD9YVxcLRTFAtRSFuZe4awHQQqGXDwxM2ybkFqxGUxemC4Uw5MgExMVR6v2Q7hXe6JvQ2XJpvM26eYqRjzYWxb",
  "key28": "3vg2CdF2NEMRzZN5uZcuey8QtQjqreUhnazCJs4wWv5sUMETRR9c2VS1XWrX5cy1Nn37nbkCrKXeThUorJLoMpas",
  "key29": "3N9CAmKun97innFeWRBYvk7y2dAD4jC741xbP9Baa5gcxKn4J7EWorSSGLxREyMuVMDwYH1xKE18YVG8YqEUW1W7",
  "key30": "65Sy2vBx9ch9THZM3PyteGQQ5sg1mjHCBB6GBjePnFW294YtW3XhChL3nfjwgHKhUAFMjrWqyjbrREq4ydBdhQMr",
  "key31": "UUqnPnHEPmzXSjxMhKWieS2BAputVXJypikVKUeZYu33v46GoTA554X7NDexwnECUXCR9rWbrVbGcXAsJtNBjcG",
  "key32": "2d3TrYFtSxzsW2jSkBEooWEFMR1Y6ysXwQfT8ySC5UdGMhc5LyPKxkfSDMneCMMYidJyPQhqLHP1RkVXzjN2w6o7",
  "key33": "4J8Qjbpm6Qn5dVDPyjQpWoJzL8Uzu76FXpwmxYoKg6sW3Nm8dm4skmzXKMcWAByF7ap8kPqgF6SNjNmNuB1G43P7"
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
