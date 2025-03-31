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
    "5Rn75MNsqkEb4z6FHQTkxjT28Y5c7F71wwCbMVCbao7AmWb1PvzaZAD3nytFHJ47PLV1DLJj3kg3gutJ5Fen2fLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3ovN8MkuDnuuxQ4n1LSF9aDL4jh3icvZLuksQPsjHPjVMxFLL9YxmGVpCJiHiRbpHaAGkXhA5p41nFNauRujpq",
  "key1": "2knXyc4stbWcV391bSm6LpYieK1oBmHHSiX7VQZsvvJiYx2g5dNdUxcSvq7UUt1zoDwRL6GVwA5veuKsEWrdX9Ac",
  "key2": "5ozTRyv3xwU3Zfo393jWCU4yxQ7NkCheD9scNsM9YhxnXfmhryK1ZqULS8wcPkRDbAxcRkxP4MnpwTALkGX2E9Ld",
  "key3": "58MtnRk7E6r6Nev1MNQTiGGmD1eT84yAUVUvJ6n9rT9XnQ2pMpRMHs6wWimMwozwkRWDh9ncAhovwAa9EKttD4DN",
  "key4": "3hF9o4ucXc5a5hyhiRRUzFqG1uhnQwCh4sNERLpjzFUDFptHhvL2fmmqR9P3Z4DYXdbwB1uQxuLSCV9A9NirvSwB",
  "key5": "3XGzyBh2AT7chij2SJRs7r9NRHV5DA6aQNfoDpv8P7BrLc9h5L3Xm1S57wdN5GJ4EAdngz7eTfHd3imcxv6yLAoW",
  "key6": "4B6QBCYBeP4N6Q1tM3md6Tm2GBBsbsb1TU6BpELm1mxMYTvQAyuFudEQSECnaXKubmg7VsY8XCgWvQcXUPukkhHs",
  "key7": "2bZsUWPGG5w8z7xQRrtWPCJxsoZwVj8YTFdXks2c9oybV8sRdCisH9tUjoQYexb3K4XYKmCegQNeR4B7hmBih4Af",
  "key8": "62cjmrv5Zs8F1aTSzLB2rZRosXMcEwAvRYusDmn67RecRFJRqKAGPMNbJRXp3DcvP6X7LQPbzC33XKmgbajw7Pj5",
  "key9": "2UisKY4EpXo6QbAtiLL4uLQHnqkYs2wREqCFpC9Un97u9NajWivkTVd7dtPETRmBuu1T8rpv3fPBkyUEQccXYXcG",
  "key10": "2VAzsqxgwrqjGTehnYa6FRTswRjuV1ndwbMbkdqSktU2QSpe6QEhgTwXTgHnzVFkKaxXLXjL1XH7FymPSt9A7ET8",
  "key11": "65yJzStucwEJtjtkmNpLKzEVvC5pjunGdDnctbUcpNUor7hsc32UsYBeMjuEJjBG67xUP69B3zhMeFL3GWkmfwbp",
  "key12": "36yFsKsDom8NtzYQnvhokpiKUHztZdWZTREq8xhLRn2bviZJUTb7h164c6xqGVtCGSBSpiD3tG46kkWRZdSkCM4H",
  "key13": "5CapaKzDQ3QGn77vVKTYD6bBHMzJUvjF18UwqXeGQnb5csje4ime9eV4hVdmarJ2TF1i8YgUuCsuaAmAnD3MSrok",
  "key14": "g4Xs8AkRCNJ3DaeCCPey7Xozek2QoEWaCPMoQpA9VDVnfxgKX1fUJpG2r3Ubv9f3ednmifKM2y1h3xcBnQmETvC",
  "key15": "2ECSUcVHTh4yx1QtvY3Jp9av4pTwcc2GPf2ApWPtrBzeXxhWPT2nKSZbD1JP3rBjD6ceEudk1JKBjBRh2ridXuaB",
  "key16": "EzyjvBJgSWZnxs4Nf2KvygM65Xa44nzJWTQhp73RKR384nhVUdKQep9teqvTMVihtD1uKjsUT7JQXyhHqKaXCTv",
  "key17": "63vkcNULRNPHYPkgmjwdxtZJWDN6UKN3iMQjTsarNWQf7UH1HRFJZ6mpcAZ8nPbBZVNLXr398r5gM3JqLTHDRBoP",
  "key18": "2cWN4xDFwvZPJbQt17xXwFE6nVqaahPvJ5VzifbnScSNNnP9JfpameqhvHK4sVoF1YNfLEmWvAwYiKerRi117g5T",
  "key19": "34VZWcr2Wwo1bFAEYsutaUnPyP2WpnhJiMuj6kbVJ4yRyrMxYc1vjaPeAszEkYvuZZUTabomxabu7QzrSPgScFWw",
  "key20": "VNhNExPX1G8Dw39HpzKwqNJo6UAGymgyt4gFhQjhxz7FBqacoWzLgkqLGQhxho31gaG2K65J5tPA5mySLEs5S2c",
  "key21": "5DTq1CrXXHXHHAKhX64WitTqAeFh4mCxT6pq5fT8qpcZoCfdqNb8UPC56owHj13re6wnKpeNnB7MrMXAwUcinaGS",
  "key22": "5iHshEubNsd47S9qjcfuDEoFR9JdyaanUDJv1uxpXukHuq7XUtDMFX7fbVdeqYbs6dw1HBN3PLnm4vNydgZTajdC",
  "key23": "3h4MQL97UwXB5cdSk8kAXiAhZb8RWGy8vrM6AzKZytUv6fU8SNFWXxhk4ustELHp85sufV5GjeRytya63cyGBBSY",
  "key24": "47rxQHooNvSJYCxFiPqVy5g237qPc7Uw6bkZJGxvYKfB4cMWT7soasRRJ1gtEk4qQGJwY4YJzXQr5YwLvPRmB5NF",
  "key25": "sYezwRgvoSaxfuqzGsr1HaoNpBTzH56JJBWog7NPU63nT2G1VB8V7irS1Vv4uQ9JVm1Jd5tV1zz98vKoGTmQjGg",
  "key26": "3UtkwcrxjDJMWHVJjhGFxgSJfzQFFH8x1ucFSdcxqVasY88FEjewAcsKV2djVPJyKbq65DHL2P2s7iGwQwNBMK6W",
  "key27": "65NTmTrhxsZiF5eXSKvwnrg1kMRue9FQgtJZutoiaocdSfAdWgjR7FqyL8nxUnJhNWnSRkKY7zKugHtFHPwCTVrd",
  "key28": "4kZsFJdegunhriyiBFBZqjPHgyPJRVEs9WiWNpkcussxM47qbstxUdsyAcxSUvweB6EdeSsEQwVxT85gC9oZexf1",
  "key29": "7ss4EefikFdw1JwtNJ68jvo8Tr3BkzTAEC8tSccDAiQ84zLFPfYEcDJiS4S9hYREk23BC8j6t3ayxornrUqkZgL",
  "key30": "4hmCTFoCKJh7KqJRmUxNq3hP9Jv5nHP1GqjQb4cwQJthHahfS8qu4NQZwUsG7D5hCm14RRQxNkr2Kev1wikQAjVe",
  "key31": "wYtCNEvWgK6RA4vrzj6FyvUk4Rcpfy5QjaGwHCK9nGgMoLnXpZrHXHLjb5hJgfLEQYHV92ZzGhHb5yTjvef7tRn",
  "key32": "62JEFtKnug9pg8TCFatRfBoyJ2tXSeAs6sbspXd92SRQpENVjpChZwxNSwtp8maGnMPYqkB34DMGYnqjJRNHm6AY"
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
