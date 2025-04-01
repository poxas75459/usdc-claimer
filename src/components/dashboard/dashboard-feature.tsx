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
    "2tsAcqePVtAjzgi8GegNLXM196UduEWMsCKv5BA4g9rPh4sdFATnmy4eyFBmBAadio1Kjyo5oFfkoTusUREFqxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DAxMtn2J1Unnf8B2va7BuCnqGhYneS6saJpESrv7Mb8ZStuwkiqGYgogawXzZt8JG5vG9YNMTBFrZZnytbohpp5",
  "key1": "3db6Hh4Poju58vc8UYAspAgEPnqjmYN3njrkaFRnxjQ2gtBuiqKK2MpKrwQux3AFSWTZe7xDHzBiFatAVop9Vdbb",
  "key2": "2wQjegwy4WCPieQ1BefFPPnCaqrxUzr3wM6b3x2HbgQMiPGRk2uQrksbYru3yFh1QnbWsor84idGZRsmcVaQM1VU",
  "key3": "2nmQP4183H3vQdmqkzNu9zK4CVMPyYM2kwDDkekXyYJf2msaQuEUnyKRhBCAcgKUgFpBLoWejnxpzvSEhPGxHeoi",
  "key4": "43spK9X4UceUV2fozUnM5y75JyEpm2xvpQUvgkvGWHNBFyqrM69mQkMTAmpvqmCgsDhEbBNc6RSqtYVbXeyj4axK",
  "key5": "4kTAVDvsY2hEdPmCquiw7xZV6Fmxaui967Xr9Mw5opXufZq9PcKdfcxJxbSBtReVB3DTe98KNEByKXqo3D3Zt1QG",
  "key6": "2PRZMqV7FveBuQ5fFYRQk44zwyCY7jEod5bHCKiBWdHzh7fdEUxjJfsdvFR8Vjvi4GX3LUtqvFGt99DDafqH4sD1",
  "key7": "3VezNeB5c7N5yn6A5XidbgSn5Yxu4WKukgGuqnfGiVFYLcXuCFye8UKxffmPbXM5LtbsvL7oz8KBzXvLdXJ4wTpo",
  "key8": "WLyexoJBH59sruqYAwZVA4HuK9ViBt8mqcKQci1dbVAVCxFWyomYPuoZGgBkMifPd7KBad6314JyEsKh77KbF99",
  "key9": "47os3B29vgGaLZPntB2auoBoZrAKxThTzPUH6GZm54MRWsETKC7btEApwotZrUrYtPzVSafS6oqoS37CSoyifxCK",
  "key10": "ojBjS7wM3c8i9RMZtTik8m2W6mX77gcCmUrkvYDDzyYgAmipJp4d5BgusJKvYcWfSWfZzYWpTKqmoy1twah6euL",
  "key11": "3knvruuZ5BEcVB4eFAMaBgqfz64jA73cPeGRBeHySgoXv6okDjGwrsjP8QCRXgVf2CeBdvbBdURtFqFxk3JuPwaM",
  "key12": "WCTuviz8tCV775n1SYAGyU9WrPxQypQ3ZbZBkMzpW43VSnktqfjzeETK5Ewj7LhCX23zkanDESQzvUW9vcbcxor",
  "key13": "3YyzSoNu9ffHdUvXy3P1V6M7bemBM7gzt4mmC2b6nmKLgrx8fJrZeuNbzmcZmB8syCspbFboPCKwNbvrtoEPmowQ",
  "key14": "617WmwCKediy1DyJDJ9Pn9dB5h1M4Rh6qg15BdrpQoPyhkYnA1R6jQKFWWj5KL626u5FxzNL7JLdQSXQLqPDEp78",
  "key15": "499D9GYqk6yhVWCfr6vAoxURAcyeGc4nEyTsG7JWvatK8SGvRTMcouy99mpZgtLUyqUBGPT6c8snQ5WFZirk2cZM",
  "key16": "5VWLZ19RHXNQYtXniCzAzSM3vTgaJadTNwnBr2Lii34fSVfPuSUmrujbczbi84eDxLT3acCFkRnLh72mPVFDALic",
  "key17": "3mkfZxghk1p3eFfETgc2J3tWM5g7tTdKBUBKukxub2tomDuDZgpwy4mQHSMNcZUfjg7QfFXYXC2CrxJaRY3sNQHr",
  "key18": "3jDDsQPhA71LwmHwKVM4jWdBaSx6H6z7nWxWwjy1RJqAe8c6noZFyPRVVq6hVmXEpmHMz4UGDNMkvpx2rZRUcLmr",
  "key19": "4fCANwXu4RYf8jrr8jLgzEKV3MXeoumiBFHyPTPteFjKMmrJmWCzaxvhcUGuw8kNrnGxo9oCLGxfrndWksF1YPZi",
  "key20": "5bmGMPFXUrBUJKnHjgAGQipneYvwnfiuqb9zwhUHEpjBKED75Uh8d8Xkv3Hzh9yrY5Uj6WGG8pBjZbgiCGjE5oq3",
  "key21": "o3xRaqHsuDCdkKQ3eztokC8zMHvMdSZxSq7aXjx5QtsjhNDxrAFdfWyZedy1W3PA8GkzegjfQq1JAeBeuBrtUb6",
  "key22": "5W69PhdHH9Dyvh8pXmnbnxUy6z5mJfB6jCkLWaL7YeRGPj68xZCxVyqXvRxBTZYYrSP9jaxURzrsZi7FddmjwJTY",
  "key23": "5US4i71jDeEsTbSNQsQdG9X2X5e7Dk2xxMZrsn1dUGQgNe4aXfZGmCLmWTetz4S7U1akXggtAFnwHUb18h5k2Vyx",
  "key24": "4zK8bYXmt5P7vh2ybxE16owjnt5RAqc5ELumCHF7RzGPw4voZjSQm87i8XrxaLwDX6zk94dp12VpkkujjQ6eX9Ti",
  "key25": "4E2jnDDrgTrKgcM3BCLBeE77GogckAk8PUyZJocRKidKjdLjBAHhbx5AHvwX3ZnJAwTxqtqxL4jSCDbwv31ZVgSb",
  "key26": "5ezhDTVo4k64SytJSk39CWUNoqSL953q2WWLU1UdyRp93BM3vLWV8tkAB4iaULAZRf2va2N54ZUf3GhDPAiw7TBw",
  "key27": "56pAEGVZLuWBwViAE8nQTjgvSE7TbfzqL1gfv7QYm2t9qHLUQP4f5FaeA4cSv4Etd8LMJTQ6oRCbuHe2nFuSUHk6",
  "key28": "4iAmqgXPafa3CKbHFQ6ZzQieNCQu4t4HeMY3F4ENZ9SxigJnB9gvrCR8VvsNPV7jp7gbQPxVLmasHwUCsAgnh6ax",
  "key29": "4qFEPeSMnDfZuGvJHRr6BmTUyNtNXvb9JrxrFSvgBRZbNyh71YC114FpChSEAzbQE7ciNxshMqKW7qmAhhAHVyn2",
  "key30": "2ixS1vdhgt84WFVHuTWyq4mtZvnVUpmpHLDWLt8aQn44Qvdeya28eHBpFsiXrPZ6aYnG8Y8PoVTxF193rRnC1gmr",
  "key31": "3rVq8EyyP8z8QxRApR7DKQ88ouNrbAWMwtLehftnLkV3DxWhXhXrhx2vNoQ5SbxbxrYfKVTMxjQpVeA85XJvaUar",
  "key32": "5VRDdeAUfdDHMJuqxDqYhJJzhdzZJ4eyLJMAyW6XV6fzLhrttAtJjtGe3DrEfB9Msub7Ziv5a49ymPRrt5WzH13M",
  "key33": "2ExcBTZrvhYoWa3M64wDQjQpKFhm6SRb7L3duQy9jqa8kr2iXBsyLUcQYS6TqVwJ5XG7pXtuXQyYFscaCraKHLKk",
  "key34": "2hSUyeZZ5bJQNi7xZYpcYcu523GqJ2CzbBFUsEcPh7TJirrdc2JavDUGPt7gDgTY5Mo8DDXbdedD9Q9WqkCBDPPa",
  "key35": "3DERwj4Zr71H6Y3vqGFpv9rdyz2LhYR77n93SNy13XWvFwkhhvBWKtUf8tcsKA1kpWL8jmxqfJySEC4Z5sH2Pjwz",
  "key36": "861VDgiZDHtvxoZtbZ3uuN18857E5oz1ZKwbX2L4DSQV9hNpz8F3K2qBjYgmvxY1kh592fcgmGe5viC7yzBFf2z",
  "key37": "3E5KyvdMTPxTtJRXDCeKTQUyhtivQ2Jhv3GCuJLtdKd28wxE9CB9PDq7gUPubk6h6bJeRopsReBxRhbYcGXR6AvN",
  "key38": "2dWJU3SB3hLPGNdi3n3MRyu1PD7z3xn34VEe8FC4cPX8XAQGtW4Ke6hn2PdDKAb1GP23v2seBcHXUSiMqtyNJ7Rn",
  "key39": "3Ffp3mHbDgSCMVypApPjQbHMkuA8FoyKZUqV2pfjSGcfGSNRmmLLSjvnj4sziARnikP32VsJatmKrnPK2XzpAuRw",
  "key40": "2Liep8cvatbnpJdNZfU91qAMG5HmUHoPzzBNZt7g9J9ocGQWLSSy6pvvnVCXQK2rhdiEdv3H81obWGWTfev5uMvj",
  "key41": "5kstVzdHgUq6Uw1t6oCvoY75x4v1zsLzEHc3x8Su5GZCuTHFGnwFEhEpP2NCsUcNf1Jw6utXSN1TinuCVT8yVu1B",
  "key42": "4ix7bf2mq8xZcucmSdZNJEvb8zojApwrL69PRoTE6wvRcejpTdiNTEY3eCNgKb3yKRenejGVARYcqPGoDRVDucnk",
  "key43": "5TAQx4Eqn7rVtheQFwv4L2WqMtPvsTstjwY3ezXUNLRZ5XtwnRPKxt1qDtvJZfxGT34YaifLj4uJgmkufV457Lms"
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
