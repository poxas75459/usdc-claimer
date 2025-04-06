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
    "3uJVi93WQUSAa4c7inMJZCn2189q9D65oXBcVQL7n69uaZoujorr8CxJy4actms3XDd1UNpYMaMKUbb1VYU5grGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAzbVo9C17oyPPgqHEfKPQKeLbnksn6oT6uDA1wMJ7JAHxBbhYH7w1KNi3v5EVqu6vXDKoehEXYTEuYdLYhwy5y",
  "key1": "56rR4bSRJz6QkwEUR3RxMGyEDFVENp9waoh3TFGWqqFykvwtaJAkTveprXwdStXJTB4yKJLCuAnwo558qEz1fPWs",
  "key2": "5r8TuYapUGBvA6KJ6fxGMVE8bnLZJNRWXzARZ33jKmnRpxEYPPpS5LmaqHRLefvrEricTPiSxyr7iZYLyrDpb8Ln",
  "key3": "2kEUZsFN23Lc2japGsyGsKPjaMAMXwyYx1Y3fCCEqjRdsNAuqCCc2H7nKqFpMht7NMctCPgcKUJxYbAj6ho6efmt",
  "key4": "4KGZoSxYuGE3kr2NFh9F3Hi1pnDwvnfdy2iBz15QnptBXsabke5582X2ZyCyHdv8Q8KRUxcfJCUPx6zBkWfzcGa7",
  "key5": "3ZyD7QUK1i8smKz4iB3GTaqjCFviJp7CedUWn1AZBypKWTuW8rRNaTJx78pnX4Pwa5dgWGJ3AY98n6XtTeTaaHg4",
  "key6": "3Z5VCCLqAdxEDbpupA5w9nJGsSaXe36XDiDyvrK77bYoPPCL8dPG8xWoja8ALrxLbVgfJhTr7EVNaPvF2qtvWA8T",
  "key7": "31i6knPbx3rzMHayUKcQ9495umuq5EB1ownj4apyi62mCqUoNKiwLMV6KbuFH8FtZTDNhVjWxJyN1MZtfybMjdNL",
  "key8": "2n4hH3M1cYTV1MSr7ud3F2Q6HDSbdHsuXkXB1FQnY9W23S1LRCYHYWByGNzVNmn3J98H5Mg8wWchXrEGiVFwg6Gs",
  "key9": "41t9ZY5mK1kDWjPDPbrzp5e1agyYrVLdMF34BWqrxUaCuFixHYQdhiVNf5SpCEDS2AFzDKgjVMqqvYemFy9B9LL8",
  "key10": "4d6zYHZ26FEBRsaF8mpMv2sRgFL55xZwzHERiM48tACjMwnNKmMoEaVMDCyTJvKRFc6pbY5Qz8cptwJVKyR253Cf",
  "key11": "zdJ8RaTFPZmvZKy43TEP4t2RPQteV76oSNMJ48u7oXZSSatR5rSrahNJG7TSTEJmHSsaK8JVPrY94T77FK7QN2d",
  "key12": "5kNAZsWiS1Tms3h6rGGR8e1z6mWEisTLJcQTruhFSikSGdWCKNMG4g5qdSEq8XNSyg7FD1zV3NcNJx3aoJCkJ2BZ",
  "key13": "4mKFkp8hMAAbbGSNT9MwY1zBn3fjjyi75HaAhaMJc23uqDWVPzn2BVLajVPagM4AvZEGnisq3f78ZTX5h5QEcETT",
  "key14": "Qk8nzhCujviezPX8JYG6yKn9RwYGfS4g5ajzMhcmyeCuwdSqFeaz5JsERz1oWBbdz7SJLKCXiRQMQETfdX2Csxm",
  "key15": "2rzgpN6adrM8zqfNuAPuZR8FqAFwk9GgDkxmMjqdeLHgwyZih6ZpYaQyGS1BEWUoHErrbxwcFFDfGHFMa8ZdHj85",
  "key16": "3uCJSmXQRC5z84knUT3Af8LNJmVUkkR796vaREFcgGxYHTzo6W9YgYPVmGqQGCEMfvjoEyc5tdQsaqMDHeg9kRyk",
  "key17": "49g7Yv9Jziwp1EqeWWEV7JE6W5XpF8888RJqZkXM5G8FvLssajSfbsHEJ7oTCCyHT3UkuaVkMfGexQw5Jd4GsNuD",
  "key18": "4A97qp4sgHtqFeGGd22WEQ3gnTJ4kXxxupwjg9PP3SkucNC8qo42BsjpZFmCXsKJFratZ6znSEfkgP3XdwqDKaBN",
  "key19": "5RdpUjZBbS8amFfRJvDfXhF1fAvuWzdKhLmNqV9kuqWoa9gAWq1iN8y3QahV1rHmT8FZKxoq28KwZHyq6PXVXk73",
  "key20": "2W8aE9WssFeiaiqBcWsBE2NGo7MudMVZyEEHaPkjipoedLNvmBmjE4D6xPgQrmHTd7rPDCaA8ZsXDJAhuamtGipv",
  "key21": "sFrPCdyh2ZFzVk7GNJede22VerAH98QuprfXsD54LJTjgNny4gioUgXHmWcvGUmpsC4GonnKuR37tjG9YcdbV4S",
  "key22": "m8s5z1LgsDJQum38TWjgv6uCbyEAQyhnqniDYk2VNLpGRSxVk1Bo5X1TJiUuNMMEFV46uXAAfczzbrka9Vo8kRD",
  "key23": "2bDxubERmZ4odgvWeTDjUdVUHb88GQyspUcZL37YY14175TJNcxSUBEkhUPQJcx5YACbtxxFajjiMh4PNLzh5jks",
  "key24": "3TYmQoZvsxBE45Ht2XSQ8M7EotTVjcJBbeoz5Ux2tfNbhdSCyYUFVDWZbCeSQiT9XXxKHqdLigX5dzQpMxYmVmUR",
  "key25": "4ZQZF8ub4tmNRSuWqKPAKrMoqPTREKzw8AaN41f3HbGC1GpkA1xWVkckQWBDCyHsSNbZFC1EEj6DP7Nczxh7sRJs",
  "key26": "oL3MBMSH2mYPQZuhZ8898DCbfGvNu4KvpwpRXYKAJngySkadwUS6oxa1BDcts2W1Ga1E9LDBCzdbSp5khdfKS7S",
  "key27": "vBu93HERxN9MiLqq9ezeL6StA7HUMdEAw2kHa7f6kbzCnQASjRRi17V9tAbqjdfFsLN1uvBcqWg9dWvPo12FS2M",
  "key28": "jEuH1yMZqPZ9NmsVuPb3rCestreHv6Y6jrNcbDouyi5hdQrZQjsjXSWZX6h9F1r3u2reT3oQUCvLAmyWf9iBgPL",
  "key29": "61DG65jpjq3Udjy6nt5dXawKNbjfvbbqgni2H5NZteXYpm9T4D2czZnW8Ey7KUjsyevRjezw7oF8R53Pajwc2phR",
  "key30": "4dw2QnvGUbu93Z3g7WE6weVGMMJfFpvKg7ccDKzNSsHvnSNpXdQQzVT8dEtJsbZJYoMKthmCF6VzXaTtydjZKwLH",
  "key31": "5sqcp82Cb1niFSFz2FHhaoWyd5CeKJdMihKithwsLU82efg7reRzjj8hMrARiKdDDSojUwz1XrhtE66D3W2HFSqT",
  "key32": "5WL9qAbFxzptR9PEwANr9uDWNhmqmAdRLuQkVBik4EtyYuP8VF5UCRf1pNpS2LUwiHULTAGqy4JLSjy79K5gaEfW",
  "key33": "55YTKMGiuB9tDz883VWSV16zG7VDRcBXFVPv1oCcXFXNY3gMmQmH5siv3u5PPXA2VuY2YZqFDE7PkdM6gn2fY6h4",
  "key34": "wfbbAZR6o7Wq5V21ULhmiQqc8KYisGZ6XR8gi3aJ7NbCwoA6c14MTjNTwyzGZfRsvtGAp7Xuymdf1JpB5fYXdFq",
  "key35": "ZFyLm1Cyp7s8cWwBQLn8iZtRM8Mc4BhPkXDENCXujVg2f8DWgAQqDKj4R57FwmZh9hyQNS8qJMPZjyWhiAcTpeJ",
  "key36": "4XPpf5UpctQPo1jTvCTzvY1xQi4UX9WvRE8WhaSFecseti81ChHhm7Q3cNhRkE16hZfRr3MSmFRJBZp6gSKAm67p",
  "key37": "3gDVXBGPwiQ6AjvKAUCGV7jHQiBj32RZMTw2NPzwFaEJuDBBY33Ejog8uNpUNWKgWssByHTbBYofxhnaXyt8RogE",
  "key38": "3tGeAWQnvhS4EYLFe3PP8UfjjzDNroL17GjVuf2zdLZJbMWwLN3TQd2Y3Qv4p7tT9kSuLD1x9KuMjcLSzWgLAUMG",
  "key39": "5GetNaQWN7ja8ZvkqTmthTCtQsKYYLY8GcVHJtHwBnrdrnEfYnPG8u8Uh6FMh1qEjYxK139CNe1WvfunswxNUWfi",
  "key40": "4hqryYsfcjoKuWqe7pZTeKhCTQoronBuFdeRVYa7bB1SCZG1mbCRARUnG7Ri9KYxxFcfMuz87N6bZJo4GmJYJQPD",
  "key41": "4yEkDaYQuLNscRyx4hrKtXbW6UoXtRdbmGKe6711sDPvEfJR1JSCCQjYxaoCpLUXxm71NjioZyCgZgEE3VAPjJT6",
  "key42": "UK17oCUQbmzyJWdN3MryHbVQwN83cyWXUo9mP2Lp8cCPhTgyafJGK9HFCzgfV54VfqVnZFfb6JUWAqkcWTQ4bBy",
  "key43": "5pkCk6nQKDAvEiTsk2Lqii4VEbakxipmbeW3m2iYuRSYoVCZ8YW43CnCp14Kbqy8QnjWMNcnR9WGRMFjXornmRxf"
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
