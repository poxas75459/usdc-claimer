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
    "5QwN898VWvLBQiSYTgZADdewT2B19U2846R1C6TmgnYDfBhKsbjHCnSoSWEB457zbasXjeQcTQsyu1R3wVLMeEZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbwDHT4TLCptijihRwYhPh4B4n22Qqosos15FVzMMunXrCFuiF3CQuNjFhap3TGervqLofkAxHCgDdStwF7Gmg7",
  "key1": "7tQe4F8DmdJob8jsyiiMtFFFjmfe1NnuYXB36N75DRctYKGqFK2wUi1aBbwSyFekjUpMWTaVZHNuQGYU1Zo3u1Y",
  "key2": "4hYrGdWjYNP92X31U2fjvpwgDbcZc99jioGWqe8xHKuitkn3xcAwXVDdFegenf6iqCvoZb9fWA87Z3TszfceRY74",
  "key3": "4abBVoeqxpaw25GuqYxKqbPB8GM3kzfsbQc7bnEqS7yy8CqwNwLs2Me22ZPCTxuZdDCxYsbhcZ53BQToSdjTyKhr",
  "key4": "4jrzutyccb2KJyJ5RVnKX1tFAkKLhnznemrcfgnuCB3VQEKjPGn3pmgK4rrd941E4w6zbUiYigSnbbA3c7yhXjtV",
  "key5": "3VPt1wiYStdTHKec2DronsPtazGC3zxDR4MbE5MbjLKdvLg522k2BbaJmxSM7B1mQLZ6JkFjmnJtkiXqu7un3Y3T",
  "key6": "3QM46XWTndXs8m5apsLPma9EjLfVjBbsxPJFN31jXWnVDDoTgjQCPxEfQWkcunmbh3LhBaDMA4XG7aNJQBvejJ4X",
  "key7": "3jEEYQddvcoDcP6YW5KLSybGzc2kjXeJqxJ9RXhhC21ZHeiZ6uix3hyZoh4fituSUEYVQFAxsvX573Pw2Vh8JsEG",
  "key8": "38LBCxEsTjr6ipoTgaKgKfU8iLxM3yd8MH8wptL8vgoiUj4bYj37poLCnoee1m3iSgZAGZdRSaHxESSoNLgzrdme",
  "key9": "5SdYU1oPuyCkoRghEDWX3RWPFZDyWSHccMHuREkHK5BoqkVvTT5Q3p6gHQLabyqA4RKf7eUZ734PVJHTe9uJP1FX",
  "key10": "5i2JTovtQrjC6i3ump6wKqRpuEfEAWyYtvrftzHL2PpqiYKYfMQQP63ioYbThKcNmFFhtcY5YVAVxwDYWRNFawbd",
  "key11": "4L8umXhqkwaM7b3EiG3Z1LHKRYnqLAbq5rR5yTff8fcAP9cLTUJohZgAeWh9zC9XXkP1ZARexZhjPuxdUa6Gpkm3",
  "key12": "2MBkJahWr1th7as4mx6Acyu2ovR9ngBu7mPTtooacQb2kkZrmfaAaKSNWQmxk17otAYKUdfNFP8isyoZPM6SK7h7",
  "key13": "2w7CxfAYmPuL2qwD8fAQmqWfD3ReThCjP1oXY11WyJLtE8jh4C9s7SWxtxEp5trveU9xXD5H7exRZivHZw9fwSoX",
  "key14": "4rkuZL5zQmb7YqyodN8X4PkqrywKuacsviaUntkNBuYhRB2MJrJDjJgDpV94ngQG7JmuHGxBuSuxvyNXAmgzQ8a1",
  "key15": "64wL74HjiyRK3rQZqHLZnY9S6gRJbBuwB4T4Y2R6N7QQhYW4HpGn5iQMMCNR4eZzmJUTwY1gCrSswEkccZF89DPn",
  "key16": "2DS2HqYUureZnrtoZzAko662aYqPDnxZN3i5ZYAoikyjWzxxyciYs5Vc74e2nqgB1yiEMnayTYho1vTysD4E4GVU",
  "key17": "4nQAY2yW1Gik195hd6nSiZ7uK1rnzAz8Fk6VSs9covgm2ujD3HCYm5xQzJqzBS7TENDxXxduwQzRiW6SVX35nZpn",
  "key18": "2Hz3Z5Hih59LMbjvezSA6VD2YeCiu1NaK8oa31MrhnNaYD3HiLS1RA8w8Xy7UkAAsvJTSA9YGwEZrxtY4huKBXDX",
  "key19": "2E57HkARFUuqdpMBHMWW2gb49hvAwsR8tEuJm5Z7Mucf1VtNDRYo8jxTY9PCVvVjYWcaiTqUxN4dhGGF1knYHqq7",
  "key20": "4Uh962C3pnY3wpv5SuRa4SeAjpHCicQdTFitj9RDGCE4QSM22nG27fhM5B1kKbkNUJLbzE21yBVQAehRW3Vqicfn",
  "key21": "5bDP7SuZxBZsmRW94CB7WsCxbHRpoWg98vJf1RSkgPGiYx6kaqtTZwxhvsuAdTTbAbnwztoPC4mJnkoR4oJbN4np",
  "key22": "5UJEvtUek6B758t49uWARiHickxUThQd2hyDRNnXnkiFyKZ14kcNV4DT9igFJ7hWfTJ2cc56BS8dudFENVtPBg9Y",
  "key23": "2x2DmRVwwTHBRoF7wUav47r4wTqK63FU4KS4cPEcmUWdiPumb4Pp4P4LRdSYNWisgm3VTzcXfaXeJUjUadUsQHvR",
  "key24": "yJvcwVgg79rqVv4t3MEmGSmRWQcJ7WpKiqLkaTuPSyc3gcM9yZzBCH1kNNE6hmE1EPdmYTq1x3rzX7vpvcN1jgh",
  "key25": "45uSvMN8K88BwEVxbpNr2QgBP6wLjgiLkjRtFtM9Rha1uvrGrSDVvhtDbEYVd2q3Z7f2YvAvwJu8jX74qsYayPVe",
  "key26": "2prh6wMTa82xQGobrfJ6SKWCVkFYWhN7jQ4gQnXxS8wF7CaZ94PYh5FSC9EXaFfML7JEVU55W6ShYMxxYBjisMja",
  "key27": "4T93qftFLFkHt6tPWxRjJVNq6nRj7GUHwi24pSUcPoFkpediiQ5BENXN8S17F3PtLwjiUhYnPtQPZisZ4KArJuQm",
  "key28": "5WBudd1vJupA79TYxCxkkz2NyYQ6Yhm1DdXtVddmLWeBCpUMqG5uQpphi7YkrBZEhBYyCT1BFxQwqxsvSVH9E3oS",
  "key29": "wDGpDL3E9hsFUbqyzuutFr3jRkcsEmG1GgTJMwUV9gt5K6xCfLiwHTooYpDH3wSGe8YgEu56JRNrWAiwhAWk5HR",
  "key30": "gvqakjZhf6ParVmzYYx6Bd6hH5QKGihpEUpa3E5nfMRrihFcyZHKZ1CsxGn9YujhSxY8NY8cJmUvKG29hyStQsK",
  "key31": "2Lik2Buov8h9coEzhp5YngcP3aFr2nxDFT6AAKMPRqKg1YpHU61HSkbXAMUFWVARLd8pKxQwduPF5RmqoizEyWNp",
  "key32": "3zJwrNszRPxC1S1cRfyv4x9EBkhdRc9QceVFYrDbqJDiQUuBr69Mw7pRo13ohXBU15bZt3KeBWkSS8GVAZpV3Pa4",
  "key33": "3c2ACje8kqFraQWh1Hws382ktzedtGjqbEygdieGM9baMWfZjURJBosPk54aJMmGEmthWsajirPqzoYaUEuLXtoJ",
  "key34": "2ftqqaRddEq6UhhHYqEoexWTPvqiRCpAvMbLzoAcfWwLU3gT65borH9LnbPK6fv7cJ3ZFFmdmpw1GzDDWtdvP36T",
  "key35": "2Hui6ZfbWufKvDeo7X1HfR4Tf81SugfQLGrUju1mtAbqX8XPphMR6vsmn4ytKwvA8NoooTGmhBJQxCZTXvuYCSxE",
  "key36": "4XmsXrk1GSNxVx9sYzHZ18BWsu4aV7Ym33XeNFGC68o74faiGfV7N2UrEvuveBWdxhrBdCs9bwVjiVgujnWZqSsB",
  "key37": "2JVtR6iqG4o8FK8CKifc1DY165XbXsnxVNKom223ZGWFM3Wn3d6rDcE3iK8LHgh8asdxghMGBgi1FospfxRJp4y3",
  "key38": "3AxdSChjTPA1NRRTePD7TN9dd21FMVQuxRSejzCboEeia1FD2xcxuCuWjRNQ3g2iJ8cCw4wwvvzvAyTNXCMCmDTi",
  "key39": "32mVGaimcAtGVf6yXPHKRfoTLz8GnktmLdKNcdymfGMHSAXdnfCyPCQh1SLgWdnfFEEWSRJQGKM2ijRkfK4pviG1",
  "key40": "31wzuDp7Fn5t8o1HQQ5GZhzawfsw8EPjSzdHHB4wGLqMcAMhyxMVqMwRwaEL2RKzLk89hcF4TcyqZsMVpnh4KwCf",
  "key41": "478qsMLVGwNZbWqTD2Si8dfYjPV1JfLAEfme49aV92ab15AQ4gN2zvZ2RETq2deaKacC1DKZagZghfGN4ZA2f1Ya"
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
