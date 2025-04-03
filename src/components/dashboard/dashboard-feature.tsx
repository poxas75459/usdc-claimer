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
    "3sUTVz48gp7BWqH8oP7PbY1kRf6W4v8HBKZ3SEDv3zSyuRj3ujyyPGuuKwEhFwvY3Ym6XHBGFGi7BBCusZQXqsFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4UKr5XYXQG299GhmHQ7Rn1tWjwQ4JD51eiM2s7tJArqeSGrMUPv9gTUyRn197aAPdKUD5fJAqvhPzcKiUpvo5",
  "key1": "3hY1zrfuhP7CRLkkmppxnoy17SSKrNfQZHUrm5mV1cVus5phHSAeYMzBm3pagzMr878j3YjNeRWPBycViCsHjsSo",
  "key2": "abkgyoUpeXbReeWokYm8drwJWx5u8HwpnwAht9VpTYnYtwuMFvZTigHanGmq4W1UHdQr22Nvyk9pQCHtK1ttUFV",
  "key3": "x7ThqFc3nhNd1LEQXi1GMNF6uo9in9ZK8LPrEdExCzuLZDaKboB6fDQWFSPRmGRwFrBDep6FHz3RJauoaK5M8Jp",
  "key4": "w6nxfbY4GDSc7zBMzUH8vghv9ifPdd1e3Wp9gCAB9XjEbReBoohzYnRb8L1f64UBrC4usefYpZTMe8ftYHNLEGp",
  "key5": "99eLZ4pKVhY9dmnvnMfaWGg2Vxx9ELUXbiMUgFk8TxhiKMo1LKv2VdJVJhXaEN75PDshCkjNgEXN2vNwKjLEcv2",
  "key6": "2FCa5z9oJgvXZRXdsnLDZHQENCJhkna1x3KQpk1SQg2vuhbzxgr2aaeaZn8oxce1jZy4YEscfuAMWpQf3eqgMXAt",
  "key7": "2YoUWjUGFp1fva1jtkjDXuRnfZhLhWjaBZLmS3i7YUwHv5B6QVxexPXqVzdTDaLMgK6EQKDj3wudujkWwq4YB5Xv",
  "key8": "5jY7rfcR3BFSCLq1oDwYQHofCK5JNo98g3FUb5RvacKmX9ZWFeBcS8GwDGryWVe6f3b2xMk35q7HK4A3zPSBPxM9",
  "key9": "4gZssWgkNRL1LuFdCsEuSxdrm2sGrYiduQxUzdkdLa6ha8BAA4KQsGqauSyd6w3vFvTZ3EMPhqDnvEBwGtZpJchq",
  "key10": "7StbtWvZyw9Kg39aBX2LKa61LDLN88UhHavo8jfAfEawAMj4MnWL3vyGzTaSEkxg5s4CbFYcCUhTpFbfCP3dfxe",
  "key11": "ALRuVyJbhkG5nAGhcP7iAek9ncDXfMntRqpP9ePsZnSEi5hcz84s53iJBwhjyevqFVKvhWMYzNoFoQQ9WPX3Wr2",
  "key12": "2NaSWsE6pPU1JGvPEFjuf3xBcLDVpKLCzwLepj5wwxSuwYyTW2yK2zAeVGHpMDkHCkt3SFTJdqQCAZhyTMQyfCdA",
  "key13": "4viQxvLPMZoUTqGmFD23f6fQoLNj7MrAJW92g23fDbpXS1J5RWJ8qEegEM4GpF528eEL9GpoBAPykp3AYWdW1hnG",
  "key14": "4ghqQscD7QZhFpUxqhQjWBNek4kR977VeaiDg2QmYwPHPBFPACRxW7oc48jcipjY6jeqKq4Vs4dUqi65MySsTeWp",
  "key15": "2Yi6Ri3dxMjs2KG1dMdTtDorgXQZGfpj13t79pVn37Qegfty9Gu7Azq55u1P3zsXAuPTMfEi8u4GU7cXBpkxtkEP",
  "key16": "464puXDFCkv3PHfQtkHnU9i7p7tgbTu1wMCyhnTTE4N2RagJL4jMFWCmake2ooBk8XwPscY9xvsvxGWxm3Pz42Sb",
  "key17": "Y7QNvLwrJ2oqieLMgH31AqP4ABj3oziwuzUs71p4zPHZ3WpxPR6KqHiN8nzbSaYYKjZiFtYTk6WFjePvcWsuScG",
  "key18": "65jVYt9moJtio8F7GdCoyno35xr5TBvp6QFnKatz1UG1ntUffusZ14ubJXCiwJhYaGJwJEhcXjB3ixrJLrwb6uDJ",
  "key19": "3ENE4ACyXDPLcoD6DmwssankxeRzknC8hDsQ8x1GcNZU5ExrmYKksfKvteY2zZVUiKDZ3xp1fDX7LLfndLcZ4cjs",
  "key20": "4bzSwN8ZnC8yPHZfcLLGXkFQioFK4tmweueSbcWruUpaxFAZsbn5zvH26EFYvngVfCo1twVVh2HcK65mFJoEe7TE",
  "key21": "2U8dmLs2TY1zQ8CgycFEuYjEWrsQ7ZybMRPxDTUeuSuN5U8zMeCBAmYmJJRcJXAxvSoXHrMaQwS1W8u4Mt9iUC3L",
  "key22": "4cgVUi9BKRCsy1vR4pzZ7a6CTUgRptvqha5Yqx4gnwhSKGjXMrnqdWKWrcGZkBSVUneZYJT7pePGNHHSqS4W7Nu4",
  "key23": "4kgUxqz7D78kiQa2jsYDds2x1JebgkugTJpJEsjHrrp3y4t63dTLhAJFEZM9z9hDyogSjpTm5A4mL5Jk19cmaGNw",
  "key24": "5adGRj6PciJRL2Z9DEiMPZSyw4Zy2HRe7pXrBKHrAMNNw3UvTKccYsZYHWCNkmj5HhZJoBR3ThSHQqGNZ68RMfcH",
  "key25": "5wxHmwvX7m9jSy8utdurtW6t7cNpMxFoZySC4Faxo4ATHzvycjLEA5Uaer5NKabESD89GPP29drmJKebQanS9qPi",
  "key26": "LKqBZ66VQydNUZpR5cSjLsMGHtz5qKDS3sA1cFtp9dEUQpmZEBqTZeQcBktfXYuS1Qf5P4FkA55VRQ8NdKcvdm2",
  "key27": "2wVri7gZZuM8PMiV7aFRsuTSz9VK7msskyZzufBJSELrjRhWLtn9CJgtA4nPuGCLs1ATvWSQGZWKUUBoavaSuN84",
  "key28": "3vsmoDMrojtD44mAKYR8oebTYo5Mf1UNc9m32Eb5EWRxAwmtHxcLxF3ZFSmtWVsH4qn8Ww8VhFLd3y8hSoEvsLRz",
  "key29": "4brStZwsqScCnyDVGihBuPrC5iTmGpPu7ZaYqZy81FYVar3eENpHg4mjE2oSGX8VjS7AHb4fnwSSNTXKKGCpQYuD",
  "key30": "tnjaoHX2CUh6fSrAjR6uARExNMmmSfjLcQDQEhW6YFAgkgz7MdrezWBkUUq27TQ6h4ikcHQqcYoSNUHUKtRZP9z",
  "key31": "2Q9YcJWynfGfbhD6pWRFv1xPVUxG5mxnYfPiNGedPq9d6FXh3cWoX2oEWrSKGHsb7nQhMPgYwr5Ap2F9rAGADXcs",
  "key32": "5bveqj4f1PRo5D6Nj1GkdVsqNWPjyYVjxR4saHZEbPYUNfXp2q37WzBzgbLZXagKr3iMs6RuAzSv8mFuompThux",
  "key33": "2WWtPKeVoj4KWRMrrFQbKAWsCdv3urgnmqs7UU436kMEZkgPaFwSvRNbBzEm2DuVD8YwxQF82e41YsgW9zGfPQ7K",
  "key34": "3bCT7qurouPLrNmNzraNwDzucqXijPVJXXWApnSg9UeqFgiJ91n8Pyk2ci9LQ9ag6nNEVSGBU6jqNeEbjpgKRLQg",
  "key35": "62P5BCDQuPKuAXyN2C3ijt4PCGnpW8fgWoikjuHqa4UmT6oCfs8ZLBJi17SsPbGGX3TteFVZ2gtaz1E4muKnzMa7",
  "key36": "5tZU84pX5YMkNPc6WuBc8xFaG1P5qMXevRmZ9ZmDvUqByxKfp46TXRTXYBvfgaxRDv19QEaDziTNyQcNWZ9is84A",
  "key37": "4tAvMTNES7DHhmKLnWV7TZosNuTFdsogpVY65rGEf7ixzvW5S7iiC53WiRqfiEhkrsb3P6xs8VvzH8vrVxHCGwJT",
  "key38": "5JP3a3HKd8BtzELuK7oELVZGcCsXozNCtzvRiZBZfn8MrFnAcQRP2j92eC2KDctUT4Pre3Wntimi9MVJg1pSHDT",
  "key39": "3TjAjdXqpYi8Vo1MpDmrnUeL6CCw9a7vHJfruumQidnLAneBHBjencYv2qHBwU28xnmGmyb3EPsQd7p2L4KQj8D",
  "key40": "3hFumB6ZSxFkxwECadZ9w4GihiAR8KYt5QUrCFX9GmFAva1QNdbTEv8kNJf2BKrRQ5V85iVYp8NwCfPg7jJqHqdo",
  "key41": "5Zxewrf2T1igBPJWb72kf6mhLGTwpyhC7uZr1m576a8bNiQqrmW1xLyXATqwZGPYqikwbgVfqCkUVHHRSktTxstd",
  "key42": "3yF6ayhyQJHCqpuWprFoCXHqNC88uUG99de8pfqjw5fxkmXGv5VCEDCDu8AAvQ4nYXA9h387cMpK9BGX3p6oraLB",
  "key43": "2pZc1GgHnc9WFKkdsCYdSnHGFTSpLW2iHF6bFTHQV1BwFBV46RwqEBRZLG2LVRd9WH41UBGDcyXjENoacugNKwX1",
  "key44": "2DCDLtDt6gAwcWcMxgd8FnGy1H7KAoa1xrnp9Mk4cN2dJYzFg4f7ZwhRJ1aGwVnYKbBddvYryFsYTJcLuyaN5FAU",
  "key45": "xcs4FtTXnKVyKbvMNmMM2uj66hChXDrTcA2FKhGpFhdb1D4u2Zz2nPxUk3RXAk2jfghGZtwe1K4HQvqGFPcy2Fa"
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
