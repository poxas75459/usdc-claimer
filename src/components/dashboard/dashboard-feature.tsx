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
    "4GC42q1EGVFWrVa5c3GGE9QYcoucHiRdEwXhuq9zwNcf6g3WttPcr5u4Mcu8bjqJQp5WeDbDXLoKpUUGgeLZYq3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33n7sJF1AjpbgLxMQpFhMpfgUdiKYfZcQHoxhzatyRLhqUy7uNkHbaZy8hboXhFSZ9jriafXGKrg7CrHaRU54Zcz",
  "key1": "nbzR9fFwZrisBjXGkhcGeSTZBaddVe4XeBjWGTZrb1oKau9QhzVhMx7ZS2K2wYgY8aB6gQCxvq6fNpNaMJqypsW",
  "key2": "5QjgXNRXJ5e95TEP8FfSC525HqzqYVJHi9nk82VvtZXkJRVbA6dAvSHnx15FfSNuxPHrt811wDxbDcc2QzWn4hPu",
  "key3": "2sjT3rb3YfQJzeSPJWYNkbCaCLMFJfyRpkiFCjxrw7hk33B1ujsiP89DzStiU4fBnsCx4WkJFJ7FNmX3vhBsFM16",
  "key4": "Nik45w7Kd4V12EyyW14vmosvieJui4QJ4CYFCrpFuETuY6PJknLYWwezpT2zCz4ayT6dfYmNUm22fqK1TtH4ShA",
  "key5": "dWeRWPkgRHkynzyAgYUwGwYFRNHzxA44wKhjXs5TEUtaAa31TwfLyHLb5rXN3GdfdVNEf1VM9cvWS72Tq6amQnc",
  "key6": "3nFoz97tt8tsC5kwpwtD3Hq33Xyskd7Rc5aEvvzmdowcCUyJiPygRjk5gMr3DYp9Nj7iQUT5fjYEwgYfnivSYB2L",
  "key7": "1HV8JJSywcP3ys2TNRfVpu1iGBbvRrhcBxyTdhtjbpSB5tZaYjPjauxh6RyKWp823Y84oxLbpFjgjJ8spyARHVy",
  "key8": "3dSgvJHdDT7fnHgzckQGpY42jQHb8WdXAwAvZkyjPushL4t6uwW7SJdGCUX4isDVyD7RaCLbGWnmnxagPuLor7hp",
  "key9": "1LAZ2YtE1KLFRzke9i8FFzPrNauxemvrwa7fnXtAi7yayMoj4vmnSEvydcZp18G8bfWyPAvNbiemkAykGHoKWDr",
  "key10": "4abnzcENSyaRCxwjoHrhagoc5fefptj2R4de6Db3z8QBMvmEfEfy75T64nJzHD5qFLu7big5wiBBgQvXZMQqWeP8",
  "key11": "5616xbWbD2FqyqEV9mTGiytUVeHhWof1ud4LnqNwwayrhwaqjDyoP9ZBNbJWt5NPYDhbVX4kqp2x65vf1JrzMHqt",
  "key12": "vNXKbGGMXDWN2b8GpQiLPRzsq5eVid3a6hf5AfbsFrhMYY3r8A2yUwkm35FYaKgyp1DDAr8S7zjJ1WZawhwGMVf",
  "key13": "jze9LP6w2h8U8Sj451zr2Pv9HSgHWRLuQo88AfRFNsHgVjdtos8Z2K2r69VYgLyQ5iXnxWsBN4kwGHXyUpdjmX2",
  "key14": "3BAZ4XK1ip7vCYGBx8o23WGC1tH7gEUaPvCWgyscXDufWZrrufq59JJWSHX5ABEtfwqB3S31SPgT8RSt1Td2KbA3",
  "key15": "5rLg6VkaYdwmXjM9ZuMmeZHjM8N1wVrchb8k9hHCb1pFSCicCvhqpX3kXJbGfL32HPupx4HaJY8zW74NnJXnZ7ue",
  "key16": "2yDEbGCnbyfEMJZ5PJ62bfmrFVQoPpXG18gFrmtrsV18FKT3rNsLu1CxBLiTPBsk3ks4NwxhNuEBSCmV2wJ8U4px",
  "key17": "4QUWC5BqgZPt5Adczik3KMiBKWi765853fYK8Nrq8QsJkVSnApDig6cxXSqhhcpVn1F8vh4w6sV6D19Z3ePqTve8",
  "key18": "5mEMLzEhK8hSsC43skRP5bMbSeipCnBpJ9dd4GmboVPtRhs8epi7VUUQ5F3DZytAn8wXEoDNXyGjEpn11Lt8WQdf",
  "key19": "288U4LWLP82r8rkR3pVQyVVKKoyyyUQio9iCeCAB2eCK4eAbDiLGDgAq9MMyHRfPARuEYgdjTofDruvS4C1HsFeu",
  "key20": "273QeExTT6U4h92nMqQWqhV4JDSJPoHRYBALtvxiYy2989uFD8GgYLAvPAJcjL81Fbgg3Mdw18abQnPCsyNWcpGZ",
  "key21": "4ckkBYpGspsaP9q9Je7WyVVKUpwAXJp3wLJSYEFRgw5ALNV1ippN55Fs7MU5dtz9fuJmBdy621Pq5Nmfucc5kcM5",
  "key22": "5RjA6hN7Hb7vtPUkGXHYaC3tRfmzeEhAda8a5caSbLowgPAhHcQcbheNVUtPgip8jr4txS45N3C4vVZRr11wicrf",
  "key23": "3UTP738DQ5BXttwFUwvJN4ntWtLHW71BtPJeJjgJt1HWDqcU98dSLGfZgKPBPw6REcu6V1Y3ApWk23NNHtXBmHWr",
  "key24": "4QNUyZYtNnaYJUuv1u7bBRyDoWRoS6fHMAq29ZCzME6k9bTDAnxix9D3As8durVzHmLhPhLW28SVyaKeZAU9i9GL",
  "key25": "5C17sEw8h64s9ET6yNHvQcvop8tzAGqHcQhuDR5Haxo764Yf3Wv5sdEt7Z3AqvWYy4141fPkiDYXCRLWuaUB2bik",
  "key26": "DnjgUD7CvQJgreJjW9EG9BegQBAuFGxRkbAb1zAqqj2rrDcHCfpysa42QtDwcA4aaUgsU7Z5NB256iFfk5YFR1B",
  "key27": "2rnKugsCzHEQvBU41UiNUewT1n8PqPYteUXAsNguc8GsP9Mu4nuHGeG7o843mUbYfhrnqxabRubcs5ahFGvY18qh",
  "key28": "55DtBMjpd1PKWeA1oTTncfGUdzUBrkDMTesHGQgNUHGksbYyCvfBkE9aNMoqBEDKvwWKxoo8B93YRymfrQ3ZhxvB",
  "key29": "3s47eKF4iVXK6D8sEqEkg1qR1gTXTEvCEH2vevkwjdUVkzKX25BjtCqDkn2gXysM197vTza2P8aPe9QwXKFQBePj",
  "key30": "5wxdk4GdBymDqZo5vuHjuARRWBtbfYPwv7JsG8SrjzypwRcBwc3GhJsyS6qjX6ZrsTQkB1e98vRu7V4GuCwJnhoz",
  "key31": "4RRkYRd4LiLFadMGrHzSDGMDZQUNUx76TaRGzh6CxjcjyrtTW2u6nNm2YRkqXysY5RzQ3miKss7buP5RN2zyz6Yk",
  "key32": "2V3heWppgah5unDCUkPediv7hq5LLYn5GdAtoFfRpZaJRnQtsk8cgg7naUJR98eCVHxnKwbod6ir1XDpwzA7KW5X",
  "key33": "37LPiUkAGG9pThYuKezhUHKPnWHTQjWAsETz8CvziASGkxNVc22p6k4bj7QxeYadfctF7XbDEXRTuTCY515wg3ce",
  "key34": "nMQZrKLHencs2wZKfKf9rNfsT4UATKDzesseK2Gg8PK2hAjzyRdqfmKMHGSLaKhd7robxcLzvz6mV9956xxpLcR",
  "key35": "VDdxDqwxatgbJwpS1nvBqu2Fzw5eoZReKYbjsHyKsJ2hB7i1mVs8ayQqq4KSuXh4oBvShoQxZfiEomN1RPruZVK",
  "key36": "DrzCaX6ugbG5mhbs8szu6Eg1LYw4SjLypEwGdiRC54oW5PXomHy87chUTAWYXh8FLMTmTCwVWzq63reH3jozbmp",
  "key37": "4W7tQ6ModewmRvN1HokPbXi3ucnub8bqvy2JWkTW2HM1FCMqa7Y7MnDHwRoT1RZpeo18SXhz6Jy6dZ2hqrK3m4HR",
  "key38": "48MT2oP8CcHVuotduQXjTajjhnrGmcHkq1cibfjvsegaxamAkYig6vfo22UbchsN7SWF91igB2Ce9EAh3y6Eewjv",
  "key39": "26VY79uvantHj6tNqhYBfxjDTdNk4tb9sCubuNKueaURogxrtHPxiB5wTfBPNrzbRjpDYWcrTHaMALRe8Ux8mGgT",
  "key40": "dLApSBpHQNhjj47dC3oMPcYSANxMKHL8N5HdSQLyerB68xMsqF3nb73XqSEn3DZCrSrftufDE5bTEhqSR7AgG3X",
  "key41": "45wzBjf5qRacDecqnKBZopPQXNcoi9ZfkrtwVCfRs64182MNU5Ykz4uV2bGKc1u56zsuhWgi2w5Hzaft6N9x94T4",
  "key42": "cmQBjcBEt4UTFAHyxzsT9biwhADjHRDLyLp5px83t5yyMPA6t3czxiT1qLv6j7UPe48nUntUX4caPipjqA3p5fG",
  "key43": "uGnJNResX6jbqiBWBWRCpmYcaaVzVoZY2cAvUvTM3kkoEyxBm5cTxza1hCu5UPShQzshffE1vkAyKmbGRhc1ndX",
  "key44": "7QhqxANpczv8g33kqBWUqYPAyBT8qa6oXTkZ15xjz7w85fGeuj3yfrVC9XKC9wu9iQxrmLZCsAfCSp7aJeYAEg6",
  "key45": "5MAgLoVnK4c97ZFfHr4vrM1kuF5tb2Xr585usJ2yaL3B6FKy5QHbnHFYa6ToRkeDDwiqvd9f8KssXyNKLA6zTwnv",
  "key46": "2J2vuoqNJvYM2fUpjr3kGFK9Li9nGuhxAy13AkDh1AZ7fRE5tspF7ULULyffLGKHPpeegpUdYkQHRAcxh1ECLDeR",
  "key47": "5HHkmSmvguVQwz2uiC76A84uEAZCfiqdxcg4hQF7gGYd9wQaPhArzUeWuNtFdMrZyfcBf83ELbgjYqxVQ4Gd6iwn"
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
