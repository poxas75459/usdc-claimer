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
    "2JJRGu3xSX8Bxy6q7qbqRHF33tgmV5kkJfuVgy9Cz6dg7vP9XZ768KSqgnNuaWsgRNbPrHNxRT3a4TjMuVqx5KUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EkdMh3eL6gpyDfgT5HCMBkDN6L47v2wFjWr1P4xVMB9g2rVhY43mP2BrLxdpCrisZHNVGCVUSnxs1Wr6pnqVKVM",
  "key1": "4Xe5CrqjU6rjcDQexxGNdhzJKVbCN5Su2WHrgpGfDUucXwAM3PcNfMQVr7cSCgLpVbD8rh2pQX6x8sB85Nm18AfL",
  "key2": "37AhrybXT2Z7GSQ8yy94HpeVFF6GEvyD8GXLQcoV9tTF2Ffdq6CDnBMrGgvLYegVyf7cjbb4CkyiG2cvEFQ8cqW4",
  "key3": "3j2MSW7txEfb1MqBHyUt39MRLvREpep9z8Uz4U65WYoJn1w5whcSABdJKabKewWxETz95VtxpdZU3yFQmof5BnYZ",
  "key4": "de3TT4unaZZ3JUcFaoQWjRbyaWTAEVTD1eAuQ3mSSRGaVq2ZeQFhyQKxuoBUbEFor9YB1RdAhCy8epgVwkFSZ7N",
  "key5": "ZmjXUscdRakQpdMYDP8E4ZNt9pEQVSevCFbAE8CZTs2EFrb6sH8HKeg7qi9S8w5jLrn8hxsWjUDf2T8gmXhV9Aq",
  "key6": "5CSTkADCiraA7UCMMNTY8kRHJTrM17HEHeg97Wy8F1kmXb68jRBWuHUFjEovx1eNwhUNwnfQD4hshXTXsPFxBJMz",
  "key7": "dKAYM9YXMghTJewFjNonuWpa1NbMJStWmkcnn2XTrB6yreAjSM8W3tvUiDD6qeqLZFLDbLfSzwq3k5t4VUDtHLV",
  "key8": "2zdcu5gw9BKNjUAQeijnttpeE1eiXBCB1mbft3cttPzkCcvfbr64QfbjC4K6YRF6jV7L9DDrAAz11j4yrqYKLPrP",
  "key9": "2q8f4PS5ULKD8ay94q1wi6dpz9ivBZ8WWzUKgUoRkLcV7LLARAaFEYVyDFYUqyHjBug1yaLGxgoJBcsJopyE24jx",
  "key10": "U9fXmKRU3djm3dWYcNtptkqF5jjYSj5RKR63Jg2grR3dM4gppcVUra9dHddjUyQ6oVpG5jPE8gEJTvx4ZZvSa5C",
  "key11": "4U8fku5TQbgxLLxnnyf7yFXpnztSJWdpyohr8vMVExUdsEn9uKsEddwgDdkDXYE3y8tnrA35pTYakKuPJ3duzrix",
  "key12": "4x4VpBCxRa77co3yEpbjXmJU76xdM8PQbCJKcCV8wgaWa8UKkpCRpa18M3m4YYYdaugod1KfP2qDQU9zbLRcMFkM",
  "key13": "hZ7AL835AeYr6EKM5driYKB7qff3HXn2kGxN5NF64KagmFqH8v7hFSx8xVj75DrcT2BJ41GcBMLNmi93zKRgxP5",
  "key14": "35TShqXfUtv9PJGGRehwDbT5wTVi2TpQhevdWYTvB4auhCZGBj9FwNhTHp7ZyUeDADt73ViA6kvnzo3LZhXs6WDB",
  "key15": "66owg7sA9kgzUy6MGLmUBmBRszVK4xVsipTJp7USd6h7M1uteVapv3yQgHmeYKDM1ARLb4A55z7UYGiGfXVvtL3F",
  "key16": "v1JRMVvEu7pKeiYiNTFY2JFE3xhyK9W8p7pHftSFb5ydVdXruZVz21bH8BM8C8Hb9vzRWGVwECdPU97yk2dbWXT",
  "key17": "55pYinMph8LSEDB36uc3mbuAjqpunWqVb2Qsmv1rkNTod1pM4RLagDQ88Gjfgaof1SvYbKUKdJNepeL2y23hxoo",
  "key18": "5zk77C8yLR95KexxSn5hqCun37YzTz5ykGZom8ptNmByFurDuPsLMMgN5dYKoFjQt1KxCccXYHtWPSxqgM9YZHfY",
  "key19": "3fxmNvBPqauxgHJsZKwrc2qjyxvdtQCxv1PFeXdS3ZswfYUXBJ3zAQU29g4vKHa2isTh97WQcQSmgRVtgEfFm2mv",
  "key20": "NgXSiRrqxtEouf7AHtZSYqTRRHxb9scZDBRxzHtRWLXgFUaigAgzWtggFpyV4g9JhJheosmXLwPNXressjhbDAN",
  "key21": "3m81wxHfUDZM97VcTaeKwfjGvi5FrDckLUxF7CnSvGbHjDZdUhifH6NfNuSF2f7XCGyN61Dww2A9eSXut1kdrQnk",
  "key22": "JMhXmnmFfeBnSwhkC71PbGShHLkUL82UwgMWxwAhZYAtpoXK2AcATQzRqALfJK3BxpFPCPGCwMD5epK7y1ASJAv",
  "key23": "dySHB8RCSCtRyViM6hLUveBt7TEnZ4x4xihaRdEqnAnsmeXVtAtNEHYaecVqLx9jgWuqd8Ytax21sezVa8uoC3V",
  "key24": "2TkexEnz25rrYmsW7GKmdS2uQQK4JgDmTu2WwYamTVBofSLqA5V3nQQRYASog7ixiWM98QZJGKq6MWmYYxT1saXb",
  "key25": "5fmpYMYfRzCnpjEB1q75QWsTtVNPpWHh951uTpVJCSDncvtwrqenrnfJNdQcDBEsTBhuqxc7B61pHf6dUUpEjeH2",
  "key26": "66RFY1ophnaxpBuQrFpRAroKmsgDxKNADqy2GuqHhBpcERLrpv6QFboNfaajXFNeZw3yGAHrgnuRnndNVT9LQPVB",
  "key27": "5rUvFB5vpUrdDMJV83HeYyAsF9QtwvMKV3ffQxAULaqXhCeWWnxYrWLaGFyTvK41dM1msWaTWAMKrA5H68sptRfX",
  "key28": "2BtvDHMb1XwrcReY3fqgvFv37KewhEXUJamy9go1WKET6pV7whJhon7uQipLFksvayVFkiRSRv5xRfUn7bW5qXyu",
  "key29": "1TGfxJgPfavZRc2FpfZkKS8ytgGPKZpoWatwZup7zpQ5BEi2y6fLkuw2327Ny5Gek36CeuYAKoVudWSrBMHzfZ7"
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
