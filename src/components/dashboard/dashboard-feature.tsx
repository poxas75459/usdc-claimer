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
    "5SbKWK7gM3W5gLMbEBsuFhrE68TQDVAXuAjhVrYrQCc7yDL9itjZ6d5MT5e22TJBqAJTVByHzvhuhAiiHY16yLLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "585d8muvenPNv5zEP2ULteWpS8pR2bAUqiWVDRoPu9ZCbopWi76BS3jZAtRh7LUYeu7avszK5oWAgEzPxpcjxgmM",
  "key1": "3aCrxcs8fmcWpSqBnpHUmDMbUcs2BnuM2igjvk8DRd19z8mQ6msTguq3nCbFQ7t45WfjMdMAuKqxvPEVWsMZmNJa",
  "key2": "3we1XhAKaMz6WKfhfgbPGRCUg5UUJufxgzCXK22DBLF1BhnzFeq8uKvoJJDXJfabUqLxkWv6Z9PJLb8wry4orrt3",
  "key3": "57Jx2DNx43AgUJWJZBjMreDZHLeuu27h6X61F7gG3CP9sDvs2K85iDwcJZYG7rVJgvXkBtvCR42TnNDP8prCRDfN",
  "key4": "61soHbcge2puehFexUoBzzJch4D5rMLYczbsgZDmZApYWkJwiiRokNq5a9afVRpbsxee6Q3eAs5s5UxqsMBeh2yM",
  "key5": "22abtqsroidnUeBcomYJh1rf9rMD5z4VwJATmZcEjKkPJ2ez7YcwzqRtC2RpFeF3cm6C25bQCDLtMyAiVSYTZTiL",
  "key6": "5rMNjsWYxFH67W98E3nQPD6wvvg12cm9RKHz6DXda6dsLUGLpZGzj4XffG15NKLBkuWgfabKgCm81fgNgghcTrvv",
  "key7": "2XLu3oZ5kuD6hTDqizDjb9KfhEBAeWseCyzw8uRYp26qF7a3CCZ8ZsDKqyPBbpNJrb97MKqayqrjj1xYhwTGV3B3",
  "key8": "8fWxw5gUPVmm5JmWXTsyyNBKkbHWKVqJvdX2adgPjykBsP1hnFVXyprsPtDz2YYNXGqvwMmQ8kNjK7srLrk569M",
  "key9": "4sFCXguERCSsc6WtsHZRYREkBJhb9ZHD9g2nFySLh4StYqNQBoHkHHM6pjurqapJPkXkg4QopwivBwPEciJo3srZ",
  "key10": "Q57wpHgsYxP7aCqDnYBxJ7UT674UbGxopa5vrpVECGsGjFRiHLyrj5djKDdNnvid7WpyYPkhM3TWCDnwWcMQEJ7",
  "key11": "3GLzD2DAQHZQgSHnGeQ6XWD15EEK7fej7K4zzc83ckCi5QsEfqKFWLiqj6ccy63RB4SVQzP9aefN7U2GNUSEDMLs",
  "key12": "HqtdPocAzCBP6bDPvyJzgTgEoMGTbT3DDS993HTLxycCdRSZ51QSirc8oD1kCDTQQKAUNHCq4wsQK6Nx2m8CzQS",
  "key13": "2jW6TTU9YVJ4bATuc6yCDBRPgx62JuT5sJW1mUKYRqNUKWCC9jgq51yNePinH8b2WHzmTUjXqa9pEf86xxB7wCmU",
  "key14": "2rWQbQe7AajSKvy4pst9SEhLxF8TCsZEYaRs2pWT8xZfwPwqEEevCbTkRbjRWUzE58hHs4Swq4FHoAmxCxMpi5wV",
  "key15": "4mWxFnJEDLfrwqnL1eqjfz5uzS1xQA2ja9W3hqMVCsBckCGTBkezw9UnDszDrHp2MGYrVtFa1ujwaqjiPg7NRXg9",
  "key16": "3G39yME5A2xKBCxYwdfV19DL2mZVHmbBHvbrmjr9xCWJxbdqYwETtULqgbhqNixpHWppF6176CA1R4coVTssRNgr",
  "key17": "32EvzkPLs8XHQYDYM8eYgWVD3iVt7bxY4KsGqhbuNnV6nEXShQ5tH4CnjwkLgNVbYLdayuWm6GTVZRdfdidEEMnC",
  "key18": "3vAfnxgmj7S1damY54fnzdUbWNvSSvDZLqYp5GbJs7SdBexKiDj3DpWZTLa47qDLdhyKzH2BJkFGbV4ftGf9BBST",
  "key19": "5PqbcgxGG4kYYLqwXDxQa6LQp43Q6dmkwMqwAj9wLuvtkmuotb9Hr5pYeHRpdaMsnUDhv8R8b5jA2qT6gtcTyK8D",
  "key20": "5VNjGcTUnD7nqYND9EZv9eWV6WnRDbcfAqkzzTKeS4ANxQgSfDNcjVsdHXNCYViUuNfUq516jxX2q8XfJG6j8Uca",
  "key21": "2kmghtUCbzXhpS2a7VRNhAEvJ4omW4WtpxYgXTDQPYZbwYfEmkLiWWgjWDLGqnCHUEbHyLbLAo3FaJbfxQhnoTj9",
  "key22": "5wi2jvAd2KhQzdw1u7xD7sH1WHdtJdaPhu7cGGW31YB4cJeH4bS4BAxQdZX9K7CekJuNxHzCKQbcfyBKSHz2sy3n",
  "key23": "5hVW8DvRyoiaViLUPyPHGLs1kGV5c65tFcwiu9eKTvrT2PVeeq3xVoTrnooLLh8xvGnD6CLFTzp4xbc9odSqUBiv",
  "key24": "36WWt7869g894R5Akbb1nWHGR7HYf4fwsdSfVuGTtjHD7u9QnwQ2hQxUEXVhii5aWotv16QP9ddQzyUN356Mdnya",
  "key25": "4WewBjCwxqoWn8favbu3ZFo5Lpa2XgmwsV5FUqSZNtmUkHoCeHdmrjpntNiAbvSTgCaEQHBunyHVbhGupaV6C5ka",
  "key26": "2xHBtkxPUmG13QRTKcqLtD2e6KGiRn8xy8hdP9ryGyS7TwFKLreXyGPFh9GiAM4f56EoNwUuDzC9o6keJLwDSXta",
  "key27": "42jWUdjLYVM7BNA9EauQats57Uwa3ck9ysgYhNs9jBuBWjJF7G2eKZSTHwpzohCZyfnJkNsQebhNRn21jmx9fTbW",
  "key28": "2Ud6STkhhxvcerLMjVojwetnU7kGMFRfRcMYp6DM6btnCGcpVvfC2wKnwx48wFLU7VKVbZtsacSV5FB12MvyAie1",
  "key29": "48jAh4tpniGJsK16cdbvnCG1C62Yj4Q68wvs12vmSYvbmGudvwhVGH7m2HBvprU9CX5tWRE7kYdiaUfHTAKGKFYe",
  "key30": "3Q8N7CRAqUpNicYFpvFaRYBUP38nL2VB36zv2bzi5m2Yf3vfaSSDPbDpmnhZc7abjUbGqEH3RiYLS6REMsAuivi2",
  "key31": "3NwDknM3Ch4VYWUdE4VpHfdmQvDv21pHX7m5dRgd9EmrCyjkoGFbmT4aNnPwqUgYBJzb7xfU29wAQVJdFkTZYpqv",
  "key32": "487m1UrJq5pZNKggu2VWndp9GiHGabeFjGiwWGt8t8pQuw2rRS4v9wBrmJ4WLGBaRoUnZ9YCPSPoRdzz7sGgutDK",
  "key33": "t1TqA4MKaf41EC2F9edqX7XakpovERnJMdEWvda7cS4W6ySNBwkyozMXr85kzU14Et7hEegJ9AKheahSbi3ZbU5",
  "key34": "3xUASvfd3QqM8mam9xKtj5GkJoLbfE2K1Z7Gkh2eP837pG4PrWciNttzxHYVMaXrGUaVdeCKJ3odRKnsbm9zYg8q",
  "key35": "324qYJmmRHiwviGb2p4SexpLXoB5pXJuZKriGxvxr8FD8GC43KXizURozdR32gqZHsaKHcBYvgZ3NNacWjMMbZsJ",
  "key36": "4db8FiDotZuXYEBZsrgSWqzrsj7X5M2KiLkYtR6T7moS1rUBxZcRjk4zZgeqYmxrQohXC2YN6rPJ541yJ3Jo8T6C",
  "key37": "4HauqKYrYj5GNVN4sqitCmisoej6edX5VgM81nqW55cpC1LjXzczVFyFBRJ7mGVmVjhpwwjsudMNz8EzEthukieX",
  "key38": "5y7YNGFHY7bmDwvNiMtyevQtJ5cfJK2Thto9WUfQ6NER5NDhNZH9pCnkcPLLK9R5MTos3VoKKzScTJ6L678ELZxn",
  "key39": "k2JB8gL63d3CAt952Pe7qLCTXCe7eeAgGSQvDL5QXcBDDzpp4rCu53e9WGF17uCfNsYZU7AYNk46TWJYctfg2QN",
  "key40": "4dcnwuy7rYwTm2j3tWJqJ1mPms41MrgqEfiYWrsSyM6troXEpWShupzy4x1jagnZNcARGhusqpKiRB5G3NY7RDpK",
  "key41": "kN5ezYcD4CePwNFrEknyAvUEpzUkbgt1fkjjMUsHcUoaf1aaWdYU1b6owzUx7kjnaD3B1LUyLNErw6ntejQwYQP",
  "key42": "63PWv14aB1BUFFQ5qHLzwNw3sdTyqmgWsQ42uiKH7KoYkvFUophzHxbiWMbJkWfxjFyaTKSkxKyJspAdeA3zxmCF",
  "key43": "5tKwPm2cS1XXv3649Fk2rW2SsCFkHjk6ec6CKq3vCR5t9mvQMCN7oq4vMcE67C5bR93McxzWNBzn51rgCj2CNVmq",
  "key44": "2QubUtnemc36rpBULUPWMG2Pwkzab5YSAi5Wy4sxXVm8y6ch1Kq8dTgUq1koKGfGz7eGmeVCPm2LfM6wSxYNHyNu",
  "key45": "2g8QCSwMUDx4U5yoBRDRkdAZA7KEE1gHqhWjHdsm99TKh48XKPvXjiVozLz8VXbYf7jxx3sGexju67nfL1t9k9wn",
  "key46": "3SXTcfMUBbscEBtPQqi2VHJ3HiK6QvoByfhiRpc7Mopgqzfv2LfNLCfsQ3W7CjwFsxCgeMsYPoBvTYfonk28tob3",
  "key47": "5p1NALQe93TfbXbEANJYNHex7R1vJhEG5h4dLFNe3vmMb8L5uUDmzy5WKwPJuTjhmuDyi6ov579fJAvEpTXtMnGz",
  "key48": "2SEETbmog6Q9dgvQMb4cAMt1yVmnFdXU6kjDjgG1yMvJ7LVbY7wjRfK6bvwsLojrESiNrgzTRtYaVvdaCwwaeN1c"
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
