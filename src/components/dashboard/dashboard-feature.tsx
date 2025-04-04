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
    "5dZRiiVwts5E5AD6cFPp51HyiNqVKsUQPAM9MzVeXDMxZTWuVyc3tUdpZafX6BEfabeNvcaeU1Z1P29FqCpMJ5NR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjSddvkQj78hJ4JsjaR64qv8xAkn3iALzLbP6SBFsiFnpeWQFyY3QFCQtE9Qn18EohHxQaEFUQKUq9hJG7JWmUM",
  "key1": "29MuYLo7fi9kkxkPtiQMkTVk3w4eYTvDdqssjBRdQVu1BPnGwbPxNUxvPdT6yDG2cBeLeALR1pd76dT184V6ymuZ",
  "key2": "m41di2VgtESeMMQJYxrR7eZTRAgBbDdp54KGiWPnuQs9XnrJiVJr2hcc7R3pVG2nuodpjugSmzHT5PfTC99cAhg",
  "key3": "5Vc2HzmHDWSb3qF99yKwcxPMqFgzqE6k8vyqd1ENjvHmDsSDNRxEsmQRwpw1uKqmKzGBuWnyqDt39xDQeQU4UmZ2",
  "key4": "2e2TV3BVV75J1BLGQ9jNouJJ79H4EfzQHQWTpRyj6vt5kCeVEvCkVNEX3JuYPk828jvKcg1mnBfvgQ4vbdeqMyUL",
  "key5": "3JDvGvDPNXXvWrgJHCRLoxEpzEyv7HdPCUszKyNV6LsSHUug9PY5ZscfBcEYRSYnotvkpTY6yGjWYvC3GwUy4peo",
  "key6": "4fBP396kqKukUs8aCeLjaKPotMPEvz8ZFxaRkyMe236NVreQyFBfjGFAeMjJGonRYQqHTmnkmVCqmNufJPtRyBJM",
  "key7": "4HUEPtN9LhuHkxeNZJpZLDbz2jwRTe2WRhurxST9GmWg1mPVEQNeQ51oLj5oU6kGc6gJrRoNiabBUDwwLu2N3hS6",
  "key8": "2DSsM51vMXmXMHkRBwUzUXmHz5pPBPwnCVeDW5z56qYCxiaL8Xr2y1KkPc7f3dnXeAthcxfZkP9bD9FyCxhNrNBE",
  "key9": "3zUhDHLEfNHLAymZQb6MeJ9oSN9r6aPzfu5rb9vsHkVr17jkP6MSqLgf6zzKdpMXytTTZrQnGj93DaBHJhqd7N7H",
  "key10": "4yJwSuwaTmZdk2amdYA7mLAafW2bMX5Tz819Cfo4xjFbLWwPcqLdixJ6R5WDnczLJTTySMm2LxgPeEXkZMVBCeYY",
  "key11": "rKT6K2gPVmkvh4HzSEyTRp3FEvYdtPrubQt9ibNBnASraBdgwEjxe99X3f42RidmqxRV2ZPrMNFHYaQCBUyCjoC",
  "key12": "4AKVKySrVh2A6gT6T5j8VsWLXnYbrmd4rFQXBUpJaPWfbRwnSgCrHdWKTmeiKDFkRbXpJUiUH7LwWxCVpQmrVeJ9",
  "key13": "PLENQ7VJCv3U3hAwoZHin3A7XW4Ktw1qXzfVZRMDfc6Dg9YMXusaqbbrKCeAo25ZmZ6HburuaZS17cUfnjycUSd",
  "key14": "4FLqWVcMiSW8KjCRc2rSkurkRbJC3t8tmxcgWztvziuD4dLnv6U8EudvuqAeZuJ8mkKHEQsn9Z5Yqnx7Foi7ZzVs",
  "key15": "3JPefSuwz21TkaJKXzpkgbqJhqZxNwrZFgKdpVswH7V59gAp78XnsfzUcQE8R5qK1tjE2ex5bjsVXpq46aukmogh",
  "key16": "3crtiZLbtK1YnJPZvNry31TiuzdkczcSUt4izQkcxLH8kwCwXkn2xp6v5rnySQuuse5m7reD8YXMs4QzM6YWE4Wa",
  "key17": "35MQyUPNfQsEJF2pCTKNZ7ExkfcKsNPnqLfFb9gMpCVFhcJ4uHNeBqXYJiNnqBKFhXRGuFdGDKa23Y2njmeLVvpX",
  "key18": "3DDFMJoMKbGmAPjw9nKaZ2Rx6EAMxwHZNLqASvCSzLvyVdi1gvBNTtaqjrQGT4sNzpTwXom9sNUhGQtw4emLhDvT",
  "key19": "3FaW5EcSgxCop61dcVhTab2kJ7RcvczMSArVGYbT2u1p6Pd1ZeHhWHY6vRagnDTADgv698ezmRYp1id5EcTi21CQ",
  "key20": "5qNT9SnFiGYtVpDsZkVPv8uy7WPnpxC6k64VJLjUJfmY5Xp5ii6z4DmPAdE26Jy7szTRdehJevKGutM81MMZtwCd",
  "key21": "5sHeG1UJJbcaWHvpC8FCbusNN82fihc6dTAYWVVFWngAiwDdWQFxuyVpPaZvq1R4DSMJcFs18E5win2oRPs5TcWZ",
  "key22": "HWaJEQtFZUvSzJmheX5AtVxewcj3NPk7v4T4uksvkGjxnoKw2qrX42SMFjZQXq9ECy4chAwNZYjFF3MNN85gLbi",
  "key23": "3WHTmiSRDPHMqNbu9fa4fpyRNpbP3TY2WveHH7YVCSRsXAwP5tg6EQmWniS1cVMYD7Erxps6J6AsV2odvbQBvQuf",
  "key24": "46Q4sB73bREY2RhHTbkEYsLhibCzTXkaW4nChgAeBfgD2UHXQHMF4xZWbkVkcxGdXYcPNwxsZ9zoxEpxppjh23hZ",
  "key25": "53tWVaEZuwXfGaQnaZ4Cg9zeSAcRJzZ7EVR6uJyF5qCcW7zFoDmXyNCw8bT1bP2NNd5JuzM5kzbWBeN5suD1aw12",
  "key26": "57iLhtVTCsgaJDdmzHm2aBGeM44PsiddxtKM8MXHQv84PwS82iS36SuYmtBPJUQNbgXRweeQZBdNWoVKTcgQnuaE",
  "key27": "3okMBm5oxBAFigsi4NogvhsaccNhQeRHWYzMCYHKWgF4JH2gWUMutzyT5F6mGAK8ux9qyHCdii91yksqwTfFZS28",
  "key28": "3DqAN3ghdnTMxk3vwcBQbVK45iiVTJL43yyudypFUuE9UHuXCF6CrZHFujBozanCuwjRTZxf6vc855E9n8dzgWDw",
  "key29": "f23uEPF11c4ZwQGa3qpfpD3PFHRLrdv9iy1hxXnkfRxZ3hxh5K3pWbhcyZPrbiZRD2xunNVTEaXfM2JmRZ6GZGE",
  "key30": "gQdixg8rqGq26ybokjYG7LDdoJJmadhnPjcQMHyrTmig8wCz526c1ByTg58dbm6cE8Y1KUMvgYPxwg8JpiYCCYR",
  "key31": "2F75k17yfvww9b18HyoaqFMGr56EZtCkQU4wSgVEeNKRYXQUfJ2ihqtskfCSGXhjWr8DnRtnLvsF3V3DzdeDxaRB",
  "key32": "4QzcCxJLZ6qJtgpHqLPmDpJh95mPTYRLVGNSM4QJzu76d6bSMMRXB1BBNXZXZGgRMbHHfS5LLpzxTXRGbVRqJMgd",
  "key33": "4vnFz97MQWpm8KD6XTVAZaY9zdGXnwPHoUBxRbsR8TFiMfcW6mrFQZCy6cZkzd2JJY3mWgRbnB5pyWyoWRCVsAVi",
  "key34": "4xj1VBvyCJ6Y6urRRvVjwaUwTw5KUu7Sssixc4QfnMco6kozqTmd5zZ39pPFaybbq6xShiRCFcHZbKwvBhT9WGwQ",
  "key35": "sdnb5PRgKVjDPbQjwTNN5T7UGY3JdFmy31fKyEzPwPEzxuwqzNATfcsokrX5B4eoXbE1gQeHgP3k49gzZcXCdeZ",
  "key36": "3dpd6CvsK1R4UBTKjZ4qSj9dtNsS42CfQs2HNMbTydZ4qQ47JbT9RbZaX5SrSJeCVTAF8s65v6SYm7z4qSDgD5qf",
  "key37": "4y9yuQYrHno4UX2SrnHTL9245SWr6xg9Sa9pGqsLFgtuTRnrPBAo7DWo1yr7uc8qor3kGYAuKJHZWHUpMUBb9E4W",
  "key38": "3wuSEYZEDXRFrYKmeqWyx9nRvoNyLt2A8Ht6Eav1zXoMvLfna6N7ZpoS7UwxNM11NFtBhB7yeXaZ7CmLCw577GsG",
  "key39": "3PzrrNj8J3jXRZZxNWRkc7NW9hVVSQrrp1uPzeC1V1wyY5h3T8AGjCaGJU8wtjiojnzKpPd2yfjaL2kxsprWykcV",
  "key40": "MTgX3bKd3Vd76n6bB9iduNh4TXzPL5dTevzAkmGPHQvxPpBn4UAgiQpmRiTBdmYdMBWr8AjPCFndkMGbj8Gisib",
  "key41": "2WnmDVX5ZsCt98WZWYXaGudFE5VWVvXTHB5r265cJ42r4ngpAKxidbHfMLvV7F4BG1gt38NeUfmqVtQcRU92MgHF",
  "key42": "26wd1kmTzpFnswEBGqoBDDCQvehgaJsbKPyKePY41uySAcj7BpAZcHqkWkPDk9xrVzZNvCN5QeaW9UsAdjKDEs8x",
  "key43": "2NTKAYWFXzYerSyLh8ZVAPWrYrJFf8Snnqq6bDmUhnMYBxF55fha1PfkCeBuNEyuM67kXyRL3ePH5f2YjHjwNsE1",
  "key44": "whwAH2gazWqP55sygABVm1go8gT7CzvPgCPmmbryimwqZ1E19G75t636PurtMx9aBCNC9QsYMXZg2gyo2UqTJ9Y",
  "key45": "1FJsrRwu967csafD33vfaxzB72skGCdc6K4oDVbMkaeBa27Zhv2XvxFLoatRLPbAefyNT7MHRqV1oXLUJM1iJxa",
  "key46": "2cgtk1cQa6t6KXA9GvC4S5mcMiAT6Y1iiYHZGjP2fBsABznjNrPatZZSX2MZJ33G74HLGLGoBWuuyUpfJV1VbbkY",
  "key47": "5SrKz3VdtDGtWaHAizZfqkBYgATdraHpWM3rBf1TAwiyaHJkKgqPt84cKC6Y3nGwhxirMnHPdjzN6doV8DGJ9kRK",
  "key48": "4KzQRt7xJZErGoJafxj8hRtBt8HJPkkQiHZGNGzRgbhCEEJj8Qi6qnd8XuBx2tusz6d2QCeybPJBL8DbkjED7r43",
  "key49": "2p1XVSJVUQffypRB9fgVQHyVjXSzK5PiPEi2L6S2nBtGAfUXvFvdPK8yjRtoBHqhTNAeaMSuYnAsCVWoNT2NQEUo"
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
