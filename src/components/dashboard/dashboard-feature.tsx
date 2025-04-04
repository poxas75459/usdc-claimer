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
    "3iQWXk7mjLLeeQLyLffq8S1gwJz8zdDzvuSLZUB9wgMvk7U4SJQ7ArmRJxDGz1bTVProG8ZfJVXBrK94hnpb23Yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TutpA5zZMAvVeeRTJ391LTuAhDexH8eiq1Bu5ZLGCwkEMg3n4Fus6Kqs533VqXVEajYTd45v4cQYjwqWfKPwchZ",
  "key1": "gQ2pMXZwtckft9SHi8jBEXHoHL4j76mYYLx2XH8KvmV97J2yRSoiUNDQQ9Yf17ELxVVWrMvG2LYd4dPKo575q3D",
  "key2": "4sRLzD4YqkxAHdRL4GvKm47BSiJVD7ci2n3T2eAYjyno4LB5QrHVS3VVk81r8boxgoQ5GpAafj6GgtH5611BQBC2",
  "key3": "3c5XEg2f5NtiaVXgnhES8brTeEVqF7k9p7cT74cnmC2ds6G1py6XF61Ky1p1Ndu2PpkZF7MdWEpmD9XdqvJKEEj7",
  "key4": "7gC1QqZChS8EfYaLBCdwQpY3uFZf5uXB3sEPBQUiezRLqEGdcZMZkuH9MKNH7X9HADM1gJwUPMvKmtQqXKyi9A4",
  "key5": "2ztcvWLp1nAJ5V9FrtgSL1qzWX1wAmtw5ZVyhwQWh26dmHRZ5bKYd4eqqMkRh8xqsJXbdLQeCP7mzUqxg8fg8EgT",
  "key6": "5xR6YkbDRB6vNATT6WLoePa3sdkAUA9YCktEXf1hxzPiB8H7sCLHNd418SkNe4oUPdSusXtxdRbfSKyz91hjPQs5",
  "key7": "2DuRie8aqr4J7Ertx6AtptxgUVjv2voazj3wFQ61h3Wyd8vHKmKZJSDiv3gB8aGGuox2SFBrDXLM3s2CjkQpNPG1",
  "key8": "KR36WAn6E7PGtyQJ5TRgFvKShydwWBH8QxKJTEPL2fPsshZxWLnh3wqV5stHqXvEhV5MyDk7CcrD5BA7J1tBovf",
  "key9": "5JQN4w3ApoaLd2ckfzMgz4y3xa9o3zAj48zEPdssKqCs65nZndvBLMkfxb6Sc1WrkHnJ7rcQfpEJYrG4RVdvm8bA",
  "key10": "CWzJZmiPGFznb5tfEGUxB1wFjD6Vi3bUcAsJZcvLmmPSxsiN81Zt375fk651SJ6TVdpf6HY6Z97ymqBw69x8cyu",
  "key11": "5ZCTCfoghCYrZSNkHTAT91H6Fb5mLCpYUo32UBLPGvCkLWMzaM1EyRYEeKeVfLQnhn3rZ7KX2QwKcjcXhRhZ7Bxy",
  "key12": "2HjUsrKnjNTotc4Y48NTG3n1R65JKyjRDMv33Z2YMfgmpeb5vrFWnkXikkEWxKcTPommQ77EKUEKQczWAWDyYzvq",
  "key13": "3mB7XdUb9YVhNYehuL8KG4LJH2cz7rj46Ms69LMWA3EWc6dKbt7QCEr6a5hLFi3gPLwk5AybKq8gNKJsxTk6uNGg",
  "key14": "5KzgC9tnrcWMRCoUbTKGediWCB1FUiZQi8jueHy19foawx2oj7RjUA6QXpqjhRn7y1hda8VxYoS3YRFk6ufZVTht",
  "key15": "28LAp5c3q3Q12SCpyYGvFG2fAVa1u5eYZHeKw9cFUgdPvuNh2EE3HR6WH7qtgbBCe1Fa32wBvGSHyTzH8mf3jLdV",
  "key16": "2ucM1MMoLNHiVA5gKbR6Y12WdxUhU1mFYgDmLKtmbDhZRGDmHGZqb7um9BLW272N5hqKXjd7wUnaNhssrWq6dhNn",
  "key17": "AX4ErWBcoezGE99wTTq6otLNSi4XgSSfpLBoMvDR8AJtT3UDQkqCMqZM6t4JVv9LkLrDPMCF3okcBihCEmh2bYh",
  "key18": "27wcK18e3z9Zqrq786m2ykFKY33Uoko7F7moB2SEbGBYrCR3kSqFePWzWR7SMJfvVf54JLmXxeTokLSJvRvuQu5s",
  "key19": "5GuDZGdrXbF4Xt5W4dC6c5FzdHaCkQoPYEgVi2yog94RTZ14Ga1nB9UwGwjeMhg99KSB7TrbBbLKgZ6uoiyWfgk7",
  "key20": "4oqDLTEermSkxLLsgxXZP3uL4dNKwxqWvwDmuTi4wqXvYSqejdFVvYXhWwdhMCD8gwuTGNEuGQxEGdPsc8CrR4YC",
  "key21": "bECH7sbKQvF3hqdc3rRruDo2ZkeBXvhBivemaxmtKpwKrre4Uuq81Bpve1bnvLRW1onzUQzHhvBTgJNp8o8JpqT",
  "key22": "2QQHY6hmHkf52Mz277Zy3ik7g3FQ8LBu1fuWKhSAZ1hArkHfcWepYwxyrNNW6Hgd4xnYqmUR4XmhVpiTTUbexAi",
  "key23": "3NpqPS81yVdPZTSnCynsirgQgXFKQPe8RfnKt87WhqRxYRBHLQ8tndTqYzW7bEzMiT2LTpguVYGcRrwut2H6AG8V",
  "key24": "3TKqZMjrbEWLun5JiFJgybTQAMtRt87MMuk2pWQF4hXCEaDhK8awEFukT8BodguSZPMzrkaWZgEiFtGoG2N5zttx",
  "key25": "2eaMrY1EwxP3nsxsQCGHampneCpcQuKwSqpfUYRGG3BrYf9SukpfsjLcjBnAnrR25XyNfWCTkDzZwLPy3SaYhhuX",
  "key26": "hxcYHQpQb9RnU25Pk9NaaXFW4L2Ga1vJxAwfwkSfHSgU9CDVXPQTD5BvGtioNj4FDgx8WjHAi3ZyevdSiW72QJM",
  "key27": "sjAi2EowYFD2yfEDXL4SmWBnjzkZuPd1VTZNraLcNQ5QpECbQ6t3oGmHTVWqFvys4KNLXQFQYdmaVW1wkXGEGP8",
  "key28": "5NhKz4QXdtPTD2xAN86qAxWTzoxeTb3VrgUv6LW4idoc1BytKQsxKCn9oBRzHmxFo5y3AVNz3JW2QasFMJ2zvjPr",
  "key29": "28xfuyUnatrqsqfkWVvaAfHwkxyWXDi3eKp27zs4i4Hh6JX1s3Fi1ZVRJ3erFbCZH2ZVjrNUngSiC8dEgPWXn1Sf",
  "key30": "F1A8YznSL2YoqDPkixjjSFXEhjEy6pyvtf5J2yKYV2UUfMuWGV144SstPaptNC2z79j4VPRnSXggcQD6Wj7HvDG",
  "key31": "s8gbjZ66BWPLcDeDJimjSDHP3vboNnyc3RYfMmJqjdbJrAGKo67RpubaRK4LTJgv54J9gecKtTiZBti6JLKn5pM",
  "key32": "5BNPd1dQEqNFG1FqEo2ToTzPHVW6KHUXYPrscB7jmkReMoaDoeGwRPcXQ7Rn7kLigU3MMLnPAhtpabFq7FU5E7Mi",
  "key33": "4FMPmLBru9YXT7mqQmz9GWPAkVMk4sH2AkD5efooHdu7y84BFSy9EEchJtv3KHykz9sa5YxMWgk4aTkQNmvkEK3F",
  "key34": "63dkmYGfXYgmgwY4GjedCReJpvdfSRDF2dgAxCEUsYi9evsr82Y1VuykJHrH5qiNxoahCAar8hN4TfeUb9YhZnjZ",
  "key35": "4xUknegcokkFNzJRSbDy22j31Z6yJPtzTyz1qsvTHm5E3rxBi5ipP3VQY4LWQDPLc4rZdW4hxLjXa3sNd6RoHYWR",
  "key36": "2aY7qcNPzS5QgdApJ3pYQ2PWxDoUacnexP3xQ3U8sTEpNqn5NBcUQzeKbfrr4b7bXf9cT4nEPSKGPXAc14os3aVf",
  "key37": "3oK4QfNntiSj7V9rW4iUMAamWsdcz7m4KNzTqesgsZ3E1La6hymHiRdzb5Wi8Ujv6hWW2RrQP3GWmYN8rYBUEtsL",
  "key38": "4expnjBG9AMphfNRLqieEUc7HGmX4pbJtPjfcC7G2CqN6p6B4hDpiUgCMngsNLdkw4vz1boPjJZx1TTUduV3FBX6",
  "key39": "5uDV5mHTc34uG7VGNbSVSmj5tXXjH9RBdJcCycfz1zRbkeb5godFh1MpB7oq8hXgAYXgopN9xEdJyLWhyzyviTYS"
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
