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
    "5zDJ8Bc3eXwRcFZPHK4vnzCdpgWktRaRbsgSM5RjU7fDN74e8sAzpKD7oKVGaiuHwZ3bJ78fWAUWnDXVJDKAXkQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQ2ZJ1Y272ksG6Q34CXZ1PqnYQGM4CjQR43BZ8ANAa6ThDWxwJQp5vBo1NHcPjyEnKLwkBJDFmngqmdZ7YdZGtM",
  "key1": "5Qbxqk5bS4Wx84rXBz1b4BgXy2nxo7d2wQ4p58g8rb8weAiB9FvCUc3zowYXqA21pCvYNhEmWq2WeWMcsfuhDy87",
  "key2": "8c8JiRa6hxL4BraF5F2DVSo5BniYM8igSvz2CPgcA3GT5fS339LhDeQ4KbRYWihJYC7LTR4v2zDq1qW5tY2bLVh",
  "key3": "2EaDyLd9EmCa5hmkAH42dXKvoyqmFKpNhfn7x31zodar3NiXi86S3vitqq3NKABPAYSvMujg7usopFYxHKceQj9p",
  "key4": "vZFqE9LodD5hNW6jnzUJDCUnjGmRH3CywnU6ZkRryA5BXak87LC5pCqtmkLzJb42avQstSMrVfk5nZrnT4jJwuE",
  "key5": "2LoryPqPEL4tYFJCYqhhkcfJPbkvyL4qkxbWTM4s9jZzaRGn4z4oPXzmMfmodNuSqdQBEsTf4bdKetHMdMjfEGxt",
  "key6": "XhrkuBQUBknr6jbncKN1yh7RfLBiqGY4korrNNrLioozfKx83KzV12BWpakbhc6Z2CofZ7Q7H36mooMb6cDV9Gh",
  "key7": "4x3ojDnNL5h6XReT9UEzRhyEenr7h99DP7HPHrUgiNN5ozXpfUAtN6qnVwwDLJaKLaBT2cn9KqAxjMBwUAudeLgS",
  "key8": "4yATyysapQfFC89Mppwpfu6enWRk9csewi549xNf5eGiFgyfiAa21FbdDzxeMctJ1AVZrk8dXd7GytieSBAzL4sx",
  "key9": "23bgrChQQcro91bejhXKrAmgPLJP63TtHrwkGUkk4HiBNzLnfScBtdERJiwNPXGk1hLxnB8yQNtsVNnsRrrrW4hy",
  "key10": "3hJqEpyhU1i3ogLj6TcS5oAsswARQNCUwMuViSNFcc6cMRfN7HMzHGzRV4jfbCTFDbjCFgDtxGHk9XVEK44xZATA",
  "key11": "44jnkq1Mg219ZBjn2C2Wo55Xc1WVVgZ1HhbgyK5A5icC4eaD2kTfwsEMVMQAee2XUiZLXK6gP57CEEvP9R4WoAju",
  "key12": "2EF7t31ixVKKUowJ2TdPU9rdUztQnW6LsQfkKpKpsw2Miq21EGBFUcbNdnUpgvH9GvutGdnaop4RKS866JzPtvbr",
  "key13": "2WerDq5imJzHuMdDL1syBipwCCAgmuRKUdqDxBAibardJcfFKJphpSJ7yYHogVFgxJMpuo2AvmJ8RRUDAbCRW7kc",
  "key14": "4NSmRgnsiAUHoAFDst9ZutUTvDwUqhdn88ZjbyeKedLXZCSh1WdnNFbZifEwm5bvAmGC2oL9qmPKVkyHn7YZY7Eq",
  "key15": "29f6hf5DMjYW2FmoHwXjFKn75QopF1qzkR2fmXu2HAzqwKfqPWu41Bfa8poFf8qrB4YFEAtRRY8ddwohg6oTwQ4a",
  "key16": "5GM7mVMjTqsz7QUyFdZmJdtTkrNzvk4GEe5DiGwLa23Yvk8w8FFKZckMt2GDH6V4Xme6bC6BQQkusD8FGZvC5nKu",
  "key17": "4r5Qnqbco8hXgw1JHMQWmHhaDMbVYCCvGwfZPvEQRvt7CgZWscG1rMqCdEzeiDED6etLFM3cvsSKwgGcuHzyD3Rw",
  "key18": "Bd5aoqmJCuGRf4aTr7C16gQUprdzKvDPUiK51efb6nWrYgfN9YwzJJEryPuFA1KewCpTgwZSYCui5tbm1ZyAbC5",
  "key19": "AgVhVPZrUxvHTms62FGoiJDD3SHKDQjMYUaBxY3rzuzS8W7nesxDxJGUcXVMobkTYxhwZDarhiqgnKe4XGjp8JQ",
  "key20": "WWZoE4AzEo1fkVwjwzGjrMUhpWeGmHHLEzYixpEvczaVrFQBtToQiDEWKemVTNN629Wi75nQsXrndK9CYrmxQWi",
  "key21": "33SmVjLpQMomFuKXo1KNPyQnJfodPSTt7r6FjisLKai8V77uEv5fc1fNPj9CHzpfgWsKsLpRYki5ETHJNS4BzciX",
  "key22": "5j9MRi1iCNde1JnaQAP5zUzFDLCWXdhBcDuZD3EWBme6kws5ambNcaGx5rrsHUwV5Zhqg7zRjob3p8rKzjtkireV",
  "key23": "3vxmDg6WpKTbFSCDwsQ9CNje33ZRaJE4h1sDtqdx9qppeRnRqAwxxaKP7NCseHZMytvha7hyybPgx1AsC5tY2vHP",
  "key24": "4wLQqGD2sC33dGBwn6KwNVDV52LrwuA4TGc9FBVFbHsCeNFb62ZdmkdNuCHbWbgsVsxphDCvwWKntM9cD7SvN1n5"
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
