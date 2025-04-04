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
    "3h599M4uc6aNoTm33jd5bEjjXXFYXFq1tfPCFvu3EeAv1PCNCQiYvEJgRt8feXjvWu2FWXHYP67fST52KL2DmsBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ytWiNVdLQrpZtMxM7NmmoiXAnhsHkX54W2PMjLTqYyWgDKvfr9fYkdVtQhdkd3NgAkp3jYUZcKWGbXy9AEQraQ2",
  "key1": "2Z5sAB362pwjwMTsdy9GppeLz8vfhczAU14YmVk8yVaRD6AvNCQboswo6qjseKJEYmLeks8QpqecmHMSQJmBF4QK",
  "key2": "337ZScgkdLAkn4mLqj7csiMzKJbTNrL7ywiGhMZjPpZtfGpjgwfuYX63tcMR9ugGyWznh5fb1H2d2LWXAVuyPz8n",
  "key3": "UFJ6BEFVjKCuPXgaHkMCkdxTAu5jmrpte5WaneRPn9kyNbRExQDThntnE9QsrSfyYwwCfkCUvtJZ1GVvEdxgxba",
  "key4": "5xHhmGMrmxPw3fBmbake1C26EyTqmmNpGwpWE79WecWVhoAvmN2G43fqUyKBFmKpon3WmBMfiFpNUBM3QRkmAHUA",
  "key5": "228ozWGsmtBeURAwMLdVVcN4A6fnc2wTs6QknwwETwUJHjDECFrASAdJh1AHStv9G9vCC3Etz6aWFvT5ohMsjVCh",
  "key6": "2KmwCytsHgJug8SnqtTQqJgDYjYfSjNiCo7DqzMA2GTXzgN8teQuPuTtvSGywhHMw5SSFFyWn2ZDCyfFNChAZvzB",
  "key7": "29kkquGfJuCNEXMsXXCdiU5PW1mBDe6W4TmuUAMFuBrRhYiedp1quk9zE4Pxac7R2tgXJboeENVUmwcQt58jMfth",
  "key8": "2doqUEryBTxGMT1ACLm7Q6e7tWt4bcaA6aPKUp2aHqXYxSPWvyKhVTvfRtLUBWvkmyZTQfZduhoapboHNQxjQxQg",
  "key9": "RnjNjQe31Y4y39PzpTcJdTNfZyYgNiKQm33aZXUfhqmkMCt6g21HX5eDaVgwZiVuLrGoYvJ7m5gCEbkUmNYajbP",
  "key10": "5f6E2XMKj8tFx4J8kaqaGPF4pCdyKud2bSjy116Ug4FsEE2Kt9QJTLwkH7jn6qUKJkDenzfLJgcCZtUcqaAksuHw",
  "key11": "Kye8HUHfWGSY52FXL5XvaaGhQakZk5DdmmWWE3zJh6VXn5HjPAu7AM5zL5h4kKsch6V7SVy3WVR9FJZv1j2KrzS",
  "key12": "4JBB5cXJ69JKFf2MXXZuc88wSoJ5s88fPz5QmnrbTYTxsDLsjknjegaA8Eok4tFhDT6m2UQJNuwVxMJLoJLourjX",
  "key13": "4H3SMVfcvdD7ZZ9JhT6RpupX7LsagvmCfqhuvck58FyeqXeKCrss51iKrDQYmhstHpiwSmv7JwxQNuidop4k9L4h",
  "key14": "59K6oofuHf5LB5Uu1Sc4yE56PCeQC6iJ8Beyv7j6MBz5hYUtw6BAxtyxCn9nUe5HrGJ14BFVUxnefY7YK9BuXyjP",
  "key15": "zEzT2Gs8YhLY3vgn6QjadeBjuW4WN5CQiRuu4hF55tCTugbd7jtkxZEDPUvv6Mwhn8vJXWrFp3vJDhTZqQp9GrE",
  "key16": "4qMXPYJpMiT8mK695mktoUST2BxHWZTre3fjuvnVPgyiGMp1iEdhGM9E2wVSoujDdaVr6g153SuM7SNqSwfB1uiL",
  "key17": "3FcMVeSVpMgyA77WBFXHTyij8Qh687zB6dEBPSH2hPp7iPtUXAZPLqbcsHqJxjACUT49gXFCxcwNprpCknRQkpke",
  "key18": "4Tpkrsi24k1wxH3RVpPU6L6k634Nyq51DDFBiQRCRvd3LHjbR7njjmbnqh9suJXUeSY2jf2SHygqvuaNwSF6xLfR",
  "key19": "4tLkCvCeXGv9DbgWYv4A6gUVGJjQmLAKrwhvJ9uWBVeWhzhxACz7k7PibyyVfNxg4h21V7k7qCS1CjQn9fSA3wot",
  "key20": "27jUxvyJxjXKRt7AbbhfeK1gMCP7fMrjewiuMuuQVM88gYdw9h5pTLUGSvK27UN978En69oTGRDNkA7wepVkhRNr",
  "key21": "D7BGtU41xobgn6ihnyupnqA4oPxzrZ421Uvib4U8JWcpCZiEujizGnN26skh3ZyhtBXEd8PqTVdPqxEcwzxz7Ag",
  "key22": "5LTvSHGQiiRnY9znbrNqARzFGDhsxe36MXzCHmXvr5Nby6SKS3UnL4NcFBiW48W1jz21JdPatPMLr6ovMu7GsABR",
  "key23": "2W3S2hLkQZ8DqNy8QxMGqVJVfqcaqpbRCEEV2N9zvz9SDXpov98yeHp9QbKwm2J5tKBcCAYCRgKmnm6LSLucuL5u",
  "key24": "2s2yc4p9y9yAT5A8NdBKMvxB8rvC7RS45ntwjhHZsVzTDrXVZpQLswqAkNPbi38mf74fBBkGiknfegRzsJB9YNVy",
  "key25": "2gqdiHoTZWFxhxpeAeksBPoBTwnKcZ8o5j2PXo9riCLp9DHagogQrtYNmkCe13yUNKJ3jrsfN5rTeibRjMVve288",
  "key26": "2L7J8Tq1qLmukZj1BREVjzyBYNuJ9E3T3abmw6gdttnbR8S8n6j41UKZsQtMjeXJT7gLp1SUUsoWDXVmtfvp2rDm",
  "key27": "34sxu6piGKHCadX27KAn3jjWgsEpr9cvS3Yng99jmwAnZHV6JrkzsfNqwELGsoQB4kHQgRMf1Ffp6R1Yn37GyQwc",
  "key28": "2yFyk5T8w5bJCn17QcZ1dmRikbvCcwQyCyQ1bBPpVLu2ggQPjby7Y7kgZHNKRfF9D35gPVaETm8mCxzsKxJiEhPu",
  "key29": "qXvuwZUweVQxPC8wGxQs7VkB1iXbjzophNthgkKEtgfhNLB88hzUDtdEsjA49QJZTDCbaxC4iy5iuhZQnF4Vgyr",
  "key30": "3dxqFaj6EYA9j1pom5ahk8GoVJgzh3ZLkWpB3qFPSZizb5ToqtFKy4sdsKW4FiCoQ835NQ3sf9wnsYbfpQH9QjP5",
  "key31": "353WhB1kCcFgMGesCEthq1EBYBpCNFY83tjCX2Z9NDfkdieZB2uHZ8spsaZMHHfUWvXNaeDuwxgdVJWo1wgaX7Wd"
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
