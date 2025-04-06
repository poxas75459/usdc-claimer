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
    "57YQinyhXSoFdArnwGRfUZUBe7sd74KhuGskRZ9b6767jHGLS3pJvWADajruCydYHtKxB2GjLasXVQY2K2koBFak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48H1kYw4wZtnFzGw9VRAjUiJwUpqSGFvwizfQ4vrjj8wEk7igJtLHwP51viQ1y9Sw6yoa9fggyoJcttzJANdp3Zm",
  "key1": "259NkdBT9rzjjrfGWqtLXhm2Bo5xhDbtweDmpfF6vXB5k7YeeKR7iF79iWRXajKWEe1Lzoms4FvpnfRiKNHvmKT5",
  "key2": "23FPEKNrA4bWaejc6buiSpPtHRztimpmL5ZJ26aEtAD7rNFEY6eKMLRo2H4JQNpfbmPqMu5yHhVgaGsMSbtdZpkk",
  "key3": "4LXC571JqiVwyb7a8wD38AwcBjwQAcW3wgJVXBNdwMeAZZaa5pMkk8oKUMZutaKJmsgPsWUQA4x8tPN5SSUaEEeu",
  "key4": "28G8ubtsJfxv6ZBXzYznu1wKZ3MPY6St19WhUTNk8Qp1EQeXs9fJhBziZ7E6qhPBbEi6Vb68kpzNPzkbKAJMxZNT",
  "key5": "2RjowZDKKP6y8i8R84NTxxUFzaxCTPX83QTQAQpWsGveJHyANmQmUtKTgYe3U1s5xebpKTbzAcW1taEoqyRNmLLx",
  "key6": "5SJHnLECPqbcsweTQgMBna1rUQvcPUcv2wVeJeH6VRzi7yxQPkV1mfk48hb85qozjaFfQE9SNoWxM6PdbwYfQv3J",
  "key7": "5KNcxV723sezsKMaTGsAQLkv2AQZcLDUZjZ3HhDRmVzxN5HBDZi4QjNSvWSsviVg2jw6WjVqY57mc1wHPcjvT8Mk",
  "key8": "4TxWQQsir82uuyhhyx92KqGRREdAeveL8Z6EKBSt5y8Rg1B28g3MgvRZwVcJ3j14UUdLihv4LG4ePDm2x1QX4nTb",
  "key9": "g6gAMQFMdeg9iXDTpUL4EB9EEEbry83N4SVUVW7VVnzpjnoAYEG9Q8PdJvdCxKxX4dZuzAMKzgKTaL76eVKt6Bk",
  "key10": "3Tpr6qbeRqKTNfgYdnwY8efQz6zkUaXzwZFce3qZGHmanJXz5XUFJUk2cASYwHGzuiu4a34DPV6AnqJHYpfXiZ7V",
  "key11": "4rtXQjGrfgaHwJe2Py1wCWqna1jUPUBvWqVmSN7LJfuP6NbNNFrTQAMj8CZnScfUR5s5hw72N2E8yjXGCdf2jmZS",
  "key12": "4dHAuC9PCh6d6yHDc98cgkRRvnUZsnvBPhipiw6VHvJXD2BkstxqXAcUDKBvYw6w4JoEVPLRPfTnc5dbAWCpFtzm",
  "key13": "4xgMBQm3wSUFmYnKF4mYdPdNFNViDLxjD1as8RXVJegBU4jY1TzHJwaTXFqotG8cfEBtPgFnMcD1o2bcuJEXSBqn",
  "key14": "4R5SHbMCWX5xc57Zqj48xmpHiunNtdMD22gxLtUJRqm4dJ9d4poh3opkeAsFdEBqLKUF3TmbNhp1S1heVsZAfsAA",
  "key15": "5wgBgps95KkfFdkuT7mooUvJvX4UAZYTQ1r681WuxmzPtGHtjBsaiWSiNWd7RsqZFxnBCpnBeY1gVM1FTvUoArJo",
  "key16": "24R9AK8ipF8U4u9RTzpPCT3JnF7YS7Nw6Lau7h438njHPH34BkMhrMaLustZkSoYC2TqCLur4B4Xt18ZVvJty67v",
  "key17": "4FdCNwKMJXTQeNYDkz5K5Y6jSTG6fcmRsv2Hsh27Z6B5zVq3PthoYskLtEQe1dNMSjy49zsxTu5aujJbH7t8RntQ",
  "key18": "3K2t4PTkrXGsCjJz6dsM5A1n51JuTU9Ti3h1J7ZH4cVTjXscg7T9DLsPws6TfxF754vWn79CoiXeSc63Ks3VwiTT",
  "key19": "3xaMN6W9PNMZK81jM2mAR93KumhJRcFTe6aU8awLbiXe7xx24HnwiEb4qgNWx88otPPFoT6wnBXynNPnbMZdMhLs",
  "key20": "9x2frsJWyQ6y323jjxm4WjcybKYtJFugANVVVFXXZjnFH8L54sJbhFc45x9pmocSpm6uRc44bN1G5k1bx7H1eri",
  "key21": "3EqrnEybNxd8yDVt38hNcnsALuaKKgrvyHAv2hg7chDhhVe4FREZWsDkTMimkTEevxQDZNKg54YGf5RTytV1Sa1s",
  "key22": "5jubsgvvH5oCdN42rvfMMfXVggoNbk4EAYcdiH9U9GD3tx66tSo6TaUi2292Wa9tyNoUBe38s6UP2i8avHzvVaqA",
  "key23": "65pKJPaHZ5Z2tLUqQPKpKbKDsT47rNdRAhhE6PGwZXEdGCDzDpM8MpAwrzbsXWLhtruXSu4cDfLpaaJFJq4UhfoW",
  "key24": "d5MDGWGKXrhjbbdbm2CKhVHtVwaxEn3NnLvUvZw3Gn3z4Pk8Xy8ocATG474xTtFKAu4XbsfQxaFpY1wa15pWXSH",
  "key25": "4yePtdtz4qYYi8hsKjNPzX4w9cxsdu8qcigRKro44mCbsFKHnGMgNH3meFCs8EL5EMdqpard8mX9hjjSpuxkauog",
  "key26": "4UKPpkFc4mGAz3hGKVQeRYRC4s1tAdqrm3bQJSp2NiPox3o5rRKwSny98AniE9A7PKgKQ8sVinbZ43Qgfy8jQb3F",
  "key27": "4HRC6HwMoqgMFbsXffkvSqdAMTKz6FSqmgSMnbYqpQvnyg6iGJ6nMt4zvKeUfHsny6R5wgLUPENT9NKXHZQ9CFqj",
  "key28": "243E95gK3Dtkp7NkNKsyetiPqLcPQDCo6jJXaddSr88JayEzsYksYDAUwz1KxRdUAVDPYHMCgLEdUmyQ2tvNePnx",
  "key29": "2NWpVUhSLW6nuynWitPBtKAJXFtJahtqNZQqYQPsqq8i2fBoTvUfqEY8k1nJCW6snrna2oyxrpiTsEoqJgnFSnNV",
  "key30": "2WLdwJxpDWJ6hmJPQ9e1m7yEhvBrFpvbCVfwjYBPQ4GDxXnUeGJwP4ejqwqSJBkLZ6pXyFK1AJ8WnoxjXXiBf6oQ",
  "key31": "2dQFdfFWqBVy8PkP6QRcDk3st8dawuK6zqBujwehv9b74cJDvFFFD7PA8SKvQiAyXuPXvea4fxhgiSJzYViLp6vv",
  "key32": "5n5HYtkZZ5Sfg2Xt6pbzcHpiiCLuEEk227RBJhhMwVDKizvAZj1rGu19nXwGm4fx7R5co872xa6Ea1SEgmTGZeRB",
  "key33": "4BaCRX6TwPTwYyCd4HPZY5brYpZ5stwaN2AgMPnJHBEf7b3cguPMsxVTB74ygyg5KHXzQVhmsVXir3dF9edG4XSt",
  "key34": "37NoadNhCqikKZgyQJYdxNNVVHz2WNdDqoWVb23mRmoTbAUSRD9e5Mi2RdEbGXt7vNfjVGhmqxLgFRRHadU7K2Rc",
  "key35": "nztCnGD7FfCBN8MmeFXRCmB2kCrNVZ95b2DP6CpJitjmU8CNiMDYkTL98soyV7kqYw2kh7dKvdGnS9pb2JArtn3",
  "key36": "quq8GHwnnNK13CWmMT3bQNuh6ydKdSWCJgx8JQd7rji5iovXNs8FBDZKAuMxzWFtWeAgdEi5tqnFN8KL9dQ5yXf",
  "key37": "5PUU1mcYhrdQQkxcvGjbacw48ipxkUcSq4zPASVrhemmfMmRoeq9NVPcqyCaN6hqeAafdJofx3n6nWu5cH5x9P35",
  "key38": "CsWYuUMi1az7onMnzfKxmYDUQLiD1MHdh5o3J65p15A5hemZRAM69abYZa382yuty4opUJcFBTqZQpB6n3L63vn",
  "key39": "4vVu8RTiUbfQMQqc4pyWG8qMsWWYDt53r8NXq94QtpnEYkvz6eCyQJzPXJ9RXxrVTkCjTh2mj8uibLA1TN395kGu",
  "key40": "378AzEEqUxadKxX9LVtjuCsh3bh7HXqULntPer2LVUYqm9Myrcc9RRE65ch4PWqBApreLh42owFHiQKcyVkLCEJP",
  "key41": "59UhkD4BJNmpcyeCu1rJi8frgQxeDqeKD6oRxqGRhf8qABM5LhyhWNQvrtiLdhXCNp9j6fezPdVFt1ZhMmGQ6hJU",
  "key42": "4x6UeMeDe3mepZVjC4PSwEtKCDF8sYdm1EaZB5JSPhWkNVvcY7KqmxwV5WkPzurJHwCEotUp1H28AawDDdeQoheP"
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
