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
    "DC92a1Wiv5WmehhjEp9hQnB3CYfnAAgyhv41EDSJPrye8QpZsik34bY29XxhmFUBtVyyYV2nWtt3t7CJzY2jQoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ax83bF74AVzpoSUg4cyVeF3XHczX2Dt5Rg7aneWqPo3PQNm2edYx2ML7fcvDUptBT1cVhpjvoBYBPdXPoyJZhsU",
  "key1": "5AbnbvKcu9bGHGzpz8nroLg7ULDGi5mHiEUESwVfVEjnBwUek58iT6fN55S88Fip2rFGEzBBbuturGoywFm4wG7t",
  "key2": "4m8MFNcHCCmH3vQGcj8gZwx4R4RC4vMmCkrR4VgMtV7at5bUhoCsL3Yu3JfMhTLMk78B9xWupasyrKVAKtvZ6Axh",
  "key3": "5kM5x6NrNgwvWmH2Ct48L3XRQH1w1EbNrcpawvEVJy4uC19JorFBWTSHMCceqEfhA8f1C56ANj5skdPhaUAUMup6",
  "key4": "4j5bvpoPz1RewZosW7XcUKCFQXf4f992uKUQu8f5t5mdv9dTYqU6APy3dRjw76YKWCCNu9xvwZC2djB8MBjLaY2E",
  "key5": "64pmeP5aTdtZx8yWTD7n6cTfpMcbUUQ74uXWmXUvk3XuTkS4QNniB19XTDKd5a5usB7bRcLVPWjpKioU1pZwXQ6C",
  "key6": "568Y8dnEhYVBHi6DWRtSTRAaDmZe7xsWebUbgwAW4vPWyE7Xp7ouDPQTbYXFDkpuk6AjbFDNdDNsP9TD8KCU2FgA",
  "key7": "4YNMMGaX6zxWP5e7A4FUUwSKKpwr6m5wqqEpw1RYNkjKC69FiJAehG7QZykAgoSLM8w46rq6cPAehRGWLCTwG7fW",
  "key8": "PbJ3kc1SFZ2sQ3CQf67svk54S98v4QfH4LyDYiVoQxAvbsBZmN3TRcYqL5kczkgzL5Lztkc2z8dQysSsTJTB17y",
  "key9": "2KoQwxPX2JDRSQS7Y9yLLFNUKMz17a5cnSHdeB81nhPR2Qm7eTxPfWt31KL5XiDAZc2wBEGyohzXUEXYtufXTbrf",
  "key10": "4D33LDzUQHBF7XZarSvmxsGZk4P9PLubzqQepJKnLgKjBU4Bbp576vtf6H3Ly5mJzDLjULQeoAeq7y8xmdYTEfXK",
  "key11": "5H2tRHGhigyiod2U5rWcecQi4eT3y8bqhYzJP5Q2mBv81noa7jt9jfSMq9NCNDQQse892hhSeBVZe6hXzAFV9Rnq",
  "key12": "3JqSJx85NGW5EUDXTrefAjrisGK4A9r7AKoWm2DLJQSLqiCzHQRtJ1brKPtsoGqj3WtHfdf9cEHBgJnrGS84s1hV",
  "key13": "2ggrikzdujZxuZj41aM69gcX7nU653CF6gMLs6toEowsLjDtUzhMjK1AcCWcejRWFmiPPk1YivURShr12QPyPC8u",
  "key14": "4rx4QZ4X4wvVTgAVbXXHw2Y2ienYX38S9CV6ak3aB1b9odKt8doFUoHTHwxvKGgi862GfMLRDWRwrPSJ97PyiGmL",
  "key15": "5PDT621hdzdWpWyhjKfjTYPiz1zhooYZrFB458uufKkiDyUk1KfshWyX1qk4fPJGcXdawfE9FG6fkYdRsHvGNRqY",
  "key16": "4uRg8hRLrA19fsmLRJa3saBqE1dUCAVd5rcWkfuqg5QNgdCfTNpho41wJJ1iemNnLnBc4q67aMGuq6Efxe9eLgUs",
  "key17": "51n24oKWxp7fqCik7Fv7BxRCwdTqpBomhZTcJaY3U9jGvaCNKsmRQCg2Mjt8oFPXvignEbrYpqTeaYYVH62bGyrf",
  "key18": "7TeHD7p9G1VgpEkF3meGEGM3SiiESwEekkhSPRExgUrcXevgW3K5zM3crz9sYvVdC3DRKeKyd6XFwU8LkzNSyUZ",
  "key19": "4ZwnAXQdcuDczpUfbQNe39aqCJtttSfvg7ATR3Y7YEt2bMFx2TpN4t15mf26kQwtFEU4HVt97a4N3gMfvRenFo6n",
  "key20": "4cF9M5vo8GMTLU7NssHf6KRvxBdmuN44n2yXHzh4WD9iHX4U9Dg3HfMsDCMJobxSpRERoZTCibhmqhysrDjHD6cF",
  "key21": "2QKR82rrJqnW5VqUcWcGcobhmxdAnNuELTtKZJTMj2WzQs9WBhHFdDh6YEqtqryhRnfkreokZY9nMUwGUkGzQmn",
  "key22": "5R3YsLRM6dkJyHB6YXvep9nmqicnRn9DvgmsVeVJuMYTK3VMtyRxXXXGX2BcMQH6YeeNhTK8hxQZRk5xKEiC3GQF",
  "key23": "9BfK5nc1wREPxGu8LtJkBpupQB3YBTzBqr4pj98RUPKsWTHr4h59yEVemaTWmsn4ag7D9hs8rPsyrhHKRqNTS6Y",
  "key24": "36QGQB4JqK6M1g3q88dr5EyB4nuA26C8hZM6ujaVaANMpcPzCDFBiLShVj3wzgegFPhRRBrMWfkKSbtNUuKuhttW",
  "key25": "3XuxnNTiz8N51w99Tfg9C2LR5vp4tWvWNritepZ8rre4fMqA5pFG3jGoTx7s85EQuxaWzsbTM9PJjg8GcVt1GEMT",
  "key26": "2h82Yk2H8B5mV6144SdYtjhNpCoUHB8gXxvcJrcEnYfWSxAGViuFSpKm5G931gJ4uvG76oAep2B1SLexUEsZF5RH",
  "key27": "4Ky9ESm4B3hoG9fYTWSnLPP5EzYP9guWSQMu9wevVDF8AySK3YKoyQaXr53wfcBbKSBqivFxtemA2JnrS1Mt3bw1",
  "key28": "3KzsvhKA39rMFBKooFjgQyqCUBrVeEs2nP1oR7kKd8E6LhzpmBf8SWD5sDq84i5dxrCESD2PT7sym7rJfpBqqM1b",
  "key29": "5dSgcTTGkyk4zCXJjakh6W7nULGUGUxrcECC1hGT7JD3fGQLsgwazXvJcWdMkj98RNEVjjvRRUfFhv5q9y373uhe",
  "key30": "34buY8ACyvAve6Drifs8DTQtrVGzs15wLZsZzVDpQHYK3HhmRBzX5776D3Rf8E9WBAJKhnZuBsPQJibsXHNQYvzq",
  "key31": "X1zXVmgYWzEkBcHmjvyD1iCSqEVigCyZ7XUmXRBMYAL1US56XJgoxvWPsF4SPfS4oZ9nEZN8eAVPtjYtk6U3pQs",
  "key32": "4eHTs9SarZX4oMncFkvZJjwH42LMT779JqKJCgq959TyCPHd1pmGXPEuFcQbXs3e31Vix714GSgcJctBr98kteeP",
  "key33": "32diccGhMRQbYKCzJTFKyKk59RdfcAf8LHaGjb7Zs9uQ8GS1sEa1VgTvd35mWnmKNujaocVhTAN5oAT8FaRZBPkU"
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
