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
    "5Bk5WsRUEP1B6Di6M7FhQsGcsn8mNSWZx4K9V4yKAvFTfHF1jPekz8ndKY748F68fDctcDoh6GAq4K1pbXyLW4qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UVzUii1oqLv9MMD4pyzjcR54sv38NHh68muF27t7xF8BW4v57gXoWgp9dJnRbYboiVFh5W1BMHHDuSQcts14oB9",
  "key1": "uHMyUFVLTAGk8HKeYeptggcizu7W9T3saNMN6UUmpg4vSqKer9s4dccpBJURHnouVBuvusSaJUea4XmmxXpq5EC",
  "key2": "2LzwtN5TtyD34ZH3eJQYPJWbnU7gTtV4vdiJNvEiNuJ6ubUP3ttrQZfwqxuKkpcg6PE3hn66288smTvG5b8n7p2q",
  "key3": "3RBNtSDXaJ9ETR2uXLJyNLvvGXkqBx8KdCnXLwriVSQuLLLpST3h1aMn5Ar1Br1PnM82qkXmSDBYq9dhtCrrLgzX",
  "key4": "5BEzKCqcqjAZZGJTFZdTA3yzLwPZJWhGFWBwWSQEzMsNJyJQCvSRVbSYoJEt2pTRip5d88Ag9dtbg72CkUfxfx1M",
  "key5": "2f4yQxFJGf4nbjKGNdXH4oN6E63cCKdMwXwKXW1S6WfzDVQMFTKBQf64fpHMV6tuGCaG1PTXr4P4H6CasuPNrXxw",
  "key6": "2z5HXjXRomUn6et1cgd7z2RCJ45bnJbZHS1aBtPEkxXuD4nK5wAM1i6Mb7QkMw6Nx1grwknrUYiEfgXfXCarzF4E",
  "key7": "62yypE5tJWfAdQ41z8o1v4yk3LgtZmV8afzJ8Vvf6oHtrzvFEmLKsmgBxR8gYKmDCicjm6LW7dJNK7rxDCewtP8x",
  "key8": "29Svy2ut419qWqx7xhFKvS39RoVcGVEysSza61ZxYy5t1qqrUPbX38RviojGtVTrFmh8cBNQyi6daHfZk4Q45waW",
  "key9": "3BYikYc7bycHXzVFGqy9NAb1aPCqNDmT9mFRcRbV9zeDBUZwScGCVNvcfhzGRJxjVZQhYjChMowWBPF3YPe3BH8Y",
  "key10": "3DpkFikmhZCsBSsaVrD5tz9qqdH3UdiJ1jwAFHxgtV6Mem97HRYDtVYQP6h6g7aRLvrbY5B4sHv2u5GV42XnHiVc",
  "key11": "49EhhHfii66pAA2SaxFRHyEYwSjayj41aSURniEBQuLG9NcGBq3EXSK95EpM4fWptBP1dEFXFuCcmghJpDjwX2zg",
  "key12": "4MEtXiazKqGGBJJk78RWFjrA7ZZd1gEpkFyA5fV9iAZh5x4xSFJKdDgaoUNzTRnhhp1YtF15u5v75H1hU8b9XJKd",
  "key13": "4gSMb1PM8JQ6KBfxM4M6eH2t6yC4eR8DBAK31mCtnPkkWF7VMHrM9sVs7r4MW97an1RZWveCFm2BdmRU2EsLS2do",
  "key14": "56zFnJjiePzsoAf4q2F3jmWuWcpPeZWQTVxDWr3vDXhQP1Bo8SfEqPvTaUUNyax2Huze2VdzDaFmiVXTSouo9pD",
  "key15": "2TmSAuhQSYDAkEHhBPXQXiJFBqL5BbBmjCywKKkgPxDeLLtX7wnB5nVxf2tW4jFuT1ggPJjgaTQHe2wDwACaCDRo",
  "key16": "5rQujjjg5AbWY6qaG9yDw9RVv7mb9peBR1Wdpea7oakUQ7DJki5mVpCjkpfwj5xGK7xz2J9RfvAqQFLKWWpMznb4",
  "key17": "1sAYXC5B2QmakHoBPWrp1hrv4HpDvreFtcfBeszevipLrfTBMCRvhuvU31SQDrMLVCdAMaoYjNncEdpLwXTPG1X",
  "key18": "4aPxMziXLdKpd4Pvth3LyszUPaSgshEgzrdGvoVo14fFCnZ2tcYbYADxUdUYtt5vCzToVrQKquVDHwZxXWgxLGUz",
  "key19": "2xgEFZCDBLtKcRxE59CtfRVL3Dq4wzXQeaADgUD19mTewX3r6oE2SJ4SVyEfZ5HvssmWUahXWu9oumaDrcLrjzrm",
  "key20": "27dDfko4eTpJgUpchoULrbXc58bvj7MsjeR6mbfoBnLsQeqEo2fvz8GZb6cZtjcaAkHtdAtGGpXkggSharwh4WE8",
  "key21": "2vW4Uuw4pqdnvFPTNGYkp1VTdxoLoBVxpqFoiSYrNPi2RkVNbnPyQMPs1ww2dEam8oP7G5spvXissCmPvwdCTwta",
  "key22": "4z4tFeCGwPCDWgJXYJtBa6ZjGumDeEuyZ7f3r5ca4YQU7T2n8Mb4tbWxcH1TochmCnfbg17Vo8JBDczJAKyCaU4r",
  "key23": "U4kDL3cZsURkiEq2zq1DMKs44o74cCQUGQ8RbJXhnwQxWWdSNgVC8uWUGL2J42FJL7AR3mH74FsU3EhdZXDRXLd",
  "key24": "5NtwjjBEFE5s6gdo8gHq6d7xVxnJefFHUWp2D7bz2CnyN3GkEo7ERhyuGUmfyFJXJsABpNs3tSFJ1ketB8UZvpRU",
  "key25": "2VGMHa9vSmqRziezppTv8NUXVFcHn5G4b4wCNAW72vfvM6rJg7GEiRtH9pBvC8RTWDrgHj85xc3WqFFqGhTQBXzc",
  "key26": "2o9LRKpTLx2rtqCDPR4JqXdcH48rT7j4k3HFPAZQxkoeu1Yfvx9uciVF6Dj4VyMZK8eybdjvbYiEe18cn4GtYWWZ",
  "key27": "xxLADXxTy2L7P25nyNZ1xTB8bXoNdKJeDBGCASrzHq1hEWTAYNgseR261cr5iooScCEYbLwvPcAcemduQ34A6LV",
  "key28": "2REh52FpdvXEn79L8y8EUEikwgt42eVMPiC71TnTkVsJijf6WS7rYfsepTjBKTuf3MV7iGELPyED65G7j19A3pR5",
  "key29": "ZvaxFqD5oShfsp9zxgK5248PtkmcJsauJvrzXhBbLJBSYX9NWjoJ3rpcKwZ9raWZPMSB9VTaLbwzzPdDPMVQRQR",
  "key30": "4ryt7WfbiRCbLcG4zMLg2WpfkkaR2Hqa3bZ9QkBgFemczggQ9jF3ZHCjoPsJJrd2ZTq4j6mVWAdtUrcswtYTwnkd",
  "key31": "3mYnAVRE6tGoVaDAecwGfk69XXyfjPAr4yfeNFSBsLQobe13r54JxAb1Sdh5B8cyrvywUypgFseHhgUz5fVF5gdr",
  "key32": "2ZPBFucFEWPnqct5nCJvjv8yNm2e688DuDbFVApcd7znXkn4NWcEXUN4Q3oToDpqZZLSaGP9CmykbNY23Zf4pUwM",
  "key33": "2BBs7v5PekJi31BFGYoj9a6SngqBMf2jb3TEr8wQimUn3Z8QNEEcPEmoyYsqeGNWwoTuunHXo83uPH2ULip2vo4B",
  "key34": "3LijwPdSDKTiegz8AGw4XJFJdJHCY9fBd6Jr8osWeGb2aRCRVhKFEcPfTn9Sw2DAeHsZRhKTBjKKp2BJxw7vwPmD",
  "key35": "3MX2kFpUjEo1XhEyykh5zffT56iXMEFV11EpoXJzQPygUMFd92M29EHeYeqfkxfHd9u1A5QykvNqvttL7d94CGkQ",
  "key36": "5ggEEVBCnLd64d1vz6kgdqB57z9PcrkQHrZqusYc4y6enGWCKJU1QZ1aBgwa5EnYUNijTKjgDywWztQdCvydK1co",
  "key37": "3qRTfTqCs27rAkHsaEnhkn3jFDfjTdBTZDxcRfosZkyT2wbHcmEzcHptEbtWxws6dcCf7woU2VJSyykQN2xYq6bW",
  "key38": "47fJnzwyQVN33RRuEQsvg1P8GBu3sFS1Z78KhTyP1AKdBQULwJkhJ4tTGQttkM2gTCU4EHzWsrpB1tzb8X1rJ9NY",
  "key39": "42ve2fzDLFotfv7eCEQJTSr5N2x811pcwwxbJXoYPmFcfSRP3L14nTapD1B9McvZcomJ4zZJdVWdmePATMc9rfdc",
  "key40": "sLib5k3LEn7ou1xFx4mw6LqXn5A5Gzs2to8PKgH6XS3Nu9z1YwTDXo1dztCjxqKaS96D2bEVBuLQKQrhWQPtmNi"
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
