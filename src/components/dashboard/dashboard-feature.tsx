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
    "4vddj1uZvEmgpdkjX47fCWKKAMQ4npfhKNFd5HzaeoD4f5Nwfmk3SjC9icNxEKuJLEEcRTgsBNMesau2thZnuvfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsJmnckDv41kAxzYBeVj3TfJ3j9RveDr9FpuxSMVXX2b2YC4LGekyVjUVd6NTqZqRtGckZzfL42cxY69N6UNACh",
  "key1": "3gSUNKyF7ewVWiUJtLHUGQfprbCANpmhdveuoh9X9vAxP7ARyxfJu82brzwUkmF9pVQwrGqFWaw8PDvzq6Gftpxn",
  "key2": "23ZbHtVWfvD5r3ubZvuKyUeaL4bnWJXccaxkgYDUds9rnE7XJsaLYRZr3LKGpsWWNRmmnfmTqDBSdGLVT1ezPgmG",
  "key3": "pFcVRPTezqWxLgedA5EJN5j1ReHyd3LGRFnfhFhascuAmCG27yjKYJAcxp7NbbQnfrW39bwbtfdcjzAbEAMYmEG",
  "key4": "2wiLRLFB3aYoiJDdq8mwNvyhk2fbgXbpo6K3Yys2hMH6ypio4DiAyFfwCpBaeRaKn2zPjY2sd3PU4F1ujouBR4wt",
  "key5": "HBtYNe8L1H36G6ceyFRZ4TLTyRWEN4ePdFedxUxLgLxDoMxCzXnKgPMYimhZDsiRy3yCrbH9HbS9EgiqGbtgEuz",
  "key6": "2v6Fz6e6ksSWGQogvwVFBLJ55RRegE2ADht3ju5zPAY2yhcn23KU4Db6M6oJBhYQmeCqDArFaVDtKTvLiMGDezYm",
  "key7": "3XLGAY8y87EGWeGguNtyRJh59xMzrdqQATUrp2Z5s3ApTZQME9FZW37JrK2FnB5fv7cJ8XqwXKHBggyjEHYyVj8K",
  "key8": "3qhYgtcfyh4oG3hKbEYTxxCgzFSb5mWn8JLZGqc6bWjAW8Kc1MzwhY2cAZSCKG8xjDUBpSjDiEZ7hcb7NHsLeVGJ",
  "key9": "cM9nmGHgcstTnjxobe91LPGfQ4zwiVrDbyJBhxFUajEYhzbCZ35Z686fafE182SWE4Qn46N4yEZcf7NMjCEgt5B",
  "key10": "5us436CtsBfbkoeBCGJgbzbzjeZUgKBtpj7pUnW4b2jmWDXBK1czwVtHhWn7Wq8EerkFUa1CjghpWwqpMn9LX5Wk",
  "key11": "5u3NNaWPi49UpuLnTEac19HJzUBwXRCMaeQALoAn1sLiCaz5WKxdoKp4CuDwjUkymGjYgUqNZKYdm4TPTqQ59wkq",
  "key12": "5wMryX9jurKoAVkTchmnpf6rrovhtkHTGvipdLoFjF73tkQf37L4B7EzR8eyA2zuGeNX36BE3MRiCuWH6nP9nygd",
  "key13": "yDXb85BwDGX8x9eNioYP5dnFTC1RUxX8TixrjF4vrc6H25DLu3wmHwQoy1ANd3b1favkmepgySsSG2E9mDssQLK",
  "key14": "4DUejyvAQgvHzFkrXMQsofrkZJwvZHawMGEZ7sCZDFfdUjb745EGnFRzXeajNmv8gBpYrvaM6kHiYrT8pj97fBS5",
  "key15": "oXorY4sHC3d5kfXZeLbjjLDZnQ3gqbVcNhCv42pmBFGXhGNCcMnymLiaXr2v2LQnDvY61DGpSDyPqMDSigCmMpc",
  "key16": "5jkFbMDdwgqcH54BWn3v8kRzoZyV8N1QjhSagVfSsEgbVZ7KyoZii8BHBQLtWa74ozxD3VMKYNDkBFAnn7TWfGzD",
  "key17": "244yDPXxC3rguFaBa8F6STcG3jdJ672a7pfyuUgs7xbm24eT16BKDJQon6QgNXx7DVz3hxxvXREJJTh8TJVcstxB",
  "key18": "3Z4eNw71UwUENcpzsdhJdXoJMyeARiEskctdbmhY6bKA8nqkF1nTBpNgoSGg77k6Mgw2bfYvtqs4HrYaxJvWYkTM",
  "key19": "5V9RiALnFLR4qRy1Yu6RpKT5EZM7byzfrjmRWaEHmSNFUNhDyUa1wvJfkYGhUi3Pk653WnY6yo5XxxmGS9ssHoFx",
  "key20": "49aMHXwuTyodi36LSKU1niW7KrbhWbiUnA1zX3bqLgYvYGPnGtNTUcZUcS8eAE981bEvUVUV3zP8ERzxGsZdxbkJ",
  "key21": "4wS4Dp95iCzEvVpyc9euvjnHQ2GbdGUTsShw3zqRvSrJdULnQPP5uWcsDvZmxHLdBXmtz8z9jbZfEKZHniytBDGD",
  "key22": "4iEa31Rw2DJURj1Tm8VR1mYjvgSpHQ65KG9wk67uMAiPTNAA99NpPcEN38tM6gTSeMoNqKriE83xskAHQfiMZLGo",
  "key23": "4Zpc5P2Z9ATudpvPVDnY7HZ4tdQLt3vxppUrS8kunGwZYzCVHPsCcsLEAwajQJrCU9kws7EcjVoRawzP4twHaC3n",
  "key24": "2XAG1vrYXbskgMjYcfwht9DbVVKmfEL6XMkZ5cHTDbG3WGuPUM7L14SDHokFT5dJadeBAVT5QbKuL9ri7GQ6Bard",
  "key25": "5FvGDC2vhuATHqZamhhiptyEyiJZ6meeL3JGCPzP5fHPiFphMteVMinTYUJWhVCxNSS7F78ZxGdndmN1sDGYbEQK",
  "key26": "2KXNSrwoD2n6n8TcXBc4xep9Tu6ZfRMMwJwaqjjKpdqCYQb1UxfvBzfX5jU8VosTHZsQwn2k5S5Sk56MF2j8Fxm7",
  "key27": "2qXBhrDETqPMaqi63q2nDzeWDUENc6JsjWUe1G58fZzKexfuLT7Cdfumi7Y81SbfuwHKBfppq5THQpJyV7XUeaEc",
  "key28": "SATqYcUB78yo5nnMUhJeya2gKE9KGBzQmBJsJ3qtkbzdXrHhmvCJtz1o95yJp9AaDRmusMVYqaKWdPyqcpPkKtt",
  "key29": "WWKLqrHrhtsgQRCApWD5sNf19qcMrd284MguTs78P7svNp6dTuU5GXUVQs4VHpLLX7cbyPFAzxny2ixtqJTgeC7",
  "key30": "5eZdPbuU9EdQp1toZ6eGnvhnFTNCwwY1n9ZrQwUJVZ4DbiDaKgjL5PtBry4qcgny4VLvJJGNfrPCXPCaEQR1Em97",
  "key31": "43or7HKkL81cZKWbHC75URH2kqw2ZSvSKS8G6qrP1WsfD1p9W3WBsJHJJikLtXN7bHtwEE7a3EecWmRGPR6Y4iuS",
  "key32": "28ptgBf9VvKgV1rCQGe392z7Ptsbn5ARkUxiJgS1uEy9mb3KYUj8rATepcTFs5SNAj7ZuHenNBhM2WCvQ8xV5uef",
  "key33": "5pgKoVByUmYeyPfR5eHwJBUVtFyCdkz7CZW6MSuzT9dbPKELCyqfJDmrD658ZQB3yLt1qJPGAsvnLqB84WJL9Up",
  "key34": "Pd5mr7kh5mxS1Jiq9dBxzYZybNaC7b44WiRguaii6XfpcMfmvM5wRDv1jrZBteTEWx9YiStdv7uSJoqAJhU1BQy",
  "key35": "5HqMXPBcozmazGdAH6M37UDKxasDocreQD2ovLULonrfpLjnASJUYWVYajfQGAWD4BgemqsJB8CMaxkUzzdWsNLC",
  "key36": "2xCAtvh1jD2EGmHTuCLDbCGmxRF8qrivzFu7Nrs1Vr4zLgdtxDe1KNpgSU9bP5yCk3imTtV27PsTbRGizvE4aLjL",
  "key37": "5KXKHDjAQj8Pwni7SuxGLkDVFTQ7vtVxA1YdymUzkRPyV2fjnkn6SitzB9ixiQ5JXHsdGSbodsBPCwSCyTHQK9VF",
  "key38": "5xXSLJ6VDJZcMqd6m841yXsEctNMK15w7wjqMEjhkzPLsnGmJfTcGxMMX7cRSx5cjxHPDYZY645HjFKzam9dx1Ac",
  "key39": "cKbmK7Zqywkf7D9bjhi7qaqT2P9FGiXo9RfPHHzdqgtDnmj8Zs5gQqrLRjCyi7zN3wXm2HbsSVX9dTvdAAtgh25",
  "key40": "4siRKUhSwy8ZTkiDBwMo6G21WBThhrvoBYu526Hpo1HKgkifjHtkMXA1opwTXTzNceQg5pbEoR4wTLK8MsE9u8PM",
  "key41": "4aHnYrfNyRWkb6MMpDCdKyBRRpTeWUkFmvvaCBLubuZnT3vPBab4Z8ztYfb6QXMKgTpq1gh6cteA4rJcCJka2ACc",
  "key42": "2d8jS99vHZZqzgmZ6B5jsuF4zNas6us62ZsifRKja455wP791YV4PGmn5cSghV8AqmtrRHzUSKUzMgNhzGXEjpSW",
  "key43": "4Ru8uu2meMNpmWBj8ZVrFyR9WFvFWVHekWvfyqeeW82hGcNTwc4qnwvm7qyKeA3ho4LFwZN512d8GR6jB8vaTV19",
  "key44": "5hCnkL4rVsStNx246v6smexStKPfEiPbdD4cHGsRi6FNPuXyS38bwvG9rYH4eRyNTp1Mv3JZ6eMUwmeJKwkUJAHz",
  "key45": "4iogt4RwkGPg1fsif3x7uYTfWwAFHYikEitMrT2AWxkJZbFhnuqM3WvFMZhHQgGqfjbPRjU5aofPaX3eUV7MzYEE",
  "key46": "FNXJoFa1tZAComHtk4DfModqHWqacaK22WgtYb4diaAZcLkofDEQ8MhSY2qWvkhg2NjCF35nspLj9jpjWimD2xT",
  "key47": "DNfxaFNdRFRFTZCTKCHV1Q5BZPw78GBpbL2fPvZ6VMnDLKK1TXnQ3bJiBukwkvj26wGwZf5sGjkhz1gvfmtm1r2"
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
