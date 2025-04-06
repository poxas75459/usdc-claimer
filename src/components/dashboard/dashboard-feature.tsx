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
    "2RKFErq8fcEatmW7tky1SFfXqCzK9RNErVkeVJpaAq6ctcSccpJTLGfqUiCP6xjdLouzs2tSRp7qnpwRLj1XMeEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQnjvoJmtHniExWCEZdddqtTrHcqKstWKqtPiHp3MR7Vb7Lo4LmyVqMvPR7Y4X64a7A1bynk79yZ98oREMZ4MrG",
  "key1": "3UekvQ66i5jB2ZjTEyr8zTEgPXh5EUCx2rqFRbfd3Cta6xEXSXZw8LsW2CAsQcBzL9kjXycnx3JvExjW3tFYi2ug",
  "key2": "5vsRwzamHmDAUjrnCZEdr5Vb7VpjBVZ2U3CMhx2HyT3ZLiT4mrUV2Yj8mMGra7XTfGKGi15u494osvVjvTCx5LB",
  "key3": "2evHbv7pLacWffQa1YwPbVSBMT1sxSbrSakYXZjiv6iF5zZ1UNwUMdnNhakPTdh7P8FBBHGprdVWrnrVU6ASjURu",
  "key4": "3A5Ewv9uHVoH6jhRerJ42ng3eGrziXQbtcdAWiABmuG5m21TbtufG582VyNb4U3k9KRTubZ1kYFqgsMRYuqPT7nK",
  "key5": "4mhUTf82erZPwF34iWMt65ooNimxLSHJniWghL6CG2gDbcorfMB1n3b5dCL9YpzvHk7bPsrtNTmyrbW6unEgjpEW",
  "key6": "2gwuuFsHudShDGYbPoToYmydaPJDcNw8zHBmuBCecU8qetbm4h1oKHwHb3HBDRN1QhT6TaqY6mFsfsSxGBwWsBxg",
  "key7": "36cvFEF1Xcx7iRS79uXVH9gXNa4WDuVhdcb5HkCCaLRkpXXgMDTFwN8j4RfSyFJx5EQRuLLYKuyuazLsS4WJvtrA",
  "key8": "5jmV32xpTYyzX9Y7NhYDhapprJq8NHYaPTxTZFsLDMVR7vBWJjb2TPWZWpWTKxDX6vYUkHqKJuhEFrMYQj9f7dFr",
  "key9": "puCddLgmkNtRcosHVZyjRdGR3H82qJDjg6bUf1YXMYS4cXUCokkF3e2FDUwcCRq4x51BywSKo9MT6LKaC7KfDhA",
  "key10": "58BL8aSjFAoefJ3FCgumumRuwz1ZB5tYydVascNuhPbCP3ajseV1i8W9kFPMsYY5WSFvkbdGjgqrJfk28QpA1KcM",
  "key11": "C1xpDGEip5gGWwNUDP1deUTrdFamfL3UMhp18351nTkHHd1K2ZBS4ZJz93TUbaVpDX6Zpww9P4Kq71PF6RMtzbP",
  "key12": "qpAFq61HWFYZqRuAuWWz4oaPYYp1U5Pr74GiGhTPnV3AjSaEWz7Skf4AMDybE4Ux26m2z2BpAzdg625w2jJX65z",
  "key13": "3jAJs3Eo2rmFwhSnMVZTWbxH4WTH1EcrETy3vPhcjtHqn2iZkkyKfVb7raS7j3LGniyVarVSbyFBP5unHbkUjEee",
  "key14": "4rStThV7TfB6m7m4sEyGcgBFVHZcZwbsKtxYtfR2s1goJV5g4iM7156s8c61bL9ARmKxhioUurEmqyAKwQmjTkMH",
  "key15": "5AqnQvJmj3esQJQL7htjhDSpf8kUPmSNnYXpNEB9oeNsm1AqhJuoTgjvETfYE6JrLFaE5ABEoVipRuYoPi158qWt",
  "key16": "453kHgLz8CERBu4AjXDDTQXdA2axctSyRgfjVepAyZQccxHTaFhGwoa6rodxeWgVR7a7kp8tFujPKtJgTxB4v8BP",
  "key17": "3ugbb7rUAiaHx7vvCt1Nf5y5YnrQhxhRtGju2RmZGuVUCYRasYLrHf1exASMhKAwYfQwdABE4Ae3ggnTK2eScFtZ",
  "key18": "2gZLPq7zJ8CyQCarRW4hsZhp3J8sH2yrzGZnydS9KUidKN5zkkngN41p4Ve9FNeE4uSpANs1JMbT4zEzyN3ob2z2",
  "key19": "5fQDSZ1YFyZmzFjdxACTr5wVJWu8DvoafVgKki4KnHZbDnFfyXcYqNL7CXTiPHH1bzeqsmX6uytdCBRSTaHx7pih",
  "key20": "92eThW9aVDMWbfRdoTidNAWxdVyZxD55yjGWBu1m4fRuQf8ka7pYyLthAwbhrcUWtReoWNYkqKTE3XKRUgeeahb",
  "key21": "3usTYKH5fshJiR68tNuxqLE6kbC4QMiDtRMHxLATDDZgmhJcmVMoD59rQmbNkVPfEnr4GakCYsCTqr8HEn8krvAr",
  "key22": "GqVawEA7Tt3tHzRbD6ii3MeemsFjKB9KiojHyC4mcmZLxQPA25tv1vDXut2zgrLpJym5t4cRWjyH4X8SCRDBTZw",
  "key23": "DzTBp8cudaYttWufUHew5p2TdBSjqaW21ncH1tYzowW4KT8mmECVxAW9xbKTbE45a7JsZrFzK9DDkBD6rE7rMgd",
  "key24": "5shRfswhr7R4VE3emy1iQp4i9VfzU97k8tT9EUXjUDLgn1FtJwbbPy5uR83Zjy6tGnthJ32bPS2usFYYVfc7tVeK",
  "key25": "4131Rgm2vuMBGG9t69ZkupwdMy4X8nkcfe5zg944jKHA5dzZBtwTX7bnKQrpzipZF1Tzzz9iBy7zvNT2tya8kUTb",
  "key26": "3YuvwfUCPJFjJNdtNmcMSyj5b9d73giG3PbMSzHWfTYWot2PdW6fa3ULUwueizzdYJMbWozPvCGWgpKSRcKhq7q9",
  "key27": "kFdx43RwBRqj6tmwQajTM4GgnDwRqbFhz8QKHbdwtMUaiC3EsA9KenqWCAhfeDzVzDLNKJ5RFLTBkZ4qdkPkBYJ",
  "key28": "5BMTb9Djr2BHjZoncpnb14CivS1MS1jH3ewt8ZC11scLpkAV1kEgMRV3BmDMM3YZjMjvSs78o5NYBP4rsSDoLeuR",
  "key29": "3VXwwifQj9fDiMSWYmpe5F6VubQ2AKwBTrERYYKpoReSY8qxWcdJVgJgvB9pnPwpeoTxMSYVnDcz2KTsMz58bFnK",
  "key30": "2XRHaVwnDiwZvQTDnRyX3w2o56f76bVYRUjpXW8MLFxii8tSrP7uRVabLaXPGt94NYmZng8mFH8EYCFD9NcPeAR",
  "key31": "3w1LVMXMWu6PpDkCzqX93m9kULU6HzCPMGXhwe8h2m6SPWwjfNuU8a7dXkvUw7FgtTbhLharWrgg2KM23TiFTh8j",
  "key32": "22us5AkVbMiHAFkyH9awHvayXg37HPqX6ky6ENQejLB1Piiyi7XfmvexW1KMiWNLw8d4EYwCA3ag6s2RsFyKAtoe",
  "key33": "3DfdJNUcJQxANfZPK9MP1PZvKxhLCJ9uW2pPfAuWZvcPczVoQbGNdsgJ4SfjfQV8JFEUnZVDSC47YGgVjCXAVg9S",
  "key34": "cNNpdPVpZFD6KZCaWVTAJnf4rg1Rh4a62qBDCzYJNCcJABZqoXGgFK3VMviYP55nKwsbXtNWarHnMG6UCKqrB3u",
  "key35": "4goMSuXLbCmcXs3hAyniGgXYCMmjJZe97PN9XSB55rLwh16Zta5uADtwa8Kjd6ZQep74uPXfPccUN9S8FwaNGerJ",
  "key36": "3Njrd5VRF7vq127t24QnjWV8tZeEsFK6FGjdDrgiXWbpXp6C88U5waXSd21gixatmU6djXkuvGFmKcT4M7Eu3czu"
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
