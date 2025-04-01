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
    "rU1ipmM24YpR6gGHacGkGY1D2ZvZVnkrvBEhkL5rAQx1EDT38Si3HHWojgRUDbY69fAxtrgxA6Auxr76WhyR8Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ssoq4qncjNBtnnn8PQpmQRA33qp5MQToNJCJ5rbJjY2cMFCyXR8FQaf4D7nYskaN8WoFV9VJTpADkgr9t2DXwnX",
  "key1": "2cfQVAav8WuuqmKJN3AL4eWhS1RSDun1xSj82pF7TAxq7kHGuw1FFua5NvbgwYiMRZR5HzfntHu8pL4GgSGsKNBj",
  "key2": "5BUPNkXgKDSqqEDKiWHxDYB3hjMJcPdCghEUu4mxofLiWSHe5BEt35NtdvmJJssQ2BUHxgtdAtENxAtc3kdF4o7y",
  "key3": "33wqm42PoqVy6BQLWeGizUHVKLLW2HfL4erhezb8nyqRBtVZm1swUM8KykPhpJFLuLvxZnGwhaBzKEeWmRwUJ3C9",
  "key4": "335qVz32tHfzwsRDFQx19u17H7LGAjjYwYbt5GVPznSEBCpDMvBqUij3z6YVo2JpaNaXna7aFytQVBWtHcMiNykf",
  "key5": "4JxifAWEZ3To4b9sUFC1YHpUJuSd2Dg8WpeppwK7HDmBCPWwEwfuoM9ZWNFp6vcMLHKWB2yk1VWgwyCAfmq9xGJs",
  "key6": "5Svqak6StWkweEcXQdCbo2HxSVDFCrCnmEwXzaEa1u82NXRWb6ymQGhApMfKm2U4gGJK2WkpCaGRT8siLPoeNRJ5",
  "key7": "2Di2c66GxNX45PqrFa3mXbu4yM5dNnHhfWs5qJ4LMz4vM2VMHP2rGV7pV53bsABgKmVjhieEc8hVXLfjXFThDRHB",
  "key8": "LrXuj4NQQqvRDtjRk5kFs5Hkfc3vACphRqHkP8zvy5KJp8TKgRNBFruqVmNycYEYsyobFDFnXtAGTeeKeuzXaB7",
  "key9": "36Vok9NiDdFaHcXbKE5vgXGYGumPQC2b3D65NGxibysJCLjTeAykKuxj9CPU2PYQVursHnxhVnXHrT3N3ac9Ly4t",
  "key10": "4pdTEQBZY4zxWGpZd2oVfnz1cFLNGtfqPCMJ1uG4ETWwDf3h8QGHXoWzAZ4EqRbf7bsP3jBUhSfkL5q3emJfBNUk",
  "key11": "9PD2y5E7WfLMmPQGYqUnYZim7EhMg7fXXmbVYEWKVo3Wctn14x3d8YAh9MxGhYMhDENCG25tpXEW4gZrQvthDUc",
  "key12": "225bkUDEMeHHV3pnz1dzUpXb3N87u6G1Lhdqr8e7h8m7Z89p5vNxUyG6thWijQnQW4VyNeHVkVxSVSUe7FtvpYWQ",
  "key13": "2pZgTK4uZD6SUCSU1oZCTWs2V6iKeZdTia5R66dLNCZbLSLP6JSVW817md6G2gEXDQNk6CShHdbxBaTzRvt1Lm6n",
  "key14": "51ukqXiqG3gzGfLnCmW19Sd2cpkcQAhjsWhRu7sd3YsNzXvJm56UikaYiWtmvB7jy7DhR5YtB5XTif9GA29D65vQ",
  "key15": "3pbjq6NnhwH95oTsPWwGYezu55S8kptBxjKm4J8x1tcjBMZuStoeQNrgRSwh9PxWzqgu4qnbhMoLJxfYJBZv3zHi",
  "key16": "5zSBN5XWvS1mvabCweZnENAGhDojrLTErBd5N9YTF7AwCvgdEUgskVJdYDn1dxw1Zj1pfxaZFTFNT6NEBRYNDvRR",
  "key17": "4mi4oFqKyAnR1P8dTWELiEFUUZSN335EHRnNt15WidbB6umP7KZ5vc2ZtvZfdK85i4u6Q6AV6wX1JRFeXveR2URW",
  "key18": "ZzvvidqGZiR3CUFTh1RiTY78qRcW982WppkrHKyEp6Rf2Tk8Kgq3TvchgEj63iKetDajs5J4qU4j7q1kJKFcthk",
  "key19": "afCnHoqvh5x9ehJAZ1js6L6hXKHQ8uMhG3UAU5vEs6eyQveiqonQCzJHCwhd5tD9cDJ413qwkwYauMzZYdkNadr",
  "key20": "2kEuCW1K5BTJQtp3awLCzUz2f5DvirRaALBEyK88soG9cBpM2Lc7157kUC35byhCfvxS4d6rPT6UQEfG8Esdidva",
  "key21": "2ALSCWXNoGufqfyMAzd4mQ37XevSfjwNHC6x43GLLY5QZyocLn5keQAL8ngq7qCp9FG8pXXyJ8vYb73WMrs9m6R4",
  "key22": "S1ENGiBXc7SR3sr2BEx6zFFfwgJQyF3tSKwxFeFo8TeT8992Gk2s1Nb7SpNAwnZu6rYDRw62tCDoUqScNsozreH",
  "key23": "pyZcfLKMVoXhhcksRP2LApFX8AfYYbCD12XEnCcWK27oGe25rAx5xK9N67xuydnMBt2icXfypc2QUEEfxvqD8fP",
  "key24": "2rZBGm6mCfBvNSb56FB9M5VhgwmMmwvDu6yg9Az3YCgHpuW5m2uSDmsoyqp6qYuFjG6h5k6XgPcYucvKkKCGHDc",
  "key25": "4gNcwJUwuY8Xy4UaMD4cRiaCtkS716aYq8pY9wVQzvGF9EpXtuow9P3kfKfxG2yLX9qDpMEa69xSE9Bngd8YnpGG",
  "key26": "4epqNpck5wrQs3JJiG7zPRxvY59Jg7v3j8tkZEekqvw7RojfaLxVQokxM2XPCK2S5KMeWtSGgtzeihZbt5nHx93R",
  "key27": "4e3XYA41akcfKH7XdtamZDMj2ydD1Qh9eeipq8HMLx57iPb9Lccykduie6fHe9hSVAf2eH1MLaM2rtbtVz1jmAyC",
  "key28": "4ENVda4ycHvj2NQpoqQ6QDQrYYhy1nqzdUbHLd7xaSx9w9JHJoiWhKgFCUvp6tqYPwjEgCyWwz7ZQXtV4eA9Jhrg",
  "key29": "j8eXVZeoaGnQ2nJgcyBytqoFuovnSntHt9RgeTCxAgGjjStcjjyhwx9b2xbp7yQS2TjcotXirbjUioytrPD6nUt",
  "key30": "3yAoe7KfKfSG7kRuNPu3mE8G7LnwVrZee693Bivybbkrd9afaQkaBuE5jMhcVLLLY1pP5ximgfG3ttrLUrvnCu28",
  "key31": "mmXLc4Aia4gowiKKXhC1RCiRvkWe5mRdUQmgnS4Yu4sGvWemPc3ms35hXd2WJ8YrxEWvduH5h1ReqQmSN9wrhGA",
  "key32": "4eUsLDWvMdPmX5AJtAkTLidWkCwVX1LuJwiUDsJbehzEdHagjz5F45UFs5eGKS4Ag883gpSgsSeBmUebrXhRiQLZ",
  "key33": "5QY4BhnffHzz5yfC9tVAqGWdcBMfX84pvZ7gzAeK4cPCANbvGNaVxCRYSbjudxau9VCWzwiK5rjh5k2ZS51qYFdn",
  "key34": "4kwHHJRnsqEHYvtyhMDi1zmnnSiGodoyEGuDpJzsWcAykBzovYLbhBiwHypoxXGLFa8eFfnXJxLfWJHChTfYQwNR",
  "key35": "36vTA2Wjv3u2ze31YiBHHwZr4XxmvxiyQXEocfpUhKzQTAoyPNgdkiDRoBacVfWZumespFTscP8C1TPLpR5NeioS",
  "key36": "3J9J7SNiYbaqCBk2gSRtatkDgjUKLeMGRBtggU6xhCcBfBxqoNZWTcfWYD8pAk4D3EjVgCk7YYBGEXGgc6tSgF6S"
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
