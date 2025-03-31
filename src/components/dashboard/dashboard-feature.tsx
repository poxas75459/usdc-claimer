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
    "3qq4JG9hEa4b2fnwKB9QhZ6LspvXTV8nrx8UvotCCqeh1JAaZ3hmXsZhnpLGVNjV3KTNA3dr1w1TqAHfwdBbRaha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46UQ4gHGK8pHFNB1atnPjRbywwdT6k76Zi7VtQwvtR7uoK3TJh3v4X2CRAXuZ2kDZwpkjYps73SQNUFzN2nESaym",
  "key1": "415KQVEec4QX8giwwMrtBqjHPvzLmcHb8kFsz9kMc34YgD5FKgZnDXmDLDK4Czo8uZRVhEAGvXkJrmhmKAFbNmW",
  "key2": "4ZGRGJRHWwE5jfzvLVr9hXRkbKJmJ1CKJ9u6vrYkbhA1shvq3R7soWVSQ4nEnSaUkavTKMF89gGVunBc6gt2n984",
  "key3": "62KxLLnaDNnJswUi7ND49SrWiLU3SMp7EYJQnTAPpSYf7K2un1xcEjzuH46BdKGtomcd6262xEFRFpAo65Arg6dN",
  "key4": "FBg3PFptuzkxqDkZZd6wZ2ZLyAj7gJAyKkiVGEAL8ymyk3E5zKGhtgKTnwXoejQ5MMTbKtWQYMyQH8rqUXAkzG7",
  "key5": "635YxmtRndWLaFwi5iVtRZ65icxX1UbVSFQKVWexRMaMZLfjyYAgorW86b7bu86unXTc3Y6u45VcDvdGCb7oY2Bj",
  "key6": "49aXAQJStFWnEX1SSzW8W5dckeZhASN4Vnb3S8GVWX9hU5DdrBsBJjrDdKbZTtBh4ZgCBdQXccDy8Yen22VDS77p",
  "key7": "9GAByjQEf1ygSnXgXiC7BE2cU2hDtPVG2XoUtz3RYy3RFG4A8PDZSMHjS6DXx5eBQxpWPEFGP26KUK7uLKs7jap",
  "key8": "3MKBPn5gWgSn82y2QU95v17LyNDw6a7aYRmXteJx1UHP1xUpQ1uMGZGyVxHz4fkBg88HxHAw2Y8xbUK9CPmE5YTp",
  "key9": "4ZmMNN8omVuLZuPGFcgDRk5HnYfvztbETr1sWpuZX7uy2ny6eyRAnH9UbeKDVFD8e5NA8frvvc5XY5VemxcadERc",
  "key10": "4hPMLp8z5MRSyg8PDwxgfxRnQHPF1crgbNJEJ8aLeLCeTt7cHPjX9ciUhpnmUr9jq4yMhzzcKfWjEZWKE5cTUVE1",
  "key11": "65Qowz1qJBfCARM1SEn2GaVvVC7Vx7tQ3uMWbDb2mTBYPfuTTSoBy9PMLA2TBCw6hsdgZsACbqY8r7SDGkt2EmYP",
  "key12": "4fPhdDC7gVAs71bLHai9Yg7H4ckkn493NjL1i6kWgpecuUyPNwn2oC6WGYUxgNKe6TfA2ccyjuFCYATDJNfipsJq",
  "key13": "2PzS4GTxN3gE92Z8B9UbS7c7Y53czpzCx8WxLLR1m7K1Ft9DHLacDcZznRjCMtFyNHr7RyP3cJFDBhpT4J9zng6Q",
  "key14": "2yqFhDgcfw9JfqKj8nNtpd5gT3CS3XVWToJf2sk6b9qX7TtzoKH6MGHiRMWMTk4X59UytMHAFMzGavd4vSS9WzHe",
  "key15": "2ZPqnRVWUMiSX6xp5g6RHTNbjeCSEAZ2NPgUrtJKXp6qSh76cCoFW2e2qnJfpxL2Bm7BqwHBrWLnrmhTAfUME9wd",
  "key16": "2yu4WfZpKcb1zdMVU5iecRThzy2JAWTEM1FNFKggfdmmnEKj82TA6i2HiDFr6WpVy8Lkg6FZBLBdZmy3YEJkY5HX",
  "key17": "3FbjZKc78iDwst7qEpo8nKo5T7M1VMc6DHoP5ZbziEYTygGWhXcVgjjfRWbJ4BSE19Tjqa7nq2hk3ouk97UKym9S",
  "key18": "43LFQShL3DxrJC5hygNM1ayaGB3JE9D3zRvfyMhWpCVLJXJaQfpsSA3gevkmRRaU3KLfq1xZyfywoy2jnzY5jxCJ",
  "key19": "5zRitc58qdZyxTWeMB36jgNtS7p4mvxLj86dAa3EMxCYJqcB5ttMkp41Z6DyjrpM8oTbbVpP6kjgQSBsQdmwbe13",
  "key20": "15T4MqkitSgVSK2mrWtmxp4q6YiA8BAH3HKVeKCNeVh3wCKa8kLy3mDi1jW3ADGAYENN3Xb7GnJYS9FckprgMJp",
  "key21": "5XNfRHyV7m1Qh4ZKQyFaeR2V8Asvc4M4hfWT76FzDYs13opAFJQ4bDCaiGH7RzK3XqWem1enBqsNNduTDM6Ep4i9",
  "key22": "ARpDNCT7WTgfPDtCN3ePNZs9zWNpmQGoTsupcn3ziwmKiRc7WPCf18vQUm3JYoeh3tmnGSriiKej2pNz8aoBWHv",
  "key23": "yFmMhSJuo7cDLCbC4Sv45A7dFMhMTYr8RNZDVz3wqBeqUUKyUNCTDzzaRusP7a54tAqjofrwmkvSk9LcN69nqVH",
  "key24": "2FZbhjB2TgeqqavWDbFkMFGhUCrZ45asGDxwsRKTzm7ipGRtxNNo6fb3a5jBEVqY2UQ5Hnbpa3ofAs3dU31PaFK6",
  "key25": "5f3Cd9pdNsLtyoE6LpqYPabTJ2PCmCDgqY8tNccXq2DF43zhHNPEx9KiaWsgrdp1rY8jn552fpX8KrwQ3QVw73pj",
  "key26": "3PxcY1n8QySavDqVqrrVynYsJPasQrZ7YuQcUsCdv1BiqtmoXRHH7LW4Tv7MS9HQAHjn4gf1v2RA24jWvU3jo57h",
  "key27": "66HWqyb2jFizCfb7DHwf8qkUdTHDc7kuq4df7V3BEVhM4DYue3mVydUxCjYbbH8VTU29rUvip72c75UHEFMG4fzm",
  "key28": "bzspMAtS3AAbu9YrSGRmoKSSrX4Dp79Pbzz8UU87sq6hR2LCoMW5AytZM5wH2xuyTrgswLyPztDhCfTKbjWoPrA",
  "key29": "vBgMDrNYURmQ2FVeSJYfg8VqUx9JuaC1jY2Z6bf6c9UXW4Dg8i5mm7Yo8unsMtmNM3mtzFBZp6vfx558GL7D698",
  "key30": "2hx9DRq6Ndh6LHjWVEZmLyKH6QiYY2DF65ipvfnsDzgHrinmea2g8PUdiUYdVDAD24qKvN1CRbYLtq1bHmkSFaZo",
  "key31": "XSAXrk1sRw6YnoLHYxK7TqdXjpeAf55hifPXD4HscJKmNTh1oEYgfmFDgdbvHdAyh9L1qgPFoKhVACrVVPqDhqy",
  "key32": "u8drgfsRcLnsWWhzcFgwefp6QkG41Dbx2SoYB7yvTb6crDutKrcSQiRraSG7fQAdKYeE6gNxCSjoTNu7S8cah95"
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
