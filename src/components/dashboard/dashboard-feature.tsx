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
    "5WSWtheu9cau58q5iEvn2Eoxmmv5JGVcDgiJm55K1Ncw4WG8P91sTehxyxxiRQ6td66J7XfZkBAPLjDYie4S38iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAbC5fFE1AMjFTU9Tk776Cibuq64XYA4AbbrBNmYKUt3HzctPomx2qiJhEzbe5RLkp9yJCBvA2gTsPcsuuiAE5D",
  "key1": "XPVrMzSyvWUd8GPmbuxZp67a84nr9h5oZ1M14QCKeF47v1cXrsFKuGrRr7P4opWEs3JciGdNSKcJnz87Vj2j6W3",
  "key2": "32Eb7dcF1k5zVXeqxsXhqi7bpNQMKJ8iicURJFqNg2P9gGipyWCumzjCtBw9YXvwQ4Asik4iRULj5C4QkbvvWVSy",
  "key3": "TADNc2nog7U4yBWjJ8HapFniKGfbNRTYgyEKvWkmCrAHjCQrfvu7EC1UkqfKHFQwpW91ZFuaKkSDVrCd3bx1oxP",
  "key4": "eANrGJHH3CMNXd9RAgxR4AQUKwowsAmpqeAB2z3iquGCF7R8sVmU3LXkFvGjENpdHw6FyQy7nB9B91XzpPzTs9b",
  "key5": "5fENBVeHTQ8ZBCdeXeWioWvtTNrERkvsnCrwU5Q3otpFNgxXrj2TecvBFLGGL95TF4gmtuXtZAjgnKHxgz4LLyQH",
  "key6": "NPSRz4LTjXRwpeo4oS98xEaCWneSC8Bf5roGKyDNXaBUU6cF2VPqN7g9wyfbTb7zeUcotwKDkAHn8PAS7kfZVhg",
  "key7": "5RKNPBvoBBLh1YYro6VWXPXorY9EU53YoCVHub4AprcU7E8Xygw4Xh7gDAi8gRhTpR2yhZrNz9i6eCQtF9yoUS3k",
  "key8": "47EvaqnDdZu2E5KWBkvvRQTHz3dp8h6spUuGBmCyWHwdZFErd6ZJs8uuttjde4VBbbqyDS47S3Ug3Krh7bYDgGLp",
  "key9": "X9x7bX2VkEDKvqj8vu4Q13YHA2VbZPFYm7yczrG2xQ22BmkSsLJfJcUPMvaDQHmMoPwzcQNaiEC5bjjzCn66w4n",
  "key10": "2JEU84CcafUcv9rz1ajvTDiun3cWSVQgksyGidMJE6bpPZ1NEzyNF2FQP77CxF1Mfw8HT8ety7GtdTGr2GUd58a3",
  "key11": "4Ter4fAWzjCfUCtMBTgqpuR3ajxHyACYCMbzwFHwA6RbgGSik65wkb3Jca99ERtcC5FX3ZbrjH6eVyyXxH9irAbV",
  "key12": "3VPnUTTqpnNkGUnycqA3wXf8diMpFrakHgeowwq4zrmoURkxBZvK6b6jaL2JttASqq5TEyaCsNaPbTdCwnTyj51T",
  "key13": "2wtH3UQqWezSJzRPPTwr4ZMFtNwNsenW5XoKwoudepGE1sbLPiQuG5AW1CVcb384xrQ5AhuYjikgzKc2ym4za9Pu",
  "key14": "2LJLQxZVdsvqDZkYj5GfxakRJMajazHNspz8pAD1jx3Do1eSPsHnAKMAmCMFSrfWHuu3PYn1atfhCgTR63er9UGh",
  "key15": "2ABjVqbfBpm3KvtQDcVxb8dHLwp6BMwNSVFAMvJ5W3JGivqwiq7ZiBPatex57z4rJuzKQPY4y7Gd5pSraW33D7b4",
  "key16": "oiZTp6GAy6WcyDpfPj1WNeoyBACFBhnb7WCKBz3czNnDsCwiwFxDLBCqc78i3GfMCdQXvPmchxg8tTfboyvAFkP",
  "key17": "fzWCHgA7wMYM6sd69s3oqyyySthP8MDhTECoZ3pBeLc27Ebf2ZfP7yLoscLnUxuoEDkXNWgq1AuwYLb2SMkgBCa",
  "key18": "5S9KRa1drT6EKer72VJerZHnhvXZtZcf1YTdWQT5TnbsDHAhKA2RPkyJKhG99fepDtCDQecRJXg7U94nDSZ55ssq",
  "key19": "27xcnyNeyVvbEtjNQ8xpUoWBc81u3AmU4474F4tKwfP3jfLf8kyB9Sfqndev71NUegiTdAHotTViPnuXJmt3ZpAV",
  "key20": "5mFKURzsW6v77qDAEgGTKkfK1xoVYqJBvHikizcpQmvAk2QoDExs8WssCTT3M8SAPgkMyPnBwGnFKugPPXci94KP",
  "key21": "3449JJTMdCiAtNeVS8FEG9BcEZMYXNbjqeRBuRV4Jt9VHuEUM7jXDzccJc6TFH1BE6eZARSSKFnnfd8Ty3LFPcss",
  "key22": "7GrQDAQpA3wHtc1XKLmHwj12ydJHreewPetLqzfsREp64jvB2PFRLSXb9EL7U41usdcmqNnxQZN2cQKoMyWqB2R",
  "key23": "2RvPKzeKZurwkysZ3MUhkkMrfBKCZp16nuzJKnEjQcpowpbMyW9CZjbtposMFNsNu26FRTCxs9fwXRGL1P9LmgwX",
  "key24": "3SLxhYyxC1Yod5KFZYwGxkU1uDevydXuDwvsQprdLqpNHZ9nTyndpt1xkDpZYNY3xDhFHJpDRRyBqJkP8NSV5HUb",
  "key25": "2dwEgRJBT2zjGE7VCNM6JDBqZFfdLQGABoCccJ38syBNCSjNEeHZY8DdaGDEHYQb2fmSyu5cagASyJ3w5aXAp2mo",
  "key26": "54Wk4fR1qV7uZ18vP94KN2xjoDtMzxqm5K4sfqXzQ6uPo79ng67Rc3efaMdDVT2bc3fNeTTX3w4u3vZsfXP9gEtE",
  "key27": "5EBN4WWx3bi24ZnYrQpZx5D411vcbKMr12vYQZKSa6KZgq25Kx2qYxhbexowQPGzpoN6JvxqbDCo4A78dkxdHWAH",
  "key28": "4EjqbPCcg7eW86Qj57zcxMroDEAuxnD2zTRvrFyT48Df2tudsYq93kLr4Q4f3otKLwMqj1s9ymgsP6zLypSyc5Gp",
  "key29": "3YUErM2e6eddXg9vppZWhegsvEvj7jgkRop55XyJEKjwmK2txK6Pyvy4vX99DtgPRCyBkxzthcwkYbHNmBHYhYVm",
  "key30": "NLGdFZDsGGHg69WJpa6fHiioGo5hH5gg5oEG5gjoJgJG8Jx321LMWH53JgMAD4LvWyRFNC5JbNcGMjsYzPxeiwn",
  "key31": "4irexJkVmvRx5sSFwihNPVJi29S1M9StQpM3S37e7zePhcfgpMbf98mnXUsFpcnrEaiKp5s4D8M5TMWrMpqeKKcY",
  "key32": "3VACumD7iRYbnS4HQVZRYrLUbm8ETE59Lo1i6h1b7KprJ6qajR8yoASQBUezR3D4FLy2riBM7C52T2aWbS69jMBQ",
  "key33": "3ryFsyhT8HqVH3aXPzari7Em5KnTKCU7ZzyzBrPwnukQQjdw4YtX7GBbmkLkjUz3nFNAdGMu6NmXBaiwMXefpkcD",
  "key34": "3KJXd5KvqZgERjUFqLhFiobauuCgUD8KJ4k3XLE4Xih2fL1w1gEDw17d8oXjLv4XdquVVuJwJCXmRRjMn48PjfJF"
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
