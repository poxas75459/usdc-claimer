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
    "hDeLgpghFoSAQKAZiX5JjFWf7cq3CVNUENhcztG5AvXrwUgHQ5viJrGCSHb25okksc5xtG1r8deTEK68MQDjQy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lqyk1x9PmAk1f54nwGVyP5munvT8rVFkrdZwYF9oHHNhhQRAS56izdWpBzewdmb55oHg4sHKRgiUHvdYm1TtQMK",
  "key1": "T296M4pe8YRKJBR8cMi5pbUhs7AN5xtACe6mCsGHKAGLrAtv4m7rqcKkiSZUuowMZBkgaYh7uftYQrSZeJ1jbtK",
  "key2": "5i9jLPhyqzxaDBB5MPmefWbLJytMnxVbh16RUhTmfms6GZBmR69KRpqbdaa5xMXouUh7STdqHHQWQkanJZr4axaa",
  "key3": "5RrWGEPRB9gjfvQvhUobLVfaTqekz7vA7Mtr8EGp4dfX6q1FnVgwoF8jNu4c3WiY4LGv2V6Azh4cz8HyZx9muLLn",
  "key4": "3AhqV8JZV2daZi6fDS4vpoy56myWTopuXg326Jhq6uuTobAhv4g4kcJELAeTFA8vL8rmxnttKHzJgSZwnnRyvAet",
  "key5": "62YQJTj2fjNVy2AiRWEpmBzNXc9dej3XEZrd3tjmd3SFPPAMoYwp1j6zhvLpniBTwbsqUZBrGNeSgv9AqRsnS11y",
  "key6": "neV3CTm6P7UY7ZbRNBQ8hCveDX5AogspmvmschCwgeqMMvoRMf7rQMkjfPCCo7WBh4u21rphScxSH5frX2jmUXR",
  "key7": "4DGi5QS53AcgejaXnvjDttTmzoETiqwXACf2ZiGxDVLGkHgSM3GyGTWgfJpogSDsYgpPZFte3gunnofo5eebcFdL",
  "key8": "QHHa1GPTaFZmK4J3QLj7usq7c8gTQRTxMj3nAEpebP48T6fjxYrpGVckW4w4HKvR4NSpaL3kmSPfk7XmLyQ5mXN",
  "key9": "4EMJGEpAqSo79GAPq2Sp21FnW7WxsbfCfmuqX1qUhVPc18dVVnGC6jia8fHEZXDW8Vvz8CRJGGmMuHuobW2rjykT",
  "key10": "jgqAEMP1sa1Z9GXBoNh6LAdVs8eURQjaXcNXXbLrhJcqtMY1R6R9otJzoSiCskxvU8t2JKMrjkuCGXSVuSHs9xp",
  "key11": "2LGdTigEGuZiSGF7786abhDggF1otJHZ2T5ySkmoyN5uPjpaFyv7AFZrhp3RFkQGZ26EkDEyA3BjQTXsjMLz6E8w",
  "key12": "3ETd3n5nRiApK2nfNf5n1aeWVtAkSTFqxtQ8hrbZHVKkNmqAdCd8LSRoQeTo5nYzqAhzU3Qi49xNun8SmhSLHEp2",
  "key13": "4Jc1NRPQPwz4sc5ML2jRHN1kXXdDKF6mp8GYxw9YPZX8p571zmjcVVdPTGzZUEpHFKkA54tCLwgsYLYVXyZZaFx6",
  "key14": "2oKCwLToAeacHSKTwz6Q61zK5u4WrQTbDDH42PVB4rTGWa16GSKvTzg5UqVSWYtmi9hMC9c2wyzzKedbUiwmpaaY",
  "key15": "3ZmkANgXG6vNVefFV184bSrKgG2BM5GsqXk7M58mxvd6HpTt7QYTziHXz4xAyQxJawcqj4Na5DvMoHhQfwUAskYZ",
  "key16": "5Q15xX3MpMrVfAr47cPwm6qxBLuAx2Gbw14bPQEzeKPpbCb9GYxNdtAbBoMJr1zfGcjWebxRwDqE7BvaRQ1Vz5Xu",
  "key17": "3K9hRBmsNKCmn3sHrFMf1hNcJZarjzfBgb6QZbBwgyaqGDTFfNQYb1viffVMS34khGhuShoYE6NShZeiE93LrHV5",
  "key18": "238QSmPbnkew84kDxRTSsMZcpVvYJ8mkbw68oZtw5vPg7hHwk55NbqY4MyPY38fqUonPKzUvptW8Ukx3YJbYv2g9",
  "key19": "yHB5hkhh2KQ7x8wTytP2BNL9v4HA4Z2nvjXtT2gCp2jSRfYTF5AfofRdPztPhRJeAXcCbTTgxYdG9LS23Er9kYF",
  "key20": "2gjZ6oMddUfKdSaCSzvcPnip1xXcLiMAEUjSKtnRKhsuQZ2RjXFuKJrUPVR3rJq3wNg1vQGjtGaW45jz9CCj4Lkd",
  "key21": "3jQpW15whySW3GPuPs5BekpYGRsyD3Wf1WSFSU5Ui4CGxzzzsYtzBAcKqxwzrMjoSiEPJmuZuUjFS3wt1nccrySa",
  "key22": "LCdqgFqMdZxn85vbkraAVA8qSnrRtW4GD2uuYW2y1kDB9v9r9szBhCmxkTdzPNWb82Dd8dGbsKRAhGpH6adDUK1",
  "key23": "3M5WbsZLzEvkqyFzKG1EvZqzXYUbLgG1C2aRTKmNrfNNHgTZLwE7J16zYBVm4nECrbXtPfJKyWTNS4nJQLdGKa1c",
  "key24": "zKCrbGwphHpN9fDk5d8rM79PF6PRNU3ddjfYR9bdvoYmPQgnTRx7d99abRTxPMtDE12WZfUdV9EpR76x87ot6H5",
  "key25": "5qMpe8hc7sSFse18XMme1wsAPo3P977Pw6YY2voFGMwg6LAhXajEG9xF37BQcNMXs9QEiHRzW2ckvRTFCuSv1Sm7",
  "key26": "3cnWhyXXee7mfuT6JuYYsHYGjxQMgfxsBeE3uP15LmJFbomT5FpurVZRQFeipCpe2fbyPXbbfPMcq8Pe9Wh4nE1U",
  "key27": "KjGWuxWQukj2J5WXo8h7AFJFSyHKng9x3MtYxDrnFSwSWqzp2UXQVFUafeP27RatmRvpzGYaF8ZkRh8WTzbZYdm",
  "key28": "12JWhiQLQCJXWRLEtCU4cc57jnc6DtsBPPSRJB4uWDX2bASNmV2gdb9qc84qB7bM8iiGWgpeCmMjPmujyAbtBjA",
  "key29": "4KYHpAKGZsjQWiHdyG6Wh1VEPDfXbujoGQ1gzM7P41CSZpAXkjDfwEE9ZpVVdVHLHv7z8FbEmn68g8otvJg3M5on",
  "key30": "3LumGsUjbRSpbwFW4o9jziEfwiWnL92SvWKsHxjyEb8C2mkkkHEiwLrLSPmbXac3dVXcidgnTuCJUno25hUW1FK6",
  "key31": "5RKEWtnvNqNtpUzTpsWCsau2WotigDxBDosNKCgSnbFgBtYWfHPs35LNCSg1G3ouRswFcqye535PgxAhhH8LPpKZ",
  "key32": "3SE1abrEzb7tP6UWQXZNc2aygJDky7qa6wrcRKCxBjoqY1SPW6BKw21xcMvxunMLr6CGAL4LrZTMVtVfvoQprSTr",
  "key33": "5occCDtTVbsAZY1n9ALP8UJCLSfhUy9pCxWjewR25BTbyapwdSv9gP5JGhs9JbzACHoRRKKxpT1ZsT8g49rdPgyk",
  "key34": "XQJgemYodjychS9B1iC6CfB2AfWQuDZAMFUczBztqxppVwfv5dPEwFvMsyEKer4eDV9Qi3A6s5HX1kyouqtDmS3",
  "key35": "Jd6sPqk7yeeS8wQUaYRvqwknfMSdom8WUUG98Fsr8SpcuNBqTxu8h9BTJFBFZgvnCSmRsPXjL2dmM4GY1CLqyRV",
  "key36": "3CyZg5A3sWy6z1iBb56gRuMuAdvmzboPW6Mbvcz3SyYV8nHHpypkxRsDeXA3ofa98UYPby1CJG2Ufvp17UYkvp2K",
  "key37": "3urDrc1vaDryfdoXsG4nmuSsqJTM6L6TNB4UsKHnEkduHuRFz2B7qY2LtGvy8LtWxhDxtMbKGkeXuVxCsumcW9hn",
  "key38": "5GGnbBLQkh3c7Ad1e4xZ64H2zxh5WH8JLBRXGUiq27crFjFLXHgm2GBr6g6fFtGv3VMKWC5947Wbgbqky7QJ71Dr",
  "key39": "AHBm6yHPEb4BitMsYvrCg4MpDqiDbYvwrWUfruQfPFDmoyz77S4RCTMRPPQpb7EzeheEXgMbitcCxAyuKzTz2Sa",
  "key40": "4zZRBmKXwU3LwjVFGvZKzcR8bdWQzpEKzJk94gQaYfkYYdEQS4ioh9oXdcEX6F8ogbSQnaegG7QqBXQb6djGEkgN"
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
