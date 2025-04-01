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
    "3NfkKubMmZyytFDpUzvG8i8SYwrGD4nK4mAmUjfi8eCnpWU2m8FTReLp9eo1Thjq5WCbEo9QsKm363WW1bwfXxUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rj7B9UeiRJ2DMiw9gDbMyt9y5vaUxxyyFVLYShMXvw4nxUXkQWP4ehFKidvXXNUS8AZK4LNUHchoMTYX7e4Jx39",
  "key1": "4chD6q9LsfGjex6smn6A6bx2AwUudJ5xQ8cPgQPwvAFxRqNkWKPFTfVF33QS7SWtqHSzTBB1jX7a4AenR6gc4AMG",
  "key2": "XLBLNhTdYTSGUubv9JUR8WRfaErnyYbxz7h8VRvTCUMJDeQSdqwNL2Phho3DsVAvdcNLFLXu5u6yaKpqxRdx9Ax",
  "key3": "4KJtGYm8TFwLCCWv7c2j9UH4UQXo1wTcvZ7SJDYT4bShySrdFHRkeFVRSvvKfTyjjKaCrszuhnW74z9zSmNJwrbp",
  "key4": "64HkZfDWSEGq7JVH1MK7TxRTaxFCKekPRRx8EX7jpF8yvVTAFR6UivJ6jAhjMcxnZ3Wwgh9csSF6uYGHSHqDxR1u",
  "key5": "4Yah1h3Fz7Eog1dju8jeGJgAqfDXTjDhvRdxo4KkyzHn7MaPiWMnqfftjaqVTf9itKz7ARPWwC5T6dWWjY9gyp3F",
  "key6": "2TgN2rWd5DW6BpXHZRj9F2z5zfDL47ZHoh6v6LqLbUYgLzR4svHcXEFEua4bD4BuXJxh9o8KG1Nq3ycEaTaUMQc8",
  "key7": "2RJfThDExResQsQnXuw2FFMJ4NXzhFhNUr1ZDjxMam83bd4g3PrF3pgd3d6hreVQPqHAY4JXbdvVuT1Bi7Jnw3En",
  "key8": "H1AkGDXKjvAzinUyecbveBz77xhndezTSUFJvZtpxogAU6dts9hcHakztubYsHNEYQLLFWDi9SqA76162oMTH5z",
  "key9": "3vxvA5uX7dFYcGku1JF9JXV8uRi59Vzv3D83jtHUUaGGUGbs2JjJYV8aqJ3CwaVXbGgjDVpjgy5TUfPaY2VLsDqy",
  "key10": "4bKRAgoacqyQdWpjooYkwSjQBJtHFKqLRP3YG2gxykgzrpvSuh2p6ZfzncZZPTDPwdqkCiarEYNAHDWxisRTAHEp",
  "key11": "45zuTcjYRjDzqmpzbJqYq3XicUVeFgK6FHh3W5mLhFToy2tsoMqJpPBKomS7C8BpgUTtgKcVEUJFrYzF34QmpksJ",
  "key12": "5VeZNaXPzJYM3ZeqTBzjV4taTUZP5bgF6Vy4UVh7shTfQSEv6BUPqCjG9HVWHVv8iUWoiBDvCNtXS1Vj8b7fqRcr",
  "key13": "4ydJk1e9quqAYLfig9PDKNbqzRNANJrPJRYx8y7GHcjNUSLcSrawh3ChxSNrXXDu6wfCuq18bsMtWdmJSoWwFxZr",
  "key14": "3oWbNa4wRFS9FH3hP2Qc4MCc59AGazX1GT3hL3QAnc4aEB7x5TVLfBAKnYsiPXsWkNQTAwmbUKzSoYdPrRCYHHjk",
  "key15": "5wvQ4v4hYH1JHEVWYwbZoXSAFPKDfWecShk4qsAse1FcRfh5bvtiVHcr7rs94vUiY6s32CGXRLkofQyXHZzirg5D",
  "key16": "4CXWGRyCMZ85hc2m9Ge7W5tsjiAeBaLGWi5ebAsVrk3LsT5wGr5tRK8R2bEzd5W5pKphe27xMXqMDFxhESw1ikei",
  "key17": "4uASmFyVS1tVBbZ7K1zG79dEWHERwBJBbv77G5UGLiRWF8wHsL7MgbsnX6zAYv5wENJmWUXLxTwCmgnwjF5dB1QN",
  "key18": "4oJKQ3TVhsUHzg6FHMqoVWb6cDAXHLYKGid9BpdmTy9qNmDR6bwC3sVdGkokjhv9b33zk9D66epAgVp1S9Q5qmE7",
  "key19": "3RG1n3abCDdnPCzstZH7rTGWhTLoqxUFEdkS18kp4SJ2vSShfk87C11BF1rXhpbJYJERQo2JxMisBGTYivjdaLEk",
  "key20": "5krqu791U6NMirEdv8WnAQ2ophXxKeRUN1mhC9eejKGwCNH3cwSmoSCnwm9uTCTTRjbx79g4HW3zutcBvbDzfVCL",
  "key21": "NmtPHv5ViKZhFxXknneRfMLF2vShGnus8FyiNVNg9dLtSF4cvxiYF2o1m2G6ro6YYxcyDKN9KF28E9MHWpsxaie",
  "key22": "5bb5vjZwL9niqxr3npsrbQNa5drbeX8hYd9VFZofhy81z1no4ZDJC7TEigYBZEHi68gm1Bi7dA6RDVcEA4QfKos2",
  "key23": "3yGLbEQDArAtF9DkqTgCH9aPjfNjyJwfJcMY7NqMX9q19kzp7trep3MqE2rCZ1Xcc8L1xVgQvSJBtccezpf8MRpn",
  "key24": "499shpPNjtLjUQVZfAM1sgoRH1XNsbSws3XSia95FcDjX6eHPYVFXn2FR3SfDTe27RpfVs3ShLQgKgwf53yainxG",
  "key25": "4aXGk9dfGpCm3LrGuNAKAh2geAHUYWutCxHaea4eGed3vSDXHgXuXfYtQjveLYEE45ZL8BLD1a4EhxZLMr841mkQ",
  "key26": "439bdrmjJ9cVuTpKFaNDzc861w1Nh54e9Y8yup1opuZBMPc1fewRSFcs9zBXMDrBdbu1f2Ltn73gNarc7uRehsNA",
  "key27": "2Cg6TPQAQoBae96uRiUh6DrWpCNjy1xRZeARo8YEuJ5xHx5wdjQWxyvE77r5BPgi6egaWcit8eJwfKPo9YnwXdcC",
  "key28": "54wefpspm2KcDzkpZMqGjJokX7768Cv5QU7B5FFMGTcYVFLbfQuWFBfvHYoMtc9BJwgVLRzUbkA13FhFyQi2gxHs",
  "key29": "45corqvgoVH6Lbei1U1JbGZNkMbJCF4vCFm9hgLKtd93LvUBQKWunQ2qskJ1n5Bj3yDFTqmbFo3YjRBdUpCQocAm",
  "key30": "75VrshY45vzBkM6Nrf3NT3jdmbGp9KeemtohPFtHKwVghTDRT2gqb2sBRAEDz1VtWeGoCEtMUJN8ah4XDtHZkSU",
  "key31": "3vLrKm4kMqsDqpnknk5dDAGV2YoecGa6bMgaJjhVk3tHNc53ygURQVXnT7QCaFa3TKa7YRM23XRKxaYoiwDubt4U",
  "key32": "4idJnrp95tkwPZ8BmjvNVRKNh8RazVHA8V9Rw1mW9zm59G6Vtwo3iDw4yStJVn5dgWtnffzrfYfud6QhhSbv2jTm",
  "key33": "3dDgF9Mf43d2CEP86SeCQFNi1BG8WWPFgs2DkBaCtUyPX8QmjcZnocAPxfoaKE9nRGBXAU6ZUpbiiWTm4qTXTfoC",
  "key34": "5fW6ReJUEQTVyrGohSjs3JDUEsczQXbctSn2mw3mSaLGobz2cLrhirEVtzmnPmSrmXy6ASkMfmRJW7U8Dc3JxfUB",
  "key35": "3WF4E3PeEUNNzD8ivymWYb8Sszj8PtdHk1CtDGb5P1iYJFod1qW6u1GZHAnFtSyoaazXCR4mUisTVbEVaeMqRRZX",
  "key36": "2iCKe2sRAwmLNceJMcvodK5NQb7mGjVazm4hvcG86VxPZqtnTiecWqT6XU3DdezPB23KWMqYL94fQ6GYNaN9rdva",
  "key37": "3wCkbXSqbUcrHzECUABiY56oEZvn3sUAFVPgoC1uwtCBLgE6QBY36nVJD9KHp9m8SrdxaWjXABzntpta4MCyaj7W",
  "key38": "4sLNZ5k1atZMNpbHocy9aAjWVX2KiFDMhccmfcFg9Ncg3FW4trUyzPUB85H9MDqQoGvzV5mmrqT3qsCq1yALHeLy",
  "key39": "5Ux2oKE3APBckeGuWUkbvLEBGGSSCDkq3YF3kCd2SxcdrNgF7AbjYraqrF4cKYBu5jZ7u51sAPhMo2zLmH5ywA9s",
  "key40": "MgA1cqSxDSwDCBf4TdGiLAyJjVzHGsRB4q8JgXVXmJXYwE4P7S6QkC8mUhZaYRYbuAfQWbz5JzF3xvnQn3Jej7L",
  "key41": "e5CU37nLdPPDty5w8DNvhC9EcP765Y4jV3wGsESd91bzp7RW44J2kkKHDM622WznccFGiivX3UM18mYLyXPL6Qb",
  "key42": "5qbN24UM16Jp5zSegjniRBvZjSt5ZgGFPsESbFBmMD9wGN6cQReBrmZj5oZN5rY5VZbZgsREi859NfqpxMUjSK6j",
  "key43": "4sfghtpnf9HpZfqLWoRPD5rLNBzfeGA1Jh4ccrWhexKT9HniQaKKmV3PKXfhdXArqiPANUT5rPwaea9LCcpwJ8hK",
  "key44": "5r3FFjKDBrkqJrhhCzMSvi6R4rtxBayNVYaAPU4aDbyfTPkFAkBYB4RVGuWTvLsS4VA16xtfCybLXWpC1U6Zz3Fc",
  "key45": "DvwDwABkHiajvvTNp7dUPHFbCcUkddotHMePr6yNYiduaurQwrtyP1e6kZ3Pyt1KiP1Jb9qPhK2wbdNepwt2LN5"
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
