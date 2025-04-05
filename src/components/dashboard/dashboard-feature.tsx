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
    "3EVZftLy8KPZeLBdAQirNcYqX6ySX7FBKi7UuEmqqY2Q8UAkAWEfTn1cuyKvW862TzYxbTqJshoEfxB7gMhmT1nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UeJqYL5XCDmxpugJrnoLG69Zm2YxdTdN1dVUToVBJrs4ywRq8Lrtkk7yhMsLQEKKUoMiNKvHMJz8wQ92BcQb7Z8",
  "key1": "5QcgZTyyrb9ETupY8o92b5o65UZQF9EQGTRp5gfHv3SDVJnDJWWPreBs3HXrp6FQ7tPpBus8N9V63GTBHPaAZ8S8",
  "key2": "2JLMTdZZeQm97CyqWAoCAEjqcZ4LkJGzS4xwYKHmjH6wuYFP7LvEcU6fewqtqMruscvuXG7Fnn6brtbCvNJ4wMBX",
  "key3": "2fJggpDnrqcXqqkQuETEwvymbKAMn58TU6z2tZ4R23kiogAGyvM8uwxEf5PSgBC7BDtpbcYPuWaYBGbK4Pk7sPew",
  "key4": "uVjjmeumBnmaXSHUSrqxLb7RnCnKwavS2CePHbTvYfExBCmXbCwno1QwJXzBGoSJ86VFDC1ajmwTQdjMmMhjehX",
  "key5": "4Vi9YUdPbsVcPdZyJNN6jzvBai7RMUfcTXLLCc1BZUzhwvY3Q1npFvJxq4sudJKHpgJKu189okEXnoP3UDTt8FB4",
  "key6": "4GfTD6JViVSHJeveaPPJsihceEb8qnuopVAHSryy1sPdpz8MmNtYqmFcKJJhvXy7sW5oR9GzuDRqNhcmqACepGJw",
  "key7": "2zz8xtqLah5gqHmdwaZLEhsp9T4a9a3o3uspQmqW7nAy2iZnrRxm2tKdpitPdbgP3ty17QBY7kC2Thp9Vpcd7Uda",
  "key8": "4SDaQYEhKq2gTjg8iUD4eEUweFKcSd7AnZyKbX4eMeUDjz7fDqbJ66WU1qr7WkiQpJe3ymQ8gy7QXbBJqpyyFgog",
  "key9": "4U9nkyW3GDKkekkxw1mse9NJ6JzxLbeg3gGysytojaeJgKpgx3p1XokQc9n13j8Xz8JxrkYSqEDic4GboHjqtjf7",
  "key10": "3CSJefgYYg59yVDuztEmp5NcMpJajwRpA7jzJ4PViYQB3hozAci8rhaCh6QVEQURiC191JN2RXfwKFxLZjGwf7Wf",
  "key11": "kCGntFBiBfMKoP2sVvgWsUq4wyHBsWtsfLxBrJ4CpcE4C3zUZuvuwtdWiHF3uQCVYhAofL7Hnh1WP33V7qUaBi9",
  "key12": "31tviankQ2rsC6dP67XFCHws9q33vzeZH3oSkRzMGYRzyjkX19M4a4g2qAYi8r6XfA2S5nHEjb86RV8Abx1ZZM4r",
  "key13": "rQzJGL9jBBDgABMU8MCn8T9HW4Zu4JJrhgT1vUaKkiEgF3G1C4q1nhusWLj9zJqtYSgknfKdpbqha5Aa7zEbRW9",
  "key14": "5S3kRjECZrrPCy71Jj1kMSEmgcdTpT4TeLLCsBJ8BwGdPrZqS41cZ7D8cPrgnPpTmpLWgQwKyDsmqfNbquvSfSYd",
  "key15": "4KvnzxFnecsB1tw2a4o12HncSpVNoHaJVXR46sfDqnVvH8YLPhjLiVyqJKV1U9dDFXKtfpToHC2wKax5NuP4eKrB",
  "key16": "41aTQbpmz33cjsWCD52XFE98TQrzgFitP2qJtsQ2AYbExAtcgaFg9QCUt6N6vFy1jFDEv9qHeNwLLXHGF8htgh5",
  "key17": "42AaP2MY5D4xQycKAfmWkoqF2WRVGqetAKPYgmUoA9BZtq93wC2gkJDLNTdvtoiYyU3EYgrwZEg6pfHmLxUR5hPQ",
  "key18": "244SwVnyStnoTnnZqcdyMnhuSxgUw1UfWKw1CiMZTqSSArTfP1XzJUbC42HTQ9JsYwd1SL8YDj6ApttYXnYHsksu",
  "key19": "22FXg4QE75gtUQP1AUnzXLTesWg9en3DPz8WbpLFGmbdL6EaPE1gweLRjoM4cReYSr2c8KugqfbvabGrXL78KaRw",
  "key20": "2qrBiCX4AQGCNgZRgFfVzqg6HLMGEXpsnwSPuWyMbY2cjhJskmsygDUof5DS4FVpWLv2SfAsWWQEkXgzis85uZNx",
  "key21": "2itMaoribHDeQpR2huzFQgMTxu5PpTfM55cnmVjFr5XSWEwLjbDnx9i7LSjTnio2xHsLEEUkHSNzDGcAFTBTKFPz",
  "key22": "QQXmraKSfS23KyCSEdwFhBoiEEnK9m7LuQBVV4CQgpTZAqiD5Tj86rDkcYGKgxJq2j2zn48jWDA2xwaGwYeKcdU",
  "key23": "5wLq1NxqH7yH5zd22zog5QLZ4wC2x33TVoLQCFqwgEyYjnmgsEgmhRSxhe3NFDpNCdcxdDyDQoEuxPymWWR9D3Zn",
  "key24": "2aVi33gRcgHh3Ut22WSotnFjKeRhZvAAhkCDC6fYxGmU9JQwTApP33arg5d6RpqvntC8WPB21Fs3mc15qB3tBjTZ",
  "key25": "5SzR7tDrEfafpYvoWLCMwxQLHVMxUMXZaBVGrgResjdGvid7CyL8Pw1Xb1xg1gS2PrHfKbYYYPAsTFSWgNaSLDmh",
  "key26": "2pFVD2kT4sT1ZFTWAUSa3PF5SH9spViwXjmhkWUkvoSb7syHehjkTyaY1nMHdPjVuUAaRTVMhP7GLAbr4e43JCfC",
  "key27": "58FTfHjUaniWJaUnXUKvXt9NdmJh3AvxGHKNUdaB7xrnqkRiLn3BBjHW1PtQYfPoQA7321Er91HHtLXwGBD3bZYM",
  "key28": "5YMp7HGodkRMsSiYp4TyHQp6f7wdt6DcQkv6XPgU5az6qSGKCXNQcPeTHVMeBeqV3vrsTUMcUrW1JMYT1z2ZCRBr",
  "key29": "33FwV2EMT5VoyVsnyUb1c7W2THAAwJwvobTbpvoCirsb3qZUv5chVSbKDXV7LWrk9NmiYbxngpVUsfoATBtBJVAy",
  "key30": "5MRVWRNaiLLj6monctokzSozdi1BwT6uVTZ6eBPwTM4uogGjJRLjHs9q41CJVJ5cCt3cHRaJvCJXpkZVoKuPnq9v",
  "key31": "4jxNYtxFpMedY2nFYyo3NRfPaR9EVewDGTFv7mMUohMDsDgRL9GmwEqCe42YAgC76j8fbBAvJppYMHiLQtuFZMpD",
  "key32": "2M2zqttW6EYar8Tiwys4JZETLiEvsnSctv5zsjtSzPFLMdq6MNz2QfiyxU5dfRC8Dd6xmZEjSeSpPRCsGgbaH9PW"
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
