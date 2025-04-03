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
    "vW5fP52bunHKSJfS2XnM5d6v7vgQzJDwjCdsnVEDyxd2xR8JrY94qJPnsLVrY84bsgsFMFuQVcQEwGigY6dHiYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QibPt7GxXisPy2hjWJzakfyxZSjh4JSv87KCQqQVcfo3Na1sf6JZFCwgWiazVT4REjywjm6E7d74TjrvSHSXp99",
  "key1": "5dBvZS24hJKXtCG5szk8s8Rditiki22BnY2hoAJDJPqusb3VyECDazS4W2HAU4BcN4hmEZdJW3TN6pYBTdXd5Wpo",
  "key2": "4Vhf6X6KfyMd8Hesov2Vw8p1tCag8o5kDc6fGaqbtRQMhPQH3hzVGpvBfdUch7ps93qKim4FhCUe78BiXAqqNyoC",
  "key3": "45s3rXJpFer5aos2BtmgwqSSWi5oyQgxDJps98qCgvUsFtP7TYPBLMtfX8k5fK4dPAX4iHGvyKzpuPExiSb69bBC",
  "key4": "614nCs1pLyd86upkNzuEZSru7sWfCS5CuS2XEwvzSBEBRLQSHtw9PeHpi4v8BsQaUVJKN4UvoQtfsL4nngTjQPkv",
  "key5": "4Lr25hsdt9GSnMCtDd9PdNT4hsFKhwJDTuxkTFXmmybQJUqFApvNsQkZSn77y14TC6C6pPwfKpiXZEvimLYfSsNu",
  "key6": "MpBcU8rABJVciyEKRLHShkiVow6Wh746XyYDc2GxC9VvDH9PHiRKiEUj87ZPEZoqrcdWZnNcxJ6bXishwbbMTPp",
  "key7": "bsx9pqmUnT9Yp1LM3huZ5wEP2p8iqXfkShTrQiTbf9ijJsEyjkiKNXeRSC5kd8MTShULWaDPoQTv9m1zA8vpWqc",
  "key8": "Y7SfFGCGF8rbWdRnZUxGi27BqUu9JeR1gXiCSe4yoqENPcqBs63CLaZzshKDce9DafW3Hr5aq8ZjMmxWkTLedzc",
  "key9": "23L3qUM4BNe34EBVP5Wzw2N7qMoyTLyZxYcQqv8QQedaGt3vbAWdPBEdF9uoHXVCmhweJD8x11zzpucQKhqvskke",
  "key10": "4D94KLQivMmkjBFvLKz3ZhW2RqqWMsruWoodSr5wxNLBPei3nfJkbVe3osgXHFfhv9MKCQPXwTugp2p3mmXhAyPk",
  "key11": "4FDbUkZK4TUNKWtDeZWtZJtfQCmgthRXbyYJkXPEHjhc9Kjg4xdVbsUkDcVnsd3eRyBRe2aJLjmq3wma9KYD5kx6",
  "key12": "3AqKTgzfV3o1R1KfPHeCmz6eQGudfFhj4ezvC2aVCHcq6xUmJyohpUhge4za3zAQ1kRtHvFBsD1zXbAz6twH2pin",
  "key13": "5gGQZ21ZZ9uAYXsJtxVkNWXsSuaLWZCJZNrd44dA6KwNqzpECwpfMdaXoFDNqcLF6AAYoTS8f91BpY1GJdALfSSU",
  "key14": "56iqPrNLDT2e3AzfxG13XyEVgMLzk3UysNz64FGxUCGvnL9uTatZQiboxTuLKH1xiDgz3wDPNohccHgT3zQ7SNpC",
  "key15": "Am3HKexxaCUUgz9xHFD8UVgcjgkR7ThEHUyWrosy35hkLsqLux5gJJ2UV2TakM6FriK3QdLhjTgwLRe7GQ4AQ4A",
  "key16": "2t7tpUsk4dgkSrVkvSNyEAQnqgs5cRBN2HJz3GfEq17CQKKSrxyeHWJb7PZw2vfNbtdGhqDV7RYXh5VGDntgmxLF",
  "key17": "5FFY1dBrhN4HYo96kZqqMeN4oEDjwx9uechrXXZ1yPqft43aQmfk9M5dZgQwkDtDtvkXRcewh4sti7TBk3harNW1",
  "key18": "5owWy7LvGjs17fq6iAG7XLowMgbXJqnDWJLseuM8DrMhou2SNoGVJ8Pd778ayuYwXf2AFv9xMasFjtRXBPHfoLVS",
  "key19": "3pZ8aBTQFaZKwbMfB2opsysfiyTwxsUP5coAUypsTKDdxVzhoLLchhTbZ2MVvAG8QFULYkZvt8f6uxBqmyRvU9X2",
  "key20": "sG8TdN2Vj4Loaovj1skVwggexNnFwgWZ9ALMrA4v37K3UTvJkfWoi9ZV1sAAaCLLhq4JK2rkF1p6QyX2DcLSqdm",
  "key21": "3e3hNDu5DZG1ud3NfP2H1V4FMuF7Ks4jYED7kLa2FrkZvyBMpZgKjG6Pv7igyN26AyVCK76J9NiZ9kNwoZemhgz6",
  "key22": "pQruV7mwtYjxe3P8TtKVmh3gqwGgQ5bDd2VrhLkWKzRcmtNBTkEroKd366AKqYn1NbWiSgxcNE1B8pxAEm4aVDv",
  "key23": "58egtK7nkHsa8jSLqTHtzMSfe25DFsgdaW4DJVYQebC5KE3Gmknwao5UMtcw9mpiXgBPzjqyjBGj4t5Dhnv6jrCu",
  "key24": "4wkLTuMUa5NnnVSHnZVtsxpokuid7NEmZWkXRYu3e16zpkQExyveuBeuyApdAtwpZVZKawA5YgEZw2m8hCpouSWK",
  "key25": "3i2e4DKBE7oUXLCPGgEjPxL8Zv4wRo8fAZJBfbe3PxermjVGpxpumDRaFHuuhRPc6PTp9wnv2Biy5AniyePiDNqz",
  "key26": "9Yt3SYhRj89Q54UCF8wJdusw8HchP4DQo5HMZFcJB7vM8v7oTLAAP3YZJho5eKuZfoNTg1guzSCLN9dPFapuKZX",
  "key27": "3ECYHp5ZfkuT9ecDULq5X4xWWcvKPmHbgXPsm5gpJkSP7MfJjij623ACs69xzMY4SHrp7chFCyz4J92bUBetzoZt",
  "key28": "2YDdMpjvFdt3F5PrJk5yYjuYoY2UVMVor4czncxvKU1jUDkiZhgeGc7hVmm7Yj7c6fXE19FS8HKTMMqhJoPEgfjT",
  "key29": "3jVspQbVs2i94JrpihSvmWhPZZdkxtJBGjSkpFAkhHuiteNLW3iWY7AwSxh2aiuoB9FZbge6VybPZ7jyzWqnhqun",
  "key30": "52yBfXJrp4z4tfL8GAUgoEZdB2hmLP9uRo4VqNpVxSJnEdzGnY9oqbb7dkrHtBkfmnogjySNGrkssNGkWucdHVj6",
  "key31": "2oN4Y4wPHtqvs48DCTbVTbPCsz4wHWPPXehiZP7qFkXGbZ548tLWMq7Dg8D2QbEjgwDTk67aQMJr747cuNyPciGT",
  "key32": "3u96fkGQcqseRLoeyXdrpqVGDomR7KSrWzeen8TQ1VebzMqU66XjMbxK4nrhyW6HMYcL2e5qmQhH6mnitCyWGYyj",
  "key33": "4L494eXrPWuBy5XPbdt2C2vkRaUHATS5m9h63VYLRLCBFrG7DxTUHPq29fDqB6rMDfELFkEEhaDi77dFhHb22WCf",
  "key34": "5PZrJ5e7oEjH3U7sq2HqFzURzFDmH7nH2rppqKks5BmM8geGEhrKeNNPW7mck1zosmF59qjiagjAACkPMPj3ieR1",
  "key35": "5rRLGxHxK5fqUVq1A485rPPdWJyn5TPkNkmFRfF6WtELwrULqTdtukBgZaA5pCGsX1KdNYukfq6UoWJDE1JuHfTD"
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
