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
    "2KkTXEz2Q7PE1788fSJMdHPwymgfcvWtC9cvaB5vgujhjsYoWpZbSQLCRocdpxA8VynxxfqyvGXTEoU67QVefSWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4agMzKqb5mkRwWdAyhPUnNb5SaSEZHZRzjEMrQVqcm8rZCbHmFoLvvtuZPoqzLy3vPiTLaoMNdpw395L6nTv8d",
  "key1": "2ZGvk8V3bfMW3qTXNX6JdmMRx1RxKUjWRYD6XBCuobxRga5G81GM2a1qbyZPFsJb1cyfdewbk6u2d1oHTS4gVStg",
  "key2": "5YtGc3UVtjqMVXhU4Ky47prVL1656hMRnq544j4JvxrySbv6g7x2b6ooksx3GoxyGeNMUqjsXEHHjLZDriRFzsnK",
  "key3": "4Ev7hGayhs29Y1caNAjeCF5gh61Kb3fnEMMzssr6hKm2X3T6wsoEPHkyk1aKYdtcqQST3XzNV42u6nN1pF9AXBgY",
  "key4": "2vNTpJXjK8WfNi2JFAumJC8wyNYzQ9TwCw3jX46e4zTpDoxRdNz4AUbLw9eZ5RjQrd5ZmgFV5hQzeCSeeotzvzBV",
  "key5": "4MHU4MUuoXiPSYUNWAUccdwVLGwsXe5mExYmabiQ9P7AcEYr2YqwjF8EHne9iNYfsEBwfT4Qbrmfb3kLJe8tqM3o",
  "key6": "3ZG9fgbSZLTHwTCS4rU9R5dJjHmtF1qKsqedvMymLFiARn368H1iRXuD6LcTCotu7UF9YjGrNMoZFMCjVoQwf9i5",
  "key7": "2SZJrMoe3RsEs7Kxao7BuTkyVo4f8aQarF9JhJR2YQJxXzZXVyej9ZnUW8wASM51F4TbRfoehQiG7cyJXZvWAKYv",
  "key8": "2Z5pD4qmtJKUxh6TjS6p9FSqrK2mi1uUAnuWsWCPFFdS69UrZgQPvoWNf4rHnTbwupitdymSYLFdu7Ha94Rdpmxv",
  "key9": "4LMXR8Y6igdhFdUNG2Q3E8Hf8XAnpnZiH9g3zARhQJSPVp4xLd4KotMyesT7tkiVrCJZuHc3qBq8jzbnAi59oWB6",
  "key10": "36HDhmjWTUFh49Yig62hbJpkWT874gj7e1juSzesGnvcLtLMBdP5dptWwQKmqpKGGZJsxw1C6pEeKFQxdZ7GEMEX",
  "key11": "3wcp7KWWzMxd348rq92jVyLj1djYS2HM1SXZMbuYyUpkKJRfmn6UTnNa3A1BVjUNM7G62Cf92Lwowq8a7v56YWoJ",
  "key12": "SzvLBxyorVDQvrw7c8wRPoz591k6opYEnWzJHcktPWCyK24BKKUJiNvXP5MY8V1PcRivzFisGuds4KsgcbiD1Nt",
  "key13": "hv7AZ1LxoZBXEaMbB5LGGTc3NU8Xnp38sPaey1Bn5m1iKipQondyVnZAW33cPKzQXh9d2oEs3tczubWmY7r1z79",
  "key14": "YWfcmrqW4CzBAEb3FsHWN1L8yocKvUctiSntyZPrCAKUgRxDmFWLzjJxZ6AHsjHrLUzHceKE8R83nEPZbnhNujJ",
  "key15": "4uzgDvcSMVKN9jrai8S6vnRciV3GvZPG5unVUjJKrquiEEZWBdHWYHjFTP3LBejkRaMurmTW5UpxFFvP6WEdN6v",
  "key16": "5g5WbNBwAHNWHahUBfyZhjerU7yMfmE1JMDsvfn2cxqTYnQ2dXTQxgm6GBSyoYmYtcCuLdXvqK2jqEEXvLYiMZJS",
  "key17": "37XfDyrKPZvefyF6kzj4eLAJcix1nLN4sV8HvFYeM23koQgBVWFB1Sj9x9FeZefvXs4tegZuPX3gJbhcmDeygBCY",
  "key18": "3hCAR4hpuCKWapYDww2eHsSCjcNbvGreUBxKm2Dg8h2fGtsXkwpWajAh9H16svtc3T94UMqT3719wEQn8j4JBFqS",
  "key19": "3tB1RHptnuHDMUTD9Tps4xFYwsVCEs47EyD3tRUxJm4d3CvnrucuNpBwNM9b35ztFP6S3eRPwdHyMnf3xQbBWZda",
  "key20": "N8XyunPiYdPrjUDtYP3KAg4eFWQVcL4wbpcVzHdcRknMppoV1Fe4iqzMuPMRgbAmfS3tmVMBipUNy8h6MqStwdG",
  "key21": "4iqo4so2Aq2awZiwqA7yAY99MjSE5GvK2HMnCxNNq4xKswpnJyUYPrWKnUmNcVgzA8bWCyKbx9en2F8kcawNwY31",
  "key22": "2Xgyi1VyxtRE1ZqNhwxoUbCufZWC4cCLPMSVUpUgLM4zbqqC8crnMgsfBGr5mqgPeD329jrjzyWipr8eYy38YvU6",
  "key23": "2gfTG56xvNSGyZ1hAzbNJjmwQHKbuZcDQvC8gJzBXYnEiMrT3BPFGfgezA5ckR5sJsjC73E7Q9wrDVCm7cZKYZSS",
  "key24": "5U7487e8yCwTDjSkCemR5gCaKfHoD6emS5p5toxPEgv4SYSqV1VE3umuYefrDGpsjPyR7jCH6cGM2dhAejWpnZi5",
  "key25": "knErYMkTzRR9kgscepaTR5ACuSyVZuJMB6q6aApMDw5RjDwFYPntExwonDH9n1wiHbHts6sufXsmfndYUca48U3",
  "key26": "2wGt3dMeREJgiQhLtedswdL3Xm72wKovcfRnSTafkcDfmkGQJV2eSNVUAiVbzpztBDRAkSSwWBvQhFRi8VxuitfS",
  "key27": "5EkUyeX5iF5KjF6yEQ32Y411wfEi3dJfqwh278eLHuKqofk3gJYJH8kEkALSanUXWuNx9bM9M8jKoW1VYNPW7V2f",
  "key28": "3V54ovTAUdNwWUeJyfAvbHNMRBKKJof7wGWf4zrHX1Mv6CxRYP1QLRC76EGrvZUkNdd7RCLfySbNeSkJNtMS3KWG",
  "key29": "96UPMr83wCTZ9XnoH6Dh3drGHVY3S1wr4ecBoNkcTx8KVSc5HTkp1kCQ8sRoMmB8T3Mb8He8CuT2vgknVZK5aq5"
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
