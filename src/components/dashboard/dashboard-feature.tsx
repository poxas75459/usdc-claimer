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
    "52yRYnfB75BKoWVcjWXyZ8SpFwt62PcGDjQFFf5JJQqdmDfHK1wZukTWwp6nCekZacfpr2PdiHj5eKEkuDhGMZ1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVoftU4N9wksHaR4Sra1uy2Fu7yxszm58EfsTCfhuTbv6gK2NXgcFrwkBbdJJCVWH1tzK2vvdf3yjsTUcPiJRJW",
  "key1": "KBP5VeCGTm4UTaUpHD2djbARpAAmhPrMTQ3joiHxEB5W8Di2TQEsALegqtEGk3Ts5qnZFLuALfvjTbvUeARhvAb",
  "key2": "G4nYDpsswUp4LaEM6oXhjxhab7pP7CeXjCssnjLpkn25rRJ5A27F3mTNiqSyfTYCTSeqF35MJZXpmA9aXdfHeBC",
  "key3": "3H5L8aDBKZN47fvgEdDiTdmGuF1MznJBc9JVcE9SPWf8wWJ8wnoQbwwxAPRkEwxkaBLNgLMUBZ9ANRKDGc72phUr",
  "key4": "2H6xxR8fbekJnyPoFyZ92M6VvbrvnZcRbKbabSVWgk8F1d3M5jXS2gYC41ziDywmUzgekvrxybULowYXs5vaYhDj",
  "key5": "552iC6wM2981hf96uxvmo1yJBLGf3mLrMRS126yw3gN5WLf5ht62qzQvGSZExVMkoAn73S2w3k1cZSBM3yU3jpuX",
  "key6": "HXMbnQzxLRjsbFNLU1fZnQG6G87oUQFSWwa99VKvgxfBpFRGxWHcL1yutfkZ5Gp1nonT4LZ5Xxe7zHS6xyn48iY",
  "key7": "4omRb76LyiWM5n8TZeb8Yd8JaKxwGUNHr4xRtDkMkhsfYotcbr5dsbVrMY87Nu3vdteiCN1TfQqJEy9B3knQvaUG",
  "key8": "3HgBixnPs7iBTuVRx5TYQByfMGvoptxGhRP2n6FPUEXDKVSBXSVZrhb6eRGCjbja7bLNkNdxkS99Ns4HhRSXitez",
  "key9": "4GnRryu9TMZU2wmfmGoATb3usBK2KHbT1FTZuj3A4C462t1hdWGkh969gzd3iCzVE4gCihgxNfRtnkKNZTnBQPFa",
  "key10": "5fmhaxG2zEMcaQU2mGUoQ29Q6WWDyM4DnGEdV2sD78ifd9eY4qKud9Fmq8GYL8GtAz9JD6hRkhGXNyBP5UAxBwVs",
  "key11": "5qTa1JkPSvCrZGSA3qBDmHkDQfkxebrjCa4LRdr8ujyPtG4zm9UUJQ2G7Wcy687JrbRVQezy7W1Gm9E8FYKTBTYV",
  "key12": "5wKsUnSPDkQmCzqznRHzsHBBD8gS9Yhy8pdte3kV3kJh8PXN74dwn48qTH6EWMFQfuKEQqK4p1Nkf6aFpB5qMTML",
  "key13": "3HzrX73zpD9aweKqGpVMpBZ7U4c4Mth4czVSCbRYBMA1RrT3U17nBNMRwWxUNLh5etzsmCt5KSjQdQi2TVpga5xk",
  "key14": "5cLE3qJud4i2rgXyL5rotYCk1U4UcDZn7YzVnri59RHobemfs2Svr9Cd3H8Z256eNfcAak9exvdBqtgCqTj8d8aj",
  "key15": "87PdyKJUYQaF4VffsCEiZw1tiTyf2f3B3PY6sLRGAZjMVeM8yr3AYpGmktj5hdXmPy5KexozgZb6sgdJXXhbfwe",
  "key16": "22mRpBCfcMtPWpPbWmBSxTRzZjb86EZfttF6ySQLZLuw2iRFGWG4mdvQj6UBGTygpUWP2cHzhNHFXbtUKkvuFwoW",
  "key17": "tJmKJZYiAyUqBLki7SG7bb3yZxvx8Lb6MguyGzZUZK2Jb7bHGvzzrSA1EFpFkHC5Pq8DN8gb9Fs9FkvYzYzP5yc",
  "key18": "3gfXg61E2f2gcaLBfUx45taAgegBwUrQ8Qz9qFkQ6nJ2JArbqimgukz4Px4PjGMMKRDNxDdgBfJMg9N7aWSi2z2R",
  "key19": "5CTLPM2qe7dVuEBue9ZhNAkWcQ2eTapbhpLJe21nsFcNBmSGoAWm84f1mF3Zw2Az3ae5st2KknKLPpP2iiMmedqs",
  "key20": "rZUVqrLrwEzUmZUdgpjkSQ36CgV9Fi82eTMuD2srxVRZmNQuun8xLNvi3mTqWrbw16uM6nbGfCziW9RMnGNWcDh",
  "key21": "2cApnq1qmSGpCucaNJRnbWecZT1yG6eyvhzW3uWo3YqA51PtLsHwtbWxWWkcY84p6yyijb93s3QFuVxtMVtaeH2E",
  "key22": "2Wc1A7Jtnjxpn92zgkNQwXmKD7m5AU4zGG37nmXHKNWC8i1q1ek95jAQJjJ2KmmcqFDNaKbhDXkr819HRpvXDXw3",
  "key23": "2wK3SMbe843aN6Y2U71o29M4Pf8hqAeZ6gkbnAKhTBFQ2G46GMAwPTJSBzLk3vuVqFvxwQPTHZFbcGWX7oTwCEjp",
  "key24": "3J84zgSb2czFk3Vaa3BuPPgJHDsNjMEKbsNaemN8iNZmZYf9YUmF4aZco8hzCciwZ3DnVb9j4ZCR25rodCj33T3p",
  "key25": "41cqEQPjgy71nGnNXZTHh3JMNwvUwTnN8UqEgTDVrfHLwaYosxxJZ79vNV3qSfKzN56VByyWToUEPVBoVNZvpKYv"
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
