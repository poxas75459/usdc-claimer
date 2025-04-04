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
    "2eSoN8pgwWER6B4WDqUEeLSxKTEs6RfSWpQve7FsdKuTiATGd9apmjhCjRaMMXSJFzjDoFbqYsULkTCWUKu72B83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qjbEXuL6Qy4QEDwLjyCCpK6RB3ARoxJ6etHtuLSuN7f1cFo1MTpZg4LtzLv4KtSp73UjvF2cWf2cZDCao5zqT1",
  "key1": "UNUgLnxEScTCGdboYbooTCYbdSqfTNYZEEJG9pQukQSZh7TQ7kRx1X3k1cPq9JiK8oQXLtMKDToz9N3nP52XW6G",
  "key2": "3mzdpsc8E52YvM7fVSqwNGyUwJETMibAGtrE9h1ca2cnuDK97sXWVnsHJJNk6stQS3AjTRRhxMPvtzqExfUQGKg2",
  "key3": "3DMZh9XVJQme3bBwuu6uqC65wJwrqKyKDyHvtzjhubgBFqGEZC3SuKyxLKKkWAFNTp9aeiWUe48S7R9WzHSRwd2x",
  "key4": "4D8GF4ciQpqAQkZYJWkjEW2UHN6CjBRdrMHB4nNuc6583tLxVfNHqkMwtsiLaoPQC3e4nf62oDgEL2suWN7n11Zo",
  "key5": "3acmqj9cBLsPrYQW4SueBLfPp5ZqpzPcUNA4V1xo8rcoMNtbt5hTpd6yvyAEPHVEmTJofGYb5CXP5nEFXtUDp3ZL",
  "key6": "6tMfmN8gL9fHNhozSVYHkdiegAkCRUPsBAJCB8bAynZnHF2EfSLS1G3GkvvLjgWowbGXwNPgaNFFtwSJKE7rsA1",
  "key7": "5Hkt1HgJmuVZcYe8H2VCoWWyKzZv7gKJXdH6b4xLDWHZwxh3enLNZK1hkdApEcFVUtLa5RzrCXZvMmAnHU78cTCR",
  "key8": "3AQcFS2HAbnUohcgpKrGJQEdWN1e3uNpizzoYUjmpAqUtAS3YwM1zqa9fgCoE6ybn7a9UrkgPE5pV1wnXks6qkTp",
  "key9": "4zNdUDNs2thBgRhR5Jz1yShZ9UtyNCh1FYjJ6ES1dFJLm3XW4oisHBZHndDbscCjpFG8BTHkn522mZtt7XetwuNA",
  "key10": "5MnLCD5L3BGFFKYq1Qz5wEeCZ8x7g11QDhk7BjWfEN2kAh4YP1g3AmvLpAa5BBCCPu7hiW7n4ScpuBzXfw4vkTFu",
  "key11": "2nKk12gKPVgpWoUxNg4r4qmHqBLECjnyGnrqdDnNVP9SDcsb6EVcp7m9V2bfPTBufsXHZpk6pFhwm25mACbwHqv7",
  "key12": "5eeNf4zwGer99yfoCwoYmpe875uMFRXiox5ttDuZj88yi8YPi2qeouFrXEoQCrPxA7adgGPitixsQKse5bBTehnt",
  "key13": "54YvBULBr1hFaMHaXxVTgxZhHXaMtsToJKsweQXzaTAo6zWoahQU713emMrcwwu39p4UmtBVGDDP7bnmShZ4riPn",
  "key14": "RoMSbXCe3SWucBiVcWKsvbGqMHbjiEiA1cJWC3HYtdpZG63fqe5j13fSuXujXRvGpjyPWf4EU7iJ54N74UvYecu",
  "key15": "4KYCKosu2CscAWsw3ft2KPeAJm9scyZYBCogBfZETFmzi6JT1za56yk9hCa9TDbb6bhsWPcokNpiCfAGhJh16ZBo",
  "key16": "UFt3w3xJJ6eySeez8eY5mV56By4FxyEUQGwNSxn9tXa7NWWdgB4DDJ3BFxF6fnYCnjDjXAw9Y5oR6Aw8u6rAnXU",
  "key17": "2aYhb5A1MtWmP1r5MfgwvtgqZVPSzs1HSe6xcZxpc3uRnDi6DPp74XoDn5mRU3JjEFKcJMgGg3Zi5ca251AVfyVc",
  "key18": "jQZKVxbhFep4rkdaug9TbzF4okRhyEEtyDR9bCNNHaQHN2dEBFicK1sxic87yF29wawmdzY2uPSt7ePSY7UFb74",
  "key19": "3jeqKv6Q6KCUYusY99iGi4QSZdq7hvfLKYQdP9Vyz6YPutvCgYC1CKxefCPJLDRespVqgbFQF8wXNTR3wuwGtU5z",
  "key20": "124Q4sbUQneyeQEQhPTSjKZGjP1eyyxWWoidp3dZXiWPquYcEyUhkV6P4wLomqidSstksQsUrbdwA7moboXUrYKM",
  "key21": "RpcKoTWK2joEdNdULrRcscuKk7maqivkb5CbvQW5Nwigj23nz1pYP8kYjAh7f2b8wFJnmqfKHBxnRAhG216m5gQ",
  "key22": "4sgTxXkDxmcyTtEc84b87hZig52sFskcxGC25mRkbsrHf3CcBh9A7KxvaUrXYGiryTrPUUT9Vi1MznQWv3Vk1e9T",
  "key23": "5wFyYSMsgu9VFWLMTj89tbxAD2ce7KVuoqr2YzUKd5vFdd7a5jtKVk1RNFrbBL6XDUq2ApyTAhs6TvHcKo3MHkbQ",
  "key24": "2F9fonRNZWDgxHC3zc66zeSSwjLmbQR6obokz2FGP5WxqQjWvDMtSTCweC3BUATCe3ukx7ctrdHDU3Tpb8aFyYcC",
  "key25": "3ieh52sKgZVPK3SX4PEAJchRkix9hACNaqJCMAv14btgBeJw1rLwuuLbHBnw3RdvVJEHmd5TDUFnzN85TVEuL85F",
  "key26": "2gY299HNeYV9d7N4rYhaBhn761j1avUz2qFrEVAu4eR4QFgoxZRKejf3Ng69L8M74euVcPC5EBjJ5Mi5N9fYMQE1",
  "key27": "3V4CQ3XXqSNVLQEhLGesYad7LwSDRoe1rDBsZCaYNbs4kUkAcvARRwzPnNd1F4d2atNCe9QQkYTdYfvMDcB76pAY",
  "key28": "pJqdesykxiYjkrGTYSXwyV3HNVzBw4oiUYcUxw3SpUDwua24T8iiprLnfUdkfZi9mh2hBWqwouA6kEzeXEVDaHv",
  "key29": "51JKxCC1713wmjQht2ZMYJ97UM5ufncStxMCi8KSgtMPrKQZUjE82xAtBuJLbBHWzoocqKrVoiFANP3bPExc1pGg",
  "key30": "2efEuWxMPyTZeo99wfwxf1MBWdm8H7xxVgQ62TmhPDNyKR1WztLr9929sMajJ7hWmkLUHZhpyVkD72sGckuQLMh2",
  "key31": "537S3DK9XL23yqDQZt8NPHk6a2UNcmKHMwKL5ovVsWsw4SVEtEXvG3sQuS1nmZQm9HpuCunRjRZs3rFZVq6XPRzP",
  "key32": "4qFJYWSdW9wCiGFQCGL52aTskxNs1WXTVgV2BHGp65b9x2Rzh8yUuhe9offeH5sb4Cn4z6VR4gw9LH8BxPjTqFsd",
  "key33": "2V3hw3a5yP82pBPYGPAFMUXgC3tWNkQoASijqoiVbx8atmfekBimP962ZZNCLZZSoQ6oVZjAQFkc3895GfT49szT",
  "key34": "2b6bRaiT3C8tKKXMp556gFittpQoA2LGAydsG4Hb4Xi18kgFrZrHAyvoqW4kVC6NhuBpH5eqxakLCoQLRGVRRVkK",
  "key35": "2qQSHaiMf7appTvNmKGvaXdAfaaVJSFJrwLVbLqBredpRp3u4Ezh892buLiWF6kJa5HY7k3Fe5k91DyHHCaLPEAx",
  "key36": "5R9TRzrvZuedCnbPpVwPf5euSca7FR2wsoZATLLDddXF5jdzsESj4vXVXEVdCwT91ZtEVa28yjn2J39vnqLwfVVd",
  "key37": "64UHhpkFxYUnNcehkun6NojNuauuXpCQS1P73gGupsQH4XjDEZXwsf8hZEESXVVge3BBKcVekpKEWqadRgw9qsCB",
  "key38": "3bws5fNGjTg8m56kNdS5cbMUum9c7bqKWknHr1XNDv3ysDefSyWL2LEhsPn1bBhtjBkjBE97muqSzWGiCNgAG2mr"
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
