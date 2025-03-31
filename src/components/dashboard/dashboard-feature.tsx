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
    "4aNx1FedMebtZWzKTBEtBbQ1oipR2yVb5E5ViYwTZCj5uZFqgUzMgNPWqNNtHoM35Qy3YMYKBndzRurw8CaUGPpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VBy7hiN5iuNkaKL9X9v8r1YsMkZPPX4GsjpBHq677NLiNAT5NDpFktp8yhBRuYtZ5AcBtSyuhvh4RZq5fdKD9HV",
  "key1": "46gcrzpam2qkNv3NU7grR3G2jxPU6jh9tahZ7guxCKj4Y9ngWD7WLw6XTG6q7e5aWq2DuS9Tf2g1k4FS21cQa19a",
  "key2": "2tTfPMYCJ7uMfMX8CGdyFGc1FNSqocjdb27kPBFSHkhvfJ5nz32u8B7B1MMhMXgKPErj6hQkxUNSzwbP8WVLziRg",
  "key3": "4ayY1yCgwJZCmeb4r9oDbvUgyWpdw831AxcbXFTcRmTZNV45wUrK8KRRnTozfu8e6jFK4sJFFRhh8r6koNKmqmmd",
  "key4": "cGvLdaSjcaur68ghBvq3mm24HsUneyuoTbYWBmLSfqtVbrNbivsEz1VFUKBPmjcaKt2zSB38xpfGzm3Ce9r92Gw",
  "key5": "mdqws2NxiisVMCPUoVSL5b4dpmvQnCgPu5h6LtCKMRpoEBQ2DRee3tNiMg74VTTNf83Vcny713H6rQcra5qnwfA",
  "key6": "4hnCZzEqC4TykUn1L61tTXhhaiSNcePBts7smEp3GWRa1kYMFGGEw5YQmA5kcMYdjNKrBo5NPeh4gHAWRp1v4v6c",
  "key7": "5rf8nxwAXf3t92Nyz4qu6uWjRkev9Q3BjkE96DpwyjAbxi74A9PJNgGGEkJ6RXKSLFcmWTFMRpq1b51mL8jB1KdQ",
  "key8": "s6SQe6VneQoUNDv8QCzQSzdctUk3CSh8BExPqS6WFNHtnoD4bfYzahypPBJLVTKjkfvEoVMtVCgtD6TRMx9eS4k",
  "key9": "5YY8wHupfnVqU4HwQMPJJVGAeNbDxBsaZKHGdqZh6K5FLQ8kC351VRYZL47miyDRPx86YueDxcHJMKG6FSq3A6av",
  "key10": "5jDRsZfcwsQi1cc7J5MsWxhHJcWDbcvnFKXHtz6dpa4vcGuyYsXVTgSrCiQYqPMoWP15raJSXJAsmNkVbg4mGyG3",
  "key11": "5TKmAQpDQfJotN5p1HFaatXwYS7LzJMaCJYGMp3hiFqUgPkqb9DQemTFzZ3zzMMo4YdvEBZiqQNPWn4kkyYNsXVi",
  "key12": "43oD4tikgczBgMiPg3P7R1HLJwyLyDuGSnkYXz3LKFwyhJMw8XkDwa7wYEJYB5dE37AGwM8qycGAtYRf7cpMW7yj",
  "key13": "345CXEwBY7bTKr6qKygEtTkypDgZmReX8GiHJnyZxNuA2Zf36tRgCLoK7cCfik8sxeWShR7neEkdetbSkx83VgMy",
  "key14": "3iVJgTca259AVQknf1jxoMVKWXCT35oiAhgP6iQDJz3kw52hFFkW4sU9PVBps6Cxgg4nycJ4t8jW23DysgiB3ELQ",
  "key15": "3q55h1UoQbR2gXwNKBwuRzfPm3YC5qrEsjCQnFDF33TSQucTvcPMAfD14tgrJV7x1wvH1k6oKoeEentCgyxn7uLh",
  "key16": "2Hx1ETb93UP181McksZQFrcFKUtm4U9LHCcUwsFULE6NF2AEsqdybtrtiDJxoM2Ysau1c4SbiRJUnSVqLU29i1Mr",
  "key17": "39JkA8zWULoEhah9TLExT8Ugie9Wqk6mmt5ADKUBqQFLy5vaLpunk4KmJHFTa4GmLUMcGqRzFdZUxScidmr4G7q9",
  "key18": "4jg1z1Aa2qAjYg1cggByF3UsHeu3V1Vj4KTtJA3pvQz5E996wLmFyAeN4zMusR9WTdMj5z72CoywbaJipaZWtG68",
  "key19": "3WJpSfVdhJiHopsakdUHomgqgwEpEZuZZo7q2h9TVsHbVFgkBNQJ8dqpJAnFaRTKZte5EHHW3RzXv4sKkdBNfUBJ",
  "key20": "4HRkoKyssDWNkEWc23jo8YB83iyPiBxfRS5xykxCGG4b9Dw53dBTZpMQhzdxBkdvYzh3TAXULDrhXayQrppHNRKJ",
  "key21": "2thenN6kDZgpLotqcnTHeEDXsA5LsDUc6a5742ssGxytfhm5CzZ9wpKAtEhBgKJsQ2qyeP5ZsSDBqkvtfotiWBvw",
  "key22": "4SyVGyRGQFfXpaRS8LwMe6qzWtnhedW4s5TMupkEU2y6R2dGKw3Gx7shbM1hGP3DFYCASThwB5QUAW4xWCChtwLF",
  "key23": "46Y4gsUccCEmTFrUs235ViA5HLeJ4zzUMF7pEHrUpbbYSmqmjkhJYuqmsqaWNBW8V3AzJwSkt2gyAQqeFPL5pD3f",
  "key24": "64XJYDk7Gtc8BGkdSJY5a2CGFYrTAVH4CNLYiESQCodU9H8doRQcSCqY5RRzYq7Tb1fQxSUTZjJq8zGianrAnRs7",
  "key25": "Xp7AwxeQfpgC6tJ74iYwpdazyNYrLUctzMu74A635hV1hS63qtfZzLCQsdHS9jyFFWj3ikxP81jmeUauDxVtJjD",
  "key26": "2Wqg9VhdBktxTpr5j2RHCLvD2Vpp4AgpUwUgMexwSVGFCLFo3RfgGEzmmQRCgxnz4kggQV1f4RkqiFiPKE11Rdb1",
  "key27": "3RmK9CfadGbPsr512M9eTdvivp85xatu3XYeSNX7S2yE1mx5eMUz7gqziVJ1bpwqxZ3nrjFyBaPcBBvrx94CZ3Fb",
  "key28": "4xiw8JEWNXfy3Be2r6qjA1ViifkGGgo8P9tDgRxjZEdPXULWRTQ5nNMYVQW73EHWLq41MF4apfBNMGLGkboRiyDm",
  "key29": "Gixa5ecZdq3vuei5vAfD6ptR37xuQ8eRNrZJgVaNNRfsZ4ySmpLYUw5xmZbCJGYJkBTUUHc2Lb4seZrqhdRiRpj",
  "key30": "2PtTGrvD7KboWB1KBR2dLGgsbXWJtux8h4Qj645YQrkqCZA13QDJe1dPg45QQp3Vaq6v23FrmcAHJBeTtcAkcimo",
  "key31": "5SGQuS25Lib1G2Zt45WBYjZGUjEdWh49rSoouxYapRNkC4McinAxrAcCzvZGXaLABJ3rBhFikU3jXh9oVY84bS14",
  "key32": "4YcQ2qq5fqwj6iVACTdRdBVTaRU4AxHDKuLadUcBM58uQRjkGxRU3A29TgBuVHMHVCRfqnmsgmGVHUshxEk3MLuE",
  "key33": "4GD1HA1tD9DWEqoXKdwpoCkbzxoYLCVizYnXRasqUMcYkCkB1GyZ9NWVRLASikJievautxpy6w57ZPoGv11TUka4",
  "key34": "jHXK68UvbCLR7VWVeV3v74itoS7TeFEj1jS6b9wbLxnYLEEyrSrU2FiWzGCVfyRjSxogtYdYMCnjBSUmYt14NC3",
  "key35": "3CtGReMQv4vZ1zNjupeMfEqdSRQE2CuB4V6iWTueJVzLVbUqhbhhejUd3NzcXfLKKG8gUXHKp1em95oNFfVwcjNV"
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
