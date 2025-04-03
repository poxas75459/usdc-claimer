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
    "tqRUQM1Q9yGAdrjzkyQLMjfHfu5YP2jLxoiMngjZ2QV3xGT28m5BG6hAdPhSP172joe2KRusx18XkBTRkwDaorD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xNBcCVhVt2thn9gSxEjZGo7UyTpUipVmdayBey9AKfZJCHx7TiwKvoKBFbPrVtt8CDp6ryoLX1iRio18GUkTuh8",
  "key1": "5TVvVAUx4VqFCq1v9tkPmXRPVaczXJNYGnroLjCkNBha7ou3MRDPG4A5Jiozuj6uEPQp5yXhhWo4vmSHgNdbKo2h",
  "key2": "7GtSqz8ypvnr29RxdfH9rUZj3JEaJQNavNh7H95vxkPy2BztYV1T2xFE9buaQkS4wCuqYFoDFy2RJfR5n2iz4gc",
  "key3": "UdePwVUTeRs3LfzMZeReaj3Mekaxe6iB9V3y3DBKwTUMUF1h6zgviKXRkQUEGCiwnLn8rLXQuJwNvKZvpm4hADh",
  "key4": "5zhJhFYyno6B7M7UqHF8SJFxStsnMi2vzPCBfUrDp9ntwVq35QUyrYRqwTq252ZRuhuDXHNquQBTPWXxAKCb5D1a",
  "key5": "3xWEU8yz2H27dFdSRSxULFmQe4517synqeu8EJvc9Ms3Ra98vu66PicyqfY14Z5RUWRvJT9DauzECAHtWmm8asU4",
  "key6": "KfcoTTz2jGNRqC1ZFKpRWCR3UAwAzfmXYfhDBNGnsEywHfUMxLDXWQ6avhW4TTYXnBAHnUTkf2aNSocD7kudcHD",
  "key7": "3yoiqfoZVbnoca7yp92u33ws6vKgneMySD3eTSgEaVSwE82u2y2HpPKEo2DjGKxQLUK1aBgvfpjjEEHnnhr2fWBv",
  "key8": "5Mueb1H1fjpJ43GvtiQHf5VZi4GF2yWESxmb45B2PRbAUmCpqoBXMZ3dmFwQP4Cvv3nLaihMUzQoTB7SKrJXgoV8",
  "key9": "2qv8xiCvtGgn1EbQLhQxfjYmkVZJdJv7ya2kr7zqHMPbo33Bk3Vvqamk8cwjb75gzxJrvR3AqH533rXbFpjvQKup",
  "key10": "3K1rG1iRQNMmWfKXDpzqP9vM5eGKCgKwYAdSJz4xpnMmFwQwr6Ldd8biHWuCZzGPajxHu3SqTgvm2B13qodA7dfa",
  "key11": "3KMqawXd2qHf9yubuG8SGgLUC1gtZYT89LXZh4zGtboD2KpZwqBXkM2D9VxAB6zX8AbKvkaGHfcZDeDK4CsvnwBJ",
  "key12": "4ZJzGs2hQt7qrs3UzpQppfhmknRDBzrugXkYCbaxEAb8KuNvMCKoEAsdzH8XN6MxCsZbUTP7xP9zn5qdZahja5Vj",
  "key13": "4jVxZ5DLNc5PibiM6rMLFUMPsT37ntmuMC4VYdo4aPQDwVrXwBSDqZD7J9grk1Q4s4rtEvWgbNKY9e1d4YcX4jVD",
  "key14": "2xt8piNPoi9LXHcxaEq7FB5TW9i1a9Aqy4bKx2BMmQw6A2Wh6vYrY7ToaCKevAJ3KE9cGHoQ8ur4mzqHZBJt42qE",
  "key15": "3Wu2FUbyA1kDWd1TJrJTAFEDuF8fyWMxLTXVRpKJmeAS6WQRooEXxTrpMjzfVaPkWeuHo8NKAsEkyyuQJWfvsT2m",
  "key16": "ZSkRMS3HiXCLUQeocaAB2Kn3FRdC8zx9WUrafhyt8fNUkiacSFRSTarcTpAdKhpZmQbWFK3r6yNobmpPi5TtqE4",
  "key17": "4T7kjsHKb6H1nzf1RKVdZquy5UMfZXYbikGuU9gcXQ22TF9fYPc5NNovrPs7UaZwntCuRujpYRSQ9T5GAK3xs68S",
  "key18": "78yTmpaFXb13hJPT9AwaaJZVZ9yAqiT26DHxEWy7zD697eCw7zz92MEygsNS1jeY4ia3SCRUusPxGtVaDW5ZeDv",
  "key19": "3VHseX8oQ5UaPui9mvzjSMVf5d8ikY63DKB3s1vbVBghZgEyQTw6aNVNzm1LRUttjaZ4z768Qs5jknx6Xkm1GYxQ",
  "key20": "yrMsR1qwgLA5Tphw5okzvgijMcfx33GckceVcYYtNbLyiEKP3ZHYLot4XSeyQ4RZHiLf5Cse1eaadgijF8218Yt",
  "key21": "3yPc57K96YuZDTpdQpRk9iAyUkpay56T1PPPJDkQvyMbZ49UicVEmb1FHY9Fb8yd9xxKA5WbBVUp6rBA5tN7rmZA",
  "key22": "Fq3Sta295yaQ6hrpDPu45UZfTVmCwSHR6pEsWQ6ybRTn9ZTvdwZpBZLQTuYqQr6XMfkRNL2354PZu7iea6p3uK4",
  "key23": "5pZZyp2FKqDXYRhkMtXuXbRdFTnvwm75ubkFtwcTDieXA7X8KNt4mCbrV2iDs8SjeFTsEdjwre8KVsegpgA23ofQ",
  "key24": "3SvwCwBkh7b5AK4bJ6R6P1pJLfKsswfJ61Sf2TdDLoqg5XCVpLXFUmScsyhNptFBEMA7STwRrbjrUmrqHLGmWPzo",
  "key25": "55d15S5aNVZcxtCAEb413eYBexQi7JQroH4WXoMN1r7h6FnmZoePcug6HbBbrZbYNVgNy91n2czwxHw4RVFBdp4m",
  "key26": "2YqgEGLiHwTZG1YV5ThH7CYBUK3ke9Ey5TbGQa5kFNwQqYAU7pGFSE6dwKJmPVijvKoYUbZexJC9z9QxSZ6yWB1Q",
  "key27": "3z7gzibxDbcjjrCaAqSCgQKp3MUD626oKJLHedFe3KisUEG8y8fouFKK73gcwiKn9mo1uQa23BMVK7rL5aNxzpc1",
  "key28": "3Ce54TLYWqGXNDki5VzrP7mxuDcQiVQXJ7HvmCgoZmSWgx7TjCG2HgLrE2tthrkZSGE9SWyDqv1io5NayzE2fdBf",
  "key29": "xZJrBxvkbBjVaPX2AY1Z8NYRQBYzuMeSBQMjAkfHbRSQaFCCTNKz5ykMgafUBAU6Dzym3ydKn8MezFEp7pUEZxs",
  "key30": "5JDmwKKC9o3aAfWAFz8KzxcdDkkVmtwZc2MMrmVpEiE6KST2EbcFqCVWt6GiHYDMrMrp1pNAwu2qoRTDFJxAJNPp",
  "key31": "3yRD3eziXQxkzJUYaRd7j9jRhYo5mcdLH6Sc9zpHrKhpzNxKQBDLeD5LigsPCZ9cpydJ6VyfSQVntXtigswgaUHb"
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
