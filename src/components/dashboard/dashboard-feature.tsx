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
    "2dLd7iv6zKPzLNTJFcD6hV6tda1485janeS2zeTP7nSPSECHiLqjLvKCmM1qJYKs8DpeMLUCpUWnPqVBp9bkmxXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCpx2GAPfHdcqQSizosZefGTNTyTp6dJkqfZXnrxYtys7QgXovtk2k23GcGju8KoJaz6f3ZMtFkhbhWdFNmSfNf",
  "key1": "2WPDVAaNtz7ACAZBn2wUidn3WhPywLQ3hRq2c6WtA5KLeuPdLjx4K2XcnL4QVrRVuB1YEPRRCcFag38irdgrVYo2",
  "key2": "3BU8wLbPFL5K4iswCDTCh27ykkqZkn1UcBbMBFoBGNxAwin2F16fZsQLYdqTAdoU7eRn6HmEd9UwQF9QGM3yugbp",
  "key3": "5E513daArgxutgCCkXXTjfGwvMxCKegzESSeww3Nm1W4e5wPNAKxpJ8LDCcNVip5uyyjU7FN7AAcCSwG7dKmEPSv",
  "key4": "5HzEDahzTG9qa8RFeJjkWUkYv8mtFPngGYgSHDEFQUtnzSiizt9T9tZSDGC5J2iiQbuQAc36DtgeMip9U4Ymhocg",
  "key5": "3eNqynydMvVSQ9Np5JRzisdPdTGbVhPJTwih32KSfyDTKEEXLGKHcsAxLxexVXz79oWt9EdtNmswPHEcUCFCfZj3",
  "key6": "3nx9qwNAUtypgux5pALAbVfNwF5hkKWH2skG4Cet12MipVYxUqQA7XUEQAkNE5W7s2syCTaM4bfu6PA9ogigsoFp",
  "key7": "yvcJLPFhk1f33wk8f3Bm7qGMhpoz8WLzYYxjeKNhV1RojpfRJbHoXGFGZfVYED1pywsVCYyYhYC7aDzwMW74qfB",
  "key8": "4NJvUWoFAKKb2BS8c6eLKM7G6dcniZF42fchkq5As5LApgC3gYJqadScxwraWFoir2kJsRKdBtCnis5M1dQvUosy",
  "key9": "33j6bt4MiZhYFB3BJi4Pvc8CFnzAicVVmAfGW39txrvPLUB5vv77uCDsvj27naBgy4vJ9D5icTeC5siyhuCxbNi4",
  "key10": "4ppfPGWuddGKRiN31sf8D1i9NJcpEMS2GUPur2YtzpdiHSXTrKhEJY8xzFegjFDHzeHvGvmwGaZKFuqFFusQPH2N",
  "key11": "62hUxumFTFaJWbM2b4oFSVhAfboxumfyxXbAjBJiahxwwU1vVACVqg3UuVfFLRTWSF4aEf5CYo2v7P2d6J14M1CB",
  "key12": "UYgNHvstZp1pZL64rCmUUaQWqzGKbYY9tsMben6s4qB7SEeXtdGJxzuPyxD3FdbCDfZYpsyNa4fM9N7mV4XyuTN",
  "key13": "5ZEnwN8Qu8x7r5v17KoaLATBWY3UDudvCP6bQFPrAgcg8pNPJJLM5dNRpihSmK3q3XoMZr9u5eaF7FKj2LqsJgSQ",
  "key14": "2dVMzUDTw8CsYPjjz8HBnKXfQtgM7AigBpMcN4bsFLwvsE2VrvyUUNfsJhPc1dj3TAdUzaVUd1BRoaYVTVkBkLcq",
  "key15": "56Bg2Pj4NguUFF1sZXrWd8X7nPkprv9Nw2L9BCcMKmohpqCDggaWBDhbEDx4hwkf26Gh7tK4ogJGVT9QX2vPgRKp",
  "key16": "4Vr1duRaSyNPJ4vGduTWCU4QrboECoVkcWh7bUJuvKS3Xr5EBRmJZ4LjH64XBVn6MnPKkKJyiwyJXB1S4Uuf14HG",
  "key17": "3qqNUGg6gEGbY45dVYosmXhj9S8ZmEWuswhnjfEXJFco1c26QiP2okAVGMLCKLy4jQAhog2CBwnfoGGJkEH7f6oU",
  "key18": "2CDDJ2LZgK6KrVdjNp1BDuAcX3QfsAqcMsxYzueSfXaFhWyXY5ZKANctgiRf21oAvDQLgyaj62XYrdncQDB5pE7c",
  "key19": "48KYdAnzPkzRRmDt4kvKoToyHSFQb8Z5CDwZ7S6gBMEudgZ7rc8ybPgH296b2khGoKG6nCi48FYNFyHpvexsKnJF",
  "key20": "2LXGUXDSnF9DxikhrhJD4JTyNe8ZkxhfUFeja6idCtmsACnEMhdHvv2NBben6zuNgBqtcBamzXLw2XXbjLNCGEQr",
  "key21": "3Ut8uYuQm3e1vn9xkHTkBtQE6KmxwmynLC4YVKkRhhMUANnJhdnkMyqbqY7vzsK5JpSth1GvPCRim7jKC6SQwCMc",
  "key22": "4jazk9GCpLqBhcxtsAWG8uu2jmXBwxP2gaiXdkQoeFRuo3cU2CqjS4X22rNVcEtKqjTM6T13P6JDESdhjNLum8Mm",
  "key23": "mvCR6eQY9VoS2Nu2Hxo5ySyeHZm6Eh3NAmAT2NeCYowAUmF8agmCib7EKuuY13uxJ8AY6UTVBwWuj7ty67Eyn4C",
  "key24": "55P7RSZEvMreihbasLEues494v1zvLkrbjrhQKzfREJW58qefKZwBm36Y2HtALLA9jHr3gYjKyuLeGQw9SSbhjRk",
  "key25": "5b7jYBAQSde8arDxrMnsEk3o1Tu2wFZjfrcSrvWpa6TF3VMQc3HpAhv4JXvbNsQGHMVGb4ZSFirMQgjPDZ65TrmK",
  "key26": "2eqiqyVNAWz9KY15etULTeRvdfVKtEhSyvFXpsZrqKahYG2Jkzj1yGuysWSx8qPDXyizeooRcrDbLhxCxrXTYdqU",
  "key27": "HvhJB4JjQp6ChBqrdxyc6m68V3RtcYxDB5grxcKerQwSqHA5x39EqyrQdadRogQjtfFaMZV4izzPKDYcgKSpj2G",
  "key28": "37FofUuDQyoZDWQi7ypteQEWfSN1gEUPiPQjxjrf8RMfBDSAsPRdoXpxaAXne1pucg5AJySrn7Y6zoMC6Yww9gj5",
  "key29": "5qFK1HKxRgxBHnLbXTUFK5yC4ywVJUDKmLMvwF21EaiM7HP6Kr7K147irDDzM5hGoEuYxbngdLRf7vjkwSVCHArD",
  "key30": "3wzmv7VDi3Cs2oBCqAsEZFpwYLpv8As7L14FaeioeTbZXi5kmsFB88pYKQoMkabhETu5wPdieLaSGGgaKqLoXv83",
  "key31": "QQtC4F6ZrScrzY9ZfestYN7pTyk7ynaTZMyrMcjgSLyfdg4NhYevoLbx3PVoz3dQXRA6swmoJ2VDpHB6DBvXPMc",
  "key32": "D3moZYsr14k6Mz7w9bpMgfWdjqANrTQsWdgB3opCvWLMWvgV8Rk3kf4RMkeTDovNgUnBpLaBi69r6ZySPbYgvKv",
  "key33": "43DcAhhExkRA9JbeM4KhYxhBj5AufndWtHnNcAvke3P2ZqTh6QHv12X3eXcpejCHCrkv5LHHX1EW5S8zs6FnZgEz",
  "key34": "34rYmzvkiF6K9b6HAU39YsokXGb8Dc2bC6JGbWpQJtVopaw1SxZ3xBcXM3SaK1znWjmQnKMcnmiAZk951xjcp2d5",
  "key35": "41wXJygFLfcGxz2UtsitNEpLhKnkpaZhxrJrK8WD92zEETTjwEzLmEs9A1yrVmMANdw53uQT7ioNi4CQ6TCHKTm7",
  "key36": "4f7z2SvYvcFKXfqgEpAXrPAnWvPm4NZBLV6Za3vtZjaDLhSfeeuXxT121Lmzb1h2cX1PW1DQftgcdGNQgSw8QKrQ",
  "key37": "5PhFbKKcRaRqFwsvD8uZrJef8rFcVqpR5u21ew4gCYuaJEMjgTtPAPsxzbH5rSLJuS2GkiGrSxfDjL8NJYcQpGf4"
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
