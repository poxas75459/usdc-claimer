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
    "5wZBHy8N9cesP1kdKxxLCgiHHLfcAiVa6mBkCyLkeEPpMW1X5WPpUBYuRF5oPj1TKhVUcsbnxo2KPKJHnZ2GZr4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hnsZDz8GpKm38U2qAUbtpJtQQVHHnig4pVhFCt4fgWBZjdwHJL9SYw8tYoXx3HG24RQqYEHLgR2sFLN65pBHiE",
  "key1": "whA79SyQH7ENQXzowLVgk2t2Hb2QEbmkv1eQjTiBztwx9K7PbjrPQYLST8pBShbP48KGikfsHWjqe1fHKNWpxbo",
  "key2": "38qk61qY4DH4tnDKXQxx8R6a9k8ZHq1dr3H26UevnhfMCTEWynQbFYdfXGMe6477aKhGwbhRN4oo1neuNJM5CgF5",
  "key3": "cfBowCZCMJjSx5WCTobcZcdDYvCumVo8oTaSBoko8cXRLCN3st4unGD9WZ2rfFioRJfLApYSKdx7wS4hfPPdG9w",
  "key4": "5FMVJrq9sFRk98R4bQG1VdWwCWfC4gXQp5NLiVrFsYPMiTZuHbNRbj7HkFAmMNSxywEJ8U1tkzfdyQN4UGzbKuBF",
  "key5": "3pWcX6HWwa4WpjUiSWph5EXh39sgvGzwrk25RG35MmUfWopPGvP5SuDHLLbqd2yNVwVw4LipQap4Y6FmXpfaFP3c",
  "key6": "YwGezv8xJgzhuEipHZS9JGJTY5pMm1beCzbUDGdgmdRCZoFaza7U7BQTHKdbwK3md58rxswDgadMrQeSDBmMJBL",
  "key7": "5d1pQ5jMks5ea7aKjgdU97Ggaoo184Y2MbtqREENm7RvnYAwvpvYHsWtGCiRwAZgSMb2oVr6sm9m12ZEuxSFjq8R",
  "key8": "2hemNJW1tMCc6xPjzftnu9H1rSYBzPzCmyvKLgYWcfLV6JirfGgnZhQHC2nvDu1NWGRhM2EeYQZMwZR7DnhnDX54",
  "key9": "58YGyksMYUFoep3YpoU3YCd7tYnNh9y3X38LnRQKwpiBubhgu1M1o8xZTjnjSsnLaCaNfE1G5dcCHPBUYQdcYpRs",
  "key10": "2Psio8mHVQp6kt1cnSxSyzB5oYn2xf6PvuGudvqXtYqxU9EcSo4UQXG1t7uHKHJnHQjhgr35uQ4yvrVN5pq7MDfW",
  "key11": "5EMoWmQHQDxFUiZAyeRSJYtXvguXZVmZma5Q78dceBjDkXBmXgbtebDFyCab3EfZm7gwudx2DmtQephHu9qVvPsT",
  "key12": "32369QdHRT67FrwBBaUMeNxJwpNHPJtNC9sxcpHxJDUJjb8cbge6hf7WAW5nVcptKReyCSimCYU3TbAJuVUU1MpQ",
  "key13": "51Ej2pKFad4pdqodYDhVJc8bsFLVdEvf9MYZqkDs3JDyihP4Qt24vK4pxiagrDV3fEk8N2D3c5LfvxuttkfoHZ11",
  "key14": "4npnFHvPV1DgbAimhAQq5Q4vaK57CgULnChMbLAAVS8qTDSZSqB2w3GEEpCb9ibYBM9U8fGnHDNCt6yncCX6xr2K",
  "key15": "65HkZWSzngiowbVS5exW8SuQunVZAubDSCtpDw5VXTt7RbFihs6xVWi16VfjyGFxDjDcuSamC4eztZAmZS8SfCBi",
  "key16": "3gA6KJ9tg5CTgGTrqk7pLA5CoaRNrWaP5dcxFVVhQqtRjsF8Q7LegYkvePeDZrKCwiK2v9ccQN8ttWxz54fiexoQ",
  "key17": "4nwBW2XLQaKiwyhCao5WcRrcKgW7wGc74mqXJ6P6guZ8x3REWNtMDo7sdjP67RRPQ7dTeBYEBL7GBd8tNpYbMnBh",
  "key18": "QzGDD87HE25igBMW7EoysF4kULjuEF6jC6gphtXVi5rihJWfFsQu4cM3RbGYt964nNyGPieGvYULj4ZdfFRdLPS",
  "key19": "2qksmdpUaMhc4z3BUGQRLCcHi4BoWUxZxuErbcNdQGkJnuB5YwJvkWB32B6UatZ6X7UmCxTWSh7xD4RtGcQKC8ZJ",
  "key20": "2jFw5Gmm2vPN8y7NHcJ8GcF8BXyt2QGRdegRjFXZ7HF1dYiwYXvMaJT7cbujpjVKj6WqxpgmJ1TRFpbrnvCJmbL5",
  "key21": "2Au4jYjohTpb3KZ49VJGRropAvvdoCsvrBTYskX2rsSctDjDCMA2n2fi4G5EscYwheyypmx82TFnvXPsgp39SmHY",
  "key22": "5vVpaqjMFVLmumJsHHjVCJHqCe5gYKwnSz5DPzrUeaRKpStndG32EHipEa1RGg68Jvx2cR2dUQjDniKAJSewsD6",
  "key23": "3rGTUu2QEUfWGke4UCs2MfGxsaByLSzHeoxQJiRMRGF4gmqhzhxnXskzGu97KsuGQzW6Xv24ZVdqFXS2ydm4mpzm",
  "key24": "2AKcuJUmA7HWyL5QEPPSnsWFwUApHJGTgJ8XxqMkyRTGpnXVMj8Kv5zZSbrXrU5hAajnWbYKqYHtoWHWDB2JzHf1",
  "key25": "5s1ZQrGGZfuQPZVRBEjWvS6d1vUS8y7L8F87A6aa9AgtF8TunqCoYbg2adShEkQs9LgWuj2WA8xs2iwHu2dnD2EX",
  "key26": "3DRhAKGNSEjTVuweAMd28hS43FKnSNo7dWqobU7eQeCRTrspdPjgyYzL7BsRX7uSYDBWTPqUe6S7LiBQuZvg1sCj",
  "key27": "3YKTX3cgZgnSYizsRAsgoU1TiuQ2hNWvtjEpFfCjpVZkWPg3fMGwd1SZkRAjKeUV3YmvKXmuRPhdU2dpymoJorZW"
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
