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
    "61kwfzup4xc1Y4b1SAB9R8KDXjg1Sr29HWyh1qbuJhxfW7ZztJyXsj8nxtPRnUt7jJR6SvL8zWW3ct9vqjtVwNJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8haGnMAqEB87Tf63z2Xxkqy2VRb4RwTc4kTg2ncNEi4xRgh2A8Vd5oT1e3EoeqZVV9Sepz8CxBLfodo5WvcVty",
  "key1": "3ys7ksVzet4ogNgH2fk6KuTiwX39LVKBYBaWBamKCq9HHSxi3HHJXEFYSPAhqnsTMrWCWmoD7JGYBoVx7uo3SAc4",
  "key2": "4svMxWQhTHazH1m4CzrtC7aqUDziEUg8fdwcxvjTdQpdTPSM6mer7cuTMgkrZhZhyPNruVCqWhd2KBtJE4JfCsWR",
  "key3": "wQApxDNVxiJynXBke599ZBiPM4tTwZU6Q6MfYyh1tAMYNZZxoxJfFC4rxGDsrwdgB321PQNuvPUqxYZJaw49Ma9",
  "key4": "5BbMVyS1zGMMwQc3kmtZanNprowgmzC5BUN7AHoSXeESj1u1nHfUXD9SW4VGsYqHb4gyhFujWnZ7HL6L8JYDjPwp",
  "key5": "3ExmLXc5GmyiTWexxXrvyVr3rnLd65vGW12RD7tJCZywFCChCNwNSzxXEYV8ZhPXsmDYqCSHg5ZP1ezAj8LDmrHq",
  "key6": "4s2Wz4kswDmd42zN59dcVJCxVYpa1Nb2HxUtrZYj5WK9jGK1TEqPizUwnUvnFqyaiKgbrMhc5t77PXT2wY2a1f2D",
  "key7": "3MpyDLuZyjJF6mUFU1y7h1PNPctYLUiVxKTzaVq4T2eAYdRWqjXFf4rTnLF6iiCdi6cyqL7ZG7rmXjaSYdcvhaK9",
  "key8": "2tdTmdW7wvKMzo3xFwBHa8PWRoWWKtYZN94LiMAtZ8HjCKv8Bi1dMMwCBxQZA5EwAa9Br18Pqqo6qdsZDSTCSkko",
  "key9": "2B9XYE1wuCUh31WwVgUk6NcCMBJaK1eksMWME6M3TZTh6ALfdVAa4zYxrZzXAn6P5PHKEFfPfs9sYRRk5UFMoXAG",
  "key10": "5Go25TSzeAKMY7SKHZpDJygWmsRb1D1bMcoRVhCxdA7kfcGUcY2Mg8Vqr9u759cfuXYUPq4duNtvzW5yzPoerr2N",
  "key11": "33fP833fDhCgAMP9nAaedEHecAyxbxLCMRf6yvZVZV2yHwHzhxWdUWLo81zw3NJXw1JDd9wUFeMLv6hJR674cxbC",
  "key12": "KaRFV2WM4WMtZLfHmd47Qj4d1MEBfAR7PWi8vPEn4SxrShNTYbD4x6LT1MAypFwSjCnoyFFrZsj57sSgud8rsw4",
  "key13": "3PguZBJJk4ihdatBkApU8QnoBiVmzoourJx2YmyYKaQrCBeU8KmhQc2Dsri57NLPieWVhnLdRqJhLuBXRhqo1yBz",
  "key14": "3LDh2RTt5FkQiXKbnc52XTgtr3GchWL9ENhSNhv41g58mDV6WgcKYzCtM7wHiEkUQU3uTVx6PgjgT3HFBkVCHpvk",
  "key15": "3ci3CT8aR71bUkGrFBzP7UWCY9FCYc9Td8v6hTjLsQVrsdEebumBgQUQKjRpT4rFmpWcJcBsYsdNTXRsTmoADDkP",
  "key16": "2yCyjhThbDNXRxKrziBprodDjgDAH8tLEwgtxgpdJV6xVjENEStWfBPwxHgqHztLNUG3kUbBkSP59xu2SnpkyxaJ",
  "key17": "62aDiALoj6xqecB9GxMzXz1K6Y9xmPnUntw5pGTNaxHaLnUkyXukqTuhCmWYzyFn198TNH2Jf65TCdQKbDU99XhQ",
  "key18": "ud76agSrZazVh9UFBnN1aqu9bGdna5upKwQbFUz5cBXVVaLJm3eQUaw8Fe8ck4VHwMZ5SsamnC4fy1V2KPs1YGF",
  "key19": "3SEDHtHXJFFEQmtLSqx59uVNUbN5yaibUp4xFuWN49MoGkX6Lm9vyadE3t7ZwrAxbtPg8s6piGsx8FBChB5ByVYA",
  "key20": "3NvzyACdMC2nSrAW4ebNhSjuGpKM1mp2KDwaQGZsNHxucRwoJLCjJFxQXHQhvaumVpnBz2UxiFoRJ6UPpwY7figA",
  "key21": "28h68EeRfA4puizRtn7cwQsj3znagqGHgUHEetrkB13wp2fzi9LE8myVp2K8aq5Hkx2LNKJmUMMnL9Uo6vdiK6Y2",
  "key22": "3EjMp4HpyLhr8Pp6ahuA8LpXhY76jUTtjTouX5AE5EpuAWGrjFpKsHQZ4ufpHjPqfzGBCj73cYQVdqbncCeNdxfC",
  "key23": "3aPZurP8Xj9G7FvvcBdqXVGmSC8CNnEjndDECWGVjmcjSP3hU8oEbrepmL851TvpcPC2T8VcFae5pXxoNzMfPAfr",
  "key24": "4nKg3wPz8RPYDpMfAWmBdLDGHZViiUNmRkSY5pr8Vm8M6eRrfr3BT1poU9ju6zxw5MBpggSEmDqEHvEv4ukvPNWH",
  "key25": "17QyHcEF9jwbvcVwDRTdTnDvDoutpCN9HnYWJBmqJWdi7f47i7UowfZikoqR86KMtB7mKaSwV9wBpMGDGL4Pxnc",
  "key26": "5whQGqSdxp5LYZR8N4T4CADwSHy3xsaXggBMwfWurUvq7FTHzGBcSiv63T766Mm2cY59mGtudqTP5oqd4ikTjHUW",
  "key27": "2ACvK2udPfAsa1emfvMLhQHuftyPsjSC4SPVXWRoMnDeyMVnCL4VjsHrHEkwk9PHkLxXnMf1B77UGz6ME8bzgRN7",
  "key28": "4whEQMGJY3GusJgtKd5pb6pANz7Ygs3tUiVXjXFCmruvtiacApvTtK5s4uZWdqy87JJbjyxtfbcQJ16gCKV7WJ6D",
  "key29": "2jwLLRNFh1AZB1wL67cUKQmi88KQFvytJyhrcqxSK8nCwXJxwe39tKwcSUMbXP6GjZbbPs96K4k6iCQo6FGe41QC",
  "key30": "38GGPoxZenEoH618L6dQ9qkAYyAZVNCZb93MUUPjvAGqA19x3fD6KoeCBXoVRCQd4PdMwCA92TtcfUQDYAHDViLY"
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
