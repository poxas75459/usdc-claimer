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
    "3YdyhWQX3srpoz6tr5osLjgyB5PW55G24eZjYWNmufAC9jSHsf6odCqqkjFNT3KfxTviPYzzXmFTQ4AiqbmEzBJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLrJ3KygU8uqm3TiuwYpcfjiL3uB17kbPJBqYfx96JtB3hK2kqvKJS1VjTfRAdzu31jyMZbyCLiGGBiFhV1KBBt",
  "key1": "5yZhusa1HRHjWuQ8aLTXhN4BPi9FEkfvPj5SXJYxKFSRXpQkEKvJg3eVekFoAzcvx6D5QwAkNJ7XiQ2PDcSZq2XR",
  "key2": "A3728NVPxMPCjMbToAqr4U11Qjg7Rfw9qU9pQWNvunc6kogxQ75xf27e5R9oYF6HRNH2PQqbfC88ESHP2XLnChA",
  "key3": "tn12iEBFG9XbmqKpaTmkXu9ecr8d5uWFmup13Fj3XqwotPoE1FHZW2xuaY7VE5jaiPk57knRwxVKaKJ1bFaax2n",
  "key4": "3skGDnNFVoihdaEgiUo55F9dBvSNgo8Zmm14JmyCKcMee8HaDM6ULnaKEnf2vEDBYaDvXzwGigVDN5hKUgdK5Sug",
  "key5": "4Q71JPhzPJanESyRxFsphx1TB24kQJHRVsRYbdFpobbCkYNB8QZnf7QS5y4HRSQZXzhggfGGufEwCknhEkDFPgh7",
  "key6": "35cnJDpASWAmXukGp2MEN3nSKcXYvj96napQLpPMVV2jmL7ZFbGxDKtP5ueUsuQETLYqc3MH5XbAk58aZukXFnmb",
  "key7": "3Cb2ooJ5Jb9L8NzNTxYbjaGVtocGaRMvqMff2WBxY1X54EGHmXyQjzigx4pJF3zCeCzheZVkAAqmoYbwsACYstnD",
  "key8": "2wCKZuF6NfoJCNpa1X7uFH1Djzd5N9589NEcnjjEz9mjT7MY3A8MU1aQeiFzJH4g31jzphcD4Z7MUqJughLN3PKq",
  "key9": "2ahQPDApPe5PjzvGbeaF3UYRUBH7xBn14U69MGnptp2uq9v3ik7tExLBEemt62PAmEgXaP6T1s6iFirxwcZPCCvA",
  "key10": "2kh9yt4bsiBa23kyUkCS7avk8NM4fm5B74itm4YDG4LKR47Zv248PRgscM56v1Mn4aioVx8bFG1eUvgqyyufN87U",
  "key11": "5Fs56UnCPoxhvg9KaYYN3jtz4kUbkVHFYyyvC7fbdocYb9KmMKqUu1HMhp1b4URC89b2rdu2k8eArWQUSZMQeEJd",
  "key12": "3AAFHwDfvpft6ATK4kt3ovAuLDMmycMSnM1gLQ7RL7ZssJZ8d4KZwzV5BGjkrX3V5wykuSfci89dCy97LGsLSvPn",
  "key13": "rSD8jCN3D9rJNZmLyMgZnuSEYgsnjVAmTtpf4HSWiZ5uD8D7Ls4uFDg3o6T7EtqCg6q81n5Q7GtDC35E95UtwJg",
  "key14": "dEGTKe4iEA7MSybq3eZ7fbAeBygHnBEHGwfbSoePakdc9ZNm9dbFVeKYoEx6Zf6avckFm2qpBb2i7NLYoVCVKos",
  "key15": "2Ea89RGdYh9bfMvDf8w5sfv7SQxcz8xZYfCH8ZNEvbQuAaiCEYcLUTMxNVX8t2nwYroxyyNzqFg8RfszDn5SdaaY",
  "key16": "35vLDAat629BN5jq5b3ywCiSgrxQWSayPgk9UgTBxx5qMmVu2DEXQRxJAMWdFUKd9Pntjea3mwURxMuNVnWz6AcS",
  "key17": "51pjcEJmuT4Xrfp8mTYNjy7LugXNZxj6hjQhmH5iWnWpPTBnGeb6xcyvMnmwFqJ6qBQa2UYmemEHociXs8cz84gw",
  "key18": "3USAXwVYSZ5BNk6E2G5R6RhSuAN1ZDxNtD5uXjwRnH4eJYv51uRPKHmtb6exEE68hhxCnByJRL3tyCN6swk17Xdg",
  "key19": "4wy9NSP2P7VwWZn7xMdR5UbsGp7DDxUwktkircfJodBEpWMXyMaTmrjeCzzmRYyvR7aQT696TmMz668DoF7Mmgcs",
  "key20": "5dPRCazL17Jp5QnZZnBo39nHjXUAFmMFmHmXkz94R63PGFoQjSATuqTHREu2iYFzkq4Yh2q1UnZ6Udq6QLvfV1ZF",
  "key21": "5GoKTspFB9XL1pbxbC9n1tPD228W3PLh6MfDj6p4WbaiYRS4hPkDith8PBqLYHwxwQHGfqYpacnrmS1nqLrGpJjj",
  "key22": "3ZBo4Ho5cnTFjZX4BeT4vPJzPDiyKpEkCPqePfV4p76SYKJCwjStQ9o6ARntaJzigjoRVz8NVpkqgzYnqx47v6eE",
  "key23": "4bHjHWJxi8uUj5VAnaeMqTAp34de7KRN14JAfvufmeqWvYo7Az4XDuUqcvmGmMW7FkToYLnqdhfwLgBBJLEtBRDG",
  "key24": "8ymBwqhCybPJbQJxZqQhuPKBRN7s6qJVoD689ux92mxZ5B46AtDnp1gxfSp2m5hbC7v4vR8c52NeR5GovawHwF9",
  "key25": "28KDUZUtG1GoSrf8Mgb8MrTtM3hSDn7Q7EPh2AD2FBf6QQxwspUaWnYXFV3KJxMwdsmebuNipG5eeppMfFKeVmU5",
  "key26": "rrvyu2eGoXtghFLfz2QwabA7fLTBe9KQmcGFZTzcvSxcauhUDybN6396K8AGQARfm361EZDko3D5hN4fhCqaC4A",
  "key27": "5MSedHWTKSCmyH2jhiyuo7PKK8gjNFM14vwDph8ZziqhkqLSkjLErDLQ3TquCUtj5DgTmun14jFREn3T5iCaRsGu",
  "key28": "3mxJev2fLBffrFVi6rVgTh84oroKyt7gG3pt6uGXVbEAgNWWv3VPTcEJZgjhfNjX56oDaUyn7w2pAkYR4ugC8JD6",
  "key29": "2xQXkt4yofo2Gww5LCxYX9xB8doU4NvjpDuJpLB2jG27RDSitK7QHgvbpCsa9e3FM3NAuvM9gc73diSKF7iisFbK",
  "key30": "z7xNB2qBeAtuPXrrzYVqfVZKgh7aiL3HpwB8HFctpwjfT4JLMjGoRo8Amiw758jMToJaz8fqb92qwV8orjLprr2",
  "key31": "2sQnCqEpwvyN2yXpLVB8kMxCgV57vJhbVfznqkpW2vFsPxf6ABmLM4D2kPcuumKn48oPFAxCeGgFj1ntJzvDMnnu"
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
