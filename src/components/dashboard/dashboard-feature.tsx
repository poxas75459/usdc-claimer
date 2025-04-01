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
    "GVJ7T182J9aY1LCRoguuTeRkzytvtez7oAaTF7MkUdzaWmtvvvPNaWcbr4v6VB1gZ9M7Js3kjtHiMgT9D7tKfyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QiBZrHieH2nPv3VTwfSWNuTrie28iouPDVEc6fCwKpxoD1GjkXF1u6UiY5UkxzW6wvxzVGmSX4Q1Zdv8wYxAQ5Y",
  "key1": "f2E6crH1xMHb42ngPDYMy2KBaJCAqybKWMjjNAyAUR63MH18BBDyaBapKE14HZTaBtWp9VX3uVzjLN2LnDRsv9i",
  "key2": "65vgC4DxNKn2h17MXtzka2vd3CSBUWkdytEK6hrU7kzthkKziPqVwFW28qGiUYhNESrPQVs3RFf523ht4vJ2XLTP",
  "key3": "47XjYMsd2712G69yP9iPDmu4c9kbdwYkMue6b3gRULLxBJMKeTRj1u3iHtie6PLWbZHY3XnEKj1SniPhDRPaSY6E",
  "key4": "59UzEFoJshRiP4rBS3iEph8xnLxLpLMQjKgy6Ws3UMKU7aYGV4Ruf6sPQSirzpR28Tc6p9DBSBxgUQc9KNUfZ7bL",
  "key5": "2BBQqrUH2iJu2FL5wUryxZEkMEKnorVbguBYEyh2VJiTMHxaQdpbPpeq8wKfdKcMuMS2zaPnYCTwCAm59HFp8Pgn",
  "key6": "34sGzu9mz2gZC5333GuKosRkKgQgFeHJRarB2iiGDi4kc4PucPCESYCVGfVGbeTVQCfQ43ToFQWAyvaZAVS7TuTe",
  "key7": "5pNVEZQGvhqDHBipsQ4XvqmjMF67XjZXnAU8t5MwMBc33qx11hq8XEEeCcn4Nxetyv6u7MZdQq9i48cQWRRfH9yy",
  "key8": "3vFU3Jfexi8XCah6quWTcY6kmQ8mJGQQvy1Rj6SmkTv19vd1tn9JW7DHxTq5tnqUDZjsKiTS6dBhMy6tiiaZk1fC",
  "key9": "BJTLsuWPv7Yzne7NHwxdm6saQnFy4dWuqJxHmToysEzgEwBa9GtkANhGb1voutyxAXhjRngAcgkgbDBSxRPNNQe",
  "key10": "2fgn96DEwdvk9ozMMi29m3wkQcEjARUch7Q2AbbUPkWiGWdeJ4BdFWJMAR1M8vKGbk4RV7sxP8bA1fSZbMA6CKvH",
  "key11": "2NNBeKU4dLc6XWxXJ2kQQFHqu21ZCqA1sga3m4mqRs9fbYVGRM68ZvrYrCqbkHruDjHcwbkPhL73n8aJW2QV8kmu",
  "key12": "4xnbL7MSfs7RXsDdzxppNgwtuPBFbMSLmtK9LsETZ28jC7FQWCZ6iuVnmucD4qBqgwkgTxvtCp976WSe9qm9t8dN",
  "key13": "Bwhd1DexPqDaaPGHgn7bLbCPyBeB17coRY3TbKF67nyfFAHfNe7uzPiMmUgp7DAxVR3p4bW4e9YZs6ZMzzuY2Zk",
  "key14": "2TYEJr8MDiVxxwRgGUS2fk4Lzrro6eSeUtAi58xNk9pN94GEj5j8H6uFHp7Mgg8aJCsm9Md56qK5eiuB1piQS2aL",
  "key15": "yWks11vgb36pkz82cusq75cCwXUwmwcZLQji1eVfJLEJW68AmDiKpp4hK1G9SbjzzetDHBSMnhV7wT2eUghXgQg",
  "key16": "hTwBNXWRhAriMuK8Z5dVgABXzaHfnW9tzHQ2A6MfNk1M5oH5qiffC2zW92MnnmaEQN2mZvdh3fcCyCXfpFrtNyd",
  "key17": "43kndFgW5E8PfdQBvVVJSN8YC1NgrMcwRvAojeVLzpWTRRwCMqztdvcRtWQDuGbaVEkNervtjmt8cw4ZtyWCc3d5",
  "key18": "3E4Le93XGoUcffvoJ7oMxUEjqtk1pLzs9EMEwxYKyswsxJP6PN9TfNeb4c4kv3pYCrBoRa4EFNxsCqKKWfc9CfLc",
  "key19": "4r7ZyL93P1wx9KjYdpdC6rd52wnh6jMKpeEqSwnP4aiUgcXcragYVy813Cv1zt6CwY6FKbXtzt9jjcmtGSvjK6R5",
  "key20": "61ApzEXwH1qLit5xS8K1Dj3iATCPnPdfvfx8FSCp461qgcqwYNbH9JBDJrxBttfDLt4zGHPgTYHW9js6rtegqHqJ",
  "key21": "3qrdqNFLz5oJhyjFrShebmDNeP7Xxcs5HfDLbCqATY9HicpEedmU887rw5GB74KeLpEuwknrHj1WPs5Fb4t8YPee",
  "key22": "4h1RtHGUmX2z2Rbgao9L4HdNKg9Yy39tci2YFiJ1fs954hegQ8hNyJFWihtznkQbB6SnvmuMJzimTKmGkkA1M16N",
  "key23": "4m9RGVHtSH2qa8KW99VaZXcxGsgXVnYRxTb1aEVfx1a4PsJEbKN1V9uZBxDnutrj3rMZ1j8CwPknfBG4yi2HDvHG",
  "key24": "2S2aEWBs7eZRWqb4UAGeN6iWNgzxVBk9V5WByeG1wM5Bb9MQoNr2mcrqNX9Z3ezfkHCpwNiQwdvTuZE3RJKVwqmr",
  "key25": "4c9hpPiDWYgJuS3fNeBHh7vyQzLw6WjihmT9YmAscCBkircNgczAVmbrML7ZQcgTNCybFwJRznn435uJodypZSFL",
  "key26": "27F7CadCgivamPr8QedbeEgN8yrttq8kX8ny6nxzaH2ut7qKQDrjNsLcTSMcCbb5SGYQaMeEkoVjuMfTvW6ccxdw",
  "key27": "5EZDTko1tui9jEkzJUnBH1FPf2EKf9AB4bLtXkjSEgFXBdEgwgEAPgS6onw55PLojXaDCZ7o2eWnUL87cvFFutz5",
  "key28": "5ffsE5X6SMvkv4waupaDJ4u8tebLoJx2LExVkvMCTb9opHn9Ayq4HA2i5YypvcwrmUScDQ4rfvYGAzCgPjodFtEP",
  "key29": "4XDZon6p7wGL262L5sTqqZCKwXnqVonsVt5Be2c4msSkHgPqNcQGz8M95MSpfoPi9bDa74iZ8sDVo14Cefy3EbZT",
  "key30": "3UBDwsLpPkvCqH7pKnBqCuEQw7VNiJNorZu9355AK39hrbUL1Ag6sNULR4zmoZEdM7Y5Xz6JtAEm24M17uSaNm7X",
  "key31": "2kq78qq8QULrvbRBa97KcPWPxmTyCNAGfdWFRbH9TsaiG6m22RYubVpuZUnBR1E4FJ2BNn7L9wxjFX3xU4gmRvWJ",
  "key32": "zsDt1oYMe8EkxxTXdsaQeYhWK39xDVog1QrAnw82ixHBqDkNMbVkkr8C4EcJKCrMWHNMuERUJNqDfg5RqSzynm2",
  "key33": "3zqRBMGyWyzMjqAvejkgnXt4ijMnuVU5E8R67eXNZtkakbap1m7uu5LYVeg3C5iPkmSLFMtF9pLJPQiVnSnw5aNT",
  "key34": "3Cqxzj3hGD6r8eDxkyRgXgAnYj5QAm53bSm92TGmHa3oUSvQSbtj5TxyzMQzfNP5Gnkgx1VfLSRYzpRsRUfCsK9R",
  "key35": "5zTKWvWdJJ6r4paJi9CtLRK21ZxMjjWBhxYXQomMpgyEKGqiyzKyfEhAuMhoFUfzgz3cg1J51rDVTR18VRWCJ4mL",
  "key36": "2kYupmybL4bcpxdxznxuk8BiGMTUBSFPaYDJrSLgcTtRbjQbDyb6eVJTGW8RkpAf6X344AZk5oFTx2bk7XwagdXA",
  "key37": "42MppTpedoAztsQw4xDWKgv7wTMgBtYmDhQDRFzEn8ADgqYrJGXdjA5kqpdjzZHXJhG4NoGvKSr3H5q6oqzKNfna",
  "key38": "3kmH4DxLwjCopZU9Sgg7kk8BRXnYLbcFTogWrLpkkyxRLUi82yJrEaYydgzRQGb6VEisHrTEKaGhe1Lt2ejzVbAj",
  "key39": "cLJYi5UCovbjb2Xr1WP9LXdM1jD1sNdpFyaQcpX1gWfFis1H8g65b8dz3mPbDD8tXekxapSNrbbRXkV7Wi5v8W1",
  "key40": "4CzF4mBroia16QdfPFSgwAzfrSNpNbnEdRoP5dCmbmMtUjJt2jfwxQ5bwjiY1sEaHcec1rxE7tXWkjFuZC1uCgs5"
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
