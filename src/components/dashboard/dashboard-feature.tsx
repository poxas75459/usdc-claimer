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
    "4dQJrPbcbpmsQUGHLPpVtkYf2hruyNRda91zpBA1p5znRbGvNUvW8RXXTyBjwhF7GvCwrhvEo9oQQPpTFhZ6Ji36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmuksBCto1piTfyYo3JmG2q3sRk8KtMb7cigDXb64W9seKAWo6YDBCPQJranE38CmfbLPAGd2jKvaZ5RRgUUA7",
  "key1": "4HnzxeuTV2vnoqSntAvGBh4hV2n84FZXPZGXBtcBunmBQdK7gbXNPUkyZjHdgJ4wJjjhvGcjCNV1wXkhisvUyUq3",
  "key2": "5Mbs1RXBu8WXJAXr77tBf4VvEXMu9DucYGLUvmre7tJS4LWtxrzsVDkfy74GAZAvv8koBiX2W6dn1jvKzxqoi9N7",
  "key3": "2TLZywyGQRxNPYikc7B6q6fpY3CcVCC9a2KajJsWwW1hTK6MWL2e8ei7dv8NfLQUzqv6mvuwgReLotvo5vZ9ipuQ",
  "key4": "3kdE7WSCb5wFRzxKkadNTFGVH3i5bD1uFrCG1sjqeh7HWG8c4GF4fBuE7a13nh1n5Jvnmc5jro2t3AtYedgHsbnF",
  "key5": "3BV6tEEZWD1xHBimKLhAF51BjZq7NL5kVA2YX7A9AqogqCimR48FdxEnuTs4a7FQ1p7qFPDLmLrfFGZEMBkxqhTY",
  "key6": "4eRHJGK4Ggruf8jZoa5Mo9xfELUHBAGWWE2piymxF5iJ6RgnnCNTcdFxkW1TK1YhBXhM2G5MJtbhJiVj272fR6AY",
  "key7": "5AqhXvCRCSwY6EkAjLVcH75iGjYB1U3JtzrKS7CUJ9Tgv6Tdo9zzk1dSMnaDm9DhGDpCy3PNUYMQmiQRMm6cg9kK",
  "key8": "5bqaiAvtQ1cBa4suCDe4AVrEk7F9ji51gmrxDju4TFHxQ1rJ4xpcTEcmQXZ7tUXj2sVQvDGN7gkBmbw8wABEW1kL",
  "key9": "4SFBriax2pmSSDjgzBcC1STZFyWmujAEkFAPr3RANzrtMU9K79spowgqY6JSkZjqWPDxkw9My83TaurzJuc1dP1d",
  "key10": "3cYvCdk59NGzYqgYmWWFspHnpjAxCiZxkpkHpD3tSkdxhpq85bzkJ3gHPbLZ1psWLUVJP8cVcWC5EmQsRJxeTRcE",
  "key11": "3w9qELd15sHWctb9vjEX4PqtKt1PkF8KqTxLkcMDxu9xMeCVujsHHhArgu1TAsFC8fAGzfiefigAvr6pWpNgXyFM",
  "key12": "5VgiyAWDXpGU9qWZMHUVkzZwUz28GUpRjPaMiuso2kqh8ZmjPfRmKGLX3MxGVneA22jB4euJqgKdoez8m1twp3bf",
  "key13": "62RrM4ACko62SkrUTdttPpWMfwVe4d7r2HSyLD1fYt3suwgKUeU9ZAS5cURd4B4zRftPfcTNDumRf3pMqEofaXU3",
  "key14": "5RDiRFHaNW62gMk9LXKfv2yzYUwsk8KudXMRqALWiHxgAK9MqM4uKxjhyXg8TAhhKdBAYPAroiiQvfz1Ywk7vDTg",
  "key15": "4s6T7GaC1YtjVEBDPf737eSumSMaLst7uPZb27tWAwsXFfHRU2D6uPPRNVvRoaDm4yS34rEYsuLt1vLAzjwjQppM",
  "key16": "4WrnveQRtTx4NXiU6qaQuzsb8BmCVgZbKYXbtKf9sTeLQ9Kr5Uqqq1BXxdS5Ze6UK4q4nZvEkCRK1GXEDbqwpF1y",
  "key17": "P5m1mPwZnQiR21DfJwUzUdHnQ2KwTscVjUqWT46SU4udmTcTv87Lg1w72P4yVX7wNXjy4Xfw5ZnCBkovaf9qHDW",
  "key18": "5NCiFdXP9k136KALNGnGKNzFTtHvGV8BfZtYDkP7peHXWJJdSaNczFGennyxEU2TGdcSgJnbu5UAVrwWSHWHYiwN",
  "key19": "VvebpwUzNGXDuaJx1LjkoZnmof8knTSEhCS8UYzW4LhGUs5rANR618irygs7kr46cyqQ3DXHM3JTHM2wTspJRY8",
  "key20": "22KAZKNL3K6162abBshGwANZKyva44TNEz1CvSFWNGLCrQuZhXFfFLEtCXqsfhxxe8iBwpxXqv6S1CWAFmfQottC",
  "key21": "5jsuxkuDC13JbX6pCWBYRVA16wy6cqvVot8j5VsMhi8jQEHg6G5xfHT5beP4UbUs8ZWvFojsTtVoA1KcCPNkkZKy",
  "key22": "2Y9Vyg4R4aVvgMfH98tUYeAQqEhtQ39DoGxh1b3PDfcjCUheXhBsKR3DXrQ4Q1MZgG5DNMaR6kKVQ4duWTFKzs4h",
  "key23": "3FWJJZySLG5kEw2eFJMprHx4zzaVamqqYvZ5k8sTTYWkRR6ej2XJvsLEetHH8Jk2QHkjMbnAe8v1gnhwtLpPrEhB",
  "key24": "oBcy5hApWWCWZiiJtFdYJUzPS3joJ7hV2FBWDeDx17TcAKuNEqwg2VkvJXXATccT4u4eZZ1PkCiFyFtjrHy7fN3",
  "key25": "29UDt15db4D3iVSBHvVa8vWbgohhz1UxErctGdkksyXn46j7veGrs5xHX7cBBq8jxB4fNrGCC4wrBe2934g5YXaR",
  "key26": "5q16r8avM45Gis7shqdGYtNVRjnAEusHCAVkNyd2HaegFdRF9jALp2QkVS9wQcYoX7jcKjfCRhxLJRNm39uP9sEV",
  "key27": "3UvX7VG7k9FW1K9yuMXGdANg3P2SeLqVVoCSK8PiLDHHGQAFJgQ9UrBMtV1AcfFQz8FPern1pgiENBozy1T2paaR",
  "key28": "2HfNMVAzkbupCbX4PJHXDobFB9fMGcXt7iQKZ6gV5Qv1ZbSYBWZt4xf2zHX48u6wGvZxC5enNyjLfe3azunp8jZk",
  "key29": "q8raK4kvWkwyvgyTovthN9Dkw5yGJrT8gy2majxQmyg8ZKpEeVWoSvJ4tDB24Hdwr6Gn5y1UEpD81eR2DtZ12pG",
  "key30": "5KbbT45ky5aRgm7DsN3vEbWKwcodu4XujegtuYMiDbsWWDMYxmyF991SuQU9Wj1WDJh9cFhMtsf3jfKbETtGJu37",
  "key31": "3CfZuD7vNPx5PLrdAfLds7kqnt9ccswDMqNWivPiMAzY2Membfo2zxddWK8oE1R3zhf9x99fzwjPq46LaV1iVMry",
  "key32": "2n9arhBSEja5pT4JWWPKazRJnF1hHCvqtyUyrDdzVFVA2ErdLeSZTCMEpCrZZq6S93gLoyMxZ1AxpQxJoh46cvYr",
  "key33": "2KZS14xyTLsvcKmNSbM7cCausKpLVJwdcftWyN8THhRRX6PmUiM4C3BxKPi1hNCWZDGi2vaFSRvAD5DX11jrdFqa"
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
