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
    "42kFYkSAYcVM23KRb9v4QqvgX8vnoxEbA1XtL8oVcjDvRaGWktkyHSm3Nft4bgX86UN5nnQbP5v1uLY6vPPNG9eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVcREvNQ3wAvWgrwFRChv5PNB6EJwjTwfqU6N3ruTfpwFpGpCw9dcP9uGVkeyfxKa1ZFsdBka9jPfUtcdP9RNXZ",
  "key1": "66CwhHeNxDqgXNwDTX43z2GG7DoibysUCV59ztYDRtTUWLCM7hBg51bqLKEMp7eFKEHfdxyCzSE1Fh4bSToMeTrk",
  "key2": "2CSNqXZXP1pidJc4P8ehCxSJ23Nv1EvoV4NESAWQSyyLoPKCFbwqX5kee16Yx5eKEHntuhhUusztYzcvXmdo75iy",
  "key3": "4KBgavrMSTMqaaNMY5MbieKpRbMiJN957GW2nMsZcEGcCUkMXATHWVXDEmmsbYx5ddvAvJ7rjNZ681RbpVHAWPZy",
  "key4": "3BqQUEfVK96KHk3Z5ahRbRYXbJx9Yc7eHd8fP83caFn8xnFtiKYEfG4wvam4ACEUBd8spKRsYJLSJr9sdyJGwV8k",
  "key5": "4oszh1wWwN1vRV1W2jHhiAsusGtBbBq9n3x7XqFcHyAieQ1ZYTWzRmSfC5V36yiiGXKAp3JC8mEMyMcUFV9x3Hq5",
  "key6": "3ngtfHE6eBmEPW9e58VYYk74fyhjzURmKXJGZqcymCp8AKD3ve4u5jcTixwJvZ39h2CZns5Atfbjv5AGK4FUvGLP",
  "key7": "2Vxtx3QhAzXe1VParCFt3WEiVKu6BNpNCH9taEGbi93nWnZ4CAw7B76MAtFWxdBLjp9kaoYinB6MwpdvfXqeUToG",
  "key8": "415oRYdPTg8HdXFeD1uNPrPFdnU8gVAWDEo7pf7W56KakMyTtVPWxHszuKyoCky8v6oGsMhKTQT851EmqYvofDa8",
  "key9": "2yoXdroQNTsF4PYSLa9b1A3WproAYCmv6xHNhBfBG6nZKSrp4XPbDbyhiKe8tvbJycL84MUFv1Phb1CVxj1EgFFY",
  "key10": "36w3S4EwQg7VVNeoeQK89QzQi75FFM9snB61TqcGrUAU37RMZCRa4wJYjp7Ky3nk1JTA4YgfeYsPqzX7kU7d3NA1",
  "key11": "smfnHnzyR94TT8oH7Kcr29YD7facjh9j7aMMUtTJ4wAmUYfwwSs7YPqqyUFYVhrTmyryTHiwNHtnXULo3zXufXS",
  "key12": "3zfPZKEsUVjRtyfEJ1d2mZqcb38C2tFc3SoxQa71fbQJ98ckTrjptXWaXrTnNYhuirr3yvxQW1vrfHSpGVgBMsnW",
  "key13": "5yfQt2nSQek9w2aTPXopa6Ht6VpPM1a1XBLE4BUGsn8r4HcPxh4Pp17nJuE59Ztmib6zBsMpMD5Vp7dR6yMhKKqQ",
  "key14": "JcFCQVoF7VRUw9MyECU8vrRbqfV8ZUKRG96M7Eq5s96KTEMnwk5Vf1r2nf21VBUHwwifndDJFdJ5swKNXjTzkjH",
  "key15": "YbaeBcEXyemKnfCsJjQ7Qv5i7b3USa5w3E4Cy2Qrs14fKfXvC1Q8pKKck7YVgqzo9VnpGbNSxKPnKzu5XV1iX7T",
  "key16": "Q28m5FDLEuuULgccuVTBt44F2b85FAPEkkGyoi2SMscDu5RLg3Q2TSAx659WnmXiGF53EokCS22sPNHmwb1d9YB",
  "key17": "3hYoUhvrUvVGpjYvfgJsgQhNt7vpVbSgH4PKH159YqqeHqzy3gGmp5NNcbRsxoeBf96ukY9nQnQ7nbizFQXvMVoN",
  "key18": "2L91CpfDUKnGn9QK2RBH8m4sYTqTHjXrWpmvMLLn1vMM5oHhhMwozJzveVx3nSXJsmK8gvPc8D486451k4SnPhb2",
  "key19": "DYrbPfHrQMygLpQg7ywy3UeGQK1Rmh3j5mG1XkzoKxXtnZf6g8ExMqps2M8K3TKbTHtjzcYyfwe9crGiBvUmfLk",
  "key20": "63JZW7Tuc9mkffqLR7f4T1MvuHL8MAUWjFaiDGKXZzYG7cQzc747nCQskBk9xoCAuvogcGCPXHC5KSZ1yzyvx113",
  "key21": "4fizAyvkPyjUTtQ3cXMSV1ftHu93xg4feisgb1QeB3cXUHrWo2KVc74c8Ye3Sm6MPoU4WRHJjQMve4Zc1KiqtUsR",
  "key22": "4ZihjFpfaXwoG7oxiFxKkBjNUmR4Um7DUdQcDa6ejGDGVQ1m1WjHSQvxqZu3ENC9R2GBFC5UyauPSUw4EuBsuUpK",
  "key23": "EP3E6QR1R6g8Y7qnkFzM6zafVk39uY6nsh3ZWzsXRzejKB3Xqi1iHyRQ2h4jRNhhD9pHhixkkY9V3HEiJMU5a5a",
  "key24": "34dVwxCWynz9VYMvKHC8R9hsxhPb37cYx58jBPBFsc8L8gpjmH8McHQb1mzuVWqadixSaSrk8oeqUVugiVF7iTca",
  "key25": "39S7yaGtQraU3XkgzxsPruQM8sAK7nWgdVyDCuy5ZaQn7mxTZNakncY7MuJDXXrsqAdYBhBGDABSJuUQaeesFnb6",
  "key26": "3ddus8vXWmzvCc7uE5Xc7mU5HP78HwKxaW7Kn9RfXvUeN69oybXfnsKGEEvJU94AtXQzYBndzGDU4gWMG8HtSfsa",
  "key27": "5tWb7KsGpeNoGh7GRvKqjLuVKGdtSZdQLS1S9c2TcrbewJgxHbiwe1aJcdRuwoYvTyGvAxkZNk9oLfRT6evzwLNi"
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
