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
    "4dEJna7PBWhpCzjpojDZBDHtXJxkUcJcnWg6aAwDWEJwpvnVepbw9b2JRxWvRyvnJ5JRsh4dyvvzYFyGyPVXTy8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYwCXok9tbtg8icrweYEypZkQYxeQeJTgggGdbx1aFsQHZgeUYKEi6VxMrjCt9QDt9a7qWN4QqrikZruFoHxYfU",
  "key1": "56zJCveGs4D5fH8yoMoDCBMaBaBQAVvu8t5RFxkWhosksJH8xB4AE1fGauQCsFca1M19UyEEU86MvcDH7yDbfzmn",
  "key2": "5Ch4rjWNEcLfonRquGA8XMH24ngu3U1G9bVmwiyAs2nEHgsbc25fkvge7Hka4Y25G8ow8PW63CJTVHHbjvShhtJ9",
  "key3": "8xx5wpSZ2HdH9vrrQEL3tRBniDdt5jqwdy1eWeqcUuZ6dZcCCz8hX2czsiTNV5TJKGqycaJqwpMzXtMnwLqgTCh",
  "key4": "28MUNVqjwanafZ1zMb1pEhbm7QzLJCSa5jM1A7NAVmBf7SXjuzXFC1p9vKLvzEv3HnJwoWA8svLCJsN2x6kGWJFJ",
  "key5": "4Y4LEFVyCzrAy3JJ5MKT1bdCKBoVaY14NAUd4um3wKsLE77hJ6P8p914UaPwZ3UDywatLWQnbpztoJVL7t3RyWmS",
  "key6": "5jRjGQq3S4L98wJaVGgX8Hj8auTVqyCXdgVKMQ6QSfXMbr8UfWYkX8TZEbwyFRaXFYzvJff1nF31HXg65BPHyWqL",
  "key7": "3wP6wQVoNxxaJfwj9g7voxhP9wYGmrkq7brBx4cW9MBgVkUPw9G1cozRNv8MCYyL2BZCCwM6RbPjY4xhjavrGJZQ",
  "key8": "3PQ22nddRCa8eNEjnyA6GZK5TkGBBtmY6aciRskUPuGVRMhTUJcTCsJTDq3zkq1BUWjYBktv2gVKz8nbkJMXBhQV",
  "key9": "466RoxJa6YuzbeJr4fDMSQhSTUB7VnLtupVAeKGoQgBgoBRUh4fd7KvZvqZBu5tKmDU4dwi8yLD7wzqbdAwkjen9",
  "key10": "3TgENC43zA4wts6Xjuo9r258bji8Ly4qZaKNgwd2vK9R52uGnp7hwFRAnDLksSi5AKtjiXKc1YdB2LDMjrzWGEnZ",
  "key11": "QjA569DMDWnKJEAygZ6qAMB2vXPEfYeeJza12krtarKjcxq7S2SMjgo9APQuaCPDa6p78LbhbwZjBpqZ4HkqmFh",
  "key12": "5mtbuQc79XtoCojkB8nvHjf6R4CjGa96kbKNyTeiT6WfY8DTKypbUBEQHnDyXs56LiQPGxYGQX1mpuUAwsM4jyDv",
  "key13": "YvSr25MGd1LAMTZ7w7rqygaRkgzDR7bTnYqhtAEB6B584h1tXC9M7VX5rN1VZMQGY1cze2iXBsKJk1U8S3wWJcF",
  "key14": "mYk4t4CPUDVHFGgHLNu2LVppqFbHqRc32XoUjyr3stXone9EfLZWRn1rQiEzZ6nxPuKVgGysczY3pepYqTQ7xkX",
  "key15": "2pp1QRoKib8KMiFY4szmULQbEK6nh84bTuNdUUTvXfdbEQcRZGj956jFZ2f7TFZzYs5fuuMGZc8SkbCKEpFhgx4S",
  "key16": "2hoY33mipUQiHp1b6drZpQi5HHjirHX3gLwQQd8X1JgfjuyEP9TgHYEqBT2j4U1X34p2eUWZYG7eyc5kNBzfGyxC",
  "key17": "2CKmhPdGwPrnybcqRwWCWAfVyr6Pun8nVGNQYqqnUXzwgZ66pqN8vW86cf33wW5m9QoxYZywDBfSSqrXmjzv9S6D",
  "key18": "27oFJHC91xnsC8fmaxtM4F92fehFEAJsNJWDFqnn9gRh4Hmu9Ffx8A9AJUuaYkHV2QJwMoiyL9GrHejpL3jzodr9",
  "key19": "2wd1icjqeBBWk3cxD9CivJHU4eQSxBj3PaVGEfkNgToiTaN13iQSDNzFMVywE47yk59yiZbQvuCaWKU6venVabZY",
  "key20": "2QWL6VQKYyR31tgKbPvx3GWVds7XmL6mHo8hUy9yjPDaUuQqhfRs3kSGPTH2PTPX3Gh8PWb2t1bX3bijxqRga1iA",
  "key21": "2wpHHiK8nGC6Mz6PagU8J4qBX2eHUGt4J7U4FAh8MJidgi9Qoa3M5advjoWhiPSA2XFWX8gaam6Cz3DDkxN8dxo4",
  "key22": "Cgw2nWUgeqdaYLpx7xDzhWNXjQmYTJwV8YY5KifJsvjqYNbnA9EUdBf697a2hzckz6vxFyhpktbmX8g215gHeRJ",
  "key23": "3JeinbRBugws9K9Fr7bhMgvooLMyM7LW8gkB6s6jc8Yeg6pv98rcmiHx3rrDKGCGGTzM1fzSV37yijg9F24of1T3",
  "key24": "EqGi5WzULFxaAVSrCQfjg7P8n5oPkh8W6pEB2Y8vi8dHftUZ2NVNeAcy9JP9tGMgtmS6F1DRkJBWFNpHy8JnvZ6",
  "key25": "4ZvpAd9o1ifVb5LJG6Gy2L2h4CDJcEausxj4WLSw3adnjZGRty6LfZoEcfF1bLJHpTVKPzS9dScpVoAoHtdQvjxG",
  "key26": "53iMHc3166vWvoAWtsoNHHju7iYTpd5aBQo57i8arjbgyxAZevS2rthR8cPEbFax5LHbVV3tnSYFPZStQ8aADBW1",
  "key27": "5LKU9PrXb6HrL16tteB4bTaYWqBsiGXZ37GdmuuJgMYW35AQaLQYfmaEQpMCRr6Vsnj25vXF6JvHt8cBxQsNUo1s",
  "key28": "qfNok6efKGQ48G8YKfzTKreuDdvCtFThMnQJnPpeETaugfBikDhkmAZ141xG4esnLaqTMoCtUcdiyTiFSL2JVK9",
  "key29": "4g7yCMk2afQfyDfLDnuZdcc8B9GDN4om4tvxEm3mebWEjkEMc7wRaEoRpqtNbfepyopSJXdg8ic33FmHg4MnLuA1",
  "key30": "481bHZi1eXtFqxShEmSCrY1B37BvAo2gRE6E87BiD8JEQGuRPEfVE2yNFZDDpfnCizUUXuRauC7S4vnzadg4W8Gx",
  "key31": "5dq19LH2RT6sLUAPvygSxAkeV7BTo1D1KcBhRQR4P65uneeQqt6iMZjKGoCRBYaR2M88MH9hALZyGbvfPZq1ehgg",
  "key32": "CpkHikTDRffzQwFw1axikGUSyXw8c5yBY5PBAyjbAUzZxUmuVZCdnUEMyKLQKshuNXzPDEBmWxfimYRASNVdHmY",
  "key33": "2rxAsD4QqzPhJWyuvQZMNXFYWfG37vQZcyTZjH8Dab7KeaCsYYYKNTziZrCP4sYHHi55r1gquuJEz9jVsdsn1myW",
  "key34": "3AhrHYejBsGsTSK6j95UwCYBo1f5iKtWcLzmBv2cq6a7qJ39QR6afe6vA97PY3LnnWxEUMH6j5iqkEEdQ2GctNxB",
  "key35": "5sVXQyvw6CBC4BjXSefqHC2WYU3D9vxtUwak63w28CdgAu9ZLtg6M74awh6ao6FLjvuR9ZivDpT56M7Gm46ENGdc",
  "key36": "jfFQ2Tjh5Fku2tu53JR9R7RC9j76LdncosAWvSTzezReYcqKpv3uJEhdhvTDyLYkdcxhrDDfpXHQEgMyFXwyNrd",
  "key37": "4o86KNY6Jb4yV5k8uM9zRF4yfbmz4MdpGVVDBfpT8ifWXkiRJ45gwz87QswAcF8ugJUZBfZKo7DTGsjPTChrAS8x",
  "key38": "3EXfqAwFHVVRhJBtBRf3NUyhAjJENYSzhdcwHCTCRC7aJ1yqNqDsPnqJ7kPKBoKBfB72Ybmq29p4veWsqsmJBUN4",
  "key39": "2D6PbH8c8ZJKyDcKiig9kDqa4XLFqpRmTdn1vqD94wQfSqyxH9zRGkg5vKR9VUAp9AtMhCPkdtvb6jFMjs67e8Eb",
  "key40": "46jM2bQZkk8iahCTgieR5GSBXzgxXWZ66W3ToKwFr3EK8j3yEv6BNVjxUWkBi4r5T4rUoCTMopWK18DPswuxkMTC",
  "key41": "53fmmc31sQDMwHHNu5pG2CZNupE3zBLBUBnxq83NAufHNhdVcwtueECiHkmFXcCYn6LC5YCHQ4LFpp97U4deh6SL"
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
