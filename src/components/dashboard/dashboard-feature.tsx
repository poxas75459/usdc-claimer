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
    "3v3zFZCY9QMREWYkAwtKJ8kQNXmyUfWz2WW8yupxPs1yoQWNPSSix2W3gtz6XdMGNuLfbfct1UqJMzCxySJY7je4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328EX2k6dFBu6N7Fs4akdNSarb9NEGk2qA6L2UG3kDt2JEQ12pwzcXppWWAMDNsZAfugyyaDgFYU4wf9EdjGXZfZ",
  "key1": "2jTgJbtbByswtpr6j9pBv78uhi8KicN3NygT2cXobVCj3URvzxdesZfzG1Jipt3vhdKx4g3xPfocWtnysCKjLT6j",
  "key2": "3D5m8zEgkGPXauP3BeQVNWJtsNNN8Uzxu3LDY2EPzJjpkGpLFFmKbq2PXNVvzTq5S8q9g5xCXmCF5JdRKvsj32Ad",
  "key3": "PnpDMaUAaDw3LXPemPUdmqg5b8Hx7BTZytLxJyoXAz3TUfGrhRer7zQSGwJB1dtdSxpxxk5hfopmTnVek1oEqae",
  "key4": "UjYS7qoRhzQxj72JY2Ljawf8SwjHw2G6HSxtKureeVjDA5okMhHdHAxZmWnnux9QF7VMrUS2vN9sdYXsGX22deH",
  "key5": "3rDnFBecp84bYnGxr2mmeVpecBuBjoej4AhBCKX3TebVqjwEvqVpW1BroMnFQgY9cQ57QQ4pdPzAWkE6Z7oh6jVq",
  "key6": "36KNbwzxuSXcByNxSfBHZgNpXdnBNThjY45FZ3AgkeFrXxhUCjdWJCTeC62S1avgGMeNLo3NGc8SLrxsogM7pHRw",
  "key7": "4rLwcRrzRYup7wWKustVMo4MhCT9jkZa5MMJnrkMTJKLHs5MNhmc1kUJDiKNfA9sG9ZgNber9qbFc7Bp1wERKg2Y",
  "key8": "3FU1Uwaso7DqvU25pvbEuyXjZquc2VKEzGiABBRpaeincQJJARBpCG3HaHf4TWTsu24KrizyaS5GTQu8rV8wuC3s",
  "key9": "2QGY62AKRAqVDciKbMrgvzhj7XuneqKMn5W6XGUm4fhwtg4ysWb97aiGrarNe1nTuNEF93wQCCDKt6HW2ibV318j",
  "key10": "29Hid31TQnoqkrQCvDqAXtGkHKGBKo4qeAA8rkNf3wDdLery4btWVXZN1YDowq7sQ2kAXpugUtViVeH23WUxX92r",
  "key11": "4r3GjssuGYeuUqoeoZB1cSsaZARGb6GHdQvTBHkbshoXwPUJGGiCdxcnBj2uVCmK8qk817ngmXcUhNK7FBK68vYJ",
  "key12": "2DruSt5b5JQvNkzhptw1FHNaJJbrdSYQQqX16QBXUznojZnXrjSFVWk3WLZMJfa5GHaNZNxC5FGCG2a7jgyF91Tc",
  "key13": "cZT7K7DnQsfQgusayxXWmeYwfZSrkG7zp1zk9shgYUPh1ZmHaZZe5VrxzRyiojbeQf6qS6wKNNewjSiX2MNQkCq",
  "key14": "5mNtDLvYEtUEDoLwMssT77cP6vYXbDz4Baa4UaYyz5EPL5Ae6p2tTNnVxgXFcLjTLw9hq8Mzwj3P4voBryYZBAZJ",
  "key15": "47vvyvcJXt8FMoeDd2LydpvByAZGv8DczZmxjHrMV5rQ2f1EWBxST556vk1ntq4eVqbj7jVCZPVCKJDts6KwVLNv",
  "key16": "3BsCKenXJ4ba12gZEwhGFkKCB8wbr73h1xn4tFyYkXNVBsejQEgWPySVns8K22JvGuUTCF65xFoCFfTGY2ZPgRu6",
  "key17": "42BRkTRQKAwb7sSSgVLALUhiUS3aZnfVEkrtwZooYG2xHeifRoH4bT5XNapA47VXJHkve8D6XuU5f8LimNQkZdU4",
  "key18": "3S31FmbefFAMp4Ewi339KbFbBvfjXg38J4eSbK6EUnLbMeWqNoT3wdNKRrB7iWSV5x31vq14R2ySpvwXEyhvZKHH",
  "key19": "m9byWn6rUVgKzZkXiSE9MCuCUZHBWdEnDKmsfofbVoQVHyrJciUSa99PwL1YBP26TBJoGYYqsgNwsbjAFaQRXad",
  "key20": "2DGAELjeguKsPRoymmwS1KWmPPMaX6c9UFKBE6FavAX91KjvEPjmBoNj9UpgdpEozBV25VZZZ8xSSYzdqxid9FMc",
  "key21": "4aDiVtax4TpZo4pW1ZZwUhxJkx1itDqmYWsYuu4Zz9YZxs5pzcSJgmiLBP7rZ8bZZKiHsjSMTyAHeyPiKAhp7oyb",
  "key22": "4mLPyL8mTVFA9LCxNaMN6YXBteBZ4DXVkaCRQceb6w8pRCKyka9AGJqGvjbVhW3S3YSPYBuMTxg3fPgZuaBXd718",
  "key23": "JDCEe1knrbHxRqTDUPsYW5hTtFw3QYaEaYARuFkvToTHmxTuCtvCfaxCbX4ZH1R7zt4jYVAUUj8EwTLdTUoQ1PC",
  "key24": "3vKFSzLrn3mB9o9FNWNpfPXkw9vGGZSQRH7TT2tQTW9vZf5tB4pcd4b8FmrtT99NYJiL91fC59W1FQ91v7cEXids",
  "key25": "5gr2RQH21VqEf5yLFjJyU4grwiaJuJ2S8b5EAA7hfb4kncDV6iWZivAurkLasAPonhk4LzQ1qfdrb2nKTiSF8SG7",
  "key26": "43UhFGz7rH4nEuQsxSD3XCGrWjijH2DC8tfznJ9KrcDjhvz7mmVfEWYo3Y9gsZdBLKNS67rPvjghybEZ8FPBxuNk",
  "key27": "4XkwNUVDgJikq3zaMxu4VLewwGrNSnw6CwTstfatBuc6hWdXx8qdMyQfX438C1FphrksbvsPy1vr125582RbBoHj",
  "key28": "28a9cBnERHZnSJQWAx3jHUfbAiq4Ng94jnUTQviBbx7S226RNZM9R7uitE5Lit24SwUXxcxRYVa33F2HXfs1FamA",
  "key29": "5AKXiC6gfpv2ZoXoPjvcHhYwMmeJELsF6DR5g4GSrf9GesnqxcjZ2cso6a5Luc4QfbcfM7j26tZ3PwycYh7PnQ9j",
  "key30": "oWu39cqvGv4dScW2rBNGYhnwh3QczbeeFSDkAAuuUzyYoq9EW8QKSaXdkDCsCL7UiRx4jP7bhsGZRQgTCTRNUnT",
  "key31": "hvRF2h9esLaxgR7v2GjeyP6JQ8V3Q8RUcHwATmZ2DDZpdC8Gj9X5DU56gmtrqhDRZK7KQGwJdpYmf3ahnq212Vv",
  "key32": "kPMqbynirCey8GsX7AFsngSQse9eNW51hwGyTYDyDmZ2jAaAezMTVP3ypRikgvhNpYtNqXFusPbw2haJZQfkfSJ",
  "key33": "59fvX6FW4s3yV36Zu79K6TnEy3UARn5dj4Fv3zs9E4FFeiFRGEoX83uBL5bxWaCCpAf8vAonYQ4ciEAEronbNd6r",
  "key34": "5ZdasD5SnRs2iQNfkCB4XXhNpjpeqapgJCCv2iHEGAra7wSTVxQjmiFMrfPAuZvaKJrE7F4zcPAkG6WboDQLdRt",
  "key35": "3fL66V7TSMNnkCLW1tQcUDZwbmcefaeRj67e2ZHMrnFYUct1KH33DnpHbbmUC8U9bPHgpTzdwGEqFNnQwVRCnqJW",
  "key36": "2zoLC1JdkR9j1nWJKFmcC78jPfFA6NgUxe21BMTnGHC4bbXcHk7ecAMP3fexNnapgVBn5SozSJ7nGP7eaZhaBKVd",
  "key37": "28jxXUciwVK6zqP7gTsEeZ26vWpPSatqMFmS6QnoYyerFYRg6mGL4HCEccge98JWzr6m58dTQhGbTgiprASt5rgM",
  "key38": "2jwmSbFH3bW9QLmfayg6kqenAMZ7guZVVrTXm2YfSZkbUKX9wdcLPJZipDpuWg8NFsBSVmTRGq84xq32DKq2AirB",
  "key39": "3VMjuH4zm4ix3kUJYLb2yHj5oxsnhgKc1HtUsXKhnEGjkvqSexKnLT5st1CNbSgKixh68bfRCCEwCAVEVPMvCE2A",
  "key40": "4xecjbaBo3RL8i2jiRpcXUxbUgW2URe31F3UzmGRHHtKDWnBuVCQcXCyWb6NtagrbLNy3yfKT5n9Q4q55r9TpN1K",
  "key41": "PnTFWkWWHkLs5XrdGGvBnaiYLQMaL6orgchDtvSmUMZnokU4aXprD8VpghXv38EQ2ZJRegs23Munn5FjAcTCMeX",
  "key42": "33qqg8vzhiP6An6giefNuSomLTQvaHYL7bLaWN6BfGGnSFjdDSrbSpdsL5mqrqf91JC7MUFHTGp2YvhKbkYUxPw3",
  "key43": "5EqEHHUS6jyr1Yon8MwUzU2NHJpJQwmLg68esbGWH5KhGTosAKxcgT5YMdxTGCqgqXHn3mkaeF12xwmc2svx7nZ4",
  "key44": "4d1FD5KtkGgnxy9V67q6p3Fv8r85q3avfxJZ9J1LTKWGynFzc79M2v1XE3uRoZkZXUhdTgVutFxpTnuvNkKKyAi"
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
