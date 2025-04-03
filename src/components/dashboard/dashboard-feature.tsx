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
    "5wC75b4mZADEB4cQtuuK6ier6cdBojVeJwQS5aqRbZexXanpN2TGXQ2t2yfagszN1oEdzDpFuPzrn5kC8ZAYA7of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2meiwSuEPZ7oQzJYsnCixLV7w4ixMZvAeeXmmytkuTK6SAPdW9eDA9nFk6kEJLW3yKxdvGk5X8BoDFioseg39vNx",
  "key1": "3Sd8qjG8ysH4aLGYjPj4zi6c9YcrTJem7q4HcxzkmepuP6JYUF1mQ6fFUm1cktQask5vMNeG7iaVpwmaaHL4eHXw",
  "key2": "4HEytvtoGHo7ccmhfdcJKtZLcqM8HCL9h8J3omer87iWWWnFz4CJsFKzyLATfnmifUFN1Ev3EUQV8BLEpWiWSBLy",
  "key3": "2RNdrBy8kWmADhnXi3LkVzjMP1LhqBu7uozwEAVyecSetQu71vEW8P4nyAtDq4tP671vbzL2wCuvb9VoJTMjSHvH",
  "key4": "5eLKsiN5jxxQYL4oaQJj1c4RXXkrvn2MMsAYrVArT7gYUJUnSG41LE54NkSQtM5ZMuGK5nypVQKtaoYFZKoF2gVo",
  "key5": "2RJKWJT5WSjPSi5ZRbkTk14oBBcz7Tn9isXhn2ALRoo62YmEA3CGYFGQ7CPYNRQS1hzyiuVGfcQbptCP9r2wqrmJ",
  "key6": "52Erh6wijcWJFnPedkMWYQYJx7kmcyrTPAzvYSLdv1GgRZRnpHjLvk5RuJbK2tUQ3y2dYxtW2LVn22Z9H8HQkLWA",
  "key7": "34bJV2hwF5SoGyPT8iEykzxwYTK1vXpDWjjBvFKatQNKrDEwNYD1kSp9JrbkgcmvE6e7V6H54WhYpfAevMRYf7Y4",
  "key8": "2qhEj8SHLVvkRKCmV3XhDbJD87AHddWuRETXTDryRhvmyqfeXn2oLmEhwgfu36ELbGxuyXWFgBz2tSaJD9M3RrcT",
  "key9": "qLdwWSGcq8R4QYkuJfQzeWWDr4t9D8wzJ6G8L24zpmTspjaVBmfC4b2pjg5F4jXTshdDRfNCM8Y67oDSMtSQNue",
  "key10": "CucQzcqnfJAQq1m3iTSNFJaWYXad1ws28Kqv4X36g2kz1deRyQqCSw8psVo7ZdBV6Hxjp43df7KE9sRNqEty3Te",
  "key11": "3dJDgikLVwHEcWxjkpkPJdo8virqaQhdVo8MtdQa7uanBZfSVLAeHjQ13NQwW4wH2iXuZfDLQr1akdaRqE2oobce",
  "key12": "3vztbraepjTBQ3oyzRHvG63XUi6zBbDkiubabbSnrAdM1ftu4KDdb5nojEtEuBpvSKcpgJZdQnJK48VPKRx1njAN",
  "key13": "53ioQNEmYNopA9xUQgPVfZswUZEZg3bNfjKf3jDENmBVtvspcPNBjcSfpe7J4d4UzpjZY315FuGVkB1uXmQoRJvF",
  "key14": "5f6YYb1J8ufjkiqytb34FnChNV6Zo3LPJLs5XiPD4aoZvF5GQuDmgqbCqWNsyuRD7nLHxbFStFszj6VdZHPQBFDN",
  "key15": "4nWDVav1G7WuLLjRZxnNPRggLiTHgvGRdtNbDYi76jFxSpvyEnY2gpVB4kvazv44jS65HpTgAgs5YdvJq2K6g8T1",
  "key16": "ips3WcwJAcNoVtCG8xe8fg82jt2pRo5TzTAr1sQThzHdctSdANEaySXgGU4PebSqaTuvk5MYyUbuDjtevfUKDVX",
  "key17": "5guzyr12MTNgToLBxY1WGUxrk3YcyTLsrVgAH2cFp5hvtLp9sGfnP8ENCebNVgagA26JWVxx9XHzdDyhqiwCFmZC",
  "key18": "z28BVHztU6taobiruaPPXoTDp2cR8DjdNdnUUYJr53e6VhAhC95kqCKZy3tuXtuwBVyYjM6hbUQH6rLVgV5FuVb",
  "key19": "5dFDeRKjVF9rXHirAPjTThQEPqJLKWG6bH83kEw5s3GMsViGZaNej34LzCpGQzqh42eJp2VvmkUfFwNMuAb6yVr7",
  "key20": "5EtshVmJB4FwGJSRd1CS8mtFBCC1mse35FBFMaDf2R4ybNfJwGQPyw3sdXjHjxQaCYZ7MnWN1p2KwBjNH6ApnP6y",
  "key21": "5YBWkhJTSKvwpLZZiNDVXpTVMJhra4ir8eB7TzV5avFEAe8MJvjCzX55Sh5UBnYMFEFnZz8CJktnrvQHr4KK2cHA",
  "key22": "55WqKGYa4eVTkgtZbAiWEuKe4jnwryg2WCMy14yQtwHSNMy272Je57Kf2U5QyZGNiLpaJE5b2LwKpxUkWEXfVDeg",
  "key23": "36VWWKZeRjY9c7RfaLfP3bNADNB3VFz2ioeD4PCVpPjxPsoxW1MBQyJ71c8Ck5cdWNDQorAwevTcRgGtjoQShgMW",
  "key24": "2fjZLWNmRGXwMU9nkSMPN68RJasxwJRvzBDdtLfAgqxfRSfSn53jCh6wx9dV6jYpyB5wWqNGMTBZTtd61UMXQK1S",
  "key25": "569nZ7ALgF5dKjCS3vvBuYFecfm6XDvNreuBLtksiwMfyahWQNxLeX59aw3BzHAPZQKoQbbVSzSPHYaTTuRpVhBs",
  "key26": "5gaYEW1yETYx9WWoELcvRWstZJeer9BgFHV13EFSBZjEqM6bq2ftR6RTNbQWhEGSmggky2nTfGqanZxGuFVc3xDr",
  "key27": "4gHa1wkQAc3UH4duPTApTGaUzbf9NmFuLGxvNA8qhJyeTfZZBJHvQ9RDy1B8zD4VtA4Rz5H7RKNj5rWC7bm44yF9",
  "key28": "23S7rzdXkHanBGrVSgktcEtomv2UA8cijUH4D6RYDvUH7rrQrShYwtyWYyMTr7EVgD2VPg6362r3nc4vJC4B92GZ",
  "key29": "5Qk9R7LUR2PrqfsGumY42NqKmHtSApYCCMkUjhgMBiezZhd5CWLZHYXvAQYaL7JMPuZZVeJAkPeadgE6kfqFHo17",
  "key30": "5a7XXwX5aomejcEFPAkKudSjqZafkquqdJ5KkgJq1hEyMsHTtb6EEX2iPRM68C2eug3sgjtcPFXGmS8A2fxWWmry",
  "key31": "8XDejbc2kfzXo1oASZu4ZKp6Ykjq6cC8en9VpiRuMtfXA2oRbM4n3mN7zHLKLxmJUu2kkWUPAq3xisQZsoYwQRc",
  "key32": "2RzADSgvoHLMrcJgzaJzZzmAi96qtrdWSA8WAwq2GBCQqjMF312AXmmwnvzraAWgoEsLkv7dKACPv3E6RQ13k3yL",
  "key33": "4sNzjC8Gs3gtq8yd3hYHP945Wr5DQ7MgciYShLbgbVNspJ6G45sRqtvRhsD9je4iuf7XbYgqocN1PuxYS7h5BhTA",
  "key34": "65CyCeDBpFnHFiD5f2wXebSUkE1p5EkVhyTb6WZLcAmAH3eVC74r8vUPmQr44HhzjGXqqDgqrTW8onfGBYvw2TtK",
  "key35": "2PFiXuty9HP8YUBTmGBGssjKhU9y9XKZsQmn52xpEt496hn5ybhd3a4huUdV7qqyupaQ85UNAaBTT7mTmBXoUxcv",
  "key36": "mP4U31gmrzNAHXdHkq7BePy5qTE5fA1M3WkEbvmFdKj5dUWYdZVp25Q5LW1MyKGKdH2T4Qqr3J28xDPkcBs3EqH",
  "key37": "dfsSXREyNVyhYoXwaX7ZjDvQiFCsxLWnhHJW2bDjtajP4F1HxZqDP3SWFiBh3USSvBnVjhqzKzPe8UJdCBdHAvR",
  "key38": "3bqyTnx6N4ANHiRiZnvCnif76Z8zF7xtKeESUoooepXqy3XvnSBxH5jxUeoYjZgfJtaQFWnD62uxG9Ui17MosvqD",
  "key39": "pfPpkZFoR3ucFU3kB2t6Tdef9tvoqBYrpnHKk4Et9difb1kVEDMrE68Z7pwuN2TMVnvajuZ7fDJTVLeHx4u8MMk",
  "key40": "8KKxqZ93ofrvEuyNXXx7GJrSWbfndyFpBP7oKqBg994YSsTYMfBRPW4HZqaiGc3GkdYkA9Bi7MRUdD2nWuHhucL",
  "key41": "nb8t6YkMrVf7XHpPhwg5swHtmBEmJs5uNJU68s6yhw5wjkVLrVHXXhDCBPGhwYPkS4iqswa6EW1qYqCYMg6CA1j",
  "key42": "5UBNkdviQgiAjpEWJSBxTSiDwanDvmHHeEbTpZCQqPMn7wnnfZTkytKV8yNdXx5CAuho525NbTbUwUddCfs6tegd"
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
