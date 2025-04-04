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
    "3YubgiAHrFyToG2X1mqx1775ajcPeK5KQ7DC4eGpqy6mdRV7ADearQWqhGoQd8qZQD8VJgqtyJPeXUvh9xjZz9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7UGsoe9dU32eZnPP2QuMx9HVZB1N8QZnM3oeDPtG8kXfAm4MAUTv4MZ45g3o5jGnA6sP4bfenKbJRm2Rvpqq8V",
  "key1": "3A3161XNZfvrh13PZpfi6Ki9ME2YsSRoozCraAXEabFBptJJodZMp6AXEyBBY1Z832DCRnz76scFWphbhZv8DnQT",
  "key2": "5EfknihDdZA1Xw5zwHpekvLNXrC3rYtYJKY5VH9Y37RjofCwaHMjUH8WE9Dpmps1HAVhozdSjRCURNYcaJj78yyP",
  "key3": "4q2CCZYiK3yrXrsbDkBNZPLUxwew6hQaCNoH3F9crAXRDj8v2MF5itR9rRpzb8Yq7ntDqQ1TCTV96T4it7RB72Ue",
  "key4": "4cjf8Mg7f4nhZwcXEWys8VZHttjQbYASsULNhHuxtZauuHr4VjJvTK5ZJHMVkdZkt1mPm3KAbQ7EPHBZQcrazjbD",
  "key5": "5y6Tir1GSqwRj3Z3txfV9Ny8oBpGMaUgKvMNbYner9ApsYwuSZX9wKhpimGRRYVLwbXKmN33m95WntTyadJrhV39",
  "key6": "34xNMDwSaBDrW8HuXicKU9K15rmC5vYosgBBcsNAXXBBekL22sMaJRMpPxk5Gvr4yKfXH4hABUFP527usgUMvLE4",
  "key7": "hhrTsQUxbuMLuXZDfgBALi4cFksLyJvfXLnF5YnxhkeqtueDyMB3D6jbUZYBorWzz8aWGWscfzcLGPi6SRaMtXr",
  "key8": "4ZSfYhqKPD7xTairZAgBFUY7FAEfat7U48dPwgjHcpu58dCsAn7RPAfjookinS9rxeCKzpa2sCooHFhFYuntHKUA",
  "key9": "4N33TZySHuf9r7KnxvC272hJq2cLmCRtgXanq4aixaBVm9WZQetLbkm4dtW6Y9JaMKs8MYtX9FYtXBok9h4zsnCd",
  "key10": "3cHtgynbbD44emP5buUhaAKFjoENbK7fpHnpnmXSP2YzGj135HooiLaZdiMZDPVWifUH15c41a4E7DP4xgMZrwNV",
  "key11": "5Hbkro6f6wuDrbmWXAQm6TQUDRMt7b6KvUsWH6bj8M9cHfhXtNgQe1LsDLnjXxFACufSCWKnFkyATNcjaNg49gRB",
  "key12": "3WH3HcMvBnD7SqTZ4jpRt99xfCzua38bUuuRtC4EHz4mP3gHV8fgVe8aiw5GX5JQ4mSviXcKrMttSpMyDJQM58nn",
  "key13": "4WoitHoKZckbUBkqfL7oCieHQvL7r5yxwdBUY7Xx6KT485smUtJTeAZtj9U4eYe4SXNrA1zMiVwrLSZfrEyKzkGu",
  "key14": "4Pja4JuicMApagJaSNJ1W1MpSVVb3yVqCxndH5qNiZqxjQrkabuF4ELwiYu9sAaH8KQkSHxKRnNYj2ky2Ddh1haN",
  "key15": "41wveL3Gmge5xuD14pqV4zevzRnbJzrr4EJEZUUPnS37BR9k6orzkztmgiPkDhCcoVR5wWZGDgSx7DNJrE1UpB8q",
  "key16": "1uf3ze8FJoG5vQtWQrjPpbpeApjrc72u2JhTNf7r5J748NWQnKsGMnagjY1yVqi3XMv7ffgSxFPcBmgi8DFCuRE",
  "key17": "2QGxGnCstQwzb1o2ME64iFVDM4AK9fGeN5fd94siGAJ9JWp42NXmsgevUzPi5q9R5TcTQ6zvwxb4RXxieG9nD3nF",
  "key18": "2fu7ScTHPteQcgAdq3auhKQT2RKUp9hL1UcAojH7XD5p2bg38CBLSrbPdWpmzWhcLNUhJh2Qv3WfqR5Z4HjLruRM",
  "key19": "2kTwTRjDDhXwoRV3yCsivAiBkCnW7WNMM7kX2gwd8zrdDSTW2p832uuBpmotYo4crt856LiieMKADtf8neWmJ2Fc",
  "key20": "46xdpKCjjNra1VC5vjwxop39UDGKEAqvH42MMRHYSZ23LgfF3nbu65gg37Dsj7g1NSmMnfHMtfGHV1pm9tQc26i",
  "key21": "4e8fVcc34YuAiiKpBa1hs55fWxu9W4hfwZB81ssY7R8CVhS6j3Eu2KYSXYXEiy2VTssGKthhrNWTKztw6KSY1hUW",
  "key22": "3sptZcBSLAxibRjhrePm3DW3zmEGH6kdLEAYpfQcd3pcnTLfaEe9AYf4pi7KXhsWVg2yqecKotXk8uBRaH9Htq67",
  "key23": "5j81K1rYXh4mApuD5UV6QnrWRXdoM4ZtYS8ZuKjJWdqBPycSKncRUSHP8nXz2HCrtnuNrKNcm9pad7M9TTRveeyt",
  "key24": "2wbDJBEbapBYfWdCeV6EMdLyCgLsAXyhwFz6r9NN1yh65nUBFgCK19QJzVMVMiBqMabEZX5H2X94Rj5wzvyVUSnv",
  "key25": "3vhTRyoBz2nz1V8M2bRjQRZK1mypywsRu48TcCfgbeFLcLLRcEkhzDHQtLKuSUos5J6y7ErEj1xupT2SPbp1Mpxq",
  "key26": "1f2gvDDWfn93rpx8uWADXZhArk4MEDbWYV3Y998firidJDxBwk9JZta789XiDwWmWUHXgvTAPG67BvbW37nGgnM",
  "key27": "5Ayg3aFs2T1FpTiB1F4yXEHumFQUukGtAbkMbgvwq9RatFJcPwgGEp1Rt3rK527QuNiTPuT7jNdwdYnLCDv3qYTb",
  "key28": "4MZ5vr9kQMRej8qtWKY5y3Sq3C3goC28w8prBKiKiN55xkbwHuE8hVKp48peXYKZNFkJNHayTrtuTubDrvWHnBGR",
  "key29": "4RSoMh7MGhhNNzrtJCNxtmnhpBTtYntSGGaU39Gf1n7xDjn4ScXUcoNtoVFd1b7tLpTSFYnQ2F2EXUPU6vFQpd1x",
  "key30": "2J9F72UdQnr2qWeJiaxRxquJS3R1WJ8FRyHEyHiMGsZLTExXHBHw2bvt7TVNmgCxnPgob5tCXQJuondVWcwhZDuG",
  "key31": "3QtVtqr65q2Q82Pro99jVmhcoe9BDUCHKVspZSnFazYSh4SLBa3Z1B4zUCCHbwteNZgj18mb9xTBvKz4EX2WMMqw",
  "key32": "xMZ5vTdVnXDxmBoqhS4rmAxvbVPnUWavPoA2VGTsG5iEUsG4ritdRADH9y5B6JHx6Gn1GQySKPzcSfJp1V2CnjU",
  "key33": "4DuaMcFsBRjzSpYrESJi7wf3VfAhHa99qcmLL5VcYe8HzempxujDdo37DfBQCm9RrBQ14wC2L4u5sjUrXPVJvRZb",
  "key34": "4dpfDSnT4CdiuLS567G12jM9YBPYLFWRfARfts6ZvfxUsutkA59W5BqmnxuVzBrhQPRYscxtFGevuM8T95SNDE4y",
  "key35": "5rQe65R9TGJJaodyN74r7PPp4npMSghvbgmFfxprcc9srowZARhgL3actTCWq1CRrEDZWWJP8WfXHcm6aR2temaN",
  "key36": "46YXvQuvR16Y6SdF4TyL7MFuy9Z87m4zvtPkbaNLk6nheGD8DqynPXYcdRtqSugQJZN1t73NBZM79CbY899RQsZX"
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
