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
    "25e5ifGpFYCJFkoKuvCsMSAVW6rxXFjV8fWEJUJSPt5GfAGTrTWPrSc1P2s81KLj8RdBjU9djWEgsWgAc4DiWxXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HGRJktcE77yZqYrdvbKTgcNarYX4zqeZHsAjZ6CmPYJV5YotdBfXj5CVYV9m5YB5Y2t64gawLTEVTmCuuyvgY5N",
  "key1": "3jjVxgvyxUWecv6ZLBo5u8egjeoFmLFQXWfaUjNp1kZ4JPZJEVaaCrJURdFivQzMxcD8JLaKLLnNFNU3jrAMW1iZ",
  "key2": "3crRAVA6ab3cDaiKSV2ieTZwNKresD9gLFoaS9nGtTU8gE4poCMYx8XPgiFRqrfFv6wT5zUfUDhopPmVsyRX932d",
  "key3": "3fSJ93cd9tjgDYLBYH4qS3SB7SGUFaasVdBhcviMQnhqWLdGozx8CqvexAmvKm1YU6rhYRz949mxmJmr22a1jaxo",
  "key4": "26WBRXriuLxAgWtSssycbkLhVhgLj4qQcaPunHKoMEV1npqRA8kodJAgjoFqN6bdpt3i5MdEd6B3mrUMTbfxGPdF",
  "key5": "3HJYAyztAzvGEomVyAgicAnsBmqba49kNy2edH6Ke2XHZmVYqBZMid49m84gjvCH24c4eHL42VunRRAsZbHVSVLU",
  "key6": "2o5pjhzC6yZY5VBzGYxYeGHTovAisyUJsD99skg4TnJ9wUqMM3zwbCsBUHdxgQTmCV8w3KGyM3aJ9XhKALodZ9T",
  "key7": "4hXzt2Dir1e5AXtzvtJXExKvuraXV41XiBiK4SiyoT5tX2EAMu4eCY6hPjD2j34wcoRrzX6AX2KoNeMPJc5Qibr9",
  "key8": "5QipW9XMr35d3CMRbVPCxw3PCouQeWKKQHcAsgDhm3jycSwEy1kUKmZ5sVDFwXMEF3qdmxmpyBSc1vHz3jYE4URh",
  "key9": "2wqnTauFr2AE1j4A4TYmeZUx7vGZuaGr7sFzKWsZqTm8cugbqB6qFecetu4XBtQ21jv5nqqWwz63jy43Xe6BaeWH",
  "key10": "XF4L1feNVecgXijwMeyWgxSpDVMS8rhpQdXKZtKytah2atKidyCQyJe42rggvctpzz9fMsuicvFhyvCFsh2nh2X",
  "key11": "4AfQu57KrfrJtigsiEfgDYhH3Rn5CkJ2GBqzWUNzbNeGA1kA78ngocpnLJm1HaX9NMu3yfjVBCJryrqs5XBmam1k",
  "key12": "5yCGeYYzB4PgCTgHRxQYcgFXUmTXMPD52hZHgzYqfqHLi59DuKN7KxQWLfFPZTce7MnnFAJJLw9a2V1HtjQ7x85s",
  "key13": "NuRmZSk7Kf2iyx4hnZDiu2jDk7p2ddfiuFoT4F3hErczG4eP2BHzXM5KibEDcGUUP6DU65m4zPmNo96RxnfvmH2",
  "key14": "51nhzugQvcnu1CiXKitXWHYuvmPDgt8KrrKyF95bU1FNvQEpDp1itJh6d6tpAckxSfcEFjZQKf3RdKnaun1GoQ6N",
  "key15": "2hhqMXwmh8AbRFv3SwEqf9R1fXvBaKSqvwiDzatcJhATHLzV9MeCPmWp41DyhCwi2zoroiMhzoutgHv6GA681DTN",
  "key16": "5DtwJeks5uscNfPEmpWEuRTxy6HC3gAXz3H6357g7jzmTEJpAWWhw4a174scTpYdaxh5paHux3AUEsazBv4bNfRa",
  "key17": "4QhwmWAdrxA83E6ooZG5DznsxTJ5ZX9J5fpLhykik34NKSTe1uQx61o3oYRojWRsUNTG1MeiSQQafKdGbg9cYUAP",
  "key18": "3QSGdkM5bGxVYZWjvZAytoKibpPUJhnFNo5n8UvJoCRcLh7sVCaPzWRR27ZSN8QQzycScSqwa6hzw3HDFvT8i7nX",
  "key19": "2Zf9dRmwhQzpMr68F1v8EVbbLp4mw8rY5LdyihedBpitEnGaqrnsSWcz9NgumHQBgHvVPRTJ9D6hmxzhmQGiZCJy",
  "key20": "2V7VGpDoX3jx6eB2sfqhzFwNLFz6d7WGvjEG65xEBxVKemTQBcepJUwzL5NtBBGtgb9noULkCC8oEscVtcvpgWwo",
  "key21": "Veptpkzq4DAgwwrKAre7Gqq9m6LduCHrcSQrXYTyiqXEHAzJ43mbKhuHUwYhSaoT6ySmHJPTovMKco2tP2KTbCz",
  "key22": "2DCFuPaffsLKHo6FqSefnTyBqYiTCjGeG5rdn65S61Dt2aZYWsKaEZ8EhB6RLdACtA7VPG7RzkvDVBgpWW4QEFuz",
  "key23": "2iE4Ue1rQvFsiJ2sW1ichndAF3xxmoubRNh7vaL5p7iJJJ6oQM9CxB4YXfqK3CXm6SnNgHzQLFY1EH6igGR1KF4i",
  "key24": "CPQHAAbMVVGZ269ofXpQARnKZsyjAUG97SqwZpLkVnSDjhnycCPr6UrmfFinVRetot51cet3kAWU7D7XQ1SPWom",
  "key25": "5zRv1Uonaw5e9ES7QXmFYC346tJNScr6QyQtZwAyaaedh5AXUrKzk62DQtcXCry1f5YeJCBCq43iLDCArmDiaAhC",
  "key26": "5MZFoHF1ipFk8XhAWE7qbCQMTdES9sr4y4brrbf4aCpjjC8sC1DQRaNtmzgzrhMZrYPWeG12wqZ9pHSGj2reJJxv",
  "key27": "3DXLh4y8DTsEpG8WMbzYygoDV4r2m1NfyHPmxBDpbUYNxLfMgJJiwuu1TnAnQzsyCgyFs3ZMtN4MfVUX4hfUwsdq",
  "key28": "2NrEm8YsDKHuV2mvEXkpoke6wAxy1E4uo8foXgbZRrsMhhgnjaouFxzFYEaB5uH4s7oB2wYoxjKXFq3c8ioQqGeu",
  "key29": "4wPfYSC7bWsNuDzg8JpNDtxw5epNo74jVUSQryN3N9Ho9jV7vSGxcoW96gj1bHjpREUdn2gy8MxKqfYBs1pBno63",
  "key30": "5HixoJwgKK4EPXQLhhD96ScQ9CdTzoiBsoZqm8hJb58jRYuw9Z33zBtnY2842c9YoLcHKSJbeVJEJtyiy7KZrs4i",
  "key31": "5dVUVK4HhguDRF2WWCskgozQUjzojsqbuT7BJsAcCdSKDiDFKAQhxFtxXUP1Hz2BBbPS74ReNxh1s56xaoNjoibr",
  "key32": "64GgtKt9vvKs6uhHMrKb9ZRVo6nzX5eRDgiKx4XLhVvnmA92q9y45ZiAtg1ejfKVZVejJ8BCUDAumUtFPVziNZSU",
  "key33": "33fQBZ9vnrvYgaEKsvysVkorVC2MLjG4sETWKTAF7qBHTfJpbojhNvwjdGsGnMfMpyWTJ3JtXo1Q8ED6ZkoSPete",
  "key34": "2EYvEtrbrhiVR9VBxHGRyRdg9JGbfpNMpGiXMtZshgxCxx6SwVuA4KmA8yaFo9pHoYNiLAsQdWPxdZsT4K2hbPZE",
  "key35": "3nLj9kf6xcmH5Lb4pQfL4zMpHZNrHsvGNexzaF6UMMQurHDVVJqut12KyYcW1wmYa4UZmHY72aa1agxsvHhXsyNL",
  "key36": "3iwJLxtDbqg9hcEmLwQd3SwGEwpUVvnq7PAs5gf8vX5Ejb1P2MHMNcQpqJtvsNXP7vQiHPrri3CUYm6R4iRfti3m",
  "key37": "2cVJtvAE2WpkjG1ngvPSEzTXrX5yiwYB9NYGJQY6oqgNLKSH4aA6v15uz3hjbwqpJeSUPYaLCNnoJKZsQbiMPChh",
  "key38": "CjxnALxVsnxSJ1X9bL6xTUwufCjYXsemfzqzCgzraWtjJpzZd7dyKMnsoWUniXgBY1i8ajPHfthV7gfg4hU4CBU",
  "key39": "4gCchTJfkpPHC1ku8nyNYZnBW8zoVSF91FDe1aFA8DmcXcrUN24yE6h4AfAvwfHSWnM398oSdhfEy9kBC7iQ2GgG",
  "key40": "2YRMVDrxQNAqA1fzYrUShqT8LtWvkvs4XxvNk8gyg9KRpFYhQP13kZHs9hvFwdj9KfHn5ePtV8reCmVZgpZG6S2D",
  "key41": "4G2VG8J83nHENdH73J7R2SvUNKGeJoxiv8RSCJjZdZUm4qsEvJiGesY8sgxHDwexeZqysXR1gqRYyfzdur4JakrC",
  "key42": "5DQTAQMQEwbBvC3oobBQchGTjSYLTRGitEaWg59M1iA1R6NZvsbfNqLRiqffzphyaJvtHSL7AZki9EAYfvcQUAmb"
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
