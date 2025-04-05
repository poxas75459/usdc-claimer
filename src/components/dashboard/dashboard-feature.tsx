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
    "23CtGC2hR8TeEY5pkpkDNsVxxQwCPPW6bg8Y2yQQP1VeU7wMJeVCXXUeP7sfgzK17Jykw2E1B97kueLRbWvgeey7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zm3pCr35AguBmCYWYwRYSknbbrkCUCkAsxZ9KmDJE2oyz8tB6seTx98rkedcxFAjSquao8AhHQpVgFtk543W2Tr",
  "key1": "peYLvWdrdMue5mv6dKG92yyxPhFXVvRZtCcoAZMV5UqFLSkqZKXvBLtD9xSHGNsVZ9BdmRrTK8V23FfVP9us3QB",
  "key2": "29thsBSU3aw7thGUvGHJUYgtWswm8kFQRbzTAu317pwCnELyiNVxXW3BKHtEKw3toM5g5tFngZ3dZY9yrd4JwJjs",
  "key3": "SfgmUabRLZPW5KpnZu7TtvMGMhhqiaysJ6yxWJE5sTCkkDXWFbsayHbgLiui7rCPX9ypTSb7e6wDMPWcknTgiNW",
  "key4": "jRYqeaRagCQKTnW6EKKCVup6UuBk1CBpid5KNWkPmbf3u4LQ8YSaXqWogz3D2uJ8LGcjoyNZBYsowZFYb6kGw8D",
  "key5": "4uJR7xtSC6LvYhvEtgq4XwDgZ78rKWCMpZcB3eT2s9nZ39Hu1AUNhiFzChSQnu4mfyFUELLGzorn23p5ACBxn5xC",
  "key6": "2Nz5ykjiTeajJf6Dma87dnKvJ1nBPRDPAyWoo5AUJW44GNAXnEDXBKZqz9bFrg6M2EmpGwm9PzpRrUDTtTvUr9AP",
  "key7": "2kZ4e7XbA4uMn2cWdfz9nCX1XmhEMgUjJNN4RsptBKtLBqbXB44xpE3c6Q1dCPmqDhHgtttidWQDPpzkZRqFqoK",
  "key8": "39w4kArq6zMM9gPTspv8E557gzKM9iGzauhbthEqnsuTDySyYhdbLYPPDJKCqzBJCQ7KBfZAngFnq8r67o5Bo7Z9",
  "key9": "4j3FYjm8oLV6qHqmAS4hXJ5vBWrw1fQig6cHSeUcFF1C1jeBdWCzPGrid9NM45VKE81YjiwPci8nonuQnJVACysK",
  "key10": "5NV1yHTexhBuENBhDWLKMduv9i8yBKWqqi6S7d9rtZsxBTSyvMAm5h1XU2dGjVuSD1ry6FUPLxLBiLKHAwoXzBrW",
  "key11": "3eTcrA6RH7cxkK5rkW3K2izudeEaFzWxSzri2KZqErnazqsJyzMoXMGMgJMC9mmJN3csux2NZLCUS9tyX47LpjG2",
  "key12": "cLn2VUCiCrnyAYgiDfFKKT1jQTEBM9y1pZgsFWNVJC3wX948QnShyHxvo7XBFWLe1yH8SRzPLK7deq1i6QGkvVz",
  "key13": "XV3v2V5AUBhFwZQdXJXr7CAyX21nvx2RzrqKG5T224pQJsEYdosK1MjFoL5o6X23zkCsMK2nesKe59tW3MoLEYk",
  "key14": "4gY1KT3pAiR5h8txuwY8guKUYx6ujexbVtGheEqAbMDbXPMCWBM7x4aRDrSaJYbmLoFB64Yr7SotMeubWsn6qCxu",
  "key15": "5bVbsjCEqA4EBhxzaH6FdNw94XJDFMXBN3kvknUAbxYd5PgQU9NKd8bzmfu6Ba6vjuTFc7BJLowHe2zWMecp9Uvb",
  "key16": "3BfAz4p5S9PWZJ5s8qqFQ1YeBhvepDBVbd6Xm1juKrBtjH99MND8qveHTBF2DwJrYNVDpuMg7tqmJFGwr5d7pJES",
  "key17": "iPMPzoRzMGEAQPg7rLqL8r1eG6HjLBDQiLoTZGikNCH5k5RTttR1Pks3XaWxFGz9PD8Pr2FGRcEe4pKd32uapmP",
  "key18": "5txP2AeUH1vrgbvf2VRQMb3jfHVVdv2D6bXWRczgxkxfx2ifTWuSS253GgkoiQWzYJWJULNf9PeSG23rDNgX3A1K",
  "key19": "59VSNrAgrbS9A5LYwt5GTBzi4zigcfHXwBeE2XxkrWjbUBAUmjwy3Y7n7TjCf9a3RMEAm2Q3LECyEfvnUGeQfEa7",
  "key20": "3WoBqVAwMGXF1m99Mzb3mmULKWU6fAWAgGit2iCmvCCRUKCowsCHLL2iP76bCL6KPWHVwAqmp1HWZtvQwNiu8vBt",
  "key21": "S9th8dXBZnEXpvskJ6768EkCM9wTCuvJe6jFWDnxKYQX9BHwi4a5aZL1pTqVYrNW4wUVZP924R8J1RCoMxT9Jtv",
  "key22": "2Lgnf2obpywJ3TGKdvm4LHBUbMVsQBLRbAvWaMFKPCSSDyms2Zj7pj9sxjGFEEsgA4PGYdSEQcwxFP3ebmkbNsGx",
  "key23": "4KJ67AiQMY4aY9uJBAigxsV9uTnE6VaKRKC5hMBduUFDeHAHGrBcBEfiKpuZUeJRheSnJq3WTz1fopSXm6RfjfGR",
  "key24": "tpmXFNZAatBiQvSYfYwcd7hGmCdoaweWmsewiuAz8YpMMgxDPJLnwETEDdQ5RcdZH5BfLQEm6ZZttzwkV9x9zT1",
  "key25": "52X26VuM5MmLeRpMu37uqFULhRqnE5Yp97fphkXWNDA8mLNi1iUh97rJ3KVRQmERjr97cKG5BR2eiuxxCWfN496j",
  "key26": "4dpsKrrrf5c14SNm3karFAfvBHhy4HUCKbhTarJZ62aHcsiXtvxRjZCqAQLH3nq2mFUrJzx5VC6o7Z2ZfzFD2V3c",
  "key27": "3fY3kKU8rbeRwjwEexc8TsGZvfKuEYB6eAinAXe5AAjrz8wReZFihPWjBseCr4k2gysyrPKi28s4bmWzqifD2HNc",
  "key28": "4WiYzZTG5UpvZ9NTMPVtq1jP39Ac3q6bMbL3vw3UEaiet7955kKgrHgLwhaPuWkKH3bkSVspg2FpXR3dkSHYCA4Y",
  "key29": "29y5XvEJfXGvVFxdyYuzSCntqJVAPHTQrW3JRkp7CWcgcPS59VXHSSE8YrU6SbxaL5Z3tmbpWb95o3JgBpCTVSyy",
  "key30": "2zryhZQMzqU41teSNWDSrYoh7DXZZJjEqhLxd7dPm1NLEr5AHmayDreZW7ZPQkGpMh8ysBwwXLzaaDad4UbGetFD",
  "key31": "211HjZnqXNJFtuKzEetiHMDjhjb4HY7VPw2FuKtD4QviKE76nV7hJk11SgiyfBVSMtpS5XL3oo7Df5WNPQHPsyut",
  "key32": "cJunEdyzYcZpiNVDXqxDnKWsCyGsnyHvJfdEZ8DH8qRA1o32qjY8j3GeawAXJWgjGnndBSYUTwc8UYE9HGio2PY",
  "key33": "66mZEg98kjQ89MHG9RepirH7B1Mk2Tvj9U1tbfLN1fBuUAk7rQhKv6mFKv5xPqcbsxDBkPzge4uqK4yta5BDTT7n",
  "key34": "4FaLRQYLbR37pRBcKiLmNjgSRVYbb1KqUzeAwMPwZxR873bTHsH7MiHejYDea9Y8LeRgV2YQ7wD7HXfFx4YN127J",
  "key35": "61Hvk5NTfozhfhAjQqMVJNBdtMt4WLBZQdJ53rPgFkziktSj6L4ZtTAmrevDnDppLVRwuxPSD52mgFzkVx2mokF9",
  "key36": "MLektwXGSSKtVyAyYvyPd8C4NEDQkzrXKffe7aijWKHb5AaiBfbWK6u1p55RqSQyGKsYyV39m5vvMqKtzwmeDgL",
  "key37": "3EmgKwJfMhVeoPTShGwj9zQc3CFo1hs3wzXQyrsSX4mFDQK5hMKJeWEkcLAigHZDNRUivDikp3pEUMP4gi5H7v9J",
  "key38": "45yD3jnMvU1pcPH2pGzyiUNZe4XZS39d5w3xzAKCHrFS7BreQVf1xEJ6VYfE6oPmmHVBQr1d6qWWM9dLBdZTPJXW",
  "key39": "4kknRGKwgoZd5gvs8PMtcxPnUA2bE9xG8UBJD5jrMsTorKfh3atNdtazZMnB14M7ryipEBSDRbtqHSCvfJv2nSYm",
  "key40": "2oRRXV2iHqbSaCTwkF6X2DCD12fjCqHZauXz2YyVpnTZEXscfPmt2gjLY8kN7oDPJWS8rYHHgTnRx9UFbJK8jxVK",
  "key41": "tYjDBegKnMBfRrFeTjNxNVGXC7zbyXe6QxnBwhfp675YYhj1J4rXAg2X5v34jMwet4Sjx6G27roH9QnqfvakDNX"
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
