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
    "2g9hFddmmRopLbte443UJxtsvR9jASPGF8BhNSKkRv42NHhjQeHr3EvyPKzh7cbUSq3XpZTyxAqQB8AYxMLeoKij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dX4WPH9HiHesbLMALbG4rmCa72bX1XpMdWkZZsPkCpbi2GEEnEAzLakKAWNDeUsHg5s4xFvFauWTyLFxrc7Kb1J",
  "key1": "21NtAymieJ8yARH1d6W8huA4RBp1nV9vDvn5EqqtbXnPM4x5zR646APoGByeK6TU4xHQ8kVDRws6zzibHrVgX3MH",
  "key2": "4nhFVLGvtsSdhhrAZbxnCm842VPHJ3VcyF6tZGobnbRTi5maARuLmcjjZN3W2UEFKF1ZexpNYZAiQ9g8bTYrY11q",
  "key3": "RVYWkZzBvu6kqdi9YsREQN9uXGabhgYfhqUm6M5U8gHYNNb7xnkVR6PUsPRxxPERDH2dtqU6kHX5tbWcPeH852Y",
  "key4": "GvWzGSzQTGBSE1F82EByunKnv2BkVia76tS2Q3egJuc8w6T8e1vzoVL3hE5drabyTrz3xNhax81n2zmvhnfcGHe",
  "key5": "42kogHCRh5SyVPxy9LXzXzHDGCAKgVnczt3t4XfbwCCYReYFxkoRSQMYCGeWzbGeYJTKhuRpu75hrwS15SfzWTKM",
  "key6": "57n7jepfaD3k3gUeizvZc2dRheBrAfSE8w9Apen7L7BztXDpyhPSGa38hzA5kMSLEL81c64ugNSzSgKUwkuBr4KD",
  "key7": "pDshETCrdquKC44Ktvcp4QWxWcjizahvuC3fCUWvWx5iuGbqxxDsDtEN67FJ8VgftX21r5AxVjUrGZagx4E7FQr",
  "key8": "57xerZ91dm48EHZVEyUvz6PQbGWMbrnX5uSMxX4CVqpnPWCjXMfpDWtUoKc9i7Sq9u8NGPxr2xJu6roiL5HW1Dhm",
  "key9": "B3w9AYW1NdgdEHnkVfni4tsApqzbZL8WiUgmmBoP2jhfkcdHmFizq9FFmucsJ5SDSxd8bcG6pbtzU7eVZQKhYLV",
  "key10": "4jTvWzP4G3Y4H3cKoYZozAQpjd3vogBQBhvVStEgNRjb9qKqnL2xN7SHUdbxMnaD1Pum4n2otSKZbqjK7Xdquauh",
  "key11": "QL33p6NqbpKTG1H8Dvd4MgQfqV6JGyLNHb4jFVWSoSPLtBWkVfcru139vocLHDpdhzECt4ngnMdeegFmJRjeoHe",
  "key12": "57R2ZD9RTDB9zpE5hFKmjkZqnYYEF8G4r4JBze3c6JDeQFUbxeNg7nQC5j5PWWi1iy7cqKReaUzA33CpV4vtaMp5",
  "key13": "3gwhCKZDadQNTkDyLbxUZQfguwWJLCEkZEqJ5p9S3E6yndEaA4mrUB7xrKXswttEwbaoFvNk1j6nSPkPKwSFwnCu",
  "key14": "3X4eCw8pFXxaKbJrguhHWquKXZT6XiQZovEjZ6BoAbAk17xkFofFoZkRpnAeX29UGUU8LBPnycC2wA4h299AyKKC",
  "key15": "4QnVhbxCH4Qcx4vibweUQTqogfRQnkjNnavtqoomAd9QNEj4EJCDKpz7Qz4MhSWmQTx8wQzSfUE3bHyswXWz4Hgo",
  "key16": "4CtKdunm6sPHnmcEqmt7RYbiCz5KrtsF5JhV6qS7WBbNbanVvBfM2KGuPAK8V8dGghXfjXeLGHJoqn5UhWFyQWbc",
  "key17": "3kzFootDttc6WRXNjvH96XnrYyAd9EwPUX1acc8fzghy7B8XZFM3H2KbMVUpePeGZbv78RKUnE1PXXFiDCnHfF4P",
  "key18": "4nVVyuWtxvrCJzVYLvVVncmPnre63KbRZEGaHvGp8KkpJ8yZbbFc3Mdavne7SFFHx6dvfpfRkUVeDzWrVTQAGV5C",
  "key19": "4qZyQsSu8EuFjMRqtaTpNNL5NqBJoPHUAWkdkp4QRFm3nh5btUtxU9aYd4My8CAjThmiNaNCiokEQGLRThFq3taR",
  "key20": "3mywvYV8N7VHFZykTWC379g3w9wTbwcaUmcfNie1kRjLbpz2p6qWCwdMkSqYHsufW2Bobe9hBrhvFu9hn9ei5wVG",
  "key21": "3LnAJcpxZfFmTAXbmwmWdHxnP4JJWGpsmhfJsrsxpsvjrDfHZ98X8AuBGJ1PAs6ZA3UYdyeyoT1Hw4w7YUu52uV8",
  "key22": "2xocVvzGVcctwE1HCE8WKG6nz7fMRzgfHZWkxSTozgJrDVY5t1n4g25vZGdx8VzBxrh5VAn3ccMhD36j9ExSB9KN",
  "key23": "5d58MiJJ6V4huuBKeqkUHsY5mwewzmPAmGndgiw5Mx4LqwTxWmZVA1MDDiukSEFCnaSQv7xY6vqEtcdUGW58rUWT",
  "key24": "gJVYKQnwrfRR3xLgtw5jfuetM8RPESnunqY8fu7hK2itWHyhqoNh2X4PkRXMX3kC5hLXvADtKq6WRK2s9wwG6hy",
  "key25": "2eieduWnCykVJcqJCzXQFwFsskiTDnAq1QprqgrLbYrf4e15HBxAxrgxqWUxWd8AnMVBiY4V1YPrxJ7QEcdHsEzH",
  "key26": "G7LxvMD32fdU2GppiYfV79AXm3sLLhoL2PKdtLM8vzhceS8BFNJn2qogRsz8BGpoekRNZ7uLn858RKTyjqYeZMo",
  "key27": "2LXcvsNLfGvcmdfq92BvFXEA5JpkEkLRHt8Tcwe8h13RgzpH8oVjdkpRBkmeD7hTGzUuWZJxLEUCZ5yBGpiowyz1",
  "key28": "4mtJEVkcDhdhFkPG7q2kfjERBuWKci9FXNgMtesBwKdsX8hG9fsgD85QdmdZxXCFcrayPjTgbjFn5CvVXaiSQeu4",
  "key29": "5Av6UZfyiBt8e9XR5dqx3qhqUYv4Pxe38tJRCknBTFDbyJZU7BpqvgfAL5uUHDyE4X6rXTCRKQt5y6YeyHgxLS9V",
  "key30": "3WYaEWptzEpWxnycdQdB3pKiv4WD7deWmEU9MuLoTujVUqNi15zDNKehAqD2iE8WY9cune8s5f6uYka2D8D8mNoq",
  "key31": "4mvsHgk36GckgFmrVRTd83NG9mVwFMtGuWeK3KLPe5ynkhkuvt8jo61iQxi4VgMTefmbyq36aTrneNFTtQMRPMx2",
  "key32": "6718JqR7ubEeBx1Tt9xYXYWuACtn23sP78XxL6nYyHxNJUAaM3zq2CKsJeGVkvBAvSYKVxKcReMD2wMBs5rj3oiP",
  "key33": "gKHgXfVYHvuuUx1iUKDPzXZUxAZZCMUACxvdeGSS4NqEpUGUFd7RkWmxiEZNMW3oHocUBuxN2wXbd4JwJPm1BB6",
  "key34": "vT724AH7mUUYz1sQ64TZmFyDBKkiKTJ7V3oioQyQnJxKMPRGT1EXm17HFx5Q4ePnKwBmPXAtkx88iZCnXdoQG7p",
  "key35": "4mEiiHgRxLdM2iBCEZTiXfhHhMoojSDR98teU8VBYy8p8oson3xogTwczxADiAPRZuuGJTQZbgAF1apQ4Z9DBcUA",
  "key36": "5DiUfiquhNCRXA5heKbkRY1eP1a21XovGmbaLr7oyRoPYR9ue9PWKZT3q84G9UDT3zd5tj6uxf6C34ZAxpQQjttq",
  "key37": "4PmwUHFDA73dvJf1CtjwFKWQG4TmtGgzH7xcY6HyGKJiEN2MRjksEqHTby3c1ZVU1FfewZnoR4huaBZttxY8Kbok",
  "key38": "47HFfbAv2wHLetQP1qEQ3FekaLE2MKvnqf3LTZxvwkhAH6cDBZRQiTtYLq2yP4wHXL61nWHktvX5N9fKucGkzJJ2",
  "key39": "4mBfefuc7E1fMSW11WGT7fUqCChMm6zADTFkEpQdpvMQjdR2DSXkjRj18bWMoZdbZmCbvcUFVeX3qVZq4NiGstFU",
  "key40": "kUQJqZkfUERsv3BUCTRKxkaBtE6LaB3NrrgfZZDbso6bRAyMXjQSqEv51tSfm7rcmcYu9krKG3XYpmpNhUAozpX",
  "key41": "4k7iDrBKkWP7CtSh6kYUwsLNA1hVEgPdfShJtaFBAbJTDFfxmHjmDKPoZuUP6tAxWoUwjj4rY2LUxpLr53SNCESs",
  "key42": "2kajWZf7eXCUXqVrmzyW2znPtCKKwmALUC8G75gTCrz94KMC8auqbGMh2FMUuJFsfdrXRPWnEw5W5rSqcLxA6cQb"
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
