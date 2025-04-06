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
    "2aUANAwqgj6aTtwgGHXyF7teeY7EPsoP77FDYCNfHuN6f6kKu31vTitDVioSPqmpbJZ8for9kcn1ZJtN2yKjTMAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38HngbAXvHPVb3myjG7KjpL3MBHT6gFiXhfvJxzwJvn7X1qiJQWAGkt93kKRFNSYatCW9mQVnXdKnpL7NpnKNbcX",
  "key1": "4BquZgz5JFZGAS5iz8ypbQeMW45vkwzW6RckuxezekZ17j8936ALqyUK7itHg9vMBM9XrZQwURQN2oubD15LV51G",
  "key2": "2uU5iwFPVo1XmYfHsuyDsQGh2oSuuwEr3mQjV3uA4a8RzB5vC4k8etxebN7dHadFnPk7CdwEe8C2vn3nHZ1Kpj3Q",
  "key3": "5aqYzHmKMbV9UK4N3Aai7Qi44VPCsjyCVcW94cyDoeBcDcuDsGATNZSKrzmgKyLCcWKbNQDgtBXUVNFhsYFLkQm1",
  "key4": "Kki18CvEU7ENdTZxak6JeZDGRGFu8sQGmWKV49xiv7AR3MKssHBfMexVM47c8b7GixVGaWD3QP1yLNwrALa7Q6g",
  "key5": "3jtmbC9kpmDRZFsSahkg5Juec4B4bdVnLV4jT75KQgK5ggnPjM4UhdzEDeh7x9fmkZNc9fKs9T8Nq1tHGPHJW7NU",
  "key6": "42zBrdup7rMLVqLupFjaguLSi4N5wBzT37rpJxHA6oJg539S4NoXR2JhGLnGvLNhxyviVns92yyfkwMjDFd7PPY1",
  "key7": "2Q7SobaMMcV1gWTNLRkVihonpPeywjn7anbiHYV77GdzhfnMt32VVZSoJr8mAkNDw1k3kDQKGNRbidzPV8g5gqpL",
  "key8": "3eYx2VzaD4957CuizQ4gHLJipUFZJixpcoQYXgmBEGd1XQNCcwJz5fDj6Lx83zySvTnZTpguU9DYh1nfo9sujd8Y",
  "key9": "4CjrjJqq44dfxVu93kK1QBirHuBtZ76B8jBFyqe6p1Jxm734dt8XWRTgbviJAs5c9YHpXGBxXFdTZ7R3mUmd8G8G",
  "key10": "5qFhuGs8vDY3HaEFwBwR6rdgzfD1gq91Y16tqghxF92Rdsk8Diz7pc4TfMJa3UbPbL5uBsqLKH4BhpHH12xNvBSv",
  "key11": "EdafwwF3mCKHRw9iivAaxHhFKy7VkV9yAb5dQGqUfDaQnMuUHXESbA8cSY8YgrKd8cKTQRYF1n7dUSZsvKYd3Bw",
  "key12": "4z4XZArNndpFc5kETbgVBM7yBJ8p9keTipBffMAxBfku5nWYCdZRQ4S17wWGuAs5Bc4F1Q9NP5w8Zf5jtNCVw3KK",
  "key13": "vjFc8JfHPVgdCiPn3Ls9CWN5PB3w6tBpX3uAtQs4UDSKwdoYxwV7iWt3cPnh6nTqn5m93qbue4agaU3gnXjPqvE",
  "key14": "2gyrudutiSzy1i8yNxnMZfefEX3FyYWK45SuNkWHhvXG4eoeSejY5N4sU7A7RPMT3WbCe7PwXMjX6GSS9xKFpJUt",
  "key15": "2KNKNvMBQzGkP6P5pdWytqdf1fKWMDmrHAs4QpcHHoHejLLDBp24NZaGVEqygxBXXChk1R6tVQoNzrUWfLmPCqcH",
  "key16": "3cYgKtrrTFupbsGb6quibTJ138WDCjvQ2DG4jngSKSyeAcXZvSBvGsV63cByLZyfLjnJfkFqLWJpxHwwpggDQyYZ",
  "key17": "uKxhk67FW9Ei7fG6BgS7B8pCa6sKBf4etdbJHWsgfEeP4PoL8iqQtYCqFs5EaaRZCU5woLrJtqaANB5v562N8By",
  "key18": "kzvz9AcGz6v5YQL6k8cUm89uGshuXewRgqcJNzMSQoycy3kcmPjKsYW6ZprvFnA9V9FmxKfCwE51V3YxKPBC9GY",
  "key19": "2Tzy7CZ42Pt1qvK513SsS8UxM9bPJhTJawo9Pv4Dh1p24XpppL4JuGXLwkeXfjgA4k4RVtWVh3cag37knZ6Kzfk2",
  "key20": "31hMfo4zKhQgxu1oQ3WrYy9zxmR6r8C8PB7h77nFtvDZpwR2SiNKmpCjHPf9pczzdJjRt2tcQ8W4GAuxYmUifTTD",
  "key21": "2WcFGCairiz1MMxgF65mBnw6QpehDsoE1tyb4T56H3hK6rpTyq1Hh24QaX2WvF7d51qgw9bdBdR9XBYyU4wmgr2x",
  "key22": "rJg4qEZEto2Bc1HBRY2B63CNqEozRaDdk19EM33cb2Mtwe7mbqehL17jUqjBTUYCQQfSxR83YpbUdZfngWg2GJP",
  "key23": "5pj3g7GDSoYMAcYbDwyeUeA5u7tYBib7wMEZqAX7triRqgqLCZRGNKw61E5tqxZhR3ukftGJRA12g7N6uG4umAXU",
  "key24": "2zDjnA9SKPWTypFuQzNcjc5UrpcvTmV8mnp8cAVX6DDPw8R7YeUvNm7CLWtjaKCcHQJBvw5i7jPJN3NuC3EnyNRd",
  "key25": "39TkG2gShEqmgpD4DE63yLFtCxSKfKQYi5M8KB9d2n2QYbfTZG2a13PoRVwQHMork2vBS4VW7Pk9Qj3mtPnMkjKr",
  "key26": "4sat5omL1tw5L82bMF8mB5zoYesRnKwz4dRQY9c3Y1BPtq3JbpeKPSYRAb3DcfQ449Rs72oGaFoCApdixqYkVhRP",
  "key27": "3GciRRwvKMVVF6tfEhPJGrXWKVw8wFVtrAw5mEPvuGt665ctHyyA89yqbyVeFwH2HfkxVwZTkhF8Z3931qoP5za",
  "key28": "2GrtNto3H5dh4jAL427mw3zb14w6rnA9Zu5bU7zpsDm1hdMD8vAW1N1zv9qNcBXqx282iGm6ezy3tKtnQd5waW1S",
  "key29": "2C38c1HPf8hsore6xCrrg5QG3DEZiqsukfjQKs9nqoMvHxYfwkcBsdRsHrTbqFczSWQy3he7fdAuhXUTNpbdAKvG",
  "key30": "5E6jxjuuM2sP9VaQHxEdWcQoWWSxL7WcYFgT4wTFg2kR8EMQUCGUExkQB1nNmJgx3PpECVmXj1iqV3yohjj7i8Nq",
  "key31": "3Df2nESBRN2gR3wNyFqCoT8PxhCgPkv51JQLjy1E3dyNCy5UQHuJ6AQpUMUEXzQVB959Be7KEnHN4yikn9LKfhHW",
  "key32": "3MA4FbgQ9kL954PvvFXJcB8eP7qQnsLDUyaR1opJF8X2sfM7xKuSp96Sz6UAozdhmcCQBzjjUKUDoBfosz9dqQH9"
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
