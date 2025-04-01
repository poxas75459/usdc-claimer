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
    "3SejBhA4NZN3sVKix4JMHNHxrNPKLUVf4vgsjtfuJegAxHByNHrZFJAQBfcAPryCk5DnLzwPfPmfU9eKT26vknwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akeHw8ECgS1dZVS9nKt8bm6EscmZYxvHTxFYGnXJGQ8Cpam7F67B9DNJ7CJeUpDf1iXt2VDCswc6tu2CSsowbav",
  "key1": "Q9LwcbR2KCP9H2FWcJ4exi2bpVQRgk2VXbd1eDgJvWxFjxjmpSkVCczXhQQwUNdrbiMEAieQ6eq23gnp6R2ryyV",
  "key2": "3HYNzFBNPqbwVTGxy1bup3Y8YaKU5ap8tCVz3pyeRWGtsGKiWfx3vFfH5vJiWMZjESAt7Dbt7AEhBzXN5e72s1rD",
  "key3": "3MwoBxMMBQwntZYjG9zRUwEnWbcyXM9Lakr7Nu8dvuAqVx5GVfioMENaUjJrpwexeYK8XWAoSB4RNEfhdYREuX2F",
  "key4": "3XdGftBVss2pnyBoDhjUg3pJqCUVb6vc6HnAcx7BpDJfFzSstcgJN77eCjXb3uTybWvRsXp5Nx2VezkotuqeV1bu",
  "key5": "4T5UEZQXTDjU1aDqJYxkKx5HuwMsvpNFAkfWkqULGappbDdPeRyYAUS9RrwWtQKisQkqjunUTnVBvg22br2VjwNK",
  "key6": "57MvBmNDBPAvkw88PTbGmLFia2f8L6QfBB2E6x3YxmvJT1H7Zmsc7bYY7fp3hUVw3joGWncXsCEag1uYFqdt8XRq",
  "key7": "4hJKRH8VMHZqoiX9H3344xFJ3zW92iKCdPfnDYCoadZx9cvFsnuieVp1Te6BRLz5pXjHXMiPMytWDugSXG5mpZMp",
  "key8": "2gMUhZkUNzUCfdWKAy9H2mEf3Xkf4PckVvG4YV1VtdmaAmNNxjD7c3D6hrLKV88Juo5rHJz5v6TJ6huDvbokGfAi",
  "key9": "4qV2AQ3oqezh6RPqJje3JiPmDdS6ZsrfTKZLX7vtpmwLbiGpBMiKH3HVrzTFjq4TuomLK3X7MwwRLajw5HCVJWpX",
  "key10": "616VDmUmjHWgTVbec8HFHWUeTJRUHKbJGzMyWGDJDpcFURSiu6dvhGVLNQ8VNzj47BEPtHENHmocYm682bRddaaJ",
  "key11": "4za7JzQ6fR2bhY4ztEnCjXMJ56Gf2Jg74gWzBxwpT6shXP1bkeEakfgMgshyhcKZtT7jMA278nhEmZWoidyKS9Qg",
  "key12": "2sVrJvBPnUdBY3uFkah9s7vCa9zuKy5xZNc9SUdgAyYAiVgerGLvbPZAnjFZ68zMvzdqDXLVAMoQWnH19xWGnwic",
  "key13": "4K4wxJcf6DR8BtzSvqdzSRJtmhXc5vCuDcjuN5UA7kMH6EDMWQz9TsEeyHXBUffTDYTKAPwfri6MqqfXrAatEbkP",
  "key14": "56ui93HqDgYaYoWArfxEp3ToroQCqwiRxxWacq2kcn5GCX9aqZFUBDWGpnQdrbkEo94VW1KfiHyhrTyYynxp8exz",
  "key15": "yu48vQ9YPLLcTv5YZYi8ndMfPTBJrWNi1dqGv4dmeeYVD87vJJABvWfMrsPAeJ2uHDQK8xjwMRC3TbFEF6bWv4R",
  "key16": "ZuZzt55Qfy747gkaUuCWZEa6MJyZ1C8exbgVAifnigXxypdjQ39UA9xpD18N2TJjHrTw4wmMyRqEtxGjPCmkqjZ",
  "key17": "5EC72jzFeqva3ww9niZp4evXD4mRfKKQ8tuRMMuN1vQ2bvKEb9BDs9UKLz72BnpcoqoWcoEqC9zad5dFy14yvFAH",
  "key18": "5T6iZBHEtMg4rYshwFoqAFn8pDtkyy6Rgzg9MsZDSKT443tJGWkjvqked3i6onCmuGA9dSgL2HL98oTQJPMdo3mq",
  "key19": "4mkiCUZkhqZTxZE6Tdxds2Q9gS8RfdQuz18T3X1SBSYhhg9Uk3E8FJiKPGbqz1stqWF6xJw6P5r2VsJb31hbgLZj",
  "key20": "4W1He8sAe4EVVouEcqex1E6yxsS8ddobjaf5KMdC4hgrWvd7p8zEKVviNkmeKAPqMP5z5GWxYgRP99u4tsqnHAKY",
  "key21": "3d4KxmnBDkRgPoN7XHP5amJqfDn8oMXVy6iBi2fn74z5gdghMA3kFXbT95ruXRmnRPqsAxb9CntFwiXbRmjaLHqD",
  "key22": "2MUaopXAgdGs3n6xMunnNQcSLCNWPuUrFJYgY9EeRTT3CaDo2FLe7KpF8ANPg1gnDgJq5YzTQUUMh9S8fG8XGNS7",
  "key23": "2QmD7KpAcMe9sovSP1wx2T19SwQcRBpLMXBhaVmBa4TMBKq6rYZbnBPEeoEPjqTM1wEWRdREKrP9j7WWHezSadYj",
  "key24": "54ew3LcaV1CU8SyrsKUvnfEpQn1oaVYL8UqUW1RbN1M4P4z35LD3uxxAZNfsCcxczEDjzDHLgAD2XGLjPfpAmAu3",
  "key25": "43gmbzzko6fXgFkvMEAfSd8hoBMJDEvHyP5qKdSRDitibKtfeejWD1M8oritjyE1nifHy6wjTPtACtmbjk3UXDdF",
  "key26": "2RH8rA1549BMFR9A37mvgRZfmmm93DetfGgswPJvRc9ntdBPuLvDz1KkYZ5MheG4xrtr72sLHbVBcoxH6vKEdH2m",
  "key27": "5NRUJAgbi9U28BFzUm6ACbDLC1MAdSeyKYhGDsiCpnx8WCGWbaTmGDy5AN59aTZgZthV9BWvDpNZf6oTPba5b6SD",
  "key28": "5bbymMgkgjJbXxsZ9fvcpJfSSLWuFHP23HDkFedDNx8pnL2o9UVvn68TeJd5fEEgdNb7dRpST9CdHfvmkC8oqHYS",
  "key29": "49ZRwiAbiMyYCjT2SyZCFCy55HEcL7hecUE4hP2qvjyshTHKCbGPFbvToWjkKGb8dmC43xdVjhb3ny7o8JwXvfND",
  "key30": "5vD5vJ14BzCnt3yesGVmrqJCtt3DAsojDL24A6LR7ZazbjYH94zt92FRayBmqvNzLyN6R7BLLLi39iHvtYC2XzAf",
  "key31": "4sAM4LwqxiTFR3ofpvaMbd7xxwgiTkiAZ1ssta1GEyh6vjSvCTWnkZ7mrTRanjw3aTUWXwVix8rdiBRhp7Z2RwmW",
  "key32": "5BWJx4XUhEJrsJegS2aoN4WWPjW5LuPU8YWVJVwBF1dBpHEm9kLrtp33xCoScitdi7AuMbLTQMXPXacnKPEZG3et",
  "key33": "2JinyK1axmswyuUdGsZHmrMk1jMExrdf7idssffnAU3Kzsdehvi1iFSdNLPfKGjMWQGizN2T2az4nr3bbHHJpncx",
  "key34": "4PPtz9h6FUzEAVZpUXAR92ZTtczvRXW2hMY3Z6qBRcj6Xnam5ux5Zo2g4R6TG2tmgd87WDS4EPpdzFxz95wDeMCi",
  "key35": "67hTixQCFChKwPZBNPgKAv1EEDxEiA3uVENe6r9VbVxMwTjUPGGuP26DkmyuBNGC4RQwSk4QSFxp7r4bJvLnHVAq",
  "key36": "3BsWz1ckdbpLG1MQPPSEofZ5SxAtgTT9xKxhGeCynK6WeqvsTdmLKToZqZAaxPk4ks8kgjDoFtXi1cDcJqgXcVZb",
  "key37": "463AsCvXxbiQ3NYZJVoCWAWmRUcFR94qd7xGAxUTjEwoJ5vecyB7WujkagZQeXhWJBwmJ3nc8drW4ThXMxr5JRM9",
  "key38": "3Gr32iqsQ56wQwc8ZRnvRaX5SDmxgHRpeCfDfXsRYLDdfUEhXuu5W28rrcg4Le224aVdazpFTJBZtL4B7PrJYFVf",
  "key39": "dZhYL9UAMWx5cHb2gdDy6oTLt1dFe7TPDbMe5zfgE1qT3qodqhG3A5i9momdwwRi1muZHXW4esg22HwqSc3iAnQ",
  "key40": "5ozeFTkMWTEUAZuJDw4YcW4vFr9CKCsaMprEbPZnM6D6jTkHt3jP494wVucQkMGa7M22uD9J3PjoMfqhyWugUgFJ"
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
