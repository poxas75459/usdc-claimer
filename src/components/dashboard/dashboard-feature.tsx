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
    "9XSmxsgzsDG6nu84bGkApH947dBpaKgyyz4RqwFqqyc6xs8x3DSUTFnCgmXQdjhEAkFbB3kGRcroGFUCe4QeKje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZTMkWwUnbwcGL5cBmMPTRb3828DBesYPVFfxN1YsrxpdRBuFuozAfnZm1cRRM13ieoDaf59mJjXyxx6PPbiWp7p",
  "key1": "2ToPDZi7YkvFGsZazf3HmUvKN9L58hwsmKYej3LADveAzxoJJGWyUidyfBAYjxDdX2KM9R7RPi6mtUtyHDe1yBUs",
  "key2": "RuiychZHaCv28hr9ivxEy8kCRA7Lo3HF2Cs9ATkJM81J81jCN5u7yWste4RhpLihWygiKdbEmKKzr3bFEr4VG82",
  "key3": "2udCKqQahq5V3LUcMy454W9rSZXS5NwSdVaeBH9hr7FgVXC5Uxe2iGrRxvxCCph132PzQ22o5ydzkGMoppCW35GQ",
  "key4": "63PAKS2AvVakJsCKfHebbrxqiVFToH3QgM8WVRejqv9SoP7zN3XjwkTMGMAziE8mpUA6KuFH6XbA4rAhFdhWNusB",
  "key5": "3w1YLZQWiAuonMhXG9CRaWvWw17KJmSMpx3yNskYFceCisXq2iLLkyc4SkDzX97m7GSYzYg82TB7oa4SefDER51d",
  "key6": "3WY3VJKJygEzfiJR1G9QMUKKi9Utjp6Ni1KfVjZkWn31vroWpqKWBY9DvFR8zppjHoUy3yhAyF3WYr5AFD2i7yyj",
  "key7": "32dZjueKFuW8WLUk747aPTCPN1hK7FAc65RXJKjGc1UrVwsV165w58kyYZDGhwJXb4rJFi4Y6hYVNqDCPncYeeCv",
  "key8": "DRSYs1ubRyHo5XitRKYskoZaiGk31GFR6HiB5QxaD28dPonWVMg6Byy5UPad94gKyP7x3tR9HaovRtrAHuPWDGH",
  "key9": "2mKXN39uHRNuTCUpwbMCL7yqcYa9GDiddADmSkRU466jSMz5ZzfMJWV54it5kgTYGWzXJEemNEvFWGoPQxHAw2np",
  "key10": "44W2h4cVLnwUQJGiE2EPH3CoKzj4QHWvJLFLEqWKhkQNzXvKApam35W3rbG42YPdaveFqcdPQcqMrcCCk5ujEGDa",
  "key11": "Y1K4RRgtfbNRnAnryz8YaugnWLb2wgzFZ67th2vLxaopwFWPZcBdkAiBcdypbqSzeyWvjY3ExDFUEthduiBEPRM",
  "key12": "3knUP7MB85Z585pEh9rdL1VNTDdnmwMX1pQHUxK2LVPUe6QibnyD3WqmceHcS7hHAZgZqAwkoH56K7C2dALsjztV",
  "key13": "3zeiX3m2bqy2vp5WRt8mb5ucVmqKDQSWZ5BpHaRZYtsyYScbo9kkQcEYDnsBV5vn1rX26JNtSPYkrYYdBZ11N94n",
  "key14": "3NMhJyB6pCNoZAK6QXPsmpmBftrLs8xzWc5u5cGREAWpfvmv5Gv8UhfafxaQSLmFY1BFuTdkrp3BFTYewgYHkor5",
  "key15": "3FUJ5dXwgjM7VZKBdXgJHqTsj1j8r7cbaahq8ApEDAQih1wn69oydhtYfe6p9n9wRBRMs7Q2S8vpQnmbwgASFamV",
  "key16": "4GbAgcmvuKuRhEiLe7Y7rXQ7ttVPNXpRnhVKzXSC4B9wGkxa6PPmRdTtYSP7eRvs9bFPog7R7bCW3hPKa9DzdpeS",
  "key17": "5n9k9Y1sAd8waPERxjNvvBufwGrTq2FmnG5ZjGhsmyANT9A7ytSsbFdSKtcKRk6gtBUhuKGYLDs8njPeva38orNX",
  "key18": "4pJ3WMJ2P3q1KfuxPtu9QBYQhHfwQ5jek6VuLfoEQujtdb2vaASyLFFjzaKsf2tmHtZRGfo6zcNpntK7VAcDUoVe",
  "key19": "4FSyidFBgfNfytbLYmy6RdYHe1dUY3EAcHKr3zp7Ethp7ycLx4VjKUXTpMGHr4yr8HAmy7r9toNhTkEJK2kg8e54",
  "key20": "poXh3HTfd2EJWFPMdDwns9BdPECAKURBk7qw7TQuV1dn5ytRwA5pggjX66JdZRpG8XavaM9zavtu1idnVa2UKMo",
  "key21": "4Qs7U47LBJVojRuG2GjDrF3v4RXjwKB4sVph4KkgkPkE99LWSUzZKx2rQHxchSWiKjA479J5Uc4Ar69peyLmWeuX",
  "key22": "4kKn5Y1vDySEZhJPAWWYa8CkqB7q64YWbmcCX3Kj3JmT59Nzi9zjSaaFvRp7owbGVDwDy3Tv8FVdK3yiNYgd33Wj",
  "key23": "3H6mfwhqf74UD55emtMgbnFzSeZXveFXQxBi4Ae9s9jwzz8BsdG1EPwYcosWFeoXsPmz6ezTnZs1jvaL75mcYbcG",
  "key24": "2aYTzNGg1x7aiYZnuhuiTmpYv6bUrcmnhptRZurBL6qtv9ZgVrVYAvuU8HvWxzw16vU2gsTCUSQ1acasPDXd9Eqj",
  "key25": "45eWLEuKn8fELiicBBBS7xz375LMGfawQNKGMDDu6y9dBZ6BiLcguZmm5toqBkSgfkr6FJoQbuUXFstJK7sB2RMe",
  "key26": "2dEmSqUDh1ZL62gXcfG3v7MV6x6D3Gx5QG6qmMd9we5qiP4U4H1B1xRQUcvq51GxCuDhm1NmC5em41JVc9gHy8FU",
  "key27": "5j2ZWUmMEEt3Wy1VYoUjmGxDxxUVijsRXUe57LZFTiaAzD5HMAfEe3Mri5sucDSDxRkDKzUrCiasxNTZhkDnoSX5",
  "key28": "4Q3B8RTcunfhATDBj5cq68nBibTNz4m1Tjr7S6oRWZg86kSpPVoUQpEMRTwnHvmmEGeyedkNwXDzV6jcD4pQg5Lw",
  "key29": "55qcxRyuLV3jJ3P1aX7sMNQMHKg2G9R4LUF4Pr6h4Lmt5gctN6pTLtyaacHdVLwww5kPHXG6x8PswxKkftmRr5eF",
  "key30": "jbMpQjCE5nagQ7FNgS431g3fZMQEdJLDATvLdtFjSDwbn6SXA4dWYpJMjcWmH4mCfiCPsvLJzfH6pZcG2aJ9TJj",
  "key31": "4R33z1yA2mnGU9uPnB5SEg2DscYP1nRuop6txcp2WT6393qDi1axj3fWLxin2VbZeNJ1NBrv1JqzeH46qgPVpnrR",
  "key32": "PBXofAFh1o3B4TdjmnhiMMWZLEZECR3xNz4HZeZ4wMRA9fY5ejLDuWNtxkk3sKNBWQCT2FAaMVQtcvFasE5dVNF",
  "key33": "652J7aMCkr9ShoLTo3gTPoRRC56mNxaTPM9fq2W5c1LvVMPJT1Hbcp6t1EPdsAX3t7Pm4Q7UQ7w3nGJ7bBLkLijy",
  "key34": "3Q3oxEkooQ1XNpGZJ2RT9eYpVLp2DN9AUj49xW9V9UYThEB2vkNBThvA9NurQorrYCxd1t7QXjav6bWR8EXswSRp",
  "key35": "5MnV5ucyr7954f7NpMX6yANiUqauagat9Vvi4RF2iES7xVfibSSTTBceXqfGkVTEmNoBH4KjXrnsU4obU64BK7K2",
  "key36": "ANv4FWVzQLx7buWUi4wjkJMtr7wTV7fNE4DsW2F1fXT41hrTRZd84gzJuijPFgScezmp6Br7c2aP6iR5QiVEa3H",
  "key37": "JwZCBmpAVDVGKL2hP1WnDPUisxFB3t2K7NCrPtALBDu7B3sJiDW7nQygq3hpq1re3FarsZGAUJxnqieNm5sW8kL",
  "key38": "KHGDMsufUrWq6LWTs7Ss44gZR537sRnp76aEYeVTfCEKMXUqNdjEhKHoaHr75NGMgBHSXBphuWN9XTkQeNH687v"
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
