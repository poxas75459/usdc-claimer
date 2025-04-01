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
    "2yopsn7MuYDmZx2KVYKkZ8rkvzPo2gEta9bVsXHj7dXuWgow7VBER7T4x6VKH3YNQzKYLHSJjYwVVzmRzAGwbfw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZYqLrw5czkmmtjRifm7MSnuv9VdZ1qF1rZgXmqvegw5ezf9YkM5w5txeDDxgDCVWmt39QyNWiHRMN4ZeF9j3jj",
  "key1": "4ikaxSDP7vp4EZVLcVxsr2PQcRMZwLYffwT3onV6y6knwUd2gNeoDQEo1eHHr9XF1HUWJgQaW49MgMcsFUDiKTWA",
  "key2": "4o7LbNSUQFHWnnGArL6TQcPW16JeYq38i2r17akENTvRJnRPhFX5JgqDv7bcyhgbV8HmrUL2udauhfsCqpRktqoM",
  "key3": "d15oPxXcGsMDoLCU5xFkjzuskyr8VnXjkbWFjdDd432JJTozAqdaPAxfQ5CKk3aYqB5wHbRBSQ29DAogSWC7mtp",
  "key4": "5fWLJnPCAqSVdfMfSmdrja52mHYiGBs1e6gwo3q1J7BtyP7fmQjnVyNpFgYx8c5G7CQ5Z6dDyy4ZQdH9sGBp89vF",
  "key5": "CXpbGj5Zw5Mp1M9c8auciWAyppUByGUcriTZM8rbG9LYeJw45FGqYMyJdKEBfckX2mkNVjdZGHWWW5Gg6qyWLzN",
  "key6": "5gtPrEtNLSvxN8MmiqFUNoujVrvCuGN3kWChCca419Y3oXU8LzvyHyAwbERqwt8Gw4fuYNuwuYd4Zn3Q9xFtWFZ5",
  "key7": "3P7iUBLpnCMzQqCjR1nZfw5BrLhep3fyzcErvjQrmxDDs9PXcE7is3jh1eEYHAXZD21B6SovUdPRR5QmEPvYUL6u",
  "key8": "5cjxAouebAkgMWroQ1dri9hhFo48nQhYDthxDmwLJkAV9YJebvfVtBKZZ2bNqPh5FNA3XHEVLUeJu8GMaE7vKPLc",
  "key9": "3S31D96Gk2RLRYESENi3MtyoQHJwLoYCXzJ8exuoGSu9LLQtytWxCoKiN4SeDt7hJZm7tbuxx9oNcxqMHPL9qHme",
  "key10": "2SuszdcXbjgiwqW7nQLQtGAy69p4CNe16CyRR1EHYgCpSM2oET8LzZR3vqTeMairAKTmGYjQmE8RMBRie7BNSJ7H",
  "key11": "4Z7nxnZN6p9B1zFfHekyxubwUzH3megndZxCk9yJnEzXuzpcQXCqJSrUyQguH2UyE7RX8BCAsHuSM1hptxPoTZkr",
  "key12": "4kjd7rbzc5Wx44D8xquJkFV2szRjNDaFBKcKFoSaSd9jp5WndZLWT3UsfGusqjSMFMoU4548oh3jD9XuaBJ75pSV",
  "key13": "3vTE3hccLo71vNpM8637uYPmYJC1fsnfYbsgZLtkFmPjd2CBSHiMF2XVSG2XKskENGR9MTHYGaABYbB8pYfWCU2u",
  "key14": "3cbGpApkbt3g8135dBvp4huvNkrxCR3cVNV4CNhx9CGrEh8UoSg2t7CQAsTMeZMXTjXMVAk9MXcbs1z1tMyw633M",
  "key15": "4SkYW97wgmSJZH3KABUGMMyGXBFFJ6XNRtx5McvzeQe8TaMQm9RTixeoKx2SmgQePxynvsebRWmTE7Hn92iqaZHy",
  "key16": "pDaeEve9UrRhVoiz7sfZY1Yc7EHNXDNXJf91jWRtbaQzXiEy8iFs9ekYNuYc2EzGzXgaSwP8YyvPkjXkfq25dLD",
  "key17": "2uRnp227sqABqE1YQ9rDK1QVhXY7yMyVRcVbY6DQ2NxmaU2esp7vUoMp38RWjLkZys7KjLPqiZ2YAaWKJyV5aSW8",
  "key18": "67AWGmP6DhTZDAQex7U4xstkYd19PKUyqYG6b7CMA8Fq4krBUMN143pguNfVfPZMfQqGkYruaEHmBmrvoBU24f7m",
  "key19": "4hREPcuTgLCRPYYga6Q5uXyUEf7xFBdStJYurUJk5xG9RsiQ1ptTFyRS8DJuMhZimzcN776RigWpr5vj6kue7XjT",
  "key20": "Gb5LeGk1uW2rcNZWMmuFGGJ8vFbaoVsgohFBmRzwbJupdWiqjGKofjQpfaqg7CsUXFeeygHa5y6sAE5CkhLkNWk",
  "key21": "2ghwswHpfPve1ipfFZivEWsFUqEq1TRX35gGdtKTWZrUpvPJRa8nn1qMXaRscmfaPuFzRi6F1yzs9RNM7AujsR9C",
  "key22": "3sarYdXLwPnhMWGmP2kAtYKpo99MrUM5tVMxVoJeQ2NsSVf22piypzAJM4ed1EYrzjNrW6vhBsnbi1sCmTth6fah",
  "key23": "5cFuiNjCCrXvdvvmwwnJtHUXaUbaq5Cw8wizgZEnBQQqHGUtWx4HdLg4pqEb2UyRdxWw21WzLqwZVo9nDHWjKk66",
  "key24": "4HjyzWnzDFe254zMaNEBoxd4poUfmspxJ8LN9R2ZxroerCyvqYmBdchsBmN3nrNnJZqjA3dBP8QjSupBrWeUka2H",
  "key25": "5Kx3wXHBaGxUJFzChF13vYeGPT6Ev6PXmPkUzgyGBcKMrEdGsfs6rCiC4R5NG7D1qpyLNifrk1VqteqGS7Zr8zmd",
  "key26": "5zTZ9iC7VFnq3wLj1spYQRFgQ3Ly62ps1i6ohECRfZYkYLsnevpWTfbWDmS8kNh9ieNzeSxuSM8wgGqhLazuCauj",
  "key27": "4rhGrMwrz6gaeNh1TDCyk26iY55FdVrw5fH4jPpBkhkgKUXqup5c42dnmcmRZS31tTrNvA4uRMNYYsW2uUA95iet",
  "key28": "3mZoRxjEd2pKNBxgTrj1p3ApvpL2ZuNhsMDwbWh9kHCN2uqv1FeCMwfa2aMa7QvBCASBGk52WrZUwzt9DPQQWNF1",
  "key29": "C2xwWAK7yhm2VpT7cjZSvk9TPaRTP8HKYsq23hkXz5deMqL2r2S516tFcLxXfdMS2SB5NLWU8yV14t2U9My8sZG",
  "key30": "LcLfoXmjyjiEDB8eE11jNqEFDq8VgWKr2ycKwN7GCU9PdbWGwkbBU2Kxvi7k28vqWAVunqFspG5F4XFvhr7cSmk",
  "key31": "5d68d2EKuVE5JjkwdZYxukzczbe2Dv3YhAjY6fYfxY79GAQbQgJt35EaGiWaBPDS7hggEaWe1QWkgqX6VfNxF3iU",
  "key32": "YmoQmdPKhmwN9WrPhDrDMiyLQ2GUHHX8Fxqcy3fvxgRHTLSexAPyFUeT9mjEgmphbQnaifAKAtXuxtcuWohv8in",
  "key33": "5EmYgZe6d69w4QedLTNeBZ4qX9EDB7jGMNWbZeUVm8XYo7qp3JbvWP94bH2Fvs8PYsLqUeEX29g3UZaDaXbWMX2C",
  "key34": "5VvitK7LS9h8CQyaThriSVy4zDDqRCzTT5dZEHV9pGv1J6a8L5QVmvARbddn5dtoVWvra1NNtP11CDxiXvHxhpz9",
  "key35": "5r244Z4KPCGLkSv8EXkbyLuWeSfdBF5kPt6ZmKpJWYq9C2wVvRTNuNu76nU9dD2Jn7pLw2P2PmaWKz5s5cakU5TP",
  "key36": "3ndfKRjNTvqodBzqJhpoBE5SGbwMkYPHRv3zyfcpJ11HPz27Gn2jV1Wx7YNTV4APFvEBzgPqmDMR9EwLgEFTs5wH",
  "key37": "44r4rFKBxXZ8s6vv5tyrx9SVG5AWeFFbXUFm7QFqmdSy9VE4en1FZt4ZwUVrHGxggwTQhFGgzENXcS1Fjp1qMcF2",
  "key38": "58dbVzrG3H2tGXsSXEeaRytXKgpZyH1XMmRF9sXiemCK8qnweM8UbTnfUCnrh5hhDDqsXvRLGTTakBVEd5MFFoci"
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
