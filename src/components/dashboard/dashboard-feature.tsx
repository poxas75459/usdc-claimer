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
    "35dXkp2LZ41GECr7DXSgm8MBvvySyQw3A7VXTJSU49vtM6cazGPRBTikHhJuZ6SVTRs4NpNKxhuCkNSiLsoJmpcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VknMa9wFXM37TkTh1nBD4bZX7AbSuML1FhQUYUkACP3NvbTC2z53cBa1cWk4GNVJ1BvEUZnneeMKYSj3qDzxiW9",
  "key1": "38c5aMH9s2DVq8VN27SHYZdRQQDFnJykDSF11ZupUjMjnUCSRNz7YuunMxr6D9EPHfNNnr6mMxQYaqYUtNJN6YiQ",
  "key2": "3bxpTV61Hni4xcGYgLBNf2mfhFLm8ktW7eDLHo8VHd4o9kTzVzX7H7cz6XsyXCWsGR9PBUtNzoGAFdiUe9fGB174",
  "key3": "5X8kdtWmrYAuta2XUqwcdPuffZxGMhzCRdY2qQEDNtHQhMsL26nToq7enUJ3NaArqizJHhEdk6F3uhHnDTSFqLub",
  "key4": "oaUEzh8LiAXECToJw8Yp6FazWcjNuy7L75Eovo5wqZTd2A3xmqzVkuqmjUQRLdNG3BG8K8LKWThk46oW7bKHGP1",
  "key5": "4RbTJCZQ6eqJBDRsXbBbFGKMk27KUGqEhzx4VXd8uy1HCeBnrxpoXoCCuZLMrUb9vLAmzX3QyYM3214RtP97bf68",
  "key6": "f2TNdL79tTmeUchvEUSPh1bnzYCD7m5w3abCHEq4eV7YfH4ThC8kLRE52cTxJd4Pv7TGqMTDA6HpW9bJGC2uSmr",
  "key7": "5FS5L29T36JRJPr4NJcMrpbsWcsCKUenDjniYJHpGeqZp6sCJDFVWx7HC1Nn5ps73AS4LtAkD6a5PPz6sMDuhvvU",
  "key8": "5SD85THvSsCNWDSjkWcxrpqNcCH3xkYZp8mwSia8WFrnJr1jzY8AfDnV2YDQgeANoLfrBCYAjR5UksGrFfa2E5sQ",
  "key9": "4o7tmoEFK2kaaGm11xKcakYZ4PedNX4n4w54Qmc3LekP8zmiqEFnQFnvmVmXTNKyhFmmgiAquxZAdZhJmVYLF5kk",
  "key10": "25XnQZ2dpZntUxy2WSGNENeQhEki5ufDun4dNu4FVuRgvYH3zCyT6j95JAGrHtiUaGHEWudD3cpRpSxyiofQ5vJm",
  "key11": "7sSuHmYSkTB79yK9pTc6zcb8iJMgDqvQY68ZPpM8NsBctVrptjHoS9j38J74C1qtzRWXAmutKQzsgLq6J3dyf44",
  "key12": "5fCcTr9yDnE4TdRsfFGB1QNQQp2BJnPXGmP8wxqPnyiSdXHzufcybak729rwQJTkoJZnZE8BQcxVs1TPcmsVcjPN",
  "key13": "5LuCHdav52xoGKURRuYkyffTfUcm84uB7f1M4wmV6MycGpFoJavLDPQwrhyX9HPFhCthcgaaK4Cv8jVM9JZoLk6E",
  "key14": "4RzUaJ9X6SAZXBQLxLZxP4T1hZxQUiTKd66MPChg9Hpp7CLm3AyjV3XbbxhpS2QczFHNcMLCPqLpCa8nsra3eHuB",
  "key15": "427boN5p52ve4hKbMSkufWYm9RVzrC3orJjoDLVbLG1sWs9damAW7qP9j5CXeSwn8DZ7xMMnNYataiefwAtSgnbQ",
  "key16": "6126dP3f5cPgzVGCAQU2EpDh6sGkqM3XVfVijSqEyfDf9NHMVt5bZ5uvrVjnRvQAnKgfPxikqaJmMLv8e41VVhhj",
  "key17": "ZtcqaUXrRBU9XguDtCvoJZWjWvG2rcoDYj5Zeg4gXwCNhEjmZapkddxDGjmsSgPvce8SSmuqbbigx4gGvKcWkU2",
  "key18": "55hmF77uBUg34GzXs88un7yLpn4f8Y9mfPDqtaLQCFwPfo4B6683JNrmVMveYhaNqyLsd8MdYEXKtKEzaFZc57Ro",
  "key19": "2V2kWd2b3SsyBFTibQaaEDAJtBWxKygUqMFyt7g5msaMfzdwy8UKmi7oy9HCJ3sGctchVh1MdBAdaDxy1TJc4zmH",
  "key20": "3qQm7RDmr4UsygGBucUJjSa63KmV75XebH5X68Yf25nH8Gmcwn1cVGFyXFS76YWoJrW5h5yhzbfDFBdqnfRBCzGQ",
  "key21": "2LFzDTYkGhRuys9ncxy7AbKndvuAYdvqoATGUnH1QE6CjdgcD8udT38ypv1bJCFTXjdjxj8cC9skBjj5zGQEFt3y",
  "key22": "2Jp97ceRRwqSjGSUhWq3TQzq7mazXP3B7MiB619c1BWgpQtwCp1ht8SLBtRBG89H5bMNYDVFGtKojnSLkC74nM7v",
  "key23": "5UwRQYbX3iz7wvBVQ88mRf87dbcketJj7T6EdN1NseeEitoPofauqEXnrxa1LERsZuFrf79WdPdhMoqU3VAgoJG2",
  "key24": "51NpQKMyrzuifQgZAYcuxdiosTkaVGZ948gt87iSG8UK1qmVqjrT2NxZ2HsM8BNhfYuX7fVUfnrcoVHYneTqXJj5",
  "key25": "5pm8qHUait1315zGMmqbhWdbMcKy3bPGETgoNiZAdU94wwZMHsdEpsXxqHEbzXTN1gUDUtw4PstGuDNaZMicq9cx",
  "key26": "2vLndf96sASTKmuLF1ccvzi4mrFXSwNmgKYE3nGuCRRsrNgSjM6VaWaicstUThedSbZFC47snmYxzNjGkqUNcsm5"
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
