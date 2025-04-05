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
    "LB7cGfxru5zEcoL7NombTSUgvxCUPzmmss3RyGjFitF6dzDX8mpvThyehpHfQ3JnzuGFzHJXinh6A3FF8KUP1Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqYmFzc8E1Agff39duXZNSdGmfqDBV1A95Fhv3zybR1z6P4b8QdUK7ZyAUnLDDFGefBUjb4keyPuAQCAqVp5v4d",
  "key1": "3VBKGCUYPryEZYkgyTeaaiQ61dVTXmsEJpRHC259TpPbSRkCPPiG3Co9sMsj4JLwdW1LuKTbfjKrv3k4ddKNJXWy",
  "key2": "5SKDN65aDTVHWDVBaPHY669A33DbRwPDQWYgezu7rRUbtfdkTE6K5Z6H4iJaXTXtULH2ENVVBMkXJKQ86dke2v37",
  "key3": "5ddq4iY4vUBre1FXV9H9Kfsgyjf8gyCH1nXTKjdNv21D41Z6AH8e3Yd8bh6qMA6Cf4JF5rFpks85CMtDo2QdDtyA",
  "key4": "5b3PeBtj3FpMHmoQUNaaZn3NXUw2tpAjFUywU5LLELkooePFeMoDEJNFGDedWABk9wifvDpgNM3JfGYfgB4oi3Kq",
  "key5": "1HaJpRtHDvTMeZVn8DR5zLmRNdYZbCvJsSX8E9vzvDGXqJGw4ieRYXECFfMSWX9WbHiscQ13TeHAYUYez37LBiv",
  "key6": "Uipivrcb2MSZm2cVvJKjvVMcdeb6zCfjYo5oCGgayHg8fyETC4zFPJRrm8BHJ1D9gsqchtiAS91uPaHcyHhDZXp",
  "key7": "2M1agWk6XNVrGB7b2tRAmAoTzHy8YH6zDdUvEZT3oGwnwxFZRkrNiKksq4kuibQGmVof8573dhsJgh3XjC1kXxp6",
  "key8": "4kfqMCWxzqWTeCLS2KESLtGRyCqVBhdh5cqZi9jzkMAYztMuLnsWQeeMaHWpXpqyXqohNwWX7Emd7BcXXDkjWbL3",
  "key9": "2KiSKu55rHLiQVUF1PiCZZvPJgdNq1eUwymRSh7r3vC7siM8U2qK8UekwKGe8MDPAqjBoy7jLky6zS6aUW24G2Er",
  "key10": "2JxWZpKUPkJsy4wTEvNBpGZjJpcoAxwWeMyN39cTksRrrZoeD5ZchNFkz5CBkBJCKqKDT1oCw9aWks8zMJFQGsdk",
  "key11": "2NXtHE6gQC1phoGnqhXDvq6xjAaFhBFRmkdGUxqBKdTb6pvnUYqoQuDQL4uLoVRG73pMx8VwUsUTkDWS8KQsyEhw",
  "key12": "5JnS3U9mfEmmjxufTG65BsQ7FgweFoKT1U5vktwFSvtYnxcf2Tpf5KpCoQanNccwnQ7oW5eFD88WrMoKkUH8ovnX",
  "key13": "XKxnsTs4VzcoauwatdKBS3TA5tEQu5DSksUuELfXitZPJ4Hx3qEpWupni1vf1b8UVZHcFYqNY68jLd6s4rMv6Vh",
  "key14": "43vv3WVovSBM3PfofEM4udJG8MyF9ikL8gD3mSk989tVDAPgzAAsMYD2cq9xtWhQeab8CNZbeZKkrKmVqQ8xgzHd",
  "key15": "2q7sV4j863XQg7UwXBbgfPEr5fRM16GTxrabEQfeVdYh9fQPsHcfPM3mvDEt9NE1vtCTZSSxiiptcWrWummq1Vyb",
  "key16": "674SaDjmXr3E4om8XBu8TV3hDtr5443keafYKJxMCoDurnens9bmab69Evr7fZgf3f88s2izFKBKSau988D68nNY",
  "key17": "5yCKFaFTmmGuuzqHTUw4fUmcFFdWaVZwPh7NyR33NE6XyZJ9TtPSMM4hrusxFV38ta3icRdCU3quXBTGjmuWWBzp",
  "key18": "3Lhd5avjXGx6XewUdbSGEHsCKRkaih83ESdQ8pLM8wkMrxStqF7paCNfA8fSdyBsmTM4hXDHzhBrGUt8dqkBk7it",
  "key19": "cx85xPTVpXsVMPBqzjNDRNpNKePXaHEYUTLQ4tFEuuV4tyXBhnrDPoeSxmvoKBgkgFWenKhNrL35uSKK2fQSGyz",
  "key20": "5gJS2oFQpsH59ALQJeFqqeYEpz1GUqzBaPevedXLCBVxrJRKvWhrqDChefqXbS4LPpYSZb6DBzUqniF9wSVshnbo",
  "key21": "bYpUbRwDThhSFUnoq6UFzuPkJZ623bdWUiedZkuZknVBZiGpx62W7mYnpZvLAjHjExRi4oDBWfM3hNEiJBZtbus",
  "key22": "22NC1pn5h1xKxw2TEp2dYJK2BoD8NzhaPBzDEx2JBRcmpqcWxxp6Rjio5VvM8M9oiB71JTsKZ5hsTxWTuP4n7TVW",
  "key23": "2BT77eu5kqUG5EUBVrUGWH9iqmJAcBWkfD6JFFBTcKwDpUXxEkvCVw1mfeXXAHhbRf4B54U9YcU7PASGkwJ8ET4w",
  "key24": "29AfwAuWHUt1MpKKAyzq1hEfU81vMg7Hq8eLGZMEsnNwoG8GuS6JKD71sA4JJ8yWwL3xtmEpXhtd1tLTmdefHS3i",
  "key25": "5aGnfddD9Z8RKPhxfn2wde4ULEkLo4SXtKFA97tFVuJhZ5xGpWox4QEayi28CziYrfvkDFTGJbVXWLCzqVGKoMeV",
  "key26": "2YuPajj77jZMXZdFiKbgK9TMitKCsTDWzhiaLk6GSDFJB68L4b2NPF39xqn9oZHrn2SbmoQqHokFpoDZCe7jK5Vz",
  "key27": "4NDdMW1dtVBZ8j5tSv89MeSen2FiHTb4HfQVD56STLoe9L1UTjRYKrVttNsVwRAx41UtXLC2QF8AQwwgqL9JxSrt",
  "key28": "2FdjU8EXcuGPy1zgnRJoNKCg23bqwCSzj8vUtHhZr7ppaMPi9mBaiJT2dXhb68NAgthPaX3AzaRmhHyjwWT9DkVj",
  "key29": "32VrJnQzonp6qi4KrTwEjH3WXM2QdfnjD5FnpTqZhLiETYM6jzSyJCZi7sACprVe87y7vDoavb66bJ1tTyycSfLq"
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
