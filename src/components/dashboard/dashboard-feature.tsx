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
    "66DM7kK7pshnnUS27pBWSzu8DpYrC9aC2Nj16A5gPyfTTokqcH2Fn1sNukLgJy2cRHeiTjrkZNCxvVXeAFKoMTAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewjiM88M26QSYvbPPmvt6fuSPtbeXbW8jYmf3VWZ1TrzeWwvWSo3pwb4B3ttHP2RnUxNJnyrmvUUHHmKnNCAt3y",
  "key1": "3WvqqWAqrnar9dkQXEoJKjKPqJAyWaPeW8AGYHb9j2ufsGTv7fCpUGoYoDkKKk8JnHDvCdnC1R9cPQEgcrh5HLza",
  "key2": "4E9Jm3qeyAuXMVsPM9MiEnKSyVMY6EsaUP2iRRy3NUwZkqMhJzgL52Zs23hCQZy7t9J2xhBUiMSjR1D4cS4NdofT",
  "key3": "2zWP6NQEJC8Fp1Y6PJvFiYEXYQwksUNU2uMh9ogJ2USziD3ixWFx1EckLBtTYGnHqxSLzGccytDBjCWN56CVnc45",
  "key4": "5xyyLhaVFqzmSt9o9yAp3zZbAdgSz5ELxFEa4q9ZAEXG1NpgtuBZESLu8JgXGoGidQj1DrqzeqfYYt68EPAVj2wa",
  "key5": "4ZuChzMwf1Y6XzQri6gpM2qpVR2DUeYW9EDGKic7WN3d7P3gkXtG6jfZWmaaP6W2CQv6o9jF2SjrYDBEzSnuDr6H",
  "key6": "4job8RxAnwauBWUuxRHbj3RC75YCG6DtwvEEpqxr4CjJgPtbV6u2wy2ufpRX41v1mnWnRPxN5TNNB4jKceVfsHE9",
  "key7": "8bQiWRDbo6vzcs696bPp4xwoyfTidpsrWyQYJfy8r7NFzL6hsCdJm4Xh1SFHhtuUNJkYMpR7qVvw8hEDZVnFg4J",
  "key8": "44Jnonk1CkUdo8dmCzYkGBwiJAExPhScd1u9rymWv6drufLPzkgcCGnLpFzReMHbwakdGbEsFPoqaBrXiJ5EAhRW",
  "key9": "2kKWZy1z5pbdD8p6qGHBgWfnnPQAwxgbSEGL3yGgZWdjJL8BgnzGoCCNyg4TZAJZxJBcfXEqtkXrhAQzEUEmFQkw",
  "key10": "3hgsJMv9cZNvw64LaxgR9CKGJx6FU6QGm57Xdv3JiFzCUTs5SFdf6ALGjX3FEcJNfpXsyrqeaSyv1CUHSPnaw7yS",
  "key11": "3bzV41BWv7tVhjysoTKHLoCTffMsHC5ZnghGq6ee2d7qiWsH8wuV1dwhWm14bPWjBvoqxytJY6QXKT5iG5b9zCx6",
  "key12": "vzaSDDK2AZckJH2jM5nsLYha5NGHtUG4fjskL5jVav2sPCqfRQyxMMFcLeLkrL7YcNAH6cv179VadFkKJADEd6w",
  "key13": "5dg6z2cYCpEDfbshzhVw9GRL2r2HbH6dkqYKNctN3n2ZJfSiRxHJU1m8ztS8UHCdTip2LJcqCcjMkRXYb1XwtnnR",
  "key14": "523yeNbfP5PaEfAv8KtMm5Pz2EXghFf8uRiDr3RPtYcuRL6FpMPqB6LbKbP3abyWSjaT5b79W4YhvXyqsRUetFaZ",
  "key15": "56VXJhvRQ9SYHzJQwyRUSoZfHPLwUv44DBbvEK1gNgs4KGsH5YwjpqPxqcPJ5W6TAfsNDeAGrJ2CdLcTGShgWaeb",
  "key16": "2ExJdMmT3keBPvn3XQ1RHA98e53ZQqzQKZEiexkhvWV4E2RkACLpFfX63BPn8LwxjvcKeqMVG71xJqPuzCvDsGMq",
  "key17": "2mEszTXsXQF4VtHRUFnHssNbvv2A2VxftMPdYzaRffdMNcr2nYFQZAa9PjiUrBTxs2rURuDyWbg4mPqi5U2Cydsn",
  "key18": "31SS9Jcdcx63njeNYxBzoNH7ekiNmWbrfRYR2xXW3MZPZXveMmwzm3HfgKYigCZPdvAbqBFJdvRKsCuraj7kBUma",
  "key19": "wp7eJtE6MZrofT5scErxwuG56hb43UY4S9aZNLhQyZf8WoU2n6EX2cx1eUnQdB2PvKxqA2ncdKNHZq9cxqLaPA9",
  "key20": "3CbRxqDche88P2j6a2TUpjaxJPpmyQjAwYrUGepu1F7qdxKPDAAeJCimdRfDUJhcUm1eUPHY4yD3UiSm1LXumcww",
  "key21": "5T3i66Fdk4zvfLHQptTuQrHXhBmn8FGKe9gmdbLK8a9hwQDSRdMxsA3CFJ9FMAaK14UtmUa3Enm4VDPtyEWZyoww",
  "key22": "4J6DDDQcvM3ExTUFum28ZzPqdA1HLDXJ296FABUPBbopUV7Vjii7B1TzWoDYi4sY96PmCxhptic9rZZpRFVk4Bsq",
  "key23": "2Lk1gAXCzdm9RsaVLCVW1kscpneRgxUH2ocJHuDsUQ3QUKi84anY83LvXqvYdPLyZXvThbohbWtnzdrKVYbadWuT",
  "key24": "4jCWT8GJ9UkdSr27iziinFxGjfYe6pNfVfP8x3VA3yXRMnU4eejUph2H3kLooyXQ9iT5RryPoDNUojp46uv2ksJF",
  "key25": "3A8XKveeg1FcfEoNyA4XWbnRw8thVHufPDQQekKJG7y4EzAJJMQyb6GWp8PTKrAycfQmHzioyK95NJmQySvSjiBf",
  "key26": "r7nF3EWUeyNyQ4DGxCgVxCPgrzqgSGq1uV4KVxtddsNpShBwisPdgx96ocw4uhGofZabLHKxZcU4NSUTPQgnSaE",
  "key27": "6x1kJJr623AKGWtmYtUUK5SeqjbuumWzMSRxoZzzHwhYHu9stvZrFABRyPQVqv8t1o4iry7FhEznGGzbFZWr638",
  "key28": "ZF1CHhRHzRr4oX5jn5sP7YJErPUmMJy2WRq8DXhUpa1GVvQFVd45HWgRZFQrCK1BrVyZ7doxaM7BMFPvd8zceNt",
  "key29": "3gX2tevj39yBriGWPf8ufB4zL18xVmfwPVYG2tmWpqRiDVrZhy5ZuujSCXaK1NuGGvpMvNcN8E7BgtgMbnbh7m3R"
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
