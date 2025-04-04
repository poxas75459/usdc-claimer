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
    "4BkrPmaCMnQFzMAsrRrckuq8n8DF1bkyo11cWeMKckm8JeLUekbz6iYoQnhinopbv92LoRTMMpLbjnynQPx81o9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23PXAAd95Fk8jEdYC47hWGjUb2qip5725RCXUruCejc3BC48MdwZMVzrVP1wr96ZyapizDqQMwkCaA49tJz3MG4A",
  "key1": "23vmbDZvWpoLnnmsrkAdCXGnu2CefiEAUQotd5wwCixLMEhZnhutcpfUyeZeujjTyou2dz5UuQiJAKir1SiMmLwQ",
  "key2": "5xvMj6QhAz4bKjaq7L2sTPvoXsRp7mtxFqhdae2fwbKHVdWuXFUJ7p6usmcxnUX8VBG5XK3M57FjuFZNbSiPkchi",
  "key3": "5MZuMYmM32eUoqYu8gT591ogqJ7EZhxbAKDorrqFheJTpzGgiPkkYHpf4NooNKjKwp1uDefq3ku9TCPzrU4F6AgJ",
  "key4": "VaeXnk3wVEcioodbPc5nfD9MGVnGGUZuGoi9aMtD5tbbSqwMGgSRKEueKPCHn1x9biv2es2EsfKCURpThWhJJax",
  "key5": "241XxRmUKoMQE5uRXoBQ2dmrRzJ42LN1GoD8YghjbZNTm399QbNnNxxWkM8a6qtFjyaNGVDATcLyUQJ91zL7sdeh",
  "key6": "3YQhyRFb48yJDd3HywP8qEyrDy6kxP6XRHNjaGKzzdPC6bf6yL8VpqtZbfNdyGT7TovdHyCBvDwji1gKGqKWhcwr",
  "key7": "3CoA5pno3HeevGKQMG1H7L2DuhuGnGgcHvSQ2bSL5CrTBrj6r9PRitffTDWGkfGS35jyiQeVvGmMoxtgE9TJPaev",
  "key8": "2P8arRFNJhsCQzN1uahKwLxDPeao53NLGkbiKhAinnwtF9MjvVNEs89aQtCUwKtdDAssm6znt3st5zUEYA7cuTu9",
  "key9": "3zzNCgGXM5Giz3TVoQecS96de2QSKzJsJmqXBHoTwoxjvHdSkbDwJ8ZoxYq7rEiURm75cVfQcK794AGqLnjXqZxQ",
  "key10": "29SJvgXPy2EJcfxpW3GZd1936GuHq6p35ku1aja9J3t5dRnF3DnctEjSYy4DAA8zcSAfyTWCRkftoLtAhv4dPJrY",
  "key11": "5T9FvW9rcTyzUTvJXVJe2TaBpLPgCf6nzTLSpWYZmnHhg927BPSgJnQrh7LjDtwY7MPvRQRLV8y3hCmiK855xVz7",
  "key12": "5K5rty1r5ZDFeNJmH8QQy4tjRezVkiQme3vz5ZzJE1Qm22jVPNUtP4gmzkBttdzwS19bCGUKuRyz2ZvvsgbHVa7T",
  "key13": "52VpcTxEQhA8ZiGPoGWTvkKgni67YCwqRpoVQULuLFPXboUQyRa9oBh5PZ6A4n7ms3BF9Dh366D4Zq9jAuMTV9Mv",
  "key14": "XBS82GZjA5LkTTAQhzq2QVMGmrr75yc1ZqNq5J2E7W7dajfXM5jEbxbZAG2JaLTNb7mbcZyM8ftYmtnyG7SeGjy",
  "key15": "4zL1kLExtd8WDDg1RCk5Ek5Zvekrtwzor4cHHetVkceAmXREvzqf7eBhw4tG9V2rJJ9ewVuV61uijWD85Hn1TTbo",
  "key16": "2oGAkonYS8yUZ4s9efYLwxU7kxy2K64mGdGb9sc5c4K2SYfnSvqS7rsYYKGCmgs3w9y8hMtrLx2rjQWVkNW1hgP",
  "key17": "4UuUyhg8zN2jF4jpMBamfLDYSnWxEurKxkwUj2c1MtvG5yZVJL3MyRi57nxBxocfSmrTETGHaEpxCkxXrfHwcs8t",
  "key18": "5jPXJJtcfSEJEbqywqmYvFENdAXcxTsRV5kUvYYRzCdkHnpTUUL9g69s4hsuGnQdkMgMfjNnQLxKTjU5mJCZG2EP",
  "key19": "3Rf4hkj3dW6SwHVArrjpaz26S4AU4vQ4Ydhi4AYB9D5sf73ijbk3VGpeZVqvYUCWKpFvcsX4pSsqkmLN1dhZugqv",
  "key20": "iwQFaWs7Xe2zFP1SyMbGxNRU3Bx9iyVV1YNh8TaKjHzHmCk13YkaBZxzqqV5tuh5CFqakp3prKHzprCykCEN45Y",
  "key21": "45i7XC9TgSvncfRPoZZyNuXP3z84B6hhzzi3xrkpnKgTyLyTKDZizsDzVeTqfcFE9ZR73MKUkMRVD7xzyd4QZLNV",
  "key22": "5oJhdJqNcEoJ1qvtSVVeyBa9CqzQZVBioNq7FtMX3bfLVRU3KLDohWjVMYfDQKjKCgJtJcMfBK4aTbY651K7Cyki",
  "key23": "2nKSYuGdzMqMbBqfsLFFTyjb1fNbaULwWzTMNsjhpG2w8UYGc3qS1guQWLJrVfYyFswFUYbRDbEwRjiegyzptGpn",
  "key24": "2sTGTx9uXgJrrv88eRNSvLi7fbBZuCxfsyjUMijJohHbyih3BXAhXXUoFrKqwGcswk7C1fJMo4hxc79CN4ZdEBhr",
  "key25": "TMKzqDdE1NnBJhvgpPyrKyQwNXkEoa33nYm7XtQZMwznC4Eqe61KqYMqhC1virQ9a5jHJ5svoSgESEckVb6vqyg",
  "key26": "3DZMnArRSCFZpFRJ7fvG2PBAZWzQcpdtg3CMTNnT1yQyTDZoMFWRFNLerG6hvSyQrFmYmYCmsijSJegEwHXs7aQD",
  "key27": "2XieH7LScEuyv1XAodsVPnvFSzuN8nTpefrBv7wBdn1pGEYpJ2bF9JzQPn9Wex5Xkm9duAnwqaV1GftHhPzeKQj8",
  "key28": "4GQXrfCwM5ssYsqyhUPi6vkfiJTWg9VbZxC4ksJ97jJuKj13eQHz9qgS7htbzamQ3envMmr1hcN3XxMoFWvUDcqs",
  "key29": "3vJkqPQtjK4wYbk4NMCXYRgkKrg2k7S8bSbcjULgjNp8B5y8fzRey66ZWQGm67e7ub4fg1t3XiLk9oe5UDqZfVaK",
  "key30": "3EMcaU7sk573VgtKX4zxLcrwBNdpM2yxhFVvynMhiad2wpm1ES2zp7G1aHbgHcRiGvS2HWGaMNN1w9G5SHLMDSCY",
  "key31": "w6XVWSvYF34mKdafVRRBuwG48Rekj4rmV8jEGsXLjjHZq85dXGFtzvN5tN5hgW8BHiD6wmoBpUtshvabkeDANpB",
  "key32": "5KkiBoFuykEhxbyQsV4c5kqJt44ycTPcxndc8J5aRwDuZXw9b9KD7Qy75c2VnxniuCdb8ssmeZRxNbHSPjG5U5QD",
  "key33": "2LYLzjPocYawQkDQ679J7psf15fZyKwNPqBA9MNDwsKRXj9oSaW14qBqsKZtnipWx5KYdShWxRWbtB3VTZ7japcT"
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
