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
    "t4U8LSCcSC8runLwkgb9ifCCdSjbNiWZpQNp1EWj8FjKQ3kegu51RPfCMR2y4mWSapZGJjnMRzKL2oPq3Azf93z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qAkoiLke2vNZraYNuT2Pb4rGNPEmQb3nGpSnqpcRHsYtcaJhjEV3CNuusXfQTZzA48hpmMWqVXsstNzZyTrKhXp",
  "key1": "4dCztPwrrGw7AeMJLNKfLpSwpWHc4bHdaKhVEKhqjYJqQEk7BNcmb6Cim9BZhpfVqbSpnFBR6JKJdmr92ttAiywU",
  "key2": "z2pBwuRKv9uSvzwptAPEcsEUNFaVF5LseJo35DRm1DnJDBWtSWyL2RV1LNooB7n2vWrMcGFXRPcRLePAxLsr1jE",
  "key3": "55Zcosa6aUXC2R9FddPLzpaVShaRZktsmUKoqZLkAvBtS2SV5oXCxsywBoHNAQMvcvSbsUw8ufrskaXt2w339Azw",
  "key4": "2r4gFYdiwfxgf5WdAip789k1K37RL7EZBf9zwhbaqBYzLPT5w57Y2wN4mnkZ1m7bre1pJjyXzpBT8FpTqQZjjCnp",
  "key5": "38E4cybs41cigthj1ATZGbNq6vtpPomuJwCLf4jg2FBA54xhH5UQUKCBKNsFqXTPbTVXnFVFYp2oCDnL69JbaSSy",
  "key6": "2QsuwsQdxxoGnkR8PDt1M5Jw3xVYh2jpQks7U4Tgrgt8T1NHemGUA4GtYyJQhNRL5nUuCXB19rKBFDbAnYWGNL5R",
  "key7": "3cQNwrFSjLqDWj3JVr6WgmxAk3SAHnutRj1c9ngKgtDw3sdNusswzXPca4K6fGo5YQhPCryUqApmM9ENVbv41aF",
  "key8": "5vKJHvgABQ2SNAi8P3oC7cuvKxwm6NYb4kUxJra5GwYZSA3TmuP6h7fY8W2EyakBZBWaA5HJcxTWReZY44tFpR5i",
  "key9": "3mcUmTH84kca8bfa1bvhPJWexc35vnSRSeafKCWNRt42b86xkvTVTCMAwURo5oQxEMv75nz6gZ3Jj6GGCrsDR4R9",
  "key10": "5hFpgxPik1xHgn9fiqTWAA5jLbN1dKSRk8paURVHYZXX15HTPotTC8s89ygvhkW4XwPCziJ8vR4kdDXe2LA5DdHF",
  "key11": "4d86qXe1dJbiBWCvxdaeuDbPMNp4ogz5KoqPNE3XhJZmxwTR51RAKNQrYfbrsDRDzYvR7qvukf3FAnVycSByTUkR",
  "key12": "2x6DWkydBZyghKzrjXyyqiZBuKV2rfhHAeTxf4ANh2fA9qDmhhMpTtmahvB969Jb7HLrWnEF3h4cwqpjDMGmKXW8",
  "key13": "3w8hxTFGP8LL21MRrujknTRhgvWd13aAubZvro1YGaMt8SLLjYqNLfGiMHUGzcDwMX3P8iwYzqM9Kn52m68zGDVA",
  "key14": "rYPQybHhcXGGgerxtaqxnC44XJhLVFGEkGtV3oera7j27UrVZMfuTaD2A8U5xLmM5f7BkZ43TN2bjNAA7k4RUxb",
  "key15": "WCktgHgMcT9jYemWCtYgX6XuZ7EyLt7yJ2Mr1G7PUCbiwSeZooTbw3yYmpvZCgQMRZYdn54sTboWgeDzQpr1bC4",
  "key16": "4QSXEjsYqWzdZ2WQCYnBf4rnHpzeq1mjDmBER6hH6p6vAcu4dL7JY7ytanHAdWzZLQt615mmwbQKguPyrPZXd9cf",
  "key17": "5RGjKjKn5XZLrgpi2Z18sCLFTnfAnRePLSouLZrem3ZUL37iUp7JzboXeSdvwAUpWxtsGu6TYfrxsH5w5FSZXbev",
  "key18": "4wiR73FXTEEZL4MTUtKrPgXEr9R7Tt1SRqnpK4KWQChzTKVt9m9WR6PGmTA76B5vdQUErZa8DGXyKu6CBmJaDS5W",
  "key19": "4PwaJYJndfMvELLAWaWXVaZR2ZdP28WktaiybnnKcXH64JLhjpvQfonAqs7P7mDShwEwq19QpmjvJhj3AHUAQYaC",
  "key20": "2GkkFzrd9zJUtKumMSe3LFTcY8ZSm7UdEcc3UZNAafLUMT7Dyf3hy61wxk8rvJJk6jFoLrT7ecszMHga4bn4K9YE",
  "key21": "2u5nk14M1cQLmmk1zVimWzetoE8s5NuU76KFxe2jwc1JKdxzG8mQyUxrh173GvRRiND8jacYd3gVYKx2FkPqHjrm",
  "key22": "3p95N1deMcHRRSbiRTgPy2aGgSP8nRbEgXcGTckxvDJRkH4JWkFJUECs15qux64czV35moaVRLmU8RfwXGFNCMJw",
  "key23": "4JteFgM5aK4BVn3gCty4Z6MNu4a15UQoXoKVqv5vtFToz32ZZVUJ1wrSh8CWv9kapn19FpK4fjK8yMRgXkRMQtid",
  "key24": "4cxecjC72WcfhBhPNsUShveiFzAse2eUdNAzLJZv64GXFeFmiW7pqsY1xcfWDdkLVLmKi14vWtNK9GWb3eQUX2Eq",
  "key25": "44qoafzT6bfbg45zpTcANBKc6vMMqtmjUBDZS9Zao8QCdnrHDq5kKJ8NhsBFUfzeSpWXFXFkUt3ggSSXs7VbTjaN",
  "key26": "52M9aAFocsb2bCpWnJ2teuuiFfq6JnoFdtvKsWmbjaAXey664kaC88dLNDadJLw5faJ5V8DZCSycQtLqUkuapRkN",
  "key27": "5qJE9hXxw82baHjuCcpFhygyTuWDEHq7FYofRFikVnYnVL3uqW9Qn2GhN8uTy94Tay4PXo6ik8rwtR5yWWYi4gm9",
  "key28": "5PFisi3yUxMWJak4GfmtGTUsCDAaGrprv5Zvy1mHvkXRCyFLzSsSPMnK7hw4RUEiiNMfzAUCtgDm8YYPHhp4Srt8",
  "key29": "2d2GpYyqNQdtWKdEiS5NqhcBXagvqUBS2r1Mp6D9Fw2nRqmuSy3U4uGA2Du4JBdXvdHZfcFexyxeFEfFGmthUasb",
  "key30": "5a52nruz1fTfSYgyepcgvLbLGA1hBgWk6az1CcZQESdR2bx2CJZrKGdqz9DaxSQkopfWz6hqepaW24Biq95YCR7u",
  "key31": "5gqvYivGBU4jJUHtqwBqy8usgizNCJfoQn75yfx9jmrSFZYJHQvtC3GV14QuXHy9VLUCzK97RHqXEjqXMft4B1S1",
  "key32": "3wyM9ZQFuqtj8zKshmCUdLagfL4vG36V1LtQTSoUVFkgtqCVZ2h5TEnvTCu9xBQSfi3xSTShGi6bZL16UcVG1Fmi",
  "key33": "3dU5PRoy18nSHYe4CwK9p71EwLk1Fvb86Eutz961P9nyJh2DeJa7txKpk7zyjxEhPCxPeoKDZf6nX4tYznexHxJd"
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
