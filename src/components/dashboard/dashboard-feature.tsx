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
    "2YcVe4XGabqe3KDAY77hdH7dZPV9hWPru1PBpVgfrZssxB6pFp2K8yagrGhHt62tDjoGzwjBkdX2S86KXa6abPFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vs1KET2gqz9QazLfdo26SD4hKen5QiNWLth1ZaBZx168wSYvEp5j5ZKweseZyeqquYfuSfP4frnHCh9eewgWSXX",
  "key1": "jegypRiKmWcq44CEhEU1UKjsERgSHUGrKSKPztv4s3dcKVkkojSsWYzFwFKoeGTfbMHNVf6HaUoSDezzdx8xSaF",
  "key2": "2Ncgx2uMu27vZnpPvvHBzoatoUjjYKJ8BnTMTajbA6bfxiovUM59R6KJVHPCE8DG8aD1BDyE5tQRkXSxwLWGw4Tj",
  "key3": "NwtKqq5bgWXNbSGSfGth6jCb31wSBS6XjenyTohoymDvzLS8trKSW2kUiS7GeSfYG9Ei5wid9tBwrsWUEaaQMup",
  "key4": "3PRZkdpRMHHDrdkYyqJHQKao48BeaJVijLgJaDkdVc8GZufiR9aheyZ7MZXXugACPaswowHVPm5HTBkcaymcHjDx",
  "key5": "4gyReTJBrnzSvDoAXSKyCQidwyuk7pzEebCeXPk5Sk3nRqoRznVLYQ8xYCorECjYNxe118DRPUzAu3LPMjZR4yGs",
  "key6": "29ev369qxtKe6JLzFcgXruMAhCrMof4rWLbW1iVg2VmGz21hRYtEifSztDTsGc2V53tNNZNStfXkYi1s1vaPG8b5",
  "key7": "2oxXvodQn9hnfVWptYreUosVYdJxJf57vsM5g1bBPLU4BWwZCLaaN2QVwf7oA4TEfQuxauoTfUiRXjUVzQ5v9opy",
  "key8": "3iYtJV9gNo5CBHowiKS6s29RGGboCCyq5PzaQg17LkG1njqY7t6dr7yExiz8X61Vx3Nd9sEb1UzTuJUAVRgS4Pgk",
  "key9": "3uCJgqtRifJt8DfNBm65CVVs7Sd8wp43nbhgfhtCFu5si1bgJnuxUTiFWYBtSXd6UX6MRt8Pmi38LDaUKMqV7b9J",
  "key10": "28t27Mu133MTzUs1yopyxRLd9CZmWySFHnptGBePLXrgUGXsww8No9RjBf3wax9F7pLmSMwu3EDec58WnZJowKkN",
  "key11": "5SCX1eNqLT8nzKRZF12vstZommQ8KWByi7ch8WGANkPozycsz5HqYDHSWhpo1VzqPpgxGvJNXtcJpvQFZx8itpA7",
  "key12": "3URDDrro3vijUKV2MBAjpw2QGaTA7uk1dSiua7F3e3KgvCZFy8DBpT7PSAnGroc3LgdCLuvhCjuX2zc57ed1qwMq",
  "key13": "5LwFf8YTLEa6iRVUmWzs6KMMnhzqbXxfW4HfoaeZgjhdgn92YWDfc3U8bXYQeT3uDxoPSgrJ6jWsUYAepa2qofdt",
  "key14": "2epEWXevNkroVGQdAiyaNmzKJtZYWVyQ77yqjkybR7PyEEfeT3QA7jW4T7u6TtB14DwTZiDa6hsmrJgTVNU345f5",
  "key15": "j6DdYgNYgVSkEQj5evK8CgHVLNs773mHJKgj8SP76Bikhbs9eqGVnYigjyifAkpFZjfa3Abi36b6hpgvaMVvkfh",
  "key16": "2TVpFtJycQYoPdaBoTszkJd2MDY9zUcNJz36KwS6vLWH86WazHngfYiZqTy5N8Ad7DBetkTaXTpSesdX9myS7iiX",
  "key17": "2bpkuQBuqU5vhrMjDVx88ZgLEoC3c1FMZxcUF3zEtird7NeCfsLomtK8mGL3Vjun44K4xgm5hVZazrdVwfizgE4F",
  "key18": "4obS2qbrfCbDquo9eZ1gPeiUZtQaU9MWekyAoxt45XAb5Y8hEfQWEZ3kdZfhaQLicAkPQ9FGiJf5SFqXNvgNQYRq",
  "key19": "3n4YQSnqzPg7pfWAop8QjTxLBHSQAVVU3qzkMugxiDb5obQExh15uwDUUrXhkkZQYmj4qJAjeovyA9LeyqBbTMQb",
  "key20": "5fGs4pwgRezjy5qNEsyQCds9CckFdqs5NZh3j8cWwYfuRXuEhKmG3DVKJCFUdHZT6ogh1dVoPUnS8aiL4auowixJ",
  "key21": "3cMXATXgtjaFYFsbnAKoAa3nYFrZkdH8KNahVxS3NcQTDkn7VqrKvo7UDrttphincQ5rLckfyz8BmkugDRhZzUZy",
  "key22": "2N7A3GgRJCSViNpAtQEPia4vTy9Cb4GsYULvT9qAoe1avpNjXN2ZmL2WgbPMeyHjUVDSgmnMcFLw5eAmDAe7Wedm",
  "key23": "55Yu4d5z62g9Sq3LYpVnpFbFXzo4F96oTdQpGaLtRkJHGA2wNG8nuGc3zPDKF1oTtqfwpe8BdrvqcSNsCeQUKtzG",
  "key24": "4y6GFCa1sPb2mS38Ut9QZLhyGW5k7qD7JCqXCBVvBxzMq7kNSFYtboEnUPqPfEyqQ2ekA3tERrxPmxfoewhftxGc",
  "key25": "YFEipnUP7vwP5fv4d6einwRnvnWce8sf7b53dYGCE6yEsjijEVpi7cStr42U6qmgB7c9KyXDzj7rzqHFJxssfK7",
  "key26": "2anWrNHhhvB3DnynsY2849UWzrMrHy8oCNzeqfkwCUq3VDKeGA6jJSaQDKV4VpaqcDmS4Pyr2MQivpfSxaipaKm8",
  "key27": "3EjWCRvQbjdtBAq8fju5jo535X8YmpPQ2AhbPcZ7gCvAHLikQ9R8nZzsD6EBG8B5s56dLHEwT1Y9QhB4bf67w28u",
  "key28": "4UYNW4s7RBvnAY94HZrGaSYQEqVmcDSNsaVX3ziAZYByMj6hHykHt4PWmNh1QU1UcnneNFQAR4gioaBAcaMeum3p",
  "key29": "5MbYyp1zpYtSQQZioBDbfwK7jCGBaJL68uiWDTkguwQZvo1f6v1YxukszS8AmgPDKqVUZajrLnAJBADGoqh1kJJM",
  "key30": "4Ed9H77cPJ6ct9xw9duNJuuRAQNYAMGwnUrqMa2miUoGAE7brjbVmFa1tX7ST3Xs8yXkZUpCwxp1qh4cH1L9GyBH",
  "key31": "63s6gXW15yRUTTykNsn3YQ7FRNcNCnnz6GDfHAb8oWnWVhMJgAruhPPKayMM4ESFwmLx6ctidQMKrEKx7MdAnp8v",
  "key32": "29NFYJEz7hNx3PtM7u2HzRo8G7s4j1PcnJs6eiUGpwgWnR38Zyf3bN2Y5BjFNzLN4fFDFWpqsuABwtGBKkYaLVjW",
  "key33": "3Fka4WHAP8iMAY6tAB5CsDKVz4pDAfTGVn5gpxvz2npS59g8196ugRSBWJS4cqpfjUYRuPWy5rVExoXayvmgGESw",
  "key34": "5S95SgUXcfnfzJ5u4t7vXabYAyGGmvZLhsfmwXh93eHFTrteoPBnn7YXwGYTiCPjjcsNroxDjWUGxqvBLjebwLt8",
  "key35": "3Q6h7zdD9BjJiApq72mYgQ6ET3BMvJx3zEX8qumivLpF9iNTx9P4EmR1wq3pKPiWxwgoBeRv4faRUt3ZbrkzKsP7",
  "key36": "5ycKs4CQ4Nn85KYu98Z6uDGZfyGkWb6ddaWaNGZbxBFkrh1HPHybNCqMJdyMi8dKQS1u9rWQz9YSoLvKzJLHeTSW",
  "key37": "3kyKYC1Xm4u1Z8nHnwQWabr4Vp3uevYau2SnSfbhwsuno2EGu48QPf6fBcuMvemWuDsw4tHwq6txsLp7gikTQ7Vb",
  "key38": "5qdSqnbY1KoBuTbnpdtDhKrb565nckbsZZJvfpnmbodNNm4PE2TAfXNHCYKduzWkEUmtmkaXV47yEQ2gd8JkAvrJ",
  "key39": "322cK3AG3j5nYeeYUUdJ2jVBaJ4qxnA1ubcr9bTYDzNGeuNnNfuwEPhjUxk3q9stwPEi5CJhvceGAiwntym9gJUQ",
  "key40": "5txTebj45m3nqD6xPfzhnQ3r7d26tzkUcVN8FzJcTusk2zUDerF5aqMGvaDgF13Qwe1N85yikv8uox1RTN1WbEUg",
  "key41": "cYSex2uLpdQw4koyD81HSPtWbvEtKRcNzdfYfgERrtF1XLfSoNDF4hJRzoHyn2i3J8V76wouetfv3GukQzu9bFA",
  "key42": "5VbXxBSCDBCBT8pbdvZ2bG7gzAYuEAFTVfjy3PsYCdp9u4w4BA958ZAQgWD6BcQosMeG96RByxnZ9nRTNKNHvmAR",
  "key43": "2TP46ihEdpNiYReMqsHVBrTif8wbnbaXKRzeA62V9XQY5mAtBJtkccrP6u6LpZqokAMBSMECawEVcXbEF82t9APD",
  "key44": "3StaupB3EMk9fQjGLuZnSd7yKnFaM2LCkKm6QUtkovLWKbWRVhQBtrRHgbuWJZBD1Rk2uF5c4wb7dZVD5uqN3UPj"
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
