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
    "4MXqB7BLud8ARADwVaKuuLaDeAyLuzdNh9gFfEvyqZhs3iXB7QpmmCRUngnHDGXqoeVQyCMMX6cmrCWDFnuRgTnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rn7w4QfRNnDsV8SxzUTBDx3TvPfy9keCxWRp48zDUbdyWQ2yPJV8EAJnMmCzNTMnERWGXMw5SiE5hq2vhPC9bWJ",
  "key1": "3HEvNhH8vYbtBr9Ci7svjs2NDui8t71UsJA21t9J6C4nFZRdunr7FafKvxEoEwYZ6kQGxVJM3NBxEPux7H63YMXV",
  "key2": "2PPViErSAqvtWEata6gPY5PDuH6Wo1om3X45pSx7JPXpNWFcMYw5iSAiDcExQAbXWmytjS8oLUMYNAWQpuoh8Noh",
  "key3": "4pQpMWkwRqFAN6PY7FcQtDKV4jQ2T4sQcDEjhBDRFS2aCaid3cYZjV3oMj26zHgZxGqxUa6Ec7qbh2KgvVAeu4JY",
  "key4": "FmiLsJdFZb6fRSnccMzp5mtD7HEkxLDATmyCQ5642yZRb9bvudUnDiNsLn1k5SX1LyafaWzERDTkkXCfPNxfxJC",
  "key5": "2eBrKjEu6Ro3NRcv8yVrVtKd7ytrv9CydU6LJ3KRvet1Mi3dq1xwnRGhP9WM6QpwMpwdMTWvTc1X8PkGdeiTwbaY",
  "key6": "3GmEzgPnY3ffvZ1DcZtuwC3jAK7hVNbWgZuM5ptZLr7X4eSSScUFNwZh25PXR79chwssj4ByRQDce7HRstfoRFJY",
  "key7": "58yqtzPSiQGwvTuosTgWtnVEJtUuZwFeYQbY1hwLyXwN6eRbTXAmmQCWwRyEt1DshoPwvGBBoukJCW1KJFNAricz",
  "key8": "dqMRmQ1VwQ2xrZVWh5JsiqJbrPR483gH6SCGRqHqzAj3yYUpSYAiDivnzLgGhPMFJ5jMQopkLi5o2HwTTChE2q7",
  "key9": "4xsEf72JrNEJFHZNUBMg718FgYhFpVEnVSrp67muhcvPHoTNUXojLGe1FZi5AGuPjG2GUZqgQYDZyDmHBVsaBW79",
  "key10": "2eNqXk1vxpnpWgUCDvK8XcRoZc7Jnif8SVtgTQx1M9dG3BiU9a2FGiR2dUVxpGQCNDfzBz77SFPYB87w1tc2YG53",
  "key11": "5EFSfr1ycUUr7Rhj5LQ8h92EpexicoA3Z2C8aGUt4PJNxdnCqfs9czW7MtE9zYtdD3yxjY7kYvTdxvJ9NfAi72tE",
  "key12": "2Crmpxm4g7DZnUXBsrfMTuYK6xd8x9yAAkGkMJysGXfcxSTsro79HzhvUKQwexeDiUpybvCXFRwwz2Z9pCsaHyXa",
  "key13": "4chzb1iSJyM3Bk3Cud5A7ApmJnwyL6tAAGE8g8oiGz6ozkrdGmNmNDwRRQkXfkp7Hr4kv6zoFf4cv7QCejRaTKup",
  "key14": "3TBtsJLJswtPDpzphAaToZvZ7qDFh1LidqtWNhhUH947BWZHMgRd2MdGM2BbA52mjGyYu67gZpHVgD8xQZn17j5Q",
  "key15": "4kGax7SsfHKKo9M7pKZDKc3KjyEDjQRpA7qVhqgGM82tfGtwbAGHeLJUFF3FJwzS17joUuYeaJGWj1C1FZB4wPTC",
  "key16": "2ANjLNxeiEmHH8rR4FoGuov81JS3xXdSySrUMmvvwBFk1pqeNRRYT7bMSCWUJ8S7Jbix5jZoYmePTMgARmc94yaC",
  "key17": "pnmFe5C9xFcHePGaCn3o7NzM5KpyvsPc3dzTVmBLoZE1BwDNVXmSrh2dD7bNrFFyqsn62q2b6s9rsxm1asCk7fr",
  "key18": "48wmhovGjkBXBHLrDheSfeTxcXWdPoXpixADPdsmQNWghbdpitQoJnqHTW4itbGG4qjVzgoAjk4L1XrhA4CucQ2S",
  "key19": "SD8CFpPXnfVtrpUqD2vvJxwany5H4F73NGYRvJupQFJL4TFFnvc8uZbw7jD3dm3fsdnKoZNFvuw9h6SUA8FYxYk",
  "key20": "4sDj2QLMArNrA19mAN8U5vvLRTBttxhuRCeUpE7vzPifoMoqKv3zKjxVyeZfWktpKCQd2LkzEgx5BapVp3ipqfwU",
  "key21": "2tVYcv81SHP3dLgojWTiKaNJ1DQHa1EhaYKv3Wm51fEyCyRS5mJfTADWWsT7MbSFQcbCGQwn8VoknL2qtpr56vHj",
  "key22": "2VCPL1fPayR3XvGueGG6TH4fphYe7s46M5Pga4TZNtVJMNiaNjg2uTa5e8emNdW6hhbdAn8XwHsV8PJvh6CR5ftG",
  "key23": "4hVzTU6tCJRQt1zCnGJtfxfThQJxRCqKzfVDpsifu5Uq1yVVDvPJUiSx9aGhwkdkkP3BtAmYcXkrMmRyFixH4Em",
  "key24": "4opkwWxCXFkQ3xvct3LboZxE7ZCyFyzYV6d1Cs4Wk3Dk9Aa9qjhoGVPnmmC4im9tHeVk6gbudS3uDZJ49FYzfLYd",
  "key25": "34Eqh4LwYCrDTCfaWmdFLUPu8XHeswm8guM6XsrVoEPAs4Wi2jCMdDBeY1NeBgRbrRTeDukRJvkHmqUBjeZM9ZXc",
  "key26": "Fysi3qFvTMyC3R4Ng5jegBKZt4XaNThdQjeq66DutQnBBfn7x6vaW83PPsPJAprH8KytJnCJnsTBsXSL99e7SWT",
  "key27": "8ANrH7nadhhYXrXPTdfFEYqWXRcqQGufPEkuHUGqGxeovTsQ2j8VkvSRpKDTq3wuaTwvkw7bb958auMJVi97xzZ",
  "key28": "3FJBDKxTcHQfucfLqWo4x1yD4KouDpC5v1LZnBX6ZVrufK7b7nMHWubr5PAiAVWtDMfFRGPxGwSnNX4B2wdGZUuA",
  "key29": "3aDw3e9uDA3A6Q2pm8bXP9CPJnJf78FWeRJ3bLVtjer2i6b9eLX9Lsr2wWFQCC3RuydGCCp5E2fZfwWbs1brPNSw",
  "key30": "5TaZLVnPYuZmYZwF5iGCntpqwGsr3YstmwyB6vpR9RoUjAdWhZ4rq93DVF2JSVeBXb67k4vrZ1oH8yTuUwxTsqh6",
  "key31": "34R7KVAj67yu2qTyNrHuJ9ZSBMvhpt63W4C4DcyCeDfJJCWMcoTkTLkrTS3s4bBGUL9i1r8HrLYzgC3RDbornhkD",
  "key32": "23nX7eg1d8nCBmVq3SP9rwP4WhxjYitE2JaViB2iYwt4gr9eQ6p3h139bUe1NQUFMGvFbXHU3CG1PYChus4cie2W",
  "key33": "5Pe1QBuPGHw7en3JAb6Ns8W9N6NW2UgpXVtupyFZfR26ZHmWXNESyKXBBXJ6XvgVKCgoMczQ3wiigj5w3Gr6QaR2",
  "key34": "4S6uDgPAkFbo8QDqETzDbZsyMLpjTQ7pvT1ZZTcyzGE7VK36jPRMTSKWCXQtrU1qHMn4GgQgoNtX425eCqfuWrRr",
  "key35": "3gpXqcmmF2tKvQLx2dtgALE1JAVQ1gFRfXzJDwFWWRauLaXSARkDEgj7WNSBksRjGpy9gRV4vKRiM5mLNcEVqcxS",
  "key36": "499Zv29EPAdThWWQQKcU2rACtZkAn4rzi2jtPizb5Dwn69xngnYq2YQwe9y7izsaMziG8tY5vap1SMAY4EhdSac2",
  "key37": "5PH9irmAYqJkYLFZQ8jMWMuYWKRKopkxo7dJU8qbbiSj5vhrjDugFm1VeEzfZ9AefpHTQ8NB3Kn4vLTVRWS1eaHa",
  "key38": "3nUSv1oErR3UpzESsJJJ3zqNqPFDqsj7gEARvmZKA1EFatrRAEzbp98Pi8q6s6QiVQSdB1AR9vwXTz96SmAEm71a",
  "key39": "598qCnDH4hL2jEPBpn8sx25JwhxYSpmCkMAnGaXcoGAW9aGP9mmJES8YeUVJXDyJm5QX6eAtKWYCTsY5PTQ6QHcS",
  "key40": "5ZNtVb99xvSJfj7ZWRziTfdZPpuuGh8oa3ajhWjq5RLegcCho3eKVMd79xGHwf2Z7roLNvbTUvDDLWbDrFHE5AXU",
  "key41": "Bwewwc6q2AtUo8KkVKMzyxdLDVPi7butR86daid1c9y3NeAikTDQoQgnnjkipfUiYmfhxDR9xTby3f1LPG9PSzd"
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
