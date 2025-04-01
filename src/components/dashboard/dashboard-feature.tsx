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
    "4qdXFcd5fD3SYDnoUVsLuBLuLsMGVxthdt8ULrQHtjaXZHhmoYmDzFVnYfrXPsLEuzFpuLPcp97JgEViTSNFKFHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kCa8Zjw8i3eB5FPpfw6p4WKZtjRJHnqJHL7K4zuwBKgkDvwdurKfr2ALNpn1hU32FGziraH6sVYBhDRbmKUpXhZ",
  "key1": "3SUK8669zHb3zPThWSHQd6Cg2vhDZvmXimhKDN1DuA5zY54V37ZyWk4UqoZKU1o641U283QwhHoKYZ4qJf2GRDJ3",
  "key2": "4ZcSeaHXAvEj2dvqnY6hYFjCUjtBXGwmj6wttJZjakEzLZg9JvhtmeL6NE7qg2XaKcq6EwrELGz53MmBQqqSN642",
  "key3": "3TPqzYUMHitThJfCZZZM3sUFzJ5tCH8kHufT7EU6iBMZzEegN6WSmtKGyF4CdexcSxKP6BBfy8NwyPZfjmFedXuq",
  "key4": "ypzQqfZYxHdFV8TnVHboYWTkLruTiwqZmMkx2r2HgryaD1gc8cqZVzR3Sg9ykBLecQFoxDhwJ3wWhbFnSTrrMdF",
  "key5": "5hYzNQ68HuFA9sXMUqFT4o4Yt1LGf58saU24CgaPUyULaBT3yGQwQUJ84tKbjsHMHMzL4xL76juNgMNG6ubbdKgQ",
  "key6": "3D8MVsYcU3iWPeeW29S5qohSoDqNUAThVUPMAZd4uNMAsjuTF1UwT1Ws3JQZXoCF2nh8pUMdUYoXhJXKXiLC8Zp1",
  "key7": "3mL5MKcQmxZWYq8MZofrmrw1PBcGXWEdN8YEPdawdqgnv1awJUFruZq1GQZQZXvhSyjS5tv9Dq3XJxqMPf7iQidE",
  "key8": "5qXZNKG4EDR9nDY1VhudKV3RJFDGLzF2xr7io3kU4P4BpCYTRg519ApPZ1EZGuqhz7YJgbbVYBcjJDKHczKsD7j",
  "key9": "3bd8sfELeWT2Zt9naaFkwT2g5bW92d3rFHp8oQCLFzTE2CvupgTg88wvw4NEPMkB6dnkqZ5299ypD4ZnbAEr5qNB",
  "key10": "2nG6mFXkeYiUD6Efdp3oh5znK43dg8SGUnJT3jZKCjJGT5JcYyRxu8YVg2aeMGxb6tpVt1PK33d19nnsS9hzuNan",
  "key11": "3z1ZCmsaRHxzEH543uXYibFPkcALGxrDotATGyqFYGgMpEgKwTkaJbTbn8MYW5BRsqjpKi6YXSFv2pBe1UdB4zoq",
  "key12": "5ArLjAs4uzsWmFRULsGU6CwjESCuTNz7D4rcZswMHVmAMNtdugrvDD9KuXVQaC75uFWTFSQKVxhP58NrQ7ePYwbb",
  "key13": "5ZA9w8RznSs2FBoeLjPZ2KSxrcCTpbWuBB88H7rtXBhrRQ2eCbu4UDWkWMXcDWq1ZkfRxBPpJBSmXQ62FFScx2bH",
  "key14": "5mPqYWXMaErv94vx2WJFnsRKUUgGFf4Q68LQLFF31q69JSMtqoMJyvcyw7eNoeKMr8FUGuosuDWHoMANrpeVownC",
  "key15": "5FKJpnmvJVa4QmpnWFnm6Hk1nwmhM9F4xGMdBJMbkVDuSB3xbcya613Q4yNVdJJGLzdkEQgdk8qDWWbSWF7wrkJm",
  "key16": "4GKccRrhcojTwajkMA4C2ZTYa7vaPDsQn5T3pBKZiy2jrauYSHXViZEbSoJFcFqqpNKtXoiJ5AdQ2UuH125Urs96",
  "key17": "naAtcRaZsgjHr86Z8KAdNnN1r1PN84dfTtZxXnohskKEkKfCdYZWs54wqzTfQxJKS7BBco9HHMxifnDt6Y6ju24",
  "key18": "aSybncgXWA2cWVVXTjaZewJaP8mkTfPohr2qByvUzU7Re4LZPSsr9VdmrAoXo31adbe7gYodWakesduYA2xrKFh",
  "key19": "2Di77gw5o5cZieLQ3WqgPCirJMuCq2GNDtA4SRoFTD31LWU6C2cjv4NjTkPSMeErH5PWtc4bDZ9SLbivXNTPAw7h",
  "key20": "28dhEuuqA9Uqc65wFpL4bWqpEsRJKax54gc5x2cehozpxS4GrDReuyt3cBp42G1ucdF5BqhqzxfiZ6nJuTJZaVDU",
  "key21": "65rAgt3yTxwMGPYVe5cuy5vSmyKK8erWWWAMGpZtWA5BufLX36KpXvSFEXEgv48Er4dihbNtfvzTv39uLn4FfY4y",
  "key22": "5V3bkcrJCCGQjWU4ZrJiTktTwDEv4gMLpGP22oSWSS1mQ5xistNawGcx3p1B76jdF31UV2Mheg2NKWZpEWfDRLCR",
  "key23": "5qu2TxVo9j9TJe5KYywP4cK1Kb77ZaMbcfRMFAgHax4mz5Ckc3U7dbKx2jA97iRaC25WvzD9Y7c97hSaYkUUq8e8",
  "key24": "xcfeLj6LwnDGgWMtajaMntJr3Ep8tKnkhwQjdvuCHkEkwdwArsqzi76VQAzuiqxYfbsVr12f24dXxYS8yZA4S7J",
  "key25": "UNE2v5VTCq4MG399jrRX9uhwUJED8LckP2QLTCho6gYdWcveg8HfnmPSCNRzqQ8rjg2EZQ2bjxDmhMEZBqkZW6f",
  "key26": "36FwbLCM4QmDSRja59nz61auhAJBJfDKpSbHUCiPZ3gY4KRLBvRED9WnpuryXmoRUQfgXrtChEmZnUPQhPp3ZC9B",
  "key27": "46cBdmfWWAwJGfgnHdwX5NzNAHcoTEFR6y7wkHt7oD6YpKFuqBK6FPw3FcxRXF3WBcm2RhJEmgHgdiyggft6wLnt",
  "key28": "2Jcnhwg5Cv8pfCWG6gbwPixnseuNfPbCgxbbfQAfd8Y7L3xunG5DZShFFpQq9ihku6WsSctTY7UF1eDmKRDXa9VX",
  "key29": "48SvyZeRVcZRLBXQ4h9iwvj2gq4M7Zf3e6wwzMw36KW7rPz2UNnfDpB3Kp7WJ9nHRpkiegfhS9JonDRPkJk2KDdH",
  "key30": "3jrpyziKA4r31wjYP5kbEFQ5QyLW9YxzguiavX7mQWq94o1nKuDABjWz54eTP51bNqqaqhwHj5jrGBZM4v7ZELe",
  "key31": "4AD9SqjzSwEWgh52qPqPgCG59WqTxd7Zforecue8b3jj21BBm6yFUCgtoC5xX1919cNZVfHMJ18siU9NmCM8ajjM",
  "key32": "4R1DFfFtteL2Hwwfqa4m3itBWurdk8HZz2iP9eKc57PGYm5gjENMkr763EVgN1AmcbM1Fit3zknHaTTt27X5s9Bs",
  "key33": "xWQxfC7nyktn4G4jPfG1UWx6Y7qVynWJS37enPibmGoyLUL4KEgUgV44ru2hMPtyduKiHY17Hx65bHkAaAFQTsg",
  "key34": "5R6zoF5WLUkErLdVsaUvzMkdNQxt5UagDM7g4XfMmpCwXf6UJQBKYrDHAE9T9yxGN9A5BpAtQx72158qSzqknDr7",
  "key35": "5RT6qAqV9tCyL62VNwbZCgLNb6A2r1kyDqZFvHAFfaCXFJPj9LqRJroQXw5ffRbkmt8NyBoixHyTAv35GKJJEr1R"
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
