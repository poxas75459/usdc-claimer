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
    "4tVzSBkk2fUzDmsGWq2Y3sTYvwmSzaWb1tvj1Wi4XBioenQPsWbLJGfsJjuMBk8hfhcaMW63CDZy8SfseqK6MTeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YS65taHkLdfQ6GeDiwUBLXuqU8cSooZgsiMxk429PkkCVBN1vx51GKC1ooLDaEPyydZBBeWnMG46MAhsgLiZ9ni",
  "key1": "jqEsrJC3y6RYhm1SbR1yj6zY4TCYKW1jrM96b8qaTM9DPV9s3pfUQY5dASgaTM4QjK2BdHYzFxiyk5n4tkKzjRG",
  "key2": "5uRjPy823SjmRaNk46vGEwt8S3KC1aXx3zPCoW95kpUf7MsN32tpTAG5M9w6heCALLnL7ZuE85ZSZFBPKoRKCPem",
  "key3": "63LnnNjtHUUpBDaVyL1wyFVQEkGvYH8ogAhgsHWwN8DsXDDYsLisDbrMx3HhfFgA17nkKdpaT9ANxzhZEnUV5Cji",
  "key4": "4BBWH5X7CAXhkQ3ucCRzj6aU5GphewV1o5WkrH4yAyYmFK8urYWNaeUUMrwZdd9e2JJPJhKzmwCKNZx387kTFqgA",
  "key5": "3JnjVAXvm7h2ZDtzhGaYvchuoZTTLTLKQGCvTkioHkBML6oWbbqkkEYNDSvB2CKY99dvoeP9t4VjaPz861pZ5SuT",
  "key6": "4Wt8pq7BPYhFVqbbjzDdW8y8BXEahBTnefi59XXZ5WUjk5X9nZTPAyWpXva1VzJ2ZtTzSRHLBavLP52sxKMuuNLL",
  "key7": "51WSrD8Q2Spi6Gw5DQjZtqj4kTwGqT4o3sbMYZgeEdvdwSkAWFVaH9inwbwHov1Eg2wiUGPGzfEytr6GvoJWi6iy",
  "key8": "5QNCvc4KZSKUQnkmLotYcnrdGkHkwFrXQ4NZSGPPCoMCXUtwzHtW9EUNqum5pa9Vw82GSdkqNpGdqiMHNXK5pqTy",
  "key9": "5apk1wKmE2cG2dJn7GcBKcJLNoRVGNB4TrdHajYJkvotSbMLXMNYvoepaebGvPWi7iTVSgbA9PuECgVCx9s2inv6",
  "key10": "AdJCYQusrjvWmqmTXCfWrqHj5VbPgSadR58ZKmFyn61WyV6BkfEkHB43ueuzXDUDdQfD7kSz7zqq7Q5S2fZTeMs",
  "key11": "2fWW5DfPsjscktTM2A4uySBmr4S9anSrPu43oaPqpBGGNgwMdFL1rpB1eawD82dWXFcYjAujm56brZX6Lv9xvo6a",
  "key12": "34w94WUhZoffkfXomGEarhSS5GnyFHytiP2v2hB6pxXWuXsijc3LqT1x817F7u7rXo2TSd2AAXKXscQCVHhCVTrK",
  "key13": "5sk1ppAi3bJ8BYrzJ7Ye4yNrsVeseX7HEQRwfLG7jjJxqbvHa12a5jaA4zu8jUWCW1N9ENJmGK72Xk8XyXuuASXd",
  "key14": "4ekZjiY4vnU9rx6sC9Yo4736esvJhEAHAWuiXE18AqPA2bW7FkETHQ2TfETNCHhZWrzBNcLjLFXBrFDYjvwKk8b3",
  "key15": "5PMqyMnwzEzPXyWt9ozdQcvVaLArUG7czZabgWeYC1HPvcabEkt1MwP5zXt4zcjWpTy4obktMaqh7TQKMrGsrSvx",
  "key16": "SZFtJREwduSSy2RBpr9bZ3fvqQBr6TTBktVQVL8QtLsjWqjG97cwGtGSPsmvcCwRB1i7UBRLFxUC7LyHddA4Bze",
  "key17": "5vcFQ9xS1Q2xrgDw3qBbBiyQG1MceLh3ZQB37W3Jo6c2Pfur7Qpxuw1dxPt3dr2a143XXL3FMrrDVfEsUo2dPbum",
  "key18": "b6nz7ELPxzym57MPdXic3p7NVyhroBAV2f6xj5WGraEbR8o1fRzVfeXqVapNisDTJTScHE1JdsXM8mmZMtHiCd9",
  "key19": "2ESEeFmKX1Nevu7wf4sWQtn4P4Whs48mUPQJyzjC4Tciq3ELTC6RAjGyadrXDBkQD8Dq32EFJgkaMdTPSR2zCC4V",
  "key20": "3CcfrQoEPwLE5N3TEWBUYqSbHzzpstbZVRfmveY1XzhCnB4wq7dSGE2VE5bP45KuTF1WHxifeinEdaqodJWMn7K8",
  "key21": "5YxuSgqDs9ZXtYw2YrWX2aSjuaBWupJ1RwiicipHumjkfHapeUMAFGhi5FTVz1YgFK8m4higdXpj5mcV2QY3w65f",
  "key22": "4sTv2TaJ8NqopxCnSKKqATDxTLU8aXYb53xL2Z6Soxq4JJhZ9FCjvddLD1i7AhS7DJ7tJc5VVyGuEvmvQu43n6oc",
  "key23": "5yB3eXj2cb3qiHBTov98dgp9WhfYjXHHYpjKM58iWQK8LhN99BiKoApcMU8WDg3aAjAxvHHtk2rL2Za5u1uNNu93",
  "key24": "3CpfNpz31b4nszEbbGHqs8CuUrorG9XTiNnek6s8smVVC9u6CiKAaShtgz3h2ULcU5LWJT5RkZvxHrkXYZrPCAdx",
  "key25": "JtteYfxswWeVPGFnJ9YM4S82VbHJvxw8NNosYXGtZjeF6qviyaHvJFr3H4xhvQAuntttxhuK2S9mSEZPNm3FaNm",
  "key26": "4dwqqwxEkFuSfxyFhETdYtnjE4kuER14UxZviez7cK3WFtz1X27bx41kpmCXbGt9orFrJfUvtQBRbk2U3pr86Tsv",
  "key27": "599K2asU5LdDYKMDBS2fZN88nmt3oRichDb9JrvdfvQ8NHbQ24zHZyGDZh1GfAUHUL2Mwv5CH6duvqj8cvQRia7C",
  "key28": "5eGWQG6kbi5PQCKCWE1SBNp7mNLbKtUiR1SJBcvBBHH2Hhc1FwQx7GTrocXpwDb9xi8C8KptYcySP8qrdURjyqSU",
  "key29": "3qs5HeUL6vmn6WRw2wyuSCn427cbSXv9xidc33Q2BX9yec2vasrpNbkuPt2mqaU6GubwXdhgVs9Hr39nR77CagLd",
  "key30": "3CwJVVSneP2mpuJJV1wjY6pwKyh6bZz57YmZbzfz7Apq6yA1agj2ph5ovd8yq6a2UKoaKmVkigKeYJyuvmAPLri5",
  "key31": "5bLbuExRSUHUpQ9Z1ZiJUrDQ9YkPUcvkkhVo5PWMPKVsaqoFoU57nAopDekkRDABuqeGXpfWELfyN3wCwi7AWSJe",
  "key32": "5YytZffniooRKd6hcZFifYWJxV4jevjHGREvpMHeGPG4ybPktwtguFixYPwSNWQ7WYcSGhxYYUnoRLjxAfujAAek",
  "key33": "63AWJ8Caxypo8PN95X2sQ96iHRSdyfGUVTqg5s4EshvXsV9whkjVVs9DaVQrjbefG7Av4eAn4mQMjhDKuvBbKV1m",
  "key34": "3kCfNags5psydSBV9iVka54yLABDsuotMZVR5u9AtyC9KVkHNC3qTQFwYuBgDmYyp4nNXvE2NkSyhhWsX2dTvwCp",
  "key35": "2ZSBNHWzrctc5tpCNpXxDQwq1pHCMNYRhftA9gfqk6ZbZuuTCMmSu17Zhb9ptSw5yAxTEjrJzq27jt1q3wj7GTKY",
  "key36": "4c6fNCvKkdFnhxZKHs7togfwovJLCdiUvaeoaqw5eJT7FM74LH3KSmmU3gkeQf5piwjd9zM5gPHgcZr3a2hr4HUt",
  "key37": "3JaiD1mEg2Utsbrkx5Ur8nJLkcxHSXSqW6VJUEaabL9REb4oZ9Bi5kzk8G5GP7Nwpp5jqga834oT8ETkfMB4DSDU",
  "key38": "2JQBxNTAomYm4Htdn9jgPApuGJE8JQsXjDihTQKgAs9sS6389weUxHqz23b2SZEgZ2XZowUPPNvgPDdcBqjj8R3D",
  "key39": "cgJwB6GHreZzENuwDTXLfdZ1Js734mqH2jpou9wtCEs3SghuqFZ5Y1oQ7rFMVNnEKyFiftujkekmWt961Q7cGzw",
  "key40": "VH67jsbp5Nb3rVMnLWxBJwNrgy6AZSRAc4GQMwzru5kJX8WhugEr9iu7v47Q7RRFqPpEU4qMV55hQYPwpgrNzeD",
  "key41": "R7iRHYfyPXo7dgXayyCQFPkhA3jzU8BAJG2CL1qNJQhhrN7fKtqqp1WJoV8ybhWWcPeRMoQ8rAM9SMUmXE8EmSW"
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
