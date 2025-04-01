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
    "2k47rL54VzSTqi5yAn3ieb4kGDHkQCmMBWgBuYXQV7GXSZQW23DZV2Bfd6c3syWUmeMHfmv4uMs4DVjCP2dUAxSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tAB2xKyeGZnQLMBsSTqLTKGZvqhPkpmdxsJ1ux7qu3xeDmYjTW7ySxAbrSqHht5mcwnNzxuS7XS6c3zfC9SbCTu",
  "key1": "36J4b1Wer1wMGwDy8YVzqucJNxMxxXGh9XDrV6hqruQwePkFXtvQ7AypRrXX8C2WksJYwjzA4x534YyNgBCmwA3t",
  "key2": "4tPApfHjqCqzUGPdBYu5eJkq2TBsMDEu7rbEA7ciUqSW6EPTUZFqFYD9FQuH1eCpgBVLubttjBtqNDXnER9DqDy7",
  "key3": "578FazupqWDKdSMkp7KEumPHe2QxJSVsiBEE6wVveATbyeETh8iAcMBZZZvrcxYZe5g3K97Q74zWs3db7cfE6zHa",
  "key4": "5hVHUrB5fBKRbnUZMFRkduu3q7pNPAgh69cirnGwjQeChshEgZKXTVR4v2dmzTp8ZwzhnFX8L2C34ewu61a4fj5t",
  "key5": "SAKve4UFHj9FGaXUbXy7DdCsPpPezuHuNNuuW7YkmsLcLGWFqmLYaj5G3LVcAFmPHxshzgcZMJ3NSM8djah9Ugs",
  "key6": "2e7H2kEQfKM1feSN6qLzB7mCQRJuYeipjPJAB2C88cQtuKveX8rYDmJsfTBTiaLysBEjcqVwFLWNaYHFUuEVchez",
  "key7": "3L2ZUgF9D943zLwqQzJMFDoDYo4DurAA9umKsEKiCx882cXKNZsmYDW7PL2v8QNmKNXVvr54FhA2WvsXVnJTphpc",
  "key8": "aN3CbRyfLjXR7SNPwEaVmFXkMZYW6rLneSZp9db9Ln4ELNEJrswjfXRb57Df4CuAwuVdcHLpS2kWZWgBpAdoqoc",
  "key9": "8CoEabWyaFitTRnCQAoDDQrgRWXFCUuZm3FMy2ZaKGu6SemS3sEndxwK1J8J3fSjeW1LzJefCc5RYyqAZYE56u3",
  "key10": "438Hd6zYjfbU4MVNaxnvXwKqyE2k2YkRFt4Qsgtw4AXKwao5nXXTwnsRZG8b3mbTpSpucY7BWWm47s5zxQ5R71fB",
  "key11": "4bu1QhCaZQVEFDVWDXusdrbHdKdXh2JVFza66QLAkRyTjkSMRxHirZrw7vEs155fsDjURMCcPNWTf6mtViCMn1xe",
  "key12": "NgHDHmVa2ucJJNcAUfDqTC8acJ4ne4V8K6CrkRvoR8dB4VP9wmeyJC9M1Y4neeJVFNpwZaa8XYitH4aF83JAW38",
  "key13": "5imfbmRvFHLvdBwu5m3Y16yLy9bkfGaDDUXzVXyG2ZTyPBuoWjfbkCRekDk9iAjiwqUpZZg5WckHDBbpU9iKCPys",
  "key14": "2nsDgmdxg4A6ZstjbohNUAc51Dc6Bj1nx7jFJmx1BTPFqD9Zd8Fnh2XWVtCmWwXScmLtYmXh61sNNAoBnndhydq8",
  "key15": "2k4HwuF4pJHgeBwuP7fVcFfajThP3wBmWt9vpCHWyJJeRReEf2i1nWtS2H7vdCoXpmpvFuZnchockYgMu7tur594",
  "key16": "23rrwnD9uKrNnyPKsX4kYAxDphNmS6FgMo2XfNHyQVCu5NXCBa6meqb9ErNKUTJJoiWwv6xneh29Df32njEazABx",
  "key17": "56V6HkLm5G3uwbAnpaZfE7fSbqMm2wjFaw1VB6NG8UhnYSzueZweWKPawHWhujcAUomE2JX57HTzb6BA24BA9pJk",
  "key18": "3yXJF382rvf966Z1sFV8XMF1ntLc6WfQh6WEuhv3oR4RGAHff75WNtupPjJjMRedVPiEKU2ADv3FVxKYGbSinJXh",
  "key19": "2Hb6wCUzcPdumb32LHkDTGBXPBtpofXhJiqvX4MYE1fBF3N6SvVc4Ur3n6bYnu9BYNKd2Fp9k3AsJCK4CB1Jncza",
  "key20": "5ExBzMFw1H6Up77iF8Q6L9htzbuXyXVKFpXsyLkxVwV9K8haagHmyiVH7ifowaBZHsFtDNc9BJhfd4pkX1MDLyTw",
  "key21": "59LaTcK2D5VZYUuvVgxMW9YkSAyPkNa16QGnVxsmp4NZfwQTe1zmSLFcFKow1GUYpbAmAmUcvkFtcxi8T25h3K6d",
  "key22": "44VwkGPTH5DJx2d1mTS9gERJFC4GrvqEWumQixE3ZHjrRKCLuP8Jt6cZ6JEpgnRJuSaFjKBLARo3Cvpedw54EMdC",
  "key23": "qn7viNh9x9Hy96rdDPRVg1hjfZ2B7rrtu9p5cXMzutmHkx2jrWif2zNs7QhwPqFtAioV3wHLGPNbcxycxxMg3ap",
  "key24": "3AHWCjHcM2SK1PeeFS7ebkyWcUwgP1p3qxL2Jyeo9UJQUL2QY1h1uBarsPtjpMdP5TFgXEjdRqjNm8vh4J32suKT",
  "key25": "8D2Tg3Pu1FR63Z36taPg6tTM93yvrUhc6dDFaoL9ZFYCMtyiCuqdVsS9oC2DDXKEroMHbUbsTcbpwBukJX4tN2W",
  "key26": "4Z9bVyMhYes7DfBpc1P6hp562jNCCG8tZcbz8RbGVeo24Ac3szNEWhUC9gL7NuVcmK6T7rbiRwr98hHPzUVpUvRc",
  "key27": "4iSVvf3hRkg1uHGvRdMcVQyhmXW7jwjmNUBenuzCz1BvRPnYJ6AQH4i2Nki3Wii7vgHajCzxC4yUSWHDCLXEhQKc",
  "key28": "38w6mzzTewF2TkvSVBko9GwYqegvk8QFqbyWfQY7wp5wagfPRAxGG6cuZ4oLuFx7dtEUDFMdPvHfuphbWWuUEKqA",
  "key29": "365XSv28B2vg3ZZ2DttJmvk3XgkN7aib4s51aBVrN63sCzM55JX1LH6bUzD9UjQbo4f2iW4LHfpxpjCvgrGxgZE4",
  "key30": "zKC4SKJEra38CUMTfv7cveUxwR5NWkiU5QC2UrfByycqmHMaMbmVQzgeKUSQdFNykqFgwN2WGTStfsBX4R69G4Y",
  "key31": "3Z397oKR6QBvbSCKNUPFqCzGxiBYaTmQDBg1kapdZAzQQ7iYTuHtqjw5E7JNbWnouV3uaDDezKLUmjM8PfDuCXrP",
  "key32": "2sUTvhkDMoXvJoPxPEvxMSrmpb18dnJ12jgrC7xMDFXBnwvoxX1Py8VWa8Xwaaz51oFGWZcxGnVKDHxJAvumQyyE",
  "key33": "487k2AeRhLFNpjgJv65mn8RXYzCSxawEUptqhuq2Ff1br5KwQU1bsD1dnwpL4T7NKb3FgdpVsQFdv3f61Hff3z13"
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
