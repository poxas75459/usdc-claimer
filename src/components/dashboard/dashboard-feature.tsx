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
    "PZ2rvYJethcf6bBRmhC8nifAXEvM6uWw8tPoqr6YmFwUK9yZPuLYs9Tw4Lvi1Azue4eG8fq9PQUQnXyi9hSxvJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhrjD7qLBPJ8M8nPSFRnFoRrfUnPJwEwVbh1SF2nyLmT8rZCZFeWbTQo5fxWBzEW5pqYAS1xUTw1vuhi6J2hjLR",
  "key1": "43njJevTGw9hduzrC9enqz4xf8ev46eWVm1Bcc6rZSeqUgL6mRedqaHkYTUnWw4xe9KXNtc2zJHg9YqGogyv8pH",
  "key2": "3trhJ2EorS7TTDVLE1cm2zF9exX9VsWLCBsUufEhvzNRGpW6A2ScjxUSCZjSHYVUWkD4woT5hLz9a4iMdgH2m7G1",
  "key3": "2a1JfR6Sbj9aePDvM1GLLSsmSMVesU1ercMwRVTGnESXjQSiGic99hUCkjKMw5UApjNMw2Av9a9JKPRrZgq4Ykiv",
  "key4": "v6ZoHMMsbZJhaDrRAvmRXTCQD38PtHe3uzBDVpCHDXyZW1GmzQo61C5rX3JZWMrMhnYBQH58PuCrGwicQpK13ZE",
  "key5": "5vwc53k7Gmug8EK6Qn7MryiwwLVYG1tsx2mwKTmHKsA8qWwgAErjBj9QKwUcyxaJEPPPhRT9yw2CwQdtVUKfcpK4",
  "key6": "5t9Bqf6GtRSr3WR4EBbjg7bv4pqF4fPtzimDsrVDX7GhBfMLK6i67wNLfUHrvCBYtURoFV1HHuuxU19HwzKPUrER",
  "key7": "4ePZS9Fa4fjW6NnfB8efazgoqRmJUCFb1reTsU6ipnQkUzN3S6Hpd8qz2yytmAjhfyKnBcRLn8arVWs6yHUj1z3Q",
  "key8": "3NxdNcvN8PdsyKWVnVBku48isZ8k7t7NyM7en6a3pQsHzxfJdXpwzEF9skqxjw62uiRo5fVCuD4UyjuKVLrqwe8Q",
  "key9": "5Uj539aApt2nFv9hHmpsagTUdWo3JHXXEDSWJqiDfHj3NAp3cb4E3EKgB6BktLnpteWohvyuUSgCgqCHMpcLY2Uy",
  "key10": "4ETySuKVkQs5djs5y3k7XvAy39Bbh7pz3zUodV6rySTkuH37fGAJqeFDqucUs31dP7EdCeVGQM52T37uY5HPjUkL",
  "key11": "37uGm611qUqZaTaMStR39J8127GcpP7wzFicPhzXLwegVcNJNTgTrAKjxGi5cZHzsnCYr2NSsAcQfsziTs5puvmQ",
  "key12": "2D5LMqWWc6uqpZkWXsQW44XVQJ8VxrbmFmu9xcteRL68tR6tcaxRDVjqFkhvgkBXS3HUEW6DSChrFxQbtRESQjjy",
  "key13": "67Q6bujmFvhjqpWFvcR7BeVxQZMc3XU5xGz3uyC1pU1Vsyc5eaMUyJBx9BqAXP5Xod33AZYPcyhxkeKpi7kCghte",
  "key14": "3aqt9aAzAnkYk44aw21dhZbEarUsFPvdjBbDec39UNpy6AERET3kr1gj94pMkMwpPQAnHtkfuZhENxB3jbMdxj35",
  "key15": "2BSQyd9cA2XPmeCHHqiDQBKEBT43T9CiM5nbtCk5EP2zfa3EVqfGMzQrbvkvfscf6AyCoJKSrkH9sMsG8Lj1Yfci",
  "key16": "2fJDNX7AAezZGbiP8sQZ1pL1spczyvXmNrVTuAkeBPiKyBS6NehEDiP5rhRVHyVDgbLphjXPn4rGkdtCeAY6Jyi5",
  "key17": "M6Q68QMR1iXp3mb4JUPAPukZ85UoT26sbTBb6Xbc1CU8TDRFEvb1YWzCBb15UgoDHzRxbkbLK3TD21b4HeNZ96Y",
  "key18": "JK8FHnKrXEoHyrtS7cfA2PU2LDYpgvK2iGKcfdYYuwxMajCcwGYv6J9r5JSLCvbaaN6RpTrwxAknfsDVTVDXUcw",
  "key19": "2XyfYjEJG36JYNK3SHPbduHmS8NTGQREQh1Z1bqCPdcHzPQh1zdoXFrmAmXhCGRTHoLnPoKi3WSgdyNizyjMxcyL",
  "key20": "3ZjLyoeLPLhMj4ERdRk3H9qxQEMV2uNtp5Y6g4DvG4CwXUWCTn8WEyA3qcs9nJoWNSuEQBRQYesR891Tmfub1ax5",
  "key21": "3t5NYrDq5dk99uiWaabSre67Bv2Jv3aEA4UBnzkwNzCP9Ho3AK5eG7gx7Nomj6TCMhwBgmRh2mNSQWoRP1aP2sbL",
  "key22": "HevgpjyWtw2gBZuVSyrUYTR8t32wfFXgbBFg6FdkJusup66xkegCaXSQxh7Trz5NV6oPvMaqGc3d759uEencyFD",
  "key23": "jVPe38MARJBDZTuQ6FRNVXpQvHPrcoiDL2XJHgNJU1MYApJXjoiQZJN9XCvhStGCi3BXpWpsh5NYtk8m3mpUqaD",
  "key24": "418JJZoDZfNr5uxaH2M5bQ696SyhUGTTDrDjfvD9dt9aMPhx4WV4tcDzTpawGf8ao3Qpr9RynBUDrzWaoA7zytP1",
  "key25": "5E2gCmJaX7xqoXAStsGvbxnxMusQWFYn5d6z7J5Wddrx1Ff8DEwpjmxVHsvj6GCireHd6W5H3ZUKAoNs384cW2MA",
  "key26": "3Cj1xmNDQFMh9gHF6rb5ovFBN7bRm6jdtRb1yFheHiq6ovbqKgDPEcYxHfRqufgchuwkpmiAixvwn128fviGTZDF",
  "key27": "21Wym7rQTexE3cbdXfmEb9xP188PezGsJ9pofyMx1cbvBEiPp8c3Zbr5f72dmmCq78MCh6Pom9m67R9KMA2umVaF",
  "key28": "3VmiJKfKHRXHN5EptbaNje21TGKQdXc959k4axa531zSKEQahaNT74T38ezSaxugbtmB5xGGUbv4NiT56Ki8wEtr",
  "key29": "4faPTYhDVPcJ6EzHXT4XCgZQCZpC9VYc9LjNQWYSdmt6mBRnDvrEibqbySBnWrgrs8b7zjLEGu5qt1HaATScYW3T",
  "key30": "48YNyo3KLETa2p7fJnD2vBvfeHGEKEX73beVrJVMyCqYDT8e5aeedmvGd2oCmqMVm3xdQ2xdg5NBHttYfAB2R2Hz",
  "key31": "5GF89sNYf6bViGWBC6rJp8fn3jePyW3PLquopLqXnQJYMDPDM7uF4D4VYTNxsCWpCgp8qQCF2tNjknSXeQi39VYS",
  "key32": "3tddnkB8CbCuPbcGC4PBKDqZ1beZxAeJcXtokQEs2VgFGaQyoi23CTY5B5SHzCNLWNQEa3ZxpY8J5JWg5FGfybmE",
  "key33": "3Z5cth2s7yw3CWHkjBgHLx5k3NKrcqJVhN9ynaQ2RE3zyuPxUQZpxQitcXbcLZt2HfEDbSX8Q39YMyp5W5L6RfBi",
  "key34": "9HvVmP9rwS1f3kHkVi2qNBVs4rwbk4sHfMiE7CA8HuN2xLC4Sko1Z3zvGjnL1rqNWnZFbyub1bdvv7mHKWAaucH",
  "key35": "ZCkksVo7Mgwy6ubB1WRSUBNE2ZB3LpDbQT59YRDwU4VArv8edeTGS6PeYU9FmefP9qcZahqxsKXGLDZRVAkxRQ7",
  "key36": "4cxSTTRb3XBgbSkiGuak9miMXYJ56cApLivSfQS2iJZy1CXdzJByRNAKmhfFLnu6yjNFaWR6aGqg5yx3B8WGCRQZ",
  "key37": "5mgnkmAdi2HUQ4G89texSFQx1tUP8p7RZ9ECMxov25H3ojQH4G6YCpp8V1QpSaBhFHupusKuEwbemzc5XC7bMe8P",
  "key38": "7FcNH6iMru2a66kUb7DvuYZMAHFGN28vw6LGbMwv25Swn7k77kPPR4Cm3H2TjLACmMQv1UeoSvKgxDzrpyr3KrM",
  "key39": "2agVZEMbUhPGMVGgmui7bmh6padMrQ2V3U6NyQwJH9AW5geQ1wzX39BuBUnaFMWuznFLdQuaBPpPsPVyvoazsHUN",
  "key40": "5Uftswv1YQLnHpKBjnxCxYjoJi3xPYM2iPUjzBWPfgvhDsqUo99nVCoZtYF2FdUnwKTZhtBSQsP7iBoSJ63ZGqNb",
  "key41": "GuEFBHuyy1bVWWicQ1huMNKzSu7GV1qfne5vjmYK6JyMp3gUEJcFLFcu291FMWFL3fCjsPKCY471h8GGme9FU3v",
  "key42": "61J6szjvo3Ptf96eq9wxrEkpsMuxi4Yn7NgPAw3UVcU3tmBjeDYRhoqfCRV5HFL9qXiuGyybwKpRv3pfvLShABp1",
  "key43": "c28HDHoLKkVfugyQv4vHj4yzMMKV6iHQHZ6EM9Mb1q8uPqpcYEHht4ZEfZSXTujEaq7cw4hopGkC8paPfQV9sTc",
  "key44": "2UCtMZvx8Xw7ub9qVnqQQN88zMCwhE3onfwYkBBb39HLzNHEmt1oWTKK7mqq8jWTYyn7qfLkpcZTaX16bkqbviQY",
  "key45": "3zBPgMAtgyJkS8dTLHD533yu5wPsP4sHWTAhWaPNh5Q41QnETKxFq9RH9TcqMFeyMsHfskFZ4U1Lw7AQDEgSMeAw"
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
