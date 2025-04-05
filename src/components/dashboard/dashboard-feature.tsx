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
    "TMhH53EjPyLqVLFNdupiz4RgP69saEttmq7FuTM56ruGYkYPU3cpZXwK2sEKJ79jL67x2RhTk66sqBnnrUP3v1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkrhPEyRfUvuRn7ErZsjyg9uhhYEUsbwZAXtS4kwC1cWdYAsv9wzvvTMVVktAZGJyxWYDgFRjkvT9KCFLjP58Gr",
  "key1": "3z5xgYWktBhP5SALznKEHXjeFJNwuh5PXB2TgzCnbs98g5jHSRLD2dQr3siK8v1Hk7QAquWJP24WPpFREoijfZSe",
  "key2": "61p57znfK6k6NWNMgCeGQP9HV7Jr7Nxaf8UHrkN3Dhm2d1fvSWZtj21vymsf9DXkqE6whumMjp2zW3dZ7bjhqgpo",
  "key3": "59ZmCGFJBfyWpnggkggrYW3zRN6x4GuASR8aJAHy7iMdqZS3uggBqUCJ79988m5Rr7BFgM2DtABbGqLsQ2GVFAR1",
  "key4": "4WwL92nZ9upJQ2Lpbo9grmx665SCyamgDzSwcs33i8cdZsCjQxA434iSaYHZCki6SJVmA2PmoH95ukWtTgJz1ecy",
  "key5": "2iik9HBhfXAzPBeRVwgYufje92rPHxNJRAzoL8esYqn4xaadWiKTqbtNSbndqudnysHhvw2CmoLXcwSx9YgbcAzU",
  "key6": "4Y2gmN8zn6CDMWSDDe6EJthAP9MNiXNyojYhdmgX17ewTKnxcAAtktJ6x8pGXGNPq3fZigxfHPHcscT4pUARHo6H",
  "key7": "2vyhXqop45jKaE596k1XURCjqWgcvbAX5yT7sBEJSui7hXTsjRZVUmFZSYum7ZCz5bVhWRzLfJA27CzS5hcaq1im",
  "key8": "26ck79CWS1VGDDvVoo5UGsevShVGrSaoRAuKnFKp9V6gVBxg2AVD6y5oYaARtH2FDXmZu54KfcHYS6qcyMTc67tA",
  "key9": "3QH99dpxAijnunbDs6XPTimttWZeDjuF4kSU32WwQmKrHKpktTgwFLsQLpbh6CsFxUuJpc7kU7WVXpTFUjq3bH8a",
  "key10": "2CQ3AN7fCT3mizMJjwgk8qtPLeovWdHh1SJMGV3dSBrAjdvfqSb3nFKc3jv44BDsQX9QmWKDfhHpF5pcBiPgp4tF",
  "key11": "hWiwcSTmjZYUb21Z2DT1KkqrPiiuzPaMQFhMMmWiX8v4UBBZqjTquRoKZfKiXeDHtXUZybYUr7prBNbSsMtosFi",
  "key12": "3TppmpFhRjTDkTryPvZRcFngG2xhrbEyvj539mtndrSeABcPt54Xyw48TzaQWQRD2AhnDMousR1moXuuG1Fbf7Em",
  "key13": "28rm1VHWCr2E9hqFW49gJLEgiEJEXpEYjwSXgCNT31bVJZxbzTeSZjhdi93KLW1yBQbvdrY3jVmTt6WG6wEUrDgT",
  "key14": "4QU3LdjVBeuaafeDECz7gEW2E6tLqXmBgwg9wbGVKoPX7DC83qwqjBuNV4g7BsQwY3gHgQ6DRV8xpGfrGEAVxujd",
  "key15": "5WJMzFyHvUpqCFBw64ss4ekRcMQW5pTW8RQnRCQmC6YkEhLPEB5CEGFWSUzYmxMB8DERj1aVyBsCa6xx7vtTgJUr",
  "key16": "5XM7zJU8okujmthrK2CXSd3DZHuBDVoEqo2fy2oaLtNUzHRUUHZRnxQcvKThRBt2VFVzLtyqhoGAKH7XV9gv9zJT",
  "key17": "56RGJRXphBLRN2YMCRqDWzQMnhCaBY1W2QoHgXaoawSVTPzV1bLSajM6TS86npp2kn6J9YUd7mCK9Qmj2wftsimZ",
  "key18": "2acj5jTdGFAYta9W8762yxNwySZmBUnUnaSWAwmh19oaZBsAWCNqetFRVCdp4jxnQ2RKw4aY1XHm3v65zvjJGdna",
  "key19": "3zR5XRFmKwKDZaHf1Vy68NPjVMnC1L8E298cqwFMNuyZ9nCT22pKig8U11NL156bfU4uRVGKKGQrQ7YYZxQkjkuY",
  "key20": "4qGM1pZaw5ubXBvTcdZjXaZCsivhE6tRZVeNAdK3ZVfnrykYFM2oUDYJhAgPxNdPRKgzvSSSAmQ4M6Z4E7yEqpv3",
  "key21": "hhSERPXMsTBnHfbCEF4ngj9Js6WiE2jchb7Tc1xC8wjE2XUmRUyja7yRegbYvRBqtuumZx8NPaR2Bw62MyERSuN",
  "key22": "4Uub3ARUM8WXVP4MUDQSZRW6tAkqhpfGVfWHDvaZG92Av3Z1FqUQFLMNRdbHKkFkNWVvPd3DA7722WYhTfwvDPkE",
  "key23": "5AswKmKKsXSESva61x2EWBHMMvkDxxrCaJCEKErAyqzsTgzBfNJ8PF2T3D4x224gBeVMsCALHJpZ5sDt4LfzMpc1",
  "key24": "URXGW2YhgN6exseeimi7tbY4YY8L56yu3eTwB21RNjuaUKpv3Tfg7dXdfhtYbGkdShd5xWaDxCW82Ent1joY1ys",
  "key25": "5HuotHEDmdEfDbGST9eLmq7iaEpTLjsKYRhknqentLuiRSTSRN1Vb7HVLFedBFHZ8joSGUBHDKPR2ggE8CAUU1gi",
  "key26": "5S3KyYNRdCZGpcvUNQbY6DSg4GfSq2avSdXWkLkQqmcGwKPLcLqg4vEZJXbZXZJnEZz7LGzRRkNxwC71v5tuB6Gj",
  "key27": "4w548btNZ9sXombG4pso2GmDaSjRDGN9otM1UZDFxfqzrZ5cknjwNH4pmZx5PNKPUobuNTvVeSnzkNjZrXR2N1gh",
  "key28": "3yZ4pbWLcAA8LtxfhF1g1chME2xPtwKy9mt4JkD9ZdPu5WWccviasH5eEL68GPQe6Z2dc7kG2MWEQMvtuvm98tXg",
  "key29": "4nWhhJQ8JRBhKF7iVk2x5A5HyTHCF4X43kXsscNgbUeySoiUTqyBSuBZ9VBDJ8psqjAzL8HEVXH5JmfTfUVZPQkr",
  "key30": "fmgLugmbmiPgVqFbV34nruBzSpqKB26EvLgZXYduLdztL6eYZHigsChsNv5hZPziPbKrWVZuQo8Uajjhb6wp81c",
  "key31": "5TuaivkzHc4c6MWffxf9gknHywaeecZgRuy6dHb5bgT94ceHeGirb5QpHkDtJJDVPEZr35fbz9YPpPk1Ynk3rguY",
  "key32": "3TPrHCa51neXdjr5mKgnDwNPY6qbaJhm8kPgTfNBFFWG15Wdc2TSL4QZzqVCwPvMfepdXCRyaXmKSMbBLF3nPkEY",
  "key33": "YbgBD68tmnAsnLu2wkDEgRS6A9TFh6oFaRUXFPs2zKxLprVQ89UHYLk76LVKmKALETQ8msPPQpUTY7qDbfFa9dD",
  "key34": "3r88kH95os5WDqDecXrm6MYhY6XNoWwYKeJXNgEvyzPyMTeBmhXR3rG4AgUtw3vuZYJtM6RnQZpFeqqHPrTkrue9",
  "key35": "h3w2MNxLUeNi1AJLF8QE6bx8zeWtGHDW1WkCF6Gy7rcohm3qNKDn9CUmNju8rGGvBwTsPTZrcjLWnLeW8GWhLY4",
  "key36": "DDxoaV4cH9jhijczBBaBU76rBbwKsrxEbwDr2zVNK83TavgtdkaMScw6vfNDKDndZoy1mtCmVsVhvfKDnXmCA29",
  "key37": "4KRoqt693ybFh6ZYA1iu6Wf6VWKWmmGLn1kA968ovbn5gLzb9jKyQv3iCfJEpSESLQaeYm3KWkB9GWUJmqH7Minm"
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
