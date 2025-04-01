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
    "2yoUVzj6tq6Y2f9J1oTcMJ1Y5mwRQSEPkXV9qg2epEM84WBfUh7akw1MHeRgGRfFMXZbgF9vP3r6Ppr1HcYkb7vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJd4RP3snafuPXM5rnJUx14keDRRvQcuzLMGNWQuABpPKxPAXTyJhnQATH1uJnso1dkPWwoHYEUCNUBLtBTFLdn",
  "key1": "4dC9Jo7dhF4QfvMXruEUJ9d1erQpsprfRXw8jRgy33xqXAWKpbnRqFeLqjLUGt9wVzRoERsFPdVGe29SKdF9E9wB",
  "key2": "4qjPkvohNipA2sxM2VGcxoNyEmJT5VXDSXLwa8Ea7Vm43cXd6YAbCsCgC3mY3S6tqZRS15Wc3XkxoCFRgNQHWp5E",
  "key3": "3az4nSh4UNtbagKn4GFSwvAD4XSxv2a3iZMVuHjib34ExEA3mYfY8mrfMceqWL4x2A7cd3HKzdqtVUmorRs8bD8f",
  "key4": "T9ahEAFYceALgzHAd8fP7V5yoCaU2fWQwzqM3WT16WZGZdet4dKdtERub7uby4kmVgJcAwkX4A7vK9dFDbFxNtY",
  "key5": "45KVfKV9tw5sRrqxMCmZ1Wkem3YXjBJTpgbA7MFknYMRFrJKo1bR3WRpcB8ZpPHNVGJzy4L8w1VEmNymn8UqJJ4z",
  "key6": "4GtGtqeWTAwiFiavvMMLEe5pypz8ELHSfWWMpAuhsZ4qTgK4QsqpNqqWADoCn8AsK9eN7dztrwK5S4dM8ym6gVKa",
  "key7": "42XTMqACYrgWeupZWLdJ13oV6YGkLq5csX37F3iYVsbzRKL7Rhpn5Puh9PQB77hoiEUb31PnsZSr5om2Yirr6jJC",
  "key8": "2vDa2ME4PriFcmvCHZ3Qg3XKqwyRKNcZPfKbRkZRmDDAXJFThNRziGJ5qKsJsRzcCFAmnv1UKBpJmHxav5Leg6CA",
  "key9": "sxaNWij7Nrwt5qCVGVQiNGuyDMbziBEaa51vCJhaVD7yMjMnMWtgUXb66L8LsuNGNDYJ2pwcyqDHu9f1Z1dEbNX",
  "key10": "62fCVGxEm8V3m7qPoTP6UoEitRnF23h7rguovehxW94K8KReBLCaVRNDdwBLafsHieXBa9WX6cqQhns4hxpHnULu",
  "key11": "2qgkSBzZH856215CY6GACtDmYvfz9iZdWHvL3CTXzoM1RuBHQatt1Gbf3bhDAXrgYNrxTPMgTsuVYP5PytQBdcpa",
  "key12": "3xxMsmh6d3hgeBHKhtX1jdnUxJ5fcjKJ29VtG3YHpFc3fVQp7UxvVdFgp9JG8i7wNi9ej55LQYC4WUKuTPnBcex6",
  "key13": "odfck4jpmCqe6ZQ69eZgcbPF8C1UaxvjiTXdgbxGbqyMKV4q2GNWFjvK7PithiR6LxjYWjCCJNVCfp5WZ9PwyMk",
  "key14": "2ns46eihZMZ4kRzGFiEBRgiziZLC8FogTxPyRoo5Ve3afvEnkdeHxSh3MUWGTqeb9iHbHyhTXwSAc1T16nu8j1GG",
  "key15": "GW63UcGNacyTg791y2k2Y85ufQut6Qg7LHfWxWoudf9WcukjFD5pQtp7eApn5JNhCAAM4hL6pLpcc3YyNNSENQr",
  "key16": "2Ji1Sj18XzrFah3RkcqtehTf5iks7FLg8SrpmYyR1qmVKKZgWvXHAtWbBz1R9fxJxHN7sYnJfNA3hS8PrXsmmoL5",
  "key17": "3wVU81P53NGrqWcGe8amKCjbCF1Rxko9zq7CFn9pnbj6HvChjmY8DR6Ua15NDy869ByepsBeEiEFVmgeGw36bVVq",
  "key18": "E2b7o6oWrZRicpjN58FSJahttyMXjZXoHgZhqKjPWnUGJsDVzkFTg8G6ctVcPa1EQBzjp8zR7CWHAKjK718XE2c",
  "key19": "2sur8ME9SYPnMUwQ68G2ukqtYeYPwfVo3SW5eqCpcCHcCWQ2ujq8eiVzpTomZoE4JVrTpa8P1eufjFn3pnTh66DA",
  "key20": "4FRfEgfwxvJ8eGZnzKomwso7AsujmD7rDmbUPzVCdyCG4kf7GCQaX8jypnsNQJqF4jP6UsivAuw6GpcTX7srDbMk",
  "key21": "26PT44iMz4gDiJcQV9dN3Nw1GF7CCb7BHNFv6MaZHw3nwNwBboVNbcGJfdkERCFKLvApDNptxMjfC8ceq6fKwo3S",
  "key22": "2ERujUJS9nfuCK8rZFJ6V8mdQWFUTZb1D8cxgTofGSyvLdRNV24sPYAAgn3ATzmcKgkMG8LFmFLWQwTEKHybxV4R",
  "key23": "3htLMnXk9gsRBAQfCS7CfSp5kFhTYeRteqNND2asfij3GXssX6LgNK3HzXVZEGy5KhNhK7raQqGDb1MMsd3rGWP7",
  "key24": "5gtyWH5m6XtG7LAeKMPKQ7Ay7j4j9kLwwVec9tWT2MQx5EZi7vPxpyRZ26rzdYcQZAbFtVHhNTuEmxxY6hgsQFbm",
  "key25": "BZVR7KHKJHQ9B7HpLPyQ8XFJhQGNudQuyXuyqU8sfL9FEWnch88qmba4JoDxaJXcwy5Y2b6y2nSSE7n8A2xe2Z8",
  "key26": "M46vEVDuLbkjqtatKJ2bkad8DakvqvTnPh1K5EeAWWw77Sge8GsWhojgPLh35oXqeomxMac1eNAgyzZWGGCRgau",
  "key27": "2NnMWL4GjEkMpCQAjUsab19Ang9BC91fw8eNyZn7WnqvD3TZNX4FPM8HcmGpwy7L4TAKNFuRPqcJhXUq7Z5yYhAk",
  "key28": "4GkQnEhepJxeTVYhFW8Fed2BVsY5ra86Xae9ht8y4c6odh9xLif8cAEDGXu2mAAZdX5rCGb5vh5DaYW7zunvry1L"
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
