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
    "22VPDuRTasNQFBuCcTuUcr8YK4QzyQYFuMdFwJhtxCdFAbLUE8D4WmGPoXjCW2hjFd3tx7JVqWSwEiZrVxGqorh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C5UJZjPtkcVqKL5nUn7vRK5qzeLjwDWm6AEKpq6FWfKrwofGG9rvex4ZgDxtsQfBZhPB3ddpifHwVT55WPEhZ7R",
  "key1": "4dGh4QmCK8KX6ec6HHYGhRyBGuBgnSQ9AwQXFe8zc4tJCSPn295g74Umgu3EGT7kHvEZ4DSipg8jLFXNPVRAniuq",
  "key2": "tEzESwmgM8XwsUDYDzvkkDyGsTaxYq4aE3o5PLqenwNNS9pWdvbmrRChUo8Hq1aZqLquskBN9RVvbsd3CfyKZYh",
  "key3": "41VpakyXiUYv298snbswY1f2Y2BD635BxJAHXACA7s92hdkSWQAhJQHoPPZ9stSAvKW7huPMkktJA5jy2Azu5N4v",
  "key4": "48cqco9UC5T8vLVgKLRMuTXiuTexJccQwbWnMEpbfxNBXXAaUouT9X2W3ACwbBFNsNhhAeD3a9LdXpxmbwGYKB6u",
  "key5": "53kLVR3QHKTZG8cd2D6ShGLvLdbMmEKYUT3ZM5zsowWTJFDPiK1ChGDsuagcabunwyZzwM3QcA49oBP98MguSBd4",
  "key6": "3yybf4s9aw7QxbW8iDHd2eDJgay8TwFqiPMkLwWqAPkL4C4BvEXKija2KZpNq3ZvhLtinczJxvzeBSNQvatm1toV",
  "key7": "2JAUqFCCoMysBCagwXux6aGQjjygceCkqexCw42z7aJCVan1CrT6ok2ahbGCpAGNEgY1J72gDkqSPYRPvuXBydeu",
  "key8": "2bkbNSD52N4BLd6pKs8xuWcQZn85Jh9pdAAwbAzpsZQzGLqUqvzwhXXAwEShAR5RJXwc1iHfHhMnoi7P1U1gy73z",
  "key9": "2hqhjJiHZaZEkr5Kr36VgyRPjyYsriiSUaJq4tpqD8QmpmC42L92mPmYtMQ5n8ieTz3Ndx2Mao56tKsE86zvg15",
  "key10": "3BUqtMN62jcz6ybzVXa8f5qfWsfCTsiw363eL6B4Wps8rcoXcX9zitWN5MmpopSxbwWdpbkrdjSqCVeS4DJkpmai",
  "key11": "2Dk91PWa9mwpifFPCgGy93RbZtnrbVxRZQGrtaSGy3jATFZrbH9wyRQCdgc1SQfiKr8vE2ynqSunoT3fzVdvcWro",
  "key12": "Wr8PNYuQFJRbhm2jrmqKRbWqxJ12zLuSNKhCoHuSRFYt6wQ7fEs29YuGWJ7FNSjKyNukmQ4MZmzs4sL718QRt74",
  "key13": "4pSynx6U8HUcqo94Kfckgpv74SSqQw7k6nSp9wRnoUiZAm554tVywaSAPH25fxEsTG3a2xnooPrLUxbSrpT37GGY",
  "key14": "QCMzWffL8kmNo4KrEQ4dDbQnGUBZJnZpyLCvJwf9BjPk2BjZvY4p5We4XqHJhQwpUn91go6XXgepHgRAie4yT5S",
  "key15": "3AY3wcspsCzZVVBNXdGGAt1G9C4c3mNmXRQW43styn5d9LXxkpyYEpdzjgmQsex2V4XHXJoidZZNthbdtqgpfjyL",
  "key16": "4NTs4AEWuuB8UCJT8eMPwRh9gMzjbT72r2QqSGK7p6NUjNGUavymH3PK1K4UwDgePNBsW5gXMos837pRf1o1YLEu",
  "key17": "4iFMBiCHb2jNe1jS5kA8k9URPSFZtpQZY7nsUZDD1zBKNsY3zgrcHk2Zhz3ns9EBvcDdqM32HRrm8GDaMEkHGBdZ",
  "key18": "q2eeYwSE81bt7myTQdYxpqsNfKE5b3knkzJE9NG4Le5Nqu5icYVwVRvie27gooUJQhiwQ9X5xni57dN19WkaaaK",
  "key19": "2ccgWsJ31VyySKhzAccYxcvqbEPvvAWZhhG4hCdWKPYgr6zkPXHFH2pGFm2wAfebJbqXkvngwGbhqFqJATU12txT",
  "key20": "5SUXSnGsLm5h83pqTXQmjbAwB79p9s6HjJEi2gXdfewcCVmc7pdi64Nyi4jHu9PfjdhoA3rkcHDQZEC7Q3CVAanh",
  "key21": "4QMENNiNK8cMvMYsJXfxJ9ih88b1yB83v1Td1LgszCccJERxrUQLPJfqrqcSPNdHACtNoSW11TrmH3E3nJsmZAuR",
  "key22": "6kiazcEym5sexFPjQKXnJriUCbYgHpBGMM3KMWKqAWVuVp97Sgi9FjSFgxLVj6MsogXRtRjc1Rc2prCviAUjXLF",
  "key23": "4Kg6NTZzAUUbWRpoeZuytDdFWpc2qdb65UXxy6Ds5UQxHwVjkkASC9hbsfF4RHwVrd6Gvgna1SxmEDcevLia4JUm",
  "key24": "ZDr9x1HVofk7GtK1xZkNh8gvsVWFg2Mgk2o8nC9k3ySzsdNjBdtY8KRwELgni8X6JHHj2HddvoBQLkQvXb3xTRn",
  "key25": "n95TzKe3A8WTLqwAJqg2bfFYV6GrGsFmbkzS7gnJf5pdG4D5e7Ki7qHfBk8MSMSetxfBB7Az2NffYBibEAvLstk",
  "key26": "39yLi1im2bHYmLutr6B8gZ5YDP9WC9t1QFXCaYeL9UHwtqwapP2kWtix1MsbWUkX8TKTWSc9bv1SRVDFt57vHVLG",
  "key27": "cpQy3ciN8RnV7HVSZ6BvTed7xxVxWEy2a4GgY7w6ygMXG5JiwuhrMCZAp5a6YEMNjGiexauD1K7ddMf6NgZXgw4",
  "key28": "518bZ1fPm7tWvJubonaV66nhJCbACAxunqJS4LeGwYxAQsk9NoMEgA4UG9mzFKcdvaxCyTcvGAws1CajQS2gCE75",
  "key29": "44WESnZHehbv7qo7nexBWdgogikYT28XYdKJYfTp6zP9599u1giSBdSF42Mr8zPK8oGoKjPLFFeYeWrRsL3p3Dtp",
  "key30": "65xhYq7bQbLujnEDyX1sAHj4TGY2syhZQZkbMMq2hKj9xfxrg2dSq3yjdNnd9TVpf2gonbBfuFbm8ofma8CBVxYJ",
  "key31": "5iPJhMEW4n9nsZ9o9xvykQjrLTvqnnuMohmZJBuEzpqTjiyA6ZFW7SDezremfoNXTwUNHwyXzcdVH2hDPHGhNhju",
  "key32": "3MpVGSJe7KyPGis4UxaHszXQtT4e54B1gJFuabc7kGB75rUTd875Ux6ZWFmTiZmUdvNpUY2H4uYAvycGevDNzkYF",
  "key33": "EThMmKGNu41cYcqTko13eDvHCWVQbefXLQQUckVUSjKYC36xGLkVw3WYnsxjcEmupESbS3FSx5q54bPbyA715i4",
  "key34": "2qCQCmmNgK8Qh9gBSamPFLPdf8z45z1qUdoxXLGgYWmA69sQbZxGwmKq2LFXQvoRM89KMGBQCk5mRFtntt1kYUBG",
  "key35": "4ZT3ZPfcHbgTCP2hNKFdMK9fsXzzN7T7Wz6K4CVAWsobeT7MGTFTk8LgmLMx151tjeBBgue4q7nU48PnoxKvLG7X"
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
