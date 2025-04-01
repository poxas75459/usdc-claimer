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
    "46X2xmGJj1mRh6CUePqMPissJKjMRPhdC46n3s8Pnw7zQtP95qsJEV1XeT2MCffpBDXADC2TQb3Rj71nfyFgdXpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ht8jMpXT3Lo37ucsCo6RM95prS5fkqn3qiVi6JeCx7rgXQ8xwX5noQ8Tt2vBKdc1BTm7caRHhpWePUGipk2rbrq",
  "key1": "g6R44kYEHVhfQZhcmsJF7wkk3NwcikqqLDFV3SALqvTV936DXY9nm3bydMqxtYbbpvyomfWWjSA1GKDotJfVRZR",
  "key2": "3cAr89Nj7D7Ha6FoGKnATRxic2mQ3RXsBygkWTnuewxcQkBqcSxc5aSRHY1A4JhNvBLLxivcqP8tEFjBCfqSWVS",
  "key3": "aebeLomur6n8cDf1GZ6FaXbfHGrk5vYdVzjEXAv8wWCWYpk1nRWxBKvpYQVyufw34m1r5Y944FtyUC9jm1HGKRq",
  "key4": "4uetsJbnv6PbKMgqUxb8iGJmcJUfTNz3hmwr4KHxi4tz3NVF6uKVQKe815toTqwMrYmqghsRem1NzPWME4Amg997",
  "key5": "3LYNXybRPKx4ufE3servfJJ7rdrgUMvqGLAUYYchoaGU18sx1A5XYHAXvthLMuw2wgBpoHRTVLQ7PDH9Nh2PgFLa",
  "key6": "YnGLEJgU4N3GfbppvB1HXEk6EGQzR2r7PzXVg4FDw3XSfpjMRrByeuDoSPAdQqFvuMESHCu427Pq2LQS954PGtq",
  "key7": "4Bw8F7kCwVz2A6jErYLxWkTyCAznLwWmuNyqGTUz2zYdLapS5fnEoC43TXdXa3kY5ZwHvzvw8xApC4QRz1RoKVHy",
  "key8": "2TzHCaL1ohNESX228pkFaZZu9B9jqpe16nUx5yWEJMJfqneMexzY6MfpXrKVYP7LiMGnFnoSaq6wHNaZgz7HZJ5P",
  "key9": "2nCB2onrF4z6bDg9ScXVC9zsjB6oF5BKwBG7YbkYwFjhdTuRAVSCziSK4uESoWPLZdrqne4rBpWgVD5B4gEFPEge",
  "key10": "KEeBXLjW4DAx12Tp6oRSW4eVCEXaXiJnNH7jwHZLayJPGZAdN1FcUzNwMfe3d3E5jRfMQXA3t3n7nJJFFJSkqBf",
  "key11": "2BS5JZBo9arXc8fmSounSzvWyhuxibUxTXZLj4V1TQnHiAk1igUBCm1XWHuQvxTa8obGdNLinxFTZ8RMdKbLhJ9g",
  "key12": "u2cLmSKmptawLsvwAoXtG8gNvTXH8337GmpwcgAD2Lh64rMoCZvDn5GoCpuHJqzxV4HPnJWpsY58uvszgtUd9Vj",
  "key13": "2dNjNc9sh5mAfNmErmCkZJ9MpLjuqWWHxLejZDzzYtVXbLtBY9vvNTG6uZMj16NKSF8asPFo3TLuoCKaSn6pex6M",
  "key14": "31FyHhhJunATqAQksiTA7v9SvrLSY7dUSUEkNcJvP6rcjFtBnJ6JjkHXvjoDaJvixSDFMxMjMDpwrgoM65hc2Jtb",
  "key15": "4BxVH67USNqZva7Sjn7qrb5Hy14K74wvibsRAiQBpu6UQsR4WkFC3xUPNcuF37WxArBN6RmXrxL8x1s9jsSavxMo",
  "key16": "ATYEJRhC6sesqXoy5AHfJ5K1cANrqkXV5axPXzkNs4eRrfR24CxSLwBxfWMyBJXWFpBooaxQxxdVoz4z7cdNV6e",
  "key17": "4t1WXPWYe4BB9M2DidaDC1gUssQsDXMGCVBqCn9nnkGXkEv5JYS4gwZ1TKNJqDm48mR23SYx54WrmB6i4e5iNu3Q",
  "key18": "4oUauPdWb2ncLnrcQwZUxFTatFc9vv8NCUdTyWX5NtsCoY83uJ7EUJGyXkSjUbJWD4RUZXBsZmC8RjumbeLb7G6Q",
  "key19": "4XhpteENvjNVCwaW33EZMxDVRYCoAMXzR8BbmfBALBt3M4G6cFVGUpzwi4BpT2oG4Y1qS2wVuYDKdLFxauNUaEPZ",
  "key20": "4Jo7dwgPQs5jsRAa38E1gWCifufPnuQNHaTZUstE7ASnsYEERtaZNzbcUQzDitcwefr9QqsnDV7sE9JJLeZwEqTy",
  "key21": "2j1YTZPbw6XzxyVFjFNjVjcJYpvmWQxK5ukx2cUM4Af5ACMTwVwGChW3irYEBRJ62DkZXSZrusDN64h9F2XVbz6W",
  "key22": "29FomPP75dcgSxD1dZZ3tzDxH6zFi6qkZ5swDdNPizDr1YECvi8HYcz6j7HkjNuuQzEetNQYaXX2v6y3E9NtpMEg",
  "key23": "2M1pt2edFCvrDQPYYjctQUKaB2N3MbCbBJukWnkRSewdjTaGyNuEbjWAumbEA4FcKJTEggJYDb33n89Lru8zpGZ5",
  "key24": "2hbBd2a544kEQ2B4XpAw9yszd8YrxVJ7SNSpt4G7cHPWqtCEfDJv62Gb1WCtmtjFLLLgm62Sg1UuJz1ZHfXxro65",
  "key25": "4Zuoj14Ntvp8fRknY4gyCRjTSNVHWoWhpx4mUdeujomNPiEnYjgz7GWBbL5Tv8SXsapiLYD1JgefAtZVQrs7bwSH",
  "key26": "2sSiKwwLWzDsQPAQ2u18Ez4uRhYtg9fzJPZdiP5kTGy1ByeXNPkwW2xsKCoZykEeNHgCTXsHNyqkTbgQnS6TPC3n",
  "key27": "2CzqiWkPhnACQaTGD2SWBneUHx8y1frfH7LezYn9Pe3yHt61mY3WfEHeehXu1xRU9FJAvKqDPSo3aZvVJPRdezqB",
  "key28": "5izV6aHFSfmudjzd28oDye4GECRkxfey78KQP73LbJ5AQdsAD7k7GFS6z4qXsrM4RG2B6cVLYT7fGn9bnhMy2oKw",
  "key29": "58aS93ZasE1z2JoQA5B5WJFcY7Mdt2LgJRKntFYAVrQUmzkcrX25cvzmvnieLiJBiGtS6VeX59mX39F3x8g2iRyA",
  "key30": "2AxvAacKgjRvL5gxsdvTx8YPk74zLv8mkytTCicpwXYK2gPdGs5F2pVVuf5Cr5rq5U2rp1aBTZzPgvzpJmDcD4mn",
  "key31": "4GcCsC1mwQharL3GW61d27AQeoY6HDufLD3awvc7JzBnv78gNctcwyDxM6FCGn98Yt1R3xu6ygUUtcmZj5PgEtfe",
  "key32": "Djtv8dKrfUZCpzZjyqPA6Ay8AotXKY99Xs5RxZPkxasCGgDKnZeX2q1dZ9cDaCrMJaiujSYCU1X5rCYhDTT6Ju5",
  "key33": "4LuTycDwKsGV5tyZ7JPH2ekkfWNfdK25oEjtJcpXoRqwft2Tzxxf1QLsGCf6aVaex184xqtkfNLk1g1nDJY7UT7X",
  "key34": "59TcpYEMf2c596uJQqRtWtrB9MX46DdXXEn5JtGrwTd2ndwWWyaYXm7ehBYmqk7zxfCSLRhnrTFTf2U9qCagNU5N",
  "key35": "613AbTpS4hr5TtquVDkifAVpE244cdH1iH14CJZzUivmypkQfqKFUciLz1i6xvYQkZf8K3uxJ1HsMQsmYE11yzTm",
  "key36": "4mEYbcBHD75y1xTY8aL3UkEKX1yJZV5TrpenJUyxKGMnUHtJKkq16s8bbcz47GDBoKT3rV9ipuQT4ww9mQCU27A8",
  "key37": "2ZHS5a24drqXEFcknMNyrZof2pMPUgmkD8R53Ke6eadgxnor8KPR3Ps6PRWEnPx1SFmoPSjTm9urB5PY7haL7gaH",
  "key38": "5gmpcWkN4KQLLMyQeUDa1HVQEpRYnuNWLykF7Edu75887x1FPwT95uHMfR1zKwAsGpfYg1Cu1pVhbY8fyYspkHPy",
  "key39": "198NkF7MXfJffQsbrP7oFBpzR6F8ShEzmq5zLLPhn2QPNv8wiaffp8Wf7i9RVHJEJieCaHxoGEYu7U6WYc2d1X2",
  "key40": "5igCwBWkF2L6YiPL3HFkgEA5FUh73yqoE61KrekuCwacs3a8j9jg3JgLycsaxWFxbzmCgvNefFQgJYf8PAHXPs8n",
  "key41": "66Tf3QsA8iEhUmF5bUyAxq7D5WWR2wWeZAKnj7sZqLjrwNUesAtBSYWgicgSHSYmAufKSB8DYUY5mVXSrQximZQW",
  "key42": "3yRPjhicu6wELYegEeppfhTJAHnVNs7AHWTVTMUCBdBjwLzyPhxvJ62k9aD28Jod2EEUEQjJ9BzEJmCxnTnxA6UF"
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
