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
    "24JXSeqMTFiUwu3GWhdvdWYRcque7fX8BFnWuQ2DcsPi9A9wCtBBXRppy5DTN4LgC84DdN9vmVGpTcdxHM5WwEH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijLQyPS1mk8R1KYVgERwyTnwwEo8dHgssd8X6gkT6i3FUpKB6p8sEDuKvVKMNjjrJYVB1YpRBqFi9CbJ135zwkJ",
  "key1": "42tnr88gHP5HQPMghX9uiR193E3MM8gP9avFGwh2M3HMVRDh1wRDNqh1gYPksKc7kFJKTB8JVkC3RKu1EWJxaeDW",
  "key2": "59Mu3pZJ7VhyThZTgYhJkC6MEwYNvLTNofpUKqy4v7qn6Arsh8DWCtbSFLnohwt8dNJtZ844RTnpCzeBxEkAiqM8",
  "key3": "5Tpu3djUQJSqrtxRhi5WSehbfyGojDkpftMMAHDQtYkdP5FyNBU8jAW1j3hzr8Xjm95x3vju4eGcswTfnTsRihx3",
  "key4": "4cZoy6gNWmPKNTsWmANRRUrxZ4xfY5zeVD99mK2QjKZqz2ec1pSaJphWemN3ZDaXCgNGAssWKctgCLumXLVPP1DA",
  "key5": "33hi6q74F82MUhsoa1V3ZRtPUqq4zAK4mQL7ADsdDyvkvR1GwmkMDdMQstbyHGZ5s1nyUodJsryEAdTTDmqk54ez",
  "key6": "2j6WujQZmS8gzhaUah5sFese2xYTiEFcPMDT8mCyuCTLwmURvDe7TpXoRymDjRawq4s6c3HEyN4q9qrJxVCnshQX",
  "key7": "PKvm2uSFMPpr8q9ZBuE4JjfLsVVTU3dHdbqyr2X6r6R5X5PRw6efUg84KFXoYTXmhFNRiJgBJK3LkkKHSgFQdif",
  "key8": "4qBVit8vDKk3aan9yaZfXe22wjCxturvt63JBVtGStj4ELNnXomK2o3GLw5FeRRuLh3kEEBMg7bNwwnq9ts4BMji",
  "key9": "4RaDzQGQWaRT9P4HMdpaa7DzRNhdxYTw8ddyV79JjkkJnmecYHGd58Jcm697dG5kZwZfmDN4NU74yuit2NWZdDTA",
  "key10": "3JacXSVUc9h4Tg1yaxLU5Kxe6AjPFjWq3t3KGoUaY67TCXoyXDxZkq3C61XzoPdW67JTV2FHgFGRtvVNgrpZPi16",
  "key11": "3YAHg7qU8LsgL2ps4CXJqq2zXdkeFer6jdYDahUpK8g62a6xsMuVdrWcNpDoRVwhegoPNnzgeRhWDwvVoPSbU9GW",
  "key12": "2NnQSdLJ3FzdDr6UvJExFKfhF653RFuCyqXwo5C5siLUVTDoRxP3W5Vbp4eifrj2rFC58mGwCgANqCCxN9p2Mkxe",
  "key13": "25iqiRthQYWkZ5yyFnKchEH7akDNvr4mNt1wmkHF3zi3FRyYqeo7uDLV6iu44m6LKamSbQE1JRpF2HE9oWBmDzDd",
  "key14": "4sVmJeEuciqvbfYxXdAg2BoJGCtkY7BwPc7YeiWUsHqgpXQJwfrGe681CEi8LZVy9tM17DG9iAPa7So2L9GtmYxm",
  "key15": "3rAP5tSxTtuksfgDVyBjUVnF23eM6Yua13ofaaefBCdx9pEWs98Ur7a8LES1bjaUsMoAFhcuo9howU3uo4yBp4dx",
  "key16": "2DTNn9yb44K5QkFfczjQpY71G6iHPFgxz4GLLpgLcsY1qgBi4k4iVSX1pmpyGaB5zxSJV1ZCdU327mg6PvzXsNnN",
  "key17": "5TS6KivFRNA9ojE9x1LMEH6LFPC1STdDW5FQjgenU8LEWP1rBjVMLtJ14CtvGmwKdUn83RisMcoa6zWSS5itUfqd",
  "key18": "3SxUgHQEyucpqpfy8z7wrNaf6eW9T8eswocvC3kPpz3RKZffZHEvokgSikhqW2expRr9mEc3YoLDWfMTXJiK55Tf",
  "key19": "3ea5uPQdhJFsDQuDZ69kxKFgm5vLbxRki2EngugNTJb8hQReQjAdjnr2MxbkiwhCm3bvrc3SG6MvNMuvdtrmdySQ",
  "key20": "5pLjCZdGuxz6HCTLYwRPUiFdRCM8Z7hVBsuicnofjrVDZYfvcxKueec82ZveCJhVWVYKbJfsax1gMn9p1d2sP2Cn",
  "key21": "2fJ986a17MipjpoRTGxaa27m5uqBaaVTSwhqgoA5mZEh4sEJ9XZxJcaHBanHZ8bTRJ6NghJesmZCHVvvu5S2xNEF",
  "key22": "AEJKgXGq73j4G7d3ppFRtS3p11HLHj47r3KsZz1mfH9b9fZVyJgbssZ7i6vmeZva9mtXVUGDk27ac4pdy63nc8U",
  "key23": "2GxETYDUoEdKKuJ1HsHYMJyXa79pMceN2sL14kVJLjHPbZWpBpdcRZovNTsdw1cjQHUtQUToBNnFsqT3fdrjRC53",
  "key24": "WEsBnX1MNQ4MC5LjnbqtrTfc9MUYGeXjEJ3RyJ9meTeXCnMM99yEpQm2e1smSkJtn5AQaPGhye6vzHqEtQYVMKQ",
  "key25": "WvmxNGkj3iXfJ5ZwGSDS9USiayYsCzBVgqajNQ6X2TzpQyZQHjjQfkZWqxbQeknzYMexpvsF6yWhydKLJz4vF14"
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
