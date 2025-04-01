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
    "2uyooDsrzyc1GbCpbDWfAGHe1Yc7HU24yBu2R4KVQMaqofpV4sbygR39L7ThHXyXhPMhtShj5GhvLaA5reTxNGuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCZ9o9J1Kgn8qb3gKrzWPu53PGWmcQ3aVBc5GuVq1rGjJ1ev5Xp2JHUb9bNWYVenwJNhm9MurqpLz22PxwHGUJb",
  "key1": "5UUTUUkTYieqMNrNj4USSTeTER6SFfLrQwHRwqBA46Kcf2tPh1BdBbbmbgeC29aYzRmCAT5UFvxmLWsoVv9M4RpG",
  "key2": "589DsXFxXjEiBt8FccLHTwPqgAhbhqAYKCYyDhvqnAAE1yhJ946GEemRnrTZkSdrXVxNyjMD1JdVi6wBcLa2xZEo",
  "key3": "3Ms2iWozFEjVs6bafiPdjy5D9nv3PPRqD2qWT4KBsHB5yfWg5nyLney6TCok9WX1tAU9HsY2rzPjD185DS5c763q",
  "key4": "5eP7vs8MYKiCEgEZ7Prknu23oWQnfvw6tbuaxtsCmPtcacEAEn59ErSfdsTQJJYMsPwDLm2Xm1HX4SC2qFj9C1GJ",
  "key5": "yuMu7cHZ3D9bW3GCiZmk5uJSsW4c8CrfD5V9UBNAxEsQ82ejkUjtm6aT7v2oCFoNzGEjEo5YkgUwaGGxhyYLiqB",
  "key6": "2sv7JYxyCvNuMQvJgVVu6xLC2i7e5Hc1sjDzrNey9sFYRjjHQSvdSMrmUtPWSB89fUyttyTiNx4t4CbrkZunzLxy",
  "key7": "5eg7C8cx74LEmBoFa7R7xJcWxcaHd4ZfbZrEd1XYrfSeNGPskDnz98n2va5bcjqQtVvxW95qG1AG8BFrXQhqLQs9",
  "key8": "3BfEfw3uT3awoL35W8FKexYMnxQa7htega671CsqZwkL66HFCTfduFU9uJXWaMqRHwuj37EUu3cJ9E8XPfTuAsRE",
  "key9": "jjtA2NnpVdHV4omTthEqe5wjDxiZHLdZJdJXwaVMhoJ2wiFNntUP4eofDRTRZmZ7siCnF2U3VcgQEkmAh2rQrCM",
  "key10": "qpVtsNxM6x2TYGzMBzVwnpfN3P143mFgNXL1jKVYWPrH6wd9LZCAkBTfpHM3REem9z9rVMzbM8ZUnynEnA1HP7x",
  "key11": "2ecWM5cjanAm35TrJYaDvYGMy6pfGQEg9Qy163namF1mKQZiiUhenmRKkCLVLXN38FJRHd2gSkoWht7AuJACbzyH",
  "key12": "588MR5ndkinG6MnS4k7ZuC3KYDX7RfdcxgGMgQRT8Vn9QnNMWkYuWATSTYx6HWD84WjBzwdgD8ytULE3hkVGpaeX",
  "key13": "3xqnJqm93xiaPALprmEWT4LXsGifdGwNDoJ1HaigWLX3B2RZ15u6yYg4MsPrzyJKTMdT3fbECUQP8WRciGTYFsUj",
  "key14": "363oVW5F76TS9YPKet3yRqjheh1katw1pPUxrvAxJ4bB8T1xQ4S2EPAbNvnADeRZ7NwUxf8CnhH2o8QYXvKeD7nR",
  "key15": "3xnEFbpcMTpUAP9sAvKiYbGr1txCEaydRvbRD6jPv3r9USDir7uGgbqjZcCt99TYccYAGq7XwzD7r9WLgeiHqPWB",
  "key16": "5dNwR6HvFqH43SnYaAjkChppozBnPjWMaMv1NdMF1XCVQFhX2E4gGsRVNvXMBP4Uxzv5bkaoPXgs4tB9wACQse4h",
  "key17": "5hVwyuCEtVrw3TCK7nq1ykuGfofRW6omsTYTSs38muM9zeeC2YnnWGXpZuVW8BwkarwBjujCmxPAQwR7SLpd87W6",
  "key18": "4EyTDFxrfyCuXpwrSwNvPWcknu2qVTqZm6quHMGvSVibZUbC8LDMofXxGuWuRBLe6srkApy9bRETKDymPUxCK8nG",
  "key19": "efQpLoREFriXqttDL1uy1r69UJUHjSV3BPdnVCcAceznRKSEQNAZaU9p2WkhLERvxq7idAPtC4gAVCSkMjDhAdF",
  "key20": "4xavRYzYie3C6gDsctfuvhXzCiTkJetra6ptR1T1eB6ye6SRkG7BbCtJuKtP6grxR4HvA1XfaGpMS4b8kbNUaQvg",
  "key21": "2PK2Y65A3hkCSHgxBbUorh1JYA3wmUY33pcjiKGEBqpZiQUUcLXH5e8TA7c8uNmJ6TGPkRdnmsBGTebkoG46T92K",
  "key22": "N8yVeR7xziEf1foZyQZVeUPu7zvhfrDP7dTGby3dFanhtLxaquWS9moWs3r4e9CY8p6TQtoh35L6spjmUpNWof7",
  "key23": "5uu28NKvRzGGZZHBj48aTZhnDXw2TRatB9E67VvAWumnGgWKu6BsQ4ZRUvPuSqTKh3Pgbeggjc6MRRZqwKZLrf2z",
  "key24": "4m2NugSeewzkHsQFx6wbty8cG4F3fs52t3gzcwfMvMApuFWUck3J4eUKwb1xT1uMRvQEosybwKtRBtWTFjtaC6hs",
  "key25": "4JsLrGDqAqARDB7ULPfwDJ4VZHpsTiCiUgMxi8iMEPBzeL9H1ATjAUPzrsnqssnHisG4XQhNVHL49UpWrmmtVsXi",
  "key26": "3QejDE3KhpxQgVC37tc3uxHqU582fbg176cotupfvfso6MgMbFtVTGrKjBgix3YbfH1J42FAhCx6V4jL6p2byQdk",
  "key27": "2awSmAYqWXkJz5DiXKxi1RMqUxhgM466sgCXBwbkzR7rnXjYNDa1TP7JmtGoRNm3PnLxHyS8mhYsr1PFj4majWwN",
  "key28": "fAjRrtJkWnz5GUwU6JQuEZxkDzZdCPiuNFmjL8uqNmWweK6YHaHgjN2ykfTcrsXw94J1EyjucrLwpoq6hvVUdRy",
  "key29": "6MyvENH8t24W17PR3EF9ijgc2JfnHQkWQjcwG3W4TMkeiBgyxA1mnSE8kKokwxLfi2hkuqjHJmPbJJZKYpsyzrr",
  "key30": "Eu3PCgt4jd7ejmWFgJYh8VjWYyDSSTwHibC5wL2Mgdx4SCP4NdUgv11r5SoVu8thzhV6MMTqQrsHAsYAqL3GJqf",
  "key31": "4Dng4LdVyzgZ7kXXZ5jgZ9Y8revCeCydo8jWzN4szWWUV1afWdaGtuzQG3zJ5MRmgv1pct4M7oBnCTKRGLrH1YLM",
  "key32": "3z1Xhnf5vh1oZDH9WUr6qdNZyEQnHAf165WM9odbVEcqhsQFVEVycrZw4rmumaheeDKUDyaBGgEwd3ruJrRkUEAN",
  "key33": "2Jn4VQK8TdNopJYcHs57eX3dpkfPGrk3uMFLwEdJyC1nhvFtQayTyzZnGzD93FYhuV5TroDyzLxZP44Dz7e6GoaX",
  "key34": "5VSHoZYR4KLAJtqzeSSGA8J9xVwfoesUMmVxWX8Ykq4KY4y94jdsob4u6Mr9weUV7z7BBMttGqjQGXgBkj9gSgsM"
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
