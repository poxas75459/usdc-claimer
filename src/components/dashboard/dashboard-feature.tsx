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
    "4st4M4oBDG45G6BtoEFa3EsoruiUBtPUP9z1EqXtJw6m33viKX7E746Ui5Bc5CSz7zMnhhegCM45Xv3Zi7aaPDXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BXnYpjx1R1vXtA18eLCqNCQd64YM5PK6CguXpkjw9svZUzvnGb9NoauNUju96p4yZqo2hnsGGHxFY5WrCGArFDz",
  "key1": "o6PhxyxbXQ9E6iDhbaoSzyMCExruvJT6a3VT9PThcxGD5Tx9c26DNiwHBZB6ZwLGttWZd1VwC2UQFq8serhmc62",
  "key2": "4ATbmohF4M1MUUoKKFpBjLNRznTBKoB9BtLzxiMcfwNgEsEdng3Ytpnhgt7nis86RemQ9r2j9MsEtnTBXKn6uEBz",
  "key3": "3WrKMDc3b7hLTMjPx46W6FCYW1zk4S2z23n4Y6UjwphC5jpvGoE4eZ8TaufKTTSUucLM6b84heKF3xyJ67gJAYBV",
  "key4": "4qYxY9PESrzfJXHo2VyxAhp9ybPZpPsQ7pLXbeWptBvEqksZ39Tr9HyEbUgFqYTamttpiaCUH35gj3cnATWKE2aP",
  "key5": "x3SWhYNgd9ptLQmProAwUivaqkf54JxNTWnCccreMtPAyMDzq2XMZAWf2ZLbdvguoqcrRCuhmfXwcyLBzQ3wnxm",
  "key6": "4P6jCdbkhmmZkHvCqYLiReNPbS77sVPzf7TgKqhT6fUm9Tb2NLhFcjmgwoU4tPc6kPHeL2tTfbiaJDuSw6VmzscR",
  "key7": "SFUmigCULajzow5cC54rN4AyXH21qCLnaT3nWZphJELGeCmXKbrfujey6xd4iTcaRM6rtQHNjDurjzqX3RKHtSJ",
  "key8": "4ofaNTGwfZBS24iSxZLxvwGawQYXcUgotPfYxbfcYKgGtYHotXavZxsGXtBgbskkHWd7KPJZuqpDeBXLjvUzX5Tj",
  "key9": "5odSPruFY4agSnrBQbaFqscU84p1svcbaNxZn1tuVHFFCU4pKLGkUweSsc6EqFDmixECXaPxrUAGBD5Rt6WCEAy7",
  "key10": "5vqWTEvRtJ642j86GDmbZzzNGXTY1QJB4pYCXY8UN6DxyXZrPNGxWrT7aBxECqqiKjwjW3iTPfbygEL371xxHYij",
  "key11": "4SEGvss7z8dKazt7iYWS739WqFaG4HUxnrm35AtgZkxv6v9kknK2YYEo5GGHhsqPiExYB3GfXXFwQz2rveRwnrTZ",
  "key12": "5VJeDbXxNPAJLcy94wT732XzYLH3sbJUdoTjx4qDS1N6JLEJbMMJ3HHVEuTBGgYsLHqug8gNX2siwEeBXCitgC6n",
  "key13": "4vbMhR7UqgbjgmnfsqKfRud6v5X4hebj4BNX35ahrr7zANLY6sZsizi7V2hATNUqMaeK7ZEhpvVfz74Q6nsuHDcW",
  "key14": "4vqtNH6nKpFSGhGQF1RCR7YzfcBfu2oB2CWc4KsGVyHwtkoV4BtEv1gEXCyBy65Bk6iB7XX8otrg5YijFNJkyeVx",
  "key15": "5s6WseC2KxhAR6PEovobRzna15cV1oN5SoKdXF3PVK4WZcTj6ED3iGvkC4D77DoMqvViBpmB2nnk9FzdUQeKtGVc",
  "key16": "3rNMdc7BATUpdSAfPjYg6qvRmTpH5YDxxuVQDQ6VoSF6eiHi3JUoDHNbmoA7YBn6X4nJcS3NhQnPPDPxtWKb3Myk",
  "key17": "3h7ySXrFokexKmYjycLRQTbBb1Kt86fg2BhGmvyBue6oCT8X9kucxu8qpBZsKzJskZPZZs1EFCp7g9eFRwdnLtfw",
  "key18": "5Mq3UQv2mgNsrvw2GPwhSoztayWjNnoNAc8BkGZgDRvS2RHCfsEpJTm5Hiijd5YBDVLLKMbvttFN8x5L8gRspm9b",
  "key19": "5AP5jo7bcc6rhDgDwTc3AVJKEojRwk1s2e7VZE9ZV6eDftswoREgYTmafjwmHg8snscazpyDRGP3RLbKTiUVZ7yA",
  "key20": "3HxSNT1fJj4VxBtLMYokER3BWbp3ngzc4nK5Caw9PBMM6nEf3pMSb5bGFTfpa3cvFNN9tE1eeZdzsAKvJfWXwh83",
  "key21": "26ssGaitmFFcz11TWzpmz4REyx7ZWt8wyu7fFhkG3SyZCMsnAFNZjRi1JJeojpbpWDGDMeFgtWWwPQhSKQFVCKo7",
  "key22": "5FU8C1bKSG1ufGfQ2by5Ns75WEbARMR1V2ZyxWfkndHBgWyFNh8DKaPGq7VT8KouGjioCxAX8PqWWfmsmrE1ZYVV",
  "key23": "E49dk4ihbxCkD5BErN7sBR1KfyxWiQz3pehQt2t2BKBnWWrvjfAaAqjVYGZpG82DGitFsPbXz2HVjxWz9Wu3hVU",
  "key24": "4TT8wYetzaFNyYnqctRqqbFsWDtrewSh5gGq6rfRp5PWVw97R5mVcHij1ZyvrGiREv4N6N4oAM1hLSF6nB3pAuPW",
  "key25": "u4QGnCW5soJRa7QNErs9qgpw3qARVNvfewRUXofbVcHLgvkhFf3wnBXDfpTWueJK969M3SNhVKEYRoYkdLgPLHu",
  "key26": "4jowPxE9NmJh96KDx8TV6YoTZ9FyZDxJeKKsYEcmw6abQxot3htNkAmQ5juQ7ui6kWtAxqdkiVbBt8Pd1JqqsJUX",
  "key27": "5sGyUSMh72mkkiCQZSAyT9EPcXBXNYqY1oLifh8FLxfHdGEbdWjU9CNYgN2kRbRYx8QEe69a5pwoWn21N7o6tXqi"
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
