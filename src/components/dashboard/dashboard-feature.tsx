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
    "4q1EatRV5oiWtwgW4P4B7k8dShtJoArjMRgJAmX9FuiiKorS3rBGTNmR1F7cR5LGsi29jv6LPNmejYYYRx6QE6j2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "554yLR8thQKVD7eqx7iE85nzqxSGqfnxtNfqWfU3GwQDKwwyQ6e5vKUMJDJ1AndC8fXeiueHx3gtzAoHjCqVmExu",
  "key1": "5iTuvvtaPqGEYcTjhjLmPCmfT35QD1uoy8aszHptDwiXcG1veprubADkeHfZDDkr8GgKpDXWMu6Xekf1qijqhjWy",
  "key2": "5gLGh8yb3GRb8CSpRnm31e6dM5UNXxr8PqqsKYPbBqTsaBYtYaFz3v16eGw9PxX4mgv8XPd5EWS9fWLoojuoc2Lt",
  "key3": "4JfbnX3egRZHYikQQBrSfBUbxSo7DKG9gzrdfx7ifwFrwVhu8SC3mKgtE3YJ8Hsh7TfiQWpJeW2Y3ycE8rZQKCwn",
  "key4": "4fwrYdtdT9epQFna5dvZ1WzBAv8qaVcgKik9R5BGk3CQ3MqMt2ebXUfzf7pU3dM3rb4UgKQzqnnYSqZzWWAVG6UB",
  "key5": "5PeiYKrT6iH93MgNrNLxp1TpL9qp34oT77X9jvgHzeoWdTb4URzCWxvBiuYDQcKyqak3w9dZDdTywbPEgyNfymug",
  "key6": "5SfVCLMT7LNY5pmW8SG2K8kZp4XHiYDvqYSQqX1nbvdanxkY5K1seWp7BHpmoyuCeih1KfzvyhmSBezsVfHgB214",
  "key7": "2TBe98rivCUERDKB5VMdchLy7kJhPd35Dau6acQFE4uPVHji5KJpACm8jqXpWVwzYKayBU5azsc2QXJoXmzFzx1i",
  "key8": "3KDNaeQULEcr5KVcoWKa9dWHJroFzuJt2fEGdGEV6pvRbqfQNQDQNjwcQKykrsrmbsafXkvTYgdPEKibKx4hyXXN",
  "key9": "5vfkd7pcv3d9qohc6w3uBh3oJ7gHvZQdNRgPcKQjmtwbSn9X5X8pQpdj3bhK3SkTHV3JLjvvnzb34n3KHRvXxX3o",
  "key10": "1PknH8FYXyUHtJ9JnBDb3GshwmnhJRW3jrjTr7Ati2urt9gMenczHiNHvPAd69x2StBV6ep3kKgo1KuBd1eMS6t",
  "key11": "2PdnQQeu8oq9yn8oe7oQDzBp36kCmycKKuSrxPLNF8EZpWKbgUMgarKyi1PtJ9Qnd5FLuRFunnXmqw6c8vZJYn3R",
  "key12": "3grYmyUKP47Q6a2EKDpxrxTj4Vf6EnGE4LZgqcjvEhtadbYLMms2redLc4pvXGbgzz869PHTwHr3Q8R9HRgAD59M",
  "key13": "3U67XiQBTq6nqkghc52pMQTrc7DpriqgWt4NUDX7CBVGd4i7DubGt6Nm93x9Nnw9VCi5qqBwYiD8DWgudLXH4V1x",
  "key14": "4aA6nHQviwn2jZebNRiMdT4hcuMLAR84koiZq8ntM8pk1ZWtHS5igK2ifdBSYc4uQa2xM3PZRmMxFbPSqEw2pryN",
  "key15": "2MShxYDFuR6suZQ5neG7NQ3Cqc45W9QUNFq1faa1jc4c92zxF1y2Fh7qRSHy4xJEY6pQ1rN9141pXmNifAh7BAHw",
  "key16": "32pTKHD9uq41Dh1kfFkeuDE3a7spBJy6cehTSXw2dqCfcxeieVrbtCcRA7U24mbpuQxD83ngMzJK27HQ5M4ZZCXw",
  "key17": "3tbL5ZZwN779LVH1yAECMa6UBgzHUjpnng4hF2XUhEyvKpHuiJzW4247wuWmfSeeA7kVFAbakNnPyipYBbqgrMnq",
  "key18": "JxKjwH5BVXLg5C4tCBfZYNFaLYnnZaVoYgscDyQJL79DcDY4jMWHCvW5V1uA6tkj5oPAu4tEVXhr5LjyvjPEkov",
  "key19": "ku3wnnaEvXU79RUFapTEngBnY8GFBotTeGD4dqV6Z2FrZZd7FvaaQHEVbJk3pQGWVnjiX7gByVyGEvDviw6qArU",
  "key20": "avg6WqMi7RSBobYHCR4rStumhnuyGskTEym76Ee4oXrbebfRPZQHqBJ7zH1J6SeFjZT4Din5TDKCSie5CFGFJyE",
  "key21": "5jt3dzTysLgqd3NWe9qQxq13kptHw452GtfuWpnkAw2ErSRzAq48MQtfDnfsfAAaiBKQSRStopc41APu8nsyCpHx",
  "key22": "DMyHQ3thw4Q8yZB8z2os7X1VUVz6kAwgU4u7auEiVRhvpPNJ5sWL98r2qDocDrbWRWCc7w7GukceQHthWa23Jmh",
  "key23": "WJcNrrZQ3Lrnme5qnco79nQoRokPu6nEoA1L45ggESKRhzw7diPX2VEDqcT7TVLZ3CR5o4A8rJNSLQUMLq8FgE5",
  "key24": "4a5J19SZNXdK8MtM4APxhTpukgcFtVjLWK56xMk5WJgTg63RRZq34cfTQdzSjYGgurtAv9PhLJ6jqhrdfheRkH2t",
  "key25": "3FdRhdSLJ3fhRPQVNMoCVZfGt6oDr9utvbeZxr24zs4UQJ2hNUBY4qoey6JVKHM8Z9c2kPA91Fc8C8G7X9rRE7Hv",
  "key26": "KPsTFfGd6DbbLCcF2sTaPk3vgMMxEow9ynLMsBFXq1cFLZra9XqsXBLPSYeBbNbF2x1HiRGDjp4Rttii5PCUx7M",
  "key27": "4UQn81LjEypWJPEhp3QYppi2vxEPMCcqsNcHERYJiy7UKtu4hZ3z5u5qpU1i8kLAgF2wtdEfd4mPLW6LNt5NRvys",
  "key28": "5nSRNuXVxqRSyeCkpGK7bknjXfptiJzDsRXbanTEgDUFFwGMyqasf4s2rhJoSCmjy9xmVPTpG7UsBGxa8FVA8XUd",
  "key29": "UiH97sk4ULmoXk243vxDzCHd2jJfxbPjn5MvfFcFuKSQ3EEeU5rwGiPT9z3q8ZPTC7cAkx97M9yNjc2UJjpSTZv",
  "key30": "4nz5dWN35foBzrsvatyBFqDbcmJ94awKtZjUv1H8vyh4FS1qxjJPfLDrwiVfwNrY4ZwWQZFrN2WKnFzSFerfaD5k",
  "key31": "39v6Feonn3frRzWGMockG9M7JgFqSxQYZXXZJfY3Y4kuv2yF7eZMHxuZoeyNzX9bnR11Stu6oAr3qxR9yfxh6Wt6",
  "key32": "SJEhvxVnVjqcdPku2SUSyu7ugqDY5CsgePDmxz9ZFG9EeYzLiN36R9A9LoyqCfgx3Q8P66Es78eiogDgTKksogy",
  "key33": "47L2wyED1wEX1TrjVdhGZAgxi4C7nRJj5yNZAKMBUM9CoX5KC2C3sTx9c6WS4pVVwQD5pRrxs5N6VtfUtGjEThRt",
  "key34": "32ri3N1qBZMNryXFr9VDxxjy5K7UqKAtZh3WbaWRxaaaBp3eWxT8YiKP3aUCrpw64PYFeXGG3sSVH8xFxqfHe1ry",
  "key35": "2HTwRuQ8rsffjjdhoYEjGQPDz4kp9gRjRcvtd38EoXLyBKeW1tCLx9spuMvy4NoWxRcHw1BsZowpwXKwvt1aYLtj",
  "key36": "2jDV7E9m3W2a1ymY6P88vgJziAn34sninWnxS3NMvU5xyyK4PbESuokgV1psxKCcrJBDxYHHsb6zor8mehANSU3i"
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
