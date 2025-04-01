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
    "2Rni1jgDtUqLeFwHiXuktc8yvXHuu9Az6vfmtTq3rryHzhsBXWu7zJwTZDW6j5mwqCAL1dMr1AqJonK7dj764W1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TTEoMYc6hvciCpjz445KdWzDvUNqQ1XUnYqrYcGf5MWtaEFsW9be5kSLjXkunaoyfM3sB5c1593HQvNAQgwb82a",
  "key1": "5arvJ52ac1o8Tp4YjdivGk48ePTV3TCKpPxtcZbHgRvUbDssPN2F8z92pYzQ1emf2tYAdErYmxnyzYx5xQy75qWi",
  "key2": "5sWQs9YM8Gh8stoEsyug6zyavF3nb9jgU9jbqgBTqf1Lvh64SSQHLshKbTN3z4fV16J23Ne7kPq7EfB3aV4dJqpv",
  "key3": "5tBkae7yJAQPz3jhVT21Ef4TdiptauavMVSCiq2LbV1CHoiRVQEzmsJAM1ahgZ1qJ5uAo8H6YR2aR636h8F31ySK",
  "key4": "4Jxf4p8dq2eeaW7JnQfhZQ6CxfnrxUJidzQCqnwPWUspJDjAduyT7rPpW6zNBJHW7qUyx3uzMGQjVXLERuLSENnN",
  "key5": "47nnCFHGQwN6p2E9yd7EkbwkPu8CRZQqVF4mn3XSsCcZngqGrz8Vz7TFpGKM1it72nhVJPb4QYCtcXdnqnsAqMZh",
  "key6": "jCZAvdvsvXbBpsQRndCJCPGLms82u5TA1nyUfjDSvT8iSaeBPGym9ybt3GiAYtb4Tro5JXd3HiRTnzcpfTLfgz5",
  "key7": "33zze7zLByTkrh5wP8JLNp6RmF6UJxUYFhWBRKAn6HJMxgEpKsdxXMMBCTkERcHXgdnRphLXmicAMebeBuNFBSRy",
  "key8": "3yrj5aRdD7jcuhN9xJvn43NkLSGhkNTyx6YBEPnVgm71qZtTwtT9hJi5Ug9yiZt3gm2BioUswiF62dqCXr5JoH1Y",
  "key9": "5MJxenHB3gE5WnRgm3ufbfHcNpzQTLBSYKdGFuyp5mAi4AHw8nkBBjLV5v6csA4VZtaTAubH4W9LJkcRcrLr2XM5",
  "key10": "42FDjX6iLDhoreFUkBzJe1UoHMNqUjrYQRvFmpYRE1SXUKhjyVoKUpwTUCZYXEbXzBqyoqnmgpPw96yHFo9WprZB",
  "key11": "9knyxHk1rSBzy6wgLFPmB87ipJEbmRAg6jZ9ikxmGJjPvJA87MTZ1pBs2Sm8h5uA11bAvR7z5M7EGBt45WRevss",
  "key12": "qQ6q8XqJYpTtDkAuMgigFeu8pAgJsXjvcD8eLeD72E5hKMgMNrQWg2KR9sSQ7td1Jjx2vc9QGamByihRHrz12qG",
  "key13": "4m2fdXSdxGSbyQiUFCPvj74VxPs3wg3UWnViikA3ikpLV3BVfWhp2GoEgP5LS3DPVnWp7Boao4oLfRpzBE2VZLQY",
  "key14": "4KPNHYTMurQWaBE2cMAUVCeepLhTSoHWMDScm3wjeamu1sF2LRGPMk7pHbsnzL9RmnMdEXmNLSR1UyokPw12ykxX",
  "key15": "3gvRWJWPB8iJduWr39a3cHbwRGZpTPKJj4UDe37UgFr3Je3Jdx2gb3md7rqrQv5Rau45uzssNW8JbShRhA16d9DF",
  "key16": "52Qpct4SFwBL8KnodT5MarTJTmAQYtQ3zorC3RL6WXZhC66hFZP5WtubntEoD5EZWk4uuHWtMwJutGpa8amX4HC",
  "key17": "5eXvs9iNbgHDhS4aAqao9U5o35748KQ8pjSPpcHjVf3vvxJ6r3nfV8e1R3q7ZdySG49sTrYTXgJL9tBLd1xieT6K",
  "key18": "M9cK2cTdzyfW7ubNCjALuDAe2MX4MJ6D4DGMyrsXfnx4pAD5wtKKVr4bbsKWFhsGJg13T5oGoejrYa6MHzaz76R",
  "key19": "bVAJd7cA6NpLuerYcHLjE9zEp1uW9GXvgsmKHx5do7EtV8kNrq2UxgY4b11sussYrBbwqGgy8UtnCnMtiQPmfh1",
  "key20": "LExXXu2YEYii4twZMo3kJpwCJgAWTjnByEYMn7TQHZHwFeDfqFcPHv9niA4tTYBtaeqDDcKz9Wb9qMwUACdnCzu",
  "key21": "5bnFCc3fbeEvGQAjwCW3SEz3JJgYqJbN7AUDJgtuwwTPmuE4iKSLdymP5cLrbr7te73hbD3jgkpTM7qXTCHLwxHT",
  "key22": "5fzSAXoB62qQW5ZYYWLvvvRApPrqzof2AKHNmm7Yanbpkk9bNJ8YFj9fmFyjEuC4gsN1ZkiBgnW4CBHdeMAHike5",
  "key23": "jW9ix4XC4QEU6zv7FtLggb1DFHHW4Di7tsub6DMZg52oqZbitcL7onantRbrbAnq37va4rH1TzfwgDD4E3VFBWW",
  "key24": "5TinR2ndHrqQ37YzkgPKCxQf1h7HQQcyWpgY1H65g9hvXyoygebxkkm664CRYbU2QRQJwAz4ZTGFDKCYkStBMZvH",
  "key25": "5CmPvL57wtPtGUAYViWd8DJvfmafwpV251BsNrUr3DgCL98v9AQjczpfaHTBu4fEHKVvjzPQuG4UDQKU1TLvbUFZ",
  "key26": "3LkagtnUDKi12FsToeee15S6ee5qRoMBcs3qd1Rk3hKgvb1PFV9vSd6d22LMhp7UzgMdTh4Tu79Gc83AzEo8FuBU",
  "key27": "5E3JZhCQYLWnPpDRuu9Xx793sKADewZTW15CUMgNhupVwwo1m9XXsVZJNofNu2Qym9iyupRa92RsSG1KKWViW1dd",
  "key28": "4H7sjZx9GwNzz692KJ3zomkPuvSvCnDaYnkABtRGttxw5Vxyxz7vecBDDPAsQFoE7Zv1oPPxo9eZ1ussnrx5hi4Y",
  "key29": "4towkxjZBMLDYH4tfMTgknM42krBhbbmRQVeyaawCcH7zjP9Sc3ohYoLpfizF17AmVNwnQ4WLmhZZfLyYZ83Byds",
  "key30": "3cgfGfDrYe9TSdHRoXqxFNYtf4qtWrCq3SGzfETcpkTXnSj5hkdwzUtGnfvENqpjyiBmjoFZUm2tC1iLofZP4Eub",
  "key31": "26iTcZcVPYmjPkwiBudCL8UvjVdKcAMVtwj2gtXZ75a4QFyAPZnegMjjFUo4n3hGefSL5EPTYiZMa71EXWxeJJuH",
  "key32": "2sGzm4RCnXL14wkrWKYaHWzmQRiuRJog1XYHMUuCb3vbgH11M5qVVB6hth8z2cN3nxntGMHH1EyVV4HgAPKWtZ6x",
  "key33": "4atpGyshPezDCUr85KoMS6pQtofPr1bJnSbGLdS6Zio9mv9dTiWZ4eZBhcVBDXMxCcYrizuiqKNcumqQcueLhaxL",
  "key34": "5KaPDCzTvNURRss9QwVCKXuXXf8geDKwLynssk56mpx96o1yxDPJjCYCqrcnJeWWKbWqepqFdLCnpziBQamncBJH",
  "key35": "3FPqXAsQBHbAEcGq7rSuW1fm3fSHVzc6uTqU5m1JngjxhbbNJ9YHHhsEijEnHzc9o2M4vrWeK3Zo4NpdYeztGuog",
  "key36": "4HKDYAJW4MAXPnagVDsZDHGGvAgki956Do1BtaAzJWDG2ZuryNoHNy5BrxpBV41QEzkD1VadSNr7eiBxvdu8PQ28",
  "key37": "4vgFZai5ggJu9RVM2cjGqtqHb5rwQNNsub3nK2LSUNeBxS44844ujcToAeA8E3WrrkHHsA6Rfwcqc4Tfy4mcZ6qA",
  "key38": "3WdpuNEG61AUdrmZnCi7N5kDEokFamF6LaQcxs2AVz3fpuV3cjEWFkytTtq7hNjaVvogjuqWBa8bLbNwbSdAxF3k",
  "key39": "3WWUUZKPnvgzTpJtS89FaFrfBYkbjVfQSBfouxJzLpZKkdgtFgitHZqs1iz2xwJY9JKxGAQ8vzHKPo45kaUQE2HL",
  "key40": "2fsf2BnAQCXx9ZG3fShNWDE2nVsbuBhPvpSJUiVZ1sdrnjM78Y1rmY3JqwwuC5keBeKWWu6KMsxeoPzibvwR8AM5",
  "key41": "YnwfCjzV1apneCUu9eYfprYE79c6j8zzr7BHmD4gpTDuF8qx8R8YLYuuinsMgfpYq9MKV4U6X2xbREcdsNjn8Ga",
  "key42": "5khHf6q6u4EhhZDW6RzHBBNKPPuw7tNCM8qm4QFXm6uNccwPgQJbBD6yMuF3SufsMtQ5gi3heKrGwSPx8D8k3W8S",
  "key43": "2gQ1CK9nh1gFr6eqYkivTwhBXP5TtY9yNNCN6DGKp2734UB5PaBQ98cJnGWGDG7nd6pHxy3ZK6TwChMqd8ktx98n",
  "key44": "3Wsj922wLq5pKFKwqiqtUotBQ2cBGDL81MMDNRgwstVvgBPHeRrJxTcwLQQjb1JNLTEydfrkicSRrrnt5a9FsHec",
  "key45": "Xmcythbkg143kDFgCc11PPRHTTDbN2k45Bt1EVS1pq2bmm4tx19MFCD89S5BkR2DXgjD9KgyDHARKG7Xw9aQiwo",
  "key46": "3cky4zFCJDVtX7dLcb3kMztvf6ipjVa3NYv39F8QKpSwVASJ2JqQvn4wcK1ainZyJeWj6BPfZPsTowvVX8Pztbur",
  "key47": "2G7WiWdL6d69ctNv9GYhTQ8WW7vbfYbRqWSsP8tQkVMRC7LCaHJgN3UYDkvHXmVDe5eTaPcWU4iZJ4EKmcUQzdis"
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
