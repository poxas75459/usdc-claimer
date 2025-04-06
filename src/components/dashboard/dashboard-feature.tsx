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
    "2Kg8uEGH3TkfkQw2MEVjmtK2cvDkv52HvnaN5jRi76AERRg4aPe5JaqkxzL3EtyrGjYE2WdHZ9caBBGYssvfVMtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqY9yK9w5sggoBSUTj8baz6VLjyzTfF7PaicrvBzY8yfTSGV4ofJzj7CiTLcv2gQ4g81PGGzJxnveb7mzUZ4Ynr",
  "key1": "2q6m1X3rVQmHpRPfxxVLAQ5gWsjDE9wMAhjWuHvYHoSFTiJfhBBXkMPjdtwsTUEhqYzKHqWYB6Q6AyeQX31XTWZs",
  "key2": "4wvpw3ct7Pcu4TB2V9xuBo8jLcdZ5SG8UverpU4VhHzfMs4d1b8wFB1xe4cNUkpmPSe2dVtcm1DkiMnfK2ocGo23",
  "key3": "q3EcTvKEaiN5bKFcH23AYTRSScFrnLjeWPgkNxku2pACScKuWpDaFNrt1hQf8ujzh1o2vzYCrJrK7pi1AkdLJkX",
  "key4": "5NG8H8vNc93nTJ3sX5Qay4dxWvN2oemgUNPRHuDjeXBawi3mEnetvzSrzMVNMqbphE4VwKtk1TezG3F3aiaiMANd",
  "key5": "2q6gzuYWtHKJ3uwUf5aZCgt6LQHHr5jpa3Dirto8onpvtVP2g1DXSWBVuviHN9jvJmisEVfVnagbr555GucV8xHL",
  "key6": "62Bh6cMEMP1KP8XdSTLK4kprtqHXhNjhFTsq3m4E9njWQfCU3gxj681SXJsUNUs2WmHhxjDR8YXgVqKPM7Qcyz8g",
  "key7": "5Wc6Fi7nzNwhXcowZLfADkMeDBu38cZQenu1KdfbYdq1oNeJBPNm2p8ypc7Ps6QJJdNMRGR9Dg3nKPn3HYRsuSrN",
  "key8": "4ehpbEzNN7haQJSZ5x68mbPek1cjrikxfXbvnR1MfSvBmKidosPyAcYwmBVC7fnupd4DHEBXeHyZRypz1V5i1Nv1",
  "key9": "2nTuLhot46CjV4XGzwkVJcKrXLudas5W5Z4n3wauQ11g9ogSBhx1JiCjdRDQyu1M9MApgPCea2ZnvF33251hHnc8",
  "key10": "5t1cGWEvynZUjDTRHw7eZJ8PQVsRwpbzuBvGoyDR1Uh5UqkfJHgpx25u6mzEGWQaPFr3GFG6A6WQfJyV7UD7oMeD",
  "key11": "LrdtMV6kf2xpUkc6M2f9KPJ74Ae7o7Zrv5LyyH9zF4zLxiVhzECCS815238vqjebbm4rg4zXCaiys4tqdRLh1xT",
  "key12": "5ifPXxiRwqTdigZrEbYp6AZgwmJbc7UdGhei4AyyfGNjBAwgt9WnmVAnx7vekLwjc7RqDZ3w8KrwrZaUQa6Xdp6z",
  "key13": "63vBJwQqbLUsnvGZqzPbGL6VSNz9gQN51rtWeG6B4bsS6stZbHQk5TrLhye3qwKhnYpvRo1SnmNTCsHLtCHvxSta",
  "key14": "2SrxSzPsMxcbfLMnciyENDV99mjJdVXt1wkehBYp2tDvf6bULLoF4QKZB4Jp1nMnQYsBytLDjVQAaGYZHhgP9koj",
  "key15": "CyimhyeezvkYMrom1kFrdemfMZjHxQWkkbgsKrgKA3hFy3Fxos4RhVdbKKancRx6Cud4NCeYGtf23v6Fh9t6aqf",
  "key16": "5dzd7PfKv9TCQKpzTsL3VNSrqNEL22uFf4UuqitjFjdEprDK2k1WR6yv8eU5PVK2xZPudug8BJ8b76f2UNFLdfw7",
  "key17": "3u6L2ZQh7XQ7kbMGh288dwCJDnRmCuAHtQmhTYBysfvP19a6HS5qY6jfWG5GXBSt1oGPPdAPvFqQBBqqa7qECxL4",
  "key18": "4r5fw2iTKQ8RF6Z7FvNmF9UmvWZgTm9tRgtuGeK6a51eV8bAaBapTVR2Nu1gjpEK4QXx2Te7VpbRr7hb6zrP8Jco",
  "key19": "zGTmdP831ZHu7QJ9627nWzs12e7rCQ5vW9gvNecSk1Ujp9qv4kwNAs6PMuCiyeM4PUChj37jaYa3jeembjaSdVJ",
  "key20": "3Tpg3iuAGfCgMfHxAMbsAtvGJWpkqNHgVjrGTiEnEeZF2tHVGBkvp2aNH8fsRqiMsxA9N6wGx2Xcmr5T2kKeoJUu",
  "key21": "5jkZFrieCD7cVbNUsnEAhz6UNcjxBjEN7nps7N1w6ZEHkUhkuRwxwQqTWh84ePMgCT6SvrThiEc7xkPcjBte23KS",
  "key22": "5zPtpSwYvE1H5bKwtHj25x9HvbuTC4Yr7gNZYgG7rEuFGogcVpUPMB6fCE7szZa6tTaCo2MFsZ6pDycnBHUqVNDz",
  "key23": "5VrhUUjrzTjr4izVSf7zMCA2UeozBx5HQxg2PEW9TmpM7zXBAYV1UGuVLVB4AkrmEBtkBhWzqPAtXL2m1BMi2i6i",
  "key24": "e91Gz21SN2zepjuWhuTnpQYdhKG7BYwHaSri3bDb6tpCP1fMQecoTQoLchmhgzSrTzHj3tku9CYsfPu14vwV6Yf",
  "key25": "6dXqwtjp289wMgw3fJXQiBLi8gFzRjqYE6cgxyeZH7CYMYTZnM5H2BLVfyV8WtRDczc7jWhcYGAxHK7rtvW4PeG",
  "key26": "4Lfrt94NZALJX8RwW7vEMoziTxUrgTE2zhN39fhRXY7Fmm5dDGL2LSca6b6vUcvga9PyPH5qrCixhzUzAmRygPGJ",
  "key27": "26HTewVnVFsUzHFJD8mbcU883j3LquThf6jAkddYngZgzzVr7Z7TR6XSWqCLGCYvcPBVgssRaujPxtKR8nv83mYp",
  "key28": "3X4CLFotxzwjByAxzDZ4oaacqyf76j6ZaTTjKLeGYRbpFadmn1kJ6GKVLPRkvo29MNC1ZedNcpgDwbY5aJR6csf7",
  "key29": "4L1jgKyC6YwYV1EBX6xDzjX2wHbe6LNLWEuqJMVEima7gSXNPcmRCaAkJuT5K9UWCK7Yx17Wda3oLiT1krChByJP",
  "key30": "5ANoFx5sJx9jRxJLADiHnfFusvL3k314Rw5B6hNp6Wmvhe6PXwZPHKhzjuw4bg53ozoN98ac484H43LtUuyMSaZb",
  "key31": "4B7D1SjUGmeL97DNa6sxrXwUo7zpXgaVsVRq8rFLLEFxScF5bfnpmiHsFDyPW8Ggfctx9WYw6dHSXhySbfd9H5uL",
  "key32": "4U1oT2nmReuXWAv3h8VZ4yHdCWxkhy1fJ2gpXWQW256wQSsHuU3b1boMgJCJa7Dk47AM1oaCdGgyFepcCPEaeHD1",
  "key33": "3CyZk3nVhChsRpj38L24ZutzmY72wY68J619GFm4sGJTdy5BaXpzCN3SDJ6iRZWfqBNbLo9ixQGw8oXtB51UdKHu",
  "key34": "2f18sUSu9i9JmVHVMNvgsF56b58Y1QcAHkD2qJb9pqsNkE7bbrYRjh9hFNT5PhNF9vMkkJ46A55m5bpGM8jDcjuy",
  "key35": "2am2RcsZqUzq2LKeVvMvyccD8HJ9M1FgWMHGL1atw9uoxQ4iofgiQCHHdLEoNHbp1LkZu5FzjHtZpVjAXGbHNHwB",
  "key36": "45iwHR5x39yGBA9xm3UdQShfCQisxDptX3pm5sbyL2RsUVhFP18oUwhQ5RXh7eHW6EGhtHdxqqng15UvShTw1ztV",
  "key37": "fMutMDnMZjuHztxk8GbZc2XNhxeSXyksukTugGwGacM1dYMJyM34sTL5zhyF5AZkwhju9V8WyjPxuDheCxzEnPi",
  "key38": "2XQJaWnpvzbBEavd9LnpbwWpsQC72z1QDGCG5h4UNAduxR8JP5NQmVcP9H58dfVaVJthp9VP29KbkoCRhan2LR16",
  "key39": "5HkfdKiZPi7XvUCupQPu4ai4epxfq4mm3dXc2yWf5zvK84XBcCnv8z3NgXqZv2yp7c3K1ts7jUtUxZYnKGG4offG",
  "key40": "2LcYZPYVxEcWpMdwDjZL8vJU1rTHEkHfi8Ye8dXtXnSJqjDKz8rVCnAG3Br7nthfnXR514XUWhsRr8VZGqaYEJ1d",
  "key41": "qvv4vtXAtVx5QC4yyHqMS42A15Y4cBadAQTVjgVh4H8TTKrn7zR157KMME3ENPHQnx5UybAUQfWCjVYfBA9xau7",
  "key42": "L8pG3wTJAG33hSTMLLwxHZuujpQHD4XgBjGnBTwqAYX6W2MT9rz9E8aW9aeoSFN9EMqSxLLfsbBUbDVxWqaivkj",
  "key43": "3eGXciLUKa5RpDEWN26SqMoNVyDNBsygvJRAshh9ku6ckeuzktaSsj2sz6S1wR8PVJTWotPtw8yGNk2wsPTqUx5m",
  "key44": "5gFUc9L3tNzAtpb16RSngWqZfPdbZPZJQREnVs9DhuXh4sgSTyKPkNBB6FKVXr3U1vhVY9qZwRH5kmnonP5zESrq",
  "key45": "25pm5adk9TDYapjuhhm2dHdQGhqUsxELZrpadDp4QYdQMyVL91DqWDuvjLpjpvE2iqDs9bSz4rEZj1AG8bJns1Kr",
  "key46": "4jHDXpJ2hRex7VUszfYzJAtPAWmRBB9Cr5jAJeDvBsBe13WwLUnxBJaK4UhRyT1dAmExMiixhf2CQYGxttJEX943",
  "key47": "24sNM7PuE7FvNwyMi8hgvF8QYNJERhi1mm1H15DfSedmWEhCJQiq3qWEijMr29dTjBRzdNGa45cp6pzywfVP2gg4"
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
