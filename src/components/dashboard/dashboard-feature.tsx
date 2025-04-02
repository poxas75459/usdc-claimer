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
    "63QeEasPnfAhzeZ3gFcgvTdNYr9J1ATrkuQ5A6uwSQVMdffEAe1D5NDiz9wD74rzhP4DXbqK27e8XcwYtYfa1xwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWaFpgEptuxKMVeRJvRsomy6c1qNDzGX6jeUW91XxvS7PBYr6SovNNHVqY4V1QrtZcmuofqWFJPUsdNRsxMCMUQ",
  "key1": "3KgSJ4VKavtU7gEAhuHcaULgoxEJtjeHhDJDsCtdaE1sJJCWt52Xsq3iLL3evSpWLXHJAXdaLoY7L35rtWUEx6CV",
  "key2": "5gqknKmUdZrbpz4EMLqD16So1k9NUFasAguMRHBq9XiiHxnVvE7CmbFPT7dhFymB6MoaxLF2D2HPcV4JUgk7yD1x",
  "key3": "27YgTQy5urmCaGM6K6MdaVfrh91U5ekze6FYETtdXdARPaDRKFVqhN64ZD5hsKLj2civwwkwrNrtLBYm5YmzsVcT",
  "key4": "2tLsme5SVtcpazJbyNzM598drSFTQc19GvgVXA23ZCRi8g2o3QdfKQ9uh5fLqYaJt8DEqkkbSL1tSCxsTLDFRq2G",
  "key5": "2MY6HgEDEGyHfCfUiWs2GZwnqp4Yrek57pNzd8fQgGUpTjEcCaMfV7N5kUANwrLmkEJMXV5LGYrGEGSfZVQ1dvPM",
  "key6": "26Uy8yqmWFce6ahDZJDs5YKkMpbjRAmFKZAPUz6p8eMibdsw5473Vd4ivruMVA2jUAvzNw83VBZvXavs95uUZfvH",
  "key7": "4jmY15jbofgAvPXmDHBkhZHrvUpkxzpaZpnvqZUasaeFsQYfo6SPTkf8eBtuu91BFpU5gsTmpLP2J5qYHcFyPPz5",
  "key8": "4tibxD2es4RNBR5CJeTCu8h9usx68yJrYtou7me97xhFCbTfpTk1TgWadDfaBqbkVZatFCPtH8xfMFzjW1Wkk4yZ",
  "key9": "4P7Ri3n5dsFdubk5Ebxb7ANPFWEQwvKU2nuw4KfTP4zrqfmtmXcRmkDUaRbmJGDSZYWUBvg9txFYTHdzFpdueopj",
  "key10": "2jHzmu3M8uPBFESwNn76Yok13wiB86zsjS7jwGfZicmNpui5fH9dSDjiaSXwfiFH6TbSiP5axxeysT287t969wp5",
  "key11": "Bb8F7MkhuBMLJpDDCejFKP52AMXrpUNWUTNGoK9nF8RMcC2eDXRoYLHSZo8mkEwV2eJruBEiPJ3ccJYxXdQDxKw",
  "key12": "ggMX8p8YVYxwHvJPMupzFgzusy5qa3kB45YHXLRwfjFK6NJdkb9vHZV4Bww3rS2JL5qEFiJTnryYHZvMF1ZKBnZ",
  "key13": "2cTsuMQMj51c3A8NJRgNsHrGgMuRwQJJKQt5qhtSGPdjmgF3CmPvPiAqpZGgxiY7ULabjmTHZwkktDB1XF7dvUzz",
  "key14": "5vEreQdebjVBtiZFEm11z888yYETXFurxSXb1qb7PQHoxgKGJuFY3ouMnDQ1fzV59pdhU8zsEZfuACU8E9tGPSwm",
  "key15": "63ebS6RdDTqANTzAqWJSxex3qJZfFBPksGD2gvj9BvF5jqdfTWFYokYGtEHxHwHbMH6H1bgyHjHNkkSdFoVBaPPy",
  "key16": "ZW2ZE39oTJ5cA8XMQvuwLyDsGsnnnYKwY3CubNmjcf9paVkCDqhwR3tzTHurv8WFABvJBtKEenyQYZexDzg1ULr",
  "key17": "5WCYoG2HnrPCHTBGW1FM1561FYu6aCnTJo9xLNfG2o3CdYH8htCXGEmMTnDKkNd9sZNk1pbgvAcMst2aY4wJrcMP",
  "key18": "4JXyn9soeah7gmWDPWTGoYoyKpEzGvELSWjzjEXUNeKm488P1AefEYTMU7FbhLGVNjSBtcuDQnRJQBmNhn5ahwNz",
  "key19": "2q6MAC9fhyfkutGRHnzyRLWi58M5DsS61rubZ7gCsWpXoB889Xuq32andB3gS78Tuauw5CWqqwzx46u85R6DkScq",
  "key20": "5V5D5U9FiknigFY45uM5fcswsQYkF1J9RoDcfmh2FFE2y1c1mhxZPjimKT8py2DvaHnuLk9uBkNqxcd6g9B51GE3",
  "key21": "864VaN1AcpEXgun7u51cnqQvpZHsch8dgqta1K17Brekx9uub5fKkfPksS4h8icsiJ2zALesHpnf8b4b8CqdLAk",
  "key22": "3eG8DFcwav6tvRS6umpdt6oRZTVSp6rPk1xao2GTtGGa61MK265SjVBdXzUSjQUu9WWTB3Vn1KsVvZv6NpbVvsUW",
  "key23": "BdVxHxXpDRaLj9zgHYtZ9gov6nctZQguj3UeaNHvD8kqfDMWGtQ66QQgfEf6kmBrpEJddaYXRCPSMipm3DZWWCJ",
  "key24": "5wUmyE8a9U82uoBvhXKgzXNc3cknqKvRjiPDbpYoWLnPzRJB27VuRjD52Y2rCP1n7skwiGKxdfH9FpTGx28wbwDB",
  "key25": "46xhUST1wuR61BKnhis3zDrg8kxtZXj1SGmzByerPna9rPtAkh4HKCQC9iNXC8FEBpgqsziP8GwukxMyXLJ3gzWH",
  "key26": "4fUUtP4yyu5246mndk1QS3sDVa4vSrQcwgtCSdNm8FuP9wbzZrDhjSxvvuWv9W8rWpbgHeTvB5ZiLYwJC8LRRFSx",
  "key27": "2hXBwdwBrbKsAwaxdWf6xnrkcjabcHKK6E3h8WXP7ffjp76jQSVB4BkPQsiRXgQAQqBSCBFzDmo2e5bYd5qc4J5E",
  "key28": "2KrdHUbNL8fFFaNpVKv84FVJmS18ZVnWiBkQtLHyMh98JiS9uhRbqQS468fQPPm2P2AoDZ2NjhuDrRo4vpEqLhp1",
  "key29": "2QcukbWYohDo5Vw1iAqKVCu5xeukerrYsGkPsgjU12ijJaattiZPzwdeAY23m1EbzKvSetBiGhzxZtSEzkG1y2Af",
  "key30": "2NduZq17s41Msobarb1fvZV4dTzVMhm7xubGVpCrQKuQCuHHN1VGgNgAY1QHLvj4t7UvsXzvBcHZao2bTYf1yn3r",
  "key31": "2PnPej3cyoYRdoVuRkk7keJkp4eirTd7D23Py1xnPQEUTDavhZSj13DsNpJAnsg6DYNFQg7DgkvgHKr4vwdRcaJV",
  "key32": "2FozLXx5dLW4UCDVTyPm2Jaikbt2obBbY6W31JPizBjUmj5ZgvoMwewM6v25kQmEAq3oX3Cj1NXJKdX6XYjPgv5U",
  "key33": "48jfrQ64aDNJpyxvDQVGbG6QsMdqaw83B3Jfg5VqeMooienjMpdnwi59gPmsUatKvHypjUUqcrurpskGnFirK1fS",
  "key34": "4zRRXPq64xQNWE1pPneyAXtXXjvF68BSc4sxzcEsuqggGGH7WWJsMSaYjK5DrBDmNLyUdWB6ZatV9fR4NCD6uuDw",
  "key35": "4jGQcyzkkPXo6hWaD1sKgRu56EU8s49844YJ45btBvnkVs9dt3KFy4A28zXmqd91XM8SywuZLPNvdJ4vWwTLGkDq",
  "key36": "3A5wdAn3uWFrGnnkfN8D15etM8822Bvaxo3eAQPiZnLAfxuPC9AmFXhd8RbthxFTbbgQ2ku7B36Ei1R5tDkmas9D",
  "key37": "5V3GpQBPPMwgd9CoNTreyG9Xx69xGefBvsmrKTkYyagEYCqJA6CNCD9sLfc6CQkJijXuczksdidVGf9vd6iZDmEn",
  "key38": "2omcDKtMA9GihfzFiNbzkauegn7GEjUM1Me4b3DxgSvy8cGrKedivg5Mn5Xje7zznFWgw5eJ8EmRzzU7WS6zKVXo",
  "key39": "3Ho7Gr3C57UV82AfwrFCzBDeeDJHCypzfA2ykp2n4DLYt61R683j538ACArbGzE6KLZgHhML6tMaUn5t2HLzqCUP",
  "key40": "4eWMPdettKAe2FWrAaK7jAa1CHRsR9WGjuByVMgKmEF7Nw7oW6sUcoPeyJvnbkwfxTH9FZokuBj5cREsLwb1U9H",
  "key41": "5SKwVTZTkxbq7zuJHHaDQE7bhMGANeCeDN5zA8EzzRhnT1VMJv8jWBgDtsGkzT4FfzAjADwa5M5kugWPWcBdBF8A",
  "key42": "48iECAtc5BrkDSK2neECQJKK3VPJaPQo8i44YhFwrZmnSU5uT6DoUJQ5hi95fxdB5vKHaRdGgpaEBZZKq1129Ncq",
  "key43": "5RZQ1ymDrW6yamn3gGhW5uNiuwWEdXL71EWHzMHdPPG1Sdowab2yLtCYfG8B3nie3xiM5LuqdWTeY5Hkky9jJrpx",
  "key44": "5Va1mnWdxrFp63NLcZzZ7ZADeYW1uCKLxMPrECheZY2GCZpGr7AxwNf5UFS2JghjSMpG2XerYLrkz8AjxNNF78qn",
  "key45": "34TX3GzvgrYnZGmHhCPA5249xhd2U2Rw1U7sNETz6K7xdgdNEZZpJnfgzKZHgsYxzXsDFVACTbuSBQvpdK1BQh4"
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
