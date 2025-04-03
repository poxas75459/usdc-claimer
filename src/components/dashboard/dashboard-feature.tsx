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
    "2VCe5vxa7roGPV4iCfnUyc4rD3ZpeVDTpLmVdY9svgsq6RX3DmbYr26HKyrrSSBbLCRDrtwzj58NrD8rMfPLCsaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2MQtfAEz6JQcYTZhJ8XXJux1TNpGJ6VyGqqDifzSEPuozBo6wK4BTLGFvB7GQavmghTQiHiKbucreNFrLpzvnj",
  "key1": "5FZsiLiBwFR8QqhHtQUqjtYWbNbXfzUpsvRc77VPobGtS2idPA3dz58xPEVHMPD24Qm4y9xrw7r94F3RWdZBNDyJ",
  "key2": "5y3NDjQdgykbjweHfaYRpx1xJFKszPsQQXpSqCLQLSbueNqUK7JrSHAPtnoU96aNZHAobJj521tNw5BBSCLw3Ygd",
  "key3": "126RvmHpNYJ85mEJEgfb95iGB2nZMogHfWnYkVgRv6sKkbMErXxULYb5J5YHD9o2tFKkor3Fz1T9qc27BMV8fHBz",
  "key4": "5xhTxyaVRceo5jffA1BBhPJY1Goorf8BqXKh31EB9mwYVqt17mZwmjA8CL8pFKnCRMp8M8aHyTgwpMniGiNA7e3s",
  "key5": "5XSdfKEmmCLDAJfgN5T8mMZ7gp4WCvB5h66bvYs9kojoVEZy2ZKQr4N2XhTwP771cVv9i22WxgXkphgVHXpVbRvF",
  "key6": "2mxCUu4PYGTcoNUoav2eGhCvxG11KCTMPHuUnGsNvMLEfNnHdLvfbf3jim2c3DamqXfdT6EQQTVotRjcuKtTJfpn",
  "key7": "5EFLf3EzP45hxcMxsATFJ6fmkz8PwLdZmjdefBUiG8iuBYU4E6R8FmkmqxSQqJ4XhNdnbR7qSnbEQdwpxib8EJAu",
  "key8": "2E1n9TSsRhpAHVCc8ThqY5KBAvFTCMpqbehpZ7f5GCYADWbWkLx9NQoo63qFLCZUdRa41cZRGVs5CfjyWidVTi3E",
  "key9": "xrUvgkrpBDU4BQW5HxN3xQXS1kYX9wr9eAvWPeJdXV5GoBe7tzfFgq5EqpTJm9ac51xA44tm6ZQwwHNVAq1iBhA",
  "key10": "SqDwovoUJ1Gc2saRKCCUQE7a97MmADb3yPyPc4sMkvcTzNmFW843PPVcdJY4aBxqymphSDgftosANszZn57be9q",
  "key11": "4gKNSroJn4fev41wrTmhzvCHtQ2t2MHvfEhpcFB2MEhw4WNqGne2aKunDd7Fk9dAjwqyPRpQEXuxQh5j5cKckPw3",
  "key12": "4bNKNgHQRpzAY2Mk1RUaEsykHAFwi5nuBAQLHwbPosvoK9BUCuKA8GTVgGxZc94EzuH7nDaJZ6229BdS7Cn1AATW",
  "key13": "3d7psAsMTmWsEnVcMzmE6TqWMkSR4ozjYJTFQeXUEZ8UWpLm77fGY9TCv3cJj3MY3zYuG8d33eLPiK1GdTxmpkdf",
  "key14": "5xbmsUmQYwQEEgHw2qnNcj5WwmgRxsVhrRJPrp3rveoxh3NQTCAZLi8FhLjtuUY3dvDdSsiyadX95RXHTeuRz4ys",
  "key15": "2wpwkX1CbNfZG5PGbEJQWB3xRBNaVzPcyyj5v1e9m5BGMkCsEQZ9AjZx1vp6vpEJJDGFmkvazDSCZzgXAadnQK2y",
  "key16": "DLSLNET8oF2SJqEr5fnBJgGqHy7RPoYfsUo9ic1RnB8kq3L6Re5wAoAjFDvtvJwEM7bAvnukBSxkykvKRjJtfhy",
  "key17": "2nVULzRU3XKkXrDhrHzFX3E7pVDbFmDvuLrPWAaD6Ti6AFpxVKvLZAyELsnUqnTanGg9iySV1z733zuV3C4s2XF7",
  "key18": "3EfeMJ4q5mZtVsnhqUj2TpWohaupRA7reQQWMmHbsM2PA9qJYiuCugPzPvuy41eqvrogVZAXCCTVMch4Mr4xbNVQ",
  "key19": "5CpqaUvw3J859rwvsaYGc7GLHEPH77MKJgn8bMp51G962L58kQpgk36Wwv1XobYDVtz6WFVSqBJG1DogD6SzUcRA",
  "key20": "Xwet1NZbEYV83iu9k3XuMXjT6PspJEmv61Cjd73Vs2XEh922HN2jSLNMcwFowvftFjZDkyqps5LAAbV3UxXrDGC",
  "key21": "9BRejwLt7t7JBMytMZJ9kYrYQxQFFapJ3mGz2wpCJAGTqV9ADNzxp6UChcjhaqndxAkRgEfEUXHeSaNffXc9S8V",
  "key22": "4THEPDwQfj6JX5VDxRzbVVyHiE5bUg8ZuWSFr7NzUtkm6GHeCzBYKdshh6uv5pQ1byFMzs9rtePmefrFMxD6whGP",
  "key23": "3J9xdxSBCSaFAyVHsGUKeqyxyCinRX9JBqiT7UPxQLwBAvovyXdncAAUbssio5hX4C3V3qpayvWUNCMzdiis8QMp",
  "key24": "4VrW5GHu5c3zzKWmB1QA5GqL5mrde8xjArBaoCD7Ff8PZjkpNzQpht5FCaDGuPmHV32bWpHoJ45i4ADY54N1Fbco",
  "key25": "4CZQtHEajwCzVzLJkiHhVo8gjhHYCggen4NRvHLtFvPHU4Ui5rthoiFKaq4QN8QnAVwN7RSwrNXqrYUaLikQMHgg",
  "key26": "zMWJjGMcr72uikgvG8q2Ei65dUoQTmbsfTZ7Qxwmcdb8XzSxiVRMQvKEboe9QYbHcCUgt9LsDNfaHpgRCBS2Q4V",
  "key27": "2YrsougjMB1k7uwuHfHfLPBoyh6c1d75YVUfRPRrmmskx9GLmUyiHQjaeRB31NiLyTb3NFYwUgUWC7RXhf7YWC3H",
  "key28": "2XPVbQ2c3j72qGj74fZsPFNsTzkHtqWyhd7jqUqrBXosy1xw9Ti4oSgA3UhcHSL1EAnEr3N4e6wVkUuibvxypALA",
  "key29": "5g79Ay6o6BC4EE9ocvCfvvaHP28KRKVt7Fs3E4kHB9bPyp4LMqw3LXFaVL9Qe5FSxVMRoGboysFBUaCkmHbqQhVd"
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
