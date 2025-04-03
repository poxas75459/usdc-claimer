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
    "2LD3m6j2jQ6LHEtoWDkKxGbFZyz8GregFCkrjpLdeEWvJWyo1N9LKTQYxWhvE2AG3iQ2vhxC95kt96UhPSeMRgGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjKGBfBAXEL1pCEp9ze1xJ1LgcKbbo4ZW3Nb1s6P3CdEqeskqtLuufwWkXtkUTwBkEFsUvKt6kwqEykQrUfmZxb",
  "key1": "4ZQ9ZvQpC1WGj6pb7JX3Rk7999whr91KAExNHcwWFKqhdeBFoh7aakgwc2PSuKsnFbGNT9PcQJo1qATkKu2ChGC8",
  "key2": "3RBGejgpiuuYq1DNzXH6ToL8FCC24M44TMwoSpGc68EW52QZ2WDPEERTBL7rd6ucgC2jgiFswZ7BMiBY32B2zjSi",
  "key3": "5dfmuT2zjd8Dcn6qVZ3YKzDVtsKwcbUKe7JJeBXN8fDci9cF8Hiic2NdQHdDvrYjBren2JaqySpEzGm48whVLH6j",
  "key4": "tYCJvECmvLhJNjvJytAKThU5kDYKoR5CSEK6eJRmcMn3yorXHniSDu49fD7fveY9RM3w9AVvNyUp5aKogtAuWc1",
  "key5": "5mpsFVhh5iUGe3neKRVdWdGfeeQRydcW3BowjpXAcTLQsXQ8b8Q3sz84kqLB1vXrZtgNFqW4EjrtJjvZC36FgYiy",
  "key6": "4nvb5AL2bPsRXZ4RyiDZ2f17GeQAQunnqZMtHJN64qakwMqYmHFumepqUfUvZMVNJY7xNRtneaikTPca6pCFRSy3",
  "key7": "3pG6UwHNJeszoFCJfUkdVnowYoDFhYW2NeYTgc8cB26nPA6FYtbhqt4W7uTJEhdFyzJkMXKmJQrAbX3VazKp2FAk",
  "key8": "3m7yQJiP4FfXSRSDiWxSxkHRVmrCKSVZXK4rSkWrNajXK1iVoRqiXpN36yNhRuHCigNwWM9UyQDeVsST2com9wXo",
  "key9": "4cmMc8EzgD2GjnTkoFwSzqjiuH8nUmd9S1Lwqj4eCwD7ZBeo8wLqSBhyfuxsHnYPH3WdqCJoXcEafYmej1WbHjbh",
  "key10": "4Y6Rv4NrPdxi5fowebY1Vgo9w1MwDbDvKvMGKpTW6xhbyrJvzs7Sne3rB7mwFmo837RRRXVpzYJDNZhkTAvFHndT",
  "key11": "3WqoYqV5mZSvQRHmj9ZatVFdZ3HRTiRKPjhmF7DXxwHJxzXoBCJF67k9LcFjoNy4Pi8QB9VepoBThBCrbCqDQE1W",
  "key12": "216a41nfS9KXiUPLHjL4S8KKMCMQb4NmdoAbYiK3MhtaFm34zWWKgqA2FQCYocLNnS3741R9rBSGMhhGHqqihHGf",
  "key13": "5psdMQf39mWcpNERc32bxt9ekvtjbgjhGzZpW7Bm7VpcPZVssVoV1ewRaVgytsirk6YFrL744tcR7KaPWTovhisj",
  "key14": "3XZd2ByUt94YCSKyjgdZjv7xkxT8QwG5hLRhSCKi8dYTTBPhSQpnK5FLcSQBw36ftDy9sBeoM3yDvfAa5F5VoyW5",
  "key15": "391uNHjRefD4HrJoq53M797pCCYq3KxpfkAQf9h2x3141o5mR2fLfTSbGRXn1F8gENt5juoJwvqXnLnkLFXsYdNg",
  "key16": "5sGsRwn4fvNuk1bEwQYt77XtojKw4g4pCPP5SVVAwHsn4r1ieTwjW8H3mWDCcEdG8Jc5LQpm8mfLBHxjxYojsaFT",
  "key17": "4BJBKzJ5RK8q7bt7K6YXzjmUVedxBwz94d6nNsaQ8jzfGBt3cbfFH99Xdkd9LnjS4Ee45tAAqtDsVRGUAGVSRmPv",
  "key18": "3J4htGkK2FMKrSsEzLf8B9QihTSJHLD7uCr7W2jyY2oEamKHg2VhHWJLFWgdrBGmHbq3JsiMEcXTzH4S4D8UcyvE",
  "key19": "4nbCiy1PNyWRwsNUDh8CZ8beMVt3qJQMr92hsaKQUwNSJtLEWzqrocLPtKWKaSZvdpjjfPNV8AwRW5CxYPd56Nv1",
  "key20": "4DaNqEVgtmRzQ4s3dWFPnshLHYAf52gCoqvBCKwAkQNgZ99Jj5HJTzLSEhZ2rmCvkHPuTYpUQzngzJTFxbyr1Wsz",
  "key21": "4jkpmJ2EDjEYAjA6PcChR72znYmaGARznJJanauRN1Xtiyw2dzuXN4nUTHDb92qpRLr8dwiaDC1Paraq4ZxFe6e8",
  "key22": "MESSTtzAwXLMigYYoAFkcBtBgvW1hSiuankWeomWcg8CnFuSkrYZmdvnMvMyEzf2hc1oc49ifrhmo56NQoVb6UG",
  "key23": "5WvfD95Zs4dv8nsiQX2G9NcY7ke3RrQ4podATcvWUBzuXWLvxFW7b6c4vWm2zM7LXgU48WhcoNgug7GhTZZrH6S4",
  "key24": "2UXP2Vj3pDpHoNKD6ng1PQLM41jK1PqHb7Awy5JaiBVtmia6rwmCajn4ZTPFfsceLoqUparfNpGtCP9EeyFSjAZ4",
  "key25": "4GpCr5m76LnxPyAHiMVR5BjP2dHsL2AHhSxF8HGt8HveLd2BnCp5B5khv6F3MTtmtfKhwRW772AyMjSEtTSh6dKh",
  "key26": "5h8x99zqW2jap8PWKHho4c3xe4AuCAfsHHaJEupWnDBbJkxeLjP8nFyR2zp24rzxTdzK1w6z6DoiP5QCUVDsJE1C",
  "key27": "qxsgqoSJK1XWBvTtiVStk16ntpoqC6unhkwy1eCVVyadRDA4EjizZn2z951HoZwQyrYNDoeaLguVYV62qGf9LHh",
  "key28": "db83kdmSAKEnC8NKbMYaJzcKnAsXAA8x99DqzeLy7DpNSZZMHEdykYBMr6yFKecdV8qpmMkkyxNuvyyionigQGW",
  "key29": "23sWayBKXnr5ZJ39vhHgVVttgyC7zqGyY4T7HpJQSoSr8e65zGV8snq148yiDTnPR2eisPNZhSsJ6VvoDJjXHHBL",
  "key30": "5scYJuUDVEPLSq2wKgsmQ39m6U5iNjWTbhHnGA7oG9krWfTj1L4USLKdwsDm9Kd2fTEqGKh58eNJtWbNS1dsMdjH",
  "key31": "Aajo8EfuSrsXyrCikYq16VncgbKs4ZiBJCtD4CouwpzBsDdxAet21r1dATrbg4xkqvcdYbTutrp93JdGTvhduVK",
  "key32": "64TibFsZtfcCvMvh7qKVfTfF3GwkXpNmEaxJuZMDUYVDYC7J7zQ5F31Zj4zkhcifM8QFX98iXXX6ZMU9KbojkDrz",
  "key33": "267Czw3m73wdABxkp7FagToZ9YR6PEnxbWBNzWwrAGUbwZWF6V95wpkdiwZHvzZ2v2aQEnS9u5sUtyccEZGB8Gh6",
  "key34": "4YjwAQVNLmaEHhU4iPa7YTpQjD1ktsv1CspqUyEWzfrMN9e63aGZyBAeyd2vKS95upKYgRJVv7KtVvbADMTsEDoD",
  "key35": "2DrCuoTxUuiwPExBww8NUy5bc7mi1qh888EEgMmmQ7g5h21xX1z8W63U1LjzRDoyPYMDq7CQ6C8Muw3RYuJfp7yU"
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
