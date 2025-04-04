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
    "2B53aij6p2tY3hwrB3B5LRNTKtsiHcBDNwTz7UyphJFCGffGTxpTmNV9P3qaibQtzCCg6EyEHCq1uDRQVsR7s7sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wN4R66zfb6rWfJnZkGRg3VuTxShULqoeBLtaifAihB421T2qGSC6ny9xoTANUAguZyj32Hr5sRKXiMPE2y2MWNi",
  "key1": "zauAWwJUebnviWQuBoqUZyMk5zd93Ad7drts8CoVfb9DRGC8Tix51nKjndjLVK7UpRmkT8sey2Erz8uqL1WwuZ8",
  "key2": "29fZoUcadaWoZnA1D6VJ49iuJGWTAX1i6jr6kUzPDh1N3y9guiLzgPntF5CcHoSShV8TntXYLLcFPshSaNKUPfzm",
  "key3": "nAnzLj5EjFPgA5XEa9YeqjnDFzoSwKXr1fUXv1WbDCsGUPW3Ae2xuN4MERWJ3SjrEpWaQASq3r1DXue7e2k4stM",
  "key4": "5ENy4ByB5a4nHPiMgYBbY3eWfasgiJHeGFqjrYkRFKAgmKj9mWqV86Q43EYiAtutNeELg4bz12Sh3HQxae7VdX7t",
  "key5": "UK2PRz7xqdx229ZWZViJpTz54W64MgAapGRnhxQZv1WNS48fsuVPnDKULc2X71pNwdFCJwxAADeytY8sH4eHai6",
  "key6": "2W6MJZ5GoY2AP1SLT1QgKgSEQ8frRqcZaJaqVQWhV11jfQx6TLEoYJ1aHPR5doFTRgygKgYZoGxnFf5M9ucgAjUi",
  "key7": "4QT9f9T7U4kbX9iDQDqRJVKhY5phjUNuQ7Na99H8bEiCThTQqKMyX96WTY1Q6khrjrhHQxRiYSru2PKJMdwRuKrL",
  "key8": "57CuN8ZZ8n3trjgRdMB7oumCoVTw4qmEg6HYfDZ3VxkU7VMqxy2psRyNBV1DwFLZxWxxYhJz9CRFLCxmhvQadQkV",
  "key9": "5FNmEH4NBKUNcv7qHuWcz5PLN6jachcQKbXc3Yi89vAGjpu7Kn5QUHU4MRDctLUBSk3a7bVQmZDZeQMya4zoesHw",
  "key10": "3fK1aySQbVTWiRiVLXyyMQd8eGJ5RfrEhBNPHcDfBc2pNYzczotGPPvZ34xzfH2Myi5nrYzrtmGeMKpVsDNBbQxe",
  "key11": "WVnDxB1nUcqbGi1aikjaGVBuSCPhT22aV5PprAZRgCMGmY8d6uG5mXkApkBk1YaZsy8x9ASo1ZBJNvLt7XZN7gT",
  "key12": "5EMvNemGxpqQAeoN5AS4aqBHhBGMuegNTDNRAymYCzQ2yGAYUupDN17fr9iZgG5L3DUpG49SgUJz1BBCASPvNuoB",
  "key13": "4CFvbPJGayrB6rQGBCScmjx1SoTHio7FjmSXyrt4kks8M8dPu68DAm9eyoTAAeMRk5rA6hZMeatcuumMBHewHR9x",
  "key14": "3FGLQhVRshUDWBA5sPWzCp2cT8DhK1xuX2ojLYBp9Fdktmq3HmEuYpK2v1jVE6PjRU47uK4CscffkC1Ay2K8jass",
  "key15": "2k68oTwpKWH8V9EzW6rF3x2KGcJBVrdWPXkU1fZ5v1ELCunX3bAPrV1EP7FGfJK711hxfeXFadWi258k8iXEQeMD",
  "key16": "42WLq3MxBqB7KeQVjmx2E8e392P4KjuhSepMv3PyvZNRt2zstB5YwDUeugBcRAPZUF9ir7TCG5nim1aHn9f4ZxnH",
  "key17": "2JdQsnF9hRS6WT6bdoH6Xqx2tfYvk4nEy38aKeKd1Kz31Km8RjeBcAdo2dwpzWAGDp35Mo1ZChKW2bUYR4TeMiQR",
  "key18": "3Wgtur2tRyJ6vpujfFDAZtKNLB1iuAA4VGNcdPby1tQUgKyDWFvmMaHKa5sD1Qm8gqUjR8L8aATBLHbStDczhjVp",
  "key19": "37VZN68KUmYFiiqmM7QDvkgNiGgwL1fNjdXBvETqsGtVf4cPyNX5EaVZubSzXxbwkAhH6UzH9XPoVXvowH9QovDG",
  "key20": "4pmxTGGVKHYydEQFk1vQEWEJkC6nR9J8LvuRcvPa4ygDfFieqo6U5KQjf1hCkscBCrnRKx7Nse61dZsLmnq1m81u",
  "key21": "34Jx16FyKsTn6zrLeKvvAguBB6eG4VQurQYgBF9EAgSAwj7gCEbetXnyxmHSTBu88c5Hufh12nkbY4vDzpwJJ1Q7",
  "key22": "2QWtmFijXFZrSrUhh4NYTNJCJr2GJLo5UNpXCTuAbVSJEbo2Rt1ko7cpBtJTE9dpFJBo48TmZewBL2VmJCyH6WFN",
  "key23": "4gxLKfjzLA725Cdw7QjeV8doGH3NMEya6Dktz4fDNZDMw5pqDu6YiXo2xtRayHmdfMY69FtjbsKCgdgCkf4yjMja",
  "key24": "5Wy8Es2h89Sy2GPpfHs5mkmubAqRzWPgwA2DsGvjw6hkpz2fozpK7FyrJL7cR2Kobhi92un9CZy36aTAhPCX3wpQ",
  "key25": "2gboMjguyBv7kZLHYYK9axPfLYgHg8E4tvvBkFiVD8kPnsiVn7KkR29M5TftkBbtqmQhdFqtHvC3vUtfCcaFDu5e",
  "key26": "5XfTTWhLaP3eyn2uVhcr8cic4z4Wcychpcpw4Hfcr29AFhSTtMeVQCRYCkxEz7qsjZo6LUmryvVdXrtPTrhMPfrN",
  "key27": "2N4nNuergkZ3vAwbjd3VqfAf4cKcc9yMBCpQNRmPvfkeiQavrZ5yQqoXDCfdNF7jrGAhFfeMykXgjwgEBad6BfFw",
  "key28": "44rGbGqX7B3XagzQkzZBhVHdvkb1HdBMjJUuL1r358A89mYqCmWrCKoXD1rGxTjNZpV5aorAxjXUZCntJBn7w9nt",
  "key29": "3KzKncYDdBcuUUYwyM399VBZNwdZoEb75V5axxpN8CUWzgZAvrkTs62zx8oKQdUodsEhTsLfioMeijXnxcz2AbDg",
  "key30": "61dbzXARJZKFZJpHJJBrvaKAkweZSeWWv8q6whj4eNuLcYvsuUnsYdLxFqR1A6914PhHcSogXWE5c7ogxGJc8ETp",
  "key31": "ta4NNorHEFXeG2EPet5P6DDMofp4Xwq6ACEaK8fRsiQsUk6bV5FACCCS9AxuW7U7gxVuYTaH2issseSGJTuCsxY",
  "key32": "3dBQBBV3rTXGYanNri2wEEZui8BL9q5nxArMUiXGKByhJecrN92AVH57KxpRe21vZdBfLQzQC8kch6ArJuymza6f",
  "key33": "5QG9yiR4DKUDpfLW44cFgnRtwi4ud6SSBTNcmEGhvbHiud5oxWwKfiL3axRfJaZV6SdhL5GCFZi8n2SgXai9rid",
  "key34": "mBdR2mJEwSkkwR3YkZGAgzRv6TCWETYyYXYxRwjNnvsAvcQfixarrfxsE6RnYCtQZB2hPKCL1Ka5iSY8Z1HvyFi",
  "key35": "wpqYCR4bj1Sjpn4PbH4zuzRm7wL8GQTh6Vi9iukNLcHacHEpZmLLVqGcWdEyoNT9ejWh1hZVVWWQYvPFZbfbFVn",
  "key36": "3ZULSzhjz9FYtNAKwborwZVeTLkyqBZVfFaq23TzRAxk2LAD6DigdxVsqS3B7uvSUkoKw44aJpHgHU5uvjJqBkHD"
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
