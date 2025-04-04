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
    "4TY6dX77AgWofWvpygDFEFGQ3h9zbZqgzya2z99uV9oqiGpub8oTtqQr3wXjpNS2GRkg9mxTJPSYBxxm3iwyXZDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zYQLfgpz6YneGqXzadGgT6Tmxbpkh12TiKre754VE9jbgFYutRa6PYfvdGWrruz7fFDGp52mHx5CF6rvJrrahv",
  "key1": "5MWzHDfGcA73ttzpKZvkuwBoscnAbxUZmmMhY6dFU7qnvZrN8gq1FtTzeqaCj77NQf3zoRDVjYMd3WCLFbeykUpH",
  "key2": "3TvpiiJQu2RxGHng7QnNy5yxkukkhwJ5XRZP54McDT2Ncocrc1Z59HiTM8fKefRLkqdfnBqWV3XnC3ugRW62kx5b",
  "key3": "3w8Y7C6J2r3umfKXCQzgsHSUFQcHYhEj5522rrRonpEfw6zYJ7SUkEkwMPYJhF9CoFSiejPgHXkCt4fUV68o33GZ",
  "key4": "4qJTnMwCsxzAomPAKDYYc4rUybYu2rPuJGsZty2unwKNpUkrhaF95KwHLwgJKPnkDSRmQXcqmAB6SyqkhqHSqmhc",
  "key5": "4wk3V1KakN4wV4A8SY7sPtU5SsyUL9BiVwN7cRVPu9nNS9Soad3UNshPuATxhmZFFnz6rqQRa2MowiP6oGDQ8k35",
  "key6": "3mHgJqtaM5L931QgNGu5XsPZzwkVctVLN7hTxEPqZ3DmQzbfxEPZZVcNHycgsHfi3pJn4aqfJexMHub14mrWbekM",
  "key7": "z3V9726WDpxiQS1Nd7Wgxf9gT92coY4rox2dKPd3Cnwio5cjndxvtmp92Egyh2VpGE3gWLj4RrYCYAmhjAwDapx",
  "key8": "3snmGZ2SgdXTGMfvRXZq9SiuSpXYNTzTFEZz7v89T1HBVXnYf3KYM6FKWeKQTgBbwUBHWTerfTkh3CNBu6hpMs91",
  "key9": "4cpg2Uhg2jDRn7kRunG9FACu2aP6ZGvTdDjTQVide7BkcP5s2d2VHLenVg8B8aa6eyPMri2KQSFTKTsHuMor71pA",
  "key10": "3z9JvQrnqL3MS1chfE4bkfVUC39q8JMr7SbkDgqXazRjmaPa6c7ZpiFTaqDjAkkMbcjvDtVhjfvptCnQA6QJaZBZ",
  "key11": "4VSXRQuSN74NjRaNGZon4tDcZRuXdnp2f6CEVEKHtXH1CaYjrBiVvfLZyJSjrhs18w9NQCMyL29LSSSAaUYy4G6G",
  "key12": "2ZHbqAm7deEFTWTuWqc4cjtKah8MjgeUqUvt6mZb9bN1mXY5gLY9T7imhaKyLTtkKou2Nn3Autg3beUwsdB8ANQF",
  "key13": "5pNNhLoY9paZqHCcjYij1Zcespn3CxjyYLmTTmyBszrXVkqiRmWMtfxD559SJAzUbPV9H4GAyLkwL7ZPHu5yPrrE",
  "key14": "3z13zzVhx4rkNPXDmjnphjX2fJrnwbhdcnddzhptiiCAngLtTwk6pgr2RjGXaUPjKztL3F2iWRSMfAJPqLkEHbB",
  "key15": "2Rk5r6AZeYGjmR2W4s5RjVYJPQF5YToeR5fh4vd9TJn8hH9Q3xAdsT1sDCsa4W22hSVQvJfLD83zajgydWacwYBB",
  "key16": "Z31UnHDQct1E2m68Ftiq2QAkfjUVvLy7MtJvaqCjDHD8bDyNuKiKifpFVDp4DChWgvpPdMamStrBRMxUPmeFsKH",
  "key17": "5wW6XW6nfUqHkso1MBhmP1zvskyrn3XHnsaVkmug3ijT7DgJXGzM6tDhwiDt2uPAE6RCUY4UAzrZcNCYT9vuNC2J",
  "key18": "4u7CrEHThRcXrZTfASjNhszhTDtmhEYqym2me5CsTm1XFxJVvdas7Q9eWo5Ejtp9nVQKApHAVAWTBdsMVyM22J19",
  "key19": "4SrF43DgqLweHAUJ7GiVS7yiTZAiyqZus2qCupkEnSzvaBMtQpUM55rbzHzy2K52HQzgFS9hda3eUnuvbUVnKnGY",
  "key20": "4rXqy5jJa9W9UJBpEUEBW3qFr6X9V7tpLmyMFPGpdE8VpQTomNjfyRLbEW47CwBTcrD8Zw19yoJAkwdNwnyDrP4h",
  "key21": "4NYcN5hom5iyvLBaLefQZo8LNk1YzD62pULDvPPTKZfiUvLfvMF4gWwb51GRYA4bBiqQNK1SYudCvHR9NnZNQnvC",
  "key22": "5xF6j6FU918MwPAWsQ6iJiUP51zcfnwN2ManD8bf46YohKh9Epx3Mkhe9bJntTDVKSDURf4B4R5Ar2Jg6ZhpVsrF",
  "key23": "5TibUhjd2YL3YWHkE8F1f66rJ1B3fzuNqkM8aS4tdRwXsbVJ4NFTPR9cJMF8KW3sW4XSvRVfuGeij6jEUTf1WtGz",
  "key24": "4ztr9dvTuWRj6xD2V4JxBwfyA9ZxhBubN11Vw8FXBDa49ZHQMg1fM1zqVrrmPemmC9ieBazDc1Q9X8NskMSTiMcN",
  "key25": "2CGrnhhspjU8T2QMrUG3MX6Zqe5hPBvcr4JTTnKmHUR4rrjz8YBvFutSKmx8ThBqrSrvJ5FgrzcTJ1tFrbM5re6A",
  "key26": "5Wtx52eexUP3AV2HDp3AS7TRo99ueVtWx78gZEapEhVb49a1kH92SfpUwvD6mocqB5hj632F97U3jdhmSJmmuZH5",
  "key27": "2wZMNXvPHd3MAJs6tQ1VG29icDgxYKMYHYSHapLK59hnUZRUqcetxpuBjtNduZTku63ZYgu96SizN71YPNV85NuU",
  "key28": "qi4wS811TrDmCYtdgDk8XsMbb74afgeCeX5zZchu96arUgc4y2sppW35vRW8SGte2fdMDBsowGXNniEX5YQR49v",
  "key29": "3DQE1GrBJqANMxcdEo574YFcTzKoY37ZGqBGVWsZvd77uYFQHcfqC7Qw8vY9zmojfy9k54eyhXoRa3W4bdEHNhRK",
  "key30": "TXdN7qTXqjMUf6MUibuPMKUUbiCU1zkejbPnQv6mbBZmogYK4EFtND7aLL98H9jLfJjFnCgo7WC2AYdJ1wWKjhK",
  "key31": "4xFib9jqwopP854pgHFixvCEvp7wwdHinH495fWZ71WJZ12CcnDRnR7f5sjwNBvhkrFs2jx8qiuQQ4KtKjqWonov",
  "key32": "27DBAxoQeE3JGxAwkZ94gcrs2VSvEDnMNwnmpq8MQ21JYFotwAv5g91wE9cTG5mvYPktTiP7FC18x51FaiK543TZ",
  "key33": "3gqcTUu6A2554naw4cs4dpS5YojQRXbLSgF9TppDCzEc7QmJ84FH34xGnCD5PbadNhd44u1o2cMUecySKNaWoGKo",
  "key34": "kZfYRifx5kzpNa5PZucA5XAZCaX4ecwAozH7JGWgrWEFAq26nVJ851ehakp7fZtoFVfAWkgqerGXgx6A15NcyWY",
  "key35": "286bUHmA8GYYJwo3EdvkrsmAkK22DH1TQHPRkWP5j6DM4idmAnB6Q9tc8wBevjuixNJnoh5MZdt4TMAFZtkvoadk",
  "key36": "52to7YPMnCwWRGZjtkehgEWzgeMShP4xCZqcFip71Us6reE8UsH9W7BQ7pvcvw6mUhqvHEPid9LSrrcQTdExM7U",
  "key37": "gAwWbQDWiQNAkkGYxaf6557swwjtDSuFF5za4vx8fnK76tSZ293sHpWXB5UYGNCF4KrFjhAwzroAuMTkR9VkNjo",
  "key38": "3oroVLwNhsfKciVJoVXd2djuNER4T9ww6BADYwUroLpHpkrPgYcHA71bxhyqKPeVhRuJVHgj4ayfMriKzvPha1e9",
  "key39": "hNGazUa5swK89JWZ1soK5JiYdttRm8HPwfP4kmRu5ShmPaoUF5HT3736CYuJHFiUCYAsfHUsgWfEtPDHNfi5FcU",
  "key40": "3JWLLtSdVLgnWY4ogjPugBT7KpUPWPUZut8bEjmRVBRr3SpeiFNS1MgDNu4bxNAh3MkgMbBg5CBkZ3ZXZe8iEvVi",
  "key41": "4dnyQ93CL7e6Wq4XFzmgC43YUBK5uRjErhUb9cwv6L8nYS51sckLWbLDmL6WtPiiZDnetQKkxVj3QthwfAmhKaGu",
  "key42": "4Lj6GUsvhEaEqcDRZdcAgtNsR5CNYWRqRMD5axrQVLY2TASw1r4f1EmyRedxDHAcq4wfgbTv5VmrFFjG6AoTp5xR",
  "key43": "5hYW1UiH63FDfR8e65CLXQxviH8XyGdQosFfVB9JJSHAvVKQpZnDVF2m7grisgGUeNy6euy48zxwZhmUG2khfSG7",
  "key44": "3TgWAAkzvXrTE4aPWXvqnT6eQwK7TkXbjkpeug1HoxhRcjBjPP4PF9eWsBhSh8GjTLDRe4xuaUXSPtLX1v86qyiA",
  "key45": "5kUWsJrCYLEySyA6iN6hKXDUZXV8C1wzLpEJfXFPigbG41Pav5Gn321ozpon1rELG3xLz4X75WHUFEwHRRuhwQ5L",
  "key46": "ztBGZvzjEomYox5eJuevuDkGEccLf9VaSeHQViy5n3xMjdpUCm1y4pYRywvMytuwyixJrzawpDAFZdFvkwUS8C8"
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
