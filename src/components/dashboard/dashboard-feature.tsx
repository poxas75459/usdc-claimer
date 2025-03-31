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
    "4ARdq6rtt7yy7MD9p1E6aRNukz9VHpKFpdhBVQBmHXHQjmoVyqd6rcKvpuWd6jnS7vWZ5mkQ4MsdUYLwQPQo9nnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56iHLQcfonvZchNX3BXfPCQ3S3Sp4RRA4JQKN4vxfJkNqTB7Wg5xqmaHsccFBHocgp3ttBoBxuddPiDbjwBv5kfF",
  "key1": "3eFEZ67Koj8629VKYxVwbrHrhMgQhLKatRTTCU8zFGWmPCDmXie7gaNjC748kdsDVgtWuuyWbH97VK9dCpRqdMLS",
  "key2": "2xboxZyXgMYzrtA4hqcNyStx6mqJKmHSehyPyZqWrgQCqAEaukvjGQWt1cocBCXDgTDJxpmdgeYGAFgn4p9kx13L",
  "key3": "5d8s9iHQsC2dGY7jnq6Wt1XLPgMEAb9AoFLMBhdsGxLoveAFZM3sGS9Xj8c8pZpotqMAEJGCVPok9YhBY2DHKyob",
  "key4": "3cDZUUWErm7VbqxjJakTnnxbFRJfGNx79YkoksTnLmwhK6ABgZuYGiDAQfAreXyo3VvgrG3YAC7i37opPLU2tPeR",
  "key5": "3CrNaoitb7HjnkTrPPxe9CxYy4W6tDM9Ygd6aGj6nHQzsnhZCy8Nt7QNU1bGiqCsmcWB3rbvs6uT7EyFGtn61xRL",
  "key6": "Va5U3xygUDjxHaLhk2hJLwqdcbdfQix7fV8Mdf7hRJzRUio48rJgUkkcwnM3PvgBCBL3XELYRzWhm6e5dNnqmfB",
  "key7": "5tMcxqkVEVNJXmyJ42nTXThgHbZz58EqAgQqoEZDDrY8W3DZ3Cc9FQ4f2FcGuTqioB67Uj8tgMjpJcUwjun2JzVZ",
  "key8": "2oWu5ycA3BQqa837LhLRxC2UhJtTF9pPMrJN4uNtETKw9j7WV2nS38ArTw6QtM3ZHPN4sXhcHSCySXa1o9rSURUx",
  "key9": "2qQuFCaxNgfiX7T8WqbvMvenarfHt2bJEhW9pgqGx9tnVm8i7rnhCnC9RrPyKkfVeJanNF7r6MH951JqLiVmJeRu",
  "key10": "2dEQ675x1ony4jRiMYgzK4tPX8GR1zmJ6B9kvzbAzzxN7HpBxBLMcJAzQLVKMNZessJ3xtcWQCJYnFJmGQKQubx7",
  "key11": "23L2XKiRsD8XjGQSEApfnLSCZ7LYsABzKXkcq8pJpxRkTyXxpc7RREhXWmQL5eUky23AS1PpqCUEs8W9wP4xSwBT",
  "key12": "SJuDwRfRDKSfWZdUkBZg67j6px6LHJJWe6Px7CJShTcKVBUNjYkBFy9FdgesJ1JcgUuR8KfjvMm8RNvTzDQ67vp",
  "key13": "3ugoReJ2CM7ctLsxEJJ2eKzXtu4rhVNGMbz31r2rzKfe5PY6zvLk9fE5YuJWTFMHMu2BTF1tq3p4Y7SzU4gHvoft",
  "key14": "4Ua6w2v6KawcvwHwr5S38q8x1QsrGYp668bBtMDSdamMHCqSmt7KsgNEUpAiHwe6GFU7nfneEHGC7tUhGcmiGhGe",
  "key15": "3rSCG3SQUaFUYyTzMfPdMhweUgZ8wYV55ZgrFwtskwQ7aZmx7aKDxUhMCqQaE6kKZC2N1WqS33bGAzcNcvPs8RuZ",
  "key16": "3K6aVAqtcJrgzY4qBzLy4ncnfwcRiMb9z5SYrsiZt3f4FAQuVVCoNvfJgy6ovRUVkujSxcpoA41LsXyCJXJ4yMDR",
  "key17": "51UsdgduGbpX2Sg275NdNxebq9yBQ2aVwyXBMZVmKakPnDhaAT3qwMoZ3XhZVbkRct7Xj69TkVWbrARBm4fYMdoW",
  "key18": "2JFGcpVXyLoeohYpycXNoxPLCuQiZejUit3ReFiKod3qZEXznRifoSsBKuokBpV5Se2SebfFKbuaKJg89eNnWmst",
  "key19": "42CtRt5PHeC8ykuvVsymEwK7xTeaaPrWacvQSBJLDuDEMmUTWksZc1wM6pQU3tsSYa2gHnh21AqD6CAERRDq64qM",
  "key20": "62RAjxsT9DHPoSYGX6viaKJQiy59FWqeNadvufsoHwVaY2qAaVZpVLdRBYCdjgXsdbQXq9G2UpcGGXr6HruZsCun",
  "key21": "3vKgRmZnQ5FmLy3Jh8cU4pi3ytwKF6JubuLVEWHJ7rwRmz4PXixZKLRi8xP6ZaXaxTJpYagpbVuJoxU74GRPduEB",
  "key22": "3maQM6u8QZsfH4MVQ6VWR8QWeNGgbigJpdqKTbJsHPvG4kpWYUgatAXoJvX9VZNoDz9SDCKX8twmGz39e68ReXkh",
  "key23": "4kk473DxStAE8q2i2DHhom8fQr7YefX1cgDzXLzrqqoCNpPNdrYq6UKf8TKivxaMjBnyvW2s9G3Q9x9yvGRNWmwU",
  "key24": "3M9GkadwWjFbB7k7EWL1XBxmv6ZeFhopXimyWG5Hbe5LkgmmMeBRBzh61QWLjPbKjKzQPnGWbNko6YPnhybxLEfF",
  "key25": "5kQUpzS966mKvP1kqF853YdSnxjVHehqnWRZzaaZAUPaBaZgvdmw3LMQtDg4j53WkpYhT5DmW5P3iWAEpx15oG8V",
  "key26": "YsZ6ZyoSNv9nAozJ1nA6YBuW7WpBkkvCBRRHE4iyfThyZ4Nm7r9imJEV8ZtZvUrJ9AmKfGiQfQrFhuhAGmP5EeK",
  "key27": "3X27jCTbgFUGfNPTo4xsCSeGxM9bgguKRzHdUigSqTqioCGnb2BDLCdH4phkiL9WzAanShpLdSbR1ipFTQCVRDQY",
  "key28": "3eq5S8PkoveVEHwj3GXdnNimx2aKDR4eawhKh2FYZ2UV7USuyRnHrrWUfv7jDGPtWN7Gk8P7KtBgjB6adsern61R",
  "key29": "3swbxHd9HxPwoGT6gHDsy6THSfNMtJxusgUeJ8cjx6zWZ5MavnSx9nHeSKgZrpk4RMCFpwyVvDsocewWUmJbFWF3",
  "key30": "57JY7Vq4VCz4yHLLmbYSrASSNfgB6K58GYSScuRCnKqKEHkv4jTz2eY2D7GQrJfDDxtEeo9vcjqsbqkiibaBipH2",
  "key31": "2NWSzWGzjppPXtXVk6QnqkH2VHLaNsehfWdu2vJgpjedsjP8JfnBnMRbdt7df4hq1vzjU4bBTnitbe4nwB5YrD6C",
  "key32": "zA79MUt696mZVQxDGuxpMj9ABA3XRpiP4QmfLcaj6fMY2xn6unGsV3rUvstDEyQNsupDeWJ1MNCDMuGSXZeD4ex",
  "key33": "62adojcEWTeKzccdB243EzU4PEy1P9AbC9gfH7bBc3LdcACNyVCJKrerHkmQ1qikDiJn7fX3Lvw6DSZ5arP7eEpn",
  "key34": "zmjozEy6nxcXzmaWznhmNY8eUv7Ek6gpTANuGw8DUAMuSC4TBtm8Fgt2KCoCm5cEmHr3nCsBrYvKp3AXU2SJGD7",
  "key35": "2f58Pn1njk5cEcyMJ25BKWpiuKauMqykEaK2aTxNSQfs54RyR2gVYTYPPBRTzfvJsQ43awbJibBUAaJadbXc1XGJ"
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
