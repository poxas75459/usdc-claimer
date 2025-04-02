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
    "A4adUfR2rBabMBvTREXUQqr6TB1unoznja7CLwL6GiuHCCQaKUJfYCqtGwgBdKPeMdx1BCp5n1Ltkyizasyroep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQgoTpZvUcFdA7Ac8G8Db9Dt1tJb8QozEHD4cqWH2ZJVmBvGKkkCneYrviztt7V6iefx3RtE2htvLcz7R2wNLbc",
  "key1": "CMYSdrkjc9JAs8ybsDy1tukwZhX7eqvZKSBXDEnF5pHg6DVF536uVu7MRZ2sQRVtK5c4sn9AwtArhXvVgT3L65m",
  "key2": "s3iHUVyLWFqtvxraQ4QpawgiTzKMJgs98Qfj2XPGYz53adcgkeNqZ2jcaj8N4Y2xuNWgGoQt4mBTH7xvVVK4KyA",
  "key3": "4PMgRsVkUZ7LK2Zweh44RTTAPJfNCD2mrRGDHGgL7Sbs8JVuQhwNDf6yqgdCfrcXCXJC2HGZxBUrhF6DcVcY77ge",
  "key4": "2q9vAYD2kMASM76NrM1tHx3SDnSZv9rKGzxWMe7b1YQmZDSGDKyYP1sMMdgCKnfJN9eqSeTpcvi8fYePLuzYLvC",
  "key5": "2G8hBTisbyi39Hvt47wykvWraBwq4ndXcwbFZgp2NMHz16v1p881Z9BufXJjNpzFytcnLgmvEeEoEwuTjsTtprkZ",
  "key6": "4UCDAPzKxDUNc6wLV7sTAXUHxAUdVYriHkdtRWyXVcPCrfTivwBpJzx4b96dbuSCkswcL7rHq3kXnTcNUZMMxnSV",
  "key7": "2bvuhGjCpmZojihnSydPBgdRYU54S3rdBWP8Rgw24UHRb7FLcY8mgibXCXG64sWpFmq7QmkGpGY9Wr58ygzJHF2F",
  "key8": "3jbGfHnF4mKvLQY4NGVFVWcChp5cLc8XcJgNTZZD4o7bn2miZKLotMBFVvUYsX1PJGmGrtv8HzzCgp9RwGCpekRZ",
  "key9": "4rAaGwRETPo5FvbA9oP6yagzKoxRqJDSmWVveuFuuUGr5jzYBa7tgaxLzTBdVJy1jE3h4TMRZeuyMrr5VVRE4peq",
  "key10": "2tEY9G7akMm6TX3AhReBHhAUB7Jgkm6AQhWcoPHTDSPBCNTTztLWrVTWCAQ3e7qRZoEj7YZSgJv7G9KfAu6eAgW2",
  "key11": "4YDcmrafbjwhmKyMFY6G4mY45otUS7wQQpakVBpUxt35okCNEQk3HsEA15qpYo3bwZoUyUuBFvJrHrDGAJRHB74n",
  "key12": "3wQ7Ya73sLYzTu7chWTdGbMVC3b3ccHTsxfbybUMtU5qXTeE7RaY6gK85Co1UKPVU5yZbBHD4n7mjq95i5gkprMw",
  "key13": "48urNN8AXjHkgPPAEqGpHXhf3UCnqZy1JTZU37KqtsF9ppHzzAuECfw7bWFec3WJsq8qGg2Q7ppn47mG4q6kUvR2",
  "key14": "573p3nsXXNdkwuWNTvba5UJqVZquFfJ1bNq7q3PYgmSW28rMs6bASaZFtn4kGWAsiYtkKLh7vieHvkWgZv2JNykE",
  "key15": "47BmXag7BkHTqaAe5oyXzN1DriKFex46QwaQ2QFvbsshR43XdQDa9yGqjvnb48YyTPU8P4hWzFhnrdv6XAS8GDgB",
  "key16": "3HYdZKUv58Pn5LrXj2tnudwQmHeGgPmRKWhPcNRfbA8UdjBe7u1Hnt1ZjvLDTTk1baLXqxQ2f2A7BA7feEAmwe5S",
  "key17": "4D2LvYg2jZGRf3C2qDTWob1CJFULByBKTL8ncP1FJtmz2RMnLwLvFpFwt2PtewVac22iLoGXpgTH52hW9vsiWBZs",
  "key18": "2dksXKXzpL46DqhpvwkGxA9x2XE9UkVPCu5HjgGpP7oHgnFnLsfRzrDcxdF9dS3uS1xpkGhCedZmomchWDFPtqV6",
  "key19": "5h8hcbgKc7fX5ndfbaePWk8LetoU8dN6fPb2p9jBZXSuR89ZgNeqRovb38pvwHVZo8fCq1zb42ezvsvzMSQnqcN1",
  "key20": "4GZbSxPQYA1hy1u7eQ1LuBgXkUgzFeU2xYJuhvm1bc1AeThNcFjwnZk4TRFbzKcfqHrpG5j13NLhXSBm2iF4c5MY",
  "key21": "3cDtfvtLMUkKMpT27GdW6VDTs1wUptDXpz1SQ7YApqmjNDqArY8y9vvTMDC5iS6zU6Ms78LrdZDZXrPwuMSbpcue",
  "key22": "PzMnnv4a3HaLLMpWEp51BAkTYNdez4yezqG819ZE6g4jPTM46vrVuahoebGAppVUHGt9hk2ZSHwygSLoh2jKqU5",
  "key23": "3uynxEExjC2bCN99rXj42XWRQQG5SD9vVPyjpwSW58ymQ6jyBi9apLMGTS78XTQvasuZJQ5wfExdnakSMZBwjFuH",
  "key24": "2ZWgLagXxXHCd7AH6Beoexe3iiYPqztsArBPnKcY876Khzns5jYMbBPrcPc3bZ514P4ahWd3UVS4CmqjRTQZTRZR",
  "key25": "4Pg1FvSU74QNZtJpHNRJ1beWTcT7ssqfP2JFkhFAue7k41dDxq1gmggd6AyZovifmc7i71obKKr6UqXH3hv73p3P",
  "key26": "qUdQVBgmPfV4JPugVaGSecCD6An3iifFrLF8AK1YYZxMfs7MvnJMrZSon82r5A5r2SvsDtDqFtgKZMdjXPAJa7Z",
  "key27": "3VVnDSEfwotZBEJ78T3A97K7DasZWgQMySHXyfFaJ6urDoWVGf2QVPRmD8CrbcZgTC9cfn2Lygq2wqU3BBRtt4Sh",
  "key28": "382uad8kbjJDq2hsM6gxxsj9n52EYboCsG2YD5uGS2zYnXQepQAEkzxAjyGtJUC9fJ33VLFTC6yB9ayLjYzXq8e5",
  "key29": "4hz9xzCs8qmSnMC2HMafWo8BfNsbgyTNhiCs4aY7pmKDjyPNMn1mRhbBbr7nDwx5Bnyuf1iGK2EsG8ZnNnxmmEHp",
  "key30": "66NjFb2sv1CktETkXhEFxUbhHsZhzvwhbHBTZvhCJbNbDRtKiqGMg6T4RnzxPdM8wPhaqfxuf8jbmaHo4RJV8EAh",
  "key31": "5kXRR9T8bUuTf92hiQaiMU7muGstkyCfRH2FizBzPpNwLX8KR8YKtVVTLAgL235SUMpgUbxHwHGP1QqKYmmTLMea",
  "key32": "3oMgStKNLYteFh84z9GXsVT7pweRYXk1VbnYxYun1mwRpPZzCmXn77s2P4W9H2n1g57ayEW2CPTGoBmo6fpV4Gcx",
  "key33": "5HvVo2sGXv117NUy34zPo2vHmqawgjB72Qjxtkkqf3yu6x85g2mMsS5Nap41ZNUe3PnX92mfg82WBZaepzBK6693",
  "key34": "4n4iKUuAKeASnfyak7u9DLWcyu9kFuu3YrwENgMZ9wsBZ3SnLPq1YqjC45MeB9tHkCy38qqiEMPH18iP9J3BWWH9",
  "key35": "63ZcEtGW2rgANyt3ELmAfc3G6nQpDX4JaL5ekYcowjmyPfXFmwdqFqafL9sKZN8dEEQs2WGfsm2p73TSMvrnTMah",
  "key36": "64Zgi8kviRvhHM4V4FMFYY8mRiDCFRg4vB12cHw53zgKZY7TxkeTDsK8h6J5mg5MEURjsfnE1MQ11F73XnAyQPwS",
  "key37": "2aRyaDWCjdadxHGH3XF8nNf1xeoy54NvmFSqDawXr2bzU8yPSWr72ZmrBSn45rVpC5soWPRkFvAf65UXDGyZDUki",
  "key38": "V2oiwYMemvv6tPmDbQsRnepDDcRTZoQReckPUmn4SXCErqGfmrsDEUHemrM2zNn3tVVT1oUiw8jvk9tptRHtV6C",
  "key39": "244U9FvYUDYu6LH8jCLATuoTKoa68BzsyhcMEwuLGbKZ2PdAgdQFG3atstz85ZNuQGEqYvWQxdHzQzozr9gv66PP",
  "key40": "MKMvre7Gk5fWs8UkPHLPvh8qQzKhTkVymoTDTNJU1u6t6iU7Ru1ZK7juiDB6J6xRckbcE2D7wjG2MsgnKhAHEwg",
  "key41": "ZLGsFqLHc8JNWSrmxs5ktUMTFZUogH7PE3yh5gkkoGp31j8eWPkqmVubjybnHL2PsMC1BwxeyQnRLpJTkBLetRq",
  "key42": "r1zUPQgBcL43TdXM51xuJhXyA8M5C3Bd8njrcmdHEp1YrW6ZB37ZghDxotAtvqxE5Vmpdm6LZAWP7mxd1rjYjKV",
  "key43": "4HsRkGyCfjWGUQfmDRDDLGhBiZFDqdCnMqBgnH6qVTfudD3JWeUdbakcb2QTt4ebtN9m8jg41crAAcxXoiCnu2bV",
  "key44": "3uTC2XUUtsm66ktv85vtXSGbrutV6r5nBC2SJieNt9DehbGedxkGJRMscfqZ3EbEaKXVSGEi6gen7mFM9YqLWLMV",
  "key45": "3SvQXDR6FHNuWFHVQ6tfYPmLeJfZRNvBTzcqNxeeWagiPB9EiDNdNmxE6JPWTghmG8zdQG3ucehZCqeGKFzt5yPk",
  "key46": "5zUkJYwEvyKyfoMbbip1Kn8d9ukV2sPQLVEGHXG6epGh6T1bczoG2QvFLJdqiFRc79DfiopWGNy4vWGorPMeQHAp"
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
