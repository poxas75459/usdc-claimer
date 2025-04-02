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
    "5fTNgNPRDEiUPT7B5vJSERHH75ohZnqNWuX1jRi45q3N5mFU3ZNo8f9rfmaULBrMNH1GYdXtFfXMLZEBFhGQGAxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdDoRVtMthpfRbSm7K7yWZjJFGcEGhrAZxsq2pdjM4JRv2Mq7eXhGVBCr1Gixqf31ZuAPT6kKBWVyPMEGwWQr3M",
  "key1": "5iz4bdahjhLemtHXMB5SJ6qLY4UPzwystzsoqGxXugcJEMmnrrdxHZ9eCUqXZEhR9PooCjsazBxddsJbsmDtkL4E",
  "key2": "5ryNr8s2Dcd11paTG9PHFQedeDa5NWSJPmW8vxH3MowMJW2CAKeKepC8xLyHJRrwjA4arL7PKNDt5oE5UaJDSoqC",
  "key3": "2NXK6Y2JiQm75d38wXgGTbA4kG4KahCKnXekFW2Gb39qg6DpkdguWLYFTVDbsu45xps6XKFz3YdMbU9cQJGGnJtf",
  "key4": "3fSLNq5iAU1Te8ctGWJuKEYp8GtExc2ZxhoDpVL8yU7kAxgd9SWoRkfsMzWB2w8mGtEKLEhc3NQyi8Araz5u122v",
  "key5": "4p3p6m14CLUgwk9ViGa8G5aCFka5VmDm6e5jZUbGB43oCFKwjHiQ6ChTu1c7BRY5ksoFapuoNPoCCdxcFV5b3xUs",
  "key6": "5cfCBAXkPhbjjQsVzZRvoPb79uc1yngcuLcq7epevXFfKFy7MML25Ap1bcyHSyVdxKRkZccmcJqtg8pXtN3q1Ziy",
  "key7": "3qY5Kp58AuzEyLcfyFy1GgtZHfJyPpkKFjDrq91ptGgq9LrNeB6PmG3QQDhNHh36pfvzbYVckg6j2qxVdMbPm7vi",
  "key8": "3qZJFZxMZDcXTaiFh728VWtyoohxubR6YNMXV619AThpvdSvj3XYq15UrfZUbeoh3RiD72GFn1KsLaYZdNAA1g5q",
  "key9": "2Ler3XjZiREinicGHMxrG8wh2rdpNpPhCcXx4qyyMN2cTQbw3Ne5s7sXUFwrB5iQMvEY5VruQ5w9P2vSkFuGV1bQ",
  "key10": "4vnuafsKBntfUNZE53LiPoLwxZP1Tt56scMtQ4zPMYCieYG1L62EoT6fWwA4X242UA6wHrqWJGxqmVbJa14bF1Md",
  "key11": "4Uvr33SGbed7wz3mArJiAdMJBkBBa6B372ZF96LADsirJF4uinJVHyKUrwizz4mQ8AWepkEm5nSvd4sQD95CEaNM",
  "key12": "4svbVN7n3o8MdNXuA4JyQBK5XJtMKgecQJ7VEHqfEH2udMr3wnfYwL1STVSqiL7aKn2ekakGVgKzbQC9sdnDcrNE",
  "key13": "4sCA8YnczE4USXDaFoQg7z2Z3mS1kmiSfMC5Xe99NKSYTLVKv7dkuXgCpJTecDoXszTJuKtSQ6xTXJ1ZsQ3zC8hv",
  "key14": "2zu325XLdo4FsCGfzBJMFxGCJGNnpMyPWkBmsNotDS26whEoHEaUJxoaVMeMxCZQUp1brDrxd9TRbNjkU2C5MGkS",
  "key15": "2u9o5fD1WtKQLXUgzeEw7MKdr1kGJtMcaqn3EovaHENvQpJA8RELJC69Rqn4x65ZqvZ8NZEwvTS4iw929P25i5qA",
  "key16": "3j9GgbwKGiK5FLFKuKb2U7R4hqhjWDfdAv1Tzfxj7fQA2MJFGqd4Zfp2wRjTrnxNQRjw7aRvPtfyesnFJX8m69Xo",
  "key17": "3uSCV3A9pwjn2GkWJqMVd4rNxzTrfrRBctVy1LKbMcZw4g1T9qLEoka9cnLHhymR3zhAMEHX6K42CCx8QfMJ2Gqd",
  "key18": "5es9R8ehLjaeYHAMeLAs7QeRpQvKZSBvst6vsj9MxPdcuJPPka6cedrh1ECozEDKzShKo31P2MqjdV7kUy4n8ZKT",
  "key19": "5fPMLfeX3ZoGSynnAvPcZrYGb4MqRgtaS7xB95PiaRNKd7FejbixHmzEPDRzEBsv2UBvDLAJsVhQyxRfrEt7hKw5",
  "key20": "2uoTcQwrR3KQ2L2aetTzecc6A771juwMKWDFeBAQEC5hS54Xt8VdadJkQpVrK1ixe9UYYxontXQvuKsk29mYrAju",
  "key21": "2MAeHoCsUJ8YQpSJMjoTVKd16wLKmXw9TYReVEcDRcCXiUjLYHjihgDKTmQCbZ7Pt5eE8EXBftVG8qQHQWM63Tz7",
  "key22": "3nTXjZEy5RamHPEsWRjvJHGVMw5SFqYf565A2dejw6H3yFNQTF9LpnTg8U19NPBKxJq2FVGyD4dfK9Uz8RtxyPwL",
  "key23": "4oHviQouiRBcGNuKqcJHnPKyemKxyv5ADXgRUGf4F5xnZc8qfkmPtPCXJLyxmLnDcFj7PBxzMZuPaSzT2nJARy9w",
  "key24": "3zRkkaxDCy12WRpoJAhg116F13h8DKdJkQkFuWyzydhWJWg3jbs1RBRzLMYMCMLWu5XNVvTNYkzxnH8CoADeC5Q9",
  "key25": "EG1QTThAcNPUWiYk4JVWLWkC7MCEc5F9z4wp9eAJgq9uKEWruvDG71DjA3kfThuTacSdCNonuiRoBj5bfmJeczn",
  "key26": "24HndmL4zB7NLE1CAgJnpfkUo9oa6aunSSiseHSEiBwumS3ZfZuUw8nfBua6GxRWf9PGkoJygRtdXra5nFv1N7yV",
  "key27": "4TGG9fipxhb2hUrtC4zA7GQ1xDqsw4vWrZys8SaQTt4R8FpTagvHXDJZhwM8DQP8yGiowwa7kwwzm31rsyagfSf4",
  "key28": "4FpuPbL7uzBpiEJATjf2WSEUrMG5EZbLSXUEEVDbtkMEJrSh1rcHU67TDcrPy31KkFMen7iTZEzq5e88qnJMGbRn",
  "key29": "3M84JKDqCUQNFviF3dE9jD8nJQivsFimzHW2sCDsui8vx9gtASxwtcvTBVDJdTFJ8DgaWFoGGPBCUvRqHG36gpQY",
  "key30": "4NvGCbLZ6vfFcDycjJrBnh7xVRgPcktyb4zaXXBv4yef2JBZMgDcJK4CBTgA8DJ98mhpsSaiPMUkcshzZ9A5VAfa",
  "key31": "5EP3wBbHUStG4joYGj7prd6hXPwG44FdoTTiNdmFKRuKxtsS95fBycebrVh43HU7svg3Kq1BEbX1CK3DFxKJLava",
  "key32": "36n17Zq22UEAY6UTTV92XY8gW1pxgG7V4PvAUtrPa6WrQHZq1YEoSgUH1R4WXWQLVTugB8ZS5Aq6of1EW6EzgFGE",
  "key33": "Ryu6UW6ba7vdLmqEh7hCUAoNECfsUkHcu9qSBpFPJ8344XtzDwCZ7G3aCCoSQUWyGT7fQut2txKnZD3MzP49cst",
  "key34": "1L496GchgHkLuSAj8PpsGjVcKABbDRdRXxerqtFP2WY7dfjtCjQQnEXtXGFS6HkTFNTWsPf4UVKYP1f4uGBCFQE",
  "key35": "2ejA8jUB15eesPSzZvKMYmka2wazBPyoyKDa7JQC5radZ4iszao8LLduRJUbMhMkKkUBjCD3BYMYTQFtk2RTSneF",
  "key36": "ECAAC9eUoXLp4VsbXb6wpeWbgHbvUBNFoFFaqoSdkDhNaZ2JYu1RiDje7Xjwd97ckuQQ5MoudFCWxqmSQ4pUgJq",
  "key37": "4MFrBBYWkQtfuk7a3iP2Z8Pq3nWVDBFh4STahqrRAZCE3Xm8AcEQwcHBPCam52Vk6ZU6HMuusNHa4SEm4yd1USDD",
  "key38": "m2WjSgvEMf8rdavvSdi18r4bocJy6jMVZvgH4cdRdJpZjqVUBVRizEy14S6T5pqxZ2KReHNpDrpN4wbUF5AWvLA",
  "key39": "4zDwQaygRxfpm397UQz4R37JDr7jSYjprBVe4Q3gwDqnAVdyQS1HrqUw2tTEZ2cGBK1WRTmhRXGsx86zGGTTseuG",
  "key40": "6moS8ahDmQAKyJPWCiUzqr9kKMe7yuKffsQKmjoHCTBg4gjBnEjW7yqzitdRw5cR5jZqisWdgWnsi8aE8227uFm"
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
