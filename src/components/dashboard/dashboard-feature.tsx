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
    "2mRys3AzRjCWCDUtiPMkGjEruCUfBkHYgbXPHSgQKahgX5755UZEU46tMNzyfA1c37P7ENAH6LkPVCqyQgkjZmXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H31qWzK7UJCwra1fJLXAnWY6tQwxrxWN3geqPNbBAp8mJUvJDgok8gGVGBxJ9ThGS9tE1qYStoXjE3MpN4gbVuJ",
  "key1": "2KS9W2SPEUfSDtgStztmDkmBPMZrb8b5AA6Lr3eB5MoXCvP23wpVaFrvt3r699T8fzMn3L9HH2nwHbF5PG5yTT5n",
  "key2": "55gHpafZDyZgkk5pdfQpTfCXduVqcMF6M6LvzZ2UApMd3BVbJUijtvNJqEZbk5qhgp8RAX9UDFFpVxYqBEYvXwGW",
  "key3": "4CZob13RnoQrG7BTFxrYd7BdwKq1QGwxMaLSTLwYoAgEcmob6SnR29F9LhMHJ7RTNewZDDgHhe1T64nUfpC6H5R7",
  "key4": "2chSRYMAK7V6SCtGbvbPc7jYgQZyCN1cQq5LxXAtS3ocYfhZcydFAk3rVzW8yrAj2HZ1Ad2ZreshkFS1yDuzZKe4",
  "key5": "5pSWZiTvZ4B5h8U3ix3xncyXWiZbM1Q9fAnqQonhzYrZdquB6P4JakwBsR6PWxqJV59xLywBmz5fLYnKshPmMtf6",
  "key6": "4wKB94VdR3dTdssXyN3MwXc8tKUf5W3uQgtXJ9ipX4bbHjkQvr9KkUyJKuNu46BqXEQZEeKTtFo4cFcoh2RSRSZV",
  "key7": "2HwTnAy9wbW4EaWdzNf5Nsy5wXoQt2xHVUZ1nnuiL3HgUiJabBJSnDEMNmWRUTChH8tm2yWKyd2G41kUDk6hpta1",
  "key8": "3sZdDibdg6YHzy8k34UGDAAJmaV8DtrA4VLEVmFk79P9ttWvgjhqcxmpwbxgGZKJ9SCNwoD2JebVMiAeriFXVxNH",
  "key9": "3SJ8MHCe6btw4atTjFczZL7BxwAybSSipVp37JKg2agPzHx8d2MGXmvuJDrQRtsxpdCADQ69fbmBDgGc343GRERn",
  "key10": "5G58gDdhg69mkGqqsFbJd5yML5EYYfwCfZNA4rwiRPPhRykAVyfM3ufEGLzmyLe5bv56eK4rFdCMPuhbwB4hXApS",
  "key11": "5nKGXWov5enCWjYFdzrGBUX4bJwZpd144YLLjZwshVUZ1RHvwH9o2XDHyfdp6TYn4PiG7yVgMgvyd7Fd3hsUhRT5",
  "key12": "5M3cH8ffvhsQFQPaiZqJKk8Fn3pA1mrjYLH2Tdr9LKx4cae5BNMxt3VJDBvREvvD4qvV7JMxgkvuWZASFbH8swLQ",
  "key13": "4vCA78FGadLZjPznGVTun1FbaBA4phG86NWK2uVrEZDwH5CJa5bqMBxWpMSYTyccRQYKbgx3H2NeP4qc61N1uj91",
  "key14": "4NRTz65c8VVHDmUiJwqpjs7LjnHDRU7PoFzn2EvyJXRDAgGnbyKZmF9yZg7fWfQ2hQ36EutQ6Q89Phcv9ha4fiy9",
  "key15": "54s8Gvy7KUsCqmEY7ZKKYq8yEFEGgSiDVJin45GKffkroN2R8Ar4TkU8byH8rWE3chyfPWeobVGmANx5Pe4BZVeF",
  "key16": "3bt1NJSNa4DEHVEvZxkkHDzgbjPV5Ln6LgtrhhnYzo3JiHyNfoUyXC5dPxGCEp3pnwPXg2nTFBbniuY4GuE69wqG",
  "key17": "5zfNY7y1Qzj4aqXkZDqXLjXycWsb82uAoVHY2uNqWB3CWGGRQroVXbpyKsSQEwAwUYwYG67SSSwA2GqyhytHn6vR",
  "key18": "4x6etxuDkZK3z9219zZEwhxM3kc8bL5RVjd5UWdwQUe1LMr6SNu52zx3uakcgaZR182ZV6wwTGTswak7Srxm493k",
  "key19": "2kxJwKr7ddSZrxTbSsnBBFDXwRMM31bG1gswWiijsNvSFEE4oqmbqJTkA43FwKZMtTDBGyv83zZ2vrUCgyv9Fg6k",
  "key20": "3fB7g319hE89epBFdh1ARnyxP6UYF2TdBwPqATF3EhCMzfCX82EeREUZFj1FFsavKoWKfqJHvXyE42TGFMKS41TW",
  "key21": "neQMk8Jm9sJcy67tobYhjqA8xxcZZNmSpdLydyvQL3CKCLDvRw7RbP1LsQUsrWU4V8qCvJYs4AK8nt4kMgY2HXu",
  "key22": "3aomhijM3LUBUL1CbBiyVdrJx2LMSNQK8TgozxXd9BtLMNvgpxzhFzaMxcUcAtmaW7oiCzEFWsyG8MPJAtkeyRKT",
  "key23": "2jXr23h7iXRjWcA1wgfH7SCvdtVY5mmCpABXZYtZLmXtySB5TKxTjK41jAkqk8yVuGA67E1qNAum1PFsVvWzgf8i",
  "key24": "3VUTF4tsE1cH1JsMZh1QtCT3TdaD2QDfvkiCn7qchLHCojmf3DgKz4g8FZ8LQerC9y7pV2fQsSvNU9SjDXmBqJ19",
  "key25": "33dwXcyBjY4c3yr2FgagcD4zXSSQ3e1f9H9rNUNyerwGEcGWvRLr68M2Bo4t4LAYoYwiyYScmCRFKfyxXGZTbgBx",
  "key26": "2GqpzSYHdo72mBqW6Mm2Luj6kPtomm8Q7QeCUY2i59w3RWCgxUUveX5GgtibcXMxHpKUpCaq6XuiSfczg44tkdr5",
  "key27": "2UNyXGbSM3JtkQvAyiD3rRQ3rnxDYKzxcpufspCdAF4pEfZbXmW8hdnDaqDe5d4L5eRgZ23TU2GzqXEWPiBmng4S"
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
