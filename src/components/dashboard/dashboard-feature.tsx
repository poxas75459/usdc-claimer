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
    "4LAZfEVN6yzB61DEtroECrZvpeSqgDwAVAS5ipXHQiwdSYgZsFoAJBsmgK9qe6s6dWvhFgP98UUpjy9JVoYEVQRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emS5KtnCMyRe5Tt5DPEWtAh8FnMHqJDgQTvq9Q2a5BBteXkq9Nt9q3a66C2AJwM9UX6F98cNmjVvXwKWHMY9Lvz",
  "key1": "33YmhL8UzGb9drECJY2cAowxuM89rdbL58DCyVf7n6FGhDREWkdoHuZmqyJUTgp1M2ubvAeLGzesApXFQ1d8M5qf",
  "key2": "31oiekxJhBqifidSJqq359oarz42Nh7gxbuB5M3UsWe8wkWdaBQxFWFiQencNJrizvkckLUotdJ6Rz61BHDDNz4d",
  "key3": "2UxCT4Kpzck3mpV2kULT3iC4hq2EvMAfvGkLmDDSAPzJFc3dB6PGjoW3TjimK7cL9rVt2qDihGqnMVtGoVKykLFs",
  "key4": "3ZpHhVevBbLdvJqTAaU9Y6QW8bwqZCNfyRqM8YZzJ5t9a99WrreHrU5K4k8EZc5nkdqapcqrVJwUPfsunhDH5yEg",
  "key5": "2Ss4MhALqVPymNkDBd4PSE79fESbyjxMDiJFW9WP8ThDDNBxLbuUavELDW7dXRvSq4FVhF1XsVRFxgyjrFRquSiM",
  "key6": "3vHjgxNgNr2iLY96iDGBoPhu7UJK9FzL6HsdGWy51dNSLrER57ML7tg3RmcMdTjTz4FXeh97jcs7pSkNkhA88oLi",
  "key7": "FeUoCNWmm2abPB9is9A9CcAp9UbiePeP2nNPJuMavKtHCoUva8ckRHoS8XtnBL8ihEGRdukAGJes7W5U45JYLdS",
  "key8": "2w4B3XBGj6EtDfGMqfJ1b7xfugMfBvuNgTKa1FSixLgmxLvSsHnGe8XDeK7J1yTQAG1D13jU3FERYemgiDRNqzmR",
  "key9": "3cWfTBt4xUDS3PoYoaPzvRHW9vQuY5vefB35aNwRTCXH6tBJRyZzaGykF2ioXCKWNSCm2VJDuCn2wLKs8QnFqcsN",
  "key10": "279QLBR29gGRP89dvtSULTMHiCeis8vMtPjN587B6Ztob8hdtRGXiMhggLBLiirkPitgqr9RHybBSkK5EFsB9QzZ",
  "key11": "BpSc9MrE4uNgzguExtsmV6fKHzG5ay88uSwF9reWqVDN6hge2eRTfodqn5dEEZcMAwtvWgFtd7wFcVqJVBDgEkP",
  "key12": "3tZwWkAwCCaVECuwVGBSJC5ie6iiEhFutrKPkU15zD1QxAVHBANL4R7ZWseD9VBLzGirfAu6YZWw1vpgVC5GMY3U",
  "key13": "4ZQ9LqzF2Xg9MxShbtyy1U3aiVid17Qscz1cdihJmn2J8KYhmKaqzpBpPHkTuUGrGNAFJqZ89Vohx9HbvcwmRSE3",
  "key14": "4JYHL7Efmw1KfxmqsD4GiniJoeHLAsbBxyXUinWBYt3N8zxnTYyzbsuSj8rGwibRhZdRRaunZ6fgnrzhgrxzSG1e",
  "key15": "KRknGvK8pdWc3keeKPKwrNVcSdVBY3zXL3Aru46PHC7M9T6zru9K4dUJTzjNdazt6eu9gWjN4hqdhznsQio2WJa",
  "key16": "kaLqAGS9bKrK9oZGSQLGtBKcHj23sjq9nKT7HCCUTZ2KeFyFbVz9acWN2Qx3pYJGwpfyWvfo8Y4vfjvmRbedPfj",
  "key17": "4GZGUqPQEwxb5bdAhEFJ6ELwuL8dxebVJm2TQRgLT9cUheKmJ6sAYjsw9TRAVzjZhFsrwWUcxdoBkabmAaDL9xvK",
  "key18": "5EVmMobgJd21o89CZTWrQdJFyhejQpiGejTuetACAATSQHanQy6KzrAutPHaADJ1ZAJwcBtrAGkERuJqXsfWnko7",
  "key19": "3D5RiLg5J5z1NuuzxKeTrRPpUcb7PfiRKSUjait6djy7PxjhHQsZUKERAAhB1RgJtvxb9A4La9HMWfkyFPwMdyWb",
  "key20": "2pCkMSugVqt9zTaYJfkCMVQEJtnsXMzaRRx3NvZZcscgG4jnr5unSyuZTZKHLGxGdHskWUYExrVxxL64rXRGMyf8",
  "key21": "21GYFETmNMtefAPpxcvae6oSbPpJzP74wb7UgFVxnHrQM4UAKfmyZ7TPSGh5dmLy9PzLySjigUiDsskcrbfi8oGP",
  "key22": "e3vUZpkZHK8TuKtJfFnZUxa2n3sYSBQW1jCMBwMEtGtBgmCtUVYqf9tkKh6sj1oG4AXbySkR1J1crNAE54w8H3p",
  "key23": "3w5XZ3WE3HwRNU7C7BfUkai6jUyQsPyREQmwpU9HG3vkSKMfRkzuCb6p3b4gCmrJKeCuzE5nMSV3M4x84WzWHzGB",
  "key24": "4ULmLeY3Xvi1bzQ5CXTjfusEBpVs5W7basWQpQ8QsxsXsWXmBtYxXSUQCu1swxXYq8ABjH6Pb779835ANGtPATbL",
  "key25": "5tJAQfjUTTKkPMpsv1tPjfcYmEpTwfoE4QVJ8TirQMH7c4YgSqWeef1xME8uamcYZcxCd14EdkZQmDmHJpQggDBw",
  "key26": "48yTibfKixqUJhaHxa7mWumvy9d1wUhqGFa5PKtEqboAm4Mqq6ytbShqbztJJGAQjQpaJS4X8fQMr4sKxwpVkfBD",
  "key27": "4SmdpcMaecPZJXzcT5gtFDVo4sA715baJprnxEo8D4DieKvtT5eVYf5bcX3eQ7oKZCKVeS1J4AytUfE5QypFogrB",
  "key28": "3Maf5Yu28nikWMs8V6EQxm1VaVvvpqCjUHcn9NTizWJWy7tT6KWawNGud33qfdeQYG16CWAZMVdDc2aiK1tsuTvu"
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
