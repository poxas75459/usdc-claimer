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
    "3Hbz3gzWSHyuywyxRn1cpmapGMpLXHXcMgnkWA2DP4sSdpTzo8vZvdBJ5yhdQaZtvL8sAr1412oW117UBnkBpGzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mj4q1EDXFuh2Kkvin2FuT8hZHXVWhj2vASW2zZzPuUwByRZ8Zcga6GohZuXuqLZqRrWkDqnDcMVhKCgVoDv7rSC",
  "key1": "4onFmddqCL3NJFKRVKXQKwqsJruYJ1ds4kuNftX9njx2vFn6hod79hwQVf6Vag8sd945kboRXnLwYMzbpLeQwKJp",
  "key2": "67gdt4eqNsinmwMeJPrcYF3XFp4ADBvu3thFWwLaw8J8t92zvmur5z29A25QZVa7msN9XTHuKEptrQmLYbZCixQk",
  "key3": "2ACUVc9K9vEyKMwPvn1SZ69WCMygSdhjGeTS7cdcbvLtVDGVPUmj362HGWeWcLne8zoywMx61ux51JNRGjGGGrXt",
  "key4": "2q3LWdQYg7793Wx25ioMr5ZLo6FYZcvbgf71NAEU8e5rKK7EcETuNvjcneMXH485Dq8qyeG183DMoCpSxqtSuvBQ",
  "key5": "4Dr8HtHjEtL7AND1JRVcpGaEq2WwYGZNyy8QsB2xKEa7jG8bi6q5F1y7vB73gtrcqQgoMZU7dPVLHSNvtuyiQRwb",
  "key6": "35ZUyYTcDBfCnjHqiq8sjV4nBeBfb8YfYJBP4TffsBE6odvG6BknK6UNdS99vnXHm7bwjGv5DFevpiCW2mgt81QZ",
  "key7": "65h2jd9qVK2BRJtJWTn6CEg18WUCKAvjxPFV1PGnks9V5wcu18CPUjZgtP4Ss9AN766brDtQbQqoAMMTPbPNmJYB",
  "key8": "39ij6gPqhMk2kF7o5DKVGBKpLE5iqsDjaTBPuQkiETbPkzHpwVpnaZgVhfAUMJCB4qh8ZtGrarvhXgFpq6XsA28C",
  "key9": "2CHjkKc6ceUbueMoG4kcUizksvVgiGiywnwmMxMX6ZNuP94vWLfA1FR3ao1NpFFQywFLttsorLw5J9WYDkCT3QRV",
  "key10": "3ixuaGxtEqK5oWWYQCff15ycePrYXzEjzGeNbpA59RAgqZ7mNAWpWEYb8YrB6MPgZeUh3rN2SshFuPi4qPtgVdk1",
  "key11": "2S6TSEbtCErwQ92MSaExvmLn4LcDEzQAqwB6PyhMVeMg3CSSNDCeMazL7pKzTaZqXNcRzTuVzpq1htjXsm2jZU4B",
  "key12": "fZNctmRfWhszre2KQv7cUAGvxUwJ5DZKP3D8Wh11MdRPCpx3A55bNJ2T8Jkr1MVwzzuTzVnC1xX3sqHUpq2MNHH",
  "key13": "2NeGc6bYUuHvNvXnjnGxMSucUEJaP5MpN3npAs53c9w17L8Uc926ioEJcuFGPfL7C98yzRVnYodJ4ABWknaa6Bds",
  "key14": "3GMykHXnD7CL6bChU4nmxpTtYnN6i1czdZTs1EUQRSnKKBcHUL1jsHfBrS39KxhA7SzusUb9WBp6P5kd9UkCBMhY",
  "key15": "Hnxs6eveMo5z4CjRJbURSUG96gycz2hCyf1qK6rgWHMxSMtWGATjRvyhJ1HtU8iWZKG5fV6yWJjs91cuxf7MH43",
  "key16": "3KtbtZjZaJQEHSRQC2yZUhz3neqpQJdUeoK11DGAjY78YQiV7s9Yb2uWzftCvyRFMwkcFB478L63WExU1E5WtH1U",
  "key17": "4De1LpTNUm3iZMarr3itHgNyCouNRPxV6LbeUGqppkiz9VhmwGharrVsexKN9572khoYfbT9tiSAanixoGLMZY88",
  "key18": "3Bkga2oruNq4rMQkZgiZvH4VzNMsA5CWxjwNNRk2RDG9znbawFbJoMUQcjhEWN3a54WkBZAWux4V7wLgGyrkKXt8",
  "key19": "3E6YfPBu9Wkvsm7NWCEXSvPNvrh2as5v11GPWBCPe1ZmGcCcRsHwAeS9zjosLTGjBGRsWr8bUydpCtoJPLd7Q54L",
  "key20": "3UqdMc9xmfQikZCiwRu1T24UkdMJksbHaipXZ3e3kzUMyt2scXvdFZY463Qw65rgz3Jx6R4VVyZEUcDehcivzioW",
  "key21": "47f1RcWCFTPA53UZwseDMW3s55yKYPDDpj9kKbxb7sXEDdxiZ4W7Coq2LUWfyTBZkvsm3LX8EbFLcpxL8enBAZPg",
  "key22": "3VBn9ayosTTYiL8NWzgLrRsXmmSdo8gRwWdxjFKjiLSxvQYj99Pxfqzu8qXdaQjwziWSKEcPxZ9CFkuor1LEmVTN",
  "key23": "2EwpSRk5Pn1bNvZeEX4JvXwACFu1f4d1W8FMdxJVBL98NkudcoyoC2wyj5YPz9E5NZJhGEYiJVie4twgd6cHdDri",
  "key24": "3S9imcBAnBAGSxsxBDJvWWFB9U9BrveN3mLDTXjFae5gipukWX5HQfCpe6QnPZ9GuDVD8hS2zx3SNmb8Vvha56iG",
  "key25": "52iTbCc4fMDAmLE2XnNnaD6VoGZVwPqMHkEPGXtQbft3PFwJru6g9Y14bxG6UXPv8XvrEj6Vyts9pqzre9p1n2HQ",
  "key26": "3HXzHF3fsySd2MY8PeRVv5fzepM8K1MDawgoHYo1kAnbvre7TLoaEegrP4LnosFc933MSfWanmQnRkQysjaSYz6B",
  "key27": "3FAFL9wiFgXgg1aGLkQg9t6dP7xGUY74SEyRC4PVfqek3m69SQ3UetU3iPnTp3gWA7JtCDjoRbi1NBomW55e1Zqm",
  "key28": "4Ui67hT9HHYYJZ6QfGsZrXpsYBF4yNzCv9i4tKbm1gFu1ejdV1ZwTGkTWnfNXEc1LsVe3aWaUU1oQWjrfUJHrbz4"
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
