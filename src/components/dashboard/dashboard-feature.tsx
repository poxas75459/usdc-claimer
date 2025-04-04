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
    "2LJ1Q6NjJumnYz5AwoR28UM6EuLMtEnd1j7kMcm2Eo8RUHfqw3jTriiKyEwWb92Xp2ADRnK4GXpAPYjDpTo4jnEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmjMfYEZqC2Gg3js459F2C3DC1XsxFpzkeeQyEZ3PX3aCktsvkgbH2ESMq4MxeAPd3ArEqxhZBYTeKEf18o2Fse",
  "key1": "LyxaWU6C3e9YGFaQiwEYDvxmGu6V5LhKQ69fZB9933rHt1CUFST7M9dqXFXxuqDXVKntyFxCi1WpGqxZu1wsRYn",
  "key2": "5boj9kdymo8TiVi2RByHsw3KrhBzCi3bbr1zZcvTWSfxYs9VrKC3QVxRz5CNf6FcEwzestCGmveyRFL6ufLiUSPR",
  "key3": "34LAmD3pq9wvtJEaLCXfVBWVnZypMtBUQfaiyoD7n9aeGFYktxrA5bDfVgT1f4dbzugRzrFiHQ5b7df9DToqsWfd",
  "key4": "4WwmPmRA4LnsR9w7sgWNo4yjaKek9n3xrSfdFYKmMf6PJFtbxE7DfVJQ55rYqMavwcj9CDuY5JZ7ugLESbzr2EFL",
  "key5": "4zGDzwkNVz4XTQ4GXAAUKShPNH2hLjKrxnyV5jFwHUreiu6X76x4jXhiMUJdab8NpuLfyHk1euZwZPqKH2UqVWj9",
  "key6": "3hFmXXiiTeDoz9yrD9norEmpZSNVXNxK9ahC8S1iN5YcC1MRusabb3HdjfujbAgvmqfJKiZQjnwxdM1sivZEjguv",
  "key7": "4ehpFT4S12qSNpa2frv8E2qudmyvm6Vn8wywwTnFajRqa5uX5eFUTTHcUHHE8tvaDAyhsWo9RBGNEMRDfQPCxyWr",
  "key8": "3D5D5PFGKRa7AuXo1aGV4Pnse23Y1zuNE7KDM4RN9XveSuBDSvWE825zjhm4CTtgRPvYHnofun7BosjbenBSrbjP",
  "key9": "4v2VtxG1TWk2Lu25RinQBK47T4jZ99rv75danT6FKvho59u5vk2Wcb4MdABnnmt6KuXnxmyJCrGWAwfEqV2Myh7c",
  "key10": "98Y3bCu7dcLpNzcNZa8LS2uQb6aGurtiafLM3ThArszJ1PrNoRJjB4Y1NqLBB9r5tiCcqGe2x99yyZe1qa2H4vC",
  "key11": "2aWb8FYSttPrhPQCxDHWgoMJ5GzSkXxTLdTacBVgNawmXS7bB7Fv1PJYeQimwr9YGMau2fgGPrjddZvhdjjkbvvV",
  "key12": "QVvvvxMDvcahG2icEBwQT2dMZvbtaxTZ2zjMvRra343g6ALB9tnPoxtJRrq2FesfonPVnrAfYLsYhoK8Spbjazb",
  "key13": "mxAFXxQj2atSoJXZ5S2TR3NcJ89eMWe9bfzzDUyTEyjuVerPiwAmPfsL78mZgcLXLdZKjEAwvwAsQ6sjS8VbNrR",
  "key14": "ZTqEqPcB1zwxwsrvnBEtTXzbztpoCpzyPfMu7ZXLqsPc5AuoPJemLeBVdczB5aUMmb1ZnPGhKjcDchXPjygWDuM",
  "key15": "2KLfP4fvV7vWkRD37qkfG1qUXTgGmYatDY9u53FfujfAC8gWriCutuqzfVmE3R6ewRpTSNtzvoFaxhEXhpeR1bei",
  "key16": "3GvCCY2T87qCjMaVFk3KhG35MRGVQ3MLJii7TrwMiNzW9ehDy2tHD72GgxNQYENXv9eDZrNuzok4Bp9p7WTTbbXy",
  "key17": "4gDeRroiHfkdr4wJcUztaAsTK9J7yH6C9Q22SvwQLpYnZfrgKW6hLBnQh9cUDEu9YVrbr9aWURytJgwMx5xK73QH",
  "key18": "25bEYnHDxXr3eQMXXxdonM5w9iLhqszEJncCenPog46ZbrhnWXWKRNqLqmnw34rnA74MDjNVCvnxQ5Coe9RPZFBf",
  "key19": "CuTUcZyLc3eqzt7RP7hUVihB9xxuQzVVsSAVJLVu8GGGQcvqhjDeRZT26Xzfcwkn4Q1XEc6QEiJyrYEBphYrJSf",
  "key20": "359FLPRwqjmFSUSXT1LWm8oRXgxc9LXp7dWubM9S1Pu489QC7VX9Z3pmchzTGoTgjPd2ATnmVBuvmecMsjbLWM7s",
  "key21": "AdcXgLqbXPqkkFeZNy3RWXyjzdkigBvs6q9qkgqWZ8QCwwhHHXJ7QLtVexDLfpEjVeypakgH2dCJBfz1xN6ubgK",
  "key22": "54M7Gnkyytacm6YJ199nQ57v5KFEqPRLJ43NAbi7DW35VWwJGgai8AgPE4ea7GcoL4Se16xWYYzPofa7xmdD43r9",
  "key23": "42HnUrkVk1gC1Ko8mLoJDnLHaWTJKCuhAEMXvSDbd1NHT6EGh21U5PbKRM3WgEQV1CSot3p1JrFv97meou63LZS9",
  "key24": "AB5G2j4UaPaKgLG9JiEyBG4kvSErpWkdxTPuejcEzr2N9GJjG5cbuNmCTr536Y1PHT6JiSMDdGpW5J9x2M7iK3B",
  "key25": "2p4dneLX8reU7ZnX3CnF4hT779RCcoCrzaYWznbPV5QNQgFmuW6hcsWAg4jTgPppYJaNJivEDBB2wSr8RGxyED6v"
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
