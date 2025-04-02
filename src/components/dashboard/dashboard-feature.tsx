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
    "29gEkpMzPVZJC6ZnrkcGVUkseeLhSsopAV8KrZpr2iNSPbhoGg1S2BYmtuitx8cVKNPNXGX351HjR81ubVYFmtWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CtkKdxzhqMbE7bXUQ99cttw2198c2Wnj6eXnGh5EhCgZmqAhw6jUjZmwV7fgZqeH2ifafY5x8La3DMXDgWGFLxb",
  "key1": "5ADWaQUGXce5vUuuCDM7dS25ABAQAXHrTiDxwxQYYvy5oYBx2KJpG1MJbrw1LbVcuAsRxch2qZ8RZDhqhJqtp9er",
  "key2": "p5jqRSUNPELmUJKCfsxaJV3Kya2Rmv9aBh2xCHT3ifbS4oxKHW299bV6L1EhGCKyg6NW4RNfQ8W9Zc6XnxF5d2p",
  "key3": "645eXMn3BuhwzpLjofCNPjjJrHgduqvnVfAcs9sJg5xcrha5QHHwQDVW99vm6nKFADKw3xFqAD4HHpFv7AkDrQSN",
  "key4": "4xzHk3AhQyihqc4pSNU2FCQ15koCnypYoCdTQAhS8g6QK85JtuNZ7qrxUfDznbV1m7qYst3iJvJhsVWwSBaAu7pM",
  "key5": "4i4iH6Z5S4Wrqg2f8Xkmpkrq9onmGeAE2kqsX82hSmPMpkjoT2xfGvF3e2YKZUSD7ky6RcvoSB3L5CGoptdkwonG",
  "key6": "66erKLs5LntmtFN8Sf5Toymu6k2r2rykTVuU9M2iYUvSomHnrC4hXDDPPwF5wpa1n5RxLqBsjXFAZTMkTfjETz7R",
  "key7": "44XMn2xnz1r5Tb2miPi8THBrARNm41JWbW5cmHpojzYQsH4v9haeGzTtPmdLzvJ5g2YrMyEAVy2ukJ3wwNPusLnG",
  "key8": "4zUFjdzWXZyg99MLpVNLBEKH6gjNt91qApK1UpPpwvawAxUVaF5FL3mJ3Hbw2BMvLopujc8tPodqLQQGtoEuAMGn",
  "key9": "4NwZEyko9fPh3of8bB6LFjCd2pFL3XVovNyatf3qdS7ZivaqafX13kB3xgj8u5N68FZmGyyUPCppvZMGsyE29AUH",
  "key10": "2rGKFqs4L9HJqRki5jTSS9XKQqyrJHjnH7NWtyoEDYb4xfaemQ528pKyumJwietjXsyoxXm5ZnTHcWHnb6s2SGbY",
  "key11": "NwJevz2UaKA9KNLHvUqKAxP8DJx4fWSgchu56pA59XeNQobUJZsGnVPqegoNpDhr2GxwcStHcCyB5dmH3fj9WKv",
  "key12": "4bySC34B6vL4W5Gw8zwa4jfch2pbRW8k9QGQSD3pkt39C8S7nqXfhnt7sdyrbXTLWSHnRJjpEpWGktXEMMTtmSy6",
  "key13": "4d5UfHwcGStZ34rzZbojkwYn32yyfkZWWmH71i1d4cWP3JhS9UXi3nV5RdZ4Dz1iakr2EE3ovpJ4Ux4pdcBeiHJq",
  "key14": "4fYWBJ34R8eA8aMwHWGwWtwiPR8vNAxbsWnPCsPwPTjFm2wLFaaysqUHbCNmyz694nxuP6TqBz3vJZ7J8Y3B5NAH",
  "key15": "2E8SAhVwx6Uj9fyGJ9DLZhfpf3BXgEM4iKuktDf5eXUpyurza8bYXxA71jErtFL2xFF5AkQxHarFwzqcNapHTE8U",
  "key16": "X4ttshaHoEV2NKzzMr4jw6doKMG5sq3KC6EPQNuAugPaQRCobErNNVsVuXRcotYETWWXuqdf5TsZ9xGJX7YSg9V",
  "key17": "3wZhRXA98cw3dvr6qmQxb7FvPSXeL5KnEKnGcYvg4jmSvAYGqwYkaKfvobgBqwT2kDL5nHmhbkNtpyEeVzoafVeQ",
  "key18": "KiPWajKLdSRukHsdGyQjXqk3rpEqkM6CAKnrkGkaypkhdnPjhVTcE49GvgWBaW5eqcsbJNNfzm3ZpGg4QbXF2nJ",
  "key19": "3GrbYFPNQWE4s5C8p9ndus7J5Svsh5oaWZrinSxSkC3apyZL7veHyY3Ev15NvB9q2khk14LuapvBxnsGwT7YKfnu",
  "key20": "5HQkaEstSatFvjCzatPCngu4KMSg2QUL46E58UWNbH5Y5RLd9q7uQguihfBHr7CyNkpUMUoaciHX6qNVzhW94qxz",
  "key21": "28LwQaq7e2ggAaHhdgJ6xqd2nLHLK36JV6V7477Q2QPrMWKzgoQtigcpv7knKKs2NHepYZPVgkbPneQzNxFaR2JP",
  "key22": "2nSyj6MwAayJscLX2aBQ8DY4U2XhyTtU8pS4928WLsg1kfkxRPpaoGYdfYQcrGGsiWAhvFPCwdRTGKrKZJ1Mq8jK",
  "key23": "5Vik15RHvsn8RbjxALjSpsFqVXf23yon2qYXww1EeQ4oZPhTaycYhCBcL3xEvbXUJTU5HiK9Ui1SZWLtpfeK1TWL",
  "key24": "4R49muevxu2g36jv6kb4XamAUZgufRziGbzkGpRvgxqBVok6sJ1UGNyd8viHA7tLADLfNw7PwpWKzDg3EDeQdBBA",
  "key25": "2Nydru1fFGTLc8Fos9XnN6j6XtRYgnF64VuqiLKjm5afJY7qP54hNQyRGzZg1iSZ6EFXNuG3iKvLRtHYegjLEkfU",
  "key26": "47hpMv7sfaSGJpRyCPHURtDJd97zi7QoTa9Nh6wENeMYBJbK1uMLEshC13WhdP2JSVdn9LQQJ1eBNGQUeLo71W8r",
  "key27": "AgYdgGKZiP3R7URhJRJUKYZhivqZ83cvAenUhxQqDW8zoRwor7M7oc3s6eQ4wR7WXPiBDZsrPmbeBmbCXBQrCSo"
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
