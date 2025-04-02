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
    "3tXGpQ9jT1arStprKC6sH448zCiioGx7z5np2Nam6okSD9j8jFjPXs3LMW29fggTT6m277NAoNk3qrCJxpBJoqeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AeL9CTD6ytEm71vCVEv3bxTJLoGUnygPRxwCGPRjJNHw7etTQNq2hzm6eByfFG6wJnZgA9JLAbLWBmgjnhGAxWK",
  "key1": "hwemmTnNvstUv67TunHjXvQZw6t3LBvWMnpV21k4dy8fhwq6t7GUqdw5NVmHr1pctJP5KFAkTXe7C3wjRgnyKjY",
  "key2": "63iaKtaDAgB3h9hDtt12hoVFCHEo6sDYVs8sxcWM5zn1ZwGBFkkpzXmH3SoE2R2RLGt1kPKyByhcBzMV9Zky7s9F",
  "key3": "4LY7TG18Fb9FAqnmL7PdosAYCLTaPX3tPVeFcby3eF3b3ZBYz45LmsDLRJwEqTfHsGH83ZEUrw93wRuyE1KdVVX5",
  "key4": "3eU1kxA6CqGoM4pqMVfqtHuSnU2cPMszz3UpQp2zDvdU1RdBZBnaoy4CVvXqstWAUy7J37PTSM4D6Cip2BrnHVdY",
  "key5": "57wbVxfGADigSymXLL9zttABJX9zFTNTpZt3kTd3naG25J5TVBrBmhTS9ZDbj4hWY4n8gpcUHJYpxz4qNjitRK7b",
  "key6": "3JFU7dQG8qQHShhRBwjNkcj5jVPjZ9Fh5ZFitJmFsxDW5NwS3HyFj6muXdo6kRFzw3Ct5RdbuHMRVKwNtmnpSr38",
  "key7": "34sA1ZP2WKuEabsMS7r494pXjxDxccD5Ty6aMMKTTLsNBevtM7d2ogNujepNCcriaSznssLntEcW447LXsim3XHY",
  "key8": "4kcVRFrh5CWaW7RWxrZ4BMDAda78FsBeC1xZ12A1QBvwti1V4ZYMW8aiX26yRs4t84PNqEvUbWtspHWDqLQmPk6R",
  "key9": "5Q3an9dZeqCJLrpRTj8tMs9H5cXPqC5mFbR62rRePLWsS2aoqek2VLxqbxdnTU2LqyWXH7SNtiQkqWZoC2iacMJr",
  "key10": "2s4zsRAPFKWsLzRTHQUmNkL4nCTJM2gB5oXBrGbSLvcNeKatJoV4krDoEZbdbynLUNPzjgwpstK9wBvFAEDPQU3S",
  "key11": "2TaRwXkJrss5Sorg99f5TJ4Fj7wqsUBthfw5oTYrDPu83zi5eR3B8YERa4GhxGbJRPBopmWuFz3fAxv9GmBfSKah",
  "key12": "ZhNJXHpdtfXZUSVVrAXGNJna7nnCNHHGQpWUJEpKgnQ92xbeHc2hKqCL5yR9xxPp4uXBtu9BuFiTteERpdSRmpJ",
  "key13": "48W39mq9KHujrBeLfjozD4tHefdVPforCZjs7Bq58Be3ZvESvuaXY9wPFRsQoMEBY6vYLxRqVGaVes9aY3V6Msgd",
  "key14": "2qnwpYXykJQ127bJMaVBrHSpt3VYDMBiLGThNyA246JGMpLJyKsx8AtfAq2UkXDXQSvZsGUYHKoUC1NuN4nVL3fD",
  "key15": "4MrLLER5uSeSfzGvjupXDK4RReTsqCemEsqeFf3VJxyAvqyXSGz9mnwNq9v1EGV4NVMhcJdiNRQq5V8cpskH5gRp",
  "key16": "2EGjocmjUfjrFh4TiTiTJ2Wimbq79gtH3Q6dmcpGnTww3FguQ1NLopWhjLYwU8SejTj3bYMYS1wgEdbrXvNF86TH",
  "key17": "6564D76si4D6pK3QSYabbcMtmojX7UxQJwzRjcEwXBB4gQgx5xvnCWkMWmA3hCuw93YksbWfvAYnGjqKbHR73rDr",
  "key18": "LEz8J2124i78WspVFJN2WJj5PsYn3TK2JLxtu1ihdgzSSPWuTMQc5Jcf6Q1HhZ9XTyRqknQgkHJ5zSW8m1A2gmm",
  "key19": "3691tCGvafuYFao3Vc6ah9YdX8je8FAAcVuFi1ZJf4DKM3853v6n56K1yC1Tmwf9Zpw5JzvCRMmWA7zdSu51gP2E",
  "key20": "4843y6PqfWJ7hQhtNBCjVShsx1iA6Txvs8aVSsUuZi4iRZXPYWRp8SEsSqxvAid66UmBKx3Luaay7NjW88uvz337",
  "key21": "7uQrAGzSPbfX1nzLz4ubjDUPDBfrYkSjURqvyDPxL33uFeQEd9K7PN19FnouSFQMamGENry8Ecd3iWgRk4LgX2s",
  "key22": "3oSK3Yb6ch1e78YPHdi6Z5seXYNxkDWgaKnazrGUubyZbBdupQZdJvc3BU8wjxsb8TG8dNq3n7Yngpf3vpXEnPMD",
  "key23": "62Uo2TDhSeAXhFYC4SmNRLqmvsfogvu96HcASQWzqorno4LX4rYWwNLmqccSXjSqHMVyZJEgjoMZRWXbL4Nsy5ah",
  "key24": "3uWjAavxTAEMmUhXrJRrKZsED8J9MhgP5X2DARxR4VZbE3SxfyQrnLekQjuawzrztZ8sNBe3pWByxQ9xeFM2eXs9",
  "key25": "2FZoztiyzZCPfHxmGwFTcANFNcNyZFsCCQzFwqZvTHMHDkyaRFR2MYammKcTFw6KNVaDP5ig1Bf1R5VbTPFZZ5Hm",
  "key26": "47cH9DN1UGbVJ1HrkexnfMWKY1EXUCQ43Nk3kFDdB2Mi5ugzgvJb8kPLESCfZLct9PJaZkDhGikiSVtYtdZGZEub",
  "key27": "2PWySakc2q6nsFm6ZDhpihhKzdGXX929sEuWJB4de8cDXeubaN3L8FECW5qE5niVY61ZFNyTJMVBBoDShpsq2YfZ",
  "key28": "3Xz39Yac16Cnfb8sTHSrUdQufmLWFiTmFu6YuDDtsyCxrhR2zxiQmhrmkvRWzoaXsEPrkFVPs3oBkhXAUYAVGbP3",
  "key29": "4T8o9QYNQYELr3NjByqRSqJo59TzPqxyUSf2eX1uwZRue8JeWjiksqMjFtqfRSbsEaPf24cx6L7atXzmSEdASbVJ",
  "key30": "3RnoGfCYZTfCLLo3vS7Sag7vot1SVXaMELkY8SVBw8sJceNwApz8NcLgyvK6TYNtdRcxUTczUviCRtgkYUn3FEJE",
  "key31": "1217xg4NsM6QgeknvSZp7FdZt37psN7CbVQ74Sg9QogkZM6ayArHX7iw4nC1EE2EBGN36RdFJT91WQc5RGw6NHr1",
  "key32": "5nMMgweq35xKCS86HNeGLWGHvXdDJ5wPnpaRPAb8pMWfWUeAGU4vk2WFkdGXBkSKnNSgULMm94zAPaYrLDXeBTNA",
  "key33": "2pQmrgzJQWD4Yasd1kpHrzatn9x8Xhff5fRGQRvCkqMCxoq2rFFVGGZnnUk5Zv7wfDbHZMKFjEmP5WLEjFxEX1iq",
  "key34": "5eQXnS5tHmQbLTRZouLPXSUFTR5ZSWryafN5up7oQgHfXyegqdS17Qzu2aqcLoCREFssSdfAko4Gjwbq7SWbGBon",
  "key35": "3Mq5bAC6YCBgdFJSbP63KjpuDxjGBT2BF4JFqtLon1qJVuPmroG4AiEACDVtDNrAyivN1K5y1Q76Q2PtKgPm5qqG"
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
