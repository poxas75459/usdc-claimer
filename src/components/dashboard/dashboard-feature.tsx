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
    "jDXLgLSkwVje2eCwv6LKeUzTr2z2xPrCd83kXwxsKQ46qPBrpTSYjb1AfGeYuPV3gJ5D7rzQQvmoR7GBduYM2oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2noWmS7z1rTVQK8jZjFHTEpfjYyyvfnJT9fUEbFGvc54PNd5RH4JkozjfUSs1gpCLfjU1rj1vbTgDQYfbTPYxNaJ",
  "key1": "3BSXrh7vhmu5kyJHWymdgirYnFCttwHV4E1jJzBUoTrrP3EiWD15aWx85F9dwXgVZsix9hPP2UKjpjdhT5HoahPy",
  "key2": "5dV37Pht6FPecoxx7komBQNgc1NYidXxhAAt38UghA1dZxaX4RrH2tfqgabo6gnWXgoudKGQetTz7UgU3qr1KtA8",
  "key3": "EqSLBeazHMxQgRxQYxWBWYxy4BqP3hr2sW2Wgca2SxuQe3mSpDwHW3CpVeomyB4fASXZCAHUSV9ywPxiZfupizG",
  "key4": "27fwKxffRaygzQCbrayPG52jW5LnJKssJnfMjWNV1cne8JafaV81tYWtkA2TBEycJJENuaRiJj69tKZgoBVm3Ckd",
  "key5": "43bDMki5bibp7f3hRPwQJBy5sd5gYT398DGfLit2fnCpj9neRKhRYD85qKQ9BGE6UrwpMxr6ZnrDADZPatszn15A",
  "key6": "4V97AQrGTJY3Muap7xbiLDxBVURTbBkdeo2qWxrWyJFkV8nKyi7aKKei8hd7LFm28kaKLsU2SNQ6NXrPB3vdGg92",
  "key7": "344bDVPJS1xwSupvsX3EnbZut5ZZNYSHtrqXeRWgXMTpRWhp6XN26xTA3vRSDD5TMEm24fE6rmS9GruRWbNLTXri",
  "key8": "5jvMaszp3xgBUVfRfBt2ZSYSehQoVZ3SbW2ysqXGJEbNnQK5GgyBHKb7wNSpr2KqXMco5b7h41abmu8Rbhtqw9wF",
  "key9": "5PJ5GJ3WW34YJXiqMPVkcC9r4j2D8yooLnvpqAaGHke3PPeUcQ2SXUpSDw4GwrqxwYMATARokHwXHkBy11DYvgnY",
  "key10": "2qWTZF36CVQbWvGfGJJEro7meGM2cu7LuSJMzLtxyDyoEDoUy7FHu3NETTELf4L8sidK76vozueQbG4qGYCJvo7j",
  "key11": "227XqoMBjsPrsg4zVz7JozajS7dUX9DcFdjPbMYCoGw5gB3KhR9yNJ6hxpQWAEsgLXBEmTVtVr4ZcHvTyvguPtKL",
  "key12": "368A6HAYGgaqd4w3QmSP6LEFTamKiJc1vh29kkjdv1ySPfKFWVyxG7S7NmDgw89uzWtjf7mB6r3EJLu5HLx3xu3k",
  "key13": "4JLxqp9Q5uzgegXNWQzSB6ZrvJHSSs1MjEsr8ngmU6hhJsV3nPGgxR3DqeQh45Y7g9aneR8BP8tiZHhRHnHYgbY9",
  "key14": "67a8KNBoKJHtpfsVswMnLBaoDgMpkTCr3RQNbCZHMiQ5aMVZa1TXuJ7ajj9LaKFTh1dMQSRLYZZYtEogJtdrCnaj",
  "key15": "1jRh4o7Un4E3oFBy7GCyVjfozsVfhkhnbBTkf36T8VZ7eFSZas4ieb1wzN1zoyG6qR6c3GXqRUZGY11C9CYFtJp",
  "key16": "5QrKjQ5ibpCmVrAMZd5s44zLMaLATYM8nBfWVW35WAz2ED6q6yeJzMabSoaCFAbnkQeSYXTtiMegZL1heecmE2bR",
  "key17": "4YBsXTgtkWf2h8ZSMVks3KKmySFNnEkcwNMWH9QXuPjgQXDhxrdzAxS28pkgEbBqB4D5qzKoJNEnRZeNmqph9wq5",
  "key18": "2wiCzvf8Rg8tyehtKm4ZF5jtJSrwssRawHJJv85egd9g1rSU7mWxZ9o2Ka47nhPBRVcR9kzrUtaXeRwTFpnHEpJ8",
  "key19": "2FJLQGrQR6k3mHppAZzAzKPp7oyhSGcF8Ly3g6UrQ4TMyrYvobCYRFcf4KmJRGv7cKS7ksQ8aVP1k1qU4eL1267T",
  "key20": "4VgN2uhQAFAgyawzM94vd14aY1mcBfW5QShNQYai2TZQQc5ExahSBQJstksE1icpvfjPobkzWY9ApJw7tzobDhZM",
  "key21": "3SF9vrszreF7eLhq82aKtUKGx1rqgPtpnXnjeUFbZ2hUrxkxsYnNPu32pbFS2J3bW4ZqEpg2zzFoVgZDakm2dLka",
  "key22": "5WfyMRb7woZ7iNRsannreuyB1LnADELDptzYVXickyFrhCZayGxBngp8GwLobxCY9mPthFyodcCy8T5BXnRyit5",
  "key23": "5fPJ5raMZUdKvBQYCLZymJnsabaffGJtSaeW9Bb9MYLC3Bf18SEpA8MRxooapKA97hkV135F7HQFVnJHrnnGNaXG",
  "key24": "2QWEFS1TfSvHGUwSXhqyW7aGdk3ySogWHaW4HY1uFhDR9CyozpH3oqg5Lhh6ac8pLPktDv9asCVe1aEEzopZa9oc",
  "key25": "2eJrd6AbwTpXcb9V8oA17ZjtZ6jH7ntcXYaBtHakwarPNoSYtuh2fLBd7r4jZmM5dsZYK7drbDoZruQpVRHnexC9",
  "key26": "4Kkq6WJtbZwEKGNZTKpp46tLMRgPW1X2wEfESvv3JcZkfbYFSpLkxvgrVk2dL7twRP9j2t6P6UX5PKg1TTPvFUy9",
  "key27": "4D5FUhUVKr3qVoaXP8gjdwQ64HMXCPzNSsxETX296TewLD1SotKTLuZV3CsgpJXMoCM8cq4mZdptZMZ2aScdX386",
  "key28": "2PLWbeVwepVkYFbUg1v3D4Wz538B9prN4XrA6td4fApkWfjyPcRZ87isbadNcAbdqKMit1jeLpqjCbihT9nvCMDY",
  "key29": "k5ifwzqig8jQRALFidF1EhfeGT2HmJ4nzJj4dZd9hGQUTacYZsScx6VG6FLwFjWabMztTJjF4YUide4wbxb3MQP",
  "key30": "57UHYo5QR2RjgT9r3YdVjpwJTF19qG2umfxgUEM1uu7W95ESayP6MfXimgZjvbBXYHivyEtyo7woGDiDn3BAQ2j9",
  "key31": "4TvSzVVtUbL7nAH4Ej5xjrUBNUnd68rLngygYvm8eCnKBEKNkk7T23TCRqsYfmC2CbdJkLnmej5nQDGuQHUtNTfQ",
  "key32": "2bfNJQaC2fezxe7ccDS2ZkmmW95cLS3pPcqd37WA8cBjA8h7k49tj3Y2mwfBZfwsFzgxiNB4Bn5YVAL4cLDqq1Qa",
  "key33": "NgnbovqCDcXFWoSgk7WLZMhkivQP3NaoMXouAZBBjT1B7GPUDTvazS2YSaiJLnYZuEXJGRdcWDrsbx9X92ssPmW",
  "key34": "3pF7e9WKzYHhmEGmiVng94NpSPxdXivzFNSvqEZSSXW6gLCLRYpsDjA4xBsBDzCxwqJuyNnhEBcaGMJJs5wxg2ZR",
  "key35": "5BRYbNtuzx5RWykvh2Lx6PKBZ9ojtKkeSgH1JHf4DHCjftwPzZWDZsoTS8nMytSpkacVGPUEj2AmT2aD6nYeWJGj",
  "key36": "2iaoh3XbMFM1ebXof7T5ehcYxCZRpGqzsfksKgj5Wxwzq7Xv5qSxKaxewmFvsMtDtV3J1kpZfA3kRkAxioNj5r9Q",
  "key37": "KWEknLrAyUBfzsV4jVgFm6oHF4AZRQ6ntqnxUaFjCy8Y6jDQBqSe87DStg877TxLBu2u9itxB6ZfWwCsREYmGth",
  "key38": "5fKjUvkXCo2btXFpK6NbxJQrqzLWpp35cVfWFpE9msvbiL4pHojr3k5EZFCdpiFAU739LTaHF3UE9fsde7T3mnoA",
  "key39": "jy63sSEwkpYHTXww7FSXANXiPeDQ71iDvMf93ZiQSikAeN3ndhh1aiJKkDv4TJYccDMsZBk7MqQd1GV5NNZWiR1",
  "key40": "2BMTd9nTTAYswPJ5ZUVNKiH13ojUUktSnPrQtM4KVnfnpGQ1FjJF3BwL1HrfbZVbpSZBhfE4rmgwcRe8HLKMdQDV",
  "key41": "5Syxfcq9TDovSLqyWVFT6PkdkwMNDAzLkKs1TdeAtDeNub7dTBHZjM785pTBL8Ny3H1xr5qF3DddD5Jw5Uw38AfJ",
  "key42": "zpQf8xdBKqPBhu3EGStYvdnnRMt1m4E3p6nMYMyuMiRyZvJBxBEU3E6MsRdGBBw9PzNkP193gNvkj3acuFqUR5w",
  "key43": "3myag19CHYV6rupBh2TDsRLKDuJMPPfwHFr6uJ6YUuCqRir6ThvGdra9VWz4QBuoiH8c7TRNKXDhTAwLxg5vxiw4",
  "key44": "2T5gPdior43sX6GZRWCXccc35LAgkXin5RmpacbJq7PDVL75q4V9Ge86M72mpivJ3WDJCBH1yymtzMWLQ6EeSARC",
  "key45": "3MdodcpeqAgdR5YKYp1mbKhJrUpbSirCDchSCsZAkQcCgKBods69QEHEe6n7adGjNQ82AyjduMr2uygV8xMArnyH",
  "key46": "4rdP7xAva521wjbaRU2EgwqHNdK6Urpwi3u6xQfxN6C9LYHVD1TFo96ZioZyVKGt84p9BLsQXvCpXZvqpGhq7QmF"
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
