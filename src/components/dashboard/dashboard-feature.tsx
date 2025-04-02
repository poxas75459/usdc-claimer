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
    "5ewgeLSEqDt19QtemFjmLER5pPBYLjiy6uub2PfYo4b4DVmWQK7tqnD3PdoCWCzrycKMcG37LQfeG2CSktAZdWdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZzmG7UA7WcDtfNj6CW8j4iT2yGiC6bHQvvYydFA2YT4n74SvhGBrx5ToqUZivogjBzqBSf4MHnmfuQ5uMbKbjjb",
  "key1": "2sNfUCUkAY6Q6MGo7uF89mQaHuA5ZF3FBqFPapWMUE5jHg58UWVTyJDj5BUfBgv2yVq5HnRVPoi9xgw3NRQFpKQ8",
  "key2": "2RWo8HphiENydCKvhi8pXmB51nf5vzdxk9zNkaS33TBCrNqTKxQC2zx4SZP8qmM32Q4n5U2MCKLr3apzfwHaZSYe",
  "key3": "2WF2btnhgaggxYGV6WqsApd63ik5Kc6JiHZrr6dUKQGJ2bQQ4HyxaRZveRU3Sb2dAEXfQw1iEhzwdXixL3TUAprL",
  "key4": "4VBSYitWXFQWVPBWNeG4cHbURqHbpjncsz42V4dq4Rc8adsCFunbYtmMbmJKhyFHtdKspYwcTVuyx7xsyGD3HnKs",
  "key5": "2kqxKkKgomLkSC5ubKrCFJJErKYwy7nhdVfRKgaerha7PcpReywxQZMU5HEwJypj9XafQvDdsC1YmbF5RGjC1Bhw",
  "key6": "3HBLKHDLaFYgFVfajy2XPbhBnbbXfUrv7Qeko4Wswr3TvZgfLyjgqRByj5oYYrNkk81ytu5phXqzVrEgieKwGqVv",
  "key7": "h8nYNJnwP8iucPQqggrEBrcJKvhDAQezJjTGh8vaJJMTcmRnrpZ5w1awjJ7i1zuqbqKwvDWgXzmr5vrgV9DkHyj",
  "key8": "2q4WfSsbLTrnoXNhG5V5cvFcGc92Gzfk1ChR1eSGAefV4tHFvLtZma2PAZjncyfscLhG94j9xWTBQu5PKxdiVEac",
  "key9": "4nkLPi7KoFM4xufsWo37oo4KiLfjVD9zvhNaY9tdqD8LTsvKtyte1dm9X9ARzSHGqtmu5Zv2nLnx5mLXuz9NAwzZ",
  "key10": "tVCFKoKVwHZVjeuogkupVzWVbKedapC87vuSGNqzK7L7APspfS9hZ5NMqF2yyKSS1xRoh4UQyxdHJGKH4oASfAr",
  "key11": "3rLEy7XEUwxAff6ALCKygxJFWcn7mgfSQnmUihg9SuMN3HZVrZx56foktKVrFBHd6VDbmbngu78fcwmCaXc8wryr",
  "key12": "3BJ3bjeaVf85WxTHveSShqrJMo3QxtqwauKS94i2oPEBzsNXXnxUwN9xsZ8p4pK39k1fWoSN7tfzzx1M2w11FG4P",
  "key13": "5H6VQGJ8Crh5APcwwYnv8zVMEUpZQojBcRgXt1m1t7svwuCcA1JQJdoPYfxEcXUEgK5rxtewyLEWYvP4Bqf2mMhx",
  "key14": "WBJYEawRQJv8ZKfjBdQpFSGW71yoqvuNxeXHSp7e5NYfyqTRnN239pyEgUheosowXyr5mYihM63DqztHpMXH1vx",
  "key15": "5618yKqmGV6cET296TW2UYkTJXg9dYBoa9F755Lg3Reaw8qt5kmUZVeyMPWnR3DpFdM91Ls92R6hhyyWJi6dvXop",
  "key16": "5UjwEMyqpM5GoYxj8cE17Xh8hSX15inSqosQg6LEeYCrwRQTVETVYqr7HKxmuQWAiX8vexBDmQH17WyvCfWwy67b",
  "key17": "31KdouXrKTBKue87xitGCxdLGn8mo3TLQuFAKaEELWngbFViP3DvVWCBgwt6SaU685x9k4g5ED5nuGvGLRt5a7fG",
  "key18": "5XwjfywYLFAYqS1Se1zkKMcDPo1QFJ6ZvkorvxJh1B17Eh8TV4LikaKmwXBf11SdZtjjhA4buqLZQGpBsZUWircc",
  "key19": "2oRdhtM1z9Gfhnwv8xx6GaRwuLj5QdoVoazcKabTpgGnsVNAAEgJt9RvuUNDF8MkjkvQBJrvskbFbLSviEiRAGUj",
  "key20": "5z6xyRgy4JEuv8zLCbxxDnSgVreHtRRHfEoM1Q57qvcvTrxFGm65vfr6caAZJQByF7Rmg4g3b2uziDf8eJCBeycz",
  "key21": "2Lbbd7aosagR8211vDb3HGnswBNGGLJgVhKBKo1eJAZwUwa3XpsLFoN7dKFqaFXdcSoVnDQTqqzedL39FKde6WEY",
  "key22": "31JxmN5LUFASaxeFcsHYjsiVwZ3n1671Zzthw8SdqM3ZhJqnsH6oY9Dp1zeeHJsseNV71YDAaZindB5Lzpr7UVQW",
  "key23": "6uBgR5rTF2boSQxbBwWKm8WecdgEgT1fDZvCkwiPpXuFUpp9hzV24zQdbYCrxao14vm9SpjDhB45uFoLgKhxq5b",
  "key24": "UttcUTUUNXDn3nny1BAm6AsMs8LP2SpFN9J7gLd5WDHEsapG3hs4hoGZLbAzUWbbZMDiZkJEd39eMHBguDzuKgt",
  "key25": "2fGHxhk3dqRML9fz8YDXJpR7gTbJ9QWKWBJDdoBMPy5j3wBgc5cRebgNULQmNhhjad6CPA2wSdy7SydcRKayPQcp",
  "key26": "2gTKCZmrJmpHAaEfDPZjqqxXYs3THka6W3tPWgnZSbv42GMLHkESs2DtJUXF6qJuyz1P1HuQpHmWL5VHA93xVxJo",
  "key27": "2K8puPkvBdpdJGL1P3F7D4sheRqYh7wRznG2FP4VA66yvXmUEjj8LZeoscBCvwtLwP5zbduR6cTiG9DxkyjvkojB",
  "key28": "QgPQ5wRNmtXHNps6RGAFzWfBbAEuFNnek2SwgbfMDNAmKpKQcTHSzgNRSBeSkAUYDnwzAMSdWvoWBy15hv1kwde"
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
