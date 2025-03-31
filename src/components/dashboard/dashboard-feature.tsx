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
    "3fgYNLKUANh6wqLatjj6f9oc5NJbjNA9aeEdEsGEYxs1RX1rM12VLh3Rdyjz8CBH8VVZucsmr9GHzTZ9CEhRahgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sygWpqBh3y4pnffV9D273Aenr1xStRB2wSEu49xsBvsadWsdYcAam1g9xRq1qyHyqNihnbhoniJXVmkpdar5TZj",
  "key1": "2CcKCN9Zhi93i5UDayng66YJC3crjVnMUavBhhX7cNspBpn5R8pMEWirZYyBiidnUtEApt6JSrAZNpFs9zG7SJ9f",
  "key2": "5RXGg4rREFun99dw4fcKfrFvkp14NtrCg37q4vE7HNp7sWLRD63jwPHomDz99VHoM1T4VuFng1Z9Qz2qFceDsJs5",
  "key3": "5pqXXe8Xg2MnP248tCNjTqHBmB8xx4zJ1qEjFL9HARJ8sKoWBEQmAcmWJNLcGuhSs9fRguyQqJ7r4utBHe7Dvdyo",
  "key4": "aLLyKqZx2h4Y1rkjGKN6N2kthJHS5x67FEG14WsKGU21Y9p1B6Q4UGsyCkhmQ4UtyKx26kSaQGTjpmFpHrfgMeR",
  "key5": "3i9XQpEJEhqddwFYqenZH2CyjKU29DELh7AWKBJXXNAxQ1xrZKHsJHzsZSBQxf1JGXDeJbWPu5aVo614iYgDDCWB",
  "key6": "y8gYy1Md8YaiCLEX5SWmog1qyz2wctmtjZXhnfYKm8ZkLWkqrX6koztMT7hmFts5g1ZGpGDq4v6ZChahDgUzNET",
  "key7": "5yYtKKxwDAiH2HkDofwKamwBRefKQpj4z82jMRk4tCfMgfVvq9DK5L7qLek8NoXVg7NMCREUN3YM4qsCvvsrYCYe",
  "key8": "4sH2jZ6w972N76ZPBGmV2Erw63W4rhLXJkA14y183GWTd3u3JtuGHSHX5WBTrVqgpRjuKmFj1cQyHU84UeVY2uSv",
  "key9": "45QQwWLPinp7eKcR3NzXDMyR5p59dZfbWZdeGWmEkboHFHVnZsqPhAVUFEznSEUXbMWuAncF4gfTEpxvkLZKotuG",
  "key10": "AaRRJWpwnBaWQ5qK9kvQnEfHsx8QLtMs3iFuh949sp9uQRhbwoy44wWtPwnhG4eoH2UF6fVTGySQ3amnh6U3k6o",
  "key11": "3Hbr7psyiBoNWZLizhAjEgQ73hS1uQtT2qRDFyeGaM1W9pq18T8VUxW5B5L53WyrHe3JDbrF3nTvdggLAh5Z2mV9",
  "key12": "4nETdfKV6fR7omtgJCP3JSyWcKoenadDgJd3pcUQsLXf48mSpJjz8nqJxRjzdi81xP64VwbXD8RUA1HRhjUXCZky",
  "key13": "4YwXPnvJfup3wkKAmsUcHTuvYsa39Vj55gWjKRH8JSpiVH8ZdZxNoVBumv2ULWoonKE9zQMhPnQPpfabEJgdTg3",
  "key14": "4pCLysRy81RG6W683Q5Dzdcjhfaw3NFByrY6U6P9Cgd8SipiJsRhGxcQz3LoyQD8QG9VwtkbyMjRePXzFuYdLJx6",
  "key15": "5qUMbhdPMZ1yqtRRgdHdBc9fqU3kLTunbQaHtCdggCsT5Hyuv92kUJyqVidAC9mkxyFgjHX5ACH1QTeTrALrNtHo",
  "key16": "2xKC6HQaosWiRFcYB1zkdonowM9C2mnA5uJ3uCH5Lkkjj4RVML6M3BbAtNX9szwKxvrpB27qwfsh3J7F5EwHnUo3",
  "key17": "3qGSuTcHQxTNxCrzenVyFeUQXLoCsEVXQc2j3Jjae7dGbpAXYZ7h7BvMnZ7KDeYywNgGAuJnz6JpzyrE9ktZXaCL",
  "key18": "tDgUZFZnRizqsptV9riwmUWDbjHSRms4JLGdgGF566tqhEncqAM6DmZqvwfkMWccZpWqvkGbRZjEDky6bAd3y9D",
  "key19": "2xzytxCeEEoKEHgbTd8L3Bq4etrnVdXbHNAh9CXbUGVFoGnwXv771XcyU7tbYnjbVtvQoSGWAejFHCkT8zukfx9D",
  "key20": "6R5ZchYHNqSpHuZws7nfpRsyPv6SvrMVojqBNay3ARAzs5q27rCDRDNifTMRZnqNN9FMkNZzJDQ9qBHv3WsfEFx",
  "key21": "5q7VUEKvLg7JCaJdMwxkJaYtE9irXjQVs69w52qvgKwffMtEt4rQtqjZKzo8pQJi1TG3X3CEfdGAv2Fix9DWsoL4",
  "key22": "4kyzzGqG1bbGfsVLGqtzBKC3DSnxSFbp83jLZgWd49xSqWNF6rsmwF8m5AA3pCaPZZT3k9No9A5jSFEBR1mMZsQN",
  "key23": "36whCRrSPAs6uXQyViYkgWAS2czxLcMMwbvpAsU2BSoCGmAY3DnFezWwjyRMjpzXEHoufgAbED857PdnxSXNcQZF",
  "key24": "3CRC2rK2rncbL6sEEZV2NTvS6SMoYfDwGjHLCsgbHoZGFtk8iw7BzRYMNMXiVE4QisqNfqHhLCHFoZ2B32pFZFi3",
  "key25": "4xJS32V6jcSohknwcDYrNWCUvAyBGebqpRJW6RSw2BLJAdiBsJ3TCnwbwzN2G8JQMoPLo8YWmakDcLbYGryrLiKR",
  "key26": "4UNprr7ztF5r63WDNcuTwHCMej1uY5m7pf5JcWsYGTGdS9CZvCNERetJsLqW5VHmNABGe4aDnJWQsVC9qr6Cop6W",
  "key27": "3eNC5dHgGzq6swKU4erLh5UFRzubhrgWqwD92c4NssrWJbR7HnU4JWT1GfFsNDxeN7jw1NYawvvfaSTJU4fYbvHG",
  "key28": "4WHudBBUgE2NDjy16ST9o51q7ka3KX9Qs4bEsG2W8LF7nRZ4DV95mhBbM1KtWZQWw34SV4C4tCMFr4THFu5vBD26",
  "key29": "3wWQE1gzw5KKWLoNL2HLcsWNMsQhEZEPfAwSTmVJUpuBiQngFuFDnZF6DJnGxFqG83UovmxD8mgNkgLMqgXcqm9S",
  "key30": "nzi2WtCBPyDKPWSWELoCjU1An16ziSh5itJagamTPM93xQfTMdP9c6uVJj53EUMwxMCo6V7Zxzc74qr9BhpV77g",
  "key31": "3s3D1cDZ5VRHMxxZFbWhsbjSei5ctzZVGRyVcRGf3zd5swWMNSxG3asijcDaGTsL2ufmqAvcFaoJ6gxcnVfCY8jm",
  "key32": "2qxRjaN2fHJdCyvCFUWxMRtHP7Bfu7ZhA28VBJLZzZr1fLoF9cEXWJzDygnHU9uV2MEaoVyEMWQB78JGAYMdeh76",
  "key33": "3y8sufEsd6BcQKCoFyif7oorrU4PesoJmJUWsTCCi59F38CkLhE48QZQRREhFXTjsT7HULZRqVWpwRwKqRoZnpcR",
  "key34": "3e96KB5ydKvpvooAfxi7cy3m2tnFpk4XDVL3XPPNGjDTh2pLENaLrNhhETFydP4WEdudaNs6eDxdFbcuoWEttmu7",
  "key35": "56Ww7buYCBrz7y2W2u4dLGTR5LyYV2ex96ch3YbVErvxFbf1SMaGiWwiproqjvEnJ8YtSQ9bxEprSsuXjyeXc8cc",
  "key36": "3znQ5mzmgin5cDxku5H8C7zuFMkoTNgWspsSCYbFdcyNTNrd4T58G2PaSaSnRJqrz9N7KJ3NYKEBfbkwDkxiSDEe",
  "key37": "2dLuYwf7eR4rejQWAjMCENREsuD4cK3Pz4qUPRrwV2azcZ4yMbtzVa7aBgnmmLxTs4dBGiKPR78oXC1z69YNVYKF",
  "key38": "5re9EhXjBLqNisSdMaGzwsxhzrnFDiGU51NRSMNhnoRWCzgFy34EZ3NfyhE5KVY6Bpbrohc613EyUjWSzv8TSY57"
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
