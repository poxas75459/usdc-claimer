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
    "4eKCZ1wYo4nrWZPK14mFGhcjCxQcPDAABktiT9fxeygreXdKvbdoo1K2BLAo5LtDHyATJdRwLBfSQtrWwbm8EeRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYScXpUxHfrXXVHDaQvN6tDhvYro6GEair7kFFXpQiwU4J4fDqW3WSuZwSUCCWR6hSDcgDKDzmZMtUHqYEZousB",
  "key1": "2ErXaCiqFYB7xS9bVFAKrHNKwaYtR8qZrX4QfeFo4T7BN45mQUemPjdDKZtyL62XupGTupGh9oVJVu7kDmJHcDnc",
  "key2": "628ftLqaDZRunRsoCJ2TBrGNmnsSgMEN2yQU78pDrohwEDodYynuJb4wZYdVGPMMuZybd4ksojbp4zdNsP5Aic9S",
  "key3": "4BcU9E6SMkPQmpofzBjKtW53tbm6JX1tepzpp6yMTNdPwCTBmELWxd2XA2Lj8jk6yV4gCKntJdqn55MiZwz32LM7",
  "key4": "36jVn48qAVXBBKc6tRGqYU6jQFLpvyg9ApqcyiUmGFrsMSSEMzsMFzcHCNDgZ8CX4g8hEoTG5U19pHXiALgJRcoW",
  "key5": "3QaHiipy6BR7GyCfi5JgzyJyfLVFExDfAWG6LYm8TvV9V3RsUJAvR1c1bAsyitConhwFQaFGqX4M2ow9fqqrUnrv",
  "key6": "5xXgesVPzY7qqQD8MubCAtAFhdo3bdcXN4UsJyJg2Re13FhUEurdLwx17DExU9ann7fxZYErJXN2sF3RaaPXMvBX",
  "key7": "3Cjt9wYkkPBt1pJypU8DGrFmKWLM1o7Bi8CcCuWmoqQiaLNneAJeYy9hSN7VC6FQRF8fxfmMgVwU4Pty46jLUUQg",
  "key8": "4hjPQtByecoqfsQR4AnmNYreYkDBARkespWuXAyFtrrubdDCNa1LXYhQHn2wdWx2UPncFZm5boGSPxLcvXE6DBq8",
  "key9": "4NQq33Vv3rmLwmnwN1aSW2H8XDYTRDJUnXVEChuBDQ6YKex9YkxanhUJoQm3HCUv8k74X8GkoGhpy9SgY17CEiXy",
  "key10": "4rjLCdmfRJ3jgNAj59b457nZRSPBhfyvgUz3ht6giuxx3KNJHPfyLMr37bg3n4gSinh4WmhxE2mZRDMdY4NC8cje",
  "key11": "3oEocESttXzzCyZb7Bo8WjSFJVqGue1cQ9cQ6yoSfXtERqQV9B2WHnvK41LmWsJrFVQcBWet1Rs7Pq4ttUUrbuM",
  "key12": "oCnc8XLxGTdV3AQixukjVagNDL8iTtGUQzjUcBNPHaTPwE8zWqpHbkBR2y3YHRKKGQdpUFWEiit8t5HrZV31Xf5",
  "key13": "5VjNCmvEwa8gaUy1Zp7mcEKTZXVCRTLLR5byS59G8TXDheq8NRLtNrfPiankzqvYroYMbFcjRMQi8yFuhtb1iLvq",
  "key14": "4o5noEhoEGfZQ2twTeB9CYR2iBCe6rPVwTZUCobdjeRfxtQvNkaAxUCRXwQRC7mQsz3zYRXEWVmDwa8LVChyRPub",
  "key15": "2gGr22M6EQSHr7jdSXrMx1GJCyienZ5Nh18FcDcw3qEQadjWLYAY6QBzRWjC5Hydt2dAom2cm4wp6XDaQJrAD9rm",
  "key16": "56AMVT1S2wPjbEKA45cCVssHwPR9Dgp4dfftj4vPxAR5M5HgJTndCh2H6bHNzaodkrdi1RkuYBKvBhiriR6WVtnd",
  "key17": "5bBPaTqwaG4hctaWUWY4xNkgM9HSkSgT4gPk2fZ9tFYjBf2izpGR3ttiZPiy51TNNyecESo8GLyArxsiiqHWrjaT",
  "key18": "2HECCCDRj2KHiaFWfTuVCc4NXptrRUFv5aFD4AJJ7HnJJTroyq6vpjPCoaSUsoV9TJBnPwpoJHaVWdbuc7HaEcAq",
  "key19": "66k52YQ9vhtLx1afxqQMUvuG6LEvH1TFmjEWRxwtTGZAKPhLoW9k6aauFvcmBGBv5MhCVtG76QaavC4ixoFayryh",
  "key20": "51Rxdok37TqJMnS7wWHFAkxwzR6ipShcK3RrHJfdkBPMtEKoVxT3BkZeF5a3fhhNuuyHSUXeQnu566xxJofQd4Kz",
  "key21": "2S5TULLyTajZ93doxHxFB4Qirr4zq27pXk2TpixQAtXSu98AvXacAE3LopV9ptdhT8b1NEtGL6gFKMahEC2t2y5",
  "key22": "E7BM63S8SPVuUbjvmMndS5PVLRtmBtSEHW2ni7qJmDNJQuTomzBjzzwLak9Cf2hQYwzo2jo6L3Jo7JRRJKoKqpT",
  "key23": "3Nn6akn9Wyhv2Zd5w4mnnekkzQe8hw3MiXiAmwWsqPDscES6PPnwFBMNvzVx3N2wiFTeR6QZKcFoGaixiuuAySzd",
  "key24": "2SqpbSCpbdM8o58QXcgwhJ7HrMkC6865mnhu5iuww8qZhLFF9mEzhok1J1pLTnT7o6kJGAhpxMwmXBegpUsdZBxg",
  "key25": "wBgH3e3btkk6nHXKgqRbbdBrxJHBY11WfP3Rwmz7JvyMWLwY7m72q64dUG3hiCMUpjAuZQB5pcVzVdUAECgwEw2",
  "key26": "5xjibPXH6cFPCWv622V3nnb49QacG37Q4F32pRS3joxc464718MDsJmBA5SXKum4gvgEYTivHfW37TwdUM6zhvi4",
  "key27": "42gT31CVaL4XKosnocM5fDLb3ftHnLWguEgHGkVFNfXCzPxEsqkjaxigLjqv6ePqHVp3gUZ8ysAFvVPnThHhevUb",
  "key28": "32SU52fQMTbJymp2hZWfCFUpwKngDVUwoCZA6ux9BwCVAHNtEUZy3CmUorvaWxNEXwmVvDP2KP18gP7FbYqRrpZs",
  "key29": "4tdj9GPJMYUCXbJD8fdQVpctrGrYfbAzdZJmU1fCfviv5SCtRPPCajzdZidLQfBEkMo7fZzGX136TFAJ1VwFBAuF",
  "key30": "5vRhBugKsryPYyWCS6FwpizUGe5Ck11CDiZLBEZTfvqRdqnGCUMu1HDXA8Q75mDnuUDuhP72mS4W25JTamvVYohY",
  "key31": "3cdfZa92oQKpbTmJtqhySq5ZDqVUwE2GAU3TE9ZhCANUijGwdVjh6RxvVUiommfMa8QbX8HM1ZzmGr5VCsjHXUd",
  "key32": "3dsigwX2sDpebR2Sk2UTX73o4ZbNN5cSbQr72yZU5C7tE2PrkDrhtDm4tLvzoFXgcGcHAGFTxm16EnfiqV3jY1Nr",
  "key33": "QA7kvWnB7Mk8hKog6NzmmvR4MrvUuJmwsQ9bUfhtYWRnT3Pwon2JdmPUBvnSsxBhhaG6ujjXNP5KC5qut6JTyFc",
  "key34": "2Hog5dVbcRNpAcSscHRLN4MH4D2PH1uDyG2rygu6tfEPiPZVGoK7vPWpU3GumPk64DkoXup6aap7aj74RQmY1cQQ",
  "key35": "3CdxcB8A5JjVYWipeCrgNisEM49RhpfidJRPoky1AVaJGfwavPX9tZqkz5CbVNx9SkpBRmz6Bo35mj4UeP7Y9meZ",
  "key36": "hk117xuvQMYjtNXuexe5HvuHiWUXZkUFaa825BoXgDqTkCQ22rC7CEKssjAeTN3GGrfoHxJGeVrWDJbv9yznKM5",
  "key37": "62HB4iZXLmn71zWZXh9KgHHs4r8iWEqPdkBoGxsMdH8YMxrvQxR47wkX1WNdnfyCgifDapKzwhtXsUdiTP4dCdEp",
  "key38": "4A7GLts6e7TcZF3VgPqMU2RRCfw7MDuJk2gdjvGJv3s4gNjqwyDt6qEngm4msjSXvWgqQrC5ypgtivhGYAUoxPsJ",
  "key39": "5Ko2WYgokgFm51ijAMi91NpUmiZeRVz5xr8sHahBeqQFgVdGJMczSjQmzz7H8Vfd1YHwFaw5XVf5arVjPnfh432Q",
  "key40": "4qe5R2DyMPjd53TMsf3bS7mM3LpJNT98tVTMCnEAb4ahxQ41NZVYwPBKoRF7AMbwW1F1pc1PAX3pCvmjLyEfDtvv",
  "key41": "54E3FgkPzh17Spp24Rw15UtHruLfjhAmGWSVRDwzVb7Qb1NYpFAcAHpx1AX1JB4aqkU5C6M9weV8VVQ8nVUG4NgX"
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
