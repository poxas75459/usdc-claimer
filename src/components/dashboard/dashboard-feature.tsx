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
    "44xXAx1oqzPCXRMcAGTYyuW71CEJw4fiRWNaKMU38FbRYBrwumac5x3meAg2LKZFgZYw8vQovut1epmPomHeVHZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yBMSBBkvYWLwFnq6cYWzu9tPSrBRjaZKUV8aa4Z3AA1rCvvzhdcWh2fPPc9E57EdEA35D5Xtk5DZ4D22scP82ts",
  "key1": "2uE3TFJ6Eq5nXm1QhQQoV5EF3JrSn1o55KTuBqxRsSfaJnpJqgh2U2LbULeKacEWMa4LJfgVDPL4S2j4QxUo93se",
  "key2": "5PA9kDACQwbue9vyPw6TkadubeQWPZ9LUmjBm3VCRJ3hbrNe42EsGKAduvKJBgXiXUg3fajQbHTnX4RLfQ25fowr",
  "key3": "2GfVRKb5W8aqaShhBWkPcudpod7NsP8qPEE924bUmdBayf29A2opD54tyirjpag5jWiAYSbgE3eqG5Ehwz4aAGq9",
  "key4": "wCkv9y7d9xn2EZGFQBuBw7bFTKD3THRayMHqnfZnm28wWWBAE26svPQqmWjv2TLgev9mcn4DY3XS9HFkc3TxdH8",
  "key5": "4TeLRMQ1SviXbHoYhQYQEQD6nYPvytcoFWpwLgqRWDdyu6i1Pz2L6VhdP2gFEyypAGQNdMsjYmFzhhzLaMa7V2Wj",
  "key6": "5mLY1mg3Mh5VaWgBrUi7B94pWF8K3VLkMxytXvxj7kEb2nghtvJZYgvhWCDnKzV1PiUpRitB3N2746k8qBBgVepB",
  "key7": "5qdX5UhycBH8JMWnEpXXyUC2kfmAEASFxhtAArdui3F8UUM6xGRBZ8RK9uvpC4tqnUCBnUW3T3pRgrpoq9WMRE7Y",
  "key8": "5Gtybw1PRwTtKLtzHFiNPj9bw1cY3XgrvzdjJ5rS6qstvMKqbaRw7SzHVJUmXwNY6qXU594mFMKSKhGhg9WrxfXt",
  "key9": "27kuU4uuGFSXPBJtUKKz6hhcDDEXUj34NG4LRUaVTGFrz7DYaNGrrso15yTGXXex7nWgYraDuSCgacA5ihqnUZux",
  "key10": "51b5gVpFdh8pSjkSqJMoMCmdbbsnpApZ6tUW6uRxBQMVpwtxhJJiLTJc95zde4MvWx19M2x9Jj9V1ti2aJ7vTLE6",
  "key11": "3PDAmpoUmzEKuaL2edY8e95GcJutXuYRfpmaJtDfXaYG53tGY19KYTz62dQ7A1zyqyECdB8cpJbNhKYGa3Uw7DoA",
  "key12": "34NnKK3yNnoDdkfzpuD3cgSJeVGuo5bMjA99XtD1Ut1fAihX9gyzeugB5wvoe3ZNtkhgFvH2W9vca5kCP5ExNZTP",
  "key13": "3Xtk6pCFHJrJ1Xkd9Qfc5St75TQau2u8eseuHxKTkCU37PaBNApxwDGQfVEcZihzGLZEcDs8A8GTEjgpNRmCG7HJ",
  "key14": "3TmS7gcZdzw6KXejUU8EBjZFMfcTkSTWB8o7GrhK2bTZLyhiz92XB2pb5ixiPB9YHLhYFDvu4F7QUvcqM8XXW9bo",
  "key15": "3r2qCFzgKvnLhQkejpDdAMDmP97w1yWftxDPiUmw3MTcmU1WwvVmDY9FhVm9GLdBqnGxnKzpWy58E6Mm3fJvR1mK",
  "key16": "2BR6id761BijndCF7TzHF7aKszjz3e4hLqEvJoC6CnaZ9UBZgPKtr1SMA2bKpBvehEovzFndTo5rLaxPwsLkiZFG",
  "key17": "4TFntJxU4UJaXZVyhhRkzHB9WCbUwWE2WRRiev3cp9muEJXfohFMu4soqZUeajmiuujr3AHrTBJWgDvzD6YFHw1i",
  "key18": "X7aVVfBhVBTzydsbHj9bQSdoZwTczt4GFdZFN1rsAjPBHzktgHqcrTqr5nhSfKun74aRE1GriJEn33CNPQecvs5",
  "key19": "25VCCKETCsLPnEcUmZ6JxvsweSB8XaGCCNhz6KxetrqWXGuB8L6jcJ4EJUoBhSBrCd8LHf5y3WvibzbFJkeAiSXi",
  "key20": "LPAM94vr4CigBqphA5BGhXqJ4iC3nqxYm5Cp4WQB5PvFDWhK6pi1sJ7qUGJsQRGoE4b6uBtxEjEhtyQrZ2sY2td",
  "key21": "4midc4D8tFoY9pXxKUJWUNYRhLx9vDM9Q6DebLkepEbCMW7Z5pJE5d8HQcq4U7QPHC3WzQ4Ux3Ab77hFvrv89pWa",
  "key22": "3v3Vvh1vu4ELEb7pf5wy35kCWsG8oXe4MQP5cXxZajr2zjkGToEXvA6imiBxFTtP4jSzk4i3TyWof7uBJGu3gkpL",
  "key23": "23bA4TApcs1jqgcQkGimJxohaYfEwBRKY5SN1MdqTqkafJ1Vna3nNVUGv58KwRg3ZzqAezHTJbUqjPdkCCVgG1ys",
  "key24": "AoMtjviyxgv9Cv5kYtniZfBHvKQ2CdgSX7s5qmNJS7LD7QzGJPMcnbkDuhc6Vvmwfxbj1zxhZLgcgCgJadbfSDM"
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
