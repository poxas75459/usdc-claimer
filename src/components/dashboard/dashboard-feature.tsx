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
    "2QxeKcteEBrGZcjeXdMpUEaF274xfVTGUZMSLrmdAxNa8TGMYjyzbJbz3jcDiN8cCwtsCNUov18fPFhb2CoHFtZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgJSW8A7eKpdCB75nmvWhUBEG3iyu38PS1AUGZniJ71AWgQhrYsqbZewZ4VC9qZYuNF6vvFRBw1r23wqeD2K64D",
  "key1": "4L1RKGow2SmXLwa9LcmeA8vHhfWXQXnjMpkqGppw9QhZKZptAT7qxFYLA1hAoEg28J6tyXiUnyLPheK38TB7aPix",
  "key2": "4KR9hTHifoxy7NA6ka4q1JqS4VGi669uDcMaxEtY8FLxgbAfbYZf13LnEbbFARAqzj46cQoYAPW7ChKrg9p2Sw9n",
  "key3": "u5UWvbAKiDas7dFCMBop6DHiU4UnCYPf5i9Hz88NwK3ttAyThjRRe6aGc9aLVbYGmsQvvR4SpMBkUMZDR6ZzCkx",
  "key4": "bDSqfGRUSq42Zu8N3129mjBPgVhP8EtJijPbbZZM8Q5otvkPSVWrK274op3rovWJbVqjGy3QJR2FH7TBgEqSidf",
  "key5": "3T9S89WDNKXhfEGXkNs4tPmJNTegXUp6z6kKvShTak3fKah7s6CY1MxvoSGPspoEdayRumGqbqWXDTdo1dn4kiPc",
  "key6": "2qoW918hTMrq88ySQ1U8gTNCMrJY1FnKukArg9oqeziAL1EnHgtyF8NvKQ3o39QitDEpp7J4S7ivw2LonF3EFohv",
  "key7": "65Lx7wKXy2uaw9cCF3FqNA29FVXs2eYQWfC2NuNVD7dNr4vQEXDnroRTdbnstTFE5C6GFCt5MWfSm32ZA22FGqsL",
  "key8": "3baMQbDJGrD3zpAVD79FmgZK26L8kxxFbFQhq2tWNvWCgKuWSGN3Uk2Fw79fXNTcb6UqqnFNPv1udCXvb26kXGT",
  "key9": "5NcuUHM1Wo5RxsAx6covcGpUjBdpWVRMJEWd3v8okzd3jXByHhwrGPXqJ3ZetVPDUmwrEtDU12YhjHkciTi2Nu59",
  "key10": "5LcDaepYocej53SDPb19KJZjtweckys5hr6Hs1L3RpX5dhDicppo1DVJZD36DUSXkXjbPFVDSkPDUtDjnvSYBGv",
  "key11": "4bz32aX6j5fywiSo2xtn4UeRAWGgeJUPuntAc2gTD7L6xY5ntwNq8Ze2n3MYfHmqWidG1CFJmuhCNFr7Z3QacDj2",
  "key12": "5pwtPP7Wv2dzejnMee95gTSscMoVP9T59CKC8P4GDDxnRS6ks1jfvx61xLArVoRPrs8hGei4br3VCGeKnzkJWFRw",
  "key13": "4a19c9rhWWxuyZGHoaLUXFiEvVMLDJ6i2MDSK8XZTnuoJtd2avkJy8FSbNG6mBAfcAFPCJtnTCKYB4r41KKEZMN7",
  "key14": "3jC2xxaY45XV99cPqasTBYzrY4yqXbanx2Zeb4AFuZzxCdwPNGfx8ApV3gi6J5NxTxFVudHUcqxwDTXHkeg32nYC",
  "key15": "3EfEjfb8NAxj7eZhNiiiBVN7WfuwTnsB9iJBndxkuoWzpyAPV74EJpWkoy7d4fjEZGrVpaKfwcnkhVYK4a7CSXp2",
  "key16": "4GUo58wkfnzaZ91r72SCC9iH84G4bY2kCChqeLnxFK6EKJ95JfJDZ9XyToND4jKQr4WkorkSPbonRKjstyzHzntB",
  "key17": "64JhAPVrPbfAChce3mxuMyokCAYNq2NWK5HaFEdJ3SqWP2sukdTQc7JT6FXZtCm4N8v24dXmc95Efhdii1Piq3uz",
  "key18": "5bdCLT21TJXjPWzxa75M17dheogW5dSqn4cRTot4Di1JQw7uY897ES41dPcj1Jn8HvDRxjbv1rMUTcvTesMrRW2U",
  "key19": "5QSsPsAzFQi3tobwevbLbyQtYCTnybTf7CtkzZs4QbN8FW5EHkogGZU1wsXc8P4uiJa9XyUobpTGpw2Fjg5uQBLm",
  "key20": "CyyVJbdBW4imk9aDEvit8QU5urPXtxrCbmSQ7rqszCiC32ABrwRyHcwMNAnSqBK6pScAVUQGQktQq85HY6EryoA",
  "key21": "5CAvptNzuNzBjPU5aGajVicVAy9oSyUpbgMpfYHJvzAYGbiMEor95HhrZBRv32cQTKC3B7phkQtCBseJ3wpriXWZ",
  "key22": "4woGktXLPBM16giJkMyu797ffgFEAyxU7EiXyQRM2iNr3uZjmg9vg6Gm11AL7drFX3B9mkrPiXC6tkcdqbeehvwk",
  "key23": "3eeYUUx2qZdbwgCduDtahbkwUDkUz4JLz4XbhkVeiu5xHZ32hvSqgEVWR91gJstUCc5VR78v9fcm1iPihwbXGbCe",
  "key24": "3FASawggL4eRwnrv5XnjNJ1uqheFyMH18QBhaNJBkZ2DKQPWMCsFceVwL8azMDy7zuYPmZUiMptbZHXRGGHRKaWs",
  "key25": "8ssNAUQnrtMY3RkKNvM5wC51f6wJJLuTG4Vhe6YmgMV9sqqQ2zhhLZ7k3moHnx2xMVRTAHRnhyCqEoQkCawCuof",
  "key26": "4fmRSy3toLpJcGqQhUjo6WCDxj1HTCvyNqCUdJ7haoQnMtvKyL2imj74Cke2ReXs5uzBGfWTiHzww9A56csG9VvF",
  "key27": "2xoq8kay3PyJgxvBRxamnyUPrtRHyxtR5w2imHmAafTQWcxSAfqx3ZAiyd3t6cG6sSSfFG4FMUa2bYDAZ5tCVFrN",
  "key28": "3rQuoZpv7AtvRuB1FSVDUpuucv8RJWE4sA6F74CnjkRyS2KGMhhkMhFMDiJoeQEkXdHBh6qadbqCR5DG3hfdNwc4",
  "key29": "3oJHn31sorTx7oiqTzNSReiwTBBmKYcvBznsFZE5zjgPvfp1PK2jPgdoNou4CCekd2EUGKjbTQmBvhSM6ETRTQ9y",
  "key30": "5euFRABMkHk4RNjqW9FPpZAq3dM2YXL8aatq5S1jgv9RpxZtTkGKn1MUCpAXw5QEXdpsHtiQFoCSHNUKVv1k1b5T"
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
