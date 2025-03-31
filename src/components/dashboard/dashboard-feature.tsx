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
    "4yqCqumJG24i6gaiJ3SStLsFE3BHycC5jDhdDWDmSGByMKYxEF5RA1oTDPj2x9uGEvtwnWuAyTS1zzsSyuzR28Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jmkFkqp1nzQFXutuDktzBkRiCAuFgQMimMpxj2ohc5BiQxNMoKZsELqEYdXQDiKaPcgH5oXU2KbxHXAqSyMcTDS",
  "key1": "5rG4soPK3MnVVwpBS5rJJqXqHr6rAekd22wfT2hcajr7WwmUjBnaP6DaBfuzeHJL3MWTFv3TzB7HU3P6V4UkxLtG",
  "key2": "32cHfC6xbBYng5ggXygGwQdgnjvqTE4LdfjZPsVAsPvBwTq8vsDCYsbUL7WXCgGQdK9xfJoGsbnGPRYzQtwSzX9M",
  "key3": "xSRBM8767VN1hMQvtEJ8k3QskTCaNCHmSPfvKgUPgrLze1mZKXdQ92cy844KiDiPSgK9jUZKtpzxuKWNfqYiLk5",
  "key4": "2mMpjpUAyzXvKymPaDsm5Wkx1hCEYzJ8ALJixyg1mEhqYUyE7quQgTDc4vf9BiE9Qu6NyA27ywvPkQTsFL8Ax4S5",
  "key5": "53CfzWPTzJepyTF12tbVgz1xL2uy7pXFZhUsgs8DojVgQYFXFiPRA9JmirJTgGMnHL1zzk8w52bzB8qJxDFwACgL",
  "key6": "5WE1tUuMcdyYvigSgJDP4D2nqMUBkrPiEL1pFBEXGgrpvNzHUHGbZPKBDH7unSfq3d8FnHjvoabbv3iZid37Z78G",
  "key7": "5DTiJN4CYdFY2TC5KNtqU8b3HS9EnAF5qSYDAJ4wMk9fQmY11DWxLX1V2HeQc2W72Y7ZZio5HedJ377fbdi1zLpt",
  "key8": "3S1MoNYq6s15gCQ7oFWEGx6x2g4KFckaczbvVWRYSQXMHQX8vbwPzV6tPKdFNRZRRm4JtnuWHozKdocVPCVkWutD",
  "key9": "2ypgchKfbJiiN9XstWieTw3DvgX3bEP2XAAWfzahoP2NrX9itimSmsHsbniZrApiXBFTWaxhnrqS44yVB9FtCjhq",
  "key10": "23Uhk7YCdNSWZU1dimFMuKP2yMadFkmypiLgrPLCNdU2fTwUTDfBHYMCBAvJbvfyYtX7nwJnrrFwdyDh8xNw8dVz",
  "key11": "67apmoovWkTkEX9ojDpT5UWUFk419fh5VQU2WUdx6Fs2dUHeV6N3xVi86mfR5p8um1bDEDFKjh6WGWfDPGP5HugL",
  "key12": "3NDpNFF7VDvevkt1GjjJU8NpZStk7jK37YvdGSZmJSts1QVfupaCAKXth2zv6b1qyrXb1kTr2ZXhFFYxDtPchwSw",
  "key13": "5bhQXn6iZzqXzQEMkHNZw2zTAVTgLkxSFXWB59mZdyur7oBaYQNHX6WvzUxAXv5JkH6ZxBje8GV5s9jtc8H6dkad",
  "key14": "nCW6NebJkyabq8wRzU6UJ965dcNcKyNGpF5uohEzMWPoyf6nUastYT1PHL13p1MxEG1QwGCyMBDYCnubk9a8dKp",
  "key15": "58dG81QPFjUrT159F7Nn6G7sGuJtYg7Mrz5kVxqbs56nSP4bxNm3Nk49KWCmXKSxyRJpN9gfDYABY8etxbaAPjmy",
  "key16": "rgucHNX2uE5yk7tMNc94grYBRPauBg32za8CqmRqSFTvEWYWkhwZ79RDtVSLt4wPeYkxLw7Bdqj6DNKjGgwuYVX",
  "key17": "5U33GvAFjrPr4io9g2LRTXz3pVrok2gVWkYge9WpKkXTt9iAxPpJ9J5kuENf4zazUGSM5jKxQ9ToioDEMEmzUiXE",
  "key18": "Vo3JtpPBE2gUBdNcsqK4XaedDBqwJpACid73Xwp4CP4zpnn5RXTaiKmTJyUs6yxJpRUSn9HnPw8CJxLSs6io4RX",
  "key19": "Cg89HfsWe4SKpPmRLaH5QJs4DasbkG1zhStJbygZPMRZqn9kvLuU8EW3oFH9sPYqkVJEYjAYoqhXuMoDBqWEvzy",
  "key20": "5BWsgRwTGamkx9PrAsA58SC4m4MNCQmnopYBefF9JHpBpf7P8YEicq7bHv8PNfi43dGfiQ3QSmKjKQKQj9fA8b6d",
  "key21": "VfcNPEAPFE7BjcuJSNZwS2TAEMvMgHokLHzQwwb5rhTweqFi9u1KGgPi7bsKR92FWGkqeUYAYA9Ge1jMhWGxScK",
  "key22": "3Ytey7a9Gz71dq7nML4zXYGTCU5D9NSw4uwcTMJ4ZtPe5672KLvoFfU2kBx1c6wfy4VC3BWvyEf2wNqjV8HGmsix",
  "key23": "32meHT2fqTrA8SWVd5XPH2ERXSjebw1aRkDw5tUPAxWz6fokGJ1uuvk2KrtJQCx5mg56iHMc6iPWme5kK3WAckwT",
  "key24": "2GLeDKNLgcqq54Nqvjji4VtUPUv1GeA9qu8T33bwf41XhwJgQcjKxNTLWLcfJURmH23aEZNzJPeuFoCUvVnAuaK1",
  "key25": "xjbtvJr97npdExzrTm4ok6GgVVMAvsmkXexomhgYnE4yK4BHUe7RhLDG4qk7A3aKvjBH2q4JYywmYuW2pxdiwKP",
  "key26": "5PDvh82HtHD9PbQWzPL82QznEprG3SrQ6TQKg6S75B3MaRyaMjX8Th169muyZVEKbZdob5Sf3j4VNPPkF4epWFzw",
  "key27": "3TeBTbxPD51K6iDWXk6GLK5oz4QB8134HByjQDpZzvkUzixGkSchd7uhbUG56rH3TEdrg2RqQoeG6qaCpncLWU9G",
  "key28": "wMXWNzLXsh9zXDkdshyKmGrzGN8FRKxKtCJkPAF97TeVQszBLEbXz5TWY2urxp9WKoiGx5bTDMBWwF8RJNeY3um",
  "key29": "wtbXyQG5LekQb3uDFGkMS1Hce1kUrAoypxyneu39w3LUWVndtoNcCBHFgyssfCDZVzrXPPHbM218Rio8w7VhD2t",
  "key30": "4MgDtjmT8pfGkx23b67uZQe7oufbsnGHD6XxSDPmcyCY4qByesPZvcLwDc1r4Wxzp6c7XpyZqW6QFZJUNHzTKPtu",
  "key31": "3QWtTBLChwziDfQxaYSPQsicmjyzdDCYQSE2ztd4Z4Snkc66LNBoyt8JtwyLjRWJvsexBMhbYTJMqvS4EfGZ6htW",
  "key32": "4x6pkJba14g9AYmsNZTLxMq14EJseZFxDMKrJyXCWUpDgf6xiYBGbjRoXWyKNGaVqbkW39mZ79P564qLhyKqfJBP",
  "key33": "2iTqQBZ3ZPY2gqh2TKTkFUD1xdLyUdf5FrLY9hnDdiVDMgtDCXZsx8Hr3qd92GpuZbqaSRAdDdLw3hVKNx44nxCA",
  "key34": "3FPrtmFEAbpbh2yD43Jocc7MbVHgjmGeREA5L3dA2cXmZTWpyS9udaQFeHYVEwnYAnyUG1GtS4DikZNqLpqgUMF6",
  "key35": "247g7YoS144PCFEt4SNUjDu9orGE7Zdx5hHpg4bBD5pYUw1aVLXcsBzxP14ommDac7ado2EmojUzkmdBcL7ZRzDT",
  "key36": "59JgDAxmxy49L5ysFcZDmaKT8BTVtGv91z25xEAuyr4Z59mxF6szp7WVkFpqiMnhK8EYXHbKWzYbGzxTivViGg9D",
  "key37": "5jd4tLg3Vkr4gu2PyJXpmpU19zsy11T6NH7nV9CbBLKxcnw28EWLRh8YYcMFmyaDRQMXHtMo2PH3td6zWwbso3zJ",
  "key38": "4vB9gGm87dGv4otyB7838rXue52iNbi12tVzNJmpC6hSyNLqWHtCEfbtJUChueoofEXnrhHdpZXNv8ytBAemcYjj"
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
