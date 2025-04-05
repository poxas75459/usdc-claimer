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
    "3y6C4CUVzujQaXK3PkGV2CwqYtx2WAL8Tb89Nj48mFNWLcgh6RvAhbmwheVo19vYCSHEEyBcLJ4AtNvhJmn6DMCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUi3JfyEPzqCxjWpF9RVJFD9PQqRdM3MLupknHhekN8hmGcuJtXMsUeCR86EWCRTKi3kufvDUnmCTxKZaUfLM68",
  "key1": "5Ac8YURGKuJoWqG5gR3CFm8ET5iXCJEyuv62ZDXCydzT3kQCD8GHdSiyHAXGokgnVQMHttfQDDNcTtDyspWt9QCn",
  "key2": "5JB4W1Fo2LgfNxHsc9mikqCFMiq3msXo5wPzqxHKYy1Hh28Co42cTcrXDWxUnLyqMF5tJDgdK7GRF6rdWndwCXoy",
  "key3": "zDTikvsaqE3Sm89ZeRcKjdu5rSdsj3XAnKCuthURovuHcBo9EMbYi5JKbojhqCErvuVJQVCMGefRV9m4NPr8V12",
  "key4": "1J7G5duy72aUJzL9AVwcUCdb81Nok3JGdJAerqKCZQKWKbQMkc9XEdv4NyVkgLPhFFXzJ7QDnkVPTrbZGdkKx3q",
  "key5": "2xCKrzhhjoBM9JBaBw2DBTE6yHH6EXYzNcoib8ooiy3UPhebcwWdvgqn4eYxoTh9xpFqp8yDp6VsD2wPNex9Wugo",
  "key6": "2rZwYDPdkr8huf7ZR1i8bDjmSQYR7Kyk9xDJUUggJWeKTn1d8fX4vrqzuWGCgxjLMiu1xNA2LB9j9dpHs2vEAJ7z",
  "key7": "3SFCWsJaPQdTV6go6FD7hNmLjpFvQ9eDzeokqF1LCUprsbgCmgQCyGZ8gt7vmSfNuJ5mwR4QaxrjKh78KppcJ6J7",
  "key8": "4emjbRpyAK4TdaDRDJ2FpZYCu3nUoryCsrxT1YW4KjE1bZdBfztq53r5Tbaq9tcN4J1amBPJvE8rre2WiqaPXpKe",
  "key9": "VxZCaMw4BAF6PfrH1v7HHaDPxHZXP7hyKAPVxuQ1UnkmnqwbcXtQ8CHR6LoLWhXSCE1RpTxT3XgJLg1N1FVqktx",
  "key10": "5svEjut1Kd828R7XRQ4BLH412hc4MwMYTLXWYzT7kfK62aGinH17Q1nzBVe3qJDNDdx2xo7TERdsoN1gYsYuw8y",
  "key11": "667vC9DZ1RwuRCDzcVf9gaw99nsFKEXmwEw7HqXBj7tmGNgVpT3oH7osjfjzUqNXWZ2HnaimpKpjFisnH4maJAkJ",
  "key12": "KpSVLpcfVWRbzar23KyY6ZbevXYCPjjrLBARb5U3tDaSicGKuLCqNvLuQ8zhVriUgN44t11FEdoxfmDWepD5qKC",
  "key13": "igKS39Av9pv48C2MeQ6fxhRdyu2wk3ZCqtEQ53qw5DhVM23t4F3NH9kGXLeXGuAe1sNanXsYcv4faKgPgRqo4YJ",
  "key14": "5v8ok3X3rK76W8L99TZD8eJ5cquLuQ2nSmosFTz6CDXzfUN2zwRLvDTMVreJ8WM5aenxUVUHBGyqfytRUdpzPQMS",
  "key15": "zZJyApfgSYkpo59M9ia7Mgzpjhg6A4NhxrtjSdsLcF8dbPF83ohxWUVQtfQKJz2FiAZ8CwpQNBsuwRWPNk3US5v",
  "key16": "3Gt78LBbYSuxZ62ir4PHahFa3jF4tWhMaZdHxqXMcdfVH6oyvVJEjEnExdgwxU1qpScMKAeKTAUoTfmpsL3AWCyS",
  "key17": "3XsNJP1uhyb9CBXLQbxrXvD91Jw641Y2KJLjjwj7Bxi6NmgffhKuUuSGLW75s9NDSRC2aBv3QTFCrAV78UqwkW7x",
  "key18": "5MSquVdMmqAD4Ygfh2Zq48vhzoesLs3nqZXtqgxvFZEaixVbDUNbo3sL2kftGjDD6gnBzibt5S2hEAh6KwvLxj2J",
  "key19": "4eUsUsvyA65tvByPUAmE1cmjx6QiiD4ed8aFEPgQ9qc545briMsXbt5FxzPgVnwMq9JHS4MhUfNfsPqxkx4PgGZc",
  "key20": "rUnayLiKqq83DU1d5tPKUkTYThQrJ76tVq3aaDZ7jSX8vm43NsQM83SuWAGSKWMJnNY5ZRWcKUt9QPiNEmSpYy6",
  "key21": "4nvPy2cHNgSFkqMZL1RBAGD2pNsnyxs1Dxg7qDN63U6354Gu9MJrc8jZZpetindBBpswsdJ2zbJj616PZZDTkWnK",
  "key22": "5qjYksSXWRYpeVcr91tgw2tdjZ2b2hg4LztaNiPQxpCN4BW4dYsQQz1r1MR5DKeS5wTMWjxbtvPwtWWWwTFEJkb8",
  "key23": "GDqacHjqeMM8wfNqh1cgdGRfsnMu9d32DkFTZcKz3F8PvQNmZaBEbmqhhJe5XTSfAtWuVcvB88ugRq5a5fG6RDp",
  "key24": "66sDBBY3FRKhKFp7K2pYYV9bLW8x9XAnfniJ7JqwhGynoWqsUYxg6sxEPMmH3SUuoECsyqoLPegfex2ZN7sivZMe",
  "key25": "4YEv3N1crbTe2VFq3w4cU8AX1QawHiD6oFqQHjEEfxbTM9b4dA3NPXLHpjcsRx1pc1mBcJACqVpKieounMuvKbSH",
  "key26": "43moPLKMAqYTGzG6i76aUbbzVhdqvmjYSuhDAFJAF6PXR1c3bYwkesJYBe3uKgaLNeMr3UnQEsCd7asB6Xg7rYzA",
  "key27": "2Ffw8tfRTbMtvw6SAULAnb9mG5yycXMepiAKyT7tPgpbHFdtSuAd6x9jhSSyUAMGKJrxvBQQfyJF28rTmfgByLph",
  "key28": "4t6Wpvzyja9i4o6VMyEkmhwHDw74pfeAZgzNB8wnp7hP2ExyebPZfU1x6VudNpV1KvgkBaMhLhGWh5RG5ESzkAQX",
  "key29": "45aMfB8ent9cLsXuqAz68HsxZzdf2rf4JknrzdqbsXD2kEEcthyn9JJhWJshz9QLvP7rXAtyDh6PXFpy79CBz71r",
  "key30": "5TX92sg2vLmBP5Ss7n38akt46inB5x7MpEwTbQpwmpSWjV7WHMsukUbszXGYaGgLd6ckm2zsrDhuQvr1Jqv1c6RE",
  "key31": "5ACM3c8A5jAjUT4t8Q4pzgkuX5Fh5qi6iZ3nY2cFmjQsdj3RRVD3xwZ9RzfykSZQaqc8QzjTwm8i7hLEviXBof5v",
  "key32": "9Va8hzYVnW49FRn3WN2WPmPipE9xEa1W7Edq39WLV8eQpECmez4GeivGBzeUdZ9737KNBhy4SreamwrnoS6xXsT",
  "key33": "5ohZjJ1R2LnYJo33AxzoETg2zzRLwgAjCvNe8C3KjSPks7dEHsGq2s7MgTMFiC4h6XsE9ByCNkU5QVwAqdZizZWh",
  "key34": "5z4E2GfhBHqbJp5xYtsPkM46b7yzjKCiGHXCdeksi9gsxEaje1J5Lyya2FS6HQe4xvF9QRyBEZBWyoxK9c25FhLq",
  "key35": "2ZQQUcFSsmWnEJEGid7iyhGBy2Saa8npgvk92E79uqjrfY5J3dG9TdyP4Vfyj7y4cPBhFvfX2mXHMDBbvfPyAEUq",
  "key36": "4FLZLnyPR45E5LVLGwS64BFq91YzUsBX1AuWeBV9sauKK2Eso9xemjSt3dWp7rmTZkWpivvetDk76MU3hpmjLzu9",
  "key37": "4t7763faKYwzUKeAYMd32FdzTqhuSKWsALGoFrzQgL8qzgufVSspoCqmEzF7uUfuGskMKSAigEWHr7F6mtVD2Ri6",
  "key38": "2gzbocSvR9BUSTnXAuG6vP2Yn7P1x1u3WdkbswT4Jpgbmi4tASEuSdXqsZsoBJhkkkeYNe5kPE8T7ydZUKTohDR7"
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
