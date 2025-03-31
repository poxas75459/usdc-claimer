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
    "4NxBEGmXMJMisgc7jveiVZPT9Lf7LgJ6b6MXGeyDi3mbC3Mmt8f12XLLNvYxkZvakqotJuWZB6whJ5sE3n1bF3aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39fLURETjcY6W4UkWS8p5V28Pmb464cXixwK5GnkcCQD33HEnLyGjFFpQeLkQ5ZTe1h7rpbRjuCigWPdTwYx9bXT",
  "key1": "3mseg3a7FaHd9nwsd4fweC6VCkvhCdhoHmn459tU7AEchrSDG4ADYvJThaGWDrorxV8LPiFULiNH9hYcXFxXfg1H",
  "key2": "4bGJ5XNsBNiu2QJivdAFSQvGftKyrk1uzVjmRCUHH7ZVKfM3SpAESppVUTbWFHWWrZX64jmdydnGutNohxEoEUUm",
  "key3": "rPRCx3VH8Lr1WbcbjYvukQN1bNzmvq5YE4LeKwDN5wssAKstMRMi5CMY3bT2xtYHmtMdj8sGTHBMeArtM4yUwTK",
  "key4": "4wD1Q6DLtyiDxJJAQQTZHZbMxPSfmhCBJSX4p3MQv6eJ7oGc1gQphbkEJtpvWzyM375JDBvsURwSGpCB2XwrxNJm",
  "key5": "5MgXjyyvweZiZVvxGzLHAPA99B5y8Dwjp7ZPTUe4t7iAuxop98ReLMLVW3CFaGnhqsVMoxie1vzUbXa7AYQsd6WK",
  "key6": "2HhvVKnvFw91F3azrB28ZChKEdsZqZEWo2VB4tEhBw8nggeHR9sbenPwbKQn3SepoDWmq5sSBwUWSDmsQ2KHj66u",
  "key7": "oRZBi8N6QDgHy1y963mUeGe7ikcr7s5BB7xzq3AjU9nwkQk79QaQnPkgcgaMRJvgMX6xgFFqsMtFpkmYFBSgbpd",
  "key8": "NSGKMYDmdBw1dBuM666Avpm4FFSpHKZ4XMKVSfbLQgQ7skjCyeFGGmHdTkYHE19gDohsKrVZ9Hq5EJpFj3BogEE",
  "key9": "FEX8GVBMrugNowA7E5Nr54VfD5c3ZD5ykUD7R8SUykhZBnXSUSN2VmDLcnuhJNNsFv1eSrYjP7y6Z6i1j9tijoD",
  "key10": "23thBr6Ec7r1AaZRCe823SpQ7HjXsA6M11CMoE2naXdkpHfNMqwkBXmUwWnjxbVQBfFMaSu6k8k8YJHucUBraWGY",
  "key11": "4oJPmtJdBig6C7zv1LM9HFU9sNYECSfZZHoG6Vvjkq9RvVs8LqRxEzcEZFKzsJ6maS6C7mQUR264gUqvopiefexh",
  "key12": "3LuKorH8NFBw95ANVnKCtCch5ctM6jyG8dsADppiAVFQF7zpNwMDzZbfwdDtNWPv12zTaRX1JBUCwbganDWbi4sV",
  "key13": "2LSeENDu2x8QYbNS16yjkuiRcnjkW7AoguaiT5xjQCrq3pMRtrxqspe7x9yHfdvoznUgXP6NGCmHqSvBaueoMSat",
  "key14": "3bPtpnwco5WSfipJTp6EhuU22jZx46b7UaVJezTrVu4gN2Db32eQeogQktqxs5Tgr2yHHctB2JHRQH2ZbyKgrCV7",
  "key15": "2MHnyfYU864GA2Y7tT3ufLkzrSMoEVpZmrTkYCoKq3jhdLoTGSPqhHuga1DNysq484pmQibBRums1TzDA1RwbDcq",
  "key16": "3yRHTZMChWuqSkxw1E2CZohSyHnNckHJXvmTcFUaTq7ZJ1Zr5WhWvBtskaUDV4FpT1BktpiGfbMPvQdiFySKF92N",
  "key17": "4scNHsEFFzuCffeSQ59M4ZWAsqmQ3Hp7CFAQRKAsVCxZ1DRN5Eus8hcR8dq4W6nZkdziA3NzmHmJFfEcXLoZmAqm",
  "key18": "54qW41vcbELL6LPnMFiHMxRcWAPeM1ZEotVnGafradHAgj9iUu6XwXD7kvnQSFqh4mdRjsVbWESdW3rA263jmcox",
  "key19": "5qhDrX1cuC7bhnbp77YBSysi3c1kUp35be8VtqXufdXLAQ54sv28d58wg3Npz9DamHt6adjcC2BNuQiQZBHomtme",
  "key20": "7wfvHFCYtXTtG7GgUQfoxvS9rnr9P5H6qGxoydABG6FLdVewVnVtPscJMZgtCJfAjuoYjMhjuE3GoiJyGa5nKYo",
  "key21": "NTTtUHDJEEZHEyn63hsbYg2DmxLA8pfxbTxKz8e17r6h7bnL6JrNeNY2wv65wprLo4p5HzRjaWVaqH1ML9xC1ng",
  "key22": "4WZaf3n5H8Q8Yt86fvXApLNddR9KF8cBwJUgDSuAivnvCUHM5AZCgnzgqmwZwd1c88rfMHdCyjYdU5GMFN5Md9Zz",
  "key23": "2duktFy5Tvj8GPPvXvoLhu9dF8vWeMFJs7RL3USW2LcwaYx9Czr8KsUChXVAFxzHb93n2csZXnPrcZUe4HGwW4Qq",
  "key24": "41V9HJHfLiaXJQLYnVfhM5aE5cFDJzpWD5MfCoAUqZs76GT5ewTwFzAXfbRPAG6uzEf6BoZ9waH667kiY4a4S31t",
  "key25": "4y4YjDZ4K3chQ2NViobRLNskVaYFFCqMrWv9Rjejo2E6WQtGwXiugM2oL6xUqCNB73iiqeNsvttkhecvBpbgEctE",
  "key26": "27AU47T7UQ4wBaLvBMePYwqRWuC8xdGbsfngf5ubwM1g1A3yBsyNZWjsPfJab64H1LrNourqZ8fpqPanUwRPv3k8"
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
