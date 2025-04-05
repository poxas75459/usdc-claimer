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
    "5UaJ7Qk9zrUXgwFQ7k3naVxkxau8VkYgLKN43L9nmmCLktswZD6EJREbQd4zUFGRR9T7Bn9vNHuB2t1hAAGiVnRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVvYsDTMT88utkrHjNbw9cM69uQj8osKFQjU3GszhwZpEM9kTeKx4y9V2N5GGdAoiecjMrLxzFHkgYYHoWo2c1n",
  "key1": "5yT7BGSiygGeWEcAhdEwjLwc3e5L48xhc3TyPzeWVhPqqphz57Rou9NZUT7GRywUEHWXkVgitToXm7MR1Bs9NbmY",
  "key2": "PrMSLQoo8sTAwYChUXntAiJTGv46ETLxfHrPSSE8g9hNZ3Gh4f5vCG7hQ24oR6wPMatf29VWyYcpUgRBsVWqGkT",
  "key3": "UBPethGprwawG5CnDY7KZkPreFnX7ZoVennJyL7DmGwtJyJ1ZiKisXNHyY99pG9XvfkjHxwgFrg7ZPxg5e3CK1g",
  "key4": "2oNNVmdG44HcXBJpF6P2JH3jrvNivZMmiQfDXrzfXM1tyKWvqvjGi2xMPhfxmqUbbM3Y1Ddx6eL5x6kiKnr1itvP",
  "key5": "3hUB8j4KyAdbPUQZBaVMdDhDKFBTRKVmZ1bPBko39EMrfUst5eJco6Jv8tvqTrZCoTGJp5gj3ExaFkgV6kg4moZ2",
  "key6": "3vubHUQSN3pBH3HKyarUML6pydszJKJxB8B11AQD6wQ7q3NvqW5pvsky7EHNuSVBqjM1QcoG9epAk9hmK2dVHL6n",
  "key7": "4fpCPNYSKEpqhVkBxKAiafj3wmiGkWDU4WkXBavYFkUHaHMVLR4myeibVWaKFcGBojWJy1vMoyp35a1NKiUvinPS",
  "key8": "3dF3krT4VaBovP88Nzop81sLao49nHT2ZYDYXJSGxHfJWmqP9FCP3x7KPvtVNwmJ7zquxk8hCRmxnxppcra4MYB7",
  "key9": "4Jxb1E9kCtxxC1EenNMWz8AxJxsRjfsPXCW55xjR5pLVJq7wr3abeFbcYC5XhoXMiuVgg5JgdMPbcyBcWKakqRok",
  "key10": "5pAdTApvj6yB8MGTvBCKJviKddpnkXnkTPLN3uNhjtMTHuuCnXBjBDf7m1G9RpBdMuaWxBMmcvsYgpxMj1rHyVjb",
  "key11": "5VBAoF1LkETgpRCJu3YZkoDynAVtcoctTjzMx8dKFV948CdA7Br9iHR83yfYhBvxqJ6xoJxswwzECwVqnSP5pzJr",
  "key12": "2QqusYBWgA1KowgN9RezHKpZDjWLVsS1dtRU1fS8bu4YzCga2RtFv1TYiVUpLRMWhYPcigiVzjGtWTQrVGxuwa9X",
  "key13": "2AyEoooF6rPypi5tTKL4b1S9RM4xjJPbu7C3JUNkDrBwmt3cbYKHLWFFbdviZL7pG3z6Cx7VypVZfSUtvL4jFx77",
  "key14": "4NBNocgNRyKq43LSv7K3tvmTjA5vHJD51uJQT9ur6z7vSN6GzYHA6zwFrZKbziFjM7aYMUKdbbAsBctx796e6qHF",
  "key15": "2TqDsVib5Qsv4G2ugDpSuGqBdRZtom8pJkKDv7R8Ex6Fk15b9aDoRVed4SFzKSYBmgYWZXD1TDdCqtx3FNwJbz4D",
  "key16": "oC4BLHZRAEncoJStVQ27eFdEy1ruPy2rQp1ag3yt3zaokUhwWqwhCiY7RDHroJpVB4mMXJrbAfzwPtLA1Xfs6Tg",
  "key17": "5Cnzu5AUVnHobQGNdhWAYpJjTBeAtzUvCJHQPAfWk7Sa2ffgCbGC8JkTwLy7NzbrPwHaRk8DTT2EswKuF4WXUQFU",
  "key18": "5CfRnwfNtAGA33t4yJ4xwu8q5nFUYkvMfyxWEcpUBW1YAadAeADJQ2prCyzEELAViewzeZbQk3i2MNuR9yCXTsrN",
  "key19": "Vv3kQQS4X9tZ416C6PBWXLZcB7fFK9b2v6CB4tr45BfysHhzocmod7bFzZgppMv5ei843GqABC3QpeBxJXSvfmK",
  "key20": "5eqvNPodGE9J5wRdEKLk2b8YDpm2DtfjaC41CMSZuF4YUfX1L6U79EM4nAG6MzQpSeN37HdVxkhG6gMjddBds3Xv",
  "key21": "2uA6CwLiJYbrPsVXNjsC5WzFuNzJ4uR6VPA4naMcddprkf93ix6YpzfemJDTMvF6xaX14D3pzYeFE2tYNc7EVphb",
  "key22": "iKkQDGRj2LATbT1ihq9Hr6ahbxqSkjTfxbnUkxyR2gdZLc7ygm3bdrdDRuXWCCMjyHhTk9XtKHFqDu4c9PmVbU7",
  "key23": "3j5tscKz6x8ughkiPKr5VVpExpRuCV9QRFVzRSdEcxQtDGr7jurrWmzS565ydxGrWMc5CLLcFycoxJRppgJ8mwvf",
  "key24": "3C8Z1u6Cm6CSznR1zGeGxmYVD8TcXJbpRXmzi2JVb8YxZXDL22SGudv68rtJ4NW2vFMXdvR9KdB4xLPtWewe2ymK",
  "key25": "2iyxfou9aJFPGxv133gXTExZoqjNUNYBrVsnFmmetfSP4Cs9xJcZBHXeQCkmXbx9QDZD8AqTynvC5e5Ers9gDeGw",
  "key26": "3bdbuLxaqciqDAz91KFNZqHkHNkFqFrcweD1M4636UMUnfuFm1CFZ8PJnfaDbh6FdSiJ128apbqHNvpKffXzHxpg",
  "key27": "3oJ9osxG4WuGJ1JsiVARgkUCbs8tG3BRp3uDceBPAnM6rK67BCczaucEnteAToZq8dcpECmw9oSLUt68eKceML2t",
  "key28": "5XEKtkg59Di2PZfmiqC5c33vZT5y5w4ngnV4rszyEqBQKSLWz63ae5tBrfYWNdYhgNxJ9qtTkaUpW3m768xjf9Nf",
  "key29": "2eXXyV8tjGuBGa88hjuqn6Cq3WtyghmgB9TNdXu44hquweQeU3V8fcATEjtAmARHKR5RPrUWpYR7Ztm9EgV9yRbJ",
  "key30": "M2mPYKeQdcB3KtFJJMjg49zfDNEe77wLqQ2to4o5dtbtNp2QDshDk81CZTsBhq7SBasevo7DBbooUtcekuv6EWA",
  "key31": "3Wwu6QQCm9RNiaY1iRGvufsjC925aGs8ZD5rGaEQzdeivSXHMuyPp61xLnYjDwm8wwcBSqA4R7NRCWYu4dQrDPJV",
  "key32": "5292zbx4AvqpLcT5Mkd4q5gs3zeVb5r3mhqtmbjYer4A4uAnM5PebfD3WTE4bhNrziJ21VHWbRS5iXqierBgMXLW",
  "key33": "4KsvuoUL4zVBnMsAHoT7oU6foiG7wXpHHmHiZJPiFhkr4wc6qkxxAoBy9L4GVPGZtvKoz8JHiuMEWBvbTr4G3pLD",
  "key34": "5soMyrBzXzc8HuUgYN1gbKFufqpyazNJrGHuLtRJvN4Tao6DQv6R3pAuNPe5vtSD9Pnx391QKquGbz957DZNgMBB",
  "key35": "nKu92PrxtY7ZsDXeMdjkWTPd6h6yd3yge7YdLMgUEwPuuSf4sDqf8dnBEhvA4yoUMsJCUa6m7uGwT9vg6rd38bs",
  "key36": "25Mt9FzBXrkjF2Ng4QVVfPEB7KEAVKNRav6D1BXqXzWrEdAb1xPQrAejA73DW1ZCxiw2tQzgVLiqh1bov69jVgb5",
  "key37": "4R3b4yXSR7asKEaDxFRiWnfQfjqEnJV12oktB1QuRnzP5yEreRUkeP26jvBwYWSR6yb3znttE4p4SSwq3i9nVDBA",
  "key38": "4v9Sat6gcwUhuUL43APqkTp9LAeNAiYWh82yjapzkXjGsTmFaMUayyS8FKnR7AH6dGMowHm27aFhui5vAqCsWkg6",
  "key39": "2FE12zJEY9h8q6yZWtFQeN7N3Nt5tRjAtE47iS3bZhMCaovLBL7NTqDqLKjaE6gsdGC9hsgi5i28hdj4keZUN1vp",
  "key40": "2QUmzAkaCiXrnJ5H7cFvXhCAS5tworEWBCwxnu5pop7zTUywiJ6t1wNqToc5aXQbggAFLYRASd54cvWXUtrtqYa3",
  "key41": "5RALxvUV1zfrZttSDsniLDZcjBpNoZTfnnWNop5LzD2PpsX2b2a6SV3SomkPDTP3nUPNg1M9kmgdSCf5sgJNrGtM",
  "key42": "4q2WNxBkj2593A4hkF7QutNFuBnU3g8bS7HLJEcT4WGuVf1skutfZmAF4fJoXd7MbkVdnbQBd8DxhzyChoWT5tSL",
  "key43": "3BKjuGNqQU3F3AcMyCjRkVeDSMKdHMQjNQs6ZQUXDcjCmkoDWzkU9VwAv9qUQevNyR5S3rddRvxBrR1pUHsGpsAE"
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
