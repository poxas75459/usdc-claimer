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
    "5T3mSjHkhNwJVUF2AHv8CQqoSVx6nBoBhUDfGQgHPBk81f85FHcxfrF92GJgTHFExfJUL7e3uhwLi1Voj5cdK6D2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e4v4ZTLt5DtyNDGLVDwv4vF37ZhvAWaVnJkEcXTCgd9V1LkJBqPUFJfAXdKtZTLtdZt6VpuDGQKak9e3H8wmmqV",
  "key1": "3Gyhzpto79VQxoKuBXFiVmDHKnP4UF2iTaRJ66aNGzwei9Kxt2TyMBaKXspfZidWdgcWhfHqrm3mAtKdLyTvbLfN",
  "key2": "2gMdxjXRAmyfDc9iMV1MzbUi4k4nZBBESKKvoYSJjkGo7q2FHCo3h17KJoCZhNwqbqQnYXv68NUjw3DUjQwXtuR4",
  "key3": "zt6zX45zUDBmxQLte8ABQfzEqSTcS6NPVF8hj4MjBXKY4JNrDstfYN4qbJpiuJet8F8q7cwnhUa7VsZSdouBCk6",
  "key4": "2myAX8VxnqLTwrrxbrcVKZDyPFmVpTcvvYqCkeCAy6Mj4iu83SprPbyLokmhFs1cqj2kKzw26ihu4W4fvQj5xmNn",
  "key5": "4GiKmsxdBT8Skx9KxaT4A15ejoRL9xDSeTcPM6gj6zwangPAYXYuPyVzU2CGne3mzBSewszanWZJHr8ZVurvrniP",
  "key6": "3K1EJ91vmtd67KGSJ2ronaAvpoHtetMFvBD7HEwRzwm3nfrzA8UH1Kd3n1hK1jXXzRUn2jecT4z3pnLof2DNykQ3",
  "key7": "8NXRbf96i3J31F4LEANiMrxJPEb6GbFMXSxxMbfi7SYHH3jLcDMP6eErXJQMPMfrQfdD8g4tduPWfA39z7GVZyD",
  "key8": "DQTK4mkPjbpPQ6egUhzuzhe1F4cWrb3E9z7vZmQMQ8v2attoMbSKu1nHc6gPgDmpXJGLHRrqc9KPXU3QJRFY3Hd",
  "key9": "62uHRFs4s8FiGMAD6jgoJcpEy4AEXiqBcssx8YMhycxfgRQL2oXwKg2RWegdvqCe2piZPqDkZA5ffLyWCKMEReRN",
  "key10": "3rRZDKTiNFRQCi8gQ47iwD7BoEpYqXnvy1pWeRD2gBmo2nqwC65KPzyKKU5T5okB7hhtWhgckC7X5BREZTLakJmL",
  "key11": "49gJKSjXMCaisXXKjZYa4E2oA44ANTPcjU2zsnFJgEPhaJ6KxcYLBdvhmX3Jk484vpi3KyB7GiAPNG54PHYv51H9",
  "key12": "PmBZPF61EG1gco6CHiJs8ng2vcGJN7QQzZaK47yvaWRBJnT8qaRvAGxNNi3FHEsaQDhCoHHYEFvUb9hbtLwSvgq",
  "key13": "t57QJfX5sjfSu457GKKxunwfcMp5aygnqfNT8vbUrKyPppPwCS5XFbRXtSYQApK2aBtDS42TJJJEZrNHwa4LzBS",
  "key14": "3iWqZRqmXQqb6AadwRXLbsamj8WSCxhqK4GdpCPQsJM4ZZMb575N37aWbSrAca7Kk6PQLEhkb7NTBhVDyfTKw2kT",
  "key15": "54j4CwF1XYEJWn7bQS8RnzoPHn5CsCK1z3PML9HvTktvJTsFcBVvFs5H13uVtxaSHYJbq8uHqMjB1MKWaY6pVk68",
  "key16": "4EwWnViRyToStpEW4GgpX7UFwxvQopNm5s49yw68HJYRdjNcvbVdYyuZ9KuYmMs5Ahdw1KgSdMdFxLmoqauarkRH",
  "key17": "EGoHVsH8zZKMR1YsiZWbH4vMxxcusEB7h6ny8fJLpF1igRWECK3i4gjZWczcrUEUMrVnSEde45NLQirZkN54Cf4",
  "key18": "5aLNfSytX6eWTueHbhU9M5xVp7wMgvUeURj8No1v6fRVZXZ9dEfBorhh9JThNp89FBemLGKZ6x19GtFiEDqYnjfa",
  "key19": "3Huen5zJTYXEm7VbHLmJNAxmoEuJFUGi2cQBDWHj8Gp839hbNx194DD19t9hHhsBf3ZgiBDfDjtBktM2hBtNacjJ",
  "key20": "2CyCAKQ6EBsLY66Gti57QiM77sVv5FEHgRMAHhwTBVaKqHWnxqJ1kdaFjQ38J5TwmQr69b2abrGP8zLFtctDE5PQ",
  "key21": "9hLY9YBF5PisJmaLkLakmHArg7zKGeHYELwg1vun6kCkJtyhrwssDMtD5HvP56BqPUxMcrs46XXny9U1Xiufw7b",
  "key22": "3ZPswNhDrLhc4d8yjJHjRXHJg8TrYZ2JpsNii7oAwHrmQJqGfSwMXKzNV7k5Uvacpcx9ny5sF7h7Eq4tk1BnKvXS",
  "key23": "2aXqVEiSC48PeyztLjCBzCvW1gJUevZgmNCUcyDUncySt3HjaA4vqFyQd9xE7n6HQDqdqSb6Z9zLEtzdCyTqYF6e",
  "key24": "szHgkLS1aVKDdMUkfWUpHT5rZin3C3gyUxpRLxTBQJ8SoX1b7VhBSfr1iJBnyyfYUCTqbmZ6gvubHbQGYNuhWgq",
  "key25": "f4Ki4sP3G9WArmMowdSgpBKcbtwwVRaQ8dEh9x7z4Ber5qSNzvof9d9UjeTEnpimA2VJLZEKT5BkZtm6qCg7cEG",
  "key26": "5aFfMrJVC3eWszeyL2drCF3yP8JwFC3m13qpmjJJmyeX91Sp8cJteVaDNAK2buKfGj41JDkbnV9EhJeV1nXXZETy",
  "key27": "Vsp6djLjXzuVFS1ApmUnQrwPvpYLhtz145xbnpD4oV8WrCeGuacWDXEqc7cTuQ3DgySyMn2yRyu56LPhafnAR7x",
  "key28": "2QBBcsarauiLhuNCxeDi4qsYzM76Q9giBNQ2qYbrTbdWfqbHhu7pXv7bbXGgQMRZMrqNkZLww1UW7nWsvJRa4aYw",
  "key29": "hV7SC2cVjCENnhqcrphFmCs2QE1exTNf8wGvG2Uc3xkgnTng2NC9pTJazFx6Rhou6Yccp46FVwTXoQ2BvxC66AS",
  "key30": "3UCfc4VPsy5nRrQRqiM8bg5UuwpRDWZM4R673qVkmV9Ub4Uv2jDd5K6cYMrLhFH7tnbSWHHizqTwQcGH2jqV4mcW",
  "key31": "Kk5ZaTaBK6Qm4sh54nGfjT62T5savzeXABMLgpKKGmCMEP2hYQfVpzPq37D4TX32C694etffjZGbPuTDEadmUcu",
  "key32": "5mwNhc2p8pvisHjFD4eZhhG4QtYvCcpC7RJWxScEcM9zoSBBvGVatHu4bMGM321EVcmrtdYGaUqA599f7axqSfGM",
  "key33": "24VSxkUUXNBnebmCrP5BAJ69DCBNQqY33JTsh3baKg53YbaYabsjHtME9ScKWMnLbycQ3jDhpci3uheijnsr7nh6",
  "key34": "269skqsjWUh28mSJ38Tn5N35rAoj3Ukmi4HYbVpUCWrQJ7xBKYLqFZ31EXxL7GZGgHM3RcsKZRyekgit2HMSB36e",
  "key35": "5v1UmcAL2jsiZR4gFtxYZY3nua9Rjrp5cBVcHHf3g8QVRGy2j2Fbfw4vLknCRnC2bTRPrqxfUThpQfSFCrafEoKZ",
  "key36": "5Z2U6qWxyXXvCJ8oDhgcoipFw4pZ1NPVX9entCTavePpXv8mtdm5p2dqH2r7RrCc599ye1oujZGEm7DXgEU78F2R",
  "key37": "wGzTQHT519AffBtFmqDJWNuTaej4C2qJT4zu2oKcpLoPk7hdP1UWeWP6Zpq1DaVJERj34H2xK9u5KUKNFXQZTyn",
  "key38": "4pk5Sq4mRa7SazZ34VifX3tye5WroYBVFVt6upATGkFEsCZV5ZwjcPjb9UoVLhMFXBMAfxHUM7GruGwRTFxGiAQj",
  "key39": "DE4FVDvnXWRVzgAcLM4JfRBKYomsvSNDW9cDfdg7871eNWtmRm6SEGNG3bbbNV4AP5wsdktiHmRiqoyJN2RcofN",
  "key40": "4oXWnJxnJERnKBSVgQSVzd7Zr5jkSU8drNQRJo8zAtj9Y8srGDXUxqAQ41hACdZLCQ8cX8fEix1RmKGyAv4J1NQp",
  "key41": "5X2hzjAFhpj8Qs6erjAEjtRYEUbmVW7nqozEDJRAK88WQTxZ14Lpv9sg4ZnuTJe84KT6AHYcqBj1t98EKKNXMa8z",
  "key42": "5RwmpZE85crUPPtzDLyK6evmw9uDDRTPCx3xBUZcPfPcsNYp7x7LhSMf8YHFFN27k75rKMNpcoQpb8ZkPaChPPQf",
  "key43": "63M7iM1nRnzkXhfwSgvL3YH9J5T3ZWdVZ8BRtppcbUYYyJwwEvi9tu48tL2GYyPXi1afUqjdC6iA8Y7GHMLZdLqw",
  "key44": "33rn6ZvtQ6e5tYPF2aUYXcUjq3Az7Lm7RwLHePTeGDZ1zDKkdx6j9vf91XqH4R6riUGmJTUUKLcFA2VnetMn82E",
  "key45": "3b25xW17xdK7qPyo4nybyRqGmzNiWvxyn7x3yVufdFtmGinsRKoiD4FuHG6Fwmhmaz4u3m5cLrXiHHzyhENaqXtC",
  "key46": "5ewHpne9wnMTKuPQzkwCY5Uu7k4oJWWMeT5f6W39d4cSQEzCHJ2Xs2YsshEScFbrk4oYLu8Rp1519ZZsTe7MYN7d",
  "key47": "4TWeWvzEjZqNgrq7GeYybCyPPRPT2U9rBReo2as9XdUPR63sgEvbBscq4SQqUS2ZYQuTTmU5Tpm9iHMtpNLgRhSV"
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
