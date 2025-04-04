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
    "5m6NyMidtjJfm8rYnQDVFftP7aCQwTFFpGwW2UZ6ur2chgpBpCY6KmuvbdH9fgkBPTytgnz3KcjpT4Ct6HTCgU5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDtKqH1WvMJYsm9bzq4kRfKFqsaYwZkiNrJcF3YxsBBMWfkjzQ2GBrxKNFzJu39LVJgj7jrkZbcAcvdZUumnQEf",
  "key1": "xW3sW92FmHswJGV3FJ7s8vaQfXdhPnmcUBudWCExpxnu82mkWSP9g2G3EZKtzQRSa71pya5VUXxuDAfZZcWm3rM",
  "key2": "4nErgKo896S1V7szMEriLm18hPJ8cEFESFaXedDdwAx3ychPJTdsDHK8MMCWPAiLAbwGi3AdvNuj2Abimx2VmB2V",
  "key3": "4KBh1Ebbxj3rfpDY2sT7dq7gLFDHXGovxyiXyKC7V6Pnzzs5FiBmxqLFsJg5zN43tYxRrDoLK2DyE2BpXCC8xAG",
  "key4": "ED1XRj87prqzDxgJVXxrw2VmGmCsX3PxSSgkHzMbYsguYfL1qqZzBjRKYG3UUaDb2YJuSZw5P3CES9JCqKP6RMt",
  "key5": "LCmBmziSQDnftUWpc6qbiShtcernuUZ54ZoZYiGvzwmdSLpwJ4SH7ahARMsNZcq9coR5quRJ6bXeCiyDZwFvhbB",
  "key6": "Awh3pSATWRybwdQu5bAMkobfHHk9Z8sZBVT5uwjwSiKFG8itdWxx7ZYHJXD3Gc9Ld6ToPkuD586qKP2TcJyBXUx",
  "key7": "3C5K2aT12McivMEVNzUdRwGc8VsTi9TDXouJ2W4asmiBrQZSz3k6o4ZFPKS6WTYquH4SteNvJndfDu4BbyPJa8xB",
  "key8": "41Lc5a7yRubPhJx4C1HeDm5wabrjWAYWjJNz7dxSEWZYpYE5rVQjit76B26XWUZfcPgzHhDSRX8xzLEwKnjaoef2",
  "key9": "2HdhRAkidHWfPDK2hYK3k39mDs2poou5UD2PNYdH5sixJ4shan7q5kssdGJkpcJfzvmgZD846SPF9HSCtAdeseu",
  "key10": "aCyZv69vjNFXfWTSjgGtLiM5wtCZ1fso8MPQJgkoTxg5qb9tVoaEaQ6sxzjUimwwAnRE8CJoZAqJnCVNWCkxAp5",
  "key11": "224FzsXciRscJPU6PJEPdKLx9cRSdheVgEUC7VRundMFZThuBGTaNrnGGmAhwnTJkrCPH7y4WafzSir7PX8fD4ky",
  "key12": "22dfNaDxqJfPLXVWqLBSCJwCyUpMysmTRYZQR3y4hGBe1evJN84JKgKuXPurhFL2a3jQpZA1XpsdpmZkq6dgph3T",
  "key13": "5iXEq7heUSKEXujQ67RGrEeR6ud1bj7qdmMkAtFVvAGuP8ToWa5uqn44NwsEQS5fJ4JqnRz7E4DGL4zUzWoZZgpm",
  "key14": "DEUx91D5JzzanL7dZDHUdvvPCpPLMpvAL86JjzN86EhyfvvDsm7r6fQk7aYNmXabkwQraJWU5T8DXk2WGfBvpDJ",
  "key15": "5G5Z7oEb1WNm1SDSLKp8PdUxRU4xfNfvpnEjQxdR8L3P115mGJVAsTBtwenBmPjndBWGtXsSdB7fQSDvr4oWaq9m",
  "key16": "4wQrRCwK4FoZ1uTwaf9qLTaG5tUH1KMYcSRtysczXbAuDpwgGN3s3dpu14JkXkFHAH8KYnXLnJz3BuwMxtpG3y57",
  "key17": "5oWZGLdiXnba32fAFkqFDQj8gFcxKfnk3yR2tD1Qp6ePVkMq7GUZfCiVw9jLjNg2Cu1632fUmy7BHzMKULKTkQRb",
  "key18": "3mTwiEVDXAsznVjXmQyQKcoHjv4x9HkJagsuP9Frk1AM2PdfKJLaw6mFqJxjrdHWKqCGbPMLf7WAJdLHoj83RNPA",
  "key19": "2jiM6J4cyccLdZk1QWywxnWbRsDmSkjXEz1M6sDKyqjii4wCDvunLViEwXs9V8T21yTJxDQ7rjk8xGuPvWjysdpm",
  "key20": "3d4RN9CH4o8ywzyGtB1vxuA8m7rSvxRMzaU2SGF2CypXxcbGrV5HCBybJsZz7SWQzx7Sni3y7mxBTBFopyJqzhXi",
  "key21": "22u5wSq8nD6ftbsWS53hrJUSEkqrsMH6rqD9qSpGHb397RsRvdUCgxoYZV6Ege74PgEJ9Gwm7oZk3eqMVZHd5w88",
  "key22": "5EJJLRBCxWng4focPt6MbKiFZz9CdzYh8MkPsx6rtmgafC39cwx5xtmc3cqGUfeAmnpkVsszF5bHsLVQEodWNqGa",
  "key23": "4ocxUBxawYfePjoPPUMzTefLAwDtRmJrDo7s9K7jpCLcVXvB1qRGJBcAg1JWCPJQkryQ8g2W1KUhDba43HTHJjxV",
  "key24": "5SbAcFBcJ9r4qQzZNzQty1wesUZeYazRvbJ7wzruXfEzDgnShF7LpwaY3umUomYWBcKKEE7jw1McGsCG2sPpf9RB",
  "key25": "2MVuR9UJgNAuHjLyHsXh1WTHeBKRz3ZZfmVxQYmXUnA7JE6MDi71PL2nzpR5SrSGcshKJSoKNsk6Xxo73n2HGNJ3",
  "key26": "2VJzHtjUkorXJbe9R75R9B1nSaAmoeyCe9jbRdxusD2wR9w4HUM43ysJJ3PrWxMYBvx2i8gTUGvdrybMX3SzyZgE",
  "key27": "p39fcZz5Br28t9iMCFbGrssC5S8NyNuBNAwMR3tszNtbPjA3snKE7S9V4FjAmsGX7nLpvw3n6wyBUFPiDdYJuuP",
  "key28": "kJgypLPx3DQDpBnwqQ7m7o8JBxMwEydwX2MkzAeD9doMNKpum3idiJzizTYwE47vsFKJTAaXaUV5cqEPb84q59J",
  "key29": "62PX49nhUFRy3UBUQE9CD97zL2jkkTmrijumBQm3QvxEXHbYAfpNEvtXX4YcunbdJAbmfDMCct1wEECmv6HBxWe6",
  "key30": "5xqLjKqFULdRQz3TK7ZNZXsFikaMm9nB8HLyqjA2w9DQgrViJ16g4KG8ErZ4Pm39wc8tPiusSm8dQLyuCRM6uwYB",
  "key31": "4aR1TkSivpnoMuWox5X3NsUWyUBNrcS3ATLtPBSiYDGgjWMXi7kJCRfNvKVNC8eqzXZEPnBTpS1drDGzU4hQKuAQ",
  "key32": "74Z58a6SegKrjRV9NCMNko7vvAhvvD8T2b5BNULKGEngXQTftxc6SQ4Dxeqnxteu71xCJgPn5Sz6E6vZsrPAGos",
  "key33": "51ZgVoAyHsZ2BB5jfoutew74coZYHDDn1taJw8upbsfMfYN82ahRoUGAbs6mUWGV9hBPSWbZpCy4uXVim4HceUsv",
  "key34": "4rrwGuPAs3YkL6etTyBLwF7CL8k6k7xteB5QaYHpWFnsoQE6NoxZNSBxWGpvCvQRypCVDoaPCLKenbm6TbXRzuvM"
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
