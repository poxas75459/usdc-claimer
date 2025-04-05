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
    "41JbVVCTCHwjtbogcNneLzMGgyUxLD3KPZ1WJZeD5CfeGwauCjdmkwiQzsEuWmeAbQEr8RrjzuGZq1ZVFSAc3ixS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGGhY44C1PkvwEnLxRd3Q4BbV4hoy2orGMni2b7TdXTTyx5hDNAxLmstZtSd8pjBn7Syf2a2BmqkbmqsbLUNk29",
  "key1": "5QTt6FRE17XgB3dDUXxdQ6cdcFFSTDvh9eVVPbHdcTLuY55Bmt2hUxDsuxFCTXjSbiTwZoikT7pRjLdft5baReFT",
  "key2": "4ES7pkfDVPWgbNmquwsR8isRAidcCWyCk45ifVxuyAxEqGaKNqfCe1AfsUfXDnnp4J4XVBvrt6NTS5BCYjSHozDG",
  "key3": "2KhvwAisXuwtYmorBYuMqd2mbMkmYCr3vebvt1V38Rw84wUWzxjUse1rHtsNqfvqYUtZzj13kKtHJt6dqEnAWrmx",
  "key4": "3QQpNU9Afs56mawrmUPdm1MWcLBbKwMvES5Tqjgd5HEouF9hHkvJLEJx8SNobbh2UMnABHzakjxQF2jfhdNQsz9U",
  "key5": "4NinFShS35qZF25uwKeNep92fMjc7Cw7HXMgU5bci9oHvSNUrw37t1kn5fZfL8WhgS2z45izFVSRJzHfcTrtB8Mz",
  "key6": "sdur5Kw6dHutdDJusxThTtKupmBbB25n3TrP16j4LMwfiw8hFmex8bPYv5oDJ7re6ome3Udh8JvYcvWaWdPj1ai",
  "key7": "53oUgMidEHFnWgRLHFaDDyx6pK1E8zWtmdKArGy8RVGiPdSUxse6bstdu11i8LtTEM8h436XxMVMSLojj8ScmQe3",
  "key8": "2C7RxY5PFocGh57PCi9Axhz3u7795hcvBKRGWZGB5rcA1XBEbDkoMb8wL6epLYFhAPCUdmKg7XUuW1GxUu2HDXhc",
  "key9": "aTBULp6twwEep878c28QmnfTz7FkFxPwZL5Etmr4QoNhctt5V3TzunHnTPkJph6WxzvpQnSUxBp3m5j9ZG1TXgR",
  "key10": "5UX6T3Tqx4DHjy9Sz4kfVQAS8B2xeb5BbMMmGaZzjr8k4jQqUpzH7HTTb25ozxvmY349zVSxJzKcKdqnxXmS5faX",
  "key11": "5966HHpbd8dKVMCp1gMKkyy3tZatGgnDjPaYoGPJTDx7rtzjArHMDkMekgLwZywGM1BeEAnMDL158hNt3xJjKo9x",
  "key12": "5666FA9MscpEdM97niKtLP2c3ihp8BoTGwKkNRbVo1WBFkuUKDU4Lmm5YWzTszNfsyUyveB1nqRc4JpHVKwaZEpP",
  "key13": "3S3JdPMUg48B1d2zt4tgbSTPtn6aJdb4gDzY8SyAwdBG3TRmkgLe4qs3wiHyg5TLTHUYwACSeaKHCZS6nZPzX3hi",
  "key14": "4PqWb8R5ZRGQAgjz8ktV2JM3yLjg9dAZPN5UTx2pCpqGd2793r9LqxocEnoNc63DP6JZBgtZBwZLWML9Zw1yo7mL",
  "key15": "5YZ9bMWSCmni3TFmeQAECbsCuNjykjb9mGFJ9FqJP5yJbKAGHfQg8uF76vaFL56vFLdBVWqzKxsgVaw8XH2uoKJF",
  "key16": "3HmiaQ9Zg1cqaJDvRattCAEzop7Fhwj3fHp4HDrDzLam7E9CXFJUVqNn89rXD7bFFsAExm3brithisTkLhVeQ29E",
  "key17": "63BceiLhckhLm6Ho8xFKqnbjzMqA5yYieForTEcomshp5tpnPZQZFUPLEa1kMgdngFkBp98sgZtsdg4uHbccpoBZ",
  "key18": "4Vr5ABd5J4hUXPUmCnowNYogKjDctCCzk7hViLNUZhnzmPHvPEPVR4kppPwxYtBj3FhwTzqder1ifgoHii4cmb16",
  "key19": "2Xg5c6np4iZpFUdYy1bNrHDzYWRhYbtg59a5iLzb364a7Etr7hxjEtyj4gLk2ykfB1wixpVjLtmc2Hyf2DsMHtBv",
  "key20": "5vMFD2dFfpeXRU8iDGwkw9mJfpy5hAwFhzUAgTkvbg7PnLMY1fWgjTeqYdS55PHTqHvmJQr72pr37YeAHt4HSoHY",
  "key21": "3McdVUm9qmgRJFyJvc1vBhS7Dnrk37B55vGNmpQrNLMPnySmBF5Xq3dttBknRe2vroKVjdqvNAvkM9n8FLXLY2Uh",
  "key22": "2K1PNcPCehWZBRtmBHJxHrMWx23UgAwDExvdmdsTzZ3fryfxynrg9LCecYQ8q2Qyg5SF7FxFSaTd9MDrbqcUHhcA",
  "key23": "2FWRA1y1o47pv273nAnabog4EjBj7ySzX51PD6QyewRB2xsKPFnPUMvuQXCfB7yDSmwrrkCfehMeJSEHhG1rNdRZ",
  "key24": "YEUx3H5VdgVhhxNCSVKuszcHRAkjCB5kCc882ybk9EqfnM6et3pzJitpbq27TTz2Y73Jicd1eebmshcVD6y84W1",
  "key25": "5mHCjxxmD55m66vWbG3D5USSkBFSoH1vTyTxVfif3spqUJsxUTT2tjxhuA9fcBaZPwZS5YHb3nKs8HH6Z27XjRhM",
  "key26": "3fSXtso3hQWYtKnW4wcjVKgZHoDsVkoGFRw1hi6jKhQeUqCtkCi2BBBc7XaocZ3Ae4yawjePssLPdLXN1ikBWxG3",
  "key27": "4pPjkunbcAYatVeKM6E2NFt79pKrthgZfDf96eKm7ePJenhX4tVwvhfpEqSazCKREULekpZcxL5CwyqgwV38LRr2",
  "key28": "4rFrEEss9w8QBpkqvSnJLxrZfT5mNjdDmr4XRxqY978ZzUoZUwtXfrBscKjSZRK2kzAJ4FbvNEyWaLmrdacDkRSM",
  "key29": "26cx3zJP4hTPLPb4b1ynkz75MTWD8UMzcMiXPmB2FodpVez2omXHt42hUngWzwnE586sg2KFJbyekdz2AwwBW1yV",
  "key30": "U4iCsASuAuCqJR9XjaEsBKe7ZkYT32Mi6XiX32ASdXG9qF3ESNb3Nm1TQJQyFib2LNKaha2UJNqHH3rF6TJ85UF",
  "key31": "4HzYzjDnzJPtb5rQmZBwUcyLsT5QBSMBgLoa8Uii2GNh7Lx3mx5sbf5P6hhAcBrjkbPSGfa82GjBSg5AKjjXaQ8u",
  "key32": "39kf2hhWKtq9hHZBLxJfD5ZbThLkZ5816pNhVah38BV67CovmeAgai4pT1u63Z1YVfExQskp9pbLwR4qKAxFrXvN",
  "key33": "2RJwdCweVueJKig2BhHAiZgkd4UmVbE6A1vadU9ZmgcdPTTbVTib3kJ5oeAijRehgyCQwv5Gzfx3Xmj3beFCxyrx",
  "key34": "3z6WEnY7SB8huREBM9vXwMgFVAjvGDL8bY5B2ZUuZomDSTLgxHgQ9KZuvky1KcuwqyCNwVZPyb74mJi5FqKwCqbk",
  "key35": "4bZCr5yTEoXz4KjN8D9LmPpvrEb7b1AYzj7pvuqtdNtzAepkXjp7aea7BsdYB8PtvN5TjEtWjWkqGYUP9qSZx4PQ",
  "key36": "4MMetjwDy5ZDw4VddBLHjccjqvDHkd21xxuYjtSvXeqVjtvbvXexhtX5AmSrAMgDQMctscYXMKvy2uswwHScLqtG",
  "key37": "46g8n9mTSgME57rucEPnNfnVtbFPWbkH2aWNVxH37KS1ktBYVWySChZdd7FFJgXAcD4wkeuHuNqDem96ezt4P1mP",
  "key38": "2yNPFY8EKTXALTKKNBt7rZDudwe8gH9vCUUaApAUSCNWVTEqrdQRR8ksKEWPVdVLMxJ1C8rg58AHSEdaDSRdBNTC"
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
