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
    "31GPSy6yAgxzjuTXYFCcA7H2NErZC3jJjxhSPKzBrzSSUGMenxFAmVo8oE7BFGaZifhE6sjwekPt2VRemQyLqFN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CAMg4pc7pG4YwT5yRbdiA3eZ1tZDBu4qp9kfj2zSPYVESXga18eadJFpszdFdRgbSttAGg2LUxw92V3AVZQLkwZ",
  "key1": "5JEuW13axfFAfZnhMNXTxHVW5eUT4SDMVnvYbXEsUaTMxDYx8Y6iM65MDuqhufG37ScHfg9fCWDZZGYe1jaWwJyx",
  "key2": "5RJmmAe46Fqy8gVbMkB3VX1X7uXyU2TYCmK56tYFMA96s1QgfDXvjfeFGVckj2HgLzkUDaXn7m8KEF3ZvWWY1A1x",
  "key3": "4875k6C5LWzZg6RJsN96gmeyJ3T286tiQBdj5g8uyQPwhzFEQKgwcLcrs9aDAQDMmNRkDASx9gXD8HU86umGYJTh",
  "key4": "5gBn8qF4nKJRX1HhjoDsspNEXuqw6jti3Ji5Ax7LDzQPaRkE42RDATgQSbdqwyNjFDhHNBmUEJ5xHPYDu8jUcbSM",
  "key5": "dcZp5zAb3huxouPDGMzm6FLNHqZnDvxZVXisd2wBrqf81Gscyk71uJ6W9UFW3ryiWR3c33HM5yAteKLi6EZjpRA",
  "key6": "3iMarvuJYv5Br2ELxg44qMHK1degm5M6UVZXRhtUM4ewTWPS4UDUMQXk6vtSavps2Veb1jWX8bv8zG6QAkpniSLj",
  "key7": "5nnuMqrbc1zPxmNMQcz5mWcFne341H17nAjQwpSUu7KzrTGiYnbjzDMzMzYBXpYSaoM4zeviQ6qVtNzbaZZbKL5K",
  "key8": "LUg5YGrSPHwLwrweLXtgibtFMTNVYHw6rtgeSEUfX9pPyD5z7ANivxNSACcmGaZ6bkPdKRYmrtfRVCnt9pp2fcX",
  "key9": "jTirPwDE6SWz7fexzUyy2b1VJEjb4KwMgWV6E8HWLWtxUYEZmVm12eNdrfnfTKZe2qXMpfra9H85u2zZhQ5DpSa",
  "key10": "5TyK2cGxWXoayrkEL7eLgdSn9tycyu8Rk63oVghmGcJv9fQah2kpATFj6pzzX9D6QaMCVuMETbj6PEBhL4ECvYyT",
  "key11": "i98Xn7tKgYayFX929V9UrMeJ1xVuRp7jqvawnFj4WoW7odzbpG5dhC8hU5VsqaTXiowG7SoaRhD6gD4ufcPpQ2y",
  "key12": "3ZQcDnVM3qBAy6c61rQs2fsXSq32cErrfFkSLAo1suz1ZFW7uBb2jQ2uJfC2h7EaNPwqKrz3gJJU1J9pbnVZaWD2",
  "key13": "4Xy6kDpn3KgGxWHhobWL4t2TuXuR6mqQrDs4YBL2AYFbcmL9kdyPLG3w3FSMDsnvvcFTurzfQavHvv72XFC49hFg",
  "key14": "3y4AwFgpKNL1LxeimQuTL4Q7K8ZRxa8LQCfoio56uZ5ht3zg5DS14LbjLagYcM8EG36nCPXQCQrxBJEcn4JANHzP",
  "key15": "215bvmzJFoFuBFwc2c71DhPCLQxQRydJNSyhYBgNr8VqUwxAbM9Wwj1MxsV3wqcdKqeznyPW3frseScyfwFgESvP",
  "key16": "Vm6DRBcCoBXELedSkXcrsa6fjkuYfqH3XoJMAE4CK9tB55MBp2bcxtbzy9jVpnfkQUbipwwSJ1HQJBcTaZhi19U",
  "key17": "5LPx1PNFKu8ev4BqJUa397yceovqTAx9ZkxV2u2cv6kKh986yZLv7CvmbwQ6nXTZzNgxsp8vohWrFGJcPWhbbAEC",
  "key18": "5SCYyZ15kHZAirHikydntjCbjEBPY4hm9NDZqfEPdhGaULKVCGUbCjh6pjZxuXUtEXwLd6Kj23Wf2NyEkmtvFrPW",
  "key19": "Q6PDNNSEZSrcsig6mkBtav9LkhgV5VufVmrm1a95AEogXgxwvPFdrFAn4Ls8G9FnK5znjryh9dnVpNqAnVSuGfG",
  "key20": "22C5sj8FXyyMpSD3Z48NdPiv8KqmdNaV3bWsfHpBYigzmQmjUxeaCZPiQikF1BdbWgV4tL64euzEPXXqApzCVFkV",
  "key21": "Sm73bQ6grAmL76UdsGF8h8zThFABsQrwjijwGzDZoiGJnWZZqw8hsbLRb7Xd7K41TLN6KWk2Jig32VVkEDbjetR",
  "key22": "2iANR6JHsCpCDBhC88RBbBy9H1udE7x9k28GfKtHMLSdPAG3PZrrLc5reCoGrqrvxQrXNu1RsyYomF4PGGYasVig",
  "key23": "3zwhtjqHdE1rgJKyKS4HjVQLRmzw2oTNrGW6S2VuSvszxxcoKfm7dKCDZsY3YG4PnbLvJdHiuviyGyhoRZnzQXw5",
  "key24": "GUd9MAcPCQBKCMxNQR6x73PiBFJS8yuHVsmAzNZG979b6LGQbieMbT18PqpBeiGjV6yCSCdGyfyL3HxdcLbJGaZ",
  "key25": "2edNx1yNac7sA5KWc2DDfh5X5HJ7A4WJ4VzVJgbAsbST4pj5QQTBQHRXVW32NVw6Qd8PQx3V6sxFU2K7sQWEAqSY",
  "key26": "3GvMdiZKPWHHJikDQNGZnLA5oWwDaAV6wemkxNsZ49A8unxNwUVjrLkrC1qMgsxA9Wqr9M2zLsuMapnM9AyBqAV5",
  "key27": "4aSmXt4FzCsvVpEczXzYZmctJJbM8TWkSbcQBVf1ijeKNH1GKE55qGCJsxtrbEprbofzMg4kynsNwdVgtsgiGpxR"
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
