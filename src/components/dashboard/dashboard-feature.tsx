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
    "wH2R9ggPRtxfnNCYXSYaxjWCBDgQwar7t6bC3AWdm6dGn1fJ7oRsFKgtCB134e5jqgbaTWzBSzeo3iGcJiT3g3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YMTUHP7Xas8oVTkYdsWCcpPLXhCq2moYEcLReLSAhvCvS8iJEM7DeKEgxVfvz9fZXhRVMNiXL1Pumr9fPrrsEf",
  "key1": "3YzEJ6XvEEQ7HAL1EqKePgmnBtYcjYRxwdNMKuckg62RXb4cmER4wpKpcU7fHxABvU18pd8KtKVuqQ2eJkdBfK8Z",
  "key2": "5XZYdL9qKNAKL2sYbbJUjFsJuJEBKdQGGZkGt9BzQ8tKSFw2sz8SuZEwYwEYuQt7eV4RgCyf9ischeLXfecowzg6",
  "key3": "4uTEHkwkXZwf2TpSRivNHmai6m1BgXMA5UWbodg6p5QgWTrnrrvrqNZjQwipzaaqpdEhQy9RxSnjnu5CmN5po67j",
  "key4": "3QiPbgjX32tNNtGaqpJp3pMWzmjrysbYoSHh4yaCxMwYwvCX8CRFiuPkZNpm3Uv6qnLyv6bMV5sKNX6PCxg5sFEU",
  "key5": "Mb8gVpp5z5DREQrxZWqSRddZMSc8zKvbkoBEAGkveGfkSxaWqshho87wmkuxYqDMgXKerVtssmn4CcvUdn11FAL",
  "key6": "3FncJHn7bDrm1hUBnDSazaD4qFxe6dCvUX6TjdF9zLJMBmwKNKx8yUD9m4Siu6ScL3LJ8vyJUwpc7aTYLJFbJzvv",
  "key7": "3maT66ZNHbshzd2QZhUBerwagyw45y3QAEtPaQNwRb3xvmErKskUbUZhmt8reA82rjKiXQpKS9ncHR9BcFLpMbKo",
  "key8": "3rPeZqGNJaeFdsJQ8cYW2fvofTmszhsc54GFEJbH1skWmbAL121LzsJgTjHbXMcyjKMyT3kzyDpjKRNyV7KnnXB3",
  "key9": "21SqySq8Mdhhq5DU49jPo2QiDsXiqEumXrpoRGJfkrMBFmEEAjsnm3WGNaCkfLB8mH4HkrVePWCfai33BEaJiVAp",
  "key10": "4Yyy5rr4hY1GVBiY4HkUSoDwht35Ju6Ny3LRg3LxkpmoM93UwzygqfXmG6Z2tVpxQv6zJgWZY3jG3QxcbFvzTz2",
  "key11": "57s8d2p9wvybx2VJWHgAJ8gM3GY6QPRQX6HqUZfty5fMiJLkvmapKaQDy7pRnB7y2ADx2zzemsbgdnNweyKedWFB",
  "key12": "5Z8wCbL9cVRKXPgwNaoadzcNgD9chGy969mYXpFFcW7mR85H1Msgs5j2ZMYr8mo2XP3v2h1cbkdyUwbA7FnRwwb6",
  "key13": "4Z1R8g1xoUsEfG4xai8CHsLWGDj4AM9FA7rRUb2SUP3QzN8Jmd3288JoeB6BWntexvHGiVJsWmkjVzHat1Wu4EA4",
  "key14": "4sJgfNLUrPQT7HaDWyLTQpgMAHfhnoyee8L4EBcAGbwgkFbwopSqMazMTV8Z1Qp4ucCUGZRc1kQig1kRmwbwNdEC",
  "key15": "5cHPk3QBzrMzf4zPoa9HaHoQzbfMRyHa7ePVkgEnEYjYqBZtQpHsqV8r7mVZCA46vtWaETFUDfeyAYDSeiketwgU",
  "key16": "33rttmi5XgBdKsaxqXK5iquRgEtkoAZE9SUHNS6PddcKyGaZXQHxSJdr5ijbDByVYhKaHpLNiVu2TvowJ938Rx5r",
  "key17": "5curTAgdfyx55SrMH81ARhz2jDcLtgZRaYV6ph7GozMbHBfFcC1CGf2xNcuPeoFYxFvKViQGrHmHUXtnbNvkGx1D",
  "key18": "hK5un5W6DmPNiShdcSyHQYGNVLN7FtF1fdg2bpJzAKtoxGAiHJ9JJubkRnqkmVAmPQyNdQhNTjPZeA8usdYuK7r",
  "key19": "pqJ56sD4dtqveYsSr5sDLbWzGyxRbTn54tTEF4sUsmqC9zQwGe34d9BpUhfe4SoTi4ezbcQo4VVZDYQBiKR78BB",
  "key20": "4kzCKf1M2zqLqDxSiPisFnoXNKFqt7MYUyQ1w35dADCRFtVvzxsynDTFzK5UCavnBYWxrYkZcrhSSjkGtcKVFmPq",
  "key21": "ksrBdH1uhuuznRuuZbsYiX1FJspmmS9uRbuQz3nmcvDSRZSSRDnP14vA62J49YSjBAEbFG9fPrbuarVAGB2aZx6",
  "key22": "5QjZzLuavwRRqKkWwdaqUFhPQaMWivjDrRVojm4SDLKDRWRpFkMwea5xBP9rtQTpHHv6BAbBjyMWUAwb9iiC85oB",
  "key23": "TPrYGN2pZTTQYKYbAhAo9qLJnLSsrqaroUY6Weq9Cfw29Sk69Siwrkk8WgEScTgZkwTdGF7EMYM2oZs2sAasBdo",
  "key24": "2GZC4ehEdLRHysojeg1KLCapq3iccf9Gnhgq7rzgJok2QMTpfWAMoLtMwG31fQh2wUm44VybNDGrNDL6UG4fYUWP"
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
