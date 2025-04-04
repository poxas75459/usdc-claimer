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
    "2urwSBdJ8VRaDU78jxC5RDh6jRoGMVkqxzWCHwAZ3Aa2a8dfKm5CU144CNboN3LtoRGAViGF6khwmpWRed2jEpbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c1xZBwR33ohwqmojsQrfStExA8a5Qng83od5hbhuDwB6jQXBy5fqxGnwJ8KV48CQdvUB5eEXyMhRE1yKgm395vT",
  "key1": "3FwvA9xYeDqCCn2tBxg6FuPQdNBQ33GbxAwa9q32AVLQ8xA9rpdwipxRDYLvRsupNwV1dVnudyqNU3pxMmmenK9t",
  "key2": "52uwndmRjJFmeMA2TZMFDDberi1Jz3vTe6NVvikzUaHkXnju84n3x9cPH8XLH4pMaZCgFJ3PYGfvak4oLARygLnP",
  "key3": "245FbM6673upSLGFNubEntgkoUENRvi8aqtWpK4E1M2UVNfNbKWiy6YFzXQF3mNENBPevQxuFdKB1Jmtc2ta9EYB",
  "key4": "pYKMgybatJyDCoLo22wgxCUhk535eaD78RLmf8v526u1zpRQgGn65ZdXTF2BZDGQMhuu3257NQXL5w1vNrzyXkz",
  "key5": "LRAc2348Q5JRWGwRRRywe7Wg2uj9yTnpbWFgxhmvDcd5h8qsinWerFVN5hMF1phGb81DAELt2Q27zFhaG8hVy4V",
  "key6": "5LQemnGNaTpvHamEqHvbraKW8VN64a6nTNUU16sY35VMeudCULY1eGB3vQtKt3wLa9c1N5mNWajXEaWTYQQaXQss",
  "key7": "63RXnquy8FXewQ4vMiJVhdSfUPeSgtk5f8BSC97tWcpZD3CNcVCih6U3mjPGHKapBZkuD7CY9DjLTgwHzfQscMhd",
  "key8": "4MCtSzQADvHHKrgZPYQp4yVVYA3x9fKFbGp2vT82YyzDj6z8nkLQTPbvmEdqD3fCdN7AHp3MhweUAgmVPN4UPfFC",
  "key9": "3eAUqZP3CPppCTcqoLwPjeTzG7Z4vMRxFuqr9LAGnLoChJpXULLxCi2GEL6mUKsrP22xUoSm7wnK4nbDarTYRdfj",
  "key10": "3Ta1esqzNGH33SZhj8RoSHMoWopsAvCMUgdfiePyHpMcECmwpH5gZ8RjAAoQVBwDaxeZaUHZz7dfp6zDd5HQzFvb",
  "key11": "5FJXnfCHBWys79N2LjvYshWcgmPmKZnZksjPxLhw94zKEXUthvxx1kipfz87rZ6wk8ux3qEZqhyadXKqef9arJ6P",
  "key12": "4RCbst5FgXQF1J6YN8reqKgLFca4BHquXcHY67snGt82iaLJf1E115xFEmxek6eTnNSBp4tJcFtAXEeWkjLhSJEn",
  "key13": "4n7b7ga94RJth2NzqTjt2k1a9dYtCcgHjdGyfsAvAde4Fw6wqSmPNzYUMrCSWjEVoQiNt6u656EnVGTeaqUz5z6M",
  "key14": "5PH1ntzzgYBzyFQGZ8Qenbyh6Ha4AAFV52qasMBEbbYHZvSPsTGPi8FEXmDj43C8b1sFXYNnsvtQZiGcJysf7syx",
  "key15": "3MZaf8ybhWwuRA7hUYN4j8eZ6uFRksHqdrGUevVWEx5aWQDonFjFcrthRyx5KFKPoBZRpidP4eYNXQ7L2rRJvDPB",
  "key16": "4DWDdzMj1AtzBrV6FPL4kSCxDnbNzWXRWoBnGMPUfK2E7RoXE7WK4WEJ6dZHayxT4nQGCVp9rmENvh7x2PTjC7Dx",
  "key17": "28b5wGL176Tnt9M6USeVKGwKQyovMWRwFWZuSMUg5UT9zoBTqXQM9D45TX9EwCBNShi6LdKHBmH7PJyhoaTQqHTh",
  "key18": "4CwPgV3neGY49PqHszfjXRzDzDFAMxpQ3mNh3iHY1SSc7Q9CuWtWXaJZx9aW5nnYUAJCQ6WoSaAbJkZsE1kBQinP",
  "key19": "UVxGNsS8ESKpCBJqcAXf587p2zJsP7je1BQc3Yf7ta7uN4hPV5hcmAypyRWKFs2itLpBi6122gt9Z7ErfHgz1GH",
  "key20": "4tPaU9v4iPvRZXSkoapJdGYtnLXaycDsBqFCCRZCVnojMAZGXQ5XpiY2TEYvw3bsmhcisydijsKdBQscNafgQDVG",
  "key21": "4Gt4wqHYiV7pbbBz4F87TKVfngiuUm7V52UT6LNezFNBYtQtMu3BPyCGYrEtyB3zckaeZMKmA3SmrnQkdFYd4X2E",
  "key22": "4AVo3VUzsaizHgFojC8ZcRmjHEGhsupTViLbN2hGstFrxzg9fdhPvYbw64yvANeq7LND73wfoN9VVcJXM46KqbKH",
  "key23": "5e6XqYzFfVduM2Nftap2JLEtXLeuca1hiC3kKhd5xhYSQP6UrGXsWaA2enYsiqtnaCuDJhRkxpo8jFJsBznYcVSM",
  "key24": "PeeCodn39sBoHgFddUiyyVSi2WrhQBtSGefXHCGekjJ1641R7JLnMVhSQHmwY6qhLRuCX72EpoMiKZ7PDfW6hTg",
  "key25": "Ehv75Zfg1VPAXmfRe7HJeUWWuB85D762x3JwRUgKUbZHYEG99FRsMCoU4SLcefUBakChCyphkXzmVNufrqvWopb",
  "key26": "5PkQQLfFRtf4AJjbXtcKoDoXZuC1F4sG6yhKv4shqfNJz4fGfcgvAQwxfFHwFKTHDxpVb5Y5tFUTNo6NRxK5zfmP",
  "key27": "VRoJDPAYCg9s66YZn47vKRJkM4rh7X5tbsz34hnsb8XsEj4z8X1vjcB5byZLFk2ZL6RS7j1mroBvsDjf7qCHZu8",
  "key28": "4PKqkVW5nbSQvqHdoXo1Uny3iJyZtcRiqj8rCKBUCWoBnTw3FVRHX4mTk2V4BU7mpJicktYx7fK5rme3z4yNhvhW",
  "key29": "52JUxVewSTnVQw98xXoHWcxYHd6mbaLp1ETh5kYaZpH2o4Q7sKnYuXoyww1nVMJDzuGzEL9sWB2uX7f7Q2GkddEf",
  "key30": "2trNcn8474u2opq4GDZkAMKr3RyA3sckcP6M3a1gJh7PEHv2hojkrmpnkMaUDv6hRdFBqA8Rgx25EuPz1jrb7iNx",
  "key31": "5VEVba5XthpjjFgcmtc65QwN1F2moePm1kTtKW43MEdnLgvnpRko6aHA6pcgiBXKqimFwnem3P6gp17LA11XSLWo",
  "key32": "f4y3ckW5PtZkEGk5tJ7DtFebLyDCiyoSAvWrtaBHWPDBgXw5XFYrpNf2N23cLwmGUDkqB3pT4XW6Z1UKDLCbTQq",
  "key33": "4Tp5AWHR5NS6BsXpvGGiifSWiZVej3oAVsDde76jjD8iqhPhdLmqpGmtgToP5yC93rozkG3HfjuKFAH3GenwPLQ8",
  "key34": "3MDZjFSkqmWUfDkEECw7ZDLdd1zutvuNdQvTLRH9neFHXoeWLbEbPCLj21xcJCnSjMYp5XJHHyDig7ax27PtCXr9",
  "key35": "5XjKjbBch4KzY5hYFMNsg7P9osDjW5jVATQSWwVZcZUtSZqstxCvNi1Midk4Eh5P4Bfs5dEAqD3BXrgSXdiXnsSV",
  "key36": "4xnvt3h6RUJv22VatbpQ78qXhnXxLSg3FW6zvrMdPJg68FMo45B4CXtJ22jdSXDBt84jjXjpKxA2YKNWJM7syHTh",
  "key37": "eYYaz3Cf6aQGkLj2CXbAWaPSEEraZZ9KFKhoCVpe7BGXYRsBi9n6VRrfuyq8EnvUoTcvpdYDYmFYzGbr1FMGknY",
  "key38": "3QFX2vMPJ3AWuvTLNRJByNqYrDmqNLwz8Bkt3PrnmgrB4QpGewywBByfzgVR2EAoqjMER2ACMAT36exu4czW32TL",
  "key39": "4pGZbwVqFURoQWEc4UUCeM3Bg2SLcvs45vnUBfomRDQ71g9APTCp7gZch9r6vtBrtq5cAvPbxsQTG5BtrbH3DA9P",
  "key40": "2f4p9wzmZLo2e1wPapq8L5cTbf28FeeCX4UWWUTdkmFupJq3Qxw6uuHeWeVWpibo6ZubVLnSkMq1tW39JBW7P5Jd",
  "key41": "3o8wQMy755FzUr12Gqo4fkR34ziyGQLtbUgeqsv411as4RPCkcZrxxp8k5iab9DJgyxG8ggAHoZfaJspXCXSQohJ",
  "key42": "6Wki8VZ8sD4J93zgEkYEaG7s5N8zcMYhF7np1kH8Xa9Ds95e8hrcVuhC57B34ajadtpdD9ZgWd1RRyLPR6BVRg1",
  "key43": "8L64i41H7a79S4eo4GdpwgdMjxtdqEseSbKoPfNF4rN7yUQJYJ48LyzAjcoptAkLh2BpgsvLHNF2um4qb1YSa9W",
  "key44": "u4awY79wcsqrsf7YaLEshMHgjHWHF3eVEQ4182KByWCcw9KUFza1Ha3mBdrFr11gCS9R9ma4aespGfU4Ctz5bjE",
  "key45": "3N8kWsUQQt1W4q6HnGCCGuY29RX27rvfzhh1itAPuBZNYuj1pK3SwoHpedZmmngRpn2wrzawxJPyqeqQEcPzotgy",
  "key46": "V3TZuWjfXzWf3DqSU8jXNxXJUHFfbokMeDQ25pmbZoLjYHAcHGw5hZ3ZJUQVE1qm33jL9B7CuNjS1DxQWEdzQy1"
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
