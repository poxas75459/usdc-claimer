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
    "5GkRJoDe5FxKwfsCPxz6NZu8VQ87m8nktfB8JmTz8m33jpe2VFdKnTY4GMAJES3P6DYxc9JJBWUoXrdj7GkZmbFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxX6SmT96vwGGWGmt9nRgXRpN3eSpfUXwsNF8eBA9hNfdGmjHvMdepXqNgNt7k5DBEriKHGe59cMh7E3JTzbhpe",
  "key1": "2d9qBE8pgM3DVDSfup1zmqkaHsMvvFTK1UWkpe6Ccd9HB1kmWxd2NGwEUzQMqcKRgRMLHBJb6AYXTWhLTvFKo3pL",
  "key2": "yEbbrJGiFpzYdUa8jnaxenafknVCqKy3TbmLTgdwmxY13dBJ4q5hzPfeJP8eVDe1H1efob4KjpQvX5a7nfdNYR8",
  "key3": "2hLRWHvbgFEJKQ5vEATfnqQYx9RtxmgtL6e8ae8VzBygbvHMqmxGALLFKTxC1t6uhomRQjkG8o2uT9LLWmtPXYDJ",
  "key4": "3wQMo7ioYuWeXVS1eqFyswzAd2kKB5nTrFa3uQ92xLQabvxT5cdXZDCB3hKVRRnYPU6pAmKd1fY72T4cxhdVHsuy",
  "key5": "5gtktHvzCwE81tuG1HgbPwKzqR6BKJ37meH2FzhE7YRxA5wtsmH5GNuuQyELQkb67jAPyNknF9k5uiyM437gf1ZH",
  "key6": "2ktkgS3XQaV6WuXgpVdffsq9rWWCFBGy22jGbWsmhTFGU48tFjQbSuMQVVmfaqchfsB7zsZVwFBCZLtVdWyNjVxC",
  "key7": "37KEbfTrqPeV4o41NHRGpCGdpmq2ynKWXinC4zLsvc1Nf435vx96UNpAaLUMJowxsetEtpiMSKeiHAmGBjKiAcJx",
  "key8": "4cSebW5F1fU5zsMJuBM7ysErv4XRtAhqYoJrNNKNXYgrAYKyTtpjgqzbVV32HcYeVramVUhNV36i4y3WTFo1fwqf",
  "key9": "2FiDuoMwSuR9kkUaorGSq8cEf77kRu7s5BSZimaaJRa9JaQbJzpWQYwJrFA2KjY6u1bq5nJEFykMMk7p9pBkpvg6",
  "key10": "4uVPDgnXDBLs7wq7QMDNArSG7DMqnKR6x9k8J9UBUNaCXXtcJv7Lps8oVqLBN3B7USPtwg48GAK9peDy2jjNsgwE",
  "key11": "5c4sJ6xqr6Y2tEQhQ5fa8HLLmk1YoHHM8bD2YfoCVeUkoGBtojYv65CQx5Xb921XY7k2r8fvBpKd6bA5ovNvTiPp",
  "key12": "VDzUyNxeabvihnN4LwRK1EKa32q12ArHRvRsWwTytyexo7SzeM4fEz9pKDVceQJpXnSkccpatMUYX1MZWgX58CG",
  "key13": "4pix4AAQLqy65zNtD37gLwgYp72xAHwUTnQRnz4Zf9e8232KohRHKLYU3aqayvVGA1CxPboysKxtof5qnmHRUyAq",
  "key14": "27AScE669zPgqumyNqBAaCoZfsuSi1ojGAHjj2CXW7tvu27L8hmPUy77QVYsZKCTYmd98meZKi6xBSh1Dh4g4XRX",
  "key15": "4JctTSns1dkFcYKToD7zy5Kv1vjs1pqGtBSbEiscBgAbKV3hQ23Cq71gDKMgXHsZhotQVk8yMwaGFrRc4JaxULAD",
  "key16": "65m35svgc8ix3s9SGdoZJz4o9PJMpcNt5DFXEcv2rcgCUVcaHaXkrrawcvU6gr3FzmD6V47b6TSJcQYreJeds7rh",
  "key17": "2kzaJThmsPe6GJu9rsqJQQvyHk1wkkidgG9k7BvzFrg7coPnz167kDM1GGNUNNYqUKHBu2EZPMWj5YonFVqHAsMF",
  "key18": "62ChrmFQ3cGvEogGHp1jRiEBMKRNr4cWfJEvgCbTgX9hMdbMLrWxXDfK4QnU9gXsgHbGx2e7dc1gvD5JjYmv68Ki",
  "key19": "59xVJJCBvMDyt1sDcZTBFhaucAXJi3R8SabH433VEGChFaQNJuBEByb2MLW3m4LwV9nwGreUFf2VY2doKi9k64wZ",
  "key20": "3XxHpcqQrevec7WZipY4gnNaEcUaN1cRmuvE4zKRvFgr4HdNbX2feoh3GLKzqpUxgwGnRjnbJUDxT5qRhL3Tiipt",
  "key21": "mfUEpQK8e4J3SZpDiJaSWcVqX24HyEZPrLdm793YtCyJWYdDASx71SaVUqEyfj52rF292zTyV7ha5LaEDPA9Bd8",
  "key22": "4i9LtZfuZf1iX2NRV6GrwFkxFVzxQXXsFJ3azKaXdHB7dFMJ3YCHsLrjRHJWSRVKoERX4q7zkDPRLpDLHt7uFanM",
  "key23": "5RMfei94m29xhmi6cs3A771jUSxd7c5ZEcqLHypGTnppWesWncCV9PLMSm6CWxiLAB7TyJfPqbmRFZSAzfKib4kV",
  "key24": "5DkvCTVDE1aSNoQzJG4E9Dxkcmn3AS1ks8h8dm7rRETt74KYsyEJun2RKmy4Mkak1dRoB6vmzSwvBQXNUhgK2Frp",
  "key25": "AHLJqV2H3UaTbkYpbvRqXtWGDXPPxNvjXkZSP2EUcn6JVNfQVP7YSi52JHUr4BDYwFNbpvADZGtg6Cbb8znRSiP",
  "key26": "2RVWk9Z3VDi6XXfoJ57uiC1a9vwoFSMLHfwE3wX4JYuFgpYmwvcx8oRz2gqGPDZ6rVHDJ2ULFcdRX4QnePpqqHJf",
  "key27": "5j4kC98KEqmNsXVjESk3NrdPgLzocQfB334VkLCxPwTu8FTg8epqbFvaqixZsrt5EhePz7huKK1HbLGdYohefxjR",
  "key28": "4YH6YjgME9hNv61EonjmU15azhoos1vDJ88r1vNCYE7292sJfUriRDfHLWxJScdKb7tqVj3WHePNMkT47dR8K94k",
  "key29": "3BT3QKMftMsot2jesZ18D7KEZMuewuoPSbE99Rwa83Tmh4g7HQyLtb11kSKe1D5X5iQJMqeq5nSJ2KjkSvao56Fa",
  "key30": "3Qud2JXfdwmAjybYcH1Eub8p9wf94uBMoFDgCPJ6wrWGjshNBTCccbuGUBbnt79RTGXmdRFVJMbm27DRJvKF5cA2",
  "key31": "3h1iwnhCn2ygtuLaKZkSSG9CE4cUN3u8S8Vv5KzwuRdJZsnfska3D63RTPRUiMauqaWFt16EBD6Gr65LHKSpjFoH",
  "key32": "3ALHbg1dSFGC82VTTF9tK1b2udfUq3b4nmqPiVBktYNZnJnrGSLbrAAjm1E9f8e6MtAwZbwRmSKZ4XU8xWxj5Q5V",
  "key33": "5akFYmMA6iSLHYP7PnNPw6u4akMstjWw8o8ydCKA5ywAJihvstbCkScFFtVrnwCYQhVh3mhzowBcc3yaJn5uc16R",
  "key34": "rcur7C9gn6f3QjwuWKNbLEJ44D8FmhXS2gHZ6KMgea9cMBaAqURVe9n9wHCDQx9UZTjLhr7TxUEDp5cwiCDUexw",
  "key35": "4rQRd21Na2GbQ4AssXKP5TAgyiU2Yav2W8ki6H6VBwgU7w4zAZbV6hwFwD3wg14HKijKJ1aAZbCbdzvF8mJGDKC2",
  "key36": "4b5brw4VLQePdA2WHJN61mogy4mUBhuZ1ufBasEShPkQkzCgNVeF7mW86PV6vtZKh5rKLENEiBB4zspG9tPqH9X6",
  "key37": "4bfvkL42Wo8DToyaSduQytxU9icAz9a4rwXL15TWdpTw4zMQPD74U9uuqqn1UxciJmBsKGNJBmPpeLHU9eGcYcCD",
  "key38": "3hPVKJasqWp82rCCNK6rgU8JmSDYgdxVu3WmoiMmMEcA5pxJ8burfUHR22VTY7eybJ4knQiHoSXMGHkeMUuHAtNJ",
  "key39": "4PpNM7SPQtZvE4qqe9u9oUJvhmTu51UQjgbqNQyqQ4ZnoQXidVsqZav3r4RfhNVbfhMvUftwk7AiZnaLg4S8T95z"
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
