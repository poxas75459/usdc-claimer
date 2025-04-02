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
    "42s7x3w9otPwamnV2QeQZetGoGnffnj22GuynFjtQyDfMqMBBBatDpc6ZEHYpvrodP8GRYmUtHP1Sz4oZcQtNzaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DKRLPQT9JHC6g7rHWYhtSMc2Pq3eZRYgCfNeGL5d1Q1Nxdtnp9Up54qNnafuk6VxJtrn8hggEYZwTPm9YCfWGSR",
  "key1": "3hGEtZxjRyqyqM8aKzRf9THvWt6zi31ob759y5LhT9KG4LEnZC8SLVhXaebULarfsiAZEgB74EgMr1NDDdd1Pu1y",
  "key2": "2GnW8hvLJBhvRC25nF7X2Amvhd9TN7aycVLTr5QV6ziVcwRMcDQu6TLHK3XJQ5br7hcU4YesAx5543KMy44xKyDp",
  "key3": "2kBLcNRQG8YPA4BZQDsejcwUnms4qQA5xQ33gnQfQCNnYumx58EzjcyjPDZHxpX79jqZ9Mwy9og8nLNSLbjepcgx",
  "key4": "29GNf1WCaSPQCGAjJzvREkHrmTYHPYgyn4g6SJj7mngEe9uBzeegg1H377JhYGzPSpq92yFNvqgg1oHQfYCBz9z3",
  "key5": "2beHZfMiQB5pDyRWocpMdvhddfkMzKUSnv9FFgKeTR3BtAziF5vXRJoGvQgnvjppCgnEaUgHXVf9u6iqPVy3Fapb",
  "key6": "5f4Cv6o18bfULdJGW6TpWmi2CLuSVq4QgQSCvzy9md8xFRmnhyDjZYppqkEWYggj6k9NXRQXnkdUnSca4QaRDLxc",
  "key7": "2axx6sADcebfrVvSPCGYoNuBPZqYjmwjV6dm8gRK9fmGbBsA6DViDUM3Ge7pywBpfirDxewC5tGZKqSS2ZjohWZA",
  "key8": "4JVxievEHgfV43yJ4HjjPAMJTgcxYQX2omn4kosPum8eALZP2HozcgtPYGvXReTAV2UmNPiBunbuvGm3WPNRdT4d",
  "key9": "2ujbpiDeoxJb2GsUuDQ28VjaT726yuzjDWfFcYv8Z7cvszGyHT5ZnHkDXpmbxoQAiYX4F1Twt1Y6FTHtR7wBwfdr",
  "key10": "pjNoJhVEi64tVPQxjye6Vspr672U2qd9j59n7EKfdmN8NbWid6rswcU3quQX6S3DKuFavRZLSTPmjHPb7iX97xv",
  "key11": "tL9MrnG5EDTbm6TGkagxvHfLRQ3nj19czCGExPg2JV4dG2AnoNxvJmALX84pfa6VW7iKzU48kHh1VcndsbjfBwh",
  "key12": "5dk56cRvxsds1wchvL32LSqLp3zLbj6uNaQbEQHeBQrB1db4dDxVzdv73qaKtRujaRGiXRWjgRSmJEhxDjpT7U25",
  "key13": "3FUhEMomDoKYQaJ3XcUSMFYJ3mk5fP4tnX3hwsr2vJKCHmPS3D4FWweDgyqksvqPV2Yw3RtAgwkYfRyhL3d8ykiE",
  "key14": "oHNEHxq3qPX1t7GNBWYtsH99MatfH3PxnVo5NE3dPGP8vYgRzEWADSENbetNdS41d8uTTDZUcXoP2wuLs8jtXbD",
  "key15": "4UTZH3HNCif64WH9T2U6AeMmcR44BQHCtwyQGXBfiqMPLpPK79dguR6gtpfXWxSpKAFzFGznpmtGrftCv5r25kdu",
  "key16": "CNtt6V5NYYAWwQUXwqVf3vTeCbd8HCjT6yMoY6Y2zWdSbTk9bZdKWS7f9NDc3zjup1Y7tJX1vz4qatHiQbiTHGB",
  "key17": "55AGeCzLhwroPDVjzr6PTiS4bmw6WYPgt5DrVQ9rKHCnSuyfiGmz3FAGWxXqUPbdicLygrPnzBz1LY6qYWiHmftM",
  "key18": "439tPULavpvZcSZedoyy6d6Q7afZja7CBWrRjaoC2iC4q9wm8zMGeos4PZ1gajtEVER54FoF5KsvkxpNW5PcjQpN",
  "key19": "4UTP8ijm5S3fCKawH3BrB4DRvnWoJt1wRnCqbw2XZSyXwNE8CrHRekww7VDPzaXLY88FeQpWYgiGZEEeebFT4HvJ",
  "key20": "2i9wPHc9tVYMq3AxFWakGkPj3Zukq1jWD2GdDas5Q4XpkfzxZasHwb4BxhX8HYnW8HzoN4kGb8iSJtRsQpKBMTZz",
  "key21": "4S8cupYix5zPtL1psQD8g8Qq95qvEH1WUgMBLjn4cBc7nriAP3GNrSNYRpD4NShZ76cXvSwz6M1zxG46fSfupwGF",
  "key22": "eeQmyDVpE3Aix7J38tE5NnGxL3WWvYVumHN3ZvPHw5BarfWE6NCykpd3dzmah89mpMFFvWHAeUPws7XjhNwtx6Y",
  "key23": "51L8b2QX6NDuN3TwLVQuD1ZVegm3EJGBXUyECgzELtmue2TswRp6C3oqpgSGJoVVscc3rc33bDe35H3NrasNWKJm",
  "key24": "3WUtuXL9Zx8enqbBK9D9NFKZJ4BTy8tkTUkr5sXPiyUGXPcH7NAeVP6TCrJh4qt2gq4yA8YrG4dp2MveRSEEvnoA",
  "key25": "2Cs4pbWQJG8WkTpRRNhcwDmoh8evTuaNjNnE8biYJ2YiUjX6VCvGXVECZhpxRYbDsgAEWU64aCynYBRW2qdSaXMp",
  "key26": "xWEiriEMAJgKPQYJdvPJwhRLj6kFQzyDLs4W1dTvCcsaWPWYXzjCEaR4iWp9SwNxZKUvgPkggVcqrs8WFRRW2tJ",
  "key27": "49oDohA5ScsHaSnJGApMmk522auZZjzktTrJkpYEj56jEMVZxbUFHLv2nxeDvDbtyRtvMCzG9u4sDVRcVKmUMWxj",
  "key28": "5gcKF4CdtWnayMVMFYwtzk6yEYJ4N67za5pmmPgqNGuqyZvXYu3evcEdyJwHf8QJu9mAoA5yo8AXCt9Es8nNbcfo",
  "key29": "4ehTz5shUwPXSwBVDLX1ADCUnPh2tjUmT6ZVydwDQwqXcwJeYN9n2w76hskpEhcnkUw8QnfDXUL825xpLenRjHre",
  "key30": "3ChN6UVrMsPodSrgFVRsyuXKHjVkUUnmRgDGMr2KLgBxWbT34otrXYdBuU5daqzN1diRjb13Ac4tWe2gLhco3CA9",
  "key31": "5YE5iUbB7BqeXoacWHNabgBrRbjjhnwJcZA23dD3JywAeukCXFRQx9BYFuzJ98NeMmwnybwcvw8Demjh69JY4YQE",
  "key32": "SzqJG7mh2gugRLk8TmCikNgDLcHkkYdYaqdV3A8rDk8VRdkZNoiz3e1iGTREY3iTrooQDX4DbW88WiLDaX321ZE",
  "key33": "4npbqMhTaJHVfDw7bhGxJNHV7JNe4AjKQAjTQGLsP2B89w2RcydwWZ474uAiE8X4toCuUs8XQpshmA2baNDiqwEB",
  "key34": "mRrCeUrx6W8PhE5UtNvBRAQPwYjh6j75gw4fi4yTLvc4WXH33HGv5h5kH18qi2oZPKcDV32na7rZpuamTEDPodV",
  "key35": "4rvdwKzdqDhWFZ5EReWnN8vh34ADSjqq2YLJKbDAu9s5zNiVZ55ZKd1ExbLudBZepkoffaKK9CtbRGYYgrWrEns",
  "key36": "62J81nKiKm2WGLdgn332gttECmYeztcbDrVA3F312JyD6v7B9Mivvt65DWJNUY4uSr52RGTfL43eDdyUMantfo1j",
  "key37": "2S91n3R2J6g4g7qCB8nwtFXFBE4PPUSo1YRdHe72YfyD5YNLVkKGnMfAKhosdwwtyrxunmsMn4DRyAZEStpKLVTU",
  "key38": "28uRDBydQ2hTaXcBMacZHWDtfMBwAg63zGELGwzyww13B7nbJbUQGt3NDhSiLwhVxGPLQM3dZR86p8xeU1QzdPiG",
  "key39": "3GeGPdmE6xxyU2RRUWHk9qXW5qWwZSaZnoJuokytXxntRe5ezRfPLiwfm1jqZYFFVywKtZ6q51YJBYMz41cPS5NK",
  "key40": "4hoiMkUAnGoNbaR1uYUvgLvzWwrhyGarZCxWqUe8Hhq9V4ptHdicr4Rukg2rMffRGv8Yy1K7ADkAp9aCQ99SHejr",
  "key41": "MxJsEopZpHGEKK9e39s5QUmkAjYzEMRowBEmCj5fndx3TcvhmcqYW62pz2B3tw7sR71pt2dDWWXjzacSd2xwFeM"
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
