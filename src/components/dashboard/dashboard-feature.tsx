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
    "28dGMQsXNVjz9rRwq87METH4an7kWuJyo1caRq6GLdEQJmjqgv8daJsiUdxn2Zy73p4u685tV3NyS9Puxdj5KYpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFzzvSFXKCYWsF9pwMMURkZS2Y4swgTWjyb2V2fFy6fWKHpi6VP2sufNN8bdpfHnFPqPvg2PAeqFGKbzLvdcryz",
  "key1": "4ZuG2hjLT2fEj6cMAKJ2oXE7sihynjVSh8ncG4jPwm6nyEeCyFAezGfhjZpfkiVDnojd3Zo3krxFGahBZJAocZLh",
  "key2": "67am7bTkgmwj738hSMEwwB79YKo7CkZvp18QvKPb4BkFGRY6BMSpxSEj6L2KQmTaL5VoqeqZTqCqQVhcnCEkzjkk",
  "key3": "3y6kzvpmupGpfEYkVjdC9ZysrxtPgWTVDphXnECBzWsZMVHUzuTFNcRyuHgfwnJfVr2SHjPsDAVYDLPdRkwNJmoS",
  "key4": "3druiRM9qrgoaWwf9rGzEghfqBY6E1KPKUZyT8RxVxJtcpjdqEcvnetKA41Dxyket8cjvhAs9j2Ax69AFPF8k3Xr",
  "key5": "AfDv9L5PfYjfCXzeqQ7ZqVheUbBLq3dfa1zwtnkJJyyJfiegEMLKa7FBQyVF8aPPvQfAzataKgPceUJmJrkZqFJ",
  "key6": "65X9Szpszugd6Yqu8Wwie8fctHbWpyTaq4xwDSkEgxupG63BSSfP1GBMPy5AGgnxT8539S2HNorXf3JbPwksLKhZ",
  "key7": "5b7qye5eMm5XyzkjkEC9QvknD2XU1HxuYN2jyUw23VeVnes7EE1f4YJahZ4aZ8qUZWcXAXWx8uw5XL7JAB7JwBEU",
  "key8": "egxnL2gXKbCYgYLJ1YtHC9irFq7ZUG77tCMps1g6giqxJHk8rMqMh8zPPqcqgAZqTahUMx5tR7vXX5LXQT4ugis",
  "key9": "2ukDcZPAjWVjtfCcbXp3ReiwLCUjFfkchqMspyFjhfHMCri4dMe8Ze13DspBH3Z91MBLVvb6YM71g69hrq9oQgsi",
  "key10": "5h4Jtnqj7iiP8Mp3K9wDiWsE9fRRAnkMZh3q7SrymCKZCAkBP33BFkqg1sDz6r2wcUKcisxjFcPM2Jx97bVKn93J",
  "key11": "43sRoxfwrmKfmFaaim58KruK1uiG1VVCy8w6uJhFbVNGC9VL7ULA3GtFAkBveauxWSE8AkDYuLBQrs8dd4CtarKZ",
  "key12": "5AUuqq5JE1gRmCrdn3xqcnXA9ZkiX5WggpDmGTWZo18foNZ6t8rrwDzPG1xZpDk9C8NPSWBWYymmLczcX5DX4E9M",
  "key13": "4dbiyEBfNZ8v7bg8abJnKQ7qHPaKFAydZMA31JCbqqbtY1HkdkdqspG5tLtiUjitq5Pn4ofrxaiwPeDfZTc4uGK7",
  "key14": "2JCwBWrckjKHkmBSgTdqo22Zy6zvSLZuo6xPjYtWZLESwDrKUZcdHaXDmFjHxZm5J36JKMKSqrQ9gXxsBA7VCPA8",
  "key15": "3BDcMZQcByXMuCyBgYCpc4er1znWR8LjLrYR24wX39ua56kXAqVn34xpdHRhSdFXELYJJogUN1qWnF9492svZSk1",
  "key16": "5F7AKGgcBoFnXVNdvuzLvU2V8X4TkJ8cFUDdgPQtuoxMpruMLAjH16vj2au6aUR7S15Y8rNpHhFX76R6cefnNRYf",
  "key17": "oe3JD3gBgBkdAyDxynibi9J7jNnXyto9d9dDobpNRqWm8voSAg78TrvxBMzCP33EkrP64L3BWv2rkW2KXXjYC3x",
  "key18": "3mP9YeiwiwRd7MGiSTiixRuSNMsNHkyLPP7Drxo2JpS2dRaX7Akw37vikpRJQKo1PqRqqgKpXYPSZzH7umxk5L6r",
  "key19": "2dejcoAtg8hAhUfC53gkdPzv3SgUGJMhoGzER6CXKnnTza9X3AjmYPDeurcG6RonLuCJJvdQz9uDbKXzgFeEhEcH",
  "key20": "64rFh9mHp2j7QF5TLYwqwZ8bNi21j9eKyTKk1UfxAzJPbCUSJYTHR8z9m7mDX2ah6T3y3UFb1mH4meMLADq22hnJ",
  "key21": "5aAwMhEHLBf7PBu1LmGF3HKQo4ZJt3LekZ769MJGQyXjVD7RyqBNVMgd9jrVcvFsR1eT4PPHzxdQVZHZq8ohuDpr",
  "key22": "CnaLTgBwKHQtfpyiU1WpsskSirWjVV4ZtSFmMsyvyG8bnWcF8VAhweuSnGD1h51Qg2DN9hUVuwvCxDPZYr8qPRJ",
  "key23": "295PruQn8BN49t8PqdTfxuRUdxQgZHCHZpeLhMmZWfSsRLWAVoUHM98rDCcqCn3LZeWteqPyAedvHN6XJwgbSHtY",
  "key24": "Fn3FxVczZGbWiuVhHFGAzC582ZSz3fjUNWW9TMaVza9KmjKqXZW4j7gEmKs5rYoa16eYX2NWeJTzrv5xbn6rHHX"
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
