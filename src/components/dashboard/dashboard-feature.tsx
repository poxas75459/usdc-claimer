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
    "2wjqGLNSQ65ZeBosRr9C2NAJWXWUUSzZPdK4hXcBNnjBYgbFDBsMMrbx6b3wAr49GRXnzrjVpqVoqMTJyKKVUkem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWv1VBZYiW5QqVMqRaELSSvA7vStDhyhJud7ywU2Axn5uvPSp6pAKEFpR8Us43VVSCMbLoVWCt5qqqCeQbqApqa",
  "key1": "4N29642V5ZQAxZsfTkjDvRJ2hefw8RTHGLqRpCqoYaiqz9LKDN6i4rhccMwAeYfS8BGFFW4oECh9zzB5b6FjDTmo",
  "key2": "4vXBLhn2EcxoJbGm61txriheLmUu4KRTwQtmXxMyvf382SfigezQ6812xTo1rvXwuDUBE8sag2nvRX2PnWoziUsj",
  "key3": "41ug5omDBFaTkPYZCFrT53HdyLn1LWKq56RqeajQqCWGS5qQHgSSsZwoRon1uDRfecH92Aatah4dhVTT6YKoLJvJ",
  "key4": "FNxJKHuFicYqdqC52hjJoXB8NEBMiNEhffHTG1msBZxkY7G12pLRFfu543GS33Kz7sFyTgrsWYXfHKqXWed9FM1",
  "key5": "4XwB1KBQe1pMgyGuKFYjuMNfbw1tqQCDgMTTA5ypzCpVXaTWcgFR6mc9ZMiXmkUE6gFTb4Dp4yaCykb79wacorKe",
  "key6": "3jRNjtHWvaSbpCy7jDfHrvCDq8EXP5xjE36Q5WfA4BjyXEVR4zbXZ5dgV4XMjRpVbcvnW4ZiMD5UvYhCUYSS85Ug",
  "key7": "3FAiLSAXsmhP6ATzoQB3FvZXgQpBAWBVHWotCMpB467sh9Jk49nouLwABcnPFodCoZx25BYekZrTgn4Bjjimf3RV",
  "key8": "2et1DsUZWSmopAUvL6Gag99fngfYNy6b9ebN73YF4b4xtbXR1KpAzmVzBqYHLZqfM7sPFgh43PKrwxVZSHyduUzW",
  "key9": "2imtijvPwC2DQTJYvJTdRAxyVyNhhNhoiCdmfgygZVBPD1uqDEoqh4xvgPEJupMMfLCYocjsU7Vu4nGKY78vTRHe",
  "key10": "34reSYZE3A9Men2z4GAUaAZrWTyagstpMjCrqx8B5x7zwuQ57K9Hsecd4rgbX6Qju7PRFL6hWAqBdkyPTYPowS2u",
  "key11": "nb2xSbtVSXx66EJfK3mHuUAke2aj9FHhMUBz5DW52aQx9Fy9Chkkmh5WvPh44evpWp8PqkFBJ6T11fzhrnF8R6W",
  "key12": "3e6HoS5G2znMks2koUTH4kd2Yo8XLvYgunpzo8JsvrtafJLVAwbRFvgCci2hBpAJQnjNPkmEoSncvqaadTZvgoNt",
  "key13": "B4gsHLLcMx1YXQwbtiAQuVTDwfky52KsxNwQp2e5oknWW2sD6UCZAYBjePW5Q6gWdFkE9p5m3hbCfoN7JKBrwcX",
  "key14": "D62p5J3mE7DWaMm2EL4fCXgBtnigquSxQz7WJxDWtedyXbbivxLvHMK9DDxG5hMdQzFRxWquDxL4hgsUVZQPfoH",
  "key15": "4eFoTyaAgDtqfCoFgDqk8cc5SzkwfTKPZx7g4gQXY3dK5WL3FNLF6c9RApNbK145ErgQ9rNFBhaE2P7xrT7Azx4i",
  "key16": "3tjUD9CuDnrYCkBXsvQkfKGxB5cUdQK7d6i6bBQGuVRHM2D1cAVTGjHMEq7P2p2L5c2ppkZBRijeCKQGvD64ckNw",
  "key17": "4Y2NmF96hToyyHzB2Kp2WL4KgEjvD4ogTtQ6hiv9jyeKFbMYC5b29aVzBwGyQBSiVP2J4nMJiEq1F2k8YD4mZ2p1",
  "key18": "3DJbT6gLzpXE5vR9TLoW2L9Ngpq6CZkRRiDpyUtUHvJ6pJuBY47JobUhaoM62C9sQKL2YvRoNGWC7pjVxRpNpgRT",
  "key19": "3UWnBAaWkcb6PZw6DTMcKijdUvNKSh91f4HY5xYhGPTbTwnSDyxjetJdY3gJqMW8RhtgXehxbT1EF6zyzABp58JA",
  "key20": "2H2VHnEQ8XQRqVadao2NUsdkFaYcG44DkML55mUAj3vi1HW4KbQHH6gJWALV7KburXLBSCXUxjNr843mgupcMhDZ",
  "key21": "3bSRuxQ72TqrVA6kTv3tkXu2HFwnFAYK1tnCUCisFmuSCiLRjsgj7pWbDPqHahfQjPARNDni2WwLsHpBVDd5XNsd",
  "key22": "4az5Pcv6AofhuaM4fBVDTn6a9EcmamCfFh7R1y5Yy6KrGpch8uka2ixuLcNmUAJhbN4qbHjz1cbcoafHySS7E4un",
  "key23": "4yqNTsrRY5iTQkyRVa56zXbedekjbvZx9dJUnS8bTGsteaNUuzJEgqUjQ76zLMAPSkRdAWC13rLuALs1Rgm76Fo2",
  "key24": "3nWAaW8Lpnz1zeNSpkFSDr5hyCbYr5j7YFnSR5iH7jPfX1sWZZoRvXkybZfgUVLXrTcnkMg2dn7SN74xjZ96hRiL",
  "key25": "P6JHEtDpUgVsxFk58ynmGdenmHaBh7wZTQ8yzQs2oCSsfAySbtzjKpx5FqMRWB77GGUsgXxxVrBVP3jyD6mmFYB",
  "key26": "5S52xGFfdymecj8Wit7wpVbcQLgfHSG4L7YpAP7VRu9856xJ1JoC83V3jU69g6eKarUv76JJCwRAmQ2f8RJszwY2",
  "key27": "4zjYYKetdCTbNtmg8Rtn1YRosy4i2stuPkDJqQeQj1k3cZ22eTHmtRwWsk56ZxymRioS3LgtcpDVMooJBPBUREGn"
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
