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
    "37r27YTaMgfFHhHPft3YJRRP2tv91GDY7uhuWVvDGWnhEM5ETxYXrpj4FrHsdaZnSYmU2HFcb5dkhaHPucCp7ge4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfyAfKMnQRMFZPdg9XgzWfydKCpYVQTV6BdFQ4FziqHKyQoaupi4aJjXGAAtdE99KtAfvqHSw7hsthh6PpErGam",
  "key1": "2jZr8frhquPuh2XYWYLcEiYbB4FFYpJssxNP8iDsiprEueLDyxgE82zDoLfKQ3zFnrTnidh3CNnkLUYPgo4AMCWw",
  "key2": "2ib6ACgLj9Jes6ccTVgqDB7SHevatF8N8VA3YSrepJuZ981HWDsQBsMZ6FLdR6cJ7XA8NwhjyLDDmuKTtiYwQrfw",
  "key3": "tHKpdKygz5pq6GEdorD6gJVkAzTkLC5oNMnwBYN4iApAYWpq4ASBzNswPa6EmhoY5DMRPNBLsaEj9dezFiYHxri",
  "key4": "McvWivUPD1MqZ7pDRSmeJib2UaUYvuEogWpE9FpmE6w4yvJbaT9UHo7ACzLkesV1RxxtnSFuvZu469bVdS5mQxL",
  "key5": "1ETBVskXpv1LoD36tzecDnnXzdDg6CtFeAdGfz9WYtzJapc27gg7sbfUSjerWzZ5gvsKWWuefgS9K8LMpcd4Mpr",
  "key6": "26rweJsPd75FiooNqc96fQq4x4WoyvJ1k7JddGL1t9nbsMJc65H3DhAMAHiLCZtuucKPFqTKDS9ebHbNUupMhvoC",
  "key7": "2MN93SuKmaqoWXk9yzZw7gWhWp3nc3pEMiXhyE5dxLDaJdEkrScbsreMYW5Ah1FifVNmXZVW51rHRoySkBk5j3j",
  "key8": "62kSJfsyqTstbzCfu5cpUYcjgzyLqgHjzFzYa8XotK6S3xyh87UDhHobk9bZ2puZCG3zU5HvfXX15skCEv12SnVn",
  "key9": "59pgQ7AoYtt5bFE6pzuwKdD5sjT3y7awa1DPx3d3Wmujx4TFhiRDP8DQEycyFGCnsG61KsC3iebeUo1XvWuafNUX",
  "key10": "fuVdPwUxuZuujmyJHqnZtFMS2fANRt5nLnBUu825DwkAb1q4TqsgL9Lj8HYBqqnMtsqaWoNLmPtBS8tF67j4aks",
  "key11": "286QQfza6asQg5tQ1dD2GbfuS5eyM5qx2aMsLJ9vEK68aHddJP659QNzwjJY9dnMr4tihWJTaM7QHSEMWTQYqpJH",
  "key12": "2f6zSVFW6M2ksSiH5GHgwURoKPFpKLimj5FMtShaBrFUWSGeQAtVUou4WeVX8txrAySxfFkUm273z7xHacw26ut",
  "key13": "MofKjrP3qEaccpvyTQpYzFyPL8G5QF2ZKkfgPNxZ3os91RE397f3B1bGiwAk5EP7UTvoCjiumTa6KZcRAc49dLR",
  "key14": "21gzn9xEt2i1mk4Yo3ihi6dzjvQLkz65G68FTcmoejSKFHUFcJDcS546fTyZefHNiGmARPb5V5BSNtPWrrGGuNmv",
  "key15": "5TuySM3GB5HQsnjDjG7M6C99nZmyJAdPsrMiKeKevq8zUdZTrigyuUZPghBmsmawNfU7iZayHZ3wLniEFhhzyKG9",
  "key16": "64faiWKC5P2tiPaQuKrYbVjfZTdKHx7DqZhwoXPgQepQFToXFNKjpXgLmZcESnufH44Rwqh8Ld9hdK2bzLpzbvtz",
  "key17": "3j5HQgU9LsmqkvvjYscS5AL9TCbnK8tMGcxSHttSWJtvKGhyEuA1oyrNNbqnndGso6jawbWeasdBuJawAgfcQPjN",
  "key18": "2wbpXQ6BWeXRCsfAYtU3MWYWbEBYGjGK2zsRFbSsoke5nm8csfD98PgoBhvztxfj7q3UBJh41K1Rk9garaHt4CMK",
  "key19": "Ag6dG212SakGokHaTUPu598PDpCUrZbAWe7Tzvcj2pv8w5qQUvjjRks9WQw7YxtiAvk1AB5HN1V4cCDq7Sjzz92",
  "key20": "4hcxL3rDCedYpcvzc4YLj1mcX3gCviL9FADhxHWEKZgNd7tSTp9AFXiqXJR7oLTWQF4QsgSoCokEWgZB4fGvyMcF",
  "key21": "5R2jwxX4DWc7XtFTbG4CFzcAuYcVkxpEA6e5Jjeevuh7vkuf4Mu7HVGTk1AfdZuib5WSEywB2rxPMWjEhJF3D2MR",
  "key22": "46T9DjgnJjWbVNU3vhCMmQKmzmtGHEMkutC7eHHQMG78mRmdVU5gycsmg8sHViWFg8kB9F8EtfGpVVyrahKBqwRf",
  "key23": "oxqGPyDQKFdeJVGHPsetXAwDsEY76FPjMp8TcpPmWCUx83owi48EstXoKJf4Kp3nGUFjr1AX8yejcubia3Adzj2",
  "key24": "22sZpqoaccupVdpDZfz7JYUVbumeDmkRPwMDqpUwme9axr8eEBxSpXvXgxZPxUruijNxXH4ZdA2oE6BiqwjhH8ae",
  "key25": "4tohbF4wLk2o8pBrkMB9Qcf3BBjHKEJd5BmXysQvJNkREn1A9DhRpnsjJYZcxtjzj3qq9HBxLBvYU9p32wEgDrpn",
  "key26": "44TXrgYYEFEqgiCe95WBHs8MB6GvRfAvzgeFe8nWSnqxVXyGXbePyTc4hxMBc5RfL5cDgGMd77K9uAJNikj1niV7",
  "key27": "2Wg9Ccr7LV7YrexEr6jF8MJkkBqxyBsbhPF2Gox4ZW4PYwRNkgtQ664KRbYa71oLvcer6iLfHt7HqmXfHa6zJsym",
  "key28": "5ELZCGkDg9nsmtRnmxPeQjRxm87ZYR5BnQqcYGGHrCSYuvN5jok5AMPpte5T5oJQDruMK8aqFswVX9tqA3PTvLJS",
  "key29": "5LN9N5FEDXRmLDe7izGFVKWsBeYUHq15D3F2uGko5B7sHA8Q6aL9YJbyRAWQa8McUXZgRWgFuZeN7MUbxR1bDtf6",
  "key30": "3KCToRoHyEJFBGX1cjfXV6WTLYEu5BvJDTCsnHVKnEvYvSzVAyLz7B3LBWy8LhgrBhjoJrcv7VM3kW36D8S6VaQC",
  "key31": "5mquDZPM2SD5mPcaueXNjoWMdFdL5njauJ93e4P5PcZ1YJtuJmdftxKPCUiVToEAYsxextdrdPDTsJndWaHdXtX9",
  "key32": "5MxR1gWrzV6MxET4W6ZPW9VHuAr5EvSJEH88AKHVUQhW79kCuU4oTHYc1ze3w2BMXpyrLYBSw91bJ3dyWDo3poMG",
  "key33": "KTQjRatzkahMMZez3bKbmPGozSm6P7Ha5AT4ZZfTBmEvJmiPAANFKm3jyXxf9RFmjChiVm1HDaV6ZrCacZ2C3z8",
  "key34": "5JGNTVVxYjt1xc3cuYZzUATqJJMXckomRtQ9Y5r9BWQ9hKWHN6f9e7qGhv6jGq2V9CFTbF1GGHvpmSqrTRkwspUp"
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
