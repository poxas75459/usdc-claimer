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
    "4EaujqdPiHmyF3njyqmSy24MkgZTAPq9bTpic9JkWH6yrxKFmXkvyjeMwVHrJYQmNvo24PSvDKugmMA8z94tgjXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GsZCp97GrMh2zm9GdEXdiS49mLvADTZ5zD8YPiCJuQu5zJhMTFEf7zQLmwCQWoW3edieFRwuS9x4Qkk2Npb49DV",
  "key1": "2fguDy3pCceZyrLvrni2TzRJ4USNBaAAkxE5M5aZonT9VnVwp2Z5aWDksyaHmkLRbVHs4uerHhH9WwZUWCTqJVTp",
  "key2": "3cDoMHDeZCPDSzi6yzqdkBmwckYFZJd7fpTANkCS4tXwTkvYbWeLpJDCykZJd94E995CEGrxZAZgKp2JELnWbnHL",
  "key3": "2kJcBeyJ7DR52QFR4CjrTKqxJcAuxjDUMtmureeniNqHwMn9aa9h9HJKfVj7MmEEmPMHNWENfyF8nyuy7jsRuXc3",
  "key4": "Vv4A6D5SQNnbQ5stnYbEnMVErT6vomWnNRufNBvibUkUsshkVP6y3JyzkHRToXxZB5A7NkFn5CBMbGhx4SeKVRg",
  "key5": "46xSAo7mZUB98r2hhuoRVC11fyC26M3afnMgJvrnf8Sv75dtbnPpwzLPJUowXrDV8ZE9U9VqWJLkpxy5PPvzZM6y",
  "key6": "3WSmcquo3YxCVzK2nMkLmP6GaLtbQAErJfkko2bVjaiGLwZhbnnaTUWho8Z5FAz8Gq3QY8Wznnx6SdAkrE7QSvYA",
  "key7": "3AZcTgZKt57CGeZXTKxK7gjexVin5JGuDoPWxVGM2aRUZap2gutD54JhJX789y7UEqtD9PPEFfxUacxU9zX5Qjmj",
  "key8": "2FTTW2uiYH7WuCnXFyxnHH59Zrzd6DouX5tScocu3KTq9duU8e9dpxrKWYtnEvEZvq9oEETfYYNTCtBBGhCn2xgQ",
  "key9": "4wi3ooMbmchzc4ou6P3J8eXtJp4hBNfiXoVwVLCjHetQjcBPXJsYmrDq4sZscwMpG3dhWNvj9UxBe2xRga9Q4bkt",
  "key10": "2pjV9cEZB2YpuVcWukU4jfz4dbNoWiHR8Jb4NaCF88uvMGEZhwZQneqJ6hfcg13iMuaDc5EDkX9EAaA4D7L9kmhN",
  "key11": "9WtG7NSS1EQqAT74JhwV1B8xGYVDpg5FqKd7jWHWL6zcv2GqexF5uMwJvovVvjFWpabJXUExexmYEq41NMXis1V",
  "key12": "35Le5wYKEDyfSZLgNyeiPBCiVguQMsb8n6Mcn4xhtJcRLH7Cbs9FZ1SV5jNQgE43Kp2N2hPEBUgbPAYKeMtxA2NH",
  "key13": "9c2yTjJiEEriv2nnJuN9LPjSmtPxj5wsaMgXtNAhdGoJFsTwa5P9uFJiYM7oYm7eJvY5tyajuk75hira4vVR833",
  "key14": "5YFugGAG7WooL8whH4rnyLhkg2sfpxUAUj4YFHxnUYi8GWu2WfvJtQVC4r7z1jsM43A51TW93DkCoVZu2Hg4oAjm",
  "key15": "65CuW7VRAfMYHVFTGuFthTMcXZKf95gmc1kd1NjT6FHBPaPrczLLTKrHcfLRvSJZQqCya75muSkqq7SCPn2K2sGo",
  "key16": "4e4QYwioXghXBUEzLz2Bw8LbgPhbCXWkB9JpgdPf3rQEY7bFSLWnczrjSiAiCtTHzqyoPcCAkkfYf2wDfyyJit6f",
  "key17": "4fhe6dUXo72GKMpNN5Pn3GQFbhiM9dZPdWU6m8mmihptN8YkjJ1k5HxgsFGkCtw4h8aRNfmbS6eKPQkhr47hUjxQ",
  "key18": "3XH4UXzhSB1mm5B8B6R7dXCnY3AzRwEs8EyiMuuAdHRVPMw58HynPFgeJzBqpow6znToVwgzyRAwN9vzMRGkpzci",
  "key19": "LVDEqL4VGbMKTgW9XcWm63RePpHwhXN1568FmNBsdET93W8FS3VasLba62NRtEsNUeZ9SEQKRnU59S8xWssSMUX",
  "key20": "5PJshviW8pq9jHgTrncjHQLz8dnDttMwN1ep6UgwFsUfLiedzh8i5VVQcoJz9p4ZQsB1YqVAcN8PyuRhwDPLzGrV",
  "key21": "LWTioX16Sihzibj9x1J3PboeSkRZxr8dY8vk48pS3zfX1PAu92XFXgbhHWL2uyjxj1CQR4S51aNczKpMM4WovBD",
  "key22": "3wwK2heJyGwxd6yjnZoN8Xzyi4tm8HeGBKngTcS1LvswdAdhEV9DLBTyPFcW9W8NjVQgiuqeN27FSynCsExwvv2J",
  "key23": "5UDWZM12oxfHavgjbdNpqQMTorMfx3xgAAveN79kyo5a5hiGYtMjcDm1wYtxCTqQSoDRPr4hLcNFX5QZL5JEEzFX",
  "key24": "2kw4AWobwt15SJirByvkNYRcqAgS9ZR7k1RDfASHxkmy7uWdLxDqx5feF4irUGSy9BH79fbs5Mg6tnmxMdr6hJbh",
  "key25": "4L2r6pAUEXShNnwT9oWjBWwsp3weog9YxYKeHxDfUhJWiXesB4e5YFZyxWTiArx7qvEyG8t95rXa5BjH9yUp6xED",
  "key26": "7dFbV6uzyewJRHgYEPpJuzqBw9gguCm9ppMRM8usp6urmxWxnNKQzwa1Riwi6acYZ1cmqnBa4hQ7qM5nP4Goswn",
  "key27": "fdyA2aZH38RovLMcZZxFwgQQFvBwF5UqWwmhdY3sbNfpDnZbM3bmiv38BRW952sNPAyaMWyQ2av8TT21nTg2djy",
  "key28": "2syj5CyZw5D9nLRrS7ccz92mUeEZvZvnzFWQ9YZk4xJrvnQ8FZFa4CP3uCumj723nPSqYydgrQDzw87vgktt1Fs8",
  "key29": "j6r8RpXS95htcLz41Am6kw5YPFHZfWB1UrEhCxUEEVWmRsPdjEiaEZqQ9GdVKeDEQShKcsWejxCGvfN51LkwMvX",
  "key30": "3E7863ayQJgX8pm7RpCCkAUzNradJmbqa283q4GuSKXtbjGk5hupG1946dBjLx2sa2f5yDtyY1szPdN8pU7MFEMg",
  "key31": "54UXNNdwTf2tpCTCpTHEwdAM3yyBDJdtzPFWRUU7BngFSzAhSyEjjSonixRRFHeFV1GULaDCKFL5gNwhdw7EvHFj",
  "key32": "4vwCcVruRzkyHh56PXpxhESJvvn4iMxxoN1bEcEAiYYjEv4WyLRJWQD8sd7VNJNL4uaZQ3cXHCPNwUHrH81byEpR",
  "key33": "4CWrrjCJBnBuFpefamX5JwnzaXxXqSfNwR19WNfNroV4LuePe58Nct4nZvvYNmYofujKp4SAJG52b6ELiuDeyD6N",
  "key34": "637LGf6MX4Ai2xmAxkoPGG3YCmzffqx75pxFuATzrfUSir2gtpFAgzdNvpFXtgFnM9YYAYgBBZ9kCsymi5w3H88C",
  "key35": "3YxfbwttXEoqkdLaFv5QkLNT8zzu2DnTqFe3TTfisfd9U9AAdEcxptCTT7mGSFAicSJM6xdC5XEAstJq3gF2d2CF",
  "key36": "Bqf75LivNwdYWRLNTquTSXaydCkFj8eDhg1H1WLp1Moky2ws1hnkre2agccLnAX5WpajMzBmzgcgsMWnnnUvrbc",
  "key37": "5AwkY4qy6c6vsmVMFWBoGUx6ATbcMvFoqYFYPDiMXUriABVA1rgnrFDLc13Qtds4gi2rmyQVvf5EYARTsWTHWjbN",
  "key38": "4126iwPsj9hicm1x2jwHe6BmSpt2KZdSbbYxW56DvEVhi7Vy4PWHXKjU4Med75HUAEvYqqS9AgmowZTK8bVHUZnJ"
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
