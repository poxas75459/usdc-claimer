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
    "LUizp8wMWqhvEz9psc1ueaMp1uwFeox5Hx5fpKNqK6BwBXA5sje9wunZHp16uUZQBFG51tuwYf6jK4bBwvh1r5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qi4ENZrP9yS12xbLrwwW5rPnocz8Aju5EmiqZy9Uvb5fBCkTPES4enBpWjkFa7ncMJURHfzGYeSFX4HVr4eVyQ",
  "key1": "H6mDv9TZw993r9DJwbxFRmaS2nEADs2LUPqMeFRia9bMazGs1oEg9vHDJzCphxikePk3gyAHz1ycRSXcEBXByTH",
  "key2": "wQntcbj7LLeBKAZGkLKGP9XhuAbscyNkBrqhUDYADKCHpiwjGiKGKU38GXJ1pJhatRAfiiyEDweHCyyyDo9JgsL",
  "key3": "468hfCMJ5VF88KeL2pCASTybXZE1X5WBrWgv3crTTKFYF3JyNGe3DZghdrL5TDmSt7RxN86YzobY7EGKKpV6N5kM",
  "key4": "3krarehSSqjqoqDsb1tZxFbmNqMxPoY9H5sKpwuNtPfpLEPRBiwCrc91MLEnNJnoiMpR6keuCiiW28X46hD2FAun",
  "key5": "2LjVyyXkSCBY7nZjBXiMVLW1gmiygw7qyWfPqTiQ7mfbSNLe16BKbqgrYRaXxsthxd2ZpxZGLTVwxmYTedYh1ht1",
  "key6": "Utxq6xWUCsV1vSMVtw3gr9gv53YPAS5paXMhbkodngtBVRz6Bz67HH3L55xHMMV2KaKVfEdpvQ1Ak1RgG49D7kt",
  "key7": "2gQaQAqMi1LJMFAx1HMrd71PjvEQaQQbNGEkSvrtzgnmn6cj1VTrV7vrE3SEqyK9uSU1dmJpddAMhU7WYarvq52D",
  "key8": "2NRFvDAoR4S6s7CQZTYnX5wtWqzV4EeuKmtXq1Eujm5jFfiGJMiRcarwpRNVmTFxTmGBvESm9zp2evFXU68yFLEB",
  "key9": "4VqSmSPn7v3s3KkKt7jy1B1E2RnRHeHHsmw4hszHbH65Sb4MnetqtHLAvtop9FRid6JYgzLWE2bCyqdZ4RFns1rj",
  "key10": "2GKU7RtQD78XJxQv2rWvRZMbbCRh2Bd8A1H5ZHshprnf8sU5BvxCNcUN8qJtopFm8GrquojdNpHMxGdWw75tETsL",
  "key11": "nbEJd7ePqiNH1UWXmsgtSKdpKidC8ZMwuWGPLwbkoA2TVHYH4729zJ82DNk68963a4FTdBKYrc9UHQZxqMCARaN",
  "key12": "4LwNM296JJCX7VaaeQVzVqDZeSjh4Yk7UmtM7LdZ5GhMCbtP7MCXcusqbdv381HK3dJZ2fZzBUmg7weT4EmCS8KX",
  "key13": "Ceyr8fFWZV9uU6i53PABzZKrKHTMskpmU9ka4S7vR5NxrAjT51pdpgqjrMqC4WtyrNA9F4qmYsJSLxtWRkmsiPt",
  "key14": "5jsfeb9PyLM5Yb47r9XgKdajx9utK6rJNwD7jM69uK3DprNLci8jwRzTeupV8tXHrEJfmYsKdBBC7XUuCY6qovjj",
  "key15": "bYfveEa1tzwxbQ8P8zGfk6axLAH7u6aiorVbrsybK8dmTrfwKmYw3Rugp8fs98h1NXCJo5Govef2etyAMZJE7Zs",
  "key16": "2uNFEA5mNBVU3hztZGK37hoYkUm32zL5ovFjasbtRDHLQd1kMHUHDfiCiqaY3Q3e3bCm6UG8kpzjupVLmPNJfRBR",
  "key17": "5AtCdSZVW7ChyVade118SjMfRHgdyfWs6gXdEqx4g3TmfZZh7QDQUeP7r7CBngksagU7At4LdCjRAaPrS4F6rojK",
  "key18": "TfBSrhAoawhKzjMEyMj84tfS7ia24SpP7UfXKSDAtdZeNvCr1ToBrEaPLiMT2FgBNCQR2niSPRJrtV48niac1Tz",
  "key19": "2MPTCUadysnS4YmZUo3XMorYsxeEDsNux556gLRU5WduNjiGyha2Zok5kviTa9LTrUBxhm7iLmk1T3nKAnYjx5nS",
  "key20": "q9HyqmHPrYgkwNgNN9upPN2y292SWWSJgcyMjPT8SpMCSriKP4RKCFc6jyN34GhYYyhqvqZEVQiSCQq1DqTACdo",
  "key21": "crUyyJpWKzNEZsyybZVPHxPrSXczg53RCh2Hi8YH5boFa2hUZSWS9ip8AmpVSJUbtQ9HtJ5BNUXXao7f3NYxoiR",
  "key22": "4EdwgdKyq6DUKwQ6qXZRmvLoUfNfSfqinymBKDaBKLX5Gs1J35qeS7H8WuNiX7Vy4YSHerL524rYtUYMxuEmaWN1",
  "key23": "aF1QKW1JctDMRC3xPXxfza15mRWh6xFJFPzszPJvJs7gZixYLZMop8khT29Er9E8mJdtMYNsvSJt2WaowgtnLfN",
  "key24": "3MXoLTEyoW7Bwwr24dtigsFE9giWDHvfBpFoh9XZPQjaSwNFm8LbC7GYLB9QrSVLo69p1pZwA9K5NwvWm3VExeKi",
  "key25": "4QFBmFtjEuaFNkf7EWdXgDp2FbdsQ4o7WxjqS8aJXq7yWDGvEYnPb6HbvUuHZoAwkrvBH8z9QdmfBCJpPqNykz8q",
  "key26": "4ixgsMSjjgrdFumssptyn2AV1qo6mviiA5EJET1GPTvez5Lq5BizTMLjQ1au52xTwP61SistV7nwjhCt9pJMi4xm",
  "key27": "66rMNU6bQTVC5XZeBBGY82fjvqhSFbYL5ZPySFsXMDGgZ4PcSidVcNy1BffQkn8C9iZFkBNfDhTiqzYSaPmQwJfb",
  "key28": "4RYeUKcvdqR7KG1hS1ZbCVqsEGYhcYuXoDtsZZFaB2ojKVbtqt3NQozu1snxnTmn3vRGLtpamqb7TPUUmuQTBocP",
  "key29": "ajR77NcGhLefv6ucqebrxs1WbSZLQesGK1ST2GXy5A1DtW9gv3PraqexVWnJT4nEwqBjMbcr2QBZ1H4ddsqbBZb",
  "key30": "3zf6mjfLvrFTqGPpx71AXcrAsT266ihsyqP6EwSnLfDjBQtvW9sv67fYPnApfnLVMbmDvd58yENua8tztvG9cuCB",
  "key31": "3eww6D1ipnWrkEXztYQzuURWnYxAw22ruUVe3YzKtmzph9EHCjZ9HHaR8XbBZ7j4NPr4HUFdPArvZ3miWVVic4Qq",
  "key32": "3cbeMC9PLzFgvBkoaWKt1gQBvvNJN3afF8LQRUu94RECswD2QP32uAKV75cAdvptcayPjSaiYee4CP17XXhwK8q8",
  "key33": "xnqnJtDLshUYLBRYjh6CZUeuPM9J4AzHoxT5wGcMfuRn17efYJSQbFPb8ifkXuzMzjzjTfZzBkp2GNq3opbEwP8",
  "key34": "4d2U1HQVEfHqUYDKAghrF1MJ3jiyBwNLmHhvfZrYVGHagTei1wWYJh8agHUYfWdZi1LM3PPjapdx31b9KevmF83S",
  "key35": "5p2C1oCLHtfmvn6coF2ZnKyeeXuWwGuRDk6m3YckxkP1fdjC3izXfepzv45omiGppNiacgzVFs72Q8oNCknmJctY",
  "key36": "WzzA3ERPBNM8HFH9vK9qjaNsDQ7WFpGaZ5Yg4AP4oN6iTmJSrutgZcpf7gB2zyhP3zNHEEL8tkoRWV5dfFs7z6j",
  "key37": "LiG8MFvLoo3HQFktWwSYVAh4U9sNvbexZrjNucMCu1cBVE5Xvb8tUSaFx75KnVucHfDoE5AeZA5bS5pe1uyiniw",
  "key38": "32cgn7W1MbpSv8BGJmSsbDYquuVYT3FqLP8SUyeikMPGFZRTvPXsAAELQ6QqSFrPTLTTmzob6sDTdhtn9PZZQ9Xz",
  "key39": "2FswFXqv925tmoTBLWG8UswAtkKq9SYHzSLMPyg7iLy8qKY6XshcjrpbwQJEtsnY2fGpfzfwShFNvAMHNbwud1QR",
  "key40": "5Sw4dcSna6ScJ2Yi5h2vNViqUszSnhR7GPe6zWbjqnqLVdP9GRAgfSRtRxARR37JNkoUsvPV1ybXH1u6iFpLQgvz",
  "key41": "2XdhwPs7i7mYGiArsPqEx7iSpQbSuCdZ72Yxp7cwzxYMxoSMQApyrrzmKnnQdFiGQGk3P9SatANhwsNjHxG6vX4f",
  "key42": "4Sv8onWKSHc1k5Yyenub2o3tW1SS5vDaWMYbAZ5M7sLDnd9qthzk25CgrmyNqXpScuzeD53U6CVkfAxXgK1ntvrH",
  "key43": "4aCgkJ8SVDByAmB1erRit1Po4NfJimTpYVfgXsuruEj3oWR2uBbxaVxn6MLLcXcNea4uRRR1aiqnRZo6kJVwAqZQ"
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
