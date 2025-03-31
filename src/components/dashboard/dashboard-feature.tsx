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
    "3FGFwRMdaRYr4T9amrKotVtJmB8QzDcpXwWirpjRjHDhyuehLUUYA6WzF2GzabSkqZcV8EKC1scaRyNirTkgqVkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eg174r6M9taXSYQsYRYGfhhLtfLqTrUyjRDL8cehsDJEZ9W3q5vxdK7KfphZC8FhY3DyMVPjsquDVKJPM38Dfox",
  "key1": "6435XfexxNVaDtnsPHLHC1rmX9Ekw3VEW9FQxrTTvZHwar7rtqauVGJVHXbc2oTUjbJpyRqNBVVGxxoXEaHfCrud",
  "key2": "2ffkrUC5Xz5n5mtira8puMUXuxK7zTMrQXvNvJjMxZm8YP7ESfaMiacAY5u2CAHZhyviJbQ8QbEFro19Km1AVBJL",
  "key3": "4YZokDj7jzpEGsEv5TvtunLqeuhdvYq7veRP1hyXSHur8ARj5aPGRT3BNBua9NtgDKB6vq5VnFPjzZnispz1Dv91",
  "key4": "3AihuonESXaZ68xubjwPcmCKGgdHTV918LXDeJMk2Cj3bHdx6i2iLBTNQAZaJRM16RZnKcDYwJjRbeXKLNdws4bh",
  "key5": "24jyUxsc4mkdpnRASgyebSFvdTLgqC696AqQMvruwmG8SsVSWPGR2pK7mkrpQQUYNPTdYM34cFgr4297y26TpwKb",
  "key6": "3Yr6PRd2MaZqNQgzrTSNfrBJ9vd8SQPMAEt9mPjApCJ4NVZUEtQo44X6zTxdgJPPnzo4QPRkYVQpoatmtkRa6G3H",
  "key7": "3vqQz2RQwwKLz7NHKz3BUxfWxj8ZvBSiP7VQswN7eF5ykop9rBnSs9J7g64uScutbbC7npm9dK1DVKavenLjEtso",
  "key8": "2YbZwSJiacWjDGdtgC3L8a2XTAcsUoVvv13AtzjC3pDjmbJVdWa9Tew4EWcrXay5LQw4mMUZyuvj6vKve6zkJ6R4",
  "key9": "5JzrCzTHxAYtLYt4YxQjWszduSLjCvxQi6CwFivJvRWKHSVfcLanPXqHKcnhGwT1WCaWbL7gezMH3La1TA1hpXXC",
  "key10": "4sXg3TArVuqCP2nHVavXPwAB2vk2UC4vJAYwQrQWM3hphBibxP948aHQSAJAUZFzRfMcwu8kxZLJ96vPKCpeX2hn",
  "key11": "3eedExFsybaKcrgYZQVWwZjuKUsmMeWwmEL9aWcdXvjG3ehtLaxoycrJwZyTbJh5BSPupzFAKk1V3pHQEdsGvyUS",
  "key12": "27VaXsUGjtwQMhbYyCzTbVLP9VTPWNKrq4PKqdewdAaZvc92RxCzdDk7herXiXjf8sQMucR6zhwvjqLecSjNf5L7",
  "key13": "KZgiNcKUgnARQSeHcB3UiUVrp89LQWbvmvLiX43SAR111L7gUSWu1o2HbfA3gdwga3Ujt18t1d6W2UFvbrrW2Bs",
  "key14": "7hGE8gviF99mrimK6GGVdcDNizeTKEDSXuvJSTMthJZjiQrMc6NWwx1K5usmNe4bXizh9NjRX1UmEXVvfXieEfe",
  "key15": "4Q7DdhBSR3v8z8oyHoqHYyKbqwKBc61H23z6c1gtnYuypNCkKs4r7b5KLBH3bppAg8vrf3iqEqHTWsH8TbcbydP8",
  "key16": "2t21cQUzx663ULRCXYst3wuWAW1vW7yce4YGmvj6XNcLSjB8fHuAJoS9HSbUtDQhAtCcXEoUUmgawzpLEGjHwapg",
  "key17": "5jirLkZB1sjDZ58cWityEY6FYCohPnCNM6wXwBsfZvzdZQJfMgmWTmbTUHtdyK5cS1oSsP6E387Qnf3C26kNx2SK",
  "key18": "2NE17M3PZ7HTC9yj5ig24RfcWTYZjGhjbdyjHyMZMzb4uT2oHpgq8xRiv8bu88TVZUWXNgBfLSUhZLuPy4f3KM2J",
  "key19": "2FKdKo5xabgLa23q4ob3eR2w3LjoV7m8jP47jDG53jDTTeiSqX5UV9Qa9mwoNmTopAP7cYdZjuiTE1uqi5V23kSy",
  "key20": "2Wj1XYykkuv3sqRKapSdPRtcpjt8SqzwYjeXwywmLSSZW1QTh36K6r9H6TBKhSEH7LEpDpGTdFAMUxcpvhm8cUyH",
  "key21": "36Jc3DzxWjyYYXNqDqZDxQ6mnzR4RRj2geHjMnLLwZLeKveLrBXk27BM14qh743vdDa6nMZ76Nww56kKZigfzE9V",
  "key22": "CCLwx1z1KN3AeVT5iqRhQLrMm79HJwY2C8uhJSRS1c6cBgPKp4kvH479W9nxEPoJXv9EfgxLDDgCCjFtjWVfbMv",
  "key23": "59uMvai2T4HApuKrVYdtidSZUNrDRybmLPpXtfnVBDjeytfKHCrvhoohK3kGWCc4S9puxwy2TZFjXCK2wcPLYdV4",
  "key24": "dQUZ1G89VyAfr5Lg2Bz3eoE2z8V9Zi6prshhqhAQoYVZPM8B1CTdoM4QHS6vJY7S7uiFxREF9xj9Qgef63odtvn",
  "key25": "58HLNuRJroRgdG8wAgHDp5UXyBSDyYCMXmciMaEUpZ7XQadXZXUJBGDf2bX5pDsTDp9nN1pE7UwbxZmDRb71eYoV",
  "key26": "2xv7M2UhQdzorD9rKp442z8xdvmR1uPRGqdQqxkCSnXkeXHid5NBRBLVWspzK5BL4fL5DxieXxbUY44rcoz1o6bh",
  "key27": "2byAJ5edKRNaSxjsv2x3m7RzaHrspHmeGgmsiCUExtH8GQevxrGzHL913Wt2kK9diFmrjaXG3WkuSRyab9zjpRYj",
  "key28": "2Aih3hmB6CZ6BB7tYQsj6tn2hXvU4KYkwjStPQQAyn3jBQVEUSjGDgKzx8obL9pKRFSNoVnqZMDZHk2EvTyPa3fR"
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
