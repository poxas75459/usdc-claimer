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
    "4Nvow43Cv1MEHh7d9ykbkb4AYCu4wnsQvpboMPgkfkGFjmizBY299haNBFkG4hzoZ4Qjtg2brngVs9K5LBu28cWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kwhK1CxaNnjYFpyDA4rab89JTaABEUh44vrVZJFPshMvudU2PbRe8s81Gxx8ebNcGV95EgQwVjPXzmvdcsuGKr",
  "key1": "33qW142NTRYbELc98XUJEwXusn4W1FKfWpSx6AGy6WekcHUMoBWvkcf2DSkwgGStLuvUVaAKhZer2wDFyCgCoU7g",
  "key2": "3u2QzZu33Kpj7enmCtjc1kkVdG7vAXX1b2cxR8xDjP4pnD92QRSURrECuXH7fxgDd2Mv3h2hvAqr4hV94ty1HHxK",
  "key3": "24wjkPCZxUDjDYiGYZGGcUX7QBBcWmrMRPd4QMCXgFT1Zy9eXHjnip8GSXqzTLBca4miuwg1JLYnVsBrNg4Y1PKu",
  "key4": "nFJ9pDQuPpQ8wJPxv1dSpWWTKHDXANCVacLkJaf9di9wdE6B7drYMAaVNaXQm4gSfdeKLQyBz8PjnUH8NM1GNe6",
  "key5": "45nY4Q54mGDopCGQxHSZZG4Nr28TjJGgBpKxdDrDQYSKt5zMHm1yURqzEbRULLFY7wcrgxMfMwo3hv6rqAFkQwf4",
  "key6": "4cK8YkiCE9uT5V2MuTyC3xJg3bj3MqGxy9LJPKC2SQwZRuybPbEw9c4x65kmcGG442cbw9nbRatMh1b6uncyPT5Y",
  "key7": "3KeGgM7W53gJJJUtCtFQ5nLUbMw7oSTYVmhKVCyVGYWjGT8UuNKj2Cxd9TJex9PC3sZ6tBWacPUM6hU2LnhJ36vB",
  "key8": "2TrXW2SnqGW6pS8G8M5X3jKtLzph4qTW4ddrzRwmv4ebT2S3kFygQvcYyW611DSk1UbRjW959a5EcTg9JsRzJqeG",
  "key9": "53DScZ7tpZp9DFo5RsmHcsmiVzZdkzZWcmKG9faxcDsz2MSocFwQ22nxEqZoV53RYLacmeJZqkdufGUCbsY45Juw",
  "key10": "TnLBc3FnUqUeRzUACNH5qswH5hFFrG6AHEE8r8H9so3tSjDSiTUtSpSQokMw1PtaHT5W54eDjbBdwwxZTjSArGu",
  "key11": "2vwy99xMeH1oeBNweJ6NJC3Gru1RZeEhSEsBWptmmgaC585cux9rfuiEYrsHTn6URxqCYt95GFb3xmP5W9nVLiTK",
  "key12": "4WP7xC8R6m9RZJxLo2b4Q731tGc3pq8R65oiJFrkhi8qSpYNNuZLyt2yeomA3EfJQXeABnixERsLXBgRqx4BGidG",
  "key13": "3r9RjG5iS6jh6vrPcLnh7SHvJ4RpK2cTdYsP9sNRtYYyKPHMA9zAe7LVLrd5UNvQ2BtH9eSYRdCvMfVhy1ufPj5P",
  "key14": "5hA8eQSfFApAMBMwYzYTozRk3MNJndEnc7VeA77XWF4yc1FEiWAB6kt29DEhroAvtrv7SQRnPTqorrSaKWBDrL8K",
  "key15": "4132ozZWKgS9jyPwpEhmgYBmkVzmrN6mFVgzSX41rNQFn4T9rXM6HPK1Ep4ejkqpX2jKLBxUzbi6zV4e64gdZPAY",
  "key16": "4hAeQWUXVi1JxsysheJvtf674ogDrXLff36UhpFUArvAHgZm5Ky4t1483otD1U81x8bqdrGmKwmqrPmzoHqnb7et",
  "key17": "2aqRNhEfcfTVoxgp7kyrdozBEPedEofDkXZRzkK45N6hgzbbg9rHSqRKRHqWaimHcmkz8Qyb1k9Pv4nW2iPWNmQW",
  "key18": "3o2LCa64twBGyvkEQgmofUTn2eLzXxsc7EZGDSxYpDSf2CS9nKtFLmCcnywLtEFjePacq1DDH7gRFi1hXnSesdvW",
  "key19": "2P55KJCheNP9XZJuYMaFHRuU3NdSGpL8PGeWaULBkDATQ4oezgVPrxVzZdnJeJbayMvkAFuZbzSNnAYM8D1HY5Bh",
  "key20": "3HC9GKGeN8yQpwBME5jCRqWQkUS9YReCqnZ4hEjEQkNerVEjrEfqN4d3je1pz9qTz1QQWJaUXxHGcwFbYCjpfiJ5",
  "key21": "56ujeTeVEy9pRcwqiunLRPxCEvy7tYUX1K6sJVcCQuKATU7dK95paBtgH89d8uQdQhWt31rEm8gVDhVC1Dd5gWS4",
  "key22": "6cUE9NukyUPPg4r9VsLsHXqando3FSdnNbdYPB6Z7jjV77gYmK2WSUensVt4MsTFmzj272XnWqkQfVRTH6pDQPM",
  "key23": "5umxCEeQzuirjr2ac28TT68qHvohijCSA1nnJwG7Yvn7E3tNGhAyxDXL8ediLUa57hJmpihaaLjYwrFTH4cEYeQD",
  "key24": "5M3bEZX6x4jqiEuu9Jm7qfkNLMkszPmLBQAwpvN1C6aCMiPpPQpPpg7GWctQwDryDQ3AH1QKAJiRkSXuohTnxp1A",
  "key25": "jc55k8XkPjCAT72xoZmGuX66vEfXsntGPUiQVSXKR6miqp4UZEoNBaG3GfmYeJ36sBMinRRc9zZmJQZnstagGNT",
  "key26": "2uvnqrXx4GQV8vCBVdXZVdmZ2F2CAeuv8MVnAwHYgnFtKKgBQmRtokTCuyCQJspTtso6TQzwY6Hv9WWNrHgeW1yj",
  "key27": "2oxHXhWcf3qKwvtAYVPEjFEi4fCm4WyM9jwvrKLtZs1VuvbHXPAKWaT8333zos7Dydsh8DQyYJo9YLvBFavU1nE6",
  "key28": "BoTfHxmVUgbJ3dYyRHbHWaHvikiLSnnE8KUieZN9yjFsusgpqYDvXHtKRH4qaifnfLG6bV1bTmWN42gtaKHP7Mb",
  "key29": "2Yf8zhP62C382Rd4HLP8jzpvJshA86rBVAMNTS4dz31aaH6w4xwcUmbJRhzcyMoVYAQYogzVsFPPXLYqP2aMmudy",
  "key30": "CdyByfi754EXPmninp6o2N3e11hwMd3PMpSBGxrPsTEvf94wPtiMuv5EkLv4QqHv85kefZuFno9gzTWdenwJ2EH",
  "key31": "67cALu7SJYLLqhTbwUtZukMrREyNrFyDzxEHwR2F8kGcw1BxqHt5QJ5eFChB2cfuWnT7awzMHAttMgrmiNbQJ3ci",
  "key32": "ho26cF9dnKrWsrEVdUHdEMbf7K1RqRKQCk8rQs3F9C3R9K1aG26teTGPqyJpb9yQY1bwxvbryCVCopoaAUFY9s4",
  "key33": "513hnAenbd4uQJJU3DVhWaRcxdKPvbqbboAy8WDC72oREvBTdhDas6bQsyErLqKSKDqD71PAo8vcEy6GqrtpQkC5",
  "key34": "FgtUVcBJ9JCnULu2oLSR4Hit374LKj7REKV7DeHBCsbfTMaCRztcxKWcTfuFxyBjhpekwTwAvyZHbtwyszgma6J",
  "key35": "2XJiZEaXhXv8PiEW1rVGSvLty2d3Jj9m1tm413e8MfZVSkNDZcyyLQzMk8ZK3FwwkrsNu5gcHFM1gp7VxnxHytBT",
  "key36": "5aEzbFXBcNEU5R8RFWM4PVtcZ5yC4Wq2hao7ULEp91o7X3Jh6DyejCocH6MrGTMae7d4AdWpkRUB4V8CnmKNk88n",
  "key37": "4Bbox1jR3AYkTZYAJcZHka9FaGD6UKpYVFjmQFGeWoRyGak8WmYJ7JP6npsMr1Wcrpc7D7Lv6ch9L8HGv4zDWadg",
  "key38": "4TL3HGgMaiUHwaf57QThPfZVFJs8sRUwVnCYrbLwsaXb3CTxhyXyAG1T5X1yoUKXAfDEQzhwV2DN9bbtxYn3T8f",
  "key39": "4haWyFZfNoeR5ygDrcENBSJf9vTKEHYqCPUVzDSkzmwQ8EbjVSw3StWvvbZzGex3Thm86WJZcj1vFSaNiYMfDBaU",
  "key40": "2yvpBkH6wKgbjsvz2uYx6A32oTQynyCeGecrsvKNWGNAQnztuSY8mxfRnanHs4GfVuyJfsQYqSjbZUUVwNZtAqsW",
  "key41": "bNQkEVXMVzQpYUHbPdh9A4ss9M55nMBwarwFYfmjQaP9eetyAv1CfcvkVucYAeTbdkHfdyyBVQwtagyQyab5tLe"
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
