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
    "5fTuyVjwq8VqibimukxJTHHpdB7cqNAhxqGH8oEpd6DbvgFD1PQ5RbPtmKz9TKjexJjoq3s3E8zNVFjeEktQPGRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mquK3yGagmvLL9YqEPBeYjz8YNCzRgJ7hKdunB2Dcx3YkHRr9KAHmX2rywfvc1cMFFUimMUyaqUJ4e3xCrRUANB",
  "key1": "5RCBubzGXtEMngW717dvWfFhtJMZBQa8gR3xuMPZVLwnpztHLBWANEcLyTwMHAbGMkcuG8ut6zA1uFzmdrnVoRbW",
  "key2": "3bhBD6hj6WLH4tBpXweWfdRfm9kk7DhmHsPxEWrsrcZUdkj3qk7acguK8h8j2ZWHbDbvfQkUvoAidh9uJmPLSjJZ",
  "key3": "5kHske8628odTcH1DTnjSWQr5fm2h64vAzbJwX8B2oQdaGqsBp12BiH1qwVb3KiEWGjYqaWphGioBxYUFo8oAttM",
  "key4": "KDanfwE8Xs6XV7CXsfZE5K6KN6KYVpRfhYwRiLhr3QdeADd7itCSD5zAnUFxdcqtFaydwr7Ugg4dZw7unj1PAky",
  "key5": "4j5denpd6jVVuJUMuQZyg2KtEQmxaX7LRCwRipeyX8jFWiNiPnXytPTjY7bACcdgtLHxfBo9x2CyeV3k9xDXmJ3t",
  "key6": "3FrcjBZs9ombRWFKDLQeDmwh6ajhzQceyKk4sQdP9rsjhFTn4eW7QXNaNfrcdbnXoR2CswEc8sYEgPPsmLaV4mwD",
  "key7": "5mJHECtJENbcVe3B6wPNUDWdhgRvNhMWxiA1nRGfRQC3N2cmmiHWmEsBGdGXQbfEdSmZGHupCgxty9piM22Pb4pE",
  "key8": "2g5TTf13JpHNed4eBQT6bd8dvQkE3P6cE2ZYGVFAfaYmnRbLbBsbSRon3UGBda1fdeRxnQErWwLimNjhqGYNwpHD",
  "key9": "5F6uofGwgw9MAZSYTYRag2DTAWiahBsLwBJV41FViUZmLS6gmGmJfhbLeEXXqTtrHKLGuiRFnStLDpgMJiny7agN",
  "key10": "2eLjhzM6Wn5yzN86k3YtjrvzVFw6RXV4vcNhAyirT6S44hemM3B3t3La4UPPftvUjgZNaeWS62aqms38XH8Q6RhC",
  "key11": "2B4V8BuvjAR4aTC5hep18Dvv94x52b9SjU4TesbkmjxmBAzdZqPWtftiEFAezmUyH6idF6eeQmaPABmYc36snMRv",
  "key12": "3n17htCuLfAxwDU3WruzCY8rgs2vi95PtNH6H6ywa9rdJWBzhNpxTr7mKfDbtGUE4nLSjBvCB4qXFZzkDrsKQwBW",
  "key13": "sHr2sk8kDdaBBUjm7mrt2Z76JJn3qSbVEaEFiMjRZndzwYtnL9ZRz8CQtn9ZEi3iu5zmhQvezWJegzB25wzUFxB",
  "key14": "Gsb6aL954MdJJYzAmVWjngEvJDwNYs6u5z35fSHtpUHgQDqudoBut92eErYe4iqX5e2S1jHEf23UuKtK4WaZ99r",
  "key15": "5BT12hs8mXxVzs6HtgouCegzgTQhzEh3uphM9gSWjiDASUhxSdyncp2bMbwyX3AdQB2NFs5zFiENbRrotVerT5j3",
  "key16": "4f46AWPQDBy9V3GfxwH4ddunsfje7QW81b9v7Htbnw6zsZD34grZhXYnbEAqXdMmb674S2r3LTW8rDPTCC8MpHj4",
  "key17": "5pQyeKWWm6uP9prnSrjzcLtEqxwYVCXA8NWpS9wRDZbJKVeCF3YLqa8B7yeESZrFEWbTgZZRwBaYqKD4WAPPwiev",
  "key18": "2Ss3KnbHvgWj8vPiWmWjhU3JQDiJKJY2DwWoyU8VgdKPdpAsRo9zZGQvMPsf8aSS7ZQTviksyqh9RPR64moMfaoQ",
  "key19": "33jDbSgdqPdvbTio6ri8trjVYed8cGhGk4DHvT82tvKvsU16WaTxXj8ahktUxt2wEEyRaABpKSGGfN9rjPnrXNnA",
  "key20": "a6hgZaJbV51zxzwdC72GAszGXAXzxygW3688RJREvJGr7YZy8Ez2Za5mEeqjPXCehv9FgxHJ5UkiRtKvCF6HNqv",
  "key21": "EyEjy5tY8EK9oB8Q8Rwa8GZ6JyH2CxvnqZtsUL3v5JT1cSYeWCXGoxbZ44GwtDBpY8zz4jfpMcpLsi19wZHZCsX",
  "key22": "VHWu1sz9WRw1d8AoEXoZUCKKq8fKmamrXjtZqAFNZayk84tN4gXRkWASgFXSQx8t1riDZgFB81DBf1VxumcDpDQ",
  "key23": "3rGvjV41t5ZyXrqbE4ubLWH4kVvEB2AcqiTKWezyBDHpkQvFnyEhoLztyWEYYhL9xuy1NYzFvTTs2Gb1nqxt6yhg",
  "key24": "XV4sF2vp7nEvkBYnbEs2rDKsNQaCMxRjv2ZmgbFurUNPy1GNed1qcudPSrAASb337SYDYugJyUSmxSUp53KxLsK",
  "key25": "5y4jso1WBZFsVBbbCsQqHTEDygEX9DEEANz2TPBknwMDdsevzTTzV7XQsac8szvVUBvK5gMTgPwLkBPjXnqsfpTF",
  "key26": "65yrRCuTidtFuKrurTnqHrJfcSX9P8AXyBJzrMMbmdWJQi9FmrPsJZZUxBArRrQGH9YFxNDBct1WiA3wgF3QgdX8",
  "key27": "5uqsA4BzEw8RFqZGLHWmDtnZ41PhDxDFWAYW6YVKrnqaK776698MFQD2bgvmDFF2WkNYSVSp2Z3SpYJFnBLavpPw",
  "key28": "34bd2Yret54qVuXqzm34do5asvw9wzuLxuMoovGvBX9gCeEw8JNHY3B1vcknBKbHNtERgSdt4EdpvdoAwJtdyuuk",
  "key29": "2bW1RUDuetMA93xpkvRHuqDJPt1Wg2Jx9YxnfjcEMvZSAuixhZN7h8JyKgzPgW3ySLR1tikznzqUAbHWCCgZHNXS",
  "key30": "4ndFLhXkcLeo1rscK11X5QzyVzmKxFXtmXEwquidQEYuUjTwFohHYgYHtd5yCLbTeNVac2h5jjQzbtcD1gj83ujY",
  "key31": "5qcJ6JHQRY7qtEWsnch5BqvymUdC1A4udhPPMPukRYCiKTjQ2b9FU1d2RLBLawLeqDJHAcWjGFTw8qUdkZ3vbYgH",
  "key32": "3cFvyTqbJKEk2EfT2tsSeap8sTaeP7PZz5izhvon4ZD7s1bdyAfDnP72HCvFtyhBsC1pgs2hn8D9X9g9KAxcGgbs",
  "key33": "2PGtuiLCB9zxmki374X2NufokT64PsEybE1gBdbK2nepXLSmKaABVQKndtBbpsegXsBhuJsSCwXkd1VuWPGF3FHi",
  "key34": "2u6mhybFBc4GYqvbDSbn3gHgqMJ3n4pQoqYyovgJVvRUT2Rrnh3tQgXmMqX9Cjx3Qagf7pFhqc5D9uYiVdnF66qA",
  "key35": "3dEePbELT3TY7Cqtik5W9yisaoUGSLpgTq935ivJFAb8vtEiJbya6jzuxrVZf7TztQAbx21L1cWDSFbZsKWghY2Z",
  "key36": "3Mz6fGe2f2fXkMNSZYwXhrYp3MxVBJ69RqoXCANhQTK46fyPuzZbjV61Gr5DHvvavy5QHVvdXmZf2dVC37d5Wpe5",
  "key37": "Mh3bf33Tj6st9GYJcbaHnnxCPbThRMBkH115KDmtX7bRHQSaf8cHbx5kPEkD9pemomhmnrQVJtXHCKjz9m3AkjE"
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
