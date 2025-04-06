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
    "qtXfFFwpJ6RyzenN7i79ctH54XTakMDqikL5uGNMLVFkhV8vF5Qfy1sPZfu7F89DwHxes2bM7Pa4Ky8U9o1dRTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPerAc39Ye8zkXpeJz5TS52D45kx8whfSiGVuZEUpENRtTTX2n4i7es26V3Xy4AfXEnmwYJgajz7hweqJ5zzBdU",
  "key1": "3thefRkqsnNJjecy8NKzTk6rfsdjk36PDVxcwcJPkEghDkCeWjeYJvzY7eWuWcLVXPXVFHQkkCjRwZPngWxR1fpp",
  "key2": "5ZyBbNK84Md1hQ89obYDn8DU2cpUbJ5M62G6Usjm5ESssG3328ad2DLuvbbkzCwQTs89ScMY9JmJrwoNxZWejf86",
  "key3": "T5RogZDhTWMSSzax9ghn6sFvDFuyT7gNzktR7c9WbgdE5fqfwqiXaGvuAPUQicZZrfJnTwt2dy33AbNTXzEmuav",
  "key4": "3vWccbPFsr1CT7jn95K2rZhdKsRHjrdLrGVG6gm7vpoWRQCpxLEPmKmWiDnmQtAaF1VsZJH4SAPAFZwti5EPt2uk",
  "key5": "2FVVczTB7LZQRcQLVR66jHxusUdNbQnTpELMVfptvy8XvPYNUi3o8693LpFea6e3yYcCiLvxXPMUnz7T1Eh9ttKx",
  "key6": "4mgxqYTkdxP8UPDroxXpRS9eySZqC6j16avQNxeq5sux5KjtEGvxSoS6CfyFsckrpZcpt4EP5bNQDrqVdhDvrRH1",
  "key7": "3QiiP5eshwS1MUJjJJZeWYaXvwv7EWZ1Jy6LDd1WBGLpGtZ8xABJXw3GnA3sQZ1XLHCJev4wcqbzDVpwtHHGtCod",
  "key8": "38qe4zEpMJPUPZ73wUoH7nQq7mSJtZL8WTYQ2gVSf3V5VCMWUcUsZMq75NNWNMQnReoFrvpQeoDn1YaAdshzLgUa",
  "key9": "9HZSjaov48sdksLnA7XGsWA8HCJPEovWs6PBc3mqVkHC311CQDos6HtHYL8w86Gh5n4BerYWgXnebWdgTKRsNqA",
  "key10": "3DeBXjusH6wcjtzHvcrHCpbdtyEoDS6NHL3hw8R9yritfEkmcvu1PZGvBhqFHwVk4BvzhA3WepV7GaBJapJ4fK1f",
  "key11": "3vfxejCbcq34P7pTmQrv4MBfHBRzf4wLQKZNjSU61mY75xWRAVr4hc3G2fhM616JL3VrNE6Sm1n9Mb6oSzu7cJaE",
  "key12": "39pT4Y9qAV63Eqx9Q3cnv5oshaiqoc91zMTcD18RAfwfBGoaaPaKA8K1cQCcozC11wkWGzxDPn4oqdg8BQGuGh2Q",
  "key13": "4K4ijRbHpu7Hy1Z8SpN2jxAJTuqqLcRSqrfPq1ubDJC5Bq9CzYUS9AX5XCC86yRpMKk2HLSLkeLuxko9zCgNqKbo",
  "key14": "3t7J7gsK2wVdMkYNuf31ycV5PLAFtKTfqi2WH5uSNjo5gtYXhEKDMg3rhHMsvuKD2s33domRnJa1dAhqpzWYddMg",
  "key15": "2Le4tdchRUzx7M2atRhuqbNxBZPrE4JFJrWX4fPvshouYqhNudTaj4JEp4iqUHNf4EzEhaWYEnGaikrkY5XnpLka",
  "key16": "4kAhfjBhDtjVsa6vQL7thWYBWasWy2hs5tev1KDAF4AUpsYD6ZM6QRe1MsFSgodJv37iYdLzxTAwyN3wVfJbjjDL",
  "key17": "gFvrGquz4uY18DkkhEC9Z2JR1trxf8LNh9NmzGb6tfST5shknuVkK8qbcq7RTC59CkNGXQ2b73mTM8LXFjEPkWF",
  "key18": "2zKJZUNe1HnuLppwqFnRSkHiPdedVuArz1RNfk2WvQ5B3kyznNDuD3EbJid1rq3Sr9CkQJ9TPjLJDNQBvUjzh7gX",
  "key19": "GdntsV9ZwYyr1gcsrRANJ8ASD1tQpNgaLNaxDseKuB6ngL4RSiCHVQfLQvDcdvmKfxwh6cAR52Y6CLKkucZcKBF",
  "key20": "3Bvukg6yZ15fP2828wmeH8xaCmXJTsXU5XGD3wQAhWtpgA5uD2bzvjem24vqJsA8LsW1uqEC5Cm1cWesuVNgos1z",
  "key21": "4hCkQXdXLLwRYWZfUcP7xPwrfDoC4Z7xwGgmSPnem4NkWwy9KXVjqSmUjy4d46TAFL6PNwN1sM3ZFSkLcBxDCrcR",
  "key22": "3pUg22ur7dmjDhYQPuG79ajXtPap1C1AnspE39qzoPDLrtecAPZgLuHeBA7sJ2dLuQtKWFQZjGtpvYnjUokteds7",
  "key23": "5sk4puaNCJmWC8mzxNMgDmBMLkb67vTe9oqqmznsriVLbHieSNmcfFzgwxVws6cygZyYZjF9qSz8qGjRJfFKNNzZ",
  "key24": "5rdYCj9pjkGnj38rXZhXajP8T1ynv5qrZ9cWbTiHR5XEDWwtcv8FpQgW7KejXni2zBKihgnFLSBnCS64HdbLZeaG",
  "key25": "2XPeyXohu38JzrWpe49kJREoyksZVgWGn6BKPxixKuS3paz8L3aCFf9KwpMjrh9zPT8h2n34qTmTa6m8UkQa7mKZ",
  "key26": "DrFWmUXSYm2xRypZTv9X6gJy4AUe1CY4aT3ZMHF7crS9UFwyPXihQyJcGp8AtsmKB6Jjg9taepicUEgXUbKfL2R",
  "key27": "3CNDs5BeEE1uEBn5biXAy74a8cLfbR8oRYDt6ZKFikRyFLmH4ThzHVDwYYLB6HVHmEwaPySkDKpn1PzgXojHsbaa",
  "key28": "4NQFzof6JBntL1B8zUEWJKTuHwkYC1RchZEmLMkT2ks5Bg8ud8j8g2gchDrUNfYtcyYzTKZkZYoiTkJC8YnhHwBC",
  "key29": "nnrCaZ8LtSbc8ubrD5BSekRaHJQygyQ6BBNb6GFF9dnFSg9JGuVqXYv84DjuWr1XhmvLnvKY9ubdFShmRe9xnaH",
  "key30": "4Ez7tKvF33c6C3fg3nBcW5HMrKZrjNuhhmYXUE7sNF8pXd4sMw3qXmuXMFtxC8rexZRtqjNDMush8rPr439ydxM4",
  "key31": "3kqcE3Q51k9pH9etKEgg5fAudvJperBU7RDtdvUX1VrXogSdrPBqjo8VFdJMFeE9UMkZeAVBhRTzjTY3dF4xWCNe",
  "key32": "4DodQCDAoTZRe28NS2H2rAEnMrqiCi7HTVwWWpPYLRRhnCbCHTYXsFSKh8aUeLRBe2WYBHgQPSFZZqZ988xKWCLr",
  "key33": "36HrZZBX52jPF6AhVk6zBXxsUXDNvdjZku41xEEqjvtkpaRzWeUi3Nv52XRxNbmrx65QzFeaELqhXshFr6fkh3TX"
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
