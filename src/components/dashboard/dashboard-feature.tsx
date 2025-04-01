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
    "29ZjycTifkb5b73w7qMU61udg2CzRnupGhjz3nz2cbE5jpzmCD2JcciXupNJaYPszJjdidskrNh4z48feUrMmZDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLMrKR3f9jL3mYySnx1uSL4d7idvoDyYbYokjZ3xKPJvkwonBiPHrBavKnchuFUvLavvswSW3yhvPYrXEd5HRZE",
  "key1": "2T78snWQDtjso9Tt6bkzPxALhGpN1V3WbRdDmLXbtECnX9LLPteFnwKUjdtLPEqR7cBeqUBJ4tgF4LaJGymCeXiJ",
  "key2": "2ZpaUs7bmszHR4oxqqrmQB5by9GRsEmoWd7qYvBzYP9orvEB2x84TZK8RAqmUPYy25uTBosYqnn1RvQKj7UwR3i7",
  "key3": "5z5K9zUnN2GS1m84tKoTVA2fNHDNRavtgJ1UPEUX5HGzx2gWS58m9HVqQdUTJqsXoEdZddPdfJ3jH1qtDCT4wJvL",
  "key4": "5am6g8ExpaNju6J4hvyvmj3tCsv9cTNVh29WtjYQCjW3VrdPEQyh4ExGujsckr1C61TyDimXzEyYCptr2GGhiKKg",
  "key5": "4A1eXha7cDJVZPXR6P6M2x95Wdvbyq57ngx5rnA5TJQpeUMCZRizi93EgDH3rBjchHg3gRnXyPYy7K2TToFbQCWV",
  "key6": "329E7iGb2Fa6bDYVKaCQXgToF1m66ZV6syGXfRpkf2qp4Fq2c1xCsqtGEmfET8SVoS9NwcAu2BaUwNbrS8kRUpHx",
  "key7": "2r36eQ6jcQFqsUpfgRu43s1Sf4Rj5b8A3sGbikYT3aTNMEvF81izuXpUUEmnddfK5bNQkXtcTUSpij7fNZoPrU7H",
  "key8": "jk5Nak3fURQV2LoHsdTXbDPn7KKzUDSo22zGjRZbNgwbi1hFYLKSywFQrXpYL9tP1YTm74kMzDrqPw3oVC9udcX",
  "key9": "5mPKw55Z3Yhu9fK13DfnXBWNX8qTmed2jawFmwc5YoFHvwA554uGuAKKeLPZeZ5wx8APXA74irXpuf127A5zs5Xw",
  "key10": "3Z4Yj2ncbvUpLiDnZZ71LDKJapPDisXm6ijXCeWWU154aFVsVENjkCu1mEgZzyxwSMe7JKrbihz5twFzLgUxdmKg",
  "key11": "4vjbjXYC2wBJW5DRLN9TXgx2oXQ5zD9RLpSi9qh1TmSDoFHkT3n4dCePAVHf1k1BkMAuri2GiLMXgRybe1d5wytm",
  "key12": "3sX9rqSayiYqV4wgAHouAXyz154v9YN3wuWM9dfQcPGnpFkU3b6qaP71FVZ11iPguE6W67RHeB6nmsoNMSCgAyqd",
  "key13": "5KcrXYQTXcS6PkKVwGUBt993fBaLkhKXg9XKws8ifx7cEqRpyPNS6vxaLAHQLFqYpe5QkcEc6Z258aLmMopA8sZ2",
  "key14": "2ZggSigX7tQK3P9UVrwgzKFxPd6HcNRAgyx2E7n4QbcHuNfUJQfTuuacGkQMFaoh1zoKrjoBZ9DcuvFHeGG4DqZz",
  "key15": "AryQ2groFDGpQ1CGP1UkcyCVzNp3YzBsB4LVoEePhBRXZwAwN6ie2w8zroGnoe8EunMGrCHKcK3Q4f5iaZp6xyw",
  "key16": "5W13tJof1wvNbRjss8rBUQxHrBg7x64f66LxDFKwFAYdsinPe2Gmi5ZjgQZoFifW42LTHzGwfET278bLk6WnZH2r",
  "key17": "4X2GTKAkZMVDcBzoEkiTCbbh6BwhBpMSxAvNhCPYwUR7SCqjzN2F7VkHhd9ew79JgDuqWpB9bKVn4BK21djhxykW",
  "key18": "4JwhzUKEy8fovdHB5vDChchqwiKnjJ2VcgTkbZBtVoUtF2wYMzRYe7QqcYQ9q5MfJoSexERZ31ybov14E7s3xVKH",
  "key19": "3YCbcknt9Bo3m7voY7B3GuDzosc55Rbs7G7D2y4RDMshEq81GEmAK2ep2FvUYAyrPq6dAhJTtvwtrzivfj3P1qNr",
  "key20": "2gZ1Gd4R5NmVFsqcred5qJxAYJy6W6aYqcFhB8DM3vcJfCVQUG6CKmBVVhUyCJTW4Wum6iRD7g5imMD3kj3CZpPu",
  "key21": "2X1kw6aekJUFGpndJPGJUEvFEbLFfh9CZ6j5fxdNMpHe8Ehz9ik4MDbqR2UBkE7oQCfb1uzAg9o8F9AYLq4xRp6y",
  "key22": "HnEP7TUaqHJauNgTY1F5yta4PXLHveku24zjqDUAf2m5BM3JApaVjMEo1BPJQL37cnfYDcpjgRjeU73uLnF5hjm",
  "key23": "4uj9KgdVZfZFjFWqgotmj257HDBgiV29mudxUpipW7iznun3VPTSeNzdiYdo37ZfmPYwmCNpfEs8pqZbhxnCEQC1",
  "key24": "48aUb591CR7wprWL3HacbFi9cv5Bae6757rLcthvti618BJJpfo3E3HoXhp28HxHa2XKP6qPHnnm39iv2rqdsJoM",
  "key25": "5ZGrp9xkcRuLBPnfDy2jcjpbBhnfYRqS22S1eTxot2Cz8gCg5iXJiLpQpFGQtEzSNkLyALS56jnDKtAJLxdfiDPQ",
  "key26": "gUyxMj2U8su11aXB9c2FX2moqAREoB9Nwgt7Fwkaia2jbyQqyT7pVxHfJU6YpXvMoEm2UzqXLMNcxzLThbvR1Zc",
  "key27": "2N9BhdXQaDMcHLd1zwwECmsDF4VVFrGdS8W4XstzZL8WJJaBA4FpQEAXRmonit9zkmRw6k8GCKsyP8NjWEzvrT5L",
  "key28": "5TPppyPJV5ickTNvyGgMjMUmFzggTfNsCFsH3SGGyNHYRaQHopMLToh8PehftMRP9ap2nEDmewHHkHM3q7zvpH3m",
  "key29": "3mW5p4CsTmnrgh58X47NMVPo9y4Q2AqQTk9EnqZZC1MvNLbZtHzxXatKSB8sLsms8kiSTGAAryyazQ926gm5Wwhb",
  "key30": "1rWgbcj9C1qq8ck2tq8oGdX1R2z24fmbKci5uXsqWVxzbD3RYJhYh3pmtiT12VXgFY2ekC7McYgS2vti7HReBd7",
  "key31": "5xZM1nnB7uUV4EodyfEUpBd3xbETxWrMwgcAERM55vtHpNVvNuWHdcR464ZeSYgws2wtRKw6GzxyMBMeSe2FQV2t",
  "key32": "65qv3jG3AALrSAnSw16eCuxEzakm5oaDpmK6dUouSvJRWBUBzNCPXNfwxP4B1zTCdK4w8sqCuxp4tNYchqo1eff1",
  "key33": "4QLPrGSrCsSijY25WpVM4AMFjmLNq4NZxxNdibbxLsshYcWB5MUpfMG43NLszY39iigqqJWDSJZdXD9qicbKBWBH"
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
