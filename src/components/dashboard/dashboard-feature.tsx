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
    "2JtYF6fTk15Lcu1ykanXi7FqZQot4uLrmjjPixqrvkYK6sDDEEkcmDiyaKiGJKy3sJiEPgVmfmVJM1V4MvBeW8Zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t2dLcp39ivQxFamUAGykhJGwrLLbvNFZYXzfhSHoDEUC9qBt4MLrDHrm2LNs6NTg9UBWAy9ejRJa1F7mszSLXJp",
  "key1": "274UiSkCCaeZ5NcWUBucU94QQ4pSHLe5aMvBeF7PMvYyshtgDBRZ7CBxGECSQdyywCzLKhcLpwuGZtoC8cue4v5d",
  "key2": "3ufAfQyGpCiCRnajRLv1DVGTYKvr3wrdX1kGKYBnUM3Vn4Vt9f9RpfdDypvxMSwg2zFNW5B9StC4hiW9sLzftvhV",
  "key3": "3o35t2hsnUmtoVwz5HFqWpj15RRwfA8FLMJDxX6KMbAM4BBAubaJnwpD5xcN9WeX7yBvkx8jjPp1epSuzsNsLbdG",
  "key4": "4c9pBMQgdMbN6UuY6zF1xrhXAPHyr6Z9nueNeozVtb8TcSoWCa6QaQFoGZYXDS3VrbfCMVaLbU4bKy9U4yVJmPE8",
  "key5": "5ffRJu7gkQKoHvc4RKrD1AweAxTfiARFDSkUZckzw8vEqXjYGCX6RMJEASRVDW3MrV1Ni98EXFurHpN5uNWdrEKW",
  "key6": "3s4YLu2xHcXmcVGmSEXEJeFTALc4BHB3Zsc8JeSkNb3Y4Yx4Ri9z2EiZMRwfmNC8bpriva4ZpnXS2qTkgsGeaY9j",
  "key7": "3dvJqe5rbDnWUbSJjNnFhbdSSnKKDpYvV5NtsV5gMmA26LGWwrxLZGC1Mgaf7BCmZtHQwLju8SHQrWTMG4o9mAeN",
  "key8": "4Gw2pXkkcWvma7m7AtMBAbL7bFah9GLTcf58p8DLEBVUvQBVRMwhekfZtwRrPc2Jne92N61WLLhiCFohkt5gSW4c",
  "key9": "49Z7jop1WuGnBMLs7dJkAomPbsEQ6ABHp27cGABgaj22Frhmpn7wjs4n8MHiWYazfVMzgqKU6mGtLqW9LuKXfPNr",
  "key10": "2tsCrBnScVWgJHznLQ3JqeBoLVZ7rULAREZApSyxaSj8eFPrsrRvMnnLEGT4xgoiPCV4S5aChjtwyDzZ3RXutgax",
  "key11": "mPCBLdQ4wSUbJhnP5j8cMxnu3xTWLGtXEWVNoH5NgVXtfJxHegLwDHNJAoFM4qTdgD1V5LaZZ7XWnFqy7aSPy7K",
  "key12": "4idhXFJARLhzotie7DpxcAfXZZP4gZ1W9dN4RV7psXb8CuseRn4JP1zqjCFw4JWhMYP48tyyF3GLWC8pixpsNzYD",
  "key13": "2i6PWfuQvHcDNfhA8yi285TxWkrN3mdTAdcwUD3F896v1uHwwXAucvr4FdWb7SC4PfoxmV8aA5KxjhVk9LSLkxwZ",
  "key14": "58yookKTxkqUzaTD2Fjg4zmMoixEfz4ghVxXQg9f2jd8obNUa3eD2iTHDL6YA3GmMAsBYL7BzpQea49DzhGb4YaP",
  "key15": "4L5J8zoPq2bZTreRBYrdoDTXvpnxLvBwQ8Dxs3F41X9DY3LBPs478BgUhAqCSnkihchw8tgpG5wBPoAjUZWky6gY",
  "key16": "2rKCuhscg6XeyTyAEpMf6a4K1on3kDBSPicwc2iDF6xVuahBgaxqMdEkaqzyP2mEB6Y44Lmgy21MKk32zSiC3YE1",
  "key17": "2g9mpUiyqAX9PSzqcWkPsyHFcox3gCcWokz5HZ5kwnihhpWzVYsKW7hTKPZQwbsFDE2n6Gf7gWkg4Ly7TFPYy5FM",
  "key18": "4cE72cWhjYU4wVCkd981dqTpGeeVqfKbvSxHkNPgqQdXfFuotGDszRGb4Fk7F71HCVnYAQ6pEiQHdfQF3Lx6fKab",
  "key19": "k31nw99HwQt6CbtVMscdGSELx4prshHqTbWzWghkkwWaeEi4TUR9bYJayeBbDBj57du3rtoQ5mqmR1LcDviKgiL",
  "key20": "3DY1sKFaoPGiEUKTn24UJbdzknqgCwzfkZbEZhFzLaagsntP9fMBVqqW1oEd2bKHf6H7vxhPcZ2fL5ADCrxxi9EV",
  "key21": "3XxHNP77apSKbG49dfV2utGt1XAhr3XYrZ1KiWLHgKj8itR395DwWTVYUg3mAGkvWS24cN4caPb7WX4kkkVXfFcS",
  "key22": "3L27WvizUpLbTqoPDRHkWSPxHDHEfBFoCyPbqHqgZLEMQorX7oD73xZrQsxTEXteveofiFX2GKzqgUnqpsKNeqPW",
  "key23": "2E12q52kYMGA1DuvaCP8HjBHtRkHsS743yGQw37i22mR7T4tjrZ7horZv27p8bkvBGntwuc888D4BpavQscpX4qw",
  "key24": "22esMGU3scoC4t3dD4rq5xjEAgQhK2moZZDKRvgEDRt9B7ZaRVdGgiefzmkBy1oQPKC3wDAgcKytPzCHYyg8m2pk",
  "key25": "2MnR4NSBTY2stpWZy9z9q4DZNmFuCTiAEoEzkzfyxhA9a9VdvHswLTiBQoXLXrWe4YgBgVmYk1kEYcicJknCLzbE",
  "key26": "3dLCqNmtWC5BUdqT4CKzBGZovJ1ceh6HnAm3YaUUBpm4M8LMXZt7ZyKYvo28USHAGvx7EPw2goTTNzn3tKKWcu3B",
  "key27": "2TznppQ6HVUaBNNd9Jv3U8k9VFJ4j32Hz695kWhoNVkUQZVo74JEmCXNzW1JbXiK12psRxmyhQhamh9xENYRmZF7",
  "key28": "UHRRLwyHxg3MhD8GoDTiCzcbt6aMy8xWcqzv8SQ4prcs6oUcNpfZzt3BaXCvmeJperkH9pnYpDbUpDtBD9Z3ETN",
  "key29": "5APKXT4eoQUezqQwU2wTvGcgLqSCxRqUuALoc9sM2ef2RzsbhqatUjZzazngLkfVotoHuru34YGVoBHJf6HZw4V9",
  "key30": "61PfKpJdSbpiuFPhYAKe99S9b8vRMC18mfGBDycN2tq8NMH2gDRUTmCCFx8gaNjH6dYv25bjxB7mSGX3MB6YjYu3",
  "key31": "2BJGjDb3WiaiXhZpMdbLpZeNLJf7eRE2HgmkCx7fgMGQBZv9M5SdoRBYsvXyaXsq9GQecp3KQtkAzYdd1R3CBx4u",
  "key32": "4uChhFuVXVkTnHk4bbVPCXG7eLNFLyLTcC8zJrYTBBfMe8xSLURBYNtaUy5a3qA6mDVjZBUEqyM1bSgk7gQ3LkiK",
  "key33": "n7G6jo97X99TUsSnftcLAuCgvxUf2LFTq1tGa5ifcSYkrG46CKDNAt8zrZa87eZo5rdniSTEywpLY1sFHxgbEj9",
  "key34": "4aiCu36tyTs8WpGBwG8AiDL1XUrGMw9sbgHMWNEQQHSpKZ5jjs61DTVqS2FCJG18QYLv8mEfXNZKPeS9NjMaxY9U",
  "key35": "3EzeYgiE76GkEWmeeU8KoNKvQyDGpjbLaQ6kKJYiMUcr2W7mgEnUQCFeUwbCBkwueakWgK8s174Votj1rR1PLfKh",
  "key36": "4pUBrLJfCCRRNs3f2ciowsZTuYHkdtWB9jWFN197TnmFXwdmbznRQ8fAstwW3hcZBiVA8yZ433wJBpQN2cf7uoSK",
  "key37": "CZNTbPUa6v2Hm2jzvGmGmg7bNGeW2RqnZSXC2ARuPr6vt3WBzFaFTkVTmJWgRYfZNJjzNT2Ph6bSFyqYKWsLt3G",
  "key38": "4KLwqkMq43jumWPhcixqNbGwJ5DHiWgpFLU1PkeUM1qB3WhLd7RfvZdxy4UzVWHWztiNBWdtBHpB7SZwma9pKwPY",
  "key39": "4nZbaq6J2oKh9MGeV9GJhENyKikQ7g64B1JWvefYtD2piEz6j1NymNgwK9XM5QWYDSL1x4kP5Npgw9L2BtvrSCjs",
  "key40": "y8KM7qB8WUsx9WuGHLdAnbtiHwPuNYy7SJoqEoGFf66QgZXm7UaDjWk9rP7LFcgbMZt2UxDfhiT8oztw7dNQyRi",
  "key41": "5MAtH2cNQZofZ7ZfnSWjbcdKi5mgihaZmTgwpUhFSoq8UkzHZ18XUt7vybDR1jwQEwpHxVfsJJF8SwaR7ZESzAR3",
  "key42": "2RDEryMwetUNiLq5fEtgKpKxyZGjvHgm4fHchqCJaptf1yYgyZjsyQBzFfJ8jW5An5asA5vK9TnFYeDwUDHBFocG",
  "key43": "31DYTorHLJRzqMNVJwDGo8915iKggoJpD64Nzx76Kj8DAGTKW1mhzSo3EBJRTrSvxTkVV9BVSPLxsUEfe7AR2YxT"
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
