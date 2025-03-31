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
    "ymBdupq95A2KwWm55PoK7apJvvcmDGb1eCPecN8XK7Jr2hsz4TLW3VL3JgiXcAG7RcfGTETvtDWEuoeXKDLvKyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGHHHGoniT4h73UwVEkfPdhDySudApjLbY36nbo3mzyshm2YCQntMeVh9ZUTJH44hefNcpR5p3CHvD5JYDrmBjt",
  "key1": "5nYmcABED8G9sawoJEQc8px7jJtguxnfjRuwoKFsPwXMXdALPVGrcKX9uoUW9U83P321bFPdYUvbduK4q9KyQoiu",
  "key2": "GyRmSn4UwpJBo6is2zw6A3jGJMtDrRfZeaePfoQT6nuw1q1K7sWm1JL2943BehWg9svjcsBQZuyhG4PeUkNTw7X",
  "key3": "4WaHRP2UNTWkXrBb35tNLHSpYenbhMTPBSUhg96gJW7GrX2ZXExAeMhwX86xgZ9u2449np7AheEXFaMx4EqFewrT",
  "key4": "2aPEUGBZi2oCsEr86PVU9FmERD3h15L3BfA7NP7ei2RMWZ3XRCzYpCzoUQKfoooGY98Gmbgd5taZ14zGTgDh6nvx",
  "key5": "3DKYVZpgKdkthyLpMAdv3BdMAkFnbbNULkGimaYcQYmmzDKaCZKNgPgsYp2oAe6Gu32Eo195kV2rn5Rmi59m8RP1",
  "key6": "4cnng6dYFDRQi93xvoxj98x5vyRWRB8xUtBse39Z5GRNFX3SSpufkr4ftN9jDswziQjfX5G4zmxkuWD4ikebgfvq",
  "key7": "E4nTXRG5QvkbiQEcT4MscBshwfipHHSayodcTQTjQohArj1nc3CPJ4psypgzj61rSroNkUM1oVTgdpxeqwGhYnC",
  "key8": "a7sJMtA1idzumb5LdjLo9nhhDsXwRGvMpdGu7XfBfXgfxSAFqpKpcPutB79T8NcE7gdNwKQpuqTc5PKu6rKGw8r",
  "key9": "2xxQunhT9WBWs236q1Y7hiPH4sfeG4L9DSgZtJyrFMUhXgpzvFUNVCUJBf6WdqkwWCgSSF44bFhgbNt7arps2HAf",
  "key10": "KmdSVaz9QNQmr7L21AQG8AQw7x5fPbtZym84Fns6Gtg1T3Waq3Hf3G4tVVPTAwW4GZUHkcC7y3WapkBuFw8q7ax",
  "key11": "2j6rahExbbi4AgqLXvMJLnwChyP7bpJoa44Q92oUdpjWPGvLFbQagmjQHJg4BMiU5N6CiSniVjw9PcEVGLkLcem7",
  "key12": "52TYp23KK42cuT9AtXgSNfbqkGFUuAt87RtCwRLkazjcoKokuzQM8Z5EacsaEHLbddmjtNmi9LyWK21ytVTKPors",
  "key13": "4zSEEAmKM7qwHVyUMjAepeKkwMVgjcTesttbikyyL12TUbexq6QsXPfvocqAhYiFceZtTyyxY2d1T9KyakPowxW2",
  "key14": "5d3GkyXCwwVF7FwvdnBSFNGJZuxoVnLfaqQ74KDxp64B8ATzEHsuipN2chAXDNhKLcpHqXWCsnoxVr7hAJpFSeuz",
  "key15": "mUs7d4v389559E2BV7GECE81H6mPw8R7zvgCvJn7HZhAMnQzG9tVDEDvGoFe9vQwToErLXMwis617trjhosodLn",
  "key16": "4ESWi6i9nTwVJgbbjiJihaLaQBBoGTS6PosfmEFWhr9NPf3LwNULqst5o2YvXomwBVyyRsnLkJPGGeqqpjnsA4n2",
  "key17": "4G7TgrwPW4ZMnRxkbYnpXuHnmiTJpiw3oT7aEAEfEfXGEwYnqTeMHgPKpVD5GcCgJizdGBKrEaj3xRYKdspJYQcW",
  "key18": "38Q4e9bMxng3tweoHSvkk6HgvfyGCMb4y57ybrFJp5kwRWcGJg2fekZfQ9xbFDWat78e4sac9E7BxxSicRQHK4er",
  "key19": "3PWHjrArwroh7EUqJNmH2hCVGWHYx4Y48hrXBNxdEQw8jUupf2PUtJPZUWXmXEisf8LWF35vuJLiwCAwmPsh68ix",
  "key20": "55oegwMZVEVBQdFErq61pDkdB9p1kR9SVf5AFmW4B7L6gR7SFh9mGdXzyC7LHKihjQcd5cjt7mAm58EedkmbhZp6",
  "key21": "4VTBEpJnSnru9yrvFo118hrfm4bMwZv1cgNwc9fAGeFJDJtkkZY1gRuBGU1DUGYMYjRXmRCNQ5uCeHCbSHmqeQJC",
  "key22": "26qnEx5A9g2hVsREAp7S1Cguw3ErznoHtbQA4PjVHSkJh2gLH8Mrfht3iqhkxSP3HeyxvyXfbhqbFoP1qPrrHFE2",
  "key23": "3Py9fmZPiRZPMy3b6p9V7tQyQxhkqTnyLKUdK2tRJ6hnYK8dfzV8LgSWghPKpzzjTjgzBjmKpxtPYSVAH3PoGChk",
  "key24": "3Ndonk7XeaRhHALwnKHcNSrdL8kcoq1qqbifkPSFJeF5gkBhR2dE67dftHrer9BoiSCcZh3gnxw61g1ivbVZ3aQj",
  "key25": "5hpB95xdZ68AEg4EjGzkLznURzqTk3sbJdfrvqHEkwuQ17bMp6D1Bjb8JthBW9tJiEsUuwXDDtbXaz3LH6nQNTfn",
  "key26": "41UejBJufu6pfQN6ntmNNH4ZFHSBHNPfGA6yQBxiM1PkchqdaGEdynLY6JmuqmcKvnHYEuo432UWmdxgCbmq8FXz",
  "key27": "2K9JXRRHbcda3eA4Lu8znCPq7sQXoTt9DRLMwcm35R7XdbgbNJbKcouGuFJKKLq8MoH1KJtk9CasB7d2uBf1Hfao",
  "key28": "3gZQwmKYbWbBXxNECoQMf9FdqfWv87XTgDqakyy8js3dRnfw2ZEXqDRSn14Ao6yfLiD28o5sooWsYFtrZZBoVaAT",
  "key29": "5udoXNugW8yVR6sapMboecm8a1JSRofL3w8Y1Dp4MLza8sUd1Rmftz5RAazCBAnjSr2bie4Yok8UTjfJLKh7kVkk",
  "key30": "4Y5Jy4D23RtgDbYJ2HxFenXoH32eXXndLFFk2KRUhfwijGu63TmoFtemfiZVjpz19MTjHYhGw76km6pwVqPeBc1J",
  "key31": "36Qzg38tDfySdQdd2j5Fa9X3xEM81BaSc8MWDp88JTafPi1ZJ6wAPCFUwym5eAXexKmsZSYMGfxDFY1gJhD94xzN",
  "key32": "fNUNmq3AyF3XwgHyfqGA4xKgFYBR47Hm3AKpwHU8PMdSa1DGv6PHSgoWznxzRoTh1L5oLrCQWKxuf3Jk84GSF7Z",
  "key33": "2KPM4PryZnkQNRR42GNSARU3HxpssBzBbQphSmEhmwDL776VHAr4X8bA2uyDs5UeLbNY83DQhThsu84mDQzQ2PhA",
  "key34": "2tM6CJ6MxbmXaAf9XDJw7fkZGmpCXceyo5BoFb4NqeuKt3YcEwBL5fUB1rUMtzMEEvPk74rASzaALuzvARB6ngG9",
  "key35": "5RJ137dMjxNHjtwkZ2Tytd9f7hRuXokqCDW78KNiSvUmaMuPV3pJfavtRaoHRLewhbtgwk77LDUwX7CwYUBKT7RD",
  "key36": "2fwfVcKzNEaKQiaxsiBkRnzyJZ1aUFChp6CBZL7emDjrHdYMHnS78eiiVrrpUHE5oY9Jk6mNNvpypLGumqX9d2Xt",
  "key37": "4FFSLK59Vk4Q5dEf5QgysLeaYCYBDbqUMwb5zVHukQCJeQPqTRYVL9nvtYz5goMV5minKMFrCTgRV9T8WpaiYBiZ",
  "key38": "3PV98FHnBYETTZwLUZwL6PGBrodgbCVPUbM7rDiBhSJte599j6tGewmWvYCCy2y5FY8em4ekhMSoS6TJP6sTBUDq",
  "key39": "3Lhh4fWVwnhzg1c2RXUJ8sN1fBKuHQXWwG1icEjo4em3nNdQCWADs1W8o2sQmFrTY9afXpZbBEgZMrsTVLtdL6sN",
  "key40": "5b1A7n7q785vVezWgxUhf2DyM5mphnXQARjoab7xnvEgdWwSeXThE2NuKsY29dSxkBdCWQwDfEX4QRvm37odZw56",
  "key41": "4eiX9ksqgv52cE7wTfSzwyewGFrmX6AjHtXS2r18Nv2XE2j9t1ek2TTr6RkQzg6uDCGJRpHz1dafeNvhvexqF1y9",
  "key42": "2A4fo2o74h8jMzKhfNzD48MstkaeR2G7DJX8uFq3dg7dVmb3QY3b23MdQwNcDfBeTkLHKH7HY3TxG7KbzmaxABsZ",
  "key43": "3Y7PwvuP6zxAhXku7WEshC1uG5fES5SaZi547FWHtEZSaw7pBeBtKwQSGy9xnG3KXoY6bDa322wwwo6NRQbzj51J"
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
