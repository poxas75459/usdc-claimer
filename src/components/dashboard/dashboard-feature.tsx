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
    "3Wswnrx4QY5sMpEFxBqJz4gGKixSzQ4QZyjiQ4jYKmKzuwD4HbYtWr6BsMwUxtdm6xMCGokdUNBr2JZJDucxZmPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZXEh66FVpTa2g5EpUuvdZzcPxJfPYPjwfYNho9L63ZabTxpNZ5LA1Wrn6hLFBrzPaXnC8W8CBzUJSDXqg85GjrV",
  "key1": "AB9gaSTpkGXM1fhdRtxEn4oYQp55Wm5iUohcUt8VAPTL98pZx2VLiAaDtMxgsqCfB4hUnKpS3pxangamhibA5wR",
  "key2": "5vMY9EvXoWTY6kiLA8QjkS4boWKPLKvsdPvDhDzVrQ7e4i6VFvZ92TLwvhaV5pZPLYEhc6QaUQxETgw2yzADvEFb",
  "key3": "5N8t2YPc3xgbzFDuMcU1agAM9geJaj4zWK8qChNtbjFtf8hY9WUGB4dHYWwvQWaGvLqf9edjzZz965LJD2BBAuEN",
  "key4": "3VkZDu1mkirZoxyvWTZLkuRgP8uF8pi4nUpyauGsSn1jaz61w6McnbNZdgfPwR7ywrauUbnc4PA1VXaWHHAeH4zu",
  "key5": "4EEM2GWp4JCfaU7k7wupeQZ7Bz6hrYA2YHbKzLg56zbCpkGZjsNZQPHVtinoqcw1VxvogSbiLEpbkf8sPnq2hL1z",
  "key6": "XDxr6Sy2Ba4Ty8XGGDH74hxP6FvdYeN4y8LiQcTy7rFudeK1otLB6pTtByhhQ1Hjx4KjB8oCC6jP34T15ioMHmr",
  "key7": "3rN2C8XSFqwn97EMxMDymADMVFNyXz3R2FJ6RG8nAh656oAUfmvURuowXqbCUrPeDyHbpjPht8PLG6vKi9nAM2HR",
  "key8": "5AkdoNwDn4kBRL4pVXj8HFvrW6XjzW2EeM2QUVyu4pfAj5VLi8AReUwdvhdh9PaCn9zF3FmkTdSf2dpTQaBuADwT",
  "key9": "3if97mFtKxVL6NBX9eYbNuLhHTQcV6k3L1gbDxQejYDFEdxHams12jsc15x5NavLtZ6BXd7BwxaFbveApV4NxFX9",
  "key10": "37rUsdSfL9KwWuU5GsUHHt7CBbhQwssDFFMj3HNGfNxoFFL2Nhff7FHGzNpy1gwyLjVPQyBgJ4nUQX81pw9xegeE",
  "key11": "3zSxzo8gFn8foucpqNhQoMSDHxpC33GJGSM5fEDMtqLDRgBkDJj9YqTLWgLEpMnLGB5R6dZfX4gNQ7Lx6qMzbLWv",
  "key12": "211zie2Lw6W4VSCrFSj6STCW1daxvAJM9NWT4vLaRe4wuk3djdasKUdJA8giJxe9tfPDwGzw9QsrvjMKmKe5wjao",
  "key13": "5MhasBKf6gtjR8yaVuBVLDMe51Rycw5ucTg3zdk3eLDq229CUVpKY7ypUXpiV5gy7RQmBDx8hTeQVqRfMporcw9P",
  "key14": "1UG8CzZRngXFPCHJ3xfWrq6wLYheV97XNS21EutTVDPvrVEe4QchiqpjvGVprVscC5tVCpRQFXmWUwSZ3bbNp2w",
  "key15": "g7G3EjsSivyyTFUG99wf9UaakZrqauePkucXjkV256R5HeByBLho3XR5NaukyXetBLiqcTTvyBB342TP9V1pVEC",
  "key16": "eGejBRBetVac9dfJaVXBvKHf2S8SacNxxq8vTnoTd7RZmRXv4kZmzb95Nd5UCN122qp97j7xxCZmHCsw4Xk99kB",
  "key17": "4sMQN3qRp7SFh43akLrC5HuvbqSV5TsMvRCoeWQS9qu6QQ6T43KfQPhcA5wFYMCjR64nErMeKawJ2fXLoPzgjciW",
  "key18": "34HqshFDvFNzpSV1F7QLEkZYUkGgMHsbvE3GeQx4xKdq6o3UsftmEarUGr72BX8k9fkEVtbQd3MGf2sv62CpPYLu",
  "key19": "67m7zVXtM7sMPNw6yFNKirGAoTVF6HjdkpJktu2wJN9pyDaJbd9ryVXjnZTd3xqjjhwrSjmTAXJGhZ6iRQqrpDgx",
  "key20": "3NxpRvtHRvJiDsBd9v7oZVb5egCdtZ58eT2qfiszjrkNzSCvdxABhdnpANMCFf47Y9VNe2zevwju5AMkrLVphBcf",
  "key21": "4hAnN51AF4E77Kak8CfnDoVr4MpW3nTvmG9gZCvETrvN3XqRtWAaQGDoRgPdUmGphGCYkKJJe8yttx5rLaCTv2Bq",
  "key22": "5eAB3ghTuNB1bh6nYTtSS3prhX41BJMkxfxBBPVb9EiK1bptysg4Wz9zXsn1MhobBDJ6hHzEeiFahTfcjCpwMWaG",
  "key23": "3CRiySSz497EWT76XXUpDr7fMu3kwbVBvdXW4KDdiWNbWGUAk71oAGnoJWrSP9vA33PJkVMSEzwoSgZgpgojoqWE",
  "key24": "5QNbAP4r51jTxDPJvUtLrneqDK8ScY1E3apCPAAoJeGVkSosCcfjyttT6gcxYD6FfVNPj1A5aJzL4uPXj3FCjnXx",
  "key25": "2wfwiEkGXZrX6k9aGj7gtEENJG1zj1rPsEH8a4TQxe7k4JkSWsWuXQorRoZ5pTePASQw1rujKiXHgwPYauXpduN6",
  "key26": "5FoJByXWUm4oMEta2UVdufw6ghLPysnk6AVToRoZqD4btHa7RPsx4f4ge5XmNCcQe7Ms4kUzdU1wsBmPUQ3zMNTV",
  "key27": "3ZKCXuTz4LHJVYgtUXbtvhv8BsGVqghiJgeYuBZTtgUEeyamATisdwxXMYWkjnNABgCuzzU9XfGcnu4rQTps1Qv1",
  "key28": "2QJTPj4LszrNufVvPnkT4eFVQpus1qBjUcz6KZ9KuigHsNiT5HsSq22zoNcE3SV63tMa6c1o7HHREVLCEimRppxD",
  "key29": "5PTuoCixfaZfJAe8T8sDJnUAv5XB9dx5zuP4i5Lo8fbhYMWiQJdSeSKy5hGBz1spoi2374KtiJHKzKQ86XdSbFXi",
  "key30": "jC2TLKAMR6HV9YBQDoegd9ghpWbAbE8dSDdukyzhEtrbuFyPCFXHtH7yUmsTGswYHUeZM6UPWb4aFoSrX2YWnZY",
  "key31": "2XDrzfp7DHPPnrBVvTF56QehzdQTGGyRV8SQvYsys7hENFnnaCxv18q5JKetHuwqmCbqfTSvZtA7mPt3u9aXBVhy",
  "key32": "3qWxy8My6hdmzPY25hm1yXEcYSL9hJy8FWhgmESxRPa2ueQ7hqGGBxHxuFJZk3tzDzcvc97VJRuHM5nsidj8SYs6",
  "key33": "4w9B3ZH5wtJoNY6joe2TnQPbq1qt5Q22Y2USzAT7z2aubBDNgj7SkYjWUb2VhCpfo9xaoKLcSmQryyDbsCBSCNRN",
  "key34": "MRpy9qS7HEScCbDnLuaYPrxxzxJfHTWX1inACVemjAyXo2kwTPhjxvV8f4dwKiMF8hLop8qZ2RhkSYdXDJoA3EF"
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
