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
    "q4VmnfZ5ovwo23WDcV4EBggBv6yRi5h2VDbHsNCfT1oiHLNMJ7X5AZHZfvwubHYAuB3tw3GjMEcXN9mKMZNuf1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "quV16TCism9GbC6f4EwiftQXRg7ifNdRC2Df2Zf6WKmK1xPM8KVpG7g7tPomULkSrnKgmAvyRziDBEa6ovVeKyW",
  "key1": "2HriP4WmCPna2Czfp6ysLmDXoSZEjwDyPuWwJREyDWH1Q19Ji5pa4hfmCvteC6BJrpaFXo9X68Z2kgK2BVm4d9gY",
  "key2": "3sg1ATu81QDKS5C8Ae5RaphXxEeh8TQd7XSYWtmREKMhR8DZrdQXoKiZtDMusHZ8k2qFQ2MbuBS7FbJqUfj72Edq",
  "key3": "4xvDU6SbX3kotABECmtY7XZHGKMBWrQnBLtwG2FPm3S6xkZDc6EcXPFuuaoHgjs87qQe63vy8DFtRFj7Fo3WtzHs",
  "key4": "4cHvS2HXmwhNMmNcCg4T7PSaDc5JFNbh32sHv2TuEtYhUywqD8gdgjoSuQwzgi1wqLZAePqeQyWjH5WhWhc2MYDV",
  "key5": "4sByiZRLf5T7qRaXFysMgwDMF3ED687xU5MAJyX4fgDq57UaExPD55hcw6JAW7UiVT7wS5wmWFXVngZPSfFmVRaQ",
  "key6": "ah69NA4jMNBr3h6prh9nkD2r1Jh6zbWNTHHuoUZ3kDKtxt2ps92BYYz4qE4Y8dbzufC4fNxjnKhju6r8dHRbdia",
  "key7": "2Kx7ZABkHtUVNhWZxuGuqCJyUaLpYg4sbiB6PJgrezpqXksLdoB9bCHdBNHNKdvvhsoBNJCxSC6xqNEUUFd6NUh5",
  "key8": "yXmxAwAFkj3jtM5RBxZ1iLAgzECMnsxiRegdRdWACFmScypxcvSTL7WMB9rWsJqMnuAP9PzdofpMdomUP8Jg3CG",
  "key9": "3A29FZ4R22SNnra48L5N1uWayNrJxewdJiuLebLMjQALmLXp5pzys4L678fyhCj8PaZ8itFgg8GNs1d4S1VjSZkb",
  "key10": "5fQ8GpLUhaPEm1cVGcYjCe31E3e9MgyazyHaLh8sKT1QhvgoyE8y2zG7puZ8TrNG4YExNGu9fpu39YaXB7mnZYSJ",
  "key11": "4unVM69DjhvqTMf1iLu6k4caGpWVC1BAmjXfCXKFzqXitURATgA6N78JvKf9exHXrr8qP7sQvN9sR2tFVt5taGbL",
  "key12": "2gZN6vxgWifUpENWQXjTo9MGYStwU2aeNmJ8Mbp9L2Pq9D3boMNWUDYYfrwe7CV8TxLz5nRr72a73bKrtHP3xysq",
  "key13": "3bxcZh6yaPUSYhys5Lgx5gzW2EZiidG8Zy6heDfTBty8Svex19QoMADNWjKD82Aacd5NKunq6Tsgq1Q2FJhdLycs",
  "key14": "4ctQRnkeZV9Bd3Go9mR2QYqALtAFZrRZsRW3SPDMka9b1Q4NyTSp97o9L2AfSkU5Fu4bYFpCLkSwVkzwmLCCsyUu",
  "key15": "2k9cnuu8wRLx9ricr9scm3ieBRQVCXhudoNs5KmeWkqNwGbNp1wK1c8iUEzLzacy23Rcb57ow9YT74nQaJEn5Wb8",
  "key16": "2j7xUdMaJJdCkxzunTGAH3BFfPCpP5j4FWS8r7uABvrLiv41LVTKW2QcVcFipKbbxzRXRxUG81eMAiuST6bN7tJA",
  "key17": "2WKz5ZHqEfGkGmpwXKwJiWo99pFWUZJKJqP1rdwmB48aRMXkT8Y5NaUGZMzenh6h2pNvn6guTTs6Rqh9T3uA5R68",
  "key18": "2WBFTK3tvWBmR6EWAVj7uTbQ2ymmwSGjwRG7kWRtJp23CC4WciePNLcKhVLKiaQgdTpUWRjTmyDGtdcnABMd9xV5",
  "key19": "4QhtjP7FZzABeDdC5rS6VAssgmovkW16dzNv7gXZ5nC94f5CvgCJLuM6LQNZQbCkkfo5DJaCZmPRcyALd7eimnmf",
  "key20": "4aQ862QE6qhFK5J87WDWGMGnmtCSzJYGhQQ8Fvsf1RedyZ6JvS7572R9w7yenk1XgiajEmXKUX4Fy8uequ7G9RET",
  "key21": "3UvQXynLuZoNLwZC8Zc9z7uV1E1QtD2j6rGEdmAzzU3WGixDQBa2G4y421aisPX2BnJnbpiXn2kwPnX69aN1xBFs",
  "key22": "HR4Egz6YXnmaiBLcqFtZL8u51DYA4CtXbvG3VkTuted9FGLVJhsVfzB7WYJauqbtHpJeN3vBBa7ueeCnzHcgcWr",
  "key23": "62PRrrWmcj9ZDWFK6XMPfQjxYArjJ7m8gpH8TqJAt19L9FyFKcc2YxarhZFC1JfkCQNY5KtCFFccUv41Vmk4Lqpt",
  "key24": "4nKMVZPUVak7xD5fnCWsoW1GBFQriEHc9TFu9dNaygdCjh2KFuE9Kjdun2f5gMBWWH84LHdiiNbshjbkaC6DEqQS",
  "key25": "2DuuJbgF7oxMfCnGjPpy7spEzTnXCfnrd1jVmoERQji9JgE2NFs9kvQuEUaQd6AfZiNDDaKgCYBVyp1HcfzfYv4g",
  "key26": "61Gkyd7LX62YA9ATQvcu8XFibkDGHeJXjRaG2PtMd7ziRh4FfgHdyeahmFMw9cmcuJqGfRz4ZkjHMWyxrxzPxT6m",
  "key27": "4NpRnzUqwYeGMwft4KKEamo4zevb8fyaoZrMjgULqS6nnkyv2CawYauPp1TerSyW7Nq4bJyTbugT5CmeKLgodh4R",
  "key28": "3nEgQQMjb3CJ3b1CFB2bVfrC6UH8dGfrEjjxKqCjzL6FR2bSHTq9WioaaPKkPXY7SPNXUupT3RVVE9AF9X5Gxeo4",
  "key29": "4ER6rR5SBQi7L1b7xasCN9zNhhkMmNrkirpaM5RJcUfkMKmgjRNoVs9Xk144YcAmRJJHTkD7mswEgjXSjYHqgg8A",
  "key30": "4f357ap16eCYHby7DhRvsybu4sm8uJpY6VrdvBq2oGJsE4RX6nNAUnsJywe9waLj7xPYnj9kxAyif6kUVgqUPjam",
  "key31": "43Pajvpct8c8X6k2ACgRt1Ummgoxg6eNJJwcndfT3w3sphBZGc48otrJWdJDc6Ct8ezZchaCRUMd4aw8pVPopKYw",
  "key32": "5THeSvUDcEdPnwE2diX9D9LXXPqMSs3wd7hKPJ8rJADMAg4GWwmGDMPEsK1PPryZgMUdKZJy7u2ZNzB9FhLbEo2X",
  "key33": "2srWy839QmaxWypvrB9imtu9dyHVa9iLmU4CAgZ5Jdzape25BKa6rEDFCt8ewoHDxDKRetzdQm7v9eYfxbGq9QEu",
  "key34": "4FV8ZaswtnqDg9N7gEDm7wWBpU3jonB1Fyd5bM2MZiYCej8Q2DapvkRGSKPQQN5rv6QW8hZa4NDGDRZjyxJ7Bvot",
  "key35": "63xY2CQhKKoxXkNYMUA8kvxVNRqdsL1fSytBU6gKDjDxK23PYyRRhoP44s4Ho9VsevmnhpMH6CGvvRB9c7ZrEmuM",
  "key36": "3FXmbhAQYYFuZ1TTxYRpPKpq4XBiuLgKFqqk2HJ9TaDkWL7RZiv4sHf22D4b4fh44roSKedSfZBFRH8TEyD98d9Y",
  "key37": "2H3RKbqyXBjBV3cws6kVmD8kNScGKVgXnE7Vo6p5qovwE4NuN2ukU5Ti3WSG6cUnDwpBhNPUfpQJ8z3hXkYNGNX1",
  "key38": "2yzrZzUF1e4n8vBcvV1JqFSU1iupWGruFGu3TC95jMqFePmivatwpCScMa27KRa3hMLzrmb5ThNYD9PTtfde6DAR",
  "key39": "4YXUpaJVGZcpcDPvp4Agutsrsa2otrh64g4VTVeAku7FBBjNCjqu3hNkAFGePytuQp9H2JxbyXw7gUJ74RMoUrHz",
  "key40": "5hKXNQMJRYPyFmDzPY8MZ3uHNHhuhMnaoPiChL25bvrapXKAcb4WHt32sZMxv6SXSYFFrmXcfk2nsGSCXv1tttsw",
  "key41": "WUcRb9tdRd7ZoASAcroTSh4WUDbDauRtNrnUb7rzH7gfkyGMapChtR3f9y9R2qrLfrgoLnA3BafJz54ZZ1rvy4c",
  "key42": "8uyQNQCxxA6Nzr3C9vKXybVhtfZazktErRTLKZ65XsWGJWeRNW652guL4cNd6LRp9TwpJn8zSVCsqupyN9GmLRV"
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
