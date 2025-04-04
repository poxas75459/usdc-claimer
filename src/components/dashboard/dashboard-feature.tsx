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
    "3ztkKMNQD5TiszNAnkxPmJu5HsuRpQ98JKA3J5AT3Wr7PJFSJAnQJgYvumSAoUNyDZ2WdrNkkYbMXEyTmuKRnTt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifDVGe26PyqkAqQMTfXeJPSXK1EKoP3omiwixhocAeXW9LDxZVH2URf16oJJ7588WSvCzghj5xe4gtM8w6QiPKY",
  "key1": "61iSr5FpMNaRr2pvhBaTVitzwv1vwUeMKYR1yBnXs5AzwXGVSYwuBFPN6d4uiorypKFBUgkdsLBR7UBrPXSRL6Ed",
  "key2": "7jmNwwKeeLDiTVWFroLzC1FzPZS6SQ3M1PgpMfse8eSjAY3DwAxgZvnurY9gyi93CbBr9TtxNwjYFe99XUh7xoQ",
  "key3": "eAf66QUboarkEBLEMom2u6a5kA1jbpXbwhHf4ZLn7aP2oXQfnJGBbrrz2XzFnexnhQNMr9jcRrXKEwY7rza6RdQ",
  "key4": "57ZhkbcLwGFJGag2ykYRRuewYmdcnhZMmxjMiiNmasR6Xf1SyBeiuNVMMxzmwP9LH1oQYa3ooZJ7DcyiLGzdW3EU",
  "key5": "BcJWihpoc1Q9xpc9UDfwcJdc4kQJYnQ9aevTYDfnursRTfLxTHxYyAojtGL9MsarCF1UESHAccPDVqDE3mekbcC",
  "key6": "5FKS1U7BJ7sC8sPCQBV1e2Pwvi7kS2cT29UkPmWgTCsx9HGX83BaqeA2TZtzcwuVuwgUZpzhvQoCpT3FsbGyxE1n",
  "key7": "4Rh9Ti6axRf1A3DYtCcFqdnsMXZYemzReZ6LEJ823cKxAm5N36vftgGZg1F2gkuK6zNqNkiTSKmNbPgBZURiL5ZW",
  "key8": "VUuY7yXr5mNvyopDybYY8AHpHAqrdbo17n2YDC74cdC7vatqUHp9Rrad6spvfRx2Xh4PB4NrqJ38ei4eFgHTDLL",
  "key9": "XBACHKpZxjeatDrq6W5Yvyrumbo8pUoRrkB1GyhueRMbKebeFqWoHjncYEwUtAaGeLqErEivbkHvKAr44AKg86m",
  "key10": "476J7oDPkapxhPUZ2ue3At1TPKHbn6JHmUhdpTNHWX7zdFet4QspHY5mwAtXGJdXR8VcYDK5FESFzYz4G2MVrQum",
  "key11": "38tca3pckntyh1JmV773V5kq6n7QSCr9QfSWf86iQh5vK917oigwf5fWyb4ZJ7y2W4yxFYvrzBF8BLYK94FjGuTu",
  "key12": "4Cr3qk6sugGCH4iwUvhTcdiPskpemu6KYp94YtVyFfg1WunZ7aVwaWDzssNae2PDzseMQ7isqyeuLQ6NFVgNwGtN",
  "key13": "2hyvwYTMZCZ7HTVBhwpPGJdUKMtXNe7JanQLb53MLr773LwWh3w3jSmtHgdCY7tnfpqLaxwEDd1HqQHT2ZGEKBhv",
  "key14": "2dRqeogYGhWTBC8NoumzN4y3AuTFDGsQ8KkZAgR5xSu1i9qX6SBhyktz543VK7DxmTZC8e7XoSo99XdSho6nJ5uJ",
  "key15": "4fqKUBeHwBULmodA9Mdmiu4PSu3u7YDSqVwzduk46ft4UiPsUKJfCq4oVySXi6yxF9aiAVfs9gjt8Cj5w37q9SnS",
  "key16": "HLryCTykXf7Zx7zDKbgwTwsNk8AbLAyS1DAuX5EL7BYgK4tK2USxMsUJyTvUWeAqWGsHSmYWqjjnT4G9oRMphop",
  "key17": "2Pz3q4vtwCuN2q2xJsqUpK8g3X7tvZXxZawttcQ95Y6yaTb6hz45S2h8EWLVaCCqs5rDefX1w5BvAJp8kqRYsHsN",
  "key18": "36aegP3NKioLEFVYWkMu413w2F2u2dFwxfjGebo3vMwBLG7gkSRAAmT3NtU5WRPRUuzKz11F8jBriLjXUXa7VpcX",
  "key19": "mShBG9C4pUesoLojR6LRS5jetMqcpDg5m9rfZhoKK2EqBqdPeN1jNaVqoSSQBEGP8ySpHwid3aKzVfsnM4j4vWv",
  "key20": "VdJcNkvEhVBSk7uLGVv4cfYZ7kirTVD3wVx5oHWwgtaDUGwNBcBE4yBnk7vMPcupMBzHR16oxvfVNvWt6aC3yXY",
  "key21": "5PpKebWBLH33CNHk6s7YYxCn5LoCr4wHxzdppz2jdnQtNGLp97a5b1YGieysniDJbHWs872FF4PXfv3BzfxvKQa7",
  "key22": "5fUegPzYmXv2PXphMfFbwza9qyATfekSEWCWY8uyEUxRuDsLQXkjveB33XLdUGA2YUfchwyYCXNVTtmDZ4xEhrvW",
  "key23": "DHyH35UFGAWqgF2vBTDZfyYoEfYQGrchcbEGy1JwCxLyw6n9G3UYRu9Echf9qrSwHUVwf7gtMVYLTZexXy7HjyV",
  "key24": "5PQrQg15jVKPPgiS2RC3BC1xLnNxhhpY31qQfRk8qavS45XMUhFXVzcFo8847xMswQmgk1422M26dxeeXLgii6Y5",
  "key25": "4gLrNsriDRDFLNHtkKeF5m7aciT42a9KrMrSWKwDDds6XLkXjXJwvR7xfcjTdgU4JdKDpUtiCNdANnxD5YoXDbo2",
  "key26": "5jt7YNFpRqQPmF7EARq1etJAEPmZsv3KvXEDiqFL9jameJSUXRZvQZQECZBX8cr8PppxgrzDptD7NuWWju1PgYuC",
  "key27": "4RqmFGxXe5Y5PBsB413KwXfYkDQZLN9ELtYY6bYvpt3q72MaqydgMj7HaVCjv2DxcoDdYYKYLa54ZtcD6xAb4Qid",
  "key28": "4732nJovz3DqCupxsr2WcRxasVhbvRBHKByCkQphnFbBCXsMtEKPxbEXczb78Kaz63wfTnoYwhxXyzvdWMtdTHG9",
  "key29": "dq5Rq14t4edYMwQBTvFidGXMbitGhiECWhKvhXqmswJPrZDY3fmAENmV8q8QzcyN8bA5q4rZsrHRvRMH5wYEujn",
  "key30": "h9QJC3ZT5JHsunRrXUjwb98puBFvqaPMtQgH5wsXn2ssrFdSqcUETG747WLZ8VL8hK32wB2FnrkuJVbRhjXNVyh",
  "key31": "45E5BZnpth6MUEaxF3vjSA3LaGxBFZFa7GQYkFkNAsdVgbDQ3PRr1q19yzKE6u87XvLey77QZZwhcFrumacEn15k",
  "key32": "52A4YkUrzLRLHcA84syUYVpewVXfKuWTCPdM6zAy5GRPHysvxnngiFKHs2Hkid3L8SPKSYKiA1289Y4CsGqH6vpQ",
  "key33": "3kmK7jWk9VoU1Uh8YUi3TA2fYBwHtgy3dDg2D7EW68HscmPN7gAPqqrN2Jqcgtoy1CWBKErBT7FzFT6JBP7hAGLL",
  "key34": "28F8YYKKyFS3ccaot2u8QCjBXDk4P7qmj7TgcbzAmFHumhHHCYW1G7Kg5njKbUB1DTHxYcfCLtX1sNnaS9mA8yLz",
  "key35": "36nBwBwPavVXAwC2H3Zb4GyUfbQKKfMERftCPDJGdfFqmM557eJBpHMuqUHYPVK78MBPYYdjz8qVkgGqQ6AEZazo",
  "key36": "2orXAwfhqc32YTYwYnRG3kiYvQmCBH4BzVLrWy1n1YLtaXV5kukkHrV4bfG91W93vT37TLsnrqpz6mY3HmB9EdDY",
  "key37": "n6k6ZWxCYx7Dv45oL9YGJTnHWb9myUaLqnra72yQPHPzLR47bnA7VqdtCPU52J1U2bAyMwgZAeWEYxSdM6TJMtj"
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
