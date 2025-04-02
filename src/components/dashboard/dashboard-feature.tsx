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
    "4D9uzQ4tUdXEm5aVhRNTXdGM9cc6cchrix8FxwtwbMMKMpqv5DAfBJ4gAFATJF24ttYXjffqUYxrxX5WL2obFbgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8E7ZGU6QMuo8oyqU2oMiywknvW7DpSTmvNyec7Jp9eJeZcV4imk4DFNF2VXckuZq9abPkpnpV58VkGcyrfPouF",
  "key1": "2tdMC2HhL7Y7G5yGfMsnbAmvhXiHXLv5dsDhZCS8vEQ9461Dk2tMRKcGP16RXdxnJ98s1H9wxnjxtzAwbQjvUqE9",
  "key2": "4EzXjT1vb7RaE7Ykhiymvt5za1j72V3sTHYMMbTnXWEgHPgkWUhvHvmf34ad76TaPKJuSEy8NnWUvFH1nVLgh4Vr",
  "key3": "2CuBNT7RuRusSkeHdVurUMLYvAoRc1u33HyAabMXReLs6iWYGcPFpuyCpxtDqLM7hEP6ns7LY9grBVHC2HgptVdE",
  "key4": "5N5u2sPd9w24YRhD1JDgq83infdR9kdXVp6vxf5VQFoRRP9wgz9KN1kerD4rn9vb42xov2PRAADYZGGCyP6Pn2cx",
  "key5": "gtXh6xstpikqhjfcD2EQkoeATU46cRHWNbPsG2yyJuX9fsk1aE4KYkdG76C4PT1sgpFD1ddVnP3wM2hdG6RBW2P",
  "key6": "2L5Esv2T1mWdP7wK3nxhAzK56TU66gRatwGrkky271Cw3rcbWd2rquH9D4n35BV4EsorSLHZ2u1LdyZnhuVeEKKQ",
  "key7": "5viztLSZWTHgCbJrBmK5WwctDx96N3eqagmtap7LvdDd7h59atAQe6795FCbZzugniVwLqMYxWbj3ZefkADRtgjy",
  "key8": "4f87Whd8UEiQGiCApaijMhoNkqp3jFxy3yzSNKqNfFP8hdWnod84NFam7Z1nmtc2bF71QMhzEYsqjHrVJ6zFUAkZ",
  "key9": "5BaDThUXFzdHXyZUeTrjkbRhk8AFu6qbZwkxhQgixWj15cKXJjAbsPKtt7xjQW5BpK5C4fZuoUhTzmBSVneiTSB9",
  "key10": "4KHg7neNkeGFm7DXw5HRCPKX8DPHYKa51JbR79vUeVhYkQ33X3NmP9WmJakEXfqBWA7SJkVHY8hPsu6rs7uFaGsR",
  "key11": "2JbDootsNdpU9XPbmt4LcqYJBFzmjLHbfpK5cvk5wmz27YWGkDyZE9BYQ4kE5K35RzPYxBMpjtESABR3FErgYhHt",
  "key12": "5WvCjiXwSPk87W4NJPDSvmYSYhX5bjD7BLwz3Gkn1MBb3JtGmdK3jNLiMVMS36hPNTAVA4cPQxsj8ZaZETDa5YGp",
  "key13": "5rMUFHWmAhhU9KrvNNnBxntbf1NZTcqpofUgzx2WzS33oTyvRS7AwZk8r8G7tQAxCGjHzrP83eKBvas5jqHkSawP",
  "key14": "cC2J2nVQKbhdQMVBr5iEtA9SMK5MJU8WPijwcEN1TSxavdDU48YnFt1JEihUmDezdWdbcaNn52PzE1jBmURBw8f",
  "key15": "2U7UgZG9DQXm6Uvn1GLL27GmFtHBey23bGgawarEHYYHsTYyoqJgpW3pU6f7Jw7HcehF3q1aVEsjDzjwbnJSdK64",
  "key16": "3ii7MngxrXRFeCU6irLwrCKw93TMzj1FHyPQixPjQSp3VkQYJqprkptsCBwAudXHSzt6ypTqgEUzYXf4x1vWoPXv",
  "key17": "67FanHECNyDtsygnGaCXSacBVMo29Jv9GJ76y2dHHhJPZHkY61SzSVjHjk4d4zKg4Hpd2H4iyVPz3fPpHNKr8FGE",
  "key18": "4k3Z1KGFsJaTvUWC4GU85mdWR5XLY9fivcYnNXeYurcv4G8eusB8jsPpqY4nhmwf4g3xCWA946FHbE9t41LGqC24",
  "key19": "PQ9chCuDjsUMEd1Aufq9CDZ5jHx6WR2SWnS7uJ1L3L4z59QFK7CK1sdpP5AjWYTvqFGVEeUvhnEbJ8Bc1xkYodC",
  "key20": "49v8SzaAnwqgNKhw4j9Q2aPWK9bzx8XrQUSJyA6pdvtA8yjg6tEPyPZLWSGTTUwtNSzAwxdSvYssDufbqgGCER2F",
  "key21": "4CcFx95oYKXhiCQUR2qyWxWL5zmLM3BQ6mDqXV44zjanSE7WA8iryC5h4bqaiGY9MgKYyiBuoMokkQyojKJdEcfa",
  "key22": "5aYkuuku59FEfav4edYVU6eqv4hmicAm3gr2QKc71eD2JpzFfLnPj64ff4rRKNhLhH6RGspoXBqj1QdjvimuyqyF",
  "key23": "2Pe3bjtCGtZXEzhFfKMCgoZps1A3MbwXZH8GQWsTahc7Z63As2fDSE9sgJDCDZfi4SVymTn7GQagnE9KsPxyng2y",
  "key24": "5McjtZvEwMpYjHcfZYdJAyMQw2gA8VFuGgYz8pfMD6M43nsfjtSyDBg7mBHSM39vjqcFErKfbSb3JNNFk5gy9bFu",
  "key25": "4bcZoA4N512qx6ydb2yo2aXNPy6XA8NKGAfkTnmohVCGhUgmYxRDzhM62HZuBZDJwwKXxZ8aAEoTvojv38jR2fB",
  "key26": "4377FHP5ws1pbnU8qcSpR6L2nGk1BetxVqK793TUPoRgn73NLG7qptdoWyRTzXNAhLjurRpohVn4FEygtHuMbSWg",
  "key27": "p6QCyG8JeochndB9QZYyMk3s3dRLC4BLVyDEFbJYtGtZDHL8MLU6cKzJHkbAAtwTfAsM6wUDmo4a3tQxDkj32jM",
  "key28": "4DAswSWFfFm1qaNZ1rEYWUJ8Sz2rk6WSzEYsS26JNGMWn1hsGaN7XD1oPmkDhQcB9v4paPPN4SrJ2Bobtbe1BbH",
  "key29": "t3aSm8UsJ5TuM7yywoD2wa1hszB7kZJdSnpTMdN3VEBktxohb1DLtqmx4L2M6j2TERkVvkLd77AXuPDk5Qv9Mqh",
  "key30": "2iTfQXqNePqPxoLEVLA5qLdo2JuruYJ8mELzJpwPPyvNrVW24dwGC2RMwACghpmsXHwrFd5WafPUZzxYBCXrXD1n",
  "key31": "Y8q1Xj8KaKvTFo2u4ZS5HyREfgFbb6CbKL2RU7n5YYYYyg4ThmE2KXXM3nFAKTuUBoCqkEYYFnNZy8czQ3Fhdrp",
  "key32": "53w8P312R2rtve1N57ZC9tKeHQmSgB8RyfK6nndPNxmnbvTC4iN9a4uv3XbZYdu7XD71gkCyCPUYLUc5KZZ63PBh",
  "key33": "4PQPZWvnvue3WYnBgBvQ2MvuuAS89yEQvNgUaMHz2SQwdwHo5z3UXj8wFBadu9v94GU6JTVyR4GZcaZ7jJmWLAhp"
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
