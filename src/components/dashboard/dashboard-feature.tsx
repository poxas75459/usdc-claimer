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
    "57e2c87yFomLCkiDnTtyt7Hr7CkBxaeUw7jXrGwer1WXMuFEYNqxSbLQYXrwPx74anUJPq9HDMZuYKSkF9ZgNpE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJ8iUYpuxgm2FBZ1KANFmD2dqj4CggVsqhW33jhk9bfehSMxnzKaadKJ1JJqj8CotYtd6QmZ7yTLgykERxDj8mY",
  "key1": "4PAuTccDEfU2Q4QFsYV8hMSARatEW9s8KwT2kBU7R4jx6wAUpy73fD9uFTJDzi9K8ASxzVMyFLmiosCCLk5pYEAB",
  "key2": "5DLVDX1CWhUjdNn7LVgw3u5SegXkc7x9SdtYUTDCDrdf5PCjgH6hf2KK4xPR4A2dfXFekGY1USNTJpSPsRVSTzTh",
  "key3": "42nvrxAHhkmW6XBRLwwUmeo9tnXk5tkpUUmVJ8e4Ay62dp8TNnThTgS9zsD2RfcinWBzaCcf4zkYv9qoBwtZr9hj",
  "key4": "a43DmvWZDZ8daiygoigw8DMxXAz8F7YUy4Y6dUd1h6A4b4BXgHpbFkxCieQJwRz7vAr3BFmLrWrUKDtANj36BNP",
  "key5": "2G7aehLW5JS9ppAhHJybBe6ho4KEegoCNLjTG6Z5WsZPL6VRUGSgRScEFZsFRe12p7thK1UMgpyg3fx54zfEFbpD",
  "key6": "WPNSkZLF6rF1mCSqR2GiNpQv7kmCafcfZCm7AixG1RNh5y9sRmnSBFQtmV4mZvAkToSa6fNa9pLGcif8Rg67rP3",
  "key7": "55CDm6bPabpfYNDohuY7xTjxQ8VTKmE1aGzrcxo3F8UQoxCMKnpzYLtwz5CZvkbJLQjHzvuyFVXEntPxmDLusdpr",
  "key8": "4RapRNEeuHBZFto4d9LzKDAtp5ehtKWfCVjVvKUNsAbBSebEkXxjDK3xcGhKHx4d5wELe3ddDqTupZoK3jRsaC66",
  "key9": "5m8VjeSjj7bJYzYf7jEFJfj5vCxT5EPqg7EbEfj8L9jbqVUxUhu9FGCzYcfSZHBzoJAymAEh1c3WqZfXGz5Y5K1a",
  "key10": "4h8kXcpfG38btWi7YwcPhyu44hAvyTaAkZxWHyZgzgzNXshYg1GeVPitwjEMtH34naS8EfWoWQGFQpyun2KnQd9m",
  "key11": "5Ft2ECz7HSvi97iZszE8aKLXhWWAhJWGsQoea9bHoYsSjPQ6TugcasLNQcgG7JZYxCAAp7xh6MLtasfD9BDPxNKD",
  "key12": "2tnu2jimSQY7LBPata3xabUhMxtpemX6GGmvNRVkoNAVr1XdWGkAVhKm9TNCJ1g5je12vy2R928qAY1saPcyDELt",
  "key13": "4AzRoLowthcdjUB2xu1swh7fWqyYvFTJ6o4tuekFDYUDbQ9V5MqbxqV17Dv4SLqdEP8a22uUMmN5HrdmfryqCHrL",
  "key14": "5DMSWbzK4XbYw2gxPm5q1jzvhZqeXDatjJTXAGjLRhMrLZetvBWMchP3U13f3fixvWcrJsc7EGN2CunikD1C4wYC",
  "key15": "2At1hXwZRsu26YsRyjdhc9K2JoT8s5Cg9uKR7BvGZDmUB27hHaBCqycYzxekSpMjmc47xh9C5MQ1MrsMnc8BSzqh",
  "key16": "uH8RZLz2hNQwm8su9rTCcGjZmhVKoBr5nS9Up7yV1owBiiQKZun6aUBMFPfVtpd8ZZmmwzJvESp7iQrd8VP7jah",
  "key17": "2Goz4RcZ82QS9ijBKJUXcc7tHBt1Wwue2sYTqB6dugk7tUzv6BHLiYikrc43jyA9YxrPaKUbugrHBfRA188741F9",
  "key18": "47aMy6RKXbWufHGww4pp5TcTFKw6e5Lp4Xsw6muvskRbLbbQQWro6gLzhv6uhy1cAnzwLxoRXKj1rokVTTggTVgk",
  "key19": "3qS2Sekf9QtRU1KNFQDCXsjbZfi3zyqw23j2tufLGdcpshBMCVKLRdrsZND1LMxroXiHNndSzGQsZWnDSV5xyZ9u",
  "key20": "49Ez5GrGi95FJmsQxCkji8f2vJRRiZ6Zf9WWGXRMyxPQfZr3EobN9sxkR1wEWf2BHC1A6aNc3q8bqX2xSQpKpYvb",
  "key21": "4RXC6PLbcVzhgTiYWYwcDkUVm86ptNKcSaWCbJyD1bp4ViV4ZhG79aWLhWwT3AdmuWScsF9nX4qX4n1vnDX3j4mk",
  "key22": "3xdgXmZbE1TwqbAk2EsYaq5pwYrh6oEZBqJXWzcdqjQ1qH55WZokZBU6yMqky6kckauVZfQyHXrMdvTFi8NQcP1R",
  "key23": "WbZkWqG9wFmVum86JokjLLk3E3LrYzWiQ9GiBVy3usFVPM2wdfcumhSbTpLdRm3gCz8F4EAEciu4DJ2xiCEUgYr",
  "key24": "5488ZFiTxtQaX99LN7gTAhRSBFBDBT5GaybvcpL1YtV6nZNsbHq3fcxUYFYvLdnGVbc3kjaMNKKqL79KNjXenAmk",
  "key25": "2Eo3ooheJCKVCjcnvhNP3cCeRXuf9cKLJsRo744oo47ue9p7aXEYJz5SuTcaNS2YsXfh9hJ3XhJCHRv8CxB5PvtW",
  "key26": "feVqrQ4rYGuq2vM2TaoJW7pWSnn1jGV2tn3eJ3Xk4xtMxb9knp3voBrxSC4n63ZJL5xo6iRzLLHD8Q3qo7NTLuN",
  "key27": "2r1E9h8uHbBovAVC7wwE1dVzDQXhtJpntvyVYjjS2FusL8ba9SvR8uWS3FKYeGdY7BpcYn4JTCF9bBAgFBn6fMRk",
  "key28": "giy9aDzVG2Jh1VkYRQN9D4vY41KpCyoXZRFRmGpnxnrQFyXmoxvLS9MvCWjMiQMcsrWi25c3bxMMF9P7NDrxipq",
  "key29": "2Lsy7WR8ysRav8MCk53pmWjamwfcMy8176u3Lj2TDr81ngLtov2cnSDwJu6qtdHtuVh5pz2Yek6zxVYg7hjCwEuD",
  "key30": "2vg9yA9Jm5u5K9PMc579aK6bpdfd9AYJQJsFRAbKi2gH1iheymWaMfrY82HW2mn2FghKGzognaqaAuoCMw3fwC58",
  "key31": "3U3iFuDuMxgAxfJvgTuM1X5dWuAS1YPG4G2L6mMuRnQx2sHk77jYwzXKqTFEu7XfLrNcPpND6kiFn1utZ2gZj7qq",
  "key32": "5WVkxo4qwxmaaaFLefaseaGXHHpdDFLeLU9XQDewUseSKsjkcSFnogMY7EHP8GDRyFW95xLw19oQKcbEDh8DhjCA",
  "key33": "2VYTkusgJGSTUTUCoNDnwCcrNki3HmT9kwpt4PYoJQrB93TUynNyub4H939qS7oB4V5zEa3fMvHoMrpPCy2t8a7W",
  "key34": "3GYY6DWxviSou4X7VMHVSEvEfN3FgR3tu2JJ2MVaVbTmtbUnofehjfn53kmtvSf7gdprv96aKebkTZg9dYJDh1mR",
  "key35": "4fvHqMPNYYPFYRrsdpPBWXeqiQwvJy4HoqauEjLY4NVRi3ExdgM5uAmWszjr9xr28jqZmSe75PSETZqPLMUXDzg7",
  "key36": "iA8MVDUtHEFN3jC23QZKhFdPK2X7W2mwR2ryw4d6zhZkgo6mHntahv2yGkNtiA78QFRkaCQnca8ZxRYA1c969KQ",
  "key37": "4dVBLTFRGtwCnSheZxrnZqsFzd7W2cqn29H9oizdqtrBHyDobov3xASYQXxTjaWGranr7aZ2LFydT8SvHjEnJyqe",
  "key38": "2fEzSqNnAbuzHVzmwKPVzDKCyWQ5BJHbtg7tJYKMviZEw3FY9mfqCH8yyP2T1TAEfRQ1mgvTrefLHA7vvpoGF9S8",
  "key39": "3tRAqDH8LjFyt37ZVvok7FrhcCjWCVXcvo4pXgVV3bj57jNSnsK6kqjHjsspBp87sArd7cGxLREW1SMiCJqaF3zh",
  "key40": "3G276dgrWzwS4VUNuwc3ZTNoieUkGQssdz96pAK2LiADMPQ23kqxUR3Bt7EddBsxyXVAKDC7VUcXWNHgmiPuJoL",
  "key41": "66AM7V2JHigb32p6zCSBHqoef1VHNNVkppwUFcV9AciFJkWw7Mb3Jse8VfbZz4bM9Phiod8oPVdbLKdaK3feWSjT",
  "key42": "2reuNJTVHi5ZyrfisMjeCSv4hyYn4N25uDSdwGQMVPYsrZvmUGM2mAH6MpNqxHRmB412Yg1YBkWvUK227uxjY4Kr",
  "key43": "5Wx8jHfdPWc6mVtAKYQbbwcqEqvLkHM3xKgZEb6RxCJ7pGzb2ANto4TC5Q6mCZA6XacFQg4BFfyKY26MxuNgKKXE",
  "key44": "3CuLeq1DRL2PjxE9ySHwexi5hHmn2xUEGqLbm7BTkf5optJXKVcWwYXdQXm6NYtvh5Y5zNa5EqkwbeoCieVGmoxn",
  "key45": "2myWuvfXXTiZSEmnR1PAZWSgHC8xGFeZCJ3FH4fzK7rURGC9hxMT41pDxXPhK1UJTiDUfWito9i71JDG6HdTnh9C",
  "key46": "MoNfHtungnYkmp8f6DuERUV37i25N23QQN1Q3YpNbZL3wVdq5de1ncc5d1ZNNgxBwkhWaygadHCXJmduHS4wwVs",
  "key47": "m83Cb1ynTZXQ516oPVyveQqiJBxEeS4qCNK6t3w7cu2bYQY11qqF954jhsUY7TURGy2hPEqyud7YtpszzDptvij",
  "key48": "4g79Ht9anzswmJ2fq8wkovFjUbWLvLwPLUhENGhwZgMSLYXmodRdt3NDMqsVMupVih1RPKbh8ckDktQjSfySzChw"
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
