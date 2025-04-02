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
    "2s5w2igN9LwxFhqTRQfvnwDN5piDz62BNQCcaFzUXahW52jfDcFkfBKwGvVch6QdwazWyPCK6oHQYbwwkop6VN87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Su74Rg9aUe87uLijywoEPPDDVpLkHcSUze7xpxtDv5BsQPLNR3GZuAjYk3CoeJ79fyQDxdKF3a2VSZdGLWbs956",
  "key1": "2ops6xK4TpvYS3EsSJEopf2bt1JGCVnBoH5j2M9WtYJM2DpVQa4ukfNXb6rBwzRv1YEjraGx3xWMAvXe5HgXCKcT",
  "key2": "2eSPJcygzpbwgcY4WDwxRoBpmujKTdyiaG3mmKnatFpM28eYzG3wvEqMon4HbfXcMcmMbxphXAce4VBKLkBVsw64",
  "key3": "4rAhqq6x4PPubGQ4QBNCakhqZurFHYVNYSowmRx5YyGgWX86RyqaHVFhghWmxA8r79HZjPPTzsW3oDM6gRdk4DLx",
  "key4": "52mHVPWK9NfVH3kTr63JhqUzS76y76g7Tdh2BATpkTpTan5eamn1YynNMjFn5Q8qtT8AcbL76g3mqBRpLPap1Ti4",
  "key5": "Lzs1wFgdPuVo9UVfY3Y92BQKwLSi2zicDEELhZGucRZ34JWMToVUbtavoV9xJd3QgUAmdzhXXpTc9w37NRBb9eD",
  "key6": "3cbmjxpQnhiHM9FCA1cxWJh1ZMrwU2e7EBkzF6bP2e45AhZnRmfyzkxG2noMiEB4VgYBXF8HNJD1HG9zH6saiSDr",
  "key7": "2WpYeaNjBAKTNL1D1kMgVySRqbmiUrBuaUrCVeUy8WaX8KKoT8PpBFSqCoL1f2uDcURzECRypqi4Bmm1zv1fgaZG",
  "key8": "2a16SXxRJZegwtNKevFKDFaeMPdPCe2r5euUCXcQGz76Vwnmq99B2m8uoQhV2zn1bVm5q21YWRfRJArkag1igG8B",
  "key9": "2m34VPp2RoBZpjejD55WyJ9487B9aaHBJmoB7UNAjnf4ckZPq6a1K3f66utKWjs6qaUtz4gzCDZ5TKHP74YUPDqU",
  "key10": "2quZnxChbaXeWwurmDpeEVFxboX8KGsGMnHHeauVSAXebXuaHwrt4CPvJFZ4tEw5Y8UpzfM39nRmzHFxaqZtpQhR",
  "key11": "34rnz1YHBRkDCqXVuuZnLjgeDfzFWUMb9rpfaBqsxqPWdGip5Kj3Q8dW6SLwVrRQ9N6UVp4yKjX8jDcb5cfEqT36",
  "key12": "S65DCubV5ugQKtQ2XRgqx3stwnNoYFj1HQRGCmNMqdFXnrh2zt4ksguRH4bpDnPi2NrbyHitJ68SVr8Kzs2nVnL",
  "key13": "5jDzAh4fLTg569SM7bBycM5bf88FNBAi8HgH14T7yXRHnzPuuiQux6rdQmfoGy1S5yKhPyaHcJJVBJJzQMkd8Cip",
  "key14": "zD85UHPWYDSwDfNXfKVmPpbB41Zk5w2VXeCxEvGUB5J3HPnFa5rgfh97p9HyxLtkGYU174A6goeab447iaPcXuz",
  "key15": "zyTEcEQGKB5j4fsCAjmThQBoHLZJ6jE47uqrVxLmvRuhqQipFWSefAR6BiaJ7jvbYrbWuRUxRTP2NYig3oDAdbm",
  "key16": "273GatjyxJBvixPnbRTcr1yVykijGFz6b78NEf878eYpSUnHW8uP7hPfAenehR9jocN8PyJg3v1KqQvLE5kFwiV6",
  "key17": "4gKepxzzavcNHKyVJgheVoKJtKozmUe2ejudKNKi6Cq5fdG98dJCnTmoBNQbNdPaL2bYnD75DZuF9p1sTZ3X8Dcy",
  "key18": "39XCKTYJhdmagVRAAL7KXa35Mrad12xFGJRKSCWw1uw6TUtAzZYa7RTmzJY5xok9KWQ7FxJNCk2D5mykbumbcbkR",
  "key19": "5BfxYRKKUQ3EqTmh2T9vgdSbkVMy7nag9CdwrmMeS7Fqk83qZRJJuofNg8rMLkwWR8arj9EkVzfgWbRFUvT3oBxn",
  "key20": "4g7hyfqMMg9n539MpeUwcWMTvtyCWrp8uQ8B5Yb6VbKneM8AzUDfpjDw39CaZorYmd6fEruwcaZNqBuZszJGHdzr",
  "key21": "YKV5fexkhiVkpoeMNhJQwniMCFHWTGW2ieDQz8aTNEET7EFRAkqqfeWsCJnoLQmSWaq1qkira4ZTuSUYXV1g5rS",
  "key22": "22BVqWScQEv6mH8r8hf42gJHKNiW1FSMgTTL5Ri9oivHzkHmjXWgVKhzyyQCtpxhGSEYB7mDHN9rSwmiuj3U9SAU",
  "key23": "dhLwTm5HKZHWEAJyDtLSQW4ufSmbMBEkywuHcExqhoAwaHdDosqmGMcA8kummgwuexkYMrK4h15miakWHdJvBZe",
  "key24": "4cjpYYui6JKqq6WKrBv2h9aNmewSD9G3mymD8oTmKSiwPMZYruYBMJjADXhkKEV3uft9izwmt1DDZWoAHGacv61T",
  "key25": "122dP5giVRDQUdK3gYtbLSo4sfQ9tpRH7GAYbDNZSNZRGVUJUXMuzx5NcDzq5N3Tsn8p3P7fLAjoxAe2TVDhYGJa",
  "key26": "3muzbKykFPFkPCThZVesXqijVVycG3UU13HRtdnE9Y6dxwRp4bufn8jiCUVbjxJeqhiytmhsvTa9fdX8ucpZTnfL",
  "key27": "48iynYd5NAMdxJwtWy94USxfQUCTSgLA2pPPK4BMjj7ecWULgiDGg2vT9cnwguM8TFv1iUPf1vZCTTefBfnGfWW7",
  "key28": "5GuNTq9k67hKijrUxV7HJH9D7AzBR61ubBaySVJgHDgdQwf3au1TzCxXvGbXBY4EdZBwemuVYXfVqsJicZbPLCix",
  "key29": "2S6jV43xYbv7LwZt9RyC5YuGdWENgFAaEQC1EqsDbcXb7JMKcavzy1iecUvyAxUVrGY8WyEu8TKRrXxcpzyu2Vfh",
  "key30": "589uKWbnuduABGsxMwM3cFBZVRn7Rkvdrbshp7w1Y58AMXAiJXAR4w2jR6cnLDc8xwCwcB3Lyu7mNEdTkuS13Cva",
  "key31": "2QkRFgYU3o7r4xu3yX6NekWwTyvDH3QMfc499sfk1HVyFLKQb9bTCsQmy9AAjwLVYsZt9HwEXQzwdsJSLdzNwgpq",
  "key32": "62T812rwA2kqfkJGT6EULXo1Pk3oJFFGDbnmSq6e5UQhni2dKBZQhweX5M5isVJQwmEmrQUd9BbDFne2B7bYVSMG"
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
