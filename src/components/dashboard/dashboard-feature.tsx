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
    "3xjMCp8KFK9qyePB5JZ5BgRrkZid33jpbha1xFdQRrXCTdaf5HetE3kTnapZU5dwdgWSUBxM753CiVUwVuXkNtUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5weo9mQCxit1RR6TMBwfNoANvMxGVKTtYx3VJhdrb5xrpb8WPfF4onDySQPFKyNufNfjWSanmkXjnmqztQZyGJ",
  "key1": "3N1vVzGj2avpZnhL6M5KzcwiEyu67UZpXa6ZA9t6141cX6HSs5r6ZifSUbXEgE5k6gUp1WkAd6hDkbwjmQkLyFWG",
  "key2": "5hCmjoGj5f2sxK5RVHEtF5hViBRc1Yy5CGXZmCWTkeBUDU2LEwbWTfkynn8uoKMN9RVTbA2rxrXTx4HyJTJVsQFJ",
  "key3": "2KziPmXNFx4Chz5Dv8xRmZUUVPh4VqLbdaryu1WAzCrvcHmEERPyQdtHw4Ht8qsPC8GSdJM5WJjz5Q1XmdGP2evb",
  "key4": "3seVK5yJYLoUrovTy62H5pHvMn7qX5r5C77wSrEUDqb1JSMrecTwcCVLWa36awdY43WmbCWh9FA69ZMrsqLthnBt",
  "key5": "4K7j5XpCjJ4FJBmGzD2DtdyaFFuQvktF7BwP6xytbEUgLYiGNuoojmfTVeSvjZ2B7yy6DYhuM4KuM8FPdVTjHX3R",
  "key6": "3qFajbwPNzc3aVNTvZxnsC2WrCb2W4aYqCuWr4NdWn3QcW1g5kpz1QaKE8dSqg9XZrUnS3vhfRnTHeGJELYNS1AR",
  "key7": "5zq7UMbHUs4Pqj2A8hVJp1bXTzXkzUrmNqXWh2Vt5qciPAjrPj8VJkzYCfoYDQ7TQeB7yL4xr6UcM8kKCBPpFX2d",
  "key8": "5VFkN3RMEcem6cyhxf3ijFsr1doYEM1Bw1EwzNgzLHHEMV8DqxyHhKFcR8oWntr4iK9mbQvG8Uz7Z5f2RQWQHtPS",
  "key9": "4JSva4bYaYkyAfNGNqcrVWCjfrB9DSkD8vUUnJ8KbG9Lhy8LrKdNThFXmJ6SHZPBnMMyZzf1TJMpmS7EmeccCjrq",
  "key10": "Kbnji2FcAjJ9LTmCBLmuYvm4csRAMytnkzRrNZpg3SkhxBQRUBzwVp2HmmEZtv4JefcpYXzQUJTbZLAP85ck3Wc",
  "key11": "3zpCquDv7HeHCxBeQ4KCvkhJ2Zr6YJsW6rsz7trgMHiCZgQLmZ7iGBzGiMoExt7boxhxdR6WYMom8ZD2ZznGu2pW",
  "key12": "5ukxHEKfznFRyCELhu4oBdFeiNfBUYbXPFFBXrhj59zScgHR8LuwbvypgmG928ABiYdRQhLxJM51HMxNNaVJnG3x",
  "key13": "5DNf54CNsTtb8ZV9VX3dgvarx74qEoen7UQsgjH8HqS1NhpzLBs7m6w5niTDLVeS28nCaPoXgVnVRyZftWdFsZjg",
  "key14": "39Yb7o3sBbdNpMGgp9sfrDAUEkrdo2WpmMrWhuxjzfL25Dn6WEWQ4ejgBh2GZP9QbRj48t8vLcNSuKf7AtY2En6Q",
  "key15": "3eSMxaLo9TF3PKYkx78MA1WekmYakMWmqkqvjhUajAhbFB43ggRxuH9CH4zNKvrEGXmBnDSwUQAXqbuUc2Zmbms8",
  "key16": "4QwU1vGctJ3Hjjq2kqJtqVGfwsPsdFJrRej4zbVq1TsPyVDfcYBuJMngKTFCMAED4YszBWACqDBPBSoyPs6epwJA",
  "key17": "NhVo9AcuseuE8eSJC4nLf6DpWHM8ib6AWnqn3ZGVRt9yK2jcFzAmVkoo3Rsdf2KdNsGhefzZJMWLmuBGNZzfr9E",
  "key18": "JDj2U13iXKHaduEu2nzPZnueF97YEi5m9YeCaiAZTTDV7S7vZNpasvX5fZUCyB9RozFHQosLseBCKugyJNhN7rB",
  "key19": "4RphCWB4xmyV1nodUk1CpzNAJWvj21cYwSNQGEy9dXwy32i6WeQhYiFBi5EZ2W41axaqwTdiyPF2yKnejmH7uy6V",
  "key20": "2Y6uD6pGm2aWb8gnV6MErCLM3sqDRVY3P9v8QhF6anLv1gindpRp18YRsGGuPVEwASxTxPHuqchDo8RBfCabdnKA",
  "key21": "61sM1CKb7H29kNyCe6FT8bfHa4Q5vF2YM9jtcZC5o6zvCtF87XuV4o8KqypYmJp9kZ52DetfBjo5seNYV9HqSm8X",
  "key22": "2cv4hfjGUyjAUMyLtK13pdHMWauM2vLH6YujHWRFBDqWeXajPmz23MTLJzCvrGVMSJmDgmmiuVmaFHgQCup3wx7Y",
  "key23": "5VqagYy1JFFNTMBf5e5MWwVorYz5ArosVPdv1oXNG81s4uYNweb9zD1ryyqJSEEbLs76JmKyyVsn6LVUSX7Qa8W4",
  "key24": "35fsE9EiY7xjLLwsAtYUX49j9WC1Gp6VFVkogx1rbTmZYqjwJeKCyuh7NnesYuVuuQ7TWVnFUSCEjAWYgwPfs15",
  "key25": "4kncfaAESiy81Jy1azVqMfZg4kXnNJVcnpx8GX4nbErLFz9NUtLLttgvdsiaoTfA6hBYZwnmAJXNTr286LyNzy8s",
  "key26": "4ETaCby2NKXwG9absjbYGNTn4aNzZ8ctKo2LUa8fhtyo9NwQq11Nj4dNUrv9L9BTgWvMWXcj7C4keF2HhxvGm5wY",
  "key27": "52qYwreENJxsK5oDbUN8zj8hMu7ZPBkAGs2M1Rtq3MkdbNKm4H3Gu3ZctkqWeSkXACTHV3NNB3SmbbU85bqgtGPX",
  "key28": "5X1M7o9F8EjvkZMwTWi8uPBBEDpfvxb1TXw1tfwT67FKHcnfPTXxez7CBjXGXa2NtzFUtrkWEULiJTqcDUXHYai5",
  "key29": "4YLZoegDMtVznNoorA7vatxxguKtY3D2p3UjGDXqiKLBjndBCP5Bnbb6UaSbeCgrCiQfeCjNamUQWsdWpcZqXxPa",
  "key30": "2vt52RMSpR5rMgtvt5sykRiBukLKLpnqNpUQv8dWZsMZ89vCUEVr77kvMvB4Wr7bs4dYho9oRKdZfSKXVFmYmoEU",
  "key31": "4NWKTWneHZ6qodVKxRULx3iR855XMY7eeQN7eEK3m7BuyABXAi5pJHbdTNL7XCaLB9EoYK4QCe1apCpEibd9UGMf",
  "key32": "XDouLCJ51nuzS4yMdUCSJmhJNxQmcJfjaiEf1CLfmfjCJR9CJWm2ZiwEkt6H88mz7uP18Km6fAmTnmssWRqUJRh",
  "key33": "4ndVCs41YKHbJ3MyeHZnh9iLwNjFrz3fKWQv6ZrPcFH8FdsaMp1L2HDGMT4t9CBtjSZ56HyWPpoiM65ixYLTtx7V",
  "key34": "67ERJ1UW3HMs64eLfhsuJsrV2R6EPNgfXgBr3zSHAn7GXKMwPHUtPr631LJLDwjpqdRU8kcmceCj8TB9FGJjrSpL",
  "key35": "3yuZ4ooC46JN2UesfdD7zNqBUR9c4uAuy7qaHxWiFspSB2CicNi7vTzqeUcM1nyVWHdwYr5A3BSNLa368RYdbHu5",
  "key36": "4hvsV4LHswWfm2WAwL4qboK1z8tq1Jfn79RHfaKh6FD4SnoSP9JApVU75Q4htG6sp4wmwv4D4vhi8LnVstUevDeV",
  "key37": "3XJifAmqeYnuT4gGviBHB79jWHBm9PTLAdoYEQF7tnnpBSodEitHxjRqkHPiwzwjRqieHWu4cjXPmz9y7DxxFK9C",
  "key38": "3arALxnXN7xKA717T7jWmqVFg4rRUuU6CdJcfpKRnJsFkCHWURvGaZhh4nAhRW6HNeri1LAVeXDWxeSRHyjA3JSv",
  "key39": "4cWctj53eEAdEvRsgpfo32nm1bHmXG1TmvtewXY3BRjssa3ae7ng566qKYmoEx4qxWHbrmVb1uKtknyXrbX74wfk",
  "key40": "2AZn6TvW9jQxRHKbVg5SH2uwd72ym62xNgH7mvj1H9vk8XV5ENjNrkd8C9tbEbj4Ph4xUXh9prLKYPNmjp8o7yM1"
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
