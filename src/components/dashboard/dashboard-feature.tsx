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
    "4G3Gid6LSq7JE5wCg7MfyT2EQtvqHdo96W4Rv7Xrts3utmbEmiYRZ4eiGnbZmf3PvNbiAWGzJaAfPzvY32GPzUJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XgHhaiptcSwCrhoim6xgacEkKr6sz6EDyjSzvypvSiTYnefCTAfXfLYMEHQZhTCxARnGF7YUTb4TubZTVCC9cwn",
  "key1": "wxwRHRrkKDrzo4cDcGNqFMDtv5nDpWqwwVKSZK7EziqomcHx3sgA9jCNmCe9QtjgHDjVq8du1TMQScXDtpwsqoz",
  "key2": "2QnAN13gaEvAgkqbacgG4aizaw3h6nUru7Lh7T561N19ottjrAo7WdoYnRXzE8JyusMMzPGHjruqdKUeUEwgo35M",
  "key3": "561ctVYXfsr8d5qTBoHpTjTmUp8Pr5yz65SZSsHCm14D4Ktv8fSM3V3VbLdima5QzoR1NZV7JwBomPKJ6VL8V81F",
  "key4": "34G8z8Us5JGFLBcAYgCHJN4ZCKMdRf6c7Q4Ajxqtep3cMptpaiKrSe6stB4Mb5VKSNy8QsFuc1858GX4ukNJo8oC",
  "key5": "22PP119vDeuvoxRGix1GpZs94cXP7LGgUyo9gyA1q5aZp3t2xVeom26HAZbw8xCNyq9pbtBJKq5vkzPmTqMBSKc9",
  "key6": "5dBBnzYP9zuNNa9dPrxLuyL9XGjzQnCei2MnBi6VY3qm7wDn7iph1NSwpYYfGXg1ktKe25QpKL6EtqZULcvaRdTo",
  "key7": "4reVQdBjPzfb24DXS56oxKtSakE14wJNSuF5AtStdruNhvbL2XMZZcN8ghWDmHJC9wdxQaJEEgZ8PxJ2kFVZsBG1",
  "key8": "5mtYL47B7Bcs2i2JFfLUtHiemn3d5xM8JbvdBZ4df7UyMdBNirPK96S9kL4xru9WxwSgtCmj5i1VtjnfkBtRGVUh",
  "key9": "2tDEdTcHcWv9cURi6cHFQECwm4mPUWH3uUcmr89jxKNstc5j6csfjkSyijL5iCXT9bfAN3FtLQT19cxxMDSUTvJW",
  "key10": "42G68xDMjiq8CAYeEtpeFQx2369LjmayL9Yxvi7q32ZBqhSg7nZrjm7YU1QwsnCi773SNihyomV7LJ2ZWfvy4UaA",
  "key11": "E7KUYcQu83GCBTw9m3nd7vympu2Nz1BXGmuWgnhLaG6kQvwE1KaK4V5mQRwmG6pb421TABXA9Bos9AvXYnYUPfk",
  "key12": "2WCPcYcWWjbc15bmhRWr9rRqJpCYQJLpjwbTDBgnd2aXa6Z7Xm8vP4D69PZwJL4gdtF1bDZTr6HxL7SbyHaaMPSw",
  "key13": "KCyTLhBwM2VeHJv7F74R8z9tkutvfiwirEUHxcoQRq8UsPucea74hsHHQowqgTTd5WfRXZEtxCviDXGZLcyhvKY",
  "key14": "5mEQHQremk5GEPZvocv9Fe6oNkatk99Vq13K393AnzrmHH29CpcafY2mtPyMLzvW79ToPrZiNwMu6wuoJzcxmUwD",
  "key15": "62KEgEdFGGXa4bd5ifUfkwYigYCbGcC7PoywJFZWTvCaRT3XodztEaHGwGAHVneqFtMJLcRvqLDfQ7So48i2W72a",
  "key16": "4ePBGBit28kgMmLgtdz4UhiWaUrP4KDG9QTmUCHddYr2mLhvs9ZkG2kbzJiPkusMrv9sWWbCS4XskfUX8BevPFzt",
  "key17": "2PC5Mu3rKRdNo1jgQ7yW1xQNByccHgBrLMNUwsqMJh9UDjje59XTMyARmdhchRLeBmMyJ65nJAaooVxixzcwDnL",
  "key18": "2A9YfXD1c9WfjjhPKcAVw4wsHHFPKJ7StLHDAwiLAASxYJwMQJgL3tCXYTiTpRw2uAVFa6t5bCuP9SeGZZ3zqXpR",
  "key19": "25Ve2ZQ1Gfombky7crsigGDQedVkvvLCPmrpe1GKMeDjgS6mVSYAaVFcnAx3J1XfHfZXAN4yvL5n41oKVXH5DbRU",
  "key20": "53m9e1yZFht4hhDC1ZftADpe5nAAQr2JeqQq5mRcTzw6UdUkh7SXnWectjh6Mhh7XXs51ZFzjG3qWSS4FcYVq9iG",
  "key21": "eA6SwvRxf6zM31uqxMb1J9UJBzXzQmhhiA8i5KLuBY1ZyNNUEPzjGhv9G2Vd54bK9UKwc5nxdm1X4QBxgogLeGB",
  "key22": "i2bGGVGtgDX9etDxaUrLHgedm8NoXSq5g561fnbhhtnsqN9cDsCtLB6muj2KG2vbnykGoLT28iMu6ZBrE9Dfiqy",
  "key23": "4G1EEYUCDhUcTu6kdnoF3FwwSHdSmBjvCXHy9mPkfo71uu7vcEB13DP4cTST1tVpQZBchuPJ35gRnbsXhYs6xQFM",
  "key24": "3fYJWKN9w73gWfFXYGCTJ2uqxKgwQVybR3so6Fg6cWzq5jVFa1AkWbfk4ff2iztWoQZFGkDqTczVvz3wyKVe33Vg",
  "key25": "oufjdpY1xvW3dpsLvH59754LskcaPku9dP8bTAgUFpGqUPstndV8vmWDnpbCufUwmsmEBoti9eofo5kxKjJnuuF",
  "key26": "EqbHdkyr4YPCdK2z1UyDQi81c7Z2fTzhWGL4rpMVG3ttdTN659Cw51kdbXPxqPwftnkzHT3XYxayRsFhCCrJAKD",
  "key27": "4URqfFAhvJofYJ8CfC2pHqFGWU2gUoq7AFdfJcgsa5CETpUh2iRsuhXLWSVUyQ8QN9ueq455BVs96Kfrdu8buLBn",
  "key28": "5SaBPwKSbz4DdQxcMBr74NaCUytNiKxZmyAJzmmuqWMrBSW1Ps9HJaJdXfzhDSTPsLUxYvdkXSjRehmrzdnGCE24",
  "key29": "MmzTWkPKmPHTLY6fMudNia2NDqyvMBf9skdd8PnBFVXFqFzYsyic9g3sigeeQgEE65jSNipuDD87PW8Pw4YWiWu",
  "key30": "PTvvb5qF8K2dXd28z9wTBSa6MzR7wHYDSVpDbg1HSMwDMEWvKvJVdQNGJQP5yjoPERYTHuVZiHpQ1bUd87cxypy"
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
