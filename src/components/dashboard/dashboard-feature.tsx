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
    "414xRKAC3jTthH9W5xvX9Qc5fk3Vo8oCzpHnJpJM19wZyVdPpAgLan9kKJ4UxxwZka45hmf8EzeFVWix4xXzsxFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TN63fpNo8yDeXdqXZi3BS1uPbJP4aKKDdkZWatex4BYR9AuRiLRU9NeyJFR7y8YyZUATSHcs1iVKs5K8zHC8o8",
  "key1": "3MzLKYJzmfG12GB7RdQ7Jxm8qNMf6yJHdvciiqhQgGTdZkEVjbnCvN4rrRd5opNd3S5edUroCE5k13kDKP1mnpPq",
  "key2": "5jRGm5g2bvtZUNoQLmCqcb3ANQrc84dZdmWPUAnYuhSiGZqwMCgPnpr4MnmEVB6WhGiWs178wtdqyW9ujxsGwJWU",
  "key3": "4deekZ7aji7xDk8r4tLssS66PvCMWT5AKKbkY663hwALiU3UP4PZ2NsKLXhYvvyuv7HToGYubEQa1joe9Gq9sdan",
  "key4": "2JxYTS24YhTo3akuNrFbZnC5xoCnuMhGiXwKR1XD6gjoR33vY8oX8G8Na9UwT6C1QQqQ6nXntmiDE32Zx7MeDsGY",
  "key5": "5avDfUhNoJaRGBwtuZaSCvkL6CDsnKRosNVtgpnKjnJSNbi7DGmYAwF4evJVbiyzBDa91pAvK274cFJSPKZZ3MSh",
  "key6": "3LkeD7opbLPrKmQpuLxtrWWrLN9xKtWQRoAuMAghN9fBXR9CbdJTTzfbiZppjbyWD7ZNRJFyRHsLbwZrusxZ7Xhu",
  "key7": "3uKkpojrRakNc89aAyBC82zqFNoN3WWwgP9j62sXjKj4JJADFy12b5HzQnMBHB6taSW1HuqTPngf3gd84vxJEJtM",
  "key8": "2hP8YYCJ48M2Ru275RWiariUP6rGMobiKfkt6T49ZvRSgT5UWGAufPoemC5BgffPeRBTPtnFQp8g9SgpfLYXSQfd",
  "key9": "2XVh49gfhEKkaWB8JJWt42JbYvZQvfS8TfDte8q5dJUfXU9XLp1Gy9y7KnDxGE4zr1Zjj57T6N4vu9ima6q5kFP",
  "key10": "3fKo2phrtFTvJYUswNmVfvEo2dtU7PnRdFuPNNrRjdeVx6K7mvAJz7WWUuP3HsgPK7yZseZtxNnozB6PHxWxUaMx",
  "key11": "4CXbWCSyTnDptqjpAQfD3XxgPDN928U7wZ7gErQqkHB28MzmkX6NC4dzCVE6c8B7QhH3hhDoyVXwhkhvc6vmt9yr",
  "key12": "jv4rbxCzp5iudNQThVgTEPUz2i4n5BCZHmgDRF4ma8LJQxTqKrUNQrXXKFrBRdpTqyUdaq5JpNfzJb4Ej7GgsxY",
  "key13": "3vnG5szUq6GMvnn132SAF8ULx3Y6zXR7tJ6RB3zVDyVucvUoiX1ZkhSuYA3c4ghZcJXf3ct1ZU26mMzbKYXU2LRc",
  "key14": "62PKiGMpFi9dfznTTuoxrNw2qGkvb6yXJRdrKx1Vs8EJsyuvfPuc2FqigS6bwHFJnf4TQoahmE5GJt3JkprxZZm3",
  "key15": "2ToueWGxfYRVAn3QRTXBTbF3S5gi2quGuzZ8EERsbCaV1n4XXxy2uAr7ktytjtzC7N9jackaE2Qt8s3gYiyoN3Kp",
  "key16": "66NpqrVWWYXCMVYJe2wNs8enwqW6warmChQxa1tATB1KfvosJ4QphxnkzkJALiLpPdzRtEExWcfG4WSC8WWfygPa",
  "key17": "mo3NjjG5sE8k1qgekBWyoCp1YYJNQW4tRMpqb3kfTcFMNifhaJp96ghPB34ZHrqMhwGFNBge5K67nCCEKAr5B2W",
  "key18": "KW1m6iNPsDNg8B9QvhXbsbqSbFK6GUq7b1SzGuE2M6aAhwdq1yAvmmtui4yKwb9U9m1xqP7y3fFewHxVkzf1qCv",
  "key19": "3p2uDnsCqXPca73Nox89uzEWYq51hdjyAT1Cs1VPB8hFPQiuFxE5G2yU7Cc6o4CKqbGykWcNVmrAoZx65ct92Noa",
  "key20": "4ghp5GpJszeDQuKtxFmrTa7jxdmv4qdfpB3tLNqHxunnknBF2mYrvMQEmSKEAKVoZQ5zy5do7D8vaBDFcucGcYH2",
  "key21": "35Z7ysPmh2T8j5ij3jSQYMC5QczvqXw4QFC6oDStTR8BC4L9oMvcEJnL3nXZJyFfS5yPLHLkEk3JCn4v7Znw8PVA",
  "key22": "5kngRTnrz5E63tnaXXfpX3ophxTgykBfYdDiknwdnBBGpGhH8RUWi3hHegwvmbUztWHeSWbVfRPCeHvjP47Htm3D",
  "key23": "43L7tyMWiNxQuxdyEN5RVLAiGdd9pFCXzffrN1xMuYnzG9ae6peMQVNYUGp77MAfYiTSn1H6zHQ1fGMmK6XGPxHs",
  "key24": "28H1bYrhG3LE5r4UgdVxcqhTtjESNbLEM3DEJCYAPW13sCP6VcE4TJ2dQc8rFvTNExDfERgUZ2Ao8XmMJahe697R"
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
