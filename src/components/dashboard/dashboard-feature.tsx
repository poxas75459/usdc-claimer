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
    "3c6oXS1w12wrixkyVJzYC89xvaXHCpCcSB8RUoEWF3npRJX62dQXbuWV9n5wqPXZwkchVN6mZB1hG9qN8HZxJKZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yB9iW5gFS51EvkvhCZ8fzhfaSdDMd2YR1B3KxP4Z1DbUmXtns9vYZBDyzRUAtJbRmrQTFkYZHhJxZ6QiC35NyRH",
  "key1": "4ccdtVi9FC36aboXfGHD3Srx7Lq5muaWYyUPNxQH4gRb1rDYsPkypuAytLVsxfB41yfGG6kf66eACM1RoFsX8wLc",
  "key2": "2FxkMVz8j7tC2nEvpcg4DUa4FkMLS2peH27RdyPM56EtRaX4HkgiZVM24TEMFtPZQdhEu3gmoQ8hLNqr9kLubo2V",
  "key3": "5qC1aobWynzgsgKE6UbHrSvLuueJ7UDC9VeXzybMrbztHK58DjQgC6AJHMyostwaeQ87qnC2eHM2HSX7TZPoEALx",
  "key4": "4itqsdfcUU1dhSeNQXiVmU4ipKhJrEiwGVuUPxPGBZXU98S7iRrxq717HaeWRn2HFpbd924eLYA1jnHYYFvv2obp",
  "key5": "4HLPqUou41SBgLk9koBnZwBqRPEhSij3n8CqnD9r6oV2YFuKWvLPbX2tLnjS9cZtGNFEWVBhch9pMLnQZefCsnm6",
  "key6": "2iGbUAoyi2UocRcaw4s8M9FiUFDcbCs9QEELMyNFay6Tk9u3D84ySM4SrhitNiT8MVdinhYDwLqHCxxZigdKcTqi",
  "key7": "3CpoQAL9SomE32JFA45ugHdu91nWuRK2Fi9Q6eaQRvc9rHNaprwD9cJ3fQmQsLgP1sSowY4YxdQij4opqmNUa4CS",
  "key8": "5wq7N58XpXxpoF8M8PExPBGPk2BSbzENDdKr4KuUhejP74EWEyoBRZdXXLj6VvQo3BeRxSXPcwhL41vwjknQiCdo",
  "key9": "361d9jtzjfLoCG9z55CouxV3hg7ax9yf5uEbvM724pzBR1or7n9dTMK8KvY27ufv3djPyrx9ejaP1GPTm3MpFUPw",
  "key10": "3pmbchCV11QvwZBuXKG5fAgSd1Yt5wiqTamXqeRcxWWRCzHFD7Mmz3YGeqNAB7c7TGRXoGnfmZvTHKz7fEGFbnVr",
  "key11": "1pkubYq9LwtfRB6HWMgHgYPTZEugSt54Ggt8mQfS98Z8G6yhdj57CwXbk1eaYJgnpKvs7dAkmxjeo5VGsefW7b",
  "key12": "3g8CYdbQv1qfcgnHkwotQsnVe73LUyhHp3wYJSFcHzkyruwcb9jtPP2RHHF1Ub8gNJfdmW7E1ncDy2YTD9itzhZt",
  "key13": "3N2Sx41WLULLRhZf3J2pobkaYr93dfQEa9DTdzbLwGXpqTX4UGqh9nAPatQHShk4zTG8htvAaPjjsGQ8KsHpegZF",
  "key14": "yaH3YqjZAz5MLACjng6ZjzpJccX2ciBYzuKhGwXbihqrG3eEKWQgfGHGSik9Ytf4sfvYbesHS8Y4ZLnD5LRcNzM",
  "key15": "2dDBHup63AYTCXzQU8aLNMiqS2DSw29x3A7xzexUqUfgLf3A4MWJDMMSsQbknxt3XYFbPkJc8iSf3Wno8NkYTqb8",
  "key16": "5GZrToVRiUDRdii1scgvKn5a73Fi7SMKJNW9RedMRwp2k8RvFAjkGfnsTF4QtmsrLoRgUere5gQStvbzsBugvk9J",
  "key17": "2dYQZebbzAGGj3Vkx755tSiZ5KdPqb6bTLvroVPHMJz3kCdNdsGrjD31j2chgRz3zKatBvaSKm5enFyuAsF91jTT",
  "key18": "64mKwTLHrgyv5WdUoBNxHZcun2AGP88K6TD4Ds7qBzCef8dHYmyWedf24UbFMheaKwhNPZQcUj4JxR17fnnpMfn6",
  "key19": "332mDo4y9285JGasYqW8fQMNpQb1x6QRQ5Dr2h4j95KkkuCUXyEEFW22YkwEdeYEgdg8Uw7WmFpaFnXoNxia119w",
  "key20": "2SZVF3bzjdzHmbJkp9cbALtQAMcca9vFW3E2BnVSwNbwNKKsNxbs5M8p7fqbxtn5PwDtV2Nei3RncMvGjhHMbUZA",
  "key21": "66dPqDVZP13BxLXpxWM9nrRiSYsSv1mQWjqHUa3ahfbyhuttPabednNLVcHz9RUvFkss31jaPuG2x8Kt7i1q8yDY",
  "key22": "5SWQZUUdEJsyCKaQ4vShaW8qyvc6C4CHz35pTGNCnvAY3UGR6cj6yRrKgzNe62khFLW1FBNhbRWXarwZoLCJNMhh",
  "key23": "3MCHAyPHTkBAXh3wmLjPz6NWdmXvo4VKSv4D9bfnBigtLDJEipXpiphcpZfXstuP2DCWqXkMwVqme4rhUbJb5osq",
  "key24": "5xqwydANjTT3fM3RosXDoJ8exxnqvfxAYFnayr9N5TdhwbAEPUjYfpifmGDAD7nma4vnY1EcprGkyHQjz5XMipV9",
  "key25": "4Fy2voufnibSpRFG2eymm8W8QUapj9anUftW3Gx1pntLFW8NBJa43gvEg9ucDwfRpC8y3VKPidUvio6p77LN517x",
  "key26": "37CJ9hnBAAn3qQNCCxc5JerQ7ZG9a6VREgEWw4aj9YgFGXhD6o6SRH9cDVFpKJzncrFJpNrS5BtGeADnajFdUqmn",
  "key27": "4cR5FmnbuZmFSGzVUxtwAxeow2qYcW7E76sfzS99B8xkhdsaYpzrRVKjUCwXhkCC9TuzGCCAjpMWePJxQpW4Sp3H",
  "key28": "5AnmHY4yf4TCX2J4HcM8Tim4TRoNnWq2RUWGZcbzgBGbqSzKEWQ7ieNqeQBGE2jTfuL7ti8LxZrNUBXdxDyn8YuU",
  "key29": "4Evv4kBJnQ7ac4gtNnjyrzXkMN5vfAiFRRkwrCdEFchG7i2yTiYofDGzQnzSQNgEfVq4wzKi83CUtUtTLEm8CLwQ",
  "key30": "3Vk7d4xCZL6LL6i2h5JhMKJMMaZbw4vXdh9dYF65sivF6JEp9bpwJFUvUPrXBwJALLiAp9C9pirNdHpb8tY4xBs7",
  "key31": "3sg7soywqpwMm9RfntBqwfHZxScRzVnVDtXxo7hzrqSd53yyAwhHpBF1ggVvsPtHgM8Nb5uYzPRVPFtuex1mW1FR",
  "key32": "4pxGNgnAdgh14jHquRYwMgATxpMw6d8z63V4jNqFdtaGmQQfCmGS9QQp3jsxCmmLmsFh1vCzHrgXVVSxJQvRUrxS",
  "key33": "3sYVkzftryScAAVTSgPRvE8SZ9a81WfsW5RAPTPYuoPJkdRkMgv5RJpjd3ge6cwk4eyet66At9CwfDmyteviYN5d",
  "key34": "5ugQjaDzYowmZB1tuk7BqueKUPnezJEeFiQv23wVGJuoK5pBzTwJz7zkCs4cMejaupUaMVWww1ktUGt9LZFmgD3R",
  "key35": "2xohnWihG6wZSU513SQpsvnbf6w9bcE5BtSBgSfFS7Pz1KXKbF1rCJYh9ZCE4hYyVkfcamRqLY985Su65gsqzQe9",
  "key36": "z9hown1DNNViK5rCkM585B4UWsmTJrP53Pfa4SgcjprAjAs1B5V7xK9wP4fHj1Fq6uFwMbkabx5b3qqP5h6wqm8"
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
