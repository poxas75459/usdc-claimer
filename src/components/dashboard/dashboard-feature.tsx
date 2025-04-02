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
    "VGkq6ynscsoZx8TWQpSFRwzotL28AbbWBj8txzeuALZTNX9Sou1vYmHejJQDNQ7Lc6rLg7ds3aJrta8J7N9WLuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2aFErGb78EZY9b2NvpzZCfFtckfuGWySEibCKQEsWo1Fw1Uh4RarM5y4SRFTKG1ptuSt8L9QS6G9WhF1W5hHgG",
  "key1": "28ci67Xq8gGixo53h1HYD7gJZpWiPY9ZXyVXnh1PsBAT3hpf57ReRxVUviwJnsfEWddNH8snN8muyCg9Achc3rFg",
  "key2": "6GFLWAFT8wKRVsh3VMegUV992tL95gn71ST45JmqQ7sJkrEpcJPyFQSyKfitshdumcJUndaEhjHYr645qoFHSVN",
  "key3": "36pJXD45P4NVG4bUxTSVfpJnSEDjPaqmaPiCFBKbwhGq7aGA6yiGVZcgzPDVSBT8ax778CNAGFQnUfcWNF4rmwVR",
  "key4": "37S2q9StV5NtwaCh9UTdMwCoeQ4nYacALq565z5kYhaPJnWMN5yxg6sWvJWPFqHMe2VniQcX7j7weNshjXahUack",
  "key5": "FBncCuSHR3GNCcET14yBQEDEyK9XbUA6rJ3oGxMmFDxRUqDEZZTSb6Zp6nTTm1qnrTodQ6vubiti26U3c7vSxtK",
  "key6": "2ff7twasPhfCdrYVCeyvEtZzSbWJM1SUmuqRvov2GBQAX4pbEL2u7dtM5UyvATNiuWfDgGYFkTj5kTxva7u1b8H2",
  "key7": "3BqoxviPomHft49gdmSurZLEZSViLzV1qGhNcuaLn7AB5ypnK2oQX8zvkNxZBvsdrYP7oFB8Gv4ZhWoSDd1aGpbQ",
  "key8": "4TDDsWouDSwDs7GQ7bS8gd8zZKrq7fVCB4aEsUbRPzEQ75p1uXCVNjFuTmyDELqb9v7VNfSo9pVBPLeHMZdQisZp",
  "key9": "5VBe9yX7aQuarfYRzoKRwf9ZxXCb8HAUEYgMANEmQ1agXyv8FENSViXkxkWsaMxcKGKKxwE76VL5RuJAweYyjZc7",
  "key10": "44Q9X5RvGf5UyYRa1NnWKBdPzbRHaiqQsrKuhHcwrqQFnQg5ttXUogfHmqoKUkvzxXR3MXirSqef1bezBbM1uJNH",
  "key11": "QioDPpY22wJPhWZwwaSS2SxgkR8ke7LKWot8P3Ai4E3eBUnTfMdtZSBhiahxftSB95AmK8pySuR68Lpdm6Dn8KM",
  "key12": "3HLyFfe8xQTeXvRNiw8bAaaVL1EDSVuukEb1crsf716yby6ZfVgWct5uWwJPriToCBXAvpKM2j7bb18NuEL3UYnh",
  "key13": "xv6XwHqQqDYdq3Q3YyWhrpdX2omsqNPt3XQAACfKYRS2TDnNRZ3uo6jdk4mszpwUe73WCivsLn4so5hzzdErTmF",
  "key14": "BobeKLkJf498excxBUfBwD22nksTzoLEmiXLDNYzgtRndofeiwXooBf3F2gY2btemQrfzKVUTjzv7bFTFkk4uTK",
  "key15": "4oegnXxaZydfGqyTvEbkJLMBFJXg8R2R6ue6QGopgWFfBaXP8i6Qtx4oRpUNebzmQWo2sNfnzx9fWHnmwALcnbui",
  "key16": "3wrzujDkL1pT23HmQD9uB6Mh8gsvWr99XPeqCEoi1bo6jY1CiZMXoH5EbtNARpERKGDbLVakF38ynZV1tEf5F7yr",
  "key17": "2fhgfZLaTcuwe5KvUW4jmqJyij5tX3L8htNxbdootkD7EgjjkQdGUMJ6w7ScGKVvK45sqDTHPpGAExTabea8nDYa",
  "key18": "4wNrvTHJmiid9DF2xhUVShjHHLfFFi4Ccrhjv6S1Aq5aR2rGtR8VbtaBiqFA3kYkcp5yVfnWEzAYDJSPEhPHXJgi",
  "key19": "2SKrzU8QHofMzuCpWnNPJ19mrEVVbuqaqFxQeaxYe7uQrYUCB4WJJ13UJ6eSLPUuFmVEL4Rdtu8tDax5e4c1bS6u",
  "key20": "5dxAgfN9pqXvE3vTHJyJ2b9tQrwjVuQRpgpgCTU8MjrfNi9DZCkzxB1xkDc6pNNJQUGCiDebUA8qeK2iwTTvymRU",
  "key21": "ZTvfuyR3YFW2LtfuiWE8wH9rEPSy3kLLVP2iodmH3Km9fNcUySaUokq8ZhJPfSenxr9MAUmoKue9JuoprUinG5x",
  "key22": "2uk4T22QJBiqrrsvitgGrBRtevdaa5NBPz1G3dPhyJ5P866ZggHpeE8JHh6i4URgZASEjsGNery3Gay8j74EkVBD",
  "key23": "5E5F4hk4tpKThNVEsjFdJYk4CazXoVJasSKmpr27BJATtKrfpbwb9gz1LEgeztk9J6TdQK6Biw7X1TQp6sjsEYEf",
  "key24": "2w17SPvfHT8mBxp6JoRF3JB6dDt6W56GZ5A3YHfQvaWJvHWvN1ckvVxPZbYvUkPhggKwed68xcKohyts4BohX3LA",
  "key25": "2VAYDB9jmt5CNDt4pMB6xZD6ZWN2c559aJ4EyvhMb2DxbKduJk9381VbmK2bt5ABVV8H8tmwdKPPEK5AJDAyBgfL",
  "key26": "4tLmo3TVNdn3ZpyY3FTsJJeENFXxFJQjQXYprGLPJ4mhVK3B4VvzAuh6RrpvphZT1DMnjjpMvRRuRMNwobG9UgEs",
  "key27": "4WqEpf3xb4VUjiDuk4daUq4HnihujhU8KAEK3DzYYmhTULZUKTKGhWF5tSveLQgGyg8UixuqbxwPf7kQ7MEAsC9t",
  "key28": "4RNiXUAaXd3jvq8nqUVtHKwghvcMrq3T22WyyCnFbjJjoa65osPwT9CdFNcKqPV2FXH19xCJzekGMTY2zE5x25nN",
  "key29": "473ZVRUYMv5jL7ouksWLpSpjNWz6uZwW3TTvPECVi2fLc81WJ1qhbmLyEBidSSvmZpTATTLCLbqPFYkHzCyXwar9",
  "key30": "4yTfF1q52irKHcQhGpSMrMCWtZfgU1PaSfLJVwB8oKS7YQW7yPmwV7gxL2QTV2wvSonVi9hCbrn58AopMUXrH3DP",
  "key31": "Gc2STUiz1EH8CRpBF5LigXwEJUh2xq9gtyiTTyBcJxVAceCoc2QjpHWzL1cnRWxJqKnuucCzBuwN54Tt8yzpNP2"
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
