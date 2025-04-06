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
    "2BFvjxeg31xLKjxywnRc4bG7JGQMfvESjBgFgXV8F1ZR4fyzepiRZxsKJCoGNTaY8T5tdYXKxvMmTUHBtgxxB4qB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DoF9WFLrDsfuhgw8i74e5SzuQmWRDdnQfw2iby7ZSxus8nYGVkKpvRfHmDa2nndcXkVgrW2haLzamE4FrjDKhL3",
  "key1": "2aCeK1TGytTHakSxZFZN4DN4QLbhtN3RJRzwgafLZv2xjHmbA8sGxrsDYkRWSPP1vaD8Jpz7FDgsRw1QDbk8VMbd",
  "key2": "5uyskfHGUvU4G3p6wAGvPCC26vc9xtMCXqGWEEZ2s6iv957oThrFUZbCGY2Afb9kByvrkMitMWfA7F9HXEPRiSAe",
  "key3": "24NJV6FmcVyZTPvLPFrtuWofaH5bDDsVAALbgKTkSiCYJLuiHRcTjTDRCHMid79JWtqzXqVSfNZkV7Pp753DPY8f",
  "key4": "4NCC21B1rya5MjVFiYgy6Vq7i6Mbj4gwWpPcD9Z87Sif5AoG1jT7Q5YP1gwFgy9Gb4rHFpiVQQR9FFHfK4YUEZgJ",
  "key5": "bfxqAq3fLUo1ZhfipwnSyHzykwSjsfdT4mChfz8jCQAcYUTimnx3oth42iHGc4oxGSS3doVfmD4fWUqnRbM5GZ6",
  "key6": "Y2yqNpFYhCfVfKCLt1mjfXmKsCN9E9bkNBsaP2Er3yGNkkxvd1GrC3naB5qZJSyT6QtWRdZM74H6tQTerjbmqQE",
  "key7": "3cJfS6aEiakTX9mxm8M69tT3BZboi4NV9MFXzwz2iDiH8eLwkPhsJ4jrge7Qtq8VUoFpZmDq4XdSS6UejhDHV6EE",
  "key8": "35Rp8XjeZva62jxDwDSvQh2YsJAzcnxZKy2nYAPEcmDRxs4uBsxtzYh8MFZaWH8mKXQaCfpPUFNHeA7nJBueKZei",
  "key9": "2ne1sGEED6AW4SuF2LNyx9LgP4ic6WD4xV2RCSXgpbft7x9TbdSTPz8QHfbGWkAFxHj8wdPG7C7QAEM5aPvHWpGU",
  "key10": "34uKKPB2YYirtmXhqbtg2weAa6RyEekUCYzCQtHDKwcWr76cRuVWfkiNpkBTe8agwbKaVjyYj4XcxJf4KgRfzwrT",
  "key11": "5nXuWk8ssuFQkR8kCwAcqvMEQk3K6merXDZZLnvsRqMr3T2aiWgiJACum4Jwp1M5R251GNqjScTRcPsrx3JEt51p",
  "key12": "4TnmimERnFLGtvaA4U5sjz153dZUbLNVPB4MZc5DmvjxcHBZsKeyzESoeVUKA1WLsBdPvUFecRU7diXdU8Y3DX8F",
  "key13": "28TUoDDEDQkdLSp3Zk2i4SSiwdXEdHURpxmGo8BCH3WWeQbqXoc3GG85pqh7eeXZUWUf6g4k56CgDvxztT97eQb1",
  "key14": "2aWXrkmD4QCfhrL3k9rLdqcCTdZR5Y3PAGaehBT59yodt9dbt3exYzC16bFEFJDxKkPTnKqXXh1nbFvv5WtMU3jK",
  "key15": "5JX8TxjWPFeHCD9346bKqJVaELfL8MHbzfnF6KjKm65eFFjcEo1xzQdRRSviepBrSpmanR21j5YEQDv56rAboKJe",
  "key16": "YWPNyF9SUQZVGiW3VXM9ATRBnpSgLwZH78xxgWftPN9ebEWojgg5af2RSg2EEeAuQ9xdEiyniNmL3Y2NcXaWJBZ",
  "key17": "4DM1z1Q1Z5XpNiUqUSUVSSQruBj4zeqipoDPGyucfGVu6gkEebtyUAwc1UQCs7bmWEgu8u8eeSFzxUHYvL53AC4Z",
  "key18": "3RTBQbpY5pidEZE4CRoAuGE9YsnS7ckTmvEMrN3WsyyE2mmXxr6vuu9siRaECoYgtuWipAWgtLNErBEKP7r4Mbm4",
  "key19": "5eDyPk7YthZVKYKKkUZL9v8bvgATpGCjhHSCazMLmFAtnsF5UBcfBj8AD6LTMxz2SCC3MxVE29HhY2rcQL9Ezx6b",
  "key20": "2BHgDrf8fmzWtyNk32vaMRqxATuyYkd3bwSFW2TavHpwcXooqFAbTHxJYgnSd13ysiZ6vHuVh6Di1XoLtBiK9jvr",
  "key21": "nTBdK1o1CokPZTBJ8jyq3iCUJsjy1fEmA8zA2xUcCkEzq3q3bA26dDdAgqQZMdo9xpk1idnoByUxYRsdgMHWwAa",
  "key22": "4ZT7WsxiAvDkUZvLCWjEJSdUQPTLzTYar4SyKxFsksLFSbfH7uKJkY9ntPmSZg9BcW9HnWX4T2DYypE97sS6M1Co",
  "key23": "5CRUKGxeqqGTSjmu9aWmoiivjM821AvTy7tifEUBTEZsk3gBnDdvhDHtYuVWNyVhg4dHWUvoatnwii2s6PFWkYjJ",
  "key24": "GknP1KStuAKoGnbgdp15aEa9NrGm6E2EEvSnjfbpHDkZUXNSYfhkZ7dqAEzQ3TTzzEWd61WTJL7tKNxWqA8u9gp",
  "key25": "5eoMPbg1s7RFBuNFAFXJPefrxDVxjg4vPdwP8gVkrkpKMNAca2MtaqqvKaKqkbLJfwUpM5FAEH8Y38NukaCp3NYF",
  "key26": "5AKa7eiPGvdSHvE4TMWFRewFKzrJDwmf85f915vBtAGS88W7S2ojXYmSM4bcBEyyFVngJNPFJnVg5fCWP3jhqNHz",
  "key27": "3jUpES9JmCnr8ruLqt1kwwsstLixw19RCJf8BY8o9x4PSJVF4NWwmtCYSo81eW9kmmuM29uBKViyVHpixyis5aYZ",
  "key28": "37jBVygutawG1gZf5tv9dz29rn1rjRCW16MyPLUqsuDXc88dxrHVTwvvxasfY82A1hN1QkQb5mFFakTg3UdBvEGt",
  "key29": "4ZdZfhxL1QenE1YhmK57LAEcJyCJXnXNae5irLuoPKWPviDHZosgHpwEduZYEwXizZ2PEk8JQA3oiz3eMhumuYrv",
  "key30": "KPCoM7294fn7JXHukv7U478dVgrjKyBH8ZAcaS4GFrQW1soDzcnZBgJhKHmq5wYkyZuNzdgMAL4nLGLzud299Fq",
  "key31": "59wWJjvmBE5o1v1ZFTTXrGr4rEatZroK2R78rkucKNMZj6w3BLVv67eU4SGJNqm9aPFu2BpoAt2xFD8gxzD8FQ8c"
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
