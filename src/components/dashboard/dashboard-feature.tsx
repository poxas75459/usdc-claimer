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
    "22u4rDSvdfJfzNaVKEG5TuMFeebumB3s2CyYirb1MsCS8jgAzWUYkiXAkARsgJNZTsJb6EyjKAgsqpVu9K9WenrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JrDZt7jDpFPtfSwN31DE8NoHMztat8UnLvJ8Eq1F57vsFAB5E3tTBm9MMk2wqUuUxgCz2YLFMtekJzVv3KEu4Et",
  "key1": "3d23T88ishp6q2YGjGwM881JY9BUdEJAxfxyArzvzD4GsXN7j8z6mcvj1y96zjKkh8e1kja5ttnLDD7N4qdQrVXy",
  "key2": "5Kbr3nG6aJyc7WyEgbP7e6xFQzMRWpU23vqfhfDQ5rS5Jqqwj3fAbHAjG5NY46JRUiTDiDiu3wce4Wabia3x5ohE",
  "key3": "tXyUwRx4jtQ5enmTteLozVQwfLtjoUgGfNWUkF6WFkVPt1Uy69Q1U6JnLcpj4vpEYKC3f3XZjgynoLrpaWPuAsw",
  "key4": "3FSZZfHvUSZMFmd6VGjNGZwSfiQxkrwgW225w4ct4YZ15zZeVU48CHpz5M5A5YsCUVeFUZBVFH3FgwvzZTPsBWtm",
  "key5": "2kDRvPtbvn965h84iEXD3L8rusJJqfTec8aC7zzVDGkCYJv9ZsBGnrwyNU4ss6361i7Pd4wttB9F9mhofypYL34u",
  "key6": "26zzBTWpuJ1zWVA2MoJfyUW8W87BDiSe14yZejL7DGAZ1KoyyKKPXpY1QVqtDWym3x6BAqrfiSCjnRbzQZPqzNW2",
  "key7": "3FGb3LNcgDSFdWrdj8unHNTymM5aU7DWC93VzJZRdH6Vh55JwCWb2cXaCULtDRj6wHQmLZxURH5RuGfTPcKe44WG",
  "key8": "4QpzDMCBsJXYkXP4XvbHsRP4E5VibBtvcSRHmZTj1uvkDSNunPiNLiXsuZ2ESTnqmacdLAxFC5cJ5UuqijQGg2nf",
  "key9": "4KCywmWoaqex9Si4qJS6MeXYgBFu79z2M3jPRduJ4BJfVe5ps4M5UE7q8iCBDdjYYLDxB5or8fi6Pw3VwVFd1489",
  "key10": "dpneGC5ighkpVKonJhyCDbMLMTjQHkHo4hHwskjbMedjcK2KtYWi84YemfaSVh7B3QLkJDBUAgsUHDPJcXrxXJ9",
  "key11": "5YAQwBrRr6xoxrMMouqpUqZyDwCkZb4D9ZJLXw6M4FqKqeaRKPeodK4k6MUixbz7CRn5TbA9wCgG4iy4thTmb1P4",
  "key12": "4gT9HWWFHZbHQ5YYSM5uydSvNfrT41eDFiv29vrAnSDUpohY8yp6ShvGyJXSmdbZPtN4r6tpD6qchc6JXQVqxmWJ",
  "key13": "5cb3cP7Ri8rJ1m4tDeJKY3aZiCShjPBDrKsPwZdnxqeJDAKEaW3jBGrtUHM2ByTymHztQ819nYVcQ3SJMCevFpbU",
  "key14": "ancQ6xUs2vF3eLePxafva2kKQWDhG15b53TFU4f1GsxNmuLyxv2GGYFN5kbcpWwbHTA2mfBdC83qGZda7BDKr2u",
  "key15": "2ZaxqV9t9B8CCVJychr5nLnMHYmJ5mAtntqqqfvTZ2PqF4MMhqcd63ZVPReRzefLit8XDbyDF7Yb7wKAKvPC3ezJ",
  "key16": "3rzdN5QHmUUnuiC2VgYDDyf5Qsn13Zz9cRYHPssGpSSQ3TCMdyfunPr2j7om1h2qH8KYLYdtBpfSwVqb9YNXXFuE",
  "key17": "3RLzMiSaJwsnAWSh7M5a3WeHvi6cZMaaq3ZJWXR8m2LCVzf97kYV66VhUhhF7y1VakgTyPoRdxKGGpQN3Cyj1DB8",
  "key18": "2nJnbpJAy3ds9dFZTS8gD5ZPXTUyAGCgsTMjPiGgaT9gaUw7uasoj3Fsv3NWA8oP8vSLJhoEwT3fn4aEUP8G8UoW",
  "key19": "3cvFWkrYUjtNrei7y9QTke4P5ovMHbwoH8LU7REii9do4DuHoaHT77rxqggmRvLLNwBYf7tW4puz6RXgXnwH6Mr7",
  "key20": "2yK1QaLdEc2sx4h5iubK1wBLnxi6fUU7e7hhKnYjUNk5WqLVuGUiVPUVv1tEHiBduTmVUijWnqsHgeGByHHmvaCq",
  "key21": "eLi2CCn8Mxbg5ThC5R5zdzF4wvQdFuxyNnFYzF94zYefMRm4WdwznpBRphQWUeP1Mz6KRtSV9aTryndAmy6XMFn",
  "key22": "5JkmeUGu5Pm1QLsMWLEJTqhBX3Wv323jPN65KCXstuy9v8E8Qpqs2N7i9Q4UU6qrBfW48hrevHvcULari2Gi7MxU",
  "key23": "5JRTDbNPZkbdLmVhKzvGRT2fU3QFe1AB9apy1SCwXAJwuoCCtEPdAJxgJUPqgfzqDEoK2NECSMC8f6NDhfWxuP22",
  "key24": "4XBha6kYJma7rY3GCUG8APNS6qmH68jWCxn5fKV4zWeRZTr6xzUQEtvK3neiUGECqgvqmbh4XtnXvC7MwyFtifRH",
  "key25": "3WGpQXaR4XrrPs5RDiBRjEK2XdFCGrkzoNmbuLaU2D6LwxsSTZPwh7AfRhg9BWT8k8w5fkzJNmo1TPqDLpTHNpo",
  "key26": "4CAWEricmtf7qo4xW9KVCCWpqPQTE9oSBPLQkZEXXeSGzak1HT2Tz9vdqJLDWYTeqC7YPdHTNehgmnjhCxdd9Gim",
  "key27": "3CLjRHmD2FNaYpDEMmKBTMANhE8s7zQ1s5itK5NCoft4mGzB3DtgTBUJARQonUSyF55xHG9XodapjzXtT8rDZQQg",
  "key28": "35vpuuC2aDwaM54Z13RHoqE6WajcZosguEJhAnZzVFYsQR94HkH19ZNbGbToGZNi5JNYEH7mVnFMUVczz6WNayLf",
  "key29": "53J6qXrCrUmSFs1GyPAVPgV1tz856Ua9KHGCbcy3jbdeCTrY9dmepJuHTXKxWwB5FUvkQmoghHAjUA7EhznmbXUH",
  "key30": "5Q4Ht1Zbf1cnqjE8454DtYCz1nsog6RdY71NEq6NfvVKXCsDFNT8gwAXKkjPMpTzZWKwnLTaxtz4HtJUgeYUUrmx",
  "key31": "tK82maKsDweckCcdKgPWQ2S1KQodQ9ghHXprbG85u3XGWaaN3SFBNETArYbqifNBwxWgpHJLCG8jMWQYNpDerXN",
  "key32": "2NDe28CrXcqepg6Z4dFtQdbjWrha3v9JCLHZ7syVbrZ2hKtWB9y2vkvH4DeZoR2g513ujddJcQXqs8Q23NakEj1k",
  "key33": "3nGKt5LsdN198GKU9pdcAwBNugTLQ1DcqE3MNDtV91nk9Zh5Amn4wz2KUiKYANenrp5g4Lq3m2kNnGzmnDss6tae",
  "key34": "3BjmYB2P5dQCQbLRaqTEgBqfe9iSnq8csZhWonZJFWAsCqtnwmAofApaBGNRMq865kCFUNgcZnWiLifDhQkH4u1o",
  "key35": "5ZaY4CDP8WFehS4ADP1C5otu7kprZFAL5RiTst8eS18rEhtkp9qxsbtHvuFKqwuCsYpBTzb1C62YUrvN9XNDqs6y",
  "key36": "krEKQNBawrZv4YR5YSCUitHzNDcA5KLywXVhWJf37Wo5bxQorvmJeFh5F2292X7g6DuSnGTR58vT3LD8WJxavum"
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
