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
    "QztueGi6GpvxvoCMYHsiFEe7BpevzgwhSew4HXsjrqNwPdNtT49rh4dMnkovopgDzj1m2atC5CVjnsVsbJKwmaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZXCezLz1JXR97HxCBtSMygeZ9cDae3on5SDAsT49hPS8jEQvuNKkX7EuJMj1isBSmQa8EF9KWLrnXFewidr6P92",
  "key1": "2RofcMUmkatyEWqX2d6EizTpa1NdheS8gYjgsvPfxoSBWNXbyHFY6BvW2ArcgwucXGhHqLLB73YoefjJwjwq5PvB",
  "key2": "3jL7Zak5gb85fwMrpm6WEoQdcAgboPBAzMmx9MeEZ9v5GxsZ3P4KTG8B4SJVF2guu7H7PNzN9zvbgUnbEp3UADYw",
  "key3": "3bNGTM9gJBJU3SdPZwTs82KXfYXF6hbpes93RXyh4C1jinNBt6daYNs4sMwwUfQFr6BqYS2GEJoVBNfMsSBgvHJN",
  "key4": "3f2bunzh7t57j8h8HTPvCQCXaDSTYvJB2kG35U2rVbGcKCS3SC6PVA2Bf4JVXdL3f1zc1uZdnzSksxzF6ac2A2Xm",
  "key5": "4Mqe3EfJG9CxP632pLeE9yKbCWK1LL8QLApEErc1dHF1dZ7RpjMUqZThKW5SixBHDiyzo8jnc5LnuDjVxFmTukBs",
  "key6": "5botm3mQJpq4n4dAbHKpgxiHMupnmHGA4FK7EhDXzArDgisGs7pk8vxcUPy7sLTmZ7i42dgpqCSecWFDEj69py3M",
  "key7": "5pibLt59uj4eAKvhXx69jtTfU9Kkk61mZV4Kq7pbZxFDy5CM7i4A46eBKsSvzrWvfp3qsBLfSCSRdu9gkDhqn89G",
  "key8": "2Ciitb2aBKYHAPjWTLuDg4SQDEQLS1qqDP5s6Wks3T7bNfoeyWfm6xAxNoLSgc7RFi8cxadjQYLTBvqmYMyqrWuG",
  "key9": "FpdNyQUYTMenVYDCdwkGUHDGnCEqmWP5RY14tsHgoVg64QBtauPnexwAupgZt3yHrbvGjuuhUAwNXDEMS48wE2V",
  "key10": "4aXMYeUJBUH1BmyGAiuMrEckzg4cLMa9eNJRyfMr6M3n69XhyFacRreaoCyDEWh2B9ibnrQhDyWQK7Q3fXoMikJc",
  "key11": "P3m4Wv65xZVcBxFfQDqbaQ5dmVvUNJDGAEbefeUwLoCcadBpDFyXQ95iZfriB3AJTYMcsbwnYe8md1rLWXCTPHF",
  "key12": "2EGZmv7tYxYdXNuSzs2QfSj9qzchpZcLAr8A1QiZRv2zpGLVhHxozGpq12K7trVSFBkftotegTNsZ9wYmFFUhrHg",
  "key13": "2ZPDPbQ2gr3ZgGmyBHyGDXt9CW4vuoeEjyqyXSUDTpfmnZ5VSJ57kF9GHgwKkwTwCWDsZiQj8W9gVdcKf61cbNiy",
  "key14": "bHGrdL5eJJ7esF6wNiryHVt8fJYbEyJTrhHh38Yt9qLmziqUcVVeAvGt8k8wH4Sse7tZ2ikvMLMxjPZS2CrCjKp",
  "key15": "5vjHWDDEwRwGFjYSHiz13nEWPjNcKrfQ8DSyN61KPz6eETTSyYgWov8ayEYLCcepegytQrUPMnF55amu116WH7Hi",
  "key16": "5smnD2tFBwvuUpYmyFvrGgufU9p9rfXCULoi7VSMrGHEmtNFt1SwKfqhtiW9DMCdgPoPgufRHmsCDSKurQzP2T5e",
  "key17": "2N3trmw3774DmpqurdCx3ybuCxqVmzgCVZyR8QK5ffocMtWv7SUhXXxHKbc8RW8RhvboanZUJmNC3mDtgrygEnsg",
  "key18": "4H8ixVuK8LUC276TURSKSLrQVySfZcYebHTysREAHqFgfgigFrLYFpmNAh8BkoiguiB6qvrLiacaoQFtUwcibfQ6",
  "key19": "3d7SUMwFfy6Qz5ejw12VenwmEzpysBSJJfeE4FNgkKj5gM4HVpSvx211dEaTAzwX5DGE64N3RGHHUrehHXtiJAbH",
  "key20": "5GaDFnyVUY6id2YYKJJGxqqkWakVhD1HPSoDiSyiKGDGLKqtkdZUgZyfqDgHdFcs8KrRcW2jDVeqXHPDZYFN4GtR",
  "key21": "1v84eVg8qjGwogiqpwnh12ffN5t1Ja7qeLgAq6PZTEsrqTDDpBEDFHqpxc59CbX4xZ1cXCzWV1xNtYDGEZfnVTx",
  "key22": "25jtj2w7HKPxsFU9ffY8RUFZoj2ticDEtwcWoaDCuf5PwjLaEYoErBjXyoDN1n2T23bztfX6rZFsTWrGBREJEwY1",
  "key23": "4YD9RQsuVaPfLaRpq2ZedRyMnBv4qr5yAEVhXmMAGDAYnvYyApyfBB5qaLaVkqzXsLrZ87QX3qctNKkMuRKmRnCQ",
  "key24": "4kLqGKFaq3KD6trTQmZdVLD8D4cyDvkfFDLkEXDRgCsoMLg5zn16w5uY1XPuD24rPUNsFR2hosgfdRgVhgUJjpUt",
  "key25": "5tbPxmcc1sSV4iQjYwmbKbFDyjNqsJ2sfiNsGf5NfF4fe2zbtp9Xisnxfjsg1e7sDS7G7FCwG2UJ1gts3uiwWiTx",
  "key26": "4qBQYaWk74ho1Rvig72tiAbbEfJE1GG8eb9nZPJtWhzE5wFVcLgJPTfo55eQPafpz4hWFwQEkt7d4wcZtwWj2Lgo",
  "key27": "4UTWcnRZ2Y7QjG969mjRavXK6WPuQf2DG6CU4HXNCQKWsQJTnC4xtX2YNBcpvWY9xSYSNm8XR1JSjWVaYQ7GFNZB"
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
