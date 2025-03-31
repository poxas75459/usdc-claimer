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
    "3nsuFzHUgLALdBD2DYWeRq9noKpVjpUUy8EPc6agUSjLepuFYwcJSrr8Q8uRUztSn5AGFFt7W8rARog9jbNcNvoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NqMppC2FSy7p8EQ1j9Zyv1g78nfJVCtxXKZXyjmSrm4ZYSudTqK2HTXhsobsuWy2mPit63b87djyBFvELAEse6J",
  "key1": "2535QZhpbuDaiDvvZd6xVUYo4L2jYMDmnFZk2M99fahkakHmqWpvJHhYPcJTD9ogYUixzr73JEUxiRLXY4bgTk7B",
  "key2": "4b6fzGtjshajWcxVgbJk84RDjiULSkvhYm2DWugETrCXjXtustAk4cwuZHoyPxAxFpPFSh19GLPkApxdbkcXnZic",
  "key3": "5U8UVdRYsyQqmhV4j4RbPoVmmJSMeaJLGaCXKHrheLKjoHQbBcTBXvnQ2JTuzEbPV1GFKJmeafUVHa4XQtStu2Y",
  "key4": "nZX4zuqRrtayychNiSPiM7cgqUCSPdAQu3SVTPra4jhuimvgXkTRWrnkGTniV5QwL3Jk4uAV6dFNccimJh92Egj",
  "key5": "2cAEKbiWRUpJXDVXPuMXCCGS6jfNqAkyNAasEuicTZpY1x2UsjJoGfjt37uwAPUH6JzmBAKWNG6ujQSqTRZN3syd",
  "key6": "34eHjTLLvQSDkpudmvztmxi8tK6EhEwciYPiAL3zq1NHB8QvZrBEqFzNDMpT9P6ZBKwNNM9nWCU4Bn1PS5ry4yro",
  "key7": "2dMKEwkL4JGD3poLGfBZJS9Gq91GffDtctFyot72DvXqheHz9b2Fc5bCj7vFQRS6dNPS7QxToQzSkgCaH3oo2q9V",
  "key8": "4gtaNSnuUMq3zYFAMpwZd5TjLdTnQxrHb8Hv6PrR9YLr7x5y2zA9V4rk1eQ2HeZMPowoCH4cwiGL6NdkuWqUkXma",
  "key9": "41tQTsNPJ8ffvsZak2nBvEWWEPdxA1tauUu2RLYiJjmuopXerRJxNqAneVokiCXvNCGCWHwL9esYJwUBUkJNpX5w",
  "key10": "4VPLXy6QMbJFkT9Aw7bsMoovKvScGfVRGKUvYYf55JQLmTUMnASGEV9fBi73p2kKtKzNq3hnskTagCWbLKK1B4gF",
  "key11": "3dofdEQR3xu4AJA6MdckkpTLqkHdrKRpN881YzFbJRkkQ9jELkZ79DQRzhyadszt4tBnzjWNNSdpJaMcjnAJ9gc8",
  "key12": "5dSfX1qxa79z33md1z5nrEtmJ5ds9Bjvt8apCyirHRUpcacdiWM5Hfjy4AobZZBffuHZRfvraHY55MhmJA3xR6DA",
  "key13": "3NNtXBbuvYyxJrAnNQvkPpjBr3SQ8ndcJBHfXitaUmxZxJgaoxQME2ncfaoxuR8pCP5fAZzDnFPS2mbG1k2PMk4c",
  "key14": "4SV6zeaQwynjUsPEpVopfr3KAW8BhLs4BFon7jRpzf6anAcGvmD1mTWzEY4DKEb7ubnhrow6YTQaaRejLQM1VjPm",
  "key15": "6kTndJxhH4YdJZ67VNQgby8nJ2TRRegbxonTMRSYHqQczvQL4cteSwgZRnnMgy2KvRcruLHdnyLTwzPipJvB9rc",
  "key16": "5m5Ks6mNy4W8vS3mwRdhqApJssNmMs6TAaRKFQsoFwfGdN9qTbYguKX3vQw4UfMaXCif6gWRPepjaonFTJq6qCzZ",
  "key17": "44ETbmjfuqh27UhEgpNBL6cUWc7VqrugAL8BHBVog8Z2j14FrSv11dJMGvsCxmsBkJQ6B6fut4Li3DgsLzQbCEcs",
  "key18": "36h4bArGZ4bESNMoaDagSck8XcPXfAU9s9trJp9Q59zSg33PC7GopLLzuvUwgFLEKGVW38psxmw9rXaT5tHdbM9X",
  "key19": "2WSKYifNNpX1ff3N8YGCa3Zq5Q7nr3YjGwx1nWHH3HJ6Ef5dts6XLXPQ5SKK4AwaXeypXJR3kterCEqwveE9zUVf",
  "key20": "3fCB6V81Bizh5e45VcGjbcuS3SpPWpbKz39ANn6WeHxDTHbaBqyiEtiV1S22ugCzM96JH9nSN9HdxxCtdkwJdze5",
  "key21": "3J3dbvuY3cGPMAP2KNVEMgLy33bSamauz4ArSM9Jvxi4LDbfE1Q4puewuDrBBmrtcfPmiZJpHgarMT1KNJBZPiwo",
  "key22": "4mEiLPWU1kkpZBnXAZQAri85yvSnw4isGFxZH3tJKZM9NxpFcQjcnCFXN6WBHT357ew9zQeDsDkJoJ5JB3ZgMEQh",
  "key23": "5pzTSGwmF2z7cP3mC95fu9ouTWNF5MubKfvChnVT8gvj6YQFPT4DgtNu64rPYr781xpGXbe3orAAU1SJsMcGSK1g",
  "key24": "34g1TA3ekpAnTVCTFnbArkwBm92g1ZW2miPTidQM4FQ2TfptnUsDisLY1F2ynAFAfQe7uamieMYBf5ekyVkQXaSz",
  "key25": "5ZpSys8BaUhoee5a5BbGSNhjrTHeBX2HpJvFUTrWgRCUzhSeHtSwQbPTsnGPH13Xw1vozFCcX2nhkXPWbfivgXeK",
  "key26": "4yciXgaQYE13yT8YytrZ9RwnTnAeCEusEDQLDGnbwLSQuRFW3uSXMso2N1GnVxK24fLZad5ggWZ5w8acyseC17m4"
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
