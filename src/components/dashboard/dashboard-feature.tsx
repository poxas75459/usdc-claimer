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
    "TDVqot2GZS2yU2pr9W1Q1UDY11hH1D3NyMBP1t3fWk9Ph1WZUWtbLR4JV29ghBJt9n1LqCzSLUKk8SEWDAgg5wD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SakQBd47JiCqBwUyXdEMmEbo48q2w9uoW69SzWvPcnt24ZJpSLFEq3WHcz1yZVMammsQKz8B1Fw2cJmDvLJxCrU",
  "key1": "2xbgYLBwQbZ5C47oHPdx62hbs2MqC7GP4T7WdgpLuDFDqUUunUs3vcdpim6ozETxtAAHVByZMyoKRT282TPPXrHG",
  "key2": "3CaTV6SxiyJ8zouUzVRCPWbHKtDmUYT2qG66mjrjbhoPjeaxkcvrBE21nvRDQ9awpsmihT3seTxrwSdBFZPcsFag",
  "key3": "QmY7J41FXDxjMAPPPmnPvUxkjHEgMh4kGzGY3LhaFwGb5vTYhZmBbRK2Sx8NjaTBUBYZS7DNQE5xA4Eh8UVLjzy",
  "key4": "41AzNsPPYm51zTzs2U2WHnhhLdMqfWXNKAs29MM7kDLy8jLdYUqZRaqyZcrGiaK1ch2CNTcbxg2Uy9duFedrXgxy",
  "key5": "4SNaNg6w2fnBSfAEttyrqyv8Pjo96SALJqr4LFH5DXQyJ8X1XJ7UNJXrWCPR7DNP9PBZN4Ho9qPinEgkyuM7Qf3s",
  "key6": "5PMh9NjBZdn3NUYJb9PGzxomdZhxkQQ3PbresCU3W6tgvYJ2QwRDPXB7Nvnnho97puSKDcwGzhQmP4jMCywDy31r",
  "key7": "3igTXpUffYAFFZ1kJJkvkqHkneZwNCf7TkqRjMo1TXHPSrau2TkHd7jC7RwEX9V6AoRrPpETJufDhdRTSQms2fnz",
  "key8": "3ERjknVvaWUimsJS5p23VMqRRg6f9845gJdMWDvNJzttA5SNHEcmhBnQyzBgfiEMJgCabHGcZE9vqhgjGP9twQN7",
  "key9": "Wj2MjcoUe9tVsbViMpYzvgNdHiaQMNfWJZ3MBWGEnUPav6sQSXXpQJLn2UfB5uM5NinsiH5Rb75dVBNxZmjVamY",
  "key10": "4PCUSEDLcxBydZR92TcukPBiNNSr2BtRjnxCM9K8EHZomZU3jCDycSgnRxJe4y9nPV33yjPQnVZjYtTTrL8yRZog",
  "key11": "4CkE2rzsj1pUEKuAgg5twzhbhJgb44QisZQjh9tEoJ23svJVyGBxsFFSmqBm2ZnioxwEaZUWHkU3cWw8p5Rhp9KK",
  "key12": "4q8sWVWRWUhbUGKRG15mcnXJNzNggQdnjCEBdtXaiAHRYGxhGWGt9a7B1EUvgtRiChuGRRNNcwXWBrPujgg9m7Md",
  "key13": "3nafp6iHF7dBEFZ18d2xyquAhe5GrPyVFsa6YbWmvmn3QBrwwhkb1KshpbwhWXjN6jajHA4Nf2YwFGCMWRb6Uout",
  "key14": "oH75mNomeW8m6WuWVT2jG73UrcL748KGXHqvEGFVadfxfUYiwft7kAYPmZL5iRU9m61AWY8YNQgFWaZhd6UoAuB",
  "key15": "ksCa4uKqQnLA2H8AZoZspw7BfgLQWCVA4XWfDUsK65mR6W9Zo8SzXWzAhpiZUHEofnK84iGxYh9xWuf1LwgRaBm",
  "key16": "26rtrYB9w2auAGbdSbej8yfN1658pyeaaM25BTseF3C1gddTmLeakirX9SukDrPSoE7CoT1RxvAcDQMhXa6T7Yj5",
  "key17": "2PUFVpJMLgkHWTHaZE9PbuScXFNoXDh19uFD9TBGAF6zqjdvQjbxVibvRSnCvRiJWsk6pBYqRkLtjxNW3MgrTAcf",
  "key18": "5dv9p7RSPtxwZDkBUDjq9tEfWvugKSjbdSfCaPZ9McLkXa4ZUesr6M4Wrsed2LdsB2T6QcuFDx56VSYPe7MzcBzz",
  "key19": "2nMJChwn2FyzgJ5voLrfqJ27SGR3LYrXiwYMdvfsghNRDSJgRZnuSnQwqj8zy2RdvaynqYWoVS9UnvPQpspMM961",
  "key20": "2FMKhJR1QMrhyXmoBdHeSkgB9Rsg7xuUkKVDMnTs7PfF2qrpQNKvyX5Co1fdZYTuLNjhiH7TNqqHrKDnnryaaAim",
  "key21": "38wJ6AH2Sjakm6kecbonZCcM1uCPHbPLk9PqSnreGUBzaXUZ1LqJpbVa2Umd9FkEbcMgaYDgRWMJ4obteut1CzNW",
  "key22": "2jTYJbybKmxDJnprumWk8vcKYt5FcZkGqCyrXxE6p1GTAVTRK21Pc43UxQHrDMc2byzPLoLw7zMiiSEGjogToxJo",
  "key23": "7Q6te6tN7uwrzgV1GpE4fsVHnihWMMpgKARf7vJs7MVZxDMnui8NtJGJqxWkwMavjGGEtVnJ6y9WVCZ39D28c5u",
  "key24": "3QcLYLVGjKj1GrXX8ZjFxfZmXLGGDAcZEFJ6jU9RjhsstVNwBkhmDdccqmYCV928hCuh8PFfNHE5sp2UqpQujuoP",
  "key25": "aeiD9TimMqZivvD8d96z7VSCGgopKir8YvvZ56wdSmsaPvNvdSH9yX1dQ4MJbaXbmv54c2nUsz27cxQZ9uqrdMK",
  "key26": "2DCfxX8dYDGT5kRChMDuaiospEhBwaFWR22KA5N6xWDqujDJq4dR1dRWMGw6ns51gv3cDcCoTvH1zTB46indpdU7"
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
