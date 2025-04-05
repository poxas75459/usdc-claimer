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
    "3Wyr4b4VAwCkZkFzpJjkXyKkPpSVKtPkLYi8xiLNiqgyiiGiXe36cRV8RUFSNoJN11WgyV8D7Hw5heLTZBSxb8rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6TRkU7CCinqq397LNEwwr4h1uZLpubndRJnuUJXSFDEvJykNwadRNqcJGn35g6Vmb76mKbcxrLSjBsGvCaGbb6",
  "key1": "hjd4ugk4QUJGVHPkTXhUZ4kT6zXaYTWWgo3bTN6FLJfjyjhHkBnVz74qv9EwFgEJuDpDKp83gh7AksS4NyCXz3w",
  "key2": "2mNeMqPB5AXvcm1tQByvZuby2JkAjpsL7wig4VDbSLfPim6T7Yh1aGyMuD5eavJPJwDiPLPwNAaV5aQM2ARB6ma6",
  "key3": "2h4BLY9fMU9Saru7LYAu8zkYsQto9nsz2Az4L813vMWaupPgQ9GvtF1vRSj1AEnsjLLFQjw57PomvpMoSQwmCgvk",
  "key4": "2sznFsCEVonviD424EGWJVqSUGQEH2WqYnCLFSvdgSSTvbn5HX1wee5KRJ1w3iQHU5e2eSj3Xougr2TbBb8AxUdN",
  "key5": "6Q14eHAWSky9LWzjqB5TkBPpDqw7HWSusuzGT8S8hCiwybSbZzW3BDyUe9Q672NK4BMnUYw5CrZfzhnHFaAR6na",
  "key6": "4kx8WANjX3GqhmL3HAR8npWSAXhJgre8Eic4NNYUMtw52Z1jmW1BmcLHVqo8QC5KyojdKzC397KHbKJb6wmLHu53",
  "key7": "3XdJZ11pPCeR1bBwEHU98e7o9KrUgfzKbZX9jPD5KuW63Wk8gBLUN7MJHsi9goocrgWVZ5pNCjDfBp1gs7L4Lsyh",
  "key8": "3Wvn3Tu1Ly6YvgXdgnDKYwhrPJCQVXUhinb6fXC6hUCiEwgs3B9TT9Rr7eycUjcYkyDbUSHjKMf8YWKBoGjHyzeG",
  "key9": "VUjL6LXkas1bYe2yFCpqpCLgPeeG5heamqFniPpeVgHcqLQTTjQkKyfpLjML4Cktn5ZojG7DvR9Fct8EpEgZEMk",
  "key10": "66rcyuNsHPYCJnT9ngu3V2fCpMU3CEDNBs4XaYY5RguwrbQDF4n7LpN1BmNPnU3z1wRh27mPtEMgYs2FpqXbUE4J",
  "key11": "5Bs75rBHjG42GnXToznMTjabcECVkepn7BBL6Db2mWdVrFqKqS8SxwHKciKTZvGFU4oWTtLZrqKPEEvQR3Zk77Ff",
  "key12": "5qKpsPoaHEtJL4k7gAeRi2epcaHDK8R6jxcMaNWHiNPJQJkiJrDH6qLMghrhrmQSVugjfi1G7rY7CJzWHCM5kdef",
  "key13": "21w8bCwSpHXQ9KXGCnF8CQDR8LzpsAHsz5U9CjPpbkboMfQXhLyMX9wgmYpvdzQqeGc6Zw4FEhSTrdSvCfofG5nt",
  "key14": "3GXUzQUochvD23ti3aTu1evb7MAjHL9AyU9Ni5B6gpiwTSbbUJexq3zvSGBtwEWxUJ7X6Fc2MRF2nEMsBfMxjWsj",
  "key15": "BUjDRNvgkxmnS5towwMeD25Bq4Y3tfavZGQqJE6HHscW9YzNLtGarvZfrKZGxWj4NgnGcu7vPuJTT8Vfy9kDMrd",
  "key16": "ZtymcttUJGKYSWdx3NuWmzzEvAQzuThT9Q38sLTt2JdZGtw7E7NZoGx1fSh1C3uFKHMVnzrxSGrjSMYwds71Pvf",
  "key17": "415j8pGkbpZmSTu9UUYDqyuT7rNS99YDnmbEgTAegyR8EHewcpCHhVzyzhiwyjByCgWzDvKcCyfuQUV4u1bhUaiK",
  "key18": "5VH7GxooWsVAcei88oQ5bVa8SWDRhoeFSYCSMKVHtGDDy5HXupMrEWJSEBFZgkaFnuhaHZcX6npbnhZQ7aHGiTVe",
  "key19": "2ouyEnCCp4Ya9k2rViVJW8LsdUazBfToJ9BxoCKutSQEjZqs6Y25ynWTo9J3cN8btSb9j6yns3ws9x7G7f3tqQTJ",
  "key20": "2bXPbmAh34hbNQ2msybmZZRM37da4EhNcpXbBBG92UfEK5KpZdK37BA9c9xeZj9oQREVGpfpctakXK4z2cePb56n",
  "key21": "4t6dExE3pDU9gojXzUHMEYE9wFjyfEnCcQADCRL4Yib2XpXxvtUTyCYLeiuj51jRQ6ozLbQMYDDfQrgAb5DeVbe8",
  "key22": "4eeH2SQwXrQwpB3A8UaBgUC6rj38i6NTPLdzxyKKqk6XEdGebadWbJgJHndVmuXtFF8BgadLxdmA7hSqHb146AE9",
  "key23": "4zkPCh8m4akgNM363pdkE6z5Rro8gkZWLH7PoapzXiZxWqthxxoZrsqPaUvQxnz1WzoyFkjcezunNco6mVrYrHt",
  "key24": "34zHAFMJfAkFxtKf2hzxANidby6rMMjEJPbe86sB4k7UxGUJqGqYGnByeDQycwEiLLm1Cwdq98kKe4Kbb3MwRA57",
  "key25": "ojRqe2fWt6B5iiJjwrwbykLe2F2e78jcqtgrZ8cxv9dyq3ww5n9JbQcoa5ZLwWk3AF7J9rZQMUVwihAZJ1qJRC8",
  "key26": "5mxa7Fksq9L81rEQ8UZisBzmHN5YVZ9tkyZrdVfXjRE9866WjGhAxSdPV3M5bY1zP9YanLDLnVcKKdMYnFy3wysN",
  "key27": "3NBEUm2YMc82FBofXiW668B3g5La4mewVdwsoquUSG7AQ5g5a5EcMG8a3JyS8XCBZTuxQLW9vo33ABBETqSpweyr",
  "key28": "5ap5LQsqFzKJ6o9EAbcJXPThiiwwRJcny6QVfsaJLJN2ikLjAHGjgzzmU6BrCjwufEkyVc8MHPa7pXiumKjd7CNd",
  "key29": "26umFPgU6nTizSJ7QiBsqJgZS2qyxg4nEQBzmnRiCyPu3j6tuu4dbk9moMT9MmM3TajzM9FXDpv1yuonqUaS39Tw",
  "key30": "ggzpMv7xzYGdF7i2ysDLarbzbuT7NsmUdkaeTkMSzfREDUcEH5xhLrXUM9xUJ3QSza1UdRLgF4tAhNzCRevZfoe",
  "key31": "5KFLEGWVKTrAqqgKL3P48TBi8bkbnXvS2jPxdHRB2bhygqGgjHbmUM16D5w2YmvQtQo215S7hssvziWJaSPwGDNz",
  "key32": "4CurxdEuD4d6qC3HaMhvxefDuHwqBd3c72j1xEDg226ieW8dymmKCrm641vB7qx6fRZZchd9znqCuw2E6UrtnMDW",
  "key33": "5nhQrtZEcJ6uMKWBioNCUCcPdVQUxkK36yhobE68SjP8hUTFQ6gZiYqdf4AAkKS4Jg47bq9epPrwDCsyWjQMZZbw",
  "key34": "2a8SQobEEJ79pKAnpRGdd4ERuA2SVLL819Ls9EgVWMLLtXyg4SXit9fSqWn7ex6e1xTGHiMdmMjftAmzGakeCqvD",
  "key35": "4w5X1xtkQQTpf6iRpbGhBQfQkQWjJydnAhCLUhrMUC9QCHHYTEqP1HFnqrqc4BPQvZTcaXsX1nmMviC449Va2QtT",
  "key36": "5ECrfdt8KU65oyvQJb1soQ7uVg11AW68UMK65h4jD9wqEmA4aJ43uUontzBmx73944XcNdkLhYYYwktpXLP37Sp",
  "key37": "5qEcpscQn7FyWugtNACeCafGx5y7QfRjXnKyMraFLEZsFFzWaD6S6EAzEuUBgDq3oD712DtwjaPQwBBLN3jCnzQq",
  "key38": "5PCsHcBK6vBrs3HSxEsZxFMLw7v158Cj8civQKUvC3VJp18vgrPz3SKCWnpVYQQnnRx1tTuF8h4FDe7Xkj1zPUGf",
  "key39": "2NVeKUF1KwnHLM3iKnk6yZVGg5nZ4vFcmGFdZ52g6AQCz3WFihuwxsENx6eaftRsEYRos8m3A7Cp1SQBkhxZgaGj",
  "key40": "4GtWtJmhrcXTisrsKPGCivyfrapM7SmEfL3q8Vv8LmfPRmhUKq5wLjruRB4ZWFuECh4dW9xgCRdN2pKPZAETkZDH",
  "key41": "43MZLdESyU9vddSEMhbwWYyFvTd6wbMHFzoX4pchDGnHytDVazhAe528dLRmCmNmtAu4YCSDHQqvLiSEmvjQuJfo"
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
