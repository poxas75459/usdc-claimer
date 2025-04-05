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
    "2Bb3smyH45zy6KQnvr6TipznXQABp3wyABUroT3wySwUZwRdQyY7NmEdc2v5rXax7U2SRFZHcFPvvLzgjpam3qzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwjELdGtkqtn7jyvP6cWPW4D3qQrdwNg5q8Shb2Xt1epFKT1fUBQwVSGd2V8dCKpAAKr9t8SNffSYyjHVv7G6hy",
  "key1": "5rASTCtmNW4J41gRoMQ97oiSKSxTBx3j4aYe13P3Tt3b9DRKf7nDCWoquswASysmjSsop1f79b9YZgGvvR5NQp7b",
  "key2": "3WPhKkUF9EpcgTf7tWZbtYxvrptZeLAyUuNC18MGySzdfmFL6zz425GYwypaJzPNdHL8Y8Bfcra463aGmUTRAeMy",
  "key3": "2pSf4SCJPGrr1rsMkrKkNk9Cn21ECHWPuCQ8xKDhgXVxkWvcD6xiBAQDwNHTbbVPqfbRQRzLWWKGTWyNPm5Zs9PY",
  "key4": "488NkQwhuaiczE4Pmkm4US3a1JBwZj4GSWCZMWK6zGMwpjwyfwqBWwX7KiTDX9YyCSQ4SNjM7ww1Eg3vbwimm78t",
  "key5": "5h1HRZUAsMYMNcfQAE7CzDoCKybKtyB76r18TDWFFprHKZGHKHx3YiQ6giqVfWeJ6cSoyF8fWZ9utKhXKeoo7cUZ",
  "key6": "3JSqLzNnGdUpH9qGauNPf8bsuHXosF1rB9JvpMNDutqkyC2pePH8sqKaXjHy1AzyEp8GSS58Y1AVaDbQ1qpUq1sz",
  "key7": "4Fzd7vJBBbpU9Nyq5Q1vRNHpoCTd3kuWw9aazC26jS6dkxqyhPpi1VeHtFkgfZBaS9tDNv81W6wG6gKn7PcxFX1V",
  "key8": "4F7GkFAtGhny2fHkAjj6ZSEpkGX7zUXnMrhmx6Cv9f2tfGaEXz5USRTa27xGqZNMrJLtPBSyDZ73wxm8z5Waabtp",
  "key9": "5XunF33CRnJxH1ESg7qW3hye6hwtksUgbAcV9YRGdiZ1WnfF83vQYx1bVNqnpo5YYprggtbPLdJFW9LRdMGbHcHk",
  "key10": "5CRJstyQTk45xMbDWJDnEuoXv9Q5dCgtfp3bWHKb94aq5hmKtAnGeHNxQJV4iN6e6djjNFjrmpk7aors2ZioKwpD",
  "key11": "488M3W8kNARnR2RLaiJckoJMzQZj9TQH5h9QqgEGBpex1SYHZY6nLzAiPmApoSdum3jTPpXANpYCPbK3oEG82WAK",
  "key12": "4671tEVoyrddqqw69PF5DqnsrMPkra7mXXQhaaeyfxkDDXx1w9Tf4Tj9pY1SGGpqrCyxxsFWjfkBtSVk5qAbcWLB",
  "key13": "4jsidc6BQ5RUTUiTYTThKvmFTozmnXp9zWFUYL5b2ksvpm4Hv3pfMeEikuwXiRKnJDXm3ke9Nph3d3PGo8TFNAxi",
  "key14": "4iHCC8rkLTYtxtktwbtZF1uzGgKdVMkaoYvGjpCDus13baS1pGAnwLry8GGYNS3xzngATZs4N36wrdC2nBqP8YYn",
  "key15": "2Vn9yG8TioepgAPAJ7TNP3ThKfDN9kTuDnnUK3RunGj3DFXRF8vVBR6JaHmxjMteDfkRqTtiqiY2LPVHiy14qDRt",
  "key16": "5QDzRMmhcdadtJRB3pxALyydjvJZJNeHNqxxnBWQu4mP3hJFjFvBiqSg1UcGHK5skTG9zDjzFcgHk2JkQ9ED5iGc",
  "key17": "2AUG8p84hPxq6fHX1omVCSsPns4dgGmXtUHkbHFvRZ71FNAfh3AFPsv2vA2hr8dTuCFjrbHWkMNhWS4bnvr6rWPU",
  "key18": "fmUmbV5w5Em4LMrcv2gDAVgpB2bswcyuphd1CLGDEuMAkz6hxazGyw9PzAwJnawDDtmCtezgVnjcV4FD8bxnFmX",
  "key19": "57PMyqRoyuMUxELLeCp4vJPifdahvFCQoBYCLqkcnm5HhAFZDeks7oDu2Du7FMmTAvxbdcTgicBDmFhWuGLUkTWD",
  "key20": "2y7Dtrkm4FRQRsSHWCdWRQRKBvjoPAFu5Z4YCdeVjcdpp5PT64CLknYHQghYfayTcVfMEuV7eVepP3fPJwbm8FR2",
  "key21": "3YvBxBU9w2C1aiLRrNWjvNbuupKfs6aDRSj949gdY4QojGhxES9n3TTCJHRV3Jqtht3v2EFaSiyAwsqJKiXiWbVv",
  "key22": "4Ck4hkwypVemYD6tjsoWL5v51EqDfUDoNBj8xAvzULAtv148cM8twfxcfNMpJRvHrttR3h3TNJDNN76jAaDGT7yt",
  "key23": "2i8rN22jQGs7R2JyvSKBEWTJEKQQk6HM4fRhCq2ugpFqnmarwkHHTHULh5xRpdnNDU6c3Wic23S69JAjnzys9kQh",
  "key24": "51TXsCi86msX5rHtPuyTHiwnJdfo8ZQ5CprfqZvVfe7gZPScsv4GkeJb67YKmxwT5k5cG24HBgAFe3rRmtqxFGrs",
  "key25": "4LJZshSqmL2TuvsDthNJ9xYoNhYyG9Lg7XAggjF6QjtvZPpFKTbJkKfEktj8igaz5s2KtHQNcuFSUEMaz439bftK",
  "key26": "4ctGdWGwU2a8Y66o4HWs7qewbqhD6oDmtfQgSmXurWAzo93NDPzsJ5czvZFk3sSzU6ikYm59bZRut9nSsFsFbhhP",
  "key27": "3r1WdkkRQbPGcRDjCDd3ce1qaXEs9Ac1UYZZcUvJk9J7GszoxraJHLwt8FNx4BNHYRDUwHD93jYiL66EKuST5U9a",
  "key28": "kYQrrMKaxLbqRGGdtfXhXc4jt9F6Pe3KK5ypZYJ61zJ2PLdwotneYAfx6dfC93JAxnScdW82VJGArYxg8FDfmUM",
  "key29": "Ew1iiGbV6sByi2YKZESXzPdE6aXCUKm6MhEaVk8ti1fTRgmiP1vgTAwxWJ6K2VZoC11J7t1km5JuTpNBmvbwgoi",
  "key30": "tsGXsqzfR5Ztx2hrsvW3TPSZTxyXa83hWzw8rVahpsjx8LRbs8snAvsiT6EJUBvMpeFuxArqKLvkzJyEngFpZRH",
  "key31": "4JEJva76wKQan9fGmQRx63ThxYrLRp75oJAuCLeeLjxwXF7gVVfsA8Yjkr3pDRphqksFN8qVvT82q7VwHVX8nfnG",
  "key32": "3rDsN7tnk3ghaY5fWno2pHvC1UUT7RmvVYcRuopPRHjcBc6EFuVDqvzU9cgfyisbd4R26C1QKc3qF1Bt5MZvXY4g",
  "key33": "36iCtYukHjhkXsYTWEesEU8F2FDutR3dyo7f6GGUHbCTbs7Dno2PbTvK3n9CNyvYwH5T1uBGvkBtqz5Q1cs4wAuY",
  "key34": "2xGuAFuH32CN3zFceTuxCZmU31H55HzKzJSSRwe8DsVMj1ffygYK8Ezq4rqhBEhHHhrAJKtzj25dVbLXEyKMKsfz",
  "key35": "4ehrGKoF12UV18oYSATQn3aH6qkb1mHY8M3f4PA5eaKeiEvZPUCticsdzkUSV7RwrmG8mQm4R2qEBoHRU3o1QEyZ",
  "key36": "334psQPFCA59e9WrXd6tL3R2Yb2un28MyoX3vBJSKQEvFEV34cqxCCTP6K9if87rXFFGuWToixYH7LoUnuMSBQUf",
  "key37": "2Ehsy2GenXTh6QdCGiR9wKJcuX9YaY2WePQgXNpPNHHRvijJuc9r3LW4MCBMjmJT21HqSSC8eeBYA66THWhMfodk",
  "key38": "4aXyANMSti4tM1mfjZfinxPj8mZTSLFN1byeSm86jQeAr56VAbStYSpyRWX4HkQbPvxXs9ifWiL1mLTGreSpH24a",
  "key39": "4DTMx311n4K9Lx1Yp643s9VRao6e1rxi65QzwgJg59VqbHEaAgN1UXKyTQY147teKF4xEyB4bG8JBDxPhg5oocvM",
  "key40": "65Qr6jSnt44VsPDSKobMjUDxNkapzS9E8LJq4V6bsK8i37dNnqnJJz7EoA1aBaB5nZrmKygex5CMnYGJj6VwVuC1",
  "key41": "rgFNWooq76CSHMfiqwBKLmaUR3qt4cGYiq2tnv5bFQMHgQwNA6tvA6YRcLTBXcwsCcXA2hqxReSSJWwHPTQFzhr",
  "key42": "26aQcTKDgCtPsmnoFCmsfQbF5wGZX8AeN5rLMUmHxpV9AqcazZaypUJD19ymKGYE433RCLzyz98PXGzgasSfn7Qj",
  "key43": "6617ADWzhVxyQHdCDH8NsNPSUpGzmZrwKcJdmSg4fHfC5e92xvuMphpjsBwiadbUhns3qHjBjp3wb1mAQrxP3A4M",
  "key44": "5y9bKhEQ3Qui1hhTkXyH4eCy7s8aWwUnWotgqncRXbkoosqj3VnqaUy2EkU1JRsxeQeyS8QGJrExzF5Agfb72hzx",
  "key45": "2wAnxpB5jZeqAd1xA4Y2PLyjKLRD3e9HVfswjw57BQFmsRrSjtuPnzh4G6T89ioGYxV7o9wejkHhqdtadgTnfPCX",
  "key46": "595jBzHEDjdaJFSPwC3oSf8fQfcvk6JGj4ZghcBnijK1dPUJ8zLPTnRUvjB5d8vdzFUPuBvCnt8MjCxWDnN53qCG"
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
