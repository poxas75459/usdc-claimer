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
    "27nzKzTm1uxPgSZxKaq6TAvoZYxhgsSQKeFKa4roQ3kh4rzdXk5rjY3NH9nAmXF7SKJBBr3FTsC6J9bT4WRdXPFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jiYLmZrSzzwJjeAHuZdHKVED9eBTqLZnjyLsm1WaFHVgTCWaeT2LkqqFcoXCYo9AiCjwbCnaB1njt5xj8TyMPPA",
  "key1": "QMEeuQHrk3uz3T7XvrrAN5xW5rT5iDwUgcaRpE6665TG3bBn7UiqXjZ1kc2uG4aKbcmaXiq713aLPbwaBGpumnY",
  "key2": "2iytVsJEcb1oERQnondR2wGQ3ejHzk9Yq1GefgyaB3EEpFXpUrEnEKZNN4AhmswKFpsLvC9B8x346pgUo8iFJ971",
  "key3": "3RuTp8Cj71T5KPdq5Jjr1cpXLSE2GA6NSKt6XmUfpQftMKenaBfHLJ9ZdbwJzK5eMWb6MUL1Wz9RpGjoHiKhs9vk",
  "key4": "5buXdFkMg8mSsC52PDcLHSYjs8AdTXZ1HwC6E2mE2dcatvRCN7L8v7ndgwpnqwdhUXg9pSN6JBcZUX12RhSohwNn",
  "key5": "3R7fX469Jcfm9W9w91EhHPoWhupqVMdUD6YWzKpPkAPna884WxWSiCF5fabcw8FpaMjZGCazmnkeGu3KzxVX9pkS",
  "key6": "5Kj42gap3ahEqmFWTVAt3mMXgVeiWGRRaSgUDWFBG8WxH4PZroBwcBj7YnG31zeqgL7MRdyag2Mh9GcYq8tXvny5",
  "key7": "4BiWp3CRHRjpYBxEgRdtr1feSedZ91SZnfS7FAW6uGgUUKF7LMd1UBV1HoxGbg932KAwah3epp2dAbRRuDFEvdei",
  "key8": "2ZP9rgyHTwRhNqJixeRCMDgzraidDk1EmLUn8otzNpxjqyoBa1oPusm5fxYF5DTRcWdig6dhqi1MnZGh5NxSjo3i",
  "key9": "4X6uLi4UC5gvvT1npKTerNCW4bwHjQCyJqunnmm2uLyP92ighmM98QrFnGZjvjDTkxkLxiKZPKx2MQ1JUpJuVDNx",
  "key10": "4wq9xuQcq6F1qs2uUyASDDAnWJ2fMGknqn6fFwVR16dJ5rhcAVm7kA22Sxwy99QrCCfP6zXHrLYBXsLfBuYGNwM6",
  "key11": "61xGK8ackCT2exBUtvgXpsWqT94eyT3B33aT9rAh2y1KHh8YuVogLgSy7jyTTXgnkb3yw3vezyjLyNoX4DLwmPtg",
  "key12": "5znSncrMti6ojJcLS6gXv8NaTvagu394rE2ZU7pnidfxZXfRSQ6qL3fbmAgQ1mRJ5oYojRLSLn61ESao65P4GyZN",
  "key13": "2jDWrn9Ry4rsJ81d6h9MzoQP55tsqArgWGNVjnt5TsjgJkB9ysjZKV9vvoam5JGuajQDKEXoVhKPHmgEWR46bmuY",
  "key14": "561VyUsHLFQMExVTZzDSgaFVB9arGZW2P6aenSW9xcQ6R7BBST79MfptRSe3XLteeP6F79mvmQho7Q8WivkLeftf",
  "key15": "USYPLZ6TucdSSYT4rAWUnwK92vJwYnGxyxrLY5XT421tnNK9LqYTZCDZq8pFPeZ4FawCUuzRvRvAcuUc7eXnvkK",
  "key16": "67e2GDeKAuKwWnhdfZgpyz53YG6Py2e92W8PHEpZHXmQnMVgAMKFv9KvZ3HYURsdfXbnWvritj5Xn3NjCwpvC2zZ",
  "key17": "61LHH1nqRkz6ySJAdXKtA6wMw5PTyeefmYZ5ijhvry7PHroSxJ3hvvfUNzSPioVppeqzsHHxkGVmooNmBcgxskTR",
  "key18": "2R35UF97u4iwwjZVPERSLEJGPctZKhY7BiJqx7cSnvefeCayCWyCJKk7QotHPoJyYhG6a8Bq5LVbeMPw7oP3kJ3h",
  "key19": "GMsVMAihcQPS5LC5AyMKv3a1VZv312fzxniozzd5Rje9StzhEHwbBfK46yn1A8rAkWSRk7ZLQT3nWvB7bZNRzDq",
  "key20": "3WdCMTfgW5Wz31A8vqpLvZn5qV2NiY6CEtFsy2TmaAJfVyPTqYXK9cMXv48XhV3mFggpXBTU2U2oXYwdD24krJEd",
  "key21": "3XzMkVofE5kob9eMKvP3eBfKReKTBPMMAzu3QspReiJVRTchwCsH6h8xByMgdDiU98RjJNtiH6PRQ7nSwUpZfByd",
  "key22": "2JurhRMLe38WizKTFdeAbXzPdRkGad4SpBLYjz3PsM3Fhw28A57zxm4wdZVHi9HrkiUeejvmczpQq563ipprMTuK",
  "key23": "4an5SmJMcTXQyRFc4QMqTQqXGM4Skfctfrf4GtGV11NgucRssge7ruPd4Jnj4k98N2VVz9mQ7qj6TQMsWTbnM5xR",
  "key24": "62mPykVj3KUuWW3jUyeB8tB2zS3B7utt4A4swtFQG1TZVEDs8rCzwjJybxdJdxZExskhQYb1bRL4iinGPnYmTGWb",
  "key25": "5cnk8YgrJeSYxRCEytqUcW1f7WbnY8L8sByytitCiU1ckcJQiY8Lb8EqcJYbBcSzqy13ETRsfLWDQHfFzVkvMGod",
  "key26": "48eZrmTLibANyVsEPckFYm2xxj1XP79kH6oq2yhUTe1AzVqvMhJDZ9Cc7fpLQJNBJDRvZVj9fSZjeVGmRMZFMHvJ",
  "key27": "5LV9SA2VfuaMNygTr1Fr6hkdT7cSZ73sGCxNiALUr71KJrYCC2FKmWAKXouwcS2cxb1GnWavcDCxAZJVNioEQUx7",
  "key28": "RN89ZBBRokWi3DMtjyerBQCXtpcZ6PFvCGZSViSUKgH259eJq2sK3mGv9KK7V1tqjD3aserjm9mksyd3jhgRavG",
  "key29": "5vtZSizB4YfZRhc3PVJK3za1BDqZtRBmjX3GvHNF1dfsx6gWbCztfwHNKwGfBSdWEBXGEUBevSvky3CB9mJi1bei",
  "key30": "4S9yQosJMRkhnc1yKHz8snUzLUqXYFf4AxF6QJtCpWj5kipZugGhbHff4k2tQJ5GgQAxo8zLLZR7iCSGLGxXNnKT",
  "key31": "2CFgZZ6zEwpD8q6gocgTBNuT3Z5yQ8fXb8BWVU1G12L6bPWZmjXdVXF6daDcKypJhg1oonbTjMeR4y1dr6z7giCy",
  "key32": "5f8airQMxUsKkkvurr1QL4iExBrt5xNTapfYijaWjRYauL3cz7QxxhMrxasCSAdbkp31xrBiCgEXpsEuSLfbc8ck",
  "key33": "4DoEXEgnBDvThzMTf7kZsZFQ1AnyW6yneHT7EXcNW3Dk1deUzg18BRNFNZoh7W4EPN7qe1iWNsRVGwPojYUHdmRq",
  "key34": "5rtvo6ZHYVxgCjULdmLTq3qixSs5vvwEWvgPL4uBse2Y4DNBvfJvThbdXKwe64mVVePgSYznhB9QqY2auNbhr6eM",
  "key35": "6Chx9FSndUYfZ9yXLgQuZ8rcfrkfhT3ni1HkyhajxdgW631PFhUXQD64iQBMKCiUd3PDQ8XvkdrMfNzVVCsAG25",
  "key36": "3kYnomY28aBjjAw3Up99LXa4eRc5C7dDFJHxZkxu4KZkHW1BH7Qxa1ivEzmtR7v89bpzRQdG1CV9Fbuo74WNXnQp",
  "key37": "4fMpcPLT2HemMwAeUrVS4FDbSdwVkCHV6RYV3TVuUfARPFDGrJ7XormFtcc3sHbk33VTyYkSK9rkPTeEQAsFB2Vg",
  "key38": "2Zcpx965bQxhgY5zAsrN1wQ9iSEeim7BQEgg5a7uNGfZvpAfXZrLSejWb546EGu9Mn1iBiYFG6Mfwh6jdtX8J7a1",
  "key39": "4QSmLRjeE1pVRYgHsRTT7S2KPv1JPBbHTeiZnv2qp49HnenhJxkCjBRT3Cfo3fdhhvoirfFXqFy1om6zzyYg99B",
  "key40": "4oRiVN1T2shparWLtGPPCrViCEyjcZzuwEfJZnTiVxokK3ofP76Ey6e8q4zEP5F7FXntMdLZtdheoYYNvbAwfNW",
  "key41": "kLUZzdzKgT1sdm9h7C3PcrfUHs2NLEUvYyH1KX5yzh6odTF3C13FQWquyP4tCfK3mdbGhocKnNucousbivPGLwX",
  "key42": "3rWccyjpM3CoXg5GmL9rTA9iYd2WGKMghyLCJxwJUeQbm3B8b42kZnNivT3S4aTP1owAnHYfySGE5sm8t41zsnYu",
  "key43": "5rQZkgT3FRTnkD54Bgp5C56fxSeTaxEUXvPPLiSCUFVPr51DaWDzzj5bVWb5aPgpM5AkaggWjULsZroTRqXE7qPL",
  "key44": "5UqpkX5i2PGmNtJiwaH2ZbnaLp9qib2vgD1fN9vdBRLYvVPm1LTHP7AkzXAJpjGNsXn4bTcL8unFa8oNuo6gMinU",
  "key45": "4N7BBDgcUkbvtqNuUjwv4m6E9WDtyTA1cHvrTPsnXG6idXLthSYDxGoLUxQcEK6Gk9zwxm6xwXYFCr9RQQQuk6yv",
  "key46": "2542t9GNSkvUgiNBKE36yP1A8qisXRS5D4VSFXevkiWQE8Ro7rY27QtrQVWoFPyJ38LDD2AWZWLsHyhjDJg2BnTw",
  "key47": "3bi6F5P7sEqoPYPXd2b9QJnQpMuanA6xAMWaJvQkNuH6vwZE1cUtEmZu2Y2DpnK3juTKaLNFTCzByrv7kaRGqhUq"
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
