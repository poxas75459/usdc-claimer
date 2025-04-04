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
    "66Wrz1QAw55qb1pngks74VS5gYjmq5gJp2vfgeu6iF3piMQCWrx9p7k1hLpRmSF5aA8LuFPTodbwq2qxS5QGad8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DRjzJBgPdnr6y4zYE7XqXUseJhKizwEzY2vJ11aX3pDfPnsVrzpSjehYcT9arhe1ANsqzzqQLN2b9qXetwCYKXS",
  "key1": "QWe6HBdw8Rn2m88Bgv7gDHcEJaBWMCyqZsekLH3eLwPDNsK4AocWW6rby2ECAiVYWZw1Nbb3joaVyt4NuVXzw8q",
  "key2": "55QbrvhCb6FoTsg6BfUKwyDzngpaxXgCK4kCEaRj7YAybavns9BtLDc5cZ92cycb9Br5z7rY2XHWFoV8HLRS95zy",
  "key3": "my69apBjy9j27WUzqRQL3q2iZN5wRzyTuZC64q3CNX1MkJubTGmBY9Z6eWVEddz2Wdst1hzK99GrJYphTUpnAEd",
  "key4": "4rDPEznurLBd1BbtggizbhGe6MohMUK15GQX9Tzdv9NqZSL4eYbPYuTpGxAhyuF3aDTUXgLCoGXKXxQw8f8K7pBh",
  "key5": "4fidDAqxKgYExTGDtc5LvmZGj8YatqJ5yM3NsETQ4HvFCgC497bqCDp3jmX7LnS4MgGU3eG8xFjaxrpuSFAACT6W",
  "key6": "5eP5w5oEJJunqRFu1Kqp9oDGFEsRMcsjDbwunM1PqsuWd4ZfHZV5vuQ7eGsKxtMe2ySKiQuCqzVB2av1bmTGc3nd",
  "key7": "4qQuVmcWAKyizkuas4YxhYAcXocxUYWyHsXMpyLxGrK55WvVFA1tHGb3H1JZsE7iUXZUr2SH5iDfi5MaHpu1fu2s",
  "key8": "3pSEGhnEMZRdAoTgSacJBhhhrwG1CBXNW8tRQgQbQtxQXmGnYGdNo2u8uvCqvUtTX3gcc3EuaqDDFAPVv95fEfF4",
  "key9": "3EkxfQXipvG6WhgDs7hycPt9zsGUB51kE5o2PmXrKmphd3qfR9bzHB87XiYqvBqcYLAJ2FVxkKZwSWdkcLuLQCr2",
  "key10": "4ZW7LQD5dGSYJ9fqLv3aQ3rKnufbeMyGfPju9RmKE1w6dFULobBpjiDue2xdUZduRQe8wWKeKsYJuhS6LUNwyV8R",
  "key11": "WsbCXrpQVeAQ9KcwqZ9wVMAEGK9bCcjjBjsJVD2gB4iaoauZCa9Wu3sFFQeSidVy4GVWZqogkUaPkj14wu5D8dQ",
  "key12": "2sG7X3b92DzWk7TQBsvfcNcyJdGwX3NjbSxrpRYnD44rAD29VfSXzG1zpJxdJAyM6oWirppCLvkS5eCk1h611oQ1",
  "key13": "25KfPFuqGEptnyAeeoz2GLoDVT4DSxqrZiuvY691ydSrntjNWMQmCbf1ytU7UNXMTFeQmKb3Ja6nZCiDzNVHtx9s",
  "key14": "32NXmyFufJrNQq94JAMM6cJj81nsYVnWeGCoPND5Y8uweFP2ZdviyjekKWPjcpGfYdzdMGxQbFBA8ZJ6v8Gkkpow",
  "key15": "2sT9dbVjqrpyLRALiTUvAZ4yJJFsxunSz7oSoRzK5SNFTX9eSUcPLmGPkgLA6URNqpscyaN7gGDY6q6VfWJwD9Jw",
  "key16": "5DjHK6aJSKQBiiLJozyg6PhY15G1MD2cXzZUic4ZLisGfUWZP7cYpDBBGahedtgNeyqenRr9UgRSfNah9G6dbqik",
  "key17": "8ky1LzpKEQHdxrh96kTvZ9hhMAX2t9KAEMrdAEUazK4H9SqNG3DDzoqozDZhRqNPSHU83qkk7RRY7ZNjzXbUQnd",
  "key18": "3tkhJ4m3TyieV3jRs6KgXFCmEMXJEc2UvaJKnrsMaRiVVWBRMPkQL49bNL91GB1fRHFWJPLsoWC5a9oBASfpnUco",
  "key19": "3tmuVQEvqSFHWcnH3XFkSXKz43WJmK7ANkadPHdaaDSaPWsmfxwwEL9e1GJLmpcznTAvNkqk6NkjYLHddWDYoN3g",
  "key20": "2Kw4SXHv3ZtmRSYohHGKFqqdzzAkmsBHPa1TjNuite7vmZArPEEue8zpxhGzrAN64yPZGR6wiudtwEZamYjTWLax",
  "key21": "SJAaSVmvWQk6yhJMgbdxjaik526mmfeF5Eq7nuMhaUEnHWCdv6ym2ynWumTLs45V8gwE4PxZxNeAEAB8Ev4LNci",
  "key22": "2vwu1kfqKDVGeMsBCwKd4GeP22TUyYrQ7MGquXq2v2pwaR3sUySvE9E8vDXyLc1eugqVnLWp9r3Ld5xGPG9BL6Vo",
  "key23": "2LmpP9FJH97C4AFp9MBsx1QAJszU3qZpCfaH4imYJ4nfYV4c9YqTJ1wvpbr4hr9YvmnzD8VepwjmRJqho1gHcGSc",
  "key24": "4hj5W9mHgvQaS5VcGim9xYRZGBGx7DwRN9gwCrPF2wChaVWBGXGbRZzHzbij5DnfcZmYFA9kisPq1B9tbHb1wvAP",
  "key25": "2ZKJNezcycLxu4R5MKtustshgz44sq1sq5sZAh6XDbTXRvrNS8agdfh4LFrtWiWda2PjCUQDiz9nAwqYxTiHpzJw",
  "key26": "4ksJd9BLE4VD4UnsEFQs3NseobNFsNe5X7UtSKESTzNjQkPH7HafMFjuLZ78B9mguwFZFW1AxfW8bsxC21bNhDGC",
  "key27": "3HKUfwh5SEGuNGTRmx8qDWQi9FGUxieBGVbfDnC7AnKJ3xYRASfX4DhopQ4MkZzL3kJ1oxMwQiqyyLvo7Sr8shRj",
  "key28": "3DdXkYZrrXTcgWSkXjciQPLqKa12C6Yj2GNXxPSETj8NmVryZjXtdwqKp3Z26ZurPYiAKyMSN84gyi3c9WTfXBxF",
  "key29": "5hDL3RafGqKbxrqSCXLiwwGae2LC7vZmHrwQNrv2X2vMmiLQrdUFbh34eskW4z48j82LspTKjtfuUuXRhJrmZhBH",
  "key30": "3ck5ndyjkqP5vMy66dt2uns3vKnTuUL4cFcGZSs1gZi9KoBaroSWQjQSJhHCYuMvH9dUZb9DBAqtzkUfKW27RKx1",
  "key31": "2CaS1uBBX6tzQB12UqGsFo1nhgi1Znpm1sFuUhuzNC24rE5QzAkhf1Bf9BJXbWz4e8wbrqw8X8dicFHrZfJP7pvx"
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
