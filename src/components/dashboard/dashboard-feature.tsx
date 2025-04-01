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
    "3fxR5rk8nxr3JiaiL1jh1qnXQpKyVU7ZHXPVq6Et9cKgCEVzybzRmWU1RrRj6qX97MukLNc41NCdAmXPvFGxGmew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUX14dKPAh6iptUj7ry3aqRhdjMFvcghZyY3ww4YRYxKSXMn8NdkyqYBZiS3rjF1jN8XF4oN6fzMWzJn9PGorZa",
  "key1": "3MEBePy9KX8sMxYAkm9sMsbHqPVsd4bFaFjzxoEe8KQVTbFLzagHqvHhgrkaeLZXcPyLjPAAoMrwuLepadPUQ8xB",
  "key2": "3viQg5SV1jb28t4nA8tgHKR7qhj9Sic1VnmBVzVyYmxPQye7PhZfeok8q1LoZR5YRyoXnmRdmTtA4cac3MHeQxtW",
  "key3": "63kGJSkF37AMJj9LzfbqVjyxLxx8EY9FFT1U652Sf5XDpHXeNgEdRSt5eWEuWq3hvUEY5HP7s3Qhe75cXqHGNBtX",
  "key4": "2GGYjdhKW3sVWZD5hkpPAjcbsGnHpbVTsVqwy3kCumFaH34kkad9ohRcxWJUKivugNhaVPTCBH82eZYKoY8XZsUY",
  "key5": "3MER8hTBwtPTrAe2jdFRrk1as1iJFRLZXTCzJsuWaLMjNoFWmn6zGjbP3FsvKk5nhTMRKZpvJPZrdhoqJErNvthE",
  "key6": "4K17ijzQDFd3W8qWyVWfa8hhv6bqZmCTUn6ngsBwnYRkMUpeGZSmnV39vRzhJWb44oEZjjTfzsx9oGbVH1RjJA25",
  "key7": "3CGLZxrTpT6oHV323Xo3J5L6Naw3eY6oor7GxQG4VkzkNeAthczBF6fv5Si747VsWCXkuQdAqt8T54Cs4VqSX67F",
  "key8": "4bjx6AuYTQ77Gg6g1qTV8mnr7duczLeSRq4VWchajwqcFSUYs5ztKJoZDwPbR1ZsHeVsLxuRqREWa2qSZBgHRHAK",
  "key9": "2FtuchL2W6KooUPoJY1W9vvrmSh3mRWc4CqMWA7mNSTzeP71FNrvAu4FNF4pqvNWyaHK6LcA3Tt4Q8uSAhUFTPyN",
  "key10": "64KPujPZFPKDWLqas7u77YpwoZ5Dq5amCa5SxmqKu4r7wdx16R4xWKTPPYDPqquSzwEmEkJPbiv679C9TkAuFgec",
  "key11": "4vGAzmCUGJP9qaquRMgXUtJxC1rSJbZrRUY9nGbKBmwUXegZ4bkuUdUo7NDfVPyJNdAHRoXSuDw8bGUPNtaPhshh",
  "key12": "53WRaE8GHfRmnUaUm7pJmUUMPA8j5kbeTgxDc64zYgpm31e9CndDmJrbHEjFFWNhs9mKHYgrx5grgUFKL4aZUZS5",
  "key13": "35KvPEKsCwDjL1u6JuSWDXUaPC2X7LdRRnUpRRSaUa9HdpL6xi8vToDr3rPCjaw3Ly9CYR1EnQ19A6faWrUdS6Po",
  "key14": "29mtLfShapXrbpbmMUM7NQ8jW6yibVY6oqWifyFLQN21FMWSDpmUJGPyYyj11ZkQ9gTZTMp9TARoaSud8Fum4Hyf",
  "key15": "wVu5eit4BgdMSiLBNi9DZBWWkJX4aWjUhfZEWM5ZpCCjNEEozRMVjTuqxE8GSQ7g8T1B6RcrVePF923p5nWA9B1",
  "key16": "4nAKQdbz2hXj9Rc19r2RD29ZKvJP6RjbUNvWZgG2tTrHwmjWM6ZwiM884w6QmvVYfz1nmCXN6KbjJS9j4fpQMemf",
  "key17": "Ed6MtGXgRtgiCNsuQFGmfApn7Z6LJbBT2BqevJRaRcRCj4GxEDgc8k65NB5juU58SA8tposYGoRSa66cu4HygG7",
  "key18": "21yturZ6y9jGJF6YDF2qrtNnFKvBPtqUjWj6VgfLwMiU37JdXAem3ezZSepiCT3mTY9PTB4iaXQagq9Pr8deop4Q",
  "key19": "43e4p3GjbCzxexyJN4ALdxJpvktNqToaxR9jLFNZRUEoxej21rbFn5WjzENvTXcT6jeRMEuqq9y1WTKyB1DrFfu9",
  "key20": "3nLq8NB5Zxsew2MTUV44wsFjFr34LihWNxbQTcc5VEG551Myi2bxN22rs4P87HqMHdPUSsHb3rbe8UHhZQuRFwKJ",
  "key21": "8VQE6wzXbz5sDs38usY1esDKQbvVF8kZJYozVgtYp3RrHAdne518p5aFgRwJquBWHkN1h2BRuwyDkon8qgV2V4H",
  "key22": "2pLtN5hmnyiiS3s1Dwh2m8ZSKvtYx2dAUh9RWk6xU73U4DErGDB2X525tED9v41nN8kFxks7ALPxucMXNgnR57wb",
  "key23": "W8NFBxtfBVFJqw6bBjN1FvfGKUmYA4h82mvf9RSm71Mi4mwBs6hy1tkfdXQ2JEsmWjsw51pxRG3wLE9Tc8ToUL8",
  "key24": "4zdy3Qb89eZoDLgo5cCAyEe5trXkEiTNmJoxEMZvxQzrCn2V612ac4eJp1zXL2KgghJnVPxjEgjNQtsEHfDSF8Kx",
  "key25": "2z35pG5svHdvvMtJ9hb5XF3dVSH4ua7xRAx8efN21vMqTkxSQ8txiXGfUhce1UYPGgPFHMj5gFTLaBXeZFFZn4a4",
  "key26": "4Doa44USjupARpLJcv3jm9FVBZK3VrrU39ziEucg2hKi6ZF46ZGY9AsiFbJsFA22vyd6ak2jJx7jYSdSyiHu3Q7L",
  "key27": "4wrcHH292sCVPkBy5zzrYjzrmEKN2GKrF5EsGKD4CBPJGgL1Z2wvrh5iUiE6bpmK563YeK4a76hAEuyaEMyCNzah",
  "key28": "2GcQqX4jdkWwHmJWmCKAYAPXwRVtcpDmDsD4SsAu2e8UHjtWecpaiA3LFT7R2ffacPnwTiQkUuSUkPeXXwMj5wje",
  "key29": "5H8RtFC1RRt6UChG5fUfZjVqSUMmvWJ4VUTejTCdzCt98XiU6eGEcp6eTmwdQiE3GFYwc7TwKEuPdqBgE86spTfc",
  "key30": "4fYYT2nMZRSeMvEJh1LU9S4pPqLyT93hxq7APDKYP7XVekSFUsT8N1sgvT3qtCFDxMDNJ69DEBTEPMcWtbxwFXDZ"
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
