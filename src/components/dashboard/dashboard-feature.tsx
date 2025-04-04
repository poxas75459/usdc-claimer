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
    "5oMWLeSwRMR3rv47zNjkAxo6ZGMv9pExcZ9y1PZPewP5xMKGLQ6irKUmp7CBFooETU9i2Y1vgpnxCwxVDjBZwPky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJgDhz6RBCcFoR2Me4tmvXiVmM8CzwinWuJtKB3Fr2phtduWh3U4q8JXx7oK1ddsYS7cABn9tYDNQEhkE2Sh54G",
  "key1": "33d9BYbnrqUSTm9ai3VS2PJAAu6PBbjYZonVR4iXVpGx2RtehSntTY3VruF59k8k8mPkwezYLheNRcs37V1ab1cR",
  "key2": "2jU5bTxLHTadAREmdUPxyJ28XrDSKkYuywkn4XT49VofN6kh3R3agtADV7MwVNNet7gTpKQf9jMN6xoJMLCTv3X4",
  "key3": "36jDdpfkkWk7WMHh6ckUhjZdbUv7DftvFX5Fnk82vLkQ2rmfzzArZy4JDQABqZ4VN6kSshHqgvZivnqgxKJKKTMm",
  "key4": "5Kr8zHhzKuy5xdPed7Er8vNdFkwQjHKifmALuHQK8XTzaHv183idTaH9QPkxVBhLfqiSqJhtXNnJNRUhfaFGMw92",
  "key5": "4J5KKzTxDrcgnx9g2FXFASnJpdrhWCwDwUiF8EnM3AYd2obz2Yu4LnjqCsDWXzBd7aJg2V6skUqCcMFYUipg8xUJ",
  "key6": "676aPZBrSeL6bjdpFZKQyq6b6jBKLKWbiKe1We6o5M4nDvkWJp8gKfjZJZHdwTPTCuEXFEg2HqoT7mNzaryGv7Ve",
  "key7": "2qsu6wPJhUuytpMJvcZZ6qWR9uN2ss9yMS9QB45yjXzHzPZ4p6y6k9xMhB9LvR8Ukb5sn9Ec3PTY87mRu4FpCHcu",
  "key8": "4pnY2pJuHkycfpbbTPBnL3FemxLyaaiJ8L6xg4kYz1SMQQdc1HzwkCn9kAcn9FLXTgyJLHCp5h7Utv7iv2Bj8G6Y",
  "key9": "nJQNr7WQeVTUYaYrxXHWa4SydzjweHymXK51VNqjQhVUreiioxY28KzjvHDGsn7A1UKTKjUCiDJsDp2JD2tbc3k",
  "key10": "5zE5U6jsX4titZZ93oWqT2xKjLdXCs2Annx5JPRCCMJPPrPM1WNmu7LuekcFAzTYnraiYuv32jCpe3Q6UmfA4fEn",
  "key11": "3GfLqpFcK7LehGUFWUHsLmsUHitbZfieRgeRWTZ5xKQNLXS7thDbyJBkoE4mDVL1TPboEmpT7FgM9pzRE8JGXvPa",
  "key12": "34X4u7QCGEb5GodDgiNdEakQjQvGr39QYyGXZULQEcRZGnTDWhxyCPZqZ6hQ5cTgEn7emZMsjcEmTgmxDsSiuALE",
  "key13": "GJtPmGFuzLUtvDpnbGXGCYQcDR1fWkGqF53AFkdxYqxxm7RiPmYFE3wcNDq5xn64ZE8aR5S2mVyhgxe1Yz8zjR7",
  "key14": "rYEnYWopikNLgFd5cKiS1WeZDA4kaaVJPwPzSRevNHKnp5E49cha7vaPQfArp1pXXJAyfxpU2S89FCdUxJcw1Uk",
  "key15": "3CcEQNP3mWv58uReLgXuWMf8zj1JA55diK1Yjf4Vk3eDNeW7nAiocXZAxUci5NV8hiRV7sx2XazYzA4AodzPJi2s",
  "key16": "KDAFRNCfqpQMQ6KfF1gcqnoJscgZZFZYsBvJPb3qSZsaXPVSZ4fxSvj1mTb5PUXGK43YX7gGEg2zjhuqXAEB9ZE",
  "key17": "3HcV1RCKeG71dLR7suDCzjx2QitKFK7AiAYkjAAkdZxTfsySe1e7NRtRxs9qfUwbYTKxvN93A9LQGfbbnLvZSMmn",
  "key18": "4yfJMs4KJtgvsxabwGkwjUmTuhSQdo94zQ3VQfzzq4DwN4qsNjKRQUbpcXfP9LPk6rzE4j4DCnP9imrR6NFiD4Zq",
  "key19": "55NN6fU7fG2NGRvWscaFWoVLALfTEedVb23iV55GvzrLhXBF9dd9aaGNFVfBVVKK7AHEm715RjQ9Kn9ioLEEpFSL",
  "key20": "gw3gHazAVzyxhbQVDMLdBwh9YVNcbQG7C9UnbTAFnvcAys8L6PETmis6Pzja33n8WunDy4MBtb6KLMR2ftUN1t2",
  "key21": "5KGrSzMGfqnRxZfv4rnbxYjPi1yRbVh6pxdDYkQAnuB4BXAoBQsEr8iVrum8DVnN4r7nmZRvqiZq3utq2ZiNWrcu",
  "key22": "45XgoCV5rhQs8QqPPLkbzp45CzLthBti8uWw3juRb1Y3k6wLxV1bs4yPRPkDV97hv2JfXgyf88BgFL9d4nHcQv6H",
  "key23": "AjZqW9YyFag8bTCxMe3ZzhK4qFhDeGbLug2myANkgiSbWogEqSJDErtwqDDNjtwbGJdXGrRcUaxNSUhiRcWoxDs",
  "key24": "E4qHgNsuG7S8p5XMnoSX9STkoyUTy8ERcGwWZMP23UkbZieqeMskZrZcgVBwC3zEDTKvhtHeuTLMEwCsyzKe2s6"
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
