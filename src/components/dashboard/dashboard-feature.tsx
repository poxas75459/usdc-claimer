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
    "2Y1RvpuF6mFYQkNctDyLFVrgd12yQhogUFRTmhg8a7PYENBX4wF4KTNDiUKCN3xrtq5UPwPhJqxRRe86ys3G5QiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rfpmZtX63hfU9QJSnxszWrsmLV394AMhN7wHxw5Ree1ZK1juz4vFkdDU6cjUaN7wWYqNDecbPBKXPXTJnuUFf8X",
  "key1": "33VTekDWjyvXUnjYWaozv12Y8XWKjDJfEBrLyohSWzp4Jg8FykfryAPUspYFYfneY5Gc5vK1XLsXc6DTsaWqckHV",
  "key2": "5yT4XvPT2CBzfGrtzBCb3cch82R6MHPxmwQXr7Bs5TULAFdJULpZPbczK9MCkn6qjiheSx5FToGjwVuGh82RUFkg",
  "key3": "QrKopmqBzBZ1kUWTfMzks9HqwzM3Uy9PyVaKHkP58GdT4didhkikstck4m4F5LKttWedU5FwaoM9CGyk6jsB2Ft",
  "key4": "63TGPM9rsyZ8zfTF2HteDUUqkTS8Bb2KYUSEgzNq6UBNeWNe9QqNqddktF8JBf3c68qRLprQwAL3CgGGskjAhrKh",
  "key5": "f3vBedLE61pyTDXkHb7U7h5GnBWTU1B2N68rK9ZmbR6VXaGCrP9Wpf9BGEjAVJLbnc5bC7nbrY6h7Eey9xZKVwn",
  "key6": "2RZue7jXP2inFchrCgd2FM5J3Jgai7PKZ4HRCZhrPpi819Z6tcM4v5UjfrC4ZT7AyGDKBzimW3MYnMVt9LCmRUZn",
  "key7": "38pLSxHEcrd4MeDo7HrhDtLXFGoezwNtjnSvQQ6URSHGcctFVxL2Qq463fdprvdX6PRdcyj5Z57wXnBQeYvFnJP8",
  "key8": "2HFzakYZ7Fze7ZpgBVCwYYcdLqGvrt6jukmF8ymDxswtFLPQuTLzbNZjJfdkdS3JHJZpiJSkvHJhLU23zp9C7djm",
  "key9": "eFr4wRAPeig7bBq36hJ52X5F7oTCTEagpmuURH9qr6nEz99Zxbst8fd2TLtKP7E3zYGMa4fWuUtkYZKbAY7FEP3",
  "key10": "3kwfjwzovw5bjHHGURSMQ1f8pmC8qZgu6rZty9LNiTtSe2tJm6GgUJ46ny9TUhyZhF4sQhbxb7PqgDEjkXurwfst",
  "key11": "49H9k1q2fEypei9xv9MyLEPirK3rkTBYG8QFjQkL4oKuAhQ24ig3mPMJqtLSujPiEJyf7vc7TfNGxacv5DeKvFot",
  "key12": "3uH29gVXK4jX91wVNjyaa2HNHZDLH7xdvnGpCsvpdBePCHVhRz3ND4FsT6bXydD447ed28NdB9oVfMD8oDbrDq5K",
  "key13": "28wh2N7ucBw3Xh9sUi91E27yREfUq2ZKhEncPnJG6DXCqNkxYFRkD1kTUhAJGwjbDTxwdWhSVje5e6ReehJj8Pjo",
  "key14": "2fYe3X5Vnjp2b3k5XwB6VtNKgtYcjP1x82kqonwz2ZWgVYP3fxuwJkn1MtmVbhD9mKS2WnJwhPudBPBjeEZivEas",
  "key15": "3ojDXWQhQ1t4dUzXLuBpsvy2sqPAvo6mzKHnGUuD8yHeNgrCvtC9QwNdhNkQyWmoVdKtLrctCDv4iJytPdVStmSJ",
  "key16": "4phcK3Ktccy95vRkxykmtpJPXGkoFxGJveHJVkyAwCstdkmCuUZLb7ynHSfv2fxkvw9wjovFYS4N4UWtGbZho21j",
  "key17": "61h5ZjmuxEn4SuGG7MJVbSn9XZkgWjZqzrTvhbjrPizJbazh9VJuEf612SDkcqUpy8mtm1qbbPUFrnnmWCoawWqB",
  "key18": "49dnoKea4Hxqxmf5Ruv9qDLDDPULr3GVuzhFs5gBPzQe96UCZwe9FHuhbWiCpZRD2YC4rjBmgUV9eKexnKpD5uyq",
  "key19": "2AwvPu3m5nZzVrxmYgEZJ7oHCsTjBdLd5qFMYd479UsC4eP1Hhmv9U88EK5kCF8DsSBFed8CTm95cbxbmKswaA7w",
  "key20": "3JdX7cD84DWjWjZQND1Figmh8kZrax9nLmtDuK5gbraPL7UCtk9bYbdHzbu5Cnp83KCWMrJDo92jGHKAaUX9JaAi",
  "key21": "66BMbxe5nnDPtUsYTt8xxkV55AR2fdD2aKXBtzHdNfcxHHiBJmuYWVAnbzpiy61RXz5vRq6UfJYNT7rRMrMT6qUo",
  "key22": "3TPfX1tJwNvjRAYgW8whyiHvYAuDLPscZmoZ9nsKKMjoYSQcruyDUmyx3YvCoZRJhmJykFE1Wad9JmrvkapejUCX",
  "key23": "4eBGoeRjpCBbGpvCTY96rMDBL3rz92fLiJyRk4gHYen7dYjDZR3N8uH6cN3KmeiBvKqJ4QpFxLzTEfzJrcB9iUF2",
  "key24": "3ZFTpUE5N7asyLszw1cAP2etd1xoKURbUVtxrbWPtzpX3KqHGxZxmM8bRWh2D475TcRzUBQVZ45r4QVpawzExuuj",
  "key25": "5LiwcJXknPv5szMMtqYGisrzxwh4iDimvinoPGcGKqRn6Uo92JiytNHN3Rq2smjPkxwYyjtcBLzHaVaRvV69WZVH",
  "key26": "ye3AU2f9ikbzngTwv9gJ3YVmdYmxmdeHg3jApRjbUjC4konrkGtqvi6CFRAEWgxxpALDeDLSJD66f5rcYbxkfLj",
  "key27": "3tscy7ZtCEb7Sh4mENLLaMwf91nzD5pLaTBA9M51MSXAJ3yGKnVTBmBUXJu6r8cTSzNkF9eRuzDoDZvue56uvfQK",
  "key28": "2J9x6hjZ5e9uNWy5cTihatu2BJw4KDHn6bj9dStwCzs4NKvKqaexzN6KapNczwQnf3RvEdQ1p6oLAgbkEM7BnBgE",
  "key29": "3ccLEh8epYoKZ5LZdHtUFEvTy1YKz4UnYCHwe8bXS1M8xKdvV76m2Tu1gpxDfSSoVxYz55UqmjhAwpVvSvvVm4Tc",
  "key30": "2diTMSTRgrBT4TZEHuuzZxjkcaj7gQC7dvx4J3vhhAaK9GGwHK8VH4sPZosEz5dbdv7KTJHBzMnxW9RvHeF4DHNX",
  "key31": "2wHamXNfTpiycPA72CLyS73AAzBuyK1oHZK8nmQVdhaf8HjgiNobTkcgLm2Wm9WaRtov5dqWND7KJd89Fi5dT6dT",
  "key32": "2zKgEWfVP5xC7m9Gnak1ocBZGU819DfAjh1G2SKfgLks2zz9omyVdvAq1vHXfuNVMypn2tK5c2y2ZQWuhw492UEt",
  "key33": "tovEpUjWAgz3YUqMXKrheY5PwmoKo5Stqu87g3aDUjpJNhWBZzPoXvuVEpFD7hFZNPBpf16A9aExmuv1FFbefcS",
  "key34": "ST2C1FVhwCjhP4w8QQPf4GiL71jCWGGC8zDmwf8PpNkGyB8k4aMfEix46so1fz73QqyAoQgQYDQ1zzZHL7Abfet",
  "key35": "PrZDnLSirNA3x9s62K8tdxPWKPnzfYvyLamT9A5Mza9A1QsUcjCABfF5ByKWkdi66JPX3gZeBUvagh5Gm6XS95M",
  "key36": "4bxB2cn7zFM7Cz5mk91qJ4kyEdq8ASi8uNLhfNpdokxBpTQCCU4siUGcdg8AZL25EQhiX12fR2HAoWPfCxHWaYUp",
  "key37": "UdJdrjSMTMnrioCxRcCVc8mDpDsCTjMH4ADoAYRtCZEAcMk6ubL7M51i1N7gPtkhXWUn87q14thuGvWcKaoX7B8",
  "key38": "3smuYvbweyQfraM9Ts2N2pYrZoDi1QFZFf6a6DvTm3cQrUc6NN4etpaKjApP5NzNTxHD3ygiPgT41dSTgiNmX5KP",
  "key39": "4ZwwVGLr51k5HwkXcRQbnegvGszuXfJ5rBbvFrbHceEgkFUo7UigfmzFGZkWgfxAYiJy6nTjP7Gf5rTfhYMAeDJy",
  "key40": "53xEfYgs8CBvRCiJtdiscwezS7MtW7TxEwt6mWUMrwetZCcHficX3diuM4CU9AiwF2HHCii4fDRQWZx7rUQ4zysq",
  "key41": "5GS6gd4aBLbkHHqbwBsish6r4qNdd5sgz4GKt3SPdZwbr4NPhRoG11YJcgdckVKH7CG8jjd8hdwfNYVVGudC3w6o",
  "key42": "3Z85meJxVuviB6e8APgZjxW1kDZvg4otkwnuXDBz7p6Z51cA8zB4X1DMgDUy3EvDQyetA1SxBuQkc7cDZ5kfUbsQ",
  "key43": "pzNxk8CKjWw45EmRWVfwMhGDRav2NYVb4zUdecNNuJoGgsc9L2Ptd5dR5bR9qNG4e7tkNT2FsHA5LkDHB19mUHa",
  "key44": "5V3CnyXXqKzMKswMj3AA9x3Ar7UQAndg55ocXiR94kZaMispUnKawmG3S7Ss8x82NaXJpw7r7zBvrjg1kjM5d4Lw",
  "key45": "5v2y4VxvDbjKC17v9iUqr86vvbgAWPvfaSPKGDKAtNaVqP2sUb6YQ5Y5YGc1BXwEVvdhsFHkWkZsSvDnaWeiP4aJ"
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
