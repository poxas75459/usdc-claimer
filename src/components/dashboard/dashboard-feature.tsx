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
    "2abR3hvy5EV999hT3qfkcEX4TS4EHLBfNcB46yzsBgArXX5jQgbvTdn6Uxu6vqYq64Za6pkyGMhU9NsPue2HAWJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvJ3eXaLUMNRWsQipjFiSasuafWF7xH6vYaFTPJynsNh5HMwdDsDFdCayNRmUXdAuot4qSDFpKFtiNzWHHvmHRJ",
  "key1": "5rBcyobduv2us4xPE2doV7kUJUFsxEqhdcUj5AEjyP5HXk8u7pT9sA5Bjdooud5pwF6KgtynV26M6LeWR5NzP7er",
  "key2": "3GTZ38opeCYpbym5rfvWtxRoJrDZNUpBFHnR1e5Br7jfUs9cp1omW8YZpJkuBwSkQNZgops4sCDENikseT3BJS3K",
  "key3": "yqDm2KqDtNxAKwc7p9hMWDmZ63Kf66JyvRHpuH44ktzQeUM7ABa41JuYKobrwmzTxMBJLKU8uAJ93PXi934HSFh",
  "key4": "4TrX6Fok7Knob1vBKJxqEtRrX7nFvE5DjZNVuBkHR3VtibHYFys2iTqfwpLuDXrtLBsfortbAacHJ1YT14FPyF9",
  "key5": "3qkt2trjeJdL9bSyyY6HRroz1UWyCvPTyx7nr415dBm5iEMS4nv7NR2q5QGb2mQGg58NVjxb8CJGxLdHSEPxkC9H",
  "key6": "2wyz99w5PCV9JC7MJGicUrWsPvMcX4aZSrgGJEGo3uBktSEuYMVvWiHfbJXBNSHN1M3tfK82JDzwwGN3ryuwub6R",
  "key7": "5scxtDeAhJkddM2pcsVoQ8FdqjDctk3u9NsCE8yZiND516sdNRNy82NGJTx11AvFK64WCMov3FumeRX1ZAfaKn3b",
  "key8": "3SCRkeB9NZ53WRFsu9ebYHZa9QJBUJHS3iRYMzigmwjoZdR5QuhM8X5neqkgdctVjyWnimfkQWU1yGu1rC3fNRaS",
  "key9": "4yEcQ5aEKhMxNAZyzrKi1UkjNBdcuCUhowUqPidEc5xuVwV8e4UFt768g2VVYJe8HpDnjW2rs1rqXBHv1k6NPtMJ",
  "key10": "2xZmiSWJamZq5qUy3UR72TUCVr3XAf9dxKyu7hMLsVmZx1ygabFsbiLNMRF3cAaJG7Yi2SR6geChVF96ieJTqkua",
  "key11": "3MqQKpGPGJXduTpYXoKNC8ryHFuZLGW7BYre6fRoP5MtktiXq2pHSqj558or8P2VRiKQ54oiUyTXRuFopWhCrrkT",
  "key12": "Y2BC2zZ16y1Mrf5itPGS89ndJQZhsLZBjRaVcW8oRRQczD11uJ8X4awg7oVqmH5ka2y1sZKrm3aLWyEoPAaenjN",
  "key13": "4cX6F1zVFWUtm68NjCTr77EQgoyYx7axEagpiY2mgtSBVqEYUSwrcjG3Vk6xajiwLT3Lvajm6qfXU4c6MUESdSqX",
  "key14": "2xpy1WFmURycc5cUxe86gWvxgEdBKZyCu9ncdUKJKizxR1gtMCsPasJ1yrxGtRY2EjCrkPGzjM6jSgr4DGin5PNy",
  "key15": "2AJo9T9FXtniLs6VBqGS1VCmW87tKVqm2V449i2TLqPe4xfcD9zDPZQLnmPQWArY1QYkD6wE18bsgcimS3v6X1tZ",
  "key16": "3wW8x4EUiLn1p46u4g6qVLbgscaaFefHmAz7tieN6yVehpQUgzwMAtHCAYs31AY65Kjb7j89ibNCuPQ7brL7E41g",
  "key17": "532ZzULhpZ2hnfhZmgY9GzWgSXFhuMqf2BW8Xpdnzjt1KQKfkcCWjbsnU9wAuueBBq3bNRYSULg8uktjBxG83XWh",
  "key18": "QHjruBZPXmFrwKKKmgeH6uH4oVznh8G8aw778zDKb6KTVCRNgGFeofS3vB8CPypam82xqTKvBcZXjwXA4Doq36n",
  "key19": "4ucWCHupZXdSfR63tTQMXEfnRtCSVHPCtBvAwqr53bu1Rk6d7xRvRePVRWu3k2k2E2muj1JXhRdsuACyguMkPunw",
  "key20": "4NeGz9aTcDjDastVZ7dyUqBeaiKA4uCXWhmrfZosQKZ74vB5z4poBrsAgySr4D345yYkhEtWYbUhJirMA2G4k5SD",
  "key21": "4LDkwB4b84AKgeXUveDZVswH52nfYxHnk2fgtKtnDgFRkfmGV9uos3V6Lz6BajqWULGd9rDYPfxxn6VcTzsHUUHF",
  "key22": "3ZvBeSvaNEJ79uQ82XYKdhJZAmmazGMR6CoCVA1q4RSBEhhhdkXecitUQSyqxFFVntUkfNqkVB29CS1tCY25R9Pc",
  "key23": "5Nanj4wisFmenDaTNytxQiDH3CfaGMApoJ26PZLBtGRq5FogwrPRBDZrwWHevJ3vHWCAE1r76QGC6fud52MYPv8J",
  "key24": "4VQsV1fFvCxSPUZV4PJYWKuLCP1LMoRUKV4cytjHfNWoVwYb1tcafhvuKcN6oabtX4bx8rVjPQUEsBScbMgkfqGg",
  "key25": "5vXtqTNxgxUAhNPKKQVz33TtrrLnDSrHAmjvfke4aHGsTn8ertpoqRVb5dvz2f5JhxsUGNnZeYf45qizuFiu6F8x",
  "key26": "4mRwU7DhNV7oo2tnJLEHodGJu4cgPACpdKtsiPGbFh8H341G8JJBGmQ3rW5FhUCjuix2R6XMJaEwgNULx8ong5iZ",
  "key27": "5fCbmACPa98C3MaN1cafNKefGzGtYdmbVezmgFdZGq3d7H59jxfXDR4RStYP6AV8Q6MzNuLi74NarjBsaYmxFoxv",
  "key28": "5bzfFcMpkJcA2TraH6GdXzVetkkCKAcR5yALVdmRiDBJMzqFdUa4BcZccoqxi5V5wjpJRARr8jKQWbwjdEx8uTq9",
  "key29": "sUoxdZoEd4REirzyqAxENSo5PPtihi3GoH8CzmMVDSLgN2Adwkeb54wk2jX9GVi9YaLkNFVM1jSx52rJzjW2srR",
  "key30": "5qNDq4yf8nuSzqmT5bxLBXeVvqEwRUd4LDuR9d6BvfJkxpPi2rnKh3KV7KWSErLEApdPpQPfi6CS1qMsS4A4NieL",
  "key31": "3ByJcLVhT2reUcxHeKWcAGD8GuXHFZnUQHNcRjCo3VD5aLSK3xfG1PjFoRRnxcFPndZBH85Svfp3dLRcUfL1KfMk",
  "key32": "2zLAy4MdrKJ4u4u5HKauGKPrr2ar9Pd91VqZYfcHLwC5krDrf1GzHuayqyWL58HkSwkduYkBaQUtz2nJf6EfiREw",
  "key33": "2m5GnBf8J8QzvbycDCnwJ9rhruZUfLG5fxQ5VfnBnVbHBgZWVvKMQnbUR4WFZC2utrGDGSmadwoQHRF7bkFiE2jE",
  "key34": "2i48aJuLuANFmCM26yCt5Li6vLPqCAjbVGfc6o9d7MBfH1MJzcK6HBX5qoaZ94pTnJqq6R8qzQSZHpMXnAWv83gt",
  "key35": "4VsGPikaD8vGCTHJR9MD1yVD5ZvNtEhpQipPVY2Rqhv4vjk6bpoPQgtZS61eAFY8gKJNnTgNifxfQtYowKj5No3g",
  "key36": "2FvJYwWsgc2S1kAn4Wt2fzhJbEHNJNemBAT7yiQRmvaB3phBvuDD7sZy3PaQtJFC3fWuthUJvejuNuQqaS8rJBKd",
  "key37": "4qfEyoAfeu3jnEbZA4jK68t6k1CY38w8bo2hYhj1gW11sxKjyjM67gzopTVANerL9iCJ8Yu2zkFThz243dmoAQMY",
  "key38": "48vsDBSAuzU5mFNAGMSBcnuFvV71vKaKR5wYwqWuy6ne1nVXYnXLCYksvs83GYAeL6kby8yW6gQbidTWmochDXBB",
  "key39": "2erpxEK1X9CCPBN9MSfA6aRCsTFMxXg8VbYmkX8zxQehocW5n1oiDEG7Z2dduvoDHSu4YckL23b4bnkgszqcmJfA",
  "key40": "ZFUB78mjr6dq6GQ6rdze8uxaHqXx9XzWnqMM2qj7iiWpftz9BSAuToiYL23UdL8s97jpiRcnEjxj75fA4ReGxkV",
  "key41": "5M9jtY2gyk8yUbE3ci6dgzB3SaV8TuaYsCaek81w6mfVTvrdobUwhWB6rVPyzFR4HnWm2J5YRJikpr4GiJ2srfTi",
  "key42": "4SGpPpYMvQbm7ZVpUxSvLY3jwV8f5waBLXJctM3EoZaHpfhW4cbJdE7NJWchcfars1DD2BW56MAy1vviDS4xKF7b",
  "key43": "2Mu8nT1Wrb7WmShNbhXo4gjoEyfd742L985zkK7yrMAKTqBjCx3nUsLZQiX8itcyUsR6xrJ6oLyqTY27wtggJvqh",
  "key44": "P5UoPediTRUmsQJXceACiXKKkhrXzmzS2zT3wzNug59xRuX4L5sqzaAN6McM4ZSUuWAQRk3UMMstJUiDzknp5i3",
  "key45": "3HRGFKiwXg8FRPMLiQ1SJR4TZX7LCY26nu1X3xTugrUT1At2eb9gCSCzcEvrPT8ARscQZfUMmTTD4SR1HH4TewLz",
  "key46": "3KXZ5RsKSvR5VDwBaaWiH84Tga9DdgA1qJnvEQjqVnf8VWqoLiArvvK27VqUzbkjiSewPhinZBLuQueH7sr1h8Ee",
  "key47": "4WbJ17AC7pYZkYE4zASsycrCKApL5BxcLRfsvZjAkmDeCCNNHsb8k62aBYiEphexbqadUoayj8DgE5Je92KJwL6C",
  "key48": "8n3cFXbN8fy3unzSTRtYyjTp6RqrDGMtJ2ePxs1MXxnD89dV2vsyBqP8Te5SGnRdGGPNfV7zSQcBnnFqxWBoNXi"
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
