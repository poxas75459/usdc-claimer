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
    "2NyvXSrP64fv476i4Fgx5kZpoQRRfbvgk8xv6TsEaZUpMdCLD8zWouhCSUGxkANPdQH6qipiqpF8Ctd1KsQ4M1hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Edr5RPQe6j4gjsezmwdKU6dzL7VcQiaG8wJU7ZBE6Y4HTtj8rdLWkPvyNWUXinSHZtBCSXM7NY9DZZsZ6sADZFQ",
  "key1": "pkbEGd1CnuquADqmXA3TcPkSaofC3kVxv48veVNtmJnZx9pXjqrPgTRWMWgRYYUEQCfzgw4Etny3xfx5WmErwoJ",
  "key2": "DEtJMQB6Em2VZgYiMHg9ZdtBMV5rBRZvYGcvS4v1kac2nNqA3GwhbvYJdQZmsgkU7wCRUmnXYD4GXxiAbiWq1FP",
  "key3": "2BB83viv8DUBgSf8j2EGonfo5sxuPs5sx28yYNXqYkB84myYBhdHvbmZnRxXkYaEfenfmF9S9aSKkJSMCvEB3cBn",
  "key4": "3Xy9RNVMaU8maCx5Ex6FFs86NcRWDYCp2KGdmiSxQMcixy9aYMXYRHBz3kN2nAyih6nYvQsLDDhnVJTDj7X6gJuF",
  "key5": "3MRcyb5tQQTVXLsk1uFDS7kFzvEQEjQQTi4Dw47WzDv44xezJce9yyuVBbqLuoVnjSzP3Qu3FKXoH8k3ZerVAtWr",
  "key6": "5cPGXYvtr1r6AmrdVBvi1zSSZXStQJsYDuuFkWtrnW67FUYTYsCBsYboiT1DGuonnjQwEQBag4jsoBJFgvHypFsC",
  "key7": "5RZWhCyqMmw3KvzvmwNQroQAWmqz4aHL4PoRdRmcDnkF9X1zEe3wht1XaQmdc7ZJyN6f5PxMLHyQPzuFiLh6MEhd",
  "key8": "2KGq4gg52pKfiPYxMVmsix2qnj4ji9b4QKULCTbtEjFGnPx4yLANWCXwYxhDkTPy951tcGWwTcXFWtbf2xmNuZXB",
  "key9": "31Pzm15nVVKbc57Wnpbetw9Mn6kCv4CkkpLxC8ft25GGZc4rZhd7g3yHAGYgaL2YYx42M2J9rPt6YRkEJ9sNnkwn",
  "key10": "4j6FGYBB8xvUMJUbLMBmXcysXh1RGZehvTLQQRSiXu7H6s91S6W5BVcV2niemgm9L6kpAQuRV7U5QvZx1A9uXmEv",
  "key11": "59gjf37ZJmvvVW2M9icwVPfQ15QbVWpM5vK6Sn82Cx2yhoe5qjUcgjm8iYiF7nNKMspwmgRexiJWCNfQLKzTczQs",
  "key12": "4K5YhsqpZ9cTmXUx3BMVfugU2ctyogjGdLenR9p97yV31gYDTo4WGQYFgCjJRDu8gh8NA9Ruq2DpCYU5SUpKthL2",
  "key13": "KLVTfbwFg45jR9FUe7HagZ5D3vZyAqoWJamJXtHLxYmDaFXcTYYcqWM7HqCDBc7igQYmMpwkF9rgoNAQ5UDvTF8",
  "key14": "48VzgQFys91qiW4QJAv7UX1sVFdhddjyP6ZHit8jssFrsNjjvdKxShf4u1p6yqpMMdpk4YuB2W9zR16FiiJaSGGr",
  "key15": "5ktktFapVpfecEnvPLfT7bHHox1tQuQzNkSjKXEz9RCvZc9maRGTbhU7G9gsngtYDZTPpN4pCowEihU6zCxEcgAD",
  "key16": "36Snv4bgRBqz2QhYwgvzkS8dfWtYUnp3FadKLn3PZjuNx4m6gwKu9fB62nov3XerQE3mVy1MeDvTNhrJo3gzRxue",
  "key17": "4sC77rWaYZEf7U4Q93VD7couHtSxqb4KszackCLjr9QDPQpiSVSs7KfRbz4GX5v9pKgWhsJ9UNEdaSYwsNLfR98",
  "key18": "4pRQwWqgRKPzTb6XqdysEG5Qhrk1w13BPvxakeAWQnoeiGd7Xbo6Awc8chcJJHg41qA3L6KT4WMXppepqgcHiWqu",
  "key19": "4WKQ4d7cGEJp6EEFirU8mVr2WvMeJ98v4Bb59GJVDekW1yfjTPL7PPtBFWHzDrLZibYPRupuSsJ7PJ9m7jUaULz3",
  "key20": "3RqNxDz7eQyb7RVDQPwqMh3PxWSnfkXBExs2UzUQ3kpQGZxGBuzc5Aa8giCccRqP2nCfyJsTaY3hUutkQwijrrQv",
  "key21": "3Riq28MV1L4RDXz8dcde22PZB4yBnp75TWVr31cLvLzw7K7UHxUTZgy1s2segFzCDcUwHhBhrSqFE1VnK4cMBQA3",
  "key22": "5Wg7rKDkzxkx264NArdm9wNqfxgv95LrXvY4FmnvqvzJds6kLTubiY879nWcZ4GCxbJ1oEbAHuxmqPHXixdDyaZS",
  "key23": "h8p1v2oiE5mHvDjWbXZeEo8A6BGdZMTnwUCEmm6c6WWE8RwFfMaMsrBT7bxwmoXxRdy4zqJmyJHr9EyLR7eVBzo",
  "key24": "45RqpqhMYT2FFiHFktiYC6UJthncUBp9cm9pGf7aiDANBmQst7gsUciMgvjNXPVgcUbLa8pVFD8NHLPaF2TBdkqe",
  "key25": "S7NgXRefpjrKEBFwKNsZWpAyu2kJwjF7kt8vkUJ3txYUuXRnELWV4uQoNAo2fB5rcjd6sWUDb7bUMqj2rZ4c3Qc",
  "key26": "58VjaV1Q198GE7o4edVkMGboDDRUEjNwREvRCVubjqtjgfuB6HoTyHvV6YKmSaS71AkFeAybaAU9ijrdrYnqj3aw",
  "key27": "2NLCNTCCR258Z9iXgCHVyj3PgUCtmjuPNL64rFVHMBG2o6mdpPbTMYepNDwJy3kkbsLAkU9hAwGksz9eyA2HnDGW",
  "key28": "QUhYsgniv7veVXA3bA3c3CKGBZVqkcpgX31F3zmwJNexG8w6frQYRiqhyuXKFwwz8iuVBSPYX5hq6VVQtW78Wki",
  "key29": "5N5knjZiBM1ujAUisnj5bnH3R1cnwEyqy8YtpTuQdzcqcLR7zeNmEMj78W9tJx2ZhVpBp5x5PF8dEiAMrxyAzQ9X",
  "key30": "4B6em2So6qjdW5BaywbnnMAWRw3w7pDyazHCrhJy1u49YLVyco6wHNg69WdEgL54nmJLqUWbZ571rbuTBd8fBiLX",
  "key31": "5RT4eSc4nzo4GZExehw791Rnxd4jr2TJUoyKjoHJJ3VcecKsysL9Yvp5gDhw3U9oZxiz6Kvr4AK7qstjkNgFn1AJ",
  "key32": "2QfyibtovMrAXyFDwRe9Wdm7FRTdu42YBAyMGYBJXsFLkAJbsyJem2HMQdkpKnM373aFeFivody1GsUk1fbPRbAb",
  "key33": "2yn3KQobf9QUSt25cYpz4bo7yanrzDexGpNrTRSHD7XLgBoh4JkmzmZYXq5odFPCBw1xRJju5Dqqx52BpawCAcM9",
  "key34": "pCefLBBdM7PawGvSY4iMxaZintiBiWJRnjM2Ve45BH5FttBkhYxQJ7aNmkeeZHMQsXRTnSCeUXPhiPaM7ghbnc2",
  "key35": "sffiD2jsbAqf8Z61GXJjdn4VHWPZbHrXHtrYqhtBi1e2iXSEE9gqmTLJ2nAhRYRgFeenB4XFnFVkFcxtfb3KwTz",
  "key36": "592ZaBatEc53JyEusppRY3zQPQvhZkskdrWuXW7CAYBsZVkgFnWenem2gRVHkyJVMZJHa2AeoNnpRXExeoqCyqes",
  "key37": "3JWNXH9cvHZguGizGTG7T9QwZjt17f3zteQfQRdJFP9PHJQPk1ehos1Zf2NFSmXGAYSTnzG81poC42uxYZhcpDyP",
  "key38": "2Lk7VCWiMrESoBS4nqVvy78cmCCCL5HzUfybCWKgXt5Cz1qeG3ALY1BQj5LctVP7F3kk8gLZVL1w6eUxFBDsGh3Z",
  "key39": "5qyf1apMf6LoxY93HmdPdj7X5JQegyMRWdPn2FkbSHP7v1kqyVEjD5JTTrqrXwsMravaoRbyquWzP7CASKMRhwkU",
  "key40": "2EJWE9HLS5wV5UKohbSQLeXAbXCgDCmyEukPrvD4B9QG3Qn41S2RV9EHhEPmYBgm7D2rhpcyUNiJgGEqnmzconyF",
  "key41": "5BDBri3Q5RbGpYwf94ZDESP12tP5BAMBkAwb4GBNFEEd14gjp7uiMmt8etCQUVoZ2BYPMcG4e8KUgKYiH6bJnf2N",
  "key42": "4hrxqg1BAXot7e9kobNzVnubxrwM5jNH1pQurFUgoN27DpytaTrAUfuvi8ssLjP3bNdnRXP14fpMnQBEkrTjKLcJ",
  "key43": "57KBdx5HrRZZ6uSSo1zUWy5aaY4iVgiy12N2QJgMa8vYtdM7dHKvqJMMR7SGeDjcBFTFP17sTKj7nkzXmeAcGNAa",
  "key44": "2MHVVBUjxvqzdcFuVi2vWx2uYaWQrCSJFv96mZuBSnCuawhHxo4Sy9K1ww4M72gVUiL6rdkZnxCvNiCPpfXmTQH8",
  "key45": "4oEreurBJ4yUeQ8hZwtsVqSmCk6uJvHLXq7REF5nx3bKknNZkXJjcQS9GxqqBrVRHzFqGH45BBAwAmKBCkLX8pzw",
  "key46": "WiSEubZcXDu6hYKzPGq9ekuKifrgTUTLcX2g12q6ok5VYh1aj2ZsjA2NZpaw8ZrrT9txAs4o2Hp9tSBMnhuSCmH",
  "key47": "3QYytaLdLbTeyeXLtMupqbDdscjtTChKoFZmBBup1WLRJbvWJq1Dc4MgXPqSXfPzBxyUMyh1wyYdw7KtuVezYFJ8",
  "key48": "4US9sviB4gBrbfWB6xbGHQzvCUirwXg5hCTD3LiidHiUzSVwJC6tdpXjvgBKAFXfHkmmcr12GMNTPLDtQAWGsm55"
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
