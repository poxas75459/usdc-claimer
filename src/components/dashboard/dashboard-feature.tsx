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
    "4MmucVHvD8dzQrsUw4ANw9FQzGMUzetyC3Qr95Gzt9pry5Pfq9p8eU5p5xzTCysqFSb7ApH6Lo5zer2a9nLsBJCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKJfsEznV9fCWmvzGjZ3yjZPFCwL2ZUsxkukkDUvzUtEaptkD9jDiAKwdVtLFJns7x9kJPuvLG3TCrLwW3nYc1w",
  "key1": "3kaUoVPirQRnGfDuHEo95kwATTLFU29CtWzGcf3nimaZ4AqF6y7JD89w9qhwGyrYecoR1bi8Zy4Z4Lkj48F7zPmE",
  "key2": "5AUcSV4fvgQUd4j8Qv6CV1x1fZLAarGUmLk51v5EDihEgWrJ1Qk92zcx2uf5etc7zTWJCirw9dnrcMi87gwkZ1M8",
  "key3": "4mnLmkXfXgVaTDdvrtWnmWVaDfNFEwZz1pG4exHXVneFZUy5tLAwbdM2Qm1uGNX83PxrjM864oxFA1qL8Xhgs5ka",
  "key4": "S6t6zACrGbD79PCtpeuRh9PanwRUNZrQxig8tNCV32LF34Rpfkn5Bda8Zwdfs9CGUWvKJ7bZ4vBwyE7LuQiuqmY",
  "key5": "5jUc8DKSaSsEqrwfBesKWWkDuVHzX5VJNoaHyeXfF665LWawFbZvuoTbsYnhPgjbtJb6bYYJJD9Kbv4STmnZPvSs",
  "key6": "5t9at3WhuED58Q8cjemtqQVVkVs5MsnSoDyrqE8oeqXAerJpS93YV4hW9uqZrAz1rzDS2M4nHivZt3rWxKQSeV7Z",
  "key7": "25YoW1jzK2PBxRmKk68U8sP6g1SzBYwFV6EbTwwmsfCX9GLXLLgzu1CzbkfYe8iMcy6MKpjs1JRoBY1iybXa2EUP",
  "key8": "BrFz5XTgLQfMfFW1Uz9hwZ5NpsyjMs8JUYQMpQfsVYSQSwDgP1mEXrSDc1eUg2XRAKu5sqeAMzNoyBWzsjKch9j",
  "key9": "5QGcg4Cb6ytHg9XXEBHJ2Z39LZ4VvSH1td7yAvVwwko7orS8s6ckVLYoGCmNRQVzY1HpAA71LuU4ABkzCZqQqjbb",
  "key10": "2dv3hpnrZgcAPp78BRogiHc8eMzB4Vp6u3SJkd53gATHUdHgBuAsYxCriZ5q6QZxKthHgT5EpSUrTq2wL4VxKgD7",
  "key11": "4bk4aMiyi1CtSd94R9QrCt8Gh3DE79GJTXQAYY63o6qyRz9su9rCs73SVFYXVnr5NsrG4Mrm9hGniZVLPQ58Y878",
  "key12": "5qTFhZCPc8aaHpAaE311M6Lyw2HNdyvtjWLTnYubiWSbRMYFeXxrnSEDCMVyfQgD3eQoUnPjeAR87M7QRkZezzph",
  "key13": "5HSdAWwut7hSD4fpCMhJjmRpYK8rF4mdiVmcn5pXcPHUYpxdKFF57A1fvLG7QU3JNV17TnU2U92xkUiw6DC6CNZM",
  "key14": "5Sj2Q3yxhQPfsdEghHZFq1W2sS4ohha2CVd3BufNV3o7LHcTY3hk34YrqTSeoqV98Ezcho4C8iswm2rQ7H8T9dhb",
  "key15": "vQLQeddfmx8UBn6mZA9cN3kX3SSF3c7Ynv1SdvVPvkKYzTDX2oU6egqGrnHFSeqDSVx8LRswREGTiTXdPm16S2H",
  "key16": "sfwXvjx2ZjgDG3mvkiUiCoUqwCTTime543UBSxhUXBaz18x3Qs49Ad3TG4Z1wADo1JUXsW6Q4zGLbc9vBYs6wm6",
  "key17": "3mdn45db5gEStfM9aLo576bvbDLojxi4r62Q9Vk7iz3WFZb5cLzQbYdWiWRYFLLmgvf7xpBPJQVKiaiBu4Rr9hgv",
  "key18": "5MEeFXTxQoffa5BndcQCu3jkfoA6oNvm1kkuYaeXLiTuck1a6MDRTvuJyiJH9ZVixbX83wssAtNrVS7oUTLJkWFe",
  "key19": "4jxbK7mtKbn2S3SV5vpmnS5E8R3bDqBTpQHxDZhyqwBGXpLzCBS1ENCkSvwp1RHisL6cVqgidFQnKrwYXoGNNb6t",
  "key20": "54kzAGEQyN2Pz2zJHLbBXHjv4JgBVFx2sSbWb56nGfHa4zk1q1qzjKbg4acpYMNtZeYzTAuJLRWQ4PXMan6G8A2e",
  "key21": "i12xqo5zBGV7eNbw227suKMM6MUZtfLgUNwPaSAurWDVz6jtCMcTdWnufu7VTJBtLcuLWSCYTu998vFHpwqM9Lq",
  "key22": "wwqMPTvDQx2qEwrz89Q3Pd4BjkC7pcb1FMmw165CZ9Zg9qXkVN9pdQypbutZGJsa2dwpesqxDpL1vzdAKgVTjdv",
  "key23": "X6vcrpD8AM9i4G8c3SFd2swaVYyBbThF772nvGUkA2xaehXcpqbEFV3ytujwLeMJF4nynwFnmogUXm1Yir78XZZ",
  "key24": "58pU8mQSxwuRj9C6H7HmeNyxUcPpVirFtwDQdxjxJ1C4ZCB7QfTHG8SUmR6poGqp7rHSSrcnkPag86psH5WvLZfs",
  "key25": "5nSFo7rvBtZrU4AWTcYbrvNymM2ou2VWkgKZnsUoXy6FDXfXKMf9vE24bxFCWfbjBFu2sn5iwDhgERdUB4iVFKKH",
  "key26": "3Sd3KN2xhqzdCgfTsXFKwSi1QkLgT8RK8nPYCFWywSq7H9wL8qFoeusB4VodibfEUn7pSQBQoTwmd2ub3QtxKCNX",
  "key27": "ceWVFJuCoxdLGxAtJ7y7FBg7QnyP29d4BV8qdsxxwYoCKFAsDkkjgNZV7GQfsAUJrTi8ELVbm9ZMKt49zaceLi6",
  "key28": "61Wm7VyVEUG4oPTPcExv35LncNS4FeGSyf6VjhTJ4Su9FZEYXF6RrGdso3cXZTBKFSJWn2CypH44Dp6DfjM4WR3y",
  "key29": "Xxv7rbhX11gETcokiRZkVcXG2kQY12F3ZNPdHXjBH2tF4JsgaZnTP7Lp7ztGzw3v1HqTEppEgNX6ZdXKmzUgqLn",
  "key30": "2Yuoa9B8rQE89fEEoB33siqHDZQPSM4RWfxwQYjBZ8DQZfZMRrL5xowcKMKYnGWZ5VietQinH6KaZGiUbJCT8JNB",
  "key31": "5wJjMP8CC5sbBb8YAdrE1xPg3uDxQVN2i5K45fhyxyhMCEYW8nGzXEAY7yU4EoJ1wFqRqgd1C9vfZyVHdUnmpKJa",
  "key32": "5sQBhrKTf4RPT2jVtVBqAWrDJbFRmuzPR7JXeL5SbWa3STze1GUEgtUjswTZ6A5KdBdw7aAENY5DxRqir1448PNG",
  "key33": "HcmKqHY9ycRJpzTnCiReTGBLA3XdyhpDtj8k6pF8P4bXVft98Fic82LxmxsyjqoruV2iaktRV7pRn4fAqvXjJqu",
  "key34": "54TCahjodbvbkCsc2Q71N4jQfnBuCbpbU456xZaESFG5HH94VHdkP3yfaZiD5VAFtRwtg7dvoLPQ1z6Jwye8PzMj",
  "key35": "2Ca6FrE6BBRofKMWfYmGWMifcFkFRLkQvYJJTUPQ2EAD3N4fSbPXCvVurTqTCBBJRze2RgWmGBLefrQCKaJNDAkv"
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
