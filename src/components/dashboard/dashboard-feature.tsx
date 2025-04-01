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
    "61Vw69JfydS2WZNCDV2SDCpQT8NiYBkwnJvchKRKKMYMDnTJ7U4BmHZNNH87tki6dWTAimtJ6sVrCKaBDWjdWauB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AN2wV8otTn3AxXf33pcqwvmFQFTVHcuzBToHXM7m7dYszrpJzwLWL7fgPYzsUbqunVMqMpky1ic1pF3V2ZWRAVt",
  "key1": "2wykbbbdpqEh3Lp5pZE6kAA8AMch8aoAi6iTPEf85PrmvnL6A6rFCi52L7FDowcs9bdGjgGUJi6HGEwGk1QSHhZ2",
  "key2": "2y98kAhJLDuJdBnBzouVPQ3SbXFCRztExdKXdW2ULDid3bCUTpoDZtcAPmjMeeiAU1q2kEaUC5j9y6dBNjv8drz6",
  "key3": "3wZErw7uhxvsiwPdNh5Ns14M9TNaWuFz9fK1KZBJsRMTV4sYbZ62UDk9otdbdfWAoT8PLrahmoM47ibJ4wMz6yWE",
  "key4": "5hzvfbFBXHwrShNXYS9yDwrupdbG6wXmUiNX9ochAjyrYawVAEe1AJQ7tQLec3YfJQqMDLEJpqJX25RvGRDijrK2",
  "key5": "2kS9EAzafMJshs6JGC25Q1UprttrmsNxsZs222KeCT5usyissaJ9Kr59saKpkBZBJ6k4R6YfybcEZu3rivu3d6SZ",
  "key6": "WscQWJHSE3Gh9z4Q7iLqySWESciVDLzzKHkXZKBuxhqLwTqC7x2cPPJQ23AZAiJcdo84NFX5S4mofAuz7TKhm1J",
  "key7": "2qwU8pWoeEz52nJcUhrc19oXZ5D7pRgZCVx3hCb2DFJnsh3SkzRMq3sZxA9GsDtDFaptuAbyaKN9EYo7UntYSmor",
  "key8": "3cA5j7JeyygDTYbB4gFkY4hXuFbGkE9YyjgooPcV9i6iR2vfcEHKqsDss7bbBfDNcbm6dZvH4dRd7L4aod7QyFwb",
  "key9": "3Ai3YNgX9KhTkEcmUgkVmp9R1jbB3bXyzUDtL2JLKc9npDN8bpXsVDcupLPCsCRnhU9StYRvoRWzss2h6HwGcoLr",
  "key10": "Y6EwXf9nKvL4c7Rj2Rj7mHWqYMZosvkqvEmWnsg7fNFWn7zLZjznngza1RM7UZ2KfQCbU7F1kPLBTJ1t8mAaj1v",
  "key11": "39B2vT3R6viWXztJth83nx7N7ZL5A6G8zUxk7xxtjs4Ko3884Mdr1jy5dCC5hzyh5GhCqZe3yXiikMdVCPVFdUME",
  "key12": "2y26SYJ2hjgUWLZvkLHoXqJYKmeB9bMYCqUCy91cmZjXrQRBPV2s5yLyknuthDkzkcrmZxQQqyEDumsdYUMXyE6e",
  "key13": "659McbWCJ3n8F1AE43vjvrYGmUJ37yuBmKKLu4PQmXCNCWpV4LHJs4SwJBMCvy4xPrqqdYLgKT2W8fV8y7K2SLDJ",
  "key14": "2g2UxDJjj3edmpCRjgCFgZphfX4pAs3i1xXM19xH4asbCgzs1ECc4PfAkgu5JrzQudHKmf9Ex1c4KsddtnQtuNRu",
  "key15": "34W7tzwcuGe7jJLL7ZhJaTSfLGWAJyS8DPRPZZ9K5Q5MJTgwkSCeMxiRuuFL75AcMAXu6kLqWA6irG7orwERYPtC",
  "key16": "3z3dZ1wz28kfsz7xMjyXdv3zCNq4pwq3wNXTrMxaVjbknyqUBVBLNC9415jscn21KPiFH2dsLqCuZZk5KfVxpRXY",
  "key17": "5gmSy4Jh1BfzS6nZco8xxSS5XZDt9B7zKQsrKXnj5UegybwKuypQhRMo7U8uuEUsXrdRMe8j4mFbaMuKguDbEJ82",
  "key18": "317xdgGtAFehmr8asZZzzESix4zqiFFXfBUiW55CTbtKbNvvVKYvzD4peQmMmzRGQnb2wKvvuMB8kh6ACsqvxeAY",
  "key19": "4vM7o1PT9byJEbhghwawpGoCsdbJXD6q9JxJc4MP5oeA4zqMqgUoB9zm4eyEnQVMxPAyYj7R2zo5B1xmQFHq4zzS",
  "key20": "5oN87Djyvfwo9zpzmRR4sMXUKJnanr1GzNMYQ3LjqjDPaHmNz3B1TXz5PzgCscHk8HGNEmzFvJ5GyeL2GWyQWKMr",
  "key21": "2fBP6xTnxtjGhVkSyasJ1qh97BeZsfNvhtz79Lz6QHv3g8nK8LfrWfQDAnxr4mibhytWmLYRDg4fwKNdRtb2T2pM",
  "key22": "iV588jS85ow1PbGprud5iokMksXAZ6ntTSHzgCWp75ZkhJfELqfT8Se93NnpEkShxG3vkjtPrrmZFFSjhoqHYGE",
  "key23": "2QTuVK6ttEPHfj15w9CWWLwrwddWZh7oWEq66UNMCdhAuAiJPizn7CrWQpxL4MS412ZhD7HZXXmirnoEWC3M1ZH3",
  "key24": "5hfvJpLUwbdewcY3cJdwERJrUEWFViirwj4bgbJK4yhZqHrYew7LWXrzqeVu2AVbfwRTaCp1FSMj6HnZqsfmyTPW",
  "key25": "qJG4M4WUkrZeFtpGYrSz7X1muMLJbCe7HV87nLHXyHmibncvyn2R33fP8TynByARBsJRvjr1HTxzPZPYKTppm93",
  "key26": "5Ddsqq8qckrbYmd2Qf8EEGEQQd8cfyPXqnpJcwYhPPUuFCKENuqKNtEHhYLeK17zp2S65pVkPvKCc4a7VrrAu6Ba",
  "key27": "2amRo12AKrW2mA89k9xUvbMWHQqGMWCggedxxYvUu2V7ZhC95DHie7KSL5EkS6gdeHvpYWMqquzj2Lmhdtg4z4it",
  "key28": "4B92uMYMvmjhCngLJHxvhiuv2nUydbxyRX8NMo1N1Y4dgc6HZ8ko2rWFxGwBHMEQh8fH38MGncYGAjdKkdcJtmHv",
  "key29": "3wJerYyfbYGoRZuhWfrGuecLxjoxMmg6PNiGC1mtF1zUSyPMjUV2xtBqJEVNfLWwUXSv4JbNbe3hLLhQkYSLjuv9",
  "key30": "2jh8DzrJ4Swuz4z5AeLvHyGVYWpuTWCTihrrdEdkvRhkx3rpu2Ub4uyP3gD9FGi6Vbix6EJffb3eB1SyFDzvDmX6"
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
