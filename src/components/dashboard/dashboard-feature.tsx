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
    "3mdMLLhR7ur1osWwotiujrMegzdtW43rKgmwWWX1FQswhvgPgZKbz39Qy5Ap4mrZEyntigfgiPN4i28cYWFC5gkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cprodihaMDPXNwLfWtpMBxhhtSmifnJJMGdWTEYkjUCcM8rD58XWM5VdQogy8Rhr9fw28AutpRLuRpPyhkJUaV2",
  "key1": "5BeDHvitMjThQhwQezsXbUqqst1HE4AwbjjsFXzjCYH4G9GoLnyitzXgSyFqJyCGoa7WqTM88ZzskWoHFFnXi7jv",
  "key2": "NAmH4gbLhA1WPmVmiJdhxXZRzmjUbVqRDXriGyzue3wzMHjd565jzsyZpavGJozJy1wj46gkEVqyvwKk8MVwNp6",
  "key3": "4Rpsndy8Tfp8gDJLKUnwLCuDFggJnyaXsD3QxUtF4WUToysNV56z6aZARDURq8cTsrZG1s5zmF73ZFkGuvqMzcsQ",
  "key4": "275U35xGfRhuTtkYrxW4nGjP8A1J4Gg3w71QwjJcYcKQzsZZsBGs2YVEw7MfjimzFVG982ipS2q2xqdsFY5XwrS5",
  "key5": "49SAsdC8y1rtbtSRv9E6H7QC7QQDZcSKsQhU3uck57UuXS8piwCYfsk3hbsf8dMZjB6qUhEa9Bb8opyg4BdjC6ay",
  "key6": "4PFRYnKuQV4T5f4sJkgqRpVNPMQPxbPRiU8QUFCEjP5CYB1E4uLN7TQ6GsZ2ShR9srazhXiJ75hbXHaP2py1SAyR",
  "key7": "3pYE2966eSr3voNJxetQRbhpaF4yKorXwqq9zUpEhhj4znLcQvRCArCYGAKvL48fwJc191jn1RNxahAkeNQ9cBMv",
  "key8": "4YcPmBEa8MqzkhjM4JnWp81X4Xx1APk9dzKdshqTZbmKnXvoTrkRQDBXuFhRCV41v4BwpsDQr7ZUpPt3GfnvovQd",
  "key9": "3H9TzYz1XhdssprvtJWS24p3aCHt65rT21YNWKCtvEcF9e5zcu9d97GCLBmCujMWMfbPnibZLqKnBhEAmu8H1MXq",
  "key10": "53SqiTSVYh99sUVAm5o6ojCwV8vAZLp2EWkAZoeEiuhRqVcFhmjxeqkqFah4mrpnoUZ98B4WLeava4xx4bg8dQJq",
  "key11": "3pYy11L9q16SEAf31hj7sVyboPVqAGfvEvy22t79gheVQCLSpP2X6R6i2RKS6sipmrGnNZewvsww3Jy7GgW51aJQ",
  "key12": "3iHakCi8xaKD2XC3yUTKBmYBWQb9Um3K5AEdG1DqUq4yTFQsnU9wCzaQ3qQ99SSQfzLH67LYpYcu59Di6uWYfn2R",
  "key13": "2pMBdK3X6BTSVovdwUwKYYbTscxQJ65hHix78x2yrgnvSkMf11LrGejubbNdbJVz8BNjwM9vuRTx8wZusTtuKt76",
  "key14": "3G7tmRSHwhU6BURbQnpRu4The2r1Km3xdkmhn5mvvDZFqPib7femovcPir8Wyi7jasbUFMbCx7aqcPUevwTrqTf1",
  "key15": "KF7pDxskU1BDoJMZZ7i3HGCWn4obm28h3Hb2e7jcPjtqwMa7HZoupuAbLZJbjpJFWMi9DxxTByqS92uYknKXqwW",
  "key16": "YqUqY6SwEd9SK7i2QoeMMcWuvDfgF1rCSCC8Fp6TJKritsqM3ZjgefYH99jpNVG4CJ1dzFPgTh6gZ1TBsUS9TPJ",
  "key17": "44FNDXPqb8yzpKsA2T7NMoVZyARyGmpGNp7Q6oYtrqMBokZD6vU1A96RMjN2bGZx64mhg2f7P2jigddbYNPyyHUC",
  "key18": "4qq8v9Bw7X1pQuvvS4d5eEutf8KaebteEE6bKCqiBch4oyzHiwzamJHo99LVEvCWgbg2UYMLB6M5cNuhqfNXxnf1",
  "key19": "5jCkFGG41yZBTNPhcjgnJFpbw5ntAQ5RpoVYGy3qYMDhMb3UHnKUAf32JL5N6qvZYe6GFaikTekKVg9Eo5hBGyJk",
  "key20": "xpiSFp4kjcYg4ejMop92eATHTp1NVgA4W3fRhbfA3zQct99q3aV7BV9KA262ik5hsnajRz5YFd5QdvEAKLyG2Jn",
  "key21": "4rMFhZbo3TD67Uxi1dERxEuW87SGNwAhEvuyfXiczWLTvN8jg5wM7oxyvm4AVYTPN4C5xiVurgvK3zvSipgtD7JJ",
  "key22": "F22xvhb4SFLoAHgGwZ6vnMUizQdEUYifQWSfQXBJFix2dMxAuV3hGEmx4L8hgNkwbYMQQ7RZGvNDxqAMQXTYuJT",
  "key23": "SgexhU5GE7B5C2uvoNecAowLFEoTinhhp977gobAsnzHNhoFk9yMms5TK8eJtKKnSDHjVEtDDs4zzTZi5xhW9P7",
  "key24": "41PBk17oDY4J64dk6uPtyiACmj1a7rK5AJ47mwVxcuTq5zFp46k5HBeAhuP9V1qtoVL6qq7eTr18P9EQFR1Cw1FV",
  "key25": "65ftSK7JWTBg8mHMJ8dkmXZALX5LjMxvtNb89zfcr27n9e6ioL18j8hx5rsYsaEy8UifbLN8U8xMn6V8P4hPnTsC",
  "key26": "CVQSMwJoSJqLfaTtuk8ff3A35Dtp2FBpHHDvXiWZQSeHWw9f6HT4n3rXNNY322vB6gzPhFFEYvNKAxbGk7RcxA3",
  "key27": "3bMKc8DtspJfDbxE8P3xLtGQsUW6ewCiD8nZkMtaPjkFnLdTJA1U2y11gPvsceCjXWMqaQ3cqw6jwEMZkaKnkjoX",
  "key28": "5xLxav4cdLC4iqEjGnQnAnUxBCpyNs7tcVki61Z1PT7v4GwLM5cKKzVG9gy8bxnoBwMRhW2faFVQaDAhtam3Mht7",
  "key29": "2rZjVkLnXUQVnym93ANKC9K6ybvEjkA79xcGmUxXkXYonuWLJEcsTU2pQoUrZVnB85anAbCeTeUVJyrugVtX8PHZ",
  "key30": "4ARYxf244JoNagjrSAabeNNwqWWBHTLuorPMuaLbKZxxBq9MGpsjZvgHLVyrbm5L6SmhV12VyTEkv1TrnNYFmUoG",
  "key31": "2dng1JLf8ei6xRow3tRnw1wHfDR5S7h7Vk5MJ8GzqsXxej23V91PjyFXQRpeU1jwyaAJsANUkCpayxc5en9C5kWU",
  "key32": "5bsVevq6ENUdNrcC8Nhr3LqRgfqCKjYrhzWKYGsNtqb4GjxCHPcqk7isS6YeR6WF6RRz1F14qLJZkvrffAx4CDv",
  "key33": "3SfyHqZGq6UioHKTrzf2i8derJQSv7vihKHaDjD63VwP6W51BbSkRZCqz69g25ViUomj7SAy745ANXjx5ybFTjWs",
  "key34": "5hoTKBKww8mXdcWZ9qA7MM567vLyMKmrRRPCPEbW65bGW6itfa4fiLw3ixdowDkU7tpv8sd4gsX5aAu6dqi8WJDv"
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
