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
    "5ZjKQtP4DwmdPeKY4NFTTGbGck6JyuuKXjeNJCTkcyuhkPFfjg6TCb8ogjaKSotnf6J5AMnfews7UbeeBvJMtdKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nufQyBtUhG25oRnzDjqnKenRKa9j6BnrdEJAZSb5GH8GZbTeyCWt2UQdKHPkMEm4PxX6L2CirG7767c4SUdpf1i",
  "key1": "5znqj4oJHi6RRAyuaonEXaJnPT582k3MJSCfKn3aLyhwCfNcYoZqfiuMpzd18pGtPW3sbYfeF7gDRzCoQYJ8KRKQ",
  "key2": "2SHpgfH1S9NvKAtnXYv4LWZgZ9XtWwn2HdCdTvCiyfCLP9QkJ7kqyY4HAhhDVwsHUvDsCurKHeScPxiQUxGAuavW",
  "key3": "2CybpnhHJPDsdoppxxcQtbPfUqvZfMF7qKTnRcp6eYaBdRsvhExv5JiamTQweJqavSCnyeoVCBxGXc54d9ZEzZQW",
  "key4": "uBVJHMyuyYZAxqfPSHcZeHCHuZDCRAWAZnSFUjVXUnaQ2eMRk4JC6gH4SfR5PiBwsxQ3mGSHzTuv3eurDqiXeEN",
  "key5": "4tzZUnB5Lr6qDPfi6yMYSTAH4USjmUSXrQZUyaJSjzUWwgL2XbfHsp3AHos63oGRhWEEphJroixkFGc1MAZm6NEP",
  "key6": "32uaVGNo6pp5xZWK4u7gJBMxZcffvs5FzrqRkCNBF4icbASVNDV7myUMXqQuXM54KSus3prKoc1DuaNFaTUmWKPj",
  "key7": "3tpP21NjNn8FTYemEHKwCDDRAA6DbdMZiXoempcJM2MFtoX2KcFuKh56MpDpumeLs1yUv7T8xHT3SYFtzzHDtjbz",
  "key8": "7zdKw81oZDFNjB8Qd7exUtvnwmhGzmXhFPDDaxdTzwgDDC5LwynULBaiTw6ed9qUxvcPRt4BuSqFwSd5itZXZ9h",
  "key9": "2Uavs2adYL7y521FkkhozeWQ656ZMYkjbmxaAk146vKYsPHrUTJkQj7DLEqLcMhy25iCFGvjm1UXJaYYtjzS1CAa",
  "key10": "4SsVbLn8qzYSHS52ExupUUT2xUDEJGXPBbG5AbJX7VzFh326WwAVwnd6XtPAKGfZuoGQrHcn5nsqeHxrebR19tcy",
  "key11": "cQXs4dgQK5BX7DfmuPiYMP2trVKQLHeVueeN5xYPuQgyQiMmS1BhAqLQKbX7YNcuxrZnNkcryfc8Kag26sBk2fs",
  "key12": "47eY4TP7inDLHVvLEJBSTXeP8jebzrDXcpqHw9vmptvaGXVmkY2RbiXunRNZfS5a5vwdZ53mUMsuL6mukwnMCvwC",
  "key13": "4CyjJYeXRwnG4s3Qotd9RCjxNa56LEdeyP2xvEpNzXVEFujET5iwBJqVoUQZLKCVmfwVGiUEg83Ehq946YqQAFZU",
  "key14": "4FFNUqk1GC47P6A7uWT8vnzDH4uZzkNqpQRDuyWZAd34okiHNSzZ5mwDf2VgndByoyekckcHTfqaJBmKRxKu8wzM",
  "key15": "3V6dBoycsiNUErKHrEsv9rM1JQurjCHV1zXZYjaqCDZmjsc9KHLzuDLHZ8Deh3btCVdKH5qmDfVsxqvjjYCMhFnP",
  "key16": "4KRZAf11wXMY2Jo9A8DuYpxETqzho2faARM1nPrgJR89A2pgyNP3tdvaBQV2UocPLsHmBmm7bgdNe9FVLdUTmeYP",
  "key17": "3VdKH78HkAodaXcz3fibbgahSbMpiPckmUu2iLdd7UA2poZSuRcVid3FyDaU8xCuwLqnSRXiiz97o32M7ZY6NRzx",
  "key18": "64GwyUB6MNd6aX26HJUqFQawRkkfCyomDycptutAwzfqG4JLBzfQ1nbG3TFB5BsgeSKYyhJmcz25q4ETnFDEay1v",
  "key19": "5Eh8ZkZTqPh5PLtrJZ878zod4qi9F9tzZWfAcEWjNRRUtnBaEcNRzAtpcb8yEW24CDwub2Ec4rCcCDMveqxGrFGJ",
  "key20": "2e1ywLUqtcyFKkoKNNQBezpuUCdXRp1Ft1Lj53GpoziKPyDVmPosnR8btBPhcAin47hivWer71nUmByiaGMurKcg",
  "key21": "31J2V3hygZmXWAwyC7hUcjvbSu6ftkFj44sQTtCZjF3kFU2zCHYYBiHC2MX5RW7RxVc6yaWRiHSTufZzR4JdowdT",
  "key22": "2419YXQhuYcuVRNGLHwMtUf6ZJqmpa89w1U1o6JMRAJf2uwmBBDqA8kuYyJMGa41ypzfEzx8E9biNrBrS1ujuuBo",
  "key23": "26YpcUQV2cCSQszqJk4p66peakvUxy3QJCPELh4mX1civj4GCvibqYnJrM8a6VoHbUprDxqp7wi9qjxPYVbo3mks",
  "key24": "4G95vzJ29HnHYrWAohetTggZUQhjSFEzUvBX2MK8TxvxWM5D2vCxrYor5UZk7CEScpvLMNRG7LVdL8y8xqfHKHAS",
  "key25": "3Z9dkV7T1bccQieVcQymJVnNnfdedrxf5TmrZNLybDYWmdRhcQWmo2i9YfevjMPm9aMfMysXSaUoNUNeoKmQAnAG",
  "key26": "47MpfMKUuC28jokhNor1qrt7KAwixZCwEvsxsgnAhPpH5FYb5bJ5zJyJHoS8opx6SfPEtLMAZRD5r1JLDonvfUW",
  "key27": "3vNYRjoPEoDY3Bz5qTGYyvRxTzig8zke2DPPr9fYTBR78BJK7oN2EiivcbCs2FUjav23Su32PQPEEbwkgHyqzfoA",
  "key28": "2MqkK4MqUXQkkGbzaHpS7aXFwzUjtSbPcSMdoyyF8kTJ24S2pCd2S4piuQLuwhZb1iBayDV2HAooZkVhzE98X4kD",
  "key29": "3oQFB45qPc5k9KYkkTJh7WnZ4Ecb7hA5wrJ6aadcYQfF6JEuWPRvCbaVhbuF8tUZrCQ716QyCoxJ5em2D4eRppx7",
  "key30": "2R7eRj8GEYyRT64fW4EsvsvQg6tEFESh3NF7VqHAXxfbvNiKzonuM6YKL7wCTewKDg7vRFk6vJ3kn2TAkvZhEYo4",
  "key31": "p5VF3hXQQ2Cq9dmVASXSv7GG5dngQEoTSusd5e5PX1eH7J6FZegARP1nEgEqWkpU3FbuCxvF9LgHrLLp9AhLmVp",
  "key32": "3DjtLNz7fJAsfGHU6MQD4439BTQ28Z3hv9jgDknfzRZ4cacnPUmgKzxUcGG5pubg4tUcY4LhcH1mtQhftJFJGpNv",
  "key33": "tfYhzJM8zCjGFbWV39eTJ97PP6tviw1QMbq6t9jRmUkoSiVeHuc45hCi8mGhhhuSxxMiX3LqCqFoktryaUZyMgS",
  "key34": "4vqzG7zjF3TqrtrujD1ByiwjYxTLMjuLXHjC5arvbTFaaRRK6mx2FUvv741Kkijr78gTdj8mKuGGMycpBrfZEKJK",
  "key35": "4EYBcHuqLu6VYYn9PDn1jpwKSe6Lgh2uZ2Cvn77S66eTo1f7yyUq8VAx8eUtEtCDUhSMus1j9xoxF29VFPjxNMQ6",
  "key36": "4bU9UmudgL5DoBQ4WPcPCFZuC9Uy8jWKKrV58EyhCVZ3NF2mRUdDamnTpVun1nrDgFVkqS1CNqNMRLM5Gma9oEPb",
  "key37": "5tBwiKi5YKuRSXqbRUpo2gwdfUVB3xmWLkpgaXnZPCEtKhwkxfjjH1Z2fNmZ2KBq4xip56b4W4YWs4dPLuRbWknw",
  "key38": "5U5PRPGqRk3a4ByzZoei1qu4CwRwTpacgLmhyx4H4o7MshmCwHh8tEiJmMLvbxNUYcf2JQ1Bbd4wjemSH2cNdQfY",
  "key39": "4F1btaFjJZTCMW9uTh3wjhPoyCDQfS1zhMTSqGW8e6hcCTXSf4eRjbEuYZWeCZjVD1DAuXPb4BHTwedDuzxcyTaB",
  "key40": "3bG6YQtUmwbR1mYx7iquFgyPJDzxq9M5bU2bVLiGDusVJsnnxLCqqkpuUfTUtoo3n5fqF2JmyBmjuPWTiTXsxb4z"
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
