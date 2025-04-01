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
    "5Dx9U3qTkeW92HoL384bVJ7cFRYU7m58pD4PY1Z2C7uynnjM5q6zX4ZQA5hMvQNTJyM6px5toAqAAcTb22rTXeb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w4HJv6cgTrnQTN446cQfPQgWx3VDrr489sdNiPeow6pSCxyVbVzjgoGedP3MYZVuez3L633P9Pk3WgXYZQ1W1ZZ",
  "key1": "4xCUBDP1nD96yhZTmB9vL61XRtKtTZyjSWXgassk7kPj9sky4WriBKK9tWMJHb5SoAW4h6n4z5fLH4QMNnGhz9Yr",
  "key2": "4aBCJimjaTPSPNev6jcVWCb56jZvnWmc7WEn9eBmMwW8XJWfpkgK4hcXew1MSRUjDsSMjfC2nKbMFnfUS1RNMs7V",
  "key3": "5qYuvWt4qckS4JvcBQVCaNsnmZPcvY1R7pWLFZDGPkWDgXc3PasD7fLsUkMWeieKTskTBKbfWPYgVHhDGCiKViXV",
  "key4": "3MAskjs4mNVcPhyKSfYn9FtWkK9L689youwVVLJyMCiXaMx43HV7wyjagJkhLQCi57EKBmJ4sQsz9TCAvJhRu7xG",
  "key5": "bZFmu9SfWVxY6jaHeYsWHWoXcHuvebPdeeXDyAswLnRnBbiMzUJJvpauQnDCsnzA5ZcHy4n4RuUJpFqcGSPvDtV",
  "key6": "2hLeifTTwruhMDSph63HHLseX43o7XSxY1tZw5Xqd4ZYmVXE4P4fQcPfDq9nH4rLcNUrvPTFgdMy32FvFTAL1vx2",
  "key7": "UA8Q7Wr9TPfASUABanPo9fwh7o1pgPgFdzp1oq7pVAFJNBgCKQxH1FxSBrRMPmYmJGTExsaaYiU9iFiA1HGNpoM",
  "key8": "tFtw9gEKJdXWbkk1ezABz4y4Z1SwF3EZtYh76KHWLU18MxBp8bSeN5PNAmZRDN7tDi4Q1LQWFjY26XbcxMjpLo9",
  "key9": "3Qh72K6QU5hC5fSmwPADAJpx3CUMvPSZurHkadwP6bd5GYjH8o9b6CERyeMg2B7RGpAtwHr3KEk7X6bxPeggYfaS",
  "key10": "3j6fbkc8373UeGmpGwp8L1yyXU1N5Y73Z6KEAq4DpMZbLtorfifovYVtAj2vmeS4gxozZGqC5PZxnnWSyEh1L4sA",
  "key11": "56gtd5SExxF6JVv7LQHUUK4H4sdBuX1iVRYq52jm5JMebLS1sWebbZv4Lq5PiuYxUdTHdnR49YBjAUfXBjEDzAEz",
  "key12": "ea9t5tZVzCPZAyUJcF5ZhqBCQUwMtynFKTfZ3BBvyPH5ws1M8MPbUQC1C43c1Cms1hec6A1Sid96d8m5ZqzyMbi",
  "key13": "43fjYzUSCxkCJSSuwwAxTDB6Xofb5yV1gDr5cdqNaZ7i19tVmjUXmyCrT8PD9gEZ2aZ8oq8tF2LTuquowbbPD4X",
  "key14": "5a2GuundANsqW7FNdVBxuo66r3kVMe8sYramotgdnzZQkfmpsiQgME1xupfur3c4rouJDgcjpei2rUBq6wFK1eXd",
  "key15": "R28LePW1ZUwtd2eDMMfPtBZpE1Mvinym6GQBqvcMJ6hz6w5s1SwCtavjoFoAekcAAiEuucfaf734b8GGU5SciXN",
  "key16": "61YpdgWQKQ6w33sdYGMVny4VuMrRSaDUzNxjirrbNLFYyfG9zDp1L7vu7mphHwWEr8zQVr5GUeiYkhsn7SA14wpC",
  "key17": "2v2DGVzLNDLE74AuoBnDvE8juiBFUmDCtAqsWsUzFKWYZjZXVWnN4gCiFYn8jsor9kJ21TN7eKMeJ9XKYFVztsdE",
  "key18": "oSegNhqtbnyago6wD512S9er2czSvkb34i47MewtPDgLokTvXH66iHwtXTW5UCDBopqdATStQcZgKuW7dE8SFcK",
  "key19": "Uz8x3pJfPn893FYhrQnGNq69LVoa5mQtvid8Z3AdbFJu3pcrx6sM6iVLjRnvE2wSrWQqquukL766XBuZbWSGtEv",
  "key20": "XvYw6HueUvgUk6nEXz9JR3NWcywc8zgERy81w9QvjGTnd9tANCYBwT1XJT13cfpAoBbmavEVT3UN7AdPCLzteAe",
  "key21": "44jM1UsEyw9brN5PngvRAsSem8FrvwX22LHoNecEyzsFbyYe25c42UvoujhMAferxitxLqoh4ksEsMSENF5F1Mau",
  "key22": "4qtbdTCLkxKPMZXKDrS9VxRVSgZuW7LP65PnbWrK92TW1EBfmAnqYR8RzFtqftAwkeFF6EKvkL49V6evsewsGmxb",
  "key23": "39HXHr5iJDAFarmetEF16fmf5zwbszcJD9nTWq4zPcfCg2C5Mt6RT5EFxVrxd6NKJQ5LXhPnHrtX65bv384N7K2U",
  "key24": "37zoPCNAUXqRfRryYySG5XuFwYQhQB69b4Hq3Ak1Ejk8VqyxWLVAa7AzmV5dkfcDx5oCBgH4mdCNvBCfv3A4eycR",
  "key25": "5iT1XZFKuAHZenjKCSxmtQtZJhDVoQw9kjtU3tPmYgYYjuLo3RgNLRpAXukWackzNodVfZbuAEyg5g2hE9y9ygDZ",
  "key26": "2ghr7Zhc2PR9KfazLhnnAk9Vg3WEVfH7g3ZgTWauzL8ynrJaThMdWqjuWrjcDjghennsf1ShQs9G5FEZKDzLjXJ1",
  "key27": "EN5g8bEvqZ3Mcp1jzpc8X2Yvfqime4z5qFH4K2R4tiEGjjxVeKvJJmKuU49z3iumott48MBUQqoEm1D2yGQDbuR",
  "key28": "XUHKPXs8tsJFtyRQ1dsh7HwCmE8FxxPtgUqKi1gUhYNXUFy8b6hNddKVoKHcXapW8vC6cfrTxujS43LqpvWgX5s",
  "key29": "5myY8faQXYg73whmgmYavtMqLZdgamXQFYYoQjwrUpnT5YXgx17w2B2KzHTtSRcmnEbdE6huyDskE2pyJ7VyqfmD",
  "key30": "3P2pTAvVWQsue9Z6fmj5Sg2N1aJt6eqfDMmHoQnfvm5Y47VcPrby4wFpzNRyBAd8evu8MVUK7XQxvU63BZMDQ14Z",
  "key31": "5sjHnstTdnfKBUH39bmp7Z7YenhK1oweaj8uWFP7TXGFjhBvKp8aGVQrE5MaHdvZ1hD4EGBRTdLaASdL7r45We5e",
  "key32": "3mkkGKjsRR9PuAChJXVm4YFBP1NEdaqaYzeAfkJ3cMmg17GrQXdLVbtupPyoBm3mcSs8BzGD9QKrLgH2YBmgaWq6",
  "key33": "4aExsxRZ4L79BVncD7x4wdj541SWUP3CBTydm97EHhyyKPmcmjRtnBW6gnsbYvwRtRJvJkPybGtY4wbMpP4C9mvK",
  "key34": "4EZgMJBSmbG2RwrJmeYcVVbKZ3eskx6V7sePtGBAYFq9Xsupxm9CPUnXuvzW1rWGLVMSCMufRrJTkjcLyS1qsbLb",
  "key35": "4tR4ZtV37XtuTXLMTwak2etJs1JiPfz9ri7MLbnavVBM8sAN85XgLLkJxpP5ijJtKfYnEW6sgu2hVJkFp9cN82kX",
  "key36": "4fJaoY2uu4n2VAvBC8Qxt72V7gFovTNZnAZX5RwHgbHDVHKkzGG9pCrDLhtrKe9Dee9G6PXN74qUxv3FRhZj6oD",
  "key37": "4vwSmWCHhXDBKy8vYyNQy1J2dugYN2Btw4phSCtAGsqCRBa1gWVk5kBmDM6ew51s7B9FV8ZAB5Tcvw8kUngUGDLy",
  "key38": "jTqvLqvXzn81NJ3rptAoKVmF6bJ5iArG612wPBTpgkfyj6cqJveGNtDaz4UdEYXfCLzdhE1RPt8Z88be91qnWDK",
  "key39": "2r4U9Aqezvpxph2hjFv3zmiZ1HxPwwBxryS3NChkPub61Ec1gYNm5EfUVbCKyQXZXLQZ7Dv1CUUKnd6dixtWPPNG",
  "key40": "3G8K9QXpzVEsJ3Syvzw1kAMdm3b5SzHjDRr4x3yydeHvH8CFkU2jGuJNsn6yVhqX8nHDXtNGgfv6JWzyKmocFbh5",
  "key41": "2KxT9ab9RF9nhKdU49uxCfVe2Ku9W2MQirGMpyoV4VKZwfPKcG4FtJjD1Tfz4Ai2K4AAJ9zUDsAMuhdf3gLEABZC",
  "key42": "2pivrJAU7vAdVKPxA9JUbbZ7zE75HWZoaLe9yVN2tvqG3jLA1EmZgLWL4xtCJXEJN4YkA24fDgA4LFdiD68VDR1q",
  "key43": "5Wx1ykJc4Mphm8pzak4b1TZu48ZivtMEZy9vkKqdbQDEfoV7epmnhrsYbhwjePwJf68d7zvktiHjR9dMooMYw4tm",
  "key44": "3VSZPQPrsYLYF5ovNSNYXAwUt9ChfxBjmoJ536xt1GDgawpnHFSeXUj4j5Fu3ekdvFqvmtzpT9AKYXH2PMM2UeC4",
  "key45": "3AwRttq4uYaAPqEdSV9FSi77YYV3iKd4EQLrQmu5mrj8zycn89FvyRNB7rJ9v7K6CQB4FDrasUXtEhEzcA7EqY8x"
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
