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
    "4xp7fvWVT2WsihPdkFaRC2H8cK4zwZWMcVntbjgSoDqSRJqDCR9oHCiUuQT3vNfT4HgGQKSZJuaskecRdLpxuk4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKbzbJmf2JjEPCreS7kmtW5BDSQ8vzeSN1AJ1zP5z9LrfSkkd8PPCrX7tpPz62S8hzRMxYnsSY4Bw1qqsRCErFG",
  "key1": "3q8NF6CrhyKo1yqRW9tStPtAjc7y3rEHqTw9aYy2eArq126jajg8XFsH36ZDMgHDd19MV1QwbBbFGLqqzTrUF4hU",
  "key2": "5QvtetGoywyg3hYGr6gN5f8kvCbyFWLZu5JHKWLQp5CsgZV79uyx1LJsWMHqfZRdKi5v691Ag7rViMGBvvZgUw1B",
  "key3": "2LWpBFk4sfHsFiJmprEUFv4YkacJ97J7ui39i7epEgC2D43XypjL6LbwSAkk2BnHcgggRqPQJ8kDf5LC1sRXHyEB",
  "key4": "3hfFG4si48S6hEtYt6LTdoQccS4462LFcszafHiiPhwPDZsWtN6xvQLc1KQK2CC8B54Ssh1KP1XNjCqAi9FNEsTc",
  "key5": "527r7FZ3y4DX53qHFoH4opLr4z84inh7QnNsUGQ6VHnjbmgrot5RC23tt7MhQHAnVEXUf9eugBMFhFGLyPw47nnR",
  "key6": "56oU3CbFHnNfJ7rnn9uf8U7erj77yREUkvcpv5bHmj6w5Fdvp1ct8V2iX7gJkyhQSznwNeMpSfHVy4aMR6vZWjGK",
  "key7": "2xgoFZu7Hsd2jTd1t8qiCn9NxdfyavU9Ss5oaHru74LiNAAnSkLzr2Z28NN5jt9K8mkUr6LsB8FEvbcu1H9jMXQN",
  "key8": "5XgE5fYXQDgsZAyYZhRuy9Vx8RznhyQP29vwGJeUNKasnQ5HLLBY5mYi1Uo6H45goXzSBkitVKsCcdAvRPgmqxk3",
  "key9": "5K3SasrHZX5udVFnStDELp4FnkaHurJj62vC5iJLytr1a4aMuWf1EEouHXpSoSd9fu5tK1mLdgaMkRXzAZ58v15Q",
  "key10": "2HwQGUKtvD6vPe9cickiLirSGhUYmrZQVq8ePzPBkUmoXrMPVcXVkAkgeqjSpBYW4F77q4imiYWapzGJKTq6DCE",
  "key11": "3tgNymbo3Uw3ZLz4hQh9dRzwBuZtEjTksm43ugkUqtwL8N3NTGhfZjVLx1ADn6fjbfy8QXgZvNC9JdsAqFiVMTdb",
  "key12": "2PDsG2KQQe1zNyxCfn3KDETdzCHVyrQgwKmdbisc83WwksVtrXVKbAq5N1bw1n5nNLduPkRW8Gxq7pDs7Lauecj6",
  "key13": "4gt1cayb9WkVS6VHH5ARuvgSQnxaiGSj6tmngi5WELPbZRe4wqwf9WKQduM9ahieSdJhjNspiZXuadCCKXQaLDkL",
  "key14": "4bPswWM9GLCJsgWZnLcxvxbgr9SovnFcyxSpwGqJLonhKgMkJmQbuNRQsbeRhQjAcx2iuao3gXsYEjy1CoiBBQq8",
  "key15": "4hHWcBiaUiGKpU1X18Urq2GYYMFDG9DQEp3JCXtcBBHodTFT5jSxLdzTwdpErbPgFgbkTxVNhFeojtUGFCFQfWcs",
  "key16": "32Xm4Qp3ReKQWVkXW2JMMBtjBBLJtc1PTeew1CE3ywJdiuKPtqArBAfsd6QB2fqm6VyvDeMQxip8bNTKT18dqZ5n",
  "key17": "2JDTCgUjdqLCdLEgqSAMt5ema7WdeEBMnuwUmJc1Qzejfr9kW515MHVxGSTQUiLa1q6XL8C69qpui6PcMiy1pWzY",
  "key18": "5trZWe6M3i5q8Rb5aqKzYRsvsvbr4f85fF2RRieX3WZvUmMHRkpAdTttBJsL2ErVkjyyZRUpBcvdT412oiK3hPfc",
  "key19": "2onptGKtMH23GFpkrqfK2vs1H843rUYdFCKJFbjc4rV7GSZPBcHvi8DNicJCsGBBNqYa7TD1enVDbQcUpxhHZxYw",
  "key20": "368gAGxVQp8DzVNCSmJLULKcV4w9k5J4zhurSzVR34N25ciPBpAKeEpxHxdZQgUqjpJ2KGXSL7FVhfN7BUZywT7d",
  "key21": "kYwtz7NUtbAHu7KAmgcxAo7tmNjnAKVLSX6R1SwFaCMaTKANzHac251roRqYBmRuZaK6fvThhapYYLRY6wAEPDx",
  "key22": "AjsnATNEunbDqHXr9guQAvanPDZ8whihQcgrneJ42xXJPtCrUwdVoysfXXHjsPdYHUfFkreUEtNjxnoq6Muz9tU",
  "key23": "5jhkSL312AJAE94dNmYJUcmTN4rkiKBd5m6UbiWRwsA1CxZXfrGKnSJYkMbiGccnKzHgwJuwHZtMxvLEoTFwfPVh",
  "key24": "WhkV6S8zV2cfhAN7BPeQZM5dEP5JP4G86koJ3EZ8sUWiD95XemtqS9WhhN7XfpQ5jK9RRULmsMhdzBkzt3VE6NQ",
  "key25": "4Y3Zqe7Js4BThN1Dm5UuavvchsNooVknhGHQt57oAzkwLcQrCVtqED5T53bxUP5CfA6Ut6Fy8sXj69MuY3WAtkMk",
  "key26": "5DEe9Q7aT9As9cCQU4oLWTCseJ9fiT9J1ps6ZeTSQUxNSoFYEiBFuhUPEDJHc3W1xr2Uxk6mc8zjCY1o5xGbvwdM",
  "key27": "2bdSQmDvju4TnUR3nVZHLT4sQhJY37ViSyU67xHKGRFdqRftZu9mBzTSfMivuUiXpDcFqhj2GuLe1JZ8xX8UPEh1",
  "key28": "28ShH5QVYozrpvxDKJKSwPC8THni4iKJEEKZzEYwzABWuCcs671STY6SGitfNtf4kcsVHXyVVGREgrEnxDRGrdmE",
  "key29": "4X2bNnNQHmEHuAyEr7GuTFrV8GDCRK1itsEXtWMoPyrnhPF3qySBjMHLR7QMAcMHtmbfqi9p62rC6NA3wSYCLjVA",
  "key30": "2RSEBWbn7LuAbHuvbqb6WeXu83js1yuyozr2xJk3dyFJomfvUcDpJkBVgVhh4C3yMy8YpjB9kjCyGi1D3dHVQwM9",
  "key31": "2v4apnKduvWhQSofVywJ2XTMD8uJbrwPJFBkJWXE6D98TzVvya1agqzRSTGyYTi5RJzLEKXrWtd8aK9Vyfs6LHjg",
  "key32": "2FTUkwXSK1gRrc59QFaTgrSiLMWV1xKUySpdsFW9QGfnD31FYCTMA4PecWd1icKeM29Rmt6CcXjbMAv73RscSoQx",
  "key33": "33TkFk39WEYxBkpZU3out6J1CQmgT1yu2F4rM9SdZYTw1Ahip3LiGf2BKgBv413g7VFcD2FYXauh3jxyNdshbQis",
  "key34": "3GLhumRJhvjWJRUSYLZ7TjjjuZd16ntHcA8rRkByoCopCYwA8SvSacLKQodBoXHpnUszjKdwdDGSdcUnBbT99dMm",
  "key35": "3wfFVKUTLZbvqPbz6YF3Ah5m91k4jFvhPXm67E31hwZQ3SVmBXntbAdiwBGWPUDCKESNqYZkkV3neNxEcTcDsX3L",
  "key36": "34TBs8sLfzzGFY2b53CuwbQJgDu2CyAMSo1X4745FPvoMMD8p51L5q6L4qyHtWYRQWjXhLtqyyuCPYgSdmLG8cKJ",
  "key37": "5PmKoezikG1FwcjgjrYKxawYJbY2xtkFkgUMS9W26nxWM9tKhckTqUXeQmsKUFsWqnpze9qVAnkgjGGWGPUBxxSg",
  "key38": "4KeA74t6ybAzNuAPELoZv1Nnmv7LH3akzMEudCifkr5zSxdYntSdKzgeR7u2q5RBDJSpsLN9ExJaBUxT5togiVC8",
  "key39": "4mS24w5d2CA7cPxHDjou66LhHfgXm1HJSpmSU6tzfSUY1cp9yy3YN3SV47rR454tpRoqoN5reDJNgGL37mWURmyd",
  "key40": "3yRwyceysUoP1Q7wto6cTMgdZoioCWjLH93qt2GWWAknpUoXCXXF66V8KMiPY3oxdEzVjaLtSV4xMN6VWWKnMpna",
  "key41": "5qJ3ZVhXQWufxBvBWKtio4g5Jde4aS3qNNgqnAPV59Utttpej3vVte36zWjHMfnbWPBAmHbs6bkLwjy5ZZyHwQV9",
  "key42": "4h85wwaFkVb7vBrPdQ25usfLQQ1SGbSyonYo92sB3QWy6Qzu947SGqagfuSpHzNQ5N8QD5WXc7LZ9KqmuoYFg8uz",
  "key43": "9R4xzSD99B54LNej4bht9gigFnFL4ieYQ8aNEcovYZFXEjhHB1BoXzTkEaJGbb3bvpwMp6yEbKUexYVQvMXVQBb"
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
