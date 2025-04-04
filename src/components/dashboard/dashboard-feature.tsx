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
    "3QBcvuftERCM2Cb3EguUGqTrmn8aAekZcLqzqDwwjDtgCT7ewBUKDysGz1CaXRJkcWYaeDcgnHBXpQ9cQxY1sngb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMFzq3aSsWnGCfS1prBeUeasYWeGX9RyqbKJpKWtr7zECozNW3UNi4ExYBDe3VbNQTNbR6M82wZRSRJcZwKnM9Q",
  "key1": "4WghRDfv8ynjhEzmPR4DzDEKxvyRr4vFenfhAgh72vHZrfDGi6AQWh4oDQihkoj8GgRRgKapXTJyRxYRvz4w3Pf1",
  "key2": "53Mp1nr1azcEdZ9gUPSgq2Bgt41zxiQd8fiReEiWpbyCnypehU92wcedgvpW99n2SE6d9ka9HSmKki9LjT6vQgSx",
  "key3": "8CneHAE635hvaR6Ri8gD8c3c6z8CfKYAFTNd4Bx8TW8Sa8F4VSobBwVyUUwpnSzkRwgWbiQcay6B7uFfuBL1Tsk",
  "key4": "54vaavCjhZddHBF9irYRVYTZWXSV86zrACwvmJXtoCPttYeHXKgrUf2KBDL44yYAUxKsj9voPJHXKuhhgTnNaXrq",
  "key5": "2XrJk9Rop1jHnJ8gSPmWqzrVp2zayuQJhJYs9xHrrycVj8h3u1ZqLufRvixsDV3c64LY2p78wQ81dMc4Sx9AVu8t",
  "key6": "2UT74WfEBpwrUCvRsgJX4GD3GiDYZ8simBTNBxVPaWiQ4dPkK6oiQJYxGKv5MLrA1GGbVSrPezGaJrvHrk7eUz7V",
  "key7": "mxZR4pPLSWZ5HWFNjTrXWpNFCe1sNs4U9BAEy1RU4VSNTr4vU36A9hTHCBBj7YLwgzvvNFpF8nTuGaz2AtpHR3F",
  "key8": "38dS9xo5S5WeVVNDriirz5coSqGNv6YPtAYCRFDFwwhNkxfdZyC13utp3iMvrsSnt2TyCfXEYQgWYY4qbtjXA9qA",
  "key9": "3ZGcNaJ1KmMenuVaGX88MketCAA3EVcc4a4491xEhaqwDWyaBT3rXZQrgaPqxkE9wm4mnaMYvtJDgRxus66v9Vww",
  "key10": "5wqDGpcjgSB9gaSuAokEqWzuoEvVJiwPcW123XQEhaaFWVQwzGGKrhLA9UsJtAvQ75yMDLtgcLPpJRvShxY57EDx",
  "key11": "2p9c4Wy8x4U21fmcizTnodhWxAx4MfZDV9jjvd3Vm2ChofvTe3jxKDiRFGXtR1yhDmswqRLmeS4MnaJb7ykZZxyt",
  "key12": "4gFQZDJstS4UpTneTmkjcQNM6gXEyzSUQ2T8JS6yW21hXueCrPiaAkR9uDunukN7dxtsvkhCuAWdJ98QaCYGFNRB",
  "key13": "4QkPU9u9mqdc5osiKqK7sBYRiyeUeJRS7m1pBP5NwwzxnTVDVc3exHhGyYW35vuL4kfAGiCrgyLuhvVAcd48mmQP",
  "key14": "3DMxoFKiGy1q5ZxKFHqbbFqEn2ToPsS1UTw2rHkVeFPM9pJ1fgnhV2jj8md3H4iAp2V7bigcAh8E3cp74VcHBCFH",
  "key15": "63JaEiTKQgqHQNHz9TTBzvDiyBYdkQpYypGFinf1uEhp9LQLLMEJF13tdX4iAVH2Vbr1ko5jBbngjvFUkZxkNaFn",
  "key16": "5XpNncCJpYC7kyTHAFkcSuxasFtL6WGApiVykmrYqwN1n465xQPtncAWsydgPkxT3syXJVuLGy3Ekx73EydA9cnU",
  "key17": "586U8b5ULRdnVyM9DnsrsbyKUnkYtuauv8Dy27b8C3xizN5kX429XBb4FnyRVLeWvqFLg8R61nLZ1zPdHEXSDKHu",
  "key18": "32qPV3xn3LYxxi5FaXA6QsVXsXbWutAXW49aXUVuh6ijmVMeiYpi7uvm8imePYAVTLpm5ry1E1irFvEup9HwN5Di",
  "key19": "3fiad9jg2BLMMfiUUJbt2W2Hxrcp3zePuxRAVkPGCBP2uhBw3gD4T7XSRF1iPX12p2tri71RmUfRdDYbNg9sExbX",
  "key20": "R7rwYt2zBjiEpREzXwjVp5qXWc3ZoDtaiKs2QxzevS7eCnsnDSfwgZ4q1aNKPW4JcFkEicEtCJni9tTAZfKVYJ3",
  "key21": "2g7CdszxYjjmhBAkHSqZ9FtLCoCtGUgRzxJYDedZQKsdx8Q6s91m5aH8iBBwm4rx5hz22DhqVfsZVPQtGhF9i3nu",
  "key22": "3sxseWRueXTjpq6zhSYSC9u3LngTWgzuFpJNm9SQHPUNPmp1EmV2dXM874e2MEM3KcT9BhX4YtQUaK6oiaj7uZT7",
  "key23": "3oJzdUhsyvUYjByGSp8fd7qUeiKvchcqkMyxhdkBXMHBFywotyShTTx6cPjssZxaXjFSXG7xREafN4jCguNvoprv",
  "key24": "4zDGAfXNYpESZDYKN4vPCVPRTERQqfdjX6ybfCBuPwAf5Va9FGYGooZTZ9zs2toedCj7WUGBgUFde5dpy59Rv6Sx"
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
