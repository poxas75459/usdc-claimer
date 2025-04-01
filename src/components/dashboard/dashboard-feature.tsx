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
    "3XFGuNniYCDwvEZori37h8krXuB4jLuEcy7SN8D7h25cKucToAVWAfE2ECBCmaenE1kupwfftR5Fvht3EUdVzm5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVZnrQGGEgkxXvQTMtq52snSs95Pt8E8uSPbHPDJN2ivZwfGWZDh19DRdE7d8jVi5nepYpkDmsYmhDwZdSnVZLa",
  "key1": "3bJyBD9GxJZzW4n3YbVLY3mtVsoVEVVu7t6xY1UvrRZTrZ2w4EJy4YF1Kg3GdiLgrzvamR5Yp2qMhz9Kcr2QqS9d",
  "key2": "4FJGyXe9FM28gvkrLU51r4or67wKraQ7xb65fdZ1kX9NoATFcpXVJBuUQxRBEKZVEEYNgUqakKUqE8sFCw59dW7S",
  "key3": "4jn3o5VM3cyza4e9gS6dEaoD5RmYy6Xb546ewdkKedHAxS96EscJyTWzVN1ZHwqcxbUCPfGTpXVjAEjncX8zJfBr",
  "key4": "AzxoTXaNcoS5uQXhN55vytYr8hYVTgTKmaPjWDRWU4TpjmRFStwyp2m3m6Hk2ZXETGWAhDPRaEGKX8afFP6r1Ev",
  "key5": "2fzPgRnUNQ1dU5WSx4FsA5Mq13STL6zqMD5bDGZAD3gZHzBgCFJmQydJDCEmgD9ZBja9A6gTkv8cCBJbJK2wFMjP",
  "key6": "fEm14a5Pv1UbdghbVMsYXiimBc5DYnfKqg15NENdEDm7fKUzGwJQfqdfFbf37SnaY6xLaZBom6MqSPjvjS1WksY",
  "key7": "3oAzdHvKKRS4JSvgJEo3poSbuNttmXqCuP8wdXe1nFwKtjEyF41hXMuFnFby6g9nAW9GBZtATJ9dQnWdV931T1rT",
  "key8": "kNfU2pAysJGebpKmroHDVLspwtZzoUu5uDpvVuJrUfUWEnSKyLoQPaBMhUwQ1V51GcC5UMd6f8TwPtqo5FGADdi",
  "key9": "5XuCfJrwrNGSh5m61KSVsEBoStgMbH3PShGu5X2e9FkyutZtzK9CYYPBkrjwCpeWbjyXfguKtxWto7Nk71CtywHg",
  "key10": "5pYaqaagJzfStrGDk9E4KfBu7Gkme23aLKBHZC3eG7h2y4TCXyEspEEvkifGj5hxWLYM79RyTsoFPsQuVkZMcSFZ",
  "key11": "3fbWHL2WgKPyweUq2Qvb67FgF9CJEPpnejqqTEmSfFCn5aDTyepyJ1Ynupv6t8z33aPXT4Zb6r9M9KuzLu4HgoD8",
  "key12": "mxzgeE7aQsQ9brphakmbX7ywFU61mdtCma7oEpFQ97EWsApTSTG3AXQ2aQomFf5cPHhTo6QX7wGEGk19yWJ2HAj",
  "key13": "4h7B1phB3JB5LZgXdarJS8Zrif9F7b2a6rA368sCQFvRBY37haYS6nLrWp7v3gMwEtrJXc6Ex1acBfhc8No9YzyR",
  "key14": "2VfienfhnnHgQogPKbzPyKqe9mULPwRPJKGoiofeAo3bhoaWySYWfXTWYp5F7Ye9QpRg1ZpNkbWtGTEBHFVEbNg1",
  "key15": "2jd8FsqWCrW5BfBvucuBUXgs5gbztHMhVHrfViAVSGpXsu3A6TzwFnU3Y3vFKSUY8AqeQwtvk6VaEkmvaaswEjY",
  "key16": "4SP6H7rqdtbEg88jaSap1bJ3KyDKonTJ2CThESBbZ8epqCHqV9SMZ3Uw8E3b3gctiLYyUHsVubxw8S2k7KmYpFdZ",
  "key17": "bj1V7jQjmS9uytkLetVRzmmXtvLWncG7LFidJnPYHbpFDJeRkrzRcGvoew4jW21B1yuLL2MSyKjVfJ3WPLY4FSW",
  "key18": "4vznemQg6nXs9GigHccnfjRuFXpdvibkaYAqyST6GyqVkZFgEB7AqLZpRdUWp8HL845EovNhq3XVjxnMGze8M7pC",
  "key19": "2H7TwiVb17uuiiQXDbfNm9wZfxWTMsetr2ftL2r7DxLQDRUMvmA9jBqBzKHsWsWWNNEW8742H1DszcrxgxhwpjLG",
  "key20": "2d5PzJS13Lw1j7XVpTeDuL4WvSFzGHiYWZVMqzkpoRTbiEHKLwX2XyLJWWvfKhC8TdxGwRhQhL3wGDgZRPMj92BM",
  "key21": "WbwyAUiDt6GtDdY9v5Azg6odzwBdtFvTJ7YG9fCbppEF3h69zuat1KuA5Sg5JT2F1epMmWEp1y9zVAuCTBKzDGg",
  "key22": "2LnHCzRTBNhtUvg1HEmSH1oF1SJRkLQ7yT4C5R2ganPUmNXCtotGoBcxvj5ZU7EdgYyTfqbSxd8gxFM3LSCTnr8h",
  "key23": "4tLEhm3Pf2kcvomYRWe1frfuYdSYYtNcU3Aco8Strir4jUGt9u91mChuh9Lfqqrvt5AKPDt66boWcnXAmicMWpZE",
  "key24": "4h2h5LUe5NNXQ4KCZxcN1FatkonaSDP4VCdjJoQL6MuvmvY3KPUqxySkMgzA2HXonj1L7zrjg4k7Vyub6Y3UaKXu",
  "key25": "3uB95KBRRm5RiWznJdh3egcEURjxcSMsyjMdgVqsQtJE9iLCiK5YFdJRDRXw9hTk3fCxjHK5ZhWj5k3x2JC3ux4y",
  "key26": "29ztwCYz9ncpbaenPdfeHz192TaUmDVCD9969bqJ3W9CZo7WwYyvxgj2q5cWRLUu9Yw6FCP4V8A51MBqAgMTLoaF",
  "key27": "59P2vs1patt6wgrPTeujFqXNNmnVUCiUsphetRCqnTvXJEFDqXb5HgpqzEs26mB6WCBvD2PmYHCLaGByEPfUhR7C",
  "key28": "5cL9m8tcPG732pzQvFiLHagDoFxTaij2kQvSY8HhYaJffdJzW2eLo3Q2WyCdVN41RFoKnJ1EkesQAywcXtfC9UkD",
  "key29": "2RKypE9HrbLWvcuKEhCMgMCYXR2oZXd1S8E5mCkyhhAn8QBa8pamw8BTQ1nCncvbcMWECRTsRJUxLMoz2NqTQjtX"
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
