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
    "5ex1MG8NjrRLtfBW811Y1aAUuPEBuaJTayHuR4bKqUTb7a42SmzmLmD4rqAa9eLF3gaLrQbjHoBq5wQegQHmkxcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkinpQBsFwPmxcQKpCmQrTCa9j9oy8FJCbDDLqs3iH1R7STbfvUjnc1gKYmBXtauodqt18GqZDR22vhXwq8315L",
  "key1": "5Y37j9ciRxehLQdcqAsUiTWxrDEtSwrVjj25UaaaGY3Xu1es3o34Q9HPNfiCGeiB4p21RxfZLDDYeWg7n5ZgXt9i",
  "key2": "5sWurhgfwsDorPVdbd1YjYmuFpGoKrEkvRPW4Evze2tCSW9YR9Sjmu3KPV3dZUPsUHxNPovMi9JDMqMqnNVe6bFn",
  "key3": "4fNmh1YsHjJE3AMK4hzgcTWSzriA8PTZ7qC2U9zAYTBSPjQvHdwrMhC1wQYusPWZWbSXZZhbuPwW94R8jQ9bXCKR",
  "key4": "Q6n2yvxnxad42iPaVi2eNcosgJtrCdVjLcHwWu3d9CA7UqLKUE4jpEMCVzcPoq5UGBzLqqMSdq6JmF7TEZ4e9HU",
  "key5": "5WbM2czynEVpHsSrfYdZpoqPkES4DNEFgBTNFdAoBnoMv97KSnx2TWTd4Pej1GhnMTxJrmNrxnByREygye1W3Vd8",
  "key6": "35XGSBBpBxzCE6YnpP9VihvWCWu3DCn8F4n7fXViMjNZLmAYJpFixFv7gVTzqus8mc9eCPZWU3khFYhZCr8QyzMF",
  "key7": "2QYHFFNnuwzBEX2Dex3XcxuD4AhFRRFpcMRSmtuD9UQwngRKWcgkceYEUZjuhyuAxAX3Sjf3beW6aja1KcYc1MDc",
  "key8": "wTJnMCyGq2vDW22oXKFYM8NXgkAf8NHftcXiKR1RTY65uxhJX4WJQkwq1Lj1ncvXyen7AzgwMedPMymWjFTVNsK",
  "key9": "sNQ4sxnaWzE8YQ5TyjxAdoi814pFQvHHFWaSVvXdYdGFfaFnLH8bAo1KfXaaw4X8P4FJSSaUhGwLig6H8Yxboca",
  "key10": "vF5RPmnqc5f4n954BW4h5T73vEa683YV4jyT1Sko95fhrQShKDJRxccRzFBNxcKvtgh7q7xYnDwZdkpdg9e2GhK",
  "key11": "zHf5JYZ685zb1qhQc2ctVsZ5vJg1PWjokKyGrqbTLVCwKkPbtbEDtjxu7uaGkBGMF74z2xCDuNcTjv4xWdckNZ5",
  "key12": "2kQKWf2ZqT18YFUnkgnV3qWCjM8HhNuuWxLuhCKV6J7zpPx6bikbxbHiXRRS3eJFR993s7cd85MYMw7f9jzBW7AE",
  "key13": "4FCVE9BHt7dLrRk475TxZc8hUkacnE3UVFtVbjSLhRxBRND8KSiJdsmTR1PPEYMhu8J7sjzu6DurSRdHydGbfqd8",
  "key14": "5PAEQYkoh94jqo6TJXmunG1Srdi61u9rhrx2iPxiGZndSPCA9PMfzjsuF8yin5CUnyuZDiDFo2e6MxYwrsFc68eN",
  "key15": "3jiEAzb4NRZv5vuYa5zkxE5bgsU96QaL5UjYQ6SnJrujRVeKkYKRpnukgUgM5MPD6nUiWkoqs6XH4VekP43zCuCC",
  "key16": "3nsWqrXfLEE4AR6MDRCy5k7ZxpS8hjeDb5V3opVwqrC5dBvjHk1YYc6d3BUUbn1vtNku4rdZRbxGzfCaBgJE2sza",
  "key17": "4f1j1UPp4UC7h4uJuTEZWhgMcHpzW1C5i1t3tB7fCRRY8BXX276PWHa9qmVstradwK2mZXDFbbvxCV1yaJpiNfbj",
  "key18": "3esZwz3FYqMowYPbimuBhuoswfGY1ekdQT4MGzjsvCTxSM1ozh35E6bAcJJ5dTZnnzM8sN2bcq3w3N5oN2Z8tjrJ",
  "key19": "2S66ArnYBQoQ8tyNztcwKH14k5QJPucJTagotsoUvwW9wH8idWzoJ68fXjf1VhB1rVkBYS2qzVLSQqAhAbeYwj1E",
  "key20": "5E6H4VkH2pns4XLibJJCromTTa5j3G5RE6gPpwChC2BRNqKfB95nzizT4CyDhAmgdGNryrUhaQvXg8C6hL5tzGpw",
  "key21": "4LbfFMXxgd91VbBn5aNQx6KQ4pnqbUMZbYiW8PRR41iFSU4jNdLh7zEwLmvb3D4p8DrgmQRXndm2JfXJn8KKFsuj",
  "key22": "5Hi5GjEhqwekpmKoZjMVoqSkPP3Km9wPC6NxpGkoyxUGAC5bSsLDmzGs7dixHXDJrzuhQSqXCzdLoo2pZM4KTUp6",
  "key23": "4MX6zneuHpgS7d6C33STE6CNvxtn9nFdyRDvYgTTVbrguoqBbJZxYGFvnphhNKKQF4ybHH5c82kQMLzxo4gML3Tm",
  "key24": "66umb5jRTd3FncWyEkeQtcchkGHhWac5XFWs9SnBiLNwk7ekNuvHFsooj8Dz5juFKFWwHw2wqdGD6nJ3r4GVvGxG",
  "key25": "41n6WPTAUhzoV8cFbEjDc6CeFm9kbtGSfmBNi5k9RPk82JDbpBthb5wdCPYJuNvzUatKs8JjyPKug257gGxa2RAH",
  "key26": "4XVKVMozRQoP7BwWygwiwpSMgRMyPBGB78ZDfBbLS8QgUE5zfEDX745DijJ7ZsK7s8ciXiYd4Fcj1pTL9RQ5p3Gc",
  "key27": "uYS4uFXuKAyT59qjwrbzqTr7B28tRqi4FpjZF6MV7P2MdEp4aYD3P9vdzijZZ7vDg32wxLk7MWstVfaZkw4UbqT",
  "key28": "GKgPnsE2px31g9gERgYNK4tTZFhsU3ZwYZrpwCZ4nWSEmSNcc6RaYQ7RJPaj1CRENvqkzBAcm66LDjz8PJCgX4J",
  "key29": "5mQ8jPmZQP4K9pu5LgVV24WvdyTCeuG3j3XU6Zgmpm3HvQThan7oMvmp853P6XGhEsuy9JQQ2FVYrCLaaEw2wHuj",
  "key30": "5nNoSvnN7ktk8KiD5wrA7Ec932pUN62QPaDANyqWVmVyXMkDb8gmn1N65rU6MiUBoAHNYuDU5sH8h1UAPT4yAcCn",
  "key31": "3CMpZLXAuy1KX7sBDE4RtwJrxjnA8vookThHYviVjbpgr2MRNb1SvytEfyA2d9EUgxKSah5XeDMqp7oiFoikHq7T",
  "key32": "3fP3SJU41snWLGtZz9y54ARxzxQbd64RxfvRHgHQGr6SJLMVyNKfJDYC45qV7Nqi1w3vSATe74qLr9GgiRACBE6y",
  "key33": "2i4d8iXuCqe3aHsGzpp2AdCMZpS2FZzUE57r3XcMBKFdZMh6Pfbw2mK8ecjK8ffFt45ciUKRe3mAShAD7BYMk5VG",
  "key34": "dPaxd1qZqAzmWupCE16Np8K7ccqBHe3rr7HHnirVjZ9YB24h1U5rEFe9mCUrmFcXDXSk3B4SH3yLYp5QAW8kBcj",
  "key35": "4HtPQxdorv83cfWqppW3R8kvXkdcoJLc5UHy2xVypZ8zscYdEXu1QQb1oo3SKdQuvWWRPzNRstJL59Qfv5T6XYvJ",
  "key36": "SQqcC622mxUqzjKCGbfpmnKo2Ed7z1U7pBL6bhkoaKUqdwJECxwveWREnkyBs7uW9qyLCsB1xGLFB4geKJPC76E",
  "key37": "4pDmaCCHvCAMWrP8xFzfrwf8SNxnpLQKvAATZi6YAo9ir8P52mExh6ThyjFqccAxNUvpzYvfbBf9t7KBkW8ajQBx",
  "key38": "4tcpv6dN4qMuEvF5jNCv1j1bYth2oR965sXutboL8NSi2ytPG2hML4kwx7LcraCrbag4HNE8iM4kxYUXRgZ6mmiP",
  "key39": "3wQGbkBeSnPKtEkFs1pAHCR2dvCAmzR9pdmmoNUadJ4cBNrfXugzxwNtA4cCSkM2o6FWEVCa3sPHc32Rbhrr7ABU",
  "key40": "3iAebNM4NiAJHr1n3p3reeWWkmVLuKmaFBbSvgGdwHRbBm8ZrxHbyq3192b3of6vfu8SzdEb2THSjaV9e35THZ8o"
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
