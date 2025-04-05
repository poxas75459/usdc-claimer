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
    "fNbeprF6DDVZyByjCPWRod16vmUzVG7sK6YPuQJvyJsASbNcngn51JQTh5CWW68fsyPFqwhhLqP6Gt13M1fbNui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQwyaLo6H1R74kk4TGgtztFzPT9DXz6q1jcmbwaigrx8NSBnQAtuJ7LoYoHcdaiWpcAbMaNwBZu6H5eUT96BTT6",
  "key1": "57GrpZAXcQSFfGCXpSpEzNiDfeAU338j59DaJR9MRst5L669cp3iZRp6fgs6DiSuhtHVnQto3mmNtB9A1v4caePk",
  "key2": "249UkmNziatqUkcVyVfQehpsu4bRjrPCzkN5zBtsbza7E5MJUJczhhFmFLgf57aPvpfwfPTGWHcWjSvdgkhdkmG7",
  "key3": "64XgohATmuMUAuqQuMKbD5eKDWPPjezyABvbWPSuLvYmApqXvThd9obVQWFBt75QfD6B8JoYxLDhMJe5BCTrZ641",
  "key4": "2yvF6gjSHpckNrjFQEJvG5VZekCDfVUH5gnGC2zzC4qeeQAeXm1STCdb94GEC5b9v3gWsoDiBCoWptZtYbzKnpmW",
  "key5": "4h6GtoKEGhczX7fRcBpbq87VJXhB4tzBQmfQL4fxL4BC31npfHRwLckPGExQtcdrZXP3rsM81261sv45znjnjFi2",
  "key6": "5ZBt2ZJ13TZdUzD8btgH3b7qxDVdnszjtmkxxBPcRVpRLUy3AquJfodWfAvUqSbZQuKgZ7BGmr4E5t7zUjUZaGV5",
  "key7": "2pe6KqJY5m5uez4NQezBiYdRFvdF11mnn1Eox2bDk1mXdc2F7NLXRZEv92nEEAeaNRwuuqpPigVg3d5WhGKum5q",
  "key8": "5Ez2zq3bPEikfY345ngcTTT7YbgCwbeEUXbKBEEkAnEZLZ5Ty5n6TyyiytkiJZLMQWuVtRRRMCyqJnGxKeHpq6yx",
  "key9": "4jZMi5j9HGstTWeFAperMekQP4KvcMGCq8hBgE5FeqivrPPB4x2xc5CPxyBMPEPZRXZ4mveHU1aNwnkgqNkxtcUo",
  "key10": "gUTox8qgysAU3ZGihVwCrnwHeHpuAKnw7gB8orfCM4v58nbqN3Zma9Ls9vubpcJ6n7MmbiEKdZRURJDdqXefs6v",
  "key11": "5cfrWNbD2VLfo9VGdxWYX68eDzZRXGVKArTD57tZEwxFS5v3Fkg9CXPe69kg3mzRJbfS7N1fNSkXy3brZSTvWaCh",
  "key12": "4kCfmh8adQw4KQMa8BBnSUyibqwQvmJMPY16SHcquTvMt9ZT9Y9ude9dHw4HZNUSLxEEh3THv8JmQmHBM78GnMWV",
  "key13": "2sHL2qt8kFKcru26fwkoVqftmuLsuz9ezMEA2ADpN5LrgG3sBoseH77ZUfKZng1savGbg1DMKxpe6DJib7Ni2L3S",
  "key14": "33ysAYbKQoUuTk7aX6Vxg3Ua98JssQCGGRvEUgr5GY6cjforcbchjhRuBxozvkQtcn6ND2DtVS8VYC4TPfcbJTwK",
  "key15": "3fmQEKLYomjBFXnnigW4yhPdKxEfqCNwuSsbkkg9TuKSpTc4nYMj9ofe2dP83AsinSdoSKm4pjBAsfKvknSE63GT",
  "key16": "DQWomizFWaxt7Zd3smWvL2bojNiLYUum1mcFmVSWdefL4cDnsTMGJY2qqtAPevZ71R2eygkB7rkncwaNUcb9V4f",
  "key17": "34gnHPgamLfxUEBjszA2oVQCLcfe4gQTtEGKucrKf9XqChriFwmDW8KgxRoizheUrfFJmXW8i4PBRhtZgmGA1o3F",
  "key18": "5oFuYMnaJevBmUb73Q2EXjZbyn9o7c61fSap1dkazY3rNgbJRvhim9jMYKfyBVQN2RwHpC1ombdBu2PD8yUw6CyK",
  "key19": "3cgNPSDCDfHYnmqpDnjd1jhKJFCkoff2k37Yt32xVStHTnJPFSNFpRuZGaj8Y793wew3NwrVkrhS6AZw1XFGSWJU",
  "key20": "228WuZ5utZjduuUbYgLWKFAr8QY6T3Ncv3XP1vQbfWzETpQFDJoNLYedGV81YXPrjRfQj7toPucqApdCyRz2GUjZ",
  "key21": "5cN2q5XBHK1E8iBQCzS7Smu8XAuw4K44BKN4XMvv1c3tPQsin7H59Mc6aAiAcHyNasHnzuizgfwjpCmpk6u9dCBj",
  "key22": "37cPYp2WBUPRF1QicjSRrfem5GF23qnCSVPWoaATxG5Up19eGHYD9M2KyU7cMKbhxS8ddHq3M2CxPksMqzJKLZ1e",
  "key23": "4T9NAeFQkqMEvhJHhPnEeLBbvREb7VXjy8kq4SmSyXGFEedqZ9PMMPNMWSxnAffG3bPrAk6NSzW9hHdttQWuvMkv",
  "key24": "59oeGutZToWuYKuMxPTcUnhM38xioXNWgb6Yi8hzodgTr1Zz2q3K7sias18qP7aekEuyMCA88HhHWQn9rAZe62Sp",
  "key25": "29vL2a9KL8UUjK5Yz5r6MgW8cmiPLH8k5AQqvYUNcDCLzxtKnobgxPK2SVsmi2XghRd4gwxTdJtWyay5ZSTqsJVU",
  "key26": "4LUNNc56Yz7cZBFAgDy6fF7EyrEJLju5ojYf4QAbqUqRq6EJsD2eUubttN7TrUQe5SMLtzWk1R7ozgbyWS5mSdK1",
  "key27": "c2mC53kdWMQsGcTt9yexUNhzZhk6LCR9Sr4NkH2UNxGgugmtogW1psVuX2tWF2dcR4x8jRCkTqNwGkwt5wJ5b7Q",
  "key28": "5XHM346dwZngMfQHiDyrLc8dAHrqPvJhAUbZRmH2XwRzfqFNxHhiiubWHz78D74fGt9fSW7JK4LAp9cxBrQvRj58",
  "key29": "4KGcNjFEmYrqtZpV9YUmMF8DWkXdEnZwyuyMnwtC5YeoWiFCYARSn5b2eTeTgNfthDQNVWVh7EPTzXKY43gARvPz",
  "key30": "4RZ2sgaZSRX8EdVXz3jccVXu9YMRT1NZHHGMjdfndauNY9caf4FS7j8SfLK4qk5tT7fL6NqqBJ3rdSYnwgVuVA7p",
  "key31": "2bhVU6wopuFqAQfknpJSWUQ2A53MntbqnY7mXKvVsYyetp7L6SbHhoGCLPwywaNFTs8V4jE1QiKPs7S17yE9PmiP",
  "key32": "3MJR23urLfrD9cGBvsMYqHgVtwokooG3jLjz7jqx5vAhpMbc3X9a6W6refYkxVB4y8w7Rqb7QDUhD8H18cDnfvcx",
  "key33": "HFyhpZ76xW4djGmq7m21qaPg7kYQopXS7AWdnNVtJtz4NmZuyAA8S1p2gfpzSvwKpAikWrDi9GbNdvvBko3Gqnp",
  "key34": "4UNZZxPsBKXnxpmHW8JXM6bgDPCBBnAtsHGjwEmccVh2NuttJqs2nVzSTd79D1xxZXPkxSvrB7Esv5s8MGmrm7QF",
  "key35": "4xVHXEqewvPmh1m4qS2cQaJb6TAUbuTqtGr6XdPWUVr84yHbvUuxn2wahocqF42qB4v3bgkpBbVBqU5wu1AmM5yu",
  "key36": "2gzJbXYWQYA6BuXMUts8BvENakuDk7XyP6v5oEd9sPn8bkmS6x4eDAeViQ1tg3JgYSAUXjH88cUuD5UC8TZ8GMXp",
  "key37": "4mvSMGNVagf6JL7JnzfLzAQHgTky2CHkUQ1w9hPwSij9CSwqwytcvSEW5gAVdBEJ6cmtLhgwaY9BTdqUtvHb2Qsw",
  "key38": "5TLjtQETWLVSqhiwsMqgVKQPYbc1YRSyDDhx3aE7hQjSZ5bKRUcYsT4Wejj1nb44MnpEw3XcdjiAUss1CXjnDBLX"
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
