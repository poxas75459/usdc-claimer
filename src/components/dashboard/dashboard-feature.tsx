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
    "5krT6AUPnaQcvj9Lzeg3482F3nhfSr38i4yJHN2wUbz22eEmAGiKKfoSbaYYarifmfvkLrTZy4hnauWSkD4SSYDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32e896oR4U11NWBQioymDcD2NMmiTnUT6kbQet7LqisFhwwtCPgwHLNtpk5PHW4HEhe7LZYa12vbPotrDPpLAWNT",
  "key1": "5eoDt5pUy4NNMXwwEnKHtFs4aasUkzr1Ax4XHgZXunJiJGNKc5Xmq5pzrQFnFQRpgHGxcutvPwDYefcUHJNc6FGs",
  "key2": "KuU2AxK1CV7RfiBB3SioFRSLgYpz7J2RxHg7sGMqiAExbXAKBYm57ggQNxcqazd1BtqZSDB6C2Bd4bQxnuEw7WB",
  "key3": "551i2E7hsAmJ2y5JN6aamCw4tft3fvJ3wyGY521RnoRfCtwQonawi8y6mGGC2TTE9DnhTi6GaZM1jGCuQ6RpTvUK",
  "key4": "3uCJAHbNDLYD75SYJyzfLzeie4wDe5Rjkbey7WjuL4CyJzVG4rf6DGf1cdF6J6dx6wGDcZJcetL5NWWBjXPpAVFU",
  "key5": "PHHMCNxpwM61Q8KgUkjQio4fyqn8b2Rb3a7h9DCimdd5sBu33ijPmjgDsxhvVLkpnoZGr3bygsrWd4DXxBHt4Fc",
  "key6": "4p9YNY9NpC7d8diHKSvm2r5G9dTGg7FaxaR7MFnQMinAg27cSjPcWt35SBHJdfpQczXmHrEEz8BAMaPvv5v4LzmM",
  "key7": "3WjSLJF8KMt74oEiUGmbMABgH4z77bfHTJtcbB69ikm1fQfu6rrzUkZsvDbqfiAhyE9v6C5npFxDgskdkzG2tVra",
  "key8": "NChF5QGUH5ice6eZDgthpMMpCUNvfLBGKvbEjtDgQt2iEyfyrmmDGbfbPeS3E6JXo3YNni3KqDuS21ftqGgMfXF",
  "key9": "2NhPcbFPqKtsKVQVxtK1yTK2WQy2XhBwhPPPrP2pPV3D6czknNCxy3ks54Zqc81fVa9mCMkXZ4kzTPPzLgs3HaUV",
  "key10": "58T3pftJvVdjvPbaMR9ZZdtZa713Ukb4Yjqd9FteoCRKyQj6U9PZ3XodDp1eUAWJJHt4rz6yuWpyswS6oX8CLYrF",
  "key11": "4cK31x9XrfBXWPCL8VoTYog2RsZTUCkgMSuYuJGBvyuBr8Q44oJcYqbW31mT6qLYwoCtx6TLU61mxwGyAESnXaEy",
  "key12": "55T89RYWhmQ1gtEfotH9T9LV1EsVkjz4AbhfEptjzvcvdww18sUSX2n4U4QAJRdAcjKmBgpwyyuhcQyVxLJGfnCw",
  "key13": "4dFVrHoT72S9nzUEAfo1TknqucyaMdkinVd5H3exDhmKoSpNi1s2UYz6yGt1JjaAXjGWDngqu3cbt5ggpUAXvXVf",
  "key14": "y8qzso4DJ6rTeiUpEjPz31mgZTbGRCStHF6X71o8PZ9VXcmzREazQfd4mxME46sqAK8W7XaoLQH7dh4bdi4W7Qa",
  "key15": "5J2vbyGbSmxEV83jYS5wG2Xy4Vz5cc5Tibp8c4TUgpD4tbD8t5Zgoa3vRM8wKG7w6Txumxfs31jZmsFkyVLpKWHi",
  "key16": "5cGfYgUUfyEqt2vUuCEhqmtsyAfojLSJiRLGFDBwTTcUeFeiwXCKwVBxTFNorWgEXdTC3kgzeka4Efyi3vYHJc8T",
  "key17": "54cKoSzUpNcNmGcvLmY8rnXWF3Nfq7q42CFH8HkD2zLUCZ2NWs8Fop8n8Fhn3FZaVTAcGEHfkVziwtkFmBp2DEAS",
  "key18": "3jVPahXU953DU78UFdEgVZ1nRS7VoAu9rbymzUv7BxS93yqsciLBmeKB1w51tH3jyvhuN3RyCcUYUp25WzzTixwg",
  "key19": "5U6dF2hsyYnxX3Qnvwxz3SQhLZUQWcbqgHigX7WmhqkaHxc2my4nTL7Qgn3yH9jHeGufRG7Czcvkx3qtEG8reQGv",
  "key20": "3TcDwP9oYcFFv66Gcfw9ZcepVkTqMbZtVCCYDQ2hdCH8vjw5xUC7uwtEKNvA8gQbY8fYv6sxj8CJrwwfSLRL8DH9",
  "key21": "35TG3yFjvxpbmWcRCqWk9kst2QTTnmJVsyDmQGrSo55Db4c1rfuMPPQnBu2rK1YfonV81zcydsrcUPyDh18mC3yh",
  "key22": "2VJaBZMHW9xpaTDQuPnJMhj6th1cWSkxQcKBWh5C796znVE4CDkT29HnihEJsrTyPaaxrhcRPj32tvnu281xUgZr",
  "key23": "cFqdK5mnTUbEakxs9B49bPZJVFz8fSmTxV6eB35BencseNsVdNUUf9AFPQTxKFUtCr4jeZBy78t3kHxntyHv5zv",
  "key24": "28a2p2LeuRBzxfUHbWzUq8PG8vKVZeQgKbSuq9ebcW7k26Dtyknay5Eg93ZC7A2JLFzHXeJD33pcw4GWentuA4Ec"
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
