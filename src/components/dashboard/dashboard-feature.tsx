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
    "33z8VZ6CcLssaZZLAk5Chp3HzrW5KGRh2iUiamhV4fPHM495XpP1kRH2PMB64PFcqRRErw1ZnXiZzwhWJieEyRe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSfusLpACw8TVLzkHunC9xLKb4mkvoWXz9Cedc91b5SifucC81TpUWQPLNKknBEnRxMNbRTY3uxBjHzY1kT3Zh2",
  "key1": "2mcDU4DKUB8GcM9BVXnmtY2MQXNDQpYp9mfEAEirSSWcCPNUnKon47USNSd8nzBKUkQZzXf3MwHKHZH9d9wzQMiS",
  "key2": "5Z9bH17tWc3dtKgKTXmU1qFJ9kL2jesCn4U3732tRtqU8PMrAtrYnpXitbRjYHrxSzEBy7DHuKUFeybokShydoeN",
  "key3": "4Mkxjy5mWMk5PwC8E8KNHNdJ3fN4wucN6f7HfcWuirE3VRx7N6KZCaPB8NDR2y1nNqtBbA2sNd37DCPHfegNiHUE",
  "key4": "4GgHLSZ8tmjTG4tqK4xjvB5ZeoCKQsEz66QbLTc5nf7GatFDspMAvrp4JHhiFQ4hHZhncXDERKTGg4Xib9ytJChE",
  "key5": "5pbse9yJJZ8NPBCUmTfZbDG3fZrYbgxWBsw8PEgFjJ4vKHgZj7u5eBbhsc1P8Pd6c2RJmmCeMNvweHYsBCsfcwdm",
  "key6": "3HD4kZjgcARwvDQhwrcRxKjQFHdkDzCVCbjUMS42aJCeUKpKZ6EqeZg2xPvo3XVoB8Ld7GGd4mFeSbCAFQNGikU",
  "key7": "4aTwcAyN33L1Zje6tRBqkSBQTpFwQdeTbpvWTho6cJZXShVMSw7VXMwUtW7Ngzseb8D3Fs2rnfKxSBoddDXE2TVk",
  "key8": "3fyT57Y1thD4Ur7tefNJVo8GQD47AzHBC7M6FDZs7AEFP397yGqbgRtWyQCVeQRcyLiC7xqHJjdSzviUfWxpofec",
  "key9": "2u2gckYFxp2M9b6Lsnidv2dwkK2ayDfaHzFJ9yi424yZK2P9gXLQGWvgn2oVythXijAyEwrZzWBEnWdv1hKxNVyr",
  "key10": "4zQVARgh3Y1Xw3yZEw95eEgBGXVXEdnkg6H4A1G4LHyTx7kd6GaoohC7FMJfJVSaKo59z4XWWuNFLK7gn5VXGbCb",
  "key11": "5LBLvyfcWkHUgd2W4nH3HGnbqFiV61SLFFfi5RePJsJNAC3E8ZGWyDJxCjURLW73VtdVqiADuzzFwtHNzKsZpWpr",
  "key12": "34mmw9mi8YxoLcZDjgvbn2D9mWqh5QKxPwshrqixL4Ghc4CWFhXijm2aepv56Rj61nNmqfqWuzVhnFNz9trFFZRu",
  "key13": "2vTMN8GMXuxTJsgSk24uKNE1TfkQsu7rMn7YBeTew6fydo8dc5ssYAU3xbNnCh2DBRVMKUhvqu79mXX6cyqHnzqG",
  "key14": "5P54qpbKSm1ojHAVyWmBrQ8YsordcQtaHy1htprjvtqqG3FoKkaQixZePRFMMfRrsRzt9dmqajQmW7Wi5oY9dnU9",
  "key15": "4dWZFGaS9CyAyygTVt8RqDpcUPeo7QMnnxuxFPRoZ1LoiUqoprNfRAbH175GL9qJVeLwBGJ9re8cUJwdmmtRnSo7",
  "key16": "2RMmxKpYxNh8583FjAhvKAu1ioLZgfXTcbrfp14Lfwry7ybteuxuFBYA8Z1G2YfkGoDZha7rhUwZwJVYMW5cbEDy",
  "key17": "3s5x99NkMEdxZjtSKA8NFXnZ9QL9bBUNz3RB75aUHrjshN6YPtiAu1u57EuPQJMLJTjsre64p2RZnaUQb8CvR6ie",
  "key18": "5kYw6YdsmVD8xeAuccn5GMT5nGgJPX2AzrqckAfpcbi74k99tpBTcQxhroSHHg8oJjaNFNcE5oTjQYYBsP8MruY5",
  "key19": "5ZN3XyuzpYpgqAKmYFku51EtuajDT3q5a3mu56LNDoNncU99xUAsx93i2mPJNSTYw66HbqM38EQtVBXttoa1aGR5",
  "key20": "2Lrhm8Lu9rKFpWtVak75m8QMbLr2pATtn9EChF6CoKj2SegUrEHybWoaNiNHMGMbnxVnWVxj3Hmg3LYK7JE5JyqS",
  "key21": "4btUKiPfnogbYmHEDSg2BS17AejgRb9rCj1NQqTKsfKrD8HSVACXhtLMjZ1vSehU679uYPXA5yuiTdLppC8AvNBx",
  "key22": "2i44MfdVDkjGCoNTCa4G5Gm4R1bWLDC8nUdoi5K5wFg5Wu9HRrKBt4ch1VuDYyyD8Lnvdss8QakuzRA1CDeHtw7n",
  "key23": "gk2A1Kd6nAxLnsS1MdJhX881QeS5F29W7FsbE3FAbEwEK4RndkQDrVuYXt7JcUQvUrWWA289PH22r2izYojXAhT",
  "key24": "5fo2JEiEjnAXwNVkuDtg3dypB6M3a59zQy5mpovETugHyxeutd54rjRVq3ikA747Zav7W3iCVXbYfHbD8ZHyR8hQ",
  "key25": "z7SFPUevgasS8nvW2wo4QT7WQvPtuiJQQEYUEGbZsKfsDnpapbJ6hG4LjzKzR7M9jnh5HusqAwvuGyvGJhDX55g",
  "key26": "2z7F1nCtta5Dc5tV6vrAaXNHGzaU84Df7LdUvAnryFd26hBEp5JQoPk7mcByGtDxCMurxHAy7RShHky9Mb4ZiFNa",
  "key27": "2BTBm5LRNH5NpCFn5fsYLWhfzabzhCCsZsrQSrdsQXbxb9uyhsRxJBbTga3UpifnznhADtKBKP7RdXmY2weT9Rtr",
  "key28": "3YJoxffWh6yswcLDmGVyPDt9ekXXee5Sw5iY1aAdRg9TPqoBwBYwjkbxo3zJWzVCTj93QBNmxfbPDghTghYQRRr1",
  "key29": "4UfXQEwoUx93PrDTDJHNpAsEEo2t8vcBMAeEGN7xrshAsxAaCr32pGrSffo3yygdrfuCjhGHhK65QKwX6GJRm6jr",
  "key30": "5iB1wTz8tZwXoiRpb3kWVMAs3ed2FuKTngjVFNN2MB6VCLTkSXD27aeEzcxWqBPLFNUeN6DbUYcb1EzQMR5T5gwW",
  "key31": "3nb5VVEHXb42F4dSukc2guM7pKLe81DaUifVmvVdxjuCQMNjatL7FZYpAnr4PKLwwB6EM1YdGwZyFThN4H6vkKYN"
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
