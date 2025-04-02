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
    "497XcSXgLMWny9X6aBLKwPeKYtkvYEbEqtg59gEyc1HpcUDyHDQRXUgv9se3gpAvdGeh9dt4QoaW2sqVpiTkX8qJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zWnUvKD4RNgKQBeee3AMnwucpiJCopXNfgUyBouydMZstQjxAuxSE5ALChLMJ3mGTq7TPLRx9syWXNmEq2bmDyL",
  "key1": "4apBjwX8Z1k4iT9BDyXWzkCteRdVftjvGx6KBXMRVESPwfaZHwwr5HayUZchADbnrftocBPZXrXZ8nnNxF5fbfH1",
  "key2": "2b1kXbnwSnsgthTX3cCmkpD97odS1ZWD8Y66SMKrtxcNeFXeb9mJnnUH1sjiNdqdpuJJmX5bdBN78er7bVyKmmas",
  "key3": "5uxnJWoc2iFc5wA6spAcfHGX4y5XT2otFYxys2bpQfJYavX6ncHAWpp7ZvEnhN5WRDyEszuVuhrv9usibYFZUHLF",
  "key4": "saeo7RACkZzK3ADookbuCzPH4y6Zj8Bin46g4ciATHHXg11g5KspP6WqNahRqjpYa4dzdrMo2q56L751NFGwkj8",
  "key5": "evNsU8hPsyzJs2pJYoF9GhaxoqZdDbeAeA3DiZPFmBeoPNACw1VJU1oaKLctfk8gvyJ5qCcGPS9QvKBY34VxJYj",
  "key6": "2nxkVEGR6yrQgob1pZrPq6bn124iEREsDRyM1uK6akYykYWdsgQy6LS2CBVMJuaVrtYnQ2zdahEYQPaaJUd7p7Vw",
  "key7": "2dzrNrPL97XQjxQ7YRMeWyiQveEHsdvXWath1UxdCRSji99F3YexwUwvMuxFnyK4umH539tqi8K6uT2gGzVgeBzZ",
  "key8": "5VuGHCwX4AUsGvcqBaLNwnEMAXpXXfXU732zsBmGhsnZWuTMw6VkmwhJuRtZNZMy7NwzfYmWCfmaQ4K486Z3G7uq",
  "key9": "44rGFLPWfnPcnZREVMoQkX8x6Zgm1P5UQeR9Kr9H2kVdDbEtnYwCqjVuvNM5GkVrvNVtMmwgPkPwBGXJU97xwApm",
  "key10": "4LLahbSzc2ewWhCgqsNFn7zN79edMNxzXp3KiHmvhXy21jeACFZcwgvpFbtiDQ9r42voG4AzG4tvWkwuxcFCnSHF",
  "key11": "2qGZSeqKp77Kn5uU6sgTn7yCnG63xn86tj2FiCcBYjMpRcJPL7apXa7YCUYosGuBXLRPMgWvX41meLSJDaw4y28Z",
  "key12": "4xWZ4QVXLNgBSoAJ1cqv76g2nGW9ZogSSNy9KAGvZ1kh4JxsPdzKoDzmbnPGrGAkwMGjbggz7KUiWb4H8Bh7QcX",
  "key13": "4raVPNjVqEsHTJ9EMc4dgjCw1R2B3fWJwz4NSfpakKEbzMkPwFjAaSst9EHHxbraEmZoVbobKg8U4YeXunfaUCQe",
  "key14": "3qCrSBFj2166eC1mXBSPs5HimBkqSdXvE5MnmouGVpuqfwsiEv71jB1Qz8VQyYBgUHSoGfV6JcbRFbPpkE2Mjj9D",
  "key15": "2UxSA9JwQthxkiZdQTZuHZJXWVR92TBVXBkQe5B3dgcNmjFKqF7zUjL3rviZxKm7wJ8rRsBGafnuaPA2GnRUqCgA",
  "key16": "4YLzRJqsBRn767v5u1xMniC1srUnbXXWDkdiexQxH4ziM6YzVEECnZxieRA2st6iEQ7tQofjnshATayt448WnJeC",
  "key17": "4vFhrg1B7467axGHEL5R5vuPAZ4ao5ZLtBnt3QzpxbDVnn4j4UApg21VU5EqYHsuFo1BhVmS4tT46mDQtYLabmxY",
  "key18": "4DEcN9wByd9ypGPGuZPaJMxL1Vr2VaocfrAdgSruJUis3EiG5DCj1BGZmtNLV98cULJHoyKeMEDZdduBpfovEb18",
  "key19": "5XuipttwympYyVgZT8aVc7Xo7TXARXBxezMj3De5pcCAb1d4xnzTFnWrfTiKXM6NJWo4Tzke9LvM2QoccWARgnf3",
  "key20": "me2pEgdyedJb2sCXqeMmt9p7DcbX9nEDWMuwijSyHQrwohJ1GXaosatRcWCUtUV3Kr69E8kTE3jMiVNXPXw4Qn4",
  "key21": "3hPpX5E6XViTS4ZaqLvvUzKzAzWMmtmRRiUS7WUvMMzAwEfEmzxcrpQ9QR7EDuNtx6SN5GqmWa76X5YbKN2XY6sL",
  "key22": "5ih6gQSW3ARTKfrqo5GdC5Za8yC4ydZJAsbGRKs12fosU6SidCUnNia9GsDzFp6zgFoi5YPjrd8naE5UHGEdj5XN",
  "key23": "4Cw47xUQhhJqn1oKABJuC1ZfdqowL83Hf87AHY6QEauJkL6jASxQGvmY61TBngJpjDe8uKs3qWVVu3FrCYGen1m6",
  "key24": "4G3buDqBwE8roAb6XKQzkiUbq5Y8x3JzpwCVuJKfrvH9q6o2ebpwKXQh6TzrEhe4wRFzdY8fQSNY4BYyqnsPfANz",
  "key25": "jksEpmFJtpW4rMbyhKbAQhRxJgw9cuA8dj5XvNfFuaUrFJJ68SpxruMc5mpqdw9zBMWw4vb38zaZyoWZhmNXww6",
  "key26": "4k7sjnQ4KDKF8FrVvqd99U4Sujw4BaJCjNbqnb13VkENuNZKb3mh6rqsHvJxbYn1GZ4LrvWETBrmy8FVDok5SXtf",
  "key27": "23ABQrvfChtuhWee76T84UFDpnQzgSLM1Mm65VRGbshdRydcAmGqYbEYwMZ7QFEqDq4okcNVhbnSYW69hrLsPFyj",
  "key28": "4ijMTUTKHYSmVPJjwmW6HUnkKeZprmMs2JoivMNFDGUj1W4ZyEX4q484nCFemrtKst7eo2gikj1gXZreEkFQZFn5",
  "key29": "MVA1NEcD2NqCj8WhxtaiwRAwYAk4Sa7D4hR9PzdkBBPSS6dqH6dfapP2uAvKWUjEZ4pnRZj2L4JFBfbEE3LfeJX"
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
