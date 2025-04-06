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
    "4kJHY3RVKjwgRFhupsSSdKhmPbJs1n3q8bcea6jfcsd93jZNTE32vKwcJmhcmECfTQot2aKwcf3AsfV3wABehqfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49fg27qAf3YgaeCJCNkZ2yPB3ttw6PrdWq6H2WBPf84dcwCN7j9cCuBz8L5bS9JYYtB2ruMSUuXfs6PBgZACfjxm",
  "key1": "wzTA9m4KU6N2u1USTipYkcMmp7jHBJhnEwhpXXo8iDQNgiy3MkqHzD1ynfNm2VPgmvNVhZ7xcvLxMDKA4Toh8Qw",
  "key2": "5JMDAncrxbQZuRuSmDwScafdk4P2kkbLuM1UzFNer9SFw9jabGbHRaq3J2n3sPK6TpBHhymfC2gPmY6kWZUhKjxV",
  "key3": "5NrXV5tPXLmtZgxAz7M7XEsHZoeQTWXttupfhB9CD4qyV9w8s4FsnzDrrjzLCrhSYJKLTvVZt2yoUGmEcDivWJ3u",
  "key4": "4ik1vJhtWL6KmxdPantsY4hC2PEGckKAL5vzGwHAEF5XmdjgUhZXmkg6tCtsRYmekcgcfyyQ2KEK62U1LwDiT8yT",
  "key5": "4V1Q2GWeH5ygZ2CfskX1sRmmfzjbG5p8DFAVaakgt4jp5BTs2q3JoXM7EkM45rB7zuuYfDjmDmS3F8d5wKizuj7c",
  "key6": "5FwXnV2BubdftbBQ1kFRYJcvTnZbtYchnshDYSKx3GWycWedQgKkoDgyM1RJG1ys4MZpjAiEgmiTLy1fo73wEpiJ",
  "key7": "2QFS1qcNqoin2N3RK2yz3RifjTZwRJsKMkHWsUoCBPWiqqMnftAk2odiw6c66DnZf252Y3yThocFnDVr452C2Gcy",
  "key8": "5dPicgDLtPKUykmEXtuU3VQs3nqsTjexMZdtN1fHwzEAiQunFHtYGgizN9MxY7RmzFjQXWTM9EYwpa6ZCtmAjH7P",
  "key9": "5ZSLQQhmXet6x5ZWA93SdTbT94i3p3EcW564VJ46GHm1kjdUtK7r3y5u53eZSf3qNLj3jmUovjQFqKxEUTve19zd",
  "key10": "2dQYtV33X8gXc2bwr5PSoQ5vX8u65rs4m41do6e3tLK3cP2ZL3ws514vEoAxCgtZ1WfjjJC764jH332LneCzhMaW",
  "key11": "58PsLuw8ReLrVn5RWNjcXxc7dTdH3UKoBz1ySPPZ4HHEwZ5jnAx5hhUJPMtczAoiHddXPQpXUscCVpohRnUfBBu5",
  "key12": "4D89zcHFySyq7mjwSoSQGdQ1JSxeY8Q8ufAuR6FQGekywyTumW1FDebwxuuYpP6HAD9eTAyJq3WmoWtrCj6Fjehm",
  "key13": "5QN4wqUMBX6Em5wKHqJNPD5Q1h2qxavCVHK7igBWdnPWWM51yPiX7LAQ92ypnyxizq6kyLbWpsGtgz5ztDrhR71P",
  "key14": "2ueo9PQVXqKrXgz3deuuwQHz4sS4uubuZeauU4NHPsir2cWj6qbKC6gFx5Nwef4g3FLQ7vt5cBJg8HqWezfotT3L",
  "key15": "43mUeM5usSyqVJ8bX18NpT1Ph2VYHvsssqMbgz1PRcYiXLNs8JXt1asFM2iR7p1xXFawKi6Jm8cACXURL3JBjhCv",
  "key16": "64wes4yLzoQGAPT2aioS5PcX3pqLa6dWL82xjn2qhmRzYypdFgzdr8KFSmCKP13tmLUYzwpafhdVig3XAXzj8PNV",
  "key17": "3GVBSNLvZ6qUs7Y8f541HEGHsrut1wLdAeEyTdvJURBHRy6ze3CXHxoiDvTKg3GLpnRAT3L9X9mkDbdFVjyoJLe",
  "key18": "3YhgUKRX2UCrfmPZnATQFodcNKJ6SV7dFqpjtsx81Hqe4GhgZKE1ZrrH7B8Tqbmbjb8MjTGvfGuEExqQbZEPpKsL",
  "key19": "g6a1TDfJLxwQPEMWUzCDoUhzPL6c3RXi17jWUuppT62JKQcPULsNoDwb6aig2uUGVug3PumaE6b56CEGusseh3w",
  "key20": "5yqFcG8Dz7V9P5vJjuP42xAPxdfxrRa34cMHLkYfBCigK9o6G1gUFCMDdVTyz4CmtFrEn6C9qq3xdR4Rt9hYVMBT",
  "key21": "3sJdRLNmfTEoBzr9aQWGbRqNMB1AsqGEYw6fzvttzpjd7XeBuLB1UH5TXyVkFG4AajkTF3htTm9ty4GYaeh286Bg",
  "key22": "3APwN8VnxSkE3xGEqfZuoMGWjPqM6zewjR9S5UDznzQNsEmbhusiUiyo4mAJ3BV4aGUC9FLSxZPFpGvU4jt9YwSc",
  "key23": "4Mdt4cr62S2CeU7oBNKANoevH58s5e2gcEJEZDYXXb62tvgfHxM8vkDDvm69RVitiWt1gZNdkLLKdJFyGVjGE2jG",
  "key24": "ZzgaPrsSukYLX5tbbMNr1tNRfNC5MohzwWjaNLwLN1rbGQp6AzhGfbT1SYgWVuhYVbHcYp27GWVGvpGtsMsEooF",
  "key25": "3W2SP7eLYChZ9xxZxjVKmNMBZQ8QWGwr3apzjQmJg1dXuZBNRBrXTmsGVF8xNperwEKkcgrWuKe4Bzay96bg1vwD",
  "key26": "p98WqSrwHjwzxCijmGeLn9Vj9sgWNYdmt5irnL3U6xmPNjriLy5pRqbb3W26fWYnA3rJxnRtcHYZsumxcvReynx",
  "key27": "2Q64Dgwheve7EyyNgQx7WzDjiv67jU89Ed2DqcQewsxiYwvvUHYhKvpiauQtrsWXpXxDsQET8qaLW2k8R9M9fjgi",
  "key28": "ktYZQzWXGGG7AnrPM5fYpkEw91ZC5wRT35vjmyjdLVUCd8C4T5iMRKyen9Em7jmjDyWpTRNW2S2EUPyGerg59uV",
  "key29": "5oxtZcQss5buoajnZsULZBF1tjtpfeMNW1uHMy9GDXW8qWfPExCB42PAEEvzcsEQmr7jjM6Kbdi2W5kP9N8GSkg9",
  "key30": "ddfWMwkrcMJducBFBs54s2U7FC64tQ7z21KcpSnXpcETdE3ua4FoUKsp3nnGaN9jLcCeej6gLnTzYxE372F7oHP",
  "key31": "5N3sE8FZHpUkii6YMy9V4czYJqvAny2rh8LCihXQEm4DWGGjudV1BEPrhS519rYuGrHArMwfV78csMBgxbK4EGvW",
  "key32": "wsQp2HUNZQANmo8maDfQhN4krhzzELN2Sf4MXY8NFnCdi5jvhybFtKWF1knRnXrQo5jb8noTVxhvY3vZCE7oZ4m",
  "key33": "64HKmCgjByPefu57twMHe6aJS7iZckCKxdZ2Bi9od3cJUG5SXMbKAEzkYA1gGswnZwEjL6eJ8ymbEj8bUvU1BUWG",
  "key34": "58DiPNmXv6jJQHZZrA4iDGeGpJBqYUXpEdUS3M6WGfDibARXDDvAWXNNptkcsGzx8bvrYCHkzTcvAgjXMqfQu7JK"
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
