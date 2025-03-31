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
    "4tJgdG5TShbEmE9VretkVNcpTVhBp43e4rb8tKpApzE6bYLx9UU9tNCnRxer4XEzXgG4Niqsey9R9Bbk6wvjcmKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJrHAAFrzLkTwy998eEFxW2PpNDfj6wfxQzKiefq9Nnq8S2qzru25kivK4HJWaemVb1BNNJtvoMtWJfiUs8zT7p",
  "key1": "29LBMiUb6fygcED42QSJPdoJ1LnzAbcgG82gyRr5DQqPypdMXTaxFXzfHSrprtWL92Qrzj4L1xEAHLPGYfY6jtEV",
  "key2": "4crPpkv6A5zghkSm4NCovNoZA9VjHAa5MUv8AZ7ZpMqXph5ZGcgDDTFK9TZCioijugieQHpPYtwN5q6v6VCHLNtZ",
  "key3": "4b1VcXWBBb9RC9EGa93Avdp1YeJCBdaZ1Ud7M3V1aHUezo47FnQ7S14DG8LvN4ZJrmTrXEXKph7b2AauXTnNRn4F",
  "key4": "5xRuVte4AuYPNAVxu8waZtfeqJktQpPp25kRKspput2NtNuPxfPxYwFF2i5sPtGGeWxfdFaC2pxNWbaLRUkjD55v",
  "key5": "2GbJ7KCZDyZUc9AonphSRBvYvmrdSajpkLdBYtyJDEmjKtyEV1Vkog7EAnqDWRnC4AiKpYiuoTyAbtKcdB6NtYgr",
  "key6": "5AA3EvyG1iFPZUzBitbxPMTL973vzrfWdLRzimP2HPGY8P2P74h4kaZ7tLXXxF9khubSVAYVS8CNHqTxgLggszTM",
  "key7": "36kkC6ioT9JZKGvCYZzzD9QFojETT3bLXJZWM4ZwwH3DybRj4o9d5icPoeWN8QpaCoE3bSCx6EnNbNquWmy2t7Ab",
  "key8": "65bko6Vk88pbD7tVxYMqXjfvdBvmhWPp5jh2jBHnKv3dCGptQN3SsVonwm8AVpSkNdKcUv7HnRRtbqkApCDE1fct",
  "key9": "77TZypgX82u8pX3BcAb9vUWE2MwmNvwsPAZCJXg5Vy89PVZw3Yor552BbMDEnHpvP31RUbMkufxSqD7TuLuRnVX",
  "key10": "2eUKn8MCda4wwd1RzdaAPnL9ZzwSCP6aLti8dc6XxBnV85VrYeBkSYk2sAMfZXPzpDdeEr6BNbHyHg88vz1D5Zrf",
  "key11": "5SMoev8kxE23n1bP9BDJtuEFeMCVj3gGfQo7AW15RC7orEXfxJ9cwaczp8nvqHcxddDn9AyqENTdDTgNbSEWEhqD",
  "key12": "3Nmi1LT1CNgR9HYHxGV5Se9BYXTQzog2nRDAwwjCGbVgoZioyUdzKgyYNbxwEY87VkstwgbfExj5hB9nS1AUjHi6",
  "key13": "4qjCAfzSHLfBWjVJNtzRtKGcYdkxEUjGyScZaBTsxnPk6UejXFn81ZvCQmyPmqsczgkjAXmfHEH4jJuR7bP3eLhX",
  "key14": "MKykemaPW7iFa7QYVVYqrhHXCYadRrUaGPunMv2yW45g8Knvn1es3j57ynpJ2wTStCLwZnJKrEbdHzLb4kvYdpe",
  "key15": "2VFU43wn47UWYShvprKSjBq11GvmAUTwFXGa9mPG4JEXKKHsz4dwt59n9XDgQN1veENDd1jB1PDfE2NHNNP87jCb",
  "key16": "4o9TRP2D8rBS2nzeiLcRL6zZ81uDoSrXuSZToqpbiY2pMNXQiRswo1dBz11fbZcn2zyQSEQr215qFwXw4QRrJyto",
  "key17": "3MH82cirvYDiRdWh49NoWYfpiBPnf17fPVkMXnnXgezoh267gyD5NYtV6rLPKEbGbYfK9PbymvoLYUtjhds1WF1P",
  "key18": "GkZKAMjr2sqZRWA7NkTw4v1Qi2sdyJvDYTKP2AeDMUoeLCEofvCNPKRtVWWQgRcXmRCYjQQm2hLYTLWGMVc5PYr",
  "key19": "55JosX5qPdC4AjRMkCGSbuKpNyUcLZ6zMgEtEfT6oyZKcdv1w3pJEBhK7hdPkKBWmkj6qFHDHm6CJxrffMP1jKDF",
  "key20": "xZknDwmwSCn5o4njm43mCk72QAVi4WqwPBfAnJniBTTbhwL7XqE2D7QEvwK5yjGyvq6rBknzubiYWW9eMyyH39y",
  "key21": "2KkAFDiiBeuBMXjN5ipvXzJsds5TyeXmMn5tYSC5z7qbw9ueRY9L9u5moTgjmXJt8ZGYTkZCnh3YJrAAM3ZWr1Lb",
  "key22": "5oVnNS3UpZHG33miCQLBR222q7Wq9nA9MEp6YJH9NXCYm65eWebx53VtcH7XeAZUbCByUcdYEZSHvJ7BVZ135gMB",
  "key23": "4Sv9gZXaLbYpHyP4sh2BxsT3q91S8ysZpNsLCwwEtZv7syhHTQuqP1oGGc171NGhTmbBSN7VPXWfVFZgsc4JcZEq",
  "key24": "2RdAtaPE5SRys7WsvQPGS58WvpdCDRUXWMpLzWCGyPaM6FSyJ322aQpZh7RMGsMQc8SSuDRU3mr2VqK7oww7TSRD",
  "key25": "4ZfpB1xVnsdW4kE4iK7EMtyJrHB8rmN4iV9TF1vUqFNqpECPF8PJGMcwvZDdksqiCtrtg8136FTLukb8pp6RBGXd",
  "key26": "2E28QWqogyTTZsVbiBqz8FufzZBXb3VMQgtSEnB2mw9dcdpZxjefwSVTTyfJKAmNANbTX3hp13NeSe5Nj3yFoCi1",
  "key27": "3qpT22QgBJjvwpGWA5rqaXFsMG2kdLLr6mcEGHsiZXEzStp8HpUn3sokyddeXMtJFPvaqUxLEnryaxMzu45GJm7b",
  "key28": "5vY7QLbviFRuAxiXKG1b8G4tCW5Vs9AP3VYax3hG8ypoNRVXjyejkzLMLGwJhEVFHb6EqxpUooH6mnzQRoWdN2MH",
  "key29": "5wQwLhBY4XSphNKR1heqPRJRVsQafo6w45XxGrU99DKUJ9Nx4ttLjSCDA32tAVjut3vmr4Dr6xArShkygpiYfuac",
  "key30": "3LiwqBsYcArDgN1JfTVJwSR3mFuADjAjVp4p7KR8JitBLXvgpxFdoKvuQEh6bhfjfYFHB4qVCvFxhGxdPECUa33G",
  "key31": "2fzXX8Fi3aQ4kAht4gysWEywAZhcysKqRVK5wveJhVvpG7K9gR48u2cJrZM265YhUHSYXW7MjT4Rk546Af1F7HyJ",
  "key32": "5DSCcttivhwJByCadtHTbjHW8hweUwsk4xY3dvMMF2dB3c9qb4g6GuFtpVFutrRbzdX9XDF17f3uDqrNUoKbxxpn",
  "key33": "2PrBi9fzkbK7htjo2HyKKMCAy3xdi7UZWPDWVUSu6YLiqDH7YyrP9H7uwtZyChLcH4b9cJVdQbP2EYrhVcKDKbwZ",
  "key34": "61cTkRohsfLjbL1FsoBxv9FdTMcXa1TNWqJPg5XsmHf3gNxnvrxgWH1eWJZv8ssy3ojvQwTBEJFXEuwWz9pBCMdC"
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
