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
    "2DzLVgmGc9VUUChqreke9WtH85JtEbzgiCuoV4MBgqXxhC6q1MkyGi2rHfd4KQ7SmKqixJSC6dhg4J4vp6oojSza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nGmPPnKbFiEDxnrTJLt65fq9vNWUWi72x8idJ3Jsykn9x3fWNDAGq11fF5KWdNBmVZ7txSa2dftrRos7mBe8L1X",
  "key1": "3Siun3ufq7M55sjzaUx2idWw8QzK3EPsZNdegQjLZ61sHmrWt2GsWCS4kfmjg7aC3wj5uPVLwkeokjUwaimUPnqP",
  "key2": "uX4e6oc6mGS4S8WidmNuUTUoXQ78jFy8jo3AWgQ62qrbNmX7rC8ZJpkDvMCi9gXFYimzgmd8KuaxXiQhxTPtvGc",
  "key3": "3neHVYohb7BHR71yZtpxzR2D5BYAfoicTkuAA5p7Q5F6o1poj5nSa4H4sw3LLuj47zucC6tEHgfitP16uchJbrHM",
  "key4": "zdMgbNdNai6CZfSdhWkEMAcPYL51Df6XN3XtdPKgQuHZ9oQaztDnZReZ85fH6LZRtHKC9NjZJdGQHv9n56bXbi1",
  "key5": "2s9xiu5DkxN4tUjnQcJ75BH5XFdCtjCgaR6zJpuZcNV9DuNN2PLm9crh7Qa1HUTx4FkQSwfNZTzgkdzA71ifH6Jy",
  "key6": "38qfY1wzXo25jQvbwPMWFft2eLyQrCXHxRjZMLFLNxZFnPmz3fkjM5UZakirn2AnR2jLuqLR7YHzqGQqKcP8FWDT",
  "key7": "3ALLthnbbc3qx11jHd4o5bTEmjqDf9YPCAvdJjqUpYBzW3eJNJrb7EiNM9sW57dXDmRY8t57HoctkCgTrWNngypV",
  "key8": "3s5qdtysf2T8pg5gQKjaADkbsK5jgXvZnKhGri4mHtAbTeuwWx3QYfeKHB3gy8PwjQV5cepQAMJitozVfXYLJ8hL",
  "key9": "VZbKc7ZXcNLMATXN49psxXa5vqZA36Yrgu9A4G8pjdiDSzHgrM5BVPjP9XRotCMb9zRWVhSu1drZuUcJQJq2Yv6",
  "key10": "44co52dFp1J6cmbxxmGWA3hvkfU1FSBNpmbnEdRZrhGQpSoms3L28JY3dm9tXMFyFqCVntUkyuqZivLyqTPDEcqx",
  "key11": "5jc9nhvYXi1KZpEx2pH8Q6AJf6pmoACNCLrjGNWLZSbnNwGocNF13KFYwm52pP8MddX6avU5evKroubqCAe555gG",
  "key12": "krdvaYEkZJzM4h24Za58z9W6SgE2bjyZWiVUZyBUp5W1p9CwPu97WP2Nwg4e54t6BeoUQe7WaT8f4DnDfTn7jU5",
  "key13": "FZ1CByBPmj1rtQEN9TYPkkwwkHiAMei3KgYZ9nMcc4UjGNZ7QFkukM8bEHwcUJY4q1zh36ymvctcFe8Cqt7KUz1",
  "key14": "518ZrK13knRcKQFaPxz8zCJeqsrvnJPVRXquKbxNB1zSDPnt8j6hAj7U1rVynjhSTVygKHW7ARB3Kwxkx9sHQThh",
  "key15": "4CnFSKeys5UdiXe3aR4eYVkHLFNHqMvRqb8F3ygqpGfirX4vEMUrYfc9xGuZHo9g4ba7N35ALRqsoxdEyWu4CUP",
  "key16": "4bo3m64R8BDZvB49q77mpr76xXu3xM1M25H6GageVKezz5FWgGq6P8AoRCo9PvaBzuPTCKvoxtreSqh6Zd4icwPs",
  "key17": "5WuxXks2LbT7V38Xt3rWSJPXw8AArQctupyZtH7BYxkqMTGRUr4HpDrznRUsTVPaJ2RDkHxMFLhRTZgTM1rJyuai",
  "key18": "5k4PX5Waz83g8VXtrJG7XdEW7e1GnxvXQFRRjND4cDpTD1NBLvPW3YQLM7qAbt6AMdsoKcx8VEhAiHnnb7ZPpYcb",
  "key19": "q6CY5kVw6Y31kUzzPYWAPAy34gmfjQ5dL8nCHSPwQkbP1iYXjPGeM4U3hCFp1LPFg3TJoWpWk3Cj3VxZiRwuZBT",
  "key20": "4baUEG5GVrN2Td4iNTvytp4FX3muQTcL6ognCEQukiPb2Q4UKxnqyaze1B7VB5krGoYCmMewrszsJ5TDbHMydjFs",
  "key21": "boNG9RhP1SA6iime8NN1KDup22AEqNAuLtWQyg8Ay9quuWBNaFRLB5X3V6o8zRTwDxvgAzfnHh4i6HBtFaTFrBd",
  "key22": "1cJoQo8TcVA6Q2Cm9AMpY8FnDPX9K7twiHhEBtNBpJ3uTDmatXH4aoxgDUbHTRF55i5geYPoaWmHxcrHfjFG7Cv",
  "key23": "4Rgv1ASv2URMFdRi7T12DXucYC5v8cFEwvhv935X8sJnsNBKDKU1EKiNedVHTZX4yDT4hSE5UebfgE6XCiAjwd5z",
  "key24": "sNHNRiW58crZ4G98STz8hvxpNwLMFVqzgE9kEuRusGWqJHrbAV41xVC82vNgV3H3m61yjUYZiLZdNbrLfshk6LH",
  "key25": "3CcPXub7Y2SxuasDoRhAytDbnai7UZ3Y8oLe66SUt3CVexJ2KDXkvC5L1ovPz4eUDRNQ6xKAjZHj4o71RzPxpCtK",
  "key26": "5VEu5YCtryHFGycPA2yCcur4v2sZ86Kx9qVk5xCRsDrad6PqimwX89Hg1L2dtnzeEbS1aosf7aNL16B2aWAa8vqH",
  "key27": "4D5LUeyMghjCedsVqX8ruXPKPwQwh78KrTPaNZA5XAhXmZzrr7UjzD7DQRyNwMP7mwBgypb9rmWzAQVB2srha2LW",
  "key28": "tL7bS83KGqj228u5fYNNZHSkEZpRi1CYeXsAM6BzCed7CW6ZhSKhzFiunKCtPpWjw63GXkWf2B9p38CRX9p9Xmm",
  "key29": "5DvbW4hHnuvQ8kkkjaW9DEss5hgr7mkoqavw3GNqTLs2X5YrPvjR3UCcKcRSQ4nKrobxzqM4CSNMQrjLZvUQEfbY",
  "key30": "4kepK9NCM93mR7zTcycty1V8igcDhn2iG9zf4Fv1V7aK8dSCkvfLqzMVTPp77vrEoQrnqCbZ99PQXsJByHaoc6tQ",
  "key31": "3nsHB5W2MDfi9V4kfxEVePoX158HZ5qTDX8DbggSYPxDQkKtbpPTUA29R3NmqPwDCAFHaJphyPo86ywDd3TK6KVS",
  "key32": "4qcjWevfVd12Y9Z3uh5GMgYhRvqSTP82eQek3p1XodQbVA85x1iKSyPUbVZKt18zrsDVrNprEPn2X4Ki7VXkMrx9",
  "key33": "3obZVL3ryzDT1Fjk8eb6euDyMnyYanSdXM4poy8fLLSWdV6qTkbCsJ7xmdGUDi2jVjwa6hwpgti7rxX5XyFghMqG",
  "key34": "436Mmk9c4vA71SX11X3SRfastmBeHkEQmLgzqraxb2ME9UHnAfZvg3pZHdYJxhEV1YSWApusRMmBmqz8TDVLuWar",
  "key35": "2MxHmEE4rNzsiBFHzoqQJLxFpmEWsNk65hPHbRqtATzBTT8c1Kk1SqaDfhYwq2UQTBKRY8xksdj5tjGbKf54GRS3",
  "key36": "3zNzBa9WwscqN93fbjJc4vY2CdZr52ayAm4izUDthrKZWg6x12XosqtHst8szXS5HfgkLDLbWFvnoKtizW2uB96Q",
  "key37": "VkkDcfWAn261eFJKPVh2SSBwbBr71zrEN7fphtdoFgqtgVRZGf2JHGZKpyK2QYsxv8pExFoh8EuGnsoK33vKM3y",
  "key38": "ApNaaePfAb5kbRrzoNWuDWiFTU3anbwak6pzSa7v6XhguKBwszDPBhWrZiR5stuUaHXijxWivpuwecS38dabyXj",
  "key39": "28MrvxRfn9eF14ztpvHkekynx5iXSugV91SMaStofAtCHwWmcavqoGsBn3Vs8YPaMQYGkBUpTvnjVmDiEkaPKc4t",
  "key40": "4chKGbD6p9jX4H6UiA26GEQqGkPtr274wN5CcStWzLctMYFqpa7KnSTTuMxJ3ngDrPj5hDk7dMdbhVjXgCXX3Efr",
  "key41": "3GeVsyj81uoEbR7wXRmxshzk3oar1u6fFTnYVQvCsdK5VJaLCyBMv3G1pXGP7sNRC6vFh726WeefSyWnsETTvm1H",
  "key42": "2grr97qn4a8thPked2nXmUwNtH3jHi3anKt7sNgDKAYFupansp9wAupa4bEbCar5jaNmTxik7gYT4BVgdUqxRvSd",
  "key43": "348YAd4WCu6VB2KYe97wjcsw11d5yUJvqxU7hKwg3WBnUt288gLGf1QY8qAtotRPHp8PoURmBKuv3SgXY1hreDnu",
  "key44": "3KrEsHpqAp34sJopS37WTQ1v4ij8vq6pgYm3is1f6nQPCNLor9okEi6Y15gpxyUW7eDEUqoMggTKZ7zhQ3dHyGT9",
  "key45": "m1j76RcnqNKgqfzUvvnhZDJB3wQXsSxzQLPSaCcbNMdju3Zdj4vYuGb1qVTAoUxUUiKvo2JNCd9eLNvvkAF1Mve",
  "key46": "4kM8xwarxr5JwLThLvZwNTY5GgEFs9nz1QoAPhwDMuG2DbEExt8MccvZ6GHybvqDvxVPsCwrkJ5NeDHw8rbph2os",
  "key47": "Kr8uP2eCqyxFWEsA4XRFjHDiiUcHJD6i9dQrP1rSN582owCngaPCDtN2sLXjwKbVVE3jFkwQ4At2RB5jPxgUZ1G",
  "key48": "4LKDCnSjNjWWerRPjRkj1oFBEqmE5V9eWMx7rKz9WWyheRn7ewtqdtKGHUoDcZJHGkuVZWTDSF4Gn4Xdts5xFPDD"
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
