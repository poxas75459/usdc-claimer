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
    "38hLhW6CmEwuZrtXqsh7viR2cuwFyNvJ3Mjq3ABpT1bmt3ZMGjs78jjdcyMvsBtsWAo2VALGyg3ApbM1R9MPqscu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQLKWzFSTNzKaabg5syyWEJjbR45pB1txxjhGpCobv7jh42xBv8rzXnH9YuscZp9qSDV9eA2VMsrBQkeR3EocUR",
  "key1": "25fWHT56f5yhrgTXGyLUyE5PTeAe2VRyNQ9viiu7x5hkNoCbkpLwBW8cMQGfLDNjXVojzMBiCT1MjfC6XsCHUrMy",
  "key2": "4qQA6ppExnNedBtN5Ttgb3QZJiiP2p6AooPEfrpFxJHWKb8fTY9g7hFRjR1gvn141cAT885KgSWmhxxAWBMimYUx",
  "key3": "JjZ6YwLKtGPsH47X31Uuw5xdbFcCZDc5ppGa1K8NukkMvLKSHUUazp3dZNSiF2v3YsRKztGTMGfMvATLkAHRrEn",
  "key4": "4J3GkZX9WprVERppUdtF5fQ7s82BMsKEu7ngxv6M4b6vhpTtLpdr1uxySofMEfG3aBwKqkqftEfozm1eeBzgUbU3",
  "key5": "2hYQgVj18UF7jCtqZFrZLsMYURn2JgHuYRpgizeG4LAvm77ehd1fpVDiQ3SaUYdgPhnCV22wAjgBPP1Nj5NDCPDt",
  "key6": "BFCiYsA6BgCdB4FpYNZC3Zq5c5ckEvdkEBSP9Nyf7cceEwVxinBhUFGXcDkP2UbH2VUuPTffBDoMeAW6KAiS4o9",
  "key7": "3niPpPADv2FPygSXmZv1GUZRU3bnEfWwFRG7xWMNJvDDdmVoj3v7oMC6hhdKN3shULFXDBSYDepwQp4ewJYVm5Lt",
  "key8": "2EnpU26jG9AJPynBBPJEPg2QuNPjWMfra7zWfzCNaUfaQvKLyHBjFQnDMEye3abhvq38zCbTyop2PQoErDLXrGxK",
  "key9": "4HTdLFuDhLW2AjEMipLL2JoKU6Vhp93dk2N5iJQpuTx8eA8qrfJ5Qq5KikA1csaALqZAYoSVShjLCy93uHfgFJST",
  "key10": "3i9UfkC51pnWPySRf4pjrVWhtyL4FE1YdGWDdMRsRWAWaegX7A6ozrHwmmYfvbiD4YbmZq5e6eRWkqwG8hZpq2nK",
  "key11": "CazL6DWnnMxotqVREs2h4acgeEfLSBzrFv8VZgorNQvQMRpaeQMJNp5UCJq8SCTiGKEuGUJQ3y3DbSsnpzkrXHe",
  "key12": "3qmD18sXuSNsbP8Fdd3oxkPKUUBtR4ySKCSRwTqe5jqUkYjF54uyphyE78YGUHMDvNJXMpZD8ddRy9eZP4R4u7iU",
  "key13": "5uo6yoUtbMz4yinbtYfDuSZa1yk9dr7ZxxEeytWBfSYvqJbjU5U8zaRrCkNvtZAYKAjVhEq3fr1Ai1ZYLe6p16aF",
  "key14": "5fb5WkqV7uUsWrUoZGrnoas78Weps6SepDYNdUWGAVMWFNrk6HhNRhye5RNSpgddRNep44jq26ZViz7iX77sRRvn",
  "key15": "5MMS2zkz3LyYu4xi3EZmaZJapzoqd4AHRS4suu5Ku1axkfjHCupRgfUPXXkHbWBUN6qTHWSgaWhYWiPuGWwWcG76",
  "key16": "29akQTB5CdFTtjxuxfHbL88pNDfTFZNzim4e3d1bEpAWTaDaMmMVSq8tqKmHP4rqoGeYWUSH2PrnYJkFWnpaJDam",
  "key17": "5jpQtm8sN6XHJMACMPPaTeutqPWWQ2VbM4b1o5em5W9o97tqqwdB1NoT9knZt3Rsb7F1UzzZC3i5wG2Q3TDLWFxz",
  "key18": "5zvdPUuysWTfHB7EyzHpUPaaFLe98gGABRbiw6igvMU1etyvDQs8RL6ZF3Qc6tydWybvED6PYoTpYk5BjUTJuD42",
  "key19": "2SBrdmSxr6ZxSDcP1HTNWV6eHJ9qBqySNg9ERdudzPjVC7DTrzhtHg2vimBRkr9eZ6smsFGggqa91PAyF9JJByB4",
  "key20": "48BJgV6arB6tPshx6CRqLWzTPK8PVSPF8w11fKc4EEpemhge6ZkhbjmwSVXqxVMm52HPh4VNDLA6Wb3gyT8AQaFa",
  "key21": "4H5GoAAi6j18cs9qBzB3j95vFdTxVfDAu1zZs76MqCo4e4LJtVTR73AJGjqo2Xv5s99qfRWZWdRACGUhZPMLJ2dv",
  "key22": "5bLbD8JwWiayNaXqSSHs6n5Bkz3im5T8EmmdCMfX7Rj1WCCJUSHCB5bDdK9D4R11d9XjMy4ukBkXRkXLcD3fg1rV",
  "key23": "hEqSUBnY3sz5vSm7o3mDrME37y92A3SS6Evs89KUoyYSJajevvpyaeWfUUEyGtyUYJmAitnSaBV8QtQxUUjGPUH",
  "key24": "2h3XAu1CanuB6nMJSXcabvLjPukCt6N7i8Cn4Jm5d3bEg9iDDsKcac9yQAYbHh42sCM26aEX7rpuJbc2JbWyJ3hm",
  "key25": "4JkDuMt3jy3JSd69hs2bcZP7zbrWkCPWiZSPhSQ1eXahmeutYDR7iJ3kWfnwEDc1cgUqANTiUCVXdvdp6U2VEb9F",
  "key26": "4TdYTVf3dbmwqXhPRDFNrw93XKiHHYNfEgndqpQURSguMk3yoUa6vgskKE9PsmZkKwGHMgRbSbUoQqndqkqipQQk",
  "key27": "3KYuMNAK1QUX2Q2SVMW9KNH5uZzcyhy1WZakiAfBgMFYchubbhxjQjqwNYPFwFQNviMt22CY4GiTx4HxjmPPUjtq",
  "key28": "mT7XgvboHtW8GmBeGbPx7xuzKekmG82xd1NuPPvLnuUH9vL6RAWzcwQyzNGCA3V1bff6QPStzJfUyhFg8d4pcse",
  "key29": "5Rs2d76QhpQyQrAmQGTEmz5uE6pC8PPxzb8mRX35YXEtiS4xiRZJZLmjvF4wtFXGeaXprBeiPp7ZLX3tJnjP75UG",
  "key30": "5Z7pCb4o5BdSJLZShxR3cksnrfUDMZemaPjVnDvawedoBRQPbYuhWo5MBJK2s8erYVbswyM8t8wrUK4Jc52KuiD7",
  "key31": "3NdqZAUek5mmNhJ8MfSTypx6Axmj2Lxh1FA8JeSXDYdaJGbrgk8SqjMpkCpSzjNMkzp1PFDCF19F8it2t1ysHhgt",
  "key32": "pWSsQL2g5FyysNudyRGrMnBZKHnMACPqJDrNoSj81PrE935hcMcPmRr3KoKKxthz6Tme47m3YnK9w7CfatBMDVP",
  "key33": "2wnAMFxTH77CW8Ds1Z9AavXYikn6T9rytPeS9QPf3PgofHUXi6dZCWLqxuaJxK1zqTG2ccFo5WwEvWFPud3c5xMt",
  "key34": "2DN3dQ4wFJiBV3DgzQBox1RvMpUerTEXNZj6RnUUbQkV8zsGDE5GacF6NpTLuNcu2NeGcKNTap8zAhAtV5YpV179",
  "key35": "26hUZhC8VkitSFguwUsxGh296XRXgi1poFHzZFJEtK3zLrp4ZysDFbcrUv7vHjbfqBYbHpXZf5ducJ7f2ryHzrun",
  "key36": "3ZpoWPkAUpb5geAF9MpvYTTKe6Y2C4P2phwF1ybNdfSGRAdCaxrNF3Stee4YWwiXKuJbCGKruaqRRxgbZHAXSftM",
  "key37": "4sBeN3Retqh59iRB2HB5AAQAJUAr8B787ifVsLoj8RXj92dZCpHLNzafmosxepfKtBDFKXfffjGg7SnJwVxyvxvT",
  "key38": "2MiLShDMpCPu7Ry5sWNV5ugfJzWJkYsPWXqxkkvKuJnq52Z2YLzFE79XKcbRw4Y8DJhEZVtG188K96Qu8X2ueRQn",
  "key39": "61NhieZGqC77MMGaRCZfnYXK6Koad4s43Vw17j3gUHMS8Bd6JDZtE5mVtxm9AuQoAiw6FCncQZU3z7s81vnYSd3C",
  "key40": "2T7amasQ9ynwUDCUPPLStz2D6VhR8QN5hYYbhvg2eobSX3U89WYanvFqsVVFtqYwAuQLciZJ74gwmteydFXZwMVE",
  "key41": "r9b5n6xn4xpziV82u3s3KMzR3QTCjN2TmD1twDd9zyVsnVXxCHafK6heVE2eo8XRbv6Hand1xqRHKKE3cGJ9YRZ",
  "key42": "5ighvYfCM6HQhzfExUTMyuc7kiFELccVkDYTBoLwjF1SA72jz71FKbUT1jdfLuwH62U85icrQmBaAgNwWqdUZeaH",
  "key43": "3rRXJM2t3mBRkaHGrDbT95z2BNuvfRUi1m7RMndhJCrjX9VW3FkNvBsE242kqCVXgAuWHYjk3GbKbG6nM7XQEhBF",
  "key44": "48x6ysEo3UDjyAP6hXinu2PdqLja9irsbHc5x3VQACtGk8PydT9akpVRKj24J58QzMmbktyYKQJEFozob7D4HUXQ",
  "key45": "2735znqjsPQyX2s6oPZvDhqsLwCGAk9PBuHeubsPiStrx3irFhJhRNCsHvt2o1jCyezRnu6ZU4bKjdWbmwzu3LDB",
  "key46": "2Hk2JL4HHiJ1Vs86irVpiXptW6HXmsM6w9A3mS5kxSKCoNdmmth8F9aqWqu5urKCc8jxB832255veQb6Mpb89cyM",
  "key47": "zoUi9sCNew6S6vKFn3geAu1P8QyRC8hN2Tic61Hnfd7mYp8wCEEkNqj5gbwrddLYuoh598TZvHNQ7pCFV7t8i5n"
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
