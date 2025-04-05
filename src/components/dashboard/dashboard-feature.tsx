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
    "2VcdXBDX91wdN75EH4EGD9jU2DWCoe4ySBMFKp4KgJm5GaCFT7nZUhoh8gtjWCMUCSrFP6Tg8hBrTon3xsk7EYko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HgNnW66JYtGs56PDdZE7WRVyA3KFAGbdnM9kdyw53k125yuKUpi8JzStb8jVnvXoi8ZvGVqSuBXvogh9u56nst5",
  "key1": "3fvQ4X8R8uMQBBiQ8WvWFBcDZY7kePsJZgVmwAC91zKwgKijVDmjWBswqkmLiASD1Lgby9D2UGWwXuC9DHsawu9n",
  "key2": "5ADA23H47A2fCvP7xjsKo6E6jtrCMvQzSe4kKWrPcaxxTm7LZ4wBSTpMspnUiV5uhU7Vzk9u3eQTeEHXdZcCLcw4",
  "key3": "uXpkYnmqtdbqL6eHK6Re9rZSe9FU5bxcUqXXdo1urmWwNAwPQt4k4rSUALMCmDaoUzAcf2AA2zPqFUXvcFYX5es",
  "key4": "3AbEiMZxS5acBq8CMymS3cyKA2jiMPJJFR5MB5kvAeiq74ydK7rZYvF8Z9MaDCVG2SJr6KMNuipgk7hAnKaMsu6w",
  "key5": "2TzMYwyPT1Dhq9tSt4BtuZeLSgAJ9Wn3cPePwsYyfpaDW4wnh7eCVxpUcsywkNRbjGbBwwpEDBB7dppcuMwX8t1t",
  "key6": "c6mxfeszdC3uMoLK2vi9gr3TCjfXMZDyQCeD1o8KWQWZHFnGzanYdf6WCZma6cP31o2HmfkMkBqSj37ZcyziAzU",
  "key7": "4eFsSYe9APvncofGxiHcQYHbi6C7urmKG5abv12aXwLHRFHutH9vnbjG3KydnDmzCQwaPMDdY2iEivcRGft8WoSV",
  "key8": "419J7BsVHzukWmkfHLPKDco8Vcg3Fxu8TupiCzrzmX7kUAZPSBP7JYXGWrvx2HFjozcyqMLFUTCK1QN3fFgvMxaW",
  "key9": "3LR3Q5vtiAgvEkKpnXy8DkaS6wCSk5Hv29mhZuYonSUGrgVZukN38hnbBh8wevKnZMcjoMzjBidz8ziMPMuUAGBg",
  "key10": "5szRjs7u7eVhTiHzoi31YT3Qs6vbcCNCx1JW2hcgnm67PRTXhpHtLj9JGwacdZ32YDi4n78XtF8PZDXvVUpbpCMD",
  "key11": "5NQ3zwNt4G69y9HYpzjPsqA8B58mfq44Epf4841bGDzu8PTRc5fdkUXhxxW5rLoqXqj2CBQdcnauc3fcoKrx3XLV",
  "key12": "2o8wqmWNR5Ww4r2WRgCGHKMv41JpydoVPrs1gm6D4C4MyH2HpwrnRWjWh26Zn63VUqaNRtq2hdU4B5wmabpFnVj8",
  "key13": "2bLENKuRfFi8FwFuzQDFvENWbAxxDVS1nTYdHBNWhFQgxjY45yab52FTwZgvU5wnQ9v8GvEzXP8vRLfVCwu3Yryh",
  "key14": "43vsg6RevoN2m8pJzxKjRrT9MfVGscxQjkgW1KH9KyfcL4cz3jVCqGRrfHTnTmqy64vxUC76w6Vf32n335EyCiUv",
  "key15": "4z2EKn7P4mD7vFx1LS2LvrZtb7MmTmaQ1d7AAJGxF5y9BLDZpYDiW91eGsTeNMVfW3rTkf33YQ9fFjGUq2wiBuC4",
  "key16": "3HE5SfmRq55SR9Rg9jZk2jtrq2EE3B6dJACrwMAqvQsXYK2bRWPqKCfXbN2jCsQ9o9MUo9D9vP4VcmrbLJ498dyo",
  "key17": "5aitQMuq3keuq9C2RMMXFPGFNFmrw21QD2pu1xSF7HiojD1k6xDfbcjevHSJuwLiHr8LPEuSMSDkQ96STXofPK8C",
  "key18": "RKoE3SrdR5Yi8YQ5FJjQVCqQvKgJvvuTgtHGi7LpGqruKpGyC4v4h12mexGerRLRDS62myqt2wCj9Cvv5hPvUfT",
  "key19": "4KiABRqMLtyfTYRzu8sq7TqonLzb1BJsoAf6NetALwmNTQEEkMbWtp1J21wnMMJMXmzdwLE4iY72bXAEwrPGLKss",
  "key20": "2jpMu2L1CerR9gbvZGeWV4WQDDyaCkkvg7hNqLB1cwQ88zc7TBjcaax1Y3iq35Ffo1REpqizkFq9NyVRkBSBWwWx",
  "key21": "3WLj45m5Srnx7RB3aunwgojgbQTErFZEFP2oA8QfV8o4k4Q9gCZPdm3gVXZqAGDKxeCT5PfrqcRsgRbUJKCu69WR",
  "key22": "3gK4s6kwSQcSATrddGH7GtuZ52FDVvXtgGajSNDwzRdCRDHdBJa2PWjPXg3pskqDgrtfuDJsfLBzFbrzevpxv4Cu",
  "key23": "5Vg4DSd4FGvSMcBaCbyYbfEAL6UbrnHYWMGXFjZmYP4KVo5u2WWE7x5pUEhsSk7DAs1m3yLxkTTj7B6D5PJjboJ3",
  "key24": "p6k5MrQtvcbj3uGNixKW3nokvL2YYTSjzD8EmG6ydorLitMBUzS4UqsqDBsGKJyqxnKkk4jJoWMp2VpNbW9Jf5C",
  "key25": "5wN8qf5MkBTfCaNK3NqG7hCVr5voJmyijme3aydoakuzZD1V2sX2XxiKNTRFt3t3FTZpApEAcjjR7X38SSePrvxb",
  "key26": "ahY5R8cBfNCAuRmpYxEwvGTNVxEQ4XDbPswhhJqgU1G5DYCPsm4SwBFChAZt1KGFuiHjfctrwmzxY4Db9M5b8Bz",
  "key27": "2Vmxf5yDMtfh4bo7mYw26kBXqJKkFtUvForXyDowxEXMHKGE1Q7ZFD22emFr5DHepzgJ2HNZ9uuv9bngsN3EPyHB",
  "key28": "2J13Wh3JMhS2mxXyLA4AQX6maYZyVydhZKecfLwWdaBX94WW7ketVp2r7479qWSuwyFCGRoFe39SGUAYW6sHhfCR",
  "key29": "41KUdjrS2fZ62aLCg46RSk6VUJDc4BFmNGaSKiX1srnnYFPvbXnPjWj3rQaEfiDgfFFcmfAHahboaU27cVdjtpoi",
  "key30": "2ojwamqGVUbJSXMdT9Xd7ntNvzG6jT6HxwXWaJnhm8Jbq8UTzbTsb7TtZNhhr9dN3M3ByanxuDArBeZwGqUUMjuu",
  "key31": "4jvTBLkMVDhmaFhc9s7AwnSEEjbJJPTiAv4M6Rum16SdprtTRsHtbgn1PUxG4FU5V5jGAsbGqvPmiy5JU4nUD7bv",
  "key32": "4rnDmzt1to7nPvrtqZ4LWy51axezagzfYVpVBLTgfS4n1kV319PqAjZKnHxyG9NkP9VHnWoypXgUtpwNfjep4ix",
  "key33": "4VbooMoEsVGkqQys9LFnsBa3FFhv8JPL6v8U7tipKfBhng3Uv6c3UU8hJ6iaEfDBvaGSVXyS4RNvniVqgnHdmYQT",
  "key34": "2rpj4n1gS71TRYPxYZtvoPZQ5aZpA3KQy6QdSQgrwG4iEsEstLLvwJXyo3nv5gYEQcAeDsDvodETjzKUE4F81dWD",
  "key35": "33kQ7vXw5EvtCrCsocj4zXgtKVUqp5qLUhGWGc54dVH3uJqhujyfc7uzd3CFZom5rmAwK4xspCoVS9gnp7MVNBnu",
  "key36": "2L43XUghABX8ekKKgtVs8GocbKPjBgworJyFsPgNgGKFivu5FXvRRNJPXWPsDVs5h4rDgFZsaoFbf64HXcdoJhNZ",
  "key37": "4k9pcPusY397Cd9Cmu8UjaAFu9vUpUyMCotS4NZPf9HpqHg3AJHKMbV2HWGPpE9uaWE66XDYYxBjYcZkbf3wAETV",
  "key38": "5MNs6SBnHiQPoAfUvbDnoZTbZs9AGDXeStf6ceVi9yCMmPkwvfvChwBbUa69cZF34A3qtBnX4JsioZGdFj8Hkvuh",
  "key39": "51Bsbn4jrqqx9Cd3uRK9eMCRRM1Xj3f9U6vGVe174h9vvqZtfoMoiwYU5XJQHQfVQg1jiyVxEwTRsvnUM9MunP7j",
  "key40": "qKFWTJSA4VXKcbz6wfa5QfkrA4LARmpePRVmKJvKyvfNLG9fzkHw3anAkPJ2U2F5wAXUNnZduRvJugXZ6jjnmSS",
  "key41": "4H5guDpptyBzQeDYZYVgZBDMYUByCDbBezsVyR2x2F8ejT57a2HvUniJUDfv1fvUzuv8uQ6GEKC8hvxHXrK79hHb",
  "key42": "4t2okQDw8uCw9myQRzZSHr5X7gS31XrG8odeKugdPpE1FnRJLP4GBSQXrGwHqL3Te5CiPD1DSbaN3Z4zEVQuZgZu",
  "key43": "63hHRcuJQb4GxkfmMG9UecsDkhVysHZEdgae7skXH3LWhrousaDHdHpFMaBdfgXLjgQbWJwCmMP1Jxa2gSQjWTs8",
  "key44": "3Tkv1XyXGNKpZxE9ZJXPKsvw8H5xhqcbN9dj8mdcJvsZxk3ohLmHXdeibbA5S97X6tL8zowtikfhDk4SUrfZ4ENa",
  "key45": "3az1JrqCcxt9Bkqjpyzqgmac4qw8iVQKRHNjrAvQzdMzgJAXk2QGeg1z6yUwNkzgTTcQcq9iLWU7qLjDShJgvecm",
  "key46": "4HABX2EhMXe1xF6uuczDhdybhCJzzU2n3Z9jk8RYL9EybWKfR5MfsztAsDwgfMZXujVoVDAo5JBojjzSamsqcSFZ",
  "key47": "4xgU1fBHJ67UxHTC9QxirM3ySfxbYJyKTdkYphZvAf2iAKjjEjDvyKLTADHNhhRWDd1Mk1xgapYDzh1BpPB1npRv"
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
