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
    "2FS9dmst7zSWL3FmFEjJUamHW3HnqTtT95djGQGw3vbiFeDF9Z4Ccivwp7orDYtRi4ajyb5s5rFTkB4LWHQS4p5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "273EezkkpbKk8WFj2tz3Y1az1CvmbYMV8Pu7EbDw4JBz4C1qL3UcvBz9jWGsfUdNXcVZR3ztGvfnuXr5B2XsSpoa",
  "key1": "5cddyrdFu2w7X7GLZJDuUDDGW6UD3qqZtLRjJ7tqaZhdv9WtTN9xD9VKjMD54YiTGKMfCK6oCMXQ2yVsJtkwH2a2",
  "key2": "2Fj6L5rutyUX1woAHyo38U7VeZ78qYYLdAdn3fdth1HnudQrjpQ55CTKPiAMMCCmJXMTtXWndqEN7JZpUK81ekwi",
  "key3": "5aQtbqB7kVZ5kqY4jatXtwNREips3dUjpkLqsJQE8FagQmSv4SbQ658U9ZHST7Hmva2s3fUmsoX4wZnu8sGnugxq",
  "key4": "5zEfhgWUpnWA4zkVjhJWSfJBZdmH96M788ei4dwKb4ysSh9dn28X6dEwT5eXyYuFxi5X2E5WFJ67UR8eQXZkQbfn",
  "key5": "5o5dbLHpUjkXwsdvUD75c6dNpbQvmmR3dyEp91N2Pw92MjSHoMcDGNvgXKq6xG1k7V35o15sBSn1AwRWshg1QC7G",
  "key6": "62sCrbJvYxQj2JjVXCCBAAZTrFJRmoftkkp1UW9WL8AnqCVZRsRLy6UH6h7x9J6NZxWd2s9ZvNS5htN5KmeybAiW",
  "key7": "3AVtLxKu3jhVZfKjUSjvgSndypQiKDsTJACLmZTevhhPUNkdP2zuX76w1B4xJbcwNzRLJCctfopFnsKgrcguyhHX",
  "key8": "2WhZ5eqbkpbgZBhAj7YS4QArYY7HXAkewWD6zGbKT886frDaHH4GUHHTb1R3FDtS18LA6akC75dcCRhkwZEEGLhR",
  "key9": "xXYGmZGCsHog2KGZMGtABjshQUuzoVQcxDqM1sxprtHqeASHijq5UZhaAgxBV4nRGrMfPWJBLg4aeeZQXNoCVD4",
  "key10": "xYDitFMzBuwoWNvynT31TFrK8cYyCyBRzCzYws1uVYaSeDVSooKJQSK5ZeoZg359pttfbApBBhUuTuLn16gxKSX",
  "key11": "5LkzGADjzc4YX7pBvrJRoQK5jtzeiikhoms3XmskVH6nT3bR8ggNitMshwe2mtQoE7H4pcdhe32tQhnK3FfCn2AU",
  "key12": "3gUBzX3hEQWfywEywBKrHsEGih2GaP1qRdahjt7kf7HefoKR8WYFH4YZ2kPEN2ZjR6s4hk3f2PXQs46BRDoTSZVQ",
  "key13": "666VS1nw8NswcykFbHPBWrjP8YeJkQryeZPxSjkNF5V2qoBTDUZTsa6cqSV53S9pwp9Yz2dgMd8R4KmT1RYm7WPs",
  "key14": "P1tkPzsdjBm9THZ3Mi48XNnqVeHG6bmSX2gND3WgioVBrnm5cCDAevFEJTy5By6AGmY56rAX5egp1vFb2eF97zk",
  "key15": "2mDSjQsP5dadaXHxTjFaVanJKPasKjZ8UUGztmoV1MD9jR6yGn8L5s5gDNCJ8KBKu43wtZ6SjArizsaAAzuHqcEV",
  "key16": "49sZT8bXX1NWRY2jQCHrQFhbFsLd4ktcWfKGsNu7zouF4sB3EKgYQPfHwcDWphredDDb7oDnzTQJTkXWp1MSpR7T",
  "key17": "3oE7DCrr5V8TZqNNfhaNBEgiLJ97c6VGBMDt4L65aWzbxAaHBFMWSCRPXMLZXwKJ2Bb3X4KhpzDsEnBJK91jGX8i",
  "key18": "4sJR3PoAgd8cZPApqvhF6jmC8PiaBNPbDv93xQSeLNea5f6QidhAQzWZH5cEwmKhdC6foHfv5DfcU8fbXmgdkj2k",
  "key19": "HpohE97zuPH8gmLemMQ1jqCBMhVCw8aVTq4JERFnpq2kJBS45b1o16G758aoRKSKzLuxZri9Zw9hbkd7hwVuW1U",
  "key20": "5Zgj6d3foLaee1PUpVxJYAGLRqoDAe3mbD6UyWEf1REJDmHSvmGFd6jNXiuRU9kmEjyo3Xgic43m4pHpE89by1mS",
  "key21": "48ZYmp4kCakduZChm5f1zy5VWv3YWKRsaww4gjB9uHhNURQ2ecmvu1nxrG4oGmdNqvuHQ4aY2JfKpHUtcC3oLCeW",
  "key22": "2R6fGA8hMSLm3Fm9Xo8qwN2zBUQkQvnXjzVgPNRn7baE988StMi4rquC9h5b5YGFmYRtU9USAPt3VimfCAwGrrZD",
  "key23": "5tdjHrd9xdXM3M28mT7MSgaUAGihi2iSWfY4QZHts35oWKjg9hD3iKVqsXpvxtRfmwoLgWyzEAH78Yv74S7zx6hS",
  "key24": "4h4sYZ5kZ4YHL5QDoKfgC2vHXHmRTgEcHA3G1vJFTBYQeqbDiUyAJUx6Ln5LwML3kQrzjP9iJ8zNLKTb4zKAQnXf",
  "key25": "K3YvA6WWrMU8sF3Ys8xXgehLjbJcRHoqx6cmxN1mDK2Rj7LRRp6J9zLf3S3t2WdT1NXhvH1dXZMp9vpn7wYZJEQ",
  "key26": "59s85QW4LkyHbJNAr8VMKdeVan5WrhTpb5TAgQfJLeyuTkH8VmHifEeZ9LLbVXvThN6nPMhqASRigsRH7iv6Z9y7",
  "key27": "4JLpaFzmBZEJvpU4K7usXyS1foNpGnA42jT1HQN3ec7ihAiVRLpYzmysxQwLtuQZRtPARiEHs32HGw4Dfu6k11xz",
  "key28": "4yYUdF8Ptqjnyez6XUKRKxz4JZkrG87SPyBJeDGhB7x6QJPoPM1s3V8Qxn4BWZJfhb7HWSke61qaKSTi157L2u5h",
  "key29": "66RzchnYrdQuZ7PTsGbtGW1hVNKgbLBsiVqL7HHVTYwnmnX8LaK6Xare6wZxGrbbSCHM56ywLeCMEoEqZCqhpRSM",
  "key30": "4Kj2GoRboLxZ53frXkaoBVNX4SnKQihaVd2ZC3shZuyUh8BacKexexcuz3KHPP5w1voH3J44Etva69w2jYP2e57z",
  "key31": "445CNKBq7VGNBwGcCwEBC5WEBssC2X3ZWdYotajgZyb1n3CTUENJKtY3eP9YbmtmTvqeM2gCCxPX4XmS9GJRsrEP",
  "key32": "3jf5QuJM9jiTyxsBjheRnF687LKdUpszLeAyJxLuKddhPFyRtvXUiNsux24878vhu6fRZfz78LEKEERDABEX6TVF",
  "key33": "5FkyRHfs2jt59NutwL97SDNSouFQuANWLb1gnEcHv56z1RGDpRmhZjbtpb32TjDNS7G9aCrdRD9Lhcru1vbj7118",
  "key34": "3UuMdQq733JzrSRywpYAYgXkz5EfrVE5YAtzzLm3KQkgk4wDMHGuB6W91ZHxoeiRspZBnwcF91D9ksChpd5tJmwX",
  "key35": "3cETtNqBXmXLNkkXgxnFku46Potsbw8wCzcDw79SB1e8hwmDS3kXtpgEHthYMF7s4ALzeNMELNdy7771iiyqkfAA",
  "key36": "aqCcqqdeeQsDsZGSM8oL6zpot9vw8Pi5RSJAsJECXw9CMyA3YQBVPu2HoHRUyN2fdXSbvwoh3XNHY7WmqcvFWR4",
  "key37": "4C2oK8QE6fii7TAcs5ACgaHRZ9SJwnZhMzS7BXzXpwn52yMhvF7D6nYrDYLx61Pwy7CZDHbxTCf8FWLoFDW2iVdy",
  "key38": "9wXExBrVQmgKhg7CZbJzvJn8G6QR2ckwJnTd1nvye7x9fX9eKWgnS8HFcAMB6UNyQhue7mTfxQxz57yox1i366A",
  "key39": "2airVBDQFvxzDP8c6ZX4Q6SdouuEnEisk31g1or2B9hz11Pr5joCiFfraY4diFFj2mQEw64BwEDhgqw7m51Ms3pS",
  "key40": "2iqnkCdTf6QH66a6T5z1FpESJBcXW7xpHnv1BobDdSrbjYkfvLsKMKqseHTg9yrXaie673aJRpVABzQQ44qdDyp",
  "key41": "4kxCFyiycwZdYAZiMEivRe2XdP9vpEfX75fu1cenXCgKm1qxjnQ9wNJmm56rsoCe5WDfWrqXn9XBhuW6NFXuJdF3",
  "key42": "3yeV7SiQwXK3Fbqgo2R5SLjCyccvZzTgXStboagMeKzJ7WT4sAYJmxRJUcdJ1kaCEUJvhyLc8MFwaaQ8q5WYqNkM"
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
