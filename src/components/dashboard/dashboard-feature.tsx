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
    "5dcd5eAHd22Jm9LES7JjrwoimZVTuvnrNPcsHfQSYPLMBsnkiFVzd4wRzVtCfV2ZJZj3iVHJr7MDRXTGgcDRzDJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AowvX9rvT8yqjr5Q5FcPAdAxM2YiR1T3YjuopfcVpuXxQiGfkWswQci4soqaEi1CD2cy1FK1pzyVBFXjZUzjKn",
  "key1": "XNyfN6uUYK3MXNvcdBuqw3BuHtt37koFqCPAVTWQ4yJefe8uscJnoeZaazdHiMz1A93XimE3FMVdDy8DJ9qPY2B",
  "key2": "3ESomjH2q9yt3UXvdAKvckgnKz5MJwXdbzZJgPirbxz4tDDdMeBoooBTtfLYct8WFzY5ob9eaQeF7ExPqHzin8KZ",
  "key3": "5i4V1a5Kk6ht51VzvtgEfjbL7X6PRZATgiz3gB3gxExDoUWfYbp4DeEjDU8VummzC7wEES4UJvQ1Kmu5a1UhbXMQ",
  "key4": "4LJddWjiUuujBjykUZLQL22Kw4aGf7jEHJPmqKSqrkSsTk2VJYNiqBR4Za5RyazDhpVhyrCf62nb8uiWaMmbfxQL",
  "key5": "556rRyViZNjkBXxNmFUUF863W27W6SQjawAF5a52FsxiBPX1sRRbYo19X4aywF5MHcw7occgrSgE3BtYMWSTMEeF",
  "key6": "2zMriwfjqBtHwrVdKFD1s871xatKN2WgjiHnpB4Ja7GBarqQSodwH5uZTLEYqEvjwBtoULp1KEuZupBib7Ci1QTb",
  "key7": "2k9VXstLt7F3S21Y2iDBacM4vkVN1tUY6L94HiTN5EyN3j8geAXmhrbDRXD8gMR7j3zW7BuJx4JpJWXHDz1rz14R",
  "key8": "FSnpkKh9HrhB4VXoDPHdaGt99mt7jjHYyzsPjbhJH9fJyUMnDqhcqWSvN3ixBuPLnNWFNfzmDyHmRbyTrDvzgqC",
  "key9": "2bVBv1eSeLiRrVspS1CPCCktva8tuzWwCJFRzvFaei7aY2cXBwMoF761dhvngUdgaqW4jrkQBVmM7JJupUVLL1jg",
  "key10": "3VMHqgX6o9KaD2LAzJtkJSrSM6ywbvKLDc11MudRCtBAM3KQw5ZqbVR9SuBeMGTUEu6E4uvJyPKt1RB32KvFEKv",
  "key11": "NvxMih5BMwGbS7stN7aCNJ1gJjzazo2HwcANANNe3HLngefieSC3gZzcoWAnhhV5BhEgs2yRgWaxdczHsbDia6J",
  "key12": "UwLibLx7UmXoAMbeZxHN2ddHxLaKRqaz9NtaGJ3f5qUy4vZGAHCbeyngMdurUcMdycYCYtbePkiqL6URifABFfp",
  "key13": "3sXWkVri3ADm2JeGv9sSbRyvUzxXZX3TUi5HbvdHadWN5Ta4G5usrTT1ZP79wPvpZizEwwcJGmFZGJgoK89yWHGD",
  "key14": "2GRrLiX6iHo8qAQ6oZUkfaiWwN1PjCpamyucYHW4mmcNyjmSRkA5hBky2MEDn7s94KJBvszpM4tfcMzrv1y5JtL9",
  "key15": "57bU1JwPrtTYrf5H8q5kXYDYjeKSK5eaV8fL7pvN3a8yKvQfSirHcUBCsRYhHFXefKAgkV5zXqWELSoqm53h6iq",
  "key16": "hLzRcbr45bcdm3VCsuj8Fk1WcztQmYxA7TBdwHz9JmxR2FjGtqihQs3w14Rc7dqF2C4QLwtGxXmMdtb8MWJpsxF",
  "key17": "3SEkPFjGERJhbqLZbRTqLvHkrgJ6xV5Bfg1bqTd9DJgugicBH4PHK8PMCFasDeEFCyFeXMRPdwRTG24sUQ1wibZH",
  "key18": "3dLKeWsHK6Acf2VsmSLP5vMEqwwxrG93MoFBd3z7z1mzWiDper4zLNDcLda5svyf1n9Dx79ttnGeweLG7RYVrznL",
  "key19": "5eM4NnV4adkhHKKFrZLcmSurcRiexF4KqWQp65w37mcqtKCfJn43y1VUv3KqzhfWLB5LGwirD86mvx616FKi21wp",
  "key20": "535VfWtpgDHNiQRbkdwJowtViGUaRpHgHVgAzmEtv7Z7hpmqdX28ioCAi9qEetkabucrBkKVLfF2cKoPwqJ2ENiZ",
  "key21": "2PqygmpDjRrhM4AwS5u6KHpjDJdEp4hWdFqsn9fAEtso8CTr1S3u8QxUgsHwGHw3YGxUdjJqVP7LZ52cJ8L8RUnL",
  "key22": "2w5xMhNSq8Wb8VTuzkjfKtWCfB6vJPD4pYueFo7vPcMj9r9KzMeqr5hkGfN4XfzxuhNWA7GWuab6Gnrt1jJHewJE",
  "key23": "5yh1GWH8d3XtfHq1bEEKPb39Z1nHd1ugnBTPGKybwGNcQiHTTHSA7VutzS5JtMcEcXfTjA2K69Ha35oRvkDEF5iG",
  "key24": "4XE2q761bB8W1SXCys5o69xhBEiJ2FXpXoeMopSMEMnh86U4vrda9Bu4CG7zLdVN5hoQRz9pfQNQ1zcJx12NpNiS",
  "key25": "ia3WWRYKAh9gi9CnyovqC5zogDGDWFyDjm2R7attv2dZGgcRWPHEaUtGWtnsXwEGiRwh1Tnbx9YWeYuFNeq4xcr",
  "key26": "466m8tzP2iB8Q1V87b6XExLov6rm5Ev6hTZLeGjx3hRnRsUfW132jkKPEcoSvbcbj4J4geqLgsVtwv3YTbZ7AtoY",
  "key27": "5beCudM1GXKyCE5zpgeEpyhrHVZE5uDMqTNZZvam5XnEWyEzERNESYU3dTSFHaAeS6JqopBSX4h5d13dm9gbCqd6",
  "key28": "5JSVsmvAavwxwQKT3uv3pHRP1XQRmTcb74nouT7dsQUjacHpBc1hGNjngMnL4JXX4kSXN3gmQzGzJoHoodfUV16z",
  "key29": "xZNCfP4LK68oiBhgqwUPmpEttAfK5FXCmbL1JW5z248ngoGkZVEGb9byN5dE4iWRtzfAa3ps5Bu6bsU7Vi4x6Gb",
  "key30": "3MrAvgcMjmZUij24CDaGm27KfbG5aK5Fvzu5n2odZNdVM3MEypZSQiXtHSfEKkeAecPdiQbeZ65pUrpTNqZLmyLm",
  "key31": "4aqvic4VG9UD7akH9Z2zoonyarGwLHfPTfM5GeLDY4Zo9QVgsNM4LzAHvQgBpVtJhEKWDNQoWGqKh4q67x4XrDUm",
  "key32": "4TjZjVqJ5hmeE3uefAiyoRezPjKCRFJJ5dBzPZEd1uVq7rMWVFB13VqDWwGf9FkBJKyLm4EGYgB2xhYUcQSiFHmm",
  "key33": "42CK2iYFRkSML9jZsTCggFBYhgkKc1iB8nq8hNqCQByCSV791rbsJcqubjpkdt7ScFuLTQwTY7q7FPrR1iGNirtE",
  "key34": "52bGASj8Ri8b4rhz6QbdkfqcyD1eURTweYxcvaUcnf6RKGzow1j7YvUND6EVbkcuwwozBXorpJuQWa3E6hWeyRgb",
  "key35": "2mM2hDmk7S4WGR8yPY8PqzYNsUYGxCap9G6kpc7e1aarkSSYcX7aD3vfSmfss9NKc4A9utmWyd1RqdF1cef92u8k",
  "key36": "3GCEEw3jgiLA9AcHJ1Mr9Jj4wwkquBs4RTCwi2DdqCtvNHigqLNkjUtuDZcayP7J6nJDYuqMdJPF3Jq2yQuFijmM",
  "key37": "U7EQzdNVQ3rbo52kFPJKbkNBLkcxecoq2U5t8LEgDZ8x2GZ7rx7vYoR8JBwfiBZMbhd9WzBN1uKZaXNJZXKiu18",
  "key38": "31cVaWWKbGBxGoghrL6odfA3zU36zHUTHapEbWHtsma5yuYUAWiAoZ4pSuwHoCXbeRqESfXeKQrRLMQTSWEtkpR2",
  "key39": "5Y5AvaNsMe4XhYwLLdiSeDPhcQNxe25h5UPbkuDAWwSySjwjea4CKT331DFUQPNjeTqEg8c1n1j8pRs74eivAnGZ",
  "key40": "4NqArKjJML6JqzgxTFjC7jSfeu3cWtzr6sqNQjezNum5JzdZGtPEtrLDCj9da1ChAFj9FRFaEJvknwaCcK17zEeC",
  "key41": "51iCpC7P68mRi3b4XHfgbtcg5nUUBVWruiKXzaWo3H3chS2xJLTedHnNrAso46UvtNmG52vzAuPTsXJWNJnWTQHd",
  "key42": "2U6De3QE68zN6YPt1WHCe723gU31SN3rin225E1xxsphaSRHusmykvrUpiCceHAwbkkwQKNk5cn3yC1sAh3CmgJY",
  "key43": "4geVvtjTVJh4SA29FFEge2ZKWJCCFfrPT8v2ek1LW2VPxaAqQxvmBbcWSxQ3vZ4NR15b2AUQVdZKpBDVb2BZGGg5",
  "key44": "4akMFzRcPCFqKbLTr1n1AfBdqc8cAHcdCywADvtuWwrJgkdjHaL9o5BzVyL7j7XRNNBSyTuX5yWgB27AdNVEBKPE",
  "key45": "sZUn35fefnas1w51bjDYFRATDBPcBEEQhXAbtutBH1hwRE5rcizxZLGE2eo3iepUiwht7fhG1mdtPAp5nZV4DxP"
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
