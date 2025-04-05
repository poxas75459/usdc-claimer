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
    "KSn5M2MD5qF93ogmxQ9mrJ3RNHRAHMBgKYgFuTECVnHtSwiDZauKjFBi8kjKQ78ktyiPUe7SPT6PwuSXNiw4mQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsoXSufKyNm15TjX9J3AQCca2TuhLodTxbJk9xLuKJmiXDRiH9mU6Qe2yLPKEovsSXPYkaUPaF74X3Q1PgpTZGa",
  "key1": "2w8F7m5m1yqfYkXWSaLYxwgFG41hm642aXhbvGqmkjs89u96cNDavjGNqT8TboDE3PeNG6hyJXuRt7LmW8NuJHTq",
  "key2": "eDgQi1Ea1KxUR8Fb38RKqQePeReaj8JgFrYogR3oFUYthhyvzB5VtcFRhXnSxxJtf3TxAx4AfV58g2Cwuu3omCP",
  "key3": "5UDSXWbUG1xzEgFodeT5zuENS3XKP6NUsKL25W2RkKdM7MmRL8JHTwC4mFz1qJfMTW6fstuMDqNpP2bh4mJFoKgR",
  "key4": "4SoKzA4pue8VWMkmQCHVDC8rady6nGvxcEZoAdJkUdkkxdHPUNcNefHny9dgdA38QzLUEj4XwhWz1gUC2Y7MjCxV",
  "key5": "4M4zcpZk3Yga7nv8WMGgm8tmQGLADm4u5rDzNXzvt5FDXqXbQaNeQpoxKyTNFpLpy44n4bVhuMLD1zWfEkcvJsg5",
  "key6": "2bJVkVs13EqrHtEjdvdqum7jTieYhqm9faXUXK2XBQA3zrEHfahZJGN765Ey88AnLzPcaSxd674GptbMtw8pR5sb",
  "key7": "SoXNfFwyuojuxZJ4FKZGFUGzJYP1w6uFwgwHZrnagboqhEvpEJcKpS1poSX9kLTJX2oVqwp8zhakZyJMvEBgR5K",
  "key8": "51XXJfBwuMYw8b6ekngqsdankAKeqHkGQchAut9Q5N97dLHSeu6BRjHRQEWerNnSb7ShC5ZVRgw5hqJeGYJ5gToj",
  "key9": "3fuiPXzNUsD91y79PLHfY2YttzYnkkSt3mrNMCn6sp5ABS4HmyepUPidMiRZoVo3CwDomzAnqTPACf9gDzMtG5ud",
  "key10": "38yZ57DFi17hL9trKJpHEQrEnUNPRQoVUx8hjyWPKbNKzCjPBMiUEZP8VKHFzy1JjzeBQHF8pknkVchuj1mbqkJG",
  "key11": "5GHehX7ZmAS4yEf1yKiRySAGmNv3iXEQKXn368toK8nMHXpMcBrEgtMLEdVfGvWuPj9hLQ2Y9WZYSvDfaguaxfeH",
  "key12": "3kB4gN9oh6xnZVfh9q4me6jKJUWXFA3U3DK5P8cvh9Y8uAvG38HdcZEVjTWkgRP2WyNARjy6kDXhdPK8EQRtY7M4",
  "key13": "gPFZeUB7kRrzfDPfJEKsWnsPDkdF6NuxVwePhxE5x7VJGiXLVR7ibfrPVvKVpweMCg6go9Sx6fYZkMahkgbGBoF",
  "key14": "PrpwnLubupSzAqvGVEyz18zMRvYgGv9JedZUu7mAiWyss86innVbg9jFu9vyBMt9mJUSZrsoU2WNYnrFAW3itx1",
  "key15": "2wQoyr3vE4zjJgXFphmLFrcGjGxxGx5qmZ9hJ75ur8wEstUCR2NY2TUegvYY2HcyGTffw3uCiZroSQt1v6ScC2Wq",
  "key16": "51cQBTAJr5rURKcAQBcQMF5Weuy5AH9WL2QHRFaatD17WiKBe2kvUxfLXfCDVzRzP4HJYzmfXST4xJD2VEb2vBSv",
  "key17": "45WP8VChh2HiDzs5po7tWVGc7Cm7LKAsegEsEgLmMEYGQXmyQpBQL3bzu9mX6g3JUpKsuKqeFiok9LF8ezoYKgS9",
  "key18": "5SuEaTw4VW41tyVw9eJ3sdtq2xGGAEwAVbn17qSEETnmngF4Laj3TgY26uACTAbyFTrzQbdVQ6BfxmprfhUo9fS3",
  "key19": "4Rp3HEwxt4vmiK7L4FfXJoiQUzTBwnQW6ddrGGPNrc3nDFinp8y9UQFztNLJu5v89NKyzMqmNQCKaL8bVmae566G",
  "key20": "24GcLfZ7YEVaSjghbZKiCobVGPwhyon3zNUzrRsZ24k8X67qiy3qnr4T3b9UUMQkNCtfa67eVoNQmXjmcWu7CBkU",
  "key21": "5egbccXGcp1Zdbr9PNdmRczsRduX9icVtXkqbohat6kC4qCFwG2BVS8znKqQkrCg4ma6VYAox8mXtbB5nEiwTw7C",
  "key22": "2HT2MUQjScrZFjEAmfqPfnW7yPNtUiJBzuXk5xbY7H3m9HF8uZHRQhRpQV8W4Bmk91cN8pezES718ZxFE1qLBjqr",
  "key23": "42wLUMHpxj73wFyFfQbxRxThn5RGwXAXVxWadZo6bibhETTNEccFQjk82K9jhGTdhXVEqzqSe2MzRffcjsuuYzn4",
  "key24": "2kgs1BZYyhKkiqbU1X5Q88yXxaA5JpcuZSyo2ppmBpTzNEnJvnJZLViaw5T7NGbXMiJX5GkjH1JaW3Cw82z4q8Qc",
  "key25": "2T2rg4NXhJNQFqjEP3Ar1aUiA968hY9YhYVq91Lkhx2UdSDQTPufsQSKFqHkpUhNJAEDSfbG22zNqBNwhJ47GT3x",
  "key26": "ZjT4EYRyzML3pRczY8myy52gPNKsBBHevXfmS8nuLypFj8PP8rmgnbuVaoX3uBLoRmZiUFaceWnvQeEBsVCVqd2",
  "key27": "66Lwk8NQTf1DfyQECJAkua5x5LCmQFCLin55BL7zcqEd1MoFQtYKdnybbdLw4DEQM6Y57MSXzhoj3m9XcfAbCA5p",
  "key28": "2SDSmQ76i9xnejLeJ9W4DYmKBcc8wHrbNtVRYmASMdJRTq6JD7PJCpNLaSV631hxjb6bu65AFtQErGRKnub3DUgB",
  "key29": "5wTip1ufKLP8ojph9ew6qzK1oMhMGBUusJ4pAVhV9V2S7of5DWDvnF9p7dcHCs7B8uYEFXBMBT1KYVSg16V2wtzR",
  "key30": "4n93SrNrXiYAbqZWcnmzetbV71D74RDnN7bMf2EhmBivDRtADYnKB8HnNre2saooap7izAtHRzaX4fFYcUwVmtDd",
  "key31": "2UChmPr38hBocUJAJTn9KzzieXbckvngtttfPRe7Smo2BwUwTJKgd4Az3wUypH9toWfaFC8KXNwWRm2RAHi3KUNL",
  "key32": "3kS9L17FYeHfPoT2mXtpuDe4a41kw2vGbhs7BnGjh1F85Pefs9kJZsjNsqygdEbWJkJZVEnAzpqYXKtRSSPFNvLB",
  "key33": "2uqiPARn7eQjH8EJxo3m9H5aRvL4Edu76S9oLSw3dwuNpqmA77gz7dQeUp9DrSsKh95spBz9TrRyuCnrsxXDf5iP",
  "key34": "4U24FsGh1sXv9wfDRHydP5Z3TKtnRMCwR797Lksbrkj1KxkePtrYYbwZSSX7X6qDgztfQNhPZeT17fgNL7LBFnZs",
  "key35": "BtuiimKgmzMrDYCehpKWJ5A4F7d3ueiEKQUxppMrR3FCiriT87pFcqGJP6H1LYhaQUbRhwnbLCrttd8RVzi6sGu",
  "key36": "4aStph69TWSMzaGnumCcJDwvU2ToGiUjhm587TFNMGmwL2NXLn6SSUVFD2rP6PHbXgqgqHruatE66XNF9gfXm3uD",
  "key37": "32nid6RLKddFQxuvpRxrTFwgB52LVgpuEJVvTGYUFL7E5xLEzv1UymS75VRfBFfHmQPNsWPWgeWfC4JNkzACvCLM",
  "key38": "2WC1TUSddjhYbNn98eArzDFCa6yBpV1Vs9SxD56dor8GHfU25FocWRJ33emTNMtmtE7CxTEuBHcYXg1eeihyYUmJ",
  "key39": "2pPN9u62hVKS8gV7v16ddXpJMb8VVMroHiFY9aT9dZFbch8CpnLmDt86Hmi8Ko6yN44W2BLRcJoYBPRPaMkZkaCv",
  "key40": "25pV1wGVkRgJdZ1Kno4E6JSTiGwVJotV1R3yMWDcqdqa8uccensxW2WVTi6yzRob43q7v2wnfWhtedU1A1LQrtLA"
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
