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
    "39iXGXQ5NNSWe5F68996ov4koxyQHiLWLMevqRVR1ydX3bQXeGPrm92m4zYJ69QvwabD6FUWp9uioXfqjynYLkmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37GsAJYW1oGekn6DbibBdSjUYDcWfzMMTSykWv7Bp6KjCu1gvHtpVLtSU7kbUdBeYtAEpD2W5KbduPuLBtzuYtG2",
  "key1": "3oerGeBYHzq612qzcebtNcZGcadZ2VYZF2forM9sfQyjK5ogw7ooGs7cqCsqNdUQVXKaN1fbbfvTNTjnthvm63s",
  "key2": "5SYYmJ5D6CqoTkvC88TGB5i6iFqYAnX4vj6mjs7FeQVxUheqXnbVGGuZ1QeFEPTytyjgt3nQtf3v4c8SEZS2fTu9",
  "key3": "4je7ubhxVXZrnuvGipkAsdPSuifdbXMK3fAE7u5a4cW98Z7PAr3hm5T3ZZXb6bhf4RuuuRDKvAQbEgj7Brz3Qv8G",
  "key4": "3kGbt8cputvmAvSzSc8FDbKTb34P6d685cX1D6HqJR6LzRyhybod4PUmxsHToVAnFWCFzNsCjJFmifRPRGpeEuC9",
  "key5": "5KtDH3bGUtx93TDbEuqYijqwiQUh7tcEP1sCjnCuS5fcFhqdDv8p2rEju7MX5HuRf9ZA1ttqBeYgk5vzm8niJLpt",
  "key6": "J3dpMXaGZ2RmQGiL66NzFF75M4kCaYedgQcNUj6jDMdpzYcG3u69fMzZzqWbU1Wk5LdeTbg5KagpLLctVJugTqu",
  "key7": "wpGPcakEqYL2pg8NDButDYEkVLfs2Qvz81YXZT8mXBewPs5fHQpP7wkCQjC2GDDbF54GyjkrHBh8HMrYaDZGAbE",
  "key8": "3rDYrHVStUMZBfpcFXdFY6U8H9MG5jdba3w18Qq3Ygi2BHef4JMaeRYQsF3bkuzDJMvYG7Yrz5DT8aXSgKLtpmF",
  "key9": "3v9JxjXPB4ecxdqqeYipsEmsmSba34PEUECrZUrdQiUMv52jLWR6qnKL7xo8yT2gqy2P4ZAKxSHB4LGtedg544R5",
  "key10": "7cKTjRJbVe4L4uuu3ytKPzBVRagH2qq8u1jSc15BteSgocUKpw779TiiaSMGmZUNETq9B8enG1VZAoPPbGMDkuu",
  "key11": "PoJzP4qRzkhkn1SKDFXgoEe2sUEtXjWpGDM8HXaeeQJbLZr6Lj1jyXv2vsziVzMuotCrbG7gQS54ERGs4JoD3rK",
  "key12": "4DkqPd5tKZPHyMZBkKdSBF7yyMSddiTeNJdztLN9pshTybtw39qgxJRvUjEyg2xQ7L3FvjQcMz9o4smUMwt4zc9Y",
  "key13": "4BWmVsfG9mKuiYyi75Ro8yzDsBfAA1yVyFcnJziK62ZKL5YuLTh44NtZ7RXzDNcCZctWwXA27H1qYkgAH4LXZp5J",
  "key14": "bUk8pbejdBYbAaJCgbar21Yczs6Uiykd3YZ1ovCvPCmtPeXosiQNReCthk1Cx3NWyoPPksSocD1aUQeCfRk5ebX",
  "key15": "3A3FHeJhoUarFqDwJnyqHGpri3E3GEdQBkMA4Ti4S4FuZ4KDihpvXTbtBMYgBeMrzeWGrHTP28uWk4EPxua14EzU",
  "key16": "2LDCqDhBpBVgSha6AXGFLpUwfio2WovPJqEfASjb9UVAGwP8EuG8YiUTC2CREnYELQzTsKiNa2LjAUhqySsu3Yt",
  "key17": "tfmiZHx85Uo2UVuF6CrmVBAgJ1esVNWWu2a7ghE9DQ3kvU6Xev6CeB5WPc1pQ4mobZ5mkXMQ23kj9xZvRQqmPbX",
  "key18": "2jbgMafDWMbGUD77Rq5Jz6yHWSphP8ZvbRLkLYQfQjsrY4QkV2zhBvQBekpCx6Cqr8AYZPTTe2s2e4kfm9UHfAn",
  "key19": "25nEQT9iGd8pq1Yd71BjViEuQ4FFnmHe4SHG6ybqfhmzjD1TRxZxQbX2RLx2dcind5kGt8t6y1AQ7NsuwMx1NT2R",
  "key20": "eLAb7wra5zjBeQkGTQdy6CU6vBuB3ybvR3zyKwUDmoKNQzQDKjZK3pN4Jr8CLyYqc1vbtawT8uzhtJtvToPKUXt",
  "key21": "5tuwCem4pRdZXU3xqc3kaK4CcxN9yKtpDVBXVKUNqJyZ5Bp6SVBFkTairE8Aif9dwH398kJRpcg4XayCKkvBDEpE",
  "key22": "21fjfWDrwX77BmZbMqqMRoj2F3gbBYDy1aDP2AAqSN7A3jucSVcpzjvhaUJ46eQgpx8NSQcyxyGB7yLoVfJqMnwE",
  "key23": "YBSgNqmcqYtyPzduWv8vudrjn8r3jFF4J6CnYXKEkG41UmXibsfRXEp3GgqVz3xpT3QUbBt3jZDwmLRfKGR283w",
  "key24": "2KNJ6PgVmgqLJrKmxb7f5BDkVibYyywyVsBsWun87Hv4oBDWFUjLrHHtPAe34FLEhvfwCgY6QuTA28txRSmXtE3i",
  "key25": "4h8aE5UfNsmiULuM9duu9CXeMoFNnxLskYB5F1posumvUjcQdHoBDgtNjMJPCAqtUibdDXa2mUXWSC3tBAjXnhgC",
  "key26": "HwzyR2idLupmJLhbpNKb7fm7x1fg95gE8nSMTRJtaoe2GhdiJYqXbSS2nxR1YsiZrDGVbBQqvRFnGzavvU6U6ai",
  "key27": "4dxV5Gd73gHDiCdKg9BymAVXNMEh5NwDdUi2q3LArLg39i1tQCbpsvm3chYhyV32RyPSgSYvhadVFHGPjnAimNnS",
  "key28": "5HnfxUm3xBDaHWfkApBbmbNfT5uKZ2YLVXYFvoDoVn4fZPBygQXyMA72nsS4HSwKep7wrqfxWFcUqFMfTeBsa8SD",
  "key29": "FcS4SXnfCzo76vTwBCkoy6o8nnR27xzkx6LxPWrDw5SZeGbHqfbpM5ZNfCTrkBLWbY8ppEVg9ijYnqFJnpg8HHv",
  "key30": "2q57hByDXAgNH5WgYCgXXi7EJripgDqSS1qsuWVUWtCwHBJZyNcGRSfDHpvoKuDydTwoyJ67Vxc1QVXzSfCn4DM5",
  "key31": "2dd9kjgnHYe8wBmJEzhL9k5BdiV3q3eQLQ5hLiyg7UDpuhWxtS937MRKWoUbgWgMVx8RLxhbXUHx7LraZGP3ihCt",
  "key32": "5Vy1FbJoqMRzS7dNncUqRh2GYAaSRR4RxCoYXuTCHADYzp6JX7qU8yC3WmGREPeBhxd3vM1XdsFopdPLTiSKBGHw"
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
