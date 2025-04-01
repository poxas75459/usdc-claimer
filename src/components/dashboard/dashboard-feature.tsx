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
    "2SntCrJ52nghyo9yDwqbQMoAXfEvvJLayMCJ2NXyYJePtwy21SA4CoUPhPonZjfrVF5gAGYvHw1ifJngAooWvZeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7iYLz8JMJ1md9SFELWZDch5fqo423T8VZ3TWhLMexMzhcp3jZ3S2rSnnmVoEUR7PBwSsQCaFpJpXYgFETJ4whn",
  "key1": "2sHyjEGsP14Z8anXMKzd17SWU2UFwmQBfPunRjCQfiDt7aMtp4tdU6QzGKjeg8MjcXrtJ7C63AecDNh2MMsMHn5y",
  "key2": "LYU5gTVuyHxReVYod4KyuThiKTLD48th4f1ycXDhjA9AcnZS7uRK5X99cZ7evughodYDu2X3mcz1SnZi3nFVTmw",
  "key3": "3si9amARAmkqYNwrSrhkxqqJZiPaEikfd8HPVMiKp9rDkjyag3nHh67poR9sv23UYMau1rqp9hKyFKBSv4p8RGCB",
  "key4": "3ei7mK2vjHJPASVe2Dnr4eoayMqF1EDC5ZaPiV8NDcKiRuRSeksE2vnRiuhWV3YWkfvRbJBrEodBoZmLeCHTq99B",
  "key5": "5z3XYLzGZwMeYxSrmrxAg5prpxcX8Mr1pgz4E2Kzt5eGKkuYEhVamvmazffcJiJJqM2dFUA5ANT1BLCWuTn9z9nc",
  "key6": "vkFaH4WJppD1L5fHWa76xSwe7riz6Su3XkxwEJZSQSroYoiuum1YGmjqFNHeH4ULjePb9goQkt67gUyZ96YXikW",
  "key7": "23Mssxpf6K4jYD5EupF1NEWJBxU2DoZHiuURJZxdvv7tmv5kuNXc8snuqmmfYyvqV2qQRC6F4TEsLAsHWkVaHAxy",
  "key8": "RxF32GWyjxgibPb2sciMCa6NgEDDPBxMw9yaZE5UvngbQB7vj3WBHrXsbmaCb9N3QgRxYPLaLcfWznmrmjaSpMi",
  "key9": "4XxtfRGd6Kxa3JdgM7JK3wm483gZDVzipDFGZUuaSu5fQ3gHyAHPWTrnR1Cj4yoN8QQnS22xt8EdFvH1QUFA7eJv",
  "key10": "wjHJUifZJZqcaWM3C4RAUkCzYG65hTtfifDohLaJ1JdU3LAGdDDYjz4Lk6Yz3EzsZGSqZ955Zfapvt4ycPTGY1J",
  "key11": "4e2eDQDiwQmbPJSuTE7qf3DyvTzNZAz3WySeXc9Z5gekmHpFaxFXTvsHUWuzN7zsLEDa7V8Wg4TJRfN2SNFfUtrV",
  "key12": "32C6JVjHRVGX3N4tSbDmQyHe4EqAUcrNZQKu8W7Dq9YZWtfcQkdHJBz19KBcbUWSGSNnMNE4fyccbsCk6wUGBBb4",
  "key13": "63poRTh7kycoKZ4wRQ4wW1WmoKg3BEt9WWgesrkZX8rzJyNxDDby5dceNzYTx4Qdm2kmpjdtuzBGzWRbKemrT985",
  "key14": "5mdTpAPK6MDA2B5JWzKjDpNNzY4WyZ7jL8Ftiz8pbQc7SrK6pvxF1JGnFWe5g6QHyJ3FDwyJQcLk8eFbXDQ43oxF",
  "key15": "62wWzvmZdU7sLr3D9bjQLGVooPdnX1TCLhrPr5TZSBGyn5NJ9vzXjD1PHGynm5GSJehPccfHWBKmSWASejZutxwn",
  "key16": "2nexASRwTadE8jv5U5yPBcEkKrYfpBJwSCStUmcZbsk4ZfQgkeKtD7YA9iHwsD53sUU4txGoxQK2G1mXDHQw3A1w",
  "key17": "KU77SQnn1HVwF2CWb7nJgLXbBc8JD5WrRreKt8m2BZvGFLYgfDREMLoVGKpoffiqGRc4rdc5z7dM6HfbAu1ZV92",
  "key18": "3QnQXbmANfBzFWRWM8YX4UAE3enNPBcNkdJ2tvccZEKV4ZRbmiPkyfBSszYeZNbhURTsTKd4gWLxpbcLnzazbHUD",
  "key19": "34H4EUpd3Z5Pr9e7SppEZ7LGEjr2uMJqoFN2Cosw9uzrDKGcwhXGjSkkHGUMBDQvJpcregZm9hvYxpp2b2z9BTr4",
  "key20": "3mcz9NHK9hd6AzhAQ6Mwf4DBKLYMhpX9xNWAdEFsL5UFEwuyQh6xHtiTUgHng8KSRHHP3ZKpYfP5fZUsSM8noUZS",
  "key21": "CoozixskxqpnR2dHCMBXRat1SRJQpefxWDqJB3zLhz5FpytUkpcwji5DzzW8BK2vqNTEPLX25Fa9Q9n5FshEtGy",
  "key22": "5gVjCi93MngLCmABn3HTKp5AH7918XSi21Hok6zeKKbqXooHRoskvkxiHtaYUQsWamm8cahKFNN5i3kgpNVQ6Gna",
  "key23": "2afgizR8AtUZ3dLmgHznXVKSVrSEQpebh9RUmnRNPMZHLkd8zrtXErNj3V7wHnik2Fo7mAynMQ81r6hoXFTbV8G4",
  "key24": "56zJneeGAZopU3uSrGuQwPX6BAKEJpdZjBax35D5HK4ciyQQziYwSyt7B7dxWzH58EEWCsCb98wxG8Fp6u4eXuin",
  "key25": "4rJzxeaeufHRbGofzPYKbW8K1ohUsRqAw4skR4Z11mJGPYXwZds4YBsABb1tbQkjPZZZ4Z3ygjTFHMqwihdtgxce",
  "key26": "4TK9Xa3TppurWxB2XiBCrYhnfcGzHTG4Gq4ua19sjyjQVWXrBuXfftnzMfy55QYfiJ5G4pRozrx4s3Job51aeeP8",
  "key27": "5STsSurcvXHFsNvRVEHR8T89H9uwKduBVkMmx6eRhBGBqqFbNLzfxGseLyK9erWWVjqCiT2tMzuJsBNKs7Vs1Fyk",
  "key28": "5rsyXs2LZ6GYqgWoNHfvTnvowgbx9CYKsUXHiPBRSAzS1wVHyEPZMZNzNba4QEj17zGeZ3cLtwWbuVUc9P4rSMKp",
  "key29": "4CW8YQnxAEKr1yAXFbBRoG6fX5EEQz6M5qUFgw1wim43KwCtWbqLmW3zu4f9SjTZo9z7BopCaiKDc3LFP5Yuuroi",
  "key30": "26Vr7NPiawTR4ruvZJZXC31DKGpzwBURCjbHmJLDLVfnRNqWyVoX2wvJA3kiKPUDhvTa9RfZHmWx7gRE3ST5B5GT",
  "key31": "4NJR24xyQwKm5mjruwKPBjdVsvKvpC1STfz6okPyjntpG3GQRdjYAE28WAZHN4bmNForMrpGpLtgifLrDYhdxMMZ",
  "key32": "5DYqECynfn58D2CyAGq5GR17GwaDLpuveYdqYKLYLQRvouduciH4o26RPESuihopGe6XWNjmEP1uBMKget5KTmGP",
  "key33": "4CPgMVRjib6xwYG5gmQSP24nnUivUzk5s7EUmF3Mrc9MGPaZWLiisLZJUw1c4Tb3eEKQasuoAfFu6Z5PtFj9unYP",
  "key34": "4pBJnJkbtnvQHhoK6xjW2RtpwEePomjdVChfFKy5xbk96XdCTPDEZJkQPjwduLBqLDGttYEBxsn6yHt9KNn1hSGK",
  "key35": "5q99Htu3QYk91gPWJvotou6Aq98a2bKNbXnBNF9ypYjAhUJrFewVuwYNuhXSfds4WVcno6PFBwQQGA8i7Rw2dk4S",
  "key36": "5ikCa5TnY1a5ro6qmpZdGEUVCh383Qa84KUnXhV9tDxPmHeez1p4N2JGmtmR8kdcBnBMCm5JVqMJXGeUjb8zLCyg",
  "key37": "KAatczCgZDn2o6QWaJn9FMGgrbP3ZJ9B6U4bUJT7g2oAdkKmtfQ8iEpLXzawYaoDuZ16QBwFgdg2NHvZGWDUb4Z",
  "key38": "3jVYqiq75pd7fCBhzqwiPFuJnzYKv9o5a9BmVAXo94KWAyaVyupHr782rS3up42Wrkq1LAMnUD7Y9ELJPTsWKMsm",
  "key39": "5wSstLP8aANfWvwEre2uMa4dKhY14XoWMmxWS6obaFPgFJMvgkf7Cg3WELjA73SVdiwRHuzkVt3souWghm85VJyG",
  "key40": "2QoS1zuHTBWfcJUAjMFo7dTNzmSeW9hbos5ts5XhL6zbD8jUdZCzk2f7KVjea5U9ZDfWXtWB4rVaaStyVW9JnzZg",
  "key41": "5NMjms6Zajq4B7yHjWm8bd5zvSyfUpAmZJruWmKJQnEw945FmxV3xhJqKaUERyVXhYM1fHAiRhRfNwx8zF5c5jHF"
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
