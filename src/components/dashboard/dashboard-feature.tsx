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
    "4Dc8MY2ZffVYiv1R4er6vgL2gnrgiogyxkMvPxuRMTd5Jxbp3mhJrwN2QT3gFGgGfXYso29CNoBT4PxjobDwkhda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6YviYfX3z7BcXJMm52mWvCNer1srdHCtYoutgZqZiGCmPoMSS1c9gCYr99Y54pUxzf3rBeLoveEifiE7eKAtsro",
  "key1": "fR5otnFwPAh79tZbB2bmCx8JexoFY5K4oyQHqe3NtXiYRVH78WzkskASLYFCN8kZR1YCRbMfktyTRMfjk3w1P4i",
  "key2": "5khoaeTi4iWwztjeacDkgNLnhCRGWN4SPdzyRrv94vARbkZV5KojgfETtRLx3re4M9fqyCNFkMM6FjyyCL6TJfUg",
  "key3": "3qQaT1k4rekcKXh6yv5DcM7CZHSPQ8WkJhDjE32ntL5ADcAmNbZkJNuyxw44caPMxzA7MDD2rfm53ZycmctYKW86",
  "key4": "3HRgNN17btoMyNuceBqa1zob2qpZ6MwLLqtBjnWFB91aWHgv5ynnQvqyPxEnVWsj2ieSDwvj6cXSxCNumebNqkEb",
  "key5": "4fc1ryPLFW2d6QJuwx3jgBS8hrgViVNf2ihZ1j1pc1FeBiTdDeuUjANv3LAyaqxaKW7hyvzjT1V6VM3hpBjpncUW",
  "key6": "5thmoq5KNJGzCAbicTCdxRPcVdbAFcia9ML1R9xq3hmCbkSRW1ifKGRLdyRzGALa1ZeRBpTjEp9MftUxzafYYHZM",
  "key7": "3gDAmn3kALeYhgzXQkTKY3LoydAsj45oSbv9G5cZkgUEKPQb1zhcmp1wVhomC9Aid6zwA7bk6L4uRxw5f4q5UYGS",
  "key8": "5kzdst42KjuVC6ASvaq6f9grouwKowFbtGZGYQ9j5TW9sEUpTGxgftpc4Fs2QmngekJr1Qv5fkE955gLgEx1DHi7",
  "key9": "DYgsLumUxvuxnHHJMPqUhkV3a57Jb1TxfSfdWPuojWRHE2fo32FZL6Y3VUg7J2xxmFEpJx6QdaQh5v9Uzif8oNB",
  "key10": "4uCBv4VugqahQMQ2yP9cCcMireAEnqPe4LitmN2vqfS4hSazCJKWb4GR5RpUFYvpH9dfo4EvqkureaNjsrBVwm8R",
  "key11": "2w9XJiudhQdm8vio5Sc7NPvjDCCWLRz1TgtFPttBo4uzzM3n8zvYFRVMV3qwnT2VvHcUS6KAb6mFtVQrS6eidGA7",
  "key12": "5RTAsVKq83aZDW4y12j3wXHUdw7YFcjU9i8AAdoLTbgik9CKtL5LGcrQrGk3HAepuwGAnhhRo2Dq7oCBX9thGcMQ",
  "key13": "3tdaohZVCF5kZcZWDDDjDKXiaeWgFr2jQmGDdqPCvntAyfrcNeri1GPvQQ2wpt3haeeewdptmzZtJm5XFRUooYVV",
  "key14": "2KzRZjV4i57goghpJzbw9xRnzkVcPpBuVJUPsQSQfzXQp5rvNJqfGHFaZKsZj7kuBqqE6LJ1hoWrtg2qYh39Y92m",
  "key15": "3QVv3KhBDa7TbYhBCLuaCAGYDCARDQmFNqzVyJtsfovnPDarZwruNpJcFA3wMRYeDETh8bzaBeodmRC5NkszvbJg",
  "key16": "3uVnoNoaTZWUduR45LZmcTQCgbatYieTUjRnYEuxF8BrRiaYi4SFjst7GM5gMG5tECc4XX6tkJ2vATCfefVhY7yT",
  "key17": "5kN1jYodKsF1T35Raqp7QHCkWm2wyQ7V4j4J8fU4zoySnsfvxZQcNK2Pataj36XgpYVcpqh6Wg1HXrYrASWhxAsg",
  "key18": "3Hk4wSrksCbUaUkviUVukQ9131aZsLytX8Npw5nesVbrNK5wHiu3QXavnd8RACTbas91yccxy6E9TfBwdvNuKbQa",
  "key19": "2imvuWUqkoXQAFkjXFi4znVpqhZUnEhmg6nFChAzezkqfJqUqaNA33iwPD3QSRsenKFHGivYkNRyMMxRJojfC2MH",
  "key20": "2GQHevsVgJXuBaXWiTicYQZmW2D5P1pcAgw3qEC58K4ReUqbfAgF4vrqGtTQwJPjwVxA1frznZL66bQvrSbvwgai",
  "key21": "4yyFtQqfLK3mJTRYCPX4eGeKnypS6xKrY9P1WDpYLbRRXvawYRtF7qrfT75e74nZDZFxYut5BE9Q8PYJbFePXQWZ",
  "key22": "477tfSMGhKfMrrMiQ99FD35qxrnRyMiJAyTg3osk6F1ieNh7bAeUnxyehDnzoxoEwJ3BVjQ8BerME6dWbtHc7Gk7",
  "key23": "2vKtTHZ12JKCbWG6PLRbFX451UPPYrUDgcKYrLUz2h67CPPiBHLFiV49cksvv6H9jCmaJk9Zc2TSCHaE39iJesCL",
  "key24": "59kjMza4veyKAfMQ2WJRq31sps5c76HRyBkrrHGQmuWsHKQ45mv7xHvEw7Pd21vPVKv1BqqM5VmCFyzE9kGp4WSi",
  "key25": "BgzPQvzMrTUDjidtp1frJZNxctvMkeHAosdAnBJcw2vNkibNiWqjBr8U6NmnL1xis3tMn4Mr5r2yteYkNksAgCh",
  "key26": "64CwoVEitg3DnLGngXUEyUUm5ri7Fg6kR6UzNaEpFuAPnjFZ3NYspT9EdTmZfkH7v1nGittc9SnLjwqRmK2EHCAt",
  "key27": "4hjsFiR5zaxX3mAG9wSKCoptbfhNQk2d5rDcbYJWhPn2NxG22jWx7466UYUV4D8Kt3beoVADvyXvgQAxYLqAxwBj"
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
