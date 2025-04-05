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
    "2Mqch8AsvKUndCNyHT1Aax8uSbeKvHpPTWJTGFiyxGdsm9wPJzanQPP5w4pHTJ89Nas8MVH1qr4Zv1T9jCiU8dv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvTBLgrH8BBGqjEXKExahsPGK8YykUe3CXETA6Vruk31BwkoN77P5DHHAZqEnTviqKEmNAt5h2jgafb6jhqQjeK",
  "key1": "35NZZPoqM2vrDTCphzd3ZLo97NAof7p5qbN5DgsgWr9fywYRj3xnzpZXXZQwhqMpbN8LppjRXVBXEgJmphrymm1E",
  "key2": "3VqXjg5ke1dWTphSjj6YJYpK2Hmk8wW64HXgK2hn54Nx1fWdxYKzziXCLtpjps8hzMEJiBWevqBX4mhZG4d5cTXK",
  "key3": "3z7eTwePNrvNXhz1DWV9WB8ww69X8YWVsJuDRDShLXXKYtw5xsT9ocfMRJVpVLMVDjsC8T5gp6RBCUwkBYKk9vu",
  "key4": "4mzv2hbt8mHrFPbegZKWQDSSxYg17jtNbDZF9VtyKPAz37wk1U7EetoYKYiKJ94HLV54DfcWJNnVJEkMoPLm1CBx",
  "key5": "nkNToHawAUiH53KWDSVSyktQzN3uWpoX16msdopuPubZzDt7QPnRBxXBwnBXtjuarKX1uEUejGHk3LKejKHGeGH",
  "key6": "Sb17MooSdfyyd1KgPeKaj9Gp2ndYLB8q8XfU7HHgEQ15HCePoa59X17AhnbggUEdAE1e18RdS76ySLoxXAscgiP",
  "key7": "hn2k3i9PuLh79MxmoCG8qVpfEdzZK5DQzpiStu841zriYN3thRhTihsHNuxGRwKuyz6nFceDQLuxPrU22rnzLBi",
  "key8": "54TYkZT8yTsVE4TmUPy3WFwciLSXzFz9nQ2MqkEw6jbaZxG97qQ9SDFGEkYzMQRaMC1qN5hMX2iwUaE4TigWCJo9",
  "key9": "4W6RCLN3iyNyuipDnFzCeps5AvoHmmAmvvT2KUeam2ABuYNQmMaMAEZzstXcxHMP7S9DSTNsVoCWURoyAYxhTbjD",
  "key10": "3uAvWYxCgcaG8wJXfBJW57T6BDyGzyQmaCVG7AymPVCeVuWN5hrgG6HWkCneAiNqDWpEzqmskPYHifmrzp4hr1vW",
  "key11": "4hPnoyhWwK5Q3EffYn6Qa5nVmAiJKephQirPwNnjVLawRexd8dD8wQV3WUoac7dvQXRQLpALbshwNqmSCXrBXYho",
  "key12": "6yUc5Y7JMQ2inmaoH1vkZqqE9ZnCACD4oQKPiJQEYzJZWkmyrkypQQeAiu8Ek4kcDZmRGqrzdUCb32XrLpC9kAZ",
  "key13": "AMMsxnhkY5HW1WJWQMFpFocYqGNUEL7Nh6ELk3XWebhyfnFQ5wfCg2d9tGzmYPy5zFC7oPmdA2fiA5hs6r7ABJ4",
  "key14": "64f8dEA4qKLkGs1NSFV4SswJjHzr7moNDDh3VrAR12FXLMgkLRWcoN58sMF3izcMAYTndCPiBCD6jmw1SAw9yd1p",
  "key15": "4sh4og85qMdaVStLKDVogBNLzeZQjufSePco7RtvzsnbfnY7ALgsBFbMT6pqiuWCYZtaF8rh5LNuEfYhrmSKx2JV",
  "key16": "3SSHfD47Y4PkWqzqXfLWZ9maKtTEW31egxmmhSaY3BZ7rs3q1vN49jN9DtHB6U7GpY1sN9d3rLcMPJ2fz2KGh8F9",
  "key17": "4furskjT1KUpWz6XMg3VjmFeoJMostsf7AYNDLNNsvtCxh8ZzqhjVRLZ9xvKE6K4dwayVyZH3k3YR8keTC4hqWAS",
  "key18": "2UcMeWfkjYBLxi4xX3vTJ8VoGZosHJL8zVZ8SsBvCYW2ioDHxf91a9fBE3xwqXBSc99SVUFPEmMpkwMADBiCxY31",
  "key19": "2bFzirXB5M97SFEb6K5dCVF2zheTQA1xTP7DTFinzCmrWwtPtow98Df7w59YiBAM5dfhH1qYfHfdVWoZ9F4d3wx7",
  "key20": "661zN7o59i1ySzTQJGKEx6n4LRHHfGvM1eqRdkZQcM6syBP4p5rJhKirGz1Hi4vXCbonnUK7kj7CpSqq5PBPiAe4",
  "key21": "3iqbCr4ebmLStMMFc3jWNN2n6aTNNm6aX8qq7QscA8ibshK2EdL4SZBRj5JiTR5SMdgzzqiPsUCVW3kWMwFvDJog",
  "key22": "5acwuQYQJT3R3xVw86PA7i6KJjwS2jyHJyk9mE263mRss2i1iCeAKSdxMpZLti5ENAh4fVBpsdhSjQcGumdrtZGy",
  "key23": "3wCwW42HCDDXoX2dZiZqdAhBxFXsxK7QFutQw3CyS8X1nm4fkBTf3GRGUhnvkcLz68HyTXQPUfhYvtRv6LCEw1TE",
  "key24": "485WzRYk7wHE37GedUjkUmLQgvciComJucdpCJdwHDd2GB8Wzmrhr1PkNcFmiVpYLGKmnhB7hEUVCFEe34qugud2",
  "key25": "4ehNCvDY7hvRZjhco5ETtg36Yezin5XMNHPzsNuQkHK3VNjdUwWztkiBdxFQv4oND12n56MwmpERFz92snvQ4JsP",
  "key26": "2s4kuFA5qx4i634R7eKUvu3hAjKvEEy1PzaQm7qEw9Q3cbgGyZzcnshuoZJYDsfwTtWY5YCqK3Z2sLQauNiqSkuf",
  "key27": "5ULCHAk4NL7WvMLiRQ5drHfUtuPfyqenLtJbsQUnntLCLmrD47GcjJyvhC1eWVayUVeL4rbNbX69DKWFpjDwJExS",
  "key28": "3fKhknyANgLhVHmDLakgXcPgDiqG2uFhoJtR6Ps5BHUwc5pPmNLHbkeB2s75TdaXCXUUhD6CYVJQZwpuG2FoNxn1",
  "key29": "4KYMhsbv1LDFLVVR2QWFanwURq2n7ihk9TsiT3My1NoHKejnGARqnAT2eYUzmoctVb8MLi4yFZHAbbHGpDH21dHm",
  "key30": "5hv78oZvKGVWjJSKwopVtSjrwCJzxGz4hkBTRDoeR2EwyAXHdt7bmuWWzwN3gTeaBQDr42JtNDHB76eavLYKDCY3",
  "key31": "VKpQ5skv2LV2Bsz8LGDFs6n7Yf6mNgc8H7uRjKM3gmjvGTkr3cUFzeLcun1fqY2bV45zkQEwxa8BsCZNsgKhzR8",
  "key32": "2eJZ8BpNTZaP5nVJ5CXwdJ9XKms8fx7EESAim6qTeVrcF6o6yFJz2s8f69KigSNnV8afxwsx6X985Goi2EzHTih1",
  "key33": "4LyPLvSC1QQLKhW7iLnNjjMQtPf8eCcVu3SowxixARbffE1wEiwA3g3LkZx6FTYjK9jrkVsjNa8NKpHvHHnrXahJ",
  "key34": "4WET8oN9C9sNCyeHmt4d81iwgFFqiP1atFKEjP6abNugVnga6szZVuaRqdhTLavzBQkNxugZYhg6kjiPd8tm67bH",
  "key35": "2GZbFNjtkzF4ANDe54VN4D6oZgYLdB8EgVarZfCnNiEEjgAnK1mxgjBSqDjzENZpzS5Lc8r9QhQz74XrS3mVp61s",
  "key36": "3DCqFuZ2qDjNsbfQ6qMKA3zm3gUEAkZF4JBuVhZedMzCdkVZCGzai2AqFpsKpP5RpbNXbP9PsWfVPvzFZoqwK8Xw",
  "key37": "25yBCUCT2kxszb27wH4MujjvQvMk9xyRV9sWgt57VdA93jyN3CXKDn1DANkZnkpegLqWtN5dvWLPMCQq7LqsbuS4",
  "key38": "5oXimkk58fzu45KBdyDUNjAXdRoSmBCs8BPN6Ei8juTCgsd8PqBbFRrtsfJWGko43AsPkfXFiDVGqDgqhd1K3EfC",
  "key39": "4BPKKv3q21f8SExs9bFVLYa27LXeAe9KY8ydRKiHLhimqaxAkTx6nwiVXf4Hroj6WktFRFaXQGk5aUQZznmsZtqZ",
  "key40": "4uxMA76yHsa8TMY9uBveHUo5ymobj1Ky31YrUnaqze8U1dgNKFfrSGu6YLFyEpns9R3CD3kqzCsMvDxcqEJYBz76",
  "key41": "2V4eeHSju52EHmLWie1VBMmrKo74KttGGabBENCnPQTuH3ZVh6EP9zEyyZgXvNG5vw2iXmRMLok9pbnhpdwfyPEX",
  "key42": "5p6RniPrBVc5wyWU4Lvu3yYKHy84gFCQKBtJ5eGSk8z7LMLpAzU1xTKQ6X8nyh25MKfsbCdXapbdzyTV8irwdoEy",
  "key43": "AXfyEf1Qqt41LTxcV5ttJdGHp27pZB1LDbc9VCZ7EC4f1NxBydFu7jyo91prGz11uGLuiRQf29yh4622kXJQBD8",
  "key44": "3Sp18Ld5wywzkZ1D2Pot6dRCJLJXTCBrzRM83qNwPvdYLVffGrpBQWpqufnoy7yBHGoiuTyVhp1e7xvv5RdmYeU5",
  "key45": "5Mn9YHE6wjBYP4VQikzbXNiL1URTcmojUqnqd6umgSA6etDDcyiK1XmostoKgXVwtcpujjvRxv1aNydiy4SFQEAR"
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
