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
    "4KLDy8CuFCnGjeCFYZZpe5LwyFKZ1m4bGkQoNsAv8Sz9mtBFt5anz1tfdeabchGwwcPLT5yQSoxJdJiucVNUh8AH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPLETA7YtrURmRmYQvquDiArQHD9ZKHiiHhaV3fb9Fb2LJUR3ZCYXus3pp1CQSgh9pavhQ4rrFMAY78ucVkoxa1",
  "key1": "3V1po9knM4gcanVLfwX7LD1tZXJ4bhvgCiXMGmDnLShvaxXqrA2aB54khAT4GJmkzheqCMpGQPKLR7ZBGn81zfnM",
  "key2": "3qsYY7iZwE1HFv8VNdGzpyqgFwkjEZJjrsH4AVrqqKExKL5ATTQaDUG4esp6U2TMMJSV6YTdV36cr2UgwuiYZ6Rk",
  "key3": "4bYSx9Q44arbyuRYgNKXBHMfWWFENsVeZCiEHvpqkQHEeWP23XKDU7tTM74X6LzZCRpfcLLp1bVHdig9qbnpJzjx",
  "key4": "47Wobsojd4WUHGyZ1ZCgHJrvKvyiDuD25stR1cvBDYdSRwAA54g7cpjiF1GCcoPhsJNUCW9yrNTbe83feSEetsry",
  "key5": "2A6gRaqHhUT1GTmrCRz34nQCzdPSiFrWjPLAdYQBBFLKwFdGV1NP67vz6mxARLJRWtYV8hZENLd2KFEnkLrapYBP",
  "key6": "38XJV3ihgySVvyyBqxexYrbwkMemSEEcUBpYAAYhZ3mwwTiQV6b5QPCTEuVen1V3fQtGYgFTQC1mYPymtw4giQ3T",
  "key7": "49ghZLs3k8qc3z61wmCH8jDsF6poRACcb12eZdHhbnYUGwavd5mtYqcaMVqcodMY8cpaPmAq4tis53jwMj3sUpi2",
  "key8": "4NSFxx4zHrLVsfvbMWMEejtHrgd1dUenaeSdRGfoz5X9xPaMdho8UHwQFD91jTieahZ4ZKKB61r3WJtARiN4gDSB",
  "key9": "4mYPatAtzjM25piWkbH8SLsFvxmwgTF6vKPmphRsYNhKMPsFUAzXRaPe1sGJ78Zr1vjgHqzY5Rtynr3cTwXgq6WL",
  "key10": "23YfJHYUP6dToKbUyjfwYGSRrbXaNFPE989FSza7Ubp1y81EHXUXm3n94GK2DvZiyH9Yw9Z7dDNwqerSYaZTsbPM",
  "key11": "ivwan5CrH9MXRq5KrWZygXFWoeUFh7cJUQpfopqHsCdigGjNpinaqab8gLaV9eq6v6Pi2jYThykZQxysuzN7vT3",
  "key12": "5SBfMfmavu4AE3v687A6dTNR8tB1VU4ZYzU2iM5bjq3WGkFwVR1u8idYYmzK2EZn6w2twsKumiuFCWtXd2SxUPb9",
  "key13": "e5L2LVa8PcPguY2GzySt8WGGoBnZ8xn5uDZgwiUJdk52Dm6pwHsR1g9NsfxMpjBbXNf3fWhdEQpnc81sGLMBQ8s",
  "key14": "3xDuwXE8hF2Dq3jtQyAsD2esAscbxGjmT4m7ER33FVGMntjtXtm6KjEGYuG6g4HDJJ52XAkT8fa5DvzNprNSaN8y",
  "key15": "5XigSduqHuZxPuQeKv1P1w1Tbt9vqBgEQYBPD1fNyUwAk4WEoYeRstifjFf6J8eqSvJCH9YWCD1H4b6H39DGhKjp",
  "key16": "4rFpddCvYTCESNpq9pncpLrY3jPiz2aquXEvbBGRumKtW1YXaSKFGionNRjfs48uENvwKaguCgJ48vYAe56bJkuf",
  "key17": "4pgYt6ScVunYCJ9eDxNZ3V7eB45qTmmiKAg3m68EUcLSLkVZLuvch5h8ButDBQkGKbJ69CjMULVsdGU9VQUAHY9Z",
  "key18": "5gS5veqDaQeCczJ2Wrf13rdWN3nEcqiku5Pffp433VjYwNqL2UbGy8fpErjsiivYA8MaKPMKMhgSs3qpZpxMSRZz",
  "key19": "327DQaPSQgCFnsrCDNZuPsciabyLnCioTH5ESThmkhfW7WFSJuQhZi47LUFkHyeeUx8stVpMmL1BDSiAEWaNBBbe",
  "key20": "3hjUXbfPJNeV34ZtvN7HwHUEa3XAwUTws433HoVT4y3EGHQ74yDG14dDz3W34kjfDjmZkzQowsG9k62FCX9z6t9P",
  "key21": "67ARqCg3aJxXo5DLHr89Pd5UGa1t79QihCXxibMnFxnNCTQK1wkNEWuY7g6eqSP6g7vxx3zz2bFBTbDPrudcykBp",
  "key22": "KC5RD4w8wH9rWG274t5MrdDVSqXRMiCmq4ZbxzWg2pnzhdbNp51EqxLHexsqoVmAe7V92dxncqXMw6nvuqHKkdV",
  "key23": "3iFPUXs9EAViB9jc7My1AboosZ3jhNsrwdCNhtzWzJVTb8j3fzfnb4s8ddj9bRXbTGvnV9VMwfZXLdQ3AmPu9z7B",
  "key24": "2PDV5g5irkG18k7eVa9zEqGoftLP6HiSJH3fgpV1xNrK561xpZBH3oDgvnhrh19wXXBuUgHcXDZXxJyta9G9FY4h",
  "key25": "4BMNsLU9DJ4A34mKtekzhcZYbQN1JQzRj8iEDviwGMfsDkdKenvuD9zDreyVAHt5qSLmPHjsCsHnjnL3EEVuqbKk",
  "key26": "fjXd7Hrep3WnxsXkN841ZD5aHX7DY2xpgHgqBwARsGtynk8RAStmfDQBAyyRKDAwpeTT2gCKUmx3i8tsDCEkt93",
  "key27": "5SK2wrsb3JYwwzvPa95wP7qLMJikZJ2qK4WmgmUEFPxbCUvM3FSQAXk4ydGqq4hEwtzGirvjGK8f9tiLh6pyAwQh",
  "key28": "5gNx6XTK8AanptVJc8kV8D8gLJu2mDA6SGQnReNTJPEvEiu8oQeQ8mU1Nd7t6GGSXbk89hzd76EeJJgX9ttQ7EY8",
  "key29": "5ZEWzcRxe6eKKDLgAsRDiz6pCW8H6ccRMePGDmQzZcLiTPNaq5WiTGkKZrioE6XCJYjoXvNwM4B36VhgLamTWa6p",
  "key30": "4hTESWmGgYUuRnthMDAuDJSmtXwAf5V2nYTmgeoF1bw5Gr9tGLYLVo3UsDRoFFbEF4PSH3JLoz3PxcTCM8akgNaV",
  "key31": "5AMcWQ9ovEuMXfnoFyvg74Vo6jGm4wiJTdYuMH2RvHU5Z9iKzsG8SUKyBKzhZrjrW8RMk1mVUYFaoo1KAUnXFQpD",
  "key32": "2kNhGPTkKZetwAcMc4dctTipbG7Ay79htp9uVK5zsxbM6tCFKCK4nvrokx3eZ7fpSowpsffRcTVFo1cmux46poXg",
  "key33": "4CoJQvCWSJzKPTnZafKwDcuw1EuMjjKZwTa6YMpZWFZKY1bGp8MQ7ZDPVF6cZApef4UDxfrC7AQuqz7V8JQHwABd",
  "key34": "2GNSxV2kGxhRUS6voB89qHVXcMgbZuWuedgMuRc6evpUuRVg5Agr2fwcSCQqeAC4e886WzRaq2Vbyr2hNrszj7AP",
  "key35": "3YFPLfzPHanuw3PPhcon4NRx63a4rHVwPpTkMq1VFhPnafjKB1GK4EApSnJmMaNwM5D243dY342TSXBMRemxAbtJ",
  "key36": "2B53pubkgDPJQmdhgk5odLLyXPYuF3KCdid6EpbTmhUa55DPgAwnSyTap9paMiGVyNV56y9UkUbbdDUQgdeFjjkn",
  "key37": "Hd5B3BKo7M5CtpNCsEtGM9QAmzCxgvaLxxHbyGCDbXPnyLLf3dS1MVB9PwCrhRcwpg2Whv2DptEXGAF869Qvod6",
  "key38": "2Q9VeqL74PxjN8m28VFTzw1HYN2Hrf5EhrMzhxnU83X4YnkfyCqw7XweB4VQ8awfGQK6B9XLXm13BHBkFrjpwti6",
  "key39": "42sEVrsJJG5T6gYvBciEhtujSY3ks4uukKACt9mptqMxwkDmyWEF5PAgndbduKM2tKd1CpSxXmYCpvBbiNT2cKyM",
  "key40": "qmVgvEpP9KF1Af2EP5rBK1pG3avCKJgVT7UfYpvk2fbViMfivMmiexVJYautbdzUcYfK9mDv7YkGyvbnbbyutJp",
  "key41": "3oXnPTuyarSwoLCNRHBLQnD4iTKzvqUX5sXnxNRRbsi7Bs4YGzUeLrEkUH7tcWfG6VN8XyAQhL8CUj9G7BhphnSv",
  "key42": "PP6FkJppHdeoatYUMw49CKfTQKW7coxg1rpu42oHvq2vG9yfcpcvaHhfVD1TdfC1HH1Cs2afR3oUaYHyBzxQC5H",
  "key43": "4LEKzBvUWhPMqaQMhZZfTMBupPt6DqKRUpfRxFrkR3UEC76swoZ9jvdBTaCWpnc8U32Qt3j4X7PMGzNWcu3FGCCD",
  "key44": "2inWjrXKqXX7dg59irpJPEr9eFRfZ7aPjgFv6z7UUuUun1uYBqgJzHPrbkq91neJzNb1ssVfijRa57HJYb7wgHpF",
  "key45": "4mZYfEaRyvcDJAqFDV5bdY5VBmcEUEz6sA5VPW8mapy6NiJSQwnDtHppics3aYF7thk9wXxj2M2xLt6VKK54CjFQ",
  "key46": "5J6kHQwgLUNDj3sjjstQEievCsUwG4i8uHnWYGa3YGLxr8DKkgUg4PvPwrWB19cA3d4Nus8B3B7Sa73u3wDZEhwe"
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
