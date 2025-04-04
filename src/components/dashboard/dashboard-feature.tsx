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
    "62kHigrE5W6RrHM1ib3dQFuEkbuWjQBGiWj22Ur5aqKTMufgo8xbnWdvv7s6KVjm1Pbkd3HPfU1NaxTTpfgpaaar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UgF73FM9ugvNJwRwVEaEcZfz8MDyM53fF9kkzGZ3jo5CUD41JLGADvATab2L4ysZcab2cEs7CmiSFpxodEwwre9",
  "key1": "5wgyNGuq14p8NC8FuhqufVwacVGj3Y1Q9bbQh9hLa5JDy2VUeWS8AxwKM4kGurYsTmN2YdD8ZqHE4zf7S2mNfNqy",
  "key2": "3wBjGoBqQWHrowRJKYBkVDNavTJcovYSvScoEndzWCar2tiVeragMZ8sbgyxVvzyPwHjveedBu8U8446Wma3Rsao",
  "key3": "214eV3675J6jBheeA9FsLDfirndCVtj5WH3PjVuSPkwdY7HGpRJRxM2ULrCVkGKgXt1ofLYoMVHfptq9TuVNcXbC",
  "key4": "5KLLw5ZrLPcCxEfLvj4NA3PbZRHdPyMoWvN8srjNfdeJq2AiAHFmyPy5B23W3aQxYxPQokWC61wiZ3yBSnfUZjw9",
  "key5": "3c7PcQkPdnxLzMiD71H3pNuex9fZyBZHFvYSrUcGENeFBbsPnaYxBN3x48wsFVeqMqpVzbYfQpCinUbSnht5Drzu",
  "key6": "3PA49iwNbSBp2LN1NroSuL3CGSVLUzoR3RK3povmduEd6Bk7987fcKXbnBrTMqvqrnaP6rVacj4koUVZJn9dNkbX",
  "key7": "2rgDBGediowtFUi8k4VQ3auWZ1CBiMUnCErwfUtH9XhxWkaAfpwGgbtY7b8EHP3tVvDttjPk47KZrEVXnsMhfo1x",
  "key8": "4UgkqmhE6dnx8jLs7gDMMhvoyNoxCJuTmgiBzghsMNfC69BLzCbTTkJtHaBxD6cjpuXVtJFZFymKEZSpbE8Nn3nr",
  "key9": "2E6D6JYACzTER9wFb2QknskhhmyPZp8t29fQJxED4ER1kXxKX68yK7V2TNfDysn5BhN1NTUAi5kiqUtFxv7yFhfc",
  "key10": "4RNSj32fSV4iSTxy9kMEeTeL8bEeBix3XdLj2t42jdZH2oBYqpbvkx7CpLJ295tkvGuD56j89DY766vr3cCbbCsf",
  "key11": "5torwxCpqbsNXwJnmZ57yrYY9P2C4au5xKU76CoqofKMfsirdgjAWevBzsiB3coym9CmwEXTQgs5iodFcLAATuT4",
  "key12": "4WtEe89ho2UuGx8bx9TUuxHvsovq4To6KWPDPv91XmXcpV5hc6UXYEay94iVQ2o7ka8isGB8vfb6cGWrA29UCM28",
  "key13": "5hmzz3QJx3LsvU1ZYCeVT8TqrCXaG2zKsYuwVrd3SG189E2QAiA2DHwQc7kHNeKQb3jz9u26mMaWKFSzXsFMYHLz",
  "key14": "oyR3TMVKgFAFzH7V1FVNPqzKBhJkmaEqf49VRJkPvcrF3MzrYLjivQE9FWwrqJz4BQ425USZV34df3DBVZ3v2Cg",
  "key15": "58M97D8iTmpTdkSVWGCHVXD2YUG6vfWcsgiqF4b4teJ1YCNURxujKds67TtyuDn5a9fDC1rMKm2WXG1w1tncRuXE",
  "key16": "5Kvwhcga2B9SQApBx1fyzE3Y2ypDe17RifeZEkQibXhdNnv3yXEBatgb2fmAhrKaZnZVHYAPaUT8z6AkKracrYDt",
  "key17": "JFDAzPUw2QhqUT8k8q2TgZea7bzn27qMQnnuN7XSF6eq9F2iUvRgwNKbV5V7adjfLsphTP9BC6aiEA3wrSkEzT1",
  "key18": "4uJhxEhmMPU9LN9e954PjAokjrTppSGr3ieA7m9am9wScNVGJqB6XRyVPQJZrvTMvxrgtL9n5qLSzzVnCVztgYWK",
  "key19": "2FeNin737sEq1zUeNC4swwzq8bapUXG9zs9yoiYZvFVKM5Cquf7gkLxBMFAiJWhkMHUaff4Q4Adu4D2M3EvMSu5S",
  "key20": "3JEJr3nQ623QfVGGrmA5FDopRMFm9NPFuJsJWESvGia9HDAgVhPuqf43FcUves6SnSdtk2stLWWThXjRedfGdmty",
  "key21": "3KrEi8T4uNUCnc7fKTbrnicLV4WazYrWRUWLrq533ow9iCDhMxFVMApPYy59SM1g62hSHVZRMbpK6VfbZSGzoKQV",
  "key22": "56f1yntP3MiiHfET4aP9onYwWrumj3ziFf1nL8VuDn4zawNADecTrJCLb2RTdAzWz99LAAobokEnWk4mBacHZSTi",
  "key23": "4CQvizEGoEGQaexVv2yx5f1CEiMuqMsc11my6tYr8Cd9SkKosK7HtFqtt7nZARQ4D9vb7XKd69PaHv1imyxnDoc3",
  "key24": "4K37bmKtZNksMBd6cjjwNfSWvv4UjY6uiP7QK1LdjVJ6oLJqnMhrZpVgCJocQcSYmRu3PAiTe71xAxahi2UdW3Pp",
  "key25": "2KKNY8KkaXzZ92EnL1HqpXjKG4JP1nEpmCD9rCoduPQHHVSBzYeyqXcGokYgWcmNiQRNcR4EwzAyizs54dkwpR4z",
  "key26": "2GPkCY77WABM7NFK16wfGRKr64GMQfsE8g6v5ojKEYqqf5jaFas2to7ZsBwcDx9CToo69c1rDt1CEfpXEA2oQN2B",
  "key27": "j1fuQvsLiqhzwRczDm41BkoApXdp4ooAUstQHANgjXuhLcZ9osfiedePiRtTVeBjj2vvXqnQBTJan971VgYwrcb",
  "key28": "3E5mEH5fHe9eDoCwY1ncDddmzWAA9FrPQkRHgZZoErpcVU2uyAdjuX6Qf2JaK5wyb1VzJimte49tZhjaQqgQnYVX",
  "key29": "59cL79CFfX6Wx7dfaBv9p7BSmH1EysYDo25r44z34zTHthobkJcnefp6mmQJP9kWGTyFd5Gda9Yy2aqrnpkqqgNt",
  "key30": "2JQAZprgU55uqc6FXkwZDbEmkDSdcdTgvPLruEyw3MVwDErLaCed3ZLtcHGgnW5U4w7SeyxdgtVZEWJMbkvdyhU1",
  "key31": "2uyqHpCpCZeRP3FTniiHzLJjvWhmUr2BhhySg1KVECTRRSSnVjGThBtF8UtaQe1SH1q3Y4J5Kqkbz5niy3kHt2Cg",
  "key32": "53xrqPziSe8jUCwZjVjZGgDnTvXMNouwnh1wVYFruJU3JJAg1HuFFzhvU7HBYJp3gNDRmvpjWAXymYVyZrPFt2RP",
  "key33": "3Z9zK3t6moQq2dwoZEVHanQjKM1mQBFTRDSuVCVuyteAAE8B1t6n8SifQHqYwPp7HAStQxfBguwmqGAxP7qcPrNW",
  "key34": "5PjCVygPGMM9jy8swBELTJtFJSxn3i9yQArc6HvLYFrsy2Fd4eV2dRXuceY7AZuPQMzUq2b4VsqAnQuoco32Sd36",
  "key35": "5ZttCm7drCRKrqrJj7SE1QH9wfQgxhaZxCwz1CPbXeZKgqmTsWSfxZ2DyUthoBZmoQcuuL17zGBrwxLQMxsV4nqV",
  "key36": "2KcpzB7iCzXdAaCHFfPs7Cp5jkBz5LUSb5U9eNTppQSppDz169vegqfX3ocygNaSy99r5qN4mXQsWbjsBjCDgmPr",
  "key37": "2McHRr39ZZADp1uzQQTmrhcTEAmFqCEVi9YznByL7KHbhKq8B6AFZJqCFjZBsB9X78gjFURws3hW6aSEtx15W9CS",
  "key38": "66AUZUxvMvsaQo5svRUGXdwCEesknUGkdZj7JBWvTgKU995nbCvZb1usKULQd3db16pbuj7mkX1wPruAmXvyMifg",
  "key39": "1unU9HWVaW9H42PM66YyRZXQt91kEmnWwZy9idHueEmosE5mbWAro6D6mb821n1SG33sYgrKGUVwym4b3WscekH",
  "key40": "5iT16PdwtfG7yUmoouHabhaDPtbJhihE5t6ZS4gQgZx93Fn2uRsg7pLho7aqmSh5mdqQzTaw6tNNwniSwMcWj9dA",
  "key41": "549u6mu47TizMatxNugeJMvMJz4NDLGNoPXJNCSYezYmrP6ejRa4XtZNrT7kdHRxEQeoXVooSWU4sGXJxvUxMfh7",
  "key42": "4YDKAFtk6aNwu1zKHYB6R2bKpER7nPgzjZDD628qtc9kosNpQhgUoYviHyzwnp54F4dExaR2oizEENxBaKhurTp",
  "key43": "JZeu1CpsJfsvLTzWgNxmTSBweLoZk7rEyMNujPfhUrQWtvAuiJvr5Hho9jbmGdAevq6SLjFJC1MGrhDbzM7w4c3",
  "key44": "2W3Y4zocXKweyC9ZSdWSfKvAEATf5qaMiEdZsDwcgVVCgqgk47b6B7wm9FuBi36eXP5XoQLzFzdwuUvS7C497E6s",
  "key45": "5b3BBeWfnZsB9LVPtZA7VczDaV5DXE65CKXpd3fzDGo4iPtRSfFTQNpVc7HU1xrwjQSvKw3Z5AbubAtKNY9ps1d6",
  "key46": "LmfPuEZPiMSdfrF9P72TYu2quSLtEc5E5XMZ7yViPKDhNEVEHGAgVyKqDEGbq62nquYE21RVnT163sLXHvvdB8a",
  "key47": "3aHPKZXpYXhVBzATfA65LMkjL9AWY2eYDpnWvnFeNc13P9aCNbVC7A3FuscKz7Rp9YsxFfEMrbuATjeBVH2SSHm9"
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
