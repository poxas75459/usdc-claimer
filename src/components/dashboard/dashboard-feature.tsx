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
    "jsGH7n97WsGE7NeFsvdwjbjmPY5RkNGS3Qt6J5ovu6zzxnjZr5ZNgqW1sM5aEn17fRs3Z1veqFoKuLqccHqceU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493dDBd2SGpASET2P4SbSLCczsP6StyqzYMYvv6a7by3UEUydNowBmoQKf42NryAkJ7Gun7oR22DkxRtTbE4MFgF",
  "key1": "fpkBcvnYCXAoVHFfCRdRv85cGqhZwpUcSnEc6xNRKYFZGH5WyVf9RX89LNfLFmB3kogBMqiJuPKeXnfGupKbPcg",
  "key2": "4EhGo5h6u2HQht7HQ6JuHX7NBDKFmZn4256EDMkgiCrms9DoghWQBb9ox3Hm8BUvhwCGcQRrH6Su1By4cVrkZjgs",
  "key3": "31Cd8JrjWYqkgzN61TbdSXA7duz8e4zLHVn21Y4EnVfuM1rA5ivXQevbSv9gfqeKNPWwMRS4scALFtSwa62HxbD6",
  "key4": "23UTSL43nhq9tKDQNYrckTK5t3xBrR4uoGvCJFNtzy5LsmfJoEZFWNT5qct3kxpSxxomAJr9NciJi5Awk7qDmYxN",
  "key5": "31m4Fv89F9FntKoSTpC2cUyws3gLE98198jPetiqegNr1PBUzRpFr5LuKk8pSbTG5JVKVyLa8sknd1D3GBygRUgt",
  "key6": "2SXbJRJiqT5nnFV9hzW6SDzR7vVAxzEDf3rGm1aT74vmSW9bdZNYAMJKmQwgyAnRL648DkAWWMhzUTzXtVyZmqZh",
  "key7": "2nUWdTEvibfryKLHh19jzoGwbarub1EH3hud6ZG33q6PHpVEXaQKjSjQr7Co78jPs777uK1Utw8jcnZ8sPV17zVc",
  "key8": "3fQbqSFKiX2kSivEohyLVT94mWV8UxKFKTQy4qMtGzfbCrxfuCNE9tTz2aZbFvhY5fZkBgiTWMX7SDfYs5eStwx7",
  "key9": "2AXd1vmFqd6gL22PRa1CYdLf6M6DfkBRbViC3ienyW73jbAiKd9fCqzbtAvRMb7RZ3ZgVTGfJ3Wzv2a1rvFwhKvj",
  "key10": "34D2RUkjFJ7XeXyrHnkqoiTD37TYhZaN9X7sLh8NRhfj83LTomGfpsbVbvc25kz6JrJmg2nFiQD176iAAZSgWsp8",
  "key11": "26UPLb17WNL52amzCYtSBktRGEwnhsmuyx4EZChDQgyiGjxHShMbaf8ohqVZUPbSfgjxHeacmkNrMuC1oJagJ5PT",
  "key12": "5MaQAkJr8yGcVhJeCrvqof7N9fyVoJtceQfvkRrepjvBotvw4w1hPmi1pdrvuj7bHkeqaK3w3Hpthw8RXq1Lv1Gv",
  "key13": "5zXQXnh3HZ6AHCjnhe8Xo46vjmZZ4Jsx7s33PwdjAj2cbUdU38KTqsKMBKsgXW4pExmujqgXur4RGUMyoat3wLQo",
  "key14": "4QYiLNrd8caznpSjQUhkGgzHyAfqBpDuhWJwttdZ75mrj4ZSRqzkmAP5SUZumKt1jqeeQEDVqLifoRTzrFvvy8SM",
  "key15": "2mUMyRB95w2z4XfdQJwA2qcxysjum23BjqcuzsyaceGLAYSL2AGDiUqzhA3Ja9kzShFJQoo5Dajy1hMGNta49cAV",
  "key16": "5vgtN9JJZ2Ng92dpqC8MPV9i86YcAZ7f4FnLfdA4PiMg28dkN6wXLJF5vmpXPfd4SX85HCtWuuV41nJgVg5kyvoi",
  "key17": "5TU6vDBuSyLBwqmXhsLEm6zGh2JgYfy5sC5BTzY5UebhsTNrTFVNAM3h9j6wBqGdFLf47hk1xmyXgoivpn2pyYvj",
  "key18": "L3EoPHqP1huaxW9LATRys8xtAiBdhrA7DojTCzmGZYcha2P7QVq6JeCqbcyH2SQ1zpHPC7c62BJ7dnb2e9P57sk",
  "key19": "3oqwuPqwXe1uRSsUh7Fd8q56jx7dZP8L4ekpbFr48JkuuvcvmqocaC384DXyQd9429YbXPurkpWQnF2iSUB4Z6Pu",
  "key20": "4FnB8eWsDRUWaNqLotSU21gHDK2bfMhULbRB7wULeXvpVw1Rf7YkEMM2Ueb9XnN2KyRLXvG2rMvqqZcs7UzMbZS1",
  "key21": "3RyGZG2z6sdLq5ZGGshjHBmziaP65tvCjdL5PhLiEZFf7NTTydgAyGvko4hbqi48NA1okVRd9zxEtr1ZiTSMe9od",
  "key22": "4hEPcdgcwiEQt4CjKvfqwyqGDG8yPhCrfhrLvV5FNmCLNsh6ogUxJ2nomxHWLFQUtukWnF5Yv3jjKXfo7HG9CgdF",
  "key23": "tbtFcjBkpxVH4pM9RRqeVysnPoEwqsNAgwTegKkZ24NmCZ8WqDu5HNnHpuBGyqvi9tfaDWk6qihkMsedSChSMLw",
  "key24": "3b4Ab6CLbnVNmTMngGcygikoTH2xMxGp42Awaxc51RJKLATtqzDQMbWwdRapgmHqrmjhJRYobXMpS9kaUye9AkP5",
  "key25": "51dGvamxtcVFCRGeXGYfyVEZWgsTy6sntq36y3Tz4oUfxW8ncfSU5sFp9gd1LNfPQUYRGGdvV9DtW7XFUxvuZCpn",
  "key26": "29SL6USGzdTnJbJAPs6JZVMXDJ7uBmfhfzXvtJvqVwE6qtd3Z7xveUrJuojNArSujfnxYYVj4xT29bJJSyEt7CS4",
  "key27": "2yoMLTfYK5EDRve1xR863ZDcFJPUZhgqivUNVYeDNXUaNpuwEGMAptcn8jjV4Wq1q93BHnTR6bZM1iGdGoHbEtMt",
  "key28": "5K8L1zZFiw9GNNdiejxSjbcZoDKbiHa68GWaNrMHFzVxWs1F2Df6eHnTHLvh9gPE24ecCvo5anyacL4XkProu7sy",
  "key29": "4vnX1mKktvtUBhaoZuNWCryQToDorTEFKR4Z4q3zuRYy7Uh8TDij9Hv7eiznz2UhxAMxJ224ktGeMTgQ5c1a2uaJ",
  "key30": "gBNwGEYaD2zHuFWN6c5NJf8WysNSk2PihxMfSgsMJ85oW5bA2HxPsE2JDj26XrwpurqMrfZo9FUa29dxvGtKxw1",
  "key31": "66CCbGzX4AEL2wJFfdrUDqFiGifn71BTrJsJceEU1YsrhWowzyqLD8mgxagznGLCWSsY5W4QmTToAdoicnisWyCk",
  "key32": "4CyrymqQYB4jynoa5b6kiwjaFSfobhRmAeSDExbguf4n1n8nJjKrLp4qjb882rfurUJdVK2BJm3c2QqVvxup4xaD",
  "key33": "2YpXDtcpZMwAmAt38FYioYGfbnt8uqZ3WW1BxRahHcuSafiDnDQNSzzHwZgdrNqbgMSFfYQAVevP7nd81Mwqg19N",
  "key34": "3Qw52qU1AsvbHsoS9BZHxgSBcHnU4LLrMrdtwmu8X4GDbb6F928dXGQqJggjC2PbZY3QNvoGtkhH9oxyd8CskxVA",
  "key35": "3BmYHLzM4qr4JE6hVqv7w3QCE1z9erPZ5KTVYXWtbLMw1uSYGS3WCiZeTc8LRSNKveGNfyojxHcSUjCeXkHmWXLb",
  "key36": "5uXySyXBGdmN3VcwJdj57r1krb6MHvTctMBpa2fZbDKVj75edKXS36b17ZEWDCG6am8zQBADjrW5XAedL5FDD1UH",
  "key37": "5FDG6Pd5H3ZE6DTbF35fKawo62F1vduvQX2aGHN83WuyiL2XZT9M6xFiRarJrZ9BbKb44HpUVk9Sj3z5Dkxvmoxh",
  "key38": "5oeUcC9uM4t5JVBhYNAoVKt3Y762tpitXKVYzVjieYnFW75NuT8f8j6mwLRUMP645JNKBxgyRbaJKHjQKGcUMSQC",
  "key39": "5DK4FzNKjoa6JW2HZF1ABKPhSoa6ti5g9CuaWRV4kQuqfTpnDkhEcZHkKq5ZeSkMxjv2gudZXBNw3GFMF7FxC6wE",
  "key40": "vxhuTdufPGZBmNtm2djtMU1CTo1NnwW3W6yj7apqjxusKBTZJybriynsgyKNJNBHJTQXmUWosEWxgeDHu6wBieR",
  "key41": "2zowp6w5nYuQ6KP7M9rrKt8duk5ZeLtjRLTimuCvEDgAKyv2tW6PMg1CZXNFuFwG8ZpYcPbybkbzo9yPFRYQSNDj",
  "key42": "4bQNLa5n1p5ExCZZfRTTsLysDXiPjuREs7ALmXiWBWTXfyFus41mn4eaQwkym43cUby15v3yNBaTn1w8BNZTWiah",
  "key43": "mTQ4mPUWG3BLMgKVueU13mPA8dWjvqd9tnGMuLRLVCu5uvGTc9BZE1K5T1obyUihpamSnfMnrbhorAjH9FJfyRa",
  "key44": "aD7mtQoMr94Bs37ce9Egw4RurmDyTVkacxPEt1eqeoAY4QWRXyUZ8xdBxhf3B9y47hUgcFRM9CMeWFsey2h3Lqs",
  "key45": "3evF7QpAZUHTD7qQrftzSX3rjtx7EXue3iCo9tBknuG721mox3BynhuvuNXP4HzKobZYxu2sZPEuuC4QU3rC9hX4",
  "key46": "4LnHogkoCi9NyfBxdXzuo3y4JAe8MdQxkKEqbLYTAAkgKk4Tu4Lx5BR2dooKX5Pt5sA8zYLt6d9gLFF1LPs6VteH",
  "key47": "2RLVWe7XkfxqkiT41LMnbEGFcGP7Bf16Akqncz8G9gHoCYHJ9jqkXBfQZsNVSEcKbe5HdBdpb91nveKHNrsUHWT6"
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
