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
    "2xHqLqq6sc5NzCQcXNEyFDkJMnJHsTyeQ474syomW2ANDXe3DtUGH7JKvq8quqrZgUsiVMUN72BcvTFLrFyt8GR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YbFygJ6kUdAL4NtQRPMda7gwxttnvrbTnumbYe4GoxW54DsTJJNqRh35H3bbxS1wU5dLfdCgZ2uc2xuhitjjnpH",
  "key1": "272bptNNg2xH6xd3QezwWiCRXKQYGDXDqTPUi68pM6DHG3P1RMsbUmrX6hBcnGPWVD7zTJMQWh4jBiWJTh8AEhHS",
  "key2": "3BPkyNcTxsnbGzKp66ScpXcapAaUBUYp1uYfaqC4yRLnhkaFR31BZNYHSLhTxcw3yJjFiaAGySXAoPjNPdEWyafR",
  "key3": "dyybbnq7PjdQ4FjUs887Fczpx6gaL2EB6bxKHDDuggCQCUqSxaUcUmFT2DDm6K73iDoLH6UfonDGD7QgXCnagJf",
  "key4": "ynHhc4T8zFhSbgdSB85gG1HpPGgbEF6SXz9yGRKssUe4ugpcaGEPpkdNZ8ZYkJeExo9WHNXK6Qg3kKJF3P9RM6A",
  "key5": "DnUhyTumc9zDXksMTaJfAP99B9uuxJLh4PEiGTMD4JKr7qvyfHP1UYG28AMnB3nfGSCDaC4mzgUrDCjXqUMubx6",
  "key6": "z4ko9xAs6MLMjMjybMjdFt4cvxRHpzVW1WBeiwxoLjo26r6ZFPhVzkX7W4SDHnEqHbnRSNZSd7yRfWasXZKq5AP",
  "key7": "LHjBAqQKMvttsXSstgYXaa5CnTcHBX6um8qYcuRijAfgpFNF3HQDb9i5KN3sauQSK4Z27o91zBv9vEwQShGXnHM",
  "key8": "3ugJDHAtM5FRv2t21cMwhxXDz27PL7CKk1C2qYGqH9D56DWvFBoGon8Sn3NyawDpEfGJifTQHAaAEQGS5t9F7DwB",
  "key9": "4D25uRNMNaBGojxbatRgLx124EYDyLFD7QFwSHYpmvaz6iZdKBHZ3KmwhEuTYD157KRRHBozrWLugQQV2eWgbQyu",
  "key10": "58BTQqo2SyKztCeK7NMatvakFk7mHTpm1EPecWs9AjJkAkz2sJetgcfpEY1CdmsbhBGiTs14fMhQ8Z4zeRZPvu1b",
  "key11": "2w4ErBscU8MuSjrPmKri4RoFXV7AArUPS6wJHts4s5QEQDh85yAJH75J9HDM8kX6GLMbv5caPdfaqmEqabCYUEd5",
  "key12": "5qNFeHbrHCHmwfwugNbSGUD8ZKEbkPXLRBvG5zxCzXBgSrbFsSdRuY28tiN23gQZcwu56YzrtYqSPqn6FDBmbwBi",
  "key13": "4LE7qpZYFJASWUJ66vwSCPjR7tYnHBW8vhBEmxQzrpA6jDgVrGNSxwmse6dbHAJSfqxTtxCFoNFi9UfLfxyeJKCD",
  "key14": "4Fo7NZGfkF84i6aFdiLeTfL4kSuo1X5RLeTZVpQLVu4WjieWdmVnrPikju248hxkvXHRjTkxJS7fcoZVxDoQRebW",
  "key15": "5goj5x7e26na7r2iqYXErvhEN2DTZtA61scPGU5AKPPNxa2x5r6tACdMq28rAW4qDELTK7CfAPeJr94qog3pvSae",
  "key16": "2AQHb12v4jNtJhZyRUbSWfj5mkMmXgyg5DnomaweJZzJNXhqNECC4W7aYdaTbb2eg41Q53eyW5HAUhadKYc4btLH",
  "key17": "4ThHocLy18PpadweUVoerotuooEmZ5WiLHiCkvVSBi2GA2LgpYUdCbY8uiLUUdNdwRry5GepqHEMj6Rh4RhDozNS",
  "key18": "5fGW4V7mTVovU2z2vtQ7p3r2dPqsDuY3evkymY2JityGoQ3PU4mud5oFspAqAp3bnMUDk28bvtHYGKwWmAThqu8r",
  "key19": "2qPcx2MQSHa2RnWoCNQycPKZGnTMEuamuBYzZiyqeN7Y6YPHA1UkgyM58PmfLkthqgfYweKNKGFdZCXnhf3RGvTU",
  "key20": "47rKPh26Tbbt3bHhCx4KfawzmCdxkzFWdDsrzjMWjXfrUDVUFzqzd8mVJXeDBzVzPvGrry2aeM76P8qpdZCe48DF",
  "key21": "6XrwFx3XWkrx6o6jnamDkMLKVimxYG2qyjvcgsYZ7eDe967cf4KETDbjYXyqM1cV7snZWirrNSJaMQRaQhDks4T",
  "key22": "4oUNMi4Nn6cb2aAchKcdVNahC1ZZyw8r4p18fUFkDGAiErXmnbQtBH6fPvBnnNznq3Mbf9RT1bh7gs2e4mQsqTeE",
  "key23": "27sUwnp1ufvYXKgyfZjUGcfZNmSQk7n3pDu9e34JknmHbUKBhLq2UT347ggDUtzXrCMyDsw5igWBTjZwQenuajMC",
  "key24": "43WLHyz56Jzc1nbkRhGDE1RvquCQrW7sgvARN8sejDpMj6zZJC1zERm8Z4z3xyx5yAin9DueaDZLTyiCLUv2ahPE",
  "key25": "41rDaA3QT5ncf1rTwfww9HGNJaTkQXgd5PWtodCzWJ9jAD5FpsWNv9aF3ZV75STSYKxCpUTQBYQJj5Xeh7nrAqAL",
  "key26": "5mtV2T2eKXctwh1FHMLGKL1ZgSENvf4ethb5eeWcKGSLajwu4ZABG1jTzBJBXvdmVspKDud7niiCANhFCfGV2bWG"
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
