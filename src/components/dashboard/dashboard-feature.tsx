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
    "5CFhTXqtNkgUjV58q4tGs7JR7UbVBY8mCN5BnpGaydyZ1rAGYdco6dotHqetgB8xMfyxLex6rSB6ZQfYEHneMZsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6mCE6MrLqapLHuuSobdDZY5EGZXhsni5BoBSdEBxMgU9epQxTRX5z49gud4mPiJpsyRj9ircHgXotJNuYavqg7",
  "key1": "5WGrWvmxU4voYH9oN5E7wXQBchT7e5ZU6UsSFFumVL2g5qVkiCJ7X2L7jM1pCwLHg966T69aJxNQUgSqBfbwDY9W",
  "key2": "2iX1fEWakYdXfAsSkeryQgjpRMrhYGeFSRRUsHMG2FEZMkGeYGj1eWwprokLZHkKk36gDhMnXHyHofk9sLAbWNav",
  "key3": "3Vvyiu1gpJvmnxXb6baUJJ7TFQJinjpY8gzjuy8yfkXu9UF1ezjY9pyoz3nAQZyc1E8CM9ostpqnToJHimyD1kYk",
  "key4": "fqaBWkXfSrsb9H2MvjDicqLECXqMSj6vDdYgGFpjqxSuXBW4UeCwKuYcyGntdVzMFerqbXc4tYuws8MPKQFVaEP",
  "key5": "5SCYWD9Mv8DDg4fd8kZuastaXSLpK2iKTnLPFbPMt2Dgroh3yrKvUNeuSq1H5Prng8yw6oJyALPqKpbmV7ZnkWVD",
  "key6": "4hCj4mmyk73gjZ5MHT7FARSmUtjj95sFsBXCrKzHAdJpLG2AwP4vor2hbmCujPDBGbuRAQK3UNx29RD2PFhSRoX3",
  "key7": "32nxcq4EEKmgRMuYigM2HmVLLrRxr5u2gj5HbnbaZYF9P9QKSbzsm8ekoR335D9af899tVpUdTQUVhstAP6vZ1sc",
  "key8": "3X7dUFQZq7UAHKGqinN4Zy5Nex2ue79eWQqdLHFBUsYZM495qCL5K3tHjRpiEbE1g87WgfyL9XMFZFaQPFiTVeNp",
  "key9": "3bLKrs6i1bFExUiym492ZHtNsvgY7US6VTmTfZCN34g9eqmEEdoyGVg96G6bVdJ7go99T8BtqHTho9QEs8hZCLZ7",
  "key10": "5soj2kLP423CFzxncY1zuArPW3mUX9Rdcjp8o2qpJemaF6iqaQHZxApCeV1SpFeRtGeHDGieNopXdKoLdNsDokdT",
  "key11": "5JYRGQ6bsmcPTxWKv15P7wqnbModCiRDX9MosYnvpnK3g2Vyuh3x76MfmjBgHEJonZBeCNN7oLbRiYZtXw55ZVLc",
  "key12": "3UZVNdX29FNr5gRFkcq5H7FCheatn1vddyQZhNQU579jHkyHQ9VStod99EF6N32Tm1JZVdeb1wa3amAaruGVS2M6",
  "key13": "3Srczdw1Rr2BPxz9hVgMssUPY2C9Rj8fmPJiCybN7Z59BNARd3Sro3gYas6zLDXdSh6zBvpETzhHxDrJ4SZwuToN",
  "key14": "2qvNBgX7Q8DZAKBS1KhQ8MkSr2AG4MRSFRVhX4Ktg4QZkMuiAsxmG2gP3FaZYwydtiqfQU9kJcUeFUu4ASoNteSb",
  "key15": "62jxpxqc8MTXfiTyqnNDY38r3SkTWXBMj6bvMjYYZpTfJ63ZYXc3dTZQaGieYtGx5bGxKB24S3x63aFBtvsinSsk",
  "key16": "2RGkW1sCUGu93dcKRRHCbcuDtcYYo2cAkBMZgLQ1YQ8jTxAATh16rbXo9JqpGZn3cDMP4GqXxgXKLypmDTbnqCkd",
  "key17": "4bmzAf1Umbs5JRSCQxNKxZqoyxPXgDu9U3ZccPHSbkTpfMYQ6NdmFGR5ZEBReCozSk1uNGbMvRKCU1CWPyoGVAy4",
  "key18": "3qAwQETXN1neQuFdsXTfmz3GC151yMTCFBceNWuGedJ3rCNSbmBrZd7iCSrxjh7cosEzbkjyQYPyoSg5nY2xiNZo",
  "key19": "2nic4rzQsSyS8mNF3gfbbPu5XjFhuMWTw8sbFEyMjSnAoZEesyLDqrsn8BKVqdG2zxUMfYbaMYkHgnfjZuPmUCLG",
  "key20": "2xpLj9dNHeRDHNStNG864ZLKwippipujoDrKnXKNoGX4CK257MF5EimjBrcc9RCYadNfdHDRiH7fjtX8NN2jFyBB",
  "key21": "3hFMArMBNxqLyY8wQbRmm2T6WNKoknZ2XBa6vtEXXws5mYP9NFVGdH9fUXM1eJk28S8GnoELhsPq7UfoQcspF6Ym",
  "key22": "5miP9kWqfu89JQntXyPGw7iSKuvbzNTcwYkHvAncTiffXWCLSqnpjCKgdrNZTk2pkHC41xsG2NkMCMzYacKCh6jz",
  "key23": "358Kyj8ebjyhtFLpT93RbPxYUxSpPGzohQaWyMaGaAjF8AKpJspjKdMW6TmMXSvVBQ7JhTSYRMps3mu4Sp5KxPYk",
  "key24": "53i8QWd4bfGCY76knHqBueefWdY5Gjngjr7kgGMWmypexLtK5tsfLWsY3npuPAKvF1ZpDZNdS7TbjKWMwi1QDGzg",
  "key25": "cPpUucZpvc4Yuc8jxeLf6RUrSMbgyrz8HUAX6QnofognDS7AE2bWmKFJ9aLSqu59M9PLPQMFtZUX7aJeYGo6oYV",
  "key26": "2d9j3GLwjJPgPRoVg9M4FUVANgVWFybv1ZTBPq34XAfx2ipfUkKytPUAhkqSkp6U6oSGpZY7Bh4xwCQo2L3sjqCH",
  "key27": "2RQYwR9ggdsKsbw1wS1XT9YCZEETgZQtEaWHsVkjh8UHm3ULi3hRKHA7Ww8ugqqawVoVVzKduat5ic79aSFkTMJo",
  "key28": "4JAuKQeGmW2JapJQfH7Gn76kGabgv4JtHSzCmBSTZZmAXetLr3KgWfsdAP1jkL5Wru2wjeDYC2C1PSpbwedUnngZ",
  "key29": "3gqj8nAhXthqMxu23Sm6RXdp23i6kAesuZP9xUMZtwK7jeXbdviXkaHEQqqqrSPCkD3Mga8Ur4DyS2R1G6hJup76",
  "key30": "3LLnBfBEnJcWpnxkM9ScNZ5ADKojuyFfzMmHyEBAudi4hppTffHTd7qKRxxGhqnDZxf9DrN1X4chMNKFfzhBA8rv",
  "key31": "4Li7JyDSCMWsz58pxNJtZcta3mNPUXhCBb4mYYhj2VekZUsMk1LYugWvZfWUtRYMmJ72v26ovrStLVWqPXky4svm",
  "key32": "4ZEX9Z2YBDjTteuBj1a7YJAm9Gg8gkurc2kmBG3mVboR6mVJsPsBNN9DED8oYqMS95FJCGVeHFWoJWc3p59Tdywq",
  "key33": "4BEA8DD2qnUgtnsTpc5HWmxXtaUwydJU86eipZwPj67P7ZkDcvfXqwkTqPLbioV3rGg3V3sCrXk3Yp3MxWzuTFqm",
  "key34": "gKKu73DLCLuH16YJSb7wmTQFuZ1zBKVWfLaP5aueQhuVdejoVUk2AmdmqSAUcL9cp7QKhir9H77FYegsK6yeCzg",
  "key35": "3nCZo2T4netDv2Ek6G58BuDhcyadx8a6KHANBtk2yYe1CiF5gzqriZzW8bKEdEEEnmyNeCgfANqZQQLtmsN1wMKV",
  "key36": "wu635dvAJ2ZQKFWax8m4cD7qReHetwmREAfiPs3fPXnVoKDbVDKGdEB1pC9fx7UsUGniDMUgkvCG8PqcW2QL4Va",
  "key37": "k9sTRwYj9YKMmAenjJx747ic2UFsMpuFDzfs1nuE1b3tqenVjeDhk8WSGDtwuNPbX5QiV2Th75YthNtwDbP7V6M",
  "key38": "3eUigtFDyjtyvGXwcby1vEEFcrc2aENkeVemeM79QqpcpF8NbrexexR3R7ir6wQ59UvML4f5gzMXU1Y5gNzkTcQi",
  "key39": "4Jndubns6B4aEGCcVnMozTozDNw39upgLGXsNgPuDsVnEfDExa2Xh16Z73mow2J37hGQ7aERGr8vjAioDMo9ADzt",
  "key40": "k7EgZ9kqF9hh9G4UaAevCqpUxzuJmMPV8hC3gjBJPaRUb81WJQn4zicm1Vfpqs9ThaLQA1YSuXLosc1GPCDvk7g",
  "key41": "oqW3728gTo5MjJbkrWPgptZy2WPhKXP9ALYekiBBxCuayhCTdde7UiYpeCg8c4oxjJAKJgEYLTXFwiW6xcRFUu8",
  "key42": "3f4V78XptTxPmpvVN8XJHY8UqZdyPVCCDSPhpV99t9ctPRAUHpxEVbTCEz1CqjDDn9BLwnVSGGTWK1vii5dpMbJ7",
  "key43": "2XYK9pq9kehHnGm14rVjbszxrASNCyuMyZHAnEFXw5edBkvBnCo3EonQqzbW95xrp3KGh8YZrTBupyxWyc3N2LQ8",
  "key44": "4pnobtsKYhdBiF9ewev1e5oQR4fJ338ZzuzjVqQtQGeoRfV5K8ZBvTQjEQCV8sUjuYtaaxjqBk1WKamdgxzTdVaj",
  "key45": "w1svPwCxNc2VMG6At5PrcodFt7gku1fF7jeKwk31eoxz66Ue6jz2HSmjVJDS9rBNtgHtU284U9MyCtxPyamfGFG"
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
