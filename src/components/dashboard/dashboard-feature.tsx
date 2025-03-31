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
    "4mb3pnu9xHSZKEgGa6Pn6fwuzZun6VoXgspzzb3VZAhQa5wYmMXpsrq7xAvSA827LzQrT74pLnEtPZLQQTuCBRGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tzWXNdLvW7GT8DHjjSnnuTETBTVJbSPuitSnjb6sG1J1aK7gaxEC2zjaPwN56qLUEfP29FvipBP5QjhdAhjPJW2",
  "key1": "VdJQ72qc7rSCmYXdT4npbR2eZCNdxoEjjcTpFHQj4CQsQxRea3EK88V3qC2GU8mKQZaSzgnb1Gs52ijyszqN2jC",
  "key2": "5uTRFkCjMoVZLQ4o6wfQJC7szLHW2EymdB1y2xnaMtNtvZL1mgp8L71yxN2LYbKKapUi2XVLJTUzztW7FaVAWEiz",
  "key3": "2T8LSTPt5yMZUk4VJK1SgygZvK5vEHaJJQZMeT2SfUzxo2gphhqTRE8wVjQX71yM3xrJw2kFhz8H35WtDBxNMuVt",
  "key4": "2mQqY33DRB28Z3QobchyiWvAPzjH3RZYBcWmcWu4imubb5DyPuNPyHopL4vXDsJSqvBi8BCTHpLXUW8bLv4TjHVH",
  "key5": "48ZifS2Xw4TsV7mWSkqunqU1h6NPUTPBMcHwDq2ghDKP7n3mFeLQsdzEdtmZtcRkFVQor41R9uJGrVPvog9pck8h",
  "key6": "3bz5WHzx4XCv1NSwH7YWHbvTP2pk58LvTSTfAdA7Wh9joLMd7xRiyPteaTw1WxJto2rddseNeTjvrNbNUgqczgki",
  "key7": "3oiCew3GN5xMrxtnyFGTYFijyu3M1BnZ6y43NGVuJBZvEqCRSEDterVAonYTjALBPZV9wmFHhVuUY6SMoFU6uMx8",
  "key8": "9NVPgK2Dtwr4dLW2usa24hyokaUGzexBgXk1a7sKCRsNhhGJAkJXd2ZLZhaf2wKWwLGXFLPVduc2vKjNs2FfVCT",
  "key9": "5ixY3Ga5Dw7FkTbaJRvRYgoNSofHnJoNP7mQtRh6DC8LqEV7SDmoWWwxsHssEg3AuCfZUfSem7diRUJyzkzffdsZ",
  "key10": "4bYtLjwc1KUEvhBzLA1zsJrKTwhYeEnFZ7T5orRukAuFgbbmy2ZgbGHiZgvFp3NSJzFjoYFF55fyvtt2D7MZxG2k",
  "key11": "5UGTjFsxGLeBzywpb9QheavysRrnKSGWAxWGBoqXUXHMm6tZmviZqsyeZBHDoEihAiixB2Yu7xyCofJQKLHgBaTw",
  "key12": "bpMTWaUQg17ER4Je32pzKt5ft5nV2ETgSPbogG2tA22ETbvk6HMA8KFAbfBBZ9hKioJS3ckJmQ29nAMWdF4fYLV",
  "key13": "59PpzLCFSqDhWUudBURB56psngKUirsG9E8xYC7kYsYf9XuyHuhcarzdEEmqQsaqN6tbFzK9Q3PM36pFjaGJ4qZp",
  "key14": "5sYhPinfJL5gTiFsKabJtid2KUX828d2gsYFwfXPTDYBGWv4wL5Y1qVd1tTpaXMsaP5xwArvFKHrtkjKKF1KZjko",
  "key15": "5YLTk4Rs2T7XC5erKme4wLc2woEJquMyZfUJ3yKXhSLG1fJZZYqPM3TiBHh2182EphbnG8Xi1pfe63ojpseybRsh",
  "key16": "bFBUJg5tR5kZ1t1boxwL8jD8E3iMb4oRReaQodhJDrJTR6HLMA9BzzFNCnUcpPw7uTJdg6LKRkfVxAwM2LdavzK",
  "key17": "3MksV47FfhN92Sztz43F16pk4c1SGsa35dgZ9CNHQhubFrJg5ZxQrLSMvwtgjAdwciZ5APrrcZzvRyeBn6YeRXsY",
  "key18": "3hR4LXte8tdmwGEKWtDDkr6mcqrXHA2UAnNDh75gxMtSrn1svRr3kFYp2jdechoaCCkWS57k6seukFqwSHQMesog",
  "key19": "2wER3ghnjwx6onAShc8q4hgd5U1bhsLp1UmENe4ZigV8TCCMRFUm54Sf6D1y2VpAuqnEp7MpBiEGq6dhULSveeMp",
  "key20": "3eYPoRgSaBqdDjQpN4dkBrNbrgTmX7T6MyAWLAFttuFjkACoFZFcfSynAJiAwLwV5X1nYgRG1AnhjVsX6QCisTQo",
  "key21": "2hy3dgwZTXJwqMnq34cb6Cumghx3qcvPCRy7e2c73kPE1WDyuUtzffVHSJf23uAPFCMNEgWevyzgHYBdK48Wd6Xr",
  "key22": "4fAmc2S7a3TrjqyhD7brTHGjDCYDbrcZRdd7VqnembFmHoPmHbKrd6ZtPGbb7BXe61oaVmMxY9d2E5oVhRHqXMLL",
  "key23": "2jndtEANvb3yqxkVKEZJs4sRMPunb3XwPecuzK2YRLqUa5txUU6aoVXBQKACsUtxWhXEqPrM85Aey89MNWGD8h7y",
  "key24": "4rd26ww58sqqMgH75JwrwP4LHiq9jgnRUY9wJ2EMvPuK9FKa7cKuVYdbjZYuQ4QnWFrQAQT3qASRFZHFnUsxPaLS",
  "key25": "3YanKin4gK26J1amCKLhWq2AkJRXH9TNGXM7k4yeXCoNrsdDfJW7qxtNUM536My1QKJW19gVEuKCcHQhomg9Td7N",
  "key26": "2wnt4ZDsrqkT4M3tdSQjyjtRNDML6DYv54rd6961hSMxUkwTHuX4EhUbkymj2cp7bN78pNUjVud8wmrBza37QxEd",
  "key27": "eWy8roHydH9L1QZ2TMa7xPwjjCskU9Tb4D49GVKQWBDYaXUC2i4fA4V1NERRkeiFyu2mbMt9RTkMX3cwQfFE3Co",
  "key28": "3eaQGdh8PpX3ebFPRbEAKZ5XGhAJrjZwcpoDXtHnJ7cRfr7zw9HiijgBq58ZN3ZRubddDruPiuVDnUBkxh6qkoGk",
  "key29": "4FXCpscSxZGRkSWzVHDJY9TvSMzwH9NrwMdXDQxbVJrt6C45hMCewNGjttrNfXxjqgjXiawJkn5vvZvPgsgVYhSx",
  "key30": "6635cueihiFTwee4Y2A44y3WiHqywgwHQ5UtZNUrXaerHXgwQNMzX73AhNQMycK8pa1tv3F6G2s9wJHqi3BUdusK",
  "key31": "5o7Yn65UKXeSRidJMPjs3RbmEMiGWYMyLYP69v1AhR3JCxpFf2vVLt451LKjzwjzWZkHXMMd1FmUtEukibFnsQSh",
  "key32": "xQ9ASeLE3GNnT7QiBxuysg1iLN8U8brtCH3a7PjGkqgdr7ALwCdzWoztzTKcnm9zNM6K4sksAzPf4FrqPeo4vNR",
  "key33": "2C8aybubqtEfVLH13MyMt4Np9pYpj6HJVH3WLP8Pdf7fBt7AZdMXKEii2mHATSfYMgshJXdFBEVi6ZWEaTxB6j2m",
  "key34": "5w1NMyyQtiUaBCdAGGKi2rYhQKnjF5eqxmkyjVMvBEWMN2euXXnozpYcPjnU4JRD9ua4fwRDTG5G5Zr8EWHB1pAM",
  "key35": "3yMJtGHYy2USgp9YTWcCA3ybvDxv11Y3KGA3Ci4x1eEq4LtvKQe5GH5jWC5hoE7ChPBk6hJoq1UShcWkg4QHkPBE",
  "key36": "2WSqx8GpyVM5uh34y62DHUC3Dyauk1tDkVUgJ8fTppCSYGi1XUXQkDmRcQmHE3CLTSKnTSRzdL3jnbZYCmKmD6x5",
  "key37": "4i1aXzxdXa74hVrMjJDQseCgTC1hERReYZnSRXVCvFpNjPPwGDPF5qm1a4iaZ8urGJjEQHz999c8gG46YSbMpp9Q",
  "key38": "3c1sJ67cSWq9kTC8h8Vn156w4JJHjaZBcGGJwHBciHpoSRRkiMtaUcQimKspBYUmJhpipaqEPacZbxF1Gt1LAFGo",
  "key39": "W47jioKq2HRBTqmUCnbi5bGuhQ4iR5FCXbPfxxGiUjSHLFpmqGH1B28a754SoEHc128GWdh4HDu8x684jFT3Bzd",
  "key40": "2jXigBUZdrANNNMGNqHjdDKStU4TFVmqQ6hqCWbjp8QhRfXxhAV9Kurz7qxwFnQBF3wRuoVnRDa6MgVYxmb3cVc7",
  "key41": "3FHiAPx7cLY6UvvBTPCvt76cYXPnJog8unQ9iwjED53117QWj8gexHABue7oecwoayCQrqq2PhfMjUk6SDj6Gaz4",
  "key42": "Qd48yty4JGeeWSzgGwWZmsxSFbHsS7Zu6bQ2e53SeXJYuGSrp7iag8G97WZHKNC6BZsf4BbWSkAzBhHP85e4m6M",
  "key43": "bJnYXWyEpD6Wm2cS9SVxTFSD51hhZ2ZWUirNsAiYVTQdvQPPDfzd7HoEbLsLsY6BT2mMF6zPtJgsLJm8T33U7mJ",
  "key44": "9MfHKRo8ACosWV4bzFL2BxnykWN1BrVAXrbui2zEWLbt52vT8RJFybZzzPZgsPo4feapXfo12MYAGRb51ndGX3V"
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
