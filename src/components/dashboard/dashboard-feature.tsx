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
    "zHunpH8eJrG6cPEbTRpEzmVKjwXHq1TkJD73ivTZydH9M1ADQKi9im6rC8qtXVXh2ESjUAjCC5qV9uK6pxdnTX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kf4gGfJAX1Bf5QCxSnCxkFZyAkNkkFmZPp3sgG7Mdo6YNRNt5S7om85BkiLVgSPu7yqaJuGPUpbJ6f9SBGJdymr",
  "key1": "5KKXU47vjfNFyjMJMMQx1MYnykE2mePN7jHuyUdfeN27h1xCaKwmWW1zU2SKxWtE5uNL7zV2sagwXHTWymoqYgaa",
  "key2": "362V9mYYfoqesWhuDPfHHPd7GCdjePYCpn2N1qujRM55Pfky1ECEsnixBSNaWn5VtViU2eLjA4k8Nvac42uG5Gp8",
  "key3": "2Tpfr5K7L1G1xodq3WvG61Q7Mr9tryfNyuPRAsY11xQrfTWZ3haoqVjRyCZKbW4NW42xkiQXLvbGKab9W2Lg1ok1",
  "key4": "4Wm3zs6WiHVLvvexpnZMEU5uzNV9bu3judDpGz2jKJAk3uwgTQBsHuoTG5rSRxMnUkwuTqPaFchyjjPv8JHtR3NZ",
  "key5": "123puLVvtU5cJsAhmnbvJuRGfzFqW6Zui6p12Hnqtk7Hy5Qdm7Xn3xfp1DBf7FvGk4Q5m1vqjmoscbjLpkD2KZ34",
  "key6": "4okVck1rWJYmdPiboK31sg5RMzooK51QuNbqkB3k18mTcUiZNRquptEgvpVVaxgAzcna1dkpBKwfHiikBDAToF5Y",
  "key7": "5zJ2wFLe8vyxKhXaLLHwjE2kVv7ox1T8zW5K66Z6BucTYHXJFpTiaqpj2nCiNqKEF9CGy2FBHFyj6tQQSKmWQTkK",
  "key8": "nhP6khCZSQShHvAzjCsdDvzHacY9BDhRLykeH5viLwoSDHoomDgzkjUaeXjmZtyzyBDR8Fx4xunasBVxsjftmjF",
  "key9": "53h6EX1fRdocFkBw4ANCssoiUFaRSoENafgpcoYRB1uxjGiL8gsLT8DdEVZsxZx6rBLgp3ifhQMPoVGAuvGar6NG",
  "key10": "3rJm44PAnfn5o1zmxyuns6Dp39nTpWpyGpV6wd1zisfAHqUK5ZMacLrGnX9YWN2vK8cGJxcfDD6ugY56Q9ZGi6sP",
  "key11": "3yzzXoJXCicewSiXZSCsD6b3KokrGHGZP7CjFW86ATMz2CEKQfSsWvQibzXTBmvCtFdgi3J4Jv32mCtnJ6b1Z4VA",
  "key12": "5p6m7aFkfXcxJBkM3iK4LXXGUfzA72ShJGJg4bxYUfcZrotR64QE1EjurmNygPRhpRFsH3oybeyaXvKjzsbap7jA",
  "key13": "3YG2JaxSYtzQfGebjRvvXs53kDcxcty3RPTo6g4RWSdE3rjs5jZkLFAAZQChUHCjsVpkp6ZGPvDa9U6s8P7TL48D",
  "key14": "2a4xLq7BC9T6guuNXAvKk5y7W2NB5r2wqQBeKfuR2nwkZApLjW7gedtSGRt2cipDPw79nyiLA9x6Y7D2S7VdiPtV",
  "key15": "ruR1NSEVD7aAFLZRuzBA6B4Dri1npvfVdJDgAuWyK6XxeDUp5Gy1GjAZDeVGM8NXJHYEvBCk4tnaJYgG5sRZj4S",
  "key16": "58FBCgV4cD3jZoZh3esokeSSJCDfYcWMpq7MCsxtbqBQdEVeYWRAvVuZkF86WcxCHuFGGJ548DmGEDi88UQmHax1",
  "key17": "3WnSFWTrJdDGpfsg3hTbaggkUjFb8TpWNWLFp6DmHMHfV1XCcYs9hHpB64x6jFoz5TSgRuydPES5Z4iW5xU3q3y5",
  "key18": "AGwhteUXtukn77Ea4ghnjnB4W9mcHP6pK373zeqhihYX3AzyPBUMTjH9adpxMTQkw8myrWDsMZMn1P5u6Ge7Uwg",
  "key19": "5a1MZr6aSCogG9DYzLrPFrwitxwBeTNBMiLojSKffiouq2nsAqRjGC5Jwaxu1pJ8fdBzyW451ZGCj4GFKCk799Sv",
  "key20": "4DVhRjaqKoSQeyADfkcTtzAkYzF6JmVJ3ts51BNZZ3MsntY723hPgNWM4xHe6EVMoFuLfn8X1obnJrLei39Ge7UY",
  "key21": "2sYjHv2jsChM1WzmpsUngP9mVsdWobJLotmHqUk2hXrKsP7Ltt5m9M2ZfHi5KbfGk16i8CHLtQwWm44AfrzJDiwe",
  "key22": "2HmsAComvv6ig92re4puuHsBQiCSHEgkNYJHvHy5WajeU1eyXPAXfenwkFJRUcvTQDpYPXYFpSPFFhTyGdbk99Fk",
  "key23": "2KhyX9eVLEDgUif1VUzewVbLJ1RnhHHSMqCyZtf64V5FFJ6zSASPYceVyercy3gfvDfNYaRtiZBJYJSaujwcpzdg",
  "key24": "3AW9b9pPThbEgGoGj1pEsCYemJhZ4qg8bNHWcTCXvVQfRf7qHfJdSsX1WXZWNnmeW4SGr5uitWqDm5shQUbiKgyh",
  "key25": "5q8JHJrUAreY2FsGWQKXPpiGzgZEb6S8ANuEk6BzgNLkW9vUhWa6vaTBJ1eRSvQi1DpPvVjTVmG88XJnoCbHfHbW",
  "key26": "7u6TasyGyzm596jNPbJUcCJ2Fdbw41ttWqEHoKdsTuSqqjpuodq6oCkvshgWmNw7pwJXstu34dD1iZgCFf6fTWv",
  "key27": "4kSAoXFEBckuQTdU3EAnoPqtZ4URBksH3ZSqafMC6f9rUgSVa8UXPJyX9ULxTpkKqw1eKXudwdJQRUgCJKUWd2dS",
  "key28": "43A5TxXDooTm5KZeDrdEWH1rcS13qH32VSBpkd7aDxgXCeAKMMzQ2zVLJJAwiBtCdfbkwsQPzwMJh8fQsp6eyNqh",
  "key29": "2Dd7XzjsBJPKvBzFvVZzeEbrH5rmtVYrPeyuXTmsMCfKDXQxS7y7HchPrzek3vRh1dXX4PzqWDJLqrH4wxPSDf5U",
  "key30": "2etzM2DJAihxFVjtGbmbwFej6WYcuLHfqwX1MSXssBuLcz1bC6NN65XqXoZzoFNJ1P3jhQAPFHLRg3YrcWG9n3gM",
  "key31": "2KQ6yTMMbnefxEXcpFxQPGg6G1FGgmSZ4yrVVLWA4s6nrKg7nobXmdjBGkksYJUe1gSeiuevkq4ibe2fu2DHk8sU",
  "key32": "5L2jfyMikJF7TetKsXGFDoyRUQsoFucBAwdT4DMJkcWGYuQs4p3orxyFWH2SwvJMaNiRrrpfw3332T7XNdiN3VbV",
  "key33": "2mjdWQbyzNUb7BKg6gtPJWGaGD8reWnXNMxgve3fb6zpaoon1eyAQPbbgNunyZEb1nSqgBsF7ZTJ5SPpcsxriyq",
  "key34": "48m4ckhd9fokbYEGH5KgZJZb9a72Q9R1Vgey9EZJ1iqx1TYU4srrXGZKkUDVMCTVEFYaFThFdxYEfdU1BzVh18sa",
  "key35": "2Y8CYVgkrd967skDchDPEcfVwsytEB16nfNhJGVKWMLsmDQ6QZ95kYKsZnn3UgbtpEcCbeJ5d4KRcHtSXEETk3Tn",
  "key36": "5eBLYDv8MA2tcm2qbwnNu7Rmco2LvNL64hvwPVJxstTXnq8dnwyVP745FsfbxVMiMVmgdFw4ePuPBCLeikNXTPhR"
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
