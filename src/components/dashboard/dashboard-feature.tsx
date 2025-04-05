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
    "4gMSCB51M9AyEbV2ZJjF3x4tW7e5Q1ijaWhRwP3LDY9SHTicP4WND8HjLLjoobHpzaAsob7HZsh8W2N29wNaw8Lh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSgVY3yBSpZn77qe6Ny4aJ3PuSAB2wCsPsR4a9qvsL5YmqvqMUTNo7BFQG6zh3Zw5DS1bRr3yDrLMZrjmBPNmg4",
  "key1": "3fL89yyLtv2Xzuq73hBJFiVGEhgWCESAwhAYemNbUgFkVtFCZowrZQRcaXLSKs7CgMcqGKWrT8bmUwPuvzekF33",
  "key2": "2zqKHgXtXgMeG7ndLKtJMosECbnPxEiMQotN2vTc3DWpuFGGGxCv5ZBomvDHQb8kVoyuq1QdcEVq595ksZ6gXHZ6",
  "key3": "4pqoqn9cZReZPsTtXniLteFphNMohKh57XMjwa8WteQtUn3Tjdo3kTBFSFATZJ9LscH26FGW8YKqCvVDtzyGJVt9",
  "key4": "5TFejpd2HZ6kFNF3gYRzA1fBwEp6C3juzJFR5JRL8zX59rN9WHueXiQjndVfRx61gR3vJmVk9Ay8gHh4B3rQnzMM",
  "key5": "3Hpv12Wnw9xXy7ZRCBav7diNTyPK1k3WUJg8Mxn7YsJ6gRk29EygENnEJZVmqojh5hka5AtMECydsCQASP42Rp8e",
  "key6": "3udHYM1nHjN5kVt8gFB9btpukZfFsdw2mRgvKqi4VeeuTihnyFNQFQtiY17Cfz3jKAggnLzBZMayQixQYnok5SJA",
  "key7": "4kKvpAKT9cUnDR5V1X6xU3wcWTWvUGpnu9vAhf9cfiomV3f98vC5kh71znouKNXLPuvcGF6v7LC6CvzRLwjyziX5",
  "key8": "3ec6iz5j1AWbQigQvyntEcTHuSJy8hjGopq1a6NQ9SFWQirkQRx7fhersVHjHqhv59BdoxRTtb3A69d5FWbRstiH",
  "key9": "5ixM1icFBMzDH5VH9QRqgm3Txd57Xbe1QFpFx2MK53k8rvcMPQ6GdzF8bEBQvN1hfw2A5g8ryM5i4MrMpdJEcRxT",
  "key10": "3djsyMUe5i5oqX5WhXrjqBHeS9TYbj8xKDE3YivqX2dyZ5Bxqs2FjqzBWuF2NfXpA827eQfGuPoM1kpsEmGrhA8w",
  "key11": "5aUDo84os3yVAdzivqHGfk75PijWU7GnGgQhY2nP5PoU9VQ9x46iwNpyYvwL3NE2rqnUFAXcrqXmM3h7Zmkn7TVZ",
  "key12": "R5tp5cHKD3F7Wgr6bakQe1UQwJaerqAvaRP5Da5GyMAoi8AbpFFLPLTL76vwJt1HJNkfDLwGx1XAsAz6uvfGLSC",
  "key13": "2HBXcTx5nVEbvj8HhpPXuhMZp8h8qhHFLih3XLytsCPCZvVj8zYfhSJbgBLNL3BseMhDarjS3NJNfZVRMhAkE8Qj",
  "key14": "9PMeBKiK6iV4GSNFeMMv7xrGVtBiAirmuJ9nKaP53snS7hQ3Fm4XcEg31PNPZeHLDdd8PMsDfPHXzKMYdpdcFoD",
  "key15": "2FAMSeLcftdxBvYVQuQHRTutgC3qjsTh4SdeRspKuasZgQreGaH25aJKPyyWnYe5BZe61jZAhxJhZzG85tSZ4BVv",
  "key16": "sn1Srg5EkFKZqYkR9PYpExfGfYML3yeVZCBwo4CpzbaX2qBhGNh4EVN3RvUNMoGJr29whhKECdrb5JprMPF2RHp",
  "key17": "3J9J2MzyeEqaRcDfvWeHWex7BAx1ByLs5xcirMFUSVs8YiX65MzVyCD2ft8RczZEeTUGnXbckbAeH22dgMJ6JQhQ",
  "key18": "5GYGrU2JWoxRE7a6pHWFJgEfkyMQUHpbMyKMZ9anrmBnKqS6Vk9XSuXBibCD2uYn58ThSpcX6rMctb32bf1HuYJT",
  "key19": "39QQ7pRiEgurgAJi3gpmb9rTGQPvsEKtyLdQtsV5im6DfZbfovYMbF1BBDo7zcMqgSGxaBQ354yWX31DeAAoMZn4",
  "key20": "2vZVDwPPvYfBLAnMLEwUgr9S3AjoXEQqeYe3zeQ9D9kyxYDk5xiESpRB5mi73CqsGfMxyieW8ATvxEaQ4JkeSGTa",
  "key21": "C6BNiffW5sazx3wBUk22R6juN15UZrhZvbUstjx5Wu6692Q2tSXnwwAg1igeXSaU3zfSvJBeVdmiRUU8KnM66tb",
  "key22": "EgYwXGT6AafGsHKcypfzV49QDqYgPwFU5thT8RzT8pBgrD2LNhuQFcJwoFyjSzx6AVT7Z4DZxLCUkFRqRntKxhp",
  "key23": "4NmbefJXa6iWuwmEaRpr7ajXCrgHDrirWi95vPkESizXBxNfuBBZeq9o1oGSDnbS6W6eVo5H7XP9XZ9QWnGTJYhR",
  "key24": "5RGETjzRhq1WAQtHme514vFNbosh5vwou7rQ9LpNnP9VTbkrEdcTrEfFz7ApFHG2ovfvVh25jEnA5Mw2PCHg3Ltg",
  "key25": "2FwoV2x22C8mL35VVFwChfkYn4nvL9cXnkG1Hc17VoRgZ2QAjHidUJjgJqUj8caP2QezuiEgsm2M33gz3xoHhkP4",
  "key26": "535whd9cpMuSwfo8fhU6p9j4y4dEbHZd7cNXoecsLFc5gbbrbeScLRpKWn356skVQGSax443wTbLYu7rdCj9p1SP",
  "key27": "3qsPAVZCXWx9RQwfgsrMzuLunfwEnntSjq7AsPUWCw58RL3wzvunJoisUAsvmBK3cCSbevzJPUW5iYoDV2F3JKyY",
  "key28": "4gkfioKbkhZaWNhwZVYMB3NkrAV1dcry37faW118on7otqWek4A8QKzrfdTJNHet6V313Ls2hRtWEQyV8xCiRNAK",
  "key29": "3YVeQ1A3FJZz18XJNgQGrzgNtMXAErzo33XMu4JSu3ZjYNS6sYP63CYubxGdPeaWaJYeR4GWFX9gdMMcJL3i4sjF",
  "key30": "2F2ynoBx9cdkUzQHqNZpDHvKZbfZ6J3zqtNmz8uym3w6FShSk97XK78zgq98JiUJ7TkNMCXn4uLjpDoudw1GjCBh",
  "key31": "67qLdkYVsxJLaJDkgG87bjaGuCpBT5cssUBYRhCQ39unL8azKWmEJPjiH2YV2RuMz9pqF5vLVP8WxL9iY244G5gv"
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
