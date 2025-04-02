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
    "uvuyJcYLrheTaSuSRheUdi6VJhLYgkgsQMRB9hXznRs9TRBLK2hpJYCjFwy4ypdQHuG5EJNECpvGjU4vzS1vGqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvjPPPJrZhXAhHM8Rv2VuxxZYcASY2U1DphVNt8vdkcGE8d8xsPymebtRnqv2Fe2p3YXF2NjU3ESj3JCU5GzBQ8",
  "key1": "2iAWWJ3adbgAPwPPQmUnjZtFpjZksW3JfCzZPsiw8xe47TDZyZHNmJwycabZeUJa3M6XX19gi7CrNpZ5HCUFwEEs",
  "key2": "5TZHHYfbNKBZV25oZSDiXbGZXy6dRn6L1mUoTGT5ezE8YyvbPEWMFr3eKeyha53hNnyLw8gaYsdLZXtYthmLAMiq",
  "key3": "5GFz2kVBg3AmLxdoYvogXEQeRs3Xx68UX8zqLH842XhenczWTrLJm7MZ5FiFnZaykgovuRz5M116paAzvCrZWbxy",
  "key4": "2ysmD8MjZQnnUUSWsBM2hEwVUJRWJ2wNuu3yg6u751rYwM4GaUhJjCxkA2FAuFSZhG5YVbF4QeVJVp6PyKKWrVGr",
  "key5": "2E1kEPLoqoPCK85wiKkBEBb7vSYaxviHxhQUva493NNxLCBzGBrziJTFaqJ2u64dExNJSHHyfY7CQ5UwnAQGm76Y",
  "key6": "5hreYybZ2mSGpgLAi89B7DZsJwQri618S5WkfXLi8ofG4h6eJWFwgjv1QQ3M7gXYVFFvqask8HQpsFfNtYuDDWmc",
  "key7": "3Weg2i7tY6NG8DMJtZL9iCorXBj6NYQER2KkodR2tWE8QnxJTStaHZCEmZ6QnGY3DPeLGHBCdHZK1nauXhMwhMzT",
  "key8": "2QLmkDkwXto2N8WHdXqCq3nuzXaRE2NsdRjBLrX6hvECo3Gj87wCsfsriZY1fnDPmVHnrHekfaDiowsEDJDiNMu3",
  "key9": "XEFdXCxxYyjdWBLTPcy61njNiMxKc7niXEkwKxwZUXzszDpSvp8RadRQwQSqrzjZ8s764XyFWaepMPw9pydLAtF",
  "key10": "3DkooFYzCVijNZkWWmExQS55859gomtPnBXttx2XNmeC5bWxkgueMXsEq7898FuX41RbMevNPZx2ow7fyRky573V",
  "key11": "5PhzhZshkCtnKKgbAw2uzjGXgD437XkQAbHqgS2n8KzwxduHZykLa3yHdZYtuPZFiwxYmorAN63kUyLBNqNHXjQA",
  "key12": "5uStEqKSrtEmsKrt4GPxYVh8JXUzjz9kkd8mN57BB66fUqgtX9R41RirisgCMgAy5dzEq3GV5oZgaUwv6xDsCWgq",
  "key13": "4XAYYkQq9scN4aU1ZjbWJ4NQ3kbch5gQqTcbXCkQGTHfKTDYbBSFqjTrSkYXE4m8FKPGoPpy3v1KB17vVqV33B7P",
  "key14": "3P3DqAr3RCrDgz2dQkhuWXhKyLFWpj2irWg1UEGdG1E4wW6wCfBceT11gayVfVmD1sM3B1cxzLjSZTPMnfzYE56H",
  "key15": "4XhrdvTFgWHNur5fDx5E4qxEK3WLhXfvNKcaN8PazcDkwwdNsVhZHx9RGinZ3DfDQAKMtXYLDaVW976euEZ7u6Rr",
  "key16": "3ufjzFkGwJXXJ52VGXKHMdQYwRQgc1h2NvyTd2WDhZKXjbaiF9mr1WYpzrrBB6ZaGJWQvCQmx3EK9tp2W2zVMgpr",
  "key17": "2QT2jnaYDHN4RpxE2DZDMCUvY8tLBapABAsA1hZXe6P4oN4cR5ZbboTj6JpdXw1UFcAvC1DwncCezBxJjjMAdxss",
  "key18": "5f43x8UZQU2kXRHwbdq5RniqTzzsyjAymG6ZtNagwRYXTmJ34RY7hGpCYXcGYnzcrVjUuGFKkxoe7L5boA2zLkhg",
  "key19": "65vyqkKyQwmDb3MkjRkprEzsJBAm5P6YSATePptchw8Vxp7Ev4AoPyaP54cq1j5kqhUegVw6gYuZnvZnfmJhdBh3",
  "key20": "5Lb6SmFkqe54aGkRkV6LGgHwae5F6ybMe6YjBwTC4hGToGozdwVKNgiA6Q3ztvrubpwkfoaLKhrDBd7XoVTDD6Nq",
  "key21": "3ZQcBWFSLNKjaTdisgB9Vrtm7e8JRimTRbwMe9iUCE5Wju11xMACYAgNqTpnCxZ2GjimJsm3a58ua8a4aVn8Zb1L",
  "key22": "2tC1Dq22DjjPavy8BRVEo8MG9tx3EyZRVSJ1Q89YTVxgedP1q1AWWSVbhd51MikcYTe77HBFBf5aJm3kKhtrKcva",
  "key23": "62cww2AmLsypi18poxV13e4mZLuAVvUjqiEzRiwA7hAxmtnhVAmXByyHzpi4xyDvSpkvkkJy4RAA21MAbdaEGJn8",
  "key24": "3TTJHF6bv3mb7N7kcxPLutJbStpr1et1cbCaBQJCVoFVcUC4NVM59boXNCj4yGJPNEYq5kVMZL4fFTaUiJBAW3jx",
  "key25": "2q4Q2jh9fRgNmWZXxqsPwZQTrMTLhD84mfoTBaQGXYq6czZgX1udJXAUXKMZ1NA3e7u3T1Lu1fz52f2FC3F2HGPG",
  "key26": "582r9GcYEWaHiRPSJjhsVVmoGP4T68NE2acEGMmiws5CFqxZTm2B5o96UCQqsYZaZyr85oMEh2BqNtTAUru5GHwJ",
  "key27": "K3qaantQX89iRzt1LgtdempQLfRUZuGg4n2b2UbtsVZq28ZqCMHHRarLrcykZBDwuUEGx1RLmHSdAiffRMsFFSt",
  "key28": "587QzhAXwZhNJWQ6qJzBqkDDRs2Qvo7MranGuhcMMMX9vKtpiaP7VrBpFqjN6WPhFxARypWtd36ML9QJ2po343rM",
  "key29": "5i9A7VdCQvmAiwfC5cv7eij5yJYWRsqpPfgbAaS85SYJhBVtRMR5KveSKAHHdZB4AYvcHqiC3iBwEya5t2PHRTr1",
  "key30": "3BoZGg6B9nALV2jCVjefqaYLAVySBvYv1TzVnFBvwZsMBNdW4gLXWs3nwZc3ozFvBJ3NysNeWZt83hDFFeC8JBtq",
  "key31": "2gkH7KAm7hW7Wc7zJTaac1S8esXUsEiRkvyWUM8YjcMLgGCGyHCbduzYaQdDjtndKUsn52GFGq1yskYUKY2JpPxp",
  "key32": "4NAgmRX7p1pvH9i7sJb7pHSeZG3VCvxrquM9oEJY1LLAKzAQsU5uAyCK4GbubG2jKAtTqtjC6ECbZ8Y4nNFDZC2h",
  "key33": "26aMStH3bVwEAQPhxhZswaBi8YBM3uEheF32spFNP7Z7xpKeZm8vQ8dkFnHCqBQ2usgEgHxVmGsTD9p3q69yzaf9",
  "key34": "3FS7PgpSJfyNXQEM8rWUaFftDYvaGcUMevKuNczumwBtVgHXEGByWjbzUZT6m3CcyXskhd9sn5vdG6mxuqbYnUg4",
  "key35": "3eveabAtAYMG9gfwXbR39KAo2RnExhfwcjMVhF3kNsHEp2eZc6T7nB2MQLCDQCgG2pmqEnoB4GeTyBiJccSmtdHN",
  "key36": "4oAmopH71tCzisLP3eXnrT6aL5u83TiQNBFebH5bNDTGeKRNozNqrKYLAAzre3CUm6qNNyqqPXEH72zcbLcZR1hk",
  "key37": "4XawxFu3rxCgmrfRB5xtKacKE5mo9aRxieD9FP88R7ia3ZTuXRfH6Kc5iNStB5WWnMw1gZhVwBrkbgWvfkEjkfuR",
  "key38": "5oHXeY4UA6HvrqXTWvX8fxkbtSF8Cyab4qqGARU4TM8oRrHBZGyFC171h8pLnscXG178C9kw1RzS79pCfV5YCpwR",
  "key39": "4dUFwSdYf36oZUsyGvPyvrutgUyKwzbkSg1ymKjTByfPbmNV4SQC6k1y3ttQgbuTExZQpBuGdxNV7UrYBwamUgAz",
  "key40": "3DGf9ED9qJhFdQqv1pCo8FDTYJMpBq2tpRSuWNeZGzMsdLxHUWv7aoi8vwQhcaPng5fojTx71qwJQxvpHmLJs9u",
  "key41": "2fSypn2sH7P39pu8rsEjrEFz6pBQSyiSoiXp3iWr6qAzk1ys8NJKwgA2qeqMC21iEVZZ1NwHVwyBTWFNuqAWzhEk",
  "key42": "5xPP5TcastZJbN2CMsaydXs6mja7wR4ZvtbuKvXpeXgQbrEReHoJDUDQgEq58e68Bmcpw3RBTbJ35Lyy2ig1L3WV",
  "key43": "5km2eBQ9tHFQJ3MDQevCqN8nka5MSMpeheQmHhSb6eMV9ffedNXV8wpzNcXoxu5KDE2kE2p7d1BwsnuiJim2iYTV",
  "key44": "5e9L7yaXnWoU3SuMJUMFPGvv8KCE7c4F5rq4mgnWTve4X8E9qcSCLuQNXss6iHiSgPAvGD5gZQ1axx6SLv8A7gKX",
  "key45": "2FyoPyQX4zd4t2K9xkzyvefwGHsmD48eY93NDrb2GtWedTmGmUigZySQyPH7sW93FVYoagBrDcV8FyX6R6F5JaEs",
  "key46": "g7rZ8ZuwCfn6jZUrmgF9r7rv1M983jTiLztRYR5f11AxeqTDLdPzhQHWaQCfcraDpToLhWMo9L88fFihASYZByb",
  "key47": "udBG3NwWo9iMDV3YZRNBtTTH5UTgp4cbU3pTRwF9Qer4bHXaXbY3i3vhW3bdLX4VYAimt75KvQY9TkDW8CXjtyM",
  "key48": "3gM9R2K9eWxWTBEZeH7dyCkfeJcSBk5kA5ma7F3v6hU7sF7rwWRqRQWb7tCfpQtJK9WsHeSXw5eeHyPC4j19ppDt",
  "key49": "b9DUkivetuBvJq7G54SJwZu7PZwrHKcXb6pa597EQ9g6ZKy2qPQepAeohXYzwPRKBsCeoReutJuyXbfAaaNxVcq"
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
