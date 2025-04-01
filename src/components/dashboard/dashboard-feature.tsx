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
    "TCGRMqh2TVvuR2nW9gNeJ2X9dgZwSQkEqa8LKmvRAVSFf6MFhn6cBPgaV8WT9ffvwnm1uJoJXUSN9USrXZZQxuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xyp4JT1PtKhQg9A6TYhVovnHYgJgJX4fEJhknpbvBBnAb1Q47z3bsp6ZLYd1Xgc49Qe469tD2JmKKr5gJnXVnKy",
  "key1": "cndKWDscjMc1KFJ4dPdZXmJ8vsRR2tvJX7GGC69Qdwqpe5f1EGKeeFjbU4XGEcCwcbPZ3Hte9FUYdKRGFzUU4QZ",
  "key2": "2zy1XL8PPmf73ks7X9QEWenv4yHbFLz6tnzo66QhNF5gcfggktJhiguKVXDkcQjuXxqGh9twmxfN74rhd4VdzB91",
  "key3": "mfrp4bedkcDvb1vmVKGf1R9BFALMUAfzHte1kkUhU3MGKqXaxJLxFLN1PsLEJg6ChQLxYju3fW7mkkGE2nAmmu9",
  "key4": "3MQBsDGY76Zb6NDxudQtLjahRc4hossYBV4QzkmccA66piWaWFWUdUw332cCySv8pkirn2Y5C6ChXi69NAG8B8s8",
  "key5": "5iEhuwGCL5A3UhJPxsuHsWniQN2LB3BK3iDStJGcbrNpVv1RXxyLybaTUyuw2hoh9M7zoc5oVzL6UhFaip8Y42nq",
  "key6": "5G9gfFUrvRQbvnstCxbhsZDs9sXoexfm6SQkAF9PtEkPj5Dxs2Gk6jTjSvuUoGqSBSgxpWcaR26GxfVVaUN5fgFr",
  "key7": "PfQqz1qWvuGtyLV5qPjGoc8MBpAM5S6JB15bSEdPm5e77G4mZoiC3CLa1bEJUuzJGyY2zGJvFERQZTpzPG5PoAF",
  "key8": "3mqj9Q8XEqY55DgHetTN1EnPtFcBnyCC3kkNmYQ3HhLagQDG5hF8ujuNQrKApqrc26Gt3xsWs1DAspPSt2yqfaNk",
  "key9": "AW7vTWcuWTW5VkA84HiPz8ajzcmCEpotLukDtVq5dB4UWXaViuj3FK6nGGQMArQPXEqVAazRAac8Jd33PSHLrAN",
  "key10": "5gHTfBY1WLAfGMyy1dQkNtndKaYCS1FVLSuWHGSfgfCFYGDZzJn62aiJZxLe4ZP5NhzVqrfnp2VD6ev7SkKkxhLW",
  "key11": "5jcfPzPa9t25w763LuM22u4vXkBSWpSXdCRGQi9oaWtSgBWv3b8QhLSCa1MtJbvHwzyN7JbZ1dFAWNXcuE8sdeFW",
  "key12": "3doaZpgCu2ypK8pqTD21LprMNdx2NBR4Y6M99wWBq8ECB7ZaSV43mkP5CPt7XCGinBUGoqzyEaySWgsKQazxGLKo",
  "key13": "4vQh3kDQYVRcSmJsEmjpiPBJ4WwjPuTjRgrw2B8PqLqJDkMt6XnDoNSBFp9ZDoyCoEcZumMpxo31APKKTWDW6iKA",
  "key14": "55dutEZGigpYES7ULfHm91WU1gCbFyR8sEc4xesP4cY23xn1nsWeiZxJAcJ1H7tTFGa1Ws4ntcY8UE2defJnjZW9",
  "key15": "24psSCGg6YWQfVw5htngntqb11TubJtF7mFCjEftTK3CvjsnBYVyhQhuBoUbbuebVVoH4sBTRF6srm9CmVVMqS2D",
  "key16": "56owTcM7Q3EBaKmq9tseQ53Beqt4DfF93228q7iy6xLHRNSzpRzsSkFL8z9CuLbr6gaEUkoxKr2biGpmSmbkvs4e",
  "key17": "4ZD34a9dSHKAuGhiFvTMVKQ6jvxFAtc8McMGe2omc8nn2ybzsL2R6p1oBWb2Kx3obxomandcWVWnD3pZTkkR4fNJ",
  "key18": "5qPCmesNpV6oodLty3rbpqDyCssCxgz39tLBtVqMuZv71myqyY8GL5Vun6Kxzd17z14eARQnGdoxciCx5ry2BvRG",
  "key19": "3xsdPKr7pXTWKsgrVAi9FQows2Y2ZQrk2YjdeWvQTC3NxRLbLBcwj5m2mhyB2jnskEBhbjQLqZ3VA6Bk8NAcPS2c",
  "key20": "587Z9TWrQa8RKJvyP6VLagmfpKiyykkuqU5NKs7u27yUWVypSFUNmweLWYyXrqDCkEiqaUv4zsnsSJ89ex9zU8q",
  "key21": "3CXpSN23RhK9caGResg66FocMRFdBGj7rZux4wuhrhYGL3x3WbPtGJAtKLsHJkJdpdTz2k27Pa5ukG7o7QT75bwK",
  "key22": "ZmPaJTeYf3DwyH2sNhh3s56sgdMmmDcprHF4Lr1pn7xsK97E2H9pgMZCXci2a6oBGWfNVH647HP4vPhepbx3CLL",
  "key23": "5hpCTQ6SXxpkSfMYHyTPPN3mQP8v5UpQrCtx2T3y92Pe4sWuQZ49kzDGgTDvUvSs17hmGBVMcK7yvbsmdPiovLZV",
  "key24": "5j1hsbUjxycxgShP6i3CTnqocp3JW2g6c27MjHzRM936EUax6izAYSTzmrEyBmdjGANB8mJxnS6Gh3zT5BM92FAA",
  "key25": "4JGBAYQEkq9VT78jCfcvGmarKqdfCCawXN1TyPf2PpaQC5Jt8eM3TVEbFkbM41vuzYpZPzJZRRuwzkuNVK2LYEgg",
  "key26": "5r9E3Ea4oQXXzZP71TLDRR8geCvt1ZP5QtihMuyYrgTKivLqK2BYC5ZdLEewYkeZcDYnEMTzKVXRHDnENPjyuocq",
  "key27": "3SB4RBJ5QKCt2sigt9h86whbjHjFgYXH5detTBTff9fta6fqyZuVSVAaw7tF5oqu5EDuDTz8G8ss6TFSxU4GFk4W"
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
