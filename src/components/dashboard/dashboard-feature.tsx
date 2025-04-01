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
    "2Kbxm4Z7NHwK7cLHEaBCoredFgEaGqkrgoc3ZPJKG3VZCj3HS7iLxLk5XKscJ2rj1hX2f2SHuicRqw4ivRTqP7ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gb2ctSq2BRSVgW77ek6MEQWjQ1qDBaTSHkWo28pdGFPDZ5HcLsjgdxb2dCtQASnf1imzQbNzNZc8UNRDcT1U2wR",
  "key1": "3tkbmhZrGAx59fo4MrovFnfPfdBrQHRDyRmVDBQJxeE3Mz94H9DPxAZ1ML1Wt2gmfspZnnqwSSysxHYCNZPxJ1YJ",
  "key2": "2WiV8Q8W93gFyWspoXWGFuNFEX6vp3uNgvqYwLECcp5WUNCE6sgybHBuWuJoiYmXisKbNWwuJpsvkSdxHDZkagEB",
  "key3": "3N2kTLVi9L1yiLmDn8WGqjKVHHrvLxqTT68pZ9umyQsTJEBA7RAc87fdszhfJLGM24mbJngJ6QafH2XafUQGmBsF",
  "key4": "3v4QPseUeF2psNC3B8KaSzhW2uxnBGVFioRznjSRbGuAF7sU3h3MQLvVYuTm8uvX7psUEWNqteQMJJoaVmEJpNnV",
  "key5": "2o49FRkonp1MfuBkVKxqxZ1FpNfPcyHwNxWzZ4i4SpEeorPQVTsPEJVR1ZjVwNhLJ1AAHHuFMqqUrcuLHKB9j3AT",
  "key6": "4ZJ1uqYjUUoEJ9fH75vJcjrZAUV4QvomkujZzwnPT3qS2Y1cMDzyyPgG4F49dSmyZYah9NoYDCJRGDu8niWHFPHV",
  "key7": "3rXk1HMJSXwktd2gGP3fvhZSn3aAcJrzPwyZP5FUYo2naceceKesjFdCJq2W9tqHGBWoFVRQTK1XK6XM2wpYL4wa",
  "key8": "56jg4k2aCyscFw6X3SaYxnvuzNurmbR5n9kJjTFB1xyFCAyEJeQfWnxYqZzjNgqayVamReNpASFte2gwe46QHj4n",
  "key9": "wqbE9dFotEbzeyyA5Acz3SYxzFz9Z4c9yp3eNgNGact9sJ5c6qpH4FyLaqM6yQpCMfSmb813XceSoYxFKWbX7Nx",
  "key10": "48oLscLbwcE4JEEoidsxFtSmLe9FV66vVWvwJv3RAH9T5t6vUCSdxubVVnXeCPBKJzSn9P64FCGyAweoRiovfrGP",
  "key11": "4RfE71AgDx2PQsSA8buAPNpbrz7t7ZfV9aaHP1JtV2qCyQteVbuc3ZbUCtME37Ef88hDw9idxWVDoecnZbYJ1Gbo",
  "key12": "5i6E8ytcUBXgnGretKenDekYFXAutxJqqMaDfUDLBzJHkNA8BtDpRCG4thuQVShnk5CrhKfRzojrCNsmgctqNwXX",
  "key13": "36EVCWyuZZy1LAjdDQ1gkW6Nou9YtUEgzQqQ7uHdaS6CwMBcQjJeEnE5ishCqdWHBUKBUaNwiUUMzSRBUiJaQ5yy",
  "key14": "4MPY3A9RQawkLaFguKF1pw6ktAkAViQZqihPu6aQvGCmKeJo2omxVysMX9y1kFQmdLQA6gL27ujb7sX39inSjPwz",
  "key15": "4dLtjhJRBNZuiAo3bGjJPNyght5XSBTD1iHinUepYeJofgVaoTR2CJuTZvWeXxn9mKvFvPDchCgv6WRieDu8qhty",
  "key16": "41h58fvbokPesvrbhxLNFSEQMao6dgxGhvMsy2eRWmb2f5gsUjGZ93Jc13xfsa7JFNsWkQvmo7N29K2e2ngqqzoJ",
  "key17": "3RbdhqCGvMbk9haY1qBict17kXsoiWgoRKm8UDdfXAHDrEiunWxnHch1u79d9kjogPpgeoK8nD33PFQUKdk1guTm",
  "key18": "5y2uUQDSacbstadPd4VYpbpnqftuQTP9twX9ip3qLUdfWLR7GyiJ5cKRcz9nGSdbAU8fe5qfzCtvkRD7sjhekRqF",
  "key19": "2y7S5WPFP2oUz4oVGuY4VmPE252KavdtFGswQQ5sYT1hYitjUjyFDnD6voxSCZPs3WRyWCJuqvvv9Mekw49gfs7n",
  "key20": "d8inxVfpM9bU6jYcEajN4NikZW5uB4iVi2Jk9EDe21RdYcw2oh9Euf7DAhpoVExhLWEN58oPMApThGuTZSCqNGw",
  "key21": "3kvpiy5UKUzH7NAVQJUqQxfwzN4WYteDbersJQPxR9oVkAWdyLY53jXxhPh65pnymkzEbQsy6AcCa38cGZkVtbek",
  "key22": "4Eg6gQHwxiuXz5FGdtDsVSq5GV8siyP1Ywch1YkNZsSDGTxkoJSR7GQhf63X8j9DPaQcSxe8Pete5p3KBknbAQoe",
  "key23": "4dqyz4yzUiSsFZVxgh5DC3r1xhuXxgf1PJthw2cuSJgiWRymwnM83u7nZQeSneskZ8VuJ4q9Xz4o2WpgJZRbetZW",
  "key24": "5tkYtXHykaSqJhymuz2jc4iDHCGNURQSJeZWFhUsc7tfWYgXwxTmx4K3gauk2uUa5jQf2wQNfuF7Jhqw1dgYut4u",
  "key25": "2NyLnWL6PQ2DK1xuaruEYhTH6LkJt6FYwUaf3qsqav2BFAnUsWq3NrodLRsMjJtsFbnDGkUn9af8dtPeYi7zex9R",
  "key26": "36njwWtAHCag1FtZ9yZhyeRpsbBDQreorRLgHj6KTXPtzsLVy2cE3oUjduLmyffDq2QDtaKGRwsJ3zgoTy4zEcDt",
  "key27": "4JU5zHVG9Qg7EUvceC8ywQcgohS31w3yTDZ75DgJDsTSHKG7rNjAP6cckoz5T23g77GCmUdfvXipd6i8dFLkmiQp",
  "key28": "3ANAeuUk8hEG1iBHupapR6B5zoyqGUB8AvtjdStKyMvxjuRYLkkwrC4yin6T7gie96rqCc4ZbyG8SCGvVeujukoy",
  "key29": "6446XEJvoUdij8HU5sRzHjHvHKw1Vz1drHYayHA5DgJK7ZSq2Zxro2P2n11PMfdwrmAj4JJeLeGw6NmNTXAAF1i8",
  "key30": "5q2K7BF7PdUAKxwqkZsF6DsMLchAak6v4pYJXeXDSduZ4uReHNZiGYDxc1uBKvKLYeDGSUhzci6mqEK3dvMvBjXL",
  "key31": "4zrNmomUH37SPYeDRAkf4DpgTf5V6EyWhSQ3fXaejciRgMXBHSSh9CdcpXAm7WPVR42kzbMqNhWucVejThVv5uqu",
  "key32": "cVzLuKENP7mqHquC91hsSxwYrwBdkKtYw7jyCjkSVm94CqmoarRXtdTSzxAvUgszdaDEEHmBGvvZYmMywp6mR2b",
  "key33": "24ADnjaffqD8H279Pi2gpivhDbmXUyQCQQqJ26zVqJStrkr78VkYjzjkyBR5Sm9rurCt8uQCfykURB1JTEhVRzZq",
  "key34": "65UWtELqn91uS64fuPa6ddRLQj4ZDhzCNVPrVWCSj3HwsWMDi1esiByC9RAiGbVkKayrDxK3bLy1WTnmapDuDeQd",
  "key35": "4nfj4JKLGzF54sHDd2jy5hvMzU5jqqZ9cJRkxqwjAWzBTgkdFhmKs25fsn9ZNZ3nqekaUdcc8kjppB9zT5QpvzwB",
  "key36": "5KEetCJ48urRrFJFNsQtWrzP9YqE7AieAuA1Xg4QsHnz43dcgwqqVfhAWidR6KBSrGEf9H5KJranmy6eFDrKdKYb",
  "key37": "g7nsBr8jAwm6zQnGhKNZw1gsC1Wp9hsnSJQAreWkf2kCqM4kUufBvw1NVA3DpBB27M31Sw9PjcM4UfERiYy7bTs",
  "key38": "23xtURmoAiL9x5hKSnmjMzD2ZXCB2xiSg9xxMrbzTf34sRmavEDbEoyH6wQHDKZnfCh97A73tQxpZGc23qobZaX5",
  "key39": "2cJANW7dxPYPWidEaHdfTKogq3XiF2Qb2MLZcHmiViLW7SFhYU9WCwBH5MsML6FXHmbKPv3nxHdTttkD5m6Y4299",
  "key40": "4fKCzwUAHHXAbWSzfHTPufxqrJyG2jqb8nXshpbk1XL4W2SDTSyxHVH8LqVnebtLvFAs5qsrwZG4j8BWMQheudz",
  "key41": "5QvWiWEi3cCFs6dwQBD22EjBba7anMThH9ZVeUpzSpxTWUg5B7SXM3BQ5PQRcmt1SMDHLUfRR3NHsvp3StHCMvTs",
  "key42": "316cic2xURrShtszqZ6jbcVXKBVkjbvi617GiCYf1kfpZFi6dnHN3zcUrhpggg3ASWG3JGvrBHEXENZKDwsWfymi"
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
