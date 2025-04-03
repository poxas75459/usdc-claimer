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
    "4XNbL3heAvXaz8wNryj5eD1aopqTeZTsruBpswgWpn7XqsK4GJpJSRnCjbyKa6MkqYTzr1QKycTXxL5gCSsNZ91v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KNRx2bmoBvvGmKJyo76axHNHi3QTn6EH8rEF3s9tad6uwz4oYJJYtSFPkFJJhFbL3EDNyQo1fEgajWdcGp2xTrR",
  "key1": "3EZPC37Q5fnTtuugHaYHxvqKHZhV2u3mSZ17rLMwYUsyapi1RAY8VHa4xrRryFQMzVBfueae8ESAQRe5J349P3FE",
  "key2": "3zK8b6vAb6kD5seh2dytmzkXU7EFSEMoQEsCSKRxDtbgVx7UiMXBSysgQtbjahQTY3gayi57upec2J6NNNmDXcJu",
  "key3": "2q7WPrGLLmnnxi3pJkPwaL1zC5eKDRbrjWedZUfcK3epsC71k3Y5okVV8pEDgbEwZC1TETdgyqH4kUyYjBuKYPLg",
  "key4": "53LVJ4gfZc9ipxiKjCimgDw7StWZz4CwPTeR4A1bFDVQhHFHivQjV764yrsoDfki7GkdsvfTH1ogwuhrXGvZs7ob",
  "key5": "4mAiACRgA1DapAacH41Z8TR3KSKyxEfkxRCo8eS3qw1dMVtfnSZ3h68JoV1ZoB85rMLUX85pdVzwyJFsZ8oGqjoJ",
  "key6": "4iyHDbN7uet3AZYJdReeZF62TDdkCkvaWKQEWfqxKCfbfLa6iXBishaPtQqzi7ff38WwkNZXgW6HRkfPucdHAvZB",
  "key7": "CuvSBB9epFN1sjMyu4kmESwQ41mgyA16aPW1sW8FouG9BaaWK6wQxkJzkkEFbSMkjGMQ4gNRFi8QPT5X6rMRP2K",
  "key8": "4L51bj8rhXyRyQX1MqVhtcUQ7UnCdqioo7pggYJPAhGQBjrVXqjEKJK9j7e5j4y14sqN8KXbA2Yju5iCRhPw2981",
  "key9": "5N2BGes9syAjVpK5DZoBJtt2F2ULJNWu8PQZtnwMvoAY5meDJxpYoXjFKjsZdS9KJKd9b8KPnKWjyqCoG6oZoFJd",
  "key10": "5wJK77X1G3GyDUQJwoELttbEbLF8iuyATYUb3cMrjMmEaiD15WMqgUhq9W5Z9YNEGbHP9q3qaP6ecm1RKdAkUg4N",
  "key11": "5PFwn1dxeM9Uhdv2nNc75v1zA3VLVXdvjSyLunukj4gp5AtSHDsLzxCUfQ1TLhTsi1xqTCzLYKkkaW5eFtCX82vE",
  "key12": "3NxSMH4BoteXmwkmSaoCZ7Lyg6ooQwfBHbXrAoGeV36nJbEoay2hk1fAzQtMA9KLf18hPdgHsTunXibHvaAHdZ7t",
  "key13": "59xgd8s27Ffo5gX4RgkocSiAgBohp78wAXvNMerYc8mrg2ZZbjrkMagQoeUB5EwzHKxYm7gDmxpXF7LzUwmNKduU",
  "key14": "5pm5bcAexvwDtBeUEU8awMTFos254RD3qbZeGBEqbmZVLsYU28f6YyhXcxM5U8zddSDQov5nz9dEmE8UqCE3U8Ps",
  "key15": "2jvfx6oDum1Jwg9MGMeXSoz9WamZzQiJgosmhx4Kw7zkxo7SxxYry9338Co67QnNED53jCV4Nkj25AzbQcSC75pg",
  "key16": "3yzcgT6jkk3h8sCkaprV8Ry9vkh7cRAwi5PFP1wpYS3RTFEWm8bTFLfK19Y39aixUQxAQ74WyG9vfbTvgUYZCJRk",
  "key17": "2924awFiHhAC2i1eRByfqup4PCzvAD2NUau8cDexM6bTeE9Egz5QVtxjjftHPXJU8YcjJbedgBZGxzqYFoJYxERh",
  "key18": "35vC12agjcmifxdiDof2m89RbaqEi82LizcwL7bPyTFLxewYUN8NU57kvTrL1yD9EvyvGt9jwvAKiVsECwDuvoJ6",
  "key19": "5KYfH1vNL1XpmDZZcd19fCQwnM4bCKX8mApKyZnRPxppRB77vnsPugRkuqV6aBA5FYwZjLGFjZUU1fWhYPaYbf7J",
  "key20": "4za3uxkwBXWVMZbd3QkpXcysezEVPyCwymMboofVi5n5SabMwVyNw66Yp2NxTnFoMG6mMGrY6F5MTk8uKQeZ4BFy",
  "key21": "5UmckJ2gT95pCdKAUyQRPX3PCtXEcih8G39CsEC8JY1M6f1L4MoHaYvD8aVBSGQtKc3PCWyTgKBbaKmmV6Ycemo5",
  "key22": "BDHUi4vHE3Eqv7djGkwygYAFxtJ7rXbPQCHAsMMmTd9aReAAjJkrTENMwwc8WYuWf2MbSqivMro7z43FbAPhqwS",
  "key23": "2vLoy5xLtXrqWMaMqwhQ3WVMFtFHtiwQAKVf6Y22sAX5bGrs31qdVG47wRVVGuG6m8MrnwMrSycUC8Gbd1Qd7sa6",
  "key24": "5jprc5UPqozpVi5Gw4Bk4RZH8jXugJVMFEChGH3Axzcai9PG3FRB9QGpG15pyYC6QaVrqQVkKUzpV7gXUF4nePZB",
  "key25": "7m1D9ZnNhQej2kJ25GPQQXVse9X4LwewdkfPVW4KHyDyUj9pKfqW3iZ1DK959dAA6RoPje6tANeaQDji1Dnu8qc",
  "key26": "4HAVwonrqcpDdfZnYFajA5vgQimiss7dzCCkEuCrQ65JmWs1U2uRxAHPt2piuBTSzLSMJGSGWPXpevduWWcJA6zW",
  "key27": "rM9rzxi2AhpGEMVRdMd9GdxGLrvJokdA6Tff1zPDPLcV4WJL5T3NrYFq3ayvXC9KJPxDLy4oSpFrHaVy68YKXUq",
  "key28": "2W6eWoR9YTkknq772gy2BhsBYSAUMzBkKpTcaUg7U8NEc6TkDqErnCqpsbwuWmMaR6Q9oAXPm7phtrjyRt4aa1ZZ",
  "key29": "4yhwoL8gM4ortuLoSik2NnMshPN861YsbWGQKqZLE2xKXRXiMZXZXVKyNF3qdTt2UMiEn4h9kwaRuaPwmT7mvH5J",
  "key30": "4ZZgyhk4Mjrt8JcoSnX3s4rXcTgbpYd1XV1yatpS7rqyxeyPcPAgu7LWFDBiikKAVTCPUfbNQ9srb5Hj9H1SSXYA",
  "key31": "27K3Xt21UmkZBJ1MY9kyB21dijJZ7GgxawTPtx3X2dDYWb4UX8wgJJhdRchiyRbApSMmtvAtMuDR3B7a6RaWXC1W",
  "key32": "dFnPBKfYwEZRP6kC9hi8aMmVzga2kzGC6siUWsbFZQsVh8Wno3idenwE9nqiXFM1fF29bVS9AyRtbvrvRHsb4Gz",
  "key33": "59sWsqvXSzYWhuhmbJtzdCpiwRDMW3pQhkKhDccPvKNq6uZofSxrVtQMnQ2Px1qTS1QJ9N8JbegK9SskzsjwxM2d",
  "key34": "4x8NJvhsbe7jn3BLEGervX9ZHg5r7wNKk8TxAMP8BDEUsYxAsB3xbeXhq6CwukjfciGGGz8CfN4HjMiE7in7jgLs",
  "key35": "3F8jmBcuVBdyEyUdYxdBS4ymrJgQSuMTZrnEEAHvXM23QdqJ7ofHUTGdeowydazVrFr7URo4HTwNdzE4MM6Eo1nG",
  "key36": "EyN6kkRHjw6REkvNDpdXwwg6BrPxPaQpLwFA5qSkw162yaRfRKJdTWB65eUhjbisdXuXgXU71nCzgBYgtwACnse",
  "key37": "3Kv1KSPFNp8p28r9DXfDT6S3VidgTp8aNGCCqRgPWhWmG9i4GjxwUXvi41NaRdqZp3Yt3ew7FnyvWe8A24Xx1uXS",
  "key38": "3wjqNcxUf3LCXhJCKcNELFch4LZPJkmy7LKaCqiQT52pd9dcmVQwQmxpm9kNhVFPzE3wMhUstsMQfmbEh6zWR1Jm",
  "key39": "3pj7gE6VTd1NVk5d8CchcaUgD8h1Y122g5ac8dT9KqSygQCeRsAA4Fb6QknLSR96RdGogAJgEiZyENtEiQG5HTy",
  "key40": "61zNZibqFqtfGJwbLTLFhjUo5PBVoYvyfFYPtA7DwqzAwi288yrvyZfLRyyXfkqi9G3PmbbikaeGZetngtuSTBGf"
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
