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
    "5Q8fk2jX1JqjrYvyBHNAk4LW1bxTG9dwGTfqte2TGkCUq7Ybk99zPySLdWsX5oo22FyixqwX8eBUMEmnAEo7AVcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H6o1TUo3VNFk78dGJnKgSgSS9hEpeTrgutGcevi4ZGhrGRK8zTQmbVkYqjAjYbeDRknu6cmg6rZhz8v5Hp9sLL7",
  "key1": "YTygUNGXMyk7CzPENatjfhcrMnN5nojBCB2eZdgL2JaTVhUmWvQxfDjsyb4wVmsBsaW8dNDcENdndbt7HxUs1j4",
  "key2": "5D3PH3h3q8dzuZ8CsHcjaKdEWR86d8QtmLxYSzvpdJSieyZeqdqBAGUefoJjSiMmCqM6VzJBBtG8D3LRsLiE34cr",
  "key3": "3EpTJivbZ7Sd5Drh4ywczWoWhVH71v7dhXUcLEzuWAFY6GvhRPb8vBoJuBYeVjZbt4b6ngEJi81Y3Trgkk9p6KxU",
  "key4": "4EoiXH1oKs9GGRLCBUsc288G7wdNNiUqTjDzb6VTqEngaVqQC6mkjR7ejrMGRxr6bYHqQxEzQR2wDBagEpoeAhfB",
  "key5": "49kX8WkpGd5FPTPRmefQjPfeLvegquw9qx9EYdmGfzsF5Hd6fCgMp1XBGf1r9Fvcj7TKMdPmaXnvPFiZdvrrkaHW",
  "key6": "3dxMwxWjX2acUnztmGWajuYxBQGamgtFSYStb24HjYKFEDY2bAnspbPzWiyxGo9VXjd7tRKixvvBB5hH2eUAsuUM",
  "key7": "Y4QxUm8SVioRGrt5tiwj9xbMvmdHG4RTRpLo9TwFo496N1huJSNkFUCxUvY7AViECr5ffDGSdonCGDw3aRQ4t3N",
  "key8": "5p7Bprv1aLyW5MDuJb1jRL5A12utjpnrqq1sVHpVbQZw9o8ceujJ7c1BLb5yW5FtcVWV5UxWGUiXvJ4tF85J5G5g",
  "key9": "3MHP4zPGXnt9JJ45KX4mS4uFvXPicjSQ5C3XjQ68Lef7W9RXNNU7zDBwNDWd7LhNHUPY4qSoVE1D4YLqXFtLJn6K",
  "key10": "3LXJEFyGSyHj8r1G1x47qJyeada7pxqz1oXDzKr6AePYqxzg8s6XiGKrxt8mQuYVFr3p8Aepa7XKwUAMcXcPbJuT",
  "key11": "5CMmFxWUQ5cHa1sVHeV4a8RfFDrV8PQkBbY7eWCVJPNCjgZSuWSJ6fHFfdHiJtRefAkFwGUao2WR3uXTpTVzwMQL",
  "key12": "2b78E6crHUQ97dhpdiQm9wNT3L5e9aJ38KMzAXP2PQsPrNKpLj9DnTy9LCrdii16ZvnoVHDP6Tt5ABGbAwCWSwD3",
  "key13": "3LFzgvAQGrNyGiHnctFRBR7PfxMJKcVyCNZbcKEsLePsNev2BvLn3hNEnf1yLJZbur1cMjiz95iN7VjL899yCpbT",
  "key14": "5ybuWfX1HnEcdzcxSoV8yAYAFy9KgPJiWegSEppCciBeZFvqduZfRPoTdwEJw2QEEaEWJcNyoV42q5mrQ6yM1uhg",
  "key15": "4L2461BFVhbRcCV6V2Rbj5tFsfF2YBAjjYRR9tKwkB7uYBe48cYteoRDtf4bu1f5nghBeBt4YSD5dBFp1DULGeHZ",
  "key16": "3hWivD7Z7DYQGYZcBBHJ79UWJnsVdyeccFqgjTawX6zhNrQWu9Rhf9tRT8XnnMm7dMheE7CNxb4ipPdMCeAuiLfy",
  "key17": "2WAtMxQpa5nx6ArTdGCbfnurgnB3qPVnoA32xpHSGArYPkk1j4xLqNDzTNDSrSycvx9mKLSGu3EjBb9CskPD2Phq",
  "key18": "48mdfKqLVrD1xGYWjt4kK9KJk7DchY74B3rszbPXwdfFtcJ1nwEKBaC6edQ3o7K1A4Mz5Vyy1642pLJGuphBeaMT",
  "key19": "42Y3wMh1Xu8M4HxUf9HubL7ZaLZi6wdhEFHSsVn9ffXxVcJPYAEq41bR7iJieGjCTJqdzG21aGrmb77ZZzVijeTr",
  "key20": "3FjuX9Mx3SNJe4D2bFWVmYi4mnjg77nz45aXG3HFM4Q56EjoAiRRSBXsGjMpXXuw6DzuqAAGc9a8cV9YQ7xmpz1d",
  "key21": "1mz4UsovRYHAdSrRXkENYwqV7yF2QQcabWwuo76fjsssNj7ekqqrPbq9HCgW7aTcjn4i4wxKQgvTe1mjnU8LNYj",
  "key22": "2H2YheYKdzoGeDhrfpyGvtAomXvht14Zdy4GKYDSfHLgqehtgUA6bSuPMgKqsf9eZASvEyMGgVi5PP6jyE3Tyttm",
  "key23": "5hjHCbmiFyB968yp73pGqyUpnnAEWy9yLU2j6DaahYhxCBNrF3rGmX5zKUfh9nJ8N4iev5rFqqswUz5SrejNNaCu",
  "key24": "2VpCagpD4sgsW1zTe3rdhCQLgSYsTc9zco4443xNX4sarxTipVeeQEgmqmRmKNkvoPVQNMtF1W1hgd1mJvkkdjNm",
  "key25": "9oPqR5TqK2j9FjYJ9648Hc5pjDsBjhCfENPG6ukc9G2oR7NrkkLqgW32627TTcQLyDTMFrtMcKvXFC5AvLsHZnX",
  "key26": "25phDtvpDXvq7h11Qfrse29MXF1ekdX7tpJ4zhwSinwsqHcF3M5LPe9rHxUKF2dvUT3pVq3Z8foAoHWRASSWScEG",
  "key27": "2q9Nn35VQbexDk8rRsREXLZqD2GgDX1hWUYXB7riKzo3zuDg4TYjRu4csLa96RatvJzvb2sQeRJEFw8h49bctqnx"
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
