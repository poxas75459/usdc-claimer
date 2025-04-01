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
    "3LaAukbQv3uRugHqKAT2J7jqhpSsa2jYC1C6S79hw9CV8rKhLXeugj5tRKmGqBh6HQmKg4s9rJSJZVt52UcvMiUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4osHjVTQ5EFfjKjGqE5Y5kb8o4JNb2pYVLytEaU6NTDrvjg1ZVJFmWKjkoWHbuhZ3CtMTEWEaW5KLrbnV7wLmypr",
  "key1": "3C8S9E2J61Ay9MrLvr2fUNr8c6Bibi9BwQkdGqfXGBBCBi3ZzEFuf6teUghqjDEScNnVfeWx72ohHcU19jWswPv3",
  "key2": "3fa2vJFqQiNKsD4MNQfU6EK1hDmsKtqcNwgPDVTNBeyBS3NRvXzdeD3Lfo214y1eRXU4Q2hqzoV3ftKxUZV9Pier",
  "key3": "5W2jhsh4mpQPg2UEvcm2PzHh6TvHpx76u5Rsdk7GsCbCT95BkGQsNogWhZtaQwTwmhers6q5WxtES3qt27Z2Soov",
  "key4": "3cdwg5cyEB6U2wkZXyjhVYWGdh5ApHQX4sPFDyaAHt7Kbmh4LiuisrGnrmYL6WraqMuELbqp7AKQbMNUTx2o8kjd",
  "key5": "4MRgsf4LYPhhqyadcD5iPcuGjU5pvX1QfRm139dqCjVSfGQX1KetFKimyH311aFRHbmdZAhekQRGyN7kQoxPBcXo",
  "key6": "3mu8CKgnzRFhvqvb4ze5Fj2EGDNBJYCrYQUjPHGWgQDbCSaPSzAy5hFUE4hXauhRzX6oT3fU7BToHrARGSYosf9m",
  "key7": "2ymMdNwk18oZ9M9aSWfAZepgo6Bc4CBkpnJX778vPxNnkKgb9ZWxuMuL3aeXftqPEP52xZYEXQ1xVaFfBd2JRAZ3",
  "key8": "dSWA3rR3tcR9oFFdQnQd7wwf6kU95trEH9cMsEQG421smuT8zBocUwtf7bea9bC5tDSVYn5jq8bzCDn3C1THf5m",
  "key9": "2F3iTbYC5UCX7mZbwHeqojWT9PkxNwJkyDdppY2EPsvuuk7Va3zPLUU8WL3ZhUJvG46RkhQM3sq4dmPWzi8wMfLn",
  "key10": "4BnFBYaWKQD2BdpUGhRTrZzZw8CoBLdQzvKyzqEYQGd9pU3KK2scjRXGP1kzsfU9yH9zyhCzSnvvtZbzC8a8xsGr",
  "key11": "337Yck6Lgmd6X66v97FzqZp1rmHiJPxBaznJtpcE4uhozgtY9pbhzu1wYMuqwRR4Uwqp3LG65BvPceX5cYU9VnW9",
  "key12": "2AQQz25XFcnbGaLAudYMv19Gx7nyjk6vjYRjk4DXHfrMeRXaB3ZWAKiZTUXP5ZKjtNpJE55diBzrpsysadfPpHK2",
  "key13": "MdPam9hzhcrk2Grvz2a1Wqs4FHAbSqLbiZQycbzGxPCtj3y6XKEVts9uxtdhVY6anM6sdia2vEC7J4yT9hZyMmE",
  "key14": "3tMoq3JWURqfP2mDCg83kGzJLbaCSMw41g1csjRACrosTUoMh5vd5FUNrpQ2uD4N81M4uj3D8HmCNUmVft2mbvdw",
  "key15": "24jb4j59AA3b66d44sDm5YMuvEPNthSvAcZb9Q7FaRSUrBhz68MWFRTWVqtMseCXTAhDVasyUaLmK39ai8CE4TQo",
  "key16": "3zD8kLEjW7FTXvFPUf51HF2wBaKTApc4xMRscXDSQM5PrdbVw8UcwqcZ69osFi4Y7M72DL9kEwGGX2d9P69EHDNS",
  "key17": "5YFynMSgJQDKS26K8AcSsP5qGv2aMZa7sk9T4xm3FaK7Urkr8CW5DaCKjGAnp15rDZjcUcYz4oZPtGPom4Adn3rR",
  "key18": "3v9JCGiQMEeQesfPRA8hSCRemc65GNHRstEY92o3LZ3AAQ3AjY4HqPfxXFrW5jGLNkG7xJJZA6497fZbrMzpNkoz",
  "key19": "5SFtdSvn92UvovEiAyYD95jAPeAWEz4LxxQByhwCRMrCiwsLfLkKzWAwjhN9XKaGzceHCUZPyJX92QvFMhMNvrEs",
  "key20": "3gvPwBhZWEzdoLNQqtpLjRMtcTD6MbLovmsnh2ztH9HXwQJS227Cj74pLupL7GPPVrEEB5Afm2kPwMAa3tdQr9tN",
  "key21": "HceVuCKVi9K5oe3SAEyRoyXWwP8CURBG1pw7Vj3Exg3ujA623oBYgMazhpnhm17CUy9kamFfBBitoYqfyHoGRtT",
  "key22": "PNabFhbyttBTsij3uv9dDYLfY7su8sCpSvUnRA1GEWw8uSq3j2QYshAWV2KfjcJcXNDAnJj1hoCDUkkSB3SYqqi",
  "key23": "57xXhgHLbHpyCHwrr9o4USF4EDYjZpMDyyExCLsk5Fcd6w5G49im7Hu9xH5E8y539G5sQhyMcSpYJFTqkkb2udoa",
  "key24": "5DmeiroRgJPdaWAzh3Nca796DfHyUbHLDqgLAaSGymdnFiSfQLYNbCs6Tf7cKq5nWsCSMxe9Jw43hZwTAuLTEY24",
  "key25": "42w8sbewHb4sQGtxxP3M1Yyy7vsUiXdQX13F1vh7pqhVjCrXEZsR6qJD5nNH7uzZmpB5FFmh1UAAA9uyuFciuaU3",
  "key26": "3ZXfKd8a9DTd3wdHFp1djQ8nj9gtgJdrgYRMnmcczKDw7D1yqtMCV1i6cmLANUk1jfkd9wzG9PkQ6JjynDdH5SXS",
  "key27": "4mdF1Kirwx6CGJuWzQP1WFZZMftQUwv4F1ksDm1CUQt8kgJvyBqsEYmXEAkAu5MnTiXdsC4qQV98nJibCAU9F3Tv",
  "key28": "5kMTzXS4LhwV3NnABw2rMie8WR19e2yvLMB1dASFz7kF85r4cx3BGYKKy3eYJHuEab74jyKzJiegghux1uaYKwVc",
  "key29": "3PVVS9KYukHexujnf71mWzVFMKbHTpudHZJZM6kPENVKn5nFPwD5gTSAjvMviHCQitbfqe7XLiWqt3DqyD36duQ6",
  "key30": "4nn7roqocjRNsQcvUs8NE48cXV7hJUthQ1ej8MUG6mY5JA9PYaNm4W6wMXhZx5PxpWF8XzhnUPapnf1AD7AyDHmu",
  "key31": "2rheyF9QFNG1j2pFNt2dKs7YysHGssLZiqf2d3cN4mGgAADtPDWX4nvQXTEcXZNP7jWg5DJ3bwP5zeAxqTMYpqPb",
  "key32": "4DPzXjLPhuAYtfTQZzFuvzfc3XuGvreSFX6JP3VjkQNgkyPQDGsXExZ9TJsXb4sM58VGXMsWXe4wWx7yeBjmuvKM",
  "key33": "4ADrEo9m9WNhGwrDcTjAZ4T81E4WEXUAYgZYDaof6jL55mgoPyQqW1anwReEtFdxHpwo2wWY6WEXgxCX72hwDN5H",
  "key34": "3Hc5iMUBQvbagNEdJ4N1poT6fERVijSDqdcBiUixsgfHSeT6GksFfKSZvUxLyp2hBiubStvcsfo7pvPuzcPzHgnZ",
  "key35": "42Aae4yZd93x3wWVPiusS7w4mHY7vKm3a9byrFkn5ro1Es8hX4ttHzrAr2QNPZS9RQZhBTxKY2Pn8qZf4FuY7AuM",
  "key36": "yFTuUjAfEw4bFZwUEywDu9HLPNJVdLMgB7i4JkvqFu2gPC7dR7TVaCjsQuqQ7zFc3CwNzCN5fy8D3zRTBMpKdif",
  "key37": "51XoXTtEL6zEocJsCeiHBTEDwm9UsErcbfPRXrk3ESQXqwqTbXMQuuRSuFxEr86MMHYBtwuwbx6ZXNrLmp7Ct8Hv",
  "key38": "3NWwHwYHUG6z6pZ4Yr4S2RkBpVQFaQJBYZdL9MK33yybHJrxxJh7SEaXNCLhipGCe3ydhJgdbB6sMuHzqEmEA5Vo",
  "key39": "5CXC7HUKGU3apysHscoDzTUUijBNTKUgAxoBPEj4Wjb8yRK9qVd75KVGUfW6iTNYGLRPPQ4NQq3BcrdYgKMUgFhK"
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
