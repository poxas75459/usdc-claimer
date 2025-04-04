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
    "phgdcPVptZmpPTYYkoAtmfYE5owgmoF8UsqRBXqSqYsSdsKPW3qEdLUCBpCsVcAgAhEvXuRR6vnd677ejx37yKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnc3L5hPGpHmWavGLF8T1ty7umcQJhnv74stnmqdyf7S6cTdr5CTReq978T8ZyxRx1r6LvNw8CEvZKgJukXcXGr",
  "key1": "36r8PvKCThtjyYtRKNaFef4huBEx54Uxw5WpWFHpU45XBmWpuL9ypGyTzgQrgAPZb2HQ78x4dQ16qQUScuotxps9",
  "key2": "Ev31NeDYkjGLeXt9t24SqXuiXDw7vgJYnMb514qpugtHy2Aw8DY5dMnKxCKDKKgmB6Fj8ApwCQdqKcaS1RfgrtA",
  "key3": "2LnMp8vCKEjn1pqZ9ZXe1bnLmL34SuhtDmDkWLq8QN6tsVXpLwDVJFBzderoE7pZuG8X8Y9vnRuT67owK9mtvZob",
  "key4": "pVEyzrTgYYkMrCe9pX7sRXNKNrgxXTuDv1xzNgEsmkEMG3P33bfY3L8icrwUkS18it1YNPt4NpJ4sEKCCNWwwRt",
  "key5": "3KN5HjxDQHzVFrqJcQmkniYSuK98jsVvpvhW6qnpu3jqsKMctWuqPv4wmEuB1BK6ECHYn818ebEpiDWpbNNZrGhE",
  "key6": "2U9fQqWoRUgKscZKARGkPNuvDs6hfuhjNawztDqEYUY5pmRzvaDzP5FAdc4GhiGB3adx1LKPr3jAd8DkWPK4YGSW",
  "key7": "5WZomzTm4VQBxwFgngQr1rrLQB8FBSL7ueDYuxqpRWPRaMpCJ5iBvevgNJjs24vaXu72FoB3Zh3YWej1fajxTam1",
  "key8": "4B7DYBig8m5TRHJ9phxsERRTZNmyxk97BSJjGjrgpqXvHMM51xGFzqPiwsuwittEzHMthyussMowtwDWis25HKaj",
  "key9": "t8pzupacZqTHawoNPApsBkF1ZH3B7XozA6ntTZLik3vmdThAfTHNdrvBczZ63V9Z6bJTa7xvq3YNbrrM4k2Rx3q",
  "key10": "4GD3A21di9UZ4vS2dpsrZbhrhtYhZ6aiGjEgdruH17KYQEXate7S9cfS9VeQd3jafBw7zAex6qrgnJA2czrHJzjV",
  "key11": "7wmwkRUxwFNjzHpDM28AJrgk7iq8HaoM9ceeSTgXHQRW51UP1mWLLGKsZ9nfKVpuQbtDA7LCHNEPY2K6nnNPXzr",
  "key12": "4NzL8MS4gAWrPaLiGhR39N1izuxJQGHprRCMN1Dsev3UpPxU7z9MUHRqpuzJ2zg1dhyxmrYWwC35HNzmvKB87f4j",
  "key13": "4ja8bx1toE5gyCQT4f5HMG7Pn8PUzhHpYZb3NSAifqbH1ribceuBVeF6MpjmEqsoUxP7jcn8uJYoFXg1Z3Eu4e79",
  "key14": "4g4AYZdsUCJCH3RwG8mq2kVvvJeQWB4vJcUC7NLv8yg7bbQtaJR9vWzronxTmnpQ9t76YYyGq6fTWzuSjUfuaaQj",
  "key15": "4uMpF2TGBTxtv6nPmxjhvZBg1Jdo11HYfmXASBTpXvRmmnZrTZC9fWgcnfuf1bXVwcbQPbvyFzhCcK46mxzqkHao",
  "key16": "4jkQmJgq4B9QKeSBPrADdGopxjnPLUriX5S3KQ1wDhvM9C9cffTCgTTWRkgkfdpot5dwGt8bpn7chxncn8uFSQ4H",
  "key17": "9uHtcyD3eftcMJt2xedn6MEHnCwsw689Aa2RLyMKfRePuqpeTPb1cABzQMhVeE1BWJEcUPkT4YP7qFBYKukixCc",
  "key18": "2YrYLmdo6CEpF5GcxwvxZW51eJqP2CrZNG3xjspKdGKX3VQsZZrAYNJQLNY4umCjtvj28mRdzTWsH3scDDjvmt84",
  "key19": "FeB4LTgpS94RWcPKGURHZVHi2M7xCHHNsCt183RX9AEMAcHRRMeA97VqiYW5vzviT5H2GFfo4kqqk3wSBnRpSiX",
  "key20": "3rk5gVLxKsGx7zZnxbsVdKxmy3UQUMsjEdLcrhpAhNyQKSjPJdEXR3mYF4Y4Mb3qN5Gr3yhHumg9cBJnaZw2w1tX",
  "key21": "2NWyHKkDjuFbbR9B2hXWnLpeDwfLV4zkvkstAs7AAnynmWTNXSdBx18jkWAuKapDe8Y12oy4rX4H4Q2yWoE5SGsp",
  "key22": "5hGqUotwrwSHBHc8tXnJxjYCYRwfniz5vvLtLHHUFBrNHR3fjmUy12gae2CjmvuDzVSiSFtLRaXKTd7aZz2MRX45",
  "key23": "4VLVaZ5BwNG8txCfTfzHskbNU1nasMT3uyQWiGaspX7S9AKrATF7rLn7BQrGJWt3AdfqLg5z1JBBNQSGcaydcyU9",
  "key24": "sdhAs8VyaEwuMmYP6ypPURpGygXeou1xDr4kAVc2suZLb7c69HuupRMBfkLHPcDhJEQxfQyhcxiJUB2YSt1VJs4",
  "key25": "361qDYnqFRquJ3ftQfLLdRT3oQiVHwJxqa6s7CMMme4Ahr8PfZmvK2rnrZZBECHZPfamcLRgQuS814TKu5v3HddA",
  "key26": "5KhuoixgQcSc7sjTcZ9YgMyiwZ1WkvuUdTY2MrtCbj4UhnkGECRC6JXTHaae3dyQLhjYHnUAEx3gentAxcubLVxK",
  "key27": "4Be3aXQ5HnuugcNrVTAoyQcV2ekLagza9PhZmCTFqMMeVPpNCzd4dyzofikE3m3qkKBB4DW2dB4CeH8LoAdJ8cBV",
  "key28": "4zNaypjrmAcvG8C6pV3cnWMyxjs4pgrpdLA2mmH8M9wjs5E32Y57sUyzsU2U2we1mctDFH2a7z5LQbMy6v6GQyxX",
  "key29": "3194q89oVmVKVYxubrqxB2uG7LmzMqL9m6tgFgq9dW4GfCnkNVwBAnLEdRJE65VteUEHEUv5jgD4o5wCydN5xzDN",
  "key30": "4MHPvDwZVFHycakMcrvQjXiRi3LULUvfLBAqJ7Fw2rscX4dggtBAtZhTp5uvRTixH6LHEhmoZHs485nqDNQpV4FT",
  "key31": "3ArMKCqTK6pLFUK6V6LqGQFj64FQxjNDRFGXRWkfG2TLFc4r7n6JU52R7t1JFhchJj6AcKpKZEssbuWjDXa4aF7f",
  "key32": "4wgX1LEeT2B4jY7QwSzUu6kLnwr5nUUEEYSKcETZwJDX9ztde5viw2SDiuLNTdv75McgfY4ZokB89t4kiwAX3Am2",
  "key33": "679r4XcXFwAYRRABBSnnw3Ltp2wBfqYG7d5QocKHkaaEeNv2HpdNenTYXsjKRSJyzitaw88QWs3L1ddJAxEBJ2oe",
  "key34": "2D8TBn2AWDcQTWkmCWAXWNhVrmKJ38UspeMey7R1vSDGnm6JuK2npe8aSGcfrhgFJbv614ii25DK7H32eA6FM7t8",
  "key35": "4kgnustLY8JZtVLLd9QT4KKndcaMtEfiKw17NvG467BhX38xPbsXA7Qg64o4jt4qhPNgvA3KiA7BXBr2mgjPpfuf",
  "key36": "2LXgpZGE24yNDTsugLksg9wYfuzYpeqGUQ7r5EajDg8E63jAUEtt4i28VUgScxDJA5Y225rQa6CYqN17FY2aVX6e",
  "key37": "5ghBvmoGDVH7FKCzT4vp83gvWppjCa6P56HgQ3kXwU2oKFDbC6o12DLjnGepq6io87hPogXiovLGhExVqbtMRMU",
  "key38": "2QuuQk2yAr1zdwF6FgnDwXp88gbLfWZdvwELJCyR4edFBmQQVsRuya8VZ29zAouKaJuz7QcjSxSayFdEn6mSX8AP",
  "key39": "3BZKR78H8vxo3PasoQH9G8cYDFwiRy7MwB7tKLd6j1yN46oiJS8Ty7iDfLgQtx4uxZQ1EUXQAm8CmKKseoAyYxhx",
  "key40": "3Z7TxCqyj2PK5apqFoaUxGxejbj75A746NXfw71MM4NzykifNmcMUkormJ7ZP1VPpyMCpfAzCC74NfrR7B8sfYNT",
  "key41": "5DzWGRM3o8PnWdAdEfxQkHj5mvBFDbrTKuYrcGt8S6VVV1jvo7fGLJeRZGdvB77WZSnGtdhaokkna9DEk8zuFR5F",
  "key42": "2v2gxrTMDfh9iX8SYdghHTBCfFdxo52zKZYLWNHoBkt3rUpDmYcMYWQjPGVe3fTCRirAREb5S9eZ6L9BhVTz1KX5",
  "key43": "5zZKEyUctNkpZczQQ1PZvvnuu4XuXZGGsCgmeRfPS2VwcZKuFGBPYaXhZDPZ51TfMvr8MjrjLyYDYdrGrwjxs7c3",
  "key44": "5Wgmx6GcRGtXYR28RMLhGzC73D4Ld6gvnknEt66mywkHByZxpr9k3SfR5VECmJtz1hEdCMzL7i3968a3Fp1CLVTr",
  "key45": "5FkuLNCiypSStFy8Am3uPpDmyQh1j4MQwukyUjZHRoCdKMXgVaHuQ9CXwUBPmW9Sz48nG7m1pugN99a1VGSLWCiA",
  "key46": "5fPy8AFntWrxMRtXQLpiM3sMtwULixLU1gLfaHsePfBb5NXG1Gq55LAYWujYYM5tHdoSNEo6bZX3tt8K3qoY6FRR"
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
