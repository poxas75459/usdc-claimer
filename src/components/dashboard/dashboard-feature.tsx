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
    "376ETM7PDwPAH3av1PxmBuMcAL78n7jjXXLJWdVAia6ZPvR4HXvLrqHncbbpoh5Dd8eiUzfiyGqd3tt9CCWyTRKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3W197ut5UCbLCxMW3myL1nPq14sqYkwhUocW7kpGs71qKT9iTq6thKumZKkFKPR7pntGSjYiCAMQVhv7MEbg7V",
  "key1": "x3Ht7AExqrTKhn1JZJ7fmgFiPkH9tdpD4FqtJj1akNpgX1i7mfSFQmE5vpfPnPkYoppn43GYsvxdWZJdYD8y9xp",
  "key2": "FwuMVfTxBgp5X9wXC7uJE7Sva6W2vA4CNaDi7J9ERTqRkqz8oMTFJfMRQRVoqg17aGqJinDYvAFPm2yg8sES5PM",
  "key3": "aa1oSwrPUsd6haWhgpbtRHr5QF8mMW1JdFuVcCaM87nSfnShVRwxA9tRUcisU8YF2Te32gMwDKwFVocKEPBkr3E",
  "key4": "4Dm73yVwYC4GSUazDUKCsmW1QKMpeeqXyyZvT36PiQ54umMvdwfhy8uosEeDKdACCnoGaeqrCTUieyP2W5iZ9DAo",
  "key5": "5AXfMv8LZTWrnV5jD98Z25e46ujJHQTRkj2N1yiawHVAVa3Kxdfpd5jmmw4LizggccuUsaokvHTQS5yUCQPsUYzy",
  "key6": "3da6XS5iRxFWDEizw1hUtMRrMoTtZfKNDQ69nKcTpJ28jD2S4UP4qAiAveLPDfNX2Fe3BSZLjjg8LCojc7RTMpRt",
  "key7": "5PiiaEdh2Gbh7PH3NUYutEQyZid8k9VyYXuV3B72NT2btVQaiiJ5TN2jDWuf9LyTGaMbQRn61DBQD9daJCH76pip",
  "key8": "5RG89e9vXwStGdWkwhDvKysniRSRXQiBbQH6Catdhuy91T4Z3rfv17ZjzbN4nBS1UZZ1doJZepo97upDofqTmzPq",
  "key9": "hYb9Gs3bHSTUBmS6y1HRuyyPysD75TogfvGHeYMQtRaSikGqqqyK1aPKCLVjuiTnyAsDzfhv5FeZPvND7hD35Ku",
  "key10": "3g8EgpvBBRCW2h4bY3AgsMpkvpUwwV1q9mD6DbuR34sELPGRNeHA1q2Md6PtBnrxpxRw8EZ44SozurbSw9GoeHpa",
  "key11": "5YCxvRhE4W9JVWDhwK6d5aC2ki2dKR2tmCvMEVtNBKVj6sTXuEg8KBmno8kJ2r82S5m5SmH5dXkGTN6yEPUhoxAw",
  "key12": "4yxBjsxZSW9gSkiZ7wvAKrMy5MzrAoGWMh5UzyA9DwzPfQZhGg4coe7u9BG4QJ8kejj6gg7QXvyHDEtLBrzSiwkW",
  "key13": "5u7VT54TWA4t77wyrrBpFGwvxwbLMjPSCgDcCw5vXqRgjVJSEfrUKcKJdKzNz5HPe34VtHWgbFeAjn9fadMh2113",
  "key14": "49XAJSrLZdvEJ1EBQ6eJdh3otUPf9rPGHZNapJQJpXnqHLnrLMfE5QzwrRzGrTpWPouHYejzPSwzL2rYJeed4pxo",
  "key15": "Dc6sZb5P9s7fbXFXimRhNkDAmGpHx9V7rccHenUQKoDDtiQ9mYCELAJhcww3VhKZFPcaba6K9kBTGmWGuBPZJY7",
  "key16": "2u1oDzMe5a2fwWVikGWx3m9WQYMrfg3gwvEuo3EZwyDFzdxcf6osxAe4XSNsRubVAfvuPwUn5aV7AsXo5zk9692S",
  "key17": "2UUt5vPjZT4ozGFcXiWkL5u5qGNpfKmb5N9WKq7x1tERWHpHRjzeG3vNWrok6HmHbdjEMdaXLXmioJNsEUSCfbPT",
  "key18": "4pUMYuJzQHsRDKG9Ygiu2AvU2CrCJDJ6YsF2xDRD4NnFgkZCCTEwjET58s9LwgxZBjoMZrkReQwDSq1GibMNhCGz",
  "key19": "3gnvFZyuc33ebH55bEewX5GaBTxJ4rZKv3xnGvjqQtyB4NMQ3KKm9W6nQpEgCmJa6W5DhCBat7dEA9dfdnzvt6vv",
  "key20": "3pjNyFVzaZJLaVDubeznLjByHyKRZzg3AeGoSCSxLxuEzp3xd9NByk2yxb9WsvgngP34Xm4ob2bx7KzKSLm6aiHm",
  "key21": "2rrYBBtrPf7w6r2wuCHjMLNsMNcWTdh33vHK7WGr8YaBhGyUdKvkVQ3t65fHertfEzyLjPLGzHYPRKkQMx5W5w1P",
  "key22": "BfQQKkfBqb3MZDTcp234eisGcAaLRF9uRTbCRmpmv5RD6Hi2CDriErpMQN86pHGh5JizgqAC8EBewoPwHt76ZgY",
  "key23": "5QLKqB3GP1qAqSnyKawkNTEJwRDambA5pMnRM3GfM6ZxcDPBjMEeMksh2Mey5koQ2CTFkNgasfBzspjaZZRg2uy9",
  "key24": "2Q11Z7ZtjxJYthRxYc3SXLxvPnTTcuMqdbewBetE42WNV6TKGx6bHWUjhyFT3nto1RXQKMSTqun47Fx7siFWCq9",
  "key25": "4qKJ4WSCQkDZGmEnNPvVFKG63YkVdW2LipTkDX9Sorzqz17LnTeCdmTRAZGEon4MsDg4iq93FV7Cv9q6vt6zdnyT",
  "key26": "3FEMGZMcRpspow1Bttcrt7umNgv2poamw2vrjqgzdKbf9SCv1KxpCVriecqKWsxNGAUGjXH1nx75CQZ1iquXhAFX",
  "key27": "5kvzxzKH7MQ6Z1yp8p7pCpSAmUtFP77biuK7NHjRtbMdLRV6qut7W7eNvknLT19PZj3Jy7cNb3JLb5izCYShY3ms",
  "key28": "4bdaikoB4mvT5jd6p2jGsDxA94uzkTLKxMxJmJLELu8ou9GN2sw4pXr1tNuJtHwZXheSA269oomtyKpmzBjtPxRN",
  "key29": "5LZgFRFFBrLSE95xRFrZ2ynwzCKUyLLo5tnNrS2krPXHoCWCmnmiKAYj7mNkTyVaBp2mQZnwPEnHp7v2wpR2Sj8b",
  "key30": "2QWQBjGnxs2vuRLRh1f5ibV2Hhbyn1NNdmzprGEAYrduwHG1mzxu1y8txEX1XnRrXRhn3QAji8VsRHavFccjzYUH",
  "key31": "4KFJaDk3HTTBVbMDndZiu14Li4j9s3Q1b8Vm728vE12bWrRjiZTike6EQnhBBqLZsngLYq53iXURyChr3UX6AFMW",
  "key32": "3RY6cuvU3YBjdT963oaeRfAY2r9yw4WFLQnP1BWz3rZMNG3yB5UvNJV5pabgg2CzzWspFRQbUzNfM3VEskcynQ1H",
  "key33": "2MshUBDx55ofnUK3RMQ5mX95pMJbZeDWRAH3ngbosbVZxErgZ4qmHNiTVx8JBdo5zy8gLF1Z6RNo5iV55FEtyUfA",
  "key34": "5vurwbeC7zxcazbDpu7SpokzVA5DcnJUawePiGU5cXZNHnYGu9sdG68URD32oKng4RY48qyqmr3az5C4gwGWgDuV",
  "key35": "ArGXNKjqAWhQCnZA2wLk5gVJr9mP8LdUW8GzFVLA5UjU75wWtfRN4s9cCVyhLUAGU1WGLPRbvRwRSPwXNanz68y",
  "key36": "5mmmj6Ho6MZGa9LsjBskAUPQ9DJcXssskd5Nxg88hqw15JSfzhMw6d6eQT6LQMyCP4qS6tkeG3zgU82mpKhcvBdN"
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
