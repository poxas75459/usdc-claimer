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
    "5wRaSpFUyE37zJ5UTDvThMd4gHaAtyQiPGsciYMgGTdrd9EAELKqo8oveLAmwVCLuVBfNXfgxr3Vd4qhVycnb5TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxzdY7rtAp5pH6MtHLqt1cggKi7E7bzDsdVLcLiJ2zgUehgJNqSYiVm37wEhp1w37VPbrN3gq5K9kyNrJhw4Bzw",
  "key1": "XCBgQaM1KDK4xMTXdBb5Z1JHKbU3ucWGQ9cEmK8Fh2aRMEu4Z5pDeNkCQJdNQTxWwDv3hdQ6Yyj3Cqs3jsT1xgN",
  "key2": "2orcs9K8iXzWzHbCnhdGTWVD7rQHVKBWmgBagLdp95wfkdyK6pW7hFJ9v9Bahdeah5a4U76SWKnsExwb4JNSSDi9",
  "key3": "4Ueh16T4VY7bR26Ro24poF34nDsZJLd1UNEMsRP7axo3TMyGADyun84WZWLib65cbeqF3AqRTYWhBxa7JHNaKa8E",
  "key4": "497jjXYA6kryxEVVjyT8cnSWqUv3yngjgWtqrQafi8KbdYFtecvRCAWsApjxar9AAh5psgcrMVR9ZJGRRfxNyfqE",
  "key5": "4WeMG8sggz3Y7f4xcJfY2tKsNy61o2ScVXdmhJkgyTFgTbpLXw2jkSTr2dm5WqSSMhkv9V82WCZCb3Hy2T9We5JB",
  "key6": "5UZGn9a5AbG8SQStz2VBJb1xWLaKNaR5W4dFGs8QfBLzGXkaVsmaXqHXtPqxZ3T7T8bifmoQsR8g93VaXCpWpRrS",
  "key7": "5croTHup9jtY9W9SyhGdG9EAMj4Rkbr9f8jUZerRzRockLfbJ4dKd4miEuFALYXh7NxSWdat1NYCgd5vmYd2i9bQ",
  "key8": "3yM1fTfmGUZkFpMJ1gz9Kf3pcJCLe239zgXai8vaBwwcjZKUjD4xwYf8KbtCNo3YBGPSCHEVFbULdrPkrU414mN",
  "key9": "xB5GsfhUEZL6vBhGfzuZQonU4xcHnQkdpg4CWvu2LxobgAJrCD2zKR4MKUV6cDkgYwjEWa9Ex1eQdc8nsKUN1QQ",
  "key10": "4A7MQf81SLCeZtMDRKpCPD3rwtfaHf58SZr8xcpBEJoykF9NtBbEZ2CiQRj8dS53ZAcHv3NUz66SkEKKQZQ87xYY",
  "key11": "v276hVCCpYS7L5yq5Rk5P7YEDbLhbRZuHmMCJKK6eLN9VkjzPoPBx92Haw6rvD3PeprxuaNLcRpTHYjE1D3JJ5v",
  "key12": "4xJbadGfjUFxGaGadjMTH2mAqvNvf3b3Ya3VNrD26B3sDBanj7tgFknoXW9T9C5eLPwhkqigF9YhQrmkNyZu1Ws2",
  "key13": "5xJP2LHnSm6Z2AwywZn3G8GsArkN26J21jXyGYBFK4zq88mQrBf9FLWeQESnZMNc83sZ6a4J4NBNnBwRHAG3Xk1a",
  "key14": "51kxxKVRVMW9urkHBieGXw95o51FaXPCP3fih6wkmfrarSWYnDftEGotXL6rniaZhaMtAbxCEXvyJBD2C6DXaqDk",
  "key15": "4o7kHnmtEqRuADk3jz5kumyZpMeTUi3nM7yYRPcoPAdwarTHgbhupePTSn5C5AKxaTnc1ZWgTGB89psfZJNg4x52",
  "key16": "Gc6qkWFzaGG6d1x9HKczjXVYVo3rLydtxds19XtXCtdFZUFZcxgyDdd7cTDAqiZ6DNVKcUd8X1RQuYCBDa89AEd",
  "key17": "5vsBWvY4dnxtJpMSuhKDSGyw2LxiuqYn9Mu2ryFyvVupc1gdMKwDihQydD99wxjseZFeSNpntTxUpN34Z6pgBMLN",
  "key18": "S79byTa2efP9SV8Cbg3mKdsNGCzamg8D6yG7QVn6UeosbCLsDfpqw7MUXz9MHTSnjAAv6VyVw5iWpi3Mzw1YRSL",
  "key19": "5pcGumRJZ7tNtqtD1STnsYJRRfbBHPAvzh3xNeGLLVepKDULgQjgUmpWLJiWoNTjwFPqDL9a4ihuh1iwc7araAPy",
  "key20": "5XCPKGuD3ed3MJXJsvKSsZoFBpvokkusbj8qDwfgjaViWe5sRvA6jxbyX3HmX9iBctMKRj73NrSV8ngDpFNrB1ec",
  "key21": "5Scr4vFdvn4MBjqRLPw97pPNXj2JAETsSw9GYUPiE4RYm9zkcUKMB52y9fdbSHQiLLDVhUDNep9sdec3BRPwKHtJ",
  "key22": "4qwM4fECWfwi3hiKHcJEZfLwyks9MvTeoKS2qHAFuuKqs7aiqGE2ZrE9fJwYsxRiiedKV4mQe73HxDPPKpAmGF7s",
  "key23": "32SjW4hEdPxjsSBoSL7Qh11Vdxb3mZ76s3CeEjQKKyqEhQAK2a55u92MYorXc3ve4Qg9xiLQp7WsDNtThawnBPjX",
  "key24": "5TZAoYzv41yJMnCmAeL12kK6g1J3CkuWjJE4eygaueHxesqZitnaxRZt9ERn6GHJR2xnAhGvyPwu89S5bp2q8Siu",
  "key25": "5cr6JcL5VyfPM4vv16eQkMZMaLsqXMbMYyGmbsmVHQco4ro4WH9Z1Lgm2xFNdZC4RYJdJfCZwcG7XNUSGkP2p5As",
  "key26": "58vMqjrMM9iZxJbqn5uN8caL5Svi6dzusUWys95ExdJvuBgmd2tCX14maGPuDZB2c1ZHe8buiE7hPxJAFJspod4j",
  "key27": "3Tpndt99Qtee6dVgxdBACcWtN3g4z4Lza8q36JQsKQCoMJoKku8ek3xV4Yph3GLxKMb29DCv5dRHdp3pVL3R5178",
  "key28": "3HD3To6wYdb3M6j7n9VLmfBtprMgzSDbn3nP2d3pKqPpmBot5JYJU6vmLTuQsVEFMN8MVowU99pU12gFKszUgCBY",
  "key29": "4Cp6Q9jJ3q5j7LFn9NTPujgFJsDgX75Fc7tgtyd1CScbdnRaeHMQrNUypo7Zp1VbdabaoChChJMdpGmi6S5taAzp"
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
