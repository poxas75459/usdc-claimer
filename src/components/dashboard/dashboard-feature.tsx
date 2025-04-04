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
    "4m4fbjJGcKF3SVgksh3Gbodwx944vsZPsg9bn5ZoK3ved87udSVirrKtFnjRWzZDUfou7hpMqYFxRHgDUhQEYNvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JAwqnTQzQdQHnH4YkY3sZ1esBLfWEMEc2qE7W4pnrkiYHWhVbdGM3AX5ukDXBrBYdo8J1kBoW7agSayH69wr6VB",
  "key1": "YELYruJG1bjEUfJez3f2tsmWKk8mkXSmAjx3mXBzRhHLyEsc3bbMNQKihTuKTZfMbLduuaoHDh8ov3Z955ETdKs",
  "key2": "4wxLyvuoqLTY1Ss7RdNQ3mXbBn8V1nuMXyPukYoyUJnvAw1xtrTSZ7RZybCC1knT3iYZqSoYrfCgxdmB7fCCQEhq",
  "key3": "3mwuEV3RvrRkQCwEGnqLYzcaShhYMaApQzpgfhy3Pe4nQh5Y2KzZYFV7iEzQW2wQe6fNY3pxf1PARXdSUaY53RDJ",
  "key4": "3EUkaRXoFoFXWX5jTNUjN1xdHtLWGGLjKb1mEAARjypcGbnyyZgnpdyzeUMs65Ya2Srt2TipCULbPFtTnk5LRViP",
  "key5": "2KEHpauobhNBzkkggaE4roqPEgbfYKTd3FDsWgVa1i9wFcawcuuQBNsh1oySYF2eoxTsiWPyvNoX2gq5dLnN9jNW",
  "key6": "5qugCvf8GuK1MkEpfnrZQ5V5TTkV91BwTCiYQ2vygR7yXwrBCNPrJSrUZJ7bmadyGA4MN3juLyKox7sb2SFTGPr5",
  "key7": "2z8JqqnfP8zMFQHY9JEV29P3M8boZo3wSxgfG8hKzThSaYhf4aj2o4SDni3h47yVWnEaCUL5vcAnUbYfznbYwooX",
  "key8": "41rZYEzbYTbpfRVHV8Cv2TFEAu5vfE9xe51DQ6KiHmMUT1Z15txGpxFrmyti6cXW1egJWzBCWfsh78RucTE8cEfD",
  "key9": "3Xmc4p8o1tKVRb1kqMR4gswLzn5QRBRV6rrySrFeKdcpe24DM37EZYPHd6cznGBVTMMyGfx5bVe8tAqA6HgCCR4j",
  "key10": "3tLM6zwqzQXBhrdRYoqydaq4KBU28ZbUHaTxsrRJ6LLXMASjQgAB2zntsVFEB6cK4Ui14yLbaxy9yaL6mKtdHMUF",
  "key11": "5UtaDZDnX4SF7XgRBEwYVV17bv1HSZwQpi8U8w7DRKFSXSvxuAbDsRL2zrBzA2LLw8XmeCCbnUnxDdMDw1sSLWs7",
  "key12": "XXqXXzhqK5tVH4oXu5LMiFYKfhwjnnW7Kqo2h92wPCi7ZDKAJ4pFJEmpRYYMrh7WgTVeqdHpegNeM6whC6uLTAM",
  "key13": "5MTNVMcW6rj4F1vnkQCsYAECg136Vixr5WRjDcGpNQ6eZaGkXc9XniXW1T5sfjcADBuCYofs5YZcEn14CRuzeMaK",
  "key14": "5aS8pzKj36o5JXbqxEKrGN6Qmee2Be4CMpXkvnCErNX5N88TuodKYJC34em26WekLhfMRc3eqMakmbiV1aNPkzrq",
  "key15": "2yjWvraPu7AffaGZqtHCX3Czmgnw4Nij7qdR8ensCVyzRAMCYoWBYwacUSVSxU3V4csrj6pu8zAuW27Y3b7nEf7c",
  "key16": "XkHUUqXoMVnnjdCsUfGUxyR8t6iPjHkzky7jVNwVj3iuu2gMBKbYt17UqZdQyoXMaCo1V76ej8Qd2hS2p9megtZ",
  "key17": "JsGA6zQXQzxnBSVUZHdJNKTy611hfrawzJ9ykMtDW5bnCariQnyKjtEQz1E6Seb2by8mUyxEGMkaFnBh4bmbDx5",
  "key18": "56TSPkTCpuBkE12j3cV2NuzX1xB96Lk6imU32pPyP7Fu2pKxPWJ1eWxmktdgYGidDpQKDXzjY6kFVkfkgixKpHY5",
  "key19": "5JeEXRmUfH8MaWparpKezNky4JKusmd5LsYEtpwhw9TCXYNsnjioaJWL8tkKTxJqEAqCJpbNND9gAqqqBsin5bbC",
  "key20": "3FRGpASZimY73gEGjpCN9xpUq6zessUPrBjNX9VbT14q5ksRjod2cpJiQWFJGLPAK3Hb5WwHSHoTa5BSCjY2CrCy",
  "key21": "2FxbPXcWkuoW6zJKC9mDqj3CxF8j5t4V6Fc4v8QQJy56qh4L2E8MTYziEb1zR3sjfgXeNhxbeYxC5ZrE1vBqBgvN",
  "key22": "67Gs8dtximF648SSP6dqei4YvAUYkWyhG35BLpUd5pQhZdcp8aH32o8bu92UqpAoB29ZQJSdEj9KHSqudYKWbWrz",
  "key23": "2cV56vB7EwLPv8REx9pjwpxGQWceXMrjju2JJthiXQEqkUX7WmZknuZudqKe6BoNzY4KiYorB4HNBexztRsq3hxJ",
  "key24": "5zPp8qcgd2cZ3gGAyZXu3MUbeCReyCc3oa4YDgHwtN7azJY5sz6SsFTVqWz5keXDj8xEEWsURyfZN5MdULtZDhbX",
  "key25": "2UjGAY71HJMZa2M75TEm6mwoQCZ8WV8yUSA55mPMZdWopQvaUo363FP5oeJMjX3MXR8FRettuz3ZJznHGtrCvXeV",
  "key26": "2hR3EfbPGEm9XtmnUyCpHiL67XgzNtoq25dD5VKyRGQaSpLiNGmMNku9tXinm7Yoy6poXPh4rKaPxnrXvoWfLGRb",
  "key27": "5X45sE8DV4m3e7XVj2HoqzNDu5fgZQcCAH76hBz9uZFzjxp5kX94EaYt4LQswRk5YmLdQ3tKXRmfEnpvSRZEZNw4",
  "key28": "4ogPS1bMutwTj53TPDqBccQSzG2pRFV8787oDUEokeJrCRFHszDgf5XPQsrk5c7YV3QjDqy1DGCxZ9EKi2wqXvK8",
  "key29": "5xQakv59uZbh2zfHXK4mcELUKLVijorL9RvqQ1MsWj8HZt2cQi7YDbAvBN4kxxGqxrmJ7dfkXxWCNK5LDBtVfEhf",
  "key30": "t2VYZDNyyVwKTTpFrgSMVqLDX8yNqikbWsWVixHJqpF4Qj5SHYSzvzpKY25DAMputnzwADXjFhCwzwBb5rYjxpj",
  "key31": "dYuMH7ZzKyPEZjq2XHNcZtyXeYSgv1s2NawKmJwCmbG1e1fk5pBdMLZHZDNu4v8zsE9iZGcbs6QRy4RTH3PqiaX",
  "key32": "rcd5bMGRcaSMftbxvDK8EDFzNXtH9dWQg8AVSnKUNV37tqPtnjR6L69CPwDYv97gspswXiBBfiiekcnYSMbjLem",
  "key33": "2B8HyzHS8gRnFsZsxvAF3W8dquXqDu4NEswdpcUxm7CjCnYNjeg8UtsBoeALgc179VDYU6sndv9yMF53YEPZGRGV",
  "key34": "fzuqMX6W3XfR1fHGYLsCNu6TxEHbtXvSb6p1UdJc36DQXKbCpTy2Vz4mYf435zii4ppQmfRZrxfTNhviVTADz2S",
  "key35": "4Q3JUqegqFUXSaS4mS3Q19bBnjWPcJTNapiLSVFN7J4iX13t1FApt9btYDdzB3woaX1PTgFQrYLapB197SZaFqhn"
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
