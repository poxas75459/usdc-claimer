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
    "53qhs6J1Yi2bW4FhfNiykLGg9GJRWzYEqcLo5zqBaemZ5PWQdFRrRfhBYYZ68sGw7yq2TGG937esa1mtX4p762dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CP31EPCLKQ3TCtGbxDdDZme2d6gz5fRzvKBny72r8FsWY3dBdY9wTNhSvPoGoe7trQhLf2kpwRZc9s2ohnKiXQG",
  "key1": "5RwE8E3Hzgmyqy6YxcxRemu3RaiaUx75ceYVJTM7mUT1x43swuUQtRhcFy9W6mWTP9GkNEZBbHDrjFzcjUqUFZU",
  "key2": "4njXLZFJ1cYNM82ks3RcP3hQKoyjrKhdEzTZ6DqM86bmBgyQdyqPW3mpqktF6tbd637SCkAyEVvrxvYynLnVQNGV",
  "key3": "5ZcZe1L6Wd2P7aZGdrn76jhJrE2j54Bjw7HSmy2MverZFY8LWpkLKtcCtQHMz4j6HAe7hzzZcwhzxrf2bLQuCYZt",
  "key4": "4FtbRpTjNsA26b4MCNxwjsjuaP7csSBBHPtpZn3FYfxHsagqyZSvsCjxPi2EdVuNX6VUmMJzPB7nECNvz3EiR7mY",
  "key5": "5JnwU2UYzzz9Ex6X1UiUcAQLiZ72aX25LmugcaCYCq1iYUzxEa6GNWvVWFMG4RW2qBTF3AK9PeVWUBMciLWqTnP6",
  "key6": "3U95Wde62BKsGvsyGQghL6ub6KnXHoALWsG3uk1XMd5xw2rHLbd77fwSphVBytxM7cEUfwt7UasaBDwXg588my1Q",
  "key7": "3KrBZsv9biBkhsowie9RjfnzhGAhUHfHAiHvuhePWHtxrMpnwnfW1dN9AfMYXy7CAr9dgnHo9XR3cwVyMM9Ko7Ea",
  "key8": "F9PJmHSDZZBJuecs632jcD3GbD7UeyxNdE6Re9gVymiSGbg5Uy9rwvFEgFurkxJfXSdRXvWEaeYSVGqKuYwFYN3",
  "key9": "2WYt6X5fEgPNXYYGMKs1MShpUrxcUoC4WkKz17UZeEuC7bKSQ9vpiDCuz1gm3pVxkc7x7G5qzkcABL143iD1kxaP",
  "key10": "3GApCprbeTcFH2kthsX6BEwxpwkofW5X9eGoqoMBRApimBY92dK3qBhZUmZ9BRH8ktpK3wyrTNb6TU15fDcKLBxF",
  "key11": "3ttmE1FRUgBVjq5HsdyMDnFtKNFySpS4t7u7LfRytv5bEGh4V8BHQZamoQ6tr8bHBXsSFrG8tiytpwsMpSMDUVBZ",
  "key12": "2onacL557gfp3RqiHFELiqZbmbq8RvqCgq1oTVzwADofhRvYgn8kA37BKypcgoxDxA1tZM4zvx1fwyv8V83bVo9c",
  "key13": "4Woocae3thfmYCuBTLERXLaroFZTgi9siYTkVSzUxmje8KHXtxhA9hbZV9VFHg6N9sHYHpQGhbPcuWw9AScQQRsy",
  "key14": "5iSrUXwJqSCNzsUQkfaJJGzQKgasPjkHHwoUE82U34j7toPM8XF2hpqsoddua4gdwKZGbPEzLNVvEkCHZYQeRRpg",
  "key15": "2vP72QSPN3uxNADUjh18saZuNzc8xNc7yKLN7gnsDz8uxVn3n2tEjkMbBMc7DDwBHUju5PKEntHjPjNFKvJHxUrd",
  "key16": "KFZCL6EqUNPgEuX6EyrLjpFXdN59yfXuANef5aZcRM8q95DV3NkeKNJ669gTFrQ3UzAnqRxQeMqdGPVTc45RVEG",
  "key17": "4E7SAjWgGmEgLti8h3XaqWC3y2bWXXT8bBKAkkB1Dsf8LEygavdvB1or3WRcYRHC28C3GdReQvHscRzwwgXXbrgU",
  "key18": "asP6aCEunBHsMVXBoVtDgMY43YXMJvozPZ3Wsv7eBzt2vCoRkdf7zqG9zt6vAZFd8WwMNRBMQhHLzu5UqFD4as6",
  "key19": "q8UzV9iv8aj6c3HXzP5aTgLVbTsfwMAUTWXrQXBKRVjGyTnCg3zMWkvypgASovJxd7EVQsqwiQ3n7gVaRCALqNg",
  "key20": "ASFQaPKEm3JxMAhs2NKfsesTQ8xSoahLUCoyZuCcZjYr22CMiKEcQZVvpjyFwpXLNTnongnR74ioiekGBPhhQro",
  "key21": "56reEPK1Nqd32GA144Y6qNKogJi3tPTiUv54BLwvWA73DtXaZtc88qGqgTvN8QBBxn7HpmxSE1EQu27cDmB7X3kQ",
  "key22": "mFUqxeWt1HAq3Go1twQrTnENCc87x9aMT4Le4suprQzavKdg8vUw8KLTT1Z6kz4JCGBKC2fJ7GE9vi5KNpLv5MP",
  "key23": "4TkwDanEiS5ffbtRN5XfiHpKDMpJDsZzpvHqpsJbzznBSGNQnfaU2BK8v7sUbUPd6REnpjn3jwpKkmRy6LTmkMqb",
  "key24": "ZVQeCSPAb45GKEXRqTBy5BhnCYz13YAcFJqx3Q3i9VYDG6Mgf2zkVFbrKLSQ4V7GaSZEyStDuburEYM9VDAdSof",
  "key25": "4M5uupe1hwppxfr6HnaPYcuCWYP6NECmELp6GLCwpmdLcRiF3wcQtJyk4MFi4Ahx9xZhSoqhKekLXeSDTYQiaB2t",
  "key26": "2MpDHNetsPHswz42G7RLC4Xz99K74khfF8dD95oMYCSe26moU287XCaHsBmhBdXXtv9KTW5CG4gscsuSHgzPdT4c",
  "key27": "AonRCCs2mtEnMe7puEeJH1yHG7ahwjb8RcVXLQeyBxucmSDevqdj6KRab2BYqQUUdMSU2w3T9y8n1kf2Eu83uMY",
  "key28": "2mb9ZkVftpwqCkLnYSMA3t8o9TusbJFHGKuWvfXjDC495H143q4rS1iLLAdcidpLh3djHXH6vZefUpJNuoVmMm3a",
  "key29": "ZCmbfoyxaxxhnLPNJVDMjzp2Q4jjf6g1y8fc81tuwzGWQkdzJ7LvRAaBHQENBoJzsSfHBo8SsHxmWnJVVMMC8Ky",
  "key30": "bQsqx7AARhuANvWRiZJDjQAZEKRVsSV4TRyuvQjv6Q9Ei6atNvQUucAt5Uvmo5jLtchvFApJJso12ss46fDWK3S",
  "key31": "NCbPwP86bJcWHS6B5Lxo53SvN3uQeFozktgdXHW2Y5mJaY8HrZ2LjZwfErCgwQHBfenRx6FV4QnR85AtiDjTAvr",
  "key32": "mSjWd5UMQMpo1BqWD8tGC6Vv6Ef6fzoUgAwQKhxHJCdM2Wuuv51ZzjVeKE779hxQdPJW617FkzqmjnSDiLpWoYk",
  "key33": "5ebnd6uVhqNhTCgeBbgLfDQgjUfix611NbGPYwwRDq6iYSpSpbGXz74zm29TA3ur3N5iN8tYUEpHHQ8ZvXJU3sBX",
  "key34": "46RzYndo6MG4EqXe7D9dib14T7zy7DXUWcUBrN64qafqu6sjQbgTUveP9MZi7rXppnEg2hdRfXZM2yjSEkTYCG9b",
  "key35": "4RgZLfN5f14Dm9o5QPyTyx5rz4994PZ1xNkgrWP7Pq1LK81k5RFxrzxTF6kSp687mpuf8wddCKokC2rJcW9iVbbz",
  "key36": "TwQjUWUJ2E8gU8u4XinmAyt9pQ8yHsCVGEAzZyQpbHKkCsu8uq65EKEoZ3zpv15pRPThBdXhGjxvaCvp51eoADG",
  "key37": "pDYvuECSCB6R19oeSaAk7Kg7FiuJ1rJvatJbv17UcxzVAdd6Trh7ue2GeJUAXEQLcEmyoN1yv6as5Aj7s2mU98x",
  "key38": "37hiZL6C1ZkU9SUPFUXfoVZBNvSzBuUWhLEMrcyFZBhpZ1g5VEYWKRCDrTAGd4ThCSY6WZXwLX6zuNRQRrZtdMAy",
  "key39": "2mCoagA6LNyTzfwuDAFyMJzyk12WZuvP5hWawoQcrgX3qxdjzyAfshAWCURbuouwV4sXmnY8gqbiTin3pEYWZe2J"
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
