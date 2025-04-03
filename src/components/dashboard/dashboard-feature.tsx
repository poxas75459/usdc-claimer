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
    "2axeSwmhfJp9pr1kuFdzXiY3dpcUFEpU7JMYSMcHxuGP6NvU5CbhU22aXhdMb1Vkny17MH3uiFkcEGQ6XhnATVzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1jmt2bk9DYyxuxvZRfpR6c9j8mdvqYKSGk1DW39ALcXWngGkzQKHdbUtqbTW9CMb8unyq5wTamM62jhyCCki4J",
  "key1": "4EEqrnVduniNWFaRk1iMA82pEXnoFkkw4GgV84XmN791prhoet55UScCRaiLb6wBGiwkasArsSPZ3PivpWDW56jh",
  "key2": "5aY3YgbtdHKENSpU8GwoBKiR5vUjDhwVdWGj9DKvELg9erZ5f5KyQ4aRWLyrrN2BNuuwnRU2FjAoK7wYRPUzyWkq",
  "key3": "2TAFD1uECfev1XeRqWK11j8JeUWH5kkootDJbANBe5HxFanaDsQ3qCsXnnYGP4kRxpTg1Eo5zrJMYFib2WXxqzsR",
  "key4": "27QWUCftKP8KYiU6bZE14rBdyMk5MQxyMytT8o1P2mMKGJdT2VMNkZv3kuMxm2qXBn2Tcjp4D5dfdNKfdv4R1huB",
  "key5": "evYh2PonzBoUkpQVWxXKLp8L6kb6GKMoBU3c8R89p3a7XKNKwFrxDfT4i1rSZp8nY1g6NfCBGqAuYcuDv581fzV",
  "key6": "4g7DbKzxZNQ2QWpuzVzaqV8aT5Mvy23B8HRAsY1VbPHVE4QymF9ActWosdsCjZzvttvXzVtLN12rRDPsfB7r2uo9",
  "key7": "2UECa8DSunDjnfBvLan8RFQQePjeUELux3qCrjSX6U7WdbAd8A19dSrHwV3BiamrUHiSf4nsTtw7GBDtNyfPsr7a",
  "key8": "2tTJY8U9CJtsawAvoA3ewxsUxJqiA4PADtRWjXaj2LcCmZkvnmc8n8YykxdCdP59FhL7oVVNoqZfGdzmFSAzWtm4",
  "key9": "5pMQwU8YNHufKZ3DUgaEd1dphQerNWqZTuLStfWtuQfqbyd4JuXBZweZ45DRXai5TaLTcEJwQsW9BBjq9neHUNiE",
  "key10": "37rSQhW8EqhV4wpWd4gZF76MLPjgyhCCZFp8XC3ogJt1fPqT6nbAAVdWcWkvuq1fAcCt3ESzcBZ5P4UDyVF19qen",
  "key11": "5NQy6Kz1VrTZ3BrsLUiGni6UBDH1VfmWPz11MSeaQsYHoMnSEdowusSD2tvJNqoEe1bdSKAu9AbQXUoDiEgsEFeH",
  "key12": "6oxht8SMKoaZmwzYB11pFWah3KA48FWXJZhePzkjvdnFzHdGTKi94PEXWW6EWvLFwJDrwrbmckEcTuJBEWyFVbg",
  "key13": "28ixEf8ngYRWCjZYoTekCfMHyUxEAgv77unpWzmKt1uNCovtZhjSw3H7qddQRoD5kNzCtkhEwrLTWfjuX4X7T1wQ",
  "key14": "5DN4ovZb6Dh8HK1TDiiXjTaPsJmJK8cGFfeWSzuCFJhLcfHEWSKtzHuDLqwLbGptD1wdktQpvbmenAo3rgPTDAqi",
  "key15": "3c7mjQgER9MSqwqnkyzHQZrA1AsuDyCov7YHved3x9rAo4oHcehXWNU3871USRt1hd3Pdd6fJk4AmvRCAaRStSrS",
  "key16": "4iWWHyLvocwTK1kDbFmkRXPdTvFzJ8o5yquoEPxfzrvQCjhgLU7aFAqeLfYc6YPCDq4Mz3SJfeYzu2daNweCttqA",
  "key17": "Mnob4sV4iz6i72fPuyD53fxrYJcHgZzyBYATGyQQNKp1kigVSsEYgbCRTCMoBtj7AGfkPo7of8CnCFisdVcS2CY",
  "key18": "4MLNcgKrTChhW9Wvw3h59zXYcv1m3qwLDL66vAey55vScBFPUYRzTS4YHfKQJfM2s87EAVcHBSM5SQ7TjYn3pQZc",
  "key19": "3iGG9ZMSSFGqkG3U4qfT8URWco4FNVjNSUWQS6ywTm97m7uMgwLs5ZqkXBERiauc7P4X2jZFE2fFEZspGdQ5qbEe",
  "key20": "2DNp5nGJHBnMSi1xCnrfgJCoEnyeaDaBykdJAq3BCEqZn4RxBcTmPyHP5V2aNzybQdmisTrtGa8awhZRUq4FR9c6",
  "key21": "3c3T3E927sigSfEbnQWjUM19VZnQhqLZcKgdFscmL3KrrHZdz3HZnrB5bYxbxCp96MoYxkZkGGed1F3J1JcAwwGX",
  "key22": "6maAVSTiqixBpQcCoSu6RHiUVBft4TR3HNPM4SE8k2JEHVaAioEqWqksKzdP1tCERfjFWSG7uPyDAcigqv4rS91",
  "key23": "5A9C4goW2b7U3bEMCWn6Zt2mAznwB9xLfs6ontKAXTYe4k6c6dyNNw5Lxevijkwez15HhVV14k4CZVFDskx13WKm",
  "key24": "66yXqFofPMEjxd9DJ8JFHVXmr5wtQcAYb3XB874HPf8NahTT32eYCLBoU3LKDy1bQR3twpREtEoqRacpzYACTQtG",
  "key25": "2ssWfMJ1PouEYMSjEUesGxXRQ793M6Nzp7dsWfbAFzR9bixu1VJpu43X1Cve95t9PFbM3c3gToKnrBeRHcyGDfad",
  "key26": "5SpF5MDu2UamHYMRByKw3NrcUyep55nS4bCdNYSXaNx8m1GBTXYvwgCkGGywJS4rBrDovoGT9tsZZRD7HdMuMLKH",
  "key27": "43o6zv36ceiMWGQaP9JFmNZDZfTziUKnVvhhX6Vp5rbWSuPvTEqGRSqXj2gUGhjbZzTvvJYYHAqACrtzUgrCN3m7",
  "key28": "3nX3Hn3NAPCwxY6c5VeSK1yu72BbjAsCBZGC7fPknUBi6DGw9tMMLbP1hsosfHLA8KF4ztCV6RWXEZf7J2rKovL8",
  "key29": "26owsKJwf4nx9L3mFhaExUNByVCJ3GNNu7RN6BxvyJZHXXPCUaakYFyFiG11EeqFumsHFef8LjkKQMQgcVKgmXRr",
  "key30": "3WegGQVeWMCqiBQN2B7yySrpugoWT4XJihPvzQLjBtG4k1fQZWdpGykbXmuPFjgPz5HnQsJSxQba1BSSHqJjEee9",
  "key31": "3MHD2CsoKzXuxtkySR6ix1u2PFw6uWrBQQmDHjA8ED6izH3op6w2bT77dGkHdgM7UVQt2EDsJy5ame966pTDTmUJ",
  "key32": "28VQnChn3aKr5VdRnoLZLevFFhwpULwdt7kThoDvpBSJ8RFWiSx5N5XyoACrseb7fqX5CnpM8EzLa4JuztwBUGTG",
  "key33": "3L5HYnsvU8Yuo4ebrGNzhJgvTSZhvAZGueqrCSC4xVff3SbHk8py7kHRqxy3JyphQMANowRRHiTvkbfLai8PNe2D",
  "key34": "SDw3Z1cVNMuSXJKnpS99WpNcUX4LqBb2LTMNMVqiMPubUC9oSZBDZcR4ez5siySPqnLMwy6HiCjVnhfvrrY5s43",
  "key35": "4jss3sWVnExH2DP18MYLHxcaAEFGbCfBFM7RkmiaG1ppURMga6mGQGiveikdepby6QWAPN2W77qh3AzMx1gYdisD",
  "key36": "Emb5DkWaGkjkzB7kWX7NNVVrqgusm9LQRNmabLfunkvyuxeitBVgy3QbYmekPC7cc6Cz6MmMNqTPDgPCbz4A8UN",
  "key37": "5s1TEuYC7mEcN4VENcayhKSPsF1AEvsfFVh7gXKUcRfhkvoFoRpkZMWBeu2dun74qTrB3ZAkXyGwUVdwZwKaa7t9",
  "key38": "5zXZNjKHhc4mAne5D77x7MXBrGrs4MsZaqqVjC6QUpzPf4tWL31ZtJjJRiEAYLF8k379nmjWmHDcy3eMEhNA2Vba",
  "key39": "gEHTmzY8ADYVRjkMf5h7UgqLsvi56R4rrbXaDufXR2xBwbzC1BUpLciHv2dnrviR5nn3DDv3oMb482wk5rEdS4R",
  "key40": "3LR1Zgbzff4kB38n2ZfHGbXDe7S3GRgcqy1RoMqJdNHPYzpmhhuqkGVuE8jqDU9GNCwsssJLFEAh8QcCXqY9AjZS",
  "key41": "3wr596mAqJPyA8x4bat7EcobDcDbS5Vj7kcNy1RNn4UwDGHjNkuRWsFGz8R51gfTkGHb8Fy6Z6X4onhDW6LmH8ZK"
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
