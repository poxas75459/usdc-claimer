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
    "5n42C6unhQnFeUHWgBFJLSnyzh42MSb9P2nvFroZFU3MrsNmu5Ei1JVhFGcsGm4mQ1z9pdEVi5nYoPpAq5pmw2hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mi5tXNaLiCWaL4ZJJFdJMCJ65mZi7STDPn5jjG5Wz1zkBPr8akNHVpaLpnKj3HCYiS5aHPFR9m6YSo91kgUV5PH",
  "key1": "5BkWe1XZMUQLgpKAzo53TSbJHkunGgKDjAfhHnnUF1uDZnJD51FcviFMHYfzRq6WxX8H3buNNVGYaea6q3YfyCPY",
  "key2": "5kn5cv3eZZf6tRLhPazswT3hqUJS5ZtB4Fa4AGm9cNAyU5nPBe8B49T2ymafmz2oR6S6PvXaUPwMupG68aCgwH6y",
  "key3": "3rHuURbE2rCWrjYvXEXfnKYtcMjsyCWSWffwQbw7WcivTZhuWHFGeuVRcBFTkDfvcTabWJjw7W3LXfSVQgoW3LUu",
  "key4": "42uDgfrxggTXj3SVbYRQKgNCtgHkavDySkpp5grTw78J1sNwdnN5unSeTD193xYhZs2dNmS7yWjeMm1DuNTTWXDV",
  "key5": "668mNx4P4Y5AgsPViSbFiibTGcDkbGbb7UcYfKUXqtx9H81RNnrirz346dQ3sU8D5X6fs5eWDkvBJjwZrZkeT7zY",
  "key6": "26AS3VTLhQK5SXN9YZvecXsEp3mLBqueEbTkpJYfYhaek2tLvjeiSsV5tnA4TJ2pxazD7xqVqKvRhyvVG1NnPFEx",
  "key7": "26dyKPzyKvnR2vbw4fshZRvsDNfpokGEytbRGMKjAAh3JUchX28Uiwqv8bVH4zQFLN6J8jNP4ZQpzwvCg4Rv1RyG",
  "key8": "tmw8FTQidWqgyGrTVQYPTQK516jPcNHL7BgxuXxwPA7XrVvsALr4VYGcEmMet3YFDmEPGp84j1Y6xJHR3yiTfUR",
  "key9": "4877M1fx1PqbNi8HmeSzLVoM6yk6YCSCUgFa47nvjRPeSrtruaikoQp2AmEw3CAvxcj4fxCswGgD2KFJ5WxgbCJP",
  "key10": "xBJFByfhuS74a3QKYVf435WgawhsoWa9tpuW2a9JghGC9BVJSnzppQmpFSo8vAFWpD6NHyRjzBs7xJZGjtELbDB",
  "key11": "3FJvAPNNkThZFkHpkupb8VwvQpyANt7ZQY29mtQdsDftdLEbWC1KbTyBoZeaJKgrb1bWzHc2YohW8rqnWbDe6D2c",
  "key12": "2FmPYyKCzV8UCDYDgQTupj2MHiZNMRLCwQpsSD1tdK92AtgGqvECeBBN75qG6kcbGy8j8PHvo62hMwJpfCpGvT1W",
  "key13": "2yJWjodYJ9aWU3uhGHwHrEg7YG3TRTSg1F5jW91N3TSpTiza1jsAknDeeFNzy6AFMYLz85rfbpeQk4qnYNSex2b6",
  "key14": "4ofJtfxgRrHKf3dhJ9mDZzhSDrpWwKpKBFtCbdWHNQwRbuKjV6hasLSWXqYCjSt62MxNmgJV6t9kLT59U3yXtRt4",
  "key15": "4XRT7Loo2ZZSepUfuVKpMWwomAWkXoyxJ4qaT81oFjtSPHEESwu8mqQFKCoZsUrPbPWuy9TaComWTpmWDGKhAdUk",
  "key16": "2esMindizCmVgASSUH47QBDKLKULLBT3rvkKzVhb2yv1TV1pEVW3hqjJ5tmJ9QGvv3Ti9U4NzbeRhMdx6eumBoQ3",
  "key17": "5aQwpRLyvMtHnbjYEamiVbjYvvPUbopZ8NxBEsrpmmhUEt1RCwVgBXGMQ7UFDPaBTg89Xf53cXvdgNqgabSyxDeA",
  "key18": "3BUsF49Cey4bruZodzaE8mLMqooWbMHr5nkwrXi97LSiQWFnqX71hPzjMeRtQz5sf2NhVXDHouE7HF5hg3AqTv82",
  "key19": "4NfM4gm3sBuLR2vqvd6mgWpbjf3i5bED8SGVq1Gnqedr6KGTibDaNVj9YrwgqU9PRZRsoJpM6vDxvA9iycSQGY8A",
  "key20": "mnVwh4LGkKUTxJnBfZxzm5C3eKiRzoPpMJvrWMgJjGH6LW4JekRbewmMocZzjfdrnkwVi1gNnV4YDYCf6zD1guM",
  "key21": "64fgqvy2qkzHtrrQiGPNgmCqqthDHqbkQbufrihpnvsNzgdTxacZ2hK6Cwhu6GBF9vdprNokBuAvRGBBEay3XsZ",
  "key22": "3UbcDa3nFT9RNC98A7zTf9Hnr1iTCDMDxDLAdtnNvJCV4ZsaLMgGefomqc1MUNRTgSfHr7yMcoxr7yneGfZrPEiT",
  "key23": "4dPGyqeVCCW3SQCRTPyzooUu5ZdX7tLGMvm8vyYmbdAR8cAXZ2SSMgzQHejxbNhDA6uFw5sq1StpPtDhknKRhyvE",
  "key24": "3Bx6SyRpXo3vG6B4Xjgt3jSd1U7FRGqUN3dt6AEMaCAMVzV8qxg2YjcLMM5VUVkuz9BF8f8MAb43fWZNk3jzigHo",
  "key25": "26ctX8vG2SswZSr81kez927VS5j9uJYnFQ1CDn22skXYFpmQxjj6iWkVZc2LeYxKhAMVL4ua9DteV2djk5pYro3Z",
  "key26": "4nci5qc7q7ock32ro6UnbE8WpaLAFZfXeoPySXT8zqavQrHXjnddV9rKXfLnpeAYey1PpDXd7Nea8S9SDEtThuW7",
  "key27": "3CYm4CR2qU46yTtr3j249wZE77fwdRjyEp999rapNHZXk8Scdn26aBuxzEyXFg7rVjFaDuYYPWUhJXzdDTnuUgkf",
  "key28": "2juwU6SXatP5KduvMekrsdzPMs5zTLyTjXAmq3BdXniai5xMxr3gby86dgPGDiUdTWCdPSbuq2QoUmG8dGXuDGnc",
  "key29": "5oKKxziZ36uiQKPdv3gfCq9TQaoCmPuPEbin7XSGAdXg4Jh89K2R6tKRh48JuUtKTgPhfL6d8R7BYqWifUjLYMBB",
  "key30": "2gyEdUMxEFp68vKChVNzkSDMTzYSXqaGoWqs96v7j1bQ5rxkfyjKk7ftQmMMaNasaJnckNi13YBkTwBEspMrr9uF",
  "key31": "33znoBU5q4omVnQwUDMAoTDETSJWgR3Y4DTsiHGo3ViHG22nMPa2vgdxq2Cs2iaY1meok8HGCSDUdb25pXu2jhAL",
  "key32": "2msVmyNYWxjjRsdECUecYWYCj1LTo8XNiRYj6ZHr66ujvpW6wKRg3uDsSrmV3JUFVM7rMQzztLvSfvPeCapPonKF",
  "key33": "367taAdP1uQSsA79i89tXdaQt14qMs4qv6bRRxA6k1pH7tNcng11tY37n4E6TALrFfGMW3wY24V8UePtyXZPJBH",
  "key34": "3w6EDZSjgEnY6xCF8mh5ojwB5fDYatSU6sY8mXFHZUkGFWeWcFeXyEY6HGGBnpGnrBEzEMrN5oCcge3VSd83WaVN",
  "key35": "4JD8hjWEUeZrCmhdhbij56E1RzBEskbQQUKCyuPK3DgGrQXZAbACuLYcVXQQ2kLmJeBb3he3TxHSpCYUfRd2i1Fy",
  "key36": "3CykR4EK9sEGBUPbUUdmdvnKjzCdNwu7onGcSFdxJWUvDnkVCkLBLJeww4eKKdwadVR5yJHPXS4UXf2gdGWDaXbB",
  "key37": "4HoghyCZoygPqXq6e6Fn1BsP6Pc416zRMZShFcc3GPL1zWehkVaW15HqbBmHPsc3uGstKQXQX2Gobyiba9GzWT1s",
  "key38": "2zTXzwK2ZGqQ1gbCA3RtG4zPkji5urgxXaiZzDqtq2aGi7aoTD4mW3mwMnR548do5zhHBZVrJJPsXZTq9TmqmtVy"
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
