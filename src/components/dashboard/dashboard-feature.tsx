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
    "3tMK38oJxrJHJV1AL95emRNECFrejvFZJ9BoJL2D1TLYKh9pcTshJhAV3tyFkkjgfVdFWoomHEzgnYbqaTzkoRpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sZNZFk4z6TByLYvcnTzZnz8N7kmkMuXMNitJe6PXVZ6KqbXGyL5dE9nVXK62Yd1HF4QW8t1snYEdsVqRhJ15UV3",
  "key1": "5Tw8iQnWcCHZTVUwbXMsgYYziUbBXgb3YfRy7pDMxEUzhYm37MJMvG4g8mLGbiE9gB1LNTerxSrZuzpfYabTLsyk",
  "key2": "3UVfgF6CSg58TESnqvMCLyqjspZjpvsZvCa2GWvgzvf5ECb9zJ9AbshJH9wZHfFWzhavtjbechwaJamJMrD7YNXv",
  "key3": "2n8ZKddjFq39T7LM8YjQJWCgrdSDBcMKhbnuH5ypB7mjvMqr8oRs7h4SNvXHmrHnyfap2Ki33M6wnLdQGTkQFCod",
  "key4": "JSYVxVCAs7o2webSm6eeS9tccDgPSi3VgBCzvMFszTX7cBFyc8XeeoFo5hRTE5gjyxUpFFgqjTjfbRchfhZiob9",
  "key5": "TnyzcnSnBa72uLjZgN442uxnr2CsAcHNCzQnfLUYj48HGcwcfB9ybE9EGxd4tRHCMcZU1K9ywZehbmLY8XUWHkg",
  "key6": "5f3Bjp8gEVyX1XkzRxJ1qFLRMaeFuS458LvtHK9kvpP7GTNg9TSYYFob3Qfv2P7src29JU4weGBWAmySjhtL7uzy",
  "key7": "4yCdoQuASN65gqGj14eD1CmiT8PgBqjswKk2FGG9Tr3tMSns5heUrBy2oiqcfZXKgj7RZZB7ZrXhTQkGazq9ct8D",
  "key8": "46o2bUQvWuWVDPUSerVZFt7oJFc91VPf7Ke9NrzUaqd2vTWAQz31wYCX6WgaS7XA8kA4z3FbYQWar5iNjkZWAJCC",
  "key9": "5R7tfo3nGWsNiPTQSKbb21SyhF1E5dRDuNUHhvxjrxcg3sJnEBUFkg2NQz2mJuP8bCgCJcCtZ1oLwKu6D34ZSwgR",
  "key10": "3LRLKPZwSX2xnM3LKjMSXHVUTkvmpSoG76CP1ofyG8ZtoJTfdMcV7vDQgdMeNsrW3dsDJYdNKGfe7ahHw7Q6nRms",
  "key11": "3N9Ja8TKxYDzRSCt1y8DMSM9k1gycyNM5P37o2VUYDvk73joHT4iRUs4VsavFZQBvrDi3D9Bp3RSzKwdntxmdRme",
  "key12": "fzRxaj7m1pqrSLZd3zCoL3Mw3BX6S1FYgAJbZsKTKeXsjmSap4mfmZ6ybj3DRaZPxNzBNJNnPmp5BY7pTbMLP9U",
  "key13": "K2DCAUz5woup81gwj95SasddHjLf8N5TmZp9pUqtD77x9C2F7PwmCo5mme6KzVAMFDAtnZyhuLdPkq8iZQLMM1t",
  "key14": "5ssNgZkhn36fs4NuwS1p1Hxbpp2TCVyqQeK2zx2oeZvvKwfpoEDmMSivs6xmsBgP3noyaWKdgZJfmhKsQqjWFzkU",
  "key15": "9LHe9bDyz5MpvixToPQwMSDREGccGE4Vpdy4eTLjpBuv9nBE5uc72EyEyLHmivW1kCyCeZ1DZPfKmyhzaGenwJh",
  "key16": "36WW4z1ZAgFvDx7wMhVe6A9DFzH6j2GT7rhHyNTkBVmTczNR5XM5yREGLXaGk3qfYccxg5VDF6Tmh3P7Vd5EBwru",
  "key17": "3pu684gPWUnUe4V9Yybf35qwb9YzLGMJYhgpyoFGq8RcruXbfJR3cNr8mG8AdoXsMRUUE1veJCz7nXSLAyAiSWNA",
  "key18": "Z9uKrcmwTa63eZEufwnsBY2FbtDLEsSxzjWLZiQjrx9GwCXceXbTDZ6rMs3gFsjN7njrVdCLNCxzf2RsS5S9jow",
  "key19": "2YmmetSHJT2SccBzUXh8FpSgncfE1ncpW8QioZPTsBay49YfqEEg878PS75QDt9mRF6w1fRdvncKK3YGkJWtzmsZ",
  "key20": "3WSfMf2HME7Kp5tPvUerS3mL49ReHhhhpBQQJvmkZUEWMBL5ZBWgJAgM5bvHLmDmXRvfyEVCUPHCboH9ctdt5fug",
  "key21": "36FLPx9v8n5xaVZW2M9pnRoAUwUSzWSyycBnuPbYs6WwH5RCXhRj9gWpzeS8LFnUDJSqRDBC6fHdA6ATAhnzCQJT",
  "key22": "47Z3Q5rLN2VA12amCNvmJXYoMPHLcUnnq8T5dzKaB6VYWNKRyZHGwp3dYweRxL4BGYR6k4t9ouNukLoKFShQyQR9",
  "key23": "6sVst7uDsa5krVpYNx8b9BrAHV1HZ4n8hkh5fPGHymHoZC47LqdJTAvxKmQTcuTFg85M6xrrKdSBNqreLrthr7N",
  "key24": "51srb5pXPdyZ5NgLgoQAnzzL1sZnURUFpMEep6GqUQLQG3sof1L6dPMhoSHsrTaaCttqA4g8wq2UrHmYgUdPzzTj",
  "key25": "4AVn41HZ4Ro1Fh1LVpJ8C4kHHBPqHRqMogfkvwcs2VH3N6gZ2yT34X8GMfCpayoWWXR6JJDU1FEZ1k87y7PnTmu3",
  "key26": "3TmCDbvBjPUkgvTvCLaiw9TqznaEdeZQEnfJ9AHkV99bCQVKZwsXTFrKbS9DogcXQtcuzejvwN6Gh6NgEdTbA3Y7",
  "key27": "732o1yRNSjDz8nrHEhAWiVZP5WfqWnH8GKGTsRMr3uEW6R545dXuK23DyM9jhCfwhxsotKX8kJWmqjzTPmBTCb7",
  "key28": "5YwUXZuW6ZK4PxjcSN72jEFtBHpZ9tZ22Wbu6Un6bNMXtvtQqGU97wLKzfNiLArsMBC1rugCr1e26d3vdstvJQRH",
  "key29": "nZM5HeWY2Cojdaar5qJHWwwDpVD8DQcTW53326XsyQNLqJmhbniDjHitjM9MGVxef3VWHzgjAdCQAL1fzeSDY68",
  "key30": "5uCaypq5EbgY4epm3DwNQkDTWSsohWgf1RBDm9kH1Te9Dk25Y2goshHD6eGzbZgBWYYPvmQCrnAjRgVP5nzWYcdY",
  "key31": "67gwkdH5FiCRKxi6nbnVrjRSmtWgkKP2eUAgvzGscrA1T9zfKegfxF1hH7YHMdyujpEE3H265fzErVNmPTBZzLAY",
  "key32": "4yq2x6hEonmBV9CCGUfMvdmttBf9am1QRjry6GGrPYmvvzwxLfv2vJsC6xADk28igXkgDc1eiLzZ2nvr2hL6d4Nh",
  "key33": "4o3bsXkTHuzZJWKCsRRBJ7L2EfQH1Anb6amKyquaQZDND762JJqGPRYGqDvNkM1QWDZ753YmRPWkm8xmJku1YVtK",
  "key34": "2QWxrzxiHgYgT362AqWcLUywY5pqsynBBtaBtTpCBWiSyQ2JnzNzudPewkaEAu4Ziur2qaFHPeipdouKxs5uhBzv",
  "key35": "3q1MKGN92iyEKqEYjmAqjfbpv676BzCB7wZAy8K9WfwjXnBa7snuv2LtmVdJbU1cs8jfmXu9f5xwbU2u9NaaBatR",
  "key36": "5EAm98S81WdznGxgDeYmWGtEL4sBVnGKZM43WaeKkGcV9LqKBJ6i8Mxxv8umUgUKRHa2hWYtnLhbgyjRWp8iLkuF"
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
