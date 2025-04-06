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
    "3BAmbqGkCBnotuVt9icRgaP1TA229DFB4swxMBwjmzHj8XbaeSv5pCCrfVGHwfhwyVt5MVoqspHB9QnCXFQ588dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15N1dC3aMFxXtQFoLm7jj4VJ9JcRYAaqi6Pxzk5izqULMiiRdu3DuSgWjzxBF2TmTSJyM1LmK9zYY8Mi4JS3aCy",
  "key1": "4sNCtU1hYSvHsw5g2na3XJ7iov7wqq4MraZNUWQ3kMwXQvJi745Knz3FA9i3UxdBPT8drxgpwNjxBaRK5A4cir1b",
  "key2": "4CH3Px7roqNwDZZqXCk26Uzk4ktTGiwFuVA44nFBNeAAPuQ263ejaAQSo5qAvh4jLyoQqFPbzriLm3CbNLrQf1Uw",
  "key3": "5jZETUbyzk2YLBcZyAsZLw25QZuE8SN3Aam5w5aTL1p2gcWruuDSyr2AmXYDVZK6ey9LMfXQTkzcrd1aTWi48i2",
  "key4": "5m38nisAUxEusVLEUGnrtYzLJo9kquQjQPsACVVGxDoWchogLLrw4zoGytBqC1fq319ZhmfXEvdiwyQhEQTqDb4h",
  "key5": "46pCRztrUBRG8WcgjuwFWPokxNwYLBonwtoKxxbAhwcibU1QnUy3qwMzZXMr8rvWbXTfWJEwzhGVJPAsojH27a5r",
  "key6": "zLN8gRcb8NLA6NEeXWRWKLfFnzFGPgLNZ6STh52XSPJwSPspRtNohHjHWcEiJVV672cn1t9odTgfjC3iGUxTetw",
  "key7": "2s34YUcz9ndR4t8d6M6QUPtwTnXB1RQDp1MzPfbgwZQPbQe2hGeQEqNi7uZiMkK471RCGHQSZKvFzAozHhaLDXcq",
  "key8": "34emaVHZhUnoz7ewiigtMZdReo6nbEAhHYQCZtdcqzgVXNjn7K3fLXSZQ6EJjZBHpU8a6CdGyLtV6QwQZBPMB5an",
  "key9": "5JWjThdiJGaPtzWLnHQEjnyEExx9yEpshq3nUYB9tyf8GauqrqxcjwNPYaNUAAdiYW3E2AG8KE84K2i3QpUg6VDc",
  "key10": "KXdhahC5vn9hRLMFLyZNSZZKhL6tX3CYpsboqRCSJf9josJURk5zh4CCW1yVCNMZjyfJu18fQCGMirtMUevaVEt",
  "key11": "2qwMm8CSxuR7USD8wgsASzLjiSRr6AZn35obi5ddfwY195RBCc2pjJdYreRdydjoQn3dKn5koSos5hKAz1PSeAk4",
  "key12": "2z8jvx56W6C2VBuNadmUpf6yJvm9ETWPKmmgnHZ5ye6AhdESmXvammgZmSwjew9QkRr7pLGLheTM7BUyNJM9B7eY",
  "key13": "4cmcmFPvx23r5q6VigAR6XB1AawXMNDChLAabGfccjLNAWyBjg1NXCVNTXfp7ywSwY8F5HT9gKArVb2SEUCFNxzd",
  "key14": "3dqSaCQheR9PbtLGYPJd2RqrQzq4nPFHFhCbozQvnTGAvFw65BwsrEHgN38Zyrs1r64mrp7Zm8AcKN1n2gnBQcGF",
  "key15": "5Qf9MEmNTTJBtLj7hVKPZjnAo7m5kxA5FPreYbWBNvan7GK6eqRmQpi2KLaptJUR7WyBzmX87c8B34hZ7hCz54HU",
  "key16": "d5G4qDMbiPnzALBsVLxsmcvQj2dyr8PiZ8JW1Bt7XYL9uE7xnjZ7Fm8YwigjFUyU3E1KSsEWDF3NnVCX48h6jTa",
  "key17": "2iAKBZe8PZqFPznqj7oAxNLqFzgYoue1Q9kgM5BETQQFcbjpcKxg7DLezGBJggs3A4ZuHfEuKU4gbH2zUMfwVMVC",
  "key18": "2KFn7Bk3c4byc2MLazY6QEK6HDA1wBTWkGueFnrGxK6HZvmqeD4ig2u9gngoFM6q8554Y3hGzpV2nt2NP5v1dqzx",
  "key19": "4SkWSrGxEvo5JXmPf1ae3AXYtYSPo72jTp6HApC1gnmYAyjvLNrgSKHMuZhc9GVwbeTb7YBVbXQp8zw8Z2Ze9pB2",
  "key20": "JM2cvJZUXrqacCkTiyuTi3mrH3gvyMy34t58H8LLzS6KSqa5EBr7351AS8iBYLW2v42yeHm8RKFmvEi3xk2qBvV",
  "key21": "2yd3YxGJDFbqdzCzwfnYxqz3qCyPxDxqA58BiTSTQc1XF5qxFidLa78D71ZMMySBtv6DtwBpLCx8AeD51MmApZEe",
  "key22": "t63P3kRbbkysDmWjHB1brjaFqTZjwM4V6mcKRTs9vdtM9YSS9nQBYVpetryG99mdswWVXMdcLStwo8MxjNFozPX",
  "key23": "21ZMq2rSSnLcMS7Acc17FXc5FgYkUvdHCvpkTrJk9GsiqGyHs4KbGJeYUmBujFCAZtH22TfnfJ3VhQAVti9xDubc",
  "key24": "4MzBLVYkfdqTkkhseKqbS4NY8XDDZsyiS4d6A3QYiqG3cGUonf155CM3cxzh7cdprKQh8zozcHRTHQVUyicCUyt2",
  "key25": "4iBayqTaAEpLscPNimgNLnNNsrCUA7iR2bkfianYviemLKswdj99ADJxu1LDa4pp4qkM4PPUMynUqU1agA5aBLWG",
  "key26": "5826RHnSrotQ5416PDEo259iFtPNJfjvezhRpmhaWMKtNuKgrcs9bF7ZFjBnV2nM5VZQS269WCoARNwCGjzZhUsD",
  "key27": "4FP3nJV83vqGwdjC5M8gVqVJVs6TD7ARTzNxke41w4eP5HdkDZiLvRGfasciPi2dXxyRy9zTrR9gBxJBxMbt7Cab"
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
