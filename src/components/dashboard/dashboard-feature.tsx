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
    "2EnZJhpK5F8E3GoprVDc58vBZqbzPm48RGQjZ67hbtxtw6ivPzP8b8wFwAPnyft5kyLgmWXAwDpsgPZnSMMPiFAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3apE9n4TbWJgqNFzkbiyjXqC49JVBLmBY5qWXDCPrYiMagowRFJiWaueQKwHYQwUahF4x7o48FaoUvD2npEUJxT4",
  "key1": "4Y5kFHWjMjFyLjSRvy9t6x3RstR32EWqBvqLzoV9mSh4tTbrqmQBmMS3ys8tyHGUX7FQfNsHnV4wowncPVhVR4Mc",
  "key2": "4omWrAHtfJwtz8oZmMsfLvPXNs4df5SQYu9Fk4ZiPuCjiUVzeftoDMekFt2zK6FHKUQnHY4gC4pWLrKFcv9WhYhU",
  "key3": "4v9vEP43JLixcM8Sqn44yFiiVYhHBBr2f3K362be3orPPG7Wr3tR68k2DnLgHEZwX7tRxipvkTznVSw57e4hbj2e",
  "key4": "4Qrjd2ppqLcyuJZkEWSkpeb6YtYQDFxkZHeEHzbkPH2PC9CjCYFW2aRCqnnTcgTJ5BttsZL28bReQKx5apuywRaT",
  "key5": "2A3FNSQ8nkPDwBWRnhgCCaTWzBrPVcs6YY6srCbGHcwv5NT1FP5Fg8rNXHMLKyfY5AWW5DFAKwQjFWSmiBqsw7LW",
  "key6": "5Q9jZ9HmnfPHFaVxPiShBBDfmKqL4pbSTrPdKcU1Bz3pnvRnVoW1PUeUtgE73mDoT6pceuzZUPmrrKDa2m7sni1f",
  "key7": "xXYNuVN65sCjCutvKN4SG61NVo11WMFxZvbGi8k8yLKxmy6YePw1CCPQ7Vuq8Q9BBJotycoBA2aWqZsLuq3kTBa",
  "key8": "5yGgqJUnG2C4PHA9iKkZR7YNAe1AKQPac51riteHd8UsLd5akhJuUSh1ZFnyTSHTds62QgLYMQD9ZBecHc9TxE7q",
  "key9": "2L5794dTkpA2zis5Nf4YfZLT5y4xVVaYvsoaKJHMTNu3UEM3bBkECr6Mf1pJkNJNG3tjk2doVPhhNh8GgLw1Unzm",
  "key10": "3GvKccKHwAxiinAUkFj7QL9JFyVVz6gAs32XYfnjpq8gGSfv6hDaeEV83AYwL8DDzP6JuXYTkanmy9QmCVfDR41T",
  "key11": "iqeo9o4sCD91N17ifWUfsFnJQWhaGSfsgf7LJ8qjwgcMyLWrnXcGftsDZt4nrKXJwrf3RzxTwkkzwboMgWrKrC6",
  "key12": "4NutE13JgnhDSLLjmngBc1Z4aaayt9tNULPjh7v3KVyNThKRqqMSDkEpffnsJ2iPkLaP9Mi18Y9bNx6fvFtUmvMf",
  "key13": "36LyT611qfFHM2A9dLMX79fkeVMukYMRfp7bpxAng5rWdQtnaKK5nQtqkdUaiLWTQSwiSrTsXLdhc329KwAY6tB9",
  "key14": "iwivFv49LNjnJD5riKY1uSDMPoGsco6NNnmtbPwwc6nQW9JqQgc8SyNwTuJJcjMQUCsxn1AH7Pp4goydjRx2TXC",
  "key15": "4ab6Mnq7HZfYJ9t35pKTxdZ4dZkV2JmewMevHaX4jyBXqDUWt47PKhvpX7x5jfz5yi8twzj8GerNEBGRg7qCFHHn",
  "key16": "5z2UTewhiBdeAe37tDbn9oLQCaf5cZq1akaYrNHLYxa8H6bDGYSFsmYLkFSoXoPqsEDz5Bi2aQCJKEAorA7bQH8N",
  "key17": "3EwosPGoWw2mMpsfCqpmdBiKAyRwUiSoH91WEc5mxKkSqfEQtn65UKPhggCJQjg3Ekghs9z1yBKQ2kAG74sj8dsL",
  "key18": "47mw7qRwkq72XRfHfqhfdAdHpBWVNpSWHdykDq1m3L3JCkP1eMbE2gXpzbs61f4PEbgMwHdtQSYanP7PCwFdmTdS",
  "key19": "EJqD4sAXRPXLXPL5mZ1pshrgvsqqD8AZedfYxXuRBgTS8AbopRf3kNtYG2qHSozYXdWXYcz3RkV9cX2SKEFdWAt",
  "key20": "5HRhTUkUbog8Zkrx9q1eeNkaLDL73N9dSRLJdYSUUJs5Ak6BtnL4DGVsLjvopREygxJDyYRcndYZrMVKCommzXDi",
  "key21": "33fwVHUMk1B6abKPEJf1zvTrNFtSC7dn2NtMW8ozKvQsxs1UQArYtnHW5p3eYQmAVuwJNmgqehdSvCVSsv4MUfUp",
  "key22": "3mkBGGKA9Rs1SmmSuNN1M772xYsZB9hiMmhniZNXGpyTKtAqsRoogFrxvbygtggDuZmLMxxahCxWk1nvPxeB163A",
  "key23": "5CM6jFV5CExxFNRcNkt7Mw9C98Fj2vs54LecVntyxZGWXvS1P4kWc7FBgFcgf3cKi4yhJQPXG931yXzKza36GPzB",
  "key24": "2DrwDjeYhzynH5ihFpVdqmamJqy9tZDwF6XM2jQVxRoJX8PDXAayu2kQ4gXgvBM53s6uqPetMWAn1yCBWo2x9oJR",
  "key25": "3Bcr3SWCjJmn5JGs3zRHXDs51fpRhCmwWFpewe2gxZnnus32aa5y7SsqLk87XCchhLx7QEmDreWLQHw3z1Zzqocv",
  "key26": "3KZKmYyTDEt8W3YuqNB77sYhtRQbNJD6WSyD2T4KEPkQcpybKuj5qwXN4T8ibp89b8RDWfcW9ga4dZe1bsv1HPmT",
  "key27": "4PrMteoaDQdPWvuMuCDPYCdgxTm629dhXjJgPYXSrBxdkx8uYcanYoBTNXHVZqJDoDzu2vTpZiD6yTpfFEvNY365",
  "key28": "f5FaKPUhkLt4BDFXacC4ATmEXGWCJnuuycEkWpejEZYNLjc2vneNvJ2EFS8M1TRs2WXJSPNfRf918qbvUvH5Qpi",
  "key29": "3zpYKMGmeYoig1LpxHNutq989x5oeeaFnf3ypTghJX72DUL4Vin79qPYjKTAPaqzCEyqk1KAc9oDjwYSeZWcL8Uy",
  "key30": "5icSMRHW75neniwwiU2C6S3jzSkyT5zAgWyHHFfmAZbRRrPWEPBkAKum9611r9juu3Z6Pi2r1hfHzRR15GrNFHpW",
  "key31": "2EjARPo7ReNnXAKrjjZctGQujSqLZP1FqbPh3iHMex1c5NuELJUhm2YnrzCpL8t8uUgfogrSjvxpg2mvkJc419JP",
  "key32": "6yRyNXA9nTL15LU3zWTniG4RaxqxdSvbPWJzXtbJDnSuRWbGWJ6Xz3yS9nMsYjN5W4XEpdw1re36op24PKf5uJa",
  "key33": "5ipJybtnxhJc38J9Dv2igRGwE2hzF4WA1cp9EaeQS8m416MYvSMXsYkBjuoqhthkW99SCTLnWSRgSBEiFfPybfhe",
  "key34": "5U8maPjH9iargWqYtsGUur2PdGKJpTgLt7Mt9ZA2D83m4d7BNrTj8JukJi1DT11x2iyW5ZiS5yTTuq7YRjG8BokM",
  "key35": "4i72NChMHBsy9ZbFVyAq3nqnJyZ7qTxVUBZemcEWnQsaxdfMGpk6qzPfcgb2qwT7zyin2JLHuk6EN1YBg2k4oj38",
  "key36": "4LpSXQYdNF7mRNqzr2tMxJpf91vpqu7rM7TzshzT1VbfaqJr1SsLkvf4tQofaHjZrstJMHC4JpKQNkq4mEttRQ3Q",
  "key37": "51XxwqKWt68S8fQT3pTA3F6BzK3B5Ro92idKRBdzFYAHStF1uPfbFXGaMhLHHAeFPVtVgTedxNnrk22KuqrX4Bhh",
  "key38": "2YRxvpkgAMggYdbrhv15nSuqbvuRoDU46DCES15tUA8oy1edDLM7ibhzH5CVf4nPzGc9F9k4cJLWYaXEHsDsdTXL",
  "key39": "3474WFdZghbZKddS2YiFm9jWx4xFnFeV2Ct3ZDLrEGcURYUVjZapxjSwC3xEUGGzr8cSFims4f94qDfmTxGFjPBw"
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
