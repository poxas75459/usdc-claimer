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
    "5UgAXfxxDD6snjJEkCWyEKQmj8MTnbAux9wZvqo8zmzjs2FkbQRf5FNAw6wx9pxay8WrF3CMpueGbyd3xqyY5SeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTwSDmqgEvtYfYv2kaCdEtCZy8m6pBDgQ1zba3JkbU6wDF7eHvkLG9yraCJW9MnhJKUauBMpXpyBCVFUZ6Ma2YN",
  "key1": "3A8mnpgwzxruqMbhQRG7F3faDaX9py9zHD8ZiQvHxDEjW4C6w9oVVM3e6nVbVXvgro8nkXHg1rzK4YbvDZyfmdA5",
  "key2": "3uZQfgZu446D86CMuAjocyyxLNMijZY9VisRWp4hQtJ3vJmJ8j6GBeXrnJsT5H1Ru7q94vgFtFyntkso6aiPWZXJ",
  "key3": "2i7P31ptHCWo9Ff34QxiP8LBuQnPjauM8PvESS4dSzR1e6F7yEKYpW7JirdWWokTexdqyuLFa1TKMEXLxRygKGkA",
  "key4": "3db9fxTKZehh9eN9sVASnsEg2Ee4UB1gefSN6RHmhtk9TeJGgviS6fKbAVnMFvs8hgyCGHQBU2LhURMgdBzQPp6T",
  "key5": "57r3kG6osyLHYU7oiEWm9F8392boDMiB2gDhq3FSwYiCNHXnT6LA2KrhVPWXTd5bC7io1PiQz6KqKfvuT25vZzFB",
  "key6": "pcTwAGxwE7rmFKuFnAm8ahwdX5oSqXRwupSgt9sdJhZ1g52hdB6qEy2hpVYWXkSYAsDNauvh7VAHNSHY5FBudkL",
  "key7": "FnaiYE7zpk6voVqYSwpd5AMszDHzLkC1Z1uWfqrJTKJ226TsuwYdQWzuYusebqyHzU1vGArq51H6VYxcFH8FX3a",
  "key8": "52vEioBVovpXg6jt3YzPyVUhWq11BzXCmARrseMvy1oV5Mg1jcB3YDxV9k3hvmRopJP9aTRRKSax2Rf2Ynn5Svvf",
  "key9": "38i58JByCuhS94FgZMKCvXneZzqAWG3QBvsqkCTW9j8sHfpVPh1hhCZALRJGXv1guXtpGEVrqSBg7z8VocT9rkf7",
  "key10": "2aBKkpKUau52Bm2Khj7K5ENAVzKte9DLXqHtVCoeCTGG77YyzkPXEdkbQUHpMehejW2CyQ8hitfymfRLn21C5MiT",
  "key11": "5dtZuEjdAFB5c43CGz2xcwKckX4z8SSZH2WPGiy8ptmN9TF9iUqMaVPhZc7H7yqFWGoAUvTJmJxKuSXZ6XVe7Qzq",
  "key12": "eshVyvJXSV5ddLLFGGw4u4Gm1gp9uCqoqXE2ukiTCsB6zbeRQmLFgCDhN6GoSYRhHUzX4rw4rG5cK3FpJcKdxrS",
  "key13": "5yM3Ju1aUgKhWaZKp1eCotQtGCRXmeLFejPdWnFYWdy9QbXkYJEzimaGaxYRQiUuYGbV2jR9pxAhnRPPv4iVfq7i",
  "key14": "4koWgXMgfn5TVo1QgmZfLVT1FKq9DvQU7MwtdH5ob9JKNABzpGNK1iBW5A6d6fJgFHqwMSvgrhf3nN8k1JQC1pUs",
  "key15": "4ddZXMHF7JDQrGuMUfBah1GNYstduLNDT8tpzLJsC5eW1w4KhZ5kgLqNJdDaesMLbc4MwMw62GixwCSberSHhFWP",
  "key16": "3iBEGSr1tAmh27XN1GLJ9sAk3rL61YFaukaD6TEaWpgGjWuKA6J7sRNT8oB9NgZhMciLgkRMubAfaQQMxijoWomv",
  "key17": "2sNtnmj2MUAay2FgBcaqHJasc9Rz5AKxB8y3Swb3k8YF5FZu4e5bFCQK442GBj6EHp49wShLDdjhd8qv7iHoqLWM",
  "key18": "5jr4oa6ic7hp1Ub7qa3Zf8c3W5rFBoHPACt8HzAr8WgcmM2xGxyY5NtUBw4xwe8Y6F4AuQdZXk5VZmwCcqtuKAFb",
  "key19": "Jw9RF1eazdHK2deZzfxwucEmDNddg6xnSBDJodh9zEaHKDwgP3be27xrr92JAVEYoXJfXuVdVDf7fjoSPmx6jEQ",
  "key20": "59Y1WoNWSTku18PTHzETMuivfounqQGPEmdJy1EmmEU7TkLo43u7S9DgEWnX3Rbp1bpSJKajaWjNJzFyFPhPBeB1",
  "key21": "4guFwjjwiFTxteXncMF5E4TAr67TNFktLddwcy8fYX4m92V1B8rGkgZdEpkf9DpnwV29mgBoFHZqTUNFtNw25HKi",
  "key22": "F5ZvYSrLNTmVjpbaRbqsXJgCw2bsJpjSyqBTBe3TvFHonHEifCGECgRhcYfphVWq3dPKyut4xkMXhTafjgFqzaW",
  "key23": "3WaNfYGBbuZch8KrrpMLjDzfDVZb692AB7aohk5AyFxdFNTEBHHwiADRPVEP2eQuDfYTbedW6J93dapAAdxtoZVn",
  "key24": "2n3noEi3wbhzayS3GiKBm3Exi1o1Kv4AFAn51aY5h3XrciqQiTe9iLcrmYYVSwQjzVSyDZTdxrZG7cjFH4XMsegJ",
  "key25": "3i2nTpEhHrvaXsGGbc9YFmqTLRi5AfPk2X7g4BpTzvYmT678sr8R6JiA32k1mF4RZY39Q91QRNZMFSHJ3exkt73q",
  "key26": "2UJcVz3cZTSjXaixshxRjQeihCB3FPQaUrqoeyiMnZciGpHdpKWQi8TKo52ADNJKwf3ijk77gFF39HstMdVeNzMi",
  "key27": "2NtfC3UB4kow1nd8t36GGKNkh9PLwdjHgGwfwPfqrf27ic9f9VtZS8bZtyBG2m39Mp66P351mvFcg1s24sHGf29Y",
  "key28": "CyKBrjQNZtrhUTw25ju8CRKCocSsicYsH8ZzNtuRjfJmtAe5YwuFJN5a4134qdNG4ePPKZtoNTiqpimZvzioPhr",
  "key29": "2gHym7gnZQNqfEigB7emYkoqfAKYqWpdcTwBT3WVNCmyhTekXfMUuxNQEM77ibpN2darXXUWLcx4R5h96rXyYApQ",
  "key30": "2wddWvfcBTtiBgtsWEEvaFbCUGHryZVdhwsaK7A5tmqbx35ciGBHxUb4F5y9dS2EEe3xdmHpFvfCKoYDgj86u4qm",
  "key31": "3R8oBQSPHY1iqNFtAytLT8rw2UM33EpxzTqMhSq7pA7g3LVRPUjJU4tnGAgrdLsKcEZy865Zjyz8yqHRrMEV6F5C",
  "key32": "4JBKDTaNxMQU9Zv1brjrrSPapZQUbxzAKSE4SL2s9D7abtyJjPdfiimM3Vvun8YL2XUE3QvqxMcknkb5jczwacCu",
  "key33": "2tp8ys7PwnPy3c5CwzMHXYKk19UG3uX6nRxQeHAfeWSqqMGAq65wuKc48S6GWv2pZWj63QNAgXPxEXghEaJkfVxU",
  "key34": "BtDvbyvaMkV4cotPBPE7NzLQ8iAN5yk2yE2nyCETRYMMkabfg6pR2sL8sg18rQWbStswKoiX7fnEKP5q22MEPkZ",
  "key35": "3657uYQNg7FhhP9mG9JLjpUPxvpygAgEiQn4YJYYDDB8ruMdJjcKDXPahoQQLWDHdD9pyPmUBHwzZJ4yxhKyyoNM",
  "key36": "5HorjHKK7ygMsKkJc5jU6qXp79vqok5ozMNURMXLZWfjjUsuJ2kJdcZU8hW737wFcdCRrL3fWxsFP9DcYKdgE8b4",
  "key37": "QRwkoLJ62f6WrAdZMTpQfWwHNzC5htrSXArifrkD5wZ5pctwscbJNHYCE6T1MTLSs3DMqY86UK1hj9Ve6SHJ4XH",
  "key38": "5HhYaGSdtz63Dwxmmduxtc6yQmABYk4w1V57MgNCLF2oeVWoRjfCTuAnhNGDT2p4u88dB4s98oEyuA9VU8GiQfwX",
  "key39": "4M3UncxHwk61cUjPVAX9oVnFnck7r16CV2d9YQSTKRJLopGXgLJJXm8jZJgvL4ku157Po1jkiBGqSsFcBNuf5MEs",
  "key40": "4BdqCKZkQAH2CkTjvkA3ZDKqPPfe1wVBKzSHuW8pXccjTcLXRZVFWH791KwXjsUBHDeus1Q7L6vjFt42wL5gBwbJ",
  "key41": "4sj9zwST2rQSosD6o7s1RZooz9xSWJgazu9Nf9wch2BW1mb6bUx1zX5YmKkrUC2N6XgW2wLBZzpxhNZnxzdctF6t",
  "key42": "2cgZ2UkLXbEwrwsiJnQGckwwg5SigMqfVVVhi79RzJ5TLhXar8ecCRQKvuyCRN2DFD8f5eVjQ7Jwy5DkZnmYs8qo",
  "key43": "4dmKKXdkxvUppJPz4VFfrLw7YcJMNaD7YHBgEDL82mjoaNXLv8eevRM3GWqgUbYmxLY5vqtvA6nRHqG7SJ2oNg4x"
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
