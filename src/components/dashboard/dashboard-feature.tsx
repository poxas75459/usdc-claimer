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
    "RmqqpRJAQx2CUEtRvFKBvDoWmdn2LYjyaHot6dHDvjBWGtgTY6gCjGRtyXaFzLsnKUphG7FaddtHkT59ToSvmgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4AoJT4vBVocKVzNbq3utYrFFXkbph68nBgHyfDij4yZzY25aJvN8k66JMteJwqoCGrWwLgvdGU7GVMiGFBSbpJ",
  "key1": "4n24rgsbFJrT3YtJ3eq7dFnQaJcEDbHSUWfYJWyRhcL8EPUaRb6pqW29vDnyocemSbgj3ZUuESRWFDunfan6Wqt1",
  "key2": "3LK21u5aJoB4BU649AX1Z2p4gSPeZ2eGf1wL2ChM4KtHcLmRVSQ1Z97UQCHNeFyCsC3pZ1TpQ2SgeSBPJn8QYxi3",
  "key3": "4JvCABH3crSt9sq5jsMCajTvvJSLubH323Qb8koNe3xAChqn6qbgBi9em39jnxx7xG7gi2R6We74F3yJwvT4D73K",
  "key4": "2dcnKq8w3gmRbZEkJbE51X1MhCNVngF5hoxkQ4groixmDtHFQVEDSm1Xwhx5XNfg4mQScwQkQpVUDDsejS9p1Ayd",
  "key5": "5onciQqLginbcTxg2doBzr6CHTDtqtzYB6rBQwaYJTmKAKq1V6eRQTzjxVa1f2WXJ6GxuFECGwRi8BHRp6FrCPqJ",
  "key6": "4qzakDkRKfhW2FtL4jrYzCMqT8843zkypE4zPmYiDogauGKfB6fbFWvJk1sJXETQgwaTCNKcSnPfTb9379NwCGxb",
  "key7": "2tP5XVcLcdURM1hzyyqC2eYMmNX84gicMuhZktoqoopu3L8e14H8UZqsEGyni8XSiNDHWmxPfH748VQxqyX2D5gk",
  "key8": "2bw8tRaStpxEcVV1ADvPhU5fEY3PrwzNAWZ2rp9o3rkBo954kvvZ4bFCYENtAyyMpCto9Hn571k77aVc9KnmKxmP",
  "key9": "61q3q8A8MUhHA6Q1WYEQcx3xRAt2cXzgTcDEUxmj6t16jaXP3sfJzvfvtpCFrQuVsbQUaVoWUHf2KekEyQ2qhVWW",
  "key10": "4ewodjzAwJibDGmaXtTZDKnRMsT2jfCJrNMWEzorAhLyF5o2hN9KBZvzYazaxrL5dBrzga9mkoyKxEBsrV2TXRc1",
  "key11": "3VH1xM5dnFvSzuJSzHE8pUt6qjp7UHyQnMJJmw3bQKFrt3nR2Krav2pDQ2momUEZaPyJn8p9W2URysJj4MCkkwCm",
  "key12": "3TVhoP3jWjqK6e123hEW6dgd3YEkDmXDCgLy8LPxadWrcHJma9oGUvhRLtLrUkN95cNJXDK9DnGqpiLARrFyAQBR",
  "key13": "2YheQrnFtkwZtA3Ah22NEB48Lw6SD48VqxRZHthKhXfy1dVbwk38Zrr9uCfAdkcTcF2e8WFxigxDr4W3wcPi8PkZ",
  "key14": "4yLqjhyPuf2GN4KWSLjGfso3bgVKsdpWYJjNHMYAmKBdFJdTQi77Pw6erkzYdxSwogjaGesQiBWu7XHsnJcemLyV",
  "key15": "2Kqf7XUGQu4V4ZVPqAhSyhCNc83bYzAq2grmZjw8voKSB7C2UoLTLGqiUxv8ju9u83P4xm3nz9ojyMiM7S5oooFV",
  "key16": "31JPKEnnSkmhoMojm5JtAPrjVqmFZKdDR2LSNmZrugneKeTn6bXAgEddaqvbqtQL1aVr8FMyzARm8M8gjsprwwjE",
  "key17": "45Ab3W1qnK6e4eMnevcoWH41XAmme4pPo2toffddpVioAiN2UpLc4hzAZFabg1uvec9vpcq5SBnLJT8uFe1NQ4tZ",
  "key18": "3wXDCjdZFDLZVJvL6SDPke5P9pkE5ER462bAKJAQA3TAQNkCW8V2n6WRiErgaadFwDTdxA5coqJ2pDPjpvteTh1E",
  "key19": "4MxD8K2pCDzkjenM1osZQ7ZAiw8gNsNJSLZAiFrqbCUCBBShcVKof2d6Z1fLr11oQ6BtiBYwrskThHRXzopFvqaH",
  "key20": "5bsHUyzzNKdobq8haoihWxJp2JrUDjK3P4y6Vs14VgVDGSZ5uqdXCL68RmiHFd5cgbiE43p1Ze8gMLbtqeXH6VfJ",
  "key21": "6NRmBbTpDGVTMaZwBDjfTsa2ryRjFEJf6ajJhnRG9uRY1XdxrKsD81SAaypRi8A9SvgNAjhg95p7x1dhkcrf5tR",
  "key22": "3AnDz9Qt7wzRKUXndJdZhPmL9x7wPWu3xvYYDBr4esPdif32Yiib5miSJeHWyJt5vToM54coMSCRuMmqRMg6HjEc",
  "key23": "39xKfvaf2L1FLdXx9vgoPopcjgUWRYgzu6xetAotcLTZm4ebadQ7Xgz82FjvNh5Ak2TdDeguStXPQ6BENd2tL2nE",
  "key24": "56hkVUWiNpJMHx1Q1SneYoXdvXfbyUNvqBVfUCk4tsfBsimrikz6ap9Gzq7qT94A7pV9oPfwsT6rsjJhDWtPwu6p",
  "key25": "43PFpgCjJtGSSB54SPdte76bAGSJNDNA1skWfowF5s5n26adyPsvtCKBjU751bSzTvPqXExA2o476WRgfz9tZgyb",
  "key26": "4SFgw2gd6TinY3YyRiHdGTsoDosJk5BAwZ9cSBAEeLVN1EJ45sCZcBcEJqJn35ZJK7L5meVbMoF7WMYPnvUowDoz",
  "key27": "4ByYhR5xDS8quvPdZRMiZdxVZMP92m3KbxMn7QHjJ95yARMd2nzj3rcLijmgSFBeASuQY8TZZZpCgfmPLvojxLiL",
  "key28": "4H9tBtzxgrByrqBcbZ2z9j5XK4QxNJiHWWtz2f5dr5oKHcaf8KQqBTByDbUWUj5DM7dAfk69p98Tb2isuBcAHxch",
  "key29": "26r3twvqcjukdFe6SWVqqAvcQDDwarFsZDb2cyJKQ3ESMwGKcPxLaZHV2TPqzaVmFEdAE8wioLHisj8E8kBUY9hZ",
  "key30": "3KzAW8HV6CuXGH9pTf57JmZpXb8edPapdtQYSwuHN4X3vEZzQbso5BXFgWT9Wqv1VyyEar6joxW1TojwfZWvbVzZ",
  "key31": "5hQtDukC9X4iJqwN9kyu9gZ3LfWFBXePFw2f93knyEZ1DwsoJaUsgEmvzzChm18updXFG1xYJkvEhaWSGt1tBKSs",
  "key32": "5rMcP8eZaDXccey7rWK37QNtDunpM5AuMDqLeQjTcW6LsrpsZfamNNDDQaNQ96RYuRwiBn9etZwFFdHWtVrJnbKw",
  "key33": "5ydH5zUHksXnUSKZdpQ5zzwwVfS2zMvi4UQxbA3kdUAfvwJSM3yTiokpMRHmQTuWBcABiLaQHGEpVLx4rXkK3rtu",
  "key34": "34xFsajZZyLhppm6hD9ieVX6jTGUkyN9W9dGAwBdxjudpixg6MtEzZwDxAxyZkiJvARH2YWnKcb4kq7eQBwWmBhF",
  "key35": "4PbRHTQNVj3J4YdioE5qS2Xcm3gMjq9EYT7W8VtBmbeN6P9ck3A9whQjeqB8KqHvmXTCrsp9FsCbxtNnz2Q7PXwx",
  "key36": "4XuSdwaPqt2hi8wRAVdrTmxeL5Usi2EzNnGmMa2RgN7q7RXJK3Kuae6ydCxNGbviXEZ94CDnhWemjeALJ9uQfccL",
  "key37": "5dXjzotgJwaHwpcB8VawJEPGMDc9ksEAnhdpkae28EG3E8LwKeZ2KHfAyMarhsbtgpkHWTYMcijrMiVksvur6Xu2",
  "key38": "3DoEjFeFHH9464DNi27VLAonUi7yLVmp3198G3BsKcamUkofu8YVHL4WZwbGp2nuBdA1oYT1oDbxK6rQNjjDP2y6",
  "key39": "57PZg7pye51JfZ7PvvjnSCBzQuPuXvkKMCdoA1EjJasZ7vCfXBUFkWB9UxnJJX5FiDBb9iRCGh96mfU2KNdbePWw",
  "key40": "5BKVcHBMWRNVQfYSsaaeEU4Bacy9VD15nE4bgrteYKfiG92EkHNLEh1jv3w83CSUsGWHL7JXfkLTPbpGpEPptd6X",
  "key41": "5zgUFZL6RA5EsspU8BXzLta6VjXce5s3JVQnX9Q5T9iRn5wydRxdqRB9SF1Yd1db3sbtQSWSyufEjrsUJJi66f8H",
  "key42": "3BM15RWqDaQ9SqhE9bFHdKEUrT27ukyB1kcdsSgKhtpxfTV35m6dAqvV52uPAkv4RQ5ectpeu6MKi116NGvDhFBx",
  "key43": "2ipDk7mjLFdFezMqh62DKYZE8KqwG1Q3RWaCMyvbRpbsAxCH1quaUrZpomjL5ttcAz1rvAGXmLFHphNEeLDM2jKF",
  "key44": "xovawGkr2AUo1jvvDXisuSs57TWsukY1GLsWph2dK2VShu9N4wzZK6grh77f4ZRo1ow1ZuABiEfSc3jgaSLLvzz",
  "key45": "ojNtcMES4GbVeiMuzfgu48iehrKV3vf8Ynh3dqGZ6yMybjqfiiCbqQwVLcmPE5mJMNFByFfKNaEb7vfvXPgqUaN",
  "key46": "36p1PeqjJnVmzoDjp6DzGgg9g33aZuU3UiP65XiiwNAdFaATeYZhdxm6dbcXQKk6MaryAK4jBf3GhZHae444pSUC",
  "key47": "4XevhpPufSePi2Mq3rU2f6KXByC1xSrdmBcEgWDFEZXGccaepYEDNQhtCSWtTWZGsLxNapkZBtsEagJm7riFLdno"
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
