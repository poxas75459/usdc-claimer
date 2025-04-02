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
    "2TRE2GfT6gsMe6jprPBwsK7UV6UaJYpU3XUdg8zFDyt4btzbVUhGei13zhBnHDZnYq69vRocXPeDDvzVTsyxvisD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7hYvUQ6EWUbFr8sjxLGgPeFK4kkGT8GhaffwMfdr5qorHUuwB8NsS9bVRjmHewMPmEnamzFgNJaTeonTmJgqqu",
  "key1": "5T3zZVxTUJ2vggB3pVLZUrFEF3ZPZf52nvbHrHYpfC2rFGSaxFpkMuZL3DhsLw8urfWJkmuqc96nEfEnMSD6YbwN",
  "key2": "5969UZj5d8is2pBAht2EeFQ8b32DKLUgP8LoLjnRSmaUkKrVDpPSGKsCiCHXCKoafx3uHcbBjMPANET4CZyncDtU",
  "key3": "5jVxkxucp8tPu3TwayViYy9QKBQepYMeNRuatDio4c35asLPiKVyChy2JejcsAv13u2Bi2qE4aB1uF6K6aEMPp1E",
  "key4": "2Jz1qm6N9jyoKhSuzpd8sLWo2n7bnPgbdBzexqQcSkmzDnPuDJjZoxb66yC1yUGdVRUGh9cGjDYdEr5DTtwDs9Kd",
  "key5": "2QyRKB54a9akFYodm2e1kkpm5z4ZSN3DKr64UusZi5xRVQREVfw97efiH3Xw4VgD2Yyf6tfFp6exNoxhwGNBW7iH",
  "key6": "p68UeqiKbV6gGqvzq4fBvEpR1xheUjvti1eRym72WH2tG6FDkTA4g6Dyrj65oj1H8tN3XPZYmNuDTuqz9E6Rp7r",
  "key7": "kqukZJo8tjeE4rB934Twn5FJqW5XmDKjHKVdwfCYhN9WbtnzXUeXt6hFPFyFtQvoZSihUWKhNWYLZJ9sF3ZbJen",
  "key8": "4E27KszCLHtd5ETPpTvX1wCMa9bqjefMYysc3Px5KN4gET9VnxbCGiu6vSMFTgKpyMrfNJ622HWoSGW3V2Yaf84a",
  "key9": "59rKrr9m3vnNpkjYg6dQfsMd6hk6EfH1GX5Pvvk51EZXxhknKZ6U4RdFRik4xysx1cFKjVhQM7uBLHD7JCvt3dqv",
  "key10": "2Wh5DU3emsDicubvYh3pU9BZCr5ALLdAY62SZWdra4u7Vz6EUyha8F3MACnKC3icW5vgxDPLoYe7JwD1DFEamHXE",
  "key11": "s7RUET48SLUAAiZVhLAexT6d5yGpPq4uAoPUHuMA31DTqnJ5tbTRZZbL79TLN2BAQYyEfVmbbp8UKQdRx2Hhj9C",
  "key12": "3FJyYG1rCaBK7wKVSZKp6fJQtfmYNMYiU8ymZja6HAeS1iUPmJ9opVBGTREHwnPBTsBeKQr2XpzmzQVSg1cWCDHf",
  "key13": "5yHPoBDW9fNhrvG4o7YQrzct2RuVZSPjeEQ8SiaQTQ4hNjXXmg8TzTaskvjediZxjH2mejtKDY337BbVsnR7tikY",
  "key14": "4M2m5fXC7mtL5vDMV7Fa94NF5Ym9Waa1SMHr6zVFakTYZ32w2t2EdLEWZHf8YvyfWSksUwzYs5gRD17xSvBZqvrx",
  "key15": "pvAPaoEwaGLqUT51vPcLKMEybKrDExbYd63kNDim13AhB3qekZCDTs4GDxD4ipPVzBG8C8foD27Y3MyKBar9LuP",
  "key16": "3QnRxdQgyfCEFSJeiBXDL2o69hAu2neMJBag7m2vUZttTVq7GinPhYMoLfdtmQRKyxWPqm2f6DtNEQbCJMidtieJ",
  "key17": "4EQ3usGeCGJ1sYm1Xm3KSJko1gzptFqaZeWkbMWvjCDGCSNTfnJEpJRNxrNZjLfiAjJdBEwPjGok5Ebj8eDKMhGB",
  "key18": "3fYrGGBoRrhTgejrkJVtw4GQSxvmjbbywz7gxrKMPQp2aKDcPAdhjbd2wKRZWX4y5PaxUd6MrDXGuZmhHsD2hHLB",
  "key19": "2qcYDyVoMWtiwmsaieDdk1vznL2kA5RweSzFUZ1w7WFxADwsrZhTxMCgc7J6BHYgbFsH6TmppMpZroXfzHoBESwx",
  "key20": "26TyN5fN5mNviF26ggPUhnq4mxgfFw3DJx8WUp8PaMr3LSLVngDwa8wx6qXCRkfCARmcYfKG1CkEbDqBcVXhJKcD",
  "key21": "hg6q5iGwYmeHhVV3Cs4ksujtBZn2hPkLs5zcNebYiARuQ3gJp59p6tMip2LRzSYMwThYUPXB141bYeSyTAiczGu",
  "key22": "M6kPTvtmGswELvGTj9NkSG2jYMgePZSan6v8ULhH3yHM4g77kPNB6E6EtYzvEwQNKRyfmqDEJa3apixQgPieWNg",
  "key23": "WVb5iYSgxC7PCZbQVJFDdfEcNMQCXWjYDYWobkdyPHd1gWeeRdwDJFiFid1gQdUhyig2KGvPBnXGXME6s8x6Bx2",
  "key24": "5zQuptMLw1aycNrU8FF5HWNz1t11sE2y5bedt4YLrd4dhNAkrXhxzPoMiEpvy1ESYowsYgijr4we6nZDYdDFW9c1"
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
