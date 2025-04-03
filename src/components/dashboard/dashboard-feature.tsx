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
    "58v9pLy4nuBDTU2eAJjHSNRxyaf7y6MMh8Lfg9m8emEud8jJMkP2EgWxPPYXAmiYihLR4PrgBAHEcTCCiz5sneoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDzU5cWth2bXx3j3gApK3D6kiPzgyYqy49xZjtHCZoGEcr5uVaQnw6CMpK6wnDHMkenDfAsez5vUmuW6vANZ5Ep",
  "key1": "3tCkvrAnZk3KwKA3wGk2zbXZNwMto78osSPtDqMee4Mp7NCtSjw32SBLwufQa7kRb6VkFyr7sSmrz26YB6BsUvwZ",
  "key2": "5cik5Qy4h8Kwz2n9cvmBUcdajB9j7QAmxrbHRdR6HGZw291WvVW5kiAEaeoNk9BUXZgdmxDa4C1uBymzckChTbf8",
  "key3": "3Je4TDrhVVY76vWvYvdkhidAw3E5HcYsuCQ4ardieBpYVtjdijZPGgLGbssEDMyhLjL6hTmJfZDVqDnT4S4JiusC",
  "key4": "2YQfpsZCvJJJK7mNe79CHMr7Pe7muTj64nWvE6AePumKqwREChodRgMb4g7x53pGrgqj92jjSk9FzA6X8txQWAh1",
  "key5": "3KUYhHwrmwuH1sTqXmkQz6WZWCMPapM2BwP866YnemeXegGqpUhJLj52NvfBKq3cA1n5KPfQvAPbANiQr9HgTec6",
  "key6": "452D9oyRKxBLg2sxBGUJsYbWBkYBKgCKKghY6UedM692eUJKuxVoDg3LCU8Yrh2BcSsJGicUTJPMKbr71fYSpZNU",
  "key7": "5tTSRyDxgcvXLNo9tzUmJyzgHUYf88TPqYh9vMV99RiMWR9BUuv2x8mx7v1rnzgRrXgDsA48vtM8wUoWdBwDswDf",
  "key8": "4UgUhgnuA4ny1WFB633rvo6vewccB1Crdk9qNXSykiDeKNUJie2LG7L6vcJJGs9CPr1jgug9rWRf3eQkYvPZYr1V",
  "key9": "GA6NVqmpK8i5aqndPLT3AeqJuxeowUKVXkxMEYW3z4YJrU6Nv2qBsxxAfoxvBf8AFjumZQmWBgCEsecVJGhjgoJ",
  "key10": "eD6Emg9a3sWuH6o9RBwYe6WFWThDnt8jmgfux1kTnufbgFmTyoFLrdZvy2aoacpwSN6y8Z6pCPQGgDpUHvQ98tJ",
  "key11": "4abXMRnHPV3oScKEmJbVtVbyXedrnZPSaanAWzkdf1r9or5FRnh72gv1mit63uqsncxBEdeMwavvHGyFC6X51CCi",
  "key12": "M2ziXyiRbnWwdJRoujNcUgbEFw1uh7Dk5PShs1awHWpwPTDq61PSATUcjyXxGEffqpuX62eRKRM6Q1Hny6dGqgJ",
  "key13": "25oDKk7JhB6yjy4Mfvgte3CWpifvU3QmWUf6rQ9fgjrXdjSgM34LLAct3cTAExzqpE4ep16c7ZLuFUGD99Mzjr5M",
  "key14": "4yxyx3TGL5ogrAL5WfJVrCeScxitDAzbTuQZPMmgkojY4eq7jf4VQNSFoHv6tnSzhLF7E2nombnhzLsiGpTEe4JL",
  "key15": "3wX7xLACPCtxTHFDEq4jxaYpJoh1QiiBwBnXU2FMwG22ivZidEqJrEm1f5jgXvdBnKSUoCRuVE8e4RPFzKvyHuXH",
  "key16": "3myuvghNe8drx4wJM6ZnbZZSzD6FfKCC4ojghCFe5xii1HYPWFXMvPsLiDUiTdHU5qrTRpVD9utjGsLn9C9qVnuH",
  "key17": "2ixqaZwrDyjuAPQWpNMXiKJbeZGqH9np9pGgwDZhCHV1CumB5nzTpP4cemfUDfkM8iW8ZCoqAVyPy4P64cjgistb",
  "key18": "4n627msZTDt1XGB184vWwCADHqSDiN7GbnLvU3QQbUdmSrdHByvmdwrXuxeifNGLUgjDa3LNazBveGmA6RkwLXnN",
  "key19": "jiQ5kPtj8CG1Anxe7ob3nnnUtqutHhPkHbodH7m31gvqpy7yePy3jLu7B3Q1LfwsrYiGjVAB8EcYDdtnoNbdCRF",
  "key20": "5L9ytmp5E3tc8YjC1TabCHoTNuL4CZgiy1Jjmd4dg5eoywaYaU1Vo4vaugNCx8LN95cH4L85Ck2DmE3rgyKmTX29",
  "key21": "4iM5T4rSHrQQcVoTupSZybY54Gu4fMqmiiLnNDdksJiqCXqEa58Kx1oK5q49ePB2rnvzaeYU2aqdtxqMgzNBgiWJ",
  "key22": "5G7ZmUaqSNohGQA9pD3qzEv312Vz47UcMxkNauPd9NGKRwNVedbQYobD6TWWYGd5hLJgCut4PDY6gHypc1nCQVFD",
  "key23": "WF2zPq9gkGUaNHDoxQqdae98Bz3iyxuDBKzWiEUNMPFN6nFtCMVio4twgr9Bh6NdeWnbw7Na3GA6SwYcGW78zp9",
  "key24": "5FZzEQq6ox83oeke84ZNEbxSPm1gDesAE73KJt8gKwmHKX2GbrtqvbWNu4zPrHGtiVCbsrjZsLPUMGVkaoC6tvpT",
  "key25": "3FFhQLpZ5uKtsb8kHi9SHXqznpjZ25jpqiYfVz2D1aX8wBURdEcuyciRr1Sp1fd56zvZfjJoFMX4Etiik8MedEMH",
  "key26": "2Tby5EKUUi6SeA1UGJruZdH9NdTWGnkVCRHcHibSEgTsU5UvVdoP64QgmG4ecNBTFcUzyYxX465Sv2bkK4TVFMa9",
  "key27": "5KfHSadKLF5LpuGm1A1ab54b97xcePjjuHAmoDbd5UWRgH7ApAfPKX2D5ZXMBtsN6DeXhBxAGnHjGxLKWaCvVbL9",
  "key28": "65HRnx8aAUrhB3nwuw8KYLCgjq3Xc8Adaw1C9gzX2arHb3dkp8b8xtrSLr7PeHgQmWG4GM1UfwsUe9xovNkfw7DV",
  "key29": "5kRSTXDmGpv8GWQ7JcjQY3G4p378BEt6gJzDcvDbFXkjWFLsXANPTmcMbATV38CoLWpREDoTJKeYtJy4fELY6eyc",
  "key30": "31TNkZ8RCcyFfQAybRH3Yr69fgZ6dw2DbYvdqT3KmneeXcc3MfThX3zivfGgB7cxGF6CYSzDwijuuZutByvG8Gwt",
  "key31": "5cT98bUwfLq91JxEJZ6Qfwa8SEz6d2egAdkdQVQj4f4Xh7o8eKDGQ86hn59xYZquq566wdLoecruqaqFHqYoSnG2",
  "key32": "34XNRFnNZZQ3KmA8791YcGML8GS3iAF6jFERNRihRzF7Hk8rGN5tuw7mpYYCisoE2drrA3upGoSB2RQcpcqAhS6i"
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
