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
    "3SbDfyrPqNcPKaT7Bd5pkN6vJFQchZf2KXQCaYt6DWLZ5xfMAbCMouPyDJMe2dxZATTcthLeoNtTNUgvwH1Sr5ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iW6GHHtP9J4xKYeNpmzAH33jGTNCZSgxUeN5HnNjEuCSVUjecF2opTXqFSYBdT7fo9E1z5VKepeWQ6SjHiHeTHV",
  "key1": "iRCuUJbKckbtSjqWpHvroC5fiD8XmXQXMb4oS3kozwkSgq6k1T4c75mYbwgXq5oGV1dHSkuNeVGVvb3xpVQZMR6",
  "key2": "4vbGz96BCf6jQ6FQC8TM43NwykyuejHfTaGJShuym3XJDMn5H8PMjyP75CzjTMcBUikJUQiqUzXo9bdvc6MtdyNG",
  "key3": "5rkCrzzr1wcAbG8hiRV49rgkqXBoBJAVGHdnB93YyGo68sJpxcn8Eyd2yYrzPA4wZUMc212PUCYbQpTZwwhyBsmf",
  "key4": "295tW4zFjfLjGKoUDqQvFoRdqPhck6ZyN5w9fqoL4JqTReKrREGi7NUB9nDbizjuZ7P1xF5xkzzVpBeqFcLVD6zH",
  "key5": "4NBdBzK99GBDxBX6ZKTYisGERwHwen7AMY2qg2kJkBN7Z6dK348cFcCH6N6ZsxXLh3TNGLTfCCHBAXJGXhm2rkc6",
  "key6": "432yWJ3GsJ4FppnLufHq1XEjVthp9yMpCJiRdRbnejWjobvzdFXawSjMrPwCyHuAzF3VdKdgjQohgf7j9aze2Sp1",
  "key7": "3zGTHjZWCK1kNZs1nJkQt1zdTaMzUQY5WAhNgVe67WLrR8171eUC641SX9f3pWQUhhVeG7XHKtoeGCZSHUZYqRPQ",
  "key8": "WyEzoLTQhHaiMsqGYcZd59amS6XU7yhJzMYKNdax1B4iiCAwYek7WR2FKyE4CpRtMLGVSy5eabBcvLqMsxRG6SN",
  "key9": "muhEYHkswEy8cX4SkB1HtdsAMY27oXx8dQZKnjvKswqcYKZCkg4Cr1nYviCZxjgqjUxAHboMReqqvacfyrN3owh",
  "key10": "3dWXQ42DyakY8f31DhSKqaedynR2ifo8Cm9UfDhKfQMbrSBUUbtfKEkDQP4n6oPMXjgp5VCfofLupG1CV5tRCTLd",
  "key11": "2GanrBQfNMFGpNDB7L2Zw8ngeFA4nZ4iq6qq4kCpRZ3uawnjqTtmg9nFFZQaLAzvttmDUK3i95MAsTaBadHRmqKr",
  "key12": "5NvHmq2QWmY6kgxQ3bWJ6TAApCfaF2UVnykji3qYDGecX2GZxtK1z1dfBnxQXNgT1q3xDB9FBGcTcYm2eE6kfiky",
  "key13": "5oKegaoKJ9UGyUfYpeXoMeFAMU3nA4rw7ZbY2rEj5RaLbvjJc9JYYkSTYHEKXsEKXdyy562yhgYpgoBw98NT2syo",
  "key14": "2DLW5zpCkmCUvxT5EM9fjgxLsnvWe7xuMRK4bM3sxAawAczfCgQXFLDTj862pKPUTDRDdLcF3BshZvKM9oDvkq2M",
  "key15": "3tvgDYAPcbJgwzVBhbg1hCMy5aSWtSd5e5t8kd6M2zveXryHuuuVBiohMv3AKKeduUua7FPTgLSAMYj9sP67ndmg",
  "key16": "5e5t6dLdYH2Wnzi3kBnpMfC8ggHN5ksqbHgyuPJXyovkykP5XpST5Z7s1R2kBwHMah4WQzii53kBZEbKCqRc7PhX",
  "key17": "5Pu4Eg5gzkoUpMcYPmzeoxu3EHfGRH8Wqg37ihvG3zwzrsVASmxvnoprqT8pruqpdZvkVHN6r426tMAqRiKYhW6D",
  "key18": "23zcZkM668dHrqVP8EysaYbi7aEpAK1CVBBqba6mhYjvyrav933bJoWVd5opZ2kVHzRaW33Sb3HGmtY5JBByGoBW",
  "key19": "2euN3VEuHtbT5aXusw3h5yE2BFRkoj678AcBvm4822inRZw1RocZr9LtusuyMHVsG9rB7PixjoeRPpZk1vSbUG1h",
  "key20": "5fdekT8d1xQQmHbwYeCbF1HkBjidM6bsmKqtaRHXTT2tgXakiyaQsNkwJwg7RrN7xtHV1Q6HuYgEHgc9vMW7TCUq",
  "key21": "1FLJ8n4qGiXLjYurncCTTERS5gBHNgwxSGkUydNyBCz1YB6TqzcFN1pQqe1SPKqnWg8cMV2nT3M2QRNmhkbTxGL",
  "key22": "5TEyFtXAbez33AuaxxV29MhNUoL6cPyRnn7mDoMfrDCD6SwhAkeqY1jyUbTCKknU8QDjXBqARdkwG6SQnf4AmhpB",
  "key23": "trgKUrhiHeBcjUmXJpQhMkrmtMV5ti1aMNvSsgAiwrzfWZti7B9dactssFKih3h5ziR5iN43s1m3wJgYweqJNXk",
  "key24": "4ZUo4F1tBEJtR6Gxv8FXBXdBQZ2ciCcoqyjFFLzVuBZzmmAYz1GxwRYyXLvbG2RyyfDjqeRFNPufofXToP6tPiEo",
  "key25": "5NzfZfVMYgHXre2NCweGMVgkHWHp3At9hKciksGtjdqM86NL3wgRc3VDoyABPNNvJ9oDLu9YZrQ1f17qJ252FGn9",
  "key26": "2FyDkpKBRPzadW8wESRi8JbWif94XwCeWXxVrbnvQb555KYWXzdPmrNRJAMt8w2t5pvvA5E1h879krsgeWBLm9Gu",
  "key27": "VfYD1HQLrSaVLjrWKaQ2ed9ce2AUggU8vTtCiUtZpcodQ87zKNJiGUKK2yCWqxWzn43SdUjFep78UcstuRbSXar"
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
