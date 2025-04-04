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
    "4FSE5cqYpYMs4XfsCD81fyhUr1HJ7tm4ArfZUB9AUfuuAAULLVFD8WgF1RrYX4MBqVkBAQSHV93cx1YA7XMyEAUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzSc4n5BZt8mkhJpbu4gFx6MR7JJUDJAHUn4UwH42zEQzhkQYy4yQwC9vUPVjmLR4UqU7DJHaRNQErqshcpMQui",
  "key1": "4pXjrUh5JeHYpMM5mUgCJ6S9TUXJkB1PhqFGqxBQppM4x9WkAQs7RjWwnxZtpcu35U1gYQVMgnGuCbG764fgPYTo",
  "key2": "4zEP32AzLQcWuLkNaQwNhqLP4gWMMiCT5NN7G2SN8AtfH8DPJCRzaLqSWTbWan2B47ZTXvCXiPxCbiMr4GokL4ML",
  "key3": "3F6vfnr2dthU3fNYtK7QGuFkQLiAf42hz9YiSYk7W79yw4rrfxcDdbppefv9XTyvd4ZpTcL6qRWrPs7UcFp6QZWQ",
  "key4": "47Rz4vb6bmDcnBf7D6ZYqgLzpQNzEhh8EwTtEPgeCfhhDqp86Xx38Jm1zHFzhb1UaAy12LSfV3eoZanpWjRAHjP9",
  "key5": "2XRF97XKSUFNgLG25ZHb1NwGYLpYD99FBBvMvz5FH3ttYZLgp93weSwG398FF2xs5Da47Wtcr7J1UQtrMjjufBvg",
  "key6": "5tJd8fB931ouVhAAr69GKvmsUuvK2PPDwXmtaMG9hMMgNqfWvNYZ3Bf7qM2J4Fd1YScHNuVxNY9vDfAYzbMGBbpZ",
  "key7": "2xtZHYGHS5Xnj95dZxRzvoRgJRJuKc7gjeZ4fstfDg3c7zwcEzLcpwSS5HyQXAuw6DmwSdo1P7EE6KMaxkasMZp6",
  "key8": "3vqyRmibLb34LsDFqNf5Jq4AUFDKZBaMJ3N8DpD6pwc1A3zXiUz3SEVg1ATKp1NEFtdmpkaEMJR6RMKbkQgGFQSd",
  "key9": "zM1ER7ZxwoTuTP872N7fD985dc7ZgWW31yHKpRgE4hSkdZpvvVtu7VZ8DkVUCvRcHYpAe72Adgn17bnagwqtsc6",
  "key10": "3n8Ep63DS4evCjp1Hr6o8QfHYkgzd6gu8bzsu4odXM9xrQWtAdxGN76gdK1cxdjBmALhq13npUKJDasVrAnEghNm",
  "key11": "5Vr8mLt45KxCgBK9jKe5EktVvkB4oDAqDGnbREmHFD8wgtWRfLoh8rnGMuoA2Zfgt4hjyM1TLEuBFeth5mkaTroM",
  "key12": "4yhP4rJSCHar8aS1zAXzBrWRb7vvWA77qfxH24nS63zBwRPdzdFWiFgesQ9wAhbc5rKVLhNjb74v1jJ9LyHFpB2B",
  "key13": "2ihvjt9kvYYP4Z4iZ5MbQznUq95sCVuXVDKjxtLiSP1E6RPTomnhKbK4YJcoqYDS8ScGNELE62bA7AB8APuWMwER",
  "key14": "33PgdHK9y8fe9fbL5MY2oerKHCkT55LbhmSxLCLCa5EkQQcr2DU8oF5GXnLPf5f6PaTa9wU2e7bM3PzA2tCa5hN1",
  "key15": "2BNXyVtGWwPDTR2DisVntbUST5swbPwwbEdNtkoga9efKue4GdpczUaQM44cebaBKD7gzfUX7MnvBQgm4bF3Armc",
  "key16": "4HBWwtPnWdQxxwKgo4b5CFCxLgnoDBcxGQWug7G7NSApaHKhbydK4HAairnb7WYPv2sU77wRZ4TngWsrGKc5YQSB",
  "key17": "49RuN1prFr7MqxLsXHte1zMUjHp36qXW58xzAGiDtrHHmsZ735y7hXbgb1PSPenz6TsyA93Rv9cG58GEh3qRGcHy",
  "key18": "3UVZFR4fqoWFyEhJ5KqjGPeWVu1QFLE7fyHatTnr8ogGWQZd7RHA8H3gedZeWMz9Veh9ig7xUDow2Eu7xiZ7ceRb",
  "key19": "4ZVfinuEPSStqikNEwnRiBos7m2WmVGuKiTpiWiuN1phNfq6poa5pcnowQNaSiNNeSw7JFMtZpHKP3m3BhnHf92x",
  "key20": "5ofshrzkSVj8U2wvEqVfRdAALhyQBPDzFhQiuvdvZy8fbPR33RRp3MDGY1EsRpSUrNbMc4TsbanvziYAMDb6hC6i",
  "key21": "2PYfgxkae4sXNYJcKgyDRatWMxbHgMWayQAiujfTQtm6cvDUznwA8Btwwj8DrP2bZSW9poBfR4y2qSGgtmrgUeev",
  "key22": "L3yqLhgemPkh52recSFQnEX8kThM7mYvFGGFCjrDqSThGsEaKtpdfJdy1Jt57554j3kT4DUq7fAjYRijuiZeET2",
  "key23": "S5EiUEVqxSM7LtESrKkLiP55ctozJhJeahCR7MqgsWygNeDjd997vHLeaLCJCtiTEm7W3o97enbWWWo7QErvLNe",
  "key24": "38afCccnMbZLfPZdsUGinCQh5uaFauAimAHYzNMe7LiFCTGAfzX8hdpXZY6JVp96MTi5CWa7WHM42nSPTyKtbS9d",
  "key25": "5ygjZDwPw8XC2rYvFbhdaY3jjTsCrnvBo67Tj6X4oNCbqyR7NLJZ7mKm2wKaw6mtRciYUrBPVrWmd57pBhxz7AXK",
  "key26": "66Cj1E89JZdH213KEgk7eG5SWa5r6LUkv7PmzbMm3Rk5LiviBNEeATSr4S8T16ivXH6pVyqUMCqpsmeZnY8Lh5eP",
  "key27": "5P6oGFPGJUZVEfAFcynSYBJPxGXzjfZJfBGmTeYeiFS5UqNoDtKzpU3ZT42FTZGEAR9ZgpBLAXRZh53simV6n7MN"
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
