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
    "5Cvvtcnp2JM4SkqMHA1q2vrGfotE6Mz2gJAnUSCcBNkRuF7pHjhjStpJRAr4puFuC23bPUWQP2X2iwZ2N8qUZhqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aaobVn3vgN6qhqvSxzVwN2ks6FdjRMipP6C2yfeT5BMAPRBYYJktsBznVvTHVzin6ce62HWx1Eq4BUMUZ2TC549",
  "key1": "3PfussXVx1Vu2dok4xYPsvpZF2AKy6QQqZUZWcQzdmUgCtXawY1MZSTTrQ9ihKn126LVdD6iukeLTc8Scqtueguk",
  "key2": "2vwD3BgDpK9NHpE1JGMfmkW4mzCAZn54Cz4wtyKaJCjgyr5QFsG1WvSzRhVK2d712iRQS7Ua8U1mSmL23Kcny2dv",
  "key3": "5JYhankc4EP38ivEU2XXrW4V4iFDkjEfzoQYcNyymeqzpAVPMANrquXhr1mwBZbr2ECgnWdDDbpMgULejisFW6Mz",
  "key4": "36BoJ1yKoNzJTnkBFHgZe9t7W8n2ewzgertb8uppZmWvB5efonGUFQCyn2AhnLHFe7SYn6mvQg2swHjcMjBiXL7b",
  "key5": "486n21A9Udid2ERGVBRFmokqACGjDs5Cu8MpyqbWEGsXFZZE4e1Zsc8ekc4xGzm2HRJnp5rdKgD28GT4CvLXHyQH",
  "key6": "5oLNCXmadepr9vR1c9zppPXUh6fk65jcP1JrLWjinFBUYhCB7pZmGw2JRNaUGoSUWX1ycrzUMNa4uw8YUv7nFqPr",
  "key7": "57i4uCqTGtHqvQhrKfpqceVZ3vsmYPRJMkFP4YmAx3Zergagcx3ucd8jhTZUU5ZVuGNrAYMM9fyzPpYBd2HHjs92",
  "key8": "2N5o2wcGyD36Mu1fwHCrza4qYeLE8JK2ak1PqqHseVL9NtL5VF2zCHLCcXcG4XYMfeVA6ur6AWYWyrC6RR3CzB1f",
  "key9": "4HYx5RHiyU6KZLfvEV3FxLN9htHDJ2FbT4ayL3zVZWc6521tY67hPT1i4awwGuhqbTv9VXyoSi31AgXvNaYddn3L",
  "key10": "5SFRyUTzbcLkpGSscfgGS9gdPvG49GXjmkFrb71xrcRSWFbz5775C1LzW1sQbqNFmuUwsyEYffCwHb1b21TA1A5X",
  "key11": "3dNU5g579mrBzsBdRamyMv5bGwhdyhBeNpsFnoaMP3rg39FwkdxTbqcpVUUq8jch8m7WHvdjKzEiPKaygoEMmyyj",
  "key12": "48a8co3wHa9aHr1kNKDJA36JkpHuSfWudVAGyxdfFEC63r6x7UkmykT1CMre7sKbuYffuDDWiMaUCkruwGGKoNEf",
  "key13": "d4en1ivinXmALVP3TmM59Dj4tBMSoFf4f5LQn7QyEbUHJA4ZcDwvAghnSXXxofVtmexUtm1d77Bf5ygbqiLZvYw",
  "key14": "3Vz95oyBsHZY3aDZvpVLHegH9XdYucRxjs1yrKwJeYUVUePrNzi3FdstpgJEkLm3mx1v1kfQoYj7n29Y3aWZ4RhF",
  "key15": "i4BsF23nevk2tFystkJDwxkWrVENkA96Ft3wSfcMjPQA95RPYXExpeARHEEwSLGvYEeci89NXv57uAd714LzS69",
  "key16": "zhuDzCKpxLVU9YnzpTxo7MJ1Bs8ymLCyNhPcfv8rCN4mC9kYBs8ZsGgKxFVsJa7fmrgcCmG76Zx2Q24zcVRESuG",
  "key17": "3R1RXCYaAcEsWb3YCQpnuQwMdhYgw7YshRFqoDowwJKkaEk4ACZyaesTdg8iwXoWnGDWdKg5AGqntyY7Lhg9d86Q",
  "key18": "dWpkBbeN7TMenRmUfdK15fr4JPoVyFHcxABA8Qc1KojtWMC4Kf3FkB6TBP5bKjxPvqxKA7zcTR96NuqqYoCWdT6",
  "key19": "2vG77gFCm3tY5YiCPPp4mHoV9offryWNBFS3uSLCrkK3wmmzw5xBEA7dp4ihsDFdPstLC3FZSbWxkHfUh4U2NMRn",
  "key20": "2H6rgFUfnWwPyVaT3VwTQmXcSAthPfdhL9u7wtrt6NG57AD5yuJVAj2ikeobhN8kBXtbKKYy7F2R7gJ4AkoxgD3R",
  "key21": "yD3HHnE5SjW4dnwhmwW7ETEhTKjrN4iWseggKNdUYW9ruRQb7tfyuSLkZ7opmRoYJ8HyiDjvpWDvokJveHkxG5g",
  "key22": "5JXo78wefNxnpwgUqQGBBFf2LE5KhWUy5PQwHh9kaizJHwbLkacra4YTjCWqkT72gk4mvvdmuDrF1gapYuS9tLDs",
  "key23": "5tSUWA8x3Tt4p1rQxdfBVJhLVvsb54ptQviaknpQRUcW7QjwwmU6eYHFpZs97Nx5vQF3e6d6JsoJMPhWTX69KtVV",
  "key24": "4UKzwTbGjKpZQVYZo1s7Xuvr4UPeQk6JZPSikZrjKs6NmoypAomMY82NhzVG6JMshRc49ytZXkUvo8jhQh8scU18",
  "key25": "55E5W9ggM1scHDyVixeg94aUhd6o4yXP9D4uKGMAFbAw2gDbHgY5gyiBDzdcTCiPMGTLXSNdQnYVzc9Frvz9oxgy",
  "key26": "3e8P3HmnKfuoWb15TKTMdcMQ4L8kdvByyAUGew4jGs3AgpdVkgMDZEtFVan7h2pYAL3ekdMyTBGZFsnb1piQCDZQ",
  "key27": "44D7PLk5kmTKMKoijWfMJKauuaSHZY345bvJgwaNi2VdqdwPE3SbnY3s2mSTwTkawRJCDjvF6LHTnnFe8AUruVzN",
  "key28": "gWFMBguWrYAEXA5nmrhKWwj8WxnsbQbCf5suRKepjEgCeEpbXdm5kDZEWBMyTeBsGYUrubVYW2LGMqpb7YUWsaN",
  "key29": "JT7QVFcq6KGAnvEVhAL8KSLrgXYkiJdCcKecbpDzsA9JSgXqwLQMMDUbaSUos1QCws5gQWFBsFqQNmCr9kLxzfo",
  "key30": "kuQDfebFXBnqq9eRwofZUuWnVcWmkjE1hpUjKjFQbQpAkatUfVRKJANMQoySZ6uWST9r7vx6WB8meSuKjWEnVVZ",
  "key31": "5hmt4zdf8XYZEzhEPTUrv1WmBQZ9MVaMZnapGqEZv4WFHSxXCtChQ8r8w3XuJ74raJEC8bPiKYF5FFoSnNYi2KRp",
  "key32": "4JvxpZ9LHQrCgfVZ2qvryDevcQYxs5S8SarxLYPSyiJ3L9psHwR4UC9JTQp1gp2zavwWpBZ28vo5X34xhK9dChav",
  "key33": "4kVaKEDvSYs9ERC6D8wYfMZdgDTrJ9tX76wD3stU2uGVmNXEfAq5y3MQm5paYTf6jNq13BZNpVyqkcYSzTiZzkk1",
  "key34": "5gnUv4zr1iHGr9TikH4MAaYhvRKbd3W9tnZsHPgFUNGgseUUurBCS7fr6uY33CsraZs4hDtTfyC1fg4p6XTYuU7W",
  "key35": "YtFcXD3hDSPi7YFjoukLkMEqNcaKKqsBQSoEZ3hSghEsGzRGTJ38ktrbSetiEvscrMqeU5EXZi8jz33URDkLcF2"
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
