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
    "2bYqTmxZyZZdLW4WcHQ6xM5shanTvxAx4YNKBBAdyuTLyN4jQkrVAZCXWLvkqVC2XxzeSzgGw2yGYkgxqhtGAhaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDVvSWkbpkVhWgVRXxwiBWqKqXrfahMmajGY1BLT6TNYaWb6PkTyRUMPQyzp3614D8yuPZFKr774AhVcYdmqXD6",
  "key1": "jogJE8mrik7KbmFCp91WxfpHW6ckFCDivjWCTX73tpU6kbLVJrevBHuL8Tc9S4pHbg17DCMwDwWSsqqaVNVKAEb",
  "key2": "4VsDTVJkyyk4tUD47RkSS4Aprybaypj9yYt7gtUCw51BptjbGqYYYpzCU4ZLU3kqPph7pqmnM9M8MkPHaHTCY8eP",
  "key3": "2S8zCEsxV1aHprQaHhsVx7DqaBPPUen763TnsAfi54oX3xqSSC5EK6AtT3S9CuT7KnwZRDPzRZX3WSwuZpRUeb4M",
  "key4": "4eFgijTKE67p8YmV5GDHW5yrH6baEjb5bY7q2ViuNLgUMAXBCWvJLwj9Tpq1i69M8h6c6ihiPpRfyetkcB4DPaCf",
  "key5": "2GBdaqKAPuwCyjs39ZAfkU5g7BBTMoEDTN3SDUkefy25iV7bw51SSSTKhwfqdBK77sTnbkaJ4UiAANDCjELfq4UL",
  "key6": "3TB37DBU9rXBHvpMPywjzKHn32uMmQ2BxnvvJZfskhBjhYZfUqgPrJaZze2mt8PxTgtZXPMPoG7LGc4DxQkL1PVb",
  "key7": "55xoAm6ssY5P21s4DMbrLxSqpvT6A6G7V8zrouvvhie3XuGZA2FqWRX7aafqZ6ZRRBUptdx9wgBs7kntiFvCgLxH",
  "key8": "ZT2vXHUGRUg7d6XJ3V5J8vgSz8t3SEf6SoRo1QpTmVrnxBnh4jS4J3orBzktbYuRERkEhvPwHgkZCzgimrZoxVd",
  "key9": "65KmGop1fW834c6Kr6Cfq1E2hjzygTKcPNnLdLpxFzkBRvjf3F3i9QGX2LHv4HducEiujUd4GHH8BLbYhkqdjXV3",
  "key10": "9txArQuu8bkyME52MQh9rV7hf8Z9HTCSGdURwR8n3aTfgszVr5Ya957JK8eHzgVaevVJKBEhJuJpYU2xNzSbXJ8",
  "key11": "45uiVcw1b1qjCsL7NmojCbazNX3LanJ2HiUySHiVkZiYmwJJYHdQSFCt5NYfYBRHTjzpCdD4kuBDvPXBDiKLLVBF",
  "key12": "46o9UJrso1XiGwysByGZdVxvYsCYRtXWZaEu5RZvR8pdXgUXKLNUAG2MBXAY6Go92wPUtRe4qruePTLcJCkfMs1e",
  "key13": "2dJzR6Z7qQsEa47hjtHvcDWWgFtUmQFKWxxJbPcbxSJz5sEycdYLngwhYVshLXe9C1mgff9ZANrcveqGtraNY6Mq",
  "key14": "2QNzVXrtgu65PjkbbACB9ZpbpKWir4iDQihqpBUoh5aLaZ4tcLkdofs3Bx8gqRzj2ipKB3dbKLvch4qnEmtcycb1",
  "key15": "4Swc1sRMWnNrAM7ZitUPZ9t8y4XgFaEjFy4qzrt5sdAykef7mu5JToj9zjpJF1HPpD8s8nAqobvZtNRnj6QPLsEy",
  "key16": "29rsU25VgUNanZGfauJrKJiHD91GJ5k576hRwsp2DVTAXmFRjiaheQTBDVk5k7qL5tDH8vovRmtx4VPLVc3GJU24",
  "key17": "3YG9MaksKh2Kw1XdqNFjFc4XuN7i2nLvKHNu2oqoJyK3b3z6P6hB7nG4zqMbY9DLqLaHMpeKe4yJGvUtBgJaSbpy",
  "key18": "5GgFhrFiZYAXXZrqCuCCDumS5pmhbBHBaWFZViK3jo7CfhwZGWAj6m6x88W62Cw4BhpiU3jTb4ojBk86LymWtK48",
  "key19": "3RndHbVk9yPL1taRTs2NSgeBBZDHnmSLVdfoM8MvrCvtk1eLZFNBNUQ24BBL2fpocVc3rpQajsWQ831EuXs4yCbs",
  "key20": "4xzhtqrytnqmSwKgCmfTvoRozAnBW4aKcFTt27pygYGxBrzgNULheoC45vyEzMwZdEa1wfw2umdmKbzcBaT3XM2a",
  "key21": "ccyLP4rHdTtdsDLxNDDen2Efk5YcfMEQP7vgbWUwvYKCX7R8rvhAC5Qd4ULfuZGzt6pYiLViHSVgMKZo15PitRd",
  "key22": "5tMRpecF2Wg45f6SrHKAEsqWYLLao3PWoKJ394qihz7N7boHyyDwNNxu4EhoKoNmhTioHiKXWDrAfreUcqrggJUM",
  "key23": "TSDWiqi2owLdqEpNTrvDqo7BrFtWfy8Wxaheo6uSQeciZACKDTUsaYPQtBcxd2WHbPtqWPkFsUuqhhaUhgzujE1",
  "key24": "u63ocv6SirCtraUeq1hrkj6muqsvKZSmjnF8qunVGDgznvJhw4KCQUCSeqsnJTfEUuELLQ26QqNCi2FGhfP5eny",
  "key25": "2fRmmhxKMphqjCL4fFj6XCSZBxm3b4a3RnpdTRwFChEEaeUU8tHAZ5o7erVybQLZdYvxo5QPEMBjc2QoMvXFDGQi",
  "key26": "2cBAbo46S82sw3AA8k83xoShSahjdawA1RcJs3chDV8pVyvQNAkevWCwSh8wLheZe8kM63S5tGNPfSS24RKV5w5x"
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
