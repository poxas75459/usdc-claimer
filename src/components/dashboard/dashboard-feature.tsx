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
    "3UonBUMyW2tu8QwkQF1YyPrXsSNVkp8oRZFxav44oE2U64wL4S7ndKkHcwEp41fwTMs5wQJX7jxto6kr9eBNiJ5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpZkfkbHfTkrFYdy4fydBoM6AqqWfgpRh5kX6KEbpSX3GmJDT81iPfqQxRj9Qyb9XzBsQ2r5sSfmQxe9ZAtbjnW",
  "key1": "36hUP1Hzsw3LDKHGsBssk8aKVic4BDkcL52PyHa5yHJ8gE2NvVnGfh2U5xzdjqfHK8jNAAtZFbxtFNvLaonGggFF",
  "key2": "4SgDtxjb4hUTZCYptqryXHezfMuwsn4ZEdeV551mVBvVnuQpDWAN4iXxWVWcw1yeZVahyyxz6TrDMoiVFPuBLJb1",
  "key3": "3D7y1ATHR9cWuXVEDj5JGTJW2vUgSsStWTPpsR3xrq9UcHWXQSumhNUwTqBqggvGHRcmDZBcWdXSM3UNTLzTWVLY",
  "key4": "5i9PoWTNu564e3gUTppHFTLYJESRZhYA6qMkQqYqaawp7SbRBRzFA4PSJn4XV412QtRiutJxKpNYU7CRwH5JSXZH",
  "key5": "4TDwPw4u7Cyd7dhzvX3AAg5Jue4kfNMhfr5Sjd1vsAnk9iNfHxBQ84XMTyLbjDHuYLfzjTL7Aax8zo3Lrg3soZ3M",
  "key6": "xWC8Gv2e7R6f34vzQXDXkuXTkTx67XvVdP2DqJUqnpJcsKFYogqUPi2F6MZGt4Zy1soTCu5aHygSeFsFVaASgQz",
  "key7": "3wMG28nKRNdMx2WdzvS9x1HQgQBXomKvBgMxJqGJ5ScFGqJGNgK8npMtwWqQyswCvT8w7Q12pswGAou5bAVae7gJ",
  "key8": "GVCPqiLbNqCJjWb26ZumB4DcXX4uV5oEuc37hhfZtUfymAscVc8Qz3HAij5y4cxzwNMVQ6yiA8eZwQQp35ZAZA3",
  "key9": "4BQtEqsFTsfwkse5jHsKTJYyHXEQ8qXnRyKSpQUkMdz7Ex1EgDCs5ARCyyK6eUKngWeKRTTPzfNZLAFETSKHTUKB",
  "key10": "3y71GhsqUdDDXPpGkkYnYEZivh4yHEq4UvWSXF5361Fs7TVRVDnJiX7hQxCawJyhXvjMJsygwYTKyjFqh9jKM7CK",
  "key11": "4CRvoxPt63DGpiTd7ZcG5huamYopd3pT7wyDbTtdZDxmhiSGYomL7vxh87HM6chpiHf5EdqNg5ahwZFQArHwNkNn",
  "key12": "4HJjoykvvdummsmmmurHHMYrifCYmJ9jEZWwNT1N64SaAbuJpFBY5YWnCnVLKRAYq8ZY4FFp4QS2X4oTybJLzc8J",
  "key13": "nSporLAeZCEeioS4edHhHfR56AnZg9uwXbyENY3LziNwtrctjFzo3y8pC3zxyetZdxr6ooMeRLmQ5fEiex7vk5Q",
  "key14": "4FgqZdedMghxSenXBwxqSMp3zENPqZuj2aU3MWLg8JLghagJZSZCbRGNuderax1f3YianVfCjgejQ49mnWQWWjgc",
  "key15": "38EZyXzivu1zFuSz59W7M7UnDEWV88xy5zkKijXN8bdXyAVzK1rtcqFa2n3yGtdXvWUYZbzghhLrV3RH3e9cQwDK",
  "key16": "3Gyg5BMVqQt9eMqVrDrABXepmHaKqkm1msSADjFdd4RPxUKrGVugR6WS1QrzXXFhVVr4PdDwtkwK9kNdVZPseBTv",
  "key17": "2PAkXdFVEeNS8Bs5xLVyyzHF5TvjiEDwygAvLi8qQRBYurpzbi2RAjihAAbR8ExDSK1nWoGYGEqWpGvucnCbfmBy",
  "key18": "ah16Csg4cMQv19i3pYSFEcXh4vLDCxYFwR5T6wtUrYRfCsRJfAzhNamWQUssq6mxhkXaHN6NwaBjfY19B9d7KqH",
  "key19": "MVs9oqkTspv5CAcRbLWiYM48hWd8QdDV4nZ6LVSeWJ1JrwDpnbNAyiupA9Wrpv4hXrYdWpGkdg6s7gECoZL8Gk2",
  "key20": "4GNFfnnzLaWbte2dqC5kzi5UbRgpL8hLmMHzCLLwvkeFDtrDENYVYPjSew9qK7CmxxcNHaa1UrSR4ZuQDRvVJ4pQ",
  "key21": "fgL7y4MxmGi5G3jJR5VxwYTWprfFHLxBeT7Qy4aeaerFaeVcfBLpDyWre7Nvdn495NfMawxcgneVE6CSKXVBgtw",
  "key22": "3CHj9d1MPCSqyn6D2pGJf2TSsPZPcjjgZ4pejyJhThrHnguc4QuiqPue9jMx2RJQpmQCXzcPTbDNFhqJccRbsAJs",
  "key23": "2EpjAFWQh3n8GU3jwHKXyQCqqwmuyg3ajcMfzksLikiRJYT7RuvZHDiXiwYkV5j7yZ9DGbeBAeFfaUFVPt2Sh6At",
  "key24": "2kHLvNv4qqRYyVFkpLypXR4Ku5qPrqmwxu2JgF6aAYcUGDPTe27TmTt598A6c4TBMDfkF8XkKKPsVitK39J2geL4",
  "key25": "66TthqpTaSyiNe4pagSAQWpgdj1kKR65Arg63esK31xA7eDPFLSE4omd544WfyqixN4sEUzw9Jz9QZkSHbFJZBei",
  "key26": "564RhPjBbPu74Qbeqa9u9na853W8ke3t73fbtuYWr4EY9AMgwJZNQhUfHiQg5pdosrafJEgH2GdfQxTD42HtoiJz",
  "key27": "D1zfiJbgmqDzHP5jwmurJh2zhh2CGjoLxXmRF2mqwwVGv16Qcp4UUv3xxdgLKHcJzDDFGcPAfGEBdYwfVHJAfUs",
  "key28": "4aeYSqkXfucoz4ncSmRBPLVzZU1r2oNubXXJeGDu1rBitEpivGbpYehDQHkeuFHCvgTLkC1Upu9VtWHnGGEzDk9z",
  "key29": "MELJ5yPuFjQDuibTqCnLgsFwz5PWcJReCtooJEPUn7QhRXctv4VVG9FVfpSD3SVehpyQhUccRUTiUA1CcD6a3fs",
  "key30": "4PGytuNhx6yeDEjJsAb9ePbfzvoEg7sYzKe852MyQsgVL7EpGNGBXZ2aHEXrTNcJ9AP6UqRRkUigokpxnRq5Wjy9",
  "key31": "4tvuSi5k5TmKhxDMFKsHQb3QaxzgvhZ2CJr9ygyj3UevYKS3RSFXVwXXsnyt8DGNLTNe67Csa3h74qr73UNbtcNF",
  "key32": "PEbf599PgQqN63mDEno9pZdz2zWB8QXA3iE7jnzLi7jQKWNQoMpZNwoyc9Hm619uhumHRcMGGVACJLvozZnhhjY",
  "key33": "2C7Lwasqh8LvLzwosAJ2uLRULgSCGwaJbdQMP75rx2SvLnbLcniAmDHyGbauDsEqWV4nPiy31ss9N3KmvFa4zdDb",
  "key34": "3fhpVMN3ErfR3xx78ywbDhAcB2Q9hGgpkHYhBXSq1vr8YamsWy87ZrGKMPQqon8eXkfhxC1sy13XwgngRnZgqNgB",
  "key35": "3ayYpFiYy9NcQY4qp7N5aT3LZaJd9hZBMZMMwtKtn5fcsG5C7gvPm7st5hgzaKHXkAVWpWQesJSMBHez2L1doXtC",
  "key36": "t5WCbmjU7hgwfXbrtL5F3es7JjBETSkZMqU8S1Hg5dnCHMapdjDh12k39m5PzXYadMKkoyLuNmKGb3ZLMYbcDQo",
  "key37": "qQhzJywGVDRuWbBXKfC3cQ1ihAAb2epQacbCiHHnjh89PBG3qgeS2jfeF1cvDasqQ3bVei8u5xmK8caH2ZVVM3M",
  "key38": "2MmaJRHrDY7R7qhs6DsE8VEXLgugi2jdH4p8m44U9B9L75mjJVqLh9XSgSmtZdic79Q66GHuw58TNyxAKPLgBYRa",
  "key39": "4xfpqZsrvsmwxRXtKobptPkwqjjLjhZCE7i3V21qvBGA4DitCEJzcL1GFJkaxmb2R7s142KR87CWujktEg9FDgLk",
  "key40": "38aiDyJc5Qdv8dvYfwMHqGX9mprdbBMkdasacVCRS7B1ySSokBTg2NKBDEvTDVMt1zk6r2gy34CJDGYk9Z5zMYpR",
  "key41": "124S1nAZks5cTj3izPhvJv4o5hYjSEdtnRUQeBn5CaMkTCeoFG5ZS6imgrwP46gMPHL4bf6c5qoLTnJqQYbRaYBb",
  "key42": "2STKUbCURYiY7ACjqnrCSA4BJycJ5bbcaELHBH7ZTg12sDrg7bWULnPZCvh2MGjPxTcG73vDMicNcLj3cGm72y4u",
  "key43": "2DA8s8ddUzkYpV19bXjuTcdfw1Pzk5URfkas6zKsLk1GBybmNDw98xTEc1owhcC4VEJ6nvGi7froUro9ENX96RyT",
  "key44": "4rmuzqtCjZpU7T7JBXzccd8cpWBy4h91po6Ti7FZ9LSzjdDatZs32ww6UpD3rBBftFn37KM751YWdL1SDL4LVGb1",
  "key45": "3R1CMeMGhuNKBnbBs9YKJqanq34xwQBeCanoyzHKaidJzZswjVAyBasGStQK9m5FKyjMqhj3iMUTHEAQYfJLGLZy",
  "key46": "2tGeoq7UcwjFBTvP713AugEiLHFbcmbaVVqH5jddN6G6VZ3FUwhDEjSXrFAHa5pJatB892ZSZPbFHPG2mbV1VE26",
  "key47": "5ZSMGqrcNBtNvM6TVVp22WPJnMYn4fwyFmY1MQNaPCCA3XHFW5piQhAvkQesqZJzxRUkSASP4PgZGp9v1nfr4z2R",
  "key48": "4JnuhWp1UaCTpf89wDkuGXnSGuhEj7EigdXRiKLbJTKNpRoaNmfAFEDqpdeLZKKF4B7LMTMmLqDBdvmhZxYWKdgp"
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
