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
    "2YZfgaBAGA33Gt1Wcz1JUHqYjvpGnJxwVzhpYCNfVepjpzfAeA3eh3b9V6zaDjjvHSTFEqYVJykrkRk2eTgrnTkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eu5hqMivvwKKztE37qZv2TYBJ1QR2aynG6VP4XuYi5KYCVNqu2U59YLkgxdGHGZAPeW78Bj7JH5kpesnWe2vPg9",
  "key1": "58xrwbJRQs3hySB5fhffy5wtWWZmAqctTAN9J2FqmknfQQ3L2VwbGdC1zqxbL8Y2emsA9wrPhRLJutTCcwBzwd93",
  "key2": "5E1iT5SR5MiQU9gL6qzV8P5YQN5V3sEEE25oEVqVG7RvwFFPM6sNy4YygrbGGdvkmnR9iTACy1h8UdRVzE5grKjt",
  "key3": "njvDJZYvCMKKAzLG1mYCoFCCskkkercQUrFnkp8vuLkYEYdNaSgLkojjshaFcsfKo21PgfBPTa91etfPTQX6hPv",
  "key4": "4r3nWr4wNDWzexgUJ3r7eCzfXBM8zpDkYG1dySA3PtyghrRnQ4S1mrpc2X2KyvorfABqATkTQHzsfcwFN5QzWPce",
  "key5": "479CeBoCqVREG62VPy56AvFi8u35Xd2piirwfXabTqCsdvWFuddogJiKePToBAT95zhUQaPJeWfGGu4Xqn1TUrLy",
  "key6": "2dgRWcHe4jVGRJhL5pDiFpNYQeUiFchJGavcecK592DRXFnW4U96MpbPTdCrFWyXHfYW9VsvkhPUwMZtVPtdH4Kh",
  "key7": "4azKJdDhK4w6QAvGTJZWxgk6waCFK6oiCjsQMthKZEyh4tQ4f3y2snkkT4tUYbRXWBL1CvGUzWfeSRcbGZStLtqb",
  "key8": "28DvvmhE4rkkG5ntAf7spEXqu6cuzAkuwb6wUrRyoR2xjKPpAWcMLex7GdsYZ22b9KYivdvcgHPECM7GNEnuJ5om",
  "key9": "3iXgzfsRrjn3UopVCnCbBEBoFfMS4NELC6EStVSXXL7gbYMgLZACq9f7urJ4WqWhn6LdeHfCA1RQBc6n863eC4RR",
  "key10": "5TwUbW3DrGW4Shb78FLDecFKMY2QCdY3HdbHucYM4gBVVq5qZGjbU4x4evWmmPwpfBijx91UdaFVdop1nmrHYEqB",
  "key11": "21KPxRPw8GYAZPADvaehx8BV2Kw1eQYS1WLvArn3zrTSbYkabkaLbjrorCHfG5AkhqJ3BLq5YAQLkxKKmyAth9MF",
  "key12": "2Rr3aEt2WsEtivcoZyLe5UeApbQYA1TBL3rEFkueH6Ry3UAZNRDjybTabripGwFmEsRKBxXWLD2QQHRdCW6twB4S",
  "key13": "3ztSYuTA7Hq6pekugdngws56fo5KVR1EfpYfhwUJRigVD9pBWPRVcnEcjSo8FgpNUhESXigbRyqGqJ4o7wbFD8g",
  "key14": "4ptNZsBt9siWkCm8ZHc6iqkpFuqnLiLtqqVa9ryH4XamSLGvZ9WD4JKpsJoSefcPhfF9b5pnDJCCvefkHZZ4Rjfz",
  "key15": "3VMPbCtgWJyD93xREonBeSvs72VxdKukUBXzxhkFUiB4VpayKUiCWET46Pu2Cs1ARBBPPndYFiNiQ5orhm1bkxWP",
  "key16": "4TEHGJkQjsBf2gkkqTZr2mNEqiW8ck5VH1Z95J2coBGLFWmT47UD38sxn3UK8cyXWRBCWnozP7bccxjV2F1xMFgW",
  "key17": "2yiCGR1DREf5W4U6GueD2DNMvmHcuZydtfHir1FdgeW6idGDFiU8KgyqPctcrZequUKGj2hz8tBWvF1w3CJ1ejqA",
  "key18": "tHmYiEWeU9WA5EgWvLThJtuSxvhgzRMzJZCVuMNmrWpVaVVDKXdmBdXBFgvUiW2ffJrd9Nw8T4EZTwtRXcZW3Af",
  "key19": "oPCSRJNNWasRvGeC2t6ntuCn78KgLN2wf7bSjvCV1Qbhmr1SbPZo2VZNPpZCZppheBgLCBVhLvcJ9f8BVbvd6Rw",
  "key20": "2Bv5Y8EgodxGJp2LipuJshjsASR7HtcT1NR6QabnxrxHbeD1q1tJX2yj6JvF4XZjJjmGiKYjc2ChvJQUPphqHYP9",
  "key21": "2vLA8CYc4qW2p9NbfLuE3qt47s9k8gWBibRqLQn5KU2TzAA1Z4vM7fM8zCBvC4tkrUAPCgNooP5hsTSoJPsY3EwR",
  "key22": "5QmG1kPWJ5NUU1vJgCyCKZ8ST7YmRFNz59KALsWMh7vm4gjYErEcACiL2wRcr5BZgDSwzcn2BUiyFahmAFjX3WL5",
  "key23": "6nvMFZRtNR2LTu2YgzMZr1BvccvrAfDHgNoim1yJqGfDBxPARUoG2tu2JLVnc91DuaeaW7Ngnv7KgoG7x7wVNYw",
  "key24": "4yb5gZnG3DE3cdGbNoNw8HF7kpMDiZowaGUhXSMqKSrk4E6xBTvAmf4U9DZ75bJM4TXsda7kczgWP1ZLjycKvmnD",
  "key25": "3Ed7CpzXSiERXatRc1jXbPuAcyhtXerrHKheu33sXqo9g9Uvu8gV12nyygWYrFwz9BQpSFaMoF7GSgz6tHunoRoJ",
  "key26": "4mjNupP59TsHv7RouiU6bL7Bs83HLEmucHTUgubED1MXRGywoyQvUpw2sfQGyC5SGETx41CaszR8S1BpiTMeBc3B",
  "key27": "KQvVb3n479oNia9SZutWfXwbchbSvjMW6VHSXmz7WKtVEiqxejnbvecDsHefiHreZr1zuxPxc8XFRefaVEwAS1E",
  "key28": "5GvvvuBXcmjHBdkPxvJTF1JaJMfiHfms2wuBndQ3n5VGLfb7trfiQsrnHfFgzhbDQhxvuLpLvYHJTGfv1JCnCcww",
  "key29": "5oix16uWo9gmN9Uc85sxt6pPcw2ESqC3jBnoBywYnjXFs7zUgTUYrWbff8ns4Hbu11Mfv49So7g6k6VWj7v98tiY",
  "key30": "5udeRDfWvQFngZReA48tNUj7ncNGw3TMfuk9peWGgMRoYtwR9XHR8q6eqbcpn1NvdXimcMetX9Z2fURRWSmithqV",
  "key31": "3jDT3HKiZYKYJqRqsJqCQvz7DaHFQsS47Dfyr2Dssb6zsAFGozuGHHbnKdEop1sKSomrBc6JC2fGhQo1HR61HpyK",
  "key32": "5oQCGWQiKcyEaokPnahvqfkVnptosQjHgNku35DEKJ6pQLseVToPevwWdGXWB6TaWh2iv3vJ3iThQeZMBPGKX2p6",
  "key33": "VM7Rfc2yoVp1mAwYUPexJ9mMP2H3MiTcTQ2hYK4JnfK4YDSZZocpXS2pE5v8VLbF1yHpTvfNu6kd29eHzPbXSxT",
  "key34": "3NmoagnZ1FYMe5Dkp6qGuymQB5fVjNbMqYAwS424gJM3XK5as4JZG89gwkZoKRMzD3gtaXEu4Kzwa2zj53UdTt1T",
  "key35": "gEgF4eNAky2tpboSAx1UxDnPv6yWcPYZYfR436xEedmyT9JfaLGmfzmTzEMCKXeqLjjkwCjnpgGKXf2h3Bzb4Ya",
  "key36": "2WMqYVLWD11X3rkWz5xXNprYCaHXQWyscVHC4MZQJRYeSjdfH4QXmpbxAqGGNRufQjiyV9Em9CwLdHQTgBWzNPAS",
  "key37": "3eDx2YmA9LL73u7DySFAbMpVjdmdmKEReua8CqFU8Hh3zxfGQBpcdEWwuBnJoG2ViF8UtAQc8Q7HPwocwH7zeTfV",
  "key38": "4YmBdEKF3k5d4C6MFVqkJnShQo7KaebwEpyGWwYhfdomLGFWmBrGyCrVtk8kimVCbsGhhVCB6U7HdpZGFZBJMEo6",
  "key39": "4GEsdjqV67d5oKxqv3AbY6pHKShhDokdTTHUkDayXP5hdpTGhMg5yWYLkzP19pJ8zNAJRFCyvN2TLGVs64KLUWxW",
  "key40": "58HWq9nxyPwCgD5etnxotYsYfXLXKEDzuHrfyAHQSu28pqzYdWmYM8e3YYobRdpLseoUAQoCf8m8Nwi5rsddeLNn",
  "key41": "2i5wgohsMEi5rdn1paFs25W3NYxT3J6TWeP9xYjoKS3PnHXKpp8ftw6vCno5Lnbih2Pzhpni1M64y5oxvN34wbFY"
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
