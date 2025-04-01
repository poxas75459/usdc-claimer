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
    "2tk6UtSUdvbKWzJva8Dqsfw23NGJhHqb6EWZiNKQSusxbQLFW6oEoMHwbRGHSiBjdHLe7R3XA9XtG8XHLG8sQtJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1wdR1qreBq5w4VvXMRu3qfpirW7DbjBRtmjz8M91DzwuQhjcTLx5bVZFFB29CHvPiGHfic4CYU6ipUrhDaVwnj",
  "key1": "3Y7CD9rseb9YenJW8UPT2wZLHXiLqRfrNkPDazVEw6jHM8tmszcVMWGcPfPuzE8EK4iqqCrBct9UGDLmavTSHeh7",
  "key2": "vvhPU5uYHqfrEhGvJ6efFsvhpnqe1sKm68jyMWvNg3WLV7r1wo1thgUY3fryZFUuzmAhqTiUEnvc23YJ2RnsW8P",
  "key3": "5pdpZTB7cBMH2sNC9vqvSLr5pjuSGUhPV2ignSUt1G92MZWETnchP4otJ458EFFJZUbSwU6qmnuKoQoZxM2bHSxc",
  "key4": "3WxG1h4MGKW9mi1MiUrKyGTEg6oiV2af9msD76etDrv2rHp891aSUEKTcLWWddAoxbs95GRLFqa1ubZWgzzgKZrJ",
  "key5": "5QTN1ycng5hiTceSn3MTc4Wtx5kfDRfXj9MVAeLWvPCzJ6mP5uuwSBM4xemxF6YQc5v2AZhFwkEhBp4ozq6XZtz1",
  "key6": "4ZR1sVpsGJD5juKLaEKXpCneR6jNwPuEAuZVfV67y4SfSJ5xD9CueGEt2q7dD4razGymGtBCYwHkeZua4qEGWHHa",
  "key7": "tiSG8DGNKcezRZWEsuqRGHF5KPHbiMRtWR96qJWdPRzdoM87ox4HbqF2B2WS6xwdUBJiMFa7v7SRvYdCfnF5nEj",
  "key8": "5JqyAHg1KGvJXHfeRQA3prKz12WNb8hRzxYrDjeSVRvFqbkqQ7vTkonkVnFSQpz1uKG2as1tRNx1LisUJ8Uqhbuq",
  "key9": "2uBvQFtjEBfbNvkKaJdoA4B3c66qc16HhD6D6EnyHX1MXofzBYeG8CgT8FACJWUHp1TLcbj5JgD6pga3BVLZLnBV",
  "key10": "2q5TTvabMHQAcRb9cZujfbikg7p5YHzF8C8xGFL7PeZRpY7gWQzWdAegdYy8upjzNvwAxD7S8TPurYXYJgwupP5P",
  "key11": "5Fsr9oyzvkBc9MgyY2SmyUmTVyEcgDW3fQxTSYzvyJSSxt9J6ucb2bdLAmbZ4rLw4W76izEkgWpBU6mk3LY3agMF",
  "key12": "2zSvWAwyMbJ8Ki3f6kUwu6C4xWywFjyMkMdMxS7h8DNTvPWSJQPfV99a7YVvfZzJGpKWDRt2thWTQ7hP3VAKz4sr",
  "key13": "3NY9spUfFMCoSZbPsWHktv6e3LDouc9NWDpjCqqpWa3ds1GbZqN6JpQbCHA2H1n3TqAMDruUfV9CnJTvu4eCtBqY",
  "key14": "4zUcvVGMaSSBmtvxyW4gq9G8mm2P4EXBpxfp4sY9V3kwzeiV9BsGsCsQuhEjhRkRpoVgG9oDVg35LzU8DdLJvFGM",
  "key15": "vFSgNpNUfHn5p9QtR7f4vSD2FVNhrjyWFYNFMP1QLD1gSFPeFgPwxmUoJjJx9JPFgqucCXmmTkhutH1gJpjChLa",
  "key16": "4UWNmRr2EH82wkX2nC7qbHWibSShtZB1zPLMxsfuH6nYQ8UDuehvY9cefoaQXAdE5kwZNPRPS6bqyd1QGHtb9Dgj",
  "key17": "2qBRmfBAwso95JqcSKWjn29KXdoNDY6By2b4Gspy73U4Vkm9XiKv5QeuGRXnQaUwBRGzryc6KHFCu9vrRw1jL51v",
  "key18": "5SpXWJKvyRGYV9AtSE2a3oAqQ7sz3CK86HRK1ep57xseF57gAJujg8xaC2qTeGX23ZTN4vSSED5r4znooqUYfEJb",
  "key19": "3B1gwzMjVFaK8uLXL1XrbiVkP9E1fTyDwBVB3khYcdmkddVjGVQkJqL63yyRFPz27FCvBCLeYJEwzr4NuSSq2YXC",
  "key20": "4U8QRA15q4eb3aWvtXiD5Zy8NWwcDUS3B5KQiJDSrwn7VNguhKZVGJcYgScKbCSAbBafdhW9z6CYdAgez6nG2MH4",
  "key21": "2UyfjknyaKRWcmH2QGqzZpMzoit44vzKtiTqqZbSp6U83DYAUysRHvvuXLuU8ChAqA7rmB1WbpBsgoeiDnvkXDGE",
  "key22": "2mrqekJbJo1D2SnXbFS3JNwx6svpLkYkXaSJXwqSQUoBTuJjFdAFNag63vAUqJQRB6rqjTkvPh7Kp5DqyKkHVHoV",
  "key23": "2TDpE148VM3HqZCM2PVzfbpTiRa8T4JiyXLFTV4tmXf2KeptPkSQTNLDUvzo3a1qfk3TqiqG9MXoBR8u5kHrgu8S",
  "key24": "4Nmy2ceCqtGts2XkjNpWqFHh2RFsMKxasAJnL5SuXDA1nC7KHyAgbo3c4MFnvXks5Mt67XBYRYoYQNJ1LscWghPK",
  "key25": "4yrAzawH9DNMFQisChJibtqXNyJUGke3aAcykeWD6Xbsd2q28hfXNB6rZhbuHkHwYf4umNKo9q1vXAUjVjXataCr",
  "key26": "3s8TxkBodGJ7jjjHoyUTwMh3BmMkc31dsM9exsEup88A9xC5kWkzZrwC1qyJCpLbyRzRi4qvhq2r9ydKc7mGUto2",
  "key27": "236vq76bqHLnPpgG8pFUvscQVE96q8UowLajzaeYWz1ZMwPFehEBgbSvx9y1N99FbnEtJwzFAfkboQVh7m3VsVKy",
  "key28": "3DhhR87cPfPob1obU3v9TeiL8htPhXP6UASNtau4TJizc3BjCWagDCLpiqRHcejeeyeuxinAREEbEVX7cfYJAMpS",
  "key29": "4HvDKfz6ztJYmX2tGS26RR3Se8m2RzTZxzz5mQKiSN2dBTSoWjDpZz5k82E9bRkNT3y83vwyysLLTaMQhqfM8f59",
  "key30": "4cmwhVfaYeiaVtGS8Xf3biSLoz6XZrGSmHZyTe9L3DkMceZrRkkJX92JLKfkRfojQQe5Ht7FcPeYDi9ScVY7F2HN",
  "key31": "4J3LHBnHr4k6JaYrRAcLx7GYo4Pe4UUN3Fic2kmjvmPUk46SJNsrSFfvX2QwzH3ex9RCqCe4meYx3ePqFtYuQ4Ve",
  "key32": "5bH7HBE8tsLVM7ncnPQ1K5a5Qic9z2wrsfbPBKaKiA8AGD4csiSAET6eAWdRdPr8juomLmFrW3C3p1AanjGgkEk9",
  "key33": "1gzjm23v7ZorBHVw4KcLtQyx9ALNRLoqVLaJFFKeyszezaRKNzmzCaYomRTeKGEdHEhmhJbseAgg4LxsMVwfSTH",
  "key34": "5J6GcMxtBrvZqjsUkNav2ht7zS16umwyKuFdhVBGSuYHNoVQJ9bG2CW7qKSfHtt1rv5xxsdXMzyNTYjt4gCdVmir",
  "key35": "4oZ9HWJXwpJYagRp8SaLUt3puQxNBpgH6iQr4X37KEqt1bq2PnaE5xnmkoCXGu8ntMJhGWDJtQC94raNS8eb7SHS",
  "key36": "598kLgL5zBheuNLspNSgtLtJq62UZaF6U3duFS8gRUMRDXcqqB4cy5J6ag8WkxHeHGuC56XXdp8U8ZTG7B7sQfjM",
  "key37": "5Wrun6a3zHYKn36aLaABcmFd6xGdh54jgunwQnaKM9joJxBfonYnrh5rTgPKa9QEmqrofwY28K4TAqpnRbsiqSo6",
  "key38": "2HiLK2YsSDjRb99SKgxi1WDmRGQyu4QxMoeG6HswqxuSiTWrmWXcwBERF14YLurH1HCUc1V5HuiXQpdnfZbHmikg",
  "key39": "3uqxRqmVgqfcPiQnep8jmWtKDABEbHzwQL6LqdA4tFQ93JqSq59JvDgDstkvYXhk6GFTUcR2dkdcuMUErmGVxXbj",
  "key40": "4nMH9a7FMZyX1MN5Yg95k5W7kqcQSAQQnJChuKGktDiXHX4p36qx9HUveMCv6kyf1GaHB5HbWVHrswj5amidgm2u",
  "key41": "5vrAbWM1xMxh9kvhXjyMkKGMRAsyKFR5PUcX87yon8c7UbUDKds4GALpXDqG29XqpL922pbZYgLfMenSgDX46She",
  "key42": "3MxkzNAduDZpT5qHFveCXuTHfxP4MbSLGEGKmcZPBbL7SW6N3xgFXbxCj3p4xUL1rMfvxtUt5fvMGMQ2QXtK8vYD",
  "key43": "xAf4rfdfR65ETVPtq5XhasjgLmoDztth3FgfC3WeCEu4fXGR7x9PpUTHXzxRzYE9c3XnboZnDx1xYcF3nkX6ENm",
  "key44": "5YhyBKBFTeww4ajYyymXyUoX7aEitR4EPbhZBAZSjcwJTfw7ijck6TKqJPXLiWnYn6xUmkREcHX9y3M1t9ukQatJ",
  "key45": "Wk8QYhdWiTQh42KGTyH3NkFbvZQUvCcn5BwP5mPRN8ZzNoy5rb6P8UJxLipYQ9UyAZxu8wovP2EUYqrcjdeCPiq",
  "key46": "3k8XwAL8M3WGRo4hQfRFjpw61RHmGzwCsEfe6PXCYN34jX5rVUWmSfrAAG84WhyTMpEWmvFejKKwX2hFm3rdt6EF",
  "key47": "3N5Yt5NNx8qd4nirsvHMB5mKNk2S6XXrK7Md1x28VRDG1FjBG52825v1mjvinikUx1o7RPu6XdGqN8oRMfqwQss2"
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
