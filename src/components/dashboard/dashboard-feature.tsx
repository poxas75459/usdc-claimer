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
    "5UhBmMz2ivZSDJCSL4e2m1xSZw871PPNeQWzN8iCHzuKDHcJh55y98BHnaCgqL62Xyfx9QXHjPbUcajk59vRQrJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFvVPDdWJSkk8EtBXCENMcg3EWdzgC2qeWzzRd9AAAiXrRZ8A4Pt3PzKjyodknqEP7pfKQyzsorpTJGV74NAzQj",
  "key1": "4ey7eNGEX3BnzQFq4uCh14f4vYACWCXu4Y6GD2j9zPS8bqcnULw1nGVfAznPcCQ6M3jceihXaiqsn7BJeWMcqyMs",
  "key2": "3ybaPQvgkmQzaojLYuqrbvUozdfPg2oDYPuTxy5bRqW7GrDKqe1o9v7exA6XAez8HphpvTnjd73H9HZJJt2kMKb2",
  "key3": "3iQHSWo9PkqFmsKUbL2vvNnT2uAWDTeU8N42WStYMyYPGgzKsDX9Pv8SGZmaceSZHTtbCJFfa3jcrPsfCtufrbAv",
  "key4": "39fZ3irXAEgV3w2hwM8m3nPGryG3qdU4Xqwyjza2x5vin6uNhV1AiZuQDCVJbEfunGKgpH2yJxYuxfHd7C9tXH98",
  "key5": "3E3X3sp2YnqkU9y1EPd4Sb2MfSy5isAsT3JgY9K3mGzF2n4MYgQZnFAtoRsnSw1F3xeZ2yV6RSSLT8bbaipPJYEQ",
  "key6": "5dXGyjp8SoP7DJaNH8oDPeo9qPZfBZC1cALxai98ThNVgwKx9jt8WQtNt8kUdFAddP6KU655j2qWrGywfywXiwBi",
  "key7": "3U6DTCQ7XNsxHPEsn9cGxMyTWMQ1TmpJQRT4sStCMxXuD9Lu9iLnyzMEn9E8hZZ4oL5C4t3ZWcSpJ3gCSeam5dwV",
  "key8": "5fL7wqkFeCUg1XVKptzmXDF8bz8jJgXWQN8pHivx9Rw9ujiLc93dsN2XYzRGpVTcx8GnkZqkQYsGPqReaLT2d2yn",
  "key9": "3R4GLCcjELzggz6CN6bhQQKqWX7Qk8R9ZNSExAGe4DuBVPiH6z6D9NA2eJ25tF91oxvThWxyUcboyL67iTUf9jwh",
  "key10": "3keikx4CSX1QSFKNX5zpuoAYvBUYCPqPK5jeZKEzcokm33cU6qDJpxB4rhiNASiaKKBfx3xXGk6fHvnjzRYbS9JN",
  "key11": "2C6B6wU51dbzYG9Uqm1SXjt6gzHCL6C9jtszqXuC9xWaiDXbE48fBVUKSaGSW9omJDAcaTE5UH6QnTSz83HSAZw8",
  "key12": "4aMZAKkgHszDyBtgTM97fCpYB9qBSSyzAAbEihetYckGrrbzxWfGn43AUgjfTPp65Yv5JpykU1RDAeviij1MWYZg",
  "key13": "3WfHh1ctC3g2U7T7B4UwzhbP1h7H8Qn13ehsQ3G8KV7PDXhuceAtymrSbhqs9cYjjMbGo77BJQk9wgaP3jBw978t",
  "key14": "4gnoSk9aisX49MRqj9xHJCFFbk9bMadfxYLhDQW3bZdcUCJetqT1Ro5zA3mNXxheQeCq5Q5fjPmSLGK73zQHKd1d",
  "key15": "3xveUSEUHjYUsG7A4r5AfLhb68pafWUNx6usjVqQaC4nuzTcyyFUkmGnHf87nfdUBgza89pNjSJ8AnKVsaNHxK5H",
  "key16": "3h4pUWMdV3npd87nCBERVbwnZF1x9FYSsidUuTjAHfWb5LaDSrxUXbtLEGZ46MTxMJFnua9GT6KdyV6mTn9FR4g7",
  "key17": "pJ6SEu48V5LnTUmSXQYE8vFBerbLGhfVMk9xr5x3yonz7ACYQgeR5MoAzjRNLkGAE61GmX8pEagBfGnEAgohqeV",
  "key18": "3j6B4yzKsVt2PutwRpGd5tHYAgskTzQcU8VLTjyBudi6r44FE9uzWZnzfDaxHh6o74362yEvzGa4szfCD6Ddjj2F",
  "key19": "5hsni6FaGDCrRcLhN7VqPJ6oXKGtH4hXa1RwssnaCc8WjtRtiSjqYvVafk5MwrYrNFH7Tj42aAwHfC35GCu69p43",
  "key20": "3F6TnPBbEX8wJENRveQk5eCR5pQ5qCTx7bgjkiUrD7GydCbskyuRnwmC7MFug2RV9YJefG15mGbYnoBqj8XSzFvx",
  "key21": "2YdtMYre7WMQUkcEjJiPWFT3w3hTU4aPC4HuSSfQcmde1yPJTVb8qSCAk2U6Q9yVVJRTkHD3Bfvwi1JNbsqsXLxe",
  "key22": "3at81wGdH6FjLPCYf49Npmeva3mbpPrYyHbPFcUmTwYfmEb8PChR2XB8DqsxMqxVd4gct675SexwdkfF8faVuqc",
  "key23": "5A2fSpnMtg6suUEyvL74BzAG2e6YCJF8RPZsV8CQJt5fVt5XGXjuUGus1DJDkWJqyNTkpUPfwQF35qKE39QtJWKz",
  "key24": "5s9cqbVE3BESY2o8cFRW1RJ9nyQrzvKHrm2wy4ZDTgEmZHM2h3Y182hMwdeSjNPEbeAjaTUnLXLDaVNPyJTkUXHq"
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
