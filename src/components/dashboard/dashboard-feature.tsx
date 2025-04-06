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
    "4jwMaBLNfL13t9aNGdkukJys1bfWMueYdNuC4F1mMk3p5dzM899KnWfT4Gct1NJQB6DvH4W52xUYWiKEwCNiQyXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dahze1EdqsgbMjBkRRShx68bhRXNo7J9CYPgdzDUdP3DgVCevgjN5mcEsrcp62RAf5yPjwTCfdV8w8iKAuPGmjP",
  "key1": "65ZbKXtWCtfzGcpPRtvieJAq5iM4pSJGMPbsXQHTNmuBZf3VYzcVqRiZVCg3N9R8VUG1JqaYXvUVbQP7eg4YN8fv",
  "key2": "3trcMFEKjExhtYKtkVCDvpMtBMH9ZCKHCkm7YRvDjQh54NdHCuwZvBNwybAAt8GbHX8TiW4776JXSSVdenUx6e2v",
  "key3": "4svMikzjWyUL1FHEMRdz3oUd2xmwviUChbGSwnRQ4TtKXCxuBEmnboRAorJk584i5pNFmjvo74LbwHDkMSuegS1p",
  "key4": "4aZXkkw7R4qdtRNupqJyc9DqhPZ9ofMyjEqagiYJ7JPVzHhB9pvZn1Nma3ztNRXderioDgx4x2ZoXYUBBJT4SWBS",
  "key5": "9X6rYbg8jv5Kvj7CDKin7XGqg6MpbR2iZbLMB43hoX3aSbKx6dmi6WdDainc4VdxSZewxe93TVydAjaRhb8mm24",
  "key6": "nszY3piJBTtoZds9aKzxV5WiwKYxUNueLBfAFzzzKZN1ruGQ12ZossCdMSRpBSZQjMCPJ61WNHievjHKBDNLxDC",
  "key7": "5XdS62YtBsBUxKPZFLfL7ZwFFSa3LmKKdYq9k7fJUTYfdfJpfsvqp6HEYpKQx3H5vHL22LdST4Xn852148RdFFBp",
  "key8": "9qd1Cmwww9SWHnDbM9MRr9mFJuhLa8aRtF8vPpTtHYJyxg6XxijL5b4BFnidPyfobVuVrSerYizTnQqD2oLKQgb",
  "key9": "61gK2hwz2iAsC7nnGhkoraU116FSKJtTvJs8yW47aV1kcMUrVEZvayudade7xc4MiWiV44Dw3iskypPMp9ua8A95",
  "key10": "2PxbJkaQUpH6opcs1w8TZpWokz8rsaU3pj466X87qwAck2rfG9cTJhdqCdq9agBi2sRaWqNWQ6Fajw5XPDfFzzPx",
  "key11": "9JzeCsUCLj2LfzgPZNw6NsFHh6L31pgXAqvjiCSUQFDMKXozaFWpvvEKCRyW3dwt5G5gqM3RRSFANDsgYj9ikZ6",
  "key12": "5Y1AvkwWzhJKgtcmQvgtk3aXFuVtZA8TzHWKWUoWt9DFd8vWMWGS4V2yfUBXajG1PtjLz7ykg7nsvfb6RVQXUX9A",
  "key13": "2Yq2WNqMYEAFFUvdgeD4R65iBucN23FkKsyj68Z5DcSfGUhzptyXfD6rt588xL8MkMZXSbUY3dnaJTp2ykcEPfKJ",
  "key14": "yfB1CAQ8x5QMCzNLF4hQTq4DtobrH6VFCWTocHpBKKmqqLBpvK2nFdUyfQYkaQ4t6oXgwP4TRPg2xiGXc2WVmhT",
  "key15": "kaSQm9nPe3azpd5c71MvvTEVhbzS3zHc9s4nk1H1p2qByjmPn6c5TkMttgGwfSYRYevMJ8WnTVdpMrroeYGxMbd",
  "key16": "55xReF65Q38XNPDxAz6DCNkKujWHKS2LMYaTvcUmKMWohQq4HPuA1jZMApM4iNxvJk92DmAiXYAcTGSsudh1qvUE",
  "key17": "2gjSZ4nzf2vuC1Uif3qsqXEBVDxYGjiwW4oCfgfbdgKMefibm5F9254iCo16ir1NxozBZEqBjCM8UVFcN2V9oaEX",
  "key18": "25B2mTzjrWaUorDtrVnu25t6QasoRJ9x7AguBzCSThfumhME7oovipsCcDxTf3Y3DfyAp273B9Jfi4wEiv1RktPq",
  "key19": "359xLfpJnuNxSdKypjeZxnHzzdHUg7ZYEsMSoB2Cm2FByDmE1mU93H7XkN176r3BPf4yJNVx2QqwhEZuecJvB6MC",
  "key20": "v83Vp1Xq7oR4yqw3qWqxmyGwp9xjdxg1jgHWVQWGn1jqjdN3w462zqBjjBsxPwAgQvBWi8aN26XpHW1tT41GoTP",
  "key21": "4AjcT8F7d4MuVGnZcWnTNjPBcPbWJfWdYcKhVax1iZAebMuwkeStSxFigPT29m1ffX39wgSZbc8mvEjzf8qgvRDa",
  "key22": "5gNG4srnoPDCJTTovtF3yLL3f3qUQvg2azueiEpVAJ6tjkPAFhoWYFuXAuym6kwzUYvxTpaeUrV3tWantQythgZT",
  "key23": "41GnoxcxGASV2LWAz2NStLeBGYb9kKDssgupgDj78KQgguXGoJNiJG15CbHYsNLuWBypSjm42X6zawLMT6ptMqTD",
  "key24": "2VYTkALwjK4D6o1tGKqdAF8VFxLSBwccnYPRLt8RkC2Q4Adx9EMHtmRCtUZqFigfvYGczrqdHSMaV2yFq4FqMrSX",
  "key25": "53bGiWr43Tsb6a3oS8vqcFrCS8WJbAAvWSRRStdrmHusVWid51DuKW4yLdGY1MvVwF33e2VBVpH8uGHUExN7bPYM",
  "key26": "3kF4ptA4WEVmiKC86C5n8hSNsrFwVYeiQcvCADYaFPoQ4jV69ntd1BHHSyMfNyiEsgqnmygFWdf7W7wtyJS6Hd5Z"
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
