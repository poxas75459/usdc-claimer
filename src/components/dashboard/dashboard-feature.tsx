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
    "3MVbdXxQaBSxF4iSsGkEWaeFaQFBgTQ2MfthwYmycUietMcXh273R5hH82rcXr1QhyjYg417gC52nuExeGtXwwG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vyrf5Qw55rfGmWPeUt6Jqb9i4yskQYo13B3WccqK5sdM5fy68pCm59zRvmoahDnc1St4u8kvHpFLuXBxP2qxskk",
  "key1": "smwanXrmvFfhkPronod9qrnVYeUVzSKsMEXaJpb2X3hJX5QFgWHrx7kmcvpjMokBe6k1FB3rpprdSbFmXQyacQA",
  "key2": "5qYUEv7wZ3VuzmNEbKfG4hqBFyuDmfHBTh1WtRKKSBJQxX7XCJELr5Et8WB1aceFpvkFjcvxGPMCFA1spEs59eUM",
  "key3": "2mPvGUMHvrk6FQ5EgHXZMCiFzfyZYyheVsM7TperWS4v7ediHCqqVsxhbuvLgcueayoY1sMNouHBYqmcooBg6EiA",
  "key4": "3W5t34WQuthAUYj1qpb3AD8bSmTKeeE6kxgzzXW1SWzHi7QH6KFHXFD88UnxMuc3xwpz4cskUa3FBHHqszbWrTGo",
  "key5": "5P4tZVEUvvA7CcDX5fZdRDCdY9Jryontu34idAYB6adBdyF5XYKyrkEGbJwxA5xBudvnmEqNxzzo65UEPdsMXA9f",
  "key6": "4KkUpZUZAkhuATbCDLLgnnboE74ru6QtbnThdwnPvVKmHntTbhTcDm3s8VrCACLutd8kC3HjLWaXXnZJ7BD9ngEh",
  "key7": "2YmgPbY46PFUuqyTwqUPYo1rGawz6EWdxbnnNwX22qBzvomoRkjLfzvVuRRx3L9Mr2iZTsfkssnBvhVJbidSBKXz",
  "key8": "298t67bJVLBYCb1MFkNqrEdU9eo6MeYohayr9oDy45PxfK6WhETGK2SEF8QnD2VKjTLFE1Kub5QW7YYQHiWAdvXp",
  "key9": "2zMctYmX9VAqZ1usNZ2jxzd5ahVchg5pbfsp3GFQyNfFwJZMYGM52QtEZ7EVZQJ4iAN8v4M3SgB3NRuvFErRP1Kh",
  "key10": "saXUtScuvXbJYmJsq4Nd5R7GAYwqjUm9PU8VZMCVaJtF1Cmcti54RTQTZH7BnU8zFp4gvGbUQuK3c7maFXW77Pa",
  "key11": "5DoAzsUX99sevqG7h2HBqZKgjS771P4FXw6gD9zuUkJcJkaj9h5yzrHqNjby8zeRyfqw6xT64tUdW2RLETZBteUY",
  "key12": "2Y4iqJnQ41AhzAZkmTQgTySMYUZmansn56USsrJ9jqJqc7tY9XtYBMGubjMunucJXer3YQj7sh5fqWfU9enX4H2r",
  "key13": "tv4t8VmpGFdN3boQ5LC4uWvrV287u1QTyZvdt6Zs1PPTW38YF1y6H9sqcCVZgLhcrbYjptgac2ExGJmwBZ7W1Jz",
  "key14": "4hnhbQpRneoeeEQQDxo7vUbzgZdBBDmLXwrCN7ejSidRX57op24infCwWvB24myDRc26sMSh5PTwJ9oNaS4XMjUh",
  "key15": "3cR2NHz4EKM7Pz9po8VJqaeCpkut1Jp9hC5t4Vc1xePjMVYkbHhDYQgaGpTkoaHhQmx5KRwhxh6DGrKNTEatz8XB",
  "key16": "66GQ9WNd6RrrJ6A2ZGx7cZ3hKXcLMU1wz5mThTeJFTJyXm9cNdRwSbLVedRb33N6nT5uRpF6HCxFGmLCheCyKAAZ",
  "key17": "4ZRK9RBs4sXZYMjgvfrLpnL4MUSZGQVWsJ2XfCUCbKP62umcBz71fatWyN6Tq9X6Ct3qhcz57CJXkzdEb8MZkZws",
  "key18": "5kDotfuenCyF33o8tcBw7Jj5G1upxskNEadwfwDusfnZYepay9GSjDwp1Zneip8ZHHnYncJ7qpAHSb1Czb6cgKj",
  "key19": "5aJr6NDyJ6ktvDtw65e2kU1xs1fpCnEP1CivPF2e1ZWPFigqZRqiGMvPUFJ1zLKGciBeEk9MRS8XeZs13aZRSFE2",
  "key20": "287vHNqMrkoVJqhYGw5JKYhgiggHPLBUZS2L5xrkCfpsHBqHEVC6oMcxpk5ii27Vqy3thTRrZ5q32pfMtZQ79FbE",
  "key21": "QmnTpwjTPhjRJddtu4pskRLnPccSg1eU3oJ3SwJCuff9EJSHJi6PkfNcuhnEjUNNbQQz8Fyf2vJbDzbFYVNQWhs",
  "key22": "47PTQaxf3jpjxJACLtYdGFLVsmomkhbC4hmA5fatG4MmVPVsnxe2dDpaYZFMGDAEmpUBLMgLgHGgfEHWMf4dhGcH",
  "key23": "2p3X2C2otkw3esncp3UWkit97yrQzUDp9ydywEasWTcHnAybTrmsE9bSZLoJTYXcd726RYKc6TNs8v2x4HFpWoLb",
  "key24": "5Nw8eNKfF2jeAe5uij5WbnAWRtqZHJ9GkYnvRGQtG28ffB8CYYQdtXRTLiQNoFfhUEveT1t6Nj7iZxUwHAJxQgLD",
  "key25": "2VrzxNBxqcmj2XfL5wkuDCAgELfmENse9yCK5UxLVPbdJ5oyS1LBjK3NPMmiChmKN9yWvcnHV1xZ4X7AQEyT5LG9",
  "key26": "c9Fno2xprhyWRtPNrfijnbtXtWnH6sSEytDxkDEyqSL7d35tGUodnkRJiqehwF3EdwGvZNqfodXj6MfS4xrXuxs",
  "key27": "2fQAMDUx1heAaAVrgVExfH9FLNiD6vDNLZj1E59SmyjMTM69vxcJ4dwyj4mxvwkBmnR4ufZnq75rr2mCFMfvW9eP",
  "key28": "4S2vpMGmNa2akfiazEYh73bKhanfKiRmn3vsfWLrnJPg1VvPMzGUamreyeGZnzDjV711P9pNEqiM5gEV6mjNRToP",
  "key29": "3SYch9hqHzgfJFXBbRY59uYP4qiz9rxHMqqo6hxTZPUA753N8XqqgkfQvmpe9e5dUxJyK5TQKWEHwNuqvhcbrAyQ",
  "key30": "Pn3Msv3tcVv14HBDx5wfUGdFKJTNaxRcCM9azhQfphHXw8sPH4Uk8MhxnVq1yLUpXL3sBVgPrTz9zJw3ySZKGJ4",
  "key31": "nShYoe5WXn4n4j7NPMAmwhbHGgFuRQhezLMccbYdrNs99fn52fa2vqea2fRXoLn9kwF4xPTHbqWMRchMtixTGMH",
  "key32": "pJtNwq79y5SvRpZ6sKkGExwU9gyex3TzFipsKSByohNWCx5JjCNEGDmft9cxhHnB2Fiav23DdDABTCK1uVcFrSa",
  "key33": "2UKvdagYYtNha2a9krEyKeG7TwjEHaM1AZi39uZvaFzgSbiW29YNBXPtC2Y9RWwdC8kxKPWytujrDDyvdcramHYM",
  "key34": "Gs5KNJVK6f4cjNxL7o5DhMHLjNuZseQwraVRmg98nYvnZfG9uG5RHfB4iiueiXUjvFqpNdWAWdkQVxstwqA8odQ",
  "key35": "59VwhLf2gqQF5WwXiRD4sbkiyFGaJKvBwAewKQuYgWSuatpfQiPPvggnZkn4jnYZBrnSbzYvUW5YjV6hCc4Boqtr",
  "key36": "4Ei5WnCbGRFeEWApSEDi9w7fE5TMEki2ZyZwrRVrFZe7nEc1psWKdGKHLyd5tfkv1L6SPadbtZYjiwEoJV312L66",
  "key37": "4wzbBLJvKvZeyKHtwyjXgj1maKbFrT7k3WBWsLg1dqdYsw72siY2Cn2oc5eKXdj9pFNrZFwkd2ffenC5uRLKzaVH",
  "key38": "NXwN8WK9r7wJzE6oNGpBygcqf7RGboFGNM1c5REboWMvBbscuthsi6fvDZjrwXffNJatVgYJXTQZ368mmXoHshs",
  "key39": "4jxwZ1DWPuwxbrJoow6cgXZYscUqpnRPWiSWh5H7xPK85kJnBDNpYJsuq95qxT952ZWNmARRbodDZYJW7KurbWQa",
  "key40": "2NjoHyNQrfc9KBo1VC9B5YM5KeQ1gQbofvshRCEoZx6HdF8mwarACxpwYQF8yyTWGiPBYFShfJoZpbTjCAR7SCWK",
  "key41": "2AmAnSsgn2JpZc2MvRkB6moh9wJbFoTNyDTsXr6yPGxtpHbwD3LKMGnbDjAj5JuZcGsKw11GxrP5jZnfiXsDRZ6x",
  "key42": "2GUEfwf6ADkwF1j6UBpM7iGhcWZ2ynrxpHpKR9See1RPUvf4j3R65ky2xf9ekAvWaJW2XejUSNf7Gv8FSZ3Qu7J",
  "key43": "38ftXex6sACYvywq1Bc8M2wPobVhk3xKrGsRkJW2gJ9Und5BbGtK48QhRtHh2y1FTAW2U3j7BTpWCkTDcYsqWLBs"
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
