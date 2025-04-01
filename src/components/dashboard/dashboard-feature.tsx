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
    "4eijsGijox8T9gnwEpJGMjTGVZEFHDvdB2bufSUvdj17jX4H1aR64S6exm6oQZCwZ8AUckAh7SrfWwHEB5owsUMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uk9zNHds9HCQ18Rq5AbJZa9moyrYFnEzeFv3MEqfu3oa2AvJwXx5UdwTcydnpDcY6d6kmL7jmYuEQvf9my5hWNa",
  "key1": "2PCvjmAPSX3dMXo17it97vKgSnBQSMkhw75ze2KpxZWY6qvjkArqgH7pXyFv8BhT4mBUbWvzXNxERfj6KwYLwCAi",
  "key2": "4uTdWzPB8jdeHnvKsbK5FKKLMDbnqbpVftwDov2GDygv9AM3yBRi8v7NNYKHpSxtRRJfSSYPCFCELnVMJrFYaaFH",
  "key3": "QoctapsUryDkjRFUhy2WsS5rRKM7wD7iEnhuLg5uwKqdFedUzUkHHkCzYPquK11o7YccfF5HepfzXpL7Eba8EXN",
  "key4": "vFGPftpnDinK3B8NZfuPiiB7Nn3CrbmbkR7ocMMnQaVCbAHkRReS5bN5kfD4UPpREd3TrSqbMGbsyTm2uSAUF4j",
  "key5": "58x8ovyEH8dwyGpYbicp2tBbmxB49aigA8hjSp7vSXyVe8ZxTPXU85U992A5pa2nbdQ4kDELtc4dmcQgCGxVSQ67",
  "key6": "4YdSbBzHnBhdfaLkiU3Lqcae9KBCvcBgtyeTySWKKofW2VTfsKQvvtzd6RvMeqKmqUVaa2KySZsNEvpKw69pBMfL",
  "key7": "48q9mbW6PjDx8kFB3hay7u8AfxkFhtjEWhzLHDz7zNHNJxnJm8TX9hgToKc86E9nBKqfFNMe28iAoCR3aXCGUCp9",
  "key8": "64jqi2hTEysSJnDvSGSmCDCvcqg5foPNcEiqYJVAUu7qpYF8BgdkVmj6nYapb3uuZetbpXhLPa1zrHyMZcSDj4bs",
  "key9": "4zbWsMgsdzQu3YWvNfgibdPpS89NAy5kMUQWGZSXdEx3o9oQ2NUighDH9S8YTEZeD4MpQBVEnALV8TAVZLhUiejq",
  "key10": "37ZCd19qVMtNrogbzkmUKYhYxQZR7pYomDvfBtM8Jh1hD6hvtkaxqgTtMmPGhzn7s9nyJtfCw3Ep1BXWBbG7cgcx",
  "key11": "5qyhs6AK9d9A3roBE6sLHnxZDgcL2ypTvSr3EkZk9G4N1i7ZR9RCKkcdsWGywXnFbQdeinkGmT5duyXFAp6RPthL",
  "key12": "51Ebv9d8ZmgGgzuGdc2aQZwDvacS1vGsKVs4bXtHA66WdH67FcSQHD7s4XkrFeeKmSn328ktL4Juv69yDsnMQZtQ",
  "key13": "YZcGYPvcREtVFeMgV72L5awftJV8Jf8mngn4QYVffmm3eEZvNRxr28DVdiuKtxhgVKnM7V8hG6tgEDKfs7dT3tA",
  "key14": "3aEASvrH95gccntbu5huDEJGSprwtFtf61nbg3rkXnaMCVxvD1p4wKvtBGT4PLqyAwyDB2e9DEe4Gc4hQL2QErrH",
  "key15": "4QoJREiyD86ZvSMaLZQsn29QD1QZ4XbFr5UkwJ1i6QBov98vJeWgT6WDFS1f9nFK1pvmpcjKWdbSzdcuxA3g9cbq",
  "key16": "3mEj6wUrEEaxJcJAZ8NHso4yy43QLYY3Vdn6AzvuGiiz86mZ5RUh1sL9NLpVKuaa7yDsUVkaXw6Wa6Ni6KqdSQ51",
  "key17": "5LrJs9vg1Xerd8S44ycWZwT4jRFA6tySNdpmUJy4UZvjWAWdQmzK8qpQYW4Eai9wD9v2xvpN96eUDkexq1n4UYv9",
  "key18": "4nzhn76HGfYurb7f8QMH8R74roZeHMYV4JaCLxTj8zTGkvU5QKNWpPV1aUw4XnbiWzrQWSNdddp8D3DdJyZZtALe",
  "key19": "5nLG3cR7CMrszWCPWyVHnf18JRB5DEYcAhggRPEZbTC68HKYGn3zdC93r4Yx5bKgZng7v7Y2VzCcExS94us5yedf",
  "key20": "52QDzbczMDcuEx1McYhJjuFAQ3bGZauFo526EysyGSN6FiuxcPBLwCczrqSAYquGBCrqAc4WP7UNSEG2uRTVfvXr",
  "key21": "426kTMeXFF3iNcfyuPSDDJXLNGsqWg3hWeNkUm2xL6VBiwX3ZksPenSDV1zbmN6mYd4EH6B7SGAGAzWTDXGqqrum",
  "key22": "3H7LpVLBiVhcshe7yEheeLEjta2yMwwtt18X43ucBieVVPXE4QJgzDng9ChbFJddeNpvMYZ8vp6KkGxnnQd8Hz7V",
  "key23": "5vHTgDrfp8uZwegLv4KoJx1nRUtxXZ51hDXs8RwwneZjahRnMpY2niPpfoYdVcuGLzEsSCcDNvnMkzMJGUJtgPt2",
  "key24": "4mrHhUTtx88zErnrGQLFTbnqDK2QsYJNDus2Rq3u9z72nqyL6xcyWUDt1BkXk51M59M9ArBywyJA6RHtQqwtLppM"
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
