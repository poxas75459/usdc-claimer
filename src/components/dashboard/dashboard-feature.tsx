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
    "5W9Q6ScftMCyMpckr4FiMrQN8spjkRdZXTsN8BqRHeXJc9RFEkQLRDcaSqxzNfJWwZ6DLGaBkhU1ej6KwR7dtAqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7M4CujmkC7r3N9qLvaQGbXwUG4UMHnKhSGKioksuZ4u6mpf7qazNUNmx29SUqi3qRW1jc8kJ1wNgmaMW5bMAXB",
  "key1": "3viHNTjobMVTwU4DgNAWc68m4bTArpuw1sckoPob24KmAYPNCnhzCW4QZe4kbLgGAeEWU64fuo6NCxvny4mK9vB7",
  "key2": "4rLJKhWp6hHPbRpKuGMp8qsECCDdM4qbFaWNroxktEnvHLpqDkW8vXEBtKntTfSeZea1G7vWHx8vDvkwCGuP7QQS",
  "key3": "2NTJAEx76kjFRjL9mr581FCm5Kh1SFM2JFMukKt9vEnwAbBRbWeAxR2MNgnqKUsBSNpEd8soC3PVMxX8V2DmoZk6",
  "key4": "4rQns98EymQcgpxubB8mAvR12q8upyDFkQW2H15r1VYgKj6fD2eZYKqN5vM57TDGUg8NzvXmJbT3qF6oLP9UyH4c",
  "key5": "3WozGxLKXB3NDBPGEBcxbgF6Uffg3bMXnnfzQuWN9csrZHCRA7q25FokK9qa77mtW8X6BntCpAoXHEzz64hskpfF",
  "key6": "4QTf4kLRBJ9eLSciAWUwEQcGxejVuKzKK2ptPWbCpTgqo5Gbao1j8aypVJUjQeNnhQ4Mrvo8VQAzSYB71Px8u8nX",
  "key7": "4c6udkwFAGeb1QNSaVutT3uqGaakhsTzEKLwwe6tUKfzrgX9xEr2s4sa2HJqhHqtsxa1sXJyxpUuDiJFhN3PRWAp",
  "key8": "4AP3c7MTTqQf9S94a3jX1CTjdfeM5HcrSUJ1ZD2imU2VwM11kYyb95ftKe96BBXVXoGwxTfHQRwuU8n5g5nnQFgG",
  "key9": "4ypViCDv3U3y6VybgRqmwVkiwDdtwadkciY871qmZYtcse3d1Lzxew7BiyxhQzaFgaPoKrzAhBAcg7MGtyF53bho",
  "key10": "47MgG5QadNfhjdPuuVZXsdks22ZcrjcgCqL9aoX6B9N7FPEAoWe8bHj4rma3dYpfsurmEdyx1HFqpFujL7waHX8U",
  "key11": "5UsFxPHHWFxVhuLQQYFjRiQS21qCJrZjQfPe1hvY6AS1tg3F6TzLjnsVrczCJqVpSf6ojpU6rvzPcy1BB1VcnKvn",
  "key12": "3m9D81GUbXT2R7ysR3kk29XR1htTReLCG8N6rJJ2TVQysrZkBYEaM15cFnksyeaKS3paqovu7jUfUTYSyUo67b9F",
  "key13": "4h43Rw8g5wgd3Pv3jmF1ZhBbLou2JTRjV3eqnAEZWyza2Ni5jUci7bPWBFnjHo5i421UuwX7b4T4xEXR8sdMxUGf",
  "key14": "dqjFxDTak7EqchSyV4GkbPzssyxd3BMuG5mr59hUV9VDARt9vwMaPWD9W8FgoZhMnfPoKNdEBHgAi5P9cUb6jHs",
  "key15": "nYMdPJZHjn3UPMXpuvvodDhEDVdQb9kHB5qxUeQV9WtrWbYJrPELz5p36rEHjYjrMwrRNgPfnykbHXktMAhnKJJ",
  "key16": "3CgUNcF7z3AA6YA6SkTXpwuM8MfnbFs3135RpeBchJhLwtKsijkic2g6A3UYAH23ztxyzUpKhKKTSKDDdvbmqUwn",
  "key17": "2AJiw6dVU1UK8QGa246mxZAymZx6eM37T86tjzUJNB3c2gQpKEJkGQh5b5BPMvEsjPp14YoK4CaMRejtqKTkatxZ",
  "key18": "4JF3NAXt4p2MBomXTgHTaFaqpqCKFzoLL6x2TYNcf35MjkGZ1qkxZ5LzNfyCwLDuYhdyHXbvApWWvwpJCtCTVb4A",
  "key19": "4Dein1kmReYBQYRnW7PK1fdfv964qAjj11C3F59yzocnUk3r5udwAxWr2D7B1ZjX7YMgyMAnqSrRAz1Zm6URKvCM",
  "key20": "4Red5Sf6ba4fbAt98LyGpH4uUyRjvoLvMASxSMjjWM9PLoTnaRxnmocYZ1Fb8x8iio8cF1EEt2o2CPLdzpWJTnkE",
  "key21": "5unEWWw1KTKtCjsKwfgHd6Mv1XECC4Zc6UGUPvnGniBDc6JttAWKn5KdYmPu8NU6VQR9mEJq8ucVwCBqHE8DhXDw",
  "key22": "2nfRXSsqMAUWR1dPY1uVjnuF74oGXsw9hr7kVr57w5AoacuCbm1Wp9Xmohn6dreZVeKsenXVXeaJgwxSb4qLMSpX",
  "key23": "4p4sSiFhTGxdxp3JNmMY9d74JSWUXasE5GAKDrxgmVHHpbZD9huxFPop8594MX3Q9KsqsB7SrLYTTnbFstbVZcdb",
  "key24": "393GvhhLVXctt2Gc8siACbrsbrEJPjiau3akrmAmY7S8xjmtDtriGV8qAv1JmMSedBQmCwvW1DoHx71e61PgvnZ9",
  "key25": "5daScevcCpjgRXzvDjehYgZFZppvJDnLeKM6LUSzheTUUw1J8F4kb9xYUvRWW9Mk4Dbv5vsbmxXoDRj7kivzVbSP",
  "key26": "3JE29f8Cf1q9XtceqvEp94mrUuT2suonaFhpNsQqZef48zv6CyhfGffNmt45MRE5mrriUuXUZpYNAJwjFbbbVPz4",
  "key27": "2i3jNLerxJxDvh4KrxqgRhBKesbxMn64unKpuQmghvgzQZ3kFottryJYnq95GAvTN6Jzxuj6TUhfLaXjCTzZRHHF",
  "key28": "3J7SfrtX5yDTj3Jfe8C7ZTxfpM8qabeaxaHXqHgc6R6mKoYwzznKUa3WEH9vfJFLaj4zQnnYAqngwZ65myotFtV8",
  "key29": "48kyBuTizijw3eQZjpP3LiDHNznKLp64RrPBRPMqZxfAP21WR8ee22jpFyDyfqfUHXah9CxSiAxp824cR9LPfad8",
  "key30": "4XdeXftT9h19bkVGU6UqoRpkkZvpiJnhMQpUWEvv6QxYPzi6VdqGw2fey9mMMm2aotrL6SkUrrHn2b96m4BkM4ZH",
  "key31": "dnoi7jrmsPw7nqHh3saSr2eELhd9hrgzFWP4SzTCmhB6jTYMYJhi5YbLoRst2etcmrGFi9LjCCzK4rYNfjfei2L",
  "key32": "3wjypdy7DB33CUyqvY5m4tZ72rx32q6dhcs58FBpWhpp6z3dTrMeyyYJ83R7ojAkhwPXzUwk5dRwLYE2xK5FUjFM",
  "key33": "2eEZXUS8eJADrtGEHMJoNBvs7GkouJQpqxbRXM36ywF8Hy6w4pG9abNxR4wkaqTVtovpGN447QoaLBGo5H5nVA4V",
  "key34": "5wRvfG13SC8Q7M1iz5SuHAPsPnvDEK3i4n7raWkofegxtwmTKT539cPrVXPyjh9ZEppovJFQEA6pztbyk2kwajmX",
  "key35": "ug62DZWZt65smjKFSNAsB7FqkG9DoSWPnp4zDZk6Cn5JQMcJEMErev98iWGsuhvDJXnT9LwX9M67eg9B2fbAYDY",
  "key36": "2Cd3VfWsoqiFgUtSFHRZgeqscRLNr2noyeY74mcDzSqtm2V424wv8BeJTiZnRnJvRxd7Xo4BSdVBtNq7FWnwJ4tX",
  "key37": "561GtQ24cYpoM9XLwdJTjbR7N1wcn58w8M5q7UBu4QeuYTVPoRMJF2JZdMxkRS9dnV64Yhe2VbVnqciqmMVDQm34",
  "key38": "2Rv55PaJtnynkUKk58aJP4vJNPNbg5Zf9nSAbVWwUteMdG3A4RYCWHwL6TDpK8qMMi212HmkEECDv8oWRRucnHiZ",
  "key39": "cZjKSUFxhUKCKZzBjA4Akv8AoMMr5UohQWzhopUYPtSvE9muSH239djHxtRocunTiyK6K24pZNhwjLxMjckne7J",
  "key40": "2G8vc2M33NdPuc7wKjuhjcWopyJhjvbWwD9C2KSREARhyMcxFwoocKnADr7s4wQqtpoNErTyHrh3YMmBypT6jQyW",
  "key41": "5iy5oTK4Z6CVUJJ7KcYG4TamZ3JhntanFr33StjVqqWopzrU3B5MFZFzmqzQdGU78kYM6ReDZXpMBbBzexgwdU1n"
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
