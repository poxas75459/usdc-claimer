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
    "5VxZYyzrjmMjp3zTnVYydub5V7NKHzGXgg2SB4ipiCtk98GKqnLhdn1warxzJEGFA5q8WN8nCjiWfsRiSs6Thdog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNX1MHuriBQ9mKqoLyqG2quh4EuKqYYbJMDjwjsYnsJLK2DvgZfzmskrip2tP1pyZ8pBNeWGWUTSfu3F6xzf19G",
  "key1": "4r11Kti3qoDWsPF7WAqwZ1ANm1SGfa1sEpVDwf3Gfkc8pbnwY6GSvuwAvMogNeAy3bkAvRhFQZFkwjyRTv9kvjWV",
  "key2": "43aggjw3YbEQ6en4uLPQGHtzzetcnKuoM3ULzZF8Jd6juCvUqsSfUsoTQ5ewrjohRNykPeo1rbHmHRTMYtyrm1sy",
  "key3": "28Ak3wj4XhhaSSHyTtar5pq47c8yNsbMbTj2eKBsdws5riz9RBELxVoGEFffZoYCJSwujWgpRb1VPfqfvRGyaqMX",
  "key4": "4245bqmZY2Lzm4T5qZJ9VstvomPHogM7EdHrVX69cAd8zKeJXZic6iAJhsgnLTmAGGjnsq16E1ZaJXUdfQ1PYmLn",
  "key5": "5dH41rqjaZQc8PY1jMPrSsykWtYKKVyp8K1fo7jjNsGPNpNBVbfXzgBFnoGXQTNUWMgUsB1mYPksPYjtkAF8onJk",
  "key6": "2ckuDqfHZGVyFsmVpmAgusvc6oFWwUAdfqRHdMtC45SH9isapfuNqehnoZzEnbTdXVSTJxKFZ4U4HZbHeV6JbR7Q",
  "key7": "5U2bdc68eA4Y5rZ9ufAXdZ2WZaKwbuq5HdUs1gpQZ52tWx9C9geRGoHHjCJKNHdtCzuS6MYBiX55GWYXQBJqnUhA",
  "key8": "5SHszqmD4x45szXASVyQiGRdyHNz4FbpSkfA4EBYkTsznHvh64XVYJWwmBzjMe1STP2YLkZM3GkS4RB4i1Mk8msM",
  "key9": "2op2DwGuDXSx88cZ6bDmG6PcKPdkpNEg3uLKM4o9PTAe7dFCBRKrZWmuz87fFN2UuuDtUPAKRqJ7LQWgK2txuQzX",
  "key10": "5zNHLMVZ9wuZ7GFvwivJpsGmHNEsKcTBYkvsesKBxKRrTphLYFmYBaV2tc3iMs42gUBKCXZ5bQsaiW97tbPMAQBG",
  "key11": "2o4biuq8PLoUeieFJBdFHcJEjJUoggtfLuDLypqsMGGTUvJJbL4qpnP5883QPzcWBeSeCY34gK7zb6PbNf4rMN3J",
  "key12": "4JKg4HVXZ6CArL8KGu1nJkd1PPEU2mXCTY9pogfJ28BCFXsvfwLztBrb7cdZN3Ri9rafV9bY1izs1b5PBdWCD1iT",
  "key13": "38qZdhTV8fW2aLrGfr4pj3goWTV4J2JdM1Hvj4UKFszwLtn5ZR8H4tw2pbfM4wHaf6seXng1bafws7xWVEnBGTq9",
  "key14": "wtu74LXXARJwceaNrWwW6AwkdLumB6icauBiZYvLTVEkoeVMWgcqdZ9AWY73x7fk9avjD62iYpwLdHnFczoCEsV",
  "key15": "2RSWdaXdEA9bi8kY9jbxdrH7hXB418fKm54YdMxwnz4VGBhg7P3RtRFcYojd588UvHJF5wiUkGXqfdXo1MB3RT9Q",
  "key16": "52wfs2eTfsqQgzdnvBwvjwqxj1qfvqFe6GwSby51sAADSbFouBm9E8rDM7zUDcvLzpZN8MGYUjC9MxFDNFA2gep3",
  "key17": "TvhtjEApmxLMNbATCfaesPxyiyME2fG8pD2LGyFSMuJDYe8zo95Z5hU6E9XUm7ah2x5rrvadn1suwBBQuZStMPu",
  "key18": "4rEiJXcxXZSCnhcNZvY5vzqPoU1EpiaN77ZjZJ1PqZVQK2wjNxwRf8UdmjPDY8BTZ1C6dX5HKXNe3VqPG6peF5Ge",
  "key19": "3yS4B9eu74WDKEahRA7qEfWKqrFS8jAuCF7szVEX2esWwLdDvTB27F8PocTwh6uhmMAcaY1c5xV3dCWmmku1zQFr",
  "key20": "2QjEUaockkNaMWTuMFgbvmYtAfEdEp12PLR95EKzMxh3gZqEtbKZd4sgFduXLjeyhCbSFFKX7s9937sReadowih3",
  "key21": "ft42gAnxuAWj2DXMBiuou4w3QPof1cLyqtNvUz1ksCybAULWXzwrjvGU9Yeidj2ZZhG6RSnhL5zp6CwiCaCteL4",
  "key22": "4vSZ777te8U3wBNQEhESNXRUwGVwDFrV7WEpkBDta6PckRcDKWHDyz4Lt14TW7187WV6ygh9i6RQfD33EcxUynK6",
  "key23": "3zyrRntDKC8EBG3z91XKPbe6RCxcD7MyrhM5b8rRbKWNbRCjHYnyo2j6iJfEPqDrHGuMcMjmtMr9W8A2K3vz13tC",
  "key24": "2kDUyzZ9eu5YxnmdmJpETqRdRWgzFXkYfuqfCMzGvJwCkFQakdSLBvgn29MkjghHQkvPHa6EYimJu6Fp9VMfEGKz",
  "key25": "4orwPRU5BLNgJzZGtv978GMzCFethq46qyGnYMYZENjaXA1w9B6MHJ9o9sE4JYxYTWRs2kyW6gbqB8pERi3MTV9Z",
  "key26": "qSK47FX62RA1MbqT97rXxQnyB3BJtWLaXqMZFB2Yxs7NFS9mYhXEp12ihsvoqss59wTyxuuxXQobTEmzq6T6yC1",
  "key27": "51DwRZnprbEEGciKoGJQubiH8VKYPWgDdpr7wWJcMQiVSLXwKKWMBjqANuz6CU5BaZMYQDDV7k2szLAT8KFQ8dgf",
  "key28": "4UQ9AXD2U3rFr72TkEcpFm82cjHdP9Mn5phvJqLvu6PFTLHWTmjEAqAHjcwoDRAWZRmPFxzZC1M8yD6GNsTfDHaB",
  "key29": "3XzNwEAVBbQFBprTRdVvpvLhWe2vwoqSGg5BaUHopD8sUJYYbomqod6o49HrHVTKvE9LiEaw1jyK4dAdSjbtb6U7",
  "key30": "cosquCKqq3qFV41JWM7S1b5hnmcQpewkpVdN9S67SnsFKWz5XQ8raHikificTf4VxhtuhZXoDruPCqZrGfpjwEN",
  "key31": "5XE8Xrfo5hLvRHSD5HZv5JD4Gcmoqok8LVj8YoCEmZdLh6jW3Uuzavj5RiMfq5CGsNiE7E4bwxwcUVwUgtrwHb6A",
  "key32": "4bZ87Fh2jRubWXxtqUknucVauSzyXWRk7JGRT6DMSJATAVwiC1YBePjxwUgjeYjSgNb4oZZs7RtE1G3KK9LYcFzC",
  "key33": "3uqADkhEtVBLTLFqockCuPvqXhvM7a7LuRXBJJCBM3f6h4dDfvDswJ57KagugWg9enDDe8iH9gUyUePZsvGaTZ4r"
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
