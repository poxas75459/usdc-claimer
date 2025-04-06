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
    "a6UUtSv6TxhMU5EstivW1Sy15rSeNDSKcmfqd9g5CgbuEC8fRebkFVL4VntC9WuoazJZi6QYNLeN31nEinB2Uik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DGFtG3pwTAtSKiu43r8RKCZWuKRC7VfVLmbBVf8NMehRGEAKMsQMo9mVuMNHNFpeutGQF11uqpXKYxUByhFyXKJ",
  "key1": "4n98iHjCu4zmjKxB1SuNywPXxrHTwqfUVYBcVSYYiPzPSmLW12AgLR8oRzxR56ELTaSpmJbatmYSX9PaPT1J6Dd6",
  "key2": "2KrjoMhnrp4LDC24Fe8KRmoQC5cSKXWXDRp6R37DAr2UyY3M9ZEeL9robgt8oE1rcmN8zM9havFiPfAaFeDrfqqY",
  "key3": "YcCmT8uuf9YGmdaraEUva1oSA455VYeh8aTKdytYy1DNp1j1Egi3BejQY5J8HKPWes78NMGFteRmZfvfdh77hPr",
  "key4": "5hYt4vmgSrZzbLyqxmtFSerx2nn3CYpYE8bMmPakSD9rgdHhTTzpjg8cqqJXVU8fkxEAZSBUitcoRTiFe2yiURUa",
  "key5": "2sskx5ypLvU4TjHCwYzfagZvn9ByKEtn29jFpd1e2QR3XKKeoMsVec9na5rLg3SWahPE5N1xQSgsYd9cJnPUF5mH",
  "key6": "3TdtXk5EXtPJccj2tyztAexP2xCMp7sa5GyKy7p5tUitmsuc8pkzqguWprBw6CEDpvogNttgc2QMRzsT2pL8HuyL",
  "key7": "22u5eQLieDRtLAM6kHiqE2GpVMfDDr7iW1dfvkYNsgEptsUMmbJ5WaiyLYXUGgF3zDPxvL7DEwew2sKeVL2E7Krz",
  "key8": "L1ovDtSvo1KPhJxXot9MVQtmUxCnMfvG7UtGFoAgvFXeQo5n5yG9YZRHzYecUi4Lrr93boEpYLYHCFbAU4r4tf7",
  "key9": "5jPLCXR7Q5jVCgkarraLpV77YCRnVAccppvEf9HZUkXvRpMkmVRt7nyJt3QRUHorWUbVJUzwFuxATk5ToZJnqzbG",
  "key10": "cUDTmyAUBiRBrnK8SUJmDYeDikwDWL1HrQnvrgxBQPUM6RFGZEe4eqE6vKkmDxYQb4874mw2rmA8CQJJr89wVu5",
  "key11": "5cgWc3By5ChALsxsEfrnmtaP8fXQfJiuVYNVqqaeCEm8haH23em7cYsAqpX8ernAZWdB6L4tNVYQYveGHkLWGykj",
  "key12": "3sbocqCwixCqH3kHRAXBeHEQvpnq7HA54E6ScxShyguQmQXAvwp9EZVT4iwDQx2ybvb2RG1soR31Bun4S5WQkT7G",
  "key13": "4rVVhJSnDWLKfggTB9xrWRDUSbkbwrw4zSeK5pWUoU6ULDqirh5QKodRFxQhsUnWguBPAar6uqA1zQXgHTbPQeX3",
  "key14": "5qYjhy8iDyGxQ1yrUwm39JcEdn2WExrL1ee9J9WK5UVzUjjsnXjxsprTacVFWaZ89mCj2yotGAY1Vx2AFA8mch9j",
  "key15": "EdFJ6h2juf9gkKRY9by5RuLnEMAVc2GyiV1o24Sd81Jv1eH6FZ4rLg9wWMVwskZGueW8vayfReDaKVZCbEv96KQ",
  "key16": "LzKNdptsYJJvnXp9RBjKXmwXpHvLzDDYEJHW722cfpNPGeR3NnoGHVh8rzx5a7KceRGhvVHjhurzPVRCsA4KKqQ",
  "key17": "LN433nDQD6RyCik5NXjCHx8ijSrEkSrMx15V8SL4r25sTohBKeYSHcQt8t7M3xyF7QUFsmBaAdFhwTrGrhPXgqK",
  "key18": "2jzm9aefRJvHekBPZVLKhtFbFYW76n8SKHuGvdtgdtdQj53T9C1SpJ37G8ChfuR2YTnNj2P1ipFvUYPGTGtzFCtk",
  "key19": "2gLehkhefAXy1xsJk3KcfkY4fm5m92S3WYumkVZscSPjbjVSzoGwcha9rwNJsG7dbyQNZwLPdT3w5H3Q3YcFfdSR",
  "key20": "pNaqF5seUCMZycKLKmjk5jq4AT3hic8Rmg9hAbLAd12WX5EjL2QaFXbH9hrwYCd7qBzWzV2PBVW7jFQb21xUq1Y",
  "key21": "2XTmYkWBS1GqnfaBsM4qLHiy5gxmN8sA33NPXAo9HgKTYoYPGMK4sSo1tTAWN5gKrTRvCnoTULkNdHNpzT6UxbES",
  "key22": "4aRs4DQyFunovcvvFuwg9jMy73n8ntsgeJxDQr7PdBRd6diPG5Qrom8oenQjABmTVFUBjhYY9kXrGdSPqfDiQUhs",
  "key23": "3WuEv3UyTteCL3h6jdU11MhDpyR6yPu38gQefuRnSmyZDoqdgwgphoqVZPUywZMsHs74syYm5Zca3oqUC2VZVyik",
  "key24": "3StGwZVCVEeLy82LvSRhY1hiyAqsLEJNFcwTPEGqa1Rqa8JGHUBPCcY4jnTcE6GgEDZULUvuLP5d5NTQHAkQgm2K",
  "key25": "2FYA9UiLBZrqoNEjaoEBJB4YADmUsV1qQYTLPqSQtZwxiVjabPUhJjuY6MKD2XZSopFMbtCNHuA3m2MSTMXV9dGe",
  "key26": "2pxc8uKTbkFskAqwJygpmQNGcgTxz6CVcjcc4avnUcrJqGBEyK9a9jH7BkA7JSSA4q1UEUXEB2QSxfZXGcGxWpB2"
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
