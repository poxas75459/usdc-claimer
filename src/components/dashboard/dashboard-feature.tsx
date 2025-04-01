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
    "se6KX9ZL2sA73Xtwh2fcsSbTVVHjAeHV5rbzd1s4u6CKMTyHQfn1bZmguvH1TA8D1R57nQS9udjp65VmYQhyRep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPGSpj5T9oWXF2LctYJrcJ4Z1t1D9pnmHwXtgaZJEr1mF7pXECFT5pz8DrzYSca39DJVb2pdrh3V7aXni7HMDLp",
  "key1": "2be5V9gH5SuHHg2AgJcv5m3jr4QZUcGJnbb1HH96SEwdDKm2zjpY1hn8qmQbRVyvJzucF4kc1H5Pys9NtixVHRtp",
  "key2": "2eoNCqQZLWZdLQXeDPQVG3U7nisHNvAvuB18f16gJWYEJiCPizyu37JQpWf9fvRQxgeuq3rTLf3s4jPUBsmTkuxn",
  "key3": "3RNto7N3kMrULstpYp72vLVggYLWCU5wGQ8cTNkpyugG5PKoQbxrf14ePE4xkm4RH3rph6TzHSksWrt6dA67Yjwt",
  "key4": "iWTcRvc8EPryPqyZSxfART3zARjbvWxCW89j4p8H11AXpHHUEyCYPniN3LxwayCDiaos2spApDXVxsCyvzpwYMo",
  "key5": "4HdSg7PzLEzFNbks3UDqhDGH8CZZ2jeVQ4gXRhCbCLU73Mi3jEvjWevz2YQ34DaCBPZoBms5adD7ZPvHkLv8HV1s",
  "key6": "22RUKRTLBugCLFw8gnB2k1LXVg8gzekiY4qcYriGifq2kTvMkVdM1JomUQjvfjHBQW9NmwMXyuzW1hQSaPooHk7Y",
  "key7": "8EDjzrSSET1By7GVGJUzKicut1Vi3WVyg5ZLqwAX47kqxaWt1DR11s8dzQGVJDX3huaAkJduFbmi7RhDxQVre6F",
  "key8": "3Lb2jiPfaAETaYYXsCpB3WfqCMajKC755fbLqiTDQmFKrsPdCq9Xy3y4P8qhNWpu91of9jTbMPCUXnGQdRjSiTyu",
  "key9": "41fbbPbVgfNofbmo33wXjVFfd9fTk4SrMpwm4YXypTaY6HdTAt754txk1gFuUU3pyz7BdED6XAekJuxkxw3BfMPB",
  "key10": "3zcdwDASUAeVfBVkBMMRsu7MMtZWunagCYbst5GDuGY8X6vfRhNGXG2PjhSxrRjohQM4UnPRvzEZs4Pq2w3nehDe",
  "key11": "3SsR9zvnbTU7Rkgk7USLFy482ZvWgMTPSMrbXiTauXTWcfjDiEHiPn8TRDYpyquRMemhWBhq3k8AsjfE2Z17yTZS",
  "key12": "5LHxx4rKT6nSGEsq57w3oYtEHGdthY981BrGVdAza5WbgJsYT57wJUVNewJ2LDg6xbafZQ5me1vbNWeqPJaJqonk",
  "key13": "fnVcKoReiXRu4snE9xzTgWzZzVw7TMzRqwTPU9k4Yq6RkTQyu3tZhGdeXR7Cjh61Fr657QxtTtKZcSTVGbpHbYx",
  "key14": "2w9dJsdHtUN3xkWqi8EkVmZENd6yBBcNwo6i9C8C4NAnYz4HQGLeUwg4Uaiz2aNDyggJjZzDgDiV3W6GBus6EeWV",
  "key15": "46zpk6qRuy2RMqATmbiyXu3PsMQeWpMcuaEAdMrMTqznH24zdKFk5pvh2uRMFQQvTW9MYmyQkGUf8v3F1LBKkho4",
  "key16": "58qMEXchxQbPAj2v8ecjivgk9rLyEcEXfcZPuGSYuUop5bEsgsDJQKbjuHdMjcvQLrdAUsYJPH2CKEkRcoJqsSNC",
  "key17": "4xthBXT8fh6yrbDKgUY8ni6RkTBEHhJp5gEQEYCCHDWJSkxd58UyF2ALotofbLBDceTgzknE5HcRdsSdURBwL94w",
  "key18": "3atcYDXZpyjgJLZYSYcSgy6NeCyL2o5U86kQC3miov87Rc63pN21tCcTwHJQJ4VZWCbr6F9bzysA8oQZ6Lytae6Z",
  "key19": "5xUZBo4fGqi2WAYDUYVu3NkSaygZdKfsrQc6B64RL5j7AwBfTmFht3TBoALvtmNmjXxX4LmHv9aMfhnV24r7VqsT",
  "key20": "28w4xf5e8ES7TcnEVVer6uqp4GZJ33CndfDzG2ymqmdwDFw1GKa6zNu6kB2JkSfHEqfRa3bum2FYCn9GJBWJjSxZ",
  "key21": "RwbadD3ehfmspanWjLB983xXGRF4eX5NR1kkMJnqHAecFbuKKbUUtBAKZMnhNxjeeHBf88ibeDP4XWHzyRmQPWG",
  "key22": "5LpN91oZd5wyKkQ3VfaarrJ2LH9fzMTtnwZtpUrTErA8LJckYbt2MSgpLaRg4DUsXqqbnYuU68TBTEXC1ec9Nhd4",
  "key23": "X8SXvhNKmFCspcWurqU5kVZQ7YPtNJCjae1qTpAcN1XRa4oJEb2mC5aGqtkFUELnvWE863xRTvLez6DHgivYtP2",
  "key24": "YBLSBjGXscAZDfVGErPDWZvHMSv8RnWWTSmbh9GkTSvhLnpwFCFsE4hmni5BknM8qk8htEAXuArW5c9iHtjdtbG",
  "key25": "4QwaKeZzJVi2obSTLAM37MzvdCc5ybGmmdsrTdNc9rxS2LWz3FuPJ99y8WGoT9tcqPrgskkiuMyhyVjB637MbXb4",
  "key26": "3JPAB9cPmZsBRtzrCuVH75MsxGy2Wbo9nJtjxH9GcTVBZ9sUqrMVrJnvwvpBvf2QcxGibrBywmfBjmAqcP1sDbYn",
  "key27": "5M8rzXZ9bFXUqTcxooiWoWuTvEfAAdaTQY1Ko9EshxduGdZ2tuXVtts3zEy8ba2BgTePr7v5HXTNGwPbhue6Mtr",
  "key28": "2PvGsd1EoqHzScRoNisSXZmtfm5JFRDeu19nq9CRyRELrSu1ow3fpvV61HgX5HXKqrGbpfUmFjf9YHyeLndoXWRo",
  "key29": "5ujBVi8Hs7KjHDsEw9aguw6U9UG8UqmgCdkqdHmqMB7z6yooerwYGmKo4x5sn23FK45uPw49eJMmHPv3xDDZa1NH",
  "key30": "319CzySa79WXLxQaAb7H7jwKUzBFyRhghYHnxi7pRSoM7r3stcJApPmhpGNF8VHEwdQf7XU3MucFzcwtdb5Xv7W",
  "key31": "5anrxhnXzRh5uVfghFdJRpDFqJT5u1mH2a6VJpVcRyknE7VjhvQzhfSpvgRj7mYcS2ifX9zhrwDM5hiRk495g65G",
  "key32": "4jXMkrcWSVkNeKXShnyMtuC9W92prwHsitThG6j39ZJ1C82ctcLATULLCdibCyBNdCEEt8X4eBY8Rk1UHcxRG4Ef",
  "key33": "2ZSo5L7KknF9HnwycgMJj4tV6gAwWTu2oBHAchZAxKT5ckMVjdYMQ4GTE8ftHzwLxSU3ZT6kAoopPjTo54RzJktn",
  "key34": "25GRvJtQDLF1A5MSR28F8dp7JcjSohHF3ERYrX3eiB65Fjk6yMZoqNScZVzFdJWsuBsvmZkiUxVwwv68ZwsJakfS",
  "key35": "4gUJdUFNxWqp67khyXfCLEo11KiTBQd9wijGC7jMRYVj7hzSrctUXL9RgFPsRjCqL4yL4hiWbVUVWa5MF6H6YJ8F",
  "key36": "cRpK59LfDkcdHxcSyyMAWxPUYjbHETAZVrF9CnKDA2H5WZN4X4bRZsQMWhLx7p2jv7asuALN2kBzZNQxYeqMYDt"
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
