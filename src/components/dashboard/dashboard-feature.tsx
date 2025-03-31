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
    "2AefWMET1Mk4VsUiEB5KgsgsZvWzuYF5aMeLhsYHmsRN57fyCLCb2LWSDYLiseECaY6mq2AD6Vg1RfDagPB5EsyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29n4Ctdw7sHAz5bGbFmsMkwCWTQFLP3GEBc1Xza4V7Zyct9RSpvqJNQt9wzD7r8mJ59kQbUw6YKzrMLiAmDSUbox",
  "key1": "5XRJByp4WZXHkDGe4P4JvL3U6JTABrgXtG26jn6MYpBSShcpu9D6SdQ2XngdSvL2WTabEfTo4Ws2UHmzUjMifYri",
  "key2": "5Q5RNCUDBFUS2dzEThfFxPFQyDWf6hvC7VyAMSqz4iAYHtTnmjuDm225XtGdy9wCHYYBYSVraEmrntxi9uA1sF6G",
  "key3": "iRT4s7kHnE2TF1nSxh68pnXm4YjVxaL649iRkWmq3dDmoAJL8T9aG7aNeu7g4JgoaqPKwf85Eio4aT4Xs1NyF7A",
  "key4": "2KevJPPWmZumK7BybyAUBD9nSXnAxfRyPs4Ac1NauNeYFLH7PK14Vz84fV7wQKz1wpfCQTrce12dUhFXb242XR6p",
  "key5": "3J4qrc4BPdRALWH2Kvny7hHQJiTGEthVJupXQu7Q44XeHeSqqn12ddattJksxuKgamNw46McQe9rLwdG2JweT39R",
  "key6": "3n2QKGrEGqSzcA7CwkNn2nacjYjQi3V7NcwCZZixhfbsuNFXmb43oodpoekj1g1TLHmRWJ2HsrnW9tAHB43tsXRF",
  "key7": "2DpGg8BGEHaFPBoNMvQaJpxESVWVf3Fsoa2J9vEbbWLdnzA844WMsdnxUcNF1VTLTnP4PGW2uxVdzQ4DNvnw8NUP",
  "key8": "4bbVFrbprg8ndGxU8usrEiBTTZBFp4qmQr4ABMNZpZAY9XyaoHAjQjN3E1LUmJuD1Qj5wvEhdr22FAiinXet8YUP",
  "key9": "4vsnMuXziJTAKKRXUxY4AYakSpyU2TqfgXB8CJ9AjM2jyJuk6Agsaxi32BBB4jT3fyrRP3ZheA9ajhVeH5UZrQ4B",
  "key10": "2NAdJLMhqyuKGUhk35vwSSQZonK16fprnSNbrFy6AsrUM32tRLtz7Wigyu6wFuaLpAJEU48kwCmobcTwE2aiHuAy",
  "key11": "5H4qcv9jRaTmppgW8SogkS3aRVhCXi4Mc1ZDaGESNn5srppQvx58XpmApfBc89DJDp4WzYLxQYfXkHJjBiDmCs5X",
  "key12": "2KoHwXSugViAuPoUPdaLuc7g2QQwLRYSxduZ2NC8cAWqCa2zfCc5BuFvz4wM4GneFqi8JoVdA8DJNH6f11eiDg7i",
  "key13": "5wnAFn7r89L2Sa7V6Bt9FM7jbUi1YFzCNyQffoiWWYBLMh8zduFh8mS7CnSUvpMY8F4tnowapHCJu8B3SannvDH5",
  "key14": "2y5ms5X3Hmz5fNBkcLD66GZhocs3LvFSvAE1KMq1dMaStFPxenGvKKYkdd8pBApzAFAYVs2je7dmwN1trMzWKp14",
  "key15": "9y4w33iRQETfsBYCReqTrhnF3SCrxCR9bY1W7FYXRDiCfFhJYNB7KsCMXgpVM54dHP2yy7YgDie2in7GVteaBm5",
  "key16": "3oZsan7eSBs1qjqXGR59fJghPy6Xwudk949ur9gf7JsnonhduPV25PWgT6GvQbWzy46QYaxnNvboFLE6Q6gGuW3f",
  "key17": "46xQSDBi5ZJYDxZcSdNS9hNhRzKGtjXTpu4731KNY7pHddE2Zsfdz3bLpm374fhTzqJYcbDzsaN5Ubc78RvP8d8T",
  "key18": "2r2qrLEekp4Swcp8y3hb4Qvt3wGQXePhNgY3v1aWV8dpcTUgscxsPGSf1trypCh5gAG1hkzEpXfjN8Rc3oYA2r78",
  "key19": "oM51UCUdnEiUXkmTmv3a97qaYLrssZWCJ9n46ydyYNzZ6z16n4BzXagAiESQDFSMaYT16QBtd1xqM1miiitTUXz",
  "key20": "5n9gyd1piKt2r33b6kD1M6xrLhPwrAJZGnCQDRaECRKyJx6W1h8iZJoWftbywupFcnxTBoau3SbRZdz9zWQiRoVB",
  "key21": "4JndbUeo7BsSYjeqZxAmRjHDn8VD4yNiUoXqJeB4USCVDG2HEL9wfn4aDBiDr9LhESgqGdDnuJux4X8KMxSq2Kyp",
  "key22": "21UEPzfqA9aspGj8Y3rjtFscmjEyp9E9Xj4gw8EknqwvWzA6VgWma6uMD7YM8XaHvqBaAEEZGZtt3yWTbhSMx6Tu",
  "key23": "7w6RDqqvJMwj8qMccRh5ecMSiTmPzVpqcfspeYz4G8LyCxgjxj6eyRUqq8Y5qPqBuqrEfUTqUGbwv2m2bNQ9mPL",
  "key24": "2ZyeyodNqz4ACdPCeaZXP7haiiAfjrpoC5yjf9jmDbaja8VqYyjBSfnXBGpbuysZnJyscYs6ToD1zWZPd64snsCd",
  "key25": "24jamEquBwYgexjwdfGsGB6uRzWvUN27MxibyPL3wDchFaUTwLFdrnj4iYSNTKz5pLibLuTyN98hnPmNU7pEdtZ3",
  "key26": "gnWdhnmzzwZ4ErET9CN66tFA9ZfS9abGwjrMLNLjCZSQJifAbEMX4Dn2Ko7fPMdEW6T9mT3n37JrkHcLYo7KdcP"
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
