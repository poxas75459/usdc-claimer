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
    "3d9HmsdxQpeuCnzXUG9fDJU6fEhMTwjiR3LWGfLyGBZj5s6z2PxmxXbR6XxhtNHG7S6nKz6HNbXHMAo5wKvDgTQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwxZ2jGkiHiqtU7YRLyrDmFnn92GFW8pEL8JbvDMT814A3nm5NcC7hNPgxj2ktSp9z5jNmy2WzWo7S71qPYAvir",
  "key1": "4aqYhzskovo2npznJk8cc5tPMrscKPyGFzpi81nremHREqJgkca17cQfn9pc6PuYatMrxrxR36wJv5AHaXLDVyQY",
  "key2": "4PxV1ZY4mix5uiqwMyo7RiKeCeDgGz5MhKCQbpfmD43uchs6B3mgn8G3pahCuHwyi6tQNFuxLxRPyaBs2s5zJESR",
  "key3": "41k8kgEYUpX8rHoYL92brXciDicVyXdDq39zLshxV7TDG2eeQ3Y7bAG9WcMr6qcFzH2oNQ87U5VDtf7ew4CbvkY5",
  "key4": "5uvvxpb2ykknH92qHS1Bk2eXczr9JXYwbGdnZf9nvn4EQDBWMB7xpXwfCmU1dP3xxCEVbrwGNWQtjFSXcWA8fgtp",
  "key5": "2eNQqodf6e3QtM9E44Jt7BD2mpjCNZjV8kG1cfJBrqhj8hCjHSHymULFpZE7ktaShBTEUFLM1VWSSxyUCnHnmc1M",
  "key6": "3Y7cfbbLuCP3H7F2z84jZHZvkXjzjLoVzVtYZzd9Y4Hf7whVdm2xusXsXc9VpqAuvF5mA2z1QRnPkuAPXWGifJKd",
  "key7": "2y5T9wCvuDtCgPoAJ9HWYGFvPJYWsb9Di9RPAiddphQEk8aXawVy1uEEz6fJCj23dUEXxKCqTa9asHMVtPeC5UEL",
  "key8": "5qQwfk1QydtfaKcyx7qSMx8rfy9qpEVv6JiLQsQ3EGwcvBrdbcvFbAXLhvPCmQtpnEYo1DiXXXyCFDSgVph5sg27",
  "key9": "2WumS16fMfeqDN57KXQjga8NQRrCfSVthvpyPtHh4jpaVX8rzbABuRKqnJVSRH6cwwnWgqCdtADCrfLSwLLpCFPd",
  "key10": "YcAgjGwft1zUNWA9b3R6kBfiNR2hGPsJw7MuQV2rZyyEoBRJHz7oE5PUeabdkM3t6kCBgzjKpRRP3k8o9G3LLVL",
  "key11": "2TUavgL4KgUqYPrZViNkUfg5pbxdk29jgF3ZCC3zL1XaxY764cBX49WRZZTs522V75wMRKG8Cxt7QKtdaHGmoxh5",
  "key12": "355KV3qbnpxVJhaHq3fMbFHAwiKErJewCTQAQn16ySoFWAp4EqdEnk5qmCy7i9kjFmAVHLd9BUTC7iow1Z7TnyBZ",
  "key13": "5BhtKT9vqssgXA5EPx7yTsXXx71KECzag2oGYBxeqo2Wftc8uDuHYqcAEypoUBMFri9SzwJkSZ6EugUVePxBftG1",
  "key14": "3NssKjuFyM3k6rVpTRZcprLh2JR9t3T3dZKTv476zahZvgWorghoerFz9wr5rpaUYXJTkhV6znDt4hb7NwPjBcUk",
  "key15": "5rtkrE6PRerMZvJwh5w1KQYVS4i5QG5cdPiFF9VsLggeqZuQzFbgqU8j4FPhioWHTU9JxZktm9FRyTr8bo1WV3fW",
  "key16": "5zkfbj3hPdLSiZ3GuuN3yAjQQkcnHaWomfF1ju5tRtzp4qtnL39SQUgcajXeAMbEE34sEKkYifyPAeSB8P5xj3Xv",
  "key17": "62kQimXd4kbMgqWXdqVyqNMjkEN2fvvdG1wnNwn1F8HtruR8XrGbgqo1zNFxpT8HJtXJRv9Y43UM7snW56VVQSb6",
  "key18": "2zvzTVw5mY7Lzz5ncBx7TSCzAQZWfAQtTe1E5ZPWrybFs8NkxLtd4zQ6tY5CzSsDUtb4BTRx7W1Z15onQymCXuiK",
  "key19": "5B1JqX3kc4kHGCQVwfo7CmffMhGXVApDuPEAVbZX7bSSJ1JTL3vipdzeGKAbqxVofZSRJPd4BBtT4siPjZUdpFUR",
  "key20": "tqjVJNXa2dFCaMMpurZ3KmcVUfaEwygL9xR6mjQQd89gF56XX6cjDXnNbJ5FeLp2tckZ95s42PtbdAPgYFfJ5hp",
  "key21": "cXkJvFCy1w6ZC2EP9GXAySsrMLwcNB9RoMvsA3ubQFVoyjhAxkeUc4tQP9GVrD5gyUVnYKLqXsuFQp79PwB1YSW",
  "key22": "3vqZkhFJW8fFsCBCvHscat7HCWZ7wkEVeQ8Ba6Te6puZULieXRbPX3UhsqVYLeCMChVuNtNLTQGowEYvEjHLXX9A",
  "key23": "2d7reVmK6a3sYMWaNvomRzF7Qfg23vVtsmqi58sLTiE8xYpAdZaXxV7aB743duQ6r7ZjmEeyzLEUC7Kg2scbqBan",
  "key24": "gJeXJyYEzrdVCC6mPp7v2d4kFssLLVfPX3D5Qn7w1tiVEjMtyH2JvQ471xHMhQ5ZHb5VoxGjtX3UbevKFVySvFq",
  "key25": "43wMcD842eNf13Vkh8RwixYud2eJY8ieTm3ANrkfWDyxtiFvu4PWGNTTatFo3iDi1TPMc4CSaYai4pmbVWdNjiZr",
  "key26": "AEBcRBhT8NBT3zKzZvGzxMG9ZBuRdLekfgoKcdkFCaXoxcmRCTwRW1g57dsdvzLSKwaoxnAwuVyYN1hTwzUZHas",
  "key27": "2RpcLvEu2pJpdoYr1xaUHKZME4GT57YBMnXc2cgTkqYHQtoq14o64GKKyZo2YHukoBa983eT9g3DWjdCap7FG4eP",
  "key28": "THoGX68z8v6ieia3K41YX6o6BVXwi1CDH6oLzHcCCEqFgsynCc2aZ6HY5FRU9LtCmggqFniBFYhpD5MSxrAvXW7",
  "key29": "H8tcSgfrk9rHwArbjoW534jkweLjGX99ZbGMCTGaQ2fhTE57ChwV4KAYRJyLpLw37AyqMf3AP2hYDewCtmVzzek",
  "key30": "2gDEErVA6VD4sPA7rV9832pzSftTJacDmHNJMqKivDi7pxHToLHjwEVFrKqA1UtsinCAFhrK7XMEkk4JzQoefpFm",
  "key31": "38Tw9zTj4K4FWfQidN26h9dfhu2BoCkbJZA98EEHkQe3Cz2vfP9knGf9vsb8AGo67CtyuvXT6KcSDRCnCvnivsCW",
  "key32": "2ugt6yJvN3G53uDghjpmFri9Ys9yWPHUHoJydCfvWNbWcp4QjYQ2WMTvhjX2yb4db1rZ7pTjihLMBBcnesuacRNY",
  "key33": "5f4CFeEg2gs4S41AUfRx1B4X92wprsR82EaRMHPBLVenzCTNTHxxfomQwBJeDgJtJnPpEn37Ju6BJED6PsvCNowE",
  "key34": "48EJMuddN3MHLNVTRdWSUugD1zHjew72N9dUajTgRzRpsU1VuHJKisoNHVe3Qxvb9EccmqfuCavrE39x3p3PGGtV",
  "key35": "4ZcrT5if9U3jkN7NDCjULGzrTHUuGu7wEoaLP3NfXqUZa4cLEDdijFg1g2GLn8w84hVc4gawxcvbZFEyxwYx6ERR",
  "key36": "4gGXrzfugkzRfEVrjDZm9k5bsTicwkTqK2n1YVKtCd7EEfkfZ91q39qzsFmBiyU5iPRbbo9Tc8g9mkbbxKy9uCwP",
  "key37": "3uckSMkMBac984TH4oTefnJL1oGs3Xg3yU533wQDYxWhuBWWJ89TxFw7ca7pviFYs3Sno1qfaEG4dbo6ZwCsPbk"
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
