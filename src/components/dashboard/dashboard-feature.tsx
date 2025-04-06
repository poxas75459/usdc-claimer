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
    "2jtsz2wLGMevpT4Q1uCopZH4PeWh1b2f6Z56kmuWL85e6DvL7ZXNA5a6yyYSkfDNmyhNrZBmJjjaX8jsXZ81piL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67MYAdxmmaSrqGmQbXpGUzSFvh6ADaJ7qZcwPDWMrjrMByEaLzzpZ6Ch4s6qqKT4X86c2WHdxWvaSP1j1FmmgUhw",
  "key1": "4NE9xivtuh9HEDJdHPph462Gm4sDwqLGLe6vQwxesMU7ycGEF18b1mubH9oF7RoH3CuSesQrdRbVCpQXceue7icG",
  "key2": "6aNvFG4Gj3m7WbG7y9Hxtyj121ZUy3e4gk8dZADuXhzguTi7XgMfQ3BA7YeNNJe6xZmxRxsAvpiuzbRtm8pSaX9",
  "key3": "3GTHd5cRq2wwF9GbcgZpXKAs9QTjbwAM6H1C9yQDeFnbCWZeuEgKasGXEPc9PDK8HNnwebJPozoixg1KBNY714Mw",
  "key4": "3C9WRzCZ5VN8aX6FbPcyPE4pQ4qapdB727GBCRmapGtboymamtYq6GM37mhBTjziQZ4uQZUdYy62tUifFv3XaBvf",
  "key5": "2gq3NYoojkxwoxKNUscbmsj1WiNyEuoyvTWkamQjimr4EjDS8oeHMiq1XQJcpWDxhSAcJnDPJ7RBYb2NE6amamPH",
  "key6": "2t6UPKT8RuahQoG3tB1KtexMD3uxw7KtiBjFtnFtfce3DytB5ZTsDkQE81Lq8HmHepoLde9rHgm9YKR4Gn8tTKUt",
  "key7": "2Jwg3cRqkCDntf8kvtnpTnwiL8nRJGBJjYL9d58y9DYx7wh6gGgip1BKpNchqgeQE6RbjKYKgWakiND2yFsUd2Vt",
  "key8": "2JihLEL1DxnBJ6yTtRamPdt7xLVDp1pyQtCUvXQquAbbnqyZnZVCQDissd3VjsDcMnTuX1EuV2K7rUyQYWx115wY",
  "key9": "4Xg9yUQ3grynKABXpB9MY4qYBLUQxfrFk6Fw7mNDFjDKQ6rpc77kpCcwbGRD6TEsrtqmtCQYhXnNyHPAhGuy1aif",
  "key10": "2FrJXFCLG4RRqheq8qJaEg5oTPg8RyQ3n6jiaJgTT4FauZdLR2LKFYjtamAYkbT9vFarHZLxkLdNsmesqosA8UPQ",
  "key11": "2wSrYStubtUsFQzvxE6kiVDKYAXakqyJd4axPuP3jDXU1QK6VvJa93mRKJQeqmkqKc4CnfQXfnb3fdKZDXnDGDy5",
  "key12": "2iNRW6jHCg3udtquV4FZdtw1HkeyfNH9UjthjregijMQUsyPbhshDnK3c3KxmEafEncfGYVxsBJRTruRmZ65KWEh",
  "key13": "4awPQnkJubWYaa1wJirJGRjBFuwFrPWkr7NxYQiStMMEBKxPUzdx5xaxZp2zeHY6QAAnoXZSV3zLduZXfVb7VoYb",
  "key14": "4UEg46RvbWM262BkB9MnLT4rVrzFCc9TE9PgQp29W5VjzfNzBhW4M3niAMVZLJu7U2H4uH7EcCbN3k8WVSXBvhMh",
  "key15": "4ULAbHc3FguEbwFhoy23ALJiP7yK3qVxzyakZTncEGyjpLVoJyezWLCoaubiTfg2ixyAFfujLsMkFWUXRffmwfk4",
  "key16": "4AVC8qhMxVS4ePb19FKCb1bN85wTxBEAyGiV4R16TqWVPu1p8Qo64jsFp8Lqgj7QGTsTYXJYT7xTs3pVmDky17Mb",
  "key17": "3suMmBAmzRvAYG1VWFLnVUXFNv7fRywoUjSG35e7DHuWsTHquagLYAWb3yB2AKbGRGhSwyS5pebMsBAoh345uMHo",
  "key18": "57mUEkK899eFrAxK7KG2A1w1irAqG1KQqY5bE4kpcXfKqLXvPab9mYboEPiz5UPsPTKKS5pyC1rQ6K6oXQu51CXg",
  "key19": "2D1zN8JNixby2KJitCdeKW27wEnwtpAhqdEXRCBX91BSRY4fNif1uoPTL6MushkfTz5iXskKaRKi5jMLJxFKdjYP",
  "key20": "2ymvaYyLBqdi5jpH45GzvtgsKd514Yv9TSXffP1HeynD1g7xs4ozn1WxtKDACcULb5okhG8cnZyKDkwnqHMuruuh",
  "key21": "4g2Ye6Tcuh11jUkJgLNWXa5Pg6PmYwshyw5FuZVcrEA2HNZHp1nqmJCUYSJ8CJRjACfD7Ssm474oT7u5CnzbjTDT",
  "key22": "5Msq4qj2TQ5FJtAf9PAVPVz1iCFbeALcPQoAP3FMUzdidFutMV4k47TG5Dpi4SyvPACY28bkqCnGCb98eQk1yfzX",
  "key23": "2x4P3dtNfP3cDHyhVMsS47J86znyfAsyjo89CSBi32vrSkwLam3PCxv96ZdFkU2vEWGBmzx8Wu57AJWueSQqCsEY",
  "key24": "VLwnki6eYyXExvVhtZD8dU66J6jG1ETwHPvZK611tHsakJabY37ajNtmY7uVv7foGXriQ3JxYqGu3XJ9QSH9rv3",
  "key25": "Nk4oMbDpXmraRMA5H35Vh4obUZ7VqJRu5PRtHz9wq5uBbFBcuTi8H6SAgRxNJxm9i3iYcwVbPPhkWgSJLvnwLep",
  "key26": "4hoC4Rz59KnfWYMp5MnsyGXyLxPLi8rZBzTvXamrVknFVQv8eWdVvvb9QyAVrFVpuvqAqNDMGVdEobYui3VAuvyt",
  "key27": "3WfuVrDGLvjCWQZDqmyFgw1pmcs6vwUBL8ejHFb51JxSR3bagyvbnJYhXQTgvgKUqY1gBme65cHx35TKvMQgC6NT",
  "key28": "5yVBuexPzytR9SP4m4yH2XuUpe7wPr6MiUE7vwexKdfpDnrogTfGzSr5YbEwJkmMVTJwovKjQmKTisSdTosvFxEB",
  "key29": "3oeVrMdf3pakwWTiwjEKVELKDUGBQMC7f4opmqHx7FREUMkiKQeLUfC9fmGxnD2D4brHDsUpRUGyV24mPVwAYvnZ",
  "key30": "5CbN2n2Qp9UnV7tBNqogPpgnccg8hLEgsvk45KjHZutRJGB8dmnmRMrR85YwK9ybS9Wpp84PuWMr3w8u8wwRKjzi",
  "key31": "5VLbSTPtqtCZkYQdaWjX2KBn5VF64kFpX4Dpy8DNtTWtpNkD9NHTYRc46u5YQH2yvwRktrZXK3vEcLguLA5Qjgt",
  "key32": "54j5Gg7PJvPeJrKRyZ9ZuDxJ5Gsm25J95VSuQsC4vuK3eRkqwAVEvwB1Ypg9PQZz6depFEjtadpZMcNZZ2zfbaoZ",
  "key33": "8uHCvVRRt7t1ADirRrzW5HL6RU1XPuzw647RvGvhk393YgmYyvpQEGrHGFfzR1CCNNEeE2QzoKX2KuFsvjdimuv",
  "key34": "58UnWfP8XWZSjPFRdznWGXfDbHJnuvR7Pdvf2ifFsJu5wjtRsmk5L2WS3XbCfvg4qKLFBPk7PojvS3fD4HdAKWCk",
  "key35": "5e3DHeYm7ETrqMFbHsQwYJK3YnP6nsjK99GqN51Ch5Y3QVdyd2rn6ssJKixAjL5ok6xPnPfyAZ1x9TauRuqULSZW",
  "key36": "5wBEXQaEkZ8Gi6qtVkP42fsgi5Ns8Ai74YwMeGqttmffcYh2784oDTbadAQ1jP4my1nr4XhSschygTHGQ8yL78Gc",
  "key37": "2CBmVKyzPXSQnSV47nPBg7bmV1QXZhq2R29AHSSkCF7oWKNtX2dTCcoRbe14bb32Awyxg6YNBNuNeHD5ZaVoVUvE",
  "key38": "2LyAyFQVv81bnAjQS62KCDszvSiER7cZjuVmGCFQHtw5gtou1dQwRtHJXT5PbVK2x1tMCVDrHCcRUsKSLZFnyqD3",
  "key39": "S4hHzzTVNdsaoB57Xy3tviSfbWzyGRBXEBnzYmG3ZCPqLDXu7EP4wwbzs2jkFcEXBMR7S4Cotb6Srgmrg2aZPoA",
  "key40": "4iCeNFNy7qtKBmXpAVxCKTYCPXxM4CVFZVUUmY8aeiQHDdBde3VKZhfsEzxN6DKbec4LdmGatdngwpb6UfWgmGnr",
  "key41": "5Bi3NeNumTCUfvorS5JCgR4fJAZh8xqheZUvVcnz1u7uDxNhK7YS3caNF6FqFTbt1eKrhoftSKqY8AmVehf62Frw"
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
