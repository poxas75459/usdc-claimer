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
    "5hxpCjo4RxEjpLjdFW9KHguw1n6Q6EuyLcmWnbruxYsyMwcgbtJvM1nUShQDNWHdvc4wFY3H9LQq7bKjfixKLz6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y5jcnkzbb8vMKmRhZMDXoJUP1ngizrNTvb3b6XboN1gNRJrhKKyk8JBJwYZZBMXPwfqVwcAHzTSxc57yHArsyTL",
  "key1": "xFY4v3sv9XGyVDWcQPsWXcGhkAFovijY2TbLuFLfrx2YWkBdm1SQxr2wjBCwJ87iiMEx1qogohM4e1q6VshCtcS",
  "key2": "4ERSuLD9ntsJjb59xsD5HRNg21tefpuD5GmmyqZfu8TzqiK8Bvmiup5yJY7qn1R7VP1hPMgPYV8qTZWCt69gK82a",
  "key3": "2rE4wV1d3i6hBUUi9EsNryrXqSojPg9A8Xxzq2edPD12Z12MBfPsNsqUsD2mozjmV1srQAVYY6GPMARaZA8kkmYT",
  "key4": "2D1cXrzSAr6Tj71bvjJUQXXbrs5tZw8ENTwLCjr2kCbZmsh1rFXbHYdX18C93JiF88fa72wgrw3LDh4cd8sb7zfK",
  "key5": "5KVcRm6korpk1ag5bSnWRXJYjFUiyVxQA1DfHdkHycyZXVuVB78hiRUzEbErXCfYauZp3bVzkhHu4e26VcmYribe",
  "key6": "5j39ZPL4zrnJ5NLGQnydj9SDLJk2YM1cntbtdNpokQ2sBoFDxqrZBps9eRG3k7bnxBNJqmWhcPw7rBrZosN5Ho6H",
  "key7": "4b16vdgZw4CrHPFbo5E9uR2sW5NtvXFmT6tFi6bdcrWsofHGYazFrmmSJFdkSRQNGcneUnZdBbvMRFXacQRSYFC5",
  "key8": "4UkVzYgSoyvxjvEEmeXp7pxMqdavDRqyTxT4VKjykprPdzeWTAPRB2jju1Yny3c5nFV8kdgKKiN3DJrf6riAXnKE",
  "key9": "4Lwqdng86M57d4A6DEJ4mgUNN8ojUYGy9YcGmZHBkEUXjULHo9LVwFXu38fqHkdWcXqrbNB98tCQbZoDWD17mNuT",
  "key10": "5nECcUiHgH2yYWi8pN3FTsnLuW2TBy7XYpbpxRhyFzMZ1Ed6MEW7wyUXKTg6pC8HwayC1uSUNTQZ1cvwTxFeN1Ta",
  "key11": "NoUwX5qnVYqCScCoygvNSSsaB54MoMAcyZruWmmpW4HtKq7A3VxWxC2uGKX3EAy6gN7iXPUDsjpmKV9USZcgMRL",
  "key12": "3iPTYSXpPv7EXvoHkkqdt8LHYdsXHr2bg9UYXzFsmnMab5s2ktm8MgEAKscGvxKtyVAxBZP5ySG1rG4H3oAjjcWX",
  "key13": "5txn6j5KstCGmdDmygiUrRQ56JMMoaVJGCcGCEjKCKV8Qv3EQozcXoUH57mvY91CYGjM1ZpDVb7uvHFq6jdRDaPg",
  "key14": "5bEj2K78w26JvtjAdNW2judUstMdTtpPmvZyyUfNuR954sXqA9ivvjMpwjCy6o6HkKcCUeewhY7g5H4zKvuAx7LD",
  "key15": "2MGnmWtBrwJSRmUBrMkDW9REV5EddiqXnjdpf8uvVf1pT4TE3kywiFNBJ3xTCHwEVgt9vZHW3J4wMVQM3zJDCLis",
  "key16": "5YVR2EyB2fDVJrZkFSyhSTTq94TW4WVimr44zqxnMyUY3XhwtpszAneM6EmEB9ku12ycRfEy1zCoT76cru6xj1Z9",
  "key17": "3HxyFTwCAp8G2RP3tG8qW3826FDSTmeXtBgkrCzzjfZDtmiPz6AJSrRdcvVVfPuDQCFw5owpzLWnAJsNe1BQcqS6",
  "key18": "26yxmRpDeGtM4xgRJjs6hXCk3RV8Jq9i5VpqLMuj29X4MEgnSQGiRPRQ5nnfZeFgP2LaStmeuq4McjH6D9H8Su9D",
  "key19": "3sX4Utqukby6FAw15fEc4xtAxGamYLpG91qhWdAEJcU8JikvMA26cKYUMKGxZhjz1JdHSLZsWrP1pPX1zvzXgHXc",
  "key20": "2UMF53UpCMpNHPwwQxDY2psuGk6JeRzxcEgoBow7stVa6eGW7wuL7LNh1TBhse2W2DSg1BZwVob53XZqvbzrRiGA",
  "key21": "QwVXM7yMy7yGg8VPn3HHFbHEebCNMWhyPXqQ2K7XoMuYzWMY2BJd3P4fjFxA5qytEKGamWojrvrNjynxKxsw3g9",
  "key22": "wB2X5s2cSwQLQivMQnnzgSULpob89jLbcvpysB9sDH7xENgdSbzNCCAYDa2sqXGNdMZu7szXrBH84oHeY7fkbsB",
  "key23": "qXWyLJvYENN2M1bMbkW3Ati2fGBPSeYxtmqgzA3Znr9BGxXGrMjHvCSGuKf2siTiAkvkxf5uDPY9HfkZj8LV1cZ",
  "key24": "3MyRatkksWYNNRwf1RjyqQsH5ZdMXv8ip4Chzj3mSAdG2ib5MhCfjEFZFM62Tj4KwFmhCHujnQnaF5yLeRx5i15h",
  "key25": "2mnA9x39tLVHnzvLZAwpYsErRbJcoWE6Tm9jtiCNxJMB59ugHbrpAiMh1WBCPVVZkU58HWT2MWeZTnmnyEY18Uuv",
  "key26": "2WEcsB3Au7uGeAwKhyoDFnQoL8gYFVwz3TMHHnRe67qvo7F75Tf3W6ZsZQCU3auLo3bsDZ4JdS5Y7Y9T24fRn2LZ",
  "key27": "29n86w15rtvLCQ8Qx4J9BLyMNKnRR6xRHEYrDwAyr7zv3fdCXMoJy7V6Kt8hgKAWfjxZNzjPNAZY7jd5vgJK4i2D",
  "key28": "3tMJvEinc7yBC6VkLzrkTX1v1zSontGSEf67iYzQDFaspGQYyEZwPqMwvQ8QVimo3S75q7faED2N3QVZz2ifWAjN",
  "key29": "2rL5uVWCHZzbSw9tBwhN9rmBeSMtBKQpHrtE66UYkUmKae7mqLcZsfNk1jPFH4aCmxvhZo66fHB6TpHvBnQL13Cd",
  "key30": "4eGma6kYSjFvxc7WDbMqrZsDzyUfKQtJmvv6xKwuAFxQsAHM6WwULvnLwTL2w5btvXSDcFBLNN6zJ3NKnYAncksV",
  "key31": "qRzHVqGLBi22qth8SjcXzPAzBj6qUEsFgBWvzzhq88HcCmne5QfVrZm5XMLFvr83qJUzxvVdTdHgnRxGa9hesVa",
  "key32": "3JnEZonEjkUaTW4FPFA66To6GSwiCUqh9Sx2iMbRWVaY47eXw6Wcemp8KQCgKcNwWU24EAoJ1dULKQfFjVRnfjez",
  "key33": "2mELcSdSNVrJYdoCZvwTFPpQciUmscJ1RvF4QYLHfbP483T93zzMrSNyvmNus63SMe349BhYVFrXVSdzoHTkqCU1"
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
