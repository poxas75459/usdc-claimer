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
    "2xSXiCRgp11C7uEUh8fVN2C6qm4DTC4dRV7uQSDmUxGfWsvhWYrkBuvmyEmdkqFFRaB2yJmuHmAUdiUkgQsouYzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iakGFEYYsM9LwMYGAFXdZ8ac4iaTUAWNU3d4d6qTQgz9Trhp4ynL9Rupt8iYr1zWk6R1LdC6Cxgruf6JjmLzTtF",
  "key1": "5y4S5M4cWKVp3yx3qYrfDjfDHzyw2u9eWFBeRpsWpBo8LzL6sX9WbWcJX3cmdV4hqKQDMsCYhd2BQT9vjKS1wgaB",
  "key2": "5YoguqNvodf5knFiJJ5thZJ3ZsjEvFfcAjtfx6wVPC9ZKBGTF6tZjtVPQwdFGWrvy1bNTa38JdAyFnvQdQPGJkDi",
  "key3": "23MyxQQUYmZsqKLM1ZKtKxhiieowfM6FLccEtE1zP9zz7z5m4HHmrjHFjHsDXgbfGgQyZCZQ6cu9tmK6vHJC6GVJ",
  "key4": "4suBB9s8gb21TR7paJciw9bduVX5VgbmetYhMQBUny2BBUiCLKkkvdCgsUGFwKooR1VdH2tHLFr4SrDaCBN4RRDY",
  "key5": "JB72GUvqGrSz1NrX8YwJiDpPDgtLb6eRce1coZo1ot3ei2zm8CxZqX9NqdfuZMaA9sjvgAdTMQ4WUnt9UsgfgRA",
  "key6": "3cUEJLLz8VD35sgxLEGfsFaEmSzxbDyxegXKgCpV1EYnjvNWy7oxFkBkpJcS1VLFPkjQfVtVSPwGDKnkUQwxGzmM",
  "key7": "YF3jawfXSy9Vjwh7wdMi8Hydrwos1ZJrCYLGNkR3gK7E3JwntYJxc46XMD8n99M2fVZuve4oLMV14hTW39EeBq4",
  "key8": "5ZHshgjzeSNm2u6e92dauAAyZTjYcZsSJKwRZbWrTde8V8JNicShUDE9oGN8wqB1UqJEripBe5VqU841GyS16xJd",
  "key9": "7uJcnwqsrFdVvLBjxc3LgAUudnD8tdtYoVX9wS9dv1jtEed2FyAHjw9Y3DWCyAPNLNK8v8zAnYYqEEtkijNCazA",
  "key10": "2beBGnuoj64hUoRfX8fGfUFksL1TLre66sfd9RCQXtGf6jaSsPucyiMhrFM8Vc64qnZQK9vY87GxeWvWRBE1Kh7e",
  "key11": "4Xvh5uLwgdzseyfvGfw9m7VEY9CxK9ywFwuSM7AJcU8Kkb1cbwACheWZ55FXsGFwenPJ4Gsag5m6LwTypvt8Ssbe",
  "key12": "3xubM7WwaTByEficb99XER7wFGGFvqx4Nis5QMrVoDJWdwwfxjaz6RQYeqxp85nozGTJAg1Ap1DDEueFfi4WEKe4",
  "key13": "5tbucDuXPqwP9UqYi8iaD14QzsA81YvRJM63XY8XFg5pyrFUJSGoGRrbEBrqBy81215dxChDJzhSbo4MubPkGGDW",
  "key14": "znFQzGfgkxChmHfKDn2mnzpfZynEUTC9AK6pcDaWsvEGXUXsJZFQryJHqXthsJsA29oUtfrdw48MB4PejuxqAPd",
  "key15": "3S9vLyhGsroPqFpmitUadmxGcrp6fDi2hYpFgKTHPPBS5gcu95fYdZ1urwH91qpvnB46UPGGrWB5fYvmFnUmL8GG",
  "key16": "6QoCNRRzLuK6djrN3ZK9JPFrxYaVpxSktiRxyhY68BTWPFt4bsnJN13c4fVtHkg2HTZEozxo6ZFsU1XqvJnMQRY",
  "key17": "3XiYRVcokXhX59w78rVwwTYJqhku2gKNkAxHEa9mGGKf2dH47dBwJYG5GdjiqxmXWjviD1t4sBkCjxXbvTHasCuM",
  "key18": "gbDN3poMTBnLJ85W5fNR56qc1Q2nTkTzjbh2vPeSxEYuBFLbSbCy6eYAq2dwZkLUDQF9gSyCkMjhixchExoBdmY",
  "key19": "2oK1czr2YHrZV513Z5t8KuqcqQ7c7HGN1SYSHotVVMY7m2RdhY3yXMxXXSqg2EwUoSpESbP6QUtuRDnsa1rXRwoP",
  "key20": "5f6U2GEURQeGZQUsRLnz71kRay9zQRxESGoJYHN8wDkqiSZL1AZPdmjJoZT8mJpD2mhAxtqf2jwLVQLLjFEG9eb1",
  "key21": "53ADQcrUbAk4JjNN4Z7gPq5zEjWC4ap79V76b4Y5BQd8r2mkCgTZq5jNC8cjDpqksyCXZf7AAytmhmnKPZpkgEqb",
  "key22": "5mZh3kmJPDA7ZCBfizN3LfrokZ8gAZcUAzJDG6UtrVtrZabPfAwcJYiNUfSCRWWHhnDTSScAAbCTTnM6iRMVDwLW",
  "key23": "5pz2E96PRNYkAthzKRoEjybet2FokYrBrbpxMxrfq58EiYmxUEWrXJSNyuvvDaGjEY3dLVYpY8A1GYLVXPcheFbz",
  "key24": "4LY1Y7eeYrpXftKsv3gG3QzMghPaU9dduQ8anN43PAo9A4mSy9XMaMmFW3jz4tZUDiF9DxQyMmPLopgJZZzH1RsX",
  "key25": "5wSE2FQhvmxUjpQn24hXawwsaMqHWyj2uAMjtgVXzApab5Zbn8vwsRUQ4HQuGpnnQ64vGs9NhjtGKWagWotYkTk2",
  "key26": "37H5Bgha9ekG7q4JCeiP68DvHCCh9auf5AyoGYWyPSdf2u4JAbrDEF5dXetsUigJgaXZMTE46vYPxt5nadUt2eBT",
  "key27": "4FLndE2YS22YKgkSseJVDj77CW44uXpyYMqkAvz1BfA6Av1ZKUmBP9HTNjDvCdC3rKsjaHR3X2aNsf26wcHW74wv"
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
