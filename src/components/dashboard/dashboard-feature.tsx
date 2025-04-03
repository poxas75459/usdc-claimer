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
    "qpFxdCnWqxmigSuhLYj4yuPFXnRfJmYEJ4XyoquPnjDkwo3vXrVhVhGeBjrBM4VrEHeEBNKFSuYe2sxipLk2Stz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKKjHAtyhsaPue8ZpBTgqXyUfZjfSxsNXjFVBgi9n1erBNrkyQCJh8gRv13oDBJtq1gSa6b2eQhaNAoN6pfqtLJ",
  "key1": "5gvKV6CbsycT323PsX5Nffsrc7N1kZxE2JfkxtcSbhpF2G14ubF22jZYNZzgkaTfDdRiVmJArDL8kdDwhd4CLVzh",
  "key2": "3vwGaBgScjKDt1zgsSTAwpr1usFAiHgiesp636G6b9a52DTAab5t2z3pYGqTWgRXVvf4ztC1mB66BLJP65hEwLJy",
  "key3": "4RMDm3CAgjMAyiaFYvjQtXKvJPNse1fYVvyLUfBy37Sqkzhv9K3AtfYjbMWBiQuxBLXfg7mdKkpAG5jFnNda7Yjd",
  "key4": "4AnF81hZENmSUKZR7QxHAAu1roESG4d3QiaqWN2WocvofiQasxqYN7BzCgCf9aXvo3X9rR3bZ2arcexGkNUn31oi",
  "key5": "4Xb51YA33ZYtvbe18pNXqRjaCYzoWEWa6U9dsL1sEz8geVkcGenJthnoYskNrysxQeJXy7soDdKq7zpV65XnZhYP",
  "key6": "2ZnLg5vEkN9SUesqjsfDGtV2xGuQ4Z2juBh6o21BGitbto4FqHVFsQC9KCe9QF5F3JpGmqLm9MMBbNdwWRwvjGZV",
  "key7": "i1k8HTBpG28fycQo4c4biwiuAyjqiJa9gkxydhpBQwrRVYJvjDKwSwcH1Yq9auTxoa7ZAEs32kRVqeVreBc6Evt",
  "key8": "5vkJgv8jg6pWPRiNdLFdteHuhv4eRKETiRisjyVR1mSkT71hutuej8FthNnqra7QP8Z9wJH2TE9pgzXBN7qZWwcW",
  "key9": "5mMCWu177mCL7dKLgHKVVr3jTpYT5fvbQQEbQkLEeeDoadB1jtBLEwfF4jFxXbeLuTVfdFiLgvKwTQUgLV1B8afh",
  "key10": "3UeXcTjMxcVR2u1ysneKrRpCqYUfVM45PB2ssLM6rjkBUZUP435M8iHaQQofmkdxHoCoG8aWwfi5LshoJoy4t9cg",
  "key11": "4AT97Q74nDGFje68ZidtCkzKkArJg82tQyCe2NWiAVS14bJVoJKnt3eUKciaC8PJJHWiQnjkX3QucE9P5FHLfH52",
  "key12": "6KkerMQrMVAe67C1DoPGL5LDmLxizpbiSzyz24ePMSvHcoVNn6q9dRmtwDrJYuVT5vCLRUVdzmCuaJ6csG6ewnc",
  "key13": "5mkvvXQMbiekDXHNyGedeCL8dnohTc6oftrZRDmv7AgkHxfrfNdP5nGXBD7xaypZfNk1e9DUdfR3rVMLwS8qowX3",
  "key14": "5DkreGbP8hb38gGQFazxKpPLLG559XhoGXfqNsob1yQc7fRywRaNMXdV6kR6D9PHn9Q5zvjtUJQEdjBNQ1imsdu",
  "key15": "2HaAL2qRC7uNiYVgrb1b2xbjEfBNf1Z1HAWDTGqasAXy5CPkgzcBYrQ7gUpcPf8aFDLkVTAkXtj3b1xp8Ap1nmDb",
  "key16": "4u21Q26bYrJnz11LFMB1dj78yaoMjvg64vb4agur2xZoqNkYYEcTctyfGqK8zj8AJxsm18GsAtoR2jowprKj3a3D",
  "key17": "5QdzmVRUjeK9EAJMctHkeTxm5g7hxfdNKB5uq1MVX3aofunAqrRChw8V5EiuG8rkBYbsgvbcgrY1ATgBHKMHujkk",
  "key18": "2YY9c7kur7GcMAShZuB5dEtkHgc46uLstLB8REWdWotCNdaggXEXZXgohJ8GG58bCgHohyQccwNMP3jvXeYtDsjG",
  "key19": "2pFchFNxeKsDrAm5qXFMPxxrXiazYLdPQXBp3bikW2sEzETV3sdq44p72poqzPuMho7qMs8og59pbwmEHtz8id75",
  "key20": "4XuEEWqk1wqx6PVHQ9XCnkBuwpcHgbPLMFikeBDysBXz9EbBZE69ezz5fKYNdq2TfgMwpejMp6iyfoX8BFwUtaCY",
  "key21": "5TEcxzu5VUWY9f4De3ZPYkvuXmgmKmamWrDWwWdTk8AUnYXWo1ZECfwpPUGswJajhDo2YJQ27FtVzv2DAtLRH7TE",
  "key22": "4tT6L7UfUAT9LtoBXXprtLEeXiS5nxBoZmpafgoKw2KZUEuDzVYrJwyXuHUMq3XTXc3gGXuVPF62xwHtNB77Wh4M",
  "key23": "gVQ1epcnGumG5hgtuarTAR3DvCbDV4yjnfjyWC7UHTjWmyntonxDkjg4v8jz9ip8z68UmyYGZUA9TmnchXEd1iv",
  "key24": "eiswJo4j8cnTPg1ooQiVWkqAqXxdjGWTmz6iS5g8uoKNyRKpvksufHVSv2i6MmvtdLwmRtGBuPqimAgozUdfaCb",
  "key25": "2C8t5xXJo8tiZo2DAR2W5ww5jzhUyAt6MfqdQxqrHkws6xmU9R46iiaBHPDKZS83yzmy1oTz5PuB9w94zFney39a",
  "key26": "2GbXjqLDFqSkaCxtEYNLmgW9pknmFXkguPG8cGhJCunS1YgJp8NadaWQe5xcrJHApz3JGJfFhppQDs8PHVuGgmuD",
  "key27": "2MksDmbV8CJrWimaUvLxFjMbQMaFd6X5ftHNYgxXHbm1eJpCCBu411cYh5CxSFRYSp7rnRxRmop6NUBY81TGDLrD",
  "key28": "2KDzyqMakQ74BkXwxhFYHNDfjQzgf1zmc5ZeAPrgUaUWX25qZjLtowBEK3CipR7gjLC5NtVa8HwjG1iPDQX9CV4G",
  "key29": "5r9VsoKyWqwqkPMnR1iktHTBbjfWmDxaVQongVP74wUf45Dpy8RHVLtYx8m3zc3XLQPas9fiRQ53mmg272hAWLG3",
  "key30": "gzuNYPobgZSJTht1fn2tNDzVdXPLrYNKw7rDfXUNKV6nBnLQaTz23te8K1rCyVp1H2q1BXmQfNFJK59GPX8gRu8",
  "key31": "Nwfacs69ZS1HCxUmgfWpEdvp9RFmvFiXWvus2Lu3cqgWaiVmu538BitSa6a8vkk2R2qoDgKQixZTVA6s4gsV8j4",
  "key32": "dJm72PPXeZpR3H8AmwRAG1PgaFuk3gdcUrEEATSh2o29H1Z1M9KwGnQtopgJtuRyQYC8zmE4zmXPA9EtnZyHknr",
  "key33": "YBTLbg6bg7gawLbqgoZQjeMbBgZRyrD2Y8W1gduvZbqFrhvHAs1Ygm83sLWxrm4QyXsdjgC6Lr84FCXXwPFZYjh",
  "key34": "b82sxjixruUqS26hhRQNYzf8SFBYWyaBhmMc4pXa4ERLFQ2ykd5JVg8DyCjhurgHzZJFjuPBpBNXGRn2qQkYQaQ",
  "key35": "4edkqnzt5hZnXpGvRvAidvsur72FVN1LQsuq5n7bcNXom2RR6yyyaezMUe1B8KafJRoQ5pCvhz7uMeMrNjNeYVae",
  "key36": "4yb7GV1dj4BYHVZEoS2AEFpKGZkntP7YMY53DFyqpqe6D8kPevAjuG84a127tqx45txshwegdwnCLrtXfREfEtpa",
  "key37": "3zqYDy4UjDT7CDPRLgZ6qJv47aCEbdRGWZsFpDMbq3K6zp5EWd9Wn98yU6kKZgctQqdLpLk58hN8CDh1itZ3xrPp",
  "key38": "2vPB4KQFhgrKjWQBW2BrkfoCQu4y41be1Xo7ej6Jz2mArtWVHUaQNJKxeew4EJDm8C8fvhoa1H8ceXXuWPfLByny",
  "key39": "22kmpoWP2z7ZxciMPizYJ73QaxpewR55tA5HKpWQmPv1jZXcPysvi6auHQoUhTs5e12fWu5C5Q9LYmvReVp6vyqG",
  "key40": "3Ax25rC1xMromezVhg68vbHkaVySvSVNNJHKkR6qXdTC15Gs3aYE361gfBRCoj8T5p2b4f6rgXki179G264rSKk3",
  "key41": "3ZTrn5V5pc7fp37uydNv2t7xvGzPPpeJLEDvbGDZuDiSfnpW8sttycpRN8JPL15padsv6ZcqiVGxZNESFgWDEv2u",
  "key42": "3NAHWphMG6kFGdynJEkYWtbMi3ZXz7YSdW5MfYFpiAzGsY7HD6AVB9arUvsuwJHspL9KwQHfEj6TTJmbVaCfRQRF"
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
