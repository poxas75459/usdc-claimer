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
    "44g8Uxo67Htz4npY94eyFYxUwkan4k2twpyp89E59USdd6Lt2Ln24eLPH22pamKNAinUbSButD6gq8rr99qckU1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdE3ppJGmpn6wFfkaz72Bk9XmrCpr18ZpBfPx86FYaBunbw144ejicTGGRinu8BowKm67gegtKVvysh1Mw335jc",
  "key1": "31zyvgycRHP5evLbDKa6Fu1BfVzwaLMruAgWZXw2563xVwXxQKVcwpXGwuDbbEH23gALudqtY7vLKE6T5E4FdqTc",
  "key2": "4PaZTaAx1XZLAdhXm1McovWxHwXwiBZMa8sdRpXL8524gHNNs8EEgqiGWQJYg2DkHwdxNcSvMxwE5ytWoZQExJVL",
  "key3": "5urPdi8uLZvpYF2CgRBrn7tA39YQ7jUGYD5LpVpnoyZpAVZjnSjsTh2c48rtewu2DsXqRP4ibw4CM14qPd2pCnGe",
  "key4": "41BhGjshSgRf4vyKnTrCVdZDgk5NYSPmmjQCw3djLS8BREV627gSmvs9wwHVeMGDdcF88WaYumwL1V44u9LGzXZS",
  "key5": "5SQThN7EXv8V2z9yuBdBW5UpQWgfseF1evPW4G2ByaEKMZtoTWxWdVV5r97Mdr3Udw25rLRSrAyPjjLZHhCXg7tz",
  "key6": "5vdQ6UzUMHFk9Q5vEr5NtmYPW4KCyHeUTCNMRsQ76uGpMiTVrBZCrMufkhPZm6HnxRAQMvtTLYTGtBAbE74L3xe",
  "key7": "5kYZsmDfotNRdg7dnN7toezY6xccAyMTxF29jUh49Y3NqrAznuPNYR3AhgFc8EWtPNhHjurvQqJ2mGM2gG1shate",
  "key8": "5Bg2YtXjeWYvongNzKMW8Q2Y8ZKBuDK9So8yydDrRdfKXVZLW8pZCpC46m3oAoF44MyD7gQepZcbXJMRSnUUmYoB",
  "key9": "2Trkh13y4e16VheQBVzUvhwKjLxwR8iBLuoGzuUZYRJ6nKZqHVrikaF9eHuJLi5o1XuCvZ62wtv5deQdrxwDqppr",
  "key10": "2ZmphC81D3d9zYx9YGPqq5EGK357bgMs8h1AoeWS6W8tQH6vJjhfHZ1nMQRAvkuy52KkRYrU74qUpgRyQWWinkU5",
  "key11": "MbLkXX7U25fDxHX9QMUSM36EjA9tgjmQbsYfzwqGiQkAm5eBzN6tuEd1sYQgNsjX9DEoBRa1NwoZ9duQfw46Th3",
  "key12": "aXvtFxUyPmS2Tg1XEyqfGB69x9CU9ciV4WqeVycqLwYVq6223qTFHeKep9F7jY57JaZXpKv9P64tUQLzzZjPSNs",
  "key13": "7Sdp4JHAugFE7rnQeuBvViHAXMk2wDeRtQy6cgVZQ645sD9gSwgHVi6jAKHtKNqkfKbL7zAW7CTinNNLBTgGGfT",
  "key14": "5SN13YKnV4NRhFfqkZdtRsvC7EUxEgDicDoSj9EMGgBW25kyBq39xn7uMgmWXzE5ScQqsdL5BAdeMhvknfnc1Fi9",
  "key15": "EhecD5U3ozAT8YPKdthnyiPJ4yL1cbdd6Xp1uxQPZ7KApBJ8RsY2cbA2xpta8uJpyv8Y9ekFNQ3hYwSTwwCT2pJ",
  "key16": "4LKXx1foZm6c3wD8wfcUPxFV6tr7RV4abeeUZg1AT5YNrx8mFp7WtuR8iNsTQrPSpx8hETrsojBeu8o2gXSPaFnf",
  "key17": "2DVsyDUheMa9VyWCXnLGYti4jnBUpJeHQVvRGpAVJDr8FXfX6hwh58SWouXQpYUCtPmpotSrecHASnBLtBPK25ja",
  "key18": "4amcPmELuwD1iYxX2znpCD3Cpe4cj43tqsK8QZhYivn2SRYYjembfD7qXi5eH5vDLM37KKhmSrZcf6PWDngoeE1o",
  "key19": "4BiqnKz4y2y69LMFeAdravwymRLxNV4Y7DV1TLiDyzqAhhWRMjmFuxC3u5Gvr3FR7ryAKScUV3N3b5E7GK1TpFW3",
  "key20": "3ATxbXWsZ31otXdFePE1ErexrZrHL6bf3SHCdA7q9FaJuNsXd9bJ7gkQAYwQdXWAKhGzdxDYKo7PmUTtR4gurB9E",
  "key21": "2XmUG5pM6Z1455Hmbsf88f7BtBJwPdeiah1ko8SQhLK4vayUYFJz3dw81YCReUXzKNgjkzX4Mreg3nskytQwDGTA",
  "key22": "6twPFL1KHDoYnSqZ7QYL1Lu1epiqtgPpC3kpA8t7RLsVz2FsyhsCfzkCSSv31S5Ch1i5hBDYUSpCSEeMVowbVcg",
  "key23": "5hNxaEskC4QtZ5piaYnZuTnsgLXxKoCZxU327a53bJyo19GuM1JZp7zTkUMQJgHDQqpGnqLhiWdQqtwNZuJSkToE",
  "key24": "5QCbR9e7tQHo6m8AtqKYeojYwd7wJkAqZwkiGB3bariKnaJDwkLLK9rheT8XsB2hxWqrTTYp7okyLDj9sQKZzaYR",
  "key25": "43ZMJW6vQ6k52fFRLemRoMYHwV6LL6YnJc3QgV2gEyvxQNDkok4fqwnoSEwayjh3VSMoQmFTBLWTxYYoX5coZzod",
  "key26": "5z6wM54oAswDL3zhxfqMFAvYCu7dwaQUo2Eo5QXvoXe5KbmFSR9eQh5jeQW6jNvY1PoJ6eJCfhAdx4e9dtbmd9tL",
  "key27": "2LBReyMJseSDPFJE7WQtUVKmCpesJizq8DD5aboKgZNmjTJsQvEkD5gcb5VnYFDQg6XU3Pys7xdJMLMSvpv4TE4R",
  "key28": "5XUy4GJiTXQpBdy3iYQdTobidk2JKveqFqC7NyPMJ2Hftj5LfZNNvrh3wZRnthCVXDUHTzvHAYiJuYsGpphTixER",
  "key29": "4uiBfPHuqPsAaELQDPBAUvjD6XW3BjHjjW4mFxcBDi5ysfrevpWbgKH6fVTkBqmazUzgsnhvkTY61fDmhkrXazwf",
  "key30": "4ohkGFq6UiE7BAmT5ZrSaqv7wfNKQaYrehw3gjhdcGbfawCvTD1K5xwkZH6qh6jo4VGzLWWaoAhTWHNWF4RhUAAs",
  "key31": "3Wfv9xrdY2ZfjM1DQ78fuCfwpLNVAgcYKcQVujzn6j2kACxcLeCgyTGSn6nDMJMoniJH9JD3HvgEzBoRo73EfwZW",
  "key32": "6te9bvE4FikGH36ETeWhELVuWrMMXRi1vUkW91RArpGLvi7FmNRosBt1nCTAg3bqDx1o8YkPrne7ECwmaBJA68G",
  "key33": "3T3TeCe9HfPJrX9W2p8nRdeKnnUBgfuLKTnXswgRhzbRFzGLWdWSFMgTfBwFqnGu8TGsrMUR6DodNdEZNGbL1AdX",
  "key34": "wfgpSCHS7kLJhGacD2PcmaWZgJrAc8jF1rARz6QH6Y4rYzPE7Q98XduzQMZYSK9n4f5hVwBaVFANioNN1r3wARa"
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
