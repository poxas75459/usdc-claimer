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
    "4oceYPE1CSU2hkr31NRS2oUrswrGAy5Mbax58DNRXn1f5CHYByAJEj9ctLy4RzpjEnt8Qoc84b88Hs79H54Xtcyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bb5s6ew7SYR98674DMda6mAjB7LVZtvJM4VX6nUxx4hXWYyePgPiGuvaYEVjXKEHNbXnTP579HfAZdfNswf3gmt",
  "key1": "3KTneTveutaTRgSdpHc4RgsTARcXsNXVzLhsyyDiWXZUajZyj2PqsvGXi532XyEpNDqbPCVzZE4RcD3uPksGXMtz",
  "key2": "5i7eD1Lr4QfxBfvN4oW7UtCNSvYPbkitb5r8HE5pYV8MoiaZ6txcEbFHD8mhaPjxNYArqKfno95XmoAkH7WKwGqX",
  "key3": "4TgmLe1fy4H91ZQ3hSLt57scC9hkW5d4v25wFZs2TyMxh25k6j2FFMrbwZBEhdKzB7DzB2A6D8ks9TgGsPwBxhxv",
  "key4": "5T2BoMPRTRrAhgaoHM3XriPYPrb3tbBxsLJZnzZeC8YRHKuD3R99W8RVtbDfR7k2yihgWDBWG3NnTJLv9GDXG2P6",
  "key5": "3n3X5sPmGRCz3smDdy3HMW7bh1Hvw3761Fv6Jh78qKYshtY4z21WjwaMKwhQ16A8xMnNVLt7MtewLhzay8CBRQhu",
  "key6": "4ktCSghvrPaGtDrj3vTiwrFs34ri4x8gpQLwByfJs6hWp9HN5AmwSayeTVQv1rbDztgPNBUyb7zJfuoLowJLXaJy",
  "key7": "28mZCRqE776d3tM5SbatRHkNmJgaHyzSmcfoyScjvNHouHj3gmVnEcxSwBx9TRLkywvMX5qECmsbeJPy49DrUMoi",
  "key8": "2AJo5WpPbDUQSAza5sqkEbRHvSKbappWKLmejekqNtixLQQyfYuBYgVUU4LjdcnmNQj3577ySXXXFoaWz4xoCvbR",
  "key9": "d7eKJDioCMG45AvbcqFLMnqdQ26FJqZbMvCgVRf4MXEcwqCVGhFEiZ4JUNpTauMkophfhCS3dbF9UsL8dPsx6at",
  "key10": "7gSDi8VufJxK9VmyUHsjdi7P8dQ3moRLEZsm45ihMEVdv5GeptFRsL4AzgySdcqyYaSUy6n4YTNjvTUFcWRma1C",
  "key11": "g5qAgY1D8Fyf1hFvY8PhSJH7kn4w4WLyrqQKQk14Ma37pa9FLdRAGpmxsdvDiGDJsxq8AUyJatNRz4CP6fWrmzt",
  "key12": "4pprsA17tDFXRs7MBouBYVwB8qo7QmKWzMRUTqiRFqRbEBHY6v5KP3DKEkCHnAWcuZacW1bqBDMULzWj4Visw6US",
  "key13": "5mFxVWP7jMVLaN8jREcDkWFNPVxoudmB6CcasJQ621kGcpyzXMCi79EnwYqqJxLBNFPAB9GaeBB2qXqEA3y8Qo8j",
  "key14": "596iJqziYUYih9EYvfkjCJe7bfLoe7rgvETZZrzmJ3zrCT9UtCGMH14UHAjoiGfNiAHeCksf6egLt5WTezzER5Rh",
  "key15": "3AA46S3vgMTbutN482hfR8E5tizU2U45gxyQwXgmnmUFrA7J5FY7JEfVYgxGf1E8D2ue6WGRo2SJksw3wMcw5nbq",
  "key16": "2MUKYMZuZ17w1K8gXvzrjWPeMftaTwYWY1wpyVwwY5VaEQVRPBcRaUvJEFD4JiJkXS6v78kV3HoeA99T3SyWniNe",
  "key17": "2rEYTTbRzP8xi2SB9J3sCMFJugMjXvKRwyW3GzpKJrUbwFHjmCwpFRVQwdbtZkH2xSfo8gVDrZ57d8WQKSByrPSs",
  "key18": "3UuoqWVMM8hooC4zeiGiZacgR3FizAumbsAcPccaLanGkq8MZqXjE9GoqxFTCyNbxyFgyQH8V7SZJ18rpoDkEWa3",
  "key19": "5tViwJGKQhqh5nwhPN5hAWdMxv1W3t1rE7gG67JuGvDT4CLZNUsg9GacP6BpRCq5qWY6SsQN71Z3PyoUUqcuW13m",
  "key20": "3mYmzesa8V4KRLPnHja74Qq14wPLFwyrEkbk1UAWeuSkst6JSbkgkKqpcSDVhVYSkR9sP9E5ySdKVWQrYLW1nZwm",
  "key21": "5ymoWAkg6seSGvszxfKfBQfGbt7tDPszSBU9WF6HgnRCaZMYryjapRp29eTCYdjgA85g5UHdgSrs8Y1CJqideT42",
  "key22": "2BhAXhkSecjSPhQ2oMAWzQwDsY1XZLNE2yeNrqbzbRHH7oVY52Aqt5aDk576KnzQcAdJtVegiebUiPAVX31TwkiC",
  "key23": "3yLDWW3H19SYVFr2yCNP7CfLGuGTcgQhwAbMB3QyuQnakKuaDt3ZQ6qLbVvj3PXZrxN3f9KnxMqJ2X8GJ3HgbbMJ",
  "key24": "5ZNfX5SEWKTEomrMBo5zVswcLu2VB2HdWMLkaRvoXCwTu3xE6nHMGtXcCFNhrtQbNw4Qqh3DKKAu7NUc8WEmAAVY",
  "key25": "4t54zc4hC14mBzbjbQH2Eidc6LTCF9rBfyGRCC6QT53npDVsFd1qBPNTuFYLj4yhW8jGxFaoefvgzPQheQTLGJTD",
  "key26": "669qaRd7RJ9jnKXMSXqyWMBZMaBGUJKYXnhj9pnEWF8mugh7vZR8sqsz9JoLBCBsZ3atRG8vunmhGY9Pqv3iEfPq"
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
