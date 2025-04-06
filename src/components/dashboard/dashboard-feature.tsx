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
    "584q5rYFFi8jtkNPz5o9UbXrifNhjCLE84ah7AL8yLsnM6re5hRWcRDjUms5JvJgaBHT5AL11E9G98B3LgorZ9eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TbrmdGruWiFUMgNygfQM7anenGZMSuyXN3Gcb7soRPuw4BbVoyTTCg4pgYv4AcYJJ86ZTqahKDQwZF4ZapQa2hs",
  "key1": "2XMvyGKqghF4j1kmsTEa7PGEisk6jNh7oQBWKnA6uTK2Rb8go7svtcSTwFbF3fmJ1AoJT6E7ERFHWmovby8qDWfU",
  "key2": "fK8mszTX9beudEeN2y4VcHRsz2oCfriimDsDXZUV6hFFEkxtAidLf8xuTY9jmbjB8EpNW9tQSBSfW5UVM5N9fCB",
  "key3": "2Zeyh8qFd2LmzQsou8k1mfzzbUfYq2HTvuzUwoW8SE2CgrjdXVuSeW6WBZLt6p8Ckp1JUn7VwkHyMG9CqTwiTK6Q",
  "key4": "5CgWj9Tbi9ECjxreNYUF4Hm6J9sBvMvE5mjuc2zcvotKa8MYBZf1u4AD6CDWywPYpKi6UegfBjvdRDLzh7rX8Hfb",
  "key5": "2Y84d1PYSgVGiLpWiinoL4DBLzDF3vWBuizAK8C6c1FnXwVDh1ru6Bj6KHJQKrni1yXtpsAoQvVQbqq19ytY6Cy9",
  "key6": "3ccZWcwSJBbiuH6PTwEUaPpNCAXAwT9Qc94Ue1DWBQeLQvNFqvhNFJMDYXbgdjmJ8xbH1iS9NGCzE3kp42s49cd8",
  "key7": "yQ2W2Sv7XCx5Zx2Sogk2Xu6mSXyYtuHCxzwQrB2EPaSDZatNoxdN4irv7NbpD7dTSzcE29EpWMhkmDiCHTne4jL",
  "key8": "54T17x9zWyKcvUVeZXYTQy2s65oPS7Xnr7z8hnE95mjDKEbDEop3bh8eaZYYejRvhHkiecycjoYYBkjdWUdBdBcz",
  "key9": "21GvfXcUVo6AkiJvPto2jGwoxy4HvpBQ8PCBawYM2iagseokoUascd9333m8r3ZRZujc1tUeU6GMSsnNACWXTzRp",
  "key10": "5FNbice4QcdFde22dJHv6CG9ivVhFQsaKmtGibCAjDW6MiFMhBYuCXcZvWDtoBWQeRRM9rEqSqTyFTtiC3yxbkEf",
  "key11": "4fUQRzBVVr6Ya8qLUADmCMsSotaXNyFG63wwaAMfp6fLCJZpcUKJWjhD8SJtrXYQk7bu1hptrNbnTZ2dfeeNqCj2",
  "key12": "MrR2WvXJojcmscfVnPd2urSY2G4kqzF3YVmWANAJggUphVnJ6v57vtsHnpoWn55ED1UcTMivMKPsZiFnwVH7L7r",
  "key13": "2aEdTqEaDYXqJ7jXBTndUAR8t7HNvvdpizSh4n23DuVQfckHGLiL1NpueDZQV3oRTSmQJrfuRj6X13SiG3E3CS6x",
  "key14": "4xNGZTJQE2Wstgfw8VC28FnH9gfvjerxsrR3zTBjkcp2opU9LMsPBTJk8J3MXYBT2csLcAtygP8C1nicaTUXZAJs",
  "key15": "4YymFCgnYfcez2PA4KsyFDikD98xwSZUQVFPT2TVHc5ZsaqZp4poPjHDrFJAHhfM1XiefQUA89mvSj2qN1CrRTry",
  "key16": "3FHWovoZ2rbFC4iEWedLLhVwgYZ4igmDR1wmkgP8TDRePpd4Ji4okeeabyVxpMN9WUHPhDQJf7tib21XrZbXJS3H",
  "key17": "53Fh4f4zZL37tTzNCGwWR4mVNXKRptZ6v3mtDK4gauYyaiKBqAgtyKo2uU3emrzBD3aebk6B9TH6SQxNaHhFn8yH",
  "key18": "2Jp53UZpzNVJ9Etco6bwgPTA4WMEbbMcHfoc1gydA847p8qcLEwvyEZ38zfQoaAipuqGhj76BBL2KDzHEbfqEvPy",
  "key19": "5KNa7NsPVQakPLb47P8ZVbRiB22M3KCVHRJ4RZxTWzq5kx8s4gnjTWBuvoXsqPuQi2RtDuk92gfKRS32dLo3ThzX",
  "key20": "tocbu5v7Zh5eYnAzurBGLfnc5VCx929vToXPfjpapeqwbGFfRZgH4ekc8aWTq1dgaNEwBM8qHj8AViEiRo7GNnc",
  "key21": "28wYBApeL5314qqGoBhjmkWEpFAkA3krgDxCeihSJy7sHzT3bp2WaDsWe5SXnCp2bmX8rWNRfRZMtPWA9LsPjkCS",
  "key22": "2xBM3e66UX5QPHQwdEp4h1HwFBP8QbMFCg8RyQ9qN1FTqcHZkCfnDVppjkDsQdm8FKfb98iKZx7MvZfoRBsM86Y9",
  "key23": "43FLgmG8K4rR1bt4Xsix3MYcye2zeVH5Q43Q2mceUEzqTHyxi451VFc6JNsSLk3eKNxHphiKHeFVxdzGhCngBd4b",
  "key24": "4oTPhAW3riA4AhmvZSjZ8hUu8LTVstULwubxwNQPKNTrMBjgTWTwkGqmLc8PruUmV9pCfWLPKXKNYvfXnQutqxK4",
  "key25": "3AbGpWHU2txrmHwL54cwmLbwrbeuCtcvUdCmpqV4S39hc98wD696bzK8Xgi7RtN2Rq6zgb3URxmpp5eui5mNd4Vd",
  "key26": "2YTs6RS4mvGxKHdPFW8zzhuCcoKZwB9cPzJRdHtASYzM6vjdesiHsK2aN3H5s4VH2AWp4cvP3yAiHNoNBASx28LZ",
  "key27": "49rrbV6GHBGrsGVVTxD88cFrvHC6ErXEQg8qfCpKJ4Buj2aJcbzuJMdMuGLyRoMZiL85mX8ekMhtUzc9VvU6AyMm",
  "key28": "2DWuapat1aHTk8FFggmH9LQdtnycm4CwQj9KHrBjLfEA3sfr7y8EToMjBX1zXXEK3h3zE2HheCS3GSYmRDsgEXd7",
  "key29": "V6zfNAeC1A3hi75NqzSqJY6qHxFxVDHA4cvQK3GpJTnZqzmNSNGYEcf4aaeVSDFhzx8axXtXTbdAU1fmgGpqNdV",
  "key30": "2m9aj6jSzc8DZgBuieV3c3P5MneSN2YDb3dNMjHYEsdsbVdzKoCvrjeKvkAvXzfhMc97QDqNDe7NaG3Zx8iXP7Nw",
  "key31": "4RWbo5vsTiSKV9YoHR8YpDrxDjoVo3GCstD4MegeBHtdFf225j28c7cNA5rJui8AbHb4DYfV56v4Tjrf72vvB25W",
  "key32": "2WfLwXzcaGDj9S6YiFk81UqrveBBcxpVjYEDHqoxPGZ1a9uSRMLCrLBQZ2v9sDzG9mrp7dsy6y2gt967HmkB24B8",
  "key33": "TtRk249wrsCAqtbqngUxi1i5UQDSTpms8TV2PGLJN9cAeWjBJStiwYm2JRRQyPTYtGa8xxBG3nnxh6dPhA6XGdd",
  "key34": "4Km6rfrBqeDeuCgQsNNHeHM3SGjmiZtpWGCZBKgyRfSCJYL6tK2DdrETDAXCm3QF1KnuXTHrCAKQCpQA8dGUKNrx",
  "key35": "2ievB871YPXGhSwdyt1pivTRLtuecCLbGJUbeViirHJ8dNFJCNmqf7g8oVHHwbwRM8ShvwYGifLBsaNtGozHfRSk",
  "key36": "jhPwZFjy9bjPDvmf92jagGgy6rdi3qZA1cZ1zS7cJv1UsPcKjxhAhLPZegzkrvMEv3XFR3WAcSQK3cLAnV4k3Sw",
  "key37": "5G9bkXhNdgEWicx9wm2D3e4ZuBsLm3oiGqHn8Fn8xnJFSVkn7BuJGGYwTPd4zpmtubMEaeYF4UdwfAUuHYV1q9k3",
  "key38": "217UFKoj5gSMXSkVhQpFbY93u6YkTBXtQESymz9RCz5hhMC1VETWhw9Z3nvTBzfgagGS2YCBADXdFoYqVc6qrGqD",
  "key39": "5iqcPh5kDnJRSw2ESVJcFcPAJ3D5ZyzziARTcpADzgTNNVg11cJMhdw2av3WGoYPeZybsMJ6HG9waj3hpz3nc4Y9",
  "key40": "33z7wGAvbQ2UkK9UrFjhKjr1tKPDWHTRTRZpSi4YHnt8RoqfVvMFqQJ6fDQLMAh2h6592r6T7rCZPbuDNa4oFwe9",
  "key41": "4Wxt2WV95g6LapQg4679ZFp3FLD811uVeSvnKmFako8vSMSCDr4R6kcuY6yDsoaS5ja6ohC8AkD2aazHgYzk3sj2",
  "key42": "44ypvCPpPx1vALiMT7wH3pgB5ZyPEjzePFgU6WpW4rYbfDbxgmrisaSz53mT7djU8jWcky3Db6dWaBmtDaC1nN3b",
  "key43": "27PrQdHhvRrjtDsf6PGszQdQKVKYWk5WgVnUcRrevM4p7ELrVC12VqDycE7QCZENocpptXhSQCR3mY5cpkjuVNoZ",
  "key44": "2hE8buh5H13R5XnwQoPkNLDttwFVXUtH3KNNX4JaR5FCB7bwuqPudsSLhb1fn1Ea8DSyJBo7kmBMZtFNxAyfAcTy",
  "key45": "3xX3GqP2XHS1Ck5SB6t3fnLSi51h6pALaXanxwMrMBadX4VsHju6eyQdBAZaBRAUNZ7ceAXYH7VmY6kYRmGdR8nf",
  "key46": "dg8WcmqhVTNBsoeLrRQGqiTuwnnou96umofT7bKVnPj6gt4688HGHpC2SQdwhJk8H8bWMmFNBtswsEtNcvC3kdq",
  "key47": "2kxNSDKSHRmWToAF6rSGfvnXoqtNhRJHMNFP8fBfhR5vLrwRgEcHU6ro2GsL52Y9HQ2YnvVExSCvdiY6TVwubZYv",
  "key48": "8dKYJEQrU8UawDm8HMCgJqK9MHTMpripkcYLD86RVU8rdm5fFhoPkwpemM8LPpSjjYjboD9CoHRY88yr1gMmiBr"
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
