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
    "5ebs91WnreC36wevAmHkqXfVH1FpTyd5feSuo1LsT3cnuu9yBDoiLqKQjYt3WX3uUUwJRrqtxnZmkZZXxp24hMcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDJMo3JA258Wn86py1NHoQavrLAYQWRE1vC2RE7oCVvjdvqARhFnkvfgyrHuJRhWvhAZ2J7TLP5QGwqQe4Zmj7n",
  "key1": "4DHF9uMkwQZ1PbnGmSAYuJUyNMBUByGP9TkRZ49qKYke7iX4H1oZ6HM4rEjSbXVWZ4M7NJRduxnDrnTqmtbfj7Zq",
  "key2": "EJLeF8Vt49sxHRL5QFR3CjTRvCJS7tQHGdCVRD7Kt38JzLbreyMrMTU4GxKY2meBRVReSqumbnur45RRfZmmot7",
  "key3": "2zYuMVtMLJco7ycL3NVw3pNv26avgupqKnN958U4tucj8WSTxuNC6zBko6KpvTRNJ36U7wuSvXRzARcbxyxXriPW",
  "key4": "3VaKgtvXyiSDqABD76WWC11SU6KeyCG3yT8VJc315hNiaw35zWwBdKcjMMJKbQCADvP7Tn5b8rWPg5A1mX7EyVdw",
  "key5": "Sexx4bzaPc6ydYvXfDyaSDeHRhXa4QTKRkEvcB9478jzDBoHtefrPjTEPaKWJAjfgwqUasdqWfTchChJBWpCtcR",
  "key6": "5a834o4gzHLjDc72c52eE4AxzCu3LfJJzS78vuwmq9DBS4KH22L8LvFh3pZw8VZxYDZ6CnXSuz1Z2Hw79pTzF3FX",
  "key7": "4aLwiEWCevTu1eF4phbiNYfrnH1Xme5Ug86Le7LEYsfurBJcPdeE4KzJaiau2Ewyq99EbJimJmFjmxQKE2JvB4QE",
  "key8": "4CTkfpoMsVi4tdSY4RwADGdVoXdP96XHuzGZwdTDrDwkLXNV7mkjJrAVJ4TjcAXZXa7eijbLWzUfU4NmkmV37hcw",
  "key9": "4rNJnD6GQrYkingjiFC35mnYhAJeznA4MH2Lt9ndypQtWwUaWTpNvsKrpkDwrXUhipJ43jcRGieoYAVwrvcxzXUb",
  "key10": "5cjEgzdFJXAHgKwwQVcUu7QLnnCAwsS81TgLfYCH3RKP2KRiH9pesY6g76kPEiHNXQQBAKpo9gpGbrfjkYhGzK1b",
  "key11": "5EyX1mhhPeX555JpkWMvNDFQumBHGUqEkSATtXTaWsq6WNS5EpTUtVg4ngp1tLxFpce19iYC89id6D6W1MZ5hJJ7",
  "key12": "2Amn8JzSMwZJGCCqrqYh3KypHKQgUor9ZnSe6qUmq2MFdXYpq3xvmKAGSj7d8oM4hcyxtd3Stxd4e4a2xCjeAjWR",
  "key13": "2X9sgrCJ2kmJxMZy5FjVRN7RW5DKGG6XsFCdqWtQLJmJZzDczdpiFuuH3RJ9RTpWCqwi8Ce5kwnsYa4ypwqYNqqL",
  "key14": "Yjni2F6kaMpHP965FgZFB4ndGut7MxsovSLFHSvAaBY9zMLjDReJAK1zGeLttftqXXk9UbjnoraHTLuuRskDDno",
  "key15": "2jNekeMxxWzBZqz8u1CTEAPVT9SDNJKeNsDvNqnmMo2BYcs1aZQYJgmW99S2b5vyw2HnrWn8yQtP65KZNfrfnqt9",
  "key16": "4nVJf8yKjTwqWwkErviCjFY1xukQ9PgbVQYGxE8TMukY9ckmpScPrqFZ4QWFqng9j8e8tLA1pHL1d9ztYhJPUKaw",
  "key17": "4FXCEDKU721hzsMNYVrtVUx18oHxpthKLc4arGhhvDkmcPW1S6bs16gHM7DNVN8kqPZGkTYUfibB2fCKEfjjsZW5",
  "key18": "41rwapa22egmLEB6UUxn2ePLNr3ytCTasAYK1D6y1rJndvRnuTMoXoZHBWytTu4fwQ1Tx3XUu5a51LaqbGFDpZHz",
  "key19": "3Kb89e2eVUBFdaTXNoiU3iew2zmFBt17CVmysHWpcUV91K9EfFRhfK4zrFxq6is9itjyDEjtMmDDM6RwvyJpCx86",
  "key20": "4sBHFdrPSXrVAKKeHHXoRMcHa5myuy4m8ZiMRipgLHs3LhdAZCudmaZMGqCRYNcj2qGaA8aEK93MPSy3X585nGNW",
  "key21": "3pHFmJXgXoaTqfuLYrwmadVcsbfD5XBqYMuYjkZpUTEy1bTnUD7XnpJ1DCvfUeNqoZsDvGT3kgFVTNmHU3WBxv6Z",
  "key22": "3uPD9cQ2YmWv4PYby4YvNuQynRU4X8imq8gavFcgNq4MhnYv5iFqgHNu2qdaTxVCscbm1ba71HY8dqvwLCoP8dEh",
  "key23": "3MefawmuEu3dDMuNbR6VTe9uqxYp3BgQS9jJSmkCpf3PYcbF2ePgqDERFQ7gNdNhFnM2G8QGs1DdFrxgiGtP5JLJ",
  "key24": "3oWxK7xUkLJNkPZDejwWMErtD7ctthaJkbNTmizQkVjDxq4EbxPzQBqoE1ahF2xnD9swmFcuwhZpgKDA6PMR71kB",
  "key25": "4LCpZGLzb4v6oA2WJ1fNnMiWaLDWE5gZhZ1RDhC3NR7Gkas2tQ1wMSw7qEV8Ggy5EMAmnKRwM61DhsufZShErRtz",
  "key26": "WHJ1oW1Mwmw4Hk7Are7wdYA6xyvRBUfiH3BFkhGwUSMzW6SPmy5JFAn6iUjtzBsUaA13rUSbu89deSGk3DAMouA",
  "key27": "5efmxv18NxTDmTupV2KxeXQs6pkpkisx3YdqjxVST3XwRXW9rLSczCpRaqXiea2QVDwGSTG6tx4GeB68QDiNiWmv",
  "key28": "2kvExsvW5Fx6dfbBFcY1QchJHch1ivLUjyFT1nZ5EainkxD7cVjzVE85j36RCe2jGY3WobnGFThF3NgYkfbD1ACt",
  "key29": "2dFMtoUx6HXre5HtCsWdRcUQAL3nUpHgMJnn8rfAH7Z6GhDqHr8zuSLBXchb4qR2i5mCtzB966mGAoPkXCagC69k",
  "key30": "4Y24s1yhkmmsByuBZgi4DFEvzDdf1YfUhngRwaJ4XSxSN8FVrG77QavuNy9t3ApoFgR3hJ2WRMzfpi257eQLarmN",
  "key31": "3jH2HanfLRQ8KvpEcV9DLnFG7ox2sFmXd8d7mGwy1ZTsiMBZ1bEJ4m4ZxW7ruwEidJ6pByz6UyAQzbq4o2KLwvw2",
  "key32": "4NbeS91xLnPowx8T1UMfLhpTrKJ9cWT8XQHWwB5HzAfzQMMccpGRo6BWaw5UgJrMbLz6NqW2cLKMbM9Wg8GKibTe"
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
