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
    "2MWjMoXPX5aQ6DXjapX6NacpBsw6PHrNnwkkvueeuuRW6bmCvixj9CjCJdkU5KzSVHs3Uqjdn1GER4FbNCCCJHGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3ptDCJHbxB23CeDt5kPuwJD9btiVj2znaSWkq9Y2PK6UjfSB8hKQbRnp7UaxqfHQBVovVSxWVyH4ijgdS5givd",
  "key1": "3cgZDPDdJt4hHXhLZZnK6XbiCrmtvFgXftNBAkbyZUMb9hWeLHt1Vu4mGNjtoEijanbLYJuQi3ZjTM4Yw2GDwfM9",
  "key2": "3q7vfoxK8gY4BvAmNhjHzLU37kvRHmbGJNW85rPEVKr1JnENs1ZmdBEUJtUrrHY6KTCZ21MqSaiLRHKYcdwGsYfE",
  "key3": "LQVdStdEGBjPmvooJyWkc1fum2mLxDzuEj7uFLD1EDQuqrHMy5NCyhvYTEC4psDU9dyQC5w6XD376zQ8GUqtJqc",
  "key4": "5streip9qLsu73vHZpwF8RkFznGhQkoMstFceMEGbsex4oCELhVgxSPBToVznDjkSUh1Lcz7wgCT1fyntsJx9pDV",
  "key5": "4f4L1dY4qvjHzB9MMuJzeFvfytfNaVLBUeggEmqsYAPDWTdwnhmupXMvYRJTQCFqdJzhCqT7qcgfnL484ocNToaD",
  "key6": "26CfioRdaaPLg3nn5AFF1qhAvfWapAHNVFkPv1stZo6NpVvMHWJPZ4rQGfxNJG6U1hYPECVwFEV2Tg6XB1hr2dFW",
  "key7": "5CFXGcUokQZ4D6otqXCdGdZfahMMssQeWvEQd19bdzgSVqCNhyc2rxciZ2edrwHyaKwQkHeo38RKzx3o9cKfiYwA",
  "key8": "4bxSFYamfKxAj4VaRpHbMo4wSUppqCenLj3SYniezz5JmbPmxQRrysuNRhp8oCfCfDdT46KqytxZrEazuZxBykWf",
  "key9": "2v7ko8Zw3C4wriyxMA8zQyidnLcLTBqaosb52GB1eWQAu4nLggvfbYpW4oymjaQ9XLEZ9GBmRCEUeXHNZtWNSx3Q",
  "key10": "3X4pFcAVpTa7zvihUbUvt6XndUnPhxGzpemL52HTDvPYF7UvB7hh1ECbtYaoc3QMT4ieh5zXwxgqbE5vgHrpAett",
  "key11": "2sWUnaVbbUKfVcH8Lh5UPLeNSE9CF9sR7aJH8jjJEWamsJUcZFKgSBrLyiVoAMmLQ2vahfoCkZUfLEbA5qKLbXVT",
  "key12": "2NTzdQ81em8LrdnGwf9C7hdz3C6PjbFLEjYrnfoPV5yWs4wNGpXyNf9kMBBn1nzWqDwTsBcuyJLjykfngtDmeZN2",
  "key13": "3DuHXRSek695zfZiiv4v6i63XJvsg9zhbK1nQZoX9HWia7o1ys2aAFyDZcDsDmViUVznZdMhDmCqVcDJgFbgkSPM",
  "key14": "3wf9oJQCsnWrv6yNDAbMUmmW3THVRBuzhqjVJK6q4Qpcy1upqkjDX1GBxQraoAm3TDWJyHgdVPL5xazCuSCS1naQ",
  "key15": "jEFMxRm9L1SaLiYFN4TqVUwTs3a38FzLnDrMvHXJt4zyw99V6bPzS4xGhPtxuXjacvyDVFp56n13jsmLfYLL1vC",
  "key16": "2Qyc2U6ndEarkin9dGTfuBPXtJ2F5zGHgwT3pdKtycgyLsXaVKeP6MLGpfhJ7ebM3ECRpgYpaA9krKrVetzsXZLA",
  "key17": "4tHCjrXRLZjB2FUBSFYvAVnaQgAkQSTWrcVqs7aQwpxBsRviAVS4uN19vgBcME8s5wzu5iPAinKttXG8MmVVjhDW",
  "key18": "2X8ZYRo666wevHW2irsuqfhtq5jUyTpJnvwdbLgupqwEX2DxNJNnzPHqNyZcj6C5GcsBU4Jq8Bkq7zZjXNha2WN8",
  "key19": "4QQzDE2dLmgn3NHWeXko9bZcuHVinaC6TeEqMkXu82xm4o8nsF4mViiGTwKRg71GbbsH6pBVeyHKUM5jGbjjrGmx",
  "key20": "5JdHW39fM7kfbaDXBhCYZbrjH3CRScVdDNrfVD3LEHkpzBdikZHxbiygiznGSEzHe3WpY4D2SJv5u9Y546KC8dMn",
  "key21": "3nknm1UUGwRZsQ5xaZxUbsB22fNaULkgkdMEyKT8im1Ru65ac9cFrE7s1hVTVgdLru7BVJVVZFX6ukofBzg28bKp",
  "key22": "24WRBg5VLLmnTnuS4WmxApbuDjmre1SSfKD5oX5mdcDcqzWzkySyB2BdjaahN3NNAq9Zucqna7zQTnbNEKNsYzsm",
  "key23": "4wPT2jeWfNr5fnJVTPb8NWTVEQM5M4teTTUfjidGLD1NmkNS2GucQjgdqdVU1MjudutLx6973KzYMBWBYU23RKRt",
  "key24": "2nDwaGpdW3dB9maP1utrvRygwhYVfmL5b5zYyz1dTWM3xCFJNQxSKjRhEttkKbh9VULaZ61CXjLt2YhoNZXR6ShD",
  "key25": "63WsfYAzg1AoDC5ULwTN6TbCznrzKKJ9ABuXKRFU94XntR1X3Ht9GEsqN94GuqCiUN6ofKvzNKnK4RgxswWCgNWD",
  "key26": "3fGjMA9cq5HaxYTpA1w2DSXuoZE8kDK2ubDsZRg7mgAjeaaFSyzVVQs1d4i2phZ9y76dusmdJ6utCRLLuUX1K3Wj",
  "key27": "5GKshmZSmrm2ihAuomwsBu3mgoryqvSA2ocU7KAsqet8PpfUtTtoM2YwH2QM8xCeiiW1nwvRx6fqnj3ZUUEV1EHo",
  "key28": "5YpzZUU8ngL1LqmDS2ddVtdJMbuk49UDgkYDw5Z3XcZVZQWGzEEuteqpueXnFjjcXtHKszMeWRi22DM9psZ3KogE"
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
