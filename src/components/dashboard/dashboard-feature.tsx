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
    "2PpYJ3uR13SnvnVeDLvMvsk1xAfToH8viAaKjc1KpWtYir3cxLZMAxdWygBxwxdVku82Ck6KfoMFkUsGigmGyxbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "242u7gfHvxbFPk2r1GC34oCrjwBZQkX2ZG9eC4AjSrLttYFuTKH3Dnox24LGvaNjuctEhm48tqgcJCnLg2jmVU6i",
  "key1": "5oMS8YwLDoRBvGSZp8bh4KLxPGUopxcSPNMm7P3NtFLDjoapwFJStJ77PCFqww9NqHTLfVArDGX9a7pvJny4wYaP",
  "key2": "5RY71yJ4oRYL1B4VvAUXoT7BEYK1T1FNttUtk5fA3Vucb2TQVnYqLU1c7B4LV66H9znXKoAkwQr95zBNfLG6YReC",
  "key3": "5N9pC7dHmBPJbRzVhwz5dvrHN547LYdgorP9gabi9ZwfsiTTnnN3J129mLFb37XZasVfqoQVa6Fbs3csLewSkid2",
  "key4": "3sKjW2xUdErE1iZ6MXvGfeernyVYrvnXDd5wr9EFSTfAKLWLyySS24J6D5J9MP6gj2gPLuox2bJysiyu9wPQoozN",
  "key5": "4MZzeF7tJnkQTiSykyc1u3uKEcVm5NCQdjvQeLR1nB19GquFyykVyPbfWvMCJ2YpnJALP44PhH38cz7wiub4GL9T",
  "key6": "pR8xMA1fPaL8TXGmkvaUxF1Koy6dWLcFWPBjG6eWm2aobg1fDEa7CzkPrFXyawfAdKSSK2syEEeFzvNCy4xurnF",
  "key7": "48DMfe4aYCHRqdfhsqFy9L6M3E68QU8RVeBkjacWgBLVYXJiBw4PxL61SqX51YPAWEsERv2qXPwByXo1PNyyLZFD",
  "key8": "JEASbs4BoTNABt3PfYgKz16HZ4w4HuXSGjZMD1nbmXRcv7JidXLq4wCGvgNiQFSPEY2ZVh7kwi3q1FmxMbQRfYq",
  "key9": "3rEaKz7ayCUgGbhGq7ZFMKtvJkWdkNfR5JZthvFx9BnEt34AmrG59NX2T3w6gB4vx1w8gLsrGJCr6VGmRzf3Ywbs",
  "key10": "4Nor36A4qfjwaQZxmhaahHCSmPCwH3MsE9xk3HkVQy869fuXUxjc5aN2MX9zXd9ufthcksnKxR9u6Nwmtyo61t2",
  "key11": "4uXUc4wapLKCLd2piiRNDNwzVQPKK7k5iYqivmcnR2z4A6rD1PCbjVH6jDRkUCnx37gj4hE4mBZfQr1TsF7mAy9z",
  "key12": "2wZoYFxvMhUeK3Qej3uAq7AbLUDbEEuhRKPzAZFaXFirgH1t8bLqZA44pHeoesPjx2q2DpQo6Um5KDWUgjuYnmRu",
  "key13": "2Etht1TQrNqNSTHd64R7ZnAjekmKkzH8KwRNEfbPp47yBPQgmSqkmxnK29vKXVS9ZDp1ho8ZxsLyTuyptsYPuxCF",
  "key14": "5h4CFfqeTQizEesMLm9hjGcwdaCLYxfXenU845xXL3deFVBkdwtogKQMeGgLw6uJXjBY2Qt6gZv3yLpuyN7WVuvm",
  "key15": "4h5KbgM4zzd1mnwTKiUhb7Kq4m8oxyzhCB8W9BmwQaoi5nNSJSpBUEJd3dx2CaMH7MAaFwtuQovzuhP83Shs25Yo",
  "key16": "GGQGoj31kaBmV4AKZpZY61k95YuKAw6AJzHvsACiZhGUddfErLa4mmwMca6SCyz9n3gPKrs7bTpkoHy8P1dBJuL",
  "key17": "4RFWK5fpwKvesnYaaUby45MkSUG95edUDaRMRgs9k2rqhDpUxESNUEVdnqMEjB6tyPFKasqwPx1HbEYRJja4Muii",
  "key18": "37xCQKeMdpFCHhX3djYrL2LFf8Vfeoj27U7agA95AzpA479Zcy5fsnmfwGBefC5KBpHcTCQTKJmh9pkdRtUUd9P2",
  "key19": "5KeNMPqMWDejZ3aCojhYkSp13FkKn8KgvYDRqGnfyqB4de3QStTzGMADiRGPrXPgnLuzMTTC1zipmGqQDnEj2VT6",
  "key20": "dctBroyPyPEyNmurWMAdCbakEqQ3zKyraUL985xPuqTqB1u3mjcPRPjC4h1TH7CegyyQLdCpFeRGCGLhAbrnsaP",
  "key21": "3dcUDRtaMi4RFrwLui4DA4PNMcLGhzwy3zhBWN7sc6vpajpA9BQ4H8FmWNQ7bmFsN7mH2NMpNwsqtbdhzsg9u3aM",
  "key22": "5PH8M4stHKR6tBMqgL7SoSk4zVfaisdzvSAvKGsLq1NpbdYBLNasbJMgep3LQmSMG3M4yiUFvn17wxvGPt8DK5FK",
  "key23": "5Qziyoy1BhM8V31CzTrsjqcndpjX4bPQpBSBFAVxN9BXXxvJ2WRHkMeHxPYcMWxUvz86XenHo6QBEEiJWQktmgF3",
  "key24": "5GXwzgyeorhP1N3G1dk8bQVRftVtD12hKYngUiigABcQVNR7Bve6PeCo8K1hvvkcEk9TBwBWBoUkBUXH3ZBiVsUr",
  "key25": "kjvHFMoVroYKbLD4sJZyspypBDVv4ibMFhDXhY1FFnC2CDHiAvsJiGUwGqAZMhEQXViyCeZsxVTy8nAYm6WPRCm",
  "key26": "3Fz52zGfcJVAUv1e2SHZRGfHCoQjPEqtVmfddP2hQqgVj6ujew8AiZfGM851pLB6CMbeeZvj63B8kcUM5Y1Uvrzf",
  "key27": "2MxnHGAdAZMkydRwQqqnCydqVU2zXrVzTTxJeeCCuF5xhU7X3dXdeqnZcdF3nubRnk17jpe6a6zTotX9NqRoG5D7",
  "key28": "5fFRCJoWKTYuoQDmLiNCizwwb6GUuJjHtR4qkeLYQXRfKwewcSBGMvcLfSNTTaf8CADpXiKjPdrGaxi3bfaGa9nd",
  "key29": "hL5RtxedVNZG8dkPMu8P62ZusgiDbyxCW6cxsFFLKj1n5VXovhNBKcHiaRVD2puMyUvyua5Ck3198Z4ayZzGaEc",
  "key30": "2N3ANCQEPiryxJvzpD33k7Qgvr98ECU8d5LswqfQyFs5FHAmcKyBAmsrXtfx4M8uByK2SBx4BccULpd6sNyp2HXX",
  "key31": "3MjmFnQh4T4HkHLqsQgyEAoWARtqV5U6eGesF9M658jwo2bV6XHaULiWQvrYToURWTKrsUy83XucnXyFdrG2TNuU",
  "key32": "3wb86DCuCbQ4fgBqdasTkpdQbyQrQoMv7aDcqTepZQuZ8XFwmXt2EtymmRePQiqm6Y2erX9FYEyjg3DoyU2c5Kos",
  "key33": "4JP7JBvAi3vhJvZyMuj5sZjVwySpg1Nj5NM94mCiXCMqT9Lqu6V89rZcjrjtQ8QQfyhpCe3fCKLtGNQen4QMvzha",
  "key34": "4YRdespFSbAvVgFkhrVAhLuxFzno9FCc9whMuoTohA7sU9KsssaveSDJfX7ZuueBYSwbkP9tqcEsBvxLhkgZLrpC",
  "key35": "3LUrWqt4pzEJhh2A5RzxTReCKG6jYX42zEz9f3f6vu5JsCJsqgavCfiyEtRusA7Twgvnqn7J7EaMMSXWCjjd6Yvv",
  "key36": "5QGzormxjPefc2a2vBo6XKX6r6YB5N4W8JjGtHpDQMXjwShmMjcWZNgKTzin8UfMwAjTj7PcJaNV6a7JvWY8zx6x",
  "key37": "GpKt5ayNbV2npD67xQxfsTVFJ7rGEqtF4xZPTETcAaLV2zvMVaGmFVjKBACMjpgLFFHiK4LUpN3vFQVzKjQJZ8Q",
  "key38": "4mRsh1Y4uFrvzLgLCMVnqNSS6KimFVNiFiTZbeC7QrbG3bWHTAEQ6YP9ftDR9UCvdTkm9cKtJAkiGBCJpbKF2btH",
  "key39": "bpVVaCusm6vNZqSdwjm71D46HLWXLfk7aortr5E4VrKHj133md6HEZA5UfW3nuqwXah4cxvMNGCHeoaxJtxBsHx",
  "key40": "421E2Uqhs6T5C5YN2HhVA1BSwJHr4jiz9PNAUpRtNBSaxcpzgUkhbhcYC2NDgjfZRfrNr5otQi4dG3a1gcfZgR5x",
  "key41": "RcbdeQwE6VPvCWa5AENxGkaZfq75WyzqHPx1M38VYFBMafaRG8qFN9X7HpRvhGYGd6JmhMJhhgD8hNgjVYbNb9w"
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
