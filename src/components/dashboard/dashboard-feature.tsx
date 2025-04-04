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
    "39VkEMc9x1WKHqAPkc2Wv7sRvBJYPe1bsLKxGfrbitQfV9Ee2Hb4L7MbxA9aYV6UsRGxPpxTD93tX2YBhsppdcto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YSAmQtxGYMGSxFdWNnhkuLdKAmGZBVFnSSTCs5RWngMzBqf7M5ob5GBcP5uJst9Gi3skC9qyCYM1QAKATWmsn1B",
  "key1": "Yan4FgsBsxTRojSY1m9Ngf7bt4TwVBCfFw5rTEhVky7AMnjDtapTdqxfBrHFNwPSjr2RMUNvrpV3vp8RtmmXSeZ",
  "key2": "65DvmyKe15vTv6744bPAxAC5qsH321m1wnn4fPJec3rFJQAHnnYcRRtUSRtw9LBskYfDsxeB2qjrXf55cjvYWaWE",
  "key3": "3CoRom6oSoEEz82wR3tNMkWjYD1W3MFMZMF2S8uTF2n6ssbCPZ8dNUkTTjj5rGLLb4RPQxyxw62Ynm8RJHkKSuaw",
  "key4": "415CGjD7B3pJajzfvXwFUrN3xn9C6cfDHsNhLnQFDAUwCjDLnTotUwjfLEcgxBaU1PnYdnE4n2EKAcBWjU9kHQJY",
  "key5": "2WBH49QmQZDnGeZjQo1bakErdmiGZ2KFsqGfdPMJfH9LNyJxFz4KqbvQNipaxtZU976XVKbdqz99RVToBiZ2uaB3",
  "key6": "2pQtApzujaLdkLb1Veam7P3VFjvBFy3vizuS4Tv7A59DLiff6LyEizn2fYwFtJLkyj3vUenqoZG4AAzzyqcsBJAf",
  "key7": "HfxjKurP1dhiYyNmhfiTWmvLCWJskQMNUdVapdFw1zMCdqsvEXqskeMYUCBKTK6DjkuZHeu38gfk9AbtPK7DbqS",
  "key8": "5RVE12W9DYnn4i6cdF6jyoN2qRRyxbVTuCSPozBLveJn7WPtaPoZPRVySctZdPeDLBj833jneTmoq1pnfUoegFmZ",
  "key9": "59dokckawCwxb9uMgPdgyfVELk1ZnvAu9KJ1HQbhNeevDQ47NdS8xiL2v3PTU2CSbPVLuU3P5sAMCtvNsVHrHvFY",
  "key10": "2PaSYfwUxEPEM7hSs4uZYufkta6twSUtcAFN8CFuW7zLQdFKc35zqux5gT54txHtAcESPgHsdGCBje6jLevskTvk",
  "key11": "3V8y18hLeB155VcDmdNqTnCm9WvGqcr3e3E7PdFYGn8YtEG8PYQjjNCrGnBvDzJnSxEmcQkKX78UieUMe1W1SNNG",
  "key12": "39Lk1fV2te1yQHkG1TFzT79jFy5X4WeoCNGsNiYeFx7vwqjtyX6W3n5TnGcHSs7ttnuZgBY3uk96L9B2yGggnWhV",
  "key13": "LR91Xsoo8EtjmJmDyQysBdeN19GoGo1c8vh8542g3Ux6pNszQTki5yxSeyX23Pte5o3RzY5sviiuTkWHr9zZjFN",
  "key14": "2PyTy8BsFCn3FtcsM7mTzsMCAUMF7FLhutTrGLSJQYZfWQUmD1bTdtPYxLQsi8KMRyYqjUXeRVM21pC8ZBLd5xmu",
  "key15": "2vrBvn3tVMVMUh7UK8rxRVph8v1vcDsS2rq5PyVTsasFSUU27b9Qr8GjZhjfUr194ULMUGHjAdP3nAszLLpDZuYn",
  "key16": "5ZYzM3RuN3oXqe9whD1GDmWER7JPtMzUJawcLSWZTQAxPzYu2eqCEUiUg3MKo7V3GDJHc1Gg51afCcpZQnAoAu4e",
  "key17": "5qhLxEHfN54Gj6sMV1vsFdJhTSAKaq73Ygy4uyJpmt4x1aZzjv2JU4qK8M5BmFvDtAepHsgdin5NjfW3cyYBh6Vx",
  "key18": "4TLviDywA8w3jzpkj2piipYxtMGQ8RAz8yC2XHD2v1atDZ1Mx4Jk93X8bCKLbrHuMArfxe7FyCfHhTrG9VHSjCty",
  "key19": "2Qd1M8TZxygP7thbkHgLA3faW9iVdbZQiKuDiw9i87PyYhRCLJw16o2Yw9MFJd8hAP8vfMuD5jR3e1iJZ6YQu5ji",
  "key20": "4s2vmvaAzAN4MprGAETeiwwUdPUJa7YdmA6isppEnfAUotSDT8NNG8PAc9wzfftqgYSkyspcYZ8fPmgyiGGcjHeq",
  "key21": "4m8CUFXwFhLWYJQpo27zeWgJR3sbK8BP5R2njunwkzdRLm2yp7D5j6jJ3EyDLRwCW1oJseExNbeG9J6mPmRwBshW",
  "key22": "pvMVoJc8iaDCjx3m6mnENzVRFNPh4ALvrkZ2bmqPLyNbQHLRwxz9TEsnP7wAV5DrA31rodd4eY1MWVemyFakL74",
  "key23": "35DtTk9QtLHN8sCGmE6T1BsY6iReL8JrmoyVRAW9Jk3jhim2enTABW1VB3nCqTCiqAxR24Dgk4P5SgvZ6osxzRkb",
  "key24": "2kJRrFUJfBkRAp69C1U3MF6S7uwswpqwTDYfVtFCvcMRfjae4weDUY3Q1eJNm4im1oDLavrKeA2a8M15B8P4vM3Z",
  "key25": "3vMYNAh6i7pBJQH7Y2aoxLiuaCeW6cPqbUnodn2L1hmwz5FP6n3XBxSvN84EJ18U284Kk4x3SmVPngBUQr8UUBEH",
  "key26": "5DGEG2AZ1bCA47YMMUtEJS8B7W9SxemBjxRFAL3t3wBRa96bV7F8WpKayEtaGHxUzaUoPxAgRWSyQzAA6xd9rgD6",
  "key27": "48j4mUpHbFGXJ5T9hptNUesv2kVHY1m4sTGGKsqFtAEqgEYNggmtmKJGo1vEZbNAEWBp4r9jWBMoXXBjiXscSmYP",
  "key28": "5Db76uNM3t6sENZgZwfLEZu4gQ2pLDjLZrWzfGavmLifKV3xM2gXYSYUiwQVcuKPoXmwniwiqoDD26aXgUSWkBkL",
  "key29": "3nDp2HZdkqUjPQtaS7rHzS8p6HdasHuSDFFRcwnbeFK8pJJq2iE5SX43iAH9VCEzqR7AfqUunpxFjxQvwFH7VJxz",
  "key30": "5tej198HV2u5B4HggUPzRjAx3BgDZsohTCp3fGtLW8hKcWYkqDibmLLMuhXNiBV4QDxCod16xGev4vS8BzqMMcGk",
  "key31": "5rbb5QnhFsaL51f8RbSeYx7pPq9KhhsNadJNz2QkRsQ4zDza1Ufov9T6DM8SxwjYT5HnQCfTwQANtwYRGfKxcjQR",
  "key32": "3vE9GBv23y2z3NRuQLe6X2LDD4T9bfxDye5pDVzmzwZHs4YNN9tPAvnRBhKND1bBQkHtq9xGgM63B3phfCWNih6f",
  "key33": "4bAb3JgLYLZbYXiFasSpUqRHMPbbfYpEmHqgZ4pY64ExcAYAP8F3zbSU5xjKkZuUm39Un5bPkjFDNLxfHCJ3Y71a",
  "key34": "4Nep9DyELRrmwikRBDZ1uiip5u4dtxtdynss4999eVmDuAuneKDSvKBj4wtJdCY7VaagNKGji4nixaowNj4wRrPF",
  "key35": "2iGSvWNopyjFKqLh5KGtx5PNLDi9f5PHyUBVf1qTWmTm4h7S6EyuRZYM6WwpD9PikEtEcPnJv5SeZAchpQEVYbw",
  "key36": "24zT6ViB1Xpxr4vX9GkivBsUTNVVkwDTB31f2ZC6kXZSY5wMd2zKZg3FZvfhEw6GzkzP9omV9p6qBCHGxSHLf5hn",
  "key37": "3CNSY2R52Q3sDoAcGsBA8FPvGMvYeoKFLiHEsQcKDBXWL1ofiQwETXWqc44h7r7aKi46SRR8cFZn3GgbtWAMRwh9",
  "key38": "2B6yXmPpz4qt2YjVuT3AgNwGipuw9nD9EUY3URtB32MF3zV22n64RfyHX4uTak5fiqcBsfuqKV8m3cNmjG14X8Vz",
  "key39": "2xXccPdc5wWSFpnawxMR6a5ZuztdXVQGBihQjSuKJc37u7fZU3bvr8SVwsszYm3ZPtYHpJF9tz8NbPkKEUimeZUt",
  "key40": "23we1Y82PKbuKwEtRzsm3C6DxSm6kYWBKu4zMGM9kdCc7WLKQEsmpppASFYeo48kxkgoPVHC4idWh7v3MBx9dTJu"
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
