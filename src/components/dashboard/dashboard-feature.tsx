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
    "4oXghJaFhTv5mBG1gF9irp4UNoBEmr48V8JxT22peKB4GreDu5PYWJB6aKE13V3mTnwtiCffJv3hht7xQUX7vQsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TB6prEZzYyHEeEcLjUc3xj5v44Nke4MzN7b53MKnYaesj1oF2ixKisDWhMTE2X3znk4wtt59aFnRRfNzSNDPvxL",
  "key1": "5AfMy3xYrHLExGBZFDVnVtwjFGWAt4c9uCkwh18uWdngsNdkfXHKbL5WswJ4Eoat1vUa7xQhpbAZqSRUEvEqvo99",
  "key2": "3jnm5AY3TutWoyfHPMt7M2uNuBoUHSZ6M9BoyDHE9XRUx5qtjDCU58RcGs7JZ5EzrLfMN5meL79VNuLEVnvonQhj",
  "key3": "4HZ35PkSge1MuqtRwfFuD1gHPeev24PDckhiuwf8tePqHb7GESS2TSDJ9X6avoGtq2YL7TKbHQ5zkmEL5fm2iE9S",
  "key4": "2SdwUZkc28bf2E8dHVWJsibYxrT2KWehzAYpoUE29XFT8GoiFE85nCBBFLxCPSw55NVyQAUGnishnbJ1jZZFX82Q",
  "key5": "3HFLD56wKD7qmKXfJq4xAChqPkf8iBDsNUXJjSaXxonmCwrpNKWbvJButtgfhkWPQTvXNGTSRELaDdbvWj3PNmBR",
  "key6": "4kVfJBffzeXoBGhJbXhTxqntvv4JAxypL6KEJDa7t854N1hdxZ2RKjJMaQ8qCuta2EzVBQwPDo8Ayyh9JckGdFsz",
  "key7": "59hRo9PFko2wYFtX2nbsGws65LDUbBAQTTrvf8tTeHevQFuMmgs1owVaAWVQEcD1NETkSffbkU2PrQus1TtYCF8s",
  "key8": "39ndS8qqhKmmpF5usLcMJ2zJQodgjCVMZ4tUCzw6Gw5cxeCFy7SiJRqSKSy23sTjnb9qAzAkfAqvPMABaujhybSm",
  "key9": "64GoPdvtorxxsxAEWH9rhncHftpyAuPufPhNTnRJT4hH7sxGTdkXhW3F3FahGuGhXduNpK7ATNc7h4LVg8FHTRhb",
  "key10": "3SnPv3fEJ6rMdFr86Hk6nU3hnR2oBo2pqfkJQQcHChNNYMfgWtGQCG3prwxKtxT8Z8eCLRbPLFvuEEJtEWSZ3muN",
  "key11": "MpBZkAkpKaq5GquitXi8UBKd4CYio9vZPa5E78j2P53TaCMGehaCHoZz7GYks8SS7CEfSEciQ6wFKaAkKJvmboS",
  "key12": "34tz9EDZNMmzbWUoRzejK6x3iW6dENGnu2p2XDwKeqLCt7jfHZqWnzJ8v98bgJm6cvAZ61qsjLADY2B6kdG1VWoY",
  "key13": "5hZ8r7rmBUqVixeUXiALNMdv9GUn8WHhZBztEaATP6KyztD5Tegi9wNQhnkc95SfyAQZKF29dCPnCRjNC3TwMuBX",
  "key14": "2jAcZbLUFpeqDZsJFed6EvY8yvnkzKPzJHpKZZL4y9kCVrKLmAxRG8cw5hYXkXhkDSpG4K5FfN6uEG4w7ivd4rLv",
  "key15": "29M4YmzzAfKjiDyZidS2jw7ys5jrQwxRJ7A6CiYuC5aHz34qp1bHMstDngdobo1Zg2bQQn3virY9zLyWvvY8fnxv",
  "key16": "5PBijDynAbUDEobqFF3mKJi9W23xduqJUpaBJXxxugFUUdg7YVjE9XCnSWUqaFKJQZZabfHTyxpfa2owrX2H3Dof",
  "key17": "61ALM3uKQ1fkMC5mrAHumfFXz192a1gVVYsBugFzK6Tq3PKL26NfENhZtwev83LvYWag3CJh3KXgbjho66V86g5a",
  "key18": "4nKQtEa2M3Y4mS8AWR5Xg36KMsox1XguNkJXNrSjScubGX18ktTbv1kgMiZX36vQeB4cbL3i9azyT3yfiNbc9jPU",
  "key19": "5d85c4u6JR6xWADbdDTHB79Hk2BKkhKCUZmsaVvFGmSUr6F8sR4ZFLP1fWM5h7D2dW4rzxp2j8gpNkJnRGs35gU8",
  "key20": "4oc3YNR9YsZMve8hGAiy5EGL2kgDwNEtjVYE1WktyhNDBJHuewk4h82soGtxj5gBwoGJDQvyzh49TxVUdMyF1ySN",
  "key21": "wgM4fXHuVyLQg1fK3xGKozKnztGx8EDB2oKQUxpQag7Ag32Yv2142QjByhkomjZCDGLQNz75z6FnVxU2bDgCyi3",
  "key22": "29CxPDSuEkP4hMEcEHQfw9LwDhtfjx2VeqdAsReWmbb5RjeEYuxoJ7EkPC1JombNEqdUN6ooC8rwB95i6HNgotG9",
  "key23": "5XoXWLN41eKztN1D4TAgJTvAPzKeJPECbBjd4t9mMx4NhMsVS1YqH9gfURiD8YJdqyvhjpxAicnSyYqWgTiRKcuV",
  "key24": "3iWKmYLYRRBMBKp7Hk8dcP8gMcX2kPoHWULznKd8WvbkAT5iP14y1yw1Meg4tLb4un3TZ3nghMyoY3MZu4o11FvF",
  "key25": "VbhSF3eR5uGvgLP594SinXaiTqnYsD5WXkNTr3CL45wXkYe747Xmcuo3xuMBwsruPUYrL2E9rvjGi3Jv4fJz5yd",
  "key26": "MaiqrN6yrs6EmG9QPbLwUsYx4QUsUc8zPPdEYJoVGYxUZHnLu41mNzWkt81YVPBrt7ErmbhFSuRTwmevvBzPL56",
  "key27": "D5BTejtY32EcNPSSnu9bYRn7SZbiuaQfMtpfjKrsHVjAUfRee4B49fosr19Myddt5QMM8b677Rd5qisu5bBEH7x",
  "key28": "5fckbB88LHfTMBwhXDShorvVEM7MR2pcUF6Ft3jeHNeQWaeFMVmfs98kkPfEZX2EQ7iGGmNLo7zSqMeWhTm6VJ2v",
  "key29": "4j1GaiAKGZSgez4KfbAZXtaMfZ3FeGQJT2wxHb38gm2gXFJTHXv2LT2BGKYPC3tpV4wpXGmpKddEchKBuqBbrg3k",
  "key30": "41nhr5Eg6ckvCK3nnLQxdUwhqYXbE85o5iPvUYtC3fwkQquEg5ce47jGa8MmkXpsxiydpn38P7vB9zjriPFTdrKv",
  "key31": "itttCRsVjsYUjK8JefKfc1GnvjDGYfQs4askmjT2WCLaynM682G4tgeLWPi47Y7geZD8WuuPr7eUekh49BBcWQe",
  "key32": "5fPCse7XPzAPCn2PgLjgn2h9U8W9DAcWdm9NfhwwuWTDYLLHtdANYYtNzB1aZAdtDpji2gym4XJyQnEDu9dJfgzX",
  "key33": "5xT8KEGGu4gzz1Zzf1SnFXhR2F3MTxhh9QAHR3Gc85qqob8vbmcXaGtCnz1VJPh48AwTK98E9oKij67ioEXRVKif",
  "key34": "2ouAgFPzZrDyBcxBPzdsLZMv7oREavvtuJDVnDwBDR6hgYpYEatTASFRYmb12mycadmvU9Y1uTqDpHAGspuntbZr",
  "key35": "q6pG4pULrYfy2cBXwxvN3dSBQdRRz8Wr2Wqud7CmeE2hNAtcmoBJg4zBmCR2MYE11pAbrmCHvARhNE7q9omAMNW",
  "key36": "4DcNdR87y37RsGABH38fasq51FS72547RcbZWGMbtCAz2FzLRaCAHs24hV6AbQza9VyAkc7qVUX444V7wMB5mwBT",
  "key37": "337JMqroyuq6eQ3DFQ8URJRtyjys6b3FwYsfGA77qineeEFcoamfSwHhxnezHushgy83CaPDisSQs7NcT7zpM9Zw",
  "key38": "58iwzzxtoYH8Fd7yMr9zNKiasvhusf2JXcUAcS2E3VhxK2dDurdwjkF8KPNQoPmxoyF6gHgKZu6S9bBVBtH3xkno",
  "key39": "38bjAtUv3gD1V9XEowzyJGHvXdNw1QuSbryUQSW5GsZwo56n7smGK3MnVchZJRpJr6o1L5oJYdk8wRYs4EDrxJYA",
  "key40": "24RuBamqPychwvhHLws24c56A5KaADr6eKHHfzRTasTv5MUY6zuw6PzcuxsExo4W4xH8WRFTf1fXvBZ24jXxmCHT",
  "key41": "4kcMwgc2LYM9deGiaE9xCLFwbhU4Cc3uwAHBKQYrV5FdfMbmaBzKsN9Jn8BKywe4zozHgEsGJd83nfvea9GoztmA"
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
