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
    "4uSnZ41askBEBowJYH4BK8ZXa9xKdpLKRRebwyJXvFpcV7X7UVaC5fbRSG6aYDPxNB3YoXkn5S6tSdSBQ1LECTb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQyczT3Dxfk8QZ9sjKvcCqqgj7tHMUDdcVqoJztswZhz1qAVhJGPoNu8uPdPLLbnCX73mYMoHb2i7zZoWoe2tb",
  "key1": "3vJWjLB7Ky9f2g1oghDCY4gVxnDqtiyd7wHSprnXH6wVKyDn4uDSomjzNimpkWyBVCQZkufMbCEiFtRABPkzbSLT",
  "key2": "52VAceP4Mzs8u1h1HYub7g4ffSL6iw6UNGWCsSQc5HUu9pbP5FSAutZ47nxBTQYfRcqdeXNMPWdPPtppdxqpJx22",
  "key3": "2GUiMMr3tdyGCk1TzB9TqNxpDMYWb7PDZ7m7ekjqfgHqrxosuWqSFhJdTUAPvkPz5oEs8dqKz5XFmhsoG3n4CTww",
  "key4": "xwWueeGN97BGDo4GzSCTvjGekLAkYStiEqmkQijvrZQe7gMaKyidQHrMKMnr8JhZrzPP8MFjCi6Pb1uf87a5Fxc",
  "key5": "4R7uWHqFqdpT2YTvXgoyxN5CTAeckLTPEVYKa9LsGxefJx39yP2rY87pxLnYto7eKbXZvY4TfhWQhLbbeErstqV7",
  "key6": "2EMQX1b7nUKdJ1dZs9spKgPMZt1YCcgpGrs32Z7sr7WWDnqK5yY85DYUsA7QweiYiASWZev2YCEdetwznHGtArFj",
  "key7": "544t5tXJZNDaiiZ8GQQRcYzGKxFPyqrwufKqUoAMaUAUSFQMXkN6PqjE4XbMxX7oKhxqhVYoTSoMmjhK6gGyfvK3",
  "key8": "2hwGna1wKeSUUunBLKhaN3pZVarhMEz3Nax3dZs61nFuZvxrLAdakvEoz3VfZrJaEGUKGkmXbLCgCwYQLfo9TKVu",
  "key9": "56RLpWVFchd3EFnmsnSHC2ytrSqzjQ912HACxVWMHYXYrqD4Nd6w23oWQQhe7JWDDVc41kuJwdo3iX5nr3t2Eixw",
  "key10": "3xPBWTLmUKxQMva9wT5TVAbZMGoK3t37bCSJk4KtHwLjEToxQcPFM1FqiW9rD7G7a26akE1CKSdiGpfyb6oRVqX7",
  "key11": "3nw3KNeqXj6o2kuNfYWyM3RqK6pWdVjwqnqXgSbGpp2uhUvHPM8zKRqnk74zJwMJAx9z8wnXjhwayjBa3UCjmSLf",
  "key12": "tyyFqDuXLberJ5p49aoPa2G5rvcsZTde4PS3kiuH3ZKBy8qBgytrR7pivgH7emuWBxnKugaVFJd5LWdoZ5kvdzm",
  "key13": "3WiProLwPTegra5NTZ7UATktXrdHJLWWRU7VqkxUN7DAqW4dE1KSFVJy6weuiDp1urxSfq2L7XMzRRdw3B8y9c2L",
  "key14": "21oKk7xX7edfhtnRnHCTJQVQwwd5bfug23ALLXB3bmm7b9wgKs8J4kaxBggNe7Qf5GZhiQkaYgFJoejXTWc8rf1r",
  "key15": "2ijTXtSaXTXUnaUqWC7zw5wTyGqR9LCuXUPKRFGYFgwwthhHackzkTjgMiPsDhKziJs2E72EzpJGoRx5B5sf631f",
  "key16": "3rvbemjBFkMbwD28r9Z6eyGK6BpPrNiC5AXmEQZGvjZzN1p8iESTFtZbUAtoXuj4n9KZweAnDqFsYd8c2e9F4vAh",
  "key17": "33ZsoFeXooGFrdUKsksJjCs3ww46qkBhkrSaQbfqF8kkaGioeCFD2gS4RSAz2HPMtNA5nv8pC8CysvpBkn6Qjrjp",
  "key18": "fitqqFqKJPRS7KxP4Gr2nAQyteVXA1V8MQYySo9pyYQdEVmGjD8HQLXtySyHQ1JPBkSW5dUDMqjZ3cZrCTWfmoW",
  "key19": "gr2itxz2Emxp6FcoNLHC7q7pZNuhkJkmSsAPNGchp4x1y2THPF626WuHhJQqSvHnpKnv4G23Vi9LKP3QiiPk9F3",
  "key20": "5EKNEhHRVGMyKEmG2spW1szm1rHxN2V22NmyXiH8GKP7J68nEj2LEo7c6eEKJzZdQ5RVAj4utmGAiBLVDv9b65Ja",
  "key21": "3WBG1umKSBydZGKYQPJHGgZDeRYGP13WCUuCcNNBhmBkvFkjpLqguLnuhyKawV9jngvqFn2jq6AF6sjpoHbXQN9M",
  "key22": "vek9He3WyU2eMUj4iktrKB39XU9mHc6ZRWf1pv3nVFfjx9rLgSGoB5WPgPo5fShoomMo8brrrgfLjnoHvpL9kKs",
  "key23": "4cE18wABYsRyLLT1Yh4FF18sW8yvw1yqkKwp7fhoZpxswGUx67sEjHQEFfKTeoqAxgWpfaScXetXYhQRJ6ZdBu1y",
  "key24": "2rHBKyDQgEVSNZVJVeV17yTeiLUhfPjjwbJtNp57xxwhRMGPFnHxngPsGkd59jNQQ6TfWLFfEi4Pmjg5axqP7D8u",
  "key25": "4uJYTU8L1qVFR5cYfpZejYG5BvQ7kAX4LJ7V7Luq9jnPY1dRahthvPNKqCTaii3WxjVeg19GG37gx3bptvpt2iYm",
  "key26": "JizkkxwKrbbzTorL9DQtsNwK9Np322UXta46AK5YgoqiVCR1qCqgd6yCH7xw2EcQ9Fs79WZdSvR6rqFNmMyXMtD",
  "key27": "5gnJLTwQspxgNNHgvBFrYbfe2ibPYBkRFbGX2vawunHoVrDmt3dQQDk7G3e37wGvhQnJz4VwTrRYhW8JS411RZsN",
  "key28": "5fbHzrX2gD18pArUkumLbrHrkhTZAiPEfYFMGxoVeGk6orUAxtvUqTV71en9wMjTfNzSQoGoh6SmjFZQoXCmjCZo",
  "key29": "3uNJQvK22bd9JHgmG18sF5JWWuSsMrVHwhrZYRq5vhxALjjF2bVi5xk15DxFKuSxGwjjMKf3CyLKrwpeZrgBxpxo",
  "key30": "5oB8CsRQ9RTqQMdJ6UtwzAMRPphx4jrzzGS1TcayWZbRMEjeTA3QFBZAbU9U7RkdvUaQWoE4cCGTFRLMUa9VoWX6",
  "key31": "3aVM9xwo7nFfg6CA4xVBUpkqQj3f1UnF3KhvHdu5EHi6N2P8cijQgiEdshVpSXAejiEcgMQFavbPUG6X2RKHQV9J",
  "key32": "4G5jydLNm9JtFARYV3poL86DFsVQRgPbDT4gTEeifdSj9BMMGyY4RgP3Mo8AAvh4H6ae4mB667FzpP8MtkSxoLwJ",
  "key33": "4UmAztbnDKQpeULNdfKYx9bNuS28V7ArYqa8yum2bg2EFbanjN8u2Tckz7zbrHj71Avurjs9ssQFedRVaGKHYUsQ",
  "key34": "5gd65Uegu5GsDdnaK4oaGkW5S8T9rdvVgza99XCuin48b2mPtJDGuTddanZyCHECzWTfLzMshAHhQAXuZn8wutyq",
  "key35": "4JWTew8KUmNaRjYJKuW8JgGJnXuyQpAj4mh9mLXdEDpVxdkYDDL8Ygen3Nzz6RKjq8BydhYXbQcQhtNysKJF6rvB",
  "key36": "3KvEfKG8mQQd5h7az3ayhZXnMAz9cZDKC8Xp9x5TSS7P75MohwHL6h4Dwa9Jt6Ytt6L298BwJnArmEtcbi3GKj6t",
  "key37": "64f2xqxtxiA4gfaA4U5xLRuqGANr7oHRELgV5v5s2JqCW7abN2NmNB7XJFv9EDdiyNL44dbLeEA5cpM8z63NXSFJ",
  "key38": "ProLDEJALqpiPhYGHJXTsh4eGSUw4QG3eEfxuRVpYqJhetwyBb1RTKSXmZJ7XCkzfXbcPKGz9MAGJGtD9GD1RVj",
  "key39": "2sj2htwXZUzfKVBsv2tHuXNoU6BgLnC97uNmuTSfkvagL78JXMrKLK8ydS1SD4XBxVLWBQsaEZhtQzqKoRKmZvLM",
  "key40": "2WBF1ZctiQnWGD7fm95GSEmWcq6FZbR5rvQ4RMw7CZ3t1GHwPvv1xGEmFGCEC95dnYf5yUfg7a3cnAmTEwQUzs2Q",
  "key41": "BtyXj35p7MBiLA4zV3MjtjQNZJQG9Caau1sKQh538NoNhfFxyX6cCDdgT8avbMLY4BZCJw8vni3kRW79oNExQBC",
  "key42": "5evPRXCcSW4v41ecUe9HLyfm8nAL3NaiCPUqkoAf6KKJ8HXSZvXvRfn7qVD1MmbdevwPQPQSGQUuQbXcBr1gEWiQ",
  "key43": "3K5Asdhpz1qmMGPwMfHkNrPC7VGuPByocqKgVGNFh4Djw4QQzaEVwHiZMR2VzwnuC3JEHX2JBdA3uLdM4UrvrLy9"
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
