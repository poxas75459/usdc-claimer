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
    "4qXSeJRVDLt7pmMvGsm9jybSUUyonqKLxBMXDQq2SThyQRfEiCx5jiu7owUdQBN58pxniSMV1LtuoXvUms7Yx7wY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owUCtQzXSpqKoJjvZiPDzFSHWvN8W2zsWcQSkKWuhp6HHaYFcEt7N6S4AXgNBN9SdfqDbCSXJzeyh2B1rsDKKf3",
  "key1": "5W7ExUoNhKU1nvYKNXv2ZHCo12oWQD9zEPoDocqnXjzGhmSqWbQsetWcAXco9b4vFHdQoohW4V47KC5YsLT3EqY3",
  "key2": "36HGzmbK7NNTey9qipJamAYrKJuUzaLVCA35BVoRBHR618Rrt3cmpsqzjgBETuNdBZL5RB5gvhBZbmBKivSNzCee",
  "key3": "2kESF8d7Xo4AeSEUVCcLQySJmaUTxzcML1NFQgTQehdfS9aGz3cWLD1Afv5eahqwBmCE1uQvX1o57Q5u15Hze3EX",
  "key4": "3SBbTwyRobCUbjKeZtFLkcxxJHVE1ZKn2iXPsEKFJFfWHMPiGRFYFFqStjSMPF8TJCQWoaEzCssSiF1L5vFXSRAM",
  "key5": "2Uz5dy9UW5LrhfmyQvHAFgrymqCtvbqJZqF2keuemzDuZhG62Wz1LyG7CMrNiKaAhaADk5kjTkJSBppxKJbU2roC",
  "key6": "4NLdALoZFd9LVNM9VCssfXGXBox2afTeuGzCjZbrVj6AsY6mMC5Pb3ffKThmtt1ni2K5WhP7HgwpMMqrsSqeHcma",
  "key7": "2mQEJuVVafYtPp2uDx5Mbso4WmYp8KW9Rw9bi2qAenZDBVTjoZ7FkBguWBNeEFCsVk83v8GYtMRZJ8bBJKfbyvat",
  "key8": "67j2q8S2Hn7W9BfMiGYqTFJf7iS43km8c4gC9ARtRvUTY27FgZqDTW711N3eGoHemtBuW1tYwWdiHYJGutZ6RjRp",
  "key9": "2PJXvPaDrd43GsE8LGNX6Yo8N5eNV7215tBJu1PdANZRuAiE3hXaC5i2H7cBn2kooa8cBvkQegoAk4HgfgEP76dY",
  "key10": "3N2VTb4eQa6evNe86q9godMsiN4gorxZGc6viT4Xj5xYwZ65TVzUU5yqeB5xcPhdnSifg1ioJw9eVbLuk4JEqqEy",
  "key11": "3nHtvVXvifZTsUjVRFiYRhk2GtGxKgwWYqAt3yYU7uC7LKJJbUTsSWxqLj29efoifxvJiyKHmYmsSx4ChqKWuts",
  "key12": "2fEkxQgXqBbRLyHnAHzHTcYKoLRHwN6zui7CXSJKkesAuVRtFWZP83cTTmseeFhZR2K3dSmNxWiK1AaYBr8rD1AN",
  "key13": "31v5BoMs9KwRhuq4XnHMuWZnkBKLF1ADuQPjxPuWKsbcC1sFLbVW2Dc5XwewDwr1sJi8oDtvRP2AKBunVtieDrGD",
  "key14": "Nsicdkxkjays8omDNiQxkjmUPtAQJqFCBsPgZqRqAtdCwm5ozQ5jfi1ZpEQT2Rc7abojRef2UoABuhzBzHSMLhq",
  "key15": "4eRCGfbSNMEpBAKevLxs66A3KzxeSH1HmHgATL6Lq3SYcz4oha4FEWw19FWqx3ojPy1wsGYzW174YczWUEUtsETu",
  "key16": "q5WVCQvZDJZ9xYUrSTUqrJ39FDZFqmXdaCyxtqPZimJmJ1GYd1yBGBG6HcbogZD3UbZDau4DTqdeMZbL7NPqbwq",
  "key17": "uxVA68tShf1MCsRqXpsao3CRDXr4mbxHxYV8TKGPi3YdrUvi6u76xaFprf1YRXZPCNgyxSbhaksDEPS9tfhn4rh",
  "key18": "4SD7yrp79QUuTh5vtY3QZZxZBr465anb8aW9JiStrK5pS6Psjaq1C2Lpfdv4tKb33ReCzwECZ95avQ3ME429Yqat",
  "key19": "5iCY6pPEVT1xkwMnmysJd2CotJNyrvan1mXSgx1EyTAmEtrcpEZZrm9jZUM5HeAuWvfHJS5S8viu9hZ63Cz9VkLk",
  "key20": "5CDV5ZE4osAiK5YqLPgnMijQMguSjyn1pw5Uk9tJymrUrVu7vWaKkidyZCvmgE7JgCg4L9MN5JXRk46U9qmBfdqb",
  "key21": "5e1TuEDrdS7rDVHcbNkAXMwCkTWaXa3fZf8K3ZKXwLU5YpotacNBRpufJsnnzuNBTZk35PSctwpWrsUy2gxbQxxt",
  "key22": "S5WVo1wzpHSQqy7qsGvZ1ipwG2C6kWMXRNDFRERzxKUvZSxLxFjnX7vynuPk56KdCyh8uKK9AhkNGvKHsZqJeH9",
  "key23": "kdJzmeLieVT5jdtHCyFPKvXYxJeWRm33GxmcitBAnZgG8PvF8DTVXeJwPBTjbASawbeCQCLSVDyef9rf3wsJuHG",
  "key24": "uGMoMyB6BfAVvXZFuozjMwhWXA4zZPsfNpcPufx5rJjzA63h2wgrf4WAx6uc59QrYt7u5L4yQNVYjNHA1P7rvFG",
  "key25": "4FQaRNePxt9KJdrQg8ghXNAkFA3dqAMH9G4RsfnKx45WTX7G5eSdDz2fgkxszo5EctNkRZ7XxUQiXkgPfXVwNV8U",
  "key26": "52ZZgDH6L46vHYvNb1Maw7KkfiBGjdbBC2aGX9V8xo4gFu4ExHVGfCjSd8c8HiB9v1WJefDMpw7Zh9jUwrns8YjT",
  "key27": "4S9yurzoFxcsmC8wb9uZxsfXZ3rEMaijh3mcsCreJPBsf8CFYx9ofpdsLTgDruG2Gs55T25aevXbaszSaAKLZmpd",
  "key28": "5jpDpwdXqbUsPJ42JPydPFsE2xZgf1R6rXh3zZ3kc1JxUvQacbQJ9DxefBMGaLohd4UbVerix1d9MP9ppoBaqCeM",
  "key29": "ZtdeUDLum1WMBPbdVjDX9DL4Gx77fDViXLe4sPZkTUkwF553mj6G1iQpG6mRHekyu1TngnYs4t1PE3Y8jnTt1nV",
  "key30": "2xwDPYBcvsjiR5kbeyjX5d5frVBCaR1H8JBF9yaX15rwTYQAHByyaeYXz6QGF8UUJRxYPLQDgT9b1Wk9Yy9et5S2",
  "key31": "3PysrSST7jz8nQvWoeBF7janieTR2MUjZav2PzTYz6NweLg129qEKuSoLhkKVQZz8WwUFsDsDC6JPXNpFxT2KMte",
  "key32": "3CzVQXRMD8mtiFh7FV7SUK1RVNQZSjGgxFnPvAS1tkSz7eBHoyoRkqD9LdVRHLefPeiEWCafM2YW4zknWRgWKaU3",
  "key33": "66uDF7wQdkJyhwiiEvLZyDPQc4XaW1Rahrf9r6HVDksVAdckHd88bVZHhoHLWi5j8pkoX9iPkPorqByipJ1nUoNW",
  "key34": "5Y28FKu4Z2CUZc4set3g2ujRCBqkTPg3tEgJA6uEyzEy1GYp8LFZ1jNbuo2TLLkEfeQ2zqAujkPS76tQySFHCC8L",
  "key35": "2vagAsCUHhsJywKg7LcyL2ZtzhM78JArDETPjNZXX8YL5uLfBrdyJDE2y3EQ2RDU8iX61Go7BMF4tF497PPtmwGH",
  "key36": "2wVf38BF4qx2FrVibYY8UufP7vZHunZHvmzdJToWpaBh9WBEZL8AemfaDsTwcdYf9T37KvACoDiXRKhPYBFKC95p",
  "key37": "2mJZKWmNaXP71B1CW952XdjC281eV8HxmDPb5UGSqb5xPed8DchQb4qA1Veg5ZzK6jD42jrEygQJ72pTPdh2tBNz",
  "key38": "EbWEQjJMEYhQKMjEmiB71shWtbetdx248fYgfTGnGjaQZBbmUCtHqH3RQ2tNFLnfo2JvWTfcM8z37SGmSAmY59L",
  "key39": "2UJtmCtASGw2a5Hk5S8fzttELxB56qdZAGDAFuyJRCgqvmiJa4e3zE9vxVrbyAM6pbdFiyw4kH6hzMSCD1sjswu2",
  "key40": "6F4Do719VRbb2G9J3SqFFAELF8ViohzBxRHMYe4BLCt47mAgqenW2ZMekceFjyYo6E6LZ4Si3k4nogt7qL5SPZV",
  "key41": "3NUEHy2NbbbYBPbkz9BGWpWQWvSDEfFx6L17UkjepvPXKGS2SSFoaZ3FD3VDqT6bdj58Lh6EP7NDMsHhoCXHKj7W"
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
