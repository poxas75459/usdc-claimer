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
    "4CpatU299M1kpuKzFzgff6c6q4M5uUAgv2LCq7MMf3pHdtZcRoi7tsJeSfMv6L7KQ8xv4PFTqGKrs8PfnHKXQgsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nEw9BcjW5sxCCgaqL6sZ1g1Kqs4NaxQgP1hdHcQZr2kThkazmkwREoh1B4DfTQ2sdPX38rribbFybbP6NWKZcvc",
  "key1": "4pJbMHsC3Shrf5cC4XUqgLgnikTKCY1yS7nZEkqqUaBPAW8e87rsR3jGaZMJi9CAWV7k7d7YfSZxNDgvXPSBShZ3",
  "key2": "2BJczEAhimiM99byeQNDiTGEWesijQneTKG944tqnQFSGdQ5zYJLRSr7kLUKkv6iBVFBGgWQRWhv1HZuWjuPq1Te",
  "key3": "4E1R4VQoMrCng7dR9QLcb79DagWoic6enx6BtmL2STgXhYbsWz8G2QFmi6WTQ6dkqR6GTZyiULrqHV4Q9fQwrhVU",
  "key4": "55iFjNbVvRt9CFXFkuWLDdiB1iTemgUNtVCVyEnEr31MHUMw5Szguxj9U9RBSsaVHRGTfbj8qE3dQrv9pgCzKfKv",
  "key5": "3bXntzHshUFBrJwHYpj6Ta2euTYJmFZsJBHnKPAMAjwPLeSe9QoRhasrXCW7ri5KhWWmXbzgmfHCe35zQfPpB9vU",
  "key6": "3KJZZLJeUx7DnXMCc7AxzBVLLDEbrkhckCE9S2w7FHmYWu6h6CrS4jxj18JEEGbSK4ijQNbPRcMWScy8vuVqj6dx",
  "key7": "2iz9DVA7o2bxjfHm9oKBj4eZdtLJdSSzM59PhEQ6zKynNbGBX8gqgGwKiUu4mzQHVVyxpGtEpeVFmKbTuwWizZaB",
  "key8": "57wHUsBXvgCqoKtiQHAJ2PmVq7h1NYPCxat3g1wues2V9kUyX1fUGEoEYgdBpq32zQqgGeAgnj8emY2fzfRNoKtg",
  "key9": "2wJuMZF46ot1vesYNrS4342jnJTiVg9FK2n4kRFsbjFmXWf8F1nL3uddYQTjBCp6NQh2bwwNYd2DfrksJMEz5oXD",
  "key10": "5F5Fv1ESuW4j2YjcXssUvRxVw65dvqTURzemfDrftXddKavgqPQxtxTnjVRV99ax6mYxtcHvesXALCo9aKPnU4Fu",
  "key11": "5D8rHncXvNjyfM6qqGeWu9Vzx7RNiMUH95FmTCN4d6jnFhPquCKNhPR1W6kVC5GjkFxwEk5CMwxqtfnVPDPJqv9U",
  "key12": "21jMj5Zz1do4kdGkARJeKg9gpRzPcRemVrwBEiDz212zTaa97AAmvkxZjnKBBdBfR4TjuGbZ4JUTTsZutjD2JjKq",
  "key13": "4N2548q9PfTfWS6TruMKMvAfnSa81hBy9F1G9NLonqbnqKvt5oMkjoGGqKmL5nEHA1hapL6eYfjDrRTSKFyjJd9T",
  "key14": "39B31wv5gC4rAiXbGLNrh2VfjeqbnVBgzpqVgnaGg8LZg1YyD8H4MTmLCRDJ2cY9mkwuGxQ1Ucrti2D3jXPSmXRH",
  "key15": "2UGxQ332pnRLgCb7mrmMTvBFP4WSTGkkpuTnMM9ZsJWBJcu1eYVRoDqvUSqGnHfjrc5wy6RTRZPhQysW98KPpJGC",
  "key16": "5rj4SKepxt2tesxqo8rwUqnrLPoYdsuBoG6shSYRE7AtXWyGJFZ72F6Vv4FH4EHruvqdXNq1VDXETBRysp1HHKHs",
  "key17": "2oT4xs9cT2rrZP7Xk3neuySdq7aHujmC9iQ4Ae3KvzPn6QWPnWRG1VLUhzzAzjJbhxTwdiXNum3yDk7RLXvnSyFY",
  "key18": "5zn2d44R7V2fihJJAx5Ftdp6ddQMYxiE6LCwYwJygUUFaC5B1cHwQEM155wjtKxkrj1Avmm7nmSSc64xzPPuDjpb",
  "key19": "5EjG3tUEgiR5smTq2haYwrbkXCtEVw25NfWBjkxCqgWRQWDT6kYSmxa3gxtrPQokyMcytvMhY76k4EGLbN9yFKfP",
  "key20": "5C9AaCxVdykZhY7dkik5ELx8k2k3sTjcrZtTeo1PEsSkTFR41qn2ncgeHSH9AkUwdu6aLuTov73BxfhYJARy6xfB",
  "key21": "3qTTRLtH7m5x2Sq9iko1mzTfBJgEtAGzuPCKGDfPpTjPYhUxWDyZ4gzZjpkosgPwr7sn5e1Ydw6dPPoLwF7XsSN",
  "key22": "5wL48qhg19i7D17hiXCsWtZxVvH3JhZWMsQAX2r2FxZ9LoS8iH4AcCntGkvPHzPoCkHUAte6PjMSv2YecFRKRKX7",
  "key23": "2jN8xVWYZr7xaDoJDDNzz7Q3mNk2p9MuUMY8KWfmxYBrr12nbRTpGe42CoHu9kZ2bj4VcoDcHHBeNKx3JzxwtGvU",
  "key24": "61zbdbXYLXbUpsLzhRTCQ2d5q2D1JUqwceUXMYSgAyi86mNMSt9oLZFFTan1SZZzwCLKf9qnxNkUt31kCAYueKiD",
  "key25": "fD9nWRDVAYXoNDn5nK944zYqDqJEycT534zZCvmyei9Qc3TLXRgoDp996ec2okeowjbU2eQLBrmd1s8mmNmQoex",
  "key26": "3k1nuYWbqcDBNoHNt7PH5h3gsqEHtPDrFqYXze92wMfjeZYq5BoG8d3JFgEFzAgB6giPwdTT94TUSCZgG98XPv1A",
  "key27": "5D3aKFP4uAViyjvVF8ex3S8gSxrXzXesSX3RG4VxhpBzZP5dxzD3CJ89CVU7oZYHDoHf44PqiqLn9YedF9nZjkqG",
  "key28": "fbjRN1T7g2PLBPX4oFpe1P1Upt6And1AWG65YKmPbt89mBtexUDF5N9GDLif6jnrRbXL9PEJfEgysEv8dReDpd3",
  "key29": "RWJUTk63iiwPcSe4AHCWmUVq8Fjz2vaT8iMSbtKPotBfBq2F35mDAFLF6kCL4vvTUrBC1KJ51dm6GgisAQeVq9P",
  "key30": "3Z5LP86ZN7qQZXCciAwPz8hupht7z5qJHyxUkD2NF7nrrS4JHbY7bNnZy9brwnSiuRnEeUUDpbrzU3V3nH3VXAAv",
  "key31": "5GHHPStjGE46YMDLZDBHHxb9CH4mwGA4xw6rFtVv8a39ptAL3QaayuJRu6f2qHuSVWJeKDqcTfWV5Saj5eL7Zu2Y",
  "key32": "2ksiyKgqccerZrWZCsgjQmRsHdaDmBja3uNKUy2Mffask7NeHZVTtoJxY3N1fJPXyiKnu4c5krCxiBBZwf8iwf7b",
  "key33": "2FdbqDTt1vbhj3rjtqMAYkGbmy29ncUbCTYXoCex3SVuMQdUGtZcZSqvNTHYA3oFikvpg55Zuz4YeRDxoQoZRKqZ",
  "key34": "4KsFBbtngvAHyETD2KnM5dfuVCbzcSDm6gnGfeSccf7sgizKj6iozaKiBaPghKNBW1aTXiZUN2c3rRx6wDovnUxF",
  "key35": "4Zzt46qmUePhFMYTpaT4R3ERfnFmNGuDqZ6u8LuFdHnw5vhbqvB1pqWtK8DgDYqz9DLSzEQ9C8e4sJtZ9ieaDYUx",
  "key36": "3dADMYgUQ5t64gZ9eCiPsBY1QUyXHH64vWjMkXn1LjKGMmeNT1CmMuhSFnqmwDiVXaNDjU1ei5LaFmDyJgwwx4Ej"
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
