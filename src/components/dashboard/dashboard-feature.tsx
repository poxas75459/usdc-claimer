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
    "2K5YryF72P2UKaUeg7mwkcYiti464ain7uoW6NdsmxSr26Z8RjMy84Y7HpoyNKpT7g9ugfbTDVJ5jG7jS8wktnxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3naCCbHkQQz4zu51CnPF28vLodxFjMrD5FmxmRbY49XciUxDaXyEnpWQScAQDP1DLhkVr7XHdXnBUL3y1hW9bAUV",
  "key1": "CG9vvBMUXux2ggj9gvDjTiTUdqXsfJXkz7BF4Dc9wc788FeQo74jHRCH68WgstydXYJz9vCsvS3RY4urybqyeXe",
  "key2": "27ypauGT8MeZwQmzSDuvar8NTo8kKHbASZ4vq5qicnnHsvnCTg79yTHvN3XWF2SzpRbtbVspBQGAbyxJnR5LU1do",
  "key3": "X3Jt3p9sAz1WbLu9ZZVz6ssaK2Hc8JNzJ17tawXLixzspsNARS7tmmHoLdsh2BNHzhzEQuQtUYPfhpW2bdnMQKD",
  "key4": "5pVifPJRULxZRjqbw1Zp9hckEQxMhzzq7magn3G3EB7wtbPF3JZv1KDKsXepQx1VKpngYe2Uqxp8NiCPbUysnpu9",
  "key5": "23hZJ4Wuxr61Dk7PcknSKojw8tCT5gvAukp6KGxcVcZUvL9GiEZonmFgJUmTDYKgXpyYWV4dSLqADHh4i3jLdTXu",
  "key6": "26SNcoK1rhGsomMpHEFyCx6QFPNutiQkY4afdqsnG8zaqn1tmFX4ucmEH2us2QXZuT89JN2i9cq6uVA4vqHzcxjN",
  "key7": "3iir8RRUxeWZjLGe3Ud7p4sGBLux4k3h7C9JZe3vu7THr5eLRZyGaCgZcEAXhDV1mCPYmYejneiGKayD1tUrsCP1",
  "key8": "5i6t87e9kLJ5NQuWPaNZS9mpifVN3RGRmRcrffrouHaiL8uzGPw51hr7NLpEViSmxyGJx2QmvntwFu1RXCkx5LHh",
  "key9": "cfjwW8CktKW4xTkftBjMT828gJpTUc8GgteD41Dfz7ZeH9eKLfzCFkU7uRDiaMdgyknZSW3NnmRTG2N9cQQRqBh",
  "key10": "2jHkJfzQxarAfNVAThnxj2YNxrQUjHoh4QGx4RVamffFuCv9tZKPC9UuxSav9QiyTnSQQzAGSkDQzdUiJo2pG6Ax",
  "key11": "3BXiLgmxBvD89NiTyrBRLd5k6pWG86QhjNKY7ZQgvnYtAC12hCzsF8qnQUme4WkPyvhWetq33ZXQdqTn4nvP8oqN",
  "key12": "3bSGcexviuU1kEegJ2NeMtt3EahYMfi8wnz1cGjmsWHNmxTAzMMQDt5L89uhvF7K7w9EbyovPRmXn9wqENPt6XSQ",
  "key13": "57U16v9SyesDvnqnHexrmR4U4JncVDAtdJkUeR3YkJ1hb8R9GEApQj5YyYP5oDAJfafaNGCE6aZuWGBnMB9eG81m",
  "key14": "3LBuSHE1Y9Hn9beYXQhPNd3FToknudaQ4d59KGx5D2DEfndS4GbaAi3RDXTHjBUw8XdPKzRotxUVngaS84RvHbFL",
  "key15": "5dj7zS6eHXuBiYjfaZpyx3gY3XNC6RvwS2C3PCE9s5AFD9W1jywka1f9HshWdW4CqpYTkdNy4taPNAwqVmJZUBi1",
  "key16": "5Mdqiu88K753nE5GhgrAGGkubyNeqtHZ9PGMwJEeBCi1X98e4z1VsbVD1u2Wcv2k5vUVmWyxyE7qoFuCC2yrDcax",
  "key17": "8Y9p8Ubf46ARkZspaSWhf4S2fakTkAuuVwnsKk6tm4h6QHQrxM1orbf6GyoYDRBU9Ghtk5ncW8MsQSZV7vfxhTQ",
  "key18": "3rGoTsXAjf49GAhXtdJ8SL785ebx1RtHxjt8z9BuLRpvGze4KoN3WryungJ9hKDcuu9iYNjJ76n6PjXpVXH2j7r3",
  "key19": "2EFYZboHtdSa5BSwVb5iVQQEW46QDsKmiss2u4teKFbpyXFU2mHHgubZy4Pxoq8Vs1dFyikxAgqDaUG5yBrCBBS7",
  "key20": "2p5JGsVbC1L44WQXmR5cYDfqKGRJFSxWhrg8G7nP6K5MzYHLdmXRhRyrdARYpSoDJqFR9KyA3DD2Sqrxcbqie9Su",
  "key21": "2Gj4yhHJ9hQvVy8bxaiqt2tR5WctfAQZKbHgSVrigJAyQ3hDmnCZNa7MPtdXo5bRV6Evxm9Z2mJJFB4r5JFrWFA6",
  "key22": "2Xvx6MCrziTqwztqGsLhV7nBG47pipzimfaMaHJVdHcY86Z4fYNjohhvMxb9ua9ehth1hvDdLotwV1HUFjiZfhHt",
  "key23": "5VNdZoAZUepKAxAwCZSLgSYvyP6yGiSJ3G29v9TsN5BvTWaPf8YzkjHDbrX4Sh9z7WmkPePesczy1jAM3zqjWwrc",
  "key24": "5JmgiFEdQrXutEdSegWmZKzwJ6tBkMWJHTRGCvrGBjNJxk64uQdLrrZZdaXyzRDYyW1DszCgxF57dLLz1cajgKZS",
  "key25": "23ATfchZapFkg2f19WSaqzNtL5a2abexGkSdyc5i9udkp5GaKqLajvA4YYNXPKhjRx7SWETQuKKit6LkPKLJZxV8",
  "key26": "2ptk1aab9e1wQ2rdMGqU2CavAY2FzRCeXzzUR3HnNaeYUj8x8W7E5GzgxYXSdTegC3jJbV4ZbfRKtun6tgpoAVA5",
  "key27": "gtBi2BBNRwzyJNGVaydsDpnDYSFQr3e5AprfaMGGhQgWpvhLDv2iRyecNx5UicBcBxj6A6MQ5UpWieLCCotgV2m",
  "key28": "3SyTF5r7bwp8GogaJFTs7H3tL38VrtUkoSBqDEMYKxrK5WQJFkGDnPjWYZYtMkDz7Bvexj5UWp1iB92meiXzxsJa",
  "key29": "4US7imECRa68cnhjzcHQgto8tXRpjpAA5YLxYbNVQFWyfj8wPy1BHpaYsacmvix1WwZfx94sYctqC4DkC57gqAR8",
  "key30": "5NQcpzHaf8dk9bxrMEPbvTX24H1WB8B2SjuVaNiJ8aLYRge9KNQScxGTuPFUYmiSwWraV8MXGQyMsVrH5ZbZTiGK",
  "key31": "3tFhKpwunWGgmSR6ybacBd5XkXrFGsDFujw5FLLZ9GsY2B7SxHq7tum96fwgFsmgmJqWmgZeswdEE1CCKdnJH3RJ",
  "key32": "5ZQkQLHiEpPtGuFphi5yWUkxDPTG1G7nsnfkbeGKp9MTCtZjWxYw8EkrtMTcmEsPCpzNMoREWreVxjz6fiAqGSzS",
  "key33": "3XDMCm5H5SoojN8NUWace15WZa7tVFrnvYT3Ynezeox4LT1xBqGofnh53SZf2JwqVDmWTDxUEp8ngGY4tRVWy4pz",
  "key34": "2NdBAJUFZcKXsPeVpaLv9UzsWQSrsTDMEGeA3x1uEKLiYtpKFdE7HsBM7ePR59iCHyDLbJCxZFmjSRDVdPCZHG3m",
  "key35": "Z2xzDcZa42MyDr4s8nxSKtQQbrfTcusZj8LCXSkDCgv4eDfwUts76YV8VZ2yUqZYHMaXp8S3ADFZGxj6UjBqEXw",
  "key36": "2Y9vitBQDKJmgWSgn7N66FkQKMoL4PEZ5KzrR5NNqEFZLZ5NSPT2A1xHR6bM8MkH6CtT14MTTRWfTFF9Rc6cscRW"
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
