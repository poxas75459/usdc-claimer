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
    "2PHV6Noz3Nns1o6NiH8bWp7EBFW7B1oV1SFhhiUeprgte6mde8dsfF3cCb1YZ3WQiMxZcoREhwz6sZkJhMHtKjAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KKjHA5gmyFEzwGrCix1FvobYYE3quFBuAHWgbj9Ltsq8tUYXnNmmDVTszv2sh4HmeJdDG2tgjbJsJn9qBz9HWyc",
  "key1": "575jZRQsY5Rx3bXzKPFVjnVbwVWvM6k5SUNsswT8Z3U6eZgoU8cSCyLBJZiKtoVDtPb9898RQYHb478R2JkWWcrw",
  "key2": "2xXLp29xHp5XqN2RiBDujrNp3WsaGTaQH1piG2rBLwWzLr2pvWBrSJ6vP6wsYDPNJKfrfDzgq7Hpo1hpWS1kWTi3",
  "key3": "7wKqBUtWDAiMTWkjmCbSrGCiCvPNEjMAxkvAqMxVYRxqTGiFwLjWPqMVD3UmZ2cMba5H57x2Ygi8sufZDR6nyrK",
  "key4": "5EvMkATdk6mEdhyXTQYekYDZtPfdZkkPGgWzDsGucJGqNd5MmS2wv4bev4XeSUVNLamVAVxEigdjH1HC9otGd39A",
  "key5": "2rB1cqj2Jj1JogV7SNUiumMh9CFRD8VoJNayuxAJFfrHQaCoe1mXPV2UoFZQHF5kRW86sUNmKtCi1TXJY4i6Hoo4",
  "key6": "5wJwXMHNCNjDc8eQH72mCdMFRhoSix4zoiGz5Y1odMhbpExqH7ZtPkwYhNzUW7xoCCM9B7TiqCW1nivNySn7ugPM",
  "key7": "3SPojZqwsw8yeZcJqHfivSWE5gyRu59qWiZ8SND4hEz9rNPyDQ6UxYpGY8xc44NCQRMTsrTfYVcwj4ErvxVxkgLy",
  "key8": "3G6u4dTdw3zt6iK5kv2x5e7zgtBgTexXA1XfCWZMFDpFjFgs9by4F1MyTYK4VPDZyLZLTEcmT2Xitx73GvHVJweF",
  "key9": "5xD7QpfrreyKd57C28h4wvJPsPDSoqnVWWzZ6YxxcqqzKVmYa8jU9ijYk7tTgGmZpXYQmGxKTdc4F42A5ujJ3uow",
  "key10": "4SCgymzTo8hzpW6kx8yBxC3iSuyA9azHYcbA9n2XxgSYhFPsDEceAndKD45nCEm7bDQezoHFKoLCN8XD4C3NdQqH",
  "key11": "5vUK5kJ4chECTH4nzYWgAWvCHqtAqxkGmvc15kiwoJavurTVVxjtMJF3xrDZwr7dJ1dEzWPuovRZutWM81UbKSDC",
  "key12": "5LDF6eWYGWogkuXVevgi7ig6zPUDY33VM6Q21DbemHByYRjvFkg5t9AixtnYQUxL516rDae2JxVus9yzi4VYkh54",
  "key13": "3u9H7vE43g1gbgtzQJ62WQ88zbHK6uP9dQfpeA5A721vcSGgRE9o2ZFu9k8w7AaYoYcyurZU5vc4pw29q9wpatC6",
  "key14": "5BqGptXfMywAViY3Ju2GKC6uMGfGSVgHfFpfepQNLk8W3JUeZQtRJuVJQFEHbSjmbUa5NCYnoMuoYnbbD3ZQ39mn",
  "key15": "47pNJkQxJELntug8QMiTSR59a6aJfZQbwGodqpJtxJTKkN5bx2tb1yWoiARb1JM5j7231x4oPECqPqswSU23jU2",
  "key16": "2QBsxuqVQ4CoUvtZRnZjkpV7qvdTrMzVmVmyApXUG26bSTXTLhjxM1zmkJkhNT8LjLwZ23ao6QRHBba3G71E8MkM",
  "key17": "669xMFsRSmiJXYbr1mHh82EEepmUzpiGgHqcYhjegRzxAsvhtCwKkk9f6wH92dMk1PP1dJjnaRH4mHgorHo4bnnY",
  "key18": "A25fndydVSyGeCpnC9dKqZmYn6kqm1cHbiHnPeqFcXN9JT1YTEHPU2L5u8zsHH5XVQbtKUGWwPBRaPFtoNwvDTM",
  "key19": "XQpB456zDMQx8JKp8pYUa1tnoPrs2C46ps1nbgiApVoEkGXATtW4QgY8nP4HBG3tvQTxa8V5ye7ojFSNvV7oqLy",
  "key20": "4TG2Y2qx1imnKotkaSZXuizKjgoFDysUhTShPcodbidiK7gxwFfBRS1967dijPdRdxduUjsxYVUFWorqFWc3BjX2",
  "key21": "2ZJBR6LNBkjRGRuxtchz35tj8QAyw6ExFbBaAFe2c5avhNVc61fsS7shDrCxXEnyZT1rVA5uHghVzAv1JsDQHbcM",
  "key22": "5TcyjSUu3e2G87pGj6X6Zr3E2Eie6Z3xpVW17NxMCsfQN5AqDQq3SEsLUg8fvndNeMGdrCkuV9TVr4MCw8WFuoep",
  "key23": "23u31PX1wYN2EEGGatdizHQxBzkhSw47xb8kAnxkJ5G7bG7qRTGcuf6UGsPtqBzyBvPFTHGvDtd3EYLWnyJ1RM4L",
  "key24": "57Zo7u7RefNocmdJWgM8cAxwW2hnBXrQiuJtDpXm9koFnjEUJ48JeJmFAjJfiLeynTcWgeXjV63z58PWGTnkM6Y7",
  "key25": "2hCz2TW9mux3VUoG58Hd1diPdTAytTRAyHzkDYf6SwPSDGx2y3xA6MAvnDG9ihBwQSqqE4xRpgE4qdxReaiQtaVx",
  "key26": "5LQGPKFoh7uMMvS3RGM4PJagMJFkzEw3XdA7Y5RBCLRdiR8yw5xLGyhqTxJaCGiRctcQeRAcebudArEUv1sRMWej",
  "key27": "5rVE2xHEtLoF5EskP9eV7ug9g5rRCkLsEFKFiogYeRCrYFdB2CcoiFUnzs4kgxhnfanW9WYgXA5dnvbTzwKJDqQn",
  "key28": "4cTzTKmWYdnt9m8W44Bv3WbEKbXRKcKVLfeP9Wk3rfxw3zrkkpdhULop5ADdJHkXPqGwNqWVFCzUSNg45vx1zjV5"
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
