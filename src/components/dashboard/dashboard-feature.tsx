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
    "5oGWM1bZ9jToFiGUctWm8uea2RWi2kkdo8ktwHuyTyYAXUc195RyCE6SdoQDKSVrx19HRVTXgTM2xZCSzmV9JzQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpuKiprsnAwvDcxQQ6nvWMVwW7oWbJKPZcMMuenorzNoC7apoikz6yxu2vg64f7ZWZHdMpGdmKbW2Y9PdcFp1kc",
  "key1": "3WJwqb4idSC4Qy815AqrfE7yTsWB8yjh4WicEUUnGEkdSB82J9vCfHcVhLKz1Cy54e8866hAJtqguqhE5hVt3wcJ",
  "key2": "Rg6Sgw7dBSWz3Bxp93jnRjkWwWJyS8a7m15bDayruAvb6jmRHdZfEZB1qx8wGdYTnKpzbZaz1v3judBMQdMj2aU",
  "key3": "FgELSjcgC2HJqS9bBXyy6RLCJjkegRckuzqnZcEKHTXVMrX3PxtWgJq8d8TomCRYfYiA6f87VySboGXCFEJ1iH8",
  "key4": "3LyYemexTwDhjqPFgs4xJQUSRadqU5Gn69bRArXsSkCTEK2kXN6BaknugZQjmGoRct4wSWGoaqmGFdiQsBCHmmnM",
  "key5": "5pAtdcD39aJbD87kLzsJE5sK4r5A8eB6UfgJK6ZRUkuj96phTGf2SdtfqwTyL4y9f9PksFmMM7E4Pp4eWgSTtf8Y",
  "key6": "zU3wfEjd4J2i8k94rQuHKQDrWbmpUUYryTnGBTR93FQiVc4rVZW5xhGEbPhbK6jV244uRZa1k4NULdxDYJg5DzN",
  "key7": "4r3pXKDobxiT2rWU38Qg1NimznmXDN9yAo4FNvkhHsvU8ou3JsXxqqJXp9pjj9aYfbQAUtyoYLZakh5L68pGwrks",
  "key8": "3G3juM36aWTXzXdHP3b8oU4FoYE6MTvymGd3XGokjJ9yoLHU3aEwYkgXV4nmg4hWa271mjnYeRTkK317G9iwgyXX",
  "key9": "4WETm7k2tLfzcjh7TKjRECfDjZktArJZH2Zn2ZAydjRqfnHKZoQHj5ysb2URuhcmi6Q7ph8Z8GVuJk72ZzAmgsAf",
  "key10": "4YmT2Kkm1QAzCEJEDAgVJ35su3pnBEVM7dxpgwuwicjG59L7VA7tDKFqXiBZEr9fVm3TZoL83uhM8LUR7o93nqra",
  "key11": "4GBENmyFU3WSbZuFsmcwHu7zRLEFxdvWYQkE3Thz3EbAmhxet6Wns4b7drtvUdpRumruFVSgxWRnUTLJK86T1FHH",
  "key12": "QEDJzSPZnKEnWoDAm74f1qu3958ZapVx5kRmMQbHAKWzXdaCmJLWzj78jWWYPRG59Noi1qVuHAtEzMnAfzYyyXN",
  "key13": "4KQwruzuHVbqmDb17pxVaWGYDabkgWtzoWnUZeLEvEGBuYJeGebqx9EffsyxrSV7tDzt982YECivTqNTUZpqDBKS",
  "key14": "5kRkXAhhBMbce7zfHPLJTXoNwViftGbi5NHskaALWNJLdbnKFYr7mj9BiMgFhKn85CUrAS53jyNcVydCVVaYkeat",
  "key15": "5qv8m748R1aVg22Mdcq3mezkWJMLhxVYn5CjAL4y4WXneTSbfjGsxCvNDZFh72TpHbRm6zDHG31chUkwXBeuX2vq",
  "key16": "3dQhxFzkvVM9LgERiythEUbtcLnFvfTSSXqxVkrXcbmr2ZxLZVziu3f6s4ywd6pm1TYfjrBRSaA8hqZcX9xkTM9G",
  "key17": "XP3zudjXyJXF7UZVgQ2miULcTvvNV5JYBP24GNsmLgUMX7QNERaJ3oRXJcw4UZLWikrg5nAksoFD9vGw7DadKz1",
  "key18": "3fY6PjFxoEkZct4XR4zTpmD7xZJ4m7ZgnA1Vn9rMQvsfgbDgjSP6sooWkJuQ8TpvgKN3r1W34oqych8vMwDyDCgY",
  "key19": "4SfzNcJzUzpNGS5Q7JyoGTk73Rg2bBf1ouXKRjJ52nHxhYdz8FkGGXq8JQjp1cr2BZ7BMZoYoL7ixHJvj7NaSRMQ",
  "key20": "5JkEXaHkUUbNNvZQYGTf8KH3Sq2zkna8L3SYWaV5Q5eFZAVtHrHw8Wdkp4MJ8YHCHBn1MYoZ1ry538hYztF8XUGp",
  "key21": "4u9AfAMgoLZERVi3XEPFM7wwjdane6S6d3zuhxxviYmqnXTCYqkhdbVFocyv9wR83Z1t3qvNiJjFiFqepXGAAeVP",
  "key22": "2Bbit8byeMfDLMpBdSJNB8NswKankPCL6betjeHFQRFW4VhGhDgQH1ShiR1KqtnnGF7E1Z4DH3LLemN2mVafdPsW",
  "key23": "4snoXQe97DQ3LwFGiSQEq7Ezjjr8pUeuQpmfuoF79xdQYe7BbkMKzS2FZ7KzjPhmcgDcrM9FoYFpmJp8TFBYLD1z",
  "key24": "3W1kDMWnfHqcF16yifTCQt7M7oFXnUasgzrBJqm7Eze2sSeRkpvr2TFBHUBvCigCfYcJxjNrY5oSVjoZuwRcqxZ5",
  "key25": "3HYQYWmR6Xr3Jwy2SZD6amFuVpchgnakzBZWDn2Jin7mBWKHz8ScUnfPWeJQWKiK3eG3H6JDMD6Xd8S9w5s2kG9R",
  "key26": "5965ud3T7hp7bkNoqHzbUZBmWAdnfhbDaeo27EFE52mhUhGdEytQxttMBP9ToBqqhdgRhsHxfLswPMTAAAWucR8L"
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
