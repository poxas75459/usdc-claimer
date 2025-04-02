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
    "65spSebkwa4vprS8ENQUBhBYRhuKGyVCyGkdYoC4AygMHyjRSsntdXdn23camiyD9dAJjRfMTP9T5nmsVGekSN4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YyZh3vhYMjKuR3XWzEfehFWtqEJc1W2Agi3L5XmsZZBTRaDXTxEg115yKZc2R74UjjAnmDC7JexHfu3ACyzwdcZ",
  "key1": "372hncBvxM94Qj8fYjM3bvn2fXjXKRWqq5Tp6qLCqPwB5L9GAmNr6PmzQQ7AsTdeAX5gcm6jqugPkQuiv7sfCr4y",
  "key2": "5z7Xf9uwZNcxELUJ8Q7kYChnLcfo3B9GFdmLjj3axLWRfUAtDp7Sk7FicZihsTRmr8KcKY96XJU2QnksLCnsiq4W",
  "key3": "4R39aopTmb8xZkQeKM2VVBqHoKfensjPRD7JUG1BrR2j8McxVYeqCcJHNn9KrVNWUZn3bGyF49QuPeRJkEZXezUA",
  "key4": "4hbFZFCYsUd7LZhwnBMWMbCTc6hjsDDDdafAhBKrEqgQ4pDAvT3rcvKo5dYcqiUyXHZ7WMGH1KYRjb6fhd3L8SnT",
  "key5": "5zk3X2VDhRagZPHCu47ZMX5bu9dXkk6QBzS9g5ZTHXTD753G1W4urcuezxM7QCimcup5yamy7rXRRQA4tL7b6MeZ",
  "key6": "5tqwmPuRDStKAiPwLr9QAniTNJF5dJyQS81ywvNqwP7WvMxWu4bLTqcoAzo1uu4kxkYPJmiXueNnnHZBzAHyZaE",
  "key7": "5Jp4RiH4nCifZtnEAiXTktXhuhgCntftdJQg6uqFfEgyoCFTfT2BgUaTwSFb2QNuyjUGDAYQ19pMaUgNqbEaXCWy",
  "key8": "3DGKPNqJEG3hex2Tm6jiafm1SfRFER8ETnhqhtkKUp8o3q7Db4XkWRFCChE5DYJN8UYFDxZ64e5XB8cmdXGNh3Eg",
  "key9": "3dXU9mgwAsiY2fWT22dAbnmgpjXvr5Ennzd3jxfyPVt8M758nsZddBFQrGRXYUQJcp6jiZKQTPUxyyC1P3rVdAgS",
  "key10": "4HT6His3DbnSrHwxP2DS39WosSUMYEYiuNYfp6Zo5tPiCm9zauFKqS7tyjc9AMyqoKKs4EQDpTuvJXMnmUnxy8ZD",
  "key11": "3zQjhVesgfkXosuRRnCBK3Muex545CRqMQny8aqH9eQdfwtCmDHLdm1TUM1CUC6awW1aLX5qvfEXLVUJYmHJ3Vv8",
  "key12": "46TwQEPT8DFNJ1eZae7e1Gi5eyov7m4bY9WcDtUAoZUq3rxDeEdN95yyjDs6XUbBJhn8Dg4oRWU6rkHHiTqKUren",
  "key13": "44ZZHijcKKHUnaoDiM3CfGpFEcw8u8yCTEj4NkkjQn4pvBcSjoG2HNpbYijE9VaK3geEJzCQQ664jj5HXMwqcP3T",
  "key14": "4Br2HRaxtCeyfMEXYrPT2rpda37LvvEnSh12MKpH6Rk8J775TM4rC4HYkWi8331zcDqFETrHy64hUwfnfPTHxz2c",
  "key15": "3uitadXeJusBzAtE7Y2CTAUzhqQS7dA4SruN4eux86b6wpTdbVvRVzsHFLL7yQFR4vRrxjym2HwCSiXjTfyMRw6y",
  "key16": "523eqpogqULqPFMtJ4QjwMjiZJXjThokwjdJWBfSe7pD3DfCuMRS5jkAs5aYDt37niJ1us9urFeqBTy72mD1dYpf",
  "key17": "3j7gi7u2ca7L74rh5DR5CAznFTBASjKPPGWycKJLnLfWyfPg7ae2aujnQ5JuS8pfpVLs74TJA8XMffmb3yfpunPe",
  "key18": "63gYofMgYFksePWNfpJdMiWYxMwHviHAvBPRTwTWchsapCVEg4wf15XPY9qHjuHcn9yMf4AuexDSq6cZUoXwARKF",
  "key19": "47KY81r3qdh14WLXgTSAUxCfyivYhdupk9QDVHwNaBGcTbogZKrQWg47mMLzK9ivVxc6skvbNCMV8Matbff84rxD",
  "key20": "47MsrKSefrM1bxzJif3a5ChcFo51rbFuEs9SjKVbYP9RqxhZZJjW7ZiUAGRbFwKfkGtYRVjdXxUudeu2iN99UPxc",
  "key21": "4tYz2HFMqP7KLfaCPt7KSsMGa7MqtetjvmM4Qv4UE6Y8QmoLxkE3adDQACcXPkARviYBF5uMjhNq83FKwykd5wuu",
  "key22": "2iSSTrgQevFQf8ffrr85ke8rjaUjz764QW19ZH23kMLL3b34gxVWn7Nrxs6sWoPKFH5XWLp7GfRxkQ63VanWo7tt",
  "key23": "38L24zfUP9g8hsdTgjGfcPEc91XhAqfrJjB9eehvusPP99qLXno37ZAXhViPvFgSRtn2FVCfv3ddKsm8TNBDufcF",
  "key24": "ANJz2npiYBi7kLWhRif5VsB4UYuEburDc976zwEWtFfhSXEvUPMP17UTZwA1cJpNohRE4MFibaQaGf6JVC93Nud",
  "key25": "5mZudvgQPTeaGUjJHACrG11d1yDGji2WBBcj6XVq1VpFYX57yPr4JSnXdEGkC5jwHECp4uXDUcMjb3i16BcYLmjb"
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
