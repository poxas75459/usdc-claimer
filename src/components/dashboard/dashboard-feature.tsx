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
    "5sQ4xDW4es5dFNDgeNNoeKR3TT5cwWa7oytBA2DN3RaL6juDC1s2ABsXnywLPWybpnnQYYdunLV9V12a8n9XwiJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ypcjAaWJe68nz6NwoUnf1sZ2TavzfiJV4N3GYvZRrBU1M1uPj2sPLoyB7d7ZNN96Kv1XPhr4iacnkFZdPd6o8vu",
  "key1": "3TAceJGRa9Q6pCxSrH1jWaRrPrzATTpSt8AkLNeytmvBkZ6rhbSwKJTzsDctb58iipwjJVNR7GRC6FuatEYx4FhP",
  "key2": "5yDYtiHZ7hn1Zxr32gMJBnfCbnrobMHCHtXGwZsKBrhAvbvWyHtXLGSnUJTvf8HswZzeuxYss2YwWpE5G6kMh88T",
  "key3": "5VM6CBjAFGiy9MVh9YuuT8MhA51Qo4NyQrzfXRQutKdYQmoLKUvp8bjaE57HJsYcxXrPiYqaDp8DM9Jqfi9xmBWc",
  "key4": "4V4a8JZc2mHPQTQH3wsdqx5czasHpfcksCjVZzaGF1UAJ8hsd4ixNzh9KCVbX3ecXjoibVCHTjihaemr4rPw8Qpv",
  "key5": "5ZSN7SCDGgzsQX4PiUS4KLdpXuntUDAa83Yx6x5W7XhKDLUc5DzbDYPae1UXm4DUxWf9jgccBRHEdB5qkko3ScFP",
  "key6": "4VLSGEZpUmm3vWotGC6fw2nXxvwyUrRQM5PMbEF9wQ9YpFGXgXD3Lo6uicfkCTYXrsCvRFj9vvjezXNxxF2MRef4",
  "key7": "5WdZ2V3DTNFhGQTSeZv6mAjRGp1kTHeMZPEjrBNTPCJL6UTr4U8Pcr3twqwtWsfi8uSyvULcteDJ9WromAaR15xF",
  "key8": "3Zf6XbXZEmGgYhAg9gUfXTPsEpZLyX7iibAgFg55uPWJiJAY4tpxi8cjgN6ntZdqmSCr1TQtGZF2YStiXwdK7D3Q",
  "key9": "ZLpWBJZFuiMpoKtWyaTM4K8zbvfmZKjaX7fSCv8SPeuhhZ4VUXnkYFBBqZVenGXo7C7xs3mmzVdqwpYZbWGLY49",
  "key10": "2KS8UVPHVvLeHBwbWwTo4LNhYfpK7RNTdi8rUEXzaaw4DNgSKWcwf4QFBqkL6FzgonLHqFSAArhUceuuAYsKjZ7C",
  "key11": "21pyoK4aupU1RpqVGjtWzid8gUBhQD1vJx2sSbt61nDgKgVcBiaEZykVYoUwARCKnLnmVVwFJzwzDGdbAd7eu2xz",
  "key12": "2SHCHaEhnNGcQs5fBPu24j9yg8Sf7tZ4DNgVYFhtEmktFyuoaXmFVoYR4hk8nopfMBo5q2HNe6HJSQgT87pLEAmz",
  "key13": "3GZc9rGJwmHQw7rKFThoYUc3XPgNXoTdMFZgcjv2Myz483WQ3h7UHEAB67HuJsFi5izpuzCAdVsrTkqQLcRPsDW9",
  "key14": "4EyxXHgLyiBaF6KgVYy4mp8SZHqxSMQzvrDKEnRFztMCcNBLgr3J3khykT8v5PUQPa7YYCK4JdE8DNEB8QA1ZcmS",
  "key15": "3V4D5syaszHpNYszon5ZpjPKRAqXTHM7oichXWjzexN1o4zfWVJnfiCz1fwoBqgaP4A95phK5dXRi7tJzyuBfULf",
  "key16": "5H6vtPFfqv2BbU7nGtumxuXyDCKN69Ys5dUUonsQGnxhH2rJxZvhM6WWmV2GJtrruv2Kc1pYRfwKR2KZbdwjhHq3",
  "key17": "qJChK7XpcPBDLU32HtqmDngoEfd2gUptKXBeStm9UHVssd2NZB4ZqoaRD8r6cBQdMnUv7VnNyL7WVwBVuE3Sg2V",
  "key18": "64GPNw4oJ1mrGv6WR9KDqafGapTZ1FHmeZN4oPdG9VXC2hSgBr8E9kNExK6p8eGADKtYZRVP4S79N79X1YEkzn3S",
  "key19": "3At4TB9zWkb3MxJQH2887PCGid9RkpN4GE4PRT7EZXcCNEds2DFtkeSy6vW4SxDw6WjCTto9DqLSoxDtNtbqbWGL",
  "key20": "4bsGz3T7q86sRZVdsfzj6GoeeYSmSnvXBD9GYKYrfDq8h3KTP8xzeNAoFsPQkPBDKDjWutGjsQjtqsSm97SKNyFa",
  "key21": "4iKGovaDqK4ZGysTqSgK1LpqZ6mhbLQCsTe78db6K4K5gNB2KTksgWz5fqTDCfEjJYKbxe7XJ7DVbXxvCzaNWJGB",
  "key22": "31r6FTdHx6NVJ2asL19dhQDgnCC3utuepzDyvvg877W1uT8YvMgzHUgXXRiMD8Fe7sWYUau35wCDoWbvsnRcNE6Z",
  "key23": "5y9NVpCtqrdMnv4q3wk38AVJzYZiSyskJ823TeZ9ffrbV4xiX9K1RrCMLeej7zZTiCG9Cnvx6fEY7Q92VMYHgxCL",
  "key24": "4AuhKjnQHGsH4KoiUuNDr6P3qNqxa2qoiF4CZia6LSMPPRgpJUjGmfw5tu6QkchqzF2XhR3Y8bZgiKjuKabY7jbN",
  "key25": "21EH28iQTBUeDQxBT4m9n27nvMhmq273jDpoxPJ3efqnCtSciZi1mTjap6xA2Ejx4HrVbaijHXEoDZSTxHnqByRh",
  "key26": "5VV175dVFvAZfGPj7f4wrorVLX5YjSR8rmQN9BXDi5woNMvdmS7yVEpp9j7ZESK4o8AcafdBwWBvUKrsMcaqQoB2",
  "key27": "5D5pub3waRgCPAS4GeapHmsBtsExv3U9MJiZnStLVYhb9t17dRRhEVe3uWTEHPoiVSnrfyTqQ52NtfYMqqygXsqy",
  "key28": "35votBLCFUnV4QuweHV12HrqeJYN7tFbpeGKCXaFfRo6f2Fm2gGyepStqyM1D2YacdeB2x3721KYGV4KW5qP6wRz",
  "key29": "QCZtknBCBQCtUMkn1EkWX6mwnRwajkphXGYdK9UMFUDEW72aht1XdbFVgJbe5NmRdLsCb1N2ztJSbYQNCjt2YLC",
  "key30": "4aAmgxWGPvnRYdHxk6BBR993nU7hSBp8RBzeC3DKvJGKKV21kHvT2ddHRwByF93i8C2JNyrvrjZQbLk5KAaPDgCV",
  "key31": "xWsqmVPGjjmMfLKfPXnrYjG8xFanmbqhy5EpBrm9AG5Eti4oyownF7JpVM9ouPCz2FUp2XJTma44gdG5pEMuF6X",
  "key32": "3BEgyWiCb7BGJg3654kzKPK68iYpYPhyw67ahjquMH2QcuSe6ZhPU9kVqWc9PsgLHp1UNcMDjTscPp6fqggdyjhc",
  "key33": "6aPsKS8pyHnLFnZ7yfSKotD2oLrQrDn26KRCj6n9Roza24RB1BPqMp2bt5JpqKzmjC2f1K8wvTxuQeagEV8VgVu",
  "key34": "2CSH1fhFurz8kCgxXnXspfDfq4r7UfVuQDQbgE3G57N7GQTtYXBcJBQeFWuKHTKSfW5rnhwXSfPgp7s2qf7Khc3G",
  "key35": "UJmRZLGq1EwF2NUb298BNNDdLbAooavegVPBWSJMJj9tHnsGhp3yDTcWxTdoqbWaHNUuD5RAdAeqSCQz9qXkswX"
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
