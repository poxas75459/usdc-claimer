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
    "2EcGtd3XjEcxFKdtgxpdDnU8ED3PEt22tUTDRvpEDN3JbBeYnbymEbMc7MPwRaZ5p9KNweA199p6BmqwBkFCbFkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438AxNjmEzzkNyeMRDqN2oP2wvGbVuwznL4aQdFo6W1xHqfAiJZHMEgCrNX36q7Pxdp31AbUZnmRWHQBrQ5aWXCn",
  "key1": "4eQWbxv8oy3NTU1vQAENZMU4shQxXPQwKQDRJ6BoMmD1ibZt8WJdF6XMcykKfq1seD2eHAqvyrLvkdtPiEceTkjt",
  "key2": "3EHWwURHR6D3124gHzvwa2arh85WPLhwCKoS3bZh3gdnaFt7VNrBJa6UQhyaqaei1N7RKpNnHNMtoKzbV7zamtw1",
  "key3": "4dQMyPiRS5h3s9QKM9Ddssn9FmRYPHZj3nWMpTkCxB9NFBXXRkFNyciMF8L5eSJaAg5i51FT2RgfyyvvqCrsFqwc",
  "key4": "572siWNuf5vHDphAjmvXHSUYuTnavgYQR17v7SXrg5RvbNqyjSZxuRG1zSPx5xMDBGrXSp1sqP48MvC7o7HRiJPj",
  "key5": "5n6XTkG6KccZoGu8eQr1VTgjqbVAHQZkT5frVaghZmXEXMH8BWDw73JKVkktNDsQAA8a2HGhFRbvyiQkbHCPPcDt",
  "key6": "A3avBCoeZsySNsmjqm37WoBzSzVmoyTTTLHH2UGquKGU2aMmNhw4mJkUpVDMHj279fsyi2bCnEbqPpYyUJXQmBf",
  "key7": "54C6eN45SWQFDwC4ucrYZhhqfcxzuF3ynuDdVDJMBZdZfrvVmtVwwyqrzjmvyWd7LhyaSC6ovMWARtBe1p5NiGos",
  "key8": "xd9fiyZsFoh8BsejrazQbxbRedN15mdALbBgqndKTVHqTbHfMNDTFnZ61R4PJsC6uY5gZ78quJECa9g2vwNC5n5",
  "key9": "2wHqczLnEHGD3mQpC44GLQ1hVPaAMyazGE3ECQ4xzhVy425Kfk15KJzhB5BEvaTxustZtWeiRTgfxLKaL9u1XuxT",
  "key10": "2cBBuCa1oKqhAnFVjaYSqx342XLL2vWWgvfYq3bkYEVn9fgTgDaBGcBe7EYboVAMmzxQaAonXTMFsSeoFag6QYCx",
  "key11": "TRBE2WsVSY8FVf4kt8ApJxzpEN7WvwSz2oLogr4Ac7dC5CECuZdatrveWFwCQzMkbGHYzz6hxqw2krnoUx7fW9K",
  "key12": "sh2J1rLWhMJGiBCAkwzywBMvc679esMvdidNLKtZBjc1xZTZAN38rCDcHcdR9Esnmry14Vz9Mh4EQBXHbHsJjmy",
  "key13": "2nkUphTqz1YxuuTQnn88tajy4Mp64YCYn6Ch6zZLd8tc1hMsMsqJToDXRAnysK2rnsPN37id4FtEg4mUT79KfMAp",
  "key14": "BsH3795KWWimYi812Tdh3tGibHK4kS3JNKwRDzG6KzGCzeEv2sRFykrLhoEocZ7aHyS1WLYgMhhTX2N5K4ND95b",
  "key15": "3q2YnoJnLeeMKJxsKczWoVWEJ2qbPwdcTvHeQhvVTfSBu84251KG3a1p1vGaJZQS3nGey64e6tNZkefzYp69zvdn",
  "key16": "22AfeSQFkbcbiBATXKfa4mTmVqWNNxSfpefWzB2kHh5bQzL3o7VidPPkBvxiXKB65wTRTUMcA9RVnAegkJ4LEiCZ",
  "key17": "4jAy2zLanRJGHdrs5NuMe21QrWrirG4QMJT9a6aw7z7TFhQekJGJsCTkHoAep5HE1v7R8NcWLM3aoQa6p9UYVk1g",
  "key18": "4Gc5ubnXvrCNghXsTmTdCNRT4Au1QhnfHtpxpattPgEzy5LK4W2Gp5tMcbuftTwUTsv45mPLjdfLD8FQNtPoXRdQ",
  "key19": "2tCg9NwfBfjy5LejBcj3wXBLJBDNtKVtfdtMymFrqbS4yxr5YqU5n9R6Rg1xw1iRacSNnpV5kyUvFdRkZTaL6mrd",
  "key20": "3PNpFRRQbKj4utH5g4TpSBkNSQa9BitsdFYe2FCqqX5CrLSRKiwMYfY6zTLwP8SA5NWegCV4x7udtVrjQKsx5VUc",
  "key21": "46K4f3A56nKBiAxfwsc1QiyVWTK57hmqtuC5FrBctg2u1rb3uzATTTSBQHGzRLGss85khWvBvuzfnDZ6n7HFepgN",
  "key22": "5tErBHNnJhUE4HecPusUW76qFCvRpomYN9FohdygX4VJqvtAcF5AoUryUJScv6WbaVgvzgQ6LR8k28MTtNhKf1Yw",
  "key23": "26HnHXQ6yeMn5egwu3iw9qa1q7GH2TfZJYDYp5ZDEAsCDjvCkKCS19TsnE7U4quoqDayuoxFovU9GrKaEF8FQyyF",
  "key24": "TeuzreMGukwYv94DFdyis3sWXxLYQthF5X5e9yvDPc7AbfSnPCjqYQdvmW5VPHNe45jkz8nrwqmzp6UTYLTAN5V",
  "key25": "3wLf4wMGL7RxAP2XbDK3enun2q9phBjjSA5Y8uYfmfpSEDqow5CnBQ7oczB9e8j3t5qFJdGopKwv5BQvpsSq7vzY",
  "key26": "4oW3FRsRc6QCxugRHDXydVqq42P6z8RBYnvQBrbg6feE4tDXFdRiWoc5xkLszDeq73ZwM3DS6SgQHGJEa5KUq9Aq",
  "key27": "5UqrTFPV93hnxgUamvXv9TQ7zjYvVQrzF8evqFCCm3BtbtwswKvFgJtMstjrNgf2tsv42D65KqDKcfbpmhQaQrA6",
  "key28": "4LdnD5qLCEiNyoKBf3kPNr68eqciQn6PuekMyiitPr3iDjG6j58vTA2CUMwnANaGPUQjtX4qPAk4nDSEVqzhyFYL",
  "key29": "3DPkUR39v4AmBnXEfUdFJ3GQakW5oS9pWEdCo3CLzJyCwePgXEERrtTEsHSHUYSi33ntBMQa4CW72rB5134fZkqk",
  "key30": "3XjVgxLNFZu4wErACvwR2BaLqmaEU3dqsBFoNV69DAwcs1a7Aaq9VcfcVdvf47fscu7EGt3MhKgu7yonBBjovmkB",
  "key31": "2XwkNNQTKkhnKxnG56HECWUbebu6vk6oww2EVufuwVydNP8Z1p56z8fmuRzvbTkvf6wj8hUNC9dyLhhrtCcH1WJw",
  "key32": "5ogMvAuHgpN6fDNw6Ad7ucARh63ncGaPB6ia3iDM7vHiJZtGPs6yfAmqcahUeE9QmpbjQi7x9ccvgm6LAyAjbSG1",
  "key33": "318nMnbozrBW2zq7mt7B1Cq29f3nBZYVcBXVxQ19wVuSxDihxPYrhBUeXLDbMckF8YFZKdkyt6YqAnWHnkWkuZpo",
  "key34": "2QL5S7yLComXBb49BvspcVtSxGfsbwmPAHZZ2FVqyArB2frjxiiZGCGDjmdhug4fpFGn1PE8KA8AmoDs1quvgaWh",
  "key35": "33K89TJisKNV2ojE2TZV7nhFdy6xwGxEWPouC1xQrkPHRSPJ4By7bmEkQiQMdUCCVVTtKftzEk3attNhinvj4ZR",
  "key36": "5Uyp4pNjgezuWdCFrwnvYvv2Xu9cGWfQt8JbrFapDgSXQmuqTXELGeHJorYJ5MFZmEN7d3Wb2aL19firrzn1nfFK",
  "key37": "62Ky2Qh3ZsGsJTi7BSaKFTfUtkVKFqMxbDjnyjSBK94M3eE88HYbNBrcdvzK9RoJDeitjfAnZ4MVH1K4QhAsdSK4",
  "key38": "5AA8QXrNbuH9h18Tbop8uckcQBzspZ8uD5teCVBCw2k8wta7cs1VxTK2u5cz5MxRa8y8eaDWjpeTcYcar66C3jus",
  "key39": "4mt5GQ3A1sK962vLZKTkA1bztTAddqKxmq2W5q9cgAb48PkicaUDokZBTAqiMFZeNsEB43DzWhyV71zTx7iopzpp",
  "key40": "oUXExKZdwwG1i7BurXZRt2kLYhvoLuu8Pd7i27WAfC8awDHMoYrMtPEPidBR7Dd2xjyK78aACfwdGbPyv4fBf3b",
  "key41": "2oSoK9DPPBq37z44EC9dipLUfqU3SJNBCf8eZ5GE7oDtvm5Bagh9sKuTyahG3QiPrw1L1w3FN7LA7PW9MqvTCFJc"
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
