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
    "4ampZyMtdZvsVEXbyJy5tXN3Rktm3w2tLXjSG7snxXhtbz6kWmf9gSPKj9gWWk8AqCyg5fF5bJXtHnyJkQYcxzQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32EsRigDzz6q3g2VEJ17m2yy1chTVEApjpZD6T4JMprsWCgVcoKTAHyEWeRQPyFf3ex83deZ7G8Tk8DdnBBZVkgv",
  "key1": "53s5PcqkUAGSbMtf8GdHynWmuuARgUo7XVApvbF3BVG2Yrt4rrxAon1b4E2N5XfZRa5rCQGkTii66RkF3sLsXygC",
  "key2": "3iMax9dgYUfW4674w3JaKiWbDTL4hBxHhRwUPThUfGYZpoUdWCmVJKPtheKrtodKBftXksVkWfDWPh7CZP5hU2Kx",
  "key3": "2gC9eNRpuGknY2X7pwcs3LRyALDH7aximWyydQLoLauLUtw4hgFuRMzGsfLJbVaJvg6gV8Nu9uD6vHWaZyWSBGng",
  "key4": "2dVjcFkvZaEFDbPuDBiUHAw4e9dvx1MhKZkDWjytwRHJTMZn1DDT2MeVHTbo4oZRTF1gBPFZsPyg27uuCqDAc2PG",
  "key5": "qehL8wjwZtxcG3UrmPvKRKSwxU1ZRyJ9UjUJNQ5EsfqKKwT8qxPmiFsbbR2pKsJBG68NANiJzaAMgzWifH9jY2E",
  "key6": "4VWaEdMiTeewMQQvYD7f6QXfHRNTD6YLk4xWpuvWjcQxLWKb13FWy9D7LnnQvA5psQthvmVtUFXMQVaySogmbr57",
  "key7": "33zaPeSSFgy74DYFbrxH2azT5mrH7nxuWB41XtwPvaMaaAvnp5A3et5Kc37SjKwbmVgMP4mQQaPZEPBmZHV6GMW",
  "key8": "5FDMcSnCAk3B5BxDa6jAoAaxE8eyTJtMgCF58CNATxiMWVyXbbARx7UTssKFqi8x8n5sWMCBMKRhJiA5CD31BSzo",
  "key9": "28rpuVabXQKPM7Z9uM2FVeHcao127vLZNY1h4MiMJdByaGmt59jVJiz8hcvnLSKVrnKzetBsuwHNtpBcwN8uWYzn",
  "key10": "Qw9VcbPFfrhxTUanzRHNHzExFdfmJQk8jHQSVxbaFzcPoKaFqNEAhZGSs4t89tj28vNsNLc7A6mXS7BS8at4FoR",
  "key11": "Mwj62Ad7DevZXEtnzU1atLdBwxrypFYT9Q21h4ihrGrqaqiHvJUosXKL7awCG7KcBeZGgJYiqCdkibnuGkDTaKz",
  "key12": "5sUDcJea7VASyotKRnZGfZGGWY672E6gRNCTRs9SgezWJqTmUyHEoRRWGhYqD6WEpyiVTBHrdRcQrKRwXt93nM99",
  "key13": "3ubNR7jv9gqH9QeY8fesARnQZX5AjJ1LSkacYSHhygbDUFMQqp5rAjyq2kHEumyT9BpvepiRK8RqNcqqA4h9fm8e",
  "key14": "2LJ1RZf5VFi2byGGz6KPFW6jTtqu2torJHfQNrTqLy5PVzmhRAW8XQkZJW8Z5rMq92nB8unbBfYgbDVsUcUreUPf",
  "key15": "NSuisV6p5fJiamiDKa3oB4k9qgAyd98p9t51Sprq8ACxcty5XPJWxn66HnEqshPxxFfsYo92hto8z8JnGW3qoH2",
  "key16": "4rRVw1993Bki3CytAudpT2tL4RbTmbiAiQo42xtmNiUk9DLwyqA4N124jteYMnQHGg5dpbPu1vBK4fJVcXV8r9uo",
  "key17": "868mjoM5Ac3Y2dDDjjDy5EDwY2M3jBz945Kbv7Ak8wU3jYTaJmunoVtNNkpXWfeRkR8xdMQMqDSuvUMTAnv1bQr",
  "key18": "4x3HbhEXLj2uJyP4jWyArf9tyqUFLTFTWJchmpVnvvzZWgiSwYUzsbgj6bjAnYGstoJ2YUA9Vv3nKrstK6rfxjvT",
  "key19": "VC6U2yvB31GFW3wDATWdGNpotDXmqU2CdA56cegpbKSwEvaM5K48BkeoyvBDXRzJhY2J61NtJk73qydN6zrPR8s",
  "key20": "4uRe5eyvXXJBPk94FtrxJRqsFBwSQJLVrmBkc9XajKr45nA5SofLAQM9QEqmYSU7sd1tPmC7jw9NvNVxB26fTnmA",
  "key21": "3GCnMo5zAzYiuYAhs1H8wHsXcqE6EZoK8ZkzJ8e6eaHi95i7X4hF9j5tPtinFquLK5HekVVHngKAXdR3XN5mdxRA",
  "key22": "5HYsc4Ca9ifBHcLcE3oFhFjusbot9NCZfNopdUaDRPTCo9zWbPgYtfqQhqreDxmprRQdX52kBzFiduQNJTFvdqnE",
  "key23": "3kUCBTbB7B5s2GiqerdLWbB2rAHmTy2KBerfwCrQSgjtCtBopDhrAUMpzcB3cjkg19FG569qmJCGvVGJDdaCyK6D",
  "key24": "3WVG96S37ojDC66wxe54nJ6RyxNKh8zWBaNgzskoNkAkCuiTjRkU5pXt45WNQgbaUbX8z8EYHN5EdpkEiYQ2mv6z",
  "key25": "35HYm1t6BGzdM3FH6vBjXH8crxeJv1hUqpPeWrQUsuQTedxZJ2dggiorw4Kvm617HyjxyGfqECCiuGbfr46JhTDH",
  "key26": "4Spp6qBjo6ndSbXSWqEGQcnzwPD8ReDr2YBv1pUb9MHqDetY8Ta3XCuWymiLSfobN7F2Y8BvLAE3c8KyveGmb5dQ",
  "key27": "5imVS8PSyhow6HMiUtq6YUVC8Vin6ETfuesav1efWSybdX2FpeRD6nZN91B4A4Q5FipcZ5iVqxayTV9wk84PUkhU",
  "key28": "4QDdErB8caW2BoxUzToKTV6mQBmXo68i6pjHn49E3mTueLjZ7tkSHjqBGWmX7bTk7QC6zE1UJuiBMvjqNkKs7pr6",
  "key29": "3GVKpM9EpqcpWkCcTaFh2vtkPiki2y4pMszuzMhgGnMgkmG4TSp477Wx77D3Sv1DPRJc6DNReBJjcrvsog1so2cC",
  "key30": "dd4JnbiVkf2uktcDQz7gozzufA3etU6HNtsvq2ioe4B879E9u9Z81jbyvbzXSRq8MR4JNUsQfgJLCrfX7Nu38dJ",
  "key31": "33uPyo3qXGG1MXP475dN7cSwmyPyr7STKiEDPD5rzMtpudrqL3xNGYV1vnymbC9FAwpH5az7JNTyVohKM6R1wsnz",
  "key32": "sehRa8UWqgnZyqjopowTeQinA8aZAEEBRgCLHYSzLFPavr6SSAwLh1WW61NTh4cmVWr9tjcoHNnouipq6y4Qfzz",
  "key33": "2xkREDPskwKMXJiNrPu2DKKcU4boC12hHhJ3V43UDGkYtMNHRm67AQrkU1cRNnER1bWBf3HdSxbhTfmh51NvBYZY",
  "key34": "5rpoKjbTFpjU73Agr8Fzdce9anDuZvQXNEJgsomVC57oMyXxLybAt7HYmu5QrxPxFmYHsuDYo1DfBUspo1rBHNr5"
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
