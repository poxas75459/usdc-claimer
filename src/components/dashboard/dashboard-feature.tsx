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
    "2jdr7raeACPYXEcrW3pK9rXMhN9uQf5VU3eAUpaDfxtvYpNGb5Cp5YvRksdCRyN2njYkPyYpVs8f4HzaebXQrmJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kkAD2KsJWHDYedgq5U5Cu6hXfFf3eJ2z8KgN3JMpdk9V7mxLmLzNYE7gCUgQjXzRMmRMMLPCWTfF64ebQQeUQvh",
  "key1": "3ox1GFAXm8a69tDiqQychqsrWkJrZnD3hKoYXaW1auAozsH11kEneeCDykRVpnrnyemBV2AZg47dGs3gR1DB1hVw",
  "key2": "4s66oJjQVQxh5FCcJMyyuAreTTyHr5FEHsNt48GcCeoA9PfuN21VS7easbMArWb3FS2wvGEd6sdbW6GNb9BbRDmg",
  "key3": "5HtsLFAsWmYeyEfx69YXku52CJGAcdSzHUFSuTUoPDJiWStmjtx4j8rUStHpFygAWa478TGKYQpbKrSvdPehUrYt",
  "key4": "4ymPbkVjMr71jrK7Ke59Zvpw2rpqR3Wy4iQsYSTpCHxePiop6NmBKHXG6vZ84Va5jzaDRCqWP4y2zWJVaYMSG7Xr",
  "key5": "FAFhtt3GB2H4yqWy7E1wGw7Mf2StN14Lq8JcCTsuYs2z8JeTxxNnyPwH9FPxY7rxtBob8hahSe6UZ5mtQ9Uti9N",
  "key6": "4W2zc9F4QNiPic7oYHyJJYD6GhH1thLdDFWaivneep4WAVYigCiZdYEB5gK2DS6yphMRs7cVG4rdeFUCMfGRQUrc",
  "key7": "3Tc51NkkeTVQ8XPv8HWzMuskz8WvgHCT56FuTETr1Yy82fFAWeq16UKYa1N868Z18NujPkm6GHmhse7cCLNTzpWb",
  "key8": "NiS3hQcByhy1MhKYkhdCxsHY4RZ4UHYZNBcWfYhh2WoXeqq1eGFtDQuX4dqEzsyaWMLchnPSdb17oofMQ1Z3CJV",
  "key9": "4zV4ySApiERR1L9tWZt1TbvkpaPChrUS2u5zDvYcniWo3m25uK459cmD2gK3fwK4SL46uie9Xj6STodj3juKHDDE",
  "key10": "3GAvaNGxP9tjNQe9GWWkJstV6PnnHS5HB6ZdUYEJF38YZVKNua6coUr8R5HHyVdRXxnxuU78U5qY9J45ifDXKu4W",
  "key11": "nWxdxQyKQ82zotFWNKrg21kGrLxQEViHpffhRkKebVVdfRmaUBBAopqbLzG52A4ZhFdMYxCB8vZ97nz8oJp2M48",
  "key12": "3Zu5jZr8FocuG3yvzFXncNkuqnQcyGjCGiEpij564FFP1xKbdfJNcCqfKE23ML7kujYxB6zm2ntQMpjhAoakkF3k",
  "key13": "QGxLyjDjJfGdyy3fVy1w5g6KEWTGKmU7h2kQL3gXFYR58ZvdLKTHHPX9cVPEifd9JgaXPuySmCC1WgPh4FzjFYB",
  "key14": "3psKUCLLRs43MTgQEWopiYSFbgpVEVE13YWCeAcGTNTizaJ8bo3qyxoTAwQMLsAag28PTxk8ezS7Pe14XRmyF8tX",
  "key15": "2aTHzf5HtExWJiF4p3fXwqcafyKRbaoLQCAarLW6C4iag5V4wqDH1DtArahnom2mWaFoAsu3SutegQpT9aWuFEgb",
  "key16": "2MwjkbiDge7s5sz6rkDd6JvRSNNvK4dewSYUKbch6s6ABNQyZPmBxkYLddE5n7BXCBqQt5qE4YXmgSnfBiDWbVBK",
  "key17": "4YuvFcvofxKaCuhUP8NSreH3fJj2H6xRuWCrBJSuUJL1Gz2SWL5vRoVcYH6ALG5r17euEg8KnBcrMHwDmaG8qTrD",
  "key18": "2ejuB8UXdEu3TFgKPjpYUo9FouMNKW4ktpvPX2tKP25cQiJdCoYzTGnxFAKS7P4sYJb1vrQ8tjkYaGmLdQqtL1Pc",
  "key19": "3vwXfCHZsRyFMNj4G3KeW1vtP8gnX75v17KzJ26UMYkqSPsQu5LV2fgjrf9JR3kwrK1mpoRHP4iDGYabXweyWBWC",
  "key20": "2KxXZUJ1LvodMtdYtDCTZXM3p2MN9rXvJDUgy8JYtCpbdS3XbzUMdjKbWo7BmSPpY2sFyBDDCyjCpirciKg4Z1WW",
  "key21": "1XEMCjhqCVgBRBrgENR4MMVN21wBFRHuEbiytR4sEdwMSw75VFLZPY8YvKDM9vFNyBtr3GKGP6D5qUYQCTMFznH",
  "key22": "2iwfvfrk2VqcFL9zy4CK6kHBBuJhyQUwnF3ft3HSaDQKodpVK2mYBNVTPe1NRUbkZoj6VktXqWLnHNXcaYoxtQVS",
  "key23": "CVaUDJHVjavcNTK14hPMajppwiuh5Y26ikYtty46FGfXXqRiaEfwS5zmdycugKqWVRB2b4GHAvuS9wxTrEerHVR",
  "key24": "5gvFHjERUFZCQUaZ7WMRKVU4CiXKxFLioVvdf5NFiXMhNCEWZshtEXpZtekNR5hYQzxDgebX2cqygKEiAw9UNaU1",
  "key25": "36itxavSsYwJgD1JwuhGMck19SrgwqGLg68sBfy4vSToRaQZn5bBjXwzS6CdE5gCXkfjbT91jeinfpQWCKtjbtNE",
  "key26": "4gVDTv3mKYjkwon9nbbKNzhy2wFyeiK5io1fWndiRb46zCGEV5iSzWJhFf37ojaKGNZSvdRyiiXZ7s5qM8zp4C2Y",
  "key27": "3qvrDdY3ShhgiVVoXJzS6LJhbBKjhPBJwyD8tZzyvJpPBxmj5aGYys5b2uiTgTLVtLK3frBikexSsMjSFCXgZvcf",
  "key28": "3uFWBoWBBiZBTY6vMdyGN4ooc6WYsMHzwyNEGvvMoj2AMjZtXd7FrgePSnKMDiAuHLt3dNYFDeFueXEF7Afce6rm",
  "key29": "3qfNknT7yRY7NQ3Tv6DpG7tJoBJGcN47DzZ7PXeGNLNzBXz9A8e56zFtsRLtwwS5sYzjYo9NKWvUfC2d4gc7GfrF",
  "key30": "Yhm4aandNK6MFJKnoqarvE4FGJEa5DVD3YbB2eVnJNUJpXKXafHNUhbmTDfRGzSwi16cUqXbM51zZWSfB1hYLic",
  "key31": "EXAyc4pmUAe7fJTLxT8wRLPvy54eJh3aqSbbNWAYqdSaTMFTD8YHmGDRacG9nynLyFM63crZGmJeYwGEapYw8Uc",
  "key32": "48BBdypDfUPMm5PHL4X5XKmct3APab15Mbx6LAVxWJGG14bnSG1DW5q8NuCKgZu4VVQfAPJZ4DhFQLzT5tbwpZkr",
  "key33": "48qf5hZnh9QxwinW6YtDZRUVNuXq5scphvUgpjGPT4auV1m5rFA6NJ3smPEoEH4qjRQHoV8fhbrxNYzEu2gdEXzp",
  "key34": "5tDDR3z4mUbkSwCrZErcBLjxqX1ZFC3ifvr56HhHJQBrefpj2tQDGkWybc3WPXh5zGdPRrKyLq6hCTy2tKNhZzuX",
  "key35": "67AtwL1YwU3UgGrd5p3sv23Fgh9coVTMQzMYL6nTUHffLYUJ6fmmdSu9GXGn7yzshNJ5B88kgQqYPz4XdUcJZF1",
  "key36": "2veB46Xx1nywCDkrUaucotYqYz2qBN4jCzzPZicf1UFeJhyr6C17U1pPPz8Nwda5Dowwf6emTdmVXAUYTMQiSmGa",
  "key37": "rqNhd1NQAumS1SPpWLgsC4g5XyF3L2gY1FsFaCvSThnbwCQQ3Ewnitq6MVYD7JFFapqHvdpcWacHxynuzisEi2B",
  "key38": "3i2gE6HtJRX8gmBCcW3CwpS8HJjQM7WWtnSnAPuF7JnCW2ANMJxkQ2vN7amQM2Hv1jKfsR83TMXPGFpFz6btorvB",
  "key39": "4xq1FMpwvqNQXwToRZvAt6axEfWXC8dP95VuC5xkUbGFNVKAXJWMEAAkLX9rKkyg4eLbgSZSCDwPaujm65Y1hysp",
  "key40": "3aBmBbQaEMskbbGz2PC6KGMqTkFEebNa7KstywN9mS5KqwG5xMubVSHq8xzQk5QQRDahgLPDqhsMXWJv8W4iiQWa",
  "key41": "5rbLbNqspWw5fEt7t4YEcrYFmNrjFYNEjrQnREU6vdPGNqAV2PHkWCetaV7dHyFAzJ7qSFFBfZVtztqErNavhynZ",
  "key42": "jx4c5TjjqssGVt4g7ghzLeD2UXDWg7cAdjyAigVSqdBQbFFUhHCznsipb15UBCMQwRoRZTSW4j18TGiqgNXGoJs",
  "key43": "34aPXyfRHQSoNpvxsFKK96avYPTsfghgHneCGyXXZpKtzqgbBfzk95yHLssPtTXfs6EM5gpWrFHzCR5EEdKdiqjv",
  "key44": "2ZqufFHnjUeoNvM1VxY9xnyJbRVfM4a8HrfdShawqh81NCioDWyGDwwPZqQEkSaZ7zW1QpP9825XXk8jALkmMGC6"
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
