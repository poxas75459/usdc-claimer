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
    "2ihzHi3Aeyh9YcxxLxgoMB1iULMkbh2JhYaS97p9Km7uTMWaRusoFXmRpVxovhDH2682cD1F5ZUhocopyF2TF6L6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZhWRjWM1HGQRvK7dZNq26bBmVKFZiRjm7bEySLQqLdM3WS6aw8p5YPYSXSxuAjysFKBUJbScZ1xmcqjjxzQV8x",
  "key1": "5KahwUrdpwEcChr4XSvk77ZQytEq3ZfC9wjRyakLUxizeM5z8DhQycJijnmLm76TCfsayq6JrxqRKHnuFbRservC",
  "key2": "579gF8uee63CozY6WBv5Nz5JetRkevmGmHJqnnAinYMWD4y8watCbQd57uTArYjGnFV66D44E45o4txZM53Akno1",
  "key3": "3jm3FJMiLTBu11XTJYpmkWMEp5QGN7doK3Doxq9VQ2yiHAyXFJxsc5zmi5wrt6woY2QNXck1JmAy1SShb4bdwUM",
  "key4": "4ST8fUmbLkcUJKQVcHoAy7KQddebSRHsze1oHr1cuS9V7UHCbK59aUXgF4MKiu9m2kRivTjb6qyqJEqvGHdbmNnG",
  "key5": "4ftNVXS3ZwmSySGpbzcspGhVNjsPcATJ1wU2JHasFfCgJGAntmtgobXB5LFAb8qa359SFeYLvdji6r92TfosA6eq",
  "key6": "5Wn1H4on76syBN2fuUR6EsUpEHsBTwY2qgAY6CBiCS5Wfs2V7NBm5HVLmaP1EuagybxFvYHf6NZT9f4vE3GZn2gH",
  "key7": "63gaYDm6Cb48JsnxQNbCVZaM7Wib3RjSVvPtZ7wSWueHN6CZAPsQSYk9rsiXVsgavw2H48YC6xgNQbyjrPeLr2ZT",
  "key8": "zzHSE2CMUGezegxn6ENrZ9Zy1vaEhPQvjrqEZpJexUDBYzVWgw4JJkzT3RE88GkeTqSFFpakaUgJMRWFDC88wKo",
  "key9": "4Dv6eCCw32jZ3rbvETDJnFh7FsYMzAVYosCboao9rxoa97RnyGFTcmSKiBiySM2AyyFYw2RSrz7gPDFZ7mLSgNhJ",
  "key10": "8GCXuJbxFHNJoVBbgfNpW1urmf6xxpnD8fcyooTh2ZLtzZ5PT6BxkdvnQZgLpNAM3HjseX7HKUXuUcRGgDnjg6i",
  "key11": "fiuuqvjxidNQpRfc4tqMuKpcXTv5tx1zuBGjHU7WXLZh2M3UoAnfyF4zfRW8QnyCuqvweMrxemaDUDffztZzp16",
  "key12": "1d3e9uZGMQeiMZzJMWCKQB2KmgKiAxtnb9QfMYziQ7nFx1pr5XbW7Kx8FirdAXucgQXcR42SXi9UgEwsLBvx79J",
  "key13": "3RdnriNrVFAS2KGHSrK4sDWmcLouhrkJ9Jtzin4jDFcQ2WwkvEuo4mveW1JBwQqgL1D9wqj3fFQkjwBB3fNrBfHZ",
  "key14": "xdjQywMgH1y5FRnDYdAS24Cff4sj8uaSDtSkAhd1iFXzQUB5GSCrx2ZY7MTZfK5nDLUAcHWFvbHhZyfcohvp7MP",
  "key15": "4rKP6Vr8YxZ8CEFqDWmtVp8ud5QyXiZMcnkLBQUUrSVbUzoKoHVBzkciAPus68XBH85dYBojJAJch2JzCk1tW1zJ",
  "key16": "5meD15UYmnEdTnN6QycfNpc4kTgFjFmw2Km4awS9dUPVbAkWgd4ix2Mnqwt5DkbtPoNQwB7errBUUmrKsFgCQ6ZC",
  "key17": "v1s6TsAdijBrZEsuZ57DJsYFxtG2MzkUZ4cf4ucXmZxiv8D1P2CWuh9pdC1r3qqjBryK8EVwmCuXXzv8UG2kZ2h",
  "key18": "5QxmsfosNtpVJC2YAezUTiMk386m9L195u8YssHwJrEhfQk7FwgnZ6uBLrEunLzQTH8VJcjoNszo1jmGD3DRLpUB",
  "key19": "2ScimKZ1QJ4LAraUhiZpDiuPFUpGpB1o4CL5P3xxMccC2ZwB2CC8AojHpQHYEyb1LhJYp87FGb41htJDMVpRVgVB",
  "key20": "UBX36Ghk7GxJ8yNUWNHHQ35RH6EgMym3kPENdwoRYiXhXqh1D3g6YU16KUPudZinznoigxFHErFdRGevNvjRiis",
  "key21": "oGXN9Xjm5fpAJfjYYMagjR4Hcfgy2rgziGvAUoaKk7ESQTHku62qzXAxLi6xRto9PHDv7Cinkvo9knLeEUdjnoo",
  "key22": "62bGGyCw3wcJwfp7Ys7Hng1Rbeh4eTBxyivG53hQc25VaZG5sReSn6iVNbXqEefQScYLKBpmzZLu3AetyVtbTZx9",
  "key23": "44xjZHAQkCWTLK3zF2dQSPcwp7TmLugy8HakVkXgtw64prhRxj71NWXtz2qw9LGhn5H3cb9xQzqqj1rzvfom2oVi",
  "key24": "58onEgmFgAo2WzVifkJ9Ca8cKcKNtcn6vmh5JeZFkpWKFz8VgF2J4iEjjAcWu33YJt3KNPVeks5hU6c2kXRy5mCS",
  "key25": "3d1gTP6YoN55NJ63Sga3WWGambVP8ZHnxCHtuz8JWMLjjc1C6ZbFQC5debdEsS5po8TbfGk1KhrA6mf82xhrgtVA",
  "key26": "JuiYTZQzTYS6QBEzTCuERUBtVr5YNCNM6bwfWVSvoBsidcQ3J3BMj3WDdBjYyWPEv4ms7x3sLQCSHruLh4B3GFS",
  "key27": "2s8KAFo2ManriAZBcwCbb8haNH2HVmVS5VzNMZVmHjTb25K2CBvzqgBUMad8ZD32cx7pLZi94cDhBkS5SUR3Cbcc",
  "key28": "ERqzjvceuJw1Aqm2HtYbcYkTEp4jrymvfR8a4dCWgfQpHrks7ugw6YknBnKvShhZGE45fimAcP6ftXFgsKcwTAF",
  "key29": "4FoeBzhKwwYsuXzCuUddB8m3ygahTyn6iW2gKhBGqbdRRN7b2RkDDcGhbMoZLCKXpX4zG3cdAXF5Vu3YZSLdugZj",
  "key30": "3zujU76JNFJ133NA4fTBVy15aR6RB51PGChTCtVDDHNjDDqkJW3M74SeFx3gL95Vxe6xWzsGLG6BqFzKZhbWN9vM",
  "key31": "3icoPNufj8Hvd4pK3snENRdisXpkRdU755SmKrwNWBrqiAVzQZKnD9S1zrdbXU57BEtyq5poZgHqnFWYUeUYF2f3",
  "key32": "5mQJCFdhK87MWEFSKYAp8QJDMtSwE1PZWdmvzVH2XiU6RFQVeRjyJwZwniWGFnLiyc3Y5njDbh5RiWYGG3FadX2x",
  "key33": "dKKQafoGzNk1aYXLbu9xCmxwsyucahFDKbUwJU1EuumdqsquFWtYdNx29DRuVdq1GEk7UsMdcARUSLRK5f2yDoD",
  "key34": "3zejz6wdawoXQma2daeRqCZzXsKUhTDjRTCnKtZwdoDw29RBG7r2TTp3ktSeGb3VBJvQiADSyQm9e8hYJ5yJQVpD",
  "key35": "3NXkHas4GpPjdSaCJ4YGfuQyXD8SppiPKgGSxnr4ecEurnYmiBDkhQmb6WjaR2Akakfs8QgW1KarEd7UNsphBZBD",
  "key36": "3ohQUen9MpBvDGiL4gM5Y8pKtQ1QeYYeJFPmKEF4PCAnZKvqLUp18rnczsBkgcaytQuavYxqic7wPxh3chzMm1A6",
  "key37": "3FX5LYU1URasbdbe6EQwR27cnkJw6aWWtt2jDk2UuoALY5hPi61FxbPZf3pz2aULJMRsVkmkhBseU129vFMg3roU"
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
