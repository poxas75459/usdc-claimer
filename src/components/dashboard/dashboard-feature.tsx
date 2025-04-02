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
    "2x6G97mFAefv9iZn8S4SvWoHK5WKBAipyKHKjyDk1SqkzG51h47nkuNwUBdDqj26pi8RjG2Z7ryKuwyh966UiMfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbFtyGdba33Gs2v6PaAFoJGxJrjenuhspqbsC63YrSeXa6mrvBQqcMfNa765U2Q2qUcSzUi8V7PZ2F57tSXzbxw",
  "key1": "2j66JQGAhDhcdPo3y8vLoSC8SCPZ1pfMXom3bjo8rjB1TYfgXcbZnzM1oLfQgGJm3gSgp82LJUAAeoBpF7JUahNF",
  "key2": "2pVYbMN58Q424Nz7o1ZGQAq3nuJUfsjwwQxUD8tF2kpcq7tJjqf9rP9eGZYddzrvgfs8t9pZn8ZnRpuYitbkB3N5",
  "key3": "SXAsLTReLkXw6FzJgwE19b2zAHuHZePwU5cBCjwL1AathLv4Hudd6j8fLWKcijwC8VvgqkB3WMCRoTpKX1Gv3LE",
  "key4": "5XDkkyLYv45hxzQGKKJSVGCjH7Lo5ZjNTkwTdkXEeojxVEpB5ykvP3ybGkfVy5mjAdgwTkrBFNHchW2bKoGJHkBP",
  "key5": "647H4SiWLkZ4HaWkBqCKP53w5QGnvUK6wtFXEmtMiPXbmRxkoxpWcPwjsJMyGz9An4df7tJK1mfHE4Rrb98rUBZ7",
  "key6": "44z7ZMpQrtaZMJWTsvXwcLrmQK6qSCz39SofuXofUYpX58TTRozXJ1brRCBz1jUpNVczUM7CA2UM2pLna5h9ys2Y",
  "key7": "3zHNBpFue65Q7aBxizqhvtMWk8sa79XHuNRMwi5DXDQyDZ2MRLV9xsLtBZYGxwPyZZToJvWGNTvtiQa5XAhjYwzr",
  "key8": "2jTF4TMGuPoQZZssHNrh2pJd6xWnWspSDAUbLRu2JT4SGDFnt88DN4yaLX3kx87pG2X9agBVHavPmtLR7ov6wfCE",
  "key9": "3LPDBWRwPzBhhNzQfMeqottH6XQUSc7PxjKaqMRXPQYPoduLnTCqgaLd6ffGDAfqoaZs5223ywMdZbRsUVK77Yf",
  "key10": "23nFRhiLdMEKVPnJgAjKjXRXcmUErRinLWv1uFvMDzA9fhYJVRZAkChfvSMGpg7qTx6ZYTUVrDjCrDeMoJzt8sD7",
  "key11": "3gkofKvdTwKw58fxnsxLwrb2fN8tLCzasrnvYbceazyk3S17pgdBTqi51prMGXHNEiEUHyyzgGub1wrWyGfSkJgN",
  "key12": "5PLrAa13Wt9ikayRQnqCtDLueizDf8FX4dvp8MkBKqcNQfVouKEQU6ffWVeLq4sipGqw7QqmacuVvkzy7AroKiMr",
  "key13": "33Gmhm8NpHSbGRFfvo3iXrvjQbVKmHB1cqRbDA5gwam5FQSuKEGuhA4SuAH2xsyW7ajiDdVabEWVayZHgGbVE6Qg",
  "key14": "22hMyTDgb694ze8TPsrz7jEtAT1cdFRc77JTwKd48QZMA7ya5CpB2zntenfihciviqwM5w3cLy7u84Ea9ttf8oMp",
  "key15": "5iS1jRs4ya5DApT55REquAfk6SkobYNpQwxRvgLQgMo14w1oVFQYiEVvGiQjwrMDRy2PSPvRwNitHUZtFfAjBvUK",
  "key16": "546WJasbgGJL5XnykdcRzz7kvUyL9aR7SbQpMLoUwAqtZz6nvvBFc1cfK6c8y8mdtzzAmezNrNAyVqe1runQYS2p",
  "key17": "mWUxK6xPshofaV1139avHZMHaE5NvitQgtuRZA5zv31ZHDb9kY36UthmogiZePrqodUNP5PpgViW24USez6vHbC",
  "key18": "4WRMqJG7YeGc5YEo8xtoEhkJBzDT8No6EAGH5sTevATTJQy4LHKmrCwFjAittL1NYqb7HGctV2pEFhS8KSVHjZgb",
  "key19": "2Ku59WTjbF1Hv685nU4dbQNE7SGKNuks9aii9kBkkYBLFSLbpT4ayhzt1YFnojn1KpTdVbaW82gnZ9btsv49NqGe",
  "key20": "2VjBGLEwhDHvKges8rg8tRSco5YiSfFVobTk13YKJtQGXTpC3Ue7Y6UPTkW879CvEeZNYNC158TBfZKQuN2pc5PV",
  "key21": "5ws2pFfiFNc23EGwpp4Cm8eFKKnMF9h5b4XfzKLFnmwf1Ticwcd3JmUfCNUPiJKWnRXWuSN1vG8wYS57ov5HHSo8",
  "key22": "5XX9qcqNAq4jz2kYxFD6eeVyPxXtfyYbhm97aykh7LWRHY2motLMpKCzpt18aNJqdqunGGAAhuxbM2ZQ2eNHaS4y",
  "key23": "37L3KSCC3XtdioDbWAYMwF6bv65k4Q6ZTUmh4XPLRydXfX1bGkWpAiB7dCZS4k39UbKeiTLTjdt3zxfw1doXzku9",
  "key24": "4YM4JUDfNkYF4bmSo7i1ZvM4GYxHk351RF5Dpcc7T9VqxrHbbqcj9ELwDak4X6UxaYDjBypH7DhusHkBvoA4G34P",
  "key25": "5zBcUr58b6ZtWycwX6fMzgbEQk85jeLToPMt3K5Va2kYJCM9ixVSwUKTQCqimYxxLhKG9ZRK6TyDNT2LiAkXc9tm",
  "key26": "29zDwY9GFjc8MEH7iwAvH8jS65CZPc1ARZ2FDJeDSbvD3u4cQ618aGoj6X8fuEHz9qLH1nxi5DFa5vfVnXdfo9in",
  "key27": "qd93KZPca6CRDDa5t9dhGrFXvR6t9HPPwQepjys5rCidvcumu4qDZyLPTgpkNNQTjqUsqKmrNyUxRSFhi3jRDze",
  "key28": "tMo3Vo16i1cc6QYhUU6AEVHqUNKkRNv8jdWmGMvtpeYLUofHjPhqkAm5VDHzDAQp9K7jQXZTUxEGw7XuidZns6g",
  "key29": "4BvDT3un2UwQuUJ2skM7VXvjSYTyLvy1Upn5QMUwTYT3MgMDdYMDQJaFU73qSqB9rz84QobcvJABzmYuRJyY2LD4",
  "key30": "Lp8Tg5wJAhNUsZSBzzicYGsY3xhJgAVTEh7TW92EW42h3T2KLpQHh4HxzKUjqzu9YQTxvEZJCNiZZVSP7gwos6c",
  "key31": "3PtKBPLA6MMGyYdiaMJRyspNtodDV2rR9RFhUKjAnARNt3zL7xNNAr7FEE1qNhCzbK5VfJvHQ1AiotXL1v5ST2V9",
  "key32": "41PxKKMbaZWuQcnKTaTG5ASdHz1yDFqXpqHzHACvdu1go8oBnpW6w7ZSy4KCNJZoZZQhTqyL2vMFeGCaLisTS5LG",
  "key33": "35Vxc4u6C9UeUUrDGGkVSUu62zDvzeFM4DgCfc2yeryVyFKHAo2uRFrBdcWXTJpSoNKaMFxQKHNGpdTgzzvcbEPJ",
  "key34": "C7C2oQsyMPZ5E2ABVBnMb5VP8ugnyBoTraNyDmE1cLEhGBatGZkeWo9YhBHLNCSS2qShCt4gLKH64LyWV5wcpfp",
  "key35": "4ZtE6K43R3yLfZjVvyRTvqxh9WEc6poZU7oPBDzDhvQTpPhhR9pnDfJX3JaHKoKNisyY3F8JkoUMLNGDV4EkSLnk",
  "key36": "44ibD2NCBEF9rLroH1A8sXmK2etwSBTqR3xsURUK46reHtfwi3za4jGN5VjGUwCdroWRNEZ9K4JFt9YZ6MUCcYNM",
  "key37": "4wQCdU4gVcsP32cTVT1c1c1vifEpYm87qKuVeC24v711xXvB2UPeKR37GahfLRChNRM64GoqbeAve7Uh9z1oQQxP"
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
