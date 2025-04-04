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
    "44J2q7Fuwssaw2rEHgMswNw2hfHgrcp6EgWt8ZW6cVn9QNrzi3jZ3STk3nZ4WieqBxWzMKKLfEkbnba7AdStDYE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8c6AwiiNeBKspoHq9HhLtKGifAwqZihE8hFDVw9HePkZxVP8JLhaSASAnhy3fF2MnamW7rKJYhnrTNb8Tqha8i",
  "key1": "3zM5aTvdnoegVbnvzR5Wm2ofo7WoqwmvZMxvNqMcmYY3NPNFS3Uen99qCfsWR3RGyT31A4HKECRx2NCBV8dFLPaf",
  "key2": "4yX6mHoGjqVnG8U737Tit9X8Wf9Nfd4Xo59TdeSt7jKzx4w6WPyprcWQdWab2TWis9Rapdf239Jcz9KxSo9YhqbE",
  "key3": "2WVMEpZpLn5CH2sHS3HWjgA5GfJhiSekmMPDyXrJY1mzVdaWgfoyEHTU6DfxcgNRFjDTsarch4s5iAUHRyWXjq8b",
  "key4": "2xLg1CLndkqBkopXXUQzzCe9HrieWDSZESv6imzNQ3uVnCUczSxoXr2GverPLKukSpEv42ZVp71n6XoP5mFRUkCn",
  "key5": "45gX1KPypMJXZRZoFMGHgyprvQBDvhUViUrHhw9gnZgq4Vg28k1Fgaa6wHcvsR73X4P764zXsJimjaE8Vfh6riyB",
  "key6": "5Pk8cdiBKqBRo4k8wfLG7UkaUWzygt1siFLz2o9g4KEot7u8Nozy3qh8Ke26DPeNiP1RpK2PubQN1WDCytH3YkcZ",
  "key7": "5qZ24jGU6tRU9Y4c8NiqQ7LT5H8crJBfjJf9f2EqE2qTzuWtbNdBk8dpezb1ZMMMh5bWMqrwLbns3xGtSzdimuQw",
  "key8": "3tsBcaRfmGyr5BBXYNVk8uv2qwAGTHpe6LtVs5a8pkNPhcotJfjXaXzShnkEAj8o2YUbteDUznKYKZr4FfANxZZU",
  "key9": "3qDPqWsbpSJ1189m6ktaAs2kD43D8ezfQ7aeMrXdTc1qXcpreWSbZiex8ug8e1YijBwzjuMB8ViCBE27fg774Kxq",
  "key10": "66GS71GXSfrtytuQ5LwUHbvGhD6xhCgcPEyS2DD1p37wCmTzzxpcug1wp1YRXDmcHy5jSdQFoYKAxwywmRQgeXxd",
  "key11": "cEvW7q1Yhj6YBX4qVzJDEwj749cNKN9q7yqSWageysD8J2s8K9wjP6M8Wr3Ksy4PMqmTzbDqrMqzxVgbzYodJ1k",
  "key12": "3q7oEtW8tvVAVWQZvvRVJYWnBFxLPRBmkGDp2EQ9TzGu1qZiSRGXGxetyQZvbMWAsvHNGQair9HGrewJHC6N31Nd",
  "key13": "5FPPSkXS3XYSzLxQmhxBoVb42jVwH4CpNMJaii61fCRrNA4oocAjmjT2XyuabdWqHKky46PLuuf92Huw1uzkVB6s",
  "key14": "2eh4a42tDBunfkBB1nkmzUbkB1fDztbs7SxUKdZPRiQcJ1XaBrMoxUVb3SYdSWPmdb2gcZXqfprx2eyQu2j7sybJ",
  "key15": "5XcjCG1VtfRHntinW8DcadugQLpSDCBwg4tw99xYcPanz5xUxR8JGLy6Q8riv9sCyBq2zcpFr6svcGwggFaJ2bDi",
  "key16": "5rTd2fop25Yq74hsKbEiWXCegouSWLZjaoSQuqG4LbBts7VQE9p7b21RZBGKRwZy47CNz53kvrnjkRTw1cRegBzM",
  "key17": "31ytEjkp8J6eF9ZD7U17pRTPNzk2rmq2AiV9TRzYiqpQCrr9iPq4YktP4uo6Je5ANqubY65HwhduWZuqx79oDAEH",
  "key18": "SrqigSSXqDoqqjtL9SBTuBt8CshjqZsNfTkUPENh3XDr2MjUv6epQwzJD4CFRQXTpiL9xQkYRTymYy1cPKPpGh7",
  "key19": "38qyxRhgHFi5ntQnktAciwDTkiw2MUqp6KHHMcewn2f1zgoddjXm45ydnqbqKgumWE9RY6UzrxubeLXa4yUTpfLX",
  "key20": "49a5FR9GT2nx5GUsbkhVn8eMD3ac4fsW2KcMWX4NLkgzfqAgWCBBLGiKdxqWux4zVtDrwp3aX7xv4qAWDWK6Fy2R",
  "key21": "CrrGwBKcYqTJxrGjm29fvSYJxSDsUsD9f5QLRiDs9ciTzxrT1rD6p5Z3v54zZcPu1XWWc9yMSMGqhEb6y5akgkV",
  "key22": "4VViZtX6BT14wXbn1KVHywbKAj1CyjZvKhePWuymmDx9Rae1wVbJBKTRcgbvq4S1h1EERLpFAfDexw8F8VvjxB14",
  "key23": "2J3naQywHX1NakvcDv22t5rzpYfwUHdD9dYam6N2UiBZtNSUT3Fn9qiLwUqvdkZcHZWW2qZUk8C31V15WX31V2cz",
  "key24": "5YJEnnU7baqnPRSbdJrBrzqtWBcvGyKeaByGMsxn2EpvgDj8r9dubN9X92QAJhP8Q5JtBQ8e4W3PFx2ZkdoZezfd",
  "key25": "2yVQQdnUbY6P3XNXDH1J1t5Zp3ZQ85U5W5GYajvsnXA6LLE3oNykMFStQFmHdK4GhniEBf1HDHr41kBae8XYVpsS",
  "key26": "2DaMsPHFG6HQD9G1VVcThWyUsVx1Y1ENA5djqJuojLkWxShfcRWd5V89ybLFULoEXFXNxSdATt5WVURmnNCXB6sd",
  "key27": "TTSmgMp7mn5KQhxr9RiuEgtYVTRdk1oAGF6Hh9u1txYLfMt5ZtyHMCC1Yn1q8fW7JoxgqSnsebhKv4Z8nmffh8e",
  "key28": "3udcqp72mpnHYR2SJg3fhHt9De1MMsoD9WTEsorvLK8s51z6DWCn6wXh1Y5tbpzJA4KS1RKVUQFh2DVE7kTamLyG",
  "key29": "2o1XFWNvzeBJjXDrmW83K5HxCAcTmsV3gGxqP8YENE5FgYy9oE6BVzLz2kgg7qvJLWtmTnacH3UiwDGsFEMP4F45",
  "key30": "5FDzSADJjpm4a2CJecKfLk36J4CGEPCia5GGDHbTwKZgiHLmvyNN5Kb5Be1ZCS6KedeLCj7nmUC34FFEzWDc16TT",
  "key31": "awyat8mPzdoAFXsehRM57a2yzKK8CKDnngh7B8SwyjKfyfM4jw8TCyBLnS1EVWZhkwTLMZ2MTZ8kjWygdHLHiyC",
  "key32": "1266AvbH7321cnk4vpQuFEXDs1ug45hpXxWz4DxbQ8a7qamQgCi2ocG53zCA6g6dFvVyGrvQRLcagRAJjjqsZT9K",
  "key33": "2HVfoyjXbhcueFdjvAMa526n5eWS5vfeeMfiYUnDawkiitraLbPATEKAqRauq3xH1czPsWBYy3pmCB3bTSqGkqRR",
  "key34": "4uPurHYxrmZFtBAMchd4FqXi256YVAPPiPCSqLckaEVsojzm8GEXG5aB8qAnNya1VCQ4PSgtNYY99npkRqhWcwrp",
  "key35": "3cSBQrk11WSgwmSoghP9pTQ81UJTUc1vt7UkprAfQxPvYcoMQ1z7U2Y3LYwqDQEYVr6Hdk5dBFr1TUy9Gn19qsJt",
  "key36": "3v5DUVjK78KD6zv3ceTfJce8EaTGCRVHXiyuwio2onUHDo6mbrA7i7JUMm44H1J7pMnf27WYoe9Ygmwjn38NRTs2",
  "key37": "4zmQfRCRNThEPpjUaaYBcQ1soSjJNG91TmXcPs1xhpiLFim5twvQwYzyXfx749aJkJ7ei94GTMDzZPF7FrXsy3Je",
  "key38": "2PLbAokUASE3LXYeyFpFdW7swc9FP4XY9pY1ugpivnwEvAkgtKRTCSADxTufnDENZMc4MaSDRmjUYeNzorhSE1jZ",
  "key39": "2khBP3mAtK2hcaQ8b588JhzSVfDJ1PaC9mVCiQTkX5EmpHmE4hbVGrojneB4eK5Ts6AcfmHThqb9amzr39W7YJa7"
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
