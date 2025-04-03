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
    "3VfcNBMqME5m7WXHk2ah63bYKTCpGZszUBnBW3yqgNqchRLcFg16TPxRhneQ7MF7V186fPDURLyPj9gVnvqFqBGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gRQF3VPqu2HgiBEHPWqnx74ScV8HxdkCSbHwdG4T9NnVh4CPhBaFUExKrEdXbYYEyRztkj8UbsWWRHAo7UiRBYk",
  "key1": "5XXfbqwWncj9VDmY3eHRFbSNakp4cBy7XTKE4iVhRXh96YkGNHzfQCurQKmj1h1DJ3qZEMGtJn1c39eJErmidzcJ",
  "key2": "zBFLZXwFA1PMs5MgnCnYRpbLLJaZAkeucweJkAYiYoD8HyADofeuiELrdqLSkhbXwpkAqUa8RKzbExqs3CjoXGf",
  "key3": "4pHWfxt147wpt5mDTCMBU497zgAmXcGi1BUPTkzkqcnf5LbHsda4nt3Xvrx6cSj2fnActJvjvgxGxFUf8BYiRwdF",
  "key4": "tHqBSLKk4GT6LEG7c13VMzBZDnTPSxvQSXnHcawNeb8iUpP366DgDCxwVNoZVdxaxqgLmJqZnFaW3ddcVB8bELW",
  "key5": "2cphrnbhSgrB3XoXtYHmW1DW43TRpQ2bC4kW8z74H3TMXSTdXLWvqCcW9ocNfTdH1n5tjB9BvBLTWfpCmujGeWnt",
  "key6": "33FJF1kcqnewucXsAJcwJH7WuJ6aWjwcTAt814sSPo3JFhaAKHWNsXTEs2V8VKuS3ESdx8uhMvvfxZSTqsCVVQqh",
  "key7": "3oapbvUmJuCN3J6Urv64pdLYoMbtdAiGEgaWsKq8F8gpbjmpMy9ioQisAruqapGAGKFYsubURR9ZhatdfbPr7baK",
  "key8": "5xZZs62aBfjwTm4gsax6jJsqHcK4QyHbFQUJ7m2eirX29q19c1S8xyZWV7bpFZjWcDXBYhCa1gXNpX1kLixUCbSn",
  "key9": "2wfD16MpexjmphFm1RNRg7PNWmqyVHCMpDZqm4fH58KmL4BKGJxZ97FL516ih2VgRvTGpaRdxYk1bLVa6fewh1TE",
  "key10": "5MGadAGzRTu4JXs17hYPsULovrnvVyMxGGKmUZFAQgeRh3tPeji2ii7iua8mYS2DdwwGiP3daN4mrQE9CJJNsRRK",
  "key11": "3gAi4TPNmGwJz2NrLBRRCcnQANArBGMip7A2zjTYgKbKRA3JeRY3PotR2cQ7mkHnt4m4pkEKWBgwu2GYKwxDHb3b",
  "key12": "Lx5teEGbG6soAZmzn4gv2dopcxk3cQCrfMDNXsZ8GsL4732vzjEdMJpchqTcJqmGzvAEvu54AQkfX53yho4tQs8",
  "key13": "4teZKUoeD3UQmGQzqtFPSDSFuqXgCUU84qT5eorjut54NvtjFekq2ENAchocnQ9UR8xYM11CjPVxxhx7hL3srpzG",
  "key14": "4UU4J6fXyJUq1huYucUqBBTKEVsBnbdSnxrZ5PhTCLLtUQsgpWCUW3qV7vLLWArX1ZMZGSf4P95PMT7MqhNSHkc7",
  "key15": "gMuo9VK2jxMd7qTC2vf9Pv5fGwdNEpaHaMuU63XtRyCQVZZvCGUs1yMPwV7PgGQ9hDS7VAn9GUPT5kGgAYAXsMP",
  "key16": "2NoduhHCebiHQxbxAvuMrVxPM9e61n8dLxc6598wzJ1YKAw2vQcXXVee4wtV7KciPmAQSgnycw2Bo8V1gTnhBCKK",
  "key17": "5R2CTyWhYTd5EE2WfwPpbZTCHupq8sazf7dzT2mrwNfeSNhTUmSSZijsULr748aNk43ZTgR6pBhkpkJmHKqANqw6",
  "key18": "4vu7tUu1RzEyVAGQwM4JeuhZ6uWQz2WJgZcugKj7svg6bPCmSydq2SKVT8bzv1Xa773k3S92jUpAM7DmWEsej35Y",
  "key19": "5V7jf6hHtHDCfRRb61XKpRYbsr4DKoRpfHZm3Y2ujTY887eF4DXmDMq14qun7U5bSD2CdAkZcyhzBztmm6uHbPS3",
  "key20": "3BiBKTu1CFKdM9wQmcgpryyS2sjr1wPU7DXPEiZtukm8esiPZL7vvDqYRs2LRHND9oe7dzn4y2iEHyW34EmkHqDQ",
  "key21": "3M7P2JywVSjhKQa1V4MndhXtqFxanUGngcyxqLPkfj5AEKPeykijtyWvxbRpNHA9GvbWdcT2NYFgYmyg3tJzMHr1",
  "key22": "5oGM8wioXFnHCYwPg5qzr1pkq4KScqBHW1rZxBZ369rtGHxsSzdBbMqoyeb453rd2NeBDTpTDn7g7Jb6gkEkxb7R",
  "key23": "4JFYR2DWc5EaDvBXV92zcrMwPS2s5SnbpbgQWzk9usTX3i55MGKyZnA6gLrVHKpG3H1V5ktGt3gtGyqFw6XHwJWM",
  "key24": "SfoaCamQfVs5kGngSR18p5Fj442aTetbsXCKt7EK5vEdPj1B1iq9DGk4rg25s8G6TmKLqXHJZFmpgU5mBUDdruk",
  "key25": "2q8aATCcegXSP9aauduJkPZUVEWCeLynF6TiGnpxqNn6zoVz8iWg68piqfYin5WbfCfhqMJffJbp9xbyJBHuXHTv",
  "key26": "5kDtKoFFRkPf43dhbfDaxnuGkCttcwizthsm55URF5XmNC6AHLah8eA42gYLg2tRR4BeXBFBq92VPbXNM3BVwSFY",
  "key27": "2iSFDCncSKXhofUSiTqpZ6fN5d9Y9Y47qL9p4W3cCNtA8syKUYMGwK32ysGamxzkPTbEaiTK2HB4kfvGea2bcaLP",
  "key28": "2ALaiNmFVGu2CsE5kYD6SS8kbXaGUjXrCZiAwzVy6vPgvQpCXH9uj8zvZV5sBRRQCJ4Z5V1GEcgiq39GkZ5zqTeb",
  "key29": "2ooAqUqxVZYrCgveZmgxJqu6Smaw3A2zMFaNZpAMqK4MSc2XT7iLnX8zF91BopDdPqQhvFofT2FHMuNcFNhLNYDa",
  "key30": "2WLpwQNq1TaLZg6jmJWg8CqdbqD9o5nbz5ZiQdfFbdtiPJb8p6ZrjMifD2vEnUSBhFEa9LU7mH7A7HtLQhehbDcG",
  "key31": "S3iHRywvapK1E5WTaiKKTUG7Pd5eP33PjTHCxPanooxYBA8nmv3trKbbLZUZdcjh2oC5FDHk9RHkicFojjwxXEM",
  "key32": "4rdJZDq96qi5ERMtj3gxjsPJxrmBngbx5baM11WRWzo2aVd6Qx9PU1iVWqy5QSJ5DHNyRTaS4JQDJ2byvCU8z6WL",
  "key33": "j6pvrta325QQD6FnJcejUXTMuzARxgCo79DfDrCkaGcLGDGAvzMRY28bJWocxbp1ZdP146iXA2M6LBhQBBSGHaW",
  "key34": "ZC75pSqwrQ2JPvPLY64ZXeSHo4SY6qNExg8FZLRLmSXxLGBDURB32EWfTr86ja1f3AVr17JFAHKsBoJ61gGWTqt",
  "key35": "5C5sC7exkiJtHAdco5L3SJ5ZKdaur6tRqX9Hb6AtQGuDezResg5jSYr9eHyob7D1xynnnBew96xiDC78HXuqfW9D",
  "key36": "5MPxsY8d2tXy61LmJxxTgwD1B2LrYrWntXLrL8FSrkXS6tgWGTy3nHr6np5JiqJM5X2iVivNks1BQwfFsyUHK7De",
  "key37": "42aQeawJtV9Yftv1hWpgTdM2Lc9zr3bqYgjRwdptRUNS7rVcirzJExAXS2evWQftJqsmZngvnFY4Y4C4QZo2mmW2"
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
