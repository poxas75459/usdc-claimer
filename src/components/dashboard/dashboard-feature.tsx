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
    "2vTYeSgamFYDo43B2qN2xEpXWvc2oejAgDcBPzngBEuhGWCWxQ3VqnooSAngsYsLFFhejFSssyN7813rnkQjryY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57VV9hLiGHVZnY69yTJGMQR6aCb8WE9F7Vgq2KWY3pJ9XW4qhoFDtVRH3ZnzFtH6fNpnq5VFscytYXbdZ1f9c4Zn",
  "key1": "65LNJjfdUUsfjjbQ7XUHDRn5bWtffoe7VXqwsWsqP4v5GbykxdDt9DiJjHd6D1Rz2bUXBjhrAgbA82CT7mzTN34u",
  "key2": "s2sdKSqiNkGEyQry9FkebUz3St3A7HHaM137UjSZH75Hn5pQ7R8uHCshmhgKUHx4iJDd6M7vM99cvYTCLi8wz1u",
  "key3": "3PaiaQQAZBag4J95buCoA5FmnRmDFcN7rid4QEDY9ioLcFHJxYyBBYHa8U9UPpqmCYsBidCUX8Nubs6xFyqHWRFS",
  "key4": "zVyyqDNHarGPTqHJDoPLJBjCpCak8ryKBSK1RdEojcRY7VomAn5fJR5ERipbwJVP6shSeAsmaFtamUbX5T47B3X",
  "key5": "24XEUfPN2oRP9bTFM4RAuqqkMnB5XGQBV3xRudB2GV5jGSqwjxE1XZmPNuF4nn57h67WrCCdHDj952aRthgjjVTf",
  "key6": "4P3pWWxfwQK2hYcpbMhMQf9UmxKJGoMgdCz3bQvvz3iHhgKtMLYyur2hmB42Fcb6fLP4QCCHfp1HG1CUnRS53ru3",
  "key7": "31vPFxPQnnsyf33tQGMKn49GqD6NXFiyBdsQt67CCXbs2T2WurFHkoksFtGeRqQHn3si6brvgD3C6skVZzxeuSgN",
  "key8": "5dvx7MCMYKTpqCYSMJxiHRNWSts2j84vtvSGe3TiSx9AvbAo5Gjzexqp1vGNh9cxCtug3dVpZnj7eGbA47Bs91ym",
  "key9": "rHugEiA3Jq4v1ZXV5UAQkxKrYeMWfxbS5UaHvMrMDY2zgeVRDdzgVhJt36PksH3aPHyqtuuFam75cXGGSJ3spaG",
  "key10": "4knxw6ge2QVM1SJkPhmeZNhVD9KUL88DYGvt4PT5DBES5Kt3gB4gr6Q4H1kzAz35999PtSQMEBiHShH9r4DiScfm",
  "key11": "3MWHBA6DmuN8buLhRnpXrr5bdxhFGs7wD72ozduv8s39S35eXPwfr8mUy479NKqrAVUwQXqKtLHMQR4rfh8ePjUF",
  "key12": "34SQL9P82AEa1L2jSHeuC3PA1xgCHUn9BSXWJh98n6PfeAQWWSqvxtKPJAW2418qzdT5SEouzowZjYP1FfaWzEx8",
  "key13": "SFYWcVJAgXBKxavBCi5rgrpx4RLpPbtVsj7wRMqzmsSy1wpuDd8ont7H5Q2hva7mEPx5wRPQfYdaV4ENjAaqtyu",
  "key14": "CKm9fqUnbD3doRPWzXdknvP7RToQPP3PfVGw6RMuBE1Ucf369uHLpyGVP41wN1yH7Q3e7MyrD6oSGWtgdn8y1Sj",
  "key15": "qD7DTVSEGdtp78sB4y2e6oD4vWdn6L44qdpADMJNNNZuQvDN3U4uP6ykYQMDJrAbdoSQMTnwQSvhLxb4SjGxN4P",
  "key16": "Lu9xxgJ1zN49rfJex1jVhQZSDNpnLiJCLTECi9Gsp5ScQKU9b147Qmkjq5QC9KEgvqC73FLJYvRw75DUApAVPJh",
  "key17": "qAbwCXorJBUzzo3eUJPWbkJa9TEFJK9ADDJs1T8cw9sRvvGGWp6JWg6hyTBHuQjks74x91wYCioubk3LL1QP1uM",
  "key18": "25HCdwW7stLwDHWX1sxqZrWrg9HnzNmxG3fcJpQe27e3kutgMy7kRHjmbybfJ4hvgaMkc59HQUqyLnXqRBSd8mXP",
  "key19": "4anfoRwqTEmKLhHJUdVohhvxyv9q76Fx4hC3ge25Z4DNgt59yWNQJahCwNwpWtNTrdhQ5mKSb8m2CPwz94CxCSZS",
  "key20": "3w8moeyneo9s6GR4JJkkRBVYic278TEzZajv87JnQtuVAAQgayTXfefkKt9HesrD4DWKE3nPR3ZA65rwJwRq5z1A",
  "key21": "3czhXopbHWFnqB4X9wJkEvBbUAtZMqJ5gVYLjTKzAEGK6JpE1EPZTJpGr5qUG8N4XPtBHafyspd3BAACsoPnRHDC",
  "key22": "4Uj5rVJhb3BvdDjLfJFuLotZYfyRQgLTDqiCd7cBzeSGhQDB8RgZH4KFLzFsWTWHU1hyKatCM1DVRVy5zxQNi8Ab",
  "key23": "dVLyWCUzjQdvtSJgu57VJ59jq2qRA1AoEmUWVXF8xjoZyrsUaNM5NAcbiTkPX3YwHNhj6fKRqngjRQ5RYFgbCPR",
  "key24": "22XXc3X7KTg1wKw8pNXqMW8KcVptkG3L1NfTEXEaxDV5WRiZUfBpKF5Su5bxHbWvnimVsQAup8edjrSnCbUH3kXU",
  "key25": "3G6uHpyFTS8NGPbdjwAd2XDZM5TLkheuUkThEuEzhEYEL3LP6nCcBtjpjoGhFFRqAn4ktSqcxAJX65wq9kDTj9JA",
  "key26": "amsmYYbPuL4BB5ic9USgHYnBdCcvQjYkhEJj5js7tvsgTJ2okaAyjH4iUF5YyLQQQsLxa9MGSVtAkN7eFtXZaT9",
  "key27": "4BAkUYy6ygnKiXtH1H4cQJjNHiqr4RDm7rYqhnV4g92zSpBRQQEj9KypQ2mfkT3qiNS8ztrgHD19Kh8hWZZzM3AA",
  "key28": "2vCvqDeV81j2hYu6Y4nBxeDDeQJ5kDFM7ZNZfypKnVofZ2xgXKWVKkZa5hxkujj28yjhy4VJwshNqHHwJbaq9FGY",
  "key29": "5yfnVX5SyJXxLiS5KGbULgaV64WDbsdRVoSnEnE5ZDmhGPMgT9FVGwP4YhnuoboisikrBWFX6SRhTEFGMv8qHjHN",
  "key30": "hxjkAFvTVb9nfaddGB9Yfq3f2D1pzA734EARsnGpv4Fhd4wVMmSNTC9xAAuz4eWjyDifvZZrhZyLEgN4CsXWSsf",
  "key31": "3xgb2MQrpmou1km3vMmk5FMjcKaVLYCaZCAjGda4sbt9vNPRRqzAcrPYhNsuJEVZfiKUf6QBiYUhhVovgK2zeQVH",
  "key32": "5fnxBjzTvERZxErusQ7NYhMpxEBx9VUpWqQXAPZHhdiWpDoRdbf6wAU2d6DzF6GfWGnnNxauf9eAbpPDokxXjWZD",
  "key33": "VFgWimweU1gsh59888cRhCzget9pE2p8nPexAboofuCXXAp9zNB95NY1wgYTUMGxD2qmtp2R458WicLFYPumoAZ",
  "key34": "34Jw3sRDVsAShp1SSsNzquJASCuWReBc7wZg5gaUNk9yyCycNoqEGkC91iWYDXxXJvPL6Ue2zNL9BTxpFLHS4DG6",
  "key35": "51ntxPhDFxXMkkBYk6sEUshLwLe9dQYvfK8hcMx8aiC2bNQh4RocDrEg2vkgq1388YczUxxujcpMnQXuaw3U7hbA",
  "key36": "5YRJi3ZqWVyzZgfQiE2mVEJCHuzmBxSuUrrHhFJeEu3G5RVuaqbs4CREvx9xnCxXS2CLc3zi52KYwMaLbzmPk3oC",
  "key37": "3xvK35Gkm1TLz6QQQ3yeKyR41h9R27QaCQwdBgD21VseKWg4kXBcKZDmA1xTxNUJp5QxpRd3ERXhi9EQ6m6L7YMz"
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
