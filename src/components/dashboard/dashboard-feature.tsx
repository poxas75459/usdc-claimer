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
    "48fiqN4mApVXuEvrAHLF8g3McDYdZronfukYE9NPW3NCS2ZTCz9755MZNvp2NRTPjtD8Rs8NzmPHMB7MWRyJeDfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apdFs8bmDaj5zR6ebCtFjKrn9nK8vCi7eVLVFNRKSoNNyTcU9dtKjU8kfZSxxeKKkWmWMuSjVdh63wNiqLWnTpm",
  "key1": "abKNXj4AnUEB34y6v7CJMu2ZSLyZkrJCpqT5LX5fCn7DYnrrMFSbyUrG82gvv8nm3tgYWkTiDJ1udsTA6xHnYwn",
  "key2": "G8nLfvJDkGFAdH8jjVSryPoYA6S7jGSwMWwDNHvomcH4xmZeGLg44fJqFGQQADePVTzTbMCJPM3SrXy3ZhoDzJU",
  "key3": "23y8Hc15ypYqfyyvGqmkJtFzzG8bjwuhh4r7nEo2CMHXWcTaYR39MVaZf5yWEBoR124Hj7yedG8s2wyZSZTmmXLu",
  "key4": "5miL5RxvpkdR2xtxa7K8ocwswiWoj38NtzpDDBTvauouikBzs3jdz5EaLUNRN5o7KK5J7EDP6CaeqZUC5RSYxaKM",
  "key5": "bReAd559h9bzu7tsxK9KXWaY81xWcaAVjxyzmWTAMgszBVzqrK7cs1LTpp9fUWamUwAZXMLDLSRYiPLoY5t7PPM",
  "key6": "2DwKsz4WajquLBRiypUUga7w6p9HF7zxzPXdsgBEGstNX8bPPyRkxQLZj59JYpTyx7afnBZdHNkFRz79ZrKiTTjg",
  "key7": "2TLVLLpLVn83RaCT3EVENrbZdpD4PEkmatyfSdDrEDf6m3Yt6QHuruiyp2suePuRYQ285RJ356un73f7P3TJbYP5",
  "key8": "5DrizVSkzKt8aDs9ykFWySdS3mVvmXDFZCrJSvy9ids1vK59k2CTL9i3t72nSivtR9SDr5GWPn65NeJRh53JzWmG",
  "key9": "3kC86pxUibJejxQPEsD2NREUAHb2Tdpng56yejzAZifRbPvae3RoYAhCevhEd6DqzjVuFxkxX82hYtixGL8RpjQe",
  "key10": "461LLwa5DZ8oM9xqE11uymTcnh4gzs8RUyHqEfqYu8KGvMjUv8UA8FZPBprXjkZVuA74vqNn3EsP19WRMckjmQrt",
  "key11": "dkPteebZdsCd2ebXEA8PpxxFKuvmJDbYCF7AQPdmLvmdErkiy1ueveiMnLbYi7YUS8Y2szs2tV51fcAwtk6x64y",
  "key12": "3kp6Enw1PhRdqT793rHPeffF4f68TxvYRWSwJfqmKwD4uY4FmFKrxUydg39pmQJgztQgTnDT2H83H5GtWpVTJMNk",
  "key13": "2rJe2HsvbFYBR2BsRt5Y8P4JPkhRzaRwbURPRg7oeHTK5yjnZVaJD62XikmpyNEFkbufRLZxCN5hSiqfxu5FnhDx",
  "key14": "5oi9TdwKjvoNNGN8ej1B2kyDzkdLG69S8d9XXRgc2G7dMYpoNqXGNKZAQh8Zh4KDfpxgaZjstvKZFem5jnH5jJha",
  "key15": "3onZCrwAHk7zP5wWqiYc9tqPQK5PCd3yaTmDnDYVFZkeW6FiF3wnA2wp2NzqXETt6yGeVDPLuzvUT9nMF6xWTue4",
  "key16": "YXGEfdGKeDGskMQvNjaH7iZbkKvjC7oesYR9nNmsMyLidbDrt8XLeS2J2ScNZUfTAoAuDhDav1h3kUTdPtbwpTi",
  "key17": "3F7RR3gg2xmfSd8rCr7YrUcxjrV8s19santxUHr1RLSpYGWJvHva5oBbDjKwSXLxGXZFRiWniesuW2u5QtML9VuL",
  "key18": "3QPuqUo16tar3xfprYjaZHa9SM66riGcUKbiCkEh2EzM7iKttS9KGRHxckS64jNRL8yx899sqCECYUJ1ASUMTFpH",
  "key19": "5UcYrmLPjn6JE2d6neoBrTAb8tMYNtnbdSt17iW62DtwgdB9in5VD5gSkFkAJzxGWYunyNFYry2kAgSMgRy1sWNS",
  "key20": "33iacU7Pj4CCdsK8KpqDUpLnki4gKKSA1WCTeBm6Z97h6vCFux6djG1BCGDMVk32psartHoYWNh29wfw3kFXwxro",
  "key21": "3kSQmEeUz1kZGR8ESDLs1HCF9QACJh2xhDfnyyAQZEw8PqZSsV93gR5LHw79aNpM4Pn9KhufeK9ALmneLKS1dR1N",
  "key22": "jwz6oJ3GqhrmR8XmvXWJAACHgF6dADeuRuP1Lt8scNkpz1WZ3J5h2Xe933zWsGdkaLJ1GHEBv8nWSMtofwf3cXf",
  "key23": "7B2GDtsW3r4BT2o1BQKFNXCyxi4vEXze9PAvfJjpfyZBV7jpE9AL3GJJjyw9YU94CUmp1kuGaG8LLmy9NRnVY1u",
  "key24": "5rsSCiv4xbimRtZd2UeCogpKDUfBxkAL7DehVV9QUmsCChJfuGuDUwAFLdgYi3faJ1Z6ztmZZkB6KfD6zCyZwqRi",
  "key25": "26WxiukvGsiGvD7RNU6xoMmattxn8FX7Wx4Y1Cw5nf1QZuQEmGR3supo4X95EUXDZeqNzATdqUbb4zDwA3XqjvAF",
  "key26": "6FXfvd2TFzyNxrixkt6cqeffo3MxxCptKEoyGS1urHmb6fyXcohBuJhoifA6mvzA41nAfBmNFsLK7pK5RmBkDRG"
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
