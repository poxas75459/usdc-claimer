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
    "5xSPFqqesgaAtygwsTDmAtytj4tZH8XCJGcUL5oxjqiyraMyWqLJbqEJGACgmrYPBXFEnpZh4xDhSoaBbp8DdMjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzEJRHRYyP3i8CD3voQhoxZnWjE6wPdHM62xsDqPjS2GtfzFKNnE1czbqhPqR21RZBhCMrkvFej2UUJLSRPnYbJ",
  "key1": "2yqXzZXCwmPTwrwNrdmU2QMCQQm5um2dajGSmW1yYNvdAV36kY3MKpve92LSeqQfJFjf3qBBdTmhrtN8UPZ73jhz",
  "key2": "2YFSt4sSPHjC29st1NTELzKJxcCuWV8BfWc7c52UmjNyhU3wNJ9ndax9QQgJiPru1rw4t7pwTb43FmEh1TjDWepT",
  "key3": "4DDobYEiDXEUG8mpowqjBAtbVT9Aoyc6diAg2q8yeZPHtNSWbBpJQWR2QkdHut1dZ6xK2RNFR1TF7JBLXzQc7vXA",
  "key4": "5UDCWDhNHJ2JF2GVCXsoUVyt53ydNdd3qrxn8xzs2HZkdsyuJM2Y6hfr9XcnwRxQHri5cjNYeoUjVhYqJ2H81YrQ",
  "key5": "5mKpjnMLukZApGVtFcLoipzecPUhx6r4ujGFxuirMwMbWXjhRZ3Knw1Byndadsc38Dst9anXLnReLJJdWVkoEyMz",
  "key6": "g2vUoxjDZji5G3YdNufetVG6p9nb5rMgMcNRBzW5gHAoaHa4tJ1VXdw8gfbyYeBEBs5x1SArnrtrEWn6DtGzQWq",
  "key7": "dLMZ2uoxvm7tqEVqmsf7PiS57G7u38FRHXo4rEj62wFT6EHfLtsdbmUpx7X4TM3oUy4VwVBqoXuLdB7HhSNjmyt",
  "key8": "2dgVjc6zT5GU6puDjBuhT65DNeHLRz4KWSBnmtvi7Qvjzc1fNqhgLcwWrHXgPp9FUMswLcmDGufNVkBXrVsSh72A",
  "key9": "41qM4nL1X4JKBfTPACDdCfG2UtLLvLaMgF9zQBG5F4REGrjoguPVakTNpAw9L9jq75gVHWjJNmuPPzyTrjt6a7ae",
  "key10": "5EJ1tBZPZhi3TWQypYEhBMEy8i5x8t97tXNXMFVVusfULsdeoBKxw2CrjqxnQzcGK5saeJQEkWp674TYtJwZaUBy",
  "key11": "TSkP72GT7Mbt4C9GzTrZbW8FiPWnxbTw5dVyZiKjAYQrhoSJktnKMCqJoxK5HmprEHaerWD5yZPZ7S1BFkxTxLC",
  "key12": "3BHUQALKYsaifkL1GJbxiAFP4dJ4EGdMEvFRYXJCKyZ3fdJUNKGTwh6mAbjL4GCTXMPwqY1FbRTWtY1Be9QbqXoe",
  "key13": "pBgCscgAcHDPrDcAce138Dm3hzDLJidyYmHBbq6aQvvWeoxM5BujsuKLcLwm8KkEEWtsrcyW5mvXic3Ew9SGMAi",
  "key14": "5bmw2KKBE6zDcBHpsHSPTQ6fd21d33nxReK3hfD8WHKmoJ6H4XXTnMFdVYcJfMiGUC8TCYy8X1XFXvbSeH9BF5Bj",
  "key15": "4yPamui9Hpv7R3oKhdThC4wZqLh9ZxPoADnCNza3itdmepHZmzjTxkxxMyKHLfsQjWnBaxjx9r5LHj9kXWkiFUbL",
  "key16": "3Kg8xg5eJShPocVVBsbFhUxHSrJSrFEKMS7E3ELpTLRGMgemhVgbRVnvSZKPNLLfzpJMMnkEuwpLb7fX8ebec5mJ",
  "key17": "tfKEVoA7wErAScR3cLZmtJBzQjTmy6vUXUJ2ZZXgXt4qNP3oQ5HMWy2UTQHLPesz5hxTcCFxAuzyvCUYkB5tWcD",
  "key18": "3czhsPA7qndwaGtV8JaD78df4Y5oVVefSJLTdnJzEQ6WTcfQnB2U953s7ZvxVTbJXBhBqmMCDSxadjZfDCdP3mKL",
  "key19": "2yyGPTmzVgyg1wZkZFHGrDjy6DguyzXqFBxnya67rAr9bxDSRxemexfja8dosmSPyFFXRWiQyooYGiYmauwB9Gmb",
  "key20": "3UuUGmcUDvqHrT93S4bpje7cY2JHyLkWW2EvHzRy6ohZWNLPRR1fPn2XQ728mnRV8kf9NeiRnF8AGuvb1pzjekor",
  "key21": "248oBL9YCdH67GbVHeBqxARGYGdTRAv5Ff84uzaFSVyAe4iuNTeCXsNYqaqU67FUajNsuBigb7YGxv8RShSifGxE",
  "key22": "5Fb2tHJ5iqSoY6eSJn7ia5CZGetQywJaD8N5s9tXP5jt3rG4Ewu7W2EJu9LYVBfyfFuATpzhriFGoFtY5ays7R7T",
  "key23": "5ZrM2C1zrfo8rhbpvmQvcRLHowjT1HzBrrRUA1kznQbZ28tnoACh8NMyq9bPA4YzEv4TAhxbHQ43D514wGGcZQkS",
  "key24": "4KCbtyFkc4vQaCLvAamn8F3pdeCkGPeKy3Vr5PSX5e9uGnqoqmmHLppRPfA4KcJyMzmgEBqnuFeQRKYzqjWmBVi7",
  "key25": "437S1qro6epRgMLBMs9b4yPH3eyGEfasR3YnoEWQGfVArdYkhvVBZ1Kn1hnfMwxhLxvaQZRNsvPJbaeE2ezZd6mq",
  "key26": "4hpTfB8iHjD5pnrU7mw8FSFi8cF4VDDhgTa3k4UuRunwLezJx2RbsSJSRq22VNPgHQBL5aXV2pviAagwNWfoVUkP"
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
