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
    "4Eo9gkBPnmDXxQ4952WcPvt5BCdwuNdWTEGkAu2eYnKkvM5EKavAhbptoSkRcbXzP2n9bruXMPsd7huNMyFp3nJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YPa1UDKj3HvLSgoUnm2RkFwh9Qdti7BzrdS8vczcWpsMzJg9LfivBsmbpaBS2WbEz4LFFUvJcQ76zfJzWzVjoi6",
  "key1": "2hffrmJXLfep28bapochQ3EUNyoGxsMtkYDkrz9GisWmMCSE4RNdoMqmBNBafjaJfusUf7AbTVnuiBUKRaa42Pvi",
  "key2": "4Wgm1BGM3pqcPqNw156MU2R26u9nHQLk6UHB2aypDxrMZQiJzAfn7aavCYmwfGRBYE4LE167qpXRF3B6Q3361n9q",
  "key3": "3bv6uU7Bup251YrWLVWYyDBiXMa2ekUj86NHwVXDwVTzYMrGP3TcWEFEeXzBemXPDoz2KUL7bWyUNLQVb3q2ZsdT",
  "key4": "3PM2wuvnyhh6zKhHbfydt1aFLxa5RNgdQXVWmYdrPkXJpJc9MZndE7PaHM2Vz9wRonBxkdpUfoBtQRJX5x9M6hAt",
  "key5": "3Hy8atq8NjFibKUs9XAWYwY6pN7xiC5GRCsLHHbN4ybJFNQ852CePQm2D7JVtCCqmv5sCWH4drHpPHQotsf8LVCu",
  "key6": "RNveaTgqJ3LDaQTvmYENsZsgf6FBJoghfhykvCrh7h9FrhHoRfxsSAXckzcrDxG8PVv5iBpRiPmkspMr5kuzGMQ",
  "key7": "239uDFXbAsbo9ij9dEkjBEytUuRXVyMQvT55nTZeKhn7if98MJ9JTziDYUYvcpZBs66NavVddp1s8xUA9AQCCBti",
  "key8": "2GN2NcrzKZTckd9AyVcQUmUNXqetosmyuXfhiaP854bw7WjAZCfyuUGrz6rLUtb4ped3Gn5YZftQ9UxT9d8Bku9o",
  "key9": "4JoqHwkReaSectZDnoeZ4QhPfbkWuFmBZaxodmQhT9RVb7P5Uo874ZakRjdEZDxxKzcxkCHwAfE14CEB8eAeZDo",
  "key10": "3Y1dDWhQHmaNuiQggKN9Efxp2qybBgnDPGdezscGQRsKyFZ1YrB8o6V6YyFqxyNNWQvZP1H7oHiKP1DQTCKqhiWf",
  "key11": "4L3K6WgQh3Eyc5HLZouBiyeHir5BHHssEworm1XAZcRvx513Resr14ii8Urkv5TPLFY9PFce5YU1vhTdh2pcASZu",
  "key12": "2CcqUtHoMQSquyqnHX4AwKarSfD4uQNguReSJwdQfzT7aU3gT2jU3y8QNuQKyrNAbfP7VidcDZtc8m2bUjb9kZWe",
  "key13": "d97gYfx7d97Umq98rnJYxdzuUBuvgajxsXyzFQtQ673VeuNSpABtwnuA2kAoN5DTeFKg1VbBenMxUY6yrdr6rwc",
  "key14": "3wg3oadTpyVgRXHEhLFznxFGD3B7vNwq8EgtVhzTv5zDGuTjaL1oMRpAN1ktAB32N7XUAh4WxXcDtAqfxkSN9GTU",
  "key15": "4TNdsv6V1BP63UzLYddtdzErDbTvxkgKcu2AbweazpkVhuH7YoEPY66BpTpV31V3qcmK8KxWvpprCDH4UMYghEgF",
  "key16": "5KCJnTVUeZZ6SasehSLoEWtGLivajmWYPWE5TWKdL8SEt6twXuLHCmjdY9FZQdouxjK419qxb5ELY6RUtBmin7gb",
  "key17": "5cebTC2mb2UPdzJKVqEimt5p5yAeeTSXF9p9AEfJQBpav3zaHupk6M7SYaVHa4WG3uXSvqeEWSU293UMVNnwH9k8",
  "key18": "2ZBTAZ8EmoWYUTqYSs1F9dejpxHRX36oMCdkcHSjNfs3qEzBnfwqcg3huDmVrBLA827Kkunxid1MoQsYgQanhjU2",
  "key19": "2jjbVDXaNSCTmSrXbrmGpmmyGXMucBpHXyKMuz8pFw8LXyinAigkjZDWyFaFi1agc8UPJThkjsE8Txt6HdeWXZ8Q",
  "key20": "5Rq6UMAVXCS7SSGKM7vbGc1ZawvkZfdfu1ggBd7qwmUTfp2bizkVnqouZeomZHb25mu8hogEgm2ESfCKNVU76NTR",
  "key21": "3NrhECCPniARFoBmWUqdJPy2xrFRyKEif93vDhPHtfDkKJyVJbdBMVMj4o7zC4xVcT6QeUfeJ4ASEF6ZPQT2sXNM",
  "key22": "Ga4We5zbmU3mfRwg4mcaLDfm9uoJSjkMYgTyRfZSLrzHeJ8gCMLqCnmZbBSbNbSNVMjVn8SPwgYXn8BRvrYvNBi",
  "key23": "wAkttMeQy1sst54u8q2X8NDKPnqcjuLceV2ZC6wxG4HZFjBcJZ1cajbVnwuyvvBKdGPqimcsF7ScrHzEQmDxpP4",
  "key24": "4QY8FpoPDXg47UUX3Wz2ZehfS44RjGvnmRcgujNtBNkvVvAW1sX5N3qwwYDx6w3cPesAGmGeE68Tn9usujNikb7t",
  "key25": "5uTpHXsy6jzH5uMjcrqPqPJ1YzoVZhAeTQmZQnZ28nzhNonkMXuVJm8o9rh5AKVndw34X2BgUhAWndSjyPjpXahD",
  "key26": "2FLPvBSwXzm58XfyPeD4ZmtoPvK9pegbpomaJfQdKKVNhAgRv55MYesZREmZ2Wp8VbJGsjVkBnyzpZPxxyQD5LzD",
  "key27": "2Q5vcLCUpexyatWUgmuBbhXPkhHnQsNems7PasDg7AdtXVhnqguSGJg4wnR44JxvAiF69hTdP7GCyij4w3PPQghs",
  "key28": "2Zxh8okPBHzJfGoi4V47N31DkDeR72ALdsy2qQnXtvDxPNsnWoXRvmEHdkUDyXgEiinnLNLQHFB7ZDAn5vi1fv65",
  "key29": "59d4HGNTUcTmmLNDGjM6Ls7LzBE2CrJfCwpu2WRFqKLQ6awZ9i14r4Arq5SD1zntGPHqg2jRP3mGSQZH4uUYTW1y"
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
