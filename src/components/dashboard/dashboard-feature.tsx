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
    "2VAhV9u7Ejmcsf61pScUP1WrfMsEfHXsQMdvAuxnDD4WwFHwPxdBhxQgcMnkSamdQhP68Sh5hz8teZGaKvKiQoxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rb14GFe9tKQWX5ESFkfYDE2UY27TdrnBLZG66oPavZ3xY7EFR2AbibrGjCKdEzgXRZCE8UU6C6jNjSr7mA1bZNr",
  "key1": "5521LVicYzh1wK7fEcv3jWxWFTMTgBi24MJcvs2LKZLHvxSdgfyBjQhxHhteZWkXSktVcCmqUetBFz68Umk8U77R",
  "key2": "3GNrTJRCdTREa87mM1yJWqP277imzM3ZGSm1CuiRA9fc8KKnfgoQLu1wA2XvmrHJS3GGgSZnrfinS7xQNHZ6Sg2y",
  "key3": "3MchPFwLFL2s5xUEMXyUKh5Pj9k2ftS9HMqWT2ar2zsf5kVpZK3UcoRy85HEKYAPrQMPpv1Dnii8tiNa7z5j6Re1",
  "key4": "i5RoySEk3dA41PQfggkQX8xeCTqqGVEVoiGRtkC4qib63NmPDowQgpeB6zcMNxVso3jV12a5XJ5Z9iDs2jGPhwV",
  "key5": "3P5DsUiQaghaZNzadZKWPYemRb5YwyhXxAon3cfaCWCARNYFvCCu76W1pAfRW4HQzCWabBirkb3ndYAgLB9dNeCK",
  "key6": "46s8DFZTgugcN6XY7Wk84DtERELpWJA4HjTzhDgxfa8FKPoLotB3XNUWX9fxZEsXEHCGVHAx6AS2draQcyuYEF47",
  "key7": "VvoxiWMrPiXrspCvsHnkkurvq6ekcpkLXBgSrR2zjvXNf38U8C1wJKUk8fX9WbFHPpPqv3fmrhV67zBBYotnUbB",
  "key8": "39sUAoHj3cQdf9CV68q2M8vfVrqcryK2obnPi4JAjnkUSYTP5ydPqwdpB3bRgdrDrFnppWMx29a8GzSWnyTQVqFP",
  "key9": "fdYdgikAbuz1ZYBpQ8vjx8e7CoUpVirHLcZ2RteTFzvjkAi8Y33ym2nvtnnfVJF8LkSgCkqqsNar5LMVDxKCeiT",
  "key10": "33g9sxrDEoKzwMS4fXW4hYWYCRs4YgjapDUFZzqo4aGkQY6EyZ5bVkLNSCspTkwK2LtK2NWwvgEsHY9wwc6Q4DaW",
  "key11": "3264yaYyncwLeg7pGdFta8EjK9kcXGkd1Nz6HBxyvHpVdkgNPU9wiU1kwGENF6x3AN4U95sbkgB5RaJp63MDiRWE",
  "key12": "48ofU9tdjDYgAK35kqkqChw6bBPiPuU7M2TdUys7Yx1T6SyK1qV5qufyhbGTz8RMzBpcM3ukMBmQDyVhT9podYrG",
  "key13": "5UTKbYN6BERGaAh4senqJreQqwTmwfhW9pQqANgZN6CVwPnYwmASVjPENBaJH6aUeNiPkQpdqg9CMGVbA99p7kLn",
  "key14": "3s254XUWQfoBHNFAd7qPg2N8oBZWmea1Yu75TD7cob7A1a5hxRHB7CPV2pxy1P8SZPSqb11hBKyAFASVG56bF6XZ",
  "key15": "3SZeu6EnvWsKTRaioun7XDr6zhCjk1DrDFNdKuvniZWvaic4oJdxbyNuRWD1X6KvrNk5FfHWwNK6sU7tDXhhXFEC",
  "key16": "63Z2QKWfnFznLbfjoJgPphy6BHPinPkKW4SR9nopAyTsxk7UAvw31B3n2J9ADUpynXuLUwPsbskY2vfRPAxerGsH",
  "key17": "3wXXS9wig1V4PmwmoYXr23fRP5mYASkWc3j2j2pkzFk69mwgoz1KfX4nWSdrAfsMbQb1ckeXh5kCuckXfXJoLv97",
  "key18": "3EqutPxT9gp8GrEk1bN1XLVuaDeAxp9LEoGcCcPSggSFPeDBs4HjP6UXkEE7kx5Uq6xB4c34dem8aK4j7eDcJSYL",
  "key19": "S2tkMHjLLhgiSvkkQBwKeChKZfrCRVWNPVAvNqfUJYjJuNsdWpFqSpwTS6VeNQ1XiiXECgRiqKzDgfS8Q7oeyUm",
  "key20": "571aAPy7cSeH29Ree2B6fEzWbjHLKntJznuxzdH8DsLYabCS1rAKBPqoAMfCf7psPmGV5dYHT6s2DgHhELfKxdKC",
  "key21": "3wDDmqmQb1sUtyG7xjLmJpC19v8GB5M52kpyQueLBFFbZkDduKANtwZ8tePAjntKWKV8hJHdPmZKJDJriLvtTowp",
  "key22": "4NpA3ZAwfLH2Z5V7zLcssvjZbmvnXKApA2GorCh2p6q1XC6zdYUhWVVQ5u2kYdkxcvPEF2t53t4r8WxmHNCV2fZJ",
  "key23": "3EbdC9kT1jUr9cZ5Y7WsALzoPYSEzs7NrVqP6g1BsKz22vBfvfQc1dnbFZFxZgbephU47T5mb2rk28Dwx6ozJTgR",
  "key24": "KwMsfnNtFRX8PedN8hAfQCdLU3eKBoP7ah8mXbmSGGKcJJ8jBRbF5SYVYxwbs61MhS8Z9cSfLmddQdjm7ggzFcP",
  "key25": "2S7iY3d5Ebq91M1zi3oVUsgSx1SjUovhxMZREWoVGnMxKxhmfrSyL9yc6EGD2w8n4CHE5ZJ1HdVbYTeCTCsLh4L1",
  "key26": "3osLPPrrcEypixReauTUa6CT7Xgqwqqbcc7S129RYzXqFsEpHC9qAiHwig6Eq2YM78swACp5Xfp6fXZc2euv2dT6",
  "key27": "62PYHXAvGowq8s1JrcRHkG9M1DTZDk9QsRDFz1aSdGno13psTGVjU64fKPyBoC2fw7MaHgUB6U1VaejuUHWCpLCi",
  "key28": "24K2jHXs6cYimLuif9g7JqQFPkPFEmpKvfdc4mEMSUB2ca94NGRc9vTCXSVeLbYUGgUjHVXagAHR5vuWySMoNbty",
  "key29": "4y1Rj1VLuo8bEdRTKJuaffM9D7YC6dKA8PskUJSopbwb9Wc29vRXvgPo731yeGvxySXuE8QtyUtNwRhEME527pAK",
  "key30": "5QEX3zMWsfZEkJRSk86LhCcQ7hYwUgj3WcZMv5cBCNLDibgrKNcHSvxY2CruVUfQb3XW9hrzLLUauxJgFJEv1TLc",
  "key31": "3aWoLtAXuFSFdkEDDwggL9gky1oL82FfcFdNnmkjjscSnc1bKxKuHyqv47hDrKMgKuY2q7dCvGB4RCjX4yVWgbzz",
  "key32": "5G1YdixnedFTqxYGj7dgXx4gN86NAqAyp9BcSAJ27vtGYiuK2rSrNcWzF8ckZqkjSffqHqgPMouUQ5FrrNLp2W6N",
  "key33": "4LJCip2YaB8V24KCJjG1qiDjcvUtS3FVWtxH7Ysu54VnZD9nwWPEPdbocxgLgLN66kNgprDZf1ULxb4T4oq1DcuW",
  "key34": "36fBAneDEJLhDUUrJELhLZtQFSCTXqDK1fxZjuwspKBcndPkeFFoDrpnBeHrWDg56XUgtG2dEvvPxyDqwQqzWXLS",
  "key35": "3qiqHzktwrfrBBAamsQ8cgvWKWH3Xcs3eHcFuwtWqWjfHsii3uwd7xtJpwjbDN7SEZQWkXtdoMxqqbW2xes5ooEa",
  "key36": "3sNPCy6AijPzaaEPSg6mveygP9r9iNkSzBeR2Cv7UHpju8gtfB27rVLNnXatk221zshaBbvW8ecrr7yU219bfDuB",
  "key37": "3FXtoaarVcd1h4HekQwquf1xTDbyXNBTY2bKig1BL9gUVriEXnpWBEfmAXLwnkisTqNFhw4T4R6bSqhYZM5zKd6B",
  "key38": "2oXinsRhfHRrPRdM8jXvTxMAFsEykJdez4b2Zm9dhCAaN28FZ4nUmX7k6MNb1VoGNSzj4SYgPCSHnni22eme8A5T",
  "key39": "3pDg5e4E4tygkkdCBn854QzxJZWbKNSkU9KZ4CEwbVUo8568ymfHZMWZJSM9ywNrLcrkfKu2XC5TPXqJA51zo1gi",
  "key40": "5kj3zNm6498FiWvjk3mZQETrM2rdRZJSvQCYr3pzNdKucnFsuwhx2vZJriB2Sv53MavLsDA66GMyagorsHgLETzL"
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
