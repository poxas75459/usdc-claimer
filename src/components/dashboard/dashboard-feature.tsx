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
    "NqZmHfncaohpiP3S7xneoJs3Fz6LjbcGMpdgbk6b9av2jBiULpGYFVzZwYgxQ6TeMSCr96JpRLDVExm5jAN1sBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TT9RuuXgmEmXisLGvoyyEimpsHzL8ZPLPuNxwHvbw9HnAg9Vb48hfdaPPYVaGB6ZASsgAnRTFtChtHhyizzgbbv",
  "key1": "5wHue2tAH222jVmjEbwvEC1GiZjSYW6EgBGoZuiFfR2nLpGSwuyvMgXnzRQKbKzSr6VkFYjkm55HQE9phUkzE5n9",
  "key2": "2jLFC9ZbQVCcYuNPf5ZoZUohhe6CdJGBpgK7gfi9vWwMF12ch72jzWsHbLphEKKJQdbLNdQYxDcvDGXbhYi1R7N1",
  "key3": "54ZURNiuVGhtVMzN2isSbo51uc9PQpeSghsXduHdFeqSLAVwTMR1ry8NEEU3983MzQjcX23YrUHE6TfWUucPoqs3",
  "key4": "5J1nfboMQGi4V3W7ZWbaQ52BAahxwyi68tAKTZ4YMT7mMk5S1LeNcKbKHKrAq9eUmqxfvRiHvPu4KDRQZcBq49bb",
  "key5": "38x27f4DTjcTNcYQBMJijS54DAZ5jvy3Lus6HJhT1YbsF4y4mhJTt5bCKLtuyXXYLbSmoMFL4QD2L3yznCxHuB6W",
  "key6": "2iUNgd1UM6MAuSbrK5pCMa1QPbYmQ2xXfua7jt4DkP2ek4JgG5LgqyvmGTqhtKnr6XBgSRd35xuMi1tQPyYcuiCx",
  "key7": "3Eah7dqA6NmzbLN5vyTbUbysZuJRT3btkHZLNtfXPK4xVg6MgMFasC1MEMT6ADcsSAB9Zx89XhjtrzZwebpcAKxX",
  "key8": "4CTWr9HjyhjFuLSuCyj2CtAjjpHZPC7cB5JBbPvrLDUFFZaJ67gJHy8eDL1azK1vAeXGd8mDXvzdDaiHRgrU4F9",
  "key9": "4kAAfr23VoasKs7NQmBJPP27Gg3JhmEQJfaY7s3GTiJjAGTQGYVrUb1E1EUaTQKAPYbfTgKff6weNHQdq6igc7yi",
  "key10": "2QTcQzxQCorRUYpyY4ektMwFnAZKJCMABHMrhnoYyk3ZmKXWRmZgVJjmxMcAspfbjKvjRbdX9htSnevDbmqYDoqV",
  "key11": "3QRnVC6EqpXWTKNrufkLDZD9cT4Xm3A9GEt3MJshmrKEu8KjKbK4rAYhVQz2CkgbxqMg4hBeUzgi7qoqZ5bKHmKC",
  "key12": "4xmbimXSyfoA3oJeAKmzxUW7zgWDUsiJwEYirkiH3M8CYmY4VydCWLZx3cMXyovfDVLskSrzDeAi9TNvVg4Sg1Rv",
  "key13": "5d7RUEHnahqSttv9aU9cTmCfErg4xPLAqU61gPigRZifFh9nFgYzjrgsbd5ugQnNEgNdeMaH85nysFPQfjw39A4V",
  "key14": "3r5HLQHuzQJR2fsYH8ZLYCWL5hpYAe5YvBy5PCWn5uA89yuubHtrPVPQJ7bNjoZ2nJ7Bp2mrp3aXJ9qTR92b5Mad",
  "key15": "o7nX4XHyWDz1Xq5nmnjj1J8u3oTksdqqgkjV6xUwZrtqTfyL2Wr4sZTUPFCwJ9ommB5jcf5WQ8E6XKoig5y7iBH",
  "key16": "2QrSJqmqjUKkffjMotqpbVq8NoEY24xCSkMQGfinmAScTiFNd2o35ueQ5bxKVp9tkHaCDojqbqunHTSuzXZc6nM",
  "key17": "2ahkhtx3Hot2zsqkEcBPCdj64tZ8fWoMWx9W71KtuMvTxJTZRqe12hV46Sm9nZLsWxmYngsUW4R2MvCc6oAY1QDX",
  "key18": "5poECngMmDS1UiQCLPzeTu2Kkg9jQzEck2QsU5YW2v2YimR6tS6o4V4UyZp8wDCwfaZ6DG9CJ2a2xm2hEWTQKsoR",
  "key19": "47Wb2LVRREGuK1bpFxetL7St99dheAzvVzsW3NG4yNq3kgGAWYrgfEPXyxkXHz7ziEhfUadZ7rX4NC3DMxMqi9kt",
  "key20": "mmY5vq9sYtwy4hq6hy12qtbCoDVraCa1mmVoPXNBggMMQnHrhjkfC661FTuZoJz3rQAPS3sJsZ23XVfgHkij3ok",
  "key21": "Yhj5dmgsVN61qLfHppqUyX7vQ5YyYXbWuLP3Jfn2WsD8dy2Gyat4Dvo12ReSWcyNRhBa2eJRDSYPpbKtBUNV3x1",
  "key22": "5querxipVs1f7CAtxUw7RvVPCMYJDDZKj1DP2zffEidrwqJTUysxejudG7ctC9YrZHAnPCkJpU48x793jSV3nk4V",
  "key23": "3SSGKbTYUYPiLeoYBMTf8o9RHcjXg4uLwJMUVMcYV2sfZPNakppAYfxeKxT3bszEnsHYJutstcQmEprCSimz5rpj",
  "key24": "2FAm7w9BqTKZFsPq9SBGop6QSgWhYxH2txkc2bekdtqjsxXcJJ1c9pynvuDsoyLMzyFd7qEx6smu4873B8mUgk2G",
  "key25": "28F9XvokdETDtntdL7iK2yVZMFZ5wEPKrC8oiXnycmtcwMLmo59PRLXvZceXkr9ZUkHkEj6mDjYxAZn6y83k6c3v",
  "key26": "3QGU9kZVtsUDxzc8Wd6zEmQnNaTsteXdLLvWRcP8DVGG8ze2B2zmH6brKNJLU1qoLvnaV2EAVvJhobnf6GGL1YMy"
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
