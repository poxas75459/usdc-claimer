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
    "5FULYk8cpizhg1aHasHjDACoGMSjbe43RqFsmxE1TGgjSZjHvYyPFzegq5yHDtaLJ1xE5m5eQYwQQKfs74FMJUSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cpKebQaDX7UqpF1grDJHty134F9fYvpf22gDA4rQeTXJNjKyK25o6TRr892nWSprpJxKM1bRPCYSfHGaaKk77fh",
  "key1": "L3PKbc4NZcW6vDog8pnC2Y8JtiAkj6cEC8phENj2BqmQSjxJFoyBss5KudbAVdLjEanm2EjEqmF9vuZGyEzFF1N",
  "key2": "5iNeLARQd2ZfAURf226yaNgr1mrH5dm95JWccdrqii8veMqH6Lqy6NKjdMRegtsHmUyT2o25GHv1jhe6dSGn14Db",
  "key3": "2Mz8ZbcuXwi5j3ckpzPd7ZHDTHsWkv1PP9uxeaNFJ59nfvgUa3SNM8WFgxrPzWcTjRtUwbg9JmHSCbSWDavaF7Ts",
  "key4": "2f7HbsrcJVThDNwqQekFWAJZMM6bfzrfH96iW75LeEBSFzEAdggFzPbntufoGkL5yoYgMXsULNwSYJ7LHV2BQ3Nm",
  "key5": "5QWTA71mSH5WiTTkeRe63WjmyQi9zPorw46XpYNVyXfMFstjUmBX9EhipfTJkLLAHRvKVhwrM4P1Xc1pDFU2G6tP",
  "key6": "ewWafEX9xQwjqrNFpJWsE6qM8YxdVFyL8haZUjWEuo99md1amCxjgtjsyRx4wdLf843NFFWm2tqS6MBLeVUn59B",
  "key7": "3BUCGeFneZnim2y1TAfersAnryuA8HCHixjfMeTpYJTdFfabTsq3z5pdwdkUJteyCkCv7PzoeRspWV4CWxsBj8Z3",
  "key8": "2SesL6KFS4PU2912yrnTNmvRN93DxxvfJc8cBcM4s8bNRMzuJUqbNsKwMugjPjqPYErmyk6Jn6Yj49wnHfJKs7X3",
  "key9": "MaQbJWBVU1PSb8sgBt9Py5JU4pW9WvjzxG3nuDqUJutDYJQx3B1gyz2RW3BaohoURKUSASrWgkvZb1gYcEkfcCR",
  "key10": "2VwugThecta6omMsfVTR6fd54a9qNMwcT3ezKDqPCpspQWoZN431gQzZvvTYVw4qhJrMXAQQPiGoAuEUNrockUe3",
  "key11": "44AJGxbasN5E8kuudTy9RTkG8Jb5nB2DteFNJnuRwhggzBse6NM65RumFWCdTgG4rAf2wZk5Et2ZewWEypcZq7jQ",
  "key12": "3xKQrGfLuDRsk8wmN8ePpn7bsSkVDhnHmR5ySgNuBrVyzZ8UuUzXoEiPLfKDtnzeuL8Q3rZ7aYsCFAnD2u8urR6X",
  "key13": "4M8ZRyVnVMgLcKSdrGUZTcEVMH3zHoMN7CpPGqx7yjFWhbZa9DejVmL8NPxqRvFV9dHfXeU3T6XbJQJfkRDb5BFE",
  "key14": "4BStgBSwyqkFhAdjFTPwWwsnqLCmbcgBKojN9LGRN4ENYJjWGFm2UfCrXjvMEPbMvCNmaxzCVk2G2eBbWyBvSG6w",
  "key15": "2qzr7denMoo1cMrynEm1iCjCm7ZibLSfBPvBX2PzxVqsSiBeyM2Xo9hajFzDDJHEiKCJawnCx15CD6QyDACaWjhG",
  "key16": "4AFTqCJBMpaZfdm5kQF9PR4sPbaPJJpNXKTuyyLLXSrpbJxhsUGSkxKxdaY41mVZe1jzQcK2kr9pCe4CFVBRCudQ",
  "key17": "5yGrsruzgsrVzgqYYs5erBXC6krYVzK83aCjBubS4S9ypc3psKapCbUvy1DVeoCjBY4u3NpubZ6YtjcD27h9stPK",
  "key18": "5egJRp2K7oMTMnUqcLWaWBxvmfNozdG4DAVo3XxddDLQLKrZk9R26p57hUH5sG9Kp54i3M9NMWmE4rYQKBdE6fSr",
  "key19": "5YLv93DDkkESGs5wfUaQf6ZwbecmHuYqgVaWY6sNdU83w3sxGX8QkUKZuWgmicqf9uxP6qyAsNKtPcCyVfjJhvXo",
  "key20": "4DhW4Ggj6TWDLzsybszoAYFzSa2gmbkLoV7q7bLAfMUhdpVehjHBz7YVrQtmm9AbB6TA1K6GdDLya7VZH3WzUbjg",
  "key21": "hxegJi7R3VxTJrCmeTjbPYaebmZJ9V7GR9Bwce67ysXzQ6M6ngSTSTxoXDSm1siGnC7s6NToKcBQ2XGjzjDRGfP",
  "key22": "4ifiZWMYq5R5c4amkvd7z2oha33Wtb7An1HbNEi88JXwyF95dmXN8ctWBPPguqMthdhyFq58hyukwFhfT9cxABNE",
  "key23": "43N5jw7KjizwHwbJbF4uVj8EpVQtxntMr7XvKD8HtTtZTQ5jevnrV1kYnuYBgXKtmbawxuHL9zX7xD7ZGvXzM7Jy",
  "key24": "e8S7Tu24ep8vzd58X7drekPoSgADiJ9PvXH88hrbQ8da7dmxzMLDjPGNz15tWPzJAuyoyomCTB3SqynLpuybycQ",
  "key25": "3DE5887CQbHpcWjxmfa2esJWCgu6tP3NQiJwqiXb19VxhvcqHJgtzSoneqGPELdPphgQYX2zyEWvZ31ioSDu1FeG",
  "key26": "3sKJ9R8Sd81Xgtjhx3K5VG7zEKruGzB66j5nY56Znx3Mo5VNaMT4DJvRvSFGqHbY4XdPkXaBu3o31PpZmJG2GNtH"
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
