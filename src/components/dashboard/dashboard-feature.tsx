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
    "4EU3YkWhoMKBFa7i89ai4EsgCmEPzpBxZg2U2htZDqJAL6ExekbCpj3CPFzXS321TfmEoveyWA66cmNtdNqR9DaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zA4eiEg9D962EcY78XFCCLctT4zcdQANrb2kFo3ZQKyiyZb7RexUhxzEz3eqmizDXiX2PZdVcohPzPW8GGG4XH",
  "key1": "55NaL5Zpo9XGJMYB68wntuzEQh32U8CBFyyS2y2W9Q4ppfWiCvQr9bCJeSAvPJgrYZZhdemeKtG6CrTTKDQ4NnoT",
  "key2": "4vVdoFco7VBFoaUVt8mHzikvx6TgUmKt3qdTzgrDjwzDy1rzWSYf3zzuSDj3X6opjUExgmBuHMgUzxqL9az66vgn",
  "key3": "5VjBwrEdFuVat7tomGXdfSk8edBcDeahC62DYbCFsAaBN8b45yFWJMQ4WA3UhuNrqqEZXksW8XQkH4T69Sj8vfMY",
  "key4": "uJ31qNJ3KmuYDJY8yoo7cmBfRkwXe96Gt7QyXiKBU8tJ6EZSeZY6h2yQLSiZH3MrjM3eMuwwAGGTZbegvZy1Tny",
  "key5": "4YhMdz1LDuvzDqTAN9tK9EjXmJdjCQaPruSbsjMUMk1S7iE4ZnzCUCMW2nkHskxo5sjYRCXcPG2bQnXu678q36B1",
  "key6": "LyCXbgZSGgnpgGqw1Mcg2wwiXR6FvyRpfaPUgWx7vupK1GXM99Kck7WLmYCjwqR2k6NUw3VLDDTYLmEUsac8wpN",
  "key7": "4J88LbjnvGkPyRXiPHScTGdGBckN5P88cKjcE8LEDP5DX7N4x6YFYcaBt977akJry2WrQgS5BkKri8p7xmQjXtGh",
  "key8": "41BAFHHhPabZW2wSjBw3VJTuq8faaYz4pAtjndky2ojhisGxTLJTe4fvJzbPPtbBkRVGxWWaJzBiyKgUtLoEembb",
  "key9": "5Yn2pP2bbotzCVqnYWQmedKBzCEBgLoksUBcz1e9q56PG1YmCZtCG3aJMSqSb5uGbNdkZJ1SHaX2PDgPYy5yCoQe",
  "key10": "2GRXPnS4n7aBUxXRcVPGwAu7m3JehkxjPWip85C2bYFFsXRcANQEz8LnBSLwhbbiWx1xbuxSfxhNEue3JBXMkgs1",
  "key11": "2WXWY5zNMa7CUvV1E1BJUGYfomYFyKWseoh6rEoRrkwxW427xJMr7J84XBVim4HTdsuA5WvfwrHT6qoJ4s5JDh6D",
  "key12": "5JYg9pLmA2xQ3Rh8EsjJ8ADLsAQNQaCaLMNQphThCDgXPVu4NyymsXtf916PQyjqb2WYdHosrY55WWo8RUDndij5",
  "key13": "4nCWkoaU2TYsqvQFzrueneSgxkEBMbzs9VbT61vva6Hybos77HdJ1vjuZWQg33pNBTaibqcxxi2QmhKQYFA2EaUc",
  "key14": "YxYsy7sxoxZbrv3DWsbaUiTBibbfvw6g2iy16EGKdvKdzoQRsTpAeec3kV8chmwgraFxhFv2YKmN7h1y4TnVUDK",
  "key15": "46HotajzGAr2dgzx5R3DvBzDwYWHo5ftR3Raxuptr9mkvsfTzsJ8tz2VM1HAPUomUpaCMrbZ1vrMFQ96S9cb4q21",
  "key16": "4AUND5URLYtCE2vj8YDod6tvq2obw8Vyk9aBaSm8pcLdgHVdZ4KEAyb48VEFJy8y3d15VB9Mq6R5AuxFHCnryHsP",
  "key17": "3TwWSJJNpLiwFVD3cxgShPre4UpN7tLNSwQgHhFp6vyTJyrxybT8CQNHKh9rExQrdJ7sDbzJNrUMuQzfkH5AMY1v",
  "key18": "32ZaRCZTM3VVPaEPfcaKkYFgqykxRHgfQNp569uiB1fEqxhQcQ8VdSJbEvVJidqZSBFfjwm4wP2kzuYDY2rBtgym",
  "key19": "58kCm6nix8KzQ7UMNoCZPJbdzxDw83ChU5L7WYme1sDk9LrPysqqpuWa5r4Up21MxRviTHapSKQaoQd3AkUdmEwc",
  "key20": "5CDo7TyqGjQCoLKMMCWJCbLA1yAaPv8FeJGmPmViaGJ9GSBdMboEMWubwq4WGrFEQyvrBdcVf7sKAvAih2mmvpPb",
  "key21": "33dtqYRvYg7PRQisoujwybu3B7gkbomKHiJcvimS4ajdCwnepZNRZH2fHqrM3BDYxhJf51bVpufa1uWZbbMVsf6T",
  "key22": "5EeqEydUrn8wLQE3gkUQQXa6CJmkvKWT8JyZYKSRGVyZTSPtW4JzZHTeEowfhLDJdtFESYuXrNNzv3zC9TUWyHaE",
  "key23": "23yMGZ7E1ihtjkpaXK1Pxwe1GKSNe6Dgo9kBLuonnSSdWkR3kaf1Wb3TYge2NDsiYCRGXdL7EW9WkM83Cr8qz9Hd",
  "key24": "3ySE8ZSThMcxugPheTqWpxuaZ49wXDJtrZNNeTEuUWRVpUsjKt8D1xhAX2rEqVoJUC6eL8kmGDRUDi2ADkFEwg5U",
  "key25": "2pcqJKrdPwJkSQ8aK6gvGW6UuXcen3L8vSEMn1v6SDh1XNFhxfCQVf644gxQht42gNB1tMeYmbrXEcjLSADBptkV",
  "key26": "43ZK3nRdKV2LdB3XMJEvBBAi4YxnLZVTtp8GNMz8kiiTDj12HkDu8dwJ5LLxXNiQnv9C4THVkhJTPYLXAGtFTYb4",
  "key27": "4NGs9TJvgYYZBdvW3fjT9rs1ncVgABQnJ8qbzyK5PUbHUd8gdf9RKa1Vz3DXWp5Je6exHhXMQFzHLNFtVspye9oB",
  "key28": "mdkQRbbk9fz4r9cjVG36uHGyVJc2Yp1SmCsNad32a7FbYHrXaaB5E3UJNxYzPcz8p9Cgu3ui2kPdWRzGHFLkkQY",
  "key29": "5VZ6DxW3uyY1S5LfC3kJ7izjGiCmKryCChUSRSvXuFGynLqw3TYwjU36dSELcXvDhBk5h9spuUxDaJQd8zHLfsa8",
  "key30": "25g6XjMkq9KED3Bthtx8551QCcMkQpoBkPf9rpzhpB7V58WdRhHkozfs8Zr7igd41pdGR5gZY5889uyxAk7epDwc",
  "key31": "53oZ3GXJVd7H4tPncqdNHtZHdfMcxTzJnRMErdL6T11zHtDHkMEfQDPXWcjMctmMdF1izAysjrToRfNADEfj8HyA",
  "key32": "28uhb4wNap9y3kosMy2NEaTmh6GXXcKTqPCznKXNq2q6jdc4cXTBLxGpj34HTeBrUyR8ByN5QT5LgzRgAkSseaSV"
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
