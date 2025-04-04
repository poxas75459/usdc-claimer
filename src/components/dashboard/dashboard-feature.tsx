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
    "2Dg9wMTNonpyftMB878riJJctV8k34Ts68jyBxY2EfFrHsm6PWn78JqMUGc7iF7Ch4EPfwqTNTTzjfUUi5r8JVid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6RLLixiZQRX5Ltny2VJL8zkuJnYo7yR96UjbBiHNJsH4nYUE1VDWEYCfSpg3C3mSvb224ishg9w3e8p9wmsB9K",
  "key1": "2ELpnoWPNz95kHDLurtnR9AS4NPSUZtGpfgSZCDaaRKk14thCPFnCjBV4ZRYTxjeTMUk4zGKj4866NGDyMepecHG",
  "key2": "2trkhHfFFgTGstd1obAouziQhYN4Mm91nPKDgVbfRGVqNwZn5sGWiG6JsSeeQhbzMhSvp4LsuRyYZhDjYa89U8VC",
  "key3": "4PRc9eRCsqT6v6yZU3LgGRARh6zVzFAMrgP1aXr76q6RF2VyZgM8CrAdGMwno28ichgJ8GcMUYmJBu1yHMnsEo2x",
  "key4": "3ibpq745PimEaZ1137j9Kx1mUpuK7wD4hzYwzDcTqaXpumasRmucY68S2TrLFtsy6QmmPSJEWE9Ekc94ynTBRPSV",
  "key5": "2y9VoVhEJxNvGghxpPbvQmsQMD4ZxAmszZVLPSRqT1YUYSYngvCwyzPaPpQF4VZXUz41uAwAqW3cZv5b7mH9yJUR",
  "key6": "5bP8iuFbpmUCAxgKXr5SBoj8WppvbyN7Ku29C89JwvEGfK7ivPeZH6Xm3a52GGn7We9nGoadoZWHBmn7BytYu7ZY",
  "key7": "5cbitFqisVwQyoJfUAzMYXCLKjBKsR5zu5FLh9h1K2rX9tiAMn46TtH8YQGc7UQRDzBjjKVGEfgLv7qsvTB23kV9",
  "key8": "Yzert6akZvSyJgW3f8dxQmCkgbazx2oEvsQsh9yNM6sJb2zqfnkTZGqd7SoTZFPMQMQWoDWwXSKpTSDWgqVZYvB",
  "key9": "2rmgVgbZ4LJwExGv4mLyXZZSSb3gmqeXDpAQQE8T5A8YbSg9wEwPgQycCBzDU5hto7kFeKzEMUshZbxWXhHEYUo6",
  "key10": "3fQmXt9DSktUJA5Wdn7oZzsvWzyXwMPPLvs1QLUTNVDoyZcMMXteCsCdNxHTEpUegPWTSyU63a2sTYEnddPz43sd",
  "key11": "49W9VsRi6zwsfsVctwe97Qm5uCsgSvs9QAGcp9RJdxj6ey4k7uc6uBZt2FxCNANgw2baCgeLNBpipufKxB7qFmUe",
  "key12": "5MyDcujeZMZoPz9Sg462q6nHX7UzYwfrRBZvcD4dXd1UbEJakHs1kyuegEKixLNHpHDu1ta4iqNg9jyeP39xfGTT",
  "key13": "3d3JtRmhJJZ713GGU3Es8kJgCsUHa9JQxBFDi4qaq26PfzYvmn2cJv5TCBSiZPUzymM4k3Dj16V42sAfjAoUA2bh",
  "key14": "3HR4PxGjD54Jn5TJ2endJgeTDRVPhbDqTo8YN4kbWFNxvPkbeGg3iMrDMzitbUquZWCsVPrTMWSiizdK22nqx1tv",
  "key15": "63DoC4Qq3AZTWBCUktzcJBxGqNEwW9apT3ByNoiUk8ncahR1o18vhEzc6eNbm1F9SpLvs3K7TbNZdFTa5Kv7Db6k",
  "key16": "FKGwGQMHuqKTBdr4UAqmbEGcJn8D6wFnBKgGP6HeZ9J8rwAXYATLZ4tWHdMo6ynQiixcyJ6BF6YXcubyNSvnEB8",
  "key17": "3oJdAuyco1mHarRzCq86JZMkiJkfD2zaXTAUm15bK1zQWTEJ1DcqtR7F5JyMgyYbri9qjJ2THWi9tJ5bGozW7RYN",
  "key18": "2hNJsKtGHh5vcUR5w1fgfeuxY3A9qfGwFZEU48rvGTcVXjoq32sr8xC1bHQHsDg4Mq1GZ3MbMa5aaLMoDEeancrw",
  "key19": "3yGbrS5NUZjRbUCx6ZftbWG3gGPCozLxcb7hTFr5pScGDvEMHg5kgLwpSKqDRcAE7fE7z67heekU2YHjPD6YeQv3",
  "key20": "5CQXRGHYLp3SgkbUicZSRvUvWYFsGXqrgDiq7Hz41oEZJbY6oKWQmXZECvNQhnzNWvDpM2iS9ioyKR74uyecK8yB",
  "key21": "5krKZbH33e555KWgneFvC5gJDdTD5DAngXshAGPrbe6evXXyZQ4KsEKQEcUbNtET6NaVjZuhEzcj5wpG6Ro1RawR",
  "key22": "3YeSQWkmEP3Yj4z6hGrBY1sD5ruT1LNKQzh9AdFnW7RGmzSwqWreGUkRAcinQFKDZjvUpMCTEipQiB3cKhvCDkmc",
  "key23": "4CirBQYCXq5MeQj4BR9jn57E9K2wvFfAZ4VPqmRbrrZ7wFMwq8Fgx4mAMXqr9YoKmvihECpfZ5DSEtaSmpa1bRUG",
  "key24": "4rv8xizVw4MLH89ZAhQB8uKSmLno8mGJADSK54xTJGET28uVjixD267fvHaMNW1kE8UuW9yK7g78sLdtRoyED981",
  "key25": "3378uyPFdXHUvGqkf3USM57E3zqZaRLj6uCKE6CENbAir2awEd17Hs8A8nKjf8JXz7G3CUy46RU4htzwBqVbYRbZ",
  "key26": "64UNi7dnp2kFmRBjrz8jwSEHmyp28pfZPfB5AqaaY8ZF8CFwyHh63kLG2EpGmvzKGAhy2kwx9miwksv2nXNUNm6k",
  "key27": "5RmGjnRTyUcD9gimPza3Z4RaCiZHtnRLmrwBSZYvuaDqr4S2jstzNga5Lf31y4CMYsMUM9Np2G4YfcC4CVHrPLZG",
  "key28": "5GPVcgohfUjRF3HLw3YTZMmN3ccBdSeBgTreZcp8hSnUPzA5PkCR4QVB5af9vvUf9g8VA7MYZ7AQMWQTuLbxRDJ6",
  "key29": "276p5uZuS5QMMybnsbe4p9UJ3NQEfynLaX4346GHVdbrSKegHiQ9GEuSX47TorVjwtSezBYRjZJSEqmpjeJh2Bkt",
  "key30": "61Ggr5oCDjeKScxSfaAtBirMv5oEB1spbe82puvkTwPeUMhn56WTx5mPLWvtcJAyqMwFTGmkjyEXTjs5XDPHTqJG",
  "key31": "4m3hpSYAT7PMnjyvcGFiLeoqKamMwt4dheLqPyatji8aphhGUYhQt7RR7Ub5TjJ7BNALCzDToaKz2kVsAqvF4dSu",
  "key32": "3wpSK4wrFsoDu56ge7VR2KZ7riTYyjahQSLECrZd62U7TAomyrxGFzkFQfgAN7sxmZvCVnMqbzLBUEugwuhxs7ky",
  "key33": "5rTgeLP64ck4GQ4CrkSgonEijdqiqfK7dtWtdfJya9E1QemR854SJu2u25DxaXSqRUCcJWd3cB2F3GYUxHjuLkwi",
  "key34": "2vLrgrnu2YR1aLRtV6LE3ZpG3vML61AG5g5M1su9VAuSao4JGjejMQGoDM6iYcNSf9AGxNWTBkHYyoPGzeMAMr5t",
  "key35": "2NSF6Mr95H2ioXSp8NxtTPbEC2w2xGLpCt2n4HU67BVRM9dgfJHExMuMDm9rNt2aD91syjhWMPsbHLPCt7edNCTQ",
  "key36": "5dQnASuUHn1Hdv6Lad1oRxEMY9zbB6HknNADuwrS57jcySKAY9JxcSWL6F63ZWLaYLD8bayC43m7kXfwdyXRjQqs",
  "key37": "46carnshvZhXRi8XnS3Zgi4vzdjXGHVxDgFhzvmQhseKejUYnSNgFFwC16xobmWALwPuw43fhGwuANh3MXvYzW4h",
  "key38": "45s9nRYtyuUX4KpoK91dQh8gd4m8gnqDrRNQQ6EUNEcYChqR93QchCLNbSoF8K6KrqQA9AeDhqD2HYPjx8oVWCu5",
  "key39": "3UHmEvt8CD31wEeFnVNwwNshbeCq9TPTp3v2PNxWJj8T5a18Ebd6UdZNsadYdjWN4EGJLeNc9ooFTUudAi5UXysB",
  "key40": "uWS6BptBHKTv4L7t5FUR9Ck4FzM7RyWLymtVLbvcQuo1cfbE3Q2kWJTLXWCHoFBWnV7MbzSzBoyprLEGtX67ihE",
  "key41": "2arY4g2z4oaEhfrcoo3HhpPrrdg5U9TkvWLUtz6ADCDMdqpoPmysxVGJhnr2LjFSfZc3CkAnCKLZ6snfeXoQWWLr",
  "key42": "2Pf32MNDxuWrAkHQc5fscVMWGPMa9dTuHVKMrehqEm6LwYQguhQ12YDoRWp7c7NZ3TSbBsERsfz5R4oBpvsRpZfb",
  "key43": "3gY3pSstcvE9BuYzJd4AGtVNPEwW9FvXgjrid6gYexYD1qqMPaNiZoKMFH3MLJVqFCf8Mbbj4gvE7x8wUcUqA7ax",
  "key44": "5kaUPp6HiACNyGFScJ4uaLJcwkDdFXj63S6QHYjoyGFv1tYfmBUbESYc5FtT2gXYzQ3Zs6dVQFuGwk9AfYY3uMnm",
  "key45": "3Apn6o9K59CMDyQdpmdMpaP73GE8MriK1vHcXT6MnVqZXEZJ4DH5HHZwRv9fu8Hj5P2nBo2LvD1BPrAuvhLohBHj",
  "key46": "4qCUrcc2NVfG1vKw55GaotXLUcLSwUh1knfb8iG5fnLnJS7f9Fn3QjSTMCrS1K3kn9b4tyJpthPPQ35DyyyqyRs6",
  "key47": "34XNkwpJowpVedmpLrjgTYrrxR4jVc7FpFwUYGs5dFfGcra9YL9AKWBDNTrJ8gMbdEiQZU7txjhbxL7LQRAXBxt7",
  "key48": "3x9eNFu6tVzvmCPyFHZYjmoT84HnGnuzLcdyV43EV9gqoneZsrGwLLKsFujGynmwPFxMMhSHYLZcnE5mLXB1XC9q"
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
