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
    "qrCxHVM3RZqJgJY3QCqyE4qdhmqWdEfUpFyvWNBCcWy49KhLF3KRBH9v1UqYggtqkg36fWdAX8nbmxNC3ecEVyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v6Jgdkv1SEkzY9hLqjXE4d5PcenVrsRQeQnT6ncUgMVBzZyZYzNZRroxF18NzPynduTJABymQde4kKQuXv8HCdJ",
  "key1": "soSyzXe11M9vWGMcTnDMd3Y4hU4eaztbkDfXAgYvDmQxcJRBVHPkVGYk8j88DbQKf2XrzGJfgrVroHnWx2uzauX",
  "key2": "Y7iEaozWEC3u3ryWxsdcJLQT72ZQ4qDAjGBXPTLTTTYfDnvqMqWeEmxUfgwWwJ9fbyG8VTuKmh7kxHAJAkk2bZ6",
  "key3": "47b86t5dj1mg65itYPxqkt6A6xjVHv2gjRngGHZaEFdMqV6HmeTDPYSCY1mX65mJczrzNfokdqjtjsUCg3G7gheH",
  "key4": "36v3eFT7vksjEspsNyhsiRK4yud3Y8j8HeyBojMvkBZ5KEqUX3wzuUtzo7qmGyc9byxEkrKhwAF1ntFdv9oRCxCW",
  "key5": "4wbHMXZVhES1hSSNfrg9U6b3sewum3FX3Se4ZRKVfTcxzWMMSDyvEKZi6mD5yM2m8TWZMjydzKW5p7WGpyDvfAdq",
  "key6": "2vTY84aeAekVd8tk79do6Pnm8Q33oM2eiAr8vCvtju2e8fC844fWsJw16cRNJban19z2vNvn6Zuh1Y2mm3guRUw9",
  "key7": "58r1sNdZzrRZWPrG6qXwd69mbPQ4gxx9upE1sRDmKb48wMQQrvRJazofuZA9M6HW61uBUfrzCoBQe2NmegEAJgek",
  "key8": "2hfjuetBQV5qoHXxGbCrLr741eStMGtojDjzs5mzbkJHRTMF3x1MensPEXM5ALatsy3XLuXicKTTU5NC3RKZdSpK",
  "key9": "3rK1QQXsbzGcoUPymhRG5oXkYZt2ajfuSqa8zUSzkkBSUJeFk9mfwrhBwjoXoiq7jGQ3gA5eGDwX6WYYKwA3DMqv",
  "key10": "5c3h93Ww4oYH4bLXQ4tywdPNQsXjcohzqtsL8wWJ7GVXBm5AeGmtTZu7hmDvXztnufhYJitYszn7Rw8jebqeERaz",
  "key11": "2h8yMRj9HMjVqrzkP2nW7wY1JJLkmHbayW2MybNdaAsc41QX9dxuDSCjCYsJ3iUdPihkgg2QCMjZnMqGMV64facm",
  "key12": "2et6axERVAR7P2e5PZ7brVt5JdrdqvZufpJQhufDcvawDYEzaNcSpfkHyCwqWb2MgPDgT943hzQKFiGSgubQF67A",
  "key13": "2TMiah5ge4RHtwvLqLyfqqbMfUVUzXQ4L9t2LMi1gLGFaWkk29yKe9Szin89Tzmhr1yqn6TeQfgWNpPvvch6Wijo",
  "key14": "65FkMELegqcHWDSqN4o4Mz4m8KxBDZ3EgUfKsXpYSfExTJGd6qdbhaTMoU8cSnFrMU4dNKpJcpvzNRaiMwo3yZL4",
  "key15": "agPt8ic1PHmtcgmbd9h2q1Yb5yf2Tcc5gd7GgeaS4Y36bQ1ZVxYK1w389qDL62TtTbun7u23wdvEEwBCrozeq1R",
  "key16": "YPpTBiV6qjtDBy1UEZgUMBmR4HG2MbzPVwCC7TTGqzDyTuPGHgN4HhShy8kBGZUh2o7cBNtw5j5A6R7rBsX1Dte",
  "key17": "3TYKNnE58kE41pZBAHKfgU6d49ZoAYR2qAneWuuuWv1jmtXwRGiZrHrZMYGRcaunQXSSpAwbj2z2cNwcNudLeQmc",
  "key18": "ziiZFXkse4gsVEgCBdWHDAkB7D7nyMjP3pG6K3gvoKZZY5fmw3qNhqVNSND8WAMkCRzofRXUNc1gtgoNFmN3GNS",
  "key19": "5FLkTQu3PKnkV2grqWZLXQzt3EGmiKRHQoW3MNCBzcHAB2gopuj9AqJZPPYRYQ7znrV7fD8Gde2RnhVZhEzzsdjb",
  "key20": "Ln7tQsY94k82zFpa2KgqchpkbF3cE5njPEA6v6WLqwfu3mutr6WW8fvzRRNuDb4CV8e1Z3QzEyGe3DF3HyumWRb",
  "key21": "4UJmpHKFaGQR6cJQGm8eXSLas8HLbuYC3e1YXHyTJPvjdVgR4Hzh4MEqq3SB4yRZcKVTWnBgPmj6z4BT6QYSaSds",
  "key22": "4UFbFYvzxmB1uGpJp2w1CQhqvEq2aTNz75hWt1paWPF9rhR2hNf2244aJnh47iF7fy1R4o5bVMsVokLmQLhaLHrk",
  "key23": "UgG1tsurXQixNJWzkp59cmeezR1eVgZ4ACGtmR6csAnNcN8XkGjwpUo7Xv8d9818g4RZAZfxgh2M15QyZTegQ3g",
  "key24": "3wV6Sx98oygLkaKTkEHbgMDrXdwH1Dis26uRokHVJzyXQCJvsywGGzzdNryYw8fZKmCyagYBJdEG9dQ1c1qUwsTd",
  "key25": "46CbhgdfK94iJ9T65KQ5DyMUX8jrXYdwdP4jR6HNGkmuz7E9uxo5aoAB2ryBTPB31uyCLBaT9xNTHTwVTTVXbspv",
  "key26": "PFPse2uzKM3SdKc7NLRybRiMekzJyE7VaapAkDYxUoi7EM9KWmLFX7j6qm99WgBQB3YcdmH8WiWvFgQqKSGjfwR",
  "key27": "43fDg2WhTRJ9jzV6ZeUsc7BM8UKx8xRWemDRC7WUGMuLTm8SJzhPhKYRVLKCjNgEfZ4jmCd92Vix4UUmYjvvNvx6",
  "key28": "4qJCd4SKcR9dTzMwBdWJfPqmy9iS4QNoCmgBJSPqpRtrXjMSrMrBKvnrZvWna7FAuRATvzRg3sVhGF3FYtuPJTju",
  "key29": "581LYobhpwDZPPEQh5qjBH2JyhkfZ5TTk9XaHqpYNWvN88com2jeoPxd9AJtHGfuZKRGXPAm3XDfvbCBdCaHwVw6",
  "key30": "3ShqUvAoUEaPEvWTgddqewN7JnhNSyARbwpHhheo3oTPQbgXj1zvPGLdZNPseKaHwpJ4b5VDXcHwGHX8JrgsFF6G",
  "key31": "4VDNCFRGKsc2VLmtTCY1TayJGga6ySVPNgLQcxe8a4iKvYhfJTPDfzoUjhqc6ZyeC1hzt9ryjsTuAeJwT1U2vU95",
  "key32": "QZzaMEZnsmfGvNjxZRzYqvVAFcFgiHmXj5u3Mjo1LGiYw9HKWgLDmufQhg6eYNBDfNK1TbLDug6p2MQPuaXfCYB",
  "key33": "2niXz8bA2Qnm7Mpf8p3TvpLH69CfH7mRaevYHyG3orJMmwDxN2mag9RjpTTnYU6kyDGMKJQ2Jc3eFYq8cnSGxTQn",
  "key34": "4zjhsiGerN7H9p21nePPtJ11XTCLspNTt2rC8xot1za1zyYF7VcHAvWs5KFCKu2J4oMvp967xGfPfwqmvRu8wXqg",
  "key35": "4g7EQ5Fthg142BoYsMVD77316KvQxyMLkG92vGLWTWTGocsj86Vs2QB81tTgMcqkUWauXYZf3EFGyMenVgS5eCdR",
  "key36": "3LRnzJeLiXWJnLmzgURUJiU2GiSUpoFgpHZH6XwbvyVXkwT85VRNpQk52jvuCod4DtPDypi34GMqCkNJmt23DXPW",
  "key37": "4BYNKtXsQkhEkbM2CDKq3dgChfkE5LJRNV78ZKMP2YdQ333JZ7eRX4Zu7Ph966jWVmTn6eNfCMi8TAsx3HEKJfiK",
  "key38": "qdNbRq5PPMPQVGFWhJu3AD1tZHnmaWcjXEGe2BDVjiQSNNZXNRwbYT47EeGRK7FGLS9Dg13tFpJ4eKQ1QYgXiSN",
  "key39": "5nf2JsLJoWbtmFD7c1nUB7rz3UUWNqG8KkingamSLcFXGcTMbCWGqHVdsWq6zqaBgQf5zKsTxZAQKyP4DvdZDgfK",
  "key40": "2H6eJ3NnYdsVLA8YVmdqZ5LcUAaS6cbfCF91HdzjguRvUFDyjnSEZpuGC36xGPU6Rd4EgL59UW9A1eqsSrZzvu47",
  "key41": "3pFgsG76kh5n2pkg9Yk13tYg5oGRRvkg37itTBZRMCygbxTJKd6eDYqH1thRFKsYyhpuUwA8p31DMt9AonqwxLEB",
  "key42": "KHyM2BGsn7m1oVQfNxtQGy19iW31mv1RgUToiCFKTvHKo7mxcsY9ttJz49uha9UrZEhmRqc7F6DzwMwi3zrxJ7k"
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
