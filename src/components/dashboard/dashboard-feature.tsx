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
    "y6axLxCacaTwGsqPzu9NQ4ksG6E3vJJ4aeNeFioAQPcp95w4ufsNrCRzdr3tjrdKLVhhxF8Jh5MhEh2py2CRvzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYW8GEFuqEFURnJFWy5eirXdXYdzAF6a7z1Q4zD9sSZuo2v8ei5V5NzJaghFnauLs7qkyPYQE5sYmQ2iUUo3bbH",
  "key1": "3dRcQ4JEC46w9Lg4aumPzTGRqVA6kSbYu9i3su3dMY87tDNnJVw6UcdojyjPA7Xf1GDrkjyke74SDJrmoKysUcRp",
  "key2": "639KE8htBnTcwiprjwvMrp7VjMyU3q8Mre3N1Vk6MxJWB2rTDwQsa9mtkjEhaq2PNJCBoDCBh8fn2GKkEU1P1GmJ",
  "key3": "24goH3RNbn36tNNkZLob7cnWVvX6iRYLimTH3PTnL5tsXWDuYoqWADYNucTk3rQcETjDbbvD9AyhLK5jusGBCcPQ",
  "key4": "2qwv4wDuzhLy673KtUoGi5RmdnF7x8AZVo9ccujgC4rHdFWNxd6sS7zamNn33j4rQSXgN4rAVFoyx8x1uUdXTLYe",
  "key5": "5xCUNZJyRjf41Y8X1cqgXxk6AhXajRBS2fPRfMi28ZW2aKFPDMr3j81weLErDxWvoRY5SiuyXbEMXbkF52xxibVk",
  "key6": "2zDQqAz4E6rk9BjnP5f3iHX9ymp5Nquz9Q8dJ6gE44yGPW4Avdf74m32nCDhHCkVbx22Ni4bTLjxFvj1h44zn92r",
  "key7": "5A9JBiwVBdoPd9y2GsrAqF1fH9dnHhebCxFizT8VWgNdjSZEL94jwmmps5gKGMpkkfdnmh4hxahCDZ2LsWX73BnC",
  "key8": "LM9fyZPZSEcmof3pZGESFFnKm8VJw8bZZfUv2UhqJz6SnrDtZpSyPbkpQzTLjpCKq5d8z3QQWe4LAQzgN3ybggX",
  "key9": "2FoVE43kvAWUPkbTn1LCsRrQbopu61px8kbb73aaAkjHiqX1Zeujyf8u6dKnKy7KEs2egWJSvEfrif1BDEZ1Mexb",
  "key10": "51yVaKcK2GUvF9KKMo3ofYa1CGVLKi8MNYbggAnkiqZzSNpJTaY8MWxjzyHak6dzNAYe8Pt6JsUiNCN6tYLB3XfK",
  "key11": "4yxDX1hNKgEc4nao1Dds1EPcutRn4Wn5MGNoQbLAHcaxCP3S3D4fHYKWwrYk5TaqD7Vh3ddiQcNhKpvxSKrsGBmR",
  "key12": "sVRA9X8Paqc5rJJcjZCJRUrHhnKHBzxGaoKMPPCkRwuk35tNqJjgzpro5LaQRNEaVb23bT5pRjUtHonQCeDFHPj",
  "key13": "5GEACrE45gSM6s4Zwf26f3k7YLgBquxLPs3furqA5r1PSEqMf6vCkkZSXi5yiFCsy2TyLVdkTiSUWQhJ5eVW9rvY",
  "key14": "3ovm1QtZzbnMGyWLHvMJZFkLvSrrkdAstJhbkgKZjmKEX23LhAABAzmcBh1A1FFAEhKFktYam9qcBXDyehxqVFrw",
  "key15": "4g3inkv4zemHFTTFZUkwqMnk7Y3njfqSFyuKrdv2mXe6G7K5sBEAYdCKWEwbf32LPS4N8K2x2yZ92KUN3AWVzJ4B",
  "key16": "2TGp3XrvZTdbnjs1cY4PVPQUcXRB9XBFj5jaGBvHX8JaWsVeFQMfy38uqBaM4eNWHxH2yzRhQbS4vJKCoq1opQym",
  "key17": "5cosFD5AEQtxhG8cFtE1T4rKUwZKHzYL451v8prrv6CgUgH17Hif1jY4ag1nDRXH9WEQVPusBQje5VYoz6VxjQJk",
  "key18": "3HL713JzrExGEy495dN1DBEiqTam8XSY3xUozeD2irdCMZoeQsqQrAxgvVr3T6K9uvARTUU3mjv7TiiJrPGD2kSj",
  "key19": "4HuMeRS4CTjYJXZC2XHbTkXrZaH2LWGyZGe8qaRRsVxbuMHmhLjpfDTPBRpFqCnr7ZWusndf7Zegw4WxYBV4cCDk",
  "key20": "5rjixAd6LjvqoZj1sBRATgAEwHNbqfg1EcRGpwpq2cVs3VyKH1SHSpw4MgSreaUEMsDcj4rDuRWfDEoL3vJfYDR7",
  "key21": "2D7bsCEP6cCrr2wsmG8M6MofpKTHGMAYct5tGdHJKxECHSRPS3pooMCHNNESWJb6RYeKFcAZhsMKLqWmjrMe819b",
  "key22": "4sMoaYW84W9BiaTZ44f1vg9XQNu7nnCbeWPR72hj7d55b4FtVidqavwqsxbZnPnwSHRpRzwd446HN9Xh2zM8fMMZ",
  "key23": "tJvHo6vYLyzfpP7SyvHWrSjRNmSvRRBtSXC1u77yRprJtph4GAQAiH1LQrWDdkfoYLZEwD1vaU8ttTxqv2NnJ5C",
  "key24": "5bwdx3hxuXXBezhPwRPFLTE327U7sM4ur7SkiwC4BJ6YvBVFS7GLjPbmdU6hgKrsqoeN53Bm7rbov1yaESK6AfNJ",
  "key25": "2sSBC6W22ehAJmc27YqwkXRf2wr5YfBnuyV7JRtqaUaYavNU4PxAEJgx4QVGaqXPGkf2ky1DpPeW7sVjP8C92q7n",
  "key26": "3hr3iYD6SzLhMeYvtSSsr5XvKEekNYCLeKRYWe8mfdNGE9Nqm8ziwdWaBwpyuUz5vs4E9JkBe2AuQDn6H2jPmxMG",
  "key27": "5fR8uQB3tRjyCTywZrW1C9e3zuFtDePAjFQLJQW8TT47NZgYAW5FmAJcUv8GbVTvax3JhcMi51XoTkMGUWRH7Vnf",
  "key28": "4vjq49rFzDEKH1rnUcRm36ys7oeocLCJ64Fb9Kg5EviSz7ygiY6GR6E5SFVCtBe4yEvMhzGx5Ln5mFj2AqCNpSkv",
  "key29": "21TBpCr8x8K63xV41aRUo13ubtYfyweAiSS3SxvtCGc85wwyBNKxuxEswrdfZhE2vJnFexPEEio7aPXTTmBe4Cfd",
  "key30": "2En88esR2hjtgD61Cun845UC2yrk9mdphrDWWFbJX7MmN1b5NUJMffbvJd6JLWXSg2KfGZN5iKhsb6x33bFeAtfD",
  "key31": "3xn4eRPRCSVbocExx6AtVamXYMYXVdcTyHYJyyUR4LNLosfkDyLajNJUuaxwHyAe2qvzgptgJXnd7vULnwQc5G1D",
  "key32": "g2VdXk5hwSTzLw6kkK2ExrXd27mgbbn7vnA6Y9rkGR9ZX4JJP2zGQ2WNCXmnQwLjx6VgpS77TrUTWCN3KJEbfWY",
  "key33": "2JxrWeWxBfHCpE7UK2QZNL3nNKu5J4qsw81hG5ik2hQwNhV4VWvk5MLrJyf93ACmHyNQEWj8mAp3JKfKefYpxCmM",
  "key34": "sFg7ojc4MiKqyF9TxM1UTqSzyfznLoDQYpu9HxbBrp6Lm9dkhwKq67zxEwzMLVKCgsZ66kBuJdb4KagNRW7QL3q",
  "key35": "3nrUJ7xq6jHEuiuK5zv77ANTyZ2GB7CmyoZ24brKGgu91NDyrECg5fXWkoQVezCwJhePF1gdupnmj6TjThqekHPz",
  "key36": "4jRu57537UN1oNuw4C4o2zABqqVHpxMf7Q9YdyDSrpvUgNUQgX8JvVZeBM8bUHadDJR4s7kHiMUQVgvF5QspY7FH",
  "key37": "3X5U1Ks6DrZ8t1o8sxJ3BdPZ7m9JFb2oi7e68jgADgPxUZbnLptLvtXLYGx4s3PcnvsgGiUmsbTmWWjmVBwThtR5",
  "key38": "6YWKojGAJZm4qzFXZsh1UFok8CRujmL3daaxZ56H6WXm4n1yjg3AR9c5h3xYNKftmVR24zphS5xvpQUSgoDTFyt",
  "key39": "2x9uBC6D49QNdARQHHHzapwhvgjsCAbMsQpPUGUm7YrVd3QfSCodYWjYAAQZuDnhrxuqACaBi1JBNDr4Yg7BTyeg",
  "key40": "4PFZT3cSnDf5rxio9rqGoYYmdQ1nfdtWiZDDwRLw8obLXcwujgDUBcyyjXGBUy1xA99QVqwEXnbe2qUEK7eQGpni",
  "key41": "4kvUM5QTd5KrhQpqysaDtSsxevjdhU2zJuMBfT7jwDDGx1RNbzXzT56cWtqEH9eUuqq5dGGgfYuXKHfv4n6hzKEF",
  "key42": "4XgF6wnArvR3QWhRYUyNatsR2HxLoDCfe3PVqpxKsPPGw7VvZkA8i1vNdZDhMwsaZw9tb1DeWN2Nbc1i5e4yt8j7",
  "key43": "5dLe9bFKegPXBrJ8DsWEZxYKB48wbjKS2erMWCJPtvVzwWqGDPjX3WwiT7uTh9bcmsWd5qkVbLFdh77HxWo73sgp"
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
