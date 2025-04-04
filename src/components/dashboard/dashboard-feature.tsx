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
    "3qjuqUYMu6555ziJVFsbT91iuRE4BhM6TCy7sXAHHTWyt7NzjdH4BKkcresn2scQZ23LLZC3MUHfyiEvbuTeemtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RM6dZcNJKuy1V7otbgPAcCUaQrkAqHcUPJtoMJzpkfgRdHLia8t6YGb9ZgkzLnK8TuADEomRZHb428Uuy6UJdmE",
  "key1": "5J6AgaPqtDqkTJsGwQJLYzq3QaAbgdUpPusBjMqgCfKB39eMceW1WQLS6TvxfdbG8TFgRngmbJ8FuY78V3kT1WE5",
  "key2": "2CSmdhXhPXJ5i4rSVjp2V772LaKpKXSsraxgu5yg1qJa7VUx2upSZSzP7UbCDjAEB7XExDszMRQXZu5Vgu3c8n2G",
  "key3": "2Kgzuv4rUBqReNH9kUhEDJBPvtSnhVXqasNykQYkCqZUX2Yu1zzqLeYAVZvQgBk9fehmX7TfSYzeT81QtYvCpHWE",
  "key4": "5psRTT6dEWHkH9V5JxxaoYecbbrHW2jLmsuhsFzbrERHhoExceBaNR1FnUbP5XkvH613WWGwNxvWgSYSrU93os9v",
  "key5": "3QxbjjpwKGh1bF4vZc3eQ27pb8op1CvTSe3NNCJrX7U9tom8XoygriQokB9YpEcKq8AXnE8aGCaHjQFZbB4a8a2k",
  "key6": "3viUb9HEnefcKRgUBj6yMkVoaGDL45ZARjkHR4Tk6a88iC4voWzhYhVf8hq9zT2M9ksLt6ppPAiTbR1ZUsS9gE4",
  "key7": "2FWa1Ki84Ga8o5yqiRy9gkEYbMwHzp6KZ3x9oW5F5tGu44Jv2Rii83SShnhMJbv445LdsG7QAF4YeD2zVe4nrm1a",
  "key8": "41T3pALKc1HtZhALBTb9MC892x8dAgDZvRuEuRePKA7BJsdsJS2FZNyNVifajZn3NEA69FayAH4ZgU2GiTdWYaKF",
  "key9": "4pfAm2oaicSe1bfhju4vcZKrvB8TQKdARattSqEbEsubDEsRyvV4D5LrKZFSZeMvusVvcBE814xigeMGMSUAmxLT",
  "key10": "z38WLKJ1J8yBg1sPdFf9D6PWYo3guk3WkrRZjLQmrzBAQv2zfDfSshvxyF6ufW1wF5LKiMTDy4qfPeKnv6wmhKu",
  "key11": "MCnyPBwBxxxT3J1TqNUwWzPZTxdoUCBbmKXzUEqXKQwEPKfUuCnonGJAjLFBy5vjPWAqTLmeYrzkEKF3N5Z7we1",
  "key12": "5Jzqs4exim2cgvEzqoNFmqcp1FYMudzAYhFrFNYw6hnd531QXU3HegeGNmwj4mggsjPWhzBSKLC9LbyTAqJvKe9P",
  "key13": "3bjni4aiggd4Y7G2RhDZKuZ2yia6pEAbqED19YzcMR7eQFSPkq7vz7Z5BMqHgZuUyso3mVtjqtfUjgRdsRXFmxrs",
  "key14": "nMWggBZUpdiPFoWQpmS2rozkbR1qoJR2jUszZAFushcAPaTUA3idRBsatkPKzDndmg7Xs4vKMpmXD6SK2RwaCuC",
  "key15": "46n9UydPJuKizCA2p74GdTWnLHLhEsA6W6C6Svf5m6gDFLLR1hGnFN7xcKt7yYeacDX2ooHzx65tHZTbqX6KQq4W",
  "key16": "4AufjMhAoU6YMAq8viMevdDbehKsnLJGdDZN5kxy5VsHNdeM5MERGR6MFASsiRyo6VQaP3tRwVDmJP3KJcJv4i8y",
  "key17": "TFQqvWNU9b1K5G9nfZgDfCCox81DqgCJgqiRJrJyUyPXtLSpHW7TECyqi5E9d5qZrbcxayc1z7TXqWDbudJgzTT",
  "key18": "24RF8eNnXAHTiKGomtEiW8RuKjG4QNE6mGG9hweSEgkGY3nhpmswAJdBuoExdPSYU6mcrZJyahpCEnzxBr6Ey64h",
  "key19": "4kvKHQ3WqCeReJPKwzKkh2M4CFJwANsMHtLbw3j3gVLorR8HiVnAo4t3PGG8cUsdFCNQTjiZJPvTVNBaWAnPGXbS",
  "key20": "4xUsDgemuf6riYDVbh1BWfv8NnMtiMnaZfWfK6x4eNmmBhJUwHB345ZVMHxjkbBj3N2pWHtm1CJaPdNnJVJUoyy5",
  "key21": "J5EAcmULnozdAttTXrvv8anCPpbtvJ5nqJKfei7FYuJtzb52U98YDptLXstZwjdyF7Bn79VVfDD6u5pxAnTFE4x",
  "key22": "3j7MsA3hJseFZgmkVtAskJxfz5CeMKsHYzzzrVedY8b3D1ZmVQMCLja8DG61Kx5Hzz3N2H5h8M5dftDMgyZf8Rqx",
  "key23": "3p2J3zdbji8bge2VhRFDmdkbrvhpebBAKDYgvcpLBhosGtZTiVmSyaKVoH787zJr2d8wW2DUuqFuqKo2KVxP2FUc",
  "key24": "1Uj7W34JB8PxdK7beqfbwqLGfezYWaQxCEuX7w1zXa2Lfq7vHPk8p3Q8LbU1z9XQoPLfbNUMNbzWZiiRohY8qFb",
  "key25": "1MKKZiBkeLiJneKQ9T6KHZXFLYW5FPBVZsmSnRXxeRidJW8gxy1t9Ak1bGEAYQrkTaDnbm6HCpkCS6VaXhjb1zf",
  "key26": "8HAsEnkCP7dRPtXrFoMcjKw4EZk4Jcofsm2GXUUGQLoH9fhFynhfuNzaT8wv8GtmT4Qn31JXS4LQ9pR2azC77wH",
  "key27": "3mvRoD7AkzUxWSLEUNXbF5dTf6PrUNo6gYkuDvLSvC7TQFbxhbQwgM8zUfPofbhHS2PXEEq7sxLk3E9PsjhCjars",
  "key28": "4bCt4Q4TA9QB9KErXr1uAZRHth8h8RcALGkGCoadmimcfuX6iNiN7M2L9EMLtzdTQA9REpPX2dQAiEDttsXBAdTm",
  "key29": "4dZ2zShiWzEHWGvDkWf1YegWUaGdWMqF2PekEwV8iLGGjjPvmwbPmnEFEhYSYnomGp4Hr2xx76Zrup8sn3vBkiqw",
  "key30": "5aoFXnEfhyiMKwyfVGJcTtio8RBTx4YB3MfLew2S32GFQTqzRGu35GxBX4h9HerN49m8jXgEou5Cg2ttFocJLpr8",
  "key31": "3jk5y5DzPJNgM6ykmNt9utqZ2xrDzkh15jJEfBn7KmZqidU8r6kzXaxofP3XBn2xjWMenggZRGMdHUv54XzQC1iK",
  "key32": "PcxTvqa4BY9JU241sG6WSM1jeuh1nv8URk4MJzHSigG3Mnf9Y38zFN7FqXYCgfurR9VV7PN9CCNDnUaqDaEkaso",
  "key33": "4z2eYSnFGR5BPvbau87mnAY6JiR3qfaLNzHsbDKTSnY5HAATadqNuYCEKUg8RTxLSizYjuuoKTHTVvMnEKuAciGm",
  "key34": "42N12EPMWWmrmLsyv6BEWdUfpWTLoh2p85avF75uvLnYdSGfdBpA4KERrQUHWPLcF8ng7pJT2ZN5xqZaVdJuZApG",
  "key35": "3fkyuvB65RqdTNBB4VswgyWVc2fb617XvDziF9gErd8DJAXsMMn4WftREVbv612Lyu418hMPCkUPem5a1rpKygPz",
  "key36": "3mauqYqrPevnx8KnZ6CpUmkFcaie6paKwxgY2F8zBzzhrULAfCfgC1ayv4YyLR7uFU9BjrJnYJfS9jvmKPUTH7ts",
  "key37": "5fD2KJJQpGo6EeDrzQxrU9uwPJ4UahF5BS2UmVKVKUmF1wT28S5pWueWnDG7xxx6WuYrsnC1yM8hVvp7kKRvgyAB",
  "key38": "3Qq52wrf4Ya8CLQHYp2J6oW6oQc2zeohim1vh2xrRKAUpUm5ERvBrFFDUNeZWGq54fa3xzrR48f6724dFuw3sYLm",
  "key39": "5CnLuuZK6CY9eo5NQ17xoiWJhuffJnPhBvxq8oYBNn8m7E3wLSHaAeeFmmrWry1YC1DCjsoTtiDiS8PL4CxMVPmv",
  "key40": "5oj7Eib5a5TJm4DWpjr2DJ5JXuLxxFnJLGu7GkNHxyniGCxhvtdERoA3xowoAKgsMduMAwtw2iQoHicLyEoVTCr8",
  "key41": "2WBaj9BwBoTEkqExr66zAQj6nvqnif2QvKyWBTLcTdd5Mfb8rgbHCNKbXpRMDEtWoxtBn4eCVwcAdvqXa96dUj2z",
  "key42": "46Ldaqh5AjjyUhavbGPEno7WyK6DfBSQJsDnhjYXG3LgP4QmDhX8HdwTzjzJXz1Zt1s6JfmNaQAUeZZCpMxy47qb",
  "key43": "35J8nwsXAZDxU4ReKFAzooUJ6b9kgnxoK2Ak8CBLKzZZ8UV1booTCYG5WZ1iaRWJfk4cL8QdRAhToZccCGra8D1k",
  "key44": "3YwBN53kQrj293rKPQphKmmDAoYUxvSN6GWaw9xK3BqTUMyZUhFdtyATKkDj8aUFG79ybcvu7BH5Rxw27bmbCS19",
  "key45": "4S5v7AKtMP7Txa6GzgwqZo3JBtkHmwdKbPzoKbmMFEeYStViaGBQ7uExzYrw4yQf1CzLxtMfSHRn5LyeD4uSVKjk"
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
