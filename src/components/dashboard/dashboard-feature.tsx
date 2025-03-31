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
    "3GERFcyfWLvD3rPr5WZ4mwuCAAGJXXnAZiYQGqCbbCCnNKE8apaundSFDovRx7aXa1J9Kmzuqy8jPNDDKbeHgqqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSE8m6QNDVPZP8oSJtHKDNcvmHzj6vyWfiaHYjx2QSr88ub2pMrSsozzty9acCShBbGeyyhupaYj7tNLE4ybqrr",
  "key1": "TUcgLDGqJuPyNkS5NkhCp6SfafjFBco7XZJQntow7gNEU1YVpkSSgo2TJ1Cp5N3H6Ts4Jqarq2edG76LvA9UZeH",
  "key2": "3voa1126twsGo7UhGLfJ19Erf1TuzpM2n8eL5bUPUydLA1bN5yCgAymVuZj3jh8L62XcauM4DqCJvSfebptHBpDh",
  "key3": "4XzN2b7KgSBvJnjAbhFM3WJmdNUMHJkV7XxmZgvTjgqPptn7hyy1KZ6y6uT72fFmRyYbaeDmiqPHmBU8CkfwhAzT",
  "key4": "5g1itmnyrRZEU4XRP8DLo4NDEvJ34edr7kvXrzgAHcHGA5ntAonMCaLxNquoUQcvjmf5vuhitK97w3LthFTcC8nv",
  "key5": "4NMpRxyxmAZmgfc5jHkSA3TH4rpwKRjnTioMCSJUspRqh1YZcFcKaNnkE4GK8tF1KiouNfgdFwAK2fpcwDbkLE7H",
  "key6": "4vd9vGWYe1VGKqhdaMEeDXwarRAuir3wzfU5rW3CUuak7jDs5rB5rj62g7rxYwxR7RZ9vc9N3vhpBLXzkEk6biUN",
  "key7": "2mdAuJCUeUrEmAbhEUxDBCQMfsZTjBbvGpYCRW71jNt6VqEWsAbLXkoFi7ExP4zkkWyMyfmv4WLRNT1U6D3wH8c7",
  "key8": "2gGmV4Vdyn654mQB4odpigDtBf6RqqXZZTMgE39eDFkVEWzwpLLwjvFWnCGHihsXXnE6hjVTXNC2bMoohSM1FBLx",
  "key9": "4bmyy2S4c5G8gLSnJaYGGWEEudcuiDYwWxKLQxTN3DURFFg3tZ6Tke3KNvT9tmQ5JW5Q1K5Rtdox4RQK2Q8AJbFs",
  "key10": "23h7nkNuTppYf2GD1xVDNaYjM6M4AYcTKDuscy6WdiYoKTqLa1pLZB5VEJWL1Sd9jLsr4vb7kJCgh59wVwXV95KY",
  "key11": "2HJHC85gxWuRtdt7vVqEdKkbHgGTzjUprCKPjekZRhJ4jfMDCoeSDqnB6h6ukF1vRVT77XGuPW3p3Mzp9Scy5nUB",
  "key12": "3gqbVW7CD3qBzxm6HdRHngdyN1wEkcePuY9DPFPNDpb17xdbmPNE239GhmAt5vn8GYRHEzeMPGuxc2eUYUZfTWLt",
  "key13": "3QaHwFHJ3eq7esP225WoYQNBorsocT95siVCriRSZCHuaBg8WHQzwQoUNevsQyP6p7EWMHR3FtLyQwhA4huT367B",
  "key14": "3u5BFzCSQ4gp9r8SzCi5apCkCZwxi4R5uirMikNqXcJV4S2tsDXfuDoWVpFddVqVp8bzmVmED23EoKwVN2TtirG4",
  "key15": "2Se9LjTWZ3BsgWeujwqw55BHDkuUNcTmj8DKUUXCa6ijCuicr9jHjrHcqmw19LG7JiCCJXmeJHaamj8N9rscA9GS",
  "key16": "4XiWrwvdqt48B4yYoyYPHF6QHoek1mMsqxS3NAq7SPKUHu419gUb3Aaze1SVcw6LFxLjNiJv4whiCvxWNPFqQCfv",
  "key17": "3PyU6Ht3jy6qPLYf6ndgBMbLvojvEfDe6tGL37SDFseTAJmFNWJtLmSfZQMtpjWFWkTwKv9PXn5e4ZqeUBN8JTRJ",
  "key18": "5cC1Gr87H1MvR6e6FHnXZtbdYZ7zmDY9CkVR6uBP2VNYLPdccuBBzHf71BXHi4YTcQu97QNWjjEuYMz4s25Gwoc",
  "key19": "4mx8fgbF9BfL3h4TrkKU4n9ciw8gKAdSteXamdqozqqcwtuSEYCLwXe8sUw5FDCm7bA5CKbwjQesGFeuMhwNbyL8",
  "key20": "4ZeBXZxMms3wGSe7kxAvW7hDwodGz2DCWASEPHghFLJ2TECZtshiC3AUfQz1Yz1iz7zS6CAKtWy7WJJcNSw5ssNk",
  "key21": "2yZGf5Ri7s2cRoY8sASsEe1phgBUaGZnQn4oVTuSnZaJHmVu1vqqEuFNH1f6T2qgCGiYMar6mcakQhUQFya8A8Hi",
  "key22": "2hN2JBJNi1zNQUFMhMwvGaNYBCWRd4SbS5v6goz3pCV3C9h4Ecit7mLFVL5EK1DvqNjRNKjTY5dXkX3NpiHtpWzk",
  "key23": "26CqaAm7rKVvv1rvZS9JKx1WEhgDYqKiTWStH3rvhFb7JHm69ebycxpQ96k3Bks6yEgaxweJapfH2V1mfwtsTA6b",
  "key24": "2Vta3g18TgPdtTXJaX7RJFPxkm7neNgHb9qwfkVhejj3gMVpep6AEUw71QmenyvQvn925c6zAQekKRovrTNL4vRv",
  "key25": "5bLNDde9PNChQacLseLfRwDaU2mnfMGRv1GUri8vPPCJvRstgbwtzMzpEcdm9atkauBWXBRpefM6XSpCqYiEGLT9",
  "key26": "4E4tgmzG8U7KCnJycCECU5ups21FYYpYw13vksbGmgtAKYMTJHVgUhBMzuicYVc5e13CxqZPNVCGYMrQzu7side",
  "key27": "3pLqqUcUHLBB6ezqZ5PFxTkpPDZ3Lm5rKCzHxwrj8AGPvvxGiz6sEyWbFBN6QRyL4ew6TWaFjMMDLRs9wtBMf3A6",
  "key28": "4JoprLvXUN521NmP1pvNPokTiqkcdeBeonDArwQD87sVXomzaCuMPi5qYwycejvSomk6gEd4wtFd95DXppHScyov",
  "key29": "65RtT5dT8BLcfdf6wmQmnJmXhq1qjQZiumVgVVyejV3NJc7oH5GyMqpwdG7LbHLFoxqno7KYFyYQR4mZ47pJehLK",
  "key30": "31J6qrPrTRsqrfdozzzR6UqjLvz73HY3yWjANhxX84Ai581QpbUfgGyDyy69e8wvov7eJJMzST3WhZ8FeRnD9PhD",
  "key31": "5w9nqu3hkbrh7c2GScnEmjrZ6NfQ54awQG8RogBY9M5WH2VeU9LpsBKpX8RJdMiV28kMK479SooP45ThpJD6tK1w",
  "key32": "4kwmWmBAr9cmteBcZabww2zUcu85rkoyUKYMCo2mvr7WqV6XbxXpLJKtiMWPwi1WG28cSSmTBbvpx2tYy5jryeSB"
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
