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
    "2Rop7fExiwuAf7HGUwbSzQ4Z1jY4TcBgtBnBvwRZfuypPUJKnKyAJde9FsVDByW9Ma16BMXGBnq1RxiMpKEPQSYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEztg6YMp4rrSBi36zXjXz7fFVbvyBd9nzVEAemqkPZQ664X7xjTCxFZWbMUgHHcS9ppZd9wRLTNTC4tT1eodkA",
  "key1": "2hKx94zx2xhdCWp31t2SKLXqcQszHpxXESidKzrXJk96cFho8CqHb6HMDaiPbhBGH88q6qthmyBpxxhbgr6WgEFp",
  "key2": "3TXgRK9eBEBqiceXQZD34WnTvcDhNMGoy9HBwhXbdQaq3x6Ah6VDpU5ZBfqfEU3pX5anFX5rv6W3FDUmoPgvKu4N",
  "key3": "skhSeEARa8r6HR1z6bUAAkPAW8Uqfr2TTo2o26FRxQbpVtK7HndYAt1zZjrDE6nH9bZ4MXBMmCuuByqL6efqYFu",
  "key4": "2YR5YZJfzF6F9VQJGwYZFSvbCM92P22gunrEyPSNKgzzQ4VbArW8Gqjfs1RvS3k7szXXHM1Ccqbv49bFXrskpyt6",
  "key5": "6B6fRJ8qf9vYt89zHuyFYpw48Q44YCDEVZYLvQRYjQ9HRDLu4F6HR83K5E1ENDCTPDMbexmRwjtRFQRaG3jeyA1",
  "key6": "2rzsLcYnziKKT3r4hJfvYNsLJwaHrX6862gPMw8v8S6ZdQtzqCvsbrUB3ZopczoUEsW3BhLJu6Kz5XPMZk9D72XW",
  "key7": "4wS4cY4UbfYEMBLiMS2p9d8132wi5ZLYMJ9s4LmH4Zw7bYwJzDXbLuwGggEabhdUknqqKjBQYSDprZto6Mp8iDXT",
  "key8": "52kbku7UYBJcX5HuAWu3CjhS8MbTDwMJCxACr2pEgcYGrhXht1GjmkLJgQwEe8ayFa77gHAh3ZbybsiGT3mvHiGV",
  "key9": "3kBZmw71eX7KjphQcjZdRnZ537Kp3mae155UdY7paLkQKdHr328FctrHT9xLxyxE6g41gtEcyBXcRnXyoPojSqef",
  "key10": "5yBTuZMo4zeMXitqKQyfWXG6FwyfNdNWW9zVTjfEu5KNqajbx4bcGo3C9uqakYhfpFjfJ4GepMPDa6K1R8QsZqqK",
  "key11": "5BUo2mKdExhLAnYELpCydKwohZmgkVRYEw3scsp6WrdERDQGAEY5447JZuDBiqSR8vpGUewtmG5dhf83QzfuyFu2",
  "key12": "54P8QzoK5mrS4d4awc9ZrESu9B6ftNEEDS8XeRsQLwaadf2kH4NED8wkJykEyvtQbFxRNrKzaRx4a2UsG5iaMBAX",
  "key13": "3V8TUU7jkCvXHwyxwbuGWRpceL4h42Nio1LSmcziHZbTrmcvunAhVAw3AvVBxg9Z8pu9bDx5s3Mc216mNjm1Un3V",
  "key14": "3WKzfydCc6umjBHhAwesJtKiT1yrBgrrVTgbj5d1od5tvwYVrPJxbudaYvdHBAPQe6EuGuaers8rDgakAp87M3uB",
  "key15": "5NJDsjC3GvsNn4awkpHaS4LEYFKuGTEqjEpnsmtZnAX3ubP6eje54crFU13qShA87iwgKfArLr2AGL4itFAjtFhh",
  "key16": "33bpzTUTCc7MDc5wfXtQNC4sect5VeotCFvqbcz6yowDwSXYWKZE2c6cbrZVYMZTqz3m8M3xwNb6UVKCjoDaW3KY",
  "key17": "2UBWgWHrevWK1L4QaYBKYCQqKFrcWwK6F5DjHnMqjJLC3xeX9wSA3D7BzUdcBFs62uGnvuhtSgTdwduRqr9j6ojJ",
  "key18": "z2ECKVX1Wt9Qzv4CTaPhyVkjZ5nZX814DoFAUGarzG3TGVakFjrgprMq4qA1XrjHqByNn4i2xkvf9k7oneZi32z",
  "key19": "4cGNtC7qiE8b6qYnDTqELmNPxPLtL9rAxQ5eyJ33jtfp5onN6HMmoQbDbXLJpbxXEJHM7uHDv5qTg8am7b4dhuoA",
  "key20": "55eANdGdweMdE1mVm5ws2Ug5yFGgYCJadxGf4ok88ELUJaShNGHkvKjEjDV47DyzkKxG5BQGqxgffYxNLqVXE2oD",
  "key21": "2DZVfJQN2knmvN5scYLBbc39GVrAamzWXbRRJKssC8YCgYpqF6q1nks9V3RDLFSSFFfw56vjHT8kbPoWB8rWYwgJ",
  "key22": "2FaiHcVFHd3vh1tBFXT2rS68BQxea2bEw5xfaFWsP1oTSokhK7zLHeeG5YMuUcgzCdtDZHyXfp9KJuEu474tp8xv",
  "key23": "3m6QtTuKXyiqHhaPFpZEh7Mb7b1CpzcLttqLKuPxn8VRAHzRYxgnaDgm1reMv2NbfBiwHmyf8njdrmqYtGdJH1v5",
  "key24": "5iiMz9aApQfuDKQ5vQqjTZCzA8Xoa33stjy4DK5HApfR9GvppFQwFsm8QYDRmQZjMktLs51ByEn3T8ncJ4cA6Kni",
  "key25": "k5tLAyobEXYNgEyCyb2AEAVR2yC8QH8i8jNYx8nrzCE2jKW2SWgkKkDkp5CbPjDMeSSfFnMpC6wnk8gVyQwgNSA",
  "key26": "2DkRdXSoHmHdc1TwrQBNw8aryd2QqmvvicvubAgJxSgeYqS3Kk2rv2Xd12Ak78KA5tw6gt5JFvwqaYqzx8CMxbYL",
  "key27": "2P7Y18Mu1vpL51QyRVQ5UrbBgSx2TtTVMy5QnFTM2am9iVoHnmyKt3H6hUpWDxGdM9y7Cv8zs8qHTa7hQzzgVGSc",
  "key28": "3N91XqF6GfoQw4Nmm3zMKZ4jEeHvpf6tfvfGwezdiegbPmckQJcG4oSGAQqCifaYqX9cqeTCEVnSQMWhyttbt3kF",
  "key29": "37p9RZchYQtv4DABBpASheyXfURjxEBM6gotrwF4xEiEENNabkj1Lzr1qkvW2VSnb4SAgKVMH2eko2W5GWhrracM",
  "key30": "22W4QSMox4mykRkJZ35a8YsadoHirXwrpb7tNQYTzS2S2yfjBE9FQQSzokYkLWj2pioWMjDDB3WZJ3ByXfx4pw52",
  "key31": "5mi6nJiE76P3EjXGybPGU7QEvQtDhM6jLLfXrt7E9muRjhKS77RzD1KDCxwn4nyBQdNaFgaP3F7Et2vWsjjYeZV4",
  "key32": "LQUgyaAoy6PeLg2d6KawS4iBSTXyeYmfU3fNytp7ZAEHeRe4qDJBzy6sSKACCoWS3GGK5UUHDNxHSwgenY5E4U9",
  "key33": "37C3rd3bfyc8tCbHDUTtF4U9WEv85P5e7mfLtwCo1HY42faXguU7Y3eXPVGKtKhdSBmuun2V7DhT7HVqz7C8oLLa",
  "key34": "3nVghcUQ4R21JWZV1HgkgxWGM1xnauEo78FhJrJUtgjT8XiSKouKaUAnyqYRRF2SuDtn6BWx4qvLNpEWEBFWkyWS",
  "key35": "2JqUx4rmMWFJMjkiWS9vBSK3a9jZLxaei3TQGECQbsgycc5n8iAiWKXh5dLpgtkLaeoraye7wh3QKoVLb1Y3XrnB"
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
