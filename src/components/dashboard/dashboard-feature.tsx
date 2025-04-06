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
    "65Q3dZn72fS5hTfnPnfK21SE1q6oP75kzKR4VV5jShfVWkSbPmBtHSBy7oTenQr29k2NtGVP8zTR8rzCCeQodQZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mKXn7CBRiTuQ34ETPnrqfWbC2eHtMTbonhG2rAqZ1ckHMPKW4qy9LAQXpK8SjxFNgoysBTf882ujZzUaUd1fWd",
  "key1": "5JhbJ3VShdPV7cqRVEE45cNf5rwFqbHdYNFy8E3GAYJbsE9jbxG7LPJgHGQ6pMvreUGMFmsS5LszrwneP3ETMgzL",
  "key2": "3skxcExPZQVUBQNJQtQt8KDkWbxukPjGWFM27U2NDnHLtWfPE8foVV4YyT9xF2U81yJ47P1g1rAH5FpGamc49fWS",
  "key3": "1oRRUQbwc7NUnPdqse5wjEDVZk86ds9ryhrDuxFQi5Gk7eHyQgfYQdpjqVVxvQy1jUA35Qgns2duDuU4U8qN1Hc",
  "key4": "3HxZoUzb22D5ow6kccfRrtWHWxUDmWAH8TrW1ig7uG1RDFn8oQSLQKZuFtgRejw9BY71wofiVpJKKdgHfLWUgRH2",
  "key5": "62ZVzYE2ZvHqtLbioiBt6VfqTTbeRgf5WWjzqwTgku1eC2SrhLUTiWC9yzi1KtU4gBv6H51d9XW4gdzpDDuuuUNy",
  "key6": "46QpJGtFBBxzj6G8JcJib5SqSR3Yg36EHU1Vm86usGNRvy1qKrmeuf3ZpdDKGJAzAVeSqZ2S3om1C44KjjcqRVm2",
  "key7": "2nYL6Xd4So5WZgrMdsjk5WCLJ8K5ur5X2fAUFcwYkJ897rxwYd3LvRei1wKyhKipCab5FrHE7CPi1kcS94zjJekZ",
  "key8": "3z24dpcqbDmRRkDtb176mPGXbGpCkpPigyE3PTbKBFeKC6cSxUi4vA1VEiYWs1k8T4WVPmCDgMDoNgLKmatCjgjJ",
  "key9": "5QJ8Wgt63kYNBX4ScxxFMFmaKUoa26SYxenWfYGya4ZoR2aRrr7s9XEWRABcis3Sn9rY671HkjVJbwwQfgKoTDtV",
  "key10": "34MGjAMwJFmiMvoBviMH5Lt8fxEJwrSLkwq3GTq4uCvkJMYoVoHH2VZqhYhKmQMRETNeFd5kaGDa1SA6umGYQRrn",
  "key11": "3gmHrmS18AiUoXGRUdgSuDT8u35DBjrypZCCyEWykhU6iqSiUjisC3ddrdyfxooxK35KUCNGKvASLkBRnnvtGkg1",
  "key12": "5aZ6sLKdu5hBiUaUd9AmesRPYeCPnASC3WHq1BvFmSX4Hgi9AHMNFgbB3B7cy4VkMkVd9ZZKM4VDQNHJcVRAoVQB",
  "key13": "5PMyJrefKerHTHA3Lb49NaLhLtG7n86dbugpRojqAK12smvuTZWgfUc4HbC6sDHy99F8b3BiRmZqqXaGu74GBjsT",
  "key14": "gnWmU6Wt5DYjiabhEX69vnE6LKKECL1vxdtRnML6cyJVg3w1NFHjrix9wP761r85drJkK7n21c3s8hn493qsJnM",
  "key15": "3nVFXQbDDeWnWnTP8rYymq3kLAjNem9WFqwdup3xn76HiznWYvnZ3j6mHryXk4AmRPSDRLjAqiN8KvDoGM2yWXTS",
  "key16": "2UUjgEGSFqoMsj8d2dzcSkJHgBDnv5b5vWVMtjEAQkgjqQoMt5wnTBEGZMPgjQjvAqrCj8gR6XaQRCGFDSicfJ2H",
  "key17": "4F5qwzYcgdUUtop6tEn8nHkMSrv9DYAKZVnmF4X8VFksQ9P6EvLPnhYQgdtA4ehnw5fAfyVNBxLMEFTwGSbzn4uD",
  "key18": "TGqxqnjjdvkBiA4h5HUqC6TdTjBXi7YDMXujzYhgSxTHLTB7AhXUWSe5T6PrmyVuKkt9sYjgvQZVtNfDbDMwkSu",
  "key19": "3V615b1ypJj9MLCJcZHY2NFNWXV2fFMLn6UPKnU2uGHJmXkDEAj6kE9SEkDD9U55XZeShbDgB5xBsCM9N7vdNBL8",
  "key20": "5YEvbU5jxmbv1rLx8kYDumq12hFQxkeFbem2p23JjYDZMGrG9k1A9mWhVXHFgwA4EsZTwbpejruddVxLJHJwh9t5",
  "key21": "5x66xD8ntDmcPJNumQGxDH3NJfewUoHGQPMGzHY5hunjAGVzxAgEfXDdv6oW7hHgGwbX9F89Dpi5Tw4JeB5n74Aq",
  "key22": "TUVbq29fczAtPbcXE7sVs8B22UPNYch1VDrwEp1VK3WFQY4cbp4LZRaaSCGV4h3f4N9CmeaRBwYzxLrWCcsXWb2",
  "key23": "4uerFyDQDK6tJV4Qf7FGCwrV61TPsQtkxRjntG1cbHFWC4yrBPTMQSHuSVBBayzg5cj2Mmv4FtoZXE9gHDCoVS4n",
  "key24": "33xYE3Xr6mSyjdepzEg3jZJt4LLQ6tLBiijaw7vYQKPby7vjv4zUVtd1bmsobUxSXTaLcWhghZ7WnRbbnXgFhF14",
  "key25": "4o5UTc7kBKKgdvo5vBY1Pg8e9JFLQzrSrYtMgNDTcbyFFukJrzud5qeUGhZsdj2kMhUsrAAW9ZbKzRoQPhUeGkd8",
  "key26": "75BWwrGUtz3BNPjyV94Jv67nPNQFMYbuVFvEkTutB4tnEvNMpjoKM76iT22oBfwmZJqMSvbVJAFYejpSQhJBon6",
  "key27": "24puTxwzWfpBNP72KMnvYyz6p3JvwfiMLdSYiCAneAz29SrPyEoXhqaWrnyP6s5xKXu7EgViTEsw7RShUAHrqpVh",
  "key28": "f5ZV87QZML5b5gc8mgqqwvaCTY9JQCsezvn6DxewDjUr7vvWiB8CcDcQCdLww73Rtr8UADNsNs4MwJgPjdvS8cg",
  "key29": "4bKtEKfaQsUbv2EfB4hhaNem6K1Viuof5YNcnDDXWfn2yk3w71JXGM6iUmWi6nBsDVfAqmqw8trVqTTtNZAUzGKi",
  "key30": "3bqCHh9HoSu4mCxtaFFGi2rs3kTAAjf6Ej3evYeC3X83Xz8jaQzs39MbJrFKyrHxsTWjjfgpAeGT7kkGUw3axy9v",
  "key31": "65nyo6J9ABG7tjQ9wpNadqnU3gankdUb2KvvYT8QG1JbG112kaoAzZANAcTzSu4xJ7VHsjst6Q57ooLkTJ6uDnk3",
  "key32": "5dKqj7qRQbd34SaP3oSWLSfZUshx6c4FJnfjbmiu4kdn8RkdUzXEkZ2ETz8Kx6KMRtBjPnRfHmCHprX1F7W6UBac",
  "key33": "Bsw63zb2t4wYB8UuPM75ki83hvZ8YL5K5rZtpPRDkkvAR6kGMAWD263aH1NMgRWYjNCyvnai5hD8tXs8QrAvdZJ",
  "key34": "4azZJebNfSkv7F1Fr3eJxzRtHnP6uqQEk3TdwnYvBCKhRozLfvfJfQzQvQqYBB2TyM3jiVDYVmgxxcZzjB67u65s",
  "key35": "2iENXePFWaQXkptnfyiWENxfe7rSg279DCctertSxpmFjKsCeYE6CdiHQw2F4nNr55RnbNNRYAhfuJ7u5t9qjMnr",
  "key36": "64M2UFKLWzdLFNydfET6nkWq5K4hmBhspYJtGN11N8JL1f2XQxP9U22ddMzk5e6NCy9DCwgubFUCwS6msfmNeWB8",
  "key37": "5iw7EzTjXjfPPZggozkq7e7nNsis13Aq1trn86V1vB4QtBxGQmLMmoMqVPA2BYVAo4s9M1YDFXePFNPLBRxitXyc",
  "key38": "4LThYtnN3yYLKvji7L3iMmwCS9JfAoTp1LRcRcqojnC9iebWQCZTQmRpjXrdiu1kWrCYP6pVd3utiMsmDx4baAsr",
  "key39": "Y2DZ1BjQS4o2XndcBShDGpZzikmaXrqJf4pogor5mNhnyMnPNcTvSvcZqGbfrzPPpektGuZBdsN6iA9B6mj1Twj",
  "key40": "4tDxkjBLhk9xT6bbStgmkAteFBpagiGc3nJCEegdgakc5AYA8QZA7nS6MXPfYbe659Qb1fGshon5oRdpbB14BcHj",
  "key41": "3BB9U1u5cJTNpV4kMwe3vxaGNqzh1yhehpF7SpDGFqeWBNbX9FrCANPqZfxG7RE84uoLDkAKobSPsPWkscDeo9F8",
  "key42": "5JNAvB5v38mfRaQMynbhtm7yGfLCbBoMK175XhLT1v4ybTjTTECQeBtTV86NPcxAkAgjCFFUNQ6E9hkjKcnbmc9K",
  "key43": "3S3Vfiv7BnTfMZ7n2HAPbZK7FqfHdPWg9E12s1jEQVequrVBjSGqNk7FgnmGE6xhGUjEyqnDLM5JKkqT4fibEvZm",
  "key44": "53A4r8Sr9wJSTohGGtXu2zZgswMBQ14Fc2TCm48oUazEqPzEBmmF8yAx8HAiF2bBdn9kZAVJ7Xeet6esyKrLPJov",
  "key45": "359EA4n3uJWw4rReLPuBwNYAL88SPCM49q2RpyjVpaL8jA6hBhSVdemao8adTPE6q93MyBx17XKekr2maT1grQeZ",
  "key46": "4Sv37pvxvpPdjefX8xTXJmqm8ENXepwyyK2AFGeomUFnKTZZCECnsqCZ1jRhxHQyqgwRZiHuYo3khmp4j4Vwba94",
  "key47": "3bc4D6d3MKjCQkSXRLam5XzH84CCzBhbV6fVeY1V9sEzdYfwwAmUo2ucNHXNhYa6CxfxLr7ZZ8pAgK9mZWEjUyZU",
  "key48": "7ga349p8mdQzV58rKQAbSeV3YsKcBxUeP8imbr63iH86yzACCQ69njCRCmAiY5a1o6KfQvW4t4owzXh7Ci8kgnn"
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
