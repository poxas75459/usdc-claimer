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
    "Wxj5EGKT4wXQwkzHhqX2DwrnLb3JsVwmrA9QxHwbJ8ndHVfSyxicSYgLeZre4xzB8qFpq7Lc5ZL7Nv9mbtqAPPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h13Y35FEQrY3pAdK8X3FUwJpM9q6Rw6EnHbpQwo8AhU5JfWj6ywbSXyBriF2UXqUR6Z66rVYT36DhX7cFGfvw2P",
  "key1": "4roDXZ9bUEUHtAurzbZcp5Mt5WaubfFrHXTcHDCzuAtEX7xfbSqSEaP5B9qoYPyHjem4Ym38Maod5L9adQ5NuGGJ",
  "key2": "3Pt6ajeDYvGQweKa57UJvzxs6aENdQHWksKgbiPgn7KLfCStbhKsX1XWfKfBiNCdw3VZBGnCKqaz1GUpWGr5cJLM",
  "key3": "5VU9Z2HN95jE58YNvJWzrSZsF4ouaF4s4cErxYMXpVFznvvL3mhFDeZJ2kvM6QnLEMzs8UXKeRdkQUAx6nRMiXNM",
  "key4": "4jzo48Fr5kBGi3nuV1MctbF4yM11ATQLFWR9GtVbjZJkK2x467aKcwA1ZrGYUiFTCL1XVkhNu2wGCsmTjGvkxqjh",
  "key5": "4moZTtJVkC8VaSps3vxdP3tBs2xPvTPZNhFW9ashCzDyqDYuTfNyo8nPgDBW8zX1XjonyPoN7az39YMPh7udPk2f",
  "key6": "4LNKgvX8SiJMhCieo774DcWu9QUWVVBVPe7WS733ZGp34bYW5PAnrqfHYTeripKi3G9ysZFcewkkYjzBCsyKaPk3",
  "key7": "42zG73QhEPfxWhHXHbhrLB4RwDWPUaCTp29KJ5qoXAtzqM1Yd48Kx5YXUdo1Q1DGGNpQeEzm2RWQRhf15NtEM4q4",
  "key8": "YNrt9XnNiBySuHSFKsXxbA2HthHPcCLFHBXLcKSpyzZA6LM15smJrhQJW9dmS3bxscFGdTLtwJ5VUoUmSmhVGx6",
  "key9": "mN4vcLo5X3E6hg2FahfgnjPy3kbVkvssA3jW84sACcAb482KYcJquB6u1EjgZxqgJP9n2REPs17DFJi92CPAPix",
  "key10": "2VBt4dhAximPTNZrq6EQ8BQEWmLZU6yaNHXAXyqqFvspyyMRvM9mWERzqUbmHVbgTiidECY5LYBkCdyug38YcGvD",
  "key11": "a2j7Y5oVkVJ9k3fFdi4Lr2qQGdVRNLKmFXU4qEmQrbK4kQ9VvURTcgmAp2inyy6t4N2cm5dvc5qXUnfk7tRNHXb",
  "key12": "4jpyMqQ7SNP1jboJMZupxMMuK9B249G9KRnDqijEETRrQt4xwPvogHQzfmTqpqF5fUvVjFoEk4DLK9Nk6W5kyb5R",
  "key13": "3pJtYhKgWdLs9fz7r3FCcqFgEom36d6GtTzRu18Dkm26Rz4zTKUjSLrYn4aFRHQSkBNbj428FSA3z9YJQn3unUNR",
  "key14": "65pmPvdoTzcbjKJWoH9KzMJGa5LqSku17uCDSPn591HXXvAaS7U65Vm2RuZjfJc65wpjkZHfwVAAbVFgxJVD2mdZ",
  "key15": "3Q9HYcTjaPkKqa1jNN3xarYRZRv5raQKuU6VL63XoQqdVEvKZRCfpyrh3NMpgG8DbZxzcBe5qJ5T7zgbjfUHbzLn",
  "key16": "2bnL8oXCRb8ZzmQap7iLcp63ARz98cjMBgZ99dt95B2CiWbbLRv6a5jzLroTcpvsBBCoypRQ3qc4WAodtbwFrsFZ",
  "key17": "yxRnurmaHrJVCbfvXbpTzW28AZTtx6VZe9HXJ6KLxSrgouDBGDENQ9v9eWAe466pzX9y5dug1qZ9SmWffTg429c",
  "key18": "pLYN5CXRpFiYMju92p4SzDPBYU7yHb1gHrSSLFNDP19uCQ75FtkTGd3NeZ5XgKrQQT7JkieJpFyaKAD4rhzJ7jS",
  "key19": "4HqmasxLqsVzjpcPQz6rJ9Nk5xyR2oUTq9q4YKc4383YWnBMZU5MbndC19SK53RQaocfkjwKcZG1pDjYTxskPSr2",
  "key20": "2D9PWQzy3Ajwv7LCvC4NEdpVkSEpbuokXSriVnTaGm1Aj2AvQxL7JfskXjuMcE8hpJsbjwoT1dnJB3T1uUy5zTEx",
  "key21": "2muxjJpEe8njhPSNBimzrL4NpUFo9Bd8JJDJPLLunv1oobffZxKUxT5pnctzw2JbjHZAhSajF3TPUC8vjuuxkBXk",
  "key22": "4XyWJH2ovFTDdna7fky6dGDP2s9PJjJDqsUA9LwLSETm3QxCKZWoarfYNbccKZYegabYjYaR8m68uFYq67Qj3gkU",
  "key23": "4DLNHWdqLiN8xjLLLU98JonjFUqhfbz8Xkes52YQdx3n2Q1oeefi5QquHSusvXPWxBXqSqhN5V4onc8nU1a4dciu",
  "key24": "5RRA15Vasw4MQfm6hvc1LdMLwJv96Ga42MHmLptbKh1Y3Hc7UYabiAeJFn4bAJhHwGKbbjx2pSooNGVXWbqAcvNS",
  "key25": "4BnGRekcREn6A5eFKcpcSjXLbiYrd5Qy7ZC2rTfFknd7cL75yKTAddd94fvag5aon6ehdLUNRkVXq339HrYXS51g",
  "key26": "66DbdzNWGfgsbXBGugnooaevjH32E7QVncp938uRKcHiLfZuRPR57WowLbieWGNjLecQDz9Z4csFborqwsL4UjWz",
  "key27": "4xCmaP2utF9qrXEHQi7XHJ1rJh5UdPTeYj1pwk84HhVzv91G2hGgxSnAcCiE7QhrcN8G85PNYjYQDFUiZRStNoKk",
  "key28": "4jKj8AheQPDwo2sCuFMcNzw9E76cjDVuFS79rUqLocnDL2i5JBBFq53bsHm6VHahiMQBRitQrpecJdaqs4G8y6h7",
  "key29": "MMaoVg4GAj4cQ1iDkYGJ2Jd5JDSV4rG4xA9yzxsYnpCXn6K1EE5haLsfzcKXZqJFiYoC6qYoqBipmkMqE2ZcdYA",
  "key30": "5HFxPmPU4AAstimcYcJrRkgXXjWDHxofLtVaqiDy7mP4fXDjBNBvcyFnRmDDuSRfXeNtxh8qq3x9jMDRtGWRPhf",
  "key31": "5wqAHcvo4g9TiWhTpe29HE8jtkvmwhkGwux4MNsmf6r6QBe8ssn7YsiXjYwbRsLNzedJgUytrbNiamqPGb2LYWCx",
  "key32": "5jCscaRtPMKnnd31UoxXNaCsqvAXqpmze1g5e6Z4fyV9jawxk7DMzqyhfyWweEesMkWvpKQ3uDMxABS5ibXTytQ7",
  "key33": "tk7LreSN3keKgdUsNuGpURJeJDpS3WzQ477HaLQuGuMn8dyr1WnnxK8G4MWw1EYLNpQqc4jbGm7Xnm1PVxTZPja",
  "key34": "3NNxXhZ2LWUNYCNAebuhzxnAu2RgLKY6rvgGLTsgeBy87hbbnbNTPo5EzzPHpowNokUCdhBjsKgWPDkXcu4mc6p1",
  "key35": "NpyQi9xtMV7dkNvL2gG5rZf2UhYeFc2zS6DuG9Rm3Qn7HhFQW4zvEjVb6QNsYY281oceCYZvnFZHussVoApWY5D",
  "key36": "vYSmim4jnQ71nP549vwGwPRCNtXfv4QWVWNmRi286dLCX9mVunomyKTCYBTZ1Bcxqriw6kxTmq6L98cwxyHNeUX",
  "key37": "3NHdLs9LU8CVnyvdFXpsQHXLdbUVTWGPHApQsQND2K5XyWc1Gnt3P3cWAQBJhbLQPYS5zTSLD9sMSN1oLL16y8Hw"
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
