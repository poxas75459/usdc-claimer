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
    "3YQHkKuimof6kv1vFgqpTmwKL3MgX9p3iVXHWNwyHWbM2FLeC5kdP9LQE3uedqWLoHmqJPjGRJwP4fhdLqT9Jndx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hyEL6ht2hL7E1Ff1LcVswUSbLmi3gwGKWy8KAuauTa3R4vsi8GzWdgT4Ty5TfURPhsQAoZJnXqJeqVK5YdJ29qW",
  "key1": "JpMxoiusGxwAttthv2q1KAfwdZoFgWZ9ModGMhkDFPuNEAyPUa1ySvwmfT2abhH6kjXfw6UUA4qrQ7aB9LkGrDf",
  "key2": "4KBMPWNXh9mfjjuG9mXpKmp4v46vEDoqFhjnYboSFNhxigha9x89uP2QvQw4rvE2LwpawFqUEZfn5bUWgcP3qcwo",
  "key3": "u4KW6VWZToscpbzQa93Sth1DwK6tRxFfqyD26cuKvQR2bRgUzwyv8kyfDbRPjRmmzXDqQyQU67167EWsPzG9H8v",
  "key4": "Gqi2FpZRC7ZFH1c2YvSGpx1Jve6MhUfbu4Jhx8WMgAWmVJHDcGh2TZVnoDabeXpvH2uMCfCsbXteYy73nydg1UJ",
  "key5": "4DT9HVo7xFinfUT8yP5FWtFzhHKPqL6gYXqSw78hoWRFrXBDTpK2d31j5d5psfP2whi5UxqjXC9YqCpuoWkjoZbF",
  "key6": "3WTZouym6LYdy3hG2omxJamNMmKgexkztAXnkMdod8C5rbdfPoAnkJ93r8yBGHaA5YeU4G8qjUQiDiMALiQ3NEtf",
  "key7": "4hXpJBVivahEf1xZyZXEoXQGEjBYa3tErAi94fmEBc3881HT29t1hufM3dgCbSfxbmr4SkB6Bks4UuXbHv9qtyMF",
  "key8": "3q7sUsVbnLR1QLhJnxCQRvkWGRAz39JJCzsLHTVtWHW8J3vofhMzDpBUtw7nUnvBqYHvy1FDtxkQ5WF9PvUzMRqB",
  "key9": "5GkuBQJprRmkxrNGy9sMU1w4A4EtPH3aDqbSwRHC6Q5Kw1jFe7CPT2R7SgFm3LeADju3pFQJfStmVDsbyopAFXp",
  "key10": "2LaRH9hyyKsxok4KZVECfhAYFLmhdDuRbKXSNhgZ1Pa54QhhDrg7GvgscJPoe1US8coGkkzaeTwsa5JpT6Tz7g8V",
  "key11": "3H53dERghAe1Ut26SwyUmcmyWe1hhvqQyQkNZyJJvfToc4tpEtz6zm3ha1FcaS8ftqou9XvfR5AKJJEE2RS2umhg",
  "key12": "4Et1iRZrxQ67dZkhde7tJQEmQ8nBXTLzJPGuNTFbYuN2TD7JvjWdaTVf9zLQd84NojzPutT9w2nCEtcqoFW6gwCm",
  "key13": "3K5ARW9eXkuTezZ72mwLhsNTjFiYgMdtR65m4UUSTt9McEGCcZG8EANuFdDt5eh91FhZwmS8DM5jPkR7z3j1S9d9",
  "key14": "4c4qpVHHNGeUzQdvAQipvQGZYz96qShVaUoGFDhX1gRaXojG4XanNqcjgLVKQoMoLLyB97ABAGYDjn27pURB6Ah",
  "key15": "65w69XuNZ8MTANiJYwGmbSsU9ZrdcUuG2UZ3Q84kFQThdkjopYsQGgqfaseXhtU3aUKTLuVoJiUouhMC8WrRPzFY",
  "key16": "5hLotGQC4XCGhNYa4WRr3P1qqzSbP6X7YKyNsEP1F5QqFvWubgi4bSxoduu5HfxgLFPy5FsMFT9bQUNPrpo54UzR",
  "key17": "2pYkaEK8WGKAc4wuEebP4w9X5HpCH27fpS15jxqEe67fbcnrcBzig2Ze29PgWyexNMEZxJD33XbRvBoTJeyvkBYC",
  "key18": "5fT4K54Hvj2dGpJZbyhcpc1VbARx6EbaPJiy1G2nFA95o21h1sNeXBtL4viLa46DyRQ8jgrkVhkQefCfC82nhWqm",
  "key19": "1RdMmYEktzupKtza5zdMkLkj71UsyZAqoVykMKdfWnePE57BuFUeEkozmGF1oiMy7ns39gQbxiec6UiqHodw3RB",
  "key20": "2EMr3D32P5vrrWbRzACyBvQWGX5nvhGLraw5mKKcvbPkRgUeRxo6W811XwASV5sr5TpPcmgEsDMM2KRwqVugbfRV",
  "key21": "QtT8kR6XqBu2sudxH1wwLqjdnx4qjRMarnoA3wF9kC2MHQHMt7StMhDzexy6YjEZx9M9N3w3JKKnDtjwLhER8hN",
  "key22": "24hddqLn3QvNWmYKA2aJFfJPtTsH1qB9dRWjjAbZGWtWSkkXHQ55vUjzJAD6CwUF186pNoZY4fqn3rcRXsujLkoS",
  "key23": "2FrcuGriV6JeKsBP5z25sU3o8foJWsAtXSrJh37TFMgGH7Vb9bY84pV27RWeVEd5Bkys6MoL8PfeysvkTEgABVYC",
  "key24": "5xDwD1air3Yv3m3hVgzgbxh2ebkjjzQARyq9CjFL88LzJuryy9m3dooCb7AJSPBwmrB7fVj5NrQqWzyWquJNFdFL",
  "key25": "33TeHEWsNTzG9rxJXQkBpcCBxkER1T71n91QrKiWoKeLUSZj24femKAVwKSuk5huJMsRXYtgaBJaUDZmvcAfxYYf",
  "key26": "4tq3chcnvY1cGU7mnFcG4vVomPHtaubGceTDXkaHtoMD8zHjxRHjtPWKrF8aVDsab4X1XcRgdGcrAQbPCPmgRyet",
  "key27": "E2LHjjsn8jWXtKTgKznf1E7rn168hTJ8Ds2v2K2d3Fs1QNMSKqcJvdeia6oUKrx4JGr87muVqwgJGiNXRaiTyrG",
  "key28": "4iGhW6TRF2YYc5PiX3E77NFxV4BSrvdiauhm1MSEEsaMWjwGczGWyYu1KwTJka96FnWGPyQPicyFDHYeMDtd84KB",
  "key29": "QiowyuhWwrWFXDN81jbDJjgWE94YT3a7KLZJYS9Uf4HSsRFxgCe2Z5sbwUYLT6PxPiDESpb7RowvB1A3vhzoECS",
  "key30": "4Uk5N6h3SMoRXUZxLVdq2C2T1sYMBfCk5yTwFShcU2QBwWhXmPgpEbEFHXQfPE1iGWtBUofz3J9z6FNGiiqBwjHf",
  "key31": "4JXhe86ZpkRn3m2FW6tK6Hk4YqpsjHqzZ7g7KaJ7Dj5zFm4TE7ocpqdfdK9A69ozVRUzzA2KWvpbAkqj4sBbkvKw",
  "key32": "4Wj1K8V5iZYHcLYo5fZykZ369BhYyAeuteYKivBkPKzCxaX6Twem54WoebUCUPpexryfj626MAAqY8URkqLBauYR"
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
