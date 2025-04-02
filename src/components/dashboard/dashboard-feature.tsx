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
    "4WKKe44oscQBqoPx1G6NHcVnRzGZkmv5stgafvrDoGQpuz5j7PrBa5ea9RSZEHggT8YoYZJCpY88G84Eekia9bV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PftwETVKvxqa5oQ88sqGyGwK6LMo9ej4Ao3aYS9P7YjbXBYu9AxBsRw4xYXB55PSos6oML4giGM4eCqdU6i6u5G",
  "key1": "22r6i3CGYpeHRabRY5ZtLNjfH5EdKuqtL9WzRMoT6guXXygPzfR1kyJuqMScwc8v1Z3CpAesNYwLHPpNRcZmBkuF",
  "key2": "31dDKgNFzh25Vwkf23WiFwsKjjqvSb4tion41YCMuuwr9UuCEmy1tLyzcirYvhrifqFMXGpS9Q8mt7swkFPTbsZ5",
  "key3": "5pFByM4A94qaB6i4R7MphQ2zpBeHtDXjQKQwHGFNUMTzWnXWKw834FzwihWh6KKTKz2RTRWfxwdnHfnWAJc4GAec",
  "key4": "28A6ALLENSaAudNVbCm5yQtKd6mscjtWECJfshb1S3cBxHZGejNCfz3j5miGDd1EioMmBrwcdz9tJ4VjHnhU2Tgu",
  "key5": "3nSg77tHsQvC3aju5kYxUpFovUxZBqNdPZW9ztfTH6DdUmiVtVsm2y7DkG8tYh61RERN6yYXgLSNCcihFAWtgp1u",
  "key6": "3wat3FoLCDpcgH11XRfaZnSzetHvmr6DNegAG5C8tteVDTd9Cgv3omSMw9fSFoVtW4SZ6F6Lwo8X52aBMtZqUT4D",
  "key7": "3kJq6DUb7fFyya2J4dUeB7rxoCaFvqAZ8jVmqjhh9ehTmPzDBRetC2ytdRydKxYRiKahtuvJJTiDUUnxBc4AY9jN",
  "key8": "2vbvd55rKqtaY22M3B1gErQ76bFZ8ywA54WB9GSoAPLwVSDnCQMjbkfHY6q4WJDBJzGq7sVtJtWo4Cps4SYofuFZ",
  "key9": "z6mygFc427zNaH3E3gKnNJJwjSJ62kozdexNcDF6yjGRymzkenzfa9Xqi6nVh9Nx8vJWy1iTZ8i11vzxpy65RGg",
  "key10": "4xZ2i4qQuq5ahJKwVuV2LXCW8sjapaQnvGb4js17ivt5Pe3DEHmTjmYTDGvcHbcSftBvZQrnNZBgBCWZVHchApWn",
  "key11": "5VtjBNoMdtkB83Ji1AkN6XraQ2RUNdLEQpT3s3HSDb1WZrky91W9QFjP1LsU1uc7mYqC6QF12UR611U3jxZJmY43",
  "key12": "3LofN4DDgKJagKHAd1fE6dr8cxTAgNYVnXGuB8XCc8iEP4AYf6k17w4gEoaZBe5fUyHvb5r9vdWdtAEbcRg9Ye8E",
  "key13": "gujQ7sFgqRsKqNoN1VxqRA59wNwa2TgVXcRSFVgE3hYUycAZpEBZFAEsDYBxRv5rTc3UjYWcsCQuxDTgps8nTR4",
  "key14": "1gAu6TW28FejXCJ773oVhw4ijYKqM9t3DQTBG86pRS9KS6Xxj3pcZ6rePDthsDVCRyqR9fXtwCs1gPuaXdx9HWJ",
  "key15": "3BK7KAvo1joT5KUke4hdpHuZf9n7BMqFscHAjWVraZjkmkMnfUjqNQQe7n37gBnUzt3wLcMsq4BYQMp4ACo35gcP",
  "key16": "3SF383ejwNSD3gFCv2kJDi7NSaPjhxTqp8XmrKv8vUDgpHXvZQr9jExnxFG8MpMHQz1Ns7onvTeqT2k9S1nyi9Gr",
  "key17": "41YMWt2BoxXLA5BaidazaFNmLBr2S1MB54tRiRPHhh68RMhMHCrnt5yic71QBEZK9QdgbYLmiSiCQEacwvmQRfE1",
  "key18": "5QU2nPmDhn8PhfRkANRYd9xebamxD3ja8EHQkbcZBXXMevauQzWqwF8gAqo5jM9f263uEyTuZ5e99Npqg21AkUTy",
  "key19": "22pNDGQzmVsJeokebB7TKc3hdc5KjbbYhxDvquvWTiHeFWtrP7EipbjW2FqgrM4o7w9DEa6JJynHh7k1th3ERgrn",
  "key20": "43pMkDw7zbJaN5oZDmaRsuk7UM1Dz6qMywzgJY5KJziWGdbCHVqehXMRihm9t4PU9zGCPu6ywttWJ38WC9kf3Tsq",
  "key21": "5HGRRWJSXXWMZZJRxyyzqhQhbNKSQwEvPuo1iQ5QGcVwy1Q71oGA8xYZtThUcL2igK6Csdi725P4WSyzg2k8pSj8",
  "key22": "3kQGW9j4yhsBDGpgVvnABBon61tYy8a3kzgibw4jR8RZL8RpfiQ2NxtZhmz7BsyA7teNyiayeofYgqv5PQYd9P6v",
  "key23": "4Jqb9ZTsUo1UpfedsocTJ3zFGhnzVCAaU2DBMUN7FtDDGpAK8wHHpW7oXhe97DNhW2FEoM9NLELyKuUuUvBxeNyS",
  "key24": "3NNitUTTG1398qs5oYnbNSkXkvGAgSeR29t4scuQ6tyCVBM4AyK2c36zB2urrJmBnfCQ23bi1P5sRwk7XXWLvMbX",
  "key25": "578sihUqtiKRw8gbLV6U28DX8qMQUJtvDw4GoLJHxn3qYLCeTJvnrD8FGGGB4cD8NE71rW82DZysG6JWVDtHWzxd",
  "key26": "itRBETTUPZoVKwrYazQ8U8dM69NUtdkTXH4SonS9sb3UckNn4jtpbvwBFaHFxAkZoErnAuH7T5aRCk5dVWdZFz7",
  "key27": "5o9vJu2wBxrSxuWYDqtyQ9WHJnZs9AVcT9MeRmZtPQQYxoanzespajMdwUbDuomzsBMFR2VfZ3muiaUAPiPSHz2X",
  "key28": "52yXSFm68fdWXsLxLcXpTesVC8QGGo9eJqduyJH8YYHdGMrX3jd5Wf1RFjhvB9ktTVUDSf9vWtqGMdYiGQLMBqUz",
  "key29": "4BazH8h7Pc5u4eVpztc8et15NRgB6C8XNdFAAKtFDUoLJyya27V1gqPzxhV9jJpZSDch8yWZFDK1m9a5QQytEShi",
  "key30": "Q61DiSwacwjduWf7bLHgESCFkPuHAbARxRjPU8MQt22e4XV95uTZnJzGpT6wTJ6vXt7NHeuZHmXsRZAaMK1jvDk",
  "key31": "4vGoY6zGUuCEjgCUzcVVGQ7tNqtjcgJSYXm1mWyuHVW7G7F4dDT9hasSDxov3SQPUucRuSDtSFv8Qghc5zP8ZqbE",
  "key32": "qrUfV4hUsnyodbd8tJkvo3XFgkRijFQDMi7JorXctQMKixMzMYjv7j8pvfrpYAxKkxNRC86b4vfR364zY7G8Nan",
  "key33": "5oCkR75dUbbjnCUkZitLYi6mZpWfUN58AmjmxBhEHcNz5gMANmm3wM4d4xvDePtKmmHvDx9RHdQaNdAGUd7U6iiU",
  "key34": "ZUR7BN2s6MZKyNcNNSGFHcy7XF9VdddfCfufHWiG84eVe7hcSCj3GokxK1H6xfgm1wkH9J8WXZtmcYUvgNQHjye",
  "key35": "LJuuM3W5fJMpXa76NCRhY7PKCKyTtnLNJi8nW8ijswethscxnPvrMF4PJspzcWMGRKwsQzd7QcnncbmQGsgTkJV",
  "key36": "23KYbpinErVxowwugaTCVWYMj7TLCMGoAyzE98Pb6rrZzwyURw9r7N9tTddKGRbsiEiQnEVtb4rgyybMswejRkiX",
  "key37": "5VqTv7DtnT9euaZGGwqkYQk2xjEyHgeHHwUwxGr8pEqGYDU1Gg7A31rETkuH7cxP79LviXfR9ipgfRuUEarRSrye",
  "key38": "2qMCEfybuALNDWvNhSSAwZWLqqF3oFejD1QvTfQdqoGDC1FAoaAPG7ixy5tJGfzMEfBwayFqFQR9RVHsewPKwZ2m",
  "key39": "tY32oXYZLVmCmLAFc1PD4j9qLynV7QxWnEirhNP9o2vAWs4eRVbcGj1P3HXm45kFmXi6pS1zigVE55Xiarob4v7",
  "key40": "5TiADArJ8cf2XW6UXQi9CwNAfGKKZttNmtpaSYWarYFbwXXjfNd6B8XCkfrNGQYg7c3sFUfw2XtHMYYUXHaT55dS"
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
