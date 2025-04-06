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
    "3NwAWEA3kCg3Pq28x7ptsSY6Kf5eG3UP7b4tNpE2sC4UGLxoYV9LJsCMFdu7wQk9WYqiGSeZUj3jYXaKUY4ARejC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7mUkntC7XhNXWh1fwYiina9tdpbQaKJcjmoqfEsfyRcGMUfE6eVz1bF4PsbwGVc5JxqjqFVDB4dwCgfRB534X7",
  "key1": "5MsCY7keXRmeFujsumxc5VmZ758ycxCwpXdDpcPUsJDgKEcUX1E4SVCyWgxA5BC42xKzFssFnACRM1A3GSBM26tw",
  "key2": "gGBTByRw2zHQ2vViN1aYhQVTZa7W2m4teaC2v7TZVvbfdDW1rH5s9T5AATfTfGg8kF2Soamxjq7TiNTp6RF5dPm",
  "key3": "33X2wvprrZY9UsTwfmH9f1vPvA4iaWAv81SUi4MdPNR1MoNSbPSCimiW1QxcFKZZkZXrqrN1FfMCvPu4ZiyEAFCW",
  "key4": "5tARQECUp2NBjWVC2YikDYzfzs4MSm4rNgQdfSGyTxSBYb588CBVx3FYz4sBm8cUkkFwhDAveVqmde5MQwRH4bqH",
  "key5": "3RJKMVXkqxDVhPbAnMcXJUXXRrcrhjBJnpa3CibRmyXSLvU1C2tUWm88tHvWHwAfv8vcFaWoYfGNW8BJysPHsd4",
  "key6": "4CzF75DePrjpg7cjLqASLxGwPUeou8F7S3gzNy9WZXiK7N4hc4KuAeQQVN7rRBF2SKhBJxLRE8TayPGDHGYmqyAw",
  "key7": "2Yr7ncb1dPTQiJzx5Lf9L113rMRnzh5YUDFoe1p88gp4yJ3SYXf2fduCevbmgTXRfG2w3ySgXKNUGdSjUF6SGCPP",
  "key8": "2PZEDwUqnY5HprwK11B5u7KuMeYsdMSaVn2nNtatbZRiTcwnCFdgm4j6wBpGUQiex4fRqS27TZGfkAdxd6DZJ2GQ",
  "key9": "4P6Ui7gFzUJ9BbfW2upHAWeJUKAqxkKbhPnX9ieZbxDpMQprFBHijXuoyjh4p8zpjLKKd4oSSS2PnGzLJk6qSo9e",
  "key10": "3ppjQ1r2MSBRrrKpt84hmipBxnPcCF2TrBrYyPmwV2yMnCFBiiGVPCVQv5XGwSk2nf5tVJY9eraxdqQMAXoCAFZJ",
  "key11": "4UTJmHvRRNmNqPzw8pqLw6MFBbxxmUbJ2NRTegLR5cEnjKw2Tus2PWaZqd1Q5ZbpmGenoitwqrs5iQYtYoZov4br",
  "key12": "3tCgxii5P4icwRhTZJudH7Py86H1nzo42Ceufdqgw9Jdze7WHtftbQsm1BFoXa42xAwS4ZoX58q36gN7o9PdqRSd",
  "key13": "4fqUsCdCLZEZNznAeZfvmpywyBEVXnFyuFaedWi8s1TTUH4Praks4WipFBJfNXjuYd6TVgLrvj3uhdRqfNZtUUak",
  "key14": "2hTE6Fu3WrZGHWTpaAE5zfSLXmjsmWgDFC2f37ZisvmnZFAaWXW1onCCjYyFpbevdm36FxKztABV8U4THfXMq2zb",
  "key15": "5oNZoV592EVWrHBL3EHBuiNySo3HPVJm32xTytwKJKDNsciWtT9q1eMPdJPqNn3PnAz2sVdRg2V4aLW7p5vTnFwE",
  "key16": "47befFz3MkY9SZpo4QmUnMNz6q8WRvaQw9T2PRJFBj9Pu5vRyRwDB9VnNCSp3tYteszFjAGcd1rnqQxgZ6vQhEaY",
  "key17": "BN5LRWq6nQEHFA14BciXEUVdPcd7R7qfCCE3bjvrhWCeeu2km8Pdy9eE2m2TFGLkTzVuCYgsXMuLRi6BRWjbL3k",
  "key18": "4fnziXz1pzvD8T9tTDvKkHpGvEHocxL41ECMPu8x2e4CWpmgZoYZSLDCjjtDbUrnZPtYn5JQajTTQjFn3nA24Lzf",
  "key19": "3facB39dD9Yt9sXdKNDnw7c4htMrWBs1sUzFYvM5FX6XTcyNQ2TmHvQCftkcy6V9vaCEV2dgbGVoagXBfsjuMQra",
  "key20": "21ZoHvmX98XcjoyR2agPzjv2vcs1G35jd2owADdheojREkQy62t3aS5kYpWx9WYwXczTfQZi4tPVniz6ADXiBdaq",
  "key21": "219Ja3eZTrHnMz4wE5GkxmMosyLEUspbFB12eWk9TW8BR556bZRJ6wxGjPVX8vxgSRYGWzkUsKZTVJ8o3JM5dU8E",
  "key22": "2GGwM75C9GQSusxPVN82fnP4MMyE2Egte1J5iztTwxdzmfg2s2TZfLunby77D4pSGYfAyAGNvrrxnpcbpACwTmqB",
  "key23": "4GbVkwo8skp9r2y5xHuJbsa3Kc98vsq7H7rZVFzc1M4gRKBXZzXifvfca76oRFfBCKmA2N5zCHGBq877Jzw4k7KL",
  "key24": "3gDUAevG115Z9t9mpC13hLDHKYFVwiD151F36A3a72AVqkPgjCtVEFNBEoAfuoptDpWUecNkD7ckn8hem5qAF3N7",
  "key25": "2F4SzwAp4UagHa7xPz6f4jg2ePEBy86dWsvoTDMLKChSuFZWLnukquPXYYqcGg2cmqjnzvVXmvW7q9bJmituGoTY",
  "key26": "XMcUmovRc1EffC7uRjT7NhsgSeb1CaNxqdrxQjBX3ejN9YZhzuZNKEEgqXbnrvkWLDQrYyafSdQT7hiPFCFdWPS",
  "key27": "3CQqcHej9xPSFvqakUkp5MLYXrLu299kVFwq5z4n9hMFAEL1i9TR95E42aaARjrAAYXGSk8B8gVLK429rNK9eLAc",
  "key28": "5Xezov5jMfWkSf9q3ibozisCE1BLibsUoGJT2SVQRswmdgqDmGhjxEfbjwjajm3wMWFmgzbSsH8fh3ps6hePr4k9",
  "key29": "4L7pf1JS6WUakobat7Vc89UmzhYYah9UgnHx9DSAEer49BsXhoehy6RWhYM5ZTLRWBsjkBxVJf2yqgXY9y1hZ9tX",
  "key30": "2WeZjFVmDQbmpwb8jqX2cJHpx37wRPfL4FqXt4Bz5smzRaTs3NzGUDuMctJSgoXrTaNv6eHBCMmbQdhv441iaDp5",
  "key31": "HUGJZjExBMSKbxqGrNSgraCcdkfFN8iwhm9WFn7UxKmE8Luot6JXgh26QZGxmMuke1Q9fJq3FyYVsHsjGcqTuip",
  "key32": "a3YJ7pm5R1MkeJsxoPJpRtF2Z6eL7LbY6mePCTQuMbquSpLAA5NyKs39ertgSCNmpcRT3Px5uRioCG8UG6RZy7g",
  "key33": "AXKhxDukmQQAabD3cSrQmHPJMc9ZGbaCsGrnQLNgCP8gUoE6NicWhYxHxFW2VpZwpWZwfQRetTajtqi3nGJgfjL",
  "key34": "4T1dKhWc9HafDXuJyUsd3mL9ao16D9bSKtMQidkc85ZEBfqnanUhSjAVVTK1WhgceLPbeSfCfs4nqYZ1kCKEHTM2",
  "key35": "5ip5WArwHJLVWco2NEYoFbWKgjVRjUsXJBRixmmiMhtzEe1MH6Z8Gr8zTqMeH13HAXxydHB3Wf7wvN5cAdwMs3T9",
  "key36": "5Ph9qs5n6Kbz5fpPkCbf35frogmhL24X7VYTF7yMexx3YRE4ycEuCns5zweMGYkRqaznoXntezQqrDCnvqePNdZ1",
  "key37": "2RXP3xG7zmexumsk6pmxkDX7XVHvVKrgBK8n6gsnyTtcapQWVDFEX9vU4GQGrpF2dj2A6feo3LDJTG5XQsJ36j5M",
  "key38": "57kWEq8xhm6tCj1LtLTCnV16MaTu9S3QYQ6qQ6AHAYZt9out8nPTDDJeQuzuUc5YmETdE9uh7v6yFWiv4jEffEyk",
  "key39": "3vwpWttC38ghQaDHhWMPuFUqKp7oLMxS74AxJTWmv79rjxBuMsYriM49n5phV7htXPhEi4CdGB3dxUX5f59RBLhf",
  "key40": "4wkxSuj5GxWKUNVmL2aZCmQrzH6oZgZM41BrK6ExFYJkqZhppWEvePdsfnUfg6ScebCHbwQ2VUBLmbf6vM6qViTe",
  "key41": "cggCy4CRhWGej1tUwaMEm31Vt1hc4esHXx2eSay3vrZWW4G4yeGi3EYx68agKiex5wkyqXPxMfbHhyWWJoT9WYo",
  "key42": "5tYKJUttqHtH51BE2wsh9VNXvRM7kvL7KziJA1GjirVvqptEpyMGfy1MPeG4p3WCjF4Z6RWGwPwForyJTQSsohAS",
  "key43": "4D3xYVHQ1ARZ6mDQtk14oXwRGW1osjo4yLzwxzmbPrsdksAbaZvqepQX5bQtDp6rcTsBUA6JVVmeGz95pjhM8Xx",
  "key44": "5pxFWARsYnAsu5hFQoVqQUR5xGDHWMnmcqdHYuk9CPqYE87edoD4D2AdPLFT57qkkjg9RaJZfhqZsDs7GtF7gcc4"
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
