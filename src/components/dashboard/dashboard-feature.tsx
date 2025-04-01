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
    "5X51SGopaHYNGjqKa5VXpe9PHYpkozT17us4bNzVPXAaqdiD71PiWQN2jt5b1E5WqNJGeg8TkqfiT3YrQjCsyHtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42v4wBSrMZkTKyydeVFXaFosiy2kSjecgzGhJN6gRNDTc3HisMykf22LFQbQPuAtXnJamiqxhT9DUYB8wTKqYezj",
  "key1": "2GeKZPtEPvr5LnkRqEqeGPZxQRoNCSstNtBc3i8BmNyNw19yH5GfcL3xU5bYJafL95SG4ToXDr1dW777fv5ETovD",
  "key2": "4AaXy8ExUMh5MAtEQMaF5DXfddLRk31pZcVyof7ZAdf6yj427x5TM3attsaL8xSH4g92YuFM9Az2wsM4CZsyWrN7",
  "key3": "tP1MAC868j8k9He5LYBqzHswTTFBxdgBBny3uTWBnoXAVXgBsfawSBQmUxu9y3TErJeaZPr3qKCfBmtVhLnstMy",
  "key4": "2JLXQNMk4XgmCoAZa5WbgfARr45ieyxq4ZSG6pnetopqkwUYM1yrYdgWyL4dpjeFNm98FvUCfJ4VM8sANDXHjZur",
  "key5": "4CJv6RGbhkpwe3QWkt3TeWs46RmnB6qk2s1q11Qg6ZUbYoXutA5Y6cs6u6985D8W9PUaJ5qUdj9TfVFroS7h6V9E",
  "key6": "Xy8YXTFZMWKxkHbkerL5HPWh3VMbQJgnr6vfaKeBipbUPKQRd5KiV7HTHy8W9XrQDbco9ueMSAyURrBUc42rPtM",
  "key7": "TCiwdAXykzmkpNaD1b5rHQXmC3od94sW7skTe5gVeoDhaF26pJstAYCB6QV1o7xDpMa2mGBbuy3DGrNZj4QMqm3",
  "key8": "4mSj8deDwn8QREY2DEjGkF4dhRRcaAo4BGXaaCgxKDGAFHz2yRjhivgYiLYnuVzbVNLkVVdE2DRuUyuibPRpUQ6E",
  "key9": "472gHow53xohfkQ77cZkekrKd1BZnrDLPCjPFD9niedPE5uUz11xuzNcwKToyVoSeCeEidFPjbTobNDAPSpw9Tv6",
  "key10": "63jLWZLW6GDGMZuLoyvCqextXsqf4rqaXekjzMk8VkDHyjzefUKnrDUEJR2vJn5r14rtC8BqSNTdSM8RBUNm2SbV",
  "key11": "4GETUFtor4M7CMjnCVU27GhcR7oc9bm6ZEkEZYEMCbu8XJQ1vb1aPyiYbTAubvPeirVY9Di25FhVMwf1B7ChVbJ5",
  "key12": "2kGq75QJtyfDQupfjK2W7XRV6buv8PKR848UMmEWrEqwUwjtvZYVvrcYkjuQbc6b7Zj1ZnTgc1zMJyF8Yxypmbki",
  "key13": "36k311cfN5SfMWNtUxZDbh4hjNkBkM2YcdzGJPHuUqxztVszDbtxNhFWjRurm5xPMTnCqxGmwSzaBhVSgaJfbmue",
  "key14": "2Gf5meJ6MAzS3ijnR85BHycBzUDFRuNbmjCtWL7vCmKK9KYkPWVJMcz2576UsHPX1py5psDgqP2uzkSjRU17cP7U",
  "key15": "3JdtVRGY6J21sAQikJnx2s6aConXyKYsCVeUWod4HNrohtg5Q78P7geDG3TFWSkwN4ZZpXqNuwdj7kSksCTu86bb",
  "key16": "4Va82yyKjEJsh5p51JzPgyNHhGEDogEhwLJKcDjUUxiabtzb11jb8MKuY67oqBQCRqKUeucG66GoWMo6S9vxvnXF",
  "key17": "58nincJaAMJLG4d6vB4LiCAc8k4ZoVyr14F8Vq4gnjcvRBbiSi8uEc78sadxRoBTtU9fRgrcEQGCpof4EaQG2fBe",
  "key18": "ZwUdXNCp7pUfBHQpGFgH13FEfQ9vrX1WMixq5TxDuuyo8HZJkCYk1DcUPgdkXdvzG1B2haeryX2bFzzHwSdw9jH",
  "key19": "2yd6teWVJXMrWtcFNpJ182WPKmzborQnr71wHZ76Q9tpWrXeYyJ8VV6PRrE3nfaqDdLx9xG7VJpHfaadBXxTvYtX",
  "key20": "3sHvqkFLjMh6rRsGu5GdowguzmtqmUSqr3uexnyPSMaEeMZCmgDn6dtduygreQ7gg29dAawU8T8uaENBWJvWa7m9",
  "key21": "XskvaLQTD1aTZYNQRDVC2kn8Hr9xxveNFRHVwtryEVuihapUs4ypV7LQohCuwFEoa3XvvpGUGw7pavgSqrwffeV",
  "key22": "4H2LcE3jhji2ppbjvYGBH2rdf5vwQuYKNCABfAnwpFYcacu1dEW9z9zkSnRMXBCYstV1dPMQxsNf4Zn4C9vkYYKE",
  "key23": "4ibZc4hvT26riavr3nhxKd7vx3kde5poNgLwhQVtcQaKNTYx5sghQWniEccUzd1VLTfxsvF4CNj8mcwhaA3R6sUX",
  "key24": "5duDbXREewHzHMNkqQNtoL7QEH7LyoQ9JgvAbatTeCu2TW6MVRzr5DEVjdve4FymWWgCPRW8cqv6BXLLMcZ2noBR",
  "key25": "3PS3zP7kL4KvchEsanmqNihK5p9X1FfEkHrXaKJJQheuiz8JaA8uKLaLqk9owSiC4ctX49VhXRjNzQcEEgQ14GT4",
  "key26": "3WvipgiCFqxHDTRkAnJHmA3pXNPKMXcg1NELDbka1Na2QPrTgc1HGyii4veX8gyoM4H7S73TWsQRuMMf3zcCmLKb",
  "key27": "5qyCf91qeHLQKw9w6VzXJs9QLAbBGkT8NBpFCptFsAdJkiHsZ6ymqzNaKjoxzC4MahsLiZtzFLpuHZD12mMjPH47",
  "key28": "5wZCEzZKe7gCsVn4Cb9ms1QsVNPM7m4MeerCmWhPqkWs7Z2JCBQUS4VcwSFwxCYUvCfBrohisqfc3ji7BftoZdqk",
  "key29": "4Tyuc2Fs4MAoNcK29LiySzTxBqqTBAkgVkJ7tbMVERbdKeQQkbSwp66adCFzgYPkZv7Gzx9Y1fGezubwbE9cdzqB"
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
