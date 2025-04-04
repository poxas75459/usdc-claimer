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
    "4PHFqfS5MqvMaGz7riKVG8e8vNJ42q7njUDSk9TFcNzfVJvwDTYWhdKosGJSsgcxeELcPkZ6ELFmRRTkuxxLMtrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LgBF44g6G2nXruKVX86AZ1b6FQHwj2T7PiHkwDtw1CVUqgQGvgCXpEiRwmZGtMVtaLVRU1HHRTER129YsobR5Fy",
  "key1": "2Wz3JRDjTH88diLYnDrVtZHkrY5XYkUZR3iHzQKfBJJj2u9AFctWXToywRBKycb2Joeqjnxjk4KTiQ8NvYCiDVCg",
  "key2": "4vCMpMDGQBc1ZMQaoLRceQvasFnT7FcF1ceLUUYzWHe4RxdMW7LPQU1oUY4uCbHpuPatEzmgVK2xUrrn8n6ELLrR",
  "key3": "3jnUjfusXMQVvBCqbTSbCqMRfpfNA1sGtaypGLStW2aoieyna5FJdkjtyhpLNwTf36YTWakfzrbvme234Y2HcJrZ",
  "key4": "2LuBq1DK49kFf2cEQBCMPVrU8PiV4zPg67tMcGKs3SPUpnqkiPm5gxkgXXeUHZpYM6FVKmVPwhrwsLUMKLZBjA3L",
  "key5": "5NHxJVmWX4SqcnigQ2N1Pv21f7jsaEujwFByg7UwcRxZAGud12MVrdmWzX4KV8Wa2F4uTURh7XeYr1YuE52eTLW1",
  "key6": "5VNXoMfZpzPdPsc4yfxCm7hXmgJSnmnD2oLv4ZoGASxcMnsQnisS2QVB2grAyaHUeuTcji9AVeS1HEHjydhS9kXD",
  "key7": "5ga156HVyD4n35AsN794oTyESXEPi8RCrRhZ7jy6tH8gowsD6AJGeKYEy1gKE5nTfnYqPrje9h7kyCvSPJnDvjEj",
  "key8": "4GEdyp1KetLjg9EdPe6BfcPcWmmxCVbo7XrcB879JAiHcPajxoYwxJ1rrxrqHAkTiN2kZTbYT2UdDEbtHY1VhtDK",
  "key9": "3kacb9CJpRhNd1vmEd9wjH8yx8f4to1q1y2MuGFALwyo7Wv2fKqjsBaPzgVaJpkqZMxiVZ6RTHsN5pGrX1TrNAvG",
  "key10": "31SCJNio4rDH7sYuEKoeC2o3uuSRCVCacJ1Yqj6p6442N88HVrU5zK2hjJ5A9xPbPAQPQ4HhHWHNUzxF2GbdeCoQ",
  "key11": "3r6ohpZqzwEPK31qxJdvfbJq29UUKcJ2FCvz9difdV4nAq5RX8ZHewYsgPAbJMf1rTMHzu4EyQnF9yqzsw6sLxqQ",
  "key12": "41FPcXk2aEBuxSWzxmpBGriiVBRrbjitz612fV7VZsCtJFh4Z6PeC5rgpi4syDV8Trd9PGXRum8Xk9qPHa1XMZXk",
  "key13": "4rKBCbUuvoFYTWLaKiUAChsoftuTRzU7nwCyQ6pnFDJVAgN43FKMGkKiCd5Bi6Vs4jWi2ewCXDqxuDfCBrdhjxDE",
  "key14": "3PXMLgjvnaoRkhxo67N7hU49NWk2yWqnVTTYBiLzyaQUgP3b71QwrCKQLVGro3RT9ZXQzyR87pZUD9DSF21QrXW9",
  "key15": "5YHmfRmkzECQcAzNJhTNXQFTsssVpM8LEGDh6nN1CHQJs81AZmsudj6HQk6WfURBXe63fdnhyqfSekPEwBRp5Ze",
  "key16": "2iViZzR9fL7pKeFRLeiYuR8p2U9PPCqWFMnzPhHY36oNTdbMFQPUSBqNeF8dCR9dyyherNh4foKLRB9PXg1zrNrc",
  "key17": "36GLwqNKGdpwDfPAzr8LZj8cJadyBzF2KS4JVcFFt9Je7okocj5hAUX3bjK7rroT9y5GAXRGTA5JGUT3kKZXDoBQ",
  "key18": "28bFDBPYT8WAvJ1obqKKWw8527ftQ7cdAwShfceZyawcyF2iQW7ui1a4MW9Du9oytTcf7uTgVmECSRiKy3776B87",
  "key19": "2PLR6Q4zBjN6c8rK4shSuCBBnxqmjRa9yxXaTt9hKAm5hfe7XrVJCrijc4YeJtGeRbsksGUyvAF3tY8Un4KUDvLH",
  "key20": "4gXUkk4cVtXZhznF5Dy3KjAmDvudEcyTeEQZxW58DsVX6F6WhAJjMvoqG2szWqfwBRgxevkq3idz8PuYJeGQXjDg",
  "key21": "65qFhvPwdNwKEp15YQVvSySCbtAkZifjXrPQqaxqJLQFZmNpuMUwHXpU5fJzY1gLY2VN6uPmZreerJ4RMUtVbaoS",
  "key22": "ekuMMXacsEoEDok8MfNVuQW1uj8cgp4c1nFiZ46s6tWsMF8h6yyCs35gxPc3pSWHCDg4jJXxGmYj2vNeTQC3dHn",
  "key23": "34LLXDmAJr2TZ9U5BKCZbhLsgxdZJWNfqUXY2kDrAk3fX3MQqrxvUNHn7NxtxNySiqAK3P5T3ugPQ5zkkzRLgXUu",
  "key24": "4n9WLDDVhv98BtC2896T4kShzBiUzkrnkhoP1zCUqJUDBrxUMThAYSASzCzGPTT26679WWGpYt4E5sEWSyZfa6gr",
  "key25": "BWFHhkVDnHnWgZX6ju9uPr3vSBMEAooQsGB8h1Xd2Y2WfEZoRkzU8qWWDtq5pQohwy1y5Mw8j5gAsmYBpPZ3ys7",
  "key26": "5Q3QeWgnWLSF6ztLBY9Ae3JQBw6j2iYVp8ooNZxf52waQh7GD49x6qKkeuAaGBvFy9s1nTefzeGWPfJ7dLzjrKkn",
  "key27": "4iyDgx9g5JNgbRY1M8eEnT6Yq9MJSin6jiecewJrUZHBZNRJh9g9XRy45Wfb84cQy8oHjeyGVpbgC2KFZRmAaD7v",
  "key28": "3UGnJ6DFtNLRruqvaVDEiBJ892CKC5MoY5LhPGduocCUwjMFy2wtzgKH9chVTNcK24LpU8945zh6p8ermhFyg1XD",
  "key29": "4738WTXz3QuCzNVD3QzwNdeefVG7Hpi6JJrKyHcfXoLLZkkdvRcTU7YrM9QCG9g2JnxGv4bcmoiiuJLFRAqM1vJr",
  "key30": "4rHxvpJMExpzNPoprbnhnkU6xy2ri9skL9CahCFtzymVFBXdkxARNgazu9Bcs4tyqMVhqnTBVnpKKoXkL84uTX3b",
  "key31": "394fKwF4T9QpsSy317apBrQfrAy5tb9SecKXXSM62CWiZqd8KTLKxDBq5osi1EZzBky26YXMijHsDKjrAyhHXjx4",
  "key32": "3HyTQUwXKJckUdFroQpqjRFefutvPTJbFkwykDyMgyUKFi6wY3uMVXB4w7eWSc3MaRbkvK5YEiocDHVgs6QVa65W"
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
