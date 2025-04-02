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
    "5sVLZHBSyXo4rFWSRWxCWv9EfLspVMpyuk3NKP8VeUyaUey93jj8zproApWtzAtcVw74xu4cHvqi4UxjsLyQbhUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYiYUtegobs2XRTw2Z7U7dZCMqGFxQzbFYzHFGcmnVGksKYvovjkUAPDQdbU8VfywdTcJYNMB2hWrKDoAbkCSZ4",
  "key1": "4HjQfnENnak8JLgQNMquD5ToWysUy3cv5FozZrcBXqkLrZCKKTuPoA8FDdmQBW4j4kGSmwjQeykkR7PY72xdp5jw",
  "key2": "65V5jW8NuWjWyLwbXqtcYcHsuaMD4bJuRa63nZRiSN3qh3brRXvQMGSTtrD8C66tvr9SMFeMYurAxfkY3bp1Aacp",
  "key3": "468meFQHWUqKu42nQJXtPWntMv2ck9sZGPgczuqRCzve6Mdwm9vke4mSYQU53ZL4UVMSkswFy8tMoFhMgxk7UCgh",
  "key4": "2bsrRoGcv8yYnSPDUzp1xNeG5vtEsHqRkiR2mtxeBYsJjcet2UrdqaMG83w4qLnoCeyWfbTpgj9T7ujHxQ4edeT6",
  "key5": "GMGf1dV67f1xjcbvC63TBURny6ebho5Mt3YZaJo4stb469dwo3iRboQGbxcxryU7uokwJVd5k5ZtWyUdHR2F2Td",
  "key6": "2vYmWDx2gfTsB7mHer3SUfqDuiF6HwCXwBGjWw3w7Gyht2ULnh8pv2M21AuxFTBWYsJSRTjwbe1qYvBWwkk469Z4",
  "key7": "33CEtAc499DZ3LSUo9iVd7DSCLHQhrkJ5hEMwn9DTS1VdYcqZhogYQTaet6epHiEtrsBjvBTYxtynj53wKDQqQce",
  "key8": "5A8Dji7q7AetZPWFHNLSq8MCDNQdRQsNKbUEkZvNdnBL9KENLCuS4h67YGbstQmmoJvhJGnhUabqJzPv3xMXaVnn",
  "key9": "2R5JEHcqZ4Ja7YJs113cJBmVhjvqvDKTPfV8Epuy1SibPkBn75aF1k35mznBb6La6TjjNYRxWW7ku8keHUxdpxVY",
  "key10": "43GbRtUg1TBJuvm6ADLXWN6BcU1Kokm4RtNEfXU9yaVSpfEnQ5kCE17AncmRXdVcY7BkyR1wyr3RkzqAJcfHMAzu",
  "key11": "YutmjU6xKuqEFxLcqUELdRiY7EhyqZYs62LdZG5UTVgGkHmtiVRsR8ZVV3zGhgspPvBsjHxpby19LATKy1NTQiE",
  "key12": "2DfNAA3HJXFDqDrp1pwKL7HBZ3ECJVHhgRTXX8bACYej4Qde36qJqGdSGg2664DHtxg2DpQFnX126cEp59refmSP",
  "key13": "51nYBZ2eoq3CHUbFi45r5VigfTU8zbvJy4quFtZhaf7xY1hFJraHmiuuLUbJreR4RUApg2wRuYKBKpWroL2u9VFn",
  "key14": "3D9SabKv9x534DBiPWyffx5GLPvKZMJkZ5DWvm6MMH4Ry2MfiUYgfE2nBSbHnDBfPAg3gjZaA57cRydNMULECksC",
  "key15": "22npw4PrmiwkH2fAJr4HPsUaZEj1epeSetWqW46nsCgoQdQDbhc1wUrKmvABifJFeLJcxB7F9ticvndhLCWmbxw1",
  "key16": "2Yy4sdaQfrRknyJDZ1LwMrGpSwtQRGG3V3fYUF5DcJyXyd27XKyfGBpHidn5Do2EFTvE3nrf3krZrJcovdunRUbe",
  "key17": "2aVdE47Y4X3qEEaby6BYswgjLkJSJ5yGbm9Lx7QpyoZBQ41aMRhjq74DSTZfykLqvMzMAvSvd3M59npM3zeDCSAB",
  "key18": "4aetaf5oVch5vaugbk6Ze3adqBdDF6nJgjxdyknhFrJ3wbeevpnQ3aQEt11iCYrYoEVJzBxry4Y8VmnGKFKWQHQM",
  "key19": "3SNawvdhhBwGsHRDZzVvf7QJBovEyqunuf3CDiZhzTWk1SKiUmodNGF6vvohPx532tkaJuxXT9KbU1gW433cEcMb",
  "key20": "2nGbuE7X94EPsDht6pzqkWjquHJ32orht3NnGXod2i1tWxUCsUrGJVwtUu14TSxTtKFpAsVrjoUuoCzhcDm4RyMs",
  "key21": "JaJwWAzuZbmRBz3SH8DeT3wAZJGMY49mZaboonPk8bfWznrGNdFQ24TMESF3kUpYyj3SuepxsoBshq7a3K5FSnd",
  "key22": "4NrTuggDkDWkBKBz2JT4ngvKmTVjkAobYTaJJVZx5UuizhgEjbRhrMGp8iwGBhTRT9ZuR3tnQnXtcmgiYgswgvPJ",
  "key23": "3vPyzPNgjaSGuKuqcBjEMxCxf8ob1QDvnbnrMikrqrCgC5m7qWkdCosQsHNNucRH6BP2uyafzUncMW1JVW1jtvh5",
  "key24": "2ZY6NoAkJKBVPNHUgmmJqUYqxvQ3fr6Xf8HMwdxwpzbVDoRnHbLyxgFMS5iUXX8XivTMnn6XzkWxwNB7epZrUq32",
  "key25": "3wDsmYhXiKb1FhwHqPWpgnTUonZycQkFdzMF9nPNqmY7MhiWVxLAyydP65RCepc7UZyuut5wyXV48h4Bk3KmeiQ7",
  "key26": "4htsxaNMmxiT9tYPAH9ruC6KcCVwb9USXdzuMZoPjaTh2DRN2LJZrV3ezVXvWoSBppUWwc3XBt6z42GzNau8tGVw",
  "key27": "4FnctdEoQoR98eXYLQao5XJnDeWgz3vpgZcDsEHjM59W31BWfZGsRCaRJvfh43auNzZk6DVgoGyy5Y413sJvcAEy",
  "key28": "542TS25hkxtkh9RXJrMza8XUhEEGqhTScMNPVmjpvmFTmRyfDAgZy34FJxyi9q2iyAynbmJXDmej5ayWSughKVRQ",
  "key29": "5ehTNxR9x7cDuY2CsYbeU6gSPRBUBgYgxe17eEp1LtYy51742a9c9Wqkt9fTXhNEgpHZa8ZTusmRBjknLy3D6LJw",
  "key30": "u4mZmGXnZAAqHM44z9GxXe5UjWu6pLZmFSN9SqdbFteBLigd5RFoaqV2tL3TzKW8EneQTKPRg6Jk8Bgbu3DVJDL",
  "key31": "8K1vN7SbRz9BJ6PDvF74uqUjmspJEtSuJ7YYG7MwkfGwr6gck4cqdABzefEM8rHNUjQ9ccWe5TYTuE4Cqy8pA4X",
  "key32": "4Nw38KmpzAohRaWkwAwK36LsTEAUToiLDYeHW75yQjh8DTn8exrJWnb7TRUQK9UgxbGwvsdsiZr4QDarjRAkYZsT",
  "key33": "2eEa3V25Sj96hX4Jdvgkkap4AXsrkT1cQEXnSX9JZj9dLyduZVehHkRDncRTEeN1RvFpEQuUSBrNPpZk6cygpc1h",
  "key34": "5VFBSVNy3DqDSvjdWWQm9GxXChgVLb96FmN2qUFCe69Jspv7cHwFtiAVNWJLCgnfoqyxJNw9vfPkMRATGAvpFsDU",
  "key35": "2itMhBobnRUbnwYdDuwExectbCbzXJG4UywAUqNX2S6AV6X8cvJT1RitHv3qVRmS8NaRLZpvxVWZ55TBAAwTuDwp",
  "key36": "59wP1kDc3ELTsnwaXCpFDb9Vxxq5utAaov275oahhhzwU7UCZhZZspT3QXxnHkSzutwuJCyuSjvsQdceHthLA4Bs",
  "key37": "qyPDv7peiVfPsPTHtLHQG8C5PF1PUyKBkDUJVsGjZHThWsTharXQAzf9hi45sn9uk5yfBYkApQ1Q963cM2Rai2d",
  "key38": "2npmKsp5W5RVq3rV31jzct4rCuQPrbiHo2rXTsZn5spJM1m7ciArHfpvugiy3TqmQqtHRJQ7dnMjoRMz19Hc4ndH",
  "key39": "a4wbUEQw6rrJcKy9wegtZPyNEK1LocTVBE1su6VX7aBJhahuma4vUfiwW37RekYbp9EqBxgUYN8rzDeFch2PE4t",
  "key40": "5YFMvfLrct16SaaS5DwbEha1KpbLzZDibNuJgwdGhYUS42Ywrdsa2dAySijSEPb8id7Q1iTfGKty8n5x6wNJwW5A",
  "key41": "29fq3UyuC9q612SCf7fTv8YME3jKXaeir1GQuXMnE3dZ2xztTwZPZ7WZcrAiff5y4EJdgRCPMtdZiabFoAf9GYvp",
  "key42": "41Tw1pdMk8pTyQCjtbpJCbhdBKXkiBVzXcx1zTWsvCMbtGPCJD5nryC6QgKHj8GynHvefjcssfPEjsQRXjEDyiP8",
  "key43": "4usz6RuVQ9xQ4Jv2ynKRz2oyJ7pa215rXQki8oYcnBefrU8aJbahd1wXtnna9pHZnuHZwdH57YxEVrTSeG8Wb4HB",
  "key44": "56MmgE6GuUttk7bHYTuZUiKboTfCEtFmCzPL8k1N6kR3jwDrkXmzrR2LrSQ2d6nFqsB9j1msNnaGrqMNHQBXYsaF",
  "key45": "4FqKFAWUWeau8iRasfUiP5bBu4qobvYo6HAMKZDMBNkJYsNTXWYgHszkPDKD59ZzknGdJ3WLE1RBf7ewt3wMYTqQ",
  "key46": "5Ey7BhYR1JD8BFe1dniutejPR7ARLnVgj7LSSxGba8Xb3zQjXv9ffJJDyPeWRLSRTwPYbRvwekts2aCB1yyt4t39"
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
