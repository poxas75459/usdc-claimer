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
    "XupJmnSNRUuMYNLp7x1iBNYhBCV4uKameVMrPvmJ7ycrCXA9E5uh3JdMEYWMwDp7N6MjgButmSkpYdnYoFgMthe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EAEnwFN95zqJjaD3dsVpCPFqssKcyv1mVFYe25edQKLsmeXcrSTGuJKFXR3ewdQn1ciiH83L32XGxwTnuEugjRj",
  "key1": "5VYhcm3cDRTUx7yGLAuztUWm8BXwo8QKDVGcubTjP3kqtUEFLpvPbTysJjKPcvxKTbBKgPCkeFpGw4Xo62ARfBd4",
  "key2": "4XbVhnPNM1sQbz7B45sDWoV84WkY1Cq32Lf2G5Dt9XcXbNNnzTPp2f2Nnbmh3G4NYoFraqfwBt46JMiWkn4VsC7c",
  "key3": "2CU9hcs3UZuKqcCyVQBXp6LsLztUpVAvR8bmuvcdfnu1CGZ9VYcvNSuCRPvXnTnkhRzDeoXFt4s93ZB8uHf6sC3j",
  "key4": "5xkmqA2aBxZTtFjLnNB21VVMtsrVDZcMLgfuorSWJpmMihJm4cVrMwvXm2zoGG4c5UuaHLhGbwgtMjdT3bdXa1wU",
  "key5": "5K7cWT3Z3NG7eu2zNsJp47QtTwxAX9utuh5BdHfchPm6ebVsu8eKk3Y8mMCoYZkZYD1LUaubcMEVBZPx7pwSHy3Q",
  "key6": "2corkR9aTuMK1Wrg72X9ErZqpZ5sQ9YCsJE4EPpeC7qreLDGjEMmTUoYNpMtadfLXy2idgb3YRZwN31SgNmzg9Tk",
  "key7": "2kF4dHY1chdLmbR8DrALKrSqtpWyLjH5KzwrhG9MmjwQH78VhveX8Mr7HYQfmif4sk5VLqK3cEThALPs2Ev4dxwe",
  "key8": "HNpoxFiVqvhiinC9JMKwgyHbn9X4WgKd6KzZt7JRkd5SW1zsXR9fK3GVdUW9EipdweEcfcp1XiLNxMFNmpDAYSN",
  "key9": "NLvmKuPtmMnEwcqr9px3A4Ci7ADf4Njaanj2SorBUduvpeEsoHtkgUPjeFDjK7gnJKUAKYHS2x44kiLeSn92RmN",
  "key10": "24qn7Vs2jb4Yt5pLyjDjek78VNb6W7BQQfTtmSWDvXYi3Tdx1BnBLkwRk44gtc8n4aDYHiqMsucBXFLzPCHqkMm4",
  "key11": "2wbiJFNmokhQKWTLzKzik8Upvu6ub2AMnJ6pJPth8NYe5n6vCskGhYEKtYDrzFFJiSEfPYi6Tv21HAfSwSstLrcZ",
  "key12": "45C8v4HMotvCzy9HVsos6Vw9WeHxHbWvFW7S7XUMQbY27uyMnzVBUdZDLnaDSVAHQnH2SYgjwrtfYtGk1cNUgyYu",
  "key13": "4f5C7toP3LLWeYoZ9NePDYDNMtcXrv4YSW8AnArnSAeFu7aR2zwuQSvEmwVQaRJoEroFo4yUJHgECwgcPnUvnqS",
  "key14": "5asRzXyv5L7ja2XNt1xA61sMyw6yZPX5uw8odUgTwVkwN74J3jaA2yFM4wBPhyvXUQ9436rF2wKio5aekiCNjQun",
  "key15": "2ZWF7vSxUnws6ea5sbDGS9U7L2d4U2WEB5DSsJLaDRcVwYfUHM7F644HVkdBLoipCbdWYBnaQhMmpwNnfiS6SGFe",
  "key16": "4ScHuFrpYHUZbLCReeV4wUZ1HEUdxy2vuxrTGMmy8537pLzHLh3YmCAAVgrivgNzFVcfezrUVf5rEGagasvz7t9U",
  "key17": "22zugTpNwMKzVxbHvLczzNf1s7smdjT81tp6qfbQMErkr6rYekx7zkc4W9RXFdyhxv3sXVHPaUErgnZLwfprgatP",
  "key18": "461HjYgF1Y1PFkJ9skNcuZZNiXau7LMi7apCULWJ9AtH4pc6srPDYV9f6i5pX89BKE78Ninp36fsxBmqcJJWnnmA",
  "key19": "2nKgMW42UhoXEzq6rGBSF54qeVcy38XtZx7m6eJvhbZvedQerdxkoqW46ZE9Zrwq4BJBnKC7AUuNkZbKsBQofHSX",
  "key20": "2tWxFcfEZKe3oJeUwm5yWeKJ3CxoCNEHd5AoQqUFdd9CgedTwhYfRU9Qb8ubCGY38jsRFa6tz9gAD4Moeh9VnZzw",
  "key21": "4gQapFgcKdJHpvtf7ozWAR7WJPDQZcADNwe5tng6o7u9FaBqzw3PwTHt1NyHb9Yv78B329X3UtdVbten8oEjzz2c",
  "key22": "428disxTnshhzCPx47uPGTPERz5yk3T6D16Bn74aNXAYdA8hB8zh58wervA5twuBVFNLLrrGSzDG7ovAUBEp7r4y",
  "key23": "4jJwhuBXYg22Qkn4QVHZisvmD2DLDwFpMyunXeczP6RPme7JkXjQPTv3GbGkweimrbThyQdA75DKa3FJsKkPYQF3",
  "key24": "eF8K2AoBLJyooeV4ThKwuYjm6Qze5S3woQ25Pkz7Ws9jyUHtAMrtFsAH8NpSJGNjPiGRPGdQ1FHS2QHUrQpFB8i",
  "key25": "3pMEUKasT7Deapqor7duBg8AFYPYDUPL6yJxcYa2NkZT18S1nALuQgRv2jd6bV1prKtgNDJUVhwEbNzBYnGGBKfg",
  "key26": "2BXKs3hJdQjF5CD2Lri2twKP3ebuMJYGfnjSL8dsCXu4m6toqWZtV8GgxekpLsEAT1uwqYnT9bFY1QFXQFYyGd25",
  "key27": "4sgKnJiLvWE9vn3fd6qkTjWXnmhU5igDe7PGndbiVPkSUxeKqUWBc7TExpLvf4crKzBNBj3GBrDeqdFYc1MJJxe2",
  "key28": "3y85o5KZvivcdxuo2f7RyQLDNug1m3s1esQr4Qi12qywgNFAN5KHdWmA3zak63dhRogSy5taFdqeDafZ5EGBiwHH",
  "key29": "HrcKbY2YgCJqtQ3AytfRedTYAH6LJRPpWxU2xzHTYapmo1W1wXxCMuUhktdH3gzSmV74eeBftqAhdXGmu4oLBAd",
  "key30": "3X3PKyGvUtNCPoMnSKzC5dobu5r6PxZn5ENEhMyv8K1hkd2EbQcgdv7NGC214KWd2m1bEYuhx1krqdQopgg3UZ3X",
  "key31": "5zbVqs5sb9jLfPd3mpBjTeXJ8gUsNPfLEXE2Mh4RjpYgFuWSiiS3hmEVSbd6zF4TG3fYSD61tfUq2vpsAUFCSSxj",
  "key32": "oZ3ApmALzkgSRguWn6hr9PoQ2vZcgJQk7JBR4D67A92PJDXdAkamFLEAgyP8wEE2XjTAr8Gf1z5MksNhKd4zAVv",
  "key33": "DBQTB3od6cZUXE8kvCtpzEr4LNdVGXprpAbtFRFgF2BTmZ88qpH3hzBup8a2kJeizfU7L9Acn8Z8vsuwEzN8pg5",
  "key34": "3B9CBJwDgZcYfmTgJCXyLeT17shFCHEYemghmKABpKB5ohD85SzBqdoNMXZv3TPJpJsbwjwNmKtW2HsHqr9de9nj",
  "key35": "5cAFyErZf3f1eALS386pN2G8wz1mB54XFMKeAyNLYQPPvoPpF4uszkC33w8BUn5JpRaNFUQzYgqSyvVyDf8pZVbz",
  "key36": "5633RevG2trMN3SW48ZNzj7d5szczYVwDquEoqvfMJYPbU8w88qXuwQgfratpWHG83qKEjtWpXwMt9bNEVVEVh5W",
  "key37": "5FDRnNNTVDm2LkvccmvVwDNtBWWdMtmVDqEV4vEavZ1e4oZqcH9ou6ry4yuap2jpvnESvPULtb7nMNkiv8mzonM2",
  "key38": "5ZVtZGHtQiPZ4WuWNrvYFexGQ6defHcq2pr56Tta17QNEqsUVHi78o66CoWHrAsi5hYE3MJCdWvrUSeaVVoLQUia",
  "key39": "4FiodpQn22WGg3UuvmHNqbGM6ADFHvg7mPJAysuvdQHouU3JgtGBTDvfBPz7htrKmGB2gZGUGBV8VUB734rrrrEG"
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
