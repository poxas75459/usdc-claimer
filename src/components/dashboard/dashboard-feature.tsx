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
    "32NeGvxUxJWMc2VYpAzhcBytmtbGQhBrw28XgPEi6rWzG7gjqxsB7DKn1RLtD1Y74iDXDrgzobx6BxcbPyiMyqNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMvg47MCjq8Z3twvktsSQ3fP9acN6Km23xBZFHsV1iQpCYAxEQ8uAY6euYWxvZ61bYbS8P8j6Vxtdpc1sPkng3d",
  "key1": "4EC1JgczgAq8cvszx4Jw9JYTypECucKRuSY9VLhgP1f6L5RRPjA1UiXfhna7NjBs8WfCT9qMJaxMDAtPsHdHkt5y",
  "key2": "2aDZzJkS5Gz6DQ3MCwus8gSXVc6SQUdZsfUc8dPACfHupjNvgGPsyfqTuzo5t7fETvZoer5JwbWMNNGwWG6QAsaS",
  "key3": "5excEmaqap7MrCBaUJYSfLgxJTwssfdYz3ScxZRiiEc21mtQH7CGbfsp88UvwsjeSUZDziZi6kLT7URYKK5v4vBo",
  "key4": "4GQH8d8V9t1gabPcerVbEXurQqXsR9PHvx7cmS1yoXPU7CVdF47RZKPnrp7jTJ9k7mh7A9ci6e6j9acqgpmpDrXb",
  "key5": "xqK1qeMsGig6w12ysZ3CKT9m4FtS7EP96LEzC3Y5uDsduT5M76dM8orpUPueDEm4Q18bja3ww59um9Qu4ZyEfMC",
  "key6": "5icjUyU89KYUxPDoitiSR3xz7iDiEsf3jrz84gmP2yZeHD4XjoKXZA1k2rGkBvFvt1nAhFuZ3VznmwAnX9FPnUtq",
  "key7": "7N2HsdKXcz8aowRsyBXgDe9uDHjocjvFMdsj6RvN2fKcCNdc3igpvPsG4cTKLpRRknkX9k9eHoskAdF5c2LJ433",
  "key8": "3RcuRQva2PfGwYdFK6FiVx1oC7QSExspdVtbtFUqLDi1C4JFcgudDBs7kaE9tQJt6X7Jg2TFikWoQLsATX6gy9VL",
  "key9": "4VetWJEKoxnAEHkiy46kveFT4g4aRyGhi4QTPb1LqXV7wmpNru5iNPJiG72uw2UMUqjCXLa6gz4y5vUraZPLMKnB",
  "key10": "2gBaT5utDijHyGUeJK3YjowtZTfXd8cEmoFKNaWeepi1iP1SD1stavMBGVLjkeZWVAZ8fgECkiGrbHaFMQsg3CFX",
  "key11": "2KgfZ8gvn3q933VVqEJCqJ25oLqX6LM3rkcTjN8SHRWMudDVvDoXViePRx6dC5dmxNEsd155eyrKp8CHhFRPhw2x",
  "key12": "4BMHtsQcV5WkTG6QkPAaBwLrxgQEsKEA21BBqxFQpGoVBQxdcdoHMKcS9N1qZxtPgA6PnN1xHx4KYjiz2AURMjk9",
  "key13": "9NGyQEFQwyAoCMTvtWQLaetki7sUjtgQM1bcKwFFe86KLDLeYrufEeVMLjVWJERvTSFhV2ZcyDNaJDTFnNXNhsF",
  "key14": "2cjGUcgFLwEnZyEExDTsdTrfwYvHbA1zRGZFY3YngJhUh9MU63Bk8v2FnucLmzG3XguZkLjNQBoWF9xsS9dmTEDB",
  "key15": "5FxzjXV16uPQEnDuK8LjsReXMX7TkGG8WiYZ3GP212PpNzhZBwDfQhEumHk8AVxTWQzUMeaq9gW4ajQrHfYfyUQK",
  "key16": "4pGdA69cWyjL4HvimRaAyo9L1jmiQc9zUiEEttDDVhg51ZK6hkjrZT9T5tG3WRgeTfyoM3x5y1AfRM5UhQCkpJMd",
  "key17": "43JAGK9D4DK61kBABKkd224EYfuCLZJ8cQR6LwXYhAwCYZQvwj3198b36cBAQHZX5vEo3dL7MDjcNzTVjhqs1MEm",
  "key18": "4fafYcsMR4YKizBUE8M7tz2H1JsKwEqESWfwCYqiPCrhHChzWzi5EohDhUb782LPkjHCB5twpdWjnqFe4iwS9wcr",
  "key19": "55ZNnyE3y7YoHSBSwkTbHDqVuv4RwH5uU8j4zxkduKLB1XuHr3Jb178tJwuw48B5x2wrBSTg93f61CBv4QWggExG",
  "key20": "5Ntv7btK6edroc3ZXNoaAtPvX8xdbLTiHoFdPLcv9V5zgoagc3bRMEKeRhZVZS9aXs2i6hQSa8fPg5xhtoUL1tY6",
  "key21": "2a7R5yZ6vBcfgW1uCXuvikDNSogT4DoCf383cKgbXGtJeQDkdMMnPUjHtyE4Sfh8TTALDF7VbSF8f6qooYzAvqxL",
  "key22": "45SfwfzpwLRp2WzyCtsDyzubHhz1ZBHJ1dP48v5RspZ8eUEMuFowdYeP9HpXzWiLqccJwdkzo8knkQxZWig1Zf4C",
  "key23": "5XBgdQCYS13n21VZuz2dQ3JcMwboDxWtf7FvmzTNyNko6gXXfuFPgKUWS5DLxKHw694rX9S2BpjqLkE8uFkibgw8",
  "key24": "65t4P8991S71M5hjEfVf83bWAZ3981Q5dJd3V26LPCXN3xSehrEvtnsXMjgTpF8LgchHTjvY2a1HDJb3y7ejruF1",
  "key25": "3m8GzHsnSD7X4be1DqzQU4uZYSMPkaf2jxn5sXAb2kNC2yf4Xhf6qUov3wdPnkniQjj1SirJVX9wLQwtMyAMqLbJ",
  "key26": "4uGti25pzQkDmWdUaHYrSPuVfwF9Ymmy94xJeP7ELr39z6HLDtvfCZfqnnttsQSeifgmi86CERKTWunMWKJMDiJs",
  "key27": "3apekr9UtLCtDs9UFrmtc7UQ2Bk1LSNp29fhjRp9QwxhNp2jFHzvWTLwQ9jEDrbGZbTKr8VQ7mbVfUS32w6HVCM",
  "key28": "3MQJdM5dJJTTNyp1p4xMYthmiN9tXcubdwBDTCRDN1a4xe7VF7Mr3GhRV1ivx3crXSWeqAaDREn9rQGyJUJmczRH",
  "key29": "4vbdM1yrnAc7zAgxfBu1Za432M2oBggU2oF4p13HJV2shm7xTwFc5nmUvj69Q79sRy9cNWjcPcesUeTst68b4vs9",
  "key30": "2ymswdATTQFYUjSzKbKz5vAH13UbNiYgxEKtqTamz4Xv1kNwK3ZDPyXoW4ykJruV9UNWWuLk7rLWrqGa1f9mSc9q",
  "key31": "rpX88C27EZnoqRW1Uztr6xiDv7kRTX8PjGnkn8JkNqnEFF7ZG4tzPtYdyjxX2U1YGav9KNzGJYX4ks49FmZ4FQb",
  "key32": "49CKiq7yw7HCyBL9PQ1dTkQbreAmcY7v7S5XsiWmcRp5CpYHhxBtyjBdvdHdDY5Lr3HhSPrr4sjXb6s9tMyPcuc8",
  "key33": "PWKWiqqYnw3cbRY1X4Vrw1CDdN5T9erTVLZF5TqvVtxEkuTY12ESyyJy9sZExj9BgcQ7gxzzSapwXFxCriZ478V",
  "key34": "3hfoEd8vfT7TVJnx7C2tYU8KzN8ucVYRgefEkwF3QsJ3rrG9Sqca8zsSqcNAKTuHbY21wjk1RFnEPZ99b2GhSTgR",
  "key35": "33pXtc4gDHGD4P3iGchqGw3VMRGWxFxjmtZoFy7fSp7noQn3ShfJwWBNuibcfixEA9YEqQwP4Goweck9d3XqQbmP",
  "key36": "6moahE45nkn57hLoSfuVX2AwQF9uoRjbHraMPyPqdapYnoKizwshbGcNvaoc7c783mc58ybaRc3ehsXmsvqogrw",
  "key37": "5XYxB1RD2HCgyn22iNecLU71uYHCNBSqMyPRtn3E9wzij9BSKYS6sox18znnghcKAox8QeHwHrVmMuyyGU1aJSnm"
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
