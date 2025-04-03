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
    "4eBFcmiKU8DWfTP5euB11fHQb6aujmPuoydaHe37o2uamJtbYG8mzKZ65FYiGs7SxTFiTeNEYs3Rv8Cbtmths7Pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W6f5taRCSN61LmmXwC3JWC5ZDc3eAkaa38m18uoeZcxnLBSp3FxdEwGywpvTFoPEZ9n1TKy2JiUCr6Sjc8roXAn",
  "key1": "2DP55hXvqREtM2jb9yL5cdNnZAm8daTdasQc1mLCRo9Zuyej3RWvX8wt9DNXL86T76RZKMdJxbDdt9KL3puDNS6S",
  "key2": "59v8YKAbbV9Y8KYLHRPCR274rVEE3K85Lp7MHvysKqSw8erVCCiq24rjCZH7UDfCbx8pfpbjRZuAYJztLTE85St8",
  "key3": "4tQ1pCEhqSpooVmU2sv3fVxZ4xGnmmNwN2W6Qn1faZqbzE5KHHaw6KWFYe4NFZsVj4uuZDAWezpDWEjmiz7xT4NF",
  "key4": "5TZWzPNhFTu4rQ3pYESQHSTZWR3aUp9ePunWjnUbQW6teyghsrYRai7xuKxtmYF3eWm1uXjqJ1AxoT2wFDboszHd",
  "key5": "ve931P7kUx5A72nqTAmVtMKVfRKVTBjNUxQnrYZMYo3uDU2KzXDJbAMRAwthuNnT7uB6r3ZyVmrq5R157YBJsDu",
  "key6": "34XhFGxgazLBhQA6Sm7tL3cqcERRkKTw9vu3pCTEUHqYPBz49UzBbB6jtXWFPLMenbL232hEXfbA1tQ4W9t2ZtyN",
  "key7": "3t5Y2zhPww4e1AGvce6rffewhHse7b5vngXUoACWDkPDpYPc2FyzVzU6A9usL1jUDxueA8mdZS5u3QMVPe9WoiA2",
  "key8": "4mmVpxd1QEQJTf5xntyT5FnjyoVjsNFAb1BfYCF1EnfWQMPJwTbhUGr76unqgX3u4EP53j1ZFJ1Cgjy8fDfPyPxn",
  "key9": "MX7yGJoa9P1q2VzzdGcXByYfzr9cwonyG2uGshmTicH5xzzVP7ZbA41T87WBuhiNMakGhG1H9zmxgA82rDbDcbS",
  "key10": "3VCrPH9WQDNTeZpqkEcyJ4bFpZuyKsKxavpeViXkYPugeLDQL3bGMuDiucB4XBgf5gqdoTSxxX4A1yhSwNunM7KV",
  "key11": "6ftNqbPHh55BuxkQ9MqpAbaYcdQf9v6RF28MivLtDuAGEGqzEgTqpGtAUnkPedHPcZizwr5JkTcR6iXAcrNJRtB",
  "key12": "4io2PgyVmkxaPgociEJVDHe8fZhmRfxcGU2Dvvea385YSqEuSTUxLLWexL8wfi8yMKsvxa6XHFJHy2FusnQwT14W",
  "key13": "62Hm356fP2GZt8vFccMCBoo5W48WEwxjMzUJ2P3PNYUfCuRcymBHzHJQJivKGxjCPP6JtPeZo3wRAcXR4SaNfuuM",
  "key14": "4ZAoNMMu68o95uR6153GiaMRjGMDYRNZCA7fneuZEWJfxQbkmzjePWKEGwR6UmRWSwComRsUY21GvDyJ44X72TvH",
  "key15": "3nZHd6sNMmZruqfV2AFEC2aCNjvwiwbKZQCnpeJpMYFkBUg8JPWDppGfZPBeDNA8B4bz5YNiK7YUhrU5TWYVKyxA",
  "key16": "4g4mexYLdovLnfCiZ7QqWG8GM2x372gd4VTj7yjnS3gpTHvzprgMrfpMRvbJw7p7P7j4jRQTrkYfJNC9K6vNKmJE",
  "key17": "34L5H9bCUeMoGaEE5bERENQTo6ZiePPEGMjdJ1fkWFiN9ZHmyUdRL7BNwGegQwhmi3jY4yhH5sXrGx721u9L8Sc5",
  "key18": "V9f8FWdg24YEctvk9HuMXtDYPbZLJFfvNe5C3CrEmS91JZZG2c9mrFgh5Gr23FDaQBjYkPCDTZUrigJEqC6WWez",
  "key19": "2bGJXGKEfVch5LXN5Gjqv7xHCQ1owaq98fN8zMvKgoNGkswBYzTePn5j1e21jT4YA6xd2LFDU563m1kf6cG3jBvb",
  "key20": "3tPLkg3eyi4nD6yDK9nntnUZTb4VQCpqEbykotv413yCYrzTb3rKAg3KusUfJ4BBGZwskq52RWDBU7cn6EHvanFc",
  "key21": "41k8M9ekiakhcnvUNrJuMSMogCK4hKTvWDDhFNxwtELSRBiYRm1hvrApDsf3g6yfj2zQVMiTHsE3jKuPVHufP6Pa",
  "key22": "2Ru1AWRepWmVXRB7ipxCmWbAMfibT4AZCCWy4HjqLziSZxFtxSvYJBHvhJWq4BAKH398iYVtjGFwAyXsLxatKJbY",
  "key23": "2VA47acaLnFvB3ydgnVL4QNBfX6yWASQVb7bZ5YDuX5cQiXjsdQLYCLBCbwK3iUaRMPtVNh4aQMyeYrzGjHpMMm1",
  "key24": "4o4jStVryNjXZCfzkXxePtioyonEnbbhJH2diQSVvd3np7xg6PwMcLbfCtoe3tWiNK2t4gNAxGLM7oNELQQG6qSw",
  "key25": "7qGq7nEiuTnhmJRJYhnzhXxAhcQPQhDLftTGfPWoeVH6wbxE6H2E4gieSp1tfE8J1eRRmpK23DuE4hiWi7161GS",
  "key26": "2UKaNVsgGX32kNZ5PxYUTT2zXG4fb7QcfDYe5dLzHxoCP62ZVZhMNJ4y48K5ywU38opcB43MUoSCPHQdAiazjnRY",
  "key27": "57GnWNnj9sjFWA7BU1nktJg8pBXon4g3wai68RZWNU7tjU4JscEYNdYWPm5cUpGRttkhxTQxrcjGdBwmZ3qnpE55",
  "key28": "2dCXN2Q736BHM4HNW3DZadiGR5R31jRa2NDNfS84AVQKsjYZKhgXj9g6nqRr1MiZkrmY5WstKc9NZgguQYJbtZJq",
  "key29": "4onnpGyKbDLRL8kykvQzvnTq5RiQ11CKdJBLabqTTSAoxBeCj3zUAr6UshzBmfL9zRsXxxyL3W9RAgZpA6FGKMs2",
  "key30": "5nLZGTRqBM2v87PmiDDE8NDBkT6uw6YCXU8DcFsXLkdviEhS1m2s5zjNohj7ra6nP8fesTEVaBj1hqF4yn31rxj9",
  "key31": "4hws8BzW7NxffzgQ5ZUT6dAPsjYGhTChCc5w9bSQ1yeJ7fjEt9adYnub536htujQdx1kHEuwe1Rotdg1NfScj6AC",
  "key32": "23Lu3FTL2HnVhma8rpU3UsEXMXEpDzCD5YBrnECWHyfjjovmaagnakHZs99yRYBaGbJgVVSPC57zAp52RoBc6gPU",
  "key33": "eHkBTdgRfUEGdby4nd7bkagWHiecEXLv3wGaifzvJcU6Mv6M4xtoZx4boVyLqz6jGQZnASgL19UgARr5G3igoKU",
  "key34": "48AFqjuhCUQsaBpxX3hHER9dj3ksNxpmMwWf8BD2zQzAmd25AkpecnygSfqo4cbcXw8ZMFgTzgguCrhVJTvw2suv"
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
