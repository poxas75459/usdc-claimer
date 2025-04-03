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
    "3KhmRCLWm5sveSRK8zLJxbLnepZ7qjSH8xKBxdMEtV5j9fdkXJHQUduHF7xAhjHPJaa3kMLZadNuMM5Ljc62wvkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbRX5WA4uyxu43SELuxQpRfGAKN3a88N6fuwsiUqPKD4ypuwaDgGYkYND9j1a2WWTpRn4SVsVdym5CZfXeH5vwv",
  "key1": "WxKBXFC8zmvQwuWr1Ycs1ugVqT4vPnL6FD2B3MCEJ6WByaPZafkrsbDxymSMBZEaL7Q8dbFe4mVshE6MaFoBriF",
  "key2": "4cQSNhbT3zUM2PvAuRRvTYvX3KjTseUADDEseA4VgZp52n19zEgDcqZyWKUpPgMj2pghvjr2tfGeQdpU6wgsjZss",
  "key3": "rMRJic9jFqPDKiQjDgPUk5KHbAWC1sNb8inCJj6mwn2muKJnt7ycFydRPL1zGn5Sa7Rdft2Cen6wS5oZy9xZUBa",
  "key4": "4r3np6PMeUtgyTEgCNhqv4tJy3SkRecsqz9RrpcjkrCuuFuuXtoKMZNLx8GkKYMpk4wVuQUbPg8R621gaixbUUtZ",
  "key5": "3MCXRisHrVXvpUpjqgNeWppzoFWkTgLZdbPA6iv2aXZ9fLMpi8ezp4Z4zmtxEkXCbKzhBwmVXqdYfGVsVLMzVxQh",
  "key6": "3tU2dLg1oCwTCfTctrEvhB7SSXVDmVRhossCL9f9NxXH9xni6mf223PQCJQqxfsuXH4QokqoBK1xxWP6Laf7HCAU",
  "key7": "4yHmzdg32sWXsT68nGfSsFg3HNnrfWviu5hRFzRArzEx9DPx5WpRDeRqgb1ji8PsiAVjXVRBTLbx3wV4TehTqy8K",
  "key8": "3BoRmK91UrdYfDbTNhbzf7TMARFN7NUvYMvcKJa8oQ2trEh3RrU5E56TjmBSB8dyjoCirip4SVYQyVuAnmJmuEuA",
  "key9": "551yeDJSJdmXScvd1ipwrXfCGtESDWeCzEH5ZFDuKjMrc9UVBeW1H5AM4ufhjv6Gh8QwSsd48SSNCXYxv7Xg3mBK",
  "key10": "45ZDLEvZqcZieZbi3AaKWoVs4qTSb4aCVxxoNREcd7UrHYhYtNvSWXWdwoXTaShjStmYRSCjC9WTjxqA2YWJtpa8",
  "key11": "5zBA4nd58o18ZryZKFQmucFnuQdWfDDwfz4MXCBYcPZHsKvLqrXMacLieEUQc9CRtjgprxajYAZ1CboygEkk59M4",
  "key12": "Pf4g6m8zcNMMizRsrCr4z1vcEefXHFMgm8Yg49J5nDqutHujycMKUvucPk87F854WGYt4pbTMTBEwPSg122goTf",
  "key13": "48L4kboDvUCtHHzfdyiagxqWfsumftVpA44GWXMryzrbgjtzAaUPEvm9uHCimzgUgPBiSGhRYosUv27NsT1unWFx",
  "key14": "2dnR4meALiVeCxbdHTew9AQin1EPgiEoQ1XBnRCKEwygaBNK175G9NnUGS3EgoEAyaYUtkW7gVzyGmp6NBxDn7ZA",
  "key15": "XphXNDMymc1ZxoRcZvPXdW1Nsk3gfEXmhcmt1BVL79AhKmiWtL4aWae12h3cWhRe5f8LQHcSJjXJnPk5r3AhpDM",
  "key16": "5ic88wSnMHMTvjzcmP76Jv5QjwQzFeRhqfaHRraazxiMeEY8bhPb92nhFt9YY1Tqbj9A44pU9iaFncL2aFhgU2Jr",
  "key17": "3dfGwe6qQN5x3o7tdUee4DovSgg4p6ikjSe3AjVdeeTPrWpu3dmjd8YfsWrS6dPqm2kLd1hZdiYBk2buwLbL2UMo",
  "key18": "mYu5J8CRmnkdLofgnJyK36xiPVpjhVhR1LgwV6u59D7LXkbBRP8tD4dS5DmG4ekbJch4qYww2aPaAQ5Sp1s7oWW",
  "key19": "5MM8eC7s13JxzSt16uzMkFY2D1dpjLXJYkJ1cmzS1soz7tbrn7xZpJKSBYESSk6341nmANZuLMnyVFok7dmnnwgL",
  "key20": "29QacSnGec1fGRM8WjMJqV9m1RVffukpFqJgaSSnkW3LdEUayLGxEbkncna3wu11qgV86EcMVEXxDDu9TwxHAgY5",
  "key21": "5Wtpat3BVkPMH1sTVAXuarRCccTrYcz2nRHyFjbfS7m6ubPNi34hUfMXqJXyjXrdvxjoMmpuxN6WnfQ6U3tmvJBF",
  "key22": "3EnJXmJ2vKR2AZ3uiNsbcgNujWsNqkAzKF6NUAPDhuC4yYEXUNXTsmvnq8886Wfc5dth1a3Ttoic5AKm23uV1ZcN",
  "key23": "5edV3c4PnnQvw6uenA2D6nVZgx9YZWAVdgsBg4Kyn8AqMHc6WZ8xiV6or4hLcDQr1EvjVmiErSQgqzQZNStkSGBz",
  "key24": "5SZNcoh6s8HPL4C6LXXdkwJSYsE2rCF164hJPKmq7KZiW5NsMSKFzNrigddfz2R1BqzRn8HQaLoNoEGucSUhW5ae",
  "key25": "2jD4UrE9TrR5fk1VzBnE16C689wcVBCNSoHgMubVvMWHV9QnFkJte1ku76socHqPTViVzZ7zgLNNXAW2hCcCS2km",
  "key26": "4A5dE4JXp7gSNu2AHWYKDvc75ae5XAtuiGcWB21NrYjWMgSwvHxwGtnNLofJbZm17T96veQpVncXRxVrvVXGZT4b",
  "key27": "5AfMq6RTCwtjY1s8VWGjGHS5kWExFhCpaLDGp9RpT3kugEWQHgwMDoepSe935mAJxzcg4FdGWukj1LgpALtBvJTu",
  "key28": "55XJPc26f67miJnj2KQkXApHvFRQW1WFAC4bsSsvdv5VWBTBuAWMkSaXJgmuCkuV7162Wpb9tKth4FzuLbcDeB7",
  "key29": "2SDmtuCBQ9noUc6Tr4ce7NvjFGvb2V1pxXSRkKPS5iG1xgTxC1eK1fvC9f1EpZuNup6Luf6uv3gaUS53Zcj6dr1P",
  "key30": "TVCG71CMkzkWJKTd2pBXszSXwE5ySFMezzWhxFxLDUinurXwS1FQFioCnQcX3sivrYrvLCgS8weWZcxxadEML1m",
  "key31": "GFhtWUktQ3JEwrCuokLdexZMEHqKyZtNUAqV7MDNvJeZjoXbXxFykK8BAEo8gzFaqfVsNEELeFfZZz5ccsHUhV7",
  "key32": "2NN7Wo33Sys95qCuoMquE34BJfF1GRTpWh4zVH9HXt7SYEwu8fQbDstvSX7kmB8zmAdGujhpAetsiWWAPYeX4SHe",
  "key33": "26XMW979yBuyHhaG4ikQDNihvYskHFL1LF2nDCRYgfw7uDdBWLE7CXN67q8KXv3VaQEJ9mqXFXyLmxSdAYxzX1kM",
  "key34": "5VsBRMJUAy79GuRdBPxgbtCBLKETXkCv2bBdYHvbALfNwfMnmMxh9Duu8TU1pNJL7A3YNAd31Ty8tsKpohMr6LWG"
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
