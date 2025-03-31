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
    "4R12eZrZrGLv8Uy3f4FyBdfvYeWi1jXrnET6B48Sngrvid8tuzKN9a6fB432niESJV4u1QLKEEFZBHK9SXwbRqKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWPoGAjkzt5iSfBSeftXYkWTJrKURKKVvCKDaatF6GqMTRuPFNE2Mntz3CnhqhDZUSEwLaU51e4rKhDqWU4yrsJ",
  "key1": "4Y13azchVEYXBVhPcx4AWuhABPopDC4KP1GuYjMcp4Kw2Wes7qQQUAzvGfZhkTPMd9Kcu9hKQVBNumtdVvoqvkJ4",
  "key2": "4PSnqjjiSo5sHzbfrdfAjCDNztpAsMRCPtX8mbyyEP3RVVZHTAtMiSAwcVA3tvVJ1gM24pcTYQxv2zStDBB2VaVU",
  "key3": "3Z8TgCKPyPHkxb3P5GPwigRGweKNENC8HqqVz6kDPVW4KHJWmrgjGvBYsVWhbYZfptr5zHQqcTkb8JrwKya91Hna",
  "key4": "37o4arEXyZAAzC8MuKuQga6tNfJGDbhuoxLeboGCW5YBBF2FMHZpB2XHdvYSbsmsCEDzknevmT9eX7bLQq6fxW6T",
  "key5": "JEmaDRqt9NS9QQgCGed4grkHWNX1c1dtT1xSJQuyTN97NQFyq4V9XdGTg1rNfNLSxCgC6xxJEm61uVGCRCSCzZv",
  "key6": "4Pksy7QwkjGUoxg9TeyttjvctXBDGLZS5kqoYVpyATS4JybU5Pi3V2fmHfSfmrK5epviQBrZD8aMybgddYgjfWWH",
  "key7": "hjDDvsd29yaBcAcjCDyoPnYdYUbWu2g94dx7X9MVJDFjFm9rCTVwdcg4ShWAuir6tdTF12ZVAzzW1ZWXRKKijgG",
  "key8": "37GzMmiNp8Bmm4EMDYcrgBSjyftAvo6h3dmHt7kmBLwYYGQqchZCVeYifPuMmBn13z9e1Y6UkoXAoFdyZYpNE1kD",
  "key9": "388UpedB1YNhbhpK5wRWwLbbYeAcG7BM5tNS6hshMwC6BxxfC8JUP42gCPGy928wudZdsgpNJpe7hGrx6TM7Z219",
  "key10": "5yRbhsMUk3qZCPmkHyQtxKaM7FNbBqsGFP5q9gZCnKWs45XaqkaJUupBmhpfMtZ2ojXYK1FTyQPmKuwocxLhyVgZ",
  "key11": "2hHczfDJ1595mzurKPy9hbQvWSNuNdNiyVqUVyGGKdmmA4EQKhZm39tbt8zT98mThgYcSL1XNaMBJVxomYPrEnXv",
  "key12": "61cxCjoFKcnjWGDNyDJDjkFmJxLpvUoLwwG4ASdGsessockBudATohjiMQx7cCMumnBJ6Uf7QFhi3zgyJuEqes5d",
  "key13": "5HD3DFKnoLNk9Bt6RTAyahRSCMVKGN9xVCDMDrnSYfSRHcbYQo731dFow7DGEzwQ3uB6hvvKYtC522rKF9Q38cJU",
  "key14": "3HXgCfEg4xTiGbEbfUJvDQm2j4oZT6u649Ke6p1Gcao3YKt3dnFJj2TUEhsDD7qrsGr5jvt6J6hbi2jY8dJ1uChW",
  "key15": "66tY9zswyMopLYBUGkiyuuKjM2DcKYGEsRiRZUUwN6L1Riw6qPobTbiUFc8BzesJTgE31YBxWHYCJR2pnTGu8hQL",
  "key16": "5WASabYASf1AVhDYNAyZkDFDsgAyksxucXpEkwgPoTBgBpZBQyYCT3yd2CLW9tBzvLBmb6b7qEKW7Wd8xmmdKEQa",
  "key17": "3H63aqYPXC9LGeMHtAPVS9HQXpkxq1CYHJM8nsXig51FZRqz878xDSHV7dA5exLLyKMHXjRGPFaSbFsvpDsYPASY",
  "key18": "5fhzE8EnttFn8v3kGgsq2GsTE4gqhrcxsReeJaf3XLJVLUAUhQy7TWVHJK6cdTSSdzMn7F1qCLSDcoeuT7URuzXm",
  "key19": "5hWuYLLcNcinELWGLSzHHogdzLibp2QjQZmBxXjvFJcdgvvDLA4jmXMLpNMiGbvJrAjc8oXSWVVskZG9AskymGGS",
  "key20": "2X42Y8zheBTZQ9GUkAa4qYofmzzHWV6egWj4aAHHwmaCKwhvRkY1qReC1Hfh5UJVeRcpRFKN1dvinu6CAaTzNH9Q",
  "key21": "5aiJvhZSBgpr1K14VschDkfmUyDMFi82oJAf3e2coDARWxdviAPYAFohEHZcND6N7x94dkJE13bb2t1e1PaKmkMN",
  "key22": "2k1uRaaM78JMDkJCnVyzhNiP1JY497pMJqpZRYKpKscuMsWSaaeTExewzEtc2oSDMqCSKDcsMB9DDKiUy1RFCXKc",
  "key23": "5t6AfqyMNiNvjJm5cdkTRuzimrH6Sqh5MBtpKVyo9NwxBB7NwkNki28ZU4m1ifiuooEa1jMgjaYUeizB4vgK3hmG",
  "key24": "4GM8W1zYFu5CLwxuQNjsMEf7gmc2A7kvWJH8qQ5F28zER5VLmEeiWu1aq8r1i6bsUfZkyHduhBaQGmz3FyATJqN1",
  "key25": "58FN3wyhciFExJKfEFzmQKfce28qChayCN6oRE3WBn2ac89E5Q9pCkM2iDGo1ywmDMsUWWpLZinMZyo4vvQYvQyh",
  "key26": "5T1iHjwy8LfKenovJnoRmb6nKERuaMhwtFHQLcN7F7vddRxHJBAcgkgcNSKhkiXk1oCJ62Au2mAzpeoZTyNVkMA1",
  "key27": "62ZdsugvdgrKHb7hF6xNKzLPbHMCJvttEhDpDYMCMpZw9rS7ALvXf9bc72Z8M6s3ocn7jqERrq1nQ4aLM5HNboqi",
  "key28": "2cbkcanR7H6sr3kp5CR7MwsbbhTuKyazwnwKF9VPwZcRGxkD4rjqWdkdr3WWhx4TJG2CmPr4qV6uz1FDbdZpyZHb",
  "key29": "5RQThT3XsZRobBFHmML8ZpTiB7Tn3fiQQn4CJXyAz2DwtP99dhNtN2RSH7eCzLhnvvFZCDZ5ssH84eSDvHzSGYYC",
  "key30": "7181N6KEktjykem8vLBKVtAVQBVLu2FWa3Gpr9exjn2r622s16b61XkVbsfv1ouRzbqyHLRVJUzPs9VNzVmSHMM",
  "key31": "4PV9fA7SoK3CFHzYwKdiLAeSk7w6a44yCFb6VXB69cDdCf5WjLtVyWhJvYgewzumTeZpxPz5M4wnLLb3neMz2YhE",
  "key32": "4KgYPNDkGWthY12i4KMQhJPeBDhTB3ahySKrRC6vdBQVzXyhhueFhFzceYEVn9zLpHowkdBiK2JErPFkEV9AreC4",
  "key33": "5QU77CSYsGmevYwYj5Ape46F9CnyxkcJYeQhQhuDDdbtySShLVV32UVLLcEhjWiSnuQtYs1hRiQQoZrP3276tcjw",
  "key34": "4zFzQ9FvbmdfEdYetRw3mzH5NXStyNhxvTCG7p78PKPEupjDSuSwSCZ8YrsKzPJ5FP238a6X3FKqthWhbTBPxnvg",
  "key35": "5GBhXtMSBg2QwQ9iQVyai6dzCLS6RdxqUtQ5NpBDB8PUgcUjeYZ4C3M7kcGpgndpFYLDGJoYCgagxcjNrYh5zAVW",
  "key36": "Adx8ybQ5eSqeRdsfJ3FRPRRG9JZmkBrKd6DvEBRqfYx8bkoMuvsvTYvriL3DCX6QczPZAdLwFgi1WFwW4LyTAYG",
  "key37": "4T51vVENCnhzSMo1WcHcdZn7KF1BRH4uVQf1jEYCXNwtYpKEmu87RMS1zQBWrUmyLk4XDyMFx4fzRPbAoFq45sVH",
  "key38": "3oCwUUX1D7Hu89fsrLhabjAytyQvepcESwHxBkfiByvo4w5ZTNfg7Ho56QNUrZR2oR8ro3LrJUV5fX1EpFC3wVPb",
  "key39": "48q92GqnntqgdgwBZjfctBjwN2f29VYKkWY9DZXCwJ7BzKBDqB1uMkQfznU6yxjm1EixL4opBR5pRLspxArzgQ8f",
  "key40": "589GCPCfuHpyZxKDzwd3P6pLyhnF8PHn3x6SefCsqE6NMBhQ2bdGE5sXRScKh1438L49qkGKRc7Dh1UC42nKh9BC",
  "key41": "5NSfrjGdyp5mcXkQPYqoftwkEfGJpafbf5BU5Q5JjXqjqZyqtediBcP7cJvnZrMBUgnHGyNfqEj37x1i8cJjE9Wj",
  "key42": "2jqLns1dJjqHaGFRyb7NcSer5qHvAb32bNWz39gZrU5rg7Pi9x7p6Ecg2F2dkp4NPm652ShHBnNXhXv9G1TxgDeC",
  "key43": "5n7TsR5jua5vshxWadMQH5VtRoy5HmfZr1mL4ZGqtMN2vh8sq76gKDnLjGVS1JcW74pAB7iEqH4J2uaWn2zU1vHr",
  "key44": "5XSckcg5dr3cpdbqMuNGAJqDajdb1Qujoy4kTPfNiMxSRnjDMtczdWHzbtHM54Y92YDrT6gjjA8kxwk1b3jGYgJn",
  "key45": "3JGuRCah3LyuXc2S4o8Ywi3v3QXWQh7Pkfm3DF4tkzPPW7od5WnWQuYkmww9jPfm1JibUWDsbnY7xQQQcg2scs11",
  "key46": "cm8qYh1uQ7xSUGbVy7geiEWdNcZv3DLRnkYJZKACLwsyf52HNkwv83os1is18mR1kUZWAgWodrjVkPRSDcXtjmQ"
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
