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
    "5ufSsaPtWHpbtv7C4Qyb7qxnEujkYSZcadznSB6X8EZECsSKzTFiRNRWGTMayrD58Jc7Mq2Mqvurwac22PFxQyMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzRdauDdPZUnQBX5PV5bMizbgytYCXnqfsRSrifgUPcpPt5nPZknnC6ToLJtYdphntTCv2beNGmU8PogWCAyeBG",
  "key1": "4kkmjtayAVoEJK9bKZjvzgjPDv5mmbQ2qnwDv2F918vbj5uXrZmS78r9tfc31FsAn9jvZJ4XfPYcLXYPg2uAYtmZ",
  "key2": "4E8iJGTRVCupTVSWFeZYAMvL6Px4wPhfX864vJWLRyLq6d3bCWCmbv3itLzghGKftCFzQTdLq6GUsqBwpwQHgEx7",
  "key3": "5R7NERo4MsMpFAwmsx8rGdAf6whp4RnG1hHXh1jLdHCTEP1xTuLgwtDAyMxR2Ex3YXiLzWpqWvNaXkt4FabdtCg6",
  "key4": "36w8gkvWjJ3nf9wXd9qaMUN6Rku597Kf8jLPFmLmNrz7gw2zJNcHtxzBpRR2QVXDwQsaP9QKknWokidFg4dF3R1E",
  "key5": "3zo9Upq3j49LSWZTn4gTZLjYsPuUbXPqB5t885zV7wWNicPMzckb2kwvyab33PZ2NLcgtxyiTiXbzSxWrnPsFFR",
  "key6": "2PpdMYG8dNdiqA4Ein1VzdtDZ3wWgFJb1yhZTGPN4RD4MRPBBk6aLe4y2gqFeFNSsMCqVzetaoP62tFp7NzTuu6i",
  "key7": "3bkA5BZEpRBsi3XzQqx3gJ3WwT4qfiodideJ46KbJo8kWaZJ395XkTHjevFYGnT4qJJax8nk6ZuxjDAce9y7hZ74",
  "key8": "3nnCtaebJ19rfGJGqvoVysjavtVELaqd24TAPriDSQgQBRkcSqzT2y9mpDhRY1Z2A4Vg8q4AxB9ugxR9eCxK5ztc",
  "key9": "4HEaFqLDbogpsa2o5q1jBaQXwLMrXxdn1WMpspW3yUsmLtnoD2PK1PXewAW4uRxoxJEFCxRxHZAbiNQzbJLd1ADn",
  "key10": "3CXsgRZDS2SeLwU2Z1GYaBVbjCAHZTrVZHsvfJonsuUpEhz9BC4yHTVCiKji7RAPpoS8j3EMoZuToYMi8Ge3gXwu",
  "key11": "ozrbKTssoDxQhdAPvKg5PYnHburzE6zKAEAvoy9srBmwagZjAYPqmfkthS9B8kQYVopKM2xExNdHH4xepvBdzXx",
  "key12": "3pJZXbPyHUYa8vQfRBHEjRGbSmg6KkphWqgUhQLtpXDSop6XY62QvfYjhN1pfdtd137CVhETMhwSzZ7QgWUGS8ca",
  "key13": "4zQTd6fK2XtAN12ogoBuK36NAzuNqGR3P3Q3C82vbykyjZowTZJYhzbZ6guEXrrSGp67uZaUhxrtkmko87LUJGhp",
  "key14": "4KNU1xHc94Mk1DPQfgZKDBsykJn2Jzt2ELxBMmanQikuYAdo7wBpmfT2YBjkpPzNvKiQX7McXksEXgKzLTVVjtbS",
  "key15": "5zxPfG3Vy5qCGbaUHQSU6uhUb1Tz1uKvVhHDEhtkV2FxoCiaA1nHQorG28umFb3gTmYoTB1szVct7aHaBiLTSNR6",
  "key16": "5YdFBVLaTFDnkP9qATHkAeMktFgoFcWUeTVv2Md6JDYLgkRd2C3AR4Da2ShrSehMSAE4eEESPwA1qCiLYWHrFsru",
  "key17": "CgHZijE9Wdku8gQThFu5mmWuFw5a3U14D2gcAfHK7MXwXDt9PfEpouxRpG7ip72pScnQU3sL7EzGfE1TCqsh875",
  "key18": "4aSB9Sfw6iXKVuczJhGhNciatTrkUDDaWHPm7B7CYfX3faKKHqNXshn7cfPmWWBSwEwku7YpnvP74QWhcxVR9i7R",
  "key19": "gFtJgM7aJitM2PDBSbuZSKahzUkYT1iy5Cwc2oAmNfmpskkTdBNq4PwKhtpc42fuiNk8rRpPpkvnsNGU3J3gPZ5",
  "key20": "2nmjFVnJV41LyEVZWE9XLwuum2TUQxiHxJAw6aa59GnUYy98D1VvasU351a8ViX43iQ7qznfzZPBtbQkHoFfckF1",
  "key21": "5m7kxX4eCWjgjv89QX1FxYbpLSks2e1WFFsv6Ngrt7nG7V3aww4D5WWVBYia3NLUgqkKjfvreBtHmq5xmi7Ltxoy",
  "key22": "4XkiBfzMi2W4c5aJHtLp9ZBWJ3Uu7HsyiTrdsXVSwEo1SNgDTtFGbMxAPVyR5wUhrMd8Za45fnxg5CgCDdyA6bke",
  "key23": "2obW9qSnh8xJ5pCbAgNedfaCVJoA1hHwJANRA2MnNKg8kCcd2tYwtVExcKdRWb4TBFhPFP8bG4TjbETtTXRb16Fy",
  "key24": "3BnceAAhA5LfdhXH8m8Ufww1NbMjZP1e6xicDcAq8gWgLaBB8JLuEtRME8iQ4yBFTBDn3mXZjsw7JDmztqj8ddWM",
  "key25": "24xFmnBLWasd7fFjR4puqnCuXsrHqwc5LrxGfrUeoKJ8fjb8HupXe2Lss65bSkWkhzWD9R6JD6KAyMHZzeuc9E6t",
  "key26": "GfD2nGbotwqrd2RSD6UB84TfXKxbR7B5D7t9nNRam2JZK6Fx63TRuwpAxrXsicesf3fsQuNbLYpTVXDRx3VaKhu",
  "key27": "5sWNZ9AC35wEnnm6gCZzk4yZQBXqnggarDHyPivAdSuTQ7KxY74F6HYyLvgmMtVWjHGhVMBDp1fHCF1nfiHxJbwj",
  "key28": "4PJoiTZa2YcxFzuqhntr2oKurscvKGHo68Su7m8NRsSGH3mt2J6bgFkDtfeLPPr8cgsFFeHj5HxG9HDW51PKjRay",
  "key29": "5vvicZ2h89wK6xihQWGHqFDXQdWsTE7XjSB97cfHxftrstWFEycBqnFUfzY4PMg7kUMBKvhjheJ4LGx6uKjBwez8",
  "key30": "4L678JWjGAyLxAK9E82vPFwnX1Zmps4sTKr6aGW4YNzNjwj6vmycPFccRifGBBa9NBYQDsvBnaqL7yTUzU2QG4XN",
  "key31": "2hHHPNBWSVja24uXmhLgKp4bYh3eRzkEoXuyDvKAzSuhiz8VPbZrsBMSAUkfzN7aknc5ZpCdKeQ42CqCYo2VEsEg",
  "key32": "2Azfd21ubEMJuhao6KCiuJLf98Moqmg6FmAa4CHrfSMHxBVQW3Wqqq8MsbnXDTwrk1eyhVbjByY31HYtX2FFSbEF",
  "key33": "2epA3tZ8nx11jy7Y3TAvKRSWwvwLKkyo5deKKBJYi7gCRnJwHvpKASmP31AHQjUH2okGKYnSgh4tDKRWkaJDeXMn",
  "key34": "3ra331uFFMwwh1ZLAk2RaqerpYNMEyEXDURCZk6bYAW1tVzxaSWHBidnYRrgLzqUamPQXv9z3HNfMdhnNEhFzznE",
  "key35": "3vFNg8YAiUpwdoGNLHmDQ5CiiBzxFWz8EHqfzXXs2SBNYEYzAhWXxe2C1e5ouWesynuUoEj4KRAanqZ4tcEVKzqB",
  "key36": "4qZMhv1DaGNQ4Yd8qFtexpu1Bcsf1A98dszjVrR5W2KjBESKnNrmnHSLAJqUpN4CQf88ZpGNXsa3ut7vck1SPo1k",
  "key37": "39n7gcQf7ZMPKgxgwc696T1dAvN26mC2YLpUgBtKVMVZskEb3e7AgqmGwfwexeHBpH5BfWfCUamBMFhfxuUzzbep",
  "key38": "MRR38vshrBmeEwzhuxvoquxJ4ugsfVp2ZAByYFmhjSLCyeyvDT66pThqtKjq9zw6zugvs4EWgqL4dQQj7fzHB6i"
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
