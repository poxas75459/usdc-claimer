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
    "gR4aYGb135ZF9ZqGq3QxiDsjeHWuA4PNamTfBZv1WDQr5BeUB3CtBX21fKdwJJntDCw1vYZNe3SVWaGySKTZj9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hj2GBeQmMN4Ezg7WgxFUuPrPHSJZ9ftNm46dvD8wZ4VAwwgwuAEvxP2PjCEvcCqussVsN8NMjp443FKS8pj7Qw3",
  "key1": "4g9pJcYwoVqK6D9SPdv6wmQ4met2R8jHNzKbTnoq3N9ci5fNbZv5FojMo53KKFBAWU4w2e3Pojyf74RZarkQxdCy",
  "key2": "SEG2Sq2FFndRSt8AFfV3cVnuDFuCwWQhhAja4KTSGxH2yXxibvjxGtNk5tCaubWns5b2FmsdGgQ8Dp1XkYypgcV",
  "key3": "2tFE9FCbDWokijeiD64VSPtWDH9vXvQreaueuxh6VhamVVxBm8KuXgjGRii4YEyKm4jTUKNXbHZYGs8iSWcAXJuk",
  "key4": "38NGgF3uxNXqTkWSt5EJkSecWGNtxrN9HzciKopuEFkngrm2oubeJT691A9Dvkr6ZEGiW1zDscVPLFwRr9ij29jo",
  "key5": "45Y2PMFjcceJUvAasmY7spHtNfksJVb69mJkDBaqLd77saZrzAvZhPryq9Aeo9t7qc577a2dyX7ztg9oSjqUMR28",
  "key6": "26sM159WptJBJHqM3EfEAvZ8D4vnyPMiMXpBDKwzXsT9aVxYG3EvKaXVzNNGExaowWe3r3H9TJZmzZM1cN98cDbG",
  "key7": "4WL8rvXLxmd4czeowYGenBAWVt6LnHzvYvYF1JRsKioqKiSqPya6GEQjPM4Pz4TGuzFq8n4i7JCeyutzJ8TheM7G",
  "key8": "66bGEcammRo1RzpYVkBgX9EPZBPiVUgJ1cmoq5noPkdx4v2QH5fsZPyYvoyn2g8C6C5h4tJpAaPqEFVfqkb6FBew",
  "key9": "5GX8gVSzAbTppzwAV1z7FfmqMJsHcN86GHp7Cu2EhnBWiKbTSkfkhat4HfiBUn5n3N1pFy8pvHfcCGpdeg4cB2DV",
  "key10": "a4KkWxDt3AMc48yDWdibzTiuUVt1Ar7cfqVBbUBCNFZTH1B5YBEZQFHLkEQZqb3Sx6BKrtNaCpgC6wfJjMpLMCv",
  "key11": "34awjpRwHQ3YGvahzPEy9rMVpnGJQnKqdJWdKngNBNZnZcoqhZXEoUGjq7Usq1FLS78yqNvcjNBPgCnXVX5UXtnd",
  "key12": "3sY1bBSeaUFuAGTdwzU9Mp45BYPoxuwbxyrzjGTvyf7qWzJ85HxZ779REYJ6HSdk4L2eZULdLZRrF8mw7iKsmwKS",
  "key13": "CmiodLHLESKiYSjmPWDqQ6L7EGkVNy63ifeZ86RHubmPetg1CjseXqPFLAnu11CNT1kG2NbBdf2KFWmbSpzjkYe",
  "key14": "4RtzrTN5T29KC5TDdZw57JhQjL3Fq1gw3LYVVbqrrPDswyUuRLLqD8EWFXuin6ZfX8GhgTi5dgPATeMC4YTQJYpE",
  "key15": "3DLJasQRfxe3AFhKEcH45oCcFcj3azkjCtqDWULxBppu6cEK1e8MgXAGAusxKXZV13zg4QKn1rMDPyPGxAoJ79Wx",
  "key16": "3uGaG1ZVoK49UC8fFYWcknBXniQSk4o3XYnArsyTFYRXFa7M82PjMd41fimhx9MD6gSS28iD92Di1LnU7ngRppi",
  "key17": "7kwX2JN51T1nPnt4gBwyS3JFn3v5zHFf4ViBkYD5vyXv7PJTZsD66rUM671smrEc6by8DVZuJ6ZU3eCZTbHuf6a",
  "key18": "5NL13cRWoT4W9jWXvp5ePTyy7VEVMot9eQuCMrig7qSNhRstBgVZrq6P3dMcuRU8ZNobSwJnTE9jzYwUxAtmJnW2",
  "key19": "VxC97F1waYQEWJVxumGd8tjD4GcLVyJ6NpLfUSzumHZBrUafES9QwmBEg3DAskWCWZqw2Cu7RNdA2nnFcBBQ8DH",
  "key20": "mkVuxwpJ1XRTpvyU4UbRoboSFbZQcMuEpQguUadWA8NwXEhgCZ7r9wv1J7ikyKypUsiUpdg8qjjadeHtRTh1wPR",
  "key21": "395YHCcdWSPaw4jzsgvFzgCEZxgZHsHZWU7i8sBZFk4aJC2ZTmoqhhRoSpfpbzSCy7LRc1NYDe4phPBPNMBewsk4",
  "key22": "36LRVWMsj9uyh7q3UomdeUZzYdboTj5FxVbeuTunHJcekReEU7rjfDzaeCmxSYhjANJamvLDqaZpwZ3jzaBjJuqN",
  "key23": "WEFczNQXukjvyAi5Zh14ZucCWveuaVBzu4bjZHj6VvDA6RRU9nqHoWsjtwFYw3ZnpTCpewDVw1K8k63tD4y9Xo2",
  "key24": "4VV8Wtm5STQpMEA38VauRXibwRbeUtb7iKSAkf4EuKNhyaC9u3ZHCMwN1yhn8D18SAumV4Heu55PVwkiBfcmaAX6",
  "key25": "3jyR7JtKQvW1wbr5RudZu7HxFFfBxoFVYE3KnJLgzGyQK7P2VH9Kieht87j1cB6memUcAzxJVkUWnZQoEmTXYGAw",
  "key26": "31kixuAvDuuxLfL4wMxznQ9UpeXNNE4JKbUe9n4z7CwYaKzAN81x3HN1DzZrCgbayxwRtrkbE1EjYWSEzNd95RQD",
  "key27": "j7jMkHnoXak8C8EeXEcTF9eYMVnKCTKWvfxi1wVuuEhzuNih3YRbSgGhHuJ51UJQfzHKvy3n2GgsKYwgP59rj4T",
  "key28": "66bbr8Xux4mamXhdkFmyqC9Caz1hb3F5a7DTXSNA7jd6XiWX3xrh5crErn4FPCmDRErV3P5wrEY8eQ1yGAtQ5fQF",
  "key29": "4HyqGjur3p1BaZ8MAXwYyRWkhjkYWaVmjBDBhjMRimgfxdGuF5QytmKrmChpUn9B1gn1zeAc4LGNKLqgyunthWZ7",
  "key30": "52Pjm4orrGxN6NFztuBD8u4pSHXwwYJpYZG3TqiFQWyMBT4SooBWZG1dtXKkbgnug9EmfKxx39bNcNwCxUnvjzqB"
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
