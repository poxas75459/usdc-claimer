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
    "2KoNtP8U4gz4we4ZyzUwM5B5zj5GbTwhMNNQojdW5W4droXjSpTxRJMXPPP2SwEuZsqedJ7YVGGBSD6dJWWGm1JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25x24kkY2QwXn9W6cUWqQM4LZ4CRz2Zz9t6SBp9ghJSPFNGN8A6eH1YE5wZzoEfTkbA2qbaGFAMoRh3obGSxpBgm",
  "key1": "C2AaUKpioA5VDL1PPUtJzQeQwh558efELqEqUeLzq69w24FSxU2ZELzWuVoqBsT3mP86gxDaM2cAzmsFtrwitMQ",
  "key2": "3JRoChrb7M8ttELPGyAEgUNEx4HG47J2r8MFkmmMw9b95DkLZyHfe3e672kfTCRpJ8yx9hq43Kr3xEcz3MnQzsQL",
  "key3": "2qVC9qYT5AUjt9LWH8qS6UJK4ztPNwuL8VZQzoqqAEWrTrVgW3Y4mgh6CyBV4SsWqvjyWYximCLKfHWA5AT6DNuV",
  "key4": "32JejaG4hkQkt2gX2oxRduyd6nJY762kKRFAyZ7zkn6Zud9VxtLR8MAjcw2MwNPRUNmfZKzSrrEKKy4RnhXBdjFn",
  "key5": "2TVvop2NT7bdHAScN14NVg2XPwqX1CSf8kbAWkxcyVcj8EG1korR63Mtp1upyiD58wAKtP9D7bKto31cFLk8LNML",
  "key6": "38j2Saiack7wm8CPFu3aMFnMy7Waqj7tokrHpKMBxLVXCiYDWZG1GYjKymZKhPzGtqarLu7JwTMTaHo5wneEVhKY",
  "key7": "34u2CYsWgvVcJvECTyNyDEETX5qEopu6nLsLzDZBUxNN2YXVHoPGP86KSgugQMVbJM93BCrmV5fxLCtmuFm7YGXu",
  "key8": "2M7smtbP25XVaUrhJwwJ8qT8zh9J9jvchbyvss43pCGaCx6nXUm6zhFwTi4sFr1Hyd1oTGxYYMake4J3aBNS4er9",
  "key9": "2p2bVMUHgrB2Li8Eezmu39uDzdh7d6jtiL59qtJ49iV4ZyjrNzjQZtbYXQqw7qKruX4dejJ6tFxuH35FbRAPCG8y",
  "key10": "3YeBRscqxsDhw7yJQewq4NmBBPSD9mRmF6nLNG3ScFiXwQVH9xDzhJbBpwisqZdjKo8z3XKwwVJZeM5DfWFss9j2",
  "key11": "4Ar1yD69kSgaMmz964x1ccNtFd2HLuUQLZvRmsxhjKoFgDuWQfA8q6RGVFaXaSLZrdkjB1fiHySVuyzaGuB9au5P",
  "key12": "puFNtN4nSmxDK3P79xZPCKSuCEXQxFdzJXzjUPbzcUgqJ4GZDYWL3YtMYCYfdShYUPJutFkDaV93gF4GhSuh98Z",
  "key13": "4hCgqqdb8eAN7HyQe7EBgLXTvrgFKc4r2vTdff1ipLjdJU6A6YsgM62csG21MGSPrtCnpdtTLNScxM9KNvAMS3F",
  "key14": "GsczZVXVJcRdG75MJBcVFaEJEMUnpzwA284TurZJSre6GHtz6qDeK3XoJDqgCidCNBAdZqNMDeUd8METC2yNjaq",
  "key15": "3JUoPjYonU69JkMZFrSGbzqtAVy4uLZGyuwZmit5UzhCoCHeeiNv7YXbRtnmUmcM2SfPKktD1PDU2jFHFHUXrkNN",
  "key16": "5aFtBDHUyHvn1ys2foM17mZXkqzkrfLUfCyCKsLvei2ZxDDjCHy22K7TqbsvC4T83whvMnLZJgPidAh3jFCdS7U9",
  "key17": "rkd7JdoQk2zhQBhRy8srUooNYGg3vzYzLWn53jzyvJvX6BPe9mF52rA1u71ubc45JjKzgUSDZXJciRqPTjahuqs",
  "key18": "5zj34znFypPUbM69GddT9YEMqLd1krc7QweK27ACJuCVyKpQrkr7NCXx5HHGRpp4RdCHBjudPNDQ6Z1nAU9BHzDK",
  "key19": "VTrtajFpBZh4hM3h8fC9UxzCqz2iy9SF5ihPBBEevCyhSDjJLMTb7sPpEE2ai3HG5NkBBGUWqmMuHpL1aybXwoW",
  "key20": "VyxBfzpprDqSyR4fX3opkPUXzUgwGCAiMcFJdAsAzUbYzArDYd8ro3BCLcGqgurVmC6Eyh7Jz5av3mCyvyuTaF4",
  "key21": "4t3CCkBjfZ1UPQJfxD475xLZR8wTrbStPG9ii4GRdZ8JLPnmanEtMVCSzk5T7s1DEauzZekV1Yd2oiiiu6Jy2KxB",
  "key22": "5o9jRojRBpLGkeb2rhDxBcRm7xkZG3TqgcYhPUkb9o4ihDntvjspdxcPNnQsVz6UMKpYQWqptaQSK57R2TkCy7PC",
  "key23": "mFkYst3mF22RAg8RU4qgCvK83mFuHbeUsRf1ka1R93k3MmwuzySK75f39s6ACchoMB6uTk67ne64Xnvg4WVDoJX",
  "key24": "zFQ3CQkU9A3zBbo4LbCwMNDuJGj5VGJ2UrUgBPoCnjNAXi1wRRi8kD13xBpGKstLoREBrM6S7KgCKZ6KTbSZpZP",
  "key25": "2LoEu1xgoj26DPfsdVXonacYpo8yzWyRksvBxHneJx8LL1F6KkX1BRHSh1uHGwk5exLXLq3mijJRBEZ3qbowVJ4T",
  "key26": "4rvChQogRRP5AxQBkhQt3taB9rv6WQNsirj7SVwVDvMhsm5LYBLmeXxZ16weVdaQjmArKTuuJSVKDeB45kvEinzX"
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
