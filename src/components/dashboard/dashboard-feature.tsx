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
    "4YFQrPvMVCi53jigGZBr31FsKbPwr7ooimgrRjAzoa9SDXdSkJ5WF5XZQBbhK3JRXW9z9WsJHSKHbSLiDUGd21d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ZWdStsfLh8GgEMGdBYCsLeRFxq9RTiiVHReSQzBwnqcrC18ZRAarMywZLQi9e7eT29nbtXhEitSkb3fppcG76N",
  "key1": "2ANWppHhKXexiGkJSQYqZV6PWDoXytHrx3Gjb6wYRzQAWNGMnsvoLXqRMnFMrh1GDcCay7TPhzFKdQ2f2fQ4YGug",
  "key2": "7bqv34yJonaw3PQSi1hjFX3ZMq2SgozNjrGE8ok5yH4stweiVryajkDebgX3f7c8imfxAh9YSdcA5M1nHuRvADM",
  "key3": "3NeJ35bodxkQhJzUnhyWYgPgcQhawgCab2cNnQL5vD5qYpdymgxJxabkkMSgt6HzLWbBH4z6EsKiR6sx8fWLHCW7",
  "key4": "5ujVNEzcvJc4SBbzEijzXDPqgVCmDqExcrNwrpaUKMmpuf83DkTkGJUJPueHkLWWus6mYRwLz6Xvq5fdn2RpzwWD",
  "key5": "3cotxjJT78LSH44AcZzgfqtAKNyM3NsCmx9GzW2zgjMonom3EWZAG8w4npsQovKQtNQRHKT2zwjGSK2QEoN7R9dE",
  "key6": "2LEcVrJffH4TN1E3FZ6rYg7WTDYX2A7HftsnsVfxHCjb9nkuurZtRAbacUxeV7koWog1QToqptgeNMBFwtPEbUi4",
  "key7": "qM4qDbpgn2RQyr7N5JsBz7hgEndwsybTb9ziNJiTXjprxbKzf8evY72WTP1uNAZh39qZjY76fWRCVewDZBEAE3e",
  "key8": "44Y1korpTMLEtDCLDczsCmdk3KszLtwWJPVANcoJos2NHApjr23hyWke85P6beFnRhsDJipB487jHKvUHAJrqK3d",
  "key9": "5LuUSjHticZZzfuspesGnFWJKHJx1V9M9RvA4q7qbJL18PriQMZqaF4ZobrBCzo5AYNQHgCTVcrA4h7Jb4pFk9bd",
  "key10": "2NSpDJiQnku8s8ZodJBxUZnBkkRkvMf58m9SC3fmrxqoXvqhiDhCGgbteRhWtRL1HFNZaw4RywbUt1s2pQZDjDVe",
  "key11": "52TgH5AHxTVouAffJCX1VMAtbXkmZCE1hdx5VJKPQNzRx2WtCUwLS8A5HVB89kT36fJ7U8fwEGkrWU3dpfdjC4Y6",
  "key12": "4B2bhmxhEVGYm7eCXVFb6DMRYUxNY6PnYZ8RL2MVCVSDH8g6qAvzzo1M6wfqJxxNMhM5ZQ6qkVpqsN4wm4Dny2xe",
  "key13": "2tjMuyUBu1TgwtbQaxZxHAu3Fm7owjQ5pqAQdphszWJTRsh4orAJdaWkastTfYgPtuyZa7c3muy2Hp54JK1A9crr",
  "key14": "E9jEET37opiD9UBDKkQebm5hRrAt6X2RM5S7xkBkgWc1vJkMqnsMo5sx37SSFDmrAFJRX4mW9edVLmxVpx3jqPo",
  "key15": "3p8ruHNV1P4dF3B4MY9CY2bQ9THM9EuCvudS5beMsuokDKJdQz1WQwH9kMqaT8sRNwLoFA9oU7TXfao36BzesKMM",
  "key16": "4UetcVvwLrUieEpRR9a8g4hgD3UjRmpF94EJ2GgxPXnGTTsU1gG6BKvzvsD2gHv9Yhz5qwp5nJV11a3oz7dmZ45t",
  "key17": "5uKjbkcLEVZWavTtsw9eMB5NjjA5GzhyWz4mMqvNiP6ry14oXdSnz7pZ5rPAxEC7Y64BxFHeqK4dUCNqict22nqU",
  "key18": "5p1hUeK9oAqDiGUPNWejFC5TJpQTepzWrenG2oZJ6Giimfe5eVMcXZJV1Z5VkqeqqMJ9Wj9mG1XQ2N4YwC6LTSq2",
  "key19": "5HSVrti2UyjtzQTD27D3MmTCu8YUpeY9CfobcrynYL4X2YVVCTjgcSVtNkUQfShRAPb8B8db3GUm5E5fj7WJ64Nm",
  "key20": "2cXQHbFmaCNqVEPdNG4JNVdnvkefZbnMFmJtRCkK8M2EqufMBuRJK5v3kt3pxCLCwhA7r5d81QE26upTokzR4rwh",
  "key21": "5kuz9amcKMGnZD7eV2ePeNa4hWGhjn6RdCKvvJBdSyxuwrsKG9GY33mcSQcKqqyREXjSxxe7hveHCG4qbrkxr5dU",
  "key22": "3n8N5puVt7VcBLrMuHWxZVJBrpwWDH2DLjXrapQDWXLKKPMErFoKVQ4g55XYAGwUypXhgmFSjCDvcJxBaD3BuhJr",
  "key23": "YY6nMP28X9aPauAPDP6sp6tPKHDQNiHDJRNR4QL5jLxu5vD8TvMr1n6Er5zpSz8GMhVygt3tb44ECvTapNNw6uH",
  "key24": "3Kk51PCbXa1yBPka3FEeQxdFZ4TSrDqtsNwkcyS1QJoV2qoGqHvLoPgiM2dNvT3bqdhX7WvfbkoB2gEGRM4QrNNP",
  "key25": "4mG8oiHi5bevAje41SH3TQDQy1fy5cjvn3eWwWQefQoxq6PkRLQEWCUvaZR3o925i3Ty2EzNWP5i9PrTMKu1ENZU",
  "key26": "KtGbeVGm4o2369d2FisVmHjefSmsvS45YQL8Fs5pyLDXaSfLFf71GwT8MvYH8PDSkfc9f2RLtR3Vk319mFZwJtx",
  "key27": "4MF64noWtCZqFmXaheUQDcuZaQQYGxX73Yb6R7S6AXEMP7BWzJTm98K87hJMWPxDEcZgaFeN6H6nMQ2WrBWYZiMV",
  "key28": "2RFRLiGS888v7vgNLgmR31ERqEgtkCUspSvJREFN5sNLrCdT3MMm6MXNNCszVh6fRj3aA66Db6uVL2WggapKsxP6",
  "key29": "22KXFoddZem5WCpBfYK2Die6pSffDjv8HVNXQKHXUFVMwzZjPTbfPV265FZsEiL2fGyygZRv3DVZxLKWARF97QMt",
  "key30": "d54AyYjE17eFj9tXuGfKmoQgmZdsMZmLRU1n6jcJYCfEEqVmFY7m9PJsTeY77Zw1ECGjpSbL5NLRkahQ6YqApVA",
  "key31": "2g2UZqeon1bV8kXy3enauW9AzJ4Lu41YHD6by8THvnsBqWn5AL6mHd9pKUPpztr2tYHFGUywi6vqaMSV3S7Po94C",
  "key32": "5FWij8XhRsr5uiiEk8jbtGE77Qi4sPdbdNWJsFHKGW4JkwBNriJUekaLLzZKLRpotsyPHnN1uA6KdycoqioRgnYX",
  "key33": "3UzAz3QomrPo5qnUcQEXyDa4su6DKsyVy55pjLhNjMLVjJ6MgmFE1XFnxDeo2eJR8Ee7df7aM87br6oFqXCUTcub",
  "key34": "4pdvexRocGnFWqQdSX4aSe722dNSWXjaydjGmie3NrNpvzGdWGY7hDR7ikaeyqY1H42M8JQUG9eLTcFGgnVv2BMC",
  "key35": "5ekTEKjrLaRwS9JeDuWtrN47JhDBCDjS5AfwtMSHfmjnoWLpNnTXdULuNYzwS1HBpvFg99FzL76TFtYM1o1AsK8S",
  "key36": "655e14GucuqFAZwEfcGwVWHX3MRrFDZo2biDsw5SqMhFq4UGiN2LzKkii34LS1DB4t7Uk69vyrPjVZwT1WBHsFCJ",
  "key37": "3VNVsZCNtu9RQozesp8UzZdG5Zpvm4tJKWiimD25w9tFhusdgHqRhGCEKVPWDHCeFjo2xswWA3fnhzWo49VVuTtG",
  "key38": "66X6E6G5NnufVesMRCUYruRbBPApxC6XmDQobZHAPFgd4L6kx1wMVAm75AuTG8a1bcmMJXzT6kJaZqCgKb4vrRvz",
  "key39": "34GeUtgxTArRjMycL6RKLnCFPhHgXkdRBwAtseNnDX3WUM4bCgfvboHu1fEGE73ShRukMJzw8gpnuZPLeHah7ubs",
  "key40": "2GeMpsD22uEjk9BfNn8kz6SrEnKQwtkMXH28zLdrN34LB8vEAJK5QErVcDZ16puagxojtWiNC3cqxVFmtXMENU2G"
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
