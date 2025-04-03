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
    "3gxwJKiNX4cvkGX9vTUQ3WzzHVEYsj1H3BY4vSM86S91PPn8ExC7jhWm1zRaevmzwt3k67CCE4ieLgp5nBFW4s35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBqQpCU5Hmbk6Wqe7QNwYQQW7eikxvCrGJDMfAxBGF7iUGuDphtyAA6ED4MYCdcNUhvtrCAzu7xdYtgZ7TeC9Ck",
  "key1": "qnq7ta5faeAp3F8cVN1khgF2Zrku4mhFiTrpDTmt8F2Pfp7Yh5Z7ux21DBKUCF4tVR862CbdEPqABmDDDi7CmZD",
  "key2": "4Se9wghwdz89EQX5SWnxFedJncC1wAW9fe2gngcYmQqZ81HtzvgyrHNCRvHUoYBigEitatzSWAh6Ws6YgdgtJSG5",
  "key3": "4yk6uLwSu2Nt74gseXoDpBabGKEFBA8vK1kbrpwJJ2ug34z2fxtzfu65SUTA19zoTMrTZnpJL8byk8Fj1BaaB94q",
  "key4": "qDwWHQarVPfQCRM5tJZNZmMXUeddQiYpWsanwbua6yLjjdu2DUp8uje6VUbi3qycDeEZ1utX8WcQMFHESYmrhbL",
  "key5": "3fQ6s6QMKsQSMGkJmpGkN5Mu7ZYNS7cW6uz21rmcYQ4dFWzdgjTUeTe5ewWA4UpqdAgDfSWLMyLKpqYTwfeYrMKk",
  "key6": "JqPMw9tk7k5mVAZL4V7HGUGiNTmswmGpgjvhP9J4DAMArQ7P5QtCT8jLSR8sXAWUQ9TADFao6eSeCbGJjE8RP6Q",
  "key7": "2QWpSrxSvp255EPHJoWsEmRi3Ypxanz6h2LuQviTZsaykg8eG3s8DzipTtMcqUm59bxXSeC1DLjYKdGGsTpLwTJ4",
  "key8": "3xr3nYamHtPmAtHuHLCRPqLqk4LcFdEB5qqHVhC6X7wvn81N4E71wZkxMiy3sYmsHZbeyYpXyNjZZg51r1hmw8fo",
  "key9": "56ksUJKqpDoRXFwnB6G97JLsjd86Q3BijDJX72JwkUSpuAHkNN9rWX7m5cEBYoUDSUXrwDr4hqsCKqSrnGigcCe5",
  "key10": "5b4z7GvKrVsY3MRRPMhC4u3ZzJUa8A64u6PpT6Kg1LXux5rDJni2QYpHyfQMKSPp4DjPZDFfK9ppFLf86rQ76Gbr",
  "key11": "5Ytk11hUMGXVUQce7jSdrgKeSp5tTFxk5daKcyLaZJYaopt2uFCYWowvFFMqEmUzp5mMALH9pxZ6GpSC2ewWgsoQ",
  "key12": "5ujziXMojSquP33Djb5Nt368mDq3bMsuJChe8x4vkePyjJ5VRhi46Mo4CA1vkDwcyCkmTecKm8TK9z2Zr9M778AM",
  "key13": "4oqSWYapigWYt1epNzW6jQMHHrWrVCr1F5CSQHSw11ED1XJLKMkaFZFot5rM7QHSRam4kfxzbvmt3M1H5FBvEaAs",
  "key14": "M6DBGWJWwagG2ydzSxateZcjARyCji3ezk3q7aw7RmQ4DRtQY8jdgacsofBoGkm7obMXUJeWZ2ZuyrsUWY4bHsG",
  "key15": "38Z9Fq9riG5DrFiQ4nhy4miS9XvXemttrFnhWLikqQpxUzF5LmYYsNw3bKgwyyNewfvqoVB2h2yHdodHqXGYAJEC",
  "key16": "2migVizjgcEpP1pnFR8gv4DyLVUkiixL71C14FeaVxedd3qXQx6SVn6qvMkkcPqsA1tQwYzXbaBFbm196RpKKmvv",
  "key17": "2PbjCgtfV9TqmEiE3DRpp4daEZ32X8VXetqf4DtFE6oTCp5GnL8nGwPkcTMPVoH9p8Zt2rH1NnZKY4PbMrCFv2Nt",
  "key18": "2cxNRGPmvMXjwjG4pLX7JZkwQgG935VzmrSpc95ZnTNaMC6bFZpNJYLMqMfHxmjj5DZSuMgxgnCZ2duQpLSwkDRb",
  "key19": "46u9RMttkxZtcUEUWuUQdUR4MYmJwfR5Zrk2mFUTivB7RM61XtSRahigN4SxyoZpCXCiJisBEGvfD5r9JoRr1FLS",
  "key20": "2gagMSY6N52QygdRJyA4K4NWKbQcEBeV5ZpVLj6GVKzXnfPa1Kpyg4iV1Tkt37KRkG6EekHk3c93xCUMyDvHBb15",
  "key21": "TbyLTmgAGzktFy8Rokj24KbVAyrJdaQFoyXJjznaUAdiTg3Hjer7AszUiXXkmWsLpZg5XRNH5hJ5jnxHzQfDrte",
  "key22": "4HqBnt5Jy7byCV5VVRzdaZotFUVR4ZUYrnjoMhhpG3n3htJWrhU5XMts5UskuVanUmqUhqBY4L4oyvyqc9EtSv1u",
  "key23": "3U7MEbVWsMNwRh5SgQYbrhQnWazqRmVbRqbJdgc9mYCf9iqG7tV23qZ4oD4y7SYnv35T9YxHbDTVFVrgfEhWHuFF",
  "key24": "Nf9avrDPb28gCJTZAaP4JRjycq6yrj3T1ZvBSToEqen6r7jU5MtyTDpeQunRMuMYo8t77ce8Dqu55RUmZ6SwVka",
  "key25": "4Syi1mPUdGyd53UvQf7WQUP8SJt5efRf1CpZKSrq9xMdxNdBnFtyGnrTPmGmVTpSR8VqXa891aJBsRcEFRLMAwL8",
  "key26": "4eMwDTZLtH1oV2qsh5T7jADNDvam9dhJpi4a8DBmjogSS3im2JLMchXUHoSKenwQ9VYrWDFSvXeMtKQFEoP2fgHu",
  "key27": "2eEHPLwcf1sHdeq1PKUkGAgmwYgrvXhYGtuK9HquXk1dcE3jUYym4L7kbFCr9EhazBzGaazppsSskfExZeidcW53",
  "key28": "3wWsB2uicXHu61iYNByZXzpELAuCXA9b5XPZoqJ1a6fhFvT35HPna2sfqeVbdisY9gqbPLiMHFXKWKHqQuRJwuSG",
  "key29": "5VTDABFGjhoGtesrp1gxJFtLWrmh8WUX7DJ1LApGFY6ZCYFLhWb6bYVCNfxjrd6evLitfx4Bbtinjb1ajsRBuXDz",
  "key30": "4MMdqbM4uYLGDaukUyVM3xqGE6MznSWeBvt1fVEL1KbLu4sthFAUnmYop3WT8W9XENQtmrBkRweByjcW4dqjsAXU",
  "key31": "5CkZGL51Dmk5z8FXe4YksMVd8UVSeAFXPuroKhB2D5MoJs9v8cJF8fXow7PgjEvGvQT9hmkmGqFrTXoWk9UXeyK8"
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
