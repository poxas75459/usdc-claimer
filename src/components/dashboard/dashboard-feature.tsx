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
    "2YLFXPK9qFEb2mrPGhRLkL9hg6UTbe7fNVeJy6hjzchdxHHNokKgWhwvxayG7sVcrasbwBHpyYtfWb11pgdNdQnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zD8ESxdqE7D2MkstNzQkP2XpnX52MAqaJiYtY1FkX5fsEXu3ky8EYs2bV4qnpwkZDyZEa5qT9vJwyXVLHq2HYG6",
  "key1": "3KtFYz1NpY7cW2Jk9TdLoc3DVYovx7FubnKBqh5j7Wy8nBr85avEwNBHdSM95aM63bZzP4ZewmMe2GGCbEMRPneP",
  "key2": "xtDEDNTchjBZnVhjhDJqLHVG7coPfbXnbqmRuxrdwKhkobxZYgeZY4AiXjaSmjKCGvQ7VcwWDrDs55bQMHxabA7",
  "key3": "2TGhUuh781vg5a9RQNU3W1KNWSSVybJie9vcnPqRjKEoLwe4CZPsqdfsmf9G1hdC5E3NVkZQq8xxwJVpqjB8qtRh",
  "key4": "QbvJH8D4RxkrX3eaooJ6nvx1qjoabvCCxLfEbzMMJiJtUtGBLncL3SbXiXC7EE7fb4bMS55HqX4SePHH2Q2kCDr",
  "key5": "5Nv2Wy8qadm5XgoEMHGC3jMWRy9Vi1V6EFyFAxVuMWdJG2vqDx2AVDXohPmhJeJvCtpepyRrC8QYbgws3U8XwWT3",
  "key6": "3rN2KTmdj3qWTL9JqDMwYiXhQ7ge9aQ6zzL1nx8FZBB51mCTDveQ493nJH53bLjskfPe4UZjQBSN6bhjpFyof43Y",
  "key7": "5FrgTgu5K9oLDRJXroNE7i85JExcEZVRAFdaXV5dJcrdES21iqKHrDMMu4yFk2Q3dKzwAR5wfgMtPXNu3iv3HZYF",
  "key8": "4EaQVpqhVrs8pGDwjP54TvR4qTVsCZ8iPsqcDt8M7dFFQh7dHe8vZJvudpLT7yaCGEEypZvcwmamus2HBFQ3fJpX",
  "key9": "kyCy2mezhc5HXuQNZNirSXqZCbWyLTJnaHLv9BMwE95kz9cW9q7RHs5Uau4ZmZvnMF37m89EMjPj2q9M71pC79G",
  "key10": "W3Prfqe5L4Z6S2b2pZvLG8di4qQB12mCiazYiqJ5sEP28G5D6Se9Bxy1YHyZd83tgwzvj94853o8jb2WQESzFHA",
  "key11": "2QFATeQeX2iNw53TUagShKBocoM17d5EPUEcrhXXmYZYvHP3BTpFBh8Fy3KTSqKix9Hm3L9Qu41N7RqrrxLGgZ38",
  "key12": "iJfSP9LNZjpspHB9D9h4yTKybytXAUR2PbtyiAuaNgbXcW9mCkchhK7SVwQdMH48oUw5w2si6BN3g8mu9PZLEtZ",
  "key13": "bkDZJchdjUhFZGjYumXTSEUxAVSZBxpYYFQ78TgpfCGNGqGJNF6nPCoVLmedq2qBnS5ai2iSfiwqyURMgS1f6Hy",
  "key14": "5qpxCdUF2Gn2di25wYGqcHuF49QsCoB84NrbisEypmShUozhQPcM8yGk1HhKgWcRuC4AZYFcVtBXHSkbh4D6iyky",
  "key15": "2C6y8phSPywJFt9dQFhbgC6Nk6VSTCt5b6XdRdfyxmHDTQnfCFjgCfVSj6E1VgXvov1pgFVzs14PM8ZFauUK5aLx",
  "key16": "AQbXaF4wf4qr9ioW8XfNUTLe61s9r6W3qexZD9kDkLoEFxX4qMuUVwJXoRKa328MbUDaAWA5DoTYHqKncnaGYwS",
  "key17": "tUa5DEkr2ksQxLgWuVtCjYH2RGyvHgUAgE3wsvGMTtEHX1j9SB65zQoyVdXy5TM6JKWfSt6WFZDP24p3SSPEwBg",
  "key18": "4nkPhbvXS4Yhcyt2WVtatoKKS3ynLDZySreNp5ScfyMr7sgwhjNGgFJr4pTtc6nLkVZpmtWTxGJYcMbz2g6zWjF",
  "key19": "2vtdu8Z3vzMAAWLrUhwH8GC56FYY3AZ8EVnvigmdtM7k6JPreYc7Wt2xAo8byZzzUqj2EE87jpBbbmY8HghUHtpi",
  "key20": "4Rmj3ZvMh5guuJj4EkYd519zP2E3GVpgogykFvykgpZyrRPPrMoDo943aH613RD5TGM71r8poUFVWbdAyS1ZNTxD",
  "key21": "BbhFUPippcYtihvqtCvLqAEjzYNk2dCSynvDa7MziPPC2zUWPkHgUV9U4rZf9e8f2FGWxqaxw8TiAbHagwFrVYb",
  "key22": "3uWznnSZu2whCyKNtLC2J2oMEzL9pNSKp95bPAxb7DzoqxL8FGqEq8aXf4P4KtLyWsvidFWMmEhq1vyVHYWBtqWx",
  "key23": "67DM3X8WgMkefr6zYtwiCKjWCtMFd2hRFWN5Z2RX98TeThfqKfeF4zuvgzzeQHXHvMs4uS9dLXG4upbi9KEgu94a",
  "key24": "4PGRfB48HkXLocjq1MPuMphpFRmmRqNN9pzNuzAzgtxZx6omJA5i48KiwMfZHQjWbmwoXGLSdQPZ2oVotnVwLuh1",
  "key25": "5B2yYTNseqcoQpwkse8Ty1afSaidoKZYKevaPoppTok8u3W2ASqUtTJRKELbHjYK8f6ePntRbCdEBqY6jfwbTHWH",
  "key26": "uYhi2rEvuvaaXcds2Y7Q6BcVs1uu2TzABuXyrHQJg58vmAB3V6QN2ca7Bs46JJEjHtkQmJ7tvBXMdeUox7saLeJ",
  "key27": "4wkwwqgKAAXJhaYRSxM3YVvLuFYtG3M2s7LhhB5nh4XpivCukGooNne7mfjobAbWiMAoB8XMtHU6WZTH1k9U5gxW",
  "key28": "5rcRwU6Tpq8qeAkyUWhygzkCvvBNRFHFUvsPQGu6NWwEWgM9DMWqKisxwrLZZfGicAzoUUt7NjVn4nVD5PDXoJXf",
  "key29": "2tVmSUrq1NStXybtbjSK8RhfnjvEiY5hddhVs2x89YoiMZsswUrEkFU76h1pEZgEDNUPxa2WkZdz6mSoL19MEnsH",
  "key30": "4JLEoDU2bHtX8g6YRVKFh7AuqNVKx7ZF26fqgUQdtMZtSJ2c3pX9dNwtCtXPS2kFYXGCbkQwz4FP4MmA34s1Pm2Z",
  "key31": "8ACNo7PhKUnGiUBdSA5NQHM5A9oiWeEqokHNyHjdwFUKHhtkhbvr9i5bFMdqTy5vrXTmFv3gVFhJh3yLyTPTZS9",
  "key32": "4F5Fp1W9wnz8s1fmhG2RsjP7ZQLRTuvF2p7wLNiGsai2MiBudSfmhSS557DR6K6FChrSzqh5UAg94aXZj27tpoUF",
  "key33": "2jcncjaL2aSLztaz2tj2GLaV6H52LQYNUKgYFZJpJnDkrGV7MfR8psf2G1mvmPtJ6Hg6GfcPEnYnz36dQQVHpf2E",
  "key34": "3RraUXodFPYDbcvvG95xjDKUUC4eebHgYk9yUWN5rQ31RevqMkCKVB9WPYKbKQzjyrAzc5BP2MEqHpj8sHCdBG1W",
  "key35": "38jouXHKW2vyTEWhTbJpHGDqf55qu89kM7dpRbbMtEULehpZSEFvnJqjXrq9ynkvFGgLgWiVvYauCrxgJTMKrCET"
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
