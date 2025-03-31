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
    "2RoKXYHceJPGFpQNnj2Ja8Y6ATvjsViFP4iVmRzU2dpvfjS4cccBbgwVa6PmRGtfkjGLGaqqbv4sAkRVxSDEmbbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WYdjWxwYg2q9f8p4ehqwEJrQVu4ys9VKMqgtC5qYoHzmr7oqC7UavN9Q4zG1im3tin8pFvDvQx2TgGVpKBH3ceJ",
  "key1": "vr7BWGTfbhDzaBWghFB9BnY6fK6C5tKDQ7yeH9GFoefjjqABoA4Q6b3epTzKJCGtAiM8uN8TAUR39CW7vWarVSN",
  "key2": "PqwK83zU7849ibVhVdMADdpKa5tuDYwgtXf8ikbaarwmXuNy43qoUruM6zsP8y11SRp3a4fMvoQeWjTgHK4tbGp",
  "key3": "63pTKCXyKvZx9oy79ReHG5SX5Ru9x8ZMRe3gLD7nQPMqU6Qfe4DSt35xKPLuzL33ZV3uyDVQRZkPRyWyEzmVzpWc",
  "key4": "3URfG6qg65aWggMdeUhe8zMy2JWkXmjq6cf17C3pTyfzjGmSW166C5EiYr5ttLAJZET3NjB2ViVopwLHLJxzg7QQ",
  "key5": "3KDhoLns7ogLHCZuDAEFyWe3uGjcLFmMeC7e2TecDP5TxkARVwkfW6C2Pkp7uwkZUPq8FudCdgUUsteiCxT8kpMg",
  "key6": "d1aPZengvDrZ9vnUKeyhU66Dy63u37QdT3Qo3HsT9xLDLN4rXV5mwXnwa3oFk8j4RQYCpY7SfpDertJFLJXxy7s",
  "key7": "2Dk7BSiZmVhsJfVDnnditXRx61BtZUkEVKJRr6UDtWErEBEVzFDMKEV6iEqeHbRTxass79JZNZ6m6L5uQm1JLj5U",
  "key8": "5VJ4mtBM4wQZ8Yc2BxasHbKJbRQzZRBxu6DfVV1QWMb8V1qqc2EXrzqBF9xrowMxvTmF9Se5aC6MBtjqrtpxC38X",
  "key9": "aJY2Ngsek173uVKwppfYsMTtumwkt6z7Yx6TVHvspDUxf4grBi5PqSUyS4m4JyKfRmGJM83gRLZFhxVJM5RM13Y",
  "key10": "5RVAYnDi1vVgNx51NgPijaUn6ZYCG7YuTcBvN3C2nueBJSY9zK1iBi1M5pNogLXVsddVTm71h94ifG5G99gsKcUX",
  "key11": "Pa1GXCHwmzZxA6T3r3rpBMMXcaFJsTWh4i2gxFjA1i5dsP9JVnZbrLqdH3ZPDtqbmhwUpXu9y6TDbWV6pSJLXBQ",
  "key12": "2CTWyPkLSFHUzYCVonT5d3QSMFrzMiDCeoucPLqsYwugQpRXwXGU3RQDioKEb3N4Zvkw7YbXHszvzyNfEFRext4k",
  "key13": "4E7qDCfH2aEnGHsjSxuKKAfeWeS4wsnLkkzikxYoSN8ZBfDMMYGJab9x2xqSwtjoNWNo4os1RgkTW5Adpg3JmWaP",
  "key14": "5F5kqbEsNSNtSaHfstSx84mzVheFCa5yXWUaZ3mxNDF87ukDDaoEJFDgRZkKvur1wDMVYoviEJkRNi3ZSZiZR351",
  "key15": "3cgMQtqL7H4yx8RcTmUVHkCGQq3y7FqXCBHzBEKQXb23T8rT4tWVnffBP85a6JneHM1qwY4MoZKLsScAobrhdNmN",
  "key16": "42Scz6npvv3BNkmdnEUo9qJShfAs93RRHTG8HqKwHBDnpZ9TbWX78hqzEtpwLuihawPbsDmf5ApVg2EC64qmfecG",
  "key17": "NtbPqoWxShQyjS7fndkfo7k1gLW17ZXjWWTBE8BT3sKdHkQ6AJht61BBY4Dsyk7Lzaz1F9buqz7DN2jS95L2JDe",
  "key18": "2s5zd5Fnaa6MN7h2ZAAP1wQ7Lg2yzfuv8KXbGBYdnKt2EYgKmqvbwN9vPTnVGmYJzQFZhztv9RXeiKH1f41VbwYr",
  "key19": "5GNbhKZDZczNQxgVAnWj1MuafZZCSVSbWHNVqA56BRVZS47eBi2f8knPcFWXvcx8t9SZDMZckL5uqyDY4kUMhvWf",
  "key20": "5LAhQ3THW2pAXRXkGoKVK96qTs3nvS8PybEVetFukxrMuGmi4hHT3WwDWfiS3SG4z3A6hXSVDgvWv8ZWgemyrj9o",
  "key21": "2n7zGPNZgtRpHVYPWRPxC6ReSi4Kecp6ThrJGdBCwMSebAdo8QGMankpq9oLL4GVM7VSLcUCVHVyaWJrM3yQP4XH",
  "key22": "3kEMTy4Z8t9B6L5fxvA6QJSss6Gcdh7N5qEeGXe51p6pz6cBV5owmaQrZwpbbMzatyhaZJaSsRV5k5zed1emT5id",
  "key23": "4Aes9fAxqkcrGeV5npRPvHYoeo7t2zgmNvpu2CzvY4uKLBjNmYYqT9zFwWvWY7QikasxXPJPMeZSJrExiLyVcJMC",
  "key24": "3Tz6mGs1DxASpNboyvdJNpBnoq3QgZSmq5JmyVnpUbk1A6uLFHwZZWhAbHwi5h1sBHjz7HZ8wf2dgAcdLc6Hb3Xd",
  "key25": "3sB1ZdkrhsNxsJfzaLmxwBXKiUJUeX6hsonJgBSEAWsUWEz7AgncuD2cgubKx2C91jDcLh3AqxhMst5JkUGB5tE9",
  "key26": "2cQH8RfvYeb1JMUofrdbppRRgzitQ9t7Z5pGM3HyuxEqRWnCV51BeNdRSDdofXw3mzhmwbPMfPhsoduHGNbtF4aD",
  "key27": "5RSMM6AHNq3nmQSJt6wM4aVJiLojTcAit1Z4ENkuFx3jjVGxfRyXWXknKC8nvzmzK6Qke2Xsgp9GGcmbwUXpM3T7",
  "key28": "4w8v7X4DZtJrNJWNNBts3ZKPrm7ebj1fxHaf5ChhS3z9bqPhSvyHRmS5wdv6mSyLX5vtnybrZWVPJi1SyaiCA2fC",
  "key29": "4kK8sDLFCz6xVZ2S9kKULqANUZLWASvHUHrjST4fVdXk7FWjV1NEYGXpRkt27cSV49UJsgRTBtcVvmUMRLGYMXqK",
  "key30": "5vwpFbph9eUPU2kPUnoLyjvDKgBf6zo1D27ugXUB1ga7FQkQcYE3jHv6WpBgoycjjMQMP83gowYXpeXTtxGCPh1m",
  "key31": "5ZcTMGF4Bt58ESsejY3n9JkZUeVmQYFUvWxjp6nHL4hqAnidNPMKQJ1b3E2rx4tQgSbNPDw9GH49S1YvQxaJN9BC",
  "key32": "3VFNGLW8CywUMLN7wyZWYCsuVLA2b3VMTEknihdRx66AVdMZedukXeide1dWd859PYK6Ba8fAKdWu96t98T1KRA1",
  "key33": "pbxiVib9khybm3Qj6DC63rUKtUTRktQ1rAJffBAHTydKuKSJyNCwZSwCehDHH9TpmpPJjVu6YoyqVeW9jypSHrL",
  "key34": "9RqMQEZqQqsFF22dYggcq8x1AEs82TRLSiEhEALuVimVpBscPG6LreQ9fRdGcqSEeRHUMzSrho8kc33bKSEVWgB",
  "key35": "tvCnAHZJQD2SHTeUsSzzLTHz5nFpt1fZgdtF4YdToNX7zQxxoaV8kStqx6xcyEhximAy7LwGLZLnf4qWxf6UWSB",
  "key36": "3qBXJtXXxs6Y5unXD7AucRZKMs8C88sLUbpcfLtao8SVzNp8khqpLL8a4exfrXhcz7sdaRgg5inM6U5kSvNz2iqY",
  "key37": "5arLHMy3tmmDwpHTfar9Cbz7DvzoWVKtPFPh5Nqp3bXiFmttR47YVbmc43yTEd3vAW2MHSDwrZCPVLQSEkLyoFvk",
  "key38": "29Z4eBDfqHgDrod3cwreiwnXdrNZokxgYWEPxx6ukNVhFyBpkEDzUxL2fgNkK98dgLkedjMHVSknNkrLrMNT9jfG",
  "key39": "zJggW9bFRDsxjY2DXsCj6hC136VfK8BpjjNYoBrJvBseMdvdrao1PimJQWfYNwFrPkz36j76MTvm5cfpkbcC7tD",
  "key40": "2aBvTxmvVigvfD6JENQcDhfv2H54RtEnDK4g2BjHi2Q68HcFgiQbzm1baFKpcVBYQiTtgkMs5rvEQZsWg25tzQLd",
  "key41": "5tnvEjBaRxoXfYF16KKru3EFgB5eRCvABXXWbcuy2Kof4vaSX6ixRLNWmZeZpXyQL1Ru56cPDEh3TxGJjQfzFQX4",
  "key42": "2zcDR2LD1cTzwgPVDHGNW6oXF4WUZijhJs6qtMT7Ry1qSwCybAevYSNAk8ozTpbt93GiQbFiWgc13Qf3U2wCfGWh",
  "key43": "5iLk3L8W5xNPZ1Hjya8NnkQ2PFHpCfdZfE2meR6vTrAk1P8isevNo7GdsyYJ7owqFqs3zjAAN13LHyVVqeoRrkfo",
  "key44": "2Ju8mQ3yBowMQpDFCnGFqXejajcLAXSj92fhH39nCEUviABrZ8kpjG4m2Zz2MG8qhbmuhz6S9py8hsX24ofUMeod",
  "key45": "5g3xVPCcpRBKxmFd3dtjeAhF4YhCK64nbDUUMsaZcBxGCfH9BWmxpE3kqfbdYmJJKDhWXicRYon1yRaGSR8jikNS",
  "key46": "TpyG6y1vfWqpmuZ9qti2Zk5bQgqKGqWF7Sx756Gwf2i2adk8rCqsiae3ymrpHEpuhUoAktmde5JApQkiJhC6K1e",
  "key47": "35NVakQjXNMyoY4xYU6a4yJes1JrohdMAeWkGsCEYzKq1WguJSpriS78wSa9FzrBHHBJCwQpPrQxzrZ6cyJQyeyj",
  "key48": "5gnnnThyWkYWnYqAoPYEHgGY9wFqZa6rRvNbUB9AjZTG7u8YyNHCCeT2BDqTpYH2EQQPJHe6mV4QWNDUrLTkc7Qp",
  "key49": "3PqbQoC6dRdppHUqnBUHP9rTBdA5MrDF336xiB6eVgsxKZnu4d42i5sowV6dT37MmiL5G12QueFDqYAxCMw4VJEp"
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
