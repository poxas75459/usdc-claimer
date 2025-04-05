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
    "RFRG2L36xdrReL7dnGKrBBjZ2wdCNN9bMDpdxPkrd36HiNM6Eod8ksAF9eLyoFRnaYs2dE2WYgmVNzg6SpkY1DG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpkZHBUn4R96V9q6h3e2eB4D8Scz6DTRD2V1j7koZ4BsACaK3KfKNG7tKof4AGkyFYsBdWFDKAiedCx1rdrYfv1",
  "key1": "42wVko792xaaoVrNSuet5JhwVHuCFBytwCwiZWniqC6rARasAGwb1Wzi4v5gri1LfCU89i7UXCGufYEaXwVdEU5T",
  "key2": "2s6ko9pBKjf52KHnsRC7KaNB1nwWPq9Wd2pUNrbBqYpDrWeoFJgYFefEWmHbhBibPeMCjwUUCCrdghwfiR6MWxcJ",
  "key3": "2Vq74fT8JTbQ5LNLgeo5a2nzEdbq1YhKFa7Vit6dtTP77mwz5G5PhnPGUP3qk96TnAUJxD6JpgdbPTDEhapta99C",
  "key4": "iFXP29ruLBij4ENPLknvMRbP6zaswbBiwneU3MCfb84dPpJCHGtG3vTDnpe2896TBeoCRzogvx5SVTUgr41jq5C",
  "key5": "63DJq4kxdSE67iKszHbt61v4nCQM2sGum4VkVVC88rmU7DHxaCZYHzTuAQJQJk2KkDQ2wifwX2c5MF5XSN7JQbrT",
  "key6": "5az4vrZZSBCuoXMqtTNYUpDWvbErCE221CF6UVSy5svCFdzuewcTXf4P63JYAYhcfdBXkyNCcxXagBwhsJ7XbFTm",
  "key7": "47jizFVgXSvPjVRWms5HUkzWTpEXMvexo1pyDq248vL1U7uMpvhjDihUqQc1UwxcjGrZZiEKqbz3fuk86ZvLyAxh",
  "key8": "5TQnutvQchNzKWZs38FiiwJwNZiBdJ2S4MuaJbtEFi1decCTnP3Ms82wprH8wZY23LpFBRJSSSXEjPErRLBdGXBP",
  "key9": "37HUPpeqTmuhYGpkKqxoGjPPQn2UWdDj9QbVL1ymRbS8kit5Ke4yjA4yPiw5Lwxi6X5YK1h9ZcSwZK9awR2RYGTW",
  "key10": "521MXvF6BPoevhyEnfoQmcMJqwr7t3J1fJ28QZHUjitvY2UyDpVDZApqD33c5V9c6pSP4CKhLmtrpvieYoGbVyJt",
  "key11": "4RHDATWhTGhp26hX4SM2YtJrWZY1PamHT1A8a5WbUun1fKKSEPc56zJAe6P2awFEN14oA8eU1wUPpBxivw9afhhP",
  "key12": "5pgoDDhwabS3VdemHC8jnV4CHYZc3crb3rZh6D7MnhfQoXAmzUCVFry7KtqEFqnMMxX6UdU7JeHfEUaG79wRzVQm",
  "key13": "wGyzfofTauVKojCuTzABpSQnf27uRKFNi1RfTeFZbDXGdf2y2XVneXc276TfcSxbHzazDaU2S4ew3kVHDRrcsAj",
  "key14": "2HxEzv5DNdwTBb4r2w1HuLNaFxP82LVf6GY5RhRXJzAhTC18xJDM9ParXLzAVuk5vCftwjj2B3g7bKkE1MwQw53g",
  "key15": "5T66rBWDFhVCcHrYVLBoLJKXBkALNowbXp7gabcE7wzTU7Sg9p15fohB88VKKqSkneMjMgBPTahaCNXg9grqwr2n",
  "key16": "5ZonpLcUBYpvFarQ4iEQGJ6zsNkxCc73cJhUPr4TV1vs7paSg4K9sfxPMAznhF2GDJ7jyVwse6BxJ2nsV8zJNMWp",
  "key17": "5g15bDd9GrSWydzefVyquBcpBTcNSGWrYpezuSsEXPXSjM1BJr2g6rhCtGFFhvG53VVva8bWryQyTkcyMUDFsPuv",
  "key18": "5afgnoZuo7DRk1Ejf9DeMtaq9fJ3R2gG4joVTFiB6ypgwn7HD7Ew6EmgVz4JdXu7t7vn8RUeCcb2F5rRhRyeLbg2",
  "key19": "iEQkNBvZEr4rGA3ogLZ3QNxhPQNxUNyBmi3hDyNnRHVepmPZ2ALH2QqabcXuZYbQVCZvUTRVSAceifvQcp22UiB",
  "key20": "3yGC97UQGgTTXdc5pCHFpZY8br7sdH7uEp1KsikVVZeSDGPPiFupqRndcLZSL4AcQG7EG3drC2b2PWQMJ8rJUBjb",
  "key21": "45titMTbqzgFEMV8B5NPPSd8TvM8pnnhqm3hyb2cYWSq1CTLNtxumZMGwtoLUuD8WYLF2zrtqH1pLusMS2K4XrUh",
  "key22": "2A1hkNYFesortsgZYUVNtbCDxn1ota3JibaHnSZHxzahsEvU3W5QRKBi8G1JasoBygknLtkYDC1eiV8mMzFJEqFm",
  "key23": "2pNkSyhfaLborpzzCdqUX4vXZpwa3Nh8gVzMgjMLvqijSMwBJtvLo9bfE2Vtkhp785omSHsQnYbBns8rCAwVm7cC",
  "key24": "5omN66s1CMApS5EvgQbtNUBkpJwB5iag7edamwfacroGEXNrR7zUFqjqBdyog5ZXWTiaDF8VTmsZDUDGrMqSaLKM",
  "key25": "2wHt8WQ4WJnJesX3NZR44EENb3y17z1uYpzHzyZvQDrpBQkt5Qf1nyjEz2ssRxbyAxjktpCbVbeSQMMwipqUmLNk",
  "key26": "3Vd4qMtzWXoGE8tWecbPtG4QXY6yNzg6PcQBXFUYSkovcpm8c4aeqGWiAzPDbbnzDKhBpV2agUkWXTmefCRjxGez",
  "key27": "4J49VPBRHvLPeKoNmFMqC8uk6FWXguTbanqAgq4EjYm95wNP3HAuzZNX5tJ6QeasA9qeVkRwD26w9SaWSz13WdaP",
  "key28": "2QcxwW8VAKyCQfU9cZqHe718uAWgNDu7CJv2x244GmfbgjR7oaDUDpsUZxdyzwKzu8eAmB1A9vMN331bbGDxWNC5",
  "key29": "a559ZcvYoHSi3ovkgXMRySTGca1piLJfgxgc578YHwvHkYYTWpFn5ns84HTS8c41UB1UFw22UntXLEvQy8XVGmS",
  "key30": "21HUVUVDrwNKz4YvjZR4sJBRidfBtL1mZ9dQWVdUZAQmCuBehaWKJtcvuRieh61HEkgtHFmgwXCNuiQPWcYp75Xt",
  "key31": "3b1ucgscw3n1dbsaaSwh6cnkD4oRQ4Wec7CGddZ4s5Fdx7coKFjT74Rx18ohfCQictwHDzPAnkTpn6YfGW7exa5Z",
  "key32": "g5ByA2BgwH9PJTE8t6diPNAdx6hKBCD9g9ELgCXbbCBbHYfX1rWphMjy873PwK1aMESXYT5GbxJ1Zy8VmjkwzoS",
  "key33": "5jSzvNMbWG2c9KJRVCz5r47t7Pv813VaGtqHfVKZTsSKvR94tnFYdv6sfzFEGAUDsy3g8s1Cz3vNaL8qk5G7oEYz"
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
