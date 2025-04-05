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
    "EbtPJEjn8UEAo5NxDAQZ75txzGWrVVrswp2yFtEZSRWNbFveoV6raPrQMunG913y62c7CAiaxsBoy8mRnGsHahX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x9VTCuEjdKUwDSxr4ooouPRiJjVgtfxCTocEojhDxss8eREMF5qudvcfhf6WTiT37HntWr6STRW93J5puAxMca2",
  "key1": "Y6c2MosofhzsCHoQh2qJ18PCL52wSu7MENGxQ1sdk4oCA7u9WzuAS5TfBVoBqythE7uj8HJWSs6jY33d4tzdtGz",
  "key2": "61GexrbLsRYA93s4ZBXDYXFX4oZFLq7CccwUAWvHt5DPL1RZRR9JFhhktmoE1emM8fGksSV43AzVxf4tZKq3PjDU",
  "key3": "4p3GsGo6SutPKhAJkkeC1Wv7g2qoNDmepHFqv5hYyLJT6UYHWhQmpxXKN7JwU4BKqzHVgGoEab1wq7L7tYbd22f",
  "key4": "xSnYd4tqMNk3dywAwNz5fMgA7QtvhUx3DdKwpfUkh3mD1h2M2ZkLmaV7v1vH7iQZN6WSrnQLosQbKndHoygaiRG",
  "key5": "4r4f5kYqiQkKvDt8JLuhn1VRUWUuaJNfWazZ6QzPmCUJjQr7n2wvHFDkbNUrxkka1FrCDpjjVaBemm8TWr6o4wmL",
  "key6": "3WjqN6D2pXvXJA82m5ZsDoSAcU5s5Wg6McxKfJAPycbfxnNQMG53ddKW744cewfPD58DNU5oMeEuQ4aASjkYtJC",
  "key7": "v82eeW2a5q5YvACnnKhqCMi57pDLwKPyP5nY53q15EpVR8P4injYuUi1nBBLNvtsrh4xCKpRA32nRvSkfWkBRBg",
  "key8": "5k52XqrbXpa157YNv8id9f9fmYbbvCZqbGEth2aujgLfQJ8UKFCLpDu2YxaATBtDCDaEXEVnHUhnQP7ewnZh3zxc",
  "key9": "3oseUSFwkuyq1q8jwAGpUEiPhG6cGsKh9tPkR99KZpRiZjDmbvoiBtTTYbAUaFST4xfumoy7Y429uhe1u2r3wVAg",
  "key10": "41sZqrG9hEZ8WFtyGVpHSnxxuyGcYnvj9QsN8Qf6SpfXpUCABGUZQMB643pSVbiQj1wy3cTdRt9t9BoYe63onZza",
  "key11": "2y76dzuNWtUtFv2hhSwKvkwvih7PkZoU51EZP2x4YdFtfLsBChc4dbyxsY5QvchUDhfECKkLVjUoqu19jTs2AwU9",
  "key12": "5AmDGQtdpNr1f9Zg8aVHfFxFkxNVSgfZc59khHYxWKDV5regfxyfb7oXWkPY376pk4aF4YY9VvccsmRQp2pnR6kW",
  "key13": "4JR7h4SFW4WNLuNMSHYask8U6zVif6z2Yg4LZyQx246uz7rGjp1n4k3Lj587E1UrVgJ6QzbgL4cBH3MDkQapgVYe",
  "key14": "2efnxG6csPxGxTTYytWsjT9iwfeugH9q52C3Eczex2iDbAYcH6eFtmPHxrZuB3VuPVja39vspvrSaQhGU8AtmYNq",
  "key15": "3WP1hXbisuuicXzEak75se4WksvXBtZ5e7V73nj5PGnPWwvKY6fTd8wvd1khkpS68DwYswF5ZfNjs6C2TbodUsUB",
  "key16": "5P9mqi2vqjVdib6sP69gRZpsdvWLj4KqsAagA5hPJSAxz96TCi14DybiPQLhiWkt11jXDMQxsJL8BDsZZ7hrR8Q3",
  "key17": "5Aw799PgHkHspVQox7XkzvKomsQB4NfWFKsmoAFTU6NHFXXboWjGATuPufgguRFQUtLUYEYpfubSRYj4MRXN9cuc",
  "key18": "36KWApecKkPAeJMY7Pp6WfKWBo8wb7eg51LvjP7umhqaVXTt71zSWVaEg4Vk8NR6c4QXAEkwgYGT5s9Kx3adyqgM",
  "key19": "5tku6NcRJ1RqLPhYVkSbAxrjvTiknenQ3V8Q7SgmbgfLpZGa4nEF1NkPrkYsntYDeHyQghWJsjT3uSgVrHpEQ8dW",
  "key20": "2JsLX4Vy9aKLEfGqcsNUM6usVj9Dx2PAstEvWfUcdKbFU5wNT7fVtMQCxd7SSaXCDR5cs3x6uapp3Ayoa88Tuq4T",
  "key21": "4aCny3AMZxfpfAfCceKLiD6cN6yChAt8jkDNieafqZZr3J47F41Yvwv6VUcyZtPBDNyPeaWPnYj42VCTYXVQ4TRV",
  "key22": "5BbjbwSXrGHy2gxbxiUwtDZbH4KsWsBVyPJ7f3mfKpoGiYzEmBa9m2pJYWDHhJPnLVg79WFaD2udGAJt3bhMMFsC",
  "key23": "3Gvf1XkGh7KrVdgTvx22EHfGrrSn581HSEBCwxHyWuKwWXMZniemFdWyHAYkyB4mdBuPnAD625Z4ez82r3afygEY",
  "key24": "5xFq18AFqd6qKogSFuLcMufrZMT39jYtpyabHWnW2VCyKW1BqhhUKGvdVhBnfSKSYz2wKteCiwS1NZzZ1rk8AGJt",
  "key25": "eyV1cgt3keKVNgiB398MBnrDY5Rjpt85pjAs3Xnay2ouskZyqz367oRQYqsXpwsEYRRZDjzbavrbBkZvPvHR1TE",
  "key26": "PP6en1Ghxb6Eqa1nznW5p2jyxayvcDfcLnjbbiB9th3WPyWUTmYjtf6ZCtCr7zix6G6BUvVUnYbjxfA7KRSDsYA",
  "key27": "4Wm5WTpiU1CmEm4sHfAT9hPx7e6bmFgdayFwmgK8ZyrBEKr5AdWS2T3P7TwPCL3PFWqr1qNv96VN4A6LqbZ1Jymj",
  "key28": "YkWUxZ3x1mLJkrRuM2P9WcMojSKEP95f3DfPNqWVCfzV17LHqvtmzAUNHWfLpidX7JFhU1wNMnQXSsz8BEFHY5B",
  "key29": "2e1smoaFYbg7m2rDXv9wruCk9qYtjsFpdjxn6pnBQypEKVhv7G2eWDsUR78Bf6VMmgkrDvumEgkwyZGA7R8s2Ge9",
  "key30": "54CxT59gFG6t87i8zvtQzDKsBN7mJVNJr91kNaRrYfkhka1X8tw1zgoWD4twwVWCQXB5Tt1dp5iwXJxWdXpPdLV3",
  "key31": "5CDYegPFvuf2pucEddnEJVoyQCpqQjTDgogTAJqqyrtrLe1p8KF43vemUnA1KU545s1LXFeA4HDbKHNg4bYa3drj",
  "key32": "5x5qS3z9r5vz43t2xN6WDzu3MceVqq74AbHM9kpuvCRykb8a3LL2t4YwUWGharhvNmsKjnE9KxKanEQ38vdscmJC",
  "key33": "4Kmn9Qzx38e1MTbFq3wkEmhakETxBk9xZKiaofQ3Zzbo9v7GjXCrn6HDmeswP32KtcSmcMgHjSJTkkHP62hRoiv3",
  "key34": "5G42entNsPDuVaQreLAr3nRXZD5nCDZM6EeMvE5KcbUPRPBVyz5ZcUDUtfdRoA3U6xGpzGrNEHVPAHtxrfcNjA8P",
  "key35": "3MvbupZYMkknPtqNKtcCJMGXTV8UME55scrvxXM4xcaZtbBuuL7TC7GpLM7cbajT4hf9kv6JnAPgSeKUhYeYKWaX",
  "key36": "4HtZGfE8t4YQm8PZLreBAJA1kgpzjfqGdZSNdbw6tJMAwCdazKa6Xm1cMXXsDGZbqnyULgnBBDPFtUmcxsSzqaJ7",
  "key37": "2QVbVx1XJEYETmYJsL9kHuUr15v77SxcxXms5ENxbfUKDp1bxcKD1a7ybDHpbhbrLdXMupLZDRvhbi6Ls6ha5V7b",
  "key38": "37v2xiVJVaSMfDfmxqrUrMCMMUbbtVZMTjQrzmQg7sVMuPj7frA66utPLFNQwZRU7nE7UzUZcnCvfJRKGL7QryPK"
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
