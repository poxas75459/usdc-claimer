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
    "3cd2FzPKwd68J2Ttkk5RtTP3PtkQ9Q2xEVECzcFP5ZY3LpXyU4ULUuJwLnphvt3Z5e5EKs8DycGMvCmdUArYT9o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGTDkoXYe6A4YuPhfEqiG753uCTJs6op9B46YdXQJw3DboT6b49UL6B4BYpeKfGnMjzuaJZUXiAZaC1y75RGfCk",
  "key1": "4F198EV4AU8NEG36EgpZgNeVKkpVXcedHkgRzRmgb3aShDDxVewvsTmkr3as4havFZMQJujPW2831xKr9kq8YHmd",
  "key2": "4u6mPgXAeuBbys5pMCUpinuhDPshJTxYjx23T49mDEJFY2E7iJfJ5pxem9tGj3LGcgtquobqaMjeNmyKyca2uhAr",
  "key3": "2FVpNrpYzs3rQaAhvMYr4C3bvBGwNMKD996HAXuRBQtvdEhua7VSojg8P6UqRrYnZJ3zZJ36DbQc2w6goCW54wdb",
  "key4": "3o8GpLPUDM8Twin6KTgYgcxD4Py6BupDLPsJrJRZPxPREtfzt41rofk7c3wwSQST6izX1QtBFhCQSFA6zBwEr1EY",
  "key5": "43sAA2No61PcMXcEvoBbX1KuZQRrUFbcd96AXPFHowCrDcM87FUo6PBvfYNFGiuTqArKrF6JTqBt1A9GfcwZcadp",
  "key6": "53neMsHHnrEcJ8rWKoDeKzeLuBeLyJ8j5TR6t49xMAHDV9zBDiTXwczdXzq3NHY19m4Q1PwsZvzkwVvZJf2R8y5n",
  "key7": "4S5raHUt3egyDTCwnNKeRhK36NpziPihgpueovrE8JJKr2RRmLTvD3z8Kc59pXaw3svtu6kRh6iib6VsPrLrX1JJ",
  "key8": "Hr4AA9vC2m5YWZmqPZbvm2C5478Xn4bhWyDaAQfie8HLShu2ETqA5YS4ykh2yuwNtTu8P2WKr9srJPh4sfNa2pV",
  "key9": "2mMwLwqDyq7zctAxirckZr8sFMF15tpR4rUxnay6geeniPdNeSYJvKq5QmgdpNCUvka547XZcfFnnyTcpEEfsSrn",
  "key10": "BaofoEcV25bFyrbkVriQZBR4Lk5CijeAiUxT63UPeYcQ2PASo4XqKjMgE2jKj4N8QgbDaJszvzF9wyaiEv8s3fV",
  "key11": "41QrxeyT5zhuMgwfa652sE2ZUmnPYZQ1XArD71jVXB4rDQ1kscL18CqnwucZEJ5ourTWXW75yWVmTbpKBWveTeHs",
  "key12": "5RcZAMWZ9aN69jMEwVKFQZwGZtzRxERDJiNnBQYJQLuRLt29b35sKrCoyigwTYGV6S4jmm3AQWrr7t5HGHfbWKgX",
  "key13": "ndYRjbYM8u3nmGmt6An3zFZrt3NGtsnUBdTAei5NxemyvP327encuRr1ttgbopPKkpd825FR1RGpQde8UPqh4q9",
  "key14": "5NGtZdnGxWnF9LecJHdsaeFVMj8ef7b5ZYDz9ScfbsmbjqpKPE3EAZPPWahrGw4492DQZY5NQ5mj6srv7nAedZrW",
  "key15": "3wGKcu3KZnBoqJqkWvVLuk7mau5SiyRABuoNe8S9mXjS7n9mXG9eVus31KBdzHYJDe9UJtBtK2W4sw6rnWWXf4F6",
  "key16": "5tMNzQQZd87whg6azybUDGTTeeBEVjmtbd82u4c28yUNnPuN8TmdGWcL7SahAB4E6ozAnsZNeMPZ7iytg7kURR33",
  "key17": "5BAsLNkZgfJhj5xms5dSyJMAjBu8qSRVuRphFrw6tqUuUQfzpJaiC4LCGJjtPA8T9XCkvnN6qMYdfEsdyag1L7L4",
  "key18": "4mkv6Kc5ynEq9YAmzrvTrHxsrAiAYa2WKUyYLyWmJGWUoGu6jQ5y4vDKnwDFGwY1tjwrP1B6d56kH8V1sZLTUhCm",
  "key19": "4g2J8fXqgUqErJd9Azoqd5bwAH84Tiz5CqCZj7swkz4wzbgP5wbFPxT1NPE674D6h8VWvB4UHsWKCQKxKpdzxpcH",
  "key20": "2GtJcdFbQkDvLaVhwXFr6hE1VKyBGbWiE8mUfHNi9zXfx4zdvKoBwKyK8k1oqNS8QvoaEKaNS3GrMGA46Pb4YKHb",
  "key21": "5e3UBksDV1fsqFBA3fQyMX79RwYYBQJj2kL92izVVekvevZonzijsBqx6imbEYHTrYPRNPTM7maxtEUPUmXQfMnu",
  "key22": "RZNw6gys8ycciCmYHtDtVx2GPo1rRgo4AqYarF66un4dEDHJiRpwtbWGDqHfx25daeQjDydahF7riunpFDctKw7",
  "key23": "3B7BEcYBLMSfwvChsoCB3DZQtx8ht7KSaVZ9ukpVZmAsuE64vMMzko173sr2LBjGiydncPhsxkVRyrrdJ5QQVxHJ",
  "key24": "5Ywf4RRi89vwkm3roq7BLrtRee6VsceDySELSxuguem5gohnXcXoBpB3Y38JQpWgHHE86GtMtso6tHg3HTLy2jDG",
  "key25": "MiHGxonRDf5xa6ZHS4oSHwYjMFvpw34mwfdnbMLdMT5dbvFfsvYT8EdZM3U62b8BCbAsyQUpkqQvLW8BFyKAkR3",
  "key26": "3L3gTkB5FJ9xRnTc9csLT6YNCifatnyW4AtaFGgiJd1YJoi49kzC62bMabPZNNp35FSjF5jxKmKHnwSDfZhEw7nQ",
  "key27": "2DuecLMU5M88MzJLF8bE4k1ZtnPwBvJfN3tRAg3kY8yvMovTXFApiZ1rpE4tySoSzALzHBXKsCsVWmGT19DNcfDT"
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
