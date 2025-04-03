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
    "2zohyUqA7Cow7Vrhyzhc2M7zwQPZWSMj3ZJVcmWN75ZWiVZG1veGtq8tuxx96uMfBmcVDV1dWCaJkvqNRHSZhA9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b34heqbwbEiy6gJ7iWTNNADkYt8zgtcx3qR9Hh5RZ28Qkper126FSXfAWzGdgTcXuzEqW4KKLgoAcuE4Dbc6fb4",
  "key1": "42BkCfV3Yuv8my3fYfPYTLfxczrttx6xeDTZNSMUsz2gb3Piict5TPycKqvhXPKSyvJSqStQPoMv4s13nZ1duAHL",
  "key2": "3G2z5GgsRtNaTj6uYdaRtWiRNqf3rqWsNZm4vSKjMm3X5rr9cbJ7pVaSXaadFxWWpEsrLPKJHLJe84T4go2MKc7z",
  "key3": "eKDHyQFdDMQpCFGgiCsmAh3mWXdA7wbNcaDeWnB7Znqn9Yf6R4imkxXA8YiRSpnajRxqBewy2yukC1WxnzPgRiG",
  "key4": "4NkcypoJ9zkDPoRda3mirYvNio75sErVZ14b6c3VsLLsXV8g1RmosmPAoJAbu6PA87WkLCG9z82XaKP774brzGPr",
  "key5": "48mh7bMX5zcbQAL59c8FsKj9QpZ2yXwR5ZYq27YUqqJvoD4R7jQrAfvf5HW4o17K6d6QuwxrPgwM3mYrYQiE58CW",
  "key6": "LciK5MJpMjyL738EeyvrCDqu17noxQq2bj6nArFx2sFyUwhZroHbSuJPMYfe9Czx9auCG7JYjAsdXiuJUt3ETZV",
  "key7": "64tTdutmT5PiHvLVy5iu9dM7evxNHZuD6jbbDxT1oHrpEjtEYfdjSKjCooCAoUGqkbaZA1HTutvdDjvpWg3xVvYS",
  "key8": "2w9pxMkedvGauDF3eH3GTbHXpEGioye2iNbzwoTk16s7ZcwgEqSSFQ6kaQRMNES6d7VqjyRGBiAPGNxEC67ZrtTR",
  "key9": "4x7FW5bCtCtBx5Pq6Aw1N6W72U1hHfJKjfHPuSKxgTh5qXcarV6Yvq8mf2D6F6SzEhY9khVq95ccG7RSkWx6iFA3",
  "key10": "U9qjhoPW7tvxZcNyZUQevKodM6dnW5E43GcgDyrgLPf47jiaVFjYCk3ba2KBouyonT8tnSCsYrKNTJLZKJ1JX43",
  "key11": "2Krih5jdR58nwMEucKv3J4favbMXkVRZPqiobbyQzm7NkTnpn3RGPQcki7S35CoDeQaDh6oQJiRcDTWCtJj4hqTk",
  "key12": "2qLVHPmfUnrLvm4VhaFcoosZ6zJzEXoqZi7Q7hu6ZJQshEjUVV67EGnexhvzNJvYLnTXf8q9P8u9yzkcmj1t3fkr",
  "key13": "5bjiv8qhkciip71TcHn5m43kzFFnd2sXhTDCXTSPBpdJVqpU33aerTkDPKkbJba4iVtNsHCj8fQaB6QkRP7oWUeE",
  "key14": "2NNPABXKnzFUvG8gcJmanEAvBAajbenk367mfWsB4DhSUd4RvwdQUzGy8co8sVnW6iJ7Cq4AnFVy1eWs5kLv4m21",
  "key15": "4Eoa5e5bAyWH926XLJzvWsxzMFap4La9QTPfMwYDo3C6ZJDom2qLmHqb7nFRFbiuKnTMPGgWUdAWgRFNjBQgMrXw",
  "key16": "3Aj6dazvxBzWLaAJ3Lg3aQytVDX9BEAxg5vjGDtLACkDJK6Ht4ZaQdjHYA3PzDkH8BijUgtgmywQ4WaDs8jiZaVv",
  "key17": "PKuxLamyFueQdrLKwRzR1bATpKLVghwzBbjVKSYCzHsBdhgHDfEmsgvATnkRj499NBknythvZnPHXp8o3mxHztL",
  "key18": "4f4tVpsqe8cT7YFg5XvTNH9ABD5asG9BxiqBf7hB1qjRP3FqaCQD1RFtJsLUei7TDoBGbcS92vGRaJddG3iH6qNW",
  "key19": "2raoVz5yx8uRVNiEWQyhsdNNd8ktYhLfF8Hcepgm4taroM14jo1D7VmBAa8SdUmCSukgeMCx8Zf554FTdckjamEr",
  "key20": "3FRQiUtdWvhpXLWzASqH9Nk5WsBYZ2W1tzh3LmcgpHdcbM1BUgc6AGy9jDoxjuoKTEUpFRtcFzCqUmYVmTrLnyLq",
  "key21": "5DFtKGPGS3ZLwDF7AFt5XinVJ3ugYjBhE2S4f1F6WobEYaU3t18q9hP1AwjtPCNTii6EZ46wi5ogb9NddQfCNNdv",
  "key22": "4tFoGnn9N4mH5E2u3L7daG7CeTnVB6kmMpXsU4joKYUatfSrTGopSHXV9B4RB5uJGiLjh1BPujL828ytPAeu1XZo",
  "key23": "5jWUFYNfzUJirCSPwVoL3nEPGgpeuP2HTzTBtaTQFeJfJUzRUCiiZC22NN7bWiZ3tjRQgDBYwFBgchvxPBXEfmb7",
  "key24": "2DZqqFM8JCYFCkN4TEaLYFqq3dFqkTHRpcybfSra74p7ZM5ZnnwvBvpJa4hKF7QE1n6JDQEN28GZ58GwVaf9svW7",
  "key25": "5AGbfjEWSVodvWYQ1s6JLQmuuEXqWdpJsmCeZqDTfXRDiVM9oaF95XAL7eJZrWArspS9RC7eTjYwZTxvNvXn26AP",
  "key26": "3AxgLmhD2HUSBbFhyHtNtS6usJHxsZBJY59zuufLge431VgakRxgBmJRK53Dmba8JhE8LYZqJQbsDb7dsQ3s2fBB",
  "key27": "5htpQ92bwZi5KAtuPmW6Ybw8WhqJfTGYRnpdAEFZ8cqRRiqknfTV45NhSfy2Bs4L7iyionydwZDZwWHY5g96SY4s",
  "key28": "3r3TsQyVqogJzFrMPjH8HUC5YTpvg9nBZoC8z4PnUbNtZNisr8WM9WFgd7CRBHdarPUxTaRYtQ8qEExoT7eGukTY",
  "key29": "6qVREqbTAHQirjxipuq9GjejJCfPpMQkV6xxjVTd5sPZLueNyNTCcpd1LKr4PMWi5tzd2wxEVm7EhxnG7Q1WVde",
  "key30": "3wNm9MkW5GeEL7zz1vrWjyLNmrkZ2DJ3LYcHXiHae9bpHDEW3LWnuEZYo65LoR2W9k7wqD1nNNu7mbrV6h545JDZ",
  "key31": "2jFxexUDJPcGwUy1wDFi3rL4z7JpPSfntj5hAsfV9WRSu2qG3CddiywebhTLGA2iFV43DpSH9SGyp3LPbAzyS1a7",
  "key32": "3gDnr6Yx3ZfggVW6zT2gXFwqWfHHme7GAjZu2swqGqQmbhK4svSeyL1hPCrbbAQZNzsi1qSMFCruwgLEF649bXcy",
  "key33": "5CuzEmbExffz3KxHBsSLQSUvAVx2Pdsve27sfuK8HdCxMmKPD6dVt36TLLDDLcm9Voe6qnhT55dYxRLqqxRCpSTn",
  "key34": "54ud4yvh5nDk65kznW61gTjbE78MpBTXxCfVhvN5Yk7hJkNnB2RyKhh47a2ALgCfaiBJqLeXaySve3FQXydQzy2H",
  "key35": "4smycKAuQpqUM22JbmPmsHA2CGt6169h3FWGE2UWzr9BK66TMr6VepKirPNwgWwqFeVDyGeaYihibZ3HPsNWwEuG",
  "key36": "5qNFXbvd6F3fVedzTydv1Z7qnMxtwNxXsatMat3jTV8eeGwFyhXvFxW6vMW4uwBBQJKdQgKUpraeALiUx55cYGgm",
  "key37": "3G86MweminNjqrfw166tCN3JCi13iRc8JAfgwJakcuLYTuy1dhvFeHxZXr557yP9GT6BARa1AS4xHLSPmgPrcwSE",
  "key38": "36XojhX6eNSpTumHX9gnLjGKJRmMQvMPhn8KL2ny6qniBAQNszztCVjEECqoALuJyUggYUJEL1c5haVkak4Dnvn1",
  "key39": "2TcPdZqEBNvx8DhRpMhZChhLi8Mu9V23oLeio7BQVHMLDYsa2kPuk6iEXE3JvmgwyHimpm9uYTj1jMAmK4oyWWDY",
  "key40": "41UMqGPL5T1tzo9MPYRyzXjFCftScZSf9wVDxBwvg33qae22PJNVkLw4DgJHHjcwziqhqe9AL8KjtPQkH4TN1vtA",
  "key41": "5BWQLFCfrMZSiencJNANvhYLVhc2q2eGWdCgQ5zuhVM4yBDYe36GZeyJZzZMagsHxk55eh4uk1Y3onLGsK7urhyM",
  "key42": "s2aAcTC9GYE1Ev8xsAAHdZvekSkFn6wNsiuPSpZtZe1SbgvFT7M5PdvUNa5qS24EEXCUH2nXCheJi1Yg6PuXK5Q",
  "key43": "3hycCVt4uMBj1wFBbb8XMSqA1m13m2w7uUrCEv56kvTt7hA3Q5xK5yhhxQHED6YDwkE7qkcrCRnJz5UtncYhnK9q"
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
