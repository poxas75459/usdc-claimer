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
    "38K5Ekvh6nj1nXyrT6V4h35zD44U5MdxDtfKZHTjREJov9rZf7FtkyaJR1xc9gLEk5TsMm1Zkw3PHJR1vPRY5HKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Y2oqfQ5uHygp3yB9QW41EAdyTPpaqEzYs3vkSbmGym1E6zCRaD4tSnMQsxVqid48mzoH99Zc6WcGEpYBE6tp75",
  "key1": "2tsoWecCEzfZXZxBBWBPGUb1Qqvy4T7AxG1aHLUEFG2xKE4v2RGbSn5osA2n4G9jYwbbszNhofG5vHxWg419T43f",
  "key2": "5HmcaJzCAx1NkMwZsCJmVdbQw2edFZc6vCDvSfDoQ9iidNsWrBmpto6GfarNi9zFGBWhC3euoyxngfbPd38sgxQv",
  "key3": "j1L65xnkJ9vLLJdGZVw458Q1hNy4ebQYgDo3aGV44CrM4c2FLkRRPjbgc7Fypq16m9rK2ncnQ3mUCGYp6MA5r4n",
  "key4": "5qx11QobfwNUdJXzEijNToWrMfrZxo5a7i1FUVCgeHkMAJz185UEzvsKsadfXyScYDLu5iTJCVsjvHAaKfgCGxnQ",
  "key5": "4i7pDuLJdwWP7febFamfakPTQHooyYXZmwMfcAWqZ77y9QFom5oCDGyz7ffUBZ7v92Uvq1kT2Gb4nrYVMQMrC6nL",
  "key6": "4fH2oKnJZmcPXXmiYjEztzdQ3fA3Tu8ETfbWGfSPu9V3SF9QL7duKduSVkNrBkPeQuADausXKPpLFoaVFYzGaWDD",
  "key7": "59cELgKZqC92BZMqE4RzEUuCrpgNnzXaoBzBJNoZMj5ExM5cngB6LPkn5r56zEge9fRrdHJnB6kHJNGH7pFKynBY",
  "key8": "8i6WJgUs3rcXPXoSD2GhfJFuchEcDb1UubxwNnaheWCwJ5d9PS8bB7X42dzuRP24PXcKzR2MjhbCSXGRe3fwHru",
  "key9": "4YroSo8y37BQGd1BNVYmoFSGZ3JKrVzND4VcvvY9JyBwv5qVSMEm71rT3LfNdNwv47FUhzv63pkJxvLx26kFtzA7",
  "key10": "2S6cN4KAtPo4WETQvx3Tj4zKgAjuitzNk7SixQzqF51HxmgnZJp4tEcANQH4fiFgZoovcqBVCrvzWaKhrUPd8JkV",
  "key11": "61RC8Yr3nsRHaM1MNxDf6cnUw5mPebGFe8JJYZEdTXg8CkE8krhaXNquKVUifkp3tZVFYonUtQFPHV5SdhoQi2Pu",
  "key12": "3L3PxmQs34kQ9oyhAcqXVhRZt4SrFcJq8SQJSxqvZ53qyFNrpa5ijKSk2oeibbArdLAYGVpizGgbdgofD1x6L2sD",
  "key13": "54YKuegRXQspwfSCEW4Pphu45RpAVDZYx3NmbFVDFrSxfssyVreSv9cbVAtEeJnxnU8EdgAEUEDJmTHWjDAyzThr",
  "key14": "658C6sqMamwgayRCoYBneg38ATfVcfz8fsZVq71JoWmkJW7A9eChewwEkaKVU4wnM2VrvrUNTXmDmkcrxRAV6AM8",
  "key15": "eBtUxPVYunPBfJYc87ySGnFetqjuCP7SiKzwCUL8PW2ony8jH5Hy22gHu8w1LQ2VjeSn5kajhtEWFywB66qJcpj",
  "key16": "61VS9reeEUirUQnfS7m3rt12qkofgrGSi8KyFvV6u4q6raYKf7isd91MGK5JUVBC3zrAnZY5BdYRBDJBiyWtKd63",
  "key17": "4ZZ2xK12GFuQEV17NJ9kK8uWXpuL6FfssrvVY27cXCQKTeMnWfDaMDenGCBw7KXtSy4DLx1JP9KiJhuXHExHZGnw",
  "key18": "4muJJv2dXYM7kVofeYUh6YTd5rB6aogzUYK1jpo5824BB1Dk3DsLcxX2g9EiUoQ6AzpuWhEeHBPdtqPDzDDNsHrJ",
  "key19": "4xwAp2gyz4xmUF9ffbaz1tsznio5NrmvbspRMH2sibMRWZgdHZ9y2XAcGRzGCpHno5Jv5bgDUQpM7vLehB2qo9Pz",
  "key20": "2jgKUniE4b2UVqwbyQSdCAALrj9pqkRefQKbpdwd2jobeFT4y751aqiJckJz17AnghN86EXThVoJguMtcLi4HvLN",
  "key21": "36RAN6yDE9w82yevh8EUCJCtwox5HGbfSR5bWrPcNtwS9GwRBGb15zcnge6xtZLXwDySDoiVHYUuiWvYu62TefAz",
  "key22": "2RGbM4KDcWA5HB9ob4JFtNM9Zpro4p4Tu2SLtxULayck1MGzV5yToat5dv5VRZixgJW96KM45tBAQT9oYWumdWFv",
  "key23": "4zXhcDoFW2ScN3YuX4SG9rTJP4cQWFAdhT3Lnzdb6Mm64Pcscqk6NK4gKR2wuSHJagWNax7tPFpCTiodxpQpwVhk",
  "key24": "317NG7gjvjfkXuvjaVyEv3xNC8VcTqaPxXcd6C7ar22mrroxCMkU9rkDJ6zJZWagxMRsW21Zqva44eqgk8hnfyvZ",
  "key25": "4PvnmvrzJ4shK3dhT6qqgPnxkMim2GZyfpcFRnvSB9yi8MYVp3cjTsqAsiwbABj6mkqcVWNknHjFaQRSTdMCNAj4",
  "key26": "2x4EWgGKRz39GHfFnKJWDkBCh7PaEWia5LzB4grTAXuEoyBFQXtp4LUvmfJnWDv9ao6xyq4MwJMMrxn7K9TRjmFa",
  "key27": "2qCBfp4T95Nxr2eL1aNQMS4YpkKCqfQhkq5gDmZjMMveaCzvz4Kp5JBigfkTZLfDEyng9e6gv9GtgxjUnBs74BiR",
  "key28": "5ZRbrV73G9hm955PX1AkBN59EPKAbYhUF5kGFSze3NUoxCCcLq32FVk5coQMMJUMv6m3uiDxFWX4hrddVNZpTaGt",
  "key29": "QXNPn5ycNuXWFo59bfv3JgHyfkbFPLCQKzq86PP1zVRxRbFLMCvBUFmCZTYPn6gFUSawCAKcyNmtqy6HZj3nmp5",
  "key30": "AGrgv1kL2F2pjv8ph6a3bABxG3WzKUWRHEXZfqjZ1Ca7VhHEvtpXcxxw5CdU5AtKjDZ6pifedUHnXpKFBEhEQub",
  "key31": "NqK8mED41EnytJHi7K7ppQXiVpcUU41oKK4aiTTifyqoy2bovdKdeZS6Yataxvy4YvLgsoyM6nFeAtv6dj8Vc4s",
  "key32": "45WXdXZriNZp3Ybv4AL1wAG9TpCHAtRTrDVTbVQcUo6RiAYAqdNsiGQvXitiEkJQmjunX6mGgM9ZotBu8Dm4hQcP",
  "key33": "5j8pE9dgNzifwRk88cdRXyvw2QCw9LXuPTvm1JPK8hjHJnEtqDHn4Gv6AqhFNUyMmzwmgpehUBcmfiZWP2zk3Vw",
  "key34": "3ZD5fFzbWtjjZWPPmDTvQtKrRb37GyLFuaTQagikgH9LD6v3PXR9sQFaYZFmhKUoRJZeiVbYxySA7T1UhfoNUQXF",
  "key35": "5y5CZJa8CmqhUdXn6uxrWseYdc19LXNsnnkPLqvtjDCDaSw5RLd5mde576XgRpGjNFdQ4fGxT9LHqtRHk1iq238A",
  "key36": "2zsoX4Ury116SNBYr5A1WzJxZH8zRDUSZqr8YrnLp94KQmaxKsgZQcr2o8ix7LVwwXniQjdx5SZ6gpBt5WWc835j",
  "key37": "3gzFaDhHMs47h1o4it2E3XXxtWSH5iT8u4trzxiBF4YBb8P9zymS95iUPCxuTTAjWkxQpyodBcpg4o6QhYSKaGn2",
  "key38": "65vZExVkfuZLmJGxYJcCF5xonYeAaAwTgFJf9aS7t2QPLnXAxqRsswjmAENhv2YcXMghugj5WocHRsZoiVXgK2kE",
  "key39": "5RLSTVSP2Gmzf4j1ydcG2con6gp4au13PaCLerN4v1GTUuHTs8FRuPAvtqnE34GvkdyheAe4ReGxAdrp4xxubGQZ",
  "key40": "4rq1STfURshrRuaE1CNvneadUEy2GddZAaDZPitKVBdhiCKSRqNsFVPR6cg6NC7V8Bc1zv3mAYw3xCRUe7vhkWPV",
  "key41": "4AcdgvEAZisry4NtH3rwtw4SnFSEfoYoHyXUrNGRqxcjf1t5A4c5Pkuc4bYEw8LWKiA8goaZSby8BHwfvmMrdA3Z",
  "key42": "5eEKVGPyygat8fqknwpkUo9JECv3i4pcQtkt9DLhrf3GEwgGVArzaUBi6tGwmmJHzXhGz1BHAF9BDEcEzgbRJE89",
  "key43": "dnh95ZjgHzqUEA6LueBaUgquswE1pP4jovtGrhpzLk2Bc2N5t9SE56vW2iqtZvfgRcexZQ9e34WLJm596q32yXJ",
  "key44": "5NvgRB9yCvKGQk5CXtHZSGNJFqtAKYJdTUqoeLWJfyyr7ZexXDzUSLJjxbFkjmUdF452xdCDCkkLXP4nwDVdhFfk",
  "key45": "5tZUwXF5XKm5uXpcT47wW8BwmFnhEDF1Hu6PxNrEAJ25Hqz6abL2hAyiPRdkzx2i3wc5QPejypN5ZhjQRvVqL6rN",
  "key46": "3vhWM4HjbcEAcSRBMV3YPQUnqYvgSEZhKP6tpkuTgVg3qk5kApHaQokG1dUnpBSg3avjPHuadGQMgTeUKwwiwMAZ"
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
