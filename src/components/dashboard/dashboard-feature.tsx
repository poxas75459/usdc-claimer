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
    "3v7rwkJzDLTwgzA7A44a313wbupXmDwu8js63Z7Zmb5D6YVAGVPocP1wCJXCTjF1naCf1PUzgLp2ok7iJrwq1uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7XySLTMy8oFwHy3WapPq9R2Di71etKQCdRNLiWTctTBswocS3zpKefGB4H4mZ2jV5VJbd2w2W269dKrmerzfxD",
  "key1": "4EhuhzG7eoRd6sV3kB3W6Br38uVqEq1rtNgezEMvxHpeHTbC3NkiaUh8u71z4SnG2i5rgF6gqJrwU8pM5CAt63Te",
  "key2": "GJhNbskPZDK4T12qpFAm8jKtZR4SuDsTTuhGQZb6htCzFT2z5uJUZSwn9FNgTeTQP2t1eFwAbSfAqK3YxgypmNd",
  "key3": "3Efjt3BPrxgHYnizMPw6tKo7uVXxr4tAgpYMiJVT8VpGYR8D3ktMngHgjwMfvoYQ7rCvh432pFfLnnppK5QViEcJ",
  "key4": "5FiLTbEmGTa5QZtYcCafG1y9nv3KxNxCP35iBdUDiBzL3brzrMCASTggJQd8edxR4umnf4aT4RK9tJ65XkXyMEr5",
  "key5": "5176Ka6ecZy8rfJbKQ5Hs2WnDDPh57m4s4ex93rk32Mq8Fs1FXT91kqaQfYMyH7f6WSgEEtbAwfvNozGD3m2hx1k",
  "key6": "4KPh1icvFbTk49FHcZ6Rrctzz65wXpfbbSiVHhmzjaM21F7JwEEAdE2s8BpmKoN4ZrGfm5g7BSxpisLiNyVYW3D8",
  "key7": "3cY6sxxfpZeoM59zDjG7QfVgLLDCezsQUvW41XSpofnL22ZPnf1sH9dtUz8xL9cKMpGo48K9EjCL2d72NXQWe4rH",
  "key8": "2dezVUUwhHb1jQ1wsX75VsGVCzzU9PgBSP2Byf7qoa61uw6hx8ADuumhQXhZrK94FkdiomAF8FM9pzGkfXCRrbrt",
  "key9": "YmZij3QuJYxHRD449gZtRbyMC7LRXekc7CkMUoFHLx2MZ5iqVRj151Y5h72JU6X4EUgZYg2Emaw7ErJeAd4GX4h",
  "key10": "2JSU9z1vphC12SZPNtBmfqwp9aKS7UKn4tEkQ4wdevrsyrD6Tw6qLSDQ4cQT1EC2qx5MoGvXMUqF2SEFVumuJ4tJ",
  "key11": "5YZQVW8LKHG4jgywgfs1ZhvMAwJr4GxurrW4TSbXu6dASUJP6R3tfkWhyAyjwdfaPij7ymJxGsvovEdg7KZKZrUQ",
  "key12": "ZPckGZatER1yG6Hf1uAyH1wyMr6fFhKMcWjiCjhLtJ4XN6645BN3a7N26ym4mNYbuLrLE9s8A2pKEjKUu8YEkKy",
  "key13": "xUDLAmnAUEVwv3MuTKco1UB3u4h5h6hKXkf3Jj89PMeRPwktJ7nZT4p9nK8tCU74A1bMHveDCz7yPz5pHLUNZUJ",
  "key14": "3ECiaMeQpDixpJHd21uXQbq7xg6EYk84DPbHokoTSk9GZmzeRQucXYHQnwpMyvNMxqPpjZT3LzB3yc2GaG42nbPu",
  "key15": "VzvAG3F7ntqfwzQ3pWm5z8PjrfQC3YRg5LyQNV9Cmn9Y26gYvKK6LFxixo5vGtZfvMgRUoK9aBRW9399DdVNsc5",
  "key16": "3fPbbGZgAV9HS6b8vpSgiwDUSkTnJA9C3inkc29CcgHPtqJTLc9bMLGFcKf6WBDoiYU7VAfm8wJS7xnBDJqNd2s9",
  "key17": "2N7phkrkXbRkH5rsuS1n4QGUSL7fnoLorcT9J44PqFkEDTUQcxotwHeK9cZt3Eir3SNBSr53Lq8uyFfsAPqV21c1",
  "key18": "65zvLuMHcmmCMcGXXDCL7SchHAQJWFmvK1YV5aQ7zx4YN4BZdXh625enHSLsnZEmndD7SZ2pmDHU2qN3t8tKqeWh",
  "key19": "5SZzpJ4WSyj8PBm5u1u7yXoyjpajHkoNAbGu52NjPZo7UWim3GczjJfMQoYKm8JikpmgPhu9yqFLMgBaGD51Cg7Y",
  "key20": "2FFe7d5Ana1LnpQFSjtrJk6C4w1NqmcCLhgLhpBDHRGWELYjtB3JRfkSVhSShLAi4cTwgw9uVVKb5q9vcVei6zCG",
  "key21": "35R8FzpAT23ZQK65PDtphBUmvfS5zxGHSpuZBwQukVu7kmXUxakG9MC9cLcpGQfJSfmAJCvWAdwTmyTpUwmexopX",
  "key22": "213qMN4ubJ7RbRVrYKDggT8aBYQTDu54hHNbQtBxTw9wYG3oJu5L4JBmF99iooysSQKgfytrwQRGoFjkwni36iwR",
  "key23": "4DGoLeEKh5HE4gGEVWWZnsjC8PkYbtBGuzLfxNokvNTnm8odvvSFyYPFQSbV2wcismD42LYVsTvzatsnuHeoQ5yH",
  "key24": "24bgW3c3v9gWJqedYdaUPKuGcnPakZ6wfC59YCAscZk19sdC3jhcqkSrMm5qMtRCkUA8HbXm2RVvmJ1MdDtaxVJm",
  "key25": "5BGHAFojypsBGR5ryDPNRMy5Hmk3a89DuT8FptdCgdArutKYBkrLfZxy1pin9WsSja5qqZa61AGnrpddEJW4JQH7",
  "key26": "2hPCeUas5VZGFcfUC3ndtEUCA13pkVTkdUGbG1z8rGExyWJbNXn8PtsD3rm2EFCHcyHjiY1BASuzNWE7TRZJwojh",
  "key27": "3LHRsk4M8hLYEAaADSyj4jKL4XWCzdjdhHBq3V176yTJz4pcjX2c8D72No5mWiAe9RHt8g77tnkHso6bxbV78XW",
  "key28": "2D4utP7gLF3bd5pvHHN9ZJcyGqdVh1GCYwtc5nw9NH9ASd5rKHrJdJX44pf92ogQw6ru7k2uE7kdVfq5CX3Zhs1F",
  "key29": "4MZGvSrQ5ugrBiMQEKj5nw6gfVnbKg3QkgHQGhTpBCxveKuKF9BW3veLGSqBxJsQDnT6bgnHbHEnanZiH7gJ48cZ",
  "key30": "33UhsK8aQ8cEGsLRZVUizMxohvFeAu8C8CnEyc18RDe8FpcMQhLGhsTEdgVmLw2bPhyC6Sh43wa3ki6RBcK5aFm9",
  "key31": "5VCQsydZ8xX64ZR6S37MB1bmwCRUYQ7ADaQFJrYhJD1Cibx72tkRZzCuMfcrCh836sgNWDVRfDtjfM13kprRweEk",
  "key32": "3mFBwLDX7b8xUUb2CTuWCDznzo5FW22uxvH7p5chUGKvGVqj1Fx6yu6AgWVXEYA8Suxme53azzCFq5kDdawQQ8Qd",
  "key33": "2JirafC2sq1JYK9hvHs5YoiapF2XsiaLKpnULiVwNdiaybkp1oyWRjfMaLQvQgdTAMdcvCGW62RUBmVgdHQLde4F",
  "key34": "4YD8QqoLpp3u3HvCphheGLGB3ioQJJ9k7k96Mq5vc3tY9qcREAtaKQ3ih7KsJnkUE1XDopa3yNeszkScer6xafPe",
  "key35": "42yro9F5i5R2LfH6Q3vxfRLk9XAGA5vt4bP8dddXsusj18f9xVAibJTohMRTh9JmNc2TQRdrMPYpju9ntKjrfBLV",
  "key36": "5biXGghokND1m9jBCiJbtQstACCCyXsKhPJg73HcoQ4yZ9mxaTUCVgFN3sS33p1N9Bv3Z5wasWzuRRP5dNkgVHGQ",
  "key37": "3tVmct35tdjVGwJ8UJdNd4BHCxKmpYbhM8wjxruaKiiBT9pKoYsMMyCRQ6rGbCi8ycJSJqNi344uyJBpSyZjCj1n"
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
