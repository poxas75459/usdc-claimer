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
    "2cVPKxEBV79ysWXjMwBhwtByNf6R5iizo31axaE7EQHzH36riJcuf2FzakkjxbVDzoEX1kiVSMbyoJZq6aXqLbB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nhRzEQcYneQueaYWKM5QbyPnG2Mcq7qjeBekw5pLSz5PJVabdc1dGP5kQi8gqokWSYHtPPY7b6D63RiHt9rAkfw",
  "key1": "3bjoarDH44vfD3P91gxj3nR3KPz4SHZWuDuQMoQr8Lc3eFvG7WE9SjGNv2gMjeJN1SFJ2tvuVq5WJzuXAucCX2bE",
  "key2": "5Y51JYDwf7hPbD98eYUh1zAh1FSuLJw2jYWT1QRFsQJDiJgMjqckgbJPpwWTA7ZkNktEwqKz6A7RFsPYqkc8CD6f",
  "key3": "5bEFvCPPumoXiexMYYCjv8bC4AzpsA7mVU8cRcCfsePdKCb6EMGpdbj2pwvNCebvckqpDjtQrvQDWQKKMvLjK8GD",
  "key4": "38iS1MyvArzeB7WF6ywErAgJaiaC1uqbcos8bF1FDpzzz2GMkNbFPRmDtuGV2JyVj7J5q7rB3RpgEZztMPgQfzDU",
  "key5": "4DNimJrAGMVn4X8JTRgeU6fRZyqjCSdtf67EFZv8pucEBaLL8H3yWMYTr7HishXcbk3T7wbCLNTZFhGrqY1GikSR",
  "key6": "2NS1v5EF8wKKFJMXTPgkuLBGQvnAY3q1eG2pfJZ7hbkXhF8vxfhK3JV1RAgLvLzGUVVb9jxUgqRTyykogofyqJkS",
  "key7": "3e4EyHCXWD7C2S5LcDJ31nxfsMQZ6Wv9XaQM2io9Stf1nQmnMuE4Ga8ussfF5BkWX8Er9W2Zhrqeqb5ExAYEJe6B",
  "key8": "3UmE8st1Bppif7aWxLso2hHX4NEyiXvUsVcwWMXPQgwj8M1SQUVNacVW96wo8SUVK12niNiCGBPr1fx8B8z1Qnri",
  "key9": "cZAiifAZUMaFNCxi4KsH6XGucp7RiraqrKgmP2BTbMpsUyjVVkFingGASvcFoAcGqzReTAwB4KfRNQoUi2HsHoW",
  "key10": "W7mD6vUcmNaztC6VUq9SCcjzVt8ZgptZ2PwKZxoZ3rPRcciJZfxbTV76VosoQ7syJyAc3Qv2kut6GuQeFUTZB9R",
  "key11": "3qzgrvszLP54kD4MKT5UvW7CdmnbxeSGK46KBFsMtJYxwLiTuJWpoEsryb1PditdejpVqzcVVGBFny3yXwdGxoGe",
  "key12": "3eYWtpvMjJo6CCJa8UCE5S56LndAXJCpy3GkZz8oQzcnKj21deKFCSrA77MBrATx7ibicQky2LUT3a7s2HJbaiTB",
  "key13": "4b14XtxweHwFttr89HzSxY2JwHCvGVcpEw6P8ZiyRxu4UjXzg2Lg5G5wvZuEsWnbTHC3wQiDXEEeqRZChjfDwpwY",
  "key14": "KiP8JMGuCT7i1QfuXT8cojC4axUes5nfWvF48R1F52Hs4sLv9JrxLormo4rnbSmufmzPnTa3HDiFwNTojXvsra7",
  "key15": "3pnCwxe3GCTcrAijPVmkWTB8FzYp162S3SJ17tzfLH7FWcWhdikpzBfQ4N9nhM3hRSTWY69d272hKogmKPSNwFv5",
  "key16": "2oTTTcQSGAEq98CaKk2PFqrf6E3cwDjhZZJ4uJdvKmQEhfA2uyoNQs5Xi92cBGLP3n7tYUbWX188kMVAURakLwQV",
  "key17": "36pzG9FFaUQqGt2Rg6xQPjE2fUCCDdESQNptZdC8iJQHqmyZUt5Jst2ud7HAYUeZcTUhmfMFMTWW9wxPRXS3jabh",
  "key18": "3Eij8u4oDP3fKuhixNCeLYuvB2e3tevTeUS56iiXYjuLBpGsWtruvAj4d5qBD3VAKpTFfBbNfhBzKjMj89ZgPuRK",
  "key19": "2iKJJHAffQcrXcQe4fbp5tM4BRTNHLjhSpidBiVBLmHC6xNTZVkw28SSB7UKeLXvMuaroLJnyT8Tt5ykkeJzV8t8",
  "key20": "58Fre85jqyExiTVP5EYHiXPo6VyKPbgBTRfreWBYe6pCPTYmKBnui1kFBhM3WxhV87VLZG5Pb3pxcvDs5iAPxAmi",
  "key21": "3rUwSgj65ahzhMcBBZZ2ob4qqbNPHYSNR5HzgfByRAdCdvuAqD22vgjjs5y5eEmzx4QssfR4g1BX1cQK1QcBd1wC",
  "key22": "618p4iBLWMjSNdQcrHhcRyGK7tuDXxtwKCsSXg2wruBwznifhjSLcSEWjhsTsJwyjsyLTcS2K7CU65oKb591H4Ag",
  "key23": "bQ2BbSG5aizY5maCT2N1nhVq1ahhFLweoPdmX6VAqfaqKAE26H9yvySuvtgwT74sLCWHPCanqL4itdoaMMP5uod",
  "key24": "5EBFeBHsdwZQQBTurSUm4r7DxUFgu3eebu7rG4g4bEtxj2N6yDVxuMDVjYbaPcsUjvAvZj4NVK26dwTRAqwnUQuG",
  "key25": "3RZUHDXmw79bN9kmqbXxftAuoRGDsCJtXM93cbTSdzsuyLEFK1czknCiq7RhT8f85BL5DG2qA8WVKhWouaJx4gX5",
  "key26": "5RXHbhGV8VWwH9VPttrXGwRKSkFKL7yyFiaWa1dTfDd23sAQhJ3nRSi1Qz3mdMpQeMCY4a9RNKd16FAMp8AJqiTZ",
  "key27": "ZJPBT1km2FCEQAshYrGdWnZo4JxEQKhC53GBSpah2BeAYBVEshx2mRonVW3zmG2juA4UL54dtca6hepMSd9tYbL",
  "key28": "3EA93G7pu8NbssGtRpRnx1nLvRp9cf7KzRCZ3dXYTa28nAo3HMTWRTKQEd49KhFkAdMJ6YU9MTV2425CwHt4p8Z8",
  "key29": "5ef6wVHanzeB1DDej33yXaUWcaB7yCeqFCnTvqxdnNJuRAry9k29ZpJvTmQ5RRh2W3diQTYX9zUNPMaV7hJqJxBC",
  "key30": "3kekSns9HBABsKJkV8XVCJPQtVEe4758ecuAiKSktauGu88QoCLm7Zpde3maXRtFVXVpJ3uKuQngNzGJUhpYkbfR",
  "key31": "5j5s5jLqCt3XAMNprKQNCRtDJFYHE5MepFdGi79TwCCJpbBP763dPAqC9dnbxCZ4ScqcQY1Ws6ks1C8UthMvdGMA",
  "key32": "pobYZ1XZJ4yxJA6LQoidkyTUCj6esyZpUfY51xeKLrtp4bxqiwbiFu4nXmnoEWNEC7Mg1F8R7Lj6e4pQzaeBUTu",
  "key33": "4DWddtRGmZuMFHsY4A6D7qYqdoqBd4dz3bc6jzWSqNxQ8QzERgGQ7vPtPxVM6kzCJeJzuaPehZCD9o65qtmv627k",
  "key34": "5hRRUn4avtFWjeELzoxx9u9xAJotS3NRwrAfwKSPgA3cmBNGYXWr5unsNyV5kaNCmQ8oSwLLKo9wFanRDbTNYKK4",
  "key35": "3nUjfn8z3Zib4UtkQR2XaQzfaET1hNERpQDRUrYFfyUnMttveG68is1W5JzkvcG54cy1t8JWtEwYdmXf8WaSySkd",
  "key36": "61s6ye4iPV5JhmwpfsMg83Po11aAbKULLw31Ys4PQfe6yqsFpRvwzEKzFEd5hT5XjPHR5gMf5Y9ofGtARc7bLmcF",
  "key37": "4BHw9GS9exTDBh5ezZTX5JX2f5MWtTqfrB5ftPMQiCtEYNmkp64KKGxqaAevyu8vS3ii9bvmBWGLv16wGPZwRWhC",
  "key38": "Uo2TjhD6sWC5btEjQXRjQDy5xrnvhc6GBHb8HMFaujagi6nrSEGebMgWRnBwh2fcJwXAT6ys56X5LfgAHhN1UzV",
  "key39": "34u7b8seqU6W6ZUohij3aint2FcofeWEZou65LMDTEj69jLYPK3WtV9ssmREuhCE8TtyEg5MEJPLhgAn7jEUhjTM",
  "key40": "4WQv4oq2LuXkhbvLFPQw7hzGru99K7jLjSsrfwEm2WFAcY6zKP1aEcGMoD9fELKKmg8J7j5tRvHsBpYGgRKnRCp7",
  "key41": "22mjDXgCAbWLym5Gb7Wo26ALBELXQj71ghKWM1MgC3ZaejnbyJW8injA8LPD3xeaQdFHDACNooWyBYMqSxcWpnkn",
  "key42": "gj8mW3XT7UmMLtNCwKJpekDLgWpzZcU8gB7VzbU19YE5B7dx8ZbZ8DVSuYSWJf9GhkEtQRZRXRLBc1HM5HuPS24",
  "key43": "2CSqu3in73scw8Kw2thWdRcoDAiUphEpKgcPsjY3GKbh3zwVizrtCPBc78tM9Jf6LAhq3hwbGYLo8q8JfDAQAswd",
  "key44": "3nyuFhxz8D1RBEVReNa9oinc57Hn5npcrAdEgrUTBrz23QsZUUjqLnk7SeD2NdcbYjQUVfZzdngy547i5rCJaGYT",
  "key45": "5KtcqJVD4WQFZNvYRBtdnZQxFEoNujT9ZzPJgN6wGZeaok8eHjWwjMAgJCpVy8KjXUv16N1Wu4GcX21mv382jFpe",
  "key46": "5do6CvwSWDf5yRdfatZk4SJh7AT7os1ZSdzV8wgXEwsuBQD4r4UF9dsZYgSTUX7UUiNa66RZUn4MTdubi65z7Qkb",
  "key47": "3GpQPtBNmpGvdw9i99xgTW1xubcYzN7vFA39e576TUU6RZ1YHk4uzKo1xGu2NRRA9aDiLZpyBbPuErwX5oRe5MGn"
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
