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
    "5omTxT28rcshAAC6zidontBHfEfpQ721cv94BTdeNetm2sBTAdwt6wYt6KK93YwE1JW2ZPKKqt5cThysnD2jbdoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CuyX7ivzzcUYsmsK4XmcZkbAZstDacM2VvqZqGZtvvJsJRwi7J47AoV2VmiZ1SGVadqDn36Zgy1E4m3N6V9z9ct",
  "key1": "W7uWn9afKY9jWj1e1u75cjN2o2bF7UVqjU1EeHo7BATxaMtw3F8NGZ6JdmkiFDEgyXwcKSVxYVvSzz9TSwa28tp",
  "key2": "6rKCmKNX9ETcmLJdQjEXsodvGan17U183zZra23Kx9PM9CGKtFHMGkkQ1mWH1GfBF27AvXoUWNwbg3aMDwScCs6",
  "key3": "29dxaAFrkPFTQvfA2zj8pW9N75Co4uKn6S7Q1JVdhuh6u6pUG5k8ZJ6BMp6EfENuBYnDsCycnWtB87BSe3ZqBPtq",
  "key4": "5pJbPbmgmJUBCRZEHSH8scfX1SvAnS1NMa1tbbvSs4qmmEv2QDw59Fkv5kMBmB6NHWBQfdhYqzp2Trg5WVj8tEnh",
  "key5": "535mimwZzcNZxto339YXa8mELNa92FrEZCPDXUwjLHKU7qJctvuDn5krCDxZAuo5zpmdnpq35XVBGxZcwGUFRu93",
  "key6": "4dghEP3VaWvSNa1CNK91HCxS53vwV8dyjgCzMpmVHVrqZiqt3XHnqz1xwsqMjxy6yHNeQpJNQjMwMMH1MApKKJ3Y",
  "key7": "3UQPsF9XaKYiKYrBgmRiWfv95YHRdNa3x1tk4r9BkgpyggKy6E2JYyCdoZwJaK1gfvreCH3TGerkBCWqe5dwYND9",
  "key8": "5xHgYV7xGg43fCpjQ5dEnWDFiFXSw4kUE7W1iSBGdDosxjZThXGq1oSPbmumWYuAv3djZZh8gnAZmR54guLBwmoM",
  "key9": "3PPzDXvAjcB98HsNRNiuWfgxn64m3PeizV2KZDcF6xvi85rB54a1Bh1DgLp1QkQJ7KrtK5bx8AYRUJxd8zfpHVTy",
  "key10": "4PshQ4rT175HP1BTAsCim1znaFvB9whycFcMUM7ehMDAuxZsUB6nM6QBMxAeXLdZ9UqiSHCJvhMUS18AnmfT7t5",
  "key11": "3kHZ68K7bqMBFko16KohmMBJr4pYpw76v2B9qDgkB8m5mMqUcNdvfFjsF2cKXN1XpRUEGdhM6B1PkFV3A2aktoKJ",
  "key12": "4x3M4sneKrHtyeSyfQDzdFePgARf7Mgt7FZrkFajGine3nExk3NntZLebWJYYfQaN3uasftyxnQwH4ZLUg8L4tiJ",
  "key13": "4EatRPMawXgBisjZRDB6hb9goQf2aZhqhdee1bqeaXQpSjiQR1yYjsqcANL8S89q3YruG6Z5mpZZjD2QCKA4tmtA",
  "key14": "4QrZXVC5ffSMAy4WwdgDofkcZKK4c7icnpEuNneemNzHkcykz7NYkA9HwXsEPaELXTkcG8Sp7rEDCVHgbEfPXtrW",
  "key15": "8VmNUVqLHomh4ohbRpcGDmpM1ey6bN3RQJGdsdboUMJzaFnDzMf14tWZgnGX8ZC6tfEnzs8drMJc1ypkgj5D16z",
  "key16": "2UjiCpgC8v7vv2RRjkMnor9hkJ3PTdrREhuJR2Ch5sXE25naWNN7MX3qn8qhbVXGFtC37HovGm2tP6LeXYw5nwNa",
  "key17": "396KwQ4LX82AeeYju3xew9wbb3aSpsDcA2FxRfrk9jGApeUvNqFdrLDeiR45S6SfAyRDUVrojHSRnWcrDEL2vB3i",
  "key18": "3tjqkkxwGMb2qnsKyvMUToTaCLb6NHr6QXnLGEE7n56iCncXqbE9TuPjLKM6XP3vh4QGVxoS9ew2zmSAoGAJdKGp",
  "key19": "67HdzMf2orQv9v9Bzpcp7AaS68zEa6Eo6Am7KUdpVbtk1WW8rcHfxL45hUVLdzmYnvKBLKHpc1rvuiXA7RWAiToa",
  "key20": "4KMQdzNSqfUWzjQzC528azBUhXRnfCyuVyFStKvUSZKzJ6FJRJzM7HkAnBEvSXBNKWrSgbw5sGrezaZ7EjuxoSxU",
  "key21": "e2AmDSbo4tcyyf4htJGftNL7eSNkEBC4muiARUKwQKm755hHwMrJKewQ8JKBMQ2gkDpvpQXt6HGRU3t7fKqssy1",
  "key22": "2naiefJVM7P2tUFDBf9YPZezVaKXHEhs6xpAWGDHsgnApKx5ARXAv8oaLbpwHYv4iccHhSk4v5yWtbVAd3mHZRqC",
  "key23": "3SXJy348Eftpc1Fc8DbnMYcKgGVGRnynjHujAm1sQcxRBRj8SHYPW1xsy19SvFvsHwUmsDQyusXh5CmGGzrVC8rc",
  "key24": "2uRRjAnLj9o9Yij98mBJjbeN8NDrep5pwrkqa4KjXUNgMfh74gMvw7kbgLiePvc65Z33XcNTaX3mbpTkJtLPr44M",
  "key25": "3gL9Govx6WCkSHgyMZkvfZL71nSQfQpYNbL96EcmJK1ARfUjwjQpW6Go1vWi9oMSkTUqnrJgVFw2FYqUvex127vX",
  "key26": "4QT7sX6JL1ZQ4L1Pog9XWppMkpWak8G8HdW2DGmodQbrHR1cje6bUjyhqPi2m6xNqaXk62gHd3bc9x1pZ4xngPrJ",
  "key27": "52HF3opPEVZV3PFUvEidURQCPbkYXXdAZp173Phby6Us3EfD5q5P1X9fSmMqsjBt9ZyFAkftn7dnULmXjixAgcFW",
  "key28": "54A78HMVRZrAYSQf3rx2XxnVT53p5VLP22QZSYYvzFXb79o8YmLqLHVYfeG6GqxLGXErvJXrseAQmQD3iPgqqiDw",
  "key29": "3PNGWa7UfCuZeDUvNbPh63hUg39LoGA9dtMgcHgGWQRi5gbxFTBKVdqCRU7poMspjuo6YZRAWFvdvRs9pseRXMo9",
  "key30": "5fCJyiMViPK2Jmx97oGednLKh66f9HNQYpFKAXJQoiS2LE5S9rF6pRtiaeXk6rXhiTDaNZphWhpUe445ykRBLRem",
  "key31": "3uhrbFRMLPciJzyEzaCLReMZZWg3VpxiYEkrnB5BQrdgdrxiUsr3Y4AqDqiFnRYnakmxBcSQo2KaM2pCjt2xYYhj",
  "key32": "3pDTDGvMwWbmwSJoxkrcEbScsRkCbZv14zJSrQMQRSqDfTNNALG8S7UL3jS4nVea8eco5pteb23oKhKoZzQknJGF",
  "key33": "2QCzjSaaqQabJLHRxcf9JGZsbw93BvQnkB1w9i1ST7fHvUxxUA6EWW2ptzCYELuMKWKp9ue38nyAEChBmWh382ef",
  "key34": "5FpZdCSSeRjLUuLhxLTotmXcf3j2Q8AVM6qHVbQ4qzhH7XyrZjMJhhmopWS5PCqMZt8qAcsk8h9x5eyUrpUj14Hn",
  "key35": "owYZaDsQPkfQWLUytWYVWLQQSdmPqXnxnacMFZDu2VswenjQL2vGJmEacahS3ok4vWVhPkqoTEzM1DYSgukZ4Q1"
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
