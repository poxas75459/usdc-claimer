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
    "3Qc6VJ8rzzeGJjJ5UiMhq25TtchDmNDuRrS7MyDcfkvTDLD2byKPEzwfe7qEFonELAYe8Wx3C5cJHUXj6zExsUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKzePMXksmrTtL5w3igezzm87smiCgEUuGC8kevN1ZDwgPvrHLybNADsGsgU4mHi75J5NcXfYZGCBqnhTgF7ymJ",
  "key1": "3F41EvVCUgxGE4u3ZzACwdFzpjDmHoft5wYti4oTaPqDacxbX6wSLJKCwxVoDCm9vfT5sDXRfGFkA5QcBMr6PveH",
  "key2": "2iA6Tzsa6LcorQxieQk5g9wwH75MotAsfiEJMxH9eFRC8C15mFMkSEpD8zJxAfiQCu3GnCCtuCnZLwztTT9sQdSs",
  "key3": "2iuaE4vLaK1L4RBBKEurUyKEgXtRST8g6fTLqBTJMRN4G8zR2rfqrNf6yDToQHvoExZktGXnFr1Ta1aCJKjY9CT2",
  "key4": "NoENKpGBTjuTmgQGckwppP3DvH5JdFV4AUSRKvcrTfXnwg24zBDfmaveudJktYVzNudp69P9suFCqTmnZ8q59Pf",
  "key5": "d6C5V2T1JxismrEX14ny9GTuwMGKGheeP49FPm4WvsKsHpmBjCjjx4z1vTc8cLTUSJhjtk5FmvQnTN8Gnpx2eF4",
  "key6": "36rZAJFCd16ButKrSfV9MasnWdiEepzFhvWJHE4aZ77s9BDHSn1vQT8A8gNQLrr4DbmLkqucqvNR6kVZtTCB5bwc",
  "key7": "5pdsE1HHnqqfGc2b1P1JfQpkfHdWTiDvUsBckzkLCNdPm31qzpLuxVL6z9JsatFTz6ih5aA2AZNP8LThRSyLdAMS",
  "key8": "3Tg3zKntYSkCphhfx7eERWdCzbE7dAGTgcLWBuW7MPHcS7tFjjvTCdEoWzC4LfniAZBExtXY3M3yXpJWFgAkzBwK",
  "key9": "1USHBzwAnACyyLYVhs1duaQz28VzuvpBYeCk23vtgd4wMNc3Vf8eJjhH5cvFoRGV3sUWkKHu9Q3yQP8ddwrsZP7",
  "key10": "28hB6kK3XseeYRUL6GW7dhoCaE8MKzqGuWDNfWmvNaEJxy2t1JfFcyA6bPbXZ3NsDHpbU6ufEaYEveRECYaA6unM",
  "key11": "3vT5uhimfyqfVeK282S8zP5CGzEVWCbwS2Dib272ZXUsJaikrL38GMMwaMZ8UbYDwtqX7jaHsVc1zN4iV3ZbZ3Yn",
  "key12": "3jjLsqTdcZeYiBfC8rAqXtyBwxm1y85jWHSDQU6Zj6dme5S92wJfGEgScgFx9jYWty4PJ1Rtdy1xzAiDvXLGfDL6",
  "key13": "3r5h4vfYj2RoVerDakr3GF4mFXCCupNzUgZWJ5w6GA2QAa3nVN4zwU7amnkUcMW9GLrMCPFr2dh8pQbsbjZAVi9J",
  "key14": "4RF3SQPQUsLbid9kXPUffV12UZsnEEk6FdFsQLcyPWYqdYtDk3QdKCBWbbMEdrcm9dqpkKiKHvwm1868UXsG4gZH",
  "key15": "Qeva1aQRgtdYyAM3E1ijs3pFnqnDg2v1EBCBEau8uPCkqS72F8YzDLF1PB3tGh6PLDnq7n1hUxMSNB6S74doEMb",
  "key16": "5TK9XnX11w6UwgWzDUuPXLkFqF3kVz4y8WArQjGjcDBJW45wbs5YnKBH1BCyNSZdcfQnHQ3kkukJiyu8CARyF5Hd",
  "key17": "3XpFkMCzYevTDp9PSYzCb8R5SggmM9VbpiwrQXmDaG9AFotE3xFaKh3FfDYji5oDpdF8KiXyQBaibejSXo4ARMPk",
  "key18": "5YpQWzzJyh85pvCTU3Czabe9QZJnc3e7FjKGxWtLHxju5swN1jhnhreNtBrhhEUdC1cgefvB3H1mvgHPaLEY8cSq",
  "key19": "3thz7mKgLvT7X7fCatAYzwEwLUBR3aSW4fJHgck9jWs6cve5nXjKE4fNy9toYQPqouj8pEfz8tbdM26v83tTFitP",
  "key20": "4Dd2hg6LZuhZpbRdWnRRKTYPNq2RW9iKYnbc643C1YHHuknsyvoAW35GSAPwKmo2z3AH4AbkQvavN1maMsizC6cT",
  "key21": "2pMKTnfjoTCrcdWHd25nuDx6Ne65kvJ2BNvxdJPJYPKL8S18h88k8yBSGYrgj8EBgEctoeuFbbAr9ywPmnVA4e1H",
  "key22": "4zArjMabjADSgeNPZSZY2YxkVMxopSemG7z995mwUrkChRYyveLTW2ZhScC9ZV3FQ6z1hEKmwK8jsPX2vbP2dPkM",
  "key23": "hc35K2rsDjoi4fMZWmKSfMb9kM3yALibi2UE9oCrgUx8Fmpf4zQ4Ab7ZBGeNrD14djxvQJaT6ay3Nr9FZbjoiNU",
  "key24": "4PTnCenZTRC4yCToUW1X8jujxtDFdpN9vUEPsBQZpfrNfKE6sB9tpgpDPPBt6Yehuur4mYc8vP9B7S8BHGqLX19a",
  "key25": "55GGxhmriHWg4PJ6zXdGDk6UPhQKdEVQUnzzE4uuQsoosJc11z18JNYtRyRZ3tPC6UQrGDVHPFaMKeEZr1MyFWB2",
  "key26": "62eRkcH2x4Qjdw3XLk2Y3p2b2h6kMZZTwzkx8wPSwsbfPEbrxBcQu7JNiN26DRtwAYEvKBmH6EcyVaUN6875ZKFu",
  "key27": "UgyCivao3Y5wbkEaGMBYs9kcJHwDqiKQLjsWS1G4m4eUvVx7S4aZimLnPN9dmWurCjjGSuyYhm6mdTqNW8pMChu",
  "key28": "5ecsPjWHo8oANbjvMxPwRqJbFr5afL4ftfZ3bvJjT6G3PGvmbM4PL5CwwjVsi7s83x49qRmoGyrk4e2foGvakTCF",
  "key29": "4FZPAsZVUbgP8DSEvZvFf3DWyLewS3T3pPavX6AjnqaXbvQfDBr7DchHjUohBmtS9BkJNkNKAgefJxiUq5kP6Rhj",
  "key30": "4iFa5BHiQnuXnA2KNyAcaDFSEY23H6sxKDq4nm3fmRbyfTBnuzNJbqgYc5ekHw4FERaMR6mC62KCKTvSF1kyVu3c",
  "key31": "3X1P27fFSDaduAFJTmJVW9QhnLGjtzZzXVCjMP474kWCsrJDJcs5NubGN5si1YVASnbZeJgXPey12WqE6872S92j",
  "key32": "8mxnabekVhzo61HVBGKpxWwQzRjoPYkR6ohvxLJt6SgiTuj7Bhu5SkU1GTxCu6R1cHm81JLDcitaC4TA59Vz4bG",
  "key33": "3WfuNt1HxhH49euMjmZi1fRnXHjjfamZMVKGqwbnXAWbccfb9jueiG2UfUmdEHPdh5zYQeoS57UUn7yR3LgBK4WH",
  "key34": "atwxor2bkZxHMyqjqSWB7CfbbEcHfLgBB2CyGmRMy5oWvTfaiN58wegXU9MneLiTj4SPPf7j65WyY6YvnTNvHDK",
  "key35": "5Y8tuFxePp496vWXZRk5ySxCuUYmwcUJPyF9XVVK28wxEtggbkkCk8VPJffkbeSqtzHusvVPYaRPJXgS3bF9g71m",
  "key36": "4yJNvZ1KQQ6YKKLF3DdSzSnEYzo3GuE17oa6rGLcE9w5yueiuqS2EcNFk72KJ7yn5qKStNzYyAKmh6FhXEZiG62n",
  "key37": "cd9VcHQNTM6Z6xHL3qMDRuuaqY45UTiRd4NgY3RNvBpR27MQ8r1ebBmzNDLxRbYmVYpArFPwJ2dEBm44FaaZWHp",
  "key38": "2XySh2w9jYkMQSrvARvfm4sMrzwQ52AB7qSXyCrK2b1pPauk6Lfw19wsJy3KGVWGKWqqh7ZMcfj5QTup7dh6DWL8",
  "key39": "5yaAFf2e5eUFgvZbeLziKep26BiTB74xVyAGCp8uvrce7N1kwVKTEDgEyiCiXv9SjoD94HSPLSbiKS7Jb15QFKZm",
  "key40": "3uWhmSofnx8PciF8tpd4urZgDZHGFzYGZeWDxeVvWy2wP3m8XfQsYPPDLNgo3a723nxXG8v9zt9PGF6XRZcRA18i",
  "key41": "3GPvS5MN52kZu2h3a1PFy9jMv6DXU5JBM6EeYQ7B8m69C9jRe6wEukCHENVRHq2WVxrfsUCiiutuZcZHo5bJSbZc",
  "key42": "5iiX963ZtdjiCkQgrTMwCUtPPuz29h5zd5U9CyZgPEbz5pMAJBKuXz1imqPPWapXHTGKJpAb9ZZgEFb5WyGsWzy1",
  "key43": "22cYVL9rKXuAGFmbUz7coZ8wELQCTAGAFCTA6T2tFyVb2ZYLh24rsVyEQLi27RagPhcvE3Y9QuEZi6WiHhE4rUeL"
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
