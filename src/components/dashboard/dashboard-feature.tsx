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
    "5gzQf2HAn4usnBqKmKymfFfjEfmXFtMThry73spvtkt4c57jsHmWE9fphcmfNz1nUgqMnZ9ocrirK2ycp1G5VVgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvA7Q4apPW653sGG2Zm6QRMKrUtSpWBjA4Qb5EAUXhoTd7qM9uZq1YC6neg3MGTD2iwKeeD4q2JteZeYNHCbqNo",
  "key1": "4FEYqtbNHz4dq7hwWfnmB4AUDZs3rA6xR6xJXKYtMKbA2RFkhujrfcWxeueQ96bbBSvqEbWyoPe9347VS1z8Syha",
  "key2": "4LWvkHjLZGfZ8forvYYQXERdugnd3dbpCtrnGnXgnNJbFGYwoPpKftjqHQKGp3iXCtpDBErAUqe3YFdpRcuoffbv",
  "key3": "16i1HGGBmBs8xiYGWX21rQUQimJzktGJEkitjW9tWfL5VsvPczGg9HW9xQoUwwBMQrymYn7NVFCdM2FUddZFrsr",
  "key4": "4ukgRwY8Wnrx4WtC1chwF9JSUotREUaAyDm1WG1xx5XC94cjZsoiFn2xZBdz9HHNTYsUMfvobztS6iBTVb6pcwHw",
  "key5": "4yZZ41fy6NAYfocf4VSUoExCQDTVqe1QtbT7tNyu42EWpnFqVn42ugWrRRrzCcZC39E17XL24PTmBn7yNGgLMsKP",
  "key6": "bnrdwB3y8gry1UniHPHvMKKKZV9VEA1qJR3g3NMRh8tnnhUG7UfTomM1xS6VBvDY1modMSr6mfhSbH1jJ1eyJt7",
  "key7": "2jGWiPMQwesQmUzL4g3h7r7YYqyaktY9CnzV9Qmwacw9FQBK1yfdLDRtadSc1B6MDS4kGMsFHpKaSKfHxQ6TSXMC",
  "key8": "2wyAHBCuCLvHstnBAu7VzRcs4hqzdsUM7n6epuThX21BjKhqbnDMdQ9DhgMPPN8VC2yCJJYjSyiVekTfAFWzFG5J",
  "key9": "5KBZauU3bi9AT7BQF5WZyUNVi6ZjzHUjMLSd3BBhc5PdSbdi6RUiK5PSZY1wjgFkTCm364QDktcenqtZoYJzwgWi",
  "key10": "5F7HwRhsrkAU2CC3BaewavbtWvmynJMaHHHCUsHxcG4ruysVW8M84Xz723UCMMFWWrhQmGUkoZQFFfCCLzZPmL2v",
  "key11": "Lu5TVMd87SvN2mnhkSWpSr1dBE5pHS7Lb6s2nWhzUCYXLncEJoCNtLLsywD5PDFpcL9CtFuTFGpb3CBfhNAvhmF",
  "key12": "f6QacS6bdhucjVTss8PdmyWCu8rXR1SmKoJeiobg3GTGC45eqFPweeLcR7uUqUprPxt5htAZM62bNoeygi6FC9K",
  "key13": "2hKJxbg4K28T9AYUzU9frQBaVtZW7SaV1XkVsh7f1TZ15YvSe1ACf1tBxqwVXwJUxN73MivAMaeQcgRuLGbWufNY",
  "key14": "3xWiqbQqPFdZkhiebedxPbJ8dQ5fVEzsHVjJu86SvuMHrMJbUurLH9LKUR8Xf6ZvJWQvjeqLvA9ybXB4QFomEDUH",
  "key15": "3LaXQEjqpue3yLBwmcuxwySk2GHQKwryXXeVebENUoxCsQzQA6bVZ3KEiseS1Hqn8DS3u8RUFYvabLEsBZgGXpsU",
  "key16": "FqeXQ4abJoT54rYjNGuBx47tETfqeF4iebiJjRSUJ5JPHXtPKuTHH1i4Bzs5AF5E3UnTr7AKsq2qVvBCCfExzm5",
  "key17": "4C9EbQfxRH27vPXPkNGqSPswhzCqyeFNiqogR7RCpktktVBwCqdPpggqWFjDpMRXQf9WNmWJiFeYReqbe8DcDDEu",
  "key18": "2r2rX7eMUvDF1gPhdusyZ47tdyNf7vCYf55tLwuoWwA5BWxMw4g1v6J7TcYZ69MqtrGaiYrXQ7QcQtxhybtxbbyk",
  "key19": "2ec2HVoMLsBXF8ubJdGda3dowai1i3jTjv1octQ4HFhXp9eQujs48NBhM58KtiFnpnFSNoD5KV7wJ2jvcJgt6FLy",
  "key20": "5QnWqRd5psjgQv8gdt794pzduchTUUp2B7EPBBuxvrt724uH35vC91UcQkfxjFWgJsQDPi43JdGWBg4ptwYp3BgT",
  "key21": "5rZ7PNn1fVqrcXJ1wmYhq1koKcg5T7imt2XDMaguRyMB1Q7YK2my6WAPHtLFGERcBron1n86Fby14b1DfsMuj299",
  "key22": "4TmGDozjDkUDFeRjPwYxoXwtat6LsMPZFbqdFdxRAAhet7RG1tUtfL4p9ggV7oedsR9c23vtNT8QDkGyE2BzH2bp",
  "key23": "5NkqHedgU5Jxt6ZmZxfwo857GH8TjeRaiUMGCimHaUBxZwSTC8YdLHdTptZBMET2MqwWKbFfdy9NoUXTXWwBrEiZ",
  "key24": "3ZdySEakUeNqYDFnSZ7hTJuscSguvsHJDiu8sLjj4dVYYkCCCZAuJZT7PaWJhaa3cKRAmDBtBmtryJQwnNCEiWqc",
  "key25": "3ZkFzcgDg9HnfqKUtdswZxWihYD13pnTifjUC8WTKnFojRcXTH12sqQe7BKooFSLeQfRARS49q3y1NHChE9g5dGu",
  "key26": "34B33h7X41v8YePhHuc3nVG8cLYhhN52YeRynCKxzQzAK4YGSErTwBw5an5P9rcCDm5sxqsAcgBDHAQsR79vZftn",
  "key27": "2iTHikhmG3fbEPBm1mQaq6Z1HNcqZU3xSGGnyfst6mWCeTxLMZm4L7cTZXCxMVSBXXoSWqpZK9ZFtsuN6ePE2Hmq",
  "key28": "335nng99WiTiEa4P2dhaYTwPTrAu8ns5c5cQKFKoAue2sir7dyiPGLEL8dneXSWp3cZ7r62H5xpTadXmp3Q4Uevc",
  "key29": "DzdXEAJkV7MhLGAV7tcQeqkq7FyRjEDhpNjkGi32uFdgX39gXtoHuUykdGzpornVhmFrrEnZghznxewEkA7FPQF",
  "key30": "321Zoxgv1tWx4uJ3dg3tvHSKvJ7LTUFdQfvP6PybFZdPnFYsZLDrppe3j13DVvRTRXxg9E2bjUc3GaQ8AyCACUG8",
  "key31": "5NwCpyC47sb7mR3JbkU85HJhLj9VUpLDU93BhfjcdzqvLkX5xnKWMh37VGnzd7pRfHFVQ1XgPoWYFFBKRpSf49rN",
  "key32": "3JLvcr8gpL4wWV38MYJM6uqJz3yS4QoGisaBtDgXnueUJ9BkJkdLgy2uVBHxjTo9YAuZ8nQshGnjC5XexLddPGai",
  "key33": "5NGXBb4UmNWUwD9L3B27pFnK8JPyaydcrtamFGx8oXPd4ttj9vNwcrGoxCU1GWHU2RXNNjjw3sqg38GManFSC2ii",
  "key34": "2Lvo9u2JKs7F3uiMmmahj6o96ZhhE3tryEEVMv6YvoDgFFNFgHjE3j1Yhkt9cY9f8V1RBZMpnnq1zxRvzhstnJ6m",
  "key35": "4qj4Lh95JpYcJgCV62b1dT6kEPS5o3Wrt32sqEs3KNnaKx9AjYdzkGTWEmV8MemZdUCx7kouUosNUBvcf3vgHdW9"
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
