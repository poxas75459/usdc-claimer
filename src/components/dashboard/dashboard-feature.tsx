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
    "4687LpFhaHCAPxRmwescAxAkZe1goHJrq36WdzjrRJryjYGv5M324zTEfACqJRar7XDZpfkPERcKRLG2yjk4fbTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434WKvCzW128QbBqk6bgwxGsk1jTvquRCnCwmnfiAyUffZb8f4eF7yZb7Q4A951aeYE5URY7uV2ksQgXB6Ci7dkf",
  "key1": "2u7AVKtpN3S4KWHukYAUUtxTS5eznGqvTNKwJrJAzKJ6QrYZkT1k4metmtJU3i9kshBucxZf4WUBQnc6W9V7vWfk",
  "key2": "3WArrEGdK3BziU4GnVDVdPwtg8W97KCuNvN4bnajtrg8o9twiwH5DeCSuYPzkqh5XHTbKkYjdFRqKHs7XyJ2Q9Xy",
  "key3": "5Pdv7ZAGTYmZHVxpzMrWEXtG4SyCn53hPi7ndhEdyytmsKeuSwuF8oAmTfCTH4gezbXp3ce8jzaT9T5QxDUioyqy",
  "key4": "4dqtB5TZEmU1cx4CCeznQWGfDFw5NVz8uRHcPLrzPGAFwTJeweD4CiE6zPECbeHxoag8ccxpusySVRuPGXk7fwTQ",
  "key5": "2BGEVsh1nAzi3oMEZFBhyjhhkSUXbUHCW3iV4iXf8M76gQjQGvXoRjRA3fm9uJKtPbWJ5JqFm6vMjpdJpGTFH8vQ",
  "key6": "32Yhm2QBQ2rYJBpa8r3r3L2LBafg5W54Rx8Lm2yLFxK6YVpgpa8YYU8WgruL6FbiKnaz18Pe5kfLfZycGD58EHio",
  "key7": "2xQmfjFKMwdfw8w8SQtGMUrwg9DhcPWx94za2eZGFyzTybuoQKdbL9A1XmnSjtdDM8wYPn3W5ZMaFkP5ZKtQGs2j",
  "key8": "5PpWAMVyqsrSMMmbm4pPTtJE5sPFyJew499HdSxbGkuLNAGk3fxPNdt4vBjjr6cB9bi2Y6dNuUi6YFXX6oYbmpuE",
  "key9": "3BHDWaDg95bqqiLCNoc8dMhhtkQRgdhzG3VgTHBJ3XhEy76os7bNJh66SmcssTxBu1SbMb4bkfdvAUcjV2GCXZrv",
  "key10": "3u1H4uGNizuDX3UxnBVuXe8YTnh2RMKrh2ovq7myfUpeuaMHNeGtZUz9v9cEcBzSZnmTMAsTd4rVtdhTmxV92Wu2",
  "key11": "DUbKEtwxKVbp3zdqETZDkkQvs2GVZfe7fvee4WuxcJc97ouedfhKQRPYNz5EydtqkZj3uDKEW7QypkyYyacUVbQ",
  "key12": "8H2HzJtvjX2gHTpKXNtC131beUCfy6tAk9BU7A9jNKFDgDqQuTQ9fKfVLdwCYsimnRS3gn1C4rKy1EPzii9aGTF",
  "key13": "5PeoXUqSoyqngDpWafR7YqJSJuyccu3eL1kqTTbozACXvvBnsxri2GWqgmaxfaAHiNvTyUtvGpqg7Y79E6wuTAEY",
  "key14": "3tLe7PMWURVkQNbWc5ShBdkgkDHv1Vh8epTrEwGYmgfgxr1rj9t3eNN77j18JuxCSD2tM6ms8Zuj3ULL9Ly9mDc8",
  "key15": "2cT1wayZuhFW3DvcXKRH88SUwNYVGA5dWdfAhj68aNJRCG1783fFTG2v6ZoZQcVbedUcnJUyMh9W2VoYZoup5H8v",
  "key16": "2yeRHt8mTFrP5PyXzedRJUaGo2QA2FusnziWi21C69koii3Tow3rC8KWktWkp4osVJDNcGvC2NkdJj7hiepVPSJd",
  "key17": "W6bzJeRY55cWzV64Z8m42Xtyg5jooEsVC32vKSsmE6nEhAgrgQCXSbF6fVgzTpy7CKr32p4Ha9YfAru8HfoVBSy",
  "key18": "2ebpR8w9wJandKQxr1A5X1uY2eRiYtXW3gAaVU3ygTjqemiNJG6A6Jcksz8n1MpBLLwusfHbgD7rRX1UCX5faCeg",
  "key19": "2uYXSquR9Zr6q2fu5ZkJfjqpMKcSGGrZSCwN77Eg13SZQGP3nK8Tj3H1YUj914tGH1CthzdCdkUJ46QHQWqGtTmp",
  "key20": "46sAhvvcLkhAAXCSrDjve6yn9d7jkUBmnth3JL6osrYVakhUvpQuzE4PQbvrL91JPvcpWVeMBAyju6A7G8SL4k8R",
  "key21": "3CYmWorGS2BJLPWwna2xbFiUW6ybhM8ZGvL4CPhRfLbhjwaSsY4a4stDsQAxmRwNbLZvNiVfjuBxtzQxisK5RRx7",
  "key22": "5kS4YtrRRHP5iL7cmvAR1e2waPMfUtNKU3EytU4oAfJRX3x75PZPdhLLQH2gv3vAwKQDNBfNQgDDkH9ojRjfYJdw",
  "key23": "28coXHPRYyTGQLrPuT4rRKA6MJRiNFZSi68L23RoaCj1zGPWxhFbe3CJpheJiwmHkGk5aATzPdzyqRvR5R35AsQp",
  "key24": "3aJxNfR8tf4xWUaNG26NkQckbPg9qeCsMSrfKxF7PhGZF9whnJmAub6QW6oWboDR55FPHMvdKEthzp1Jx9YPUbEa",
  "key25": "3J3chYGiiB3J1gTyZmPTizRNNDUcdyTaqcYrmT25JsRBoib2TiJABXu1qYom1oMEZbRyWDuCjJEQC8apCybVwLz8",
  "key26": "2Jjh1auBZ9xQBgrGYeEh7AcqtcBHbBUDQLbf1scLFBPaaGbX2fVYKqd2aY9cyY4QJXxNoCDa4oUnWiKxJurtcMx",
  "key27": "3AKFJyvirRBnvkmMyy1pb6YD5Ldxnm5bTPMNGTJ72S8BojaE1e78xType1CUYpZc4nk9ij9XNcxJREe5YwiXeVeZ",
  "key28": "4DpATmdRzWdnhFXZcRbLwG3z33MgkuoCcZzkQws25kZd4fN79LYdnr9NP8r9oS8LYPfBVAHAPYDGoiUiU57mz9yg",
  "key29": "3vdCykMvgZBb1x4TJTyczV4bDVxcnL6wehsNaS6xNQCkRghZLqEXr871zZh9y5iDTrKHo1ZjmRu3pWx4gHUaxGpC",
  "key30": "3GdGJBHY3SJoioUPK57QqMbXz9yUrgqgm4XccnHCoUJC7GGEosKcQKCk3HjTiPYus2Hgyjgoyd6vynA37uastHgK",
  "key31": "4znvthyoKmSjbtMLNpuWtyP1ZcMfv5JoSfrAHSXqwqnXEv7jDmZi6SN4zHiEvfBGbeS7VPrYJGaic53mLUhEPxbv",
  "key32": "5zXxHExfnss453d4Nb9JoaNNGfoA2owYX4aiaF9qbLvsAStdw3pBXqkrmMuoezAneSeai27pkLmWcto9J732p3Ww",
  "key33": "5RXw17bhrED5fefY6GtBY86sYctjEDUPMZn3qwkZZWBLgsD4TfbMQXBrmTeEpSvxHq9n6HCuzjwYCKXod8g99hLH",
  "key34": "3b8rMM1hni73ZJi1nm5hDvfcgKsdDeRyfgapzCT7WmwNytmAw3ikJRsFM1jFaRRmjTXQiAg9v8QAfN6kTw1xeBu9"
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
