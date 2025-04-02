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
    "4C1uWPB71gHNfXyFXqMy6k6GoAvDZqwicwjfojxpzFXhVM5e7B8QQ23RmGjv7D7BRs9JQaQThbfX3y61se9Viryb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmv2f5ngcCEvTmro1aZfHKBrEP2ALzysYqvfdXgxYQDEpYwr6wJDVHdxhqkYGcPMDjGguRKxwa4nwvdAEqLpVT3",
  "key1": "tnwcag4yZLpxdurbVf51xBBCffc5UZDsAKqAmCCd2hC9pjqunGjtLVf25nhVtw4mkr3RFxN21hthT9gmQ4SKtf8",
  "key2": "3Qs4KtVpybhubDVM7RXdDWmUAnfRgQiBqtZRV11dJQ4mQzxVM45vccRZKB93vLe9L3Ah7zg1Xj7TYBWjAo1LQNpq",
  "key3": "57qdvD4CnqYL8Nx9mwq5wRGk4qyhGYBLYfjyvmtoHqJHTfmJ5LHgRxpFVSEKj588sYu7jLZbntwa4ces94Hs72jB",
  "key4": "4H5u9DNNQmAc8bfgyuiqpwe3a1aRaQ1ar415VyXAmrbwRRk9UeugymdEnLPw7YxEPUKKzzSQMzBrdm2pF4LEB3Bv",
  "key5": "4vbrJ4m9spsZikPLwyLXmLqHaxacTsi8LZuWciCrnk4FzvxcbaJWQzF2a3NQCHi1FRSu2AjERVJQgSQwRZ4pRm8k",
  "key6": "3gPsvYSuXZ3NBR4QBTeUAYoySwdVRMzdj12XnFN56L9L5NX9W1MNZyBsVvFJ2DcgDPjW2pMZVpMAGn6oZCKgkKR2",
  "key7": "3RXHnRvSFEBvocpv6y8tab6qKJ9HbWashXfJbbHQPx5tAXg3hrAufohBGX8bx2ef9pxDLXUDgBbpwgfrKBKMtjqP",
  "key8": "5rNg3uBxe5PUKQp9YVPEJiqfF6xuxdWJrDTvZocdptqDsbPmjT3HwHmSx4gwt7zPPkYgUd1N5wgZpwyg3T4SRLVS",
  "key9": "2e2pZj8hkDw6nUexTWYpsqGEp1qhPMu5dVPetUJ6PT4uhoS6PPEtvRfnAG5nUjDjxjbHKhAWuxwtREzfvQXuStX5",
  "key10": "5TENpDzVdL6Uk16gcenKKuLb9dnyeUxZt6GSW3WbWrfHErGUeBuvMpwfxb3Z9kGQGfcCFc66vikWX7LB5XNT1zFD",
  "key11": "2JN7GPq33kCo6bV6t5YHVjAVKUhMbLLihCkxH5rx9s88Q5mdK6FPw4Q9CMGaVipJH8yi94as7qQPs9AFj2tng6VM",
  "key12": "3yCW9dC61pfyrMims6iEktk7p7BNShXift8rZewAYJ6iEZ7HeYFExNN3WmvGgtAWSJC3oLJvpWXvQtWSiq5QYptE",
  "key13": "3jt2XuQTq8QmZ3bTRx8QTowSvjCbXqmM6x16oK5Vi36voUXkn1N8SzqpYg9MCEAVchthx62CnJRnbt6vzw5N9uix",
  "key14": "2kGLeQBui89yY1RhKrQQxfxXQxyVvUhSPAMEZPUkS91KrcLDU2p4dLYMFmH7UBmQQ8PnQ8bKpqxE9QmNsbQnudHP",
  "key15": "5Faj8EeJnbdunAqmEa7ozZL8NMuLSVvGHySHqaGBSUpbSLkS6sLb2ib4qn4qNtaJ1pvBwa2NpfPFzaNkqUtNT2ry",
  "key16": "3xuvoMuwn7y1nTsaX4y3t73woabY8MoHBZtMwKvk4AT4o11YvFF6tgizXcMKAvNyxNabPeZZ67iUkJzXLBLuRRtB",
  "key17": "5So7z5AUu3eVCUTcuyX9wHKXrfyZKo6tTVmGGYKfZQuFhhRfuMN6tfoJXfQ69H3aQHDoSoUV97fuZJNyZG2chS2r",
  "key18": "3mJQ6frsZNMvwTx1NqiYTCpA7CWXhpnpk89gKYEWLZ3YsH8sB3FMGKdusFgznn4eSyNHdLbAeh1X7QQNQ8Bk1a3V",
  "key19": "3s1Q32FFbHuBMkN3cjGoztdWmiDTXe5ZtPKhJ3wq1aukz55cKUVnJNNyHhQWUbou5nEwUKo236C4NNvzNEiBs2bM",
  "key20": "3zSytZqHT63iPWt2zeocZPLkH7AcuBpqvW61dAtuTG1DBm5kivDdRRPNrt82iDbXmZwA6DGjFQgG8snnfescH7bu",
  "key21": "5WyNh9VVgDnxNPg8NjLpxm6H6rtqntgdYJT5DxEdZt49f6FKCq69rJfKMWMjeKhH1koXVYZ3c5fZe1Q2ywB8h9B7",
  "key22": "3zrdYxf9XUje6hfW6Cc3BibCcYTPVEcp8eSmgjjFdkNeFuTxo13jH2RMtqxn93cCdKAjA8cH1ic21cvjA2uhqQmi",
  "key23": "2zsmqjg4GyG39BrHjxt6GhRW58NwiZnBqnyiBe1FK1AeWau4AJYpwympHB51tCiY7NPb2EzPsojjeRfGgBvWNqCx",
  "key24": "2HCUBRCkApDffVobiQKNfgSVmbQht5wqnwWWZfr5TLDLsTme1LuHaiqKpYFJpgtJDuzx5xVyPA47N1Ko8Kkv3QZe",
  "key25": "5cSqp4597A3FkVCwUejsopGuxAN8Q1WpHu4KQ1x6jHCUBqZbw88zaihbxh2vNKfDsG7XUcKaSTLnRZXMSG4eWvVw",
  "key26": "2mgeQuQ2VGqufkoBASzFW1Z8wK2cE471vfMYFcUWBLcwNUZ1rxmJ9ooVJe2zMsgPtC48ivpuZyukKY7SZ9majSk9",
  "key27": "5K2T6L3zDPAL4sajdaBWZSwm1MHsAW9ky29KfhST8wY7bLqnkrkXJ9CRp96tkLsmkk1Lajx7vUxbgwkNvPoW52cu",
  "key28": "4nu3J1N8HGWn8KzVrpYM5wS5632hnuW4CwovetCZEqrLqqYn9jrxqgJccr9n6CmfPVNuK77USWKq3Thw2EhY3A9T",
  "key29": "46wxJjwM4DiJZDMyBpAn2NGLv94EXPmit68qkGuzXMahePDhf8s4CTYg4UD97gw5FwW6j1VnX17JzA9bwGFeXD2p"
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
