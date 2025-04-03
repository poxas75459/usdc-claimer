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
    "4rsvWP4QdQm6F32W5pj1HimmYWD58Rz4xXcY6MgSATLuHpXY3utN6JhxNmufWg2haUCv63HHTi4Kq98XGytNu5pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfQ2CJ3mm3hUr7HvBQuWUugzC3ghgMsi7j6F8TeiTuDhBp5GqbW1UNHL6X8NCsSuW9DrbWwYW4gPaeAGztaHY1N",
  "key1": "4djZFgFYywefibBfKNRWypixFFiTQFGAHM2RTj9e87TAaFCk9KVjwZcEuFEwQ2YCxfoSusjPDdqDXTYWV5j2cBfi",
  "key2": "423gXZELDwWT2sxXGQHKJTVefsLwQK8MdCDZB167GrTEvbsaked37UQXrEuNxQtn54fLUDQVf24wqoAGat4T6Jc1",
  "key3": "2TLN7fuNkxH8NkXPz66z3Lu4dSG6jSUtSTX2E5dNKT4SfEdbLxHoGFb6W12hGps5Y8g5pjraB8X764kTCsWEXasu",
  "key4": "1yrihevTrsWBFSncb6zViwWtmNSUt62LtgG7sY68pjmcagw5bFenog3JZQKakHA3XrjTJKZCaU8oDTVMck4dHnx",
  "key5": "4uBusisektC3u71hQzd4DPUnDHM6w5M3wtLSAErtnKQPvKYqmk36sz33gWBzfrTFH88wBSn8CecuC91px38LmmZv",
  "key6": "6kJcH3kTTR2aSQ1gS7N7ZMqDKFMa1ozmixyqYZ7YquRoRkTrfztVVQAxxk7AuirfS6vGG1Jw6ZJAWWAFuc7HvpQ",
  "key7": "3C5uhdbwea7ofAiMzD3RBHNoq1UG3RLLdUtJ13uKj3oTRzZfne5srJ1YcxdYEpKxsskZbM3CEgEegwtJbS2cnGHF",
  "key8": "3uvHiy3XhiKF1eoQDMtixyKq1k5jkomj7H3bx7eRMNBZwS1V3rB9M59KarGnuZNrqab6H23sPazArQFJrjg9LcVX",
  "key9": "3DbDCSx2PekP1iYLvcjPZvNMXQtB5dM5M3T881dSfEMeGgs2v1bCrZmPFVgdqbZTuc7ewKJ6ypCNUBx17q6JpRSz",
  "key10": "AVp6MgqroMeLDtGNBe5UgzJuNaiYywUcwTa12SdCW3Bc72rYkypv15z3T94kUkzyvWCc4UxT4DJG1kyzoRDc5DT",
  "key11": "QzREM1YMGiaTMm222JRg3mXtMzN2Qru4cLaKhEfoJMqfFT2cDzfwkHxiJ4au1Lmm3iQNUzZ8DbAgNJbkcqmZYTZ",
  "key12": "4sxA1xow8k8KKaBEeAbZNsXL2qWVZu4tDkQ11aHthwXvB4FVXMTd4sYrFRvvU8P5v6hKi9K9JCU6do8QuCibCm2z",
  "key13": "AJm3Zq6HiaVmVLXqDhDBgEivo2VVyj12jAv377gBAxLw9GvxpR1Hgz2ohVM9AadU6zpyRnGzteQHDeZ6cJh88Hs",
  "key14": "BauYExzzVDSGe2domnpFhwHGrnK2rHv69DFhtkktGCn25Cq18rRhpgLWppytp3r7XXLjAVNZTDG2dEt9bzy6tCX",
  "key15": "2hRimjiYNUT1Bbi3H9WCZLK9DLkGiGoxvyg5ZJzarrjKTW7Bcx5qh4XQ8w2CurEwEmjZHczXs8VmL6AJQccndvJ5",
  "key16": "4MdYuu1i2G9KiDXjP4dzB3YZJyMoZev1NzNjxbyYATZr28vWPeFq6D85nEJU2d5qBwkVZ7H51BDJadLKREZct5NH",
  "key17": "3XGxFX8xfLoCyTV6GmMsP81qExTBqfMh3UvM2F8Uk3SEHSSYppn32sWnQ1TnCbk3eK6T9Hs3eSpTdRdoqNSEcw24",
  "key18": "4JfkJFjnPEC2Q3AZCZTdvqipXtFaSDw8ey4hqf1FytgDDnPJvZijNS3CXwbGSDivcpq5WyvpEpbYTUA9NMBuCUFd",
  "key19": "4Sh6iZAN4N7keAHgyoiFSuGpgyfZighcXGhv4XHbaS3EGcpna2B6mZrcJY4EYvdu7Cxw984sBTJHcP1TeShocCFL",
  "key20": "5cTpnoQFq1gPwXM39XxwPMhVbtkMvWLXHWH35RszDgNemx41mtp7o5SDKVzh6AxxVu69jzpfNDYCb66nt7bnfRuK",
  "key21": "4G5myNfb7yecycStGgmnUsQMf6XMkQRyia6gNk6hPPiehZyGiz4FP7jQpPLWr3nXJ7uKFM8XoAmWqm6Sevg8JfbU",
  "key22": "yJCDUTa25t27mnYAYP11kWA4hKwCc5qpsCKEZYrYpEiRuMubwkrKK1fTB4GwUNfjXwbj3BMR9niuTjVwjh7K1GK",
  "key23": "64m5DjZMQYX35Lr42uAfB9b4Bun2wFwgtGJwVgpPHoxBFaT9jWvA4icYDs8cjevrnnDsoqDDSBmiw2hxsBfC9Vs7",
  "key24": "5ZRBzYqZDUsPUTHY9k8ANitU5LxWHaoAtfAkF23tmeRX5HzGPWao93YkRLSHHyXLbznW9wxDADaFxhwamxLVMCtY",
  "key25": "59U1EmVcxa6sCxbsRC2F2MqWyfsXryRxjBsBB17cETXUpQ2Rx5M1YsdKe7CaqQHMLhutYfYMqeMnutsuS83Zjm3y",
  "key26": "u5LF35VM3G4X2cwjUQm9dEATKZfa7FgrLHfz6CFsMTkZzvAY2W2WqyM6E43b5J7ksGTX2DiPXEAvHkshDVmpovx",
  "key27": "5YRsAMhzh3gm5Fihz8bTmXd5YSQaRgE9kwh6iMxQqyYQ2Y3VeaYNoLWYV7cnXX9D92s5nXJmsXcs6tBg83HYJUv8",
  "key28": "3B6Vpetd6xn36im7SB2McpW6bnNqbzEwj8CRWwvgnEkSzEcjQaA9SUvHTh38TgdLXVnKS67b5y5RT63nUjoGgD42",
  "key29": "4PJqT6Zu15J3QnEE3AxNuyEQvmwBV1SLMioVqprnhd8RmLtSj7etyxd2nbfh3jwC4eE1BjY8NQkbdbTk79mM6xGj",
  "key30": "25cWXVA9aQtJkYcd3y1vwuMag29DAUw8i7JvBs1pGcaApc75ZAucud3Y3yiz3Qr2sjw5w4sd4gCPFy7J6PVMFPiP",
  "key31": "4Qfk6ZZtpgFi5MwZ3XG2kXxv31RC6oCVodYEZQ87eBxwnYMHvzSnqWAgSHfQoVGZtfyeVoecsJ5bgk6HiinrZj7B",
  "key32": "2tqjr5xfQL7VtHDTLnrM1uU3Y3S6uWRWXGFLsfTksv43xjB2DpXx97JjX4jgcgf4gG1CHqv3V4zcxHrqU7w9RWMp",
  "key33": "3cYacFBb23Wv4RTxbQRiTbJWowvWGeUvenRwjy4ZttsMyac9yNLhkhk1Rwj5dyk12TAFzStgLmF5vyNJak8fXNF4",
  "key34": "MbBuMyHzQZw3gTPXyJudSexkdazn79dTEN82dpMjv3niJ4zgWWDNjKqRgyqbwAXKzWPnBm1WtAEgyp5Q1j28Ug3",
  "key35": "fqrEt2Si132LaeAG9GoZsCD5aCRBkmjD7VhvsDh5nkTyf37ChBWeDX3oxHuPHoAxRnzZxaEwbp2RmirSyqFfae7",
  "key36": "VJLkGP73C96Eh3qFYk8K3nsSuadz4qcRrbEiJYsx3Fg1TjWvc9c6FJuCL6Ns85RdHPbbwPrRBERMiApxZQ8gfbH",
  "key37": "3381vWGMhrLvdbLrfLJc6rTxBmbC7cuGbtLzTfbJG3pUuKgauUKxUZpfwYXh2AmcvRRgKsye2tpat13r4yyxYy13",
  "key38": "5sp3xYXKxxet3j7RM8e9y4HWj6u8592cf6Uv1YDf4y2tB7VYj2q5UuAjuAA2eife6piRoXMSL6DVGMZ91hjVWWD4",
  "key39": "3aUeAT4W1V51rXYQ7r42Yr2aNPhaaRRN2yDEt27DvhLfg6in8xpgP7jtAss3auK767gMrQYp9VNwXMkkH48v51cf"
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
