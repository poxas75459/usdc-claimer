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
    "rmvuYmZa1zswS3eTmDNKyzKa7G7C8PvmKY82m31dQvnZhR1hPDoWpxx7q9DBv7dCFiXDwjbR48njD9SZuGTLdkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XmsPndfJb9hLEC14zcZXgCfSvW2FHtGDPcYvtJtQSZ1cYwTnGhR83VWj6CYa5y8w3HkNtJBbDosJzZnUVv852vb",
  "key1": "2mVtLF2hKyoZiaDzCqjB77Ek5uTVZmgGcjyXadKVt8nu2VyeiKRKaW8XtmaQbaiWDmzz36gUXc8yk1QFxEqwYfhz",
  "key2": "4YAjK4gj5AerMCCTMTGhihjXRvUh1rQTufmjikHayEvT19oW4btTLJEwQTBzHnURibaa8A6GB4WLVt54ddpHd5zN",
  "key3": "4YQok9fjKcVCUgDKZBf8PoaSFf482fzeQ8nozg7r4DbcBuy1ej6eSJTj2c155xke1t3jPvxZXZmeY3dqvyzgckGJ",
  "key4": "2rtKqvx4tTuKoPeD82artTXwZiYcDNFSCUv1roh4z7bRqZ59hxpFYCzYE6V6xPkZod6EWwgRoMP6qspmYtDp83PE",
  "key5": "3Uj1x5HzDVWgH8Kj5NVWjswju2iA6NsL6xec1WSdm9gsuBKMBmkg7kwqRTUgJSUGEwKKe2WyQwdVuZ5VN7YK691u",
  "key6": "2FVE3XbwCVgMZf6EJa8F7qoGete1VjP8dSoYXXQPMmoC2TNsFGQUxCZSwHr1ridTYyZF4zCYSM6u6chKM2t1EpRo",
  "key7": "5XxVafmXe8icrFD6joM8PfnupEfySAN5tAb5imgaxkmVRVP9hRArEhrJpa3oPNNPfYJXWq9PZXj6vKD9sPK59nXF",
  "key8": "49SMV3DTZ83AmF4VbHkSS9xQpTLHCJmfRWdJq4fy1powc2DvBM3uoDKZzbWYYVswx7Awde8suHBeRH2RfaxcLPKE",
  "key9": "56PW3i7Efc4cXffrqgWqRV5GjHVBWfGekwWXLDuaa62tTyryEH1a2mgRg1y9H2KehLn9yqRfjvQRg23rHs348ad",
  "key10": "4Cgt54Tf6SB4469Pyy9DLbA8V1PMjtKsooYBaDb1heGx4vqPH3mKtiW8VZfc5yME1gg3vnpgaeyCNafzbSsPgNs3",
  "key11": "2BfkGmK7RGexNLJKBHuUY6Yh4pQ8p6puGqRqytCj9a5yVgXywbowyp7HYDTK38GVh6kHodG8eBQUmX2HTYmdY6Sj",
  "key12": "3Wx6N2N4uBnjLGFvFssEX3ChHV92oywgenw8FWYJyRkGvqhvtfUYRob6R4iYu2PA5hP367yiCXDE3kWrLGBqjFSy",
  "key13": "3GAXJ4mA7BAToi38Tk3bWdZiS2az74HP2AR5LRg84AUHQR9unSdwuBnL73dEbGySSFt5y8EbymTfWW1HnTuTv8B5",
  "key14": "EQjbdXn24UhwxK72nUKSAcbHUCbCLAfj2psrPhTnaKbNoyq69cSKd9DfpusS5jWCp61jBduTWpRNuyZqZjp4oCM",
  "key15": "5iHtKTwVqHrXnsV5vzVmwsGXhPsP6WTdPqnhHS5obVM9kjDvr7ekoVCcJ4HoA9M5PrvjNqGb2VutAa7uq2qiTiBu",
  "key16": "4m76x2RS6HaAQWnp5ycB5VNUTNqioKbfTYEy2bmRtzrQeMFKkx9C5bizEfFon9paQTXeoWKmYVF56AooAmqnWKRn",
  "key17": "5wuqovbTaP4ixEWZM7rfrigAQxpBURzTmVzVKz4Gf49YCSRpjrbjH3iiJ4pUyXgG2NRidYQUyqL6CtubH6cpNJcC",
  "key18": "5VywDAJ5voDPNeuahGDUBVC6EuQfKFkDH31j5T6JtNzaiKVSGEHFTeER6P8zGPbsh5fjCQ6qsyGwAJ9rfaasRTri",
  "key19": "5mecpz3YTTTFzQ27TEwBwdei8dwo8Zhzqvfc7J5x1HFgryz1F1gK6Dyx44Gm9XUnEagTWjMojChW7iXgXdUbLQ6e",
  "key20": "4Rdgzzacr9Bhkfx18oRhJDmpWmP4EjbazRsHUTBrFvaGR2XJS7wvvYXqHgueJyLGVQYjHhBo6RRWJj1eadcJLSmV",
  "key21": "7KcPeJPmGR7dSn15NXjmtLVhcSFY5gPCSWjhL4TL5px3gEaRuvcJmSHwA6B3ExnDdPEDdBTXvZb39oHCVF1wvC5",
  "key22": "3bVpyu91J2s5z1nE7ZmDh5s9hshcNghrPAoRrK3xixLzaNiKLXP7zsnrkgKN6DixN39PMXEHMAz4amZVaHyBxA2t",
  "key23": "4mcw8tR2uUvVr9qMMTiJA83AyS9yTvnhYy6cXiDjyUDWPxD1aeUbEH9z6z3XHcZWirEfMqv1A7bqpSmdn26hiMXY",
  "key24": "4d8GPjK48SMwfRqzKfy2eqgjahnDYvYjmWhvGCRBP1k8icW6UC8ExJJVmm77NWzoqhMFs6gyEyWFnv13V6Nw1Tk",
  "key25": "4akEeKaJvnDwm2MsSCwW1jp3DyP2v9Mcx3kCTSURWHAciJki9kHP21iJRe6pQRyxbua1UrnE4Nf3Rgp87bsqide6",
  "key26": "29idqnBifx58esZrcWU9NigzfcFCjbBHLgchbPAFx163YoPi3mNc69ASt7bDn9futgeM4bAkx2a9avqJii4SyUbt",
  "key27": "3iRbuWaZAvRVzVW9bBGLD2XuhyB6FS1orKLTBtiWKR4wNyCnAahRaWkTT4fcESMMz6fPMisTTRR6MgdVGbqEZNxb",
  "key28": "4SrFzg3nRAf6jEaRpUvLpgjLUst5hMsxrgCveTxRPe6cQYgLPZDHWtWBiX6m6Y95azFe2GYxJTTEMz8hDvNKw7wb",
  "key29": "5L2P3EtCC2fLWgTthVzNH1zsKtWRWGXyoNj2xQ2VtfAKwBPPLrmLe8JXp9gueyvhcmHerZrHvTweZyWzApKvb8WG",
  "key30": "QmE2uB3U37ufHdpCTUG3ZdWrcb1LkQ6rFwS68uexvjJ8tstkxrrwMbBwrE8KkMgYQguBrqmz9rdMEaYaWuh8bUt",
  "key31": "4UNgwYBVjDPAS1jTbvs9akSLNSzjzMkhBEUZsGuXzufwrafdKwPdUGqjt6GX7eDua1e7vBu8G1UXeBqHQRyJzBxv",
  "key32": "56c2eVYdbyTNcC8UG8vdXBSzu1F22XJg5JnqtJooGNiQyUhDEzq6Syq3hMF9is2bvNDkz3zdzLr6oX2HNxcY9eyA",
  "key33": "2hcZwUWjZe27jbR6LWGWvAKKKiHAz761em24Crk52JswNci3nJrecgBXN1CAMNJXEZ4tjZLm7BCm6HYguKK6hqro",
  "key34": "3bqMJgzgNAyvLEuyFSeb9FRRsFZsnjwzctv66e6Z96jsr2VzxeBMUdeQRPDSqn6tr6ZXPf5DkCnUrQHtyKdDyYnD",
  "key35": "3JRgGU6NGKquEZZUdfARSJEWF1QPxwxb8LrHCE1prEPCsoJncHZLaqx5Zw75sfhemUPEwzpNhoeyYq2H8tE43MxR",
  "key36": "4zAP5gSZo74tzyJzny2eqRiW1poE5my2W1WfvMxBxG1y4PGLt5YL1M9nh3YAwNQBeQoGXsG2P9wyAcJXfVt3LsaF",
  "key37": "46mmgDHbHhRDSJR6MtTdg2NN6HkiTvhdNviwyk7AMmRaNTvcV9rRPjGgnnvTSR6iXdXqWxWuqCBp2Ww2J2zYxUe9",
  "key38": "2v5MEa2sxxxiWj8WJ8dzTdKgM6VhLYHEsdJTWikyu5G9wyrBP3no4vDjvqje7GCgscPTKGc7kmRY7Nux4qPuWbaH",
  "key39": "5rAuyc5L9pfbeTsJoa9o63MnMz2EXWp4ncY6xfPaV9NrVUdMdSAYx8j1NsXUaJXdyAQrdx4vZfYnqjEmwVbXs1Y",
  "key40": "2pHEDKJfcQQ72hoiVe2QLHWzKkrYFXtJVhK46KF64XHcaSwsUSXCdBcz992wZkUCheMDzDGoYJMTDjKRqvHV9e4z",
  "key41": "4g5SDqtUfrwks6ZDeyCfDYFkcMwQotfwTkgYYJSFvFBgPA4cNEM48JJLtKPH1ttYFos5VxAtUD7qSdEEk978oypi",
  "key42": "65w1Mthy3NiiUota9bjqTcQW7YKsd6kFTaK9FdbgKCd5etgDUrQS7PbxZnGpFG4o3WZHEppWnD3rGbKrrj1Woajj",
  "key43": "3CYoSQSKcAHAWuxRYXu7yAuSoEkkv7xbUyB3iZSU9wg1AzsLkaJxWvhkjRJVD7kU8nmd1TNqpvtpx3k1dxB48FHq",
  "key44": "4z4uo5tTxh9qFHQbd2fpQ6vPn4akKE5BLgC7Y9omo5ESPZBgMVdmRJEuoJLEZS1YsuJjSgB9GqhXxvRrGWETB38o",
  "key45": "2T9cCsX8kefzB6i8kyg48y7n42vqB35oCVV5WnDFcfYxqjMeBLeEqRBUkqTfhyhFvZTRB4ggn8SUWesUzj3Znwbt",
  "key46": "5Gqu7bt9Hj7jGqVBftvRcAXo5SJPWYT8uzwJ1gGsJVgwA2ooeh6bpN8kJzz9aNHjYV2KAMg6GbAMXhT2qP5qk7rk",
  "key47": "3SVgSrx8ThppftsLe6uujJHV2HVDUVPhNWwcu64PZzq5X8xp8aP2SJswzS5xfYnLMC9G6W7E5t6QhvMMh9NMfGo4",
  "key48": "5Gx9dAyqJvq6Qkskhz8UKAk5ZgKzVKyNprEREyTQRZN8sjuWg8e4GRwRc5YYDNZrkdvM9qAC5LtampiCV16Nyzqf"
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
