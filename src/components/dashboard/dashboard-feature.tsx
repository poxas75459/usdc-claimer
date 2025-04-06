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
    "3MNZdsaiJMrPqrsG9LZuwb64uzLeRhqURPYmvxoB7eiXCczMAKbUz6Sm8VAKJfbLSdxtRt42FrPVAz3m2WTxj15u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QbbL8UXxXGiusx2Niurx1BVquTfRFo8DCTmTbzG9CqNmLdJDJpQf5TpP6s6w9t6RZUDCzEYja57QWdBDTdJdcP",
  "key1": "4znpcFYbjmVVQw3wifGR7cnPT4qUgzs3Rpk8FU1iVaNx4CSgEr8YUhMiZ8DsgXDweLZKSj4UfXvmDZ4fuSrr2gCs",
  "key2": "4eWygzS9Qr4AP8LbaaTXRmsGyaKiM7pjL2Ap7pEM1wjL6HMn8sCxcvTnkC2jhnWduRWX6HQA2rZYpdmh1BTXUs4e",
  "key3": "VGfyhsr2AxuVWFQPLXCFjRbq9mWKaLqsYEHKHNy3eeGHhBYR3wfqrXwScs1VvwSvSn4GEMQiodXssBeYDACwCfw",
  "key4": "3pVmW4ti5PJJMSLDjznLDovuxafr7F6giha7ZbkyEe84Zciy3njDNcDpdV5Tq25WaXcC2J3h5utKRjoihVQANLhv",
  "key5": "3Qw9WhZSDseEFnzbDY1KwffhF6FpUZuMRpCVacF6Vjcn4yuzffCNaeLhyr8YJH3hr1HyHRrPiVYyBPLrT6acn7rS",
  "key6": "5qXzRWYNjc7mWAAPAcUqm9VrFy9DHZ5r4qg1hufgpsB7M27cSkKviRgiX3oCeK5ThQSxiLhWsK7Qhj5RgnD7eP82",
  "key7": "5b6ByHY3By2i6MHxtYxbBNjgH1E4mKWRaEVkWj6zGPpsyQv6FBanbABVGv4bXUDEzBSZFhfAmP4BxfYPoruVc4c9",
  "key8": "3TRYBNyRxg2hQcYAUSs8FR89cGzQqTHJiZbSyN9peoYuAAkp8BN8tMzkpxxc5tA5r3dARntwCejuZsZijVAX9VJB",
  "key9": "rvuWe3CzgjPGRAFJUxHf2D8vjipDkjg2cSFfsveiR41YS2CYJ55ZVQoEvgmDu6e8X34qM7TJ7SfyYhiJXcCQw6H",
  "key10": "4a3yXrNKxVdvPvVcmbfobPb1PAPCaaLKjm2UqQmg8NNVcMZpe1Fyss3DYppqcCerS16qGTLoj99fKoAM5chDoJ79",
  "key11": "3TKcftVjvHw32WQUVe4nLhPWkwq9T3oYdC2RXrSPuq9wojS2THhmzTU9g4ziRhApPYMenBP1RjKYMSxNnvFQqQh6",
  "key12": "5LCTMetD1wxjADzeyoefRDzLuCiZaZ4yTbuHH2PXxUkn6J8BLBxXSorpKFu38ZmcjrQt5jgqQu5BEGJm78g9QtcG",
  "key13": "At2gMcrKvPi985rp6PocaoBj4jtigjLh7kAXJCVyQBaLasESccGw2d7KBcZbW1FE1P1jcNHu424Z1trHXRTk8Xp",
  "key14": "8UfJKZVdx1c6Cf6oB6TWyre9BVeqkrfhe6PJGQZ9FpMwygTUSot2hd9S4tvjiCrJbqZeTS8dY7TVr3hY6ftXZVc",
  "key15": "4jeXQDDFnnzJdcwumRU2z2uho6LHqWkcKb7NeX6kqyDWrMf4YX76xrGbRjAg1PsLaYJKiQr345pvHFZtR4JpDj3H",
  "key16": "4TFvwi7UG1eNUN9twoYY8AabtnaV5p8QJuNourNkvJBPT55eeW7SrCgEv711Bp4uTSYtWhTirsv8P7NAxZoPTqaZ",
  "key17": "4GnZEujzSa8ZKDb4XU6GShmx336cAXN4uQYM5vkeG5pDfuF3D792DCinBR2uj3HpiXq7M5daPcgxyjyZ3rV8ZWN1",
  "key18": "36t74mDGb7pAuZs3Z5DMyyGqjJAiSg9yCP8TqMRJDdJLM8qWF18rtK4aMTsUwXHH6uof2MLqorsKN6ShnxFrTQoj",
  "key19": "4xUh5gU7MVCvhhWrM9b8RcqhB9qHd7so4XrQUJNyB5QanZ8jCKia9AhA7ZtAVG6Zkd74PJcz4Eehe7WnfuRWbQFD",
  "key20": "pjp9NMaPXBuwtN18hcF9eRQGf2jkZTnWnQ92s9WxGQHKYUUMJ2ze5WWecKiMuCnkEqMRsnMkfWCgFiEY1Qe9sTy",
  "key21": "5kh8x3suuyJtchf6CMcVA3PQ6fhk8JSKBxQBETs4JBKJFgf1eb6YjmJtDD3uoDNneXwPMg5obxAuH6eyq2HThebk",
  "key22": "3Gh9MXXCuZ1eUWDQ79hP1Fy3F4mRJF8ZSQewsrwVMAGVZNw1FPrT9D81M68rZ9bo59X8jjivwUMWRWupuPMcmBdt",
  "key23": "3Ewv6uwbhzCurjHt76MFkKeVgi4yXUPFu8BaaVz6uazKrzzoGSpXwzpgJ9oSNkHHvRsYHjs7nhHPYmiFxJ97mzvQ",
  "key24": "5AbWVLrfK3fhN97G3EkpUeMbCRzvz2EjwXknarfDgq74PssAryVEbKFMXJ2y76oHswKq1z324krWVVWTDuHvddYz",
  "key25": "TPNZN7oxyvzbmf8RHv8HmthytkJYFWatdL6fBb1firZHrNVESepcoUNzSFHTK3W42JzhjLiKwwLZMKn5xdDgqwM",
  "key26": "64X2NgmtunyhvGpFqDrVphQDmnaxXqHCQvJJsuMUf9jWpouPyPBon1sgJsJZasu5GNH5VpdxDF2wK1V7pmknuwi2",
  "key27": "3Rm5VTWXrCffb3ydPSgKzQoHM1f3YSNFcnLy6sYFoEykq4qS3YyecR4yXyvUoGkhPnFTMf68zMsuVr9NKUmcHeSK",
  "key28": "3hn465sR6wQFKv4zquEmA8TLkyh2qJS5oF8X6GCkvc7XG4d6LgAiq8oTz8Lm8aUtUV3Q4R13giUmHGkU9veYkH5z",
  "key29": "4qRFbygFJ3cDfpXzHrF4qzLaS6L19cqxzRUAwXLFLLXua6waif8ABWizb398AJnXbqEXkbcvjkopSr6WJviXbsNQ",
  "key30": "4ouGVBMSFpbVZzATGe9xGFXo6LwRoHRgfDg9A1GtdkvEeCrxvhhsGfjxGLt7zfwDQ7dNgMnmdxadZASsByMu4oUx",
  "key31": "43aoQFDD1LpEfmmeS6z4ADcG7Lzza3qNSJNcRNWRk9PoCR9rnzEi8LsaAdQ24BPKsEjwvHBrdNsYaBWdtL1Df6gH",
  "key32": "fHbEVdst7fS69JTzR38V6tC2oz9LUYHFmyEJT6WiHoKkmj42VfhTM6PbaEYXd9YHa1jZEWLJh2pot6ikptAyaRd",
  "key33": "dosifbW7zTpdSRaSSLuxkVfP8CpwdBAK4nNju2kXx34173J18SvhJBZEdLPcP72K5LiqgQd6LZmnzdXUDEUmNX6",
  "key34": "EPLNgrWdgsH3H2Sf9MP284pF7B6HkfdZ3NpwnXwk2TZ7WpB482thddZnLBt25z435KgdDqLpbuxzKzHaCcUoaiQ",
  "key35": "2Xt2sSAfhJ8L1R7uXLSGsB6XnWBnqVyzQYeUkt2sd3vVX2QJEdrrDKtXfbPoMhKddtoH7PPcAzkjAffBb8WW6XJ9",
  "key36": "5erGYi9UcbecMqcEn1puf2teVDRZhcvcogn7SHAwCgzbttfynbwNWBiwVFiqRcsutDmMGF27Ue9g6eD65Nh6XPUy",
  "key37": "2X78jAYHstJjafdCqcQd7pDaksvrUpVyccTYUsSxYkPU6yopb4NJG7xMvn313ZZyxeeM76uKmTr8ycR3ezjP3oRW",
  "key38": "zDZj2QVi91wE4Cvi578TdFpatorLwG4sfh1vMmvcAHDD6KYENhkgD6dNMVvXhfmTcA57AQkgFMSecSuJbLggUCt",
  "key39": "2MqGeLGXtBHfzt4JeYQVXBqRWayFuHE7JXovctgSTD11z3jjanrhVTzSyHzrr5XAmuPPM4bdkDm3wC9uotqeVKWQ",
  "key40": "3NzDa36tku9qZnxuX3AysKU8wWVgJEURzx9mQhb7PScdH8LuebnLrYxWkKB1gFe4YQASM9i1YYeRLyTe2ZG1jaKW",
  "key41": "4M1SJL6UjswMVF7RzSFPQch2Nu8w4cjP6w9enwTSmtbEgoSC9ortMDB9uDZpCvD3uXmK1wXRTF1tmmez7tcFxZYz"
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
