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
    "366HtnssrdQdpRTYKzAWeqHxE6PFoJiaq2dXDm8grWx7q47LEBYNaaNL2R1C99Pe6vJpJy3FJ4U74qmvHtsxjFeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJdNpVR82uQz91UD1VwoBVrC3ywxrN3hdaEEmYFb6bar3kckCiUYycbUHmH1s5zVYfWjistHCMUA4YhBGsXUTCN",
  "key1": "3CCDngX2nJW32pYfTob27uCBmeJCqCgvk8YGmXDkNVQh2uKqYtPeuJcjfEDqkaCVCQXZMsjoSiAYrr37fqvxFV5v",
  "key2": "57b9SfXZo3UghDDreCzZtuWTnq2aRYzBiGapKgZnB1SqRACnKJ1Z9CvZKqAG1MAnDKZzUsgWV4q81Zfuf9Ng2YJJ",
  "key3": "46XXQzKuByMpvzBy3nbHQz3cvZXBHBdzRoyEcjxVSipnkRwjt5fSDMD2jBGLpGZbtg3NBWpKqox23UMUfcLNMNh8",
  "key4": "3nRSU5Qks3vbQRvLipFBd6uwFXH3DNiaqrK9rWCMuL9xhMYvbeaEbrsE6CMgR8ERnSAbrBoM7xEPPVoRPRPfMYPx",
  "key5": "5mWE6kAQiPW8Jj3GjGS8e9P5wV7AVFvi35ExQdqHVHCNPctgC4JqJyfZMgxRGR7AzkhdgXhHFqWkTFCGNFg9F7Xi",
  "key6": "2ParMiiQWesTQU8RxfHH8Rmpt7SBLGH6zor8HL3Du3dC9TmU8Cg4p3fUFMRDh5xFTDMdHcufEQt9wPkH5jwnvVhW",
  "key7": "5XryYda4xH5YcPPptNYoMmWVd1PtHvjYamaTQARcLwy7MtrNjtYGHZ4iePHb6tSLa9dX1LTFEU1QSVbBV5KcLjwa",
  "key8": "2NxjoTNZBAR3mxeDJRUeAegzDU451AKyRFDeLF4mKjDXUtn1AcVF6t2g8g8deKM2aw3Fd6GyNyW4LvP52hh4mnp",
  "key9": "5dwT9jd47TwvzFNb5eo7geVhS3X6spr3WXQLS48YbY6Qr9skseCShpeERNFYfoKGgrcp6o692SHu3a6JWv8DjVAg",
  "key10": "5HA9a9wkVMdEoYdJG8SVbaqUWSBwbswTvqjJfuprR1EdkhxWDuzmHhwX2xvmCEQ2HvkwwTne9SBiDEexGJxdVYwi",
  "key11": "5D3Q2cuVWxLWbpp85C9TW6aYVazT2CbxjXU6dxDfVWTwdfpjWgfoQexisULn28QwAzUfbtUH8F65qfn4UShZLUz5",
  "key12": "4vsC8LeVNmVZje8tpUxofc6WhUk4u3neZQPeFuAFcnAajnsHbsu7nghR4Sfgh5BNWbDUm9om4QG46cAJ7DEskDuX",
  "key13": "2pFbmx3uRop1mpCnPHwrMzLp7BS3CD68kfjWGiXeTT7MyCQxYRq8UUWzMxUrqaugPFLd4NzKixzzFzgTpSrMycRt",
  "key14": "4NVpj4sKPsRMZFY7VAQ629SYL3uMy9gSKYfePf5EjmDk9iDuL6yG6biNJ6zJiADBsrDaFcgmVKn5UGELkrqkdygT",
  "key15": "4Bt9aiZTjK1UTWxywiRmupph7S3vARADjFRLsHwHG9S9as53CyNdBDj6n43PBr1SwscM1BY1zUu29sr3wD7CVq2H",
  "key16": "4go9mweFmboy67iXQqpC6wgENoM7R2m8z1m8XnVwEmCD2jn5NKgChhfb2JYsvo7AzpoVHH8abMWGKJA35ALZpQDB",
  "key17": "XhVsQ59xCEZWLRmgL5QKW7JN3uSADJXh2frvKmwuaaCRiDrE59ZacG6fS7AYJEyCgz4GMW5mepdfMktKLsKnQF2",
  "key18": "2bTUancXWfzjSB8QvH7jpUSxp6oSFHgCgZe8rHpSCLFQ7CqojSQaFuas9yAgE1JphyFuwsKWKZuBF3j48Ym45v7G",
  "key19": "2m1jqy5cdBxNxnTsjGenEdiazAveiHi41UT6BowRTycCBYVnT6XpdPVpjFhEbUs4YCPs41jNyzb23aRmVjAGd2A1",
  "key20": "3YdeMC5BdU9RqXZyMegHVZRRJFwopq21BAEXPXSFNqBfGBuvDpgkvn9VK9QthxjFc7aj4mVBiTAe3ugor2Tjj8tH",
  "key21": "3z8PoVrfge3X4x2Pj83FuHXBxLrjs6my6SqwBxw4a5UboBbwhwtugeXMd1fzkJTV5HucyzQvD6xQuSAdJQCzCmWd",
  "key22": "5xQ8eoAsm9Qx18Sss2mgRgVLTTCzGgNEsuzWM7WwJ5qndfFrpCTQHKn8iKfMHH9b5NNeJgvLydc2Hcs3h3TXAYuJ",
  "key23": "bcVgvbSwdQKa5iqC1sNjwfAGsQQ5w1Uv7VT6RRvTMSusvkAT7KFUxG6j1RzDHbbXZdTAPBTaugQbGFfwPCrgm26",
  "key24": "3urU21hWEPCMJMZNh28QpwUNTBX7nLfWoLkZGpwBbFzUDMBfrkTGrLsCXrhRx2v6TmDt5YoxhwE3FX79kVzZ68t4",
  "key25": "4TesKGbP3ouppDhuB3yE9oVocJsbf96f1dSW1USinqmYBQHNFwFjK3ESiwcD93Y9n5uS3oh6jGSx8cVDZeC4QLZ",
  "key26": "4MkvgqYra2jUzGkCsawwPvVakeKkj3cZLX5pc4GBgPeWNjwgBX6uKzh4KFxC9EegA5pndhhbEsY6m6movaJxXp5K",
  "key27": "eU5LiM2FGT2Xu9faAqQQPcNw3gnVDz7imvtZ5aCspmENfoGJfgYmPfKNdBhfpEf78KLDkXxFqoKvQ37F6yNU3qF",
  "key28": "5Y4YvW9CvBjNH4hrxRWbxeW2dFBTihwAhMtZx2aG9dKaWnhHpsHeTun33jQzdc2WdxMxuqc95U77esMm2ZADsQUx",
  "key29": "3PuGzh86WZYUSr4NTogH1xVBYYKS87AJaxwLTAkXLtPCWm9Rwpu3SvTW7puLTT6THQCLsojvjctQtJAoXhqBqVkt",
  "key30": "5u8NgetnWv9vbu33s7VKh26D9Z9wAMZuseQBwrQf2GafE7PKS84ow943ayKWumMcSxJvhH9Gvrn1TF9HxkWzpVPy",
  "key31": "4JmKucHLujwxpkv4rMZ5aiUupaRF2ze474F4Pg1Vr8bZAiCmPeuiQa7JqCKBtXzpcGeNCesYBfNrZT3v8ronfzZu",
  "key32": "5i9Prm4Fy37GTMS23PtqBQRDU6iuPpyb7BbvGdiya7AkZyAy9HTX1GbKtTQAeycRk6Fgnif3G2QtUAaD78xTM1vk",
  "key33": "uZiRXNa2LNSm2gy5xpoZN5CKbbNEBV8AYYgwcNHfTmmUM5C7ACZxaz4oukFK2rJKRGQ3GvDBs5pga7zwLMz2qkL",
  "key34": "4ocKHVws1PhXSfMtcpcEiEb72NWWxoTTrw7WeKiSmLsBH8JS3BvDGyiFwx4Sv9HXLsGYBbzmXtR3REitpFu7b6A6",
  "key35": "4KesJbajAkbpMm5Frb7Xq52gDp8DtkfCzUMesdggxU8ymBEzQkUBBU7jCkmHV78FRxG9oV4Z7fGyesmtCGmGxgGR",
  "key36": "3eMyA485n4PiL7mpsSZjyGKNJnoBKEwaCUdNWRd2H1J8AsHotqFkVEyiq7ziXE8W5WocsRf44BwiSPhkTGLHuDUw",
  "key37": "65H4WtAKuNBSeYCLGKuWcpPCMdXg8RqXYp7RRcsywCyh3P7y8Bfsns8jv96G9rTDAcMTjCR9AEzShvLnVSpRrZk7",
  "key38": "5iTAXw968oPoT9x2TcMStRM78n28UKvm2dydfVh9t3QxYriMZZL5ufzJfKFympmeGdeFv8RvzjWNty8m9T8NKxQj",
  "key39": "358KC7fbvcgfQF9wnAb9r8fzNBhSuqXiJMSxvgEjTUfSBxzrExs8ZX1acP28s51hL4RgigMMauF2Xvc37tWD7CtH",
  "key40": "e8HfPbTuKuad5LhE6BHXzMZrcHyAChyknpULjCoyb8hhxkt8De2YfxPDsA4B81qMcb4uFUeRcFFXZYzHfs42hW6",
  "key41": "2gDW91hRvxDF3WT5sD9xAHHgFLrkxMy9VhyuSk381UiH8qkEmbyDsRRTVwowwGo3Cy2BZbjoiPcdnT87bEc8zFt5",
  "key42": "2swjSHGzLFBhKMPrE9Ww7CKWjdY7JJsK3u3HwNBQnyMgTM34t2yXHQYfN1xi2q9xG4GK5bYF312EK8AtV9yLr2g5",
  "key43": "5SfNvxpboex34cfVxFBjMCsU2QubKACmoxUfLo25PjojJmsR5dhom4YcZxrKojzzbPHnRaP4oEEaqa37pRkR3C8o",
  "key44": "49okcUhFnHAKKduw87vqXbMMd5zr7RbYkpt5E9KxKryDzDRHu7d15c3Ccrw9VEbLFxvtpCiaCGHjrecoCSsYtLkd"
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
