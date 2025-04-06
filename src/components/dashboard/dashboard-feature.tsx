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
    "37Y7TcBEpEhjPpk9y2iWLXWJJfuVDvcLjvjQ3WiQP7DxEGwoMKjD2ME8dVghVXxPifKteLaHoU64Fa9hczxbk84b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tYW6BXnqkT8rt66nj1wLcc3xj5FcRbbsTcFvY73sakZ2jGoF5HFrnsSe27VmwecNucZmeHJeW8ZgAExxr2zZd4D",
  "key1": "5Mbe1MhdpEGi7TJY5dvgaCf1y9WNJeSv8Ss8f2D3BrYrHB2wFSjUYSuxdKtaZjC9iZLgg2ReoHfwsS6TpDdomvbn",
  "key2": "5bsCvDpwMjyir3vmntiwkgMQWRVGdBhSqvEBqT3yZF3i7iVuicBkXHgphog5bjGSvtprn9V6hUkAyS8gZ4hfgtFd",
  "key3": "dTcLnYgDdVgMZytWagMmfcDm2aQG9XetVCCioD9ysziukJUXN1B5HFLhgqRi2Gn2CNw8CQkQRj4ZsNRoNHFRd4z",
  "key4": "4pdCjuAXUsgUDiAkr9cVwKqoM5CxvinM8N4V7oqQfgTFcxGBmMopknrK3d4bzURkD8Nn2BJttYTY7Q9dnR1rKoFK",
  "key5": "JtRQAuMp8o5xMW2hmrwR7YN2ty2DzNcMdT4EcDJtKqbLzVP8Gt7rAgR7XRokMCujTqhYaKvDoMxupQmeTEXjm66",
  "key6": "2mvH45a9G2cw4wR52aL7Gd8jznR6YAbgPhztHCSu2USr6XUhBtA4g8ssLE8iqXQBni9b9EmpC99rMDuWgR9MPpFB",
  "key7": "2soZaZ8N6LtG93RcWYxwT6bZTQrAisQz73LurdHjvN5Adb2UkQo5wEJjbnpTP3fYBXedhmmWRuPFhuBsVSEnx9yx",
  "key8": "5kbpiUjmBwuugvgS3jQkvvvPwRtr9gP8XtxK3qjioQLNWJSA5oXNoTGhLPRLi32qqjXTDpMswgkS6mrEVbDe1AzK",
  "key9": "2gf7uFtrSokVdDqXfHT5gJm6sPJCXbGeXdhSYcv9nGcwupiyy44HazU9V8ByeqiV2kB8RPfs4SGdyz5YsuKSboj9",
  "key10": "3rFuZEV6GC3ABBeLLCLgT6aB6rgiwGBWPB4kAMzf85UrxiKcBWRy3en9M1zcVXRr38frWfqCrH9qsUZDBcKxdeQH",
  "key11": "2toyEtb5hx4PrFwRsUyJZQqENR3sPHZJn7YjHy5Wa9YUekKS7aeBi2Nzs3UPHifqrt2sSkWfkQqPP8rCQpJf5J2E",
  "key12": "2Q5csqTF87brL6pL4mxfGtAqGUpdcCwV567UTfCsUdubdoQ6mfw7PsQSUMEvUZ44nVuRH7B55wonWEfmLowa588q",
  "key13": "443WiXHmabGSet2SveYds86GXKyvqqdgKmjwhBx5XoZXzcMEBZdY3NVP83azyEHWcAyMi1uSsUh58AkGW1uoNGrb",
  "key14": "2GLjsG6EzUNKAFuMv4eq3XfkxgHqbccRYbWLGw4dhTUPGRLW9rjgbhcZxp3WbBmsySViH6CHPkrJTEK6Gv1NMDG1",
  "key15": "2EJ2KXxJaikkE18HfqYcRzLC3wgyuZU1FYFVr4Q1XtAavdh4zsLMWuumM2jtKcXAWyG9oAKp3VP1VPKZTwwoyJ5p",
  "key16": "4PL7TcBFvCrx7VH7sYLsEGUyEmaBohdpYj4dw6e3cGXGnFhjDRP58u71DBfg47qqH5de9k8BYvSSx6Qxv1DPjFGp",
  "key17": "4JPnLiBKc5jVjZrbQcuwJSYV9WFK7u8GL7bbkw8tTzfkdrJieVxxt7ptaSN5D4bWEwyBJdyJSvhn2aKHs7JyFmGy",
  "key18": "4J4oBxgaQQDv3K1xrxHkdgea7azbJ7AQazsxfj2wkWHYNGWXmt7igcobnzCRPEoSbW2Y5edW8Tohk1cBFowQdpex",
  "key19": "2JXFdP4yzaz3y8xA9LCPgsRnymiPkMUCE8CihL4n8hQJF7qU4tiDBgF3Ep9p68zTJaEyY7c5UGCmhMTf24Nxxewa",
  "key20": "5hgMqL2nwbNJTNuwNM6UxT5uk1hHcSGAWaWTMMhN7mqB1DVJV4PKtiPpsFTpMQRdDzW41b9btKexAN4SQBiEnUDf",
  "key21": "4wByiMx48FmyBgYaP7rEkV3cGQbpa4fpofNkusrb7Ff3NXJq13eWyat1FCR5SojBrxNdDS14FsRV5MZZmZAHtaBX",
  "key22": "2qqTuD1MrFHDqmf7YUBLoEtPZwSr4hTHTKHGXfyXm8DhvmC2dK2B7CG2mrkpDMruX1k1DPYMk3KAfDoxnXcN6vNN",
  "key23": "2PjdFz1GrVRs2Seor9Kr2N4b5Frouk8vNTBKZmnJu86K2RuR7fESaAyip16gLpTDijgJBbMgsV3L1swwGZ1CdL2y",
  "key24": "3dcfSXbPHk2bDgWfZbX77HyQZYeomyC9EiR2DmZ2V7LKZXPpLbqcgjsfbhqyUjTPEP4xnYekTei4qqdhCQwp9a1Y",
  "key25": "x9zmm5TLwrCbAWEQHDz2qjwznixYKRXvEXp7EDDRwLgqzMNawCqNtbAHmJukbbaquetML2YfzGrFT9cYhZo1Czc",
  "key26": "3zRcTcW32RdynWyEVMcPSzui9Lo3ebg8x91KEFXb5jjFkK8wLP4XP1Jt2e8Tz9dLG27Qgc5vkxzNNarN35BbGmzw",
  "key27": "4m7coT1xLqfEj8bdhFk9QQHPrttMsCngTrgWhWnzGP9WCJknFb1M2sFb5tQSyH7Z1qtxUJWXZcJmMkVDrwdKChKf",
  "key28": "5uqgiWMWYeLFhYTgwxbiJGXRsWogEypnpogewJwKWwyMEyZ5WXgRR6hoX8Lgq8eFmTwGGk57kk4WNq2LU65FsZe",
  "key29": "58raMsVY4bRveC6uzfvVRnV1z3zrQo8ReKj9ThT34mjvMqW8y2ywoNrcK3pwG3q8xrqBQWAyqULw9FXyxevhKnou",
  "key30": "618E7Kii2c6BnuNS5zkb1GxEuSVsWCrcSrwWg5WpZ6JWy7fQVMcPsaEWGNbCYpxq4EhvyPHP3ZwkBGRJ2SCVJiVG",
  "key31": "5wUG3yd5VUqB5G6nYAW7mHCLK9D4ZcU4AMM4MCzZZdt36RGKbAqeXQZtorfaY8q246hmAiP2ZnfUfhcux1fZMpDY",
  "key32": "5Ap9mhPTex7HgQv9FSh7ZBXT5kM4PcqJeFz4mvYYSio8Gsyse9nQ7hMCrhZKBRWYW9Zwxqp76W442RdtA4wCoQUs",
  "key33": "mYMRwwh3Uz2DYL9HdGJHNepubFhMCUfhvpfYs4vbrzvUzDP56mEqNsUeMQF1uvX5Eoxw39Mt2HEXwVeDVgK3dqS",
  "key34": "BG1CcqyJ8z4J3yXnP56njuRR88sAWjiv2gnC2tXZbn7LzdhSGUBBW43tehkcAUSLFQu2WWmHnezxhjkcv872Yew",
  "key35": "4BvVEcWkdaXUEfjZraLuFs9MXV53nHfAqeyJdi5Z15CrL2tCeZsQusMfDfjPaoCERc3xS5PcShkDJbsxstYDQf1V",
  "key36": "bS6VarJnJekwUwX9PuuTV4eVC93xRvYYABQZTHTWqg73vRqQFB65UmkXrJgAFE2wfoZH8QcpYuQWEmjLpqQsK6J",
  "key37": "2w1hopu7DYe2Xvxd3ViZwbGyNNr9USh2ntabUvCuqK41GLH9wsMAoh3GwBcrJcjyUWKxedu8o91TJycsY6KtFoo3",
  "key38": "2d2RQReFHBHr6NZeHoYYSuxPVF5oafJdmbCn4jZ1Ehi3xh7VRkkPEiRZDXbuX3piX32ynLZqpf6WB8BJWFQR5vSU",
  "key39": "3kNL1JoKGLRWUE6QrK1rxsYbKPmYaR6gmYNYDpZcNJR4WFCxWhFTE4WYZUk2Jx6MNbpDymDgy3i15vzH3WR1ksA5"
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
