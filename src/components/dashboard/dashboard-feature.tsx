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
    "wdBafM99YKLL4yBxRtuhTcpcJQYi3MnpAbeZzPjYcTwe2rF4RFRPZ2mYvQqFYmJdDrrB6zwgfxSkAcKckZsGvuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpFQ1rkemFsiETYhEnXSdbxrQ3u8ZN3B8xyHgBc86sy3CZhGRWzotnzz68qfQZjyZdHx5ZuW9jsbgskKsio5URX",
  "key1": "5EZiKZWPJrQ7o3W7xETCcxzBZrTpXhXPcZ3if8BgSdoRKrP8sPsYWMXbBaCeM8YnDpdSzSKjn7vmik1i8bwu1XGL",
  "key2": "5ywueiR1R9G6DJ3DZdmuKWsybjJfZf9VrzyjWoTNrSUdJB8njVF814175zDGaZRiYXisTSuLAGboA8Cgt3pTGHWw",
  "key3": "2NMMP5hSJxxdEQG1gveTiSvUTZoJkfpGLBk4EjGzaHrBzKj8rfzgwQjWoqmXjpNCLztQ68oei1ZHAj7cRjMz2wTf",
  "key4": "rzoJwnvSdFtWgEqr2ccwHRZytZB2eicranwRzbLGT5tPiLVVGQhmAMXGAvXqNzfLZPxzifQAuPtgpF847FVDqq6",
  "key5": "3ED9ZdzwgvvPbcuPNQEkQHvNx5T6EpaMCPXDUDxRzvG9EJAQ5JfPaXWP8ZgEK3G2CGksDCtyYhFxb2gZxxhpHiHX",
  "key6": "4bB2Y383iUAvdEt9Ba7uLY999SmsRvxc2v8mt3RSQ8SVt3wrLxYpzLpdgjouCZ9r2QfqC8gtypMMcx5tVGeAwTzF",
  "key7": "2mvGrusMeZj8UKEkU1t7qtWMirDVRr5qzCie1SKne9qM9oWQHyQEH2uvph935skw5rLK9UcuZCMe2stu9pQnvpZz",
  "key8": "67bzqcbAk7L9Zwu4nhDwteNsSKz2JZAuRoqW5RpfVi412fvBhKctDL8VM2DYe3NidRpfqS9rxTgotDrudyhwfhHJ",
  "key9": "v4BnfjSVYfQUvsc37yNcQyjTMYPdcDx8b4SGdWnD6kUUGGpqnAHaKiDKCDsyk655xbtKtpjTfSTL3JQER4oG9Bs",
  "key10": "2bNmmACuwRbm4MJ8fLPpDdAikfTPYex4i4izsH1AV9gH8aWLGesGxUVwEM1Lx7fkEvzPHLAAmBb98Yntr9kUrQo9",
  "key11": "qGNzZNYHxpDWi2iideo32xdszjPhzAX76UwsqMAGGbDkoGW6qfMQgcY8YMgr77begeHXuRnUhntvJySLm4qmPW6",
  "key12": "UbEWGkYWtZRDtDLgwKWkQ32tBQa35MH51BKighwHcY5o329odh512gJkM54cJ1f2uG2QFtToR6S9tspqq7x4p8G",
  "key13": "3jLd91hY735ZqQhvMH6Ce4BUzzn83ZBW88v7AgaVC35byP49qNRjfW82Wj98CqyHRe3oMuTKJF7Le4VEDngLh2jA",
  "key14": "5DFMxGgFvobgVWqpdAdw9AMj88Gtei4jGtWrN92bk3tdkeqUudSuA2GcKF65bCxb6V1SDWSZA9pjXuSGD69KSuY6",
  "key15": "2Tu6JvzrTPMwXu4m6rLzVFjvevtpTDj3RwG2ajdbiUSzCyyfxVVZoKHBj6Y8aoL7pAVfosDrwUFDJBvNk1fqXfHb",
  "key16": "4FLhkBEZswNYU7kBLgSYcy5PmQtLixNYbcSsbQPXCH4fJL8PwXgUjgAXeLRkqMB4PM8iPqEKhXAhs711jZep2hSw",
  "key17": "35SVkUaHWLuDRradsFpw7GVwG7PWjD3kPbp1ykGVKpXZ8Wafqjj3tDC8XXLD486xtfDvZMVmfAwaoSfzJcALSmHA",
  "key18": "5ayapYhVBex7iN6QWfhwJxg2hR8Nc3Pu6DaFKyYzeHWFfv8Lf5atyUdS3ToyNaewpCTYxgfBH7KCNUDiN1o2e4CB",
  "key19": "NTU8F5rqzauhmNZBa1Y3otR3zH5oFwHS5AFqK8ySXVY5S2Ry6LRMSuoQZPh4meqgarq2xsfYPhjKkNza5TjN5bV",
  "key20": "4TfGeykBTmQsM3qtuaCzQeMtXUr5sAkdZJgkQdA8Xzsz5rH77GYbj48c7eUT1HycZW8BVK8Qy5VQsQiya4vUq7eS",
  "key21": "3fsPWnoWDML5CDq9p9eENifJwYfHtwnueuuumh4rwq3gazpqhTSnG8VrSk7CuJKv2cBRjUGeAa2hAU5Roh4pRsNY",
  "key22": "5jznomdScPdMrE6gU8bmfjchQt17KZksNaeqD8zjeJMASv6YnxghtoRuZbsQUyHNKb8uba3uDFX71ZrPhYDy6AXr",
  "key23": "4qesSXHfxeaVYxoyNsRcfZGdmqbThA31HdXkrtTUqQxZVxvEV9jYkPMk9pU4WhpdzxtrBb2wfKYMByv9baUn7npM",
  "key24": "3TYDRxYFSW1Ghn2m1upXaK5DVspbWKDkY1GPgXXXUd2ik8DFoF2xwRRbWVk151NLyR1pq3DcbmVKDyC5GABCFfie",
  "key25": "2pV4b4u3joBHj2QEUpzHH5TCdP4k8SpxTZVi58niqK3XrQmcYGfMKBwLK3Bh54ZKNx7iW9CSKuzoL769XEUsk9xc",
  "key26": "5H4nS6rPxiXigLtLqMqsQNN3WeAW9yEL49JVUyQTg7FdEtzs8SPHJ64RV4HKwox1mjYxZSyS2BUR1yhXFtcmpYAF",
  "key27": "2Md1GHdH48U4LnTS6nu9VPLK42pYRCtAXEwT2PnH5Nsn449VaBgSFdgHJWPwYkaP8d7Cd39Cdz35z5hJT94uBag9",
  "key28": "2Meee2ZsR2hEMVnwGpKZRVcT2bWAcv2AbrZRWabhTBtQAS2J9FkDQ7ibPhmcsJmP7uKxs8T6VNrqaPVRh1pqxTQb",
  "key29": "3dboSB3EKUfKRe7LQJccgipx1KAXCVTEWBv4Z7HCq8q8PPsYQ3Vmc3WtF13kBtQAu3NMbmtjcwLRUkovusbqUBYc",
  "key30": "2m2NgBXwaReL84VqFous4r49nNgFUX9Cw3BCQYaybG5hxb9fDYzRjvJwJ3SQqZWh3PKYuvHAyfwiNXkLgcpST1za",
  "key31": "3yTpwVD2KaQ64qFn4kq2LDtwn8hdjxeSVkspmH61SUs5Dx1yuo6aPo4HbgGbZ4C8AWCWXdwH7FXdcKovt6PiyAKs",
  "key32": "4W8fBx2Zo8quStQoUD8XkUnymBNG2XR5FG5uecXMJp5xV5F3iuZqBdbxAh9f6VaZowe2fGyJV44ZMeaFwbFXmeyv",
  "key33": "4w2t2pwzRwXcDztAaEENwUEHuB8gZTQ4kbNLsVudSEGzt5qee9pZUFEiGqxeCC52gcR9rzgyhkoZiC7Le6cEvJiN",
  "key34": "52LHQ7HgTY5jXE5W3tvJDTrY9cu6N4NAtZfDGyFSSwB7zK8UirGcazMJ8edMd5i32aC3fcu4Efttdfqf7gCYYLuG",
  "key35": "5KR1WFxuGcKFhcR6yizXLpZk2THRq8HiLxoKL4mRK6ZfNPZK2K2m93mMbGXMaeJW9YVrBWJbhJiLwVT1fZzDyuiS",
  "key36": "54cFwr75X9xJ2HNAdNWUaDVyLoXGZAj82wLZus2H5t2PCfgun2cYH6hzmkNBYX9y9kd4MLoyppzMndmGnLBV3ZDM",
  "key37": "n3szYdfoQueSNXw8tSWn3sVJZrB5ukmXKVZXTW9tep9DSYsXhwuntdg3AXKNLBX8xkYFq7WCxRyTRg3vHP1Tpkx",
  "key38": "3Xaj8eFvWNRVvu54iHnEKwvTXSVeSYWWZsqVEAyEFowiudURUHnTbaJ3623KrFMQ1B1EnzCZaF1ACgDsj6Aec5oJ",
  "key39": "5b9P4NTB7L6m4gxkNBM2NJKssGJoh27Y7BAtt13rfuDbCiPG31Cn7N92T21rpqjfGeyGj65mbZhJDXEyrvEkbw81",
  "key40": "5bmup6b7M6ietKPfgKbaoQRfLi519EzqLfCvEiQzt6KcFh7RMfhLiwQAZF6cDdNd1hEVFZKYLxwNEddYcRobwLYa",
  "key41": "3995zp3XT1xc4EcjPetovNkKpuUF91LJfArFuc7XRwuCWg8m9XwfujyUHxBSYtRvUh241fdLqxxZ7augQPVhjbWQ",
  "key42": "2WzutoHiTYwVwe8KDmuSkx7fd2BRbZeHQR23YiNHPbr9rCBZCaBio4GJLcr2322w2WBr83o3ZSzjCP6L56Vzv23s",
  "key43": "3MKPUCcMCLSfDfxx87aQbivvmpP7PJAGnKrX1jeXyDxyPifxYDudiAYi7pnZtSB9PZxaeKcCYe9ouqqsG2YSE1QZ"
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
