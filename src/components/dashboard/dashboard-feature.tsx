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
    "21wgMmZx8FkEbDeb6JkzizP2vS6iHGPzTKVhKVcuXrV1kDCX2BfvucQdJNrGQtQzLuoETRZWCTyKGaWKCmLfrqhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z9MYSs2Ey63wesjcLUFw6y5NdcaRFwHkPMbBZEApQsE9Tr57pErRfGa5h5YX8uhG12tUQPo2X6sZVQ6H4pkf2by",
  "key1": "3ES8hkyQpcgSxTEwfPSTdQS9uHL4u3xmAfguPiN7WqF6nUqUZnF5SFPCoAwQPrm9eDHegBhqQacQaRrTL7f6NJqr",
  "key2": "YfhafSue9cApGPEpS3sjZ3ccoA1RvdS3LZS2FkwWz4LiZtJtXKrEQBoLgpY9qzNzLpkUaeTbifpRC2PrXAofewC",
  "key3": "2kKb2uE66nAWRrjEJ47mqnEZNGAQ61nwJG8zopobpLaDRzhJ7J6RE3BcFKhK11z98Z2Gm3eAg6aPrGNavWNcPAV9",
  "key4": "4RbDJSAmcvNMbbdfV35DMXfVdHuj4zZy4pMnqHk7DZDBCU7K3kCrCbnXqD9EJB4XiJ9vepSZRzPgY8LCqww1ngBV",
  "key5": "5iSmnn73x7voSuE1uDH8hJbGgbGc7u2sm4rgixHAgyaGe6V1c32cDVaztyPYPrspZeLQdKfPZNfPNKkbDnRbiW3G",
  "key6": "5qWHNQtQcUzSZFdX2nTdxJN5nqMvbcnYHzUZ1qxstNgtpxd42tryp6usjWvKzgDnScwB2yfbWzx6dVHAwteaJ6gb",
  "key7": "4UkL41vQyqSEn9Lk7EH2ep7fEw6LK8bnvZDKUFBdydaFtUtAV5cU4TYTetUdicowkg8Tk3oCM1acnjsMB9Gj2zpy",
  "key8": "23aSapPcjH5rU8PeVbteNZoBVEtroqwwmtLstEVsV6xRP6bCM67ptf6J21TTh1cCKdPLAD29VG4w9JQtcutKHDqN",
  "key9": "HrGnwzwiJt4FwphxazKof9oCUPPijBk5MM9TbC9QjoKxrBc679w8FsGiA6g6mcpFPDD6xpyJQDNiEevaq9QZQXp",
  "key10": "5Qd5HuYtW6M3Yu8oUc7wReGZSmms4vQ9gWKxt4E2iMCRTr6pepmf1NahNssoQ8PMn5rquPGJxjshGRnKbNDqkB2J",
  "key11": "WzKh9xHaUnKrTy9vKEhK42BMQpPZc616NCXuen4Mk51i78mxR8m2VoahPKCpAUPvDoiJxSbtbY4eEmKrTxa49yL",
  "key12": "3qaMEkTsqvDJX4gr9NEWmkqc4hcGi6LbVnZ9TAKq34uySVUGPfTRRH6TafZ8XxK4jUCUX9uDZu2aGcHpyF78noR6",
  "key13": "3YWkAKufdXEFXhS7Dots3xuMzTotcAYJrw6RzCsozbzZkBwauxUfsh9UWamAqXhypx5Ao3wWpcSNVt2vW7tuG9mc",
  "key14": "3EQF6Czk7TkXkHjPAasEVF3au6BTXopwYfkTYvS5L5HY6L3yxqJUkD86gU6iDoL6xDfevNgy9PwoPj7Jq55Stjcr",
  "key15": "4TbqFwtuCeGxLcKKYsQdqXXxHWHriN7LCjrF11yQf6FkccHkg94oWfzwrsigSwEPN95ojvDAMAF4iDYJfwHmokNe",
  "key16": "5NJZLjwvi81ABmfTJdEnsooewfZSrg5jwgE3RC8bxskDTYhGNL5VCYCMxpAuYFnNyqfj8CXStrcCxSnxgTQK7cmj",
  "key17": "iqSqzaHf5PbgWYmrXZo5JUZtrYKc55Jno1aBqdhP384A42oogsZFBtxMTNQShLS6QZmoaaJfnDTFQT65tuRiyDA",
  "key18": "2H42ZyQobzrXK85rh38nBbFzw93Frgh4MLxBnEwnTLE51TZUkLvLZKDaMB8NepxboDHHAy9JFPGA8DVg6Bv18eKD",
  "key19": "4EFxfZbS7eAXmGvsVjaQKxy2h6ZDDaHogXbBLWQqwbceCXpA7TJqcnrVGd8CFKWHFwFiJaf8HfRPbyoU5e93Ay1o",
  "key20": "4SmzjjRZZbKi6TyDjsPHjjfMeqJmmkrvkHiUFqrRfhmEEh2TbNH9mnm2HTthYGTvGcAAFScJMNjkXFia7NaxYWRw",
  "key21": "2QNunrJfUUUee4jUPUKfC46ijrvyAPAKoW1f15UgRT5DdXncwLhgqgMpWHFjjwGAUM5txN7s1Hhit6XtDxefAarv",
  "key22": "n1R92TcfaPQj69qYEbUKWBxzoZSkVQw9PhDDSGmpbqgkpQGDHXMyRBmpBMZPucZFJzHr6nDamobpedZjrtTHBcs",
  "key23": "ix48CEMFNM3Cw1S2qp44ZMyGT7A8zzsKxGdDVtoFSWqnjtKLhb5E2wbP5YRc2YPy2YjWwErucCF3HCmb8yoMXpn",
  "key24": "2qvEaTrmkjrsiG174WbiCtmPPHY1bBXTNytxxbHpEaaJNyVzB2xPWjrpm1RsVEfjEgcTv17TGwrvEAi8q45YL6TD",
  "key25": "2zHyrry4U1CN2M7byyvoVQw3yYAmixg3XyL1QS19SDFPv2Y97VFqz9EhVRtpqvTK5ou3PoJbbGjdHnx5cA51nZZG",
  "key26": "5GP9zWbXnHZHvyxMZtqYNDPqA1ok4WLtmQy3pC6QfqVKjdcyfo4ozHhmT4aQpSoSbmWqC8JsVv6bawzarqo3fR33",
  "key27": "4KfJsFBauakHMjHZvHVjWBXJNxXy3smeSebVSx6DHcAgnhfzJNwhZ6T4vcxXGG1kRWKxtW7joJbenRoWfMn6ztyd",
  "key28": "zUwKXpg4aEo3kz8aeeyHvK7P2MoQbenpz516iRq1DCnUxW946U93q1gHjQgpwKaBX9Vfa1resKZsU4UEFqPzxNf",
  "key29": "4kTuaVn6r98hgqPrqEUMNDLMr75c6GG1tHd3THAH65J22TkeW9S8AefiJnZYr1CDi7CkKTkmN5W8PnNhqMnjj8eh",
  "key30": "WKmNXbY1tP8hJMVSrNs1tw9adXXLPTwdMkv12h55pKp1yWxyjxUgwqAaEomfNvTAGuRTZFjvWvUg1aaZtqz98kK",
  "key31": "3DRXscLVWV7dKCE1x2vzw6EZCUE4FtKB8P1Rz1SGA52PK3E2BtmZAiea3fa2SJwkrbv9DvViDcKMRcY8Kd6rmGfB",
  "key32": "3RtTDA2wrbRcrKTJN2APc6oAMxVniqW4VnxKyFyZB4ptAa8JD588Y94RgvEXMhe8QovmjmSDDj7BJBzYyWceJcZu",
  "key33": "37JJEqfGqvsHKE2fyEP6ioXWRb7N9qL34tgXdcgYheycd9ZbphBFaofsx17ggsQ5JZe9nUmQkxU8FUWMkZqumf1p",
  "key34": "8YmuqLKCCJ47GdUQrf15cerreetesSrks2RxNL1VHzCBASTe8WMafZ7qr7BUx4CCVtahJBwNwiwT2zSYXcdwq8b",
  "key35": "KeqN5XHoSCSAKXuRKivpjiJLyeCAoehCuwUm8CGHDiUtj56JqGUQSpP5AnGh5E86AZ84Zhey3fTXoqG2hNDZX2U"
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
