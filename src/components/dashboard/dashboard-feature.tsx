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
    "4pfw4J3sWiHL8Z8xsqSfedN9E4TJuSpJYEQsejeSqupvWadN4Ahc2SuSN4p19qCrbqPh3h6GxaEhAiAYH1gQTR7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xonfETLCK2eJ2KgAbfiHL6VUXyMfhTg8j6Whczq63cExu1YaqYMhkymoZ9Qigadm6D64G5T82324xqTmBvUHmkH",
  "key1": "3GEC1BhV5fLh9mEJP2QCEQXWs6Uo2ZkWcMG5zf85aQDktq5BZbEJbiX4sWfSiyZcdr9emcb6t2dDxgHq1wgfsSFj",
  "key2": "4KUTHgux4EEonv86MczkJmumAsJw3BKvcQzkNmGG8Bc3xuB5iu6WZZsX2v8sWcZWzUjamiKDmNnDAfLvYH84bPnR",
  "key3": "3dsnn5wPYcGJdCvePi3LbzzzPpyPCqPeK77eYUHsSEvbtvMHoqV9mi28fmSnzWMGEB4nyfEXaqwYMJhUp7sYQAdA",
  "key4": "4pYJt9KZnEy5LBFbN8PfdxVHPpat6hvLX8YMxKV4x1cMhLaw3Fknnj1Z3xNM7KdAqw5DXpusJ24X1kyDCe6bR9tH",
  "key5": "3Qof72MNki9cpBbkvrshJT2frtaGhpjCxhJ94ZdRTtYbh2AuKWppGwad6uJp3WMxFGXXYVFoWkK9EwA89YGzJFPT",
  "key6": "3ahazskhHYvUW2ffnJCw9VrLx87jpa18UJP7uadsaRKMEhMB4iDeRTn6CxDpfiAsPTL1X2aujqWmebDzskmu18wN",
  "key7": "3Y7fX91Vq2L1hS7rYZD4jD6Ygc3yFEZx2Vn2dzdz7vMNSho1Tc4HFA28Y7rGScb3vqZ3Ku3x7aFkWs4D9MD1Qw6w",
  "key8": "59SQqf3mXP7yGELX9A5WMSvTmXnQXfDNiDiw19mnQmCucUreqQaAqiZFG6sRZF6ukAzfrpf3Ee2v5t4Geu23AACr",
  "key9": "5c7UGpArpCGxHo9ogAb7NpL2rYVsktK4JFXt7waa5kYvJKCiRJAw2GW83r5s5Z4PWzBpzeSj94QpC667YBWaR5uw",
  "key10": "3SUQYWoQ6TAd7NdQeEWaQCNVjEzQYwjtK1ZyV3JC1Xp6Gd3DwVpcJcDqGkEz6SaRLcWzHvmdYH7XZRCgYmpRCY9b",
  "key11": "5u1CW9NYAA61k6vHGufgZtAWv3rbRhZWwNPqZMpVEtHJ9YxnedLDnYSHMLTCr7Bq3Yrq6hJSVxh4undaCFTbVagi",
  "key12": "41aaoNE5c5Ctpnjrxn4k15PBq97Fgc97DPhzKSVpzLkFQuPFY7ZvTbweRSi4iEoBiUcvDyGDGaiAMQXxr2PV3kpA",
  "key13": "4dKzizvpo8nTvcYtoVubTkvxvkJomd3jRQC37wZkxSSzhoNHdk8FPpC1EpdNzb7Rex674ng7ewUW3r99sAsUA4hi",
  "key14": "4gpYZUt6ZQ5voa1H9eyDVCH9F8CEsH2mkgnsm3nLVVZ7Q6i1GfZYpioJteYnZbD59f3R7vDiYEUhpn5diYbkda5f",
  "key15": "FQZ6aGpku4wEaS4iFiUhMWtSeCQCnGunMp8CidDgkQrwGsJ8gPGcJ5VX11qS9qGaWYhdkJCg1GEzTyiDuhbAS9e",
  "key16": "5G5PfiAZGiX6gpb9eagD1g8mH6i9upCuHsVk7ixAcQKuXt47ypLy9SF2LEW8NFxGxaaPAPM9uHw73mM14CCy5zaa",
  "key17": "5n15325EFUYkw8yYziKzkL8mWUCgvZyb9M6S4vqpdGjW19smWxJZEryf7SDKZLYZfCYpGNuvPU7yF3BAxVwmbgKG",
  "key18": "53pgHFuR8k5ieeD6XMEW9WNWc2w5YJN2K933jgG8SLubDjNpFRsv9n4RVX584RxxssgaZhYMr3iivhwHKj7SgYR8",
  "key19": "ZJAtwDRPSqT8uNm2Aj6RoVEQju1qz2cvR93RCvRLhnPXyzcKXWjfXbmz79uRZcEpr6Uqt62hZKxvCqyYxQ9q6qN",
  "key20": "3d27kZQ5cvccUX3ZBSZ5iBCeKqwLuxSSbqrvpkWQ9Xmozo9szZAT42oDsWK8YaZBAsF7mrd4rwULf4NLjPs9J2pc",
  "key21": "3cmwUxQqMepmFNeKrU4LpVcZzWvnhvpaHzBiJr6GwQkbSJyeKkUgW6Zwa3v9npST1CpTb3YSvFEvEePogPY6nGuG",
  "key22": "2UGXX2Maqx1ELaWNW4qeNfsLPy2saebXnenVAtUS7pqW53UAbcX9vnF3ZWLppb3bfW74tXskbxJZg7ZkRuyGqzoa",
  "key23": "53yKeeLoMFGvk1hD5rw821DAV2ohg4L8xLn9YL24uTvwyC3ABxupsTnwLa2Hs2VYxHB6Lwga6QLoDrQtbFCqpDgK",
  "key24": "2Cu2JMih3hVo7dfQpcfBJmUCno9QvFvbAwexBaKiCtNCR7CTCwJVe3FrT9ojnfz6YZ2Hy8Z6uMAkBGaxaJbNSEju",
  "key25": "23xx68HpkL2z1QEZobdDfTMwWrpNubu3UvZ6EJgxTMsywRjETS3DSnSWpSnBYY9Q7pCp979xDGh4YFEAXvUs3wEL",
  "key26": "2ky63Fz4Aby8VGJaN8ivgiYsKjcee7zcKYVB2DfsGbsrEPFPQ9Wkz9icMdnEkeoCL8o7TJ56GmZGDVhn9hYY86r3",
  "key27": "4yoLWyfR6xscxWgFfyGaKvbaRMPxwq1WQCWntDUpCGHrzboyYif1qjzkika7bJpcRkYJXP9bWbfgQNMqQb9DH6vi",
  "key28": "5nzPrK2GYy9fnAZ7FdJ8dWxWbGQS3kQgNTWhfbMnyyDiz47XuN8sJQB3o97XtAGSZZ3y49HDpZmNvbE3gY8SWkR8",
  "key29": "SgA83v3x3rimrVWbWBx1podkC6aAETSW9tTeccc6Pr3tyoA79SFVNUWdcw1jpt2PhTCdA7R5mTPtnwEXeXc4bEv",
  "key30": "4EGMXmkM6x8RCeCqeCvT6dyq794tLuFzfQUGsYRKF6Uq7VQwkCjDJrVroNQbjSBZhn7RQqjNKgtdPXu543q78hrU",
  "key31": "3ioA7m5kniyDq3YpRBowL222oMLbemvn9xTGByJGyGHU7oux4tJvp4sBHPdgtq3p4iuCSCb3YnPXvYeMXp19PLn5",
  "key32": "5jbzGu9RpJ1JxRVwQ4ynjBsFvoLnDnJKCtS8xM8Hf11SQdYk46HuPZRz8rEuZpdPUtwLSYwXEj7jmv2AZkHvPDzF",
  "key33": "3G3BzUcUwZ2186gYwFehCiXp9MeJ2NAUz1u44X7mQPbqxEgkcoJyP2FS3ruJ7QQ32Tr53RYXqBuNtFpFKVG4PXpz",
  "key34": "3xDaCrCVWFxkUG9x8x5mdx4XnwqjF8jZpFY5RPjRZXDqU2ZEnQ6YDtYyCoVaVepFJCX4JnnaYLNpx62cntyrUJYD",
  "key35": "GbUYbaXWveHsT1L5iqjF7xH41V5Xp2Gubm3f58VE2zieaz6Won5MrPTDieP4wHkx1kPHLCy4tBFH9nmWf1qP19U",
  "key36": "vCSYxKtgDoQJW59hqPEm6aKyk9LGNizqTXT1DA1TtzsWZ6wqMQPgWXKMKDYQKsPLC1kUgtpZ7AjDXURjPFivbgy",
  "key37": "2iatoinHcwGoKf4xYzZpu8HKAsTekZSHnUc5cPAthBymWvgSQ7MjN9JMTqH5dT2VyHaJVMy7xwacxV9jo4ajvbfn",
  "key38": "2nJvwYyKXDF7PND14EL3XYN1n3ktJ2NUdNHJY5i8p5jqq9arxSJr7nP31HHKszBqWwjn38kmKdo9ATh2Cn36oWkM",
  "key39": "5X1v5y3y8oYUnGP4uRutw8fBmqFseQ8GuRNQUCg6bTF8Y6Jf3xdmiQe2FEtjtNfLKi1WEzt3ZsAx9MgLmjNFhihv",
  "key40": "4jbN6qhjqMxLDAfFrpFYwhxTts6KLgRvV4LLsbuJWyH6w2DCxtME6ygocFrvAjYeYAym1z775kqhxGyCq3fmuKNh",
  "key41": "265yEgRD7fcvHdS1Pi132bxGeESvgq92MZaE7uvGJV7xcdKSanQPE4E4HQUj7et2Qag3kg85d8vhvA2dAWVn53RW",
  "key42": "2NTjk2jsx7GcG2suLvsdhopEyyeCyc9bM3eh4tX39sp9eA1EA8bq9Gd3vdLyvE4xJ8F9DmK365myg5sP7goV77Qm",
  "key43": "5c6vWezdBHuFNFSRMVCAQ6fGXP2hEMNCV5SLvPTzFifMKiRWBQgwH3GatPVnaq1GWLiwnSzTJpjLPKzyeAtrp6c9"
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
