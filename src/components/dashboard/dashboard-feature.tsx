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
    "aauchnmtVLtFovwK1iQD4pMFb8s3B8upvHJqhtLUKaX5MUgrKMnpKSboKkdkVYsfqu8c8GEMxXBLBgBxjEcdGQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rTrPUhE7xLgRi9vZZJpDjbS7vghmXmtzXcZhGQugM74xz93GJgcQpHGNtHo7dqNo8qMBSv2jGcBYnWj24AWGRjf",
  "key1": "57RGY3DcgA38aDEBtQxEA9vCdQZ9ythNEWn7aSSN3YF53o5HcxDyAVxtBGJrtX8Q6XfNhefDVSWiwqqQFxt4fqgC",
  "key2": "wq9BWKWgzmHJQgLhPcYdpmuesm8RZEVRhKBJpUZo3HuvHPJP1n2SzmkzDCxn7wEUttZWWuV7k4Fy6NtuBGmEnRd",
  "key3": "5Cv5mutH7LUcmP4VqnX7oVQmpaWsdoJhDu3dzVpvthqT8wzT9wjYbnBxaNKDZcCXSQmJPGJFEXw9Nxt3GVkWDM7s",
  "key4": "5zboawARUo8RW3SaSXUowefA8tCVunHzpHwukM6PuMr7C3zGSgmX2ZJB9taGnyCHySamPB5bh7QPZhgD3sdoR9Kn",
  "key5": "3BJFDSv2KYfcyNJkx4aqo7VJWmn1ukEwdRdtHRTR4u1iKYF7Pow67duRHisCkR4KxXUrLvuH9399jS3TyPwVheUj",
  "key6": "5Njhxh4jLiQQnE5LKh9AnuuVRY5E9bVLRJ4e6qerVNoifYqNQjRMZxWwoC6YAe2zc7M8o6yHgSjJD4DEJQgQSz72",
  "key7": "436YfS4TaWPr8vwNGcarRUbWp3gfqxxC1pCL2tk5Jk1jxRP4pcKbi2xzGkNvVxXi69TqDQj5L1K1upVVhh6YbFYA",
  "key8": "5bNZpZgkuhMngWRNKifMC68sVdqYnKuEdtbsDzH56tcKPpY89vjYspyEihADGE2Gy4ZUnNUJApxQGyLHoSAnPNBx",
  "key9": "3x7KVgdDee37hWMQ18dPJTW9VDTdKPd9bYg6vgu3PTBT3qsg4zdoBt5ZJhnHiobYjYGS9e4aMK8tz9t9SAHydsXH",
  "key10": "4LkL29XqRz975YK8X5jZH4rrqg6TJkBoMTpZfbiH7GUps8WGm81HYVesbLmKBDHEBTRMuTWmrGsNr1wnkMw8Avm9",
  "key11": "29CQegUdKyxsLCBs2swsBHyNT9PC3mpKCeWBaGFqXdttkBqtbaFbqtSrHmnyyauwouSnxfwjGv5nGgcjdYo8Z4aQ",
  "key12": "5JoDLzN1Hk3sdSVX97xRW7D4VNV6iYtv3qE9QAnT3263HuJcfoZn2PThUJguAMi3pfCRZUV362Xf7YFovfgrwoEB",
  "key13": "3ReXWHeAyfgiRycSt9xDSCAS6XMwjnU4xVV8UWGrSG6PzGT3xTzihD8nzGQqJ3okyG8jFaP3MBZgtegTbXo8TzzN",
  "key14": "5DVFB6amnMbfATeycbkGXePvqGscMhfpn2n2cERDQSQq8gQMYPdxUKWi2MUDmuHB34aJA6Hyz4kUWaxvrhvL7u3U",
  "key15": "pZX2uTGdbWbY1gaBxa9HGDuSCKyDAp2aKpCbTtpVrtQSJqtRSzzG3WE9P5P9yzdQBAkvnKh4R72jZNNLqrq3mR1",
  "key16": "3vb2p87ZV5ZDBu7WZoPikAg25uGJrsZAX6GAVZ7y5cWuzSGcCZta2Xx5kVTnmVcuz1Xh2Pe96vWSKzNybRzbKkyt",
  "key17": "4396hAVwEXr9xQaqafX5TvshEtLYKktDiqeHWz3bApDzVyXonvuL8afxS67KWwLng3TgxqJGvfUw7nGohnQVU2wE",
  "key18": "5PpSJc2bM6fnir87pKxaom9q3vLNAxWian7wdZi3xikqPgsDJ9LJy4NbKtooPjGiLAtH4VKgu5EnzN3B2VUKFSzo",
  "key19": "3duXLtpnFRU32i2LdeHzWNecubzgeWiRJ72nu9gk3spEuCBWVVUvuV6hoX6FzhT3i5zcANsj9J6P8orFfPshsfG1",
  "key20": "5dtriDBGfc5o4t44wjHG2473oYsffHHbvQNho1Uh5r1L9rLXsTmFsuUz1vRD5qXQAYqe6Wu2ZiKTXJGTBG5X85wz",
  "key21": "eXHw2UQ3PPBVQoxN8bwZJwkVEtXJv2yV2QLXCN1mVLRTvYwMbw6kSuQLtNoxUSciNWEG3ybLMHgKuxb865nyPzm",
  "key22": "5rAyaveWmPLd1e8KmYthmZfrqr5TjZ9PcVKkT3Z8kPmaC6n3cLL7rjTjgqv93UGLMNjHcncUQ2H2HcBCfve9X4XD",
  "key23": "5GgJ4qFzRG6ZphkEGbDvVTpb43j8Yo5P6s63Eb14GBcjnXEWyaF5oDoCr7wYaNYzJReizzGRbqppxjhipZLbQtRJ",
  "key24": "5ecv8kmW6zAAMbfqjwWvPaEC2YvFhRXshbFhNcgv47KCUeVEvFUkb2GCqsD4envdwDjW8PwmCUMCfTf8vwY5eqJq",
  "key25": "2LiqZ9PEeiPa2Jb7uVdwR9SQPFf7eqG8B8AtTaH1WoKwH6K3NSwe7xwRUYpm4T2n2gYhpxGdRyM5GW6hKFCqp4x2",
  "key26": "zciYjJfWTHuoaE1nf7eP5YSYG82dFeKGfaTdVnB2UZezyU7Ltf3NjJd5fM39Y1pb2r3X3DemuGts3EjseEkyfEZ",
  "key27": "3RsnBn4gVgjJ4ftUjvJFMbNAX5fZFfJcSu1Xg1tuD3adGATETU1QD79wFA1FBmjZuHRwL6uznvL63NJ47MhnGqMB",
  "key28": "mWd8eqzWG8JzxCZWMJgsQLWdxVrsJrM9xpQUgzd1cUuAPWekWgZAyX1hAnZqMMAWVpta8tcy2T8hryWnuKHqnXB",
  "key29": "2Tx3YYYYxTVRfcT7u5Gm4AGbrXsDEp52u5MyWkYDSP4fBYB2WVUGc24deUZBPnUyGDQweNBaqmwVmp6Gk22oSaD4",
  "key30": "46kmpP6KnB7u9swhHaULNXcb5EjF4J7tzc4SDsqgrVUcwjoGw9pgrv4sH9B7wmzf4P7pN3PAUrQYJAP2TnZAoVE4",
  "key31": "3h8PQKtiPz966DtFzfnU3KjXPjHtpgSPrytNMXuYa6bdnaMvaxmuEp3ou1NY9dVzZFjBHSvbHeQobFvcDWfXixpX",
  "key32": "442CJ4chMHCU9kcSSvJrAYVGkqddb7L9rVk1tBVbG2rfrJapc5p3YWcasWLBRHhoLhUTpki7p3AKNLMfbhBaexJK",
  "key33": "97PsSfbuigMVrNFAESVz6sQY57pBXQpm6rwqbMgZVVQU6bUSu7xpbdxTKDABJXAFoBEeWsGmChp9xZ5FgPcmsV4",
  "key34": "2AEh8xfv79DqMWZDgekbeArmT8M2WsBuHHZjxiuCSMDbHaDNj6FUiJhopBFrsT923EUkNEXyjCmQgaML4XzrhkjN",
  "key35": "4Zbs1StZQXvDDQJBVDvHntLWEv3gmescuokvEGAQESZMGsghXJNoH178n3JiTtEcT1JdXiGp3NawTeQ726bw1M9k"
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
