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
    "2MDxMAPwHnjeL3n2yrnRUPxtuNL8sWz7a2WdSz8q2gHHBNNFmzoEpvatfbKtr4SdJUkix6iJozPcribn3asVsuzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22vUyxMTPB7YTfQ8KKXPJpHGMF8V6WqULTEusxPHfeMih4hsWxqk24k8Ht76s7TZngogVjrFXQWz5AzmFEXLjXwo",
  "key1": "37Ti5thgDzG1gFHijwMNwLYMByc8THFTwEUo27p2iumtWZpr8ZPefVnLiR7igvStCgbzZyvQFzL2NjG2xUb1vgbd",
  "key2": "5bHhWpdzSE7F4k99xraQhRVjPnb5n7NF7s7Wtcs7uaQmRcDgDGqxZs3eA2gFJCprY7KEwAMqH1q5XfDcDNLpCbUB",
  "key3": "4G8qs8GNWDaiXoLmYdVZfTX6ukRo4jNbh7Wvy2i3NevMhRaihei2RZPuswAGVN8jRpAepNFpLmjw2ya3jbzM9MvW",
  "key4": "2iioi8HPAVfFVaJcuMs971FeP3d92XR6zK5Q2zb7L2SzBQNGtJ3hE3KBMniccLAtMbp25Ln1EHd6c7imCwZq8QmN",
  "key5": "2fiCERNqSvU7bb2Sva4gXFYutDd8eHUX6ZFR768UktKj4AmQSc8dvDwWYv9fTpd1ewPYVArPBBejyZR3ypyr5Q8J",
  "key6": "5G2FVHKD3Thzq7gt98E9AB1aNX4cYLuL6ZpLCkLHPutaLoynUz2aPiDpmGBXtxkW6vQWduuBwTXLN8gVmdR9mHk1",
  "key7": "36uEKmhHYASPRnXKafgeY9zDUgupMmnkEyaCXZuuzJiEQLG1GLqDDHeKsFPrx99cv8PkDPU3HNjikd4LfMjXN6y4",
  "key8": "3MTHcicLFadazMZPY69z8pFnKRkimzsv8HjmJpUyRoEtEPPCEEZ84yqtMPiZypmM6JgQdYvQie4ZZvwrtWZ281B5",
  "key9": "2MPFQd9qS2V3K1zAcrdPnNwLyBjboLa2Murr6i9x7zsQU3hCB9hEM6AiXgcgb4aSiL8rhsBVfbypoadNHneUJKyG",
  "key10": "ncxyL82jbipbw9wUSruUADeB1HdKk8RyrSdg3vEGLQjA9Yg5XtziRNegRZfXYhUuFgKHfuLruYLCNkT9e4XboBX",
  "key11": "5LHeRNg7djed8rjXogHDBnwJ2wWmCWKaLPr6s3obbvxe3zRw2f3mBErB285bCejqmEev45ENbGEdTdusX48VWPX2",
  "key12": "5CioxRyTKpGt3pg9j4pp8rQSkbitXTe2GtqTkFT3kAvHg5drg4TxFFFcm7sR1UgALPQWYZvzixHAcZFuzomNtLcT",
  "key13": "3og6EwgWDsb5S8z6FxT9MXuGEhZ8Z1Teadg6QgVjva7ffjcEJsyzsTehhgmGjPKDqk46hKVkJhn9Qr9T9u1KdQz6",
  "key14": "37sKkYaH2RtqjQdWv2XQhvQDAWHUFA9Rp3D6Kd8qU95agQnpeXAL3ry7obmMyupnxFBPETwfZmMoNoYuR1ZhUUAN",
  "key15": "5Emq4PKEqQDNiteNV8pLgDmgEAhAJpENzm1pGuMkRKDhoDPVFPxvqyPHzzLic4PkfsViNAqT9h7fCLX7ZhFCWKMA",
  "key16": "3SBK2Ms6wxKAAW2GnFpdNFYVue276N2yLZz8dHF4TxwJwr7HeoW9cMu9Eq8t7JRkCeRdAE5WRjYea1kAgUTuNnzF",
  "key17": "3naykYBsT5nqHeCfQUpqxJh1sf3RYT5CwsrdZgJGme38eZitvdU7afHrg7DXf2R2uAaknnPTRQ1umRdeydq4PLxE",
  "key18": "bjRUZnvUncLVihbHR1DLbNb1HGTsGYtfTKd7PGqfkRtKkwACQssMHcWBKVSbtofwh74d9bXmuoX1RUQVUbqNBQQ",
  "key19": "3JRZVYdJqZ8mKvUyBBLvRwwnyRtg5oomxKHvnTMGXF35w7DeQbD6ud3xHhHimFzyBb5xdD2Qyyu7yt86KkCwzhCi",
  "key20": "tvN2jE73HSQygFtoiTYVbj6g8cCQ7xUxEPJk3QWv6Z16ffyMrZLsezbJ9mLw3sLDEqbJeEz6dE77HmKKJBZbU6K",
  "key21": "5B81AoyuN3WfgVeYS3Apx5c7r9VJRsStRc3wVmZVLUHKQdmCcZ5GyT7gGGEwYKPThP5ymHyK82PnRh6SeUhxpCsC",
  "key22": "67Y28khWrSay7Baf27gWtpBaDPJbLVKNzitKMsyoE9neVLp94YERoFeMdjwX5fUTMse3bpchHkGkmmMvaSxYpH5L",
  "key23": "4iY62P2KigYPUKDVfWPhbstsobAeQcRXiXarcbZGSXedjiGUqvV9BkjyxzMEb6LGCbYwQgBoA79w3ug7iE16wmma",
  "key24": "3fqfYfMz6L32JERMKPK152MzyQQn9mZ1SEk5batiWH3B48vRQy2gNJ6Pc8ajUKQSJSe7TPqoUnXJe2UVRj7VGuz5",
  "key25": "33ttpR11A9gxD9CrYo8ydeECbbYShPr6BiigRqDq9GqcR27nNwMNEfoLKNuxm3rLTStW5sdic6YYxq3CK2FLaVLn",
  "key26": "4FArbjmjKT8XHDNbR7QELVkenS6XJ1SQXZ84RBxL8GBwghe38aUHD17dGtKj1cQ67HSBhkkUDKrVvVqjhkxE1apd",
  "key27": "2Kxmzu1ZWwNa1hNvSxVv1qwtPHBDFgszBap5yHZo2FtRqKCekzihUdKcHbN9RMsxygNkJD4oh7Thmq5KGWVwaMDL",
  "key28": "3L5AwxoMUUe6uW9m4pk9JuxStSyp19aaNWQHvdsHah6Mzopztu5xACGxnCEdionsv6TfAU2CCdm2zxvWXfcS4Wdw",
  "key29": "4HgVFNN29xwcREvsB1aUeLFdfPdyF3LbLfRnG68GPKtnUHwEdgsm75Jz8z3uvhRmHFJfy9ZimNYv5b4fWSzrYznW",
  "key30": "ye4SNqNWzCbFaQap8Gd1hnKBfcsK2uBwbH8xYqA4botMeD8Gsy8iPHM6rfgKygqryLshr7KrSwvt3zkrfRamxmw",
  "key31": "4FmVNTAnWSTzkyKEHyJTNXxzANrSGLn382NV3RkcRyL1xJ62zWDB9rKadfFgi4yNotqRTJrjXZK4qaimgvhR16dm",
  "key32": "2KqAqkeoUJnBQn7J4HW5nF1pZ7hyNffPfNagXWZ2ZfDKTeVCjSpYh3pjYYjqzub4tRqFaHgrH6jrgcwfx3Rempgv",
  "key33": "2G1oV8kG2syQw4SJjFGivTwPhDsaNjtXq1rtBZBDKA81z3i4q6Fec7NvP7fa2CZPYFaHZFsVjJQUGkSX8MU2bDnQ",
  "key34": "232n5HkTWYnXBRo4enMu4tkUcPr7o8MVrizPfNoY7ErFX8xjsqV4AMRzDuU68ifxZBQuQBnZxPWUnb8F2WVG5ru4",
  "key35": "4tFufqvgk8WN3mGEvgvBbvNkmLE28NQuSsd5vnZ2KTACRqZDHgSELWMGMKL7bgfVWuUz926voT1GJEXnJdhE2FPj",
  "key36": "2XN5j7GvittYd1vLqfvJUitiFqgTxpUN8prV53HSWzseENAZpFDb5UUs5Eo5ekZ57j53djQDen8Vt9iVJpdWJxQJ",
  "key37": "zEXHE2fzGpcN4pLZhzoJLcpk4dhj9mTQUDst1zVJTbynSLmkDPJh9LmFcrog5ZUp6Fo1NFh2UzhHS9VX4K3LBmu",
  "key38": "4aHk9BqGQhJ2BNe28xMz3xDzb44VchNmZ6Dha7qoYDzsCA2hWk7Be1QgihJQxzyEuvfjuQpoqrgrXj7VN8ezpE5J",
  "key39": "DhQ1h3zi9LBU565ke21qEDcdyGVbyA4hErf81BG1ySdhQy2X9YqPnf8sBfSft7kAZBEVUzMXoiksQ1nQdg7DNDn",
  "key40": "61LX2vUfyBh2mk3wvQYQrh4eBWun5wf6WrwdHwtJVy9LETvhoGndLpmg8UFPMRpuGgeDsGcGsYUVtfHbuYkYKf1Q",
  "key41": "5dLDMUePz1KPv8PUEdmwsTcBdJgBgcp8viNnsfvmSkZ61m3hf7dGBWKhEYWf5VqxA61LNHTqqetcAR4CZrTv2XrH",
  "key42": "2ADn9aRkfKh2D6FiUxXx2e4zGq5h9GUsM8xFUMpZ4uxiu3bthHrCbzuGxQt1wvf6kQGfPqHvzves7wAtfUyqmCmn"
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
