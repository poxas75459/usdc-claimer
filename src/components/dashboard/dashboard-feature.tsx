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
    "3AEGExno26jQsZmtjtDWqBuDhY9i3mCEkFKVK6HSiZtxvk3mxhV6TJRrNrBNZGUNgZAnakvHvu4NazTTFapSt8tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoQwsUYzi22WeYXxxVLPFcjeUU6RDKXACAYAye6wWmCG6LEMufmuH9amn8rZNZr8VZ8tqgL4RmbzGkm4B96J5ig",
  "key1": "5NbmEuuJ7ZheRc3BF2Q4nX7MZHqYSaDzPHWhVvUNaNfAjGH8DNNQwvLMDyh5vFfGG5EhzfLw1g1s6MX4gvPaXCch",
  "key2": "2ehEPKRyhNo7sopLQ2MxP1DWdEwsBMCqYhRm1hdYRP9n7dJgjjyEVLHYz5ocWXKz5KKQrdn59HLugYqBwUSzbEJP",
  "key3": "emjvgrbxFeSkEVKfFmYfhjGBJVWCsSBaVMrpLpadmvxjkA8B8mdz49gWjwYKaWEN6rEwrjBzgsWToMYD4zSrzPe",
  "key4": "2WVEUtAJ43tntS73P6kAZYpap27cZhw3CnvGEbTZFuJVr2H7MkCyGngm8HHxheGoQxDNPK4ar1Y9676bNEbw95xZ",
  "key5": "44EcocqS1Ea88cJVCCeZ3vg41owSv4Sybesn2EFHFgmYRZpfmAr92tV1yxNYA9wNoLFWcRub4L5yBETgti4ooMFy",
  "key6": "5YTpU6otpCuWf1Zsn5qgHZxqbJjx4SYS8FULFCjGFzX8LSKRpwZZdTRzfUPFYc5ZNhFgppzM9wBnyebhJSAYRhf1",
  "key7": "2uy9eSB3ce8yyaBCBoti51icB8gQrdK6j7ZqRGe4LhL8LCznrMPTKFytDHWwZhksLbb8hbLcENdBStmkZnMqGogQ",
  "key8": "3QPwAtbXBc93gT1dvKzaKEPBv3LA3kYYnZt1TeSLj3nzzLqQaFkzBtyJWw9K33RNkY8YfgCPpwWuToUBec5ZYf9a",
  "key9": "54xxUQmC5eTYn8b5NqL9Si6vW1YpaQtGQMrkhatma1BHwecpMGntWSMzcRS5Xu56SM8pUJH4Qraab7tx1dowJnAW",
  "key10": "63SSvyLBg8psJsHZFxAZtoQ6b66Cgnq9wJVHgQZfak21Rfb9Dxv2C8PgXChhHEBUbTw99MGaXCdcfUNziyu3ABRT",
  "key11": "KGKevZYEVm3Njv3r2YCJL1usGcQ5zxXjKHarmkznXVegCrkQE88RCTox4seX59LREAZ11L4uytCqL8PPXv47Fxg",
  "key12": "5px6Az5LQ4CXWwTUEBSYrX5m4d4622xmf4wUJrXZcc5xMJnoXJ4KFfzR6MrKCqjnE1zjnTbbJS63obZaqrTBERur",
  "key13": "P9YNb72LYuxki6SpavYfuWE29bPSNHRWhgANkPXfPcmP91FncLbA7iTjetdVeT7TyEJJRs1eCBbKTKXopLnYyHt",
  "key14": "3FMrwBRUKtRJJDjBFV1xgmGi7Vgn7FHXeEcm1DSqnXtGQbB7BZ26ruTPN8i9oF19iQNSB3qJ8jnABvspymH652AX",
  "key15": "3vFTGKDfWWJG4ZyWbXzegc3wLsRpy7F8F9VBLh1U8BAsxCuwsWwdhC43oFsGk8zpRrVrw16EeZZt4uCk6DwwJgDH",
  "key16": "3fKQti4YHFyanpamSChCPh2gjvBmhVpnJBF9jFtPZzshPjXjaxjjMrxtutmz5wUNCYbERH95Uzczt1GVH1V6TxER",
  "key17": "36iEJzLsvoABTDMZ4hKNQBXkKwbwKLhJktzdsMJD9Fcuq9KbNEz3GF5J5M4H6Y22L21qjor5goFhrRjwQsmN2Dqu",
  "key18": "2kFV9jcdeqip3kT23TR5onAdkEduQfxZhcptwCF7N3MGBLrm5Mw2QtERF5Jp2D6JNgLeTCBk1Pqneg3khPcxGQzb",
  "key19": "2ZAvRKZNV1pwTbu2BSmWUoghJ2y6its8YcHP5C7R3vHoZcL34RzhyjUs3yN3HeTCH3cR5wvTKYzY6SioHSNzp3hX",
  "key20": "4LRUdH98sb872YywL4Svk1cJuvDiytayYFavKdyfwVwPx5xQZd5gjXdfhQpb3ignhkbkH4butFmVgL85T1Jj9ASc",
  "key21": "5QWAcYvuSLw3Smo5mvLyXypAvAgtZK2V3WD3gLHnba9U3D5hzwgZowrcJxu6MFpg7fTSJxpP69odKxrv9HQq6Vr3",
  "key22": "3a6hSNape5KxH3mvqiFR1SH4DcxAgReSnB7Awanpi4y1d6QQquoWtTxNxbz2ui9BqUU169yFCUE6PEoMEGNrZ6ER",
  "key23": "3yszDECtpMJsh8ED7xYSLx8JyB1qxdT9TcS3Xq6uTaC7jLBzWu6LCDpCkkMXWGnG4f1eWZcydG8E7GD1WWRVdWRg",
  "key24": "56vLNkjDow9LmGpwozAJXmaiyY7uamWYqa5tFhBDZV4i3LwaKZkwiVCnNgoMFYNTbM5jvPGq6YAo7AbHqmLHkfR2",
  "key25": "5SJAKpxR7dPDormK4LskBssmg854hnD1XFLHvyBs14p8ZYWZEoYNGNZVpdWeByVSSFK9MbwHGkRogFWmRNy8vLTb",
  "key26": "5vB2HvJQ9anei1Ya7tUvGVTUhZbqN9hpbpr3ZCR5ALEYskHykWzpeyJbH8qKamzSM7nn2gvLmy1hEKWApDTDEN4L",
  "key27": "5nCkNBy59ijZ7oRbKfivkAnyWogE7cAFgyxQj3imuew5B9t25LvZZ3Uk6XPQ1FMbLi3m8AokJxP74U7kFHB7ToKn",
  "key28": "352Fh4swQsSfDX5WW6AhaB8G93mU6CoP31vpFcXc5zwWv2PQbwRLabLHw76m69SwGd256g7riDMvu71JkUB1caSS",
  "key29": "2p4JAUCJMZmzn97hnRhAgjxc2YDwjacMThViBTgjULw2EVqrjNcTsX8npxCxZec3PqgFJ27yXyMFTPuzyQRDF57w",
  "key30": "V9BQdbaeQUueUSDK4RjvoWPhPksQ7TpXCbrgR9PxG6KgSkS69hUi1ptfsHiUcrfSprhwrgLfgUE67PPetdaVVeU",
  "key31": "3CFULn7cLQnghtsuAZDTcAJPQPJYQ9rXgd8dHYBboZpW9pSrCTZtgVS7FSnSSxhDFNG9BZdFLDvz6ptWgMbV2X7R",
  "key32": "3piY4o3Qk7wiHokPT9eDLTRVi3EjpUQNyCSx4amkSQDaMNxLHfU5r3qcNNjfRozErxSE4QpQxH6nKVZvgAXqvnh",
  "key33": "qdmsF6S9YAh1TeohLtpjNmKpXTQcDZSShjVnzr196QVXnUFspcyYJ5rEqG1sYYUTLYJWJYkyZeDaPNrUFUiHiuy",
  "key34": "x5qYrgBdTGGETs5wo2QcqHvihbPycS9A16cJZHfTLCzi8rj6CPz8BAoG4G2Px6XURZuMR847QvpASd7LTsqb4Av",
  "key35": "5Ux4dv6UckioXRTUcPVZxcBVZt6hidR73weetybodaKwYaAAfdS2YNQpsYmj7Ls9skEuu5h9hx9ckisgp5kaLRXi",
  "key36": "2Nf5qc52sDv8iAMpNpv1rUKyf9JfWSZJTFrYokSVWFVhYgqJSHpde9hp6E9nU2iiBuUiwJkaybBMEjD4P8EEmYmW",
  "key37": "eGFFAaMfBTeMfAriYmP3KLUjhj8CHFBAkdzvFE8x9m4SauRsH9SCuuJCBBwAHvHnpBRhFgDAsBPsMNTmxDSEjZC",
  "key38": "4eL7MTPaE6MScWdfmvjsasNeQEQfrfQYpn5qP5dMqrydsrwK31VwSYVpaXHRdboSEkQEz7YMv1VzCnqiJJQwdGcc",
  "key39": "DhF9bxCZxUZLMP39UhZAY9EAJ5bD8JSK3Cj5eRwEh8sQekn7yYXoBoHLs9BYBNTwbeQibjXUq9Jfa5AucXh9N97",
  "key40": "3tkudY1d1b9r1ij184qeNj2ERTrcE8Boa1s8aM2ausuMATBWwNrn22q92aEsFFnLz2SG6GPigC1J3oDqdXhiXG4p",
  "key41": "5HQW8h2pexUc8aMSQNGmGdbtSHMPQzjxKReJpRYdG3W3i3Ra9CYgo9oDYXLvAwCCU4smr5LohipqZ5cLLx4C1KaB",
  "key42": "5zpGfyScceD2neWHMhx6VWckCoYqE1NZDPTdfDTuigSqZgXYv8jg1xWxWmukCKRLpviQHKF6L8zc497ponRuDeo"
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
