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
    "62rsAeWNu1RUWRTCUfUvfLneg3jddYY9GeTvMjWfuirFNq3vKY2g241TGbA5sHhgTLYRr6PPuWcaeGh8DhsFJmxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bmdVCDQuuC5PYjHu1o6RqhoBeJr25EfPs1N5Wuw7DaifRmx7Fh2K5CxRoxgoeVbL1B36m9zKF3biPogzA22nE87",
  "key1": "37CTNCb7yHGYHKJU5J4vfXPi2mN6NSu1YrdUYnUYiXJcDxDumjpNauomZ5NMfbjMr85PaejxocfQGewE8PMkRSPR",
  "key2": "3fEpfe5fxcG5odJrkqrccBi9zCKnGpTqRJTECVsZr53JD7QuPFo9bv4qQ1gsJWLiEpy7kWJBpFtVmFLpTNev62Cg",
  "key3": "4dSR1Lv22H23HBur7QgKuvoGBeTRdg69zWf8kUN7F9Me3CgZZsaaWqTNgj5L7Z8z4LeXq7D12X9rioorZjmYr8nb",
  "key4": "4shA5KJjYz8Qu8PP1C7YbmYk5evNwhbaxTdY5SEu71XRvBYgbVkqAxVKju9jaYqmMfJThNWvi84etN727rVhR43m",
  "key5": "3xgfLjVtZct5U4XkNqhtFXfUoV7CCYyJhye6cpGJrKbp22gd8zP1gRzeepA5a3BKopxnq6g13SSxZ3kFNLAfEatb",
  "key6": "26gjxMTWvjPFrXWEngM4sNas4oERefUvW3rcQSPa6Z2EYxDW6RSAbTb7mkqMweqsaEDq5DQrwoLuWrufxdVkcdgL",
  "key7": "4MA7CFHmzFHALfNKdaYFS8cW11iDwYtPYPWQvQXFJhEB7mVxUhQRaA7x3tt2bjnTNShTBit6uGeFxqXudsaMJf5H",
  "key8": "uX5z1rc68GTKZxAK4oZeR8TwMh9tiTNHrjD6MPjb7kX8HL1CHNaz4MDqxQXDwVcGFC4rm5HdhDJZc84HR7kMDQr",
  "key9": "2noiPM5QirGn8j35QfdXXL2Lro53vmsRD3ngWt32QeDDkU9qEsPz1kJbwFZMizVb5EJ4Nhbc9c1rRQhNKgeZpe5G",
  "key10": "xgP9e2KEAP8hd6UMz7vencJbmMaGcrDMXRG9KDUk1wp8QNR4GCXeRwTDgh6koEz5yQvX1EP9BMXoLH5yDCLshEj",
  "key11": "2S9YAyoJmcn2jEahbDoiCRuLNuRi6rcL6xpYvoWRKgcF57sbfuCQ6ADc1WY4XFjZBdW93sVZjtXeBkT55VxbsTax",
  "key12": "2ZmdjzPqS47ZHBCzCfrpTVygDomyi9FCBo3XBweCYWSkscVgoL22u7FRXNPy36vU1DVTGs1ne59hMMRHLjP7RjBu",
  "key13": "2w847ANmYEkTzDeRTAebzqg18xXdzX9yHMSR92jxPxp332d1UH7SS6fhAJQR1S1cf4pV8bBD7nprrJGg7F6d3hz5",
  "key14": "2ZRFSttmc4sCYh6xdLzm8FEKhZWn1oWiqrkrdixrLSHKztevQed1o4F2zWczD4QmXP7X4qtgVi6NpujaTRoZVxou",
  "key15": "2K1vuYVxYHGBvPqJgsCZDtBoojLfqm4ZcZANE5F5b7TkXSJXzoRwB1ALEGgnJG7rUCAqytBYG647paTEE9MLJEDF",
  "key16": "3MFkx7eZuDDMm7B8uoxLHFvakXU7trM5QHwwQ8n5p8Dn7HipE6YX732S1KXnWgvRqWavH32J9LUSVLwwy3MxC6Ye",
  "key17": "2n178Tmf9tvqfFJqzNmtdyEc2MkHHawq3RF1tdu4hbpdusv7qgqKjXQDgvHBBkkAQyYFJ9i4jCb97ZpT8ybTCmjx",
  "key18": "2BRhNT7GSc9sifLfntwq72o2FRB7yJPUw3REoBLuEEc1xY1u7fvB4qErqcdnGaEyUtKnxfFEtz48MtNE4Egtui3v",
  "key19": "67oHkqHtvKuam83aQpwmJf82fNs2n6ZdQoyAxw5LyqaaeqHVeb4ai7WqjNjJHa9yryWubASTsm9R3hF7U6Xm3zTr",
  "key20": "4oWPVz2VdSJ7HQsivaMr3A7BWN42eDuVxQzMKtJaoPw5iPUa3WY8nhf7yovvnFVqXvnPc9f6SCwxW6DhWkUutdxj",
  "key21": "4Nax79GiaTsP5Eri4w8fdVYEMciXDqKBaYBvrTHf8SxvrHrfAXDa7F4TLZyHLCVp3wPVVtcWuM7CcVvnn9ba55UF",
  "key22": "YZyVfby3R32D5DHBPvfwNbJVbnacVSTCQK1FDCo1HCVZj7mebaebyo2BCKmDbYQMt3u7QXZKF8326rRqu6YE5pK",
  "key23": "49HNU659ywgs67sGu8Uh16HVKy5sKfPb2SNGWrZY4hxmuWwx3U79ggvxnAYXKLrvPLcz2Lf8GoSXubR79m6RXb8Q",
  "key24": "Jp7q4fvWSA5JXoCHeRKVbWRLh54KoTuHsyArLfuYdShSMQxiP2mq5Zxo6WsbiR2h5q4nE6VturDfPUC2XJ9TGWw",
  "key25": "4LX33RiB3K6CXNYFnRYsbAP4VMtSdUXUmqHhkT13QVQiLpF9GFoSjG2TzFrnZRL6i2Q8hHarEekQAFKGM3MAS9hP",
  "key26": "39mxiKZ1MKjQChAMFouP1WpXtEmGrjpHuDzwpV3CnAJCZsdthsG1gFnwTuBJkKVw2rLY5yxVLRDCKPH3uDuSsNJq",
  "key27": "5dg4ywHtKX2Z6Cd99JvMy3b9YoLsKuxsyYDS2F3VCwTUUUPVD778yoMQ1dYUjdUvzoihvE8hsDii92zh7vtZY6Tu",
  "key28": "2Pu1pBRrQUk89g9zG71Vm6Rbf4eb6ojUDBpcc2Xj6QtuMFdM9qmTDNUB3qhECZq5QVtQXA3SppRTK8LF6JvqFewb",
  "key29": "3obUmue1e6Zqb6QLuvdyXHZRrBAwFeRSBv5qcwbFjvkQT6v8rpbMM9XAMififgzC1LtXcuhuCW8nGXoCsDViJe4p"
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
