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
    "4GCHcTuc6tQuJk6SZCLCUwB1GqZtxpxVADnLWjp15ebFtDSEExySdhfrJAS5ctKtdRXPzov96v7eqzK5fbaNMHok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZpd7e8XTxuZSrLafhKJ9xi7nXQcSRG6YcxYsmvZPffYQdReFuXnTitm9rogX355vwhSoxgqZmJuySRsqj5BMjQ",
  "key1": "3329YDoz9mHY8rBaNBF9f7w1Jqx8KvMSUugbhh9mEoVSFAAvafnuW4joZteVTWdmtjEoBv666yABJyZDPhHMW714",
  "key2": "38RwwwJgVyLcZE4kk5wZnZsh57GVY7XsafSAPu1TNojrja5KKWiGxbdYNe3jkQm6eJw2bcrRMKdnqGRXbt26CxmV",
  "key3": "2whpK49Xn9pNogomSVeUsLqDRvFpG9Dv4n4Zb414w8NKe44QrNnzHtRsiNYrMgB5B7kBKFUnNBB3uGnDNTq3ox8T",
  "key4": "3tpgQ6uPAGksdAcHMp4EPf39Ch7kgtvYucPeVboMx7bPvfS8Zn8uMorjFN36T4qCAcuGSse7heS5SkVwFh2DvXv9",
  "key5": "5LmPGjahW95u3Mtf6fX9vPW7NFxiVrGNomhfYWZHsQRWaEZx6bPnys9jCMmhLY1a1fgk9fvEngPxHZBQNVwg1nR",
  "key6": "gqyQ7BhY4dg6HW8xENtBDaimJKyYFXQ6GgP4kNjDv5bxWRWvmc8D9hhaLLnz6xnnUbRhSsPNKoC4ESPKDX57SrD",
  "key7": "2JK963nNmEqrBAhc5oQhvobykc7v2VCJnv6Babo5aKvC56TcVFj3vV6McDJ9DxXG3WcVGuUGr5LNGn5RTf7qEAZH",
  "key8": "8yRwrFZGbZrwXoJXSMoyqcKRLpZzqwwuhexjw2kcutvL22CgNuRVEHAUaetHZix45fouKBNu1jULRJZZagms3eT",
  "key9": "4r1vZFWURCB8KxMCanW7uJtF6pY2yG6uiHuxV4ZoWb37HRCcvVcbZtpVuKdfLMi5fBDxnnrYg8mHecixva1WsBs3",
  "key10": "4Vm8LSn9gR7NE8KSMAEXSgW1WjcRHKZyK5dDSr1k4mCj5s1i25n8gWQS4snUFavUoc4jfvxxHoCUm1ZFbA2Qq2xS",
  "key11": "3vpFTkfkUmEVp638htDcGgWBGvmiq8w6CEFHiewirMFveUZd597MUKmgg3pZQyaS26Us5GNVmF2pEXXiPquJDwrz",
  "key12": "3PTgHNx5vff2eqPbBsmN92KZsnMHrYWCMXHghJ8MoejwNA31wEdoCxgEhViFCGJ7h27mVWcZuTHhnNQUN6LL493U",
  "key13": "4umD6yiuHE5YP43HgpLyJRLcrpninaTYexK23czdLM6E4vLyyBwQXBdvvZPCP5ue67BdWKsSH28LGcqZ1fxSiLdw",
  "key14": "3EtPbxW42tq3pWxFNaZVz186vRZsC3YTmj3nZEpbpBibMX7ysVDuB1bTZH6PpZgTFSfYS1RbMwX8kwVh2qNcJKnw",
  "key15": "4E3fVdXYD54Z3TJu83gzBh4VpRuALqLzHYV9HVpx7UqKrG3mDjV6xErdtUTtLaPtaEQzDbvM4VhBrheqq7yZS1KA",
  "key16": "3K8eYEimbAify6vkxB1WM6cWKznYtzeVwvzb1shSWoJxTB32aa1wyc5wtuwjjoEBJFYm4vFeFFCheiZiX824xacg",
  "key17": "3DM3LV3RWSaDbxdVg8izGf6M9SJtdXMTcPJyEN9fg5cmMz6qTxiRFgUXs7hTAD6qNAvFW4bCmGjbzggf73sqEt7v",
  "key18": "2DCuKREXAo1qYx1sVpFDjoQnp5UNvzAyKqyUiDAshpXReoXqkEckdYF7HDNT15Bd39dvYnus5XJAqGPmx8BDmSfr",
  "key19": "3WVrNt6YVDAWz7gYumorz33xw8asa35LgVWoaC62YQNQQjAZuYPY9CCTurSrXhETAk5btcccJmF6ZW2PNB8o2TrE",
  "key20": "2Tzcp2j73KwKrgVaD2Q5vZk4pHcV7S4gUuc66xrMLZe3rAyUUxHeEb4bFTF6XyPm567Rfaf1SoNAY7zCKhBBzCEw",
  "key21": "4tuYEZcp8AzukLPWSaR3WvExKmGfw4QEfqtkM1tghJWo6vqv4Fm4zgSYr6Tdisqes1Jap5h1Rxh27jZrh4QVyCes",
  "key22": "3CV1ShKDjnNZzYgm9mLGFLHXjibA2EDDsdFYeThCTAvuYjBn9AvHrM7P2yMCZYxzydqYypgCCrqDbK4KmwF3SpJr",
  "key23": "5qpbywaKC6LgdmiHByMYoDmHukVBsbnLFAPw2YwFo1assC5EF4zoCgJZkNtzWN37mPYNeL55oFGzT7gtaYhT1WEL",
  "key24": "3YjTzvGQyFwS8E2iUDvFq2RFZ4YfZwXcZD1y2RB4nRr7JzKbEUjdVc2y8ZarQT7bnp9Hg5TKtvUbwVZ61ashpLpa",
  "key25": "5fPdEUqzwrTZcQPCpZ2FM5kLRPV3ZBPakUwWS1rAaqJesbRoRLcxpgkjShxr7y7B2NxGiE2ffhyTHhmqZC3yXp5i",
  "key26": "5rqAbztZJWK76owqvYcc9LSAVqceDPWnZ9j5EdCYojRxKi1x98pv1BK9hs7EjNweiuetrJUThrceKonDBEJpB7ex",
  "key27": "3UeLuCoPZWLXtZxpWRnQnvXr7XJaRkDETkRhGVMBLrYFmPT73osxwPCpexRKAUtx9DbW6fokGkxCSN85hrJL3xhh",
  "key28": "5DVpnmVLbVPWKCiPSmNKxKbd5C11Rwd7a6mPjkyLSLgoAWzvn6Dyv54WfQVteYLPTciejuKMaZnjSQFdxDP3N2SS",
  "key29": "4tTj4Jcm8bb26SaYmYpFftuMQAEgmLm7DDmQ3HdMAV2bcYamG7QCUMvBDteZi9xqCw6WXar4aqaHMY8AQnbssfEz",
  "key30": "4u9zwApdUKQnmQp1o7X5s1p8C7FD5BUucwejsW45VosH2n8QombvfRVULYmjma4n3RVTb2eQcRMHQBMksEUJgKJ",
  "key31": "UqzELupsF36JphLAeovrYmH2grfUUBUbrwvoVbhpD3eTHUJuE6KyotTG9RqVQLEb6jEDRVFrJLxQweaJ1XZC8Vj",
  "key32": "3hvcxrh4XPN1RYsKaUYMARjjxBwi7s13VbBBvsfdh5KDFNqdnohcCFbMkJAscYNHyBFr3X5LN6b1M149FoR8Tetj",
  "key33": "54AjZD2ULc8eP2aZS814udj6LXUCgtFyBNSwYqiDZN6gTKsV1hVHNTEM2PtAdFsBd8bG2R55L2Zjvosa6Wwm14Mm",
  "key34": "2Ks8HY1X1oHWd4XduVXVek7rKzsuWYD1Y6UUETi2tMhjHazdHpfkFMHXF6wuSEVPSAiuyzvWDjBsrVxHRCq4qL1B",
  "key35": "DU4nHk8Hnn1vLXdbGwtFA5Y6doptc8MhLHzoLyPkGH954sQvLkypHHUaJHNJhWZPKK8cBrLzrYhkcn8rG6VENVN",
  "key36": "56U7ZUuxMnwmX6ai449CWR91axqqXesgE7kt6U2um9W7YEpJCMCE3P15Nq6Hc3QgbERfweRoprBRXq7uQiJWRxXN",
  "key37": "3z5SaM28NkUdN6peF5U1Fipmaxbzh7LbqSb1vQww8q99gLRmkCALDxxmXjoj2hpCH898rhL84Y5Exr1oEfUHSmug",
  "key38": "4UNU7yCGczsTULDzWaABFoTQcrRUpdkqzUm8GGfvY96f25K2hSCcbYSNYz93DUqjNtGLzPhvkip1pxvCkMkbpp3U"
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
