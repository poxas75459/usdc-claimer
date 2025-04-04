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
    "w6ByANd3z4h3WGBD1iuTb57D5PUhwRrKmDpW6GkZQ4MBjCd1suw42CtpqenBQiNHaef1MPDibQsctnmZSvkR9Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M89kckgapwpmH7epaDDt19MRtQz5he7S3fAorLDWJuaoKGCTTeyxFE3pFLmYrHvs6BiZxpj7XoNqJnQFF3b84ag",
  "key1": "311AsSEjLi5MNC8WyCksNeNCsBiJzRPj7yKu8zEP8kSfNWaGBLACdPZNP4SpvbkUgPhoHTmKjJJD4NaPbGZ3B2Hm",
  "key2": "qN3NY6fHDPaFkSxupt2qpz6WNKqQszKjByz8XcSdUKt9BStHNB2CEEragiHPL5qcek1ABoc9nmDHoeG9gpiJGyh",
  "key3": "YoDgUQouMabWYxS9LQrTUN1qqwsCWF4yC9tDB9JqCD9Die53nbr2QEXYFdASw4v7mbzNNFsEQ6goexzFyY1aP4D",
  "key4": "4VxBLXQhXatwp2suVRGEJaGPGnhDKBQ4w3a9zTaE1ccjscHHikd775ftPYGocbqA5XoNbhqUXiPjafoDXm3ZDn3R",
  "key5": "5EVCxcjp3GHYakdWBswZjb5ukrUGW555hNQtb3udqi2DLPEJDhpV34H5i53mYfb6hd7JXSW27Gur4i191S6rGNdi",
  "key6": "3ConS4TongTjTDCWABFCpm3rHxyczZbfY5ygW667AAJBMQwUBDfbfEGygjd3TdBSa6Fxs1Qigs9BVCRGAhqJWEBr",
  "key7": "57zwBWCULWEssymF7c9WD64Qwo5xDnB6Vsi36p3pPbtYmZDf5RqnV2x4rLRJgUQYTr32QeAmxYMVn7dG8ZfsRRHU",
  "key8": "cUtFcMtpPJDQ8RPnetvBzmKGhKjydyfqbmsSoe3Z4nTa2ZM6YPGMtY82H9AFU4SkUHN5x3WY5r4NjqwU4AndVaD",
  "key9": "5jMBWgKHmrpkfsBSZ9v4zimg9yNT2rF2Y2S6jywjPbvae3rj2jBLZNaqNWH1Pg4ZXUhuMfriNYGLyeodMzkfoWdf",
  "key10": "q33UbNLXhpSzHrd24MZ7HQHn5mDMw9CdvEJdgefVMaohuwygKBQ8RKhij2Y26TNJyi5Way7hpfCpuvu5mddjZS5",
  "key11": "2CgBYmDczrZvLTHxvThT3EFdkHNQfomCJVef3gFYpW2VwMAWeCjb9E4h3UztY8ddihJeCyrQFjGpzRYVaVSrAp9w",
  "key12": "3FgxicwihBoReap8C799dDvT7kMqrZvY81oTokfH8gWCHXYxDAQZ85XTJARxXquVRjjTZRmfEJU9VdnCp4yW21px",
  "key13": "4uAqZvWvxtcL3Z3PpmW1Deqx6PxFHm7MBQYFCcgKh7vQKLiAgtPNeVCjDD2hBTFduYuY7QTsnyLVR25dEbFVfGUW",
  "key14": "4Ji9tscdQEcAfPeracgJwZytjJ69G11GVTaPHRThGEuGrEmtXuWqZ4A7odpMAdGvv5tCohM7sv1RqbL1vZEYAH2L",
  "key15": "X7vhtkrgRnrTosWY6hU1ErfZN5WJSS2bWu17Ue9wYA2McBNxncBTbYgRYZ4Lt2YEh4x5fHhQKimuqmxMTruqDwx",
  "key16": "4dbqdnEdhJKLqHxTSYcvgk51Vp74TXgcbNuNdcX36QwhNb9qg5wk2xiNBUMnsiw75nvqcgXoDVDBvjk6GaRUUNWd",
  "key17": "qBNMoxUmR8z5mqXJ4cNSsUEzw4Mi6KMdSF6dJdkgyLjCcHwt7nQyqeiXugiEAz1hFaG1L39XkejfoyW6NU19Smb",
  "key18": "32X8rg9U4QC5k15PYxBkaDx24Sq5dXvbKqeb44GpMR3pydG5b5cFXcxGkjvQpxWzyT6Q5ThjquMV3kjfv9zJeqea",
  "key19": "5HbQ2eoCvDStrDe8s16jYQapSqEpcG4ESfFzszSmznTKjbdS9za67NWssj2UDj49L7ycFauhmLG7oy32vpNgXymW",
  "key20": "4Z3dpUF1RZGMbeMWm8khTffxCihPWz9yZSBhu1pTUX4AXJBZsUTqSg5GLSEU8mYZXiirSPyFHDRhj4hzQ1gK5JGE",
  "key21": "3XmE58Tr9d8EgmhrdfaGgeEqz4hEhnKhpXeSkQf9rHYCygXdwCL9JChyQpHq9G9Cb1kEJtV4wNkocr5j5bdYAbMH",
  "key22": "66UEwiSBcA2ChtU9YrRBPH4mauYbDg3KkrUMaPmA81zwLSbUgQTgrcmuyo8ym6NvnMjX1QSK3zsQhVcjJhbdrTFs",
  "key23": "3oPPdXbs47h9FTFqWJ7T91UdyAkZK1T7zjhd42GgvM28AdEp7pqp6CuVW4xfaNfNNNXQWuJ4BDf47ZZ8Dy6XdDz3",
  "key24": "581dnuxjjG7XaKL13zW7FmsiA5mMnxeJj65KWsh3urhX2wkbexFPB8LPJpLw7DuuLzYVHwogMzQY2BUSLNChwETT",
  "key25": "FFKdg7U4ZwsXYkHQBYNnqnyxPU17vgygUChYsYDAHqscMjvHR7CTtRqNg1C9ZKPppfMWFLVEDFrCPDFVs8xWaRj",
  "key26": "5ewEGeqhh9mmK7VyHUAjsB5knyeenHfB355x4Jk975EU8on1hAaJijpN75tFG3EgP3ckmaWANyMu9vvRkbLQryft",
  "key27": "4zLQT5bywBaf1ycGV8S3rPzy86c5gEKwzntiyz1iVKrW1xyxb63QRWGEYqHXFJVALTnw2vqnvaB6YfEXaaRaSDJB",
  "key28": "6je7e7dooBJwQGbhLUUedBP37t5JSSzUVdzYrTRyFx6edft1BjwwbhgsQTUMx1EwPa65WgM8izw75ceLC4o98CU",
  "key29": "3gz8M71CUrsfdNxzy5Axs9FjjmCtPgQmiqVCdEwQwSy3kTXmgJpZ6uikrUfnaqmfXKT7Pn2AMQe5NQHtiVLWW9dJ",
  "key30": "JBqEm38qmSJZPvATvWTEKaJYn1AviYeHjm7TjsKWgnJHY1DV7HT4S3LaGSzaCzSrtn7WtFLqa2cVW62DcobK4c9",
  "key31": "5Ai4PB5Lwm6iJpGCk57zNikAUAmzeQoXA7E9LYanMB4SpkftC29k7mPQFaUHrd3qLCjupNKTLzGc5AsyZ93A51e1",
  "key32": "2KUyjaXwAt3TeKENMyVJ1fE6ShicjLqu5i4f6WWQ6G72q3sDsox6TXrnCwdbBmnHu4osjJc9fexGzVFxy53WGjQF",
  "key33": "bf8RhPptNENugwzjyBoAYEfaCPRVonFxtF6BuHYhseEyKV4msm9g6RSGbBQUduiEs2xXMtrD3ANkGZUdGkpLFQp",
  "key34": "4Z5Yqp8hvHcKD5FFn69GGPQxCJ4aMQ6MJVwF5FLxq4WitGgwxYqZW9eXfWamH6LBq8tWwzb6ZirWmiHjjxdW5Nwv",
  "key35": "24Tm73hJMGB88ivuAmdF4pajWANS46cqWD7nMEQDueaFmhpzDbzMmiYvHrqY8WKjE1BsAvcFpwjmq7EdQYBvtDNv",
  "key36": "2XAFNjnpX8ZWGrf8SjnjXJ9UZ1rmi5JCie4hxd9YZReNCafVUZvzP3YV8RmMaD96WgXCno1A24eoHfDowjArUgGJ",
  "key37": "4PRqaULkywTEECC939eLMKYdJYkv5Ahkjf8RQSY65pP1CHNDBq84vQHTzwsWXEuzowjMa7QY2mS3JMBFqj7rfLtu",
  "key38": "5VoXphztydV2N5BUqCRC1SLeu86rnbZqoccxaks6HAdmxoW1baR1iGawZdD699cZAF26VL743dwAWzWg818NYFhY",
  "key39": "63tHeiRgQkDtMegHUskmMpMy8bbopAta4ze1czkoieLRr12ML7qoa6NciGCYEaY9G3jGgPGNK3qs5nsCnPaANxZX"
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
