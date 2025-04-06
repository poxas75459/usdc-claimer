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
    "CVW7BMcTW8eFWetzPh1JodeD66RVPwqJt8AwVXJmkopYLhkDP36GXVMGVxwHmVi4k2uvg5D7GNuLxfZ9g5PZ6cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyQx5fBJNjWQ9heVMn4HCCTTu1y4aHSZKvs7uynfL6aC6vKfePK2F3eY7VafYFQiHNwwubkWaQMcNTf3Pk4iwMY",
  "key1": "54MkRDYr79MJBEDr6vSNPpG4Mnsk3AaujuhUjYLzGWYtGpLnY5nr54t7sbt5EWi2Yqgrqnhv49tDmPdtMoPN22S3",
  "key2": "2scZrbG6UzxZc6ymQcQ36uhnszShNtYivrpPTPgr1wC3KBRU8Bs6Eay5qFsXgchVV9FtdeYopQKoB9rnL5EYyWCe",
  "key3": "vfejuYfqtnuoEiZw1suVjPAjr82F1kHXeqZQpgtpp9Lfj4eueAqJEY5ErRyADkQ4rTBVtgSzFCPqDkwUVLPpdjE",
  "key4": "XVGcGc2AYMcCwFNz4iBq29SzW155yGqF5XtUNMvKXZ3yWHg6c3EFPpGSc777Cq9r3DBcoAZC9iG5mAfLeejNJDq",
  "key5": "ZGucvkBu3USD7CgYYF1UJffvnmBhZh7vEuhbdkJfvK1wfz5xHXa7bq7HAfhXVv2TfZKPdDPoR4xmvNeUtUNp3zz",
  "key6": "28EX7UMu24v1x62EJTtbBqJrUTGSQM6REbr8eUK2vdJ63EXtkSNE6DLi2QFvHfvmhRotbMohq6oS998PefHuXZJk",
  "key7": "3d4x2LXXk2MK9TCnBPi4aeH2mpS19RiyBFbDAGbzkyToAFvVZmNt2LhwsuexKBL4XzM2AegeTjFGVPD2jggch1o3",
  "key8": "5C6iNeZMzhg3Q5cQ3NRFrfeUWNjhTuoYmKfeL9vSepTM3DhF2w7nPvYUGRe9KgvswrLJHwLeEPzvirYCzc92gPe1",
  "key9": "5mMXkm3p48afdNHo3xSbmHbFGzUTBcTGsHnLV7ByWRtfwTRX6YMTj1Vi6D1YivnKemD2YL9CE1BquU6jyLzWML3J",
  "key10": "66ZNUNaDu3fh6vHkQzoEP72jtggZD6WUVET2QgqVp3PiqURRbpFZTfcqxBGPS7Zh5HdPzMeFQzySaYTkqXMXjSb8",
  "key11": "fTt5Epec4Bw4ukMrHcnmANH6phoTxh6XpB6zYmFwZSumFRjkV2RV5zaR7TCmyZyzViD4UTgzYauD5Vk5gM5m8DA",
  "key12": "3mmBaLHCR6Aaa82ieHrsxvXheTnWTfQaXDJJsQeZACBKX5SFGtrmQz8h4enxXgs93RQ8H2qD2LRtB95pECx9cJZH",
  "key13": "4r5qvbAEayvUgS6eF41HQEUr7LQKYa5mSaot4fDiJnknHYzq9oF159eN96sGUB9WkwjN1soK6vSEffQHrUuYsmQS",
  "key14": "2ohR86tskUZF8WrfxCm1YtmvxiT6BVhnE3Sv768P2NDqGggYq7aYAky71CqXc51BnnCnnKjhRhemChf24D72Yc1t",
  "key15": "gmkxytkfG6yVRQR8ZJZDLAGnfGT44iC3vzmKCctAAPRStWmzGSuo6MzZBePYfuyZvwGSkmJsTueK8HbKWYYAfqn",
  "key16": "4VA2P4foo5rpg9DNVCrdnkn9mafToHYr4jHg5KFwWpzKH9zDuoWjfC7pqa5uRauxiWwmkjXh23YXxS2D7BqUEf6Z",
  "key17": "2a8kCeoW5ZKSYPpgzhXAkDLGQbjpgUSNQBMxFDfhPLQDotXwJMvSpP2oNN7N2NoxXSRAucD63hVZoixAYDUuCYni",
  "key18": "3kcMk3PErSTYtr8EUCnJJR5ZhAYkU53T99GT6WuxwRruszBSW3fSEtynUWdVEszaYZYVFTXXf3kL5vXbhEssv8nP",
  "key19": "5Dc65gLmWtNqchUX67s7LJX8f8d62eaycL4kdfgqqL7Mygpe5KWc9zpapcuBDEkJYJRimmJPDJvX94JAj9rpuDAN",
  "key20": "4E6cGEh68LXGE9tXkopXjfiYovnfu4URPKuPLi4Yvd6ZGjHyRfsCmZ4rJz8uQ7LBSH1T7FZ1dM2UPDXfHZUPe1Ce",
  "key21": "2jEdqQPFvrqQPbyRZ6rryJSHCvX8NniKKakXEkrzYAm3TkHfVtds2XH5gTFZyqSdjZMRQGYH3NS1BQVneZeUfHPq",
  "key22": "SkMvw6T5krcTFDbHziy18nrEg6FX7UnxqPc8e9qp8BTfrMnYhtLuqQXDhHtgTKqx5v2Sp3zzFAhemtZgb8N4Zfn",
  "key23": "qMKmWDWQQSQHzUqb2ykfTYLhXnszWcUU8caMwuGquSkzMzG7e6UGRL74GUCc13FHRUc3tiXkrEUwM2wZkXHRWsm",
  "key24": "3EQZZUgMu91geFn5QQbddgxD13KNqreJjvpN1AV4hpFvB378Kh6hcGvciMKFYPSGoYmJYqEpdcUaaVsqFDJbbJbn",
  "key25": "3TNNVWyjjyLfkunCrBqBgLrdohqY4XH3k7arHMLKQuaXxvUs3LYCu2qCe6PjDeTaxs3AqCgcJLH3h3vKhb5SCANa",
  "key26": "5m6BL28guLA8rFExeCaDVa7mMiDGWpPsKNHraLTL3852US59gCatvG3UuwxByX63YPYwbacaTGtXY6xvoCWf2DhL",
  "key27": "3gjw2BDVxXjYdFJDNq4CQCmUHhTwfVfyhoua3romzJa68Zfvy3q3yXBDA1RWP9EdAucYLXWSrUthBTKTJ2i6naFQ",
  "key28": "65h28GCYd5NEbFZESmGk4jrg3Ubk16vWgYnfpTeP146daEZrRxWK7eeqt3tFQqZBnmcUhEmD4Wqq8UtymEpghR3R",
  "key29": "5e4kynCQMEkpGWWZk6QokicS5zWEmnJKvRkRB6WYuSd4kekkCcZJZjWjVjxny9r7VdWVK16kCQ4sSDp1VZ7DmBmM",
  "key30": "3BbGzTrKnfiqEMvz5X6ArRRsX8f5Csit6n16oKZ4v9QqY44zoyn3NgPxUi8KkgsPDjXp8oRU8LZZuTh1XNjwYXeZ",
  "key31": "2hMZA9GVKP75B5NmNJhj5sLH8xTgiP7csJ51WSpxmCfhKQBv663vATfigVvLwzKZ2ChLYWngeLDndvbuxFpW8LEQ",
  "key32": "4uKq7dFvFnMGk9k1M6BgNYjJeJn4QPGjd2MK3fYeLHNf5EGtUaQqwqbJWCP5yw4e252NfWUZ6ejnUefQQH9yk2oK",
  "key33": "5vA2oyRzwgvp2PFkVjXoxA9dYyyjHS1CNbXguLp4GoERFm3o3jTMM8HREzcZqF9marFZkUpT4t5E5uN9sVdd1BQN",
  "key34": "38YGiEh246cxAHrnp9b77fktVFrrrE793EtDHbU4c99WLzC2oSSUC6xcN27XcupPfFzL25iYmmVzEpbpRB4dM2PW",
  "key35": "5eeAHeQ9nspbzZHPTiD4t871FvFaGzEXrukojgGprhvBfrr7sXmp8gFoPHnJXjeri8UZ5SSm6nJRTKSVxYfFZk87",
  "key36": "5NKeqTQCEgSX3FnBy5nQfk43M42cZcJvgBaGHmnAkFLiHfMpNScaMMNc5nrixcHeBHjgWS1kvPN6RhcDf8REtJs3",
  "key37": "5J2en4KssSqRGd5RxS7H67SgfoRTbCPGeUq5Efp4CnqFAbUxwy4eX2ToWA8tNxRAGv83WiuPnaSwbbXrYEUMF2jv",
  "key38": "5miL7fHd1XPfaM8XT4YLjdPKugEGKyWGYm5MsL6yXnhFSGq3kbmWBUuBD2SasHz6qiZ8mXjMw2Lk7iEoPxkAtQw8",
  "key39": "KUS8JZGRycdAznEHFfNvxjUGrHUDL7DeFXiWad81rhCiWRs7NJkFdqxbqjFigKtH1h3KmUHPA7dTr3ifjM7sWPR",
  "key40": "5kWrvXD3wX7gMEw3E9wQzkW3UtsHGwZVeQywEBaZjvgD2KM15JyuFmosuAW6q3T2n2v3VepBxZiL55AwNEpixnko",
  "key41": "3hV8tHLshwow9B8ZMErRaVLYTxfpepoiHm8VdcnLEQUCv8xe3wWNUHNR4DF8NS7BJwBrkwVNEisv9K95XA6gPotw",
  "key42": "GXsaGBjUfCzKGyBG3DzLNbedjt3Rd28kMvskyQ7QF2UyUD3G18Y8Cpz8AX8mAJKPR9HQgXWMHe14GYtDYBFE8YU",
  "key43": "2wbagADZC1KEECpvYcjbtvc6i3ZP6KNarcDdPauQqhhbazqHDQZsxoWVjPAD6aAjbdvD9nwJEXXoUMpZTSXUxLCZ"
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
