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
    "3LiNZGXJY71DUgRRxfQBbJvT4kjgc9dHQFNREobixiDB1feN1a8JHz6o6XQMKZminB16x2yt8GUHyAFcjG9CQRHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMHaxbWoQekW7HgMdUaqvSunXHFACK9JEGWzxfuxNLEHCzwaAxVGwJenP9Tvj8amECUWY5yRyBmtnCeTiFi9AV5",
  "key1": "3XxecNkDJBfuRZxVQ2iNssS9useWtpi1H7fJignL1tW38FH5GW2U5EFAUTGUeiJpDkHjUzK9q5C6SpQSEN8VQWQz",
  "key2": "vzUE7Q5t1hhZHqPUWEF8RG7sX2Ydqi5egnY1pXMaKbDnovpMFqaKkTKN2gWHtE7kGgSaGB4U7M9geZFL6VJiUT2",
  "key3": "5vrv1TqrCZ8nskVdrBA1QUNp8g2Cbs64KojV59hQ7wRnkheQVGy5hnNGBj8Nq53RhUD2afsL3nuHD9deCqoNoyjn",
  "key4": "3Yor6gsFQifX9KkeKShEQr5QaCKezfBu5CJu7XeLd6eujS8mc1UWgyt7v5ELBE5bpasdH3kxmGMr2QEAizn5PEQ7",
  "key5": "2RihSNMxBMRF27YV5agaYLeJt5sjd9GsW14kH8hQKAZVQXtYgk84wp8o9g9Buz4PMBqTroopWtkVaXyQ87rNxagL",
  "key6": "3j2FSBgxNgBfAADaRqHPARf6xUXdevXqwLGzWxMurJcAQYaNi1B2kHM7EgU4Qmw5B1NdJKJgX8wgfGH6ap9XAAXV",
  "key7": "4egsJpvWfSbU1cvcXbyNEbcK3UCuYCSoAeFXLFavSNXNixFtgMUh7fRhNe9dmkntk1ebvbi2e4f1wZHucAWD2T4w",
  "key8": "5WcUfuYfVEoss1Q2uWVXyzpuZyMwUehDHGNsdZXVCk1NDnXFHktp3Rd4CUFzCSZjNr6a93ftyP5YUnGBHaipMAgX",
  "key9": "4svR1zZxr6pNXETaYKCRSAqH4jskoXVcxvjMTKTuqK2BeJ8mxxqLoGcyswBm1tdCdrYj5ooR3wevTgP8e52uXNjH",
  "key10": "3TYJ1ha2dJW2EUDFtZc4Hy45Z12gFguLwSY6dTcVSZv5Uxdetp6uCz8BRWpSuDyqMU9kZziFEVGRFh78EFNNZ8cn",
  "key11": "5XTGBiRjDpLNALLkQWG5FmFhAYkUkJwgYQ9bW3Q4ZRmUkofwBLXjEiJ8FBodFz5PjLex6RL9hr4WT22B9n25vpRu",
  "key12": "3wyAxAEig1n7tgigEDcZcVxPNJWY9pRRsGWx1RanVVpuK5JhKqcARLEDY9mdwDY14GbEKWyQmGCLEpNCpTzWtYZr",
  "key13": "64Vup5M2YN1R65UKNkSXekgAAz7Wxnuw7TkCFpEsdufUVVzNsHygPuaTRM5iidn7Mc5vSyvttcLCUW4iWmfsoriC",
  "key14": "4S4UR9m73cSabmPuQrW3y86sdHF9xwuzhvwTCZKWNxuFGMKY1NTyJvTCV5rbyf2krzEUDsSMHsWY977nVV6BCgiZ",
  "key15": "633jN3wnucGAVLCdpgdKvvX8DTV8gmUr2b9yPj6Yp2qEZBwwe6cyDbwEdCL5Gy2yHbef8bmgLutRWXgMkhPbEFy5",
  "key16": "WZ65K4TVhMTV43M9PaCNvwQfs7zhmxCDYbLCjWPXZYM7qUFy5bhhoXuUWBLdjvV7tBouNfiHsqfg8r1yqRCGMHD",
  "key17": "3EmabufZa2PKB89NhbGWBwgZnVH9udrS5CCGWP4EU3Krek7yFrkbuf43NjAWg3eH6NLw8LRW5ifacUNDH99rskt6",
  "key18": "2V7LbqMgcZwkLfdEmJMq2JyeJABBbBWZLfNaH3cZb7WDbiUnfi5qTqHFNmW6jJujxjo6duzwpHnb1Ho7YgYakTPM",
  "key19": "31sQmYCPzgeA5urSeovxm3QiqMHma49SvY6WNV31xUsgCVkjcDaVSgpFttiQQtfEAyYubN6M5yP8vd7c8irmXcq4",
  "key20": "uvWChpergL9XSX5Pv4QQyvJsYVZm3bYdd3J7JRKa9tmj4FkdDutaQhp7TEo5BaXx83MsT1hfoSAjMWXsLAoZTU1",
  "key21": "38LsVyvHLzKh9VNXPzDBXeisGCui1VmxKDaEp4u6ExBGhycZejpcm9PyydY48875NdsPzytwp9EGNvVmJSMeU8xh",
  "key22": "5dVoPcjtPcbnQRXwKQ1SYegkkvYaTVf2ctY8tkqx4nNPvBLBXvRZptZMBD5guQjCXo9mpxvBCbeygAUZ1TQfJH27",
  "key23": "64YpqBiTuFnXBYyS5oL9SpDDmM5pQfRd21qAxNQTHTAQAX4usoqgpD9S62z4vtF7kSf3pAG5qWcqnJwAgb7g8s3E",
  "key24": "m6BZ8XbC8mst2ba58TJ6o3334L4Hceo75nDomfPsZDtWSeQmWQ89yfhbecNhEgaxkUAZaUrhC5WKYPW5UHgsfGE",
  "key25": "9f99ng83deVwzLmEqUTZv2cbhNHYUSKN9g8kgyDLXrpi6g9DAYQKu17rXsruyTxoCUu6SbgDx9MdXJH4b435U7J",
  "key26": "5fGHpf3V3Enp5CjrSTrH6Bz8rFGaRwQXTY8e3Kv8zymmyP4fXN9Pe4MshDczuPCXxs9WgvXj2hQH1eAnpAzxsn5W",
  "key27": "3x5GJfjz6XaCQqs1e4sWrkaZsd5HCuZdFJFaE4XfBH5vgNkN8SbxypMJxScDng6dXRMGmEtJP1js7H1E1CY7N2fD",
  "key28": "kZLyZDB7D9Sx2KRUDmpAuDmDEz5V6BdYUr8YLXZmvLoV6JnvoxEB5meiFnffTgsrGno6qNmjkAqtcupSiw2PkbW",
  "key29": "5sym7VGnNEyQrCWKtqGPmCquKhFjAdYYRRCoq9ZW6a5o9zMWUmM1TJ82W5nTKjXNat13HEK58fKPzTdVK2ZLaVYi",
  "key30": "4fUu2piMjgDV8Ld4jbERFYduocRxnYfWCXEsoKTmPYEMnsERNvprnxgwM6Vzx8WnZ9WVZqLEfELFGuAuWKgS2jEC",
  "key31": "36YGHDew1ERogjhtcYBycxgReYM9Y7nFAynMgjMU52ipAjX4SB46ADoSW5RGoRjRavKxAjsVWpgWTRoY7w6BH8U2",
  "key32": "KAfzqV3cFRW11ptKW7noRmEGV98jBqMznVbb7D7sj2Sddch2EJ2GgY1R5oYtYPoVvXV8u2z25sYiDzD6TmZL1zy",
  "key33": "4Rzk8cz4ABYKXp3H5nHvZkxzrKyCpLdsiWAi8f6Tn9UVapTxzL2wKfTFGgJ7vn7EZ3WZPfKrBj6Jc21PvxvtkguK",
  "key34": "5TQd1Wi6uYHnhVrfKRtxTtMaq9CQXgwDwkurbuqjhsLNzfZURKWfVf9pHGm4jV45G6En4B7hpYGVabK1YhJ6RHDN",
  "key35": "4R9a5abKmbxCr3ysd4yexPQx3iMDZqB9SL768xGoQL3ZjYENW4DC97AkaZED6vWPqDNJdyaQC75YTYH25sRpCan4",
  "key36": "4SMaaNaq3H5d9DdtzpbQymQJCyEWoWpBd3t5cTVE2VhFeSuGGTVVmNnQBk4p74qM9rkqEihXMCr7P9gkVhbTSXDF"
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
