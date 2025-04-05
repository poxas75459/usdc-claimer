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
    "3BiTXWNVm3s8A6dNhZjwFeduDLToxoiT4zk6oa7utkkzQJQ6LdQRgMkY44cJ3gZ7j5m1x3yymS3NPNEUPfcf5G1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SZHBUnjFutBmBiU4ripNVVLEBGGVtPWBb6ZnGqVsymnYfjmGVePVpEdUMsqK9onNHTsNCzLUF86tXPm2u65SSQK",
  "key1": "2MiHTrEuRGZvtdTkYxoxo1xE96kwQEVQNGAvHVuuhEmpmBrqdz9fhM3YqArfGDW2DeBvQRrUMHci9Hf2198hNBkG",
  "key2": "543h1uNoMVQr1wWMX3UPrmAQ6XVcP5EjXVbDyQsSPYwvG6Sqyf9HAKktVfi6G62G7mTChbo3kyqPG3aHFS84hqwE",
  "key3": "2Ru1hk4zzy3oEnWtDG7zEQ7XaUGJrXJkS7kBUSsQT7tgqZiDCu4aqoyyMnVpjUBcLtYp53RwyeDs6iwBVTfgCgYA",
  "key4": "48WXakFCtRNBMMBwWAFFN5yPHsqWfEy9RyhmxdKhtr8FXpTxF3ipHAi4YAFqySndEPCPDRmTyCrEfvg1wSHoJeGK",
  "key5": "5PhKSTVkeBgGnB4je654s8y9v7jvtvbmKoKRubMuWw7UEQ7k8eSTS6A97ZLUfYDZgfRhj5KCaQ8DsKmDsFyaNqmt",
  "key6": "5HJDXGnjukepwYYuUqhdA6f7iqj6od7cnhrnAmNMy8F4KBwm8HXqZry57itkJgEPJNpH4PtVhs2KyRwjqH7g9zYf",
  "key7": "2G71ZVoKA4aAY4tf5X4XV28udeSqKRnTL5AJTFEeiBEpXq4LQbY1fKDwBUYqoRTB2oXMvrWzspV793nzTMou54rX",
  "key8": "5wryY15vvuVdmHzU5qiKkYd3DUxk63H58TZxsJ4XQ1SLqRmkmzHWUFviWzMe2JkhZ9nbKoENkDJ8cdns11DkavFT",
  "key9": "3UqHbWwktCSn2f5WzSX8g52qshJAuVdwiYn6nULpfqsNkgyJPgcUbMGn7hVXNoYh4GgM3aStQJrdEGbZqtrnvXxw",
  "key10": "sQ7rEPcQJjVWZEKone6WpkdUMs6Dr7UUXzeZRt6jrNt2TGDnyugTSrNYK2a44cJgD84n23FbcnKqSqWe5qTJYXz",
  "key11": "5Vnv2muaDyMbtuL7bidFrJn9ds5EbX8kYvhtTpDNB6mtz9JL9XXx9sT8UCZ7DmFCBgoQLvGDKrtVZNFfoHYhEJzX",
  "key12": "3xwSXHYtQGHnbv6F2mkNq17gLdQTVUxE3AjdzJbtuP266LLM6FPZ9LxH9zBfQsrvyrvWbH7VJqxHahsfiLXeXuTc",
  "key13": "2N7SWYzCH2DhHzbyvR6m4c3SNsDh9Xb3aVSr8JYSrYSgUh5oBUudapFmy7GiwV5RvgE6Lq2wemfMTC4wruaCFGxZ",
  "key14": "2potCTBu1wwYevamBFeAM39G5Rrrt6Yx8B6E31YNheS5aCDAaPG6yvJa1FA9T6DnKFjfQF9eXB1RwUR9XtiWeDiz",
  "key15": "5rSbHRLnLQAyuf6rUJJ1q4R8j8robXbXSFf7VqA2YtpVRvM5TKdH2MHo5RcR8rv3xR2nnzNT5PdSgShimK6a7ogS",
  "key16": "4LstmwvGnVj2U667boiXw5auC47TsgCTxhB9FbKB3h87A6pt54jEwjRhZ3zW7wKVVv4ELKdhbsEAC1KhrCsyiNzA",
  "key17": "8w6j7QzFLgKX9ZwqxyaUHRHV89fXnK4EAVkP3dg8aetrcDjGBiLa8SueNhj2RK2iC8g4hDJi3QVjjVmZJBCkspu",
  "key18": "4ojFVnSxkGRduwdEPzPj7gnVBNT24taQzoog4iVL7iY95v6p8HpSWuXs9PSuMU1A9vCYhGZJD3bT7h5CQYcgzBzP",
  "key19": "2k9tZujPUnMQSwwWkjGjZrWkcxgJnuzwZCVXZTSi8VqucoNsetkDqsG2zUnwBvqoZXmNQ3kUmJfKDJzPPcKwNt8F",
  "key20": "3BTZ24d6BYz63V9AaGExaQY3SqQcGtQXXsJWooQsdLzPyUqY67TXruTbaHaA4nGDURDNpeqX8skuxHiBF6uUi42a",
  "key21": "2qFj84dyF2GWXppsBbxLRWx5gAcUev6bqVMLRq6QfoyFWB7DUXB3UUSXE9WQ9T89c3VZ8Bt8cHnqjXSG9BN2V8Kc",
  "key22": "gT3YRBCcYYtvHxiH1jQbnCWx7rMGqrGaBEq7cTw9XrZKakWnJB1AiHZDWMhPfcBQjmvUKtysc8d9cjGVRU2jWiq",
  "key23": "4ZTroyJAK9n7Uh8bw6rrx6vtzcgQH6LQajNDMX5j3BnSccV9BQDCsaRAQ4oWbub7B4ab2jA5osh9isExX2r9ZyBP",
  "key24": "5PRgFXn7R2k9vn4oLMqX5ysjVn6Sxdr1rpVf5HCgGKE5ndnzQRqEBUMJzbNf1nWJZAJUnY6tXDx7izSHTyFun2pT",
  "key25": "4yzMYXJAhGaajVWMb4L1dvaMHmMTPDeGoWvLXs4kXy51Y9ZA6bznMxKKTKkaZnPV46422fwpnohxccEyUiiNnk5q",
  "key26": "sX4UzX8D5xMbMi2AjCMvXAGd9AHfzsn2xj7nVH7s6Rs5ggLCEeqDnbmx3P5wwT4RBt3n2chuj6fL26JyLXBPyAc",
  "key27": "39xCydgQa6E2fEkaxjYFBpxJtXBF1wpavtKxoMAVCD5snbfjiUA1s3F6eFrEXJYmrJZipPjRyWeDqkSasiz1FeyV",
  "key28": "5TyNG22kG8SVSocYzsJ5uVH5Pz8hM1HmMWxx2LDZpP1BaXitgAXXaeW3PN46sBcsBzPsYMdnRdwLjMicBGw4775",
  "key29": "2uzTutQ2Ro3Di33AMDedqApj3qiUB5cpzg5i8jYwakiXfehc8aAX4ieWoHfFzkAaj3Yzp3GAjE1vFzjTPQmQoYRN",
  "key30": "3zdxNZytoXL3CGwCb2o8aRRJQCEh681JqrYoRLfVe3Y2XyBwmp2yxXRxhNW9FGPY8CpLBBZz9VfjyCodwruiMR4N",
  "key31": "2G7rvixPfJjXBvJNQg4TEzNC61H148wLyQTXUQW29C3sXVMdo2dWNRkFKT6LaSwmJxMRCbBCDuY6GeN1xPXaRKFw",
  "key32": "2Hyc3r4nBRbUq983ZVycHhKojshnj7WsMypvodP87jYs6FeBp7oQ5T4N22XEndiKahymUy78Hv7dCmsKPVUH2cde",
  "key33": "rnVJQ7MNQViDaDJoePErKRQM1xrgHNDmmAkQPqWqurHVUXKS5zTa2UK4hQ18trnoSdVdaVZE5uwaqwvLgpgmuPH",
  "key34": "39e2TETKk4T3K7NV9mVLDskAK5xrULiRiss4T8tA3irAyJTWW8u7pL6C2m7z7xFQERVbfjbNJvUXKqCY1zDs3zmL",
  "key35": "3wjgTixDsXvbw3EBsFXpxyNwpRGjpRvyAFiSAJxBPbWHCTo7u1FRy2MPqXC6CbBq9ofihM5AAg5WJSRp218htxwd",
  "key36": "uNcPQoU5BarXqAy6HzkVXzVjZoEXmVsRQiss6PyGy1xRpun5nbzUYcBFYcw11hpkS4xwdwxFgGz43i9rZvw1M9L",
  "key37": "3dKkmrr9GgRpmMhEqfRiUQeUyPNwiA5mgERxWL6ZqBY8KnBRMrff5x9wBzLK7zWkkjDADEz6fXSR47wZrZBSDhEp",
  "key38": "2xpShh3UnCij4UXxpwx6bRiFKfWwe4vVTjRoQjQenmCh6diknSMNPM9ngrEtNVFwWHQC3CrCuweTejMphYy4brwU",
  "key39": "2Byt9Eucs1NXjuv7G615z43tVpsqhAS8thPh7B7sovrQcyVjX5Wgf3tRNgi2WBMSxP6b7pX1K4PnsZ7S8StUVWAU",
  "key40": "33BqJ762SQ2iYMb5EHerHccC1tbAbndg1rtcTRsbPyyvVATimdppVLBZt294fdVjNAukWYsbpddneScGkBCLr5U7",
  "key41": "2f2X8d5iK7jmpRcEfhU4QfKLHMTRQzT3FQh4885s2CtAFJc3yyPVEPC8bn7HX37PHhUAN26S1KqG514kBSGRcdVV",
  "key42": "6Yi8JY7C8T9ycu7oC57w41x5XsSNdXmMToQginj6iwcmWdmsnaCqngLC5rWVkxaKH18M7ayE1z6a3WhoAi5wX2J",
  "key43": "Hj2LSAZvM6ZXNS2ktykhtb3QKqezsepv6qjnwNLaUZ5kV9q51vcQG6FGeTFMURKHopbdCJGaHtDLfBYCir51VDH",
  "key44": "Eakx3CeMHt9XnJ1mNqtBspPxCgk6T2ojvDiXr2RW5koQMQfib3Yc9vvRjrhZwetsBFuEEbw12t4ypS5zFPSb9i4",
  "key45": "7DPbdXEntH52uxLfyuzvT8TbavSqhPne6yA6Dz6HvGJj6E54ii36YP8d4NYu7VJrF7aoCVnvdZMxkX3tAFq6Tr9",
  "key46": "4JraF5J5BoZH9ubw2e79fanXJKBDo4a3o9qRbAjG9svxmSu4unuvxKYr96dnKrb3Frk2BkUM2at5dG4iXR8c2Yq7"
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
