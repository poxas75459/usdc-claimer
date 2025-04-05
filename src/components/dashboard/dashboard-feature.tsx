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
    "J5H5pg59AEh7mrH8PK9Qo9u7xu8vSxMjNK23afJSVL5gX2ZPTChfoKHquKFo4nSWMGDaA8P9raDW4JxzPxQnyYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtfu7b6jBzgTmNhMHwxCSHVU4nqNhZHde4mz41Ck7ms8JJooYnpFhkE2niVQStjs9rJvNUMvZkidWk23nisScHR",
  "key1": "44sYY6HGbzHLbB3xqVvvgKQhKC6eCGcFq2knaPre2vwBctVEzuZsUoxKv49sJytoLgZ9HDJ67Z1DJTn26YHTgVxD",
  "key2": "2BWopCxuzKQEswqhhdL6edKbMoD9DmYi2pFKzWfEVE5fK85ApLV2TSNRbNToeS12ppHUtsFkPtDhb5nVTWAPh73K",
  "key3": "5rCakyPEEiGK6sy5f8ZFvCevbESS5r8VTWuS1oN6iXvsGG3nvMnqpsULTh9qAxcCMSLDKkx66AQGnrsg1BfhUtiz",
  "key4": "3ujsRSE2nAYx6WKo66oTYe2H6p1Yss4p9DLkou7JDb4JSsXH7JyxKx7aihMEo6dt6uVfZdjkiniFJKPYbVvupm1s",
  "key5": "5KaxTX5PHFrcR2RPH9i8JjiN9thoP1JisWeVVMDTi9LtjXSP4okwbN9Z7mBKwbcYYGtkBb5K4bYSyKTh8oVYyqNG",
  "key6": "5CQuehXKXNmEfAMgk2skVz4N9WLuLEwWSW3YiK38ggjvHmMMa2VK1MsDe6FaryP1ZD5TPTLs1YAPuwBFFmwKY85R",
  "key7": "553mwi27V5PzFnjDzNbTYXkVF2ijNVoa3HtLBrVT3dZnoqutBtWXZgxsditzhC3rc2RFtkkDqxJRz7nnMXF4g7EJ",
  "key8": "29mebfeCFfUSe4GKVRk5VmgSzJdMsz3KHk1jUjFVGyiWKpM1miiHNXKJyFwYFnk2HFyKKUhfxxfZMDaxkt3tSFqT",
  "key9": "qasC7zPuH3ULWK6YJ3SgkzPesNTGE4PXPRaHeqmFSqcUon5EzkA3VhtrpPtMNGpZPvQa2QEne3YwC2xFrNLnwUK",
  "key10": "48yFRUvQ9SyXcPiZykrE85KPWzNofFaDFVpeYFRjW5XZZm7aiBv41RWeeggNhGPpwrArDDQD2skstXsLuwbT632Z",
  "key11": "2Zsxah5D9ctQZxe5d5QNtDW5MERtLt5BxosYrp5WvjZkyyBU6wyZcbHgPFqHFU41cSgrZcj5uUTJzNusUCam5xsH",
  "key12": "2hQgLwcqpXS2Wnai2NKfSGthMp32c7mHjzM3LewJyu6RHysa9RQw3MepRkaBjE35dP9xtzHnrUUWFZ7Dmu3ni2Rm",
  "key13": "3dKjUxUbLrcKuUG3tEm8sQR62vi17tRRedx8VjpiExz7r4UrAuC3QLN6VoaVAT6oBsuxVKq7UrBXNZa2T7FEygjf",
  "key14": "2Ro3wzCPLkQxNRHUXfFtzjMTAFX3aLmy7gdi3JbAyMQuUh4TAv3k6MfBao9gJyiorvdRMwLm11EsaJdJ6VGeHgmj",
  "key15": "4maaGHCZFLjb7q5vCzamW8SjSU9xay5FjKnaP9WY3ztJtdrPBmSSFfhurNyDbVnjcpAQViVRUt6UyKuX8RbbH1r8",
  "key16": "5fVdu1EHbDF8SrVvZba2eaMYZsxsJtcdk6vTDzXoVf8WNHSGmxmiu9BcuoR5WiAkjYXHDD4Em8zJwVd5WEb5GkWM",
  "key17": "5Mp9C6N1a8QLE3fbnXm7hV3ck1aqsbM69CR4Bfs4xLKxw7iwJjp2xeVoF74PdUBZnXn762DPLE4ghTzSNAV8NoDv",
  "key18": "5aBuRVWaAHHtGWRbcJm3p2YJgagW13zXWgUftwE6DanYruSkAR9EW9zJpXSRyd8dJekqEpkHdErBtHwHK8oY5qjt",
  "key19": "9kw5ajt6nrycTNbAMnYd1tpPBCDsEtCunNLY5Mktm6VNUCGCfhzz51NHgCfwudQSCJ6nqYvUfZ5rVsRqYawXJCy",
  "key20": "398WVLEarChhJPhTm8ejuD2kDTDZbC7dNDZXuwhZELKeR8ucrzoaaDmSTdTQvm1bG7yQ215bC53WgEMzdtzCraLD",
  "key21": "33bNuTRc4P74vxqFzz7EiV7FmZpq9pD3dbx2pPJCu1unbzJXK1Xe2eVTJ4PbmhP8ZjeZU6QFTamSeKa9KJ5s2fVV",
  "key22": "2nvdXxGq9fXWPg3NpzGWT4bQY7NcmtWHd7D8vQYSAmwsTAee3eZ2exdsWRic6rCHUfAqzfN5bHKFEwq8pC95KS7c",
  "key23": "2424QYsM1p42qUDfLhhavGyyc4MvBVH8Gmv2BaJoHGPmSUBG2cXkv6ztbTMRF345J4mvTFiW4uDaJNmU33kRndkM",
  "key24": "RJZJ9PEwifZc9GB5f9vSHsPWdcRNk69bCoZbGiwA4zabFF3YUxAL46nXcfehkLCifcAsYJNMhoTvz2NRXLGNvsk",
  "key25": "3ULZikTnxRM3RTqkLpVWod4vafLKsNp3BmH6H7tJnACvUDvAtVWMq6SWsMbsEbuF6uGS5ZNMXDp8jxhuaX2n7Y7L",
  "key26": "3nFx2KxokcwP5a2vc7jqDDjTKUmRKNUZkNVJvuiFvztdsRSnNQcMAN2VJGjKBkSxtg7aDBUmp5ug2ygbjrc8S8vp",
  "key27": "4qDoh6YjYPCPHxTtiP4xDdHL85BniAkrmj1hbnQUqrK6Bz8WByuf5vNNC71Ub7BhsBfTLKBXqLxBUR5WujXnKpjy",
  "key28": "JTj379ybtzpbFoTPbAnJiGNcPwwjPtCQeo1JTd3oXKwd7jXTspvtiY5iAePMEAbQUDpN9wcR4QsVj4qZ7AQB8qm",
  "key29": "4Jjm9Ru8uwe8cnkNHdeWdWqZudQoaeZTBXnzYJGfr4WMeYZah4WBic3boLrPQUye1qrmNLL2yrG6QxSezHfo8XXq",
  "key30": "3sBPxa78BfK1EfqxGv3QRVC1TyE2qCqVrtbJ8wgjY5n6Yph3qYUFvqsKqyx3NucZqukGd63AQpFvxHgJGLJTYPGt",
  "key31": "k2LHnoynhpNULaSMwuLrqoVy9yFFX2JeQHEujzJR9JzBsGuLbYScrmhcWxY1qa66vE3DxXutvSA5jJxxXDcCdju",
  "key32": "3tnKLSTEge1LBFXF1FyJyL6NKCt9GVA2PXNQVuMsrZbeDSKQpxjUHJ9MJ7FN1KeDpBCA1KKjWkewfiDSbHvBCUvL",
  "key33": "hqRv18nSFmAZVtUYKwDKhA9vLZU1CpAdybCRNj5R1qSnZjyMqnNRHCdCB7WAuka5RRUqNEcvX92ogn44QtdqPc2",
  "key34": "3vXbJgAjPg17iYJwEvaKpfjykCtUe2PKdzdN8CRjUKhjFjSpuT23gQdzr8nqxZ8mxja77ipWgYtvf8JeWnyW5PTg"
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
