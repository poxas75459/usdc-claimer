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
    "Q8KnSLiQWGkbFwXJhhnzTSFtXVcnpib3j1opY2s3PkkBr5uzoM8gX1s7fVHCrAkJjdoU6s8y6ewtGpPdanvwvBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJG6696JZpfwE46LqogHLXPJPP3ekWtJLoJiqzbPBKeTfnd2bsGDHVRXCTwRGwMYAVhqddG9LxLFkgGoJgfWPTW",
  "key1": "4pVukSmDYJ6c6SZQ9bwDmEKzLNNEk6x9tVNFfvDinVpeSGmfWDMUDAxjEsRBGpgyqwdw8Mx6jRq6tgPp4UE79M7a",
  "key2": "52iRZESp7BSe1GVCacD92SzDCMdUYjYcBLX2onawLsorNo5Zp3yfKftxxYTx5DfVa7NtBfxrCocePkeETXUPQMPR",
  "key3": "2UMJuNxGxTEvb8ieSV9ZfEnqZ9hxojD2nsdLC5FwBjp6BfDgLMZNRovjpiEztrP2W6koLo2hGEVC5Es5tkNAvT3d",
  "key4": "2psCsxxCuWHLhkDqYULCFn2e8LSbYYUM6s4hAum52Ra3BmeqUxvynjsAvRcfFrjJ5HiCDsQ3HQhLXML3HcpuLrdG",
  "key5": "4tyeAY4ts4PWsAaszC6fUPY7A3z9VWq6GKSySNr526YiwLu4MbDpDzSFLQfPRWH3zPDFBazFH1YxpNbpkDfpg4GX",
  "key6": "2TD3sHqyZAaoXLrVEf2ZEcnAzwauXmrLp5xBm31HJjJ4W7Zwy4NXnGPPDNFjKyrryXkaHn769YB5Gap2B9eL6hU8",
  "key7": "42cCXCduVKh7eWHjxXD1pfJBbwiTCHz9kCpJcViMRy9FkRmu8Yd6uxTpA6sMi4qnFaLRJ3m8fGAihhJnMooygo4V",
  "key8": "25VjA2z6UuFb2S8vxT4v5mwgejc99uvHhaxZpxxHgLgNAZB9kfXzMZF8aNbtMT4Hro4VkUqQPc5PdnFNMmjhu72g",
  "key9": "vQEAqCjfhr6UoduDkRF5LxnASQht8352CvFKFXpX7A8fnz9BCpV9FqiJXD3Ne38cnUgcNb3ezVPAdDkc2DdLRyQ",
  "key10": "4NNg8iqjhjE5HD1K3KTjFnAK1eb2eqwngr2t1dVshT9tXCjbZuS2tBUNB9QBQRJ1chWzEQaP4HrchL1NcikfSGSM",
  "key11": "5pXnsD2Q8rAR2oirjtu6CNe3iw5H3VRwWwNq41Ri7cSi5nwNVdbmTiuBaemB5WazYQjNKrso4TZF18zTRVB2mUSA",
  "key12": "2H4W1rT4KbBXxnbsgdpXcc9dRHYGuoiAvWkcPZoiWxRX6BQXYwKQoPdTUVwgdSrRfwYusAaiT2AQf6KcXrPzX72W",
  "key13": "4cg7xKTKWdPeFcinBskRdDe4Mbf7SwEcFvu85pDwyhH7BuSFao8nTZoKTGSSkxMtDGkXtPHTWjYRe452p7Rxmg1o",
  "key14": "3AG6oQb4667WFTKb8Syxy6SPH5e3iBKic7NN2Y74q6UVQs426TRRv98NpBGqNKexRA3Up5J27FTxTXh7iQAvTcXq",
  "key15": "3jFcAYXrCS8J7bR2ZAdrrRpa4FDXnhqAo5RL4zkG6u2oH26AsuG1CkU5DJtXSnmbxodug4bpuV8z8veoGKWMPCej",
  "key16": "5Pf3fLgn1aC8NjS9z3hj1F8QHPBWgHX3vYQfKH4ArSW5khbg62bQcssvX95hoWH1bRYQZnqgZ3vFnpm2kejYusER",
  "key17": "3yRUA1ch9i9LAt1dJo7v26oSLcVH8ra5yiQW2QEqDVR5K7JH4Cc4zZfD2D7MhXtbMJjAjKhPcnE5mBpz1jL7VBV1",
  "key18": "3ENsuUKy7n6cpSJH6awoVY9NWmXKcC6ewhMca2nnqpFFff79KJcMsuxQP1va2rsst3xmYm1MwmEff5LBGXguUHEu",
  "key19": "2b9WwxgRFAJ9e2Pkevf8tPzRzt1E9PYnLow8ieGxWpnm2NTYGr1ywsZPmG3H2YaeLQzxAtH1rUNqL7BwioCJmhD3",
  "key20": "4nWqVqo48B4mFF1XQhpDRhmxUtLJLGzj2fBEUPKXGMnPMRB6m8XyjrvMoWpsMo2VgV8E7MrZeb1eCHkbg5G5AzC1",
  "key21": "3ynyfCyVe67TbwKv2U8DqqujeCo9baD2Rt9c74i1kfGTTupDWarWnyiBKEwWh8suS8T5cQD3Co3bgQasr8K2DR8q",
  "key22": "2E7DJNgLUkQaJ25mz7XRoE6v2T7ywG5GAnzysovX4R5Piip54fMnVqUZyWpFnXjyo8CuxFm145JoPrpny44WtDBZ",
  "key23": "daMDTufmatY8SUSiKHoFgKyKpVfFwRT7GgqEZpCWtqZtVTq4UGKsGcdjrKRXzNt1HwMy1yTTmmVEQ84pEa7GVJY",
  "key24": "gB2DDf9gK9qK6VMiYwq61PVrjgDmY2vaA2yq7Een9BsGoNRHRytgnhJwpubhd3ptky7kosNfCzGpRWZKPQtnk4D",
  "key25": "5XQ3HB4ZcHhQuoK9EkQ3x5MW4gjoRDzE4mRG3daAdSGYGa8XfbJdsEjkmAvKxcWmBvnMgxFCBAKaAks5UzNa2wt7",
  "key26": "2PG76mXfu6Cqw9Con4wSQM7VmMKLcNwC7srqc2XcHUWZsqfzjjVJbLyTy3suZUGNoZevpfpXu5gLNR8v59Aw6m34",
  "key27": "SEfazAafaXy5nWRmcqAFNwMxkKaySHFhp5iy1DvrSCLKS359j9gusXJVRK14CVV1bKZKBEAyP3rW7G4xTamMh1o",
  "key28": "3HpcNMo23EPk9LP6iK8eVjaVaxPUZMJ7o41Ae3QBtMtdPCeZHavdiBCDHB86TatNQcdQuDXG9qky3nNFmjzJGpxs",
  "key29": "4RvuNuzisi1JQfnUfG9a3MJegBDAXNjNrLfWiF1f2fhpT7wHdx138mmGuqe31qstRzU45ivJBD2Zd9PQSXUSpYLb",
  "key30": "4irzBpMJB314VXvm8qu55rx8uuYRN8KvoANZoKKmqBB8ysLPgUrF9gmsNuC7tw1wUXfiFJFsPf8ESTTaj8CSNuD7",
  "key31": "128iy8dsqonGCATnoZHZcPS2a2WoH1mSPHtW2Mnvj2fM1JfpVoFy2R7j78bTqQHWUKRFncsjiSs1x2VrfDmdQ1CM",
  "key32": "4J4ee7gGSa2jrEpZNCam7fQjhYdcVhHTRJCb9VeNXrdUvTsaHNorSbYvv17DcF84rDCykm7RcCXCPAhwxdUinP2f"
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
