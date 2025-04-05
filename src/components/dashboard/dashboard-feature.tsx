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
    "32yNDyh38t6ejTwc88BFS5z8E1UUVhXEY7ie8xW5PAUyp7AwVHNvXLSSxznwTEJQvAB6ACmqwAWNynHweM5ErXpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6168onTj2MajaxdCS7raCoAy9Hjgavzu32nq4gdvRfFE4sFaMbY2FX5fydsNjqUrviFcKTB42mr8fCDRTcpHFzV1",
  "key1": "UWx9xStfGBe1QkPrDtAq4NzeNBDrFmimc1Aq3qFViNJ5KB3KSEb9Sc7B1NEbH9g7Tc7a6E6uaCyMt4GrAzzGUvL",
  "key2": "5hHdg2BNpC64QDbQDt72LxfmxGAoCM1qHnCQeeS9CCbUZdGfgPHdAW6xFRjLh7Qm3kBjVgTWjQrx9SVKo4s18hC",
  "key3": "3ujdERRFhVhWDZ4yAuDux2hZ325NzLZC4p4RkVgXEdr3ZBCPnSVnNBriM4E5xKN8S5rnTcUMPq6Hr5WGiioZvc4S",
  "key4": "2sGWxWj5cF1wCZvmzWsMDgQQZpQrakayJAEawAGJeMHH4Z8efkWc9dWoYfrXwkVjpkSf93zc6MowbD45kvtwtrrV",
  "key5": "55ESk7YWfHUJ6v7G6MJGe5YP8ceJhixMzhBqZgcjJTEkNLG924dGRW54GN3QxJnWPRDTWf9HbqQZShnVLYuWjRSa",
  "key6": "3qh7iR6sv9KnQouNmeiVkZ6vhHHaPJmj6vXfGq2YYEmgeaSeMmwaj6KRP599W1dYyZkdeKeBpBCv7d3iYyQtATGJ",
  "key7": "2142CWF9A7JaURVxSR3srAzGbL7PAcKxQQepCsCgGmbTp7JLZxFynuLKw4nYTyBqikq5qEB8U1DfYsZBBfkAZgMW",
  "key8": "3TVJQBTt5dyqYdWCARFvTCwKX8xsqkdFoQoUtrgGa68KWZmdmPLabUxac2jh1u17PaVtTaYYPRHedpTZZiDcURC8",
  "key9": "2EuP2toErit96n65rcyAokuNJkMfoWyBuAaUwtkHjKNDWb2VRWW7bKB7WQSgYwtbFWgUEfCnuQJVE6qxoyKcD36T",
  "key10": "3mesWoFPKKvmiFmtoW8hbXHsqESJtBE7QC6Fc95ijpx3pmHLgRGS95r9YeZ3sb4pJs2WybxaZ6sJbH8NC9B1XR6e",
  "key11": "25Gru5kdHaAE9JJQuosu5ttbqKu2YSLpWvmZwQJY2Un7VPAujg439gJadc3tG7YAAenzccYHcisrbqNr5AX1fz3h",
  "key12": "Lzimm1Z6XNf18BFJnfeQRMiWbP3sgJiCsMMeabZXo96TSzRvsZY7ZntxcMSciVF5C8ghovdUfA6Pgia1n6bDN3R",
  "key13": "3Ce6U43JR47dXky6D2Hyuy5Q3wMeurpLkS4FxQ68dPPEresBp5yoAAzYmcm3HxHtpugtC67QXqdPLPpx8X5rhqNw",
  "key14": "4ZcNhXQQwDLV9qn3e46yqKQDubFi1uVxwyjPfUQ1AxQPYZ7wyPoNpL6mCjRqvxfGG4ZxiEAVrRX1P4LN6UYwESvh",
  "key15": "57cADcug7LxRA8zSrQKF2uJuRtZ8vW68aT2zxedWyVS34U7h8rFmvwvA8XfNA3z1HQ714ziS5xZjRzmreW7bs45W",
  "key16": "4TZ88dQkDk1D6iDeAsEnzR3CrSXkYEdabxss6ysRqab8mxjfH8ya5SiBu4QVSrVwFt7HHxMAh3VCUAfRh9d5fftU",
  "key17": "mGmB8a1DasFKr529zjyMQUeFmt4QSqQBcZG4FTYQPCH4ZRgpxCeqfYd4Zx7PVDogDAv2BMeGHYV7y7egwX3gnvj",
  "key18": "7LXaVwj88gcZLfTqgLj1N2GQWdAmyLnkNbZ2mTmAkqxZmaGX2aiz5q7HC379vJwxRaEyxE62hbzK81iqKhURT6L",
  "key19": "5hsefWztQdwzMKvFek9BzUEshtu4HedS43x4mze4ixgnTukApwrV6tTwLzSRnrkw8Bzw8u45Nc4uqmHvMm4MDBMW",
  "key20": "5VKM3BGDQ9vVFyztdv5oV9Uh6fBjdbHrtQiFYfHiMABFMS71HBdtPZp119uUHcKXR83iRxqittr5p85y82YhDsaZ",
  "key21": "4AxmMj1ZNc8hkynpAgsaizKoFhGdkuq9ZGzpqoFCtXKfeYNQkWk1AY74ZoZx1iSkpSm8goPM7c9SdsY9bvoHvrS",
  "key22": "4wNpNtnesTpwmGHM6SwWs7zr7ddp8vyqLxDCDMJvDzJaDTS9jwNxzMj8ZZJKNjH7MVu3hcAPU8z1adzRJ4KEb2Pf",
  "key23": "3ZdgRusxxjqE79oHfqu3trMrJY4MLXaLEpFaofDDp52kT3mg9uRepCaiFwXxx16VysV5hw7odCntS9qPcXZHPMhf",
  "key24": "5uD3AR99TpxbpANpgJbu4t783nSxqAGmgkL68qJGyPX81MQJb4ZKN7QLCiBVWekeaKe8nSkM8zRy5aQzCsxpV98Q",
  "key25": "2krNkRndgsdq7yweNuP3uTxVkn5kN38gVyYe2fgJ2eeZvZJUPC4U3r2TWRPFR7DQnefiDAjoFCXKZYmMRRYQVB9B",
  "key26": "5EykvZ6dfDwrBYWD92s4qEhuWbMSpPR93oqdL8gWfnCtPxD3BRz6er66THoGyU3EvHQrnKeEcLaKfLUmXBPhpHu1",
  "key27": "3t2KfuaNBfN9eb4PKqsHRyqNLNZCjCPgmeMucpwXBcmKobD7dxiQaWz62BgJJhJBVVaRsi735yZ5yY2dvAjfhacq",
  "key28": "2N6s8XDziGbSHo7rnWuaFDFdRWAcNbTi1T2XSCv46yYBWAzZUYvPcFmp1XBMhbkyAwEAQL8314TuAVFqA5pHHkxc",
  "key29": "5rZg8pomLcLjAZQj3HqKgjYSEe67NQZsTdQrzFSwfANJRjwpgUqacmhRxtUpGF1bEDRB1Ur7VRqJj2YYtv5BxJHP",
  "key30": "ibv536ZavGmDrAfg82HE9YLX6RWnGcHkAd5WCcLFcYdxmS8Xyfoo8ULC95y36Et4GCqeY7AUbLKoFSSVYJUstGj",
  "key31": "2ntQhxd6CTfebtrb6wLsTSs84mnm9gHuDMminvrQnJBAW6zQZ9EFgArEPhUWaSG26oJ4wu3s5rP4HsfyajUvy2Lo",
  "key32": "3ihJYrU4wVbKx3GXSPZm65gL9aUtcFecZjxS3AQSF3u8pDrYeEG3ycfV8pzPHeR5Ph3PN1xSdDhbZLgKfC43UR97"
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
