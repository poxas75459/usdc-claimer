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
    "5A9prVm33TRNsJHMnhdAXdyUNw5X2aTxCogZNx7pAJPvM7LEDGELCDp6bqqbjWpgrsJPeGtKJsVbySDS1jibCojc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J28DA4RSLsWPtZR63gVPDHn332djVXkFY6uZRnDFB9VWU3fzBGPCxWe2ydooq1X3m273SnrjuSUJxmgYTpgySmc",
  "key1": "5yDHXe93UXqDsprR5urJPgDqRo46SAbT9ffX1NKTQR3nCXpNR36Ks9JjSoXCa6Xk9yp3GigsDMasVUR6BHqNTRNJ",
  "key2": "5PUyFFwwfmrVou5r8uewWLyfMoSeYfD5cekWCTsyMzoLmRkEJNnsZS9navDSWY9AXakczxi2FRDuoeZZ15M6L5Z1",
  "key3": "2nQJ9em2HUkGL2TzdYpA6KY8qs7MTfSGbqTEWr1YUXEadtnK5XDMxMAL2A2HmautQp98NioPKxEMX4xoBbS8N5YZ",
  "key4": "5LN4Tbdjmo5zAakCv9TKXEQ8MJPtLoZ3NVMLVT5By7CohQQhZgz6jkjZVVp9BQrdLvW7ynG15ENF7aSWTDVZUQmY",
  "key5": "3XMfoSsmaq1uq3sRQoARSXPnP52xw8EdfhZEKVpQa8AshpjyDYc59Do5VJVfCoorCQcuDthiBSLCmCgDmhS81772",
  "key6": "2NcJpHx2LcskMiaY1tzzy3TBbL6NjVDQRZaQAy7c9KfcqAe5mewR5ZZDj8VWdwPgayD8pR49HUxM6NNngqzCnAAB",
  "key7": "5wq9jkrEsT5EdbeY47ziSsimbAHyUWXMVsaHuCVKi1VqvYG28TMTmX1LaC7j1r4VFmfz6mJuoyCCrfFGAZxzDpzL",
  "key8": "4NyCcUNN5aYFED6DYEEiGK3VzkNoxj3rs9CkkciW5HcKL1CEzxunPv3KjZ7MStKLHWtU2auwvRqyaBJWWVVPqtyk",
  "key9": "mXvkZi1Gk1DaAk95AtsKqLB4GJti2DUd2dSiG9p1UYQDaCDKgUno62FoHHPSzEvadoSxFn8zfB2Gu6yELP4EvSq",
  "key10": "QyL2EeW7GTCnH67bZdnYTz2UruCxGdriuCSuoqKfHULukE2bGwwvN27Dt92XUDEGTiCzkdVmzUQm7tMRREfF9ZW",
  "key11": "2BiaQt1xHsrboDvnZxxsQ4YyQGiZUSMPLiVvJbtUzZEeMxmLXwXvsjjfEZqnmgWmYVdyny6bG5DnuiPgHjKRk7qT",
  "key12": "5k2mEJeZyZSKFfpgBmAXbJX8mJoJKmXGsNu8sFLHx2NsCP6WSKiyPNhWVck1QV6TZRajSjp8FzQ2j9xm6QZRKRAD",
  "key13": "5e8aqPFSLs36Gg9cG2MThuubitKmpz1LMbaF5fynMaeYh28nSHWzFNDARNLeGqEvGxnVMcREdoGE6W5fj7iGu5dS",
  "key14": "2ipveZXe3ew9Qouw8vorNisBxjQwq2XyT7aJUaV2bHWJRXtPXhuzHVUGguNzX3MY9HW7yauGnseP7k9P3kmE4o1",
  "key15": "5i6GACpXDgeC7nAk8XYDAEtLXYD2G9eudA3qjjgPi6AdWmF2FaYeit696X6E6GFAr8A2BobLb3xSbVHdqkNWMTEV",
  "key16": "2Yq7D19B4BMFgbAp9JBpC4svhZAFP5BALFWg28TNceqf2XprpJtbvpcGhhdg3V1r2YVfXy4dyHZmDq3PZ7Vn7hBG",
  "key17": "65MVhaGNcKuFK3NPYNtCbxmHXktHmLaRPt8R2bNy9qpcdxvYFYwzmHxHnfaYtFYpMGgJc5iodTA3AQWRbDhtiePM",
  "key18": "GFMMrzHkF22afoeDettaY7QQN26cx5xx8PCPAaPoasx8kPqsN4K5bPdLxM35tsS3FHDMmEUVWex9rbt9TE4p2ST",
  "key19": "9fbHAoGqCHhNVZuvKJDGv6f999HT7JAa1DhQeWW92uSkbw4NaHWvjW4yD7JfrqXsa6oSQSwtmJMJrehvUKZQTHY",
  "key20": "4EbajJ1uRRB5vDdCCR3u7hekNEPv55nMxBw3dEf1cJisu5dMwfX2ZspNgtvPdpBmryQBwH16DiKWtBbviZnnGb5b",
  "key21": "2BbH4KzzxTKYZKkgg8GDLt9A4jHA1bBPP3FsXpikUSBf1WgR46YNwCF9DNQgiBxaBBLkegkP5xpZqNpi99UHy2wz",
  "key22": "24w6AJMzQXuKnN7sLNiFdXgVi3kJhtBrnL41qCyUwSx1nXjRkowxq3d1GvppP6GaWb17GdtNHwvoCpjrNdnfSPDp",
  "key23": "4TZVLkpM13jyfRTJmKAvA6DvghvgaFMFHC28Pdw8cwGqYoJGUDucpRiGjPdNwQ5qTQYN7Wak5MBYot8G3UjoYrnj",
  "key24": "4UhhgGMhCaFyXMdZos3KSHVnhDXZiYfhSsrxh11VxA9T6AghPCYfSgJFKjuHyBzmJkc56c3JMeEHkmm8SSY7gmky",
  "key25": "57ip6cQxddmqtYKAE8yMQmufZZ8FQzESC2GaeExD4BFTfbxmy3hQPrc3pMA1Q2HRRyoEEGuP3hHvdTcUDzUybcP3",
  "key26": "31RpNLCNTpvNV18hpnorpdL5sHCmm2ZKADDzuBWfSupioRuukzoNNuxGJYmGMZy8Fyv1FP9HHfq8xjqnaLbhqYH5",
  "key27": "4syKoLmHd3ucWVKgnUZnTKrs1s1bECCTV1sNJGNdAC36nvJQcZBWVijEfqrUKUUFw5rtsUSDWmwbP7smQnNEWyyu",
  "key28": "4wzpTJKFV8fqkXVat3HuUyKvQijG3bHKRCnzQoPktfNGRELXcUdXAbDNrKkwo1mq3TvhjvsWCaUfZEGZSFZBQFbv",
  "key29": "EVf2j5feJKoEeVHxrM4p8MCJSPUtaEXRFVhLDYMHZj1QUPKLurRdUPRv96zcR663xYkPoa1X6rNVAAakRJ3uqNJ",
  "key30": "2QoeRwnjk2EjdQFdMju9hMmBf6AV9iSno362fYU4jUD5XeR9m831VFqxmweMV4ydw1vEKa5Q26LsoaeJReEkaAdU",
  "key31": "2oLLhXzU6nA39rLu67Egiijk5DHZ7ykufpYL23zHoKt3HqGRgcoiCeb4WEjQ6ZVutHnm4e3vzHbjaJwW5aDbXgA7",
  "key32": "4QUVDcGtzC4zRAWgZim85wwunDhs2YHntm5mMLGP7VtKhT9A6Qt5VpEs6dc32jDN3Yxi1P9xitooC6erCwwUio9t",
  "key33": "5on9Wegfdxaa3PB6fmL5A1YepZdd8wE5EGRia3QQadkVqiRDS6n8KkUZVFADs7XjxjW4rqAimihk1LqhxihKvzmr",
  "key34": "2GX3dLHMW6dpq2m9pZEm67mFd2P9qgaMsk5U6fgtYos9r6j59HntzYt51d3EHkVeAs5CDSNuMjvGvtG3o11a2dot",
  "key35": "3Hyf2B4br9UKYqJjMmyxyiKjtAdbqon7v3T6zVwv1RdhPyJ6mtaN7nhGrkK54K6tyshvLL6ppJV7Haf5QisoWXRB",
  "key36": "4WgB6rqF86YWEKEUDiJGGkJ8SjZzS3gEK2Tyub5cPv8f1MR9Fh4c25oMQwvqNNsdaoMjwzQi3gobohe2EShjZCH4",
  "key37": "3RKBT8x2d8WqB9hjbSnGGPfFgvPDPZfbrQFNKhMvGCZyoPKRjrWPaiwmZzeyFqx7mSRvTfNFyCSeQwdWuL8uSUQx",
  "key38": "3R49Z26vZBggrPVRzK4qvF2auYCknV3rRCUoNa3dn7QggvPWR2Go721YvcnossqXtazxW6ySbQBAerinC5uQ6fKF",
  "key39": "37sF2by8BDk9qXodctf7EFcWLhbJSDVfcBBbh3ZJPg1tBnW8iEnVd5pRtpvznjb7oKaXHuubmK2XG2B2sqCnyCmv",
  "key40": "wBJBxJbGXfpMgYbQLKAB7ZMxeHt1LbFzfojZLQbPXWbHynkTSgpzVeqUMuyhtMJgRmLXyNcto8FJMtg2abnD8CY"
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
