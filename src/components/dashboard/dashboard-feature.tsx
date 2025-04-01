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
    "4Zp1Zvt1GSC6gknoVso1BG1tUL55FUCa1F2xsi7EEwo2P9C4V5ht7wdqhBypCNstEF2XKm6YjkMELM3P27sHxEq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38SLz8pER3senL3Rwx1WDuyX5hRp8EwpNYeMmjyNy449TgzJbd1i3L8sM8ybsQf58uuAaUGGxPm8ynGMkJ5ZudMr",
  "key1": "4Jnq5P6BxjT8WdxCPz4JBgkhbXwCbnofP9jk6xAJuNr4zDKAeDmwCuvKM9g8VQ4MUeHv6GX8AUDVGxw15v69PnSW",
  "key2": "23eZE8WtiGXRzxRpVsMj5aUpmFaGeSpSx2pUPAnbsL2QsTdbuyqD8NktmgJtPNZK2hbmSosfUe5Uwajo8LHK8bhL",
  "key3": "46VdHHxBenYAPmwFy3nK2AoyCjeCBhNXGYrY5cHDjzSPKcZmB7t9WpUNmmYsS89hEgNFASy6jQ4ToY2xVWYKRB6J",
  "key4": "4bY2iBa7AyiA3GiZw5gShokuxk1Db7rirHzqXW1vVqNhwMrjUen2DPxYNEgr341Der99tvonDrjsHUyHZ4Zr1cAz",
  "key5": "65Mpftwbhk5rLQ1PZ3m8gwTx51GJXqLSvXHMS5XFpRoQA6aKKCW9vd7V8D5ufcHakYZjMbFybgH8btRDzEqsuCaV",
  "key6": "ti21xVKSmViYjmbu3DGFq18hdao38Lw2gbtH3JHRQqxgxPu6Ft5GTCSSdnfGTt69bg3kKzhqA7QdtvHtjjiQqQw",
  "key7": "2aYpcoYc9RewE3rnn3FqjXamW9fW81wmvU8zSpoZ21X3aZcrn89F4KuS5saVouzDhMuF89iRouDZXQGdSDih5YBX",
  "key8": "Y8gdKkLCX7VEyYxMbHgasPYzNT9tpkfh6XKXQxGaaseQjgLPDSRHTZDxkUXnWPZunSpbKeq71uwcBFjYrwY2Jsn",
  "key9": "4zMpoSfJB6bgRuC4jn6tf6Yf6tvRWtTXok41TujozyqjWUhpvxsbAR3V8JVJQtwf8n2b5dfPewxoU9c2TcGzWpCV",
  "key10": "3X9LksfoTR2Z1DopmWobzWpF2LXFZoy3iV1gtSmCTNVu7ekxFAMqtDagjk3VLQ1wqcKJVu9azbZVjswkHnHXTDRE",
  "key11": "ZYRRuyHLfVkbADiDBALyikVxuh3vzQmCuHpbaF3GnLYQauZJ16t49ZnKrf6uaQRokGZQpU84KHZUbYK82fqtADv",
  "key12": "2Mww8eYFNnVKzsTjg7WikRWrnNp2Q3vUt48q2mLzumhycJAX4npy39pHtiF2JoUe1y8wyKhNfkitA2uLK9NYb3mF",
  "key13": "xpiZBYDtxP9ge1X45EewVTVMSSRepHDM5avvM41sAYVEchEUncX3rfF55M1Bd3UBVX6xENd6TSeqzcdfqG1VyH5",
  "key14": "XrUb4ApGVrXHms1TvkWioVBQRjZbHCA2NQ1xmV8U4Gbx3RZMiWkrugngHPkAqWPstZuTrr5FPEMwVMjZmKQcMhy",
  "key15": "3rH7SooLgMa6q72GttLDqLfPeVcqUg5kuFjFT1AKzmK2ctcTurx2JvFdKfREBnR6Q1UjcpACUZ121csj7mx8JXLv",
  "key16": "5XGfMN4UohVusNvGbEWdTs4MSuoYVHxBL9LyPWZBX1H8BPisXck4ayvEJggScbKdFYzt2yiHzF9fKotf9B6EF4Ax",
  "key17": "7rNSJ8t4TqDB8og5Z8QE4QziJ9fDZQK9t5JXmmEpezcLbYL8fhJfN65rNSaqR3CpVYsMAA32mGc8puUGnGBFwBB",
  "key18": "23h29ouVao3Y8eYBFqxGAXtYTTt3G3hSrkinfSNHMP1VgeFVmBHuLfY9K6RMXDyLg5CLkomvZNR8PDeULNCSTwna",
  "key19": "3vBLQnWPHkS47aj9FFXyGJQtwG88Hpd3ojz8gyMaZGs84yWwjPi9UxtzjXM8gx1HdvRi2vAnjQH77P5CC5BDHfmU",
  "key20": "5pwsvp8BDomBNKjimHyHkCBsCjF8uaZykver7V8jULdeT2GP2ev4tRdCiZTrLFvj9rUQP9nfjc2FbmztDbD28ymT",
  "key21": "66bHPm5ofou4DPRoMA5bz8rUtWASDSeXSKQ1HJcogRzcYmtz5MxmY7YRzSLASVUf6WJ8UqFruYSoEpq6X1qcsnWR",
  "key22": "5dsBTVz4iSp5qjgwNumdjHkYbHXPFMbLpBrwzu1hx6n6xQc1y45ug46YjULJED2JhbACTADzBfj2jMPvVNgZmXVN",
  "key23": "3mW1WTG72LGc9pd7N1LgSpYzbchGcybRkAdzks5dtEuAn1zRUAMcozETfeJFVDvvXC2Djc1KpaueuRV9EfgwB1k3",
  "key24": "3zYXxSLXPtSnALHzvuQkFB7r5vY5h4K2GjxqxYn9rDRLkGoBzZ2tChWGoqt7sx3hB3XpeV379DmT9cCivh5adjFe",
  "key25": "2RkD5yPyFhfHRka9rVqnrf1VRqp3s7L1PkJdYnvXxQUsCquiCWrV9k5wSMwx9ETRz2FV7zfMyHbbefdbudmGTnKZ",
  "key26": "22dif2mAFxyzyuXySmLmXZVEUCJrad6GWxJyytCsfbvmnwnQZ2jTVpBdDYKdTRpVZWHPSxXJ5k7kJUrj3QwDBNpR",
  "key27": "CmXn1kmYHpybhMG3WutiHqnJ5cHi8PVqiUVoYDbbDMTKb7r5ckcEAgMdPWDDiE7wP1fzjML56tkWbgVBrTcADj5",
  "key28": "XqJxnppWS3Ebg3aHj2NTRjwYcHoE2E3CkTo74yHafW4ht2zP3FjaWfSnDms5QXGFeMwyh1TVYe9qQJPqoqep9KC",
  "key29": "sHc4ewDVghnMdn7uTArA1JszDk1VJGfW9wH26AiC7uXMJdMfJvyQcDTVEp8Q9oDiqaZCugLP8PKFi89UPvD5t7X",
  "key30": "92UvbDWZEXfSb6AiX878FoVwZzyJN4XbChnBnnDu3P3ckSotyvyTGWnf6qRBtCNHjG78eUZz72b6nNy4Mg5aR2v",
  "key31": "45wLekF58PTNgA6EKzqx3uysQ7m36bpeaG1qCprjZW9Emo1rWvwy5g2yjGr8FtfHRhwNsgfiK3k1tm2ob95MdnTh",
  "key32": "5GToZr8SkPbPkckDbNWFQJjjxN5KSDqomUd6UD4V1ZWCRk7W4tZwvVDaFckQ1GQwSDyg8pwX5h4aEWb12H7gPnF2",
  "key33": "3AudhwT1RNwWFn7TuctkQSroDCWVbXS4bDfv5SmNScwJMuzMr1DP8Zm7o5cC9wGuKc2RnvWrwgT1qYSvpJ8PAPJQ",
  "key34": "3ZYVWqtVGWjnW8WGr78MG4D4eJpXka3FYyY3B7j7QnXMoQ1q716byoX3XmJeuztjRN87p3H7gPToxUQRrPg7qo7B",
  "key35": "5K1wyC9tWEpXj9zmeh5kkahvWAaX9sRQzxCktvNYdoR2CKico9L4EtTXdyJd555z2hwY1PAEDXa27Vq4pVuMnqDh",
  "key36": "5aWAGCSS89bgx1aeo4H6yWf4D4exjSkvUb3124YeZxFpCnjwKuVJqBq1JKW7dEvwTHoBN99b4W8vrwXGj4gTnquo",
  "key37": "5HXtdyGDS8txch1uZAzBWwwYzXp2K63MjmcL2TPWZFKjZ46HjKLtF4gumccn5fh49bA5bGSsQyCdMSKTSRFZRDZM",
  "key38": "27BYdBKPW1SLB2HZNuDRMqBi98R8tVSfJ1ueUvAc1VE9NUuztvaviWa7TR8LNZ5U9urThcPRbmXVMCosfcJzg5po",
  "key39": "3PhdRULS7irk6xvFExyMViSL77JyAsB78ZZq3QMSXeYD4qJWsuUstuhcr8dVxPiiL8DQjJo9zGPQQRp3Qc3HVxfV",
  "key40": "qJtVtMBxxN9weMrqzh5uy596hJ3rvzJppszqBzeFw4nZ2BBuxsuMGD23jQsnX2FJTUZutBQtjGQ1HSBKZ277Ubs",
  "key41": "G98cJ5bANdNvvEc8TQCbLZQHPgPQuDEfYE51d6KMSmMg9neAD7NWJBgAc2pfET4C1b85hQ5xg3jhVxFaz2tJKWR",
  "key42": "3qdZYg1Lyn5tFnbruk3QHm2d8BKG6QSSTD9JrV1cKLfSASdx6fHVpVJzKEqhaedMDcDu8tMZhd77sbk7rteMQRWo",
  "key43": "Sza51WHsFcTUbamVbRhF1DAg5Uet7taSd2o6nCu1Jbwwkc2wpx4fhk5g9mvq1LrZE7z7uXgphnztkuoDqS3NmRR",
  "key44": "5Dw37Fwpcsww5mLmqZ7pPWDxvR2VGifsEjv3uBQVgmMfg7sNuwsTsN1CKZTs1pkspbkQdkHSuLhVSDdhheBFdAKc",
  "key45": "2tk3Df53KoKdwcvUj3xHbLxqYgrmcjmpXV1kJoRRA921uMgWRJaVLfmRtGY3q1BSNLiLdZAKmCTbCvx2RpiKeHL1"
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
