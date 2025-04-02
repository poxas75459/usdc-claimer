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
    "5DRHjEUeTNDzVdFnvRQ5cfMp3Q7iP549Xs2ESg48poh4ruiuHQCsQE7q32ssB8bg9ypqH6BjLGWsWijhhGM8wWTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2294Me8JNhQnmJ66htKj86KDcvCcDdMnsvzpiFgTKDfM5jUe1fQrj2FrCYEvHYUo13jeuax1ktZP69Podey4HnGx",
  "key1": "4vcoEwzZxKhLz9Vo12anSft1QWnQpY5MFWxRVpUB3pWNePhdWRQq6AuVfDSqdwU3EsX67h6ZBTogbSDzgLA8ZixA",
  "key2": "5mMPpuB7M8NPRiqYxavR4s3YbSbqGen8oWTP5h3oti9gLWx7kPW6NNSzCtSyhqWMKY4H6tFsxmcBaTpFtV9faQoF",
  "key3": "Sm3kR9WTakG4xvELq9G7HxV3skcXmFDdwa8zuKVYT8kAtEc3EpWJAybu5GApCuXWMW5YNwTj4bHUQA8fpRvdtqv",
  "key4": "3NhsMEh1MzqPN1LXYeLb1FHEChZujYA3XNUhnfTvmiLB4C58Wz6BaFtgAUrokD5UKj9e44d9G1YxLECS221yWiCh",
  "key5": "4JwBNM7rG1uY3sD5P1vaCmBbHcA7iSjnSx5iiH8cyPZnNXsCjGxJHJ4NZ53JtCVffgjiiBgFVeXN9RSXUpAZcCVi",
  "key6": "4oC6EP5tsBXx42oshSVqhEcgmiaJoKNdNx1DpF4y3Pxnv6p6pPNH1qQdDtLxse4H1VKBjakmqpgeubuGhDJyGiv2",
  "key7": "5ffbLd37jUciGj6cYtgG7N9jbuQAYvcyH1PRBqpdsVGW4LWiDbVoXoZ7JC3utFiQjXu7GWNCvRc2nk6y8ZYm2X6F",
  "key8": "4BQ3q5JhgyZyaPfJdLZst6VT8Nt4XHrDrAjdRo5FxyhWaUww8yf48ZTZrhp9spsYxmgkGhuz1uTiwYcqGnYtS5Xa",
  "key9": "5hyFK5YwiFgQVqM6kySrkaKx1Km5bHLoDoXGkKcwSVDLURZ6hVBJKUDhkWAAi9NHUazBCUxueU1JRmWHRdgWo7EQ",
  "key10": "2Vu3MfZfmoGkRpAy8B8JR9bJyzPLkFZixMUxgh6FmrqUtQeAFCRn7dYR17ViTQLVM9VT3j8fLrreZQVZ8NUNLALE",
  "key11": "3RbMUxnEZCarT2dKG9jgv1AXrXU9S4BTeaGsWsAydTunWzuakFmrEgnFjWK4APTHfk3pz4LTJbQ9ZgkUoE5bcKik",
  "key12": "3XrfJftyqTjY7kTHswiwEYoHN9hGVB9RybuSTuDusQF7EVG5iYRXNKVQbxbVNuorUG4AvostEZrqWHkWJ3mXWyCL",
  "key13": "3D1VGmtcuF3kVFrqsryXxau46f8Y5vuiTxs2cSC2iNeUvNMcskhPEQg44XtWNGMawUwt5fvC2uhBchNpPw8TcpAo",
  "key14": "5qYVhMoUk5rw7pGSyTW2x5CKnMQU1ewLLMPhtMhCkqsgo3vLbBoK8SFJvwYhwEB1H5CjJLEFWah8j2WVLSAAv9Tf",
  "key15": "3zQBq9FMfFwVjd4c3XphoxYTKE9LSSUvSNVBMpF9Hczfydf4nmDR4rX2MDpfY44ui6iArdFwpssGGJDCbaqXmb5h",
  "key16": "5eRc6G3ReRiNFNuL9UUFX4cndrT49KuYUWsAoW29sawz2e7VTRyYzBbtvrCHLidogFby48AE5KVcS2HDAda2d2Pa",
  "key17": "JAhPHHftrmuCwpGWhKHHGvHiCe3hxLoWF3TXf5YWxBLNoF4UM7uoWwMj2X9mZJZ3UJWnQvT5gxCKa21gWqE3T39",
  "key18": "yzzDV4odLRYGPydGcA2gDVHuFiBLGVsUszF26Pu47ZTNkFMgudop79DsgMWzqPFwZzNpWc1GCNZHGHy4KZC2quV",
  "key19": "5NPzzAFP3Zw1tS8KFDyxV5MrtPnuaWtin2euXrnVn6EeeBMAwTzDBb8L9BEE5nMFuGQ8CtPxWq2Tjy1gb3ufJQy7",
  "key20": "62usFzHc3Yx5vuYFf3X2HXSdxDKmBiX7kDQ9E9WCqv8f9iBgCaSU3h58vyKTuQX4tQStTvc7u2VnqLx2xAGhJwfx",
  "key21": "4hXFkuJPM2xzjr5Q8BL1Gabn3GkdYRwsF48KigK7e39bx2bHcdWmafi381ydpeFBxYPZ6UJBV3oc99q5FpaorM16",
  "key22": "3xNqbc9kAzWqegQ9JNwAt6ohC1csVKwaFY4oNuiBkLTG6LtWyPQXKnyYvXXsLLCkmzECLsdoXFMJUiuAofr9CyC",
  "key23": "3thA6Z97kwyhYuxdvr2NNgRe7s8HoGBqZUX2xRQhk8aSAC8GDsihuN1yRHuaUeQuF99cg9P5j2VAMfzxKdb1Jw7z",
  "key24": "3eeRpoFP7PvWpduNt3QCDw5BPijCfZuAumCGQvXpoeXCy5xm3icmhExUgv4C8YRm9pVkUU1vha7pT5utHhXajLLb",
  "key25": "5PbepjpTjcuKwsBFZ5j38itiXGEYYJUuJaBTU974K75XB7WXEWWQYuJaBEVGAfrU8ZMNiuYoQtDA9Y14YkQeR57p",
  "key26": "2uhoh5BM468p5q8VGnkVJ2cDqsZ7Hux6rp3ZG5HzWSNnvgkfK3HwzJBsBkPee1C1BCWCfG1bcrpCzhoCx79zhQBz",
  "key27": "2rwDV4MUTA47kgGCM43jZkbDbRz1DGxAGL4vXtVU4xycSB2GMGLVCSuhGCWMio6USAZDEfaNncNWSP48Ao1nd6CH"
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
