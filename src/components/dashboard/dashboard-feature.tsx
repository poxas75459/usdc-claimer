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
    "4ACMV91FJHgNcm2Kkiy7gFGAmt8fCT19ooyJVBu4n4SU6E7QmLxWrAmyJK9SxN37F1aRgypxysdmZVT2WzxER8bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gSTvFmjLDRmB2rPFQuKXCpXXHWb4mTpoqjy8apMHzrrLErfPLL947yFfZkhySydo7xK7xRe3Bw9Ap5nQYDYYUVF",
  "key1": "5vNpvaNUAMBaEKtarxLHhd57Maf83F2ssZZQ9YjgTqTs2URKs57tKtope5xvTBzW6KXYNWP54ev6QETc9nEmy34E",
  "key2": "59ayt1B1PAt8MQSdyzTtDDQRV1b2vTo4NWjgKBCtpA5BexWnhywMBE7Xd199wG8qfBfV9EymZiTTjPArqdjLZY5B",
  "key3": "2RvmLFd5ULxpFSAbPTqAo9KxuEPXzFCPzK4D4omAyXz8WsKX57Ro88kCMTZQKa7CHt9Pbyg1uyssDidYUMoY4zFM",
  "key4": "2vZpvHszzMyefg66zmeT3XwJEVhAUbnAqAwij5yXNAxbLk8yZnqZkCEqZussMD48HqYH9kPuDB6NQeEFDMB916pY",
  "key5": "5PGiH8oggNr2HWq29rCnbG5AVxUchXkAoJYRaubVzJd6Neni9jqp35rWr1RCT8tpZrVD1o8TFMbT5KxyDHbLuMnu",
  "key6": "5Q2tvRmW8k9jfD9uACBCJ7dTsTv6qkRiR11Rgw83wqHahPbkALyqZsrwVCbjC44jr72oJLVFDRgNhXYzTMnLVsau",
  "key7": "47Ziz4gNwA54HiFiEB1DKyrvHxn8YR1zornqu228uWiSmWZa69WiKfG3efaT4dJ4AFyM7VqMfVWbjjo5mhrdTcJB",
  "key8": "xwkKT6LxFq3i8SuaSfzKWuKN5iSPSbUkrFG5fbgt9Ro6gmWaj3YNVxyBk6ZzNNeLYwjrWTEwkqf9XgGFfj7bmth",
  "key9": "41KZKWUwoZwocX2XsKgagPRUDbNR4qR26rsCfFta7hHvjhj5s8WdpZuKDpPU22gnaHWVx6ZrWSoCXJad2YTr54jw",
  "key10": "465GrMCrnSjSCcfifPdE4aFJiEfwreYkGJYHx2tyirjYVQ7KHjwnrH5Bvj7WC9mugJzBCN1qryAA3443rFkLECVG",
  "key11": "2AbHtUA2ttVLuiZujDNogeBxeuFmpKqdRjUqbMEMooJBVVPSaoS3SQEQHYnnCku3QtbEEeebb25tP5iU4Zc1mrjc",
  "key12": "4b4aotmiNqy2NR1XxtpMKj9GudW2ceZgLMHmdSv191USbJkdfeezRpSoYtMndhfZcNnWLx2tioMFBT553w8Wa41z",
  "key13": "2bjCSzXn6Ps3cJkx1ti65JEaoy3N3qHC5YRqL1j6CxPyue7A7utMurPp8btMnvneBcL9LYdy1a3qv17YLP3tyAta",
  "key14": "2WFeorFPSzAgPsq8oSZoyHdk2avs2mHhqARD3UDdWJbDhATHH3eRG2fzaszus6jivjiQjLz4HMNjTGMUSh97SKCi",
  "key15": "5CHfaDFEXuMWBwxfwTVfvugzs6niAfKcVqLr5HqEveyJ9L1sWS9t4wQpPwAQvqs3SkA6zFHi1ENcU4GfAyHrZ5k7",
  "key16": "2gEEGV6VoXEPwAsf7QHpejMt5vTHMkrbEDfBJw81ewSdVas3YbbutnANA8WooebkesYbYw15ZPktAujXt6NLo7Fq",
  "key17": "4GQExYLXPfjyB1Ahtj1nbXJApyR7vnqbRuKVPVsWqNBZNn8mEHtSmwb45xCppqWXxXWJrgRocD5jXGh3VkcJJRhq",
  "key18": "BLYMC3HqiZJs5a1dxL6cUxjqH2iV9ZkqGns5fnMjqwFoDFEW5KoYcHSGnFTE8hb1CJERn35rzujQLu5RZWzLv7Z",
  "key19": "U7nfuAWxWgXboZTg7E8jFBvxbFNec7vmFY3dxvdNNuPX32v3y4uxXp94iAcqeXmxsNzfVagQicWZJvyxqkF51MC",
  "key20": "4YVEKdVnBX5VQziDTBu3YdP73ddh8mhkekf4Wkd2RhhmqbCp1UdnTnbsN8iMqyy6V1A4wqdzgU2B3rGy7EHEiDPD",
  "key21": "uMbQwCKWuAiPTFrvvv4kBADnPvGmhkCLHzDkx5KmYNYEJH9JgqWxx3YL1HME8qJ7VmjTXsqE9hSeK77tYsArA6u",
  "key22": "59VaQCXr5QsobzSDEPLnZhgpiCNpdEVpNT1d7ezoLmeoVvrJS19gN5WTvS21G92pdMsJpyssLYZ414cyKvzvoion",
  "key23": "bGfH6rtdCdcW32EkXnRDFpWECiMhxkEBCp94Vv6e88YUP3uU6tTkJdwdv9DYGYHirrDLzWdt4aYrQwtqTq1kViF",
  "key24": "5Q2uXvfiFp8zhhdnp63EgCHe1w9xBAu1K967yPppTxdRzb3yscqGz9jgYxvJoGu78WetEjSnVAUmWGqF5exm97Et",
  "key25": "3ixpzPCZSLQodrKUHHN2Jncd1T1auv2J677nWZoiqAtbJ5FbYTUjrJ6nkJfVUxGtcC4bYX3Jb6xwmLaFcCwVjHrE",
  "key26": "2zDvhNA9hfy6EqHKHDVZipZsWHvMSQfFskmrEdrEfWrErVvPZ2mT2C8BX37utzLt1EGUqtVpZYmDgVeYrxX7KXFU",
  "key27": "4zGLpV3kBx5s6Y1geAgci7XWMatuYRGEdXivFarf9D6RM87ofaZzkZx9fB1hvisthWBw3wFjd5r5ip2ThqJFx2Jr",
  "key28": "3NZYMq1Tobfi96cgQEmdvxDFUEvnPGc4oMddN6hjecJBEFxamySEuAqgQtXugK3jUgbu8Vpsw7n67MG28EHktsnE",
  "key29": "2tgUAAwLB73gbTjXhaDPypZyT5q423JpvJ2hkNmA5ZJvTxFpzUrF5cxNmu9FrUmyvNSZCoJogiTCmZqAYVwH2qTZ",
  "key30": "8paiVDHGcRMppfETPryiuAyd6LXMturQQioLnWMB61oU58m4Qv8VEVvRjYwPwaczFexCaDvsCNJ5NF3DTsu77VT",
  "key31": "5cni8UaUjbqgSydpozLDy9b8f1VZdCgHz4jGwzxEhdAVAn4YXc4qjdiU4x5P5ywgcSMPGAr3GZQyhj38ENvkpHGr",
  "key32": "3nGVLRJskD894Y2wgJGkpjWnhq9nPMG6VbA4kALqad5b8Qh8xnQio4m458EKN1NeDoFNwc5PdoewzDR2RYncKDku",
  "key33": "4N8h3gHd9b33NwfrmbDyjPEEW3iwZ1A2r1Pb26Sd47hGPtMoVXjBmd1X1qfYtZUs2buc97j7CMvUpvGJ875iaNjK",
  "key34": "4mDGrpY9f7dcjGpDD6wTYEc7RYsQYbYc3Ef66nfWzqWbhiojKUaxrBqY1WENi43YBjpGmdh8yaeMFPwy9R1ZNJmP",
  "key35": "7XUxpTkS1GYe8sMhwKUzpbhYY48G3v5FeoCo38YT7EcGcSCviWaW7MAZnZ27eaoSXadbWwUDNDNeqpVKdaWPFk9",
  "key36": "2RvzWjUXDx7xgr2yq7GTiJmfLwtkdRS42Eh6Ej9Vqfo9yf8XtJdEX2QERGznREn9iAzSPqk2xqffs2Uk71ZXR2Vj",
  "key37": "4thinvkcDVkxbnok5SPSnLZkG7yV5C9SNTRNGgc9Zip6QZZceguyHuxgbXRcgFozZByHVPE8eX92xFSU2tMkfzke",
  "key38": "4dtxXicUNmywsNwU873pWSUVTV3qWWNf1cfuQX7G7ngJ7AcCmKaLEWDf9TedmXPZwp4AHs5AvTfGzkg8BpafWtqc",
  "key39": "5pGk2GGRpA4KRR2a7GeykRHCuVaDuogE6Ni6FGDJXkEbyXHuaBLM8Y8f9oDiaTUNncympvkuVYArr8MG4RKEUxah"
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
