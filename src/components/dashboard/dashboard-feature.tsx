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
    "3UV7KjM8F3Wg1udR1DLLvLpXwhWH3fUVQJfqrvy8J8aDFv5hsspjaeS9kLpAu9RHEWJ146Jcb7aEAdcARgwdqHWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1M292RXbVsHBvWbwLY2x2A9v1sEkoJurJBMmabryWPT7CHMdPZphSX8aj3pfeLxdFtKXVEBpbuQXGZMvfZbD55t",
  "key1": "ahmdb755KDjnp2meceWjsnpW1R15kVxvp6VdksvgbyJnK2tmYF27HsG9opjm2n8fwACnjGEttnFZiKqoM4htRLa",
  "key2": "2XktuqZ21X3tBG3Wd8eFyHKX3uMTbVXRQ6MpFxHUzweCaNV3eKWcjDg7SWZwQvRcGpT4RmXbnfy8ZuGKadbizXGC",
  "key3": "3329C2x71C3K1GxSm6XRSmDVhqewd4QcPfz29iwVCtvjNjSK9H6HetktAmRsNbKPk9x7S9eZav1nadpEKDcrMwdi",
  "key4": "4jnqhU3eqi7EUb9msSMvNjcNDuk41R3hYDP8vPTiBVC53YNYytKkm6W5Yv3QLgAbAae6LxaQQn5iC1379T7zFJGJ",
  "key5": "3kbpxXo8S4o1EsMmBg9b3ZN1foUcYh24C6WuyzkbT9S9uGFKpaAKXfHDkPkQPguRab7t8zAt6kWTkhYk4hjS2mfH",
  "key6": "4gGhHdbKEVncUDSkkFWjPSD6BLNBjxrD5RZZ8yjQ4DBHM8Wf3arUKnRBY6vFbZXXzzycDPLwNv9q37ZGGsM49Kxv",
  "key7": "3wYiXrbM7rm5ZNEt7fWDykoAoWY6NLAh8ezJ1a76vuWhmuYPc7TAr1DrBpTGY3obMBCFXJSe3VWsVkmZr8b8dwKE",
  "key8": "2f5yARxDhfYBqiKYQCmQhkCrrhU9dLhSvgYphSWPTrMfHb16n4LTmjRPzrPEtRwCNJQGjFLEVndpD5FGCPbGud3y",
  "key9": "oeRM15iGScVyK92CVgkSrvFQNmbq3yCCFvLfK3hDp8b9T1Q1uWToAPZmyZ23wpu1QjB1ChDrTUmwVuktnXwTYTE",
  "key10": "3dt2vH2ZdDzAGzRZWgAvs53BwQQ3FNXetLGUygBonfMKX85At5QxUdTvA75dmsyNFBiUTnRuy1N6EA6HgKKDZkgi",
  "key11": "5uVjVyQtu4PtEH99Q3CSyxfyNnMt1fcq1Vteck31FzWm6gVZT7UDkCknTemQbDhthScmQBdEw7zqitDPco1uTd5h",
  "key12": "BwRdKVaa3U3mi6k3RQY9wmDANoGvmBfLXDD3BGqFPDwtSzxbyLRatMQy6bEdxKkV7i4Lr1xteyRRtSdSC8ZT3bX",
  "key13": "4o2JZMoVr45DZD8771HbZRk4YZepYhPCT1kpJJ1rY5fVjCnokhTUio3yYFX6Rtngkusg5TBaFFACunMMou8PwVPp",
  "key14": "2mMzMm43psMN1YQ7neGpvKS72ZbEpF2vqPDvYjSJoQUrFt2FLGPBsGtqcFr3UVgxExCws19zmtW6TLaEgRmsb3WQ",
  "key15": "5BTWN6VzaW39K4r7ERm23vMiFYiPUd1d5fZAuZF7P48PuJVZi1oHJnU2N4peQcwCP62Senxb15gR9DvfP3HCvHu",
  "key16": "4QnNi6jKj9guDfvcdDjChLPHJDmKn9MYqNkfg2ZQ49g8ujJuLSyPhHZrB3qPrGcMFK23sDNA7vVpATj4QFfSM5iZ",
  "key17": "3XAw7U8rcDpUjoBtq5JfoNqbmfpLau5mrn1vKJDN4C3i3U5mXSMNaPALH5soBiAt3p1n2WmYALWsoMKxncwpiVdC",
  "key18": "66JBqaRjJ1aNett5jepgTbn8kfaK6fy1qKbx3SgvsHnJX41VnkPm3o2y4HxAT1PVFPMeWFfsHwoHpTnmg49GSBJv",
  "key19": "EWMwapDKdS6r3PbKU6Vho1zHDwdFgCTPJNyQ1SZcNF2Ua9wVk3mMcSgxJnNXTEtrZWGiXzRSWziKQTtHx4fwXPC",
  "key20": "YTpVPUkteugm1Sq6Af9SuC1bCgpoN7NuohuPksjot82s9aubh3usfg3Gfs2ef6GbbHi7edEUaUSeSioannzt9ux",
  "key21": "ryH357KdtM3RUx4s7DAbK2BnzbRHD75Fex1oyQwrSViZLKo9NxV3xCo6t25xbWLcpGnEicfcqqSBih2iQqunKuk",
  "key22": "4xv2yc4csM736azvHWi8okNie7aVYePP5bZUfhv2Ns36V4u9D1sBAyNp7VKUwcnzKa8jaXekS78u21WoqU9aPJHM",
  "key23": "3CnJn18gGPY7zGus6MCznPF9ERCyNSufZHNLCD3gLAPez3jsZf1D5TMLRrngLV5Yd3G4qLGEcgWEBeQU5X51192S",
  "key24": "2kZovZ1L73vV9ouKtZCLPmemSSj2UJfxZDHRYw2bvjZnnY3vwFTfviqGTSVTxuSBVgHjaZdsrcNhrcgjKJmEPZE3",
  "key25": "2ewCxwWqdrkJodcLvo8KtkqWTL3AB8czdpVSnBcoJD9VciXjQqsuSvKt4hcY3yvKsM5QSyReUWfymJKa5AjsHnLU",
  "key26": "4RvT5emZM9i2sKZ15rxQDDaBjLj8yCL7XHuv3jj1tjnkV3tGyZ7C7ZBYqRFxchCgYnaY4pSJbJBDegMFWqa8dogy",
  "key27": "5U5KQjkq2gVSSi78MCabqQAhagofV1574tM1BQqgHJ5HJBsMSYhqNSgQtdbynXUWrNsGrzLzY7BfkqxAtpAttE9Y",
  "key28": "5Xa3LuV5uyEVh3dKRGgPc2As389MjtfHNGUZoHbSf9xgz9pbJ3KU7FBv38mKzRqRCbTnb3GHxquHzYfXWC2daxD3",
  "key29": "4oBNYCWJBqo9yzG2qcKG8jQGNz9sNSGeYfYN6cCGGgPjBEehbCqpNRhZQyr6CZYP3gmoL1vcNbkEA6t6TtzV3R9q",
  "key30": "3kxACYDuNV5JZBUVSMoJNtBLxtSdsDsh6p4nRkMeHKTSLv7wKadXu7JnfHngU86fQGP2BCPmexPabaXxsJrw6YMC",
  "key31": "3Zeb1sT4fenAfGVG7JzMukAEoueFByR5Qy8nXB5PPaXmsCUin49vDrShnfS1DbP24HMnS2fRRukvjmC5MptRV7fv",
  "key32": "3CWD3JKs94FMvHMpkPMRavdFmRRD2Y7eu5HBGpZwu7GEHeGeRzozh3yUv8fG8Tmh1XboiX5K744JXqMQCAXwCYNM",
  "key33": "4PvvCq73M9NX83h8vEF3ZUyprUVbfEZKJowh4sjhYUgBzZ236Eh9k9rbrnsnqzLDxJpErrfQaPmyuJ9Woh8wYfgt",
  "key34": "2oNYnhiX2koAWjVLiuc64XVAynoKQdszLtLagmVK9saHsPv1mA93Gf5g5FaD6gYXrvnvYWEyX12QvWtqjmrNYCSv",
  "key35": "3V8zkmVwed3SNsvyBpESi6bkbkdspE3ZxefpLVw5wVUKCU8FwEYm6RHsrYQP9H8htUoEF6co4dXq56mRkTjtZvs9",
  "key36": "5b9VNHWMWumtY53SHQGJMKFETYgZ2H33RZ9HGQeVtA6aawivRfuZdSwbhaieNb43P4NfXGwdUWouJ4ugvUaJUQpu",
  "key37": "59NDMYZyV5YYw4PF9raewnw1hE2sfWMHKX1hFmM2bTdzgz7g7EHr4sijnApv6wLLsbirpdcyKKdLRrK8WcHo6s1F",
  "key38": "3X29nA75Z8hZUBtHVxX4Dg4JLcZgyMTNxehifrKFvG47LoPNxwjEnBZRTCcQNqctCG7PPx3cQ2Q77LJMexXs9QtZ",
  "key39": "389xr2NHWofFuQzNCQXy7HbrSuVVJPYhd5mq1UF6Ynq7sn57radd1h55TRsDDS28618eDVqxZ6HzwpEwwzz2Arra",
  "key40": "2WydL2B9mK1NzRescMFeGYRkLv5SGxQGrtGxycPbxUZRsbtxpeK4ahBiJp4Le2QXgjh96s6Zu9XKNVrq2mDdteRv",
  "key41": "U86s6ZAfkyXqjs29RpYaMBw123KhDweqv8VQ1XaqY3wr5fnZsFDZ3o4N7aNpyy9kM4mPco4pQc52aa3JJGe5ati",
  "key42": "5qTgP4XtJarsSZeTeTdHHxUm7z4chp2hDQgLrkRtVLkCzLzAdj6cY83YBfadaemkA89bV1kr2LLDE6qY2oTTxERE",
  "key43": "61awrwzHs2AH7ZWF5Jt6nJQsY5GvyYh1weovu1X3iuJidEoqWJV9EvUNhycyLEKES95zAotHGfiP5L1HSkmrpQm2",
  "key44": "2zfqH6MtRpXvTXR8UJRsqGQ9zZSPPBtE63CudGVCWZ8CzwN5NLM67J8Qsvbz87eSryg1FzLvspUkYUA8VfFmUdtD",
  "key45": "4Ue9LfjKMYiirujCXK9F32KkfFFFGHYLTvMgjKmk9ktimXbjGtYEJZXyqMerSYGMNQAaj7Aaz6mcFkonsmPqQvJt",
  "key46": "5toJo1mV8U1QrGPjmx1ksfv7JLh8skWx5zBjjS7J8stefFo6Xsjh4Zu9YRHmxmthUWuWqwWyxbc94MYNuztw9yLh",
  "key47": "4tYPCJYGe96sD2HYAJnnnsunCq4Dgn7XdE36EaxXNw6Uiicw9wRPKEhXfawRAp88yKaoFBX2TpbMN2p5uosyxTzz"
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
