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
    "2yiSrt13MSytnExmT9LAoW1hn7j3UzWeBfdxPBxzkZHprKNqtbS9fL31DyveLweB6kEdGcGdDT3XYezbX3nsXtdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yvEmNpcXRnwSwZdNv8tpmbZwcaVJnQv1iauLv7pag9SnSJQYhbJZ4Smqb9nnqy76Tdq9xDcCJoF15iAv7e7j5uH",
  "key1": "2nLrrAGRM92SUst8HVx72jcwpHr3uP6fBQxgy7ireAmswmZFjGGFJQGBLcWfSeSGG3DxzepTg7nywyjQ78bCLziJ",
  "key2": "4TAbwJHpGJgQ17acz8Nw4RvE3jLVNc9aU4sqDLR6M5Af1GApLpd5YPB9oqDhqP1SPA9Lkg5sEvj1cbiYFAkPLy1Z",
  "key3": "3bVcngr6ZNHFAbSuQWgqETo4dxqp1Bs2ie9qzzdfCUDJjvcWGo8p7upWGpPA9W61qQ2tzNBdQyEpHpDJJMJfZ3Pe",
  "key4": "2GMYTUhpp6AKGrC8cAkY7PvUwPngqGNXVKneqSVyuw7osLkrBXWDU9ZvGykafUMowHQjjssZxiX4TRbmouwwTbSq",
  "key5": "4JmX2PDfjqEfNqd57Z5wN4tCMpEUWo3fydWCaWsd4nM9DwrW7ZutHfBgua7BS73ntMNKjbfwihBUt8o2wyT4TKHQ",
  "key6": "345yUNkPps7WZa5C5posoPEitUX41ajpPxA6ZotbBhkkxYWFZ9HGXcqC8rDn1Hqu8kM1aj9N31RxPLfoVXcCtACd",
  "key7": "5BSYWGqZvA2mt1AwBprN2ipyYnqnUvZjBNqdJPZLDWrGKd1g7aAjo5Nu7Qj4qUMct1w9dMvF26RwJt3R2G2o5fnG",
  "key8": "2MTuET1LKENKDSTBBXrS2CQjapc86bQcqjFJ6VqeYpSv48U7BHwvf8iXU6eUgDmYPn2BtQzHAxHSnMATejZLkmrN",
  "key9": "2UL6WeDaoSzP1jxGNzaqLUeeyjpMuAha1fUbYVRjEeCz6pYFnUs8sbGezrjzTk3rkBj2oz7fArKPjSz8KvNtWzWv",
  "key10": "4e9yR8J7g1KrgGmyfvVyF5ZtuZk9PB4YqR2jceACR3erqrUazaHphNQkLtWLNeDsMQNy1oWgyYvq8CpxsJEY6MFa",
  "key11": "FCaCUhCHfG3vUpsyhXzh5oa3gRV5jh92MuQL7phXdn5zxZCZsstffVgcN9zBZZfaYTGM9JuegEtZx4ogkQ5KRKU",
  "key12": "ZJH9Cx6MvnSxkk896JoHBrDvmkPn8ddzm2foMuvsTbkgKR6SEw8hjRihsVTc9jpZ1Kg7ruJysivpM7mTVFEdn6q",
  "key13": "2iw1JWJw9UQ2cGRrS4jS81ifVWtMp7Ra5yTdfysvtcj9AEWgJKExsQJ7cCan3g3UaBj6dDitP1yru1oorEbaKHS9",
  "key14": "FP8v7EjVMgNHxpW2XEco4rt5Nbprex6twMh5Tiyu5KjvENFN3qdtXSYMm8rrJ39qjkju1vnee8DpX4EnGkikE3p",
  "key15": "4SgjJExp5mBMttXRDbJeX8jXG2H8VDuk129nEsb72Peb3y2xpGxDtvPsxZ2WSQ7yoR95eHba5BgNh3gAqmPuGoF6",
  "key16": "de5hkny4atkwFQijZe5aarKnWf6mwmaJCxhhJ3SQB6sFEEc17THqRWy6rDC62G4hU71741fpuLW6fEuSK3Gt7vs",
  "key17": "3wvHiNdoA73HTNc7uUaQ5SJn4BJfDNPskLYoD9Mybwh4tnViJm523NG7pXpmAy2tcBtAQBH6eroY57dXzhNmv8Xq",
  "key18": "9V8AgEatZmHNxNSwenprXKgu7BGyzGdgpSrrgywAbH9szHr2bAqmqrwJGy2UrTBHq9riCMjveyBkcqjUxXEqvmt",
  "key19": "4NCv8oAzFjzUiuKYPUUMzRW3mANxj64FQDEoEYbtZuEkE4dtktg6gi1BgLPLXRzDUANhk8cGJsc2LtdezFbmd5Uz",
  "key20": "2P5J6qTeZDocKng6vyCUZVjsWf6NeG6fq1WtsVmV3Rbh7QVbXAszEZYH7SAw8QwRPM3D491eeeRdrYjmQgzTexBC",
  "key21": "4vBUrdZFP5a5TCfGwTf4fRqZLnUwFanRkFL9Ru35R9yvu554yjTnuVAezpgwLtpyhsFDG4MzB86SG4XmuYuvQPLW",
  "key22": "4f8QiyuuMPCw3ZcRWvQu5owxYoN3K84mpNaz4uSj6q1YtBTcSWtMV1B6qbk6E44brEFRTxDYN4Hz46AdW2XqBpkX",
  "key23": "3WgvdxsBrtEKBgegLLRUcuxMuLb88QGgcKb3Pj8YsKnK3n6KU1s5CYvvU9EDP3vs4ZkPsKQrZNfdcaEL4U94JCPh",
  "key24": "5vz9SnF92ybdQDaoCufaHLBoRdoebV6DXbM8ByZAyg7kWb48XgqG82A2b3NvPkmEQAmYgpC9znWKA38AoX7FCoJ9",
  "key25": "56YMQnmgwhesfwGXQCStA4BYkHyRXPhxxekkS3Bnsfg89XX1PFdGE5NM9ccWwWAnEKFm5RRVxj1V6guqVkiDqF8W",
  "key26": "4V5VsaoAsoZJeQyW8NdioC3bjMVeBWs4zBDsUqMVxZq4dLoQrvnFNigLM4EQfMcX81Lsruzmyc6bKpczYh2d3LfR",
  "key27": "2FrJqEcWsSWLqJjGnuBjYyDAyLXZu4s1msdcvTrB1vTBsBuQC4on5sJeZ3uAuhQ5Mx3DgG4Bcopht1MizNVjdBqx",
  "key28": "cGcdLjqZKCDDvS1ep7pqp8tBBfC3gYQqjtFrimqRLR3skZmD8YJwmDP9Fiy8UAFWe6xp5EAzGBdhCwU9GZ88F7M",
  "key29": "uHFPk1XetAVCWvc9D8dcA7jtTWrLL24hTxTJUn9fRad8rmTDCD2tBKfjz6Knh75bMiM8ruQGjJhFNYpRvKv64MC",
  "key30": "4NHNSYq58JnbpmEP83UY9ZPq37X26jKMbvGNqst3fjhrKPNWBQDNWfSw1KzqM3pw2nsCfWiNDnZUMuZhiwEVCT1",
  "key31": "AQg7zT9YeXxJW7xxTSWkWCQMVjYskT9pdvenC2xQVpLCYJZRdKCepTBuxGTHGPrZf1oeoE8rBVEBKoDkHJ1DgsT",
  "key32": "swfnEZiotgy2qiL1TaHFfC1KRgoWADzDcUJVy99WCVAE6Y4ikm2jLqRbBDS3K7UyiAaeWgApZQwBpUvnAgmwFbi",
  "key33": "55Pkp4JNHrXqY3hKdadAYGPjCT8fLsCjkDojk7qM262JouNzFaKGJm8L7RWhe5kBqCd3xXQh9q26KMfVgUZ2wVex",
  "key34": "3KHyt2HrJ8x6L74uCKdfMcwkXqcg3ADm9HpaufbU1PpTxEiRAgHu1AC69Mn9gW7DBLc2Zq3kmZGB6SRRyP5cq92r",
  "key35": "4XuQDjK9G7RBJ8AHYpizcWz9ytwGDv7QtVRcPCz84KgmFQDANHhUDSVyQSTz6Cx82EzjV822JkB8vfr4QHuhuVCE",
  "key36": "378GPsfZkucJeVenJXYQEEuTaXhzDPTCMju12gFJhTqj5sjo5GidZgLemfjK8gFF4Hao33TPN4MQemRk46CiHAXK",
  "key37": "3pVmrYgmdxjPXVkrHoF8FEKfN4Ju7auhnyZgdYob5GdU5XoYYAcA97kvjQVpNQdcFjjSykzZMYPh2x5MWbMib7ec",
  "key38": "5Wh9DM8QybgXCSXcPuAzaie53ZVpxUYHv7fCK1frTSzG7G4uFVzp9VmgijdqrCv7GcbaWV1UYwdWfEMuQ8EstGzk",
  "key39": "qr3Bm6qLHApqyf1YNrz3XEPKEixYrW8foxfuTJ7AZcvSgnFUjzfyGbn4DuSstppPdMrtApqus2ePwsUJdDpU4E7",
  "key40": "3CA3gK47LRDDBcEJ1nemNs97Nx1zVNRViRuWjAbo8NWJ5xFEWt93rVzk2t57gPifXohMdmfP2FRsB4JFgweGc7jL",
  "key41": "5xbGfSxsoBRG2nYCHV1Vw1mSTwzWr1S6vsqZh4jfiT1Sn9mNwhQ4DAi6SKYXks6NVQUgVK7JJuzx7wPx3eCCehwh",
  "key42": "3ALCyVeUMcvNvX9jAARxc6b5YdGicJfbfMXZAyhbqCVwDS1F6PWBwnaudaae6dwuzBZnuw715qvCVEAMgyJPjQi8",
  "key43": "4k5Mph72wyxkwQjkcWvkqbjqUcWrNd7Sx1DAvvsEkk3Yu9A2kMAWidK7HNSQPQVPL3cwgdMBHCn2JUaYNJcm1oeh"
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
