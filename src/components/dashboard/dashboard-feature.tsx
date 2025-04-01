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
    "21FEXDxSaBbNY2ApfPSiFAt7imjzPeRWsQoVcsbsg5E3Lxq1yRue2Zu3w6wPjXVdtuf7QjLD7fgQ2scSLqFiZ1FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3udWDhVNEdQdcU8FgHxWMrJro29vKwXUaW5GUHhknia8xnAnnCmZmCqLUTWhsH2ZBD4FLzv2h7vADntsGbN2Mdui",
  "key1": "235PUGYpEUhpZnx6EFTJHZUibaRpmQXrnta6uKiJEuvyrNHHedZSsEVh4mv47SE37niMpytghFW74MsWsHu3Ve21",
  "key2": "5kFkqThYX5o2TzbNA3MiSkqvjvDQ1jv8HbB8HrKQWNcSZExge85gVfpXjVKVjeqNBZcP8JdTJq3Tr5kh6FoHiHs4",
  "key3": "488Q3jZy5Nnf7ET5ATygJ3ptFgnVuUWktX9U155cMqoVj753eic3RzZD5UhU2poc2QjcfAoE6J6NpvugfjrnwW9T",
  "key4": "28DY4u2AahcCyAJXwRQWSkBPRyQUd8EPWcM4C7hakG4MQPVEMSjEVnWQNH7S5GUYYMydAxgAjdpkFaXefba7Mvhf",
  "key5": "3Miu73pkJfiTt81wrKYmWvFVLat4CHUPe6LddFHQxHMErg5vsR1aSgC36PhydJK5om6ygVYvWbwbE6dzqvo35UUt",
  "key6": "CbB1dckXCriSn5wM3ZtnmcyNc5ut83kay97nXivsudDhYKTSmrTVc2w8Dc7CAmFSEfDMwfe5B1Djr7ZoxJ8hUKZ",
  "key7": "2wx7e1YXaT7K6D5xCs7aG43mTLudbNHXpegk3GKba6wEHugZPXqM5xAMN1RB2tVJNajEzjKko1dwbVdkATEg72Tn",
  "key8": "4YWbo32eufGW6vaU6JXmwpH2iUTaM4nCUVjYGK93okXqVyoZftLUpgMq5eDPmD5EUaKNaRTxJLMLkZYnAw62C7Wm",
  "key9": "5R5krdfZunKLXfPxFixvT5ZenMSVru6cFdH2DdqmCk3GzsGi1dP3idwQaJieUMz1nRLqSPRHy5nUMFYNvD2upGjo",
  "key10": "2nEghn77LyUBRV9obFKuJxj3gYtQHjqYEjd8EsYgD4SroSHSgMjiSwVBaCdXzdtAusFjVCgZ3SyBYm6etD2Ryj4L",
  "key11": "3T7BUcj9nhiGyjxEnXcKTf4dN2Tqk8BuRvmFnY4VoSde6RrgcQjp9mSVFehvCpyx8cJovtXsFRhGcdeApn6Y4kFP",
  "key12": "eyQQZHLVWpV62S7gnioTZ4kysN4Ev6iufckAJmRjrdzgp3teRyJtGnWR1UMVBmZ8tWpAPafU21PQPFfmi3s1Xjw",
  "key13": "2DENRaJKCFVZBwTRKYVkRx3tbE81nW36oVEFjhp2qpS9mNnJAgxFLeU3psixzZ5xxGNAVjPJLUeAqFy6EJ9oBVj4",
  "key14": "3jsR2wZZDbx4sgqQBQazNSLhb8feWkqRAYQfyJ7biSBUGhh4Jn1cUug9yiNevnMMjoNMguE3GskxzQtcK65hCnUN",
  "key15": "zgZMRaq25A8i5Ef23pCfrEfwXAheq8TqcTuZrqpW19Fq6ZWmpG9TTkrrQqtwrmZtu6scv4zKYppVsEbqUhvuxL7",
  "key16": "2JaQYVEe2uWUSafy6p3Nrn8Hj21ixgnEvZxnTEcuFPCBNPaDmih8psS39Yqa5VCczr2oFYHpWJfw241nyYDfVCDk",
  "key17": "xixF4w8jWh5rnzadw1fhD8MrAKakphRMwiHoNJKgfX5CzssoDsLbVyNAB9RvWRx2cZYQFgnMVwHRdUEgPVCpYvZ",
  "key18": "5H1NbCYkhJK4hrfM11m2rgy1jq5KV4wUfhCs7n1taCFGt7o4Bv6ihtPnZEBEauNowU6Bkryj8aGcfaAYEUGXukXF",
  "key19": "3gkLZSu7kbHYrxJ7WttwUU6DQjfGKkXqwwpseB2g1Y37Yg4mgpRjEfXsC7KPoAGYqCWTRU2QgH4X8tMu7ijwZa9q",
  "key20": "335vHap4C93LSDGpBmtwqWJmh2LZQi2HtNuB8mUEWdjMdZaFnQaT1qkNSncP85aceT1Hoijz6UeZVcfLsi9mzaPn",
  "key21": "4WpSq6o6wCFYAE3AJNDBNePiS83AhKaV2MU5obTtTxDaPqBzZVYtmWk4TwcpDcKCEnccp9S7gFrih9LSdopB49rK",
  "key22": "3sFuzFiWZucgPWj8aNbMCvt4XBCcc81jCp1CoZuDKFXxqWZHBxE5uBkUGatX2Ay3J1Vrd9HS2BuSBbjJhQDzJw5W",
  "key23": "5KbwjMAQPNeNswXLwJRopDePo3TbyBb953eiiG5ibsCL5X28JdTaMrTtWcm9CGUCN8SCiCqMp4FcNiZX1vvvJghX",
  "key24": "VTZ12xbT64b6cfpwJ99ZnDDWReWqYJdbcjzJu946XqKKSmXA2VvjmLvK9jwAjNGGbJ4Hzf8MqWQo4PTzcyo6bS9",
  "key25": "3f368SynGCASB7nfDYZTULycdWJHA8DkWGFxdmUxTANLmcrebtBeXdFqCtywPakE7AXMZCFfSJPdXdkxUNQqN375",
  "key26": "3KDNQBpfKdZBBgQou1XH78uxu34gMSt42sULbEfZCZY1N2HsgeuYGRAcN9Coo4GgmD3rRDsShX8Uc1eUqZDHSoVS",
  "key27": "4AcwXqvkLJ3ZywWFdSUutN6LRf6Bki8T6iwKU6rDdAiSAQhLjYyKRPa5SNz4unxVZCSTqfBSRZtn3FEioKX3Mqka",
  "key28": "5S5SVFGfLkNxD2YMEGYrv5EzeEa51L7RoUCRpRbjVMLnqazkubP9LqKU67bVsnNDgyZYysMhyhbRueByqmZFHV7A",
  "key29": "CxQPRPKpfeJtKCqGxQHT3v7DFbRMM7L15QLfCt7AZtqmREAH8fKQp1fZxPXXyNTpT9rcsEFhu3AK7ceRzD5Nugf",
  "key30": "2LuvybmxeAzBuJbmTYpc1e7ZAHSAvoMVYoeB1Wd7APSQMfKWTaTeFfRnnk1X69poEdCziJEcCzjgtEfAvgRjkA3W",
  "key31": "hsZZ2imyiw7FYn9KvBLtMh4gpfKsRhRfwUbWwNbqC1czS3AbqK2fx6i7pPQW8Q5F9pwaFyBothLtw3Mk772NVmW",
  "key32": "4MsjMRFk9SbCY84SGnNuxFJRDM3jNaUG17kX8tJQcSWGecYdwWWiN5zhqr5WZdKg66zB7w4eeiBfT5L5DNjkZWbB",
  "key33": "3H1FPj7A15dRa89JDrkUAPjhb48zTuZzhWYi88yiTTnyyjixpbj8HMeR8YA7Ly91iRC3eoJr388t8c5hyaQfqUyw",
  "key34": "hMPZvwyTEmpKgCz6M5BSanZNfzccQ63xx7NE38qph7xWVR8ijhJp21oa626Vky2mjnJqqqMJK84Dfi8nxkqLX4R",
  "key35": "2YroaVdjSHkJ7rMNe2cWAhbqJd9WW1cGw1S14joh7k717pVg13d3XR4X2DAzmkyHNTsazyw51LtWkyuGxCKzKXRE",
  "key36": "2X4xuofgoUDyZGhjmax8hzpZ8e5nZgAcMyi1fRxDRPNcuNaTWsHdCa3uFhzYNV9FCzi58ejSTNfVc7fZezZe2okv",
  "key37": "43YBFhsGTBAvL4u13cc33y76tyBctYstW9HrKQRP9LC5iVFagqkafNzgEAQeG22eCtbT1NYDP6iErHfsYfoXojxo",
  "key38": "HmQR5tvL1t2gAjhHtjzWhHt6dALiJtcuUg6AfQb973c2eWuEmEoiqcvKVpnwa3g2gXjj5C23APtRR8we9wujXzG",
  "key39": "9VQeHiEjC1WWq6QzWLZmKJ5GtpVqoYRB9aXxFeZ3PTpMNuA5CTx2Y9cRoaViTYedA4mj52XeGZheUpHFydrGqT5",
  "key40": "51kbY4uyXJsNMnHR4fKTHf9FSpx3MV1sHWdN4cKebJmyLcnirjD4xtAF22XyD4BUbPJMJD2jUu8c1qSj591qRSVm"
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
