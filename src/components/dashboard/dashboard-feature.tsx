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
    "63MeZeYdtTLwdttdSWdkh5i5DNjLP6F24QsiHviLAqNUE4iaQa3BV1BYydBrcS6N1EoU4pcjzYRZgVcWuFchvcx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHRzpQFVUa2HDc97Hbae54pKzezcSgMcKWoBJQusN5no3gUqqmyNKYcYu8gsbWqgrBzDGy5QSRhXQyqCRiy5yN4",
  "key1": "46qne3K2R56rusnBKrMHeRfDMs5tEe9XN4FYgKcmxmNvQqqNTnwDzHFqDGw24LadWtdLC3UFjNnbvha6mF2Nibtx",
  "key2": "9nFhZybkjkWEW5P9hDvsUGYgxbqXqUNGZRDowvZ4DhczsZ1y6SSJak8Huj8d6P3ufXYufHE4DsFdpYsXJhpbYK6",
  "key3": "2ynaDPcKcHhvv74Wjo1Go1Gmg64M1iULpAQdtrCagPWCUo9YRD9eAmAR9VoHw2ozthxSCmoQArkoZ9kxJMbbioSf",
  "key4": "PkyKqx2J7GpDiVtEXhg7BjsccR2jTmqdarQ1MoNtEr677YSBPjuM3nCVMb2agQPGqPFBVr4n9SdP3y6keNNdbBX",
  "key5": "4GYAa4UUmB3Yp9Bz5r9F1A964MG8T6JCtXTMxRJMtbSw3MtuQbZVS5d3buWLDqGwi6qFg18sMAiPmwVZ7UPTfcX",
  "key6": "fUFXSh1nTvs8jygi2rx6SNbjmMHZAaTDwRimPvzmhBB7oh6ZU1QMrHfCzgHzwfGdTwNz3acqwxn5SED534YAuNN",
  "key7": "Lh6YqRmCrye7Yg3S3tcNPybhyavpJXApHRkAxz82vA2BzDvHDrEo8GtmYyUQTfCjsLeCdAF7zrszVMz3Lphu5aX",
  "key8": "2RvTDrQuNroDvkpKW8ok5rSwTsHPZiTuAU6m5nqcFyUyP2a2gyBLHKKXDx6v5JUh1HpREj9FekLgbwYWQ8YSfL6A",
  "key9": "syWuZGSwMkGVmNkcbxrUtoEQxPVfBzLs9sPCE9rNmKcQ54TPtbUaqfj6EfbDcecNqpSUVu8Ex2z9Ggu92JmYwiW",
  "key10": "kvNSjFq35uwsKsFVt28jp9RfShXEJuGQoxMkSL7yyuKwmVwq48tuB8YqukaDezE7CW5a42hVXoYMTH1vwFN5KGM",
  "key11": "PdxnhbYviME5uGme4AyQ93KqAdcT4ihbGYzd6GyQxZWJtRXCezi7V9sGgLzNXm1Konu8eyh4VNkrfTChKZqxasc",
  "key12": "3W4vSAMKpnHWyfXsP6P45U7pc44T2nCSXQio1yDAGxZ9AYPqzT5f8J1oCSFWunAUU6gXimNWyfvTmCWYEvSFBE2E",
  "key13": "97Ea5TfaBEcmo8o2eAVyxjvZbowxsptx5VGMd4Zg3q4ukQWc385T9vHjjzzVdUv5zk5ZqHgcCrxhg9ByrN8sP6s",
  "key14": "P74iMPPxXPKSX97wBaSFJ9FLrF1LdRLA6arWsitrtTRNMQj4ZGjzgsewB46EomtTWnz3LsKizmFNsVm3NyvcqR3",
  "key15": "26aFMWoATo1zH5MPYkERwjgzrTz1UHrxURq3UhH6NEkNt7icCbh7vyMu82EEs7xneaK8CSds3kPRkmwhFEircNHV",
  "key16": "S3m4SdZNXDjcQx3jEpAYentuTFyNfkMPSKp6fRcfg8DQnSvYZnGmSnDWUHZmBSBENDzHihnAYVNfuca3esSDp8G",
  "key17": "2RQz2szZyS8FQE1Rd5yu6YTLFRsdGAhbgoduC4jA4WZoXLErc5cEF2BrHBZ8VwLN4JtUhJPqUxwywxX1emeJ1z3d",
  "key18": "EbniJ1cYoQRZeD3hsoTjci9dLdJrVSpEmkhc58Whyi4PB3apGWyrfwkH2iRL9NPTEgXZ3GrGc7RWHsB8G4JJzSC",
  "key19": "2jkcYSGSoVDDyft3CBrkQPfwb3igd1UAovWXZXuJogANoZBbBKzBfxL8fZQkkfh3VEAc7twVeXHhk7SLjgSUDLkj",
  "key20": "2J3ygSjrCDKjUyFDvCAkp9awuo3insy2zX5TsvTnf23eHSrYKCThzeV61L9a4Fha3AVVdQttQTzA1UaQKwSFAydy",
  "key21": "2Snj82gpSztLQPxSP1mXh1qBWVXip1pzcd3iAjN3SEtmutz7VdTgaQ4orhYrzjYomWAKJEiRGoEA6fEihE6B4Hif",
  "key22": "3Aza7HAG7x1vuNx34UUwRFsswVhs6xGWN8GFUSL4zfamHpF4t2WThAcYn9fY8AWh2d1mizou6v1PaC9U2ergiQXR",
  "key23": "MkMKXHTdrZv4JwVsHW8YK1RTPZMvmKQkXWmEKtz9zHwhWj9KdCbFpi4TkC4ky1Sz9MKcENe9GQzLgMRjwKSKhzp",
  "key24": "57hRJScutbSBvTh2PnfZ5W8jevvw3tG8MgsuLwqdyqJZWmjjLwjjMcEVuEY6SuJ2JPQZ1bSLCrM7bbCeCcbWLYoy",
  "key25": "9yb1qmmvKoKt4CyJZRhsCpTetkUUcyum1PJDNVRJTkXeBkQD1bPbYGe4A5m1jka89JnnnJoTzqZpmzSTuZEEhfw",
  "key26": "4nDDeaHpMYq3vpZ4bzHAgky7r8Y6ieWmPKwdQeiqRBNQtSr9oyLfkVJm9feVVVo5HW4VSC6Q4r1MDCzyJUKJJn8Y",
  "key27": "5s3mUmWnsuhKDjACFnkPkSFPkifaUdym9Csonn8LphFJZwtehN5d14MC83rxSkfAe635ndPLNvqrD5WKo9QdWSif",
  "key28": "4HgNPqc9MpjNg9VH5A9zT37w9Y6LCAFqarAV1fXx2Bo6vE5YPQi2G9fT2t6yk3DhqwG9GxBrKfGWGHdHsFxyyUxv",
  "key29": "vNyfuZXrL1k65Fyxn1Ax1BTZY1iFjkwXnk3NXLpDvtzuGEfbQr1rHX6vBi67FQHj8CE2kFDShASCFtnaDCzs8Z5",
  "key30": "3CFdURxpMrAUKrD4QHDLGZNqzUVUz5iYmxaug2LhBBXWdwF4XpPnow7qfobXgkrWukWG1Qb21m4S5hNwLLBjEzZr",
  "key31": "5uBL33jgWicRK1Q4YVReDnpknBdgfUFRz5kA425tizWkAoxhh2RjA15bVR61mKv3g2Ev4z762PgWxgXF2kAvxyrf",
  "key32": "2QqStYvLAZFrTqY4tv16yCe4KiFYMRSmvyAcRA4qLfXiFPP13WNvPRLZSNboqcwz6Eo8Wb1N2iNZDtjQ3JfkmVzL",
  "key33": "2JvCHvBDgbhL7BzNWeBzF5FKJf6CNye7uA82cDHcTYi6UbXomJzBR4XRtzQkazmowpRYi5VE797jwXH3xTaTUjfF",
  "key34": "VeJJMA8rp8uiNxCTL6xap5Uf3ZFUgePkTEmVrUfcFmdCQQ6KxuSvTVTX98fAY1q4GVVruHN7kMFjXtPyfho17zf",
  "key35": "43swFMW1EBbFpMzQAwXk7bsFH26XQ86u6QBJiUu9zarjVcKJKyoiv1MPDwys333mRWC6ZSzG48PySS9dsxtDGRfC",
  "key36": "5DN1HrwQfucEifb4xqxFozwaitNs2MNJdgkcRbUEBGzePRjpMiK95tnwfBvUnspiuf1zDqXakXcDGmZKrafsMZYN",
  "key37": "65Rmhti6Sx2v8Tph5vFEGhr4ffQs3q9JYaXHvcUPtNJt3DRGuX6nsFZJmKaQpPjf3YSC2ycjrTRSz93nsPwoxJF7",
  "key38": "61PxphFMiBe423U3Qt3jZDcqVr6hu9kesou6RxnWi5u61BQ4nTPEangoZUyuXxeuG6bVnPoM563vQCkbcGyrY9i5",
  "key39": "2dj4xJRSn5nocDrejqgZvWCCgbXa7H4ezifCvpPU2A8R5ShyzAQphaNBjzYKnVh1MTAcUebtRKbmsM3XSAPwQ9y7",
  "key40": "29gsYDSqAtpLYAkeyeMjjHHdR4k4TQQVsBfMdxmn3GpywVwFMDvoLnmLKyRUCPBVAN881zCbDHmBELT7GU9e378M",
  "key41": "44iB1jknbYQDGgno8U4hn8Jd8MNvpNnjHmPMDKHNsNXzEbCgQ8D8jUpX8GUQpe3wV6FJxobrMu4PNRyTjfGZZY2L",
  "key42": "5aAEbf3MuL5eM5466F3mC3HdLTkfyc6YCzKHDZCCPHrUBSFpipTHrwh8ZTq3sPEqRWDBHaQGxy6b7qWkk2ZsdMD9",
  "key43": "5vazsK191JwTdPcnE1K4EdkmseAS7Nz1Z34JyUS9BBYDvomyAdXqJ44sffRroFzfLzNAYpZ3QPFBJpA95jwJUcpm",
  "key44": "Ndy6cMZzskcAyBMQWQpuP5x1yjSm2VhwkiQb5u8gpc1JTYiGNMhWWsLNX8rwpJhmovT6gyYi9v5aV4NrZdGav5Y",
  "key45": "KzfabAtmXy7ty2vubXaoz4ijypPPG8zrJeP8T2mnxpo87bRZcA2VMUckQQRwad48VRNNwAZvJvbq3eghxnyejZ8",
  "key46": "2JRWJWZe4JykL2UxfmhUmYgawqp3Snj2rmSbtNTZDyVuvf6GtXmt5qGsHFsNDK6xHuWGkGVQYVtDsu8zY4cibbRR"
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
