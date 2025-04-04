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
    "2wGEsHXiijVVfzKeQVk7QfRZbB4qe2Z4xcNbpZiJQ1UNvzn5g8yPDhoWpCbECdMVMg3WjMsYKEXfBvrWu95WfM5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o1Dw2QLoDRgd14dPrDfnAJaWeFttKMQSYgFXBZ39J2g2Kq47zy7x66cS4z3T6e9tg4TJ7hvQtABGQaPA3WktEYM",
  "key1": "wuWkALL1cPU2YiCqbGHJd3s9sTdQNCWBzNnGa1qvPMjWDAootV9mRRKjV8drXGmSjtu2DQePpB6QucYhpyhV4ut",
  "key2": "kJ5qCL1rq2aGpciWWfUw5FH8mmdqH8EKH2pDL3JJUn5mHMq1iFan6DJRfdv12XDrUT6Z7PAmoCz4k21JuVmH5Sx",
  "key3": "3ggBWJWd8Vjd2ctTBtviPvuLHoe5f2RxdvTnqKeqCBCCUTZCiGojBHuvrrXRHzqxRXpQRmGjs3Ui4GqHi3yiVkxR",
  "key4": "4CN2cCeRbiAszG2meZndzAs5P8wQdhzECnN7bd8xPVTyokvNZWPF9S6kpACmzkneAFmchsgGBwWnjctpTzXiUpsj",
  "key5": "3Hvn93sE16i5ygNkQ4Bxdp8jGQynAWmAFfNBvNyts5nGx9ZrYyetqnxwD4HMRyJpjtxkTmVmNdBysF8LS8EtrYeq",
  "key6": "2ktEEE2V6SQdMhR9QwJXENdG4TJ7UaEfSkqSoF8TBXUAC94jotNjJMvhkAnfWtvvjRgWdCXzJ7ru5NTvwBhhGDgx",
  "key7": "2oAciE6KLZHcrxoKQGmTxqSyMENBQQtdbjvfhqK6NmgtyKjxBHtxLGc2TgWnJWACJzBensLH1VNf1yYWwnk7qUVN",
  "key8": "2vTB2Z5JgAQeoBtJXo7mYxpE385CXEzzDxFPnY5kRxmL1LmUKfg4fiXhsC16uaKLSxQBKxHdpLVBy5pyFbjsPDNr",
  "key9": "5MopzF4NVZDo24sZvdtrgarnj6S4FngtDnYdyDc8QeN1yVhexnSnT279hJ4eDAuHB3K5iThZrLqCdFB2zJxaUa9g",
  "key10": "2cFMrkBr6HjF9CNmQBz6qBXeHVcK4bK5aEq4ozq2eHHB1TZYDtkyZgw9i1oVURLux7CkxWxqaSSBfTf549TZK7Ms",
  "key11": "4Y2XBcdx7Y4HkKY5HTvjqvunrR7wvbhZxtWAu6HWfNCpvmRVWiB4u3qXNePEBSu4AhwbiCQr7f8JcsFwvd9tKHK8",
  "key12": "3knMRTaVzNtiiQrHi1AfdvQdTs1Z4Mkug3cHCEvVQES7WW7dzKQrMxLxKWz7TPbBiSauCJEAHbUN2E1zvc1yhHZh",
  "key13": "34FyvPUMCqpmiSqwdYqwjtaBnDADVL3V879muJ6xLvocroebekvke5LGKfCHukptmoU9BFzZrBK4DhTXsH9Fmizg",
  "key14": "2A8bqLahPRLWEV2ewZtP9QUHjti6nEeZ5PRPaCxurd7kX1qowK8b9ZMrMBioeLMQJHEbgdCo6272h72tD8Wn52VK",
  "key15": "2x2XkvqHC3qZDm3QJDaS6UbHZLZMPEWuohfjMur7yd91XcNcKMZbZpJHRRfRqU4SjWiivkoLbS6CqAVPeMyRvbEc",
  "key16": "CHb4xyJ1cchCDwDGvLMS9srfetVU3D5srkBEMFBvgUK6vHbp8Pb1Pn28nPpceph8TErWBnq2kw7U5vq2bkya8VJ",
  "key17": "2XZio6SWnJzNNQ2BedM1ehz9QPaFsMcKZ5p6Y2SomKvui7siHGAt1yQ62xQn7WSpNoVe11akFYXhPkfVUWXfoy4K",
  "key18": "cFPeYKVK5mvSkbXBzoQ6TNDE6Ka6sMvMk9xuHGcjHdeFa38dft8KmPNyeSnBaSpK6P7FhBUV59W9JWo5eEpvYwd",
  "key19": "5tfghZMEfnkoD5Qvugmi1mbCS8mu5UhNz8ggFDgKfx8wszwp8HwHHr2oNcp4GxjHHD8huTMmPjuitUvxBQG1nUH8",
  "key20": "2BTrSw78W2mcJ1cGCAENgeoBK1jxWD7tKGtYhiWKAGZ3yPkNDzxVTmUbcKE66rUAb5o3wRRmbpKzjghBAyZbw61T",
  "key21": "5nBX4PVw2P9y1nDcwX1iqRJjE64sGMzxTz9Kcyuuqn1DoYRzQt8LxcbEZ5nW4tXQru7opbJZ2EG9yAzFENDtP64C",
  "key22": "5m6JHJWysmBdbFU3Jwx3v7kDeMHLcShArPJz5ByRkRBLibTw3LtXztoEiwe2HVhp5axr68MKvu5AaB9RNX4Gze7v",
  "key23": "M5WyTCTsj7M4KnhHAFdsNyvV8QYzRx35BieiZKzWzVyHuNP1kyH2dgPKwKt2HrN3a4auc49XXzuTJsJCZxgZ7GQ",
  "key24": "2EXND8Uby6CqMXZmqzWZWQ1Kh7bBWqRBzBCvkxRp8aEMZGxPNZSJfQdWsq9h9egFAg3b6pfY6eQgxdk3pXM2ikzP",
  "key25": "2nMiqWSTxwgNFQH7faSWHAYC3756Bj7FHT48tyHmU6MpySjEhUTwwrspEMXQ9JwvTsV8C6fmbKt8pGdnBH1ajBeg",
  "key26": "PDsUNAUF8E68479wv4kGVKDqJVWsBKhYSATMP3ZnXDXPQwnGp72fJ5omuNmfcc1Q3RzpqzQe9Qs8Zntmn8d4p2w",
  "key27": "21jGeXG7G4Y9qSuynbS6N6YqKJ4de6yXxSXdJU8wcZnoLRBXfE2VoHaNuSGFVV35FQYL7P7H73s6qQqox7JAcvy8",
  "key28": "2W2PRQEbYjYbs8LwUy5dwq2mdxgiSc6tmHmwdNu79c9G2CTd43LbQDd1KkE2zau1SosM65jj2iG2m7DY28GRbU2G",
  "key29": "rst4gpCvZ7p5qqKR7WMXDnsFdKKEK99xWMV3N4nKLA3gvoswBZmUDs2FchLxQaxxSLz7PinzC5BzQcA7tBuKr5H"
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
