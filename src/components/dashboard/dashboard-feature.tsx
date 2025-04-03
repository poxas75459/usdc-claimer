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
    "Mr9Q53u9zFkrrtea3iAjdW25RVfmvtZzbxXApbYihb5Ev4ws6JfUk4kdnUMFR9XgZT8DxXFrXGvqiQQP9Kyukgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ad9PDqya4u4CXoMYhmRZ2foYemYFAAY4hwoYjsXm7Q5qfEXUJkCYoKvCLTPmivVvWWofxv5uiQe6AaqVSBpDoN",
  "key1": "3Mj6KawocHeP8Fj2Lz3XmUfUYcWSqa1SgmwKL6kNJnsgZY5vpMxvHsGgBepe4yRyi4hsw85ka24KKWpKaS7GUNEd",
  "key2": "4b8wQPnS6rkfyiBoz3JPFgvHJZGUP2TgrBGTddEqoef7frCfkcK4WFyAQnrJiEnRmkcKX6eij54MjtuTrYwpToPB",
  "key3": "LcxZihFzEahtx8KEPtPdgZyiWxCZbkiWHMY2VTopjXHzWy4BX9eSrUKKmGZEe2V1aBUBdCyBHP78mGsrbJ5ZZTS",
  "key4": "4EEr5JsNF3ckjGRLZ92xRXWZjW5A83K4rW6WQf27PniJjAwFuLhT5gHWNzAg79VTrje9dUhmPzy6kkfpuYF1XeNn",
  "key5": "5ztUiqaFo4QJoZPwqJDvSbaQgE3xEyU9iz4CRj5Hmxg3UtJtihzzK35arvhuMNLGSUsE38BXKeTGEtfAKumwez7u",
  "key6": "2MyysJvp1TsGW64zErGpscnxqiPkEuguvqTuWm6oB71sgRzwStvXVYgskMkHQmTmPh1cX2i6DPTFSY1DTg44SaWx",
  "key7": "2aZxRryx7p7usYsWoj6YGYfo1UrXjHBSsjgS5ZrjCLfWmo6nrMpog7hdALkWEvUX2BjtShXZFWUrkq8esHfweBG5",
  "key8": "4imYXd8PreD4H59sF6BinAEE68Ffb6P55uYCHvnaBzjT7eyJNGK1nCBKUSbsy3RNoemKbsgWzuR77sTP7QDbe7h9",
  "key9": "42icYqqsWW5wgHYdf9XUCZwECiMrJUHCQ8TjRukUA5mG8wJ8dJ9aSXrfnFQm86em4sNvrRVQA1JTtAw8iZZcqGEw",
  "key10": "44rAoBmdWdCH5ETjVB8yR6idEUj8uYGNghonx5Be6HYWomK8gVPzcmw3aWoEnk7cUiC3AnkwTMeis1dZ8puHJDez",
  "key11": "3h5QHZsQNru1A5WRv6F5yc8mRTbwUmz6xB5aLUCwsc2ZeDXpKNncBLGAEKZVaCwDQp4S5fRgfoC8ct4UXNLU7WTM",
  "key12": "bsTrHy3EHGWurDUYM1LaXuZxdZU6EXayEK41X36HTzPZHobAJxSg18VDvzdfCzbjwX9DXhQXDUfXB9qW9XoiVjC",
  "key13": "JakTK5NraU99xzgwtSVzYGzDCwc3kQf5KZ9UtNEhmLgAaB17MwqxTfgmn72GYd1LGP6JGFo826HUCkj8qAapxgc",
  "key14": "2gxixHkC2RJ8gfL5USAX5oReG2xn84HQMDUKR9pmZeQjG51eFoPNKa2im76TWk9AqwdP6DqenXHLPTjEjqrw7F6Q",
  "key15": "4mRMb6WxanddSrPwphFbZ1xPVy7f6hTknbZHwpkK2ScGnHE63frkwPpwudwLAufxdDELhasKbb8FiPYciiCWNjHG",
  "key16": "5rHikBb7M9zgXufn3E119dUxw8uvtjP59im9Zq6MLWUk1qiVzfboe8Aipb6m4n6Ltd9k3zLHxEf9K8of4HfMXH6s",
  "key17": "2noVGA26nqJyqpgKf9SQAmeMXaXMqerUgNfoGbXCdoFQRsnx6stJxR4xgHWawtxvRVqQbsey1MxJRNArn3XSnYbm",
  "key18": "4Cb2CJ1ouMzG6oip7c42ouiG3hrFLFfZLjBx8nLRpJTdztLXGyPuUnAzLdQrUrDX19oSTHWm3jKarwFK3rEmx7En",
  "key19": "4mQxFi1ndhC4kbr3vzX9oWAKEdDyH9aAmp6tsBdWyXB68kgdKbL2Kxb2gLbPbc2roFykdgk1fmyw56nd2MxPNNjV",
  "key20": "63M58xpBzoHiKukwghWDFJYqXkG6ZyxjYtS8VqstgZTrDsvHTmYpqyq89Aj77NMPaUwotSDqiT1ERAjtNf7SbpVQ",
  "key21": "srAo6q3cCVykJqpq1W55bpWYWhbmzhMztZqXP9VeFNkKUowLnd8fTZe4N7stEAcT8HrgMEHbLBYFQnrLifVRtBw",
  "key22": "3iEyemiWJWzKPhxqLeuZtoNr4gXC9VuBpqiPNEsh9J8eYQvvFAtP6GG7NpbbJZeWAY7yXci9BMdx2ovVDM4VL5mv",
  "key23": "41oKeYYyZBCH82TqE35WtcRuSCrDkMUUoN1mzbe4FYB8K2ih4BSzmQ3TVaBUBQfpxK7FZQv6NcoZSD2KijUU6uuR",
  "key24": "2BYmAd3rM5GJa4AuZASP5z2MMkWmvA3eVA8JiPr6DNTUKKRrjwq6L6GpPsjq5ajFoYe9BPfXjgmw3MHmMg5h64QB",
  "key25": "3aj9X6QEtjfba5TeZ1mKMB7eEdYH3c8TT91nCNH9zL6nZwvTV61TkYXQaLAHCzYtL4TJc9hKWPmLJRWDNGAuX97H",
  "key26": "5sr42gkiEX8bdEoEFaExJzbM77nTw9JWGxejCTNbDTbtukHXfwZJ6VAAmhLAf9WKzuBb1kXcGC19tp66UvDnLQ1r",
  "key27": "2TVUJvq7Mi1NVfH2WABtKsyQpwwKk9vX6yWsdsQeAjiXcYWVTgoekFLrnLswfb1RWqGccBTn8BZgMrcAhmH18kH8",
  "key28": "24nQEjJxN7xtS4Es81vzhTz5hRFyrgAAREcgtohrHGprE5LSa4RgNESpufBg6huxnwoBqt85pH9WtBqRjgfvpjLh",
  "key29": "51szz8ciKztgXDTv9ypAHqZNsHgHMyasfPaznQnCwbjDQ51rSJAd4Ph5H7WhvviHbtuiuPSRTB3LEz1XoNuvbpMk",
  "key30": "4ZgDKo1kWD9USpBD1URN5GDJRM1s55Rms4i15TsdSyD3YQvPXiiiBzqgnYNQ43q4S1pnged4hLu3cZ3xfDZKnfF4",
  "key31": "g9r6xjgFmcuQwb62ZLS2dpmjaJAtk4LCwJE9dpijaA1WKaVavaA642c4Wbrjv94VPCz83XZVDdB4ASa1zMYtVRv",
  "key32": "3XUjqjSvSECkH44FHB25DPGGmJBjRdEFX5Gf1RWqBf7iBPLTcCUimcmA2YNheKFJszCDKh8JBMehWXrAyVZJsYWi",
  "key33": "3LXUTde66HrNe3XJeqYjHHsGSvahBWdLtQAYPNTFXN2nPzxYxJfhYfFf4E1PgfejhoRpTGQAzbroXe7BHrWLLQ45"
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
