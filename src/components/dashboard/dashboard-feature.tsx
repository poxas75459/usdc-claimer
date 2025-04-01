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
    "428wi79ZZ9Sy1uSPDDcEXSeJJKz4pbopL5QwzkB2auZUVgBLGr1TJDUf9agaVBPHKGvp8R6MQGv9yFdffnJMzgru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTr6Vhn2ydsi5BJg2hHQ2T7AXz2L5bN8tKjxEVq1D6Bkn8Roowdwkmffe2HKxFoeD3vvBQUSejN3iVxrFhU7n8y",
  "key1": "5C7vVXu48czPBkpHSw21qEPBPTixSFfXLzdPpXKKiMDK7jHLjy36UAPBDR81uh7i8DWRZCFnSnzAcu5DAwTuBfzw",
  "key2": "4eFH53seVdGRqbDk8ZwX68VJRu9HZtymnt3vpKMo5SLb4vdpAp9HyFJhVdLfrYX5hm76HhXS7WzUYZZ18NcUcqUS",
  "key3": "2GGMap1CPpf3GfjWbXSKV8oDoqcew1Bha6DXQcZWMMDAMeoUuejSTwczg6qZhRiLRGasEJR5JQ7RBJf5XuMiJ8vo",
  "key4": "2hxm4q5HtUHaQTb89aDKeP1F3akcmkLiWF1MSiU93DezxhMFnaP7kQ3YMStGZRX5ZbSHjyqsy9vR7krGZZpmjkvm",
  "key5": "56wGmG9zyFtACEg7CWrRxUWtrY2Y4m8iuyCPsxcmsD8itmV9jsyYhV4ZhKdbCvH12eh2De2aM3vNN9nVovdhBoL9",
  "key6": "3CWuQQBBj4verpEUPD5tsBhyNHHbR3gDDhVEPn415ptoxbzoL4TLwE7uH8LD2LYm5ArqdFBfVQCRndHQiLyqQsLu",
  "key7": "3YkfTRXCqFQKKbjxo18ERnyEHzE1TZgjvXAynFAJN7WrrMvtQyxGBgZHsLPdHr5G74RSXXQUtSXKmArbK2VTKiXJ",
  "key8": "3svKykzwVKLuzwhm1dnaiLi8vZR5SxQxgMrxTqAa5kTPXEhFo27TwRejNG1mnvk4bp4n1JrpDBmLongC9kXrGFK",
  "key9": "57kPcYkY2frGPgU4eZ839G4j8oGeU1nMvUicSaWd91vJMqBuNmKhRFSPYQjBbuMZitqTtvxqkq6UvdSWAoAQUwd6",
  "key10": "63Wwv8vfck5fk4mqgBuqQRbDR8T5neoNdPULo6WzrKa522DYRMfU4vKJ5t6DpsaNJxDzNYpGUteWJEbcAwSfYHEB",
  "key11": "2F3ZMyw8XwfEF8mcAo3dJx469BrKNSLXrDbNAm7ZixPAjLSW7ZR3Br3yZ4hVE8MQNNNmCYWuQE3KJoHTicxgUfK9",
  "key12": "54Fcrc6ZKWVD2Fek2BsoeN2JEYSMmNTxjw5UkYLysEk5tLtfSEWNAgyi9ruERzjY71BNFp4qsTmfSF7rSopPP7C7",
  "key13": "4En3pwzqRiTZFERJ7ZNakbSYf9HtgHHAqbc5BADXsY1UhZoMYxKCZkvAz7KdrJmknYhWNfwbk76RjDw1sTGEzpLv",
  "key14": "2avLmaCgnFvqadVk7BFUdWbDJPmTq5qtw6pZHxyxJiqmdc8ShrRMDz7jNrwoTBJfk2qKCVgMFQZAQGxmqNnUKxSp",
  "key15": "2HDZGr56eeDf5xUDpZf7TBDE7fywq1wXhVmaX41GC2fCqtr2uKtZShirwwqekmepHUDgdyA9eMemjJcpK8KfHk4C",
  "key16": "5waW697qsYiX2FZRHWq1hXmGUDG2wA59PM8xcG83vSmriN98QAfGkv6K44DW2jzJFRvSPh9oPBbkQZZS74UAPfc7",
  "key17": "4yEkzGyVLF2CX7udngQvV6VPoDLdt5iNuNKV7eXtANU7RZjnU3rUhUrzwJcJggQMEYvKBEa1rZxzvZwYe7Q6kmtU",
  "key18": "4RMk9WEKjU7Na3W8eEd77FWnk7NBqLVKjiFcahXBrN4fQFxxoDv6CH25STYPT4814bvrNnvGaKi8cJLntAvRNuNc",
  "key19": "2YBwPfXt5V3CYWrrNGj8F3oEn55U2cAMKKVQHuv3v7xTa833p5GnXAZSrhSp9Qx5zwunMMfcDTGzHKRU5yU1nWs5",
  "key20": "3i7bjD65pXjsMJiCyWDb6UmNSP3fEtyjDmz4nfvzGLaRemrEeDx2pzq89AknDUKctAHekXb2o54hmpSSmkqH12Zt",
  "key21": "2VPztZtk3kuUY8wgU855Dkp4c137ZHfCxYfYrvdKb3kJfQphdJ1bWBPKTm4XAbspq7yqfRoChaQVRTDJoJ6jS2JN",
  "key22": "2SCXFx8zcMNPXnLoBhoWLbfr65n2ww2b4rZyAMt6WZdFcx5GTbLrSC1KKD2wqtva2qHZe6drefDUmxaGhAdAQ16E",
  "key23": "4Jx7WMCBaLHv2cLLasJ5oy4uFEBtToyLfxvQDpWZ3pfCrzxDANdK8VPo4mRx9ikAwFmXYGKb93g1V8HFgrJL6rwc",
  "key24": "5ddYvVLunSSU37eFQ517Rkt9oG5TJ3naHsZH1NfpqLwAQTTXrRyhjPAwSTsBXrKztvXPevpV9cZgfdKu6xgFrbYw",
  "key25": "xDrit6u8yGQ1P8ixLE9c4tzdc1a8Jawrey4a2okWqtFan2fbkHqZZYUfUUaHxFdZWjLLyxtfLp5ZvL7SsXoukbh",
  "key26": "4TUF5GTyXeZnHh48CtVqetmvK1vcD4d21jj4BJv373GMmnsUk2xRbwyvGtZK2FjPQzy9sPuDhd29ejM9mXbxbwe5",
  "key27": "2AEcEML1EyXShZmeawhCbzrfpoFVcGRNAnQ4wRzmdiHekNzSBHQPUuVorM4Vm8nvwnbRjiFxKFqt9y8XwL4msLXn",
  "key28": "29gi8NWh3tBZeP2Qe9wc9WmWHG3g5KiGJ3rFN4mBRdG7Uy83Np4wQ7UgSjHfj27i9kiRVVwa643fEWo9A2iRDY2j",
  "key29": "3aBenLoXDqGAPDsirfg6HAoXgWvXpGA4ke18LYKZKwT5BtH24HaqooQMkVBYa59eHABAKuDrei57dHLU5D2JBzxQ",
  "key30": "kZgbtk95DpbSb5oC6chPbV6Sc3JwCe8abxMHsv8YWcrc8KMioj3rzst9dgDUByDXrpA4VayHk3DPPp5LMsYGsJ4",
  "key31": "4U6frMkf5Taahb37411VHiHS433UwuGqxANv7HRkHHy1619zRDBvu98XmnChXq5W4k9muJvYiWYvZrZP6PkTKw1Z",
  "key32": "3cna7ZVZwX7xKm9Ucm9pCCgk7N6NUvkqphYRBSRrbW9YSo4JR4dVec3LuQkSXpkBkdC7xdKKZPtJqH6kZUGmPxsp",
  "key33": "4HiNGhtvQfkMWfE4tzZaUqyv9NgkFiRWARbod2TPdR5eSRVY3qmbYxbH3FgcYGu8FnSBZGvyybtfNcnDPN3iTC1y",
  "key34": "4hNqmBGH4D7MswEcU9YHyvDuEaanhvi5m6T3GTwXtdfFatBQZKzQpUM66ZgNgC5JfZf3BxnfxkhuXiiVuYBjVCqs",
  "key35": "5SSvstMyD9Q6mkAGbKtpBzdin8tVCNcgYCnWVms39xSAkwC1siQiKaJHKfDUAa4kZZNDXzDXFv4jGn5VHLtudGPe",
  "key36": "56fBs1qrBxj9tLPUNjVC2tLVLPusPtVwVvLraJUjNpiwbWEBo8JiEZHq9xmBAwp4gt2rfPnfsoJVrpSCwNwrgo2j",
  "key37": "5n5Y6GseK7zVWCaEiuv5YQwWCoQg2ENFUUUnM79H3d64RLdRVA62V6wZBkUfSVao3HUZZ16caVB5XbyKu9xNLDjp",
  "key38": "29xD9TyjKb6sSFEKib4FVs5FFNPzEYVi7qBHe5LQeJ2QWcntUR4PAKTNUDVnLuGJvCxKGywcgdspubGx3fqjavGV",
  "key39": "TVviMhUK5hqWnWLB6JfaGWU4CbcRh2AvXj3WPXyGj7J6ZfacYJp51KQcBwnnPbyQpP5bLup33ZLbcPFjdtBQSBR",
  "key40": "2XXuTQ8y4ij5vZvFGFeBnX9FuvLvswSrFfLWiaSEGMSkmBnmddNUSnAjTfhm3skjGb35bwYkPVL3dGpUdbxZ2VQh",
  "key41": "252tzekpy4uJfzbToQrjueWKLgB2gxjJg1xuNvdTsaGhaRwnKTqVNeKip2BDkFLzNPguL45hmAqv2V9VnR2ip4QA",
  "key42": "2tW2EEZJAfkwXjfKLu1Zbze3KgQC9q59JRpKKDwKWcC5JG9zFpiLnS4nFy7hgCRw7pWLCYeuwsyePs8ddfCXQZg3",
  "key43": "5sJC94iFPcPf54BE5KMbwgoQo8n85URyothjHzoCFQ7or93YhhugPdp2hYtwReBMXUtnxCet2z1YH8JkrxhJ2m1Q",
  "key44": "4dRFAmLH6bhXgHrYfdNNebYjd9pqkpJujJZDhfikAf3ju2Uycqdtcd8PgBTuKo4wczgQPGuCPDPRq22mBAXaz8fN",
  "key45": "5dGvkpg5up8iNbnFFsb4e9dEFk8t6VcVDLgbM8NL3Mfphzaxa2i5XbiUzsa9Lwo7GZPczxx79QZxRDe1gZidA1Bv",
  "key46": "3anucMEh3NnaTxTJ4jS5BdoWS5YtEQKqAhcCQfgQNEZtHLxvY9LqY1kGskD346wMZx8uMtbrpyZDMPcqvX1s3dat"
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
