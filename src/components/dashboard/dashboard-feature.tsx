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
    "3dT3N9mHHgovphTGXfEDazoHc1NxNMAxU2M2EFJDAPXHBAyBRm9nhcoYYJWiZ5J3TG2xCaRuG9r4FAQr6PqeM2iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDmJgoiG7yuo5UCcuFAYaL8k7XG1VzN6szQce2uy2XAw3Nst2Th1YeNAJzw3ryioKXuppT9kaykpU6HHfC8EQW7",
  "key1": "4u1j7JBqpfL7xt46i147vMqtgragQ5xN73Wpp1pX4XRpk9uSFkT8RAeesBFYvkZXKCa4oAoE87B4MHpeTCeUGn3m",
  "key2": "2p9SPRcvWvE3V3GRQCMaJUfYqUmZavFiWQsyVdoGT9XZeUaoDAnLtHmzuPHZdbQ7w7JXgqEch9rYMSnicsSXWPcn",
  "key3": "2Qa2yAecBn1sfPhbvNYAjiT7Eb9WGnpWx5tpzuvgN1F8B2XMH72Um4ohYjmv18HZpGybGWTinFVDDfpKLJANZX9t",
  "key4": "s6d7iwY5vJt5c2d3ifAqrCSu1sQNu53YCZ5bMhsi9cRZAjY1iashAwYYUd2KN6urfh2xPQWTy95ELyh6nka93sg",
  "key5": "2Zx4ZQQ4xbGNM58uFpHXFGFuV7e4GEZXxzv6TBYtffmuSe5tFMZYAc2ghnSR1UqYAEP3yq2FSywi6qfxagZS3e5j",
  "key6": "2YKL8QeGt7ZSDYHArz5hCMDaaGUh7LpgGiqK1jrWZmHmfphDK4dk7XRJkH7yKZb3VQXLTerURgRgvgCut8DvBmV9",
  "key7": "9bzjP1XY1unteG3fEZwQ8KwbsP96cTRb2GCEyYaBbFCYjvqMWpnjxBGc6YVBfadSzLZ153kkr6YccoE4pqa3WbX",
  "key8": "5D61eeTHQKUWH87AGQ3YU9TvYivxakuoGkBhGY6HTHDoHNDqGBaZPnvmZt3kugsbFSBs6ztQxx8RQjrkhRmgsP7D",
  "key9": "38dAsrTMA9edUd5xkWVNTEtbbTs84GSEFvH5KnWepYMeb8JX35u6ija3nt7mCDhjXMiaMGyttmbVyeaoTGE9BXeg",
  "key10": "3wQQC3vRzTCHMCdC5eAgWJ3AeN6kLSN3K3ZBJgn3ydicyUu8eqHHMCg7uLhCGZ3FD2EsXF83KyUB433QJhmJPAZM",
  "key11": "661BfFaWBL4bGmBNfhQhrza3Zuu4aunPAYWixab5YA9zcaNQHVcHrKPkBAc1sFnFHo7P9a6eCtfHQxecR979Qpa9",
  "key12": "5nwFWuDP2kmgu1JjVVEVLy5KmzkwQpqri5spwDfe2bvepQs9tnpWBe6WVqZsqqyPTBdwXCVnvneGgmkHkkkGqnqn",
  "key13": "5zzxxLEeWAcpBuhrgnVZDvWfABuGX4MyiudHBXHQ5QDqZAbKhL6WhZX8xiJ9o2qP3DyFnP7m46av7BcCp3YR3Jss",
  "key14": "4mFESW4oPHwQnv859yv7sCdhHBQXH1zKTmGPBP47YaUMapZKjsVxkSfKzucQkq3k9ZhiUUccJYr7z6GU39WGS1Ti",
  "key15": "2Mubd8uULdFp235TZgrDrTeYSDZMaABpf9dzZ5jb5cNhWXeyfEmCc9waM6xC2MDsN7vAG2dBk9ZgZkQXHf5kJe4r",
  "key16": "2JiuikPn3Sx4smmQB3Y2eEDMAtKduCXNuTnKeH3eHDqTJVR92rRRX4x1SvLRodEsrygp3ACuXRKgrkh1ug82dpwR",
  "key17": "kXf3y4SVRsG2h2VRkDYMJfyNyPY3aJcSr5GxtmYapWvZe6mw5GpnnERPqp523RTk5iUHLRDzY3DoQn7e8DHHsRw",
  "key18": "5Pm8zmvq4ehM2PRV2kBKrJZtrPNw1mSjEQpLGqzxnnNhT85h15aE1WJAjQDtzCk8HajmWKPHv9WD9FPjDZtnE1xz",
  "key19": "243R3tcSfQt6oCkKeyYXcL6DnEnf77Rt4rY7PPJJFzPZpaG4nHEwT5w4Tv4t355HgxPqrmDozaMAgTc1NpttL81Y",
  "key20": "24W9QysEH3QD3B45GhG4y95fB7cUs5M5dB3SaJ5tdyXeEGwzgDSDvwVJbLy4ii6Yn2pBg4nA6xQAm1me32RKgdhd",
  "key21": "9ajWxHiEfCM4BGR2BrcUEEYKcxHwNM7RHR64DnFS6hzV7eocVeeTaaPRENeJ6RMu3wFo4cH2MnCyh9aBSPiaqXH",
  "key22": "2rPjRxe48ZsatuCLUUoEwiSegZLtSj1dXzgyDpzQ9f9yT6v8TfuZzwECJyEzP3gabDmwn6mnXHHQPgsALAr5jLFa",
  "key23": "2FnmNnrs1NorGNbrNbx2Dr3K1KBcYxbixhT9UctpeAaLEmnXeWundr2qXVuS6EM4j5bmxiRedt9TFA59bDFLjDGD",
  "key24": "4yJgvmAw7XSFKVSjSq1B2jUsmx78ArwWYtMhNvTeZYKEmqGd6qfY54JukJzmLt8YzuThWPeUeg2N7L3RHaJQE8VS",
  "key25": "4WhbPtCGyVRTM2zrUV2qEKKZpsiD4tRnoV6m5UrJBdysbhfHfqe6REZsd6nZBoZFwaZB81uDq7uhUGkcnJN7mohv",
  "key26": "4yT9oy2xUYYUAiDiEaTbwwB1ZPnMhUXVrFBfB7WMqWnS7uiRkggmdEnkZXPcR4WVg48aHbKi4kDmC6MMjGd9bpQw",
  "key27": "2TLrRLqy9EuaZ96CRJBKRGZryJsfgK2Up9SA3ayBfpFk6V3pxVKMj6mUPPWrchaSwBkzCVeaaYR2fsLzmqMudSCY",
  "key28": "U2Qsq71QEjsdc7EMZBKPYNzo5WWKe3Dtve4amvR9sMPv41ucvyiNrBqCBhamnFc1BFnvyobHdHZeTnS61gFZnC4",
  "key29": "4essTX8j2vZ55BfEMjkTt4jcaaSZpxgJLoSZcr6cJCadwyTUVWtv3MZa88Gw4VkgD2zB3iZEGVuWfSc5iHTMRZY4",
  "key30": "cDDiaYhRe8LAxxoFSRbpYiWturbCxk9VdhbC5A9Kntd3jPnsckCqzgurXhxhHgS2EmX1uE7iskDuChWHyXBAMUz",
  "key31": "3cBZrYQLPdGBeNupnbVVJStEnQhpyEdefNF9WgwQLyp56vAKs9unarZoGAn4ppjTmGtDBWBcWcGDiTxxSuLtSjAa",
  "key32": "2ZMpLXjttiQUXNpj95EqriZ8vPKamjMvf8RbobDiAfVB6Y49dZm3wRVyEyE6WKRJarxZvtQxxHvXzn2WF54foC12",
  "key33": "3NKi4bY4iqRAvQ9trx4D7h18g4XpErL74XjwypgP5QTtSeRhVGyM7cqrJLn5RCSnijrVYC88DjaQsobedNzn783a",
  "key34": "6Dx4nPpov8TvYHGa6nT4ygKzeF14ZBVFQZUDEdzp1HPFvkq86wXLVS6epv9GHpVsvynYAXsJdEABuH4aPLf6sAv"
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
