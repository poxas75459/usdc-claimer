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
    "4jcMqS7Azhv5rAYivPGWNLH4pyy3Pg819ToTp76nUWVcPZjeK17jPcnA7aSBXRqUjhHjeyHU1CF8cxedLRvUYoWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y4F1UJXbUpCH48Q29SdFKv8yd2ChGpa9dhNBZY793Dzy8CpqHaFcRMrjb2keGqEJVaBoFYc5CJdZV4dpzrdPHfH",
  "key1": "3eaK2xtwUXw4cto4Dc6F4MrEAV1K1ZqpE7ggbynBkpENfD5jLNQVU818DDoEpR9mnhgJ6e1Prng3S3fFnX6tz2ZW",
  "key2": "5XSjdKNJVdAsx3iPgFmjiVC6FayzN32S4C5i8cpHccxWBtjFr7PDRzriTeceosyioyfpFaCJ3BHVCDKp21RoUTC5",
  "key3": "pT8Nq7voEih8YQDmjECgtSzFbxhJdsFqKaC4MwJGugC4wfsrkqcRWtseZU75fEuvkNM4CAcv3YSQRCUBnnn4CBV",
  "key4": "2TsH2Hvhs6PHc59GJtEZnk5nAMimBfA3Ja4ywfw8CRqdGMw6v5TU7h1zAENK74TksVN3tp5KmCzCuyMbKf5LyiYb",
  "key5": "5yjvCFPT54w398hyWPUj2i5ZErdKQaoZevebWQmEncw8J8PchaF4SBXQPiWZEiU7ayqBNKTrv3bKCJNCV8UUXuaW",
  "key6": "4azcpuVBH7CvJUTso5jxF5jTSbfiLuQVkNQJBCbX4i4enRQ3csjPw9Di1hFhrD3nJb9pHikwVw4yawqmT9uMMX3A",
  "key7": "vsKtvj1qUcDmyLxf1zq5nhBN1rWKZHGN1YvPyoamLQQ2GiH9UcKeNu4PQgBJEA5nk9fV28bL55fiBbzerYeWJbD",
  "key8": "1qbQeqbrGUQYNT8DyTYDZmt38GUZ39rC9MkVQt18sxgpYX8yuBYZdsBpD1Xh8idd33nP1HonP7539GnrdNHWPa1",
  "key9": "5oktVUS3PQjn6DGRdrt58jUu4XASnw9oKxb2qE2PLr2LGgoWZ1YvxLg4FW82SNtWMtZ2f6v69hXeLzWTg3WQ6XLv",
  "key10": "3uuoxWmkQvPRDoS7gbtueYqHH6zswVPN86sDmb8fS8TH1bc1dfHXMMB3tZt7VEMemFkzcDYQ5FFWojDyY7Yqs19d",
  "key11": "2oHon6VC53ogT9ARLvoMf9RLcDhH1CEcRoD9YajAQ8LUYQAd9SJ1TooMz1Jsp495nxqEq8x8ssKaSoKwtA1QfyHL",
  "key12": "3oczprdwmb3koBqvL1npxABKGU493dQbS5ExRU8ycBZdrY4vQt1BthQ5LBtcguD84bt3VN5jt9Kh8mPXaJGmvDbT",
  "key13": "673iJep2m8E9UgTsL3KAFvcyxKLqWEErAJwti3SuMfRRNqykpqK6EKnnh2kRAvRrD7CzEuP5H48DuPFGj75Q5AS6",
  "key14": "4dCUj6B43c9ako8Z1Y2dAQyQEvek3mgycBN3xVzsiqtTea99rbvFTyWWJJn4kR3SHt1m5dsLMCb5fRRB8bGvWjsz",
  "key15": "4wKeboj52MFTvgzZVZMLDEkU7rKZqQq8nxkCUhmz6USfE2inj9oNKBmGKt9nC4Xq3iQ66EtjLtFe26PNTc7hRs6H",
  "key16": "2eNPJeWd1k3wsY1exbGTJjtBmbz8UiSgmAucztGcdUTkwzDzpXypxcP3EBLQpZe7SJLnyKoBLzom7GxkXbSiipkG",
  "key17": "2yy1xnpmUjD2Kh6FdhJvb2G51uRA5eVTDDnTd66L2A1f593Zmnem4nKe7HeBqsFf9734SjfB2VxCeXMXSbrpwsmc",
  "key18": "5K29VPGDWb3Y4QGibjWjpPhAND3CLjc83DtBnoXKk8kRnrGjvJbLgKPKpiHV9NHfA2vYUv1u3HFLy5qk4QE4pZEw",
  "key19": "3BNA5vTBKi6reWDRcTCoC6cPhmkhjJWMn7nEbLLKsDUh4pDT944kLiVgCoLM5S2v1KaTXVU614XuYbSmRw7zudwD",
  "key20": "C71tBnzzSATgWoNtmijJNq6LePcjRGCRkH4T9SK4Mq8LU1Zu8TqnkTfZ9v9NpDa12ZE8gND9rcy7aR4Y3QKFN8b",
  "key21": "3N9PvAYvRnWdnMKBxVbT6A8s3ewkUVnAS2RvXKFLGshuEAVwJK2rVVX5PzaCLpZ99f6F1KsMjGx1eJtLGQWZf13m",
  "key22": "65CeqMsZEMz2j6d1KdF35oBtLFyLwnBFavZwhVALAMztBxGKprxLTa41oed94uG9yqDV3zHChqjabQABrerjaTeK",
  "key23": "3LH6JUwi7nsmBnZgdeou5L6Cxdysa65vcrNEhfBygircn47heNRZsn7CxSLD62yTgqXTWSMYHVv3UsQFx9QKUdNX",
  "key24": "3zarGvRvYZuf6sAeE57x9AMr5CQnhNTcRT5gfdAqddAM8Q6bGBznpBjGjJAvTZZZHqMUkFG1ivz5W8xMppibW42J",
  "key25": "2dTbRQ39X5xaiNATuX2BwQewdK2vBSAcGVURuQYjsRf4aycnbYdA2sQwcoyhzMAEDNgqrhmAYy6xhZgTtQUaB9s7",
  "key26": "3cRevsXSiDGaS7gw5KiH57KupUvAgPZvd3SZ3No2Urz3qkcGkcnuDaHcyda86nZv3cAtHCBB8DMWKyEnhTCvecQW",
  "key27": "3FZtgLhDSKbhi1L9Dv7ytbWrYrdiSnRuXxG5kkKSTBXMU8Jh7jFdGSbP3CLsX7DARUbbDZfgrRcJy3q6eqkN9RoY",
  "key28": "48p1ce1CZPf1zz78c3BV9pcxejzMsrY8LgRa2sVKARogPPNGW7HabhN65iFFAKo6QPRc5y22NXcLCq9dyz3rmxez",
  "key29": "5t74b1PrYN7DKt6HTeehChbU8fMZ8kPMBh9B1ZSbS1GNFi1vz6q5QzxwuVFDU79C3wD7NkvJY2fzCkGJU63HzwoB",
  "key30": "4P8qK79bMVUTwudE4CWRkiLfvgJu9YP1zYEshTps5woTMqVet12eheadMYSiJHVCsrj68gfCs27d4QvMvuxKgeSC",
  "key31": "3um3oA7bVqcNp229VJFg5wX8frxX94Goy8n393FZirbaT8BawJdZTY3FG9u7qsETzW5KiDqevLV7FBeQrvwJWqeK",
  "key32": "4gU5T2MRMTdgdqfDLSF1JW9DUaSygs815oVHF2WTeXppYqjxVrH9TKuJK5FUkrn3jwNZhWv313dNkonMbqwHZXeY",
  "key33": "M7vfmXLasQvmECiotRTpC7d37EEcsuECJJEv9GCfgpJJHexuXcNm5NEtp6kncag6k9QnG9rRREqLhDG9D4NiyP4",
  "key34": "L37Gds4MZQSFFjc3azKq6BJ1EwZhv5VEqyFjVyaZm5XDtsDEAMbPbNCzjq1RLMeCk4f5vB9UnGcs1aoXGCK2XuS",
  "key35": "2FkW7kvQWJp6buoEcmRrSfGLyAB6hJuSGXVVcZ8pEC6AvpX4bi5sxABRpkjA3mcU1gWMvf8tuATCSjmwA1rkvdC5"
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
