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
    "5nWRrHtWCC5d5TrUm4bgz6rRzpTssktkivmNTUbZvHW4T94SSuVhUBXyizbBYv7dZihif9YyeuRDDEoXyho3jWpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bRPtfCEHWJbEwevw2gcF7RaXGoH78EZ4mnV1uWR1aQG6SDcgZQ5xqiYzWYr4gDyFfqKTDbMg5Vh57UUcVSxi7Qn",
  "key1": "HtHg3ibjVAVwv337S5Y6kQ7qofgxppuD6qHhFxpoqTXCoLLYAk3CX2ozktvKxtf4J6M5kSgGdkDUkMHvTKQ6TAB",
  "key2": "rgharUPaK4zvsV237vt6xqpW3cgVhHiX54y7LyYDb3W29Ct3yH4gKwppNTFkxqE2wzvGQqyBLhft1tgyLScSEDJ",
  "key3": "5CvGTD1ML4QcbdQicg5TmkZpvDhx7eL3dGBZ7FiXC1FuT75R2413dsEXjRrTAqXM2CdyDysXWG9mabaNUyVhP7JE",
  "key4": "64ui5zkV5s8cNAGJGsdKdZM7MQZL5iuNAVFTsVzUAzimjPKxRjDcXbYVGLQBADhGoTh36agGxaaGVPr3YxGRrsET",
  "key5": "2xyeLj924rbtfsSR86EYEzBJwNpa9pXamoAk43FakJf98U5Uwz8upeAHqFs1fNDxzpc6ZERHGNbxdCX9NtegddSk",
  "key6": "2t94BTyGfD2pKEAdsV9H5wCHPFzoC2woyViQCCypaXx3XcGnRya685dYuMiFi4uHZZoGZz6w8qXkfqDcV4LnwDxV",
  "key7": "66qd29h4j4RpFv86x8giWJNJjm67cJ8oMEAzUWKfbiMjshe1ecfW6KTDivfK6CphwfMCCpA5CpjeiB2Z6c4LeBF1",
  "key8": "5Q6zwdMS1awg4Py3oD1AmQL99Qxk2o8cY2zo5jrUHpU9v3Fxs5D6QRvg2bVgc6toWTR7B7w8WqcP6C462oat97kF",
  "key9": "4LgRGfrZNRBuQonUyMjSEG4kBCk9aKniATKUcuSShvkMp18ZSxoY4PrvF9jQB5H3ykK6HWfrnnP76yp5ZxBr8Z27",
  "key10": "2NU8zCkmXQXqK8HTKf37vyB9DTiCWkgeZFMGMyHQ9QVsa46YdujEUYQQNTSov4tbJ62Z65q4wHu69unAToUT3HeN",
  "key11": "2MQW9rRsfVZV3zLcyhEGmDL918bhxJj7nrmkaPqP72wZ4weWQLSnDHXRt2HQEiN6WBbSZcJaekP1vF7tFhApEKPG",
  "key12": "2zcHbLUCaG3Sn1izXMS2ovBohPMF87ZCavB2oWHKX5cUhpYNJLProKhJdVCsD3hwwNen1sgLnyKqVp4BvZSwxTZg",
  "key13": "611fxTs7KRMFAz8FzoRXWS1P4Q6WNLSpsyJj7FdL8MJBKZtzQRSFkwhxJM64Xgtkq3wX4vFuRwWewjLHjqMMCykf",
  "key14": "5Ca7Sf4t4chSMvYyRFqAgafVAmQLvp6pcsy23oJBdB7kS7HbgkHRJXkJMD2Rrt9cXLN47jj8bbWDXpfFFpM6eMzk",
  "key15": "2rqtJb5F43ryB2d3aKZBAt4GwL1vq2FPVkSo2mfvo3YT3N97qTKRh271BfxPnENXSrhuRywm8XAh6dhMS6wSsvcJ",
  "key16": "2Rv5Kix2qonKZtnrREcjDadjCpCckWxtF8CnmgthAuKsAEzZaG8Rh5taJabuWcDxWyVdVAbfMiTBcBvLJKcEodeK",
  "key17": "2QMGeU5yEyXhTn6VuN4Fi9N9o4J1pUg47sFP5aYQSYMHUhLDaAuxQRfGKUDmrxSvFFmBFecq5cD97Y9ve6KMMQ9c",
  "key18": "5JqPXpxfyCPrhoZKuk1hQ6VC9fh4XvpZohdBHWbYcFDhc15G3NNPqnLWmGyqtzNMoqtbi3YDbkn5LhEcPxijxHMc",
  "key19": "28f9VRzhaVSFB1cwSbtnvRqFBQCdyMYKS96KjSCocFR52NFuPqRY2q1ENaqphfUMhRuMtPTWM4NuuFKSMVqxgjQB",
  "key20": "4wTEhG7PbnKvJa8N7ZZhUXc5npKRbpBpBe8fsL9c1zspMTffogHn8CUyb7Rnv9vLpsz5fqtDjugrtTbWG4xF7uFu",
  "key21": "5yH4ckSXXxZach22P3yXNCz2hCuwbGLfyxcbG6TM8toKz35FVzvqZYk5ZpNhMjy3dqmj41WDL6m9KSQiTqjTnTEW",
  "key22": "4mwGaRTwDx1G4h12k5EZFJH5X43BV6Fy3T1Q8uqo3YcdbiXHqqdzegourxgU11TgN8ddNWGxU8mrZgaPn8bxNona",
  "key23": "4akJZkTLEj2pqecmGoZ1koUhXBaKwpGoAcSJiJimeMQjB9C6iPQSGtRapYtSJakKiDQf7YfjMyqcyCwPt5M2M8nj",
  "key24": "2tHbf5r4J83Zn9jZdADnr5sNVnkWWRJG5GkgqhATrHfwYgBXBVGMJaowACUdcb8qzizfDJZTewp89N5yYYVg3BYz",
  "key25": "21QV482zL2WqE5So9Uzt3c2Gg7avofZ8fowkkZRszAJFWwK3KrUjNfZjw5inJyeKMv9jwmGMQ9n1b9iaRd1Xcmya",
  "key26": "3ptUGw5a6mfJvGGtALgEeQaAcove5fMq7gYzhRRn3KneSVpJBDjzLYyruYxAxtC477YGMD2rWzoc1BpeawuCA2Ed",
  "key27": "4rRMM8KV8LyP6wRKorWRZB6BCGRqFDmdTEfnXxPEKpJek4vxXXaCM5MDWBPHmn6tCAofJph1iWVz8AkTRCUTwfjM",
  "key28": "4y1tHYcHeB5K5gZeXgQq4DvWEMGxTgSrhVk3ZZXH7wqUrWnSmzLL5MmHAC911pXDKK8FE4icA2eqnpMc3wKuoZd5",
  "key29": "3pxsvXUqC7cJyPrwzKEdJmZEciWrP393pDtwUDhR7BnHRRBPeMYe5TVgYwSJw7oMLWs2YJUJvqpTVvu3dh5kDvbv",
  "key30": "2vny52FDjmYb18jGUBszNYBntzYQaJSt7BqsVyVbAafBkAyJxY1qJvz1nQtQ2ABNSbZmuvoUPYNtSJ66kbBVXZ4d",
  "key31": "5voL2KyH8kRxhtYvvbaJ1fnwBhqcbdqnzGZ2xAaGVHwNQ6k4pPPtPU6vHs7NZKUKfHvoGYQyXTVZgo5DGddEfv1k",
  "key32": "2fAKXEAH3he9BBsJxuobdFgod6jqzddNN2fp99jn4LAckeqELuUTkvq2XEGHXyMCFaPbfdD87fm3WD5CDksDMvNV",
  "key33": "3AY4Tf9X7p4uUscdqmFaSwwTXeckhXbiafYPq8DdXcRYfeBjKNmufNTrxF3pUfHoZbEouEDxmVN4rzYbAJiYQT17",
  "key34": "3vyoRJ2tiDKdUwc8KwiBPXXZKs8cfTVK1pFsc8ExfZPTz4SMmoaMjc66aDdE6ELFJrMZUgYjxzmZrLNUYtNatJQr",
  "key35": "3XNSz1o5bWpPwKxabAV4TJLZN3oFKj4vmWP1KgiN3EP6tTYwqajk4BV8B9nhJHZt4opRYEcMKV5qZkAquzyBEUBq",
  "key36": "4pXa7YzuzMHi6Fmvy1p4rL2sYminofuf1teKRXd46NdTWZBL35AVTazAEsg2s11crpvNCmeUwYADtGTZFqQrnELB"
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
