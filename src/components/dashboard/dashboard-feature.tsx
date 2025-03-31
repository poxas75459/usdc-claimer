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
    "36S52k4gEbGmEnNqwSEZL5TqrE751PfkvmZwyQMFDwDh3Xaju2MWVdRwA2JoKuQTrj8gEjNy3S3araoci7sQWAWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wp4qFDrHJP2Yci7qZpZ5vYgtyXQ6mdtBUQEFWTVBvxAr4EaoPwdut6BoGpE4KVSsWCh7XnirgSwV4JLHWGUwKe2",
  "key1": "5rQLPSNFpauXQBQR6wpasLDN1iPeEHfNbuk1RurD2ZYTdqbdtpePZe3nppQDmhFyntHtRSK4dbCbkAtaEJfhiV39",
  "key2": "5rLqgF9Va6JqFNSXVaZXD7w6vs3C63ai3FU87tZFacJagE4fQMurVukmRJ5trKHtXCuAi9CN3biXnQAJq4AVE5E5",
  "key3": "3Ft3SowFwirg5VHHw7radd5N1MjSir6F1nVcz2wuWYZa7Xw8W44fvixXPFdMbWVqVQVAFCuZaky8x386ENmpH8dc",
  "key4": "3C8Dhukq5JPzct84znQg3ydJtWDyE3PsMNEirDfKqMjCjR5cXuaTikP7jWfPnjhPZy5G9copuXyCpyam27mRcfy2",
  "key5": "4ngS8fZVKzX5SbSic8McBY3KQkzkh2HgFM5seyko5wvk3mxLbjJXzmpzgw3tBfJyA3L3mFVDFyeo82eig5VpiCc8",
  "key6": "3ufHtBR7Tkc2bfvC9rJGZqEWZGNRgaxKZNycWToe75EqDVSFnSYCWzjdc9mGXdcespfwjvWmTW4QUpBhMFHmjrRP",
  "key7": "xN6UpjRNZ7vuomf3VbGauJf8uCr3e6DQgCpwQD2PPNKGPZ9jb32BrJ9gBEC6KFVKpWRcbrH46swoPvj7LaW3fNp",
  "key8": "65V6sNLvoWs534gfKumL8ngVXatFoP3UjZd3URebasuAuHkU4jtjbRJ64yn24PQMsWoTFp15hXm2HZgjjMFfnxAG",
  "key9": "4m52mrxELky2VAXToiNt4q8xhVCD3GTZw5pww71TBMHXeT93ZjmU78ZmQNyj4vsMi1FbVLCmMtn743teARZZRLyq",
  "key10": "25GfdmaKrfnPzGzYLCazZDKDHgXM6xP24qoh8e77w56LN5TDoBqoKMRBiPqrUzp3dVGknJyDX7TB6deqwGibqxNF",
  "key11": "2Do2hSHTs9Po4MfRPdacmZ1qLjYgdnGiyejeE9PuUnJEzh7VG8TNEXrvavJyR2rfBmBMgX4FE9V6MSTe6UVr3RD",
  "key12": "Pi2BkhoZsc39bxMqyixTMwmrNQeu2koFetFbymvE5AVrDRYkFv9ThdKxzpSd9oU5kYkScKivhRcdjmEZvfEYVM4",
  "key13": "3kyWT5ago64HrhQTySWQua3gm6MRku5hhLSR9Biw7A7dXtRwdkmTHiS8Ey9cKszoqB3ZkkPSwwqKYrGwNmtd5Kra",
  "key14": "9H3Af99VZw1urruAuonBo3omXyHn4MLWb7UxxPkgxVWoaYBHwdYvLhB5zfTKHHyvLpkG1Gc1GXYpHwYwa7MxBB7",
  "key15": "5NNij12rNxw9zGueBMpCXpAusEmvabJzW3u7S2DWj8B1urAvhWStr9svt9k7SfK1Kg3MWHNg4RDMKpvqcFNHc6Ys",
  "key16": "JbFc6PUshp1P58TaAXbTwjF4M68iaxynoCHY7XTzVq5f2BVfhSF54wZYbpLiVK6fW1ZPoWrLcnW57nuLhPSShu4",
  "key17": "65MDjNvh67Mb8S7mxNTUGzdc2hvapY2zxHKvYesx1Svp3ABFpbwnLnQkKPDw4Lny6jaFjgwtHdXfmSQbiXAF8u8a",
  "key18": "2sPKU7GxYppwsFdRug6WkMTkpMek4vo6FYe38qPxDEWUpRyoTHLGAFH6G9evr76SW4XAM42xG4Cf9UXVkQLzrprA",
  "key19": "3iDJLaYJYCayVz66T3X6a3FkvobsLVe3BwkzMCUHDQFvau1QsoJ5MVpNH9SqBpXTPr5wZbo2ZdBW2K7dftfUKYTK",
  "key20": "66fuoTR2bkkeMWpM3VtkG5xnZz9DuibNsAs1KFb8BcKJoWRwfwxK6Y26yzhgWxzf2oBwguu8mTk87GtkZX5FQ87a",
  "key21": "3niGRVRgF9hjKdeZLzkgWcMVTMghnsPwrzwfg2knBtNE9uMaBHqvQVQz2tcgWHxmrFBTnHzRzDbw9ydfzWji6ezG",
  "key22": "3a2US9VUS5BWoybigtDLkTxHoTAX4UdPDq3VP8E7aBUjDwtyEKDfHxtVQxtsYKo7V2UZN6P7hbTmSU9HjEyLb9qz",
  "key23": "2tpTCN99AipYP8RsaxgVViS5d8BkGdbeAcKxdks8fpyxDYWt5D9wV47sMkVX31M2XTKbhSKvCvtcnCQ6avSq547p",
  "key24": "2Qan5AZT1KKB6tdkagajcg1rAA6Pab2ViocJLpZhUG8eUCoKfob7CRsLZ2NF4YkwnkoCMd3v5L5xkp54oGUBEipf",
  "key25": "5rJ5FAajYRjUWKKBsp5ij1tG1GNuHWD3wxb8Lqt2VcCzEnACDzcFFgUALAiSTX6KjLKCqCKtJxrRKkYAvw7Eotby",
  "key26": "38UJrJre5vYgzaMLivhDGfXW616bKYKf1NmE8EHAyLVNi6c6VQM5DrZc69j3wrDAtzi7Y6CczZYAaZATPtXsZCVs",
  "key27": "3qMcTY1YqRjesnwoFLTnH2fyMGBrVFBAzjxj1L68iwsEuHntJXBRDLQxLGJybXB8TWnMHht5wi2h8UKXaRQjUV6Z",
  "key28": "2782WxxB7GPy51jEGxtCnLaxukSsvBkkWBHCqs6Hek3WiLV9kkKyhDg5e4HtcWLnTfzTdtXdGcqUPTuAkJAyzziQ",
  "key29": "42AztqaQM5RcjPjXDEGfj31UNBRocsKwytaQ4VHhcP49UonS46DzY5RBzdVtKkUCLzqQjtD5Dk8uNhuTz8PxyUNA",
  "key30": "3qt2gFNFuJqwszFZxVRmYSnQBW3K4qxdJJMVRj1heTgo4LxQUv1op126BaBtgyjGfGvdvYDvh428wU2p78a8spv6",
  "key31": "4FQGbmBjbAVdk1RBwpQWfik91D7wma6JpPXV3S3tiSqBsWTsV1PFgwiFyjGkjrQK7mshShF4HU39F5J97453BdRV",
  "key32": "3yjm4NQvzHokkLPk6TyNPJDSKNCjxnGpKNpGkngNqJbJjfcZwvQdvvQyjL94RW6W5G4BLJ5FPYrkH6gvU2wQRv4M",
  "key33": "oExrJnEceBGPAtZUAWTbw3KFcCu87PeTv83o7Kig7TrcYE5G8KGRq6QHvzgjaFV71CF2rtnty6WA1xGhhbhbiEv",
  "key34": "5XiHAunEgN3HBScX3iZ4sJHCimy1XZk3ZmihwFQggRNtQhcD3JDLpQUoXH65F179bUzf6u4YjWhDRzdhRv5EKXd",
  "key35": "YkAWtM467wBtWtVWFLoC65qTpZwHXso195YrRbjdnGPgiCnRja5fpNRYJS3eBRqRtuaugb8hCzZpMRvooRT2MgP",
  "key36": "5beLze6qMh3PX6wj9DjENN6umrXUojf92JgDprz1TBmFuTBfdJo5qSrEtJok2qCZQvnhJNeWnCKdNvTJjjR7mTFh"
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
