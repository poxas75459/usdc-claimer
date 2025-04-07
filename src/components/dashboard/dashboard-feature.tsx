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
    "5CkpQoEi7j9c73CH6gNtJVmv1R73hXg9uaaVLiFWBu3bDwjR7dqhroFPkow4YzPEWatnvd6X1qjb7Dx22GbUCBeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDu3XceSLYA6d6veWB7YctxNtkXhNhSTTqKyhXWaQku8bv8G2PFnRB1stmo8vRiTjc6j2sUFzVPm2hBT62iTdke",
  "key1": "573tKEmzJaxGvRYo5bmkwuJXeDpg8jYZ5CsJRs8av5G2ujPeHXhBDDaJxK6p9PM7bPW2cmwM87gyYaF6LLyvQWjD",
  "key2": "27ms4BaurkGRQdGGWqJAe18UrEk3yrDn2qsdxPogLQY7cKmvPTDGt6SZw2Q84dwE9KgcFmbBc5eMGQjY6sSHoFcF",
  "key3": "3h9rEPrfV8gki18q7NB811B259qatb8APrdAaJFJCQr68uPMLHTbDV265BmwacdoYjL1xhmwtXTyzd86iK8MZD4c",
  "key4": "2Ci2VobqoMh6N6DTWVRcDxLMfHsqGNkD4bVbQTtdLmyxiRyx73cCb43H1ttSLTWvNiMbjH836yJYeBV6QQZVoT3X",
  "key5": "35GVnzTaEd1mVSXmUCbM7Cup2LK1cJhbsCLBnSNbR4TQ9dX1uG392e8UPNmqWbY4y43YsVYbwkj1SA9pqwJBfEU",
  "key6": "PDDxzLm2RtKJdDW6DJYq6TiY3e5zvRQdwQdDJ3XcvmP3eUtqGgkCEmAZV7Xdx54EpEexRXC1q5T64M1ENdwvshJ",
  "key7": "2wp7hiqNXs9xFHQUZhqbN64G7xMcQRRZcCSDrXKukWDgRSJPW4SAY9haovE552K6nVuFXnmedxMKEE6iXZ4gxg21",
  "key8": "5YALPpPKymRFG47mFZUsGY3CEXWddFRKt7krHEiaJofEafKmtCUMxie1xG6r5SDz8kPGetkQxrJfexv3CD9CpK9d",
  "key9": "MynvgrcjGJR53KNAgmnKAyBPLCS5YuW79jfz9QAU4tJ76fA4Y3DSqQKDNPMnUzreQjiWYnosYrZjePHtoZg8GPR",
  "key10": "3dVDikrFh7KvpBF8PQ1p12oM6edpzY21prQ5phgh1ADT4q57Q8cWQWkC9LYJ2VVyTcW9aNphbWn79dHhXytj8tZ8",
  "key11": "47ZPbdGg9m4QxDTaF8196obu9ZEroDG8DFz6bhPr22gPzKAp5Fsd6atfSVfVJVTQ2G8d8sTZyYU2VWdstAgqDiBi",
  "key12": "fRmF9jver721EfKbongsBkoguDmzjmrJcvKxKn7prjhuEpyX1bUA3oqXAz72fN4cPXanhrQ8hamQAoPLZNeS2hR",
  "key13": "4tG2m4qCjmShNuv2xme4FhqRvv26CZKQsbwYdxfBCGs888YUNZgvhKZCoVQWohJGmxKMi4uNtisvDh4ZrrXQe9F9",
  "key14": "5cXpaSZn59zB49msRF43MjjmjE36LhHGnz211rARNc3JCDiRQ4sq14cv1Eh2g3zsMdqBgVcsEDmh5ncJVz7yCtw5",
  "key15": "rzrmGZ2Yk78pL3Q9X2keBxsjpMPzH4jkYkFCCZAbZAfQh2mUjK5VsMD8sxtg12q3g6fVBAv1bqHxixRJKj51iN4",
  "key16": "23C2Jdsie6CEGeUFNL1FS29omiYhmXBbj8qDfWYJMkMnpvYqdVbcAWzaWtEhyuCSJ7XkbktSdK2DEyiTxPfkkFyE",
  "key17": "49NYbcYRKic1szpbfyqVb6fvERFPQkhjPrDWXnWto4L9BJ5jR6RhhWTp2A37Qc9LnXT4ZcPBwmrwX4xPtJwDydwN",
  "key18": "2iLv6q1iGappkPzpVGbvjDwH7vCbkw7WCVFtmPp5WkFm7BErhawtuDB9uUAowpVw7YJQvenveZqxw91VxwQexBWf",
  "key19": "5UKiHtwkFxEaeaehrSopddhzZpHdfhKzHxKxHPtpuoYSQnPiMpnYmqBUr2zet3HF6TrXVFopN6W12vecHr2GfMxL",
  "key20": "5hcPF3szM6iyUhNnaqC1dNYxnQpB2NkAnDQhuX3ynDpM6GjK7wtHBGHjPZbPjrrXnGczWmTJmC69Zj84sEqPgw3P",
  "key21": "3LyfFZFTG9tfKjPPM2dYbGiS54xwS5cQbMBJAiKbbT6pBZsv4vMD6XwCqMvseu8wzrfzG14hdnggetAS2buy6k6D",
  "key22": "2HYForcFQdnJaBToVCAGzHBekX7FmzQYWGxTKYhswJhDj4DJznDiBANHRe1sNxP6PZR9xvYaSKJ3UVNH7tFLZcmJ",
  "key23": "28trp5JfjKneeYh5SuogEAGTb4ebFkaJacDuyfnp5T1AnvpnXSP8qLnpTuF8QSwr8J4WTPA9hNj89Rk6WchVbC6X",
  "key24": "ihWbQH2NefBpnDca4cM36SRCw4Ts6bZsv68f7rTWnjcRq2FeSVPD6uF1iH5FsEwiNAxcSHSFpYPxLMsY9UkuDPG",
  "key25": "46Yg5b69CPu3w2ZTzTnexegjNEEPWgW43FhFxaQjQtjg5zXTzawGA3kW81YAy8BQPL2JvHzznwkybHqTXg7Bk7dy",
  "key26": "5CZWfm6GakTu1BTD7V3jdE8559wGhkdFpdYaXBbBa8hoUPxS7DJJdggyVNxAizvF3RCprAUVPbffBZyogaoaxpz8",
  "key27": "5hGreAeUnTAjUTkdDWtwenQYCPZRit4arSRpEK7XVhaHNkbwks7F25dEPy9aJiHR1mDoCJg6oxsVuhR9eYS9Hxqi",
  "key28": "33GGD3uaAMARFNTZX8NFe1iqbZUNjSuARVvuj9CE3X3jQgaWf61vcD3LBoWmFqPTR7t5NYRBRXiwt3LrYFNrRFyq",
  "key29": "2xAPX2NXvkXm8zkuimPhHgC5obKmgwuFSHRcfmpk3TH1X5GyxgEgfAyYQgQXEpwffcQoyPNjedbuc1TkLoVxN7ru",
  "key30": "3wCm283ragfa9JPf7LDh9PEb3akjArTmdmZMB4SFgWFk2e51WTYadHuLjSscRVHuA4EV3JK66z45bUgZApmT2cDD",
  "key31": "RooqhMeChy8sFHRZcvEd3iGKnTeWUTLCyQZzcTDJXwskv4GnCK1AnAqMhWNoTBpfHUBx2Z1aXwGiTBeanEpEwpK",
  "key32": "4Xr8D2jddgTbiUQ7RPTzCJT5F5t3MxeHCkcuGqvWRxRui6LvYbZP2ShpmbeAdmuCKnhUfqh5TUE4ZYnNNzPS2XfG",
  "key33": "2yjvRHTHeAV8PDp87mUgUutkX62jDd65ukFFfhgmYbAYoV3s9oBQu6vBmNSr9xTg4hZgUzcQQKhjcRjggPBgEUSW",
  "key34": "4tCPgrc9GyPh9a21vBQdgVP3ZH2UNty6U7Hmr7egFpaPHxNfCQVrvRU49nBBoMQzvDK3hwgnCyfKidGavKCUCxgp",
  "key35": "228ucgYnqb7kPTxwF2517kpMDjGX7j5bkE9f8Zmv8S4EHnqiVckSVTQy1txd6M722mqetmTJLTosgrXWdvH1xB4y",
  "key36": "4APpht5u1g9MRcpTGzvkFMJzPiwK8KadRyfDoqGToEH9yGsb1dPiua4zrXnCvJZkJM7E4QR3fJNwZYR9g3ScViYR",
  "key37": "5sGLbe46bYcj6gCYzZahrLDtMe7tqCT6uwHNgXWoU2Ly3RWPrjzkGVtijkZMbSh6y3Zs88iMWiZTxXVUdWub1K9Y",
  "key38": "3kq4GHGwBE2TiCGiusJuHPjVqRKzn49jqApikSbWaPAcrs2TbCLUd5jvuYfxQMus3RU6WurqeJsd1MTS2WPMKvmT",
  "key39": "3uqSwgSNeeiw2q7AMeXUb6zeTUvwaKhwA1uv2BnJK9bdxtQ6Qch3rnPD7i4CneVRyanV5cLsqY7S7y25jGqmT6c6",
  "key40": "2qUH3LAeTQxFRoFCon1wka3MeFYHBeBAsRzuV8VFVirPcDHnF5UL6KDQx7WMtjqGpQ2xULyBmhChhPnhQQ59Gcsc",
  "key41": "3qMDw9j8dwjaGNx5dWz6YAXq5gipXdT9GqHvdKy5tr6w5wmiTBqWj2PDL6FnAYkj22sbjPHu7TKGsrdQEtVRF8dn",
  "key42": "5m9xKtBqpJSkae6azR9PL32k4qLacABaZWVnjb6LqxJhg1sQhoCFASmtuYYtPcR9oXmyDrkaG5oWCYvdf9f2HpSm",
  "key43": "25FzVPSMrcJ5zDrTpWN7VocmYqjsb4G2UznqmoAP3W4RGeDYM8Xy6pSEiJGfi2843G6Tb1Ac1NCwshVKhBXpeWYx"
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
