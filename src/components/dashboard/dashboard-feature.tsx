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
    "mXwyUWLKAGGjZCxXGdFu6bzsxTF77PCJac9n3b5hFLwMro9t7eW6AT9fK5K1Q2EJxzpew5t7HCwYNHK7Q7ouxpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kX6UayR9eT2d1p2emZe3c94uWxcFhZb4apjFGSNsbXD749meBHdReNHEzSXw56bFBaYii347DM61p62h9jt7YPH",
  "key1": "3TBpuRDTq3uVcL4hHTN4u4T5o1upq3L9cpQWL3em7mH6Y4KHsGnHm12Se5JYB1jV8pBd2bq43gBdDXSt9Cw9bPm7",
  "key2": "395MvZiUDLbdvP9tzT39McTYoLFB7pSJp6fqeHQCuDXViBZhZzbxE1keNvvExpmxjCqy72wSw9n5tyQEnoV4gF7N",
  "key3": "BG56aWdTVixBBQuEP8X4mxMB6Q7K3wzmucv86UhPoC5bEoPMC2xSPMKiysjxZJFtN2ysCJT9XsJsoxUBZvtF7Tf",
  "key4": "3qshucnckK2TPe74nPdYqfvRs7HgDBLrL3FcYjdAWxBhaDQZuXnqaMdaHdSyoyb2awojZxaXfMx8XGomajr1P3wW",
  "key5": "5MLJmjQ7PsGnyghpz82M4MeWmSPSGiyaLQFdEC3J2XiWJcR9ExWTkDWDQZ27uqomgoQ4PusvdDrJKLuqPKgxWven",
  "key6": "2ZKY1WUDAtkutoXCMshMxusa62Mt8Lzkb7HG2EVU6z2FjwaFMwhTL7dUCfKxQfxbTqxdCr2LvpjxZed2cdn8qEBv",
  "key7": "2HT9eNfuAGdmqyRWCcWe5bJY8wnMasSLTmJaHY5mnouqRTRVk6EzDK9TcK15RqrHW4ZMEdcUPhAa5nZ1my2F47pS",
  "key8": "3cy4arFgHi88Sh2q2v5GsdK47Rpgxcwfuqg7SfyQxna13ShhqAg55s6qkp6mFs4NbjesoCcnRECUzMJ7S3T42qr5",
  "key9": "3kXjjS5otmacT4RG4Q5QsvjPYVuPUDpkuZDRwRUEZWvNb8A2CQ4LX9dfRmJuA1snDSndSfYtB92nMr7Hzso6cyhB",
  "key10": "3XjpqcbxEwdPqnkQ91Ds6kmmpvQc452V4FrBQ7d95YWLiekYcnGXeraWzM88CuKR77LVWXqWqgddG9wrbycFjTtB",
  "key11": "4aYjZsHEANaXPBj7XjmrZCWRrGKqmVSWbf5zUBKaAHMHCmwkETz4jGbhsGR749kHpC8N8xSXmMhg8QaM11vk4iv7",
  "key12": "3BY2o6p7zwfkjQbJtmBW5T4wBZz63fJ7FipC5X57xor87ApAn2pxF4WdMFy81FbXAHQHKbXCjHygVThQz1ZEAYWv",
  "key13": "66ZEcAK1sTWxJisk9hKK8pDnM63WGXhyp5RK6L6cDa3AEB8XLdWdqF4jLEaJ4vLu96ZZqxXEqcadKAUcVWkH8B7w",
  "key14": "ERz53qe592Jc7Y3j4rjdsiHs4qvKpSM1bYBBXfmPzMyCLnx3SU2TuY1o66PW7Krzr7fjJzFpWWgkajtavZrabMd",
  "key15": "25SgcmSMM9xRWVLTYBXvYcX6CBebuDB6yorqfzG4TmsyQmyz3Z24PTbYUdXj6yaButXLasZGoHSrcqRjUXscV2Uv",
  "key16": "5pv2q88MuVn51v8Q7qoTfwcQmboXuyGFe5ve4pXaHjwtTan4SDnTydztJRnpsX4woHWk47B7Qu4dKQseaV6ghU8U",
  "key17": "4w5tJ2BDtKaiYsrauJeBwEKrrgo7VS5feyVJFebYP3NuTepCjxRfe9JYT72Sd2muRs3xE7nhAW557WmyAimBC2P3",
  "key18": "rv8abwwK4WUjiTWJHBwy3xdxpPvxg17ZBb6DG8eswGSyVjv5rLtYTGGbfVFb2Dd1kRGcHYdCZNYG6EFAGibQfTb",
  "key19": "2HJ3sgGnDuMF3PNzBX4wFTf9RmaXatNnPagkTCkJqZVS8n5EzeTx9AQsbDEJMqFNF3ELY3h91oF9JpYYAgGpV7Q",
  "key20": "25QZETNQQKCDAq6P2SnNqe1cQr9tyuYGGk1ofJoHbwLdQYGqAo3hE6NH5jgvv6qQgaB6yG67HM4L3uiRuCGpWs4A",
  "key21": "3ggVeW1EVbF51zVDPRkiXxP9CbGTNgk2cyLE6PGB6FefvF1dzR9mimFPBksfsynXizDcugvaD7hTBTpY4sUv9h9n",
  "key22": "4raeYuxaAcLSU1hHxDembS9VCbbDzyZSiR9JUd9Q2fCgLYuxsraErtHkGthCdKon5LGqPk3pmU45PhMkiFvYanZs",
  "key23": "37vyrSNB21FvVmPRnELS6QrDcDem4KDtFrQjdrWtATSpWao9YnVEbAztguR6N4WRQZJueva3cb83QEQtWeBdqVN5",
  "key24": "iD5Wv3UQvV1XVrjfFfDSzhFWRwLjMWFtcvLzHEJFrJu65UJfvUpKYTHsdDsKyfwNfupxVtRdBm5tKv9ekHGD98Q",
  "key25": "2zVCHpQWp7juztzbtfA7CqXtEBJijWk2vE5EamjWW3mRgUXkVLR2uJPHbXeCru7sq6nLKHyQmRXSUT5Xn56S4VMN",
  "key26": "5uK3p6qkf6r8NtHRpmjFucJJVeuztuVVmZo3fsp3odaYNiAeGbRpjUgCTFGJPxa8GKxbqf7vr7Yh6DFnzfbHruBE",
  "key27": "3eThzsNAiGTu1vmVmcx9671Nt3vu5vpLgBBnb7ZU7akDKp75gpycurxpjDgCNkLpe9HFpqEqrsp8njUZ1ABKYtqB",
  "key28": "4P97e3L3TFDp18mD9bZ2DH4VP6TEWC31JAEcYFQhyTATea6xznjoimvWxN8xQF1odCLLiUswFGaycUY2bYj3FUz1",
  "key29": "2SoDQL2Sb1E1B3c6X24NQTPCFMBywU6ZrH78t8gbB8tAgUE34PEmfup2QkA7Wdo2jLHBiCuzVhJEqoQBMsfkpXXp",
  "key30": "2354wCvb23proHjbRPNkLPars2FuhZqgwuwH38YKqjgKkZTfrEbsiANeS93qcp1ENBzmWv9wnzJxYkCqKCFy9YnZ",
  "key31": "46wi9jq8NyvZ68CD9n9idqKTLjwM9avQd6KGp2wxnXmwXLVrF5ZzCzLUh3ya1VLhpmZHVNw9US4PBCqT8G8ndSXF",
  "key32": "3MYK38uig24vCobuHF8ZET8ToriFnj94JzxkHQyBwNAvaBMWYhZSSgUBTW2eWKeuNp35t6XDCwV3Xn1wX8gZ9mVa",
  "key33": "21t9wNTCnT52L91Sj1TPFvb82ExYQRyrDNFzLHbAocQcWBh7d8YiGfBVvjEZMEwH666K2mt57e8dsFko9b3f8tWG",
  "key34": "28qiVinuWRRRtXKDdmM6ASmQ1p16vBU3igFhNzKQdwJTBNovDTEqgeLTa2bhBBfsp7zK6ciXb3VWVSxT2TtFor6f",
  "key35": "23mP4X2rgCzhq82MUJPi5WThDpRELzYbgd3bjx5XXiWkysMxZ93LT8mkQqnCGuc12DiLKUJ6S3AD5SqSjsu5dsjw",
  "key36": "3HrrXgBHZRArgLbgge5piYcJ183v6HHnm9iDk58qmvFzv8oFVwXwrAhcQsvuQBT5TxGxfdb8zxTgrrPC7mpJrTk9",
  "key37": "3NvANZ4TnE4wuN9AFPAgNfnKxesUPkX7XZC63GedVVqhV4xoGg2Yxyk1zkh97uvCE78qrh8uZjWN71Hns4aqZYwM",
  "key38": "2QiaDc4pJmQ7GSXfeRQ8LWhG6htkgvE1oW2AHVikQ8BoBhUtWuEmLSjcc4pcHnV93vrxaX2FZ14iJS5VJXsUc2WL",
  "key39": "4c6xMPGspCTWZSMfQ6KnYd6VQvhbhhsxYUmPNLdVPiPGvz5jV8xmd7zNFY35okYqD4q2PZ3M6cvguMmDjFHxLPGb",
  "key40": "52Nq98tXHEWmCGDv12qkzNxct4kUvKuP1fTJys5sKRQJNSU5Rw9j42p38jwG58cQuWkbazxD3RdtxBPei6fNMv2J",
  "key41": "2oradUYYD6yS6K5bm1B4f9rddzguQtgeQc4mRDTFzrTdQ7sV89a9qWvbpqEaPgxn8gtfovGc3XhLcCaViwymoGkW",
  "key42": "5tkLqVKiCtn4FaauzAJqgvDMrsktRHL7tJBF2u854dmbJorykqoztxNa9PS7jhb9n2xV5S7aScoRgtQi2GVB6bvN",
  "key43": "2W7RJ7TpQ8ZUgQBGJbmWBrb8rZeRXfEGdCRypqfFmWRzUupKvAL4Thx69GqQdj8nJUvQE4NZFkvHMTiSLCC5Nwh8"
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
