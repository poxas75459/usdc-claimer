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
    "qdxovbNTz3KjhsDzy5irXuaqDNxRxC8Cz5Wv7XpnN1fvCHzyDMBsN9fBJWDEPzLFUG2ivGqaRj4uwR5chgZS3Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VJ5Gkj2QhcmtFZFBNZ7NDNg6Ar9SerNBPrw8XyjVJSXYgdAcFyrXVyYLtjP96y7uKVaSQoU8GEB8RuSWruv96dJ",
  "key1": "WUtskZAc2ZMfczB8NuDYKxtDfzud6NaEwRZGEWMwVg4yKAdki2iuzeWAZWhib4WtkpaYLDXT9wtisvdsJjTW3AR",
  "key2": "4eqBvkCJoqvNFgka8Tto9MJxjCdDPiwMFMVKcQoszG1VBTVBBPXuL5jWAL6onP49mjhHSK9P4snH1VNPEHxdDSmz",
  "key3": "2Db1nf1U2JcST7Q6UkK6LPG9e2LBj7w3wb729mDqSprPWQKCB2DEQXbtkx3DxcyimLdncBv4RGJBDyjZate8HwU1",
  "key4": "3ji3WXrFaV2sqij6vv6yU5Z7jgAk8wHmh2ZqfuBPTcYf1H9MUhcLgeyyg71mbub4wkCiDaTFaeXDdHzhMBc82iBW",
  "key5": "2jnWNtmP43GYtdomp62DD5iJ2BoVcxMDoKu5GsrzYSBcesmKbH7xuKzpXgrfYPBvsBwLD1YbZrhH7BK3j7ATByEP",
  "key6": "5Rwj3opKBBFUAKMuL7LGwn6WDKHZRzkU3tP8uGkahQtrta6Y146E8SBguVJS4UQDxsMqNSkW111ZJeMsag9Xn5eG",
  "key7": "2EV7VLBwVJxCgGHQkZnBaggSWdqiD3x3r67jdJ9Javd96xWccGAUYeNP7DcjKqKgBTisWYo346wvUgLRpk4qoZae",
  "key8": "4B1rdJq4e8y4V1NAiaSHybaTTkwJ6Vo3SSDebp8y4EHxSXKnqooWhD17Jpj2trnhFMoqzHJwkyqjga9gKiT57ojs",
  "key9": "4H9oamab23LZwj6rBiozHi9Eayhxo17bFZipTzxxyvhMMFw4Pw6MSPE7j2SJ1gwXQ7WHDgwmZkmcFL8eGVThEU6m",
  "key10": "22xF9T1oXk9yGWiqVCZGGwogKb4c55DwuC2CdXP8hzKfUbkKvZtufj5vQzAXkkN83uv3L2wFt3jM6bpJuwihKARq",
  "key11": "67pRiHzd414dx3ocWGmQK7FQRFpKJyeKBG1UVhD94vS8u5KVYZAtZaprVVwTSgZaBETQ4XBeC7QpDB1uUQYWDYF5",
  "key12": "3APSiwDawatkfH8tiAHbtsf1KF99wzPBu4v8cr7WyCAteKfFHPJYUD2AnPRKYjoc9brNkL252Je5Jyb5pxfXdRDZ",
  "key13": "2S7jpcV1GSgF6FScLXfmbKp82sQPp6LRkJoqhBFVubnSgRcG9UKw6c66UTkfgrMiGFfhfE7KjkgjXCfrCxqPcYcc",
  "key14": "1uAMP51XGTE4NGasXxc1YqqKcH3re4NU9wNgCn3xBrUJJWnCSxZ7yG1HeHCCYzf6NuWf2jAaepVzhiadARZLbVt",
  "key15": "4kECnHBoi68dvVfUC35WJ47yPZu5RkQsCRxWiqf2E2dvfoCF8i7T9uncu569R97aNe3c7kd7gynEnTamxs32AXAB",
  "key16": "5WSRf3EBRMmSHkkAjxzBkTb1UxiRF2J4mAogG5ZJ5AK1B8tyYPwnuoResTrVykDrMSFxLWjXHSfsc2ML2jJJwJYN",
  "key17": "4rc6SdDrHe17mg54hqYggMmnHDv5SaNfpgkQoz4DntCFUqXpyqMgd56LU8mxzbPdPdziBxrAaBzTJyiFRiqrHDFh",
  "key18": "3YqSVnhKBEspp6QmsgwJSLscQzdG9SVshVhkD3Bc4CcWEixrP3LhvBeb342TUUjdXV3CvWF68rmUxN7t89Zdtfh7",
  "key19": "5WAyLYq6UmkPnkSz4MHQKWQHsfvKZTSdNhfPUkikkvbxtxyKcroAKfn5b5a465VP7hXwjxRK8tPEghxTM971HcaH",
  "key20": "Ndr1zCeJvuUGUz6fUFQPb7zBKThWX1GU3vNNfBMnUquKBHRVMNQk3TzJrFfZvC2yn9kMtfaw7QS9T2hLQtMRjxT",
  "key21": "EVVUX1QkPJLYH1Ex1nUuoYEk2fFyeYeChkjsRGnGzWv2szx7t7RK1S7Y2pEEX27e2zdwi1ETbceNEn964twcCcd",
  "key22": "2a62ZzW4uPPCzkbAJcWSYAszjnQrFZmCq7iHwp1Yd5QvjppDJ63Hu4C8b7SK5GXBjqm6Tgr2HRXkgdNQ66kSR2eZ",
  "key23": "aEu8bvbF9ngAPsutD7aRHRTssYQfWLvjqowABNzK5FwxxgmudpK1kWbKgbbSeWDNcaj4gFda3NaZUXGNeFGDvnm",
  "key24": "4npmwt3b1D7fCfasPuFRXGQnHjRBYsBbEASaF7MFAWbPmEfG1JmfEjMKEur3YQDNd8eeaYXveepmyiK34k3N91V3",
  "key25": "31zJwndsV1bJNG9dwjN8fqyc18xGxxJWt2HisjzFGhyx7SsfWXR1jjCW88uJkdNenYMXATmYyhX53H9XnJWzsgyz",
  "key26": "2UpZYWRjPziPUT4LMDTUoWpNFeNCdxJtwPgjhbXxmnLKfhXghiiVToV5gvthrp2uf61oBK8RAAtGkS61piwVYWk3",
  "key27": "3SCfAhjg3uNoYdw2snwHy6C1j9N3adCW1piqGzUHaE5VUF5gX2TceMQ13nnSbuVPWse7f7Ltb7KsnnqLi3ZMQ9wZ",
  "key28": "2FggTn7mhtYZgdREFovWebHhh8GMDML6iULQtieRVixAqpiVso4B95sw2gLiJG6QfkccL8qrH3po7Kt5osyoyHve",
  "key29": "3WbnE3fFr49Qs6ew8X535VrTCwmX53qLCK5zvRwNvPf3EPXJK8rCQAn8GwEdpNbqhhPRbgRS4TpF9KNdzRSVnsEe",
  "key30": "3TAU9YECS1TxrbSncoh7FyQyVpa9n7tJuNVWaPZavWaarsFoPDutNGRYRG18Xz287XDFUG5uYzhidKSrBGZn2Fma",
  "key31": "SthKRso344CvCgVGvydi9ekafZncKqNVkwVhvQMhmfnJP7GutYocXr7JRhjPzyWQ9k17VufoYBfBdn52BsAZCo6",
  "key32": "2ti3y4DTfsb9KCiAGfXJ184DVeTjNrriMg4PVu73Lx1dvQVB7kTjdWEtUvcc5YHWHag2oya362VW6tqW55iWt1CH",
  "key33": "5GwAxUAzUdYRo4TdGrJrFKJnFSiGseUw7WMkqAHzfFk7id9ZZs13UahqBAQ2R4zYzZmEUvSZknz4gwCvpLuFqUdo",
  "key34": "7cVBmBXJk4Z8DZAu6uXxS8asLuBixKC46WZbmkN55kJMWzaQssFTCfoRQkztu3WrKFXSAHC5SYzkCct2kXnyEzF",
  "key35": "2XQWzdsJDHW7FbQxTmPY2FQFVZ6vgD5cYDnqdEMBkaDuNJKdXh9h6uBwKBqMaeXmRcHd2aQPb6sZMctGNFfyK2WW",
  "key36": "4N2kc8wVb9mK6B8CVusEH28gqh5TN85wcKoj7sJ56esa8zyHKudtLRfRFbaPS5341U5ugXoEJzS1Ms6n74hsLNv4",
  "key37": "3aGMNAEynQe82toWLyRo7B7z2YoP4YVPg5ksgiS6PrRd9LZKWdywGmAugK4J5Q1NdaXBn7bA3S4aeDsGL4X3aKfs",
  "key38": "ZzVuCHvfzKDD7tdHuHAzCjybi2pcdKTPagbbQeMGTuskcroLbDzWYSxRM44ZZgcy5gMLbexBisNf2GzaKisRQo5",
  "key39": "2NvzuuvW4YbMUKP6DVemj3tcgANpyK39SSfBLiFr5XnpzEm25tvHwJsQXHDfc4rEmmDyNgs4i78nWHcsQBeTt1pN",
  "key40": "3QXAr91oiFrFSvC6gjCPnjduys3XGYKuMGtuDge2PMG3dkQbZ3mtqJJFZempdBd5LmU8rUbGjnLLVgiokSmVxRwz",
  "key41": "2pgQk85mBemFf8ywCZMqJnQ8QkMnMtN8r4Q2NvJsdyCDPBfziBt9DUBi5X6pP5Qhhv4DP7uSX4DhnsxKgBqHwDUo",
  "key42": "E2b5npmpMiTngSnAiYrnLn49gTDvKCzrbermMp59zQaEzNxzTyK9j781CgxStwcUpnF5PK6yya5Vs5No4taGsKQ",
  "key43": "5vPQr1bNDr8nkWPCDvTB6osKQQxGgozvbRtkjKQ1EJmkDbqM4QEx4KmNet5BGcsu1wkSKyRp3iq9vTmcMAcHynb2",
  "key44": "67UwcLyfPgmWdtCrV3X4RjQxunBN52njtpfdT6mjQMUh4tx9EcWHV986WSUwzB9rqw8eAexo3CQkqFVo8ysRtetG",
  "key45": "5ygT8KSFPRwx8N5tRs24MdVhcZ72g4itQHZkNxpu7iTr5HrqL75YphpYawg38vnxTbWEzxLJBbyEjmiJDvUdHo5X",
  "key46": "5kwAwjrGBWe3wZg6ftFvKmcaoLiSD9z9ACApuJTYS3NpQc6tQ75qWznjJtbKsXm2tKronbsEKybWJErN2hh4tdXm",
  "key47": "3p7hRguvirAJqAu5pmvrob9zWRGNPYChSRjN2grNEynUKubekDP56tbo6BevwqX4sJevaiGjTHgNoQRdstpHszE"
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
