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
    "4TLDrVfKUdfy53vMtWt8iNizUWV2dKY7zbe1qwgn9hwN1KH3XCoVAQttuRaA8k8maL4zkhMnF4RiYuzunSbFryNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxMxzt1Qfxka9HQpsqRd5ernePhHso41A4vJPbDqowKnvv9WNhbAnU3Zr7TwFC49SBc6YxMFkWxsYzdJdtXEdMv",
  "key1": "3CBiZHjxaCPgVTLDTguWjinWfJm4ke2K4rkkEXsDZsySfgvMaTUBwdnFsEQXCzRBS8yrWDxcRMuiP2sDP83i9YTQ",
  "key2": "2NvM6xhKDFvUgzhFNvYNfK2GRTPC1HAYbxLzkRzF7jS665nGRgwaUhFMLAxTQrEKxLwfKqk5J2YuSsUT4bxZLSTd",
  "key3": "tFM4nZ3txUkz1bGz1chhuLcyK6BywwVNNfDxyhuJ8WZJCzhpQ8Hhx3CXVqJvXLfraeCgUVJi1ZKVhwAC9SWvRNH",
  "key4": "2XxrKwA9ydHZ8URPvJHMWyqJ1Z2BpLRELa35jbQsCLeRdxai7MASHnmrkcRiiyKPPvSwxEhoLChF15Eq1CUgqkNL",
  "key5": "5YMBuqCUa5sxiuhrujpWutmeqGJA7enqz3vkiFVQydCFC4e4nKw7Z6v3rD7bsjFi9du9SckHEe1kt6CwHzdYGJfh",
  "key6": "5MqmVQnbqdrmhSHnWKM4MvPYhM788GpWqndWNPrJigw1gUWUaLGyWCcR8GrZhC5Dh2JXtEeZeSzbmVo646Nrirxm",
  "key7": "5j3Uts9HJTPcUtuwtkkLbNyt2neYAcuBnAbDviGKWJ7eA1kLzNVWV4wYYXAqDn4S9yUxRaGpphtrUUcQyNvA9SKY",
  "key8": "5ocXnCsQSNPqGSKT4ATPnSVxQSDBqoPpfjNBaUigGBFwbbiFKGV2rx6BPGDTTpiEoP9hrnce8FzactwK4BHSGw9P",
  "key9": "VKcHKyhUw3juDaw5rETynXiRqZH6NFMquFomrDQH8dZ64YnP6G4ToWNEWGzivJzZsbMm3H69vtTm8kJrwH9MiNr",
  "key10": "3sfTsnq6iFaWWu6QGFBYqiFCsR3H5A85rTn76updno2Bc3B4AgnfdE6uCjuDEeMp6R85qd6dbuuMimk8e8Zbsrpr",
  "key11": "4eL46nv8WjmYFKwmQHZNkHZzzbCGRSVET2FobtJWU5CwiCYpLfx2Qdw9uLTKTn4vRjW1u5Db7jPYWrVJoASubWjj",
  "key12": "5dhH3YcziCDhn9eUUCPrz9Fbvnd1m3ovBiPsjfSzgzRgXv7jLmzkn89j5C7su9gnHD8DVQANwoGEjbCRf6CNmwBw",
  "key13": "GQV2JH7de8q2inWBPk24ES18cCEFB1757KfWTD15ztkeVNGTCxuNBxeyTQA6LEeh6XByYKkAwd8LZHH5GLHh42h",
  "key14": "5QmkgbCM7CMGWtYZm8RHH28vJGCqzH9knP4N16kigkxy7cZpLGEvaugip66Jmo12AJNDRhderAHYDyt4dr2FnTb4",
  "key15": "4W14gBGFHEuYHWSoMigK5fF6xnrJyzHfcbecNY3nChwb46uPD61GyvFqkiDDBWnSAjgLhq612DvguwhggdSvcnaJ",
  "key16": "3xgvNR7UrXSo6ngWZ4U36D3PYZ7SYBVVWz3cjHcnWw2dSbYuFtgKpJz7Xs6463SsJmdMZcYWwY9t9vutkS1anu4H",
  "key17": "76ynjH6vqj2HDHHQHnaUyYKfAC3Rc1gE4tt87GddPudZwwzFRaeyxNKMpkKfrRSBhZbmwzKuvBy8nvRjkXSgxCs",
  "key18": "5sMp1fwGQp7Nu9DnPEK5wbLjAsG1odMwNHQyQRyg7dkcVo83yxn553RFgYMNXp15qPnnLz7ByiuvPZtwcnTRbaxo",
  "key19": "3LzqSkxstFuW5stHpmwPtGLFGdT7dPoJFd9E76VLE2Ur9Jt6voGbSF8uFqvUZumVkzjqHYdK6jFxfTtoGq4ZuUr8",
  "key20": "66dcTpCyExkxruh6c6u4BNMXHmTDP5BjdDNYMT7NuAJqd8TNHRXqeoToAFJc2JywZH8G2r564XSvXDS83wm9eaE6",
  "key21": "4su339NtdxoyUTuah52TTwBrCLEpTkMukZass1uxBVw9jei8SNiVMjUxYKE24cbLZvMthFXpPNN87iAXaJKdV1Lk",
  "key22": "2JkmRgSPeQNaNigWHfCf1bfsVoxvWZ6oHUEKovtJxXKkirnbiHE6uGtXQ3xopT9WBhgGUmFHwd6FxFwQiJ8kLrL3",
  "key23": "4V7bYMqPy58vm5TqEoFeSmpEzPxNMrUxso8S2rVs6LUdwUt7D8e1TrNDSavnXjmh1nPVQgiyzVUkzsAbsyR8qYvp",
  "key24": "ub6f9Tc2YqaukD28fuaxdrkZyjeaxw3QeJBHdKZBZs39T1QVMEJJW2G5EsYMRJFZ3JcijRJwSrauma2ADP8qkwF",
  "key25": "2sGxMEk9GJN5j5NYYLhiTz6h8iJYRVNScdFjNvDNBZGr1DXjtvgJwTdtbeGNjTtLjqnjqtTxtgLY8sAfbE6y36cX",
  "key26": "2NRs7EXGWLiqxMXirErDsH9DfW6M56RcDRt4XcKzVm8gFiLydxVvEMcqLRajhtBfNxHu3F6x4KsJYQGD7La4nvgY"
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
