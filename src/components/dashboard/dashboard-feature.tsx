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
    "5s4qaPjCQVb7d6dfGt6gkGg8vKU9rkHKZaC5xDEzvvnuNdsuU4ENFH7CYBrtrSbCnZmo68jNptihTMy1kxpgGPaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EtsRmRLtTLiFTkzjyWNn6f9uMipAx95AeJ2gU2GT2cRwWdPd7chkWtgAhYmyVMAqRyCRLYJxTGntRMYM74tHSAw",
  "key1": "wshCrF7gu81E7cH7AFqZLoDvC9QzDc7v4fwsSE5BnvyEW9aqSg9Ns6guwtYmpz9N1rEKy4wgHyigBPDmAYGmYDt",
  "key2": "43qRE1TTRg9ZJmMbSR3SbkBbD84ntRZZH8ymMuHf6J3MsuNHvXc1mczAhSN6JTkZy2qffbAjByShFzGLB54v2he7",
  "key3": "5kFDo2ai21S9kBSsZgV6eZavDsnuYBcztTwaWwVmRGTSn4FFWMQE7pD7U4Fg82YKW4DZoYwMnak6kNJSGMkbdZ7E",
  "key4": "29s96Mk1sq6LuawmKjbgVJ64nWTatxdb34Vod3jhfpxwk3Q4sbWtZZ7fgd7kjUqF3mkkh73rrkyPkL2braG7Q67v",
  "key5": "4bdvVSv95BWrx13Vc4TLqTGNmZCkuAsnqZE3m41s2UuFKmGN2aNpqtQt1wCTLx7AZjsNUkPDep8yLauDUdqsnaKo",
  "key6": "26DdJ7arGCZ2DWPAjugHPZmrw9Sqe9r8MorE2jxv4xiG5oepUhV13JGxgJLGgUaXUEZ9UMjYRHq8TobfzxhWR4Za",
  "key7": "5EucqwyX1fp8m9Tne3Nk9uZp6jZSrxhr4R46mR8W1T7hjmZFxgknzhrzsUutTQUG3Q2pb5utYKkkjB43cvUak1Ub",
  "key8": "2UEwP6DwHYJKbVPJN5DpwututrfmEtJBd7ny8A4ASvmigMWoyDyUD4De2NSs2m2vygx6bonwF1rMyUuTX2MJfSqo",
  "key9": "aHjetSxYipcMvZd2ZiR9nKqSmWTDuPiDxizsE8x4u8b3tndEWjcLJ5FwEpLyEsNMYsMwThx2HkbSjsUzpA6mXPW",
  "key10": "2sH6FmmPSNQVhSGGxSYWEpz6fiC1xBuGGsdWZztkQdrkhTvd4rBPe4kpC8TwpUuom93wyYaCLkdsunZbHQGa7bc1",
  "key11": "3Ww7r7hvjUaPE6TupX3NhE5AHKxmuk9pFuMXVXibf32zYoo5S1oDdNWSgGZVbvLaSrpdFGXsE144u2d7UXSKSRuM",
  "key12": "79uWwqfk2Nzfd2y6kLwtdrkojbihBUiEAn6xNUrFsysreCJaYvFqW93Ks2eLjpPWb25mk3LrB7uc7cyDAhDWjoq",
  "key13": "KbzcjpLpa4ipC7RU66HJ85e8vTBiaEdFWmqWwhjRdYWNcWBf5DRzHZkf2QKheXKHBSb6gcX8eudRmHJ4xu4sfQZ",
  "key14": "kMdsYEyTX5PR64hhjRHeFW61CcBQCNLAH3u18cPyQ61RDMpMwiG2jUAQZMq2r5k6Fw8n8d967Jxomrf4SBMw63U",
  "key15": "UzdGXu1QEXZbRMruf8Kw7tPHwzdWAVdy7GkYfXgKvRkNvYCmM6Nv7xcb1JVxBznvuVFKK4CF4nG9vthkc7fJQgw",
  "key16": "MRUmuKtACNCLAJjTxQJdTQW7NiZYWDHGSMqNM4F9BYskY7BBTSUf2HYbxrHZnszEUEAG5ToTLTo6mhpwie3PLss",
  "key17": "454J4DaDrLstELrLyhEFpC2NzWT8upC9UPvd5rypCpVHZX7Kd7pguyDAExQvgbDfgJkVEAgcasCx4yEskxvbskSi",
  "key18": "538Y71DmqXKPk7WtwWbyYDwQbiRX8mf5r3TJFQkoRgpju2mDM9KjddcvfFPJvRbE9h6hnpptAj8Aebwav4FCd62W",
  "key19": "3d9FYtHcUjM4VagGMxfiWqEcg9tpmf5HMRWBkLsraBQvaDWMB8BQUq8BRS9Y7x7tC7Cvy7opUrX27wB4cv8szViK",
  "key20": "5yF19y6k2CaukywcDxo4TfHPe3P6pvzJZ2WRH14D6DnXvirHi6Fg6k9wQgZsYk4gK3mds9iwYZ3Xysi8RWnKFWSD",
  "key21": "2Hc3Wrqsxo1JbmHi2EGGE1S7wRYHgppSMayb4AE26V6asSndWu68MAMmEiScagBeobzVzpGumw8UvM8S4BCQ7v1R",
  "key22": "62nT9XtJdph8EWSMvYdcbAVQfsxRqRk9GduTj6oYXFbjSKo8fb8fBRB65DTSVpAmHWEZDY5xraYJ3ddjLaF3CTwE",
  "key23": "386xSECL2TzV3NPVkJLbMudvzm8mBGUcn3c6r2Dxe2e4U4Y6neqeTEpHJKmn3qdi21rBu1npHfr1NEFHCTtPySGN",
  "key24": "5krxWSoBqHXeb85D2Vy1bgYJ3Qw28nKwXDgYJHptdLnVNhqH3AuKYWpzXxPqLRGwY2HhzEBHib9oHiMsieNRfF8Z",
  "key25": "55Kb7vHX9Ap6sG9XNhvtsimmXg7y5B5Ud5shdFH5bY9aieaQgFgALp6KWqbTT9txK9zyNqzzVhS7T11tXW9fLp48",
  "key26": "2yMkipMftwS14SFrtogCxb9TgZK94MiKSZ7u89mkja2rZV5k8pNj6jZqeBuEzd3b9sXomaYA2uas8VgcqD32iAQD",
  "key27": "5BFmwy6mH1SCWXmaCnQA8nGGPAARMhgsFydtZ7nmWkjm88mGV3YqYwzLTnE8pCWm88UtTmbCxC62gfRo9jT1A6if",
  "key28": "2u4cycbts3nZtYi7SMb16nTTkVSL7oH7YZCbHxowZbghyfHGcwFcAwGDbK8jp8iHpJSiL7nzNvCbwz1io2eZ2kKD",
  "key29": "5gjrmsbraMbAxtHwvWu5mKKC76iBuh72jTXsb29iHKb2SCmEvE6mDm4JnmibdHCxVGFAqzV4k9SoNnLBUiTEhe8S",
  "key30": "4ir8qp2qaqPVaJUSRQRTcK75MhDN5puut9p7xXbsgA6U3RjdMcifyMH7Kg73pX5ZSGZx7wvPt6Nxk1o5hFeGuTin",
  "key31": "4dwEB2Qj6pHmHAqCgAu5cotJqirvE8b5wrEB2nTfS1cAYWe65dbFENhtqhhrznuncsW7w613BhJ43gZnM1jB7cUk",
  "key32": "2xk5yuGjBqv59CqR1PzpQRZw8FEa6j54WhWnnq1quqYdyYZTaXu8rUht6xN76pKs2C5FzNwHrK3fJ789fZT9Rq5K",
  "key33": "2J1occzu3MeMXDmfis3sZk5uS9tZnZwwRUoiHB2E6XxRaqem7GKY9AKmgGtpc7q8EsTXQMxVWULjo7fxBhDDCW9m",
  "key34": "GqjRmhH7j5mTsB8Gv3Hu2VZRav9aPLWBsJG25cSfjsSwF9Sj85aKcjsReHNmE9jqgZ8AXZop2Jwb6i7Q5xcyadS",
  "key35": "2hfSUEP1F36mqquomcLWb6AW1KWonLa2Hz2px7U6G5s9Yvr6rN6t18UKaYzfLUVbv5ZxEeyvPSyvN42qzYndUHwF",
  "key36": "4r5NQ98Yatc8pwRjT6FEd7r4JzNfciZphJeDyqXaS7FTfxX1pr3Po8XVKJvdPyAEV4QHzRoy3sMjnrRkF2BpVp1j",
  "key37": "2dheVixnseegQnBiTiF2stVTBhUqFPD7za4j36w6m9w9bqYian5CVqmWf9NAWuMwmBUacXNTtumtz6PRHYufjfeL",
  "key38": "47ZqcwU9dyrfruv6yLGQWiHvnYTMW7UuqPUQKsbpK5JTcEdVasv8hAmq55MqkjEeqT1bYcPEzH7HHwNsHnEs2kd1",
  "key39": "5rVPaL3d33Q9DWiwqUGcg2vUBVeVZ6E6bZRXdWFJArZ8h4LkuLxhS5hC17w6giJfSzHNrZvB3WvvwS6qrpDMuhrb",
  "key40": "5pHXF2UddFvTiduHL7b8q5hcdkfqWsV4tZsRttGGgN5HXh8KmuJXBuTzfTkFpqkDJPJ4MQv9SG6KsdD4L7x6mPG1",
  "key41": "4V2A3wp3gCowVrpHxc8xz1JJygMskBdcXTH6KexgC5YivzMnoBiyX1TnAJBSk9Nf8iEGEvozKqjCoq4P5X3kidk",
  "key42": "2vevhFLEuT4oEqBxRbBX8qM6Nu8mxNWWHthK9rRUL6aSMZS54QqvJnSbMj1X4A2ZR8ARNh6C3KJ8yiTg1GiCSGQ4",
  "key43": "4KL1aHf2JgpNb4RuKBN9XYBQirSgdhUfQVudMg8W7qwfCq9oheUPEZuL9MvAeibJvHS9n2RwobvVix832EwE4AD",
  "key44": "41MDep8HksC5rayBbaqbi76MiDeEYjtTGYbMzoejZX9S6Wsn23aWeR1rYjizCgsHcUXsjyCiPnYXWsm7VJT7kUBm"
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
