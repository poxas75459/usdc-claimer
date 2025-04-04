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
    "2MYPQa9kSEtwhQ75qmVDixNA3ymSz3adsgA8Mnk11qc3NZHy7NSXpZQNzkbPdacFguNf8UvC3fm2jc1F2qN4Qd9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ubVjdPzZ1oXKcv25ZCmHwVC38uVmWbse84nibmmkBFtntdT4rBJf3gKrzZZzktg5mXhMjssPP1paL7CH2BDxQ26",
  "key1": "2LtHw1JceyYEEswujL6KEoE9GHN7vCDYnu5uGhe2s93V6xRq53KoRqqy9S4YpU3B1oPDSJoXuaSxvp4SkPrbKnic",
  "key2": "5YPiHxmvXRTYaG89BUedBGEX3uf3anzLtCdEBk2mqDnCARJPwmuhMBdg3gidX42dHE72uwAWsvqdG4MbBSULcHWU",
  "key3": "3MU73gv548fa1us2du8HCTf6tRNmfiGRypd2U2h7RhMmAi1cmdw2TFMe86tLyWxXZTBnLA6xAnb8XBsrGcqS5Q6H",
  "key4": "3WhNGfUynvRn6kogPHikrLArWu7LQ4tjASK33oH352W6Ei6r1m4JMrwxHV2nMER6PzF6W3qXxeM2A7gXnrQGDNrc",
  "key5": "4XGjrtiNNhzZktpLDTAd4n9uXoY3zNbTzxKLQEYvxf5gefndEKCFLR6FdFb3y6gNPpwjy55k1QQNuTAXvV3ST7ni",
  "key6": "5oZFdiYUoohsCynhAgHipWYjSWEEPJYNegx9eYyS5jUzikN7c2yU9TfxzgsnrvPWKbrevkDN5M9274Sb2sagR93L",
  "key7": "2EF33fzF6K2xq2MsJMe7Nawgxq3eexkkhYWd3TW2Qn2fUcmPF2eUY9xNq7YbtnkhoSE5DNCJEeHXx3ALZvDjnEym",
  "key8": "Mje9cHpJbbpmkBgjHHEa38ZtTef4US1dq3xC3PTjNdXgiCXDpFRCi5uh8Bh3ECCuCbU7SAsZg87uHgL7sFcAGvT",
  "key9": "2C2g5LRFwoN2nPSHo47S3tnF12kpzgmt98n7ouVFKWFDUpDV13n8TUXnVWnqzuu1mP5B6bYzUHMWpGDDCxQNQdUx",
  "key10": "3rANxv8mXrz7qYW4PpgCA2yTZXpDh2tUqwizMEds8jf27BhGWe2m4r93VRGK5SbyPVW54Z39iuQhZuC3u67pMeCs",
  "key11": "4NP66s949XCFdUiJY1XZ757Q3sVcLyq4yrwkbqk4PvMHphpYrgjRSbaoTEa2zVJqUQ12KTH5sXyu7FAB6L1uJVmP",
  "key12": "3sqz8n8hzRLc25tineXPtWfL7vSwQSA8nBg7qqMFy3RefNCVetufscWK7yKbTpbBsC4m2yigmhCsqJdid9GKWgak",
  "key13": "4caYKMrfCpXEzggDGo8BV4BoTuAZyhSLe8eV631dBrV4D3PyQQ5LwtA2meaiwK1HT7aj9Tx68ZcsGASgpWGwchE1",
  "key14": "622nF8BN9JfYr2dvaMaRYtDQ7hZVjspGhGdXowsqKHPbvMWPtqQ5ju5oqWvGHLsUzyUB3i7wjsHVRYnhsriHwpH4",
  "key15": "g5XusqVfsHWX9y4YTw7HbPTqhQDwMSvgD3DBjkWfj2P6aswgZi84pwQfK2yF7qhovyRkQiW36xKjdkA1XoWckAa",
  "key16": "2cnUoh8Hcy4tJawCprHS4Y2SqBnFvYbBEiN3T69HdVEWQm1yUEztgFCZoxPLnk4R74eAsd5geSEVN7xGGDKuhVtw",
  "key17": "6623TMR7uU39PptnFGgsyNH5wzddo9tHrefLBRWPedJcZxshfze4SrKjZRBQFNVdcLLNLp31Sr6guVCWigiECG3W",
  "key18": "5Ey3VHHBguADwb5ysCJCiU8N2pGnFMJaHUp78cXB3i8zD1pn3XAGudBL63X8U6dVxcmj1baoTtdH5Cw8uH1gSLCE",
  "key19": "4AFbTdDSZgbZQij37MrbLKYRv5W6ijeKFNvxuFPDTnWfYPyUEn8VcN8yiB8M74rzo6qYCcVZ1wgGSw1pdY4w4UQP",
  "key20": "5bLt99L9U7Ak5RwP1DNGv9555bcec6DZv9yb9tKULe4x3axZXGUw17nyKPnY7vSfEANUpJeEhKRRixdjW9J3jfji",
  "key21": "53P5mUD64u8R73zEhzkABTao9kTNkmh4ooq5Sbq1QDhdGHnQdSh9Vb1YGd4aWKVmqe61cuZCU6Mxpda4MteEupx2",
  "key22": "2TEF7XRhiNG99QhjyADWNYkpU18aTpMMLvigNqBqfgbfWp9JWfof21jniwQntKz7W8rWx1T1vHpCPQbndJoqBRLz",
  "key23": "3acrsAMh28UYzcFCVx3eteVmNsnqhwEfTrc7L8UqMExkX6wkjKZp1F6K2sw6iDX29vmpJVo4TkjSps7wR4j88Eou",
  "key24": "2hT8xVCPFogKmxHJ1BzgkqPReDHQAf6RBj9yAGkhZSb7DV4FnvMnHzX5VSGom7LtnkCM4dZWQVFBJoDDEzDRxf1Y",
  "key25": "3vc6JFgs4Cu8QFL4Uq6dMSeeShdcyfaSZx21HXSJxzD2xSAYaKf3tFneoM5SjTthtSJPgoJKEEBLi1PAJ6E6G38z",
  "key26": "5c6UY5eCcWsorhNhHVri8k4ZN2NjeNRJBHDjQVoE8yE9hWPZGEsy4enJrMG3JC7a7BSensbRZbtJS6A9UXviTf8K",
  "key27": "5JVPhKTDfK5e3rYyASngGQEnyv8wpsb5jCciH1WVfPpPPRuZp5dXZyw9bVZFcFQvCYCfZ2GdSdGsnVbZfriwTZBv",
  "key28": "3Q4Epe785T9dGLL1Z5272qG9cMmRskrFnMBpNoAYmzc4misJvqv1Txt1iDEw3F7p2vmLv28HQPr4fiKDH265GxmD",
  "key29": "sYWbam3R1KGdYCqdVHHCDFWgRk944rxJ5wQxRkiFGymBMvfdFVvcJhWs1fgVNaqF8gGFm1KJe75BFPXiv811dEi",
  "key30": "4ne9AcTVFN1CM1rriHuXQRByNtjs5WWQMzDaHGXu93ZmddkbyShd4WBZZYbw8tPVKMJ3UVZasFz1FaYdoQewmw3W",
  "key31": "8fsSPMReSeWNm1HseYQQ6wV527PpJ7U9J8qJzCNiWVseyk3dn68hk5NCqYd51QUQCP8Nc3Ez5uZbvS2vCsN9g8o",
  "key32": "5RmyTESuwixnVmBBFYWebay5UkWrX9Ha9jY7crCsQMMGUwwdSHJfzL2PBFNGfybPLnLsird4q4Sf2AzhMss9A8Gb",
  "key33": "4utgXcfmnp8YUr2Bhcx4Bm5aYMRweymE7jHxW9Jsvjv4zYQSpirN9rYD5Dy6arnGJnDsqfWARpxLguiCewakMrDE",
  "key34": "5b1q1rkqTjt24zUDe4QigdCSDfSPaPx1bbAryTseXVwPnoznvxzByCz8C74yCMwb8Dm95RBNnh5pX3BwJu7uzkcr",
  "key35": "5XJmgna6dLCA2FiJj62yP8XRBdKvzETkMErjQFSdWhd9dptGMPUmLfL6LoeBUsFzP1uMETfr8VPRAWxLMLMsPMiW",
  "key36": "3CePCtpZjSUhpZijMG9avE2LkcQ2AhWXjWeeiLWizhjS1b3nWBv4YPpzdmGH1SjwuABBbKmvdfjpvzdzgevsMo4b",
  "key37": "3GWd4iLcszY1WoUtjwbuLptrScCoDo1nseFsq6R73Cim4vSBdbqKJ2LkNq667pWKe1TyoWT5zSqavuSQR6ZMqf8f",
  "key38": "4i35Dzt5JuHVKRwtw8t7dxFwELaxtqD6DeLAfNZ3uBsAGh4itinK5TM8aoXRJ6cLNk5PGBU2BPqkxByCPj2fiqMc",
  "key39": "5wuqT43CZSk7QhBAp3t9U85vtJhzwUVC6Vp24ViSKoANnzt1fP5wNmTuAj8v4ETKkFSbUSNqXpkY4thHTD4QjfE4",
  "key40": "4kaNwKQNBr39UucXviqcEU2vgAGeqbRf2goahzuNdkbcmopn3g4SpEdqVEjfQRBU43YhVMu2fy9CSkQSu1UfKKFp",
  "key41": "4ZXWS5UzzGe9a8vo5Jwzwxq1icj1LTJag15FSowEN68ix535scAKPy8PBYTFpS7mjrDdrj4FsR2aNKfY7uV4nM7g",
  "key42": "2ro4kHj7B1dUP9qLn7QtLrm8Ei2bBChbm9AVCFVo16xucmwDZMvU1YX5ep4zKLkFBadK1m4fkWHkBhxzVTspRhrq",
  "key43": "4hbhMcfChs2FKZVXFjuP1MKuLRZYxq4LoyxhLQaG47TLZVoNJ6BiymV1DA1AyGbjBranFLg44wqyBTQpdVo2nRME",
  "key44": "35kEB99CJqMj8GyTEAbwzuHwp76vzJV14S1KxFRTTAP49ZM76wQgcoAdM8pEy4j1Wp3yNwaT4eAMAmM1Mnhj9CAG",
  "key45": "5uKHK8aTV6aimmDV5ZBx1i42MGGPtEFhSefcuQ43tr7yJRDRo1NkHH98poVfQt1VLFsskT3upWy7VuznMayze2Lb",
  "key46": "55DXcntqVF34AZpnt8NRcJT5gALJwdk3HEgoPAPGvTqMov2syW2pfqAcv5Dfu7sqiRRmc4umx17cmBm24vVEHUhF",
  "key47": "65mRY55sJ4ZDbJUkXgZXQzTJBHGsdgAcTS3kR6759soENYDveaiP74vatFYvEMwyA78DoFRsJznPBkCGaJ7bTVAD",
  "key48": "4sSbe8i4HHPh2X63U6McfYYuHGyQ1gv5qq5UHqXL2qt18yqdjeggXWdjY1BBQxVFnA4Bo5MPkgHsZTbQBRr6SMRK"
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
