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
    "5aeHdScWzWKaGyBCu2ouxwQT173vv1C7SrFWPBSi1bq7FjQgjPjNow6Ch6KggcEorb4Xt5c8BmwY2MnswKuyMvdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hxknNenzxkKiTLhhGfwNyFrjheBfmTVVixvRPcqaudEq5CpMRn1Lr43eVE2n2SmB62PLNGRCNHFwWA2tRJfpEQW",
  "key1": "3x5MYaozD4smcKwqMpqHo3HyEYfXSFiJ6Vr771Na5VyF9cQJmQ79fSAut3JuZQR69Zgsgx1M1mh9d7oCedxbg6kM",
  "key2": "38Z8HgPNNX5KP4pJp9cBtDsyMcResAMPGzeSCYdBfBF87spR26oFuFhMQVpoE1ULHBCjRmtpNnKV3fWSW5k7Z98v",
  "key3": "bpDXvMFmCUU3x5AqjNTWyqfrpvGWMdu3NsoEPJssxrc39hLo2d4vwF6g9foftJb4ra4icK4ftFUAjtZnP2QhNGZ",
  "key4": "5KV9RWubznaTo8ZyQDSQejdsBzoWYBQ42cjgMvZVErLqz9bxEkPhrdA47ndLUwvtwcNNXNKqzTJA5n7TYUGwpvGa",
  "key5": "mNaNxT5C54Te8dFuecv4BrKVzGwvHF2Pg7pGaWqd7YDr8JSwXVxVqj2pmeajwByWuGTVFC6rdqPgEc4gCBhZDhr",
  "key6": "4VXAESJxAPiRD3uuF4VkD79GLv9tG9MmvBZseqV785v222D8f7sMP2hRigPGH4YjDRrTC2yFph842SPYEuHMSqX",
  "key7": "s3UE9GTbnx8RsSVz1yKbeQnhQwP6hg9ohRBZ7LVHE8zrLxTuG7j6z6Si4tsMUjNSyKrNvEoK8Tne3cEWa3q6nf5",
  "key8": "PVKmSUByR5WnMoywJ4ZeZBQuKBu7d7Cp6sQ251UM9Gf3GrSJsFQzVz1LH16xkhfGW9UxZEb63kBU7fiD2pgQxVP",
  "key9": "vFZQvLNEPGmKzeCeM9jDCcXuYV7iFftgWam1U9pstuCQv11xgP6oTWrgjyhuA2nwyXv5cexSX33EQXAdbrP3zww",
  "key10": "2LXnbkcM9LAvknoj71DEjAWHJpurQ67MVVqDLanPV9gKTSDMjUA3TXitp3J6e2LBHsTEWLT6qEphUyexVwdGR8FP",
  "key11": "5t8Cib3uBxbFb7HH5bRNqhCFGaXes5rn1MNJZPTcNgVY2w1pPTUb3yJhpuCw5vAqt3xoWqPQZ5FwX7zjwYsj5p5C",
  "key12": "5GZitDrUAttvxzgG3uPrRSjZ4DDa5TohU8sbqXyiAEq29MH8eqJNq3tRyjubmP1SUGftB3Cr65b9kCz1Augn85Yk",
  "key13": "21BKHFNFFNoyuW7yoMCuYm1VZu1Q4K74icRYD27HodMHYAxKGJqFAsLrZ32V6nA98VmShXUfryzZFuR6wnRwyWEe",
  "key14": "kSop1oTLKJxnpG5NEhHYyHZRRCtRSBNp8Je4EvUzDjFczVfHHsEiWbUuM3rUC9v8k7CC4xPEk8xeHVG6tDSASNE",
  "key15": "KzwcwDdH7qjMfDhNMrGGHD79QL4A7fhQWC9MfUgjQRi32XuJhDDQS4KiPgp7TbWMw3JXFjmmJnehuMwtTBNchN2",
  "key16": "2kimLkouYUWbxcpFdJnT2hfFpqBiuYxKbEDmVmtcVKL8ZhJ2gXigi1Ao5TaqighR95yb9rhiXdiVqWHRnvNeAwz8",
  "key17": "4MViHir6EDMHXs2952tDi9JM7xqpnyGmFxpnpXoDfVRPcuas2HFekNn3qFkaCJALpWXtUypbFbpBfWU4G3qxhatD",
  "key18": "Q3TRwm7TcgNdgk2uAebk5mpBVX3PMANNiUZ3tJGwKNYnzyCMStMtzNPLXKnRCcnB7FoXN5qN3ZNwr99Yp5KKBqw",
  "key19": "XiAgWn1fQ6kr7XFAfT7USUk49GkmHz3FDXLw7mQ9Pg9t3PcLoweWPsgcAtebMAWUDt6xUoZNpaP8WHXmqExQbGz",
  "key20": "5bG2GGhNznD8WgGnb3muonCVHvm1E9BeyBv2emprjZ94t1uEJNMCG8hLyoryEmG9CCZ7udjbi9ezzaQ7trsZ4aHw",
  "key21": "wwpMPMzCeAEBKPVsn8hJN8nFtSYdYGhi99EDsEepV6RpGtiCZRqT8tU9AJFncpFSB4o1gJ8NojPiyCgf8mKgM9H",
  "key22": "3giphVJ6pLGEKdwjzmB7dK5cm8KRm3KSHu5qXKnUocF7mfJKq3eXxqvUt9zcJhNFL1o63SpjSD9FtX9zXqTuxHwe",
  "key23": "ec9tdgtK8LkBSp3d8sd1kGzZqdHwMVew3TuPuS4A1DrgmQYqLymHdY8oyXv4Ua4WrFriNDPg6E3qCRd3Ebgf34W",
  "key24": "4DxiEmbQjTo2CSz5txyKwd6pU6pVq3Xxe3LXpkVKWKHWbWLk5VxDxLoxkzHiuB5C2FSyoZSvDXEqJZyzeahs3nA4",
  "key25": "249V3S37nZhwdMLufCZjSCrihjRNJyXCc1teb5UZRw2WWZwoWZCcmZE9Ew2sFG7LnGn2ZMFonssyVrq7Bp3vwC46",
  "key26": "Z5d8obieF8B6jeDAxdJBy8SeZgKBvzJnBaPzUKsVptDLB6qhZGnDEBTp3CnBdgfqFS6LFNcd4K5x2uqiRD62s8B",
  "key27": "2Z8SB9pPzKo1JoUbT9jQKQqgeb7nBMAeXp8Zbpsq8QkjnBZ9UHHpdh48fDE9NL7VRjaUm58H9xFiJTAMLBhzZc7u",
  "key28": "4BorM6sy4uHUxvQaYoeqBhu1bdjqKFuV345scNng8Eo5kswCKLfRLK5wGxvDLDvutUPVt1undrQQ89NYQ9ST5pk5",
  "key29": "2F9HHZHdPLT1BtAGxGn8LzSeGv46Zyabz53zezAbUscWKUCgKAPoyaY3CAxTdSmL3vWSL4LJ98A1Wdmu8zwUH9RL",
  "key30": "vqUGgQUvzcHz9qcFDz2UuC4omtkxmDX5r8Ab8mNPqSES3XVv18UmCBEgNCFDrKtgMbuynRxrPBXMr9oFJADHEQj",
  "key31": "5V25Vdcak1UyVr87pdC1FZAiSLbMkyopbabqJQykGoMLwAyxrrMVHChvPDztxfuoDyjYeRo4k1a7E6MWyFBkcEa5",
  "key32": "66N8JUAsSngo3mjTjjSgWTznMxcKHF3SbE6uZ4V5ueyyWiifY2aSKWXHYsekhhGQyTfjyr2Lb6KCECsov7qvboqA",
  "key33": "3ZX7biBHpmDaGwVa2xPakW1zzX2ddbp4Dn3dMh2igMemgQtN1bMtPd7fvMGk897n7JME4zrJBMsc6eNiKQZQfPaY",
  "key34": "42KmVoW3hxV5kbg2JVsJMdrgjmApY3eK4zSeDUpePJfvGMbM1TKqG9aD7QEfrh2PLwFtuy2iY4ATGG4zuVJm8Gjs",
  "key35": "4BCqkwfne2jGtpCfFeSEX5SMVGqL9w25TgiXHsmXjCaeMLZReiL7BfHMzPHr3pQnrEtdi1fRDd1y6mEWqdQaDG1U",
  "key36": "4LubFYmgomivpicx7QTng8sGofqbArN9p5tbMr4dEUVXNU3q4fqmJVKAMTwG6DXDyeQZgA6Tar2ek456RPhsYTPm",
  "key37": "3NLcFvYQw9CHpbpTrwPw1g5aM7BdcQvgPQS6FHsfLnTWMg2LWXZieuL7AEsQgRYKu819HhZTyP6eN4CTr3S37qcc"
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
