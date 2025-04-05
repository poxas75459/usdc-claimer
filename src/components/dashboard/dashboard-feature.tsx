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
    "4MUy29uzCRn8fxkioowSzTwdoWPtnQQosbjvTiA7iGqiMpCekU3Gi3TJvQ5ySmgVqD6Q7eAyr5ddPooe26awEShV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQyKuUqXhUkWTxxsw7rWt4RbnywehiK7sah9wc6JcjLxpTNjXY8FjUpcS5hYhwZNAUayo4HxnMsRhGa3mLDz2Ec",
  "key1": "513jTYgZEuA3AANZsCiN9JTknmRfFmcv8vArpH5u8GeWwgwQNGsJjDc8pL2P9hMjHH331s6FrZzKuFWPq26Go3nJ",
  "key2": "4rZLJbCXxPjzqC15zYBaStezrUcNfdiXmG2uEG33Cg3J5goCFqrTA4RMguiwnXC1YvKuCCsB5dFsD4qWvt4kSbrw",
  "key3": "3oFFKHSutvyeNdFCbTotCBBzeX5bUzhya1V4UbSFqfXdiUfxMdwVVXA7p8991JBdfbrXWjrBqCTi3FUdAwyS3NbG",
  "key4": "2YhwuGowbLaBFkh2re7r2oyVtAfZ9bBN17TttmjuFaPnusqK84sRS4i8ji4NG5HXWzahmZoMKNm5wykB3SU9iZxx",
  "key5": "3r8umNxUANjcZzUTLgTwKGgAM9hM8HwqZFsiyRviufevxY4i2Kcrr3AcnFWvMn7ow9C37Q7FRhLfL2XUg6TjEQym",
  "key6": "4xg936w1NABrLf9iyPWtqfYUg4yfLyuJRVrsNrAt7fbspWuK2ejs4TooCRofGVWAC766HDKcXmpmNxKdTYLJkcua",
  "key7": "4Wx4KkEe9aKNrSPTWMH4Bs4L2ZmFjLtnxmrrMhmv9rhjst5vPd8GqkNvffmZAAWXG48CVt8iXCkXQ59jJWtHKBrE",
  "key8": "4sedqQeLDDVWtrRwTh6jFMNboWg9g8kXHrq9DNfYSjHk8QkserS21UCgEkHkqb8vAzZAYBRjb2TfzvEzvs9Dgyhq",
  "key9": "27LinX3dSX2yeQLHMfGg3jFovW5JwQXWWyLkUW5kJJaqN4T7Fv9nJVvPuLTYTeaSAT721FxL87a6mnEQfPSCLnFv",
  "key10": "4o9Pqa6HeLGrP3JsCG5jBcyr8Mh5y9TB4Jkg43uLXkP8taTyiSFT4qqrkKiQ7MMiZkAtEYUyo39MsMXz5wY2hMMT",
  "key11": "v3byohXPwikPkLqGdkJeBQ1h6JMN17GMSTJDRgz9NZcjZBkqqeUaDHdB2DES6Wg1bkoCkYku75xHnnBV9VwUwNx",
  "key12": "3piFLP7F5k5UQZcpVaXtRncTcQ5rhJZk6a1yXvaZdAdRN55aSVz6MikMqF9z8jfmfqDkHgoSkBFt3HBdQ7NxFKmv",
  "key13": "2JhBo7CTDHBG3LcDnEqbYmh17YJH1WPDczZGomygnEnNvbUeLuBVzkDRPkDxpKiE5VVNUa1corC6Zm5gCZUeq6K6",
  "key14": "3qVgtcVJxBQGZLnChVQfKGacsS6woEVRD2dqPsPaZceEdvKkqCRjSNysC64EtEap8VCBqW3BmCQtaJyRYv9nn3qb",
  "key15": "sV6snLAFgCFPULj5oScFcsmCNAYTkviHarZSdseNHWGB3DLrjVaDhZbXAGyay9Mh6jLzu6YR3spAUciZMS4APdf",
  "key16": "3yXwzhEUUgZhujwrFBVJkJrGPmcn9gLLMTVXNx1k5kzcgDih9yaiYpwTB6mqHuVhLMAGqbQtaFPbkjdnoiHAtGTi",
  "key17": "36H7JZpv5Z7p1nbBdvqaq1niAj8ByjJ7vgb4Agfx63cwW4Xmrr31BNzS29Ktc4HzQwYMcZhbMZpWmoL7p4UP1cWU",
  "key18": "3Y29PhsNw81wRhkV3BVXwZzqpwZfCHxM2rPgmXUjNmknexZvEedRGLhXaF7bBUaV6NNbkqwuEbKjhbhrejxvCQft",
  "key19": "5EiYJBFJDgmxstJZKk3qvxtBfYcrhafdCygXJ3Fx6v5TBaG4ggWppCistp3tCbAvxep4naCbgMgnr9BjkTo5kvCD",
  "key20": "4StQJibGBUnV4UprSrEzo2SMfRi7PpoeEot7z6KLgA1sujATyRXjCESArbmdU9v8G2Gb6CbvUUYaT5p3AjDsRxUu",
  "key21": "WAhonS9JVKowuggwcR98dnmUgdktJ2LDKHE4avgp5DJGfAhUkM2m9TeXign4iJVyxSmMjy5GnEW4Sh2g7d5bBob",
  "key22": "3pGyh7k4jMFnwUKSiY1bsaRiKjzPAs526NwEbabnn3suZbngSAjMzPw2ZNsWYK6WY7xQwLpDaBNkJYFywb2mVbEf",
  "key23": "4iS7ejzoenbKbiRahDXveUjtVwhJ8RRhDF2ynWmP7LdZyLpTsFQq2vqKY8KdYfFeZJWZyVyhjpkMEvwVbTQK7VDx",
  "key24": "5ZgfuPD3MbefgA8KQQcvPJDjsQ6EX2kZYeRZp5NrvJ9D37nTwJUYdmP99spFdFRznNjQJ3CVp77Yofp3E22ie8z2",
  "key25": "DKA7eLoAVjP7Y61buk6keDsNhary7WpivAH9EeHdxfashgtM3nTbHGkDSq91e1radHajZbp3BUNgdndgbpR4Qpp",
  "key26": "4NbScwXS2rWJZwASx2nQdd7265x1SXF86FGBeYwaUYMc8CYqpScANvyTdWBCRGh8c8we6U6891CWWzKjBMsKsxZQ",
  "key27": "5DQ1V47vM5NeVWipB9ruMVen64xitsm8A6AMmRs5SX95ftN5nYerNbNvUzscvidTCwPhyCwEo6RgZSJ7QWC6UEDh",
  "key28": "2nD39D3Janqg2QHM95xSKgHxTiRWPMeN3DmrGgTrfcLKhcnpiHkkPKtu6rjo38SkGLTNnKPymK5cY81TGfTzimKq",
  "key29": "3xFB95xEGLRUnZVw4GNgJA7gR3zPJcgcUpuQBJhqDnVbLgQyx6sa913q1xRx438K41yCXfQr1QGPeKdsaPCcPmma",
  "key30": "33kEhwV9QFTu96sorMKZFoYQM4tY2WFkC33BgYCitsQ6FnK2D9C5abRuCRQeUsGYposusEqH54u3jLPVLPNUHweh",
  "key31": "4CLPFG1CHJagvksJDKqZNPi2T79aC6HUgvuGWPXKGCt4CmLzZiVQR9EmGaoAxiyh39EXqMGus7WdvVz8jioZf943",
  "key32": "QvUyPNqxi319F4kAdnqx8XeoVZUBB1KGUwvBTFRRgb3Fpkns3kVY5Hwqv5WcZmejLbTAd2uk24Nm3YyymbDdpZ6",
  "key33": "2nVLuK2hQvFsixCTdgUAW9snnhSdQ7V6g7DBphsAh8qWVrZjw1B5hP688152xwXMofA55Fko2obuU1x8KP52oEsg",
  "key34": "L4hNK9i8Ksg8Yj1yQiBN17uekTjGsgjeVViEpQyu1ipieomFrs3SvwP1QyueuLjAEK9d6reXfRRn1C2HAggwgok",
  "key35": "5jFAiKnPRcxAycgwq2n6ZhXdokQohBTSHo75qXLiEY7uaXQCYBjBNNnMjhZ8dzm6wxTtbgweQrjMpvzF3HzpksS6"
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
