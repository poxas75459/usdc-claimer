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
    "2iVb16eqotpiDTh2Z8AhqhrGBDKnPouwQeDxEkZpNn5YDegbauxJZchhhDEgJeBaDFh1yNMWcX8Ms5d2UMEKtC8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jitkm6Dp8rP25EsoeicMRYP4p1ucoU4MSHGw2spQ773HNvEfquTAKRyKNe2Zi8JUqdAChkWcK7g3eKW5nnv6sfH",
  "key1": "5F9yY5BNpk3kjcCfGAX7Y31oKbjZV4YUUxauQ9acnhu9xV6W7XkGeoT1nkxUf8dkLTrUHfd2pF56Y3Krf2jeZaPH",
  "key2": "5ZtrgA23XsfPxZeCSuSiCA3W1aip7cH8ESNrkXVP9y2AJgw6tJooqz2jmTuRvi1TShXCUamdHtfVNpC9iXoLzFpC",
  "key3": "4PVUb3aPrpFRJJgTwbRn975myuXgvYkft95LMtRbyEc4UbF5zy2eSy9KKW1WbDE9h9kNgnVa3qpZLtGREQxpHbr7",
  "key4": "5x6tMEJ97RJpYZn7j2xF5NPE65BjQwgQSqyNgTb5xJcSQFeyQk69YhNXr3QmzDc7vTQuDNo2r1WJo9Y6YnUCw6Bo",
  "key5": "5VTJ1Pu6W1voqEdPSjB1oLGbFZ1kuiFhVvA8MxUFPmwVedMueghC8R41JAepP7vRDSmYLcaAJKmdYUbRtJrKcmRP",
  "key6": "HxUhygpz7HsE1jvMTo2FyACoCt3hb1hGK5339YF8eZgTbgRYsY9PAFMohaX3Honttyrh8dhvRN74b7JQv8q1zY1",
  "key7": "3yrV4Bcg89FBkPiEhjZ3cLP8rDF4BBo6RFMwMgyF8U3G9DFWiJPULJagb3vCdGRrnbJWmsz2E2pUidD5L2W2C93b",
  "key8": "3jGLhG58wXhjL5Sw3fiPE2GH5J81YgHV9yVGWpAFtBXNL8ZXVDw7gvUGexpEUYmVoTYorT5zQuHxvpP7sL6enEmp",
  "key9": "k6Kw6Fz12252ySNDkFJW8d1odPh2bGAogyhrnnZwgGqA3TvKvtEoKVSHL9YB3W1GSxsXUWyZectwUyFkmUgNuNk",
  "key10": "4SHVCaq2ta8LgEC1ZiyqxHq3Uz7Nuo7dkoMSG1HLE1XNpgw4U6EhtF9jfBFFTmF3aBCLNcskQZYHwPu7gEqgnkxz",
  "key11": "epKGhXRnhEztNKDDDESsd9jibgTajX4474hxeoXQvwZMF9bCpnY8EoWpgeXjHoSA3gDEdgQgyvxNGeSZBwtR2vn",
  "key12": "npFzpGAtRmTDZD7zk1BDwBP73ff4Zb7dLNY2Gqq72E1iuirKADaJgJxhxZfT5rsjh5y5YEs64iKziR1ApkESXkD",
  "key13": "K68VrzqUx968dQWUFZZ26ADiF525oFU7wKwXuN68EYA69pyg3LQueUY3Z6gHgvrALDx7dMa5RGDpWrG4AXfEEY4",
  "key14": "31s6cFTKUeYoNwvbL5emaGiDRuzSZbMX2ZY48nW5UJvtcnbuELw8wCyeo1xRCAsB9Dsu17HL1bJhEwkgY7WGhFWk",
  "key15": "3fyBu7N9GAB7rFzkk5v51cJ4TotgLSm2EdudfJXJX8GqPZw2Fa4NTfgB5E2ugAtaJBc3UqNXogSNLzJzgGbEW9Js",
  "key16": "524bDcCtDw9hdXB9zvyNTarXJc6NZZZa8usZncWLFWCaQ8HLF96ateTJ4SL3QTox4B7VAyHpRFjazHRJfs19A8U9",
  "key17": "3Yjv8MJnb76EdF5hbrseoz3dJV7ijhutwJqPZ9fmzFL92u4So9VeVaSHhxoCvsTZooQFoHFpXanGwp9qqB5zQY2P",
  "key18": "5Uiqj1TssP7VRnAxyEfr2GC8c7AhLzPhC3aJpbDdp4AY1kQY7BVoHZHukLX2Ae7xZ9a1WdtCECy6ncjeHLYTuDzV",
  "key19": "3QsS352K2RzeypWUzC4hAU9QC5kmCeDwa2USa7FZsY2eyBJUnuYqk9iyDPmjswPbLuBGfySkLjJxQLmQYxZo1pXg",
  "key20": "4tbv194y2GPoGSvuue785bDe7tu9qW3YBCiDWX4soYRmrWDosDBNdTtnsr1Uyu1HwZ7cBsyr9qqY36iERvJMmdLq",
  "key21": "5jQdWxszxsZpM6nu4yJs6EVb7z7tZhddqRjMA5Rpn7rkYW2hDUsmRLmFyknZqB9JZAxwsgA9gr7WmCoZGrL2dPes",
  "key22": "3ToyUeBPLJTZDd2Uff9Dg9KdHwJC6L1cK9VZ8M9JCdxLbFBQTScjzuNgRMiUbTv1jW43z3KNcdf3sShSMVAFPNqT",
  "key23": "5HDYbNvwgexrPNeDBRp2RFGhT3PBC65ENsVWo1apENK3SuDBLVAzdpcvFc5xVA5XA1ZPruPSd7i4qpRRcT2tRSjf",
  "key24": "ephKQTZQreZjW9fUQXcswj9ZRfQgFv82x7QjEwXez9o6xtVaDV5F7o5949F6Gn28cNfYrGui9c6rsqNpADPfYjM",
  "key25": "4eHo4PyiobTL8NFyChQR3ihnSjQDSXPibu77gMeRnYmJHJ9JDNo1s68E2KGLSRP565HqZRfwU7MjqdbVqVqzoGFX",
  "key26": "5J4DuUrHz5QaSK7j3Tw7N1gMzsDdcSE8c65sct4DostPLZ2LzzzLUtdwxDNfBKhShB6n1SgXEKkrzRXXFyY7KWvK",
  "key27": "4vaaGkCyJf2dCVbBz8Yi9WoUwSZXgqsQre8qEhmg47Bpx3GthLSU7VtbZNqmGM8Wf2GCnVMeV9crJGUzUvCffTqQ",
  "key28": "bksf7hkdUWBHVrq4DrCxx5GB34W15hHiQEW7Q1ER7HnSmYo4caQQPx18m3Fo22QntSS8AxKsYohoV7sKxv8UNe6",
  "key29": "1DNgkeybSubwu1aFAGzSQGPhbPmEP7CqvqUnqz3B5YNpLeRwR4WQWpnCDVuK2Bytcu1G7ydy5fxebYgWoc42AgC",
  "key30": "kNLnB4Nfi1tkyx3Mz95JtLHMwyRu3roMpZjB4oKSndLfpDiRfuaxrU7kxgDAYcEHTSXqgbKm7knsskcFBsX66HM",
  "key31": "hqrSAVeSQD8C3G3r1Jkv6ZcqyU7e1EPd8KTtG5XHVsaPZMNAbjnaoKQGj1AECyNVBKH13g9ji5zjBqovqe6yU4K",
  "key32": "NddER94PPGhTxPTNQdTTCG6GJgJh7LXDVzfre7NCEWyw53XkHQ4v3KtCqEi3gqX4n48JUxKzaBCbK31tct17jXj",
  "key33": "5u9Dt1ZSsjRG2DoMuRbSZAQb7zo4kjkDTzUbgvL4ZbxS8nsEKZMc3PpuxAqBxFeQUhZoKrB45TMJN1ZJxcZkQ8k",
  "key34": "3PehHM4mNBvYWsWBxRJgqmo1mxYRiEGFw4UAv7YP9TitLg5mMUrqRk9JvagVjAiV5RNBdRVZrjtLFHNXbnSZASMu",
  "key35": "5ZsrnANMsrueyGMwtCXxpUwkm4Ry1RoYkKfKSXYaohVapWMgLY134jK7gDjXsZXLrY9Ubx5mQsPDUZXwsVteA1z1",
  "key36": "4rZv9DCDRQQZnvX3niGv4doyNnbeA9mWExCM5RSjc8VZw8zVwrtVAwXfbe8o2Xep5dCFUQyg9tuC2keJZekfFfj"
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
