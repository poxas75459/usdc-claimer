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
    "3s9bg7nkS13qhARLCzvxq8womDdizXMYpSE2TS9xXiTYmqYebd5WMtBdGjhhkxMtUu4pen9mxuYSg7jjhTRbziE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4BagwpCp7jX2THEp3HinPLnetkXxPqWYdDkbsLPosUb828N5MevxEAxagnYUVWErd4TQ4yYoHhpHj1n7Pq4ApH",
  "key1": "4b8wmrUXutBX8YPzAtzJyyGdbJ3ZrgZHyVr9sPB5snthjr6TBKtJCxgoh8LCaPr6QQsxxWNARWSwgSa9kW8suHGQ",
  "key2": "4wc5xQBL9jBfAr7XuJP6iBeB7cFDk3bdfUXJJMWWx7x8rXF5YRqiDQk1XWbS5kRqyxxSBeNreNAr2F9QBp42GBTw",
  "key3": "2QEsEhY2eiJ8Bbciom4KyB4Q1NMk41ms8YpjtwLxWd1sa3cSdAKLj8g1z8nPkpXcjJStWHX1nPNq7Eg3TSpcd4Xy",
  "key4": "27REBT9KmepgkRVgqWZtRGxnQrwRdAab93ugyuX6fwunRbcidsLtJHR9xnMTWxJTceCLKHseLB4aJ4gWMJf4NSU4",
  "key5": "3w9kA1xayqV7y3cE1MELz1Yzpi8QbLJoWX6jzQVbXhqSmW7RB4UQtYt9NDbJYEMRK4bTbzQRrdfX9gbgYRYNqrTK",
  "key6": "5uZVz1s2EkKeXugmMK33TyJnyVRZ4DhEL2nkrLnucwnAZZcj7xQm4XMEFH5mLX1Xhf48zc9CQfGLNWe8LCwskzGQ",
  "key7": "ppmKAnv83xBdcyF2vkNrDNRTMNvaKJEkXZjtjJUdiS1rXu4KLLAdV6M9iLx8TTuXSQ3AJ31rwD2S8fXp9nXadN3",
  "key8": "64HvWLd5rszgLHyNXZF26AYr5HkmPp2cZ5GDty7ECgJCzGzSvXFYhJdzJMZSmMu6vU5KK3SJfe7GjozaH5RoEuz7",
  "key9": "3gtcZU8DCaYRpUm1tkWQQgMSuH85ZEtJNLSPqxgFzJqHAhyxcdMDW5Uv3cd1sLqcntpJ2NLB6DCVuULFsrHYFvG7",
  "key10": "5AP1m5dwRTbTKS361ooJyXWjEKhBMhyce5FGWAKXpMWdr6Fhf4MsFEF1PXjWsatMDLeE48t8z5NcHHtMFq1MxC7J",
  "key11": "3XnJLXZfQt5fgmCU9m3MCeca88rst14RuGU3iSQRQFh7okxXnshJUBt3nT8xYN6fjxcnuS77bGKQ5VrHew3sYuN8",
  "key12": "JfGvWmB7F5emcKwrsHuCat2s126ruPXx6HbVHRAm8xEBV1MSKU4zNSYyKLdWHh2aTrTN8ZjF7KZDkxTZ5R8w7xS",
  "key13": "n4Hb53ZDtTZhvrW8WTE5sa2BtySSXnjpm4XaNpBTyVTbA56RgANEVy5dVxgACLyGQWiQEhjNWJRfy29GxHbydFf",
  "key14": "4xn6DUFbhZT9CgfYtJpTxCqXuk82MaQA4pgijCdwWSPDFRRkVWPwEhxeBjJVBvcAkLDs2bjXk94Axg4kLPcfueXC",
  "key15": "2jjNZBm6CVmJdZz4NrVagJVMRYup4PutsT3iXeHGviiZ416Dwhh4twhi6hs9LWG3zEV9xgwV53JtHgrNQ86oSBgZ",
  "key16": "54fodvURdrsH456Eg5FaNC6nZZ5LyBEZkLbCaya6bA5oVrSLaSQKftdmsmNqAMqZB9oxf5Xx1wLffqdnycyRJsFV",
  "key17": "4we7WSTE2oH664X7HEKWgqG93WjZvjsdDh4mhkkpVRAnraNQpMGuT6MjVEsE7mcw89wSs4UsD5gLmsWqrDf7WD1D",
  "key18": "2Na8ACbjeR6GMHb7WUQY8KvYMvLZYDiC4jot94FykoeMHAdoeNgqofE9P6ku3HH5SnZJW3V2kMLvNmDWBvruxwVi",
  "key19": "qieXbp1ASRJGqRo8qM1GcKELgAjrzqkEQCjZwWNCkX2RrCvKxSp5wGNXuK6LJqMjXgD4GgEwG8c6nTHHvMt6sSV",
  "key20": "2ipTz49c3j4cM1cmYm92MjQ338BQjLRZyjbERafzacsMgrbJjz2TZ65cGH74o8rbTDwxJTkFbCvRoTJkrjFmmepf",
  "key21": "4tTBuNmmGJ1RjmXW8sorTwxQR9nRg7osYc73PSQVNTGg8J2evRAGSGYLHFChnohtxSwddgogbL8ohMn2muUAJvPC",
  "key22": "4ScZzQ28hgGex7v2to8tsx7uJF7aJMwdbk2jUdzyQpEQrbwZC8VyjwjSdrwzLt34igx68nKe4T7c9aZuSXSB5ean",
  "key23": "jcLrotmSHRFUpVSc95gGo74MD5BdS3DbBK68StFAs7r7gsUkGoMY1zJLxDTu1s63i89gM26qrrMG3iEpha1XvYE",
  "key24": "ya6i3ypPs5KZt11xhbS3uqZFj2hTXCULTtWNHZxpgk5miXuWwVYmPKv3keHLq9BnBUu3SVc2DeJGmzGBgVouBuG",
  "key25": "4v4CPiLKnA8ubTyeYKqQNEccm88kLYjzBLcKEcqjiJX8pzTZSvJZZe2JszqNGNYW4BgV5TJBPL1aiW55152sUpaH",
  "key26": "4Vptrg1uesRiW82gdEyFvhQcwdHVdUBsq2pZYaj9AUMu8kuL1N4Pdnjf9GK16rgrWfMGteU8TbxgwcADat8iYEys",
  "key27": "2sMAPwjasY9o6Sips7FnPQ176hQqvxjdRQ2mEx4oyotsFCV7tfjMturfrwKzSzzUE6EZ5ehTTGCW88wP42AVxyf9",
  "key28": "3VJZdfgrZ2G3QMwLLPhkw58Gd4vMpmBd47rgcYT4Fwe8K9XBihu1QtLz4RfoszopETheukdenTDJSKGVce7JJ2so",
  "key29": "2bgSf5iLH5CS9vd3LGb5y1LkRhxekjbxCRo15ZP6bdszeaMBijrFW8jMdSuoTzop3tdyPZ5Z4n71aiqd6DBjFa8S",
  "key30": "3buhwm8smi2fbc9XAvtdZDritpCwLTUgu46Fd4sdyBf6HpniJ1V3JAJxdf82cudQqXHjdYKyF1MkPMVvjQhurTwM",
  "key31": "56ZGZ2mYBsNEVg1bxR1JSZupkrF2mjLFHRK83TGhkXjvYVxsRBr87EnCamMPEDwj3ZpDmskvb3iHYZDLve4S2bhE",
  "key32": "2JwHb6D3GZuYPdEwquqDkFHz3SEk8KqQVjex5bbx7XrWDEFVWhArcigyLx6bxYDTdNtFXNzZZL8DrmdFrtqnuue3",
  "key33": "4hvKn3ZZuqepHTmZmSsfUFApoXrBAaVQkZWwwMvaAXCGNDLbZwAmju4A8UNg4G38rKtSF3Fx93Pt8WrKoikGaVK5",
  "key34": "5vawsnRtbd5BrGqY6wNp1J8WDSz2dmYqnHki121VNqBfjEe4G4cXQUPfP7PrHb4T12g9UX69Nr8hx5kz7FPfGxPx",
  "key35": "3xetbZM8uuYBHonh2vYsV31R6k9DYhEgEVqEH4VXY9jECgFxsauGuZzBEL8aBGy8KoB9zXCFKXVKTCwX9GG1SjP1",
  "key36": "2m1RwMVoA5PAHp3LPkP6QSHjstbYLwgE1vWWZLieizRLsUa8ivTP295uaLe2yuB9b6pJXsAegVuB7out3atQRKm5",
  "key37": "8cyC1Z6Z4To26Bt9b3EJey8RqZrZ7LbN1wPfz7jmYFVY6hqm7BkQkq1XUR5RTrYVFAeHPEvVAm5WppQD89v3onL",
  "key38": "2MyEBxz7pyNZVT412XABNK2rGne4DQ76ptKM5uUubgiC7b33fs1PA9riWTQTnYNBpqr3rqtQRQA5zDS6JwsWUWmT",
  "key39": "fHuezhm2Jayzmb4GYvAQ7yVYhZW6omiqEhb7xuWQ1kpuqS3QzTQHDjC1idFhm1jr25G9PrdRPiw21Hhu3mZGWUV",
  "key40": "Vk9zi5BEA9igNNWqgZ5QfhcUyteCboKkWVkYtTdUhmbC8TTENaD9X5TDBG2z9y5hGgyfHvLP5ndAN8CEfQRwn9R",
  "key41": "4s6pQzsf8jj8hmyWEJZsJxqSywFAyPYDtrGxBL8GMdQuz6x5d38nPZpQcfxSRbjEzWPe5WNeMkCbogn7TP5YqvnE",
  "key42": "2HwFxZwCv1Fsg2KyT446gbyzy1EzXhocEmbF8Xx5uV18JbcPKNFXHP5udxdPzBPVWx17jU2LrWdH46M15K896h2i",
  "key43": "4wn2u5KNs4RmD12B7nVA5ENjcgVp6g3C9dWLebawr5gsY2E2NKEUfyGBLDER4sNBhKcVLvvtAZNdYe1KwmerTmNQ",
  "key44": "2yu4qG7un2rCWKGZG5WpPSDbq6NkUCmd9vE8eVgc3VkqWu5G3J7r3U94AVA9PgTARLbfeRKqt9UNPwrHZuw5SG61",
  "key45": "3fojuye6kbRUYkk1kp3xVxitpwWaJn66g3xX9Z4TtRLtVJGn4PxXx3h3LcKeznUK6eRH87fSncHSARzM11tVZf33",
  "key46": "3NVyhmMUPSJe4v1mfTkeLf4JUfZj2Dh62VE6d36mLJg4saYtwff7YMy9xDSGVsG1NSF8qE25931KV5sje5rRLoSz",
  "key47": "3oW2YujLNatAFjWTjc3HVroNLBvXjx3Rs59oCvfwneChH7wNhskKFik23xbQNW7BhZjKeXtDaFuJCQZSyXktSmxn"
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
