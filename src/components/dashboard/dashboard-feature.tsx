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
    "4v2wBinn5Y9YXdiid5iW1urdZpDBgFm9v28nYfxio18s1kdfqtnUddyNzJ8HbProJ32xBxtAAr3j2HqrMKAczrxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HiTQi34bd6TJF8VvzTzaPCiZWhjsfArVPGfycht6KNQSWfV1j8SCRAhfidCRS1xvgfEKh716oxCLvcFSb9Tozhk",
  "key1": "5F74dsZgbd42LbZCFVwQPJsnfoVjRzfxa1gKgrr9fxWCZDSRdHUBnV7nGG76vyYyUoQcsdGxrvBt47SKeNh2yAhA",
  "key2": "4Z12EhcfYpcpMLZkcX54AA3stvTjimQkDBcKSLDmYLpqWYbbM1CcXrtGDhmRYgCPgAoD1a5k9epi6bR24TcAzPNt",
  "key3": "2Yv8zSg3qzdcYWqtD4oV7f4UfA6gf2r8t8BUZnN1vtWcmTWrWKmzCSri9pybMw1TKHBhHSPP2NLBVf1ZYHJczxLN",
  "key4": "3UQR7K1K4992QKweGoW3FPsboZz6PSk8wmG9pAM3m82xRrq3k7wrwgTvduH49gxXfYTYneiwzH6YFia2heHzwUJN",
  "key5": "3XM6DPveS3pzCEQh1QNrz17kVrsYVHhgsnNuh2k5MmT1fiRz7crpTx3QcGwcM4uwTTMZh9YDqrkEgbi4BV3jJxg3",
  "key6": "5qM9qKi8vbMNJ2PJ9tgZD39Ha5keJwVuPM5fpKyt8t94NoDY2M5BZZa7LKcpyvARuXG2bGNwo1WJFWuZgfzW4ZyN",
  "key7": "3T6gEHN58rcAZtCoHQQPRefbaa7zE6C35NGSL3SXvABSKkwtzu8qLbgEGhtbgQK2wfWHun1X9LW4FbtS1HWuHjZR",
  "key8": "3KRNU1eCet347HJyXsF8zb3ozRjYKQQuerPn4zPy7Uo896RWpsFo2GYe89wRtKnpPWJ19ET3DibyT2y1Gq553VWN",
  "key9": "4UryAWjuG6WP8dBZcmi4oNDjTs59cDF2jpzeFQBXkAENdKRdQYJkxq7VNNyZwe6E92P1PauEiWYspfJYiXbdXaYx",
  "key10": "3iBMuyrqiz2VwNuYD38qps2fmDAW5cnff4q7o3DNfRNN2cJR7nJpNu1tTKJ1oRreyAB6sYmLgFyJbhs8EUSMyuZo",
  "key11": "4sMGJq6KDkRTgxSGXscLQ9zT36qZdRyNiAiSq1vpdZTB7EPuPCYmYSarDUhtN1XiCG8WkykLwAwS6th6ebsoNGwr",
  "key12": "48auzGVKPAGiaxsaQt9Dc1mMuevUC4Z1hagHyKxkJw2oUU9X35wb8aFeTKxYDWDwVcBdZBo9BqRrRDSC8VirVj2y",
  "key13": "AHioUTyGTP32dsEDXXYVmkgCNJxTVqvpLmmNmAQvWVVuPpziT98XeWp1PNJhmY6PRpbCgESDazF6MDKyYSsRiFJ",
  "key14": "3nXmzGySPGoiLM87RKLzYF4EmFcwNEAjud1s8sPDE5P3MhdH8RnrmCpu93AqWKziEBcTLvskxb3mgmKLijaXMdhX",
  "key15": "5UEG6DBCHhaR2Maq1aBVWzhtMZ82owTD5tHFwhMcg2uN7LcaPCMoxZgVmaDfJ6M4AjhiSpVxEDZVCbjBbtZGpKZC",
  "key16": "9UE3kiTGZmmwnXHGfxEmYy3M1jHNkVjeHfKPKerJRLVzXqFunUEHqYzkKaKbJXJzc6CmvfBbgSPmR4BFE5XZN9Z",
  "key17": "5K7noV1CFFnt4HQmBrUQK5SuPu7KoSUHaTW31v6WpUaYxMS1MZ1kaAqefonqWg7yUTN88qFtycnBFTN8d1ZL8xpY",
  "key18": "4dyGhtpKNmfQkLy5CAenYVMPas5JFyUJqipgz5E5da6q7rjXBHyb2D78HVu2ptwpyv3TFS75Xcv6XxJs3y5c7DfJ",
  "key19": "2NM3A9zVat43b296n1TaEADJBoo1bXxQHh1kgViNzRoRKESZXAdWqzn7eqNcXx1J9ZxzMu6s8e65xkJdbJTGRVb",
  "key20": "2yvik4jKWHGHmtNn9SBiX83RuaHqGrFdyMomktQZEtgAbHHcV7APTDhFLXro4AHqjX4vgpMjovsfSC8r6KjrWQhY",
  "key21": "5Wwoc6XuzVrrQ1b5cTBefsTMmRC8vFjDZhpsDs16SVNWVcXcLHVXn1wFt7L9qn2nCkaMEM3AjVruwiUgFXNzcPEQ",
  "key22": "CdKqqie5vEQUn7aN4hq1Pz8jL5wSUa1snbPBqzwjh7QNNQzFCUQWLVoYeyKv1UckLJcmMnYYATmUbHGHhS8BQ8H",
  "key23": "3EtRq2BHo84vw4ALezKzP7StbyCUxovayNya2cVfk9wzQxHjTgWwFb1JUckGGW7dLiuyVrqzrsyNUBLDUrb46yub",
  "key24": "5adPRkrhYCQCdXTf6fCubW54ScgpKVCkUMiBR1UT8ZnLAndyXy4svpLHgsECSLXhRgnHoqSHZfcknJCubqGtREdP",
  "key25": "4GHC7qndNer6JQKEABrxojzuMekX9txv9g1VnYZVUHms3woQ5DQPzUtJzuVR74gmo81CofGeka963vm9pXcE1c3y",
  "key26": "46CiddCPUJo7zZyUwqstzRiGfSZadNueatDPwfBRcepcaU6T4SH1K8Ee4uPGvgPMv3r9qahvcuvCHn7xSQmHCTuA",
  "key27": "2FAdEYTEsaNobfWPvYjLHwsYwAfczctgHwUQtgmaVaRJZYykJMSTYuVYkhDWVSsQ62QXtbc2jeM66gGWQRQrVFbN",
  "key28": "4HBCBJjiEJJr7VJ8YP8S9U2v57tThEiH6fn6oaNnVwuNDFm1evw6TAmY7Q9yeMQz7qPiiUaK6msgjTYt4ThkTjM",
  "key29": "MUuy6zsHyVLusnEfRZzxftoBRd9cA3Bry5tXKqnF38MfDrPbrqJA32N5SHwWrKu4zpXLbkKrRDzchtHguuyoztS",
  "key30": "3vtyYr5aZecNiKffjeW4uJ4tnGoARmxfF64nk5SP5J8PqciXcLaDrPjMTkBtGwDHWfbCs8wp8xw4ow6xB5zcVQJ4",
  "key31": "2j1Eb4n572oLbH9B2sC4atXUqWp1V7ZxLf5Pzzm8DoiyQpcB24ADSmpkk7NdSy2nMseR1VEoe6kcBPek6YCQ39Jw",
  "key32": "5hzPfdTr23Rn2gbvVQdfzeiyb3BhtFYgHV3axt5jFbaj7axJCeVDb6Nf9EctDfohSKzp6u1j7TpZjXXRXSh3uyrF",
  "key33": "3BSXTBtKrXBqTNkW9faZne9cNtx4AEUm6sKXgu9dxMtrueUKpPTnoMo3vnyKqfGZxqzzY1un3Xvq7VH9rfEGBraq",
  "key34": "2x1VE787fufBHa7d4b66V5ShV23dRVXY5ZULowyreES91qSyBhgBJyV7xXXEy7f5fL4RpVqfjRFpHEmrZyDdJx7B",
  "key35": "41KwUAtuU6PrhFLoqQqGwLvB5kPqxDoyvocxYNteu8t9W7B4AjmmsiFpZggM4e7uhTeWziiDcRiTEiQDEgDo13hH",
  "key36": "4EqncVPL3V978JnoNhqzJhahVSSzU4AASgJ4yiRmBrkBMd8qB3Y6ftumkMZuvg4Xh6YdGnVo7UhV8zczqPSvEq2n",
  "key37": "3bm9yf8qvLfZCUfQwshd7n6Ch8NqxB3JJrfwYn7ttkvgUnimTPDVEw1gsCTV5UK52TxchnEJoH8yeuPDbnNwjqA1",
  "key38": "4HQKA267zTuBxA7gbZaSYZ9uEzAsbiE5nodX1f4rNXBBRSMgq9Rz2MZBbdA5XxgfTcTw1MSZ5JhFEMe5ZAZjRaqn",
  "key39": "2U1FzNPLV3MpaNA6Ug1XzNX9p8WRYRjRPP4cn22EHQWKhpnjpG249J5ntoE5JVQg9SxZdAcebhUxYJM7SDLo9xw7"
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
