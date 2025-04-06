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
    "3unYUJTNhPAQgSQ1qnXo85sQ1FJ3fv3phthEVz2vJsFXunNw8fZNKs1M3QBPRSfnHayoeqhnjv9qmckiWyWNjuJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DwNw9arMaVmKVPSQE886gTYfcb91wEMhZgCTcKtYcteQCqxgeTR7mXVbhCgvqKxnDbi5puWozLHs4UYwDaxKeE",
  "key1": "2GzVUUDmooTgfEF8rLG1rZsP2UuURRxmM7XRVbZgBToj9GzLTE6ipFAa5r2CGUhnS3i9fkAyGZKoGWW9DcYEGVGC",
  "key2": "2RVHKHxPUZMSYwDP8RhotHQAPzdeh8AV2gqdPQya4BnRzArFB4CQmMuszfuxxCqqjGxA1vAWDYDkBqE8uFp2YRfM",
  "key3": "vuZiqCQ8tBUqRLYm6gS2neEsEKDidRT6f2HXLpLfbwZ1kf4BSFTbMpcrj8Yr4zzVgUWsqZwttzdpGXENk9aZtjy",
  "key4": "5AEnMyHXagwfALEBCo9tysEXc2tWKaxLGLZB1raLgsbD62BdNi2P6w2LHyMefUpyqdMPetqDhPGwiBEEqtxHvcEZ",
  "key5": "4tUUbrfLo8Yi1mQgt8AaengBfrVydtUk4sJ342asMjiCKXBHtSXRymYWWE48L34KKYsysBpF5fzw4sjZjrRB3bye",
  "key6": "4xoYBtEsieYPAKb756wwoBPh2qw96KXaB7BTvVwJXa2HWmAoYcVxTt6ZT751WSkF8XE3WMnbZmV3ZJiDJbo4Qncz",
  "key7": "cK3itFTdzMHeGh7YMLe2xkSpnCJwbut2hY2EzaMtG6evvt8epWUK487FGwSTuHXN32ECM1P4F3RdakLmKrRZH11",
  "key8": "HXbGXgkm1vtNFtepVa1Q8M8pA7z6h5WDCNWFZfWHLxpK65UxMqzpQM1mNVpCAyeDJj1r56hHZKHXq5gYoLee4UF",
  "key9": "4JbSy1VVtXbp5xXpo5bHiojnnn62ayPanLMPRQm4RGMHpZxacddBqsR8PHoUUo31fdSuayBZZJkD3xmCgRxMMn5u",
  "key10": "3HWra7i7YcDTRG6xwxkuVyGPQy82CWAGXPMz4ierj6PTtXWmpCg7ZtME5H4iLZPdQhSyam7NFAVqEGiHDYQBtik6",
  "key11": "4tiS3NwetTgCZo3nUmGkvf1caPEycfpT9JhAxgxF3mbNV7Tghn3Htrj9Rbm77ThXb3PBqmXdGNmdFHQ2HchPpM3h",
  "key12": "5khfX156DuTUmR8ptrqGSycsLCrQh4qtxQy4ffcFhrpHZNBqHrHrkcCL9jmX8h4stmS3DfTbLfWGefw75jAMpGqN",
  "key13": "2tB7X3kHaZsiXF8P3k98EMm4NgQK6m1Suuyoyx4M23xQv2CwwhknbRecps4qCx82pew2wKbbYHFEAAaR5yTAP8nK",
  "key14": "89FTg7YnMrDUf4tQ8Qu9udwK3oBw1J9JQqWoyrWV8Bv2VW3Y8hegmDbUEgb2ykAKDF3oRPJ9XtpBssgSvddYyuK",
  "key15": "558sKzS3hZ2cHBfwfCVbF9KH2Vq7oTyydjZR4q76ThFS23CkUvvUz1APRAGgvJ1VYfpr9qb1Dswy4W2xPPmeVyYq",
  "key16": "3gMmhRvCPRBFBavq2fAwMJ9JCy5ZwFfWDgC7ub5FZdp1arXcfJwufqNuQ1ufPer6VWFABwjCHt5ttJVXJtzHTqaG",
  "key17": "YCjwpNSATiRxgnCx5MEuuRRCrp74EdgwfEhtCJWkNCYAhuKHHFeGkUJVmBi9wmVyQeXm9GvgXm9AZ1cJm1DMCt6",
  "key18": "4fVteYoWro2KJwQwMzrW3T7oCoeuusbvNSG5nwxb1VAsZkifacVXJNVSQHYGo5UFdRJBTdLFMCJmLfZkJt5eZsjV",
  "key19": "62oRCW2v5PZ3DXnjMXSHkXUVSBUrCBXpEpsJ7UQ3WzwLwJsW399F1RB9kTGBRAZufEGJVHZkCyA3a9MS9qeb3ggR",
  "key20": "379RfZGnyuYbDELa4ivjQqjbdUTrBam3sjKdM8rTCqmSamyCFLjAv7iakcRt8jNsaJwD6G5miRyEGwwAAdEYcxtH",
  "key21": "3GbvTYafVYGRFaNTntjJCkYrB3sbPSVvYYEaKt4HR5o4gTNSVfpmdRe19iaQJSoTkcnWrtNHg1rmUTJMPMEy2sLR",
  "key22": "4JBW9jrJbh96PWHpAttP3vgtoYqJtRF2MxKgg8W3N8dor4MBW8GrWjq6i5h4RiSNsPqCFFjkyXvnM1o1yJfW788R",
  "key23": "1oDBqmiYD84iSWhbtc193droSLBU4xjtqz9ydZ1dbeYU7cXj2aBtTho7KjJu6a9iD5Za6yLmePWM5rKhQmLaYCP",
  "key24": "CFxaaB8i8HsDg1z29c1FuibWJATQPGWxa8TEksEK2KfKxi2nqbX7XDxG343jEfvvqLbV6EBJPBhAZGti7bBrPSe",
  "key25": "456P1dpvSfWGmVKM8d2HzzczHxHsJQJBUUotBx8RUosCe3T6nnd3aVvctySUVMb6XF5uAvBL2CGVNhMhEvFZBXZV",
  "key26": "2mfbLkSnsWscA5wP6GEpkRrEZMXtWUtV5RPDAF4P6eAeaN6AvS9iyYcQdbLBmeo5Vy1zSazHkgjKtP6ox3BNc3o",
  "key27": "36kP9asA2DFbntEfnSMd3nToyd6Ei4AdumrHh71BcKZCkWsdyQxCGZz9DeLSp2HdcW8pUeKXuxRD8BAjbbts2r6X",
  "key28": "5g8tNVTmKpZMt4tzSBummc49fko7Q8MNmaR5iv47ncWaey4LACWRciU6rEM68xVUG3PUBVLyJ5GbwmgaGtTRCHat",
  "key29": "4qukhKAvzfiFzs7y2Dovifcb7z6JwFDpRSEE9NWHSrU1ks4oEbAL79nmnjZCHYsMDLfxQJgQWwjFpFMXBB1z1igc",
  "key30": "YWR91bZU5rKxNFcUisCwmhrAvdXUXuL7vB5RbniEGj1318naBSLNCVfUixBQg469AUcnAWZGfEP6ZPrKAsiGknT",
  "key31": "3YdUGiQhJErwAurwCXCtLBPXcAJpY7SrNYeGYH1MKcp49XZtmbHvY2b8fEtaJHtFg7ZNpdJAMCTKVDzSxdcZuBpY",
  "key32": "2azWYVpMigDGhTubRSfkPMwf7wYnKSfb8A88CJjK69Atud3ygb4r67zRPd5oVTNNCgGG98zzbjFJKQ7ycnHrBkhg",
  "key33": "4N2idci6tSabddYFXpufsq5bYPejcL65QTr3PrGiN9o8TduQejuY7puHa8arnrHEBR6HQqfAswAYLkAwPWiFQMkX",
  "key34": "3uA4vTQfZXV4WEcsR2ukZkpyb96atXNVxQHxTGHoi7t8zqpY8oboa2QFP4QyxRrEsHg6vM4SHgSHdrUAwovicrgS",
  "key35": "3E95wnQVZqXwTUhRT8t6s18Ru3e1iQW5Rjhxozp1HmeAwU5YrurcntKC1faJ8LnBj7Ws7RxQ88cjFRE7ptfsCvEi",
  "key36": "21pDUE8KEPwyeduERMsJjLWCZii7Yx6bbedi2SjVnDZZm9FFfSvvSasQNvWM41Tzv1g1MAzM91VUmnik9CkyXyPP",
  "key37": "dW3egnJrJiE8uHni4K9myHuf54Z4RHenM1HC8TyLo7oC14tcoKjR5mn2sdK1mrsVGGh5o5cUoBX9Ck5Qx7cQUCf",
  "key38": "62MG8Qmo2SnsdJjBdeAxYL2k5se314naQoh8gbqKh3tWnrYF4NPctnHyWnkWuEPHnjF4tgGVQFoY4P5tAikxUzNi",
  "key39": "3vPcKWqWUp3LuDSXcE9a5SvxrriRE7v2zRX27dVdNvGjAAy2ESxA9d7G14a1RAQwxzUFz2Hz7RbfjGYhAGoTXmfd"
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
