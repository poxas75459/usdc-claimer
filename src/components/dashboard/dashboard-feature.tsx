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
    "4BCgofUt2wxBhjbYJTH85unHRGR3UNjQVjhnPVgVGPKNNrtxnK6eeJ9PdN3H78q3uzis9TZVRiMwD1eGSGtru2G6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3jyxwmo9RhVCjfU95KyJmcGDpovjXRq9q6G2RqNKZakeZuxnwG6QedEArKe6jRJaECdw1AAFCdV8ufKiF9dTBh",
  "key1": "c8o9MzbS9dMJkZK19Ti8cKiHkrKyzetSgCCbqMm1fqUsgugVhuFYD6e6TaxJK3Z35GoVeMxnBjrPwpgni8p8zNG",
  "key2": "3rrUu5sS66B2DQ5Tqebgv3hA7PnkzsxFVarjP7VaMTdyb1oLXJD7Y98PVr6K8kPiqkMBg6h3gUJm33qSik8j6F4s",
  "key3": "Rpe493wygDN5NBCvDjvQxWwkKLC9Y5XdqKZCYijrX3wJMhqR6VYydShXarga2uYu9QuhH2tMJJY2P25PwbCLJ4s",
  "key4": "HK1cCY4tQgdwTKKL1U7BwiAo46abRqW8ti56WVPrewBpuweT2BPNyvVY5jGYKCCTbU7LuLjSwa7Pmf5dMit2j42",
  "key5": "4HRuJuRB5B1anaW9f4uvPQCuAN55Suuuig1rMYvXb9WDtBgGNVZ7qNhtWB3bYXtP6KG33W1fEuqXE2jvMaviGYqm",
  "key6": "3WCJJxSjcMBf7DZ9SJxLoiu7p7ZgYDw8ZqrakpZkQ6Px9WL1mQC5BPfwmsiSYCx2y8HzRVGk9CKYgCMYUHTCmaNB",
  "key7": "21wnsjWgQ4dizfymRrMrsK6qXouDXgxmjk6JaB1hJKMzVDzTHAbp2ftAgKk2hE63VJsi3vcsVvXyf1RdgESsCoSb",
  "key8": "tDAmf47a3XSiHdFwUAswAaBycrvP3yHYi9BDkdpuYoc9N8J45xYz437neuk13uDGe8CZcbZbgEnBcUiHzdBGK6D",
  "key9": "4DthmD4SvXHMR1SZNe5CpZCGQJPFp6xGFgBKUAGtehbG9yVW3fVs2fdHJnmRkzxaakjQGiHP4Z5JM5KUFKH7qNgc",
  "key10": "N1u9zkugDfsAqWDCYfXkgHuJ9ViB4eviWHLjDYyfbExKG8fQYkJYnttx7dBR4FCnwhJGnQ1qsWiN59TqpBDKRm5",
  "key11": "45Z37bryrf8xM8AtJpavPaduJaW2BeiWQMMScRbqhqFjaX3ouYUpiNPyAWftZNgnCpwC2zYtqk9zoVtq4xUsyPqD",
  "key12": "2ki1ZRd8ybi4UgZs6TMVCJk29TW8Anad9C8xPsvTp25gjdfCJqFBaE7XHuUkDTRcSdt4rQDWRStVjW4caNKk5eFk",
  "key13": "4Lx7KrhEzDAgHCcCuLfMbvYRLEePHZorohWNFyz7LW53pit1v6JZxqXeSkwEGxqWPV4gXt84cQL6L88uSxBiRiAQ",
  "key14": "3bH8HKtHv8rgosXpLe8zJUdwevB9oC48tsdZYPpyu67F8SSsUaKgDpZLaKBmTP84e5kPiRGx6Qvg9NkmGvkWD3D8",
  "key15": "4jFNFYnGufxeeUMDPoQngRHwPLp6df4Fd82w7fQDEBonXX8gaZH4QQEBpQakLMLDkSou3rqjsCFoEUjLLxGaKqJk",
  "key16": "fCG4W6s9FrJeUmF2ZktbSzCBhqqKt4aVTgvkJvBdbK28D2AuWv7nfHuezUFNkzjaTmyn8NwybtS5Xhn2hmTbLDx",
  "key17": "2Wsv4E7KmN6oF778QapEjdPCNg7JbwSmkiqBfW3z3i3jL8Q22APbkEqSChs2EyzGHAhgi9xXeDigyfCZf5ygQfq8",
  "key18": "4WHjZeYHJUFxsfneTHMsrgk3wAfCff43s1xsvrxYsYfjPRrmaABDn2jE6kHUjUyL4g6R6zXZynFoVEaGX3C6wkB5",
  "key19": "472TDBbDst4ZVZeAdpxktUQWcNAdcLTueTTjidj4dFYtaxs19Vhd9uMG7gXfo6aBDCbScTJLagriyaHmQnZusU7A",
  "key20": "3CCk52DpmtrwjVM4G8nBzqJtU9wmzcHZsMh8tdx2gFnUucyb28K9gqJMHadoSaeLLi3hTPLgvcdwaRq7Wt5jetmS",
  "key21": "2sYty8KSLSMysRUT28bod7GpDwKiPZbXpQKmsBZpfkkBNRJT613UthHtLCaNTLtzq7ykXjj3geZv39Wxvu2qAegf",
  "key22": "5WdrkmDJMCN57Zqfvd1gctjGqPjeYWvV9ehkGkeyZfSVFjuT66n8nBriPNrEBhUDpgJATHyfcaSjaLw9mMRh4eE1",
  "key23": "5JSz1ejHbW7LEvQbg4FEzvd6yqxxmhgJDtuZskWo93oRqvzcKooNtEwMgaieVgkHkNNuxoAKrL5rBkT9pCRxVKfF",
  "key24": "3ph1UUDELhbkSN8WxbWVygJQLvnJZV759yR6vvGSfF7cSwcoNotQM8jvY4pEY6viFbZoYFfeLzL3Ygq9DPRrr4Qa",
  "key25": "3DofFD4B2AsKT79L9QuSjzHHgeoTSxVd1TMdbRPcuR58Qy1NzBn46F5uxmXr3TDtrydWRCUDg5pJK4oDY5gS7Wog",
  "key26": "pHiDgyHYJtsuRN71Wk5tyVwZ2mqJghj3qUqehN9mHD72KDUMo2rZijR1gCUQndBXYAczBTKcKckD5L45aVW8BPS",
  "key27": "XZsh2V9LKmkSYD4YcSB7GfLfEkZ1DQobhbMKby6SLhxq4oYk3YbRFGterAkKzuh3PuvmK3GEErGALVudRtncxqq",
  "key28": "5nk8gPWNA1RDDzM8WV7GJ6uNDQGTsCPp6NnkafZwLxRxPyKh72DRKkqRFoG2eDAA5KDpPe7NbR5jkU8roZ1QtdDj",
  "key29": "5h1oUdX3auxBSSLpZi8AvMjrSuswa7W4ajHadvkwQCsZZJWssjxGiwdVunmMEWgvSqYJBUucBErQ33XayGaruvmB",
  "key30": "2XNbkWotfMbmDcP3Bbd4ftpPwa9M2THv6HLsAYWsL77Ac5vG9k98d2EWsL5tdLeXxbAh4XLcZS322fuQB8Tm1WUy",
  "key31": "2rHvZtfhziCzs3mboNBUhgsxn5WdBLM97HbSQKwcsHi2cy3fLfVm7FDhK9zqgE5NX6esqqmsvLH9DJnMMjuoMjKh",
  "key32": "4tnomrZEuEhPkbAgi6pUuX8x8TEtxZerHCiyng4Knpog48DWe7gqyNmdEdGHLNvqwC3bhrBnMPZS5Rw29c2UTk2B",
  "key33": "24ifahSMmb9WMaUFVDh1tfiWdskiAhy1wpTw5AuW7A7hQ9WEnsX2jiY7Jb8D9b7TJUk3Ju593PjCQsHiyZjVoNnA",
  "key34": "5HxXhVgJuUY4p5zits9K5pywU2FzusU8TKdfWZ2v51Tiyp11u2vmziQxDsxG2TwxPQEBDUw39JGiMPGTkx8jSzxR",
  "key35": "hsbU27zEthNZifgWoreSKFdDynKtjofDUwTyfkb27nLGcv6YvRgydcZi9XueqweRdvrSowGa7nyrbGEjX3d55du",
  "key36": "6UziJAsSBVJc3cJFCVL69QpGwsMQ2CNNSNUttAYTwFdvufYd2uw5H1F8GGCfzFoBBHnLPLqv4xrRxAv9BxjAETQ",
  "key37": "3Pi5CWw5DMWkQUwFGWEGHpJTzq9RHbeHHamxxcT2nspDxNqRCEFvwX26tntswGVBjcbyZDPb1nZpXB2xiAVUgwZf",
  "key38": "4RDUCT3mJxWLvffZqfRsSVKMjhAjh9JkzUsm5eqd6AdBZw4ugcq6XgZ86fy91tNTcMtceKQmstALNGRP1FKYadJb",
  "key39": "2CJ6Yz7Tdcfsy58Fbn9Qr9msPYME2od75JyCSJkVd6hMo5ghBy9Hkt3fLecmKU3q7WeoZvdyyL9PdFBsrRS1coqk"
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
