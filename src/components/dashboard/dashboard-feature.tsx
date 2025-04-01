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
    "2h5gQzs4XqKqc1vNd5N4Q8a3nRST2S5KuTMB2WK3QE7Fi5jUqPEhcqGMGWJmWCbkjG5E62vDezi4xDWwdLP5HNE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAaQBdpviB719NuVJ5jmSr3YqTBNB3pVkfnnUyfWwK29no36uGMPzBmWtQdjJx4S3wQZx2XPhQSRunnfdQ3jLSU",
  "key1": "4fDQc7jKBNcgXWUNiVjHqiEMeXjgQor1BtusUCHEGGynazYPKmFLE7MYdCAgjJFFwHEH1ZVhB1M4jtLLAFj3uRTY",
  "key2": "2WeHqJvt9VSiPpJJZdEk7FWLJ84sWeZQgm5kemT8nHjk63CHx2m5KXngwrfCP3NgGzLeSEFLEkMDYNYGFN1HzgUK",
  "key3": "4auPT2vAQQvE7vGZm1g3VcHTLFTyLA2bqdWttpBYbgGvQYUfphE2azaY6MRt5mNjtT7VvhSZzxXtbGKwB3458etH",
  "key4": "4XMtwNBMueS34bgEW71NEadrbPjPepwCPrsJe5aWDtYkd1GN1s3RLdFdifCxtnLnJzZ9UqtwHwHBxeZ7YN4kHppJ",
  "key5": "3Z24pSXdfLfVFy3vqUT3YweL5yAZc4dpVSgaWXAUFXzQPedzfGB3FAjUnshdUjTmedsrkDKcreGBHP4M1y1QPy6p",
  "key6": "5c8uwa8JmuokqkG1dDSjvRLC6NcXikCnEQLRZxnXP9qWKMNqUqNskgJgufRsQo1WM8Ym5p3wLwGBHjvMmiepGZXr",
  "key7": "4tZhKmzdhcAcGSQS69smCjeyykhR3m5WEqnCx9GSGo9iBwQP3tBYJpkEL54wzkctGsz6fJjnt2fi2fsMErmt7naq",
  "key8": "63oY15m6RJ1YFUshUaNGvwz5FuYJNBGNfZgVLaZKZpW6BfvGxbRgNz22FZTjGBYjoX8HZaUGpLMohBA4mXYuQTCx",
  "key9": "2uhBiZ1QUd2hnLKH7TfvzfzwoD4DeA9oJxAetAhRAzvAfMzx4dJPddXsctzGcK5cWmCZv5jHcTVXUaFcmCYkYxC",
  "key10": "5B6tvC887fnmJEa3fSnGMrNTCC5oHupBpv2FjbjAmP3zD6zE4FJ6z4YS9NtXVU7MV8vhDt1ajxwuWEmaKrEMAivC",
  "key11": "5rZr9qzfrDGqjEDYJ37vkMS8ehzuYGC4yBTuPiV9kz8v47UJMaPGpJbNVjwgkL4uSjGb2CMXhnHFmXAqhYVYi3Cc",
  "key12": "5wHZagCh5ziNK9ZqWNYRYWFMkJKZW1TewAnJjuEo2sPgcqKoYUJRi48veqqHb3AdhUkhNkHXZyt9pgxkXZMhi3TB",
  "key13": "5zhz3J8jXMHTsUNa2sukxhDDwbMB8Sn7LmeBiBFEhVTqZHawWDejQNq1XURFhGJz3qPv83KRFzKZZe5mL9cxahXc",
  "key14": "4yzwhUBFcQwe7SGiTE63grEoktQSzRqsCLzVxts6aptx4AsEMx6yjWeG1Aabr8pDCoU2qC6JySy2YM1mWBcqCUau",
  "key15": "3WL6T5zqEc6LEVMmoraZWQDWvn8MfG8r2nYxojz9TFy4i1tAdLTZiHHNnzs8bELBSGPXuTKpD4V1ZpyJKJpyJAmv",
  "key16": "36K2YTNkFrXTKQZiB44PwGNXB9AhFvgqeQPM6uPMn49ZriwnKpJDwWFFGJsoEHFiUaxc9eSjPf5dyN2Txnnze9tL",
  "key17": "2tbKBtdAa3ZjRRg2QecyRJxmTcGV66wLvKtvLFh9ekPYqyF6mB5Jv9MQAeDnKJHtz6THiSF3u5fU2pYcMywNLQN9",
  "key18": "3t4bg3Zm5XTHasJkr7y4RoLUzXq2sUYkpjquuER74dhqy9C5auocyDSoLkoTP2B1vTEy6i8AEx42f53Q4WymdBKF",
  "key19": "2aM2eeLKqcWohnRH8q99JrXwMEnwuqgJLuBwegiLaC9SvzNNDFyWfGn7a3Mho32Y6QBotWLbTr2zk6xURTTtjCnj",
  "key20": "3uR78NdKkyMdDBKhYLdaJhonhKXarWGu2SmP1chef2BhUaCU6TZBJjZnG1FqUwKu4fZtK2B6dWmBArx4bsFowAkn",
  "key21": "2sRsoGpaZQSwuQ2rAKgSCKxHm585w2JYNkpg1sDBKzARpSBTdAxQ4PQ45CHRvjn9psWAxdfQDmhq11XZWMUKXfg2",
  "key22": "2UMbpWV4NWHJiFUgycBKu4YVXLoYPJc2MF42ya4NNQVH2Gvp7TKmFrrNRXiyNtSCBfbh218fMmxejk8aHHAvZf34",
  "key23": "5ZYLYADZCgkjwQCSbJ1xM5ZAP21tudxqMRdk9PeAvCgWBiY6diw2aLq6B5nQ2ps3D61irmxRbGWWtVbYeVM595Kq",
  "key24": "55gZNNuDXUQ3RQL1FkX52t9WrcBTxh5pNMvfWiYb5D6SuMaxCJekrkkUsJ1tzuB3yAGc79rJoCyfnKyayXw831JX",
  "key25": "2Yd3GoCvz43MCiub6LLBc3C56gTLvhiMSCipekN9TeYP4ihQTpez3U48i1C1ZLeQFfKM475uxF1r9QrKbzwGdyhR",
  "key26": "3B5YdSc8TBXePyqjBtjnYK7hTeuhbiYs2wWVD5GC2zqHYidEbF5yJRkKZuNWs2Nm3pz3KBEtxZKjxo1wvUbvqw1M",
  "key27": "gq8e5w3aLw5gp4TL29CM89zoCoBGRdWPpr885ZjupSXTWUF7SgkCTTFbpFXu23gxwXwitsm8pPMQ7HfpMtBSp8k",
  "key28": "BzvmQcCMGgvUxVvPdYKrymdteZBvEoXJPDjPoiUXe8W6P4EFWCtuXuerZyQXU1G1gyZPLAuyiwAJKDAYzU5iD5D",
  "key29": "3MKr3JCsxwuXR8651i5cEiH6isPXpGEuPPZer2phbuFLV7Vptw61bBZ687Ux4gR2QcVc6ut9CoMPMCM4hRBQHpbb",
  "key30": "3FXUxdL3yjjooP8rkC57HapBMqocNWiX2NuJbPjHoNbpNNz7Cf5yz5hMmetg3AWAMmVwcPUe4HCckTpwn4tte7dw",
  "key31": "3VPCpe2NUHmFqqZacL8HXcb7oJLFGKwnDSsSuCrUEPqpVJzp4jP2uPivcyuBpTKiVHyM7A9tsQVjtmUZvpPnM6fH",
  "key32": "3hJwQnVNPgeNwRsTnpusDCxkK96An7oopZBG6R12eX1a1VtdkqG5Yu1vkY16bPxL6QAZEJjPc7ZwjRWpndBWMzmK",
  "key33": "A8X1MnkuzgAnkkHRqNzLdvrB8UknxgvKgyBpVnKYSh8cN2E28Y8MBPTEG4GknJeUhqn34asHG6dePXS5noGP73W",
  "key34": "4HT2v8ZZ4xSDZwFBT5hPYNsTmCoaGTkU6AvyyogH1z2G6Z1MvTQktFeaPdFWuUh4SmVBAWhaKxdvaq6aQga48JbW",
  "key35": "2cKVr5wPzer8nAwwDzTpCt6jJXJAUVpZgUgMcX9DVXp9qaZxXXdJFvKYkXeGmfeHXE9vLCAtenvA7GnGxDLdecb8",
  "key36": "587LYJzt6nTCVDkXAW87DiFEzsAt14iz1RWEKW8Z592sXWQKSE8Sv543z1J2RG3D5qG5t2SxSQ64zZWresfisqjH",
  "key37": "5XveNTkuDtoBsBxhCfPF9p46fxfAsMpm3Cr6XdrxFdQnB1HXuEovDZDkwuFiuXxehqZVsDAKZ6y3zCL2vqbEBed2",
  "key38": "4z7mDBeEHyhfq6zKJxuQXTnognwCEKA3iiB29p7tV5foQZPVkryhqpUUVdkF4HfG2ugrb2maeJYHFD7xGdVFTndN",
  "key39": "5fgH9Q3FNuwS5cswnGzk76zauKFTtUC6CJ8XC1Eqy13VwmEKfnAsEMuYGC8qHmtQhkPdzb8tSZ7RPCVgcSBKRHxd",
  "key40": "3nhDTN6n8Xc9bGdruSaQc7G73H5P8vgT54RjRBXz9Xx8A2hTTLrknneU7ZDJ6iE28KAcKZQPmBwmNEXmWV8uXjkB",
  "key41": "2R8WHVSUiDEEDJ2wRPwkKy7LdURNmBAURpka11vDB7qaYtbLiseAbxqTGidNMYRQS8mjXZRSvo7XW9SVoHkQnw4b",
  "key42": "5G3sbwxVKQuhqMpQbRhc7GY63qhtDr4pDbYK66MZVinoL9KJbeqU6GyZQUBBoxhtYTQ2ZKmQxbPff2ARM5wCHRyG",
  "key43": "1NKUe97C3Q7VyW44Qck9y5a1EdgXmaVoqoQwHfhMcj3iHgrmz6pEja85m9jx5rc5ZSABd8o3DMyyrRarSUQ97zV",
  "key44": "3o9qPj4yVFhYXwPEjd4Ugj6pfyRaeQtqTMcMUAu6cMqFA5tvUhZWumV2xPCVfNKY8JzU4rN7EeJo3RUAxoHzZQmt",
  "key45": "4JMMaJG7qLfaoq6HHNKtxTphjJyp6hSpvNMCdSADSz7hnDEXL4V7xc9BgLjfz2u97BNUrux9uNcb5pAzuu7rU3Bf",
  "key46": "27wNzao4EfdP4N5rQdm2JDwGovYKZVkfAfCaiDzG97GQ5U7KGQG7b317YnXGp5ziUgdocywT4ohqikSBoPADRNCY"
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
