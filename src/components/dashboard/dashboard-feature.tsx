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
    "3zXDzv2hsqJ5wYebUdcsNDvx5s5D9tL9EJxZTCLofZxNLAPPaMboK9Dzn5JgfUkqRQJuTRF69KfBG84CgfeDsMkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TxtsA2UiQPk1KbGm3VswYi1FF1iUatPpKDNmyuG5rb4FiSkYe3z8SVud7Jgt5rQUTJ9VS9Pbdew8xEUMzvBa5NR",
  "key1": "R6RZJeHh74B8RYxETaoZyDHanrsWMVYejKgWmVFCbHiQQTuHU97xtPwp88j1WA5y3hz7cs7GLmfrTd8sLGpDdVU",
  "key2": "wuPCVWMjEpKMn3R9EKSUdn5ZQigXuVUU74Y4uxCXXYJ92E6hS6cXvpQQFo9p8NEZ3b13xm1U8VJEXWgCAmE2DPf",
  "key3": "2bNnf1Dt7vuKWMKAaS5xKvjFju2dw4SZvFKr4JsCoBBJjn8GBfdMYGbS7dsDMuYBWQqzekdovfzaHbZ2XecU4Tdb",
  "key4": "TDv1Nr7kRJp3Je8tcA4gAyU97HWxuDE49wsf2sjAAexj4aYf6HK3rAzELzRsa1AAT1m7WUjwZS4CsfTSFsKBSXp",
  "key5": "4vkvHEBefy7AM5Sut5noFLZYWk8c9vbSwYBZYv3V6w6Ee33FroxcSLCDwpPcwVGRmWuNwHeT615a8iACXe4MC8po",
  "key6": "3XxLf9oXkjJ1KTta55CPDMP42TPVvaebncdsVeRdgNrjNJJwEQLuuw9dEDFg2NdQ1smZ7dW2SsBd9DiT7m73KmYm",
  "key7": "2msVYEXHkT5gG2wozBk6hCnhWyX9Z2hJo9uhxHvLAcAuYUYDLn41obeUbZ1odV6S7wpW5Rz5ZQipat1oTxZheMe",
  "key8": "5i3E93zdGJBRkniPiTzDNd8FBTt9Fo7zL6R3aYHx4R1GJ43pH49XRwiM6dcv51RUcinyREyQUoe7yveBb1eCEsLh",
  "key9": "5CBwD7ervKY2gDR38nP9Xmoh8a2F5E7sn97nxYieE2qstN4CucHpW2oEfhTt4K6HTxewifW6munaBnFLFSGCHFPd",
  "key10": "5Phckf61bW7rRiE8aTVaiXoY3pEAub3f8HxWM97dcT33REUgeYivSViVQKmNYjHoKEtzFfy5WyTXE93s9pYrzXCT",
  "key11": "3GCy98sW5FKzQocyNMhMA8Yv3gUgYNfKriP9PV25bFwZC5fF8rnKZuDjFBP9QF1xQ8h7sk2shHAE6VngrSSwmjK8",
  "key12": "3oLZ5YDNf63bsaL32eCJYZcN7GWzwXcoXeoUUgFFWdZhDiA8hBFCUTKAAkfnATf4JUDCiWf9a3S8t1NBGyEqmHjt",
  "key13": "2wcY7hzzdBq1rt9HzMdDn1tEP8YyUHYxxVsCnM2oEfT8QaUAHATmuteEEuyLoXz5uMEJVD6CoryeBwmj3Si1kW5n",
  "key14": "3gFzQnndbFYQmnkEcp1z3dF9ep6tbtHZgZG59EGPjMmkUv4LeQzn3LuJQub8eEwXDWKyVemUSYonpy1Xr6hhr94d",
  "key15": "5jXgamYbVGSLoZe5msAMG7MRpANkJrZA3tASP8uWq2f5HfzTWvEA2mPGPJWS8MWe8aQWdWfs5LqEd3GDULVnqEfx",
  "key16": "NjExpTzBU6RTJmHXobLm2eUMXHXFcV3PuSmG9a3Z2C8NisJZUofgzDnMph6Wwt9mETff79QZCKX15z3DEMmYWVN",
  "key17": "4TuJDEPeF5qyaqLQ3bEisWT4snoTaY3jikQPdWYSBeEALPHNjgNLUka2BrQEAcBKNejyyBJDwF6obBC6tqzBVzsB",
  "key18": "2TknJPXJeSafs2Qd2cGCoSnH43FqR5wsPSNxS46Cv6gia8UyfcnecLhJ2pJYEQpDFbAk7GS8YBpjQ6TDLVQWHrdt",
  "key19": "4QeJ4VJN1QtXjYuAjtfiumWGrVAbXFkYPYjLEjsfwJtJWZf6w67d9F7n2ozYPk5nvqepqpmYG9BXrC9ok1J1p1D6",
  "key20": "2VgT5P3CccHukRE6Yj4V7LHzKLNpUf1C97qNJddryyptG5966y9iZX1vbACLAP3XtdHZyELk71Qe9M8G8cj17hRz",
  "key21": "2XXFPgzTeZxyk9XCQmgjWZWNTt9ckN1aSXFMCapAnsz7sLCGqirjpFnAsGKjmHQW43yyuBAWvEAFURmXkrRUUdNW",
  "key22": "37buGkNohUZLGx4fAJQ61nAPaQnuKgVLWP1YYqZDPsvwcegnjN1ujnvbhQFxG2gecTcUPpYreQeqxVH3UN8EccMU",
  "key23": "43JRmyLKHyEpxeEYTnFXJE4QrAvxY12GFYC2vyCdwuQCNTPTZHb84pujk4u1RXcW5VLVxQ3QmrQ8ZLFVBNxj9xMY",
  "key24": "BoJdRQA7nyYA1SMyfZMahryi1fXhwDvgnex7mDYUgpuVhER7CYTuBeipdvM6qbUBUMHkFuBmeGSv4Vo2nBPZxea",
  "key25": "3XJE9CL4VsQ8XLdGJmk2WBW3JdyoLAkvZEXvUKERMPnNktahzSXRHzzrHF2FYvaUgD4zJhJqamj1ZAkvASbr1Kbj",
  "key26": "3qY1wdug64RJADiaZqcPDAvsdY2WZKvyHkwxstpbaEYVW3dcFJUyrR7wPjRpmiP449vA1JiuyxKYPojtFC8Evmm8",
  "key27": "2FT1u73TyDMj9TE7ZPzg5F3MgwqChkVca8KkJ2oFVdUDwtXcMY9TNFou9i9bXwDmHYMnhAmFk3VBXAq6jdtwSCCk",
  "key28": "4KU6JjJTgGPHmLzpMmycyxhtoaixS6rQVfaiuaf9wXHZCseeSreJhTgpKw9DgLem8Qsnb1jG79XE8yueByQ7b5Eo",
  "key29": "32m9wdZNX1pkRpo91myrKmNquAzrcP5UVPHQRu6AeQRyEZ5MPyFXXpgymUTuAiN1yNZx9Z1PUqBm12JsPQzjus5z",
  "key30": "LujgU8payjaJDeaargDDh7h9E4viFjz2B9uv9UbE8HXkukNK6dgcpoFzb4vZWEKh39qW1N7Dcdvf9nHptj2ifR4",
  "key31": "25jCUQa1txwCfQKZte3HNZUdKh3jGbBEakV3isKBmBEC7q8QJbjQg7t9rr3PCXLiGtVY7jXvUfDbx7WNBWARBP1v",
  "key32": "X3Un4rb12zGANT2oDybSRLCKnmhjshog37uXqSyEstsovA2VdTNeNjA4PqCNMPHVPAKWbW8vx5EbhpbLCJq9z5A",
  "key33": "41QJzFWbwmjnt9byEWmNUo6DsnpUNu8A4UGaN4ecpiHf4pqN4kaAoFsntASxCMrnjtciZqxKrd8wo7BLiMvsfc2F",
  "key34": "5w9oDpVFR2fT9ur3oZ2bxjkXzsE5aRai8fxG8CcKzRBX93XH7szxngku2oZRf7hWwacBDcjzSFM5ZDPstwuuBYwb",
  "key35": "d7yaT7zy3X78VqCKFLnQMdremjtCQTAwQ7KSw5v4AaVND5CbuhWjmaCkHZNZLAsaWaD9WigBJFJu9qBsjRA47gx",
  "key36": "5WYJ9fDsZsmrxW1qFddenUFQacVBveCTRQEXmGWytqhnba6H1ubPGWXWPCARFYKszr4AwuRUUgbWBVULWrayZRha",
  "key37": "36hpqDkbcoLpNGZALky7EKff7SFmTrQrNV5kFYHEhxqBKmQM1zN72w1ZUP8m9qKDfDjiubPNaZQRxgoGhL9Yohfn",
  "key38": "2oVgZPUiWNFnvfQCNe3dwhgUwkdSaCqyRnP3y8Wp4kHWVfnUEnHtF2Yn54bjCK9ijk5qvJaLeq76fFQsxjwQH1Pm",
  "key39": "2VBM98BuahR7Eqqh6KWzgbgjWZvD3PHsM1KwfYUhLMNqb8S6YjBQiCyCwJi5v9edDGcavbDGGMBnBEqwNDqMP1Lw",
  "key40": "2msobPJtqQ5zxGCJ9Ed5Xwk6zvEBkasV13fqEZwRVNedHsrV4ec5KQjndkjM5oVFuTy4gWaVnDuXbTbxnMgKvui",
  "key41": "2dvHCdDi5Yd19KgyAxPVPMdseSXUueqULjMrCoNRwQqgBeFKq5DBMec2rA9wkmpTwM8PUeqQUchqPifDBrVxAyc4",
  "key42": "2T5WMXzCVrqhJsrTiT9KXtBkkLNKBi5SVy6ATF1GuaCUnKxxAWoFw3brh54kk2MjvvvqYnK2MKeoVrffGCZa5EZ4",
  "key43": "jtaJCEvNmaYjBf2r9Uwt3MFyPzd34yYQ9oFc8sus1ucXyGzmRPdW6EdTNibp4WPHAvCHBEmbZpcywymGKrqYM5Q",
  "key44": "2ofmFfEfaaP8E4d889JptVyD1kwDTnkesgbUA6x4t76sCXTF44DdDRngasit8AYpotm8JqbWZQjB1vGFFmokE7qv",
  "key45": "5eeLoyM3criRduDVE7e4rRjnro43fdqALjByTrzAQ4Me4yQAY7hnmr32DtfbnbgyBBKcBckZzpEd2oYgDMfRRNqQ",
  "key46": "3GuQTVvCUkrnS9W1CfEoeexD7aZGPptYt9sq8izvV5deGxfQaECjxV3pSKCBwhXJBGSTHG3TwzdAqfrCjhP9mM1w"
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
