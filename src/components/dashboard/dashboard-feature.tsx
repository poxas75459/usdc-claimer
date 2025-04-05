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
    "2YbwtEF4MUpa4rVkiQ3zPzLpM4aU1Py3pGSyAPvDsX7s6PHbSeyKQPdc9aA9sH7NjH9MEKZFfkJjeDRGgGcvzgLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2meAthwf6B7pTDiaJ3fRUi8ycsptUxgyCZtrKfy26zdaiQu5y5u5Xfik5nz1jR9cJigfQnc5b1cW3XWUuynmSuPt",
  "key1": "4R2xQ2EvjvXCU2Xhm84dMiPkfHbCwHbYRcV74Tt6LVLZkNihdGdCMKQNgMHrzXLZ88PGqc52T8ETsW6m47WzCqSN",
  "key2": "4H6X6BNXozDr4nKPheidrDgzCdGuHYkXdsYBXsSEFudn3eZM9JyfvuDa3XFxuN6cvzehwuDaZkAskU8qMGYcSx8M",
  "key3": "46Wqfym2e2cjij4j66cy6dBgF8cbLhkCLMg7rNqt5HhmcPxU3kjs5BBQtGU5HgiKdPbZkh4PymAq7FiUymAWJC1H",
  "key4": "2j2GZz4DSJ6DM61ZkchVjaufqrUBgis4HeKpSKo7DmAd2AvekeiLhZxtpGpSyUJ3V79uvCDLC4gwRaGJRiRtJLN6",
  "key5": "4svqbbBjEm87sTsSNNFjBtmHae63igD6tSMvufbptY3aM2tmC9BPMBJTbCNQ9dFaKeWoftw1NMGC6toiGCJVd7K7",
  "key6": "5pbBwVrQ73sfR7LmoTLDEsteaWFDvDZJE1k4dfitubrqwBMTAVZSNAjJLtiZ6RgHurZ6TQy7p9Gmbscyf4yLtRB6",
  "key7": "51Y7v3mXZmejLtsKV2E537g9Wmoo3Qm4VKP4aCHmaeNj9EaFbFmiT8AQ2Tk5rqtaupeSWt6H1Pk3u11VoLiaoNSi",
  "key8": "46k99ybYn5MpC4LQKEVJz9TmRm2YS3Z8N8MKF46o68UwG8zwoaKcioeX958xYFZuZKuWXwngccZdNU6t27WsbeXo",
  "key9": "2eJo3n1GhR9ji4Yn2CFFg6LauU7MiiJdU9CaDWg31LLVvWHUy4ea5Z5A976Ggx1MS3JTVhzkeBoARAxBKnu3AS2i",
  "key10": "2nUQ2FWpXso3i5qGFEEEBecEYEsSupGTkZKC295R3XtB9e72LsrAXrwTQh8iinpeEtdhF7apKnSDPUpTgiZ25Z3C",
  "key11": "4WTiz1VGsUYFVpCz1WhJ7bGT7VMxyFLgJMJEdNGd5AZfSWRzkKKdAycevXKQhdfYb9f8p3qbRRKAXzGUvuo4i8f6",
  "key12": "5wjSe3k6WMjAgxg3c6QCWkd8zRG1nSrV5YMWy8aeYNBt2gFwsrdzkbXtv12jia8qJAehUTNZi2SjqzCMrMdDJzeE",
  "key13": "3y7zYKzwuHbLvmSXayYKYoEQZ5LdqzyvipnhTRC5yGXZAZK7yqPiuudi7ftjPR41acBpevDYFhoKdY4P6Hd52bdA",
  "key14": "dreW711PEKRTNqFtJykRj356Jr8adWFHdBQDkHH8xtqJfa91PJnTJ8eXMQ6ACRYM2gYVGtKuB8xogWZud8aQ8Wu",
  "key15": "2FWwdoCZNmvpJgTZdZ9ZaUKsWno5NTVto1wCzgvikM1APnKvYvuNjGNmpsnx4HNdDxsa1BLSxm3pA6onhcbA33jM",
  "key16": "4t59HjjB2UvcxPXh4etwqwK5HuVdRQEo3LW54hry9E6WoLk2KFtvXGxkHFaLvV8rpqy6mBbdvR5SmqmBU2C1YXXL",
  "key17": "5pvzeptkQYygFyyQtZDm4cjFqeyKJb2wqpnBQjeCJdgHrsFV8BYQhbsRA3ELaPUAm4pvjz9YP762Ev5hM1ReGzfK",
  "key18": "5tEjcpq9dvUXDNf5BF4PUmHPGpv6YvMTJkjZi8VUN16EavzovmqFeAHbV8JvX7NFohCbUUSQDs8GuCN9DG6qkDsC",
  "key19": "22EYTJmJXPNzmUEzeEkYzQoxd4Tg2wNyXtqs2evNWxoz7x7UVZ2M4yEChQ6WcF3eYVi69UyTpvyL1FzNaAjaS3o1",
  "key20": "51nR6ByQZRRdZJEyjExPurTNk261c2prvZ2yFgde59fVWtLQbJQWZLiSCTPLcYT1UTHgmdivBJnLfQXs6Vj76XSq",
  "key21": "5CPDN5jrniC2pfN3vZYFDabPCzrTsmJKBkV3Ha16kWmjYmrFYNQEvnoZuJWiMp584wUbFYKCurUHFTK4dqrGcJDK",
  "key22": "2aZ1XoeCSpYptY7eZhyc6KPS5WFtUt3Pe7k8AoFHVWoKsdXvg8isy4MZWPmm7Jf3rDFc15EwF1DP1yUXJCXdeHwM",
  "key23": "FsQNioxBBKdCp2GuF1SDE75Vjang8V8gBTv9B3FiDgT1PBNNa5XJdjJCEdUsen3G9nEoo4tT3pxdEtZpivP6Bb9",
  "key24": "5hc1TJPL6rX1P9z3CawVbAwjqLKDnG5g4PXatXq3pbRDaYMD12CdSd8X9mE3qVg8dnaSTuavhKJ2LXvPvXJX77dQ",
  "key25": "2h4qeox2EhqPdxTqmeM8vfdvqCeK6h5JyQMPMbA4Jm4EqTAvoWtR1HW2QfZjZpAF6jnAzbMYtMHJTi4B1xXwNq2J",
  "key26": "5koYhV8sCnuzvL1WXk6QipHfvTc3sULUY1eqHMxY2syx9WtywYcCJoRnX6XbPtqUxnj2CC4Yoy5NcqYT8aBrqU1u",
  "key27": "Yuus3qJXcAdhDCgAH8VLC2FkwmL75VoHqcwgbYi1GgzYnsnucBNmhAvUnZBxhDauDknj7DYXritbSqA4xUET7im",
  "key28": "59PRefjgtfchYcqnWf8HU55AJeZM7Fn9LFuGHxRSsZScgi6a3mZpQUyDPMa8oUX1o5riCKUy5JpvYjD7rHy1kW5v",
  "key29": "5TcSn6e46KEEmvy8bgajnYnn2fBHUvtTwcCGz1gmaBJFe8reh5t9Qb9rwJqLZmUz3gWjvB2okGLFpnSRqyEQXKtP",
  "key30": "CczNGpQrokxRTdc6oKBojJhN6x9rrdPFAYNP1Rh73BhWnprDpQhvb7QzkZodhK8ryMwuk9wpRY4uyTg54Txguje",
  "key31": "334Nj9AuBzQbDboBXf3BbLWi66GhcJ7ErrU3Pz4sWe4dtavFmwF1dNQGiB5X1ajYE3ZaKfPjAbgqfes6F22GF5Ko"
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
