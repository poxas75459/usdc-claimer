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
    "6416kjZGAvPJaqaK44Wz3wEhFCeA2HmoNFFc8N55ryx1Rnhbcbq2ypGbDVSAX6pxvQQBhLFoCMLLAZh9QHs4HGf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNPwfSYcPmCGDUkPLxgMe1AZvizpC4uwAf8eCWyTEg2qKcusxUXDpbMZX71WrvcAmrahzBRunGDsg9teKJTFE7J",
  "key1": "9R5Brs3DqozjgwPLdqyRDqknWVMwNkb1hg1Jaqn2ioyEF4rrfxkSNESwuomjgwPR3LSsBddQFpYdKYtTzPnxPPx",
  "key2": "5Sbs9WqfUxFDrvp9FEBpWBPJ5ffnLXgN2tL8AtKmV3qe1DSNxq3JAwj5G3MBBbYc9ioHsgmTm5HipftusAnXpsA7",
  "key3": "3BWF1PdQtCv43hxh8q52wpd9YGxkpQRYTc2ZFoes8mFBqfJLK9SkYi5sh57TG6mKE2D6wkBHTCMFmrNoMHbWAEwh",
  "key4": "2wQLUSSFXbaSxqcpweoUzbH6KNW25Y3EFoDA8x3CtjpN2wVmLFXxjvCU4pz82YwdWb9QUD6Ch8fVXaQFDCn3DmNZ",
  "key5": "5Ba3QrxwQrQiy5KkH917ScdHr2pVhC2q1P9FqWVZzdLd8fFff48dcWHwBF5qmXHiEoRDzFxxadGqcQx6mJY5xtoB",
  "key6": "MgEarQX6KAGgYm95JsqHUwFZSVcnnVg5Lze6xnd4cxGy3vjt6CHXuYTheH9QF8QdNDezAiAyC2DXbnUja4oXNtc",
  "key7": "4HXKBzr5a5SSjcgZYs4DQ5gqzXp56Sbbvp9zDdGW7sEk3UgLpUVHxjzbnKm9uFK93vz2nn6r5PtqDgGQcuHRYk3",
  "key8": "5CTJUKDUyHEmdnGiiAPeGYG7dXJywxXpvvSgyeEztwBYugYknJ7CMH45gie2AKbw2AxrBibf45AywiW2WJK5fZx1",
  "key9": "614C29bc2R8tUcFSawHDUB4TjUiiz1yWbyJp4jcS4tx2Kc9u8s8namhuSYSjqgwJqGSAecVCPcBFMa9mS4sLV2Rr",
  "key10": "2oVeGi38BqijUyGZbaRjTaw8uJghU41txdL3YJmPyzyRhaM4MKuYoMRD7czDsMgPzxrrQt9uFDti1AHwfzyK3dMn",
  "key11": "KgJoDR9eRHVyQW5ZPQm82oScz4BQXjVM1BaWTbG2XhjwWhmPXi573Zi1Eb1ENozifPS4VqHCEJisQmQe9GhUD3B",
  "key12": "W4iEj3T3LhxW3Ujx74m9jGeVU9aH9zeXjASLoPpJLtarkbr9aar7AcwY5y7tVvWbL6GvpzLoDkvaWyHtWy9yfve",
  "key13": "tbZ8PucsfyvW3gEBFHaqQdVdB8uPHUfvSdyhYuocBEcyFRsuwToqr5WZZtoHciRWe4vbjRiv3wYhYsH5URTqSiL",
  "key14": "4bBVenFRsrwGzcjP7QBKEWYieA3VAGmT2j2EEwjhcos5XRKRHXobnr4WBEJ3Tc4wrg5LE625iVYWGeZ3P1z1cmdy",
  "key15": "BaeSab5xGnVqZ83WGKzA5tgMAaVVLjRMpx1Mt8YZYsJA1U2ryzUViMDJGk1agEQvNV5goRML1TPz9CUR7GP4PTZ",
  "key16": "3vgoDpLdqnejcemg3t53nGxM6FmqnWEdXvcZf1ZNqDuH5kvn4Wc8WCv7Xgo7EKpeQRa8hdxLJBahx4917xFSx2kR",
  "key17": "4dn3YM2QNt2UM1YZetgsNyxB1Mc1CJgj1qQCrgbk1Doh3GgzHgBPr1jDGioKKrejB5m5YuotE8ZtsLRW5ZaCTkjs",
  "key18": "5pB8QZvJP1wRtAQYYZYBnsTbtQFzpZuYKaRMhYTxzVCaGiFZ1XxaGDj8deqMiH4TGcb9m7ZTdyS47ZiGZkWdnjJq",
  "key19": "3NkgkCfsZ5mbuchQYENQ9L7ZUgvroNKp3rwcsP4ybE27JvEJbdKDPpfkoQ5s88DkU9Ty4QtUvKiQd8LZNrFZDyAc",
  "key20": "3xt2sXpaciZcPmKNRoGH8M8itGconwbR4pkeXvGiRqFwKnHDvvBBPV6CL2TGwC27irqstb8XYrbqAf5kjvLByM4e",
  "key21": "5qi1VbWXP9Xhmbz563KkqhQHe3hdGvxdeknurakgDqKeTqjvpXNsHbP4RhjK7ursPxbcfGmLad9NKTfM8tcgYmq8",
  "key22": "3E6iUjryzBQmc8S7j9RvVVdbvXnbsnJmAT3P23RpXUn9PbFhvMdVbSnotEvAeiB6mWmYmEN6b17ybUwGUgR7NLzM",
  "key23": "46sSCmMYyJNnZq1Sqz5n5RhRUE8buWeYZgr4n7LV8vAxGdj8u9xdmZtoQV75jNV5pydS6ULC5UtwM4F7UD6W2AeL",
  "key24": "2hfqzKxmPiVELg3kbyy15PpikVhdX7FecvUGyhK3FfSDxgSZqWprnKFYN9eRrZYtmDX7fP8mtV6bKv7f4Lc3WNU9",
  "key25": "2LWiZ12NpLe5joeQx7eEKkBHEbJRJEj4s39afJE2k51UJS82aV5GJJjMptd4ad9Q1Bx4xkdPKLDqAXdNh5w3o3nN",
  "key26": "4aSEsAJkK2PMLbPzsUSCNc1bw1BV3tUZFXgCrLNoNsySGwgrSdYBN1CtK3YPUMdNwmtApnpLWsF5GfnsZei6Rzt5",
  "key27": "3R8pqe51oZf48uTWFD5qvKXoZQQCu24XbP4RKrrACtyaJNoWyQ2AQKMR1bo3QcBCWNrDEm7qNVDJU7DGtnR1MHKs",
  "key28": "62A6mDAUoSTpn6KvLisczkioXwacmuLsrNLokHnwquGGdCDS11QGfsMTaKByx8dMggkbsiKbGbXeMJpNZ4ndat3s",
  "key29": "62HEcYqwrbCu64DgAGjs6aid8EwLQFzcUP4Rhi7aegDXvG7ySXdpUdZcfZK5rGhY1X3ToMwmZhy52cEJj7cvbthL",
  "key30": "DqvbPjvnLTEcn57x7SyJnqzzNnjELXGtGjqnr9LemAZogF398TFTtWn7J2hx2SgVCqsxSK8RPfhst2BBZEwys8r",
  "key31": "3pabq1U3GhkbbZ5uxdsYWMLpLKMjCMa5qMPtULLLxM5qc4xt6i6zysMfzmsXBB7jMKt7CdDHG4wiNTt5THHJMX7W",
  "key32": "6111xy36iwLohL2YSbdgRYuqoQiggwfhuMV25NTRQ6JX3VJBSgNEaf6D7g4ptMWSTT4Svw2ssETMxik6hX3wdWUr",
  "key33": "65hNBdZJZr6tRRSFANNdqUpBR3fr624FbMM3dHLHtQhsnDWdRwSrPYSuPBxKvj65vph68ad7dY62q6ioxgAvH4sq",
  "key34": "xuss51VCcAjGZYPFg5gb8FGGFvTyjdyqHcpMwkXGcQKJGJC5aQxfz2f75WZkv4PPKB7yyYPXLN8NXHDskEkpFDm",
  "key35": "5hwU28qNAZjf9owpzs8QpgsMLBc7aSKdZQCUeqAzwgzN2m3FwAirjTpc5tnnsKcyob4DMm2p5iBYZNf8hcR85bSS"
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
