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
    "4f5Z9BhaFjELMNmJeEBdPkHrfwFA1cJdy7p6Pko2YChdACZdeFRWpwKRKFHAL5qGnqnZTMSAMTzFjtjC9SRb4Tpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NkmAKN9yRKi8HECdxY9rbcj1VKeEs7XNboxuKXXuJ8Gfc1F5WnqPPy2rDwVYGMMsptPjREMr6W6snnt6b8oM6Gw",
  "key1": "4Z2hXjLmaBmszYViwVmRcqV1yfJmtB6z4VJ7ZXpY4s2bKYpfop1YRN3NBY2rgR8UegaRUnfa6M7bEKL6YMZ6gAFj",
  "key2": "3pd56F9JbbDy35oiUcNVhyEVwjvPFgw9r4gTk7SL3ryVSERpDhwz1xPZt4yvm8drF6E8uY9uV1wUVsbMLxtwy3ZG",
  "key3": "2vZXJxMRzL7A5snGKLcZ9wScj1bhfi5WqAz6n5thpwjXQE8LMowDuvV9ChN3SMGBCPicL7dMpU3HZXhmXmWFAnRn",
  "key4": "P9aeoArpG7MJ2t75T1ErNP9X9dPyd58BWzsBqP8XvsByXdXVoVvGLwuNmq4GCAEKj93wYuaLCurt6EM9c4T2nFo",
  "key5": "3prsSEFBSLxmSybfNxC8cdXP7CFYyNqzPYZvefVy1wgUL52FjnDMhLCWtuAKbCx9X65SGyeoEbZUNzkmPH929LBt",
  "key6": "44x7h8ZSmRDRhaohzUh4DkAce5mF5FvGXEStLGjwwPj8yAMdbv9JeqzkznYSm5dYyyFPACA5ykGnsgHQucbzgm1C",
  "key7": "24pRRqPzjiX5SGojvbAe4pFa9NFjr2iEgVs1MSWhxnsPxKysVhWciRjWVhMXinTQ3Rgxjtfj9zWFMHuKcj4D7VFV",
  "key8": "5tfV8zYnaus7XCiAQtuMSXRJyD3Qp4LjZAFoMVYojEq1EskPF3C5eHhyo8NjV7fq5ioBe7uNJxg8uh24RtAMyEKW",
  "key9": "3N6i49uYmJ6KfNQsTCB8HV4sTNd6NCWTFu5GaK5G1FKsjRHostURp9xVJ55iqMWBqAhKoch5Qp7h5KzLdm6WBtRw",
  "key10": "5yu6yfDUvbM1ZZvm5xWJ1hbjAfc5ZpGaaHHafuA9apuHKRycpVY2R5YuxNsuxg3tXNoMiGx56mYTuWczh51NkDnS",
  "key11": "5MV8e16DaMWfbmbC9ovuZP4CeMcfZrKx1YPzjdU46N3f3EWuha3kGEqeZBogci4SdK5T5R9ktB2QFsHMLVrtVtWL",
  "key12": "dK9wDNBzruXWK2JCab3bkMDUCxEFJHYuxxfeAWZ4LBiT6UFDAjY8ibagCsf8ezRFuZMicWR9QBkWfnLKg6ux2xm",
  "key13": "2swAJF6CbmTEpFAipswz8taV5pp1a2vLHoDA1we3sQrYrG5dtmzGZHhpp52kAYhpgrzYNzYP1dS3iVHnZiPUM3cj",
  "key14": "49N9bgRPc8cBrWJp1c49PbPj9ecJ8A6H87T8UsU4s7HyCkydEnqpBBXpc6hnw6nt6qGGkjXgg2J7QfVNLdjzd25f",
  "key15": "4cfTZZtLBYzHYJKGtDLqkeJcokSwGSvxFdg3zTJdKvLqCPKRgivp2dZqWiscNuFPnEi1YErAvVWNw2KUUkHZywNw",
  "key16": "2WN3VLzRQn4nTinwj2w74u38RWvmBC6jvvmApbdpkL2dMEj6QVwatYR6uEPtDYgAcgBd7KdqLQpRV1ZKMQJyx1sS",
  "key17": "4MyWHMVRZwGbFuZ5vT9V8bVLYF3fpKp8j77f9C4Sgcpbybv56Ay6L7F2RzwBydWZyob5Zavnj8nubW9aXLb99fpU",
  "key18": "5mizkuE8cznyoocAhMswsqGoUTx6VsSVWqgwaZodAMEeaZErvVeDYz249vmomnFoMxQm2RyzX9eQnA5nf1uSVNgA",
  "key19": "2ceF7Kq5uxcQT2wwaGPFxqPYFHYktLDujdvdVnYY7EYn48oHc8epZMv6ve3sQUnJYh4SVtpFCh6dvccq5x4QH8M4",
  "key20": "8A1zhdL48nGWEEiCBcQM4XdFx3nYxvXUSQATBcZnL24ZPPzTKMbB2ChipgjG5FJNW6M84KisDz5gu99hXfszBMS",
  "key21": "3MyfBmTqyANk4F56xDt9ZYAonQQA5xSK7qZJMfaC7ss1iJo9UiErjqRLAP6zMui7v7XjhfJCE6xKHtK1w2h3giKT",
  "key22": "4u7KLk9fYKd6nQRKkq1qPb43JPcrMFs3DhSdUqRWhqb6REYXYiUDKGyqsbzEg6aW8GfZUnswA918DjQ6uQiK5ewV",
  "key23": "3GArBJJrMVXGur29ecQwdSfXV3yyDjKy1GoPxmrDPcvmp5zMjo9PUUjULXBEc8FjeNCN6LGA6JWDEQA2czig52P1",
  "key24": "3DufDMf7vhKUSD8XoH1NffUehZa9DurB45HNRptJuBhLYxsff9URjMEnnmxXA1e1DJqUG4rghwRXSmoH9hDfvzFx",
  "key25": "5HrHpEpu8zwCYp473JQ13irqXdDr4dwjQqra6xHMfLuqnZurCPUgcXxP7G2qc4z4a9H6kM4AgN4E9butnLBDf8gb",
  "key26": "63NW816CQudXt9ozLz8sMDr8oUM8ntzn5hVrQ9Mjkt1LLtDxHFubbcZaoerKfaXnNMwJUjuTk1usvNbihZFLPz46",
  "key27": "4zEmNb161rN6tPSfxjnukoAgfEz8VzSqcBthjRDYeNupFY12gYBRq3VxFBe63fBvtGipH6WafoK5Jc2YbKnUunyb",
  "key28": "4ivXmNJRmseGi4Gsbn2JYtYp7UzQXUhVJn9wqdZnv66CNgM9VC9QrDyBrYFi4QSXsx1eFBMpxzCBLSLpnSq69tFG",
  "key29": "3i5KttntiRoXAuykbPUzeBeG19ZmfaPGVeBag8mbNGJBDeLAibtA6EofbFYhDwTXE7Saxob196UfMFMBZRrLGG35",
  "key30": "4BVyNgeWvY7EnVEyiYsgwBYWf9SNspHeFn5K3SDgXDwRs8W7g1i5LAmfaDcFjQFkHteiMoeWJR7zkn4bRWLWUD1h",
  "key31": "5GEJLnVha7kJEqppgYTkWEJC1ZQRP9C68VTq8FsGP4XaWeCNmcU1VLaitg78D9ZF9YqrSSmBVmmrQdeCNUmgUeET",
  "key32": "4sV2JoZfnj3L4DDLvR1gAy6pVncFUbGpV8y3LAiRdoNtDfYapoUyuE3yDHAZpPLHMhWcirWvLb1P4HHFFGdk9BEu",
  "key33": "5Abpy75wdUatNo7BwQzkryr2Y89Zwf9XRGizQzmCJVzkyvciFjQ1uQsfkNmf2sDyF1SM8NhpHrNeK9NSKARa9Y18",
  "key34": "4hf6H7UTdPh23HaLFKUXeyf1zUqq7MuvwpUukGwt6sjyS6zCuAbtzYid5ViPcKbZFuS5kktw6CxYNX4HTvNAZrB8",
  "key35": "XSJNSj4jEi26sR4CKXk72GoFKm5bGbwPLJRqtMxGhjmnMDcPPE8vAdtVnjDJDhW5Lw2hheurDqu9jaVR6xNiiyU",
  "key36": "4qYvJaZ61qgHGcXDr5jvZDLJMXAkCMq1UouCZY6ALA5MddiwLWU9P8EVsc7ps2hhR3ed9Jap7ca2zKJRPxVbp6kF"
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
