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
    "37gcXGvYnkto4SPSrpf3xu31JzJHZ3cW2aJes1fYUVuKe697JhVhXya5KnQB2NrzVWTGePTYH2oaoaKpUk1U9iLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhQ7pSqxE3zax7NSn6LtMMgjN6xUVVFL1GoXL3bZrormJbDC4fF6oGLPH1DpwShwwTt3qCBRazgNod4Q5zCp8jn",
  "key1": "5VnQCyA5RqR6FyboRK7NP94UoBGkqf5Wew8Z5nTReDGLN6oC1Yysk4DFeYfeeFreYwQLVUzDEhY1UKp28CNXeDA3",
  "key2": "3MTKairRfBKZTHArs8MnEfQrtrex8gbbfPURbux1yARY8S9Ufnke9jEpj5riUafzw2kz59xntu6hmN1PEP5JaJUs",
  "key3": "phctr2FxwmrV4vzJAzo23xRnFqvn1emYykVwu6QX2wRFU57eZpPQsrYwYcVmu7iDfDw2SnM2zd6tJhgMJFomyaK",
  "key4": "3LGwnh1UTHm44AFqMWgFUU6r1WGeoRuRHbEMzUMGSFddjCWxpJqxnNHrwLXv2GBfEjW2kT1oZLaXvSHgXRSMZoEq",
  "key5": "5MLcx8ainkea7gCLNSZHuh1j4SFz9Q6JoNLNp4dJW6GDouWangAyXSbMXHiiMrGgdmp3YxQR7pmtwjMySnSDYgj7",
  "key6": "jpHeFNw4wPuubi57LkUy8SL5MSyvQ5Pp4UizXbqaDGL6W1CCHVb82x7tA9NNWXA2habMC1HY75YL41YrEGk6zYH",
  "key7": "44onUoNqESpxKG6hRGw9Xa7taRBUCWxrvgwc4vGW7H38YiWjKWZ7eppPzS1c1ivKFD36cVf1i4uxr7ySGTnPnPyu",
  "key8": "3PBMPAqSuzhSYdrTomYp1vjxZtj7e34N7QEpMHyDTwgTM6jbFRS1HfY8EiJWmTmy4dKwxzVR7DXDjUYvT2dL451K",
  "key9": "3pEViZJ2QihT2iFbDs5A9zMEUiHoX9gp8LWUeJpXmwGYmANpqmpFW1pSdxSCUJ5v3JNbADfXJeM1bDWPzm6eGo26",
  "key10": "4CeMimenE4sMmD5wiTtSw6uNHtwZSmM9cMFPHRS7GQA5XxQaJS7s4v3RmJjMSRZyH1WhFKhgYimjHVEjRG6Rysxr",
  "key11": "61dTyJ8SsHkBjKwyNJ7r5Tj64HnqvhzCWCR9n54Q9Yyavgus8Tb6esp5SkQ78pSMsnpXz7vHAN2acSmvs1YfTdbL",
  "key12": "56BJPQDKpW7w8U73vGYcQMgGJwgViuMzE9nczMgD4r749haWFMS7VRGk5cHjjMnLhydT4mQRWtFyzcoi8vhPJucD",
  "key13": "2soT77jdZoCiMDLe8vypTTqMfa9UTVpDLJWBgEozkf5dSsxRmazbiJb3LS4VmFyPB2H9q8rRznLMFH2nCcx7gb8w",
  "key14": "4N7gvTW98D9rher3b1Zgwumitexxn1hxTHfgfYLfvvhNRmbGTsrrmFif88yjhp5vg6MuGZsA97TnQsjwhvKPM2DG",
  "key15": "4Bo6rNM56c4Dxvx5oHbVmAdH6zx4E413dW3qWdwT3xXeDByv7DnzVe1hSoSYReyMciunzb2TDKw34TxigikPyJrg",
  "key16": "3mfXHNfeEJ9pkQA9xEVURuKkV2CKWoYtQqZgQNRyPieTahozQsLyJSn1KXacKgw58E3t4R4QpAZ6zGGuzGCD2z5A",
  "key17": "4FZAd8Efi3f8WbHGzsRBjF7XxV1eb3JpwGXk5Nm6QYx5TWUWf2Q77oPsq4y5E1fcxBjDdotP3WrXvS13Tqc8xSTC",
  "key18": "4bJWjxGnFcMc272Ej47cHY5BRTvv9S53cLKMwYUy3oTNkQCVbP5aQFHee7msJreVbnjB92dhy54TS1vdSGftR1qW",
  "key19": "5SAdukxqXauhdUStRQVqbCWFUzCw5GPoRuQgNhEEw3j9xiUGS6UJrFFnjiALQwyrVEGXtJW1B8vpHJzG7WvEsovg",
  "key20": "5TN7rBNT9rdLgYUTX4EQ8qESyuD9zPXzuz8YWoAgWHcpdoX3VhgJRYMJ2gZ3E83uM3UYwgnppmJwQWBqmnsCY2Hg",
  "key21": "2nSitRhc42sWayGXjfyb7E1dXJFGRfpiThtYf7XM6itmMEs4yJCZSbwX9e7VmpHTN9Qub6hZNcpTJmM8Wp8MBZWr",
  "key22": "7PWg8LjhCutaNAYENXmPB42NY9jkKYUrM7P8tBQmuLk1iHgnwNjWKKr2JXBagcNzFHYGZZWCQyWTZxLxyzUUWfx",
  "key23": "CyVtX6tZfAFL6vc913kxedMMXMpGWnbnaP7SSMP6x5Q5HtUqUCCoAZBJfJLFayaapw3iCYbdybYfUUxyx9cWLp4",
  "key24": "HMYTHqfoVuuxY4Gz9Ruk6fpSACfe9Yjoxtc7KkuiaKJVhGoFjCxCgGuWuhu5UJTHPWZUW41CWNbaYEKiST9PNUc",
  "key25": "5Eh7rmmdg5WuGPa5nsxE7DkqsVCPkqe7mKBdr2psvGNJhAnWRRYAifG683fuxNnp5huwT75cKkYYmTyev99ocrp9",
  "key26": "4E9y7NsVkTRnQsMv3aWbEeiar4rJ7znJorM58vbfqXGm7jFeQpsStTm8JmTDVVb3TQ7xyntJ4vypcHsfvdrMbnBk",
  "key27": "4fRBLAHdDovRXRtw1ux98RRbb5vpBPqQUf8jv3oegDFMY89jgW2ncwmitgZJLgCWx1KNJkR5K5jdcsM97KncKmA5",
  "key28": "37D47j5NxxDj8iNuMfWKLb4GcWFCHskP6CUYaaDpjXdMjWk6mnuRVSbd9Y6Bc6UT4Pkexufjhr2C7dBthVzaUhvb",
  "key29": "5bDtHqoTK1bum5DbcpL34DMJRFh5xWz6dnCDtzJmBo9n3t4q5ayr9omFUtNj3DjrDKsQdzEpCXdubPT551KUHN3y",
  "key30": "2UDcC4ZhTrHwMpcjzvWNysPw7TFdL7jab4FEFXLq1yFMPy8CvTNtkEkQh1VGgKfTCp8CweFkBvgQniw93K24zMK7",
  "key31": "GUESJStE32UxN8ibe1w3uL6pdzKseWrsZHVGXchcn6GkyjVYJDghVU2m17KHvDMLkm8cqZEMCfLzLJ7M9QPYiuj",
  "key32": "4A4FRQxNE4P3JtfogN86fNLtM2U46CH5xjhE1rqHExf3ZDfUu4oZL4K4XoqAZ5KLRfmfNyA8fNgYyus7yTntXkRm",
  "key33": "zGfUg4xiJXaicFdhkL9B3ZxFnwF4dmKqZdCqPUTY16MgDpsL8HR1TrnirKNzkJabcVkUsJEYyWK7EuGLMGzyVJu",
  "key34": "FyYCS2SRGdJJ2BiY9GYrC4E6avFjqWUk8ogKtnt9CAkebeBMFy1mbBvdPjE2Vnxwrys2yJQ46WuUB9Y7LKPtLEF",
  "key35": "3nn9rGyAU8VGFK9bzFUBPHp4CYA6rQM97eXY9w41e7dNgnAWRcXddAChi5K4k6jcMqJoMfhKKefPLr1sHr68g7dV",
  "key36": "3ncQ8VrmqivQYHLXxwLGw16Zd9Zzk7GRUXphbGFRH4VFuZM7Nr43Db4jA7xanreceBEFri5gpwExYis8JkZpqjve",
  "key37": "4ojQYeaF99yJ5xyJJWCuj5z2nwBWXtbLZ9cvVVobKaJy4R5at2iAqLcX32NLMspNjgGEGCSidEMz7KWZfzNaCvaY"
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
