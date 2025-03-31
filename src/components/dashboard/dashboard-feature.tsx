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
    "3xH5znxf9aRDVX626o5Z5hh9Y1MH4dsKvNd3qjnLjTNcKsLuoTDmSSTde639SH8kw4i7K9BbGQE1MCc1veXE5U2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhnSmZfXvbRA4NpeUhfGjUYuQonVDVz9FHmDxKGFzc6hTNCNr1UnREdm6v2ffAhdgv58UNWozp8Pp1Xj71XbiRC",
  "key1": "34vaPCJLLL9YfotpWZX8yGVssJnVUuyHkH1s8gCggJv5Ryj8T7yMqjzix8YR7HovZ7FATUjd2sb1gkZr1uuwcGiD",
  "key2": "5QKbymsC7DszdwmmtJiWr1ug2WAExL1CZVuAptjL5TekYqk7MWAdsGAmwRGbBtPu7TcMLov9RvPq9haDoqkySGJS",
  "key3": "5cW8nprzZXPvCS75VaXnyb9RpN1XUbYyL4braWG9Asfmzj3xyiFFbtUerSmCtKHEz1AJQBvobLsyimDooQ83nKoh",
  "key4": "2eDri2wbo3czLL7RQQiTkYfSDLgSsnAfDAURCKsNFH2du52KFpJRDNdTF6eM7aAG3JFVK97MktYUG9YVzusgCax2",
  "key5": "payUB8YaUBto1qmqojttT4wPwQpV3zetr3LuE62HvFHH2Uji3dgEzUespbyZZns93GJr2NpZ9nb3yrNsBJFWBmX",
  "key6": "5pJacCziDwqD3rakkWbfN59SdCrN97GZjMhy9W52tsNzdN7639pgLY8guMxVNM7LxA5ns3PWD9w7DnLsPzvzvJv",
  "key7": "4BPJCz8x73KhczZJ4TqspiJfLMLaj4nd93ynS2tiD8GJX6753VDUfbhQLAAJsUE2mh43xPoQuDAwnRL9eZjJUUxL",
  "key8": "4xV5vvcnA68UBSxQGLpM8AYFMV65WghbRWmy6zffEkL8c2ShEfveiTShaiE5zhvp98V1owL9dA3kmVJmzyfrMDVU",
  "key9": "3J54VdaBskZR2Ex4uKCgA1naovM8DtrJbSTmWvMbA8oJnzJ6xdePyJK2Cup5yEmH2qJ29SHZFTWFyN8LKH3Fegpr",
  "key10": "3XnPgKP9rSGKyF53DEDyzEEknW7xSrJoGNKGxhjNL3fHwS84Mne1uVqRpyPyjqQy9D5q9dLJGBxdH6jeTBQEZwic",
  "key11": "2xuBNCazcYegBzxt48KG3LzBQuKT2gaYk6qnBtGRnMEhXp8qujT1jtiVWE4Y1dLeVN8Mje2hq85SyN4krkkg2WCR",
  "key12": "2oCayXpgCja6x3MCtRSHYwjVd6nMg5LMmAgy2HLJRx87aAcru93wx1vttZcJfDSrVHWWj3Q6M6k8BQX7PYfSxsR8",
  "key13": "H3Bj2XShh6nb1xm5PooiYTWBD3hNTrQ25vmfhFYKm4jKCicotvPJkZVmuyLvKSFRTahryzTvTxRRHWGRFekGjL2",
  "key14": "5Fa3tE3gypjz8G7sgvQza8QiqEA2hDr3HviE2D8bJum5setMT12qLu29FSrJGgpZaLLzXBmqVFcpVnPv7s8jwgv6",
  "key15": "3Pj51RyKtwchhaJAKQrzFRtAsdkBWhUmpF74TXt8K92EPwbe4kaL2UCVwv4qcWDDPxaXNLPLsEHf2qGH77pZwo2c",
  "key16": "4Zey5yt687dZ7NA9UTSJuNTZy7zaTSGxEW8qgT5DQfVGDtNSwUtCRxfCPGFnD3ghrxZFaZDXxixkRMv6dVU9T8td",
  "key17": "5yjwUDVDq3VaGtDXktPhqVxWzDbzP49WXdQWb95skEQeqy8PRc9wazByU615Yqhcrrhf7ytekkXz1JneeiNiYMi2",
  "key18": "es3KdjqQ8Uqh6qudtGoQNj37VLnqrU3wUzWdtHgPvHJgjbuYnrsM4rsvLP8JJSR58J5PfpmkFu4UpxtKb5d24d7",
  "key19": "3m7cFnCLVqoJegNhWGZp9fDXZue1rY66X7GyREgmVFApQcCUnqP4M3jGU4sCtmH2fBkXTyhtaHLTHdoZ5wCF4DED",
  "key20": "2PveM2Fcjvw8H1vUyFmRSKmA3TbSeX3x6Zz8AR2V8amTntJViZawfyZ9hjDHhuvFFfGWq9LSitJSVkGVKncggwW7",
  "key21": "iSRWtrvhDs9Jbz5Y1Prj1uFziMQuSt7DqgaZaBM3zyhgHjR9pNcxhbZmqvcSHsnV2gp17tXvDm1GxVu1aRpEQt4",
  "key22": "4TJRW64vqWnJTU9heqSccHjS8s22EMrmDRWUqttvj97KbKBBd7memU3sjhYxWUY4gYatqTbdGHFFsC9V8jkzc5xS",
  "key23": "2xLTNrvnLWRBEVvXvA2zf4y2mw1RUb7dJ4XJmXAoe2RdsJHt3SQHn8jzSNuE4fyV5b2SaoHSxQNuYYsSEFCBbXCq",
  "key24": "2SiCavZBR4uw2SqDYc8hNKqfNhjQD1hYULzZZU9zjWeLRY9YsWfLURgkFRcv2PhFZVfwG8dYzQMjJhB5TktDZEqP",
  "key25": "3chEUrHQ5P6PPXmRPbZ5TuDxCWDdCa3Hoer3Y7kv7McSaXyR449n2bzMg9LNZP8tsw2P8xYauQwW1AcdkqaH3S46",
  "key26": "55W4TViGfs3Ls74DegnVtjnye9yqqf1BHHhXCiR13cQUJt8sUzqcC3kjS6RvUVjcY21obwCQL2Wy7a7DevdEmdmf",
  "key27": "41gbMisNfMDwNqEzS7SWGVR9GJ6W5ZCRzd5dVpgGNVptBrgsVkrX5jU9wKrNPj41Y3DXENZbwy7NwdMZWCBRnLC9",
  "key28": "vbiGxCgg5nJ7cHwzf6btvetVfEHAWyFtLVEdArA5uLFg5mco6m8JEsAdtdoSkfAumsjiADM9zRhrxevgXLuPH9A",
  "key29": "2j2ytteqGi16FzrEmHuEQ6D47ezzVkyD1uiYjGpqw66FtLiXuhs7ZE4MAomCxjoUjJ15oSg496siYcLXMkKLTarL",
  "key30": "5wWfif6sYz7X4SUgguZyKrmRW1MituEu3xDso1c6WKRdi2MDrrxPf3iP6s1h5BhFMYcBRTM6BmL9JTms3zba412g",
  "key31": "5nAjKupxmtGYqF8gBHBDHuZPKL4JNn3ZSbBh6wjSm2WC8MbrX1iEz8U3J88TKov6fCgjcnvQppqCmWhg5Bx3P4Kc",
  "key32": "31wDjYdzJwZoH1BBzWg9BaDw5sCbaX5KBVeVkgta8jVDRSw5x1sZPF23n2Dh1PD6aDCzwEn5LdcNS7rbZuG87bac",
  "key33": "2atGAu1CVgPsjHMDL9fPzRaPZsQnb9CmMq1m98ziKkp5xb7MmRLJJPdKcbpQngYp5NLScFrERauS9AVMQjVdUJD9",
  "key34": "4LHtmoGJ8pm3cF45wpxwY8sXF9fd18Ljd9bvCfdTaVfLBWy5UGZc1kvFYAziCRXRScodYPPDP64STK6eMcAfjp7s",
  "key35": "2YS9fsu7k8ih8Go2B6ioVDg3Qngd8X5dtUxYSt9atxm7TAtrdNzAHSAj8QznwTGyjTvmwXW1MHELfz33UVfraZHr",
  "key36": "2Z5skjBkVAtU41guJbA4eEPEnWaQKsFdEWQkXy9e4BFWqzPGDMS4T67EXk3G1kEn9r3ahsXpPqmAnMrqX8aLe3c6",
  "key37": "5787AyiBLLhG3joRTNfMqtRsCbvK85CQWj6hFKcHDcY9guPiKtFK27rzNxH5o9M81udMnibTadBh7dVYq8gfLwYU",
  "key38": "3TdWe3npiyuizQvgmap2JF9Ukj2RSFj6BmPY3XkTrvAJ5x4YpF9CMmmHCeX78c2tyo7ZsG7SXwscjbhhQbA15Xq3",
  "key39": "2q5FgMiharyCKkTKfaCLd8d2t8mZz3vxvqZeNMd9J5C5ev1KbHncqhfuftU6qs5W6dFmv1ev7dNeu5n14kg7pEkv",
  "key40": "2h8wiSiriTh3diiuB18rJM7r4XZT8QPGD3QdA4a3gQiJC7UYUg1L253jigQiddYFCkynSBhH5ASgvYyxeUx7wdKt",
  "key41": "4BH8rQWQuW99Y9PGefguBEachDMxH5AVcaE2q1gvYTeKQvuiQS3KAgxRjic3UguVvmVd8JzMk4F2NynQoKpAfntB",
  "key42": "2Uw2BTAji1EYdqfVzwdhVxbEuedb43YRzmBsxJs9Fu7ER5Kqc7im59syZDfdeoTHKAc67jopkLy5tCZwFNfWhjwW",
  "key43": "S4CWpyLqG5vUX9MBo9sdfZUYWLFU2fYEe71GBWgAnvCbSUsQ46rhbDxFBLeNipyoJK27YSPJRfP7zWtP99GNShZ"
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
