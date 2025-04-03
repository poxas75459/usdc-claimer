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
    "3pLZUbEHZLnbpP72TXgD5BhF8gjU8RfDARAgSL9ZvKmtRtvhpiytoY4RLp4XLAC4jTyXuBAYnz57GywjAZCmk8Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hGBxcfMDRFN4Zj9H2kdYTBaH1vp71vLAmf3pgKnuM5PErU8FmLYKw4Kpr8iZuHBrB6WM3DgP6FtX8LJaumfucNM",
  "key1": "2CqUWMHBSuR4Zqpu44mxqBtDpqnisPMiFh4ydaKvBUWuEHZSpQzpFyjGXbWKLqqnVXCqTfAXN3JBtx5Sp51f149z",
  "key2": "5Z8Uf65VFzzzewQZ1qC8S9y1u3am2qvfrAjcT7wZnWUvnau8DB1JzdzYQPhFnpNvkPsgt5eispziwSTw51BcWKPf",
  "key3": "VTJTw9jCWQ43PFbfjZGrQsDX1HLqX3jfM5aTzw6F6Z9uJCue3xBFThbx1gwRQ7sfXSLPDt2htNJartcsm9MauBe",
  "key4": "53zhrfSsr4XmTMbmg8ck4D2QtnE12pGY5yd5TGzz1SnfVZYYXdPYhnKgXQDgBX1Ne14vLzGwmdokx6NRWUJ6b8Ec",
  "key5": "4cD9FCMtGT3FhUbKtcmTSX5QyvKpc7z3Qk24KAJ8BiqCeq1afM61fZ2PYf7rNyxgfSQ29i2w5SJ7xL6Ky6SohcvL",
  "key6": "3MbGbXS6ViQ3bXxQhtqvKDosKw3s7qHLxvvgXF3f3x2egbxsPNWV22KUKtQ6AoPmNg2JGC9QDXkNwjJT5SjST32N",
  "key7": "2JFRyh6i9Yqgp8XKE9vvwLhqBg4jhDw8f7Ue8QxkQaiX3nPjVVGaWBAET9jnxnMJe1QFo8QxX9UQ5BM2xei7xZrj",
  "key8": "3WWL6ZKxohxogSXxUxGkKW3P2DhZFbh2pGcChBZeLu2G2ca3p44h26YZNaaSNEwp8Yx8yDZ4LN3Y3JXXu2sdDWQj",
  "key9": "4mX5JC6d7KxhTNAKoVQouRsZx66itZ7DohKHh3TKuz9rEp5S4aWKLmshczKNoEBXZ74eMjRt7vpBtXTuLfzJffnJ",
  "key10": "2Nmm6FFd3yGNLtstBxCLpXwzKUis11uEaJWtvna4YyyWUFykmERSwzu345hMzzT5cqY1meLsQybQLF6V4Dd5QBtt",
  "key11": "ogr38N7LuHCM3o3i9Woa6AW7MvU28mMxqHo2816qdWayoNmfiyiSgb1jjs6CdGnSpmukgm9LKWu6tyx3KD9TMJp",
  "key12": "PDKjwJSsdSZg2tB6u4K4U1QHX4oLJjQnNmts7om7MUjeHtJndCjhM7Px7vG76Q7gWeDUcrtHNfmoBLd1KNi5tdu",
  "key13": "4swx1AVd1DvoQ9GnPRUpAX9DGEnMPbgZv7eEdYiRAnvfwp3e4TSe91Dg9M8HHgXVhodR3DkbRqt1JWrYCD3BL3Zm",
  "key14": "29bXJdDHrVYnqrHTXAcDHSkaozv11SSr448cutwQQHcGdZEJTyYQZvEr9CzMLbnF2EdxpqcGTbpAQ2NWeyBjKr8W",
  "key15": "2xNJ82KbpQGVgqgS9E8Nrr4XbgRg9Mme6oinHmKUMAvJXF97AZbY65Mdnn1NSzRuv3tyjf237r4hnoG4naSv5Z9w",
  "key16": "4DivNgapUQKSgm63V3kYgc8ny2krYMLcwdRa91QZun8Lsb6KAB5N5rRRNDkKuR4X2ceyedGqoricsw1BhLRCU85H",
  "key17": "3DEG2BfoWjTvGArSSBUsAJC9LFg5Q6uk16u2QprnEZ8tuWYsQmhS89qJwF9nRvDTrsqdv9Z9y9Q6g1oKagx1rrwz",
  "key18": "D4oJyA9wP6BdcNsDP1GMkHEmECZzsTKPZZQRj6WhUDcvtiM1gBeF31gD8RAwzXNevK3yc4w1gvhVWf1tS2LJ5Q5",
  "key19": "28FR2FS1k66WfcH1uSdP29ekFut3fQGQYqNSYDdRDU9Ned4VwUSW9sEqGS46WzQB7kZh9HF1kcjqUHUsSbq5XxaB",
  "key20": "426HnmP8cZbM2MNRP2Mcr5jD5bzZQVRDRXLSLQrxmKd7ADtkzsrMEB8EEHue68bvrCjC3yuwRDrJxZhGfsE71cEg",
  "key21": "Fo6r3a3GUVBXnHC5z3R5GpyDAyWzKQzyeivaPEEjTs2rTCVcuC8titywZN52v8H8F6zss5ut2aoVU6La15YY7BS",
  "key22": "4D6Wnxf8wEafxtjVqxNvvVMhBpBuusB5p9Lmz3StA5Dp97E8iNNnrUoV1d6gyfraoiogwSAvKsLN6U5vpfL1oy7v",
  "key23": "5dpjqQnTh12aghDkLH9h5fWX1fMHMh5JTPL7K7nnBpnPT9DKKCSQBuqPJivsMGDoCC2xoVueSEhRxxy83KUjirov",
  "key24": "2C21hurjWQp8puSK4niHLqdpzfvVqPvp4NL59UH9GyM1oV5vERq3cKTRtRns7TNfJ73xu2F4u36PVaJVocYikgLP",
  "key25": "FxTo8TSrheTmnGpt9ojBtFtUHuUVYV36PigrFUzjJztD7VEXvSctJ27PqwL7JhehAx19crtWLusrEdBnSW1M8Bm",
  "key26": "4tjW7T21sVnteN8PpCecEpyBAA5C9LuoQPcmBsxfYUsLGHVr7kp7S5MQ1u119s7nbeQQ1Qifs1j2SFShE8XPsvnb",
  "key27": "3o65zi2NdiZXRWd5iixRRpoPTvydhb8rywjEz7rsCWZgfxysAR9iTgDYj3PnhU1KmnuHqw1dLRCVc39JPLAhRAf2",
  "key28": "5uk5QHTUg2iDf4meoDLJe75qWPcsxCYdUTgqjpvJJTnUT1t7trV2cRkZLNpEgb53X7Nb7V9dA8YPQZBoQAjc42fe",
  "key29": "4TGuJKaqApTxum4ZbYBxP8XK9yoQunuFYgYqJNtohy5QHKcEopK3zRWe3zvZBJ5CLJCC7YK4cm7JL3kjp3Zw72yL",
  "key30": "3aEZUbnMujFSgyP8Q6JTPHHS1DQCG1oi3EyvFPjYZ7wLyVUJgDZJHMjuak3qsmHZFQ7w5LYUSYhmNoTcMcjFgx4R",
  "key31": "miNgRepr6XYimoszNGi7Xp7PmM3YB1wSfnHvjfpiuYn3sfAJTR6kUXp2rabLrjiRTLJYcgcSipQMCkrHQ3jThWr",
  "key32": "292MVdbyw8QF4M5CxFRikcFud5TmmRVVYChHiwQGzz2j4KukW6C9N7MTKKABTkB5WtmHZXyi4REkxf7JZG2CWm3z",
  "key33": "J8pi7cyYaD5QDN5AniVrRyYakgb3PNjyXUR9jM58nsVEvnKu76jDfxaYttp5LbCEjPTTb951HnsrmKx8q79KLCC",
  "key34": "4RBor4mUbTTSvoEKHSzG2jGBLK1ouQVzv4bQXJxiaP3K7jnkCgJ7ECc8Qsn9qotZmoCtsEAVEUnUeaSnv1KXgRq3",
  "key35": "3kr4ojuJ37BPC7b1oLEQbKwB9L17GzjmuucTS7Y2k3m3tXEB5dwFd4SDkCvhQUPLrMBuXA6iG9Tk8iKjcRopiHza",
  "key36": "2NsqmNYiSg9ujtbLG7ZJAytVNr6rrRqWCPRMK9h61zm9cnFFk944qTMJLtEa69YNV8qMLVDNDhJk1KMjFeo9tMf",
  "key37": "3pR2bsdRPM3vt9KNjYYmvZL9dJD8gXM46W4LCAVGKHQkioPDvS8cVDUF7C7ZRKojvYyyQ9rMrbdT5eZLtE6LQUaX",
  "key38": "33rYHrnXxJK1KV6AcL6KQy9cQ7dvWnb7ie9xwgZ2kKUUvkXomVd6aafZKxrymL5LwSLYAw3Nr8wPdTqFtDv9ezaH",
  "key39": "4VfzerBcjzydSkyX7dWYLJwZtVXkQJ3cgdcefjQqLVKZMnz1jKEGj2zjeteTmXB3jx9e3XEAJTeVKEhbVYG3x11a",
  "key40": "4Nx5vmCsL2dqYYLYvirTdijCFmcqM1FSq1wFCdSXvNfqZ94jEWpRR8iiZmsPZetGsk15efGw9yaxVoMwmEWQ1Det",
  "key41": "54BevRbRR4SexySvDtRz8uguB8x1cUbEF86zc7o41mz8wzppks47H6QhP4ZPNkMvqAKMB7EoKQJuv43zdggZmQ9h",
  "key42": "2BtKxnBJn9e1Twtxbx123fxEQsXFyNERmVxuFskmLciusqufkcTHCXA6c7FnXjLXo4oVZ5vdjKRhs9uqJwBzvjPU",
  "key43": "2DaPfH9BQ95bXffD9vm4UgLhkgNxP8XPyyAuBGcky3g6CHVU8SUqoQouaLA1YNB6QR22vQ8mW6KiMWueaBfWdea4",
  "key44": "4dw3R9YZ7577b631B67jn55Pk1fB2jr9EQWB1SM6dzvYiCHzdt2fT45L7iaLivGpysbMa8BTibbrEkXHQ8mMmiPx",
  "key45": "2vMdUzX4ikB2fPBKJeVwgb8Dp2MurNzpJbMx9gjpgV2Y7QbRQuBeiYKNk3gK8TSQXMfrFAVPEpA1Yx3pJNQZeQqe",
  "key46": "4EZsob5YoUQbzgM8WC1vPp47VPWrk2PDbG2Ft5jKJXELGtrPXvqwKNsCvBjAPz4VksjrhSeWGdLo3NtULhptQSw2",
  "key47": "51VwNMmepUjcrHqGdmfHT4tTWYK5p4284nHhZXJtGakqHyzWnXitA8Z4MDX7PPTEJLZ9GuZQxYc81CMEDngDTrWk",
  "key48": "4atQoGQQm1nFZmxPWbbKajh4S78GAVxuwaC726iR3xRi4wFezXHqxfHMLNqCGmFkzFXeQLz1GG24AsCAbutA48ta"
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
