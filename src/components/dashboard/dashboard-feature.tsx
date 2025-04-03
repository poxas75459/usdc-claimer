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
    "2GHyWLaUV8DCUBqQy7xoEw6C5oJWqmW2veCpJ7jERayJDk3gYCyyZ5kb25ZhoaSomR9zjEWHrYCJXrxShnMJHsM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqSCSaWwkinqkZXe7xXMwE8D1iLJTwnidf3rNYXw9c2jpEF6otLCZ74XWcM2H3xEHog5KeqpW7ffd2485gv7DXa",
  "key1": "UqrtQudxDLJTB2sY5WkHbnwDBNffQ4Zfqfg5MG3chHcmuwctzE1CE1SCuVqt1W9PS2psUeUcGs3gMHXbM6AZfCQ",
  "key2": "4DWnUoMUDEgrLVHZyFUPCYrZUtM3azTMPYV7zNmt2raD2BT4TNz1DzpMRBGh6kWnUDnmCfgx6RUzyzLyaTwyV2wJ",
  "key3": "66K1wi1dSS2eadGtZvSMuoN1CeESB3ikYpYiTk3vFCSYoueMWYxTw5sA7wMhiYUBaTvrcmi4diwvV8KbxBMb9nu1",
  "key4": "2cCZZY29vfgiJW393TvhG69ArfCembA8LLQcFf8Q4KG7MgHFQJQxBdwt2KgPi6iZQbdjVfCcbmKAJxVgcyB5FwB2",
  "key5": "tgwrzmZGCdSRduvbzMK1FgHeDD8ezmUWKoA9XRHqp9HFK825Jd47jPXvx1K8LrJksS34hqXrNbewcMDGy8LkGZA",
  "key6": "3J1QtwCR2UaFJYvytuVTYbEJrKZMEjHxof47csM1GEjzM6LyhHxbeSxtV5fFqw5iM19dYJg9VRwoA7VnhETTKqte",
  "key7": "5axhWqeELmUwEQeo3YYME87KQVqNvV8SyidyzbDuagfKQfeJs6TwGgEbxGH41DLufx1QzX9qc1V3PAcXxMEfFQjh",
  "key8": "2jXA2aCMJjyrx7nRb7BBQMdp4kX9iRK1xXjLiMAhwg8j7D5WDJs3C6duA5eCvcCZCa1vcFHA3r4d1MNjb8TfkSRC",
  "key9": "5HEehZrQ1E66sr1kcRf15XnWBe6QP5G3JKa7n1LuUMmQWNG8EHRwzt46agMbUiyyfrUuCxSN4SvBe26xTN6rxs9t",
  "key10": "54LnWh7FxtRy9bdNQG5tq6qfffUzsLZ4v6BU9SBAzqsexKUKgccP2gm3Av6EZzCMxmT5AGHugD5cjGjw2cm6BjS9",
  "key11": "3qEacLCGZ6JBWLz5rVBu9H1kc9ajQ43XFGELeFTG8VSrVWGRZPh1VXY7XXzak3GomNj8hd4HggaD5yi7HtaFEsE3",
  "key12": "5KnwAAzALzDGAPRHM4NgHvaX3ub9gd9B3yUFWD9G5Zr7niSQbo8eLsVxvstmjbQ3MduJDZhtq6nrbvJXHqgC7AR6",
  "key13": "2qkmWZLGbnLobSTidNXZ7K74LMYeSjpNnERZPGcCrnMTPrYxCirEjRSFXWfEErmiEnYAxjEyET6kTe3mahXne942",
  "key14": "5wdBoRJPxg6y99VhspLfYDmrwvsn2QcBpwMVne9JmRRdQgGjY4FRDJ126bVGBSbSePDmNM4fCyfwuzJywfAD4bk7",
  "key15": "nuYgyqYb2RhyyHDaKERSWUDgZiwqkYtV3fQoi7QVGLzPgqHzBytEhUn4DrSr3rEJaSE727qkiroshf6cSZcSFvm",
  "key16": "5bXDdbGwcWxnTTZ5BDFedVSob9CeRX8dHQ34zjFWV8gs28pkSUQWF7ZGabdB37vuiDw2ajnmCBYPd1H7LZpwmN7E",
  "key17": "3MeLv9PqZE1jkgg6o6fXhNNEKuGtxYXYN7Z9441PHE5RhTifsvT7mqqaZ3HFQTFni53BsDNivATEYVFL6qudGss2",
  "key18": "2etPyMPAd5MKE1k9ue3Adi4ioJnpL8Z1Hw49ofLM2iFxj26mx8jjLBUfvhGncpDq5GfHTGsjBk8m6KfbQT89Nnms",
  "key19": "31nVm6RE1hAhNmpe3fYKxrWquUinLLj8qfbWuqADBMsVUtY8K52d3nzvS5NdgtCeaJ5f6j8iNypUiiVBNEMBBb7N",
  "key20": "Qwktbsd1iG9NnKuPNLW1jTA1JCCQEE3kUG3xq5rtPPiWK5e75ReaweUPd6hCSvJRkiseiL5j3dgqFqgxFRHPtjb",
  "key21": "V9TW7YqhQHjeGraDov3KSoR4vRRSYbX6WMbJUdwpkVHijMfUFzTinnUdiiBiVhvEkwDMkYM4QpnHTWZ7Tps2dwS",
  "key22": "4RGMt6fuHUPcJXbSwt5yCg9jGVyiY1RfnNq25Qch47x9PGnr27EP8B4iLaXbCsBX5JAPyr6J9Gd9ggcbJNEWLp3J",
  "key23": "PjSgidZC87CschdLV3a1ghgf8TMJzTnteMV4QyHjRq1RQwQtbUYY545tNYXq6eA5Tssx4xvKPZw8PSsUePKWpyY",
  "key24": "2om3ZEpNJMH1Yw1zCNqdVgf15YcgCN9WTGnkjYy1NhbHA3sXafkgfPzJfEpmETsmZefj5q2S15rzhbABtFH9ZujB",
  "key25": "4FdVH9r3276NkuvzFsFzGw9a4DgFwFmW1TwkPc3TB7tyuw367rUAGrP7FdzMku8AwC7Z8AsiDcs7ru1ho4BaWHDM",
  "key26": "Aq7aRCWBTMu2N2wExeCtAotRJ4JgZmKqS8GEsPZf6MFrUBZRr97Pf5AthiqyQULXAYaDAh14kcsLg8it1BfSsUW",
  "key27": "d6s3qw4CunUsste69NUJ6epNC1PuK6TTzb7mVEBBzNxmYPcLgaQ1SpGStVFqiXrtAaUhyyhq4n2EhHccahyXkTE",
  "key28": "27XKvDybVNRtZRtThCj3uGfZKG5iFv7SQDkMwg9T7NpeRizYnFa4TJWJkYoBZVeUHqXy4ZPtpwFNxtXuWbkooxy4",
  "key29": "32RRdp4zNgSjzenmy2EBmCUFvajVLJ31aiiSkJjnaz7mxBmnrLEd2wydXWPFz1DDiMyExXbMxWJZo6F2mc5ZYRRd",
  "key30": "3Lk7iqsrnts6yvkcgj9F1vVLt8wGVVNpEhepbfc3Fn46anzV6qY4AJakEaJxe3ARsgiwnKs7sHjEFGtfvp31YCMG",
  "key31": "2UDujyhV1zqE67kftvhzDSdch14gVWyourNSMF6pnxx1uEw1TaaPYA9zGgWqVrdDH3iwiTjexBiWarBrYg78QKja",
  "key32": "4HDVMkpkWtPPVLiCn1FD49eDw89w1R9UjzPRjJh6m8AcPv43C8nnA4kaC57XfPzF3NxJ7NG1Dbghkpaqqbd9NMVf",
  "key33": "bWwFtSRdC2Mhs8xfMM3MZhXFsx2YNoMwWSYRc52K2v6uGfrrugwezDURG4tpYi1wQbyNW2dsZqmYETt2Vgx1Ksp",
  "key34": "3vHzdXqf7MQ1xGZdredC3N8JHsXyodxuBSRnBeJ7rmijhLY7ov6SdYyGEhsV2BcLvio9TwicUAutcQzvmv5fraqr",
  "key35": "2EYJc769xZuPbgN3HNmL5DVzaukz4xXFpbPbDv2F2X1rhHAV7YSFcTEBe4XYrvqB3E7xx8JNsMuiEA5DHmDDYSoy",
  "key36": "4br9gX3sWXT7H3ND4hwiCRgJJvizNUuN46RrvtMR4wBDSZrtBxEFfNBQuYYUbvt71n3wuFjZ6P9afVNjqxc7FiTE",
  "key37": "3s3FQ6FcYPuejS594eKtPYMJML9U7agiuKx5Qiqq2yCRMdt5QXwxYuiK7XtzfEZRmXc9sMKHt27phAThbfNGLszL",
  "key38": "33bjpzMtWR7PZkBEhsBBRA96FoVJxynE284mXEVbpZKx4cYEtjuQ6GQrrLkzPVYyneHxD1vCo6Bt1AWo6qSjy2Lz",
  "key39": "5ArVhWrYDEftcTtyA7P7LZQfBRq9RfrDJJtuqfNLTuZjmrLBifpkWku5JUNaSt6Q4JVBvyes2zUfs2jPgc1ukTxf",
  "key40": "4LTrPgV5aAgEuRHC7S98keAY65X2qhA7vdhEyW1wfCfNHQysoPNdeDsadNWf43ZqMQn2e7MvjJF4DWzsZyZNtrAm",
  "key41": "2X3DeUWKX15Z7DggUbfsAscsDxsMXh9sba8vu4UAhytQiAmpkcNXtKHen1FgQ4kir6Qz1UPjFYxF6yFLiKEJAWv5",
  "key42": "51jwoaAFuZu85qSWPtgNugZMZwi4cgctrmrC8uiX9WEUQhQtmzVFeUb49phTCrxHWHG61o4f2r4D3fwh31yTu63f",
  "key43": "2fJD3Gw1h2ekGgFDoj6BFR5smNToY48bhh9BkUY4enXwEWHuNSppGSvRsC4sdsCTaA8UXouQxjVithh8zNE4WWQR",
  "key44": "58Pvm7KHoQ1MtYkwHJAzsidWtibFRmSQfVzAsCencdkJJ5iAt1sCgXS5VshnWkP4yRC6CMtrTtfm5nyGJopFmxLd",
  "key45": "T9NFVb1oQw2scvu7dqCpwT2dyptNYmFWrmskGvJNLk4wwHyEy9YvpReBKjCsSB9eRTadNoR7L1fPBJbfo42fTNo",
  "key46": "GENf9jNNzk6mHHzE4uqGqx7acwjdxPy8zKuFBirvxxPWTBgrQtdmf7cTqE9uxc5wscYdbMWs1HxppxGtNh6c94H",
  "key47": "S5w3oDd7Q8uv7mo8PYzxNhMGF6jYQKBspR2nCrSU4Mnzheo4TyejKGCjPun2eXtneVom6HThDddEmt3Z4zmoRnh",
  "key48": "2n68LzitqLTenuxYJX7MFSM56MMgdUHF7pscrPYZyuksqmTEU4cZyVL89J1kNzi567ALjJ6H2zQdq1fsfZRqyN5Z"
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
