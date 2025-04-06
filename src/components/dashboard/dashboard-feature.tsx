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
    "2h2tCCv9Zw38EKwrbzHrZFERKqN76MBkV6kwRzvQb4zTLQ8JBfYkmhB57W2y9U8dSVfiiQ5sFfJzA8RcJwboubNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gbusY4qV9SnG1gN5Yk2QV6XBP3cAThzxpnEmhiHLiCvqa1gxuazwyLNSX7wdp7Aw3LhunfZYu5BFfkii5ivHZWM",
  "key1": "4zvh2SgqAFdMrk8tn1RERg4stzBtPRbrrPBEZjNNfzT2oCfTX9hMiqs43jGTc7vd43hrnwEJvqDiXMLbwqJLZwb8",
  "key2": "3ocvJz1U6Avqx3ZSDVUskT211zhBrDiGjHFm4NvGU3K5c9JHXzvrewy2VfUwQTKQLHefvfZTDwMVKwLdnsVSsh5n",
  "key3": "3VWWwQq9tFcAEVFLTBjNTvgVpLwHfsPAx4d4p8ai2T5nyJGbnyGvaBMbfVapb6P9jBWYRW4Mrkze4UEe32M2x7qq",
  "key4": "3b3jgRbZmNMgqHAJXqYuhBNJuppFnYhGsVQgs73HM8NK8DxP2d467ggfsYs1SN7dEV781XkmhEeWpeEWSP369GoE",
  "key5": "3C523cVd1fxkA27LYejHZHb2Bz1Y8xWqEqCXH8tGg2DuTnLfL6mbr2mDAtue6bmQAgKDaM9s88dHtK6wPjyCJtb1",
  "key6": "54JaXfctbxVTSEVAvtj1wMf6bquSJ8qBvVp3ovxxRQHPgLmYDwNnu36MpGmBfXQ6ozAjZuAfZZRn85G8EAkUvqem",
  "key7": "5rgE8dR5BjAL9hqyfv46XKDCGCxBUYNvfQzst6o7YvPz8WmyinRmmmbnK75f3qpS9ENxX8fV5u87n2G6vhgMofrd",
  "key8": "42TUxMaN7P1NZT4pXYizAwqXenFUEgqH9Xv3MPMohwpfnv5KhA1m1KaRBeP1kDpvCQGD2dQXqtKJ9gwwHPXDXEDP",
  "key9": "4kQr4Z3AK1MDJxoHvCZ28TT5tLe7P5yAFo8QkrB31hGfiqztM4d4eNjAhed3eoarvYvsUjwqynZXiBQ7wcm4BbBU",
  "key10": "5cUasx9WFAdRenuC4N1ZzUHiTNu6dfgTmSbEsyn3vzZ9VrzGkRoPWCY5w4AaRx6jUenZPZuQZFGYqskpKMZWEhFu",
  "key11": "4BGwmR7aseowq9m5AbeewipWAWkRV3nFA4eb9puiMyVdmTaQu8cj8z7QefGH5BuNdy9LFYvwjQ4mdfZ1VPjBh6C",
  "key12": "61LD4VgBtPpxb8AjJeCiEsfbte5wGNVGJ9aUKwMXcdjVVWm83mMZZAjC5omZsDtu1FXjGnLmL2EoucndDPXXHV63",
  "key13": "5zpe3BaPCq2eFko9qAwRtmZwXubnQme7AeLnK6fMNBBP8Rs7GcHc6PeHqs2xziwwkozbSTVodNvCGtjT63gEoMa4",
  "key14": "3TnD5yz2kLLHZUDUT4FucwYJkHbjA4Gd9iLMgiN8FaPQhWSdeDuiCcLjcy7MUkkdYV2xFyZCsjHsKLFy2k2rWuYf",
  "key15": "26u3LqjPcM5Cpu3rR5vi6UUmYqXLvZuEBAi4vM7G1gC6E5z74ZApVUTKQSzrq9iPkEBFwQ9py1VNgajPJnpGHfZQ",
  "key16": "64NdfJhipfyHpF7b4pzTrDrUhF5SSX8mDLLPhQSs99rbYz3U8JVcDDmgvqyrfkVyEdFcAQ3HVNkomA6VzWvxv8WX",
  "key17": "5iZ54UPaTtfDPZcV9DSGq9Fd6iz6JegdUT6SzyjuovtwTj6wiVcPWG2cnzPeyQMXnFaDeBnuedAeC44gMFe9kmJe",
  "key18": "crAqfCJTWtPU796LriTywZJX9Tmdg4mgLZZyBjyNBQXcqL2Uh3CZAUA1sWk1WRBym4VksPjQfLQ5mJyLi4tiyxm",
  "key19": "4E8szTpWwvHg3SqK9ri7jFgirxh7sgwgZd2QUXPgfQTyyXJGUUaSdxvDgf8fcRwjrxyXL5bLh2unom7p2bLVLkqc",
  "key20": "5C2ixEMCuv4BGTpk72JLo4rEYDritDfvkRqUUBYBGvfKzqm8zcPYcwG637ZrrAUN7vf4WQHYsSxBbBJ6CD7TnXQZ",
  "key21": "3eQyiBBkJkLe18EsVCvyBWbeasWqPSv5QETRxb6eRHrPFPPLvs5XPWi26aWc5wuAZLR36PHGkPoui79ENyB38psE",
  "key22": "5hprLYvFS3TrHGGLRUK7mGzGS55TftZCug7ErK6QU8PJuMbStUVZrATdbYjrL5cJ8a1zT3HkwursQjbrcooEKUq5",
  "key23": "3enjGMaEm8cbiSdJDuZvLHJVAoNiVdFjdik2CRN3Z3USvg13WFVBNnLYjcW1EgcUKWtfmNGWK8E3BUFrKNCF3fgn",
  "key24": "51wdf7Vh2eDhxS5Aw7r7DLjrJamVZZLqaQtiYH9j4Fb6oMvZ9MhCkRKuk73tN6m4S5Zivc4YyYMt7jm2dGbJMvCw",
  "key25": "5mPCocXisFCWGEraV9Bxp22nsv39abG36iUR5C9pMttFwfSuaLA8MrqQFdSX52J2SPtx13HkiX7HKi63ZonYLqWT",
  "key26": "3eLvDsFjVJ7sbUrQrTmyBrTyTn1m9cKkQVBvqCT1gk9Drs2cnf2iJJHu1y1sQ7YmmeNKRwva3DsLYgWX1SjcsqeY",
  "key27": "YVU2Bimpihr2jTRUqFTAbys3Qp4CynMQcAYt6ka1Qm4USMAuAvAsqRZfRSGWNtMukaogjJ399UAJxXcfeYVE223",
  "key28": "cqFcSg3o5pTU17UVNB4CGKe9QZEWKWYJMzH4bncwSL3YXyk91Sk7LCQXCnLr4WsYLdT12HaVCvrGVDU1azMoERg",
  "key29": "5NDYarnVNvE4QGvRe6GCDWuScL82LGJ33QVF3HNUGt1UWtf7GP2yeRZZ9K6zbpbeXGD2uctJZvhydhS8wZxC5pkF",
  "key30": "3yftUvTJTt1rTyaJuZH9359z6rjZGBjH7JHEDFUNw4BDLqJEZKEQhG3iUKCjsjwnUXTYspLadourRaV5zC1HgY3c",
  "key31": "3We15zCyqegVEoYxxdPHF6jCbD63vpqTS43zJi7F9s9BCnRiQxk7wpdJctrFSU1kRKJvNAUQfCFS1hQEYkoLsi6Y",
  "key32": "4mhAV9sTtbV9FCTTXq8ahnPFJCvawC64n3GfW5xbH7a1rAw9upcQHDe2J5qMGKNCkUoGGftxgjhqs6hir8MNNp8M",
  "key33": "3oGa3fNfpUfFHokkkFXdtf6iRCJm37BrC3tTfFxknhQvCTdoXJoj4coJKAejr9vPsNR9EF1diuGi1c4aek4ENkym",
  "key34": "3qFKfJx8bYVWBG9h5ZjdASXDmji4oG7Ym7Cssi74rQxc2qimmf84voCFuRTTrrFZxD6iuXEkWmrS3YFXt1wXpjpH",
  "key35": "3AZGngJEW3NBz8x6EYXbP9suGFiykh3VooscVH3fgEvUM4vRwcjAYqZCoUnyEYQkp7UN3cihqVL478Rp5YffwX8g",
  "key36": "2PskLtkjFSRNDCzo5NDQNBEr19FgcKBQVWXQypcrxzB1tH5su3CP5FPh8s7gRhxXf5oidEADZV9JgRLA51DD5Mx7",
  "key37": "4ssLViH5VuXBdtVCdZvNMZmCjyszMuMVJeWm8DAMsY5dk6L4y9n2m4kNvr9XiW3xZg4QEW5fTqtfZRUz5LbesWY",
  "key38": "3dJK3Z9hiCvfuqtiJkrPscDTCxFejR5Kv2Wexxd685nNjYRxEx4Ve31EqcSj7tUukaZNmreRnUGJwDgNUdGbXZn7",
  "key39": "2bHd8TctgGczyhmZ4hhgdhos4SahaowB2EuajgURLaEJ7dB2s1iQ5m9GSHpbvPbLZGMZoBaBJbCHKHLRtgEMrXNX",
  "key40": "4KG9Lbhs4XgJ2WQtFXLfctRmUNVqB2EswyZmaN73tao2prUkmu1MUpexEi4fe51zNiGjkBUdPpFBqE4yCjZwYdou",
  "key41": "4NZKyvtY6oZJV2nGSv7v9CKFNV8NLvkFWLCVC7AS7VXPRigcZHztHMjFvdf8t7fWzaDQ4XR1tssM8ibwCbpZYKoQ",
  "key42": "4F7usgn14uU5PJ48JLiwAf4nQTC5j5QDtsyNaXBeuzbr6QHFoe34QLaABu2Aod6rtuh2hTnZZgKAiuHtd6MThvgt",
  "key43": "66WXZ9nVMKyDgHwzKp5o1U7CTF5vsPbMxYY44HmhTDQwemPGGJFvUwbHkVF8VQpjQw6rkDYLpXPF5q2b5N51CG3R",
  "key44": "386LkQsvwTQ2jmXNRPTREeHi3UkLDht9crLZcPPYbHMaLDwuRtPc22qP2n9mDqqvNLwmwCfKzdF8jQcB1MXWWE4k",
  "key45": "23eTnMZkzTWwf8Akk54rGFTsCus8p2rqLQ3h7EyEguan2BVkzRuLcQF8rcuoSTXRqi6wHjp8GpiuF4J39E9v4gTE"
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
