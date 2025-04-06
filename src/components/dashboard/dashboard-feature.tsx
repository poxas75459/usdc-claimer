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
    "2fRQH6qfkdmy4FbLBHiTk4VNMZqTMsDK43PWX4z4eaqvA91wCrH7yvyhLBP8H7kXfJrrrkdezgZE85gDAcE3nM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39K6BVhz4jEechPN61mXSqYWts6ANYzYWt1rdzBSwcofPnkKwBuZixDjh69apjjMayoAf1G9BURpLviUoMYfBSLF",
  "key1": "59hAiAxbySoTZF6NLWn3Wu2CjY9maHYrYzzdQjjpcpeRVoMQEoKSNZ5k2TxW3tfnSHY2zSTUZB8BFkEP78RKHsHQ",
  "key2": "4X8bWepfQKCGERnNcjb4dCnhgisn7Vscgeqwvdt59ZSNKnKExpFHS1RNJwfKtgELwMp6Y7g4SDmf6peKjWUpRM1v",
  "key3": "53PftnX4vRxZLWFptcrT7rznwLwyK5LZioFpxp7ozwMDbwAuKwP5VjD2QuPKqTznF6Y5mu3sENFvwYf1HV2wbHtQ",
  "key4": "X3sjF1wL4N2agjHmGeYnKesTux9d97N6j1VsXv8X8NgwDbE1rjjUDowuB54u3Cak6W2kbRECBcxkLyMESa6F9YK",
  "key5": "5ZZzQAmS2dedh1USvpq8jeUMFrAycuDQZvB3BbtGTGW98yMUuQkkdYdAo79LWdz6Gu6Q3BnwSLSLzhGTWYiw1zEJ",
  "key6": "4SCeopHH2kuGQYvW7drKENWHbKQuXLRBAWLBvfKETMZ4x835pLQ2wUdNV7epmhwTLZHYwBpUJEex3UQLTfYDFWqb",
  "key7": "3fmC44D2wSa8JtGiZA9FxymXLqm23WJmpCNTEWP2HFFiGA2pupZ5PePpxXpZ7VFByS8uMNmUakNv29ByxTwuiAU7",
  "key8": "342wx41fsYp3hWMEpncgyBMpVHRnGHiUh68CK5ZKhFDFXdGCTbsQwod9uin3w1UUWdAvTSJ9gz7xAFhbYxW9EyqK",
  "key9": "2wQGMPkix8akeYWNoAjDyZ19d4SgiZiSRaigBvsg3XqycetH72zzaLVnK81FTS7jqFGftKLnnfh6FVFLfNzX5V6y",
  "key10": "zphdZNLytTpcur5M2fmk9QL12kD5E4SjcWiAVcgfPitj1LseDNLZLWuas1Q3GpgXzps5SNnaMQVGJ1uSukEH9cD",
  "key11": "4mR9UZ5PYE9uuPT4dMuGwgn6qArKJ2qhYuKPULHJegLWo9XtWEDEAk2igCt9mNsebRndFPWhE5jmQBNcszPraFZ6",
  "key12": "wQ4vmzGEdhddTwjwGHFe2qAkzaJ73WdykpytPwC3FG21sJFWEAFEiUTiHFUqTKyCRXhcK2k1EomBUfqyhin463p",
  "key13": "3dz8oeQ8keovJcydpt8ccGrxoNMXu3u1nhDsb8bniHQJJrzYaneMEt6zoDBW4nFcdVpj6eQMgFc71xjtMYcouPo9",
  "key14": "2umKPeRNeLH6KtJsd3K7JswbeX4R1WtJSpiK1iyGAY8yuWcRgmR1WqqEZ3it5X2toAbZGgVvhJingr5rid9Bd4FP",
  "key15": "4uHC3LtdWzDwy41TRfhuaeob2CSyRXJGohrx1KDVy9iLwwnEipmuZytukwG89Jg2ycQpJ1oT7fkrXsGgx31ouqtY",
  "key16": "4xJ2sD9nYjN7tQpcRQHYTRLgVnx4GJ2HzCuxhkijteRSw79veD4vVjuwqzRGBwSZGyjNsKE94Vm2XqW1cd4e8Md2",
  "key17": "5tMDoPgeuvRF21nE1YkMPu8RNSD1CfE2hbaBFJtFzSQVEkJe1T9QGAknK46qT4JQV6UjCJCRE1SUn5VJjQWKiFJa",
  "key18": "2rsFUutpjqhoe6utgWubdMZqXkcWWJFHknmeBgm7UwXC5T4yESkqCLnDKAg5YnsEzbGup4VYLtQYExYGSpygrgj1",
  "key19": "5NkZM2bsWu96HF67WVPmFWHzLawzM5L7yHEeaDZmL3TxZwZKRJ2Lv58u72bRnSheKo3Rnt9RDbX4NxXUxkvu2XcV",
  "key20": "2VzjtuEdodYSzHTRv9LCb3N74HtwwaeEe33gTB3JMraQG6pCJcwuQRDUjEG3NGoKV3sNKf5ryoPhzAmZewjLjMaf",
  "key21": "5bxDuiZR79L8gckqiBZC35kQetvh3vWocrV3rwWG41Q2vXmy7VFmikLMnqHjacwF5jff6Eah8AKcjjpo58fXird4",
  "key22": "4HzrNtgups82PGGpGQuvS7piVWNADMYPJYzuRi9Y6SzT5eECRcwT8etP4TdnsubZynGZhTEzZYCcax4DmTZ4ivSY",
  "key23": "552iibmt1wmCSbGdYagcTX15WJoLeZ1PJtxSFxucx5S93ZK5S9qVzEG5RzRjdhhUj4hQTtFD1ovmPNE7s1xoxAL4",
  "key24": "2TjnTyVt1fYWrb7E6xgf1UTFnZCytWunc2nNUAukCLCzo8jyyKUh9nLMMUNG7Qxe4LJa38JANhjDkUmc5EHYCYEg",
  "key25": "4yYfheDL7vcFcgYkphE6g3d6DPETg6jXHtxvUoRN7f6Y3kKWyfusYFbsKvjQBbcf1ebTneMXXhsHkuFmTCEsdWy2",
  "key26": "5rDmWUxbRbRMm5vbi9zY7uR9phtzfBnhEkkhY2kzRkx5zi9C1mC1LvwniUgmxQC7WHByftd4SZVtA7RkP7mEyf97",
  "key27": "ffBwjEMyQyvKRrp9QyVCshhxj1HoAGmbUW4UsaCtwgM5fGnj6TT3vW3HDrSecD5wneswtxw8uu1naXUfiFW5ZVD",
  "key28": "NSVGxbVysNygmJmSCTcNQ9LqFeGf6R5mJV3szCnRgnWf6NCRZsMjfacdfHHhiRV5weGaeEdoQXngtYGvjaQW1su",
  "key29": "2vAYRas3f3GfEDW7oaMvNLtH3pcKDJy8hVhLmLSWy6YCrvfRg1prrejafZYarp4FgZhy547Gff1LhRUnzz27NrHx",
  "key30": "EZMu9QCFiMcQVpEVHYdVZHD7LHXyDdBBv3YGYoo1CQ3TDFveAJRkrgCDtNmtr4u37C6EKZnLjhPswX2Qq7UMXC3",
  "key31": "4EYn3HHGpfRAYP4b36ZQ1EGp1oAae2rCbYMwX9neHw4eLHAh8PykyjyX9ift9BYKgfbasPSTdSaBc45E9NeRyUbx",
  "key32": "344RfKWDQ8bpTk4Dh1kCAVzb6A2mZ6g56KQnKyfX7GhKmpnTHEi73VNdyeg97LEsHunNk6qn12pKHLNEvXnku2Cj",
  "key33": "2xxr4dAt4MWqrncTUgDRttakh65B6pAbF6uYW1sBWB76knBZBTCT6cR5icQkBjBfeLvANhHHUNPbognLypiYvnu4",
  "key34": "2TNKa3fJBgkCqtVFAuNY9meF85XEfEuE5SKXuFr2K59hDiAgAjjuu22xofYf7F9LqEsj2BB4Gtz6topom9UkLk9k",
  "key35": "J7dU6o26G2qWrGu5qBpUYwsMNTDjevYsEc5UoQmvHJk9ptntqNxMqJBHaTX1AFmkg6YFZRDzLsfotoGAqDCNZxL",
  "key36": "4z25kyXc6HtzaQNQ6bxbbET9NaUSjDzzwuzGNsrMRR1VHnSsArsvebFhEPbe5jTFMgVcgxzvgViQpcDM5RtRDhaV"
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
