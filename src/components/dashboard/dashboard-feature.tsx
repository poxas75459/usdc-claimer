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
    "49VXzvJV5jfDq3qPjPodoYyUzRzXDN6R4mz9ZWg95tXTZFTvMsZiJz5vG25guTPmngzTtRMiPxuFabJ1PmyBmuYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmAHc8aj3jCBAJteeZMtfvfWc3NUitZaLkjkPKrULgQS3XdA8AenFZ7ct1Mch2MwHb5ydCBbcojxTCEcd8Czkms",
  "key1": "5iuJKa1uutF284xNNtF3LwLuwZT75rMbB3YtQ42fhHX1TXBf9d4NyGsgxx9yX58GKxchbGWouxq5PsjX7joivdVS",
  "key2": "2yHQMwTU2amrnF8Y1GwtJTMokms2RS6h9m94tuzW882NZCaEvmb2FFV93kagGCTzmWAFcASAArNct6g8jkdd5WpL",
  "key3": "4JTa3hshJGcSw28YEcaCkJBZ61j3GX61LmP1qutUkbVjAHiXxmwKNrqSETYttFYuFyiHWZuz2gdYv9YXxLcS3kmF",
  "key4": "25aHS4HyAf5bhvM1wNb5MiMBpa67ptiuiQmvUQB2MAvcdyXbVAkxt2jFNeVp3Himj6zgjospC8ut8BfxUWQHsR1S",
  "key5": "5ASebKKXUJPKH5g42w9yExfYnLepAerfmXrjk4NtQpEJjDKYzi93KbXR6f2PTWBScw5BPjLKsXTmStxeaAjLA5tw",
  "key6": "4fG76ZpfULwEjWsW5HxHPkFikUwMhmCnDA4Xd52bU8WskJTeYVsMd8W6MKw2f9zVtafbC2vUVyktQVG3Zk3rmSv5",
  "key7": "2rgX4caGJKycqgTge68HScKCK2ga1bye5UFTvDhLTt1qe68KC1kZNith4fAMVqKWHMqbxyiSFCGXLpZisiw1D3VS",
  "key8": "4QV7t39XuE8vfqNGomc77ppa2v9rmeYJSjaMvBqgA4Y4EPHApGgzJWV2ZK49kRLx86WBAqR4jxr4FwimRG1WpDqE",
  "key9": "3uy7YLmphhQPrDxnZP8TEkduTNotU3eGfbucLemJQ5y4gfQqmqQWNEAfuug9qTKSVb3QhKBKRSa4mKT5vVhGR9sV",
  "key10": "2xr3EtxMQQzQpSvHCAu8nba8zHLmDnSK5GcVsgf3MEjLN6s9dhXjFGqx98u3Qmdi1BtA45Kkz7wCdGJVkHZ7UGky",
  "key11": "i5Qt3keYJ4czDwBvtVv3Hy62NBKSbZZY3mDhs8Chn9BKxXMCQ4S9hH9t1UxYYKn1Db41aPEwymsieDbPqreTZuK",
  "key12": "5KEDgxD3kxZ1MBnn6Zk2SMqJv3E1UKChgaV9kVN53VBhFT3qqr6Ya8cWjbCBpYKimyfewfgvegdt3TJ1zosviufb",
  "key13": "27ZSj2DjNWdvZnTA2D8X2YWmij3wSeWPNwyvEm5DxQd7uurP4Y4XxPtc3nYKXdEbBRpmrm1YGS8wb9n7H6wNSgU1",
  "key14": "AywyLysgrpLo7VGwR2tjWQLRfhutZ6HaBF5gUjsRP1d8jJF4QYo7t3NYDXG1r452HAh9deUWCxAsyQrnUMPZy5M",
  "key15": "NaEU4qBsp2CR6qVJBmPoueb53Yuh8VNRjWJfdwScChRL6YsFbf1PFX5DYd6ysagkCVjs4G91u9M1hj9843GKehy",
  "key16": "43XFjk4oNsYzJRVkR1UwJZUzqZqLJcReivJNg5nyzsYQRAhTky2DqNs2aTgv9kwc81Pf9ehjV5uwqUVnX25P9qps",
  "key17": "6B3Z7Njv6MEm8KaB2ugpoYDvb7cwuYj1ezGdgZJJZ8kWDNw9nipi4WDrnSNW2FJG96qYvpcQbHWN3fiv2u7DVcZ",
  "key18": "4ZEcFVKgJRKAU3m4sizRAdT2SrYZPiPb7piuJNSGMyK3AfDRak9eGNRsUvPVGTsAmksrqQrfNYt3thn7eeHy1YdN",
  "key19": "3h33UEEzMFPA3f9ovtvLPi8cMi9dQTXUkwe7VabbWC1GYaGNggxCB77yRAXmsCYARxcom7zSHWUxHYm6tDB4a5Sy",
  "key20": "2jgAYJabD8WyP8tdQBwAjaKGwdDKqWZ9qjn7mQCKrYxZz5pjn8NURwqcG4sh1nQHatN53BkZXBRDxbmnDktQaohh",
  "key21": "2PDmw55mwCeC6FfozBVMZF13YCQgCwRdRsk5p89baaiZ8XaGpBPU7tSW3qSta18GyhCCZdAeXRePfKw7kBLSyMQj",
  "key22": "3i8ccZLC7q7rzrnomZDqWVBZEskq4yYBfiH1yUhXmpt6JoKyHRzno3KyjogtgUBBmLpjJbTz7PuLRQD9vRoroziS",
  "key23": "35E2L8Lfd64fX5D154aH9XTj4k7nyfgfSHo7yBiHg38ULMGjEuBvPyusyESZ8w1xx7FWxFdSqjd8WiDHzjUghMeF",
  "key24": "2aP3G1C18VNpZ93Me5aJ2XXG93JAp2eQmPUWZYkktnNcXHqW1WuMyfhnmwWiN5DysSdCk6ZbSwMGL58VtMeZQHga",
  "key25": "4F5e9QChaMNfxUU4UwwnQ3cC3SFbdABmvq3YRwq1M13erdNHeTRPtreKVmkVdUudyGmhBWQHy8tVvbL2FjFH2mS7",
  "key26": "5yE7PPKYLS5MFFCLa5DxGajgk1oPgUhzF8S5JsmxLmztMj9imDsbkKiovhVNm7oE1GvfoVvQygNqgujBxDFKnmGB",
  "key27": "gALXXhVUHfRSuLVQHKQWQbmnbx27zY2RD5LgFB6e8HHFps6BTztE6xGs3hnJR2idtA9aznYBEZL6XRSNAWT2nSB",
  "key28": "4meBvCZyF3RyXcgDGTfHuFRqTxr8ts9vp4fwRk7drufSipM7KxuZu5fSxUB9sRMa6CAnyS7dYfyHe6yeiFz2SxEy",
  "key29": "3nPEgZxTYbYvdyq4mKpAE88gic7xHpZG24uqVv3NmkMoQpjceJRTciKT3AtM2QG7NgbtYYkh885QJxRT35PzGhP2",
  "key30": "21nxn1TCgPqZyag1NpuiHAGT2BFYbNkP1qVK7HHNg6ivoaCGHZoieP4nA6R2netfxpVu36qdWxECs33jf25MtaR2",
  "key31": "tkojEMEP8nPnesatLErdW2nqgyj9743kMow2edZTM4rGkKGaikcV8WUesGMbR6Z63eRoBS1VxQKb8M7BLu7yuZf",
  "key32": "3WTfY7cgFMCn7ptqCsk1hSbp2xh6WTQuJ3dURSYNYVAoEg5MQo49UsVWJMsfU33BmZtoduvK5rybHj3HYJiPS1B2",
  "key33": "5z1fQGta3wmahJgtD9y85ZLXtQPqyw2ANRDJGJ7QXFHMu87zrYKa9vCpfo9Z9ypq7DgQzU9jnnVrwwKkr28zFE1i",
  "key34": "54et1oYJAVv7ytEP1rnCmGRkfS2KuPGYSUYwDjuysCCREZaYdaGBopJAoDgRYUMi41J9LDbNza8dQtH939JKhies",
  "key35": "4yK67T1fFNEvrzwKnwj26o2KEjPTwkthVDZoTcDZ3dYigwm3nS2Z7Jmd83HHWeaJRvPFYWoFrLq8CAwbiyMqhLZx",
  "key36": "5JejE218KUd8dQteHst8BcFjUbVaEKKjBfga8TsHbGrQKJ4ZgAMxevP1DDdAkUT5dcx2nYDHCwPxEoDen7R4sQky",
  "key37": "5d1CcqY2SQn2NJcCZ2jkDHwm1YhkdbbD6SMeKcZGPWqmkbo3bsVkREXyFtbuQ16YUpqXz8TsKhqMHyG8MAM5S8kS",
  "key38": "4CFK9RY7TcBaU1tfYFuT6gpwvqQVZvyqGyxHv8deP3BPmu4MBNCX3sVRy83JmqA68o626LRNGaJeeujyo4QiLuYr",
  "key39": "362b3w1gLfaMTQ7Ahz55MfViVtRqrgCQ42Ddc5HbSa54GHS4FyJ76WRXzPeGNEzKV5Pf4KcTJCutdH8f1T6swAZC",
  "key40": "fZMV5z4Q2AatWQJPwN8nxX7kYtGwWt626k9vZAsdfBMbCVvJ52UxLKCBFWFjWVmsV2sQQJqhw1CV3ddnc8yRyjv",
  "key41": "4jWChxcvTYzRkfatkB9nH6VzLR5Z46oXZ8fLJDZwKo71uRJvLcwDWPW5fui3nbstZreitL2eVrqkeah2crLU6Ddd",
  "key42": "y25iwWFYQ9nLh4wrJcxC2SMPeKBLsttByCnfxfDnDaGcHBcmFb5kGPdPWGym6kfne8ySwsoHeMMzg4ZuBjXAFSM",
  "key43": "4Y6p8kLyL2eV3Qe4joV2FjnhcRUMH4pTRrZUGT9Tg59M1gzBQ11AvMQFn2gDpSXBD3kCGf3d1AwDT8WMJgJXDR2y",
  "key44": "9VeYT5Fgcdx9BbvWD2p5LomQFrPYLriuoQLWNmA7T25VxzQwJ8yoKr5dsVzUeEzmaaogSM4KD9EMxd7UWv9XER2"
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
