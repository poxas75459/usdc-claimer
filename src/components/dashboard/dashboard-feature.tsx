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
    "2HgPMNbtJ1zBj9AxvaDhPD7pkQb4JQybS11pCJjYXeGLGbSzDVCLBNCiAdvsTAxPHwradGebvuscDb84FEYVQYKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUsw7MiyCXrJ43Tt8SWyE81eCJckLTEp4NrohoVTRXi9rPx7zcwqBwgGBu3AKvAHJNsL2Mb5uLdBgtqjJxdkxu",
  "key1": "nCvi1Xf7AJcWfTyQzvzGZ6nKeDWxv4HSn4WViD5P6woFo92Qi5MMAqLYehSy9Bc5VZcq4Stqq3AFzQFNwWQdvCa",
  "key2": "3o7x4HRTK8SXXWP7vSwBpNxYwLASLkoojZ8CMdwuHwMpEkcwvmFmPzvbux2CBqpgGaBEvSK88CRvRWRb2d6BtJ2r",
  "key3": "2MNoCaMk2mcsGW8Boc4rthyVhza3r22H6uCWcCPieXtoDZGqe8ZTCRoEQ9Jjx9RdiCPSRPWnWsoBTwDqJCjDSZea",
  "key4": "1D3rYNxLySMu27765Fbf65Gn42zHP39rwPcpTkkiWpjWjx5yUzHSYf46WjDsuSwnfAdHtmfugh3e7MKvGaPkbxT",
  "key5": "5BGv9yW16GcyMiEfsextmQ4EkHqKqo3JULd5b7enK2cmoBjDiuw1iqFamuEb5ykP2WGVc5pz46gg758yaUCsFqhs",
  "key6": "5Tbo56t5QHYDemQ2vD6tu8zSomtTojFddQkj95H754rtRgHDLmmgduNbnqZLZ3Rp1uaq36PAnKF9VXG5Mb6HSEj8",
  "key7": "ZEpz2SyVn73cf749KC31YFqpnF76Gi8p1nbQg5KjRrbYDs3eGhkGcUhySr5Fc64Zme6qjbjSm7id28qWq6sN6xX",
  "key8": "2Gwp7bzxZz3wx5oXhATeueLAXEnRndesQqq3f8dDzUG8MH9zAs6KiW6q1JtH8sLqAThtyoMkEk3Ly6zeYJuvPiZA",
  "key9": "dxfpSQQXdKFwUHGKdpBFA5RiJKw5ycrG8NBV7fuDad6Zr8zM9VWNaRmGDYbJdxt7Dr8LWpmXcvmXnaN5FQBadPR",
  "key10": "nWKTsALgWx58MEZCvr4mQ79nmvDvJW3Jx3gRzDdB8tECQFvAYBs4f9hkhG6GKuHFAcVemTAq3HuPFGhpRCtrz8b",
  "key11": "48NhYLBExwnSGX1VPgEGyDV3cNwKkvQxTfAQDuLq1g4ZvWJwkdJpbRmSy7h4SYUjmARaVUaZZCCWETT8UfdcmKh5",
  "key12": "2civReufCehB9Emb1bGwQDQT4w8U1VdB1k4fkkXPWL4QE9wrvddZbTQajFBpPGrhirKJ3u2AZyxxbzen6tPKzyBu",
  "key13": "66wCZtVXzqJe3rANe4gJwWQKv5cPxCwT79SQfV3dDhoQmanKB2Shzq4NCgNXYBCrCic1W2hhjiEWZTzwdbApbZLz",
  "key14": "3eFhLHzsvQYbqZ79CVyUwxasDA24K7FQCaYg7Nq2kTuhK2AkDBAfRJhrAouYDbVQPAdbGkw5pDyH2rQ1cAus2xT9",
  "key15": "2BkSvfbaxwP61S8AafQcbdHF2xYerTTuSp7ouQvyqF48AcxNsmcGkN647V12EojJHSD62PacqiTkuTzuJZDTZkfT",
  "key16": "4Mkziu7Hdvag3AMfzX9w1w3w8RVRVZyTLVBu81avj7x731zXXyb6PMCqZ9eM9p8DC6vqSA3UBYLxqMwBfbBXSubW",
  "key17": "4vFZcubQsjWycn48Ua3HecWSVZgV2AaRK5QKP4ADeFu1Pe2goE8JL7xzVUssWEp7vSiwM9QASeKhMFBFAD2Q1JU2",
  "key18": "ysvB3ZAs35a9ifg9YgDtjAiG2dv4e9duye6AuaZpQukTc4r54bTmKNyUnxFeSJ9bmY8LoBgFDKS3KNBqFdrGMoF",
  "key19": "Wg5Y9vke9ky3vxqWJrp9NBEH5ceeNjNLX5YsDfrMUVz6CQBeYxfBD558fRt5mefsTEFpTHaZ5626PAUmrg51uQm",
  "key20": "4DiqPXnoAK6wasM41UtwEjZqrTUTVCErchtBzQY1EieWqpAm6RjZEFZuJjc6Js8dsLKnum2rg7wMyN3xQ5qHP55N",
  "key21": "5ymRcFhz23ypboy3a2fyPFTvDP9d766C5maUFmhLV7xR6r1iNvs9Ynx6qrUezLtUftmUhydKXJ3LgSk9jxtJ4paj",
  "key22": "zNtZ4apZyLiwnT7ED9Efvmz5fN94w3ykH6J77XzFvvU1ydyEhEcCbFjoTYHKvjXFscX6LzMcrx2z9LWCZ2HU3KE",
  "key23": "4xGz9tV7U5hh9JaNcb5D8ginKGvxRMtt7rAPhT68FsfXJHHc6Wk69BBsJZgvqKejTjJwCbbg9QMKmZSH4a9LhgVT",
  "key24": "3Ju9Vkb5XdRMC2miAP5L4nXqscr7vZuR7XbgJjtTC4z5sKB24vULpKtbN9d5AqWBYj712Eo7PP5FqRrnsHyfoCXg",
  "key25": "1Qxoh9NcQjkfwGcZmyaSR4oRVm2esbnrqg14oBfJ4tuyFvYNodNdAA1FPBVVHZx533YAkhnfhigmFGzDM51TbuP",
  "key26": "4MHMAmZcR93mrE8hQRuszXgmrV7w1Wzx4k2wv2geMMihUpHVpdASjub6GUMMdmNbbA2gjX1UScgdQqmJJvEbhfP9",
  "key27": "2LFwKFhgDLP6eezvpjeiWNLH4Mt1A9SDhTPyP1xDWS8XboAeXDvCnqwS5ogKeE6cR3g6APqJF9oJhH2AZ2PTSDmc",
  "key28": "dcSEBdtHjyLDVoQQ2YzP4d9i72XMKRcb7Fs69whittoruHHCA4JLjGeZQcA1HDQJAftb7RWxGr9QW7tywFpkXq6",
  "key29": "42M9ktchgt9VmxnXfZ3oDHAZnR6m9xZjyZRjQDNfPG3aHPB51rfLB7xnHUAPYF8yAnVEiuLdTnxEaTp1jV8V53bh",
  "key30": "Y1GYY5HG7iPZsnnB2eYg3iTfqHGSYtdMB9vhA9Fh4hefXKdXDj6Re9ZsV8tRfKHQhH6HDVwEbzZjcTyEmSYmqDk",
  "key31": "2fFmqrHJ1MijtE8CZaX9AiiLdDCPbedAVTLqm3xTLao8twM5hjmUAvLzHHtnZU4R1bT7VaRDiLckgromJbkNZS6x",
  "key32": "QsPam6cyUvwBqAAGbGUWBydZq7TUwrdr3kHFWsrZz3kzm69SWQdwgYRTGjLafoNqyHQnmTgJj3ARsLbtd2S3XJj",
  "key33": "48ib1g2HXEdbci9F5yRrYbSTfashRcrgZb79LFJBdo2zaoizpTdWN1MT8cu1BpjkArecUoev4Juigoc7CULny74s",
  "key34": "988WhntoTSD7aPU1wBKJs7oBseCBjMQftoLjJ1m9E11F5HfQaEjRUBVyj7yyrvdwpBZrUHkqDxtSkuJU6oc2NCY",
  "key35": "5n7T88G19cNoGW1QKbApUefSba4bW2ZeTa8SHYknsbrX1wGvK8VcopqGKQSYXuRmVwWbHnqegpWR7Dp8vhCNk5mf",
  "key36": "1vope17kLvfkEFHKG8UJtn9bmYQvZGjU79zNbFmn74tSoQ46qwNLpXMak9sLjyfZG2eQYNnVxocLxdKqTqYcQsn",
  "key37": "5r1BijFgCvFFQGZ8A5vTHo3iPkjGdotGGi7SvadeVWrUkQkDRE7nHmc7uU6vkp2gr8vPwev2TESXDQ6rebnpZ4ew",
  "key38": "4W32BweEs3jtpBQdkwtKAme39wz5qvTfmhjJtzQWTgAHkuoo7yeheFrxP9prYLFKJSXU3szZCDjgDpEwPfWciHqN",
  "key39": "wXKNhj6ztqxdzmw62n4keeMbM4pYzJd7gBQkZHfC5L8z7Z1Bj3Sc4w8HygEnD7Y3rq815zeV4LMSjgbPvToWgrc",
  "key40": "wMdvguYcQPv9ZEQ1skT4bPUz6WdYfwu4gA1PWBzyfBE1T7qdqYESGaogR8CYpEm7hWs1mTs8R5vsrP94Yy1xtbY",
  "key41": "2UKFd4a9n9NKNuoiedYFoQPgfJdpbxGsMmstcu68NedPgQgFBz3wrNgKW8XYXRd3jU9pE3DEPUKPv4T6a4RGcpme",
  "key42": "3BHt4myvZytt8rAoasSVzLEWCpLT445UeUPT5BGNhhsnYDDPCws6cg5BAx4hmufoNHiJPPwCgVQe2862wTch8Ccr",
  "key43": "29DmX14rrE8n8cwjcvRNbRm7pbSTWMUrYf1nS5XAhaBxow9gPcjhfz4A3GZN8brT8XihuXhfYk7GMgvb2kqzZono",
  "key44": "5xeG9tMHHzVaxD5NgqUDDRsj5T8BakZQuA7cHAvr2a4LbFG2diURstWxcv5MBWGsFa7qQbJcVBmoeAE11sMTkxDH"
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
