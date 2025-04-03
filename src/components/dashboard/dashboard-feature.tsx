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
    "3VhC1ShrxCYzifNEbhgVoGsx7bvbYo7YRDfrzUSUg2VjfvG6ZiJhAbEC4y25HzZfZTwLejoeEREJZiT4poWUHKFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQjgxjPgA13s99anQxFze2ZPUNvjqc5RBkH7cUsDtEgHMXPdfXByQznayt53GGVK693r52wRZeXjHAAcZce8BgS",
  "key1": "4DpeaotTYLo2Wu63pbkTxYqG6mVKbVT9cZh5TmmfFuU9Q9wxVzgdwojdk85xhyG5br6q9rRaJYRmjC2fJWjUQhnS",
  "key2": "5ZCApJ2NRUDND2vt5XE7kqK7N4LH8P6po43Wzbe2Dbs1TXHs3Xiz59oFXzM69AndBz6QTBiUzJVFTNe1BBJVt7bh",
  "key3": "4ELUckbMHcjMpgf8qVUNphc4UjPQrK5gsea28NKWHekncV5hcYreP72ysEx4o2f59uKi8qo8xe4gouV9t8R2ErEr",
  "key4": "5HMgQ8DtEeFoekt8WB8GXNACyeFear1k6SRtXgaHvUyRnqHgHyFShpfL6i9Shi7kcpPnqc7FkctcVtQy5BkRDFzN",
  "key5": "avqER743GD8SqCqqLT5bfDjuMqCfiLUt8efH1WqaGXLdr597THgcVY8rqxFFnYpDvTbDPhiYbRufRiMKnmxVrDL",
  "key6": "4kE53oPvemDhhQkWr7Db6pQweD4F8t8xxEmAWE3W1ZY3amT1Ykd85XuSdStdJLSNno13uyBapAz9R5fJv7h52NmC",
  "key7": "oEGu3j78YNyBgaxpkYLx39VTpH8DtTqSrbf4N66FM7hd9ezsDfYnnqFBuRgFpSviTzDsS3Vh4MA7Mv5xMfTc2MJ",
  "key8": "kqeU1aLtYTZhjBhnhASFBWiPibCCRNninfepx9AQHjFLaM6dDADVYvie2MfhXoSgjJ6GsQxcdhsmLeMfoFD3RDn",
  "key9": "2kEAm5qET9PYhbFuDX4t2yXnH3djHj7vY1vvM2YoWySe3FPcyupbkM2hpHifvK75r6jCwqUDTrmKrgWv65Ps4k1g",
  "key10": "5wRFveHwJFYJo1rjSLUchcMRHMk3VichJD5RWKJDQrRwKpWgtciYD8Sh3ubqxvWYuA8EswhGk1kXZWynSxEQk49k",
  "key11": "4HR55Mh8uyfKc9dK5DbqQgaEZqEd51QtkK9KMn5agw93mWnr3JispWjkZydzy7umFZ3evXZ7wRYeBq2PmzjiCRjP",
  "key12": "2VvXP2rPQEMPX7xEsxUzFnvVzFJ1z6LeXrnSycKDE8Tmo4h4UxKezC9XxaV1F43MgRdbxCbP9syVaRVBgaDJiypS",
  "key13": "5mSc3bANknKsn7ucVRqgpQY6fbcigo4mbyNAmN3XBxUhCpiV6TCRYxt47nKQRmn3FdCw5ysBLU2BkYm8mqFwDqa3",
  "key14": "ZoRojfCZkc1ha3c45BxYqawbcaELwshy7pthEWZQZbY2GbT79pi7zrbNrfrSf3k3YroS8e68QeTFrNLJCC4f9dx",
  "key15": "4ps2iL6qhUD8Q95N5YZMgnCVyyh8J9xpumNvgsa4XXRmocfFSNTuvMa1PnVXpJrvLkJhZRDu6K9BcbgK42HyDhTM",
  "key16": "26p6KUh3acA4JwXk8vxKvQNCJ7Y6RLUYEmYaQg4Eccz3GWFSENuP1tvsXo3DeWTM6CdxGT7P7Shv5BuFftLmoAvv",
  "key17": "4hFniSf9GPWzAKuFV7jRhw6xQR638MDpJqQsmkduiBP1WvKFRWnSDBgPvXmXUUJb5ZJFztGDiz29d1xLKopWLAzK",
  "key18": "4AfC1Cn76iGqC41goVrS6poZVth76GTEs6HgA6hCMHwbfn3pagMHzwkpbSdPhNwU1iqvUE6CDDE15hekyd6R7KKJ",
  "key19": "5S92w9PPfyYbuQuWcmgp7oq4QDyrm5Nu7AXBKr6NyPHfH3WnoaYeAtVF3mSMVXxLfQumUkA7vufE6M7rb8BL6fva",
  "key20": "2dXa5W6VeB1yCpe3yASSFTAx8LW9z1J5emZD9sFqe31QkW9eRJMjqfmZzVjMDvfvXjf5NPUTHT6NonmzztnwjWXV",
  "key21": "zpQsFUs5cv6Dxab2smxybBdW9NCrqwvn4qn9CLQCJX4J4MraGDUuH76a3FXiQh8Fhh9HyB6MzrwBjejaUVGgBjW",
  "key22": "5rHJ9wv3p2kg1yZJ8nBdgARj4LLNJRcDxRqKonhdpGAZggih2zX6YqdZ8onurUFAQGNxLKikbqfdDDGvht6wChTN",
  "key23": "2jzmBYibz2sSuzDPmGAkymZqiumqazQPGt8GSzFYJUYpkKjmqtF1GADLFthkan7Xhir1UgXaxRHjJ9CMZdQs7zm9",
  "key24": "K25XzNDpZnu3js44gqJqrHaPqPbJpmkH1psJHiDMB973Rwy6pSQBgg6jjDpvn2BmgPTcbd1Y5ekabiBPLmARZg3",
  "key25": "KTyGB43f74E5o3B7oC6eQfNPkRmSrc2qgTfnXXRxLuXQ7yLGbAthbswFdG99ECsNuD5qymD3wpwvrF9W7UAccar",
  "key26": "55dKzEp3zBv4ykUaFwyovL4k8jZgYfZDLDVsGYzCsmXjfVWTfJ2Roq6RpcHF4icbCQV4iVtFpA3hQ2Hc1pCqr7Js"
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
