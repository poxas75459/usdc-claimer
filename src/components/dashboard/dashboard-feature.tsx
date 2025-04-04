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
    "47QPTeFfDx8Mw7jPFKGVLjrSRc7eEkvNBauZK7F6m9YkJrmwykuRbCJzVMe1ZpaHdhV3UCpBy5ZS1k4vK7ZW1p5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pep1v3SRdLKYygZ3VckB4JWVs3gikPiApEZsS1VFvBTtydCVA4Wva3dXQT2dGGyztg2giySP1fNQfQnGosY3x7u",
  "key1": "wNukWkzkJ1PR5p7rvVqXx3hf8t4xMubU1SS3CG5S3UVyGYZZ5gbziZoscyvsiANW5QPuj2JsJZXHjN4ijxm8DyW",
  "key2": "5aHJr31qYZ5kGVPMLxirHGmTRjuJTe8qzU4yHHv2G11UsTMSceXFDNyj5BRCmJ44ERtK94KGc7rEv1ppprZkZxqQ",
  "key3": "2Y1Sm93jXzigZLdWu1vRevvLu2P9tdixMsUACAU9MZ2UePEyjcEUuNQLFCb47RzPMg5kRkvM3Jh7pNjpcqXTFgNo",
  "key4": "627HAco2HgY5tryNUPbxa5z5dQjURVfKVqYJMrri8CVQk81TmEuR655Rte9QdAvyhQcFcY3pA8vZzzD1TL6djXDG",
  "key5": "2NHqRTR8GQZroKhoAXfmpq2bVYSaRxB8BUMQDBJQUyBFFqhr6WPERNMXg4ibhJS2stz7APkz36NsHgdrrryGM5B2",
  "key6": "c6BuC1SDH5bQy3v5PSV2ztrfD4o2H38PFtn3Fzbnsho6sk2bCd6w3SYk64bqKuacwD94v4QAji8rdhgtemQdhbN",
  "key7": "4sxCmCH8jrSNmVDe78wQfJM39ADPkwbdkE71wQn5oXffgV7CVt3Qe8CuKvZ8sF1HoAvfTz9chkbYodB368yGAkTf",
  "key8": "2wvb6qPJVeHefev7hzgPSc9M8cnNQUpi45c6zPiEtCzLboPbZWKBziAzcC5Nahq3tC9VrTWFZNy9Yam6PubDcaqw",
  "key9": "3q2oTiguPBxFV6HY7gpm8HSKTLCqTAfmAVeb8WjMmrx6F4F1EV1EubxzvCakquW6N1fXKUrZXwWitnVcDMmMtp8h",
  "key10": "67qxFjCib14D5WuTRejs19tXvMBHiYV38dykdHFpvHqoPGqk2uECXEL9DXcwsWLRFKDtYGC95E5ZEEMrLgUApsdc",
  "key11": "XY5gAy4DRwfU5g13SPrv5hFeubJkvQfgRTSbDzCsqMVeurx2JAh7WM4bEtkckiGwu2mgaYg9mMZLGXBs5p4Wdca",
  "key12": "4KWUdJMvSrVfQTdigVuzmBiQckrnt8g6zz7uBbK8xoXvvWMPRUGPfrRBYqiJxW8rBxeP97msM4yVwKbcB3mNBdXb",
  "key13": "4wBX18GYJXv7itG3c5ZuoCj6HSbXdCS4oxLoG29qaPwoXT73TX97aJh8it2R4RnJc6XaFmYdUvJ8xzjbDD2K7yAv",
  "key14": "uDSGU2ALHX5rCJpfYWdBGgv9cb5apB7vZNN4sgb5yEELiDXjyNmecmaHMaBDFHUZgWvy965b7GUm7EoWiNucJYS",
  "key15": "3ZsqnuWdxuyscsNkNriVfnAUMpsAZQYpyTHtEANUkF32feuMEbLKcdvFjbAQUB8L4RLmLJ2MSjBq9LLzSAcEz9j1",
  "key16": "KdTAG3NAd92yGyEdg4zBaYucoP25wUuGSCu76nkdJxoLfrs9pt6A9av55uZvFgXGbE9J6jMXc6nRiCWt94KtbQ3",
  "key17": "5Yre4uKwbecJzAeaCpXKZnD3QMfuhDf61WoPoj9a4QodpnsLdA254ic4w5xAWUDR3LJfQL6pws1snu8eQrua1tzg",
  "key18": "5ER4UmQczfh9PvbWPYksgqAAnX8VNwrJErTp2v8QWvkqg5Z6cia3y2eUn3xhfYhRqxrmd9YxqSVvGtgNQoy9YDRp",
  "key19": "3DASt2xFgoVexcTVpfBY53gpPTJ8CmpmUNLo6UJ5idgBT5U1q1MjbeZ6AarqeUsdfMbHtCsunfcUMypWw9z6qLZ7",
  "key20": "cUc5pLtYXxbbRjnE8aWCzz6cta2FAqwnL2hSJA7nS5W5Dh52xeQQ7PEwqGbZLqSH9fr7zpoPuUFcCvmq3WhbqaY",
  "key21": "4V63RbhCjZn3JPvr18UJJAx8f5JQ7XHgQA6fFUrkaA1bk4U2BNg3qCp5H2pQoPu6xPPk1DdD652hTsoYJbR8n32e",
  "key22": "5wVCzmmaKNRztBVVUP25GWo4YCbWRavTmM9etXrCudYapvzzE8bDDCAhiAQj2dai9zp6AAVKBgfdFaobJwjP7Ys9",
  "key23": "4yicGJDbLZ6Gj4akkPnGfgthb9K4M3G44ybfyGXThhvdRZRL6wwv5SJT1euF2gE6P6hMhH4coMbzEKnKoGUwvGC4",
  "key24": "gE3VJfX6Xty9yZegtRJj4qEHq1mg27ejfXEXL3dh4wjbKgP2XshmmiNey6iGyYhedAVnDyeE4DdKUy6D6frCH3Q",
  "key25": "36MU9tLJm1j84vpt7YLkoXHQCLYoy5jfGzBRHvYqiiqoG51fyJCcffKAytchVzHdpLqoNCWjvRG583aiJoFhWYsV",
  "key26": "3NW4ZQDMJtAY4E4PWjQK16KdwbEJomDHrQKgWd5Rx8h2JQBbqHzyBpRqGeqejQEVAzL7LFHYXE919LvC9Ggxhe2G",
  "key27": "FuCpcCXxzW2v4HJFUEucAXMoPLzGFYr9fKHV6NRp65gvNNXrHj5z1Znkr38G5Utrj2PcBeoD6Zkss1Hc43YYBAC",
  "key28": "35UkLxiRRUJ7hvVQdA5c25jeLknxy8XVryXV372mddpQ3fZFmBFnpiVKkcH7Mt6Lkk5fYCeiYqeWevng7563yxbv",
  "key29": "2N4RCQ4F9dsAuuSGCZc1sSfXqS9M6YR134awA7vjvLzCW9ga6GAn8qwxvZCCyaDQh5rSAkySnjQ8KitRrNvV9bSd",
  "key30": "3Ex6tYwkNHQjJDrEWkm6EVTzoyTCtHfeKfqhCb6azzMjfw6fKiYU6f3FQpgJhaLcV86bBg4475MbvAE3EMoMmjeU",
  "key31": "2DqjMEmJw8wxrhGvDb3XMaZtXyxYgqaFGBsysdBp3wRkSRLuJjJ2frMKor28Pa6f9eieqdzRQ5tVbxHAnesBMjZk",
  "key32": "2ZHJ86WopvutzdEa6SdxeY2tPXSZcbXq6wyT1ZyRf7MhVQc9GXRwKW5hX7Q1sms37NJ4eXotzLRksrGce3rLTRFf",
  "key33": "gzQ8ByxeYvCXg44qmBkGvuMWQmq7wXK3ADuKKndoHcqaCe9meZVwMmEkVvCcqgxenX3S8NWJVwSyj1Xum6MvFys",
  "key34": "4kbwao4CbMhLo5zfARkoGNQJrcbXF5kmXcdhomf6Yz7cGaA2bEnhoDjxyaPTNYZkcp1rvEDHV9URTXp7aCgYGu12",
  "key35": "bap1K48jfwKBnu1iatXt7Y8Uw8QyuGCa12CNbvd3XHiHZVV7xefuntbjpbCa3gedQo5dXR9ydidKfDDR58Y8G5y",
  "key36": "4HayVbKEsxboKwGFDXVwmnjrtkRQjtkAfr2ZgevQeWL79g4CzMtfH5isw6pJnFLvJW2vAPLB9bJsJH2q1Cgp187v",
  "key37": "64AFf5ffJBDszBk5a8yr1k2qAskPutGtSL8LYyjxYbVPTq6y318c7bBRSnV9cuaKttxTcw3kuYqnqqoFFuhRA7Fh",
  "key38": "ZhBV6gTjkb1F8Euz9p2U5r8ffKrZsSwcmPJPXzegAG77DpH4E1UU3FNNrY9msbZ9R1gNpcAXiF7h7T4151dxKa5",
  "key39": "4Q7pt8jZqVbLRE6kTxt77zkTsZywp4T7zuXhrYtB9nrsdhxRX3Bn9wNDKjZdZP2t1C96vRc1z96UX3Hzv1EUJw78",
  "key40": "59fuEgZnm2unX9ePmBmqiLkzjwrvJqYHDSQR74C3ijaRMjEauzqJWjSrzAeugmfFaQk3Bv3J4Vk6oa821ni6psuj",
  "key41": "6jZjaQ8RiZJF2cd7cpjp9vx9MjqpLL6iVkU5xzqxXJk4EKDzkTcFaCFErbfk5fsTB9TEZXs9FMi9yTvdrSR3DJQ"
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
