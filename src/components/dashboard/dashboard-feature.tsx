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
    "ChhkFXcT9mqS9vu8bs2ukbn7hbJLZ6KTqerxDSRQgXDc4bBW2hGrJyZQwPUgituQav1zfEcSTBRvijgATVVq7Jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Pa3Qq2QxSrRTDEdXQPSYWu1WG2Qw7nXfkw7LNDSMQnpcKiL78wptGbrNeT6PV1YVG9nBk3dzvNLUDzRpgguHTK",
  "key1": "2KviUDkN5v28MUYmpnob2fzG3RPBL2uBrFAh6bqTxBSbUxzTz1LMpxGp7ZZ6Mq7cWm7pR7QJY1PKtLETnBUQpYRv",
  "key2": "ETKa6JppctXZFosbo2yZ7x6GNHJ9BxsHiZAvRfhXmiD5V8ZyHursAGN5zqDp5Wj3WBSeYa1CbNayF1uXmwLZNaf",
  "key3": "3GpHrANNDLMjyfY4xGiqsvHxPgZjK6YSLkLU9WVQ4eStmgpN77wo2engnnh3pXp2kaRyptTK8odTpZT7R2r56CSs",
  "key4": "3nKEuJTpvs56xZaynA4GbajsMjbikzYthyetHiACyERSLdfbLRnETHQgGdxFtEZKmTbgD4AHj1vL1nZ5N8xPnpPf",
  "key5": "5iym8WHgmAqEUjUQAbqcQSSmzyqPoikNLPp732dXbtGeHZXUKCfKGtF8PsCApUtMjXJcJwde8eWUXRC3uYUCCb5G",
  "key6": "4fBRucAULydK9PJ9HAbQRai2mDaRBqEauRVEpuR2FD2PgV876n9SzrLagVdSxXyXP5kHDdP6yPjDSZx9L3stdC8f",
  "key7": "3ut9hdwKHN9Ri5FzvcLfXCEbLU9r37a7wUCwtQ5weY6FRbyHdZVDS1ibp9yPkLetyRmeQyBvvAuNpJ744qutdhAE",
  "key8": "5cckq7g3SrqM6UsZcyYCEUnd6CTcZ3pewfaaKSTNdR9oSLYN2aQJwWUyVtuZftSBicgcv7P5qBGobPQBRTS5huyy",
  "key9": "59RyCq411WeuRb5BwLN7rZvQxec2hZdcd7ErxWN2s7shiGuqhx2oRC7R5sECf9YFUGmNmin8cpWNanHJhEbes31x",
  "key10": "NRwNmeerBCsLddmSZV3VVTKK131m54Lg4Mt8XdUwv85Yb6bpeVxXmWcWt6aDuexq86aCmw3hdvQve7T5tkrp24F",
  "key11": "AxyN5cEjyco5HuLdWMi8Q1341tRmoeEk162F73Gv7C9VWEohPKkUpxpxk7TEHCE7zuZu84CaW7xx1B7yeQT9Y3r",
  "key12": "2LRpnDW7eWFwCc6gojvn1RonokP2CmnuU1CAo9vW753qfjHjYo66bf32utae86yGsqfCeRqqgWrhZv3DjkCB9YTL",
  "key13": "3DoLRtY7PsiPZfBLbGrHYgso7B459154RyB9HPGRcakcw2K6xKrS8Uux1JxMKxW2uTNmXbtYTEPbz1Kgs4UXgfaq",
  "key14": "35PDs8jcVXR6MTywFALJuvcQMs8wRrUdA8z9BQNVcQdsuL2hsugyniCANFGZQkoAC7dGRkHfdL6WRrpufys1A4Dy",
  "key15": "rhhmvuGmTeFoNJiDpmyig542Wmyf9Hx2Sy4ExeXoSFW5msoH6TV9wHAph3fBsFfZAg8rVzxha6wCd6WqEQ5qw4k",
  "key16": "26mYXanGBvYih8EB9P7vB3Ns3awEqgQWBjeH9u9YojLrZC3KjB9BWxBUAND4Y7jCuckDfPrSxsHjkn437fPkFh15",
  "key17": "5Ec94MnH7eSb7TaSEMDQsVH2gUjbn9wZeeUErE6RH5aTvFjWiX2ysdHjNpiy2x8B4y1JpBdmveKEgFPKqz8HWj3y",
  "key18": "2haLXAvY7V52vLmSGPgBzq5NjSRJn3Gq9LGijcK1wimUckJ6Q9LCPKr82cSDBewH1noT6YZFryLesX6mNLQ4jvnz",
  "key19": "5ryNmAWXq356eBRDYDKm6q7dECSqsxcxRRrDgKKu6oyQrKPBp22EG9jN8gxZx68JMRg1dxPAWTrKnqMJc7aayD6e",
  "key20": "2eLmJmSi2EdgySpSdZHxUdXrqrobMfEt6gsAtjvtLRSzeE9WT7BZ6dwCh3eUedHzwWGsS4rAcjEjECviC6w34GCW",
  "key21": "2KVoY7dV1JJ9pdRjFkMvCga8GDHBDVUKvFZKNnYXAk7F1kYfDATWfPV4RSSEHfPQpBPDc7xWitDtZ1nQuoaCYrFT",
  "key22": "459mr4Q4X55BfBaSBTD763EpKdAm43i5LdeHXgJx8tiujeudvgV4JicsTWLtV23bRJ71phChGcbymHQmVTRCmAWi",
  "key23": "2jq7PDpJB9F3dhNqScZDJUAxHb24Sv6C6QhFD6Zu1WqfQZQDVRrRzPJSJ2HEjfNHxsAwao8ShU1AheA3rs7U5dav",
  "key24": "ct24RqTQMJ3TR81wdymWzBsTTGghjeewsgMdBmW4kuqg9M9PJh895RPp2RuknQVrHXkTKbMeB8oxiH2a7YzJKZm"
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
