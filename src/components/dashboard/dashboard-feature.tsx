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
    "4YR6Am5V2jCQLwDWWr3Nn9yB9X5BrHEbxSNogH28REhfSV2VsbDuATXYZ7YtKeccx57XTRaqaC5qZ1QYfvizKxUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJihTABQF2tY9zwLfT95Wgre3AbyHETPH8Dm1zZayv7LQRavD4rAezgLv1pe7gajFGQk3noh2GtFNGwX4xCE3Dc",
  "key1": "2BarjNP5SEmQK8XurvMAuVk5xJZKTmLXxnNxfPQ2LQ26M6waqHuJiNeoXwNMLCFD3YDL3XsbZzM5uT6zzZrPtQyH",
  "key2": "KsgUDNpVexuvoZJj5MVtTb5YbSVrRYiGK7x4ppovZ69Lvsvckf8Py8D1mqmxzJKvPybnvDB32Spf8GqwpNvKPzp",
  "key3": "5f5kSDTwSNjJCoF3FQSvNvCwhE52v13utiS4dctiNabuuMPssSdiJfAerQburYE1XePefiLDkjaNCwWiig2JLfyp",
  "key4": "5qQYdceCcqUAnuq7MxafmXxhtTtP7TZBkwgzZNreteFULojaRPM1m3Ff6GUFXfJK9k1YANCPyf8kW7pcUVDoWpqa",
  "key5": "4eTrVgZmPUuMdqZtmseazNfaV8FEgWxt6oJbxdWeaeA3XQJ56DG86eHfakhcWRjKWaGToEktKVp1nMA9oMbJM5CA",
  "key6": "5rUa5wYJ7wiUYGwLzigwGyrqSQjWft2wDeEjukTxWgBq9TeWqAQeSpkwfCZhZkZDmcg96FVJKjpXmpxttn2FVv2m",
  "key7": "2WCUSLvRSfEanT6d6b5HDYo22aFXEBBkakAVh6PZ4W5c9KNbYYTVxHm2pUUU1kGrcp9Az3GupB8yPWzbqNBC6vAH",
  "key8": "5V2NVwqxhZJWLi6phWvR4s9wwkMzj7ruQwSYXUyRx81UjRThHqx9RLgLUiotgtZyBK5j2XpELvHaMNAdBEv1UhFm",
  "key9": "31VAtsxyDvvZXNQBAy1eeE32ivBHY1Tztt8NrN5NZPE51Fx6Ss9ngsbG9HQKtH3JyEFVaPMPBADDKFKAqKiLazoa",
  "key10": "5dACJMDCW5VVWLdys8qKbm1DqJf3mRKk92ytFhaHZRTJXQxzeVKemxYxLTtQgNpZeoYfwts8ZCeiwhLpWEFNzBPt",
  "key11": "5A5n5F3XtTFYrGB9kbjyY7b8QDrazamhiacmGrhBen2ffJbKWMta9o2PyCqRRV9wBcENXoCnorQsrc6aTP6oh4sA",
  "key12": "4qjRraHtk9SfYY3iDp1cL9md4Mh5y2SmoE7ox3qyhYrCcSRWwpD9mCD3LBwoKaRJ3rYJEmte3CsRKYaRDEg48NdQ",
  "key13": "bWZFbVnnLN7LsaPUb5AMNQaGnDKVbNu76LNAxfCAv8Yf5xk4uAte6y814E4whzwSQDkH7WGrTHp743HvwCYM9oU",
  "key14": "5PiyuJUfij4Di1kQPUV5LXAVpodWvBK7STWNbX5fhemw2V3V726eAt8SWodCBDMtwAgZdaan5Cj1mu5DKK1MekE9",
  "key15": "5xVQteyHsdUoJmu1uNrpxUa39ZFLWHiowdZBnKVUCXgUiPz4c14vCstqe39rTvRhs6oP9reiaCQcdX7HhVZCahJB",
  "key16": "3wUwuCQwoFj3oD9DnZa9ucqWcFoAaYKaGTmr3nq7bNrHFDgE9a2rwL11VzN1s3En13hkEFpgWGfKWAbLVzqVE951",
  "key17": "2AQsRn4V387Mp1EGFhzEgWxuqFTvA4QAjf8pwq1nJP54E9UqrbF3sbxknD6x4kkPSSiZ33Q9LKYq1eqYv18w2Zsw",
  "key18": "61FBpb8n28ZVFXEuUs2e3y9UvK2cu11dVvMwZwKxMiLWdRt537N8k9nBNszi42XN2jTttSc4HWwoNUSAZzJXdGZ",
  "key19": "L4cjirddiKbdnKZuun18CbehQhiErwHgMW7ULCFPKJ8eUG7unQDp9tjNKLPhnfM2hGoL86Nn8mAH28KmymSAAL9",
  "key20": "3RQjRUutV552LDaTQ78sn2eoLiRJdBj4UEDsGtjzZcUKHkvG7oavJUcaEY7AC9VGDoGR31Q41ibZM9FMHXziRRxq",
  "key21": "3udosSpmfx9aPVRH69GX3wZ55QBX1BJW7UYLsAhvGK9hcr9fkAya9SR955L96dK3onyb8U34f7x89qN6rvZHrX4K",
  "key22": "vLpQvr62XRR2pLt2QQZY4KG1mW4AonhsHUwZjPd8GYH1yByy3TanxghSGebXXF2NZHdpLaATkmqBpeKTLFh4mhV",
  "key23": "X5CepkgqqoCd1vJ9hRCJhzLqi4CqvUBTgLBP4pMmRDn33MLwa2HFRv5HykZ7bUPLSirS4oFdSZUt3LxWjMvNy1h",
  "key24": "2mu6Sb6qzkDYuwKp74hsm6uFCSa5612czDaLfEnT9gU67k241k1Bw1u2mHJ9m3wGxYaFGfk4v5CehewMcGGUexLC",
  "key25": "5AWc1xmuUXAwzk2ZRbxg5PpA9oaQdftWVQfhckMqsqEnZh7cKpaH22GUArjPmhu6AmQ3zB7prgTWEGVni6h7zk24"
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
