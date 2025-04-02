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
    "53W43u7TMTXnfKc8QaHsjnjk49thanefQAMfX5WC8sdGYrqSFiwiqwLxYaZQkTjLdWFpuvN8DbkaADYzb2314Cnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSg8Pr1JN1r4KxeeetjgvHPLPswB1R6nkw6NGYrxMEkqBjUKgDL4Z2A7uHE9BqF1FJakZ6wZbKouDLEcR1BKfvX",
  "key1": "2yVdRNCn3KovwZ4SL2bsQ29Rr34THT5by1g5gsDYFezu5PDJpCJzqyYSHAQEhmuFR2HEsfD7M9C11cgSwLfRRAhS",
  "key2": "58aVLynNXWKuH7SzZftY39gSdfhGYf86SxvMETgwByuZs7vwuzjrbMLZhYR5GEho2ANdz7ThWNSp9SAbXyAGXJZJ",
  "key3": "3enbxqNXQkA84HFHQaXernkDqsgdriy69vqLyx1FxHewPLKTHE9nQkwkWN5Twigv18pfW5AdcHAEzsYNezQbVR6L",
  "key4": "2uaJVsDtu176ujj7VcRrGjQBiPx5p1ggwn3FNHz38kprLWkBL6arH46RX5QHfEY8jGe1hfjvLT568jmJE7k5Mpez",
  "key5": "2vmmMN2qyDwdrPzza6xhJhdPNZpUw3TvNzjPW91xpvdTUYJ4JnNZkkhDTos7MBCDrT6DsKRgQ8MTixb34pHBopbE",
  "key6": "ehaPs2Zat7DPnfGZAHf5zKjbvQJ2bM3gUJvP5D7gQcBPUgcF7uz5DbK2hkdpPM58SbhTJqjCuiYJcDaCysRikth",
  "key7": "4x29FegDir1jMrZSo2Xn1oLUVXRYvQx81uC7oX3Hny3AYhVN44tnx1fyqiYwc3tZEegcANEgfX5RbvqRSZw8ystx",
  "key8": "5oMQ2E4PihXTbVT76Rm79bf8wEZVYE3VNUEb4eYyz7sQpuciFAGGxURScAw7jGTvuE7fPveGrc24AEUbVKGtQ2rT",
  "key9": "ux6hj8h7vhYguyFpj62BF6EavgjJDepaup9wzAMkNQiAk8KYjJtGqt9fkAae7Kr9ax8XW25qTDdTiJiNojxD9qu",
  "key10": "2yWZ4MJ3r5PRQP2QYd2QPeKTvY5UTC9JWPdUEWRgGy1QC3YmyeAZdw8s7nagja9GeKWss53Kwr95ZCaxUm3Bvkqv",
  "key11": "5osN68bpNzXFp4S6p9msGGKjdW1zstiUbqtbPCsmUipavPffsAQd41TC7c84DsXWkm5QDjVqUViYhAFGF7fhAuRL",
  "key12": "9rB19NYLThV95MU8BJQ4GcfHwmhG9Zw7dSCqayDL552R74TZGmspfPgWV69nesq1RzhNPd7Xu2XkDgshiqYJCjA",
  "key13": "4tU4xDNCLfWS1Zm5gMT6BEeDgaNUoCxyuH3kSqNrAJgNvmBgYwjbtuoew9RhSvAM7dDrmT71pfxvy8kBVbXViwjU",
  "key14": "5Z318o3rs4tSBh5FZW2c6ngQcQSWMMGFwTH8jkPgi4UWY3HmE4Dk4g7ZVtLctpJuVSQY6dMPYsU9rGjgS3jhSD4j",
  "key15": "2trCL4Eg1MvJiccysBJJtHNd8PHr2faJGf81SCcwxxz4q1QwsYX6Sbwx1zms9kzGkZfiKUzD7n73EqNk8UMyzBHt",
  "key16": "BQ4KFKyfTgKDRPZM7bwArgrMPmreFuPLykQHNoJitM5WVPAaunGb8zuetp95xd2qhEUsredY1MnGSjLBtQTRDSD",
  "key17": "MBTuUYJNDhosNhrwWBF22LmVV2dRMGVJJtwecwkbF9iNDurajj8PmXzh7pcnvz6bcwQ7jYpfa9eMNwGivRm4LZF",
  "key18": "3KnVpCYpkW2hN5xMw14Ce6ufBr1UPExDUnJc9aTtzLpZKiFsbiubKvbVv7o9jGWrCwNWs1v963SCjkaAqfrguC7C",
  "key19": "63dr46HxNRwsgxMHsGitWSrFq3t1k4Jg2udn37zq2tDpe1him19VCzVTYFRjRGYhi1smGvEoK9rgs5zeaDmwVDR4",
  "key20": "5Hw5wPNmwtSXSHKRhaVZHaeqfDz6zJVHj1Cc1mp4PFc4sEzAawfrSYBAEcjqSnkkNGbfX46do5SBuezvpj4aLBCw",
  "key21": "2S2PksVm1Q947nd5PzgZoxzdMKHiZb9Y3Nv55STLv6XvB7JTbP3dkBWdfw2ct5GBYw3oncUHjkzRfvBhBJsNgDV9",
  "key22": "59RzUCnN2xC8aq1cZ1JDh6S68Ry3K1fK6WQzdZiwaxbUwJ3a9Zs9zbex2UwRAkgJvYUYVrF58jjfynZLTqLEf5zv",
  "key23": "3B3BwhcB3ARgNobZ9KYAJWcPLNJ3U1exkyrBiuwiuUmJijJzfQZT8inz3BcvQiqq3hmpTosU2qmYfDqF6wv3B1ag",
  "key24": "pRqaUtYcg3pXsRuW6w2j3SzsqUKBiWrSiWB5VxCwHJdCcDvQGExexqnB8CYMzx4EDY5Gzm8UnHSPHYMnWUjES8o",
  "key25": "txzxwasVRNcWdrH92B3FpdefK8UvjTs7NK6RjzFV7jt4C8kpat3CBaxLiapzp7RBfamb5E5UJpg3VQxYeWZ86c1",
  "key26": "2PjxW14RAP2LJ7fFjroTwHMCjSws787yuhRsLrrZhT6GtRpxEQbuGziniozuyLNHDuMQACQzEp3Lm3ZzYMDgo9gq",
  "key27": "3BKd31o9akZtVQ4WprJUQoJ6PHQ33wRDv9BYwn5t4zVqRu93yWacJFwKdnULshLbWci9yg6vbgQ4x3bHb7Moyres",
  "key28": "4fgfdfqzwGWufk8Fd5jVcNFhmrFtAPAS5sYJBtmqDj3kwtSyuwrZJqRGiw6rXStuWJLrgsCayR2a4TpYP91RYAbV",
  "key29": "3DskyvCyLreFj1qw9udnMoh9WYhDA828uz6yyDw1RzWGHG2LdYf34ykEtjd9zf4L5T6P8n6Lzo6vPy5VbEehtzk7",
  "key30": "4ikxmwZjT9MBu3PxvuBEn61tdiucwsb8rzfbwc3vwp1Qnckc1c4CoLAKqkhYysQSVVNNwTd3oCyF4MTJ5vvnTak",
  "key31": "26Zuz24ocbNg4m2ix94y7eUB9Gy2NjtNQUN5qacGTJkBDBBAaQ628aWd22FH13QNUvNv6wSZ5x8XRHgPsrA8d9HV",
  "key32": "2oUxbVgypQCJJVeJp7bes737nc19zYrhkGcq216VM1YMxYsLvEogSEsi346ZHdENgJmHs6LEKsY7rgbkBDgZyiyC",
  "key33": "5BeKqHhcssEesAcgapebBMxnEGdKeudDpjBZoQvjGZvvBW7Ndi2eU2UYRKUbDq8sis7hst55e3qvSMgfa8wmUZKo",
  "key34": "5XWSBqCZd12CvhG2baFJUdmvcH825j1Af5f7ZDAx5tDF6bUgnhda3H7RSStHbPXBh7oz7pdsBky4Xxc9488Vfa9P",
  "key35": "3kdVGq6kuNZ2oNz57oYSL2Wjc5ge1bUfatmTocPn3mwpsTMobYk4SvgTEPjF3gDndKBVKiG6DTKhNrRF7A1GJoth"
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
