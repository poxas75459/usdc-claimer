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
    "5kHpGdhw94KGQVFH9kMbG3ukT5yE95y55Q1B6f5KB8GXotW3yvHw3TQTo8W6KaxKFsxdNhA5WHHghov3NMY56xeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzizXHiZ3Sk4Z3BnCGCpsTpo7FMpJ5ky8diUGzXQavYXfgqxAzjCK9fJT28VABbpZXaDS4MAoXUufo8oAJiYe4A",
  "key1": "5dntCmzmXQA9LBVySqCtKfycxuVtYCSDm1cW3ZD5ikWrNu6TwrZE69eB6geVzLyZ4a2cS2FNedh1Xq9zq5mnZpMM",
  "key2": "4tpjokj3MbfLgZEVF5o3pDS7xbePtQrnpKEvJaWFCfSdzkcqTjMMVkD6CuYEQvp51afZuJVRKcjiTUYuTTshZJsP",
  "key3": "4Z2wc9WKgso1jKnAvUaPAwZQaY5NRUqLQ7XkGdxdbCdh5E3tqL1HJbKYqa7qem69pdK9KHVcjuCDT1vRougiTmA1",
  "key4": "4bKBN5bL7Y9RB4XnEWRD5Tjp4d2W22MMTVkEmjyLGJhkWvQsohNGMwN3Y1HxrMBtmW7nfGvF6D1nik16b92d2b5n",
  "key5": "2RwWdFqQoz7tqRkNgJwkDMWv9LrSSNedEB6MYDBiHpJE7jcvdGByLu64uPwD5H8DWJLm1R7xid2jTjo7d7zmWHsx",
  "key6": "3GjeswtKoULKpeiKV5TxoKNLBvjSvru2ejJFvGw4HcbVVtJei8TUpiunHgRjfJxVdzRNPKitDDCNvx6WbW4MHuPr",
  "key7": "4qgMaw16xUfjmDB1LFsZPsU1pZYRg8FwZXCExbxChkvtESJPp3fxhM5636BfbVqQNcS57etmrEpFsk9vNREqbddK",
  "key8": "4FMznRNna3tvLi1g17N6GKpT2N8FH8vnUdJL8pPh4FWRyeBdqGiqtcwK611QitJjsLX3h2w7nTcRW2EFARiEMcv",
  "key9": "4QJyKUqdGes6svxDekfLztVHgojdYFGPTreULAAUow88BeNS5YfJRFBN7pZJJ583Bamx8CHEvdy4gKMwCZKdXSvk",
  "key10": "2RwTTAbRajRq397TrtnzEJo4Wo8FknVXcMA1XXVDjaZzG5fPQF4o5QbZ9seHdkV1hLB6icvtp7VR4oEZYS37CKqx",
  "key11": "3akh4petr25BioFM3NamuqxtWfQYkMcgSw8GcVBGvFXAezD46RbrssRT6CZuwUHNAtKLPRhzsw22QVNhSnH3ovaU",
  "key12": "8CHd6pEApbNvaCmPtYqqhFirNxadSXCg8psadgrjW3MvaS8BGEzR2dVAoaRBnFBiFBnJ8aH2uYoHqA9rpvVFdni",
  "key13": "9sR8B9TzLYJfZ3iuypoRZX79si3WgZPfHdiKx1oPLGYMi4U7dGaiw6m3rxJdeVBSVH573ywPP1iGC3qzQ43mUga",
  "key14": "2mdSWaaZE1gTDFFo66r6o27DhRL7EkXynbKdHASw4dcbeQDvXDcewqrF7F9dQdpyFPKLt6H2Kc2KQ4uwVHGbEGtg",
  "key15": "3Nb5VWYfC7vWggiMLyRDRvxoLNAu5g3WRCDm32ZzBEKRQjRhxJVr8xTfRS3ot9XXicTTXevZjKQvNWhVtShgSvEV",
  "key16": "nXTfmASd57xGmKCinETvkM6Z7UVtT6e5RSNaTZtbgD44v9GJnJj1gznxEJ618BhFb13AnfETjLsNFxXka5aXaw6",
  "key17": "5HGMwLRwEN9LUXPspp1bxpW8sQ8NM74v9yxXmiDB8Uvd9mSKgz7pDXvsoqWbT2Jpnt1BxajixBTYPqnLif9AWL8f",
  "key18": "3ENKoLFmY6gaXNNQvUD8awrWsumpdJPaS5yMmkkzWQaFgCoHEq2uGzy685XSCDZGHnfzQFtEicpoQJ4HER5gzsUN",
  "key19": "2GqYT57bnmZ5qLCKefkaFBpFFAdcyvdwPFCT3AxXSA7CHK45K9uMdmJa9Tu31DxzamdLHcdSSVvhYgA4VoysVXWR",
  "key20": "4WWwoPVP9dZqKVr49p1q6GNvCaty1f5ATq3ahX9g9xJKGBWK7kh6oedN4Arq52S9gzJMMnJfwtiaCMRZUXzuwHQD",
  "key21": "94wAnfcjuojwN6J8K69xtLTE1CdapNF4gL1BfweWoNNSSn81nvocLY763XfKiAZ4r2pLfFD8tLGaSAUe5SJd6Jc",
  "key22": "41KUNQvT4ateAHfHa5qEV18PGRrBcGk9y6QK4zVdmhHUTAsuEPPNqeDwetewWF6dTEozuDe8BSURX8H2dDXBjTqt",
  "key23": "3cPdy58jYVwGgw2fc5kvCPL3mDyV5C9gZ7Bt6guuCnjqYm1BnBHUGhE3hgk5kiZgAn7atp21uR7M2SyVCatbFRub",
  "key24": "R7fkDPxQjj7wXrrgirqVr8GcoGNfJJ3d5g2svCmk5ZbZ9d5dzpsgLT4NjDi2NZVLGH2uMFC6KnvhThWwxqoeRWN",
  "key25": "5Hw6G3J8hQdQaGyjE3q4WmYxiQVNLFnJJGcjoY97sAeWPBh3rDUtY6uC7HiwonrcWg3dWCyWD2mTRne97AP1y4d8",
  "key26": "35PrSX6V4XeS7uXBAjQksi1BUQbeNAiW6DwZfPxvPDpgH6g3szjSxLRNhaPC9BwEFcYu7Q7VnQL71kTiJswhsECT",
  "key27": "5cgCoNKCrYQwyd5Y2PKoA2FYjanCsywUhMR6SmhQ3s7zkJtF6xNQChYQk9AAWB6teCpsi3xtFg3J92aRu81a9vmC",
  "key28": "5Uf4Wm8WFV1ttnJkvQDfJvauv9NCMBhL7VesP85ui42muKf3H4AetaFuhgQsuCoEYW8hKaDAqEk1boiTuxgeJYcH",
  "key29": "4Nc3uNkjpuzCy7oJRvYggoEiFeHukfCFz637ddrsBRXdeMSbDHYQ5kPx1Pc7hqPH31d58Piz6MaJcdXH83Eob6xJ",
  "key30": "54X49keqLd9SPP2Jn34DbmKq8hVnC8JwvhgxkyRZrjaukiWEHUdgcKg4ehW9zFhLiocJ8C1KC8ctuHe2A9ak2rCs",
  "key31": "xhwZkWd9ZmuFvBcgcZr9tk41NMntBzLVGmHMFT7oMQ23Y9C6pi2z6TCzS5xVTAaXmBHLWsB8LmaCWMGB8kCBAQM",
  "key32": "5ebeXuG9Qe75CEHQs7szw31cEzRtq1xdvbYADUPm4imvTuJYpiUDf69jFBehfcVhomhqDAcMtNAh279bUnJwqWHg"
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
