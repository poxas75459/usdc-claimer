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
    "3wvzFVnf1YrkqVuszJcspSh22jtZt3C4BgRNqnxgS5S6RjcXE2PrFhvoUQLLuRfbBSbAozhopvnabeWAHFsDY6P7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7obUHgY25KFDauzAQ2Y7CdS5YhUCzfqXvQWS6P5zjcFBQwzTMEVG4RmmU97QTRzmtZGjbraM8ggNjwP9fPqqSR",
  "key1": "5JjLsJ3jFnm1HgrUDo8Yai4d1Jf3b1KYaLCQyrJFS9QJ81rKLEDLKyBTw9wFphBWgqdZGhwEnhiMPpUoBZV2KU6g",
  "key2": "22ki1xVGT5nu39HMBRPLtmot8x1a3zXNXBPhwjbgaTGCDbRYZMNSM8zgQYsZMo947AqQANjFsrNLBdrPB7KFqDSP",
  "key3": "3zsEwtynz9XErD6pqDwCwX6XhZuCzzJJsasMzCL2pwWWtHiajbCd9kx8e3y3Pf1X8EcJSvozErkWgYY4cBaQpE2t",
  "key4": "WVnDXtwBPHyyJzsSggVDm2GsK9bojJbakKvAo8X6MJsFpdHrhWgUAUu1gwnAoTjsxip66svmRSiiA5iLgB4Eh5i",
  "key5": "2qv7WJSdYHLutPE3kp8eNsVSYiWAJEoBX5kotJqxasdbPrZHjxryvDKrHNQLVe6ocauZsbMiWPGnfCDU5C9bt9Mw",
  "key6": "4k84n76iu3n5vCd4JMabLXaBXN3y7TpU9SaJ8E2AUreix4zT6BPkZpVWSgzu5xJhHsre8BQyYakk9WwNFyiNoiZx",
  "key7": "7mvx71beqgfe3Wb1ZkzFW9jQ7PfoomQwaQNqTsTKZ67zBqSuRJzzsgWzqJ3XaKA3JhbBYaAd36YftRiq5qrKjkD",
  "key8": "2seZbUmSBq2QEjVmC2xAM2cqbKGVGdfH8GzNy8R28EeE2BaZMvg3RENzVRAroKTW2RgAubW8PLyD5VMWpKvsgZm1",
  "key9": "3BdGSy7HdUnKtvXguKmwAQhpDKazeKF58mpNXxcY88ECmuXyQU1kZmk1a6F9ypus3xcRdHWxzrid2LBh2KxP5EJG",
  "key10": "5YQ49Th18ib3eyFYRdgZ4TCTBZFqncwgQX5mFYbrxwp8Bhjkm6E5YWcjsdrXwviw5bRhWqjuJX4jGAe6EcARisbL",
  "key11": "3qxEcJZVbz9T4vWkUKJhWE68S7CGnqWD7kP6AnzZF7yxUjmrSbdz2ML41YNs4ddtUkj4cuSknPweFAfg3EM7Y9N4",
  "key12": "GkHiGpWPhmxwj8e4vQzd429kGAwkRAc6GDHdjEB1cbK1h9QAJgMrSsZGnWh2AGKDM9F7Hbeeftj5CNXsuRC6RVj",
  "key13": "4qUXynZzMVzuM2WgkbdWpqYs9pwhtthzbYQ3KxHTvwPdjJCjfmEwmq6nfbkyjfZ5z5prttMEB5mt5kzAwcJPNYMe",
  "key14": "5KT47nycPLmNJN894NKQXivrnEGJSFi77MxUM1NRE6XZiMLYd6oRAkmUhVfX6qhrqF3KyuTa76uGo2bCdvyeFi9W",
  "key15": "47VHJCcCCnSZyJKKWcHgwPEBjsuVKAZ5yQqEyeeNX3JgXnLy5Jg4Wj4tSXHZMHtv3AurEs9UZejYyzRzVESJ61QG",
  "key16": "4oJxn3DxmhuuNpFvvuUKQr45dqWiD8WhNPNJZ5vCVpeMWyHnATpnJpAtSNypR8uHbsz3YsovEEEAZDN2zMHDRfrG",
  "key17": "3SaGK6zddWNeT6q3XqJLBn1DxWK5XUQzrJiQJoxpAakBAyEx7fj1Bm9ErQkbfYDv3XRMXJo4DgsnqembDCzkAcFT",
  "key18": "5sZvRRHoHHT1h3jBzVvzTb51iJ858hFR3N6ipGn71q2wffYzqT5bYV8J3cToS2CbqqNZCGTpQv9kYsToYTVJGPWA",
  "key19": "2SQJ4qRdStchiw1kstoEH24C2EyBDBtYohJRuKcdWt6TjgehpntK1RLoDtJTUeZK5jypytoeqXP7DvZ7yhYr7UPW",
  "key20": "3QZSpL83tEfkxnAvbMKebrNvKBphy5xXhjUuZCfch4saJShqMXfBKSbiqBDYBdNi67YmzVAVn4ZHEKTWD65soejL",
  "key21": "xtH3QC6M5HJJmfNyNeXYx1FkSwHZrLW9PoudiZ8W5VbiwLk4oe6k6s5dmWo5vtr3Vz6L32TG2uwcsFpH2ecbaQT",
  "key22": "fgx7hRbpnVNgbodanuzFH5ARwHgbaL6V7iygNC35vbfCNiNE4m2Y5Ua7kfERXEoZwqed15j4KoxcxvqM9EpdjV4",
  "key23": "2Km86znM4nitTX5eLPJJQf6n2gu7hVZxZeVRoyFkULQbskezyxRiHPqZFCbpffAjFHUuWqK3V1haMc1CV5oXgzEr",
  "key24": "k1L9taAofp2JJ16zxPmvjWuZRijZZ2rbw9njNKA28hW8tq2eKwQyDp8n2GF7mn73uPLCkSobRkADPezRTqwmeSr",
  "key25": "34w5yngYqxHujEosTTcdNmH5F6ZLhcgrtstUd2TZst8LGdBXVKUvyLL5JpJVzUUMV6buVzXsFHeucS6QEBwaHkrV",
  "key26": "w822QEKWuYtmzM88gbQ6YNXohm5sMXTSgP5ZxL28c51hV1EjS9ug2qHo6FU6FNwWLPSAF56opLLDf9SYBm5L4t5",
  "key27": "2iNb8xQu4pHyGvKKhvgZ52LogmnUF8STUbgdbFQt7Wyzm4Bhv4SigLFUHsoBEKX2bDVQeCKsT7jFGXM9EQaNDmHx",
  "key28": "2BQfaCb9c8E6hAyspeGT2wZnHcjUQurZkDPEvZHUKYYmqXnkbtpQEFzysKSzPREAJyBaMViUyN5Mzk5GDN5RWiAS",
  "key29": "3DBcMPWnqzXaCxrpFGwKr6KRpAppNJcxR8NQrqmwbz6eA8VLHrvysU3Nh48TUTiSvCPypnxgJe1weDguRMtjkh8U",
  "key30": "UktEnAWvbqHo5A7QVUp5YYpxv9Z1zCkNjdQ4dhA6CadrwECmorQKLyJr9AaeewU2dr5Jh8Dg36Uihc6GpPY35gg",
  "key31": "5aDkn95dwQLFibMyCRsweHmPHAa2x4RfM9X2HTb6uXF5mret2S2M9sxAXiXbT9zfZLngv8gexb5G8RpyXmbvwcBQ",
  "key32": "2bUX13jM9d6njtVZRozS1QzL2oV88Hsjz1Qg2QX4xoNGzgS9vtfxBELBJpoSWgBzKG9hmxYFncDptiCebTFPrwMC",
  "key33": "3XmhURCpsRUWKwSXLmNDzBf16sWkfLn2paKDLSaF1SC76UkgmiWa4a7t68fwimkHfH6kLYWaTggcgJd2jGD1XLD7",
  "key34": "RVso2uicx37Zr6q1eRvJiSm4uFrxx6mEuXJFDxtArdTHb32C39L1WF6ZrQYPPAAMYzy6mZC312d4Uozo66oZzsT",
  "key35": "368jk2UcKyu5TsEM7rywyjsTH4FYHGjTXjvu5krfEGgo3nwdxM6qdMtPABQeWvcvVvrQxK34DYNDriuebAJP4zH5",
  "key36": "2Ac2GFj1SfEYfE6DMiZ7MwXVKknpQVQNciVwSRKWQXJ59nkx5EUYutGn59nUMEz4aEDmtuQEYY4XzodeTT3ReSW4"
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
