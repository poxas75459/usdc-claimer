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
    "2KqSYVvVzY9HTP3bFnmz5uE9UfSf3FNQTAwPALSiTkhFjgDdtZsZV2fP4Rea6VHcbJyJqvfZBd6DzxJe79WhSr6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGCPxMsaE28aGHnDYRYEBTRLkVBBuL6TN4gz1Pyv4EGCao3hk2inpWEumMtF5EkmrypV7SMNsM3DHViQAyyE21D",
  "key1": "5hYPnDJuThkCHcYxowUfCo1MGpiEsye7dxtDhyH1QppD7esezuzNQk8Whc9trnjbV2icCKEeTaJ2w1SaunnHrPR7",
  "key2": "dnonKAf74ExEH1eDyHhNM9CzSgFaZLDoR9D4WdDoYzHVYJFbrgkqHUQyW9d62Uy7ad8MTHtJkQfyRkXnjHPgdXJ",
  "key3": "56ZTWVwQWSxVr8dbZNeFiubPsobKpLfgW2DGA5XZvco9RHN9Gif7ZYRHnBSWemQauzW6HMwtjswkNiR6Uv26BGwK",
  "key4": "3m3XdKTrLi2rVFZ3kn2QDeaHSHd788AN9fGGDQGfPP7DuxrmAcravUbUuzTptig2ZY3m37RxV4ZKeBfNBfzuQm2J",
  "key5": "2EHJKkzMtj4DbvMjskcPtUvmm3tUESVgKvjc64UQycmzqAuVvY61t7FW8narFmhGR4KKrTKtG41w161Z3mZf3bV1",
  "key6": "AWpkfWtWnP76wsdy6s3aZ3j36mHuYcQQubCob3sBxFKsXevohE6CtYKdjxFydNp179GnDQUDguGTsKUTHju1f4E",
  "key7": "4mhq97rvFoZp2MRi5xWgKnCeH94KN59V2RsmJbRByEmvu59poqJ2jC2fbqTtrjYRyZSkTZcvkdYvZQ8LUzx8C2pv",
  "key8": "288fa7ieNCzMdGS7SRsq2eSipqYt5HZzKAmAMU7sty9har4LhNMX6MpXKXitF3a8jjdTWFBWb2U4nPDHtsWWZyFR",
  "key9": "2jJQ2WPFiLZoH7MMzmden6xeoLhFNjXy61rF3V1euT8WvtKcqkSp2GcR35jikfytQLq5HeSjqCXhZu7yf4QDd5h",
  "key10": "4XqiqJtXC6J4g4sGd6WHncrkqzVnxs3KtCqG5pJLbDLTjaCEuaLhVffA4KctjrEbAiNfPxgnTcuueXUvny25YUuC",
  "key11": "2zaEgp1DDZ3mYo9Wt8MhBuMYfsZj9pEyvmeY2vVMviyT6uVig7uvRHanJjz5txNUaBF8zfjuFbCQHRcpzuAiuBAS",
  "key12": "3fchpW8xCpEiiS8WDZi3AzvXvNQfqAwNqpRtSEk2qLaCCFg4H9sj6VMa9PXgG7gCCbpmb34BaTQxwNHCpVKqTDr3",
  "key13": "3j6TpFNQ8qVNfsGwmzHiZbd5TpKkaH5UDEX25P9wmAgKopFMAq5ZcHxf2Y8x55soUdimCPzumz8zMiRTayqhzcS9",
  "key14": "QaawmLXCughxwqBRJbTe4EHVqeJQ8dueragYHdD7Bm375NbBw2YLdFUwC4JNT8FR3LgBPWf7N51Fc44hPr7r3Gk",
  "key15": "24wJNZjTv9qT9TeB2QVTucJoXnPBKLCsRSHWj6atWa2wxSJgxTjHh3fA7oar9wwfGn4idQFpiC5ycWhH6S6d7b8k",
  "key16": "3fQmpZJjLzQ5FsXAPy1fSfy69pjWe1Wk4fqeMjqaanU95oDsHRqwPkY3gEeD1UjCXLkvbVokPoD4v1V2mctcPFJ5",
  "key17": "Cs19b7spoStTJVwymdX6NcTc17fh8v977yuZ1rX6YDFYSPpCKybSD8yps155Qu6hGbvpYHYvXHx6zR1KFV7wuqj",
  "key18": "5rKvLduU6KwQupMwPejEMQrnvRzR1VfPHxq3tX9SqQt5MM1Ec9Z9SLps5re6pGMr8bFYk4v7Yvia3wD1m9hg58XE",
  "key19": "3v7ZBFCnU7jnLno7E94gQ28Xz2d36tc4hAA1vQmCYRPFWnGEdxvWz3G5Ld54n3ddncUXjmYJGP62jsaQZmAnyfRf",
  "key20": "4PDSuTFbVMFaLdRqu7ymx55AGRaG3Q3n5eTkH5Cs6dMb1xHgwQbF7PUsV9cqNmcGrmZm9novuQ2ppteCkvyM38ip",
  "key21": "2KcqyuRYKzP58hBMCeN347nZZciNjqo8gVV2WPjikFWNrtHjrAp25XhVon7sXSu77wbB5FuwnXKoPzCZuANHdAPw",
  "key22": "5nBTSheBi1PogsTDrKEHgPBt4ViwJcrTymcXSZusx22vEzZby7oTwi2S9KwMCsKMLS8rTjwFrTTP6XsnxHh9hK1T",
  "key23": "3AduUSicyfKwbhLT9t66pYnN9SopnTCkhoiRhBymq55tSQMPVxLoXCsjRsdwbTzS1Gs8f125X15xX6bJYw7sTrUv",
  "key24": "4eY37wre8HDdfc6P3XbDfqgb2tgJKEtZkDf7i4WYpP8rWxnUX8pFNb8M33k4jc9iXiHSArLJ5fu6zpXyfQJ2TeY7",
  "key25": "45nkLY4uHEgrLhbijXcM7qyJVjyUPZPpXc2m76J8LfHmAs9dgycnkgGSrWVJHDfcuFLJ4ycHMspJuSx6aEFDwfwp",
  "key26": "4xzn7CiCkUnWBGxrQkhYyAVd2TjkqvYzEZhAoTZ3vdJjoGZDKmJFwumRZb7uvnAf1ChziQmHU3bLv6uq7QNKJxqM",
  "key27": "5u5u2ScG8Fj95tLWykkqMoYVS81xB7LhJH8UBoQPFRyB2vD48ZbvFETQaa4GZ8kPNtr8iXtuYEp9TkGZad4baPmi",
  "key28": "2SvBsDrYEnosp2DmQqvnA1bJyAWvbEunbTV9DN4BYm3JRKVbtU7xWmWdtFm8vE9tnEQdKoerk7dDcgzwbhh4kF1p",
  "key29": "2HRwWvTLg1vkgELKCmuDgwaYE67tbuhZ3E1p1k6JW13LhvUyQ28rmddCPcqV7SpVpQPt4snzHn5yYaZb3rknYnXK"
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
