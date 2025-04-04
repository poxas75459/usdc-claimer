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
    "2HwLJYZPfTZsV4Uuw9Tt2TtDx5NoxUTyNLW4R8un9KYnrZdjcWrdaAyFvyhRdx1v98rDjC3SiqH6roucjjpsWyyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akVnMva862B6X7NPm2B2GfPqVibb5ivsYssxiXxLMNqEg5vquyBejjSyiuNxFpdrbXR8Dex6fpLbJk3c6JEzkd",
  "key1": "YrtBAj1W4it8JkAXzAP4hxxKzFXghEmgDdoS3y4KQAMQM5MYtdy8hU137YbteFUfydgMD4FDbkU4L1Yerk85bHQ",
  "key2": "qFogYAJhhQn8c9HC9J124cJwiPFQFUdUu8yFs9yJRMKe7eQp5uGgpZuCaHn9S3fpj6h8drpJbuP8mKSctJfqgS8",
  "key3": "5QMzakkYS9gQGAuHnD8bfrkn7yiJiV6rBwerdxGnuq9nHK5jiyu8UTGchVeHRSy3piQGauV9d3ePSDf9VrQLurLp",
  "key4": "3FHXS7bn1EyQCmt31BZMp7AgpHKUyx4aSV17nxGszUVxsDG77Y1uaHsmN5N4KFaiaKbzX4oENY71nPNYuHL88ipQ",
  "key5": "43uAJ6EusnoACNTNNJGLbXAs3UStMysXmNyjcy3addGzS93qhqy95enKzzGcErRvJHWHMCjoU8W1evCakQMHDHyF",
  "key6": "38TekeEnW4HhB4PUK5PFferMXPFmfrdagtJ4xvE75HJER3on9wZduWXz4QKsRCewSGuRfnjN7uHKeSqALyFYbhCA",
  "key7": "CeefWX5VYUQwV25LRFq7VSzddF88dADGs2BnTsgAUAZAHfBFy9LGq1hemTu6X7XKPni1F4Cd8B6QihoySQjvJex",
  "key8": "3A85kAuSEwt2YbXv3EN388PTAo4773ANANmEgSMqrdpANgdrfrcpG7cj253Y9pyvEsTxDLoS92herk3CQdhJsNcz",
  "key9": "3cUXt7sevq8tjS7G45wC2NP9GHXvb3u1AsrBXn4H2uTabErQzgZniw5vBpkarviSLpCSzvEFSpTrUdZYgeVEuVay",
  "key10": "37U5HQJsahmofFGUqrsVxY47AgBKLo1kSMpzUkLdvaPzwShDw1vyoeBfgz9MRzcCyZ1XAxKkjGmgkvVCYPbyQCcn",
  "key11": "3QjWMSda69FVuQzjZqUzettixaAnYdgfVAbf73g5LVnbbQQAQCdq8sNoeY1PSB35H9wurGRjL36fQWi492vPArvj",
  "key12": "3VyevTfyCaF4r3nMyfAP2e7YLG1JMgWZa2WVp6TabckpKYSQZ4EeLiwBCDDuBKdQKS4SLoms87HqSKv2eVq4Cm5f",
  "key13": "4xFTCw18K8mBc1sS2PPZNghhUk8zraytDswmKeEHXU8oyMBAVEr42doavB8LmzJ83GyUCiVBVBb6pQZ4ynSpYNaB",
  "key14": "3hHVjNax4PupNn8mJqRSEW58esx2DX1Wgv57f5jSf1NsTjVXto3wwsXjdjPMVmaJjspn8FWM6uihXKEipxLgQAkh",
  "key15": "2BiUeTBYEvPwngYEFh2ERWfsaHThcYDdxxHjFt49M8jvRH4f7xFUxuToAFUyM4XjM9yE32TAjUSFWd4n4oR4a5UG",
  "key16": "2iJycsRKfRn8yXrsPXvn83V4XRHYjufAzwuaUiKxivjoDH2tg8SpuC55CXMWDvLaPh1FJwEoRs2x9Gds7kcy3WpL",
  "key17": "2X3L9pDgWcobb6QDXwvNvsRrQTPsSqyTCMapQCZZkPMytAndkJYkDDRvRb1NvU4LUzSVLyyhPhpRSBHBoyH4yEA",
  "key18": "3Zuw63HEz8r4F439ZCuJoEuYzkN3yBzPvtfFUy9dhnx6cJgDzV9sX7qYFECjp6P2EP7Y8MWiTRqkaJjsUkYKhLnB",
  "key19": "NmqTJNz3byq5CUwfigbiXGXhPDh5WVjUcuMPLZ6SUVg6YafN5ZRdRqCLxaoVWYQq5s5QS1dFVPgnabkR5CX9s3m",
  "key20": "2Y36XqhCT2TFkieYsvD7C8hDhLQTRbV9pVdBKXUCFChFksq38LvMrnQ9CuD3pcCrWxZGeVg4yZh5tsQZgwDJysxK",
  "key21": "2pjnDtneqZVd6cYThTz2PcUNttdNPaZ46EfJ4t42jpF5sgHVvANkZabhgM4CBwZstrVcd6VujRW2W5ZpuhYANXBf",
  "key22": "ivbr1TXTAN1Jx4iFFZFBBXSmfokMWVU4YPYvdH8JKCYtWjrkcuzxLyjJVWLhi9sQDq5H6sA4rAxQL582bWgopdC",
  "key23": "3vmiUT6HT1FnFMJ7wRv1dxxrEXHAUf6M5cNEU6UqZsVuiRkjtfTMXeVGCBpgusKbsvNSSt7hM9jRgsFaiSbCr3SV",
  "key24": "3SAT6uEptdDAtHjLGtvnd7qwR82wxQ1F6mF6js3NbKx1pAX64scgAfijvNZHmYAgXAncTjWxpv8trSN5W7hgkj46",
  "key25": "2SiSPdrpAkNddpvh5yLGNG6azedauwuVdkzPJ4wfMtbNLKPixYgCd2vCb4h46GxeUK3Gj9htQSEvX1NNSskdRfnn",
  "key26": "5w9pD2ou6844EW49sygUdQAUk9XdecJHSDtd1nNGduiDv9pQxWNwfvkLL26PH3V5fNFbdKvste8mEpNTBz1UbckY"
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
