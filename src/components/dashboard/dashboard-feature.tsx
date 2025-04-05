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
    "YTcC9XubWyEPQfSeELuLaZYBSfUuh8ExmFzBks3TWeRwzVKr8HqwV7oanXN6KExYXQZwCJB51A539LojEeA7ykk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzzW2bFNFdyEzBdS6PhMU4GDULgpknezTUS3wuSQk9wvLqgiVfTWxTuNBF5cPCyanQgpzyWtJBm2swatwJvaKmZ",
  "key1": "2xUpSsnaxdqPVVoEMi5Lzo6sj681DaNZMXC8BTUdmgEQJPa1SZqEmR1tXeK1cz5Rc4URPAUdPtD8VCnjwB3DPkc3",
  "key2": "4rgZ4vSUwy82YDY5bYACxsxcS2DVuqW3UU1UUNNmxTWMvZRFWj2W5qSCz9pcf9TJaHWKGsRpnPhvZruE7NpiscRt",
  "key3": "2MF9TU6T7eJtF46w1Ge3wUPvNAHcoTA2jH7vmdFv4JvSiRgkf1NjNGRY6hqLmZTk9jXS4am1oPecUUAHasRXuPN9",
  "key4": "i1AsS1oJmzSdJ1PRAfLqqk9DE1trUuypHKTNTsDfBYGCwbLtDQbeJUBCfx5gfbefuDkHDKvQvtTC7b6ytN2YzoQ",
  "key5": "2nSmMyN4b3qk3yFLH3PN8WNfqrh6uUXKDsVc3KjH2P1rxxj8wtpvmeZ7MjZiRsdNFkHU9jneBiMrkmsfZoMndgBJ",
  "key6": "5yByUM4nkLaoisVUa5zGZK6SuNAjuPqXtzEHj7hQrYSV8mADR1RcLYa8LhANBcSyxSNKypCFwt7RNu7TzvF7C8Ws",
  "key7": "4hSLvvDp7MDPRsB9hwpFaJWEwhdQiY4MvJp3LVn622WUYqSFSnCsczLjhRNuL1YTsMAEpCSa16f95nVaRU8Eg8VP",
  "key8": "5Hw2Df18HePBN7vR5aG87fyKdVBh4abRPkXEHZZsp5xxmpyCPdRW6mHaxXJ1iqywcYntDSwXBnrX9CA8n3PJck5w",
  "key9": "2b9i5xb3unuWUBs5ax4mKwx5vVxu6BMfSJDPU8mmKHUj38ECRFz2Yv98amahhb5JtJTBEq8Gz2nxxHBVEzJKfdzf",
  "key10": "2Dzc1Zxq1jXLpfmwaeZCuVgf2cBsu9rNbb4D9yN9mcKmGQaL74THi5DDjX7YhKeKn1xGHdD97aqgutBkPwxUVbPq",
  "key11": "2SyNRtuvMWZA2QKXNi6jWkestciTSkFyjuhdcbpvNrF15BwrSSvc7WJqnTJ2DwyR4PX1wqaWx5JxQghhzacUMZgP",
  "key12": "3G8yomcAbCBXSGVNXXukb4TBSLze7cSdzSHX9a4VortfNhdp8rub29s6h4cCtCtdjqakiPctgZn4frXVzRtQ3xez",
  "key13": "TYNapipiBTcDJjDkKH8hXFmtTHxrHFLPR1buyCa7TGwPKGKtRPBCNDs39dVop21eQ8hd9KoyEn1m1TS6ES5Hc9c",
  "key14": "5T2nQgaGGKN6sVHUkCVGjSPdtikD2K45gto5W3gWehLJnEgWJYvVZrKQUFaAektMeFYzaGZPsFjhRUqsmZDWd5X3",
  "key15": "5LZeEDfDoBxjcHZddHreYc4APsa2afzPPwoGPsZK3WLa6xTSeoAKF3NyMqiN35t5Skqys2L5dwsbPE8uS8tg5cGR",
  "key16": "5JXpNxBFbZPZhNCJMuTCiQA2haJeiMU16mtJys6iuZQQX94w8wdRgqihco4iW3Z7WonGDuCw1uNNishv5jbxepXx",
  "key17": "CsDp65G7xdeNrkjmAL8w87n9GajYrCvPXSDbRcgH46QJPgynqYnyPLyFd6v812HApdQ4zBkoicKgBnmDWNEyCXD",
  "key18": "3fbJe8rRkUnJjCPYmq6YznNEpWJLp3nxRB2iGUsKV3xtMqQpYJGD4PkEsaLaAS6uZJdHgnrzGA9zy7eyyEuoYNFP",
  "key19": "2utWmMy7qhAJjde139Q8iNL6bWr2ioxUYxrUkg1vkbynTHd7tJFDCcSRKjpnTk9EsnhmaiAZLxh8yC6Ab5asUWQK",
  "key20": "5UQd6dh6wuQ6v3gu5UNxrULs67VDgh8oq9ghhGNhkYNsFTxjCzG9nUoXzFXH32wcybZdmgWVDKz7VQcAPPYeEpW9",
  "key21": "2oX7eAUNypEbjBPanBm5vNWB8issD8eDmpb8QksRy9kcr5cFjKzBQ73BwKepPcxTYPG9iRrRXXf3caE91htHwXvi",
  "key22": "21i8LQFTownW1iYnQeXjQBgeeeEp9K5TfEmRtCnrFkNP1EUAY4yfPmcZWZM8ra6exBBBHHcT3wDa1Xuv9EpXDDdX",
  "key23": "VP3jTGhuJYekCzqfJg8wckb64mFLDqjcnGLNmURkdHy7mg5C26LM7vAgrPj1fTTpePvWkJpcMMSXjxcRSHHRCTi",
  "key24": "62mEETRTQp3Mnhq1ejyyBCWwu4nhGqYsBKwVfbtwzj86GVvaRhuPw2Uytzz1a3vPPTyHafBKL289Fu4yAeoNCoti",
  "key25": "23ALeQAEJQkXu9bZgzmWxXa52cksSDhnC6Noj9Hu8V17KwXUaucKDFaQ2U64rrodxRUBHCzizWGh5ghMTagADJsK",
  "key26": "2Q7NMeRAEEbT5PKVE8AtbeAzcxo7snfMLxnUu5BeQJDi9Z4EyAKwkHMqQrEhbuQ289STceLRhTdCr6GP3nNGZ9Vi",
  "key27": "31kYvEHeDgBK9avvFdjVG9nSGF6zzuWn4jGYdA6ocrwTtnEXXgA73BmsVyieQWrVi31y9CVWmpEUbrXWqbf2wkAD"
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
