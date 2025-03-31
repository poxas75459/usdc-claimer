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
    "5mCpyckJdbFE4Wm25GvtZXT1UrtijuJP85Tk51jmiWMy8gdeBrbP4s37z3rZ5oLMkKYPUZkyiaSnC74zKuXf5mVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Upn4bdHNWmYp41JMiHUQCJu18cBkRGK7TsUcRnGtx8Y1E4WhMtYZ88WftXVL8F5tnrfLs18oLyZfZrqW9dpzey8",
  "key1": "5uzmjBF3CghDjdfe97HDygpwdxzr7tQQcgPvsCABqntkwagLM1Qr1mcTuZowMjimJ6XATayakSGMGmBmeJoVPDZz",
  "key2": "4DR8hReLP4u4cBWzT2P7P1chdBSXAndsN49E8XV5KGpfZUvinFcf8SzQZycEeTmVXBGjkrjjsdLNBuVHqyMwDPaV",
  "key3": "363i9uTM3xJJcdNmpgjaefZ6NaYapAqpp1vCUhwRx79YmPYnTSuQiHHCJiQZkb1H16M2qgKtGj1SEJRTKFAKVL4X",
  "key4": "4jupQmaQwfz76pK7swJ3ZvGN4ugNRqZKTf8EWXEpLoatnGqCuuPbCLsDdcRyytpsobZ44ddTT2jyeiCYGr81fSyC",
  "key5": "KhnR73HLSTL7dGrGge2C3ijRzr35Jd1QAjdVLbSj9HgaZSxPzsZ2YcUfUtYNMffahHc1RsM9PN5UYxCiESdD4js",
  "key6": "3CU12hoo7oBe5VbDezZhTQ1AFhpQTXNGw8pvWqWa31WNYpAzup9mJr9gZs7c6Zw452h5cazGQ55V7gE3LsNmEP57",
  "key7": "4x8yDpcGiF3r6dubNibTF7DVaeMnXoX7StSEATv5mex9Q7iGPWV8CKihRbHupyq7VopYGQkcEBsUrPcZXu47S3UX",
  "key8": "59hL3EbH1HLjMAKKW5qary7fUMs9gimjhEUKSzsxoft48jHNN23BTocvpPKgLCuqTUktPdLkrYNx5uh89WiUiXD5",
  "key9": "BdixPr1945iGoU23Kt4TVZC7r1WoBnVsmEqFX9RZbNVW5vsfS6Yxyo1DTmjkjgNqK24ewGiYJGyzdzfYeQT1LiW",
  "key10": "3V13bVpBgWW31fb2hZuzUfcus3McD4UQCj6QmSuueJiQf5vdr7JEppHHrDwN2JAgSb5QYziFxu9y3erXW82ab4iM",
  "key11": "BJj2XHYYrN1oCsxhbTcoky9L9bwHsiEynSjj3fXS42AYYckkaxv91iDupZPcbqB6APSFADrNXRBN6xznFQ9TgHn",
  "key12": "28tE2kdLny6rJSHzVudrRo4daEgnaDBSKzmJZ9EtTrsfLaSJ4r2n11RPGKvYSgEy7UNYJqrgxbmmvm8Xs4KaZDDY",
  "key13": "5YNHoA8PTHe3td8Dw9QzhxyM4xXT4LtyEkjNXufwJ4oYQwWCR1hPmx5r3D3qcNEDC17p5m7VQtYeetKKcnbCLDuG",
  "key14": "3QJJTtCCXaR7oiYPkx7UBP7nxMPq28Vj2DQW5h7SCQLrqsTAZhtfRJpgCsyyMXLPk6sJe5aHfxtKct2ccPQL2aQM",
  "key15": "4agx8TYyBHa6FyWxfH6kBEeGf1QUhChaXm5MsSoYWBa34T18mBh1j5mvzNFE2ETbq3VHXq3ZUTUJzJ7Sn2GTtiBK",
  "key16": "5VS7gEty1TewTx3akua6yrbyPUAtPX73RZgBfmAKMGSEe3eR8beuts7sdVvzwvTVmEpURvAREeSnNewFbWUKDS4o",
  "key17": "5ob6qY4hZ8eTLfE3CHf8cwHjyVLDcX4pWGunKEbiv7LADz23difgZUDzvYZxSZXZnT9MjVgvWQiq2J1EGdpTS8nk",
  "key18": "4aVz11ePbDNyvATBbXYNRb9dUgnSR1WC92XzmyJoBXVqYXH2KJNgnkhzddML8BHfbY4Kt4iUBDgEfDFdRF29u4Gr",
  "key19": "23byWP27YdUaepCgLzsvviXgLpWk9uXNCmBT1SySzvVi4gEkcXERk1kTPuPmGXqpu3FFuv7DkEAy6ANgtfHnato8",
  "key20": "t4UFYUvErzQgpsUM6oABiUB7bxTY7Wt7vtbNp4pjirusJJv4wRKABL7Sdk3nvnHYccJNDSJMRswEqCi7XtWyNkd",
  "key21": "T1zz872Uzect1XZmsXcpTsJzK6wFBTCeWekp74txj4aJgPQKmqJ9gMb4C4ysep64CQJwvr37EDiCLCRSQgvSf9c",
  "key22": "3et91jaUcbXDd4VVy1jik9Xd8ZKCnC8bP9qcfcvAsPenyw2gicepBLeSSaaHQENPNbtA9Qi1QM2399QXziLghDJs",
  "key23": "4SBs1JHj6GvdzUH9928PNKUj9CKM82fStYFjewaxZ1ruPxa4SM2bb8iLzcmPUWg3u123NkhDaosRFF5qGtxJAF4Z",
  "key24": "5GUUnbQgG1xG8rd1LmgCLLiqRM66y8WBtN2VgnNq5VNHgr2t4mPrUbdCo82rAVCy6w9XESVUTE9LQRrPQ4YZnVJK",
  "key25": "4hR6SizgEPSHJ4HPsquWNgk7ePxw55D3hxaeDkRaGtMnDUAowipVLvU2fnw6qYrQcHyex9qRBYQuKeGMqSeGBdDC",
  "key26": "PqEeiWqx3iVeBN9uQSR3PvrhJCbJoXYaT6RfuPVe3TrdERCBASwAphhsykom91dxdo4GstyDfbTj4wszcGVCqbp",
  "key27": "3ta4qgxXQbbwZivgebPTSTivuz3H8Ff4NZGfU5ZuEoVuqd4dog9JZg4j7kfw3Rcv8PBDjoyisi324FxsAzUBjTHi",
  "key28": "TQzy5HUGWyrnUHBDq9fw9NKTtqBRpZKQdqVk1aEFf6RMnL3TDzSwsHQrRLZ7epAFUttM4rd8ZTWaUd7Niqnz5ET",
  "key29": "58gycssXkjYGuVNf5oBUrbrCZSoZ2vHizmrf9qq3N7E5ecdCr9dA7wXg58m5kDFhPFAHougS3Q1XkhGin3Rg6K3P",
  "key30": "2YDA6bJSsVJVX134tnhksb45kGWqgLY18nSHwC8rq1URj8RZAoXdnAkCwgPpQCLTTdRQE9KKiXA5e6g7esAQeTx9",
  "key31": "5SEAgxGzHUu6DnHxvH1hwiAru5khv9hDyuDJYuiMpNrrV1B8QLdkRDe5S8kFj9ArheuaHVJeXDaxef29BPHhdtYC",
  "key32": "5ynZ9wfCecGvdEMTKu5s1L4BHbXFgoBUu1LkSZM81hMeEQmmbpZ138fUTMYPNMD7ZhgXgdRXj3SVYD5X13fA9S3e",
  "key33": "31TzGzxVHbMErcLpMVG8Wvb5PdCNAXKD213W7UXtYZTjD1oWxfChCpEthckPc8HggbyNyPbmPz9NASHBXWstR5VL",
  "key34": "3Q2KPMHYZ4UkJAxL6eP6gei3UtCo5jYPx8XqoRrobtWGkyjkunMYMg1j9xeLzLw7h5am5mwnjx243bS8q3AbQgaq",
  "key35": "MudQ5srAkhdDWSStBmQmGM4dB41puwC7bmi8LxJvuxim9NAbeQaFHqzkfYfXWBHVdwV3bfqKwEwL9ZoCwhSishG",
  "key36": "5RYSj8AdtPn1PtzbcKVch79dKTpny7cK1H22JwxA2SJjXsZ3xmyWqgq2LtZcZNm9Xy7yhje6ExNHZM2nRmx4Ky69",
  "key37": "5okFq3yzgVJgy4byN22Ju18giatqQmXGA6e9TXi1uF76ojQWkAse63tq8YNHASGQ4ftofSNRcwQqqEwcQmtnYeQ7",
  "key38": "2keV46SEksmwfufggFTEotPjrQA1qq6iv3xrASprphDb7qzaF5VJ4cPqVT6n6FMdnJr3So3LwCahRsfzAMRXVvCS"
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
