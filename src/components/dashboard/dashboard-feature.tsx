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
    "VGHf7jF7PJjQuDLe7SjLfhMsX6WobjVXqL4wttBTBSCGKNLFCjyjSyeYX5WFX7faxVZTbzoyaa37NHpPfwuJuVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3868o2EnmUuAcxZZcuprCTKr63kKUKd1RthVn4BJopLNcVuSmC1V7uNvNsrVJPZesBAZN9GrruYdXFMGqbxEUaBW",
  "key1": "4qxSYHbg9nzQ5Y4cWaquWVh1veuRADpvRYd8gnt5BwxtKDM8W5iMdJz8crfkM776PpCJbYeERGBKeiBUju6nVwhA",
  "key2": "2jeMiC6pCstMw5JKNdPY8KhaKczEMmHr21ZhnGUcWHfMKbBmdkMRkgN7QRwEPgPRtHM21Wcz2LwBX8aP1MQqTZJ3",
  "key3": "2AhsB9TWWAPKY6uyxPvL6DuKQSB2UTogVcRDYNA51VNKZT1Dw8z2KB2s6qisnVxhC3PysWSym9W4DDY7H9oGosHF",
  "key4": "5uBAYEriJTvAk3hUAJekZTXH2h9LDm79KWo2JHmkW2fbUzkDpur3D6jgNMLKdpQA3n7av6ENzQtmbVXas1jhQN7k",
  "key5": "4pRbABgCjYUKSmkfy39QCd9UGD4LVYzARLKWTkBxi1qfpUxbtypxJu4ugATwYM1BUYxfenjYge6wmtcRVCtyncNk",
  "key6": "pjQJuz1kYewdiakYqCCJyBoRHGGbabGHyNiG5RcM5BrKKKvGYj16BeoA9EsqSX1UrXaZLLFnzb9p2Zwh9h7eCpU",
  "key7": "2BgoEvtpYEaTDCihKfsptvWkXPGCjbR3k35CohfJvkWV7oGEdLCe1WyCXgGcYnwRyhx2DwcHYCj99kw3w7WeeNp7",
  "key8": "4tFz8pjmffeNuwCzUy3ouKRq4jAhUwCwNtZ9B6MSvnCehQ7Fmv6XF2GiSWQ4gvZK8ZsqhHBpX3mXcEEJc73eReax",
  "key9": "26RyYkmop4sc8okTpHf1RuqsARRVKRpQBDgwUCxu58x3kFMMtUWR9cHfBM5MJHWT9YcGx8RQ7tJGSDsBqGts2idL",
  "key10": "5vDC37wgWawUDNbRm8Sm9e6xEfqMgvrViVPgkx2UmAGts9ZhPxHKUeXbVfvRHHDuByY8aJSKDmTWcr4ZrDPFRTpz",
  "key11": "3sCa1TAjnBTB82zysXGc9UCC1ynYcNBmy3HGvFAEcifAyK8MGgPnHAuej1D7LxMKT7XSNRAcP6cHNFuhFtBP11rh",
  "key12": "5e987XuA125RgJtrjhZ6JaViUbRvxZ11JhukP4hWrUPuPC5XTjCTq4KTzPZyLU2bAUEH2xyG8mCYpHcx5CJpDfpu",
  "key13": "4G4MCFcLXyZ7w91arXVu3EEScf8pn8FNnxRqeUE5kXbftAppjVC95xotCDChzzQgeb3dDWhSwK6XCnhSi5i1r8wd",
  "key14": "26ucJw2QaL26KoejgEKWCMwEszFMb1B4zWqi7cnKipTahq5zEMPiBWp8c8vzngzA7XqP5pryoQxkrv6YY5wafDKJ",
  "key15": "5chQZJEu7UiKcJ3k5oEw9uKKWzx99nzykAP28rs1kFoNdbnU7m14vXDQeJuhYLXvWvkaYhLVLBHeJxna28mYgVcY",
  "key16": "3tFYz6eJ6XKuuDpfbPoKDyc5ur298JFxf72mJHi6SUGAYnzo6TQTvciYaSEj3Xeq2tuTAWextPajNqZ8EjrkomtX",
  "key17": "HyrBNrqgCEcvPo6MmNd3zj2hQKmxoAW5DVCz6tRxUWfYg9vk6KJAc8wsgYbPqWkbu51TFtNgmdjtManZ6c1DQkD",
  "key18": "4AmN8LEouLTnuUnhyZeLabGnC631A16UexU8v4nR2W6cm1weMBHroVMG1XHebQN2ojp4quoMRQtVrhDWSSenPkKd",
  "key19": "4jaaa8mpLZBguut2uUdMnTDQxB641yii1G66zq4zmqh7Uxj7dgTYoGATLzGfr6Duzp3YEYNKHsrA7fo8kEBM85PY",
  "key20": "3fKpMSgSwXdWkuefWCav7QzLfT9yfD6QWDDg8VxZjRSPFgSyXYip2MKSTxhiMdB4YDYHX27vUZcknkGKiXrJzwRY",
  "key21": "5pZccX2dEduh1YkWFt16fRVWXdMYvmFuheXhmJdQopSNhU1CkdRU4ZasvR1Sfn97FrKAGmVGxkj3hsHFio9qaDFE",
  "key22": "3CnpktuTrQFYie37h1z177ELvtcGXT1kPiXgXpxzVbQdVHqLLrxZ9FaPzZt5XkAPcz1SiyWRvEGW1CG79px9wrtn",
  "key23": "5RKdKo31ixQyuEbexS3rSJTAEiq4nHB3yRe9VDbzQFPBHDf487CDjhDeJXAPco7HM1MMpVpBaJCbz8X5HMR1a858",
  "key24": "2aczBUmJa7avWNYgZANxaeKhZRSC6NjacBCuLhHu1wugZ3S1GTg28XaYC3nrNZnW3tV7aJ7FqYvjmWytC33D6bqg",
  "key25": "4DvnrmNwpyZ7sqro2kLJBwNVR4g5FSsALqm79XFRVcjDKSTSScvbD8QHeAQxesYEHx2XKQDxUpVoUWHesccNMk4E",
  "key26": "33XkCjPc9TretYA6yCNr8fb24LwbWP6ji942g5C2t3YmUqykkwtNvWKAJYQDRePfJrLpbFrs9fnjHtBH8dYnRu6r",
  "key27": "h9iKWNYX3GoLx8v7kSKEFi14bK7zj4NmeiBM528iXeRNTXumZJ9MZGDEb4hBTcJeFJC5jtaD7Qzr6DJ3Uwec1ur",
  "key28": "62CwAH4NASbicdncDNH5XenxPE8cZfAMDt219f6x4VLxQ3iF2JbyYhfS1NEHWEsWxovFcYuS2CdRt3eFg2RpZt2z",
  "key29": "53wpwUsKNZPcSWiPRPXDoMEFpPNMey3ZebkdnvkwHi7PCJRCGbPMMrR5V5GBTv3AiCwwqQpm8r9NfRhpWwoggpAa",
  "key30": "2H84jgdnP64q53H5xdboQT5rxmZEmxpZa88gBHmqJUBX33FKNbNCVG9t8P9PJ1pFRxJFe9bP6GeiNGcCH77cQTZk",
  "key31": "5DpQJ4d47n9ZexbmH94LvNpjjCN7h9sbEP3567oLizJPCzRCDJHQwYrSon6aTzH7P2owELJ4wjR6AXeXQSkCtK4P",
  "key32": "3MDmfTobbW8j7GwT6oqzuucmpbXwR1869iPxg8dUvPjfCx29J8EkkzsuSGagnrG5Vb8sCQ3kL5m81mmnY52pyjPg",
  "key33": "5N8UmxxafopTY4kNQiMeTg4JvdPEM8zBh67dkPdw9UuqjM47Rjzu8Vz7tNHYgJDPUCmvLheWGkCsBTyPGdoFzRWH",
  "key34": "zkB92vQprZUfnJkmDkekhJvBfaCsvNRrcHb73b4KnZmTVWHumCEYJiKC7kFqLBDu93HKqLKKo2T1TD1MeaJRyev",
  "key35": "5XLu4uyf9dwJB1crnzUC5Ccm3mj5Yzfm4XfbrxiyidhZBC4ZYMjwhSTNqeQHvKYDe885dJYvKWUZK25xgjMxxPSk",
  "key36": "5AANbrnAzhY5cfiFtzXKbirS3nPo8MdqjLyNQCDAZM38RjPa3snGems2PUqAtAsHQeR7QimmtjVrfbeFU5Z9emfP",
  "key37": "4szjtEsgChpYw9B8tf5Aho3Ra6UmArJBS1MQ9zici1UVGCTRDBVhGTCt9EK1LHyJNtcNZV7UZDR6Z89NPHP7vxcX",
  "key38": "3eiShQPVwr8z6sZVuJsdkhgGAQoico3Uw5oj8C8kgfKS4BYTaiRm7ofcrwNh1U8kMx1YY5Py6uKnJcdDQ3MBxb9z",
  "key39": "hu9fas1uugSkxM4yCKc73F5sVi65dYkopvgbKH9U1kNPGnJyeoLdcMTNe2jwpiXjXDp7cLjSSDSZ6nrPYH4rSPp",
  "key40": "5S37t1zdMpEqHkUw6HDVsnJdP29FZvVJU5VepaUvEnLbvsUPHD5jMVjvfP5qCUzozkf4xGPFgVU9mWBjecD48nqE",
  "key41": "5MsrvWkTcdUhNjc3Z83hfv43C1ugJN3wY5zDgTb56nadTU2bsqKRwvCR8sg6iUrWPBhHrMEz9LvBbguLYSigrLnX",
  "key42": "9sdwVSBddQQ4fX3y8kkpHigUJPgAd4KX79ein58eHE5D99L435cXVwguF2hL9gwshU6T6rqtaxwM1ypqC9ZKp8d",
  "key43": "qbYbYqmccJrgFApnwZCJvwPxPX6fdSuRvEDTyR3f6TBNZVxykyLNfQQQJ2ktB77G8f14coRQ92KYqrcDUyWEBsG",
  "key44": "3Wj9pCL6jeqd5JYEgy4n3ySTHdm4fw2X4jd5aHN1ACgLWRnWR3JsGUDJo1oZXq7eR5VpMNvtXu3tgH8eK5HSxWk8",
  "key45": "53BEcHUk9kC3k7EDdtkNPL8qduegya7tpvHqFnJPc7NErMMJCD2chJkrrKrDV9KAtgxdp5Pc9c1giQoJpvnuxjoA",
  "key46": "4S9rqx4eZ2xqd5WTbhSx8eswLM6xtw7zFTmbNvZ5T93WLyKmnT6SkbQcX4WeKWA49DpzQjXT8gmoQtbAffTwFMmw"
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
