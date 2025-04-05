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
    "4eA6k4S2fH8gZjUs6sPRmG9A1Mtw6rG2vYEfjrXKCeuuzMQke96b6YEBWJLdBjWh9mpbS3894aJ6jLZAUHtMtXet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HmEvVct5ydtTcVYBLY5wcxaS1mhzDzu1Ng9Nfn2E2i4A8m6n7wi5Gw3oNzXfJUsi5WRJdawer7DXWBK8eFriwBh",
  "key1": "5cFxWhGuat89Y1AApZbw9cNVDxege5otw1FKbJAWSja2qAtgwpfxRCUQyKCFdd24JqDsPk4mxRsGLGbVzAhYHhq8",
  "key2": "5a9jYZ8SuToQkeudPAfhpMG5Kyit2t86yCtsE6bvSE78HpJMbthtTULEJAC31biXpd1eeX3HiWhZNQEHZiG4pNrn",
  "key3": "4VfkhAt2kYScg28AoqedouytVRB5XDGo63pqWj6sTjsWzo6bd34PLAHEqdy5yjjBuLo32zzBpPRUa5J7JuhZhLqX",
  "key4": "3yRyetWfnxNm92SzXcgbLAVm9Jxdcn1ideZEfdcZSKe78Yy5TvXk3faVgcwMzzxro33v8T5rusQhr4KcDHLSikKA",
  "key5": "iDiTv1b75FHkFUX2yTQdzxH53dh8diimMH1iEzPjX3LpMLegpFWDu6Jn99qCD58CZ5WTBZRkkXSmrN6Ly3RH76B",
  "key6": "4ySugfsJzq197DkHhtdL8fs1bTYYne9sJKQrkjVgoBpbmkaHJpoRSjBCptVRAFFeqQpYBG65M1jodAZqYB21i64x",
  "key7": "5LnvK1Arfmi86p9iqU62BeS7a7s8GAYztJXGnBBgw5xgEN6zW7yLWsWgaw4yQEenQqChnzqPcEjcEpEB4AgW2PpD",
  "key8": "5xkfVUWxzpBPk8mdTrFFdR8SfNymcaDr341P8BkMmuZNoMWQB4WCBGDHQTApEUnb659JzvUtxhYaY2nv3hpjUY6T",
  "key9": "5EJTnVWq5XuXSG7CWhA2qW4gEUpmdzEwcjgfURksgbBvSiuHtu63R9Yt5hnN732PFy6LhKNSUZwjGFh19axdojde",
  "key10": "3czj2xYztkfUUtwz7ZfHsgiZHYffYJ49CWPvrMXSSPB3U7f6P78YBkT8FxXh11j44RTQevGQPxLRPEiuuK7jeaEf",
  "key11": "3PyArvpnRkiQ38faCVpC7KtXan7KqjJKjw1zL2sMvUWduWAtiBANnK2hHeMe1s7BnK9cbCkrsVNaL7SguUWvUL6f",
  "key12": "4VfP3BqFCE191Q3rAsg23nBujHvFta77b74cp6ndr83J719qWqHFZLEUgx2qb3DhvwEdDHMFMgiQJUMvYHotu42y",
  "key13": "3BKL55PhAKTURdzX8SXz2HKC7UpF8TWUhFne7CjMGhhSc721j2xWXyQLpseWwEMarmVUSJ9wjn7K6eFsumXEW9cS",
  "key14": "3suXwHwjvjt2Nf218GvhSaWSvuGi2BMYmqFZHHxHiziFyP1AuXwpH7YJKPukhWFdxBmzqUEbRGnzR1f3LUibpmjy",
  "key15": "3XrB7ThH7H2zP76LgWaZ9UuP5f6iz9fC8VAqVsVtvBDa4o9zJECaTgYKUAzf4Jcvkj2QwysrbvU4CeANQM3yBUai",
  "key16": "2zCxRupoDQ9Fj9rXT5eYb9js1fqC3rtDUCb6kFL5eCoQ45Xp3VPFteDJ1jgp5H1FCMmRiLkmbP4tHGWgZ6J6DfPn",
  "key17": "3CHSPdGWtKSV5fG744KJJjCa78iGw1jK2zhtrUPWihsg8iEnfGE1UhhutH3epoCwdkG1fynPJyqKHfDDGDvXnqhc",
  "key18": "5EJp2PMPsRAUfxTzUYNczQopXK5wyi6M8RFeNJs9cf73FGtrXnEBHzPZetKFr2AZ7WGj59mz4UTgeHBZWrPZA67v",
  "key19": "3Ufor7bg5vnjUK1dekRAoGsYDwZzenqAnghYaYqNJNMKbLxBeYjkWdBFf9ujRsgGX3mosTv5upiuJh9mDHWTqLsv",
  "key20": "2D3LcuTy2mPirwsLQN9fjr7gXvEKGECgaNVNTsd3vUEA69RAg4vxDu7BqNupHZqwpu3TEAnSqsXPL62zkGDHEzBE",
  "key21": "64W7dmCgDq4wDb3LBiG3nH4bHp5CkbaftKvXoSNxWSVG3He8Tiznd76UDxVjeX6hmmzCeZKnwsBoSo98HfzXcyVH",
  "key22": "R33yhTfvmcMHNynXrUVzzMK6uSgYbs5yaJWwnhxTybLxSKqRUk9hcScXfwcapYtanWuuQCqLL19CrRgr7iJtmjR",
  "key23": "4AuJ6Jck6YMpZcpEgjdZU31orpd3eHmMrwEPiUubbXofyFQrCfBk2gfLq6EPCMKdZbyReWznosg8benpa1KyjzA1",
  "key24": "ZxN2PavDfunrv6GUBwKR6znHBAHxpzdixhgpwHH1SzFgMgYeZfoSmfXooQTtjWZ1zb4twvUJnscvtJgHwDnxWJY",
  "key25": "59ddRVhGdqv186AaQs5RvMMY4WJ38RDqqozGv5gVfCn1tEpws6a37qzLKWJUNubfbyLVm14kCKNJKL69zFRRRRvo",
  "key26": "2SkDbXq79WLgveeYn73icH8PcLRDt2ALiTgDJT3C5SgCoetPhL8CaAcgpc8HRAVhS3pKHyHVdrgRwL6Th4iCT8WY",
  "key27": "3ufdJnK5q1CsFpjHkpuhBV1WxQvJTzZdWo5rANZpRxsnbGqHu2NBmtmnXaGoYs2QBFbEwwX8YbbN1u43jtYorTk1",
  "key28": "5kZqGMLvtT37MwncrE2tpB3za1pmZ88egLnoqDm3nEkE1FuzdzMK3kYu8GCDwuw4rtaxdTgFC5i3PGTQZFB9CLA3",
  "key29": "5wm9hAwCstuz7CKXwqSEtKocj9W1GzicxsvXRneFwHqcoAh3p6DdggLerKtsFtjpw3yN9krA3696zB1g1gJPEwrP",
  "key30": "Y4KnUrZHb281JYtqvFt3z4t7KMjWMFSQKv5wktafHNhwG1drfL3LvcDWDVaLiKHuZ6EJZT22aNKp6bTej4GAAbV",
  "key31": "5wZLDZyTbd1uUXWMNj21iNsrNTFUfrg8pPqeqwmua37eLde6vbcNvCGLdz3xtBPN8PWRsFWSTipVRQgA3rCYUP1s",
  "key32": "tV3CpuxukxFHezk93smxLJLfkYcXZLjF1XsC84WhnRrTfzXnPPmCHCevpfD71mCYJ4vUdvUiPFeVjQWxtQKEEHh"
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
