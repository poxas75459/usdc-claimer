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
    "41qW7tqNL4euiV1q2WjKeS4xCxXSuQyVoHpr6jBGWRZJ17erSQ1yvzTWQYxD5aTHJFbWrx88X1UaLT7ApRf2ao3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ws8q69KRBybWaceRPFiukYtEx9RyG84hGnazVm3P8BpN2DhKMQf4bUfdXU7SFiqbvkvRDyuMah9qFwwC35tHhb3",
  "key1": "QTCvpMgYYrunkm4fYDgxVBYEgHUeH8xTPtAdrx45rkcippoEmMrY4WWXaBrQ7kXrpG57KQwyCdUwKQaW5A3XMbX",
  "key2": "5nhRX6oqGZWAN9UxjGNyPcpPZo1wHGFArdXVieNPVggtHaVDkhnmn7RXrRKXy8e4KseZGBJRVKnz8cXJUughZCGL",
  "key3": "51Rny89BE7RiwpDgKhF5PUhiEeCoCDAh7kiVLFttLx3mHVGarg5x6pgkihYxDKmhiygv2nyg4CJW9nPGPWjFqDQn",
  "key4": "5UxJW94nKX9uADETGMvCkxk3inpeM7JcAcsgEsuQfYGwyPUwtThRj82yUqGq1gPMHhX656ZLFTHJoNNQarHUdppQ",
  "key5": "4Dq6LwpokPMvr6WY5XBr1De9852WTpUXDanRBfw6DFxtkPejuvY4RhEa3672L3RpBNUqYzonzSwHX8vjB56nFaVL",
  "key6": "3uWQHnb3XLSb24EUu2wwcg5Ejm1dcfr9rhdD2R39MCjHjzVSUa9nbN8uf7yC2cju55tRCXQ9LyYQ5Z5JGPLiuJD5",
  "key7": "feeZdniy5vfNHK8F8KL6t8h1c8gsYT31qWUSxKfrSyvU439Q76aufPrahhMqZpifDgGVKU4fPqTGHYLhjGAqDFD",
  "key8": "2Mpn6oEqTCjeS8DgzV49pJqA5iBMR27NzVCaoFSSEk4AAAEALyLZh87Rte2qoj1haCuPwYQ6pdv2MhuoTFxHWJTV",
  "key9": "2u54XKVQSE6iGGLErHyszSGvBHmrHjgQ1FSTvYWgfMEFkRpYaM3vnXXGDifH9soGZEtz8fnUJz5u3nQeATdAsxDu",
  "key10": "39xjed4K9xpoPrDXRHcPhhwxWqxsnjyAeQjFVtUxyPjLmqT8Ag3ScqNPmXZEGQSqMK9WWFk7ghrcDiVRcBS5kaky",
  "key11": "43rAZcDTCVx3FruVZUZdWyF8wxyKrCYM9idW6noDjezhQaYkisbPZGLhFkBVVKJTqjNB3zVZXfREHtSk7G9RiPUb",
  "key12": "2UNJnSeuP7hhMcFWeJxbWjFAoH8codkJt4X41pmLhQ4PCXfv3H3UjyJVGyPYnKC6ohNz15EhNjv57AxTBwbvxkz",
  "key13": "3uDMgSZzvSkwoRdPmtwtBbqHVK9x18bk6VPanV7tNGoGaP1JZYFnsxLmnSVWdeEWMBoAq5kF35wL5v1VmoaxXiHE",
  "key14": "sTLGXDBsqKjYXi7jebf35H6wZThyzKpqtjQfGGRVr9g4ss7JKcgQNaR4sB3PknhuHXh4WQLGdwJCwTA3MtKUh45",
  "key15": "3CxstnjELhvpAfF5bweCodTae2j8LjcvPs26EqSaFuywwbNuK32SE8JYFUGbmKbHe22riN5fhueRikBQZSGurbKn",
  "key16": "5GwGWCygQWoDjy6nYU37nSQ6VyBsxfCpdmAfc9CrXEgb2GdGP5q5eGgSFrScgVUzpQKyCBbb8AbcvMcpP577WyrD",
  "key17": "2k83fPmkvN1juSo8dUw4rwNxborxeGKVPWfCgMSXjcEYrggF85acrtKdCm5WnXXEBWwqUKUunWa5xqybBwEEuLPF",
  "key18": "jE451YWAjYaQrSRJv5gc5hDtpU87FTLL69TqWARf52zpCuanxs5YSzGtNCBy8atEwqx8hEhHVYKCTNcfyAxdxbo",
  "key19": "5nH132qohdckZEeMS8JsP1vWey5kQGQmTAveYXNNjn6cuCpBX2SQ5xkfmfE44JrSDHh8zLjwSFkmt2MXh7AckUfW",
  "key20": "3ASgxbSxsbDDh3Ke6aVYzcdJEBd7MTSr1qpUgb5nrBTxCpLmMBp1Kz5UcuNDo47w5UHU7a2JTGo1v63XzfNTPkMd",
  "key21": "3HUeiXvHqEiW75ZudDwaLhTD4ZAtMt3efHmsyumJrKA2ZySTWtwHeNgxfytgGbMQai4iALE3LPsBjeEFUMjvMBW6",
  "key22": "2SeXyDTnHMgeeR23X9Z8FQWqNxSbTQ7qFLkzHgrQ3NjDFP9G4QD2tC4Web9hKyehb8uA3AouCn6MexZP2Hwkf6Av",
  "key23": "2rJK82KR7R9fqUUv5oGZkGMvAHG1nSSn3Ce5L5DNBdLmEybmwCcfrdfjssvRxuyeinnD4ZXFaG3ZfeLM2BjGKhgp",
  "key24": "34FbMoHV2uaUuh94EGppKTpSNcFrYuAp31W29hzqxCiWR5UEMzu8iS1RGS9RKW2JfXe14RcdN67B9wStgkVFkcWt",
  "key25": "42hhpSYjT16xEJRQ4xwtYGnzQ7xtfrzLcCAGQ3Ldc1884NPgrmb9crawKGRbvx7bx28Vh9HnGEkSaZgh4vDyBAs7",
  "key26": "44ptLsuBsg4sHbn6mZuwHHFJoEjT6YG4k2wKB4L9KV4Pwr3butuh1njNPUDT6RhkVG1ko6tWn2ksEXXHZVxiSNzG",
  "key27": "5ooaUMjWQZPaJZhV4rF8PAeAVYiaCh5KR8YQzQNLoQhEcDGMKBn9EscjM7LCto5MqwJeFPasdAWPQBb2g1zHir9V",
  "key28": "4bv4qVn9iDjUJubwkRmnVMLtJjCagEtwG9woA7EWg81FE1hyV9B3tBQqpEjnMmHbZdsDKQGNLNt6v9NgXVohYkSt",
  "key29": "4SCLQEoKAVLceUebXoPgTq4xmhCBdqkpyWgjXiagw45es1inrAtTmQ8caygTBuo1URpzpuwrzSj6Q1ubaR4jGMZ5",
  "key30": "5xa1vPycExHFLJGje7ozqmqviUGxJ2zWr2uuFMNAyfCeC6TRdZYgK4cM6TGarkf4ew5B3dUsM9NGCjQkp6StyezV",
  "key31": "5ECjNqR1HrCVAcL5wk9zkeUQXod8TZwBoX9vhXpkmHWZcYsUZrGJSJgqeWp1EDSoSTfe9k3geSH9mESoYDR7FFnc",
  "key32": "LMePWLDj4CyEELUpcQZzmR46VEVcr1hNufE5tt5x6HBEE7QsiL8NeWfBEd7UmKXBCGhXYz64ydyC3AKFcz3mtcn",
  "key33": "JfinUGPrgb6pvvojwNAFmKuNt2BT3HVio14uZFRSPLnYmNPDVgS1iD9xss6bFWLyUS1Vi4HMSKiP5Xg2xyGhbYj",
  "key34": "3nF4L2spZ5wqMxMEj78aXXB3hyonC9fXEMX5WDxMpPvb5mgD5KHLnFBTK6KGwr9BvDQpYfiv5gYAiCPZcnxYNyWj",
  "key35": "5P8fPsDKt33qucx2TJ3kRVhbKUcZsCL9gwwED78Eyfipb2zSKeUxjeAqXcFbtduF7G23z1HKcoXn94SBJf23Nq3X",
  "key36": "2cz26UbzKeRm96MDsff8b2UNJoX3SyKQDv5dV28QzuYk7BRwuRfWzKy4Xoah7g9RvR2JNPoqRFL4djcbPKmqXK7T",
  "key37": "4KkhZiuMkncvQDzv5m1FcRVKXuLTGgqbZzAwtTNZSNfxpmh3BGXSQr4kSBFZZT6SsDbT8zAXuJHLzXRXcpddsDMm",
  "key38": "5iww2ecNKR6oD6twiiwv3BncsjG9LZDE5dFibBcyVbveApEvYovB47Ng9vdTqmgQEvVzEEY3P3gd4zK4pxvqwEc9",
  "key39": "4UnE5Gpt9qoZc14pShCFawF86HNsE3iD8BD7XkaLmSq2xkNyjCSrkSkR2a8x5ZSxePPt96b5eqKhVo1CwNQzzoCv",
  "key40": "oGvgiUydnia3DZ7gc8aEgnK55DyHBPs8MfeLTYMQFhLLk8RkLYvpXPQFqheUW88dYGZnrgDHHZKZcUPj7huUpzQ"
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
