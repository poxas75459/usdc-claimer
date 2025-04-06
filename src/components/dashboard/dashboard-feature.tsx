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
    "udEhufdrk38JyrKZTZfW4WkEh3kxkP5q1SbubhQJXjU17GfKMSDtCud1JGPNVDWrDxGU5W7zxoFLEPQK1t3rUaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcwjQjkC9pcXLnAnnU1jGGZHEcR8QJwQA9ofgssct5LFJAd39fa6DtQG6FgLQR5izuVzMXBQijpxYLBVGfmkaVc",
  "key1": "3FJStcVoqseYbTVMib2dgEXUV5ctZz1qqD6fyVuq86jAZYQVPXgrN1rBUHVcDNsBf8gpyFW4eLaEQosmyQxaTKA7",
  "key2": "3uwjaRFoqh5x58nb58VyfMZ7p1vs1KqzbQ1VUHSWDMFq1pmzZHAbNQ5MgZ1xGwSgJYQdd9UJg5Ku3CLwyTtaubkH",
  "key3": "5KD7aPAnoj3KkVDEHW748QHLqGYtWcFVxRyYpinU3qwzzNuzSZjBNXj4nakKh7vNF9FUXXMNHdQCxeKErCThg7Ch",
  "key4": "5qSg9wo3Ganc8vGAMkZGVDH1N6g5ZYVoXV8FdkHKnP33Ty1kKEjqbZdmEJqUPR7R85U7ZvAj8FGYDME6QpHHCjpp",
  "key5": "3hvTFymUrE1sB9R7YFzg11ttnYDVMMz5wd3w7jmXGK2hEhg1b8iYv5xy4naaXPRq6muxfghxjj6B1EAs9MhYWyC6",
  "key6": "5ADt7WewUwnsHwu1zEFCcYKZcsjxXVM8TmYWBiUgKmq4zcXF2j4D2rhu8CWFGtQgB9nxiHpbki7hG7FkiTCKrZXR",
  "key7": "2bdJA7qpSZewbdsnVwZjt3br7BPqSjk4WQX7H7XaTgaMLtEKXsGvzDaVShryQxi5gaHxeLkY1VKdfvcaoPRVBfUu",
  "key8": "2XS3CofVrgCg9TYfHWTR7eBbWrSwcm6ogWfCbRHDzTQYZbXbsUMKtyvWFjn49cPbEcawHkbzwVrck55fZ5yzQ2oS",
  "key9": "3w1knttPvcBpfstHWZcNKGQQohJc2RkXVKcEJhzoppV3tsZEvJNKgdLygEJS7KX4Za1xJcJhFa6oSpxtf6YWN8e5",
  "key10": "5QpNrARz4Q7zrTzCGYFbswTE6Eshuaxtnoca9hbi5KeYJfhLwSdTEQrqAsnDKmYkUMz9pCWDu33HKfqWisSf1ziW",
  "key11": "5RuZtQDa9PyKYgqTYrr7nk4AgL4rWVWFCTWDeFiSLH1GdvAQfGMhxTSZHiq2qLuX1TREqBVD8RJcKw3U1ZXg5QoS",
  "key12": "JhvGKg8uMondpEFrB3tKP2m3SrRgi6ujvpK4sBNCjKa9EpvGaDGgt9a28XJAmnVvmvE6MYWR1A982pa6ae6zoNh",
  "key13": "5sJhmhWALzM7u33SmJ2gUuKoeeBgSmnmmDH5mdrMD5wEVcdQsmSHxy8L9MqT1Lyi44Nj2PS1U5WARdUufGHCs6JQ",
  "key14": "3P3UZFitXZpgTnviqg4MdYFAhNkWYuZLDoWmcL6k8Ho4xBLyY8PBC2xPTfvMuGRGvZ4vY7MrmPLVho8obdnL6Wvp",
  "key15": "4H35896MyovYaq1gQvxr6C5uDxSxynThnU1sBpJ6RZoorPmHHeGG36yqnvqU5NSBn9aGia2yA1W2dfUkQX2ELMFZ",
  "key16": "5N2YDWcc8k122iE3Vz8Afq2Ktz7aefA7gDQtP1SUS8fNSBNSRpPU2F3WRf6QLTHwE1me1eDTguoDFmxmxj3Sd78o",
  "key17": "5gSrosZhez7ecWvegNGfjShi3Uyst2XrAJUvLp1dvtn3nnZTsiEVPBdSvM7cK6foZtkVeUAb9KRfzjD7dsMqrYZP",
  "key18": "5J8nuct6BUbZoQYfXjNe8Gj7ZbjfzdWaEhXfeXJ414hqcRSXDRWLYxGvgosdAo2UwN8uGM4wcz18awFPj4e4oNoK",
  "key19": "sm6MYuKVGuvdX4ax1BV1eZiZfMaVZhBZ5aVArbUmyXhCa6GJL8tmythiTiymE6VtgM9tpEfHZkTH3ZfUEZ2xSKv",
  "key20": "3TnTqLWazhcmKjsq2SrnZ7LnypKtoKkjff8CHppiPe7Xkk6YB9iX6oNFoadAa2NfKZoEeb1ftQBwyfB6bg3bbpf7",
  "key21": "44VbiaStGVTSL5asVCuyKqg4BnE93S5Rx2iNK5ogdk5hiuv34ubZstPes4qHmE3zEwZpVaEiHWhXqg59yqvmLR1H",
  "key22": "LEyrcGRbWM42CfQjbXHkMvzee8vmJJ7FxmQ68yEW6i4DadLUFBmxjv5AgvjFhzU2w5VoScJsAyVMwbjfCabZtRN",
  "key23": "55RtGLsPo5xs8f8L73WJQuw3su6uLEaSU9TcAQSjdLgGxKWsJ14ewoLWTNVxauZ5VyVD3CQbir8PDbs7yPBS2PAs",
  "key24": "26CrPSZLVGDwRURx4eN3VG5DQeDEN1Jwd9caqyzTso7PpsRLEUeQ9NtVnY4FHUrQKZeRdCqoKtJxZHkBsn5jodB3",
  "key25": "Kt2RSB2HSvYvMVCBWfrQDGCKDtJLvquwgXZaKgHywP5D7tTersjLJ8oFZ81czGs2nCrakBXvrAAhi631gfxBmw7",
  "key26": "3rVj4mGYtcD6oGK3wNPsHRfWeRFShdB5a7YjhEnyJ3hvUbpCy7rLTXQSV5y6ubWMjFpn3HAje9UYSWYq4oAg7jdo",
  "key27": "5nv7VABF8kbYQMQRcK6Pc1QuaWKTcZmS9BtCXH357ahwdTV6GP8KjjDykpeT34XHAvhJYeAEpGNZ3oEPTnTdAxsP",
  "key28": "4jmSL6mFmfAmTqWzLbCiT2SnjzMa6kae6nGbrHjfx5FfLeaYEuQtDf8E7j3dXkvateaou8miNvEQ2m4zMGPDKMwE",
  "key29": "229PimSPtsvrqsYhypiBhnmtirHGF52ErXQLpqJzxvSRrgVBf9KFSAxmFc3X4UwYpvD1RUuVxWhY8u35VczABhgC",
  "key30": "4omKfjmDcKmYfFmDUhDSq7JTjAq74cZeAL1zGJFS7VNXqm6m2XjFzafoL3ubQcX27k5viwG9yAvQmBjPUebJ8KLj",
  "key31": "5662woyN4c3oHvVA7BWbSV6C2qUitunNeWpD6NJ3JgbZTepNiWjLzwsc98KSvoSx1MAV13RGhPLniRpDdqLxQJdt",
  "key32": "5yrid3k7JNgGUqeBzDM4DXWXm2iHAEjNx6zJmcLCEayWrMG6saoRecWZ7Wtkn7vp38FNQSKCFK763PDU4wC2f22m",
  "key33": "3TJX89vWz1j2K6h8QDGJoBGFkiJ5VqnFWE2Wst911kzME11tZ2ACUBr6JtAUh2JDRBd2tA1b7pbvd4HhP5iya85K",
  "key34": "3nbuWc5x5K5Bo24xJLKYXHfYFNK2NHRLhyr8hCUWsJXwQPBfDyGsjkrtjoqyFCwgy1sdM2zaxjfTc6ywb4qdFNLc",
  "key35": "3JsuF4FpBkPUw4SvVv8zRAXRQg2huFu7yvevraALrY2NGfs5YyiGMgM6puEWwFSp4t4tgoqT9bncGBTWhBZ4Bc2k",
  "key36": "43VVZPHA69RPH6rYk4LqCtd8RJCzDPWFNPJRxBS4WmZK4mi71gQzdbwX9iTppkgSNARytTQmZGNRfBLAjoqhYkfm",
  "key37": "3Jzj37KFUa1NukXXGKC5wAv4qVcsAP594rPWc8qL75d6pNzpgsYhRxkq2Y5NsdbUfKBVa6gpW57uxBmQkByKiyfY",
  "key38": "M8pzNUfpwoM6WpCz8HLV3X8Yv2RpoeN4XwiuM3c3pnhtqhT2XQcN3co8cuWVQMe8PF6nFrDgDnVBLvtXaNmiJb5"
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
