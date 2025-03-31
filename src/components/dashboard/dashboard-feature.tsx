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
    "LTW9X9djn1rYVBfsjRQ3JtShKXQMQFfHvadLugrgWJ817UvL1NUGvbVDXLx9zkGGmcA3pcYxySjA8hT59sDuPE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KitUzfbXPJnPYDgy6WFYnFzgFBHckU4Hkrb1wxhxTzHe8Zq1XbLyU8FkWDj2rA3hSXWPMpCC13DPXEY2N53GYoz",
  "key1": "3psXkvKcMpLRegjLB3y9C8snJjEnqKoKVNPiQwN1SUiEvN2tkLmaaiAqaRk1GYnoaVWoqmCJS5MhW4DtMFfZrNpj",
  "key2": "27yhVUfFJLb64F9Q9ZERedB4WZerJAcFEmmHwioPWTvaz4VGojWrbgE6CkHqW44Dykz6R95eGyr4XDCLUpcjcjNi",
  "key3": "2HeMDieoa4rNPzL9Eitf1u45XSZi3Mg9Y2pBLCRW97oeYYDhxtQ9jyBc3at1NizBKk1VtwdLGCWWkN7SLCp8Kn4Q",
  "key4": "49bcQR8BA1s7gFopgtEVBPuC2ywHUjQX5GKmXeWshBLa8iz4LTjMACkUD1fT41SZe8vqSxGwjcFxF9EYWmHXn3Bx",
  "key5": "2d4YpfQuH93Htw8YMwPFeadTey12uawhFs3JBYqVt5iKnUXGYzs6h9drVkEhr52VuMzU1dmhDGVNEP7cTTfuuA6Q",
  "key6": "5kCv88QAsMctSM6jbaRx36PJbD4WviEvjR6p5R5tqamLzV9P4TABrq3av4uZgGVEjgYb4yq2VCbubhAnpuThspcV",
  "key7": "2wFF37rVgiDxib6VtNYWQHhDajPGjWep4Qk5nWHkEyFQke2JsVWNhFbhmhFL1BUhHRA2zAHsp8o8wLTpxoQbxtyh",
  "key8": "4PXBeEnanhZSaTeoQbenoJxNzfb4zmPfn5pzxPSWBjo8Ly9doF3yuNMKSu1noVtqxrdGtZLh5wc2kCaqN3gfVxfe",
  "key9": "C7wsuVx4y42MZTaaPQQccP4qMHKybB8xkkptkCEjXsbmRYs3gEJqjrC1a9BYeVoVAqiHWCpnm5jLwNKeCuMfKA2",
  "key10": "4zmuK58Nsqbf1teWiw3cHgdLoD5aQQ4V7cL9EFrFkYgJBQaNCgsiV3yfiuLiVM3K2wTf1V8ytE4Y8DVqiuTpNtRM",
  "key11": "2fJ9LweHtKG6Unspg7P96AzUZVGbTkdHJfv3D2JeW8i3JNWvni1fhetvzt5WdZUSg8WoSNvpKcYuPQd5rhzVQyVx",
  "key12": "5nhVpDo5NjoFQPeS8Bi5gUbsuZzZCc6cCT8aws76qvk9uCJ1P3J5zjMe7Pqz7MAxAhbqCR1F6YGfFQdGGazZhJWy",
  "key13": "3Qz2X2ZShNrApEhUVVDWuEfAqRfPBLjh7zNNsc7TQ73LxHXvvJHQ28kxZY1qMqR6kqCxYVrkWoXAimUeDsMkGcH7",
  "key14": "5xEgfhxd5Jg4EhSQNCSs9s1gsUP6BWsw9ELKQ65vuqRRJJ47BJJWy9JdJVNM5EdAR9HLc4NxW8cHD7D6nj96WACU",
  "key15": "5KFHLEX9B9kH8ioWUjYC7FhncU5hhYsyXmMrh4kKkukhCtXZRK8j7p2R27gJCyYiGTBHZPKRW5BMX2CzhbGM7hai",
  "key16": "4zxourhPMKzfQSDfgzq23NDREpxxrTnTmZviDtc8WDBDwzHzy4DbZvxif4EBqfPWJEEgHiywTGR7QY4CEd62pM9J",
  "key17": "8iMj1ceQkmxGC7Ng6Y9g8dh8qhPf4CR6rMWhNxYAiu5Cvy1FGfvREt4bDBzTLpurW88GAasjnxwV4cYwtcU44xP",
  "key18": "5wLgdffGvraeT7ic3oSBXJi1BGJ7y1j63iXQFLgARzFZRfQRwB18MU5iCEaUeWS6Ey4FG7yQvsdznFrawMpBkwJ7",
  "key19": "4qAucuRkcpDHMq8Yr5pkBx5Gdxcv3kCacX8LqXLEiUh5euBUCaD8xHRRdHUY4em7vSTzM9QreJbRKEcisgABhNb4",
  "key20": "2KS1A5oVmPxFZAn8wEGosrW2MfcU88uATtLc94vtLqN1bqef5mHm9c1dNW6fL9jPrBQkzNnc5WzmEvAChThnD3dz",
  "key21": "4xZ3kqwdfk79zayvqPEr2xuDjHevW1Y4phcn13SzWbXm3ncUjpCwPbo78b47mUNcT9LioKjo4v4Fe6UGJB5P43g8",
  "key22": "t9ocGnUSmEVNeiVVXZJE665vThBNMyiZeDhrd8fpz7aFCZYTns5bLFB6gj45gPXxGiEmE1Vyv3VeKtwAengtteC",
  "key23": "25YHgWFNYcsr1f3LEKcfdLFMuwsVF7KhNtrYoSjuFzwhn31PyC2TYFjdjy38UM5WRwZ6sgxRL3Nvnp44t2a9YraU",
  "key24": "5E3yEXbP3uWSTgqSWeccj5SpvQTPG6fCEJajKxdSrb2XncWDAzoWVHFv8aF7Kq5tn1DGvuWAJycH9UNWTRcxNPSc",
  "key25": "5mBtnf9en2hCe5EDBKdDYSZYXgMFZnty3vmUWR4sUCkXcKqprsmZvYcLbL2X4qN4T6K9su5o9PEqJx8duzriZSBZ",
  "key26": "LQoLarp7nJ3Xi8zT6CjN15wir1q4VsA8nUkAF3tkHXb9vLxjyJ7mrUtMyX82aiRKeBFMZn7dr372WihkR5sqrPM",
  "key27": "A5rBFm5BiaLEqwv7xdBdrYNB2r8LszncnXg2AVMhpHnFqBVbCTiEzqMg5hhgHsfvDYuB3K5w6pKW8tJoG3kS9EV",
  "key28": "2yrHhveSh5PcWfGdGAu1gnEzd3tC3iR7ZGxS2G8wo9GY9h3ysByScqTzx5ooPYYTTZCu5MmEJBoMTn8GBZX5r9n6",
  "key29": "4uBAwkCubh7DhCTDBi5vDNxP3x6aDLFJrRjK3RqXW2jHasoNUEMdxaddEx93e76riYJjRJXiX8L7eE45G6vkf8r2",
  "key30": "3EatNBSrFSQZevzDxmeDQxiEooThWcJBzq2YxMoG98qTWsYAZRaHYBC9UFeiqrU5zw15QpMU2MWjY4dRVAyjPJ7N"
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
