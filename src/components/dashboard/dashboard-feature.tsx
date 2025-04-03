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
    "52Wjv8aaebsse7q7KMEss1FjRA2gJ8DGxDLaiPyAUAFC9623atVSJBhwQRBiejCbTGp5JibXiL3Qr7eLoZEJLKAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpNQnVjZXgVzrGPqw9Ym5JmKTXRBTG59B8HmaYRbqC9y6ZNS8YRVTKSAMN7Gz82aFMwLa6BGXF4nWPyhaiUC3tJ",
  "key1": "5cZPXTSgTa6VDx23c1hEPEFPrQhkARQiiA1giYnBMcLyjFAiH8C715rqk5djdP8TH61oCKF6vxSqkK5gsKUXqEa1",
  "key2": "5s5UvHixrS4w8d8naDo4wro5NE8gadBfKHbtK55K7pUttmWYtWDH2SoaJSHSmq9pTVYE4LRbQmHEknMgLrvSRmR2",
  "key3": "5wzDZWTPsaVDE9efDYe3YymYwFGm6No6kT4oMXq5QMDNbamrD7X4iDh6iQkT1FtXjx7pKAtufzNdGCSK83Wzx6Lr",
  "key4": "2uXttvN4V5CjieZBpHHVZZKbfcWoU1uRViC6hZCoZDoocxvK9xWyCtNLNYv768mYXcmSN5DcM6mNv7yBSE1zLTEV",
  "key5": "2uxN1u42F8Siv42VFWn5ffyrkz4kzwfX4QryyeZ4g55hsoJdMXrB1XTGTFekZuwG1xXGz3wXjrmpYnyCNMDMVSir",
  "key6": "2MJUg6LaLQ6eH3MW9hbP2csKZn4Ysu2vRR9Mt8Md1KYVtVaZfhv4rPR9n26hLcbmXhusfv66PwFqsifKkK6fE4U1",
  "key7": "41du3AcHDXSaMwLNZebf1TkT43RPvmhA47qMcd8DircGznyLEGwQqjEJwjGJPr3qZw2MD7p9RjDt35xPZHo8xQaT",
  "key8": "VuWyfu6m2y7DEKhEBLg6SavRbiRDgmMjLmx8BM99x1BQBjkGGf7jDTApkyeoBbq3ACQjnMJXop7dx71u61w8D7E",
  "key9": "Z62F6GQMVQQ5mSu8VJkufSoUcdS1X2mKUr5vemAkP9mwpx3qg2hWsgAT2rmAQmwVcNb2fGQiRGqAf3wniMzLyQT",
  "key10": "2d4jbt5iuX9r6KtgJ6TQfAJA4ASqgmGphe1qtBVyj7ToMU9uWBMmQr1t1Lfk5YGqcLXGCQqhc6ivajt5m3baGcv8",
  "key11": "3WBmxjNoxgAuWAxPgSPxdpzMnn5g6difKUcXRgv3gK6qeDx3djt4oEygvXQvf5HtXYnrHSZoBRXerj2nAVyQE42M",
  "key12": "5ewfqWb1VPGKepsnQgq7HuhAyQocvmbferSbMLwGk1h6xfPpTU7GvBC6Le9LF3GCuCcVWiYSyNZNC5s6wywZy7Tm",
  "key13": "3ZGhmW2Xjjc5esmFmytNjCEz2uzEqtp2N526ynFxbobrFrx14TDkunfaAWUFbpT1jbteiS8SPQoFM4QQQ5u6WmMa",
  "key14": "5F6Fa43TJcbaK2X3r6h1GmMLHVENou8CnA2bhn9hj63N4nqRxYoKh72P7wR8ffi5cZLkiccnMV5yYoKrnPw7ZDYy",
  "key15": "4Y3H3RQHbPFqWPXeZr6HeBKNrxVs6yG2NJjoYtf9pVfXynd2Pwks4tr5o9MgFVTMJQxCCm4HK7b7J5yhvinM5rY3",
  "key16": "2HdqMZkH9Ys2m8gqjNUGiKSTx83C4a4iAvbd3NS57hdXaZAj1prBogRcDsJxwDrV5f9PWfYFzAiEEbcHsWGKMwcB",
  "key17": "2vWJZqmxHjWjUKQAFsywjXjQFYyoykkZiGDADtSAgYf2Mcas1HWNS4ph37zR4ZZan1UHcgHExMBx1xhdQ95fZVY8",
  "key18": "2cWVajmTsQmaUckoDvZ5P4P5TZCPVQmWprDBB61J9sd9fkne7hm9hXxURrt86GMiC2neLbJs46jmZvjtqgLDHnky",
  "key19": "37totgGLQSXt1YDZURgiQZi8Tdy2qcyvUNdygTzGdNGvyQXRnz1C8f8rKSLwVhNU8p46yJh7u9CLwcEZBLUPQgnc",
  "key20": "HiebfJDU4WKdsAxe36kEdpa2JnPe5qXZwo8MnKAnhaHDCHLrtzpj3ecxLD7tRx58xRwQGpiZTWsgBiJVAxHgoZZ",
  "key21": "4DAS27HzmhgQ9Atw1zzjW939j56FaARdAABCUUJrSiFwq7RjCTSbyB9snRERiah9ydK7pQj8DUpbqudtGRpurjX7",
  "key22": "2kJEfLb89gWB6m7oCHpZhJNhVjUpQVhGRejXY3DVrscQq5JNb3QoZG4RSWFtw9rSS1f4eXVroZG2EkT65C1w3asP",
  "key23": "2o4zTmej5jxvQtA6muMcwRg3DtGGGgcoameuYfeLfreBr6Mk85P9JR9JP5Na47FKNDK2XK4q8947CVTjfHhwP4eH",
  "key24": "5jWwh2SZFXAtH7ZEYKBPzK8uZDWcDLjk6sBm6NspQGYTpwyzBvd1fjk7ZcS6wCParVQWNXiTS52gi4BPWAL4CNtc",
  "key25": "5GZY4ohCA5oQGegCXjNTgVcZXzvhpf8xxwLKVGmJCQ1xZySYRkfpy1N5yaHCgeszqgTRAg8EsWNAmp4DjFymyhiL",
  "key26": "gkyS8astpALYc9ggmTiPs1sMQWqzQKkB9bYN1jq15fkvoc7BPzdbidB8aK5rdo7TdinG1aRFPKVbLEaiVmXWRV5",
  "key27": "xrhGJP2Dxt7r1XJbcjpcLTR7xEquLBh5eMzqc17pVMpA3MtQCyfRH6aFnxDudnWEtkSoRkpBGVwAgYJ6EKTcrhr"
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
