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
    "UwxMgpBRhqD6zzcjqTVn8ETjcbhgedWHKNw1v1Zcuh2BBXfetJMJr4xE36miTmqBeuSskxKvCbiAXpZjfobcJaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MhhiLptVwzFF45Hg3NCRCHZxwMuRfC4ua1wJ35Ys8i7vtqcd4y3Cw43Y2HhXnTN7o6om3MrJRBKoQQfmPB91yR3",
  "key1": "mBFygobvSEazqoAbCsAVEXE93c8oUesYZJZ9XEp5WeZH2F71huKpKDiKtU3F39ZPEMHyzAVFLFZY8z6RfL939P9",
  "key2": "3KRFfdCzBQFykhx1Hp8pFJdSSkBaCHTo53CbnCfiqX3jzDTdWM24goHMWDNmMdJXmvX8LbnibmTM9XzxhUdEdnb6",
  "key3": "3dVKsiyYiCtngDPXUCGZFDatPFaSfzvLdtabWiBMmDQtFXPB7uecqp431CcVr5VDk8BVWUhKGeFspzgaAnCXTMbo",
  "key4": "4t3PvfT8DW524eNFzdGDQyu4oW4J5VuMGNosLKn5rAaBD2vuwxn9QV1Y1yo6MWbb4wiLqq73u8HtYUS2PgZFzPfk",
  "key5": "4eAueEDQd6nhTih9qsCaoHEmQkw3kWPqMMSk2HHuhtSiWQe8TejeWwEsV4fR7rqMxouTQfCGtNHPKxfBiTd4jNvq",
  "key6": "2SGzyfUD419UwtY7rGTF6wE4xdkgc9HrZKJatMzdtvFuCwCz8oSycibRPcg46QWiXFUYo519Gi8xQ7nLeS1upd2f",
  "key7": "3q83c5o4QJNqUjDgAR8vw7JEdsdrc87h2H1mHuBGan114zGGRv5LCU3HpUb4uJK24f2D92q3kGdVWwHXP2czdzCG",
  "key8": "3cE64dJGyTEMEkNBNnKunM754HfVhCRPH7JhHwQLJEYEi4z4apGFMHeELNqUiW4ywpAaDjo3UQLDpEd96pSuofvA",
  "key9": "CKg2XVUjTQ2W7g28zseR8hNDC5fGusvR11x9D6dcZGW2YTBqPDAAimrX1CdDTVZSoT8ZoqmnKPihq2apiNztBwW",
  "key10": "5z8R9LUiemsSJXwjFnnCcgsqgdSg8FB3fkmAJSjuxoFbKk6WSLfjAbAnWuXqTsiEnHj7NVGp5cTNtatw6bGtqLim",
  "key11": "2zacuTPxt7PugxkRp4GAVPyfYpWr3dHQzvR4mKx14NoA6e6YSHvWT4cFGvS73FdAGXh9bPA2GkX2VLL1iYwChXXS",
  "key12": "2RDxzVVPw2u3ENGpmaEV1qWx1mhLZGBuzZnJHiieJoQP7Eh4AkY5MMN943VmYM5hxGbXz7zPdFiLZLVJukgpJgav",
  "key13": "43wBH1UCegHnbUiwPncpvUXdaoQPSEcRM4LYRbJ6Ajs9vmZ2tkcfyM8tfN79gtWPwzfreoLjW1f9KdHy1kLLJgMP",
  "key14": "2FrnrdPe5Lhap6kVxx3rWFsKCCQ1hUNwx85YZHd2AtmFQW4yc7hpDDFKabTx4rbEoFRCDF6YYAkdn86UBgZ13RpV",
  "key15": "3u6fZFgWAsAJFvAzEKdYacP2w2G3Hh2X2ZqqLZFufNJ9jkfUjFxH6xaaC5H43ccbQ84Ge2qDPbxuks8YCfgjmU1e",
  "key16": "Jm5wsHUuvbAsG6sRSEq7SJpMjQu8ZDZGBuVNVwqpXWewrx8MkQEvWQ5R41oB4kxikvrJuAdUzYvMM813obBC8xf",
  "key17": "4DB4iY2pXk6c4PmFdQ5tdRzHXXj6P73uD6JZcnXfwieknK9aTZjRRYxD1bjUAaMDnArhq19hAtHZs5WrZfupdsBG",
  "key18": "2ztLDY31WHgmyNQbY2Ym3c6k3Jvz4jZ91avaC7Covdev7BciS91AupReXSNBhctgB5YVnkSKhzxDQLs6wqYPcJku",
  "key19": "2jfa9ygubuMHxmdPjnMhLH391nwEV3CQ5kVxyapLLUrT2vv9cH3bYVuyGyJwDbhmBC3GWA9aTNAS9DjoDk6amUd2",
  "key20": "38Rcvr1AP2wxeRHULwe84zZjFwxXouNEUsWUHSpYUNCbChyH2LCsCPqxthLuEN5xSYnpS1U7Fq6aqJgZ6pkD2EtV",
  "key21": "2V9DQzrf89gQU2ouRppGGV6hFw9Coo9FeJzSCSkuz98yj2t4BtYRdW2FwykqknviHLzHrgfq5UnG3MRVVappGSWA",
  "key22": "4vpCKcSq1jhrjjL69yyYQMxnMCfKEw3sC1q5d8mMYGY7GtuhsQAk5tsADMknS7nAH4UELfPYMCBMgFipVow3RFXZ",
  "key23": "44KJfqqKrfHLQboX6BknGRzF7oBHG6u9wEZGZifVoHujanDcU4NmE3gbfwDtmmaWhPnemi4PeMSBCMqec8LhzWoT",
  "key24": "3Ys6h72V2yzKQ2be8J8HTgUuXcHrYJD4eEfMu2ZMMBy1eBdE5wtoHbi7uuY9Wn4jnRxJCJAQV8ftVTkPXQRWsd4x",
  "key25": "4v5K7R2sSa8Kodpe8kxeNSUqES9X2A8D3vA1rsDN3TEGF1MzX2xNmHa1U89qFWW1P9EATgwtAdXrZhP3Ac8PZxMs",
  "key26": "4CkxUPSYETHSZetmwdUwg7QLev1UhuihKrqKZgfVSXuEbY6FvvzerbmLViHCbQwKFiEzMJJLGcBd9RqBWvUGzCFj",
  "key27": "237NLfaAQR1UYccGLYC2aiet6Zi6zSi5zi7sfXR2u4vdcAw21woPfPGVkCGs67Q7FUBkNzydxsPT1di2Yq71X62p",
  "key28": "2FLEXw8wMENiNxSSoJ9aZ9STgzseN7D3ArXmUhvmMi5x5VZ51ekNKpMYjyADgYUCZBNf9NKdGtksqAdkdhiEeNN8",
  "key29": "4KKcTnFQoVPKecg1H38TXRGC1wVJGbvAD1g3Kw9CEuoFgMXtbZqx5MmYQ7TgE42bw6XVyr94feMAkCsc657Aacsq",
  "key30": "337g1nCEZz6mfKGJoqwnhPpBRt8ExR7XNTyBkNPu7aU4opoQFfxQfARPtfhM7NWw9dWsvJDA16y4LF7fpzSUCauw",
  "key31": "5Vd2pZdqgS2qtajH2xoTwkAscjFugP7pxRKBmyi5cHv5LUbEBgxgUebYSSdoySGTwT2PU5UBVdc1en79wxjc7Qjm",
  "key32": "2yEJPh3ceS8gxaXJ3KU7Sekexzxr6TtmXmmZWXWkMddgmJtgLdtD1E6GZvqFd4XUK6KKUBKMcNetDxHf92xwy2az",
  "key33": "3qC9jGJF5XAuM4Z2qCDrktDLR4gGwtAK9fLfiZqJRrsVQq2BMp3vYhzGNHLsEXP14hqNhPe9pW9e7gN9ALivZYyE",
  "key34": "5xzjmyDi7nVsiJx8LKrnBZ7Ao6xkvZY3EufEYq2KQ8nmzqZVqkdMrx4NxLWjUtZMmiKcQ4jqVFbGJjGbaJcXChgE",
  "key35": "5cgyDXHgyNAw4gPbv2BmdfyAkbR6iPUSCmN1qu7n63j5vk5vgwUGrPKXMt4UMPAQZoaTEP89gC2v8Y9vESoTGfpE",
  "key36": "5zrR4WFEXke8aWv3rjb4eGw7RBxkvvd6WLinowKs4K3CoCdM6aUzcK8NDDY4Gih2X26BrQQr3QsvFbS2Nt5sXSqL",
  "key37": "64TdvYcrPTBqXPirXAUmGuMctr9pXnx3HKA9QEFagXCgCcqdAAowUd99wfDB8aRBe2D3n2Zj4PkFHkk7LnMZxe2n",
  "key38": "5kkS3DTrYuEbrrKYT7mku2pyvpdQNzZFU9o7bSAhCSA1SDS2mfiDv4vYpSpvGFSQXoh26o6r65TW7gB7yvkPGuY5",
  "key39": "4DSz72TjkPwrYmky4cDiCoUZKZx1xmasJF22RXZJZTt5xmk55csRVh17CT6qgEpt6XBAN42bCwCUkrahbSzhPTSm"
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
