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
    "2DLZvXp6AGX9uQtATrSnE9BMUrQs5JjngRmgyb7SCD9vtR9gTmBR55qvPVr3jtvCYEtXbRXtY6VhBXVEujqDzYtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bx1TsiwDXfsgoAjcsx3cNo2cAEhoCqpB5XgqoffKgZYD9eEu4KhxSgQfqgL8N2Xmm3L8FNWL1ZsZYdd5Ay8PMya",
  "key1": "5VYEEhbQ3fmKsQMaVTW1ZEqbjtxcXMBSGN2T5Yfcx4EeWmUfH5RpcNmgvaE3wH5Mu5Fp3ScgBFDf481kfb3vz1cx",
  "key2": "4LPDqBLn8CedTR2hKKxQpKFk3ADNXbTzLywGkRr6ZMuwrcaT6ibDJ7XzSszsiryfdjHpC3Hfs4WUUPpuTwLVTrph",
  "key3": "4vUCFh62R45ej9WJtuTaThh5jSdKZm77KnpTK7Zodt79WmS2VNSpq6dRedErrjjPUNnk5JgcqCR75Qm7WX94MgMb",
  "key4": "58JUAgixPSuA6Mma6cNDQHE5Byg7bwjBeSfLBiPeEtGGjNAsXd5fTJamxx8fYuqvDg1dSB6jKJbic7JJgXrPEz8g",
  "key5": "65EtQZ54axpe8iQ8BZMHwrXaJ4fkxjUvLNoaZWw26bXfMjfrREdGYrQ5VW4qUho6vB4n7GAUHptDHxdfQFoHMzX2",
  "key6": "G5Ke1v7oyus4gPwR9teQRwDuvAygPK5HxynU2graqFLSBdS6owNtPMXmzsVEJTgMMbZHvDZh3Ui9QKtMWc5g3sN",
  "key7": "2A4J3PwA3C5hD7ELaXXVtoF2wLZSyH4dzZZVSLUTjztDJq7WHYMsWZci2Wwhm2H6NScuj1seMQXUsuqzQVkD5qmy",
  "key8": "4frMSN7GTbyvAnPxQRxg3JuSMts1euxkGhUQaxtBN82XhvvjR3sEqMgsfVBPC6tghiiXGhffMr1PfFEXgoPjJsr9",
  "key9": "GxogE7E2WHacL968P7qtxRSaQi8AhLoHVvo29raWhk21vDoB42QMSqLWSUvgP2fbPdLBKnZxgpnc1kz6cKvgDBP",
  "key10": "5fDz2g2DhotB5u3tKBL9sz2UsFFFTb89ao1GWKKa9BSsDfzXxVwXW1hS9u8No3esARQrkxLb8o96tcMLSRo7qkbz",
  "key11": "54LzW4FDFtkWF7u2tKKPZMBn8Ski3UbQch8CsH43KX5bZHAAv59k1nkV7uuMgzH9FK4TSPTX9QGkHk3icA9FJx1B",
  "key12": "5D3DQqBTB8UHnSpL6syUawBw2Cs4jsMSuPMXxsfVGnQtK5eWSSPmLwgiyM4wxNaY1oZf1yKzMx3T2wKX7XGqmSsd",
  "key13": "5ykmpP2bf9puxZgmJMcJy1K6dDLkcEnAXQWHuhWSgu5cLHdU2LEmjXSnzXusRhNR39E91KKFE1seAigvtpGYbths",
  "key14": "BZJWa6BazJiR11w2v74qZLjJbbgXjFmghmH8TwbsmPmojXjNJswBDmeBuTjiFa8wJdYFgbkqbmRadLqwhb6JV7T",
  "key15": "64UnbDTeXz2kBwxdb1W1oJEixLndy1pJquQztGUnedAsDRMK61Fxw9BCsp1jTffTJKPMge2Avydfbzzx5XpXM8Y",
  "key16": "67XjpG2wmR1VKV6fXAs9GGHJNKWuh45nPUN5fA8gMZNodXSdwgdn5daSwxhs1yngJwAmi3U5623ik8W6HGm9FaHn",
  "key17": "5LD3EhD6TE1rh1QDmcy2tgcaWX8vgy2kidxuzThXoVvx1oxWGAg7KU5it3WNwCdjsPdFoh7ry1QJH8tevyJTPdGm",
  "key18": "2nu9ocV6uNdheVGYqY8SzU8ZiJFYUndBkAmBZxobJvKxmfbuiBcJTrNGzsuzBMTdzrFFKHNoAWtUP7diDLkS8ATH",
  "key19": "5iPcc2CeveXwDT5m9TA6hzeWBzhPkEmEzU7UKSc9hCA2VZ7Qp3ky2MnYtyf5n1BTaNxBf1yb55tAUsqMpdGcAJZK",
  "key20": "4sEirTzcad5QrSxSQNCHu5ygPYXa84mDHqQsm13wyjk698vFNZcuMwNg6YnT2ZkrszB3d9A1Ku36iVn5ZEM4ewYq",
  "key21": "2vrYqxavgxj1iQDwsuwXbW6zjMX7vRoU2mFQvCqLix4fW6GVfG1Mo4RBg8Mep5hFSRjmriTcsZM2kQnVBmEqDmgq",
  "key22": "5uyfpBf9o2dYwohnysi6LfrTxuJL4v7wpByAg1WvXSK85QsaSh6DXp89darcK9RgZp3A4wYxhKr797rS1KTyK2Fi",
  "key23": "45Rk2DcbooG7YsHgi3zhGw7Yo1i8vAEqHi3B5DaQrLitki8zSdP564VDLjv6tQm5qPiex4v8GdV7FyWyD6Kwdb14",
  "key24": "jW6wNuh14wGVDznj7Zh65JKPNYS6tKxxP8kE28GGaWQznpjHRSKS7cSaEzWYga3YyMZNTbQ5aHuX6eHZBhLwmUD",
  "key25": "4EzDPy5dwXv8hSas6TsJxufN72vfrHhR8XTjEi1WiLmXXeRpVt5cCeRMhhTjcCHqzyNLcKEXgr9UL4XMN9XmYBvZ",
  "key26": "4Q4mmvJ1vu1rj4TQbH8g1zb7D6baSeFJGGsQmw4HmEz3SiBpLvhvzvNRSkSYMf32dHmSfe4bwogmvs7E1irAZdtc",
  "key27": "rDRLVkbNBo4CaBYoaqY7jGnH7Kub9YPAKzxgPLMZSVtUmBAkZCZDLuSbDSU97TG82g5PBk5N7m3tQtpCemLsEdU",
  "key28": "4H7z81MpQEZc6TzcfPvFT7pgjanLovfJpoXpuMKQz5daPgUJPA7LGZhi8mEqsZgmrupwQeKgxUqqQQbY7ZsFCUEp",
  "key29": "4t1H9Y89zjCHf5Kvz8n1FsT6NGPkygw9veZpRCVgaLjhJm16JySgjqTzD1jqZjpgafngusF1UgDHNkmEZe4GSSYF",
  "key30": "5ExszaxzKTuWnRXvLJ2L15vgrqsDQRkpG6emCEwRcRwxe2mwoHWq9APLZoxPQNLpg6ToTeeCycvymrHZWrzyqQ7i",
  "key31": "4NUwW7kkqndaXxDxK5PQWyw1KsyTAZJnyh6Hpm1DSHSCLrPGehV18wbQSSmGzSD6Ce2FrYNWsK2V8bGQpufKYJqa",
  "key32": "37RpNBzMy3ZDeN5Pgp36i91evRvjBnyq7FUcUcPmdAuQDEWXcwjW55qBBTecZfCKbec15MLz1dCocf4ZzcyikMpj",
  "key33": "4zk1F69eS9a7vYYf2GiQiha8G3xrZEb2yeTLeUufWnWaWSDEWHwYL8hCCDxRv1iXgU9uf8eU6JQ8uTKTmgKriTnB"
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
