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
    "2mtz2xEK72cKnd65eyP6kQXp4JSk52poBD1q11odc4h3JZJyCqiKgGD8YSSaNy6kwyiGujJPWorKLGaKto2JbCfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnpFz1geuzgQsgcyG7CnRvSpUm6b8qMcZwnRfVU4zJrCP6KnA7xZik6FNUUEBT13pnua3t6YbJd1HDZ6mT8TyhT",
  "key1": "5NEVCsiBBuCxAYQqdvU2uJTAwekQB3M8B5urTWvnFSWN9CsEMjX7ujtiAsKZtjXYZRWiaFq3vrCdy9vjXPa5wgBb",
  "key2": "37HqVw4tvXvuTDrCEpLLY5VbTsoSkZQ6uvvbycnkiAXvxDRzFcpQa5re2sQaeTWshDv5Vq2uozutpBiWpCF6g1V6",
  "key3": "2SY7TnXkJvDRjeK2A5BTqeK6GWiojzqa4wxMQCoi8f6QVm2hM6p9ohYVZj24C6AXbX5uXWfwy5hhWQE2erEDfSCw",
  "key4": "32TqoRjWCAGEy35tGTBpaj5bvNGGUtJU4ZesjztR2wD7YQxnnGSin4bgs1NtRgf3v2k6NH8ZTjpUt1ZhQcKB1huq",
  "key5": "66QCfqEa4EF2vUQu8WoWdShkUSeLvUxsrTwigma5B3ohBJp6XrSgvJzoWQjMiwCnTL91VeNpxhp2W5fFjVRb37NK",
  "key6": "3KFjayxQAy8L4SBK3z8Dd8Rbghq3AAvGm3cT4zDCMtnWWJqQesyUMhqxtMfypbvx8ocuvHs9qHrH48QDPZLg4Lxc",
  "key7": "iDS2dSVfCCXjENm8u2yfj83uSTfX5sXvEnpoppZHHwQ6cndfafezJD2SucatNvsD1b3ZHc7nDgYyhUbfCi6PvuA",
  "key8": "uU8oCjCNU8ihT7RTLFez3vpB2k7AmRHzwdHRdHDKA6HJdNCrQ5Gfevxy2vPbifxruTEbr9G7HxAnpQtUiz4daRa",
  "key9": "2pD16XGSKnpFrWLXju4BXAZhjABWyQK7fuoknnrzx6DnicqPEF1mQwA8AVht67HZLBHgwoZVVnBYTH7Ap8gYjejK",
  "key10": "2Hu8iMpA7MJaNGCz1ETpN3FvNpfoG9xgdtWEr3ounFsHcB6F4FTjuP7oY32SqUniTRN6FADLXKQYh9UQ3CYdTrRT",
  "key11": "3qvysuchd7dUp64cS7nzK6XiGXUqWyMM9b7QguXEWYuWqecmiahknqziZhJrJQtgqTcrwKtQ6shgioTQzXGnJRx9",
  "key12": "42ktKMLAJKmxnpLggWV9FLqcU3KCDm93fvHyziZXyp7kbDFnX1DKnXa4h8ZMHq6iCZbit421QGcqzUs7h438Yt7F",
  "key13": "5fKsTGbULhPauuvsicfeg5vQwU7iQZB7ZyozBPWNYhggbeMVkNDa2CtCXS6rtUz6RYXfZWcJwjyLvaVu2xjotKEx",
  "key14": "EsUi4VMxvsSq4WQ8AZGfN5ckmWkS1ognqysaWRyALCoFAA9vmQeXnf1EJ1XuzKAAPMxaXsnJybtLXd9UT5Tq5nY",
  "key15": "49ikiBLe7etmhg39W6SLSXiTDCxMF9sBzMekAFYCgwQoNmY21Kbqg6JGbbL4uuHnrnaxypdhaNj5vLP5eMgRTuF9",
  "key16": "2YXBNcKymiBy8dutiaejALBkiWQdzeE4fTc4V4nXX9WWQWCrtDRUnhXq4YyPheja6PMp6htjPgpNNCrHf1fFzMfu",
  "key17": "2d7tHnPtLuRKRrnhqdVt5JPVe2vM1dykTmN4fc342LiB7BgjReVasfCvUVZ5VjpTsz319ZMMgc9QwyeLtuHhphtm",
  "key18": "EVje4sTtY7Md9iKfwotCDvurcvrraJDL3a4sciYz4s69tdzn6ehTwG2WKAZJvnFzoG85QCVckWhHtM4ydC2D2Sh",
  "key19": "2rRzsWNBpnYkEitHQScJtfDH81s34LmzmUSk5anbMaznoW2tKXRR8rAMyrv9EZ8T4VGAzUBvJ1a3u161pBf6DmBG",
  "key20": "4XJAjE23nUKCiyWpZUwV56GK1LC66Kiw7KLnALLQFhnqVw5FSeRbbsXTuW6fvHE8ytXzgpMx54QSNTyx3EtiGToc",
  "key21": "tTca3ufJb8G8AXCnx5u3oLGPXVjgPrGtcYMnrsqXUZV93peq2aruDTK7zwtdazcseDUUCeu4AvR9EDxTk6owgmf",
  "key22": "3aqje8W8cVh3srHS2xtaBGbC6BuL21RPVKtYSVt2n5Yx7aYYttx3tbBgRYMN5NUGYvH68n5ceAmF4mTBvdsKBJbe",
  "key23": "XP7sc88PCxHyZNkzN2zgoZkwvvB1LxBfHkRCHye7JvhcCG2sDa2XcWxRmpkf8dEB3ToLuqe9PxHcLZBdMnfVgEZ",
  "key24": "36q3fSWLjJPfCFNHkvKfGV2tJh1jSSqXcE31hBaWyYNE1Qx98Z4A3a6oaso1AFtdmLdowKwBkxHxRT5gWjXXMKyN",
  "key25": "ukE7xsveHWwN4SneGdQKC6WQzBvce7KdMBYPUTtAizM5ZdAwWydFNKeMSmKkg8Eptwdn7JNC5oRtsnCREFr6JcN",
  "key26": "3NS37EMufbeBruP1RjyLPZhMMvPUw7DpP8CthcBQuUg7Fbh6MENAc4updv3VA6Q5dmhefPCmD5XX1eWy3YZzBNdx",
  "key27": "2EThyrSESaRCGBojrGdaihDLC8vL8vHCbMBxU15P4sZkstcKDPxZwbiu5Va1E1GscNi64Ei5AE3pWR3qXjYSUfZm",
  "key28": "2VYBCtHAoMpa1848eAFwjzwXz1vPPDqAdJFdnn2BrfuJYnYzzxMUS9WxaxxEgFG2Y9yUVvUqDhNdB1aLut5PobSU",
  "key29": "5R5RbL6WfeTwKjfc4iHUGNkRiAi1J7bCt7Bg6RcqSeeTzbaq2VLMTaAKZfofp4EELLwua4CeK8zEiyCr14LfonoE",
  "key30": "63qzFtF7hY7XfCUbjwzdsuQbcZrHR7Dd75dhxCmn6hhdUApY6TJgZLEajSTA79chxx1KqBHrLWLrBhcpXdHSZRAU"
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
