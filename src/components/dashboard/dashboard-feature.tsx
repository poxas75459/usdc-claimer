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
    "3BiEMK18hdd3wufKcaw15LPcqntT31tZFidtNh9eEdoKAUNa6HEwY1gWPT9t6fK9rbdfBT59x7YUHKVEKhzRHu4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZL5aQhF1rXm4k9nt8MhC4wPT9DKQSu3dw7iNgpbqVDrPPVNP8pwXBZuK2mnyEJYmDNK9FKn5T5xfzrLBZa1CiJ",
  "key1": "5iybxVf8JoDkCmDs5cgarJpMjqw5gwz5m7BfGLLbovn2o9ceeS53aky1YJQo9zDAvJQGjJQQ3rneMy4ZtHr1rMK3",
  "key2": "4gdReHG2gWWUmKqkxnzFU46noHQow6Mu8CxpZ6W3NWi9EQysnzbh8o6QuteWqNzWLzD1zbd6eCzKohAUMNiido6F",
  "key3": "3KGcfoSC4C1AX4ohXWGw7PnwLbRERgNMGYK4uARZR9G9iZ9an7jAtCAm9h5zTk7uLr54rdjttdoY9QYr145iKX3K",
  "key4": "5ySgFuAb8sZTzsWts4mULkWPgzX1mQVQV7esK6PzS6jn4VuucQ3Ezq2SAFDexWtBL89tJxugwqjjVKeXxtfZGiWR",
  "key5": "kn8XjKA2cTgReuU2tw9wBPJZg8Ce11oQ7cUm43yn7kkS1hKGmzoQDwsRhvJqYFF8e3tNMRxNDynDqj9XQMDazTq",
  "key6": "4tqNy8BXm9ttnFvJjDpqDZqbRpkY1sbqEvTtaHc5n1KtoJnJ2xYyzgWRoKAKyaD4mmgZm73sVZv8otTmnPK4t5K7",
  "key7": "2ibBZrXxFe1JShsgDz5pfKya6bMiVVUaWEbLABVhn2Q7hxt67ASrU2KEkupYskKVix9cHSPqiR6QMBbDkkvHiumb",
  "key8": "9HxXC3oFDJuoBioR2xpkZixh2dhAEz9Rh1CmbZzJLrFByoSz8ZrXN1hXgiFqYyAstwoGCZ9Cree8jinqNt3DcP1",
  "key9": "5se3j9LFE3StAzDQVMj2cAr4ia3FPqAEMuVJqZMYmN1hsTTvhDuXL9DayVzXKG7ufuZCU5UDV7d5AFBLgjH1ESXe",
  "key10": "5E7dKWRheEz8GYYG2WwM9gQa5NC9as7AgADKSfsX4n3KBeX6ULuBVwUZzfz97DAk9DGya5Mfdu1EHMxrgYRY4Vhv",
  "key11": "5KMiWCHkyLk43arYZ55MBiJnKuAu7yu2Yey63g7HtY3zDJ37eVBWtnUDUeQYYvVyVFaBTRwt6jvrrzSNcd4zdXJG",
  "key12": "54J7tVvG2nYE5g2F8eB14ds2xA2cL9X3S1GgLf6nyrmLwotAqX5jAS3tocMYpc9XkFiVgLhGKHStp9GGrYotL2Rj",
  "key13": "2GnZaXiDvg9C9y2s8HRFJ8Y6UeMiovQAyerRnj4uSp1vMW5moDTBi4Mi5rubTmrGW4AxCNU5zeXRykHF9NNxGGzC",
  "key14": "3Ba3KExojnS96NZa6yuFyREAhHmMPnC7qaozTkRcJi1y8vJd8wPXF3pXL9cB5Hz2jhMNvpBKg78UAi1FruW55zqZ",
  "key15": "3NCfoNfAUcxEnfPkkYjAFBvjde2EGgjt7YfQksuuRoVGk6vdiDoNZUsaPhWVBYDJmRgtxqs92YCXMFZnVa93iEdd",
  "key16": "49Vh8qkcD7v57vmQ2onRufqbZHNjVEM38VEgcfyboGfB8z1mMc7vTmkB66h1wRrxTQyAbGmfBmuV4LFdAyt2PFwe",
  "key17": "5N7gHQkSwHxmqyRGE7z44Ty6FadKXcgq6mjuVdoFVnkV4m9i96mPfnNVfffUdNrf1tEKhxMdod3NsC2nQuPMnV4U",
  "key18": "5LhP3SjX12ijdaPKA3iPyijAcEGEGHrCpMzXfwRiJm7jwmRrkGLLL1W95gpk4iLRMB94VNqodpGo7M7nTjAyVBnw",
  "key19": "5axdhk8pMM9SB2fN7uoHKgKst15BNnLHtXWJ2dT1qESaexgfan6LEQDSmWugUNooj92KDmFXUdnzJ7EnL9S9t54Q",
  "key20": "LCsUHQqcyjEX3i7SLYgK8gncAt6JaNaEodg9A47di4366bp2tpCcCnPe2yr9oFMCwAJAiZmSk7hWnXdRVcoh2Yr",
  "key21": "2PGn8AdnaqCY78urpQ5yfcEAjSzqqjyBKypQjJaKKXnTsSdkyJsjHYiuznWWraey7MkETBca4AVNVKWDQRiaWSct",
  "key22": "2iYgcFJCnevkiFCBheTHj5fYAYS1C5TBa9EVLjGJL7Yg6fRoT8xAZJH2JXRSYS4jRUnV1Xg9PAEa9JaM8nbABrtY",
  "key23": "2niRUAJwB2zoXQHo39zRS5ki2Rzbc7Z3UWqoHFgDjDqVLQ3HkvFign1nAijuuX9ULGCry14d8cTgf32ymtekZSfq",
  "key24": "5hkdvx9iLCM8D8oz1dtqLtdczKZ85X4uPunFATRmsJ5hnQSPegVfbpVQdkVgbSHT4jRvpV4BkCdSoAXuWxN1hzTu",
  "key25": "3MRgmaCXXRxYuMNDwwsdTFLwV68zZjXBK4BL8Ntnemoyatb74jsThRGJY9RGFUP4HM8eMUYHRDkuQT6oe57GuU8i",
  "key26": "5L4RknQbQsAYPHYyDxMsEeKAYugc4TNtinJq8YADJefEsgS4Vk1BMb5t84c8GvCvUKvVda2GHCSfnqsFVGeGra19",
  "key27": "3Urcu41E8JScw2EB5zNu3gX8EVCYDPK1rUfEUC941aTh9vJ5ucpEdn7rintpoFJSWcmnav7GZ7WVyWYPMHedSk1y",
  "key28": "2vCrudM5QvKWHpJdkpQL4WR4Cfe8BSJQDU2RsXGHgL4qrXtu7CCqDS8iE5Rdab8QvQwp3r5kcZguYmfSLD4JvkUJ",
  "key29": "4xDvi7TVcakhJQeVepnMVF9ArdADbt915ifmRih6maBcSsDNZb8bRAWdUUkg2myWmhPUdGdSTJXRQNNbaKQk9B9z",
  "key30": "5F66JBSS4tcvmhz7YwoZ26WZpKDRTFapaUKXjGPrtxWWwkrNApeBhwfgV9GqvquE1APMwMzLf4jUPbJYN6pfops",
  "key31": "2j9ZmyrE63iKXdAuRys22bwnqVZq7SmptmoTkktGfdQMsm1eGUgbFTXiFRXf7qNEzhd5K39BWVNjVCrNAtqbdkBv",
  "key32": "5A8ffjQZvr7urrytVPsm4x2cEGDCMbCfiHV8C5PhC1YGFXkn7HtJPypXiZRY8nJhEHPuz2GxPrg4Qx3NEBH9ZY8W",
  "key33": "3oKddfoXrTRxCd8DKzHGw1Q4VXe9YpdyWMJ11QhBSbHNmPj4odhadKKeoXboZmkGqGn216KCNdGstBwJMDuNcfGK"
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
