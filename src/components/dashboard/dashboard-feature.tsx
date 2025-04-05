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
    "2wic3dNzyyCCs7i1kbERdSvrHYqECJLgm5tVgcDcKGyreXCjMKSvTmxREsH4bWqy9Z9aZAeju9ozDkkfDvzS4ikf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8ZJcDkBQzQuLE79sNMzqgAhvkgEV8dWYikv37SmEudCx4bgRyvNWnLLBR4sGTb9kuHnkdj2qSoyr4VPth4dhaP",
  "key1": "2Au8oMyZKZv7EnfPHo36JYGRpcb4erxMp6X7Zemmhrsn2XcYEtVTEdVq7VtccpTPXUdKUCNwSsm5s8roCsorXc5X",
  "key2": "2Rov8F1df6z7nFJsAAQb4t7HkjwRQA3sHJR2dP5Gm4WxjCqkR6x5SQuGT8UR28Xyws3hTXqxnr5Wjr4Q8LuVFwq6",
  "key3": "4KcCaohS6Etid8BmR7kzrP9RVd5qUwxbLaKL2W94yVw4CLb1ZcKcuYuTp8o8NtCh5ipeQQ9sNc14RXLHwALMXqJL",
  "key4": "4KGcZqNQembtaQgiQuP23cepxZeT9GcUMxQpoBXuGyMb2k37CrxwTxYh3TwM9nSytw6paQtm8Z4yP2gFhNcNVGYk",
  "key5": "5TCRCyp4aD3EMFa9W7fjdcrDEuxyb6NRj8yGFGgx855Rppx1gYjE4DNimF6p1XfoyMyMwUEcyN3SFK3CeE3gEVRd",
  "key6": "43ABNH9PD5qCwwG8pSYXLCbXqqiJVBkt82AhjjcuwLcrY7QVyeRyX5yeYuVtaVjQsU3S8Dgb8w83YH73oW47qQYq",
  "key7": "2eWt88JZZwAtvSthJ928tpRvHLgzfWA6KjFXBmh88ULwt9MzYF9KzUNbg8PwTxqnw8zHogW2wzVUErKHYEJ5sPui",
  "key8": "2yqSnZhd7kUbFmtYUv7He8RnzaJwbHN15douFkUumdEfsj1mBnukED5SGnhYg2TWgjMgcmt9yAjChAiDuW7wKUjT",
  "key9": "5hLhi32yzjgGqjQvLa9DFJYT5WdWdZ3JLAYL7suZSKuvL9AHodZbWpyUeu9Q8W5CnWDYp9M1Du8n46rfNZsAma1R",
  "key10": "6NnnQxpcfAnvZdNuZRdeaUeiRxekkvAdMxcjEFmX6adwr5wZnkjmxvyo1VamygTseDBmbL5tpYnFoHuambRV32f",
  "key11": "4U5jMNTH1tkNUpKArEEYRMQiGVkRFGMczdRujzeZS76HzwNrHjihbRgijAAxpFS7RxRrLRcubTm45kRzE4TFVwAz",
  "key12": "4mnmEvCxC2haYrmwiK4qnt8QyVimbxscYDE1La2hySgVDrGLpeZQX9GMWtK7sXt8vokRoQvVFavdCsbB7mEyw9RR",
  "key13": "4WDqBeewHgYaXkGF6qWWbKFYymdnuDkY8ueiWuse8AikwMaXu1T3wMdjjvW4v2LL3HY44oiywjVMhmg63nnYUVDK",
  "key14": "4Gnqmt4VG8pjb59RxSMNrDJKPooo4cEcvuUP74VfQXA1iCepHHJ9Pa1RSTronhWMHRVn4F1M8YiaDq1rfaSJmD9Q",
  "key15": "54osiSFhbYkMisJwS1zsk4hQ3yVBNr1hwNETUWh1yuoPTgnRX2Fqp9wVnHwF3geYxTHYV11oRnxWx2Nzxcns9pkm",
  "key16": "3ZL7eVZkmghgJKERCXBxNYe343FMtMqQRee4YfZXWZDpY9P38jMz6zkdczimAQfo45aYcz65oX5ZSmWiaFt4Ki3k",
  "key17": "5EisV3SMPUtKDNceDWM9PnekKZcRTfEiBnrm1jGKMWuQBJjyM8zjJkuwAJngDY6kXtoVRH5iNj4ZQp86zpDg15qP",
  "key18": "5tDSpbMG6f691TY6N6CZFFuMppLbV4meZUiqbAuaZM32H4TLFs5bZvFcQoUAe5M2e32gkvzEw3ui1D46hiLfPYDJ",
  "key19": "5PSwyTYQmVMVR38iwc1YunvJEhAEWDAtwPEfEc7iK2V7ksy27hZwy9rGttd4jPryV7bqUCWHeRfyFFmrSEF6SSBJ",
  "key20": "NmoEhfVp3b6EBA6ChDfAkaNpQJBFUQaXb3vzC7Tq5KPj3DsZVEj8fgwoSf7JvMrUfVHxzJ77VT6ZU8EENMqkasW",
  "key21": "t7FhAQ9aFR1iBaGPtso7eY7Z7zTZfkMiif7ptwouQKdFGm4qWvYucs4uTTrfxUwR7NXCACYw8ZrobUkrgST5CVD",
  "key22": "cxbSp9BrAinz1t3kLvKPCGJdY6TbWx3bfAYbQjBtJ4N29WZeyuH3cPv4f18HCpZXRtdan88mTJQYN3ukF3uwt4Z",
  "key23": "2fo22tSrEjPFfZrr9N9WCmtbpXt99oSEczc6z3TayUkxSPDBsxnuX6UULqSrfCNUGk6s9X5uE9tcKVMvudYNqnxr",
  "key24": "27RhABiA8JPEeNThrDoyxNEPvHG9Qx821awg1nh2vYZkmW2e1o8Zkv39Dc3LtrkUkpmAMyAep81tFexiRgQVQcdB"
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
