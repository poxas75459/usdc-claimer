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
    "D4zsq16aEnuFeYARLx5doWMteymiY5k98iM9Y9qiH7Mzyo7nzqwaf4aNzG2wMiFDL8rV5r74paGZKA4vTeopCB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TjhydzL5hqDMby5BZLSdQTBrjDVhm6NnGH2a63fnNHcvRzE5wwosUyzfdBhhWYPvQtQegG6zrFapDoARh3HWS8X",
  "key1": "4rCY7j9DsUsM4DM65ioRHepYJHBq5NXZQEEaccncjyZZpjDGwwyrLakfiGQDqJ6qrB2rWkG5iSsFLALwbbCT7Y1b",
  "key2": "2rAjQbqTo4Ro9MxEn17ahCgGengEuqtfjp9JmderfKWGBm3pkozJ3izq7vutACGVCfDKtvfcH3NfXF8MHSwdcS6V",
  "key3": "EWrYY6Lc1iNnFz2dYjs22FCFXK8GsCXJGJTaGHh5czSQLr4HrNtbPUUDLpbz4hEUCvcbrdP5JjThBfwxwthGyj2",
  "key4": "2bhkGySNAnFQMwMFBKZjpQgwyF9EXSczWEoduapreLYK2F41hsZ7ZbARa9aXzSvV3csrX973NqWYJ7fZnBiuLEqT",
  "key5": "49b2jEnht1T87yhZmLxcwZgaJGLb4qAYQFpVBcSdJFEhYnusfF1FJKe2pAmwdmh1tYatEJHdcGfrF7ZiiWAHATcH",
  "key6": "2AAzDEaTwchrSFZShnjLgmGGsfqTBodV64RLAYFmyk37QHYuy5kU2a2JmHvgmLSpwp24ztHfH4zqWQzigEJN7Xt6",
  "key7": "RgqAgy7U9BR6cHzz8eJ3nYTekekssv8piqSgf9izdSaLb9sLoRqSZEc3R4v4Livc6zP66JeimKxTEjFmr3Q2j7z",
  "key8": "3dhPTvtJtP5kEtFy1A167Qgyt7EKFzdG2eRfsPqhM79jb1X3qWGjH4Z8ggkJwrjf9r4UeZxVmKRWVmubdRyCQsmp",
  "key9": "1Z5H1Ev1pAbvkYBc8Fvq9V7Dtj6zjucozXF3XmzoP2yXZomy9jkfTNYxGnMkYiFFWnPUoPqBb5oawVpQvFGuM8U",
  "key10": "2NBCP4mvZLTFgyRTyzfiPdPwpNMvc9bxuksa4QxBBsMEFFbXNkoX9LB7GjL8AXwzPTvQEweBkqfTMx91DNGSzNqX",
  "key11": "5kNmC2MaXtM2veubpjipeY3SqQiKUoju69xppgkNETgPqYBez3HgyaKBADBaVfgsBxDoADoWrGPLP8aXZ1iegEos",
  "key12": "4B19amnxb7wxFXeYgNhKgDx4MP7F3vCt2njsRHWniL268bjqME1fG5HWBASPNUHG4rc48mDkHHbNCzxNeiFsrfSA",
  "key13": "4phRcBJC5swpnQ3VuhF2XAm511MhJnqcpJsK4YNFZgPDxNCZajt6JGaAKMnF6R9xDyfktzExHHcve72meiHtnXSg",
  "key14": "27uZFrBqR8Y7JX1Zh8U66egMfmTdS5wo7G43nYj2aKve4stQrxDAfD89MxeUT8BCz23bi8Pyk3o1V71HHtfaxBgT",
  "key15": "25SnY465dnkUyPjssBcy9G7YzvbSo4ethV5geCtsG8TybFVkZnJo8H21YALJ5GWeqiuGdabAP5VbWtCg9NgijhLT",
  "key16": "4N6TayPA43QGwd2GAgf4VWXe7hd9Jnz2jYouHhNKQPeK7cWyEjsJ9nKiargHMgzZiP2o6nzLh41AM7jmYwQ3oBEL",
  "key17": "2JcPLazoXL1PzpN3YXtzhhBWwKbxprvJAsT1utiitefbtdwUxQTP67KxjTscgWk4sUfPeA8k2idnDKkQ7R2T3dFj",
  "key18": "v9gfFtpNA7sNQDfK3UPJHTsWPr9rV4SQQVFXwVHxSR91mnYsZj2nsBHu3F9L4bC2z2erQ6VProPSUus3aoiGRx7",
  "key19": "2hevQeu1ge1C5undos2ZcUuGjTQNZVRhCad6Z1tBbDkDRJHbJprAtvKzxYVeTn4ak9JXUktG9B6gnc56marnbAwn",
  "key20": "8R6aWv3CDnh7nfWDzV3We67T9oXb5KVAs5sjsznHUBnsMsyMvz7nL5SfKzxSsjHzv4TqqwdCQiANkcwcp3hFT48",
  "key21": "SSztLdADm1bVacrTsV2QhfbwFNnkNHaoJxzUhdYaMf4FEyqU1o5XauHym9v3frALJB7qk1whPt91S7fnjCSkMUG",
  "key22": "3RMFkGKwgvSCvVC3sNMNGuqw5YLbNgtZDVCGy7m41PNkwiMNm2outLka8npFBaxiZ6DrgDmcKFNisaCG85sKHNv4",
  "key23": "3Rb76q3kDRWoJ9WcrbRrZrh2v42awG31wMTnMCEN9gybwDEA7hfxGeStdDXhbyPYudz4CYKZZSTLemeJRoQWTejB",
  "key24": "eix6wrCqNDYhmRbbvweCDc323sBCCcWJHFE6Xn3sF8tLyuM4xNyc5BMK1419WhgZaUxmnAkyLUEyGQ8TZtArQab",
  "key25": "5z5XygvwvUS1Vc36F9j8GGrYqiFWQgAxw7D7TJXMgGxHHzCgvWYJNN3yZVhhtJRddhuz5WtzKdKv6bCGqSQw7tSN",
  "key26": "36D19EeXrK7SRosbRTdgmeamnitWXfgXx9YLvJMXTcbTXzo7PJj9Keya8CzNVWe4yytMuJSPH1LH1T1dSHxpjQyN",
  "key27": "Gpj8fMVdNciejJ74PtTZLgJJVT6fiNC1EEche7XdDhBTJboqUY9i3ucMiirSBszMZoQ1yhqb6r3Vu5MhCDgEipd",
  "key28": "4PBf3zmbNHuwBr7TWw12JFNotApJfM17DHkN8L5xUrnSwp8rr2zLGcCMotSQWCdkLfvfsaVAAbaGuALJ9epKGBzc",
  "key29": "cx7J1rRhYbiQh5NhKzYftBXj5qDacjbb9mAw5QptzN3QfUWm1xcJgacLktswQ36YMK3dwrFaw8yKi6aJnhVUcQb",
  "key30": "2u174K94U4tnEHKmfNFpRxQvnv479dqqRrrYYRSrjPveuczE89HNygTvLBEMNaDmA8TwcbzXyyVPjEv35CFk3Ub3",
  "key31": "3PtjuYU2QUWLoWFD6g8CmcWewLtUFVq18cj7PCKMyrwNytSbyLXJFV3ojm8nV6zq8i5GDjCo9N3G44pra4ZuRt5H",
  "key32": "2HzGzDkHudKaT9bYYcn4Np9pPCvphW1J9JeeDiwe4gWSDdR1UEzo6vrSuNjsDT5qn1uaUPLdS9iX5jQXjb1VtbWe",
  "key33": "4GGArGHf1t7KQCnUiWscJdgx5yCrULQamF3i7rBo6vT8UbxuKwbpGWWuYpacc4FvwwZqNpGGYyVVDwYSCBaTRTVg",
  "key34": "UL4U892d37j1r41bzZ9VkHQpCNevcEcj5xtw82CWJTCJf3VnaAisU5kNEqu5qbbVzFcq8gm2sHeW5nfaKgXyFFE",
  "key35": "5d8yX1r5TcKtQ12XFgwA6aYbVszHUK3vNnrYpjs17bcdEPNfgJpEhAXivVnF78rG1vvM4zgKNKcpSUdAiDu1C6ef",
  "key36": "5tZHvStXKs2Dtxdys2Cxp87FoBR7sUa8n2EMWcFDjy6iKzoBcg3mYitg5WdP65LooQt7ZUXco5GJmAxnw29Ag9YW",
  "key37": "qjdbfT3zEHBaPLbyrLuvvKhhyneuE9Dm6G7HwGE72kw75JGtZnZu8BRbibP6KwRfZKQdXtKx9kaJZqU6aA3Wn3d",
  "key38": "3wBvuCWZR2ymXRrG37jbenRJmK1j1adoURP21Zq7N9hGHXfLgiJBi3YHTPpncv2M2UMnZnQZtgtvRGdMHmPpztom",
  "key39": "4KJjTRRiDi3b6FKBYGZia2hrfj4zxtcWs5XLjhnWstrVJxxga26yNBJMBjYsrycK6EogFiMT7ANyFK3SiwMB6NKP",
  "key40": "2vcyX1F3Gp6bPwBVheKjzMGErr1qDKKRe7a4cu11vn6RVzsB6hm5Hn8VugkPt1phdCk3R4HJ5wMPnQKmpab1ET4Z",
  "key41": "3gFQQos7mjYbv6qxnYehNmrA3uU3TrXjya3tgxkUFx4jTV4k2XypB75z1yZmtXNghsJreShKkdcoarcPb5f7VFD4",
  "key42": "3waKDd8Rvq27ge1A6Ft8ji6ZYhFXyFWXJ6s93YXGWwDM56MhvCEEYVV18a3twSQ8ibZwMLmrsG5VkWFZZ1ZxeWvs"
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
