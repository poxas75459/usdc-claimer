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
    "5fNijnPrehJifFH5NcXsQEuS2Lwn59bZWziA1uTa3nnwy36QQoxycEvWiaHbGAfYzjbFV2BTQA75MtvUeQzNbpMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36C7HLRRdJdhcgoAwU6JxvbEXH32b7v9VwdM6bdH6WSXkTiyFhtBxsz7Bj2oRWX3hmXiFiUfRPZtx9j8jAiSqLEq",
  "key1": "2TXtU1xGgN7MaVmJTCrjz3QhY4iC6Aivh7D799BzTG6iT23kN1xffVyPQK6WNbhQyVTXG5xCge3ATvqTMX6yjJq4",
  "key2": "54un7HXKNHn1rXpvXKAgTMTtdWpHyraLW2RMuSieYvRX1LwJBzK2TzUNdBaHzBoaneNHW1JUe2wj7r4ZMwEGzAWi",
  "key3": "2VzMsBkRaneKP73tnp2nHzL4CtBxtJ6FkhoKzmthqZCK9m2dDQbtzut526GvCFF35W81Jsx7pZYoN3r7AK3ewAn1",
  "key4": "2AEkc8HKnTTtdp3ATin6qxyQYY5EAobQeccSPoszTYFL7gEhEjyLcJ6Vbywmxi1QG2CWg5T3k3VmyLfficYBSPTq",
  "key5": "37niU2c8sAs2Ba3N8oDW6nVsnBqNzbEMSG2Y68KivSHGN27K2HeGFAxCNYnY7LmAAHLi9D6x9mG5TFUeHPRMuuz3",
  "key6": "57zP3xtQS1ukUjTNuRQQYdtRY4rCFoyWZDa9hsx97mxPQWWPP2p2wEh6hDXnLMbRBwTBpjY7yS184eYHNMju1YhR",
  "key7": "uX8WQS3rBf9A2aauQAMsTJjeKRAqmWmKCqUaAideZvoQbEqF1tgp7NmpXTUbbnLfjtADnpHcArEtkfFsBdcPYLU",
  "key8": "h7dHr7cUKcxS7yrQ2Mbz8C8DGAhUf7HAZNR4vg9wyBUNq5vCqN7zNZJB4Zo982TaQnqQ7GGTMETNHYgAuKNim4J",
  "key9": "DNkx1QgqrmFb7DcJq2o1FP8UpjjShj55D8txPBs1vXgj8z1SnBhzY7qhSP7ZKhmPftBtnybie3bjYzRsRntCgcP",
  "key10": "tSyt9qP9jxnph4n1VeMXSFG2HrqdiWkndBSFGMrTwYy6WNAdo8SQ2qn2UAH245NV9nrgtBE9aaqoVaLVk4Bu8pP",
  "key11": "2n2sWNMGYeNKLTq7VqhWnn4JnLq1fmcphVGQfW6ZqqURxFRanuJ1sFLvzy8hogv1ejhmrvuvhovGPtrDDSfk3vu7",
  "key12": "5qUhpX4oy9ihT2TSwCfQHZMgr9vnjZ8wBUuuAocfUPwnKw7DhBr12vFqUEPtjdYSFc2gytow3Ut4GShNegkwUPKS",
  "key13": "5XtigSkw3abqjnXWG7sbh9jGu6DFp2De2TSHS37YByXXTTShnKwwQEpSGXgXFULmbiBAzSKyGWKFoJ3J6XRVPF2u",
  "key14": "3PmcWev95cwQP3LqaQdNraarNTh6npAErMui3esHbgRJjo7hfFxpV4kvZXEcaKDvH3GZYXx9dbzWMmxwDzNp347V",
  "key15": "4XyPHT5cQ7nDj9Dfof7Q4xSVm3A5oC2wQSudJbMeivRrJPwUddZb3AbPtFmqJ6fr5xLEQgbVBM7imLtrdM1E7XrC",
  "key16": "vt6tzK464GejkSSCuMUjLBKDVD5ywwPmt1odbfbWGyLWfTZVzNHLKpZyKrTMGA3z1Kjz7JazR5k8KBVPb2zBMsC",
  "key17": "34eMRKUovjHpaHZJxPWD5Z1vvVnh6GV9emmqSxU6srxx8BedwuVKGLkTQihyJnbFZr7wFs1JnpKVUKfFT2rpXEcj",
  "key18": "21MyFwBsr3ViQAsWbVAwwCA7NQwaxPdFAbhzcQTH9PrBdeuR2cXcDAjFdsNNcgiUx71suBdGYpGuUfkYPx64fPSb",
  "key19": "5immQVsrMQtSynWLd7nTX4BTZtMGYhUwxWNy3zLTCcNBEdnEXLXbrUvRxBU2PmUSqm2CFHo4PhadU2NnJwF4jjEd",
  "key20": "47nBaunSs6NonSrceqJ6FFomSqMdy1LTGKrWTdTFPzvLvEsGcTrZkW5Uerhj3KBU3iBL6MVRm1k3E4CxpkomzMLL",
  "key21": "4w3fiykt8Wh1MjU6kvrVyRpZyWgUC6nx7yxZ4fwrNosmHeLLEUwHmgkoMjZkoojSbrw7ok3ifAxUYhi8JV16M3aG",
  "key22": "4EnXoKa1VM94WNcJzG4FxtajjyeeCfewficHdNc7WUYw8X8kWTAkFAfrA9YqLNVh8F75nyaWijdMUMNKsbEc1Kmz",
  "key23": "4qRb6K4ZPVdB8p4KLtDMviygAz6TEDMinEGS3cdB3onvHuEpugcF4BjndDQZTQUamCMAvyjeb9GEdcHvmFRdgU1F",
  "key24": "5C7TL6ckfYqjv7WwcFSPZFnX5G2t4eTwN7WjTw7kmKJDLcEtkth1gyft4jEbKkE5wCYGFGFX7TjUYtNNnbhRYJMq",
  "key25": "5H7Yjw2ZVVronfbhFYDtuFdusoo9iDarMCyHEY2Q8JjfciZRh53kacbhK7j8r5uJEBTmsf4yJE8U7DyQh5pFcWsY",
  "key26": "3c9H8AFQ4RTSTxhpkYzEtCxJ4aTJR8syRqWmbu1YN7EndUE74hWH17vdcC1Exo74nmUXrkv6esVrxCrbmGiPVaZX",
  "key27": "2hTSzoXLrF4PGZYBmPZgeC7J2329P2ebbVtXzabH6jWednUriVt5Eswvo21oD3T4sgCk5hMAuKsJeWBRUL9cBbQq",
  "key28": "4L422UfPKBHBLjfzPBoLzHpQ1mFpNq6TduNzTVrvHHwKFe3xUookHewXMkAMv4ikAeVnwxedXmtZ8V9WRMGcRRGB",
  "key29": "fWDBjP24Nv1QwdZSR8BQFUvsnbQyRos9w8ZxDaoJr7ZD2oobnN53GhyeRf9Z4uXetHg1GT1WRBMSDmrqaC6ERtN",
  "key30": "UASoHC3KV17ZKXZHAcuTTDEDtZBq8St7o3hKADgq6i1pF5zP1CxmffbDRgBmPgTGRZT8if2q2FwJqvX1HqFdfcz",
  "key31": "3apMPUAXcWDFhZrtaCrvsEppD4H6CsEbeWeENNzGb5xDUKZTAHkuBFYzZ4jbW54sjq49tpsRuQaYZwVMV7NCL4nH",
  "key32": "65xr4MpKrAqRNHAJJYfXNNi3sW8TNe6NTSvXB3oR992TNgrvBCGG2k2MNeXUm49Ga1FaUBsaoPPBsbk546SiWBtp",
  "key33": "3crpJ6Mx7YcAdM6S4TZyJw357kDrqYQDeU99LfSYdqBdqZp9yqwUD19kB97SAGfAAC2mNV4kcjSC9pfqzJgAXnDP",
  "key34": "WN7Y8uqXpzjeAxD2j7HHFX2gzMfzjWfpXWFW9hLKiEU3BuJ9J4vts82V1rWrVrFdSjyEjNHLfyHCHt6wuXmr7sM",
  "key35": "5CnmkKtLyRevaaBjo5wN14B3A51989socwqM1mcZBqssThJxAtJwWACZyZ6p2Bh9S5URCvoopLsiiJNsyLRZuVfJ",
  "key36": "4LWE3nt1LMub8TJ6pvQwT9JAju1t4r3AKBL5pMFkV7qDRHZDTjSr1op53JFCs7CW4zuYWxN3xdvM3MMRuC6BYqS2",
  "key37": "3mRzpDACh4WkqXSqFnjDYUYCH6yUCKx6znez6VHPuzQxKgeRcvemieJMe998yAgBXYy6NoXwpnLkiiy57NrmH25y",
  "key38": "2Jxmd8gvNdG6rY2a3rvYBN1QHA22QadkSWUfqkGdwWprndkvGcc1r3r2VYuwY1ZSMfQo7GH9Cupb1qZU1j9v2emA",
  "key39": "vjfmyySWUJczmpaLY5aNDcSSFdDjg5ZcdrZhZYpohgALytuo8ynAzv5edYZoAZrwuuZ3nvDM2c3RZJt2nQDM2Bh",
  "key40": "2hMSHPf7pvPbJ6g64eZ8ghh5roapnwZQxLsPnLzBDYGzrnSaTwFBxXzoihVmwszLRnG73RGtLzGxoArHSNmp4hFP",
  "key41": "3XD3d85tMEcYrRakLPnTqjUqR6E3gAMU8uWDtCih3RPxGjg5DhFRnFRtTwGtkZYgCQ6LKB5n8WY8eC8H3MemYVn8",
  "key42": "42ViVi6pFyZNtmZCkAmqabzwkQPJUiau57vWnP3PVqnnUwQgeKssYza3Lh8msdTXQD5VRAdgQF8KRU6zVKSxpNqj",
  "key43": "3QsFFXR5x3g8rNe9Gac2F6K4kePksmMmsaevTpdtSmL5DFmVryAUYH3tCiTMeArUs9fA59aUzWEXaB4WSXRUYuM3"
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
