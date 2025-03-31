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
    "2z1gmVJS1hfkMBmLNa4XEGbwPdoQpEtPzSu5E9D2X8YUwPiMgLYV27kos2R2Mz398EZxnXEvaCxcUZuTEJFWvFYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Nz8oNubJW6VtM9pWzmVojqLHxMqTiDkQENDB8bQpdgJjv8VHSPFC8E8LG4MS1cXnZSa3vv5VBEEE3FPnhMJGQm",
  "key1": "4x8tgRjhHmMLz5n8L824SmCAttUUujF2XcyxL851avfkCxHTuDoWMK4XMrgLv1nZNbFmKUaY9KDJtVaAGWo26iQV",
  "key2": "PMQifFJsjMnYLUMy49wrG1a6u3cVpkVwYRgXZT2xaPoEAGjAJK9zdf8wjKkjo6BaLQhh3Jqn8zcojyiR7WvqPkc",
  "key3": "4D8Kj5qwiYV12SvUTdxMgkJWXbnnG6dmaDFLgxwbH1cmd1NtorB4jLHxBhoDFNM6xWUdA4GmSQzEB5DtWemRYw9A",
  "key4": "2FnMcG3HxNNMimQZhGFbJwYrkQo1VXhPqFHcVppu2sY71h43iMuVyrTshZFnNM7qUHMG7VWzfydoguB4yKuyyXiK",
  "key5": "3Pa6XUctuo5igb1K7zfqHke4fV6CtjgoBfqkjUBoZbQEtoSzFywSvKWe521HhwEQ65J9ru8DcehVNwcPAQKys2GN",
  "key6": "5XywvNwvbb1ijbUWpnszc6hVDz3tDjjk1iCzayAEwWwokiLFw2n38D5heJo5rMLQnYPcg7muzBbWhT2ev5PiSMVm",
  "key7": "4okFN9KJWqHZGSoDVRDLq36PxFmyVKoHR8pmFJdEvbcCVAEMNm9sSutaokkqC4AFkT7gQghGmavX9K8Ktd6Z5Feg",
  "key8": "4XxdnbgjsgZvDgf7nusALbaXbeyU25YeWLTYuNBNLxsNHUC2Dv3Wtg5kjbN8T4gk4JLrTkBqiL3Qsg1TvaqaYfXp",
  "key9": "4AxpNEfukZfuewqcRp4rNHvrnrGGKmqzM7rHYAPBxAHhZsvGZ7oKDmzUuEHPWCSyYprhJeFpBUzBopoHRDPwWjzk",
  "key10": "2fQP7MvF3jU32dxrQwXZ93K8NxKKoX8qo6C44f44xHARpCxDHq9qLLoyTrKLXdbnjJYyw24J99Qh4ggcENn9ARQX",
  "key11": "D4RcqJoLXPhMzyapsKSchig76JKE7oFdNVbuZ2nLWU4MCbtSLhYRQYPBvmksT8qJfKetRZsyFbTY9VXKuKCYhRi",
  "key12": "5tL8Yy19qWFrkLWvuA7UrfB5eY5gDJ7MtsSoeupmurfKScLQQriNZDG7ZeZiXtSdpNioGM1buc44kW1wuQq1QCNf",
  "key13": "2apt6uJDg6rqiLzqmnXVYEUAy2XYcFpuQc8hcb1s7uR7j7M7nUxoZZ9pNxn4h4Nmmy94iWEvMQeCMCNoP4XQ38G4",
  "key14": "2TGYq9fa5zMpkVwFkYDq61hWx3etFk7LC4tjSbwnFGvXNioEQ8EHnypZw1TxYYdTMYxGsh9R5ettbXrzDCfp6ZDk",
  "key15": "5RawtpV9kB86YooySWCQzBKQkyPkuj5LPMoiv1hqgNWeyTMqyT6osyqhzrrBrqakRhXeNEwtKKhJBu2SQYSd49uN",
  "key16": "644FVXpSKvXFKzKQRrsw9GbRqo4UEDWpRKVvFZTNddNvmVWCqFY1EfPEbWTMjZtSzSRxP3U5pRaa9JSih43XAtVY",
  "key17": "4LZdyexNSxENWEjE6vHUQB3LRYG3yET2DqirdZc116w9VzWfuy4cDYJtvi4a24uUUXauMEmSi15PfRKK4bsvX8YH",
  "key18": "4SdtVcQmuMbJBeGPUzx8fKhH2NdxMPj9W3vnQ9cVqoGJaqNm2y7EgPPHg6Cpa41CBmAS4mQA9eTFg6UiBUs6mdth",
  "key19": "4YmQc8d5NX3xZcbXFaSf6g7jqP2NWdM4b2DE6cTSVKV8Tb33oimXh54SSxDexUK3J155VqtqMJJdMrmo6AdmHRAp",
  "key20": "2AqvPAr9k4rt5M8Bw8BWeqieLAPBfoLR47xZy5XRNyZEhYeNN8PYd8tz1XKF9zGv8Wny86Myv4BoASToLxTY5VbZ",
  "key21": "3MR6VAChsvJjXgdRXhg6KwENGxYusnGHs2sHS9tFyPXEeeiFRXzDTMcE49pcVJBvJHCn72cRFeeNvftDBwRyzm1g",
  "key22": "hHHKDgx6h15fmujfeQvvQm2USatRaB2BeyYHorqBTLstoT8Ps9J5VVV3RGbvKj96fc4Nz1wr5gsPkDJhk8rRFGJ",
  "key23": "58dnnCnQ4TpSLnaPDi9Y7rnCo5kay8ECcFfEDWGe6KGKKQg48DRNoJZC1VZJMTCFq6zxUD5nF4NiSgCMXKG31iC7",
  "key24": "5YRiEcmJ7aidTBDhTSFTn7vba2F9o9NTgiwSmw6AAfbot4uqCFLcU5wkq2qnxkLftP76rN75ExZh2Th5pMUT47LQ",
  "key25": "3j69AP5Z55ADBZK8T5cpszV3XrH27ZzCAZqyujN8cwCQ19wFTicsjKUJy8GFfRroPHRSjK4ibrKRezrq9vXso1hG",
  "key26": "3k9YoEPRUddm6vgEyipZbFvE8TBZ3WrEYJjh7mBvtLJLGw6AGxK8GJcrmkQHYZPzdRc4AYmnK1uuQ2seqrLx5BLe",
  "key27": "5UK3sHGYX4T9S9q2WqnWuNtHFLyfhH3MMfBGEop55a1uefnzH4AcEZ1RrcfuqteaXamhJhDiWhoWax6Zrs1tHCP6",
  "key28": "prSRZh9TfQwwisWBRWie2KCvPatMTpXJQxapGKwppJCd6FZThKn7napD2gGSDnNkNLmdesbCLSyd1sLZ14TwrHQ",
  "key29": "4S5FLTN99PNMuJoNQC4qYiNK7iUHR71hZC6mR67GLCzuJXg2JDAwN2hQFoWrg9WcP3jGaciH2A7oiXM1jzFo4rD3",
  "key30": "671cLbwbPNNY5VsMWPHSHF4jcYz2zWVGHp8As9otN1F9MF8WJdW9kSdrM9YTiCycjNAQkuY2itemkWVCZQraAvAG",
  "key31": "3GMpw6auE85T7kVMm7UVC6asm8mNU2F8GsVE3K7x16Aw6eXdkowW8QsKZagvnzic51pDuCEkqhJizUANt2mh5aE6",
  "key32": "5kjLghNdde5ma4nEPjxkmb1wRkRYtiSLGTMh57MzQRFYA81d9t8J1roU42ex6UsBqMKGuTh71cVuuM8EkvoXwEaH",
  "key33": "zgAe1oueGw27C3FAxrsTb8ucgQJkLq1muYLuE6J37BBdcWCNc8TQZWivFiJDJ8GKigEewcNHAtKmU1gzXMqJDrq",
  "key34": "dJz9Eq5NmtkG99XWsCfhFRSHQrexX6U3ZtMKyknZb6aJGELQhv1aYUiTjp65TFijNdF8gMGxQbfaKB2hWjDnwZ6",
  "key35": "5A4GNj93kKm6eETmN8jXbzK7fuZ6okWMA2R67atXLq4ZtrLzXL7pLSHogG6HjMy3GSZEKYzdHuZoEmifoZCQedvE",
  "key36": "Exx2X3Ap1sDwq4Cvr4bFC4AULiD4uZSipXzanJXEQkrkptMzFFLWk7q7pYcraTGV6nR5aWgbiwb13wvLyNYFaoZ",
  "key37": "55LbZKz6HcnXvFgepWJCeNsbjtKVFNjkHoVMUGxZwh72paPJWJ3hTA1stcLTT2GaL2qm29T4RpwATrS2rubpDyym",
  "key38": "3EHPbEnoKcDHvL2sqewbi57qo7TWAXCD7j45uwFe5kAHYo88AEQakUjsDph8SEHmqxAd9HhQbeDSRZJ2p2agkWfn",
  "key39": "5dXuE2Lp6FrT8kvQRietQPVKppMtRfKhc4wQammcHfsU2aFPbkRDgwckCc6GXYye2j2YDWJWVkEHh5oUbFqK1yAZ"
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
