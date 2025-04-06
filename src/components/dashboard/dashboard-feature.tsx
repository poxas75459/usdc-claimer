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
    "58dcoLz4oQgcjaStfF3wPConzsqNUcL1f5F6KpqjqsyerRfdWN3vHTZwNDAXNjyLLAiFMLQkn8FqkjDD5MAwkYaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnWPGMc6mBXsCenfMsV8gj6sPsVHULnoCY2Ep2F5rkKb2X5uiKCfnddKKdNzbcajWs3bCSx4XVZtjTr8AEjmRuG",
  "key1": "3TeD8Q1T4zFZaHPJmkPDquWijtXyDWFvU6Tym99A9oFabo1NGUAbR2oCYoHNfWG9JjRbszyPCyt6bSHQBvkXjGVd",
  "key2": "63muXgkFRTFcsUiY328qH5G5MkzKXc8QJC9nvGUP5KUVppwDXVgam7w4tp2w89bRAtrZ6LMoVmmPigDwLpCG1n3V",
  "key3": "dwnTXUwMG1qMbkgE6ErauMXyT1KnJ46P8Qt3yYrsyAFNrrdfR5FhsKVa7sYYfHUQXihBSKMiurCbJcFaoui7Xv8",
  "key4": "3Pzz9XESoaQ1LsFRf9JBceyRe38D3Eas4KtxMENfED49DVk5LnPjbop6BXdhKaEMLgmhH5ELEYnTGHfGknPdpZ7q",
  "key5": "2oEAmuwWVqrc3Beo8CQymvXSNwuGLqiUbg9jRhSQCb4eJh4ryf44UauykwVu8ckWHqNdAuFGmU9EMfGN7z9UM48D",
  "key6": "2ZKb7VfxDc7jFDkRd5fLUMpDdqa7AaWE2skELnMUoibPPUvGZYfD2of7aci7MzpfXXKtms2ArX5wBZYArQmvpk4e",
  "key7": "5bqQnFc9qswajDCi3kP5jSkisX19rRK5t4xMNDPMBKNZDmaGR4Thvrvo12PDVKhNK65fpdcnTRW2py99JgMBLEgL",
  "key8": "3FuHn1cnYwb9AhcMdP7rFEcqCnnMtfFHxkhv6KTFv6Pr4Frs87ZaVUgLqHYHZ49HQExEYU2G1ejt4FdDww6ojDF8",
  "key9": "4sT5bo9dVqh2gQnocuyQeTH7gAUnTzaYzrTMfxn6VMfV7SfRfSTwBnCWQLeFPnweKRg2iGhTsdhmFGL2psVUToiL",
  "key10": "2seTPBFqeb94oKngrQqFRx9UA9C31PaRYJqa88PipxT9riQXjtjCkDyMFTAY9DhM5SGqU3BgB8KAgrHxfhKP5k7Z",
  "key11": "4w3YqXeoFNBtPxFcA5xNByMGoTKMdP3wmxqiWA37JwmjyDEYbVXiL7vNLGN12HCVs5qcGSzccyfht5ysTbDaqbYN",
  "key12": "4MHV8ShtVMgUD4Gj5Qy2VLraaKgEUqJNDTQusMBNcdsbqQE1DdzbZaaeWaobs6UFzJ99YQtzQMa853Wa4aDHrUAe",
  "key13": "qZg6HNZ5ysDX6GNjqiht24TksAJJe3cV8Bze5X9Gj3nfswUHksbSxH85QtFMTweUyw4ajDJKn8yMF871WWC4e4x",
  "key14": "3X5tmxR6Zj6zMr4J25L1NhBemkPB3wPJFRVaVJv9MnTwz6UEKzBjnT55cdFJrvNQxB1yHmx7aNoj9giWTCLXhgWB",
  "key15": "4Kxgbzrdta67X9FeShjKN5FS383f48GNbhbEdcGoB3kDVqmNCMs3DCJPYN66HT8CLtXXKBAfhLvSYRiU7771w8KW",
  "key16": "65WeANSfpZ6WemvTPkS6RhZmG6WxxH9LzKSD9qTH5XNH4Y3eXH8bTEnm4keXTkWvvv2BtXKseaBpYKLBczTiRnk1",
  "key17": "2S3Qq2wYNiDYPAzZYQu5iYAcpZhqi9csMZQPsqDBVGjwXFwTxemtvYXcFH8jqFbZoeozjEFdkHa3zs5whrmo75xS",
  "key18": "3L3mHr7hm5CXkSophEQKmLBJp1KKb2FJMB37itqCKEbGW5chqVADBGuLjszqUnMekgnG64uy6E5q7KMahqgaXXUo",
  "key19": "4g2RPPZjnFu6rfGxw7BpUWXJNt2iLB7nnAsSfB7RGwvA7whBUQDkAWwiKixkX31uybbDxE3GaurFY9RFdUA8TDfS",
  "key20": "3wMtXstUpBnJTHGVtqTWT4s7B7YC3x1bmie6ZfpfZ8Yr38ZAFtW4KJkJw8YKALDH85mAnFxDQ5V9Tp7nRFSZGwUo",
  "key21": "4Bs9KArPwMAW9YPiMaCFexFoxqAA8w2ovvKCdyQA9odE6Wwvwqxmo6dwzrqfroQingmwEbRTmf3Hv7opsxZJnmrL",
  "key22": "27Xe1RM4337ec35v35CqKZ9qzcnUmoa8kL4VGjCV4Fn4xLEM5mRy58a4k2mGhhAVt1hcEyFfkLmFynKvfYMv7ZxY",
  "key23": "4v3MfvJCxHfX1UVikc2SfEimw4r8DJzKm7ms9cNcpBNPHgrQYXHmS3CsiZvq6zrLfKvPfDc3NwFs9dH8bdLoR2fY",
  "key24": "3vi6kyRrZghEsptiSDY3WUskqvqWyKywiJUphMvfivAMNkvjuTSN9fLckNt1GfaXhyhhsjpci6S45NQFHAMuQHzw",
  "key25": "i1vSvSY9XYj5T6UNyibjpdXBWhp1mBebYBSqtG3FVpfpA3FQ1YjZniJRq6bm4XEXNqmpYAJRhjcGgzkxCggCVcu",
  "key26": "28HPSgGqYZnBtVgXZFwHeKSsyHS2rnPCkfgtftzEo7mfqZumdPTNWk2bz7b1MxzMHQgmdinbp9aDTaGgcFVu1zpg",
  "key27": "3zBL8xbRLwaT2MfP18hxkTPy4CpPLjZb7a7HB13mdWq5reR2B6d4ri6fSpDNPuVhgEq9oMFqSH8ZR1Jkimj2tEBt",
  "key28": "417Kqs3KoA8664QGKuX2jwmgBJTXCc39Ys7h3pc6B4uy2B22S9uZEkAiU359cxzqDFrjt3QhoTVv4YKnswqiEsUs",
  "key29": "3QayHPDMRiG7RX29jf42ukhttBqb9rAkbUgzUtSU9yX1yX5B4j1HpKwpiEWwvXMmbvL81aNNKXrNRgixtHbux3nT",
  "key30": "5P4LJqcEs1EeVXGv63eSWq6fc6xEthZLxSQyo9wbnwWmMH6zz7B97GNeBJD1Vw59XLqYaNq7Y47KuVt2NvzmqAgA",
  "key31": "3evBe6GD8kxX4EjL5D5eSf2tcLA7Nf23B2oxWpbwCNsSKk2fZ563YrtsAurwguytghVvv5nGYC4FX33k6TP8tDGk",
  "key32": "3m52EeGeijG4i8hBYtRiwcbDHYnKhyr17sY1GmPejiYPZgR39SwiWP4uGEQY3BHU28tZMrKc1ZnFQzQVRHDwWhyz",
  "key33": "5b62DoqB5zDe6RdNyy11dv6Lao1fGrfaRdT83QtyZwUownGtn6qhY4TYjDqXcuSwDvvwA6sbcQYvpRsaLc3srkV1"
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
