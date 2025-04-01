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
    "25y6JC4w7jB6dMKBrHSK1zvqfK9VNk6xTTWbjncEeBY7J84uWPP7vDc6Eiq9oZ68y389p8fMTJyVDekVKnGHSpcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmHGhqmdH5Z1oRgehBEFF1KXicsjwVFL248TqHeUkgtBoiZbvN6DKaFd4KrA8WXDDvuS8s3cp5qC7DSLK8oPEQG",
  "key1": "fxbvLGs4iDqZbv4R4cPRq5a2qjw74po8LRqx3yM9AjaUpRsKmjcUSzriQKc3MitPL1wvxmo1HamiLs4fFdciTdN",
  "key2": "zR5iNKc8uaJyrQuD8AFVLa8VD5XX6ySEyGf8GErZDfSqiPqjsTiKkudYXtyx3ZHUHqTxRrMQdP8hoGaDXi8fkMz",
  "key3": "4cQML3MB9rmdH7m9BEp1FWVkiPJg9ArMVDy4KdJ3GDkizVZFQ4uWx1CZxgDsP4NSxfikPmkJ52aFq2s3rZJmfV3s",
  "key4": "4uhr2jGLhTPGP8x2zLSPxpYXRC773P8V4cVJcU9ofSH3s2NGMgK4hgYYCmKXSJ4K9xBJ919CSVV6pPP1YzNnXbDW",
  "key5": "4wmQcqsFEgF1447YeeUVmNL342canNiKmbRyjwY5Df4NA2qTBt5t988sGJjS48rfc7WWu8moUMmKKgymKVh8qX6Y",
  "key6": "4sVHhYv9mYyQdgJKcrjdpmS8uj2cTzHzT9ggetQZHx2NjDYAadayQmY4PE1eFdTAkrVbdtHmJv8e6ciK6nifApCm",
  "key7": "2aviVc7qGfGqmsRMt9mn4zHc65Cwr85aMbfzUghLxMxEBUohRiiEjoP1VX8k3B3Wk6YtNHFiq4cacA885f4DQSkw",
  "key8": "2THeQWQvLzaWUru2VWEmW58U3Mb8Fp19QAo1r8wzE1SnRGA4HaarvECgMLUki8WbvdJHXKfRkJ9dfxFQKCryokuw",
  "key9": "3WorHxyzE5wr3DPdQtNvfkAHZKt6Ppi1Zu1sv9TVaE2xsVBwg4hHygWc31oGk7aTZ7Q7nWRnTSQBKQPgr4MVFvyp",
  "key10": "4vcY8YovC3WPFdtwdhgFh3ark33mnu8vYnVtwVW8GxDtmMeHVK9GK6U1LZuNx6Ni2XeyjM91JDvgqxpda2pTtEMS",
  "key11": "37Xttika8BVrbor3NJeHAHcBAeDBXgdWb1FnEFeTSHQ1ANjdz1VE886vMphnVjLAAzyTJA246zDtzhaCgowTmZMY",
  "key12": "3ZhmG9zTJLL4RMRACfRAQkTHBSGB6Jcsp9sTBYgzudEcKDh26YTLYtWwhVfGHzNgkc6azoawPhctHKv2hJvSEQpD",
  "key13": "5DRXSTDmbhr2hEyDRNcJtEi7TFyWAnMjexMWTEWd1umd2i8AXJRL8VVo3ziBzQSUWK5t1FFaxgiZWGTqyHfK49gF",
  "key14": "4ykqtwUR3So4MivQZtmkeWwYMt1nYcuosw7gYBFXURAjGZ5og7rNMfnxa8RyJAPWzADxUXVFU7METARkm61BiW56",
  "key15": "4DYv44fpgDkveukjMjFnCpUeoWAo2ianLLFwGuZNGVSJdDdyk2hG5zVFbm8WHR1XgYWSeoJLgeNWn56S4zudnCtq",
  "key16": "MSidUBM8HKrG775FBMXj3H7Hj9q5A2z1hQfoTQ4wN6wsqrk9M2inpdMs16GQykNRYcHK1NDyCexZLBTb9tshwCA",
  "key17": "5BtQrfgVmKamj8cChijS3wg2moQy7CxWjmMafa5b6BBgnKxyvk7DwLAn8Pq5oXJniVUNLbbeSGTiGhirSBiX3WMp",
  "key18": "3DNRo8BgsDmkuvcfbwzKnST2sj1LcrQQD6pAby8i7ZkgozvQQvkFkGi13RtudgQCcshjPooCXJN5ikQdu4Ka1m1w",
  "key19": "2a8xgL9YyxCnXj3f56957aSEUT9nrNgw8NCQpsfM26Ri8yv1w9NbvEEQJcLnweKgW7Fkvjtz4k5TdoAG7CSWUXgY",
  "key20": "5gWpNiY4QTSnaQTPuSzgR21yW1Lh9ZgUzQ9szTNE3XvtV9fpoDTq8coX9njCr4mFfRoSGDqF1VVr3j8MebpLgrQD",
  "key21": "2N3P6sY616rRjAfUBb76f5N8iwvfcG3ckazHuhQFt5ptnVwcHYdtc4MVrqLa9V2iMu2hpifJzMziLypZ481bFVwG",
  "key22": "zqbHRCpQxRVrRX4QYAKmzTe6QofnyxZazc3dVSs5CGPYSEKGbVjrUcLoKh4vQqQUeZDNa4LZSh3hBYkpqMTrQVu",
  "key23": "346JSbh5GDDMvRo8bovZk6xFd4tBqHMtjU5XnufHTBpkoYotasWonGj56qyS52wwSCc8hx2vFXBUvkG64iEZrdYq",
  "key24": "5o3egJHXQQXvww7GPRJ6Si9gFvc4fMhYcurj85meeUtoNb7VSGLfXAcxK6WzPHdAP21BpCTMitcXW6C2Zy4rLiGz",
  "key25": "3aA8QbqrSCrdUAqFyexA7ZXkmkb6X5SSdZex8gDYAC2QvoiWMvv6ZoXNx9vGEkK448TvAP86ZeS4CsMboUiUQfoS",
  "key26": "3cfREyNo2dTutvUCrCod37kG9THnwSxmETbivw2LBFiSY1gkPKSpvQncpGX6DSz2rB1jbYj75a9ft4ijkvC2TE6a",
  "key27": "3p7H3NhFiwypw4QByg95XuQz8UGFfjbE5WC6P6cCyktzTHYTh6XoNMqJdmXcucA5GiJZSqgD4uYfE58SHhektrqm",
  "key28": "BpCcRFdSF6fGXMtMm2CiorZaLv8BSjRrX5pRSUDHTnX9Y1A4DtHbx9miUtVX3DJri4vtUaPS1QNUwKv1ARG2gRc",
  "key29": "3H33N3Gb8NyWrwBnrJ8azfNimdDmqkPW62dsqUzbBsSDqC8VWv8Yfwsu5gmhy4zTzaVtMQAKFqZwr463cv9TporT",
  "key30": "5EXktvRCp1WGwQU5j79wsN8XcSydiC84RgJtTJ3LSYnBSkk8Z9TEpcGoewFs2Gs4V6GzXpmMBJUEYQuxkPyn72r1",
  "key31": "CX2M2hQdBTYXGGXHNoqAJh4PNVWpR1GmKz24UyWn4VnGSz35cjJWuBeeQoeeLkAXuCyNEfAKf7YTNJkuukW4f18",
  "key32": "8fLKEwUvqQtcc8BP2J6bGHuccdK2mjVUgy7putKNanjHw4W7HcA1yHk41QxP6wCyMa9FaWW3yLsPE3XUidub8sq",
  "key33": "5buNYMeskjBWo8mQUqCUpgrMvKLDcuCVZYb9nY74Wo2cJrAgYuZM84tqrkkDi7uML9V8JmRy3kM3QnpermjFL2S6",
  "key34": "3CndofTwPyibffsfL8jFDnN9CBVmMy1Uhx2dK6P7hMuez8ZGiTAPZ8qsQpfpo2u6VyhqRACMhEJv3Zfd5gPP2Uf7",
  "key35": "2TFuqpiRRLXS14Pg2nq1vMher211ACtyNQjpbD7Gtxmt8TdHXEn3NSqbMDJFhUYKNSwaUx76c4JSWU7nhHF84H3j",
  "key36": "4x5rWTK758vNz59wrjgz31XFeS7Bm6nMySDMv4wendTP8jtSPuq3mpjH3nGnYbD2sBqkJARwcq4nvRs3uNeY2FnN",
  "key37": "49sJpw8jUNCSgJxdW1VgCfg3rqdGhv65noFdUMRUhedX2Szkp9HiDs2kQXjNv19WMPVXA6CwBtAnN2bhUv7CvXmK",
  "key38": "4yFXp5s3kN7Y9kh8nJ6qTxPdetfSu8c32qzdZ8wGQ7WoVJ9vmUnH6ubPCzbHazpmguvzWXg8RNjNRigZnFLXwxyn",
  "key39": "3WLNkiqksxXjm1pAjX2h1xdCchXG9mwCEcsKKNc7oGLsGAAXxJRSx6r5BP8fdftdo96Z4hji2VL2cs7bXKb6d5bW",
  "key40": "qz6cMcmG9zLv81rn8rqQihH8uK1btqTn2L8grRDjZNiHYFR9nrdLKLSR7Pu7KBtWnD852LGU3BL8ooaKHxmdqv5",
  "key41": "3hkeHvsEiKBAUuSuVoFGT9wJ1EBcXaVyTqtEU1c3RPHTcuMNB8wBFigFUk79xWphmt4yNyLokxQ96u9PcHfsUo88",
  "key42": "r5zr6RYuYUU378qazVgNYj396MmgeUfBooLLLVoDwiVXDreuopZkSMHXpWPsgpsJNwRaPqCG9qrVyKtca9wE6Ho",
  "key43": "4pArP4RRr2BksNoThkPjH399mu7PfyezT9cxXAY7mRYKRCgd9387vhdjiyr5KWX426AavswWbiK31neq9khsuGd4",
  "key44": "3BXvTarNKqPQpLSVEy8H6SJaPgXGh3JxrHzbNcRqfji11JrtTfyKSmmKXLmCwXgDKtFn1R7VVVgTTRrgXvXKP1pP",
  "key45": "26cUVyFHxEtUzYBuuLaj6zMQxTqs2c34CRzXw2JCgBk7JXNNCuSWcvJG9hx1QjzN6ECwFkGPrQHhQwXLLHtBksAf",
  "key46": "4K4UbNFDBYxg6r2e5DWz9hpebqLDPqGuEDdTQ7XvrfLL3mdMZCs3v3bHLMr5AfMispHoqk9vFCUBGDqgyatQWjua",
  "key47": "2qDoNkRbkni2cR4LUET6shA2vSvq5y3JQJ5fVVzQFfw3Xr83UY5QeM3wQt4m9Kg1HBFCvafL7WKrJ1NUBPkGcuBg"
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
