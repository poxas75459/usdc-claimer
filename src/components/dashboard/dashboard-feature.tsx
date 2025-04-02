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
    "5Ueczb7FhHwsBvkdzk9NQQQgx3PY5jBXNQZaW6hWibg1qimDsh77i2pb4VuWDemtDDQp3g52f63NqY4taK6mYRRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjkRtwhS5zfuaCRHarGhzGadxpEHhMMaw5EyZwGKTM7jpfj9brfyKykbwN8LbhQevS4asKuaMaUUcunta6EPWzW",
  "key1": "3ThR6vP9AUQPCgCqg9D6cv7BP33K36zxxHb1GfkRDiug8ENdgTFGVdxffT7m93skm9EenASjc6yAJc1HNee4biqT",
  "key2": "P7bFjf3yfcivy65zsNrdnfPfnqKbHWvCYWTRGQsqAYXLiR8E3aJ7T7GDnk9AaKvDKMTGQRwxzcve725Puw2se55",
  "key3": "37W2R5Zs3pPcPUF7xUghUaykau8nnLmo86gMMhBV5USj9iWhk1mgXSHBHUR866v9X5iniGbVAeCHqZ3vY43qXpTz",
  "key4": "wPx6n4HsRGi5iNgys47wuyivSzpgYbwwHQKgCx952ZpVayzgiXLteETQQzWpmDTHLYt8kYsJBj8qeKuSxkX1qkC",
  "key5": "5665VSnKnHYQ9PUdQ5ymZijFyJihdUM5ghVEPBQfT8FoERtNdtsZYY8QeytMgHULKRMeUtxXCaHa8KXrKM5GrPDD",
  "key6": "43kd15E1vCLSPyoioJis9gjxGzA7e6hVP362M8wM4bzfQAYUkbYiyZjystzAKYNAfH3sco3NH5G8FpwsA7f5uP7a",
  "key7": "5pAg9CdQzpq4fzVNoPXEKuNQJQUHGwynrowxQVk1F4DED8PU3gjmcsnGS9moq4tx3qE6yik2rGQWBQyUqPBV8BBF",
  "key8": "xw6YYuBwRVYbUV4hyxSZWcjgpDdZwezbJKrNLoBG6vufF3HgXmBXkAHRBVivRyg9yqtDiCnfTDUEoYyfHp9wp8H",
  "key9": "zjqqTCEevygHFgsdMPKs7UifD22XKRNDk3bW7e6ByAxkHj3YEPPR4xhtjffyhBSCKteDuTvxAHujndjjHXnJgV1",
  "key10": "cRMmPDKAARRFqRM7DkbaYrm7Uq3qGEypSZmKpm9vrhqPbUApMvRr7t3stTn6JNhTF4YtbqrY2P6F6iwXTmp5W7m",
  "key11": "TTvciBXFpRLzGz2oAGBXik1RKiLHsQXiNFgwjLzwwxJHtZQGpvdPXTCL33ep8QUDzeBVJRbPSwnTGvcZpp48Wj3",
  "key12": "p2YVT6KiDDkz7Ti5oJ7CiZqStkGGbTQ32NVDAZvhFNhLgtnUTQAecMzruBngp4ArJm7KEipLT6EgCjrHMqNqicT",
  "key13": "4mSW8XpzYvWRjcUk7DpHbwptM7mfieCP7UonqJiKvYtBuiAGvQxtwrTZPJdiasZS9orknD6ADrkpvuSwem48aZw9",
  "key14": "5qo2Edb1w82mAuyNJYihQNCeHG3QLg9TK7J8GWU9ykbk37GqP4M3jknHtxpZuHGMyKBcakjSPfo3EkPLNeBUrCPh",
  "key15": "3sS9caq41DKP1AB2ohL6WJSgR3bEUyJqXH65J13AGSt85Bc49S9LxcWUxiTfh1UbU6zXxoiFX1X57QXv49MaJPrN",
  "key16": "deNSre93oP5XYYsjb1HCAobRWGYVC171k4c4DMdxKoCRV9gPcPrTnjD4i5uxE5PF8mNzuPzkzn3fCfbpBfUu52t",
  "key17": "4f5cPA3t3hE8JkGunDUregWKFf4sA1ULAAGebiS75577LLEGQpvWwekMqtfqyGq82BxL4mXVGsVyLruWvGKFQzvN",
  "key18": "3HabPAgpWkQfBjC8EP1EVYfe4X2xeiK1CKBVdCLu8eCkJVPs72oFDgt15tgzMJjd6NZ4JqyUnr7hhHueAf6EWJ2N",
  "key19": "1sH2bNSsFj6H6kxLi9rLALYwBVLr1XHSe7j8yHrRkpWg6Z9QKGYQ1YLEL2xK8NvKtBxsxQB3w7DzW3NJNWQhbpo",
  "key20": "3pKSxAQc1Wf3NCZXNtNRREPuZmzvVqtwNVbinDSQzqaM25dogw3LHng1KUeyGxokLFqQRaJvDsHjMWBPRGsTUhjB",
  "key21": "obwYBt4xdeu3igkYHv7n4gRmjdC49dkC9HoDsoBQHwg5JrSX29T5GGuidLD9648koY4ir6UBSapTwTLXdya2Dpa",
  "key22": "4u2yNW3dxorf46kqSotu1TUrg6QMRkq3CUPyDc2C6EMa2D8BE2XHLcCwMqBQN69UKQysUmS2ioY6AWLgQvoNjbsY",
  "key23": "3955HjK5ZWM4B2gw7rQ1N9i9x9xSUcoefs2rNVCN9Gfm8mCvCFR1hEAhABdcBjrnagbV3hAC3XEvmjebnYJbBPpq",
  "key24": "4mQ6op8xdDdHXm1FNUxkiVMMNU8ue55yz2tnmmA1pgT98fmYNVJpxEzJ4pPL2mYag9DCcYRWm4ixBnGCZ6jHq536",
  "key25": "g5Eng1ZMLW6uZjj6EkurzdVgGqTdV4BhTra5A76FUP2Mq6hkUHuxodMKvwJriePbziq5s2Sh9vDuC9PZpdqq9U4",
  "key26": "56uMKSewprS6HYL2292o3Q3zP1CQMrUbsJG2Z3FYTr1L1hsdB9258BUr75B4h1hx1YyAXy4tj9tCAvsLK8xgh3oC",
  "key27": "2vAzgB5USrBbzMfokwGjEZKYC1tZSCFrmTgN19sTWiaTuoFJ8bXeEgw28h62fJZo3TuJhVkKhYtbGHZZKqxLGUB8",
  "key28": "nZ4vJNxRnBM2HDvBbHwXXogYT5B3Qvuarr5no179YSukgKqJQiMrxiTdeMDvcZqo1kZWyaMoGRbCsbscr9GxQij",
  "key29": "o37JNEV8pgWP87Ghj8CMSgrrFF5KzJudNWM7Qihmema51L6AcP1iHSf9r6zrRPKPi8sTknfWv3YhnnaLULzKw3t",
  "key30": "2YFQVUW8XmkSpPYFHFKdtUFc6ScckwQ4aNZCXuKRqdJedxLNKftpUqAikzYnsXTTcmXVhaqPEPF7d9Yb67G6ovyh"
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
