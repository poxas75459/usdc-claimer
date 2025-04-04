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
    "44TA2KDP5WFgzM5qPhmLQ9ZGuPkDHPDhY2JoyD1cqCgUi5AoZ7tcbxc7RcBEA9BPaEinidGRNkk9v8KZyM8UkPLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zd7aSxZY3471LvdsEVndWkg1JxcWXkYoJSZasCH3LVGc4JseY2BDdmqgxFBhSb86hNdo1HgqcrvQFCE21Mya5za",
  "key1": "4cytx6dBcH5UrYgc41Z1fiTmDPfZEhc41SzYV26FQRdxDVEzaA7HHASxM9pVmB3d2gnLQQyjxMd2pMWy7L2vdiV4",
  "key2": "32gdVKkfRGQ1GGPbFki4hBghXUWwFn9Xmn3Ppwpm6U3bVGrzWpFrTeVYrjda1fag1iifSRVokWBkX3uNy7Go1Z8J",
  "key3": "yVuAr5J6eyuFxbpdsQH26QkZLzNiAphEvNzsfe3QVdZPcDknmcGSjo2qamAnkdJcEDV4aKT5bq8hf3LH6uHZ4bV",
  "key4": "21v2nrUHVEMTV8ovABRPcp4zacdqXsc2HJEdTS1PQMAGaZqHU4Bd1TT3V5EkG9Hu8LNSBQqfzxh8R6ByhcHFxY4o",
  "key5": "39xd7hip1n3EXg8yEe5YBv98xik5rj6NVjLusaoCHb9CZoyTFYbpt7tLiAPFmDxXqbvdU69dBdPwnVTSyqTae2ff",
  "key6": "42L1fWUKVyGRjEWsYE54vB2qfy3USwkLm3artpKp44wERPwaQEanHHpA3y4jUiYUT5CkvnQPJDRhXarhh2P24nys",
  "key7": "39HB3xRemXjvsvw75Sdki4ATsn7cfkNN1oj6Fwez8azx9REpfWpkDvHZSaWhK247RSEy1JBmMEj2yi3CCswmkwva",
  "key8": "3iYsaKC1BHEqUNi4r9hXtBQvQdMP5QhfhDDwZzbjuXJ37JEujiFSL3J2GoC63YpgRLWMnWhyvp5vBXQdoRQA1hQD",
  "key9": "35FKjVZNr5JiS7Zkg6wgVed3cHUZCCAmd1WdFb6Wvrzee81d6QKi55JdNQx2r6x8mHkX43QziRkMVvEZxwTspqL2",
  "key10": "2Z8qCRwRdY5UPNpUXMHkg3JSBhSiXT9g9vbYuwFbL5DxU1V9segodkdnKzzQ3bRU17kxpZRmvGLEFYDCvjkJGRtX",
  "key11": "4TimjdVPaYKAxPvwfr5sE9JSEEWjuHrvvVwYWQ1tuSjR4TMYBaTTN9s6bGE8TkvgiBM94a7pHpTn2KigmodARgjh",
  "key12": "LBx8MUqMeMCFKxdPpjokStYHTfBB9bGb4CadTZp8AV1W2kBSBzXLV9ncjG4eXntGCqPU8mCwhsZAP34pynfi93h",
  "key13": "oqt6L9suqfQg48e5iRXoRpnd2iiUtkkreaWmLPh47QnTa8r5CKGKMoMT4yggvizXqmsfnRtJ5aR2hZMzkRR7qKb",
  "key14": "3Nmbj98eiATwqYHDcWpmWG7AKvG4vZ9vQvKmXbsAp5SBD8miXjXBzgfW9RKJ8eFKkPbajHFwfbc9mt3rpm1RTyZX",
  "key15": "3VLYHCw2b66Rhg5apZ14eY6JktQp52ZpPkL5o7bXSGzDdYs1kxzDHsBtSsT1RbuQ2RfBjZBuAKgLg7PrA4K6uZpy",
  "key16": "5q8cCNQjT3yNwRwjcMRn9xgP9wyBxEZ1Hope2RLAHyFRNb4kNRdUqDxVn3deUQ9U4AJnW7MxfCR3jbaNVK3pJGbp",
  "key17": "3hwzunJBjLje9JQY6w51DcuUFH9QGRxguD6Ki6JJufmr4Urr59MbDYk8JGV7NMEtocsyxQ88XkgjhZCwfRjofjbq",
  "key18": "4SbSMpRvZkPZS759ntmvxyFbuwL2MhoT1qUscgEhzUYi24PTj2Z86tHJ7x2NtVgnUYR9XngtJPCHwEk1YHX18iQo",
  "key19": "25XWCSvJjewMLohLSWC87yuZb8KyuscTBj8NEWVq8HhPNx66V938ZeKVL8tw2UtZzWxuguNzR76CtbRiwr2qFwRD",
  "key20": "2GNKcqdfCnthvB6pQqYPRAS6yrWzogjfduH1C22hDpcdAEYK6q9UL2utTEXEft59UygCsiticC1antqyZ8TAuF3G",
  "key21": "3jA9XMfwJHd9UTqGdzQzNw3job2Bi7Ny1NYSZtaTf7L3eENnzPpyNbFPvAze5CPfGrM8DDhKZaztAyDeYdZ7BpyP",
  "key22": "2hmfdz2pkenGzS2sAyvnTcG74JpDmyVT4MDo9WeM7hMicr93wkfGxgMFhNTGyFzcgSkNmMtbuZUBwKrxbYdx1nwi",
  "key23": "56uHwbodS8Rc8cXLpRKj7TpJD9d5J4r5Mw6YDjoYyug7p7XWmZt99xYt38bhymjoqmstGnUXwGq2qEQUeaDsz5ao",
  "key24": "DFc8PRDUXKqrhkkxYbhxFXJGhh8agnJS6w4kj6RiuJ5LBsCS194td8ZS51zMMWQqcU9QTxvgspqvd9kpC2yWxGv",
  "key25": "2i8aKERGYxkwK8NGTWfcDrXTp2W7vggaWHM25518u3wnH2EgsxoMbfyqHJtWfHMQduTmPp1Pkzs9FzHAShaEhUw3",
  "key26": "LaputX6YDet5LGDhvseURZZ34dmWPgMePDRXQ3asq6JCtp8HbxY9eL71MNaeLrxrwsCj9ySjkYm2Hnkvs9fYHVS",
  "key27": "2aEyoMgZCQzWM23Tqp485bnVzWChG6QzQ3wEn3E7LVkWsSynCoKuxHiBygLg5ZfHiws3EbZ8E1tcMRNDAGtyJhGr",
  "key28": "4jH5dxv9mUA4RTSeu176s9Vhrzattwg9XYnuq9pNAy7HPTiu4gZ1d5G7AVrvCGicPbr3wS3LGkYeY7vXCzfUkzRD",
  "key29": "4ywwxTEJAWQiSAhTnPSxEeL6MASErmRzJ2jCcKUFNMiL7TcVJ88vcbikNXZ9yMq8JfpgeyK92fjPv1A69wtnCSny",
  "key30": "2PEntVSC1RUyS7Vnj61ZjBoz7e2SyKDy8uTESUcNbfXNs6hf7e1Lx96Cwkd6hGkvn9fjE5V29e7WSoTDykPfN6co",
  "key31": "4N5dH2ThT2SzA9UiAQPrJgRK9js2Vcf36yYUV5h86EZvZuPgGPSh4rfjamhbzzcNuPouHYMXBCgZWjuESny5aNQ",
  "key32": "5tWNdDPEUmiWk65E94traydbngBnJkLX9EVckBHBjTGuYXVkGzVJ6uGZfWHtZiPV4txeWks4G4YGywrEdPaYeuqF",
  "key33": "2RjSHS3m1TGFzAmQxUVh5AmtbnNMYjezwn3LmxFduumVRugXjFfoQdgzEzQYFcMwe6LctwUFcH825NqL1stjEoRS",
  "key34": "3nAvH8VttFrXTxPTbRtBxXA1HiFkex4BHfE8HG3FRyf7a297hHLhiH7HdbpkmqBWZCuVWkiuUNGVmVxCLHx1X3gb",
  "key35": "5tLkymBfdNFAdRyztgs4zoZ1QEZo9AsPM9qF7jBgCHoSKJxurQNDaUVPBFu2oyTigQXpenhcTETU25Wrx9TJakk5",
  "key36": "5wXhSferpC1qAp6EYmtwUacZ5pYZ3imVhGTZJJGgzJXrZ7JvDoTiHuYoVLZX5t5pnRaBXvpZ9z41sJDnPpSJ5C9T",
  "key37": "LfchrBmELBrriJxSXveTqa126PJHkyacsXej49GDAttBTpVaURyJTusHrhKyTpDakugUXWgar1Z9CnX4igYMZ5Y",
  "key38": "3Hf5iRUVq6MxbUXqxs9J65h9haM2buMm3FE648Kr5p1ad8nzTe1W6D17s3hKaoMrXfKSVU63sPZLZGjkabtCQDZs",
  "key39": "CJoqytsrzo95UraitobEfcbpH7kVwoaLEm3rwMDmjsbJkwXfd1GEMUJK1R1uqwLdTScwoa4c3vJaDbUxE6BoMmg",
  "key40": "2HATN84R4w2cjUcH4WY3NWFBfsvp1EQBHS6haDFQVXJxdQAuHdvzZft9w5cdSMGXNqPEtzdiASuVSqYbuAGu2rAg",
  "key41": "62aFHe6MkkMfddPo3CUFvMe3vuva4H16bvJhrsdFvaF45WiU9B6Fv3e4dg8JoVmtNQwdnC42SBUVNcZshFDHsDLE",
  "key42": "3W37e8e3pBcvNS7gNu5UBzs68tNFR7hUHeb7hgbhAqxJh1GQp3B9cJHykhe7GLz4eSeW889Hh4mHaHcjjv1nLaim",
  "key43": "ng2zgSPR6ZLuon3bEbqpxonn5D3ukJodHWywKTEwVN2gM9CifowNBRptKFSp9WUFHAnryoXKcqMLFr9rd81uRQ1",
  "key44": "48cyMXyTWnPHpZ3PEVi9t5gbRT1yiabBT7DdXfZN2Bs5MiixkRUCggmpYmEcmbJPvVqxXCEWqJc2CszsSasrJKTw",
  "key45": "VhaTmKhEH3z953YMv8mmieRL24bYzWzBLEhHKtJVT2Gv8uJBEfUQTTANJ1BQW2Lsfs53khtx3y57y7dcm3YDnLi",
  "key46": "x1bPq3ooeo2uZr6ccFr6PmHKR3FvbHse3ZPvzuV6zhjiVMRC9kfvhA3bHtoHRMSUz4N12forj3GLpk8KuBbt6D9",
  "key47": "5ebYyMgFGWjco9KRSnbqxHK63jT3WSnFvBCx4vpQ7LSXqrZSjcdMuDEx8mncGX9JJnrttw2W4S3h2Wt7aWSY6Po2",
  "key48": "2v4so8shsHRJveRK5HvCicXnBQ2GAnDSWKL2SGQoUifti46yhoo1yfe5V6ddL1sBdtaMBLzkocDHTLSqfTD8XmKf"
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
