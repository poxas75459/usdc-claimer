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
    "26smwDEmn7sMUxC1Mbt1vexYrWFjpzWCMWS9T8RFDwPYSyiv9KWN18UMQgUVpT5zpwghfwuqHYJce9KhPqEdMeE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ek1NEebX5NKWtNa6yZdRyLXEhLKjK5TZGfQHbzq3Tb9qDqWuNdSsJsvbcSh1kTTJW6738mTNfXBfNR7EftE9UtX",
  "key1": "67eVtoxcH9VDVdfExnxq5geAVevCa8cYJyWteKXazvLFeNnfvN5DuoLQtYSDUXXGCLK3CSyhKHLy7zwEVYvH6zvt",
  "key2": "4bjcU1qN8D8cZnKvNJpa2HJf35eHmDTrXBLfGggXej59o2NiYz2ZojCjMfBnDXUnLXBwm4hUPtPQKjfz2G99nr8d",
  "key3": "4ed8pZQm5Q385jg2et5hYrpjoMV8yXwVH6F8ZPXNPTeqkFReVH6vwnsRwzTCazZtYMr94L6wRaGpppN49ZmYwKqj",
  "key4": "5MHSjg8TPUj4ZUNdSyULS8b3EQzdRwXCC1WcBWZBb2idaAV7NQQDsmv6eaqUy9NBKz3fwP7wXGfyYKEbcFxxkV2q",
  "key5": "4erzAaMrXAfbwsU96MMf68smjimQJumeaAYXHeYCirsoV1sNHckDn4rWRV1RPAMUdRWtCwhFy37x6iWurzzb32at",
  "key6": "61TxCWv4t5VyQoH4yKm9njkageQm4C7GzJvSqMQUkZ71jCff5ebpf5tYBqQLEXzUDqLgDggQMqVUWaToYR44LFqt",
  "key7": "2nYxe3BnCG58fdgdCKroJyV1zE8YZjnp7EjgrXB4ATgAH3y7n4cSuB9RbnydqFqCVBrUJKEYcnpyv3hBz1hFc3F6",
  "key8": "3o5STfmvU55wNhSAyZhTY4RS4ZKgnsqxPC2pARoyJhQhbXxQyDvFNAcykVeDv7S1ouRXEgH8xG7b4mB8GPy2ezJN",
  "key9": "WEy949xm9sffzDDY6ZpgsnX2pHk8TtjpC72CLyWpnhX7djaYknQnqp716es9kt4q7aqKvhpxV3cueyYaxmmiKYb",
  "key10": "32E4EuRvf7SqmAVmsk13UjvUDvHjcFjQ4uAoc1UyQqFYzmufaruJR8qx3KJbySJLuH3FGVMqh8m7HVMjbgBU25oJ",
  "key11": "5wgG1481Qpd21h2hUhYfksXNVmRpxqNJ88BwJGxpGa2zCbF7KKqJoTdNvZHh3q1horNgSqh3V9bJ5BHdQrSg3hUf",
  "key12": "28dFSYD11JTjGEuoV6eMLEYu3SGZCM1vYKV27ACPc4gGaAszgon211yvuVxVMv4Crxo38TsGtetcHkuqWrTHXKRu",
  "key13": "5VVkBkCu3yG7Ccqi7gg4ZxxZyc7yPhapW8ur4igXTUsHvVyogeRtCDt5mByR6QinBanjiVAEGVEjovBBdr3MMD6J",
  "key14": "3jTT2zrZcXLv5rNiD7BDZU1SuURjEy7kHsTRJspCJujPjdicKQW6GeUoiB7Dq2BsewTJrB4JDmgk3NydjfHXRgU6",
  "key15": "4c24k8cTruQFRTq7MFGnCWTY6jwkNKtASc53CnkpxP2zbe8zGBj6eYvGmZBTQAfdGUZtjQNmoA87QN599TuWCvhe",
  "key16": "sM2NDdCD6LqhUp3xpR5aAqhhR8rdg7jWr93h4yLraFJJep7dmocXrrn22iJZstSdtDtrT7aw6wtdM7nVS8b3jHt",
  "key17": "3p5FCZGsXctnCZuX81y936k26YnuokUdbhNvp9QTFZ1Cc9uh2Qbjugc1nUUCwAhvsiPtev79H68S1fpucNJENckA",
  "key18": "4jNgW1BQR9UQXr7bWhgHGFi3QuGwZkAeouZRQgD2yNCP2uDsqSJDfuadD5ewLGuusboSTrixNW9mjrvLRxzShQy7",
  "key19": "4Y4FCtRJ5K1RVQfkWuVYoiQcwaqRySL6q7nD2cA5a3rNbAsckrw6bFrZ8jpspoWCVUXTffbdrAyVEzchAHpMaj5o",
  "key20": "Fb9Pac5TzUNJ5FgZwiGbmA9yA6MmsEWiGyLJgaAyDp4L6KUk6vogT4QrzhurJuf67EieDtmSg5eUpzWMRJcGyCe",
  "key21": "4BkmVhpkWHr4bTYgwXa1jeNZK153UrEq7z1fKPJBDBRtfSwY1p7puvYwDRXe2Tjd5pUMYrTv77ZLFMf8hv3vGcZV",
  "key22": "54jxQQsHNEPNevmAwf4okNnfnbZkpUudKPE8f7iL12ce87zzuRcPYsCzjyq3xhFJ6GSmpqzMZSAkyKdG4k1YRjrW",
  "key23": "3MuGaw4pdsQPZzbcwwNV5kg41zbGXBUurY46YY3aXqQo4YgXuvP8RbXNkEEyWHCQ7vYffh5hXGmqYs7cgdwhWBf3",
  "key24": "67FNBygjxPY9VTVWvCyBnPmMXzVytu4iohRuK7NuFrFxKRXJaqenhbfHzwKfqd4vhKERQkJ7owy4dQyNPk2mhrUx"
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
