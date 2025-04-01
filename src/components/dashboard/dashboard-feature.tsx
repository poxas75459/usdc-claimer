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
    "3bLZccNjc8V3oUo5VPPb1VDQc79XN4TERJQP4vcJ9yCx699RRKm2X8bMk72zo8hqdE3ZAHojybwHwyhQJuVsjHBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VTKdKdhXE9iiYB1tJZh4qi68XHVTWX81Bc11A25jBUTwbJiyTW3hHPVtWj6qrbas2PQ1jhHjcmSeWBGRq2phWC",
  "key1": "5TExeFg8XGW5aUCrsFi8cMrpk34JfXzLH2YUedsbGQqVxfFeGhQPbeoKnTbQRN3iMVNdgDDXpJsKDgDcGFfMCFAp",
  "key2": "2o4cZz1qQNaYQNdXxekhD24FeFqhbkznWopLReGXgnyf8RuZGadk8ebwqqz6Dy3ALR4knAkvYJHEb5pW8n1tUue9",
  "key3": "4BbG9a5FDrDid9DnAiWcJgcTzaYWv9XgwCGWMMCaEF36XmE661YoPo5SAEKvKKym99bjpPQeTDWQdbRchZ7yAwFa",
  "key4": "5XJZjK6cL9LaskTwzdbfqpxPz9oJyLfsFFDiGjD6eHZfveGjKhA6SXdYtvkerodqyTvw3HcwRVGY1asPVBmHM8q2",
  "key5": "5ktHTqQfKwqvHxzDhV5EmKVJps7eFC7WVRYAaNuEjvVJk6gQwchDxzv84xxXtmsqaY47jHdAU7kUxUfMyYvvdZsU",
  "key6": "3qEMbTGwzXFUeEkF1hA6pSngK3WcFEqBERttstSqwvJeKYyZm6DLeZ3qNGJQpRAvKqbsRcYbf9wJboDo2UFhEk2T",
  "key7": "44aLzCY5Yn7zAK6ZyGo9JHeWszALCwaPWjKUCE6Br2n9t2PPT42cfYxS7w8r9Z4XCwF4yTKkxdZJBEqJqohDKFdn",
  "key8": "43x8VxCLoJ8FKkPNpbwmroUQtADzY4hRYag6ecpGaB1frYe3GYTwvr5LzMJHQ423Tmyq2Yzu1Ywzbo6vSDdMrqTL",
  "key9": "2gAqW3R6V3dpvXKB1gcramHhabb3JamvohDK9Dg3kcL1BC7G7eebP9kcTk8K2XKvK8Dn1dgRyNywqCWT6LrSuXDB",
  "key10": "3DwVqetnv6DZ8nUvvDnSYPNHzAYvXCnwAjYaJbjtquF5iM5nhdvkMtaZFq4UzYQNLXnHU9VnVLBx3TK9ttgfHRo8",
  "key11": "4ofbTmk3wB3aBqCZRsZBCjYAUPZbybLmPBSYfUzDrJn8xwrCiueq4NW3w4qdp6t7k2nCRDXLVL7htM72YgWUk877",
  "key12": "3mx3q5bRizkaH6r98kDv1XyWSzF3qD5F5u518oGAsnEQyny74imqG7oYjwfBfJjGhA27yCTR8jZJ4SYFYRH4bVnV",
  "key13": "4VRELXGT3Y6KUJ2jKECfS1oCVNhin9GRuYuPgdZPwWaY5xiQxTtkC9XKLhne8SWhL4SxbooEVKCg4sGbW5XSBmMv",
  "key14": "4FqAMZYts7Z5froYWBo5TbdH2T89wchs33mRAYzim5LV15TWCFDo6Y6YzT3fJStEhh1HnrmgAdb5NpaF9PeepoqR",
  "key15": "656Dn3TP28y2wJSwVK5FyDYX4x1BxhjXviMupVKYMa15vUpgHQSBxnaXbTP3FzpdbzaNp8Y4xpYV1PtqnEpAw6sd",
  "key16": "uojnK5RzvCrA5ok4fGKyLcrr6AN2QviktwkMHCpYbshpHfzVuQHXs3oC3kDe3mSrJqK7fzQ5pZDhPAYicNL5PTx",
  "key17": "4H4Dm1b8BAU4TDUC1obSQgrN6DUFyBj5eWtC4pKubVGwJ3aVEXfY1Ewnq57hdDfbNZoymqAbRFihJ8DXJrRaorH9",
  "key18": "4qF5cZZmiLVKzczop6iLzJauNRvZiGxSj6jTREpZ59aYMR1nPncMZy6iz9eKmmv3vdgj9rRJUygsTxv8NVUGjE8M",
  "key19": "53YfNPbVupV4gqRePnPnvYsHJkTJszNm9dLgr6kFk7gwTidioAf9feuHtaCnABeWzrUvQwf9Qpyg94PzuvLCy2i9",
  "key20": "WFHcpoVnSgyjvtXmR6Qen6yakqtqd15opkYvGjfMr1muNqrmjEitpj66n9KBiybrtzQbxxxF11zFBmVAsFZhSEf",
  "key21": "4eVjxinLmbr4rLyR8dzEmXWw7sKHWgYWeG5FbnXSTeg9ZGmsFTWHuiU36wxrUXjEQeo7pE9Lev12cSUwQkLzhM5E",
  "key22": "274Bw85uVufyYHjSLUuTpgmPxU6bwFwHumQHVvpErB7U1ZWEz2aXEYtcTNJuEU3ygbqqachydkbbaQnMm8xiqx4j",
  "key23": "qoF3bgjMVLc4piodYBaKRZrFsAC3EbuB14zHzp6fH7gY5nRRGiH4LnGYPFwjHJUBioFEEV6CjaXowCLjASN2qNw",
  "key24": "2mCgzXconCFpya74S5EWmYe73SFsEdd8ssSjTzs7zJRYTW6e4U8MDWHXhJ4HR9FZGrQHvzfQvfURe37qMffC1RG8",
  "key25": "2B4gh2WhEzCbZPCpv8Gk9sHyikWUw9BEV9zqidv95YtHU7dG36xbGNJ72tMR2G7B2u76MqvLcdZu1c92GsN9SLvJ",
  "key26": "9uckMaMe2EGnPokSpnb4rqFK5XwSHLbTbSnAvGBcmi4hTziZQ3xudoaqNFsyAxpdkQBEjna8YnfXu1zM9KbKntf",
  "key27": "2cVHTVgdGY7y5iockAAWigKdoVcg45hnQs3LZC24Udc4wktbD6eaEdSJ7tmrSb2zfqx2MsHzkV8UB28BYYk98JQv",
  "key28": "5B9iq6oWJY1SS7eA6xE6e5h1KYFzL7ujk6kwSaYXkXA9ByuVAKNQFbvFMPEisKa6Hnx9ZKCkzmENzNHFwSHjRMGx",
  "key29": "2VDb6yAMp1iGLfvnJkN4NWtVinGqj73gRpcXAAHPppwNYyyZLymCzcF8vieKNNYbgKYChXmk3zoeBKYhuV3DNFvU",
  "key30": "4Fkdh2vnuNZM7jtuQAmPhrDZY7Kxz96e6qAkEWHUDdwvbaun4pCD5hmJiC1RRUd6pU483SdTWPcGG5ppc66J7h4t",
  "key31": "35ZcAD679b1utgwvxrWp3TH8e53NxvMTttmmr6V7Y4LUtzcyBVYoZJURFKyt9k59YoR4b3PygwD4FDUtKXBpebXc",
  "key32": "2HWq7B7nu81pMUpmqbevSadYqaFnnDPedfzDVqe77241WmVGRcb8pjj2u5Jzgp7fMKuSF1XTC8s8WBwHvJ6AFENz",
  "key33": "5iEEQ9fbvTijGERS2HttGVSGmrrodGwTNSBzGJa2zMT78hN6nshSB5vzPZhkAwbjNeuppFXEt9vQywNASU6VQNbm",
  "key34": "a5G2cY9LfZh9ZwBNdR4JRndoLyBDxkaukDruHiV5uJAzQVNibKPaW3CgkLMrFXU53YZ1N5vfMdx3VRiNeVZyxg7",
  "key35": "SM7r3hDCt29LC9TDAJzNd4e1t3ePyzmFnP6yzUPusQLSFLqsFCNKFgXzhCe1YkEBRDWFwwvpnPP2y2cMEV9j6xU",
  "key36": "2PSLKPXGCxdyFxjeTWyQQToxw2W2bc6t9XyjK7596ZhVgXHEWHSMXWx8JvQT8GDob37FAC39FoVQ9wozJyxkG6Nh",
  "key37": "5yf7yZV2QkKDCw4taSvm6C8Yxb9vdN6SxCJ9bQhoJocMhhKLgMvD2Mj1h6eTUjSW9JHwdNVkmYjy17ScAUHjdYDU",
  "key38": "4iBykkAEx6bHD87gV6AYux8TzqW1jxwyskD2tSe9ASoUxS6zsYfR9HgNFruy1yXUVTLKxN7Fuu6yhuSE1NVPPWbR",
  "key39": "d2batH41VLw8ojsnMvmzYLU7dQnqEDYygw9Xrp9tJnq7vagkkQGYLmYMximfEq63obNiuk4jf3eXRbBKcDX9HVp",
  "key40": "5afsL3DDJjoVJjK6Q3vMDhA6EA1Shz1y6g5cEg3afJmKtkKTv2P2f2x8h6A5CGfNwN9RQriDapB9fhZBJrdpvDRh",
  "key41": "5iQ7TThUrNe5xiVMwbFxjfxD5XFwqvQAGuWq5zQd5WNxDaZFzjnT94Rcp2f8BUDr8dph3cvZyqBRAsN5tjy9gCza"
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
