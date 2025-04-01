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
    "2vxe8n1tDVw4RhnPDJGUrCDkij7YKTt6LdGqLNiWb43XgZUZRLkq5PdNDiRv53J7zkzA7DwXbLRAKk59nK1LzJbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39cNsYqHSoLhfjZdKcF8DECFnhJjX9tanVtaUtwPrKMdUkL7X1FRMPVTQns5oLk1RY65nyeeDYuA3v3LtUNZMLz3",
  "key1": "5dpyXydrPby5aLz2Q3dbsncGbezYapDyjtXfxemrJ22PMA9E5QpwXjir7nTX2pryydTn1qDEfCFDsh6UZgEr5qtR",
  "key2": "2qHk5orWca8znVGDmcVwXzceWoaCf9rqqkotcDDj59jMM6wu6SVphNte3ZtXPiPa76FXaHkrGKuP66j6mY3CALQF",
  "key3": "KSkLcqpepHhzWnXmLNdv2FYy1mHEandTxeTT4tHTZAPiSf1jaV7Vg3WAbTYrwrPJWG7zPmNj8QLyUFBGrAJPUv7",
  "key4": "2G2S6pgGMj2xT3WTfet7NyNfrKLF12HnSdBko8fgh2vKdwk8RfKLbxfDvkYUDbJuywJkrCmdmqBqgNUqk2diK5dN",
  "key5": "4ZnGjh3b48rJPhrL8pYaj4EMRNnA6DfJkeqqrHexJtjYE8X4MKjEdUSw74EFdNP7vKwh9iAesW3btHFA8R3fL2W4",
  "key6": "3QumS9wz8RvzPfE9eocGmyLazSb75uLdVPRwwZn636Aj2V1bJTGYUxvvG5M9v27zjG9YCZjp9gXwCVn3bzUsJMq7",
  "key7": "56AFKJf4A5BgRNvRpL9QCEpzUFLopsJCMKacS2Lwj5g6YtmGFNLEEXeNww7rx8iXay5Hir2jJMScrH41Ss46xw3t",
  "key8": "3efsYrW31SuKxdJFodpqZDkivh8ZkkCxiGbgQ8rteLKLFcQ7kJ5hQFgfmP3azynLqKj1Fj76yuo8PrLyfgzEDc4q",
  "key9": "29auYAQ55x9joyGxuTR2RQsZYCeWXUJoJzeaZaSacnFoEW5d71TDDmEA7sEYXXyk9Wx8tMXGQBc325fg8Gjvtr3a",
  "key10": "3iQfrJmp1mmUdbU5HKLvwrLK7RhjpGQR1vZxmF6CHUhFQvWNtwrbUXui7Ttq7tiC5SWPXVy6N5ekb8ksMFHKuUxq",
  "key11": "5VDdWweAs3HP6oMA6M5kzTtu33HFVXQ7a9H2cehYGWdkKvSigTsKECDr143JJcwP3h1Pc1B1csSrieBUqntt7m9z",
  "key12": "1y2hg3Vf6pz3NjGUahBMryMr68znXvTfVPRGWtiJo3My11PvyFemcRg5grmSDE6PsZdnncZYcjURjpkeejemL34",
  "key13": "2JMXR8W1rcsV9zWvhvjkKhhBExPYhxqM6BQXfJbDnyrCpkNy3tKLKU3BKD5SEJpMsoheuNj5ts2cVxfTbY1mq3ux",
  "key14": "31vkyABEeP8gij6z9ffK4PLuwoqyk4og6bh1w6JKDyCGJQ1cQpBbcMEVNLBmwGNktGjWsHCVDdzWa8CXKThcbDKp",
  "key15": "afo34MAihm1PPJqxDXsk9oVXasAgWGG1Ad9Vz3TL7wbn1Y79RpMkACVnxFsk4czfSoSminu3AeG6LpsEBkG835g",
  "key16": "4HVHEPX8sxJ5JaZED8L6TrjmNcFZqEC1fiKfi4YgyrRvtTkK82rXFx9z6RUnnChiifPZ4vcknk4Eet59dwLTTqP8",
  "key17": "2S8WVuLfZwX6z8iNad9Qru4SyppsZQEK4NEGmZnJkmz9SxMUssYDbFuTxf2AawxVP86mLCzgK6yNg4XSykd7EEnw",
  "key18": "4nXJCpCs4dSXboHxe9gEtA9Dups6CNDd1PXt1DYwxVZ8tjk7tCq3P81BHQRxQtEQc1eHGNr87RR6bPitzEHg4GPa",
  "key19": "26FhJj2XGAm2dAdvSWEnd8aY3Yy6nSLK3zw1iGYH68ibriY3AennKV6wugEHfXAENjok8XFdfiC3Gxf1Le8CdFhP",
  "key20": "2d9dNrph7o3cJ3f72sdv4j2XkXsVrzyVce6tRbBNytTcJmvjzQzJxxkRqnQAkf77qBTpHW8fzksLWqQobbkWYBX8",
  "key21": "2W7bw8qW8dyRoUMqjHPRu1e4uEkm3kbfHTvPbqcXBaQYeEBfoEg3y43iSqAVnhrXU4ZM4gD8ePu8ZRXhsqYSCv7R",
  "key22": "ZYqRDkP44u7TEhZwpkQ895RLHWBs8HETDQS5rX54MuDLeKfDe791jHqnte86eC3rEebLK5cvb1K3gThVYPC3D4q",
  "key23": "45iUck1qp6T43qiG1U5CawiT65KR7iN8yL3mMntHjiHMd5Cu9PcF4a84tyWdmrEzN31okRpmmx1Z4ramrXWuFmAh",
  "key24": "3N2dXS36uwgLaPH7tpjqxkNvrqa6MQy7LMJbGM4sPXX7mJZTskpsiePid3knhdTEoTR8W4hZyDtA5ZMpmugfy55g",
  "key25": "3nAyo2E8xPUBakqWRVPHLYfqU2wvDviYFU85dZowL5sWmnNZKsTnAVAmXaQxej3QbR14k1UqE6zUvBwWDYzgTTjU",
  "key26": "2yEFVomqpTyiHTnjVrKDHFGkdAGXniANs16jMZn9xC48k5tnMXjfDJjgzT7vmybiEhv42rvUsvYFgpm6FRWM6N2y",
  "key27": "5nmcwJJDgjRPAek4dmkggqa8bxq8kA4igKZy64htWSf6rsAZK56evUka62AR8swkZ688wvT2JJZAzd9jYu68eiCh",
  "key28": "31u6uqR5ev9HWpRE6vCWLb141Ai2TEFnHQvDFiWSWmtDKgs7XYCzjkGJanQ19XYzfta1L4yw4YJBQ3HtF4X6YtQu",
  "key29": "2cM6bVkMnwjqKUnMRTrRoy5XKdwhrxUXpVGcfj9mbjJ1wRdwjscnh8x67TdwzVmCvtwUFueYoyL9YdCozZMuEQgT",
  "key30": "3BRac3KXqY7MiwucLoUUx9zGtpFcwCLo6njfZdpnN95o6uWJkn7cmVLDnn4j58bSf49Y7dr2ftHdREAEVfcJ5dDs",
  "key31": "53BHTqC8qU1Ti86FtGJGZvbdL1GE7UvQLts4rrDoz2S2dyPDXuENiBcHJqpiN7SgpYLFUasUKdKZoJYj8LgUmBre",
  "key32": "4CVPBhF9ZQW6tMuSvoMN97cXhbSiepdoNu8t6vG7yLaRixzoW894vD6fHEAuqCJ5yi1GbPsVBR5SpV62KzjEEEqE",
  "key33": "5cXetg9keZUJoDBqagAaJ3qUtABUqGLSQcFpDtauLAHSHbhyyXYork5n3PbfYLsTGpkk115CoeESd7RSWPJMHNGF",
  "key34": "4phRLBWoXVg4VKafAChFAaG8BPbu93NXGvLoKkzWmzSbYyUJTazaYzHnWXgS5MVvwn2ra2aEFUSkWozcUSmWMVqX",
  "key35": "24qpW4pD8AWFWEVe9DNssosuT7KFovfFd1HLb9mMwmT39fd7ZFfpX2Ydg5UnF3PRzG1sRQkzZ3goLC9cfWaFVetR",
  "key36": "2gsNQqejUDBRYeHsRvjJt9nuN8Ty1zE6KN6cnuPLfrhohekjSovvwGAyPVv2tWkFu9b9NZJWTPV9PfK5Qj4sM5pH",
  "key37": "3ZYy5usnWYJvGwTZaLHdwYtQEaXqUdTg7yCTgxjzSPtGVHZPvVDQN5zswLPRymVbn2nkFkxga6akKrRyGWvNR5Cd",
  "key38": "27P4ubcoDVkbGTiPGkvsAKYDj7AqVmm4KamzghGQCAjo9WBUEVH9WNPTaT93YY7rtNJ8XUQwDy5GNQFr2dtUVjar",
  "key39": "5RPLSGuD5eHjAKe5mxYz3eA48HsZjoexHAgXvUwWhvvM4UAHs28cVnfm72JdTqsYm1XWzBvP2aZe1k335McizsoJ"
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
