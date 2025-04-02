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
    "3nT6yLikqmTLLBcw26TP8SPFjP9i8X7cEuAvaBRomkTzcRkzDjwQiLxFHowoB5nphtDgNtqaVxgdahxDfWfASGyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27StfN4GJpy8TQWQxb91q5wqWfjZvhLoKT6vWqveUfkYZyy3EbdzbnbgR6HEoYfkgNqDj63MUyah6HSaH3D9yswx",
  "key1": "3CPt5LvAjApNJ5jZnz7UN7XXMDKK73nzjwsxHwJHKhHVdsDPArwqs7vetsKkPFQAQa1ct7WXFFo1EmYmCM2cra6y",
  "key2": "3mbHHUHtmm6bhdMhu5XE9kpqKxcPN7ggoc8eUHVYkrrjyPUW615ACXWXBBFwcvrXt3r8ou1FQRHpoLj25D5gYZBX",
  "key3": "2nLgSp2F53ifAYswMbZwXNKmxS62JFfAkTw8cPjT3siCKCeALx4LRfr3BU6ijqWnYXozZsiEoSabjpiuErJ6iEbT",
  "key4": "56kFQWwc71Ed14higAJVUWijGcguQtdTudRBNdhGo3GYwv4UTy5UcLbAEWH2YqXqwBiQVonHKsrQvSddefmKo5gf",
  "key5": "4Bd4Ht4gtyT38FWmKNyq7AzjAztRYRTnBe6H5jbrUhsp2KcjkQ5W1yVUCSbKABRoe1FntJzvLgKfAiFZrjk3h1pp",
  "key6": "bEEgUnJkomCpZqGi5mXqkoHq1R5BPPo23ZWT8QuBHiEtmv7YRUGPTbfTbkBvZjf6fm7XbeGmoKiHMEJFJS7rq8e",
  "key7": "5KGQksRTkqvaDp8RQGrb87PAtno1s6eiQmyvZKwnwRNk5oKHZC9zQ8jyW5FFSd98sQ7ddJvGdjx5wfW42hf3anPX",
  "key8": "4wLzwnMYymvY9dHh8xqT1tPEjYqxYZPusnsDM581jFWVBp3XX6ykExoBUrTu4V3gLfgjcEzTcByMgcLsi4XaCLo3",
  "key9": "5iBfkyWEtxEUw2u6S3r4E1y2FRrN3SSBLs27uwUyCfvhEYWDErwLXErBVeV8ykXUpSWTcLa7F9VoCcdMUvhwBRib",
  "key10": "4pBVnSTJ6nB5VthrbQAj3f5VV8STaK5NkdoKksXHdvzoCPG7HqXbL6XFVfcR9EVRCAZiiA8eV7Fc2rs7hVC5Qc3b",
  "key11": "63uWhM7Sp1gpYnD3GEzBefi8oFtF4jw1dQZV2uksdXEWWPRSxeKsFJ2VieqW41as2ww4avF8GUrPwbY53zW3cWMN",
  "key12": "4GRG43BrY7kU9e3Hn6xCrCjuTJMPMpuQPs887efxoi2TBJnk8mPuvz7GTpEnygyZ86zrfizYTEiZDvoMioPySez6",
  "key13": "36SyQnZqb5HYkT5vELgJwDQhMy9E32qsio5HLkpxuw9qvYVbRgJV4BMK3gVP26BJGHrEf8rF7qTYNmNawrEzrXQV",
  "key14": "4DjcmvEFZRxRuMyYGLgQ27QyFNFj5Fe9dgQYuFty8G5ixRibyuGRDsoaCmpAVahcbhnk4yPooz12YRdfSRqpogXj",
  "key15": "yHMw2b54CzjKEuPySJUf8U1a8oDrVBWPtQ8SYcjaLFixCzeA771BP9LDoxJYxuXP5sNi4bDBAfHUfyttgfyterE",
  "key16": "5LT2vnaiGpWFSDmbZoTn37bzDNaAr3Cdq3nsK3ViJfyWKq5jCc3hmFCzGPqdLJVSKY9Ltr8E1uWmHgVUXBVkAGd4",
  "key17": "45AF3uCXguJU17tpjGy14aiSxb3e7tFSpWJyiXGdBhcHSfws7YdnAxWPhQHdvNL11t7kZdMjUV3BVn1VfiRguMfp",
  "key18": "3vQUj15sXA2EbeZcwy6xtVTkp2grnp1KVJ1W4Y5ipSsUJAQW7Un9nc2GGpq751WUdAQQMt4qjKtfD7EBnTprLwuU",
  "key19": "5cWKTzrKt6gwhhMQbM77NtAynKZ2a529XCjpAmUk2JarFPxLoVPCEE3HtAnukkEay242TTbgkWgs9G3hYekQF5TB",
  "key20": "4ScmRgEy7KY15wj5yaC5EEYf64ecx1HNfUJcbFDoWyGebsyhceBStKaToHofqZ1P9LgDS7PYjmGMWJWk4mhbiw2s",
  "key21": "2euJNq5uzLMTuMpYaUZYat2cCVMTX2cyr5EU17hECsqxnhUnNEFzKdEQZVXgektPw3kRSom8TANBV6x2r6zgbjwG",
  "key22": "5VpH9wAXDGmf4HCGo7rQRswih1pi8usq2dnYGjCiHjbLcFu39xv8ZcJXaYU2xogZ2AvaYZXEXEj6fiBoykyA2rYB",
  "key23": "4DTAVFupUHVhsqQbY6uYtg1WNbTX7KUgudh9ZBi9MpSJqJYTSm117qYbtH9HfLoSuhyX47KTTx4nyXCXhyGUcCja",
  "key24": "5yvZBxRvxSWKiQYurBs1C2g7sXVYCWJsqxhs3txPHDgfQrDnsHgQpz7br6rFP5RdqFNfh3xjW3nmeJo9a2LdomLL",
  "key25": "5i3KCsRLtDTYiVpfrv5dw3zMLV9dGqmtKDfvZ4hi3PGKv8Fq1LHyxcTjV6RenvAC7qTFc6CTqBXaapEwseH1SZ2m",
  "key26": "2WRz3BAYSM77Stiru5Tir8GVoVWn4wMrHvaw45dPezG8T5fS3uavb3dz49x9PRiPUhefX1eAdhijBoCKPVXgu9y4",
  "key27": "351oseWB9HGdogDFCHHfoWru6BpYafN5VdX3EUE4u75iL3NKYBPtzafTTtQ1pfaPMZNev8LjTygcGHTVwsNMRws3",
  "key28": "4i4tRteMuuE3ef9G8k3cSDd198RPz5Tt6qrqPLpwjbSyidEr7cpPfJoadKqCKJ1FZpciZxNNpXacuUfYUvMGpKAw",
  "key29": "5MJRjBj3sgzDYd5QsxnkYqt1pgESfcQuJCmv3LGvCJhcq1tWTuMUHLRCFKEf6ScvQ9rH1FfxvgwULwq8r6yrEUfa",
  "key30": "634wcKtrXms15pqbmuqH1QFNdFkLuzfDsNbYe7X47LMD6tuv7nnvKBfx9FxNBzTEtXRxbqd6Ep2ygedRQPuGz6aq",
  "key31": "4m8dQXt8i8bBgLKW18qu9gMpBhDF9kJTyU5mCJgLN7hAemc31N86uWvM82wekxCaVDzm8zwJAweRBMTvnUBtY5wn",
  "key32": "3X2dKK6fE3D69wwpTSWh4vpsydxLdtGsVLy8M6hmtK7khD6eBPTqpE2QQgY18nLkLA232wJ9tcaWJFpKFVfuRg34",
  "key33": "3aK5CnJwrT1BV3UBk8zJJArVXQiBJUBEexDigYe7gySLDYsuXFX37yGQhNF1YJE1FnHzePescgTvaE5BNqD2zCka",
  "key34": "4Ap9fGoq4jLimcRXRR9GZUEcmrMNcCC8P6Wr2cVQcSzxYmMPuR54XbFrEr99r62dPanNq8Zx7kniJG5NbEBmL6sJ"
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
