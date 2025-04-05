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
    "2L21ATsdCV3Zd2HuxBeio5d9h39Ap3FSHvsD5jRjTNAHro4ZCZDaZsdtc9T14ZX6P7hVArjwGYRCeJwKS9FRpkKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aEjajSy8tVWVv9EF6FCRqsJM6vbDfmVmWCJFNsC22huC8nEkhJgkNzsZcZY96ztRxzKnbsQYRMBEpoX9ufjG2YA",
  "key1": "3FFgWkSmQPU6QEoqNDsk5edgxaoMLap9HSAWDY8LQtVZAB91swx7mGkBdPbseJHjkmxAUZBqrBS8Zupc2wk4PYXp",
  "key2": "5QLUwSjEnCtUrkJ4sUQjVMd6u16LcAYxVhsDro5UTUo4yiF5XZAWoxaFn1s9ayLW3idmsjEXnTWosK7dXiM7u7ES",
  "key3": "2LaKRZkubjiPr8RvDzBEHmsFVB34uMyAFz1RzU6BGqdBrQXXun2yBi7yZhWGgAad9JAzaZwwmWj4Y7s8RJpQ8LNd",
  "key4": "5ujaYsgkZPJ5ZX4T1w53XGtj59um4HvFqDjkK38Jt6RaGbarPMae8YnDgTfXXhv3gFX8BxEs8irgj9bLiKh5sHS1",
  "key5": "AQw7GkdpLxnhkD2EjLfEtaE1EZA3V4Q1fwfTq8QQQSX4AhPD8SjSbRjVDh6mBvn1m2tuY5CLdrtCf6huLBRjCDh",
  "key6": "5scZEJ16DBVXkSTs3XfztiYCPVWWYmzxm9egG8zWmq6S4Ay9GLXdhecJT4vPEBD2SesgUU8Qzg6Yp64pNaRMJvRv",
  "key7": "5EiBBQ7gnZmmPjRCUhRFCss2F9nZQdsS2vhG2aVK5V2W1ZVuEwRLV8uUBHhd5vTqWox1vju5WcdQF9DkHG2aVZyd",
  "key8": "3gMm4cXRzFbQtAM6a1ZcWpyQuNgLtZqR9DBekjZRY4z4LfFsJHaPLyQGDQ1VmP13JaMC9i6MjYgjCF22VY47KMC2",
  "key9": "5NkvjjuGWs4t2mhD8BNFw1HmR7B4Wev7uyALxpRhNi833vTG4oojfccEMtf48HGuneofe1FrAtExA989G62FY2Qm",
  "key10": "67LhBr34jPaTAfXcsoedb2Gq3qWGD9UpxFy7mPYutgegQeXQs62ZH7APkyDT7mv1a2Mp3vZ28rQYBYxZqu2kNUP9",
  "key11": "5eAiW2RU5KwwZBvneDKXMZofqhuCZpktRDWvhaZnGddbYu6scVY2cyW3AzkVnuQW4vfjhApwxpk9vcACALgMomou",
  "key12": "4vjZ61WUyZmsRF8epTBFRB4hEtip5wzHWDkSMCu9Ts74uFi258K5nnZebbCAfsETVaWxSDsKGjUXMDzaZVqoZLEg",
  "key13": "5PL6QeRqhBdxNHeSUfAf36ZpN2Lc7wZEmtrAuR6RTHMeyZwDWfZ7DnPiiqUVueMZbbGdsD1cJ6zHLEu6NLLLYGBz",
  "key14": "oPzW5QTLG1QAm5dMRchu3tiJWBkbrAEeSAwkGADfkhZ7Pms83ZmMtE2ixgUwaFjERiryV5jWXz4MXL6ShQVmbqQ",
  "key15": "2AcksbJyYinZHS9PQkvo7FTasCNU3jcr318q3gceWeRy1kiva9jvTVSTk3p2eNyaCmtDFgvrCyUFzwEuRQQDX7mE",
  "key16": "5zJFYj4n3tugk5a8PS4ZAKuKJCZsFp5br7gV4YNLm2C3JCqEmo9UyCG4hTGbM5zy2HpVfgyiPtmKndb8V4ouEx5n",
  "key17": "3RZ9M5uLY8842RbKQjazGXv44oZo1F2HvWMmsTnKGsPi6yXvnqkw99VwMr5GGz2V1LgvkgEVmWWTQde17YyRyMhd",
  "key18": "51yfXWPqK862FZF65nr7VbazSDa62nLrTs4SRQtBQcDgVE4Mbd6ApwQtWZPYMbCpfSXswhFtsEymKk8Prv5Byjs",
  "key19": "29HgPRbL9z5zgucjCgRp4JickRuqu9vCoNKN8Qoda1LCzJpZJwESYHY2yQ2esm3ZHUj5syxA7xcpi3VSX9EFig5d",
  "key20": "3aMQU6H231cM2ELTxWngGVDcCx35PcWxYfxDY9m3FmDMZTF2uJPNVGVggpYoFMoFftmzrzBx7Tb7JGMVtDoRuemD",
  "key21": "3f4R3sFye23aR8L54SxP1A8EqNP4sWnVTfjh3DAymUWyuw5SxhjA79JyMD6Y5a5EgCvHHyegTnF3KUyfybtvsJSo",
  "key22": "wjBckdeX5FPWMYPV8duXnq11RnGrwvaeASMKRmfgBWodMFAkNvihDm94R289Ni9Ks9oT4K98kXSErJx1hjDuza4",
  "key23": "64J4zaqP8w8VMZ28XdnZU2dF7X6Ban5t4Zs1uUSuAwe5eguoHUK9Dn2cRKfYKtcafyZUxgbHTyUguApYvxS7CsDK",
  "key24": "3ciJWBuEnWdVZMirZReJHFJKsBjw4VBGXAR3sWAgrKA4Z1TKH4YTnyzh7BwqTAjQwfYRURMR4GHgZ9WLnWsR8emn",
  "key25": "TG9yLDn2WJ1uHmjkSB4zuEeunurhrphw1Z7VYzsiCDwYdidGVbGcPastVQ4yUbMy8c88mNzcR9cigwU79KvaugD",
  "key26": "3TusHAYJEeBQ7ZTq8GRXwHMQh3fi9yoyP9YwtgvKm7hMQJr8bPUkTEpcgcPyi8L3XAthmjrzJHiR3dZvf4z7gcZe",
  "key27": "67TowM3MhnhuT2yBsZ2HCiRJ4zaiY8V8je9weLekcXY79THGwE9qgEb7cuZWdTQoAkYmLRjFVhJSQohaj1fUgPRn",
  "key28": "22gdetgBWq8WB5Vk4NVa2Z4mSNuNPufbVH386z4rFLkUeJrG4QHtpaZbjcpvvWcSWCiFxkzUefLpvH4MKFSH8zmh",
  "key29": "3Quas61B4UVTXirge13LCkGNL7dUUkUdPCaVNdzu6xMWAeZkSnkiqWBFDfkwndwW3QhWi1rCAVnAVx5MXStTA2YY",
  "key30": "5jrngtXyvnfS9MfsaSbFQhFM5DjLXvzKgsXTcjtaC9o5f8TQneJFb82fosyPYhfdrJS9kP3wv4HRZjAVdUY3SyYr",
  "key31": "5Af8eLsC3JcugmduzaYwypqs8z2WHRTc1PH2HD3U1mtUBhafDaXihruMhirV7X8DrQn9dshF87VjBh1ZdCwSK8KB",
  "key32": "4veHVcobZNXwQkiQZuADSY38ULuHMwaQChVa7bKnHFr4arVX9TmqJ3Py3FRfkxkJWb2UMaApHLFoLW662LXXxS8F",
  "key33": "3iGjE6WLQCLaNyhhpg3shuwjPpap5xobnpnb72gJM7bJ7AxzRYMrnepDtxD6J4U35fzrm141PgK35udbhWbK9jKB",
  "key34": "4upSa9THF7YRjaNEVUSnJeJid2VijCri7mJsGiGRpPCFqUDxLJynFdgh6fg6hRE4wWkMfLCPmFkYMYpaBz4c4TRb",
  "key35": "49crtp2GQsGg7TR4jVVYDP81Xin5iSBDMYNryCQURS15Bv3j76b68T1rSFRsLiv2on7VWVy3esSSDyhuA2p98CNS",
  "key36": "2y7xaQrVfcyWGGrTVUnCksYiM9qd8phyFtgzMRCMyTASgj1CWhafFLbtnAEqRf6uLKonnnG7eKjHhY9SAVTC6ojP",
  "key37": "4CgFHExgrTdgaAu6gZzs7Z1DnJ7oN9qR4Keuq1M6vsGZUDEW9zw9ugSacQHXZqJw4Hxin5w6sRfUirbBZaQNeEQV",
  "key38": "3S9HiTNDUaHXeBSYSLafj3LNHfEYEy7ry6RKhREq3geWYecuPb1kvUdisYVuNSgCXyENSVfWY3SedbYWg3nWY5fC",
  "key39": "3yS85hrEjtGXWtFM3Pq4gYDte1TSYMkLWqNeGNLBvyrMg5fHdq2gxUYLpcivSpxgCLUMVwHaTCvCbDgmjEx5LMhB",
  "key40": "5S12SxZqZpDGrD181zHVueD18kapK2cn8aZEtPqznh4bTgjunp5soG29oLpNLcvB5buf7FULvG6VDGyjVHc9Lz1t",
  "key41": "4Z3DLUVqv4UeL8brCjESTeHSVQRydHqD2WuwdQdTibyBhG5Um5iUd2fhgqqUCRoMXLUc8bfB6nj8RrPkpNMmY53L",
  "key42": "5zKDyC7EhELj2op6eL6sb3WXCijTqchABC5gayd4bXLVGxvysoityQQxMynBSgRaZ885dk3n6qhBzMzL9kyVbosM",
  "key43": "TV2Aoa59Wzh4ApME6xMsX3cjtATe1jNyNBGp4Y1VB9EP1zKEwer7nSw2Evq6BUj2PWmnT12pTGffrEkue3rja7a",
  "key44": "55Ss6JuBwwJaK74jiKBJeaFUSft1uUvz93QycuVSgA3boHWuYLVZjd73eMTDmVr18pFuBGaLcYrKMTpnaDydsWSR"
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
